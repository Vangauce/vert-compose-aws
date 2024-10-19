"""
Este archivo define un conjunto de vistas para la gestión de usuarios
utilizando Django REST Framework y drf-spectacular.
"""

from django.contrib.auth import get_user_model
from drf_spectacular.utils import extend_schema
from rest_framework import mixins, status, viewsets
from rest_framework.decorators import action
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken

from .serializers import (
    UserChangePasswordErrorSerializer,
    UserChangePasswordSerializer,
    UserCreateErrorSerializer,
    UserCreateSerializer,
    UserCurrentErrorSerializer,
    UserCurrentSerializer,
)

# Obtiene el modelo de usuario configurado en el proyecto
User = get_user_model()


# Define un conjunto de vistas para la gestión de usuarios
class UserViewSet(
    mixins.CreateModelMixin,
    viewsets.GenericViewSet,
):
    # Define el queryset y el serializador por defecto
    queryset = User.objects.all()
    serializer_class = UserCurrentSerializer
    permission_classes = [IsAuthenticated]

    # Filtra el queryset para obtener solo el usuario actual
    def get_queryset(self):
        return self.queryset.filter(pk=self.request.user.pk)

    # Define los permisos en función de la acción
    def get_permissions(self):
        if self.action == "create":
            return [AllowAny()]
        return super().get_permissions()

    # Define el serializador en función de la acción
    def get_serializer_class(self):
        if self.action == "create":
            return UserCreateSerializer
        elif self.action == "me":
            return UserCurrentSerializer
        elif self.action == "change_password":
            return UserChangePasswordSerializer
        return super().get_serializer_class()

    # Extiende el esquema para la acción de crear usuario
    @extend_schema(
        responses={
            200: UserCreateSerializer,
            400: UserCreateErrorSerializer,
        }
    )
    def create(self, request, *args, **kwargs):
        return super().create(request, *args, **kwargs)

    # Extiende el esquema para la acción de obtener o actualizar el usuario actual
    @extend_schema(
        responses={
            200: UserCurrentSerializer,
            400: UserCurrentErrorSerializer,
        }
    )
    @action(["get", "put", "patch"], detail=False)
    def me(self, request, *args, **kwargs):
        if request.method == "GET":
            # Obtiene los datos del usuario actual
            serializer = self.get_serializer(self.request.user)
            return Response(serializer.data)
        elif request.method == "PUT":
            # Actualiza los datos del usuario actual (completo)
            serializer = self.get_serializer(
                self.request.user, data=request.data, partial=False
            )
            serializer.is_valid(raise_exception=True)
            serializer.save()
            return Response(serializer.data)
        elif request.method == "PATCH":
            # Actualiza los datos del usuario actual (parcial)
            serializer = self.get_serializer(
                self.request.user, data=request.data, partial=True
            )
            serializer.is_valid(raise_exception=True)
            serializer.save()
            return Response(serializer.data)

    # Extiende el esquema para la acción de cambiar la contraseña
    @extend_schema(
        responses={
            204: None,
            400: UserChangePasswordErrorSerializer,
        }
    )
    @action(["post"], url_path="change-password", detail=False)
    def change_password(self, request, *args, **kwargs):
        # Valida y cambia la contraseña del usuario actual
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        self.request.user.set_password(serializer.data["password_new"])
        self.request.user.save()

        return Response(status=status.HTTP_204_NO_CONTENT)

    # Define la acción para eliminar la cuenta del usuario actual
    @action(["delete"], url_path="delete-account", detail=False)
    def delete_account(self, request, *args, **kwargs):
        # Elimina el usuario actual
        self.request.user.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

    # Define la acción para cerrar sesión
    @action(
        ["post"], url_path="logout", detail=False, permission_classes=[IsAuthenticated]
    )
    def logout(self, request, *args, **kwargs):
        try:
            refresh_token = request.data["refresh_token"]
            token = RefreshToken(refresh_token)
            token.blacklist()

            return Response(status=status.HTTP_205_RESET_CONTENT)
        except Exception as e:
            return Response(status=status.HTTP_400_BAD_REQUEST)

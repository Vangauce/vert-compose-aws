"""Este archivo define un conjunto de vistas para la gestión de Comunidad, Vertiente, Kit y Datos utilizando Django REST Framework."""

from rest_framework import viewsets

from monitoreo.models import Comunidad, Datos, Kit, Vertiente

from .serializers import (
    ComunidadSerializer,
    DatosSerializer,
    KitSerializer,
    VertienteSerializer,
)


# Define un conjunto de vistas para la gestión de Comunidad
class ComunidadViewSet(viewsets.ModelViewSet):
    queryset = Comunidad.objects.all()
    serializer_class = ComunidadSerializer


# Define un conjunto de vistas para la gestión de Vertiente
class VertienteViewSet(viewsets.ModelViewSet):
    queryset = Vertiente.objects.all()
    serializer_class = VertienteSerializer


# Define un conjunto de vistas para la gestión de Kit
class KitViewSet(viewsets.ModelViewSet):
    queryset = Kit.objects.all()
    serializer_class = KitSerializer


# Define un conjunto de vistas para la gestión de Datos
class DatosViewSet(viewsets.ModelViewSet):
    queryset = Datos.objects.all()
    serializer_class = DatosSerializer

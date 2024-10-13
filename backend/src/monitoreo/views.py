from rest_framework import viewsets

from monitoreo.models import Comunidad, Datos, Kit, Vertiente
from monitoreo.serializers import (  # type: ignore
    ComunidadSerializer,
    DatosSerializer,
    KitSerializer,
    VertienteSerializer,
)


class ComunidadViewSet(viewsets.ModelViewSet):
    queryset = Comunidad.objects.all()
    serializer_class = ComunidadSerializer


class VertienteViewSet(viewsets.ModelViewSet):
    queryset = Vertiente.objects.all()
    serializer_class = VertienteSerializer


class KitViewSet(viewsets.ModelViewSet):
    queryset = Kit.objects.all()
    serializer_class = KitSerializer


class DatosViewSet(viewsets.ModelViewSet):
    queryset = Datos.objects.all()
    serializer_class = DatosSerializer

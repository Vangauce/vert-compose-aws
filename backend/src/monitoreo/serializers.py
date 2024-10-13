from rest_framework import serializers

from monitoreo.models import Comunidad, Datos, Kit, Vertiente


class ComunidadSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comunidad
        fields = "__all__"


class VertienteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vertiente
        fields = "__all__"


class KitSerializer(serializers.ModelSerializer):
    class Meta:
        model = Kit
        fields = "__all__"


class DatosSerializer(serializers.ModelSerializer):
    class Meta:
        model = Datos
        fields = "__all__"

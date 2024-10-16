from rest_framework.routers import DefaultRouter

from monitoreo.api import ComunidadViewSet, DatosViewSet, KitViewSet, VertienteViewSet

router = DefaultRouter()
router.register(r"comunidades", ComunidadViewSet)
router.register(r"vertientes", VertienteViewSet)
router.register(r"kits", KitViewSet)
router.register(r"datos", DatosViewSet)

urlpatterns = router.urls

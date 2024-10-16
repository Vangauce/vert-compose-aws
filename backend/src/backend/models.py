from django.contrib.auth.models import AbstractUser, Group
from django.db import models
from django.utils.translation import gettext_lazy as _

from monitoreo.models import Comunidad

from .choices import TIPO_CHOICES, gender_choices, rango_etario


class User(AbstractUser):
    created_at = models.DateTimeField(_("created at"), auto_now_add=True)
    modified_at = models.DateTimeField(_("modified at"), auto_now=True)

    tipo = models.CharField(
        max_length=20,
        choices=TIPO_CHOICES,
        null=True,
        verbose_name="Tipo",
        default="Usuario",
    )
    is_active = models.BooleanField(default=False)
    edad = models.CharField(
        choices=rango_etario, default="No informado", verbose_name="Rango etario"
    )
    comunidad = models.ForeignKey(
        Comunidad, on_delete=models.SET_NULL, null=True, blank=True
    )
    gender = models.CharField(
        choices=gender_choices, default="No informado", verbose_name="Sexo"
    )
    phone = models.CharField(max_length=15, null=True, verbose_name="Teléfono")

    class Meta:
        db_table = "users"
        verbose_name = _("user")
        verbose_name_plural = _("users")

    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)
        if self.tipo:
            group, created = Group.objects.get_or_create(name=self.tipo)
            self.groups.add(group)

    def __str__(self):
        return self.email if self.email else self.username


class Profile(models.Model):
    """
    Modelo de perfil que está relacionado uno a uno con el modelo User.
    """

    user = models.OneToOneField(User, on_delete=models.CASCADE)
    group = models.ForeignKey(Group, on_delete=models.CASCADE, default=1)
    token_app_session = models.CharField(
        max_length=240, null=True, blank=True, default=""
    )
    first_session = models.CharField(
        max_length=240, null=True, blank=True, default="Si"
    )

    objects = models.Manager()  # Add this line to ensure 'objects' manager exists

    class Meta:
        """
        Meta class for specifying model options.

        Attributes:
            ordering (list): Specifies the default ordering for the model's objects,
                             in this case, by the 'username' field of the related 'user' model.
        """

        ordering = ["user__username"]

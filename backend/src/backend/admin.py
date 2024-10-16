from django.contrib import admin
from django.contrib.auth.admin import GroupAdmin as BaseGroupAdmin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.contrib.auth.models import Group
from unfold.admin import ModelAdmin
from unfold.forms import AdminPasswordChangeForm, UserChangeForm, UserCreationForm

from .models import User

admin.site.unregister(Group)


"""
This module registers the User model with the Django admin interface and customizes its admin interface.

Classes:
    UserAdmin: Custom admin interface for the User model.

Attributes:
    form (UserChangeForm): Form used to change user details.
    add_form (UserCreationForm): Form used to create a new user.
    change_password_form (AdminPasswordChangeForm): Form used to change a user's password.
"""


@admin.register(User)
class UserAdmin(BaseUserAdmin, ModelAdmin):
    form = UserChangeForm
    add_form = UserCreationForm
    change_password_form = AdminPasswordChangeForm


@admin.register(Group)
class GroupAdmin(BaseGroupAdmin, ModelAdmin):
    pass

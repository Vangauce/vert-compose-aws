# Generated by Django 5.0.7 on 2024-10-12 23:18

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Comunidad',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=150, verbose_name='Nombre')),
                ('encargado', models.CharField(max_length=100, verbose_name='Encargado')),
                ('contacto_encargado', models.CharField(max_length=100, verbose_name='Contacto del encargado')),
                ('vertientes', models.PositiveIntegerField(blank=True, default=0, null=True)),
                ('ubicación', models.CharField(blank=True, max_length=200, null=True, verbose_name='Ubicación')),
                ('latitud', models.FloatField(blank=True, null=True)),
                ('longitud', models.FloatField(blank=True, null=True)),
            ],
            options={
                'verbose_name': 'Comunidad',
                'verbose_name_plural': 'Comunidades',
                'db_table': 'comunidad',
                'ordering': ['id'],
            },
        ),
        migrations.CreateModel(
            name='Vertiente',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=150, verbose_name='Nombre')),
                ('desc', models.CharField(blank=True, max_length=250, null=True, verbose_name='Descripcion')),
                ('ubicación', models.CharField(blank=True, max_length=200, null=True, verbose_name='Ubicación')),
                ('latitud', models.FloatField(blank=True, null=True)),
                ('longitud', models.FloatField(blank=True, null=True)),
                ('comunidad', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='monitoreo.comunidad')),
            ],
            options={
                'verbose_name': 'Vertiente',
                'verbose_name_plural': 'Vertientes',
                'db_table': 'vertiente',
                'ordering': ['id'],
            },
        ),
        migrations.CreateModel(
            name='Kit',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('modelo', models.IntegerField(default=0)),
                ('mac', models.CharField(blank=True, max_length=25, null=True, verbose_name='Direccion MAC')),
                ('is_active', models.BooleanField(default=False)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('modified_at', models.DateTimeField(auto_now=True)),
                ('vertiente', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='monitoreo.vertiente')),
            ],
            options={
                'verbose_name': 'Kit',
                'verbose_name_plural': 'Kits',
                'db_table': 'Kit',
                'ordering': ['id'],
            },
        ),
        migrations.CreateModel(
            name='Datos',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('caudal', models.FloatField(default=0)),
                ('pH', models.FloatField(default=0)),
                ('conductividad', models.FloatField(default=0)),
                ('turbiedad', models.FloatField(default=0)),
                ('temperatura', models.FloatField(default=0)),
                ('humedad', models.FloatField(default=0)),
                ('fecha', models.DateTimeField(auto_now=True)),
                ('mac', models.CharField(blank=True, max_length=25, null=True, verbose_name='Direccion MAC')),
                ('kit', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='monitoreo.kit')),
                ('vertiente', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='monitoreo.vertiente')),
            ],
            options={
                'verbose_name': 'Dato',
                'verbose_name_plural': 'Datos',
                'db_table': 'datos',
                'ordering': ['id'],
            },
        ),
    ]

from django.db import models

class Tesis(models.Model):
    titulo = models.CharField(max_length=255)
    alumno1 = models.CharField(max_length=100)
    alumno2 = models.CharField(max_length=100, blank=True, null=True)
    director = models.CharField(max_length=100)
    sinodal1 = models.CharField(max_length=100)
    sinodal2 = models.CharField(max_length=100, blank=True, null=True)

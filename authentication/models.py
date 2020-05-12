from django.contrib.auth.models import AbstractUser
from django.db import models

class CustomUser(AbstractUser):
    #This extends the user model with extra fields
    bio = models.TextField(max_length=500, blank=True)
    location = models.CharField(blank = True, max_length = 120)


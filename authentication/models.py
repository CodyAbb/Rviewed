from django.contrib.auth.models import AbstractUser
from django.db import models

class CustomUser(AbstractUser):
    USERNAME_FIELD = 'email'
    email = models.EmailField(('email address'), unique=True) # changes email to unique and blank to false
    REQUIRED_FIELDS = [] # removes email from REQUIRED_FIELDS
    #This extends the user model with extra fields
    bio = models.TextField(max_length=500, blank=True)
    location = models.CharField(blank = True, max_length = 120)


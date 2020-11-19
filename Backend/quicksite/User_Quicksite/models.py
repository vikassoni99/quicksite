from django.db import models
from datetime import date
from django.contrib.auth.models import User
# Create your models here.
# Create your models here.
class UserModel(models.Model):
    username = models.CharField(max_length=30,primary_key=True)
    password = models.CharField(max_length=30)
    start_date = models.DateField(default=date.today())
    end_date = models.DateField(default='')
    active = models.BooleanField(default=False)

    def __str__(self):
        return self.username
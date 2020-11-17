from django.shortcuts import render
from rest_framework import viewsets

from .serializers import UserSerializer
from .models import UserModel

# Create your views here.
class UserView(viewsets.ModelViewSet):
    serializer_class= UserSerializer
    queryset = UserModel.objects.all()
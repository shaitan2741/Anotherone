from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from .models import Test
from .serializers import UserSerializers, TestSerializers
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth.models import User
from .serializers import UserSerializers


class TestView(APIView):
    permission_classes = [IsAuthenticated]
    authentication_classes =(TokenAuthentication,)
    
    serializer_class = TestSerializers

    def get(self,request):
        articles = Test.objects.all()
        serializer = TestSerializers(articles, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self,request):
        data = request.data
        serializer = self.serializer_class(data=data)
        if serializer.is_valid():
            serializer.save()
            serialized_data = serializer.data
            return Response(serialized_data, status = status.HTTP_201_CREATED)
        return Response(serializer.error_messages, status = status.HTTP_400_BAD_REQUEST)
        


class UserView(APIView):
    serializer_class = UserSerializers
    def get(self,request):
        users = User.objects.all()
        serializer = UserSerializers(users, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self,request):
        data = request.data
        serializer = self.serializer_class(data=data)
        if serializer.is_valid():
            serializer.save()
            serialized_data = serializer.data
            return Response(serialized_data, status = status.HTTP_201_CREATED)
        return Response(serializer.error_messages, status = status.HTTP_400_BAD_REQUEST)
        


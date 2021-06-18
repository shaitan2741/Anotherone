from rest_framework import serializers
from django.contrib.auth.models import User
from rest_framework.authtoken.views import Token
from .models import Test


class TestSerializers(serializers.ModelSerializer):
    class Meta:
        model = Test
        fields = ("id", "data")


class UserSerializers(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ("id","username", "password")

        extra_kwargs = {'password':{
            'write_only':True,
            'required':True,
            'style':{'input_type': 'password'}
        }}

    def create(self,validated_data):
        user =  User.objects.create_user(**validated_data)
        Token.objects.create(user=user)
        return user






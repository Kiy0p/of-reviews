from django.contrib.auth.models import User
from rest_framework import serializers


class UserSerializer(serializers.ModelSerializer):
    username = serializers.CharField(max_length=50, required=True)
    email = serializers.EmailField(required=True)
    password = serializers.CharField(write_only=True, required=True)

    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'password')

    def validate_username(self, value):
        username_already_exists = User.objects.filter(username=value).exists()
        username_too_short = len(value) < 5

        if username_too_short:
            raise serializers.ValidationError("Name must be at least 5 characters long.")
        if username_already_exists:
            raise serializers.ValidationError("Username already taken.")
        return value

    def validate_password(self, value):
        if len(value) < 5:
            raise serializers.ValidationError("Password must be at least 8 characters long.")
        return value

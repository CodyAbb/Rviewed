from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_jwt.settings import api_settings
from rest_framework import serializers
from .models import CustomUser

# class CustomUserSerializer(serializers.ModelSerializer):
#     email = serializers.EmailField(
#         required=True
#     )
#     first_name = serializers.CharField(max_length=20)
#     last_name = serializers.CharField(max_length=20)
#     username = serializers.CharField()
#     password = serializers.CharField(min_length=8, write_only=True)

#     class Meta:
#         model = CustomUser
#         fields = ('email', 'username', 'password', 'first_name', 'last_name')
#         extra_kwargs = {'password': {'write_only': True}}

#     def create(self, validated_data):
#         password = validated_data.pop('password', None)
#         instance = self.Meta.model(**validated_data)  # as long as the fields are the same, we can just use this
#         if password is not None:
#             instance.set_password(password)
#         instance.save()
#         return instance

class GetFullCustomUser(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ('id', 'email', 'first_name', 'last_name', 'username', 'location', 'bio')

class UserSerializerWithToken(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)
    token = serializers.SerializerMethodField()

    def get_token(self, object):
        jwt_payload_handler = api_settings.JWT_PAYLOAD_HANDLER
        jwt_encode_handler = api_settings.JWT_ENCODE_HANDLER
        payload = jwt_payload_handler(object)
        token = jwt_encode_handler(payload)
        return token

    def create(self, validated_data):
        user = CustomUser.objects.create(
            email = validated_data['email'],
            username = validated_data['username'],
            first_name = validated_data['first_name'],
            last_name = validated_data['last_name']
        )
        user.set_password(validated_data['password'])
        user.save()
        return user
    
    class Meta:
        model = CustomUser
        fields = ('token', 'email', 'username', 'password', 'first_name',
        'last_name')

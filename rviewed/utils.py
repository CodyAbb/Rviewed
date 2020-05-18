from authentication.serializers import GetFullCustomUser

def custom_jwt_response_handler(token, user=None, request=None):
    return {
        'token' : token,
        'user' : GetFullCustomUser(user, context={'request' : request}).data
    }
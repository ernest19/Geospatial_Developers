# python object to JSON
# JSON to python objects 
# Save data to db 
# Update DB 
# Delete 
# Validation

from rest_framework.serializers import ModelSerializer,Serializer,CharField
from .models import Todo 

#incoming data = POST, PUT
#GET - LIST, DETAIL

class TodoListSerializer(ModelSerializer):

    class Meta:
        model = Todo 
        fields = "__all__" #("task","completed")
        # exclude = ("field","field2")
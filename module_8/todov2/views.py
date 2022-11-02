
from rest_framework.viewsets import ModelViewSet
from todov2.models import Todo
from todov2.serializers import TodoListSerializer
from rest_framework.response import Response
from rest_framework.status import HTTP_200_OK
# Create your views here.


#CRUD 
#Create, Update, Delete, Detail, List

class TodoListViewset(ModelViewSet):
    serializer_class = TodoListSerializer
    queryset = Todo.objects.all()
    # def list(self, request):

    #     todo_list = self.get_queryset()
    #     serialized_todo_list = self.serializer_class(todo_list,many=True)

    #     return Response(data={
    #         "message":"Todolist fetched successfully",
    #         "data":serialized_todo_list.data
    #     },status=HTTP_200_OK)


    # def create(self, request):
    #     pass

    # def retrieve(self, request, pk=None):
    #     pass

    # def update(self, request, pk=None):
    #     pass

    # def partial_update(self, request, pk=None):
    #     pass

    # def destroy(self, request, pk=None):
    #     pass


# from todo.views import TodoDetailAPI, TodoListAPI, TodoViewSet 

# urlpatterns = [
#     path('',TodoListAPI.as_view()),
#     path('<int:todo_id>',TodoDetailAPI.as_view())
# ]


#routers 
from rest_framework.routers import DefaultRouter
from todov2.views import TodoListViewset

router = DefaultRouter()
router.register('', TodoListViewset, basename='todo-list')
urlpatterns = router.urls
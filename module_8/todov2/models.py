from django.db import models
# import uuid 
# Create your models here.


class Todo(models.Model):
    # id_ = models.UUIDField(primary_key=True,unique=True, default=uuid.uuid4())
    task = models.CharField(max_length=100,db_index=True,help_text='The todo task')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    completed = models.BooleanField(default=False, help_text="The status of the task")

    class Meta:
        verbose_name = "Todo List"
        verbose_name_plural = 'Todo Lists'

    def __str__(self) -> str:
        return self.task
    # default='' null=True, blank=True i will, db_index     
from django.db import models
from django.contrib.auth.models import User
import uuid

# Create your models here.
class PasswordReset(models.Model):
    user = models.ForeignKey(User, on_delete = models.CASCADE)
    reset_id = models.UUIDField(default=uuid.uuid4, unique=True, editable =False)
    created_when = models.DateTimeField(auto_now_add= True)
    
    def __str__(self):
        return f"Password reset for {self.user.username} at {self.created_when }"

class Product(models.Model):
    name = models.CharField(max_length=100,default ="")
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=1)
    image = models.ImageField(upload_to='products/', blank=True, null=True)
    contact= models.CharField(max_length=15, default="")   
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.name} - {self.price} - {self.contact}"
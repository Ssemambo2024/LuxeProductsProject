from django.contrib import admin
from .models import PasswordReset
from .models import Product 

# Register your models here.
admin.site.register(PasswordReset)
admin.site.register([
    Product
    ]) 

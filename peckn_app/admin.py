from django.contrib import admin
from .models import Contact, Order, Product

admin.site.register([Contact, Order, Product])
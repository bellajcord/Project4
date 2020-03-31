from django.contrib import admin
from .models import CustomerContact, Order, ProductList

admin.site.register([CustomerContact, Order, ProductList])
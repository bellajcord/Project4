from django.contrib import admin
from .models import CustomerContact, Order, Product

admin.site.register([CustomerContact, Order, Product])
from rest_framework import viewsets

from .serializer import OrderSerializer, ProductSerializer, CustomerContactSerializer

from .models import Order, Product, CustomerContact


class OrderView(viewsets.ModelViewSet):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer

class ProductView(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer


class CustomerContactView(viewsets.ModelViewSet):
    queryset = CustomerContact.objects.all()
    serializer_class = CustomerContactSerializer
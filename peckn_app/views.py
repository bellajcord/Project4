from rest_framework import viewsets

from .serializers import OrderSerializer, ProductListSerializer, CustomerContactSerializer

from .models import Order, ProductList, CustomerContact


class OrderView(viewsets.ModelViewSet):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer

class ProductListView(viewsets.ModelViewSet):
    queryset = ProductList.objects.all()
    serializer_class = ProductListSerializer


class CustomerContactView(viewsets.ModelViewSet):
    queryset = CustomerContact.objects.all()
    serializer_class = CustomerContactSerializer
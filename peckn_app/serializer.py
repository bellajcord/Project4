from rest_framework import serializers

from .models import ProductList, CustomerContact, Order

class ProductListSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductList
        fields = ('id', 'sample_img', 'matierial_input', 'material_quantity' )

class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = ('id', 'customer_name', 'product', 'dimensions', 'color', 'order_date', 'due_date', 'cost', 'deposit')

class CustomerContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomerContact
        fields = ('id', 'customer_name', 'phone_number', 'customer_address', 'order_history')
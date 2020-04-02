from rest_framework import serializers

from .models import Product, Contact, Order

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ('id', 'name', 'description', 'sample_img', 'material1', 'material_quantity1', 'material2', 'material_quantity2', 'material3', 'material_quantity3', 'material4', 'material_quantity4', 'material5', 'material_quantity5', 'material6', 'material_quantity6' )

class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = ('id', 'customer_name', 'product', 'dimensions', 'color', 'order_date', 'due_date', 'cost', 'deposit')

class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = ('id', 'customer_name', 'phone_number', 'customer_address', 'order_history')
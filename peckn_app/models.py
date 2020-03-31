from django.db import models

class Order(models.Model):
    customer_name: models.Charfield(max_length=255)
    product: models.CharField(max_length=400)
    dimensions: models.CharField(max_length=200)
    color: models.Charfield(max_length=200)
    order_date:
    due_date:
    cost:
    deposit:

    def __str__(self):
        return self.customer_name

class CustomerContact(models.Model):
    customer_name: models.CharField(max_length=200)
    phone_number:
    customer_address:
    order_history:

    def __str__(self):
        return self.customer_name

class ProductList (self):
    input:


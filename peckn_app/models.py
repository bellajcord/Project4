from django.db import models



class Order(models.Model):
    customer_name: models.CharField(max_length=255)
    product: models.CharField(max_length=400)
    dimensions: models.CharField(max_length=200)
    color: models.CharField(max_length=200)
    order_date: models.DateField()
    due_date: models.DateField()
    cost: models.CharField(max_length=200)
    deposit: models.CharField(max_length=200)

    def __str__(self):
        return self.customer_name

class CustomerContact(models.Model):
    customer_name: models.CharField(max_length=200)
    phone: models.CharField(blank=True, help_text='Contact phone number')
    customer_address: models.CharField(max_length=250)
    order_history: models.CharField(max_length=400)

    def __str__(self):
        return self.customer_name

class ProductList(models.Model):
    sample_img: models.CharField(max_length=400)
    material_input: models.CharField(max_length=250)
    material_quantity: models.CharField(max_length=250)

    def __str__(self):
        return self.sample_img


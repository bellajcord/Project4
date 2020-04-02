from django.db import models



class Order(models.Model):
    name: models.CharField(max_length=255)
    product: models.CharField(max_length=400)
    dimensions: models.CharField(max_length=200)
    color: models.CharField(max_length=200)
    order_date: models.DateField()
    due_date: models.DateField()
    cost: models.CharField(max_length=200)
    deposit: models.CharField(max_length=200)

    def __str__(self):
        return self.customer_name

class Contact(models.Model):
    name: models.CharField(max_length=200)
    phone: models.CharField(blank=True, help_text='Contact phone number')
    customer_address: models.CharField(max_length=250)
    order_history: models.CharField(max_length=400)

    def __str__(self):
        return self.customer_name

class Product(models.Model):
    name: models.CharField(max_length=200)
    description: models.CharField(max_length=400)
    sample_img: models.CharField(max_length=400)
    material1: models.CharField(max_length=250)
    material_quantity1: models.CharField(max_length=250)
    material2: models.CharField(max_length=250)
    material_quantity2: models.CharField(max_length=250)
    material3: models.CharField(max_length=250)
    material_quantity3: models.CharField(max_length=250)
    material4: models.CharField(max_length=250)
    material_quantity4: models.CharField(max_length=250)
    material5: models.CharField(max_length=250)
    material_quantity5: models.CharField(max_length=250)
    material6: models.CharField(max_length=250)
    material_quantity6: models.CharField(max_length=250)

    def __str__(self):
        return self.sample_img


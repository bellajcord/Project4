# Generated by Django 3.0.4 on 2020-04-02 18:45

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Contact',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('phone', models.CharField(blank=True, help_text='Contact phone number', max_length=20)),
                ('customer_address', models.CharField(max_length=250)),
                ('order_history', models.CharField(max_length=400)),
            ],
        ),
        migrations.CreateModel(
            name='Order',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('product', models.CharField(max_length=400)),
                ('dimensions', models.CharField(max_length=200)),
                ('color', models.CharField(max_length=200)),
                ('order_date', models.DateField()),
                ('due_date', models.DateField()),
                ('cost', models.CharField(max_length=200)),
                ('deposit', models.CharField(max_length=200)),
            ],
        ),
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('description', models.CharField(max_length=400)),
                ('sample_img', models.CharField(max_length=400)),
                ('material1', models.CharField(max_length=250)),
                ('material_quantity1', models.CharField(max_length=250)),
                ('material2', models.CharField(max_length=250)),
                ('material_quantity2', models.CharField(max_length=250)),
                ('material3', models.CharField(max_length=250)),
                ('material_quantity3', models.CharField(max_length=250)),
                ('material4', models.CharField(max_length=250)),
                ('material_quantity4', models.CharField(max_length=250)),
                ('material5', models.CharField(max_length=250)),
                ('material_quantity5', models.CharField(max_length=250)),
                ('material6', models.CharField(max_length=250)),
                ('material_quantity6', models.CharField(max_length=250)),
            ],
        ),
    ]

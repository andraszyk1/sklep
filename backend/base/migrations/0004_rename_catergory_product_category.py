# Generated by Django 4.1.1 on 2022-09-18 21:40

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0003_product_image'),
    ]

    operations = [
        migrations.RenameField(
            model_name='product',
            old_name='catergory',
            new_name='category',
        ),
    ]
from django.urls import path, include
from . import views
from rest_framework import routers


router = routers.DefaultRouter()
router.register('orders', views.OrderView)
router.register('products', views.ProductView)
router.register('contacts', views.ContactView)


urlpatterns = [
    path('', include(router.urls))
]
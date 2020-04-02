from django.urls import path, include
from . import views
from rest_framework import routers


router = routers.DefaultRouter()
router.register('order', views.OrderView)
router.register('Product', views.ProductView)
router.register('CustomerContact', views.CustomerContactView)


urlpatterns = [
    path('', include(router.urls))
]
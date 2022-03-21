from django.urls import include, path
from django.contrib import admin
from . import views
from home.views import HomeView, CategoryView

urlpatterns = [
    path('', HomeView.as_view(), name='home'),
    path('home/category/<int:category_id>', CategoryView.as_view(), name='category')
]
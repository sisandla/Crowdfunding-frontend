from django.shortcuts import render, get_object_or_404
from campaign.models import Campaign, Category
from django.db.models import Avg
from django.views.generic import View

# Create your views here.
class HomeView(View):
    def get(self, request, *args, **kwargs):
        latest_campaigns = Campaign.objects.order_by('-creation_date')[:8]
        featured_campaigns = Campaign.objects.filter(is_featured=1)
        categories = Category.objects.all()
        highest_rated_campaigns = Campaign.objects.annotate(
        avg_rate=Avg('ratings__value')).order_by('-avg_rate')[:5]
        context = {
            'highest_rated_campaigns': highest_rated_campaigns,
            'latest_campaigns': latest_campaigns, 
            'featured_campaigns': featured_campaigns,
            'categories': categories
        }

        return render(request, 'home/index.html', context)

class CategoryView(View):
    def get(self, request, *args, **kwargs):
        categories = Category.objects.all()
        category = get_object_or_404(Category, id=kwargs.get('category_id'))
        campaigns = Campaign.objects.filter(category=kwargs.get('category_id'))
        context = {
            "campaigns": campaigns,
            "category": category, 
            "categories": categories
        }

        return render(request, 'home/category.html', context)


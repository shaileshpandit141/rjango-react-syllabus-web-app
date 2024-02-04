from django.views.generic.base import TemplateView
from django.http import JsonResponse


# Define IndexView for serving the frontent build app

class IndexView(TemplateView):
    template_name = 'index.html'


def testMessage(request):
    return JsonResponse(
        {
            'id': 1,
            'testMessage': 'Hello! Developer, Django React connection successfully joined together. Now you create a RESTful API for your Django React full stack web application.'
        }
    )

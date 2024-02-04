from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status


# Importing necessary models.

from .models import (
    Syllabus,
    Module,
    SubModule,
)


# Importing necessary serializers.

from .serializers import (
    SyllabusSerializer,
    ModuleSerializer,
    SubModuleSerializer,
)


# Define SyllabusView to share syllabus content.

@api_view(['GET'])
def syllabusView(request):
    data_list = Syllabus.objects.all()
    serialize_data = SyllabusSerializer(data_list, many=True)
    return Response(serialize_data.data, status=status.HTTP_200_OK)


# Define moduleView to share module content.

@api_view(['GET'])
def moduleView(request, syllabus_id):
    data_list = Module.objects.filter(syllabus=syllabus_id)
    serialize_data = ModuleSerializer(data_list, many=True)
    return Response(serialize_data.data, status=status.HTTP_200_OK)


# Define subModuleView to share Sub-Module content.

@api_view(['GET'])
def subModuleView(request, module_id):
    data_list = SubModule.objects.filter(module=module_id)
    serialize_data = SubModuleSerializer(data_list, many=True)
    return Response(serialize_data.data, status=status.HTTP_200_OK)

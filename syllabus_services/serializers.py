from rest_framework.serializers import ModelSerializer


# Importing necessary models.

from .models import (
    Syllabus,
    Module,
    SubModule,
)


# Define Serializers to serialize all Syllabus Content Model.

class SyllabusSerializer(ModelSerializer):
    class Meta:
        model = Syllabus
        fields = "__all__"


# Define Serializers to serialize all Module Content Model.
        
class ModuleSerializer(ModelSerializer):
    class Meta:
        model = Module
        fields = "__all__"


# Define Serializers to serialize all Sub-Module Content Model.

class SubModuleSerializer(ModelSerializer):
    class Meta:
        model = SubModule
        fields = "__all__"

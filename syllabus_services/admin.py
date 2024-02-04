from django.contrib import admin


# Importing necessary Models.

from .models import (
    Syllabus,
    Module,
    SubModule,
)


# Register your models here.

model_list = [
    Syllabus,
    Module,
    SubModule,
]


# Registering all models into Admin section. 

for model in model_list:
    admin.site.register(model)

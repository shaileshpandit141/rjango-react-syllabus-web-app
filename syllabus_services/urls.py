from django.urls import path


# Importing necessary views.

from .views import (
    syllabusView,
    moduleView,
    subModuleView,
)


# Define all urls-end-points.

urlpatterns = [
    path("syllabus/", syllabusView),
    path("syllabus/<int:syllabus_id>/modules/", moduleView),
    path("syllabus/modules/<int:module_id>/sub-modules/", subModuleView),
]

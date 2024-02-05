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
    path("modules/<int:syllabus_id>/", moduleView),
    path("sub-modules/<int:module_id>/", subModuleView),
]

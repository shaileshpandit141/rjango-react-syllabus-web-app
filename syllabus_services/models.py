from django.db import models


# Define Model for all Syllabus Content.

class Syllabus(models.Model):
    name = models.CharField(db_column="syllabus_name",
                            max_length=50, blank=False, null=False)
    description = models.TextField(db_column="syllabus_description", null=True)
    logo = models.ImageField(db_column="syllabus_logo",
                             upload_to='syllabus_logo', default=None)
    filter_tag = models.CharField(db_column='filter_tag', max_length=50, null=True)
    dateTime = models.DateTimeField(
        db_column="created_date_time", auto_now=True)

    def __str__(self) -> str:
        return self.name


# Define Model for all Syllabus Modeule Content.

class Module(models.Model):
    syllabus = models.ForeignKey(Syllabus, on_delete=models.CASCADE)
    name = models.CharField(db_column="module_name",
                            max_length=50, blank=False, null=False)
    dateTime = models.DateTimeField(
        db_column="created_date_time", auto_now=True)

    def __str__(self) -> str:
        return self.name


# Define Model for all Syllabus Modeule Sub-Module Content.

class SubModule(models.Model):
    module = models.ForeignKey(Module, on_delete=models.CASCADE)
    name = models.CharField(db_column="sub_module_name", max_length=50)
    dateTime = models.DateTimeField(
        db_column="created_date_time", auto_now=True)

    def __str__(self) -> str:
        return self.name

from django.db import models

# Create your models here.
class Test(models.Model):
    data = models.TextField()

    def __str__(self):
        return self.data[:10]
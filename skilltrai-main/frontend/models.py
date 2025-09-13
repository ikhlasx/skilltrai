from django.db import models


class WebinarDate(models.Model):
    date = models.DateField()
    time_start = models.TimeField()
    time_end = models.TimeField()
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return f"{self.date.strftime('%B %d, %Y')} - {self.time_start.strftime('%I:%M %p')} to {self.time_end.strftime('%I:%M %p')}"


class Registration(models.Model):
    EXPERIENCE_CHOICES = [
        ('beginner', 'Beginner'),
        ('intermediate', 'Intermediate'),
        ('advanced', 'Advanced'),
    ]

    COURSE_CHOICES = [
        ('design', 'Design & Digital Marketing'),
        ('ai-dev', 'AI Developer'),
        ('ai-eng', 'AI Engineer'),
        ('data', 'Data Analysis'),
        ('robotics', 'Robotics and IoT'),
    ]

    # Personal Information
    full_name = models.CharField(max_length=100)
    email = models.EmailField()
    phone = models.CharField(max_length=20)
    education = models.CharField(max_length=200, blank=True, null=True)

    # Course Information
    course_interest = models.CharField(max_length=20, choices=COURSE_CHOICES)
    experience = models.CharField(max_length=20, choices=EXPERIENCE_CHOICES, default='beginner')
    goal = models.TextField(blank=True, null=True)

    # Webinar Dates
    available_dates = models.ManyToManyField(WebinarDate)

    # Registration Information
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    is_confirmed = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.full_name} - {self.get_course_interest_display()}"
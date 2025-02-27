from django.contrib import admin
from .models import WebinarDate, Registration


class WebinarDateAdmin(admin.ModelAdmin):
    list_display = ('date', 'time_start', 'time_end', 'is_active')
    list_filter = ('is_active', 'date')
    search_fields = ('date',)
    ordering = ('date', 'time_start')


class RegistrationAdmin(admin.ModelAdmin):
    list_display = ('full_name', 'email', 'phone', 'course_interest', 'experience', 'created_at', 'is_confirmed')
    list_filter = ('course_interest', 'experience', 'is_confirmed', 'created_at')
    search_fields = ('full_name', 'email', 'phone')
    filter_horizontal = ('available_dates',)
    readonly_fields = ('created_at', 'updated_at')
    fieldsets = (
        ('Personal Information', {
            'fields': ('full_name', 'email', 'phone', 'education')
        }),
        ('Course Details', {
            'fields': ('course_interest', 'experience', 'goal')
        }),
        ('Webinar Availability', {
            'fields': ('available_dates',)
        }),
        ('Status', {
            'fields': ('is_confirmed', 'created_at', 'updated_at')
        }),
    )

    def get_queryset(self, request):
        """Order registrations by creation date (newest first)"""
        queryset = super().get_queryset(request)
        return queryset.order_by('-created_at')


# Register the models with their custom admin classes
admin.site.register(WebinarDate, WebinarDateAdmin)
admin.site.register(Registration, RegistrationAdmin)
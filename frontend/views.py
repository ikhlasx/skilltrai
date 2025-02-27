from django.shortcuts import render, redirect
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
from django.contrib import messages
from django.core.mail import send_mail
from django.conf import settings


def home(request):
    return render(request, 'index.html')


def courses(request):
    return render(request, 'courses.html')


def trainers(request):
    return render(request, 'trainers.html')


def events(request):
    return render(request, 'events.html')


def register(request):
    """
    View to handle the registration form.
    For the React implementation, we'll use a template that loads the React app.
    The actual form submission will be handled by a separate API endpoint.
    """
    return render(request, 'register.html')


@csrf_exempt
def register_api(request):
    """
    API endpoint to handle form submissions from the React component.
    """
    if request.method == 'POST':
        try:
            # Parse the JSON data from the request
            data = json.loads(request.body)

            # Basic validation
            required_fields = ['fullName', 'email', 'phone', 'courseInterest', 'webinarDates', 'agreeToTerms']
            for field in required_fields:
                if field not in data or not data[field]:
                    return JsonResponse({'success': False, 'error': f'Missing required field: {field}'}, status=400)

            # In a real application, you would save to the database here using the Registration model
            # For example:
            # registration = Registration(
            #     full_name=data['fullName'],
            #     email=data['email'],
            #     phone=data['phone'],
            #     education=data.get('education', ''),
            #     course_interest=data['courseInterest'],
            #     experience=data.get('experience', 'beginner'),
            #     goal=data.get('goal', '')
            # )
            # registration.save()

            # For webinar dates, you would query the WebinarDate model and add them to the registration
            # For example:
            # for date_id in data['webinarDates']:
            #     try:
            #         webinar_date = WebinarDate.objects.get(id=date_id)
            #         registration.available_dates.add(webinar_date)
            #     except WebinarDate.DoesNotExist:
            #         pass

            # Optionally send a confirmation email
            # send_confirmation_email(data['email'], data['fullName'])

            # Return success response
            return JsonResponse({'success': True, 'message': 'Registration successful!'})

        except json.JSONDecodeError:
            return JsonResponse({'success': False, 'error': 'Invalid JSON'}, status=400)
        except Exception as e:
            return JsonResponse({'success': False, 'error': str(e)}, status=500)

    # Return method not allowed for non-POST requests
    return JsonResponse({'success': False, 'error': 'Method not allowed'}, status=405)


def send_confirmation_email(email, name):
    """
    Helper function to send a confirmation email to the registrant.
    """
    subject = 'SkillTrai Program Registration Confirmation'
    message = f"""
    Hello {name},

    Thank you for registering for the SkillTrai program! We've received your registration and are excited to have you join us.

    Our team will be in touch with you shortly with more information about the webinar sessions and next steps.

    If you have any questions in the meantime, please don't hesitate to contact us at support@skilltrai.com.

    Best regards,
    The SkillTrai Team
    """

    try:
        send_mail(
            subject,
            message,
            settings.DEFAULT_FROM_EMAIL,
            [email],
            fail_silently=False,
        )
    except Exception as e:
        # Log the error, but don't stop the registration process
        print(f"Error sending confirmation email: {str(e)}")
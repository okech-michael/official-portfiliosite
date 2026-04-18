from django.shortcuts import render, redirect
from django.contrib import messages


def home(request):
    return render(request, 'home.html')


def skills(request):
    return render(request, 'skills.html')


def education(request):
    return render(request, 'education.html')


def projects(request):
    return render(request, 'projects.html')


def contact(request):
    if request.method == 'POST':
        name    = request.POST.get('name', '').strip()
        email   = request.POST.get('email', '').strip()
        message = request.POST.get('message', '').strip()

        if name and email and message:
            # --- Email sending (configure when ready) ---
            # from django.core.mail import send_mail
            # send_mail(
            #     subject=f'Portfolio Contact from {name}',
            #     message=f'From: {name} <{email}>\n\n{message}',
            #     from_email=email,
            #     recipient_list=['okechmichael2004@gmail.com'],
            # )
            messages.success(request, "Message sent! I'll get back to you soon.")
        else:
            messages.error(request, 'Please fill in all fields.')

        return redirect('contact')

    return render(request, 'contact.html')
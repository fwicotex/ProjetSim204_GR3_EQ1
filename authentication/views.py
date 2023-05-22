from django.shortcuts import render, redirect  
from django.http import HttpResponse
from django.contrib.auth import login, authenticate, logout
from django.contrib.auth.decorators import login_required
from django.contrib.auth.forms import UserCreationForm

from .forms import CreateUserForm


# Create your views here.
def signup(request):
    if request.user.is_authenticated:
        return redirect('/accueil')
    else:
        form = CreateUserForm()
        if request.method == 'POST':
            form = CreateUserForm(request.POST)
            if form.is_valid():
                form.save()
                user = form.cleaned_data.get('username')
                return redirect('signin')

        else:
            form = CreateUserForm()
    context = {'form':form}
    return render(request, "authentication/index.html", context)


def signin(request):
    if request.method =='POST':
        username = request.POST.get('username')
        password = request.POST.get('password')

        user = authenticate(request, username=username, password=password)

        if user is not None:
            login(request, user)
            return redirect('accueil')


    context={}
    return render(request, "authentication/signin.html", context)


@login_required(login_url='/signin')
def propos(request):
    context={}
    return render(request, "authentication/propos.html", context)

@login_required(login_url='/signin')
def accueil(request):
    context={}
    return render(request, "authentication/accueil.html", context)

def signout(request):
    logout(request)
    return redirect('/signin')


@login_required(login_url='/signin')
def jeuxcouleur(request):
    context={}
    return render(request,"authentication/jeux_couleur.html", context)

@login_required(login_url='/signin')
def jeuximage(request):
    context={}
    return render(request,"authentication/jeux_image.html", context)


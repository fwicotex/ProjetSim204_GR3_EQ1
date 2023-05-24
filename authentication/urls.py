from django.contrib import admin
from django.urls import path, include
from . import views
from django.contrib.staticfiles.urls import staticfiles_urlpatterns

urlpatterns = [
    path('', views.signup, name = 'signup'),  

    path('signin', views.signin, name="signin"),
    path('propos', views.propos, name="propos"),
    path('accueil', views.accueil, name="accueil"),
    path("accounts/", include("django.contrib.auth.urls")),
    path('signout/', views.signout, name="signout"),
    path('jeuxcouleur', views.jeuxcouleur, name ='jeuxcouleur'),
    path('jeuximage', views.jeuximage, name ='jeuximage'),

]




urlpatterns += staticfiles_urlpatterns()
from django.urls import path

from .views import ProductViewSet, UserAPIView

urlpatterns = [
    path('products', ProductViewSet.as_view({
        'get': 'list',
        'post': 'create'
    })),
    path('products/<str:pk>', ProductViewSet.as_view({
        'get': 'retrieve',
        'put': 'update',
        'delete': 'destroy'
    })),
    path('products/<str:pk>/like', ProductViewSet.as_view({
        'post': 'like'
    })),
    path('user', UserAPIView.as_view())
]
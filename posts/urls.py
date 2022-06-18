from django.urls import path
#from posts.views import PostList, PostDetail, UserList, UserDetail
from rest_framework.routers import SimpleRouter
from posts.views import UserViewSet, PostViewSet, TableView, LandingPageView, JavaScriptFirst


router = SimpleRouter()
router.register('users', UserViewSet, basename='users')
router.register('', PostViewSet, basename='posts')

urlpatterns = [
    path('table/', TableView.as_view(), name='table'),
    path('landing_page/', LandingPageView.as_view(), name='landing_page'),
    path('java_script/', JavaScriptFirst.as_view(), name='java_script'),
] + router.urls


"""
urlpatterns = [
    path('users/', UserList.as_view()),
    path('users/<int:pk>/', UserDetail.as_view()),
    path('<int:pk>/', PostDetail.as_view()),
    path('', PostList.as_view()),
]"""

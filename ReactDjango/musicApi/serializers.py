from rest_framework import serializers
from .models import Room

class RoomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Room
        fields = ('id', 'code', 'host', 'guest_can_pause', 'votes_to_skip', 'created_at')

class CreateRoomSerializer(serializers.ModelSerializer):
    # create-room {votes_to_skip: 3, guest_can_pause: true}
    class Meta:
        model = Room
        fields = ('guest_can_pause', 'votes_to_skip')
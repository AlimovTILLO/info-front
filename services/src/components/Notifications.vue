<template>
  <div class="notifications">
    <notification v-for="notification in notifications" :key="notification.id" :notification="notification" @close-notification="removeNotification" transition="fade">
    </notification>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import Notification from './Notification'

export default {
  name: 'Notifications',
  components: {
    'notification': Notification
  },
  computed: {
    ...mapState({
      notifications: state => state.alert.notifications || []
    })
  },
  methods: {
    ...mapMutations('alert', {
      removeNotification: 'remove'
    })
  }
}
</script>

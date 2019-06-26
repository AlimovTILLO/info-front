<template>
  <div v-if="notification.message"
    class="notification callout animated"
    :class="notification.type ? notification.type : 'secondary'"
    transition="fade"
  >
    <button
      @click="triggerClose(notification)"
      class="close-button"
      aria-label="Close alert"
      type="button"
    >
      <span aria-hidden="true">&times;</span>
    </button>
    <h5>{{notification.message}}</h5>
    <p>{{notification.message}}</p>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'Notification',
  props: ['notification'],
  data () {
    return { timer: null }
  },
  mounted () {
    let timeout = this.notification.hasOwnProperty('timeout')
      ? this.notification.timeout
      : true
    if (timeout) {
      let delay = this.notification.delay || 4000
      this.timer = setTimeout(
        function () {
          this.triggerClose(this.notification)
        }.bind(this),
        delay
      )
    }
  },

  methods: {
    ...mapMutations('alert', {
      removeNotification: 'remove'
    }),
    triggerClose (notification) {
      clearTimeout(this.timer)
      this.removeNotification(notification)
    }
  }
}
</script>

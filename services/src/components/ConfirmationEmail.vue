<template>
  <p>{{ сonfirm }}</p>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'ConfirmationEmail',
  computed: {
    ...mapState({
      сonfirm: state => state.items.сonfirm
    })
  },
  created () {
    this.confirmEmail(this.$route.params.email_code)
  },
  methods: {
    ...mapActions('items', {
      confirmEmail: 'confirmEmail'
    })
  }
}
</script>

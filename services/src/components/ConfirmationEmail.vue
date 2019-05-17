<template>
  <p>{{ сonfirm }}</p>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'ConfirmationEmail',
  computed: {
    ...mapState({
      сonfirm: state => state.account.сonfirm
    })
  },
  created () {
    this.ConfirmationEmail()
  },
  methods: {
    ...mapActions('account', {
      confirmEmail: 'confirmEmail'
    }),
    ConfirmationEmail () {
      this.confirmEmail(this.$route.params.email_code)
    }
  }
}
</script>

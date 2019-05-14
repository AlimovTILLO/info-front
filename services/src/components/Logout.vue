<template>
    <div class="filter">
        <div class="container">
            <div class="row">
                        <div class="col-lg-10 col-md-9">
                            <div class="captionWrap">
                                <h2 class="caption">Вы успешно вышли из системы!</h2>
                            </div>
                        </div>
                    </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  beforeMount () {
    this.logout()
  },
  methods: {
    ...mapActions('account', ['login', 'logout'])
  }
}
</script>

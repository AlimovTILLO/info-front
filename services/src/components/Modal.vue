<template>
  <transition>
    <div class="registration blurEffect">
        <div class="registration__modalWindow">
            <div class="closeBtn" @click="close"><i class="fal fa-times"></i></div>
            <div class="registration__logoSide" id="block1">
                <h2>Ishu Info</h2>
                <p>Worldwide. 24/7. Simple. Private.</p>
            </div>
            <div class="registration__registrationSide" id="block2">
                <nav>
                    <div class="nav nav-tabs" id="nav-tab" role="tablist">
                      <a class="nav-item nav-link" v-on:click="makeActive('signIn')"
                            id="signIn-tab" data-toggle="tab" href="#signIn" role="tab" aria-controls="signIn"
                            aria-selected="true">Вход</a>
                            <a class="nav-item nav-link" v-on:click="makeActive('registration')" id="registration-tab"
                            data-toggle="tab" href="#registration" role="tab" aria-controls="registration"
                            aria-selected="false">Регистрация</a></div>
                </nav>
                <div class="tab-content" id="nav-tabContent">
                    <div class="tab-pane fade show active" v-show="isActiveTab('signIn')" id="signIn" role="tabpanel" aria-labelledby="signIn-tab">
                        <login/>
                    </div>
                    <div class="tab-pane fade show active" v-show="isActiveTab('registration')" id="registration" role="tabpanel" aria-labelledby="registration-tab">
                      <registration/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </transition>
</template>

<script>
import Login from './Login'
import Registration from './Registration'
import { mapActions } from 'vuex'

export default {
  name: 'Modal',
  components: {
    'login': Login,
    'registration': Registration
  },
  data () {
    return {
      choice: 'signIn'
    }
  },
  methods: {
    ...mapActions('account', ['login']),
    close () {
      this.$emit('close')
    },
    makeActive (val) {
      this.choice = val
    },
    isActiveTab (val) {
      return this.choice === val
    }
  }
}
</script>

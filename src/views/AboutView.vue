<template>
  <div class="about">
    <h1>This is an about page</h1>
    <ButtonBasic title="Click here" :buttonFunc="sayHello" />
  </div>
</template>

<script lang="js">
import ButtonBasic from '@/components/ButtonBasic.vue';

export default {
    name: "AboutVue",
    components: { ButtonBasic },
    methods: {
      sayHello(){
        alert('Hello')
      }
    }
}
</script>
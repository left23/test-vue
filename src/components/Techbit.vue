<template>
    <article>
        <p>{{ msg }}</p>
        <p>{{ reversedMsg }}</p>
    </article>
</template>

<script>
export default {
  name: 'Techbit',
  data () {
    return {
      msg: 'Welcome to Tech',
      number: null
    }
  },
  computed: {
    reversedMsg: function () {
      return this.msg.split('').reverse().join('');
    }
  }
}
</script>

<style scoped>

</style>

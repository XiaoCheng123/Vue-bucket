<template>
    <div>
      <h1>我是父组件</h1>
      <child-component></child-component>
    </div>
</template>

<script>
  import ChildComponent from'@/components/ChildComponent'
  export default{
    data() {
      return {
        a: 2,
        name: '父节点:'
      }
    },
    beforeCreate() {
      var str = 'beforeCreate'
      str = '父节点:' + str
      str = str.padStart(30, '=')
      str = str.padEnd(40, '=')
      console.log(str)
      console.log('method:' + this.logLife)
      console.log('data:' + this.$data)
      console.log('data(a):' + this.a)
    },
    created() {
      this.logLife(this.name + 'created')
    },
    beforeMount() {
      this.logLife(this.name + 'beforeMount')
    },
    mounted() {
      this.logLife(this.name + 'mounted')
    },
    beforeUpdate() {
      this.logLife(this.name + 'beforeUpdate')
    },
    updated() {
      this.logLife(this.name + 'updated')
    },
    activated() {
      this.logLife(this.name + 'activated')
    },
    methods: {
      logLife(str) {
        str = str.padStart(30, '=')
        str = str.padEnd(40, '=')
        console.log(str)
        console.log(this.$el)
        console.log('method:' + this.logLife)
        console.log('data:' + this.$data)
        console.log('data(a):' + this.a)
      }
    },
    components: {
      ChildComponent
    }
  }
</script>

<style scoped>
</style>

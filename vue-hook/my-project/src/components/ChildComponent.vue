<template>
    <div>
      <el-card class="box-card">
        <div v-for="o in 4" :key="o" class="text item">
          {{'列表内容 ' + o }}
        </div>
      </el-card>
    </div>
</template>

<script>
  export default{
    data() {
      return {
        a: 1,
        name: '子节点:',
        myConsole: []
      }
    },
    beforeCreate() {
      var str = 'beforeCreate'
      str = '子节点:' + str
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
    }
  }
</script>

<style scoped>
  .text {
    font-size: 14px;
  }

  .item {
    padding: 18px 0;
  }

  .box-card {
    margin: auto;
    width: 480px;
  }
</style>

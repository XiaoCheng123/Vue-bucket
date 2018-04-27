<template>
  <div>
    <vue-slider
      v-bind="slider"
      v-model="slider.value"
      @drag-start="onDragStart"
      @drag-end="onDragEnd"
      @callback="onDrag"
      @mousedown="onMousedown"
    >
    </vue-slider>
  </div>
</template>

<script>
  import vueSlider from 'vue-slider-component';

  export default {
    components: {
      vueSlider
    },
    methods: {
      onMousedown() {
        console.log('mousedown')
      },
      onDragStart() {
        console.log('end')
        console.log('start')
      },
      onDrag() {
        console.log(this.slider.value)
      },
      onDragEnd() {
        console.log('end')
      }
    },
    data () {
      return {
        value: {
          value: 12
        },
        slider: {
          value: [
            190,
            415
          ],
          width: "100%",
          height: 8,
          dotSize: 16,
          min: 0,
          max: 500,
          disabled: false,
          show: true,
          useKeyboard: true,
          tooltip: "always",
          formatter: "¥{value}",
          bgStyle: {
            "backgroundColor": "#fff",
            "boxShadow": "inset 0.5px 0.5px 3px 1px rgba(0,0,0,.36)"
          },
          tooltipStyle: {
            "backgroundColor": "#666",
            "borderColor": "#666"
          },
          processStyle: {
            "backgroundColor": "#999"
          }
        }
      }
    }
  }
</script>

<style scoped>
</style>

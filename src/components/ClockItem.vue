<template>
  <div class="clock-item">
    <div class="clock-item-left">
      <h3 class="clock-title">Đồng hồ {{ id }}</h3>
      <div class="clock-number">{{ number }}</div>
    </div>
    <!-- end todo-item-left -->
  </div>
  <!-- end todo-item -->
</template>

<script>
export default {
  name: "clock-item",
  props: {
    clock: {
      type: Object,
      required: true
    }
  },
  data() {
    console.log(this.clock);
    return {
      id: this.clock.id,
      number: Math.round(this.clock.number * 1000)/1000,
      timestamp: this.clock.timeUpdated
    };
  },
  created() {
    // eventBus.$on("pluralize", this.handlePluralize);
  },
  beforeDestroy() {
    // eventBus.$off("pluralize", this.handlePluralize);
  },
  watch: {},
  directives: {
    focus: {
      inserted: function(el) {
        el.focus();
      }
    }
  },
  methods: {}
};
</script>

<style lang="scss">
.clock-item{
  width: 50%;
  margin-bottom: 30px;
}
.clock-title {
  width: 100%;
}
.clock-number {
  display: inline-block;
  font-family: 'digital-clock-font';
  font-size: 35px;
  border: 1px solid grey;
  padding: 3px 20px;
}

@font-face{
 font-family:'digital-clock-font';
 src: url('../assets/fonts/digital-7.ttf');
}
</style>
<template>
  <div>
      <Header/>
      <slot/>
      <div>Footer</div>
  </div>
</template>

<script lang = "ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import Header from '../components/Header.vue';

@Component({
  components: {
    Header
  }
})
export default class DefaultLayout extends Vue {
}
</script>

<style>
</style>
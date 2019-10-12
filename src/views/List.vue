<template>
  <DefaultLayout>
    <div class="content_de">
      <div>{{markList.title}}</div>
      <div class="mark_content" v-html="markDown"></div>
      <div>{{markList.date}}</div>
    </div>
  </DefaultLayout>
</template>

<script lang = "ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import DefaultLayout from "../layout/DefaultLayout.vue";
import axios from "axios";
import { Markdown } from "../interfaces/interface";
import * as marked from "marked";

@Component({
  components: {
    DefaultLayout
  }
})
export default class Home extends Vue {
  private markList: Markdown = {
    title: "",
    contents: "",
    date: ""
  };

  private get markDown() {
    return marked(this.markList.contents);
  }

  private async getData(): Promise<void> {
    const result: any = await axios.get(
      "http://15.164.228.146:8000/api/article"
    );
    this.markList = result.data.data.articles;
    console.log(this.markList);
  }
  mounted() {
    this.getData();
  }
}
</script>

<style scoped>
</style>
<template>
  <DefaultLayout>
    <div class="content_de">
      <div>{{markList.title}} 씨발.</div>
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
      "http://13.209.117.5:8000/test/article"
    );
    this.markList = result.data.result.articles;
  }
  mounted() {
    this.getData();
  }
}
</script>

<style scoped>
</style>
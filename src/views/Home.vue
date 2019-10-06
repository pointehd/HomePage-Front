<template>
  <DefaultLayout>
    <CardList :datas="da" />
  </DefaultLayout>
</template>

<script lang = "ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import DefaultLayout from "../layout/DefaultLayout.vue";
import axios from "axios";
import { Article } from "../interfaces/interface";
import CardList from "../components/CardList.vue";

interface Score {
  [name: string]: number;
}

@Component({
  components: {
    DefaultLayout,
    CardList
  }
})
export default class Home extends Vue {
  private da: Array<Article> = [];

  mounted() {
    this.getData();
  }

  private async getData(): Promise<void> {
    const result: any = await axios.get(
      "http://13.124.180.130:8000/api/articles"
    );
    this.da = result.data.data.articles;
  }
}
</script>

<style>
</style>
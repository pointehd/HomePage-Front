<template>
  <li class="cards__item" @click="other_link(aa.link)">
    <div class="card">
      <img :src="aa.imgSrc" />
      <div class="card__content">
        <div class="card__title">{{aa.title}}</div>
        <p class="card__text">{{ aa.contents }}</p>
        <div class="align_right">{{aa.date}}</div>
        <!-- <button class="btn btn--block card__btn">Button</button> -->
      </div>
    </div>
  </li>
</template>

<script lang = "ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { Article } from "../interfaces/interface";

@Component
export default class Card extends Vue {
  @Prop()
  public aa: Article;

  mounted() {
    console.log(this.aa);
  }
  private other_link(link : string) :void{
    window.open(link, '_blank'); 
  }
}
</script>

<style>
</style>
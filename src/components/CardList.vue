<template>
    <div>
        <h2>카드리스트</h2>
        <ul class="cards">
            <Card v-for="(da, index) in datas" :key="index" :aa="da"/>      
        </ul>
    </div>
</template>

<script lang = "ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import Card from "./Card.vue";
import { Article } from "../interfaces/interface";
import axios from "axios";

@Component({
    components:{
        Card
    }
})
export default class CardList extends Vue {
    @Prop()
    private datas : Array<Article>;

    mounted(){
        console.log(this.datas);
    }
}
</script>

<style>
</style>
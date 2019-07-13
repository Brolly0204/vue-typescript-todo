<template>
  <div class="about">
    <a-button @click="back">返回</a-button>
    <p 
      v-for="(item, index) in list"
      :key="`todo_item_${index}`"
      :style="{textDecoration: item.complete ? 'line-through' : ''}"
    >
      {{item.text}}
    </p>
  </div>
</template>

<script lang="ts">
 import { Component, Vue } from 'vue-property-decorator'
 import { State } from 'vuex-class'

 @Component({
   name: 'Show',
 })
 export default class Show extends Vue {
   @State('todoList') public list!: object[]
   public back() {
     this.$router.back()
   }
 }
</script>
<template>
  <div class="todo">
    <ul>
      <todo-item 
        v-for="(item, index) in list"
        :key="index"
        :item="item"
        :index="index"
        :edittingIndex="edittingIndex"
        @on-save="handleSave"
        @on-edit="handleEdit"
        @on-cancel="handleCancel"
        @on-complete="handleComplete"
      >
      </todo-item>
    </ul>
    <a-button @click="turn">转到</a-button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TodoItem from '@/components/todo-item'
import { State, Mutation } from 'vuex-class'

type UpdateListType = (arg: object) => void
type HnadleCompleteType = (index: number) => void

@Component({
  name: 'TodoPage',
  components: {
    TodoItem,
  },
})

export default class Todo extends Vue {
  @State('todoList') public list!: object[];

  @Mutation('updateTodoList') public updateList!: UpdateListType

  @Mutation('todoItemComplate') public handleComplete!: HnadleCompleteType

  public edittingIndex = -1;
  public handleSave({ index, content }: {index: number, content: string}) {
    this.updateList({ index, content })
    this.handleCancel()
  }
  public handleEdit(index: number) {
    this.edittingIndex = index
  }
  public handleCancel() {
    this.edittingIndex = -1
  }
  // public handleComplete(index: number) {
  //   this.todoComplete(index)
  // }
  public turn() {
    this.$router.push({
      name: 'show',
    })
  }
}
</script>

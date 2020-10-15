<template>
  <v-app>
    <v-main>
      <TodoList />
    </v-main>
  </v-app>
</template>

<script>
import TodoList from "./views/TodoList";
export default {
  name: 'App',
  components: {
    TodoList,
  },
  data: () => ({
    //
  }),
};
</script>

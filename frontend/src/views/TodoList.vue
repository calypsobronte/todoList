<template>
  <v-container fill-height>
    <v-row align="center" justify="center">
      <v-card class="py-2" width="700" elevation="18" color="primary">
        <!-- List -->
        <v-card-title class="text-center d-flex flex-column">
          <h3 class="text-h3 py-3 white--text">Lista de tareas</h3>

          <v-row no-gutters>
            <!-- columnas filtradoras todos-->
            <v-col class="px-1">
              <v-btn @click="changeStatus('all')" color="secondary" class="text-capitalize">
                <v-icon left>
                  mdi-view-list
                </v-icon>
                Todos
              </v-btn>
            </v-col>
            <!-- columnas filtradoras tareas-->
            <v-col class="px-1">
              <v-btn @click="changeStatus('task')" color="secondary" class="text-capitalize">
                <v-icon left color="error">
                  mdi-window-close
                </v-icon>
                Tareas
              </v-btn>
            </v-col>
            <!-- columnas filtradoras completas-->
            <v-col class="px-1">
              <v-btn @click="changeStatus('taskIncomplete')" color="secondary" class="text-capitalize">
                <v-icon left color="success">
                  mdi-check
                </v-icon>
                Completas
              </v-btn>
            </v-col>
          </v-row>

        </v-card-title>


        <v-card-text class="px-0">
          <v-data-table v-if="status === 'all'" :items="apiTodoList" hide-default-footer dense>
            <template v-slot:item="{item}">
              <tr>
                <td>
                  <v-checkbox v-model="item.isComplete" @click="changeTodoList(item)"></v-checkbox>
                </td>
                <td>
                  <div v-if="item.isComplete" class="text-decoration-line-through">
                    {{ item.nameTask }}
                  </div>
                  <div v-else>
                    {{ item.nameTask }}
                  </div>
                </td>
                <td>
                  <v-icon @click="deleteTodoList(item._id)" color="error">mdi-delete</v-icon>
                </td>
              </tr>
            </template>
          </v-data-table>

          <v-data-table v-if="status === 'task'" :items="task" hide-default-footer dense>
            <template v-slot:item="{item}">
              <tr>
                <td>
                  <v-checkbox v-model="item.isComplete" @click="changeTodoList(item)"></v-checkbox>
                </td>
                <td>
                  <div v-if="item.isComplete" class="text-decoration-line-through">
                    {{ item.nameTask }}
                  </div>
                  <div v-else>
                    {{ item.nameTask }}
                  </div>
                </td>
                <td>
                  <v-icon @click="deleteTodoList(item._id)" color="error">mdi-delete</v-icon>
                </td>
              </tr>
            </template>
          </v-data-table>

          <v-data-table v-if="status === 'taskIncomplete'" :items="taskIncomplete" hide-default-footer dense>
            <template v-slot:item="{item}">
              <tr>
                <td>
                  <v-checkbox v-model="item.isComplete" @click="changeTodoList(item)"></v-checkbox>
                </td>
                <td>
                  <div v-if="item.isComplete" class="text-decoration-line-through">
                    {{ item.nameTask }}
                  </div>
                  <div v-else>
                    {{ item.nameTask }}
                  </div>
                </td>
                <td>
                  <v-icon @click="deleteTodoList(item._id)" color="error">mdi-delete</v-icon>
                </td>
              </tr>
            </template>
          </v-data-table>

          <!-- new task  -->
          <v-row>
            <v-col sm="8" class="py-0 pr-0">
              <v-text-field v-model="nameTask" label="Agregar Tarea" solo dense></v-text-field>
            </v-col>

            <v-col sm="4" class="py-0 pl-0 mb-1">
              <v-btn @click="createTodoList" tile color="secondary" block class="text-capitalize">
                <v-icon left>
                  mdi-plus
                </v-icon>
                Agregar
              </v-btn>
            </v-col>
          </v-row>

          <p>Tareas : {{ countTask  }} / {{ totalTask }}</p>
        </v-card-text>

      </v-card>
    </v-row>
  </v-container>
</template>

<script>
import { getTodoListApi, updateTodoListApi, deleteTodoListApi, createTodoListApi } from '../services/todoList/index.js';

export default {
    name: 'Task',

    data() {
        return {
            apiTodoList: [],
            nameTask: "",
            status: "all"
        };
    },
    created(){
      this.getTodoList();
    },
    beforeMount() {
      this.getTodoList();
    },
    computed: {
      countTask (){
        let counTaskLength = this.apiTodoList.filter((e) => e.isComplete === true);
        return counTaskLength.length;
      },
      totalTask () {
        return this.apiTodoList.length;
      },
      task() {
        return this.apiTodoList.filter((e) => e.isComplete === false);
      },
      taskIncomplete() {
        return this.apiTodoList.filter((e) => e.isComplete === true);
      }
    },
    methods: {
        getTodoList(){
            getTodoListApi().then(todoList => {
                this.apiTodoList = todoList;
                console.log(this.apiTodoList);
            })
        },
        mountDataServer(){
          this.getTodoList();
        },
        changeTodoList(item){
            updateTodoListApi({_id: item._id, isComplete: item.isComplete});
            console.log(item);
        },
        createTodoList(){
          if (!this.nameTask == ""){
            createTodoListApi({nameTask: this.nameTask}).then(response => { console.log('response', response); this.nameTask = ""; this.getTodoList();});
          }
        },
        deleteTodoList(item){
            deleteTodoListApi(item).then(response => { console.log('response', response);this.getTodoList();});
        },
        changeStatus(status) {
          this.status = status;
        }
    }
};
</script>

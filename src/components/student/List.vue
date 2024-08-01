<script setup>
import {
  EyeIcon,
  PencilIcon,
  TrashIcon,
  UserPlusIcon,
} from "@heroicons/vue/24/solid";
import { onMounted } from "vue";
import { RouterLink } from "vue-router";
import useStudent from "../../composables/studentApi";

const {
  studentData,
  error,
  statusCode,
  delError,
  getAllStudent,
  destroyStudent,
} = useStudent();
onMounted(getAllStudent);

const deleteStudent = async (id) => {
  if (!window.confirm("Are you sure ?")) {
    return;
  }
  await destroyStudent(id);
  await getAllStudent();
};
</script>

<template>
  <div>
    <div class="bg-orange-600 p-4 grid grid-cols-9">
      <div class="col-span-6 md:col-span-8">
        <h1 class="text-3xl font-bold text-center mt-3 text-white">
          Student List
        </h1>
      </div>
      <div class="text-right">
        <RouterLink :to="{ name: 'add' }">
          <button
            class="text-white text-md bg-green-700 hover:bg-green-800 font-medium rounded-lg p-2 px-6"
          >
            <UserPlusIcon /> Add
          </button>
        </RouterLink>
      </div>
    </div>
    <div
      class="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg font-medium"
      role="alert"
      v-if="error"
    >
      Oops! Error encountered: {{ error.message }}
    </div>
    <table class="table-auto w-full" v-else-if="studentData">
      <thead class="bg-slate-600 text-white">
        <tr>
          <th class="py-1">No</th>
          <th class="py-1">Name</th>
          <th class="py-1">Email</th>
          <th class="py-1">Action</th>
        </tr>
      </thead>
      <tbody class="text-center">
        <tr v-for="({ id, stuname, email }, i) in studentData" :key="id">
          <td class="py-2">{{ ++i }}</td>
          <td class="py-2">{{ stuname }}</td>
          <td class="py-2">{{ email }}</td>
          <td class="py-2">
            <RouterLink :to="{ name: 'view', params: { id: id } }">
              <EyeIcon class="text-blue-500 h-6 w-6 inline" />
            </RouterLink>
            <RouterLink :to="{ name: 'edit', params: { id: id } }">
              <PencilIcon class="text-emerald-500 h-6 w-6 inline mx-6" />
            </RouterLink>
            <TrashIcon
              class="text-red-500 h-6 w-6 inline cursor-pointer"
              @click="deleteStudent(id)"
            />
          </td>
        </tr>
      </tbody>
    </table>
    <div
      class="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg font-medium"
      role="alert"
      v-if="delError"
    >
      Unable to Delete Student: {{ delError.message }}
    </div>
    <div
      class="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg font-medium"
      role="alert"
      v-if="statusCode === 200"
    >
      Student Deleted Successfully
    </div>
    <!-- add a footer fixed in the botton-->
    <footer class="bg-slate-600 text-white p-4 text-center">
      <p>
        <span class="text-2xl font-bold">
          empresa demo  -  
          <span class="text-emerald-500">
            &nbsp;  email@email.com
            <div class="text-2xl">
              <a
                href="https://www.linkedin.com/in/shubham-kumar-212683191
                  "
              >
                <img
                  src="https://img.icons8.com/fluent/48/000000/linkedin.png"
                  width="25"
                  height="25"
                />
              </a>
              <a href="https://github.com/shubham-kumar1997">
                <img
                  src="https://img.icons8.com/fluent/48/000000/github.png"
                  width="25"
                  height="25"
                />
              </a>
              <a href="https://twitter.com/shubhamkumar1997">
                <img
                  src="https://img.icons8.com/fluent/48/000000/twitter.png"
                  width="25"
                  height="25"
                />
              </a>
            </div>
          </span>
        </span>
      </p>
    </footer>
  </div>
</template>

<style scoped>
/* add a margind in between the table and the heading */
.table-auto {
  margin-top: 2rem;
}
table {
  width: 90%;
  margin: 0 auto;
}

/* add border to the table and make the rows  grey / white in odd rows** */
table,
tr,
td {
  border: 1px solid #ddd;
  padding: 10px;
  background-color: #f5f5f5;
}

/* in the body add 1o px in the top, rigt, left, botton of the page*/
body {
  margin: 10px;
}

/* formata o footer para ficar os links ( social media  ) na horizontal make all at once*/
footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #bce066;
  display: flex;
  justify-content: center;
}

/* add a hover effect to the social media icons */
footer a:hover {
  opacity: 0.8;
}

.text-2xl{
  margin-left: 10px;
  margin-right: 10px;
  font-size: 2rem;
  font-weight: 700;
  display: 	flex;
 


}

.text-2xl a{
  color: #fff;
  text-decoration: none;
  padding: 5px;

}

</style>

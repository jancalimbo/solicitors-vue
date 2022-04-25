<template>
  <div>
      <h1>List of Students</h1>
      <hr>
      <div class="row">
          <div class="col-md-3">
              <h4>Student Entry</h4>
              <form @submit.prevent="addStudent()">
                  <div class="mb-3">
                      <label for="lastName">Last Name</label>
                      <input type="text" v-model="student.lastName" class="form-control">
                  </div>
                  <div class="mb-3">
                      <label for="firstName">First Name</label>
                      <input type="text" v-model="student.firstName" class="form-control">
                  </div>
                  <div class="mb-3">
                      <label for="program">Program</label>
                      <input type="text" v-model="student.program" class="form-control">
                  </div>
                  <div class="mb-3">
                      <label for="year">Year</label>
                      <input type="text" v-model="student.year" class="form-control">
                  </div>
                  <button type="submit" class="btn btn-primary">Save Student</button>
              </form>
          </div>
          <div class="col-md-9">
              <table class="table table-striped">
                <thead>
                    <tr>
                        <th>Last Name</th>
                        <th>First Name</th>
                        <th>Program</th>
                        <th>Year</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="stud in students" :key="stud.id">
                        <td>{{stud.lastName}}</td>
                        <td>{{stud.firstName}}</td>
                        <td>{{stud.program}}</td>
                        <td>{{stud.year}}</td>
                    </tr>
                </tbody>
            </table>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            student: {
                id:null,
                lastName: '',
                firstName: '',
                program: '',
                year: null
            },
            students: [
                {
                    id: 1,
                    lastName: "Flavian",
                    firstName: "Giovanni",
                    program: "BSIT",
                    year: 2
                },
                {
                    id: 2,
                    lastName: "Gregorio",
                    firstName: "Francisco",
                    program: "BSCRIM",
                    year: 2
                },
                {
                    id: 1,
                    lastName: "Davide",
                    firstName: "Jennifer",
                    program: "BSHM",
                    year: 2
                },
                {
                    id: 1,
                    lastName: "Taravena",
                    firstName: "Panfilo",
                    program: "BSA",
                    year: 2
                },
            ]
        }
    },
    methods: {
        addStudent() {
            this.students.push(this.student)
            this.student = {
                id:null,
                lastName: '',
                firstName: '',
                program: '',
                year: null
            }
        }
    }
}
</script>

<style>
</style>
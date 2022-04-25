<template>
  <div>
      <h1>List of Solicitors</h1>
      <hr>
      <div class="row">
          <div class="col-md-3">
              <h4>Solicitors List</h4>
              
          </div>
          <div class="col-md-9">
              <table class="table table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Adress</th>
                        <th>Amount</th>
                        <th>Message</th>
                        <th>...</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="sol in solicitors-lists" :key="sol.id">
                        <td>{{sol.name}}</td>
                        <td>{{sol.address}}</td>
                        <td>{{sol.amount}}</td>
                        <td>{{sol.message}}</td>
                        <td>
                            <router-link :to="{name: 'solicitors-lists', params: {id: sol.id}}" class="btn btn-primary btn-sm">
                                Open
                            </router-link>
                        </td>
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
            solicitor: {
                id:null,
                name: '',
                address: '',
                amount: '',
                message: '',
            },
            solicitors: []
        }
    },
    methods: {
        addSolicitor() {
        
        },
        getData() {
                fetch("http://127.0.0.1:8002/api/solicitors-list")
                .then(res => res.json())
                .then((data)=>this.solicitors= data)
                .catch((err)=>console.log(err));
            }
        },
        mounted() {
            this.getData()
    }
}
</script>

<style>

</style>
<template>
  <div>
      <h1>List of Students</h1>
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
                        <th>Address</th>
                        <th>Amount</th>
                        <th>Message</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="solicitors in solicitorsList" :key="solicitors.id">
                      
                        
                    </tr>
                </tbody>
            </table>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  props:['id'],
    data() {
        return {
            solicitorsList: [
              
            ],
        }
    },
    methods: {
        getData(){
          fetch("http://127.0.0.1:8002/api/solicitors-list" +this.id)
          .then(data=> data.json())
          .then(data=> thi.solicitorsList = data )
          .catch((err) => console.log(err));
        }
    },

    mounted(){
      this.getData();
    }
}
</script>

<style>

</style>
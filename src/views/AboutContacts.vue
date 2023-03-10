<template>
    <div id="contacts-container" class="container text-center">
        <div class="row">
          <div class="col d-flex justify-content-center">
            Visualize
          </div>
          <div class="col d-flex justify-content-center">
            <input type="text" v-model="filterName" @input="()=>loadContacts()" />
          </div>
          <div class="col d-flex justify-content-center">
            <div class="btn-group" role="group" aria-label="Basic outlined example">
              <button type="button" @click="()=>toggleModeGrid()" class="btn btn-outline-primary" :class="{'active' : isModeGrid}">Grid</button>
              <button type="button" @click="()=>toggleModeGrid()" class="btn btn-outline-primary" :class="{'active' : !isModeGrid}">Card</button>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col d-flex justify-content-center" v-if="isModeGrid">
            <div class="table-responsive my-5" style="width: 100%;">
                <TableComponent :fields='fields' :itemsData ="contacts" :rowFunc="goToDetails"></TableComponent>
            </div>
          </div>
          <div class="col d-flex justify-content-center " v-else>
            <div class="row">
              <div v-for="contact in contacts" :key="contact.id" class=" d-flex justify-content-center col-sm-4 col-sx-1 g-4">
                  <CardBasic  
                  :buttonFunc="()=>goToDetails(contact.id)"
                  buttonTitle="Go to contact details"
                  :contact="contact"
                />
              </div>
            </div>
            
          </div>
        </div>
    </div>
  </template>
  
  <script lang="js">
  // @ is an alias to /src
  import TableComponent from '@/components/TableComponent.vue'
  import CardBasic from '@/components/CardBasic.vue'

  import {getContacts} from '../api/axios.js'
  export default {
    name: 'AboutContacts',
    components: {
        TableComponent,
        CardBasic
    },
    data(){
    return{
      isModeGrid: true,
      filterName: '',
      fields : [
        'id','name','gender', 'species', 'status'
      ],
      contacts: []
    }
  },
  methods: {
    toggleModeGrid(){
      this.isModeGrid = !this.isModeGrid
    },
    goToDetails(contactId){
      console.log('go')
      this.$router.push({ name: 'user', params: { id: contactId }})
    },
    async loadContacts(){
      this.contacts = await getContacts({name: this.filterName})
      console.log({c: this.contacts})
    }
  },
  async mounted() {
    await this.loadContacts()
  }
}
</script>
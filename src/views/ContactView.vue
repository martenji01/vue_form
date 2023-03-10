<template>
    <div di="contact-container" class="container text-center">
        <div class="row">
            <div class="col d-flex justify-content-center" v-if="contact">
            
                <CardBasic v-if="contact.id > 0" :contact="contact" :button-func="getLocationFromContact" button-title="Go to location"/>

                 <!--

<CardBasic v-if="id > 0" :contact="contact" :button-func="getLocationFromContact" :button-title="'Go to ' +origin.name"/>

                 -->
            </div>

            <div class="col d-flex justify-content-center" v-if="location">
                <div class="card" style="width: 18rem;">
                    <div class="card-body" >
                        <h5 class="card-title">Location</h5>
                        <p class="card-text">{{ location.name }}</p>
                        <p class="card-text">{{ location.dimension }}</p>
                        <p class="card-text">{{ location.type }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script lang="js">
import _ from 'lodash'
//import CardBasic from '@/components/CardBasic.vue'
import { getLocation, getContactFromId } from '../api/axios.js'
export default {
    name: 'ContactVue',
    components: {
        
    },
    data(){
        return{
            id: 0,
            contact: null,
            location: null
        }
    },
    methods:{
        async getLocationFromContact(){
            const location = await getLocation(this.origin.url)
            if(location)
                this.location = location
        },
        async getContact(){
            const contact = await getContactFromId(this.id)
            this.contact = contact
        }
    },
    async mounted(){
        
        this.id =_.get(this.$route.params, 'id', 0)
        await this.getContact()
    }
}
</script>
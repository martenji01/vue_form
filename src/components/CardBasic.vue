<template>
    <div class="card" style="width: 18rem;" v-if="id > 0">
        <img v-if="img" :src="img" class="card-img-top" alt="imspecies contact">
        <div class="card-body" >
            <h5 class="card-title">{{ name }}</h5>
            <p class="card-text">{{ species }}</p>
            <p class="card-text">{{ gender }}</p>
            <p class="card-text">{{ status }}</p>
            <p class="card-text">{{ origin.name }}</p>
            <a href="#" class="btn btn-primary" @click="()=>buttonFunc()">{{ buttonTitle }}</a>
        </div>
    </div>
</template>

<script>
import _ from 'lodash'

export default {
    name: 'CardBasic',
    props: {
        buttonFunc: {
            type: Function,
            default: ()=>{}
        },
        buttonTitle: {
            type: String,
            default: 'button'
        },
        contact: {
            type: Object,
            default(){
                return {
                img: null,
                id: 0,
                name: 'nome',
                gender: 'F',
                species: 'null',
                status: 'status',
                origin: {
                    name: '',
                    url: ''
                }
            }
            }
        }
    },
    data(){
        return{
            img: null,
            id: 0,
            name: 'nome',
            gender: 'F',
            species: 'null',
            status: 'status',
            origin: {
                name: '',
                url: ''
            },
            location: null
        }
    },
    mounted(){
        
        this.id =_.get(this.contact, 'id', 0)
        this.name = _.get(this.contact, 'name', 'nome')
        this.gender = _.get(this.contact, 'gender','F')
        this.species = _.get(this.contact, 'species', 'none')
        this.status = _.get(this.contact, 'status' , 'status')
        this.img = _.get(this.contact, 'image' , null)
        this.origin = _.get(this.contact, 'origin' , null)
       
    }
}
</script>
<template>
    <button type="button" class="btn btn-success" @click="()=>buttonFunc()">{{title}}</button>
</template>

<script lang="js">
export default {
name: 'ButtonBasic',
props:{
    // 
    buttonFunc:{
        type: Function,
        default: ()=>{}
    },
    title:{
        type: String,
        default: 'button'
    }
}, 
}
</script>
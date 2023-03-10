<template>
<div>
<table id="tableComponent" class="table table-bordered table-striped">
<thead>
  <tr>
    <!-- loop through each value of the fields to get the table header -->
    <th  v-for="field in fields" :key='field' @click="sortTable(field)" > 
      {{field}} <i class="bi bi-sort-alpha-down" aria-label='Sort Icon'></i>
     </th>
  </tr>
</thead>
<tbody>
    <!-- Loop through the list get the each item data -->
    <tr v-for="item in itemsData" :key='item'>
    <td v-for="field in fields" @click="()=>rowFunc(item.id)" :key='field'>{{item[field]}}</td>
  </tr>
</tbody>
</table> 
</div>
</template>
<script>
export default {
name: 'TableComponent',
props:{
    // 
    itemsData:{
        type: Array,
        default() {
            return []
        }
    },
    fields:{
        type: Array,
        default() {
            return []
        }
    },
    rowFunc: {
      type: Function,
      default: ()=>{}
    }
}, 
}
</script>
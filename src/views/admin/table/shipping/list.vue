<template>
  <div>
    <List :columns="columns" :data="items">
      <div class="list-header">
        <div class="list-search">
        </div>
      </div>
    </List>
  </div>
</template>
<script>
import List from '@/components/List.vue';
import adminService from '@/api/admininfo';
export default {
  components: {
    List
  },
  data () {
    
    return {
      input:'',
      items:[],
      columns:[
      {
          title: '产品编号',
          key: 'id',
      },
      {
          title: '客户编号',
          key: 'customerId',
      },
      {
          title: '产品名称',
          key: 'productName',
      },
      {
          title: '产品价格',
          key: 'productPrice',
      },
      {
          title: '产品信息',
          key: 'productInformation',
      },
      {
        title: '产品数量',
        key: 'number',
      }
      ]
    }
  },
  created () {
    this.getShippingTableList()
  },
  methods: {
    getShippingTableList(){
      adminService.listshippingTable().then(res=>{
        this.items = res.data.pageInfo.list
      }).catch((err) => {
        console.log(err);
      });
    },
  }

}
</script>

<style>

.list-header {
  position: relative;
  margin-top: 20px;
  height: 48px;
}
.list-operations {
  position: absolute(0, null, null, 0);
  min-width: 300px;
}
.list-search {
  position: absolute;
  min-width: 300px;
  right: -10px;
  top: 0;
}
</style>

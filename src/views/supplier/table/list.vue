<template>
  <div>
    <List :columns="columns" :data="items">
      <div class="list-header">
        <div class="list-operations">
          <Button class="margin-right-sm" type="primary" @click="$router.push(`/supplier/table/shipping/create`)">新增</Button>
        </div>
        <div class="list-search">
        </div>
      </div>
    </List>
  </div>
</template>
<script>
import List from '@/components/List.vue'
import supplierService from '@/api/Supplierinfo'

export default {
  components: {
    List
  },
  data () {
    let test = [
      {
        id: 1,
        name: "A货物",
        price: 70,
        information: "aa货物",
      },
      {
        id: 2,
        name: "B货物",
        price: 100,
        information: "o货物",
      },
      {
        id: 3,
        name: "C货物",
        price: 7,
        information: "一般货物",
      },
      {
        id: 4,
        name: "D货物",
        price: 36,
        information: "best的货物",
      }]
    return {
      input:'',
      items:test,
      columns:[
      {
          title: '产品ID',
          key: 'id',
      },
      {
          title: '供应商ID',
          key: 'supplierId',
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
          title: '产品数量',
          key: 'number',
      },
      {
          title: '产品信息',
          key: 'productInformation',
      },
      {
          title: '操作',
          key: 'action',
          width: 260,
          render: (h, params) => h('ButtonGroup', [
              h('Button', {
              on: {
                  click: () => {
                    this.onEditForm(params)
                  }
              }
              }, '编辑'),
              h('Button', {
              on: {
                  click: () => {
                  this.onDeletestock(params.row.id)
                  }
              }
              }, '删除'),
          ])
      }
      ]
    }
  },
  created () {
    this.getstockList()
  },
  methods: {
    getstockList(){
      supplierService.list().then(res=>{
        this.items = res.data.pageInfo.list
      })
    },
    onEditForm(params){
      console.log("this params"+params)
      //输入内容
      this.$router.push({
          path:`/supplier/table/shipping/edit`,
          query:{
              id: params.row.id
          }
      })
    },
    onDeletestock(id){
     supplierService.delete(id).then(()=>{
        this.getstockList()
      })
    }
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

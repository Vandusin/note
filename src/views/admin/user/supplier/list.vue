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
import List from '@/components/List.vue'
import AdminService from '@/api/admininfo'

export default {
  components: {
    List
  },
  data () {
    let test = [
      {
        id: 1,
        name: "supplie",
        email: "4124511232@qq.com",
        phone: 15788915571,
        adress: "北京市",
        postcode: "100000",
        number: "6388298861888910012",
      },
      {
        id: 2,
        name: "sfff",
        email: "2718638266@qq.com",
        phone: 17622789901,
        adress: "上海市",
        postcode: "200000",
        number: "3722839947112912",
      },
      {
        id: 3,
        name: "ttt1",
        email: "9264887311@qq.com",
        phone: 13466721234,
        adress: "天津市",
        postcode: "300000",
        number: "48617546112278923",
      },
      {
        id: 4,
        name: "sup",
        email: "1214793218@qq.com",
        phone: 17899026671,
        adress: "重庆市",
        postcode: "401400",
        number: "67455167781271527",
      }
    ];
    return {
      input:'',
      items: test,
      columns:[
      {
          title: '供应商ID',
          key: 'id',
          width: 100,
      },
      {
          title: '供应商姓名',
          key: 'supplierName',
          width: 150,
      },
      {
          title: '密码',
          key: 'password',
      },
      {
          title: '电子邮箱',
          key: 'email',
          width: 200,
      },
      {
        title: '电话号码',
        key: 'phoneNumber',
        width: 150,
      },
      {
          title: '地址',
          key: 'address',
          width: 200,
      },
      {
          title: '邮编',
          key: 'postCode',
          width: 100,
      },
      {
          title: '银行账户',
          key: 'bankAccount',
          width: 200,
      },
      {
          title: '操作',
          key: 'action',
          render: (h, params) => h('ButtonGroup', [
              h('Button', {
              on: {
                  click: () => {
                  this.onDeleteSupplier(params.row.id)
                  }
              }
              }, '删除'),
          ])
      }
      ]
    }
  },
  created () {
    this.getSupplierList()
  },
  methods: {
    getSupplierList(){
      AdminService.listsupplier().then(res=>{
        this.items = res.data.pageInfo.list
      })
    },
    onDeleteSupplier(id){
      AdminService.deleteSupplier(id).then(res =>{
          console.log(res)
          this.$Message.success("删除成功")
          this.getSupplierList()
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

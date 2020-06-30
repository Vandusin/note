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
        name: "custom1",
        email: "2341511121@qq.com",
        phone: 12345678911,
        adress: "北京市",
        postcode: "100000",
        number: "123456789299282131",
      },
      {
        id: 2,
        name: "customer2",
        email: "1444277288@qq.com",
        phone: 13729840172,
        adress: "上海市",
        postcode: "200000",
        number: "37289017255712912",
      },
      {
        id: 3,
        name: "CCCC1",
        email: "1347812890@qq.com",
        phone: 15788920841,
        adress: "天津市",
        postcode: "300000",
        number: "48612892735178923",
      },
      {
        id: 4,
        name: "stl",
        email: "2341511121@qq.com",
        phone: 13799012932,
        adress: "重庆市",
        postcode: "401400",
        number: "67632728991625527",
      }
    ];
    return {
      input:'',
      items: test,
      columns:[
      {
          title: '客户ID',
          key: 'id',
          width: 100,
      },
      {
          title: '客户姓名',
          key: 'customerName',
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
                  this.onDeleteCustomer(params.row.id)
                  }
              }
              }, '删除'),
          ])
      }
      ]
    }
  },
  created () {
    this.getcustomerList()
  },
  methods: {
    getcustomerList(){
      AdminService.listcustomer().then(res=>{
        this.items = res.data.pageInfo.list
      })
    },
    onDeleteCustomer(id){
      AdminService.deleteCustomer(id).then(res =>{
          console.log(res)
          this.$Message.success("删除成功")
          this.getcustomerList()
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

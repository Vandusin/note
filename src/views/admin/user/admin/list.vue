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
        name: "admin",
        email: "111111111@qq.com",
        phone: 12345678911,
      },
      {
        id: 2,
        name: "test1",
        email: "222222222@qq.com",
        phone: 13788919971,
      },
      {
        id: 3,
        name: "test2",
        email: "231456789@qq.com",
        phone: 15788926612,
      },
      {
        id: 4,
        name: "test3",
        email: "234415151@qq.com",
        phone: 13988276541,
      }
    ];
    return {
      input:'',
      items: test,
      columns:[
      {
          title: '管理员ID',
          key: 'id',
      },
      {
          title: '管理员姓名',
          key: 'administratorName',
      },
      {
          title: '电子邮箱',
          key: 'email',
      },
      {
          title: '电话',
          key: 'phoneNumber',
      },
      {
          title: '密码',
          key: 'password'
      }
      ]
    }
  },
  created () {
    this.getAdminList()
  },
  methods: {
    getAdminList(){
      AdminService.listadmin().then(res=>{
        this.items = res.data.pageInfo.list
      })
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

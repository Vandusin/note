<template>
   <Row>
    <i-col span="11">
      <Card>
        <p slot="title">用户个人信息</p>
        <p>姓名:{{items.customerName}}</p>
        <p>电子邮件:{{items.email}}</p>
        <p>地址:{{items.address}}</p>
        <p>电话:{{items.phoneNumber}}</p>
        <p>邮编:{{items.postCode}}</p>
        <p>银行账号:{{items.bankAccount}}</p>
      </Card>
    </i-col>
  </Row>
</template>
<script>

import customerService from "@/api/Customerinfo";

export default {
  data() {
    return {
      input: "",
      items: [],
    };
  },
  created() {
    this.getKlassList();
  },
  methods: {
    getKlassList() {
      customerService.information().then(res => {
        this.items = res.data.customer;
      });
    },
  }
};
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

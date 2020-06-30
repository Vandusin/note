<template>
  <div class="limit-width" style="margin-top:20px;">
    <Form ref="PersonInfo" :model="PersonInfo" :rules="rules" :label-width="100">
      <Form-item label="电子邮件" prop="email">
        <Input v-model="PersonInfo.email" placeholder="请输入新电子邮件地址" style="width:300px;" />
      </Form-item>
      <Form-item label="客户姓名" prop="customerName">
        <Input v-model="PersonInfo.customerName" placeholder="请输入新客户名称" style="width:300px;" />
      </Form-item>
      <Form-item label="地址" prop="address">
        <Input v-model="PersonInfo.address" placeholder="请输入新地址" style="width:300px;" />
      </Form-item>
      <Form-item label="电话" prop="phoneNumber">
        <Input
          type="number"
          v-model="PersonInfo.phoneNumber"
          placeholder="请输入新电话号码"
          style="width:300px;"
        />
      </Form-item>
      <Form-item label="密码" prop="password">
        <Input
          type="number"
          v-model="PersonInfo.password"
          placeholder="请输入新的密码"
          style="width:300px;"
        />
      </Form-item>
      <Form-item label="邮编" prop="postCode">
        <Input
          type="number"
          v-model="PersonInfo.postCode"
          placeholder="请输入新的地址邮编"
          style="width:300px;"
        />
      </Form-item>
      <Form-item label="银行账户" prop="bankAccount">
        <Input
          type="number"
          v-model="PersonInfo.bankAccount"
          placeholder="请输入新的银行账户"
          style="width:300px;"
        />
      </Form-item>
      <Form-item class="save">
        <Button type="primary" @click="onSave" class="margin-right-sm">保存</Button>
        <Button @click="goBack()" style="margin-left:10px;">返回</Button>
      </Form-item>
    </Form>
  </div>
</template>

<script>

import customerService from '@/api/Customerinfo'

export default {
  data() {
    return {
      PersonInfo: {},
      rules: {
        email: [
          {
            required: true,
            message: "邮件地址不能为空"
          },
          {
            type: "email",
            message: "邮件格式不正确"
          }
        ],
        password: [
          {
            required: true,
            message: "密码不能为空"
          }
        ],
        address: [
          {
            required: true,
            message: "地址不能为空"
          }
        ],
        customerName: [
          {
            required: true,
            message: "名字不能为空"
          }
        ],
        phoneNumber: [
          {
            required: true,
            message: "电话号码不能为空"
          },
          {
            max: 11,
            message: "电话号码不能超过十一位"
          }
        ],
        postCode: [
          {
            required: true,
            message: "邮编不能为空"
          },
          {
            min: 6,
            message: "邮编不能少于6位"
          },
          {
            max: 6,
            message: "邮编不能大于6位"
          }
        ],
        bankAccount: [
          {
            required: true,
            message: "银行账号不能为空"
          },
        ]
      }
    };
  },
  methods: {
    goBack() {
      window.history.go(-1);
    },
    onSave() {
      let formdata = new FormData();
      formdata.set("customerName", this.PersonInfo.customerName);
      formdata.set("password", this.PersonInfo.password);
      formdata.set("postCode", this.PersonInfo.postCode);
      formdata.set("phoneNumber", this.PersonInfo.phoneNumber);
      formdata.set("email", this.PersonInfo.email);
      formdata.set("address", this.PersonInfo.address);
      formdata.set("bankAccount", this.PersonInfo.bankAccount);

      customerService.updateinformation(formdata).then(res =>{
         if (res.data.code === 200) {
          this.$Message.success("success")
          this.$router.push({path:'/login'})
        }
    });
    }
  }
}
</script>

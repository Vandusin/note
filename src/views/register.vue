<template>
  <Card class="login" dis-hover>
    <p slot="title">用户注册</p>
    <Form
      class="form"
      ref="loginForm"
      :model="form"
      :rules="rules"
      :label-width="0"
      label-position="left"
    >
      <Form-item>
        <!-- <i-select :model.sync="form.select" size="large" placeholder="请选择注册账户类型" v-model=""> -->
        <i-select size="large" placeholder="请选择注册账户类型" v-model="form.type">
          <i-option value="customer">客户</i-option>
          <i-option value="supplier">供应商</i-option>
        </i-select>
      </Form-item>
      <Form-item prop="username">
        <Input v-model="form.username" size="large" prefix="md-person" placeholder="请输入账号" />
      </Form-item>
      <Form-item prop="password">
        <Input
          v-model="form.password"
          type="password"
          size="large"
          prefix="md-lock"
          placeholder="请输入密码"
        />
      </Form-item>
      <Form-item prop="email">
        <Input v-model="form.email" size="large" prefix="md-person" placeholder="请输入邮箱" />
      </Form-item>
      <Form-item prop="address">
        <Input v-model="form.address" size="large" prefix="md-person" placeholder="请输入地址" />
      </Form-item>
      <Form-item prop="phoneNumber">
        <Input v-model="form.phoneNumber" size="large" prefix="md-person" placeholder="请输入电话号码" />
      </Form-item>
      <Form-item prop="postCode">
        <Input v-model="form.postCode" size="large" prefix="md-person" placeholder="请输入邮编" />
      </Form-item>
      <Form-item prop="bankAccount">
        <Input v-model="form.bankAccount" size="large" prefix="md-person" placeholder="请输入银行金额" />
      </Form-item>
      <Form-item>
        <Button type="warning" size="large" long @click="register">注册</Button>
      </Form-item>
    </Form>
  </Card>
</template>

<script>
import adminService from "@/api/admininfo";

export default {
  data() {
    return {
      form: {
        username: "",
        password: "",
        email: "",
        address: "",
        phoneNumber: "",
        postCode: "",
        bankAccount: "",
        type: ""
      },
      rules: {
        username: [
          {
            required: true,
            message: "账号不能为空"
          }
        ],
        password: [
          {
            required: true,
            message: "密码不能为空"
          }
        ],
        email: [
          {
            required: true,
            message: "邮箱不能为空"
          }
        ],
        address: [
          {
            required: true,
            message: "地址不能为空"
          }
        ],
        phoneNumber: [
          {
            required: true,
            message: "电话号码不能为空"
          }
        ],
        postCode: [
          {
            required: true,
            message: "邮编不能为空"
          }
        ],
        bankAccount: [
          {
            required: true,
            message: "银行金额不能为空"
          }
        ]
      }
    };
  },
  methods: {
 
    register() {
      let resgisterData = new FormData();
      resgisterData.set("supplierName", this.form.username);
      resgisterData.set("password", this.form.password);
      resgisterData.set("email", this.form.email);
      resgisterData.set("address", this.form.address);
      resgisterData.set("phoneNumber", this.form.phoneNumber);
      resgisterData.set("postCode", this.form.postCode);
      resgisterData.set("bankAccount", this.form.bankAccount);

      if (this.form.type === "customer") {
        resgisterData.set("customerName", this.form.username);
        adminService.createCustomer(resgisterData).then(res => {
          console.log(res);
          let data = res.data;
          if (data.code === 200) {
            this.$router.push({ path: "/login" });
            this.$Message.success("success");
          } else if (data.code === 401) {
            this.$Message.error(data.msg);
          }
        });
      } else {
        adminService.createSupplier(resgisterData).then(res => {
          console.log(res);
          let data = res.data;
          if (data.code === 200) {
              this.$router.push({ path: "/login" });
              this.$Message.success("success");
          } else if (data.code === 401) {
            this.$Message.error(data.msg);
          }
        });
      }
    }
  }
};
</script>

<style>
.login {
  position: absolute !important;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -80%);
  background-color: white;
  width: 320px;
}

.form {
  margin: 10px, null, 10px, null;
}
</style>


<template>
  <i-form v-ref:form-inline :model="formInline" :rules="ruleInline" inline>
    <Form-item prop="user">
      <i-input
        type="text"
        :value.sync="formInline.user"
        placeholder="管理员名"
        v-model="formInline.user"
      >
        <Icon type="ios-person-outline" slot="prepend"></Icon>
      </i-input>
    </Form-item>
    <Form-item prop="password">
      <i-input
        type="password"
        :value.sync="formInline.password"
        placeholder="密码"
        v-model="formInline.password"
      >
        <Icon type="ios-locked-outline" slot="prepend"></Icon>
      </i-input>
    </Form-item>
    <Form-item prop="email">
      <i-input
        type="email"
        :value.sync="formInline.email"
        placeholder="邮箱"
        v-model="formInline.email"
      >
        <Icon type="ios-locked-outline" slot="prepend"></Icon>
      </i-input>
    </Form-item>
    <Form-item prop="phoneNumber">
      <i-input
        type="phoneNumber"
        :value.sync="formInline.phoneNumber"
        placeholder="电话"
        v-model="formInline.phoneNumber"
      >
        <Icon type="ios-locked-outline" slot="prepend"></Icon>
      </i-input>
    </Form-item>
    <Form-item>
      <i-button type="primary" @click="handleSubmit()">添加</i-button>
    </Form-item>
  </i-form>
</template>
<script>
import adminservice from "@/api/admininfo";

export default {
  data() {
    return {
      formInline: {
        user: "",
        password: "",
        email: "",
        phoneNumber: ""
      },
      ruleInline: {
        user: [{ required: true, message: "请填写用户名", trigger: "blur" }],
        password: [{ required: true, message: "请填写密码", trigger: "blur" }],
        email: [{ required: true, message: "请填写邮箱", trigger: "blur" }],
        phoneNumber: [
          { required: true, message: "请填写手机号", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    handleSubmit() {
      let formdata = new FormData();
      formdata.set("administratorName", this.formInline.user);
      formdata.set("email", this.formInline.email);
      formdata.set("password", this.formInline.password);
      formdata.set("phoneNumber", this.formInline.phoneNumber);
      adminservice.addAdministartor(formdata).then(res => {
        let data = res.data;

        if (data.code === 200) {
          this.$Message.success("提交成功!");
        } else {
          this.$Message.error("提交失败!");
        }
      });

      //   this.$refs[name].validate(valid => {
      //     console.log(valid)
      // if (valid) {
      //   adminservice.addAdministartor(this.formInline);
      //   this.$Message.success("提交成功!");
      // } else {
      //   this.$Message.error("表单验证失败!");
      // }
      //   });
    }
  }
};
</script>

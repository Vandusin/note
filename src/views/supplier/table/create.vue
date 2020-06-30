<template>
  <div class="limit-width" style="margin-top:20px;">
    <Form
      ref="TableInfo"
      :model="TableInfo"
      :rules="rules"
      :label-width="100">
      <Form-item label="产品名称" prop="productName">
        <Input v-model="TableInfo.productName" placeholder="请输入产品名称" style="width:300px;" />
      </Form-item>
      <Form-item label="价格" prop="productPrice">
        <Input  type="number" v-model="TableInfo.productPrice" placeholder="请输入价格" style="width:300px;" />
      </Form-item>
      <Form-item label="产品信息" prop="productInformation">
        <Input  type="string" v-model="TableInfo.productInformation" placeholder="请输入产品信息" style="width:300px;" />
      </Form-item>
      <Form-item label="数量" prop="number">
        <Input  type="number" v-model="TableInfo.number" placeholder="请输入产品的数量" style="width:300px;" />
      </Form-item>
      <Form-item class="submit">
        <Button type="primary" @click="onSubmit" class="margin-right-sm">提交</Button>
        <Button @click="goBack()" style="margin-left:10px;">返回</Button>
      </Form-item>
    </Form>
  </div>
</template>

<script>

import supplierService from '@/api/Supplierinfo'

export default {
  data () {
    return {
      TableInfo: {},
      rules: {
        productName: [
          {
            required: true,
            message: '产品名称不能为空'
          },
        ],
        productPrice: [
            {
                required: true,
                message: "价格不能为空",
            }
        ],
        productInformation: [
            {
                required: true,
                message: "产品信息不能为空",
            },
        ],
        number: [
            {
                required: true,
                message: "数量不能为空",
            }
        ]
      },
    }
  },
  async created () {
  },
  methods: {
    goBack () {
      window.history.go(-1)
    },
    onSubmit () {
      let formdata = new FormData();

      formdata.set("productName", this.TableInfo.productName)
      formdata.set("productPrice", this.TableInfo.productPrice)
      formdata.set("productInformation", this.TableInfo.productInformation)
      formdata.set("number", this.TableInfo.number)

      supplierService.create(formdata).then((res) =>{
        if (res.data.code === 200) {
          this.$Message.success("success")
          this.$router.push({path:'/supplier/table/shipping/list'})
        }
      })
    }
  }
}
</script>

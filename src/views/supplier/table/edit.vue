<template>
  <div class="limit-width" style="margin-top:20px;">
    <Form
      ref="TableInfo"
      :model="TableInfo"
      :rules="rules"
      :label-width="100">
      <Form-item label="产品名称" prop="name">
        <Input v-model="TableInfo.name" placeholder="请输入产品名称" style="width:300px;" />
      </Form-item>
      <Form-item label="价格" prop="price">
        <Input  type="number" v-model="TableInfo.price" placeholder="请输入价格" style="width:300px;" />
      </Form-item>
      <Form-item label="产品信息" prop="information">
        <Input  type="string" v-model="TableInfo.information" placeholder="请输入产品信息" style="width:300px;" />
      </Form-item>
      <Form-item class="submit">
        <Button type="primary" @click="onSubmit" class="margin-right-sm">提交</Button>
        <Button @click="goBack()" style="margin-left:10px;">返回</Button>
      </Form-item>
    </Form>
  </div>
</template>

<script>

export default {
  data () {
    return {
      TableInfo: {},
      rules: {
        name: [
          {
            required: true,
            message: '产品名称不能为空'
          },
        ],
        price: [
            {
                required: true,
                message: "价格不能为空",
            }
        ],
        information: [
            {
                required: true,
                message: "产品信息不能为空",
            },
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
      this.$refs.TableInfo.validate(async valid => {
        if (valid) {
          this.$Message.success("提交成功")
        }
      })
    }
  }
}
</script>

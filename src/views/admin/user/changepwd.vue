    <template>
    <i-form v-ref:form-custom :model="formCustom" :rules="ruleCustom" :label-width="80" >
        <Form-item label="管理员姓名" prop="administratorName">
            <i-input :value.sync="formCustom.administratorName" style="width: 250px" v-model="formCustom.administratorName"></i-input>
        </Form-item>
        <Form-item label="邮箱" prop="email">
            <i-input :value.sync="formCustom.email" style="width: 250px" v-model="formCustom.email"></i-input>
        </Form-item>
        <Form-item label="电话号码" prop="phoneNumber">
            <i-input :value.sync="formCustom.phoneNumber" style="width: 250px" v-model="formCustom.phoneNumber"></i-input>
        </Form-item>
        <Form-item label="密码" prop="password">
            <i-input type="password" :value.sync="formCustom.password" style="width: 250px" v-model="formCustom.password"></i-input>
        </Form-item>
        <Form-item>
            <i-button type="primary" @click="handleSubmit('formCustom')">提交</i-button>
        </Form-item>
    </i-form>
</template>
<script>
    export default {
        data () {
            return {
                formCustom: {
                    administratorName: "",
                    password: "",
                    phoneNumber: "",
                    email: "",
                },
            }
        },
        methods: {
            handleSubmit (name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('提交成功!');
                    } else {
                        this.$Message.error('表单验证失败!');
                    }
                })
            },
            handleReset (name) {
                this.$refs[name].resetFields();
            }
        }
    }
</script>

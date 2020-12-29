<template>
  <el-dialog :visible.sync="dialog" title="修改密码" append-to-body width="500px" @close="cancel">
    <el-form ref="form" :model="form" :rules="rules" size="small" label-width="88px">
      <el-form-item label="旧密码" prop="oldPwd">
        <el-input v-model="form.oldPwd" type="password" auto-complete="on" style="width: 370px;" />
      </el-form-item>
      <el-form-item label="新密码" prop="newPwd">
        <el-input v-model="form.newPwd" type="password" auto-complete="on" style="width: 370px;" />
      </el-form-item>
      <el-form-item label="确认密码" prop="repeatPwd">
        <el-input v-model="form.repeatPwd" type="password" auto-complete="on" style="width: 370px;" />
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button type="text" @click="cancel">取消</el-button>
      <el-button :loading="$wait.is('user.changePwd')" type="primary" @click="doSubmit">确认</el-button>
    </div>
  </el-dialog>
</template>

<script>
export default {
  data() {
    const repeatPwd = (rule, value, callback) => {
      if (this.form.newPwd !== value) {
        callback(new Error('两次输入的密码不一致'));
      } else {
        callback();
      }
    };
    return {
      dialog: false,
      form: { oldPwd: '', newPwd: '', repeatPwd: '' },
      rules: {
        oldPwd: [{ required: true, trigger: 'blur', message: '请输入旧密码' }],
        newPwd: [
          { required: true, message: '请输入新密码', trigger: 'blur' },
          { min: 6, max: 20, message: '长度在 6 到 20 个字符', trigger: 'blur' },
        ],
        repeatPwd: [{ required: true, validator: repeatPwd, trigger: 'blur' }],
      },
    };
  },
  methods: {
    show() {
      this.dialog = true;
    },
    cancel() {
      this.resetForm();
    },
    doSubmit() {
      this.$refs['form'].validate(valid => {
        if (valid) {
          this.$api.user.changePwd(this.form).then(res => {
            this.resetForm();

            this.$message({
              message: '密码修改成功，请重新登录',
              type: 'success',
              duration: 1500,
            });
          });
        } else {
          return false;
        }
      });
    },
    resetForm() {
      this.$refs['form'].resetFields();
      this.form = { oldPwd: '', newPwd: '', repeatPwd: '' };
    },
  },
};
</script>

<style scoped></style>

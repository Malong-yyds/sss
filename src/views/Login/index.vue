<template>
  <div class="container">
        <div class="login-wrapper">
          <div class="header">登陆</div>
            
            <div class="form-wrapper" ref="forms">
                <input type="text" name="email" placeholder="邮箱" class="input-item" v-model="formData.username">
                <input type="password" name="password" placeholder="密码" class="input-item" v-model="formData.password" 
              :visibility-toggle="true" v-on:keydown.enter="handleLogin"> 
                <div ><input type="submit" class="btn btn-primary" name="submit" value="登陆"  :loading="loading"
                @click="handleLogin"></div>
            </div>
            
          <div class="msg">
                还没有账号？
                <a-button @click.prevent="switchToRegister">创建一个</a-button>
            </div>
             
        </div>
    </div>
</template>
<script lang="">
// import { defineComponent, reactive, ref} from 'vue'
import { defineComponent, reactive, ref, toRaw } from 'vue'
import { Card, Input, Row, Col, Button, Form } from 'ant-design-vue'
import {useRouter} from "vue-router"
// import Home from '../Home/index.vue'
// import { Card, Input, Checkbox, Row, Col, Button, Form } from 'ant-design-vue'
// import { useGo } from '../../utils/usePage'
// import Crypto from '../../utils/crypto'
// import { login } from '../../controllers/login'

export default defineComponent({
  components: {
    'a-card': Card,
    'a-input': Input,
    'a-input-password': Input.Password,
    'a-row': Row,
    ACol: Col,
    AForm: Form,
    AFormItem: Form.Item,
    AButton: Button,
    // ACheckbox: Checkbox
    // Home
  },
  setup () {
    const formData = reactive({
      username: '',
      password: ''
    })
    // ref() 进行赋值，可以改变
    const checked = ref(false)
    const loading = ref(false)
    const go = useRouter();

    // 登陆
    // 
    const handleLogin = async () => {
      loading.value = true


      const PostData = Object.assign({}, toRaw(formData))

      // PostData.password = await Crypto(PostData.password)
// await 等待执行
      await login(PostData)
      loading.value = false
    }

    // 跳转注册界面
    const switchToRegister = () => {
      go.push('/register')
   
    }
  
    return {
      formData,
      checked,
      handleLogin,
      loading,
      switchToRegister
    }
  },
  data () {
    return {
      itemCol: {
        span: 14
      },
      itemWrapperCol: {
        span: 16,
        offset: 1
      }
    }
  }
})
</script>
<style scoped>

  .container {
            margin-top:4% ;
            height: 100%;
            /* background-image: linear-gradient(to right, #fbc2eb, #a6c1ee); */
        }
        .login-wrapper {
            background-color: #fff;
            width: 450px;
            height: 588px;
            border-radius: 15px;
            padding: 0 50px;
            position: relative;
            left: 50%;
            top: 50%;
            transform: translate(-50%, 0%);
            border:1px solid #cacdd0;
        }
        .header {
            font-size: 38px;
            font-weight: bold;
            text-align: center;
            line-height: 200px;
        }
        .input-item {
            display: block;
            width: 100%;
            margin-bottom: 20px;
            border: 0;
            padding: 10px;
            border-bottom: 1px solid rgb(128, 125, 125);
            font-size: 15px;
            outline: none;
        }
        .input-item:placeholder {
            text-transform: uppercase;
        }
        .btn {
            text-align: center;
            padding: 10px;
            width: 100%;
            margin-top: 40px;
            background-image: linear-gradient(to right, #a6c1ee, #dad3e3);
            color: #fff;
             border-radius: 15px;
        }
        .msg {
            text-align: center;
            line-height: 88px;
        }
        a {
            text-decoration-line: none;
            color: #abc1ee;
        }
</style>

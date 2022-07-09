<template>
   <div class="container">
        <div class="login-wrapper">
          <div class="header">注册</div>
            
            <div class="form-wrapper" ref="forms">
                <input type="text" name="stu_name" placeholder="姓名" class="input-item" v-model="formData.stu_name">
                 
                <input type="text" name="stu_school" placeholder="学校" class="input-item" v-model="formData.stu_school" @blur="sendschool()">
                <input type="text" name="stu_number" placeholder="学号" class="input-item" v-model="formData.stu_number">
               <input type="email" name="uesename" placeholder="邮箱" class="input-item" v-model="formData.username"  @blur="this.sendEmail()"> 
               
                <input type="password" name="password" placeholder="密码" class="input-item" v-model="formData.password" v-on:keydown.enter="handleRegister" @blur="sendpasswd()"> 
                <div ><input type="submit" class="btn btn-primary" name="submit" value="注册"  :loading="loading" @click="handleRegister"></div>
            </div>
            
           <div class="msg">
                已有账号？
                <a-button @click.prevent="switchToLogin">马上登录</a-button>
            </div>
          
        </div>
    </div>
</template>

<script >

import { defineComponent, reactive, ref,toRaw } from "vue";
// import { defineComponent, reactive, ref, toRaw, unref } from "vue";
// import { Card, Input, Checkbox, Row, Col, Button, Form, message } from "ant-design-vue";
import { message,Button ,Toast} from "ant-design-vue";
// import { useGo } from "../../utils/usePage";
import { useRouter } from "vue-router";
// import "ant-design-vue/lib/date-picker/style/css";
// import { Register, sendCode } from "../../controllers/login";
// import Crypto from "../../utils/crypto";




export default defineComponent({
  components: {
    // "a-card": Card,
    // "a-input": Input,
    // "a-input-password": Input.Password,
    // "a-row": Row,
    // ACol: Col,
    // AForm: Form,
    // AFormItem: Form.Item,
    AButton: Button,
    // AInputSearch: Input.Search,
    // ACheckbox: Checkbox,
  },
  setup() {
    const formData = reactive({
      username: "",
      password: "",
      code: "",
      stu_name:"",
      stu_number:"",
      stu_school:"",
      // remember: boolean
    });
  

    const loading = ref(false);

    // 验证码
    const isSendCode = ref(false);
    const seconds = ref(60);
    const handleSendCode = async () => {
      if (formData.username === "") {
        message.warning("请先填写邮箱！");
        return;
      }
    //   await sendCode(toRaw(formData));
      message.success("成功发送到该邮箱，请查收");
      isSendCode.value = true;
      seconds.value = 60;
      const Interval = setInterval(function () {
        seconds.value -= 1;
      }, 1000);
      setTimeout(function () {
        isSendCode.value = false;
        clearInterval(Interval);
      }, 60000);
    };


    // 注册
     // 验证邮箱格式 x@x.x
    const sendEmail= ()=> {
      const  regEmail = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
      
      if (formData.username!="" && !regEmail.test(formData.username)
      ){
        message.warning("邮箱格式不正确");
        // Toast.success("hihihi");
       
        
        // console.log("nono");
        formData.username="";
         
      }
    }





// 密码 6-20位，包含数字和字母
    const sendpasswd= ()=> {
   
      const  regpasswd=/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; 
       if (formData.password!="" && !regpasswd.test(formData.password)
      ){
        message.warning("密码需包含6-20位数字和字母");
        formData.password="";
      }
    }

// 学校 中文 4-10
    const sendschool= ()=> {
      // const formData.stu_school=this.formData.stu_school;
      const  regschool=/^[\u4E00-\u9FA5]{4,10}$/;
         if (formData.stu_school!="" && !regschool.test(formData.stu_school)
      ){
       message.warning("学校需为中文");
        formData.stu_school="";
      }
 
    };

    // || formData.code === ""
    const handleRegister = async () => {
      if (formData.username === "" || formData.password === ""  || 
            formData.stu_name === "" || formData.stu_number === ""||formData.stu_school === "") {
        message.warning('当前有未填项！');
        return;
      }
      loading.value = true;
      console.log(formData)
      // 数据加密
      // toRaw() 获得原始值
      const registerData = toRaw(formData);
    //   registerData.password = await Crypto(registerData.password);
      const data = await Register(registerData);
      console.log("response", data);

      loading.value = false;

 
    }


    // 跳转登录界面
    const go = useRouter();
    const switchToLogin = () => {
      go.push("/login");
    };

    return {
      formData,
      handleRegister,
      loading,
      switchToLogin,
      isSendCode,
      handleSendCode,
      seconds,
      sendEmail,sendpasswd,sendschool
    };
  },
  data() {
    return {
      itemCol: {
        span: 4,
      },
      itemWrapperCol: {
        span: 16,
        offset: 1,
      },
    };
  },
});
</script>

<style lang="css" scoped>

        .container {
          margin-top:4% ;
            height: 100%;
            /* background-image: linear-gradient(to right, #fbc2eb, #a6c1ee); */
        }
        .login-wrapper {
            background-color: #fff;
            width: 450px;
            height: 648px;
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
            line-height: 140px;
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
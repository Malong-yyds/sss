// import { defHttp } from '../utils/axios';
// import { Api } from '../enum/apiEnum';
import { LoginParams, RegisterParams, sendEmailParams } from './models/userModel';
import { message } from 'ant-design-vue';
// import { useGo } from '../utils/usePage';
import { useRouter} from "vue-router"
import { PageEnum } from '../enum/pageEnum';
// import { PermissionStore } from '../store/permission';
// import { ContentTypeEnum } from '../enum/httpEnum';

export function login(params: LoginParams) {
    // if(params.username === "admin_llt") {
    //     return  defHttp.request({
    //         url: Api.AdminLogin,
    //         method: 'POST',
    //         params: params,
    //         headers: {
    //             'Content-type': ContentTypeEnum.JSON
    //         }
    //     }, {joinParamsToUrl: true, }).then(data => {
    //         message.success('登录成功。即将跳转管理员页面');           
    //         PermissionStore.commitSetAdminToken(data.token.accessToken);
    //         const go = useRouter();
    //         go(PageEnum.ADMIN_OUTPUT);
    //         return Promise.resolve(data)
    //     }).catch(e => {
    //         console.log(e);      
    //     })
    // }
//     return  defHttp.request({
//         url: Api.Login,
//         method: 'POST',
//         data: params
//     }).then(data => {
//         message.success('登录成功。即将跳转首页');
//         PermissionStore.commitSetToken(data.token.accessToken);
//         PermissionStore.commitSetPermission(data.authority);
//         const go = useRouter();
//         go(PageEnum.BASE_HOME);
//         return Promise.resolve(data)
//     }).catch(e => {
//         console.log(e);      
//     })
// }

// export function sendCode(params: sendEmailParams) {
//     return  defHttp.request({
//         url: Api.SendCode,
//         method: 'POST',
//         data: params
//     }).then(data => {
//         return Promise.resolve(data)
//     }).catch(e => {
//         console.log(e);      
//     })
// }

// export function Register(params: RegisterParams) {
//     return  defHttp.request({
//         url: Api.Register,
//         method: 'POST',
//         data: params
//     }).then(data => {
//         message.success('注册成功,请登录');
//         const go = useRouter();
//         go(PageEnum.BASE_LOGIN);
//         return Promise.resolve(data);
//     }).catch(e => {
//         console.log(e);
//     })
}
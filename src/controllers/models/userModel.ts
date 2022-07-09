export interface LoginParams {
    username: string,
    password: string
}

export interface RegisterParams {
    username: string,
    password: string,
    code: string,
    student_name:string,
    student_number:string
}

export interface resetPWDParams {
    username: string,
    newPassword: string,
    code: string
}

export interface sendEmailParams {
    username: string,
}

export interface UserInfoModel {
    id: number,
    indonesiaCompleteToday:  number,
    indonesiaTotal: number,
    lastLoginTime?: null,
    malayCompleteToday: number,
    malayTotal: number,
    password?: null,
    role: number,
    username?: null,
    philippinesCompleteToday:number,
    philippinesTotal:number
}
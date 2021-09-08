import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Checkbox } from 'primereact/checkbox';
import { Link } from 'react-router-dom';
import {Signup} from './Signup';
import Axios from 'axios';
export const Login = () => {
const url=""
const [data,setData]=useState({
	username:"",
	password:""
})
function onSubmit(e){

	e.preventDefult();
	Axios.post( url,{
		username:data.username,
		password:data.username

	}


	)
}
function handle(e){
const newdata={...data}
newdata[e.target.id]=e.target.value
setData(newdata)
console.log(newdata)
}
function onSubmit(e){
e.preventDefult();
Axios.post(url,{
username:data.username,
password: data,password


}).then(res => console.log(res.data))
}
	const [checked, setChecked] = useState(false);

	return (
		<body dir="rtl">
		<div className="login-body">
			<div className="card login-panel p-fluid">
				<div className="login-panel-content">
					<div className="p-grid">
						<div className="p-col-12 p-sm-6 p-md-6 logo-container">
							<img src="assets/layout/images/logo-roma.svg" alt="roma" />
							<span className="guest-sign-in">أهلاً، يرجى تعبئة النموذج لتسجيل الدخول</span>
						</div>
						<form>
						<div direction ="rtl" className="p-col-12 username-container">
							<label >أسم المستخدم</label>
							<div className="login-input">
								<InputText onChange={(e)=>handle(e)} id="username" name="username"
								value={data.username} type="text" placeholder="اسم المستخدم" />
							</div>
						</div>
						<div className="p-col-12 password-container">
							<label>كلمة السر</label>
							<div className="login-input">
								<InputText onChange={(e)=>handle(e)} id="password" name="password"
								value={data.password} type="password" placeholder="كلمة السر" />
							</div>
						</div>
						<div className="p-col-12 p-sm-6 p-md-6 rememberme-container">
							<Checkbox checked={checked} onChange={e => setChecked(e.checked)} />
							<label> تذكرني</label>
						</div>
						<br></br>
						<div className="p-col-12 p-sm-6 p-md-6">
						<Link class ="link" to="/">
							<Button onSubmit={(e)=>onSubmit(e)} label="تسجيل الدخول"  /></Link>
							<br></br>
			
            <Link class ="link" to="/Signup">ليس لديك حساب؟ انشأ الآن</Link>
		 
						</div>
						</form></div>
				</div>
			</div>
		</div>
		</body>
	)
}
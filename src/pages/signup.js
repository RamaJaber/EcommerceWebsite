import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import {  Link } from 'react-router-dom';


export const Signup = () => {

	const [checked, setChecked] = useState(false);

	return (
		<body dir="rtl">
		<div className="login-body login-body2">
			<div className="card login-panel p-fluid">
				<div className="login-panel-content2">
					<div className="p-grid">
						<div className="p-col-12 p-sm-6 p-md-6 logo-container">
							<img src="assets/layout/images/logo-roma.svg" alt="roma" />
							<span className="guest-sign-in">أهلاً، يرجى تعبئة النموذج لإنشاء حساب</span>
						</div>
						<div direction ="rtl" className="p-col-12 username-container">
							<div className="login-input">
								<InputText id="input" type="text" placeholder="اسم المستخدم" />
							</div>
						</div>
						<div className="p-col-12 password-container">
							<div className="login-input">
								<InputText type="password" placeholder="كلمة السر" />
							</div>
						</div>
						
						<div direction ="rtl" className="p-col-12 username-container">
							<div className="login-input">
								<InputText id="input" type="text" placeholder="الإسم" />
							</div>
						</div><div direction ="rtl" className="p-col-12 username-container">
							<div className="login-input">
								<InputText id="input" type="text" placeholder="البريد الإلكتروني" />
							</div>
						</div><div direction ="rtl" className="p-col-12 username-container">
							<div className="login-input">
								<InputText id="input" type="text" placeholder="رقم المحمول" />
							</div>
						</div><div direction ="rtl" className="p-col-12 username-container">
							<div className="login-input">
								<InputText id="input" type="text" placeholder="رقم الهاتف" />
							</div>
						</div><div direction ="rtl" className="p-col-12 username-container">
							<div className="login-input">
								<InputText id="input" type="text" placeholder="العنوان" />
							</div>
						</div>
						
						<br></br>
						<div className="p-col-12 p-sm-6 p-md-6">
	
						<Link class ="link" to="/login">
							<Button type="submit" label="إنشاء حساب"  /></Link>
							<br></br>
						</div>
					</div>
				</div>
			</div>
		</div>
		</body>
	)
}
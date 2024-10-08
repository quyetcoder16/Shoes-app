import React from 'react'
import FacebookLogin from 'react-facebook-login'

import { DispatchType } from '../../redux/configStore';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { UserLoginModel } from '../../Models/userModel';
import * as yup from 'yup'
import { loginAsyncAPI, loginFacebookApi } from '../../redux/UserReducer/userReducer';
type Props = {}



export default function Login({ }: Props) {

    const dispatch: DispatchType = useDispatch();
    const frmLogin = useFormik<UserLoginModel>({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: yup.object().shape({
            email: yup.string().required('email cannot be blank!').email('email is invalid'),
            password: yup.string().min(3, 'password must be at least 3 characters')
        }),
        onSubmit: (values: UserLoginModel) => {
            console.log(values);
            const actionAsyncLogin = loginAsyncAPI(values);
            dispatch(actionAsyncLogin);

        }
    })

    const responseFacebook = (res: any) => {
        console.log(res);
        if (res?.accessToken) {
            const actionThunk = loginFacebookApi(res.accessToken);
            dispatch(actionThunk);
        }
    }
    return (
        <form className='container' onSubmit={frmLogin.handleSubmit}>
            <div className='d-flex justify-content-center align-items-center'>
                <div className='w-25'>
                    <h3>Login</h3>
                    <div className='form-group'>
                        <p>email</p>
                        <input className='form-control' name="email" onChange={frmLogin.handleChange} onBlur={frmLogin.handleBlur} />
                        {frmLogin.errors.email && <div className='text text-danger'>{frmLogin.errors.email}</div>}
                    </div>
                    <div className='form-group'>
                        <p>password</p>
                        <input className='form-control' name="password" type="password" onChange={frmLogin.handleChange} onBlur={frmLogin.handleBlur} />
                        {frmLogin.errors.password && <div className='text text-danger'>{frmLogin.errors.password}</div>}
                    </div>
                    <div className='form-group mt-2'>
                        <button className='btn btn-success' type='submit'>Login</button>
                    </div>
                    <div className='form-group mt-2'>
                        {/* <FacebookLogin
                            appId="503504662404221"
                            autoLoad={true}
                            fields="name,email,picture"
                            callback={responseFacebook}
                            cssClass="btn btn-primary"
                            icon="fa-facebook"
                        /> */}
                    </div>
                </div>

            </div>
        </form>
    )
}
import React , { useState } from 'react';
import { firebase } from '../../Firebase';
import { CircularProgress } from '@material-ui/core';
import { Redirect } from 'react-router-dom';

import { useFormik } from 'formik';
import * as Yup from 'yup';
import { showSuccessToast, showErrorToast } from '../Utils/tools';

const SignIn = (props) => {
    const [loading, setLoading] = useState(false)

    const formik = useFormik({
        initialValues:{
            email:'new@gin.sam',
            password:'newginsam'
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email('Invalid email address')
                .required('The email is required'),
            password:Yup.string()
                .required('The Password is required')
        }),
        onSubmit: (values) =>{
            setLoading(true)
            submitForm(values);
        }
    });
    const submitForm = (values) => {
        firebase.auth().signInWithEmailAndPassword(
            values.email,
            values.password
        ).then(() => {
            props.history.push('/dashboard')
            showSuccessToast("Welcome Back !!")
        }).catch( e => {
            setLoading(false);
            showErrorToast(e.message);
        })
    }


    return(
        <>
            {!props.user ?
                <div className="container">
                    <div className="signin_wrapper" style={{margin:'100px'}}>

                        <form onSubmit={formik.handleSubmit}>
                            <h2>Please login</h2>
                            <input
                                name="email"
                                placeholder="Email"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                            />
                            { formik.touched.email && formik.errors.email ?
                                <div className="error_label">
                                    {formik.errors.email}
                                </div>
                            :null}


                            <input
                                name="password"
                                type="password"
                                placeholder="Password"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.password}
                            />
                            { formik.touched.password && formik.errors.password ?
                                <div className="error_label">
                                    {formik.errors.password}
                                </div>
                            :null}
                    
                            <button type="submit"> {loading ? <CircularProgress color="primary" className="progress" style={{width:'20px', height:'20px', color:'#98c5e9'}}/> : 'Log in' }</button>
                        
                        </form>

                    </div>
                </div>
            :
                <Redirect to='/dashboard' />}
        </>
    )

}

export default SignIn
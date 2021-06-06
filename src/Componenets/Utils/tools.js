import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import mcitylogo from '../../Resources/images/logos/manchester_city_logo.png';
import { firebase } from '../../Firebase';

import { FormHelperText } from '@material-ui/core'

export const CityLogo = (props) => {
    const Template = <div
        className='img_cover'
        style={{
            background: `URL(${mcitylogo}) no-repeat`,
            width: props.width,
            height: props.height
        }}
    ></div>

    if (props.link) {
        return <Link className="link_logo" to={props.linkTo}>
            {Template}
        </Link>
    }
    else {
        return Template
    }

};

export const showSuccessToast = (msg) => {
    toast.success(msg, {
        position: "bottom-right",
        autoClose: 4000,
        closeOnClick: true,
        draggable: true
    })
}

export const Tag = (props) => {
    const Template = <div
        style={{
            background: props.bck ? props.bck : '#ffffff',
            fontSize: props.size ? props.size : '15px',
            color: props.color ? props.color : '#000000',
            padding: '5px 10px',
            display: 'inline-block',
            fontFamily: 'Righteous',
            ...props.add
        }}
    >
        {props.children}
    </div>;

    if (props.link) {
        return <Link className="link_logo" to={props.linkTo}>
            {Template}
        </Link>
    }
    else {
        return Template
    }

}

export const showErrorToast = (msg) => {
    toast.error(msg, {
        position: "bottom-right",
        autoClose: 4000,
        closeOnClick: true,
        draggable: true
    })
}

export const handleLogout = () => {
    firebase.auth().signOut().then(() => {
        showSuccessToast('you signned out !!')
    }).catch(e => {
        showErrorToast(e.message);
    })
}

export const textErrorHelper = (formik, values) => ({
    error: formik.errors[values] && formik.touched[values],
    helperText: formik.errors[values] && formik.touched[values] ? formik.errors[values] : null
})

export const selectErrorHelper = (formik, values) => {
    if (formik.errors[values] && formik.touched[values]) {
        return (<FormHelperText>{formik.errors[values]}</FormHelperText>)
    }
    return false;
}

export const selectIsError = (formik, values) => {
    return formik.errors[values] && formik.touched[values];
}
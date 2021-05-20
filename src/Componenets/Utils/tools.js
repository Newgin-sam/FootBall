import React from 'react';
import { Link } from 'react-router-dom';
import {toast} from 'react-toastify';
import mcitylogo from '../../Resources/images/logos/manchester_city_logo.png';
import {firebase} from '../../Firebase';

export const CityLogo = (props) => {
    const Template = <div
        className='img_cover'
        style={{background : `URL(${mcitylogo}) no-repeat`,
                width : props.width,
                height : props.height
                }}
    ></div>

    if(props.link){
        return <Link className="link_logo" to={props.linkTo}>
                    {Template}
                </Link>
    }
    else{
        return Template
    }

};

export const showSuccessToast = (msg) => {
    toast.success(msg,{
        position: "bottom-right",
        autoClose: 4000,
        closeOnClick: true,
        draggable: true
    })
}

export const showErrorToast = (msg) => {
    toast.error(msg,{
        position: "bottom-right",
        autoClose: 4000,
        closeOnClick: true,
        draggable: true
    })
}

export const handleLogout = () => {
    firebase.auth().signOut().then(()=>{
        showSuccessToast('you signned out !!')
    }).catch(e => {
        showErrorToast(e.message);
    })
}
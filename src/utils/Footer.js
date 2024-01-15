import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className='flex justigy-between'>
        <div className='p-10'>
            <p className='font-medium text-4xl p-6'>Get in <span className='font-bold'>touch</span></p>
            <p className='text-4xl text-orange-500 p-6'>Head Office</p>
            <p className='font-bold text-2xl pl-6 pb-4'>Bundl Technologies Pvt. Ltd.</p>
            <p className='font-normal pl-6'>No. 55 Sy No 8 to 14 I & J Block - Ground Floor, Embassy Tech Village |</p>
            <p className='font-normal pl-6'>Outer Ring Road, Devarbisanahalli, Varthur Bengaluru - 560130</p>
        </div>
        <div className='flex flex-col p-10'>
            <FontAwesomeIcon icon={faYoutube} size="2x" className='text-red-700 p-6' />
            <FontAwesomeIcon icon={faFacebook} size="2x" className='text-blue-600 p-6' />
            <FontAwesomeIcon icon={faTwitter} size="2x" className='text-blue-600 p-6'/>
            <FontAwesomeIcon icon={faInstagram} size="2x" />
        </div>
    </div>
  )
}

export default Footer
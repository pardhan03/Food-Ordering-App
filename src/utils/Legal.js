import React from 'react'
import Accordion from './Accordion'

const Legal = () => {
  return (
    <div>
        <Accordion 
          title="Terms of Use" 
          answer="These terms of use (the Terms of Use) govern your use of our website www.swiggy.in (the Website) and our Swiggy application for mobile and handheld devices (the App). The Website and the App are jointly referred to as the Services). Please read these Terms of Use carefully before you download, install or use the Services. If you do not agree to these Terms of Use, you may not install, download or use the Services. By installing, downloading or using the Services, you signify your acceptance to the Terms of Use and Privacy Policy (being hereby incorporated by reference herein) which takes effect on the date on which you download, install or use the Services, and create a legally binding arrangement to abide by the same."/>
        <Accordion
          title="Privacy Policy"
          answer="We ( Bundl Technologies Private Limited, alias Swiggy ) are fully committed to respecting your privacy and shall ensure that your personal information is safe with us. This privacy policy sets out the information practices of www.swiggy.com (Website) including the type of information is collected, how the information is collected, how the information is used and with whom it is shared."
        />
        <Accordion
          title="Cancellations and refunds"
          answer="Cancellations and Refunds
          a) As a general rule you shall not be entitled to cancel your order once placed. You may choose to cancel your order only within one-minute of the order being placed by you. However, subject to your previous cancellation history, Swiggy reserves the right to deny any refund to you pursuant to a cancellation initiated by you even if the same is within one-minute.  b)If you cancel your order after one minute of placing it, Swiggy shall have a right to charge you 100% of the order amount as the cancellation fee , with a right to either not to refund the order value in case your order is prepaid or recover from your subsequent order in case your order is postpaid, to compensate our restaurant/merchants and delivery partners. "
        />
    </div>
  )
}

export default Legal
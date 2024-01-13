import React, { useState } from 'react'
import Accordion from './Accordion'

const Onboarding = () => {
  
  return (
    <div>
        <h2>Partner Onboarding</h2>
          <Accordion title="I want to partner my restaurant with Swiggy" answer="Partner with us"/>
          <Accordion title="What are the mandatory documents needed to list my restaurant on Swiggy?" answer="What are the mandatory documents needed to list my restaurant on Swiggy?
            -  Copies of the below documents are mandatory
            -  FSSAI Licence OR FSSAI Acknowledgement
            -  Pan Card
            -  GSTIN Certificate
            -  Cancelled Cheque OR bank Passbook
            -  Menu"/>
          <Accordion 
            title="After I submit all documents, how long will it take for my restaurant to go live on Swiggy?" 
            answer="After all mandatory documents have been received and verified it takes upto 7-10 working days for the onboarding to be completed and make your restaurant live on the platform."/>
          <Accordion 
            title="What is this one time Onboarding fees? Do I have to pay for it while registering?" 
            answer="This is a one-time fee charged towards the system & admin costs incurred during the onboarding process. It is deducted from the weekly payouts after you start receiving orders from Swiggy."/>
    </div>
  )
}

export default Onboarding
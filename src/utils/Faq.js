import React from 'react'
import Accordion from './Accordion'

const Faq = () => {
  return (
    <div>  
      <Accordion 
        title="Can I edit my order "
        answer="Your order can be edited before it reaches the restaurant. You could contact customer support team via chat or call to do so. Once order is placed and restaurant starts preparing your food, you may not edit its contents"
      />
      <Accordion
        title="I want to cancel my order"
        answer="We will do our best to accommodate your request if the order is not placed to the restaurant (Customer service number:  080-67466729). Please note that we will have a right to charge a cancellation fee up to full order value to compensate our restaurant and delivery partners if your order has been confirmed."
      />
      <Accordion
        title="Can I order from any location?"
        answer="We will deliver from any restaurant listed on the search results for your location. We recommend enabling your GPS location finder and letting the app auto-detect your location."
      />
    </div>
  )
}

export default Faq
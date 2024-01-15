import img1 from './utils/images/inverted-commas.png'
import img2 from './utils/images/a7b0a36d5107f3590895981dab2eeac31563208212.avif'
import Footer from './utils/Footer';
const About = () =>{
    return(
        <div>
            <div className="flex w-50% p-4">
                <div>
                    <h1 className='font-bold text-3xl mt-2 mb-3'>Who we're</h1>
                    <p>Launched in 2010, Our technology platform connects customers, restaurant partners and delivery partners, serving their multiple needs. Customers use our platform to search and discover restaurants, read and write customer generated reviews and view and upload photos, order food delivery, book a table and make payments while dining-out at restaurants. On the other hand, we provide restaurant partners with industry-specific marketing tools which enable them to engage and acquire customers to grow their business while also providing a reliable and efficient last mile delivery service. We also operate a one-stop procurement solution, Hyperpure, which supplies high quality ingredients and kitchen products to restaurant partners. We also provide our delivery partners with transparent and flexible earning opportunities.</p>
                </div>
                <img src={img2} alt='pic2' className="w-1/2 rounded-lg"/>
            </div>
            <div className='bg-orange-500 mt-10 mb-10 pb-16 pt-16'>
                <img src={img1} alt='pic'/>
                <p className='text-white text-4xl'>Our mission is to elevate the quality of life for the urban consumer with unparalleled convenience. Convenience is what makes us tick. It's what makes us get out of bed and say, "Let's do this."</p>
            </div>    
            <div className='mb-10'>
                <p className='font-bold text-5xl p-2 flex justify-center mb-10'>What's In store for the future?</p>
                <p className='text-xl flex justify-center'>Swiggy has grand plans to be India’s most loved hyperlocal player. It aims to be the most accessible</p>
                <p className='text-xl flex justify-center'>platform on the network - reimagining the meaning of convenience in the country through a</p>
                <p className='text-xl flex justify-center'>variety of service offerings.</p>
            </div>
            <div className='flex justify-around'>
                <p className='font-bold text-4xl'>Changing the Game</p>
                <div className='border-solid border-2 border-orange-500 p-6'>
                    <p className='font-bold text-3xl'>150000+</p>
                    <p>Restaurant Partners</p>
                    <p>Countrywide</p>
                </div>
                <div className='border-solid border-2 border-orange-500 p-6 rounded-sm'>
                    <p className='font-bold text-3xl'>5000+</p>
                    <p>Employees across the</p>
                    <p>Country</p>
                </div>
                <div className='border-solid border-2 border-orange-500 p-6 rounded-sm'>
                    <p className='font-bold text-3xl'>260000+</p>
                    <p>Delivery</p>
                    <p>Executives</p>
                </div>
                <div className='border-solid border-2 border-orange-500 p-6 rounded-sm pr-20'>
                    <p className='font-bold text-3xl'>500+</p>
                    <p>Cites</p>
                    <p>PAN India</p>
                </div>
            </div>
            <Footer/>
        </div>
    )
};

export default About;
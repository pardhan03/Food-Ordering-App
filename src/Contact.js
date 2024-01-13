import { Link, Outlet } from "react-router-dom";
const Contact = () =>{
    return(
        <div className="flex ml-20 bg-white">
            <div>
                <ul className="bg-gray-300 p-10">
                <li className="py-16">
                    <Link to="/contact/partner-onboarding">
                    <span className="hover:bg-white p-8" >Partner Onboarding</span>
                    </Link>
                </li>
                <li className="py-16">
                    <Link to="/contact/legal">
                    <span className="hover:bg-white p-8">Legal</span>
                    </Link>
                </li>
                <li className="py-16">
                    <Link to="/contact/faq">
                    <span className="hover:bg-white p-8">FAQs</span>
                    </Link>
                </li>
                </ul>
            </div>
            <div className="ml-10">
                <Outlet/>
            </div>
        </div>

    )
};

export default Contact;
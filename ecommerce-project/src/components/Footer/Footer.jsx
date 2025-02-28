import qr from "../../assets/images/Qrcode 1.png"
import google from "../../assets/images/google.png"
import apple from "../../assets/images/download-appstore.png"
import { FaFacebookSquare, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => (
    <div className="bg-black">
        <div className="py-10 w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 text-white">
            <div>
                <div>
                    <h1>Exclusive</h1>
                    <h4>Subscribe</h4>
                    <h6>Get 10% off your first order</h6>
                </div>
                <div>
                    <div className="join">
                        <div>
                            <label className="input validator join-item">
                                <svg
                                    className="h-[1em] opacity-50"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                >
                                    <g
                                        strokeLinejoin="round"
                                        strokeLinecap="round"
                                        strokeWidth="2.5"
                                        fill="none"
                                        stroke="currentColor"
                                    >
                                        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                                    </g>
                                </svg>
                                <input type="email" placeholder="mail@site.com" required />
                            </label>
                            <div className="validator-hint hidden">
                                Enter valid email address
                            </div>
                        </div>
                        <button className="btn btn-neutral join-item">Join</button>
                    </div>
                </div>
            </div>
            {/* support  */}
            <div>
                <h1>Support</h1>
                <h4>111 Bijoy sarani, Dhaka, <br /> DH 1515, Bangladesh.</h4>
                <h4>exclusive@gmail.com</h4>
                <h4>+88015-88888-9999</h4>
            </div>
            {/* account  */}
            <div>
                <h1>Account</h1>
                <h4>My Account</h4>
                <h4>Login / Register</h4>
                <h4>Cart</h4>
                <h4>Wishlist</h4>
                <h4>Shop</h4>
            </div>
            {/* quick Links  */}
            <div>
                <h1>Quick Link</h1>
                <h4>Privacy Policy</h4>
                <h4>Terms Of Use</h4>
                <h4>FAQ</h4>
                <h4>Contact</h4>
            </div>
            {/* download app  */}
            <div>
                <h1>Download App</h1>
                <p>Save $3 with App New User Only</p>
                <div className="flex items-center justify-start gap-3">
                    <div>
                        <img src={qr} alt="" />
                    </div>
                    <div className="flex flex-col gap-2 justify-center items-center">
                        <img src={google} alt="" />
                        <img src={apple} alt="" />
                    </div>
                </div>
                {/* social icon  */}
                <div className="flex justify-between items-center text-2xl mt-1.5">
                <FaFacebookSquare />
                <FaTwitter></FaTwitter>
                <FaInstagram></FaInstagram>
                <FaLinkedin></FaLinkedin>
                </div>
            </div>
        </div>
    </div>
);

export default Footer;

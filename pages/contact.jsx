import { useState } from 'react';
import BannerLayout from '../components/Common/BannerLayout';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin,} from 'react-icons/fa'
import { HiMail,} from 'react-icons/hi'
import Footer from '../components/Footer';

export const runtime = "experimental-edge";

const Contact = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <BannerLayout>
            <div className=" px-4 py-2">
                <div className="my-6 text-Snow flex flex-col gap-y-5">
                    <h1 className='text-lg font-bold'>Contact Information</h1>
                    <div className="flex flex-col md:flex-row items-center gap-5 text-xs">
                        <div className="card_stylings w-full md:w-1/2 p-5 md:p-6 lg:p-8 flex flex-col gap-y-4">
                            <div className="flex justify-between items-center">
                                <span className='md:text-base'>Country:</span>
                                <span className='text-LightGray md:text-sm'>Sri Lanka</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className='md:text-base'>District:</span>
                                <span className='text-LightGray md:text-sm'>Colombo</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className='md:text-base'>Town:</span>
                                <span className='text-LightGray md:text-sm'>Kaduwela</span>
                            </div>
                        </div>
                        <div className="card_stylings rounded-xl w-full md:w-1/2 p-5 md:p-6 lg:p-8 flex flex-col gap-y-4">
                            <div className="flex justify-between items-center">
                                <span className='md:text-base'>Email:</span>
                                <span className='text-LightGray text-sm'>rasunmanohara@gmail.com</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className='md:text-base'>Linkedin:</span>
                                <span className='text-LightGray text-sm'>Rasun Manohara</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className='md:text-base'>Phone:</span>
                                <span className='text-LightGray text-sm'>+94 71 726 7412</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-16 w-full card_stylings text-xl sm:text-3xl flex gap-x-8 sm:gap-x-16 items-center justify-center text-Snow">
                    <a className='hover:scale-125 ease-in-out duration-700' href="https://github.com/rasunM" target='_blank' rel="noreferrer"><FaGithub /></a>
                    <a className='hover:scale-125 ease-in-out duration-700' href="https://www.linkedin.com/in/rasun-manohara-6a4208247/" target='_blank' rel="noreferrer"><FaLinkedin /></a>
                    <a className='hover:scale-125 ease-in-out duration-700' href="https://www.facebook.com/profile.php?id=100029767420995" target='_blank' rel="noreferrer"><FaFacebook /></a>
                    <a className='hover:scale-125 ease-in-out duration-700' href="https://www.instagram.com/rasun_manohara/?hl=en" target='_blank' rel="noreferrer"><FaInstagram /></a>
                </div>
            </div>
            
           
            <Footer />
        </BannerLayout>

    )
}

export default Contact
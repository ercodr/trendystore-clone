import contactImage from "../assets/contact.jpg";
import { SiFacebook } from "react-icons/si";
import { RiInstagramFill } from "react-icons/ri";
import { ImTwitter } from "react-icons/im";
import { FaTiktok } from "react-icons/fa";

const Contact = () => {
  return (
    <section className='container mx-auto mt-20'>
      <h1 className='text-3xl font-black font-gumela p-4 text-center'>
        Contact Us
      </h1>
      <div className='h-[10rem] overflow-hidden relative'>
        <img src={contactImage} alt='' className='w-full' />
        <div className='absolute bg-black/25 inset-0'></div>
      </div>
      <div className='grid md:grid-cols-2 p-4 gap-6'>
        <ul className='flex flex-col gap-6 text-lg'>
          <li className='space-y-1'>
            <h6 className='font-bold'>Our address</h6>
            <p>113 Ecowas Road Accra</p>
          </li>
          <li className='space-y-1'>
            <h6 className='font-bold'>Open hours</h6>
            <p>Daily 9:00 AM — 7:00 PM</p>
          </li>
          <li className='space-y-1'>
            <h6 className='font-bold'>Contact Info</h6>
            <p>+233 505 777 586</p>
            <p>trendystoregh@gmail.com</p>
          </li>
          <ul className='flex gap-4 text-3xl [&>*]:lg:cursor-pointer'>
            <li>
              <SiFacebook />
            </li>
            <li>
              <RiInstagramFill />
            </li>
            <li>
              <ImTwitter />
            </li>
            <li>
              <FaTiktok />
            </li>
          </ul>
          <button className='bg-slate-900 text-white px-4 py-2 rounded-lg w-max border-2 border-slate-700 hover:bg-transparent hover:text-slate-900'>
            Call us now
          </button>
        </ul>
        <div>
          <div className='relative text-right h-[400px] w-full overflow-hidden'>
            <div className='overflow-hidden bg-none h-[400px] w-full shadow-lg'>
              <iframe
                src='https://maps.google.com/maps?q=113%20Ecowas%20Road%20Accra&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed'
                frameBorder='0'
                scrolling='no'
                title='google-map'
                className='h-[400px] w-full'></iframe>
              <a href='https://fnftest.net' className='hidden'>
                FNF Test Unblocked
              </a>
              <a
                href='https://googlemapsiframegenerator.com'
                className='hidden'>
                Google Maps Iframe Generator - Free Html Embed Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

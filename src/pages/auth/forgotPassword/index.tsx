import { Link, useLocation } from 'react-router-dom';
import logo from '../../../assets/Logo_container.svg';
import lock from '../../../assets/Lock.svg';
import authDesign from '../../../assets/Lock.svg'; 
import AuthFormSidebar from '../AuthFormSidebar';
import PasswordForgot from './PasswordForgot';
import OTPIndex from './OTPIndex';
import Newpassword from './Newpassword';

const ForgotPassword = () => {
  const location = useLocation();
  return (
    <div className='w-full flex max-2xl:flex-col justify-between max-2xl:items-center font-sans'>
      <div className="text-left text-white md:bg-custom-form-background md:px-10 py-5 flex flex-col gap-5 md:gap-10 rounded-lg max-w-[663px] w-full h-screen">
        <Link to="/" className="flex justify-start max-md:justify-center md:mb-40 max-md:mb-10 gap-2 items-center text-xl font-bold max-md:hidden ">
          <img src={logo} alt="Penny Logo" className="h-18 w-18 mr-2" />
          <div className="flex flex-col font-sans text-primary-100">
            <span>Penny Saved</span>
            <span className="flex justify-start">LLC</span>
          </div>
        </Link>
      <div className='w-full flex justify-center md:hidden'>
        <img src={lock} alt="Penny Logo" className="w-60 mr-2" />
      </div>
        {location.pathname === '/forgot-password' && <PasswordForgot />}
        {location.pathname === '/forgot-password/otp' &&  <OTPIndex /> }
        {location.pathname === '/forgot-password/new-password' &&  <Newpassword /> }


      </div>
      <div className='2xl:fixed 2xl:top-1/2 2xl:right-20 2xl:transform 2xl:-translate-y-1/2 flex flex-col gap-3 justify-center items-center p-10 max-md:hidden'>
    <AuthFormSidebar 
          image={authDesign} width='' title={''} description={undefined} />
    </div>
    </div>
  );
};

export default ForgotPassword;
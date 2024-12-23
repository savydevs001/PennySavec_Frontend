import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Tabs from '../../components/Tabs';
import authDesign from '../../assets/Auth_desgin_img.svg'
import logo from '../../assets/Logo_container.svg';
import Login from './Login';
import AuthFooter from '../AuthFooter';
import Signup from './Signup';
import AuthFormSidebar from './AuthFormSidebar';

const AuthDesign: React.FC = () => {
  const location = useLocation();
  const path = location.pathname.toLowerCase();
  const initialTab = path.includes('signup') ? 'Signup' : 'Login';
  const [activeTab, setActiveTab] = useState(initialTab);

  useEffect(() => {
    setActiveTab(initialTab);
  }, [initialTab]);
  return (
  <div className='w-full flex max-2xl:flex-col justify-between max-2xl:items-center font-sans'>
    <div className="text-left text-white md:bg-custom-form-background md:px-10 py-5 flex flex-col gap-5 md:gap-10 rounded-lg max-w-[663px] w-full ">
      <Link to="/" className="flex justify-start max-md:justify-center md:mb-40 max-md:mb-10 gap-2 items-center text-xl font-bold">
        <img src={logo} alt="Penny Logo" className="h-18 w-18 mr-2" />
        <div className="flex flex-col font-sans text-primary-100">
          <span>Penny Saved</span>
          <span className="flex justify-start">LLC</span>
        </div>
      </Link>
      <div>
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} button1Title = 'Login' button2Title = 'Signup' />
      </div>
      {activeTab === 'Login' && <Login />}
      {activeTab === 'Signup' && <Signup />}
      <AuthFooter />
    </div>
    <div className='2xl:fixed 2xl:top-16 2xl:right-5 flex flex-col gap-5 justify-center items-center p-10 max-md:hidden'>
    <AuthFormSidebar title='Invest in Your Future, One Penny at a Time'
      description={<>
          Turn everyday purchases into investments with automatic
          <br />
          round-ups that help your savings grow effortlessly.
        </>
      } 
      image={authDesign} width = '550px' />
    </div>
  </div>
  );
};

export default AuthDesign;

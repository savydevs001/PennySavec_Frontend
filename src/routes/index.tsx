import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Login from '../pages/auth/AuthDesign';
import Signup from '../pages/auth/AuthDesign';
import ForgotPassword from '../pages/auth/forgotPassword';
import OTPIndex from '../pages/auth/forgotPassword/OTPIndex';
import Newpassword from '../pages/auth/forgotPassword/Newpassword';
import SuccessIndex from '../pages/auth/forgotPassword/SuccessIndex';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'signup',
        element: <Signup />,
      },
      {
        path: 'forgot-password',
        element: <ForgotPassword />,
        children: [
          {
            path: 'otp',
            element: <OTPIndex />,
          },
          {
            path: 'new-password',
            element: <Newpassword />,
          },
        ],
      },
      {
        path: 'success',
        element: <SuccessIndex />,
      }
    ],
  },
]); 
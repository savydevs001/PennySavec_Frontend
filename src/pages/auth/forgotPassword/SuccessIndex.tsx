import { Link } from 'react-router-dom';
import unlock from '../../../assets/Unlocked.svg';

const SuccessIndex = () => {
  return (
    
      <div className='w-full flex flex-col gap-5 justify-center items-center min-h-screen'>
        <img src={unlock} alt="Penny Logo" className="w-[400px]" />
        <h1 className='text-2xl font-black text-primary-100'> Password changed</h1>
        <p className='text-xl font-light text-white'>All done, Write your new password and login.</p>
        <Link to='/signup' className='bg-primary-100 font-black text-black w-32 h-12 rounded-full flex items-center justify-center'>Signup</Link>
      </div> 
  )
}

export default SuccessIndex

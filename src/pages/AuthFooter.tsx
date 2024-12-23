import ButtonComponent from '../components/ButtonComponent'
import gIcon from '../assets/Google_icon.svg';
import facebookIcon from '../assets/Facebook_icon.svg'

const AuthFooter = () => {
  return (
    <>
    <div className='flex flex-row items-center w-full gap-2'>
        <span className='flex-grow border border-primary' />
        <span className='text-secondary-100 font-sans whitespace-nowrap'>Or continue with</span>
        <span className='flex-grow border border-primary' />
      </div>
      <ButtonComponent title= 'google' icon={gIcon}/>
      <ButtonComponent title= 'facebook' icon={facebookIcon}/>
      </>
  )
}

export default AuthFooter

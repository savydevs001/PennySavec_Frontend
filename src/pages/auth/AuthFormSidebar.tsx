
interface AuthFormSidebarProps {
  title: string;
  description: React.ReactNode;
  image: string;
  width: string;
}

const AuthFormSidebar = (props: AuthFormSidebarProps) => {
  return (
   <div className="flex flex-col w-full gap-5">
      <h1 className='text-2xl font-black text-primary-100 w-full text-left max-2xl:text-center'>{props.title}</h1>
      <p className='text-xl font-light text-white text-start w-full max-2xl:text-center'>{props.description}</p>
      <div className='w-full flex justify-center'>
        <img src={props.image} alt="Penny Logo" width={props.width} />
      </div>
      </div>
  )
}

export default AuthFormSidebar

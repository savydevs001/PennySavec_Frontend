import { Outlet } from 'react-router-dom';
const Layout = () => {
  return (
    <div className="min-h-screen px-1 ">
      <main className="flex justify-between">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout; 
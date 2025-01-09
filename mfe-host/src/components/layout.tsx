import { Link, Outlet } from 'react-router';

const Layout = () => {
  return (
    <div className='min-h-screen flex flex-col'>
      {/* Navigation Bar */}
      <nav className='bg-gray-800 text-white p-4'>
        <ul className='flex gap-4'>
          <li>
            <Link
              to='/mfe-client-a'
              className='hover:text-gray-300 transition duration-200'
            >
              MFE Client A
            </Link>
          </li>
          <li>
            <Link
              to='/mfe-client-b'
              className='hover:text-gray-300 transition duration-200'
            >
              MFE Client B
            </Link>
          </li>
        </ul>
      </nav>

      {/* Main Content */}
      <main className='flex-grow p-4 bg-gray-100'>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;

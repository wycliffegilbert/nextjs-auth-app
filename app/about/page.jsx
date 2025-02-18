export default function About() {
    return (
      <div className='px-4 py-12 max-w-4xl mx-auto'>
        <h1 className='text-4xl font-extrabold mb-8 text-slate-800 text-center'>
          About
        </h1>
        <div className='bg-white p-6 rounded-lg grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div>
            <p className='text-gray-700 mb-4'>
            Welcome to Smartic Digital Company, the innovative force behind Soja-VMS, a cutting-edge Visitor and Vehicle Management System designed to enhance security, efficiency, and convenience.
            </p>
            <p className='text-gray-700 mb-4'>
            At Smartic Digital Company, we specialize in developing advanced digital solutions tailored to modern security and management needs. Our flagship product, Soja-VMS, streamlines visitor and vehicle entry processes through seamless identification scanning, OTP verification, and real-time data management.
            </p>
            <p className='text-gray-700 mb-4'>
            With a commitment to excellence, security, and user experience, we continuously innovate to provide reliable and efficient digital solutions that transform the way organizations manage access control.
            </p>
            <p className='text-gray-700 mb-4'>
            Join us in redefining visitor and vehicle management with Soja-VMS – where security meets technology.
            </p>
            <ul className='text-gray-700 mb-4 space-y-2'>
              <li>
                
              </li>
              <li>
                <a
                  href='/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center text-blue-500 hover:underline'
                >
                  <svg
                    className='w-5 h-5 mr-2'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                  >
                    <path d='M10 2a8 8 0 100 16 8 8 0 000-16zm1 11H9v-2h2v2zm0-4H9V5h2v4z' />
                  </svg>
                  Soja-VMS Documentation
                </a>
              </li>
            </ul>
          </div>
          <div className='flex justify-center items-center'>
            <img
              src='https://www.loginradius.com/blog/static/6d170d83a7074847494831a6df861d3c/d3746/cover-auth.jpg'
              alt='Description of image'
              className='rounded-lg h-96 w-full object-cover'
            />
          </div>
        </div>
      </div>
    );
  }
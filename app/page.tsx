export default function Home() {
  return (
    <div className='px-4 py-12 max-w-4xl mx-auto'>
      <h1 className='text-4xl font-extrabold mb-8 text-slate-800 text-center'>
        Welcome to Soja-VMS
      </h1>
      <div className='bg-white p-6 rounded-lg flex flex-col items-center'>
        <img
          src='https://kivuto.com/wp-content/uploads/2021/06/User_Authentication_Best_Practices_Image.jpg'
          alt='Authentication Illustration'
          className='rounded-lg h-96 w-full object-cover mb-6'
        />
        <div>
          <p className='text-2xl font-extrabold mb-8 text-slate-800 text-center'>
            Login to soja and start registering visitors
          </p>
        </div>
      </div>
    </div>
  );
}
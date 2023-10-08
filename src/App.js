import './App.css';
import img1 from './images/bg_img.jpg'

function App() {
  return (
<div className='min-h-screen bg-gradient-to-r from-cyan-500 to-blue-500 flex justify-center items-center' >
  <div className='container mx-auto'>
    <div className='flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden '>
      <div className='w-full lg:w-1/2 text-white flex flex-col items-center justify-center p-12 opacity-90 bg-no-repeat bg-center bg-cover'
      style={{backgroundSize: 'cover',
        backgroundImage: `url(${img1})`}}>
        <h1 className=' text-3xl mb-5 font-semibold opacity-120 text-cyan-500'>Welcome</h1>
        <div>
          <p className='font-xl opacity-120 '>Do not spoil what you have by desiring what you have not; remember that what you now have was once among the things you only hoped for.</p>
        </div>

      </div>
      <div className='w-full lg:w-1/2 py-10 lg:py-16 px-6 lg:px-12'>
        <h1 className='text-3xl mb-4 font-semibold'>Registration</h1>
        <p className='mb-4 font-sm '>Get registered today. It only takes a minute and it's free</p>
        <form>
          <div className='grid grid-cols-2 gap-5'>
            <input type = 'text' className = 'border border-gray-400 py-1 px-2  rounded-sm' placeholder = 'First Name'/>
            <input type = 'text' className = 'border border-gray-400 py-1 px-2  rounded-sm' placeholder = 'Last Name'/>
          </div>
          <div className='mt-5'>
          <input type = 'text' className = 'border border-gray-400 py-1 px-2 w-full rounded-sm' placeholder = 'Email'/>
          </div>
          <div className='mt-5'>
          <input type = 'password' className = 'border border-gray-400 py-1 px-2 w-full rounded-sm' placeholder = 'Password'/>
          </div>
          <div className='mt-5'>
          <input type = 'password' className = 'border border-gray-400 py-1 px-2 w-full rounded-sm' placeholder = ' Confirm Password'/>
          </div>
          <div className='mt-5'>
            <input type = 'checkbox' className='border border-gray-400 ' />
            <span> I accept the <a href='#' className='text-cyan-500 font-semibold'>Terms of Usage</a> & <a href='#' className='text-cyan-500 font-semibold'>Privacy Policy</a> </span>
          </div>
          <div className='mt-5'>
            <button className='text-center text-white w-full py-2 font-semibold bg-gradient-to-r from-cyan-500 to-blue-500'>Register Now</button>
          </div>
        </form>
         
      </div>

    </div>
  </div>
  

</div>
  );
}

export default App;

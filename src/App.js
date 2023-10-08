import './App.css';
import img1 from './images/3.jpg'

function App() {
  return (
<div className='min-h-screen bg-gradient-to-r from-cyan-500 to-blue-500 flex justify-center items-center' >
  <div className='container mx-auto'>
    <div className='w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden flex'>
      <div className='w-1/2 '
      style={{backgroundSize: 'cover',
        backgroundImage: `url(${img1})`}}>
        <h1 className='text-white text-3xl '>Welcome</h1>
        <div>
          <p>Lorem Lorem Lorem23 Lorem Lorem Lorem23 Lorem Lorem Lorem23 Lorem Lorem Lorem23 Lorem Lorem Lorem23 Lorem Lorem Lorem23 Lorem Lorem Lorem23</p>
        </div>

      </div>
      <div className='w-1/2'>
        <h1>Registration</h1>
         
      </div>

    </div>
  </div>
  

</div>
  );
}

export default App;

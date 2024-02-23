import React from 'react'
import Footer from './components/footer'
import Card from './components/Card'
import Crardimg from './components/Crardimg'
import Cardimg2 from './components/Cardimg2'
import Card2 from './components/Card2'



function Page2() {
  return (
    <div id='page2'>
      
        <div id="container" className='bg-cover bg-center w-full max-w-full p-12 rounded-lg items-center flex justify-center'>
        <div id="inner-box" className='bg-purple-600 bg-opacity-25 mx-auto max-w-full p-4 rounded-lg shadow-lg backdrop-blur-3.5 border border-opacity-25 items-center '>
            <div id='top' className="flex flex-row p-4 max-w-full">
              <div id='c1' className='bg-black mr-5 rounded-2xl px-10 py-10 bg-opacity-40 ml-10'>
                <Card />
              </div>
              <div>
              <Crardimg />
              </div>
            </div>
            <div id='bottom' className="flex flex-row p-4 w-10/12 mt-8 max-w-full ml-10">
            <div>
              
              <Cardimg2 />
              </div>
              <div id='c2' className=' bg-black ml-8 rounded-2xl px-10 py-10 bg-opacity-40'>
              <Card2 />
              </div>
            </div>
            
        </div>  
    </div>
      <Footer />
    </div>
  )
}

export default Page2
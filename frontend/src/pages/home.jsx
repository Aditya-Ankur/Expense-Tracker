import { Link } from 'react-router-dom'
import "../styles/home.css"

const Home = () => {
  return (
    <>
    
    <div id='home-container' class="relative overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-[url('https://preline.co/assets/svg/examples/polygon-bg-element.svg')] before:bg-no-repeat before:bg-top before:bg-cover before:size-full before:-z-[1] before:transform before:-translate-x-1/2">
      <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
        
        <div class="mt-9 max-w-2xl text-center mx-auto">
          <h1 class="mt-9 block font-bold text-white text-4xl md:text-5xl lg:text-6xl">
            Track Your 
            <span class="bg-clip-text bg-gradient-to-tl from-slate-900 to-blue-600 text-transparent"> Expenses</span>
          </h1>
        </div>
        

        <div class="mt-9 max-w-3xl text-center mx-auto">
          <p class="text-lg text-white">Anytime, Anywhere with data stored on the Cloud</p>
          <p class="text-lg text-white">Made with MERN stack by Aditya Samant</p>
        </div>

      
        <div class="mt-8 gap-3 flex justify-center">
          <Link to="/auth" class="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 hover:from-violet-600 hover:to-blue-600 border border-transparent text-white text-sm font-medium rounded-md focus:outline-none focus:from-violet-600 focus:to-blue-600 py-3 px-4">
            Get Started
            <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </Link>
          

        </div>
  
      </div>
    </div>
    </>
    
  )
}

export default Home;
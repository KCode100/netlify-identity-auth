'use client'
import netlifyIdentity from 'netlify-identity-widget'
import { useEffect } from 'react'

const Header = () => {
  useEffect(() => {
    netlifyIdentity.on('login', (user: any) => {
      console.log('you logged in, hooray', user)
      netlifyIdentity.close()
    })
    
    // init netlify identity connection
    netlifyIdentity.init()
  }, [])
  
  function login() {
    netlifyIdentity.open(); 
  }

  return ( 
    <section className="bg-center bg-no-repeat bg-[url('/background.jpg')] bg-gray-700 bg-blend-multiply">
      <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">Netlify Identity Demo</h1>
        <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">Try to navigate to the secured page, you can only sign in if you have been invited as a user on this site.</p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <button onClick={login} className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
            Secure Page
            <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
          </button>
          <a href="https://docs.netlify.com/visitor-access/identity/" target="_blank" className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
            Netlify Docs
          </a>  
        </div>
      </div>
    </section>
  );
}

export default Header;
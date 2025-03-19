import React from 'react'

function Footer() {
  const footerYear = new Date().getFullYear();
  return (
    <footer className='flex flex-row bg-slate-700 text-white justify-center'>
      <div>
        <p>Copyright &copy; {footerYear} All right reserved</p>
        </div>     
    </footer>
  )
}

export default Footer

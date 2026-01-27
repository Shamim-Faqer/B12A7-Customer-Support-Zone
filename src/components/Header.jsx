import React from 'react'

function Header() {
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm flex flex-col md:flex-row">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">CS — Ticket System</a>
  </div>
  <div className="flex w-full md:w-auto mt-2 md:mt-0 ">
    <ul className="menu menu-horizontal px-1 flex-wrap justify-start md:justify-end w-full">
      <li><a>Home</a></li>
      <li><a>FAQ</a></li>
      <li><a>Changelog</a></li>
      <li><a>Blog</a></li>
      <li><a>Download</a></li>
      <li><a>Contact</a></li>
      <button className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] p-1 rounded font-bold text-white' >+ New Ticket</button>
    </ul>
  </div>
</div>
    </div>
  )
}

export default Header ;

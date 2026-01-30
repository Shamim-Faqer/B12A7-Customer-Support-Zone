import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="navbar bg-base-100 shadow-sm flex flex-col md:flex-row justify-between items-center">
      
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">
          CS — Ticket System
        </Link>
      </div>

      <div className="flex w-full md:w-auto mt-2 md:mt-0">
        <ul className="menu menu-horizontal px-1 flex-wrap justify-start md:justify-end w-full gap-1">

          <li><Link to="/">Home</Link></li>
          <li><Link to="/faq">FAQ</Link></li>
          <li><Link to="/changelog">Changelog</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/download">Download</Link></li>
          <li><Link to="/contact">Contact</Link></li>

          <li>
            <Link
              to="/tickets"
              className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] px-3 py-2 rounded font-bold text-white"
            >
              + New Ticket
            </Link>
          </li>

        </ul>
      </div>
    </div>
  );
}

export default Header;

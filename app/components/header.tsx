import { Link, useLocation } from "@remix-run/react";

export default function Header() {
  const location = useLocation();
  const validar = (slug: string): string => {
    let classActive = ''
    if (location.pathname === slug) {
      classActive = ' cursor-default bg-slate-100'
    }
    return classActive
  }
  return (
    <header className="sticky flex justify-between w-full top-0 bg-white">
      <div>
        <Link to="/" className="text-blue-900 p-4 flex">
          <img src="/images/logo.png" alt="imagen de logo" width="30px"/>
        </Link>
      </div>
      <div>
        <ul className="flex gap-2 p-4 pl-0">
          <li><Link to="/about" className={"rounded-lg py-2 px-3 text-md text-slate-700 hover:bg-slate-100 hover:text-slate-900" + validar('/about')}>Sobre mí</Link></li>
          <li><Link to="/projects" className={"rounded-lg py-2 px-3 text-md text-slate-700 hover:bg-slate-100 hover:text-slate-900" + validar('/projects')}>Proyectos</Link></li>
          <li><Link to="/contact" className={"rounded-lg py-2 px-3 text-md text-slate-700 hover:bg-slate-100 hover:text-slate-900" + validar('/contact')}>Contacto</Link></li>
        </ul>
      </div>
    </header>
  )
}
import type { LinksFunction } from "@remix-run/node";
import stylesUrl from "../index.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};

export default function Index() {
  return (
    <div className="h-full w-5/6 relative sm:mt-12">
      <div className="absolute right-0 sm:pr-10">
        <img src="/images/satelite.png" alt="imagen de satelite" className="floating" />
      </div>
      <div className="flex max-w-lg mx-auto flex-col justify-center mb-9 h-full px-4 pt-16">
        <h1 className="text-5xl font-bold text-green-600">Hola 👋</h1>
        <h1 className="text-5xl font-bold text-green-600 mt-3">
          Soy <span className="text-violet-500 ">Renan Salazar</span>
        </h1>
        <p className="pt-5 text-md">
          Especializado en crear experiencias web increíbles. He trabajado tanto en pequeños proyectos como para grandes empresas.
        </p>
        <div className="my-5 flex gap-4">
          <a
            className="group inline-flex items-center justify-center rounded-full py-2 px-5 text-md font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-slate-300 text-slate-900 hover:bg-slate-400 hover:text-slate-100 active:bg-slate-800 active:text-slate-300 focus-visible:outline-slate-900"
            href="https://github.com/renansalazar"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/images/github.svg" alt="icono de github" width="20" className="mr-2" />
            Github
          </a>
          <a
            className="group inline-flex items-center justify-center rounded-full py-2 px-5 text-md font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-blue-100 text-blue-700 hover:bg-blue-200 hover:text-blue-600 active:bg-slate-800 active:text-slate-300 focus-visible:outline-slate-900"
            href="https://www.linkedin.com/in/renan-salazar-pasara/"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/images/linkedin.svg" alt="icono de linkedin" width="20" className="mr-2" />
            Linkedin
          </a>
        </div>
        <hr/>
      </div>
    </div>
  );
}

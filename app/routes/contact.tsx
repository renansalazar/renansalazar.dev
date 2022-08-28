export default function Contact() {
  return (
    <div className="flex mx-auto max-w-xl h-full px-4">
      <div className="flex my-auto flex-col">
        <h1 className="text-3xl text-violet-500 font-bold my-4">Contacto</h1>
        <div>
          <p className="my-4">No dudes en hacerme cualquier consulta a mi correo:</p>
          <div className="flex justify-center sm:justify-start">
            <a href="mailto:ramsp2412@gmail.com" className="group inline-flex items-center justify-center rounded-full py-2 px-5 text-md font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-red-400 text-slate-900 hover:bg-red-300 hover:text-slate-800 active:bg-slate-800 active:text-slate-300 focus-visible:outline-slate-900">
              <img src="/images/google.svg" alt="icono de github" width="20" className="mr-2" />
              ramsp2412@gmail.com
            </a>
          </div>
          <p className="my-4">También puedes contactarme por:</p>
          <div className="flex gap-4 items-center justify-center sm:justify-start">
            <a
              className="group inline-flex items-center justify-center rounded-full py-2 px-5 text-md font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-slate-300 text-slate-900 hover:bg-slate-400 hover:text-slate-100 active:bg-slate-800 active:text-slate-300 focus-visible:outline-slate-900"
              href="https://github.com/renansalazar"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/images/github.svg" alt="icono de github" width="20" className="mr-2" />
              Github
            </a>
            o
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
        </div>
      </div>
    </div>
  )
}
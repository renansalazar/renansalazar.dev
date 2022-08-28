import type { MetaFunction, LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import Header from "./components/header"
import tailwind from "./tailwind.css";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Renan Salazar | Full Stack Developer",
  viewport: "width=device-width,initial-scale=1",
});

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: tailwind },
];

export default function App() {
  return (
    <html lang="en" className="h-full">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="h-full">
        <div className="relative flex max-w-full bg-white h-full flex-col">
          <Header />
          <Outlet />
          <div className="flex">
            <img src="/images/wave.svg" alt="imagen de ola"/>
          </div>
        </div>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

import { ReactNode } from "react";

export default function Layout({ children }:{ children:ReactNode}) {
  return (
    <main className="min-h-screen flex justify-center mx-auto max-w-7xl">
        <aside className="hidden lg:flex flex-col stick top-0 h-screen w-72 px-3 border-r-2 border-gray-900">
            ESQUERDA
        </aside>
        <section className="flex-1 max-w-lg">
            { children }
        </section>
         <aside className="hidden lg:flex flex-col gap-6 stick top-0 h-fit w-96 px-8 py-6 border-l-2 border-gray-900">
            DIREITA
        </aside>
    </main>
  )
}

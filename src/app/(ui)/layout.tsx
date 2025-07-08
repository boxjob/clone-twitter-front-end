import { NavItem } from "@/components/nav/nav-Item";
import { NavLogout } from "@/components/nav/nav-logout";
import { NavProfile } from "@/components/nav/nav-profile";
import { Logo } from "@/components/ui/logo";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { ReactNode } from "react";

export default function Layout({ children }:{ children:ReactNode}) {
  return (
    <main className="min-h-screen flex justify-center mx-auto max-w-7xl">
        <aside className="hidden lg:flex flex-col stick top-0 h-screen w-72 px-3 border-r-2 border-gray-900">
            <div className="flex-1 mt-6">
                <Logo size={24} />
                <nav className="mt-11">
                    <NavItem
                        href="/home"
                        icon={faHouse}
                        label="Página inicial"
                    />
                    <NavItem
                        href="/profile"
                        icon={faUser}
                        label="Meu perfil"
                    />
                </nav>
            </div>
            <div className="mb-6 flex flex-col gap-4">
                <NavLogout/>
                <NavProfile />
            </div>
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

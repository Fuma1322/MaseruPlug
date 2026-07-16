"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";


import {
  Activity,
  Home,
  Menu,
  MonitorSmartphone,
  Power,
  University,
  Users,
} from "lucide-react";


import { logoutAdmin } from "@/actions/admin";


export default function NavBar() {

  const pathname = usePathname();


  const links = [
    {
      title: "Home",
      path: "/",
      icon: Home,
    },
    {
      title: "Dashboard",
      path: "/dashboard",
      icon: Activity,
    },
    {
      title: "Categories",
      path: "/dashboard/categories",
      icon: Users,
    },
    {
      title: "Businesses",
      path: "/dashboard/business",
      icon: University,
    },
  ];



  return (

    <header className="flex h-16 items-center justify-between border-b border-neutral-200 bg-white px-6">


      {/* MOBILE MENU */}

      <Sheet>

        <SheetTrigger asChild>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
          >
            <Menu className="h-5 w-5" />
          </Button>

        </SheetTrigger>


        <SheetContent
          side="left"
          className="w-72 bg-white p-0"
        >


          {/* MOBILE BRAND */}

          <div className="border-b border-neutral-200 p-6">

            <Link
              href="/dashboard"
              className="flex items-center gap-3"
            >

              <div className="h-10 w-10 rounded-xl bg-[#25D366]/10 flex items-center justify-center">

                <MonitorSmartphone
                  className="h-5 w-5 text-[#25D366]"
                />

              </div>


              <div>

                <h1 className="text-xl font-extrabold text-[#111111]">
                  Maseru<span className="text-[#25D366]">Plug</span>
                </h1>


                <p className="text-xs text-neutral-500">
                  Admin Control Center
                </p>

              </div>


            </Link>

          </div>



          <nav className="space-y-2 p-4">


            {links.map((item)=>{

              const Icon=item.icon;

              const active =
                pathname === item.path ||
                pathname.startsWith(item.path + "/");


              return (

                <Link

                  key={item.path}

                  href={item.path}

                  className={cn(

                    "flex items-center gap-3 rounded-xl px-4 py-3 transition-all",

                    active
                      ? "border border-[#25D366] bg-[#25D366]/10 text-[#111111]"
                      : "text-neutral-600 hover:bg-neutral-100"

                  )}

                >

                  <Icon size={18}/>


                  <span className="text-sm font-medium">
                    {item.title}
                  </span>


                  {active && (
                    <span className="ml-auto h-2 w-2 rounded-full bg-[#25D366]" />
                  )}


                </Link>

              );

            })}


          </nav>


        </SheetContent>


      </Sheet>



      {/* PAGE TITLE */}

      <div>

        <h2 className="text-sm font-semibold text-[#111111]">
          Admin Panel
        </h2>

      </div>



      <div className="flex-1"/>



      {/* STATUS + LOGOUT */}

      <div className="flex items-center gap-4">


        <span className="flex items-center gap-2 text-xs text-neutral-500">

          <span className="h-2 w-2 rounded-full bg-[#25D366]" />

          Online

        </span>



        <Button

          onClick={() => logoutAdmin()}

          variant="ghost"

          className="rounded-xl hover:bg-red-50 hover:text-red-600"

        >

          <Power className="mr-2 h-4 w-4"/>

          Logout

        </Button>


      </div>


    </header>

  );
}
import { FaBars } from "react-icons/fa";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
  SheetClose,
} from "../components/ui/sheet";

const NavMovil = () => {
  return (
    <div className=" ">
      <div className="md:hidden flex flex-row justify-between items-center px-10 bg-zinc-950 opacity-90  p-2 z-30 fixed top-0 left-0 right-0">
        <img
          src="/images/logo-completo.png"
          alt="logo vilcatoma"
          className=" h-8"
        />
        <div className="flex items-center">
          <Sheet>
            <SheetTrigger asChild className="flex items-center">
              <FaBars
                size={20}
                className="transition-opacity duration-400 opacity-100 hover:opacity-0 text-white"
              ></FaBars>
            </SheetTrigger>
            <SheetContent
              side={"left"}
              className="w-full h-full border-none bg-transparent bg-black opacity-80"
            >
              <SheetHeader>
                <SheetDescription>
                  <ul className=" flex flex-col h-full w-full gap-8 text-base mt-14 text-white font-extrabold z-20">
                    <SheetClose asChild>
                      <li>
                        <a href="#hero">Inicio</a>
                      </li>
                    </SheetClose>
                    <SheetClose asChild>
                      <li>
                        <a href="#about">Nosotros</a>
                      </li>
                    </SheetClose>
                    <SheetClose asChild>
                      <li>
                        <a href="#service">Servicios</a>
                      </li>
                    </SheetClose>
                    <SheetClose asChild>
                      <li>
                        <a href="#why">Eligenos</a>
                      </li>
                    </SheetClose>
                    <SheetClose asChild>
                      <li>
                        <a href="#team">Equipo</a>
                      </li>
                    </SheetClose>
                    <SheetClose asChild>
                      <li>
                        <a href="#locate">Ubícanos</a>
                      </li>
                    </SheetClose>
                    <SheetClose asChild>
                      <li>
                        <a href="#contactanos">Contactanos</a>
                      </li>
                    </SheetClose>
                  </ul>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
};

export default NavMovil;

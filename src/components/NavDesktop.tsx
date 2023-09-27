const NavDesktop = () => {
  return (
    <div className="hidden md:flex bg-black opacity-80 fixed top-0 left-0 right-0 z-50 ">
      <div className=" flex justify-between w-full max-w-[900px] mx-auto p-4">
        <a href="#hero">
          <img
            src="/images/logo-completo.png"
            alt="Logo Vilcatoma y abogados"
            className="h-10  "
          />
        </a>
        <ul className="flex  gap-x-3 text-white items-center text-sm">
          <a href="#hero">
            <li>Inicio</li>
          </a>
          <a href="#about">
            <li>Nosotros</li>
          </a>
          <a href="#service">
            <li>Servicios</li>
          </a>
          <a href="#why">
            <li>Elígenos</li>
          </a>
          <a href="#team">
            <li>Equipo</li>
          </a>
          <a href="#locate">
            <li>Ubícanos</li>
          </a>
          <a href="#contactanos">
            <li>Contáctanos</li>
          </a>
        </ul>
      </div>
    </div>
  );
};

export default NavDesktop;

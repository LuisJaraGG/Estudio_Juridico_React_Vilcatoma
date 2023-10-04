import { FaChevronDown } from "react-icons/fa";
const HeroPage = () => {
  return (
    <div>
      <div
        id="hero"
        className="min-h-[653px] h-screen relative "
        
        style={{
          backgroundImage: `url('/images/fondo.webp')`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          //   backgroundPosition: "center",
        }}
        data-aos="fade-in" data-aos-duration="500"
      >
        {/* Capa de sombreado */}
        <div className="absolute top-0 left-0 right-0  h-full bg-black opacity-80"></div>
        {/* Contenido */}
        <div
          className=" flex flex-col justify-center items-center h-full w-full fade-in"
          
          >
          <img
            src="/images/logo-completo.png"
            alt="logo del estudio jiridico"
            className="w-28 md:w-32 z-10"
          />
          <p className=" leading-tight text-center text-white z-10   md:text-xl  mix-[400px]:text-xl mt-5 tracking-wider mb-3 titulo">
            <hr className="z-10 mx-10   flex   rounded-full  md:-mb-1 " />
            Servicios y asesoramientos legales
          </p>
          <button className=" z-10 rounded-3xl border border-white bg-transparent  text-white py-1 px-4 hover:border-[#B5853E] font-normal  hover:bg-[#B5853E] transition-all duration-300 titulo">
            <a href="#about">Conócenos</a>
          </button>
        </div>
        <div className="flex justify-center absolute bottom-7 left-0 right-0 z-10  text-white w-full fade-in">
          <FaChevronDown className="text-2xl animate-bounce" />
        </div>
      </div>
    </div>
  );
};

export default HeroPage;

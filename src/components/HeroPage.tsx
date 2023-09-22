import { FaChevronDown } from "react-icons/fa";
const HeroPage = () => {
  return (
    <div>
      <div
        id="hero"
        className="h-screen relative "
        style={{
          backgroundImage: `url('/images/fondo.webp')`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          //   backgroundPosition: "center",
        }}
      >
        {/* Capa de sombreado */}
        <div className="absolute top-0 left-0 right-0  h-full bg-black opacity-80"></div>
        {/* Contenido */}
        <div className=" flex flex-col justify-center items-center h-full w-full fade-in">
          <p className="text-center text-white z-10 text-base font-bold md:text-3xl px-6 max-[400px]:text-xl">
            Servicios y asesoramientos legales
          <hr className="z-10 w-36 mx-auto  flex md:w-72 min-[370px]:border-2 rounded-full mb-4" />
          </p>
          <button className="mt-4 md:mt-0 z-10 rounded-3xl border-2 border-white bg-transparent  text-white py-1 px-4 hover:border-yellow-600 font-medium  hover:bg-yellow-600 transition-all duration-300">
            Conócenos
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

import LottieW from "./LottiePlay";
import { FaChevronRight } from "react-icons/fa";
const About = () => {
  return (
    <div id="about" className="h-screen relative ">
      <div className="w-full h-full flex flex-col justify-start  pt-16  ">
        <div className="texto-1 flex flex-col items-center text-center pb-14 min-[380px]:pb-6 ">
          <h1 className="txt-default font-black text-3xl">Nosotros</h1>
          <hr className="text-center rounded-xl border-default w-12 z-10" />
          <p className="text-slate-600 font-thin text-sm px-5 leading-none">
            Con la experiencia y compromiso necesarios para ti
          </p>
        </div>
        <div className="txt-2 px-8 max-w-[600px] ">
          <p className=" text-sm text-slate-600 font-light">
            Siempre a tu disposición
          </p>
          <p className="text-2xl font-black leading-none pb-2 min-[370px]:text-4xl">
            Estudio Jurídico <br />{" "}
            <span className="txt-default">Vilcatoma & Asociados</span>
          </p>
          <hr className=" border-default mb-1" />

          <p className="text-slate-600 text-sm pb-2">
            Más de 14 años al servicio del publico, brindando servicios
            jurídicos de la mejor calidad asegurando los resultados de tu caso.
          </p>
          <ul className="font-bold">
            <li className="txt-default">Ligitación</li>
            <li className="txt-default">Solución de controversias</li>
            <li className="txt-default">Asesorías</li>
            <li className="txt-default flex items-center hover:text-black transition-none duration-700">
              ver mas
              <FaChevronRight className="ml-2 " />
            </li>
          </ul>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-[30%] max-[380px]:h-[20%] md:hidden">
        <img
          src="/images/img1.webp"
          className="object-cover h-full w-full"
          alt="iamgenFondo"
          style={{ backdropFilter: "" }}
        />
        <div className="absolute h-full w-full bottom-0 left-0 right-0 bg-gradient-to-t from-black opacity-70"></div>
      </div>

      <div className="absolute top-0   -z-10  right-0 left-0    ">
        <LottieW
          path={"top2"}
          id={"contactanos-fondo4"}
          styles={"h-full  "}
        ></LottieW>
      </div>
    </div>
  );
};

export default About;

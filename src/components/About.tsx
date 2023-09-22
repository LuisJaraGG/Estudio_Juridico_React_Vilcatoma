import LottieW from "./LottiePlay";
import { FaChevronRight } from "react-icons/fa";
const About = () => {
  return (
    <div id="about" className="h-screen  relative min-[1090px]:flex ">
      <div className="w-full max-[1090px]:h-full  flex flex-col min-[1090px]:items-center justify-start  pt-16  md:pt-24 min-[1090px]:pt-0 md:max-w-[900px] md:mx-auto min-[1090px]:my-auto">
        <div className="texto-1 flex flex-col items-center text-center pb-14 md:pb-20 min-[380px]:pb-6 ">
          <h1 className="txt-default font-black text-3xl">Nosotros</h1>
          <hr className="text-center rounded-xl border-default w-12 z-10" />
          <p className="text-slate-600 font-thin text-sm px-5 leading-none">
            Con la experiencia y compromiso necesarios para ti
          </p>
        </div>
        <div className=" md:flex ">
          <div className="hidden md:flex h-full min-h-[317px] ml-auto">
            <div className="min-h-[317px]">
              <img
                src="/images/img1.webp"
                alt="imagen de Nosotros"
                className="w-[225px] ml-auto rounded-3xl h-full object-fill min-h-[317px]"
              />
            </div>
          </div>

          <div className="txt-2 px-8 max-w-[600px] md:w-1/2 ">
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
              jurídicos de la mejor calidad asegurando los resultados de tu
              caso.
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
      </div>

      <div className="absolute bottom-0 left-0 right-0 max-[250px]:h-[10%] h-[30%] max-[466px]:h-[20%] md:hidden">
        <img
          src="/images/img1.webp"
          className="object-cover h-full w-full"
          alt="iamgen de Fondo"
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

import LottieW from "./LottiePlay";
import { FaChevronRight } from "react-icons/fa";

const About = () => {
  return (
    <div
      id="about"
      className="min-h-[653px] h-screen  relative md:flex md:min-h-[560px] overflow-hidden md:items-center"
    >
      <div className="md:max-w-[900px] md:mx-auto ">
        <div
          className="texto-1 flex flex-col items-center text-center pb-12 pt-16 md:pb-20 min-[380px]:pb-6 "
          data-aos="flip-up"
          data-aos-duration="500"
        >
          <h1 className="txt-default font-black text-4xl">Nosotros</h1>
          <hr className="text-center rounded-xl border-default w-12 z-10" />
          <p className="text-slate-600 font-thin text-base md:text-lg px-5 leading-none">
            Con la experiencia y compromiso necesarios para ti
          </p>
        </div>
        <div className=" md:flex md:justify-center ">
          <div
            className="hidden md:flex max-h-[100%]  w-[225px] rounded-3xl"
            data-aos="fade-right"
            data-aos-duration="1000"
            style={{
              backgroundImage: `url('/images/img1.webp')`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              //   backgroundPosition: "center",
            }}
          ></div>

          <div
            className="txt-2 px-8 md:px-0 md:pl-8 max-w-[600px] md:w-1/2 "
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <p className=" text-sm text-slate-600 font-light md:text-lg">
              Siempre a tu disposición
            </p>
            <p className="text-2xl font-black leading-none pb-2 min-[370px]:text-4xl">
              Estudio Jurídico <br />{" "}
              <span className="txt-default">Vilcatoma & Asociados</span>
            </p>
            <hr className=" border-default mb-1" />

            <p className="text-slate-600 text-sm md:text-lg pb-2 text-justify">
              Más de 14 años al servicio del publico, brindando servicios
              jurídicos de la mejor calidad asegurando los resultados de tu
              caso.
            </p>
            <ul className="font-bold flex flex-col gap-y-1">
              <li className="txt-default">Litigación</li>
              <li className="txt-default">Solución de controversias</li>
              <li className="txt-default">Asesorías</li>
              <a href="#service">
                <li className="txt-default flex items-center hover:text-black transition-none duration-700">
                  Ver mas
                  <FaChevronRight className="ml-2 " />
                </li>
              </a>
            </ul>
          </div>
        </div>
      </div>

      {/* Fodo para movil */}
      <div
        className="absolute bottom-0 left-0 right-0 max-[250px]:h-[10%] h-[30%] max-[466px]:h-[20%] md:hidden"
        data-aos="fade-in"
        data-aos-duration="1000"
        data-aos-offset="0"
      >
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
          styles={"h-full"}
        ></LottieW>
      </div>
    </div>
  );
};

export default About;

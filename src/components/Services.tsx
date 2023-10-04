import {
  FaUsers,
  FaHandshake,
  FaBook,
  FaBalanceScale,
  FaBriefcase,
  FaBuilding,
  FaGavel,
  FaMoneyBill,
} from "react-icons/fa";
import LottieW from "./LottiePlay";
const Services = () => {
  return (
    <div
      id="service"
      className="relative py-16 md:py-24 md:h-screen flex flex-col items-center justify-center md:min-h-[805px] min-h-none overflow-hidden "
    >
      <div className=" flex flex-col justify-start  items-center md:max-w-[900px] md:mx-auto lg:my-auto">
        <div
          className=" texto-1 flex flex-col items-center text-center pb-16"
          data-aos="flip-up"
          data-aos-duration="500"
          data-aos-offset="50"
          data-aos-easing="ease-in-out"
        >
          <h1 className="txt-default font-black text-3xl titulo">Servicios</h1>
          <hr className="text-center rounded-xl border-default w-12 z-10" />
          <p className="text-slate-600 font-thin text-md px-8 subtitulo">
            Encargados de dar el mejor servicio en fabor de tus intereses
          </p>
        </div>

        <div className="bloque-2 text-center flex flex-wrap justify-center gap-x-10 gap-y-4 txt-default pb-10 mx-5 md:text-sm md:gap-y-16">
          <div
            className="flex flex-col items-center max-w-[260px]"
            data-aos="flip-left"
            data-aos-duration="500"
            data-aos-offset="50"
          >
            <FaUsers className="w-10 h-10"></FaUsers>
            <p className="font-bold titulo">Litigación</p>
            <p className="text-slate-600 texto">
              Especializados en dar soluciones efectivas en casos complejos
            </p>
          </div>
          <div
            className="flex flex-col items-center max-w-[260px]"
            data-aos="flip-right"
            data-aos-duration="500"
            data-aos-offset="50"
          >
            <FaHandshake className="w-10 h-10"></FaHandshake>
            <p className="font-bold titulo">Solución de controversias</p>
            <p className="text-slate-600 texto">
              Desde delitos Informáticos hasta Protección de testigos
            </p>
          </div>
          <div
            className="flex flex-col items-center max-w-[260px]"
            data-aos="flip-left"
            data-aos-duration="500"
            data-aos-offset="50"
          >
            <FaBook className="w-10 h-10"></FaBook>
            <p className="font-bold titulo">Asesorías</p>
            <p className="text-slate-600 texto">
              Enfocados en la defensa de cualquier tipo de litigio penal y
              constitucional penal
            </p>
          </div>
          <div
            className="flex flex-col items-center max-w-[260px]"
            data-aos="flip-right"
            data-aos-duration="500"
            data-aos-offset="50"
          >
            <FaBalanceScale className="w-10 h-10"></FaBalanceScale>
            <p className="font-bold titulo">Derecho Administrativo</p>
            <p className="text-slate-600 texto">
              Te defendemos de entidades gubernamentales y otras
            </p>
          </div>
          <div
            className="flex flex-col items-center max-w-[260px]"
            data-aos="flip-left"
            data-aos-duration="500"
            data-aos-offset="50"
          >
            <FaBriefcase className="w-10 h-10"></FaBriefcase>
            <p className="font-bold titulo">Derecho constitucional</p>
            <p className="text-slate-600 texto">
              Relacionados con derechos fundamentales, como hábeas corpus,
              habeas data y otros
            </p>
          </div>
          <div
            className="flex flex-col items-center max-w-[260px]"
            data-aos="flip-right"
            data-aos-duration="500"
            data-aos-offset="50"
          >
            <FaBuilding className="w-10 h-10"></FaBuilding>
            <p className="font-bold titulo">Derecho Societario</p>
            <p className="text-slate-600 texto">
              Apoyo a empresas desde la formalización hasta asesoramientos
              legales
            </p>
          </div>
          <div
            className="flex flex-col items-center max-w-[260px]"
            data-aos="flip-left"
            data-aos-duration="500"
            data-aos-offset="50"
          >
            <FaGavel className="w-10 h-10"></FaGavel>
            <p className="font-bold titulo">Derecho civil</p>
            <p className="text-slate-600 texto">
              Apoyo en asuntos civiles, como alimentos, divorcios, tenencia
            </p>
          </div>
          <div
            className="flex flex-col items-center max-w-[260px]"
            data-aos="flip-right"
            data-aos-duration="500"
            data-aos-offset="50"
          >
            <FaMoneyBill className="w-10 h-10"></FaMoneyBill>
            <p className="font-bold titulo">Derecho concursal</p>
            <p className="text-slate-600 texto">
              Desde la formalización hasta asesoramiento legal, brindamos un
              sólido respaldo a tu empresa en cada paso
            </p>
          </div>
        </div>
        <div className="px-8 texto-2"></div>
      </div>
      <div className="absolute top-0   -z-10  right-0 left-0   md:hidden ">
        <LottieW
          path={"top2"}
          id={"contactanos-fondo4"}
          styles={"h-full  "}
        ></LottieW>
      </div>
      <div className="absolute bottom-0  left-0 -z-10  right-0 ">
        <LottieW
          path={"fondo4"}
          id={"contactanos-fondo4"}
          styles={"h-full  "}
        ></LottieW>
      </div>
    </div>
  );
};

export default Services;

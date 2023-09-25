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
    <div id="service" className="relative py-16 md:py-24 lg:h-screen flex flex-col items-center justify-center ">
      <div className=" flex flex-col justify-start  items-center md:max-w-[900px] md:mx-auto lg:my-auto">
        <div className=" texto-1 flex flex-col items-center text-center pb-16">
          <h1 className="txt-default font-black text-3xl">Servicios</h1>
          <hr className="text-center rounded-xl border-default w-12 z-10" />
          <p className="text-slate-600 font-thin text-sm px-8">
            Encargados de dar el mejor servicio en fabor de tus intereses
          </p>
        </div>

        <div className="bloque-2 text-center flex flex-wrap justify-center gap-x-10 gap-y-4 txt-default pb-10 mx-5 md:text-sm">
          <div className="flex flex-col items-center max-w-[260px]">
            <FaUsers className="w-10 h-10"></FaUsers>
            <p className="font-bold">Litigación</p>
            <p className="text-slate-600">
              Especializados en dar soluciones efectivas en casos complejos
            </p>
          </div>
          <div className="flex flex-col items-center max-w-[260px]">
            <FaHandshake className="w-10 h-10"></FaHandshake>
            <p className="font-bold">Solución de controversias</p>
            <p className="text-slate-600">
              Desde delitos Informáticos hasta Protección de testigos
            </p>
          </div>
          <div className="flex flex-col items-center max-w-[260px]">
            <FaBook className="w-10 h-10"></FaBook>
            <p className="font-bold">Asesorías</p>
            <p className="text-slate-600">
              Enfocados en la defensa de cualquier tipo de litigio penal y
              constitucional penal
            </p>
          </div>
          <div className="flex flex-col items-center max-w-[260px]">
            <FaBalanceScale className="w-10 h-10"></FaBalanceScale>
            <p className="font-bold">Derecho Administrativo</p>
            <p className="text-slate-600">
              Te defendemos de entidades gubernamentales y otras
            </p>
          </div>
          <div className="flex flex-col items-center max-w-[260px]">
            <FaBriefcase className="w-10 h-10"></FaBriefcase>
            <p className="font-bold">Derecho constitucional</p>
            <p className="text-slate-600">
              Relacionados con derechos fundamentales, como hábeas corpus,
              habeas data y otros
            </p>
          </div>
          <div className="flex flex-col items-center max-w-[260px]">
            <FaBuilding className="w-10 h-10"></FaBuilding>
            <p className="font-bold">Derecho Societario</p>
            <p className="text-slate-600">
              Apoyo a empresas desde la formalización hasta asesoramiento
              legales
            </p>
          </div>
          <div className="flex flex-col items-center max-w-[260px]">
            <FaGavel className="w-10 h-10"></FaGavel>
            <p className="font-bold">Derecho civil</p>
            <p className="text-slate-600">
              Apoyo en asuntos civiles, como alimentos, divorcios, tenencia
            </p>
          </div>
          <div className="flex flex-col items-center max-w-[260px]">
            <FaMoneyBill className="w-10 h-10"></FaMoneyBill>
            <p className="font-bold">Derecho concursal</p>
            <p className="text-slate-600">
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

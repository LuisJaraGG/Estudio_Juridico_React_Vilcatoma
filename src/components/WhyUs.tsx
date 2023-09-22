import { FaVolumeUp, FaGlobe, FaStar, FaLock } from "react-icons/fa";
import LottieW from "./LottiePlay";
import { Elecciones } from "../data/Eligenos";
const WhyUs = () => {
  return (
    <div id="why" className="h-full relative min-[815px]:h-screen md:flex md:justify-center md:flex-col">
      <div className="w-full pt-16 md:pt-0">
        <div className=" texto-1 flex flex-col items-center text-center pb-16">
          <h1 className="txt-default font-black text-3xl">Porque elegirnos</h1>
          <hr className="text-center rounded-xl border-default w-32 mt-1 z-10" />
          <p className="text-slate-600 font-thin text-sm px-8">
            Si aún tienes dudas te presentamos porqué confiar en nosotros
          </p>
        </div>
      </div>
      <div className="w-full flex flex-wrap gap-y-8 gap-x-7 pb-16 px-10  ">
        {Elecciones.map((eleccion, index) => {
          let iconoelement = null;
          switch (eleccion.icon) {
            case 1:
              iconoelement = <FaVolumeUp className="w-full txt-default " />;
              break;
            case 2:
              iconoelement = <FaGlobe className="w-full txt-default " />;
              break;
            case 3:
              iconoelement = <FaStar className="w-full txt-default " />;
              break;
            case 4:
              iconoelement = <FaLock className="w-full txt-default " />;
              break;

            default:
              iconoelement = <FaVolumeUp className="w-full txt-default " />;
          }
          return (
            <div key={index} className="mx-auto relative max-w-[350px] ">
              <div className="  bg-white rounded-lg shadow-lg px-4 pb-4 pt-10 z-10 md:h-[200px]   ">
                
                  <p className="txt-default font-bold text-center ">
                    {eleccion.tittle}
                  </p>
                  <p className="text-center">{eleccion.description}</p>
                
              </div>

              <div className="  absolute w-full    top-[-10px] flex flex-row justify-center items-center">
                <div className="bg-amber-200 w-11 h-11 shadow-md flex justify-center items-center rounded-full">
                  {iconoelement}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="absolute top-0   -z-10  right-0 left-0    ">
        <LottieW
          path={"top2"}
          id={"contactanos-fondo4"}
          styles={"h-full  "}
        ></LottieW>
      </div>

      <div className="absolute bottom-0   -z-10  right-0 left-0 md:hidden   ">
        <LottieW
          path={"fondo4"}
          id={"contactanos-fondo4"}
          styles={"h-full  "}
        ></LottieW>
      </div>
    </div>
  );
};

export default WhyUs;

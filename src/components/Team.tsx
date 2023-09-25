import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import LottieW from "./LottiePlay";
const Team = () => {
  return (
    <div id="team" className="h-full relative pb-16 md:hidden">
      <div
        className=" relative "
        style={{
          backgroundImage: `url('/images/fondo2.webp')`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          //   backgroundPosition: "center",
        }}
      >
        <div className=" texto-1 flex flex-col items-center text-center pt-20 pb-5 ">
          <h1 className="text-white font-bold  z-20 text-xl">
            YENI VILCATOMA DE LA CRUZ
          </h1>
          <hr className="text-center rounded-xl border-white w-12  z-10" />
          <p className="text-white font-normal z-10 text-[12px] ">FUNDADORA</p>
        </div>
        {/* Parte de fondo */}
        <div className="absolute bg-black opacity-70  h-full w-full top-0"></div>
      </div>

      <div className=" mt-10 relative">
        <div className="md:flex md:flex-row  md:pb-10 ">
          <div className="mx-8 md:w-1/2 py-10 md:pl-16">
            <div className="md:min-h-[450px]">
              <p className="txt-default font-black">CARGOS EJERCIDOS</p>
              <hr className="border-default w-[200px]" />
              <ul className="flex flex-col gap-y-5 mb-5 mt-2 text-slate-700">
                <li>
                  <div className="flex items-start w-full">
                    <FaChevronRight className="txt-default h-4 mt-1"></FaChevronRight>
                    <p className=" w-11/12 text-justify">
                      Abogada de la Oficina Desconcentrada de Control Interno de
                      Ayacucho
                    </p>
                  </div>
                </li>
                <li>
                  <div className="flex items-start w-full">
                    <FaChevronRight className="txt-default h-4 mt-1"></FaChevronRight>
                    <p className=" w-11/12 text-justify">
                      Fiscal Provincial Coordinadora de la Fiscalía Penal
                      Corporativa Especializada enDelitos de Corrupción de
                      Funcionarios del Santa
                    </p>
                  </div>
                </li>
                <li className="flex items-start w-full">
                  <FaChevronRight className="txt-default h-4 mt-1"></FaChevronRight>
                  <p className=" w-11/12 text-justify">
                    Fiscal Adjunta Superior de la Fiscalía Penal Corporativa
                    Especializada en Delitos de Corrupción de Funcionarios de
                    Loreto
                  </p>
                </li>
                <li className="flex items-start w-full">
                  <FaChevronRight className="txt-default h-4 mt-1"></FaChevronRight>
                  <p className=" w-11/12 text-justify">
                    Fiscal Adjunta Superior de la Primera Fiscalía Superior
                    Penal de TransitoriaVilla María del Triunfo
                  </p>
                </li>
                <li className="flex items-start w-full">
                  <FaChevronRight className="txt-default h-4 mt-1"></FaChevronRight>
                  <p className=" w-11/12 text-justify">
                    Procuradora Adjunta Nacional Especializada en Delitos de
                    Corrupción de Funcionarios
                  </p>
                </li>
                <li className="flex items-start w-full">
                  <FaChevronRight className="txt-default h-4 mt-1"></FaChevronRight>
                  <p className=" w-11/12 text-justify">
                    Procuradora Adjunta Nacional Especializada en Delitos de
                    Corrupción de Funcionarios de apoyo en la Procuraduría
                    Especializada en Criminalidad Organizada
                  </p>
                </li>
                <li className="flex items-start w-full">
                  <FaChevronRight className="txt-default h-4 mt-1"></FaChevronRight>
                  <p className=" w-11/12 ">Congresista de la República</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="md:w-1/2 md:flex md:justify-end md:items-center ">
            <div
              className="  mb-16 h-56 md:h-96 md:w-full  md md:mb-0 flex justify-end text-right relative rounded-tl-3xl rounded-bl-3xl shadow-lg  max-w-[400px] md:max-w-[600px]  ml-8 md:flex md:items-end  "
              style={{
                backgroundImage: `url('/images/vilcatoma.webp')`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                //   backgroundPosition: "center",
              }}
            >
              <div className="absolute bg-gradient-to-l from-blue-950 w-full h-full top-0 opacity-30 "></div>
            </div>
          </div>
        </div>

        {/* Parte del lado contrario del equipo */}
        <div className="md:flex md:flex-row-reverse md:my-10">
          <div className="px-8 text-right relative md:w-1/2 md:pr-16">
            <div >
              <div>
                <p className="txt-default font-black">DOCENCIA UNIVERSITARIA</p>
                <hr className="border-default w-[220px]  ml-auto" />
                <ul className="flex flex-col gap-y-5 mb-5 mt-2 text-slate-700">
                  <li>
                    <div className="flex items-start">
                      <p className=" w-11/12 ml-auto">
                        Universidad San Martín de Porres
                      </p>
                      <FaChevronLeft className="txt-default h-4 mt-1"></FaChevronLeft>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-start">
                      <p className=" w-11/12 ml-auto">
                        Curso Investigación Penal Preparatoria
                      </p>
                      <FaChevronLeft className="txt-default h-4 mt-1"></FaChevronLeft>
                    </div>
                  </li>
                </ul>
              </div>

              <div>
                <p className="txt-default font-black">ESTUDIOS REALIZADOS</p>
                <hr className="border-default w-[200px]  ml-auto" />
                <ul className="flex flex-col gap-y-5 mb-16 mt-2 text-slate-700">
                  <li>
                    <div className="flex items-start">
                      <p className=" w-11/12 ml-auto">
                        Estudios en Derecho Universidad San Cristóbal de
                        Huamanga
                      </p>
                      <FaChevronLeft className="txt-default h-4 mt-1"></FaChevronLeft>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-start">
                      <p className=" w-11/12 ml-auto">
                        Título de Abogado Universidad Peruana Los Andes
                      </p>
                      <FaChevronLeft className="txt-default h-4 mt-1"></FaChevronLeft>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-start">
                      <p className=" w-11/12 ml-auto">
                        Maestría en Derecho Penal Universidad Alas Peruanas
                      </p>
                      <FaChevronLeft className="txt-default h-4 mt-1"></FaChevronLeft>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-start">
                      <p className=" w-11/12 ml-auto">
                        Maestría en Derecho Penal Universidad Alas Peruanas
                      </p>
                      <FaChevronLeft className="txt-default h-4 mt-1"></FaChevronLeft>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

          </div>
          {/* imagen de la izquierda */}
          <div className="md:w-1/2 ">
            <div
              className="relative mr-8 md:h-96  h-56 max-w-[400px] md:max-w-[700px] rounded-tr-3xl rounded-br-3xl "
              style={{
                backgroundImage: `url('/images/img1.webp')`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                //   backgroundPosition: "center",
              }}
            >
              <img
                src="/images/vilcatoma-sola.png"
                alt="vilcatoma sola "
                className=" absolute md:h-[450px] h-72 w-full bottom-0 left-7 z-20 object-contain md:hover:h-[480px] transition-all duration-300"
              />
              <div className="absolute bg-gradient-to-t from-black w-full h-full bottom-0 opacity-80 rounded-br-3xl z-10"></div>
            </div>
          </div>
        </div>

        <div className="absolute top-0  -z-10  right-0 opacity-10  ">
          <LottieW
            path={"fondo2"}
            id={"contactanos-fondo4"}
            styles={"h-full  "}
          ></LottieW>
        </div>
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

export default Team;

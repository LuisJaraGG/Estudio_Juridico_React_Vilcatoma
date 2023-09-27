import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import LottieW from "./LottiePlay";
const TeamDesktop = () => {
  return (
    <div id="team" className=" hidden md:flex relative overflow-hidden">
      <div className=" w-[900px] mx-auto my-auto">
        <div
          className=" relative w-full  mb-10"
          data-aos="flip-up"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
        >
          <div className=" texto-1 flex flex-col items-center text-center pt-28 pb-5 ">
            <h1 className="txt-default font-bold  z-20 text-xl">
              YENI VILCATOMA DE LA CRUZ
            </h1>
            <hr className="text-center border-default rounded-xl border-white w-12  z-10" />
            <p className="text-slate-500 font-normal z-10 text-[12px] ">
              FUNDADORA
            </p>
          </div>
        </div>

        {/* Texto */}
        <div className="flex flex-row">
          <div className=" w-1/2 pl-16">
            <div className="md:min-h-[450px]" data-aos="fade-right">
              <p className="txt-default font-black text-xl">CARGOS EJERCIDOS</p>
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
            <div
              className="md:min-h-[450px] text-right"
              data-aos="fade-right"
              data-aos-offset="20"
            >
              <div>
                <p className="txt-default font-black text-xl text-right">
                  DOCENCIA UNIVERSITARIA
                </p>
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
                <p className="txt-default font-black text-xl text-right">
                  ESTUDIOS REALIZADOS
                </p>
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
          <div className=" w-1/2 flex flex-col justify-center items-center ">
            <div className="w-full flex flex-col gap-y-10">
              <div
                className="h-[400px] flex items-end justify-center "
                data-aos="fade-left"
                data-aos-offset="0"
                data-aos-easing="ease-in-sine"
              >
                <img
                  src="/images/vilcatomavertical1.webp"
                  alt="Imagen vilcatoma en vertical"
                  className="w-3/4 h-96 object-cover hover:rounded-2xl hover:h-full transition-all duration-700 hover:bg-gradient-to-t hover: from-black "
                />
              </div>
              <div
                className="h-[400px] flex items-end justify-center"
                data-aos="fade-left"
                data-aos-offset="100"
                data-aos-easing="ease-in-sine"
              >
                <img
                  src="/images/vilcatomavertical2.webp"
                  alt="Imagen vilcatoma en vertical"
                  className="w-3/4 h-96 object-cover hover:rounded-2xl hover:h-full transition-all duration-700 hover:bg-gradient-to-t hover: from-black  "
                />
              </div>
            </div>
          </div>
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

export default TeamDesktop;

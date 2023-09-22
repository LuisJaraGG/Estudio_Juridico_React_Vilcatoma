
import LottieW from "./LottiePlay";

const LocateUs = () => {
  return (
    <div id="locate" className="h-screen relative">
      <div className="h-full flex flex-col justify-start items-center pt-16">
        <div className=" texto-1 flex flex-col items-center text-center pb-5">
          <h1 className="txt-default font-black text-3xl">Ubícanos</h1>
          <hr className="text-center rounded-xl border-default w-12 z-10" />
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62433.28610670519!2d-77.09835040684223!3d-12.037987083569933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105cf3c01d91c9d%3A0x89395e13daccf033!2sVilcatoma%20Barberia%20Clasica!5e0!3m2!1ses-419!2spe!4v1695267997269!5m2!1ses-419!2spe"
          className="w-full h-full px-5 pb-10"
          loading="lazy"
        ></iframe>
      </div>
      <div className="absolute bottom-0  left-0 -z-10  right-0 ">
        <LottieW
          path={"fondo4"}
          id={"contactanos-fondo4"}
          styles={"h-full  "}
        ></LottieW>
      </div>
      <div className="absolute top-0   -z-10   opacity-70 md:hidden     ">
        <LottieW
          path={"top2"}
          id={"contactanos-fondo4"}
          styles={"h-full  "}
        ></LottieW>
      </div>
    </div>
  );
}

export default LocateUs
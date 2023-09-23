import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import LottieW from "./LottiePlay";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";

const formSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Debe tener un minimo de 3 caracteres" })
    .max(50),
  email: z.string().email({ message: "El correo no es valido" }),
  message: z
    .string()
    .min(10, { message: "Debe tener un minimo de 10 caracteres" })
    .max(500),
});

import { useEffect, useRef } from "react";

const applyFadeIn = (element: HTMLElement | null) => {
  if (element) {
    element.classList.remove("opacity-0");
    element.classList.add("animate-fade-in");
    element.classList.add("opacity-1");
  }
};
const Contact = () => {
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const targetCard = entry.target as HTMLDivElement;
            applyFadeIn(targetCard);
          }
        });
      },
      { threshold: 0.1 }
    );

    cardRefs.current.forEach((cardRef) => {
      if (cardRef) {
        observer.observe(cardRef);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  // const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });
  const isLoading = form.formState.isSubmitting;

  return (
    <div
      id="contactanos"
      className=" md:flex md:h-screen md:items-center  relative h-full lg:h-screen  pb-20   pt-24 "
    >
      {/* hasta 1088 px es mono */}

      <div className="min-[1268px]:max-w-[900px] md:mx-auto md:flex md:items-center  ">
        <div className=" hidden min-[1268px]:flex min-[1268px]:w-1/2 min-[1268px]:justify-center min-[1268px]:items-center">
          <div className="">
            <LottieW
              path={"plane"}
              id={"contactanos-fondo4"}
              styles={"w-full h-full"}
            ></LottieW>
          </div>
        </div>
        <div className="h-full  flex flex-col gap-y-16 md:gap-y-8 justify-center max-w-[450px] md:max-w-[400px] mx-auto  md:px-10 min-[830px]:px-8 px-8 min-[1268px]:w-1/2">
          <div
            ref={(el) => cardRefs.current.push(el)}
            className="text-center opacity-0"
          >
            <p className="text-[32px] font-black txt-default ">Contactanos</p>
            <hr className="border-default border-1 w-52 mx-auto" />
            <p className="text-slate-600 font-normal text-sm ">
              Si tienes interes contacta con nosotros y podremos asesorarte
            </p>
          </div>
          <div ref={(el) => cardRefs.current.push(el)} className="opacity-0 ">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4 md:space-y-1"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nombre</FormLabel>
                      <FormControl>
                        <Input
                          className="w/full"
                          disabled={isLoading}
                          placeholder="Nombre"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          className="w/full"
                          disabled={isLoading}
                          placeholder="usuario@gmail.com"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Mensaje</FormLabel>
                      <FormControl>
                        <Textarea
                          className="w/full"
                          disabled={isLoading}
                          rows={5}
                          placeholder="Descripción de su cunsulta"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  disabled={isLoading}
                  type="submit"
                  className=" bg-default hover:from-blue-900 hover:to-blue-800 w-full rounded-none"
                >
                  Enviar
                </Button>
              </form>
            </Form>
          </div>

          <div className="flex flex-row gap-x-10 justify-center">
            <FaFacebook size={30} className="txt-default "></FaFacebook>
            <FaYoutube size={30} className="txt-default "></FaYoutube>
            <FaTwitter size={30} className="txt-default "></FaTwitter>
            <FaInstagram size={30} className="txt-default "></FaInstagram>
          </div>
        </div>
      </div>

      {/* fondo */}
      <div className="absolute top-0 -z-10 md:hidden ">
        <LottieW
          path={"top2"}
          id={"contactanos-fondo4"}
          styles={"h-full  "}
        ></LottieW>
      </div>
      <div className="absolute bottom-0  left-0 right-0 -z-10 ">
        <LottieW
          path={"fondo4"}
          id={"contactanos-fondo4"}
          styles={"w-full  "}
        ></LottieW>
      </div>
    </div>
  );
};

export default Contact;

import { zodResolver } from "@hookform/resolvers/zod";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { useToast } from "./ui/use-toast";
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

const Contact = () => {
  const formSchema = z.object({
    name: z
      .string()
      .min(3, { message: "Debe tener un minimo de 3 caracteres" })
      .max(50),
    phone: z.string().length(9, { message: "Debe ingresar 9 dígitos" }),
    email: z.string().email({ message: "El correo no es valido" }),
    message: z
      .string()
      .min(10, { message: "Debe tener un minimo de 10 caracteres" })
      .max(500),
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      message: "",
    },
  });

  const { toast } = useToast();
  function onSubmit(values: z.infer<typeof formSchema>) {
    fetch("https://node-nodemailer-provider.vercel.app/api/mail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((res) => {
        if (res.ok) {
          toast({
            description: "Mensaje enviado",
            duration: 2000,
          });
          form.reset();
        } else {
          toast({
            variant: "destructive",
            description: `Ocurrio un error al enviar el mensaje!`,
          });
        }
      })
      .catch((error) => {
        toast({
          variant: "destructive",
          description: `Ocurri'o un error en: ${error}`,
        });
      });
  }

  const isLoading = form.formState.isSubmitting;

  return (
    <div
      id="contactanos"
      className=" md:flex  md:items-center  relative md:min-h-[805px] lg:min-h-[0px] "
    >
      {/* hasta 1088 px es mono */}

      <div className="min-[1268px]:max-w-[900px] md:mx-auto md:flex md:items-center pb-20   pt-24  ">
        <div className=" hidden min-[1268px]:flex min-[1268px]:w-1/2 min-[1268px]:justify-center min-[1268px]:items-center">
          <div data-aos="fade-in" data-aos-duration="500">
            <LottieW
              path={"plane"}
              id={"contactanos-fondo4"}
              styles={"w-full h-full"}
            ></LottieW>
          </div>
        </div>
        <div className=" flex flex-col gap-y-16 md:gap-y-8 justify-center max-w-[450px] md:max-w-[400px] mx-auto  md:px-10 min-[830px]:px-8 px-8 min-[1268px]:w-1/2">
          <div
            className="text-center "
            data-aos="flip-up"
            data-aos-duration="1000"
          >
            <p className="text-[32px] font-black txt-default ">Contactanos</p>
            <hr className="border-default border-1 w-52 mx-auto" />
            <p className="text-slate-600 font-normal text-sm ">
              Si tienes interes contacta con nosotros y podremos asesorarte
            </p>
          </div>
          <div data-aos="fade-in" data-aos-duration="1000">
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
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Celular</FormLabel>
                      <FormControl>
                        <Input
                          className="w/full"
                          disabled={isLoading}
                          placeholder="Celular"
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
            <a href="https://www.facebook.com/yenivilcatomaofic?locale=es_LA">
              <FaFacebook size={30} className="txt-default "></FaFacebook>
            </a>
            <a href="https://www.youtube.com/@vilcatomaabogados8490">
              <FaYoutube size={30} className="txt-default "></FaYoutube>
            </a>
            <a href="https://twitter.com/YeniVilcatoma2">
              <FaTwitter size={30} className="txt-default "></FaTwitter>
            </a>
            <a href="https://www.instagram.com/yeni_vilcatoma_2/">
              <FaInstagram size={30} className="txt-default "></FaInstagram>
            </a>
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

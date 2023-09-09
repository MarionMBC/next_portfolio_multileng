"use client"

import {useRef, useState} from "react";
import emailJs  from '@emailjs/browser';
const MyComponent = () => {
  const [from_name, setName] = useState("");
  const [userName, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement | null>(null);
  const [submitStatus, setSubmitStatus] = useState<string | null>(null); // Inicializado como null

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!from_name || !userName || !message) {
      alert("Por favor, complete todos los campos.");
      return;
    }

    setIsSubmitting(true);

    const formElement = formRef.current; // Obtener el elemento de formulario HTML real


    // @ts-ignore
    if (formElement) { // Verifica si formElement no es null
      emailJs
        .sendForm("service_thdapbe", "template_zsph0r8", formElement, "wbYUKruC4DBaPqMoM")
        .then(
          (result) => {
            console.log(result.text);
            setName("");
            setEmail("");
            setMessage("");
            setSubmitStatus("success"); // Cambia el estado a éxito
          },
          (error) => {
            console.log(error.text);
            setSubmitStatus("error"); // Cambia el estado a error
          }
        )
        .finally(() => {
          setIsSubmitting(false);
        });
    }
  };


  return (
    <>
      <div className="py-4 lg:py-8  dark:bg-gray-900 transition-all ease-in-out h-full">
        <div className="xl:mx-auto xl:container  relative ">
          <div className="flex flex-wrap xl:mx-auto xl:container">
            <div className="w-full relative lg:w-1/2 xl:mt-10 mb-10 2xl:pr-24 2xl:pl-0 xl:pl-12 pl-0 ">
              <div className="w-full flex flex-col items-start  xl:justify-start  relative z-20 xl:px-0 px-4 xl:py-0 py-4">
                <div className="w-full 2xl:pl-48 xl:pt-1">
                  <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-wider text-gray-900 dark:text-white">
                    I&apos;m here
                  </h1>
                  <div className="w-full md:w-10/12 mt-3">
                    <p className="text-gray-800 dark:text-white text-base md:text-lg leading-8 tracking-wider">
                      I believe that the best way to learn is by doing, so I&apos;m
                      always looking for new challenges and opportunities to
                      grow as a developer.
                    </p>
                    <div className="mt-4 md:mt-8">
                      <h2 className="text-sm md:text-base dark:text-cyan-300 font-semibold">
                        Country
                      </h2>
                      <h2 className="text-gray-800 text-base md:text-lg leading-8  tracking-wider dark:text-white mt-2">
                        Honduras
                      </h2>
                    </div>
                    <div className="mt-4 md:mt-8">
                      <h2 className="text-sm md:text-base dark:text-cyan-300 font-semibold">
                        Phone Number
                      </h2>
                      <h2 className="text-gray-800 text-base md:text-lg leading-8 dark:text-white tracking-wider mt-2">
                        +504 97353230
                      </h2>
                    </div>
                    <div className="mt-4 md:mt-8">
                      <h2 className="text-sm md:text-base dark:text-cyan-300 font-semibold">
                        Email
                      </h2>
                      <h2 className="dark:text-white text-gray-800 text-base md:text-lg leading-8 tracking-wider mt-2">
                        melchisedec.bustamante@gmail.com
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2   xl:pt-10 lg:pl-24">
              <div className="flex flex-col items-start xl:justify-start 2xl:justify-end xl:px-0 px-4">
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-wider text-gray-900 dark:text-white">
                  Let&apos;s talk!
                </h1>
                <form  id="contactForm"
                       className="w-full 2xl:w-8/12 mt-3"
                       onSubmit={handleSubmit}
                       ref={formRef}>
                  <h2 className="text-cyan-500 text-base md:text-lg leading-8 tracking-wider ">
                    Get in touch ant let me know how I can contribute to your
                    project or team.
                  </h2>
                  <div className="mt-4 md:mt-8">
                    <p className="text-gray-800 dark:text-white text-base font-medium">
                      Name
                    </p>
                    <input
                      id="name"
                      value={from_name}
                      name={'from_name'}
                      onChange={
                        (e) => setName(e.target.value)
                      }
                      className="mt-3 text-base border-2 w-11/12 lg:w-full xl:w-10/12 placeholder:text-gray-900 hover:border-cyan-500 focus:border-cyan-500 focus:outline-none border-black py-5 pl-4 text-gray-800"
                      type="text"
                      placeholder="Marion Bustamante"
                    />
                  </div>
                  <div className="mt-4 md:mt-8">
                    <p className="text-gray-800 dark:text-white text-base font-medium">
                      Email
                    </p>
                    <input
                      value={userName}
                      name={'userName'}
                      onChange={
                        (e) => setEmail(e.target.value)
                      }
                      id="email"
                      className="mt-3 text-base border-2 w-11/12 lg:w-full xl:w-10/12 placeholder:text-gray-900 hover:border-cyan-500 focus:border-cyan-500 focus:outline-none border-black py-5 pl-4 text-gray-800"
                      type="email"
                      placeholder="example@mail.com"
                    />
                  </div>
                  <div className="mt-4 md:mt-8">
                    <p className="text-gray-800 dark:text-white text-base font-medium">
                      Message
                    </p>
                    <textarea
                      name={'message'}
                      id="message"
                      className="mt-3 text-base border-2 w-11/12 lg:w-full xl:w-10/12 placeholder:text-gray-900 resize-none hover:border-cyan-500 focus:border-cyan-500 focus:outline-none border-black xl:h-40 py-5 pl-4 text-gray-800"

                      value={message}
                      onChange={
                        (e) => setMessage(e.target.value)
                      }

                      placeholder="Write me something..."

                    />
                  </div>
                  <div className="py-5">
                    {submitStatus === "success" ? (
                      <div className="text-green-600 dark:text-green-300 mb-5 font-medium">¡El correo se ha enviado exitosamente!</div>
                    ) : submitStatus === "error" ? (
                      <div className="text-red-600 dark:text-red-300 mb-5 font-medium">Hubo un error al enviar el correo electrónico.</div>
                    ) : null}
                    <button
                      type="submit"
                      className="text-xl px-3 py-2 border dark:text-white hover:bg-cyan-500 flex transition-all border-gray-900 dark:border-cyan-300 rounded ease-linear hover:duration-150 hover:scale-105"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Por favor, espera..." : "¡Contáctame!"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyComponent;

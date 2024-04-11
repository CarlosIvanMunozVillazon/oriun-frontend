"use client";
import NavbarConvocatorias from "@/components/ConvsPage/NavbarConvocatorias";
import React, { useState } from "react";
import preguntas from "@/constants/preguntas.json";

// By default tailwind comes with 5 breakpoints defined for responsive design.
// sm, md, lg, xl, 2xl --> these are mobile first
// we can prefix any of our tailwind classes with one of the breakpoints
// by default classes work for every screen width

// <div className="grid h-[100vh] grid-rows-12">
//   <div className="grid grid-cols-3 grid-rows-2">
//     <header className="text-center w-full bg-figma_blue col-span-3 row-start-1">
//       hola
//     </header>
//   </div>

//   <div className="grid grid-cols-3">
//     <main className="col-span-3 h-full w-full text-center bg-black">
//       <h1 className="text-white">niggers</h1>
//     </main>
//   </div>

//   <div className="grid grid-cols-3 grid-rows-2">
//     <footer className="text-center w-full bg-figma_blue col-span-3 row-start-2">
//       hola
//     </footer>
//   </div>
// </div>

// <main className="relative overflow-hidden mx-auto max-w-[1580px] border-2 border-cyan-500">

export default function Home() {
  const [selectedMessage, setSelectedMessage] = useState("");
  const [ansTitle, setAnsTitle] = useState("");
  const handleClick = (message, ansTitle) => {
    setSelectedMessage(message);
    setAnsTitle(ansTitle);
  };

  return (
    <>
      <NavbarConvocatorias links={null} />
      <main className="relative mt-4 mx-auto overflow-hidden max-w-[1580px] gap-3 p-2">
        <div className="grid grid-cols-2 gap-2">
          {selectedMessage === "" ? (
            <div className="pr-12 pt-10 pb-10">
              <h1 className="text-black font-bold text-[35px]">
                Bienvenidos a la sección de Preguntas Frecuentes de ORIUN
              </h1>
              <br />
              <p className="text-2xl text-justify">
                En está sección encuentra las preguntas frecuentes que se tienen
                al realizar un proceso de movilidad en la ORI. Por favor,
                selecciona la pregunta, para que se muestre la respuesta.
                Cualquier otra inquietud se puede comunicar al siguiente correo
                electrónico ori_bog@unal.edu.co{" "}
              </p>
            </div>
          ) : (
            <div className="pr-12 pt-10 pb-10">
              <h1 className="text-black font-bold text-[35px] text-justify">
                {selectedMessage}
              </h1>
              <br />
              <div dangerouslySetInnerHTML={{ __html: ansTitle }} />
            </div>
          )}

          <div className="pl-5 pr-20 pt-10">
            <br />
            {preguntas.map((item, index) => (
              <div key={index}>
                <button
                  type="button"
                  className={
                    "flex transition-all items-center justify-center gap-3 border-2 rounded-xl w-full font-semibold bg-figma_blue border-figma_blue text-white py-2"
                  }
                  onClick={() => handleClick(item.title, item.ans_title)}
                >
                  {item.title}
                </button>

                <br />
              </div>
            ))}
          </div>
        </div>
      </main>      
    </>
  );
}

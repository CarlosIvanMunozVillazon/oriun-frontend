import React from "react";
import Filter from "@/components/ConvsPage/Filter";
import NavbarConvocatorias from "@/components/ConvsPage/NavbarConvocatorias";
import { LINKS_ESTUDIANTE } from "@/constants";
function ConvocatoriasEstudianteLayout({ children }) {
  {
    /**
     * Children es un objeto especial de react que permite.
     *
     * cualquier componente puede aceptar y usar la propiedad children.
     * Cuando usamos layouts children cubre automáticamente nuestras páginas.
     * Lo que de hecho significa que next envuelve automáticamente
     * nuestras paǵinas con el diseño del layout que hemos determinado.
     *
     * Re redundante XD
     */
  }
  return (
    <>
      <NavbarConvocatorias links= {LINKS_ESTUDIANTE} />
      <Filter />
      {children}
    </>
  );
}

export default ConvocatoriasEstudianteLayout;

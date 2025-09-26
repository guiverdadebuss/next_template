import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import PrimeiroComponente from "@/components/PrimeiroComponente";
import ComponenteComUmaProp from "@/components/ComponenteComUmaProp";
import ComponenteComVariasProps from "@/components/ComponenteComVariasProps";
import ComponenteComCondicional from "@/components/ComponenteComCondicional";
import ComponenteComMap from "@/components/ComponenteComMap";
import ComponenteComEventos from "@/components/ComponenteComEventos";
import ComponenteComState from "@/components/ComponenteComState";

export default function Home() {
  return (
    <div
      className="min-h-screen bg-slate-400 flex flex-col items-center
justify-center"
    >
      <h1 className="text-6xl font-bold text-white">Hello! </h1>{" "}
      <PrimeiroComponente />
      <ComponenteComUmaProp nome="Guilherme" />
      <ComponenteComUmaProp nome="Arabella" />
      <ComponenteComVariasProps
        titulo="Perfil do Utilizador"
        cor="green"
        nome="Maria Neto"
        idade={25}
      />
      <ComponenteComCondicional />
      <ComponenteComMap />
      <ComponenteComEventos />
      <ComponenteComState />
    </div>
  );
}

import { useState } from "react";

import "./calculadoraCombustivel.css";
import logoImg from "../../assets/logoCombustivel.png";

/* 
  Calculo: Álcool / Gasolina
  Se o resultado for menor que 0.7 compensa usar álcool
*/

interface InfoProps {
  titulo: string;
  gasolina: string | number;
  alcool: string | number;
}

export default function CalculadoraCombustivel() {
  const [gasolina, setGasolina] = useState(0);
  const [alcool, setAlcool] = useState(0);
  const [info, setInfo] = useState<InfoProps>();

  function calcular(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const calculo = alcool / gasolina;

    if (calculo <= 0.7) {
      setInfo({
        titulo: "Compensa utilizar Álcool!",
        gasolina: gasolina,
        alcool: alcool,
      });
    } else {
      setInfo({
        titulo: "Compensa utilizar Gasolina!",
        gasolina: gasolina,
        alcool: alcool,
      });
    }
  }

  function formatarMoeda(valor: number): string {
    return valor.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });
  }

  return (
    <div>
      <main className="container-combustivel">
        <img
          className="logo"
          src={logoImg}
          alt="Logo da calculadora de combustível"
        />

        <h1 className="title">Qual melhor opção?</h1>

        <form className="form-combustivel" onSubmit={calcular}>
          <label>Álcool</label>
          <input
            className="input"
            type="number"
            placeholder="R$ 4.97"
            step="0.01"
            required
            value={alcool}
            onChange={(e) => setAlcool(Number(e.target.value))}
          />

          <label>Gasolina</label>
          <input
            className="input"
            type="number"
            placeholder="R$ 6.72"
            step="0.01"
            required
            value={gasolina}
            onChange={(e) => setGasolina(Number(e.target.value))}
          />

          <input className="btn-combustivel" type="submit" value="Calcular" />
        </form>

        {info && Object.keys(info).length > 0 && (
          <section className="result">
            <h2 className="result-title">{info.titulo}</h2>

            <span>{formatarMoeda(Number(info.alcool))}</span>
            <span>{formatarMoeda(Number(info.gasolina))}</span>
          </section>
        )}
      </main>
    </div>
  );
}

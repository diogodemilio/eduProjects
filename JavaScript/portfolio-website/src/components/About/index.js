import { useEffect, useState } from "react";

import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import LogoFCT from "../../assets/images/logo_nova-st.png";
import LogoUNL from "../../assets/images/logo_nova-uni.png";
import PortugalFlag from "../../assets/images/portugalFlag.png"

import "./index.scss";

const About = () => {
  console.log("hello")
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={["S", "o", "b", "r", "e", " ", "m", "i", "m"]}
              idx={15}
            />
          </h1>
          <p>
            Eu sou um engenheiro de software com ambição de qualquer coisa por agora
          </p>
          <p align="LEFT">
            I'm quietly confident, naturally curious, and perpetually working on
            improving my chops one design problem at a time.
          </p>
          <p>
            If I need to define myself in one sentence that would be a family
            person, father of a beautiful daughter, a sports fanatic,
            photography enthusiast, and tech-obsessed!!!
          </p>
          <br />
            <div>
              <h1>
                <AnimatedLetters
                  letterClass={letterClass}
                  strArray={["E", "d", "u", "c", "a", "ç", "ã", "o"]}
                  idx={15}
                />
              </h1>
              <p>
                Nova School of Science and Technology - NOVA University Lisbon
              </p>
              <p align="LEFT">
                Mestrado Integrado em Engenharia Eletrotécnica e de Computadores
              </p>
              <p>
                Áreas de Especialização:
              </p>
              <ul>
                <li>Telecomunicações: Gestão de Redes</li>
                <li>Eletrónica: Projeto de Circuitos de Rádio Frequência</li>
                <li>Sistemas Digitais e Percecionais: Processamento e Integração de Informação</li>
              </ul>
              <p>
                Ano Conclusão: 2020
              </p>
              <br />
              <div className="stage-cube-cont">
                <div className="cubespinner">
                  <div className="face1">
                    <img src={LogoFCT} alt="LogoFCT"/>
                  </div>
                  <div className="face2">
                    <img src={LogoUNL} alt="LogoUNL"/>
                  </div>
                  <div className="face3">
                    <img src={LogoFCT} alt="LogoFCT"/>
                  </div>
                  <div className="face4">
                    <img src={PortugalFlag} alt="FlagOfPortugal"/>
                  </div>
                  <div className="face5">
                    <img src={LogoUNL} alt="LogoUNL"/>
                  </div>
                  <div className="face6">
                    <img src={PortugalFlag} alt="FlagOfPortugal"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Loader type="pacman" />
      </>
  );
}

export default About
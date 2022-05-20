import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import LogoTitle from "../../assets/images/logo-s.png";
import Logo from "./Logo";
import "./index.scss";

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = ['D','i','o','g','o',' ','E','m','í','l','i','o']
  const jobArray = [
    's',
    'o',
    'f',
    't',
    'w',
    'a',
    'r',
    'e',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, []);
  
  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            {/*
            <span className={letterClass}>Olá</span>
            <span className={`${letterClass} _12`}>Eu</span>
            <span className={`${letterClass} _13`}>sou</span>
            <span className={`${letterClass} _14`}></span>
            <span className={`${letterClass} _13`}></span>
            
            <img
              src={LogoTitle}
              alt="Software Developer Name"
            />
            */}
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1>
          <h2>Software Developer</h2>
          <Link to="/contact" className="flat-button">
            FEEL FREE TO CONTACT ME!
          </Link>
        </div>
        <Logo /> 
      </div>

      <Loader type="pacman" />
    </>
  );
}

export default Home;
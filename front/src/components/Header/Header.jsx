import React, {useEffect} from "react";
import "./index.css";
import BackgroundVideo from "../BackgroundVideo/BackgroundVideo";
import ReactGA from 'react-ga';

export default function Header() {

  useEffect(() => {
    ReactGA.initialize('UA-34465558-23');
  }, []);

  return (
    <div id="inicio">
      <BackgroundVideo />
    </div>
  );
}

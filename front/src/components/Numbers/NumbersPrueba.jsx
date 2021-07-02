import React, { useState, useEffect } from "react";
import "./index.css";
import CountUp from "react-countup";
import logoTechoAzul from '../../assets/logoTechoAzul.png'

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
}

function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDimensions;
}

export default function Numbers() {

    const { width } = useWindowDimensions();
    return (
        <>
            {width > 1000 ?
                <div className="numbers ">
                    <div className="numbers__info pt-5">
                        <div className="numbers__textCenter">
                            <h2>
                                <img className="header__image" alt="logo techo" src={logoTechoAzul} height='140' />
                            </h2>
                        </div>

                        <div className="numbers__infoLeft">
                            <div className="numbers__items">
                                <CountUp
                                    start={0}
                                    end={165.0}
                                    delay={0}
                                    duration={4}
                                    decimal="."
                                    decimals={3}
                                    prefix="+"
                                    className=""
                                >
                                    {({ countUpRef }) => (
                                        <div>
                                            <span />
                                            <span ref={countUpRef} />
                                            <h5 ref={countUpRef} className="numbers__num">
                                                {" "}
                                            </h5>
                                        </div>
                                    )}
                                </CountUp>
                                <p>
                                    {" "}
                                    voluntarios/as que se movilizaron en Argentina en construcciones
                                    y eventos masivos.
                                </p>
                            </div>

                            <div className="numbers__items">
                                <CountUp
                                    start={0}
                                    end={15.6}
                                    delay={0}
                                    duration={4}
                                    decimal="."
                                    decimals={3}
                                    prefix="+"
                                    className=""
                                >
                                    {({ countUpRef }) => (
                                        <div>
                                            <span />
                                            <span ref={countUpRef} />
                                            <h5 ref={countUpRef} className="numbers__num">
                                                {" "}
                                            </h5>
                                        </div>
                                    )}
                                </CountUp>
                                <p>
                                    {" "}
                                    viviendas de emergencia
                                    construidas en los asentamientos
                                </p>
                            </div>
                        </div>

                        <div className="numbers__infoCenter">
                            <div className="numbers__items">
                                <CountUp
                                    start={0}
                                    end={25.0}
                                    delay={0}
                                    duration={4}
                                    decimal="."
                                    decimals={3}
                                    prefix="+"
                                >
                                    {({ countUpRef }) => (
                                        <div>
                                            <span />
                                            <h5 ref={countUpRef} className="numbers__num">
                                                {""}
                                            </h5>
                                        </div>
                                    )}
                                </CountUp>
                                <p>socios/as que comparten nuestra visión</p>
                            </div>

                            <div className="numbers__items">
                                <CountUp start={0} end={690} delay={0} duration={4} prefix="+">
                                    {({ countUpRef }) => (
                                        <div>
                                            <span />
                                            <h5 ref={countUpRef} className="numbers__num">
                                                {""}
                                            </h5>
                                        </div>
                                    )}
                                </CountUp>
                                <p>
                                    voluntarios/as realizan un trabajo permanente en los barrios
                                </p>
                            </div>
                        </div>

                        <div className="numbers__infoRight">
                            <div>
                                <div className="numbers__items">
                                    <CountUp start={0} end={80} delay={0} duration={6} prefix="+">
                                        {({ countUpRef }) => (
                                            <div>
                                                <span />
                                                <h5 ref={countUpRef} className="numbers__num">
                                                    {""}
                                                </h5>
                                            </div>
                                        )}
                                    </CountUp>
                                    <p>
                                        asentamientos en donde estamos trabajando, 58 de ellos con
                                        mesas de trabajo activas
                                    </p>
                                </div>
                            </div>

                            <div className="">
                                <div className="numbers__items">
                                    <CountUp start={0} end={150} delay={0} duration={5} prefix="+">
                                        {({ countUpRef }) => (
                                            <div>
                                                <span />
                                                <h5 ref={countUpRef} className="numbers__num">
                                                    {""}
                                                </h5>
                                            </div>
                                        )}
                                    </CountUp>
                                    <p>proyectos de infraestructura y mejoramiento de hábitat</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                :
                <div className="numbers__textCenter">



                </div>}

        </>
    );
}


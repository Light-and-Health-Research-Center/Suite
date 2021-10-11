import { useContext, useState, useEffect, createContext } from "react";
import { fullCalculation } from "../lib/rvp";

const RVPContext = createContext({});

export function useRVP() {
  return useContext(RVPContext);
}

export function RVPProvider({ children }) {
  const [ageOfObserver, setAgeOfObserver] = useState(40);
  const [luminanceContrast, setLuminanceContrast] = useState(0.9);
  const [targetSize, setTargetSize] = useState(4.8);
  const [backgroundLuminance, setBackgroundLuminance] = useState(10.0);
  const [calculation, setCalculation] = useState({
    pupilRadius: 0,
    retinalIlluminance: 0,
    targetLuminanceContrast: 0,
    targetSolidAngularSize: 0,
    thresholdContrast: 0,
    halfSaturationConstant: 0,
    maximumResponse: 0,
    performance: 0,
    reactionTime: 0,
    visibilityLevel: 0,
    relativeVisualPerformance: 0,
  });

  useEffect(() => {
    setCalculation(
      fullCalculation(
        ageOfObserver,
        luminanceContrast,
        targetSize,
        backgroundLuminance
      )
    );
  }, [ageOfObserver, luminanceContrast, targetSize, backgroundLuminance]);

  const value = {
    ageOfObserver,
    setAgeOfObserver,
    luminanceContrast,
    setLuminanceContrast,
    targetSize,
    setTargetSize,
    backgroundLuminance,
    setBackgroundLuminance,
    calculation,
    setCalculation,
  };

  return <RVPContext.Provider value={value}>{children}</RVPContext.Provider>;
}

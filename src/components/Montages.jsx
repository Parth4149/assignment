import { useState } from "react";
import { Box } from "@mui/material";
import Steppers from "./Steppers";
import Upload from "./Montages/Upload";
import MapChannel from "./Montages/MapChannel";
import SavePreview from "./Montages/SavePreview";

const Montages = () => {
  const [step, setStep] = useState(0);
  return (
    <section className="montages">
      <Steppers step={step} />
      <Box className="montages__inner">
        {step === 0 && <Upload setStep={setStep} />}
        {step === 1 && <MapChannel setStep={setStep} />}
        {step === 2 && <SavePreview setStep={setStep} />}
      </Box>
    </section>
  );
};

export default Montages;

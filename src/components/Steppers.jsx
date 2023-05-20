import { Divider, Box, Stepper, Step, StepLabel } from "@mui/material";

const Steppers = ({ step }) => {
  const steps = ["Upload EDFs", "Map Channels", "Save & Preview"];
  return (
    <section className="steppers">
      <Box className="steppers__inner">
        <Stepper activeStep={step} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
      <Divider />
    </section>
  );
};

export default Steppers;

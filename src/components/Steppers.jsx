import { Divider, Box, Stepper, Step, StepLabel } from "@mui/material";

const Steppers = () => {
  const steps = ["Upload EDFs", "Map Channels", "Save & Preview"];
  return (
    <>
      <Box className="steppers">
        <Stepper activeStep={1} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
      <Divider />
    </>
  );
};

export default Steppers;

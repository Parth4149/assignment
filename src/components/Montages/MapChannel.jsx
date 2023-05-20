import { Button } from "@mui/material";

const MapChannel = ({ setStep }) => {
  console.log("Map Channel");
  return (
    <>
      <section className="mapchannel"></section>
      <footer className="upload__footer">
        <Button variant="contained" onClick={() => setStep((curr) => curr - 1)}>
          Back
        </Button>
        <Button variant="contained" onClick={() => setStep((curr) => curr + 1)}>
          Next
        </Button>
      </footer>
    </>
  );
};

export default MapChannel;
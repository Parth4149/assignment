import { Button } from "@mui/material";
import DenseTable from "../ui/DenseTable";

const MapChannel = ({ setStep }) => {
  return (
    <>
      <section className="mapchannel">
        <DenseTable />
      </section>
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

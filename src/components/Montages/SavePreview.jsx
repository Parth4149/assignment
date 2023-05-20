import { useState } from "react";
import { Button } from "@mui/material";
import DenseTable from "../ui/DenseTable";

const SavePreview = ({ setStep }) => {
  const [isSaved, setIsSaved] = useState(false);

  return (
    <>
      <section className="mapchannel">
        <DenseTable edit={true} setStep={setStep} isSaved={isSaved} />
      </section>
      <footer className="upload__footer">
        <Button variant="contained" onClick={() => setStep((curr) => curr - 1)}>
          Back
        </Button>
        <Button
          variant="contained"
          color="success"
          onClick={() => setIsSaved(true)}
        >
          Save
        </Button>
      </footer>
    </>
  );
};

export default SavePreview;

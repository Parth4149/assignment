import UploadFileIcon from "@mui/icons-material/UploadFile";
import { Button } from "@mui/material";

const Upload = ({ setStep }) => {
  console.log("Upload");
  return (
    <>
      <section className="upload">
        <div className="upload__inner">
          <UploadFileIcon color="primary" />
          <input type="file" name="file" id="file" />
          <p>Or Drop File here</p>
          <pre></pre>
        </div>
      </section>
      <footer className="upload__footer">
        <Button variant="contained" disabled>
          Back
        </Button>
        <Button variant="contained" onClick={() => setStep((curr) => curr + 1)}>
          Next
        </Button>
      </footer>
    </>
  );
};

export default Upload;

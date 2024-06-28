import { Images } from "lucide-react";
import React from "react";

const Img_section = ({
  handleUploadImage,
  inputFileRef,
  handleFileUploadChange,
  inputFile,
  styles,
}: {
  handleUploadImage: () => void;
  inputFileRef: React.LegacyRef<HTMLInputElement>;
  handleFileUploadChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  inputFile: File | undefined | null;
  styles: () => { filter: string };
}) => {
  return (
    <>
      {inputFile ? (
        <div>
          <img
            id="edited-img"
            src={URL.createObjectURL(inputFile)}
            className="img-main"
            style={styles()}
          />
        </div>
      ) : (
        <>
          <input
            type="file"
            ref={inputFileRef}
            style={{ display: "none" }}
            onChange={handleFileUploadChange}
          />
          <div
            className="input-container"
            id="OpenImgUpload"
            onClick={handleUploadImage}
          >
            <Images color="#3a3636" />{" "}
            <p className="image-text">Choose Image</p>
          </div>
        </>
      )}
    </>
  );
};

export default Img_section;

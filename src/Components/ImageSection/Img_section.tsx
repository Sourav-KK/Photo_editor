import { Images } from "lucide-react";

const Img_section = ({ photo }: { photo: boolean }) => {
  return (
<>
      {photo ? (
            <img src="" alt="" />
      ) : (
            <div className="input-container">
          <Images color="#3a3636" /> <p className="image-text">Choose Image</p>
        </div>
      )}
      </>
//     </div>
  );
};

export default Img_section;

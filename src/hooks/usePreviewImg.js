import useShowToast from "./useShowToast";
import { useState } from "react";

const usePreviewImg = () => {
  const [selectedFile, setSelectedFile] = useState(null); // no selected file
  const showToast = useShowToast();
  const maxFileSizeBytes = 2 * 1024 * 1024; // 2MB

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file && file.type.startsWith("image/")) {
      if (file.size > maxFileSizeBytes) {
        showToast("Error", "File size must be less than 2MB", "error");
        setSelectedFile(null);
        return;
      }

      const reader = new FileReader();

      reader.onloadend = () => {
        setSelectedFile(reader.result);
      };

      reader.readAsDataURL(file);
    } else {
      showToast("Error", "Please select an image file", "error");
      return;
    }
  };

  return { selectedFile, handleImageChange, setSelectedFile };
};

export default usePreviewImg;

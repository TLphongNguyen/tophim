const uploadToCloudinary = async (file: File) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "QmvNF3bLbRdOGad7zW7RPr6dt6Y");

  const res = await fetch(
    "https://api.cloudinary.com/v1_1/dr6fnpcki/image/upload",
    {
      method: "POST",
      body: formData,
    }
  );

  const data = await res.json();
  return data.secure_url;
};
export default uploadToCloudinary;

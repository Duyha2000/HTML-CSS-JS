import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.scss";
import axios from "axios";

interface IProfile {
  name: string;
  email: string;
  phone: string;
  address: string;
  avatar: string;
}
const Profile = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState<IProfile>({
    name: "",
    email: "",
    phone: "",
    address: "",
    avatar: "",
  });
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return;
    }

    const fetchProfile = async () => {
      try {
        const response = await fetch("https://api-ecom.duthanhduoc.com/me", {
          method: "GET",
          headers: {
            Authorization: `${token}`,
          },
        });

        const data = await response.json();
        setProfile(data.data);
        console.log(data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProfile();
  }, [navigate]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;

    if (name === "avatar" && files && files.length > 0) {
      const imageUrl = URL.createObjectURL(files[0]);
      setProfile((prevProfile) => ({
        ...prevProfile,
        [name]: imageUrl,
      }));
    } else {
      const { value } = e.target;
      setProfile((prevProfile) => ({
        ...prevProfile,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return;
    }

    const formData = new FormData(e.currentTarget as HTMLFormElement);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      address: formData.get("address"),
    };

    try {
      // API call for updating user data
      const updateUserResponse = await axios.put(
        "https://api-ecom.duthanhduoc.com/user",
        data,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: ` ${token}`,
          },
        }
      );

      const updateUserResult = updateUserResponse.data;
      console.log("Update User Result:", updateUserResult);

      // Check if an avatar file is selected
      const avatarFile = formData.get("avatar");
      if (avatarFile instanceof File) {
        // API call for uploading avatar
        const uploadAvatarFormData = new FormData();
        uploadAvatarFormData.append("image", avatarFile);

        const uploadAvatarResponse = await axios.post(
          "https://api-ecom.duthanhduoc.com/user/upload-avatar",
          uploadAvatarFormData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: ` ${token}`,
            },
          }
        );

        const uploadAvatarResult = uploadAvatarResponse.data;
        console.log("Upload Avatar Result:", uploadAvatarResult.data);
      }

      // Handle other responses as needed
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        name="name"
        value={profile.name}
        onChange={handleInputChange}
      />
      <input
        type="email"
        placeholder="Email"
        name="email"
        value={profile.email}
        onChange={handleInputChange}
        style={{
          pointerEvents: "none",
          backgroundColor: "#f4f4f4",
          opacity: "0.5",
        }}
      />
      <input
        type="text"
        placeholder="Phone"
        name="phone"
        value={profile.phone}
        onChange={handleInputChange}
      />
      <input
        type="text"
        placeholder="Address"
        name="address"
        value={profile.address}
        onChange={handleInputChange}
      />
      <img
        src={profile.avatar}
        alt="image"
        style={{
          width: "100px",
          height: "100px",
          overflow: "hidden",
          borderRadius: "100%",
          background: "red",
        }}
      />

      <label htmlFor="file" className="fileLabel">
        Choose a file
      </label>

      <input
        type="file"
        name="avatar"
        id="file"
        onChange={handleInputChange}
        accept=".jpg,.jpeg,.png"
        className="inputfile"
      />
      <p>Dụng lượng file tối đa 1 MB Định dạng:.JPEG, .PNG</p>
      <button type="submit">Update</button>
    </form>
  );
};

export default Profile;

"use client";
import UserProfile from "@/components/template/UserProfile";
import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

function ProfilePage() {
  const [userData, setUserData] = useState({
    name: "",
    lastName: "",
    phoneNumber: "",
  });

  const params = useParams();
  useEffect(() => {
    const userId = params?.userId;
    const fetchData = async () => {
      await axios
        .post("/api/find-user", { userId })
        .then((res) => {
          if (res.status === 200) {
            setUserData({
              name: res.data.userInfo.name,
              lastName: res.data.userInfo.lastName,
              phoneNumber: res.data.userInfo.phoneNumber,
            });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchData();
  }, []);

  return (
    <UserProfile
      name={userData.name}
      lastName={userData.lastName}
      phoneNumber={userData.phoneNumber}
    />
  );
}

export default ProfilePage;

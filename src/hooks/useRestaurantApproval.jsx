import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";

const useRestaurantApproval = () => {
  const { user } = useContext(AuthContext);
  const [isRestaurantApprovad, setIsRestaurantApprovad] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        `https://jashore-foodies-backend.vercel.app/isrestaurantapproved/${user?.email}`
      );
      setIsRestaurantApprovad(result.data);
    };
    fetchData();
  }, [user]);
  return isRestaurantApprovad;
};
export default useRestaurantApproval;

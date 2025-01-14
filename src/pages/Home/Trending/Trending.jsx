import { useContext, useEffect, useState } from "react";
import { BsArrowRightCircle } from "react-icons/bs";
import { AuthContext } from "../../../provider/AuthProvider";
import TrendingCard from "./TrendingCard";
const Trending = () => {
  const { user, loading } = useContext(AuthContext);
  const [items, setItems] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (loading) {
          return;
        }
        const response = await fetch(
          `https://jashore-foodies-backend.vercel.app/trending`
        );
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [user, loading]);
  return (
    <div>
      <div className="mt-5 grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-11/12 mx-auto">
        {items.map((item) => (
          <TrendingCard key={item._id} item={item}></TrendingCard>
        ))}
      </div>
      <div className="flex justify-end w-11/12 mx-auto">
        <button className="bg-red-100 text-[#E94339] my-1 flex items-center gap-1 justify-center px-1 rounded-full btn-sm text-base">
          <span>See more</span> <BsArrowRightCircle></BsArrowRightCircle>
        </button>
      </div>
    </div>
  );
};

export default Trending;

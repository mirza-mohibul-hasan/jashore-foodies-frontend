import { useEffect, useState } from "react";
import AllRestaurentsCard from "./AllRestaurentsCard";

const AllRestaurents = () => {
  const [restarents, setRestaurants] = useState([]);
  useEffect(() => {
    fetch("restaurants.json")
      .then((res) => res.json())
      .then((data) => setRestaurants(data));
  }, []);
  return (
    <div className="max-w-7xl mx-auto mt-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
        {restarents.map((restu) => (
          <AllRestaurentsCard
            key={restu.restaurantId}
            restu={restu}
          ></AllRestaurentsCard>
        ))}
      </div>
    </div>
  );
};

export default AllRestaurents;

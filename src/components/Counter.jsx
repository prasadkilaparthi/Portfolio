import React, { useEffect, useState } from "react";

const VisitorCounter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch(
      "https://api.countapi.xyz/hit/portfolio-omega-kohl-97.vercel.app/visits"
    )
      .then((response) => response.json())
      .then((data) => setCount(data.value))
      .catch((error) => console.error("Error fetching visitor count:", error));
  }, []);

  return (
    <div className="flex text-gray-700 text-sm border-lg py-4 md:py-2 md:px-1 px-2 items-center ">
      <span className="flex-1 font-bold text-center w-10 rounded-lg mb-0 mt-12">
        {" "}
        Visitors: {count}
      </span>
    </div>
  );
};

export default VisitorCounter;

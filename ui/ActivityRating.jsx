import React, { useState } from "react";
import clsx from "clsx";

const ActivityRating = ({ data }) => {
  const [rating, setRating] = useState(0);
  return (
    <div className="px-3">
      <h1 className="font-semibold text-lg">{data?.[0]?.opinion_question}</h1>
      <div className="flex gap-3">
        {data?.[0]?.answerDetail.map((x) => (
          <span
            role="button"
            key={x.id}
            className={clsx("text-md border border-gray-300 px-3 rounded-md", {
              "bg-primary-pink text-white border-primary-pink": rating === x.id,
              "text-gray-600": rating !== x.id,
            })}
            onClick={() => setRating(x.id)}
          >
            {x.answers}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ActivityRating;

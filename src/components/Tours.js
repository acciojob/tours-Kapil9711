import React from "react";
import Tour from "./Tour";

const Tours = ({ tours, deleteTour }) => {
  return (
    <section>
      {tours.map((tour) => {
        return <Tour key={tour.id} {...tour} deleteTour={deleteTour} />;
      })}
    </section>
  );
};

export default Tours;

import React from "react";

const Tour = (props) => {
  const { name, info, image, price, deleteTour, id } = props;
  const [showMore, setShowMore] = React.useState(false);
  //   console.log(name, info, price);
  return (
    <div>
      <h1>{name}</h1>
      <p>{showMore ? info : info.slice(0, 200)}</p>
      <img src={image} alt="" />
      <p>{price}</p>
      <button onClick={() => setShowMore((prev) => !prev)}>
        {showMore ? "Show-Less" : "Show-More"}
      </button>
      <p>
        {" "}
        <button onClick={() => deleteTour(id)}>deleted</button>
      </p>
    </div>
  );
};

export default Tour;

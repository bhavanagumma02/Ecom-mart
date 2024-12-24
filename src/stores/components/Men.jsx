import React from "react";
import { menData } from "../data/men";

export default function Men() {
  const firstFive = menData.slice(0, 5);
  return (
    <>
      <h2>Men's Fashion</h2>
      <div className="proSection">
        {firstFive.map((item) => {
          return (
            <div className="imgBox">
              <img
                className="proImage"
                src={item.image}
                alt="mobile data images"
              />
            </div>
          );
        })}
        ;
      </div>
    </>
  );
}

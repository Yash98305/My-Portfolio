import React from "react";
import "../css/card.css";
const Card = ({ data }) => {
  return (
    <>
      <div className="nft">
        <div className="main">
          <img className="tokenImage" src={data.photo} alt="NFT" />

          <h2 style={{textAlign: "center"}}>{data.name}</h2>
          <p className="description">{data.desc}</p>
          <hr/>
          <div className="tokenInfo">
          <a href={data.github}> <div className="price">
              <img
                src="https://user-images.githubusercontent.com/3369400/139447912-e0f43f33-6d9f-45f8-be46-2df5bbc91289.png"
                alt="G"
                style={{
                  height: "15px",
                }}
              />
              <p
                style={{
                  marginLeft: "10px",
                }}
              >
                Github
              </p>
            </div></a>
            {data.live.length>0?<a href={data.live}> <div className="duration">
              <ins>◷</ins>
              <p>live</p>
            </div></a>:<div className="duration">
              <ins>◷</ins>
              <p>Not live</p>
            </div>}
          </div>
          <hr />
        </div>
      </div>
    </>
  );
};

export default Card;

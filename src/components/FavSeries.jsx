import React from "react";

import seriesData from "../api/seriesData.json";

function FavSeries() {

    return (
      <>
        {seriesData.map((currElement)=>{
          return(
            <div className="card-container" key={currElement.id}>
              <img src={currElement.img} width={"100%"} alt="cover-image" />
              <h2>{currElement.name} </h2>
              <p>
                {" "}
                <strong>Genres: </strong> {currElement.genre}
              </p>
              <p>
                <strong>Summary: </strong>
                {currElement.desc}
              </p>
              <button>Watch now</button>
            </div>
          )
        })}
        
        {/* second series */}
        {/* <div className="card-container">
          <img src={seriesData[1].img} width={"100%"} alt="cover-image" />
          <h2>{seriesData[1].name} </h2>
          <p>
            {" "}
            <strong>Genres: </strong> {seriesData[1].genre}
          </p>
          <p>
            <strong>Summary: </strong>
            {seriesData[1].desc}
          </p>
          <button>Watch now</button>
        </div> */}
      </>
    );
}

export default FavSeries;

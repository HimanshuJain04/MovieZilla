import React from "react";
import ReactPlayer from "react-player";
import { useEffect, useState } from "react";
import { FetchDataFromApi } from "../api/FetchDataFromApi";

function Player(props) {
  const id = props?.id;
  const isPlay = props?.isPlay;

  const [playerId, setPlayerId] = useState("");
  const midUrl = `movie/${id}/videos?`;

  useEffect(() => {
    FetchDataFromApi(midUrl)
      .then((res) => {
        let result = res?.data?.results;
        result = result?.filter((item) => item?.type === "Trailer");
        setPlayerId(result[0]?.key);
      })
      .catch((err) => {
        setPlayerId("");
        console.log(err);
        console.log("Error in player ");
      });
  }, [id]);

  return (
    <>
      {!isPlay ? (
        <></>
      ) : (
        <div className="w-full h-full">
          <ReactPlayer
            playing
            controls
            url={`https://www.youtube.com/watch?v=${playerId}`}
          />
        </div>
      )}
    </>
  );
}

export default Player;

import React from "react";

const VideoCard = ({ info }) => {
  function formatNumber(n) {
    if (n >= 1_000_000) {
      return (n / 1_000_000).toFixed(1) + "M";
    } else if (n >= 1_000) {
      return (n / 1_000).toFixed(1) + "K";
    } else {
      return n.toString();
    }
  }
  console.log(info);
  return (
    <div className="w-[325px] mx-4 font-sans my-5 italic hover:shadow-xl rounded-lg">
      <img
        className="rounded-xl "
        alt="thumbnail"
        src={info?.snippet?.thumbnails.medium.url}
      />
      <ul className="ml-4">
        <li className="font-semibold mt-2 w-[290px] line-clamp-2 ">
          {info?.snippet?.title}
        </li>
        <li>{info?.snippet?.channelTitle}</li>
        <li>{formatNumber(info?.statistics?.viewCount)}views</li>
      </ul>
    </div>
  );
};

export default VideoCard;

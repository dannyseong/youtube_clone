import React from 'react';
import { useNavigate } from 'react-router-dom';
import TimeAgo from 'react-timeago';

export default function VideoCard({ video, type }) {
  const navigate = useNavigate();
  const { title, publishedAt, channelTitle, thumbnails } = video.snippet;
  const isList = type === 'list';

  return (
    <li
      className={`${
        isList ? 'flex gap-1 m-2' : 'flex flex-col '
      } cursor-pointer`}
      onClick={() => navigate(`/videos/watch/${video.id}`, { state: video })}
    >
      <img
        className={isList ? 'w-60 mr-2' : 'w-full'}
        src={thumbnails.medium.url}
        alt='thumbnails'
      ></img>
      <div>
        <h1 className='font-semibold my-2 line-clamp-2'>{title}</h1>
        <p className='text-sm opacity-80'>{channelTitle}</p>
        <p className='text-sm opacity-80'>
          <TimeAgo date={publishedAt} />
        </p>
      </div>
    </li>
  );
}

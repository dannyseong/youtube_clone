import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router-dom';
import VideoCard from '../components/VideoCard';
import { useYoutubeApi } from '../context/YoutubeApiiContext';

export default function Videos() {
  const { keyword } = useParams();
  const { youtube } = useYoutubeApi();
  const {
    data: videos,
    isLoading,
    error,
  } = useQuery(['videos', keyword], () => youtube.search(keyword), {
    staleTime: 1000 * 60 * 1,
  });
  return (
    <div>
      {isLoading && <p>Loading....</p>}
      {error && <p>Something is wrong 😂</p>}
      {videos && (
        <ul className='grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2 gap-y-4'>
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </ul>
      )}
    </div>
  );
}

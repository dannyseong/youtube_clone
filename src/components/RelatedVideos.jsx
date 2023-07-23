import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useYoutubeApi } from '../context/YoutubeApiiContext';
import VideoCard from './VideoCard';

export default function RelatedVideos({ id }) {
  const { youtube } = useYoutubeApi();
  const {
    error,
    isLoading,
    data: videos,
  } = useQuery(['related', id], () => youtube.relatedVideos(id));
  console.log(videos);
  return (
    <>
      {isLoading && <p>Loading....</p>}
      {error && <p>Something is wrong 😂</p>}
      {videos && (
        <ul>
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} type='list' />
          ))}
        </ul>
      )}
    </>
  );
}

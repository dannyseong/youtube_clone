import React from 'react';
import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <h1 className='text-3xl mb-5'>Oops!!</h1>
      <p className='mb-10'>Sorry, an unexpected error has occurred!</p>
      <p>
        <em className='opacity-50'>{error.statusText || error.message}</em>
      </p>
    </div>
  );
}

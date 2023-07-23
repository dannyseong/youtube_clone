import React, { useEffect, useState } from 'react';
import { BsYoutube, BsSearch } from 'react-icons/bs';
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function SearchHeader() {
  const navigate = useNavigate();
  const { keyword } = useParams();
  const [text, setText] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/videos/${text}`);
  };

  useEffect(() => setText(keyword || ''), [keyword]);

  return (
    <header className='w-full flex p-4 text-2xl border-b border-b-zinc-600'>
      <Link to='/' className='flex items-center'>
        <BsYoutube className='text-4xl text-brand' />
        <h1 className='text-bold ml-2 text-3xl'>YouTube</h1>
      </Link>
      <form onSubmit={handleSubmit} className='w-full flex justify-center'>
        <input
          className='w-7/12 outline-none px-2 bg-black text-gray-50'
          type='text'
          placeholder='Search....'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className='bg-zinc-600 p-4'>
          <BsSearch />
        </button>
      </form>
    </header>
  );
}

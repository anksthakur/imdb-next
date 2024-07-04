// components/Github.tsx
'use client';

import { signIn } from 'next-auth/react';
import React from 'react';
import { FaGithub } from "react-icons/fa";

const Github = () => {
  return (
    <button
      onClick={() => signIn('github')}
      className="flex justify-evenly border-solid border-2 border-black-500 px-2 rounded-md text-center mt-3"
    >
     <span className='mt-1'><FaGithub fontSize="1.5rem"/></span> Sign in with GitHub
    </button>
  );
};

export default Github;

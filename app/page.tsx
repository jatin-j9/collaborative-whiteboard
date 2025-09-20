'use client';

import { Button } from '@/components/ui/button';
import { Authenticated, Unauthenticated, AuthLoading } from 'convex/react';
import { SignInButton, SignUpButton, UserButton } from '@clerk/nextjs';

export default function Home() {
  return (
    <div className='p-8'>
      <AuthLoading>
        <div>Loading...</div>
      </AuthLoading>

      <Unauthenticated>
        <div className='flex flex-col items-center justify-center min-h-screen'>
          <h1 className='text-2xl font-bold mb-4'>
            Welcome to Collaborative Whiteboard - Boardly
          </h1>
          <div className='flex items-center gap-4'>
            <SignInButton mode='modal'>
              <Button>Sign In</Button>
            </SignInButton>
            <SignUpButton mode='modal'>
              <Button>Sign Up</Button>
            </SignUpButton>
          </div>
        </div>
      </Unauthenticated>

      <Authenticated>
        <div className='flex justify-between items-center mb-8'>
          <span className='text-xl'>Hello Board!</span>
          <UserButton />
        </div>
        <Button>Click Me</Button>
      </Authenticated>
    </div>
  );
}

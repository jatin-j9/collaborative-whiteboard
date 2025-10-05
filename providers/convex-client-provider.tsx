'use client';

import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  useAuth,
} from '@clerk/nextjs';
import { ConvexProviderWithClerk } from 'convex/react-clerk';
import {
  AuthLoading,
  Authenticated,
  ConvexReactClient,
  Unauthenticated,
} from 'convex/react';
import { Loading } from '@/components/auth/loading';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

interface ConvexClientProviderProps {
  children: React.ReactNode;
}

const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL!;

const convex = new ConvexReactClient(convexUrl);

export const ConvexClientProvider = ({
  children,
}: ConvexClientProviderProps) => {
  return (
    <ClerkProvider>
      <ConvexProviderWithClerk useAuth={useAuth} client={convex}>
        <AuthLoading>
          <Loading />
        </AuthLoading>

        <Unauthenticated>
          <div className='flex flex-col items-center justify-center min-h-screen bg-gray-50'>
            <div className='bg-white rounded-lg shadow-lg border border-gray-200 p-8 max-w-md w-full mx-4'>
              <div className='flex flex-col items-center space-y-6'>
                <Image
                  src='/logo.svg'
                  alt='Boardly Logo'
                  width={64}
                  height={64}
                />
                <div className='text-center space-y-2'>
                  <h1 className='text-2xl font-bold text-gray-900'>
                    Welcome to Boardly
                  </h1>
                  <p className='text-gray-600 text-sm'>
                    Collaborative Whiteboard Platform
                  </p>
                </div>
                <div className='flex flex-col gap-3 w-full'>
                  <SignInButton mode='modal'>
                    <Button className='w-full'>Sign In</Button>
                  </SignInButton>
                  <SignUpButton mode='modal'>
                    <Button variant='outline' className='w-full'>
                      Sign Up
                    </Button>
                  </SignUpButton>
                </div>
              </div>
            </div>
          </div>
        </Unauthenticated>

        <Authenticated>{children}</Authenticated>
      </ConvexProviderWithClerk>
    </ClerkProvider>
  );
};

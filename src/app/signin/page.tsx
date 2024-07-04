// pages/signin.tsx
import Link from 'next/link';
import Github from '../components/Github';
import Google from '../components/Google';

const SigninPage = async () => {
  return (
    <>
      <div className='bg-gray-300 min-h-screen flex justify-center items-center p-4'>
        <div className='bg-white w-full max-w-4xl mx-auto flex flex-col md:flex-row gap-8 px-6 md:px-12 py-8 md:py-16 rounded-lg shadow-lg'>
          <div className='flex flex-col flex-1'>
            <h1 className='font-bold text-center text-xl md:text-2xl mb-4'>Sign in</h1>
            <Github />
            <Google />
            <p className='text-center mt-3'>--------- or ---------</p>
            <Link href="/register">
              <div className='border border-black-500 px-4 py-2 rounded-md bg-yellow-500 text-center mt-3 block'>
                Create a New Account
              </div>
            </Link>
            <p className='font-light text-slate-500 text-xs mt-3 text-center'>
              By signing in, you agree to IMDbs Conditions of Use and Privacy Policy.
            </p>
          </div>
          <div className='flex flex-col flex-1 mt-8 md:mt-0'>
            <h1 className='font-extrabold text-center text-xl md:text-2xl mb-4'>Benefits of your free IMDb account</h1>
            <h4 className='font-bold pt-4'>Personalized Recommendations</h4>
            <p className='text-sm'>Discover shows you will love.</p>
            <h4 className='font-bold pt-4'>Your Watchlist</h4>
            <p className='text-sm'>Track everything you want to watch and receive email when movies open in theaters.</p>
            <h4 className='font-bold pt-4'>Your Ratings</h4>
            <p className='text-sm'>Rate and remember everything you have seen.</p>
            <h4 className='font-bold pt-4'>Contribute to IMDb</h4>
            <p className='text-sm'>Add data that will be seen by millions of people and get cool badges.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SigninPage;

import Link from 'next/link'
import { IconBurger, IconSearch, IconWorld } from '@tabler/icons-react'
// bg-gradient-to-r from-slate-950 via-green-950 to-teal-950

export default function Home() {

  return (
    <div className="">
      <div className="bg-uni-dark h-[54rem] flex justify-center items-center">
        <div className="flex flex-col items-center">
          <div className="text-white text-5xl sm:text-6xl font-semibold w-[24rem] sm:w-[40rem] text-center">
            <span className="">The food recommendation app for </span>
            <span className="text-uni-brand">everyone</span>
          </div>
          <Link href='/profile/home'>
            <button className="bg-uni-brand px-6 py-3 text-white mt-10 ml-5 text-lg hover:shadow-2xl hover:shadow-uni-brand">Get Started</button>
          </Link>
        </div>
      </div>


      <div className="bg-[url('../../public/layer-1-1.svg')] bg-cover bg-no-repeat w-full aspect-[960/150] bg-center"></div>
      <div className="bg-[url('../../public/layer-2.svg')] bg-cover bg-no-repeat w-full aspect-[960/150] bg-center"></div>

      <div className="flex justify-center flex-col p-20">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold">The Ultimate Food Recommendation App</h1>
          <p className="text-2xl lg:text-3xl font p-4 text-gray-500">Personalized recommendations for you. Anytime, anywhere. That&lsquo;s it. </p>
        </div>
      </div>

      <div className='flex justify-center flex-wrap'>
          <div className="w-72 px-6 pb-4 flex flex-col items-center text-center">
            <IconBurger size={72} stroke={1} />
            <h2 className="font-medium text-xl">Choose your preferences</h2>
            <p>Craving a particular cuisine? Or maybe you&apos;re in the mood for a specific dish! Select your preferences, and we&apos;ll curate some recommendations for you!</p>
          </div>
          <div className="w-72 px-6 pb-4 flex flex-col items-center text-center">
            <IconWorld size={72} stroke={1} />
            <h2 className="font-medium text-xl">Explore recipes!</h2>
            <p>Dive into our vast collection of mouthwatering recipes from around the world. Whether you&apos;re an advanced cook, or just starting out, we have recipes prepared for all skill levels!</p>
          </div>
          <div className="w-72 px-6 pb-4 flex flex-col items-center text-center">
            <IconSearch size={72} stroke={1} />
            <h2 className="font-medium text-xl">Discover Restaurants </h2>
            <p>Want to dine out or order in? Find top-notch restaurants in your area that cater to your dietary needs and serve your favorite dishes.</p>
          </div>
      </div>
    </div>
  )
}
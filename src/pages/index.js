import Link from 'next/link'
import { RecipeFilterProvider, RecipeFilterContext } from './context/RecipeFilterContext'
import { useContext } from 'react'
import Image from 'next/image'

export default function wrappedHome() {
  return (
    <RecipeFilterProvider>
      <Home />
    </RecipeFilterProvider>
  )
}

// bg-gradient-to-r from-slate-950 via-green-950 to-teal-950

function Home() {

  return (
    <div className="">
      <div className="bg-uni-dark h-[54rem] flex ">
        <div className="flex items-center px-4 sm:px-32 justify-between w-full z-10">
          <div>
            <div className="text-white text-5xl sm:text-8xl font-semibold w-[24rem] sm:w-[40rem]">
              <span className="">The food recommendation app for </span>
              <span className="text-uni-brand">everyone</span>
            </div>
            <div className="flex">
              <Link href='/profile/home'>
                <button className="bg-uni-brand rounded-full px-6 py-3 text-white mt-10 ml-5 text-lg hover:shadow-2xl hover:shadow-uni-brand">Get Started</button>
              </Link>
            </div>
          </div>
          <Image src='/restaurant.png' className="rounded-3xl hidden md:block" width={500} height={500} alt="restaurant"></Image>
        </div>
      </div>
      <div className="bg-[url('../../public/layer-1-1.svg')] bg-cover bg-no-repeat w-full aspect-[960/150] bg-center"></div>
      <div className="bg-[url('../../public/layer-2.svg')] bg-cover bg-no-repeat w-full aspect-[960/150] bg-center"></div>

      <div className="flex justify-center flex-col p-20">
        <div className="text-center">
          <h1 className="text-6xl font-bold">The Ultimate Food Recommendation App</h1>
          <p className="text-3xl font p-4 text-gray-500">Personalized recommendations for you. Anytime, anywhere. That&lsquo;s it. </p>
        </div>
        <div className="pt-44">
          <h1 className="text-center font-semibold text-5xl p-8 pb-4">How Food Wrecked Works</h1>
          <div className="flex">
            <Image src='/graphic-1.png' width={500} height={500} alt="graphic-1" className="object-cover"></Image>
            <div className="text-center">
              <h2 className="font-medium text-xl">Dietary needs</h2>
              <p>What dietary needs do you have? Vegan, gluten-free, keto, or any other specific requirements you may have. Let us know, we&apos;ll take care of the rest</p>
            </div>
          </div>
        </div>


        <div className="flex gap-20 justify-center p-20">
          <div className="flex flex-col">
            <div className="p-4 pt-0 flex flex-wrap justify-between w-[50rem]">
              <div className="w-72 px-4 pb-4 ">
              </div>
              <div className="w-72 px-4 pb-4 ">
                <h2 className="font-medium text-xl">Choose your preferences</h2>
                <p>Craving a particular cuisine? Or maybe you&apos;re in the mood for a specific dish! Select your preferences, and we&apos;ll curate some recommendations for you!</p>
              </div>
              <div className="w-72 px-4 pb-4 ">
                <h2 className="font-medium text-xl">Explore recipes!</h2>
                <p>Dive into our vast collection of mouthwatering recipes from around the world. Whether you&apos;re an advanced cook, or just starting out, we have recipes prepared for all skill levels!</p>
              </div>
              <div className="w-72 px-4 pb-4 ">
                <h2 className="font-medium text-xl">Discover Restaurants </h2>
                <p>Want to dine out or order in? Find top-notch restaurants in your area that cater to your dietary needs and serve your favorite dishes.</p>
              </div>

            </div>
          </div>

        </div>
      </div>

    </div>
  )
}



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
    <div class="">
      <div class="bg-uni-dark h-[54rem] flex ">
{/*       <svg id="visual" class="absolute -z-1 translate-x-[50rem]" viewBox="0 0 900 600" width="900" height="600" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1"><g transform="translate(490.04307217236345 323.2979487408621)"><path d="M98 -118.9C125.4 -70.7 144.7 -35.4 151.5 6.8C158.4 49 152.7 98.1 125.4 125.2C98.1 152.4 49 157.7 -10.8 168.5C-70.7 179.4 -141.4 195.8 -184.8 168.6C-228.1 141.4 -244 70.7 -228.4 15.7C-212.7 -39.4 -165.4 -78.7 -122.1 -126.9C-78.7 -175.1 -39.4 -232 -2 -230C35.4 -228 70.7 -167 98 -118.9" fill="#FA7268"></path></g></svg>
      <svg id="visual" class="absolute -z-1 translate-x-[90rem] translate-y-96 " viewBox="0 0 900 600" width="900" height="600" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1"><g transform="translate(441.6598133151549 288.2322035693793)"><path d="M180.1 -155.1C230.1 -130.1 265.1 -65.1 261.6 -3.4C258.2 58.2 216.4 116.4 166.4 151.1C116.4 185.8 58.2 196.9 5.9 191C-46.4 185.1 -92.9 162.2 -142 127.5C-191.2 92.9 -243.1 46.4 -245.1 -2C-247.1 -50.4 -199.2 -100.9 -150 -125.9C-100.9 -150.9 -50.4 -150.4 7.3 -157.8C65.1 -165.1 130.1 -180.1 180.1 -155.1" fill="#FA7268"></path></g></svg>
 */}        <div class="flex items-center px-4 sm:px-32 justify-between w-full z-10">
          <div>
            <div class="text-white text-5xl sm:text-8xl font-semibold w-[24rem] sm:w-[40rem]">
              <span class="">The food recommendation app for </span>
              <span class="text-uni-brand">everyone</span>
            </div>
            <div class="flex">
              <Link href='/profile/home'>
                <button class="bg-uni-brand rounded-full px-6 py-3 text-white mt-10 ml-5 text-lg">Get Started</button>
              </Link>
            </div>
          </div>
          <Image src='/restaurant.png' class="rounded-3xl hidden md:block" width={500} height={500} alt="restaurant"></Image>
        </div>
      </div>
      <div class="bg-[url('../../public/layer-1-1.svg')] bg-cover bg-no-repeat w-full aspect-[960/150] bg-center"></div>
      <div class="bg-[url('../../public/layer-2.svg')] bg-cover bg-no-repeat w-full aspect-[960/150] bg-center"></div>

      <div class="flex justify-center flex-col">
        <div class="text-center">
          <h1 class="text-6xl font-semibold">The Ultimate Food Recommendation App</h1>
          <p class="text-2xl font-medium p-4">Food Wrecked is a user-friendly app that offers personalized recommendations for recipes and restaurants based on your preferences and dietary needs.</p>
        </div>

        <div class="flex justify-between translate-y-44 ">
          <Image src='/splash-fruits.png' width={400} height={400} alt="fruits" class="rounded-3xl object-cover"></Image>
          <div class="p-4 flex flex-wrap justify-center w-[50rem]">
            <h1 class="w-[40rem] text-center font-bold text-5xl p-8 pb-4">How Food Wrecked Works</h1>
            <div class="w-72 px-4">
              <h2 class="font-medium text-xl">Dietary needs</h2>
              <p>What dietary needs do you have? Vegan, gluten-free, keto, or any other specific requirements you may have. Let us know, we&apos;ll take care of the rest</p>
            </div>
            <div class="w-72 px-4">
              <h2 class="font-medium text-xl">Choose your preferences</h2>
              <p>Craving a particular cuisine? Or maybe you&apos;re in the mood for a specific dish! Select your preferences, and we&apos;ll curate some recommendations for you!</p>
            </div>
            <div class="w-72 px-4">
              <h2 class="font-medium text-xl">Explore recipes!</h2>
              <p>Dive into our vast collection of mouthwatering recipes from around the world. Whether you&apos;re an advanced cook, or just starting out, we have recipes prepared for all skill levels!</p>
            </div>
            <div class="w-72 px-4">
              <h2 class="font-medium text-xl">Discover Restaurants </h2>
              <p>Want to dine out or order in? Find top-notch restaurants in your area that cater to your dietary needs and serve your favorite dishes.</p>
            </div>

          </div>
        </div>
      </div>

    </div>
  )
}



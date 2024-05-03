// import Image from "next/image";
// import { Text, Stack } from "@chakra-ui/react";
import Image from "next/image";
export default function Home() {
  return (
    <div className="bg-black min-h-screen text-white font-Montserrat">
      {/* Fiest Part */}
      <div className="flex flex-col md:flex-row">
        <div className="text-2xl md:pl-48 md:pt-44 pt-20 px-6">
          <h1 className="font-bold">Best Doctors of Pakistan</h1>
          <p className="font-normal md:w-[444px] pt-3">
            Snippy is a rich coding snippets app that lets you create your own
            code snippets, categorize them, and even sync them in the cloud so
            you can use them anywhere. All that is free!
          </p>
        </div>
        <div className="md:pl-28 flex justify-center pt-10">
          <Image
            src="/doctor1.png"
            width={300}
            height={300}
            alt="Picture of the author"
          />
        </div>
      </div>
      {/* Second Heading */}
      <h1 className="font-bold leading-7 text-2xl text-center pt-24">
        Our Blogs Regarding Exercise or treatment
      </h1>
      <div className="md:w-[540px] w-72 mx-auto border-b border-4 border-white mt-2"></div>

      {/* Blogs */}

      <div className="pt-16">
        <div className="flex flex-col justify-center items-center gap-y-5">
          <div className="flex flex-col gap-y-3 md:flex-row gap-x-28">
            <div className="relative w-52 h-44 flex justify-center items-center">
              <Image
                src="/Blog1.png"
                layout="fill"
                objectFit="cover"
                alt="Picture of the author"
              />
              <button className="absolute mt-20 bg-green px-1 py-1 cursor-pointer font-Montserrat font-bold text-lg">
                Diabetes Patient
              </button>
            </div>
            <div className="relative w-52 h-44 flex justify-center items-center">
              <Image
                src="/doctor2.png"
                layout="fill"
                objectFit="cover"
                alt="Picture of the author"
              />
              <button className="absolute mt-20 bg-green px-1 py-1 cursor-pointer font-Montserrat font-bold text-lg">
                Jaundice Patient
              </button>
            </div>
            <div className="relative w-52 h-44 flex justify-center items-center">
              <Image
                src="/doctor3.png"
                layout="fill"
                objectFit="cover"
                alt="Picture of the author"
              />
              <button className="absolute mt-20 bg-green px-1 py-1 cursor-pointer font-Montserrat font-bold text-lg">
                Flu Patient
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-y-3 md:flex-row gap-x-28">
            <div className="relative w-52 h-44 flex justify-center items-center">
              <Image
                src="/doctor4.png"
                layout="fill"
                objectFit="cover"
                alt="Picture of the author"
              />
              <button className="absolute mt-20 bg-green px-1 py-1 cursor-pointer font-Montserrat font-bold text-lg">
                Cough Patient
              </button>
            </div>
            <div className="relative w-52 h-44 flex justify-center items-center">
              <Image
                src="/doctor5.png"
                layout="fill"
                objectFit="cover"
                alt="Picture of the author"
              />
              <button className="absolute mt-20 bg-green px-1 py-1 cursor-pointer font-Montserrat font-bold text-lg">
                Weight Loss
              </button>
            </div>
            <div className="relative w-52 h-44 flex justify-center items-center">
              <Image
                src="/doctor6.png"
                layout="fill"
                objectFit="cover"
                alt="Picture of the author"
              />
              <button className="absolute mt-20 bg-green px-1 py-1 cursor-pointer font-Montserrat font-bold text-lg">
                Heart Attack
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Our Branches */}
      <h1 className="font-bold leading-7 text-2xl text-center pt-24">
        Our Branches
      </h1>
      <div className="w-[180px] mx-auto border-b border-4 border-white mt-2"></div>

      <div className="flex justify-center mt-16">
        <div className="grid grid-cols-2 gap-x-52 gap-y-10">
          <div className="flex">
            <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="h-6 w-6"
              >
                <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
              </svg>
            </div>
            <div className="pl-3">
              <h1>Peshawar</h1>
              <h2>Hayatabad Phase 7</h2>
            </div>
          </div>
          <div className="flex">
            <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="h-6 w-6"
              >
                <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
              </svg>
            </div>
            <div className="pl-3">
              <h1>Peshawar</h1>
              <h2>Hayatabad Phase 7</h2>
            </div>
          </div>
          <div className="flex">
            <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="h-6 w-6"
              >
                <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
              </svg>
            </div>
            <div className="pl-3">
              <h1>Peshawar</h1>
              <h2>Hayatabad Phase 7</h2>
            </div>
          </div>
          <div className="flex">
            <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="h-6 w-6"
              >
                <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
              </svg>
            </div>
            <div className="pl-3">
              <h1>Peshawar</h1>
              <h2>Hayatabad Phase 7</h2>
            </div>
          </div>
        </div>
      </div>

      {/* Third Heading */}
      <h1 className="font-bold leading-7 text-2xl text-center pt-20">
        Our Patients Reviews
      </h1>
      <div className="w-[280px] mx-auto border-b border-4 border-white mt-2"></div>

      {/* Patient Reviews */}

      <div>
        {/* 1 */}
        <div className="flex justify-center mt-10 pb-20">
          <div className="w-2/3 h-64 rounded-3xl bg-white">
            <div className="flex">
              <p className="text-black font-Montserrat font-bold text-2xl p-9 w-2/3">
                It really saves me time and effort. It is exactly what our
                business has been lacking. EEZY is the most valuable business
                resource we have EVER purchased. After using EEZY my business
                skyrocketed!
              </p>
              <div>
                <div
                  className="w-40 h-40 md:w-40 md:h-40 rounded-full bg-cover bg-center mt-12 ml-12"
                  style={{ backgroundImage: `url('/circle1.png')` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
        {/* 2 */}
        <div className="flex justify-center mt-2 pb-20">
          <div className="w-2/3 h-64 rounded-3xl bg-white">
            <div className="flex">
              <p className="text-black font-Montserrat font-bold text-2xl p-9 w-2/3">
                It really saves me time and effort. It is exactly what our
                business has been lacking. EEZY is the most valuable business
                resource we have EVER purchased. After using EEZY my business
                skyrocketed!
              </p>
              <div>
                <div
                  className="w-40 h-40 md:w-40 md:h-40 rounded-full bg-cover bg-center mt-12 ml-12"
                  style={{ backgroundImage: `url('/circle1.png')` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
        {/* 3 */}
        <div className="flex justify-center mt-2 pb-20">
          <div className="w-2/3 h-64 rounded-3xl bg-white">
            <div className="flex">
              <p className="text-black font-Montserrat font-bold text-2xl p-9 w-2/3">
                It really saves me time and effort. It is exactly what our
                business has been lacking. EEZY is the most valuable business
                resource we have EVER purchased. After using EEZY my business
                skyrocketed!
              </p>
              <div>
                <div
                  className="w-40 h-40 md:w-40 md:h-40 rounded-full bg-cover bg-center mt-12 ml-12"
                  style={{ backgroundImage: `url('/circle1.png')` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

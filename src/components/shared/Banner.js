import Image from "next/image";
import Link from "next/link";

export default function Banner() {
  return (
    <div class="container mx-auto lg:py-16">
      <section
        key="1"
        className="relative flex flex-col md:flex-row items-center justify-between justify-items-center w-full p-10 bg-white dark:bg-gray-800 overflow-hidden"
      >
        <div className="w-full md:w-1/2 flex flex-col items-start z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Welcome to My Portfolio
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            I am a passionate developer with experience in various technologies.
            Explore my portfolio to know more about my work...
          </p>
          <div className="mt-8">
            <button className="mr-4 bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-md">
              <a href="https://drive.google.com/uc?id=1gfi2OCXZ-psQ3fDZNx2BjyIQSH0NrXlo&export=download">
                Download CV
              </a>
            </button>
            <button className="bg-gray-200 hover:bg-gray-300 text-black p-3 rounded-md">
              <Link href="/contact">Contact Me</Link>
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/4 mt-10 md:mt-0 relative">
          <Image
            width="300"
            height="300"
            alt="Profile"
            className="mx-auto rounded-full h-[300px] w-[300px] object-cover shadow-lg hover:shadow-2xl transition-shadow duration-500 z-10"
            src="https://i.ibb.co/zsW3T0c/photo-2023-12-12-17-40-58.jpg"
            style={{
              aspectRatio: "300/300",
              objectFit: "cover",
            }}
          />
        </div>
      </section>
    </div>
  );
}

/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";

const Page = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900">
      <main className="flex-1 p-6 space-y-8 container mx-auto">
        <section className="flex flex-col md:flex-row md:space-x-6 items-center">
          {/* Image Section */}
          {/* Add your image or leave it empty if you don't have one */}
          {/* <div className="relative flex-shrink-0 overflow-hidden rounded-full h-32 w-32 mx-auto md:mx-0 border-4 border-white">
            <img
              className="object-cover w-full h-full rounded-full"
              src="Your Image URL"
              alt="Profile"
            />
          </div> */}
          <div className="space-y-2 mt-4 md:mt-0 text-black">
            <h2 className="text-3xl font-bold">Muhammad Imran</h2>
            <p className="text-lg">Front End Developer</p>
          </div>
        </section>
        <section>
          {/* About Me Section */}
          <h3 className="text-2xl font-bold text-black">About Me</h3>
          <div className="grid gap-4 mt-4">
            <div className="rounded-lg border bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 shadow-md p-6">
              <p className="text-gray-600 dark:text-gray-300">
                I am a passionate and dedicated Front End Developer with
                expertise in HTML, CSS, JavaScript, React, and Tailwind CSS. Currently learning Next.js and TypeScript to enhance my skills.
              </p>
            </div>
          </div>
        </section>
        <section>
          {/* Experience Section */}
          <h3 className="text-2xl font-bold text-black">Experience</h3>
          <div className="grid gap-4 mt-4">
            <div className="rounded-lg border bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 shadow-md p-6">
              <h4 className="text-lg font-bold mb-2 flex items-center">
                <FaBriefcase className="mr-2" /> Front End Developer (Fresh Graduate)
              </h4>
              <p className="text-sm text-gray-500">2023 - Present</p>
              <p className="text-gray-600 dark:text-gray-300">
                Currently exploring opportunities and eager to contribute to innovative projects.
              </p>
            </div>
          </div>
        </section>
        <section>
          {/* Education Section */}
          <h3 className="text-2xl font-bold text-black">Education</h3>
          <div className="grid gap-4 mt-4">
            <div className="rounded-lg border bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 shadow-md p-6">
              <h4 className="text-lg font-bold mb-2 flex items-center">
                <FaGraduationCap className="mr-2" /> Intermediate (HSC)
              </h4>
              <p className="text-sm text-gray-500">
                Your School/College Name, Year of Completion
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Completed with honors and currently pursuing honors studies.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Page;

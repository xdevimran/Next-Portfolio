/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";

const Page = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900 bg-gradient-to-r from-blue-500 to-purple-500">
      <main className="flex-1 p-6 space-y-8 container mx-auto">
        <section className="flex flex-col md:flex-row md:space-x-6 items-center">
          <div className="relative flex-shrink-0 overflow-hidden rounded-full h-32 w-32 mx-auto md:mx-0 border-4 border-white">
            <Image
              width={300}
              height={300}
              className="object-cover w-full h-full rounded-full"
              src="https://source.unsplash.com/random"
              alt="Profile"
            />
          </div>
          <div className="space-y-2 mt-4 md:mt-0 text-white">
            <h2 className="text-3xl font-bold">John Doe</h2>
            <p className="text-lg">Full Stack Developer</p>
          </div>
        </section>
        <section>
          <h3 className="text-2xl font-bold text-white">About Me</h3>
          <div className="grid gap-4 mt-4">
            <div className="rounded-lg border bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 shadow-md p-6">
              <p className="text-gray-600 dark:text-gray-300">
                I am a passionate and dedicated Full Stack Developer with
                experience in various aspects of software development. I love
                solving complex problems, learning new technologies, and
                building amazing products that make a difference.
              </p>
            </div>
          </div>
        </section>
        <section>
          <h3 className="text-2xl font-bold text-white">Experience</h3>
          <div className="grid gap-4 mt-4">
            <div className="rounded-lg border bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 shadow-md p-6">
              <h4 className="text-lg font-bold mb-2 flex items-center">
                <FaBriefcase className="mr-2" /> Software Engineer at ABC Tech
              </h4>
              <p className="text-sm text-gray-500">2018 - Present</p>
              <p className="text-gray-600 dark:text-gray-300">
                Leading a team of developers and working on cutting-edge
                projects to improve user experience.
              </p>
            </div>
            <div className="rounded-lg border bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 shadow-md p-6">
              <h4 className="text-lg font-bold mb-2 flex items-center">
                <FaBriefcase className="mr-2" /> Web Developer at XYZ Company
              </h4>
              <p className="text-sm text-gray-500">2015 - 2018</p>
              <p className="text-gray-600 dark:text-gray-300">
                Developed and maintained company website and web applications.
              </p>
            </div>
          </div>
        </section>
        <section>
          <h3 className="text-2xl font-bold text-white">Education</h3>
          <div className="grid gap-4 mt-4">
            <div className="rounded-lg border bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 shadow-md p-6">
              <h4 className="text-lg font-bold mb-2 flex items-center">
                <FaGraduationCap className="mr-2" /> Bachelor's Degree in
                Computer Science
              </h4>
              <p className="text-sm text-gray-500">
                University of ABC, 2011 - 2015
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Graduated with honors and a GPA of 3.9/4.0
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Page;

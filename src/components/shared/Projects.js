// Projects.js
import Image from "next/image";
import Link from "next/link";
import { FaEye, FaGithub } from "react-icons/fa";

export default function Projects() {
  const projectsData = [
    {
      id: 1,
      title: "love linker matrimony website",
      description: "Description for Project 1.",
      image: "https://i.ibb.co/Y26BPGm/Screenshot-1.png",
      technologies: ["HTML", "CSS", "React"],
      liveDemoLink: "https://b8a12.netlify.app/",
      githubLink: "https://github.com/xdevimran/love-linker-matrimony-Client",
    },
    {
      id: 2,
      title: "shareat food donation website",
      description: "Description for Project 2.",
      image: "https://i.ibb.co/r0srn5y/Screenshot-4.png",
      technologies: ["HTML", "CSS", "React"],
      liveDemoLink: "https://b8a11.netlify.app/",
      githubLink: "https://github.com/xdevimran/Share-Eats-Client",
    },
    {
      id: 3,
      title: "Project 3",
      description: "Description for Project 3.",
      image:
        "https://d85wutc1n854v.cloudfront.net/live/products/600x375/WB043HJ53.png?v=1.0",
      technologies: ["HTML", "CSS", "React"],
      liveDemoLink: "#",
      githubLink: "#",
    },
  ];

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto grid max-w-5xl items-start justify-center gap-4 px-4 text-left md:gap-8 md:px-6 lg:grid-cols-3 xl:max-w-6xl xl:gap-10">
        <h2 className="text-3xl text-center text-[#42446E] font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 col-span-full">
          My Projects
        </h2>

        {projectsData.map((project) => (
          <div
            key={project.id}
            className="rounded-xl border border-gray-200 p-4 transition-transform transform hover:scale-105 hover:shadow-lg"
          >
            <div className="mb-4">
              <Image
                alt={project.title}
                className="w-full h-[200px] object-contain rounded-xl"
                height="200"
                src={project.image}
                style={{
                  aspectRatio: "200/200",
                  objectFit: "cover",
                }}
                width="200"
              />
            </div>
            <div className="mb-4">
              <h3 className="text-xl font-bold">{project.title}</h3>
              <p>{project.description}</p>
            </div>
            <div className="flex flex-wrap mb-4">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="inline-block bg-blue-200 text-blue-800 px-2 py-1 mr-1 mb-1 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex justify-between">
              <Link
                href={project.liveDemoLink}
                target="_blank"
                className="flex items-center justify-center px-2 py-1 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                <FaEye className="w-4 h-4 mr-2" />
                Live Demo
              </Link>

              <Link
                className="flex items-center justify-center px-2 py-1 border border-transparent text-sm font-medium rounded-md text-white bg-gray-800 hover:bg-gray-900"
                href={project.githubLink}
                target="_blank"
              >
                <FaGithub className="w-4 h-4 mr-2" />
                GitHub
              </Link>
            </div>
          </div>
        ))}
      </div>
      {/* <div className="flex justify-center items-center py-5 mt-10">
        <Link href="/projects">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            View More
          </button>
        </Link>
      </div> */}
    </section>
  );
}

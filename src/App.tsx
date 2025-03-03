import React, { useState } from "react";
// import { motion } from "framer-motion";
import SkillCard from "./components/skill-card";
import ProjectCard from "./components/project-card";
import Modal from "./components/modal";
// import { Button } from "@/components/ui/butto";
// import { Github, Mail, Linkedin } from "lucide-react";

type Project = {
  title: string
  description: string,
  image: string
}

const App = () => {

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const [selectedProject, setSelectedProject] = useState<Project>({title: '', description: '', image: ''});

  const openModal = (data: Project): void => {
    setSelectedProject(data)
    setIsModalOpen(true)
  };
  const closeModal = (): void => {
    setIsModalOpen(false)
  };
  
  const handleConfirm = (): void => {
    console.log('Confirmed!');
    // Add your confirmation logic here
  };

  const skills = [
    {
      'name': 'PHP',
      'icon': "https://img.shields.io/badge/-Php?logo=php&style=social"
    },
    {
      'name': 'Javascript',
      'icon': "https://img.shields.io/badge/-Javascript?logo=javascript&style=social"
    },
    {
      'name': 'Typescript',
      'icon': "https://img.shields.io/badge/-Typescript?logo=typescript&style=social"
    },
    {
      'name': 'SQL',
      'icon': "https://img.shields.io/badge/-Sql?logo=mysql&style=social"
    },
    {
      'name': 'MongoDB',
      'icon': "https://img.shields.io/badge/-MongoDB?logo=mongodb&style=social"
    },
    {
      'name': 'Laravel',
      'icon': "https://img.shields.io/badge/-Laravel?logo=laravel&style=social"
    },
    {
      'name': 'React',
      'icon': "https://img.shields.io/badge/-React?logo=react&style=social"
    },
    {
      'name': 'Vue',
      'icon': "https://img.shields.io/badge/-React?logo=vuedotjs&style=social"
    },
    {
      'name': 'Tailwind',
      'icon': "https://img.shields.io/badge/-Tailwind?logo=tailwindcss&style=social"
    },
    {
      'name': 'Redis',
      'icon': "https://img.shields.io/badge/-Redis?logo=redis&style=social"
    },
    {
      'name': 'Docker',
      'icon': "https://img.shields.io/badge/-Docker?logo=docker&style=social"
    },
    {
      'name': 'Git',
      'icon': "https://img.shields.io/badge/-Git?logo=git&style=social"
    }
  ]

  const projects: Project[] = [
    {
      'title': 'Ecommerce',
      'description': 'lorem ipsum',
      'image': 'https://img.freepik.com/free-photo/pack-colorful-cardboard-sheets-with-copy-space_23-2148320371.jpg?t=st=1739848991~exp=1739852591~hmac=037765814b5f4188bbd90fb8e0f002767329ded6bf536f3cf364fa3a8516cbec&w=740'
    },
    {
      'title': 'Ticketing',
      'description': 'lorem ipsum',
      'image': 'https://img.freepik.com/free-photo/pack-colorful-cardboard-sheets-with-copy-space_23-2148320371.jpg?t=st=1739848991~exp=1739852591~hmac=037765814b5f4188bbd90fb8e0f002767329ded6bf536f3cf364fa3a8516cbec&w=740'
    },
    {
      'title': 'Booking App',
      'description': 'lorem ipsum',
      'image': 'https://img.freepik.com/free-photo/pack-colorful-cardboard-sheets-with-copy-space_23-2148320371.jpg?t=st=1739848991~exp=1739852591~hmac=037765814b5f4188bbd90fb8e0f002767329ded6bf536f3cf364fa3a8516cbec&w=740'
    },
    {
      'title': 'Web Portofolio',
      'description': 'lorem ipsum',
      'image': 'https://img.freepik.com/free-photo/pack-colorful-cardboard-sheets-with-copy-space_23-2148320371.jpg?t=st=1739848991~exp=1739852591~hmac=037765814b5f4188bbd90fb8e0f002767329ded6bf536f3cf364fa3a8516cbec&w=740'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      {/* Header */}
      <header className="text-center mb-12">
        <h1 className="text-2xl font-bold">Hello, I'm Fahrie</h1>
        <h1 className="text-2xl font-bold">I'm a Software Developer</h1>
        <p className="text-gray-400 mt-2">Building scalable and efficient systems</p>
      </header>

      {/* About Me */}
      <section className="max-w-3xl mx-auto mb-12">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p className="text-gray-300">
          Passionate backend developer with experience in Node.js, PHP, Larvel and databases. 
          I also have experience with Frontend framework like React and Vue.
          I build efficient APIs and scalable architectures.
        </p>
      </section>

      {/* Skills */}
      <section className="max-w-3xl mx-auto mb-12">
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {skills.map((skill, i) => {
            return (
              <SkillCard
                key={i} 
                skill={skill.name}
                icon={skill.icon}
              />
            )
          })}
        </div>
      </section>

      {/* Projects */}
      <section className="max-w-3xl mx-auto mb-12">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {projects.map((data, i) => {
            return (
              <div key={i} onClick={() => openModal(data)}>
                <ProjectCard background_image={data.image} description={data.description} title={data.title}/>
              </div>
            )
          })}
        </div>
      </section>
      <Modal 
        isOpen={isModalOpen} 
        onClose={closeModal}
        onConfirm={handleConfirm}
        data={selectedProject}
      />

      {/* Contact */}
      <section className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
        <div className="flex justify-center gap-4">
          {/* <Button variant="outline"><Github className="mr-2" /> GitHub</Button>
          <Button variant="outline"><Linkedin className="mr-2" /> LinkedIn</Button>
          <Button variant="outline"><Mail className="mr-2" /> Email</Button> */}
        </div>
      </section>
    </div>
  );
};

export default App;
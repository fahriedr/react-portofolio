import React from "react";
// import { motion } from "framer-motion";
import Card from "./components/card";
// import { Button } from "@/components/ui/butto";
// import { Github, Mail, Linkedin } from "lucide-react";

const App = () => {

  const skills: string[] = [
    'PHP',
    'Javascript',
    'SQL',
    'Laravel',
    'React',
    'Vue',
    'Redis',
    'Docker'
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
              <Card
                key={i} 
                skill={skill} 
              />
            )
          })}
        </div>
      </section>

      {/* Projects */}
      <section className="max-w-3xl mx-auto mb-12">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        {/* <Card className="p-4 bg-gray-800 mb-4">
          <CardContent>
            <h3 className="text-lg font-bold">Project Name</h3>
            <p className="text-gray-300">Description of the project and technologies used.</p>
            <Button variant="link" className="text-blue-400 mt-2">View on GitHub</Button>
          </CardContent>
        </Card> */}
      </section>

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
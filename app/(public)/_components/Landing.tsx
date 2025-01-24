"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Code,
  Terminal,
  FileCode,
  Layout,
  Database,
  Cpu,
  GitBranch,
  Wifi,
} from "lucide-react";
import Link from "next/link";

const Landing = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 py-20">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
        <div className="container mx-auto px-4 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent leading-[1.2] px-4 pb-2">
              From Zero to
              <br className="hidden sm:block" />
              Full-Stack Hero
              <br />
              in 24 Weeks
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto px-4 leading-[1.8] pb-2">
              Master modern web development from HTML to NextJS. Build
              real-world projects with TypeScript, React, server-side rendering
              and ontop of that you will be introduced to Claude Sonnet A.I
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
              <Button
                size="lg"
                className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-6 text-lg rounded-full w-full sm:w-auto leading-none"
              >
                <Link href={"/curriculum"}>View Full Curriculum</Link>
                <ArrowRight className="ml-2" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-center p-6"
            >
              <h3 className="text-4xl font-bold text-blue-400 mb-2 leading-[1.2]">
                24
              </h3>
              <p className="text-gray-300 text-lg leading-[1.6]">
                Intensive Weeks
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-center p-6"
            >
              <h3 className="text-4xl font-bold text-cyan-400 mb-2 leading-[1.2]">
                1 Mayor Role base Security Business System
              </h3>
              <p className="text-gray-300 text-lg leading-[1.6]">
                Production Project
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-center p-6"
            >
              <h3 className="text-4xl font-bold text-blue-400 mb-2 leading-[1.2]">
                24/7
              </h3>
              <p className="text-gray-300 text-lg leading-[1.6]">
                Mentor Support
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-20 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent px-4 leading-[1.2] pb-2">
            Complete Learning Path
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
            {[
              {
                icon: <Layout className="h-6 w-6" />,
                title: "Frontend Foundations",
                description:
                  "HTML5, CSS3, JavaScript ES6+, and responsive design principles",
              },
              {
                icon: <Code className="h-6 w-6" />,
                title: "TypeScript Mastery",
                description:
                  "Advanced typing, interfaces, generics, and best practices",
              },
              {
                icon: <Terminal className="h-6 w-6" />,
                title: "React Development",
                description:
                  "Components, hooks, state management, and performance optimization",
              },
              {
                icon: <Cpu className="h-6 w-6" />,
                title: "NextJS & SSR",
                description:
                  "Server components, API routes, and data fetching strategies",
              },
              {
                icon: <Database className="h-6 w-6" />,
                title: "Backend Integration",
                description:
                  "REST APIs, database design, and full-stack application architecture",
              },
              {
                icon: <GitBranch className="h-6 w-6" />,
                title: "Production Deployment",
                description:
                  "CI/CD, containerization, and cloud deployment with Vercel",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 rounded-xl bg-slate-800/50 border border-slate-700 hover:border-blue-500/50 transition-all duration-300 group cursor-pointer hover:bg-slate-800/70"
              >
                <div className="mb-4 text-blue-400 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-100 leading-[1.4]">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-[1.6]">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-8 px-4 leading-[1.2] pb-2">
            Start Your Development Journey
          </h2>
          <p className="text-lg sm:text-xl text-white/90 mb-12 max-w-2xl mx-auto px-4 leading-[1.6] pb-2">
            Next cohort starts soon. Limited seats available.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-6 text-lg rounded-full w-full sm:w-auto leading-none"
            >
              <Link href={"/apply"}>Reserve Your Seat</Link>
              <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;

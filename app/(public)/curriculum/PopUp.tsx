"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogHeader,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Code, Check } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const SyllabusModal = () => {
  const [open, setOpen] = useState(false);

  const modules = [
    {
      id: "frontend",
      title: "Frontend Development",
      weeks: [
        {
          title: "Modern JavaScript & TypeScript",
          topics: [
            "ES6+ Features & Async Programming",
            "TypeScript Types & Interfaces",
            "Error Handling & Debugging",
            "Git Version Control",
          ],
        },
        {
          title: "React & State Management",
          topics: [
            "React Hooks & Components",
            "Context API & Custom Hooks",
            "Zustand for State Management",
            "Performance Optimization",
          ],
        },
      ],
    },
    {
      id: "nextjs",
      title: "Next.js & Full Stack",
      weeks: [
        {
          title: "Next.js Architecture",
          topics: [
            "Server & Client Components",
            "Server Actions & API Routes",
            "Data Fetching Strategies",
            "Dynamic Routing",
          ],
        },
        {
          title: "Backend Integration",
          topics: [
            "Prisma Database Design",
            "Authentication & Authorization",
            "API Development",
            "File Upload Systems",
          ],
        },
      ],
    },
    {
      id: "projects",
      title: "Real Projects",
      weeks: [
        {
          title: "E-commerce Platform",
          topics: [
            "Multi-vendor Marketplace",
            "Product Management System",
            "Order Processing Flow",
            "Admin Dashboard",
          ],
        },
        {
          title: "Production & Deployment",
          topics: [
            "Performance Optimization",
            "Error Monitoring",
            "CI/CD Pipeline",
            "Cloud Deployment",
          ],
        },
      ],
    },
  ];

  return (
    <>
      <Button
        size="lg"
        onClick={() => setOpen(true)}
        className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-6 text-lg rounded-full"
      >
        View Detailed Syllabus
        <Code className="ml-2 h-5 w-5" />
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-3xl bg-slate-900 border-slate-800">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-blue-400">
              Full-Stack Development Curriculum
            </DialogTitle>
          </DialogHeader>

          <Tabs defaultValue="frontend" className="mt-6">
            <TabsList className="grid grid-cols-3 h-auto gap-4 bg-slate-800">
              {modules.map((module) => (
                <TabsTrigger
                  key={module.id}
                  value={module.id}
                  className="py-2.5 data-[state=active]:bg-blue-500"
                >
                  {module.title}
                </TabsTrigger>
              ))}
            </TabsList>

            {modules.map((module) => (
              <TabsContent key={module.id} value={module.id} className="mt-6">
                <div className="space-y-6">
                  {module.weeks.map((week, idx) => (
                    <div
                      key={idx}
                      className="bg-slate-800/50 rounded-lg p-6 space-y-4"
                    >
                      <h3 className="text-xl font-semibold text-white">
                        {week.title}
                      </h3>
                      <div className="grid gap-3">
                        {week.topics.map((topic, topicIdx) => (
                          <div
                            key={topicIdx}
                            className="flex items-start gap-3 text-gray-300"
                          >
                            <Check className="h-5 w-5 text-blue-400 mt-0.5 shrink-0" />
                            <span>{topic}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>

          <DialogFooter>
            <Button
              onClick={() => setOpen(false)}
              className="bg-slate-800 hover:bg-slate-700"
            >
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default SyllabusModal;

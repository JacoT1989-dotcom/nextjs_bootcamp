"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Code,
  GitBranch,
  ShoppingCart,
  Users,
  Building2,
  Warehouse,
  Truck,
  Store,
} from "lucide-react";
import PopupSyllabus from "./PopUp";

const CurriculumSection = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description:
        "Multi-vendor marketplace with user roles, product management, and order processing",
      skills: [
        "Next.js 14+",
        "TypeScript",
        "Prisma",
        "Auth",
        "API Routes/Server Actions/Zustand stores",
      ],
      icon: <ShoppingCart className="h-6 w-6" />,
    },
    {
      title: "Admin Dashboard",
      description:
        "Complete admin panel with order management, user controls, and analytics",
      skills: ["React Query", "Redux", "Charts", "Real-time Updates"],
      icon: <Building2 className="h-6 w-6" />,
    },
    {
      title: "Vendor Portal",
      description:
        "Custom storefront builder with product management and order tracking",
      skills: ["Dynamic Routing", "Image Upload", "Payment Integration"],
      icon: <Store className="h-6 w-6" />,
    },
    {
      title: "Warehouse System",
      description:
        "Inventory management with stock tracking and supply chain features",
      skills: ["Database Design", "State Management", "Business Logic"],
      icon: <Warehouse className="h-6 w-6" />,
    },
    {
      title: "User Management",
      description:
        "Role-based access control with customer and vendor profiles",
      skills: ["Authentication", "Authorization", "User Flows"],
      icon: <Users className="h-6 w-6" />,
    },
    {
      title: "Order System",
      description: "End-to-end order processing from cart to delivery tracking",
      skills: ["Cart Logic", "Checkout Flow", "Order States"],
      icon: <Truck className="h-6 w-6" />,
    },
  ];

  return (
    <section className="py-24 bg-slate-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent pb-4">
          Learn By Building Real Projects
        </h2>
        <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
          Master full-stack development by creating production-ready
          applications used by real businesses
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-xl bg-slate-800/50 border border-slate-700 hover:border-blue-500/50 transition-all duration-300"
            >
              <div className="mb-4 text-blue-400">{project.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-100">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="text-xs bg-blue-500/10 text-blue-400 px-3 py-1.5 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="text-center mt-16">
            <PopupSyllabus />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurriculumSection;

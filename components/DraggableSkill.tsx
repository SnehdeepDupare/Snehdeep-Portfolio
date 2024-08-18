"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import urlFor from "@/sanity/lib/urlFor";

interface Skill {
  _id: string;
  title: string;
  image: any;
}

interface DraggableSkillGridProps {
  initialSkills: Skill[];
}

const DraggableSkillGrid = ({ initialSkills }: DraggableSkillGridProps) => {
  const [skills, setSkills] = useState(initialSkills);

  const moveSkill = (dragIndex: number, hoverIndex: number) => {
    const dragSkill = skills[dragIndex];
    const newSkills = [...skills];
    newSkills.splice(dragIndex, 1);
    newSkills.splice(hoverIndex, 0, dragSkill);
    setSkills(newSkills);
  };

  return (
    <div className="grid grid-cols-4 gap-4 mt-14 md:mt-20">
      {skills.map((skill, index) => (
        <DraggableSkill
          key={skill._id}
          index={index}
          skill={skill}
          moveSkill={moveSkill}
          totalSkills={skills.length}
        />
      ))}
    </div>
  );
};

interface DraggableSkillProps {
  skill: Skill;
  index: number;
  moveSkill: (dragIndex: number, hoverIndex: number) => void;
  totalSkills: number;
}

const DraggableSkill = ({
  skill,
  index,
  moveSkill,
  totalSkills,
}: DraggableSkillProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  return (
    <motion.div
      layout
      drag
      dragElastic={0.7}
      whileDrag={{ scale: 1.1, zIndex: 1 }}
      dragConstraints={{
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
      onDragStart={() => {
        setIsDragging(true);
        setIsPressed(true);
      }}
      onDragEnd={(e, { offset }) => {
        setIsDragging(false);
        setIsPressed(false);
        const swipeThreshold = 50;
        let newIndex = index;

        if (
          Math.abs(offset.x) > swipeThreshold ||
          Math.abs(offset.y) > swipeThreshold
        ) {
          const rows = 4; // Number of columns in the grid
          const directionX = offset.x > 0 ? 1 : -1;
          const directionY = offset.y > 0 ? rows : -rows;

          if (Math.abs(offset.x) > Math.abs(offset.y)) {
            newIndex = index + directionX;
          } else {
            newIndex = index + directionY;
          }

          if (newIndex >= 0 && newIndex < totalSkills) {
            moveSkill(index, newIndex);
          }
        }
      }}
      onPointerDown={() => setIsPressed(true)}
      onPointerUp={() => setIsPressed(false)}
      transition={{ type: "spring", stiffness: 500, damping: 30 }}
      className={`flex flex-col items-center ${
        isDragging || isPressed ? "cursor-grabbing" : "cursor-grab"
      }`}
    >
      <div className="relative h-14 w-14 md:w-16 md:h-16 mb-2">
        <Image
          src={urlFor(skill.image).url()}
          alt={skill.title}
          fill={true}
          sizes="100%"
          className="border rounded-full object-contain pointer-events-none"
        />
      </div>
      <p className="text-sm">{skill.title}</p>
    </motion.div>
  );
};

export default DraggableSkillGrid;

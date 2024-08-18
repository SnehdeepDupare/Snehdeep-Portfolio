import { TopRightArrow } from "@/components/Icons";
import PageWrapper from "@/components/PageWrapper";
import { getSkills } from "@/sanity/utils/getSkills";
import Link from "next/link";
import { Metadata } from "next";
import DraggableSkillGrid from "@/components/DraggableSkill";

export const metadata: Metadata = {
  title: "Skills | Snehdeep Dupare",
};

export const revalidate = 0;

async function Skills() {
  const skills = await getSkills();

  return (
    <PageWrapper>
      <main className="md:relative flex flex-col md:flex-row text-center mx-auto max-w-6xl px-10 justify-evenly items-center">
        <div className="absolute top-24 md:top-0">
          <h3 className="tracking-[20px] uppercase text-2xl text-dimwhite">
            Skills
          </h3>
          <p className="text-dimwhite">
            Here are some technlogies I love to use
          </p>
        </div>

        <DraggableSkillGrid initialSkills={skills} />
      </main>

      <div className="mx-auto max-w-6xl px-10 mt-10 mb-24">
        <Link
          href="/projects"
          className="text-gray-400 hover:text-white hover:underline tracking-wide flex flex-row gap-x-3 "
        >
          Take a look at my Projects
          <TopRightArrow />
        </Link>
      </div>
    </PageWrapper>
  );
}

export default Skills;

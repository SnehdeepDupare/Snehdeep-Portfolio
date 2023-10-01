import PageWrapper from "@/components/PageWrapper";
import ProfileWrapper from "@/components/ProfileWrapper";
import urlFor from "@/sanity/lib/urlFor";
import { getInfo } from "@/sanity/utils/getInfo";

export const revalidate = 0;

async function About() {
  const info = await getInfo();

  return (
    <PageWrapper>
      <main className="md:relative flex flex-col md:flex-row text-center mx-auto max-w-6xl px-10 justify-evenly items-center">
        <h3 className="tracking-[20px] absolute top-24 md:top-0 uppercase text-2xl z-[-10] md:z-auto text-dimwhite">
          About
        </h3>

        <ProfileWrapper>
          <img
            src={urlFor(info?.profilePic).url()}
            alt="profile"
            className="rounded-full h-48 w-48 md:rounded-lg md:h-96 md:w-64 xl:h-[450px] xl:w-[350px] flex-shrink-0 object-cover mt-10"
          />
        </ProfileWrapper>

        <p className="px-0 md:px-10 mt-5 md:mt-0">{info?.aboutText}</p>
      </main>
    </PageWrapper>
  );
}

export default About;

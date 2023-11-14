"use client";

import LightGallery from "lightgallery/react";

// styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

// plugins
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

import { Screenshot } from "@/typings";
import urlFor from "@/sanity/lib/urlFor";
import Image from "next/image";

type Props = {
  title: string;
  images: Screenshot[];
};

function Gallery({ title, images }: Props) {
  return (
    <LightGallery
      speed={500}
      plugins={[lgThumbnail, lgZoom]}
      elementClassNames="grid grid-cols-1 md:grid-cols-2 gap-5"
    >
      {images?.map((image) => (
        <a
          href={urlFor(image?.asset).url()}
          key={image._key}
          className="relative group"
        >
          <div className="absolute top-0 left-0 h-full w-full flex items-center justify-center font-bold text-xl group-hover:bg-black/70 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out ">
            {title}
          </div>
          <Image
            src={urlFor(image?.asset).url()}
            alt={title}
            height={300}
            width={500}
            className="h-full w-full rounded-lg"
          />
        </a>
      ))}
    </LightGallery>
  );
}

export default Gallery;

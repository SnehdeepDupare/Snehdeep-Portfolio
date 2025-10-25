import Link from "next/link";

export const RichTextComponents = {
  list: {
    bullet: ({ children }: any) => (
      <ul className="ml-10 py-4 list-disc space-y-5">{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className="ml-10 py-4 list-decimal space-y-5">{children}</ol>
    ),
  },

  block: {
    h1: ({ children }: any) => (
      <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl py-4">
        {children}
      </h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-3xl font-semibold tracking-tight py-4">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-2xl font-semibold tracking-tight py-4">{children}</h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-xl font-semibold tracking-tight py-4">{children}</h4>
    ),
    normal: ({ children }: any) => (
      <p className="py-1 text-base leading-7">{children}</p>
    ),
  },

  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined;

      return (
        <Link href={value.href} rel={rel} className="underline">
          {children}
        </Link>
      );
    },
  },
};

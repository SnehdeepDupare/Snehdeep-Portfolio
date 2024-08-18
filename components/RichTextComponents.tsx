import Link from "next/link";

export const RichTextComponents = {
  list: {
    bullet: ({ children }: any) => (
      <ul className="ml-10 py-5 list-disc space-y-5">{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className="ml-10 py-5 list-decimal space-y-5">{children}</ol>
    ),
  },

  block: {
    h1: ({ children }: any) => (
      <h1 className="text-5xl py-10 font-bold">{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-4xl py-10 font-bold">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-3xl py-10 font-bold">{children}</h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-2xl py-10 font-bold">{children}</h4>
    ),
    h5: ({ children }: any) => (
      <h5 className="text-xl py-10 font-bold">{children}</h5>
    ),
    h6: ({ children }: any) => (
      <h6 className="text-lg py-10 font-bold">{children}</h6>
    ),
    normal: ({ children }: any) => <p className="py-1">{children}</p>,
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

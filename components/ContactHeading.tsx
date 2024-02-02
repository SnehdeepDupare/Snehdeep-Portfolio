"use client";

export default function ContactHeading() {
  const redirectUser = () => {
    window.location.href = "mailto:duparesnehdeep@gmail.com";
  };
  return (
    <div>
      <h3 className="tracking-[20px] uppercase text-2xl text-dimwhite">
        Contact
      </h3>
      <h5 className="text-dimwhite mt-2">
        Get in touch or shoot me an email directly on{" "}
        <span
          className="font-bold cursor-pointer hover:underline"
          onClick={redirectUser}
        >
          duparesnehdeep@gmail.com
        </span>
      </h5>
    </div>
  );
}

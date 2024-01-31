"use client";

import { sendEmail } from "@/actions/sendEmail";
import { contactSchema } from "@/lib/validations/contact";

import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";

function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors },
  } = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    // defaultValues: {
    //   name: "",
    //   email: "",
    //   subject: "",
    //   message: "",
    // },
  });

  const onSubmit: SubmitHandler<z.infer<typeof contactSchema>> = async (
    data
  ) => {
    const result = await sendEmail(data);

    if (result?.success && result.data?.data?.id) {
      toast.success("Email Sent!", {
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
      reset();
      return;
    }

    toast.error(`${result?.data?.error?.message}`, {
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    });
  };

  return (
    <form
      className="space-y-3 mx-auto flex flex-col w-full mt-10 max-w-lg"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div>
        <input
          type="text"
          placeholder="Name"
          className="contact-field"
          {...register("name")}
        />
        {errors.name?.message && (
          <p className="mt-1 ml-1 text-sm text-red-400 text-left">
            {errors.name.message}
          </p>
        )}
      </div>

      <div>
        <input
          type="email"
          placeholder="Email"
          className="contact-field"
          {...register("email")}
        />
        {errors.email?.message && (
          <p className="mt-1 ml-1 text-sm text-red-400 text-left">
            {errors.email.message}
          </p>
        )}
      </div>

      <div>
        <input
          type="text"
          placeholder="Subject"
          className="contact-field"
          {...register("subject")}
        />
        {errors.subject?.message && (
          <p className="mt-1 ml-1 text-sm text-red-400 text-left">
            {errors.subject.message}
          </p>
        )}
      </div>

      <div>
        <textarea
          placeholder="Message"
          className="contact-field scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-transparent hover:scrollbar-thumb-gray-300 scrollbar-thumb-rounded-full h-28 md:h-36"
          {...register("message")}
        />
        {errors.message?.message && (
          <p className="mt-1 ml-1 text-sm text-red-400 text-left">
            {errors.message.message}
          </p>
        )}
      </div>

      <button
        className="bg-white hover:bg-dimwhite text-black py-3 px-10 rounded-md font-bold transition-all duration-300 ease-in-out disabled:bg-dimwhite flex justify-center"
        type="submit"
      >
        {isSubmitting ? (
          <div className="h-5 w-5 rounded-full animate-spin border-b-2 border-black" />
        ) : (
          "Send"
        )}
      </button>
    </form>
  );
}

export default ContactForm;

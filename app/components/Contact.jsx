"use client";

import React, { useState } from "react";
import Image from "next/image";
import { assets } from "../../assets/assets";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);
    formData.append("access_key", "1b0df68e-8a49-4d39-9829-8a33025343fd");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully ✅");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(`Error: ${data.message}`);
    }
  };

  return (
    <div
      id="contact"
      className="w-full px-[12%] py-10 scroll-mt-20 bg-light border border-dark dark:bg-none dark:bg-black transition-colors duration-500"
    >
      <h4 className="text-center mb-2 text-lg font-Ovo text-gray-700 dark:text-gray-300">
        Connect with me
      </h4>
      <h2 className="text-5xl text-center font-Ovo text-gray-900 dark:text-white">
        Get in touch
      </h2>

      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-gray-600 dark:text-gray-400">
        I'd love to hear from you! Whether you have a question, want to
        collaborate on a project, or just want to say hi, feel free to reach out
        to me using the form below. I'll get back to you as soon as possible!
      </p>

      <form onSubmit={onSubmit} className="max-w-2xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 mb-8">
          <input
            name="name"
            type="text"
            placeholder="Enter your name"
            required
            className="p-3 outline-none border border-gray-400 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-black dark:text-white focus:border-black dark:focus:border-white transition-colors"
          />
          <input
            name="email"
            type="email"
            placeholder="Enter your email"
            required
            className="p-3 outline-none border border-gray-400 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-black dark:text-white focus:border-black dark:focus:border-white transition-colors"
          />
        </div>

        <textarea
          name="message"
          rows="6"
          placeholder="Enter your message"
          required
          className="w-full p-4 outline-none border border-gray-400 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-black dark:text-white focus:border-black dark:focus:border-white transition-colors"
        ></textarea>

        <button
          type="submit"
          className="py-3 border border-dark px-8 w-max mt-8 flex items-center justify-between gap-2 bg-light text-dark  rounded-full mx-auto hover:bg-dark hover:text-light transition-all duration-500"
        >
          Submit now{" "}
          <Image src={assets.right_arrow_white} alt="arrow" className="w-4" />
        </button>

        {result && (
          <p className="mt-4 text-center text-sm text-green-600">{result}</p>
        )}
      </form>
    </div>
  );
};

export default Contact;

import React from "react";
import { workDetails } from "../../../assets/project_data";
import Image from "next/image";

export default async function prjectDetailPage({ params }) {
  const { slug } = await params;

  const work = workDetails.find((s) => s.slug === slug);

  return (
    <div className="max-w-6xl mx-auto py-12 px-4 space-y-6">
      <div className="md:mt-15 mt-10">
        <h1 className="text-3xl font-bold">{work.title}</h1>
        <p className="text-gray-600">{work.subtitle}</p>
        <p className="text-base mt-4">{work.description}</p>

        <div className="flex flex-wrap gap-2 mt-4">
          {work.tags.map((tag, index) => (
            <span key={index} className="bg-gray-100 px-2 py-1 rounded text-sm">
              {tag}
            </span>
          ))}
        </div>

       <div className="mt-6 space-y-4">
  {work.process.map((step, index) => (
    <div key={index} className="mb-6">
      {step.image && (
        <Image
          src={step.image}
          alt={step.title}
          width={200}
          height={50}
          className="rounded shadow mb-2"
        />
      )}
      <h2 className="font-semibold">{step.title}</h2>
      <p className="text-sm text-gray-700">{step.content}</p>
    </div>
  ))}
</div>


        <div className="mt-6">
          <h3 className="font-semibold">Refleksi</h3>
          <p className="text-sm text-gray-700">{work.reflection}</p>
        </div>

        <div className="mt-6">
          <p className="text-sm">Status: {work.status}</p>
          <p className="text-sm">Tahun: {work.year}</p>
          {work.landingPage && (
            <a
              href={work.landingPage}
              className="inline-block mt-2 text-blue-500 underline"
              target="_blank"
            >
              View More
            </a>
          )}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 mt-6">
          {work.images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Preview ${index}`}
              className="rounded shadow"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

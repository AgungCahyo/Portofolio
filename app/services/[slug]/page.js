import React from "react";
import { serviceDetailData } from "../../../assets/services_data";
import Image from "next/image";

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;

  const service = serviceDetailData.find((s) => s.slug === slug);

  return (
    <div className="max-w-6xl items-center justify-center mx-auto py-30 bg-light px-4 ">
     <Image src={service.image} alt={service.title} width={800} height={400} className="rounded-lg border-2 border-dark mb-6 w-full" />
      <h1 className="text-3xl font-bold mb-4">{service.title}</h1>
      <h3 className="text-lg text-gray-600 dark:text-gray-400 mb-6 italic">
        {service.subtitle}
      </h3>
      <p className="text-gray-700 dark:text-gray-300 mb-6 whitespace-pre-line">
        {service.longDescription}
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">Manfaat:</h2>
      <ul className="list-disc ml-6 space-y-1">
        {service.benefits.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-2">Cakupan Pekerjaan:</h2>
      <ul className="list-disc ml-6 space-y-1">
        {service.scopeOfWork.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-2">
        Untuk siapa layanan ini?
      </h2>
      <ul className="list-disc ml-6 space-y-1">
        {service.targetAudience.map((a, i) => (
          <li key={i}>{a}</li>
        ))}
      </ul>

      <p className="mt-10 text-lg italic text-gray-800 dark:text-white whitespace-pre-line">
        {service.closing}
      </p>
    </div>
  );
}

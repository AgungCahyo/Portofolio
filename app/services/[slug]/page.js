import React from "react";
import { notFound } from "next/navigation";
import { serviceDetailData } from "../../../assets/services_data";

export default function ServiceDetailPage({ params }) {
  const { slug } = params;
  const service = serviceDetailData.find((s) => s.slug === slug);

  if (!service) return notFound();

  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
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

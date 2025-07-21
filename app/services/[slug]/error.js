// app/services/[slug]/error.js
"use client";

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error("Error details:", error);
  }, [error]);

  return (
    <div className="text-center py-10">
      <h2 className="text-2xl font-bold text-red-600 mb-4">
        Terjadi kesalahan!
      </h2>
      <button
        onClick={() => reset()}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Coba lagi
      </button>
    </div>
  );
}
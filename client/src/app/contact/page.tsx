"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    referral: "",
    services: [] as string[],
    budget: "",
    details: "",
    terms: false,
  });

  // FIX sa e.currentTarget
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.currentTarget;

    if (
      e.currentTarget instanceof HTMLInputElement &&
      e.currentTarget.type === "checkbox"
    ) {
      setFormData((prev) => ({
        ...prev,
        [name]: (e.currentTarget as HTMLInputElement).checked,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleMultiSelect = (field: "services" | "referral", value: string) => {
    setFormData((prev) => {
      if (field === "services") {
        return {
          ...prev,
          services: prev.services.includes(value)
            ? prev.services.filter((s) => s !== value)
            : [...prev.services, value],
        };
      }
      return { ...prev, referral: value };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // TODO: ovdje ide slanje na backend (API)
  };

  const referralOptions = [
    "Preporuke",
    "Google pretrage",
    "Društvenih mreža",
    "Drugo",
  ];
  const serviceOptions = [
    "Dizajna nove web stranice",
    "Izrade web stranice",
    "Redizajna postojeće stranice",
    "Održavanja web stranice",
  ];
  const budgetOptions = [
    "Ispod 1.000 €",
    "1.000 € – 5.000 €",
    "5.000 € – 10.000 €",
    "10.000 €+",
  ];

  return (
    <section className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 py-12">
      <h1 className="text-yellow-400 font-bold text-6xl md:text-7xl mb-6">
        RAZGOVARAJMO
      </h1>
      <p className="text-sm md:text-base text-gray-300 max-w-2xl text-center mb-12">
        Bilo da tek skicirate ideju za svoj novi projekt ili jednostavno želite
        porazgovarati o digitalnim mogućnostima – tu smo da pretvorimo vaše
        misli u stvarnu, funkcionalnu i modernu web stranicu.
      </p>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-3xl flex flex-col gap-6"
      >
        {/* Ime i tvrtka */}
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            name="name"
            placeholder="Upišite svoje ime*"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-neutral-900 border border-neutral-700 focus:outline-none focus:border-yellow-400"
            required
          />
          <input
            type="text"
            name="company"
            placeholder="Upišite naziv tvrtke*"
            value={formData.company}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-neutral-900 border border-neutral-700 focus:outline-none focus:border-yellow-400"
            required
          />
        </div>

        {/* Referral */}
        <div>
          <p className="mb-2 font-medium">Pronašao/la sam vas putem:</p>
          <div className="flex flex-wrap gap-3">
            {referralOptions.map((option) => (
              <button
                type="button"
                key={option}
                onClick={() => handleMultiSelect("referral", option)}
                className={`px-4 py-2 rounded-full border ${
                  formData.referral === option
                    ? "bg-yellow-400 text-black border-yellow-400"
                    : "border-neutral-700 bg-neutral-900"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        {/* Services */}
        <div>
          <p className="mb-2 font-medium">Trebam pomoć oko:</p>
          <div className="flex flex-wrap gap-3">
            {serviceOptions.map((option) => (
              <button
                type="button"
                key={option}
                onClick={() => handleMultiSelect("services", option)}
                className={`px-4 py-2 rounded-full border ${
                  formData.services.includes(option)
                    ? "bg-yellow-400 text-black border-yellow-400"
                    : "border-neutral-700 bg-neutral-900"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        {/* Budget */}
        <div>
          <p className="mb-2 font-medium">Planiram okvirni budžet od:</p>
          <div className="flex flex-wrap gap-3">
            {budgetOptions.map((option) => (
              <button
                type="button"
                key={option}
                onClick={() =>
                  setFormData((prev) => ({ ...prev, budget: option }))
                }
                className={`px-4 py-2 rounded-full border ${
                  formData.budget === option
                    ? "bg-yellow-400 text-black border-yellow-400"
                    : "border-neutral-700 bg-neutral-900"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Upišite e-mail adresu*"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 rounded-lg bg-neutral-900 border border-neutral-700 focus:outline-none focus:border-yellow-400"
          required
        />

        {/* Details */}
        <textarea
          name="details"
          placeholder="Upišite detalje projekta"
          value={formData.details}
          onChange={handleChange}
          className="w-full p-3 rounded-lg bg-neutral-900 border border-neutral-700 focus:outline-none focus:border-yellow-400 h-32"
        />

        {/* Terms */}
        <label className="flex items-center gap-2 text-sm text-gray-400">
          <input
            type="checkbox"
            name="terms"
            checked={formData.terms}
            onChange={handleChange}
            className="accent-yellow-400"
            required
          />
          Prijavom na ovaj obrazac pristajete na naše opće uvjete poslovanja.
        </label>

        {/* Submit */}
        <button
          type="submit"
          className="mt-4 bg-yellow-400 text-black font-semibold px-6 py-3 rounded-lg hover:bg-yellow-300 transition"
        >
          Krenimo →
        </button>
      </form>
    </section>
  );
}

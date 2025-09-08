'use client';
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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.currentTarget;
    if (type === "checkbox") {
      const target = e.currentTarget as HTMLInputElement;
      setFormData(prev => ({ ...prev, [name]: target.checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleMultiSelect = (field: "services" | "referral", value: string) => {
    setFormData(prev => {
      if (field === "services") {
        return {
          ...prev,
          services: prev.services.includes(value)
            ? prev.services.filter(s => s !== value)
            : [...prev.services, value],
        };
      }
      return { ...prev, referral: value };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const referralOptions = ["Preporuke", "Google pretrage", "Društvenih mreža", "Drugo"];
  const serviceOptions = [
    "Dizajna nove web stranice",
    "Izrade web stranice",
    "Redizajna postojeće stranice",
    "Održavanja web stranice",
  ];
  const budgetOptions = ["Ispod 1.000 €", "1.000 € – 5.000 €", "5.000 € – 10.000 €", "10.000 €+"];

  return (
<section className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 sm:px-6 md:px-10 pt-32 sm:pt-36 md:pt-40 py-12">
<h1 className="text-yellow-400 font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4 text-center">
        RAZGOVARAJMO
      </h1>
      <p className="text-gray-300 text-sm sm:text-base max-w-2xl text-center mb-10 px-2">
        Bilo da tek skicirate ideju za svoj novi projekt ili želite porazgovarati o digitalnim mogućnostima – tu smo da pretvorimo vaše misli u funkcionalnu i modernu web stranicu.
      </p>

      <form onSubmit={handleSubmit} className="w-full max-w-4xl flex flex-col gap-6">
        {/* Ime i tvrtka */}
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            name="name"
            placeholder="Ime*"
            value={formData.name}
            onChange={handleChange}
            className="flex-1 p-3 rounded-lg bg-neutral-900 border border-neutral-700 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400"
            required
          />
          <input
            type="text"
            name="company"
            placeholder="Tvrtka*"
            value={formData.company}
            onChange={handleChange}
            className="flex-1 p-3 rounded-lg bg-neutral-900 border border-neutral-700 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400"
            required
          />
        </div>

        {/* Referral */}
        <div>
          <p className="mb-2 font-medium">Pronašao/la sam vas putem:</p>
          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            {referralOptions.map(option => (
              <button
                type="button"
                key={option}
                onClick={() => handleMultiSelect("referral", option)}
                className={`flex-1 min-w-[120px] text-center px-4 py-3 rounded-full border transition-all duration-200 ${
                  formData.referral === option
                    ? "bg-yellow-400 text-black border-yellow-400"
                    : "bg-neutral-900 border-neutral-700 hover:border-yellow-400"
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
          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            {serviceOptions.map(option => (
              <button
                type="button"
                key={option}
                onClick={() => handleMultiSelect("services", option)}
                className={`flex-1 min-w-[150px] text-center px-4 py-3 rounded-full border transition-all duration-200 ${
                  formData.services.includes(option)
                    ? "bg-yellow-400 text-black border-yellow-400"
                    : "bg-neutral-900 border-neutral-700 hover:border-yellow-400"
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
          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            {budgetOptions.map(option => (
              <button
                type="button"
                key={option}
                onClick={() => setFormData(prev => ({ ...prev, budget: option }))}
                className={`flex-1 min-w-[120px] text-center px-4 py-3 rounded-full border transition-all duration-200 ${
                  formData.budget === option
                    ? "bg-yellow-400 text-black border-yellow-400"
                    : "bg-neutral-900 border-neutral-700 hover:border-yellow-400"
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
          placeholder="E-mail*"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 rounded-lg bg-neutral-900 border border-neutral-700 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400"
          required
        />

        {/* Details */}
        <textarea
          name="details"
          placeholder="Detalji projekta"
          value={formData.details}
          onChange={handleChange}
          className="w-full p-3 rounded-lg bg-neutral-900 border border-neutral-700 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 h-32 resize-none"
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
          className="mt-4 bg-yellow-400 text-black font-semibold px-6 py-3 rounded-lg hover:bg-yellow-300 transition-all duration-200"
        >
          Krenimo →
        </button>
      </form>
    </section>
  );
}

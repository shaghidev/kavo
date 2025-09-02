export default function Footer() {
    return (
      <footer className="relative bg-[#0A0F12] text-gray-100 overflow-hidden">
        {/* Desni gornji kut */}
        <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col items-end text-right space-y-2 z-10 relative">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline text-sm sm:text-base"
          >
            INSTAGRAM
          </a>
          <a
            href="mailto:hi@kavostudio.hr"
            className="hover:underline text-sm sm:text-base"
          >
            HI@KAVOSTUDIO.HR
          </a>
          <p className="text-gray-400 text-xs sm:text-sm">
            COPYRIGHT 2025 @ KAVO STUDIO
          </p>
        </div>
  
        {/* Ogroman branding na dnu footera, donja polovica "odrezana" */}
        <h1 className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-full text-[20vw] md:text-[15vw] font-extrabold text-gray-200 opacity-10 leading-none tracking-tight select-none pointer-events-none">
          KAVO STUDIO
        </h1>
      </footer>
    );
  }
  
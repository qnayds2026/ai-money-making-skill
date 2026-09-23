import { ArrowRight } from 'lucide-react';

const WHATSAPP_GROUP_URL = "https://chat.whatsapp.com/KDb21dpkaxQDBNtLcVmPkV?mode=gi_t";

export const HeroSection = () => {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Headline */}
        <div className="text-center max-w-5xl mx-auto mb-8 sm:mb-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-extrabold text-slate-900 tracking-tight leading-[1.2] font-heading">
            Learn AI Money Making Skill for New Opportunities
          </h1>
        </div>

        {/* Pitch & Primary CTA Container */}
        <div className="max-w-3xl mx-auto text-center space-y-6">
          {/* Body Paragraphs */}
          <p className="text-slate-700 text-base sm:text-lg lg:text-xl font-normal leading-relaxed">
            Discover our practical AI Money Making Skill and learn how it can be applied in real-world opportunities.
          </p>

          <div className="space-y-1.5 pt-1">
            <p className="text-slate-900 text-base sm:text-lg font-bold">
              Want to know more?
            </p>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Join our WhatsApp Group to get complete details, updates, and further information.
            </p>
          </div>

          {/* Big High-Converting CTA Button linking directly to WhatsApp Group */}
          <div className="pt-2 max-w-xl mx-auto space-y-3">
            <a
              id="hero-join-whatsapp-btn"
              href={WHATSAPP_GROUP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 sm:py-5 px-8 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-lg sm:text-2xl tracking-wide shadow-xl shadow-blue-600/25 blue-btn-glow transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] cursor-pointer flex items-center justify-center gap-3 no-underline"
            >
              <span>Join WhatsApp Group</span>
              <ArrowRight className="w-6 h-6 stroke-[3]" />
            </a>

            {/* Urgency Alert Callout */}
            <div className="flex items-center justify-center">
              <div className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs sm:text-sm font-semibold shadow-xs">
                <span>⚡ Hurry! Join the WhatsApp Group before it fills up!</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

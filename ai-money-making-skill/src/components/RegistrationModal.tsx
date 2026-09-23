import { useState, useEffect, FormEvent } from 'react';
import confetti from 'canvas-confetti';
import { MASTERCLASS_SLOTS } from '../data/landingData';
import { RegistrationFormData } from '../types';
import {
  X,
  Calendar,
  Clock,
  CheckCircle2,
  ShieldCheck,
  Award,
  Sparkles,
  Download,
  MessageCircle,
  ArrowRight,
  Zap,
} from 'lucide-react';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RegistrationModal = ({ isOpen, onClose }: RegistrationModalProps) => {
  const [selectedSlotId, setSelectedSlotId] = useState<string>(MASTERCLASS_SLOTS[0].id);
  const [formData, setFormData] = useState<RegistrationFormData>({
    fullName: '',
    email: '',
    phone: '',
    countryCode: '+91',
    slotId: MASTERCLASS_SLOTS[0].id,
    experienceLevel: 'beginner',
    primaryGoal: 'replace_income',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [downloadedWorkbook, setDownloadedWorkbook] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const selectedSlot =
    MASTERCLASS_SLOTS.find((s) => s.id === selectedSlotId) || MASTERCLASS_SLOTS[0];

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.phone) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
        });
      } catch (err) {
        console.error('Confetti error', err);
      }
    }, 700);
  };

  const handleDownloadWorkbook = () => {
    setDownloadedWorkbook(true);
    const element = document.createElement('a');
    const file = new Blob(
      [
        `========================================================\nAI FREEDOM BUSINESS MODEL™ - MASTERCLASS PREPARATION GUIDE\n========================================================\n\nRegistered Attendee: ${formData.fullName}\nEmail: ${formData.email}\nWhatsApp: ${formData.countryCode} ${formData.phone}\nConfirmed Session: 23rd Aug, 11 AM - 12:30 PM IST (Zoom Live)\n\nPRE-SESSION CHECKLIST:\n1. Open your ChatGPT, Claude, or Google Gemini account.\n2. Write down 3 areas of personal passion, professional skills, or career expertise.\n3. Bring a physical notebook & pen for high-speed note taking.\n4. Join Zoom 5 minutes prior to start time to secure your audio connection.\n\nVIP BONUS UNLOCK INSTRUCTIONS:\nStay until the live Q&A segment to receive your 1,500+ AI Prompt Vault & Notion swipe files.\n\nSee you inside the Masterclass with Siddharth Rajsekar!`,
      ],
      { type: 'text/plain' }
    );
    element.href = URL.createObjectURL(file);
    element.download = 'AI_Freedom_Masterclass_Preparation_Guide.txt';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/70 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-lg bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-2xl my-8 text-slate-900">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 bg-slate-100 hover:bg-slate-200 p-2 rounded-full transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSuccess ? (
          <div>
            {/* Modal Header */}
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-600 border border-blue-200/60 text-xs font-bold uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                Official WhatsApp Community
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
                Join Our WhatsApp Group
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Get complete AI Money-Making Skills Course details, schedules &amp; updates.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Event slot display */}
              <div className="p-3.5 rounded-2xl bg-blue-50/50 border border-blue-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-lg">
                    💬
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">
                      AI Money-Making Skills Course
                    </div>
                    <div className="text-[11px] text-slate-500">
                      Instant WhatsApp Group Access &amp; Course Syllabus
                    </div>
                  </div>
                </div>
                <span className="text-[10px] bg-blue-100 text-blue-800 font-bold px-2 py-0.5 rounded">
                  Open Group
                </span>
              </div>

              {/* Full Name */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Full Name:
                </label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="e.g. Rahul Sharma"
                  className="w-full bg-slate-50 border border-slate-300 focus:border-blue-600 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all shadow-sm"
                />
              </div>

              {/* Email Address */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Email Address:
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="e.g. rahul@example.com"
                  className="w-full bg-slate-50 border border-slate-300 focus:border-blue-600 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all shadow-sm"
                />
              </div>

              {/* WhatsApp Number with Country Code */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  WhatsApp Number (For Instant Zoom Link &amp; Pass):
                </label>
                <div className="flex gap-2">
                  <select
                    value={formData.countryCode}
                    onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}
                    className="bg-slate-50 border border-slate-300 rounded-xl px-3 py-2.5 text-sm text-slate-900 focus:border-blue-600 focus:outline-none"
                  >
                    <option value="+91">🇮🇳 +91 (India)</option>
                    <option value="+1">🇺🇸 +1 (USA/Canada)</option>
                    <option value="+44">🇬🇧 +44 (UK)</option>
                    <option value="+971">🇦🇪 +971 (UAE)</option>
                    <option value="+65">🇸🇬 +65 (Singapore)</option>
                    <option value="+61">🇦🇺 +61 (Australia)</option>
                  </select>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="9876543210"
                    className="flex-1 bg-slate-50 border border-slate-300 focus:border-blue-600 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all shadow-sm"
                  />
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-extrabold text-base uppercase tracking-wider shadow-lg shadow-blue-600/25 blue-btn-glow transition-all hover:scale-[1.02] cursor-pointer flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <span>Connecting to WhatsApp...</span>
                  ) : (
                    <>
                      <span>Join WhatsApp Group Now</span>
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center justify-center gap-4 text-[11px] text-slate-500 pt-1">
                <div className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                  <span>100% Privacy Protected</span>
                </div>
                <div>•</div>
                <div>Instant Group Invite</div>
              </div>
            </form>
          </div>
        ) : (
          /* Success Screen */
          <div className="text-center py-4 space-y-5">
            <div className="w-16 h-16 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mx-auto shadow-md">
              <CheckCircle2 className="w-9 h-9 stroke-[2.5]" />
            </div>

            <div>
              <div className="text-xs font-mono-code font-bold text-blue-700 uppercase tracking-wider mb-1">
                🎉 INVITATION READY!
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900 font-heading">
                Welcome, {formData.fullName.split(' ')[0]}!
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2">
                Click below to enter the official WhatsApp Group for complete course details, schedules, and materials.
              </p>
            </div>

            {/* Direct WhatsApp Group Invite Button */}
            <div className="pt-1">
              <a
                href="https://chat.whatsapp.com/"
                target="_blank"
                rel="noreferrer noopener"
                className="w-full py-4 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm sm:text-base transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/20 cursor-pointer"
              >
                <span>💬 Enter WhatsApp Group Now</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>

            {/* Course Summary */}
            <div className="p-4 rounded-2xl bg-blue-50/40 border border-blue-100 text-left space-y-2 text-xs">
              <div className="flex items-center justify-between font-bold text-slate-900 pb-2 border-b border-slate-200">
                <span>📚 Program:</span>
                <span className="text-blue-600 font-bold">AI Money-Making Skills Course</span>
              </div>
              <div className="text-slate-600">
                • <strong>Details Sent To:</strong> {formData.email} &amp; WhatsApp ({formData.phone})
              </div>
              <div className="text-slate-600">
                • <strong>Includes:</strong> Practical AI Workflows, Monetization Blueprints &amp; Live Q&amp;A
              </div>
            </div>

            {/* Step: Preparation Guide */}
            <div className="space-y-3 pt-1">
              <button
                onClick={handleDownloadWorkbook}
                className="w-full py-3 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow"
              >
                <Download className="w-4 h-4 text-blue-400" />
                <span>
                  {downloadedWorkbook
                    ? '✓ Course Overview Downloaded'
                    : 'Download Course Overview & Syllabus (.txt)'}
                </span>
              </button>

              <button
                onClick={onClose}
                className="w-full py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs transition-all cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

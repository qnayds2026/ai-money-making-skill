import { useState } from 'react';

export function Footer() {
  const [modalType, setModalType] = useState<'privacy' | 'terms' | null>(null);

  return (
    <>
      <footer id="main-footer" className="w-full bg-[#0a1128] text-white py-12 px-4 border-t border-blue-950/60">
        <div className="max-w-4xl mx-auto flex flex-col items-center justify-center text-center space-y-4">
          
          {/* Logo / Badge Icon */}
          <div className="flex items-center justify-center">
            <div className="relative flex items-center justify-center w-12 h-12 rounded-full bg-slate-900 border border-blue-900/60 shadow-lg">
              {/* Circular blue gradient ring */}
              <div className="absolute inset-1 rounded-full border border-blue-500/50 animate-pulse"></div>
              {/* Dove / Eagle Flying Emblem */}
              <svg 
                className="w-7 h-7 text-white drop-shadow" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="1.8" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M12 2L15 8L22 9L17 14L18.5 21L12 17.5L5.5 21L7 14L2 9L9 8L12 2Z" fill="white" stroke="none" opacity="0.15" />
                <path d="M12 3c-1.2 2.8-3.5 5.5-7 6.5 3 1.2 5 2.8 5 5.5 0 2-1 3.5-2 5 3-1 6-2 8-2s5 1 8 2c-1-1.5-2-3-2-5 0-2.7 2-4.3 5-5.5-3.5-1-5.8-3.7-7-6.5z" />
                <path d="M12 8v6" />
                <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1" opacity="0.3" />
              </svg>
            </div>
          </div>

          {/* Copyright text */}
          <p className="text-sm md:text-base font-semibold text-slate-100 tracking-tight">
            ©2026 Qnayds
          </p>

          {/* Legal Links */}
          <div className="flex items-center justify-center gap-2 text-xs md:text-sm font-medium">
            <button
              id="footer-privacy-policy-link"
              type="button"
              onClick={() => setModalType('privacy')}
              className="hover:underline transition-colors text-blue-400 hover:text-blue-300 cursor-pointer"
            >
              Privacy Policy
            </button>
            <span className="text-slate-600 font-bold">•</span>
            <button
              id="footer-terms-conditions-link"
              type="button"
              onClick={() => setModalType('terms')}
              className="hover:underline transition-colors text-blue-400 hover:text-blue-300 cursor-pointer"
            >
              Terms & Conditions
            </button>
          </div>

        </div>
      </footer>

      {/* Legal Information Modal */}
      {modalType && (
        <div 
          id="legal-modal-backdrop"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn"
          onClick={() => setModalType(null)}
        >
          <div 
            id="legal-modal-card"
            className="bg-[#0f172a] border border-slate-700 text-slate-100 rounded-2xl max-w-xl w-full max-h-[85vh] overflow-y-auto p-6 md:p-8 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-slate-700 pb-4 mb-4">
              <h3 className="text-lg font-bold text-white">
                {modalType === 'privacy' ? 'Privacy Policy' : 'Terms & Conditions'}
              </h3>
              <button
                id="close-legal-modal-btn"
                type="button"
                onClick={() => setModalType(null)}
                className="w-8 h-8 rounded-full bg-slate-800 text-slate-300 hover:text-white flex items-center justify-center text-sm hover:bg-slate-700 transition-colors"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4 text-xs md:text-sm text-slate-300 leading-relaxed">
              {modalType === 'privacy' ? (
                <>
                  <p>
                    <strong>Qnayds</strong> respects your privacy and is committed to protecting your personal data. This privacy policy explains how we handle your personal information when you register for our live masterclasses or access our digital educational products.
                  </p>
                  <p>
                    <strong>Information We Collect:</strong> When registering for our live workshop, we collect your name, email address, and phone number to send your Zoom access link, reminders, and study materials.
                  </p>
                  <p>
                    <strong>Data Security:</strong> We do not sell, rent, or trade your personal data to third parties. We use industry-standard encryption to protect your data.
                  </p>
                  <p>
                    <strong>Contact:</strong> For questions regarding your personal information, please contact our support team at support@qnayds.com.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    <strong>Terms & Conditions</strong> governing the access and participation in the AI Freedom Masterclass hosted by Qnayds.
                  </p>
                  <p>
                    <strong>Educational Purposes:</strong> All strategies, AI frameworks, and case studies shared during the workshop are for educational purposes. Results vary based on individual effort, skills, and execution.
                  </p>
                  <p>
                    <strong>Intellectual Property:</strong> All materials, slides, frameworks, and bonuses provided remain the intellectual property of Qnayds.
                  </p>
                  <p>
                    <strong>No Income Guarantee:</strong> Past performance and student examples are not guarantees of future earnings.
                  </p>
                </>
              )}
            </div>

            <div className="mt-6 pt-4 border-t border-slate-700 flex justify-end">
              <button
                id="dismiss-legal-modal-btn"
                type="button"
                onClick={() => setModalType(null)}
                className="px-5 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-xs font-semibold transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

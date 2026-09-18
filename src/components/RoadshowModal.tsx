import React from 'react';
import { CampaignDay } from '../data/flyerStorage';
import { X, MapPin, CheckCircle2, School, GraduationCap, Building, Bus } from 'lucide-react';

interface RoadshowModalProps {
  isOpen: boolean;
  onClose: () => void;
  campaignDays: CampaignDay[];
}

export const RoadshowModal: React.FC<RoadshowModalProps> = ({
  isOpen,
  onClose,
  campaignDays,
}) => {
  if (!isOpen) return null;

  const getInstitutionIcon = (type: string) => {
    if (type.includes('মাদ্রাসা')) return GraduationCap;
    if (type.includes('কলেজ')) return Building;
    return School;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="bg-white rounded-3xl max-w-lg w-full max-h-[90vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden">
        
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-amber-600 to-orange-600 p-4 text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/20">
              <Bus className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="text-[10px] font-extrabold uppercase tracking-wider text-amber-200">
                মাঠপর্যায়ে প্রচারণা রিপোর্ট
              </div>
              <h3 className="text-base font-black text-white">
                ক্যাম্পাস রোডশো (১৫ ও ১৬ সেপ্টেম্বর)
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Close"
            className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 overflow-y-auto space-y-4">
          <div className="bg-amber-50 rounded-2xl p-3 border border-amber-200 text-xs text-amber-900 font-medium">
            মেহেন্দীগঞ্জের মোট ৬টি শীর্ষ শিক্ষাপ্রতিষ্ঠানে শিক্ষার্থীদের সরাসরি ইনোভেট ২৬ উৎসবের নিয়মাবলী ও আমন্ত্রণ জানানো হয়েছে।
          </div>

          {/* Days */}
          {campaignDays.map((day) => (
            <div key={day.id} className="bg-slate-50 rounded-2xl p-3.5 border border-slate-200 space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black text-amber-800 bg-amber-100 px-2.5 py-0.5 rounded-full">
                  {day.title}
                </span>
                <span className="text-[11px] font-bold text-slate-500">
                  {day.date}
                </span>
              </div>

              <div className="space-y-1.5">
                {day.schools.map((school, sIdx) => {
                  const IconComp = getInstitutionIcon(school.type);
                  return (
                    <div
                      key={sIdx}
                      className="bg-white p-2.5 rounded-xl border border-slate-200/70 flex items-start gap-2.5"
                    >
                      <div className="w-7 h-7 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center shrink-0 mt-0.5">
                        <IconComp className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <h5 className="text-xs font-black text-slate-900 leading-tight">
                          {school.bengaliName}
                        </h5>
                        <p className="text-[10px] text-slate-500 font-medium">
                          {school.type}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <p className="text-[11px] text-slate-600 font-medium leading-relaxed bg-white/80 p-2 rounded-xl border border-slate-100">
                {day.description}
              </p>
            </div>
          ))}
        </div>

        {/* Modal Footer */}
        <div className="p-3 bg-slate-50 border-t border-slate-200 flex items-center justify-end">
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-xl bg-slate-900 text-white text-xs font-bold hover:bg-slate-800 cursor-pointer"
          >
            বন্ধ করুন
          </button>
        </div>

      </div>
    </div>
  );
};

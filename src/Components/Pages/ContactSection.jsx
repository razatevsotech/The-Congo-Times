import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="bg-[#f3f2ef] px-4 py-10 sm:px-6 sm:py-12">
      <div className="mx-auto max-w-[1100px]">
        <div className="flex flex-col items-center">
          {/* Top Contact Info */}
          <div className="w-full max-w-[340px]">
            <h2 className="text-[28px] font-semibold leading-none text-[#111] sm:text-[30px]">
              Contact us
            </h2>

            <p className="mt-3 text-[10px] leading-[1.6] text-[#7a7a7a]">
              We value your feedback, inquiries, and contributions. Reach out to
              us through any of the methods below, and we’ll get back to you as
              soon as possible.
            </p>

            <div className="mt-6 space-y-4">
              <div className="border-b border-[#8d8d8d] pb-3">
                <div className="flex items-center gap-2 text-[#d9482a]">
                  <Phone size={12} />
                  <span className="text-[10px] font-medium text-[#111]">
                    (123) 456-7890
                  </span>
                </div>
                <p className="mt-1 text-[9px] text-[#7a7a7a]">
                  Monday - Friday, 9am - 6pm
                </p>
              </div>

              <div className="border-b border-[#8d8d8d] pb-3">
                <div className="flex items-center gap-2 text-[#d9482a]">
                  <Mail size={12} />
                  <span className="break-all text-[10px] font-medium text-[#111]">
                    contact@nexusnews.com
                  </span>
                </div>
                <p className="mt-1 text-[9px] text-[#7a7a7a]">
                  Hear back in about 24 hours
                </p>
              </div>

              <div className="border-b border-[#8d8d8d] pb-3">
                <div className="flex items-center gap-2 text-[#d9482a]">
                  <MapPin size={12} />
                  <span className="text-[10px] font-medium text-[#111]">
                    Address
                  </span>
                </div>
                <p className="mt-1 text-[9px] leading-[1.5] text-[#7a7a7a]">
                  125 Elm Street, Springfield, IL 62701, USA
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Red Cards */}
          <div className="mt-10 w-full max-w-[700px] bg-[#d9472a] px-5 py-8 text-white sm:px-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="border-b border-white/50 pb-6 text-center md:border-b-0 md:border-r md:pb-0 md:pr-6">
                <h3 className="text-[13px] font-semibold">Editorial Team</h3>
                <p className="mx-auto mt-2 max-w-[220px] text-[10px] leading-[1.7] text-white/90">
                  For editorial inquiries, corrections, or content submissions,
                  contact our editorial team.
                </p>
                <a
                  href="mailto:editorial@nexusnews.com"
                  className="mt-4 inline-block break-all text-[12px] font-semibold underline"
                >
                  editorial@nexusnews.com
                </a>
              </div>

              <div className="text-center md:pl-6">
                <h3 className="text-[13px] font-semibold">
                  Advertising & Partnerships
                </h3>
                <p className="mx-auto mt-2 max-w-[220px] text-[10px] leading-[1.7] text-white/90">
                  Interested in advertising with us or exploring partnership
                  opportunities?
                </p>
                <a
                  href="mailto:ads@nexusnews.com"
                  className="mt-4 inline-block break-all text-[12px] font-semibold underline"
                >
                  ads@nexusnews.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
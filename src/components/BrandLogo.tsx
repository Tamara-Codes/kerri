"use client";

import { useState, useRef, useEffect } from "react";

interface BrandLogoProps {
  name: string;
  logo: string;
  website: string;
  sizeClass?: string;
}

export default function BrandLogo({ name, logo, website, sizeClass }: BrandLogoProps) {
  const [showText, setShowText] = useState(!logo);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!logo) return;
    const img = imgRef.current;
    if (!img) return;
    if (img.complete && img.naturalWidth === 0) {
      setShowText(true);
    }
  }, [logo]);

  const imgSize = sizeClass || "max-h-10 max-w-[130px]";

  return (
    <a
      href={website}
      target="_blank"
      rel="noopener noreferrer"
      className="group bg-white flex items-center justify-center p-6 lg:p-8 min-h-[100px] hover:bg-kerri-warm/60 transition-all duration-300 border-b border-r border-black/[0.06]"
      title={name}
    >
      {!showText ? (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img
          ref={imgRef}
          src={logo}
          alt={name}
          className={`w-auto object-contain opacity-75 group-hover:opacity-100 transition-all duration-300 group-hover:scale-105 ${imgSize}`}
          onError={() => setShowText(true)}
          onLoad={(e) => {
            const img = e.currentTarget;
            if (img.naturalWidth === 0) setShowText(true);
          }}
        />
      ) : (
        <span className="font-sans text-[13px] font-medium tracking-wide text-kerri-charcoal/50 group-hover:text-kerri-red transition-colors duration-300 text-center leading-tight">
          {name}
        </span>
      )}
    </a>
  );
}

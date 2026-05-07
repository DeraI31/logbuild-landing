import React from "react";

interface LogoMaskProps {
  className?: string;
}

/**
 * Renders the LogBuild logo using CSS mask-image with luminance mode.
 * White pixels in the PNG become visible; the dark green background
 * becomes transparent regardless of the page colour behind it.
 */
export function LogoMask({ className = "" }: LogoMaskProps) {
  return (
    <div
      role="img"
      aria-label="LogBuild"
      className={className}
      style={
        {
          backgroundColor: "white",
          WebkitMaskImage: "url(/Logbuild_logo.png)",
          maskImage: "url(/Logbuild_logo.png)",
          WebkitMaskSize: "contain",
          maskSize: "contain",
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
          WebkitMaskPosition: "center",
          maskPosition: "center",
          WebkitMaskMode: "luminance",
          maskMode: "luminance",
        } as React.CSSProperties
      }
    />
  );
}

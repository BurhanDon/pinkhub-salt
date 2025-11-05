"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function usePreserveScroll() {
  const pathname = usePathname();

  useEffect(() => {
    // Restore previous scroll position (if any)
    const y = sessionStorage.getItem(`scroll-${pathname}`);
    if (y) window.scrollTo(0, parseFloat(y));

    const handleScroll = () => {
      sessionStorage.setItem(`scroll-${pathname}`, window.scrollY.toString());
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);
}
//  Not Used for now.
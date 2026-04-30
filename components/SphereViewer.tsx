"use client";

import React, { useEffect, useRef } from "react";
import PhotoSphereViewer from "photo-sphere-viewer";

type Props = {
  src: string;
};

export default function SphereViewer({ src }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !src) return;

    let viewer: any = null;
    let cancelled = false;
    let initialized = false;

    const initViewer = () => {
      if (cancelled || initialized) return;
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      if (rect.width <= 50 || rect.height <= 50) return;

      initialized = true;
      try {
        // @ts-ignore
        viewer = new (PhotoSphereViewer as any).Viewer({
          container: ref.current,
          panorama: src,
        });
        // eslint-disable-next-line no-console
        console.log("SphereViewer: initialized", { src, rect });
      } catch (e) {
        initialized = false;
        // eslint-disable-next-line no-console
        console.error("SphereViewer init error:", e);
      }
    };

    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = src;

    let ro: ResizeObserver | null = null;

    const startObservingSizeAndInit = () => {
      if (cancelled || initialized) return;
      initViewer();
      if (initialized) return;

      ro = new ResizeObserver(() => {
        initViewer();
        if (initialized) {
          ro?.disconnect();
          ro = null;
        }
      });
      ro.observe(el);

      requestAnimationFrame(() => initViewer());
    };

    const onLoad = () => {
      if (cancelled) return;

      const w = img.naturalWidth || 0;
      const h = img.naturalHeight || 0;
      // eslint-disable-next-line no-console
      console.log("SphereViewer: panorama loaded", { src, w, h });

      if (w <= 1 || h <= 1) {
        console.warn("SphereViewer: panorama image has invalid dimensions", { src, w, h });
        return;
      }

      const ratio = w / h;
      if (ratio < 1.4 || ratio > 2.6) {
        console.warn("SphereViewer: panorama aspect ratio is unusual (recommended ~2:1)", {
          src,
          w,
          h,
          ratio,
        });
      }

      startObservingSizeAndInit();
    };

    const onError = () => {
      if (cancelled) return;
      console.warn("SphereViewer: failed to load panorama image:", src);
    };

    img.addEventListener("load", onLoad);
    img.addEventListener("error", onError);

    return () => {
      cancelled = true;

      img.removeEventListener("load", onLoad);
      img.removeEventListener("error", onError);

      ro?.disconnect();
      ro = null;

      try {
        viewer?.destroy?.();
      } catch {
        // ignore
      }
    };
  }, [src]);

  return (
    <div
      ref={ref}
      className="psv-container"
      style={{ width: "100%", height: "100%", background: "#000" }}
      aria-label="360 viewer container"
    />
  );
}

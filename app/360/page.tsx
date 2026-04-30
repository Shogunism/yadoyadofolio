"use client";

import React, { useEffect, useRef } from "react";

export default function Page360() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let viewer: any = null;
    let cancelled = false;
    let initialized = false;

    // photo-sphere-viewer を動的にインポート
    let PhotoSphereViewer: any = null;

    const initViewer = async () => {
      if (cancelled || initialized) return;
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      if (rect.width <= 50 || rect.height <= 50) return;

      initialized = true;
      try {
        // photo-sphere-viewer を動的にインポート
        if (!PhotoSphereViewer) {
          const module = await import("photo-sphere-viewer");
          PhotoSphereViewer = module.default;
        }

        // @ts-ignore
        viewer = new (PhotoSphereViewer as any).Viewer({
          container: ref.current,
          panorama: "/images/360/BH360.png",
          navbar: false,
        });
        console.log("360 Viewer: initialized");
      } catch (e) {
        initialized = false;
        console.error("360 Viewer init error:", e);
      }
    };

    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = "/images/360/B360.png";

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
      console.log("360 Viewer: panorama loaded", { w, h });

      if (w <= 1 || h <= 1) {
        console.warn("360 Viewer: invalid dimensions", { w, h });
        return;
      }

      startObservingSizeAndInit();
    };

    const onError = () => {
      if (cancelled) return;
      console.warn("360 Viewer: failed to load image");
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
  }, []);

  return (
    <>
      <style>{`
        #__next {
          width: 100vw !important;
          height: 100vh !important;
        }
        [data-react-root] {
          width: 100vw !important;
          height: 100vh !important;
        }
        div[aria-label="360 viewer"] {
          width: 100vw !important;
          height: 100vh !important;
        }
        .psv-container {
          width: 100vw !important;
          height: 100vh !important;
        }
        .psv-canvas-container {
          width: 100vw !important;
          height: 100vh !important;
        }
        canvas {
          width: 100vw !important;
          height: 100vh !important;
        }
      `}</style>
      <div
        ref={ref}
        style={{ width: "100vw", height: "100vh", margin: 0, padding: 0, overflow: "hidden", background: "#000" }}
        aria-label="360 viewer"
      />
    </>
  );
}

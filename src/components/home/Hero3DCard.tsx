"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { products } from "@/data/products";
import { useQuote } from "@/components/QuoteProvider";
import { useToast } from "@/components/ui/Toast";
import { useLanguage } from "@/components/LanguageProvider";

export default function Hero3DCard() {
  const mountRef = useRef<HTMLDivElement>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const { addItem, isInQuote } = useQuote();
  const { showToast } = useToast();
  const { t } = useLanguage();

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const width = mount.offsetWidth;
    const height = mount.offsetHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 6.5);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    // Dynamic Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.8);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0x2563eb, 2.5);
    dirLight1.position.set(5, 5, 5);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0x0ea5e9, 2);
    dirLight2.position.set(-5, -5, 3);
    scene.add(dirLight2);

    // 3D Industrial Drum + Molecular Ring Group
    const visualGroup = new THREE.Group();

    // High-finish polished industrial drum
    const drumGeo = new THREE.CylinderGeometry(1.15, 1.15, 2.4, 36);
    const drumMat = new THREE.MeshStandardMaterial({
      color: 0x0f2444,
      metalness: 0.85,
      roughness: 0.2,
    });
    const drumMesh = new THREE.Mesh(drumGeo, drumMat);
    visualGroup.add(drumMesh);

    // Vibrant Electric Accent Rings
    const ringGeo = new THREE.TorusGeometry(1.18, 0.045, 16, 36);
    const ringMat = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      metalness: 0.9,
      roughness: 0.1,
    });
    const ring1 = new THREE.Mesh(ringGeo, ringMat);
    ring1.rotation.x = Math.PI / 2;
    ring1.position.y = 0.6;
    visualGroup.add(ring1);

    const ring2 = ring1.clone();
    ring2.position.y = -0.6;
    visualGroup.add(ring2);

    // Molecular Orbital Orbit
    const orbitalGeo = new THREE.TorusGeometry(1.85, 0.02, 16, 64);
    const orbitalMat = new THREE.MeshBasicMaterial({
      color: 0x2563eb,
      transparent: true,
      opacity: 0.6,
    });
    const orbital = new THREE.Mesh(orbitalGeo, orbitalMat);
    orbital.rotation.x = Math.PI / 3;
    visualGroup.add(orbital);

    scene.add(visualGroup);

    let animId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      const elapsed = clock.getElapsedTime();
      visualGroup.rotation.y = elapsed * 0.45;
      orbital.rotation.z = elapsed * 0.3;
      visualGroup.position.y = Math.sin(elapsed * 1.5) * 0.08;
      renderer.render(scene, camera);
      animId = requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => {
      if (!mount) return;
      const w = mount.offsetWidth;
      const h = mount.offsetHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
      if (mount && renderer.domElement) {
        mount.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  const featured = products.filter((p) => p.bestSeller).slice(0, 4);
  const searchResults = searchQuery.trim()
    ? products
        .filter(
          (p) =>
            p.displayName.toLowerCase().includes(searchQuery.toLowerCase()) ||
            p.category.toLowerCase().includes(searchQuery.toLowerCase())
        )
        .slice(0, 4)
    : featured;

  const handleAdd = (p: typeof products[0]) => {
    addItem(p.slug, p.displayName, p.category);
    showToast(`${p.displayName} added to Quote List`);
  };

  return (
    <div className="rounded-2xl border border-border bg-surface p-6 shadow-xl relative overflow-hidden">
      {/* Visualizer Header */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-5 pb-5 border-b border-border">
        <div className="text-left">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-surface-inverse text-ink-inverse text-[11px] font-bold uppercase tracking-wider mb-1.5 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            Jodia Trading Desk Stock
          </div>
          <h3 className="text-lg font-black text-ink tracking-tight">
            Bulk Chemical Fast-Finder
          </h3>
          <p className="text-xs text-ink-muted font-medium">
            Real-time procurement &amp; wholesale spec verification
          </p>
        </div>

        {/* 3D WebGL Canvas */}
        <div
          ref={mountRef}
          className="w-28 h-28 sm:w-32 sm:h-32 rounded-xl bg-surface-muted border border-border relative shrink-0 shadow-inner"
        />
      </div>

      {/* Quick Search */}
      <div className="relative mb-3.5">
        <input
          type="text"
          placeholder="Filter by chemical name (e.g. DOP, Titanium, IPA, MEG)..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-9 pr-4 py-2.5 text-xs rounded-xl border border-border bg-base text-ink placeholder:text-ink-subtle focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent font-semibold"
        />
        <svg
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          className="absolute left-3 top-1/2 -translate-y-1/2 text-ink-subtle"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      </div>

      {/* Chemical Stock Cards */}
      <div className="space-y-2 max-h-56 overflow-y-auto pr-1">
        {searchResults.map((p) => {
          const added = isInQuote(p.slug);
          return (
            <div
              key={p.slug}
              className="p-3 rounded-xl border border-border bg-base/60 hover:bg-surface hover:border-accent/40 flex items-center justify-between text-xs transition-all duration-150"
            >
              <div className="truncate pr-2">
                <div className="flex items-center gap-1.5">
                  <span className="font-bold text-ink truncate">{p.displayName}</span>
                  {p.bestSeller && (
                    <span className="text-[9px] px-1.5 py-0.2 rounded bg-accent-light text-accent border border-accent-border font-extrabold uppercase">
                      Top Mover
                    </span>
                  )}
                </div>
                <p className="text-[11px] text-ink-muted mt-0.5 truncate">
                  {p.packaging} • {p.grade}
                </p>
              </div>

              <button
                onClick={() => handleAdd(p)}
                className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-colors shrink-0 ${
                  added
                    ? "bg-success-light text-success border border-success-border"
                    : "bg-surface-inverse text-ink-inverse hover:bg-accent shadow-xs"
                }`}
              >
                {added ? "✓ Added" : "+ Quote"}
              </button>
            </div>
          );
        })}
      </div>

      {/* Verified Supply Guarantee */}
      <div className="mt-4 pt-3 border-t border-border flex items-center justify-between text-[11px] font-bold text-ink-muted">
        <span className="flex items-center gap-1">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-success">
            <path d="M20 6 9 17l-5-5" />
          </svg>
          Batch COA Provided
        </span>
        <span className="flex items-center gap-1">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-success">
            <path d="M20 6 9 17l-5-5" />
          </svg>
          Bulk Drum &amp; Tank Load Ready
        </span>
      </div>
    </div>
  );
}

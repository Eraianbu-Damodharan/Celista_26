import { useEffect, useRef } from "react";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import logoImg from "../assets/logo.png";

gsap.registerPlugin(ScrollTrigger);

export default function ThreeCanvas() {
  const mountRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;

    document.body.style.overflow = "hidden";

    // ================= SCENE =================
    const scene = new THREE.Scene();
    scene.background = null; // transparent

    // ================= CAMERA =================
    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    camera.position.z = 3;

    // ================= RENDERER =================
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);

    mountRef.current.appendChild(renderer.domElement);

    // ================= LIGHTS =================
    const light1 = new THREE.PointLight(0xffffff, 2);
    light1.position.set(2, 2, 3);
    scene.add(light1);

    const light2 = new THREE.PointLight(0xff0000, 1.5);
    light2.position.set(-2, 0, 2);
    scene.add(light2);

    scene.add(new THREE.AmbientLight(0xffffff, 0.35));

    // ================= LOAD LOGO =================
    const loader = new THREE.TextureLoader();
    let frameId;

    loader.load(
      logoImg,
      (texture) => {
        document.body.style.overflow = "auto";
        ScrollTrigger.refresh();

        const material = new THREE.MeshStandardMaterial({
          map: texture,
          transparent: true,
          opacity: 1,
          side: THREE.DoubleSide,
        });

        const geometry = new THREE.PlaneGeometry(1.6, 1.6);
        const logo = new THREE.Mesh(geometry, material);

        scene.add(logo);

        // ================= RENDER LOOP =================
        const animate = () => {
          renderer.render(scene, camera);
          frameId = requestAnimationFrame(animate);
        };

        animate();

        // ================= SCROLL ANIMATION =================
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: "#hero",
            start: "top top",
            end: "bottom bottom",
            scrub: 1.8,
          },
        });

        // Rotation
        tl.to(logo.rotation, {
          y: Math.PI * 2,
          ease: "none",
          duration: 1.6,
        });

        // Move upward
        tl.to(logo.position, {
          y: 2.5,
          z: -2,
          ease: "power2.out",
          duration: 1.2,
        });

        // Fade out
        tl.to(
          logo.material,
          {
            opacity: 0,
            duration: 0.8,
          },
          "<"
        );

        // Hide canvas
        tl.to(
          mountRef.current,
          {
            opacity: 0,
            duration: 0.3,
          },
          "<"
        );
      },
      undefined,
      (err) => {
        console.error("Logo failed to load", err);
        document.body.style.overflow = "auto";
      }
    );

    // ================= RESIZE =================
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    // ================= CLEANUP =================
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(frameId);

      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }

      renderer.dispose();
    };
  }, []);

  // ================= CANVAS CONTAINER =================
  return (
    <div
      ref={mountRef}
      style={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 0,
        pointerEvents: "none",
      }}
    />
  );
}

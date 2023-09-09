"use client";
import { useEffect, useState } from "react";

function Blob() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const mouseMove = (e: any) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  return (
    <div
      className="h-[500px] w-[500px] rounded-full bg-[#071d37] fixed top-0 left-0 z-[-10] blur-3xl"
      style={{
        left: mousePosition.x - 250,
        top: mousePosition.y - 250,
      }}
    />
  );
}
export default Blob;

import React, { useRef } from "react";
import { useInView } from "react-intersection-observer";

export default function ScrollVideo() {
  const videoRef = useRef(null);
  const { ref, inView } = useInView({
    triggerOnce: false, // Ensures the observer re-triggers every time it enters the viewport
    threshold: 0.5, // Play the video when 50% of it is in view
  });

  // Play or pause the video based on its visibility
  React.useEffect(() => {
    if (videoRef.current) {
      if (inView) {
        videoRef.current.muted = false;
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  }, [inView]);

  return (
    <div ref={ref} style={{ marginBottom: "20px" }}>
      <video
        style={{ width: "100%", height: "auto" }}
        src="Yuqi.mp4"
        ref={videoRef}
        autoPlay
        muted
        controls
      />
    </div>
  );
}

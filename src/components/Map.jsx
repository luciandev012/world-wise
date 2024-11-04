import { useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";
import { useEffect, useRef } from "react";
import ScrollVideo from "./ScrollVideo";

export default function Map() {
  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  const videoRef = useRef(null);
  const event = "mousemove";

  videoRef?.current?.click;
  useEffect(() => {
    const handleUserInteraction = () => {
      if (videoRef.current) {
        videoRef.current.muted = false;
        videoRef.current.play();
      }
      // Remove the event listener after it runs once
      window.removeEventListener(event, handleUserInteraction);
    };

    // Add event listener for any user interaction (e.g., click)
    window.addEventListener(event, handleUserInteraction);

    return () => {
      window.removeEventListener(event, handleUserInteraction);
    };
  }, []);
  return <div className={styles.mapContainer}></div>;
}

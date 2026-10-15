import branding from "@/assets/work-branding.jpg";
import product from "@/assets/work-product.jpg";
import web from "@/assets/work-web.jpg";
import poster from "@/assets/work-poster.jpg";
import video from "@/assets/work-video.jpg";
import food from "@/assets/work-food.jpg";
import app from "@/assets/work-app.jpg";
import portrait from "@/assets/portrait.jpg";
import noir from "@/assets/logo-noir.png";
import pulse from "@/assets/logo-pulse.png";
import vela from "@/assets/logo-vela.png";
import apex from "@/assets/logo-apex.png";
import orbit from "@/assets/logo-orbit.png";
import crumb from "@/assets/logo-crumb.png";
import cityVideo from "@/assets/video-city.mp4.asset.json";
import coffeeVideo from "@/assets/video-coffee.mp4.asset.json";
import cityPoster from "@/assets/video-poster-1.jpg";
import coffeePoster from "@/assets/video-poster-2.jpg";

export { portrait };

export const images = [
  { src: branding, title: "Miramar Identity", tag: "Branding" },
  { src: product, title: "Midnight Fragrance", tag: "Product" },
  { src: web, title: "Nexora Website", tag: "Web Design" },
  { src: poster, title: "Blame Poster Series", tag: "Graphic Design" },
  { src: food, title: "Ember Kitchen", tag: "Food" },
  { src: app, title: "Fintech App", tag: "UI/UX" },
  { src: video, title: "Studio Day", tag: "Behind the Scenes" },
];

export const videos = [
  { src: cityVideo.url, poster: cityPoster, title: "Neon Nights", tag: "Short Film" },
  { src: coffeeVideo.url, poster: coffeePoster, title: "Pour", tag: "Commercial" },
  { src: coffeeVideo.url, poster: coffeePoster, title: "Morning Ritual", tag: "Reel" },
  { src: cityVideo.url, poster: cityPoster, title: "City Pulse", tag: "Music Video" },
];

export const logos = [
  { src: noir, name: "Noir" },
  { src: pulse, name: "Pulse" },
  { src: vela, name: "Vela" },
  { src: apex, name: "Apex" },
  { src: orbit, name: "Orbit" },
  { src: crumb, name: "Crumb" },
];

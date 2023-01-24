import * as KUTE from "kute.js";
tween = KUTE.fromTo(
  "#blob1",
  { path: "#blob1" },
  { path: "#blob2" },
  { duration: 1000, repeat: 99, yoyo: true }
);
tween.start();

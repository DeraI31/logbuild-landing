export const DARK_GREEN = '#2d4a1e';
export const LIME = '#7cb342';
export const WHITE = '#ffffff';
export const FADE_FRAMES = 20;

export const DURATIONS = {
  logoIntro: 90,   // 3s
  hook: 150,       // 5s
  problem: 300,    // 10s
  solution: 150,   // 5s
  demo1: 600,      // 20s
  demo2: 600,      // 20s
  cta: 270,        // 9s
  logoOutro: 90,   // 3s
} as const;

export const TOTAL_FRAMES = Object.values(DURATIONS).reduce((a, b) => a + b, 0); // 2250

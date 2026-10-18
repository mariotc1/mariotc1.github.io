export const motionTokens = {
  duration: {
    fast: 0.15,
    normal: 0.35,
    slow: 0.65,
  },
  ease: {
    standard: [0.4, 0, 0.2, 1] as const,
    emphasized: [0.2, 0, 0, 1] as const,
    spring: [0.34, 1.4, 0.64, 1] as const,
  },
};

export const revealTransition = {
  duration: motionTokens.duration.slow,
  ease: motionTokens.ease.emphasized,
};

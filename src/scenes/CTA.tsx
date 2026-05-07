import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { DARK_GREEN, FADE_FRAMES, LIME, WHITE } from '../constants';
import { dmSans, spaceMono } from '../fonts';

export const CTA = ({ durationInFrames }: { durationInFrames: number }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const containerOpacity = interpolate(
    frame,
    [0, FADE_FRAMES, durationInFrames - FADE_FRAMES, durationInFrames],
    [0, 1, 1, 0],
    { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' },
  );

  const line1Progress = spring({ frame: frame - 20, fps, config: { damping: 25, stiffness: 60 } });
  const line2Progress = spring({ frame: frame - 80, fps, config: { damping: 25, stiffness: 60 } });
  const line3Progress = spring({ frame: frame - 140, fps, config: { damping: 25, stiffness: 60 } });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: DARK_GREEN,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap: 48,
        padding: '0 100px',
        opacity: containerOpacity,
      }}
    >
      <div
        style={{
          fontFamily: spaceMono,
          color: WHITE,
          fontSize: 34,
          textAlign: 'center',
          lineHeight: 1.6,
          opacity: line1Progress,
          transform: `translateY(${interpolate(line1Progress, [0, 1], [30, 0])}px)`,
        }}
      >
        No new apps. No training. No behaviour change.
      </div>
      <div
        style={{
          fontFamily: spaceMono,
          color: LIME,
          fontSize: 64,
          fontWeight: 700,
          letterSpacing: -1,
          opacity: line2Progress,
          transform: `scale(${interpolate(line2Progress, [0, 1], [0.88, 1])})`,
        }}
      >
        Book a demo
      </div>
      <div
        style={{
          fontFamily: dmSans,
          color: WHITE,
          fontSize: 28,
          letterSpacing: 1,
          opacity: line3Progress,
          transform: `translateY(${interpolate(line3Progress, [0, 1], [20, 0])}px)`,
        }}
      >
        hello@log-build.co.uk
      </div>
    </AbsoluteFill>
  );
};

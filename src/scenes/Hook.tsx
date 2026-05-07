import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { DARK_GREEN, FADE_FRAMES, LIME, WHITE } from '../constants';
import { spaceMono } from '../fonts';

export const Hook = ({ durationInFrames }: { durationInFrames: number }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const containerOpacity = interpolate(
    frame,
    [0, FADE_FRAMES, durationInFrames - FADE_FRAMES, durationInFrames],
    [0, 1, 1, 0],
    { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' },
  );

  const minutesProgress = spring({
    frame: frame - 15,
    fps,
    config: { damping: 25, stiffness: 70 },
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: DARK_GREEN,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap: 24,
        padding: '0 100px',
        opacity: containerOpacity,
      }}
    >
      <div
        style={{
          fontFamily: spaceMono,
          color: WHITE,
          fontSize: 38,
          textAlign: 'center',
          lineHeight: 1.4,
        }}
      >
        Site managers spend
      </div>
      <div
        style={{
          fontFamily: spaceMono,
          color: LIME,
          fontSize: 100,
          fontWeight: 700,
          lineHeight: 1,
          opacity: minutesProgress,
          transform: `scale(${interpolate(minutesProgress, [0, 1], [0.85, 1])})`,
        }}
      >
        45 minutes a day
      </div>
      <div
        style={{
          fontFamily: spaceMono,
          color: WHITE,
          fontSize: 38,
          textAlign: 'center',
          lineHeight: 1.4,
        }}
      >
        writing reports
      </div>
    </AbsoluteFill>
  );
};

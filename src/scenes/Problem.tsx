import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { DARK_GREEN, FADE_FRAMES, LIME, WHITE } from '../constants';
import { spaceMono } from '../fonts';

const LINES = [
  { text: 'Messy notes.', delay: 30, color: WHITE, size: 52, weight: 400 },
  { text: 'Typed up every evening.', delay: 110, color: WHITE, size: 52, weight: 400 },
  { text: 'The same format. Every. Single. Day.', delay: 190, color: LIME, size: 46, weight: 700 },
];

export const Problem = ({ durationInFrames }: { durationInFrames: number }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const containerOpacity = interpolate(
    frame,
    [0, FADE_FRAMES, durationInFrames - FADE_FRAMES, durationInFrames],
    [0, 1, 1, 0],
    { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' },
  );

  return (
    <AbsoluteFill
      style={{
        backgroundColor: DARK_GREEN,
        justifyContent: 'center',
        alignItems: 'flex-start',
        flexDirection: 'column',
        gap: 48,
        padding: '0 120px',
        opacity: containerOpacity,
      }}
    >
      {LINES.map((line, i) => {
        const progress = spring({
          frame: frame - line.delay,
          fps,
          config: { damping: 20, stiffness: 50 },
        });
        return (
          <div
            key={i}
            style={{
              fontFamily: spaceMono,
              color: line.color,
              fontSize: line.size,
              fontWeight: line.weight,
              lineHeight: 1.3,
              opacity: progress,
              transform: `translateY(${interpolate(progress, [0, 1], [40, 0])}px)`,
            }}
          >
            {line.text}
          </div>
        );
      })}
    </AbsoluteFill>
  );
};

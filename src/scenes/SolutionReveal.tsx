import { AbsoluteFill, Img, interpolate, spring, staticFile, useCurrentFrame, useVideoConfig } from 'remotion';
import { DARK_GREEN, FADE_FRAMES, LIME, WHITE } from '../constants';
import { dmSans, spaceMono } from '../fonts';

export const SolutionReveal = ({ durationInFrames }: { durationInFrames: number }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const containerOpacity = interpolate(
    frame,
    [0, FADE_FRAMES, durationInFrames - FADE_FRAMES, durationInFrames],
    [0, 1, 1, 0],
    { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' },
  );

  const logoProgress = spring({ frame, fps, config: { damping: 28, stiffness: 80 } });
  const questionProgress = spring({ frame: frame - 25, fps, config: { damping: 25, stiffness: 60 } });
  const taglineProgress = spring({ frame: frame - 65, fps, config: { damping: 25, stiffness: 60 } });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: DARK_GREEN,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap: 48,
        opacity: containerOpacity,
      }}
    >
      <Img
        src={staticFile('Logbuild_logo.png')}
        style={{
          width: 320,
          opacity: logoProgress,
          transform: `scale(${interpolate(logoProgress, [0, 1], [0.85, 1])})`,
        }}
      />
      <div
        style={{
          fontFamily: spaceMono,
          color: WHITE,
          fontSize: 40,
          textAlign: 'center',
          maxWidth: 800,
          lineHeight: 1.4,
          opacity: questionProgress,
          transform: `translateY(${interpolate(questionProgress, [0, 1], [24, 0])}px)`,
        }}
      >
        What if it happened automatically?
      </div>
      <div
        style={{
          fontFamily: dmSans,
          color: LIME,
          fontSize: 30,
          textAlign: 'center',
          letterSpacing: 2,
          fontWeight: 300,
          opacity: taglineProgress,
          transform: `translateY(${interpolate(taglineProgress, [0, 1], [20, 0])}px)`,
        }}
      >
        Site reports, built automatically.
      </div>
    </AbsoluteFill>
  );
};

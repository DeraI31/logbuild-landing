import { AbsoluteFill, Img, interpolate, staticFile, useCurrentFrame } from 'remotion';
import { DARK_GREEN, FADE_FRAMES, LIME } from '../constants';
import { dmSans } from '../fonts';

export const LogoOutro = ({ durationInFrames }: { durationInFrames: number }) => {
  const frame = useCurrentFrame();

  const opacity = interpolate(
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
        alignItems: 'center',
        flexDirection: 'column',
        gap: 28,
        opacity,
      }}
    >
      <Img src={staticFile('Logbuild_logo.png')} style={{ width: '65%', mixBlendMode: 'lighten' }} />
      <div
        style={{
          fontFamily: dmSans,
          color: LIME,
          fontSize: 22,
          letterSpacing: 4,
          fontWeight: 300,
          textTransform: 'uppercase',
        }}
      >
        log-build.co.uk
      </div>
    </AbsoluteFill>
  );
};

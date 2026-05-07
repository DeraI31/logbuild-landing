import { AbsoluteFill, Img, interpolate, staticFile, useCurrentFrame } from 'remotion';
import { DARK_GREEN, FADE_FRAMES } from '../constants';

export const LogoIntro = ({ durationInFrames }: { durationInFrames: number }) => {
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
        opacity,
      }}
    >
      <Img src={staticFile('Logbuild_logo.png')} style={{ width: '65%', mixBlendMode: 'lighten' }} />
    </AbsoluteFill>
  );
};

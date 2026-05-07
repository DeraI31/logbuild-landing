import { AbsoluteFill, Video, interpolate, staticFile, useCurrentFrame } from 'remotion';
import { DARK_GREEN, FADE_FRAMES, WHITE } from '../constants';
import { dmSans } from '../fonts';

export const DemoPart2 = ({ durationInFrames }: { durationInFrames: number }) => {
  const frame = useCurrentFrame();

  const overlayOpacity = interpolate(
    frame,
    [0, FADE_FRAMES, durationInFrames - FADE_FRAMES, durationInFrames],
    [1, 0, 0, 1],
    { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' },
  );

  const textOpacity = interpolate(frame, [40, 60], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill style={{ backgroundColor: DARK_GREEN }}>
      <Video
        src={staticFile('Logbuild.2.mov')}
        style={{ width: '100%', height: '100%', objectFit: 'contain' }}
      />
      <AbsoluteFill style={{ justifyContent: 'flex-end', alignItems: 'stretch', opacity: textOpacity }}>
        <div
          style={{
            background:
              'linear-gradient(to top, rgba(45,74,30,0.96) 0%, rgba(45,74,30,0.6) 60%, transparent 100%)',
            padding: '60px 60px 36px',
          }}
        >
          <p
            style={{
              fontFamily: dmSans,
              color: WHITE,
              fontSize: 28,
              fontWeight: 500,
              textAlign: 'center',
              margin: 0,
              letterSpacing: 0.5,
            }}
          >
            Professional report arrives automatically
          </p>
        </div>
      </AbsoluteFill>
      <AbsoluteFill style={{ backgroundColor: DARK_GREEN, opacity: overlayOpacity }} />
    </AbsoluteFill>
  );
};

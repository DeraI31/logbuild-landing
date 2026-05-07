import { AbsoluteFill, Series, useVideoConfig } from 'remotion';
import { DARK_GREEN, DURATIONS } from './constants';
import { LogoIntro } from './scenes/LogoIntro';
import { Hook } from './scenes/Hook';
import { Problem } from './scenes/Problem';
import { SolutionReveal } from './scenes/SolutionReveal';
import { DemoPart1 } from './scenes/DemoPart1';
import { DemoPart2 } from './scenes/DemoPart2';
import { CTA } from './scenes/CTA';
import { LogoOutro } from './scenes/LogoOutro';

const BASE_WIDTH = 1280;
const BASE_HEIGHT = 720;

export const LogBuildDemo = () => {
  const { width } = useVideoConfig();
  const scale = width / BASE_WIDTH;

  return (
    <AbsoluteFill style={{ backgroundColor: DARK_GREEN }}>
      {/* Scaled wrapper: all scenes are authored at 1280×720 and scale to any output resolution */}
      <div
        style={{
          position: 'absolute',
          width: BASE_WIDTH,
          height: BASE_HEIGHT,
          top: '50%',
          left: '50%',
          transform: `translate(-50%, -50%) scale(${scale})`,
        }}
      >
        <Series>
          <Series.Sequence durationInFrames={DURATIONS.logoIntro}>
            <LogoIntro durationInFrames={DURATIONS.logoIntro} />
          </Series.Sequence>
          <Series.Sequence durationInFrames={DURATIONS.hook}>
            <Hook durationInFrames={DURATIONS.hook} />
          </Series.Sequence>
          <Series.Sequence durationInFrames={DURATIONS.problem}>
            <Problem durationInFrames={DURATIONS.problem} />
          </Series.Sequence>
          <Series.Sequence durationInFrames={DURATIONS.solution}>
            <SolutionReveal durationInFrames={DURATIONS.solution} />
          </Series.Sequence>
          <Series.Sequence durationInFrames={DURATIONS.demo1}>
            <DemoPart1 durationInFrames={DURATIONS.demo1} />
          </Series.Sequence>
          <Series.Sequence durationInFrames={DURATIONS.demo2}>
            <DemoPart2 durationInFrames={DURATIONS.demo2} />
          </Series.Sequence>
          <Series.Sequence durationInFrames={DURATIONS.cta}>
            <CTA durationInFrames={DURATIONS.cta} />
          </Series.Sequence>
          <Series.Sequence durationInFrames={DURATIONS.logoOutro}>
            <LogoOutro durationInFrames={DURATIONS.logoOutro} />
          </Series.Sequence>
        </Series>
      </div>
    </AbsoluteFill>
  );
};

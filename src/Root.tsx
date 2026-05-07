import { Composition } from 'remotion';
import { LogBuildDemo } from './Composition';
import { TOTAL_FRAMES } from './constants';

export const RemotionRoot: React.FC = () => {
  return (
    <Composition
      id="LogBuildDemo"
      component={LogBuildDemo}
      durationInFrames={TOTAL_FRAMES}
      fps={30}
      width={1280}
      height={720}
    />
  );
};

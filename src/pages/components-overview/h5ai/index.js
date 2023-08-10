// material-ui
import { styled } from '@mui/material/styles';

// project import
import ComponentSkeleton from '../ComponentSkeleton';
import MainCard from 'components/MainCard';

// styles
const IFrameWrapper = styled('iframe')(() => ({
  height: 'calc(100vh - 210px)',
  border: 'none'
}));

// ============================|| MINECRAFT ||============================ //

const H5ai = () => (
  <ComponentSkeleton>
    <MainCard title="hoshinova" contentSX={{ p: 0.5 }}>
      <IFrameWrapper
        title="hoshinova"
        allowFullScreen
        webkitAllowFullScreen
        mozAllowFullScreen
        width="100%"
        src={`${process.env.REACT_APP_DOMAIN}/streams`}
      />
    </MainCard>
    <MainCard title="Videos" contentSX={{ p: 0.5 }}>
      <IFrameWrapper
        title="Videos"
        allowFullScreen
        webkitAllowFullScreen
        mozAllowFullScreen
        width="100%"
        src={`${process.env.REACT_APP_DOMAIN}/videos`}
      />
    </MainCard>
    <MainCard title="Share" contentSX={{ p: 0.5 }}>
      <IFrameWrapper
        title="Share"
        allowFullScreen
        webkitAllowFullScreen
        mozAllowFullScreen
        width="100%"
        src={`${process.env.REACT_APP_DOMAIN}/share`}
      />
    </MainCard>
    <MainCard title="Minecraft" contentSX={{ p: 0.5 }}>
      <IFrameWrapper
        title="Minecraft"
        allowFullScreen
        webkitAllowFullScreen
        mozAllowFullScreen
        width="100%"
        src={`${process.env.REACT_APP_DOMAIN}/minecraft`}
      />
    </MainCard>
    <MainCard title="Vtubers" contentSX={{ p: 0.5 }}>
      <IFrameWrapper
        title="Vtubers"
        allowFullScreen
        webkitAllowFullScreen
        mozAllowFullScreen
        width="100%"
        src={`${process.env.REACT_APP_DOMAIN}/vtubers`}
      />
    </MainCard>
    <MainCard title="Twitter Spaces" contentSX={{ p: 0.5 }}>
      <IFrameWrapper
        title="Twitter Spaces"
        allowFullScreen
        webkitAllowFullScreen
        mozAllowFullScreen
        width="100%"
        src={`${process.env.REACT_APP_DOMAIN}/twspaces`}
      />
    </MainCard>
    <MainCard title="College" contentSX={{ p: 0.5 }}>
      <IFrameWrapper
        title="College"
        allowFullScreen
        webkitAllowFullScreen
        mozAllowFullScreen
        width="100%"
        src={`${process.env.REACT_APP_DOMAIN}/college`}
      />
    </MainCard>
  </ComponentSkeleton>
);

export default H5ai;

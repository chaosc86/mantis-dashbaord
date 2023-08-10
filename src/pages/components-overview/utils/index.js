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

const Utils = () => (
  <ComponentSkeleton>
    <MainCard title="hoshinova" contentSX={{ p: 0.5 }}>
      <IFrameWrapper
        title="hoshinova"
        allowFullScreen
        webkitAllowFullScreen
        mozAllowFullScreen
        width="100%"
        src={`${process.env.REACT_APP_DOMAIN}/hoshinova`}
      />
    </MainCard>
    <MainCard title="PaperMC 1.20.1" contentSX={{ p: 0.5 }}>
      <IFrameWrapper
        title="Pl3xMap"
        allowFullScreen
        webkitAllowFullScreen
        mozAllowFullScreen
        width="100%"
        src={`${process.env.REACT_APP_DOMAIN}/minecraft/1.20.1/world`}
      />
    </MainCard>
    <MainCard title="ChatGPT" contentSX={{ p: 0.5 }}>
      <IFrameWrapper
        title="ChatGPT"
        allowFullScreen
        webkitAllowFullScreen
        mozAllowFullScreen
        width="100%"
        src={`${process.env.REACT_APP_DOMAIN}/chatgpt`}
      />
    </MainCard>
    <MainCard title="Alist" contentSX={{ p: 0.5 }}>
      <IFrameWrapper
        title="Alist"
        allowFullScreen
        webkitAllowFullScreen
        mozAllowFullScreen
        width="100%"
        src={`${process.env.REACT_APP_DOMAIN}/alist`}
      />
    </MainCard>
    <MainCard title="Wifi Card" contentSX={{ p: 0.5 }}>
      <IFrameWrapper
        title="Wifi Card"
        allowfullscreen
        webtitallowfullscreen
        mozallowfullscreen
        width="100%"
        src={`${process.env.REACT_APP_DOMAIN}/wifi`}
      />
    </MainCard>
    <MainCard title="Gohttpserver" contentSX={{ p: 0.5 }}>
      <IFrameWrapper
        title="gohttpserver"
        allowfullscreen
        webtitallowfullscreen
        mozallowfullscreen
        width="100%"
        src={`${process.env.REACT_APP_DOMAIN}/files`}
      />
    </MainCard>
  </ComponentSkeleton>
);

export default Utils;

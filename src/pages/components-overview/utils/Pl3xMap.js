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

// ============================|| ANT ICONS ||============================ //
/*
const AntIcons = () => (
  <ComponentSkeleton>
    <MainCard title="Ant Icons">
      <IFrameWrapper title="Ant Icon" width="100%" src="https://ant.design/components/icon/" />/
    </MainCard>
  </ComponentSkeleton>
);
*/
const Pl3xMap = () => (
  <ComponentSkeleton>
    <MainCard title="PaperMC 1.20.1" contentSX={{ p: 0.5 }}>
      <IFrameWrapper title="Pl3xMap" width="100%" src={`${process.env.REACT_APP_DOMAIN}/minecraft/1.20.1/world`} />
    </MainCard>
  </ComponentSkeleton>
);

export default Pl3xMap;

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

// ============================|| FILE SERVER ||============================ //
const Wifi = () => (
  <ComponentSkeleton>
    <MainCard title="Wifi Card" contentSX={{ p: 0.5 }}>
      <IFrameWrapper title="Wifi Card" width="100%" src={`${process.env.REACT_APP_DOMAIN}/wifi`} />
    </MainCard>
  </ComponentSkeleton>
);

export default Wifi;

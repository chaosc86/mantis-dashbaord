// material-ui
import { styled } from '@mui/material/styles';

// project import
import MainCard from 'components/MainCard';
import ComponentSkeleton from '../components-overview/ComponentSkeleton';
// styles
const IFrameWrapper = styled('iframe')(() => ({
  height: 'calc(100vh - 210px)',
  border: 'none'
}));

// ============================|| COLLEGE ||============================ //

const Services = () => (
  <ComponentSkeleton>
    <MainCard title="Uptime Kuma">
      <IFrameWrapper
        title="Uptime Kuma"
        allowFullScreen
        webkitAllowFullScreen
        mozAllowFullScreen
        width="100%"
        src={`${process.env.REACT_APP_DOMAIN}/uptime`}
      />
    </MainCard>
    <MainCard title="Ansible Semaphore">
      <IFrameWrapper
        allowFullScreen
        webkitAllowFullScreen
        mozAllowFullScreen
        width="100%"
        src={`${process.env.REACT_APP_DOMAIN}/ansible`}
      />
    </MainCard>
    <MainCard title="System">
      <IFrameWrapper
        title="System"
        allowFullScreen
        webkitAllowFullScreen
        mozAllowFullScreen
        width="100%"
        src={`${process.env.REACT_APP_DOMAIN}/system`}
      />
    </MainCard>
  </ComponentSkeleton>
);

export default Services;

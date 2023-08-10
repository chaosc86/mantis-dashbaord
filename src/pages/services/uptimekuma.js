// material-ui
import { styled } from '@mui/material/styles';

// project import
import MainCard from 'components/MainCard';

// styles
const IFrameWrapper = styled('iframe')(() => ({
  height: 'calc(100vh - 210px)',
  border: 'none'
}));

// ============================|| COLLEGE ||============================ //

const UptimeKuma = () => (
  <MainCard>
    <IFrameWrapper
      title="Uptime Kuma"
      allowFullScreen
      webkitAllowFullScreen
      mozAllowFullScreen
      width="100%"
      src={`${process.env.REACT_APP_DOMAIN}/uptime`}
    />
  </MainCard>
);

export default UptimeKuma;

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

// ============================|| COLLEGE ||============================ //

const hoshinova = () => (
  <ComponentSkeleton>
    <MainCard contentSX={{ p: 0.5 }}>
      <IFrameWrapper
        title="hoshinova"
        allowFullScreen
        webkitAllowFullScreen
        mozAllowFullScreen
        width="100%"
        src={`${process.env.REACT_APP_DOMAIN}/streams`}
      />
    </MainCard>
  </ComponentSkeleton>
);

export default hoshinova;

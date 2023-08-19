// material-ui
import {
  Avatar,
  AvatarGroup,
  Button,
  Grid,
  Stack,
  Typography
  //Card
} from '@mui/material';
import { useTranslation } from 'react-i18next';

import MainCard from 'components/MainCard';

// assets
import ChatGPT from '../../assets/images/icons/chatgpt.png';
import hoshinova from '../../assets/images/icons/youtube.png';
import Pl3xMap from '../../assets/images/icons/pl3xmap.png';
import Alist from '../../assets/images/icons/alist.png';
import Wifi from '../../assets/images/icons/wifiqrcode.png';
import GoHttpServer from '../../assets/images/icons/golang.png';
import _h5ai from '../../assets/images/icons/_h5ai.png';
import Uptimekuma from '../../assets/images/icons/uptimekuma.png';
import AnsibleSemaphore from '../../assets/images/icons/AnsibleSemaphore.png';
import Raspberrypi from '../../assets/images/icons/raspberrypi.png';

// ==============================|| DASHBOARD - DEFAULT ||============================== //
const DashboardDefault = () => {
  const { t } = useTranslation();
  return (
    <Grid container rowSpacing={4.5} columnSpacing={2.75}>
      {/* row 1 */}
      <Grid item xs={12} sx={{ mb: -2.25 }}>
        <Typography variant="h5">{t('Dashboard Portal')}</Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <MainCard>
          <Stack spacing={3}>
            <Grid container justifyContent="space-between" alignItems="center">
              <Grid item>
                <Stack>
                  <Typography variant="h5" noWrap>
                    {t('Utils')}
                  </Typography>
                  <Typography variant="caption" color="secondary" noWrap>
                    {t('Apps that frequently used.')}
                  </Typography>
                </Stack>
              </Grid>
              <Grid item>
                <AvatarGroup sx={{ '& .MuiAvatar-root': { width: 32, height: 32 } }}>
                  <Avatar alt="hoshinova" src={hoshinova} />
                  <Avatar alt="ChatGPT" src={ChatGPT} />
                  <Avatar alt="Pl3xMap" src={Pl3xMap} />
                  <Avatar alt="Alist" src={Alist} />
                  <Avatar alt="Wifi Card" src={Wifi} />
                  <Avatar alt="GoHttpServer" src={GoHttpServer} />
                </AvatarGroup>
              </Grid>
            </Grid>
            <Button
              href={`${process.env.REACT_APP_DOMAIN}/hoshinova`}
              variant="contained"
              target="_blank"
              sx={{ textTransform: 'capitalize' }}
            >
              <Avatar alt="hoshinova" src={hoshinova} sx={{ mr: 2 }} />
              {t('hoshinova')}
            </Button>
            <Button
              href={`${process.env.REACT_APP_DOMAIN}/chatgpt`}
              target="_blank"
              variant="contained"
              sx={{ textTransform: 'capitalize' }}
            >
              <Avatar alt="ChatGPT" src={ChatGPT} sx={{ mr: 2 }} />
              {t('ChatGPT')}
            </Button>
            <Button
              href={`${process.env.REACT_APP_DOMAIN}/minecraft/1.20.1/world`}
              variant="contained"
              target="_blank"
              sx={{ textTransform: 'capitalize' }}
            >
              <Avatar alt="Pl3xMap" src={Pl3xMap} sx={{ mr: 2 }} />
              {t('Pl3xMap')}
            </Button>
            <Button href={`${process.env.REACT_APP_DOMAIN}/alist`} target="_blank" variant="contained" sx={{ textTransform: 'capitalize' }}>
              <Avatar alt="Alist" src={Alist} sx={{ mr: 2 }} />
              {t('Alist')}
            </Button>

            <Button href={`${process.env.REACT_APP_DOMAIN}/wifi`} variant="contained" target="_blank" sx={{ textTransform: 'capitalize' }}>
              <Avatar alt="Wifi Card" src={Wifi} sx={{ mr: 2 }} />
              {t('Wifi Card')}
            </Button>

            <Button href={`${process.env.REACT_APP_DOMAIN}/files`} variant="contained" target="_blank" sx={{ textTransform: 'capitalize' }}>
              <Avatar alt="GoHttpServer" src={GoHttpServer} sx={{ mr: 2 }} />
              {t('Gohttpserver')}
            </Button>
          </Stack>
        </MainCard>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <MainCard>
          <Stack spacing={3}>
            <Grid container justifyContent="space-between" alignItems="center">
              <Grid item>
                <Stack>
                  <Typography variant="h5" noWrap>
                    {t('_h5ai')}
                  </Typography>
                  <Typography variant="caption" color="secondary" noWrap>
                    {t('A static file server.')}
                  </Typography>
                </Stack>
              </Grid>
              <Grid item>
                <AvatarGroup sx={{ '& .MuiAvatar-root': { width: 32, height: 32 } }}>
                  <Avatar alt="_h5ai" src={_h5ai} />
                </AvatarGroup>
              </Grid>
            </Grid>
            <Button
              href={`${process.env.REACT_APP_DOMAIN}/streams`}
              variant="contained"
              target="_blank"
              sx={{ textTransform: 'capitalize' }}
            >
              {t('hoshinova Vods Page')}
            </Button>
            <Button
              href={`${process.env.REACT_APP_DOMAIN}/videos`}
              variant="contained"
              target="_blank"
              sx={{ textTransform: 'capitalize' }}
            >
              {t('Video Page')}
            </Button>
            <Button href={`${process.env.REACT_APP_DOMAIN}/share`} variant="contained" target="_blank" sx={{ textTransform: 'capitalize' }}>
              {t('Share Page')}
            </Button>
            <Button
              href={`${process.env.REACT_APP_DOMAIN}/minecraft`}
              variant="contained"
              target="_blank"
              sx={{ textTransform: 'capitalize' }}
            >
              {t('Minecraft Page')}
            </Button>
            <Button
              href={`${process.env.REACT_APP_DOMAIN}/college`}
              variant="contained"
              target="_blank"
              sx={{ textTransform: 'capitalize' }}
            >
              {t('College Page')}
            </Button>
            <Button
              href={`${process.env.REACT_APP_DOMAIN}/twspaces`}
              variant="contained"
              target="_blank"
              sx={{ textTransform: 'capitalize' }}
            >
              {t('Twitter Spaces Page')}
            </Button>
            <Button
              href={`${process.env.REACT_APP_DOMAIN}/vtubers`}
              variant="contained"
              target="_blank"
              sx={{ textTransform: 'capitalize' }}
            >
              {t('Vtuber Voice Packs Page')}
            </Button>
          </Stack>
        </MainCard>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <MainCard>
          <Stack spacing={3}>
            <Grid container justifyContent="space-between" alignItems="center">
              <Grid item>
                <Stack>
                  <Typography variant="h5" noWrap>
                    {t('Services')}
                  </Typography>
                  <Typography variant="caption" color="secondary" noWrap>
                    {t('System Management Apps.')}
                  </Typography>
                </Stack>
              </Grid>
              <Grid item>
                <AvatarGroup sx={{ '& .MuiAvatar-root': { width: 32, height: 32 } }}>
                  <Avatar alt="Uptimekuma" src={Uptimekuma} />
                  <Avatar alt="AnsibleSemaphore" src={AnsibleSemaphore} />
                  <Avatar alt="Raspberrypi" src={Raspberrypi} />
                </AvatarGroup>
              </Grid>
            </Grid>
            <Button
              href={`${process.env.REACT_APP_DOMAIN}/uptime`}
              variant="contained"
              target="_blank"
              sx={{ textTransform: 'capitalize' }}
            >
              <Avatar alt="Uptime kuma" src={Uptimekuma} sx={{ mr: 2 }} />
              {t('Uptime Kuma')}
            </Button>
            <Button
              href={`${process.env.REACT_APP_DOMAIN}/ansible`}
              variant="contained"
              target="_blank"
              sx={{ textTransform: 'capitalize' }}
            >
              <Avatar alt="Ansible Semaphore" src={AnsibleSemaphore} sx={{ mr: 2 }} />
              {t('Ansible Semaphore')}
            </Button>
            <Button
              href={`${process.env.REACT_APP_DOMAIN}/system`}
              variant="contained"
              target="_blank"
              sx={{ textTransform: 'capitalize' }}
            >
              <Avatar alt="RaspberryPI" src={Raspberrypi} sx={{ mr: 2 }} />
              {t('System')}
            </Button>
          </Stack>
        </MainCard>
      </Grid>
      <Grid item md={8} sx={{ display: { sm: 'none', md: 'block', lg: 'none' } }} />
    </Grid>
  );
};

export default DashboardDefault;

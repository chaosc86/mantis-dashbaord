import { Avatar } from '@mui/material';

// assets
import _h5ai from '../assets/images/icons/_h5ai.png';

// ==============================|| MENU ITEMS - SAMPLE PAGE & DOCUMENTATION ||============================== //

const support = {
  id: '_h5ai',
  title: '_h5ai',
  url: '/_h5ai',
  type: 'group',
  children: [
    {
      id: 'hoshinova-vods',
      title: 'hoshinova Vods',
      type: 'item',
      url: '/_h5ai/ytarchive',
      icontype: 'tsx',
      icon: <Avatar alt="_h5ai" src={_h5ai} sx={{ mr: 2 }} />
      //external: true,
      //target: true
    },
    {
      id: 'videos',
      title: 'Video Page',
      type: 'item',
      url: '/_h5ai/videos',
      icontype: 'tsx',
      icon: <Avatar alt="_h5ai" src={_h5ai} sx={{ mr: 2 }} />
      //external: true,
      //target: true
    },
    {
      id: 'share',
      title: 'Share Page',
      type: 'item',
      url: '/_h5ai/share',
      icontype: 'tsx',
      icon: <Avatar alt="_h5ai" src={_h5ai} sx={{ mr: 2 }} />
    },
    {
      id: 'minecraft',
      title: 'Minecraft Page',
      type: 'item',
      url: '/_h5ai/minecraft',
      icontype: 'tsx',
      icon: <Avatar alt="_h5ai" src={_h5ai} sx={{ mr: 2 }} />
    },
    {
      id: 'college',
      title: 'College Page',
      type: 'item',
      url: '/_h5ai/college',
      icontype: 'tsx',
      icon: <Avatar alt="_h5ai" src={_h5ai} sx={{ mr: 2 }} />
    },
    {
      id: 'twspaces',
      title: 'Twitter Spaces Page',
      type: 'item',
      url: '/_h5ai/twspaces',
      icontype: 'tsx',
      icon: <Avatar alt="_h5ai" src={_h5ai} sx={{ mr: 2 }} />
    },
    {
      id: 'vtubers',
      title: 'Vtuber Voice Packs Page',
      type: 'item',
      url: '/_h5ai/vtubers',
      icontype: 'tsx',
      icon: <Avatar alt="_h5ai" src={_h5ai} sx={{ mr: 2 }} />
    }
  ]
};

export default support;

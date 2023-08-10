import { Avatar } from '@mui/material';

// assets
import ChatGPT from '../assets/images/icons/chatgpt.png';
import Ytarchive from '../assets/images/icons/youtube.png';
import Pl3xMap from '../assets/images/icons/pl3xmap.png';
import Alist from '../assets/images/icons/alist.png';
import Wifi from '../assets/images/icons/wifiqrcode.png';
import GoHttpServer from '../assets/images/icons/golang.png';

// ==============================|| MENU ITEMS - UTILITIES ||============================== //

const utilities = {
  id: 'utilities',
  title: 'Utilities',
  url: '/utils',
  type: 'group',
  children: [
    {
      id: 'hoshinova',
      title: 'hoshinova',
      type: 'item',
      url: '/utils/hoshinova',
      icontype: 'tsx',
      icon: <Avatar alt="Ytarchive" src={Ytarchive} sx={{ mr: 2 }} />,
      breadcrumbs: false
    },
    {
      id: 'Pl3xMap',
      title: 'Minecraft Map',
      type: 'item',
      url: '/utils/Pl3xMap',
      icontype: 'tsx',
      icon: <Avatar alt="Pl3xMap" src={Pl3xMap} sx={{ mr: 2 }} />,
      breadcrumbs: false
    },
    {
      id: 'FakeGPT',
      title: 'Pandora ChatGPT',
      type: 'item',
      url: '/utils/chatgpt',
      icontype: 'tsx',
      icon: <Avatar alt="ChatGPT" src={ChatGPT} sx={{ mr: 2 }} />,
      breadcrumbs: false
    },
    {
      id: 'Alist',
      title: 'Alist',
      type: 'item',
      url: '/utils/alist',
      icontype: 'tsx',
      icon: <Avatar alt="Alist" src={Alist} sx={{ mr: 2 }} />,
      breadcrumbs: false
    },
    {
      id: 'Wifi-QrCode',
      title: 'Wifi Card',
      type: 'item',
      url: '/utils/wifi-qr-code',
      icontype: 'tsx',
      icon: <Avatar alt="_h5ai" src={Wifi} sx={{ mr: 2 }} />,
      breadcrumbs: false
    },
    {
      id: 'file-server',
      title: 'File Server',
      type: 'item',
      url: '/utils/gohttpserver',
      icontype: 'tsx',
      icon: <Avatar alt="GoHttpServer" src={GoHttpServer} sx={{ mr: 2 }} />,
      breadcrumbs: false
    }
  ]
};

export default utilities;

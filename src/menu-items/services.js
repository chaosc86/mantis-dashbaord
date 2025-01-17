import { Avatar } from '@mui/material';

// assets
import Uptimekuma from '../assets/images/icons/uptimekuma.png';
import Raspberrypi from '../assets/images/icons/raspberrypi.png';
import AnsibleSemaphore from '../assets/images/icons/AnsibleSemaphore.png';
// ==============================|| MENU ITEMS - SERVICES ||============================== //

const services = {
  id: 'services',
  title: 'Services',
  url: '/services',
  type: 'group',
  children: [
    {
      id: 'uptime-kuma',
      title: 'Uptime Kuma',
      type: 'item',
      url: '/services/uptime-kuma',
      icontype: 'tsx',
      icon: <Avatar alt="Uptimekuma" src={Uptimekuma} sx={{ mr: 2 }} />
    },
    {
      id: 'ansible',
      title: 'Ansible Semaphore',
      type: 'item',
      url: '/services/ansible',
      icontype: 'tsx',
      icon: <Avatar alt="_h5ai" src={AnsibleSemaphore} sx={{ mr: 2 }} />
    },
    {
      id: 'system',
      title: 'System',
      type: 'item',
      url: '/services/system',
      icontype: 'tsx',
      icon: <Avatar alt="Raspberrypi" src={Raspberrypi} sx={{ mr: 2 }} />
    }
  ]
};

export default services;

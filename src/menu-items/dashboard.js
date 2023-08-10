/*import { DashboardOutlined } from '@ant-design/icons';

// icons
const icons = {
  DashboardOutlined
};
*/
import { Avatar } from '@mui/material';

// assets
import Dashboard from '../assets/images/icons/panda.png';
// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const dashboard = {
  id: 'group-dashboard',
  title: 'Navigation',
  url: '/',
  type: 'group',
  children: [
    {
      id: 'dashboard',
      title: 'Dashboard',
      type: 'item',
      url: '/',
      icontype: 'tsx',
      icon: <Avatar alt="Dashboard" src={Dashboard} sx={{ mr: 2 }} />,
      breadcrumbs: false
    }
  ]
};

export default dashboard;

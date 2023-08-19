import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';

// render - dashboard
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard')));

// render - sample page
// const SamplePage = Loadable(lazy(() => import('pages/extra-pages/SamplePage')));

// render - utilities
const Utils = Loadable(lazy(() => import('pages/components-overview/utils')));
const Hoshinova = Loadable(lazy(() => import('pages/components-overview/utils/hoshinova')));
const GoHttpServer = Loadable(lazy(() => import('pages/components-overview/utils/FileServer')));
const Pl3xMap = Loadable(lazy(() => import('pages/components-overview/utils/Pl3xMap')));
const ChatGPT = Loadable(lazy(() => import('pages/components-overview/utils/ChatGPT')));
const Alist = Loadable(lazy(() => import('pages/components-overview/utils/Alist')));
const WifiCard = Loadable(lazy(() => import('pages/components-overview/utils/WifiQrcode')));

// render - _h5ai
const H5ai = Loadable(lazy(() => import('pages/components-overview/h5ai')));
const Hoshinova_vods = Loadable(lazy(() => import('pages/components-overview/h5ai/hoshinova')));
const Videos = Loadable(lazy(() => import('pages/components-overview/h5ai/videos')));
const Share = Loadable(lazy(() => import('pages/components-overview/h5ai/share')));
const Minecraft = Loadable(lazy(() => import('pages/components-overview/h5ai/minecraft')));
const College = Loadable(lazy(() => import('pages/components-overview/h5ai/college')));
const TwSpaces = Loadable(lazy(() => import('pages/components-overview/h5ai/twspaces')));
const Vtubers = Loadable(lazy(() => import('pages/components-overview/h5ai/vtubers')));

// render - services
const Services = Loadable(lazy(() => import('pages/services')));
const UptimeKuma = Loadable(lazy(() => import('pages/services/uptimekuma')));
const AnsibleSemaphore = Loadable(lazy(() => import('pages/services/ansiblesemaphore')));
const System = Loadable(lazy(() => import('pages/services/system')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <DashboardDefault />
    },
    /*{
      path: 'dashboard',
      element: <DashboardDefault />,
      children: [
        {
          path: 'default',
          element: <DashboardDefault />
        }
      ]
    },*/
    { path: 'utils', element: <Utils /> },
    {
      path: 'utils',
      children: [
        {
          path: 'hoshinova',
          element: <Hoshinova />
        },
        {
          path: 'alist',
          element: <Alist />
        },
        {
          path: 'chatgpt',
          element: <ChatGPT />
        },
        {
          path: 'gohttpserver',
          element: <GoHttpServer />
        },
        {
          path: 'wifi-qr-code',
          element: <WifiCard />
        },
        {
          path: 'Pl3xMap',
          element: <Pl3xMap />
        }
      ]
    },
    { path: '_h5ai', element: <H5ai /> },
    {
      path: '_h5ai',
      children: [
        {
          path: 'ytarchive',
          element: <Hoshinova_vods />
        },
        {
          path: 'videos',
          element: <Videos />
        },
        {
          path: 'share',
          element: <Share />
        },
        {
          path: 'minecraft',
          element: <Minecraft />
        },
        {
          path: 'college',
          element: <College />
        },
        {
          path: 'vtubers',
          element: <Vtubers />
        },
        {
          path: 'twspaces',
          element: <TwSpaces />
        }
      ]
    },
    { path: 'services', element: <Services /> },
    {
      path: 'services',
      children: [
        {
          path: 'uptime-kuma',
          element: <UptimeKuma />
        },
        {
          path: 'ansible',
          element: <AnsibleSemaphore />
        },

        {
          path: 'system',
          element: <System />
        }
      ]
    }
  ]
};

export default MainRoutes;

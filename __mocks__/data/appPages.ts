import { AppPage } from '../../src/declarations';
import { home, list } from 'ionicons/icons';

const appPages: AppPage[] = [
  {
    title: 'Menu Link To Home',
    url: '/home',
    icon: home,
  },
  {
    title: 'Menu Link To List',
    url: '/home/list',
    icon: list,
  },
];

export default appPages;

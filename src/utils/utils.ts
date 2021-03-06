import {
  americanFootball,
  basketball,
  beer,
  bluetooth,
  boat,
  build,
  flask,
  football,
  home,
  list,
  paperPlane,
  wifi,
} from 'ionicons/icons';

import { AppPage, Icon } from '../declarations';

export const icons: Icon[] = [
  { icon: flask, name: 'flask', id: 1 },
  { icon: wifi, name: 'wifi', id: 2 },
  { icon: beer, name: 'beer', id: 3 },
  { icon: football, name: 'football', id: 4 },
  { icon: basketball, name: 'basketball', id: 5 },
  { icon: paperPlane, name: 'paperPlane', id: 6 },
  { icon: americanFootball, name: 'americanFootball', id: 7 },
  { icon: boat, name: 'boat', id: 8 },
  { icon: bluetooth, name: 'bluetooth', id: 9 },
  { icon: build, name: 'build', id: 10 },
  { icon: flask, name: 'flask', id: 11 },
  { icon: wifi, name: 'wifi', id: 12 },
  { icon: beer, name: 'beer', id: 13 },
  { icon: football, name: 'football', id: 14 },
  { icon: basketball, name: 'basketball', id: 15 },
  { icon: paperPlane, name: 'paperPlane', id: 16 },
  { icon: americanFootball, name: 'americanFootball', id: 17 },
  { icon: boat, name: 'boat', id: 18 },
  { icon: bluetooth, name: 'bluetooth', id: 19 },
  { icon: build, name: 'build', id: 20 },
];

export const appPages: AppPage[] = [
  {
    title: 'Home',
    url: '/home',
    icon: home,
  },
  {
    title: 'List',
    url: '/home/list',
    icon: list,
  },
];

export const getIcons = (): Icon[] => icons;
export const getAppPages = (): AppPage[] => appPages;

export interface AppPage {
  url: string;
  icon: object;
  title: string;
}

export interface IIcon {
  name: string;
  id: number;
  icon: {
    ios: string;
    md: string;
  };
}

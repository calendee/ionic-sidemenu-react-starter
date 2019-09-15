/* istanbul ignore file */
export interface AppPage {
  url: string;
  icon: object;
  title: string;
}

export interface Icon {
  name: string;
  id: number;
  icon: {
    ios: string;
    md: string;
  };
}

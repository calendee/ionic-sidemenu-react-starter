import { getAppPages, getIcons, icons, appPages } from './utils';

describe('Utils', () => {
  it('loads appPages', () => {
    expect(getAppPages()).toEqual(appPages);
  });

  it('loads icons', () => {
    expect(getIcons()).toEqual(icons);
  });
});

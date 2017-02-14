import { YuArtePage } from './app.po';

describe('yu-arte App', function() {
  let page: YuArtePage;

  beforeEach(() => {
    page = new YuArtePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

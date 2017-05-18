import { NgxSiemaTestPage } from './app.po';

describe('ngx-siema-test App', () => {
  let page: NgxSiemaTestPage;

  beforeEach(() => {
    page = new NgxSiemaTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

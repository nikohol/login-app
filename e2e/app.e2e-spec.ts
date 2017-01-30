import { LogiAppnPage } from './app.po';

describe('logi-appn App', function() {
  let page: LogiAppnPage;

  beforeEach(() => {
    page = new LogiAppnPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

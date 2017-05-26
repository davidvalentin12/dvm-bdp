import { BDPBO3Page } from './app.po';

describe('bdpbo3 App', function() {
  let page: BDPBO3Page;

  beforeEach(() => {
    page = new BDPBO3Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

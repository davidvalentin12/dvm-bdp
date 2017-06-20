import { Bdpbo3Page } from './app.po';

describe('bdpbo3 App', function() {
  let page: Bdpbo3Page;

  beforeEach(() => {
    page = new Bdpbo3Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

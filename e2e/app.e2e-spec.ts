import { HindsV6Page } from './app.po';

describe('hinds-v6 App', function() {
  let page: HindsV6Page;

  beforeEach(() => {
    page = new HindsV6Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

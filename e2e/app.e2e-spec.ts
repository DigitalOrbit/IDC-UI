import { RCUIPage } from './app.po';

describe('rcui App', () => {
  let page: RCUIPage;

  beforeEach(() => {
    page = new RCUIPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to rcui!');
  });
});

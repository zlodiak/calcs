import { CalcsPage } from './app.po';

describe('calcs App', () => {
  let page: CalcsPage;

  beforeEach(() => {
    page = new CalcsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

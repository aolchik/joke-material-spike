import { JokeAppPage } from './app.po';

describe('joke-app App', () => {
  let page: JokeAppPage;

  beforeEach(() => {
    page = new JokeAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

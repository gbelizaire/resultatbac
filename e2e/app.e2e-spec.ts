import { ResulatbacPage } from './app.po';

describe('resulatbac App', () => {
  let page: ResulatbacPage;

  beforeEach(() => {
    page = new ResulatbacPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

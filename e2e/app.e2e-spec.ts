import { NgrxStoreExamplePage } from './app.po';

describe('ngrx-store-example App', () => {
  let page: NgrxStoreExamplePage;

  beforeEach(() => {
    page = new NgrxStoreExamplePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

import { UnibookNewPage } from './app.po';

describe('unibook-new App', () => {
  let page: UnibookNewPage;

  beforeEach(() => {
    page = new UnibookNewPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});

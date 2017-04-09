import { MeanAppFrontEndPage } from './app.po';

describe('mean-app-front-end App', () => {
  let page: MeanAppFrontEndPage;

  beforeEach(() => {
    page = new MeanAppFrontEndPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

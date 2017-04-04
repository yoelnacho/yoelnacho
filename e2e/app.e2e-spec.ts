import { YoelnachoPage } from './app.po';

describe('yoelnacho App', () => {
  let page: YoelnachoPage;

  beforeEach(() => {
    page = new YoelnachoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

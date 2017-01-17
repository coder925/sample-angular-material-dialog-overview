import { MyDialogAppPage } from './app.po';

describe('my-dialog-app App', function() {
  let page: MyDialogAppPage;

  beforeEach(() => {
    page = new MyDialogAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

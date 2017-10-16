import { NovoProjetoPage } from './app.po';

describe('novo-projeto App', function() {
  let page: NovoProjetoPage;

  beforeEach(() => {
    page = new NovoProjetoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

describe('Jiomart Search', function() {
  const homePage = browser.page.JioMart.Homepage() // first page-object

  beforeEach(async () => homePage.navigate());

  afterEach(async (browser) => browser.quit());

  it('1. Verify that user should able to search available product', function(browser) {
    homePage.setValue('.aa-Input.search_input', 'iphone 13');
    browser.waitForElementVisible('.aa-Input.search_input');
    homePage.clickfirstproduct();
    homePage.assert.textContains('.jio-web.search-result-page.alg.srch.master', 'Filters');
  });

  it('2. Verify that the user should not be able to search Unavailable product', function(browser){
    homePage.setValue('.aa-Input.search_input', 'Nokia 3110');
    homePage.clickfirstproduct();
    homePage.assert.textContains('.jio-web.search-result-page.alg.srch.master', 'Filters');
  })
});

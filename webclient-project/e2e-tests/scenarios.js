'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {


  it('should automatically redirect to /places when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/places");
  });


  describe('places', function() {

    beforeEach(function() {
      browser.get('index.html#/places');
    });

    it('should render an input form for search places when user navigates to /places', function() {
      var search_input = element(by.tagName('input'));
      search_input.sendKeys('pote');

      var search_button = element(by.tagName('button'));
      search_button.click();

      var sendKeysTest = 'results';
      element(by.tagName('textarea')).sendKeys(sendKeysTest); 
      // var result = 'oi';
      // element(by.name('search_result')).getAttribute().then(function(value){result = value; });
    //  console.log(search_result);
      // expect(result).toEqual('results');

      expect(element(by.name('search_result')).getAttribute('value')).toEqual(sendKeysTest);

      var list = element.all(by.tagName('ul'));
      expect(list.count()).toBe(2);

    });

  });


  describe('view2', function() {

    beforeEach(function() {
      browser.get('index.html#/view2');
    });


    it('should render view2 when user navigates to /view2', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 2/);
    });

  });
});

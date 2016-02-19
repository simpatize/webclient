'use strict';

describe('webClient', function() {

  it('should automatically redirect to /places when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/places");
  });

});

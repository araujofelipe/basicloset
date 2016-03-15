'use strict';
describe('BasiCloset App', function() {
	it('should redirect index.html to index.html#/about', function() {
    browser.get('app/about.html');
    browser.getLocationAbsUrl().then(function(url) {
        expect(url).toEqual('/about');
      });
  });
 

}
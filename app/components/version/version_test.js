'use strict';

describe('webClient.version module', function() {
  beforeEach(module('webClient.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});

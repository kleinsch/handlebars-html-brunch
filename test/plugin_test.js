var Handlebars = require('handlebars');

describe('Plugin', function() {
  var plugin;

  beforeEach(function() {
    plugin = new Plugin({
      files: {
        htmls: {
          templateData: {"a": "b"}
        }
      }
    });
  });

  it('should be an object', function() {
    expect(plugin).to.be.ok();
  });

  it('should has #compile method', function() {
    expect(plugin.compile).to.be.a(Function);
  });

  it('should compile and produce valid result', function(done) {
    var content = '<strong>{{a}}</strong>';
    var expected = '<strong>b</strong>';

    plugin.compile(content, 'template.handlebars', function(error, data) {
      expect(error).not.to.be.ok();
      expect(data).to.equal(expected);
      done();
    });
  });
});

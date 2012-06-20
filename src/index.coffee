handlebars = require 'handlebars'

module.exports = class HandlebarsHtmlCompiler
  brunchPlugin: yes
  type: 'html'
  extension: 'hbs.html'
  pattern: /\.hbs\.html$/

  constructor: (@config) ->
    null

  compile: (data, path, callback) ->
    try
      tmpl = handlebars.compile data
      result = tmpl(@config.files.htmls.templateData)
    catch err
      error = err
    finally
      callback error, result

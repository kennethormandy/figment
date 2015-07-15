// Require and initialise PhantomCSS module
// Paths are relative to CasperJs directory

var fs = require('fs')
var phantomcss = require('phantomcss')
var Nightmare = require('nightmare')
var should = require('should')
var harp = require('harp')

describe('nightmare', function() {

  // Still need to make this work from a clean install
  // KSS, etc.
  before(function(done) {
    harp.server(__dirname + '/../examples', { port: 9005 }, done)
  })

  it('Should load the styleguide', function (done) {
    new Nightmare()
    .goto('http://localhost:9005')
    .evaluate(function() {
      return document.querySelector('h1').innerText
    }, function(el) {
      el.should.equal('KSS Style Guide')
    })
    .run(done)
  })

  // it('Should take a screenshot diff', function (done) {
  //   phantomcss.init({
  //     // rebase: casper.cli.get('rebase'),
  //     // casper: nightmare,
  //     libraryRoot: fs.absolute(fs.workingDirectory + ''),
  //     screenshotRoot: fs.absolute(fs.workingDirectory + '/test/fixtures/'),
  //     failedComparisonsRoot: fs.absolute(fs.workingDirectory + '/test/fixtures/failed'),
  //     addLabelToFailedImage: false,
  //   })
  //
  //   new Nightmare()
  //   .goto('http://localhost:9005/section-figment')
  //   .evaluate(function() {
  //     phantomcss.screenshot('kssref-figment-children', 'figure caption with children')
  //   }, function() {
  //     phantomcss.compareAll()
  //     // phantomcss.getExitStatus() // pass or fail?
  //
  //   })
  //   .run(done)
  // })

})

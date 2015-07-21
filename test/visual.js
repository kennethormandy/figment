var Nightmare = require('nightmare')
var should = require('should')
var hux = require('huxley')
var harp = require('harp')
var fs = require('fs')
var path = require('path')
var resemble = require('node-resemble')

describe('nightmare', function () {

  // Still need to make this work from a clean install
  // KSS, etc.
  before(function(done) {
    harp.server(__dirname + '/../examples', { port: 9005 })

    new Nightmare()
      .goto('http://google.com')
      .screenshot(path.join('./test/fixtures', '1.png'))
      .run(done)
  })

  // it('Should load the styleguide', function (done) {
  //   new Nightmare()
  //     .goto('http://localhost:9005')
  //     .evaluate(function () {
  //       return document.querySelector('h1').innerText
  //     }, function(el) {
  //       el.should.equal('KSS Style Guide')
  //     })
  //     .run(done)
  // })


  it('Should take a screenshot diff', function (done) {

    var fileTest = './test/fixtures/1.png'
    var fileRef = './test/fixtures/reference/1.png'

    resemble(fileTest).compareTo(fileRef).ignoreColors().onComplete(function(data) {
      var misMatch = parseInt(data.misMatchPercentage, 10)

      // should be the same dimensions
      data.isSameDimensions.should.be.ok

      // should match exactly
      misMatch.should.equal(0)

      done()
    });

  })
})

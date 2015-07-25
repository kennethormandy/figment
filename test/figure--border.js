var fs = require('fs')
var path = require('path')
var harp = require('harp')
var should = require('should')
var Nightmare = require('nightmare')
var resemble = require('node-resemble')

describe('.figure--border', function () {

  before(function(done) {
    var port = 9006

    harp.server(__dirname + '/../', { port: port })

    new Nightmare()
      .viewport(1024, 768) // Classic!
      .goto('http://localhost:' + port + '/test/fixtures/figure--border')
      .screenshot(path.join('./test/fixtures/screenshots', 'figure--border--1024x768.png'))
      .run()

    new Nightmare()
      .viewport(640, 480) // Classic!
      .goto('http://localhost:' + port + '/test/fixtures/figure--border')
      .screenshot(path.join('./test/fixtures/screenshots', 'figure--border--640x480.png'))
      .run(done)

  })

  it('Should match reference at 640×480 viewport', function (done) {

    var fileName = 'figure--border--640x480.png'
    var pathBase = './test/fixtures/'
    var pathRef = pathBase + '/reference/'
    var pathTest = pathBase + '/screenshots/'
    var pathFail = pathBase + '/failed/'

    resemble(pathTest + fileName).compareTo(pathRef + fileName).ignoreColors().onComplete(function(data) {
      var misMatch = parseInt(data.misMatchPercentage, 10)

      // should be the same dimensions
      data.isSameDimensions.should.be.ok

      // Should match exactly
      // Change this value for less precision
      misMatch.should.equal(0)
      done()
    })
  })

  it('Should match reference at 1024×768 viewport', function (done) {

    var fileName = 'figure--border--1024x768.png'
    var pathBase = './test/fixtures/'
    var pathRef = pathBase + '/reference/'
    var pathTest = pathBase + '/screenshots/'
    var pathFail = pathBase + '/failed/'

    resemble(pathTest + fileName).compareTo(pathRef + fileName).ignoreColors().onComplete(function(data) {
      var misMatch = parseInt(data.misMatchPercentage, 10)
      data.isSameDimensions.should.be.ok
      misMatch.should.equal(0)
      done()
    })
  })
})

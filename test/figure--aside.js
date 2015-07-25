var fs = require('fs')
var path = require('path')
var harp = require('harp')
var trash = require('trash')
var should = require('should')
var Nightmare = require('nightmare')
var resemble = require('node-resemble')

describe('.figure--aside', function () {

  before(function(done) {
    harp.server(__dirname + '/../', { port: 9005 })

    new Nightmare()
      .viewport(1024, 768) // Classic!
      .goto('http://localhost:9005/test/fixtures/figure--aside')
      .screenshot(path.join('./test/fixtures/screenshots', 'figure--aside--1024x768.png'))
      .run()

    new Nightmare()
      .viewport(640, 480) // Classic!
      .goto('http://localhost:9005/test/fixtures/figure--aside')
      .screenshot(path.join('./test/fixtures/screenshots', 'figure--aside--640x480.png'))
      .run(done)

    new Nightmare()
      .viewport(1440, 900) // Classic!
      .goto('http://localhost:9005/test/fixtures/figure--aside')
      .screenshot(path.join('./test/fixtures/screenshots', 'figure--aside--1440x900.png'))
      .run(done)


    new Nightmare()
      .viewport(2560, 1440) // Classic!
      .goto('http://localhost:9005/test/fixtures/figure--aside')
      .screenshot(path.join('./test/fixtures/screenshots', 'figure--aside--2560x1440.png'))
      .run(done)
  })

  it('Should match reference at 640×480 viewport', function (done) {

    var fileName = 'figure--aside--640x480.png'
    var pathBase = './test/fixtures/'
    var pathRef = pathBase + '/reference/'
    var pathTest = pathBase + '/screenshots/'
    var pathFail = pathBase + '/failed/'

    resemble(pathTest + fileName).compareTo(pathRef + fileName).ignoreColors().onComplete(function(data) {
      var misMatch = parseInt(data.misMatchPercentage, 10)

      // should be the same dimensions
      data.isSameDimensions.should.be.ok

      // This seems dumb, since I check it twice
      // But it works for now
      if(misMatch !== 0) {
        fs.rename(pathTest + fileName, pathFail + fileName)
      }

      // Should match exactly
      // Change this value for less precision
      misMatch.should.equal(0)
      done()
    })
  })

  it('Should match reference at 1024×768 viewport', function (done) {

    var fileName = 'figure--aside--1024x768.png'
    var pathBase = './test/fixtures/'
    var pathRef = pathBase + '/reference/'
    var pathTest = pathBase + '/screenshots/'
    var pathFail = pathBase + '/failed/'

    resemble(pathTest + fileName).compareTo(pathRef + fileName).ignoreColors().onComplete(function(data) {
      var misMatch = parseInt(data.misMatchPercentage, 10)

      data.isSameDimensions.should.be.ok

      if(misMatch !== 0) {
        fs.rename(pathTest + fileName, pathFail + fileName)
      }

      misMatch.should.equal(0)
      done()
    })
  })

  it('Should match reference at 1440×900 viewport', function (done) {

    var fileName = 'figure--aside--1440x900.png'
    var pathBase = './test/fixtures/'
    var pathRef = pathBase + '/reference/'
    var pathTest = pathBase + '/screenshots/'
    var pathFail = pathBase + '/failed/'

    resemble(pathTest + fileName).compareTo(pathRef + fileName).ignoreColors().onComplete(function(data) {
      var misMatch = parseInt(data.misMatchPercentage, 10)

      // should be the same dimensions
      data.isSameDimensions.should.be.ok

      // This seems dumb, since I check it twice
      // But it works for now
      if(misMatch !== 0) {
        fs.rename(pathTest + fileName, pathFail + fileName)
      }

      // Should match exactly
      // Change this value for less precision
      misMatch.should.equal(0)
      done()
    })
  })

  it('Should match reference at 2560×1440 viewport', function (done) {

    var fileName = 'figure--aside--2560x1440.png'
    var pathBase = './test/fixtures/'
    var pathRef = pathBase + '/reference/'
    var pathTest = pathBase + '/screenshots/'
    var pathFail = pathBase + '/failed/'

    resemble(pathTest + fileName).compareTo(pathRef + fileName).ignoreColors().onComplete(function(data) {
      var misMatch = parseInt(data.misMatchPercentage, 10)

      // should be the same dimensions
      data.isSameDimensions.should.be.ok

      // This seems dumb, since I check it twice
      // But it works for now
      if(misMatch !== 0) {
        fs.rename(pathTest + fileName, pathFail + fileName)
      }

      // Should match exactly
      // Change this value for less precision
      misMatch.should.equal(0)
      done()
    })
  })

  after(function(done) {

    // After all tests, remove the generated images
    // that didn’t get moved to the `failed/` directory
    // trash(['./test/fixtures/screenshots'], function (err) {
    //   console.log(err)
    // })

    done()
  })
})
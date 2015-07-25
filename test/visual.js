var fs = require('fs')
var path = require('path')
var harp = require('harp')
var trash = require('trash')
var should = require('should')
var Nightmare = require('nightmare')
var resemble = require('node-resemble')

describe('nightmare', function () {

  before(function(done) {
    harp.server(__dirname + '/../', { port: 9005 })

    new Nightmare()
      .viewport(1024, 768) // Classic!
      .goto('http://localhost:9005/test/fixtures/figure--border')
      .screenshot(path.join('./test/fixtures/screenshots', 'figure--border.png'))
      .run(done)
  })

  it('Should take a screenshot diff', function (done) {

    var fileName = 'figure--border.png'
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

    after(function(done) {

      // After all tests, remove the generated images
      // that didn’t get moved to the `failed/` directory
      trash(['./test/fixtures/screenshots'], function (err) {
        console.log(err)
      })

      done()
    })
  })
})

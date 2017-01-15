var app = require('../app'),
    chai = require('chai'),
    chaiHttp = require('chai-http'),
    should = chai.should()

chai.use(chaiHttp)

exports.entries_list_should_return_json_array = function(done){
  chai.request(app)
    .get('/entries/list')
    .end(function(err, res){

      var entries = res.body;

      res.should.have.status(200);
      res.should.to.be.json;
      entries.should.to.have.length.above(0);

      done();
    });
};


exports.entries_add_should_show_form = function(done){
  chai.request(app)
    .get('/entries/add')
    .end(function(err, res){
      res.should.have.status(200);
      res.should.be.html;
      res.text.should.match(/Add new entry/)
      done();
    });
};


exports.entries_add_should_return_200 = function(done){
  chai.request(app)
    .post('/entries/add')
    .end(function(err, res){
      res.should.have.status(200);
      res.should.be.string;
      res.text.should.eq('success')
      done();
    });
};

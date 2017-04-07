'use strict';

module.exports = function(Person) {

Person.findPeople = function(filter, cb) {
  Person.find({where: filter}, function(err, instance) {
    if (err) throw err;
    var response = instance;
    return cb(null, response)
  });
};

Person.remoteMethod('findPeople', {
  http: {
    path: '/',
    verb: 'get'
  },
  accepts: {
    arg: 'filter',
    type: 'object',
    description: 'A filter object in JSON format',
    http: {
      source: 'query'
    }
  },
  returns: [
    /*{type: {people: '[person]'}, root: true}*/
    {type: '[person]', root: true}
  ]
});

Person.fullname = function(filter, cb) {
  Person.find({where: filter}, function(err, instance) {
      if (err) throw err;
      var person = instance instanceof Array && instance.length > 0 ? instance[0] : null;
      var fullname = person !== null ? person.firstname + ' ' + person.lastname : '';
      return cb(null, fullname, person != null ? 1 : 0);
    });
  };

  Person.remoteMethod('fullname', {
    http: {
      path: '/fullname',
      verb: 'get'
    },
    accepts: {
      arg: 'filter',
      type: 'object',
      description: 'A filter object in JSON format',
      http: {
        source: 'query'
      }
    },
    returns: [
      {arg: 'fullname', type: 'string'},
      {arg: 'status', type: 'number'}
    ]
  });
};

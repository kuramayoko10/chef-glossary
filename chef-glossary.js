//Router.route('/searchResult');
Glossary = new Mongo.Collection("glossary");


Router.configure({
  layoutTemplate: 'main'
});

Router.route('home')
Router.route('result');

Router.route('/', {
    template: 'home'
});
var callSearchFunction = function(word) {
  if(word.length > 0) {
    Session.set('searchWordTyped', word);
    Router.go('result');
  }
};

if (Meteor.isClient) {

  Template.result.helpers({
    searchWord: function() {
      return Session.get('searchWordTyped')
    }
  });

  Template.home.events({
    "click #searchButton": function(event, template){
      alert("Here")
      callSearchFunction(document.getElementById('searchInput').value);

    },
    "submit #searchInput": function (event, template) {
        event.preventDefault();
        callSearchFunction(document.getElementById('searchInput').value);
    },
    "keypress #searchInput": function(event, template) {
      if(event.keyCode == 13) {
        event.preventDefault();d
        callSearchFunction(document.getElementById('searchInput').value);
      }
      return true;
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}

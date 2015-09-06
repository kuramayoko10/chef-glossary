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
  var searchBar = document.getElementById('searchInput');
  if(word.length > 0) {
    Session.set('searchWordTyped', word.toLowerCase());
    //Router.go('result');
    searchBar.classList.add('verticalTranslate');
    searchBar.classList.add('horizontalStretch');
  }
};

Template.result.helpers({
  'searchWord': function() {
    return Session.get('searchWordTyped')
  },
  'search': function() {
      return Glossary.find({name: Session.get('searchWordTyped')});
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
      event.preventDefault();
      callSearchFunction(document.getElementById('searchInput').value);
    }
    return true;
  }
});

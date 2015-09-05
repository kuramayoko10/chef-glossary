//Router.route('/searchResult');
Router.configure({
  layoutTemplate: 'main'
});

Router.route('/home')
Router.route('result');

Router.route('/', {
    name: 'home'
    template: '/home'
});

if (Meteor.isClient) {

  Template.main.Template.name.helpers({
  });

  Template.home.events({
    "click #searchButton": function(event, template){



      alert("Looking for " + document.getElementById('searchInput').value);
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}


if (Meteor.isClient) {

  Template.body.events({
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

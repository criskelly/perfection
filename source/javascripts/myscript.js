var User = Backbone.Model.extend({
        urlRoot: '/user',
        defaults: {
            name: '',
            email: ''
        }
    });
    var user = new User();
    // Notice that we haven't set an `id`
    var userDeets = {
        name: 'Cris',
        email: 'cris.kelly@gmail.com'
    };
    // Because we have not set a `id` the server will call
    // POST /user with a payload of {name:'Thomas', email: 'thomasalwyndavis@gmail.com'}
    // The server should save the data and return a response containing the new `id`
    user.save(userDeets, {
        success: function (user) {
            alert(user.toJSON());
        }
    });

var UserCollection = Backbone.Collection.extend({
  urlRoot: '/user'
});

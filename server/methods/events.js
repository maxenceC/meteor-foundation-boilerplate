/**
 * Created by maxencecornet on 25/11/15.
 */
Meteor.methods({
    'Events.insert': function (params) {
        Events.insert(params);
    }
});
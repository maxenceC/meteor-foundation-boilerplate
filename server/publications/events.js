/**
 * Created by maxencecornet on 25/11/15.
 */
Meteor.publishComposite("events", function () {
    return {
        find: function () {
            return Events.find({});
        }
    }
});
/**
 * Created by maxencecornet on 25/11/15.
 */

Events = new Mongo.Collection('events');

EventsSchema = new SimpleSchema({
    description: {
        type: String,
        optional: false
    },
    place: {
        type: String,
        optional: false
    },
    day: {
        type: Number,
        optional: false
    },
    month: {
        type: String,
        optional: false
    }
});

Meteor.startup(function () {
    Events.attachSchema(EventsSchema);
});
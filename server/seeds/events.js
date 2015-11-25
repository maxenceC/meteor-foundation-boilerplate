/**
 * Created by maxencecornet on 25/11/15.
 */
Meteor.startup(function () {

    Factory.define('event', Events, {
        description: function () {
            return faker.name.jobArea();
        },
        place: function () {
            return faker.address.streetAddress();
        },
        day: function () {
            return _.random(1, 31);
        },
        month: function () {
            return 'sept';//...faker.date.month did not work for some reason
        }
    });

    if (Events.find({}).count() === 0) {

        _(3).times(function (n) {
            Factory.create('event');
        });

    }

});
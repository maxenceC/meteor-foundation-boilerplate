DashboardController = AppController.extend({
    waitOn: function () {
        return this.subscribe('events');
    },
    data: {
        eventsCard: Events.find({})
    },
    onAfterAction: function () {
        Meta.setTitle('Dashboard');
        //this.render('Dashboard')
    }
});

DashboardController.events({
    'click [data-action=doSomething]': function (event) {
        event.preventDefault();
    }
});

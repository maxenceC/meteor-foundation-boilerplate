/**
 * Created by maxencecornet on 25/11/15.
 */
Events.allow({
    'insert': function(userId) {
        return userId;
    },
    'update': function(userId) {
        return userId;
    },
    'remove': function(userId) {
        return userId;
    }
});

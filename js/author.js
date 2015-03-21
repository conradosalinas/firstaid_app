// Schedules a local notification to be triggered after 5 seconds
window.plugins.localNotification.add({
    fireDate        : Math.round(new Date().getTime()/1000 + 5),
    alertBody       : "This is a local notification.",
    action          : "View",
    repeatInterval  : "daily",
    soundName       : "beep.caf",
    badge           : 0,
    notificationId  : 123,
    foreground      : function(notificationId){ 
        alert("Hello World! This alert was triggered by notification " + notificationId); 
    },
    background  : function(notificationId){
        alert("Hello World! This alert was triggered by notification " + notificationId);
    }           
});

// cancel notificationId = 1234
window.plugins.localNotification.cancel(1234, callback);

// cancel all notifications
window.plugins.localNotification.cancelAll(callback);

// set badge number to 3
window.plugins.localNotification.setBadgeNumber(3);
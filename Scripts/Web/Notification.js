'use strict';


const check_notification_time_parent = (notificationDate) => {
   // Implementation of check_notification_time_parent function
};

$(document).ready(function () {
   NotiScript.GetNotifications(1);
});

const NotiScript = {
    GetNotifications: (user_seq) => {
       const _data = {
          "p_user_id": parseInt(user_seq)
       };
       ajaxRequest(
         supabase_url()+ "/get_notifications_for_user_with_user_info",
          "POST",
          _data,
          (success) => {
            hideLoader();
            console.log(success)
             $("#NotificationPanel").NotiJS({
                NcountElem: "#notification-count",
                notification_array:success
             });
             $.fn.NotiJS.notification_html();
          },
          (error) => {
             console.error(error);
          },
          null
       );
    }
 };
 
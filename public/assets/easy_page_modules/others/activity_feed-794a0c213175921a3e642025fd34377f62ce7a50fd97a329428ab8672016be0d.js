EasyGem.module.module("easyPageModules/others/activityFeed",[],function(){return function(t,e){var a=(e=JSON.parse(e)).module_id;e.load_more&&(e.current_limit=$("#"+a+"_button_load_more").attr("data-current-limit"),e.event_type_id=$("#epm_activity_feed_form_for_"+a+" .easy-activity-selected").attr("data-activity-id")),$.ajax({url:t,data:e})}});
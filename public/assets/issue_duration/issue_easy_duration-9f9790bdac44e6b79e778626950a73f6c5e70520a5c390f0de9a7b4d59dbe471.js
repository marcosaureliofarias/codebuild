EASY.schedule.late(function(){function a(a,e){$.ajax({dataType:"json",url:"/calculate_issue_easy_duration",type:"GET",data:{start_date:a,due_date:e},success:function(a){$("#issue_easy_duration").val(a),$("#issue_easy_duration_time_units").val("day")}})}$("#start_date_area").after($("#easy_duration_area")),$("#issue_start_date").change(function(){var e=$("#issue_due_date");if(""===e.val())return!1;a(this.value,e.val())}),$("#issue_due_date").change(function(){var e=$("#issue_start_date");if(""===e.val())return!1;a(e.val(),this.value)}),$("#issue_easy_duration").on("change",function(){var a=$("#issue_start_date"),e=$("#issue_due_date"),t=$("#issue_easy_duration_time_units");if(0===this.value.length)return!1;if(a.val().length)$.ajax({dataType:"json",url:"/move_date",type:"GET",data:{start_date:a.val(),easy_duration:this.value,easy_duration_unit:t.val()},success:function(a){e.val(a)}});else{if(!e.val().length||""!==a.val())return!1;$.ajax({dataType:"json",url:"/move_date",type:"GET",data:{due_date:e.val(),easy_duration:this.value,easy_duration_unit:t.val()},success:function(e){a.val(e)}})}}),$("#issue_easy_duration_time_units").change(function(){$("#issue_easy_duration").trigger("change")})});
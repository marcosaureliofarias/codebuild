function validateDependencies(e){var t=e.target,n=collectDependencies([],t,t.checked);if(0===n.length)return!0;var l=[],i=[];n.map(function(e){e.value?l.push(e.title):i.push(e.title)});var o="",s="";l.length>0&&(o=o+'<ul style="margin-bottom: 0; margin-top: 0"><li>'+l.join("</li><li>")+"</li></ul>",s=EASY.RolesI18n.dependencyEnable.replace("%{name}","").toLowerCase()),i.length>0&&(o=o+'<ul style="margin-bottom: 0; margin-top: 0"><li>'+i.join("</li><li>")+"</li></ul>",s=EASY.RolesI18n.dependencyDisable.replace("%{name}","").toLowerCase()),$("#ajax-modal").html(o),showModal("ajax-modal","600px",EASY.RolesI18n.textUnsatisfied.replace("%{state}",s)),$("#ajax-modal").dialog({buttons:[{text:EASY.RolesI18n.buttonApply,title:EASY.RolesI18n.buttonApply,"class":"button-positive",click:function(){n.forEach(function(e){document.getElementById(e.id).checked=e.value}),$(this).dialog("close")}},{text:EASY.RolesI18n.buttonCancel,title:EASY.RolesI18n.buttonCancel,"class":"button-negative",click:function(){t.checked=!t.checked,$(this).dialog("close")}}]})}function collectDependencies(e,t,n,l=[]){if(-1===l.indexOf(t.id)){if(l.push(t.id),n){var i=$(t).data("depends-on");i&&$(i).each(function(t,n){var i=document.getElementById("role_permissions_"+n);i.checked||(e.find(function(e){return e.name===n})||e.push({name:n,value:!0,id:i.id,title:"<span class='tooltip-parent' style='display: block; cursor: pointer;'>"+$(i).closest("label").children('span:not(".permission-tooltip, .permission-flags")').text().trim()+"<span class='tooltip' style='white-space: normal; width: 70%; left: 30%;'>"+$(i).closest("label").children(".permission-tooltip").text().trim()+"</span></span>"}),collectDependencies(e,i,!0,l))})}else $('input[name="role[permissions][]"]').each(function(n,i){var o=$(i);i.checked&&o.data("depends-on")&&-1!==o.data("depends-on").indexOf(t.value)&&(e.find(function(e){return e.name===i.value})||e.push({name:i.value,value:!1,id:i.id,title:"<span class='tooltip-parent' style='display: block; cursor: pointer;'>"+$(i).closest("label").children('span:not(".permission-tooltip, .permission-flags")').text().trim()+"<span class='tooltip' style='white-space: normal; width: 70%; left: 30%;'>"+$(i).closest("label").children(".permission-tooltip").text().trim()+"</span></span>"}),collectDependencies(e,i,!1,l))});return e}}EASY.schedule.late(function(){$('input[name="role[permissions][]"]').change(validateDependencies),$(".permission-tooltip").each(function(e,t){var n=$(t);new easyClasses.EasyTooltip(n.find(".tooltip").html(),n,0,0)})},-5);
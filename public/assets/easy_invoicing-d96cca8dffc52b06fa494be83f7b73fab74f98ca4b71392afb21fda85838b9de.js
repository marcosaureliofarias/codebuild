EASY.schedule.late(function(){$(document).on("click",".delete-easy-invoice-payment-relation",function(e){if($(e.target).closest(".easy-invoice-payment-relation").remove(),0===$(".easy-invoice-payment-relation").length){var t=$(".invoice-settings-payments-fields .nodata");$("<input>").attr({type:"hidden",name:"easy_setting[easy_invoice_payment_settings][]"}).appendTo(t),t.show()}})}),window.EASY.easyInvoicing={repeatButton:function(e){var t=$(e).closest("tr"),n=$(e).attr("data-class"),a=t.find("."+n).val();t.nextAll("tr").find("."+n).val(a).trigger("change")},addEasyInvoicePaymentRelation:function(e){var t=$("#payment_relation_template");if($(".easy-invoice-payment-relation").length===e)return!1;if(0!==$(".easy-invoice-payment-relation select option[value='']:selected").length)return!1;var n=$("<div></div>").addClass("easy-invoice-payment-relation");n.html(t.html()),$(".invoice-settings-payments-fields").append(n).show().find(".nodata").hide()}};
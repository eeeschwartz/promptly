jQuery.fn.dataTableExt.oSort["num-html-asc"]=function(a,b){var c=a.replace(/<.*?>/g,""),d=b.replace(/<.*?>/g,"");return c=parseFloat(c),d=parseFloat(d),c<d?-1:c>d?1:0},jQuery.fn.dataTableExt.oSort["num-html-desc"]=function(a,b){var c=a.replace(/<.*?>/g,""),d=b.replace(/<.*?>/g,"");return c=parseFloat(c),d=parseFloat(d),c<d?1:c>d?-1:0};
/* 
* autolines for jeditable
* this is a custom jeditable plugin specific for jwesor
* Copyright (c) 2012 Ben Wei
*
* Licensed under the MIT license:
*   http://www.opensource.org/licenses/mit-license.php
* Project home:
*   https://github.com/benwei/jwesor
*/

$.editable.addInputType('autolines', {
    element : function(settings, original) {
	var textarea = $('<textarea /><br>');
	if (settings.rows) {
	    textarea.attr('rows', settings.rows);
	} else {
	    textarea.height(settings.height);
	}

	if (settings.cols) {
	    textarea.attr('cols', settings.cols);
	} else {
	    textarea.width(settings.width);
	}
	$(this).append(textarea);
	return(textarea);
    },
    content : function(string, settings, original) {
	var retval = string.replace(/<br[\s\/]?>/gi, '\n');
	var textarea = $(':input:first', this);
	var rows = retval.split('\n').length;
	if (rows > settings.rows) {
		textarea.attr('rows', rows);
	}
	textarea.val(retval);
    },
    /* Call before submit hook. */
    submit: function (settings, original) {
	var textarea = $(':input:first', this)
	var value = textarea.val();
	var retval = value.replace(/\n/gi, '<br>');
	textarea.val(retval);
    }
});

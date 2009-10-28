

function randbetween(x, y) {
	range = Math.abs(y - x);
	return Math.floor(Math.min(x, y) + (range * Math.random()));
}

function randChar(str) {
	return str.charAt(randbetween(0, str.length));
}

// why is this not built into JS?
function contains(a, obj) {
	var i = a.length;
	while (i--) {
		if (a[i] == obj) {
			return true;
		}
	}
	return false;
}

function setVal(id, val) {
	elem = document.getElementById(id);
	if (!elem)
		return false;
	tagname = new String(elem.tagName).toUpperCase();
	switch (tagname) { // Note: use CAPS for tag names
		case 'SPAN' :
		case 'DIV' :
		case 'TEXTAREA' :
			elem.innerHTML = val;
			return true;
			break;
		case 'INPUT' :
			elem.value = val;
			return true;
			break;
		default :
			return false;
			break;
	}
	return false;
}

function getVal(id) {
	elem = document.getElementById(id);
	if (!elem)
		return false;
	tagname = new String(elem.tagName).toUpperCase();
	switch (tagname) { // Note: use CAPS for tag names
		case 'SPAN' :
		case 'DIV' :
		case 'TEXTAREA' :
			return elem.innerHTML;
			break;
		case 'INPUT' :
			return elem.value;
			break;
		case 'SELECT' :
			indx = elem.selectedIndex;
			optelem = elem.options[indx];
			return optelem.id;
			break;
		default :
			return false;
			break;
	}
	return false;
}

/*
 * radio buttons etc.
 */
function check(id) {
	elem = document.getElementById(id);
	if (elem && elem.type == "checkbox")
		elem.checked = true;
}
function uncheck(id) {
	elem = document.getElementById(id);
	if (elem && elem.type == "checkbox")
		elem.checked = false;
}

function isChecked(id) {
	elem = document.getElementById(id);
	if (elem && elem.type == "checkbox")
		return elem.checked;
	else
		return false;
}
function checkRadio(id) {
	elem = document.getElementById(id);
	if (elem)
		elem.checked = true;

}

function hideElement(id) {
	elem = document.getElementById(id);
	if (elem)
		elem.style.display = "none";

}

function unHideElement(id) {
	elem = document.getElementById(id);
	if (elem)
		elem.style.display = "inline";

}

/*
 * initialise all the cleared counters (optional)
 */
var cleared = {
	search : false
};

function clearOnce(id) {
	if (!cleared.search) {
		setVal('search', '');
		cleared.search = true;
	}
}

function checkEnter(event, callback) {
	if (event.keyCode == 13) {
		eval(callback);
		return false;
	} else {
		return true;
	}
}

/*
 * cookie functions
 */

// use days=0 for session cookie
function setCookie(name, value, days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
		var expires = "; expires=" + date.toGMTString();
	} else
		var expires = "";
	document.cookie = name + "=" + value + expires + "; path=/";
}

function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ')
			c = c.substring(1, c.length);
		if (c.indexOf(nameEQ) == 0)
			return c.substring(nameEQ.length, c.length);
	}
	return null;
}

function clearCookie(name) {
	setCookie(name, '', -1);
}




function iPhoneRedirect(url) {
	if ((navigator.userAgent.match(/iPhone/i))
			|| (navigator.userAgent.match(/iPod/i))) {
		window.location = url;
	}
}

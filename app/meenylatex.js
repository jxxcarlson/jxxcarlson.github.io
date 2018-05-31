(function(scope){
'use strict';

function F(arity, fun, wrapper) {
  wrapper.a = arity;
  wrapper.f = fun;
  return wrapper;
}

function F2(fun) {
  return F(2, fun, function(a) { return function(b) { return fun(a,b); }; })
}
function F3(fun) {
  return F(3, fun, function(a) {
    return function(b) { return function(c) { return fun(a, b, c); }; };
  });
}
function F4(fun) {
  return F(4, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return fun(a, b, c, d); }; }; };
  });
}
function F5(fun) {
  return F(5, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return fun(a, b, c, d, e); }; }; }; };
  });
}
function F6(fun) {
  return F(6, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return fun(a, b, c, d, e, f); }; }; }; }; };
  });
}
function F7(fun) {
  return F(7, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return fun(a, b, c, d, e, f, g); }; }; }; }; }; };
  });
}
function F8(fun) {
  return F(8, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) {
    return fun(a, b, c, d, e, f, g, h); }; }; }; }; }; }; };
  });
}
function F9(fun) {
  return F(9, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) { return function(i) {
    return fun(a, b, c, d, e, f, g, h, i); }; }; }; }; }; }; }; };
  });
}

function A2(fun, a, b) {
  return fun.a === 2 ? fun.f(a, b) : fun(a)(b);
}
function A3(fun, a, b, c) {
  return fun.a === 3 ? fun.f(a, b, c) : fun(a)(b)(c);
}
function A4(fun, a, b, c, d) {
  return fun.a === 4 ? fun.f(a, b, c, d) : fun(a)(b)(c)(d);
}
function A5(fun, a, b, c, d, e) {
  return fun.a === 5 ? fun.f(a, b, c, d, e) : fun(a)(b)(c)(d)(e);
}
function A6(fun, a, b, c, d, e, f) {
  return fun.a === 6 ? fun.f(a, b, c, d, e, f) : fun(a)(b)(c)(d)(e)(f);
}
function A7(fun, a, b, c, d, e, f, g) {
  return fun.a === 7 ? fun.f(a, b, c, d, e, f, g) : fun(a)(b)(c)(d)(e)(f)(g);
}
function A8(fun, a, b, c, d, e, f, g, h) {
  return fun.a === 8 ? fun.f(a, b, c, d, e, f, g, h) : fun(a)(b)(c)(d)(e)(f)(g)(h);
}
function A9(fun, a, b, c, d, e, f, g, h, i) {
  return fun.a === 9 ? fun.f(a, b, c, d, e, f, g, h, i) : fun(a)(b)(c)(d)(e)(f)(g)(h)(i);
}




var _JsArray_empty = [];

function _JsArray_singleton(value)
{
    return [value];
}

function _JsArray_length(array)
{
    return array.length;
}

var _JsArray_initialize = F3(function(size, offset, func)
{
    var result = new Array(size);

    for (var i = 0; i < size; i++)
    {
        result[i] = func(offset + i);
    }

    return result;
});

var _JsArray_initializeFromList = F2(function (max, ls)
{
    var result = new Array(max);

    for (var i = 0; i < max && ls.b; i++)
    {
        result[i] = ls.a;
        ls = ls.b;
    }

    result.length = i;
    return _Utils_Tuple2(result, ls);
});

var _JsArray_unsafeGet = F2(function(index, array)
{
    return array[index];
});

var _JsArray_unsafeSet = F3(function(index, value, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = array[i];
    }

    result[index] = value;
    return result;
});

var _JsArray_push = F2(function(value, array)
{
    var length = array.length;
    var result = new Array(length + 1);

    for (var i = 0; i < length; i++)
    {
        result[i] = array[i];
    }

    result[length] = value;
    return result;
});

var _JsArray_foldl = F3(function(func, acc, array)
{
    var length = array.length;

    for (var i = 0; i < length; i++)
    {
        acc = A2(func, array[i], acc);
    }

    return acc;
});

var _JsArray_foldr = F3(function(func, acc, array)
{
    for (var i = array.length - 1; i >= 0; i--)
    {
        acc = A2(func, array[i], acc);
    }

    return acc;
});

var _JsArray_map = F2(function(func, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = func(array[i]);
    }

    return result;
});

var _JsArray_indexedMap = F3(function(func, offset, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = A2(func, offset + i, array[i]);
    }

    return result;
});

var _JsArray_slice = F3(function(from, to, array)
{
    return array.slice(from, to);
});

var _JsArray_appendN = F3(function(n, dest, source)
{
    var destLen = dest.length;
    var itemsToCopy = n - destLen;

    if (itemsToCopy > source.length)
    {
        itemsToCopy = source.length;
    }

    var size = destLen + itemsToCopy;
    var result = new Array(size);

    for (var i = 0; i < destLen; i++)
    {
        result[i] = dest[i];
    }

    for (var i = 0; i < itemsToCopy; i++)
    {
        result[i + destLen] = source[i];
    }

    return result;
});



var _List_Nil = { $: 0 };
var _List_Nil_UNUSED = { $: '[]' };

function _List_Cons(hd, tl) { return { $: 1, a: hd, b: tl }; }
function _List_Cons_UNUSED(hd, tl) { return { $: '::', a: hd, b: tl }; }


var _List_cons = F2(_List_Cons);

function _List_fromArray(arr)
{
	var out = _List_Nil;
	for (var i = arr.length; i--; )
	{
		out = _List_Cons(arr[i], out);
	}
	return out;
}

function _List_toArray(xs)
{
	for (var out = []; xs.b; xs = xs.b) // WHILE_CONS
	{
		out.push(xs.a);
	}
	return out;
}

var _List_map2 = F3(function(f, xs, ys)
{
	for (var arr = []; xs.b && ys.b; xs = xs.b, ys = ys.b) // WHILE_CONSES
	{
		arr.push(A2(f, xs.a, ys.a));
	}
	return _List_fromArray(arr);
});

var _List_map3 = F4(function(f, xs, ys, zs)
{
	for (var arr = []; xs.b && ys.b && zs.b; xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A3(f, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_map4 = F5(function(f, ws, xs, ys, zs)
{
	for (var arr = []; ws.b && xs.b && ys.b && zs.b; ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A4(f, ws.a, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_map5 = F6(function(f, vs, ws, xs, ys, zs)
{
	for (var arr = []; vs.b && ws.b && xs.b && ys.b && zs.b; vs = vs.b, ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A5(f, vs.a, ws.a, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_sortBy = F2(function(f, xs)
{
	return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
		return _Utils_cmp(f(a), f(b));
	}));
});

var _List_sortWith = F2(function(f, xs)
{
	return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
		var ord = A2(f, a, b);
		return ord === elm$core$Basics$EQ ? 0 : ord === elm$core$Basics$LT ? -1 : 1;
	}));
});



// LOG

var _Debug_log = F2(function(tag, value)
{
	return value;
});

var _Debug_log_UNUSED = F2(function(tag, value)
{
	console.log(tag + ': ' + _Debug_toString(value));
	return value;
});


// TODOS

function _Debug_todo(moduleName, region)
{
	return function(message) {
		_Debug_crash(8, moduleName, region, message);
	};
}

function _Debug_todoCase(moduleName, region, value)
{
	return function(message) {
		_Debug_crash(9, moduleName, region, value, message);
	};
}


// TO STRING

function _Debug_toString(value)
{
	return '<internals>';
}

function _Debug_toString_UNUSED(value)
{
	return _Debug_toAnsiString(false, value);
}

function _Debug_toAnsiString(ansi, value)
{
	if (typeof value === 'function')
	{
		return _Debug_internalColor(ansi, '<function>');
	}

	if (typeof value === 'boolean')
	{
		return _Debug_ctorColor(ansi, value ? 'True' : 'False');
	}

	if (typeof value === 'number')
	{
		return _Debug_numberColor(ansi, value + '');
	}

	if (value instanceof String)
	{
		return _Debug_charColor(ansi, "'" + _Debug_addSlashes(value, true) + "'");
	}

	if (typeof value === 'string')
	{
		return _Debug_stringColor(ansi, '"' + _Debug_addSlashes(value, false) + '"');
	}

	if (typeof value === 'object' && '$' in value)
	{
		var tag = value.$;

		if (typeof tag === 'number')
		{
			return _Debug_internalColor(ansi, '<internals>');
		}

		if (tag[0] === '#')
		{
			var output = [];
			for (var k in value)
			{
				if (k === '$') continue;
				output.push(_Debug_toAnsiString(ansi, value[k]));
			}
			return '(' + output.join(',') + ')';
		}

		if (tag === 'Set_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Set')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, elm$core$Set$toList(value));
		}

		if (tag === 'RBNode_elm_builtin' || tag === 'RBEmpty_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Dict')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, elm$core$Dict$toList(value));
		}

		if (tag === 'Array_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Array')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, elm$core$Array$toList(value));
		}

		if (tag === '::' || tag === '[]')
		{
			var output = '[';

			value.b && (output += _Debug_toAnsiString(ansi, value.a), value = value.b)

			for (; value.b; value = value.b) // WHILE_CONS
			{
				output += ',' + _Debug_toAnsiString(ansi, value.a);
			}
			return output + ']';
		}

		var output = '';
		for (var i in value)
		{
			if (i === '$') continue;
			var str = _Debug_toAnsiString(ansi, value[i]);
			var c0 = str[0];
			var parenless = c0 === '{' || c0 === '(' || c0 === '[' || c0 === '<' || c0 === '"' || str.indexOf(' ') < 0;
			output += ' ' + (parenless ? str : '(' + str + ')');
		}
		return _Debug_ctorColor(ansi, tag) + output;
	}

	if (typeof value === 'object')
	{
		var output = [];
		for (var key in value)
		{
			var field = key[0] === '_' ? key.slice(1) : key;
			output.push(_Debug_fadeColor(ansi, field) + ' = ' + _Debug_toAnsiString(ansi, value[key]));
		}
		if (output.length === 0)
		{
			return '{}';
		}
		return '{ ' + output.join(', ') + ' }';
	}

	return _Debug_internalColor(ansi, '<internals>');
}

function _Debug_addSlashes(str, isChar)
{
	var s = str
		.replace(/\\/g, '\\\\')
		.replace(/\n/g, '\\n')
		.replace(/\t/g, '\\t')
		.replace(/\r/g, '\\r')
		.replace(/\v/g, '\\v')
		.replace(/\0/g, '\\0');

	if (isChar)
	{
		return s.replace(/\'/g, '\\\'');
	}
	else
	{
		return s.replace(/\"/g, '\\"');
	}
}

function _Debug_ctorColor(ansi, string)
{
	return ansi ? '\x1b[96m' + string + '\x1b[0m' : string;
}

function _Debug_numberColor(ansi, string)
{
	return ansi ? '\x1b[95m' + string + '\x1b[0m' : string;
}

function _Debug_stringColor(ansi, string)
{
	return ansi ? '\x1b[93m' + string + '\x1b[0m' : string;
}

function _Debug_charColor(ansi, string)
{
	return ansi ? '\x1b[92m' + string + '\x1b[0m' : string;
}

function _Debug_fadeColor(ansi, string)
{
	return ansi ? '\x1b[37m' + string + '\x1b[0m' : string;
}

function _Debug_internalColor(ansi, string)
{
	return ansi ? '\x1b[94m' + string + '\x1b[0m' : string;
}



// CRASH


function _Debug_crash(identifier)
{
	throw new Error('https://github.com/elm/core/blob/1.0.0/hints/' + identifier + '.md');
}


function _Debug_crash_UNUSED(identifier, fact1, fact2, fact3, fact4)
{
	switch(identifier)
	{
		case 1:
			var url = fact1;
			throw new Error('Browser.fullscreen programs cannot handle URLs like this:\n\n    ' + url + '\n\nWhat is the root? The root of your file system? Try looking at this program with `elm reactor` or some other server.');

		case 2:
			var message = fact1;
			throw new Error('Problem with the flags given to your Elm program on initialization.\n\n' + message);

		case 3:
			var portName = fact1;
			throw new Error('There can only be one port named `' + portName + '`, but your program has multiple.');

		case 4:
			var portName = fact1;
			var problem = fact2;
			throw new Error('Trying to send an unexpected type of value through port `' + portName + '`:\n' + problem);

		case 5:
			throw new Error('Trying to use `(==)` on functions.\nThere is no way to know if functions are "the same" in the Elm sense.\nRead more about this at https://package.elm-lang.org/packages/elm/core/latest/Basics#== which describes why it is this way and what the better version will look like.');

		case 6:
			var moduleName = fact1;
			throw new Error('Your page is loading multiple Elm scripts with a module named ' + moduleName + '. Maybe a duplicate script is getting loaded accidentally? If not, rename one of them so I know which is which!');

		case 8:
			var moduleName = fact1;
			var region = fact2;
			var message = fact3;
			throw new Error('TODO in module `' + moduleName + '` ' + _Debug_regionToString(region) + '\n\n' + message);

		case 9:
			var moduleName = fact1;
			var region = fact2;
			var value = fact3;
			var message = fact4;
			throw new Error(
				'TODO in module `' + moduleName + '` from the `case` expression '
				+ _Debug_regionToString(region) + '\n\nIt received the following value:\n\n    '
				+ _Debug_toString(value).replace('\n', '\n    ')
				+ '\n\nBut the branch that handles it says:\n\n    ' + message.replace('\n', '\n    ')
			);

		case 10:
			throw new Error('Bug in https://github.com/elm/virtual-dom/issues');

		case 11:
			throw new Error('Cannot perform mod 0. Division by zero error.');
	}
}

function _Debug_regionToString(region)
{
	if (region.aZ.K === region.av.K)
	{
		return 'on line ' + region.aZ.K;
	}
	return 'on lines ' + region.aZ.K + ' through ' + region.av.K;
}



// EQUALITY

function _Utils_eq(x, y)
{
	for (
		var pair, stack = [], isEqual = _Utils_eqHelp(x, y, 0, stack);
		isEqual && (pair = stack.pop());
		isEqual = _Utils_eqHelp(pair.a, pair.b, 0, stack)
		)
	{}

	return isEqual;
}

function _Utils_eqHelp(x, y, depth, stack)
{
	if (depth > 100)
	{
		stack.push(_Utils_Tuple2(x,y));
		return true;
	}

	if (x === y)
	{
		return true;
	}

	if (typeof x !== 'object' || x === null || y === null)
	{
		typeof x === 'function' && _Debug_crash(5);
		return false;
	}

	/**_UNUSED/
	if (x.$ === 'Set_elm_builtin')
	{
		x = elm$core$Set$toList(x);
		y = elm$core$Set$toList(y);
	}
	if (x.$ === 'RBNode_elm_builtin' || x.$ === 'RBEmpty_elm_builtin')
	{
		x = elm$core$Dict$toList(x);
		y = elm$core$Dict$toList(y);
	}
	//*/

	/**/
	if (x.$ < 0)
	{
		x = elm$core$Dict$toList(x);
		y = elm$core$Dict$toList(y);
	}
	//*/

	for (var key in x)
	{
		if (!_Utils_eqHelp(x[key], y[key], depth + 1, stack))
		{
			return false;
		}
	}
	return true;
}

var _Utils_equal = F2(_Utils_eq);
var _Utils_notEqual = F2(function(a, b) { return !_Utils_eq(a,b); });



// COMPARISONS

// Code in Generate/JavaScript.hs, Basics.js, and List.js depends on
// the particular integer values assigned to LT, EQ, and GT.

function _Utils_cmp(x, y, ord)
{
	if (typeof x !== 'object')
	{
		return x === y ? /*EQ*/ 0 : x < y ? /*LT*/ -1 : /*GT*/ 1;
	}

	/**_UNUSED/
	if (x instanceof String)
	{
		var a = x.valueOf();
		var b = y.valueOf();
		return a === b ? 0 : a < b ? -1 : 1;
	}
	//*/

	/**/
	if (!x.$)
	//*/
	/**_UNUSED/
	if (x.$[0] === '#')
	//*/
	{
		return (ord = _Utils_cmp(x.a, y.a))
			? ord
			: (ord = _Utils_cmp(x.b, y.b))
				? ord
				: _Utils_cmp(x.c, y.c);
	}

	// traverse conses until end of a list or a mismatch
	for (; x.b && y.b && !(ord = _Utils_cmp(x.a, y.a)); x = x.b, y = y.b) {} // WHILE_CONSES
	return ord || (x.b ? /*GT*/ 1 : y.b ? /*LT*/ -1 : /*EQ*/ 0);
}

var _Utils_lt = F2(function(a, b) { return _Utils_cmp(a, b) < 0; });
var _Utils_le = F2(function(a, b) { return _Utils_cmp(a, b) < 1; });
var _Utils_gt = F2(function(a, b) { return _Utils_cmp(a, b) > 0; });
var _Utils_ge = F2(function(a, b) { return _Utils_cmp(a, b) >= 0; });

var _Utils_compare = F2(function(x, y)
{
	var n = _Utils_cmp(x, y);
	return n < 0 ? elm$core$Basics$LT : n ? elm$core$Basics$GT : elm$core$Basics$EQ;
});


// COMMON VALUES

var _Utils_Tuple0 = 0;
var _Utils_Tuple0_UNUSED = { $: '#0' };

function _Utils_Tuple2(a, b) { return { a: a, b: b }; }
function _Utils_Tuple2_UNUSED(a, b) { return { $: '#2', a: a, b: b }; }

function _Utils_Tuple3(a, b, c) { return { a: a, b: b, c: c }; }
function _Utils_Tuple3_UNUSED(a, b, c) { return { $: '#3', a: a, b: b, c: c }; }

function _Utils_chr(c) { return c; }
function _Utils_chr_UNUSED(c) { return new String(c); }


// RECORDS

function _Utils_update(oldRecord, updatedFields)
{
	var newRecord = {};

	for (var key in oldRecord)
	{
		newRecord[key] = oldRecord[key];
	}

	for (var key in updatedFields)
	{
		newRecord[key] = updatedFields[key];
	}

	return newRecord;
}


// APPEND

var _Utils_append = F2(_Utils_ap);

function _Utils_ap(xs, ys)
{
	// append Strings
	if (typeof xs === 'string')
	{
		return xs + ys;
	}

	// append Lists
	if (!xs.b)
	{
		return ys;
	}
	var root = _List_Cons(xs.a, ys);
	xs = xs.b
	for (var curr = root; xs.b; xs = xs.b) // WHILE_CONS
	{
		curr = curr.b = _List_Cons(xs.a, ys);
	}
	return root;
}



var _String_cons = F2(function(chr, str)
{
	return chr + str;
});

function _String_uncons(string)
{
	var word = string.charCodeAt(0);
	return word
		? elm$core$Maybe$Just(
			0xD800 <= word && word <= 0xDBFF
				? _Utils_Tuple2(_Utils_chr(string[0] + string[1]), string.slice(2))
				: _Utils_Tuple2(_Utils_chr(string[0]), string.slice(1))
		)
		: elm$core$Maybe$Nothing;
}

var _String_append = F2(function(a, b)
{
	return a + b;
});

function _String_length(str)
{
	return str.length;
}

var _String_map = F2(function(func, string)
{
	var len = string.length;
	var array = new Array(len);
	var i = 0;
	while (i < len)
	{
		var word = string.charCodeAt(i);
		if (0xD800 <= word && word <= 0xDBFF)
		{
			array[i] = func(_Utils_chr(string[i] + string[i+1]));
			i += 2;
			continue;
		}
		array[i] = func(_Utils_chr(string[i]));
		i++;
	}
	return array.join('');
});

var _String_filter = F2(function(isGood, str)
{
	var arr = [];
	var len = str.length;
	var i = 0;
	while (i < len)
	{
		var char = str[i];
		var word = str.charCodeAt(i);
		i++;
		if (0xD800 <= word && word <= 0xDBFF)
		{
			char += str[i];
			i++;
		}

		if (isGood(_Utils_chr(char)))
		{
			arr.push(char);
		}
	}
	return arr.join('');
});

function _String_reverse(str)
{
	var len = str.length;
	var arr = new Array(len);
	var i = 0;
	while (i < len)
	{
		var word = str.charCodeAt(i);
		if (0xD800 <= word && word <= 0xDBFF)
		{
			arr[len - i] = str[i + 1];
			i++;
			arr[len - i] = str[i - 1];
			i++;
		}
		else
		{
			arr[len - i] = str[i];
			i++;
		}
	}
	return arr.join('');
}

var _String_foldl = F3(function(func, state, string)
{
	var len = string.length;
	var i = 0;
	while (i < len)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		i++;
		if (0xD800 <= word && word <= 0xDBFF)
		{
			char += string[i];
			i++;
		}
		state = A2(func, _Utils_chr(char), state);
	}
	return state;
});

var _String_foldr = F3(function(func, state, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		state = A2(func, _Utils_chr(char), state);
	}
	return state;
});

var _String_split = F2(function(sep, str)
{
	return str.split(sep);
});

var _String_join = F2(function(sep, strs)
{
	return strs.join(sep);
});

var _String_slice = F3(function(start, end, str) {
	return str.slice(start, end);
});

function _String_trim(str)
{
	return str.trim();
}

function _String_trimLeft(str)
{
	return str.replace(/^\s+/, '');
}

function _String_trimRight(str)
{
	return str.replace(/\s+$/, '');
}

function _String_words(str)
{
	return _List_fromArray(str.trim().split(/\s+/g));
}

function _String_lines(str)
{
	return _List_fromArray(str.split(/\r\n|\r|\n/g));
}

function _String_toUpper(str)
{
	return str.toUpperCase();
}

function _String_toLower(str)
{
	return str.toLowerCase();
}

var _String_any = F2(function(isGood, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		if (isGood(_Utils_chr(char)))
		{
			return true;
		}
	}
	return false;
});

var _String_all = F2(function(isGood, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		if (!isGood(_Utils_chr(char)))
		{
			return false;
		}
	}
	return true;
});

var _String_contains = F2(function(sub, str)
{
	return str.indexOf(sub) > -1;
});

var _String_startsWith = F2(function(sub, str)
{
	return str.indexOf(sub) === 0;
});

var _String_endsWith = F2(function(sub, str)
{
	return str.length >= sub.length &&
		str.lastIndexOf(sub) === str.length - sub.length;
});

var _String_indexes = F2(function(sub, str)
{
	var subLen = sub.length;

	if (subLen < 1)
	{
		return _List_Nil;
	}

	var i = 0;
	var is = [];

	while ((i = str.indexOf(sub, i)) > -1)
	{
		is.push(i);
		i = i + subLen;
	}

	return _List_fromArray(is);
});


// TO STRING

function _String_fromNumber(number)
{
	return number + '';
}


// INT CONVERSIONS

function _String_toInt(s)
{
	var len = s.length;

	// if empty
	if (len === 0)
	{
		return elm$core$Maybe$Nothing;
	}

	// if hex
	var c = s[0];
	if (c === '0' && s[1] === 'x')
	{
		for (var i = 2; i < len; ++i)
		{
			var c = s[i];
			if (('0' <= c && c <= '9') || ('A' <= c && c <= 'F') || ('a' <= c && c <= 'f'))
			{
				continue;
			}
			return elm$core$Maybe$Nothing;
		}
		return elm$core$Maybe$Just(parseInt(s, 16));
	}

	// is decimal
	if (c > '9' || (c < '0' && ((c !== '-' && c !== '+') || len === 1)))
	{
		return elm$core$Maybe$Nothing;
	}
	for (var i = 1; i < len; ++i)
	{
		var c = s[i];
		if (c < '0' || '9' < c)
		{
			return elm$core$Maybe$Nothing;
		}
	}

	return elm$core$Maybe$Just(parseInt(s, 10));
}


// FLOAT CONVERSIONS

function _String_toFloat(s)
{
	// check if it is a hex, octal, or binary number
	if (s.length === 0 || /[\sxbo]/.test(s))
	{
		return elm$core$Maybe$Nothing;
	}
	var n = +s;
	// faster isNaN check
	return n === n ? elm$core$Maybe$Just(n) : elm$core$Maybe$Nothing;
}

function _String_fromList(chars)
{
	return _List_toArray(chars).join('');
}





// STRINGS


var _Parser_isSubString = F5(function(smallString, offset, row, col, bigString)
{
	var smallLength = smallString.length;
	var isGood = offset + smallLength <= bigString.length;

	for (var i = 0; isGood && i < smallLength; )
	{
		var code = bigString.charCodeAt(offset);
		isGood =
			smallString[i++] === bigString[offset++]
			&& (
				code === 0x000A /* \n */
					? ( row++, col=1 )
					: ( col++, (code & 0xF800) === 0xD800 ? smallString[i++] === bigString[offset++] : 1 )
			)
	}

	return _Utils_Tuple3(isGood ? offset : -1, row, col);
});



// CHARS


var _Parser_isSubChar = F3(function(predicate, offset, string)
{
	return (
		string.length <= offset
			? -1
			:
		(string.charCodeAt(offset) & 0xF800) === 0xD800
			? (predicate(_Utils_chr(string.substr(offset, 2))) ? offset + 2 : -1)
			:
		(predicate(_Utils_chr(string[offset]))
			? ((string[offset] === '\n') ? -2 : (offset + 1))
			: -1
		)
	);
});


var _Parser_isAsciiChar = F3(function(char, offset, string)
{
	return char[0] === string[offset];
});



// FIND STRING


var _Parser_findSubString = F5(function(smallString, offset, row, col, bigString)
{
	var newOffset = bigString.indexOf(smallString, offset);
	var target = newOffset < 0 ? bigString.length : newOffset + smallString.length;

	while (offset < target)
	{
		var code = bigString.charCodeAt(offset++);
		code === 0x000A /* \n */
			? ( col=1, row++ )
			: ( col++, (code & 0xF800) === 0xD800 && offset++ )
	}

	return _Utils_Tuple3(newOffset, row, col);
});



// MATH

var _Basics_add = F2(function(a, b) { return a + b; });
var _Basics_sub = F2(function(a, b) { return a - b; });
var _Basics_mul = F2(function(a, b) { return a * b; });
var _Basics_fdiv = F2(function(a, b) { return a / b; });
var _Basics_idiv = F2(function(a, b) { return (a / b) | 0; });
var _Basics_pow = F2(Math.pow);

var _Basics_remainderBy = F2(function(b, a) { return a % b; });

// https://www.microsoft.com/en-us/research/wp-content/uploads/2016/02/divmodnote-letter.pdf
var _Basics_modBy = F2(function(modulus, x)
{
	var answer = x % modulus;
	return modulus === 0
		? _Debug_crash(11)
		:
	((answer > 0 && modulus < 0) || (answer < 0 && modulus > 0))
		? answer + modulus
		: answer;
});


// TRIGONOMETRY

var _Basics_pi = Math.PI;
var _Basics_e = Math.E;
var _Basics_cos = Math.cos;
var _Basics_sin = Math.sin;
var _Basics_tan = Math.tan;
var _Basics_acos = Math.acos;
var _Basics_asin = Math.asin;
var _Basics_atan = Math.atan;
var _Basics_atan2 = F2(Math.atan2);


// MORE MATH

function _Basics_toFloat(x) { return x; }
function _Basics_truncate(n) { return n | 0; }
function _Basics_isInfinite(n) { return n === Infinity || n === -Infinity; }

var _Basics_ceiling = Math.ceil;
var _Basics_floor = Math.floor;
var _Basics_round = Math.round;
var _Basics_sqrt = Math.sqrt;
var _Basics_log = Math.log;
var _Basics_isNaN = isNaN;


// BOOLEANS

function _Basics_not(bool) { return !bool; }
var _Basics_and = F2(function(a, b) { return a && b; });
var _Basics_or  = F2(function(a, b) { return a || b; });
var _Basics_xor = F2(function(a, b) { return a !== b; });



function _Char_toCode(char)
{
	var code = char.charCodeAt(0);
	if (0xD800 <= code && code <= 0xDBFF)
	{
		return (code - 0xD800) * 0x400 + char.charCodeAt(1) - 0xDC00 + 0x10000
	}
	return code;
}

function _Char_fromCode(code)
{
	return _Utils_chr(
		(code < 0 || 0x10FFFF < code)
			? '\uFFFD'
			:
		(code <= 0xFFFF)
			? String.fromCharCode(code)
			:
		(code -= 0x10000,
			String.fromCharCode(Math.floor(code / 0x400) + 0xD800)
			+
			String.fromCharCode(code % 0x400 + 0xDC00)
		)
	);
}

function _Char_toUpper(char)
{
	return _Utils_chr(char.toUpperCase());
}

function _Char_toLower(char)
{
	return _Utils_chr(char.toLowerCase());
}

function _Char_toLocaleUpper(char)
{
	return _Utils_chr(char.toLocaleUpperCase());
}

function _Char_toLocaleLower(char)
{
	return _Utils_chr(char.toLocaleLowerCase());
}



// CORE DECODERS

function _Json_succeed(msg)
{
	return {
		$: 0,
		a: msg
	};
}

function _Json_fail(msg)
{
	return {
		$: 1,
		a: msg
	};
}

var _Json_decodeInt = { $: 2 };
var _Json_decodeBool = { $: 3 };
var _Json_decodeFloat = { $: 4 };
var _Json_decodeValue = { $: 5 };
var _Json_decodeString = { $: 6 };

function _Json_decodeList(decoder) { return { $: 7, b: decoder }; }
function _Json_decodeArray(decoder) { return { $: 8, b: decoder }; }

function _Json_decodeNull(value) { return { $: 9, c: value }; }

var _Json_decodeField = F2(function(field, decoder)
{
	return {
		$: 10,
		d: field,
		b: decoder
	};
});

var _Json_decodeIndex = F2(function(index, decoder)
{
	return {
		$: 11,
		e: index,
		b: decoder
	};
});

function _Json_decodeKeyValuePairs(decoder)
{
	return {
		$: 12,
		b: decoder
	};
}

function _Json_mapMany(f, decoders)
{
	return {
		$: 13,
		f: f,
		g: decoders
	};
}

var _Json_andThen = F2(function(callback, decoder)
{
	return {
		$: 14,
		b: decoder,
		h: callback
	};
});

function _Json_oneOf(decoders)
{
	return {
		$: 15,
		g: decoders
	};
}


// DECODING OBJECTS

var _Json_map1 = F2(function(f, d1)
{
	return _Json_mapMany(f, [d1]);
});

var _Json_map2 = F3(function(f, d1, d2)
{
	return _Json_mapMany(f, [d1, d2]);
});

var _Json_map3 = F4(function(f, d1, d2, d3)
{
	return _Json_mapMany(f, [d1, d2, d3]);
});

var _Json_map4 = F5(function(f, d1, d2, d3, d4)
{
	return _Json_mapMany(f, [d1, d2, d3, d4]);
});

var _Json_map5 = F6(function(f, d1, d2, d3, d4, d5)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5]);
});

var _Json_map6 = F7(function(f, d1, d2, d3, d4, d5, d6)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6]);
});

var _Json_map7 = F8(function(f, d1, d2, d3, d4, d5, d6, d7)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7]);
});

var _Json_map8 = F9(function(f, d1, d2, d3, d4, d5, d6, d7, d8)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7, d8]);
});


// DECODE

var _Json_runOnString = F2(function(decoder, string)
{
	try
	{
		var value = JSON.parse(string);
		return _Json_runHelp(decoder, value);
	}
	catch (e)
	{
		return elm$core$Result$Err(A2(elm$json$Json$Decode$Failure, 'This is not valid JSON! ' + e.message, _Json_wrap(string)));
	}
});

var _Json_run = F2(function(decoder, value)
{
	return _Json_runHelp(decoder, _Json_unwrap(value));
});

function _Json_runHelp(decoder, value)
{
	switch (decoder.$)
	{
		case 3:
			return (typeof value === 'boolean')
				? elm$core$Result$Ok(value)
				: _Json_expecting('a BOOL', value);

		case 2:
			if (typeof value !== 'number') {
				return _Json_expecting('an INT', value);
			}

			if (-2147483647 < value && value < 2147483647 && (value | 0) === value) {
				return elm$core$Result$Ok(value);
			}

			if (isFinite(value) && !(value % 1)) {
				return elm$core$Result$Ok(value);
			}

			return _Json_expecting('an INT', value);

		case 4:
			return (typeof value === 'number')
				? elm$core$Result$Ok(value)
				: _Json_expecting('a FLOAT', value);

		case 6:
			return (typeof value === 'string')
				? elm$core$Result$Ok(value)
				: (value instanceof String)
					? elm$core$Result$Ok(value + '')
					: _Json_expecting('a STRING', value);

		case 9:
			return (value === null)
				? elm$core$Result$Ok(decoder.c)
				: _Json_expecting('null', value);

		case 5:
			return elm$core$Result$Ok(_Json_wrap(value));

		case 7:
			if (!Array.isArray(value))
			{
				return _Json_expecting('a LIST', value);
			}
			return _Json_runArrayDecoder(decoder.b, value, _List_fromArray);

		case 8:
			if (!Array.isArray(value))
			{
				return _Json_expecting('an ARRAY', value);
			}
			return _Json_runArrayDecoder(decoder.b, value, _Json_toElmArray);

		case 10:
			var field = decoder.d;
			if (typeof value !== 'object' || value === null || !(field in value))
			{
				return _Json_expecting('an OBJECT with a field named `' + field + '`', value);
			}
			var result = _Json_runHelp(decoder.b, value[field]);
			return (elm$core$Result$isOk(result)) ? result : elm$core$Result$Err(A2(elm$json$Json$Decode$Field, field, result.a));

		case 11:
			var index = decoder.e;
			if (!Array.isArray(value))
			{
				return _Json_expecting('an ARRAY', value);
			}
			if (index >= value.length)
			{
				return _Json_expecting('a LONGER array. Need index ' + index + ' but only see ' + value.length + ' entries', value);
			}
			var result = _Json_runHelp(decoder.b, value[index]);
			return (elm$core$Result$isOk(result)) ? result : elm$core$Result$Err(A2(elm$json$Json$Decode$Index, index, result.a));

		case 12:
			if (typeof value !== 'object' || value === null || Array.isArray(value))
			{
				return _Json_expecting('an OBJECT', value);
			}

			var keyValuePairs = _List_Nil;
			// TODO test perf of Object.keys and switch when support is good enough
			for (var key in value)
			{
				if (value.hasOwnProperty(key))
				{
					var result = _Json_runHelp(decoder.b, value[key]);
					if (!elm$core$Result$isOk(result))
					{
						return elm$core$Result$Err(A2(elm$json$Json$Decode$Field, key, result.a));
					}
					keyValuePairs = _List_Cons(_Utils_Tuple2(key, result.a), keyValuePairs);
				}
			}
			return elm$core$Result$Ok(elm$core$List$reverse(keyValuePairs));

		case 13:
			var answer = decoder.f;
			var decoders = decoder.g;
			for (var i = 0; i < decoders.length; i++)
			{
				var result = _Json_runHelp(decoders[i], value);
				if (!elm$core$Result$isOk(result))
				{
					return result;
				}
				answer = answer(result.a);
			}
			return elm$core$Result$Ok(answer);

		case 14:
			var result = _Json_runHelp(decoder.b, value);
			return (!elm$core$Result$isOk(result))
				? result
				: _Json_runHelp(decoder.h(result.a), value);

		case 15:
			var errors = _List_Nil;
			for (var temp = decoder.g; temp.b; temp = temp.b) // WHILE_CONS
			{
				var result = _Json_runHelp(temp.a, value);
				if (elm$core$Result$isOk(result))
				{
					return result;
				}
				errors = _List_Cons(result.a, errors);
			}
			return elm$core$Result$Err(elm$json$Json$Decode$OneOf(elm$core$List$reverse(errors)));

		case 1:
			return elm$core$Result$Err(A2(elm$json$Json$Decode$Failure, decoder.a, _Json_wrap(value)));

		case 0:
			return elm$core$Result$Ok(decoder.a);
	}
}

function _Json_runArrayDecoder(decoder, value, toElmValue)
{
	var len = value.length;
	var array = new Array(len);
	for (var i = 0; i < len; i++)
	{
		var result = _Json_runHelp(decoder, value[i]);
		if (!elm$core$Result$isOk(result))
		{
			return elm$core$Result$Err(A2(elm$json$Json$Decode$Index, i, result.a));
		}
		array[i] = result.a;
	}
	return elm$core$Result$Ok(toElmValue(array));
}

function _Json_toElmArray(array)
{
	return A2(elm$core$Array$initialize, array.length, function(i) { return array[i]; });
}

function _Json_expecting(type, value)
{
	return elm$core$Result$Err(A2(elm$json$Json$Decode$Failure, 'Expecting ' + type, _Json_wrap(value)));
}


// EQUALITY

function _Json_equality(x, y)
{
	if (x === y)
	{
		return true;
	}

	if (x.$ !== y.$)
	{
		return false;
	}

	switch (x.$)
	{
		case 0:
		case 1:
			return x.a === y.a;

		case 3:
		case 2:
		case 4:
		case 6:
		case 5:
			return true;

		case 9:
			return x.c === y.c;

		case 7:
		case 8:
		case 12:
			return _Json_equality(x.b, y.b);

		case 10:
			return x.d === y.d && _Json_equality(x.b, y.b);

		case 11:
			return x.e === y.e && _Json_equality(x.b, y.b);

		case 13:
			return x.f === y.f && _Json_listEquality(x.g, y.g);

		case 14:
			return x.h === y.h && _Json_equality(x.b, y.b);

		case 15:
			return _Json_listEquality(x.g, y.g);
	}
}

function _Json_listEquality(aDecoders, bDecoders)
{
	var len = aDecoders.length;
	if (len !== bDecoders.length)
	{
		return false;
	}
	for (var i = 0; i < len; i++)
	{
		if (!_Json_equality(aDecoders[i], bDecoders[i]))
		{
			return false;
		}
	}
	return true;
}


// ENCODE

var _Json_encode = F2(function(indentLevel, value)
{
	return JSON.stringify(_Json_unwrap(value), null, indentLevel);
});

function _Json_wrap_UNUSED(value) { return { $: 0, a: value }; }
function _Json_unwrap_UNUSED(value) { return value.a; }

function _Json_wrap(value) { return value; }
function _Json_unwrap(value) { return value; }

function _Json_emptyArray() { return []; }
function _Json_emptyObject() { return {}; }

var _Json_addField = F3(function(key, value, object)
{
	object[key] = _Json_unwrap(value);
	return object;
});

function _Json_addEntry(func)
{
	return F2(function(entry, array)
	{
		array.push(_Json_unwrap(func(entry)));
		return array;
	});
}

var _Json_encodeNull = _Json_wrap(null);



// TASKS

function _Scheduler_succeed(value)
{
	return {
		$: 0,
		a: value
	};
}

function _Scheduler_fail(error)
{
	return {
		$: 1,
		a: error
	};
}

function _Scheduler_binding(callback)
{
	return {
		$: 2,
		b: callback,
		c: null
	};
}

var _Scheduler_andThen = F2(function(callback, task)
{
	return {
		$: 3,
		b: callback,
		d: task
	};
});

var _Scheduler_onError = F2(function(callback, task)
{
	return {
		$: 4,
		b: callback,
		d: task
	};
});

function _Scheduler_receive(callback)
{
	return {
		$: 5,
		b: callback
	};
}


// PROCESSES

var _Scheduler_guid = 0;

function _Scheduler_rawSpawn(task)
{
	var proc = {
		$: 0,
		e: _Scheduler_guid++,
		f: task,
		g: null,
		h: []
	};

	_Scheduler_enqueue(proc);

	return proc;
}

function _Scheduler_spawn(task)
{
	return _Scheduler_binding(function(callback) {
		callback(_Scheduler_succeed(_Scheduler_rawSpawn(task)));
	});
}

function _Scheduler_rawSend(proc, msg)
{
	proc.h.push(msg);
	_Scheduler_enqueue(proc);
}

var _Scheduler_send = F2(function(proc, msg)
{
	return _Scheduler_binding(function(callback) {
		_Scheduler_rawSend(proc, msg);
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
});

function _Scheduler_kill(proc)
{
	return _Scheduler_binding(function(callback) {
		var task = proc.f;
		if (task.$ === 2 && task.c)
		{
			task.c();
		}

		proc.f = null;

		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
}


/* STEP PROCESSES

type alias Process =
  { $ : tag
  , id : unique_id
  , root : Task
  , stack : null | { $: SUCCEED | FAIL, a: callback, b: stack }
  , mailbox : [msg]
  }

*/


var _Scheduler_working = false;
var _Scheduler_queue = [];


function _Scheduler_enqueue(proc)
{
	_Scheduler_queue.push(proc);
	if (_Scheduler_working)
	{
		return;
	}
	_Scheduler_working = true;
	while (proc = _Scheduler_queue.shift())
	{
		_Scheduler_step(proc);
	}
	_Scheduler_working = false;
}


function _Scheduler_step(proc)
{
	while (proc.f)
	{
		var rootTag = proc.f.$;
		if (rootTag === 0 || rootTag === 1)
		{
			while (proc.g && proc.g.$ !== rootTag)
			{
				proc.g = proc.g.i;
			}
			if (!proc.g)
			{
				return;
			}
			proc.f = proc.g.b(proc.f.a);
			proc.g = proc.g.i;
		}
		else if (rootTag === 2)
		{
			proc.f.c = proc.f.b(function(newRoot) {
				proc.f = newRoot;
				_Scheduler_enqueue(proc);
			});
			return;
		}
		else if (rootTag === 5)
		{
			if (proc.h.length === 0)
			{
				return;
			}
			proc.f = proc.f.b(proc.h.shift());
		}
		else // if (rootTag === 3 || rootTag === 4)
		{
			proc.g = {
				$: rootTag === 3 ? 0 : 1,
				b: proc.f.b,
				i: proc.g
			};
			proc.f = proc.f.d;
		}
	}
}



function _Process_sleep(time)
{
	return _Scheduler_binding(function(callback) {
		var id = setTimeout(function() {
			callback(_Scheduler_succeed(_Utils_Tuple0));
		}, time);

		return function() { clearTimeout(id); };
	});
}




// PROGRAMS


var _Platform_worker = F4(function(impl, flagDecoder, debugMetadata, object)
{
	object['worker'] = function(flags)
	{
		return _Platform_initialize(
			flagDecoder,
			flags,
			impl.bj,
			impl.bA,
			impl.bx,
			function() { return function() {} }
		);
	};
	return object;
});



// INITIALIZE A PROGRAM


function _Platform_initialize(flagDecoder, flags, init, update, subscriptions, stepperBuilder)
{
	var result = A2(_Json_run, flagDecoder, _Json_wrap(flags));
	elm$core$Result$isOk(result) || _Debug_crash(2, result.a);
	var managers = {};
	result = init(result.a);
	var model = result.a;
	var stepper = stepperBuilder(sendToApp, model);
	var ports = _Platform_setupEffects(managers, sendToApp);

	function sendToApp(msg, viewMetadata)
	{
		result = A2(update, msg, model);
		stepper(model = result.a, viewMetadata);
		_Platform_dispatchEffects(managers, result.b, subscriptions(model));
	}

	_Platform_dispatchEffects(managers, result.b, subscriptions(model));

	return ports ? { ports: ports } : {};
}



// TRACK PRELOADS
//
// This is used by code in elm/browser and elm/http
// to register any HTTP requests that are triggered by init.
//


var _Platform_preload;


function _Platform_registerPreload(url)
{
	_Platform_preload.add(url);
}



// EFFECT MANAGERS


var _Platform_effectManagers = {};


function _Platform_setupEffects(managers, sendToApp)
{
	var ports;

	// setup all necessary effect managers
	for (var key in _Platform_effectManagers)
	{
		var manager = _Platform_effectManagers[key];

		if (manager.a)
		{
			ports = ports || {};
			ports[key] = manager.a(key, sendToApp);
		}

		managers[key] = _Platform_instantiateManager(manager, sendToApp);
	}

	return ports;
}


function _Platform_createManager(init, onEffects, onSelfMsg, cmdMap, subMap)
{
	return {
		b: init,
		c: onEffects,
		d: onSelfMsg,
		e: cmdMap,
		f: subMap
	};
}


function _Platform_instantiateManager(info, sendToApp)
{
	var router = {
		g: sendToApp,
		h: undefined
	};

	var onEffects = info.c;
	var onSelfMsg = info.d;
	var cmdMap = info.e;
	var subMap = info.f;

	function loop(state)
	{
		return A2(_Scheduler_andThen, loop, _Scheduler_receive(function(msg)
		{
			var value = msg.a;

			if (msg.$ === 0)
			{
				return A3(onSelfMsg, router, value, state);
			}

			return cmdMap && subMap
				? A4(onEffects, router, value.i, value.j, state)
				: A3(onEffects, router, cmdMap ? value.i : value.j, state);
		}));
	}

	return router.h = _Scheduler_rawSpawn(A2(_Scheduler_andThen, loop, info.b));
}



// ROUTING


var _Platform_sendToApp = F2(function(router, msg)
{
	return _Scheduler_binding(function(callback)
	{
		router.g(msg);
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
});


var _Platform_sendToSelf = F2(function(router, msg)
{
	return A2(_Scheduler_send, router.h, {
		$: 0,
		a: msg
	});
});



// BAGS


function _Platform_leaf(home)
{
	return function(value)
	{
		return {
			$: 1,
			k: home,
			l: value
		};
	};
}


function _Platform_batch(list)
{
	return {
		$: 2,
		m: list
	};
}


var _Platform_map = F2(function(tagger, bag)
{
	return {
		$: 3,
		n: tagger,
		o: bag
	}
});



// PIPE BAGS INTO EFFECT MANAGERS


function _Platform_dispatchEffects(managers, cmdBag, subBag)
{
	var effectsDict = {};
	_Platform_gatherEffects(true, cmdBag, effectsDict, null);
	_Platform_gatherEffects(false, subBag, effectsDict, null);

	for (var home in managers)
	{
		_Scheduler_rawSend(managers[home], {
			$: 'fx',
			a: effectsDict[home] || { i: _List_Nil, j: _List_Nil }
		});
	}
}


function _Platform_gatherEffects(isCmd, bag, effectsDict, taggers)
{
	switch (bag.$)
	{
		case 1:
			var home = bag.k;
			var effect = _Platform_toEffect(isCmd, home, taggers, bag.l);
			effectsDict[home] = _Platform_insert(isCmd, effect, effectsDict[home]);
			return;

		case 2:
			for (var list = bag.m; list.b; list = list.b) // WHILE_CONS
			{
				_Platform_gatherEffects(isCmd, list.a, effectsDict, taggers);
			}
			return;

		case 3:
			_Platform_gatherEffects(isCmd, bag.o, effectsDict, {
				p: bag.n,
				q: taggers
			});
			return;
	}
}


function _Platform_toEffect(isCmd, home, taggers, value)
{
	function applyTaggers(x)
	{
		for (var temp = taggers; temp; temp = temp.q)
		{
			x = temp.p(x);
		}
		return x;
	}

	var map = isCmd
		? _Platform_effectManagers[home].e
		: _Platform_effectManagers[home].f;

	return A2(map, applyTaggers, value)
}


function _Platform_insert(isCmd, newEffect, effects)
{
	effects = effects || { i: _List_Nil, j: _List_Nil };

	isCmd
		? (effects.i = _List_Cons(newEffect, effects.i))
		: (effects.j = _List_Cons(newEffect, effects.j));

	return effects;
}



// PORTS


function _Platform_checkPortName(name)
{
	if (_Platform_effectManagers[name])
	{
		_Debug_crash(3, name)
	}
}



// OUTGOING PORTS


function _Platform_outgoingPort(name, converter)
{
	_Platform_checkPortName(name);
	_Platform_effectManagers[name] = {
		e: _Platform_outgoingPortMap,
		r: converter,
		a: _Platform_setupOutgoingPort
	};
	return _Platform_leaf(name);
}


var _Platform_outgoingPortMap = F2(function(tagger, value) { return value; });


function _Platform_setupOutgoingPort(name)
{
	var subs = [];
	var converter = _Platform_effectManagers[name].r;

	// CREATE MANAGER

	var init = _Process_sleep(0);

	_Platform_effectManagers[name].b = init;
	_Platform_effectManagers[name].c = F3(function(router, cmdList, state)
	{
		for ( ; cmdList.b; cmdList = cmdList.b) // WHILE_CONS
		{
			// grab a separate reference to subs in case unsubscribe is called
			var currentSubs = subs;
			var value = _Json_unwrap(converter(cmdList.a));
			for (var i = 0; i < currentSubs.length; i++)
			{
				currentSubs[i](value);
			}
		}
		return init;
	});

	// PUBLIC API

	function subscribe(callback)
	{
		subs.push(callback);
	}

	function unsubscribe(callback)
	{
		// copy subs into a new array in case unsubscribe is called within a
		// subscribed callback
		subs = subs.slice();
		var index = subs.indexOf(callback);
		if (index >= 0)
		{
			subs.splice(index, 1);
		}
	}

	return {
		subscribe: subscribe,
		unsubscribe: unsubscribe
	};
}



// INCOMING PORTS


function _Platform_incomingPort(name, converter)
{
	_Platform_checkPortName(name);
	_Platform_effectManagers[name] = {
		f: _Platform_incomingPortMap,
		r: converter,
		a: _Platform_setupIncomingPort
	};
	return _Platform_leaf(name);
}


var _Platform_incomingPortMap = F2(function(tagger, finalTagger)
{
	return function(value)
	{
		return tagger(finalTagger(value));
	};
});


function _Platform_setupIncomingPort(name, sendToApp)
{
	var subs = _List_Nil;
	var converter = _Platform_effectManagers[name].r;

	// CREATE MANAGER

	var init = _Scheduler_succeed(null);

	_Platform_effectManagers[name].b = init;
	_Platform_effectManagers[name].c = F3(function(router, subList, state)
	{
		subs = subList;
		return init;
	});

	// PUBLIC API

	function send(incomingValue)
	{
		var result = A2(_Json_run, converter, _Json_wrap(incomingValue));

		elm$core$Result$isOk(result) || _Debug_crash(4, name, result.a);

		var value = result.a;
		for (var temp = subs; temp.b; temp = temp.b) // WHILE_CONS
		{
			sendToApp(temp.a(value));
		}
	}

	return { send: send };
}



// EXPORT ELM MODULES
//
// Have DEBUG and PROD versions so that we can (1) give nicer errors in
// debug mode and (2) not pay for the bits needed for that in prod mode.
//


function _Platform_export(exports)
{
	scope['Elm']
		? _Platform_mergeExportsProd(scope['Elm'], exports)
		: scope['Elm'] = exports;
}


function _Platform_mergeExportsProd(obj, exports)
{
	for (var name in exports)
	{
		(name in obj)
			? (typeof name === 'function')
				? _Debug_crash(6)
				: _Platform_mergeExportsProd(obj[name], exports[name])
			: (obj[name] = exports[name]);
	}
}


function _Platform_export_UNUSED(exports)
{
	scope['Elm']
		? _Platform_mergeExportsDebug('Elm', scope['Elm'], exports)
		: scope['Elm'] = exports;
}


function _Platform_mergeExportsDebug(moduleName, obj, exports)
{
	for (var name in exports)
	{
		(name in obj)
			? (typeof name === 'function')
				? _Debug_crash(6, moduleName)
				: _Platform_mergeExportsDebug(moduleName + '.' + name, obj[name], exports[name])
			: (obj[name] = exports[name]);
	}
}




// HELPERS


var _VirtualDom_doc = typeof document !== 'undefined' ? document : {};


function _VirtualDom_appendChild(parent, child)
{
	parent.appendChild(child);
}

var _VirtualDom_init = F4(function(virtualNode, flagDecoder, debugMetadata, object)
{
	// NOTE: this function needs _Platform_export available to work
	object['embed'] = function(node)
	{
		node.parentNode.replaceChild(
			_VirtualDom_render(virtualNode, function() {}),
			node
		);
	};
	return object;
});



// TEXT


function _VirtualDom_text(string)
{
	return {
		$: 0,
		a: string
	};
}



// NODE


var _VirtualDom_nodeNS = F2(function(namespace, tag)
{
	return F2(function(factList, kidList)
	{
		for (var kids = [], descendantsCount = 0; kidList.b; kidList = kidList.b) // WHILE_CONS
		{
			var kid = kidList.a;
			descendantsCount += (kid.b || 0);
			kids.push(kid);
		}
		descendantsCount += kids.length;

		return {
			$: 1,
			c: tag,
			d: _VirtualDom_organizeFacts(factList),
			e: kids,
			f: namespace,
			b: descendantsCount
		};
	});
});


var _VirtualDom_node = _VirtualDom_nodeNS(undefined);



// KEYED NODE


var _VirtualDom_keyedNodeNS = F2(function(namespace, tag)
{
	return F2(function(factList, kidList)
	{
		for (var kids = [], descendantsCount = 0; kidList.b; kidList = kidList.b) // WHILE_CONS
		{
			var kid = kidList.a;
			descendantsCount += (kid.b.b || 0);
			kids.push(kid);
		}
		descendantsCount += kids.length;

		return {
			$: 2,
			c: tag,
			d: _VirtualDom_organizeFacts(factList),
			e: kids,
			f: namespace,
			b: descendantsCount
		};
	});
});


var _VirtualDom_keyedNode = _VirtualDom_keyedNodeNS(undefined);



// CUSTOM


function _VirtualDom_custom(factList, model, render, diff)
{
	return {
		$: 3,
		d: _VirtualDom_organizeFacts(factList),
		g: model,
		h: render,
		i: diff
	};
}



// MAP


var _VirtualDom_map = F2(function(tagger, node)
{
	return {
		$: 4,
		j: tagger,
		k: node,
		b: 1 + (node.b || 0)
	};
});



// LAZY


function _VirtualDom_thunk(refs, thunk)
{
	return {
		$: 5,
		l: refs,
		m: thunk,
		k: undefined
	};
}

var _VirtualDom_lazy = F2(function(func, a)
{
	return _VirtualDom_thunk([func, a], function() {
		return func(a);
	});
});

var _VirtualDom_lazy2 = F3(function(func, a, b)
{
	return _VirtualDom_thunk([func, a, b], function() {
		return A2(func, a, b);
	});
});

var _VirtualDom_lazy3 = F4(function(func, a, b, c)
{
	return _VirtualDom_thunk([func, a, b, c], function() {
		return A3(func, a, b, c);
	});
});

var _VirtualDom_lazy4 = F5(function(func, a, b, c, d)
{
	return _VirtualDom_thunk([func, a, b, c, d], function() {
		return A4(func, a, b, c, d);
	});
});

var _VirtualDom_lazy5 = F6(function(func, a, b, c, d, e)
{
	return _VirtualDom_thunk([func, a, b, c, d, e], function() {
		return A5(func, a, b, c, d, e);
	});
});

var _VirtualDom_lazy6 = F7(function(func, a, b, c, d, e, f)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f], function() {
		return A6(func, a, b, c, d, e, f);
	});
});

var _VirtualDom_lazy7 = F8(function(func, a, b, c, d, e, f, g)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f, g], function() {
		return A7(func, a, b, c, d, e, f, g);
	});
});

var _VirtualDom_lazy8 = F9(function(func, a, b, c, d, e, f, g, h)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f, g, h], function() {
		return A8(func, a, b, c, d, e, f, g, h);
	});
});



// FACTS


var _VirtualDom_on = F2(function(key, handler)
{
	return {
		$: 'a0',
		n: key,
		o: handler
	};
});
var _VirtualDom_style = F2(function(key, value)
{
	return {
		$: 'a1',
		n: key,
		o: value
	};
});
var _VirtualDom_property = F2(function(key, value)
{
	return {
		$: 'a2',
		n: key,
		o: value
	};
});
var _VirtualDom_attribute = F2(function(key, value)
{
	return {
		$: 'a3',
		n: key,
		o: value
	};
});
var _VirtualDom_attributeNS = F3(function(namespace, key, value)
{
	return {
		$: 'a4',
		n: key,
		o: { f: namespace, o: value }
	};
});



// XSS ATTACK VECTOR CHECKS


function _VirtualDom_noScript(tag)
{
	return tag == 'script' ? 'p' : tag;
}

function _VirtualDom_noOnOrFormAction(key)
{
	return /^(on|formAction$)/i.test(key) ? 'data-' + key : key;
}

function _VirtualDom_noInnerHtmlOrFormAction(key)
{
	return key == 'innerHTML' || key == 'formAction' ? 'data-' + key : key;
}

function _VirtualDom_noJavaScriptUri(value)
{
	return /^\s*javascript:/i.test(value) ? '' : value;
}

function _VirtualDom_noJavaScriptUri_UNUSED(value)
{
	return /^\s*javascript:/i.test(value)
		? 'javascript:alert("This is an XSS vector. Please use ports or web components instead.")'
		: value;
}

function _VirtualDom_noJavaScriptOrHtmlUri(value)
{
	return /^\s*(javascript:|data:text\/html)/i.test(value) ? '' : value;
}

function _VirtualDom_noJavaScriptOrHtmlUri_UNUSED(value)
{
	return /^\s*(javascript:|data:text\/html)/i.test(value)
		? 'javascript:alert("This is an XSS vector. Please use ports or web components instead.")'
		: value;
}



// MAP FACTS


var _VirtualDom_mapAttribute = F2(function(func, attr)
{
	return (attr.$ === 'a0')
		? A2(_VirtualDom_on, attr.n, _VirtualDom_mapHandler(func, attr.o))
		: attr;
});

function _VirtualDom_mapHandler(func, handler)
{
	var tag = elm$virtual_dom$VirtualDom$toHandlerInt(handler);

	// 0 = Normal
	// 1 = MayStopPropagation
	// 2 = MayPreventDefault
	// 3 = Custom

	return {
		$: handler.$,
		a:
			A3(elm$json$Json$Decode$map2,
				!tag
					? _VirtualDom_mapTimed
					:
				tag < 3
					? _VirtualDom_mapEventTuple
					: _VirtualDom_mapEventRecord,
				elm$json$Json$Decode$succeed(func),
				handler.a
			)
	};
}

var _VirtualDom_mapTimed = F2(function(func, timed)
{
	return {
		$: timed.$,
		a: func(timed.a)
	};
});

var _VirtualDom_mapEventTuple = F2(function(func, tuple)
{
	return _Utils_Tuple2(
		_VirtualDom_mapTimed(func, tuple.a),
		tuple.b
	);
});

var _VirtualDom_mapEventRecord = F2(function(func, record)
{
	return {
		ac: _VirtualDom_mapTimed(func, record.ac),
		a_: record.a_,
		aP: record.aP
	}
});



// ORGANIZE FACTS


function _VirtualDom_organizeFacts(factList)
{
	for (var facts = {}; factList.b; factList = factList.b) // WHILE_CONS
	{
		var entry = factList.a;

		var tag = entry.$;
		var key = entry.n;
		var value = entry.o;

		if (tag === 'a2')
		{
			(key === 'className')
				? _VirtualDom_addClass(facts, key, _Json_unwrap(value))
				: facts[key] = _Json_unwrap(value);

			continue;
		}

		var subFacts = facts[tag] || (facts[tag] = {});
		(tag === 'a3' && key === 'class')
			? _VirtualDom_addClass(subFacts, key, value)
			: subFacts[key] = value;
	}

	return facts;
}

function _VirtualDom_addClass(object, key, newClass)
{
	var classes = object[key];
	object[key] = classes ? classes + ' ' + newClass : newClass;
}



// RENDER


function _VirtualDom_render(vNode, eventNode)
{
	var tag = vNode.$;

	if (tag === 5)
	{
		return _VirtualDom_render(vNode.k || (vNode.k = vNode.m()), eventNode);
	}

	if (tag === 0)
	{
		return _VirtualDom_doc.createTextNode(vNode.a);
	}

	if (tag === 4)
	{
		var subNode = vNode.k;
		var tagger = vNode.j;

		while (subNode.$ === 4)
		{
			typeof tagger !== 'object'
				? tagger = [tagger, subNode.j]
				: tagger.push(subNode.j);

			subNode = subNode.k;
		}

		var subEventRoot = { j: tagger, p: eventNode };
		var domNode = _VirtualDom_render(subNode, subEventRoot);
		domNode.elm_event_node_ref = subEventRoot;
		return domNode;
	}

	if (tag === 3)
	{
		var domNode = vNode.h(vNode.g);
		_VirtualDom_applyFacts(domNode, eventNode, vNode.d);
		return domNode;
	}

	// at this point `tag` must be 1 or 2

	var domNode = vNode.f
		? _VirtualDom_doc.createElementNS(vNode.f, vNode.c)
		: _VirtualDom_doc.createElement(vNode.c);

	_VirtualDom_applyFacts(domNode, eventNode, vNode.d);

	for (var kids = vNode.e, i = 0; i < kids.length; i++)
	{
		_VirtualDom_appendChild(domNode, _VirtualDom_render(tag === 1 ? kids[i] : kids[i].b, eventNode));
	}

	return domNode;
}



// APPLY FACTS


function _VirtualDom_applyFacts(domNode, eventNode, facts)
{
	for (var key in facts)
	{
		var value = facts[key];

		key === 'a1'
			? _VirtualDom_applyStyles(domNode, value)
			:
		key === 'a0'
			? _VirtualDom_applyEvents(domNode, eventNode, value)
			:
		key === 'a3'
			? _VirtualDom_applyAttrs(domNode, value)
			:
		key === 'a4'
			? _VirtualDom_applyAttrsNS(domNode, value)
			:
		(key !== 'value' || domNode[key] !== value) && (domNode[key] = value);
	}
}



// APPLY STYLES


function _VirtualDom_applyStyles(domNode, styles)
{
	var domNodeStyle = domNode.style;

	for (var key in styles)
	{
		domNodeStyle[key] = styles[key];
	}
}



// APPLY ATTRS


function _VirtualDom_applyAttrs(domNode, attrs)
{
	for (var key in attrs)
	{
		var value = attrs[key];
		value
			? domNode.setAttribute(key, value)
			: domNode.removeAttribute(key);
	}
}



// APPLY NAMESPACED ATTRS


function _VirtualDom_applyAttrsNS(domNode, nsAttrs)
{
	for (var key in nsAttrs)
	{
		var pair = nsAttrs[key];
		var namespace = pair.f;
		var value = pair.o;

		value
			? domNode.setAttributeNS(namespace, key, value)
			: domNode.removeAttributeNS(namespace, key);
	}
}



// APPLY EVENTS


function _VirtualDom_applyEvents(domNode, eventNode, events)
{
	var allCallbacks = domNode.elmFs || (domNode.elmFs = {});

	for (var key in events)
	{
		var newHandler = events[key];
		var oldCallback = allCallbacks[key];

		if (!newHandler)
		{
			domNode.removeEventListener(key, oldCallback);
			allCallbacks[key] = undefined;
			continue;
		}

		if (oldCallback)
		{
			var oldHandler = oldCallback.q;
			if (oldHandler.$ === newHandler.$)
			{
				oldCallback.q = newHandler;
				continue;
			}
			domNode.removeEventListener(key, oldCallback);
		}

		oldCallback = _VirtualDom_makeCallback(eventNode, newHandler);
		domNode.addEventListener(key, oldCallback,
			_VirtualDom_passiveSupported
			&& { passive: elm$virtual_dom$VirtualDom$toHandlerInt(newHandler) < 2 }
		);
		allCallbacks[key] = oldCallback;
	}
}



// PASSIVE EVENTS


var _VirtualDom_passiveSupported;

try
{
	window.addEventListener('t', null, Object.defineProperty({}, 'passive', {
		get: function() { _VirtualDom_passiveSupported = true; }
	}));
}
catch(e) {}



// EVENT HANDLERS


function _VirtualDom_makeCallback(eventNode, initialHandler)
{
	function callback(event)
	{
		var handler = callback.q;
		var result = _Json_runHelp(handler.a, event);

		if (!elm$core$Result$isOk(result))
		{
			return;
		}

		var ok = result.a;
		var timedMsg = _VirtualDom_eventToTimedMsg(event, elm$virtual_dom$VirtualDom$toHandlerInt(handler), ok);
		var message = timedMsg.a;
		var currentEventNode = eventNode;
		var tagger;
		var i;
		while (tagger = currentEventNode.j)
		{
			if (typeof tagger === 'function')
			{
				message = tagger(message);
			}
			else
			{
				for (var i = tagger.length; i--; )
				{
					message = tagger[i](message);
				}
			}
			currentEventNode = currentEventNode.p;
		}
		currentEventNode(message, elm$virtual_dom$VirtualDom$isSync(timedMsg));
	}

	callback.q = initialHandler;

	return callback;
}

function _VirtualDom_equalEvents(x, y)
{
	return x.$ === y.$ && _Json_equality(x.a, y.a);
}

function _VirtualDom_eventToTimedMsg(event, tag, value)
{
	// 0 = Normal
	// 1 = MayStopPropagation
	// 2 = MayPreventDefault
	// 3 = Custom

	if (!tag)
	{
		return value;
	}

	if (tag === 1 ? value.b : tag === 3 && value.a_) event.stopPropagation();
	if (tag === 2 ? value.b : tag === 3 && value.aP) event.preventDefault();

	return tag < 3 ? value.a : value.ac;
}



// DIFF


// TODO: Should we do patches like in iOS?
//
// type Patch
//   = At Int Patch
//   | Batch (List Patch)
//   | Change ...
//
// How could it not be better?
//
function _VirtualDom_diff(x, y)
{
	var patches = [];
	_VirtualDom_diffHelp(x, y, patches, 0);
	return patches;
}


function _VirtualDom_pushPatch(patches, type, index, data)
{
	var patch = {
		$: type,
		r: index,
		s: data,
		t: undefined,
		u: undefined
	};
	patches.push(patch);
	return patch;
}


function _VirtualDom_diffHelp(x, y, patches, index)
{
	if (x === y)
	{
		return;
	}

	var xType = x.$;
	var yType = y.$;

	// Bail if you run into different types of nodes. Implies that the
	// structure has changed significantly and it's not worth a diff.
	if (xType !== yType)
	{
		if (xType === 1 && yType === 2)
		{
			y = _VirtualDom_dekey(y);
			yType = 1;
		}
		else
		{
			_VirtualDom_pushPatch(patches, 0, index, y);
			return;
		}
	}

	// Now we know that both nodes are the same $.
	switch (yType)
	{
		case 5:
			var xRefs = x.l;
			var yRefs = y.l;
			var i = xRefs.length;
			var same = i === yRefs.length;
			while (same && i--)
			{
				same = xRefs[i] === yRefs[i];
			}
			if (same)
			{
				y.k = x.k;
				return;
			}
			y.k = y.m();
			var subPatches = [];
			_VirtualDom_diffHelp(x.k, y.k, subPatches, 0);
			subPatches.length > 0 && _VirtualDom_pushPatch(patches, 1, index, subPatches);
			return;

		case 4:
			// gather nested taggers
			var xTaggers = x.j;
			var yTaggers = y.j;
			var nesting = false;

			var xSubNode = x.k;
			while (xSubNode.$ === 4)
			{
				nesting = true;

				typeof xTaggers !== 'object'
					? xTaggers = [xTaggers, xSubNode.j]
					: xTaggers.push(xSubNode.j);

				xSubNode = xSubNode.k;
			}

			var ySubNode = y.k;
			while (ySubNode.$ === 4)
			{
				nesting = true;

				typeof yTaggers !== 'object'
					? yTaggers = [yTaggers, ySubNode.j]
					: yTaggers.push(ySubNode.j);

				ySubNode = ySubNode.k;
			}

			// Just bail if different numbers of taggers. This implies the
			// structure of the virtual DOM has changed.
			if (nesting && xTaggers.length !== yTaggers.length)
			{
				_VirtualDom_pushPatch(patches, 0, index, y);
				return;
			}

			// check if taggers are "the same"
			if (nesting ? !_VirtualDom_pairwiseRefEqual(xTaggers, yTaggers) : xTaggers !== yTaggers)
			{
				_VirtualDom_pushPatch(patches, 2, index, yTaggers);
			}

			// diff everything below the taggers
			_VirtualDom_diffHelp(xSubNode, ySubNode, patches, index + 1);
			return;

		case 0:
			if (x.a !== y.a)
			{
				_VirtualDom_pushPatch(patches, 3, index, y.a);
			}
			return;

		case 1:
			_VirtualDom_diffNodes(x, y, patches, index, _VirtualDom_diffKids);
			return;

		case 2:
			_VirtualDom_diffNodes(x, y, patches, index, _VirtualDom_diffKeyedKids);
			return;

		case 3:
			if (x.h !== y.h)
			{
				_VirtualDom_pushPatch(patches, 0, index, y);
				return;
			}

			var factsDiff = _VirtualDom_diffFacts(x.d, y.d);
			factsDiff && _VirtualDom_pushPatch(patches, 4, index, factsDiff);

			var patch = y.i(x.g, y.g);
			patch && _VirtualDom_pushPatch(patches, 5, index, patch);

			return;
	}
}

// assumes the incoming arrays are the same length
function _VirtualDom_pairwiseRefEqual(as, bs)
{
	for (var i = 0; i < as.length; i++)
	{
		if (as[i] !== bs[i])
		{
			return false;
		}
	}

	return true;
}

function _VirtualDom_diffNodes(x, y, patches, index, diffKids)
{
	// Bail if obvious indicators have changed. Implies more serious
	// structural changes such that it's not worth it to diff.
	if (x.c !== y.c || x.f !== y.f)
	{
		_VirtualDom_pushPatch(patches, 0, index, y);
		return;
	}

	var factsDiff = _VirtualDom_diffFacts(x.d, y.d);
	factsDiff && _VirtualDom_pushPatch(patches, 4, index, factsDiff);

	diffKids(x, y, patches, index);
}



// DIFF FACTS


// TODO Instead of creating a new diff object, it's possible to just test if
// there *is* a diff. During the actual patch, do the diff again and make the
// modifications directly. This way, there's no new allocations. Worth it?
function _VirtualDom_diffFacts(x, y, category)
{
	var diff;

	// look for changes and removals
	for (var xKey in x)
	{
		if (xKey === 'a1' || xKey === 'a0' || xKey === 'a3' || xKey === 'a4')
		{
			var subDiff = _VirtualDom_diffFacts(x[xKey], y[xKey] || {}, xKey);
			if (subDiff)
			{
				diff = diff || {};
				diff[xKey] = subDiff;
			}
			continue;
		}

		// remove if not in the new facts
		if (!(xKey in y))
		{
			diff = diff || {};
			diff[xKey] =
				!category
					? (typeof x[xKey] === 'string' ? '' : null)
					:
				(category === 'a1')
					? ''
					:
				(category === 'a0' || category === 'a3')
					? undefined
					:
				{ f: x[xKey].f, o: undefined };

			continue;
		}

		var xValue = x[xKey];
		var yValue = y[xKey];

		// reference equal, so don't worry about it
		if (xValue === yValue && xKey !== 'value'
			|| category === 'a0' && _VirtualDom_equalEvents(xValue, yValue))
		{
			continue;
		}

		diff = diff || {};
		diff[xKey] = yValue;
	}

	// add new stuff
	for (var yKey in y)
	{
		if (!(yKey in x))
		{
			diff = diff || {};
			diff[yKey] = y[yKey];
		}
	}

	return diff;
}



// DIFF KIDS


function _VirtualDom_diffKids(xParent, yParent, patches, index)
{
	var xKids = xParent.e;
	var yKids = yParent.e;

	var xLen = xKids.length;
	var yLen = yKids.length;

	// FIGURE OUT IF THERE ARE INSERTS OR REMOVALS

	if (xLen > yLen)
	{
		_VirtualDom_pushPatch(patches, 6, index, xLen - yLen);
	}
	else if (xLen < yLen)
	{
		_VirtualDom_pushPatch(patches, 7, index, yKids.slice(xLen));
	}

	// PAIRWISE DIFF EVERYTHING ELSE

	for (var minLen = xLen < yLen ? xLen : yLen, i = 0; i < minLen; i++)
	{
		var xKid = xKids[i];
		_VirtualDom_diffHelp(xKid, yKids[i], patches, ++index);
		index += xKid.b || 0;
	}
}



// KEYED DIFF


function _VirtualDom_diffKeyedKids(xParent, yParent, patches, rootIndex)
{
	var localPatches = [];

	var changes = {}; // Dict String Entry
	var inserts = []; // Array { index : Int, entry : Entry }
	// type Entry = { tag : String, vnode : VNode, index : Int, data : _ }

	var xKids = xParent.e;
	var yKids = yParent.e;
	var xLen = xKids.length;
	var yLen = yKids.length;
	var xIndex = 0;
	var yIndex = 0;

	var index = rootIndex;

	while (xIndex < xLen && yIndex < yLen)
	{
		var x = xKids[xIndex];
		var y = yKids[yIndex];

		var xKey = x.a;
		var yKey = y.a;
		var xNode = x.b;
		var yNode = y.b;

		// check if keys match

		if (xKey === yKey)
		{
			index++;
			_VirtualDom_diffHelp(xNode, yNode, localPatches, index);
			index += xNode.b || 0;

			xIndex++;
			yIndex++;
			continue;
		}

		// look ahead 1 to detect insertions and removals.

		var xNext = xKids[xIndex + 1];
		var yNext = yKids[yIndex + 1];

		if (xNext)
		{
			var xNextKey = xNext.a;
			var xNextNode = xNext.b;
			var oldMatch = yKey === xNextKey;
		}

		if (yNext)
		{
			var yNextKey = yNext.a;
			var yNextNode = yNext.b;
			var newMatch = xKey === yNextKey;
		}


		// swap x and y
		if (newMatch && oldMatch)
		{
			index++;
			_VirtualDom_diffHelp(xNode, yNextNode, localPatches, index);
			_VirtualDom_insertNode(changes, localPatches, xKey, yNode, yIndex, inserts);
			index += xNode.b || 0;

			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNextNode, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 2;
			continue;
		}

		// insert y
		if (newMatch)
		{
			index++;
			_VirtualDom_insertNode(changes, localPatches, yKey, yNode, yIndex, inserts);
			_VirtualDom_diffHelp(xNode, yNextNode, localPatches, index);
			index += xNode.b || 0;

			xIndex += 1;
			yIndex += 2;
			continue;
		}

		// remove x
		if (oldMatch)
		{
			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNode, index);
			index += xNode.b || 0;

			index++;
			_VirtualDom_diffHelp(xNextNode, yNode, localPatches, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 1;
			continue;
		}

		// remove x, insert y
		if (xNext && xNextKey === yNextKey)
		{
			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNode, index);
			_VirtualDom_insertNode(changes, localPatches, yKey, yNode, yIndex, inserts);
			index += xNode.b || 0;

			index++;
			_VirtualDom_diffHelp(xNextNode, yNextNode, localPatches, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 2;
			continue;
		}

		break;
	}

	// eat up any remaining nodes with removeNode and insertNode

	while (xIndex < xLen)
	{
		index++;
		var x = xKids[xIndex];
		var xNode = x.b;
		_VirtualDom_removeNode(changes, localPatches, x.a, xNode, index);
		index += xNode.b || 0;
		xIndex++;
	}

	while (yIndex < yLen)
	{
		var endInserts = endInserts || [];
		var y = yKids[yIndex];
		_VirtualDom_insertNode(changes, localPatches, y.a, y.b, undefined, endInserts);
		yIndex++;
	}

	if (localPatches.length > 0 || inserts.length > 0 || endInserts)
	{
		_VirtualDom_pushPatch(patches, 8, rootIndex, {
			v: localPatches,
			w: inserts,
			x: endInserts
		});
	}
}



// CHANGES FROM KEYED DIFF


var _VirtualDom_POSTFIX = '_elmW6BL';


function _VirtualDom_insertNode(changes, localPatches, key, vnode, yIndex, inserts)
{
	var entry = changes[key];

	// never seen this key before
	if (!entry)
	{
		entry = {
			c: 0,
			y: vnode,
			r: yIndex,
			s: undefined
		};

		inserts.push({ r: yIndex, z: entry });
		changes[key] = entry;

		return;
	}

	// this key was removed earlier, a match!
	if (entry.c === 1)
	{
		inserts.push({ r: yIndex, z: entry });

		entry.c = 2;
		var subPatches = [];
		_VirtualDom_diffHelp(entry.y, vnode, subPatches, entry.r);
		entry.r = yIndex;
		entry.s.s = {
			v: subPatches,
			z: entry
		};

		return;
	}

	// this key has already been inserted or moved, a duplicate!
	_VirtualDom_insertNode(changes, localPatches, key + _VirtualDom_POSTFIX, vnode, yIndex, inserts);
}


function _VirtualDom_removeNode(changes, localPatches, key, vnode, index)
{
	var entry = changes[key];

	// never seen this key before
	if (!entry)
	{
		var patch = _VirtualDom_pushPatch(localPatches, 9, index, undefined);

		changes[key] = {
			c: 1,
			y: vnode,
			r: index,
			s: patch
		};

		return;
	}

	// this key was inserted earlier, a match!
	if (entry.c === 0)
	{
		entry.c = 2;
		var subPatches = [];
		_VirtualDom_diffHelp(vnode, entry.y, subPatches, index);

		_VirtualDom_pushPatch(localPatches, 9, index, {
			v: subPatches,
			z: entry
		});

		return;
	}

	// this key has already been removed or moved, a duplicate!
	_VirtualDom_removeNode(changes, localPatches, key + _VirtualDom_POSTFIX, vnode, index);
}



// ADD DOM NODES
//
// Each DOM node has an "index" assigned in order of traversal. It is important
// to minimize our crawl over the actual DOM, so these indexes (along with the
// descendantsCount of virtual nodes) let us skip touching entire subtrees of
// the DOM if we know there are no patches there.


function _VirtualDom_addDomNodes(domNode, vNode, patches, eventNode)
{
	_VirtualDom_addDomNodesHelp(domNode, vNode, patches, 0, 0, vNode.b, eventNode);
}


// assumes `patches` is non-empty and indexes increase monotonically.
function _VirtualDom_addDomNodesHelp(domNode, vNode, patches, i, low, high, eventNode)
{
	var patch = patches[i];
	var index = patch.r;

	while (index === low)
	{
		var patchType = patch.$;

		if (patchType === 1)
		{
			_VirtualDom_addDomNodes(domNode, vNode.k, patch.s, eventNode);
		}
		else if (patchType === 8)
		{
			patch.t = domNode;
			patch.u = eventNode;

			var subPatches = patch.s.v;
			if (subPatches.length > 0)
			{
				_VirtualDom_addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
			}
		}
		else if (patchType === 9)
		{
			patch.t = domNode;
			patch.u = eventNode;

			var data = patch.s;
			if (data)
			{
				data.z.s = domNode;
				var subPatches = data.v;
				if (subPatches.length > 0)
				{
					_VirtualDom_addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
				}
			}
		}
		else
		{
			patch.t = domNode;
			patch.u = eventNode;
		}

		i++;

		if (!(patch = patches[i]) || (index = patch.r) > high)
		{
			return i;
		}
	}

	var tag = vNode.$;

	if (tag === 4)
	{
		var subNode = vNode.k;

		while (subNode.$ === 4)
		{
			subNode = subNode.k;
		}

		return _VirtualDom_addDomNodesHelp(domNode, subNode, patches, i, low + 1, high, domNode.elm_event_node_ref);
	}

	// tag must be 1 or 2 at this point

	var vKids = vNode.e;
	var childNodes = domNode.childNodes;
	for (var j = 0; j < vKids.length; j++)
	{
		low++;
		var vKid = tag === 1 ? vKids[j] : vKids[j].b;
		var nextLow = low + (vKid.b || 0);
		if (low <= index && index <= nextLow)
		{
			i = _VirtualDom_addDomNodesHelp(childNodes[j], vKid, patches, i, low, nextLow, eventNode);
			if (!(patch = patches[i]) || (index = patch.r) > high)
			{
				return i;
			}
		}
		low = nextLow;
	}
	return i;
}



// APPLY PATCHES


function _VirtualDom_applyPatches(rootDomNode, oldVirtualNode, patches, eventNode)
{
	if (patches.length === 0)
	{
		return rootDomNode;
	}

	_VirtualDom_addDomNodes(rootDomNode, oldVirtualNode, patches, eventNode);
	return _VirtualDom_applyPatchesHelp(rootDomNode, patches);
}

function _VirtualDom_applyPatchesHelp(rootDomNode, patches)
{
	for (var i = 0; i < patches.length; i++)
	{
		var patch = patches[i];
		var localDomNode = patch.t
		var newNode = _VirtualDom_applyPatch(localDomNode, patch);
		if (localDomNode === rootDomNode)
		{
			rootDomNode = newNode;
		}
	}
	return rootDomNode;
}

function _VirtualDom_applyPatch(domNode, patch)
{
	switch (patch.$)
	{
		case 0:
			return _VirtualDom_applyPatchRedraw(domNode, patch.s, patch.u);

		case 4:
			_VirtualDom_applyFacts(domNode, patch.u, patch.s);
			return domNode;

		case 3:
			domNode.replaceData(0, domNode.length, patch.s);
			return domNode;

		case 1:
			return _VirtualDom_applyPatchesHelp(domNode, patch.s);

		case 2:
			if (domNode.elm_event_node_ref)
			{
				domNode.elm_event_node_ref.j = patch.s;
			}
			else
			{
				domNode.elm_event_node_ref = { j: patch.s, p: patch.u };
			}
			return domNode;

		case 6:
			var i = patch.s;
			while (i--)
			{
				domNode.removeChild(domNode.lastChild);
			}
			return domNode;

		case 7:
			var newNodes = patch.s;
			for (var i = 0; i < newNodes.length; i++)
			{
				_VirtualDom_appendChild(domNode, _VirtualDom_render(newNodes[i], patch.u));
			}
			return domNode;

		case 9:
			var data = patch.s;
			if (!data)
			{
				domNode.parentNode.removeChild(domNode);
				return domNode;
			}
			var entry = data.z;
			if (typeof entry.r !== 'undefined')
			{
				domNode.parentNode.removeChild(domNode);
			}
			entry.s = _VirtualDom_applyPatchesHelp(domNode, data.v);
			return domNode;

		case 8:
			return _VirtualDom_applyPatchReorder(domNode, patch);

		case 5:
			return patch.s(domNode);

		default:
			_Debug_crash(10); // 'Ran into an unknown patch!'
	}
}


function _VirtualDom_applyPatchRedraw(domNode, vNode, eventNode)
{
	var parentNode = domNode.parentNode;
	var newNode = _VirtualDom_render(vNode, eventNode);

	if (!newNode.elm_event_node_ref)
	{
		newNode.elm_event_node_ref = domNode.elm_event_node_ref;
	}

	if (parentNode && newNode !== domNode)
	{
		parentNode.replaceChild(newNode, domNode);
	}
	return newNode;
}


function _VirtualDom_applyPatchReorder(domNode, patch)
{
	var data = patch.s;

	// remove end inserts
	var frag = _VirtualDom_applyPatchReorderEndInsertsHelp(data.x, patch);

	// removals
	domNode = _VirtualDom_applyPatchesHelp(domNode, data.v);

	// inserts
	var inserts = data.w;
	for (var i = 0; i < inserts.length; i++)
	{
		var insert = inserts[i];
		var entry = insert.z;
		var node = entry.c === 2
			? entry.s
			: _VirtualDom_render(entry.y, patch.u);
		domNode.insertBefore(node, domNode.childNodes[insert.r]);
	}

	// add end inserts
	if (frag)
	{
		_VirtualDom_appendChild(domNode, frag);
	}

	return domNode;
}


function _VirtualDom_applyPatchReorderEndInsertsHelp(endInserts, patch)
{
	if (!endInserts)
	{
		return;
	}

	var frag = _VirtualDom_doc.createDocumentFragment();
	for (var i = 0; i < endInserts.length; i++)
	{
		var insert = endInserts[i];
		var entry = insert.z;
		_VirtualDom_appendChild(frag, entry.c === 2
			? entry.s
			: _VirtualDom_render(entry.y, patch.u)
		);
	}
	return frag;
}


function _VirtualDom_virtualize(node)
{
	// TEXT NODES

	if (node.nodeType === 3)
	{
		return _VirtualDom_text(node.textContent);
	}


	// WEIRD NODES

	if (node.nodeType !== 1)
	{
		return _VirtualDom_text('');
	}


	// ELEMENT NODES

	var attrList = _List_Nil;
	var attrs = node.attributes;
	for (var i = attrs.length; i--; )
	{
		var attr = attrs[i];
		var name = attr.name;
		var value = attr.value;
		attrList = _List_Cons( A2(_VirtualDom_attribute, name, value), attrList );
	}

	var tag = node.tagName.toLowerCase();
	var kidList = _List_Nil;
	var kids = node.childNodes;

	for (var i = kids.length; i--; )
	{
		kidList = _List_Cons(_VirtualDom_virtualize(kids[i]), kidList);
	}
	return A3(_VirtualDom_node, tag, attrList, kidList);
}

function _VirtualDom_dekey(keyedNode)
{
	var keyedKids = keyedNode.e;
	var len = keyedKids.length;
	var kids = new Array(len);
	for (var i = 0; i < len; i++)
	{
		kids[i] = keyedKids[i].b;
	}

	return {
		$: 1,
		c: keyedNode.c,
		d: keyedNode.d,
		e: kids,
		f: keyedNode.f,
		b: keyedNode.b
	};
}


var _Bitwise_and = F2(function(a, b)
{
	return a & b;
});

var _Bitwise_or = F2(function(a, b)
{
	return a | b;
});

var _Bitwise_xor = F2(function(a, b)
{
	return a ^ b;
});

function _Bitwise_complement(a)
{
	return ~a;
};

var _Bitwise_shiftLeftBy = F2(function(offset, a)
{
	return a << offset;
});

var _Bitwise_shiftRightBy = F2(function(offset, a)
{
	return a >> offset;
});

var _Bitwise_shiftRightZfBy = F2(function(offset, a)
{
	return a >>> offset;
});


// CREATE

var _Regex_never = /.^/;

var _Regex_fromStringWith = F2(function(options, string)
{
	var flags = 'g';
	if (options.aJ) { flags += 'm'; }
	if (options.ap) { flags += 'i'; }

	try
	{
		return elm$core$Maybe$Just(new RegExp(string, flags));
	}
	catch(error)
	{
		return elm$core$Maybe$Nothing;
	}
});


// USE

var _Regex_contains = F2(function(re, string)
{
	return string.match(re) !== null;
});


var _Regex_findAtMost = F3(function(n, re, str)
{
	var out = [];
	var number = 0;
	var string = str;
	var lastIndex = re.lastIndex;
	var prevLastIndex = -1;
	var result;
	while (number++ < n && (result = re.exec(string)))
	{
		if (prevLastIndex == re.lastIndex) break;
		var i = result.length - 1;
		var subs = new Array(i);
		while (i > 0)
		{
			var submatch = result[i];
			subs[--i] = submatch
				? elm$core$Maybe$Just(submatch)
				: elm$core$Maybe$Nothing;
		}
		out.push(A4(elm$regex$Regex$Match, result[0], result.index, number, _List_fromArray(subs)));
		prevLastIndex = re.lastIndex;
	}
	re.lastIndex = lastIndex;
	return _List_fromArray(out);
});


var _Regex_replaceAtMost = F4(function(n, re, replacer, string)
{
	var count = 0;
	function jsReplacer(match)
	{
		if (count++ >= n)
		{
			return match;
		}
		var i = arguments.length - 3;
		var submatches = new Array(i);
		while (i > 0)
		{
			var submatch = arguments[i];
			submatches[--i] = submatch
				? elm$core$Maybe$Just(submatch)
				: elm$core$Maybe$Nothing;
		}
		return replacer(A4(elm$regex$Regex$Match, match, arguments[arguments.length - 2], count, _List_fromArray(submatches)));
	}
	return string.replace(re, jsReplacer);
});

var _Regex_splitAtMost = F3(function(n, re, str)
{
	var string = str;
	var out = [];
	var start = re.lastIndex;
	var restoreLastIndex = re.lastIndex;
	while (n--)
	{
		var result = re.exec(string);
		if (!result) break;
		out.push(string.slice(start, result.index));
		start = re.lastIndex;
	}
	out.push(string.slice(start));
	re.lastIndex = restoreLastIndex;
	return _List_fromArray(out);
});

var _Regex_infinity = Infinity;



function _Time_now(millisToPosix)
{
	return _Scheduler_binding(function(callback)
	{
		callback(_Scheduler_succeed(millisToPosix(Date.now())));
	});
}

var _Time_setInterval = F2(function(interval, task)
{
	return _Scheduler_binding(function(callback)
	{
		var id = setInterval(function() { _Scheduler_rawSpawn(task); }, interval);
		return function() { clearInterval(id); };
	});
});

function _Time_here()
{
	return _Scheduler_binding(function(callback)
	{
		callback(_Scheduler_succeed(
			A2(elm$time$Time$customZone, -(new Date().getTimezoneOffset()), _List_Nil)
		));
	});
}


function _Time_getZoneName()
{
	return _Scheduler_binding(function(callback)
	{
		try
		{
			var name = elm$time$Time$Name(Intl.DateTimeFormat().resolvedOptions().timeZone);
		}
		catch (e)
		{
			var name = elm$time$Time$Offset(new Date().getTimezoneOffset());
		}
		callback(_Scheduler_succeed(name));
	});
}




// FAKE NAVIGATION


function _Browser_go(n)
{
	return _Scheduler_binding(function(callback)
	{
		if (n !== 0)
		{
			history.go(n);
		}
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
}


function _Browser_pushState(url)
{
	return _Scheduler_binding(function(callback)
	{
		history.pushState({}, '', url);
		callback(_Scheduler_succeed(_Browser_getUrl()));
	});
}


function _Browser_replaceState(url)
{
	return _Scheduler_binding(function(callback)
	{
		history.replaceState({}, '', url);
		callback(_Scheduler_succeed(_Browser_getUrl()));
	});
}



// REAL NAVIGATION


function _Browser_reload(skipCache)
{
	return _Scheduler_binding(function(callback)
	{
		_VirtualDom_doc.location.reload(skipCache);
	});
}

function _Browser_load(url)
{
	return _Scheduler_binding(function(callback)
	{
		try
		{
			window.location = url;
		}
		catch(err)
		{
			// Only Firefox can throw a NS_ERROR_MALFORMED_URI exception here.
			// Other browsers reload the page, so let's be consistent about that.
			_VirtualDom_doc.location.reload(false);
		}
	});
}



// GET URL


function _Browser_getUrl()
{
	return _VirtualDom_doc.location.href;
}



// DETECT IE11 PROBLEMS


function _Browser_isInternetExplorer11()
{
	return window.navigator.userAgent.indexOf('Trident') !== -1;
}



// INVALID URL


function _Browser_invalidUrl(url)
{
	_Debug_crash(1, url);
}


// PROGRAMS


var _Browser_staticPage = F4(function(virtualNode, flagDecoder, debugMetadata, object)
{
	object['embed'] = function(node)
	{
		node.parentNode.replaceChild(
			_VirtualDom_render(virtualNode, function() {}),
			node
		);
	};
	return object;
});


var _Debugger_embed;

var _Browser_embed = _Debugger_embed || F4(function(impl, flagDecoder, debugMetadata, object)
{
	object['embed'] = function(node, flags)
	{
		return _Platform_initialize(
			flagDecoder,
			flags,
			impl.bj,
			impl.bA,
			impl.bx,
			_Browser_makeStepperBuilder(node, impl.bB)
		);
	};
	return object;
});

var _Debugger_fullscreen;

var _Browser_fullscreen = _Debugger_fullscreen || F4(function(impl, flagDecoder, debugMetadata, object)
{
	object['fullscreen'] = function(flags)
	{
		return _Platform_initialize(
			A2(elm$json$Json$Decode$map, _Browser_toEnv, flagDecoder),
			flags,
			impl.bj,
			impl.bA,
			impl.bx,
			_Browser_makeStepperBuilder(_VirtualDom_doc.body, function(model) {
				var ui = impl.bB(model);
				if (_VirtualDom_doc.title !== ui.bz)
				{
					_VirtualDom_doc.title = ui.bz;
				}
				return _VirtualDom_node('body')(_List_Nil)(ui.a8);
			})
		);
	};
	return object;
});


function _Browser_toEnv(flags)
{
	return {
		a4: _Browser_getUrl(),
		ay: flags
	};
}



// RENDERER


function _Browser_makeStepperBuilder(domNode, view)
{
	return function(sendToApp, initialModel)
	{
		var currNode = _VirtualDom_virtualize(domNode);

		return _Browser_makeAnimator(initialModel, function(model)
		{
			var nextNode = view(model);
			var patches = _VirtualDom_diff(currNode, nextNode);
			domNode = _VirtualDom_applyPatches(domNode, currNode, patches, sendToApp);
			currNode = nextNode;
		});
	};
}



// ANIMATION


var _Browser_requestAnimationFrame =
	typeof requestAnimationFrame !== 'undefined'
		? requestAnimationFrame
		: function(callback) { setTimeout(callback, 1000 / 60); };


function _Browser_makeAnimator(model, draw)
{
	draw(model);

	var state = 0;

	function updateIfNeeded()
	{
		state = state === 1
			? 0
			: ( _Browser_requestAnimationFrame(updateIfNeeded), draw(model), 1 );
	}

	return function(nextModel, isSync)
	{
		model = nextModel;

		isSync
			? ( draw(model),
				state === 2 && (state = 1)
				)
			: ( state === 0 && _Browser_requestAnimationFrame(updateIfNeeded),
				state = 2
				);
	};
}



// DOM STUFF


function _Browser_withNode(id, doStuff)
{
	return _Scheduler_binding(function(callback)
	{
		_Browser_requestAnimationFrame(function()
		{
			var node = document.getElementById(id);
			callback(node
				? _Scheduler_succeed(doStuff(node))
				: _Scheduler_fail(elm$browser$Browser$NotFound(id))
			);
		});
	});
}


var _Browser_call = F2(function(functionName, id)
{
	return _Browser_withNode(id, function(node) {
		node[functionName]();
		return _Utils_Tuple0;
	});
});



// SCROLLING


function _Browser_getScroll(id)
{
	return _Browser_withNode(id, function(node) {
		return _Utils_Tuple2(node.scrollLeft, node.scrollTop);
	});
}

var _Browser_setPositiveScroll = F3(function(scroll, id, offset)
{
	return _Browser_withNode(id, function(node) {
		node[scroll] = offset;
		return _Utils_Tuple0;
	});
});

var _Browser_setNegativeScroll = F4(function(scroll, scrollMax, id, offset)
{
	return _Browser_withNode(id, function(node) {
		node[scroll] = node[scrollMax] - offset;
		return _Utils_Tuple0;
	});
});



// GLOBAL EVENTS


var _Browser_fakeNode = { addEventListener: function() {}, removeEventListener: function() {} };
var _Browser_document = typeof document !== 'undefined' ? document : _Browser_fakeNode;
var _Browser_window = typeof window !== 'undefined' ? window : _Browser_fakeNode;

var _Browser_on = F4(function(node, passive, eventName, sendToSelf)
{
	return _Scheduler_spawn(_Scheduler_binding(function(callback)
	{
		function handler(event)	{ _Scheduler_rawSpawn(sendToSelf(event)); }
		node.addEventListener(eventName, handler, _VirtualDom_passiveSupported && { passive: passive });
		return function() { node.removeEventListener(eventName, handler); };
	}));
});

var _Browser_decodeEvent = F2(function(decoder, event)
{
	var result = _Json_runHelp(decoder, event);
	return elm$core$Result$isOk(result)
		? (result.a.b && event.preventDefault(), elm$core$Maybe$Just(result.a.a))
		: elm$core$Maybe$Nothing
});var author$project$Main$exportLatex2Html = function (editRecord) {
	return 'NOT IMPLEMENTED';
};
var author$project$MeenyLatex$Paragraph$Start = {$: 0};
var elm$core$Elm$JsArray$foldr = _JsArray_foldr;
var elm$core$Array$foldr = F3(
	function (func, baseCase, _n0) {
		var tree = _n0.c;
		var tail = _n0.d;
		var helper = F2(
			function (node, acc) {
				if (!node.$) {
					var subTree = node.a;
					return A3(elm$core$Elm$JsArray$foldr, helper, acc, subTree);
				} else {
					var values = node.a;
					return A3(elm$core$Elm$JsArray$foldr, func, acc, values);
				}
			});
		return A3(
			elm$core$Elm$JsArray$foldr,
			helper,
			A3(elm$core$Elm$JsArray$foldr, func, baseCase, tail),
			tree);
	});
var elm$core$Basics$EQ = 1;
var elm$core$Basics$LT = 0;
var elm$core$List$cons = _List_cons;
var elm$core$Array$toList = function (array) {
	return A3(elm$core$Array$foldr, elm$core$List$cons, _List_Nil, array);
};
var elm$core$Basics$GT = 2;
var elm$core$Dict$foldr = F3(
	function (func, acc, t) {
		foldr:
		while (true) {
			if (t.$ === -2) {
				return acc;
			} else {
				var key = t.b;
				var value = t.c;
				var left = t.d;
				var right = t.e;
				var $temp$func = func,
					$temp$acc = A3(
					func,
					key,
					value,
					A3(elm$core$Dict$foldr, func, acc, right)),
					$temp$t = left;
				func = $temp$func;
				acc = $temp$acc;
				t = $temp$t;
				continue foldr;
			}
		}
	});
var elm$core$Dict$toList = function (dict) {
	return A3(
		elm$core$Dict$foldr,
		F3(
			function (key, value, list) {
				return A2(
					elm$core$List$cons,
					_Utils_Tuple2(key, value),
					list);
			}),
		_List_Nil,
		dict);
};
var elm$core$Dict$keys = function (dict) {
	return A3(
		elm$core$Dict$foldr,
		F3(
			function (key, value, keyList) {
				return A2(elm$core$List$cons, key, keyList);
			}),
		_List_Nil,
		dict);
};
var elm$core$Set$toList = function (_n0) {
	var dict = _n0;
	return elm$core$Dict$keys(dict);
};
var elm$core$Basics$eq = _Utils_equal;
var author$project$MeenyLatex$Paragraph$fixLine = function (line) {
	return (line === '') ? '\n' : line;
};
var elm$core$Basics$append = _Utils_append;
var author$project$MeenyLatex$Paragraph$joinLines = F2(
	function (a, b) {
		var _n0 = _Utils_Tuple2(a, b);
		_n0$1:
		while (true) {
			_n0$2:
			while (true) {
				switch (_n0.a) {
					case '':
						return b;
					case '\n':
						switch (_n0.b) {
							case '':
								break _n0$1;
							case '\n':
								break _n0$2;
							default:
								break _n0$2;
						}
					default:
						switch (_n0.b) {
							case '':
								break _n0$1;
							case '\n':
								return a + '\n';
							default:
								var aa = _n0.a;
								var bb = _n0.b;
								return aa + ('\n' + bb);
						}
				}
			}
			return '\n' + b;
		}
		return a;
	});
var author$project$MeenyLatex$Paragraph$Error = {$: 4};
var author$project$MeenyLatex$Paragraph$IgnoreLine = {$: 3};
var author$project$MeenyLatex$Paragraph$InBlock = function (a) {
	return {$: 2, a: a};
};
var author$project$MeenyLatex$Paragraph$InParagraph = {$: 1};
var author$project$MeenyLatex$Paragraph$BeginBlock = function (a) {
	return {$: 3, a: a};
};
var author$project$MeenyLatex$Paragraph$Blank = {$: 0};
var author$project$MeenyLatex$Paragraph$EndBlock = function (a) {
	return {$: 4, a: a};
};
var author$project$MeenyLatex$Paragraph$Ignore = {$: 1};
var author$project$MeenyLatex$Paragraph$Text = {$: 2};
var elm$core$Basics$apL = F2(
	function (f, x) {
		return f(x);
	});
var elm$core$Basics$apR = F2(
	function (x, f) {
		return f(x);
	});
var elm$core$Basics$identity = function (x) {
	return x;
};
var elm$core$Basics$lt = _Utils_lt;
var elm$core$Basics$negate = function (n) {
	return -n;
};
var elm$core$Maybe$Just = function (a) {
	return {$: 0, a: a};
};
var elm$core$Maybe$Nothing = {$: 1};
var elm$core$String$slice = _String_slice;
var elm$core$String$dropRight = F2(
	function (n, string) {
		return (n < 1) ? string : A3(elm$core$String$slice, 0, -n, string);
	});
var elm$core$String$length = _String_length;
var elm$parser$Parser$Advanced$Good = F3(
	function (a, b, c) {
		return {$: 0, a: a, b: b, c: c};
	});
var elm$parser$Parser$Advanced$Parser = elm$core$Basics$identity;
var elm$parser$Parser$Advanced$chompUntilEndOr = function (str) {
	return function (s) {
		var _n0 = A5(_Parser_findSubString, str, s.b, s.bt, s.bc, s.a);
		var newOffset = _n0.a;
		var newRow = _n0.b;
		var newCol = _n0.c;
		var adjustedOffset = (newOffset < 0) ? elm$core$String$length(s.a) : newOffset;
		return A3(
			elm$parser$Parser$Advanced$Good,
			_Utils_cmp(s.b, adjustedOffset) < 0,
			0,
			{bc: newCol, ar: s.ar, c: s.c, b: adjustedOffset, bt: newRow, a: s.a});
	};
};
var elm$parser$Parser$chompUntilEndOr = elm$parser$Parser$Advanced$chompUntilEndOr;
var elm$core$Basics$always = F2(
	function (a, _n0) {
		return a;
	});
var elm$parser$Parser$Advanced$Bad = F2(
	function (a, b) {
		return {$: 1, a: a, b: b};
	});
var elm$parser$Parser$Advanced$mapChompedString = F2(
	function (func, _n0) {
		var parse = _n0;
		return function (s0) {
			var _n1 = parse(s0);
			if (_n1.$ === 1) {
				var p = _n1.a;
				var x = _n1.b;
				return A2(elm$parser$Parser$Advanced$Bad, p, x);
			} else {
				var p = _n1.a;
				var a = _n1.b;
				var s1 = _n1.c;
				return A3(
					elm$parser$Parser$Advanced$Good,
					p,
					A2(
						func,
						A3(elm$core$String$slice, s0.b, s1.b, s0.a),
						a),
					s1);
			}
		};
	});
var elm$parser$Parser$Advanced$getChompedString = function (parser) {
	return A2(elm$parser$Parser$Advanced$mapChompedString, elm$core$Basics$always, parser);
};
var elm$parser$Parser$getChompedString = elm$parser$Parser$Advanced$getChompedString;
var elm$core$Basics$or = _Basics_or;
var elm$parser$Parser$Advanced$map2 = F3(
	function (func, _n0, _n1) {
		var parseA = _n0;
		var parseB = _n1;
		return function (s0) {
			var _n2 = parseA(s0);
			if (_n2.$ === 1) {
				var p = _n2.a;
				var x = _n2.b;
				return A2(elm$parser$Parser$Advanced$Bad, p, x);
			} else {
				var p1 = _n2.a;
				var a = _n2.b;
				var s1 = _n2.c;
				var _n3 = parseB(s1);
				if (_n3.$ === 1) {
					var p2 = _n3.a;
					var x = _n3.b;
					return A2(elm$parser$Parser$Advanced$Bad, p1 || p2, x);
				} else {
					var p2 = _n3.a;
					var b = _n3.b;
					var s2 = _n3.c;
					return A3(
						elm$parser$Parser$Advanced$Good,
						p1 || p2,
						A2(func, a, b),
						s2);
				}
			}
		};
	});
var elm$parser$Parser$Advanced$ignorer = F2(
	function (keepParser, ignoreParser) {
		return A3(elm$parser$Parser$Advanced$map2, elm$core$Basics$always, keepParser, ignoreParser);
	});
var elm$parser$Parser$ignorer = elm$parser$Parser$Advanced$ignorer;
var elm$parser$Parser$Advanced$keeper = F2(
	function (parseFunc, parseArg) {
		return A3(elm$parser$Parser$Advanced$map2, elm$core$Basics$apL, parseFunc, parseArg);
	});
var elm$parser$Parser$keeper = elm$parser$Parser$Advanced$keeper;
var elm$parser$Parser$Advanced$map = F2(
	function (func, _n0) {
		var parse = _n0;
		return function (s0) {
			var _n1 = parse(s0);
			if (!_n1.$) {
				var p = _n1.a;
				var a = _n1.b;
				var s1 = _n1.c;
				return A3(
					elm$parser$Parser$Advanced$Good,
					p,
					func(a),
					s1);
			} else {
				var p = _n1.a;
				var x = _n1.b;
				return A2(elm$parser$Parser$Advanced$Bad, p, x);
			}
		};
	});
var elm$parser$Parser$map = elm$parser$Parser$Advanced$map;
var elm$core$Basics$False = 1;
var elm$parser$Parser$Advanced$succeed = function (a) {
	return function (s) {
		return A3(elm$parser$Parser$Advanced$Good, false, a, s);
	};
};
var elm$parser$Parser$succeed = elm$parser$Parser$Advanced$succeed;
var elm$parser$Parser$ExpectingSymbol = function (a) {
	return {$: 8, a: a};
};
var elm$parser$Parser$Advanced$Token = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var elm$core$Basics$not = _Basics_not;
var elm$core$String$isEmpty = function (string) {
	return string === '';
};
var elm$parser$Parser$Advanced$AddRight = F2(
	function (a, b) {
		return {$: 1, a: a, b: b};
	});
var elm$parser$Parser$Advanced$Empty = {$: 0};
var elm$parser$Parser$Advanced$Problem = F4(
	function (row, col, problem, contextStack) {
		return {bc: col, bd: contextStack, ai: problem, bt: row};
	});
var elm$parser$Parser$Advanced$fromState = F2(
	function (s, x) {
		return A2(
			elm$parser$Parser$Advanced$AddRight,
			elm$parser$Parser$Advanced$Empty,
			A4(elm$parser$Parser$Advanced$Problem, s.bt, s.bc, x, s.ar));
	});
var elm$parser$Parser$Advanced$isSubString = _Parser_isSubString;
var elm$parser$Parser$Advanced$token = function (_n0) {
	var str = _n0.a;
	var expecting = _n0.b;
	var progress = !elm$core$String$isEmpty(str);
	return function (s) {
		var _n1 = A5(elm$parser$Parser$Advanced$isSubString, str, s.b, s.bt, s.bc, s.a);
		var newOffset = _n1.a;
		var newRow = _n1.b;
		var newCol = _n1.c;
		return _Utils_eq(newOffset, -1) ? A2(
			elm$parser$Parser$Advanced$Bad,
			false,
			A2(elm$parser$Parser$Advanced$fromState, s, expecting)) : A3(
			elm$parser$Parser$Advanced$Good,
			progress,
			0,
			{bc: newCol, ar: s.ar, c: s.c, b: newOffset, bt: newRow, a: s.a});
	};
};
var elm$parser$Parser$Advanced$symbol = elm$parser$Parser$Advanced$token;
var elm$parser$Parser$symbol = function (str) {
	return elm$parser$Parser$Advanced$symbol(
		A2(
			elm$parser$Parser$Advanced$Token,
			str,
			elm$parser$Parser$ExpectingSymbol(str)));
};
var author$project$MeenyLatex$ParserHelpers$parseTo = function (marker) {
	return A2(
		elm$parser$Parser$map,
		elm$core$String$dropRight(
			elm$core$String$length(marker)),
		elm$parser$Parser$getChompedString(
			A2(
				elm$parser$Parser$keeper,
				elm$parser$Parser$succeed(elm$core$Basics$identity),
				A2(
					elm$parser$Parser$ignorer,
					elm$parser$Parser$chompUntilEndOr(marker),
					elm$parser$Parser$symbol(marker)))));
};
var elm$core$Basics$add = _Basics_add;
var elm$parser$Parser$Advanced$isSubChar = _Parser_isSubChar;
var elm$parser$Parser$Advanced$chompWhileHelp = F5(
	function (isGood, offset, row, col, s0) {
		chompWhileHelp:
		while (true) {
			var newOffset = A3(elm$parser$Parser$Advanced$isSubChar, isGood, offset, s0.a);
			if (_Utils_eq(newOffset, -1)) {
				return A3(
					elm$parser$Parser$Advanced$Good,
					_Utils_cmp(s0.b, offset) < 0,
					0,
					{bc: col, ar: s0.ar, c: s0.c, b: offset, bt: row, a: s0.a});
			} else {
				if (_Utils_eq(newOffset, -2)) {
					var $temp$isGood = isGood,
						$temp$offset = offset + 1,
						$temp$row = row + 1,
						$temp$col = 1,
						$temp$s0 = s0;
					isGood = $temp$isGood;
					offset = $temp$offset;
					row = $temp$row;
					col = $temp$col;
					s0 = $temp$s0;
					continue chompWhileHelp;
				} else {
					var $temp$isGood = isGood,
						$temp$offset = newOffset,
						$temp$row = row,
						$temp$col = col + 1,
						$temp$s0 = s0;
					isGood = $temp$isGood;
					offset = $temp$offset;
					row = $temp$row;
					col = $temp$col;
					s0 = $temp$s0;
					continue chompWhileHelp;
				}
			}
		}
	});
var elm$parser$Parser$Advanced$chompWhile = function (isGood) {
	return function (s) {
		return A5(elm$parser$Parser$Advanced$chompWhileHelp, isGood, s.b, s.bt, s.bc, s);
	};
};
var elm$parser$Parser$chompWhile = elm$parser$Parser$Advanced$chompWhile;
var author$project$MeenyLatex$ParserHelpers$spaces = elm$parser$Parser$chompWhile(
	function (c) {
		return c === ' ';
	});
var author$project$MeenyLatex$Parser$envName = A2(
	elm$parser$Parser$keeper,
	A2(
		elm$parser$Parser$ignorer,
		A2(
			elm$parser$Parser$ignorer,
			elm$parser$Parser$succeed(elm$core$Basics$identity),
			author$project$MeenyLatex$ParserHelpers$spaces),
		elm$parser$Parser$symbol('\\begin{')),
	author$project$MeenyLatex$ParserHelpers$parseTo('}'));
var elm$core$Basics$gt = _Utils_gt;
var elm$core$List$foldl = F3(
	function (func, acc, list) {
		foldl:
		while (true) {
			if (!list.b) {
				return acc;
			} else {
				var x = list.a;
				var xs = list.b;
				var $temp$func = func,
					$temp$acc = A2(func, x, acc),
					$temp$list = xs;
				func = $temp$func;
				acc = $temp$acc;
				list = $temp$list;
				continue foldl;
			}
		}
	});
var elm$core$List$reverse = function (list) {
	return A3(elm$core$List$foldl, elm$core$List$cons, _List_Nil, list);
};
var elm$core$List$foldrHelper = F4(
	function (fn, acc, ctr, ls) {
		if (!ls.b) {
			return acc;
		} else {
			var a = ls.a;
			var r1 = ls.b;
			if (!r1.b) {
				return A2(fn, a, acc);
			} else {
				var b = r1.a;
				var r2 = r1.b;
				if (!r2.b) {
					return A2(
						fn,
						a,
						A2(fn, b, acc));
				} else {
					var c = r2.a;
					var r3 = r2.b;
					if (!r3.b) {
						return A2(
							fn,
							a,
							A2(
								fn,
								b,
								A2(fn, c, acc)));
					} else {
						var d = r3.a;
						var r4 = r3.b;
						var res = (ctr > 500) ? A3(
							elm$core$List$foldl,
							fn,
							acc,
							elm$core$List$reverse(r4)) : A4(elm$core$List$foldrHelper, fn, acc, ctr + 1, r4);
						return A2(
							fn,
							a,
							A2(
								fn,
								b,
								A2(
									fn,
									c,
									A2(fn, d, res))));
					}
				}
			}
		}
	});
var elm$core$List$foldr = F3(
	function (fn, acc, ls) {
		return A4(elm$core$List$foldrHelper, fn, acc, 0, ls);
	});
var elm$core$List$map = F2(
	function (f, xs) {
		return A3(
			elm$core$List$foldr,
			F2(
				function (x, acc) {
					return A2(
						elm$core$List$cons,
						f(x),
						acc);
				}),
			_List_Nil,
			xs);
	});
var elm$core$Result$Err = function (a) {
	return {$: 1, a: a};
};
var elm$core$Result$Ok = function (a) {
	return {$: 0, a: a};
};
var elm$parser$Parser$DeadEnd = F3(
	function (row, col, problem) {
		return {bc: col, ai: problem, bt: row};
	});
var elm$parser$Parser$problemToDeadEnd = function (p) {
	return A3(elm$parser$Parser$DeadEnd, p.bt, p.bc, p.ai);
};
var elm$parser$Parser$Advanced$bagToList = F2(
	function (bag, list) {
		bagToList:
		while (true) {
			switch (bag.$) {
				case 0:
					return list;
				case 1:
					var bag1 = bag.a;
					var x = bag.b;
					var $temp$bag = bag1,
						$temp$list = A2(elm$core$List$cons, x, list);
					bag = $temp$bag;
					list = $temp$list;
					continue bagToList;
				default:
					var bag1 = bag.a;
					var bag2 = bag.b;
					var $temp$bag = bag1,
						$temp$list = A2(elm$parser$Parser$Advanced$bagToList, bag2, list);
					bag = $temp$bag;
					list = $temp$list;
					continue bagToList;
			}
		}
	});
var elm$parser$Parser$Advanced$run = F2(
	function (_n0, src) {
		var parse = _n0;
		var _n1 = parse(
			{bc: 1, ar: _List_Nil, c: 1, b: 0, bt: 1, a: src});
		if (!_n1.$) {
			var value = _n1.b;
			return elm$core$Result$Ok(value);
		} else {
			var bag = _n1.b;
			return elm$core$Result$Err(
				A2(elm$parser$Parser$Advanced$bagToList, bag, _List_Nil));
		}
	});
var elm$parser$Parser$run = F2(
	function (parser, source) {
		var _n0 = A2(elm$parser$Parser$Advanced$run, parser, source);
		if (!_n0.$) {
			var a = _n0.a;
			return elm$core$Result$Ok(a);
		} else {
			var problems = _n0.a;
			return elm$core$Result$Err(
				A2(elm$core$List$map, elm$parser$Parser$problemToDeadEnd, problems));
		}
	});
var author$project$MeenyLatex$Paragraph$getBeginArg = function (line) {
	var parseResult = A2(elm$parser$Parser$run, author$project$MeenyLatex$Parser$envName, line);
	var arg = function () {
		if (!parseResult.$) {
			var word = parseResult.a;
			return word;
		} else {
			return '';
		}
	}();
	return arg;
};
var author$project$MeenyLatex$ParserHelpers$ws = elm$parser$Parser$chompWhile(
	function (c) {
		return (c === ' ') || (c === '\n');
	});
var author$project$MeenyLatex$Parser$endWord = A2(
	elm$parser$Parser$keeper,
	A2(
		elm$parser$Parser$ignorer,
		A2(
			elm$parser$Parser$ignorer,
			elm$parser$Parser$succeed(elm$core$Basics$identity),
			author$project$MeenyLatex$ParserHelpers$spaces),
		elm$parser$Parser$symbol('\\end{')),
	A2(
		elm$parser$Parser$ignorer,
		author$project$MeenyLatex$ParserHelpers$parseTo('}'),
		author$project$MeenyLatex$ParserHelpers$ws));
var author$project$MeenyLatex$Paragraph$getEndArg = function (line) {
	var parseResult = A2(elm$parser$Parser$run, author$project$MeenyLatex$Parser$endWord, line);
	var arg = function () {
		if (!parseResult.$) {
			var word = parseResult.a;
			return word;
		} else {
			return '';
		}
	}();
	return arg;
};
var elm$core$String$startsWith = _String_startsWith;
var author$project$MeenyLatex$Paragraph$lineType = function (line) {
	return (line === '') ? author$project$MeenyLatex$Paragraph$Blank : (((line === '\\begin{thebibliography}') || (line === '\\end{thebibliography}')) ? author$project$MeenyLatex$Paragraph$Ignore : (A2(elm$core$String$startsWith, '\\begin', line) ? author$project$MeenyLatex$Paragraph$BeginBlock(
		author$project$MeenyLatex$Paragraph$getBeginArg(line)) : (A2(elm$core$String$startsWith, '\\end', line) ? author$project$MeenyLatex$Paragraph$EndBlock(
		author$project$MeenyLatex$Paragraph$getEndArg(line)) : author$project$MeenyLatex$Paragraph$Text)));
};
var author$project$MeenyLatex$Paragraph$nextState = F2(
	function (line, parserState) {
		var _n0 = _Utils_Tuple2(
			parserState,
			author$project$MeenyLatex$Paragraph$lineType(line));
		_n0$15:
		while (true) {
			switch (_n0.a.$) {
				case 0:
					switch (_n0.b.$) {
						case 0:
							var _n1 = _n0.a;
							var _n2 = _n0.b;
							return author$project$MeenyLatex$Paragraph$Start;
						case 2:
							var _n3 = _n0.a;
							var _n4 = _n0.b;
							return author$project$MeenyLatex$Paragraph$InParagraph;
						case 3:
							var _n5 = _n0.a;
							var arg = _n0.b.a;
							return author$project$MeenyLatex$Paragraph$InBlock(arg);
						case 1:
							var _n6 = _n0.a;
							var _n7 = _n0.b;
							return author$project$MeenyLatex$Paragraph$IgnoreLine;
						default:
							break _n0$15;
					}
				case 3:
					switch (_n0.b.$) {
						case 0:
							var _n8 = _n0.a;
							var _n9 = _n0.b;
							return author$project$MeenyLatex$Paragraph$Start;
						case 2:
							var _n10 = _n0.a;
							var _n11 = _n0.b;
							return author$project$MeenyLatex$Paragraph$InParagraph;
						case 3:
							var _n12 = _n0.a;
							var arg = _n0.b.a;
							return author$project$MeenyLatex$Paragraph$InBlock(arg);
						default:
							break _n0$15;
					}
				case 2:
					switch (_n0.b.$) {
						case 0:
							var arg = _n0.a.a;
							var _n13 = _n0.b;
							return author$project$MeenyLatex$Paragraph$InBlock(arg);
						case 2:
							var arg = _n0.a.a;
							var _n14 = _n0.b;
							return author$project$MeenyLatex$Paragraph$InBlock(arg);
						case 3:
							var arg = _n0.a.a;
							var arg2 = _n0.b.a;
							return author$project$MeenyLatex$Paragraph$InBlock(arg);
						case 4:
							var arg1 = _n0.a.a;
							var arg2 = _n0.b.a;
							return _Utils_eq(arg1, arg2) ? author$project$MeenyLatex$Paragraph$Start : author$project$MeenyLatex$Paragraph$InBlock(arg1);
						default:
							break _n0$15;
					}
				case 1:
					switch (_n0.b.$) {
						case 2:
							var _n15 = _n0.a;
							var _n16 = _n0.b;
							return author$project$MeenyLatex$Paragraph$InParagraph;
						case 3:
							var _n17 = _n0.a;
							var str = _n0.b.a;
							return author$project$MeenyLatex$Paragraph$InParagraph;
						case 4:
							var _n18 = _n0.a;
							var arg = _n0.b.a;
							return author$project$MeenyLatex$Paragraph$InParagraph;
						case 0:
							var _n19 = _n0.a;
							var _n20 = _n0.b;
							return author$project$MeenyLatex$Paragraph$Start;
						default:
							break _n0$15;
					}
				default:
					break _n0$15;
			}
		}
		return author$project$MeenyLatex$Paragraph$Error;
	});
var author$project$MeenyLatex$Paragraph$updateParserRecord = F2(
	function (line, parserRecord) {
		var state2 = A2(author$project$MeenyLatex$Paragraph$nextState, line, parserRecord.x);
		switch (state2.$) {
			case 0:
				return _Utils_update(
					parserRecord,
					{
						k: '',
						M: _Utils_ap(
							parserRecord.M,
							_List_fromArray(
								[
									A2(author$project$MeenyLatex$Paragraph$joinLines, parserRecord.k, line)
								])),
						x: state2
					});
			case 1:
				return _Utils_update(
					parserRecord,
					{
						k: A2(author$project$MeenyLatex$Paragraph$joinLines, parserRecord.k, line),
						x: state2
					});
			case 2:
				var arg = state2.a;
				return _Utils_update(
					parserRecord,
					{
						k: A2(
							author$project$MeenyLatex$Paragraph$joinLines,
							parserRecord.k,
							author$project$MeenyLatex$Paragraph$fixLine(line)),
						x: state2
					});
			case 3:
				return _Utils_update(
					parserRecord,
					{x: state2});
			default:
				return parserRecord;
		}
	});
var elm$core$String$split = F2(
	function (sep, string) {
		return _List_fromArray(
			A2(_String_split, sep, string));
	});
var author$project$MeenyLatex$Paragraph$logicalParagraphParse = function (text) {
	return A3(
		elm$core$List$foldl,
		author$project$MeenyLatex$Paragraph$updateParserRecord,
		{k: '', M: _List_Nil, x: author$project$MeenyLatex$Paragraph$Start},
		A2(elm$core$String$split, '\n', text + '\n'));
};
var elm$core$Basics$neq = _Utils_notEqual;
var elm$core$List$filter = F2(
	function (isGood, list) {
		return A3(
			elm$core$List$foldr,
			F2(
				function (x, xs) {
					return isGood(x) ? A2(elm$core$List$cons, x, xs) : xs;
				}),
			_List_Nil,
			list);
	});
var author$project$MeenyLatex$Paragraph$logicalParagraphify = function (text) {
	var lastState = author$project$MeenyLatex$Paragraph$logicalParagraphParse(text);
	return A2(
		elm$core$List$map,
		function (paragraph) {
			return paragraph + '\n\n\n';
		},
		A2(
			elm$core$List$filter,
			function (x) {
				return x !== '';
			},
			_Utils_ap(
				lastState.M,
				_List_fromArray(
					[lastState.k]))));
};
var author$project$MeenyLatex$Parser$LXError = function (a) {
	return {$: 9, a: a};
};
var author$project$MeenyLatex$Parser$LXString = function (a) {
	return {$: 0, a: a};
};
var author$project$MeenyLatex$Parser$LatexList = function (a) {
	return {$: 8, a: a};
};
var author$project$MeenyLatex$Parser$Environment = F3(
	function (a, b, c) {
		return {$: 7, a: a, b: b, c: c};
	});
var author$project$MeenyLatex$Parser$DisplayMath = function (a) {
	return {$: 4, a: a};
};
var author$project$MeenyLatex$Parser$displayMathBrackets = A2(
	elm$parser$Parser$keeper,
	A2(
		elm$parser$Parser$ignorer,
		A2(
			elm$parser$Parser$ignorer,
			elm$parser$Parser$succeed(author$project$MeenyLatex$Parser$DisplayMath),
			author$project$MeenyLatex$ParserHelpers$spaces),
		elm$parser$Parser$symbol('\\[')),
	author$project$MeenyLatex$ParserHelpers$parseTo('\\]'));
var author$project$MeenyLatex$Parser$displayMathDollar = A2(
	elm$parser$Parser$keeper,
	A2(
		elm$parser$Parser$ignorer,
		A2(
			elm$parser$Parser$ignorer,
			elm$parser$Parser$succeed(author$project$MeenyLatex$Parser$DisplayMath),
			author$project$MeenyLatex$ParserHelpers$spaces),
		elm$parser$Parser$symbol('$$')),
	A2(
		elm$parser$Parser$ignorer,
		author$project$MeenyLatex$ParserHelpers$parseTo('$$'),
		author$project$MeenyLatex$ParserHelpers$ws));
var author$project$MeenyLatex$Parser$InlineMath = function (a) {
	return {$: 3, a: a};
};
var author$project$MeenyLatex$Parser$inlineMath = function (wsParser) {
	return A2(
		elm$parser$Parser$keeper,
		A2(
			elm$parser$Parser$ignorer,
			elm$parser$Parser$succeed(author$project$MeenyLatex$Parser$InlineMath),
			elm$parser$Parser$symbol('$')),
		A2(
			elm$parser$Parser$ignorer,
			author$project$MeenyLatex$ParserHelpers$parseTo('$'),
			wsParser));
};
var author$project$MeenyLatex$Parser$Macro = F3(
	function (a, b, c) {
		return {$: 6, a: a, b: b, c: c};
	});
var author$project$MeenyLatex$Parser$inMacroArg = function (c) {
	return !((c === '\\') || ((c === '$') || ((c === '}') || ((c === ' ') || (c === '\n')))));
};
var elm$parser$Parser$UnexpectedChar = {$: 11};
var elm$core$Basics$True = 0;
var elm$parser$Parser$Advanced$chompIf = F2(
	function (isGood, expecting) {
		return function (s) {
			var newOffset = A3(elm$parser$Parser$Advanced$isSubChar, isGood, s.b, s.a);
			return _Utils_eq(newOffset, -1) ? A2(
				elm$parser$Parser$Advanced$Bad,
				false,
				A2(elm$parser$Parser$Advanced$fromState, s, expecting)) : (_Utils_eq(newOffset, -2) ? A3(
				elm$parser$Parser$Advanced$Good,
				true,
				0,
				{bc: 1, ar: s.ar, c: s.c, b: s.b + 1, bt: s.bt + 1, a: s.a}) : A3(
				elm$parser$Parser$Advanced$Good,
				true,
				0,
				{bc: s.bc + 1, ar: s.ar, c: s.c, b: newOffset, bt: s.bt, a: s.a}));
		};
	});
var elm$parser$Parser$chompIf = function (isGood) {
	return A2(elm$parser$Parser$Advanced$chompIf, isGood, elm$parser$Parser$UnexpectedChar);
};
var elm$parser$Parser$Advanced$getOffset = function (s) {
	return A3(elm$parser$Parser$Advanced$Good, false, s.b, s);
};
var elm$parser$Parser$getOffset = elm$parser$Parser$Advanced$getOffset;
var elm$parser$Parser$Advanced$getSource = function (s) {
	return A3(elm$parser$Parser$Advanced$Good, false, s.a, s);
};
var elm$parser$Parser$getSource = elm$parser$Parser$Advanced$getSource;
var author$project$MeenyLatex$Parser$word = function (inWord) {
	return A2(
		elm$parser$Parser$keeper,
		A2(
			elm$parser$Parser$keeper,
			A2(
				elm$parser$Parser$keeper,
				A2(
					elm$parser$Parser$ignorer,
					elm$parser$Parser$succeed(elm$core$String$slice),
					author$project$MeenyLatex$ParserHelpers$ws),
				A2(
					elm$parser$Parser$ignorer,
					A2(
						elm$parser$Parser$ignorer,
						A2(
							elm$parser$Parser$ignorer,
							elm$parser$Parser$getOffset,
							elm$parser$Parser$chompIf(inWord)),
						elm$parser$Parser$chompWhile(inWord)),
					author$project$MeenyLatex$ParserHelpers$ws)),
			elm$parser$Parser$getOffset),
		elm$parser$Parser$getSource);
};
var author$project$MeenyLatex$Parser$macroArgWord = author$project$MeenyLatex$Parser$word(author$project$MeenyLatex$Parser$inMacroArg);
var elm$parser$Parser$Done = function (a) {
	return {$: 1, a: a};
};
var elm$parser$Parser$Loop = function (a) {
	return {$: 0, a: a};
};
var elm$parser$Parser$Advanced$Append = F2(
	function (a, b) {
		return {$: 2, a: a, b: b};
	});
var elm$parser$Parser$Advanced$oneOfHelp = F3(
	function (s0, bag, parsers) {
		oneOfHelp:
		while (true) {
			if (!parsers.b) {
				return A2(elm$parser$Parser$Advanced$Bad, false, bag);
			} else {
				var parse = parsers.a;
				var remainingParsers = parsers.b;
				var _n1 = parse(s0);
				if (!_n1.$) {
					var step = _n1;
					return step;
				} else {
					var step = _n1;
					var p = step.a;
					var x = step.b;
					if (p) {
						return step;
					} else {
						var $temp$s0 = s0,
							$temp$bag = A2(elm$parser$Parser$Advanced$Append, bag, x),
							$temp$parsers = remainingParsers;
						s0 = $temp$s0;
						bag = $temp$bag;
						parsers = $temp$parsers;
						continue oneOfHelp;
					}
				}
			}
		}
	});
var elm$parser$Parser$Advanced$oneOf = function (parsers) {
	return function (s) {
		return A3(elm$parser$Parser$Advanced$oneOfHelp, s, elm$parser$Parser$Advanced$Empty, parsers);
	};
};
var elm$parser$Parser$oneOf = elm$parser$Parser$Advanced$oneOf;
var author$project$MeenyLatex$ParserHelpers$itemListHelper = F2(
	function (itemParser, revItems) {
		return elm$parser$Parser$oneOf(
			_List_fromArray(
				[
					A2(
					elm$parser$Parser$keeper,
					elm$parser$Parser$succeed(
						function (item) {
							return elm$parser$Parser$Loop(
								A2(elm$core$List$cons, item, revItems));
						}),
					itemParser),
					A2(
					elm$parser$Parser$map,
					function (_n0) {
						return elm$parser$Parser$Done(
							elm$core$List$reverse(revItems));
					},
					elm$parser$Parser$succeed(0))
				]));
	});
var elm$parser$Parser$Advanced$Done = function (a) {
	return {$: 1, a: a};
};
var elm$parser$Parser$Advanced$Loop = function (a) {
	return {$: 0, a: a};
};
var elm$parser$Parser$toAdvancedStep = function (step) {
	if (!step.$) {
		var s = step.a;
		return elm$parser$Parser$Advanced$Loop(s);
	} else {
		var a = step.a;
		return elm$parser$Parser$Advanced$Done(a);
	}
};
var elm$parser$Parser$Advanced$loopHelp = F4(
	function (p, state, callback, s0) {
		loopHelp:
		while (true) {
			var _n0 = callback(state);
			var parse = _n0;
			var _n1 = parse(s0);
			if (!_n1.$) {
				var p1 = _n1.a;
				var step = _n1.b;
				var s1 = _n1.c;
				if (!step.$) {
					var newState = step.a;
					var $temp$p = p || p1,
						$temp$state = newState,
						$temp$callback = callback,
						$temp$s0 = s1;
					p = $temp$p;
					state = $temp$state;
					callback = $temp$callback;
					s0 = $temp$s0;
					continue loopHelp;
				} else {
					var result = step.a;
					return A3(elm$parser$Parser$Advanced$Good, p || p1, result, s1);
				}
			} else {
				var p1 = _n1.a;
				var x = _n1.b;
				return A2(elm$parser$Parser$Advanced$Bad, p || p1, x);
			}
		}
	});
var elm$parser$Parser$Advanced$loop = F2(
	function (state, callback) {
		return function (s) {
			return A4(elm$parser$Parser$Advanced$loopHelp, false, state, callback, s);
		};
	});
var elm$parser$Parser$loop = F2(
	function (state, callback) {
		return A2(
			elm$parser$Parser$Advanced$loop,
			state,
			function (s) {
				return A2(
					elm$parser$Parser$map,
					elm$parser$Parser$toAdvancedStep,
					callback(s));
			});
	});
var author$project$MeenyLatex$ParserHelpers$itemList_ = F2(
	function (initialList, itemParser) {
		return A2(
			elm$parser$Parser$loop,
			initialList,
			author$project$MeenyLatex$ParserHelpers$itemListHelper(itemParser));
	});
var elm$parser$Parser$Advanced$andThen = F2(
	function (callback, _n0) {
		var parseA = _n0;
		return function (s0) {
			var _n1 = parseA(s0);
			if (_n1.$ === 1) {
				var p = _n1.a;
				var x = _n1.b;
				return A2(elm$parser$Parser$Advanced$Bad, p, x);
			} else {
				var p1 = _n1.a;
				var a = _n1.b;
				var s1 = _n1.c;
				var _n2 = callback(a);
				var parseB = _n2;
				var _n3 = parseB(s1);
				if (_n3.$ === 1) {
					var p2 = _n3.a;
					var x = _n3.b;
					return A2(elm$parser$Parser$Advanced$Bad, p1 || p2, x);
				} else {
					var p2 = _n3.a;
					var b = _n3.b;
					var s2 = _n3.c;
					return A3(elm$parser$Parser$Advanced$Good, p1 || p2, b, s2);
				}
			}
		};
	});
var elm$parser$Parser$andThen = elm$parser$Parser$Advanced$andThen;
var author$project$MeenyLatex$ParserHelpers$nonEmptyItemList = function (itemParser) {
	return A2(
		elm$parser$Parser$andThen,
		function (x) {
			return A2(
				author$project$MeenyLatex$ParserHelpers$itemList_,
				_List_fromArray(
					[x]),
				itemParser);
		},
		itemParser);
};
var elm$core$String$join = F2(
	function (sep, chunks) {
		return A2(
			_String_join,
			sep,
			_List_toArray(chunks));
	});
var author$project$MeenyLatex$Parser$macroArgWords = A2(
	elm$parser$Parser$map,
	author$project$MeenyLatex$Parser$LXString,
	A2(
		elm$parser$Parser$map,
		elm$core$String$join(' '),
		author$project$MeenyLatex$ParserHelpers$nonEmptyItemList(author$project$MeenyLatex$Parser$macroArgWord)));
var elm$core$Basics$and = _Basics_and;
var elm$core$Basics$le = _Utils_le;
var elm$core$Char$toCode = _Char_toCode;
var elm$core$Char$isDigit = function (_char) {
	var code = elm$core$Char$toCode(_char);
	return (code <= 57) && (48 <= code);
};
var elm$core$Char$isLower = function (_char) {
	var code = elm$core$Char$toCode(_char);
	return (97 <= code) && (code <= 122);
};
var elm$core$Char$isUpper = function (_char) {
	var code = elm$core$Char$toCode(_char);
	return (code <= 90) && (65 <= code);
};
var elm$core$Char$isAlphaNum = function (_char) {
	return elm$core$Char$isLower(_char) || (elm$core$Char$isUpper(_char) || elm$core$Char$isDigit(_char));
};
var elm$core$Dict$RBEmpty_elm_builtin = {$: -2};
var elm$core$Dict$empty = elm$core$Dict$RBEmpty_elm_builtin;
var elm$core$Set$Set_elm_builtin = elm$core$Basics$identity;
var elm$core$Set$empty = elm$core$Dict$empty;
var elm$core$Dict$Black = 1;
var elm$core$Dict$RBNode_elm_builtin = F5(
	function (a, b, c, d, e) {
		return {$: -1, a: a, b: b, c: c, d: d, e: e};
	});
var elm$core$Basics$compare = _Utils_compare;
var elm$core$Dict$Red = 0;
var elm$core$Dict$balance = F5(
	function (color, key, value, left, right) {
		if ((right.$ === -1) && (!right.a)) {
			var _n1 = right.a;
			var rK = right.b;
			var rV = right.c;
			var rLeft = right.d;
			var rRight = right.e;
			if ((left.$ === -1) && (!left.a)) {
				var _n3 = left.a;
				var lK = left.b;
				var lV = left.c;
				var lLeft = left.d;
				var lRight = left.e;
				return A5(
					elm$core$Dict$RBNode_elm_builtin,
					0,
					key,
					value,
					A5(elm$core$Dict$RBNode_elm_builtin, 1, lK, lV, lLeft, lRight),
					A5(elm$core$Dict$RBNode_elm_builtin, 1, rK, rV, rLeft, rRight));
			} else {
				return A5(
					elm$core$Dict$RBNode_elm_builtin,
					color,
					rK,
					rV,
					A5(elm$core$Dict$RBNode_elm_builtin, 0, key, value, left, rLeft),
					rRight);
			}
		} else {
			if ((((left.$ === -1) && (!left.a)) && (left.d.$ === -1)) && (!left.d.a)) {
				var _n5 = left.a;
				var lK = left.b;
				var lV = left.c;
				var _n6 = left.d;
				var _n7 = _n6.a;
				var llK = _n6.b;
				var llV = _n6.c;
				var llLeft = _n6.d;
				var llRight = _n6.e;
				var lRight = left.e;
				return A5(
					elm$core$Dict$RBNode_elm_builtin,
					0,
					lK,
					lV,
					A5(elm$core$Dict$RBNode_elm_builtin, 1, llK, llV, llLeft, llRight),
					A5(elm$core$Dict$RBNode_elm_builtin, 1, key, value, lRight, right));
			} else {
				return A5(elm$core$Dict$RBNode_elm_builtin, color, key, value, left, right);
			}
		}
	});
var elm$core$Dict$insertHelp = F3(
	function (key, value, dict) {
		if (dict.$ === -2) {
			return A5(elm$core$Dict$RBNode_elm_builtin, 0, key, value, elm$core$Dict$RBEmpty_elm_builtin, elm$core$Dict$RBEmpty_elm_builtin);
		} else {
			var nColor = dict.a;
			var nKey = dict.b;
			var nValue = dict.c;
			var nLeft = dict.d;
			var nRight = dict.e;
			var _n1 = A2(elm$core$Basics$compare, key, nKey);
			switch (_n1) {
				case 0:
					return A5(
						elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						A3(elm$core$Dict$insertHelp, key, value, nLeft),
						nRight);
				case 1:
					return A5(elm$core$Dict$RBNode_elm_builtin, nColor, nKey, value, nLeft, nRight);
				default:
					return A5(
						elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						nLeft,
						A3(elm$core$Dict$insertHelp, key, value, nRight));
			}
		}
	});
var elm$core$Dict$insert = F3(
	function (key, value, dict) {
		var _n0 = A3(elm$core$Dict$insertHelp, key, value, dict);
		if ((_n0.$ === -1) && (!_n0.a)) {
			var _n1 = _n0.a;
			var k = _n0.b;
			var v = _n0.c;
			var l = _n0.d;
			var r = _n0.e;
			return A5(elm$core$Dict$RBNode_elm_builtin, 1, k, v, l, r);
		} else {
			var x = _n0;
			return x;
		}
	});
var elm$core$Set$insert = F2(
	function (key, _n0) {
		var dict = _n0;
		return A3(elm$core$Dict$insert, key, 0, dict);
	});
var elm$core$Set$fromList = function (list) {
	return A3(elm$core$List$foldl, elm$core$Set$insert, elm$core$Set$empty, list);
};
var elm$core$String$dropLeft = F2(
	function (n, string) {
		return (n < 1) ? string : A3(
			elm$core$String$slice,
			n,
			elm$core$String$length(string),
			string);
	});
var elm$parser$Parser$ExpectingVariable = {$: 7};
var elm$core$Dict$get = F2(
	function (targetKey, dict) {
		get:
		while (true) {
			if (dict.$ === -2) {
				return elm$core$Maybe$Nothing;
			} else {
				var key = dict.b;
				var value = dict.c;
				var left = dict.d;
				var right = dict.e;
				var _n1 = A2(elm$core$Basics$compare, targetKey, key);
				switch (_n1) {
					case 0:
						var $temp$targetKey = targetKey,
							$temp$dict = left;
						targetKey = $temp$targetKey;
						dict = $temp$dict;
						continue get;
					case 1:
						return elm$core$Maybe$Just(value);
					default:
						var $temp$targetKey = targetKey,
							$temp$dict = right;
						targetKey = $temp$targetKey;
						dict = $temp$dict;
						continue get;
				}
			}
		}
	});
var elm$core$Dict$member = F2(
	function (key, dict) {
		var _n0 = A2(elm$core$Dict$get, key, dict);
		if (!_n0.$) {
			return true;
		} else {
			return false;
		}
	});
var elm$core$Set$member = F2(
	function (key, _n0) {
		var dict = _n0;
		return A2(elm$core$Dict$member, key, dict);
	});
var elm$parser$Parser$Advanced$varHelp = F7(
	function (isGood, offset, row, col, src, indent, context) {
		varHelp:
		while (true) {
			var newOffset = A3(elm$parser$Parser$Advanced$isSubChar, isGood, offset, src);
			if (_Utils_eq(newOffset, -1)) {
				return {bc: col, ar: context, c: indent, b: offset, bt: row, a: src};
			} else {
				if (_Utils_eq(newOffset, -2)) {
					var $temp$isGood = isGood,
						$temp$offset = offset + 1,
						$temp$row = row + 1,
						$temp$col = 1,
						$temp$src = src,
						$temp$indent = indent,
						$temp$context = context;
					isGood = $temp$isGood;
					offset = $temp$offset;
					row = $temp$row;
					col = $temp$col;
					src = $temp$src;
					indent = $temp$indent;
					context = $temp$context;
					continue varHelp;
				} else {
					var $temp$isGood = isGood,
						$temp$offset = newOffset,
						$temp$row = row,
						$temp$col = col + 1,
						$temp$src = src,
						$temp$indent = indent,
						$temp$context = context;
					isGood = $temp$isGood;
					offset = $temp$offset;
					row = $temp$row;
					col = $temp$col;
					src = $temp$src;
					indent = $temp$indent;
					context = $temp$context;
					continue varHelp;
				}
			}
		}
	});
var elm$parser$Parser$Advanced$variable = function (i) {
	return function (s) {
		var firstOffset = A3(elm$parser$Parser$Advanced$isSubChar, i.aZ, s.b, s.a);
		if (_Utils_eq(firstOffset, -1)) {
			return A2(
				elm$parser$Parser$Advanced$Bad,
				false,
				A2(elm$parser$Parser$Advanced$fromState, s, i.ax));
		} else {
			var s1 = _Utils_eq(firstOffset, -2) ? A7(elm$parser$Parser$Advanced$varHelp, i.aD, s.b + 1, s.bt + 1, 1, s.a, s.c, s.ar) : A7(elm$parser$Parser$Advanced$varHelp, i.aD, firstOffset, s.bt, s.bc + 1, s.a, s.c, s.ar);
			var name = A3(elm$core$String$slice, s.b, s1.b, s.a);
			return A2(elm$core$Set$member, name, i.aV) ? A2(
				elm$parser$Parser$Advanced$Bad,
				false,
				A2(elm$parser$Parser$Advanced$fromState, s, i.ax)) : A3(elm$parser$Parser$Advanced$Good, true, name, s1);
		}
	};
};
var elm$parser$Parser$variable = function (i) {
	return elm$parser$Parser$Advanced$variable(
		{ax: elm$parser$Parser$ExpectingVariable, aD: i.aD, aV: i.aV, aZ: i.aZ});
};
var author$project$MeenyLatex$Parser$macroName = A2(
	elm$parser$Parser$map,
	elm$core$String$dropLeft(1),
	elm$parser$Parser$variable(
		{
			aD: function (c) {
				return elm$core$Char$isAlphaNum(c);
			},
			aV: elm$core$Set$fromList(
				_List_fromArray(
					['\\begin', '\\end', '\\item', '\\bibitem'])),
			aZ: function (c) {
				return c === '\\';
			}
		}));
var author$project$MeenyLatex$Parser$inOptionArgWord = function (c) {
	return !((c === '\\') || ((c === '$') || ((c === ']') || ((c === ' ') || (c === '\n')))));
};
var author$project$MeenyLatex$Parser$optionArgWord = author$project$MeenyLatex$Parser$word(author$project$MeenyLatex$Parser$inOptionArgWord);
var author$project$MeenyLatex$Parser$optionArgWords = A2(
	elm$parser$Parser$map,
	author$project$MeenyLatex$Parser$LXString,
	A2(
		elm$parser$Parser$map,
		elm$core$String$join(' '),
		author$project$MeenyLatex$ParserHelpers$nonEmptyItemList(author$project$MeenyLatex$Parser$optionArgWord)));
var author$project$MeenyLatex$ParserHelpers$itemList = function (itemParser) {
	return A2(author$project$MeenyLatex$ParserHelpers$itemList_, _List_Nil, itemParser);
};
var author$project$MeenyLatex$Parser$optionalArg = A2(
	elm$parser$Parser$map,
	author$project$MeenyLatex$Parser$LatexList,
	A2(
		elm$parser$Parser$keeper,
		A2(
			elm$parser$Parser$ignorer,
			elm$parser$Parser$succeed(elm$core$Basics$identity),
			elm$parser$Parser$symbol('[')),
		A2(
			elm$parser$Parser$ignorer,
			author$project$MeenyLatex$ParserHelpers$itemList(
				elm$parser$Parser$oneOf(
					_List_fromArray(
						[
							author$project$MeenyLatex$Parser$optionArgWords,
							author$project$MeenyLatex$Parser$inlineMath(author$project$MeenyLatex$ParserHelpers$spaces)
						]))),
			elm$parser$Parser$symbol(']'))));
var elm$parser$Parser$Advanced$lazy = function (thunk) {
	return function (s) {
		var _n0 = thunk(0);
		var parse = _n0;
		return parse(s);
	};
};
var elm$parser$Parser$lazy = elm$parser$Parser$Advanced$lazy;
var author$project$MeenyLatex$Parser$macro = function (wsParser) {
	return A2(
		elm$parser$Parser$keeper,
		A2(
			elm$parser$Parser$keeper,
			A2(
				elm$parser$Parser$keeper,
				elm$parser$Parser$succeed(author$project$MeenyLatex$Parser$Macro),
				author$project$MeenyLatex$Parser$macroName),
			author$project$MeenyLatex$ParserHelpers$itemList(author$project$MeenyLatex$Parser$optionalArg)),
		A2(
			elm$parser$Parser$ignorer,
			author$project$MeenyLatex$ParserHelpers$itemList(
				author$project$MeenyLatex$Parser$cyclic$arg()),
			wsParser));
};
function author$project$MeenyLatex$Parser$cyclic$arg() {
	return A2(
		elm$parser$Parser$map,
		author$project$MeenyLatex$Parser$LatexList,
		A2(
			elm$parser$Parser$keeper,
			A2(
				elm$parser$Parser$ignorer,
				elm$parser$Parser$succeed(elm$core$Basics$identity),
				elm$parser$Parser$symbol('{')),
			A2(
				elm$parser$Parser$ignorer,
				author$project$MeenyLatex$ParserHelpers$itemList(
					elm$parser$Parser$oneOf(
						_List_fromArray(
							[
								author$project$MeenyLatex$Parser$macroArgWords,
								author$project$MeenyLatex$Parser$inlineMath(author$project$MeenyLatex$ParserHelpers$spaces),
								elm$parser$Parser$lazy(
								function (_n0) {
									return author$project$MeenyLatex$Parser$macro(author$project$MeenyLatex$ParserHelpers$spaces);
								})
							]))),
				elm$parser$Parser$symbol('}'))));
}
var author$project$MeenyLatex$Parser$arg = author$project$MeenyLatex$Parser$cyclic$arg();
author$project$MeenyLatex$Parser$cyclic$arg = function () {
	return author$project$MeenyLatex$Parser$arg;
};
var author$project$MeenyLatex$Parser$Item = F2(
	function (a, b) {
		return {$: 2, a: a, b: b};
	});
var author$project$MeenyLatex$Parser$notSpaceOrSpecialCharacters = function (c) {
	return !((c === ' ') || ((c === '\n') || ((c === '\\') || (c === '$'))));
};
var author$project$MeenyLatex$Parser$words_ = A2(
	elm$parser$Parser$map,
	author$project$MeenyLatex$Parser$LXString,
	A2(
		elm$parser$Parser$map,
		elm$core$String$join(' '),
		author$project$MeenyLatex$ParserHelpers$nonEmptyItemList(
			author$project$MeenyLatex$Parser$word(author$project$MeenyLatex$Parser$notSpaceOrSpecialCharacters))));
var author$project$MeenyLatex$Parser$words = A2(
	elm$parser$Parser$keeper,
	A2(
		elm$parser$Parser$ignorer,
		elm$parser$Parser$succeed(elm$core$Basics$identity),
		author$project$MeenyLatex$ParserHelpers$ws),
	A2(elm$parser$Parser$ignorer, author$project$MeenyLatex$Parser$words_, author$project$MeenyLatex$ParserHelpers$ws));
var author$project$MeenyLatex$Parser$item = A2(
	elm$parser$Parser$map,
	function (x) {
		return A2(
			author$project$MeenyLatex$Parser$Item,
			1,
			author$project$MeenyLatex$Parser$LatexList(x));
	},
	A2(
		elm$parser$Parser$keeper,
		A2(
			elm$parser$Parser$ignorer,
			A2(
				elm$parser$Parser$ignorer,
				A2(
					elm$parser$Parser$ignorer,
					A2(
						elm$parser$Parser$ignorer,
						elm$parser$Parser$succeed(elm$core$Basics$identity),
						author$project$MeenyLatex$ParserHelpers$spaces),
					elm$parser$Parser$symbol('\\item')),
				elm$parser$Parser$symbol(' ')),
			author$project$MeenyLatex$ParserHelpers$spaces),
		A2(
			elm$parser$Parser$ignorer,
			author$project$MeenyLatex$ParserHelpers$itemList(
				elm$parser$Parser$oneOf(
					_List_fromArray(
						[
							author$project$MeenyLatex$Parser$words,
							author$project$MeenyLatex$Parser$inlineMath(author$project$MeenyLatex$ParserHelpers$spaces),
							author$project$MeenyLatex$Parser$macro(author$project$MeenyLatex$ParserHelpers$spaces)
						]))),
			author$project$MeenyLatex$ParserHelpers$ws)));
var author$project$MeenyLatex$Parser$itemEnvironmentBody = F2(
	function (endWoord, envType) {
		return A2(
			elm$parser$Parser$map,
			A2(author$project$MeenyLatex$Parser$Environment, envType, _List_Nil),
			A2(
				elm$parser$Parser$map,
				author$project$MeenyLatex$Parser$LatexList,
				A2(
					elm$parser$Parser$keeper,
					A2(
						elm$parser$Parser$ignorer,
						elm$parser$Parser$succeed(elm$core$Basics$identity),
						author$project$MeenyLatex$ParserHelpers$ws),
					A2(
						elm$parser$Parser$ignorer,
						A2(
							elm$parser$Parser$ignorer,
							A2(
								elm$parser$Parser$ignorer,
								author$project$MeenyLatex$ParserHelpers$itemList(author$project$MeenyLatex$Parser$item),
								author$project$MeenyLatex$ParserHelpers$ws),
							elm$parser$Parser$symbol(endWoord)),
						author$project$MeenyLatex$ParserHelpers$ws))));
	});
var author$project$MeenyLatex$Parser$passThroughBody = F2(
	function (endWoord, envType) {
		return A2(
			elm$parser$Parser$map,
			A2(author$project$MeenyLatex$Parser$Environment, envType, _List_Nil),
			A2(
				elm$parser$Parser$map,
				author$project$MeenyLatex$Parser$LXString,
				A2(
					elm$parser$Parser$keeper,
					elm$parser$Parser$succeed(elm$core$Basics$identity),
					A2(
						elm$parser$Parser$ignorer,
						author$project$MeenyLatex$ParserHelpers$parseTo(endWoord),
						author$project$MeenyLatex$ParserHelpers$ws))));
	});
var author$project$MeenyLatex$Parser$inSpecialWord = function (c) {
	return !((c === ' ') || ((c === '\n') || ((c === '\\') || (c === '$'))));
};
var author$project$MeenyLatex$Parser$specialWord = author$project$MeenyLatex$Parser$word(author$project$MeenyLatex$Parser$inSpecialWord);
var author$project$MeenyLatex$Parser$specialWords = A2(
	elm$parser$Parser$map,
	author$project$MeenyLatex$Parser$LXString,
	A2(
		elm$parser$Parser$map,
		elm$core$String$join(' '),
		author$project$MeenyLatex$ParserHelpers$nonEmptyItemList(author$project$MeenyLatex$Parser$specialWord)));
var author$project$MeenyLatex$Parser$tableCell = A2(
	elm$parser$Parser$keeper,
	elm$parser$Parser$succeed(elm$core$Basics$identity),
	elm$parser$Parser$oneOf(
		_List_fromArray(
			[
				author$project$MeenyLatex$Parser$inlineMath(author$project$MeenyLatex$ParserHelpers$spaces),
				author$project$MeenyLatex$Parser$specialWords
			])));
var author$project$MeenyLatex$Parser$nextCell = A2(
	elm$parser$Parser$keeper,
	A2(
		elm$parser$Parser$ignorer,
		A2(
			elm$parser$Parser$ignorer,
			elm$parser$Parser$succeed(elm$core$Basics$identity),
			elm$parser$Parser$symbol('&')),
		author$project$MeenyLatex$ParserHelpers$spaces),
	author$project$MeenyLatex$Parser$tableCell);
var author$project$MeenyLatex$Parser$tableCellHelp = function (revCells) {
	return elm$parser$Parser$oneOf(
		_List_fromArray(
			[
				A2(
				elm$parser$Parser$andThen,
				function (c) {
					return author$project$MeenyLatex$Parser$tableCellHelp(
						A2(elm$core$List$cons, c, revCells));
				},
				author$project$MeenyLatex$Parser$nextCell),
				elm$parser$Parser$succeed(
				elm$core$List$reverse(revCells))
			]));
};
var author$project$MeenyLatex$Parser$tableRow = A2(
	elm$parser$Parser$map,
	author$project$MeenyLatex$Parser$LatexList,
	A2(
		elm$parser$Parser$keeper,
		A2(
			elm$parser$Parser$ignorer,
			elm$parser$Parser$succeed(elm$core$Basics$identity),
			author$project$MeenyLatex$ParserHelpers$spaces),
		A2(
			elm$parser$Parser$ignorer,
			A2(
				elm$parser$Parser$ignorer,
				A2(
					elm$parser$Parser$andThen,
					function (c) {
						return author$project$MeenyLatex$Parser$tableCellHelp(
							_List_fromArray(
								[c]));
					},
					author$project$MeenyLatex$Parser$tableCell),
				author$project$MeenyLatex$ParserHelpers$spaces),
			elm$parser$Parser$oneOf(
				_List_fromArray(
					[
						elm$parser$Parser$symbol('\n'),
						elm$parser$Parser$symbol('\\\\\n')
					])))));
var author$project$MeenyLatex$Parser$tableBody = A2(
	elm$parser$Parser$map,
	author$project$MeenyLatex$Parser$LatexList,
	A2(
		elm$parser$Parser$keeper,
		A2(
			elm$parser$Parser$ignorer,
			elm$parser$Parser$succeed(elm$core$Basics$identity),
			author$project$MeenyLatex$ParserHelpers$ws),
		author$project$MeenyLatex$ParserHelpers$nonEmptyItemList(author$project$MeenyLatex$Parser$tableRow)));
var author$project$MeenyLatex$Parser$tabularEnvironmentBody = F2(
	function (endWoord, envType) {
		return A2(
			elm$parser$Parser$keeper,
			A2(
				elm$parser$Parser$keeper,
				A2(
					elm$parser$Parser$ignorer,
					elm$parser$Parser$succeed(
						author$project$MeenyLatex$Parser$Environment(envType)),
					author$project$MeenyLatex$ParserHelpers$ws),
				author$project$MeenyLatex$ParserHelpers$itemList(author$project$MeenyLatex$Parser$arg)),
			A2(
				elm$parser$Parser$ignorer,
				A2(
					elm$parser$Parser$ignorer,
					A2(elm$parser$Parser$ignorer, author$project$MeenyLatex$Parser$tableBody, author$project$MeenyLatex$ParserHelpers$ws),
					elm$parser$Parser$symbol(endWoord)),
				author$project$MeenyLatex$ParserHelpers$ws));
	});
var elm$core$Dict$fromList = function (assocs) {
	return A3(
		elm$core$List$foldl,
		F2(
			function (_n0, dict) {
				var key = _n0.a;
				var value = _n0.b;
				return A3(elm$core$Dict$insert, key, value, dict);
			}),
		elm$core$Dict$empty,
		assocs);
};
var author$project$MeenyLatex$Parser$parseEnvironmentDict = elm$core$Dict$fromList(
	_List_fromArray(
		[
			_Utils_Tuple2(
			'enumerate',
			F2(
				function (endWoord, envType) {
					return A2(author$project$MeenyLatex$Parser$itemEnvironmentBody, endWoord, envType);
				})),
			_Utils_Tuple2(
			'itemize',
			F2(
				function (endWoord, envType) {
					return A2(author$project$MeenyLatex$Parser$itemEnvironmentBody, endWoord, envType);
				})),
			_Utils_Tuple2(
			'tabular',
			F2(
				function (endWoord, envType) {
					return A2(author$project$MeenyLatex$Parser$tabularEnvironmentBody, endWoord, envType);
				})),
			_Utils_Tuple2(
			'passThrough',
			F2(
				function (endWoord, envType) {
					return A2(author$project$MeenyLatex$Parser$passThroughBody, endWoord, envType);
				}))
		]));
var author$project$MeenyLatex$Parser$SMacro = F4(
	function (a, b, c, d) {
		return {$: 5, a: a, b: b, c: c, d: d};
	});
var author$project$MeenyLatex$Parser$smacroBody = A2(
	elm$parser$Parser$map,
	function (x) {
		return author$project$MeenyLatex$Parser$LatexList(x);
	},
	A2(
		elm$parser$Parser$keeper,
		A2(
			elm$parser$Parser$ignorer,
			elm$parser$Parser$succeed(elm$core$Basics$identity),
			author$project$MeenyLatex$ParserHelpers$spaces),
		A2(
			elm$parser$Parser$ignorer,
			author$project$MeenyLatex$ParserHelpers$nonEmptyItemList(
				elm$parser$Parser$oneOf(
					_List_fromArray(
						[
							author$project$MeenyLatex$Parser$specialWords,
							author$project$MeenyLatex$Parser$inlineMath(author$project$MeenyLatex$ParserHelpers$spaces),
							author$project$MeenyLatex$Parser$macro(author$project$MeenyLatex$ParserHelpers$spaces)
						]))),
			elm$parser$Parser$symbol('\n\n'))));
var author$project$MeenyLatex$Parser$smacroName = elm$parser$Parser$variable(
	{
		aD: function (c) {
			return elm$core$Char$isAlphaNum(c);
		},
		aV: elm$core$Set$fromList(
			_List_fromArray(
				['\\begin', '\\end', '\\item'])),
		aZ: function (c) {
			return c === '\\';
		}
	});
var author$project$MeenyLatex$Parser$smacro = A2(
	elm$parser$Parser$keeper,
	A2(
		elm$parser$Parser$keeper,
		A2(
			elm$parser$Parser$keeper,
			A2(
				elm$parser$Parser$keeper,
				elm$parser$Parser$succeed(author$project$MeenyLatex$Parser$SMacro),
				author$project$MeenyLatex$Parser$smacroName),
			author$project$MeenyLatex$ParserHelpers$itemList(author$project$MeenyLatex$Parser$optionalArg)),
		author$project$MeenyLatex$ParserHelpers$itemList(author$project$MeenyLatex$Parser$arg)),
	author$project$MeenyLatex$Parser$smacroBody);
var author$project$MeenyLatex$Parser$Comment = function (a) {
	return {$: 1, a: a};
};
var author$project$MeenyLatex$Parser$texComment = A2(
	elm$parser$Parser$map,
	author$project$MeenyLatex$Parser$Comment,
	elm$parser$Parser$getChompedString(
		A2(
			elm$parser$Parser$ignorer,
			A2(
				elm$parser$Parser$ignorer,
				A2(
					elm$parser$Parser$ignorer,
					A2(
						elm$parser$Parser$ignorer,
						elm$parser$Parser$succeed(0),
						elm$parser$Parser$chompIf(
							function (c) {
								return c === '%';
							})),
					elm$parser$Parser$chompWhile(
						function (c) {
							return c !== '\n';
						})),
				elm$parser$Parser$chompIf(
					function (c) {
						return c === '\n';
					})),
			author$project$MeenyLatex$ParserHelpers$ws)));
var elm$core$List$any = F2(
	function (isOkay, list) {
		any:
		while (true) {
			if (!list.b) {
				return false;
			} else {
				var x = list.a;
				var xs = list.b;
				if (isOkay(x)) {
					return true;
				} else {
					var $temp$isOkay = isOkay,
						$temp$list = xs;
					isOkay = $temp$isOkay;
					list = $temp$list;
					continue any;
				}
			}
		}
	});
var elm$core$List$member = F2(
	function (x, xs) {
		return A2(
			elm$core$List$any,
			function (a) {
				return _Utils_eq(a, x);
			},
			xs);
	});
var author$project$MeenyLatex$Parser$environmentOfType = function (envType) {
	var theEndWord = '\\end{' + (envType + '}');
	var envKind = A2(
		elm$core$List$member,
		envType,
		_List_fromArray(
			['equation', 'align', 'eqnarray', 'verbatim', 'listing', 'verse'])) ? 'passThrough' : envType;
	return A3(author$project$MeenyLatex$Parser$environmentParser, envKind, theEndWord, envType);
};
var author$project$MeenyLatex$Parser$environmentParser = F3(
	function (envKind, theEndWord, envType) {
		var _n1 = A2(elm$core$Dict$get, envKind, author$project$MeenyLatex$Parser$parseEnvironmentDict);
		if (!_n1.$) {
			var p = _n1.a;
			return A2(p, theEndWord, envType);
		} else {
			return A2(author$project$MeenyLatex$Parser$standardEnvironmentBody, theEndWord, envType);
		}
	});
var author$project$MeenyLatex$Parser$standardEnvironmentBody = F2(
	function (endWoord, envType) {
		return A2(
			elm$parser$Parser$map,
			A2(author$project$MeenyLatex$Parser$Environment, envType, _List_Nil),
			A2(
				elm$parser$Parser$map,
				author$project$MeenyLatex$Parser$LatexList,
				A2(
					elm$parser$Parser$keeper,
					A2(
						elm$parser$Parser$ignorer,
						elm$parser$Parser$succeed(elm$core$Basics$identity),
						author$project$MeenyLatex$ParserHelpers$ws),
					A2(
						elm$parser$Parser$ignorer,
						A2(
							elm$parser$Parser$ignorer,
							A2(
								elm$parser$Parser$ignorer,
								author$project$MeenyLatex$ParserHelpers$nonEmptyItemList(
									author$project$MeenyLatex$Parser$cyclic$latexExpression()),
								author$project$MeenyLatex$ParserHelpers$ws),
							elm$parser$Parser$symbol(endWoord)),
						author$project$MeenyLatex$ParserHelpers$ws))));
	});
function author$project$MeenyLatex$Parser$cyclic$environment() {
	return A2(elm$parser$Parser$andThen, author$project$MeenyLatex$Parser$environmentOfType, author$project$MeenyLatex$Parser$envName);
}
function author$project$MeenyLatex$Parser$cyclic$latexExpression() {
	return elm$parser$Parser$oneOf(
		_List_fromArray(
			[
				author$project$MeenyLatex$Parser$texComment,
				author$project$MeenyLatex$Parser$displayMathDollar,
				author$project$MeenyLatex$Parser$displayMathBrackets,
				author$project$MeenyLatex$Parser$inlineMath(author$project$MeenyLatex$ParserHelpers$ws),
				author$project$MeenyLatex$Parser$macro(author$project$MeenyLatex$ParserHelpers$ws),
				author$project$MeenyLatex$Parser$smacro,
				author$project$MeenyLatex$Parser$words,
				elm$parser$Parser$lazy(
				function (_n0) {
					return author$project$MeenyLatex$Parser$cyclic$environment();
				})
			]));
}
var author$project$MeenyLatex$Parser$environment = author$project$MeenyLatex$Parser$cyclic$environment();
author$project$MeenyLatex$Parser$cyclic$environment = function () {
	return author$project$MeenyLatex$Parser$environment;
};
var author$project$MeenyLatex$Parser$latexExpression = author$project$MeenyLatex$Parser$cyclic$latexExpression();
author$project$MeenyLatex$Parser$cyclic$latexExpression = function () {
	return author$project$MeenyLatex$Parser$latexExpression;
};
var author$project$MeenyLatex$Parser$latexList = A2(
	elm$parser$Parser$map,
	author$project$MeenyLatex$Parser$LatexList,
	A2(
		elm$parser$Parser$keeper,
		A2(
			elm$parser$Parser$ignorer,
			elm$parser$Parser$succeed(elm$core$Basics$identity),
			author$project$MeenyLatex$ParserHelpers$ws),
		author$project$MeenyLatex$ParserHelpers$nonEmptyItemList(author$project$MeenyLatex$Parser$latexExpression)));
var author$project$MeenyLatex$Parser$parse = function (text) {
	var expr = A2(elm$parser$Parser$run, author$project$MeenyLatex$Parser$latexList, text);
	if (!expr.$) {
		if (expr.a.$ === 8) {
			var list = expr.a.a;
			return list;
		} else {
			return _List_fromArray(
				[
					author$project$MeenyLatex$Parser$LXString('yada!')
				]);
		}
	} else {
		var error = expr.a;
		return _List_fromArray(
			[
				author$project$MeenyLatex$Parser$LXError(error)
			]);
	}
};
var author$project$MeenyLatex$Driver$parse = function (text) {
	return A2(
		elm$core$List$map,
		author$project$MeenyLatex$Parser$parse,
		author$project$MeenyLatex$Paragraph$logicalParagraphify(text));
};
var author$project$MeenyLatex$Differ$EditRecord = F6(
	function (paragraphs, renderedParagraphs, latexState, idList, newIdsStart, newIdsEnd) {
		return {C: idList, bm: latexState, U: newIdsEnd, V: newIdsStart, ag: paragraphs, W: renderedParagraphs};
	});
var author$project$MeenyLatex$LatexState$initialCounters = elm$core$Dict$fromList(
	_List_fromArray(
		[
			_Utils_Tuple2('s1', 0),
			_Utils_Tuple2('s2', 0),
			_Utils_Tuple2('s3', 0),
			_Utils_Tuple2('tno', 0),
			_Utils_Tuple2('eqno', 0)
		]));
var author$project$MeenyLatex$LatexState$emptyLatexState = {r: author$project$MeenyLatex$LatexState$initialCounters, as: elm$core$Dict$empty, au: elm$core$Dict$empty, a1: _List_Nil};
var author$project$MeenyLatex$Differ$emptyEditRecordHtmlMsg = A6(author$project$MeenyLatex$Differ$EditRecord, _List_Nil, _List_Nil, author$project$MeenyLatex$LatexState$emptyLatexState, _List_Nil, elm$core$Maybe$Nothing, elm$core$Maybe$Nothing);
var author$project$MeenyLatex$Differ$isEmpty = function (editRecord) {
	return _Utils_eq(editRecord.ag, _List_Nil) && _Utils_eq(editRecord.W, _List_Nil);
};
var author$project$MeenyLatex$Accumulator$LatexInfo = F4(
	function (typ, name, options, value) {
		return {u: name, L: options, y: typ, H: value};
	});
var author$project$MeenyLatex$Accumulator$info = function (latexExpression) {
	switch (latexExpression.$) {
		case 6:
			var name = latexExpression.a;
			var optArgs = latexExpression.b;
			var args = latexExpression.c;
			return {u: name, L: optArgs, y: 'macro', H: args};
		case 5:
			var name = latexExpression.a;
			var optArgs = latexExpression.b;
			var args = latexExpression.c;
			var body = latexExpression.d;
			return {u: name, L: optArgs, y: 'smacro', H: args};
		case 7:
			var name = latexExpression.a;
			var args = latexExpression.b;
			var body = latexExpression.c;
			return {
				u: name,
				L: args,
				y: 'env',
				H: _List_fromArray(
					[body])
			};
		default:
			return {u: 'null', L: _List_Nil, y: 'null', H: _List_Nil};
	}
};
var author$project$MeenyLatex$LatexState$setDictionaryItem = F3(
	function (key, value, latexState) {
		var dictionary = latexState.au;
		var newDictionary = A3(elm$core$Dict$insert, key, value, dictionary);
		return _Utils_update(
			latexState,
			{au: newDictionary});
	});
var elm$core$List$head = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return elm$core$Maybe$Just(x);
	} else {
		return elm$core$Maybe$Nothing;
	}
};
var author$project$MeenyLatex$ParserTools$headLatexExpression = function (list) {
	var he = function () {
		var _n0 = elm$core$List$head(list);
		if (!_n0.$) {
			var expr = _n0.a;
			return expr;
		} else {
			return author$project$MeenyLatex$Parser$LatexList(_List_Nil);
		}
	}();
	return he;
};
var author$project$MeenyLatex$ParserTools$valueOfLXString = function (expr) {
	if (!expr.$) {
		var str = expr.a;
		return str;
	} else {
		return 'Error getting value of LatexString';
	}
};
var author$project$MeenyLatex$ParserTools$valueOfLatexList = function (latexList) {
	if (latexList.$ === 8) {
		var value = latexList.a;
		return value;
	} else {
		return _List_fromArray(
			[
				author$project$MeenyLatex$Parser$LXString('Error getting value of LatexList')
			]);
	}
};
var author$project$MeenyLatex$ParserTools$unpackString = function (expr) {
	return author$project$MeenyLatex$ParserTools$valueOfLXString(
		author$project$MeenyLatex$ParserTools$headLatexExpression(
			author$project$MeenyLatex$ParserTools$valueOfLatexList(
				author$project$MeenyLatex$ParserTools$headLatexExpression(expr))));
};
var author$project$MeenyLatex$StateReducerHelpers$setBibItemXRef = F2(
	function (latexInfo, latexState) {
		var label = author$project$MeenyLatex$ParserTools$unpackString(latexInfo.H);
		var value = _Utils_eq(latexInfo.L, _List_Nil) ? label : author$project$MeenyLatex$ParserTools$unpackString(latexInfo.L);
		return A3(author$project$MeenyLatex$LatexState$setDictionaryItem, 'bibitem:' + label, value, latexState);
	});
var author$project$MeenyLatex$StateReducerHelpers$setDictionaryItemForMacro = F2(
	function (latexInfo, latexState) {
		var value = author$project$MeenyLatex$ParserTools$unpackString(latexInfo.H);
		return A3(author$project$MeenyLatex$LatexState$setDictionaryItem, latexInfo.u, value, latexState);
	});
var author$project$MeenyLatex$LatexState$getCounter = F2(
	function (name, latexState) {
		var _n0 = A2(elm$core$Dict$get, name, latexState.r);
		if (!_n0.$) {
			var k = _n0.a;
			return k;
		} else {
			return 0;
		}
	});
var elm$core$Dict$getMin = function (dict) {
	getMin:
	while (true) {
		if ((dict.$ === -1) && (dict.d.$ === -1)) {
			var left = dict.d;
			var $temp$dict = left;
			dict = $temp$dict;
			continue getMin;
		} else {
			return dict;
		}
	}
};
var elm$core$Dict$moveRedLeft = function (dict) {
	if (((dict.$ === -1) && (dict.d.$ === -1)) && (dict.e.$ === -1)) {
		if ((dict.e.d.$ === -1) && (!dict.e.d.a)) {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _n1 = dict.d;
			var lClr = _n1.a;
			var lK = _n1.b;
			var lV = _n1.c;
			var lLeft = _n1.d;
			var lRight = _n1.e;
			var _n2 = dict.e;
			var rClr = _n2.a;
			var rK = _n2.b;
			var rV = _n2.c;
			var rLeft = _n2.d;
			var _n3 = rLeft.a;
			var rlK = rLeft.b;
			var rlV = rLeft.c;
			var rlL = rLeft.d;
			var rlR = rLeft.e;
			var rRight = _n2.e;
			return A5(
				elm$core$Dict$RBNode_elm_builtin,
				0,
				rlK,
				rlV,
				A5(
					elm$core$Dict$RBNode_elm_builtin,
					1,
					k,
					v,
					A5(elm$core$Dict$RBNode_elm_builtin, 0, lK, lV, lLeft, lRight),
					rlL),
				A5(elm$core$Dict$RBNode_elm_builtin, 1, rK, rV, rlR, rRight));
		} else {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _n4 = dict.d;
			var lClr = _n4.a;
			var lK = _n4.b;
			var lV = _n4.c;
			var lLeft = _n4.d;
			var lRight = _n4.e;
			var _n5 = dict.e;
			var rClr = _n5.a;
			var rK = _n5.b;
			var rV = _n5.c;
			var rLeft = _n5.d;
			var rRight = _n5.e;
			if (clr === 1) {
				return A5(
					elm$core$Dict$RBNode_elm_builtin,
					1,
					k,
					v,
					A5(elm$core$Dict$RBNode_elm_builtin, 0, lK, lV, lLeft, lRight),
					A5(elm$core$Dict$RBNode_elm_builtin, 0, rK, rV, rLeft, rRight));
			} else {
				return A5(
					elm$core$Dict$RBNode_elm_builtin,
					1,
					k,
					v,
					A5(elm$core$Dict$RBNode_elm_builtin, 0, lK, lV, lLeft, lRight),
					A5(elm$core$Dict$RBNode_elm_builtin, 0, rK, rV, rLeft, rRight));
			}
		}
	} else {
		return dict;
	}
};
var elm$core$Dict$moveRedRight = function (dict) {
	if (((dict.$ === -1) && (dict.d.$ === -1)) && (dict.e.$ === -1)) {
		if ((dict.d.d.$ === -1) && (!dict.d.d.a)) {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _n1 = dict.d;
			var lClr = _n1.a;
			var lK = _n1.b;
			var lV = _n1.c;
			var _n2 = _n1.d;
			var _n3 = _n2.a;
			var llK = _n2.b;
			var llV = _n2.c;
			var llLeft = _n2.d;
			var llRight = _n2.e;
			var lRight = _n1.e;
			var _n4 = dict.e;
			var rClr = _n4.a;
			var rK = _n4.b;
			var rV = _n4.c;
			var rLeft = _n4.d;
			var rRight = _n4.e;
			return A5(
				elm$core$Dict$RBNode_elm_builtin,
				0,
				lK,
				lV,
				A5(elm$core$Dict$RBNode_elm_builtin, 1, llK, llV, llLeft, llRight),
				A5(
					elm$core$Dict$RBNode_elm_builtin,
					1,
					k,
					v,
					lRight,
					A5(elm$core$Dict$RBNode_elm_builtin, 0, rK, rV, rLeft, rRight)));
		} else {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _n5 = dict.d;
			var lClr = _n5.a;
			var lK = _n5.b;
			var lV = _n5.c;
			var lLeft = _n5.d;
			var lRight = _n5.e;
			var _n6 = dict.e;
			var rClr = _n6.a;
			var rK = _n6.b;
			var rV = _n6.c;
			var rLeft = _n6.d;
			var rRight = _n6.e;
			if (clr === 1) {
				return A5(
					elm$core$Dict$RBNode_elm_builtin,
					1,
					k,
					v,
					A5(elm$core$Dict$RBNode_elm_builtin, 0, lK, lV, lLeft, lRight),
					A5(elm$core$Dict$RBNode_elm_builtin, 0, rK, rV, rLeft, rRight));
			} else {
				return A5(
					elm$core$Dict$RBNode_elm_builtin,
					1,
					k,
					v,
					A5(elm$core$Dict$RBNode_elm_builtin, 0, lK, lV, lLeft, lRight),
					A5(elm$core$Dict$RBNode_elm_builtin, 0, rK, rV, rLeft, rRight));
			}
		}
	} else {
		return dict;
	}
};
var elm$core$Dict$removeHelpPrepEQGT = F7(
	function (targetKey, dict, color, key, value, left, right) {
		if ((left.$ === -1) && (!left.a)) {
			var _n1 = left.a;
			var lK = left.b;
			var lV = left.c;
			var lLeft = left.d;
			var lRight = left.e;
			return A5(
				elm$core$Dict$RBNode_elm_builtin,
				color,
				lK,
				lV,
				lLeft,
				A5(elm$core$Dict$RBNode_elm_builtin, 0, key, value, lRight, right));
		} else {
			_n2$2:
			while (true) {
				if ((right.$ === -1) && (right.a === 1)) {
					if (right.d.$ === -1) {
						if (right.d.a === 1) {
							var _n3 = right.a;
							var _n4 = right.d;
							var _n5 = _n4.a;
							return elm$core$Dict$moveRedRight(dict);
						} else {
							break _n2$2;
						}
					} else {
						var _n6 = right.a;
						var _n7 = right.d;
						return elm$core$Dict$moveRedRight(dict);
					}
				} else {
					break _n2$2;
				}
			}
			return dict;
		}
	});
var elm$core$Dict$removeMin = function (dict) {
	if ((dict.$ === -1) && (dict.d.$ === -1)) {
		var color = dict.a;
		var key = dict.b;
		var value = dict.c;
		var left = dict.d;
		var lColor = left.a;
		var lLeft = left.d;
		var right = dict.e;
		if (lColor === 1) {
			if ((lLeft.$ === -1) && (!lLeft.a)) {
				var _n3 = lLeft.a;
				return A5(
					elm$core$Dict$RBNode_elm_builtin,
					color,
					key,
					value,
					elm$core$Dict$removeMin(left),
					right);
			} else {
				var _n4 = elm$core$Dict$moveRedLeft(dict);
				if (_n4.$ === -1) {
					var nColor = _n4.a;
					var nKey = _n4.b;
					var nValue = _n4.c;
					var nLeft = _n4.d;
					var nRight = _n4.e;
					return A5(
						elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						elm$core$Dict$removeMin(nLeft),
						nRight);
				} else {
					return elm$core$Dict$RBEmpty_elm_builtin;
				}
			}
		} else {
			return A5(
				elm$core$Dict$RBNode_elm_builtin,
				color,
				key,
				value,
				elm$core$Dict$removeMin(left),
				right);
		}
	} else {
		return elm$core$Dict$RBEmpty_elm_builtin;
	}
};
var elm$core$Dict$removeHelp = F2(
	function (targetKey, dict) {
		if (dict.$ === -2) {
			return elm$core$Dict$RBEmpty_elm_builtin;
		} else {
			var color = dict.a;
			var key = dict.b;
			var value = dict.c;
			var left = dict.d;
			var right = dict.e;
			if (_Utils_cmp(targetKey, key) < 0) {
				if ((left.$ === -1) && (left.a === 1)) {
					var _n4 = left.a;
					var lLeft = left.d;
					if ((lLeft.$ === -1) && (!lLeft.a)) {
						var _n6 = lLeft.a;
						return A5(
							elm$core$Dict$RBNode_elm_builtin,
							color,
							key,
							value,
							A2(elm$core$Dict$removeHelp, targetKey, left),
							right);
					} else {
						var _n7 = elm$core$Dict$moveRedLeft(dict);
						if (_n7.$ === -1) {
							var nColor = _n7.a;
							var nKey = _n7.b;
							var nValue = _n7.c;
							var nLeft = _n7.d;
							var nRight = _n7.e;
							return A5(
								elm$core$Dict$balance,
								nColor,
								nKey,
								nValue,
								A2(elm$core$Dict$removeHelp, targetKey, nLeft),
								nRight);
						} else {
							return elm$core$Dict$RBEmpty_elm_builtin;
						}
					}
				} else {
					return A5(
						elm$core$Dict$RBNode_elm_builtin,
						color,
						key,
						value,
						A2(elm$core$Dict$removeHelp, targetKey, left),
						right);
				}
			} else {
				return A2(
					elm$core$Dict$removeHelpEQGT,
					targetKey,
					A7(elm$core$Dict$removeHelpPrepEQGT, targetKey, dict, color, key, value, left, right));
			}
		}
	});
var elm$core$Dict$removeHelpEQGT = F2(
	function (targetKey, dict) {
		if (dict.$ === -1) {
			var color = dict.a;
			var key = dict.b;
			var value = dict.c;
			var left = dict.d;
			var right = dict.e;
			if (_Utils_eq(targetKey, key)) {
				var _n1 = elm$core$Dict$getMin(right);
				if (_n1.$ === -1) {
					var minKey = _n1.b;
					var minValue = _n1.c;
					return A5(
						elm$core$Dict$balance,
						color,
						minKey,
						minValue,
						left,
						elm$core$Dict$removeMin(right));
				} else {
					return elm$core$Dict$RBEmpty_elm_builtin;
				}
			} else {
				return A5(
					elm$core$Dict$balance,
					color,
					key,
					value,
					left,
					A2(elm$core$Dict$removeHelp, targetKey, right));
			}
		} else {
			return elm$core$Dict$RBEmpty_elm_builtin;
		}
	});
var elm$core$Dict$remove = F2(
	function (key, dict) {
		var _n0 = A2(elm$core$Dict$removeHelp, key, dict);
		if ((_n0.$ === -1) && (!_n0.a)) {
			var _n1 = _n0.a;
			var k = _n0.b;
			var v = _n0.c;
			var l = _n0.d;
			var r = _n0.e;
			return A5(elm$core$Dict$RBNode_elm_builtin, 1, k, v, l, r);
		} else {
			var x = _n0;
			return x;
		}
	});
var elm$core$Dict$update = F3(
	function (targetKey, alter, dictionary) {
		var _n0 = alter(
			A2(elm$core$Dict$get, targetKey, dictionary));
		if (!_n0.$) {
			var value = _n0.a;
			return A3(elm$core$Dict$insert, targetKey, value, dictionary);
		} else {
			return A2(elm$core$Dict$remove, targetKey, dictionary);
		}
	});
var elm$core$Maybe$map = F2(
	function (f, maybe) {
		if (!maybe.$) {
			var value = maybe.a;
			return elm$core$Maybe$Just(
				f(value));
		} else {
			return elm$core$Maybe$Nothing;
		}
	});
var author$project$MeenyLatex$LatexState$incrementCounter = F2(
	function (name, latexState) {
		var maybeInc = elm$core$Maybe$map(
			function (x) {
				return x + 1;
			});
		var newCounters = A3(elm$core$Dict$update, name, maybeInc, latexState.r);
		return _Utils_update(
			latexState,
			{r: newCounters});
	});
var author$project$MeenyLatex$LatexState$setCrossReference = F3(
	function (label, value, latexState) {
		var crossReferences = latexState.as;
		var newCrossReferences = A3(elm$core$Dict$insert, label, value, crossReferences);
		return _Utils_update(
			latexState,
			{as: newCrossReferences});
	});
var author$project$MeenyLatex$ParserTools$latexList2List = function (latexExpression) {
	if (latexExpression.$ === 8) {
		var list = latexExpression.a;
		return list;
	} else {
		return _List_Nil;
	}
};
var author$project$MeenyLatex$ParserTools$getMacroArgs = F2(
	function (macroName, latexExpression) {
		if (latexExpression.$ === 6) {
			var name = latexExpression.a;
			var optArgs = latexExpression.b;
			var args = latexExpression.c;
			return _Utils_eq(name, macroName) ? A2(elm$core$List$map, author$project$MeenyLatex$ParserTools$latexList2List, args) : _List_Nil;
		} else {
			return _List_Nil;
		}
	});
var author$project$MeenyLatex$ParserTools$list2LeadingString = function (list) {
	var head_ = elm$core$List$head(list);
	var value = function () {
		if (!head_.$) {
			var value_ = head_.a;
			return value_;
		} else {
			return author$project$MeenyLatex$Parser$LXString('');
		}
	}();
	if (!value.$) {
		var str = value.a;
		return str;
	} else {
		return '';
	}
};
var author$project$MeenyLatex$ParserTools$getSimpleMacroArgs = F2(
	function (macroName, latexExpression) {
		return A2(
			elm$core$List$map,
			author$project$MeenyLatex$ParserTools$list2LeadingString,
			A2(author$project$MeenyLatex$ParserTools$getMacroArgs, macroName, latexExpression));
	});
var author$project$MeenyLatex$ParserTools$getFirstMacroArg = F2(
	function (macroName, latexExpression) {
		var arg = elm$core$List$head(
			A2(author$project$MeenyLatex$ParserTools$getSimpleMacroArgs, macroName, latexExpression));
		if (!arg.$) {
			var value = arg.a;
			return value;
		} else {
			return '';
		}
	});
var elm$core$String$trim = _String_trim;
var author$project$MeenyLatex$StateReducerHelpers$getLabel = function (str) {
	var maybeMacro = A2(
		elm$parser$Parser$run,
		author$project$MeenyLatex$Parser$macro(author$project$MeenyLatex$ParserHelpers$ws),
		elm$core$String$trim(str));
	if (!maybeMacro.$) {
		var macro = maybeMacro.a;
		return A2(author$project$MeenyLatex$ParserTools$getFirstMacroArg, 'label', macro);
	} else {
		return '';
	}
};
var elm$core$Maybe$withDefault = F2(
	function (_default, maybe) {
		if (!maybe.$) {
			var value = maybe.a;
			return value;
		} else {
			return _default;
		}
	});
var elm$core$String$fromInt = _String_fromNumber;
var author$project$MeenyLatex$StateReducerHelpers$setEquationNumber = F2(
	function (info, latexState) {
		var latexState1 = A2(author$project$MeenyLatex$LatexState$incrementCounter, 'eqno', latexState);
		var s1 = A2(author$project$MeenyLatex$LatexState$getCounter, 's1', latexState1);
		var eqno = A2(author$project$MeenyLatex$LatexState$getCounter, 'eqno', latexState1);
		var data = A2(
			elm$core$Maybe$withDefault,
			A3(author$project$MeenyLatex$Parser$Macro, 'NULL', _List_Nil, _List_Nil),
			elm$core$List$head(info.H));
		var label = function () {
			if (!data.$) {
				var str = data.a;
				return author$project$MeenyLatex$StateReducerHelpers$getLabel(str);
			} else {
				return '';
			}
		}();
		var latexState2 = (label !== '') ? A3(
			author$project$MeenyLatex$LatexState$setCrossReference,
			label,
			elm$core$String$fromInt(s1) + ('.' + elm$core$String$fromInt(eqno)),
			latexState1) : latexState1;
		return latexState2;
	});
var author$project$MeenyLatex$LatexState$updateCounter = F3(
	function (name, value, latexState) {
		var maybeSet = elm$core$Maybe$map(
			function (x) {
				return value;
			});
		var newCounters = A3(elm$core$Dict$update, name, maybeSet, latexState.r);
		return _Utils_update(
			latexState,
			{r: newCounters});
	});
var elm$core$Basics$sub = _Basics_sub;
var elm$core$List$drop = F2(
	function (n, list) {
		drop:
		while (true) {
			if (n <= 0) {
				return list;
			} else {
				if (!list.b) {
					return list;
				} else {
					var x = list.a;
					var xs = list.b;
					var $temp$n = n - 1,
						$temp$list = xs;
					n = $temp$n;
					list = $temp$list;
					continue drop;
				}
			}
		}
	});
var author$project$MeenyLatex$Utility$getAt = F2(
	function (idx, xs) {
		return (idx < 0) ? elm$core$Maybe$Nothing : elm$core$List$head(
			A2(elm$core$List$drop, idx, xs));
	});
var author$project$MeenyLatex$StateReducerHelpers$getAt = F2(
	function (k, list_) {
		return A2(
			elm$core$Maybe$withDefault,
			'xxx',
			A2(author$project$MeenyLatex$Utility$getAt, k, list_));
	});
var elm$core$String$toInt = _String_toInt;
var author$project$MeenyLatex$StateReducerHelpers$setSectionCounters = F2(
	function (info, latexState) {
		var argList = A2(
			elm$core$List$map,
			author$project$MeenyLatex$ParserTools$list2LeadingString,
			A2(elm$core$List$map, author$project$MeenyLatex$ParserTools$latexList2List, info.H));
		var arg2 = A2(author$project$MeenyLatex$StateReducerHelpers$getAt, 1, argList);
		var arg1 = A2(author$project$MeenyLatex$StateReducerHelpers$getAt, 0, argList);
		var initialSectionNumber = (arg1 === 'section') ? A2(
			elm$core$Maybe$withDefault,
			0,
			elm$core$String$toInt(arg2)) : (-1);
		return (_Utils_cmp(initialSectionNumber, -1) > 0) ? A3(
			author$project$MeenyLatex$LatexState$updateCounter,
			's3',
			0,
			A3(
				author$project$MeenyLatex$LatexState$updateCounter,
				's2',
				0,
				A3(author$project$MeenyLatex$LatexState$updateCounter, 's1', initialSectionNumber - 1, latexState))) : latexState;
	});
var author$project$MeenyLatex$StateReducerHelpers$setTheoremNumber = F2(
	function (info, latexState) {
		var latexState1 = A2(author$project$MeenyLatex$LatexState$incrementCounter, 'tno', latexState);
		var s1 = A2(author$project$MeenyLatex$LatexState$getCounter, 's1', latexState1);
		var tno = A2(author$project$MeenyLatex$LatexState$getCounter, 'tno', latexState1);
		var label = A2(
			author$project$MeenyLatex$ParserTools$getFirstMacroArg,
			'label',
			A2(
				elm$core$Maybe$withDefault,
				A3(author$project$MeenyLatex$Parser$Macro, 'NULL', _List_Nil, _List_Nil),
				elm$core$List$head(info.H)));
		var latexState2 = (label !== '') ? A3(
			author$project$MeenyLatex$LatexState$setCrossReference,
			label,
			elm$core$String$fromInt(s1) + ('.' + elm$core$String$fromInt(tno)),
			latexState1) : latexState1;
		return latexState2;
	});
var author$project$MeenyLatex$LatexState$TocEntry = F3(
	function (name, label, level) {
		return {bl: label, bn: level, u: name};
	});
var author$project$MeenyLatex$LatexState$addSection = F4(
	function (sectionName, label, level, latexState) {
		var newEntry = A3(author$project$MeenyLatex$LatexState$TocEntry, sectionName, label, level);
		var toc = _Utils_ap(
			latexState.a1,
			_List_fromArray(
				[newEntry]));
		return _Utils_update(
			latexState,
			{a1: toc});
	});
var author$project$MeenyLatex$StateReducerHelpers$updateSectionNumber = F2(
	function (info, latexState) {
		var label = elm$core$String$fromInt(
			function (x) {
				return x + 1;
			}(
				A2(author$project$MeenyLatex$LatexState$getCounter, 's1', latexState)));
		return A4(
			author$project$MeenyLatex$LatexState$addSection,
			author$project$MeenyLatex$ParserTools$unpackString(info.H),
			label,
			1,
			A3(
				author$project$MeenyLatex$LatexState$updateCounter,
				's3',
				0,
				A3(
					author$project$MeenyLatex$LatexState$updateCounter,
					's2',
					0,
					A2(author$project$MeenyLatex$LatexState$incrementCounter, 's1', latexState))));
	});
var author$project$MeenyLatex$StateReducerHelpers$updateSubsectionNumber = F2(
	function (info, latexState) {
		var s2 = elm$core$String$fromInt(
			function (x) {
				return x + 1;
			}(
				A2(author$project$MeenyLatex$LatexState$getCounter, 's2', latexState)));
		var s1 = elm$core$String$fromInt(
			A2(author$project$MeenyLatex$LatexState$getCounter, 's1', latexState));
		var label = s1 + ('.' + s2);
		return A4(
			author$project$MeenyLatex$LatexState$addSection,
			author$project$MeenyLatex$ParserTools$unpackString(info.H),
			label,
			2,
			A3(
				author$project$MeenyLatex$LatexState$updateCounter,
				's3',
				0,
				A2(author$project$MeenyLatex$LatexState$incrementCounter, 's2', latexState)));
	});
var author$project$MeenyLatex$StateReducerHelpers$updateSubsubsectionNumber = F2(
	function (info, latexState) {
		var s3 = elm$core$String$fromInt(
			function (x) {
				return x + 1;
			}(
				A2(author$project$MeenyLatex$LatexState$getCounter, 's3', latexState)));
		var s2 = elm$core$String$fromInt(
			A2(author$project$MeenyLatex$LatexState$getCounter, 's2', latexState));
		var s1 = elm$core$String$fromInt(
			A2(author$project$MeenyLatex$LatexState$getCounter, 's1', latexState));
		var label = s1 + ('.' + (s2 + ('.' + s3)));
		return A4(
			author$project$MeenyLatex$LatexState$addSection,
			author$project$MeenyLatex$ParserTools$unpackString(info.H),
			label,
			2,
			A2(author$project$MeenyLatex$LatexState$incrementCounter, 's3', latexState));
	});
var author$project$MeenyLatex$Accumulator$latexStateReducerDict = elm$core$Dict$fromList(
	_List_fromArray(
		[
			_Utils_Tuple2(
			_Utils_Tuple2('macro', 'setcounter'),
			F2(
				function (x, y) {
					return A2(author$project$MeenyLatex$StateReducerHelpers$setSectionCounters, x, y);
				})),
			_Utils_Tuple2(
			_Utils_Tuple2('macro', 'section'),
			F2(
				function (x, y) {
					return A2(author$project$MeenyLatex$StateReducerHelpers$updateSectionNumber, x, y);
				})),
			_Utils_Tuple2(
			_Utils_Tuple2('macro', 'subsection'),
			F2(
				function (x, y) {
					return A2(author$project$MeenyLatex$StateReducerHelpers$updateSubsectionNumber, x, y);
				})),
			_Utils_Tuple2(
			_Utils_Tuple2('macro', 'subsubsection'),
			F2(
				function (x, y) {
					return A2(author$project$MeenyLatex$StateReducerHelpers$updateSubsubsectionNumber, x, y);
				})),
			_Utils_Tuple2(
			_Utils_Tuple2('macro', 'title'),
			F2(
				function (x, y) {
					return A2(author$project$MeenyLatex$StateReducerHelpers$setDictionaryItemForMacro, x, y);
				})),
			_Utils_Tuple2(
			_Utils_Tuple2('macro', 'author'),
			F2(
				function (x, y) {
					return A2(author$project$MeenyLatex$StateReducerHelpers$setDictionaryItemForMacro, x, y);
				})),
			_Utils_Tuple2(
			_Utils_Tuple2('macro', 'date'),
			F2(
				function (x, y) {
					return A2(author$project$MeenyLatex$StateReducerHelpers$setDictionaryItemForMacro, x, y);
				})),
			_Utils_Tuple2(
			_Utils_Tuple2('macro', 'email'),
			F2(
				function (x, y) {
					return A2(author$project$MeenyLatex$StateReducerHelpers$setDictionaryItemForMacro, x, y);
				})),
			_Utils_Tuple2(
			_Utils_Tuple2('macro', 'revision'),
			F2(
				function (x, y) {
					return A2(author$project$MeenyLatex$StateReducerHelpers$setDictionaryItemForMacro, x, y);
				})),
			_Utils_Tuple2(
			_Utils_Tuple2('env', 'theorem'),
			F2(
				function (x, y) {
					return A2(author$project$MeenyLatex$StateReducerHelpers$setTheoremNumber, x, y);
				})),
			_Utils_Tuple2(
			_Utils_Tuple2('env', 'proposition'),
			F2(
				function (x, y) {
					return A2(author$project$MeenyLatex$StateReducerHelpers$setTheoremNumber, x, y);
				})),
			_Utils_Tuple2(
			_Utils_Tuple2('env', 'lemma'),
			F2(
				function (x, y) {
					return A2(author$project$MeenyLatex$StateReducerHelpers$setTheoremNumber, x, y);
				})),
			_Utils_Tuple2(
			_Utils_Tuple2('env', 'definition'),
			F2(
				function (x, y) {
					return A2(author$project$MeenyLatex$StateReducerHelpers$setTheoremNumber, x, y);
				})),
			_Utils_Tuple2(
			_Utils_Tuple2('env', 'corollary'),
			F2(
				function (x, y) {
					return A2(author$project$MeenyLatex$StateReducerHelpers$setTheoremNumber, x, y);
				})),
			_Utils_Tuple2(
			_Utils_Tuple2('env', 'equation'),
			F2(
				function (x, y) {
					return A2(author$project$MeenyLatex$StateReducerHelpers$setEquationNumber, x, y);
				})),
			_Utils_Tuple2(
			_Utils_Tuple2('env', 'align'),
			F2(
				function (x, y) {
					return A2(author$project$MeenyLatex$StateReducerHelpers$setEquationNumber, x, y);
				})),
			_Utils_Tuple2(
			_Utils_Tuple2('smacro', 'bibitem'),
			F2(
				function (x, y) {
					return A2(author$project$MeenyLatex$StateReducerHelpers$setBibItemXRef, x, y);
				}))
		]));
var author$project$MeenyLatex$Accumulator$latexStateReducerDispatcher = function (_n0) {
	var typ_ = _n0.a;
	var name = _n0.b;
	var _n1 = A2(
		elm$core$Dict$get,
		_Utils_Tuple2(typ_, name),
		author$project$MeenyLatex$Accumulator$latexStateReducerDict);
	if (!_n1.$) {
		var f = _n1.a;
		return f;
	} else {
		return F2(
			function (latexInfo, latexState) {
				return latexState;
			});
	}
};
var author$project$MeenyLatex$Accumulator$latexStateReducer = F2(
	function (parsedParagraph, latexState) {
		var headElement = A2(
			elm$core$Maybe$withDefault,
			A4(author$project$MeenyLatex$Accumulator$LatexInfo, 'null', 'null', _List_Nil, _List_Nil),
			A2(
				elm$core$Maybe$map,
				author$project$MeenyLatex$Accumulator$info,
				elm$core$List$head(parsedParagraph)));
		var he = {
			u: 'setcounter',
			y: 'macro',
			H: _List_fromArray(
				[
					author$project$MeenyLatex$Parser$LatexList(
					_List_fromArray(
						[
							author$project$MeenyLatex$Parser$LXString('section')
						])),
					author$project$MeenyLatex$Parser$LatexList(
					_List_fromArray(
						[
							author$project$MeenyLatex$Parser$LXString('7')
						]))
				])
		};
		return A3(
			author$project$MeenyLatex$Accumulator$latexStateReducerDispatcher,
			_Utils_Tuple2(headElement.y, headElement.u),
			headElement,
			latexState);
	});
var author$project$MeenyLatex$Accumulator$parserReducerTransformer = F4(
	function (parse, latexStateReducer_, input, acc) {
		var parsedInput = parse(input);
		var _n0 = acc;
		var outputList = _n0.a;
		var state = _n0.b;
		var newState = A2(latexStateReducer_, parsedInput, state);
		return _Utils_Tuple2(
			_Utils_ap(
				outputList,
				_List_fromArray(
					[parsedInput])),
			newState);
	});
var author$project$MeenyLatex$Accumulator$parserAccumulatorReducer = A2(author$project$MeenyLatex$Accumulator$parserReducerTransformer, author$project$MeenyLatex$Parser$parse, author$project$MeenyLatex$Accumulator$latexStateReducer);
var author$project$MeenyLatex$Accumulator$parseAccumulator = F2(
	function (latexState, inputList) {
		return A3(
			elm$core$List$foldl,
			author$project$MeenyLatex$Accumulator$parserAccumulatorReducer,
			_Utils_Tuple2(_List_Nil, latexState),
			inputList);
	});
var author$project$MeenyLatex$Accumulator$parseParagraphs = F2(
	function (latexState, paragraphs) {
		return A2(author$project$MeenyLatex$Accumulator$parseAccumulator, latexState, paragraphs);
	});
var author$project$MeenyLatex$Accumulator$renderTransformer = F4(
	function (render, latexStateReducer_, input, acc) {
		var _n0 = acc;
		var outputList = _n0.a;
		var state = _n0.b;
		var newState = A2(latexStateReducer_, input, state);
		var renderedInput = A2(render, newState, input);
		return _Utils_Tuple2(
			_Utils_ap(
				outputList,
				_List_fromArray(
					[renderedInput])),
			newState);
	});
var author$project$MeenyLatex$Accumulator$renderAccumulatorReducer = function (renderer) {
	return A2(author$project$MeenyLatex$Accumulator$renderTransformer, renderer, author$project$MeenyLatex$Accumulator$latexStateReducer);
};
var author$project$MeenyLatex$Accumulator$renderAccumulator = F3(
	function (renderer, latexState, inputList) {
		return A3(
			elm$core$List$foldl,
			author$project$MeenyLatex$Accumulator$renderAccumulatorReducer(renderer),
			_Utils_Tuple2(_List_Nil, latexState),
			inputList);
	});
var author$project$MeenyLatex$Accumulator$renderParagraphs = F3(
	function (renderer, latexState, paragraphs) {
		return A2(
			author$project$MeenyLatex$Accumulator$renderAccumulator(renderer),
			latexState,
			paragraphs);
	});
var author$project$MeenyLatex$Differ$prefixer = F2(
	function (b, k) {
		return 'p.' + (elm$core$String$fromInt(b) + ('.' + elm$core$String$fromInt(k)));
	});
var elm$core$List$length = function (xs) {
	return A3(
		elm$core$List$foldl,
		F2(
			function (_n0, i) {
				return i + 1;
			}),
		0,
		xs);
};
var elm$core$List$rangeHelp = F3(
	function (lo, hi, list) {
		rangeHelp:
		while (true) {
			if (_Utils_cmp(lo, hi) < 1) {
				var $temp$lo = lo,
					$temp$hi = hi - 1,
					$temp$list = A2(elm$core$List$cons, hi, list);
				lo = $temp$lo;
				hi = $temp$hi;
				list = $temp$list;
				continue rangeHelp;
			} else {
				return list;
			}
		}
	});
var elm$core$List$range = F2(
	function (lo, hi) {
		return A3(elm$core$List$rangeHelp, lo, hi, _List_Nil);
	});
var author$project$MeenyLatex$LatexDiffer$makeIdList = function (paragraphs) {
	return A2(
		elm$core$List$map,
		author$project$MeenyLatex$Differ$prefixer(0),
		A2(
			elm$core$List$range,
			1,
			elm$core$List$length(paragraphs)));
};
var author$project$MeenyLatex$LatexDiffer$createEditRecord = F3(
	function (renderer, latexState, text) {
		var paragraphs = author$project$MeenyLatex$Paragraph$logicalParagraphify(text);
		var idList = author$project$MeenyLatex$LatexDiffer$makeIdList(paragraphs);
		var _n0 = A2(author$project$MeenyLatex$Accumulator$parseParagraphs, author$project$MeenyLatex$LatexState$emptyLatexState, paragraphs);
		var latexExpressionList = _n0.a;
		var latexState1 = _n0.b;
		var latexState2 = _Utils_update(
			author$project$MeenyLatex$LatexState$emptyLatexState,
			{as: latexState1.as, au: latexState1.au, a1: latexState1.a1});
		var _n1 = A2(
			author$project$MeenyLatex$Accumulator$renderParagraphs(renderer),
			latexState2,
			latexExpressionList);
		var renderedParagraphs = _n1.a;
		return A6(author$project$MeenyLatex$Differ$EditRecord, paragraphs, renderedParagraphs, latexState2, idList, elm$core$Maybe$Nothing, elm$core$Maybe$Nothing);
	});
var author$project$MeenyLatex$Differ$DiffRecord = F4(
	function (commonInitialSegment, commonTerminalSegment, middleSegmentInSource, middleSegmentInTarget) {
		return {X: commonInitialSegment, Y: commonTerminalSegment, aH: middleSegmentInSource, af: middleSegmentInTarget};
	});
var elm$core$List$takeReverse = F3(
	function (n, list, kept) {
		takeReverse:
		while (true) {
			if (n <= 0) {
				return kept;
			} else {
				if (!list.b) {
					return kept;
				} else {
					var x = list.a;
					var xs = list.b;
					var $temp$n = n - 1,
						$temp$list = xs,
						$temp$kept = A2(elm$core$List$cons, x, kept);
					n = $temp$n;
					list = $temp$list;
					kept = $temp$kept;
					continue takeReverse;
				}
			}
		}
	});
var elm$core$List$takeTailRec = F2(
	function (n, list) {
		return elm$core$List$reverse(
			A3(elm$core$List$takeReverse, n, list, _List_Nil));
	});
var elm$core$List$takeFast = F3(
	function (ctr, n, list) {
		if (n <= 0) {
			return _List_Nil;
		} else {
			var _n0 = _Utils_Tuple2(n, list);
			_n0$1:
			while (true) {
				_n0$5:
				while (true) {
					if (!_n0.b.b) {
						return list;
					} else {
						if (_n0.b.b.b) {
							switch (_n0.a) {
								case 1:
									break _n0$1;
								case 2:
									var _n2 = _n0.b;
									var x = _n2.a;
									var _n3 = _n2.b;
									var y = _n3.a;
									return _List_fromArray(
										[x, y]);
								case 3:
									if (_n0.b.b.b.b) {
										var _n4 = _n0.b;
										var x = _n4.a;
										var _n5 = _n4.b;
										var y = _n5.a;
										var _n6 = _n5.b;
										var z = _n6.a;
										return _List_fromArray(
											[x, y, z]);
									} else {
										break _n0$5;
									}
								default:
									if (_n0.b.b.b.b && _n0.b.b.b.b.b) {
										var _n7 = _n0.b;
										var x = _n7.a;
										var _n8 = _n7.b;
										var y = _n8.a;
										var _n9 = _n8.b;
										var z = _n9.a;
										var _n10 = _n9.b;
										var w = _n10.a;
										var tl = _n10.b;
										return (ctr > 1000) ? A2(
											elm$core$List$cons,
											x,
											A2(
												elm$core$List$cons,
												y,
												A2(
													elm$core$List$cons,
													z,
													A2(
														elm$core$List$cons,
														w,
														A2(elm$core$List$takeTailRec, n - 4, tl))))) : A2(
											elm$core$List$cons,
											x,
											A2(
												elm$core$List$cons,
												y,
												A2(
													elm$core$List$cons,
													z,
													A2(
														elm$core$List$cons,
														w,
														A3(elm$core$List$takeFast, ctr + 1, n - 4, tl)))));
									} else {
										break _n0$5;
									}
							}
						} else {
							if (_n0.a === 1) {
								break _n0$1;
							} else {
								break _n0$5;
							}
						}
					}
				}
				return list;
			}
			var _n1 = _n0.b;
			var x = _n1.a;
			return _List_fromArray(
				[x]);
		}
	});
var elm$core$List$take = F2(
	function (n, list) {
		return A3(elm$core$List$takeFast, 0, n, list);
	});
var author$project$MeenyLatex$Differ$commonInitialSegment = F2(
	function (x, y) {
		if (_Utils_eq(x, _List_Nil)) {
			return _List_Nil;
		} else {
			if (_Utils_eq(y, _List_Nil)) {
				return _List_Nil;
			} else {
				var b = A2(elm$core$List$take, 1, y);
				var a = A2(elm$core$List$take, 1, x);
				return _Utils_eq(a, b) ? _Utils_ap(
					a,
					A2(
						author$project$MeenyLatex$Differ$commonInitialSegment,
						A2(elm$core$List$drop, 1, x),
						A2(elm$core$List$drop, 1, y))) : _List_Nil;
			}
		}
	});
var author$project$MeenyLatex$Differ$commonTerminalSegment = F2(
	function (x, y) {
		return elm$core$List$reverse(
			A2(
				author$project$MeenyLatex$Differ$commonInitialSegment,
				elm$core$List$reverse(x),
				elm$core$List$reverse(y)));
	});
var author$project$MeenyLatex$Differ$dropLast = F2(
	function (k, x) {
		return elm$core$List$reverse(
			A2(
				elm$core$List$drop,
				k,
				elm$core$List$reverse(x)));
	});
var author$project$MeenyLatex$Differ$diff = F2(
	function (u, v) {
		var b_ = A2(author$project$MeenyLatex$Differ$commonTerminalSegment, u, v);
		var lb = elm$core$List$length(b_);
		var a = A2(author$project$MeenyLatex$Differ$commonInitialSegment, u, v);
		var la = elm$core$List$length(a);
		var b = _Utils_eq(
			la,
			elm$core$List$length(u)) ? _List_Nil : b_;
		var x = A2(
			author$project$MeenyLatex$Differ$dropLast,
			lb,
			A2(elm$core$List$drop, la, u));
		var y = A2(
			author$project$MeenyLatex$Differ$dropLast,
			lb,
			A2(elm$core$List$drop, la, v));
		return A4(author$project$MeenyLatex$Differ$DiffRecord, a, b, x, y);
	});
var author$project$MeenyLatex$Differ$differentialIdList = F3(
	function (seed, diffRecord, editRecord) {
		var nt = elm$core$List$length(diffRecord.af);
		var ns = elm$core$List$length(diffRecord.aH);
		var it = elm$core$List$length(diffRecord.Y);
		var ii = elm$core$List$length(diffRecord.X);
		var idListTerminal = A2(elm$core$List$drop, ii + ns, editRecord.C);
		var idListMiddle = A2(
			elm$core$List$map,
			author$project$MeenyLatex$Differ$prefixer(seed),
			A2(elm$core$List$range, ii + 1, ii + nt));
		var idListInitial = A2(elm$core$List$take, ii, editRecord.C);
		var idList = _Utils_ap(
			idListInitial,
			_Utils_ap(idListMiddle, idListTerminal));
		var _n0 = (!nt) ? _Utils_Tuple2(elm$core$Maybe$Nothing, elm$core$Maybe$Nothing) : _Utils_Tuple2(
			elm$core$Maybe$Just(ii),
			elm$core$Maybe$Just((ii + nt) - 1));
		var newIdsStart = _n0.a;
		var newIdsEnd = _n0.b;
		return {C: idList, U: newIdsEnd, V: newIdsStart};
	});
var author$project$MeenyLatex$Differ$takeLast = F2(
	function (k, x) {
		return elm$core$List$reverse(
			A2(
				elm$core$List$take,
				k,
				elm$core$List$reverse(x)));
	});
var author$project$MeenyLatex$Differ$differentialRender = F3(
	function (renderer, diffRecord, editRecord) {
		var middleSegmentRendered = A2(elm$core$List$map, renderer, diffRecord.af);
		var it = elm$core$List$length(diffRecord.Y);
		var terminalSegmentRendered = A2(author$project$MeenyLatex$Differ$takeLast, it, editRecord.W);
		var ii = elm$core$List$length(diffRecord.X);
		var initialSegmentRendered = A2(elm$core$List$take, ii, editRecord.W);
		return _Utils_ap(
			initialSegmentRendered,
			_Utils_ap(middleSegmentRendered, terminalSegmentRendered));
	});
var author$project$MeenyLatex$Differ$update = F4(
	function (seed, transformer, editRecord, text) {
		var newParagraphs = author$project$MeenyLatex$Paragraph$logicalParagraphify(text);
		var diffRecord = A2(author$project$MeenyLatex$Differ$diff, editRecord.ag, newParagraphs);
		var newRenderedParagraphs = A3(author$project$MeenyLatex$Differ$differentialRender, transformer, diffRecord, editRecord);
		var p = A3(author$project$MeenyLatex$Differ$differentialIdList, seed, diffRecord, editRecord);
		return A6(author$project$MeenyLatex$Differ$EditRecord, newParagraphs, newRenderedParagraphs, author$project$MeenyLatex$LatexState$emptyLatexState, p.C, p.V, p.U);
	});
var author$project$MeenyLatex$LatexDiffer$update_ = F4(
	function (seed, renderer, editorRecord, text) {
		return A4(
			author$project$MeenyLatex$Differ$update,
			seed,
			renderer(editorRecord.bm),
			editorRecord,
			text);
	});
var author$project$MeenyLatex$LatexDiffer$update = F5(
	function (seed, renderLatexExpression, renderString, editRecord, content) {
		return author$project$MeenyLatex$Differ$isEmpty(editRecord) ? A2(
			author$project$MeenyLatex$LatexDiffer$createEditRecord(renderLatexExpression),
			author$project$MeenyLatex$LatexState$emptyLatexState,
			content) : A4(author$project$MeenyLatex$LatexDiffer$update_, seed, renderString, editRecord, content);
	});
var author$project$MeenyLatex$Render2$boost = function (f) {
	return F3(
		function (x, y, z) {
			return A2(f, x, z);
		});
};
var elm$core$Result$isOk = function (result) {
	if (!result.$) {
		return true;
	} else {
		return false;
	}
};
var elm$core$Array$branchFactor = 32;
var elm$core$Array$Array_elm_builtin = F4(
	function (a, b, c, d) {
		return {$: 0, a: a, b: b, c: c, d: d};
	});
var elm$core$Basics$ceiling = _Basics_ceiling;
var elm$core$Basics$fdiv = _Basics_fdiv;
var elm$core$Basics$logBase = F2(
	function (base, number) {
		return _Basics_log(number) / _Basics_log(base);
	});
var elm$core$Basics$toFloat = _Basics_toFloat;
var elm$core$Array$shiftStep = elm$core$Basics$ceiling(
	A2(elm$core$Basics$logBase, 2, elm$core$Array$branchFactor));
var elm$core$Elm$JsArray$empty = _JsArray_empty;
var elm$core$Array$empty = A4(elm$core$Array$Array_elm_builtin, 0, elm$core$Array$shiftStep, elm$core$Elm$JsArray$empty, elm$core$Elm$JsArray$empty);
var elm$core$Array$Leaf = function (a) {
	return {$: 1, a: a};
};
var elm$core$Array$SubTree = function (a) {
	return {$: 0, a: a};
};
var elm$core$Elm$JsArray$initializeFromList = _JsArray_initializeFromList;
var elm$core$Array$compressNodes = F2(
	function (nodes, acc) {
		compressNodes:
		while (true) {
			var _n0 = A2(elm$core$Elm$JsArray$initializeFromList, elm$core$Array$branchFactor, nodes);
			var node = _n0.a;
			var remainingNodes = _n0.b;
			var newAcc = A2(
				elm$core$List$cons,
				elm$core$Array$SubTree(node),
				acc);
			if (!remainingNodes.b) {
				return elm$core$List$reverse(newAcc);
			} else {
				var $temp$nodes = remainingNodes,
					$temp$acc = newAcc;
				nodes = $temp$nodes;
				acc = $temp$acc;
				continue compressNodes;
			}
		}
	});
var elm$core$Tuple$first = function (_n0) {
	var x = _n0.a;
	return x;
};
var elm$core$Array$treeFromBuilder = F2(
	function (nodeList, nodeListSize) {
		treeFromBuilder:
		while (true) {
			var newNodeSize = elm$core$Basics$ceiling(nodeListSize / elm$core$Array$branchFactor);
			if (newNodeSize === 1) {
				return A2(elm$core$Elm$JsArray$initializeFromList, elm$core$Array$branchFactor, nodeList).a;
			} else {
				var $temp$nodeList = A2(elm$core$Array$compressNodes, nodeList, _List_Nil),
					$temp$nodeListSize = newNodeSize;
				nodeList = $temp$nodeList;
				nodeListSize = $temp$nodeListSize;
				continue treeFromBuilder;
			}
		}
	});
var elm$core$Basics$floor = _Basics_floor;
var elm$core$Basics$max = F2(
	function (x, y) {
		return (_Utils_cmp(x, y) > 0) ? x : y;
	});
var elm$core$Basics$mul = _Basics_mul;
var elm$core$Elm$JsArray$length = _JsArray_length;
var elm$core$Array$builderToArray = F2(
	function (reverseNodeList, builder) {
		if (!builder.d) {
			return A4(
				elm$core$Array$Array_elm_builtin,
				elm$core$Elm$JsArray$length(builder.e),
				elm$core$Array$shiftStep,
				elm$core$Elm$JsArray$empty,
				builder.e);
		} else {
			var treeLen = builder.d * elm$core$Array$branchFactor;
			var depth = elm$core$Basics$floor(
				A2(elm$core$Basics$logBase, elm$core$Array$branchFactor, treeLen - 1));
			var correctNodeList = reverseNodeList ? elm$core$List$reverse(builder.f) : builder.f;
			var tree = A2(elm$core$Array$treeFromBuilder, correctNodeList, builder.d);
			return A4(
				elm$core$Array$Array_elm_builtin,
				elm$core$Elm$JsArray$length(builder.e) + treeLen,
				A2(elm$core$Basics$max, 5, depth * elm$core$Array$shiftStep),
				tree,
				builder.e);
		}
	});
var elm$core$Basics$idiv = _Basics_idiv;
var elm$core$Elm$JsArray$initialize = _JsArray_initialize;
var elm$core$Array$initializeHelp = F5(
	function (fn, fromIndex, len, nodeList, tail) {
		initializeHelp:
		while (true) {
			if (fromIndex < 0) {
				return A2(
					elm$core$Array$builderToArray,
					false,
					{f: nodeList, d: (len / elm$core$Array$branchFactor) | 0, e: tail});
			} else {
				var leaf = elm$core$Array$Leaf(
					A3(elm$core$Elm$JsArray$initialize, elm$core$Array$branchFactor, fromIndex, fn));
				var $temp$fn = fn,
					$temp$fromIndex = fromIndex - elm$core$Array$branchFactor,
					$temp$len = len,
					$temp$nodeList = A2(elm$core$List$cons, leaf, nodeList),
					$temp$tail = tail;
				fn = $temp$fn;
				fromIndex = $temp$fromIndex;
				len = $temp$len;
				nodeList = $temp$nodeList;
				tail = $temp$tail;
				continue initializeHelp;
			}
		}
	});
var elm$core$Basics$remainderBy = _Basics_remainderBy;
var elm$core$Array$initialize = F2(
	function (len, fn) {
		if (len <= 0) {
			return elm$core$Array$empty;
		} else {
			var tailLen = len % elm$core$Array$branchFactor;
			var tail = A3(elm$core$Elm$JsArray$initialize, tailLen, len - tailLen, fn);
			var initialFromIndex = (len - tailLen) - elm$core$Array$branchFactor;
			return A5(elm$core$Array$initializeHelp, fn, initialFromIndex, len, _List_Nil, tail);
		}
	});
var elm$json$Json$Decode$Failure = F2(
	function (a, b) {
		return {$: 3, a: a, b: b};
	});
var elm$json$Json$Decode$Field = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var elm$json$Json$Decode$Index = F2(
	function (a, b) {
		return {$: 1, a: a, b: b};
	});
var elm$json$Json$Decode$OneOf = function (a) {
	return {$: 2, a: a};
};
var elm$json$Json$Decode$map = _Json_map1;
var elm$json$Json$Decode$map2 = _Json_map2;
var elm$json$Json$Decode$succeed = _Json_succeed;
var elm$virtual_dom$VirtualDom$isSync = function (timed) {
	if (!timed.$) {
		return true;
	} else {
		return false;
	}
};
var elm$virtual_dom$VirtualDom$toHandlerInt = function (handler) {
	switch (handler.$) {
		case 0:
			return 0;
		case 1:
			return 1;
		case 2:
			return 2;
		default:
			return 3;
	}
};
var elm$virtual_dom$VirtualDom$node = function (tag) {
	return _VirtualDom_node(
		_VirtualDom_noScript(tag));
};
var elm$html$Html$node = elm$virtual_dom$VirtualDom$node;
var elm$virtual_dom$VirtualDom$property = F2(
	function (key, value) {
		return A2(
			_VirtualDom_property,
			_VirtualDom_noInnerHtmlOrFormAction(key),
			_VirtualDom_noJavaScriptOrHtmlUri(value));
	});
var elm$html$Html$Attributes$property = elm$virtual_dom$VirtualDom$property;
var elm$json$Json$Encode$string = _Json_wrap;
var author$project$MeenyLatex$Render2$mathText = function (content) {
	return A3(
		elm$html$Html$node,
		'math-text',
		_List_fromArray(
			[
				A2(
				elm$html$Html$Attributes$property,
				'content',
				elm$json$Json$Encode$string(content))
			]),
		_List_Nil);
};
var author$project$MeenyLatex$Render2$displayMathText = function (str) {
	return author$project$MeenyLatex$Render2$mathText(
		'$$\n' + (elm$core$String$trim(str) + '\n$$'));
};
var elm$html$Html$span = _VirtualDom_node('span');
var elm$virtual_dom$VirtualDom$text = _VirtualDom_text;
var elm$html$Html$text = elm$virtual_dom$VirtualDom$text;
var author$project$MeenyLatex$Render2$enclose = function (msg) {
	return A2(
		elm$html$Html$span,
		_List_Nil,
		_List_fromArray(
			[
				elm$html$Html$text('{'),
				msg,
				elm$html$Html$text('}')
			]));
};
var author$project$MeenyLatex$Render2$getElement = F2(
	function (k, list) {
		return A2(
			elm$core$Maybe$withDefault,
			author$project$MeenyLatex$Parser$LXString('xxx'),
			A2(author$project$MeenyLatex$Utility$getAt, k, list));
	});
var author$project$MeenyLatex$Render2$inlineMathText = function (str) {
	return author$project$MeenyLatex$Render2$mathText(
		'$ ' + (elm$core$String$trim(str) + ' $'));
};
var author$project$MeenyLatex$Render2$itemClass = function (level) {
	return 'item' + elm$core$String$fromInt(level);
};
var author$project$MeenyLatex$Render2$oneSpace = elm$html$Html$text(' ');
var author$project$MeenyLatex$Render2$processLatexExpressionWithSpacing = function (_n0) {
	var expr = _n0.a;
	var spacing = _n0.b;
	var _n1 = _Utils_Tuple2(expr, spacing);
	_n1$3:
	while (true) {
		switch (_n1.b) {
			case 2:
				var _n2 = _n1.b;
				return expr;
			case 0:
				if (!_n1.a.$) {
					var str = _n1.a.a;
					var _n3 = _n1.b;
					return author$project$MeenyLatex$Parser$LXString(str + ' ');
				} else {
					break _n1$3;
				}
			default:
				if (!_n1.a.$) {
					var str = _n1.a.a;
					var _n4 = _n1.b;
					return author$project$MeenyLatex$Parser$LXString(' ' + str);
				} else {
					break _n1$3;
				}
		}
	}
	return expr;
};
var author$project$MeenyLatex$Render2$processLatexListWithSpacing = function (latexListWithSpacing) {
	return A2(elm$core$List$map, author$project$MeenyLatex$Render2$processLatexExpressionWithSpacing, latexListWithSpacing);
};
var author$project$MeenyLatex$Render2$NoSpace = 2;
var author$project$MeenyLatex$Render2$SpaceAfter = 0;
var elm$core$String$left = F2(
	function (n, string) {
		return (n < 1) ? '' : A3(elm$core$String$slice, 0, n, string);
	});
var author$project$MeenyLatex$Render2$firstChar = elm$core$String$left(1);
var author$project$MeenyLatex$Render2$spaceAfter = function (str) {
	return A2(
		elm$core$List$member,
		author$project$MeenyLatex$Render2$firstChar(str),
		_List_fromArray(
			[')', '.', ',', '?', '!', ';', ':'])) ? 2 : 0;
};
var author$project$MeenyLatex$Render2$SpaceBefore = 1;
var elm$core$String$right = F2(
	function (n, string) {
		return (n < 1) ? '' : A3(
			elm$core$String$slice,
			-n,
			elm$core$String$length(string),
			string);
	});
var author$project$MeenyLatex$Render2$lastChar = elm$core$String$right(1);
var author$project$MeenyLatex$Render2$spaceBefore = function (str) {
	return A2(
		elm$core$List$member,
		author$project$MeenyLatex$Render2$lastChar(str),
		_List_fromArray(
			['('])) ? 2 : 1;
};
var author$project$MeenyLatex$Render2$putSpace = F2(
	function (le1, le2) {
		var _n0 = _Utils_Tuple2(le1, le2);
		if (!_n0.b.$) {
			if (_n0.b.a === '!!END') {
				return _Utils_Tuple2(le1, 2);
			} else {
				var str = _n0.b.a;
				return _Utils_Tuple2(
					le1,
					author$project$MeenyLatex$Render2$spaceAfter(str));
			}
		} else {
			if (!_n0.a.$) {
				var str = _n0.a.a;
				return _Utils_Tuple2(
					le1,
					author$project$MeenyLatex$Render2$spaceBefore(str));
			} else {
				return _Utils_Tuple2(le1, 2);
			}
		}
	});
var elm$core$List$map2 = _List_map2;
var author$project$MeenyLatex$Render2$putSpaces = function (latexList) {
	var latexList2 = _Utils_ap(
		A2(elm$core$List$drop, 1, latexList),
		_List_fromArray(
			[
				author$project$MeenyLatex$Parser$LXString('!!END')
			]));
	return A3(elm$core$List$map2, author$project$MeenyLatex$Render2$putSpace, latexList, latexList2);
};
var elm$parser$Parser$deadEndsToString = function (deadEnds) {
	return 'TODO deadEndsToString';
};
var author$project$MeenyLatex$ErrorMessages$renderError = function (error) {
	return '<div style=\"color: red\">ERROR: ' + (elm$parser$Parser$deadEndsToString(
		_List_fromArray(
			[error])) + ('</div>\n' + ('<div style=\"color: blue\">' + ('explanation_' + '</div>'))));
};
var author$project$MeenyLatex$Html$div = F2(
	function (attributes, children) {
		var childrenString = A2(elm$core$String$join, '\n', children);
		var attributeString = A2(elm$core$String$join, ' ', attributes);
		return '<div ' + (attributeString + (' >\n' + (childrenString + '\n</div>')));
	});
var author$project$MeenyLatex$JoinStrings$NoSpace = 1;
var author$project$MeenyLatex$JoinStrings$Space = 0;
var author$project$MeenyLatex$JoinStrings$firstChar = elm$core$String$left(1);
var author$project$MeenyLatex$JoinStrings$lastChar = elm$core$String$right(1);
var author$project$MeenyLatex$JoinStrings$joinType = F2(
	function (l, r) {
		var lastCharLeft = author$project$MeenyLatex$JoinStrings$lastChar(l);
		var firstCharRight = author$project$MeenyLatex$JoinStrings$firstChar(r);
		return (l === '') ? 1 : (A2(
			elm$core$List$member,
			lastCharLeft,
			_List_fromArray(
				['('])) ? 1 : (A2(
			elm$core$List$member,
			firstCharRight,
			_List_fromArray(
				[')', '.', ',', '?', '!', ';', ':'])) ? 1 : 0));
	});
var author$project$MeenyLatex$JoinStrings$joinDatum2String = F2(
	function (current, datum) {
		var _n0 = datum;
		var acc = _n0.a;
		var previous = _n0.b;
		var _n1 = A2(author$project$MeenyLatex$JoinStrings$joinType, previous, current);
		if (_n1 === 1) {
			return _Utils_Tuple2(
				_Utils_ap(acc, current),
				current);
		} else {
			return _Utils_Tuple2(acc + (' ' + current), current);
		}
	});
var author$project$MeenyLatex$JoinStrings$joinList = function (stringList) {
	var start = A2(
		elm$core$Maybe$withDefault,
		'',
		elm$core$List$head(stringList));
	return A3(
		elm$core$List$foldl,
		author$project$MeenyLatex$JoinStrings$joinDatum2String,
		_Utils_Tuple2('', ''),
		stringList).a;
};
var author$project$MeenyLatex$Render$getElement = F2(
	function (k, list) {
		return A2(
			elm$core$Maybe$withDefault,
			author$project$MeenyLatex$Parser$LXString('xxx'),
			A2(author$project$MeenyLatex$Utility$getAt, k, list));
	});
var author$project$MeenyLatex$Render$itemClass = function (level) {
	return 'item' + elm$core$String$fromInt(level);
};
var elm$core$String$replace = F3(
	function (before, after, string) {
		return A2(
			elm$core$String$join,
			after,
			A2(elm$core$String$split, before, string));
	});
var author$project$MeenyLatex$Render$postProcess = function (str) {
	return A3(
		elm$core$String$replace,
		'\\&',
		'&#38',
		A3(
			elm$core$String$replace,
			'--',
			'&ndash;',
			A3(elm$core$String$replace, '---', '&mdash;', str)));
};
var author$project$MeenyLatex$Render$renderComment = function (str) {
	return '';
};
var author$project$MeenyLatex$Render$renderCommentEnvironment = F2(
	function (latexState, body) {
		return '';
	});
var author$project$MeenyLatex$Render$renderCell = function (cell) {
	switch (cell.$) {
		case 0:
			var s = cell.a;
			return '<td>' + (s + '</td>');
		case 3:
			var s = cell.a;
			return '<td>$' + (s + '$</td>');
		default:
			return '<td>-</td>';
	}
};
var author$project$MeenyLatex$Render$renderRow = function (row) {
	if (row.$ === 8) {
		var row_ = row.a;
		return function (row__) {
			return '<tr> ' + (row__ + ' </tr>\n');
		}(
			A3(
				elm$core$List$foldl,
				F2(
					function (cell, acc) {
						return acc + (' ' + author$project$MeenyLatex$Render$renderCell(cell));
					}),
				'',
				row_));
	} else {
		return '<tr>-</tr>';
	}
};
var author$project$MeenyLatex$Render$renderTableBody = function (body) {
	if (body.$ === 8) {
		var body_ = body.a;
		return function (bod) {
			return '<table>\n' + (bod + '</table>\n');
		}(
			A3(
				elm$core$List$foldl,
				F2(
					function (row, acc) {
						return acc + (' ' + author$project$MeenyLatex$Render$renderRow(row));
					}),
				'',
				body_));
	} else {
		return '<table>-</table>';
	}
};
var author$project$MeenyLatex$Render$renderTabular = F2(
	function (latexState, body) {
		return author$project$MeenyLatex$Render$renderTableBody(body);
	});
var elm$core$String$cons = _String_cons;
var elm$core$String$fromChar = function (_char) {
	return A2(elm$core$String$cons, _char, '');
};
var elm$core$Bitwise$and = _Bitwise_and;
var elm$core$Bitwise$shiftRightBy = _Bitwise_shiftRightBy;
var elm$core$String$repeatHelp = F3(
	function (n, chunk, result) {
		return (n <= 0) ? result : A3(
			elm$core$String$repeatHelp,
			n >> 1,
			_Utils_ap(chunk, chunk),
			(!(n & 1)) ? result : _Utils_ap(result, chunk));
	});
var elm$core$String$repeat = F2(
	function (n, chunk) {
		return A3(elm$core$String$repeatHelp, n, chunk, '');
	});
var elm$core$String$padLeft = F3(
	function (n, _char, string) {
		return _Utils_ap(
			A2(
				elm$core$String$repeat,
				n - elm$core$String$length(string),
				elm$core$String$fromChar(_char)),
			string);
	});
var author$project$MeenyLatex$Utility$numberedLine = F2(
	function (k, line) {
		return A3(
			elm$core$String$padLeft,
			2,
			' ',
			elm$core$String$fromInt(k)) + (' ' + line);
	});
var author$project$MeenyLatex$Utility$addNumberedLine = F2(
	function (line, data) {
		var _n0 = data;
		var k = _n0.a;
		var lines = _n0.b;
		return _Utils_Tuple2(
			k + 1,
			_Utils_ap(
				_List_fromArray(
					[
						A2(author$project$MeenyLatex$Utility$numberedLine, k + 1, line)
					]),
				lines));
	});
var elm$core$Tuple$second = function (_n0) {
	var y = _n0.b;
	return y;
};
var author$project$MeenyLatex$Utility$addLineNumbers = function (text) {
	return A2(
		elm$core$String$join,
		'\n',
		elm$core$List$reverse(
			A3(
				elm$core$List$foldl,
				author$project$MeenyLatex$Utility$addNumberedLine,
				_Utils_Tuple2(0, _List_Nil),
				A2(
					elm$core$String$split,
					'\n',
					elm$core$String$trim(text))).b));
};
var author$project$MeenyLatex$Render$environmentRenderer = function (name) {
	var _n3 = A2(
		elm$core$Dict$get,
		name,
		author$project$MeenyLatex$Render$cyclic$renderEnvironmentDict());
	if (!_n3.$) {
		var f = _n3.a;
		return f;
	} else {
		return author$project$MeenyLatex$Render$renderDefaultEnvironment(name);
	}
};
var author$project$MeenyLatex$Render$macroRenderer = F4(
	function (name, latexState, optArgs, args) {
		var _n2 = A2(
			elm$core$Dict$get,
			name,
			author$project$MeenyLatex$Render$cyclic$renderMacroDict());
		if (!_n2.$) {
			var f = _n2.a;
			return A3(f, latexState, optArgs, args);
		} else {
			return A4(author$project$MeenyLatex$Render$reproduceMacro, name, latexState, optArgs, args);
		}
	});
var author$project$MeenyLatex$Render$render = F2(
	function (latexState, latexExpression) {
		switch (latexExpression.$) {
			case 1:
				var str = latexExpression.a;
				return author$project$MeenyLatex$Render$renderComment(str);
			case 6:
				var name = latexExpression.a;
				var optArgs = latexExpression.b;
				var args = latexExpression.c;
				return A4(author$project$MeenyLatex$Render$renderMacro, latexState, name, optArgs, args);
			case 5:
				var name = latexExpression.a;
				var optArgs = latexExpression.b;
				var args = latexExpression.c;
				var le = latexExpression.d;
				return A5(author$project$MeenyLatex$Render$renderSMacro, latexState, name, optArgs, args, le);
			case 2:
				var level = latexExpression.a;
				var latexExpr = latexExpression.b;
				return A3(author$project$MeenyLatex$Render$renderItem, latexState, level, latexExpr);
			case 3:
				var str = latexExpression.a;
				return '$' + (str + '$');
			case 4:
				var str = latexExpression.a;
				return '$$' + (str + '$$');
			case 7:
				var name = latexExpression.a;
				var args = latexExpression.b;
				var body = latexExpression.c;
				return A4(author$project$MeenyLatex$Render$renderEnvironment, latexState, name, args, body);
			case 8:
				var args = latexExpression.a;
				return A2(author$project$MeenyLatex$Render$renderLatexList, latexState, args);
			case 0:
				var str = latexExpression.a;
				return str;
			default:
				var error = latexExpression.a;
				return A2(
					elm$core$String$join,
					'; ',
					A2(elm$core$List$map, author$project$MeenyLatex$ErrorMessages$renderError, error));
		}
	});
var author$project$MeenyLatex$Render$renderAlignEnvironment = F2(
	function (latexState, body) {
		var s1 = A2(author$project$MeenyLatex$LatexState$getCounter, 's1', latexState);
		var r = A3(
			elm$core$String$replace,
			'\\ \\',
			'\\\\',
			A2(author$project$MeenyLatex$Render$render, latexState, body));
		var eqno = A2(author$project$MeenyLatex$LatexState$getCounter, 'eqno', latexState);
		var addendum = (eqno > 0) ? ((s1 > 0) ? ('\\tag{' + (elm$core$String$fromInt(s1) + ('.' + (elm$core$String$fromInt(eqno) + '}')))) : ('\\tag{' + (elm$core$String$fromInt(eqno) + '}'))) : '';
		return '\n$$\n\\begin{align}\n' + (addendum + (r + '\n\\end{align}\n$$\n'));
	});
var author$project$MeenyLatex$Render$renderArg = F3(
	function (k, latexState, args) {
		return elm$core$String$trim(
			A2(
				author$project$MeenyLatex$Render$render,
				latexState,
				A2(author$project$MeenyLatex$Render$getElement, k, args)));
	});
var author$project$MeenyLatex$Render$renderArgList = F2(
	function (latexState, args) {
		return A2(
			elm$core$String$join,
			'',
			A2(
				elm$core$List$map,
				function (x) {
					return '{' + (x + '}');
				},
				A2(
					elm$core$List$map,
					author$project$MeenyLatex$Render$render(latexState),
					args)));
	});
var author$project$MeenyLatex$Render$renderBibItem = F4(
	function (latexState, optArgs, args, body) {
		var label = (elm$core$List$length(optArgs) === 1) ? A3(author$project$MeenyLatex$Render$renderArg, 0, latexState, optArgs) : A3(author$project$MeenyLatex$Render$renderArg, 0, latexState, args);
		return ' <p id=\"bib:' + (label + ('\">[' + (label + ('] ' + (A2(author$project$MeenyLatex$Render$render, latexState, body) + '</p>\n')))));
	});
var author$project$MeenyLatex$Render$renderBozo = F2(
	function (latexState, args) {
		return 'bozo{' + (A3(author$project$MeenyLatex$Render$renderArg, 0, latexState, args) + ('}{' + (A3(author$project$MeenyLatex$Render$renderArg, 1, latexState, args) + '}')));
	});
var author$project$MeenyLatex$Render$renderCenterEnvironment = F2(
	function (latexState, body) {
		var r = A2(author$project$MeenyLatex$Render$render, latexState, body);
		return '\n<div class=\"center\" >\n' + (r + '\n</div>\n');
	});
var author$project$MeenyLatex$Render$renderDefaultEnvironment = F4(
	function (name, latexState, args, body) {
		return A2(
			elm$core$List$member,
			name,
			_List_fromArray(
				['theorem', 'proposition', 'corollary', 'lemma', 'definition'])) ? A4(author$project$MeenyLatex$Render$renderTheoremLikeEnvironment, latexState, name, args, body) : A4(author$project$MeenyLatex$Render$renderDefaultEnvironment2, latexState, name, args, body);
	});
var author$project$MeenyLatex$Render$renderDefaultEnvironment2 = F4(
	function (latexState, name, args, body) {
		var r = A2(author$project$MeenyLatex$Render$render, latexState, body);
		return '\n<div class=\"environment\">\n<strong>' + (name + ('</strong>\n<div>\n' + (r + '\n</div>\n</div>\n')));
	});
var author$project$MeenyLatex$Render$renderEnumerate = F2(
	function (latexState, body) {
		return '\n<ol>\n' + (A2(author$project$MeenyLatex$Render$render, latexState, body) + '\n</ol>\n');
	});
var author$project$MeenyLatex$Render$renderEnvironment = F4(
	function (latexState, name, args, body) {
		return A4(author$project$MeenyLatex$Render$environmentRenderer, name, latexState, args, body);
	});
var author$project$MeenyLatex$Render$renderEqnArray = F2(
	function (latexState, body) {
		return '\n$$\n' + (A2(author$project$MeenyLatex$Render$render, latexState, body) + '\n$$\n');
	});
var author$project$MeenyLatex$Render$renderEquationEnvironment = F2(
	function (latexState, body) {
		var s1 = A2(author$project$MeenyLatex$LatexState$getCounter, 's1', latexState);
		var r = A2(author$project$MeenyLatex$Render$render, latexState, body);
		var eqno = A2(author$project$MeenyLatex$LatexState$getCounter, 'eqno', latexState);
		var addendum = (eqno > 0) ? ((s1 > 0) ? ('\\tag{' + (elm$core$String$fromInt(s1) + ('.' + (elm$core$String$fromInt(eqno) + '}')))) : ('\\tag{' + (elm$core$String$fromInt(eqno) + '}'))) : '';
		return '\n$$\n\\begin{equation}' + (addendum + (r + '\\end{equation}\n$$\n'));
	});
var author$project$MeenyLatex$Render$renderIndentEnvironment = F2(
	function (latexState, body) {
		return A2(
			author$project$MeenyLatex$Html$div,
			_List_fromArray(
				['style=\"margin-left:2em\"']),
			_List_fromArray(
				[
					A2(author$project$MeenyLatex$Render$render, latexState, body)
				]));
	});
var author$project$MeenyLatex$Render$renderItem = F3(
	function (latexState, level, latexExpression) {
		return '<li class=\"' + (author$project$MeenyLatex$Render$itemClass(level) + ('\">' + (A2(author$project$MeenyLatex$Render$render, latexState, latexExpression) + '</li>\n')));
	});
var author$project$MeenyLatex$Render$renderItemize = F2(
	function (latexState, body) {
		return '\n<ul>\n' + (A2(author$project$MeenyLatex$Render$render, latexState, body) + '\n</ul>\n');
	});
var author$project$MeenyLatex$Render$renderLatexList = F2(
	function (latexState, args) {
		return author$project$MeenyLatex$Render$postProcess(
			author$project$MeenyLatex$JoinStrings$joinList(
				A2(
					elm$core$List$map,
					author$project$MeenyLatex$Render$render(latexState),
					args)));
	});
var author$project$MeenyLatex$Render$renderListing = F2(
	function (latexState, body) {
		var text = A2(author$project$MeenyLatex$Render$render, latexState, body);
		return '\n<pre class=\"verbatim\">' + (author$project$MeenyLatex$Utility$addLineNumbers(text) + '</pre>\n');
	});
var author$project$MeenyLatex$Render$renderMacro = F4(
	function (latexState, name, optArgs, args) {
		return A3(
			author$project$MeenyLatex$Render$macroRenderer(name),
			latexState,
			optArgs,
			args);
	});
var author$project$MeenyLatex$Render$renderMacros = F2(
	function (latexState, body) {
		return '\n$$\n' + (A2(author$project$MeenyLatex$Render$render, latexState, body) + '\n$$\n');
	});
var author$project$MeenyLatex$Render$renderOptArgList = F2(
	function (latexState, args) {
		return A2(
			elm$core$String$join,
			'',
			A2(
				elm$core$List$map,
				function (x) {
					return '[' + (x + ']');
				},
				A2(
					elm$core$List$map,
					author$project$MeenyLatex$Render$render(latexState),
					args)));
	});
var author$project$MeenyLatex$Render$renderQuotation = F2(
	function (latexState, body) {
		return A2(
			author$project$MeenyLatex$Html$div,
			_List_fromArray(
				['class=\"quotation\"']),
			_List_fromArray(
				[
					A2(author$project$MeenyLatex$Render$render, latexState, body)
				]));
	});
var author$project$MeenyLatex$Render$renderSMacro = F5(
	function (latexState, name, optArgs, args, le) {
		var _n0 = A2(
			elm$core$Dict$get,
			name,
			author$project$MeenyLatex$Render$cyclic$renderSMacroDict());
		if (!_n0.$) {
			var f = _n0.a;
			return A4(f, latexState, optArgs, args, le);
		} else {
			return '<span style=\"color: red;\">\\' + (name + (A2(author$project$MeenyLatex$Render$renderArgList, author$project$MeenyLatex$LatexState$emptyLatexState, args) + (' ' + (A2(author$project$MeenyLatex$Render$render, latexState, le) + '</span>'))));
		}
	});
var author$project$MeenyLatex$Render$renderTheBibliography = F2(
	function (latexState, body) {
		return A2(
			author$project$MeenyLatex$Html$div,
			_List_fromArray(
				['style=\"\"']),
			_List_fromArray(
				[
					A2(author$project$MeenyLatex$Render$render, latexState, body)
				]));
	});
var author$project$MeenyLatex$Render$renderTheoremLikeEnvironment = F4(
	function (latexState, name, args, body) {
		var tno = A2(author$project$MeenyLatex$LatexState$getCounter, 'tno', latexState);
		var s1 = A2(author$project$MeenyLatex$LatexState$getCounter, 's1', latexState);
		var tnoString = (s1 > 0) ? (' ' + (elm$core$String$fromInt(s1) + ('.' + elm$core$String$fromInt(tno)))) : (' ' + elm$core$String$fromInt(tno));
		var r = A2(author$project$MeenyLatex$Render$render, latexState, body);
		var eqno = A2(author$project$MeenyLatex$LatexState$getCounter, 'eqno', latexState);
		return '\n<div class=\"environment\">\n<strong>' + (name + (tnoString + ('</strong>\n<div class=\"italic\">\n' + (r + '\n</div>\n</div>\n'))));
	});
var author$project$MeenyLatex$Render$renderUseForWeb = F2(
	function (latexState, body) {
		return '\n$$\n' + (A2(author$project$MeenyLatex$Render$render, latexState, body) + '\n$$\n');
	});
var author$project$MeenyLatex$Render$renderVerbatim = F2(
	function (latexState, body) {
		var body2 = A3(
			elm$core$String$replace,
			'<',
			'&lt;',
			A3(
				elm$core$String$replace,
				'>',
				'&gt;',
				A2(author$project$MeenyLatex$Render$render, latexState, body)));
		return '\n<pre class=\"verbatim\">' + (body2 + '</pre>\n');
	});
var author$project$MeenyLatex$Render$renderVerse = F2(
	function (latexState, body) {
		return A2(
			author$project$MeenyLatex$Html$div,
			_List_fromArray(
				['class=\"verse\"']),
			_List_fromArray(
				[
					elm$core$String$trim(
					A2(author$project$MeenyLatex$Render$render, latexState, body))
				]));
	});
var author$project$MeenyLatex$Render$reproduceMacro = F4(
	function (name, latexState, optArgs, args) {
		return '<span style=\"color: red;\">\\' + (name + (A2(author$project$MeenyLatex$Render$renderOptArgList, author$project$MeenyLatex$LatexState$emptyLatexState, optArgs) + (A2(author$project$MeenyLatex$Render$renderArgList, author$project$MeenyLatex$LatexState$emptyLatexState, args) + '</span>')));
	});
function author$project$MeenyLatex$Render$cyclic$renderEnvironmentDict() {
	return elm$core$Dict$fromList(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'align',
				F3(
					function (x, a, y) {
						return A2(author$project$MeenyLatex$Render$renderAlignEnvironment, x, y);
					})),
				_Utils_Tuple2(
				'center',
				F3(
					function (x, a, y) {
						return A2(author$project$MeenyLatex$Render$renderCenterEnvironment, x, y);
					})),
				_Utils_Tuple2(
				'comment',
				F3(
					function (x, a, y) {
						return A2(author$project$MeenyLatex$Render$renderCommentEnvironment, x, y);
					})),
				_Utils_Tuple2(
				'indent',
				F3(
					function (x, a, y) {
						return A2(author$project$MeenyLatex$Render$renderIndentEnvironment, x, y);
					})),
				_Utils_Tuple2(
				'enumerate',
				F3(
					function (x, a, y) {
						return A2(author$project$MeenyLatex$Render$renderEnumerate, x, y);
					})),
				_Utils_Tuple2(
				'eqnarray',
				F3(
					function (x, a, y) {
						return A2(author$project$MeenyLatex$Render$renderEqnArray, x, y);
					})),
				_Utils_Tuple2(
				'equation',
				F3(
					function (x, a, y) {
						return A2(author$project$MeenyLatex$Render$renderEquationEnvironment, x, y);
					})),
				_Utils_Tuple2(
				'itemize',
				F3(
					function (x, a, y) {
						return A2(author$project$MeenyLatex$Render$renderItemize, x, y);
					})),
				_Utils_Tuple2(
				'listing',
				F3(
					function (x, a, y) {
						return A2(author$project$MeenyLatex$Render$renderListing, x, y);
					})),
				_Utils_Tuple2(
				'macros',
				F3(
					function (x, a, y) {
						return A2(author$project$MeenyLatex$Render$renderMacros, x, y);
					})),
				_Utils_Tuple2(
				'quotation',
				F3(
					function (x, a, y) {
						return A2(author$project$MeenyLatex$Render$renderQuotation, x, y);
					})),
				_Utils_Tuple2(
				'tabular',
				F3(
					function (x, a, y) {
						return A2(author$project$MeenyLatex$Render$renderTabular, x, y);
					})),
				_Utils_Tuple2(
				'thebibliography',
				F3(
					function (x, a, y) {
						return A2(author$project$MeenyLatex$Render$renderTheBibliography, x, y);
					})),
				_Utils_Tuple2(
				'maskforweb',
				F3(
					function (x, a, y) {
						return A2(author$project$MeenyLatex$Render$renderCommentEnvironment, x, y);
					})),
				_Utils_Tuple2(
				'useforweb',
				F3(
					function (x, a, y) {
						return A2(author$project$MeenyLatex$Render$renderUseForWeb, x, y);
					})),
				_Utils_Tuple2(
				'verbatim',
				F3(
					function (x, a, y) {
						return A2(author$project$MeenyLatex$Render$renderVerbatim, x, y);
					})),
				_Utils_Tuple2(
				'verse',
				F3(
					function (x, a, y) {
						return A2(author$project$MeenyLatex$Render$renderVerse, x, y);
					}))
			]));
}
function author$project$MeenyLatex$Render$cyclic$renderMacroDict() {
	return elm$core$Dict$fromList(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'italic',
				F3(
					function (x, y, z) {
						return A2(author$project$MeenyLatex$Render$renderBozo, x, z);
					}))
			]));
}
function author$project$MeenyLatex$Render$cyclic$renderSMacroDict() {
	return elm$core$Dict$fromList(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'bibitem',
				F4(
					function (latexState, optArgs, args, body) {
						return A4(author$project$MeenyLatex$Render$renderBibItem, latexState, optArgs, args, body);
					}))
			]));
}
var author$project$MeenyLatex$Render$renderEnvironmentDict = author$project$MeenyLatex$Render$cyclic$renderEnvironmentDict();
author$project$MeenyLatex$Render$cyclic$renderEnvironmentDict = function () {
	return author$project$MeenyLatex$Render$renderEnvironmentDict;
};
var author$project$MeenyLatex$Render$renderMacroDict = author$project$MeenyLatex$Render$cyclic$renderMacroDict();
author$project$MeenyLatex$Render$cyclic$renderMacroDict = function () {
	return author$project$MeenyLatex$Render$renderMacroDict;
};
var author$project$MeenyLatex$Render$renderSMacroDict = author$project$MeenyLatex$Render$cyclic$renderSMacroDict();
author$project$MeenyLatex$Render$cyclic$renderSMacroDict = function () {
	return author$project$MeenyLatex$Render$renderSMacroDict;
};
var author$project$MeenyLatex$Render2$renderAlignEnvironment = F2(
	function (latexState, body) {
		var s1 = A2(author$project$MeenyLatex$LatexState$getCounter, 's1', latexState);
		var r = A2(author$project$MeenyLatex$Render$render, latexState, body);
		var eqno = A2(author$project$MeenyLatex$LatexState$getCounter, 'eqno', latexState);
		var addendum = (eqno > 0) ? ((s1 > 0) ? ('\\tag{' + (elm$core$String$fromInt(s1) + ('.' + (elm$core$String$fromInt(eqno) + '}')))) : ('\\tag{' + (elm$core$String$fromInt(eqno) + '}'))) : '';
		var content = '\n\\begin{align}\n' + (addendum + (r + '\n\\end{align}\n'));
		return author$project$MeenyLatex$Render2$displayMathText(content);
	});
var author$project$MeenyLatex$Render2$renderAuthor = F2(
	function (latexState, args) {
		return A2(elm$html$Html$span, _List_Nil, _List_Nil);
	});
var elm$html$Html$br = _VirtualDom_node('br');
var elm$html$Html$div = _VirtualDom_node('div');
var author$project$MeenyLatex$Render2$renderBigSkip = F2(
	function (latexState, args) {
		return A2(
			elm$html$Html$div,
			_List_Nil,
			_List_fromArray(
				[
					A2(elm$html$Html$br, _List_Nil, _List_Nil)
				]));
	});
var author$project$MeenyLatex$LatexState$getDictionaryItem = F2(
	function (key, latexState) {
		var _n0 = A2(elm$core$Dict$get, key, latexState.au);
		if (!_n0.$) {
			var value = _n0.a;
			return value;
		} else {
			return '';
		}
	});
var elm$html$Html$a = _VirtualDom_node('a');
var elm$html$Html$Attributes$stringProperty = F2(
	function (key, string) {
		return A2(
			_VirtualDom_property,
			key,
			elm$json$Json$Encode$string(string));
	});
var elm$html$Html$Attributes$href = function (url) {
	return A2(
		elm$html$Html$Attributes$stringProperty,
		'href',
		_VirtualDom_noJavaScriptUri(url));
};
var author$project$MeenyLatex$Render2$renderCite = F2(
	function (latexState, args) {
		var label_ = A3(author$project$MeenyLatex$Render$renderArg, 0, latexState, args);
		var ref = A2(author$project$MeenyLatex$LatexState$getDictionaryItem, 'bibitem:' + label_, latexState);
		var label = (ref !== '') ? ref : label_;
		return A2(
			elm$html$Html$span,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					elm$html$Html$span,
					_List_Nil,
					_List_fromArray(
						[
							elm$html$Html$text('[')
						])),
					A2(
					elm$html$Html$a,
					_List_fromArray(
						[
							elm$html$Html$Attributes$href(label)
						]),
					_List_fromArray(
						[
							elm$html$Html$text(label)
						])),
					A2(
					elm$html$Html$span,
					_List_Nil,
					_List_fromArray(
						[
							elm$html$Html$text(']')
						]))
				]));
	});
var author$project$MeenyLatex$Render2$renderCommentEnvironment = F2(
	function (latexState, body) {
		return A2(elm$html$Html$div, _List_Nil, _List_Nil);
	});
var author$project$MeenyLatex$Render2$renderDate = F2(
	function (latexState, args) {
		return A2(elm$html$Html$span, _List_Nil, _List_Nil);
	});
var elm$html$Html$li = _VirtualDom_node('li');
var elm$html$Html$ul = _VirtualDom_node('ul');
var elm$html$Html$Attributes$class = elm$html$Html$Attributes$stringProperty('className');
var author$project$MeenyLatex$Render2$renderDocumentTitle = F2(
	function (latexState, list) {
		var title = A2(author$project$MeenyLatex$LatexState$getDictionaryItem, 'title', latexState);
		var titlePart = A2(
			elm$html$Html$div,
			_List_fromArray(
				[
					elm$html$Html$Attributes$class('title')
				]),
			_List_fromArray(
				[
					elm$html$Html$text(title)
				]));
		var revision = A2(author$project$MeenyLatex$LatexState$getDictionaryItem, 'revision', latexState);
		var revisionText = (revision !== '') ? ('Last revised ' + revision) : '';
		var email = A2(author$project$MeenyLatex$LatexState$getDictionaryItem, 'email', latexState);
		var date = A2(author$project$MeenyLatex$LatexState$getDictionaryItem, 'date', latexState);
		var author = A2(author$project$MeenyLatex$LatexState$getDictionaryItem, 'author', latexState);
		var bodyParts = A2(
			elm$core$List$map,
			function (x) {
				return A2(
					elm$html$Html$li,
					_List_Nil,
					_List_fromArray(
						[
							elm$html$Html$text(x)
						]));
			},
			A2(
				elm$core$List$filter,
				function (x) {
					return x !== '';
				},
				_List_fromArray(
					[author, email, date, revisionText])));
		var bodyPart = A2(elm$html$Html$ul, _List_Nil, bodyParts);
		return A2(
			elm$html$Html$div,
			_List_Nil,
			_List_fromArray(
				[titlePart, bodyPart]));
	});
var elm$html$Html$iframe = _VirtualDom_node('iframe');
var elm$html$Html$Attributes$height = function (n) {
	return A2(
		_VirtualDom_attribute,
		'height',
		elm$core$String$fromInt(n));
};
var elm$html$Html$Attributes$src = function (url) {
	return A2(
		elm$html$Html$Attributes$stringProperty,
		'src',
		_VirtualDom_noJavaScriptOrHtmlUri(url));
};
var elm$html$Html$Attributes$width = function (n) {
	return A2(
		_VirtualDom_attribute,
		'width',
		elm$core$String$fromInt(n));
};
var author$project$MeenyLatex$Render2$renderEllie = F2(
	function (latexState, args) {
		var title_ = A3(author$project$MeenyLatex$Render$renderArg, 1, latexState, args);
		var title = (title_ === 'xxx') ? 'Link to Ellie' : title_;
		var id = A3(author$project$MeenyLatex$Render$renderArg, 0, latexState, args);
		var url = 'https://ellie-app.com/embed/' + id;
		return A2(
			elm$html$Html$iframe,
			_List_fromArray(
				[
					elm$html$Html$Attributes$src(url),
					elm$html$Html$Attributes$width(500),
					elm$html$Html$Attributes$height(600)
				]),
			_List_fromArray(
				[
					elm$html$Html$text(title)
				]));
	});
var author$project$MeenyLatex$Render2$renderEmail = F2(
	function (latexState, args) {
		return A2(elm$html$Html$span, _List_Nil, _List_Nil);
	});
var author$project$MeenyLatex$LatexState$getCrossReference = F2(
	function (label, latexState) {
		var _n0 = A2(elm$core$Dict$get, label, latexState.as);
		if (!_n0.$) {
			var ref = _n0.a;
			return ref;
		} else {
			return '??';
		}
	});
var elm$html$Html$i = _VirtualDom_node('i');
var author$project$MeenyLatex$Render2$renderEqRef = F2(
	function (latexState, args) {
		var key = A3(author$project$MeenyLatex$Render$renderArg, 0, author$project$MeenyLatex$LatexState$emptyLatexState, args);
		var ref = A2(author$project$MeenyLatex$LatexState$getCrossReference, key, latexState);
		return A2(
			elm$html$Html$i,
			_List_Nil,
			_List_fromArray(
				[
					elm$html$Html$text('('),
					elm$html$Html$text(ref),
					elm$html$Html$text(')')
				]));
	});
var author$project$MeenyLatex$Render2$renderEqnArray = F2(
	function (latexState, body) {
		return author$project$MeenyLatex$Render2$displayMathText(
			A2(author$project$MeenyLatex$Render$render, latexState, body));
	});
var author$project$MeenyLatex$Render2$renderEquationEnvironment = F2(
	function (latexState, body) {
		var s1 = A2(author$project$MeenyLatex$LatexState$getCounter, 's1', latexState);
		var r = A2(author$project$MeenyLatex$Render$render, latexState, body);
		var eqno = A2(author$project$MeenyLatex$LatexState$getCounter, 'eqno', latexState);
		var addendum = (eqno > 0) ? ((s1 > 0) ? ('\\tag{' + (elm$core$String$fromInt(s1) + ('.' + (elm$core$String$fromInt(eqno) + '}')))) : ('\\tag{' + (elm$core$String$fromInt(eqno) + '}'))) : '';
		return author$project$MeenyLatex$Render2$displayMathText('\\begin{equation}' + (r + (addendum + '\\end{equation}')));
	});
var author$project$MeenyLatex$Render2$renderHRef = F2(
	function (latexState, args) {
		var url = A3(author$project$MeenyLatex$Render$renderArg, 0, author$project$MeenyLatex$LatexState$emptyLatexState, args);
		var label = A3(author$project$MeenyLatex$Render$renderArg, 1, author$project$MeenyLatex$LatexState$emptyLatexState, args);
		return A2(
			elm$html$Html$a,
			_List_fromArray(
				[
					elm$html$Html$Attributes$href(url)
				]),
			_List_fromArray(
				[
					elm$html$Html$text(label)
				]));
	});
var author$project$MeenyLatex$Image$ImageAttributes = F3(
	function (width, _float, align) {
		return {a6: align, bg: _float, al: width};
	});
var elm$core$Tuple$pair = F2(
	function (a, b) {
		return _Utils_Tuple2(a, b);
	});
var elm$parser$Parser$Advanced$spaces = elm$parser$Parser$Advanced$chompWhile(
	function (c) {
		return (c === ' ') || ((c === '\n') || (c === '\r'));
	});
var elm$parser$Parser$spaces = elm$parser$Parser$Advanced$spaces;
var author$project$MeenyLatex$KeyValueUtilities$keyValuePair = A2(
	elm$parser$Parser$map,
	function (_n0) {
		var a = _n0.a;
		var b = _n0.b;
		return _Utils_Tuple2(
			elm$core$String$trim(a),
			elm$core$String$trim(b));
	},
	A2(
		elm$parser$Parser$keeper,
		A2(
			elm$parser$Parser$keeper,
			A2(
				elm$parser$Parser$ignorer,
				elm$parser$Parser$succeed(elm$core$Tuple$pair),
				elm$parser$Parser$spaces),
			A2(
				elm$parser$Parser$ignorer,
				A2(
					elm$parser$Parser$ignorer,
					A2(
						elm$parser$Parser$ignorer,
						author$project$MeenyLatex$Parser$word(
							function (c) {
								return c !== ':';
							}),
						elm$parser$Parser$spaces),
					elm$parser$Parser$symbol(':')),
				elm$parser$Parser$spaces)),
		author$project$MeenyLatex$Parser$word(
			function (c) {
				return c !== ',';
			})));
var author$project$MeenyLatex$KeyValueUtilities$keyValuePairs = A2(
	elm$parser$Parser$keeper,
	elm$parser$Parser$succeed(elm$core$Basics$identity),
	author$project$MeenyLatex$ParserHelpers$itemList(author$project$MeenyLatex$KeyValueUtilities$keyValuePair));
var elm$core$Result$withDefault = F2(
	function (def, result) {
		if (!result.$) {
			var a = result.a;
			return a;
		} else {
			return def;
		}
	});
var author$project$MeenyLatex$KeyValueUtilities$getKeyValueList = function (str) {
	return A2(
		elm$core$Result$withDefault,
		_List_Nil,
		A2(elm$parser$Parser$run, author$project$MeenyLatex$KeyValueUtilities$keyValuePairs, str));
};
var author$project$MeenyLatex$KeyValueUtilities$getValue = F2(
	function (key, kvpList) {
		return A2(
			elm$core$Maybe$withDefault,
			'',
			elm$core$List$head(
				A2(
					elm$core$List$map,
					function (x) {
						return x.b;
					},
					A2(
						elm$core$List$filter,
						function (x) {
							return _Utils_eq(x.a, key);
						},
						kvpList))));
	});
var author$project$MeenyLatex$Image$parseImageAttributes = function (attributeString) {
	var kvList = author$project$MeenyLatex$KeyValueUtilities$getKeyValueList(attributeString);
	var widthValue = A2(
		elm$core$Maybe$withDefault,
		200,
		elm$core$String$toInt(
			A2(author$project$MeenyLatex$KeyValueUtilities$getValue, 'width', kvList)));
	var floatValue = A2(author$project$MeenyLatex$KeyValueUtilities$getValue, 'float', kvList);
	var alignValue = A2(author$project$MeenyLatex$KeyValueUtilities$getValue, 'align', kvList);
	return A3(author$project$MeenyLatex$Image$ImageAttributes, widthValue, floatValue, alignValue);
};
var elm$html$Html$caption = _VirtualDom_node('caption');
var elm$html$Html$img = _VirtualDom_node('img');
var elm$html$Html$Attributes$align = elm$html$Html$Attributes$stringProperty('align');
var elm$html$Html$Attributes$alt = elm$html$Html$Attributes$stringProperty('alt');
var author$project$MeenyLatex$Render2$renderImage = F2(
	function (latexState, args) {
		var url = A3(author$project$MeenyLatex$Render$renderArg, 0, latexState, args);
		var label = A3(author$project$MeenyLatex$Render$renderArg, 1, latexState, args);
		var attributeString = A3(author$project$MeenyLatex$Render$renderArg, 2, latexState, args);
		var imageAttrs = author$project$MeenyLatex$Image$parseImageAttributes(attributeString);
		return (imageAttrs.bg === 'left') ? A2(
			elm$html$Html$img,
			_List_fromArray(
				[
					elm$html$Html$Attributes$src(url),
					elm$html$Html$Attributes$alt(label),
					elm$html$Html$Attributes$align('left'),
					elm$html$Html$Attributes$width(imageAttrs.al)
				]),
			_List_fromArray(
				[
					A2(
					elm$html$Html$caption,
					_List_Nil,
					_List_fromArray(
						[
							elm$html$Html$text(label)
						]))
				])) : ((imageAttrs.bg === 'right') ? A2(
			elm$html$Html$img,
			_List_fromArray(
				[
					elm$html$Html$Attributes$src(url),
					elm$html$Html$Attributes$alt(label),
					elm$html$Html$Attributes$align('right'),
					elm$html$Html$Attributes$width(imageAttrs.al)
				]),
			_List_fromArray(
				[
					A2(
					elm$html$Html$caption,
					_List_Nil,
					_List_fromArray(
						[
							elm$html$Html$text(label)
						]))
				])) : ((imageAttrs.a6 === 'center') ? A2(
			elm$html$Html$img,
			_List_fromArray(
				[
					elm$html$Html$Attributes$src(url),
					elm$html$Html$Attributes$alt(label),
					elm$html$Html$Attributes$align('center'),
					elm$html$Html$Attributes$width(imageAttrs.al)
				]),
			_List_fromArray(
				[
					A2(
					elm$html$Html$caption,
					_List_Nil,
					_List_fromArray(
						[
							elm$html$Html$text(label)
						]))
				])) : A2(
			elm$html$Html$img,
			_List_fromArray(
				[
					elm$html$Html$Attributes$src(url),
					elm$html$Html$Attributes$alt(label),
					elm$html$Html$Attributes$align('center'),
					elm$html$Html$Attributes$width(imageAttrs.al)
				]),
			_List_fromArray(
				[
					A2(
					elm$html$Html$caption,
					_List_Nil,
					_List_fromArray(
						[
							elm$html$Html$text(label)
						]))
				]))));
	});
var author$project$MeenyLatex$Render2$renderImageRef = F2(
	function (latexState, args) {
		var url = A3(author$project$MeenyLatex$Render$renderArg, 0, latexState, args);
		var imageUrl = A3(author$project$MeenyLatex$Render$renderArg, 1, latexState, args);
		var attributeString = A3(author$project$MeenyLatex$Render$renderArg, 2, latexState, args);
		var imageAttrs = author$project$MeenyLatex$Image$parseImageAttributes(attributeString);
		var theImage = (imageAttrs.bg === 'left') ? A2(
			elm$html$Html$img,
			_List_fromArray(
				[
					elm$html$Html$Attributes$src(imageUrl),
					elm$html$Html$Attributes$alt('imagref'),
					elm$html$Html$Attributes$align('left'),
					elm$html$Html$Attributes$width(imageAttrs.al)
				]),
			_List_Nil) : ((imageAttrs.bg === 'right') ? A2(
			elm$html$Html$img,
			_List_fromArray(
				[
					elm$html$Html$Attributes$src(imageUrl),
					elm$html$Html$Attributes$alt('imagref'),
					elm$html$Html$Attributes$align('right'),
					elm$html$Html$Attributes$width(imageAttrs.al)
				]),
			_List_Nil) : ((imageAttrs.a6 === 'center') ? A2(
			elm$html$Html$img,
			_List_fromArray(
				[
					elm$html$Html$Attributes$src(imageUrl),
					elm$html$Html$Attributes$alt('imagref'),
					elm$html$Html$Attributes$align('center'),
					elm$html$Html$Attributes$width(imageAttrs.al)
				]),
			_List_Nil) : A2(
			elm$html$Html$img,
			_List_fromArray(
				[
					elm$html$Html$Attributes$src(imageUrl),
					elm$html$Html$Attributes$alt('imagref'),
					elm$html$Html$Attributes$align('center'),
					elm$html$Html$Attributes$width(imageAttrs.al)
				]),
			_List_Nil)));
		return A2(
			elm$html$Html$a,
			_List_fromArray(
				[
					elm$html$Html$Attributes$href(url)
				]),
			_List_fromArray(
				[theImage]));
	});
var author$project$MeenyLatex$Render2$renderIndex = F2(
	function (x, z) {
		return A2(elm$html$Html$span, _List_Nil, _List_Nil);
	});
var author$project$MeenyLatex$Render2$renderLabel = F2(
	function (x, z) {
		return A2(elm$html$Html$span, _List_Nil, _List_Nil);
	});
var elm$html$Html$pre = _VirtualDom_node('pre');
var author$project$MeenyLatex$Render2$renderListing = F2(
	function (latexState, body) {
		var text = A2(author$project$MeenyLatex$Render$render, latexState, body);
		var lines = author$project$MeenyLatex$Utility$addLineNumbers(text);
		return A2(
			elm$html$Html$pre,
			_List_fromArray(
				[
					elm$html$Html$Attributes$class('verbatim')
				]),
			_List_fromArray(
				[
					elm$html$Html$text(lines)
				]));
	});
var author$project$MeenyLatex$Render2$renderMacros = F2(
	function (latexState, body) {
		return author$project$MeenyLatex$Render2$displayMathText(
			A2(author$project$MeenyLatex$Render$render, latexState, body));
	});
var author$project$MeenyLatex$Render2$renderMdash = F2(
	function (latexState, args) {
		return A2(
			elm$html$Html$span,
			_List_Nil,
			_List_fromArray(
				[
					elm$html$Html$text('---')
				]));
	});
var author$project$MeenyLatex$Render2$renderMedSkip = F2(
	function (latexState, args) {
		return A2(
			elm$html$Html$div,
			_List_Nil,
			_List_fromArray(
				[
					A2(elm$html$Html$br, _List_Nil, _List_Nil)
				]));
	});
var author$project$MeenyLatex$Render2$renderNdash = F2(
	function (latexState, args) {
		return A2(
			elm$html$Html$span,
			_List_Nil,
			_List_fromArray(
				[
					elm$html$Html$text('--')
				]));
	});
var author$project$MeenyLatex$Render2$renderNewCommand = F2(
	function (latexState, args) {
		var definition = A3(author$project$MeenyLatex$Render$renderArg, 1, latexState, args);
		var command = A3(author$project$MeenyLatex$Render$renderArg, 0, latexState, args);
		return A2(
			elm$html$Html$span,
			_List_Nil,
			_List_fromArray(
				[
					elm$html$Html$text('\\newcommand{' + (command + ('}{' + (definition + '}'))))
				]));
	});
var author$project$MeenyLatex$Render2$renderRef = F2(
	function (latexState, args) {
		var key = A3(author$project$MeenyLatex$Render$renderArg, 0, latexState, args);
		return A2(
			elm$html$Html$span,
			_List_Nil,
			_List_fromArray(
				[
					elm$html$Html$text(
					A2(author$project$MeenyLatex$LatexState$getCrossReference, key, latexState))
				]));
	});
var author$project$MeenyLatex$Render2$renderRevision = F2(
	function (latexState, args) {
		return A2(elm$html$Html$span, _List_Nil, _List_Nil);
	});
var elm$html$Html$p = _VirtualDom_node('p');
var elm$html$Html$Attributes$id = elm$html$Html$Attributes$stringProperty('id');
var author$project$MeenyLatex$Render2$renderBibItem = F4(
	function (latexState, optArgs, args, body) {
		var label = (elm$core$List$length(optArgs) === 1) ? A3(author$project$MeenyLatex$Render$renderArg, 0, latexState, optArgs) : A3(author$project$MeenyLatex$Render$renderArg, 0, latexState, args);
		var id = '\"bib:' + (label + '\"');
		return A2(
			elm$html$Html$p,
			_List_fromArray(
				[
					elm$html$Html$Attributes$id(id)
				]),
			_List_fromArray(
				[
					elm$html$Html$text(
					'[' + (label + ('] ' + A2(author$project$MeenyLatex$Render$render, latexState, body))))
				]));
	});
var author$project$MeenyLatex$Render2$renderSMacroDict = elm$core$Dict$fromList(
	_List_fromArray(
		[
			_Utils_Tuple2(
			'bibitem',
			F4(
				function (latexState, optArgs, args, body) {
					return A4(author$project$MeenyLatex$Render2$renderBibItem, latexState, optArgs, args, body);
				}))
		]));
var elm$regex$Regex$Match = F4(
	function (match, index, number, submatches) {
		return {bi: index, bo: match, bp: number, bw: submatches};
	});
var elm$regex$Regex$fromStringWith = _Regex_fromStringWith;
var elm$regex$Regex$fromString = function (string) {
	return A2(
		elm$regex$Regex$fromStringWith,
		{ap: false, aJ: false},
		string);
};
var elm$regex$Regex$replace = _Regex_replaceAtMost(_Regex_infinity);
var author$project$MeenyLatex$Render2$userReplace = F3(
	function (userRegex, replacer, string) {
		var _n0 = elm$regex$Regex$fromString(userRegex);
		if (_n0.$ === 1) {
			return string;
		} else {
			var regex = _n0.a;
			return A3(elm$regex$Regex$replace, regex, replacer, string);
		}
	});
var elm$core$String$toLower = _String_toLower;
var author$project$MeenyLatex$Render2$compress = F2(
	function (replaceBlank, str) {
		return A3(
			author$project$MeenyLatex$Render2$userReplace,
			'[,;.!?&_]',
			function (_n0) {
				return '';
			},
			A3(
				elm$core$String$replace,
				' ',
				replaceBlank,
				elm$core$String$toLower(str)));
	});
var author$project$MeenyLatex$Render2$makeId = F2(
	function (prefix, name) {
		return A2(
			elm$core$String$join,
			':',
			_List_fromArray(
				[
					prefix,
					A2(author$project$MeenyLatex$Render2$compress, ':', name)
				]));
	});
var author$project$MeenyLatex$Render2$idPhrase = F2(
	function (prefix, name) {
		var compressedName = A3(
			elm$core$String$replace,
			' ',
			':',
			elm$core$String$toLower(name));
		return A2(
			elm$core$String$join,
			'',
			_List_fromArray(
				[
					'id=\"_',
					A2(author$project$MeenyLatex$Render2$makeId, prefix, name),
					'\"'
				]));
	});
var elm$html$Html$h2 = _VirtualDom_node('h2');
var author$project$MeenyLatex$Render2$renderSection = F2(
	function (latexState, args) {
		var sectionName = A3(author$project$MeenyLatex$Render$renderArg, 0, latexState, args);
		var s1 = A2(author$project$MeenyLatex$LatexState$getCounter, 's1', latexState);
		var ref = A2(author$project$MeenyLatex$Render2$idPhrase, 'section', sectionName);
		var label = (s1 > 0) ? (elm$core$String$fromInt(s1) + ' ') : '';
		return A2(
			elm$html$Html$h2,
			_List_fromArray(
				[
					elm$html$Html$Attributes$id(ref)
				]),
			_List_fromArray(
				[
					elm$html$Html$text(
					_Utils_ap(label, sectionName))
				]));
	});
var author$project$MeenyLatex$Render2$renderSectionStar = F2(
	function (latexState, args) {
		var sectionName = A3(author$project$MeenyLatex$Render$renderArg, 0, latexState, args);
		var ref = A2(author$project$MeenyLatex$Render2$idPhrase, 'section', sectionName);
		return A2(
			elm$html$Html$h2,
			_List_fromArray(
				[
					elm$html$Html$Attributes$id(ref)
				]),
			_List_fromArray(
				[
					elm$html$Html$text(sectionName)
				]));
	});
var author$project$MeenyLatex$Render2$renderSetCounter = F2(
	function (latexState, list) {
		return A2(elm$html$Html$span, _List_Nil, _List_Nil);
	});
var author$project$MeenyLatex$Render2$renderSmallSkip = F2(
	function (latexState, args) {
		return A2(
			elm$html$Html$div,
			_List_Nil,
			_List_fromArray(
				[
					A2(elm$html$Html$br, _List_Nil, _List_Nil)
				]));
	});
var elm$html$Html$h4 = _VirtualDom_node('h4');
var author$project$MeenyLatex$Render2$renderSubSubsection = F2(
	function (latexState, args) {
		var sectionName = A3(author$project$MeenyLatex$Render$renderArg, 0, latexState, args);
		var s3 = A2(author$project$MeenyLatex$LatexState$getCounter, 's3', latexState);
		var s2 = A2(author$project$MeenyLatex$LatexState$getCounter, 's2', latexState);
		var s1 = A2(author$project$MeenyLatex$LatexState$getCounter, 's1', latexState);
		var ref = A2(author$project$MeenyLatex$Render2$idPhrase, 'subsubsection', sectionName);
		var label = (s1 > 0) ? (elm$core$String$fromInt(s1) + ('.' + (elm$core$String$fromInt(s2) + ('.' + (elm$core$String$fromInt(s3) + ' '))))) : '';
		return A2(
			elm$html$Html$h4,
			_List_fromArray(
				[
					elm$html$Html$Attributes$id(ref)
				]),
			_List_fromArray(
				[
					elm$html$Html$text(
					_Utils_ap(label, sectionName))
				]));
	});
var author$project$MeenyLatex$Render2$renderSubSubsectionStar = F2(
	function (latexState, args) {
		var sectionName = A3(author$project$MeenyLatex$Render$renderArg, 0, latexState, args);
		var ref = A2(author$project$MeenyLatex$Render2$idPhrase, 'subsubsection', sectionName);
		return A2(
			elm$html$Html$h4,
			_List_fromArray(
				[
					elm$html$Html$Attributes$id(ref)
				]),
			_List_fromArray(
				[
					elm$html$Html$text(sectionName)
				]));
	});
var author$project$MeenyLatex$Render2$renderSubheading = F2(
	function (latexState, args) {
		var title = A3(author$project$MeenyLatex$Render$renderArg, 0, latexState, args);
		return A2(
			elm$html$Html$div,
			_List_fromArray(
				[
					elm$html$Html$Attributes$class('subheading')
				]),
			_List_fromArray(
				[
					elm$html$Html$text(title)
				]));
	});
var elm$html$Html$h3 = _VirtualDom_node('h3');
var author$project$MeenyLatex$Render2$renderSubsection = F2(
	function (latexState, args) {
		var sectionName = A3(author$project$MeenyLatex$Render$renderArg, 0, latexState, args);
		var s2 = A2(author$project$MeenyLatex$LatexState$getCounter, 's2', latexState);
		var s1 = A2(author$project$MeenyLatex$LatexState$getCounter, 's1', latexState);
		var ref = A2(author$project$MeenyLatex$Render2$idPhrase, 'subsection', sectionName);
		var label = (s1 > 0) ? (elm$core$String$fromInt(s1) + ('.' + (elm$core$String$fromInt(s2) + ' '))) : '';
		return A2(
			elm$html$Html$h3,
			_List_fromArray(
				[
					elm$html$Html$Attributes$id(ref)
				]),
			_List_fromArray(
				[
					elm$html$Html$text(
					_Utils_ap(label, sectionName))
				]));
	});
var author$project$MeenyLatex$Render2$renderSubsectionStar = F2(
	function (latexState, args) {
		var sectionName = A3(author$project$MeenyLatex$Render$renderArg, 0, latexState, args);
		var ref = A2(author$project$MeenyLatex$Render2$idPhrase, 'subsection', sectionName);
		return A2(
			elm$html$Html$h3,
			_List_fromArray(
				[
					elm$html$Html$Attributes$id(ref)
				]),
			_List_fromArray(
				[
					elm$html$Html$text(sectionName)
				]));
	});
var author$project$MeenyLatex$Render2$sectionPrefix = function (level) {
	switch (level) {
		case 1:
			return 'section';
		case 2:
			return 'subsection';
		case 3:
			return 'subsubsection';
		default:
			return 'asection';
	}
};
var author$project$MeenyLatex$Render2$makeTocItem = function (tocItem) {
	var ti = tocItem.b;
	var id = A2(
		author$project$MeenyLatex$Render2$makeId,
		author$project$MeenyLatex$Render2$sectionPrefix(ti.bn),
		ti.u);
	var i = tocItem.a;
	var href = 'href=\"#_' + (id + '\"');
	var classProperty = 'class=\"sectionLevel' + (elm$core$String$fromInt(ti.bn) + '\"');
	return A2(
		elm$html$Html$li,
		_List_Nil,
		_List_fromArray(
			[
				A2(
				elm$html$Html$a,
				_List_fromArray(
					[
						elm$html$Html$Attributes$href(href)
					]),
				_List_fromArray(
					[
						elm$html$Html$text(ti.u)
					]))
			]));
};
var elm$core$List$indexedMap = F2(
	function (f, xs) {
		return A3(
			elm$core$List$map2,
			f,
			A2(
				elm$core$List$range,
				0,
				elm$core$List$length(xs) - 1),
			xs);
	});
var author$project$MeenyLatex$Render2$makeTableOfContents = function (latexState) {
	return A3(
		elm$core$List$foldl,
		F2(
			function (tocItem, acc) {
				return _Utils_ap(
					acc,
					_List_fromArray(
						[
							author$project$MeenyLatex$Render2$makeTocItem(tocItem)
						]));
			}),
		_List_Nil,
		A2(elm$core$List$indexedMap, elm$core$Tuple$pair, latexState.a1));
};
var author$project$MeenyLatex$Render2$renderTableOfContents = F2(
	function (latexState, list) {
		var innerPart = author$project$MeenyLatex$Render2$makeTableOfContents(latexState);
		return A2(
			elm$html$Html$div,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					elm$html$Html$h3,
					_List_Nil,
					_List_fromArray(
						[
							elm$html$Html$text('Table of Contents')
						])),
					A2(elm$html$Html$ul, _List_Nil, innerPart)
				]));
	});
var elm$html$Html$td = _VirtualDom_node('td');
var author$project$MeenyLatex$Render2$renderCell = function (cell) {
	switch (cell.$) {
		case 0:
			var s = cell.a;
			return A2(
				elm$html$Html$td,
				_List_Nil,
				_List_fromArray(
					[
						elm$html$Html$text(s)
					]));
		case 3:
			var s = cell.a;
			return A2(
				elm$html$Html$td,
				_List_Nil,
				_List_fromArray(
					[
						author$project$MeenyLatex$Render2$inlineMathText(s)
					]));
		default:
			return A2(elm$html$Html$td, _List_Nil, _List_Nil);
	}
};
var elm$html$Html$tr = _VirtualDom_node('tr');
var author$project$MeenyLatex$Render2$renderRow = function (row) {
	if (row.$ === 8) {
		var row_ = row.a;
		return A2(
			elm$html$Html$tr,
			_List_Nil,
			A2(elm$core$List$map, author$project$MeenyLatex$Render2$renderCell, row_));
	} else {
		return A2(elm$html$Html$tr, _List_Nil, _List_Nil);
	}
};
var elm$html$Html$tbody = _VirtualDom_node('tbody');
var author$project$MeenyLatex$Render2$renderTableBody = function (body) {
	if (body.$ === 8) {
		var body_ = body.a;
		return A2(
			elm$html$Html$tbody,
			_List_Nil,
			A2(elm$core$List$map, author$project$MeenyLatex$Render2$renderRow, body_));
	} else {
		return A2(elm$html$Html$tbody, _List_Nil, _List_Nil);
	}
};
var elm$html$Html$table = _VirtualDom_node('table');
var author$project$MeenyLatex$Render2$renderTabular = F2(
	function (latexState, body) {
		return A2(
			elm$html$Html$table,
			_List_Nil,
			_List_fromArray(
				[
					author$project$MeenyLatex$Render2$renderTableBody(body)
				]));
	});
var author$project$MeenyLatex$Render2$renderTerm = F2(
	function (latexState, args) {
		var arg = A3(author$project$MeenyLatex$Render$renderArg, 0, latexState, args);
		return A2(
			elm$html$Html$i,
			_List_Nil,
			_List_fromArray(
				[
					elm$html$Html$text(arg)
				]));
	});
var author$project$MeenyLatex$Render2$renderTitle = F2(
	function (latexState, args) {
		return A2(elm$html$Html$span, _List_Nil, _List_Nil);
	});
var author$project$MeenyLatex$Render2$renderUseForWeb = F2(
	function (latexState, body) {
		return author$project$MeenyLatex$Render2$displayMathText(
			A2(author$project$MeenyLatex$Render$render, latexState, body));
	});
var author$project$MeenyLatex$Render2$renderVerbatim = F2(
	function (latexState, body) {
		var body2 = A3(
			elm$core$String$replace,
			'<',
			'&lt;',
			A3(
				elm$core$String$replace,
				'>',
				'&gt;',
				A2(author$project$MeenyLatex$Render$render, latexState, body)));
		return A2(
			elm$html$Html$pre,
			_List_fromArray(
				[
					elm$html$Html$Attributes$class('verbatim')
				]),
			_List_fromArray(
				[
					elm$html$Html$text(body2)
				]));
	});
var author$project$MeenyLatex$Render2$renderVerse = F2(
	function (latexState, body) {
		return A2(
			elm$html$Html$div,
			_List_fromArray(
				[
					elm$html$Html$Attributes$class('verse')
				]),
			_List_fromArray(
				[
					elm$html$Html$text(
					elm$core$String$trim(
						A2(author$project$MeenyLatex$Render$render, latexState, body)))
				]));
	});
var author$project$MeenyLatex$Configuration$client = 'http://www.knode.io';
var author$project$MeenyLatex$Render2$renderXLink = F2(
	function (latexState, args) {
		var label = A3(author$project$MeenyLatex$Render$renderArg, 1, latexState, args);
		var id = A3(author$project$MeenyLatex$Render$renderArg, 0, latexState, args);
		var ref = author$project$MeenyLatex$Configuration$client + ('##document/' + id);
		return A2(
			elm$html$Html$a,
			_List_fromArray(
				[
					elm$html$Html$Attributes$href(ref)
				]),
			_List_fromArray(
				[
					elm$html$Html$text(label)
				]));
	});
var author$project$MeenyLatex$Render2$renderXLinkPublic = F2(
	function (latexState, args) {
		var label = A3(author$project$MeenyLatex$Render$renderArg, 1, latexState, args);
		var id = A3(author$project$MeenyLatex$Render$renderArg, 0, latexState, args);
		var ref = author$project$MeenyLatex$Configuration$client + ('##public/' + id);
		return A2(
			elm$html$Html$a,
			_List_fromArray(
				[
					elm$html$Html$Attributes$href(ref)
				]),
			_List_fromArray(
				[
					elm$html$Html$text(label)
				]));
	});
var elm$html$Html$code = _VirtualDom_node('code');
var elm$html$Html$ol = _VirtualDom_node('ol');
var elm$html$Html$strong = _VirtualDom_node('strong');
var elm$virtual_dom$VirtualDom$style = _VirtualDom_style;
var elm$html$Html$Attributes$style = elm$virtual_dom$VirtualDom$style;
var author$project$MeenyLatex$Render2$environmentRenderer = function (name) {
	var _n3 = A2(
		elm$core$Dict$get,
		name,
		author$project$MeenyLatex$Render2$cyclic$renderEnvironmentDict());
	if (!_n3.$) {
		var f = _n3.a;
		return f;
	} else {
		return author$project$MeenyLatex$Render2$renderDefaultEnvironment(name);
	}
};
var author$project$MeenyLatex$Render2$macroRenderer = F4(
	function (name, latexState, optArgs, args) {
		var _n2 = A2(
			elm$core$Dict$get,
			name,
			author$project$MeenyLatex$Render2$cyclic$renderMacroDict());
		if (!_n2.$) {
			var f = _n2.a;
			return A3(f, latexState, optArgs, args);
		} else {
			return A4(author$project$MeenyLatex$Render2$reproduceMacro, name, latexState, optArgs, args);
		}
	});
var author$project$MeenyLatex$Render2$render = F2(
	function (latexState, latexExpression) {
		switch (latexExpression.$) {
			case 1:
				var str = latexExpression.a;
				return A2(
					elm$html$Html$p,
					_List_Nil,
					_List_fromArray(
						[
							elm$html$Html$text('((' + (str + '))'))
						]));
			case 6:
				var name = latexExpression.a;
				var optArgs = latexExpression.b;
				var args = latexExpression.c;
				return A4(author$project$MeenyLatex$Render2$renderMacro, latexState, name, optArgs, args);
			case 5:
				var name = latexExpression.a;
				var optArgs = latexExpression.b;
				var args = latexExpression.c;
				var le = latexExpression.d;
				return A5(author$project$MeenyLatex$Render2$renderSMacro, latexState, name, optArgs, args, le);
			case 2:
				var level = latexExpression.a;
				var latexExpr = latexExpression.b;
				return A3(author$project$MeenyLatex$Render2$renderItem, latexState, level, latexExpr);
			case 3:
				var str = latexExpression.a;
				return A2(
					elm$html$Html$span,
					_List_Nil,
					_List_fromArray(
						[
							author$project$MeenyLatex$Render2$oneSpace,
							author$project$MeenyLatex$Render2$inlineMathText(str)
						]));
			case 4:
				var str = latexExpression.a;
				return author$project$MeenyLatex$Render2$displayMathText(str);
			case 7:
				var name = latexExpression.a;
				var args = latexExpression.b;
				var body = latexExpression.c;
				return A4(author$project$MeenyLatex$Render2$renderEnvironment, latexState, name, args, body);
			case 8:
				var latexList = latexExpression.a;
				return A2(author$project$MeenyLatex$Render2$renderLatexList, latexState, latexList);
			case 0:
				var str = latexExpression.a;
				return A2(
					elm$html$Html$span,
					_List_Nil,
					_List_fromArray(
						[
							elm$html$Html$text(str)
						]));
			default:
				var error = latexExpression.a;
				return A2(
					elm$html$Html$p,
					_List_Nil,
					_List_fromArray(
						[
							elm$html$Html$text('((ERROR))')
						]));
		}
	});
var author$project$MeenyLatex$Render2$renderArg = F3(
	function (k, latexState, args) {
		return A2(
			author$project$MeenyLatex$Render2$render,
			latexState,
			A2(author$project$MeenyLatex$Render2$getElement, k, args));
	});
var author$project$MeenyLatex$Render2$renderArgList = F2(
	function (latexState, args) {
		return A2(
			elm$core$List$map,
			author$project$MeenyLatex$Render2$render(latexState),
			args);
	});
var author$project$MeenyLatex$Render2$renderBozo = F2(
	function (latexState, args) {
		return A2(
			elm$html$Html$span,
			_List_Nil,
			_List_fromArray(
				[
					elm$html$Html$text('\\bozo'),
					author$project$MeenyLatex$Render2$enclose(
					A3(author$project$MeenyLatex$Render2$renderArg, 0, latexState, args)),
					author$project$MeenyLatex$Render2$enclose(
					A3(author$project$MeenyLatex$Render2$renderArg, 1, latexState, args))
				]));
	});
var author$project$MeenyLatex$Render2$renderCenterEnvironment = F2(
	function (latexState, body) {
		var r = A2(author$project$MeenyLatex$Render2$render, latexState, body);
		return A2(
			elm$html$Html$div,
			_List_fromArray(
				[
					elm$html$Html$Attributes$class('center')
				]),
			_List_fromArray(
				[r]));
	});
var author$project$MeenyLatex$Render2$renderCode = F2(
	function (latexState, args) {
		var arg = A3(author$project$MeenyLatex$Render2$renderArg, 0, latexState, args);
		return A2(
			elm$html$Html$code,
			_List_Nil,
			_List_fromArray(
				[author$project$MeenyLatex$Render2$oneSpace, arg]));
	});
var author$project$MeenyLatex$Render2$renderDefaultEnvironment = F4(
	function (name, latexState, args, body) {
		return A2(
			elm$core$List$member,
			name,
			_List_fromArray(
				['theorem', 'proposition', 'corollary', 'lemma', 'definition'])) ? A4(author$project$MeenyLatex$Render2$renderTheoremLikeEnvironment, latexState, name, args, body) : A4(author$project$MeenyLatex$Render2$renderDefaultEnvironment2, latexState, name, args, body);
	});
var author$project$MeenyLatex$Render2$renderDefaultEnvironment2 = F4(
	function (latexState, name, args, body) {
		var r = A2(author$project$MeenyLatex$Render2$render, latexState, body);
		return A2(
			elm$html$Html$div,
			_List_fromArray(
				[
					elm$html$Html$Attributes$class('environment')
				]),
			_List_fromArray(
				[
					A2(
					elm$html$Html$strong,
					_List_Nil,
					_List_fromArray(
						[
							elm$html$Html$text(name)
						])),
					A2(
					elm$html$Html$div,
					_List_Nil,
					_List_fromArray(
						[r]))
				]));
	});
var author$project$MeenyLatex$Render2$renderEnumerate = F2(
	function (latexState, body) {
		return A2(
			elm$html$Html$ol,
			_List_Nil,
			_List_fromArray(
				[
					A2(author$project$MeenyLatex$Render2$render, latexState, body)
				]));
	});
var author$project$MeenyLatex$Render2$renderEnvironment = F4(
	function (latexState, name, args, body) {
		return A4(author$project$MeenyLatex$Render2$environmentRenderer, name, latexState, args, body);
	});
var author$project$MeenyLatex$Render2$renderIndentEnvironment = F2(
	function (latexState, body) {
		return A2(
			elm$html$Html$div,
			_List_fromArray(
				[
					A2(elm$html$Html$Attributes$style, 'margin-left', '2em')
				]),
			_List_fromArray(
				[
					A2(author$project$MeenyLatex$Render2$render, latexState, body)
				]));
	});
var author$project$MeenyLatex$Render2$renderItalic = F2(
	function (latexState, args) {
		return A2(
			elm$html$Html$i,
			_List_Nil,
			_List_fromArray(
				[
					elm$html$Html$text(' '),
					A3(author$project$MeenyLatex$Render2$renderArg, 0, latexState, args)
				]));
	});
var author$project$MeenyLatex$Render2$renderItem = F3(
	function (latexState, level, latexExpression) {
		return A2(
			elm$html$Html$li,
			_List_fromArray(
				[
					elm$html$Html$Attributes$class(
					author$project$MeenyLatex$Render2$itemClass(level))
				]),
			_List_fromArray(
				[
					A2(author$project$MeenyLatex$Render2$render, latexState, latexExpression)
				]));
	});
var author$project$MeenyLatex$Render2$renderItemize = F2(
	function (latexState, body) {
		return A2(
			elm$html$Html$ul,
			_List_Nil,
			_List_fromArray(
				[
					A2(author$project$MeenyLatex$Render2$render, latexState, body)
				]));
	});
var author$project$MeenyLatex$Render2$renderLatexList = F2(
	function (latexState, latexList) {
		return function (list) {
			return A2(
				elm$html$Html$span,
				_List_fromArray(
					[
						A2(elm$html$Html$Attributes$style, 'margin-bottom', '10px')
					]),
				A2(
					elm$core$List$map,
					author$project$MeenyLatex$Render2$render(latexState),
					list));
		}(
			author$project$MeenyLatex$Render2$processLatexListWithSpacing(
				author$project$MeenyLatex$Render2$putSpaces(latexList)));
	});
var author$project$MeenyLatex$Render2$renderMacro = F4(
	function (latexState, name, optArgs, args) {
		return A3(
			author$project$MeenyLatex$Render2$macroRenderer(name),
			latexState,
			optArgs,
			args);
	});
var author$project$MeenyLatex$Render2$renderQuotation = F2(
	function (latexState, body) {
		return A2(
			elm$html$Html$div,
			_List_fromArray(
				[
					elm$html$Html$Attributes$class('quotation')
				]),
			_List_fromArray(
				[
					A2(author$project$MeenyLatex$Render2$render, latexState, body)
				]));
	});
var author$project$MeenyLatex$Render2$renderSMacro = F5(
	function (latexState, name, optArgs, args, le) {
		var _n0 = A2(elm$core$Dict$get, name, author$project$MeenyLatex$Render2$renderSMacroDict);
		if (!_n0.$) {
			var f = _n0.a;
			return A4(f, latexState, optArgs, args, le);
		} else {
			return A5(author$project$MeenyLatex$Render2$reproduceSMacro, name, latexState, optArgs, args, le);
		}
	});
var author$project$MeenyLatex$Render2$renderStrong = F2(
	function (latexState, args) {
		return A2(
			elm$html$Html$strong,
			_List_Nil,
			_List_fromArray(
				[
					author$project$MeenyLatex$Render2$oneSpace,
					A3(author$project$MeenyLatex$Render2$renderArg, 0, latexState, args)
				]));
	});
var author$project$MeenyLatex$Render2$renderTheBibliography = F2(
	function (latexState, body) {
		return A2(
			elm$html$Html$div,
			_List_Nil,
			_List_fromArray(
				[
					A2(author$project$MeenyLatex$Render2$render, latexState, body)
				]));
	});
var author$project$MeenyLatex$Render2$renderTheoremLikeEnvironment = F4(
	function (latexState, name, args, body) {
		var tno = A2(author$project$MeenyLatex$LatexState$getCounter, 'tno', latexState);
		var s1 = A2(author$project$MeenyLatex$LatexState$getCounter, 's1', latexState);
		var tnoString = (s1 > 0) ? (' ' + (elm$core$String$fromInt(s1) + ('.' + elm$core$String$fromInt(tno)))) : (' ' + elm$core$String$fromInt(tno));
		var r = A2(author$project$MeenyLatex$Render2$render, latexState, body);
		var eqno = A2(author$project$MeenyLatex$LatexState$getCounter, 'eqno', latexState);
		return A2(
			elm$html$Html$div,
			_List_fromArray(
				[
					elm$html$Html$Attributes$class('environment')
				]),
			_List_fromArray(
				[
					A2(
					elm$html$Html$strong,
					_List_Nil,
					_List_fromArray(
						[
							elm$html$Html$text(
							_Utils_ap(name, tnoString))
						])),
					A2(
					elm$html$Html$div,
					_List_fromArray(
						[
							elm$html$Html$Attributes$class('italic')
						]),
					_List_fromArray(
						[r]))
				]));
	});
var author$project$MeenyLatex$Render2$reproduceMacro = F4(
	function (name, latexState, optArgs, args) {
		var renderedArgs = A2(
			elm$core$List$map,
			author$project$MeenyLatex$Render2$enclose,
			A2(author$project$MeenyLatex$Render2$renderArgList, latexState, args));
		return A2(
			elm$html$Html$span,
			_List_Nil,
			_Utils_ap(
				_List_fromArray(
					[
						elm$html$Html$text('\\' + name)
					]),
				renderedArgs));
	});
var author$project$MeenyLatex$Render2$reproduceSMacro = F5(
	function (name, latexState, optArgs, args, le) {
		var renderedOptArgs = A2(
			elm$core$List$map,
			author$project$MeenyLatex$Render2$enclose,
			A2(author$project$MeenyLatex$Render2$renderArgList, latexState, optArgs));
		var renderedLe = author$project$MeenyLatex$Render2$enclose(
			A2(author$project$MeenyLatex$Render2$render, latexState, le));
		var renderedArgs = A2(
			elm$core$List$map,
			author$project$MeenyLatex$Render2$enclose,
			A2(author$project$MeenyLatex$Render2$renderArgList, latexState, args));
		return A2(
			elm$html$Html$span,
			_List_Nil,
			_Utils_ap(
				_List_fromArray(
					[
						elm$html$Html$text('\\' + name)
					]),
				_Utils_ap(
					renderedOptArgs,
					_Utils_ap(
						renderedArgs,
						_List_fromArray(
							[renderedLe])))));
	});
function author$project$MeenyLatex$Render2$cyclic$renderMacroDict() {
	return elm$core$Dict$fromList(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'bigskip',
				F3(
					function (x, y, z) {
						return A2(author$project$MeenyLatex$Render2$renderBigSkip, x, z);
					})),
				_Utils_Tuple2(
				'medskip',
				F3(
					function (x, y, z) {
						return A2(author$project$MeenyLatex$Render2$renderMedSkip, x, z);
					})),
				_Utils_Tuple2(
				'smallskip',
				F3(
					function (x, y, z) {
						return A2(author$project$MeenyLatex$Render2$renderSmallSkip, x, z);
					})),
				_Utils_Tuple2(
				'bozo',
				author$project$MeenyLatex$Render2$boost(author$project$MeenyLatex$Render2$renderBozo)),
				_Utils_Tuple2(
				'cite',
				F3(
					function (x, y, z) {
						return A2(author$project$MeenyLatex$Render2$renderCite, x, z);
					})),
				_Utils_Tuple2(
				'code',
				F3(
					function (x, y, z) {
						return A2(author$project$MeenyLatex$Render2$renderCode, x, z);
					})),
				_Utils_Tuple2(
				'ellie',
				F3(
					function (x, y, z) {
						return A2(author$project$MeenyLatex$Render2$renderEllie, x, z);
					})),
				_Utils_Tuple2(
				'emph',
				F3(
					function (x, y, z) {
						return A2(author$project$MeenyLatex$Render2$renderItalic, x, z);
					})),
				_Utils_Tuple2(
				'eqref',
				F3(
					function (x, y, z) {
						return A2(author$project$MeenyLatex$Render2$renderEqRef, x, z);
					})),
				_Utils_Tuple2(
				'href',
				F3(
					function (x, y, z) {
						return A2(author$project$MeenyLatex$Render2$renderHRef, x, z);
					})),
				_Utils_Tuple2(
				'image',
				F3(
					function (x, y, z) {
						return A2(author$project$MeenyLatex$Render2$renderImage, x, z);
					})),
				_Utils_Tuple2(
				'imageref',
				F3(
					function (x, y, z) {
						return A2(author$project$MeenyLatex$Render2$renderImageRef, x, z);
					})),
				_Utils_Tuple2(
				'index',
				F3(
					function (x, y, z) {
						return A2(author$project$MeenyLatex$Render2$renderIndex, x, z);
					})),
				_Utils_Tuple2(
				'italic',
				F3(
					function (x, y, z) {
						return A2(author$project$MeenyLatex$Render2$renderItalic, x, z);
					})),
				_Utils_Tuple2(
				'label',
				F3(
					function (x, y, z) {
						return A2(author$project$MeenyLatex$Render2$renderLabel, x, z);
					})),
				_Utils_Tuple2(
				'maketitle',
				F3(
					function (x, y, z) {
						return A2(author$project$MeenyLatex$Render2$renderTitle, x, z);
					})),
				_Utils_Tuple2(
				'mdash',
				F3(
					function (x, y, z) {
						return A2(author$project$MeenyLatex$Render2$renderMdash, x, z);
					})),
				_Utils_Tuple2(
				'ndash',
				F3(
					function (x, y, z) {
						return A2(author$project$MeenyLatex$Render2$renderNdash, x, z);
					})),
				_Utils_Tuple2(
				'newcommand',
				F3(
					function (x, y, z) {
						return A2(author$project$MeenyLatex$Render2$renderNewCommand, x, z);
					})),
				_Utils_Tuple2(
				'ref',
				F3(
					function (x, y, z) {
						return A2(author$project$MeenyLatex$Render2$renderRef, x, z);
					})),
				_Utils_Tuple2(
				'medskip',
				F3(
					function (x, y, z) {
						return A2(author$project$MeenyLatex$Render2$renderMedSkip, x, z);
					})),
				_Utils_Tuple2(
				'smallskip',
				F3(
					function (x, y, z) {
						return A2(author$project$MeenyLatex$Render2$renderSmallSkip, x, z);
					})),
				_Utils_Tuple2(
				'section',
				F3(
					function (x, y, z) {
						return A2(author$project$MeenyLatex$Render2$renderSection, x, z);
					})),
				_Utils_Tuple2(
				'section*',
				F3(
					function (x, y, z) {
						return A2(author$project$MeenyLatex$Render2$renderSectionStar, x, z);
					})),
				_Utils_Tuple2(
				'subsection',
				F3(
					function (x, y, z) {
						return A2(author$project$MeenyLatex$Render2$renderSubsection, x, z);
					})),
				_Utils_Tuple2(
				'subsection*',
				F3(
					function (x, y, z) {
						return A2(author$project$MeenyLatex$Render2$renderSubsectionStar, x, z);
					})),
				_Utils_Tuple2(
				'subsubsection',
				F3(
					function (x, y, z) {
						return A2(author$project$MeenyLatex$Render2$renderSubSubsection, x, z);
					})),
				_Utils_Tuple2(
				'subsubsection*',
				F3(
					function (x, y, z) {
						return A2(author$project$MeenyLatex$Render2$renderSubSubsectionStar, x, z);
					})),
				_Utils_Tuple2(
				'setcounter',
				F3(
					function (x, y, z) {
						return A2(author$project$MeenyLatex$Render2$renderSetCounter, x, z);
					})),
				_Utils_Tuple2(
				'subheading',
				F3(
					function (x, y, z) {
						return A2(author$project$MeenyLatex$Render2$renderSubheading, x, z);
					})),
				_Utils_Tuple2(
				'tableofcontents',
				F3(
					function (x, y, z) {
						return A2(author$project$MeenyLatex$Render2$renderTableOfContents, x, z);
					})),
				_Utils_Tuple2(
				'term',
				F3(
					function (x, y, z) {
						return A2(author$project$MeenyLatex$Render2$renderTerm, x, z);
					})),
				_Utils_Tuple2(
				'xlink',
				F3(
					function (x, y, z) {
						return A2(author$project$MeenyLatex$Render2$renderXLink, x, z);
					})),
				_Utils_Tuple2(
				'xlinkPublic',
				F3(
					function (x, y, z) {
						return A2(author$project$MeenyLatex$Render2$renderXLinkPublic, x, z);
					})),
				_Utils_Tuple2(
				'documentTitle',
				F3(
					function (x, y, z) {
						return A2(author$project$MeenyLatex$Render2$renderDocumentTitle, x, z);
					})),
				_Utils_Tuple2(
				'title',
				F3(
					function (x, y, z) {
						return A2(author$project$MeenyLatex$Render2$renderTitle, x, z);
					})),
				_Utils_Tuple2(
				'author',
				F3(
					function (x, y, z) {
						return A2(author$project$MeenyLatex$Render2$renderAuthor, x, z);
					})),
				_Utils_Tuple2(
				'date',
				F3(
					function (x, y, z) {
						return A2(author$project$MeenyLatex$Render2$renderDate, x, z);
					})),
				_Utils_Tuple2(
				'revision',
				F3(
					function (x, y, z) {
						return A2(author$project$MeenyLatex$Render2$renderRevision, x, z);
					})),
				_Utils_Tuple2(
				'email',
				F3(
					function (x, y, z) {
						return A2(author$project$MeenyLatex$Render2$renderEmail, x, z);
					})),
				_Utils_Tuple2(
				'strong',
				F3(
					function (x, y, z) {
						return A2(author$project$MeenyLatex$Render2$renderStrong, x, z);
					}))
			]));
}
function author$project$MeenyLatex$Render2$cyclic$renderEnvironmentDict() {
	return elm$core$Dict$fromList(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'align',
				F3(
					function (x, a, y) {
						return A2(author$project$MeenyLatex$Render2$renderAlignEnvironment, x, y);
					})),
				_Utils_Tuple2(
				'center',
				F3(
					function (x, a, y) {
						return A2(author$project$MeenyLatex$Render2$renderCenterEnvironment, x, y);
					})),
				_Utils_Tuple2(
				'comment',
				F3(
					function (x, a, y) {
						return A2(author$project$MeenyLatex$Render2$renderCommentEnvironment, x, y);
					})),
				_Utils_Tuple2(
				'enumerate',
				F3(
					function (x, a, y) {
						return A2(author$project$MeenyLatex$Render2$renderEnumerate, x, y);
					})),
				_Utils_Tuple2(
				'eqnarray',
				F3(
					function (x, a, y) {
						return A2(author$project$MeenyLatex$Render2$renderEqnArray, x, y);
					})),
				_Utils_Tuple2(
				'equation',
				F3(
					function (x, a, y) {
						return A2(author$project$MeenyLatex$Render2$renderEquationEnvironment, x, y);
					})),
				_Utils_Tuple2(
				'indent',
				F3(
					function (x, a, y) {
						return A2(author$project$MeenyLatex$Render2$renderIndentEnvironment, x, y);
					})),
				_Utils_Tuple2(
				'itemize',
				F3(
					function (x, a, y) {
						return A2(author$project$MeenyLatex$Render2$renderItemize, x, y);
					})),
				_Utils_Tuple2(
				'listing',
				F3(
					function (x, a, y) {
						return A2(author$project$MeenyLatex$Render2$renderListing, x, y);
					})),
				_Utils_Tuple2(
				'macros',
				F3(
					function (x, a, y) {
						return A2(author$project$MeenyLatex$Render2$renderMacros, x, y);
					})),
				_Utils_Tuple2(
				'maskforweb',
				F3(
					function (x, a, y) {
						return A2(author$project$MeenyLatex$Render2$renderCommentEnvironment, x, y);
					})),
				_Utils_Tuple2(
				'quotation',
				F3(
					function (x, a, y) {
						return A2(author$project$MeenyLatex$Render2$renderQuotation, x, y);
					})),
				_Utils_Tuple2(
				'tabular',
				F3(
					function (x, a, y) {
						return A2(author$project$MeenyLatex$Render2$renderTabular, x, y);
					})),
				_Utils_Tuple2(
				'thebibliography',
				F3(
					function (x, a, y) {
						return A2(author$project$MeenyLatex$Render2$renderTheBibliography, x, y);
					})),
				_Utils_Tuple2(
				'useforweb',
				F3(
					function (x, a, y) {
						return A2(author$project$MeenyLatex$Render2$renderUseForWeb, x, y);
					})),
				_Utils_Tuple2(
				'verbatim',
				F3(
					function (x, a, y) {
						return A2(author$project$MeenyLatex$Render2$renderVerbatim, x, y);
					})),
				_Utils_Tuple2(
				'verse',
				F3(
					function (x, a, y) {
						return A2(author$project$MeenyLatex$Render2$renderVerse, x, y);
					}))
			]));
}
var author$project$MeenyLatex$Render2$renderMacroDict = author$project$MeenyLatex$Render2$cyclic$renderMacroDict();
author$project$MeenyLatex$Render2$cyclic$renderMacroDict = function () {
	return author$project$MeenyLatex$Render2$renderMacroDict;
};
var author$project$MeenyLatex$Render2$renderEnvironmentDict = author$project$MeenyLatex$Render2$cyclic$renderEnvironmentDict();
author$project$MeenyLatex$Render2$cyclic$renderEnvironmentDict = function () {
	return author$project$MeenyLatex$Render2$renderEnvironmentDict;
};
var author$project$MeenyLatex$Render2$renderString = F2(
	function (latexState, str) {
		return A2(
			elm$html$Html$div,
			_List_Nil,
			A2(
				elm$core$List$map,
				author$project$MeenyLatex$Render2$render(latexState),
				author$project$MeenyLatex$Parser$parse(str)));
	});
var author$project$MeenyLatex$Driver$setup = F2(
	function (seed, text) {
		return A5(author$project$MeenyLatex$LatexDiffer$update, seed, author$project$MeenyLatex$Render2$renderLatexList, author$project$MeenyLatex$Render2$renderString, author$project$MeenyLatex$Differ$emptyEditRecordHtmlMsg, text);
	});
var author$project$MeenyLatex$HasMath$envHasMath = F2(
	function (envType, expr) {
		return A2(
			elm$core$List$member,
			envType,
			_List_fromArray(
				['equation', 'align', 'eqnarray'])) || author$project$MeenyLatex$HasMath$hasMath(expr);
	});
var author$project$MeenyLatex$HasMath$hasMath = function (expr) {
	hasMath:
	while (true) {
		switch (expr.$) {
			case 0:
				var str = expr.a;
				return false;
			case 1:
				var str = expr.a;
				return false;
			case 2:
				var k = expr.a;
				var expr_ = expr.b;
				var $temp$expr = expr_;
				expr = $temp$expr;
				continue hasMath;
			case 3:
				var str = expr.a;
				return true;
			case 4:
				var str = expr.a;
				return true;
			case 6:
				var str = expr.a;
				var optArgs = expr.b;
				var args = expr.c;
				return A3(
					elm$core$List$foldr,
					F2(
						function (x, acc) {
							return author$project$MeenyLatex$HasMath$hasMath(x) || acc;
						}),
					false,
					args);
			case 5:
				var str = expr.a;
				var optArgs = expr.b;
				var args = expr.c;
				var str2 = expr.d;
				return A3(
					elm$core$List$foldr,
					F2(
						function (x, acc) {
							return author$project$MeenyLatex$HasMath$hasMath(x) || acc;
						}),
					false,
					args);
			case 7:
				var str = expr.a;
				var args = expr.b;
				var body = expr.c;
				return A2(author$project$MeenyLatex$HasMath$envHasMath, str, body);
			case 8:
				var list = expr.a;
				return A3(
					elm$core$List$foldr,
					F2(
						function (x, acc) {
							return author$project$MeenyLatex$HasMath$hasMath(x) || acc;
						}),
					false,
					list);
			default:
				return false;
		}
	}
};
var author$project$MeenyLatex$HasMath$listHasMath = function (list) {
	return A3(
		elm$core$List$foldr,
		F2(
			function (x, acc) {
				return author$project$MeenyLatex$HasMath$hasMath(x) || acc;
			}),
		false,
		list);
};
var author$project$Source$initialText = '\n\n\\title{MiniLaTeX Demo}\n\n\\author{James Carlson}\n\n\\email{jxxcarlson at gmail}\n\n\\date{November 13, 2017}\n\n\\revision{February 1, 2018}\n\n\\maketitle\n\n\\tableofcontents\n\n\\section{Introduction}\n\n$$\n  \\int_0^1 x^n dx = \\frac{1}{n+1}\n$$\n\nMiniLaTeX is a subset of LaTeX which can be displayed in a web browser \\cite{hakernews}. One applies a parser-renderer toolchain to convert MiniLaTeX into HTML, then uses MathJax to render formulas and equations. This document is written in MeenyLatex; for additional examples, try the buttons on the lower left, or go to \\href{http://www.knode.io}{www.knode.io}.\n\nFeel free to edit and re-render the text on the left and to experiment with the buttons above. To export a rendered LaTeX file, simply click on the "Export" button above. Your file will be downloaded as "file.html".\n\nPlease bear in mind that MiniLaTeX is still an R&D operation \\cite{techreport}. We are working hard to refine its grammar \\cite{grammar} and extend its scope; we welcome bug reports, comments and suggestions.\n\nMeenyLatex is written in Elm, the functional language for building web apps developed by Evan Czaplicki, starting with his 2012 senior thesis. Although Elm is especially well-suited for writing a parser for MeenyLatex and integrating that parser into an interactive editing environment, MeenyLatex does not depend on any particular language. Indeed, we plan a second implementation of the parrser-renderer toolchain in Haskell.\n\n\\section{Examples}\n\nThe Pythagorean Theorem, $a^2 + b^2 = c^2$, is useful for computing distances.\n\nFormula \\eqref{integral}is one that you learned in Calculus class.\n\n\\begin{equation}\n\\label{integral}\n\\int_0^1 x^n dx = \\frac{1}{n+1}\n\\end{equation}\n\n\n\\begin{theorem}\nThere are infinitely many primes, and each satisfies $a^{p-1} \\equiv 1 \\text{ mod } p$, provided that $p$does not divide $a$.\n\\end{theorem}\n\n\nA Table ...\n\n\\begin{indent}\n\\strong{Light Elements}\n\\begin{tabular}{ l l l l }\nHydrogen & H & 1 & 1.008 \\\\\nHelium & He & 2 & 4.003 \\\\\nLithium& Li & 3 & 6.94 \\\\\nBeryllium& Be& 4& 9.012 \\\\\n\\end{tabular}\n\\end{indent}\n\nAn Image ....\n\n\\image{http://psurl.s3.amazonaws.com/images/jc/propagator_t=2-6feb.png}{Free particle propagator}{width: 300, align: center}\n\nA listing.  Note that in the \\italic{source}of the listing, there are no line numbers.\n\n\\strong{MiniLaTeX Abstract Syntax Tree (AST)}\n\n\\begin{listing}\n\ntype LatexExpression\n= LXString String\n| Comment String\n| Item Int LatexExpression\n| InlineMath String\n| DisplayMath String\n| Macro String (List LatexExpression)\n| Environment String LatexExpression\n| LatexList (List LatexExpression)\n\n\\end{listing}\n\n\nThe MiniLaTeX parser reads text and produces an AST. A rendering function converts the AST into HTML. One could easily write functions \\code{render: LatexExpression -> String}to make other conversions.\n\n\\section{Short Writer\'s Guide}\n\nWe plan a complete Writer\'s Guide for MiniLaTeX. For now, however, just a few pointers.\n\n\\begin{itemize}\n\\item Make liberal use of blank lines. Your source text will be much easier to read, and the converter has optimizations that work especially well when this is done.\n\n\\item Equations and environments should have a blank line above one below. Items in lists should be separated by blank lines. This is not strictly necessary, but it helps the converter and it helps you.\n\n\n\\end{itemize}\n\n\n\\italic{Fast Render}is an optimization that speeds up parsing and rendering for long documents. Only paragraphs which are changed are re-parsed (expensive) and re-rendered (inexpensive). However, to resolve section numbers, cross-references, etc., a full render is necessary.\n\nAll of these operations will have a very significant speed-up when version 0.19 of the Elm compiler is released and when MathJax 3.0 is released and integrated into MiniLaTeX.\n\n\\section{More about MiniLaTeX}\n\nArticles and code:\n\n\\begin{itemize}\n\\item \\href{https://hackernoon.com/towards-latex-in-the-browser-2ff4d94a0c08}{Towards LaTeX in the Browser}\n\n\\item \\href{https://github.com/jxxcarlson/minilatexDemo}{Code for the Demo App}\n\n\\item \\href{http://package.elm-lang.org/packages/jxxcarlson/minilatex/latest}{The MeenyLatex Elm Library}\n\n\n\\end{itemize}\n\n\nTo try out MeenyLatex for real, sign up for a free account at \\href{http://www.knode.io}{www.knode.io}. The app is still under development &mdash; we need people to test it and give feedback. Contributions to help improve the open-source MeenyLatex Parser-Renderer are most welcome. Here is the \\href{https://github.com/jxxcarlson/minilatex}{GitHub repository}. The MeenyLatex Demo as well as the app at knode.io are written in \\href{http://elm-lang.org/}{Elm}. We also plan a Haskell version.\n\nPlease send comments, bug reports, etc. to jxxcarlson at gmail.\n\n\\section{Technical Note}There is a \\italic{very rough} \\href{http://www.knode.io/#@public/628}{draft grammar}for MiniLaTeX, written mostly in EBNF. However, there are a few productions, notably for environments, which are not context-free. Recall that in a context-free grammar, all productions are of the form $A \\Rightarrow \\beta$, where $A$is a non-terminal symbol and $\\beta$is a sequence of terminals and nonterminals. There are some productions of the form $A\\beta \\Rightarrow \\gamma$, where $\\beta$is a terminal symbol. These are context-sensitive productions, with $\\beta$providing the context.\n\n\\section{Restrictions, Limitations, and Todos}\n\nBelow are some of the current restrictions and limitations.\n\n\n%% COMMENT: below we nest one environment inside another\n\n\\begin{restrictions}\n\\begin{enumerate}\n\n\\item The enumerate and itemize environments cannot be nested inside one another.  They\ncan, however, contain inline math and macros, and they may be contained in other environments,\ne.g., theorem.\n\n\\item The tabular environment ignores formatting information and left-justifies everything in the cell.\n\n\\end{enumerate}\n\\end{restrictions}\n\nWe are working to fix known issues and to expand the scope of MeenyLatex.\n\n\\strong{Bibliography}\n\n\\begin{thebibliography}\n\n\\bibitem[HN]{hackernews} \\href{https://hackernoon.com/towards-latex-in-the-browser-2ff4d94a0c08}{Towards Latex in the Browser}\n\n\\bibitem[GR]{grammar} \\href{http://www.knode.io/#@public/628}{MeenyLatex Grammar}\n\n\\bibitem[TR]{techreport} \\href{http://www.knode.io/#@public/525}{MeenyLatex Technical Report}\n\n\n\\end{thebibliography}\n\n\\bigskip\n\n\\image{https://cdn-images-1.medium.com/max/1200/1*HlpVE5TFBUp17ua1AdiKpw.gif}{The way we used to do it.}{align: center}\n\n\\begin{comment}\n\nThis text\n\nshould not appear\n\n\\end{comment}\n\n\n';
var author$project$Types$Horizontal = 0;
var author$project$Types$NewSeed = function (a) {
	return {$: 6, a: a};
};
var author$project$Types$StandardView = 0;
var elm$random$Random$Generate = elm$core$Basics$identity;
var elm$core$Task$andThen = _Scheduler_andThen;
var elm$core$Task$succeed = _Scheduler_succeed;
var elm$core$Bitwise$shiftRightZfBy = _Bitwise_shiftRightZfBy;
var elm$random$Random$Seed = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var elm$random$Random$next = function (_n0) {
	var state0 = _n0.a;
	var incr = _n0.b;
	return A2(elm$random$Random$Seed, ((state0 * 1664525) + incr) >>> 0, incr);
};
var elm$random$Random$initialSeed = function (x) {
	var _n0 = elm$random$Random$next(
		A2(elm$random$Random$Seed, 0, 1013904223));
	var state1 = _n0.a;
	var incr = _n0.b;
	var state2 = (state1 + x) >>> 0;
	return elm$random$Random$next(
		A2(elm$random$Random$Seed, state2, incr));
};
var elm$time$Time$Name = function (a) {
	return {$: 0, a: a};
};
var elm$time$Time$Offset = function (a) {
	return {$: 1, a: a};
};
var elm$time$Time$Zone = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var elm$time$Time$customZone = elm$time$Time$Zone;
var elm$time$Time$Posix = elm$core$Basics$identity;
var elm$time$Time$millisToPosix = elm$core$Basics$identity;
var elm$time$Time$now = _Time_now(elm$time$Time$millisToPosix);
var elm$time$Time$posixToMillis = function (_n0) {
	var millis = _n0;
	return millis;
};
var elm$random$Random$init = A2(
	elm$core$Task$andThen,
	function (time) {
		return elm$core$Task$succeed(
			elm$random$Random$initialSeed(
				elm$time$Time$posixToMillis(time)));
	},
	elm$time$Time$now);
var elm$core$Platform$sendToApp = _Platform_sendToApp;
var elm$random$Random$step = F2(
	function (_n0, seed) {
		var generator = _n0;
		return generator(seed);
	});
var elm$random$Random$onEffects = F3(
	function (router, commands, seed) {
		if (!commands.b) {
			return elm$core$Task$succeed(seed);
		} else {
			var generator = commands.a;
			var rest = commands.b;
			var _n1 = A2(elm$random$Random$step, generator, seed);
			var value = _n1.a;
			var newSeed = _n1.b;
			return A2(
				elm$core$Task$andThen,
				function (_n2) {
					return A3(elm$random$Random$onEffects, router, rest, newSeed);
				},
				A2(elm$core$Platform$sendToApp, router, value));
		}
	});
var elm$random$Random$onSelfMsg = F3(
	function (_n0, _n1, seed) {
		return elm$core$Task$succeed(seed);
	});
var elm$random$Random$Generator = elm$core$Basics$identity;
var elm$random$Random$map = F2(
	function (func, _n0) {
		var genA = _n0;
		return function (seed0) {
			var _n1 = genA(seed0);
			var a = _n1.a;
			var seed1 = _n1.b;
			return _Utils_Tuple2(
				func(a),
				seed1);
		};
	});
var elm$random$Random$cmdMap = F2(
	function (func, _n0) {
		var generator = _n0;
		return A2(elm$random$Random$map, func, generator);
	});
_Platform_effectManagers['Random'] = _Platform_createManager(elm$random$Random$init, elm$random$Random$onEffects, elm$random$Random$onSelfMsg, elm$random$Random$cmdMap);
var elm$random$Random$command = _Platform_leaf('Random');
var elm$random$Random$generate = F2(
	function (tagger, generator) {
		return elm$random$Random$command(
			A2(elm$random$Random$map, tagger, generator));
	});
var elm$core$Bitwise$xor = _Bitwise_xor;
var elm$random$Random$peel = function (_n0) {
	var state = _n0.a;
	var word = (state ^ (state >>> ((state >>> 28) + 4))) * 277803737;
	return ((word >>> 22) ^ word) >>> 0;
};
var elm$random$Random$int = F2(
	function (a, b) {
		return function (seed0) {
			var _n0 = (_Utils_cmp(a, b) < 0) ? _Utils_Tuple2(a, b) : _Utils_Tuple2(b, a);
			var lo = _n0.a;
			var hi = _n0.b;
			var range = (hi - lo) + 1;
			if (!((range - 1) & range)) {
				return _Utils_Tuple2(
					(((range - 1) & elm$random$Random$peel(seed0)) >>> 0) + lo,
					elm$random$Random$next(seed0));
			} else {
				var threshhold = (((-range) >>> 0) % range) >>> 0;
				var accountForBias = function (seed) {
					var x = elm$random$Random$peel(seed);
					var seedN = elm$random$Random$next(seed);
					return (_Utils_cmp(x, threshhold) < 0) ? accountForBias(seedN) : _Utils_Tuple2((x % range) + lo, seedN);
				};
				return accountForBias(seed0);
			}
		};
	});
var author$project$Main$init = function (flags) {
	var parseResult = author$project$MeenyLatex$Driver$parse(author$project$Source$initialText);
	var editRecord = A2(author$project$MeenyLatex$Driver$setup, 0, author$project$Source$initialText);
	var model = {
		q: 0,
		j: 0,
		A: editRecord,
		aA: A2(elm$core$List$map, author$project$MeenyLatex$HasMath$listHasMath, parseResult),
		aa: author$project$Main$exportLatex2Html(editRecord),
		ab: 0,
		ac: '',
		ah: parseResult,
		F: 0,
		o: author$project$Source$initialText,
		bu: author$project$Source$initialText,
		aj: elm$time$Time$millisToPosix(0),
		a$: elm$time$Time$millisToPosix(0),
		bC: flags._,
		bD: flags.al
	};
	return _Utils_Tuple2(
		model,
		A2(
			elm$random$Random$generate,
			author$project$Types$NewSeed,
			A2(elm$random$Random$int, 1, 10000)));
};
var elm$core$Platform$Sub$batch = _Platform_batch;
var elm$core$Platform$Sub$none = elm$core$Platform$Sub$batch(_List_Nil);
var author$project$Main$subscriptions = function (model) {
	return elm$core$Platform$Sub$none;
};
var author$project$Types$ReceiveStartTime = function (a) {
	return {$: 21, a: a};
};
var elm$core$Task$Perform = elm$core$Basics$identity;
var elm$core$Task$init = elm$core$Task$succeed(0);
var elm$core$Task$map = F2(
	function (func, taskA) {
		return A2(
			elm$core$Task$andThen,
			function (a) {
				return elm$core$Task$succeed(
					func(a));
			},
			taskA);
	});
var elm$core$Task$map2 = F3(
	function (func, taskA, taskB) {
		return A2(
			elm$core$Task$andThen,
			function (a) {
				return A2(
					elm$core$Task$andThen,
					function (b) {
						return elm$core$Task$succeed(
							A2(func, a, b));
					},
					taskB);
			},
			taskA);
	});
var elm$core$Task$sequence = function (tasks) {
	return A3(
		elm$core$List$foldr,
		elm$core$Task$map2(elm$core$List$cons),
		elm$core$Task$succeed(_List_Nil),
		tasks);
};
var elm$core$Task$spawnCmd = F2(
	function (router, _n0) {
		var task = _n0;
		return _Scheduler_spawn(
			A2(
				elm$core$Task$andThen,
				elm$core$Platform$sendToApp(router),
				task));
	});
var elm$core$Task$onEffects = F3(
	function (router, commands, state) {
		return A2(
			elm$core$Task$map,
			function (_n0) {
				return 0;
			},
			elm$core$Task$sequence(
				A2(
					elm$core$List$map,
					elm$core$Task$spawnCmd(router),
					commands)));
	});
var elm$core$Task$onSelfMsg = F3(
	function (_n0, _n1, _n2) {
		return elm$core$Task$succeed(0);
	});
var elm$core$Task$cmdMap = F2(
	function (tagger, _n0) {
		var task = _n0;
		return A2(elm$core$Task$map, tagger, task);
	});
_Platform_effectManagers['Task'] = _Platform_createManager(elm$core$Task$init, elm$core$Task$onEffects, elm$core$Task$onSelfMsg, elm$core$Task$cmdMap);
var elm$core$Task$command = _Platform_leaf('Task');
var elm$core$Task$perform = F2(
	function (toMessage, task) {
		return elm$core$Task$command(
			A2(elm$core$Task$map, toMessage, task));
	});
var author$project$Main$getStartTime = A2(elm$core$Task$perform, author$project$Types$ReceiveStartTime, elm$time$Time$now);
var author$project$Main$useSource = F2(
	function (text, model) {
		var editRecord = A2(author$project$MeenyLatex$Driver$setup, model.F, text);
		return _Utils_Tuple2(
			_Utils_update(
				model,
				{
					j: model.j + 1,
					A: editRecord,
					aa: author$project$Main$exportLatex2Html(editRecord),
					ah: author$project$MeenyLatex$Driver$parse(text),
					o: text
				}),
			author$project$Main$getStartTime);
	});
var author$project$MeenyLatex$Driver$update = F3(
	function (seed, editRecord, text) {
		return A5(author$project$MeenyLatex$LatexDiffer$update, seed, author$project$MeenyLatex$Render2$renderLatexList, author$project$MeenyLatex$Render2$renderString, editRecord, text);
	});
var author$project$Source$grammar = '\n\n\\title{MiniLaTeX Grammar (Draft)}\n\n\\author{James A. Carlson}\n\n\\email{jxxcarlson at gmail}\n\n\\date{January 12, 2018}\n\n\\maketitle\n\n\\tableofcontents\n\n\n  $$\n  \\newcommand{\\dollar}{ \\text{$ \\$ $} }\n  \\newcommand{\\begg}[1]{\\text{\\begin{$#1$}}}\n  \\newcommand{\\endd}[1]{\\text{\\end{$#1$}}}\n  $$\n\n  \\section{Introduction}\n\n  In this article, we describe a formal grammar which defines the MiniLaTeX language.  MiniLaTex is a subset of LaTeX, and  text written in it can be translated into HTML by means of a suitable parser-renderer.  Because of the balanced begin-end pairs characteristic of LaTeX environments and the fact that the number of distinct such pairs is arbitrary, the grammar is not context-free.  The context sensitivity is, however, limited.  Indeed, it occurs in only in the productions for environments and tables, so that the grammatical description is "almost EBNF."\n\n  The MiniLaTex parser is written in Elm.  Elm is the functional language for creating web apps developed by Evan Czaplicki, first announced in his Harvard senior thesis (2012).  The  choice of language was governed by two considerations. First, Elm provides excellent tools for creating fast, reliable web apps with a codebase that is maintainable over the long run.  This was an important consideration, since the point of MiniLaTeX is to be able to create, edit, and distribute technical documents in HTML.  The second consideration is that Elm, with its ML-flavored type system and an expressive parser combinator library, is well-suited to the task of realizing a grammar.  The resulting parser is quite compact --- just 336 lines of code as of this writing.\n\n  A second implementation of the parser in Haskell is planned in order to have additional validation of MiniLaTeX and to make it more widely available.  The Haskell parser will be released with a command-line tool for translating MiniLaTeX into HTML.\n\n  The code for the MiniLaTeX parser-renderer is open source, available on  \\href{https://github.com/jxxcarlson/minilatex}{GitHub}\n  and also as an Elm package at \\href{http://package.elm-lang.org/packages/jxxcarlson/minilatex/latest}{package.elm-lang.org} --- search for \\code{jxxcarlson/minilatex}.\n  To experiment with MiniLaTeX, try the \\href{https://jxxcarlson.github.io/app/minilatex/src/index.html}{Demo App}.  To use MiniLaTeX to create documents, try \\href{http://www.knode.io}{www.knode.io}\n\n  I am indebted to Ilias van Peer for thoughtful suggestions and specific technical help through the entire course of this project.  I would also like to thank Evan Czaplicki, who brought Elm\'s \\href{https://github.com/elm-tools/parser}{elm-tools/parser} package to my attention; its role is fundamental.\n\n  This document is written in MiniLaTeX and is available on the web at\n  \\href{http://www.knode.io/#@public/628}{www.knode.io/#@public/628}.\n\n\n\n  \\section{Abstract Syntax Tree}\n\n  The MeenyLatex parser accepts text as input and produces an abstract syntax tree (AST) as output.  An AST is a $LatexExpression$, as defined by the following type.\n\n  \\begin{verbatim}\n  type LatexExpression\n      = LXString String\n      | Comment String\n      | InlineMath String\n      | DisplayMath String\n      | Item Int LatexExpression\n      | Macro String (List LatexExpression)\n      | Environment String LatexExpression\n      | LatexList (List LatexExpression)\n  \\end{verbatim}\n\n  The translation from source text to abstract syntax tree is accomplished by a function in the \\code{MeenyLatex.Parser} module:\n\n  \\begin{equation}\n  parse: {\\tt String} \\rightarrow {\\tt LatexExpression}.\n  \\end{equation}\n\n  The abstract syntax tree of MiniLaTeX text carries the information\n  needed to render it either as LaTeX or as HTML. Thus one can construct functions\n\n\n  \\begin{align}\n  renderToLatex &: LatexExpression \\rightarrow String \\\\\n  renderToHtml &: LatexExpression \\rightarrow String\n  \\end{align}\n\n  One might think of the function $renderToLatex$ as an inverse of $parse$, since it reverses the role of domain and codomain.  Nonetheless, this is not the case, since one can make changes to the source text which do not affect the AST.  It is possible, however, to state a related property.  Let\n   $f = renderToLatex\\circ parse$.  This is a function \\code{String -> String}; although one cannot assert that $f = id$, one has the\n  idempotency relation $f\\circ f = f$.\n\n\n\n  \\section{Terminals and Non-Terminals}\n\n  Let us now describe the grammar, beginning with terminal and nonterminal symbols.  In the next section we list and discuss the productions of this grammar.\n\n  \\subheading{Terminals}\n\n\\begin{enumerate}\n\n  \\item $spaces \\Rightarrow sp^*$, where $sp$ is the space character.\n\n  \\item $ws \\Rightarrow \\{ sp, nl \\}^*$, where $nl$ is the newline character.\n\n  \\item $reservedWord \\Rightarrow \\{ \\backslash begin, \\backslash end, \\backslash item \\}$\n\n  \\item $word \\Rightarrow (Char - \\{sp, nl, backslash, dollarSign \\})^+$ -- Nonempty strings without whitespace characters, backslashes or dollar signs\n\n  \\item $specialWord \\Rightarrow (Char - \\{sp, nl, backslash, dollarSign, \\}, \\& \\})^+$\n\n  \\item $macroName \\Rightarrow  (Char - \\{sp, nl, , leftBrace, backslash\\})^+ - reservedWord$\n\n\\end{enumerate}\n\n  Associated with these terminals are productions $Word \\Rightarrow word$, $Identifier \\Rightarrow identifier$, etc.  We shall not list all of these, but rather just the terminal and a description of it.\n\n\n\n  \\subheading{Non-Terminals}\n\n\n  \\begin{enumerate}\n  \\item $Arg$ -- arguments for macros\n  \\item $BeginWord$ -- produce $\\begg{identifier}$ phrase for LaTeX environments.\n  \\item $Comment$ -- LaTeX comments -- \\% foo, bar\n  \\item $IMath$ -- inline mathematical text, as in $\\dollar$ ... $\\dollar$\n  \\item $DMath$ -- display mathematical text, as in $\\dollar\\dollar$ ... $\\dollar\\dollar$ or $\\backslash[\\ ... \\backslash]$.\n  \\item $Env$ -- LaTeX environments $\\begg{foo}\\ $ ... $\\endd{foo}$.\n  \\item $EnvName$ -- produce an environment name such as \\italic{foo}, or \\italic{theorem}.\n  \\item $Identifier$ -- a lowercase alphanumeric string beginning with a letter.\n  \\item $Item$ -- item in an enumeration or itemization environemnt\n  \\item $LatexExpression$ -- a union type\n  \\item $LatexList$ -- a list of LatexExpressions\n  \\item $Macro$ -- a LaTeX macro of zero or more arguments.\n  \\item $MacroName$ -- an identifier\n  \\item $Words$ -- a string obtained by joining a list of $Word$ with spaces.\n  \\end{enumerate}\n\n\n  \\section{Productions}\n\n\n\n  The MiniLaTeX grammar is defined by its productions.  This set is fairly small, just 24 if one discounts productions which could be viewed as performing lexical analysis -- the recognition of identifiers, for instance.  Of the 24 productions, 11 are for general nonterminals, 7 are for environments of various kinds, and 5 are for the tabular environment.  With two exceptions we present them in EBNF form.  The topmost productions are for $LatexList$ and $LatexExpression$:\n\n  \\begin{align}\n  \\label{Production:LatexExpression}\n  LatexList &\\Rightarrow LatexExpression^+ \\\\\n  LatexExpression &\\Rightarrow Words\\ |\\ Comment\\ |\\ IMath\\ |\\ DMath\\  \\\\\n  & \\phantom{\\Rightarrow}\\ |\\ Macro\\ |\\ Env\n  \\end{align}\n\n  The productions for the first four non-terminals on the right-hand side of \\eqref{Production:LatexExpression} are non-recursive, straightforward, and all result in a terminal.\n  The terminal is of the form $Constructor\\ x$, where the first term is a constructor for $LatexExpression$ and $x$ is a string.  When $A$ is a non-terminal, ${\\tt A}$ is the\n  corresponding constructor.\n\n\\begin{enumerate}\n\n  \\item $ Words  \\Rightarrow {\\tt LXString}\\ (join\\ Word^+) $ where a $Word$ is any sequence of characters which is not a whitespace character, $\\backslash$, or $\\dollar$, and where $join$ is the function which joins the elements of a list of strings by single spaces to produce a string.\n\n  \\item $ Comment \\Rightarrow {\\tt Comment}\\ (Char - \\{ \\text{\\n}\\})^* $\n\n  \\item $ IMath  \\Rightarrow {\\tt IMath}\\ Line\'$ where $Line\'$ is $Line$ with no occurernce of $\\dollar$\n\n  \\item $ DMath  \\Rightarrow {\\tt DMath}\\ Line\'\\ |\\ {\\tt DMath}\\ Line\'\' $ | where $Line\'\'$ is $Line$ with no occurrence of of a right bracket.\n\n\\end{enumerate}\n\n  Let us now treat the two recursive productions. They generate LaTeX macros and environments.\n\n\n  \\subsection{Macros}\n\n  \\begin{align}\n  Macro &\\Rightarrow {\\tt Macro}\\ Macroname\\ Arg^* \\\\\n  Arg &\\Rightarrow Words\\ |\\ IMath\\ |\\ Macro\n  \\end{align}\n\n\n  \\subsection{Environments}\n\n\n  Because of the use of constructions of the form\n\n  \\begin{verbatim}\n  \\begin{envName}\n  ...\n  \\end{envName}\n  \\end{verbatim}\n\n  the production of environments requires  the use of a context-sensitive grammar.\n  Here $envName$ may take on arbitrarily many values, and, in particular, values not known at the time the parser is written.  Note that the production \\eqref{production:envname} below has a nonterminal followed by a terminal on the right-hand side, while \\eqref{production:env} has a nonterminal followed by a terminal on the left-hand side.  The presence of a terminal on the left-hand side tells us that the grammar is context-sensitive. In $Env\\ identifier$, the terminal $identifier$ provides the context.\n\n  \\begin{equation}\n  \\label{production:envname}\n  EnvName \\Rightarrow Env\\ identifier\n  \\end{equation}\n\n  \\begin{align}\n  \\label{production:env}\n  Env\\ {\\rm itemize} & \\Rightarrow {\\tt Environment}\\ {\\rm itemize}\\ Item^+ \\\\\n  Env\\ {\\rm enumerate} & \\Rightarrow {\\tt Environment}\\ {\\rm enumerate}\\ Item^+\\\\\n  Env\\ {\\rm tabular} & \\Rightarrow {\\tt Environment}\\ {\\rm tabular} \\ Table \\\\\n  Env\\ passThroughIdentifier & \\Rightarrow {\\tt Environment}\\ passThroughIdentifier\\ Text \\\\\n  Env\\ genericIdentifier & \\Rightarrow {\\tt Environment}\\ genericIdentifier\\ LatexList \\\\\n  \\end{align}\n\n  The set of all $envNames$ is decomposed as follows:\n\n  \\begin{align}\n  specialIdentifier &= \\{ \\text{itemize, enumerate, tabular} \\} \\\\\n  passThroughIdentifier &= \\{ \\text{equation, align, eqnarray, verbatim, verse} \\} \\\\\n  genericIdentifier &= identifier - specialIdentifier - passThroughIdentifier\n  \\end{align}\n\n\n  \\subsection{Tabular Environment}\n\n  The tabular environment also requires a context-sensitive grammar.\n\n  \\begin{align}\n  Table &\\Rightarrow TableHead\\ (TableRows\\ ncols)^+ \\\\\n  TableRows\\ ncols &\\Rightarrow TableCells^{ncols}\n  \\end{align}\n\n\n\n';
var author$project$Source$nongeodesic = '\n\n\n\n \\title{Non-geodesic variations of Hodge structure of maximum dimension}\n\n  \\author{James A. Carlson and Domingo Toledo}\n\n  \\date{November 1, 2017}\n\n\n\n\n  \\maketitle\n\n\\tableofcontents\n\n\n  \\begin{abstract}\n  There are a number of examples of variations of Hodge structure of maximum dimension.  However, to our knowledge, those that are global on the level of the period domain are totally geodesic subspaces that arise from an orbit of a subgroup of the group of the period domain. That is, they are defined by Lie theory rather than by algebraic geometry.  In this note, we give an example of a variation of maximum dimension which is nowhere tangent to a geodesic variation.  The period domain in question, which classifies weight two Hodge structures with $h^{2,0} = 2$ and $h^{1,1} = 28$, is of dimension $57$. The horizontal tangent bundle has codimension one, thus it is an example of a holomorphic contact structure, with local integral manifolds of dimension 28. The group of the period domain is $SO(4,28)$, and one can produce global integral manifolds as orbits of the action of subgroups isomorphic to $SU(2,14)$.  Our example is given by the variation of Hodge structure on the second cohomology of weighted projective hypersurfaces of degree $10$ in a weighted projective three-space with weights\n  $1, 1, 2, 5$\n  \\end{abstract}\n\n  \\section{Introduction}\n  \\label{sec:introduction}\n\n\n$$\n\\newcommand{\\C}{\\mathbb{C}}\n\\newcommand{\\P}{\\mathbb{P}}\n\\newcommand{\\Q}{\\mathbb{Q}}\n\\newcommand{\\R}{\\mathbb{R}}\n\\newcommand{\\bH}{\\mathbf{H}}\n\\newcommand{\\hodge}{\\mathcal{H}}\n\\newcommand{\\surfs}{\\mathcal{S}}\n\\newcommand{\\var}{\\mathcal{V}}\n\\newcommand{\\Hom}{\\text{Hom}}\n$$\n\n  Period domains $D = G/V$ for $G$ a (semi-simple, adjoint linear Lie group with a compact Cartan subgroup $T\\subset G$ and $V$ the centralizer of a sub-torus of $T$) occur in many interesting situations.  It is known that there is a unique maximal compact subgroup $K\\subset G$ containing $V$,\n  so that there is a fibration\n  \\begin{equation}\n  \\label{eq:fibration}\n  K/V \\longrightarrow  G/V \\buildrel \\pi \\over\\longrightarrow  G/K\n  \\end{equation}\n  of the homogeneous complex manifold $G/V$ onto the symmetric space $G/K$ with fiber the homogeneous projective variety $K/V$.  The tangent bundle $TD$ has a distinguished \\emph{horizontal sub-bundle} $T_h D$ (also called the \\emph{infinitesimal period relation}). It is a sub-bundle of the differential-geometric horizontal bundle (the orthogonal complement of the tangent bundle to the fibers). It usually, but not always a proper sub-bundle. When it is a proper sub-bundle, it is not integrable.  Typically, successive brackets of vector fields in $T_hD$ generate all of $ TD$.  We are interested in the case where the symmetric space $G/K$ is \\emph{not} Hermitian symmetric.  In that case, the complex manifold $D$ admits invariant pseudo-K\\"ahler metrics, but no invariant K\\"ahler metric.\n\n  These manifolds were introduced by Griffiths as a category of manifolds that contains the classifying spaces  of Hodge structures.  For example, if $(H, \\left< \\ , \\ \\right>)$ is a real vector space of dimension $2p+q$ with a symmetric bilinear form of signature $2p,q$,\n  the manifolds $SO(2p,q)/U(p)\\times SO(q)$ classify Hodge decompositions  of weight two. Thus, we\n  have a direct sum decomposition\n\n  \\begin{equation}\n  \\label{ eq:hodgedecomp}\n  H^\\C = H^{2,0}\\oplus H^{1,1}\\oplus H^{0,2}\n  \\end{equation}\n\n  with Hodge numbers (dimensions)  $h^{2,0} = h^{0,2} = p $, $h^{1,1} = q$, and polarized by $\\left< \\ , \\ \\right>$: The real points of $H^{2,0}\\oplus H^{0,2}$ form a maximal positive subspace, $H^{1,1}$ is the complexification of its  orthogonal complement\n  (a maximal negative subspace), and so $(H^{2.0})^\\perp = H^{2,0}\\oplus H^{1,1}$.   Therefore the filtration\n  \\begin{equation}\n  \\label{eq:hodgefiltration}\n  H^{2,0}\\subset (H^{2,0})^\\perp \\subset H^\\C\n  \\end{equation}\n  of $H^\\C$ is the same as the Hodge filtration.  Therefore $H^{2,0}$ determines the Hodge filtration, hence the Hodge decomposition.  Note that $\\left< u,\\overline{v} \\right>$ is a positive Hermitian inner product on $H^{2,0}$\n\n  The special orthogonal group of $\\left< \\ ,\\ \\right>$, isomorphic to $SO(2p,q)$, acts transitively on the choices of $H^{2,0}$, and the subgroup fixing one choice is isomorphic to $U(p)\\times SO(q)$.\n  Thus, the homogeneous complex manifold $D = SO(2p,q)/U(p)\\times SO(q)$ classifies polarized Hodge structures on a \\emph{fixed} vector space $(H, \\left< \\ ,\\  \\right>)$.  Over $D$, there are tautological Hodge bundles $\\hodge^{2,0},\\hodge^{1,1},\\hodge^{0,2}$.  The tangent bundle $TD$ and horizontal sub-bundle are\n\n  \\begin{equation}\n  \\label{eq:hodgebundles}\n  TD = Hom_{\\left< \\ ,\\ \\right>}(\\hodge^{2,0},\\hodge^{1,1}\\oplus \\hodge^{0,2}),\\ \\ T_hD = Hom(\\hodge^{2,0},\\hodge^{1,1}),\n  \\end{equation}\n\n  where $Hom_{\\left< \\ ,\\ \\right>}$ means homomorphisms $X$ which  preserving $\\left< \\  , \\  \\right>$ infinitesimally, that is, $\\left< Xu,v \\right> + \\left< u,Xv \\right> = 0$ for all $u,v \\in H^{2,0}$.  If $X:H^{2,0}\\to H^{1,1}$ this condition is vacuous, since $\\left< H^{2,0},H^{1,1} \\right> = 0$. Therefore $Hom_{\\left< \\ ,\\ \\right>}(\\hodge^{2,0},\\hodge^{1,1}) = Hom(\\hodge^{2,0},\\hodge^{1,1})$.\n\n  Whenever $p > 1$, the horizontal tangent bundle is a proper sub-bundle of the  tangent bundle.  The first interesting case is $p = 2$. If in addition $q = 2r$ is even, then the horizontal distribution locally a contact distribution, i.e., is the null space of a form $\\omega = dz - (x_1 dy_1 + \\cdots + x_r dy_r)$ in suitable local coordinates $(x,y,z)$.  Our example of weighted hypersurfaces yields a variation of Hodge structure of this type.\n\n  \\subsection{Construction of horizontal maps}\n  \\label{subsec:construction}\n\n\n  The  two main sources of horizontal holomorphic maps to period domains are\n\n\\emph{Totally geodesic maps}:  these come from Lie group theory, as orbits of suitable Lie subgroups of $G$.  For example, for the domains $SO(2p,2q)/U(p)\\times SO(2q)$, we can put a complex structure $J$  on the underlying $\\R$-vector space $H$, compatible with $< \\ , \\ >$.  Let $H^+, H^-$ denote the underlying real spaces of $H^{2,0}\\oplus H^{0,2}$ and $H^{1,1}$ respectively. Consider the variation in which all $H^+$ are $J$-invariant.  This gives an embedding\n\n     \\begin{equation}\n  \\label{ }\n  SU(p,q)/S(U(p)\\times U(q)) \\buildrel F \\over\\longrightarrow  SO(2p,2q)/U(p) \\nonumber\\times SO(2q)\n  \\end{equation}\n\n  of the Hermitian symmetric space $D_1$ for $SU(p,q)$ in the domain $D$.     Since $H^+$ always remains $J$-invariant, the tangent vector to its motion, an element of $Hom(H^+,H^-)$ commutes with $J$.  Let $V\\subset H^{1,1}$ be the space of $(1,0)$-vectors for $J$, that is, $V = \\{X - iJX \\ | X\\in H^{1,1}\\}$.   Then\n\n\n\\begin{equation}\n  dF:TD_1 \\to Hom(H^{2,0},V) \\subset Hom(H^{2,0},H^{1,1} )= T_hD \\nonumber\n\\end{equation}\n\nin particular $F$ is horizontal and holomorphic.\n\n\n\\emph{Periods of  families of algebraic varieties}  This may be called the geometric method.  We proceed to explain it by describing the special case of  $SO(2p,2q)$:}\n\n\n\n   Let $\\surfs \\to B$ be smooth algebraic family of smooth projective algebraic surfaces over a smooth connected algebraic base $B$, fix a base point $b_0\\in B$, and fix $(H, \\left<\\ , \\ \\right>)$ to be the pair ($H^2(\\surfs_{b_0},\\R)_{prim}$, intersection form).  For any $b\\in B$ and a path $\\lambda$ from $b_0$ to $b$, there is an isomorphism $\\lambda^\\#:H^2(\\surfs_b)\\to H^2(\\surfs_{b_0})$, where different paths give different isomorphisms related by an element of the image of the monodromy representation $\\rho:\\pi_1(B,b_0) \\to Aut(H^2_{prim}(\\surfs_{b_0}))$. The \\emph{period map} $F$  is defined by the rule:  $F(b)$ is the Hodge structure $\\lambda^\\#$(Hodge structure on $H^2(\\surfs_b)$).  In this way, $F(b)$ is a Hodge structure on a fixed vector space, hence an element of $D$, well defined up to the action of the monodromy group.  We could look at this as a function of $b$ and $\\lambda$, in which case we are lifting $F$ to a map $\\widetilde{F}$ on a covering space of $B$.   Thus we have two equivalent formulations $F, \\widetilde{F}$ of the period map related as follows:\n    \\begin{eqnarray}\n  \\begin{array}{ccc}\n  \\label{eq:periodmaps}\n      \\widetilde{B} &  \\buildrel \\widetilde{F} \\over\\longrightarrow  & D  \\\\\n  {p}\\Big\\downarrow & & \\Big\\downarrow   \\\\\n  B & \\buildrel F\\over \\longrightarrow & \\Gamma\\backslash D\n  \\end{array}\n  \\end{eqnarray}\n  where $p:\\widetilde{B}\\to B$ is the covering corresponding to the kernel of $\\rho$ and  $\\Gamma$ is a suitable monodromy group (containing the image of $\\rho$).     Locally, the two maps $F, \\widetilde{F}$ are the same, except when $F(b)$ is fixed by some non-identity element of $\\Gamma$.\n\n\n  Griffiths showed that \\emph{$F$ is holomorphic and horizontal}, in other words, $d\\widetilde{F}:T\\widetilde{B}\\to F^*T_h D \\subset T D$.  Under suitable assumptions, the closure  $\\overline{F(B)}$ is an analytic subvariety of $\\Gamma\\backslash D$, hence is a closed \\emph{horizontal analytic subvariety} of $\\Gamma\\backslash D$.\n\n  \\subsection{A concrete example}\n\n  The preceding discussion can be applied to the family of smooth hypersurfaces in $\\P^3$ of a fixed degree $d$.  In order to get non-constant variations and for the period domain not to be Hermitan symmetric we need to take $d\\ge 5$.\n\n  For $d=5$ we have that the Hodge numbers are $(4,44,4)$, hence $D = SO(8,44) / U(4)\\times SO(44)$ has dimension $182$, the horizontal tangent space has dimension $176$ and the maximum dimension of an integral submanifold is $88$, the dimension of the horizontal $SU(4,22)$ orbit, see \\cite{carlson}\n\n  We therefore find two horizontal maps:\n  \\begin{itemize}\n    \\item Horizontal $SU(4,22)$ orbits of maximum dimension $88$.\n    \\item Periods of quintic surfaces, a \\emph{maximal} integral manifold, see \\cite{carlsondonagi} of dimension $40$ (the dimension of the moduli space of quintic surfaces).\n  \\end{itemize}\n\n  In general, period domains, can have maximal integral manifolds of many different dimensions. Hypersurfaces generally yield integral manifolds of rather small dimension compared to the the maximum possible.  We would like to see geometric  examples of maximum, or close to maximum, dimension that come from geometry as opposed to Lie theory.   Hypersurfaces in weighted projective spaces provide such examples.\n\n  \\section{The example}\n  \\label{sec:example}\n\n  Let us consider the weighted projective space $\\P(1,1,2,5)$ with coordinates $x_1,x_2,x_3,x_4$ with weights $1,1,2,5$ respectively.  One may think of $\\P(1,1,2,5)$ as the quotient of $\\C^4$ by the $\\C^*$-action  $\\lambda\\in \\C^*$ which acts by\n  \\begin{equation}\n  \\label{eq:weightaction}\n  \\lambda \\cdot (x_1,x_2,x_3,x_4) \\longrightarrow (\\lambda x_1,\\lambda x_2, \\lambda^2 x_3, \\lambda^5 x_4)\n  \\end{equation}\n  A weighted homogeneous polynomial of degree $d$  is a linear combination of monomials\n  \\begin{equation}\n  \\label{eq:monomials}\n  x_1^{k_1} x_2^{k_2} x_3^{k_3}x_4^{k_4} \\text{ of total weighted degree } d = k_1 + k_2 + 2 k_3 + 5 k_4\n  \\end{equation}\n\n  For fixed $d$, the collection of weighted polynomials of degree $d$ forms a vector space that we will denote $S_d(1,1,2,5)$, or, simply $S_d$.   The direct sum $S(1,1,2,5) = \\oplus_d S_d(1,1,2,5)$ is the algebra of weighted homogeneous polynomials.\n\n  Any $f\\in S_d$ defines a subvariety $V_f\\subset P(1,1,2,5)$, namely $V_f = \\{(x_1:x_2:x_3:x_4) | f(x_1,x_2,x_3,x_4) = 0 \\}$.  If the only common solution of\n\n  \\begin{equation}\n  \\frac{\\partial f}{\\partial x_1} = 0,\\dots, \\frac{\\partial f}{\\partial x_4} =0  \\nonumber\n  \\end{equation}\n\n  is  $(0,0,0,0)$, then $V_f$ is called a \\emph{quasi-smooth} subvariety.  It is smooth except possibly for quotient singularities. Topologically it is a rational homology manifold, and in particular satisfies Poincar\\\'e duality over $\\Q$.  Its second cohomology has a pure Hodge structure of weight two, polarized by the intersection form.\n\n  Fix $d$ and let $S_d^0\\subset S_d$ denote the set, possibly empty, of all $f\\in S_d$ for which $V_f$ is quasi-smooth.  For example, if $f\\in S_4$, then no monomial in  $f$ can contain the variable $x_4$ of weight $5$, so $\\frac{\\partial f}{\\partial x_4} = 0$ for all $f\\in S_4$.  Therefore $S_4^0 =\\emptyset$ since $(0:0:0:1)$ is a singular point of all $f\\in S_4$.  On the other hand, a polynomial  in $S_d$ is a sum of powers of \\emph{all}  of the variables defines a Fermat hypersurface.   These are always quasi-smooth.  In our case, one has the Fermat surface\n\n  \\begin{equation}\n  \\label{eq:fermat}\n  f_0 (x_1,x_2,x_3,x_4) = x_1^{10} + x_2^{10}  + x_3^5 + x_4^2 \\in S_{10}^0,\n  \\end{equation}\n\n  It has a rich structure, and, in particular, is double cover of  the 2-dimensional weighted projective plane with weights $1, 1, 2$, branched over a curve of degree ten.\n\n  The complement $\\Delta_d = S_d \\setminus S_d^0$ is a subvariety of $S_d$.  It is a proper subvariety if $S_d^0\\ne \\emptyset$.\n\n\n  Assume $S_d^0\\ne\\emptyset $.  Then $\\Delta_d$ has complex codimension $1$ in $S_d$. Consequently, $S_d^0$ is connnected and we obtain a topologically locally trivial fibration $\\var\\to S_d^0$ where the fiber over $f$ is the variety $V_f$:\n  \\begin{eqnarray}\n  \\label{eq:universalfamily}\n  \\begin{array}{ccc}\n  \\var = \\{(f,x) | f(x) = 0\\} & \\subset  & S_d^0 \\times \\P(1,1,2,5) \\\\\n  \\Big\\downarrow& &\\Big\\downarrow \\\\\n  S_d^0  & = & S_d^0\n  \\end{array}\n  \\end{eqnarray}\n\n  Fix a base point  $f_0\\in S_d^0$.  Then there  is a monodromy representation $\\rho:\\pi_1(S_d^0,f_0) \\to Aut(H^2(V_{f_0}))$, where $Aut$ is the group of automorphisms respecting all topological structures, in particular, the intersection form.  As $f$ varies, we transport the Hodge structure on $H^2(V_f,\\C)_{prim} = H^{2,0}(V_f)\\oplus H^{1,1}(V_f)_{prim} \\oplus H^{0,2} (V_f)$ to $H^2(V_{f_0})_{prim}$, as explained in \\S \\ref{sec:introduction}, thus obtaining a point $F(f)\\in D$, well defined up to the action of the image of $\\rho$, where $D$ is the classifying space of Hodge structures on $H^2(V_{f_0})_{prim}$.   This defines   holomorphic period maps as in (\\ref{eq:periodmaps}), namely\n\n\n  \\begin{eqnarray}\n  \\begin{array}{ccc}\n  \\label{eq:universalperiodmaps}\n  \\widetilde{S_{d}^0} &  \\buildrel \\widetilde{F} \\over\\longrightarrow  & D  \\\\\n  {p}\\Big\\downarrow & & \\Big\\downarrow   \\\\\n  S_{d}^0 & \\buildrel F\\over \\longrightarrow & \\Gamma\\backslash D\n  \\end{array}\n  \\end{eqnarray}\n\n\n\n  where $\\Gamma$ denotes the image of the monodromy representation $\\rho$, and\n  which is \\emph{horizontal} in the sense that\n\n  \\begin{equation}\n  d\\widetilde{F} : T \\widetilde{S}_d^0 \\longrightarrow  \\widetilde{F}^* T_hD.\n  \\end{equation}\n\n  We  must look carefully at some local properties of the period map $F$.   Let $U$ be a simply connected neighborhood of the base point $f_0$.  The inverse image of $U$ in $\\widetilde{S^0_d}$\n  is a disjoint union of open sets isomorphic to $U$.  On such a  component of the inverse image, we can replace the  map $\\widetilde{F}$ of (\\ref{eq:universalperiodmaps}) by its restriction to a that connected component.  Identifying it with $U$, we may replace (\\ref{eq:universalperiodmaps}) by the simpler diagram\n  \\begin{eqnarray}\n  \\begin{array}{ccc}\n  \\label{eq:localuniversalperiodmaps}\n  &  & D  \\\\\n   &\\buildrel \\widetilde{F}  \\over \\nearrow & \\Big\\downarrow   \\\\\n  U & \\buildrel F\\over \\longrightarrow & \\Gamma\\backslash D\n  \\end{array}\n  \\end{eqnarray}\n  Thus the period map $F$ to $\\Gamma\\backslash D$ is \\emph{locally liftable} to $D$.  This is only an issue in the presence of fixed points.\n\n\n  Our example of a horizontal non-geodesic $V\\subset \\Gamma\\backslash D$ will be $\\overline{F(S_d^0)}$, the closure of the image of $F$, for suitable $d$.   We proceed to the necessary computations.\n\n\n  \\subsection{The Jacobian Ring}\n  \\label{subsec:jacobianring}\n\n  First of all,  choose $d = 10$, and  consider the space $S_{10}(1,1,2,5)$ of weighted homogeneous polynomials of degree $10$ with weights $(1,1,2,5)$.  Some computer experimentation led us to this choice. As noted above, the \\lq\\lq Fermat hypersurface\\rq\\rq  $V_{f_0}$ is defined by an element of $S_{10}$, and so  $S_{10}^0 \\ne\\emptyset$.\n  Given $f\\in S_{10}^0$, let\n\n\\begin{enumerate}\n\n\\item $J(f)\\subset S$ denote the \\emph{Jacobian ideal of $f$}, namely the ideal generated by the partial derivatives of $f$.\n\n\\item $R(f) = S/J(f)$ be the \\emph{Jacobian ring} of $f$.\n\n\\end{enumerate}\n\n\n\n  The Hodge decomposition and the differential of the period map have very explicit descriptions in terms of the graded ring $R(f)$ for $f\\in S_{10}^0$.  Since the dimensions of the graded components $R_k(f)$  are independent of $f$, we often write simply $R_k$ for $R_k(f)$.\n\n\\begin{proposition}\n\\label{prop:jacobiancomputations} Let $f\\in S_{10}^0$ and let $J$ and $R$ be as just defined.  Then\n\n\n\\begin{enumerate}\n\n\\item $R_1 \\cong H^{2,0}$\n\n\\item $R_{11} \\cong H^{1,1}$\n\n\\item $R_{21}\\cong H^{0,2}$\n\n\\item $R_{22}\\cong \\C$\n\n\\item $R_k = 0$ for $k>22$\n\n\n\\item For $0\\le i \\le 22$, the pairing $R_i\\otimes R_{22-i}\\to R_{22}$ is non-degenerate.\n\n\n\\end{enumerate}\n\\end{proposition}\n\n    \\begin{proof}\n   Statements of this type for projective hypersurfaces are consequences of the Griffiths residue calculus.  The analogous statements  for weighted projective hypersurfaces are proved in Theorem 1 of \\cite{steenbrink} and in   \\S4.3 of  \\cite{dolgachev}.\n    \\end{proof}\n\n\nApplying the above to our situation, and using the polynomial $f_0$ to do computations,\nwe find\n\n\\begin{lemma}\n\\label{lem:dimensions}\n\n\\begin{enumerate}\n    \\item $h^{2,0} =2$, $h^{1,1} = 28$, $h^{0,2} = 2$\n    \\item $D = SO(4,28) /U(2) \\times SO(28)$\n    \\item $D$ has dimension $57$.\n   \\item  The horizontal sub-bundle $T_h D = Hom(\\hodge^{2,0},\\hodge^{1,1})$ has fiber dimension $56$, hence is a holomorphic contact structure on $D$.\n\n\\end{enumerate}\n\n\\end{lemma}\n\n\n\\strong{Proof}\n\n   Since the Hodge numbers are independent of $f$, we can compute them for $f_0$.  Using  Proposition \\ref{prop:jacobiancomputations}, this is the same as computing the spaces $R_k(f_0)$, which amounts to a straightforward exercise of counting monomials.  First of all, $J$ is the ideal generated by $x_1^9,x_2^9, x_3^4,x_4$.  We find that\n\n\\begin{enumerate}\n\n\\item $R_1 = S_1 = \\left< x_1,x_2 \\right> $ is the vector space with basis $x_1,x_2$, so that  $h^{2,0} = h^{0,2} = 2$.\n\n\\item $R_{11}$: to find a basis for this space, list all monomials that do not contain any of the above generators of $J$.  In particular, $x_4$ does not appear, so a basis consists of monomials in $x_1,x_2,x_3$ that do not contain $x_1^9, x_2^9,x_3^4$.  These can be conveniently grouped by powers of $x_3$:\n\n\\item $G_3 = \\left< x_1^ix_2^{5-i}x_3^3 | i = 0,\\dots 5 \\right>$ is six-dimensional\n\n    \\item $G_2 = \\left< x_1^ix_2^{7-i}x_3^2 | i = 0,\\dots 5 \\right>$ is eight-dimensional\n\n    \\item $G_1 = \\left< x_1^ix_2^{9-i}x_3 | i = 1,\\dots 8 \\right>$ is eight-dimensional\n\n    \\item $G_0 = \\left< x_1^ix_2^{11-i} | i = 3,\\dots 8 \\right>$  is six-dimensional\n\n\n\\end{enumerate}\n\n\\smallskip\n\n  Therefore $\\dim R_{11} = h^{1,1} = 28$\n\nIt follows that $D$ classifies polarized Hodge structures with Hodge numbers $2,28,2$.  From the discussion in the introduction, it follows that $D = SO(4,28)/U(2)\\times SO(28)$, which has dimension $57$ and  its  sub-bundle $T_hD = Hom(\\hodge^{2,0},\\hodge^{1,1})$ has fiber dimension $h^{2,0}h^{1,1} = 56$.  The easiest way to visualize $D$, and to see its dimension and the structure of the horizontal sub-bundle,  is to use its fibration (\\ref{eq:fibration}) over the symmetric space.  In this case the symmetric space has real dimension $4\\cdot 28$ and the fiber  is a projective line:\n\n      \\begin{eqnarray}\n      \\label{eq:fibrationD}\n    \\begin{array}{ccc}\n  SO(4)/U(2) & \\longrightarrow & SO(4,28)/ U(2)\\times SO(28) \\\\\n  & & \\Big\\downarrow {\\pi}      \\\\\n  & &  SO(4,28) / S(O(4)\\times O(28))\n  \\end{array}\n  \\end{eqnarray}\n\n\n  It is easy to see that $d\\pi$ maps the fibers of $T_h D$ isomorphically (as real vector spaces) to the tangent spaces to the symmetric space. Thus $T_hD$ coincides, in this case, with the differential-geometric horizontal bundle.\n\nTo see that $T_hD$ is a holomorphic contact structure, recall the identification (\\ref{eq:hodgebundles}), $TD \\cong Hom_{\\left< \\ , \\  \\right>}(\\hodge^{2,0},\\hodge^{1,1}\\oplus\\hodge^{0,2})$.  Under this identification, $T_hD$ is identified with $Hom(\\hodge^{2,0},\\hodge^{1,1})$ as the kernel of the projection to $Hom_{< \\ , \\  >}(\\hodge^{2,0},\\hodge^{0,2})$.   Since\n  $Hom_{\\left< \\ , \\  \\right>}(H^{2,0},H^{0,2})$ is a space of skew-symmetric en\\-do\\-mor\\-phisms,  and since  $\\dim H^{2,0}$  $= 2$,\n  we see that  $$\\dim Hom_{\\left< \\ ,\\ \\right>}(H^{2,0},H^{0,2}) = 1$$ The projection is a one-form $\\omega$ with values in the line bundle  $T_vD = Hom_{\\left< \\ , \\ \\right>}(H^{2,0},H^{0,2})$ whose kernel is $T_hD$.  Here $T_vD$ stands for the vertical bundle. To be a contact structure means that it is totally non-integrable.  This means the following: if $X,Y$ are horizontal vector fields, then, for all $p\\in D$,  $\\omega([X,Y])_p$ depends only on $X_p,Y_p$, hence defines a bundle map $\\Lambda^2 T_hD\\to T_vD$.  To be a contact structure then means that this is a non-degenerate pairing. In other words, the resulting map $T_h D\\to Hom(T_h D, T_v D)$ is an isomorphism.  This is a reformulation of the local coordinate condition $\\omega\\wedge (d\\omega)^{28}\\ne 0$ at every point.\n\n  Under our identification $T_h D \\cong Hom(\\hodge^{2,0},\\hodge^{1,1})$, it is easy to check that  $\\omega([X,Y])= X^t Y - Y^t X$, where the transpose is with respect to $< \\ , \\ >$, see \\S 6 of \\cite{carlsontoledotrans} for details.  One easily checks  that this paring is non-degenerate, so that we indeed have a contact structure.\n\n\n   Next, we  compute $dF$, where $F:S_{10}^0\\to \\Gamma\\backslash D$ is the period map of (\\ref{eq:universalperiodmaps}). The  group $G(1,1,2,5)$ of automorphisms of $P(1,1,2,5)$ acts on $S_{10}^0$ and  $F$ is  constant on orbits, so it should factor through  an appropriate quotient.  Since the group is not reductive, we avoid the technicalities of forming quotients, by working mostly on the  infinitesimal level.\n\n   Given $f\\in S_{10}^0$, the tangent space at $f$ to its $G(1,1,2,5)$-orbit is $J_{10}(f)$.  When we have a quotient, $R_{10}(f)$ can be identified with the tangent space to the quotient at the orbit of $f$.   We  use this fact as a guiding principle, relying on the fact that $d_fF$ vanishes on $J_{10}(f)$ and hence factors through $R_{10}(f)$. Thus we avoid working with the quotient directly.\n\n\n  To be more precise,  fix $f\\in S_{10}^0$ and a simply connected neighborhood $U$ of $f$.  Since $\\Gamma\\backslash D$ need not be a manifold (and will not be at points fixed by non-identity elements of $\\Gamma$), what we actually want to compute is $d_f\\widetilde{F}$, where $\\widetilde{F}:U\\to D$ is a local lift of $F$ as in (\\ref{eq:localuniversalperiodmaps}).\n\n\n\n\n  Since $U$ is an open subset of the vector space $S_{10}$, there is a canonical identification\n  \\begin{equation}\n  \\label{eq:identifytangents}\n  T_fU \\cong S_{10} \\ \\text{ by translation. }\n  \\end{equation}\n  Under this identification, $J_{10}(f)$ is the tangent space to the orbit of $f$. Consequently, $d_f\\widetilde{F}:S_{10}\\to T_hD$ vanishes on  $J_{10}(f)$, hence factors through $R_{10}(f)$.\n  Keeping in mind the  exact sequence\n   \\begin{equation}\n  \\label{eq:exactsequence}\n  0\\longrightarrow J_{10}(f) \\longrightarrow S_{10}\\buildrel p\\over\\longrightarrow R_{10}(f)\\longrightarrow 0,\n  \\end{equation}\n  we can state the main tool for computing differentials of period maps:\n\n\\begin{proposition}\n\n  \\label{prop:multiplication}\n  Under the isomorphisms of Proposition \\ref{prop:jacobiancomputations}, the isomorphism (\\ref{eq:identifytangents}), and $p$ as in (\\ref{eq:exactsequence}),  we have a commutative diagram\n\n  \\begin{eqnarray}\n  \\begin{array}{ccccc}\n  T_f U  &  &\\buildrel d_f\\widetilde{F} \\over \\longrightarrow & & T_hD \\cong Hom(H^{2,0},H^{1,1})\\\\\n  {\\cong}\\Big\\downarrow & & & & \\Big\\downarrow {\\cong} \\\\\n  S_{10} &\\buildrel p \\over \\longrightarrow & R_{10}(f)  & \\buildrel m \\over \\longrightarrow & Hom(R_1(f),R_{11}(f))\n  \\end{array}\n  \\end{eqnarray}\n\n  where, for $\\phi\\in R_{10}$,  $m(\\phi):R_1\\to R_{11} $ is multiplication by $\\phi$: if $x\\in R_1$, then $m(\\phi)(x) = \\phi x$\n\n\\end{proposition}\n\n  \\begin{proof} This is the content of the residue calculus.  The isomorphisms between holomorphic objects and elements of the Jacobian ring preserve all natural products and pairings.\n  \\end{proof}\n\n  The above proposition will allow us to compute the rank of $d\\widetilde{F}$ at the point $f_0$ of (\\ref{eq:fermat}).  We remark that, up to this point, the residue calculus and the corresponding algebraic facts about the Jacobian ring have closely paralleled the projective case.  But the failure of Macauley\'s theorem in the weighted projective case forces us to look carefully at the remaining statements.   Most results in the literature require assumptions on the weights, and on the degree, that are not satisfied for degree $10$ and weights $(1,1,2,5)$.  See the introduction and \\S 1 of \\cite{donagitu} for a general discussion of the possible difficulties that can appear in the weighted case.\n\n\\begin{proposition}\n  \\label{prop:rank}\n\n\\begin{enumerate}\n  \\item The rank of $d\\widetilde{F}$ at $f_0$ is $28$, which is the maximum possible rank of a horizontal holomorphic map.\n\n  \\item Let $W\\subset T_h D$ denote the image of $d\\widetilde{F}$.\n  Under the identification $T_hD \\cong Hom(H^{2,0},H^{1,1})$, we have:\n\n    \\item For each $v\\in H^{2,0}$, the subspace $Wv =_{def} \\{Xv\\  | \\  X\\in W\\}\\subset H^{1,1}$ has dimension $26$.\n\n    \\item $\\{Xv \\ | \\  v\\in H^{2,0}, X\\in W\\} = H^{1,1}$\n\n\\end{enumerate}\n\\end{proposition}\n\n\n\\strong{Proof}\n  By Proposition \\ref{prop:multiplication} we need to compute the multiplication map $R_{10}\\to Hom(R_1,R_{11})$.  In the proof of Lemma \\ref{lem:dimensions} we found  a basis for $R_{11}$, and we can do a similar calculation with $R_{10}$:  a basis will be given by the monomials $x_1^a,x_2^b,x_3^c$ of total weight $10$ with $0\\le a,b \\le 8$ and $0\\le c \\le 3$.  These can again be conveniently grouped by the powers of $x_3$:\n\n\n\\begin{enumerate}\n\n    \\item $G_3\' =\\left< x_1^ix_2^{4-i}x_3^3 | i = 0,\\dots 5 \\right>$ is five-dimensional\n    \\item $G_2\' =\\left< x_1^ix_2^{6-i}x_3^2 | i = 0,\\dots 5 \\right>$ is seven-dimensional\n    \\item $G_1\' =\\left< x_1^ix_2^{8-i}x_3 | i = 1,\\dots 8 \\right>$ is nine-dimensional\n    \\item $G_0\' =\\left< x_1^ix_2^{10-i} | i = 2,\\dots 8 \\right>$  is seven-dimensional\n\n\\end{enumerate}\n\n\n\\smallskip\n\n  Therefore $\\dim R_{10} = 28$, as claimed.\n\n  Next, we examine the map $m:R_{10}\\to Hom(R_1,R_{11})$, where $m(\\phi)$ is the homomorphism $m(\\phi)(x) = \\phi x$.  We claim that $m$  is injective.  Since $R_1=\\left< x_1,x_2 \\right>$, it suffices to show that if $\\phi\\in R_{10}$ and both $\\phi x_1 = \\phi x_2 = 0$, then $\\phi = 0$.  We have\n\n  \\begin{equation}\n  R_{10}=G_3\'\\oplus G_2\'\\oplus G_2\'\\oplus G_0\' \\ \\text{ and }\\  R_{11} = G_3\\oplus G_2 \\oplus G_1 \\oplus G_0,\n  \\end{equation}\n\n  it is easy to see that multiplication by $R_1$ maps $G_i\'$ to $G_i$, that multiplication by $x_1$ is injective for $i=2,3$, and that the same holds for multiplication by $x_2$.  Moreover multiplication by either $x_1$ or $x_2$ is surjective for $i=0,1$ and the intersection of their kernels is zero.  Writing $\\phi = \\phi_3 + \\dots + \\phi_0$ and applying this information we see that $\\phi x_1 =\\phi x_2 = 0$ implies $\\phi = 0$.\n\n  Combining these two facts, we see that $d_{f_0}\\widetilde{F}$ has rank $28$.  Since its image is an integral element of the holomorphic contact structure $T_hD$, its dimension can be at most half of $56$, the fiber dimension of $T_hD$.  Therefore $\\widetilde{F}$ has the highest possible rank of a horizontal holomorphic map, namely $28$.\n\n\n  The second part is easily verified using the above bases of monomials. For $v=x_1$ or $x_2$, both assertions are clear, and they are easily checked for linear combinations $v = a x_1  + b x_2$.\n\n\n\n\n\n\n  \\subsection{A closed horizontal subvariety of maximum dimension}\n\n  Consider now the horizontal holomorphic map $F:S_{10}^0 \\to \\Gamma\\backslash D$.  Following Griffiths (see \\S 9 of \\cite{griffiths}) we can embed $S_{10}^0 \\subset S\'$, where $S\'$  is a smooth complex manifold containing $S_{10}^0$ as the complement of an analytic subset. One does this by  compactifying with normal crossing divisors.  One can then  extend over the branches of the compactifying divisor for which the monodromy is finite to obtain a proper horizontal holomorphic map $F:S\'\\to\\Gamma\\backslash D$.  Then  $F(S\')$ is a closed analytic subvariety of $\\Gamma\\backslash D$ containing $F(S_{10}^0)$ as the complement  of an analytic subvariety.\n\n  At the point $f_0\\in S_{10}^0$, we found that a local lift $\\widetilde{F}:U\\to D$ has maximum rank $28$. Consequently, there is a neighborhood $U\'$ of $f_0$, where $U\'\\subset U$,  $\\widetilde{F}$ has rank $28$,   and $\\widetilde{F}|_{U\'}$ is a submersion onto its image.  Therefore  $\\widetilde{F}(U\')$ is a $28$-dimensional horizontal submanifold of $D$ containing $\\widetilde{F}(f_0)$.\n\n  We now examine the local structure of $\\Gamma\\backslash D$.  Since $f_0$ has symmetries, $\\widetilde{F}(f_0)$ is fixed by some element $\\gamma\\in \\Gamma, \\gamma\\ne id$.  Let $\\Gamma_0$ denote the subgroup of $\\Gamma$ fixing  $\\widetilde{F}(f_0)$.  It is necessarily a finite group. If $N$ is a $\\Gamma_0$-invariant neighborhood of $\\widetilde{F}(f_0)$, then $\\Gamma_0\\backslash N$ is an orbifold  neighborhood of $F(f_0)$ in the orbifold $\\Gamma\\backslash D$, and $F(f_0)$ is a singular point of this orbifold.  Strictly speaking, we do not have a tangent space at $F(f_0)$.  But we can move away from $f_0$ in the above neighborhood $U\'$ to find non-singular points:\n\n\\begin{lemma}\n\\label{lem:generic}\nLet $W\\subset (T_h)_{\\widetilde{F}(f_0)} D$ denote the image of $d_{(f_0)}\\widetilde{F}$.  Then\n\n\n\\begin{enumerate}\n    \\item $W$ is not fixed by any $\\gamma\\in\\Gamma_0$, $\\gamma\\ne id$.\n\n    \\item $W$ is not tangent to any horizontal geodesic embedding of  $SU(2,14)/S(U(2)\\times U(14))$ passing through $\\widetilde{F}(f_0)$.\n\n\\end{enumerate}\n\\end{lemma}\n\n  \\strong{Proof}\n\n  As usual, identify $T_hD$ with $Hom(H^{2,0},H^{1,1})$, and let $V = H^{2,0}$,   $V\' = H^{1,1}$.  The group $\\Gamma_0$ acts on $T_h D$ through the action of the isotropy group $U(2)\\times SO(28)$ of $\\widetilde{F}(f_0)$.  Namely $(A,B)$, where $A\\in U(2)$ and $B\\in SO(28)$ acts on $X\\in Hom(V,V\')$ by $X\\to BXA^{-1}$.\n\n\n  Let us prove the stronger statement that $W$ is not fixed by any element of $U(2)\\times SO(28)$:  Suppose $X$ is fixed by $(A,B)\\ne id$, say $A\\ne id$.  Then $BX = XA$.   Let $\\lambda_1,\\lambda_2$ be the eigenvalues of $A$ (roots  of unity), and assume, first, that $\\lambda_1\\ne \\lambda_2$ and neither eigenvalue is real.  Let  $V_1,V_2$ be the corresponding eigenspaces, it is easy to see that, for $v_i\\in V_i$, $Xv_i$ is an eigenvector for $B$ with eigenvalue $\\lambda_i$.  From this we see that $V\' = V_1\'\\oplus V_2\'\\oplus V_3\'$, where $V_1\',V_2\'$ are the eigenspaces of $B$ for $\\lambda_1,\\lambda_2$ respectively,  and $V_3\'$ is their orthogonal complement. If $X\\in W$, then $X(V_i)\\subset V_i\'$ for $i=1,2$.  In other words, $W\\subset Hom(V_1,V_1\')\\oplus Hom(V_2,V_2\')$.  Observe that  $\\dim V_1\', \\dim V_2\'\\le 14$, since $B$ is real and its eigenvalues come in complex conjugate pairs.  Therefore, if $v_1\\in V_1$,\n  $$\n  \\{Xv_1 \\ | \\ X\\in W\\} \\subset V_1\'.\n  $$\n  Since $\\dim V_1\'\\le 14$, this contradicts Proposition  \\ref{prop:rank}.  The remaining possibilities for $\\lambda_1,\\lambda_2$ are  handled by similar  arguments.  This proves that $W$ is not fixed by any element of the isotropy group of $\\widetilde{F}(f_0)$. The first part of the Lemma is proved.\n\n  For the second part, recall from \\S \\ref{subsec:construction} that the tangent space to a geodesic embedding of the symmetric space of $SU(2,14)$ through the point $V = H^{2,0}$ is determined by a complex structure $J$ on $V\' = H^{1,1}$ and is the subspace  of $X\\in Hom(V,V\')$ satisfying $JX = Xi$, in other words, the fixed point set of the element $(i,J)$ of $U(2)\\times SO(28)$, which we have  already excluded.\n\n\n\n  An immediate consequence of this lemma is that $\\widetilde{F}(U\')$ is not fixed by any $\\gamma\\in\\Gamma_0$, so there exist $f\\in U\'$ with $F(f)$ a smooth point of $\\Gamma\\backslash D$.  The same must be true in a neighborhood $U\'\'\\subset U\'$ of $f$, so $F|_{U\'\'}:U\'\'\\to (\\Gamma\\backslash D )^0$  (the regular points of $\\Gamma\\backslash D$) and rank of $dF$ must be $28$ on $U\'\'$.\n\nIn summary:\n\n\\begin{theorem}\n  Let $S\'$, $F:S\'\\to \\Gamma\\backslash D$ and $\\widetilde{F}:\\widetilde{S_{10}^0} \\to D$  be as above.  Then\n\n\n\\begin{enumerate}\n    \\item $F$ is a proper horizontal holomorphic map.\n    \\item There is a proper analytic subvariety $Z\\subset S\'$ so that, if $S\'\' = S\'\\setminus Z$,  then  $F|_{S\'\'}:S\'\' \\to (\\Gamma\\backslash D )^0$ and $dF$ has rank $28$ on $S\'\'$.\n    \\item $F(S\')$ is a closed horizontal subvariety of $\\Gamma\\backslash D$ of maximum possible dimension $28$.\n\n    \\item If $x\\in S\'\'$, the tangent space to $F(S\')$ at $F(x)$ is not the tangent space to any totally geodesic immersion of the symmetric space of $SU(2,14)$ in $\\Gamma\\backslash D$.\n\n    \\item Alternatively, if $x\\in \\widetilde{S_{10}^0}$ lies in the dense open set where $d_x \\widetilde{F}$ has maximum rank $28$,   the image of $d_x \\widetilde{F}$ is not the  tangent space to a geodesic embedding of the symmetric space  $SU(2,14)$ in $D$.\n\n\\end{enumerate}\n\\end{theorem}\n\n  \\section{Geodesic submanifolds and integral elements}\n  \\label{sec:integralelements}\n\n  We close with some remarks on integral elements of contact structures.  The period domains for which the horizontal bundle gives a contact structure are the twistor spaces of the quaternionic-K\\"ahler symmetric spaces, also called the Wolf spaces, see \\cite{wolf} for their classification.  We briefly discuss two examples from this point of view: our example $D$, associated to the symmetric space $SO(4,28)/S(O(4)\\times O(28))$, and another example we call $D\'$ associated to quaternionic hyperbolic space.\n\n\n\n  Whenever the horizontal sub-bundle $T_hD$ of a domain $D$  is a contact structure,  we know that each fiber of $T_h D$ has a symplectic structure, and the integral elements in that fiber are the Lagrangian subspaces of this symplectic structure.  Lagrangian subspaces of a $2g$-dimensional symplectic space are parametrized by $Sp(g)/U(g)$, the compact dual of the Siegel upper half plane of genus $g$.\n\n  If $D = SO(4,28)/U(2)\\times SO(28)$ is the domain we have been studying, of dimension $57$, $T_hD$  of dimension $56$, the integral elements in a fiber of $T_hD$ are parametrized by $Sp(28)/U(28)$,  a manifold of complex dimension $(28 \\cdot 29)/2 = 406$.  On the other hand, the totally geodesic embeddings of $D_1$, the symmetric space for $SU(2,14)$ through a fixed point in $D$ are parametrized by the choice of complex structure $J$ on the space $H^+$ as in \\S \\ref{subsec:construction}.  These are in turn parametrized by the space $SO(28)/U(14)$ of dimension $28\\cdot 27 - 14^2 = 14\\cdot 13  = 182$.  Thus we see that the space of tangents to geodesic embeddings of $SU(2,14)$ is a rather small subset of the space of Lagrangian subspaces.  We therefore expect the generic horizontal map to miss these embeddings.  In a way, this is what made our example possible.\n\n  \\subsection{The quaternionic hyperbolic space}\n  \\label{subsec:quaternionic}\n\n  We conclude with a related problem, which was the motivation for writing this paper.   Consider the period domain $D\'$ associated to the quaternionic hyperbolic space, namely\n     \\begin{eqnarray}\n      \\label{eq:fibrationquat}\n    \\begin{array}{ccc}\n  Sp(1)/U(1) & \\longrightarrow & D\' = Sp(1,n)/ U(1)\\times Sp(n) \\\\\n  & & \\Big\\downarrow {\\pi}      \\\\\n  & &  Sp(1,n) / Sp(1)\\cdot Sp(n)\n  \\end{array}\n  \\end{eqnarray}\n  We can think of this domain as classifying Hodge structures on $\\R^{4n+4}\\cong \\bH^{n+1}$ with Hodge numbers $2,4n,2$ which are stable under right multiplication by quaternions.  Equivalently, we can think of points in this domain as pairs $L,J$ where $L\\subset \\bH^{n+1}$ is a positive right-quaternionic line and $J:L\\to L$ is a right quaternionic linear complex structure on $L$ orthogonal with respect to the polarizing form $\\left< \\ , \\ \\right>$.  Let $L^\\perp$ denote the orthogonal complement of $L$ in $\\bH^{n=1}$ and $L_\\C, L_\\C^\\perp$ their complexifications.  Then the horizontal tangent space to the domain $D\'$ is\n\n  \\begin{equation}\n  T_n D\' = _\\C\\Hom_\\bH (L^{1,0},L_\\C^\\perp)\\subset TD\' = _\\C\\Hom_\\bH (L^{1,0},L_\\C^\\perp\\oplus L^{0,1})  \\nonumber\n  \\end{equation}\n\n  where $_\\C\\Hom_\\bH$ denotes left $\\C$-linear and right $\\bH$-linear homomorphisms.  See \\S 6 of \\cite{carlsontoledo} for a more detailed discussion.\n\n  Once again, $D\'$ has complex dimension $2n+1$ and $T_h D\'$ has fiber dimension $2n$, so it is a holomorphic contact structure on $D\'$.\n  Each fiber  of $T_hD\'$ has a symplectic structure, and the integral elements of the contact structure in a fixed fiber coincide with the Lagrangians of this symplectic structure, and are therefore parametrized by $Sp(n)/U(n)$.\n\n  We also have horizontal totally geodesic embeddings of the symmetric space of $SU(1,n)$ in $D\'$, namely the unit ball or complex hyperbolic space $SU(1,n)/U(n)$.  The group $Sp(n)$ acts transitively on the  embeddings passing through a point $(L,J)$, corresponding to orthogonal right $\\bH$-linear  complex structures on $L^\\perp$, hence parametrized by the same homogeneous space $Sp(n)/U(n)$ that parametrizes the Lagrangians.  Thus, for $D\'$, every horizontal subvariety of maximum dimension $n$ is tangent, at each smooth point, to a horizontal totally geodesic  complex hyperbolic $n$-space.  (We used this fact in \\S 6 of \\cite{carlsontoledo} to give a structure theory for harmonic maps of K\\"ahler manifolds to manifolds covered by quaternionic hyperbolic space).\n\n  \\begin{problem}\n  Find examples of discrete groups $\\Gamma\\subset Sp(1,n)$ and closed horizontal subvarieties $V\\subset \\Gamma\\backslash D\'$ that are not totally geodesic.\n  \\end{problem}\n\n\n\n\\begin{thebibliography}\n\\bibitem[Ca86]{carlson} J. A. Carlson, \\emph{Bounds on the dimension of a variation of Hodge Structure}, Trans. AMS \\strong{294} (1986), 45 -- 64.\n\n\\bibitem[CD87]{carlsondonagi} J. A. Carlson and R. Donagi, \\emph{Hypersurface variations are maximal}, I, Invent. Math. \\strong{89} (1987) 371--374.\n\n\\bibitem[CT89a]{carlsontoledotrans} J. A. Carlson and D. Toledo, \\emph{Variations of Hodge structure, Legendre submanifolds, and accessibility}, Trans. AMS \\strong{311} (1989), 391--411\n\n\\bibitem[CT89b]{carlsontoledo} J.A. Carlson and D. Toledo, \\emph{Harmonic mappings of K\\"ahler manifolds to locally symmetric spaces},  Pub. Maths. IHES \\strong{69} (1989), 173--201.\n\n\\bibitem[Do82]{dolgachev} I. Dolgachev, \\emph{Weighted projective varieties}, in Lecture Notes in Mathematics \\strong{956}, 34--71, Springer, 1982.\n\n\\bibitem[DT87]{donagitu}  R. Donagi and L. W. Tu, Generic Torelli for weighted hypersurfaces, Math. Annalen \\strong{276} (1987), 399 -- 413.\n\n\\bibitem[G70]{griffiths} P. A, Griffiths, Periods of integrals on algebraic manifolds, III, Pub. Maths. IHES, \\strong{38} (1970), 125 --180.\n\n\\bibitem[S77]{steenbrink}  J. Steenbrink, Intersection form for quasi-homogeneous singularities, Comp. Math. \\strong{34} (1977), 211--223.\n\n\\bibitem[W65]{wolf} J. A Wolf, Complex homogeneous contact manifolds and quaternionic symmetric spaces, Jour. Math. Mechanics \\strong{14} (1965), 1033--1048.\n\n\\end{thebibliography}\n\n\n';
var author$project$Source$report = '\n\\title{MiniLaTeX: Technical Report}\n\n\\author{James Carlson}\n\n\\email{jxxcarlson at gmail}\n\n\\date{October 29, 2017}\n\n\\revision{January 16, 2017}\n\n\n\n\\maketitle\n\n\n\\begin{abstract}\nThe aims of the MiniLaTeX project are (1) to establish a subset\nof LaTeX which can be rendered either as HTML (for the browser) or as PDF (for print and display), (2) to implement a reference parser and renderer for MiniLaTeX, (3) to provide an online editor/reader for MiniLaTeX documents using the parser/renderer.  As proof of concept, this document is written in MiniLaTeX  and is distributed via \\href{http://www.knode.io}{www.knode.io}, an implementation of (3).\nTo experiment with MiniLaTeX, take a look at the \\href{https://jxxcarlson.github.io/app/minilatex/src/index.html}{Demo App}.\n\\end{abstract}\n\n\n\\strong{Credits.} \\italic{I wish to acknowledge the generous help that I have received throughout this project from the community at } \\href{http://elmlang.slack.com}{elmlang.slack.com}, \\italic{with special thanks to Ilias van Peer.}\n\n\\tableofcontents\n\n\\section{Introduction}\n\n\nThe introduction of TeX by Donald Knuth, LaTeX by Leslie Lamport, and Postscript/PDF by John Warnock, supported by a vigorous open source community, have given mathematicians, physicists, computer scientists, and engineers the tools they need to produce well-structured documents  with mathematical notation typeset to the very highest esthetic standards.  For dissemination by print and PDF, the problem of mathematical communication is solved.\n\nThe Web, however, offers different challenges.  The MathJax project (\\href{http://www.mathjax.org}{www.mathjax.org}) addresses many of these challenges, and its use is now ubiquitous on platforms such as mathoverflow and on numerous blogs.  There is, however, a gap.  MathJax beautifully renders the purely mathematical part of the text, like the inline text $\\alpha^2 + \\beta^2 = \\gamma^2$, written as\n\n\\begin{verbatim}\n$ \\alpha^2 + \\beta^2 = \\gamma^2 $\n\\end{verbatim}\n\nor like the displayed text\n\n$$\n   \\int_0^1 x^n dx = \\frac{1}{n+1},\n$$\n\nwhich is written as\n\n\\begin{verbatim}\n$$\n   \\int_0^1 x^n dx = \\frac{1}{n+1}\n$$\n\\end{verbatim}\n\nThere remains the rest: macros like \\code{emph}, \\code{section}, \\code{label}, \\code{eqref}, \\code{href}, etc., and a multitude of LaTeX environments from \\italic{theorem} and \\italic{definition} to  \\italic{equation}, \\italic{align}, \\italic{tabular}, \\italic{verbatim}, etc.\n\n It is the aim of this project is to develop a subset of LaTeX, which we call \\italic{MiniLaTeX}, that can be displayed in the browser by a suitable parser-renderer and which can also be run through standard LaTeX tools such as \\code{pdflatex}.\n\nAn experimental web app for using MiniLaTeX in the browser can be found at \\href{http://www.knode.io}{www.knode.io}.  For proof-of-concept examples,  see  the document \\xlinkPublic{445}{MiniLaTeX} on that site.\n\n\\strong{Note.} This document is written in a simplified version of MiniLaTeX (version 0.5).  Below, we describes the current state of the version under development for the planned 1.0 release.  Much of the discussion applies to version 0.5 as well.\n\n\\section{Technology}\n\nThe MiniLaTeX parser/renderer is written in Elm, the functional language with Haskell-like syntax created by Evan Czaplicki.  Elm is best known as language for building robust front-end apps for the web.  The fact that it also has powerful parser tools makes it an excellent choice for a project like MeenyLatex, for which an editor/reader app is needed to make real-world use of the parser/renderer.  The app at \\href{http://www.knode.io}{www.knode.io} talks to a back-end app written using the Phoenix web framework for Elixir  (see \\href{https://elixir-lang.org/}{elixir-lang.org}).  Elixir is the functional programming language based on Erlang created by José Valim.\n\n\\section{Components and Strategy}\n\nThe overall flow of data in MeenyLatex is\n\n$$\n\\text{MiniLaTeX source text} \\longrightarrow\n\\text{AST} \\longrightarrow\n\\text{HTML}\n$$\n\nwhere the \\code{AST} is an abstract syntax tree consisting of a \\code{LatexExpresssion}, to be defined below.  The parser consumes MiniLaTeX source text and produces an AST.\nThe renderer converts the AST into HTML.  Rendering takes two forms. In the first form, it transforms a single \\code{LatexExpression} into HTML.  In the second, the source text is broken into a list of paragraphs and an initial \\code{latexState} is defined.  As each paragraph is consumed by the processor, it is parsed, the  \\code{latexState} is updated, and the AST for the paragraph is rendered into HTML, with the result depending on the updated \\code{latexState}.  The result is a list of HTML strings that is concatenated to give the final HTML.  We will also discuss a \\code{differ}, which speeds up the the edit-save-render cycle as experienced by an author.  The idea is to keep track of changes to paragraphs and only re-render what has changed since the last edit.\n\n\n\n\n\\section{AST and Parser}\n\nThe core technology of MiniLaTeX is the parser.  It consumes MiniLaTeX source text and produces as output an abstract syntax tree (AST).  The AST  is a list of \\code{LatexExpressions}.  \\code{LatexExpressions} are defined recursively by the following Elm code:\n\n\\begin{verbatim}\ntype LatexExpression\n    = LXString String\n    | Comment String\n    | Item Int LatexExpression\n    | InlineMath String\n    | DisplayMath String\n    | Macro String (List LatexExpression)\n    | Environment String LatexExpression\n    | LatexList (List LatexExpression)\n\\end{verbatim}\n\nSource text of the form $ \\$ TEXT \\$ $ parses as $\\tt{InlineMath}\\ TEXT$,  and text of the form $ \\$\\$TEXT \\$\\$ $  parses as $\\tt{DisplayMath}\\ TEXT$\n\nSource of the form $\\backslash item\\ TEXT$ maps to $\\tt{Item\\ 1\\ TEXT}$, while\n $\\backslash itemitem\\ TEXT$ maps to $\\tt{Item\\ 2\\ TEXT}$, etc.\n\nA macro like $\\backslash foo\\{1\\}\\{bar\\}$ maps to $\\tt{Macro "foo" ["1", "bar"]}$ -- the string after Macro is the macro name, and this is followed by the argument list, which may be empty.\n\nFinally, an environment like\n\\begin{verbatim}\n\\begin{theorem}\nBODY\n\\end{theorem}\n\\end{verbatim}\n\nmaps to $\\tt{Environment\\ "theorem"\\ PARSE(BODY)}$,\nwhere $\\tt{PARSE(BODY)}$ is the $\\tt{LatexExpression}$ obtaining by parsing $\\tt{BODY}$.\n\nAs an example, consider the text below.\n\n\\begin{verbatim}\nThis is MiniLaTeX:\n\\begin{theorem}\n  This is a test: $\\alpha^2 = 7$ \\foo{1}\n \\begin{a}\n  la di dah\n\\end{a}\n\\end{theorem}\n\\end{verbatim}\n\nRunning \\code{MeenyLatex.Parser.latexList} on this text results in the following AST:\n\n\\begin{verbatim}\nOk (LatexList (\n  LXString "This is MiniLaTeX:",\n  [Environment "theorem" (\n    LatexList ([\n         LXString "This is a test:",\n         InlineMath "\\\\alpha^2 = 7",\n         Macro "foo" ["1"],\n         Environment "a" (\n              LatexList ([LXString "la di dah"])\n     )]))]))\n\\end{verbatim}\n\nAt the top level it is a list of \\code{LatexExpressions} -- a string and an \\code{Environment}.\nThe body of the environment is a list of \\code{LatexExpressions} -- a string, an \\code{InlineMath} element, a \\code{Macro} with one argument, and another \\code{Environment},  This is a structure which \\code{MeenyLatex.Render.render} can transform into HTML.\n\n\\subsection{Parser Combinators}\n\nThe MiniLaTeX parser, comprising 222 lines of code as of this writing, is built using parser combinators from Evan Czaplicki\'s \\href{https://github.com/elm-tools/parser}{elm-tools/parser} package.  The combinators are akin to those in the Haskell parsec package.  As as example, the main MeenyLatex parsing function is\n\n\\begin{verbatim}\nparse : Parser LatexExpression\nparse =\n    oneOf\n        [ texComment\n        , lazy (\\_ -> environment)\n        , displayMathDollar\n        , displayMathBrackets\n        , inlineMath\n        , macro\n        , words\n        ]\n\\end{verbatim}\n\nThis function tries each of its component parsers in order until it finds one that\nmatches the input text.  The \\code{environment} parser is the most interesting. It captures the environment name and then passes it on to \\code{environmentOfType}.\n\n\n\\begin{verbatim}\nenvironment : Parser LatexExpression\nenvironment =\n    lazy (\\_ -> beginWord |> andThen environmentOfType)\n\\end{verbatim}\n\nThe \\code{environmentOfType}\nfunction acts as a switching yard, routing the action of the parser to the correct function. The \\italic{enumurate} and \\italic{itemize} environments need special handling, while others are handled by \\code{standardEnvironmentBody}.\n\n\\begin{verbatim}\nenvironmentOfType : String -> Parser LatexExpression\nenvironmentOfType envType =\n    let\n        endWord =\n            "\\\\end{" ++ envType ++ "}"\n    in\n    case envType of\n        "enumerate" ->\n            itemEnvironmentBody endWord envType\n        "itemize" ->\n            itemEnvironmentBody endWord envType\n        _ ->\n            standardEnvironmentBody endWord envType\n\\end{verbatim}\n\nA standard environment such as \\italic{theorem} or \\italic{align} is handled like this:\n\n\\begin{verbatim}\nstandardEnvironmentBody endWord envType =\n    succeed identity\n        |. ws\n        |= repeat zeroOrMore parse\n        |. ws\n        |. symbol endWord\n        |. ws\n        |> map LatexList\n        |> map (Environment envType)\n\\end{verbatim}\n\nNote the repeated calls to \\code{parse} in the body of \\code{standardEnvironmentBody}.  Thus an environment can contain a nested sequence of environments, or even a tree thereof..\nThe symbol $|.$ means "use the following parser to recognize text but do not retain it."  Thus $|. \\text{ws}$ means "recognize white space but ignore it."  The symbol  $|$= means "use the following parse and retain what it yields."\n\n\\section{Rendering an AST to HTML}\n\nThis section addresses the second step in the pipelne\n\n$$\n\\text{MiniLaTeX source text} \\longrightarrow\n\\text{AST} \\longrightarrow\n\\text{HTML}\n$$\n\nCode for the second step is housed in the module \\code{MeenyLatex.Render}. The primary function is\n\n\\begin{verbatim}\nrender : LatexState -> LatexExpression -> String\nrender latexState latexExpression =\n    case latexExpression of\n        Comment str ->\n            renderComment str\n        Macro name args ->\n            renderMacro latexState name args\n        Item level latexExpression ->\n            renderItem latexState level latexExpression\n        ETC...\n\\end{verbatim}\n\nThis function dispatches a given \\code{LatexExpression} to its handler, which then computes a string representing the HTML output.  That output depends on the current \\code{latexState} -- a data structure  which holds information about various counters such as section numbers as well as information about cross-references.  One can call \\code{render} on a default \\code{LateExpression} to convert it to HTML.  However, the usual process for rendering a MiniLaTeX document from scratch is to first transform it into logical paragraphs, i.e., a list of strings, then use the \\code{accumulator} function defined below to transform paragraphs one at a time into HTML, updating the \\code{latexState} with each paragraph.\n\nThe accumulator is a function of four variables, as indicated below.  The first argument, \\code{parse}, takes a string as input and parses it to produce a \\code{LatexExpression} as output.  The second, \\code{render}, takes a \\code{LatexExpression} and a \\code{LatexState} as input and produces HTML as output.  The third, \\code{updateState}, takes a \\code{LatexExpression} and a \\code{LatexState} as input and produces a new \\code{LatexState} as output.  The fourth and final argument, \\coce{input}, is the list of strings (logical paragraphs) to be rendered.  The output of the \\code{accumulator} is a tuple consisting of a list of strings, the rendered HTML, and the final \\code{latexState}.\n\n$$\n{\\bf accumulator\\ } \\text{parse render updateState inputList} \\longrightarrow (\\text{outputList}, latexState)\n$$\n\nThe \\code{accumulator} uses \\code{List.foldl} to build up the final list of rendered paragraphs one paragraph at a time, starting with an empty list.  The driver for this operation is the \\code{transformer} function, which we treat below.\n\n\n\\begin{verbatim}\naccumulator :\n    (String -> List LatexExpression)\n    -> (List LatexExpression -> LatexState -> String)\n    -> (List LatexExpression -> LatexState -> LatexState)\n    -> List String\n    -> ( List String, LatexState )\naccumulator parse render updateState inputList =\n    inputList\n        |> List.foldl (transformer parse render updateState) ( [], Render.emptyLatexState )\n\\end{verbatim}\n\nThe role of the \\code{transformer} function is to carry forward the current \\code{latexState}, updating it, and transforming \\code{LatexExpressions} into HTML. A kind of transducer, the \\code{transformer} is a function of five variables:\n\n$$\n{\\bf transformer\\ } \\text{parse render updateState input acc} \\longrightarrow\n(\\text{List renderedInput}, \\text{state})\n$$\n\nHere is the code:\n\n\\begin{verbatim}\ntransformer :\n    (input -> parsedInput)\n    -> (parsedInput -> state -> renderedInput)\n    -> (parsedInput -> state -> state)\n    -> input\n    -> ( List renderedInput, state )\n    -> ( List renderedInput, state )\ntransformer parse render updateState input acc =\n    let\n        ( outputList, state ) =\n            acc\n        parsedInput =\n            parse input\n        newState =\n            updateState parsedInput state\n    in\n        ( outputList ++ [ render parsedInput newState ], newState )\n\\end{verbatim}\n\nTo bundle all this code in convenient form, we also define a function\n\n$$\n{\\bf transformParagraphs\\ } \\text{List SourceText} \\longrightarrow  \\text{List HTMLText}\n$$\n\nthat maps a  list of paragraphs of MeenyLatex source text to its rendition as list of HTML strings.  The \\code{transformParagraphs} function is defined in terms of the \\code{accumulator}:\n\n\\begin{verbatim}\ntransformParagraphs : List String -> List String\ntransformParagraphs paragraphs =\n    paragraphs\n        |> accumulator Render.parseParagraph renderParagraph updateState\n        |> Tuple.first\n\\end{verbatim}\n\n\n\\section{Differ: Speeding up the Edit Cycle}\n\nIn the previous section, we described in outline how a MiniLaTeX document is rendered into HTML.  In order to have a fast edit-render cycle, one which feels instantaneous or nearly so to an author, we need an additional construct.  The idea is this.  The app maintains a list $X$ of logical paragraphs for the document being edited, as well as a list $r(X)$ of rendered paragraphs. Suppose that the author makes some edits and pressed the update button.  The app computes a new list of logical paragraphs and compares it with the old.  The old list will have the form $X = \\alpha\\beta\\gamma$ and the new one will have the form $Y = \\alpha\\beta\'\\gamma$, where $\\alpha$ is the greatest common prefix and $\\gamma$ is the greatest common suffix.  By greatest common prefix, we mean the largest list $\\alpha$ of contiguous elements of the list $X$ that is also list of contiguous elements of the list $Y$, and such that the first element of $\\alpha$ is the same as the first element of $X$ and also of $Y$.  The largest common suffix is defined similarly.  Note that $r(X) = r(\\alpha)r(\\beta)r(\\gamma)$ and $r(Y) =  r(\\alpha)r(\\beta\')r(\\gamma)$.  Thus to compute $r(Y)$, we need only compute $r(\\beta\')$, relying on the previously computed $r(\\alpha)$ and $r(\\gamma)$.\n\nWhile the strategy just described is not the theoretically  most efficient, it aways works and in fact is quite fast in practice because of the typical behavior of authors -- make a few changes, or add a little text, then press the save/update button.  The point is that changes to the text are generally localized.  If  the author  adds, deletes, or changes a single paragraph, at most one paragraph has to be re-rendered.\n\nWe now discuss the core code for the strategy for diffing and rendering the list of logical paragraphs.  First comes the data structure to be maintained while editing:\n\n\\begin{verbatim}\ntype alias EditRecord =\n    { paragraphs : List String\n    , renderedParagraphs : List String\n    }\n\\end{verbatim}\n\nTo set up this structure when an author begins editing, we make use of the general \\code{initialize} function in module \\code{MeenyLatex.Differ}:\n\n\\begin{verbatim}\ninitialize : (List String -> List String) -> String -> EditRecord\ninitialize transformParagraphs text =\n    let\n        paragraphs =\n            paragraphify text\n        renderedParagraphs =\n            transformParagraphs paragraphs\n    in\n        EditRecord paragraphs renderedParagraphs\n\\end{verbatim}\n\n\nTo make use of \\code{Differ.initialize}, we call it with \\code{Accumulator.transformParagraphs}:\n\n\\begin{verbatim}\neditRecord = Differ.initialize Accumulator.transformParagraphs\n\\end{verbatim}\n\n\\subsection{Inside the Differ}\n\nLet\'s take a quick look at the operation of the differ.  The basic data structure\nis the \\code{DiffRecord}\n\n\\begin{verbatim}\ntype alias DiffRecord =\n    { commonInitialSegment : List String\n    , commonTerminalSegment : List String\n    , middleSegmentInSource : List String\n    , middleSegmentInTarget : List String\n    }\n\\end{verbatim}\n\nThus $\\alpha = \\text{commonInitialSegment}$,  $\\beta = \\text{middleSegmentInSource}$,\n$\\gamma = \\text{commonTerminalSegment}$, and $\\beta\' = \\text{middleSegmentInTarget}$.\nThese are computed using the function \\code{diff}:\n\n\\begin{verbatim}\ndiff : List String -> List String -> DiffRecord\ndiff u v =\n    let\n        a = commonInitialSegment u v\n        b = commonTerminalSegment u v\n        la = List.length a\n        lb = List.length b\n        x =  u |> List.drop la |> dropLast lb\n        y = v |> List.drop la |> dropLast lb\n    in\n        DiffRecord a b x y\n\\end{verbatim}\n\nIn an edit cycle, we need to update the current \\code{EditRecord}, which we do using \\code{Differ.update}.\n\n$$\n{\\bf Diff.update\\ } \\text{transformer editRecord text} \\longrightarrow \\text{newEditRecord}\n$$\n\nThe \\code{Diff.update} function defined below breaks the \\code{text} into paragraphs, computes the \\code{diffRecord}, and returns an updated version of \\code{editRecord} by applying \\code{transformer} to $\\beta\'$.\n\n\\begin{verbatim}\nupdate : (String -> String) -> EditRecord -> String -> EditRecord\nupdate transformer editorRecord text =\n    let\n        newParagraphs =\n            paragraphify text\n        diffRecord =\n            diff editorRecord.paragraphs newParagraphs\n        newRenderedParagraphs =\n            renderDiff transformer diffRecord editorRecord.renderedParagraphs\n    in\n        EditRecord newParagraphs newRenderedParagraphs\n\\end{verbatim}\n\nHere is how \\code{renderDiff}, which is used to update the \\code{editRecord}, is defined:\n\n\\begin{verbatim}\nrenderDiff : (String -> String) -> DiffRecord -> List String -> List String\nrenderDiff renderer diffRecord renderedStringList =\n  let\n    ii = List.length diffRecord.commonInitialSegment\n    it = List.length diffRecord.commonTerminalSegment\n    initialSegmentRendered = List.take ii renderedStringList\n    terminalSegmentRendered = takeLast it renderedStringList\n    middleSegmentRendered = (renderList renderer) diffRecord.middleSegmentInTarget\n  in\n    initialSegmentRendered ++ middleSegmentRendered ++ terminalSegmentRendered\n\\end{verbatim}\n\n\n\\section{Status}\n\nMiniLaTeX is now at version 2.1.  It includes the following.\n\n\\begin{itemize}\n\n\\item \\strong{Environments:}  \\italic{align, center, enumerate, eqnarray, equation, itemize, macros, tabular}. The environments  \\italic{theorem, proposition, corollary, lemma, definition} are handled by a default mechanism.\n\n\\item \\strong{Macros}: \\italic{cite, code, ellie, emph, eqref, href, iframe, image, index, italic, label, maketitle, mdash, ndash, newcommand, ref, section, section*, strong, subheading, subsection, subsection*, subsubsection, subsubsection*, title, term, xlink, xlinkPublic}\n\\end{itemize}\n\nMost of the macro and environment renderers are in final or close to final form. A few, e.g. \\italic{tabular} need considerably more work, and a few more are dummies.\n\n\n\n\\comment{ Article by Ilias: https://github.com/zwilias/elm-json/blob/master/src/Json/Parser.elm}\n\n\n';
var author$project$Source$wavePacketsBody = '\n\n\\image{http://psurl.s3.amazonaws.com/images/jc/sinc2-bcbf.png}{Wave packet}{width: 250, float: right}\n\n\nAs we have seen with the sinc packet, wave packets can be localized in space.  A key feature of such packets is their \\italic{group velocity} $v_g$.  This is the velocity which which the "body" of the wave packet travels.  Now a wave packet is synthesized by superposing many plane waves, so the natural question is how is the group velocity of the packet related to the phase velocities of its constituent plane waves.  We will answer this first in the simplest possible situation -- a superposition of two sine waves.  Next, we will reconsider the case of the sinc packet.  Finally, we will study a more realistic approximation to actual wave packets which gives insight into the manner and speed with which wave packets change shape as they evolve in time.  We end by applying this to an electron in a thought experiment in which it has been momentarily confned to an atom-size box -- about one Angstrom, or $10^{-10}\\text{ meter}$.\n\n\\section{A two-frequency packet: beats}\n\n\\image{http://psurl.s3.amazonaws.com/images/jc/beats-eca1.png}{Two-frequency beats}{width: 350, float: right}\n\nConsider a wave\n$\\psi = \\psi_1 + \\psi_2$ which is the sum of two terms with slightly different frequencies.  If the waves are sound waves, then then what one will hear is a pitch that corresponding to the average of the two frequencies modulated in such a way that the volume goes up and down at a frequency corresponding to their difference.\n\nLet us analyze this phenomenon mathematically, setting\n\n\n\\begin{equation}\n\\psi_1(x,t)  = \\cos((k - \\Delta k/2)x - (\\omega - \\Delta \\omega/2)t)\n\\end{equation}\n\nand\n\n\\begin{equation}\n\\psi_2(x,t)  = \\cos((k + \\Delta k/2)x - (\\omega + \\Delta \\omega/2)t)\n\\end{equation}\n\nBy the addition law for the sine, this can be rewritten as\n\n\\begin{equation}\n\\psi(x,t) = 2\\sin(kx - \\omega t)\\sin((\\Delta k)x - (\\Delta \\omega)t)\n\\end{equation}\n\nThe resultant wave -- the sum -- consists of of a high-frequency sine wave oscillating according to the average of the component wave numbers and angular frequencies, modulated by a cosine factor that oscillates according to the difference of the wave numbers and the angular frequencies, respectively.  The velocity associated to the high frequency factor is\n\n\\begin{equation}\nv_{phase} = \\frac{\\omega}{k},\n\\end{equation}\n\nwhereas the velocity associated with the low-frequency factor is\n\n\\begin{equation}\nv_{group} = \\frac{\\Delta \\omega}{\\Delta k}\n\\end{equation}\n\nThis is the simplest situation in which one observes the phenomenon of the group velocity.  Take a look at this \\href{http://galileo.phys.virginia.edu/classes/109N/more_stuff/Applets/wavepacket/wavepacket.html}{animation}.\n\n\n\\section{Step function approximation}\n\nWe will now find an an approximation to\n\n\\begin{equation}\n\\psi(x,t) = \\int_{-\\infty}^\\infty a(k) e^{i(kx - \\omega(k)t)} dk\n\\end{equation}\n\nunder the assumption that $a(k)$ is nearly constant over an interval from $k_0 -\\Delta k/2$ to $k_0 + \\Delta k/2$ and that outside of that interval it approaches zero at a rapid rate.  In that case the Fourier integral is approximated by\n\n\\begin{equation}\n \\int_{k_0 - \\Delta k/2}^{k_0 + \\Delta k/2}  a(k_0)e^{i((k_0 + (k - k_0)x - (\\omega_0t + \\omega_0\'(k - k_0)t))}dk,\n\\end{equation}\n\nwhere $\\omega_0 = \\omega(k_0)$ and $\\omega_0\' = \\omega\'(k_0)$.\nThis integral can be written as a product $F(x,t)S(x,t)$, where the first factor is "fast" and the second is "slow."  The fast factor is just\n\n\\begin{equation}\nF(x,t) = a(k_0)e^{ i(k_0x - \\omega(k_0)t) }\n\\end{equation}\n\nIt travels with velocity $v_{phase} = \\omega(k_0)/k_0$.  Setting $k; = k- k_0$, the slow factor is\n\n\\begin{equation}\nS(x,t) = \\int_{-\\Delta k/2}^{\\Delta k/2} e^{ik\'\\left(x - \\omega\'(k_0)t\\right)} dk\',\n\\end{equation}\n\nThe slow factor be evaluated explicitly:\n\n\\begin{equation}\nI = \\int_{-\\Delta k/2}^{\\Delta k/2} e^{ik\'u} dk\' = \\frac{1}{iu} e^{ik\'u}\\Big\\vert_{k\' = - \\Delta k/2}^{k\' = +\\Delta k/2}.\n\\end{equation}\n\nWe find that\n\n\\begin{equation}\nI = \\Delta k\\; \\text{sinc}\\frac{\\Delta k}{2}u\n\\end{equation}\n\nwhere $\\text{sinc } x = (\\sin x )/x$.  Thus the slow factor is\n\n\\begin{equation}\nS(x,t) = \\Delta k\\, \\text{sinc}(  (\\Delta k/2)(x - \\omega\'(k_0)t)  )\n\\end{equation}\n\n\nPutting this all together, we have\n\n\\begin{equation}\n\\psi(x,t) \\sim a(k_0)\\Delta k_0\\, e^{i(k_0x - \\omega(k_0)t)}\\text{sinc}(  (\\Delta k/2)(x - \\omega\'(k_0)t)  )\n\\end{equation}\n\nThus the body of the sinc packet moves steadily to the right at velocity $v_{group} = \\omega\'(k_0)$\n\n\n\\section{Gaussian approximation}\n\nThe approximation used in the preceding section is good enough to capture and explain the group velocity of a wave packet.  However, it is not enough to explain how wave packets change shape as they evolve with time.  To understand this phenomenon, we begin with  an arbitrary packet\n\n\\begin{equation}\n\\psi(x,t) = \\int_{\\infty}^\\infty a(k) e^{i\\phi(k)}\\,dk,\n\\end{equation}\n\nwhere $\\phi(k) = kx - \\omega(k)t$.  We shall assume that the spectrum $a(k)$ is has a maximum at $k = k_0$ and decays fairly rapidly away from the maximum.  Thus we assume that the Gaussian function\n\n\\begin{equation}\na(k) = e^{ -(k-k_0)^2/ 4(\\Delta k)^2}\n\\end{equation}\n\nis a good approximation.  To analyze the Fourier integral\n\n\\begin{equation}\n\\psi(x,t) = \\int_{-\\infty}^{\\infty} e^{ -(k-k_0)^2/ 4(\\Delta k)^2} e^{i(kx - \\omega(k) t)},\n\\end{equation}\n\nwe expand $\\omega(k)$ in a Taylor series up to order two, so that\n\n\\begin{equation}\n\\phi(k) = k_0x + (k - k_0)x - \\omega_0t - \\frac{d\\omega}{dk}(k_0) t- \\frac{1}{2}\\frac{ d^2\\omega }{ dk^2 }(k_0)( k - k_0)^2 t\n\\end{equation}\n\nWriting $\\phi(k) = k_0x - \\omega_0t + \\phi_2(k,x,t)$, we find that\n\n\\begin{equation}\n\\psi(x,t) = e^{i(k_0x - \\omega_0 t)} \\int_{-\\infty}^{\\infty} e^{ -(k-k_0)^2/ 4(\\Delta k)^2} e^{i\\phi_2(k,x,t)}.\n\\end{equation}\n\nMake the change of variables $k - k_0 = 2\\Delta k u$, and write $\\phi_2(k,x,t) = Q(u,x,t)$, where $Q$ is a quadratic polynomial in $u$ of the form $au + b$. One finds that\n\n\\begin{equation}\n  a = -(1 + 2i\\alpha t  (\\Delta k)^2),\n\\end{equation}\n\nwhere\n\n\\begin{equation}\n\\alpha = \\frac{ d^2\\omega }{ dk^2 }(k_0)\n\\end{equation}\n\nOne also finds that\n\n\\begin{equation}\n  b = 2i\\Delta k(x - v_g t),\n\\end{equation}\n\nwhere $v_g = d\\omega/dk$ is the group velocity.  The integral is a standard one, of the form\n\n\\begin{equation}\n\\int_{-\\infty}^\\infty e^{- au^2 + bu} = \\sqrt{\\frac{\\pi}{a}}\\; e^{ b^2/4a }.\n\\end{equation}\n\nUsing this integral  formula and the reciprocity $\\Delta x\\Delta k = 1/2$, which we may take as a definition of $\\Delta x$, we find, after some algebra, that\n\n\\begin{equation}\n\\psi(x,t) \\sim A e^{-B} \\,e^{i(k_0 - \\omega_0t)}\n,\n\\end{equation}\n\nwhere\n\n\\begin{equation}\nA = 2\\Delta k \\sqrt{\\frac{\\pi}{1 + 2i\\alpha \\Delta k^2 t}}\n\\end{equation}\n\nand\n\n\\begin{equation}\nB = \\frac{( x-v_gt )^2 (1 - 2i\\alpha \\Delta k^2 t)}{4\\sigma^2}\n\\end{equation}\n\nwith\n\n\\begin{equation}\n\\sigma^2 = \\Delta x^2 + \\frac{\\alpha^2 t^2}{4 \\Delta x^2}\n\\end{equation}\n\nLook at the expression $B$. The first factor in the numerator controls the motion of motion of the packet and is what guides it to move with group velocity $v_g$.  The second factor is generally a small real term and a much larger imaginary one, and so only affects the phase.  The denominator controls the width of the packet, and as we can see, it increases with $t$ so long as $\\alpha$, the second derivative of $\\omega(k)$ at the center of the packet, is nonzero.\n\n\\section{The electron}\n\nLet us apply what we have learned to an electron which has been confined to a box about the size of an atom, about $10^{-10}$ meters. That is, $\\Delta x \\sim 10^{-10}\\text{ m}$.  The extent of its wave packet will double when\n\n\\begin{equation}\n\\frac{\\alpha^2 t^2}{4 \\Delta x^2} \\sim \\Delta x^2,\n\\end{equation}\n\nthat is, after a time\n\n\\begin{equation}\nt_{double} \\sim \\frac{\\Delta x^2}{\\alpha}\n\\end{equation}\n\nThe dispersion relation for a free particle is\n\n\\begin{equation}\n  \\omega(k) = \\hbar \\frac{k^2}{2m},\n\\end{equation}\n\nso that $\\alpha = \\hbar/m$.  Then\n\n\\begin{equation}\nt_{double} \\sim \\frac{m}{h}\\, \\Delta x^2 .\n\\end{equation}\n\nIn the case of our electron, we find that $t_{double} \\sim 10^{-16}\\,\\text{sec}$.\n\n\\section{ Code}\n\n\n\n\\begin{verbatim}\n# jupyter/python\n\nmatplotlib inline\n\n# code for sinc(x)\nimport numpy as np\nimport matplotlib.pyplot as plt\n\n# sinc function\nx = np.arange(-30, 30, 0.1);\ny = np.sin(x)/x\nplt.plot(x, y)\n\n# beats\nx = np.arange(-50, 250, 0.1);\ny = np.cos(0.5*x) + np.sin(0.55*x)\nplt.plot(x, y)\n\\end{verbatim}\n\n\n\n\\section{References}\n\n\\href{https://www.eng.fsu.edu/~dommelen/quantum/style_a/packets.html}{Quantum Mechanics for Engineers: Wave Packets}\n\n\\href{http://users.physics.harvard.edu/~schwartz/15cFiles/Lecture11-WavePackets.pdf}{Wave Packets, Harvard Physics}\n\n\\href{http://ocw.mit.edu/courses/nuclear-engineering/22-02-introduction-to-applied-nuclear-physics-spring-2012/lecture-notes/MIT22_02S12_lec_ch6.pdf}{Time evolution in QM - MIT}\n\n';
var author$project$Source$wavePacketsHead = '\n\n  \\title{Wave packets and the dispersion relation}\n\n  \\maketitle\n\n  \\tableofcontents\n\n';
var author$project$Source$wavePackets = _Utils_ap(author$project$Source$wavePacketsHead, author$project$Source$wavePacketsBody);
var author$project$Source$weatherApp = '\n\\section{Weather App}\n\n\\image{http://noteimages.s3.amazonaws.com/jim_images/weatherAppColumbus.png}{}{float: right, width: 250}\n\nIn this section we will learn how to write an app that displays information about the weather  in any city on planet earth.   The data comes from a web server at \\href{http://openweathermap.org/}{openweathermap.org}; to access it, you will need a free API key, which is a long string of letters and numbers  that looks like \\code{a23b...ef5d4} and which functions as a kind password. To get an API key, follow this \\href{http://openweathermap.org/price}{link}.  Once you have an API key, you can try out a working copy of the app at \\href{https://jxxcarlson.github.io/app/weather.html}{jxxcarlson.github.io}.\n\n\\subheading{Framing Main}\n\nWe will build the app in a series of steps.  The first step is to build a skeleton that has all the needed structural parts, e.g, the view and update functions.    Part of this "framing" step is to define the data types that the app will use --- \\code{Model} and its various parts, and \\code{Msg}, a union type which determines which messages can be sent to the Elm Runtime.  Let\'s begin with \\code{main}, which looks like this:\n\n\\begin{verbatim}\nmain =\n    Html.program\n        { init = init\n        , view = view\n        , update = update\n        , subscriptions = subscriptions\n        }\n\\end{verbatim}\n\nThis is the structure, \\code{Html.program}, is used by $99\\%$ of all Elm programs.  It is a a record with four fields, the init, view, and update functions, and subscriptions, which will eventually be used to add date and time to the app. The init, view and update functions all work  with the model, so let\'s discuss that next.\n\n\\subheading{Model}\n\nEvery model has a type, and that type dictates what the model is able to represent.  In our case the \\code{Model} type, displayed below,  is a record with five fields: one for weather data, one for messages for the user, one for the location whose weather we retrieve, one for the API key discussed above, and one for the internet address of the server.  The first field has a special type which we discuss in a moment, while the other fields are strings.\n\n\n\\begin{verbatim}\ntype alias Model =\n    { weather : Maybe Weather\n    , message : String\n    , location : String\n    , apiKey : String\n    , serverAddress : String\n    }\n\\end{verbatim}\n\nThe type of the weather field has the form\n\n\\begin{verbatim}\nMaybe Weather = Nothing | Just Weather\n\\end{verbatim}\n\nThis means that a value of type \\code{Maybe Weather} can be either \\code{Nothing}, or a value of type \\code{Just Weather}.  The  first option handles the case in which  the app has not requested information from the server, has requested information but has received no reply, has requested information but received an error message, or, finally has received garbled information.  These are all very real possibilities, and in those cases, we literally know \\code{Nothing}.\n\nIn the case of valid weather information, \\code{weather} field has type \\code{Just Weather}, where \\code{Weather} is the record type listed below. The first, \\code{id}, is an integer which identifies the weather information in the openweather.org database.  We won\'t use it now.  The next, \\code{location}, is a string which in our examples is a city name, e.g., "London."  The third, \\code{main}, is the "main" weather information for the given location.\n\n\\begin{verbatim}\ntype alias Weather =\n    { id : Int\n    , name : String\n    , main : Main\n    }\n\\end{verbatim}\n\nAnd what is the value of the field \\code{main}?  Well, it is a something of type \\code{Main}.  While we seem to be opening up a series of Russian dolls, this is the last data structure that we have to deal with.  \\code{Main} is a record  with five fields of type \\code{Float}\n\n\\begin{verbatim}\ntype alias Main =\n    { temp : Float\n    , humidity : Float\n    , pressure : Float\n    , temp_min : Float\n    , temp_max : Float\n    }\n\\end{verbatim}\n\n\\subheading{Filling out Main}\n\nThe code discussed so far is still not enough to define an app that will run, even if it does nothing.  To get to this point, we must implement the following functions and types:\n\n\\begin{enumerate}\n\\item \\code{init}, which sets jup the initial model.\n\\item \\code{Msg} The type messages the app can receive.\n\\item \\code{subscriptions}. There aren\'t any, but this has to be defined.\n\\item \\code{view} and some style information to make the view look good.\n\\item \\code{update}\n\\end{enumerate}\n\nTake a look at the Ellie below and run it to see if it works.  Then come back and we will go through the list above.  Once this is done, we can move on to making the app actaully do something.\n\n\\ellie{9CKgm5CQGa1/0}{Skeleton app}\n\n\\subheading{Finishing the skeleton}\n\nLet\'s finish the skeleton by filling in the items listed above.\n\n\\subheading{Init and Msg}\n\n\\begin{verbatim}\ninit : ( Model, Cmd Msg )\ninit =\n    ( { weather = Nothing\n      , message = "app started"\n      , location = "london"\n      , apiKey = ""\n      }\n    , Cmd.none\n    )\n\\end{verbatim}\n\n\nBelow is  \\code{init}. It is a value of type \\code{(Model, Cmd Msg)}.  The \\code{Msg} type\nis defined this way:\n\n\\begin{verbatim}\ntype Msg = NoOp\n\\end{verbatim}\n\nWe will have other Msg\'s later.  But when staring out, it is worth having a kind of "zero" in the world of messages -- a message which corresponds to "no operation."\n\n\n\\subheading{Subscriptions}\n\nWe need to define \\code{subscription} even if there are no subscriptions to external data sources. Let\'s do it like this:\n\n\\begin{verbatim}\nsubscriptions model =\n    Sub.none\n\\end{verbatim}\n\n\\subheading{Update}\n\nThe update function handles our \\code{NoOp} message:\n\n\\begin{verbatim}\nupdate : Msg -> Model -> ( Model, Cmd Msg )\nupdate msg model =\n    case msg of\n        NoOp ->\n            ( model, Cmd.none )\n\\end{verbatim}\n\nLater, the case statment will be more complex, with one\n clause for each \\code{Msg} type.\n\n\n\\subheading{View}\n\n\\image{http://noteimages.s3.amazonaws.com/jim_images/weatheApp-0.png}{}{float: right, width: 150}\n\nThe \\code{view} function represents the state of the \\code{Model}\nto the outside world.  In the case at hand, it just displays a grey box\nas in the image on the right.\n\n\\begin{verbatim}\nview : Model -> Html Msg\nview model =\n    div [ mainStyle ]\n        [ div [ innerStyle ]\n            [ text "Weather App"\n            ]\n        ]\n\\end{verbatim}\n\n\\subheading{Style}\n\nTo set the stage for our working app, we use a small bit of styling:\n\n\\begin{verbatim}\nmainStyle =\n    style\n        [ ( "margin", "15px" )\n        , ( "margin-top", "20px" )\n        , ( "background-color", "#eee" )\n        , ( "width", "200px" )\n        ]\n\ninnerStyle =\n    style [ ( "padding", "15px" ) ]\n\\end{verbatim}\n\n\n\\image{http://noteimages.s3.amazonaws.com/jim_images/weatherApp-2.png}{}{float: right, width: 200}\n\n\n\\subsection{Getting the weather}\n\n\n\nLet\'s now work to make the app retrieve weather data.  There is a cycle of events which makes this happen.  First, the user clicks on the "Get weather" button, which is defined by\n\n\\begin{verbatim}\nbutton\n   [ onClick GetWeather ]\n   [ text "Get weather" ]\n\\end{verbatim}\n\nThe \\code{onClick} action causes the message \\code{GetWeather} to be sent.  The \\code{update} function listed below receives this message, matches it using its \\code{case msg of} statement to the function call  \\code{getWeather model}, and executes that call.\n\n\\begin{verbatim}\nupdate : Msg -> Model -> ( Model, Cmd Msg )\nupdate msg model =\n    case msg of\n        GetWeather ->\n            ( model, getWeather model )\n        NewWeather (Ok newData) ->\n            ( { model | weather = Just newData,\n                        message = "Successful request" },\n                Cmd.none\n             )\n        NewWeather (Err error) ->\n            ( { model | message = "Error" }, Cmd.none )\n\n\\end{verbatim}\n\nLet\'s look at the code for \\code{getWeather}.\n\n\\begin{verbatim}\ngetWeather : Model -> Cmd Msg\ngetWeather model =\n    Http.send NewWeather (dataRequest model)\n\\end{verbatim}\n\nWhen this function call is executed the following happen.  (1)  The request \\code{ dataRequest model} is made; (2)  Moments later the server responds with its \\code{reply}, also a string. This is a string which re[renset sdh dtdata  which is just a string.  It represent the if  (3) send the message \\code{NewWeather reply}, (4) the update function processes that message.  The message can be of two kinds.  If the request is successful, it is of form \\code{Ok newData} where \\code{NewData} carries the information sent by the server.  If the request is not successful, the reply has the form \\code{Error error}, where \\code{error} carries information about the error.\n\nLet\'s  look at the code for \\code{dataRequest} listed below                                              .  The function \\code{Http.get} takes two arguments.  The first is the function call \\code{url model}, which yields a string to be sent to the server m  It carries information such as the "address" of the server, the city whose weather we want to know about, and the API key that the server requires to grant access.  The second argument is a JSON decoder.  This is a black box which will translate the information send by the server into a form understood by Elm.\n\n\\begin{verbatim}\ndataRequest model =\n    Http.get (url model) weatherDecoder\n\\end{verbatim}\n\nThe code for the \\code{url} function simply puts information already present in the model into the form needed by the server:\n\n\\begin{verbatim}\nurl model =\n  model.urlPrefix ++ model.location ++ "&APPID=" ++ model.apiKey\n\\end{verbatim}\n\n\n\n\n\\ellie{chqbtP2Kfa1/1}\n\n\\section{IIIIIII}\n\n\\image{http://noteimages.s3.amazonaws.com/jim_images/weatherApp-1a.png}{}{float: right, width: 250}\n\n\n\\ellie{8Wrq8PbCDa1/1}\n\n\\subsection{A little more advanced}\n\n\\ellie{7t43vKJnda1/5}\n\n\n';
var author$project$Types$ParseResultsView = 1;
var author$project$Types$RawHtmlView = 2;
var author$project$Types$ReceiveStopTime = function (a) {
	return {$: 22, a: a};
};
var author$project$Types$RenderToLatexView = 3;
var author$project$Types$Vertical = 1;
var elm$core$Platform$Cmd$batch = _Platform_batch;
var elm$core$Platform$Cmd$none = elm$core$Platform$Cmd$batch(_List_Nil);
var elm$core$String$fromFloat = _String_fromNumber;
var elm$core$Basics$modBy = _Basics_modBy;
var elm$time$Time$toMillis = F2(
	function (_n0, time) {
		return A2(
			elm$core$Basics$modBy,
			1000,
			elm$time$Time$posixToMillis(time));
	});
var elm$time$Time$utc = A2(elm$time$Time$Zone, 0, _List_Nil);
var author$project$Main$update = F2(
	function (msg, model) {
		switch (msg.$) {
			case 0:
				var parseResult = author$project$MeenyLatex$Driver$parse(model.o);
				var newEditRecord = A3(author$project$MeenyLatex$Driver$update, model.F, model.A, model.o);
				var hasMathResult = A2(elm$core$List$map, author$project$MeenyLatex$HasMath$listHasMath, parseResult);
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{j: model.j + 1, A: newEditRecord, aA: hasMathResult, ah: parseResult}),
					elm$core$Platform$Cmd$batch(
						_List_fromArray(
							[
								A2(
								elm$random$Random$generate,
								author$project$Types$NewSeed,
								A2(elm$random$Random$int, 1, 10000))
							])));
			case 2:
				return A2(author$project$Main$useSource, model.o, model);
			case 3:
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							j: model.j + 1,
							A: A2(author$project$MeenyLatex$Driver$setup, model.F, ''),
							o: ''
						}),
					elm$core$Platform$Cmd$none);
			case 4:
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							j: model.j + 1,
							A: A2(author$project$MeenyLatex$Driver$setup, model.F, author$project$Source$initialText),
							o: author$project$Source$initialText
						}),
					elm$core$Platform$Cmd$none);
			case 1:
				var str = msg.a;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{o: str}),
					elm$core$Platform$Cmd$none);
			case 5:
				return _Utils_Tuple2(
					model,
					A2(
						elm$random$Random$generate,
						author$project$Types$NewSeed,
						A2(elm$random$Random$int, 1, 10000)));
			case 6:
				var newSeed = msg.a;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{F: newSeed}),
					elm$core$Platform$Cmd$none);
			case 7:
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{q: 0}),
					elm$core$Platform$Cmd$none);
			case 8:
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{q: 1}),
					elm$core$Platform$Cmd$none);
			case 10:
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{q: 3}),
					elm$core$Platform$Cmd$none);
			case 9:
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{q: 2}),
					elm$core$Platform$Cmd$none);
			case 11:
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{ab: 0}),
					elm$core$Platform$Cmd$none);
			case 12:
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{ab: 1}),
					elm$core$Platform$Cmd$none);
			case 13:
				return A2(author$project$Main$useSource, author$project$Source$report, model);
			case 14:
				return A2(author$project$Main$useSource, author$project$Source$wavePackets, model);
			case 15:
				return A2(author$project$Main$useSource, author$project$Source$weatherApp, model);
			case 16:
				return A2(author$project$Main$useSource, author$project$Source$nongeodesic, model);
			case 17:
				return A2(author$project$Main$useSource, author$project$Source$grammar, model);
			case 18:
				var s = msg.a;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{aa: s}),
					elm$core$Platform$Cmd$none);
			case 19:
				return _Utils_Tuple2(
					model,
					A2(elm$core$Task$perform, author$project$Types$ReceiveStartTime, elm$time$Time$now));
			case 20:
				return _Utils_Tuple2(
					model,
					A2(elm$core$Task$perform, author$project$Types$ReceiveStopTime, elm$time$Time$now));
			case 21:
				var startTime = msg.a;
				var start = A2(elm$time$Time$toMillis, elm$time$Time$utc, startTime);
				var message = 'Start: ' + elm$core$String$fromFloat(start);
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{ac: message, aj: startTime}),
					elm$core$Platform$Cmd$none);
			default:
				var stopTime = msg.a;
				var stop = A2(elm$time$Time$toMillis, elm$time$Time$utc, stopTime);
				var start = A2(elm$time$Time$toMillis, elm$time$Time$utc, model.aj);
				var elapsedMilliseconds = stop - start;
				var message = 'Elapsed: ' + elm$core$String$fromFloat(elapsedMilliseconds);
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{ac: message, a$: stopTime}),
					elm$core$Platform$Cmd$none);
		}
	});
var author$project$Types$Grammar = {$: 17};
var author$project$View$buttonStyle = F2(
	function (color, width) {
		var realWidth = function (x) {
			return x + 'px';
		}(
			elm$core$String$fromInt(width + 0));
		return _List_fromArray(
			[
				A2(elm$html$Html$Attributes$style, 'backgroundColor', color),
				A2(elm$html$Html$Attributes$style, 'color', 'white'),
				A2(elm$html$Html$Attributes$style, 'width', realWidth),
				A2(elm$html$Html$Attributes$style, 'height', '25px'),
				A2(elm$html$Html$Attributes$style, 'margin-right', '8px'),
				A2(elm$html$Html$Attributes$style, 'font-size', '9pt'),
				A2(elm$html$Html$Attributes$style, 'text-align', 'center'),
				A2(elm$html$Html$Attributes$style, 'border', 'none')
			]);
	});
var author$project$View$colorBlue = 'rgb(100,100,200)';
var elm$html$Html$button = _VirtualDom_node('button');
var elm$virtual_dom$VirtualDom$Normal = function (a) {
	return {$: 0, a: a};
};
var elm$virtual_dom$VirtualDom$Sync = function (a) {
	return {$: 0, a: a};
};
var elm$virtual_dom$VirtualDom$on = _VirtualDom_on;
var elm$html$Html$Events$on = F2(
	function (event, decoder) {
		return A2(
			elm$virtual_dom$VirtualDom$on,
			event,
			elm$virtual_dom$VirtualDom$Normal(
				A2(elm$json$Json$Decode$map, elm$virtual_dom$VirtualDom$Sync, decoder)));
	});
var elm$html$Html$Events$onClick = function (msg) {
	return A2(
		elm$html$Html$Events$on,
		'click',
		elm$json$Json$Decode$succeed(msg));
};
var author$project$View$grammarButton = function (width) {
	return A2(
		elm$html$Html$button,
		_Utils_ap(
			_List_fromArray(
				[
					elm$html$Html$Events$onClick(author$project$Types$Grammar)
				]),
			A2(author$project$View$buttonStyle, author$project$View$colorBlue, width)),
		_List_fromArray(
			[
				elm$html$Html$text('Grammar')
			]));
};
var author$project$Types$MathPaper = {$: 16};
var author$project$View$mathPaperButton = function (width) {
	return A2(
		elm$html$Html$button,
		_Utils_ap(
			_List_fromArray(
				[
					elm$html$Html$Events$onClick(author$project$Types$MathPaper)
				]),
			A2(author$project$View$buttonStyle, author$project$View$colorBlue, width)),
		_List_fromArray(
			[
				elm$html$Html$text('Math Paper')
			]));
};
var author$project$Types$TechReport = {$: 13};
var author$project$View$techReportButton = function (width) {
	return A2(
		elm$html$Html$button,
		_Utils_ap(
			_List_fromArray(
				[
					elm$html$Html$Events$onClick(author$project$Types$TechReport)
				]),
			A2(author$project$View$buttonStyle, author$project$View$colorBlue, width)),
		_List_fromArray(
			[
				elm$html$Html$text('Tech Report')
			]));
};
var author$project$Types$WavePackets = {$: 14};
var author$project$View$wavePacketButton = function (width) {
	return A2(
		elm$html$Html$button,
		_Utils_ap(
			_List_fromArray(
				[
					elm$html$Html$Events$onClick(author$project$Types$WavePackets)
				]),
			A2(author$project$View$buttonStyle, author$project$View$colorBlue, width)),
		_List_fromArray(
			[
				elm$html$Html$text('WavePacket')
			]));
};
var author$project$View$buttonBarBottomLeft = A2(
	elm$html$Html$div,
	_List_fromArray(
		[
			A2(elm$html$Html$Attributes$style, 'margin-left', '20px')
		]),
	_List_fromArray(
		[
			author$project$View$techReportButton(93),
			author$project$View$grammarButton(93),
			author$project$View$wavePacketButton(93),
			author$project$View$mathPaperButton(96)
		]));
var author$project$Types$FastRender = {$: 0};
var author$project$View$fastRenderButton = function (width) {
	return A2(
		elm$html$Html$button,
		_Utils_ap(
			_List_fromArray(
				[
					elm$html$Html$Events$onClick(author$project$Types$FastRender)
				]),
			A2(author$project$View$buttonStyle, author$project$View$colorBlue, width)),
		_List_fromArray(
			[
				elm$html$Html$text('Fast Render')
			]));
};
var author$project$Types$ReRender = {$: 2};
var author$project$View$reRenderButton = function (width) {
	return A2(
		elm$html$Html$button,
		_Utils_ap(
			_List_fromArray(
				[
					elm$html$Html$Events$onClick(author$project$Types$ReRender)
				]),
			A2(author$project$View$buttonStyle, author$project$View$colorBlue, width)),
		_List_fromArray(
			[
				elm$html$Html$text('Render')
			]));
};
var author$project$Types$Reset = {$: 3};
var author$project$View$resetButton = function (width) {
	return A2(
		elm$html$Html$button,
		_Utils_ap(
			_List_fromArray(
				[
					elm$html$Html$Events$onClick(author$project$Types$Reset)
				]),
			A2(author$project$View$buttonStyle, author$project$View$colorBlue, width)),
		_List_fromArray(
			[
				elm$html$Html$text('Clear')
			]));
};
var author$project$Types$Restore = {$: 4};
var author$project$View$restoreButton = function (width) {
	return A2(
		elm$html$Html$button,
		_Utils_ap(
			_List_fromArray(
				[
					elm$html$Html$Events$onClick(author$project$Types$Restore)
				]),
			A2(author$project$View$buttonStyle, author$project$View$colorBlue, width)),
		_List_fromArray(
			[
				elm$html$Html$text('Restore')
			]));
};
var author$project$View$buttonBarLeft = A2(
	elm$html$Html$div,
	_List_fromArray(
		[
			A2(elm$html$Html$Attributes$style, 'margin-left', '20px')
		]),
	_List_fromArray(
		[
			author$project$View$resetButton(93),
			author$project$View$restoreButton(93),
			author$project$View$reRenderButton(93),
			author$project$View$fastRenderButton(96)
		]));
var author$project$Types$GetContent = function (a) {
	return {$: 1, a: a};
};
var author$project$View$textStyle = F4(
	function (width, height, offset, color) {
		return _List_fromArray(
			[
				A2(elm$html$Html$Attributes$style, 'width', width),
				A2(elm$html$Html$Attributes$style, 'height', height),
				A2(elm$html$Html$Attributes$style, 'padding', '15px'),
				A2(elm$html$Html$Attributes$style, 'margin-left', offset),
				A2(elm$html$Html$Attributes$style, 'background-color', color),
				A2(elm$html$Html$Attributes$style, 'overflow', 'scroll')
			]);
	});
var author$project$View$editorStyle = A4(author$project$View$textStyle, '400px', '635px', '20px', '#eef');
var elm$html$Html$Attributes$value = elm$html$Html$Attributes$stringProperty('value');
var elm$json$Json$Decode$field = _Json_decodeField;
var elm$json$Json$Decode$at = F2(
	function (fields, decoder) {
		return A3(elm$core$List$foldr, elm$json$Json$Decode$field, decoder, fields);
	});
var elm$json$Json$Decode$string = _Json_decodeString;
var elm$html$Html$Events$targetValue = A2(
	elm$json$Json$Decode$at,
	_List_fromArray(
		['target', 'value']),
	elm$json$Json$Decode$string);
var elm$html$Html$Events$onInput = function (tagger) {
	return A2(
		elm$html$Html$Events$on,
		'input',
		A2(elm$json$Json$Decode$map, tagger, elm$html$Html$Events$targetValue));
};
var elm$virtual_dom$VirtualDom$keyedNode = function (tag) {
	return _VirtualDom_keyedNode(
		_VirtualDom_noScript(tag));
};
var elm$html$Html$Keyed$node = elm$virtual_dom$VirtualDom$keyedNode;
var author$project$View$editorPane = function (model) {
	return A3(
		elm$html$Html$Keyed$node,
		'textarea',
		_Utils_ap(
			author$project$View$editorStyle,
			_List_fromArray(
				[
					elm$html$Html$Events$onInput(author$project$Types$GetContent),
					elm$html$Html$Attributes$value(model.o)
				])),
		_List_fromArray(
			[
				_Utils_Tuple2(
				elm$core$String$fromInt(model.j),
				elm$html$Html$text(model.o))
			]));
};
var author$project$View$spacer = function (n) {
	return A2(
		elm$html$Html$div,
		_List_fromArray(
			[
				A2(
				elm$html$Html$Attributes$style,
				'height',
				elm$core$String$fromInt(n) + 'px'),
				A2(elm$html$Html$Attributes$style, 'clear', 'left')
			]),
		_List_Nil);
};
var author$project$View$editor = function (model) {
	return A2(
		elm$html$Html$div,
		_List_fromArray(
			[
				A2(elm$html$Html$Attributes$style, 'float', 'left')
			]),
		_List_fromArray(
			[
				author$project$View$spacer(20),
				author$project$View$buttonBarLeft,
				author$project$View$spacer(5),
				author$project$View$editorPane(model),
				author$project$View$spacer(5),
				author$project$View$buttonBarBottomLeft
			]));
};
var elm$html$Html$Attributes$target = elm$html$Html$Attributes$stringProperty('target');
var author$project$View$link = F2(
	function (url, linkText) {
		return A2(
			elm$html$Html$a,
			_List_fromArray(
				[
					elm$html$Html$Attributes$class('linkback'),
					A2(elm$html$Html$Attributes$style, 'float', 'right'),
					A2(elm$html$Html$Attributes$style, 'margin-right', '10px'),
					elm$html$Html$Attributes$href(url),
					elm$html$Html$Attributes$target('_blank')
				]),
			_List_fromArray(
				[
					elm$html$Html$text(linkText)
				]));
	});
var author$project$View$ribbonStyle = function (color) {
	return _List_fromArray(
		[
			A2(elm$html$Html$Attributes$style, 'width', '840px'),
			A2(elm$html$Html$Attributes$style, 'height', '20px'),
			A2(elm$html$Html$Attributes$style, 'margin-left', '20px'),
			A2(elm$html$Html$Attributes$style, 'margin-bottom', '-16px'),
			A2(elm$html$Html$Attributes$style, 'padding', '8px'),
			A2(elm$html$Html$Attributes$style, 'clear', 'left'),
			A2(elm$html$Html$Attributes$style, 'background-color', color),
			A2(elm$html$Html$Attributes$style, 'color', '#eee')
		]);
};
var author$project$View$wordCount = function (str) {
	return elm$core$List$length(
		A2(elm$core$String$split, ' ', str));
};
var author$project$View$textInfo = function (model) {
	var wc = elm$core$String$fromInt(
		author$project$View$wordCount(model.o)) + ' words, ';
	var cc = elm$core$String$fromInt(
		elm$core$String$length(model.o)) + ' characters';
	return _Utils_ap(wc, cc);
};
var author$project$View$footerRibbon = function (model) {
	return A2(
		elm$html$Html$div,
		author$project$View$ribbonStyle('#777'),
		_List_fromArray(
			[
				elm$html$Html$text(
				author$project$View$textInfo(model)),
				A2(
				elm$html$Html$span,
				_List_fromArray(
					[
						A2(elm$html$Html$Attributes$style, 'margin-left', '4em')
					]),
				_List_fromArray(
					[
						elm$html$Html$text(model.ac)
					])),
				A2(author$project$View$link, 'http://jxxcarlson.github.io', 'jxxcarlson.github.io')
			]));
};
var author$project$View$headerRibbon = A2(
	elm$html$Html$div,
	author$project$View$ribbonStyle('#555'),
	_List_fromArray(
		[
			A2(
			elm$html$Html$span,
			_List_fromArray(
				[
					A2(elm$html$Html$Attributes$style, 'margin-left', '5px')
				]),
			_List_fromArray(
				[
					elm$html$Html$text('MeenyLatex Demo')
				])),
			A2(author$project$View$link, 'http://www.knode.io', 'www.knode.io')
		]));
var author$project$MeenyLatex$Driver$getRenderedText = F2(
	function (macroDefinitions, editRecord) {
		return editRecord.W;
	});
var author$project$View$renderedSourcePane = function (model) {
	return A2(
		elm$html$Html$div,
		_List_Nil,
		A2(
			elm$core$List$map,
			function (x) {
				return A2(
					elm$html$Html$div,
					_List_fromArray(
						[
							A2(elm$html$Html$Attributes$style, 'margin-bottom', '0.65em')
						]),
					_List_fromArray(
						[x]));
			},
			A2(author$project$MeenyLatex$Driver$getRenderedText, '', model.A)));
};
var author$project$View$renderedSource = function (model) {
	return author$project$View$renderedSourcePane(model);
};
var author$project$View$colorDark = '#444';
var author$project$View$optionaViewTitleButton = F2(
	function (model, width) {
		var _n0 = model.q;
		switch (_n0) {
			case 0:
				return A2(
					elm$html$Html$button,
					A2(author$project$View$buttonStyle, author$project$View$colorDark, width),
					_List_fromArray(
						[
							elm$html$Html$text('Basic')
						]));
			case 1:
				return A2(
					elm$html$Html$button,
					A2(author$project$View$buttonStyle, author$project$View$colorDark, width),
					_List_fromArray(
						[
							elm$html$Html$text('Parse results')
						]));
			case 2:
				return A2(
					elm$html$Html$button,
					A2(author$project$View$buttonStyle, author$project$View$colorDark, width),
					_List_fromArray(
						[
							elm$html$Html$text('Raw HTML')
						]));
			default:
				return A2(
					elm$html$Html$button,
					A2(author$project$View$buttonStyle, author$project$View$colorDark, width),
					_List_fromArray(
						[
							elm$html$Html$text('Latex (2)')
						]));
		}
	});
var author$project$Types$SetHorizontalView = {$: 11};
var author$project$View$colorLight = '#88a';
var author$project$View$setHorizontalViewButton = F2(
	function (model, width) {
		return (!model.ab) ? A2(
			elm$html$Html$button,
			_Utils_ap(
				_List_fromArray(
					[
						elm$html$Html$Events$onClick(author$project$Types$SetHorizontalView)
					]),
				A2(author$project$View$buttonStyle, author$project$View$colorBlue, width)),
			_List_fromArray(
				[
					elm$html$Html$text('Horizontal')
				])) : A2(
			elm$html$Html$button,
			_Utils_ap(
				_List_fromArray(
					[
						elm$html$Html$Events$onClick(author$project$Types$SetHorizontalView)
					]),
				A2(author$project$View$buttonStyle, author$project$View$colorLight, width)),
			_List_fromArray(
				[
					elm$html$Html$text('Horizontal')
				]));
	});
var author$project$Types$SetVerticalView = {$: 12};
var author$project$View$setVerticalViewButton = F2(
	function (model, width) {
		return (model.ab === 1) ? A2(
			elm$html$Html$button,
			_Utils_ap(
				_List_fromArray(
					[
						elm$html$Html$Events$onClick(author$project$Types$SetVerticalView)
					]),
				A2(author$project$View$buttonStyle, author$project$View$colorBlue, width)),
			_List_fromArray(
				[
					elm$html$Html$text('Vertical')
				])) : A2(
			elm$html$Html$button,
			_Utils_ap(
				_List_fromArray(
					[
						elm$html$Html$Events$onClick(author$project$Types$SetVerticalView)
					]),
				A2(author$project$View$buttonStyle, author$project$View$colorLight, width)),
			_List_fromArray(
				[
					elm$html$Html$text('Vertical')
				]));
	});
var author$project$View$buttonBarParserResults = function (model) {
	return A2(
		elm$html$Html$div,
		_List_fromArray(
			[
				A2(elm$html$Html$Attributes$style, 'margin-left', '20px'),
				A2(elm$html$Html$Attributes$style, 'margin-top', '0')
			]),
		_List_fromArray(
			[
				A2(author$project$View$optionaViewTitleButton, model, 190),
				A2(author$project$View$setHorizontalViewButton, model, 90),
				A2(author$project$View$setVerticalViewButton, model, 90)
			]));
};
var author$project$View$textStyle2 = F4(
	function (width, height, offset, color) {
		return _List_fromArray(
			[
				A2(elm$html$Html$Attributes$style, 'width', width),
				A2(elm$html$Html$Attributes$style, 'height', height),
				A2(elm$html$Html$Attributes$style, 'padding', '15px'),
				A2(elm$html$Html$Attributes$style, 'margin-top', '0'),
				A2(elm$html$Html$Attributes$style, 'margin-left', offset),
				A2(elm$html$Html$Attributes$style, 'background-color', color),
				A2(elm$html$Html$Attributes$style, 'overflow', 'scroll')
			]);
	});
var author$project$View$parseResultsStyle = A4(author$project$View$textStyle2, '400px', '600px', '20px', '#eee');
var author$project$View$parseResultPane = function (model) {
	return A2(
		elm$html$Html$pre,
		author$project$View$parseResultsStyle,
		_List_fromArray(
			[
				elm$html$Html$text('NOT IMPLEMENTED')
			]));
};
var author$project$View$showParseResult = function (model) {
	return A2(
		elm$html$Html$div,
		_List_fromArray(
			[
				A2(elm$html$Html$Attributes$style, 'float', 'left')
			]),
		_List_fromArray(
			[
				author$project$View$spacer(20),
				author$project$View$buttonBarParserResults(model),
				author$project$View$spacer(5),
				author$project$View$parseResultPane(model)
			]));
};
var author$project$Main$parseResultsView = function (model) {
	return A2(
		elm$html$Html$div,
		_List_fromArray(
			[
				A2(elm$html$Html$Attributes$style, 'float', 'left')
			]),
		_List_fromArray(
			[
				author$project$View$headerRibbon,
				author$project$View$editor(model),
				author$project$View$renderedSource(model),
				author$project$View$showParseResult(model),
				author$project$View$spacer(5),
				author$project$View$footerRibbon(model)
			]));
};
var author$project$View$buttonBarRawHtmlResults = function (model) {
	return A2(
		elm$html$Html$div,
		_List_fromArray(
			[
				A2(elm$html$Html$Attributes$style, 'margin-left', '20px'),
				A2(elm$html$Html$Attributes$style, 'margin-top', '0')
			]),
		_List_fromArray(
			[
				A2(author$project$View$optionaViewTitleButton, model, 190)
			]));
};
var author$project$View$rawRenderedSourcePane = function (model) {
	var renderedText = A2(author$project$MeenyLatex$Driver$getRenderedText, '', model.A);
	return A2(
		elm$html$Html$pre,
		author$project$View$parseResultsStyle,
		_List_fromArray(
			[
				elm$html$Html$text('Not currently available')
			]));
};
var author$project$View$showHtmlResult = function (model) {
	return A2(
		elm$html$Html$div,
		_List_fromArray(
			[
				A2(elm$html$Html$Attributes$style, 'float', 'left')
			]),
		_List_fromArray(
			[
				author$project$View$spacer(20),
				author$project$View$buttonBarRawHtmlResults(model),
				author$project$View$spacer(5),
				author$project$View$rawRenderedSourcePane(model)
			]));
};
var author$project$Main$rawHtmlResultsView = function (model) {
	return A2(
		elm$html$Html$div,
		_List_fromArray(
			[
				A2(elm$html$Html$Attributes$style, 'float', 'left')
			]),
		_List_fromArray(
			[
				author$project$View$headerRibbon,
				author$project$View$editor(model),
				author$project$View$renderedSource(model),
				author$project$View$showHtmlResult(model),
				author$project$View$spacer(5),
				author$project$View$footerRibbon(model)
			]));
};
var author$project$View$buttonBarBottomRight = function (model) {
	return A2(
		elm$html$Html$div,
		_List_fromArray(
			[
				A2(elm$html$Html$Attributes$style, 'margin-left', '20px')
			]),
		_List_Nil);
};
var author$project$MeenyLatex$RenderLatexForExport$fixBadChars = function (str) {
	return A3(
		elm$core$String$replace,
		'#',
		'\\#',
		A3(elm$core$String$replace, '_', '\\_', str));
};
var author$project$MeenyLatex$RenderLatexForExport$getElement = F2(
	function (k, list) {
		return A2(
			elm$core$Maybe$withDefault,
			author$project$MeenyLatex$Parser$LXString('xxx'),
			A2(author$project$MeenyLatex$Utility$getAt, k, list));
	});
var author$project$MeenyLatex$RenderLatexForExport$getExportUrl = function (url) {
	var parts = A2(elm$core$String$split, '/', url);
	var n = elm$core$List$length(parts);
	var lastPart = A2(
		elm$core$Maybe$withDefault,
		'xxx',
		elm$core$List$head(
			A2(elm$core$List$drop, n - 1, parts)));
	return 'image/' + lastPart;
};
var author$project$MeenyLatex$RenderLatexForExport$imageAlignCenter = F3(
	function (exportUrl, label, width) {
		return '\\imagecenter{' + (exportUrl + ('}{' + (label + ('}{' + (width + '}')))));
	});
var author$project$MeenyLatex$RenderLatexForExport$imageFloatLeft = F3(
	function (exportUrl, label, width) {
		return '\\imagefloatleft{' + (exportUrl + ('}{' + (label + ('}{' + (width + '}')))));
	});
var author$project$MeenyLatex$RenderLatexForExport$imageFloatRight = F3(
	function (exportUrl, label, width) {
		return '\\imagefloatright{' + (exportUrl + ('}{' + (label + ('}{' + (width + '}')))));
	});
var author$project$MeenyLatex$RenderLatexForExport$renderComment = function (str) {
	return '% ' + (str + '\n');
};
var author$project$MeenyLatex$RenderLatexForExport$renderUseForWeb = function (body) {
	return '';
};
var elm$core$List$tail = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return elm$core$Maybe$Just(xs);
	} else {
		return elm$core$Maybe$Nothing;
	}
};
var author$project$MeenyLatex$RenderLatexForExport$macroRenderer = function (name) {
	var _n4 = A2(
		elm$core$Dict$get,
		name,
		author$project$MeenyLatex$RenderLatexForExport$cyclic$renderMacroDict());
	if (!_n4.$) {
		var f = _n4.a;
		return f;
	} else {
		return author$project$MeenyLatex$RenderLatexForExport$reproduceMacro(name);
	}
};
var author$project$MeenyLatex$RenderLatexForExport$render = function (latexExpression) {
	switch (latexExpression.$) {
		case 1:
			var str = latexExpression.a;
			return author$project$MeenyLatex$RenderLatexForExport$renderComment(str);
		case 6:
			var name = latexExpression.a;
			var optArgs = latexExpression.b;
			var args = latexExpression.c;
			return A3(author$project$MeenyLatex$RenderLatexForExport$renderMacro, name, optArgs, args);
		case 5:
			var name = latexExpression.a;
			var optArgs = latexExpression.b;
			var args = latexExpression.c;
			var le = latexExpression.d;
			return A4(author$project$MeenyLatex$RenderLatexForExport$renderSMacro, name, optArgs, args, le);
		case 2:
			var level = latexExpression.a;
			var latexExpression_ = latexExpression.b;
			return A2(author$project$MeenyLatex$RenderLatexForExport$renderItem, level, latexExpression_);
		case 3:
			var str = latexExpression.a;
			return ' $' + (str + '$ ');
		case 4:
			var str = latexExpression.a;
			return '$$' + (str + '$$');
		case 7:
			var name = latexExpression.a;
			var args = latexExpression.b;
			var body = latexExpression.c;
			return A3(author$project$MeenyLatex$RenderLatexForExport$renderEnvironment, name, args, body);
		case 8:
			var args = latexExpression.a;
			return author$project$MeenyLatex$RenderLatexForExport$renderLatexList(args);
		case 0:
			var str = latexExpression.a;
			return str;
		default:
			var error = latexExpression.a;
			return A2(
				elm$core$String$join,
				'; ',
				A2(elm$core$List$map, author$project$MeenyLatex$ErrorMessages$renderError, error));
	}
};
var author$project$MeenyLatex$RenderLatexForExport$renderArg = F2(
	function (k, args) {
		return elm$core$String$trim(
			author$project$MeenyLatex$RenderLatexForExport$render(
				A2(author$project$MeenyLatex$RenderLatexForExport$getElement, k, args)));
	});
var author$project$MeenyLatex$RenderLatexForExport$renderArgList = function (args) {
	return A2(
		elm$core$String$join,
		'',
		A2(
			elm$core$List$map,
			function (x) {
				return '{' + (x + '}');
			},
			A2(
				elm$core$List$map,
				author$project$MeenyLatex$RenderLatexForExport$fixBadChars,
				A2(elm$core$List$map, author$project$MeenyLatex$RenderLatexForExport$render, args))));
};
var author$project$MeenyLatex$RenderLatexForExport$renderCleanedArgList = function (args) {
	return A2(
		elm$core$String$join,
		'',
		A2(
			elm$core$List$map,
			function (x) {
				return '{' + (x + '}');
			},
			A2(
				elm$core$List$map,
				author$project$MeenyLatex$RenderLatexForExport$fixBadChars,
				A2(elm$core$List$map, author$project$MeenyLatex$RenderLatexForExport$render, args))));
};
var author$project$MeenyLatex$RenderLatexForExport$renderCode = F2(
	function (optArgs, args) {
		return ' \\code' + (author$project$MeenyLatex$RenderLatexForExport$renderOptArgList(optArgs) + author$project$MeenyLatex$RenderLatexForExport$renderCleanedArgList(args));
	});
var author$project$MeenyLatex$RenderLatexForExport$renderDefaultEnvironment = F3(
	function (name, args, body) {
		var slimBody = elm$core$String$trim(
			author$project$MeenyLatex$RenderLatexForExport$render(body));
		return '\\begin{' + (name + ('}' + (author$project$MeenyLatex$RenderLatexForExport$renderArgList(args) + ('\n' + (slimBody + ('\n\\end{' + (name + '}\n')))))));
	});
var author$project$MeenyLatex$RenderLatexForExport$renderEnvironment = F3(
	function (name, args, body) {
		var _n2 = A2(
			elm$core$Dict$get,
			name,
			author$project$MeenyLatex$RenderLatexForExport$cyclic$renderEnvironmentDict());
		if (!_n2.$) {
			var f = _n2.a;
			return f(body);
		} else {
			return A3(author$project$MeenyLatex$RenderLatexForExport$renderDefaultEnvironment, name, args, body);
		}
	});
var author$project$MeenyLatex$RenderLatexForExport$renderHref = F2(
	function (optArgs, args) {
		return ' \\href' + author$project$MeenyLatex$RenderLatexForExport$renderSpecialArgList(args);
	});
var author$project$MeenyLatex$RenderLatexForExport$renderImage = function (args) {
	var url = A2(author$project$MeenyLatex$RenderLatexForExport$renderArg, 0, args);
	var label = A2(author$project$MeenyLatex$RenderLatexForExport$renderArg, 1, args);
	var exportUrl = author$project$MeenyLatex$RenderLatexForExport$getExportUrl(url);
	var attributeString = A2(author$project$MeenyLatex$RenderLatexForExport$renderArg, 2, args);
	var imageAttrs = author$project$MeenyLatex$Image$parseImageAttributes(attributeString);
	var width_ = function (x) {
		return 2.5 * x;
	}(imageAttrs.al);
	var width = elm$core$String$fromFloat(width_) + 'px';
	var _n1 = _Utils_Tuple2(imageAttrs.bg, imageAttrs.a6);
	switch (_n1.a) {
		case 'left':
			return A3(author$project$MeenyLatex$RenderLatexForExport$imageFloatLeft, exportUrl, label, width);
		case 'right':
			return A3(author$project$MeenyLatex$RenderLatexForExport$imageFloatRight, exportUrl, label, width);
		default:
			if (_n1.b === 'center') {
				return A3(author$project$MeenyLatex$RenderLatexForExport$imageAlignCenter, exportUrl, label, width);
			} else {
				return A3(author$project$MeenyLatex$RenderLatexForExport$imageAlignCenter, exportUrl, label, width);
			}
	}
};
var author$project$MeenyLatex$RenderLatexForExport$renderItem = F2(
	function (level, latexExpression) {
		return '\\item ' + (author$project$MeenyLatex$RenderLatexForExport$render(latexExpression) + '\n\n');
	});
var author$project$MeenyLatex$RenderLatexForExport$renderLatexList = function (args) {
	return author$project$MeenyLatex$JoinStrings$joinList(
		A2(elm$core$List$map, author$project$MeenyLatex$RenderLatexForExport$render, args));
};
var author$project$MeenyLatex$RenderLatexForExport$renderListing = function (body) {
	var text = author$project$MeenyLatex$RenderLatexForExport$render(body);
	return '\n\\begin{verbatim}\n' + (author$project$MeenyLatex$Utility$addLineNumbers(text) + '\n\\end{verbatim}\n');
};
var author$project$MeenyLatex$RenderLatexForExport$renderMacro = F3(
	function (name, optArgs, args) {
		return A3(author$project$MeenyLatex$RenderLatexForExport$macroRenderer, name, optArgs, args);
	});
var author$project$MeenyLatex$RenderLatexForExport$renderOptArgList = function (args) {
	return A2(
		elm$core$String$join,
		'',
		A2(
			elm$core$List$map,
			function (x) {
				return '[' + (x + ']');
			},
			A2(elm$core$List$map, author$project$MeenyLatex$RenderLatexForExport$render, args)));
};
var author$project$MeenyLatex$RenderLatexForExport$renderSMacro = F4(
	function (name, optArgs, args, le) {
		return ' \\' + (name + (author$project$MeenyLatex$RenderLatexForExport$renderOptArgList(optArgs) + (author$project$MeenyLatex$RenderLatexForExport$renderArgList(args) + (' ' + (author$project$MeenyLatex$RenderLatexForExport$render(le) + '\n\n')))));
	});
var author$project$MeenyLatex$RenderLatexForExport$renderSpecialArgList = function (args) {
	var tail = elm$core$List$tail(args);
	var renderedTail = A2(elm$core$Maybe$map, author$project$MeenyLatex$RenderLatexForExport$renderCleanedArgList, tail);
	var head = elm$core$List$head(args);
	var renderedHead = A2(elm$core$Maybe$map, author$project$MeenyLatex$RenderLatexForExport$render, head);
	var _n0 = _Utils_Tuple2(renderedHead, renderedTail);
	if ((!_n0.a.$) && (!_n0.b.$)) {
		var h = _n0.a.a;
		var t = _n0.b.a;
		return '{' + (h + ('}' + t));
	} else {
		return '';
	}
};
var author$project$MeenyLatex$RenderLatexForExport$reproduceMacro = F3(
	function (name, optArgs, args) {
		return ' \\' + (name + (author$project$MeenyLatex$RenderLatexForExport$renderOptArgList(optArgs) + author$project$MeenyLatex$RenderLatexForExport$renderArgList(args)));
	});
function author$project$MeenyLatex$RenderLatexForExport$cyclic$renderEnvironmentDict() {
	return elm$core$Dict$fromList(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'listing',
				function (x) {
					return author$project$MeenyLatex$RenderLatexForExport$renderListing(x);
				}),
				_Utils_Tuple2(
				'useforweb',
				function (x) {
					return author$project$MeenyLatex$RenderLatexForExport$renderUseForWeb(x);
				})
			]));
}
function author$project$MeenyLatex$RenderLatexForExport$cyclic$renderMacroDict() {
	return elm$core$Dict$fromList(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'image',
				F2(
					function (x, y) {
						return author$project$MeenyLatex$RenderLatexForExport$renderImage(y);
					})),
				_Utils_Tuple2(
				'code',
				F2(
					function (x, y) {
						return A2(author$project$MeenyLatex$RenderLatexForExport$renderCode, x, y);
					})),
				_Utils_Tuple2(
				'href',
				F2(
					function (x, y) {
						return A2(author$project$MeenyLatex$RenderLatexForExport$renderHref, x, y);
					}))
			]));
}
var author$project$MeenyLatex$RenderLatexForExport$renderEnvironmentDict = author$project$MeenyLatex$RenderLatexForExport$cyclic$renderEnvironmentDict();
author$project$MeenyLatex$RenderLatexForExport$cyclic$renderEnvironmentDict = function () {
	return author$project$MeenyLatex$RenderLatexForExport$renderEnvironmentDict;
};
var author$project$MeenyLatex$RenderLatexForExport$renderMacroDict = author$project$MeenyLatex$RenderLatexForExport$cyclic$renderMacroDict();
author$project$MeenyLatex$RenderLatexForExport$cyclic$renderMacroDict = function () {
	return author$project$MeenyLatex$RenderLatexForExport$renderMacroDict;
};
var author$project$MeenyLatex$RenderLatexForExport$renderLatexForExport = function (str) {
	return A3(
		elm$core$List$foldl,
		F2(
			function (par, acc) {
				return acc + (par + '\n\n');
			}),
		'',
		A2(
			elm$core$List$map,
			author$project$MeenyLatex$RenderLatexForExport$renderLatexList,
			A2(
				elm$core$List$map,
				author$project$MeenyLatex$Parser$parse,
				author$project$MeenyLatex$Paragraph$logicalParagraphify(str))));
};
var author$project$View$textStyle3 = F4(
	function (width, height, offset, color) {
		return _List_fromArray(
			[
				A2(elm$html$Html$Attributes$style, 'width', width),
				A2(elm$html$Html$Attributes$style, 'height', height),
				A2(elm$html$Html$Attributes$style, 'padding', '15px'),
				A2(elm$html$Html$Attributes$style, 'margin-top', '20px'),
				A2(elm$html$Html$Attributes$style, 'margin-left', offset),
				A2(elm$html$Html$Attributes$style, 'background-color', color),
				A2(elm$html$Html$Attributes$style, 'overflow', 'scroll')
			]);
	});
var author$project$View$reRenderedLatexStyle = A4(author$project$View$textStyle3, '400px', '600px', '20px', '#eee');
var author$project$View$renderToLatexPane = function (model) {
	var rerenderedText = author$project$MeenyLatex$RenderLatexForExport$renderLatexForExport(model.o);
	return A2(
		elm$html$Html$pre,
		author$project$View$reRenderedLatexStyle,
		_List_fromArray(
			[
				elm$html$Html$text(rerenderedText)
			]));
};
var author$project$View$viewLabel = F2(
	function (text_, width) {
		return A2(
			elm$html$Html$button,
			_Utils_ap(
				A2(author$project$View$buttonStyle, author$project$View$colorDark, width),
				_List_fromArray(
					[
						A2(elm$html$Html$Attributes$style, 'margin-left', '20px')
					])),
			_List_fromArray(
				[
					elm$html$Html$text(text_)
				]));
	});
var author$project$View$renderToLatex = function (model) {
	return A2(
		elm$html$Html$div,
		_List_fromArray(
			[
				A2(elm$html$Html$Attributes$style, 'float', 'left')
			]),
		_List_fromArray(
			[
				author$project$View$spacer(20),
				A2(author$project$View$viewLabel, 'Text parsed and rendered back to LaTeX (Almost Identity)', 400),
				author$project$View$spacer(5),
				author$project$View$renderToLatexPane(model),
				author$project$View$spacer(5),
				author$project$View$buttonBarBottomRight(model)
			]));
};
var author$project$Main$renderToLatexView = function (model) {
	return A2(
		elm$html$Html$div,
		_List_fromArray(
			[
				A2(elm$html$Html$Attributes$style, 'float', 'left')
			]),
		_List_fromArray(
			[
				author$project$View$headerRibbon,
				author$project$View$editor(model),
				author$project$View$renderedSource(model),
				author$project$View$renderToLatex(model),
				author$project$View$spacer(5),
				author$project$View$footerRibbon(model)
			]));
};
var author$project$View$renderedLatexStyle = A4(author$project$View$textStyle3, '420px', '670px', '40px', '#eee');
var author$project$Main$standardView = function (model) {
	return A2(
		elm$html$Html$div,
		_List_fromArray(
			[
				A2(elm$html$Html$Attributes$style, 'float', 'left')
			]),
		_List_fromArray(
			[
				author$project$View$headerRibbon,
				author$project$View$editor(model),
				A2(
				elm$html$Html$div,
				author$project$View$renderedLatexStyle,
				_List_fromArray(
					[
						author$project$View$renderedSource(model)
					])),
				author$project$View$spacer(5),
				author$project$View$footerRibbon(model)
			]));
};
var author$project$Main$mainView = function (model) {
	var _n0 = model.q;
	switch (_n0) {
		case 0:
			return author$project$Main$standardView(model);
		case 1:
			return author$project$Main$parseResultsView(model);
		case 2:
			return author$project$Main$rawHtmlResultsView(model);
		default:
			return author$project$Main$renderToLatexView(model);
	}
};
var author$project$View$appWidth = function (configuration) {
	switch (configuration) {
		case 0:
			return '900px';
		case 3:
			return '1350px';
		case 1:
			return '1350px';
		default:
			return '1350px';
	}
};
var author$project$Main$view = function (model) {
	return A2(
		elm$html$Html$div,
		_List_fromArray(
			[
				A2(
				elm$html$Html$Attributes$style,
				'width',
				author$project$View$appWidth(model.q)),
				A2(elm$html$Html$Attributes$style, 'margin', 'auto')
			]),
		_List_fromArray(
			[
				author$project$Main$mainView(model)
			]));
};
var elm$browser$Browser$NotFound = elm$core$Basics$identity;
var elm$browser$Browser$embed = _Browser_embed;
var elm$json$Json$Decode$andThen = _Json_andThen;
var elm$json$Json$Decode$int = _Json_decodeInt;
var author$project$Main$main = elm$browser$Browser$embed(
	{bj: author$project$Main$init, bx: author$project$Main$subscriptions, bA: author$project$Main$update, bB: author$project$Main$view});
_Platform_export({'Main':author$project$Main$main(
	A2(
		elm$json$Json$Decode$andThen,
		function (width) {
			return A2(
				elm$json$Json$Decode$andThen,
				function (height) {
					return elm$json$Json$Decode$succeed(
						{_: height, al: width});
				},
				A2(elm$json$Json$Decode$field, 'height', elm$json$Json$Decode$int));
		},
		A2(elm$json$Json$Decode$field, 'width', elm$json$Json$Decode$int)))(0)({})});}(this));
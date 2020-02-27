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

console.warn('Compiled in DEV mode. Follow the advice at https://elm-lang.org/0.19.1/optimize for better performance and smaller assets.');


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



// LOG

var _Debug_log_UNUSED = F2(function(tag, value)
{
	return value;
});

var _Debug_log = F2(function(tag, value)
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

function _Debug_toString_UNUSED(value)
{
	return '<internals>';
}

function _Debug_toString(value)
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
				+ _Debug_toAnsiString(ansi, $elm$core$Set$toList(value));
		}

		if (tag === 'RBNode_elm_builtin' || tag === 'RBEmpty_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Dict')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Dict$toList(value));
		}

		if (tag === 'Array_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Array')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Array$toList(value));
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

	if (typeof DataView === 'function' && value instanceof DataView)
	{
		return _Debug_stringColor(ansi, '<' + value.byteLength + ' bytes>');
	}

	if (typeof File !== 'undefined' && value instanceof File)
	{
		return _Debug_internalColor(ansi, '<' + value.name + '>');
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
	return ansi ? '\x1b[36m' + string + '\x1b[0m' : string;
}

function _Debug_toHexDigit(n)
{
	return String.fromCharCode(n < 10 ? 48 + n : 55 + n);
}


// CRASH


function _Debug_crash_UNUSED(identifier)
{
	throw new Error('https://github.com/elm/core/blob/1.0.0/hints/' + identifier + '.md');
}


function _Debug_crash(identifier, fact1, fact2, fact3, fact4)
{
	switch(identifier)
	{
		case 0:
			throw new Error('What node should I take over? In JavaScript I need something like:\n\n    Elm.Main.init({\n        node: document.getElementById("elm-node")\n    })\n\nYou need to do this with any Browser.sandbox or Browser.element program.');

		case 1:
			throw new Error('Browser.application programs cannot handle URLs like this:\n\n    ' + document.location.href + '\n\nWhat is the root? The root of your file system? Try looking at this program with `elm reactor` or some other server.');

		case 2:
			var jsonErrorString = fact1;
			throw new Error('Problem with the flags given to your Elm program on initialization.\n\n' + jsonErrorString);

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
	if (region.start.line === region.end.line)
	{
		return 'on line ' + region.start.line;
	}
	return 'on lines ' + region.start.line + ' through ' + region.end.line;
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
	if (x === y)
	{
		return true;
	}

	if (typeof x !== 'object' || x === null || y === null)
	{
		typeof x === 'function' && _Debug_crash(5);
		return false;
	}

	if (depth > 100)
	{
		stack.push(_Utils_Tuple2(x,y));
		return true;
	}

	/**/
	if (x.$ === 'Set_elm_builtin')
	{
		x = $elm$core$Set$toList(x);
		y = $elm$core$Set$toList(y);
	}
	if (x.$ === 'RBNode_elm_builtin' || x.$ === 'RBEmpty_elm_builtin')
	{
		x = $elm$core$Dict$toList(x);
		y = $elm$core$Dict$toList(y);
	}
	//*/

	/**_UNUSED/
	if (x.$ < 0)
	{
		x = $elm$core$Dict$toList(x);
		y = $elm$core$Dict$toList(y);
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

	/**/
	if (x instanceof String)
	{
		var a = x.valueOf();
		var b = y.valueOf();
		return a === b ? 0 : a < b ? -1 : 1;
	}
	//*/

	/**_UNUSED/
	if (typeof x.$ === 'undefined')
	//*/
	/**/
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
	return n < 0 ? $elm$core$Basics$LT : n ? $elm$core$Basics$GT : $elm$core$Basics$EQ;
});


// COMMON VALUES

var _Utils_Tuple0_UNUSED = 0;
var _Utils_Tuple0 = { $: '#0' };

function _Utils_Tuple2_UNUSED(a, b) { return { a: a, b: b }; }
function _Utils_Tuple2(a, b) { return { $: '#2', a: a, b: b }; }

function _Utils_Tuple3_UNUSED(a, b, c) { return { a: a, b: b, c: c }; }
function _Utils_Tuple3(a, b, c) { return { $: '#3', a: a, b: b, c: c }; }

function _Utils_chr_UNUSED(c) { return c; }
function _Utils_chr(c) { return new String(c); }


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



var _List_Nil_UNUSED = { $: 0 };
var _List_Nil = { $: '[]' };

function _List_Cons_UNUSED(hd, tl) { return { $: 1, a: hd, b: tl }; }
function _List_Cons(hd, tl) { return { $: '::', a: hd, b: tl }; }


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
		return ord === $elm$core$Basics$EQ ? 0 : ord === $elm$core$Basics$LT ? -1 : 1;
	}));
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



var _String_cons = F2(function(chr, str)
{
	return chr + str;
});

function _String_uncons(string)
{
	var word = string.charCodeAt(0);
	return !isNaN(word)
		? $elm$core$Maybe$Just(
			0xD800 <= word && word <= 0xDBFF
				? _Utils_Tuple2(_Utils_chr(string[0] + string[1]), string.slice(2))
				: _Utils_Tuple2(_Utils_chr(string[0]), string.slice(1))
		)
		: $elm$core$Maybe$Nothing;
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

function _String_toInt(str)
{
	var total = 0;
	var code0 = str.charCodeAt(0);
	var start = code0 == 0x2B /* + */ || code0 == 0x2D /* - */ ? 1 : 0;

	for (var i = start; i < str.length; ++i)
	{
		var code = str.charCodeAt(i);
		if (code < 0x30 || 0x39 < code)
		{
			return $elm$core$Maybe$Nothing;
		}
		total = 10 * total + code - 0x30;
	}

	return i == start
		? $elm$core$Maybe$Nothing
		: $elm$core$Maybe$Just(code0 == 0x2D ? -total : total);
}


// FLOAT CONVERSIONS

function _String_toFloat(s)
{
	// check if it is a hex, octal, or binary number
	if (s.length === 0 || /[\sxbo]/.test(s))
	{
		return $elm$core$Maybe$Nothing;
	}
	var n = +s;
	// faster isNaN check
	return n === n ? $elm$core$Maybe$Just(n) : $elm$core$Maybe$Nothing;
}

function _String_fromList(chars)
{
	return _List_toArray(chars).join('');
}




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
			String.fromCharCode(Math.floor(code / 0x400) + 0xD800, code % 0x400 + 0xDC00)
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



/**/
function _Json_errorToString(error)
{
	return $elm$json$Json$Decode$errorToString(error);
}
//*/


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

function _Json_decodePrim(decoder)
{
	return { $: 2, b: decoder };
}

var _Json_decodeInt = _Json_decodePrim(function(value) {
	return (typeof value !== 'number')
		? _Json_expecting('an INT', value)
		:
	(-2147483647 < value && value < 2147483647 && (value | 0) === value)
		? $elm$core$Result$Ok(value)
		:
	(isFinite(value) && !(value % 1))
		? $elm$core$Result$Ok(value)
		: _Json_expecting('an INT', value);
});

var _Json_decodeBool = _Json_decodePrim(function(value) {
	return (typeof value === 'boolean')
		? $elm$core$Result$Ok(value)
		: _Json_expecting('a BOOL', value);
});

var _Json_decodeFloat = _Json_decodePrim(function(value) {
	return (typeof value === 'number')
		? $elm$core$Result$Ok(value)
		: _Json_expecting('a FLOAT', value);
});

var _Json_decodeValue = _Json_decodePrim(function(value) {
	return $elm$core$Result$Ok(_Json_wrap(value));
});

var _Json_decodeString = _Json_decodePrim(function(value) {
	return (typeof value === 'string')
		? $elm$core$Result$Ok(value)
		: (value instanceof String)
			? $elm$core$Result$Ok(value + '')
			: _Json_expecting('a STRING', value);
});

function _Json_decodeList(decoder) { return { $: 3, b: decoder }; }
function _Json_decodeArray(decoder) { return { $: 4, b: decoder }; }

function _Json_decodeNull(value) { return { $: 5, c: value }; }

var _Json_decodeField = F2(function(field, decoder)
{
	return {
		$: 6,
		d: field,
		b: decoder
	};
});

var _Json_decodeIndex = F2(function(index, decoder)
{
	return {
		$: 7,
		e: index,
		b: decoder
	};
});

function _Json_decodeKeyValuePairs(decoder)
{
	return {
		$: 8,
		b: decoder
	};
}

function _Json_mapMany(f, decoders)
{
	return {
		$: 9,
		f: f,
		g: decoders
	};
}

var _Json_andThen = F2(function(callback, decoder)
{
	return {
		$: 10,
		b: decoder,
		h: callback
	};
});

function _Json_oneOf(decoders)
{
	return {
		$: 11,
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
		return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, 'This is not valid JSON! ' + e.message, _Json_wrap(string)));
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
		case 2:
			return decoder.b(value);

		case 5:
			return (value === null)
				? $elm$core$Result$Ok(decoder.c)
				: _Json_expecting('null', value);

		case 3:
			if (!_Json_isArray(value))
			{
				return _Json_expecting('a LIST', value);
			}
			return _Json_runArrayDecoder(decoder.b, value, _List_fromArray);

		case 4:
			if (!_Json_isArray(value))
			{
				return _Json_expecting('an ARRAY', value);
			}
			return _Json_runArrayDecoder(decoder.b, value, _Json_toElmArray);

		case 6:
			var field = decoder.d;
			if (typeof value !== 'object' || value === null || !(field in value))
			{
				return _Json_expecting('an OBJECT with a field named `' + field + '`', value);
			}
			var result = _Json_runHelp(decoder.b, value[field]);
			return ($elm$core$Result$isOk(result)) ? result : $elm$core$Result$Err(A2($elm$json$Json$Decode$Field, field, result.a));

		case 7:
			var index = decoder.e;
			if (!_Json_isArray(value))
			{
				return _Json_expecting('an ARRAY', value);
			}
			if (index >= value.length)
			{
				return _Json_expecting('a LONGER array. Need index ' + index + ' but only see ' + value.length + ' entries', value);
			}
			var result = _Json_runHelp(decoder.b, value[index]);
			return ($elm$core$Result$isOk(result)) ? result : $elm$core$Result$Err(A2($elm$json$Json$Decode$Index, index, result.a));

		case 8:
			if (typeof value !== 'object' || value === null || _Json_isArray(value))
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
					if (!$elm$core$Result$isOk(result))
					{
						return $elm$core$Result$Err(A2($elm$json$Json$Decode$Field, key, result.a));
					}
					keyValuePairs = _List_Cons(_Utils_Tuple2(key, result.a), keyValuePairs);
				}
			}
			return $elm$core$Result$Ok($elm$core$List$reverse(keyValuePairs));

		case 9:
			var answer = decoder.f;
			var decoders = decoder.g;
			for (var i = 0; i < decoders.length; i++)
			{
				var result = _Json_runHelp(decoders[i], value);
				if (!$elm$core$Result$isOk(result))
				{
					return result;
				}
				answer = answer(result.a);
			}
			return $elm$core$Result$Ok(answer);

		case 10:
			var result = _Json_runHelp(decoder.b, value);
			return (!$elm$core$Result$isOk(result))
				? result
				: _Json_runHelp(decoder.h(result.a), value);

		case 11:
			var errors = _List_Nil;
			for (var temp = decoder.g; temp.b; temp = temp.b) // WHILE_CONS
			{
				var result = _Json_runHelp(temp.a, value);
				if ($elm$core$Result$isOk(result))
				{
					return result;
				}
				errors = _List_Cons(result.a, errors);
			}
			return $elm$core$Result$Err($elm$json$Json$Decode$OneOf($elm$core$List$reverse(errors)));

		case 1:
			return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, decoder.a, _Json_wrap(value)));

		case 0:
			return $elm$core$Result$Ok(decoder.a);
	}
}

function _Json_runArrayDecoder(decoder, value, toElmValue)
{
	var len = value.length;
	var array = new Array(len);
	for (var i = 0; i < len; i++)
	{
		var result = _Json_runHelp(decoder, value[i]);
		if (!$elm$core$Result$isOk(result))
		{
			return $elm$core$Result$Err(A2($elm$json$Json$Decode$Index, i, result.a));
		}
		array[i] = result.a;
	}
	return $elm$core$Result$Ok(toElmValue(array));
}

function _Json_isArray(value)
{
	return Array.isArray(value) || (typeof FileList !== 'undefined' && value instanceof FileList);
}

function _Json_toElmArray(array)
{
	return A2($elm$core$Array$initialize, array.length, function(i) { return array[i]; });
}

function _Json_expecting(type, value)
{
	return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, 'Expecting ' + type, _Json_wrap(value)));
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

		case 2:
			return x.b === y.b;

		case 5:
			return x.c === y.c;

		case 3:
		case 4:
		case 8:
			return _Json_equality(x.b, y.b);

		case 6:
			return x.d === y.d && _Json_equality(x.b, y.b);

		case 7:
			return x.e === y.e && _Json_equality(x.b, y.b);

		case 9:
			return x.f === y.f && _Json_listEquality(x.g, y.g);

		case 10:
			return x.h === y.h && _Json_equality(x.b, y.b);

		case 11:
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
	return JSON.stringify(_Json_unwrap(value), null, indentLevel) + '';
});

function _Json_wrap(value) { return { $: 0, a: value }; }
function _Json_unwrap(value) { return value.a; }

function _Json_wrap_UNUSED(value) { return value; }
function _Json_unwrap_UNUSED(value) { return value; }

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


var _Platform_worker = F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.init,
		impl.update,
		impl.subscriptions,
		function() { return function() {} }
	);
});



// INITIALIZE A PROGRAM


function _Platform_initialize(flagDecoder, args, init, update, subscriptions, stepperBuilder)
{
	var result = A2(_Json_run, flagDecoder, _Json_wrap(args ? args['flags'] : undefined));
	$elm$core$Result$isOk(result) || _Debug_crash(2 /**/, _Json_errorToString(result.a) /**/);
	var managers = {};
	result = init(result.a);
	var model = result.a;
	var stepper = stepperBuilder(sendToApp, model);
	var ports = _Platform_setupEffects(managers, sendToApp);

	function sendToApp(msg, viewMetadata)
	{
		result = A2(update, msg, model);
		stepper(model = result.a, viewMetadata);
		_Platform_enqueueEffects(managers, result.b, subscriptions(model));
	}

	_Platform_enqueueEffects(managers, result.b, subscriptions(model));

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
//
// Effects must be queued!
//
// Say your init contains a synchronous command, like Time.now or Time.here
//
//   - This will produce a batch of effects (FX_1)
//   - The synchronous task triggers the subsequent `update` call
//   - This will produce a batch of effects (FX_2)
//
// If we just start dispatching FX_2, subscriptions from FX_2 can be processed
// before subscriptions from FX_1. No good! Earlier versions of this code had
// this problem, leading to these reports:
//
//   https://github.com/elm/core/issues/980
//   https://github.com/elm/core/pull/981
//   https://github.com/elm/compiler/issues/1776
//
// The queue is necessary to avoid ordering issues for synchronous commands.


// Why use true/false here? Why not just check the length of the queue?
// The goal is to detect "are we currently dispatching effects?" If we
// are, we need to bail and let the ongoing while loop handle things.
//
// Now say the queue has 1 element. When we dequeue the final element,
// the queue will be empty, but we are still actively dispatching effects.
// So you could get queue jumping in a really tricky category of cases.
//
var _Platform_effectsQueue = [];
var _Platform_effectsActive = false;


function _Platform_enqueueEffects(managers, cmdBag, subBag)
{
	_Platform_effectsQueue.push({ p: managers, q: cmdBag, r: subBag });

	if (_Platform_effectsActive) return;

	_Platform_effectsActive = true;
	for (var fx; fx = _Platform_effectsQueue.shift(); )
	{
		_Platform_dispatchEffects(fx.p, fx.q, fx.r);
	}
	_Platform_effectsActive = false;
}


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
				s: bag.n,
				t: taggers
			});
			return;
	}
}


function _Platform_toEffect(isCmd, home, taggers, value)
{
	function applyTaggers(x)
	{
		for (var temp = taggers; temp; temp = temp.t)
		{
			x = temp.s(x);
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
		u: converter,
		a: _Platform_setupOutgoingPort
	};
	return _Platform_leaf(name);
}


var _Platform_outgoingPortMap = F2(function(tagger, value) { return value; });


function _Platform_setupOutgoingPort(name)
{
	var subs = [];
	var converter = _Platform_effectManagers[name].u;

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
		u: converter,
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
	var converter = _Platform_effectManagers[name].u;

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

		$elm$core$Result$isOk(result) || _Debug_crash(4, name, result.a);

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


function _Platform_export_UNUSED(exports)
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
			? (name == 'init')
				? _Debug_crash(6)
				: _Platform_mergeExportsProd(obj[name], exports[name])
			: (obj[name] = exports[name]);
	}
}


function _Platform_export(exports)
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
			? (name == 'init')
				? _Debug_crash(6, moduleName)
				: _Platform_mergeExportsDebug(moduleName + '.' + name, obj[name], exports[name])
			: (obj[name] = exports[name]);
	}
}




// HELPERS


var _VirtualDom_divertHrefToApp;

var _VirtualDom_doc = typeof document !== 'undefined' ? document : {};


function _VirtualDom_appendChild(parent, child)
{
	parent.appendChild(child);
}

var _VirtualDom_init = F4(function(virtualNode, flagDecoder, debugMetadata, args)
{
	// NOTE: this function needs _Platform_export available to work

	/**_UNUSED/
	var node = args['node'];
	//*/
	/**/
	var node = args && args['node'] ? args['node'] : _Debug_crash(0);
	//*/

	node.parentNode.replaceChild(
		_VirtualDom_render(virtualNode, function() {}),
		node
	);

	return {};
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

function _VirtualDom_noJavaScriptUri_UNUSED(value)
{
	return /^javascript:/i.test(value.replace(/\s/g,'')) ? '' : value;
}

function _VirtualDom_noJavaScriptUri(value)
{
	return /^javascript:/i.test(value.replace(/\s/g,''))
		? 'javascript:alert("This is an XSS vector. Please use ports or web components instead.")'
		: value;
}

function _VirtualDom_noJavaScriptOrHtmlUri_UNUSED(value)
{
	return /^\s*(javascript:|data:text\/html)/i.test(value) ? '' : value;
}

function _VirtualDom_noJavaScriptOrHtmlUri(value)
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
	var tag = $elm$virtual_dom$VirtualDom$toHandlerInt(handler);

	// 0 = Normal
	// 1 = MayStopPropagation
	// 2 = MayPreventDefault
	// 3 = Custom

	return {
		$: handler.$,
		a:
			!tag
				? A2($elm$json$Json$Decode$map, func, handler.a)
				:
			A3($elm$json$Json$Decode$map2,
				tag < 3
					? _VirtualDom_mapEventTuple
					: _VirtualDom_mapEventRecord,
				$elm$json$Json$Decode$succeed(func),
				handler.a
			)
	};
}

var _VirtualDom_mapEventTuple = F2(function(func, tuple)
{
	return _Utils_Tuple2(func(tuple.a), tuple.b);
});

var _VirtualDom_mapEventRecord = F2(function(func, record)
{
	return {
		message: func(record.message),
		stopPropagation: record.stopPropagation,
		preventDefault: record.preventDefault
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

	if (_VirtualDom_divertHrefToApp && vNode.c == 'a')
	{
		domNode.addEventListener('click', _VirtualDom_divertHrefToApp(domNode));
	}

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
		((key !== 'value' && key !== 'checked') || domNode[key] !== value) && (domNode[key] = value);
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
		typeof value !== 'undefined'
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

		typeof value !== 'undefined'
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
			&& { passive: $elm$virtual_dom$VirtualDom$toHandlerInt(newHandler) < 2 }
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

		if (!$elm$core$Result$isOk(result))
		{
			return;
		}

		var tag = $elm$virtual_dom$VirtualDom$toHandlerInt(handler);

		// 0 = Normal
		// 1 = MayStopPropagation
		// 2 = MayPreventDefault
		// 3 = Custom

		var value = result.a;
		var message = !tag ? value : tag < 3 ? value.a : value.message;
		var stopPropagation = tag == 1 ? value.b : tag == 3 && value.stopPropagation;
		var currentEventNode = (
			stopPropagation && event.stopPropagation(),
			(tag == 2 ? value.b : tag == 3 && value.preventDefault) && event.preventDefault(),
			eventNode
		);
		var tagger;
		var i;
		while (tagger = currentEventNode.j)
		{
			if (typeof tagger == 'function')
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
		currentEventNode(message, stopPropagation); // stopPropagation implies isSync
	}

	callback.q = initialHandler;

	return callback;
}

function _VirtualDom_equalEvents(x, y)
{
	return x.$ == y.$ && _Json_equality(x.a, y.a);
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
		if (xValue === yValue && xKey !== 'value' && xKey !== 'checked'
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
		_VirtualDom_pushPatch(patches, 6, index, {
			v: yLen,
			i: xLen - yLen
		});
	}
	else if (xLen < yLen)
	{
		_VirtualDom_pushPatch(patches, 7, index, {
			v: xLen,
			e: yKids
		});
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

		var newMatch = undefined;
		var oldMatch = undefined;

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
			oldMatch = yKey === xNextKey;
		}

		if (yNext)
		{
			var yNextKey = yNext.a;
			var yNextNode = yNext.b;
			newMatch = xKey === yNextKey;
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
			w: localPatches,
			x: inserts,
			y: endInserts
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
			z: vnode,
			r: yIndex,
			s: undefined
		};

		inserts.push({ r: yIndex, A: entry });
		changes[key] = entry;

		return;
	}

	// this key was removed earlier, a match!
	if (entry.c === 1)
	{
		inserts.push({ r: yIndex, A: entry });

		entry.c = 2;
		var subPatches = [];
		_VirtualDom_diffHelp(entry.z, vnode, subPatches, entry.r);
		entry.r = yIndex;
		entry.s.s = {
			w: subPatches,
			A: entry
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
			z: vnode,
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
		_VirtualDom_diffHelp(vnode, entry.z, subPatches, index);

		_VirtualDom_pushPatch(localPatches, 9, index, {
			w: subPatches,
			A: entry
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

			var subPatches = patch.s.w;
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
				data.A.s = domNode;
				var subPatches = data.w;
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
			var data = patch.s;
			for (var i = 0; i < data.i; i++)
			{
				domNode.removeChild(domNode.childNodes[data.v]);
			}
			return domNode;

		case 7:
			var data = patch.s;
			var kids = data.e;
			var i = data.v;
			var theEnd = domNode.childNodes[i];
			for (; i < kids.length; i++)
			{
				domNode.insertBefore(_VirtualDom_render(kids[i], patch.u), theEnd);
			}
			return domNode;

		case 9:
			var data = patch.s;
			if (!data)
			{
				domNode.parentNode.removeChild(domNode);
				return domNode;
			}
			var entry = data.A;
			if (typeof entry.r !== 'undefined')
			{
				domNode.parentNode.removeChild(domNode);
			}
			entry.s = _VirtualDom_applyPatchesHelp(domNode, data.w);
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
	var frag = _VirtualDom_applyPatchReorderEndInsertsHelp(data.y, patch);

	// removals
	domNode = _VirtualDom_applyPatchesHelp(domNode, data.w);

	// inserts
	var inserts = data.x;
	for (var i = 0; i < inserts.length; i++)
	{
		var insert = inserts[i];
		var entry = insert.A;
		var node = entry.c === 2
			? entry.s
			: _VirtualDom_render(entry.z, patch.u);
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
		var entry = insert.A;
		_VirtualDom_appendChild(frag, entry.c === 2
			? entry.s
			: _VirtualDom_render(entry.z, patch.u)
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




// ELEMENT


var _Debugger_element;

var _Browser_element = _Debugger_element || F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.init,
		impl.update,
		impl.subscriptions,
		function(sendToApp, initialModel) {
			var view = impl.view;
			/**_UNUSED/
			var domNode = args['node'];
			//*/
			/**/
			var domNode = args && args['node'] ? args['node'] : _Debug_crash(0);
			//*/
			var currNode = _VirtualDom_virtualize(domNode);

			return _Browser_makeAnimator(initialModel, function(model)
			{
				var nextNode = view(model);
				var patches = _VirtualDom_diff(currNode, nextNode);
				domNode = _VirtualDom_applyPatches(domNode, currNode, patches, sendToApp);
				currNode = nextNode;
			});
		}
	);
});



// DOCUMENT


var _Debugger_document;

var _Browser_document = _Debugger_document || F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.init,
		impl.update,
		impl.subscriptions,
		function(sendToApp, initialModel) {
			var divertHrefToApp = impl.setup && impl.setup(sendToApp)
			var view = impl.view;
			var title = _VirtualDom_doc.title;
			var bodyNode = _VirtualDom_doc.body;
			var currNode = _VirtualDom_virtualize(bodyNode);
			return _Browser_makeAnimator(initialModel, function(model)
			{
				_VirtualDom_divertHrefToApp = divertHrefToApp;
				var doc = view(model);
				var nextNode = _VirtualDom_node('body')(_List_Nil)(doc.body);
				var patches = _VirtualDom_diff(currNode, nextNode);
				bodyNode = _VirtualDom_applyPatches(bodyNode, currNode, patches, sendToApp);
				currNode = nextNode;
				_VirtualDom_divertHrefToApp = 0;
				(title !== doc.title) && (_VirtualDom_doc.title = title = doc.title);
			});
		}
	);
});



// ANIMATION


var _Browser_cancelAnimationFrame =
	typeof cancelAnimationFrame !== 'undefined'
		? cancelAnimationFrame
		: function(id) { clearTimeout(id); };

var _Browser_requestAnimationFrame =
	typeof requestAnimationFrame !== 'undefined'
		? requestAnimationFrame
		: function(callback) { return setTimeout(callback, 1000 / 60); };


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



// APPLICATION


function _Browser_application(impl)
{
	var onUrlChange = impl.onUrlChange;
	var onUrlRequest = impl.onUrlRequest;
	var key = function() { key.a(onUrlChange(_Browser_getUrl())); };

	return _Browser_document({
		setup: function(sendToApp)
		{
			key.a = sendToApp;
			_Browser_window.addEventListener('popstate', key);
			_Browser_window.navigator.userAgent.indexOf('Trident') < 0 || _Browser_window.addEventListener('hashchange', key);

			return F2(function(domNode, event)
			{
				if (!event.ctrlKey && !event.metaKey && !event.shiftKey && event.button < 1 && !domNode.target && !domNode.hasAttribute('download'))
				{
					event.preventDefault();
					var href = domNode.href;
					var curr = _Browser_getUrl();
					var next = $elm$url$Url$fromString(href).a;
					sendToApp(onUrlRequest(
						(next
							&& curr.protocol === next.protocol
							&& curr.host === next.host
							&& curr.port_.a === next.port_.a
						)
							? $elm$browser$Browser$Internal(next)
							: $elm$browser$Browser$External(href)
					));
				}
			});
		},
		init: function(flags)
		{
			return A3(impl.init, flags, _Browser_getUrl(), key);
		},
		view: impl.view,
		update: impl.update,
		subscriptions: impl.subscriptions
	});
}

function _Browser_getUrl()
{
	return $elm$url$Url$fromString(_VirtualDom_doc.location.href).a || _Debug_crash(1);
}

var _Browser_go = F2(function(key, n)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function() {
		n && history.go(n);
		key();
	}));
});

var _Browser_pushUrl = F2(function(key, url)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function() {
		history.pushState({}, '', url);
		key();
	}));
});

var _Browser_replaceUrl = F2(function(key, url)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function() {
		history.replaceState({}, '', url);
		key();
	}));
});



// GLOBAL EVENTS


var _Browser_fakeNode = { addEventListener: function() {}, removeEventListener: function() {} };
var _Browser_doc = typeof document !== 'undefined' ? document : _Browser_fakeNode;
var _Browser_window = typeof window !== 'undefined' ? window : _Browser_fakeNode;

var _Browser_on = F3(function(node, eventName, sendToSelf)
{
	return _Scheduler_spawn(_Scheduler_binding(function(callback)
	{
		function handler(event)	{ _Scheduler_rawSpawn(sendToSelf(event)); }
		node.addEventListener(eventName, handler, _VirtualDom_passiveSupported && { passive: true });
		return function() { node.removeEventListener(eventName, handler); };
	}));
});

var _Browser_decodeEvent = F2(function(decoder, event)
{
	var result = _Json_runHelp(decoder, event);
	return $elm$core$Result$isOk(result) ? $elm$core$Maybe$Just(result.a) : $elm$core$Maybe$Nothing;
});



// PAGE VISIBILITY


function _Browser_visibilityInfo()
{
	return (typeof _VirtualDom_doc.hidden !== 'undefined')
		? { hidden: 'hidden', change: 'visibilitychange' }
		:
	(typeof _VirtualDom_doc.mozHidden !== 'undefined')
		? { hidden: 'mozHidden', change: 'mozvisibilitychange' }
		:
	(typeof _VirtualDom_doc.msHidden !== 'undefined')
		? { hidden: 'msHidden', change: 'msvisibilitychange' }
		:
	(typeof _VirtualDom_doc.webkitHidden !== 'undefined')
		? { hidden: 'webkitHidden', change: 'webkitvisibilitychange' }
		: { hidden: 'hidden', change: 'visibilitychange' };
}



// ANIMATION FRAMES


function _Browser_rAF()
{
	return _Scheduler_binding(function(callback)
	{
		var id = _Browser_requestAnimationFrame(function() {
			callback(_Scheduler_succeed(Date.now()));
		});

		return function() {
			_Browser_cancelAnimationFrame(id);
		};
	});
}


function _Browser_now()
{
	return _Scheduler_binding(function(callback)
	{
		callback(_Scheduler_succeed(Date.now()));
	});
}



// DOM STUFF


function _Browser_withNode(id, doStuff)
{
	return _Scheduler_binding(function(callback)
	{
		_Browser_requestAnimationFrame(function() {
			var node = document.getElementById(id);
			callback(node
				? _Scheduler_succeed(doStuff(node))
				: _Scheduler_fail($elm$browser$Browser$Dom$NotFound(id))
			);
		});
	});
}


function _Browser_withWindow(doStuff)
{
	return _Scheduler_binding(function(callback)
	{
		_Browser_requestAnimationFrame(function() {
			callback(_Scheduler_succeed(doStuff()));
		});
	});
}


// FOCUS and BLUR


var _Browser_call = F2(function(functionName, id)
{
	return _Browser_withNode(id, function(node) {
		node[functionName]();
		return _Utils_Tuple0;
	});
});



// WINDOW VIEWPORT


function _Browser_getViewport()
{
	return {
		scene: _Browser_getScene(),
		viewport: {
			x: _Browser_window.pageXOffset,
			y: _Browser_window.pageYOffset,
			width: _Browser_doc.documentElement.clientWidth,
			height: _Browser_doc.documentElement.clientHeight
		}
	};
}

function _Browser_getScene()
{
	var body = _Browser_doc.body;
	var elem = _Browser_doc.documentElement;
	return {
		width: Math.max(body.scrollWidth, body.offsetWidth, elem.scrollWidth, elem.offsetWidth, elem.clientWidth),
		height: Math.max(body.scrollHeight, body.offsetHeight, elem.scrollHeight, elem.offsetHeight, elem.clientHeight)
	};
}

var _Browser_setViewport = F2(function(x, y)
{
	return _Browser_withWindow(function()
	{
		_Browser_window.scroll(x, y);
		return _Utils_Tuple0;
	});
});



// ELEMENT VIEWPORT


function _Browser_getViewportOf(id)
{
	return _Browser_withNode(id, function(node)
	{
		return {
			scene: {
				width: node.scrollWidth,
				height: node.scrollHeight
			},
			viewport: {
				x: node.scrollLeft,
				y: node.scrollTop,
				width: node.clientWidth,
				height: node.clientHeight
			}
		};
	});
}


var _Browser_setViewportOf = F3(function(id, x, y)
{
	return _Browser_withNode(id, function(node)
	{
		node.scrollLeft = x;
		node.scrollTop = y;
		return _Utils_Tuple0;
	});
});



// ELEMENT


function _Browser_getElement(id)
{
	return _Browser_withNode(id, function(node)
	{
		var rect = node.getBoundingClientRect();
		var x = _Browser_window.pageXOffset;
		var y = _Browser_window.pageYOffset;
		return {
			scene: _Browser_getScene(),
			viewport: {
				x: x,
				y: y,
				width: _Browser_doc.documentElement.clientWidth,
				height: _Browser_doc.documentElement.clientHeight
			},
			element: {
				x: x + rect.left,
				y: y + rect.top,
				width: rect.width,
				height: rect.height
			}
		};
	});
}



// LOAD and RELOAD


function _Browser_reload(skipCache)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function(callback)
	{
		_VirtualDom_doc.location.reload(skipCache);
	}));
}

function _Browser_load(url)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function(callback)
	{
		try
		{
			_Browser_window.location = url;
		}
		catch(err)
		{
			// Only Firefox can throw a NS_ERROR_MALFORMED_URI exception here.
			// Other browsers reload the page, so let's be consistent about that.
			_VirtualDom_doc.location.reload(false);
		}
	}));
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


var _Parser_isAsciiCode = F3(function(code, offset, string)
{
	return string.charCodeAt(offset) === code;
});



// NUMBERS


var _Parser_chompBase10 = F2(function(offset, string)
{
	for (; offset < string.length; offset++)
	{
		var code = string.charCodeAt(offset);
		if (code < 0x30 || 0x39 < code)
		{
			return offset;
		}
	}
	return offset;
});


var _Parser_consumeBase = F3(function(base, offset, string)
{
	for (var total = 0; offset < string.length; offset++)
	{
		var digit = string.charCodeAt(offset) - 0x30;
		if (digit < 0 || base <= digit) break;
		total = base * total + digit;
	}
	return _Utils_Tuple2(offset, total);
});


var _Parser_consumeBase16 = F2(function(offset, string)
{
	for (var total = 0; offset < string.length; offset++)
	{
		var code = string.charCodeAt(offset);
		if (0x30 <= code && code <= 0x39)
		{
			total = 16 * total + code - 0x30;
		}
		else if (0x41 <= code && code <= 0x46)
		{
			total = 16 * total + code - 55;
		}
		else if (0x61 <= code && code <= 0x66)
		{
			total = 16 * total + code - 87;
		}
		else
		{
			break;
		}
	}
	return _Utils_Tuple2(offset, total);
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
	if (options.multiline) { flags += 'm'; }
	if (options.caseInsensitive) { flags += 'i'; }

	try
	{
		return $elm$core$Maybe$Just(new RegExp(string, flags));
	}
	catch(error)
	{
		return $elm$core$Maybe$Nothing;
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
				? $elm$core$Maybe$Just(submatch)
				: $elm$core$Maybe$Nothing;
		}
		out.push(A4($elm$regex$Regex$Match, result[0], result.index, number, _List_fromArray(subs)));
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
				? $elm$core$Maybe$Just(submatch)
				: $elm$core$Maybe$Nothing;
		}
		return replacer(A4($elm$regex$Regex$Match, match, arguments[arguments.length - 2], count, _List_fromArray(submatches)));
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
			A2($elm$time$Time$customZone, -(new Date().getTimezoneOffset()), _List_Nil)
		));
	});
}


function _Time_getZoneName()
{
	return _Scheduler_binding(function(callback)
	{
		try
		{
			var name = $elm$time$Time$Name(Intl.DateTimeFormat().resolvedOptions().timeZone);
		}
		catch (e)
		{
			var name = $elm$time$Time$Offset(new Date().getTimezoneOffset());
		}
		callback(_Scheduler_succeed(name));
	});
}
var $elm$core$List$cons = _List_cons;
var $elm$core$Elm$JsArray$foldr = _JsArray_foldr;
var $elm$core$Array$foldr = F3(
	function (func, baseCase, _v0) {
		var tree = _v0.c;
		var tail = _v0.d;
		var helper = F2(
			function (node, acc) {
				if (node.$ === 'SubTree') {
					var subTree = node.a;
					return A3($elm$core$Elm$JsArray$foldr, helper, acc, subTree);
				} else {
					var values = node.a;
					return A3($elm$core$Elm$JsArray$foldr, func, acc, values);
				}
			});
		return A3(
			$elm$core$Elm$JsArray$foldr,
			helper,
			A3($elm$core$Elm$JsArray$foldr, func, baseCase, tail),
			tree);
	});
var $elm$core$Array$toList = function (array) {
	return A3($elm$core$Array$foldr, $elm$core$List$cons, _List_Nil, array);
};
var $elm$core$Dict$foldr = F3(
	function (func, acc, t) {
		foldr:
		while (true) {
			if (t.$ === 'RBEmpty_elm_builtin') {
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
					A3($elm$core$Dict$foldr, func, acc, right)),
					$temp$t = left;
				func = $temp$func;
				acc = $temp$acc;
				t = $temp$t;
				continue foldr;
			}
		}
	});
var $elm$core$Dict$toList = function (dict) {
	return A3(
		$elm$core$Dict$foldr,
		F3(
			function (key, value, list) {
				return A2(
					$elm$core$List$cons,
					_Utils_Tuple2(key, value),
					list);
			}),
		_List_Nil,
		dict);
};
var $elm$core$Dict$keys = function (dict) {
	return A3(
		$elm$core$Dict$foldr,
		F3(
			function (key, value, keyList) {
				return A2($elm$core$List$cons, key, keyList);
			}),
		_List_Nil,
		dict);
};
var $elm$core$Set$toList = function (_v0) {
	var dict = _v0.a;
	return $elm$core$Dict$keys(dict);
};
var $elm$core$Basics$EQ = {$: 'EQ'};
var $elm$core$Basics$GT = {$: 'GT'};
var $elm$core$Basics$LT = {$: 'LT'};
var $elm$core$Result$Err = function (a) {
	return {$: 'Err', a: a};
};
var $elm$json$Json$Decode$Failure = F2(
	function (a, b) {
		return {$: 'Failure', a: a, b: b};
	});
var $elm$json$Json$Decode$Field = F2(
	function (a, b) {
		return {$: 'Field', a: a, b: b};
	});
var $elm$json$Json$Decode$Index = F2(
	function (a, b) {
		return {$: 'Index', a: a, b: b};
	});
var $elm$core$Result$Ok = function (a) {
	return {$: 'Ok', a: a};
};
var $elm$json$Json$Decode$OneOf = function (a) {
	return {$: 'OneOf', a: a};
};
var $elm$core$Basics$False = {$: 'False'};
var $elm$core$Basics$add = _Basics_add;
var $elm$core$Maybe$Just = function (a) {
	return {$: 'Just', a: a};
};
var $elm$core$Maybe$Nothing = {$: 'Nothing'};
var $elm$core$String$all = _String_all;
var $elm$core$Basics$and = _Basics_and;
var $elm$core$Basics$append = _Utils_append;
var $elm$json$Json$Encode$encode = _Json_encode;
var $elm$core$String$fromInt = _String_fromNumber;
var $elm$core$String$join = F2(
	function (sep, chunks) {
		return A2(
			_String_join,
			sep,
			_List_toArray(chunks));
	});
var $elm$core$String$split = F2(
	function (sep, string) {
		return _List_fromArray(
			A2(_String_split, sep, string));
	});
var $elm$json$Json$Decode$indent = function (str) {
	return A2(
		$elm$core$String$join,
		'\n    ',
		A2($elm$core$String$split, '\n', str));
};
var $elm$core$List$foldl = F3(
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
var $elm$core$List$length = function (xs) {
	return A3(
		$elm$core$List$foldl,
		F2(
			function (_v0, i) {
				return i + 1;
			}),
		0,
		xs);
};
var $elm$core$List$map2 = _List_map2;
var $elm$core$Basics$le = _Utils_le;
var $elm$core$Basics$sub = _Basics_sub;
var $elm$core$List$rangeHelp = F3(
	function (lo, hi, list) {
		rangeHelp:
		while (true) {
			if (_Utils_cmp(lo, hi) < 1) {
				var $temp$lo = lo,
					$temp$hi = hi - 1,
					$temp$list = A2($elm$core$List$cons, hi, list);
				lo = $temp$lo;
				hi = $temp$hi;
				list = $temp$list;
				continue rangeHelp;
			} else {
				return list;
			}
		}
	});
var $elm$core$List$range = F2(
	function (lo, hi) {
		return A3($elm$core$List$rangeHelp, lo, hi, _List_Nil);
	});
var $elm$core$List$indexedMap = F2(
	function (f, xs) {
		return A3(
			$elm$core$List$map2,
			f,
			A2(
				$elm$core$List$range,
				0,
				$elm$core$List$length(xs) - 1),
			xs);
	});
var $elm$core$Char$toCode = _Char_toCode;
var $elm$core$Char$isLower = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (97 <= code) && (code <= 122);
};
var $elm$core$Char$isUpper = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (code <= 90) && (65 <= code);
};
var $elm$core$Basics$or = _Basics_or;
var $elm$core$Char$isAlpha = function (_char) {
	return $elm$core$Char$isLower(_char) || $elm$core$Char$isUpper(_char);
};
var $elm$core$Char$isDigit = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (code <= 57) && (48 <= code);
};
var $elm$core$Char$isAlphaNum = function (_char) {
	return $elm$core$Char$isLower(_char) || ($elm$core$Char$isUpper(_char) || $elm$core$Char$isDigit(_char));
};
var $elm$core$List$reverse = function (list) {
	return A3($elm$core$List$foldl, $elm$core$List$cons, _List_Nil, list);
};
var $elm$core$String$uncons = _String_uncons;
var $elm$json$Json$Decode$errorOneOf = F2(
	function (i, error) {
		return '\n\n(' + ($elm$core$String$fromInt(i + 1) + (') ' + $elm$json$Json$Decode$indent(
			$elm$json$Json$Decode$errorToString(error))));
	});
var $elm$json$Json$Decode$errorToString = function (error) {
	return A2($elm$json$Json$Decode$errorToStringHelp, error, _List_Nil);
};
var $elm$json$Json$Decode$errorToStringHelp = F2(
	function (error, context) {
		errorToStringHelp:
		while (true) {
			switch (error.$) {
				case 'Field':
					var f = error.a;
					var err = error.b;
					var isSimple = function () {
						var _v1 = $elm$core$String$uncons(f);
						if (_v1.$ === 'Nothing') {
							return false;
						} else {
							var _v2 = _v1.a;
							var _char = _v2.a;
							var rest = _v2.b;
							return $elm$core$Char$isAlpha(_char) && A2($elm$core$String$all, $elm$core$Char$isAlphaNum, rest);
						}
					}();
					var fieldName = isSimple ? ('.' + f) : ('[\'' + (f + '\']'));
					var $temp$error = err,
						$temp$context = A2($elm$core$List$cons, fieldName, context);
					error = $temp$error;
					context = $temp$context;
					continue errorToStringHelp;
				case 'Index':
					var i = error.a;
					var err = error.b;
					var indexName = '[' + ($elm$core$String$fromInt(i) + ']');
					var $temp$error = err,
						$temp$context = A2($elm$core$List$cons, indexName, context);
					error = $temp$error;
					context = $temp$context;
					continue errorToStringHelp;
				case 'OneOf':
					var errors = error.a;
					if (!errors.b) {
						return 'Ran into a Json.Decode.oneOf with no possibilities' + function () {
							if (!context.b) {
								return '!';
							} else {
								return ' at json' + A2(
									$elm$core$String$join,
									'',
									$elm$core$List$reverse(context));
							}
						}();
					} else {
						if (!errors.b.b) {
							var err = errors.a;
							var $temp$error = err,
								$temp$context = context;
							error = $temp$error;
							context = $temp$context;
							continue errorToStringHelp;
						} else {
							var starter = function () {
								if (!context.b) {
									return 'Json.Decode.oneOf';
								} else {
									return 'The Json.Decode.oneOf at json' + A2(
										$elm$core$String$join,
										'',
										$elm$core$List$reverse(context));
								}
							}();
							var introduction = starter + (' failed in the following ' + ($elm$core$String$fromInt(
								$elm$core$List$length(errors)) + ' ways:'));
							return A2(
								$elm$core$String$join,
								'\n\n',
								A2(
									$elm$core$List$cons,
									introduction,
									A2($elm$core$List$indexedMap, $elm$json$Json$Decode$errorOneOf, errors)));
						}
					}
				default:
					var msg = error.a;
					var json = error.b;
					var introduction = function () {
						if (!context.b) {
							return 'Problem with the given value:\n\n';
						} else {
							return 'Problem with the value at json' + (A2(
								$elm$core$String$join,
								'',
								$elm$core$List$reverse(context)) + ':\n\n    ');
						}
					}();
					return introduction + ($elm$json$Json$Decode$indent(
						A2($elm$json$Json$Encode$encode, 4, json)) + ('\n\n' + msg));
			}
		}
	});
var $elm$core$Array$branchFactor = 32;
var $elm$core$Array$Array_elm_builtin = F4(
	function (a, b, c, d) {
		return {$: 'Array_elm_builtin', a: a, b: b, c: c, d: d};
	});
var $elm$core$Elm$JsArray$empty = _JsArray_empty;
var $elm$core$Basics$ceiling = _Basics_ceiling;
var $elm$core$Basics$fdiv = _Basics_fdiv;
var $elm$core$Basics$logBase = F2(
	function (base, number) {
		return _Basics_log(number) / _Basics_log(base);
	});
var $elm$core$Basics$toFloat = _Basics_toFloat;
var $elm$core$Array$shiftStep = $elm$core$Basics$ceiling(
	A2($elm$core$Basics$logBase, 2, $elm$core$Array$branchFactor));
var $elm$core$Array$empty = A4($elm$core$Array$Array_elm_builtin, 0, $elm$core$Array$shiftStep, $elm$core$Elm$JsArray$empty, $elm$core$Elm$JsArray$empty);
var $elm$core$Elm$JsArray$initialize = _JsArray_initialize;
var $elm$core$Array$Leaf = function (a) {
	return {$: 'Leaf', a: a};
};
var $elm$core$Basics$apL = F2(
	function (f, x) {
		return f(x);
	});
var $elm$core$Basics$apR = F2(
	function (x, f) {
		return f(x);
	});
var $elm$core$Basics$eq = _Utils_equal;
var $elm$core$Basics$floor = _Basics_floor;
var $elm$core$Elm$JsArray$length = _JsArray_length;
var $elm$core$Basics$gt = _Utils_gt;
var $elm$core$Basics$max = F2(
	function (x, y) {
		return (_Utils_cmp(x, y) > 0) ? x : y;
	});
var $elm$core$Basics$mul = _Basics_mul;
var $elm$core$Array$SubTree = function (a) {
	return {$: 'SubTree', a: a};
};
var $elm$core$Elm$JsArray$initializeFromList = _JsArray_initializeFromList;
var $elm$core$Array$compressNodes = F2(
	function (nodes, acc) {
		compressNodes:
		while (true) {
			var _v0 = A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, nodes);
			var node = _v0.a;
			var remainingNodes = _v0.b;
			var newAcc = A2(
				$elm$core$List$cons,
				$elm$core$Array$SubTree(node),
				acc);
			if (!remainingNodes.b) {
				return $elm$core$List$reverse(newAcc);
			} else {
				var $temp$nodes = remainingNodes,
					$temp$acc = newAcc;
				nodes = $temp$nodes;
				acc = $temp$acc;
				continue compressNodes;
			}
		}
	});
var $elm$core$Tuple$first = function (_v0) {
	var x = _v0.a;
	return x;
};
var $elm$core$Array$treeFromBuilder = F2(
	function (nodeList, nodeListSize) {
		treeFromBuilder:
		while (true) {
			var newNodeSize = $elm$core$Basics$ceiling(nodeListSize / $elm$core$Array$branchFactor);
			if (newNodeSize === 1) {
				return A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, nodeList).a;
			} else {
				var $temp$nodeList = A2($elm$core$Array$compressNodes, nodeList, _List_Nil),
					$temp$nodeListSize = newNodeSize;
				nodeList = $temp$nodeList;
				nodeListSize = $temp$nodeListSize;
				continue treeFromBuilder;
			}
		}
	});
var $elm$core$Array$builderToArray = F2(
	function (reverseNodeList, builder) {
		if (!builder.nodeListSize) {
			return A4(
				$elm$core$Array$Array_elm_builtin,
				$elm$core$Elm$JsArray$length(builder.tail),
				$elm$core$Array$shiftStep,
				$elm$core$Elm$JsArray$empty,
				builder.tail);
		} else {
			var treeLen = builder.nodeListSize * $elm$core$Array$branchFactor;
			var depth = $elm$core$Basics$floor(
				A2($elm$core$Basics$logBase, $elm$core$Array$branchFactor, treeLen - 1));
			var correctNodeList = reverseNodeList ? $elm$core$List$reverse(builder.nodeList) : builder.nodeList;
			var tree = A2($elm$core$Array$treeFromBuilder, correctNodeList, builder.nodeListSize);
			return A4(
				$elm$core$Array$Array_elm_builtin,
				$elm$core$Elm$JsArray$length(builder.tail) + treeLen,
				A2($elm$core$Basics$max, 5, depth * $elm$core$Array$shiftStep),
				tree,
				builder.tail);
		}
	});
var $elm$core$Basics$idiv = _Basics_idiv;
var $elm$core$Basics$lt = _Utils_lt;
var $elm$core$Array$initializeHelp = F5(
	function (fn, fromIndex, len, nodeList, tail) {
		initializeHelp:
		while (true) {
			if (fromIndex < 0) {
				return A2(
					$elm$core$Array$builderToArray,
					false,
					{nodeList: nodeList, nodeListSize: (len / $elm$core$Array$branchFactor) | 0, tail: tail});
			} else {
				var leaf = $elm$core$Array$Leaf(
					A3($elm$core$Elm$JsArray$initialize, $elm$core$Array$branchFactor, fromIndex, fn));
				var $temp$fn = fn,
					$temp$fromIndex = fromIndex - $elm$core$Array$branchFactor,
					$temp$len = len,
					$temp$nodeList = A2($elm$core$List$cons, leaf, nodeList),
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
var $elm$core$Basics$remainderBy = _Basics_remainderBy;
var $elm$core$Array$initialize = F2(
	function (len, fn) {
		if (len <= 0) {
			return $elm$core$Array$empty;
		} else {
			var tailLen = len % $elm$core$Array$branchFactor;
			var tail = A3($elm$core$Elm$JsArray$initialize, tailLen, len - tailLen, fn);
			var initialFromIndex = (len - tailLen) - $elm$core$Array$branchFactor;
			return A5($elm$core$Array$initializeHelp, fn, initialFromIndex, len, _List_Nil, tail);
		}
	});
var $elm$core$Basics$True = {$: 'True'};
var $elm$core$Result$isOk = function (result) {
	if (result.$ === 'Ok') {
		return true;
	} else {
		return false;
	}
};
var $elm$json$Json$Decode$andThen = _Json_andThen;
var $elm$json$Json$Decode$map = _Json_map1;
var $elm$json$Json$Decode$map2 = _Json_map2;
var $elm$json$Json$Decode$succeed = _Json_succeed;
var $elm$virtual_dom$VirtualDom$toHandlerInt = function (handler) {
	switch (handler.$) {
		case 'Normal':
			return 0;
		case 'MayStopPropagation':
			return 1;
		case 'MayPreventDefault':
			return 2;
		default:
			return 3;
	}
};
var $elm$browser$Browser$External = function (a) {
	return {$: 'External', a: a};
};
var $elm$browser$Browser$Internal = function (a) {
	return {$: 'Internal', a: a};
};
var $elm$core$Basics$identity = function (x) {
	return x;
};
var $elm$browser$Browser$Dom$NotFound = function (a) {
	return {$: 'NotFound', a: a};
};
var $elm$url$Url$Http = {$: 'Http'};
var $elm$url$Url$Https = {$: 'Https'};
var $elm$url$Url$Url = F6(
	function (protocol, host, port_, path, query, fragment) {
		return {fragment: fragment, host: host, path: path, port_: port_, protocol: protocol, query: query};
	});
var $elm$core$String$contains = _String_contains;
var $elm$core$String$length = _String_length;
var $elm$core$String$slice = _String_slice;
var $elm$core$String$dropLeft = F2(
	function (n, string) {
		return (n < 1) ? string : A3(
			$elm$core$String$slice,
			n,
			$elm$core$String$length(string),
			string);
	});
var $elm$core$String$indexes = _String_indexes;
var $elm$core$String$isEmpty = function (string) {
	return string === '';
};
var $elm$core$String$left = F2(
	function (n, string) {
		return (n < 1) ? '' : A3($elm$core$String$slice, 0, n, string);
	});
var $elm$core$String$toInt = _String_toInt;
var $elm$url$Url$chompBeforePath = F5(
	function (protocol, path, params, frag, str) {
		if ($elm$core$String$isEmpty(str) || A2($elm$core$String$contains, '@', str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, ':', str);
			if (!_v0.b) {
				return $elm$core$Maybe$Just(
					A6($elm$url$Url$Url, protocol, str, $elm$core$Maybe$Nothing, path, params, frag));
			} else {
				if (!_v0.b.b) {
					var i = _v0.a;
					var _v1 = $elm$core$String$toInt(
						A2($elm$core$String$dropLeft, i + 1, str));
					if (_v1.$ === 'Nothing') {
						return $elm$core$Maybe$Nothing;
					} else {
						var port_ = _v1;
						return $elm$core$Maybe$Just(
							A6(
								$elm$url$Url$Url,
								protocol,
								A2($elm$core$String$left, i, str),
								port_,
								path,
								params,
								frag));
					}
				} else {
					return $elm$core$Maybe$Nothing;
				}
			}
		}
	});
var $elm$url$Url$chompBeforeQuery = F4(
	function (protocol, params, frag, str) {
		if ($elm$core$String$isEmpty(str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, '/', str);
			if (!_v0.b) {
				return A5($elm$url$Url$chompBeforePath, protocol, '/', params, frag, str);
			} else {
				var i = _v0.a;
				return A5(
					$elm$url$Url$chompBeforePath,
					protocol,
					A2($elm$core$String$dropLeft, i, str),
					params,
					frag,
					A2($elm$core$String$left, i, str));
			}
		}
	});
var $elm$url$Url$chompBeforeFragment = F3(
	function (protocol, frag, str) {
		if ($elm$core$String$isEmpty(str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, '?', str);
			if (!_v0.b) {
				return A4($elm$url$Url$chompBeforeQuery, protocol, $elm$core$Maybe$Nothing, frag, str);
			} else {
				var i = _v0.a;
				return A4(
					$elm$url$Url$chompBeforeQuery,
					protocol,
					$elm$core$Maybe$Just(
						A2($elm$core$String$dropLeft, i + 1, str)),
					frag,
					A2($elm$core$String$left, i, str));
			}
		}
	});
var $elm$url$Url$chompAfterProtocol = F2(
	function (protocol, str) {
		if ($elm$core$String$isEmpty(str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, '#', str);
			if (!_v0.b) {
				return A3($elm$url$Url$chompBeforeFragment, protocol, $elm$core$Maybe$Nothing, str);
			} else {
				var i = _v0.a;
				return A3(
					$elm$url$Url$chompBeforeFragment,
					protocol,
					$elm$core$Maybe$Just(
						A2($elm$core$String$dropLeft, i + 1, str)),
					A2($elm$core$String$left, i, str));
			}
		}
	});
var $elm$core$String$startsWith = _String_startsWith;
var $elm$url$Url$fromString = function (str) {
	return A2($elm$core$String$startsWith, 'http://', str) ? A2(
		$elm$url$Url$chompAfterProtocol,
		$elm$url$Url$Http,
		A2($elm$core$String$dropLeft, 7, str)) : (A2($elm$core$String$startsWith, 'https://', str) ? A2(
		$elm$url$Url$chompAfterProtocol,
		$elm$url$Url$Https,
		A2($elm$core$String$dropLeft, 8, str)) : $elm$core$Maybe$Nothing);
};
var $elm$core$Basics$never = function (_v0) {
	never:
	while (true) {
		var nvr = _v0.a;
		var $temp$_v0 = nvr;
		_v0 = $temp$_v0;
		continue never;
	}
};
var $elm$core$Task$Perform = function (a) {
	return {$: 'Perform', a: a};
};
var $elm$core$Task$succeed = _Scheduler_succeed;
var $elm$core$Task$init = $elm$core$Task$succeed(_Utils_Tuple0);
var $elm$core$List$foldrHelper = F4(
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
							$elm$core$List$foldl,
							fn,
							acc,
							$elm$core$List$reverse(r4)) : A4($elm$core$List$foldrHelper, fn, acc, ctr + 1, r4);
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
var $elm$core$List$foldr = F3(
	function (fn, acc, ls) {
		return A4($elm$core$List$foldrHelper, fn, acc, 0, ls);
	});
var $elm$core$List$map = F2(
	function (f, xs) {
		return A3(
			$elm$core$List$foldr,
			F2(
				function (x, acc) {
					return A2(
						$elm$core$List$cons,
						f(x),
						acc);
				}),
			_List_Nil,
			xs);
	});
var $elm$core$Task$andThen = _Scheduler_andThen;
var $elm$core$Task$map = F2(
	function (func, taskA) {
		return A2(
			$elm$core$Task$andThen,
			function (a) {
				return $elm$core$Task$succeed(
					func(a));
			},
			taskA);
	});
var $elm$core$Task$map2 = F3(
	function (func, taskA, taskB) {
		return A2(
			$elm$core$Task$andThen,
			function (a) {
				return A2(
					$elm$core$Task$andThen,
					function (b) {
						return $elm$core$Task$succeed(
							A2(func, a, b));
					},
					taskB);
			},
			taskA);
	});
var $elm$core$Task$sequence = function (tasks) {
	return A3(
		$elm$core$List$foldr,
		$elm$core$Task$map2($elm$core$List$cons),
		$elm$core$Task$succeed(_List_Nil),
		tasks);
};
var $elm$core$Platform$sendToApp = _Platform_sendToApp;
var $elm$core$Task$spawnCmd = F2(
	function (router, _v0) {
		var task = _v0.a;
		return _Scheduler_spawn(
			A2(
				$elm$core$Task$andThen,
				$elm$core$Platform$sendToApp(router),
				task));
	});
var $elm$core$Task$onEffects = F3(
	function (router, commands, state) {
		return A2(
			$elm$core$Task$map,
			function (_v0) {
				return _Utils_Tuple0;
			},
			$elm$core$Task$sequence(
				A2(
					$elm$core$List$map,
					$elm$core$Task$spawnCmd(router),
					commands)));
	});
var $elm$core$Task$onSelfMsg = F3(
	function (_v0, _v1, _v2) {
		return $elm$core$Task$succeed(_Utils_Tuple0);
	});
var $elm$core$Task$cmdMap = F2(
	function (tagger, _v0) {
		var task = _v0.a;
		return $elm$core$Task$Perform(
			A2($elm$core$Task$map, tagger, task));
	});
_Platform_effectManagers['Task'] = _Platform_createManager($elm$core$Task$init, $elm$core$Task$onEffects, $elm$core$Task$onSelfMsg, $elm$core$Task$cmdMap);
var $elm$core$Task$command = _Platform_leaf('Task');
var $elm$core$Task$perform = F2(
	function (toMessage, task) {
		return $elm$core$Task$command(
			$elm$core$Task$Perform(
				A2($elm$core$Task$map, toMessage, task)));
	});
var $elm$browser$Browser$element = _Browser_element;
var $elm$json$Json$Decode$field = _Json_decodeField;
var $jxxcarlson$meenylatex$MiniLatex$Render$NoDelay = {$: 'NoDelay'};
var $jinjor$elm_debounce$Debounce$Debounce = function (a) {
	return {$: 'Debounce', a: a};
};
var $jinjor$elm_debounce$Debounce$init = $jinjor$elm_debounce$Debounce$Debounce(
	{input: _List_Nil, locked: false});
var $jxxcarlson$meenylatex$Internal$Differ$EditRecord = F6(
	function (paragraphs, astList, idList, renderedParagraphs, latexState, sourceMap) {
		return {astList: astList, idList: idList, latexState: latexState, paragraphs: paragraphs, renderedParagraphs: renderedParagraphs, sourceMap: sourceMap};
	});
var $Janiczek$elm_bidict$BiDict$BiDict = function (a) {
	return {$: 'BiDict', a: a};
};
var $elm$core$Dict$RBEmpty_elm_builtin = {$: 'RBEmpty_elm_builtin'};
var $elm$core$Dict$empty = $elm$core$Dict$RBEmpty_elm_builtin;
var $Janiczek$elm_bidict$BiDict$empty = $Janiczek$elm_bidict$BiDict$BiDict(
	{forward: $elm$core$Dict$empty, reverse: $elm$core$Dict$empty});
var $elm$core$Dict$Black = {$: 'Black'};
var $elm$core$Dict$RBNode_elm_builtin = F5(
	function (a, b, c, d, e) {
		return {$: 'RBNode_elm_builtin', a: a, b: b, c: c, d: d, e: e};
	});
var $elm$core$Dict$Red = {$: 'Red'};
var $elm$core$Dict$balance = F5(
	function (color, key, value, left, right) {
		if ((right.$ === 'RBNode_elm_builtin') && (right.a.$ === 'Red')) {
			var _v1 = right.a;
			var rK = right.b;
			var rV = right.c;
			var rLeft = right.d;
			var rRight = right.e;
			if ((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Red')) {
				var _v3 = left.a;
				var lK = left.b;
				var lV = left.c;
				var lLeft = left.d;
				var lRight = left.e;
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Red,
					key,
					value,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, rK, rV, rLeft, rRight));
			} else {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					color,
					rK,
					rV,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, key, value, left, rLeft),
					rRight);
			}
		} else {
			if ((((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Red')) && (left.d.$ === 'RBNode_elm_builtin')) && (left.d.a.$ === 'Red')) {
				var _v5 = left.a;
				var lK = left.b;
				var lV = left.c;
				var _v6 = left.d;
				var _v7 = _v6.a;
				var llK = _v6.b;
				var llV = _v6.c;
				var llLeft = _v6.d;
				var llRight = _v6.e;
				var lRight = left.e;
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Red,
					lK,
					lV,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, llK, llV, llLeft, llRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, key, value, lRight, right));
			} else {
				return A5($elm$core$Dict$RBNode_elm_builtin, color, key, value, left, right);
			}
		}
	});
var $elm$core$Basics$compare = _Utils_compare;
var $elm$core$Dict$insertHelp = F3(
	function (key, value, dict) {
		if (dict.$ === 'RBEmpty_elm_builtin') {
			return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, key, value, $elm$core$Dict$RBEmpty_elm_builtin, $elm$core$Dict$RBEmpty_elm_builtin);
		} else {
			var nColor = dict.a;
			var nKey = dict.b;
			var nValue = dict.c;
			var nLeft = dict.d;
			var nRight = dict.e;
			var _v1 = A2($elm$core$Basics$compare, key, nKey);
			switch (_v1.$) {
				case 'LT':
					return A5(
						$elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						A3($elm$core$Dict$insertHelp, key, value, nLeft),
						nRight);
				case 'EQ':
					return A5($elm$core$Dict$RBNode_elm_builtin, nColor, nKey, value, nLeft, nRight);
				default:
					return A5(
						$elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						nLeft,
						A3($elm$core$Dict$insertHelp, key, value, nRight));
			}
		}
	});
var $elm$core$Dict$insert = F3(
	function (key, value, dict) {
		var _v0 = A3($elm$core$Dict$insertHelp, key, value, dict);
		if ((_v0.$ === 'RBNode_elm_builtin') && (_v0.a.$ === 'Red')) {
			var _v1 = _v0.a;
			var k = _v0.b;
			var v = _v0.c;
			var l = _v0.d;
			var r = _v0.e;
			return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, k, v, l, r);
		} else {
			var x = _v0;
			return x;
		}
	});
var $elm$core$Dict$fromList = function (assocs) {
	return A3(
		$elm$core$List$foldl,
		F2(
			function (_v0, dict) {
				var key = _v0.a;
				var value = _v0.b;
				return A3($elm$core$Dict$insert, key, value, dict);
			}),
		$elm$core$Dict$empty,
		assocs);
};
var $jxxcarlson$meenylatex$Internal$LatexState$initialCounters = $elm$core$Dict$fromList(
	_List_fromArray(
		[
			_Utils_Tuple2('s1', 0),
			_Utils_Tuple2('s2', 0),
			_Utils_Tuple2('s3', 0),
			_Utils_Tuple2('tno', 0),
			_Utils_Tuple2('eqno', 0)
		]));
var $jxxcarlson$meenylatex$Internal$LatexState$emptyLatexState = {counters: $jxxcarlson$meenylatex$Internal$LatexState$initialCounters, crossReferences: $elm$core$Dict$empty, dictionary: $elm$core$Dict$empty, macroDictionary: $elm$core$Dict$empty, mathMacroDictionary: $elm$core$Dict$empty, tableOfContents: _List_Nil};
var $jxxcarlson$meenylatex$Internal$Differ$emptyHtmlMsgRecord = A6($jxxcarlson$meenylatex$Internal$Differ$EditRecord, _List_Nil, _List_Nil, _List_Nil, _List_Nil, $jxxcarlson$meenylatex$Internal$LatexState$emptyLatexState, $Janiczek$elm_bidict$BiDict$empty);
var $jxxcarlson$meenylatex$Internal$Parser$LXError = function (a) {
	return {$: 'LXError', a: a};
};
var $jxxcarlson$meenylatex$Internal$Parser$LXString = function (a) {
	return {$: 'LXString', a: a};
};
var $jxxcarlson$meenylatex$Internal$Parser$Environment = F3(
	function (a, b, c) {
		return {$: 'Environment', a: a, b: b, c: c};
	});
var $jxxcarlson$meenylatex$Internal$Parser$ExpectingEndWord = {$: 'ExpectingEndWord'};
var $jxxcarlson$meenylatex$Internal$Parser$LatexList = function (a) {
	return {$: 'LatexList', a: a};
};
var $jxxcarlson$meenylatex$Internal$Parser$SMacro = F4(
	function (a, b, c, d) {
		return {$: 'SMacro', a: a, b: b, c: c, d: d};
	});
var $elm$parser$Parser$Advanced$Token = F2(
	function (a, b) {
		return {$: 'Token', a: a, b: b};
	});
var $elm$parser$Parser$Advanced$Bad = F2(
	function (a, b) {
		return {$: 'Bad', a: a, b: b};
	});
var $elm$parser$Parser$Advanced$Good = F3(
	function (a, b, c) {
		return {$: 'Good', a: a, b: b, c: c};
	});
var $elm$parser$Parser$Advanced$Parser = function (a) {
	return {$: 'Parser', a: a};
};
var $elm$parser$Parser$Advanced$andThen = F2(
	function (callback, _v0) {
		var parseA = _v0.a;
		return $elm$parser$Parser$Advanced$Parser(
			function (s0) {
				var _v1 = parseA(s0);
				if (_v1.$ === 'Bad') {
					var p = _v1.a;
					var x = _v1.b;
					return A2($elm$parser$Parser$Advanced$Bad, p, x);
				} else {
					var p1 = _v1.a;
					var a = _v1.b;
					var s1 = _v1.c;
					var _v2 = callback(a);
					var parseB = _v2.a;
					var _v3 = parseB(s1);
					if (_v3.$ === 'Bad') {
						var p2 = _v3.a;
						var x = _v3.b;
						return A2($elm$parser$Parser$Advanced$Bad, p1 || p2, x);
					} else {
						var p2 = _v3.a;
						var b = _v3.b;
						var s2 = _v3.c;
						return A3($elm$parser$Parser$Advanced$Good, p1 || p2, b, s2);
					}
				}
			});
	});
var $jxxcarlson$meenylatex$Internal$Parser$CArg = function (a) {
	return {$: 'CArg', a: a};
};
var $jxxcarlson$meenylatex$Internal$Parser$ExpectingLeftBrace = {$: 'ExpectingLeftBrace'};
var $jxxcarlson$meenylatex$Internal$Parser$ExpectingRightBrace = {$: 'ExpectingRightBrace'};
var $jxxcarlson$meenylatex$Internal$Parser$Macro = F3(
	function (a, b, c) {
		return {$: 'Macro', a: a, b: b, c: c};
	});
var $elm$core$Basics$always = F2(
	function (a, _v0) {
		return a;
	});
var $elm$parser$Parser$Advanced$map2 = F3(
	function (func, _v0, _v1) {
		var parseA = _v0.a;
		var parseB = _v1.a;
		return $elm$parser$Parser$Advanced$Parser(
			function (s0) {
				var _v2 = parseA(s0);
				if (_v2.$ === 'Bad') {
					var p = _v2.a;
					var x = _v2.b;
					return A2($elm$parser$Parser$Advanced$Bad, p, x);
				} else {
					var p1 = _v2.a;
					var a = _v2.b;
					var s1 = _v2.c;
					var _v3 = parseB(s1);
					if (_v3.$ === 'Bad') {
						var p2 = _v3.a;
						var x = _v3.b;
						return A2($elm$parser$Parser$Advanced$Bad, p1 || p2, x);
					} else {
						var p2 = _v3.a;
						var b = _v3.b;
						var s2 = _v3.c;
						return A3(
							$elm$parser$Parser$Advanced$Good,
							p1 || p2,
							A2(func, a, b),
							s2);
					}
				}
			});
	});
var $elm$parser$Parser$Advanced$ignorer = F2(
	function (keepParser, ignoreParser) {
		return A3($elm$parser$Parser$Advanced$map2, $elm$core$Basics$always, keepParser, ignoreParser);
	});
var $elm$parser$Parser$Advanced$Located = F3(
	function (row, col, context) {
		return {col: col, context: context, row: row};
	});
var $elm$parser$Parser$Advanced$changeContext = F2(
	function (newContext, s) {
		return {col: s.col, context: newContext, indent: s.indent, offset: s.offset, row: s.row, src: s.src};
	});
var $elm$parser$Parser$Advanced$inContext = F2(
	function (context, _v0) {
		var parse = _v0.a;
		return $elm$parser$Parser$Advanced$Parser(
			function (s0) {
				var _v1 = parse(
					A2(
						$elm$parser$Parser$Advanced$changeContext,
						A2(
							$elm$core$List$cons,
							A3($elm$parser$Parser$Advanced$Located, s0.row, s0.col, context),
							s0.context),
						s0));
				if (_v1.$ === 'Good') {
					var p = _v1.a;
					var a = _v1.b;
					var s1 = _v1.c;
					return A3(
						$elm$parser$Parser$Advanced$Good,
						p,
						a,
						A2($elm$parser$Parser$Advanced$changeContext, s0.context, s1));
				} else {
					var step = _v1;
					return step;
				}
			});
	});
var $jxxcarlson$meenylatex$Internal$Parser$ExpectingEndForInlineMath = {$: 'ExpectingEndForInlineMath'};
var $jxxcarlson$meenylatex$Internal$Parser$ExpectingLeadingDollarSign = {$: 'ExpectingLeadingDollarSign'};
var $jxxcarlson$meenylatex$Internal$Parser$InlineMath = function (a) {
	return {$: 'InlineMath', a: a};
};
var $elm$parser$Parser$Advanced$keeper = F2(
	function (parseFunc, parseArg) {
		return A3($elm$parser$Parser$Advanced$map2, $elm$core$Basics$apL, parseFunc, parseArg);
	});
var $elm$parser$Parser$Advanced$chompUntilEndOr = function (str) {
	return $elm$parser$Parser$Advanced$Parser(
		function (s) {
			var _v0 = A5(_Parser_findSubString, str, s.offset, s.row, s.col, s.src);
			var newOffset = _v0.a;
			var newRow = _v0.b;
			var newCol = _v0.c;
			var adjustedOffset = (newOffset < 0) ? $elm$core$String$length(s.src) : newOffset;
			return A3(
				$elm$parser$Parser$Advanced$Good,
				_Utils_cmp(s.offset, adjustedOffset) < 0,
				_Utils_Tuple0,
				{col: newCol, context: s.context, indent: s.indent, offset: adjustedOffset, row: newRow, src: s.src});
		});
};
var $elm$core$Basics$negate = function (n) {
	return -n;
};
var $elm$core$String$dropRight = F2(
	function (n, string) {
		return (n < 1) ? string : A3($elm$core$String$slice, 0, -n, string);
	});
var $elm$parser$Parser$Advanced$mapChompedString = F2(
	function (func, _v0) {
		var parse = _v0.a;
		return $elm$parser$Parser$Advanced$Parser(
			function (s0) {
				var _v1 = parse(s0);
				if (_v1.$ === 'Bad') {
					var p = _v1.a;
					var x = _v1.b;
					return A2($elm$parser$Parser$Advanced$Bad, p, x);
				} else {
					var p = _v1.a;
					var a = _v1.b;
					var s1 = _v1.c;
					return A3(
						$elm$parser$Parser$Advanced$Good,
						p,
						A2(
							func,
							A3($elm$core$String$slice, s0.offset, s1.offset, s0.src),
							a),
						s1);
				}
			});
	});
var $elm$parser$Parser$Advanced$getChompedString = function (parser) {
	return A2($elm$parser$Parser$Advanced$mapChompedString, $elm$core$Basics$always, parser);
};
var $elm$parser$Parser$Advanced$map = F2(
	function (func, _v0) {
		var parse = _v0.a;
		return $elm$parser$Parser$Advanced$Parser(
			function (s0) {
				var _v1 = parse(s0);
				if (_v1.$ === 'Good') {
					var p = _v1.a;
					var a = _v1.b;
					var s1 = _v1.c;
					return A3(
						$elm$parser$Parser$Advanced$Good,
						p,
						func(a),
						s1);
				} else {
					var p = _v1.a;
					var x = _v1.b;
					return A2($elm$parser$Parser$Advanced$Bad, p, x);
				}
			});
	});
var $elm$parser$Parser$Advanced$succeed = function (a) {
	return $elm$parser$Parser$Advanced$Parser(
		function (s) {
			return A3($elm$parser$Parser$Advanced$Good, false, a, s);
		});
};
var $elm$parser$Parser$Advanced$AddRight = F2(
	function (a, b) {
		return {$: 'AddRight', a: a, b: b};
	});
var $elm$parser$Parser$Advanced$DeadEnd = F4(
	function (row, col, problem, contextStack) {
		return {col: col, contextStack: contextStack, problem: problem, row: row};
	});
var $elm$parser$Parser$Advanced$Empty = {$: 'Empty'};
var $elm$parser$Parser$Advanced$fromState = F2(
	function (s, x) {
		return A2(
			$elm$parser$Parser$Advanced$AddRight,
			$elm$parser$Parser$Advanced$Empty,
			A4($elm$parser$Parser$Advanced$DeadEnd, s.row, s.col, x, s.context));
	});
var $elm$parser$Parser$Advanced$isSubString = _Parser_isSubString;
var $elm$core$Basics$not = _Basics_not;
var $elm$parser$Parser$Advanced$token = function (_v0) {
	var str = _v0.a;
	var expecting = _v0.b;
	var progress = !$elm$core$String$isEmpty(str);
	return $elm$parser$Parser$Advanced$Parser(
		function (s) {
			var _v1 = A5($elm$parser$Parser$Advanced$isSubString, str, s.offset, s.row, s.col, s.src);
			var newOffset = _v1.a;
			var newRow = _v1.b;
			var newCol = _v1.c;
			return _Utils_eq(newOffset, -1) ? A2(
				$elm$parser$Parser$Advanced$Bad,
				false,
				A2($elm$parser$Parser$Advanced$fromState, s, expecting)) : A3(
				$elm$parser$Parser$Advanced$Good,
				progress,
				_Utils_Tuple0,
				{col: newCol, context: s.context, indent: s.indent, offset: newOffset, row: newRow, src: s.src});
		});
};
var $elm$parser$Parser$Advanced$symbol = $elm$parser$Parser$Advanced$token;
var $jxxcarlson$meenylatex$Internal$Parser$parseToSymbol = F2(
	function (problem, marker) {
		return A2(
			$elm$parser$Parser$Advanced$map,
			$elm$core$String$dropRight(
				$elm$core$String$length(marker)),
			$elm$parser$Parser$Advanced$getChompedString(
				A2(
					$elm$parser$Parser$Advanced$keeper,
					$elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity),
					A2(
						$elm$parser$Parser$Advanced$ignorer,
						$elm$parser$Parser$Advanced$chompUntilEndOr(marker),
						$elm$parser$Parser$Advanced$symbol(
							A2($elm$parser$Parser$Advanced$Token, marker, problem))))));
	});
var $jxxcarlson$meenylatex$Internal$Parser$inlineMath = function (wsParser) {
	return A2(
		$elm$parser$Parser$Advanced$keeper,
		A2(
			$elm$parser$Parser$Advanced$ignorer,
			$elm$parser$Parser$Advanced$succeed($jxxcarlson$meenylatex$Internal$Parser$InlineMath),
			$elm$parser$Parser$Advanced$symbol(
				A2($elm$parser$Parser$Advanced$Token, '$', $jxxcarlson$meenylatex$Internal$Parser$ExpectingLeadingDollarSign))),
		A2(
			$elm$parser$Parser$Advanced$ignorer,
			A2($jxxcarlson$meenylatex$Internal$Parser$parseToSymbol, $jxxcarlson$meenylatex$Internal$Parser$ExpectingEndForInlineMath, '$'),
			wsParser));
};
var $elm$parser$Parser$Advanced$Done = function (a) {
	return {$: 'Done', a: a};
};
var $elm$parser$Parser$Advanced$Loop = function (a) {
	return {$: 'Loop', a: a};
};
var $elm$parser$Parser$Advanced$Append = F2(
	function (a, b) {
		return {$: 'Append', a: a, b: b};
	});
var $elm$parser$Parser$Advanced$oneOfHelp = F3(
	function (s0, bag, parsers) {
		oneOfHelp:
		while (true) {
			if (!parsers.b) {
				return A2($elm$parser$Parser$Advanced$Bad, false, bag);
			} else {
				var parse = parsers.a.a;
				var remainingParsers = parsers.b;
				var _v1 = parse(s0);
				if (_v1.$ === 'Good') {
					var step = _v1;
					return step;
				} else {
					var step = _v1;
					var p = step.a;
					var x = step.b;
					if (p) {
						return step;
					} else {
						var $temp$s0 = s0,
							$temp$bag = A2($elm$parser$Parser$Advanced$Append, bag, x),
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
var $elm$parser$Parser$Advanced$oneOf = function (parsers) {
	return $elm$parser$Parser$Advanced$Parser(
		function (s) {
			return A3($elm$parser$Parser$Advanced$oneOfHelp, s, $elm$parser$Parser$Advanced$Empty, parsers);
		});
};
var $jxxcarlson$meenylatex$Internal$Parser$itemListHelper = F2(
	function (itemParser, revItems) {
		return $elm$parser$Parser$Advanced$oneOf(
			_List_fromArray(
				[
					A2(
					$elm$parser$Parser$Advanced$keeper,
					$elm$parser$Parser$Advanced$succeed(
						function (item_) {
							return $elm$parser$Parser$Advanced$Loop(
								A2($elm$core$List$cons, item_, revItems));
						}),
					itemParser),
					A2(
					$elm$parser$Parser$Advanced$map,
					function (_v0) {
						return $elm$parser$Parser$Advanced$Done(
							$elm$core$List$reverse(revItems));
					},
					$elm$parser$Parser$Advanced$succeed(_Utils_Tuple0))
				]));
	});
var $elm$parser$Parser$Advanced$loopHelp = F4(
	function (p, state, callback, s0) {
		loopHelp:
		while (true) {
			var _v0 = callback(state);
			var parse = _v0.a;
			var _v1 = parse(s0);
			if (_v1.$ === 'Good') {
				var p1 = _v1.a;
				var step = _v1.b;
				var s1 = _v1.c;
				if (step.$ === 'Loop') {
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
					return A3($elm$parser$Parser$Advanced$Good, p || p1, result, s1);
				}
			} else {
				var p1 = _v1.a;
				var x = _v1.b;
				return A2($elm$parser$Parser$Advanced$Bad, p || p1, x);
			}
		}
	});
var $elm$parser$Parser$Advanced$loop = F2(
	function (state, callback) {
		return $elm$parser$Parser$Advanced$Parser(
			function (s) {
				return A4($elm$parser$Parser$Advanced$loopHelp, false, state, callback, s);
			});
	});
var $jxxcarlson$meenylatex$Internal$Parser$itemList_ = F2(
	function (initialList, itemParser) {
		return A2(
			$elm$parser$Parser$Advanced$loop,
			initialList,
			$jxxcarlson$meenylatex$Internal$Parser$itemListHelper(itemParser));
	});
var $jxxcarlson$meenylatex$Internal$Parser$itemList = function (itemParser) {
	return A2($jxxcarlson$meenylatex$Internal$Parser$itemList_, _List_Nil, itemParser);
};
var $elm$parser$Parser$Advanced$lazy = function (thunk) {
	return $elm$parser$Parser$Advanced$Parser(
		function (s) {
			var _v0 = thunk(_Utils_Tuple0);
			var parse = _v0.a;
			return parse(s);
		});
};
var $jxxcarlson$meenylatex$Internal$Parser$ExpectingValidMacroArgWord = {$: 'ExpectingValidMacroArgWord'};
var $jxxcarlson$meenylatex$Internal$Parser$inMacroArg = function (c) {
	return !(_Utils_eq(
		c,
		_Utils_chr('\\')) || (_Utils_eq(
		c,
		_Utils_chr('$')) || (_Utils_eq(
		c,
		_Utils_chr('}')) || (_Utils_eq(
		c,
		_Utils_chr(' ')) || _Utils_eq(
		c,
		_Utils_chr('\n'))))));
};
var $jxxcarlson$meenylatex$Internal$Parser$nonEmptyItemList = function (itemParser) {
	return A2(
		$elm$parser$Parser$Advanced$andThen,
		function (x) {
			return A2(
				$jxxcarlson$meenylatex$Internal$Parser$itemList_,
				_List_fromArray(
					[x]),
				itemParser);
		},
		itemParser);
};
var $elm$parser$Parser$Advanced$isSubChar = _Parser_isSubChar;
var $elm$parser$Parser$Advanced$chompIf = F2(
	function (isGood, expecting) {
		return $elm$parser$Parser$Advanced$Parser(
			function (s) {
				var newOffset = A3($elm$parser$Parser$Advanced$isSubChar, isGood, s.offset, s.src);
				return _Utils_eq(newOffset, -1) ? A2(
					$elm$parser$Parser$Advanced$Bad,
					false,
					A2($elm$parser$Parser$Advanced$fromState, s, expecting)) : (_Utils_eq(newOffset, -2) ? A3(
					$elm$parser$Parser$Advanced$Good,
					true,
					_Utils_Tuple0,
					{col: 1, context: s.context, indent: s.indent, offset: s.offset + 1, row: s.row + 1, src: s.src}) : A3(
					$elm$parser$Parser$Advanced$Good,
					true,
					_Utils_Tuple0,
					{col: s.col + 1, context: s.context, indent: s.indent, offset: newOffset, row: s.row, src: s.src}));
			});
	});
var $elm$parser$Parser$Advanced$chompWhileHelp = F5(
	function (isGood, offset, row, col, s0) {
		chompWhileHelp:
		while (true) {
			var newOffset = A3($elm$parser$Parser$Advanced$isSubChar, isGood, offset, s0.src);
			if (_Utils_eq(newOffset, -1)) {
				return A3(
					$elm$parser$Parser$Advanced$Good,
					_Utils_cmp(s0.offset, offset) < 0,
					_Utils_Tuple0,
					{col: col, context: s0.context, indent: s0.indent, offset: offset, row: row, src: s0.src});
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
var $elm$parser$Parser$Advanced$chompWhile = function (isGood) {
	return $elm$parser$Parser$Advanced$Parser(
		function (s) {
			return A5($elm$parser$Parser$Advanced$chompWhileHelp, isGood, s.offset, s.row, s.col, s);
		});
};
var $elm$parser$Parser$Advanced$getOffset = $elm$parser$Parser$Advanced$Parser(
	function (s) {
		return A3($elm$parser$Parser$Advanced$Good, false, s.offset, s);
	});
var $elm$parser$Parser$Advanced$getSource = $elm$parser$Parser$Advanced$Parser(
	function (s) {
		return A3($elm$parser$Parser$Advanced$Good, false, s.src, s);
	});
var $jxxcarlson$meenylatex$Internal$Parser$ws = $elm$parser$Parser$Advanced$chompWhile(
	function (c) {
		return _Utils_eq(
			c,
			_Utils_chr(' ')) || _Utils_eq(
			c,
			_Utils_chr('\n'));
	});
var $jxxcarlson$meenylatex$Internal$Parser$word = F2(
	function (problem, inWord) {
		return A2(
			$elm$parser$Parser$Advanced$keeper,
			A2(
				$elm$parser$Parser$Advanced$keeper,
				A2(
					$elm$parser$Parser$Advanced$keeper,
					A2(
						$elm$parser$Parser$Advanced$ignorer,
						$elm$parser$Parser$Advanced$succeed($elm$core$String$slice),
						$jxxcarlson$meenylatex$Internal$Parser$ws),
					A2(
						$elm$parser$Parser$Advanced$ignorer,
						A2(
							$elm$parser$Parser$Advanced$ignorer,
							A2(
								$elm$parser$Parser$Advanced$ignorer,
								$elm$parser$Parser$Advanced$getOffset,
								A2($elm$parser$Parser$Advanced$chompIf, inWord, problem)),
							$elm$parser$Parser$Advanced$chompWhile(inWord)),
						$jxxcarlson$meenylatex$Internal$Parser$ws)),
				$elm$parser$Parser$Advanced$getOffset),
			$elm$parser$Parser$Advanced$getSource);
	});
var $jxxcarlson$meenylatex$Internal$Parser$macroArgWords = A2(
	$elm$parser$Parser$Advanced$map,
	$jxxcarlson$meenylatex$Internal$Parser$LXString,
	A2(
		$elm$parser$Parser$Advanced$map,
		$elm$core$String$join(' '),
		$jxxcarlson$meenylatex$Internal$Parser$nonEmptyItemList(
			A2($jxxcarlson$meenylatex$Internal$Parser$word, $jxxcarlson$meenylatex$Internal$Parser$ExpectingValidMacroArgWord, $jxxcarlson$meenylatex$Internal$Parser$inMacroArg))));
var $jxxcarlson$meenylatex$Internal$Parser$ExpectingMacroReservedWord = {$: 'ExpectingMacroReservedWord'};
var $elm$core$Set$Set_elm_builtin = function (a) {
	return {$: 'Set_elm_builtin', a: a};
};
var $elm$core$Set$empty = $elm$core$Set$Set_elm_builtin($elm$core$Dict$empty);
var $elm$core$Set$insert = F2(
	function (key, _v0) {
		var dict = _v0.a;
		return $elm$core$Set$Set_elm_builtin(
			A3($elm$core$Dict$insert, key, _Utils_Tuple0, dict));
	});
var $elm$core$Set$fromList = function (list) {
	return A3($elm$core$List$foldl, $elm$core$Set$insert, $elm$core$Set$empty, list);
};
var $elm$core$Dict$get = F2(
	function (targetKey, dict) {
		get:
		while (true) {
			if (dict.$ === 'RBEmpty_elm_builtin') {
				return $elm$core$Maybe$Nothing;
			} else {
				var key = dict.b;
				var value = dict.c;
				var left = dict.d;
				var right = dict.e;
				var _v1 = A2($elm$core$Basics$compare, targetKey, key);
				switch (_v1.$) {
					case 'LT':
						var $temp$targetKey = targetKey,
							$temp$dict = left;
						targetKey = $temp$targetKey;
						dict = $temp$dict;
						continue get;
					case 'EQ':
						return $elm$core$Maybe$Just(value);
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
var $elm$core$Dict$member = F2(
	function (key, dict) {
		var _v0 = A2($elm$core$Dict$get, key, dict);
		if (_v0.$ === 'Just') {
			return true;
		} else {
			return false;
		}
	});
var $elm$core$Set$member = F2(
	function (key, _v0) {
		var dict = _v0.a;
		return A2($elm$core$Dict$member, key, dict);
	});
var $elm$parser$Parser$Advanced$varHelp = F7(
	function (isGood, offset, row, col, src, indent, context) {
		varHelp:
		while (true) {
			var newOffset = A3($elm$parser$Parser$Advanced$isSubChar, isGood, offset, src);
			if (_Utils_eq(newOffset, -1)) {
				return {col: col, context: context, indent: indent, offset: offset, row: row, src: src};
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
var $elm$parser$Parser$Advanced$variable = function (i) {
	return $elm$parser$Parser$Advanced$Parser(
		function (s) {
			var firstOffset = A3($elm$parser$Parser$Advanced$isSubChar, i.start, s.offset, s.src);
			if (_Utils_eq(firstOffset, -1)) {
				return A2(
					$elm$parser$Parser$Advanced$Bad,
					false,
					A2($elm$parser$Parser$Advanced$fromState, s, i.expecting));
			} else {
				var s1 = _Utils_eq(firstOffset, -2) ? A7($elm$parser$Parser$Advanced$varHelp, i.inner, s.offset + 1, s.row + 1, 1, s.src, s.indent, s.context) : A7($elm$parser$Parser$Advanced$varHelp, i.inner, firstOffset, s.row, s.col + 1, s.src, s.indent, s.context);
				var name = A3($elm$core$String$slice, s.offset, s1.offset, s.src);
				return A2($elm$core$Set$member, name, i.reserved) ? A2(
					$elm$parser$Parser$Advanced$Bad,
					false,
					A2($elm$parser$Parser$Advanced$fromState, s, i.expecting)) : A3($elm$parser$Parser$Advanced$Good, true, name, s1);
			}
		});
};
var $jxxcarlson$meenylatex$Internal$Parser$macroName = A2(
	$elm$parser$Parser$Advanced$map,
	$elm$core$String$dropLeft(1),
	$elm$parser$Parser$Advanced$variable(
		{
			expecting: $jxxcarlson$meenylatex$Internal$Parser$ExpectingMacroReservedWord,
			inner: function (c) {
				return $elm$core$Char$isAlphaNum(c) || _Utils_eq(
					c,
					_Utils_chr('*'));
			},
			reserved: $elm$core$Set$fromList(
				_List_fromArray(
					['\\begin', '\\end', '\\item', '\\bibitem'])),
			start: function (c) {
				return _Utils_eq(
					c,
					_Utils_chr('\\'));
			}
		}));
var $jxxcarlson$meenylatex$Internal$Parser$ExpectingLeftBracket = {$: 'ExpectingLeftBracket'};
var $jxxcarlson$meenylatex$Internal$Parser$ExpectingRightBracket = {$: 'ExpectingRightBracket'};
var $jxxcarlson$meenylatex$Internal$Parser$ExpectingValidOptionArgWord = {$: 'ExpectingValidOptionArgWord'};
var $jxxcarlson$meenylatex$Internal$Parser$inOptionArgWord = function (c) {
	return !(_Utils_eq(
		c,
		_Utils_chr('\\')) || (_Utils_eq(
		c,
		_Utils_chr('$')) || (_Utils_eq(
		c,
		_Utils_chr(']')) || (_Utils_eq(
		c,
		_Utils_chr(' ')) || _Utils_eq(
		c,
		_Utils_chr('\n'))))));
};
var $jxxcarlson$meenylatex$Internal$Parser$optionArgWords = A2(
	$elm$parser$Parser$Advanced$map,
	$jxxcarlson$meenylatex$Internal$Parser$LXString,
	A2(
		$elm$parser$Parser$Advanced$map,
		$elm$core$String$join(' '),
		$jxxcarlson$meenylatex$Internal$Parser$nonEmptyItemList(
			A2($jxxcarlson$meenylatex$Internal$Parser$word, $jxxcarlson$meenylatex$Internal$Parser$ExpectingValidOptionArgWord, $jxxcarlson$meenylatex$Internal$Parser$inOptionArgWord))));
var $jxxcarlson$meenylatex$Internal$Parser$spaces = $elm$parser$Parser$Advanced$chompWhile(
	function (c) {
		return _Utils_eq(
			c,
			_Utils_chr(' '));
	});
var $jxxcarlson$meenylatex$Internal$Parser$optionalArg = A2(
	$elm$parser$Parser$Advanced$map,
	$jxxcarlson$meenylatex$Internal$Parser$LatexList,
	A2(
		$elm$parser$Parser$Advanced$keeper,
		A2(
			$elm$parser$Parser$Advanced$ignorer,
			$elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity),
			$elm$parser$Parser$Advanced$symbol(
				A2($elm$parser$Parser$Advanced$Token, '[', $jxxcarlson$meenylatex$Internal$Parser$ExpectingLeftBracket))),
		A2(
			$elm$parser$Parser$Advanced$ignorer,
			$jxxcarlson$meenylatex$Internal$Parser$itemList(
				$elm$parser$Parser$Advanced$oneOf(
					_List_fromArray(
						[
							$jxxcarlson$meenylatex$Internal$Parser$optionArgWords,
							$jxxcarlson$meenylatex$Internal$Parser$inlineMath($jxxcarlson$meenylatex$Internal$Parser$spaces)
						]))),
			$elm$parser$Parser$Advanced$symbol(
				A2($elm$parser$Parser$Advanced$Token, ']', $jxxcarlson$meenylatex$Internal$Parser$ExpectingRightBracket)))));
var $jxxcarlson$meenylatex$Internal$Parser$macro = function (wsParser) {
	return A2(
		$elm$parser$Parser$Advanced$keeper,
		A2(
			$elm$parser$Parser$Advanced$keeper,
			A2(
				$elm$parser$Parser$Advanced$keeper,
				$elm$parser$Parser$Advanced$succeed($jxxcarlson$meenylatex$Internal$Parser$Macro),
				$jxxcarlson$meenylatex$Internal$Parser$macroName),
			$jxxcarlson$meenylatex$Internal$Parser$itemList($jxxcarlson$meenylatex$Internal$Parser$optionalArg)),
		A2(
			$elm$parser$Parser$Advanced$ignorer,
			$jxxcarlson$meenylatex$Internal$Parser$itemList(
				$jxxcarlson$meenylatex$Internal$Parser$cyclic$arg()),
			wsParser));
};
function $jxxcarlson$meenylatex$Internal$Parser$cyclic$arg() {
	return A2(
		$elm$parser$Parser$Advanced$inContext,
		$jxxcarlson$meenylatex$Internal$Parser$CArg('arg'),
		A2(
			$elm$parser$Parser$Advanced$map,
			$jxxcarlson$meenylatex$Internal$Parser$LatexList,
			A2(
				$elm$parser$Parser$Advanced$keeper,
				A2(
					$elm$parser$Parser$Advanced$ignorer,
					$elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity),
					$elm$parser$Parser$Advanced$symbol(
						A2($elm$parser$Parser$Advanced$Token, '{', $jxxcarlson$meenylatex$Internal$Parser$ExpectingLeftBrace))),
				A2(
					$elm$parser$Parser$Advanced$ignorer,
					$jxxcarlson$meenylatex$Internal$Parser$itemList(
						$elm$parser$Parser$Advanced$oneOf(
							_List_fromArray(
								[
									$jxxcarlson$meenylatex$Internal$Parser$macroArgWords,
									$jxxcarlson$meenylatex$Internal$Parser$inlineMath($jxxcarlson$meenylatex$Internal$Parser$spaces),
									$elm$parser$Parser$Advanced$lazy(
									function (_v0) {
										return $jxxcarlson$meenylatex$Internal$Parser$macro($jxxcarlson$meenylatex$Internal$Parser$spaces);
									})
								]))),
					$elm$parser$Parser$Advanced$symbol(
						A2($elm$parser$Parser$Advanced$Token, '}', $jxxcarlson$meenylatex$Internal$Parser$ExpectingRightBrace))))));
}
try {
	var $jxxcarlson$meenylatex$Internal$Parser$arg = $jxxcarlson$meenylatex$Internal$Parser$cyclic$arg();
	$jxxcarlson$meenylatex$Internal$Parser$cyclic$arg = function () {
		return $jxxcarlson$meenylatex$Internal$Parser$arg;
	};
} catch ($) {
	throw 'Some top-level definitions from `Internal.Parser` are causing infinite recursion:\n\n  ┌─────┐\n  │    arg\n  │     ↓\n  │    macro\n  └─────┘\n\nThese errors are very tricky, so read https://elm-lang.org/0.19.1/bad-recursion to learn how to fix it!';}
var $jxxcarlson$meenylatex$Internal$Parser$DisplayMath = function (a) {
	return {$: 'DisplayMath', a: a};
};
var $jxxcarlson$meenylatex$Internal$Parser$ExpectingBeginDisplayMathModeBracket = {$: 'ExpectingBeginDisplayMathModeBracket'};
var $jxxcarlson$meenylatex$Internal$Parser$ExpectingEndDisplayMathModeBracket = {$: 'ExpectingEndDisplayMathModeBracket'};
var $jxxcarlson$meenylatex$Internal$Parser$displayMathBrackets = A2(
	$elm$parser$Parser$Advanced$keeper,
	A2(
		$elm$parser$Parser$Advanced$ignorer,
		A2(
			$elm$parser$Parser$Advanced$ignorer,
			$elm$parser$Parser$Advanced$succeed($jxxcarlson$meenylatex$Internal$Parser$DisplayMath),
			$jxxcarlson$meenylatex$Internal$Parser$spaces),
		$elm$parser$Parser$Advanced$symbol(
			A2($elm$parser$Parser$Advanced$Token, '\\[', $jxxcarlson$meenylatex$Internal$Parser$ExpectingBeginDisplayMathModeBracket))),
	A2(
		$elm$parser$Parser$Advanced$ignorer,
		A2($jxxcarlson$meenylatex$Internal$Parser$parseToSymbol, $jxxcarlson$meenylatex$Internal$Parser$ExpectingEndDisplayMathModeBracket, '\\]'),
		$jxxcarlson$meenylatex$Internal$Parser$ws));
var $jxxcarlson$meenylatex$Internal$Parser$ExpectingBeginDisplayMathModeDollarSign = {$: 'ExpectingBeginDisplayMathModeDollarSign'};
var $jxxcarlson$meenylatex$Internal$Parser$ExpectingEndDisplayMathModeDollarSign = {$: 'ExpectingEndDisplayMathModeDollarSign'};
var $jxxcarlson$meenylatex$Internal$Parser$displayMathDollar = A2(
	$elm$parser$Parser$Advanced$keeper,
	A2(
		$elm$parser$Parser$Advanced$ignorer,
		A2(
			$elm$parser$Parser$Advanced$ignorer,
			$elm$parser$Parser$Advanced$succeed($jxxcarlson$meenylatex$Internal$Parser$DisplayMath),
			$jxxcarlson$meenylatex$Internal$Parser$spaces),
		$elm$parser$Parser$Advanced$symbol(
			A2($elm$parser$Parser$Advanced$Token, '$$', $jxxcarlson$meenylatex$Internal$Parser$ExpectingBeginDisplayMathModeDollarSign))),
	A2(
		$elm$parser$Parser$Advanced$ignorer,
		A2($jxxcarlson$meenylatex$Internal$Parser$parseToSymbol, $jxxcarlson$meenylatex$Internal$Parser$ExpectingEndDisplayMathModeDollarSign, '$$'),
		$jxxcarlson$meenylatex$Internal$Parser$ws));
var $jxxcarlson$meenylatex$Internal$Parser$ExpectingBeginAndRightBrace = {$: 'ExpectingBeginAndRightBrace'};
var $jxxcarlson$meenylatex$Internal$Parser$ExpectingEndOfEnvironmentName = {$: 'ExpectingEndOfEnvironmentName'};
var $jxxcarlson$meenylatex$Internal$Parser$envName = A2(
	$elm$parser$Parser$Advanced$keeper,
	A2(
		$elm$parser$Parser$Advanced$ignorer,
		A2(
			$elm$parser$Parser$Advanced$ignorer,
			$elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity),
			$jxxcarlson$meenylatex$Internal$Parser$spaces),
		$elm$parser$Parser$Advanced$symbol(
			A2($elm$parser$Parser$Advanced$Token, '\\begin{', $jxxcarlson$meenylatex$Internal$Parser$ExpectingBeginAndRightBrace))),
	A2($jxxcarlson$meenylatex$Internal$Parser$parseToSymbol, $jxxcarlson$meenylatex$Internal$Parser$ExpectingEndOfEnvironmentName, '}'));
var $jxxcarlson$meenylatex$Internal$Parser$ExpectingEscapedItem = {$: 'ExpectingEscapedItem'};
var $jxxcarlson$meenylatex$Internal$Parser$ExpectingSpace = {$: 'ExpectingSpace'};
var $jxxcarlson$meenylatex$Internal$Parser$Item = F2(
	function (a, b) {
		return {$: 'Item', a: a, b: b};
	});
var $jxxcarlson$meenylatex$Internal$Parser$ExpectingWords = {$: 'ExpectingWords'};
var $jxxcarlson$meenylatex$Internal$Parser$ExpectingDoubleNewline = {$: 'ExpectingDoubleNewline'};
var $jxxcarlson$meenylatex$Internal$Parser$blank = A2(
	$elm$parser$Parser$Advanced$map,
	function (_v0) {
		return $jxxcarlson$meenylatex$Internal$Parser$LXString('\n\n');
	},
	$elm$parser$Parser$Advanced$symbol(
		A2($elm$parser$Parser$Advanced$Token, '\n\n', $jxxcarlson$meenylatex$Internal$Parser$ExpectingDoubleNewline)));
var $jxxcarlson$meenylatex$Internal$Parser$notSpaceOrSpecialCharacters = function (c) {
	return !(_Utils_eq(
		c,
		_Utils_chr(' ')) || (_Utils_eq(
		c,
		_Utils_chr('\n')) || (_Utils_eq(
		c,
		_Utils_chr('\\')) || _Utils_eq(
		c,
		_Utils_chr('$')))));
};
var $jxxcarlson$meenylatex$Internal$Parser$words_ = function (problem) {
	return A2(
		$elm$parser$Parser$Advanced$map,
		$jxxcarlson$meenylatex$Internal$Parser$LXString,
		A2(
			$elm$parser$Parser$Advanced$map,
			$elm$core$String$join(' '),
			$jxxcarlson$meenylatex$Internal$Parser$nonEmptyItemList(
				A2($jxxcarlson$meenylatex$Internal$Parser$word, problem, $jxxcarlson$meenylatex$Internal$Parser$notSpaceOrSpecialCharacters))));
};
var $jxxcarlson$meenylatex$Internal$Parser$words = $elm$parser$Parser$Advanced$oneOf(
	_List_fromArray(
		[
			$jxxcarlson$meenylatex$Internal$Parser$blank,
			A2(
			$elm$parser$Parser$Advanced$keeper,
			A2(
				$elm$parser$Parser$Advanced$ignorer,
				$elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity),
				$jxxcarlson$meenylatex$Internal$Parser$ws),
			A2(
				$elm$parser$Parser$Advanced$ignorer,
				$jxxcarlson$meenylatex$Internal$Parser$words_($jxxcarlson$meenylatex$Internal$Parser$ExpectingWords),
				$jxxcarlson$meenylatex$Internal$Parser$ws))
		]));
var $jxxcarlson$meenylatex$Internal$Parser$item = A2(
	$elm$parser$Parser$Advanced$map,
	function (x) {
		return A2(
			$jxxcarlson$meenylatex$Internal$Parser$Item,
			1,
			$jxxcarlson$meenylatex$Internal$Parser$LatexList(x));
	},
	A2(
		$elm$parser$Parser$Advanced$keeper,
		A2(
			$elm$parser$Parser$Advanced$ignorer,
			A2(
				$elm$parser$Parser$Advanced$ignorer,
				A2(
					$elm$parser$Parser$Advanced$ignorer,
					A2(
						$elm$parser$Parser$Advanced$ignorer,
						$elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity),
						$jxxcarlson$meenylatex$Internal$Parser$spaces),
					$elm$parser$Parser$Advanced$symbol(
						A2($elm$parser$Parser$Advanced$Token, '\\item', $jxxcarlson$meenylatex$Internal$Parser$ExpectingEscapedItem))),
				$elm$parser$Parser$Advanced$symbol(
					A2($elm$parser$Parser$Advanced$Token, ' ', $jxxcarlson$meenylatex$Internal$Parser$ExpectingSpace))),
			$jxxcarlson$meenylatex$Internal$Parser$spaces),
		A2(
			$elm$parser$Parser$Advanced$ignorer,
			$jxxcarlson$meenylatex$Internal$Parser$itemList(
				$elm$parser$Parser$Advanced$oneOf(
					_List_fromArray(
						[
							$jxxcarlson$meenylatex$Internal$Parser$words,
							$jxxcarlson$meenylatex$Internal$Parser$inlineMath($jxxcarlson$meenylatex$Internal$Parser$ws),
							$jxxcarlson$meenylatex$Internal$Parser$macro($jxxcarlson$meenylatex$Internal$Parser$ws)
						]))),
			$jxxcarlson$meenylatex$Internal$Parser$ws)));
var $elm$core$List$any = F2(
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
var $elm$core$List$member = F2(
	function (x, xs) {
		return A2(
			$elm$core$List$any,
			function (a) {
				return _Utils_eq(a, x);
			},
			xs);
	});
var $jxxcarlson$meenylatex$Internal$Parser$ExpectingEscapedNewcommandAndBrace = {$: 'ExpectingEscapedNewcommandAndBrace'};
var $jxxcarlson$meenylatex$Internal$Parser$NewCommand = F3(
	function (a, b, c) {
		return {$: 'NewCommand', a: a, b: b, c: c};
	});
var $elm$core$List$head = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return $elm$core$Maybe$Just(x);
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $jxxcarlson$meenylatex$Internal$Parser$manyHelp = F2(
	function (p, vs) {
		return $elm$parser$Parser$Advanced$oneOf(
			_List_fromArray(
				[
					A2(
					$elm$parser$Parser$Advanced$keeper,
					$elm$parser$Parser$Advanced$succeed(
						function (v) {
							return $elm$parser$Parser$Advanced$Loop(
								A2($elm$core$List$cons, v, vs));
						}),
					A2($elm$parser$Parser$Advanced$ignorer, p, $jxxcarlson$meenylatex$Internal$Parser$spaces)),
					A2(
					$elm$parser$Parser$Advanced$map,
					function (_v0) {
						return $elm$parser$Parser$Advanced$Done(
							$elm$core$List$reverse(vs));
					},
					$elm$parser$Parser$Advanced$succeed(_Utils_Tuple0))
				]));
	});
var $jxxcarlson$meenylatex$Internal$Parser$many = function (p) {
	return A2(
		$elm$parser$Parser$Advanced$loop,
		_List_Nil,
		$jxxcarlson$meenylatex$Internal$Parser$manyHelp(p));
};
var $jxxcarlson$meenylatex$Internal$Parser$ExpectingInt = {$: 'ExpectingInt'};
var $jxxcarlson$meenylatex$Internal$Parser$InvalidInt = {$: 'InvalidInt'};
var $elm$parser$Parser$Advanced$consumeBase = _Parser_consumeBase;
var $elm$parser$Parser$Advanced$consumeBase16 = _Parser_consumeBase16;
var $elm$parser$Parser$Advanced$bumpOffset = F2(
	function (newOffset, s) {
		return {col: s.col + (newOffset - s.offset), context: s.context, indent: s.indent, offset: newOffset, row: s.row, src: s.src};
	});
var $elm$parser$Parser$Advanced$chompBase10 = _Parser_chompBase10;
var $elm$parser$Parser$Advanced$isAsciiCode = _Parser_isAsciiCode;
var $elm$parser$Parser$Advanced$consumeExp = F2(
	function (offset, src) {
		if (A3($elm$parser$Parser$Advanced$isAsciiCode, 101, offset, src) || A3($elm$parser$Parser$Advanced$isAsciiCode, 69, offset, src)) {
			var eOffset = offset + 1;
			var expOffset = (A3($elm$parser$Parser$Advanced$isAsciiCode, 43, eOffset, src) || A3($elm$parser$Parser$Advanced$isAsciiCode, 45, eOffset, src)) ? (eOffset + 1) : eOffset;
			var newOffset = A2($elm$parser$Parser$Advanced$chompBase10, expOffset, src);
			return _Utils_eq(expOffset, newOffset) ? (-newOffset) : newOffset;
		} else {
			return offset;
		}
	});
var $elm$parser$Parser$Advanced$consumeDotAndExp = F2(
	function (offset, src) {
		return A3($elm$parser$Parser$Advanced$isAsciiCode, 46, offset, src) ? A2(
			$elm$parser$Parser$Advanced$consumeExp,
			A2($elm$parser$Parser$Advanced$chompBase10, offset + 1, src),
			src) : A2($elm$parser$Parser$Advanced$consumeExp, offset, src);
	});
var $elm$parser$Parser$Advanced$finalizeInt = F5(
	function (invalid, handler, startOffset, _v0, s) {
		var endOffset = _v0.a;
		var n = _v0.b;
		if (handler.$ === 'Err') {
			var x = handler.a;
			return A2(
				$elm$parser$Parser$Advanced$Bad,
				true,
				A2($elm$parser$Parser$Advanced$fromState, s, x));
		} else {
			var toValue = handler.a;
			return _Utils_eq(startOffset, endOffset) ? A2(
				$elm$parser$Parser$Advanced$Bad,
				_Utils_cmp(s.offset, startOffset) < 0,
				A2($elm$parser$Parser$Advanced$fromState, s, invalid)) : A3(
				$elm$parser$Parser$Advanced$Good,
				true,
				toValue(n),
				A2($elm$parser$Parser$Advanced$bumpOffset, endOffset, s));
		}
	});
var $elm$parser$Parser$Advanced$fromInfo = F4(
	function (row, col, x, context) {
		return A2(
			$elm$parser$Parser$Advanced$AddRight,
			$elm$parser$Parser$Advanced$Empty,
			A4($elm$parser$Parser$Advanced$DeadEnd, row, col, x, context));
	});
var $elm$core$String$toFloat = _String_toFloat;
var $elm$parser$Parser$Advanced$finalizeFloat = F6(
	function (invalid, expecting, intSettings, floatSettings, intPair, s) {
		var intOffset = intPair.a;
		var floatOffset = A2($elm$parser$Parser$Advanced$consumeDotAndExp, intOffset, s.src);
		if (floatOffset < 0) {
			return A2(
				$elm$parser$Parser$Advanced$Bad,
				true,
				A4($elm$parser$Parser$Advanced$fromInfo, s.row, s.col - (floatOffset + s.offset), invalid, s.context));
		} else {
			if (_Utils_eq(s.offset, floatOffset)) {
				return A2(
					$elm$parser$Parser$Advanced$Bad,
					false,
					A2($elm$parser$Parser$Advanced$fromState, s, expecting));
			} else {
				if (_Utils_eq(intOffset, floatOffset)) {
					return A5($elm$parser$Parser$Advanced$finalizeInt, invalid, intSettings, s.offset, intPair, s);
				} else {
					if (floatSettings.$ === 'Err') {
						var x = floatSettings.a;
						return A2(
							$elm$parser$Parser$Advanced$Bad,
							true,
							A2($elm$parser$Parser$Advanced$fromState, s, invalid));
					} else {
						var toValue = floatSettings.a;
						var _v1 = $elm$core$String$toFloat(
							A3($elm$core$String$slice, s.offset, floatOffset, s.src));
						if (_v1.$ === 'Nothing') {
							return A2(
								$elm$parser$Parser$Advanced$Bad,
								true,
								A2($elm$parser$Parser$Advanced$fromState, s, invalid));
						} else {
							var n = _v1.a;
							return A3(
								$elm$parser$Parser$Advanced$Good,
								true,
								toValue(n),
								A2($elm$parser$Parser$Advanced$bumpOffset, floatOffset, s));
						}
					}
				}
			}
		}
	});
var $elm$parser$Parser$Advanced$number = function (c) {
	return $elm$parser$Parser$Advanced$Parser(
		function (s) {
			if (A3($elm$parser$Parser$Advanced$isAsciiCode, 48, s.offset, s.src)) {
				var zeroOffset = s.offset + 1;
				var baseOffset = zeroOffset + 1;
				return A3($elm$parser$Parser$Advanced$isAsciiCode, 120, zeroOffset, s.src) ? A5(
					$elm$parser$Parser$Advanced$finalizeInt,
					c.invalid,
					c.hex,
					baseOffset,
					A2($elm$parser$Parser$Advanced$consumeBase16, baseOffset, s.src),
					s) : (A3($elm$parser$Parser$Advanced$isAsciiCode, 111, zeroOffset, s.src) ? A5(
					$elm$parser$Parser$Advanced$finalizeInt,
					c.invalid,
					c.octal,
					baseOffset,
					A3($elm$parser$Parser$Advanced$consumeBase, 8, baseOffset, s.src),
					s) : (A3($elm$parser$Parser$Advanced$isAsciiCode, 98, zeroOffset, s.src) ? A5(
					$elm$parser$Parser$Advanced$finalizeInt,
					c.invalid,
					c.binary,
					baseOffset,
					A3($elm$parser$Parser$Advanced$consumeBase, 2, baseOffset, s.src),
					s) : A6(
					$elm$parser$Parser$Advanced$finalizeFloat,
					c.invalid,
					c.expecting,
					c._int,
					c._float,
					_Utils_Tuple2(zeroOffset, 0),
					s)));
			} else {
				return A6(
					$elm$parser$Parser$Advanced$finalizeFloat,
					c.invalid,
					c.expecting,
					c._int,
					c._float,
					A3($elm$parser$Parser$Advanced$consumeBase, 10, s.offset, s.src),
					s);
			}
		});
};
var $elm$parser$Parser$Advanced$int = F2(
	function (expecting, invalid) {
		return $elm$parser$Parser$Advanced$number(
			{
				binary: $elm$core$Result$Err(invalid),
				expecting: expecting,
				_float: $elm$core$Result$Err(invalid),
				hex: $elm$core$Result$Err(invalid),
				_int: $elm$core$Result$Ok($elm$core$Basics$identity),
				invalid: invalid,
				octal: $elm$core$Result$Err(invalid)
			});
	});
var $jxxcarlson$meenylatex$Internal$Parser$numberOfArgs_ = A2(
	$elm$parser$Parser$Advanced$keeper,
	A2(
		$elm$parser$Parser$Advanced$ignorer,
		$elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity),
		$elm$parser$Parser$Advanced$symbol(
			A2($elm$parser$Parser$Advanced$Token, '[', $jxxcarlson$meenylatex$Internal$Parser$ExpectingLeftBracket))),
	A2(
		$elm$parser$Parser$Advanced$ignorer,
		A2($elm$parser$Parser$Advanced$int, $jxxcarlson$meenylatex$Internal$Parser$ExpectingInt, $jxxcarlson$meenylatex$Internal$Parser$InvalidInt),
		$elm$parser$Parser$Advanced$symbol(
			A2($elm$parser$Parser$Advanced$Token, ']', $jxxcarlson$meenylatex$Internal$Parser$ExpectingRightBracket))));
var $elm$core$Maybe$withDefault = F2(
	function (_default, maybe) {
		if (maybe.$ === 'Just') {
			var value = maybe.a;
			return value;
		} else {
			return _default;
		}
	});
var $jxxcarlson$meenylatex$Internal$Parser$numberOfArgs = A2(
	$elm$parser$Parser$Advanced$map,
	$elm$core$Maybe$withDefault(0),
	A2(
		$elm$parser$Parser$Advanced$map,
		$elm$core$List$head,
		$jxxcarlson$meenylatex$Internal$Parser$many($jxxcarlson$meenylatex$Internal$Parser$numberOfArgs_)));
var $jxxcarlson$meenylatex$Internal$Parser$newcommand = A2(
	$elm$parser$Parser$Advanced$keeper,
	A2(
		$elm$parser$Parser$Advanced$keeper,
		A2(
			$elm$parser$Parser$Advanced$keeper,
			A2(
				$elm$parser$Parser$Advanced$ignorer,
				$elm$parser$Parser$Advanced$succeed($jxxcarlson$meenylatex$Internal$Parser$NewCommand),
				$elm$parser$Parser$Advanced$symbol(
					A2($elm$parser$Parser$Advanced$Token, '\\newcommand{', $jxxcarlson$meenylatex$Internal$Parser$ExpectingEscapedNewcommandAndBrace))),
			A2(
				$elm$parser$Parser$Advanced$ignorer,
				$jxxcarlson$meenylatex$Internal$Parser$macroName,
				$elm$parser$Parser$Advanced$symbol(
					A2($elm$parser$Parser$Advanced$Token, '}', $jxxcarlson$meenylatex$Internal$Parser$ExpectingRightBrace)))),
		$jxxcarlson$meenylatex$Internal$Parser$numberOfArgs),
	A2($elm$parser$Parser$Advanced$ignorer, $jxxcarlson$meenylatex$Internal$Parser$arg, $jxxcarlson$meenylatex$Internal$Parser$ws));
var $jxxcarlson$meenylatex$Internal$Parser$ExpectingEndForPassThroughBody = {$: 'ExpectingEndForPassThroughBody'};
var $jxxcarlson$meenylatex$Internal$Parser$passThroughBody = F2(
	function (endWoord, envType) {
		return A2(
			$elm$parser$Parser$Advanced$map,
			A2($jxxcarlson$meenylatex$Internal$Parser$Environment, envType, _List_Nil),
			A2(
				$elm$parser$Parser$Advanced$map,
				$jxxcarlson$meenylatex$Internal$Parser$LXString,
				A2(
					$elm$parser$Parser$Advanced$keeper,
					$elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity),
					A2(
						$elm$parser$Parser$Advanced$ignorer,
						A2($jxxcarlson$meenylatex$Internal$Parser$parseToSymbol, $jxxcarlson$meenylatex$Internal$Parser$ExpectingEndForPassThroughBody, endWoord),
						$jxxcarlson$meenylatex$Internal$Parser$ws))));
	});
var $jxxcarlson$meenylatex$Internal$Parser$ExpectingmSMacroReservedWord = {$: 'ExpectingmSMacroReservedWord'};
var $jxxcarlson$meenylatex$Internal$Parser$smacroName = A2(
	$elm$parser$Parser$Advanced$map,
	$elm$core$String$dropLeft(1),
	$elm$parser$Parser$Advanced$variable(
		{
			expecting: $jxxcarlson$meenylatex$Internal$Parser$ExpectingmSMacroReservedWord,
			inner: function (c) {
				return $elm$core$Char$isAlphaNum(c);
			},
			reserved: $elm$core$Set$fromList(
				_List_fromArray(
					['\\begin', '\\end', '\\item'])),
			start: function (c) {
				return _Utils_eq(
					c,
					_Utils_chr('\\'));
			}
		}));
var $jxxcarlson$meenylatex$Internal$Parser$ExpectingDoubleEscapeAndNewline = {$: 'ExpectingDoubleEscapeAndNewline'};
var $jxxcarlson$meenylatex$Internal$Parser$ExpectingNewline = {$: 'ExpectingNewline'};
var $jxxcarlson$meenylatex$Internal$Parser$ExpectingValidTableCell = {$: 'ExpectingValidTableCell'};
var $jxxcarlson$meenylatex$Internal$Parser$inTableCellWord = function (c) {
	return !(_Utils_eq(
		c,
		_Utils_chr(' ')) || (_Utils_eq(
		c,
		_Utils_chr('\n')) || (_Utils_eq(
		c,
		_Utils_chr('\\')) || (_Utils_eq(
		c,
		_Utils_chr('$')) || _Utils_eq(
		c,
		_Utils_chr('&'))))));
};
var $elm$core$String$trim = _String_trim;
var $jxxcarlson$meenylatex$Internal$Parser$tableCellWords = A2(
	$elm$parser$Parser$Advanced$map,
	$jxxcarlson$meenylatex$Internal$Parser$LXString,
	A2(
		$elm$parser$Parser$Advanced$map,
		$elm$core$String$trim,
		A2(
			$elm$parser$Parser$Advanced$map,
			$elm$core$String$join(' '),
			$jxxcarlson$meenylatex$Internal$Parser$nonEmptyItemList(
				A2($jxxcarlson$meenylatex$Internal$Parser$word, $jxxcarlson$meenylatex$Internal$Parser$ExpectingValidTableCell, $jxxcarlson$meenylatex$Internal$Parser$inTableCellWord)))));
var $jxxcarlson$meenylatex$Internal$Parser$tableCell = A2(
	$elm$parser$Parser$Advanced$keeper,
	$elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity),
	$elm$parser$Parser$Advanced$oneOf(
		_List_fromArray(
			[
				$jxxcarlson$meenylatex$Internal$Parser$displayMathBrackets,
				$jxxcarlson$meenylatex$Internal$Parser$macro($jxxcarlson$meenylatex$Internal$Parser$ws),
				$jxxcarlson$meenylatex$Internal$Parser$displayMathDollar,
				$jxxcarlson$meenylatex$Internal$Parser$inlineMath($jxxcarlson$meenylatex$Internal$Parser$ws),
				$jxxcarlson$meenylatex$Internal$Parser$tableCellWords
			])));
var $jxxcarlson$meenylatex$Internal$Parser$ExpectingAmpersand = {$: 'ExpectingAmpersand'};
var $jxxcarlson$meenylatex$Internal$Parser$nextCell = A2(
	$elm$parser$Parser$Advanced$keeper,
	A2(
		$elm$parser$Parser$Advanced$ignorer,
		A2(
			$elm$parser$Parser$Advanced$ignorer,
			$elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity),
			$elm$parser$Parser$Advanced$symbol(
				A2($elm$parser$Parser$Advanced$Token, '&', $jxxcarlson$meenylatex$Internal$Parser$ExpectingAmpersand))),
		$jxxcarlson$meenylatex$Internal$Parser$spaces),
	$jxxcarlson$meenylatex$Internal$Parser$tableCell);
var $jxxcarlson$meenylatex$Internal$Parser$tableCellHelp = function (revCells) {
	return $elm$parser$Parser$Advanced$oneOf(
		_List_fromArray(
			[
				A2(
				$elm$parser$Parser$Advanced$andThen,
				function (c) {
					return $jxxcarlson$meenylatex$Internal$Parser$tableCellHelp(
						A2($elm$core$List$cons, c, revCells));
				},
				$jxxcarlson$meenylatex$Internal$Parser$nextCell),
				$elm$parser$Parser$Advanced$succeed(
				$elm$core$List$reverse(revCells))
			]));
};
var $jxxcarlson$meenylatex$Internal$Parser$tableRow = A2(
	$elm$parser$Parser$Advanced$map,
	$jxxcarlson$meenylatex$Internal$Parser$LatexList,
	A2(
		$elm$parser$Parser$Advanced$keeper,
		A2(
			$elm$parser$Parser$Advanced$ignorer,
			$elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity),
			$jxxcarlson$meenylatex$Internal$Parser$spaces),
		A2(
			$elm$parser$Parser$Advanced$ignorer,
			A2(
				$elm$parser$Parser$Advanced$ignorer,
				A2(
					$elm$parser$Parser$Advanced$andThen,
					function (c) {
						return $jxxcarlson$meenylatex$Internal$Parser$tableCellHelp(
							_List_fromArray(
								[c]));
					},
					$jxxcarlson$meenylatex$Internal$Parser$tableCell),
				$jxxcarlson$meenylatex$Internal$Parser$spaces),
			$elm$parser$Parser$Advanced$oneOf(
				_List_fromArray(
					[
						$elm$parser$Parser$Advanced$symbol(
						A2($elm$parser$Parser$Advanced$Token, '\n', $jxxcarlson$meenylatex$Internal$Parser$ExpectingNewline)),
						$elm$parser$Parser$Advanced$symbol(
						A2($elm$parser$Parser$Advanced$Token, '\\\\\n', $jxxcarlson$meenylatex$Internal$Parser$ExpectingDoubleEscapeAndNewline))
					])))));
var $jxxcarlson$meenylatex$Internal$Parser$tableBody = A2(
	$elm$parser$Parser$Advanced$map,
	$jxxcarlson$meenylatex$Internal$Parser$LatexList,
	A2(
		$elm$parser$Parser$Advanced$keeper,
		A2(
			$elm$parser$Parser$Advanced$ignorer,
			$elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity),
			$jxxcarlson$meenylatex$Internal$Parser$ws),
		$jxxcarlson$meenylatex$Internal$Parser$nonEmptyItemList($jxxcarlson$meenylatex$Internal$Parser$tableRow)));
var $jxxcarlson$meenylatex$Internal$Parser$tabularEnvironmentBody = F2(
	function (endWoord, envType) {
		return A2(
			$elm$parser$Parser$Advanced$keeper,
			A2(
				$elm$parser$Parser$Advanced$keeper,
				A2(
					$elm$parser$Parser$Advanced$ignorer,
					$elm$parser$Parser$Advanced$succeed(
						$jxxcarlson$meenylatex$Internal$Parser$Environment(envType)),
					$jxxcarlson$meenylatex$Internal$Parser$ws),
				$jxxcarlson$meenylatex$Internal$Parser$itemList($jxxcarlson$meenylatex$Internal$Parser$arg)),
			A2(
				$elm$parser$Parser$Advanced$ignorer,
				A2(
					$elm$parser$Parser$Advanced$ignorer,
					A2($elm$parser$Parser$Advanced$ignorer, $jxxcarlson$meenylatex$Internal$Parser$tableBody, $jxxcarlson$meenylatex$Internal$Parser$ws),
					$elm$parser$Parser$Advanced$symbol(
						A2($elm$parser$Parser$Advanced$Token, endWoord, $jxxcarlson$meenylatex$Internal$Parser$ExpectingEndWord))),
				$jxxcarlson$meenylatex$Internal$Parser$ws));
	});
var $jxxcarlson$meenylatex$Internal$Parser$Comment = function (a) {
	return {$: 'Comment', a: a};
};
var $jxxcarlson$meenylatex$Internal$Parser$ExpectingPercent = {$: 'ExpectingPercent'};
var $elm$core$Basics$neq = _Utils_notEqual;
var $jxxcarlson$meenylatex$Internal$Parser$texComment = A2(
	$elm$parser$Parser$Advanced$map,
	$jxxcarlson$meenylatex$Internal$Parser$Comment,
	$elm$parser$Parser$Advanced$getChompedString(
		A2(
			$elm$parser$Parser$Advanced$ignorer,
			A2(
				$elm$parser$Parser$Advanced$ignorer,
				A2(
					$elm$parser$Parser$Advanced$ignorer,
					A2(
						$elm$parser$Parser$Advanced$ignorer,
						$elm$parser$Parser$Advanced$succeed(_Utils_Tuple0),
						A2(
							$elm$parser$Parser$Advanced$chompIf,
							function (c) {
								return _Utils_eq(
									c,
									_Utils_chr('%'));
							},
							$jxxcarlson$meenylatex$Internal$Parser$ExpectingPercent)),
					$elm$parser$Parser$Advanced$chompWhile(
						function (c) {
							return !_Utils_eq(
								c,
								_Utils_chr('\n'));
						})),
				A2(
					$elm$parser$Parser$Advanced$chompIf,
					function (c) {
						return _Utils_eq(
							c,
							_Utils_chr('\n'));
					},
					$jxxcarlson$meenylatex$Internal$Parser$ExpectingNewline)),
			$jxxcarlson$meenylatex$Internal$Parser$ws)));
var $jxxcarlson$meenylatex$Internal$Parser$biblioEnvironmentBody = F2(
	function (endWoord, envType) {
		return A2(
			$elm$parser$Parser$Advanced$map,
			A2($jxxcarlson$meenylatex$Internal$Parser$Environment, envType, _List_Nil),
			A2(
				$elm$parser$Parser$Advanced$map,
				$jxxcarlson$meenylatex$Internal$Parser$LatexList,
				A2(
					$elm$parser$Parser$Advanced$keeper,
					A2(
						$elm$parser$Parser$Advanced$ignorer,
						$elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity),
						$jxxcarlson$meenylatex$Internal$Parser$ws),
					A2(
						$elm$parser$Parser$Advanced$ignorer,
						A2(
							$elm$parser$Parser$Advanced$ignorer,
							A2(
								$elm$parser$Parser$Advanced$ignorer,
								$jxxcarlson$meenylatex$Internal$Parser$itemList(
									$jxxcarlson$meenylatex$Internal$Parser$cyclic$smacro()),
								$jxxcarlson$meenylatex$Internal$Parser$ws),
							$elm$parser$Parser$Advanced$symbol(
								A2($elm$parser$Parser$Advanced$Token, endWoord, $jxxcarlson$meenylatex$Internal$Parser$ExpectingEndWord))),
						$jxxcarlson$meenylatex$Internal$Parser$ws))));
	});
var $jxxcarlson$meenylatex$Internal$Parser$environmentOfType = function (envType) {
	var theEndWord = '\\end{' + (envType + '}');
	var envKind = A2(
		$elm$core$List$member,
		envType,
		_List_fromArray(
			['equation', 'align', 'eqnarray', 'verbatim', 'mathmacro', 'listing', 'verse'])) ? 'passThrough' : envType;
	return A3($jxxcarlson$meenylatex$Internal$Parser$environmentParser, envKind, theEndWord, envType);
};
var $jxxcarlson$meenylatex$Internal$Parser$environmentParser = F3(
	function (envKind, theEndWord, envType) {
		var _v3 = A2(
			$elm$core$Dict$get,
			envKind,
			$jxxcarlson$meenylatex$Internal$Parser$cyclic$parseEnvironmentDict());
		if (_v3.$ === 'Just') {
			var p = _v3.a;
			return A2(p, theEndWord, envType);
		} else {
			return A2($jxxcarlson$meenylatex$Internal$Parser$standardEnvironmentBody, theEndWord, envType);
		}
	});
var $jxxcarlson$meenylatex$Internal$Parser$itemEnvironmentBody = F2(
	function (endWoord, envType) {
		return A2(
			$elm$parser$Parser$Advanced$map,
			A2($jxxcarlson$meenylatex$Internal$Parser$Environment, envType, _List_Nil),
			A2(
				$elm$parser$Parser$Advanced$map,
				$jxxcarlson$meenylatex$Internal$Parser$LatexList,
				A2(
					$elm$parser$Parser$Advanced$keeper,
					A2(
						$elm$parser$Parser$Advanced$ignorer,
						$elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity),
						$jxxcarlson$meenylatex$Internal$Parser$ws),
					A2(
						$elm$parser$Parser$Advanced$ignorer,
						A2(
							$elm$parser$Parser$Advanced$ignorer,
							A2(
								$elm$parser$Parser$Advanced$ignorer,
								$jxxcarlson$meenylatex$Internal$Parser$itemList(
									$elm$parser$Parser$Advanced$oneOf(
										_List_fromArray(
											[
												$jxxcarlson$meenylatex$Internal$Parser$item,
												$elm$parser$Parser$Advanced$lazy(
												function (_v2) {
													return $jxxcarlson$meenylatex$Internal$Parser$cyclic$environment();
												})
											]))),
								$jxxcarlson$meenylatex$Internal$Parser$ws),
							$elm$parser$Parser$Advanced$symbol(
								A2($elm$parser$Parser$Advanced$Token, endWoord, $jxxcarlson$meenylatex$Internal$Parser$ExpectingEndWord))),
						$jxxcarlson$meenylatex$Internal$Parser$ws))));
	});
var $jxxcarlson$meenylatex$Internal$Parser$standardEnvironmentBody = F2(
	function (endWoord, envType) {
		return A2(
			$elm$parser$Parser$Advanced$keeper,
			A2(
				$elm$parser$Parser$Advanced$keeper,
				A2(
					$elm$parser$Parser$Advanced$ignorer,
					$elm$parser$Parser$Advanced$succeed(
						$jxxcarlson$meenylatex$Internal$Parser$Environment(envType)),
					$jxxcarlson$meenylatex$Internal$Parser$ws),
				A2(
					$elm$parser$Parser$Advanced$ignorer,
					$jxxcarlson$meenylatex$Internal$Parser$itemList($jxxcarlson$meenylatex$Internal$Parser$optionalArg),
					$jxxcarlson$meenylatex$Internal$Parser$ws)),
			A2(
				$elm$parser$Parser$Advanced$ignorer,
				A2(
					$elm$parser$Parser$Advanced$ignorer,
					A2(
						$elm$parser$Parser$Advanced$ignorer,
						A2(
							$elm$parser$Parser$Advanced$map,
							$jxxcarlson$meenylatex$Internal$Parser$LatexList,
							$jxxcarlson$meenylatex$Internal$Parser$nonEmptyItemList(
								$jxxcarlson$meenylatex$Internal$Parser$cyclic$latexExpression())),
						$jxxcarlson$meenylatex$Internal$Parser$ws),
					$elm$parser$Parser$Advanced$symbol(
						A2($elm$parser$Parser$Advanced$Token, endWoord, $jxxcarlson$meenylatex$Internal$Parser$ExpectingEndWord))),
				$jxxcarlson$meenylatex$Internal$Parser$ws));
	});
function $jxxcarlson$meenylatex$Internal$Parser$cyclic$environment() {
	return A2($elm$parser$Parser$Advanced$andThen, $jxxcarlson$meenylatex$Internal$Parser$environmentOfType, $jxxcarlson$meenylatex$Internal$Parser$envName);
}
function $jxxcarlson$meenylatex$Internal$Parser$cyclic$latexList() {
	return A2(
		$elm$parser$Parser$Advanced$map,
		$jxxcarlson$meenylatex$Internal$Parser$LatexList,
		A2(
			$elm$parser$Parser$Advanced$keeper,
			A2(
				$elm$parser$Parser$Advanced$ignorer,
				$elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity),
				$jxxcarlson$meenylatex$Internal$Parser$ws),
			$jxxcarlson$meenylatex$Internal$Parser$itemList(
				$jxxcarlson$meenylatex$Internal$Parser$cyclic$latexExpression())));
}
function $jxxcarlson$meenylatex$Internal$Parser$cyclic$latexExpression() {
	return $elm$parser$Parser$Advanced$oneOf(
		_List_fromArray(
			[
				$jxxcarlson$meenylatex$Internal$Parser$texComment,
				$jxxcarlson$meenylatex$Internal$Parser$displayMathDollar,
				$jxxcarlson$meenylatex$Internal$Parser$displayMathBrackets,
				$jxxcarlson$meenylatex$Internal$Parser$inlineMath($jxxcarlson$meenylatex$Internal$Parser$ws),
				$jxxcarlson$meenylatex$Internal$Parser$newcommand,
				$jxxcarlson$meenylatex$Internal$Parser$macro($jxxcarlson$meenylatex$Internal$Parser$ws),
				$jxxcarlson$meenylatex$Internal$Parser$cyclic$smacro(),
				$jxxcarlson$meenylatex$Internal$Parser$words,
				$elm$parser$Parser$Advanced$lazy(
				function (_v1) {
					return $jxxcarlson$meenylatex$Internal$Parser$cyclic$environment();
				})
			]));
}
function $jxxcarlson$meenylatex$Internal$Parser$cyclic$parseEnvironmentDict() {
	return $elm$core$Dict$fromList(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'enumerate',
				F2(
					function (endWoord, envType) {
						return A2($jxxcarlson$meenylatex$Internal$Parser$itemEnvironmentBody, endWoord, envType);
					})),
				_Utils_Tuple2(
				'itemize',
				F2(
					function (endWoord, envType) {
						return A2($jxxcarlson$meenylatex$Internal$Parser$itemEnvironmentBody, endWoord, envType);
					})),
				_Utils_Tuple2(
				'thebibliography',
				F2(
					function (endWoord, envType) {
						return A2($jxxcarlson$meenylatex$Internal$Parser$biblioEnvironmentBody, endWoord, envType);
					})),
				_Utils_Tuple2(
				'tabular',
				F2(
					function (endWoord, envType) {
						return A2($jxxcarlson$meenylatex$Internal$Parser$tabularEnvironmentBody, endWoord, envType);
					})),
				_Utils_Tuple2(
				'passThrough',
				F2(
					function (endWoord, envType) {
						return A2($jxxcarlson$meenylatex$Internal$Parser$passThroughBody, endWoord, envType);
					}))
			]));
}
function $jxxcarlson$meenylatex$Internal$Parser$cyclic$smacro() {
	return A2(
		$elm$parser$Parser$Advanced$keeper,
		A2(
			$elm$parser$Parser$Advanced$keeper,
			A2(
				$elm$parser$Parser$Advanced$keeper,
				A2(
					$elm$parser$Parser$Advanced$keeper,
					$elm$parser$Parser$Advanced$succeed($jxxcarlson$meenylatex$Internal$Parser$SMacro),
					$jxxcarlson$meenylatex$Internal$Parser$smacroName),
				$jxxcarlson$meenylatex$Internal$Parser$itemList($jxxcarlson$meenylatex$Internal$Parser$optionalArg)),
			$jxxcarlson$meenylatex$Internal$Parser$itemList($jxxcarlson$meenylatex$Internal$Parser$arg)),
		$elm$parser$Parser$Advanced$lazy(
			function (_v0) {
				return $jxxcarlson$meenylatex$Internal$Parser$cyclic$latexList();
			}));
}
try {
	var $jxxcarlson$meenylatex$Internal$Parser$environment = $jxxcarlson$meenylatex$Internal$Parser$cyclic$environment();
	$jxxcarlson$meenylatex$Internal$Parser$cyclic$environment = function () {
		return $jxxcarlson$meenylatex$Internal$Parser$environment;
	};
	var $jxxcarlson$meenylatex$Internal$Parser$latexList = $jxxcarlson$meenylatex$Internal$Parser$cyclic$latexList();
	$jxxcarlson$meenylatex$Internal$Parser$cyclic$latexList = function () {
		return $jxxcarlson$meenylatex$Internal$Parser$latexList;
	};
	var $jxxcarlson$meenylatex$Internal$Parser$latexExpression = $jxxcarlson$meenylatex$Internal$Parser$cyclic$latexExpression();
	$jxxcarlson$meenylatex$Internal$Parser$cyclic$latexExpression = function () {
		return $jxxcarlson$meenylatex$Internal$Parser$latexExpression;
	};
	var $jxxcarlson$meenylatex$Internal$Parser$parseEnvironmentDict = $jxxcarlson$meenylatex$Internal$Parser$cyclic$parseEnvironmentDict();
	$jxxcarlson$meenylatex$Internal$Parser$cyclic$parseEnvironmentDict = function () {
		return $jxxcarlson$meenylatex$Internal$Parser$parseEnvironmentDict;
	};
	var $jxxcarlson$meenylatex$Internal$Parser$smacro = $jxxcarlson$meenylatex$Internal$Parser$cyclic$smacro();
	$jxxcarlson$meenylatex$Internal$Parser$cyclic$smacro = function () {
		return $jxxcarlson$meenylatex$Internal$Parser$smacro;
	};
} catch ($) {
	throw 'Some top-level definitions from `Internal.Parser` are causing infinite recursion:\n\n  ┌─────┐\n  │    biblioEnvironmentBody\n  │     ↓\n  │    environment\n  │     ↓\n  │    environmentOfType\n  │     ↓\n  │    environmentParser\n  │     ↓\n  │    itemEnvironmentBody\n  │     ↓\n  │    latexList\n  │     ↓\n  │    latexExpression\n  │     ↓\n  │    parseEnvironmentDict\n  │     ↓\n  │    smacro\n  │     ↓\n  │    standardEnvironmentBody\n  └─────┘\n\nThese errors are very tricky, so read https://elm-lang.org/0.19.1/bad-recursion to learn how to fix it!';}
var $elm$parser$Parser$Advanced$bagToList = F2(
	function (bag, list) {
		bagToList:
		while (true) {
			switch (bag.$) {
				case 'Empty':
					return list;
				case 'AddRight':
					var bag1 = bag.a;
					var x = bag.b;
					var $temp$bag = bag1,
						$temp$list = A2($elm$core$List$cons, x, list);
					bag = $temp$bag;
					list = $temp$list;
					continue bagToList;
				default:
					var bag1 = bag.a;
					var bag2 = bag.b;
					var $temp$bag = bag1,
						$temp$list = A2($elm$parser$Parser$Advanced$bagToList, bag2, list);
					bag = $temp$bag;
					list = $temp$list;
					continue bagToList;
			}
		}
	});
var $elm$parser$Parser$Advanced$run = F2(
	function (_v0, src) {
		var parse = _v0.a;
		var _v1 = parse(
			{col: 1, context: _List_Nil, indent: 1, offset: 0, row: 1, src: src});
		if (_v1.$ === 'Good') {
			var value = _v1.b;
			return $elm$core$Result$Ok(value);
		} else {
			var bag = _v1.b;
			return $elm$core$Result$Err(
				A2($elm$parser$Parser$Advanced$bagToList, bag, _List_Nil));
		}
	});
var $jxxcarlson$meenylatex$Internal$Parser$parse = function (text) {
	var expr = A2($elm$parser$Parser$Advanced$run, $jxxcarlson$meenylatex$Internal$Parser$latexList, text);
	if (expr.$ === 'Ok') {
		if (expr.a.$ === 'LatexList') {
			var list = expr.a.a;
			return list;
		} else {
			return _List_fromArray(
				[
					$jxxcarlson$meenylatex$Internal$Parser$LXString('Dude! not great code here.')
				]);
		}
	} else {
		var error = expr.a;
		return _List_fromArray(
			[
				$jxxcarlson$meenylatex$Internal$Parser$LXError(error)
			]);
	}
};
var $elm$core$String$toUpper = _String_toUpper;
var $jxxcarlson$meenylatex$Internal$Utility$capitalize = function (str) {
	return _Utils_ap(
		$elm$core$String$toUpper(
			A2($elm$core$String$left, 1, str)),
		A2($elm$core$String$dropLeft, 1, str));
};
var $elm$json$Json$Encode$string = _Json_wrap;
var $elm$html$Html$Attributes$stringProperty = F2(
	function (key, string) {
		return A2(
			_VirtualDom_property,
			key,
			$elm$json$Json$Encode$string(string));
	});
var $elm$html$Html$Attributes$class = $elm$html$Html$Attributes$stringProperty('className');
var $elm$html$Html$code = _VirtualDom_node('code');
var $elm$core$Basics$composeR = F3(
	function (f, g, x) {
		return g(
			f(x));
	});
var $jxxcarlson$meenylatex$Internal$MathMacro$enclose = function (arg_) {
	return '{' + (arg_ + '}');
};
var $jxxcarlson$meenylatex$Internal$MathMacro$evalNewCommand = F3(
	function (name, nargs, args) {
		return '\\newcommand{\\' + (name + ('}[' + (nargs + (']' + A2(
			$elm$core$String$join,
			'',
			A2(
				$elm$core$List$map,
				A2($elm$core$Basics$composeR, $jxxcarlson$meenylatex$Internal$MathMacro$toText_, $jxxcarlson$meenylatex$Internal$MathMacro$enclose),
				args))))));
	});
var $jxxcarlson$meenylatex$Internal$MathMacro$toText_ = function (expr) {
	switch (expr.$) {
		case 'MathText':
			var str = expr.a;
			return str;
		case 'Macro':
			var name = expr.a;
			var args = expr.b;
			return '\\' + (name + A2(
				$elm$core$String$join,
				'',
				A2(
					$elm$core$List$map,
					A2($elm$core$Basics$composeR, $jxxcarlson$meenylatex$Internal$MathMacro$toText_, $jxxcarlson$meenylatex$Internal$MathMacro$enclose),
					args)));
		case 'MathList':
			var list = expr.a;
			return A2(
				$elm$core$String$join,
				' ',
				A2($elm$core$List$map, $jxxcarlson$meenylatex$Internal$MathMacro$toText_, list));
		default:
			var name = expr.a;
			var nargs = expr.b;
			var args = expr.c;
			return A3($jxxcarlson$meenylatex$Internal$MathMacro$evalNewCommand, name, nargs, args);
	}
};
var $jxxcarlson$meenylatex$Internal$MathMacro$evalMacro = F3(
	function (macroDict_, name, args) {
		var _v0 = A2($elm$core$Dict$get, name, macroDict_);
		if (_v0.$ === 'Nothing') {
			return '\\' + (name + A2(
				$elm$core$String$join,
				'',
				A2(
					$elm$core$List$map,
					A2($elm$core$Basics$composeR, $jxxcarlson$meenylatex$Internal$MathMacro$toText_, $jxxcarlson$meenylatex$Internal$MathMacro$enclose),
					args)));
		} else {
			var definition = _v0.a;
			return definition(
				A2($elm$core$List$map, $jxxcarlson$meenylatex$Internal$MathMacro$toText_, args));
		}
	});
var $jxxcarlson$meenylatex$Internal$MathMacro$evalMathExpr = F2(
	function (macroDict_, expr) {
		switch (expr.$) {
			case 'MathText':
				var str = expr.a;
				return str;
			case 'Macro':
				var name = expr.a;
				var args = expr.b;
				return A3($jxxcarlson$meenylatex$Internal$MathMacro$evalMacro, macroDict_, name, args);
			case 'NewCommand':
				var name = expr.a;
				var nargs = expr.b;
				var args = expr.c;
				return A3($jxxcarlson$meenylatex$Internal$MathMacro$evalNewCommand, name, nargs, args);
			default:
				var list = expr.a;
				return A2(
					$elm$core$String$join,
					' ',
					A2($elm$core$List$map, $jxxcarlson$meenylatex$Internal$MathMacro$toText_, list));
		}
	});
var $jxxcarlson$meenylatex$Internal$MathMacro$evalList = F2(
	function (macroDict_, list) {
		return A2(
			$elm$core$String$join,
			' ',
			A2(
				$elm$core$List$map,
				$jxxcarlson$meenylatex$Internal$MathMacro$evalMathExpr(macroDict_),
				list));
	});
var $jxxcarlson$meenylatex$Internal$MathMacro$spaces = $elm$parser$Parser$Advanced$chompWhile(
	function (c) {
		return _Utils_eq(
			c,
			_Utils_chr(' '));
	});
var $jxxcarlson$meenylatex$Internal$MathMacro$manyHelp = F2(
	function (p, vs) {
		return $elm$parser$Parser$Advanced$oneOf(
			_List_fromArray(
				[
					A2(
					$elm$parser$Parser$Advanced$keeper,
					$elm$parser$Parser$Advanced$succeed(
						function (v) {
							return $elm$parser$Parser$Advanced$Loop(
								A2($elm$core$List$cons, v, vs));
						}),
					A2($elm$parser$Parser$Advanced$ignorer, p, $jxxcarlson$meenylatex$Internal$MathMacro$spaces)),
					A2(
					$elm$parser$Parser$Advanced$map,
					function (_v0) {
						return $elm$parser$Parser$Advanced$Done(
							$elm$core$List$reverse(vs));
					},
					$elm$parser$Parser$Advanced$succeed(_Utils_Tuple0))
				]));
	});
var $jxxcarlson$meenylatex$Internal$MathMacro$many = function (p) {
	return A2(
		$elm$parser$Parser$Advanced$loop,
		_List_Nil,
		$jxxcarlson$meenylatex$Internal$MathMacro$manyHelp(p));
};
var $elm$parser$Parser$Advanced$backtrackable = function (_v0) {
	var parse = _v0.a;
	return $elm$parser$Parser$Advanced$Parser(
		function (s0) {
			var _v1 = parse(s0);
			if (_v1.$ === 'Bad') {
				var x = _v1.b;
				return A2($elm$parser$Parser$Advanced$Bad, false, x);
			} else {
				var a = _v1.b;
				var s1 = _v1.c;
				return A3($elm$parser$Parser$Advanced$Good, false, a, s1);
			}
		});
};
var $jxxcarlson$meenylatex$Internal$MathMacro$CArg = function (a) {
	return {$: 'CArg', a: a};
};
var $jxxcarlson$meenylatex$Internal$MathMacro$ExpectingLeftBrace = {$: 'ExpectingLeftBrace'};
var $jxxcarlson$meenylatex$Internal$MathMacro$ExpectingRightBrace = {$: 'ExpectingRightBrace'};
var $jxxcarlson$meenylatex$Internal$MathMacro$Macro = F2(
	function (a, b) {
		return {$: 'Macro', a: a, b: b};
	});
var $jxxcarlson$meenylatex$Internal$MathMacro$MathList = function (a) {
	return {$: 'MathList', a: a};
};
var $jxxcarlson$meenylatex$Internal$MathMacro$itemListHelper = F2(
	function (itemParser, revItems) {
		return $elm$parser$Parser$Advanced$oneOf(
			_List_fromArray(
				[
					A2(
					$elm$parser$Parser$Advanced$keeper,
					$elm$parser$Parser$Advanced$succeed(
						function (item_) {
							return $elm$parser$Parser$Advanced$Loop(
								A2($elm$core$List$cons, item_, revItems));
						}),
					itemParser),
					A2(
					$elm$parser$Parser$Advanced$map,
					function (_v0) {
						return $elm$parser$Parser$Advanced$Done(
							$elm$core$List$reverse(revItems));
					},
					$elm$parser$Parser$Advanced$succeed(_Utils_Tuple0))
				]));
	});
var $jxxcarlson$meenylatex$Internal$MathMacro$itemList_ = F2(
	function (initialList, itemParser) {
		return A2(
			$elm$parser$Parser$Advanced$loop,
			initialList,
			$jxxcarlson$meenylatex$Internal$MathMacro$itemListHelper(itemParser));
	});
var $jxxcarlson$meenylatex$Internal$MathMacro$itemList = function (itemParser) {
	return A2($jxxcarlson$meenylatex$Internal$MathMacro$itemList_, _List_Nil, itemParser);
};
var $jxxcarlson$meenylatex$Internal$MathMacro$ExpectingValidMacroArgWord = {$: 'ExpectingValidMacroArgWord'};
var $jxxcarlson$meenylatex$Internal$MathMacro$MathText = function (a) {
	return {$: 'MathText', a: a};
};
var $jxxcarlson$meenylatex$Internal$MathMacro$inMacroArg = function (c) {
	return !(_Utils_eq(
		c,
		_Utils_chr('\\')) || (_Utils_eq(
		c,
		_Utils_chr('$')) || (_Utils_eq(
		c,
		_Utils_chr('}')) || (_Utils_eq(
		c,
		_Utils_chr(' ')) || _Utils_eq(
		c,
		_Utils_chr('\n'))))));
};
var $jxxcarlson$meenylatex$Internal$MathMacro$nonEmptyItemList = function (itemParser) {
	return A2(
		$elm$parser$Parser$Advanced$andThen,
		function (x) {
			return A2(
				$jxxcarlson$meenylatex$Internal$MathMacro$itemList_,
				_List_fromArray(
					[x]),
				itemParser);
		},
		itemParser);
};
var $jxxcarlson$meenylatex$Internal$MathMacro$ws = $elm$parser$Parser$Advanced$chompWhile(
	function (c) {
		return _Utils_eq(
			c,
			_Utils_chr(' ')) || _Utils_eq(
			c,
			_Utils_chr('\n'));
	});
var $jxxcarlson$meenylatex$Internal$MathMacro$word = F2(
	function (problem, inWord) {
		return A2(
			$elm$parser$Parser$Advanced$keeper,
			A2(
				$elm$parser$Parser$Advanced$keeper,
				A2(
					$elm$parser$Parser$Advanced$keeper,
					A2(
						$elm$parser$Parser$Advanced$ignorer,
						$elm$parser$Parser$Advanced$succeed($elm$core$String$slice),
						$jxxcarlson$meenylatex$Internal$MathMacro$ws),
					A2(
						$elm$parser$Parser$Advanced$ignorer,
						A2(
							$elm$parser$Parser$Advanced$ignorer,
							A2(
								$elm$parser$Parser$Advanced$ignorer,
								$elm$parser$Parser$Advanced$getOffset,
								A2($elm$parser$Parser$Advanced$chompIf, inWord, problem)),
							$elm$parser$Parser$Advanced$chompWhile(inWord)),
						$jxxcarlson$meenylatex$Internal$MathMacro$ws)),
				$elm$parser$Parser$Advanced$getOffset),
			$elm$parser$Parser$Advanced$getSource);
	});
var $jxxcarlson$meenylatex$Internal$MathMacro$macroArgWords = A2(
	$elm$parser$Parser$Advanced$map,
	$jxxcarlson$meenylatex$Internal$MathMacro$MathText,
	A2(
		$elm$parser$Parser$Advanced$map,
		$elm$core$String$join(' '),
		$jxxcarlson$meenylatex$Internal$MathMacro$nonEmptyItemList(
			A2($jxxcarlson$meenylatex$Internal$MathMacro$word, $jxxcarlson$meenylatex$Internal$MathMacro$ExpectingValidMacroArgWord, $jxxcarlson$meenylatex$Internal$MathMacro$inMacroArg))));
var $jxxcarlson$meenylatex$Internal$MathMacro$ExpectingMacroReservedWord = {$: 'ExpectingMacroReservedWord'};
var $jxxcarlson$meenylatex$Internal$MathMacro$macroName = A2(
	$elm$parser$Parser$Advanced$map,
	$elm$core$String$dropLeft(1),
	$elm$parser$Parser$Advanced$variable(
		{
			expecting: $jxxcarlson$meenylatex$Internal$MathMacro$ExpectingMacroReservedWord,
			inner: function (c) {
				return $elm$core$Char$isAlphaNum(c) || _Utils_eq(
					c,
					_Utils_chr('*'));
			},
			reserved: $elm$core$Set$fromList(
				_List_fromArray(
					['\\begin', '\\end', '\\item', '\\bibitem'])),
			start: function (c) {
				return _Utils_eq(
					c,
					_Utils_chr('\\'));
			}
		}));
function $jxxcarlson$meenylatex$Internal$MathMacro$cyclic$macro() {
	return A2(
		$elm$parser$Parser$Advanced$keeper,
		A2(
			$elm$parser$Parser$Advanced$keeper,
			$elm$parser$Parser$Advanced$succeed($jxxcarlson$meenylatex$Internal$MathMacro$Macro),
			$jxxcarlson$meenylatex$Internal$MathMacro$macroName),
		$jxxcarlson$meenylatex$Internal$MathMacro$itemList(
			$jxxcarlson$meenylatex$Internal$MathMacro$cyclic$arg()));
}
function $jxxcarlson$meenylatex$Internal$MathMacro$cyclic$arg() {
	return A2(
		$elm$parser$Parser$Advanced$inContext,
		$jxxcarlson$meenylatex$Internal$MathMacro$CArg('arg'),
		A2(
			$elm$parser$Parser$Advanced$map,
			$jxxcarlson$meenylatex$Internal$MathMacro$MathList,
			A2(
				$elm$parser$Parser$Advanced$keeper,
				A2(
					$elm$parser$Parser$Advanced$ignorer,
					$elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity),
					$elm$parser$Parser$Advanced$symbol(
						A2($elm$parser$Parser$Advanced$Token, '{', $jxxcarlson$meenylatex$Internal$MathMacro$ExpectingLeftBrace))),
				A2(
					$elm$parser$Parser$Advanced$ignorer,
					$jxxcarlson$meenylatex$Internal$MathMacro$itemList(
						$elm$parser$Parser$Advanced$oneOf(
							_List_fromArray(
								[
									$jxxcarlson$meenylatex$Internal$MathMacro$macroArgWords,
									$elm$parser$Parser$Advanced$lazy(
									function (_v0) {
										return $jxxcarlson$meenylatex$Internal$MathMacro$cyclic$macro();
									})
								]))),
					$elm$parser$Parser$Advanced$symbol(
						A2($elm$parser$Parser$Advanced$Token, '}', $jxxcarlson$meenylatex$Internal$MathMacro$ExpectingRightBrace))))));
}
try {
	var $jxxcarlson$meenylatex$Internal$MathMacro$macro = $jxxcarlson$meenylatex$Internal$MathMacro$cyclic$macro();
	$jxxcarlson$meenylatex$Internal$MathMacro$cyclic$macro = function () {
		return $jxxcarlson$meenylatex$Internal$MathMacro$macro;
	};
	var $jxxcarlson$meenylatex$Internal$MathMacro$arg = $jxxcarlson$meenylatex$Internal$MathMacro$cyclic$arg();
	$jxxcarlson$meenylatex$Internal$MathMacro$cyclic$arg = function () {
		return $jxxcarlson$meenylatex$Internal$MathMacro$arg;
	};
} catch ($) {
	throw 'Some top-level definitions from `Internal.MathMacro` are causing infinite recursion:\n\n  ┌─────┐\n  │    macro\n  │     ↓\n  │    arg\n  └─────┘\n\nThese errors are very tricky, so read https://elm-lang.org/0.19.1/bad-recursion to learn how to fix it!';}
var $jxxcarlson$meenylatex$Internal$MathMacro$ExpectingStuff = {$: 'ExpectingStuff'};
var $jxxcarlson$meenylatex$Internal$MathMacro$inStuff = function (c) {
	return !_Utils_eq(
		c,
		_Utils_chr('\\'));
};
var $jxxcarlson$meenylatex$Internal$MathMacro$stuff = F2(
	function (problem, inWord) {
		return A2(
			$elm$parser$Parser$Advanced$keeper,
			A2(
				$elm$parser$Parser$Advanced$keeper,
				A2(
					$elm$parser$Parser$Advanced$keeper,
					A2(
						$elm$parser$Parser$Advanced$ignorer,
						$elm$parser$Parser$Advanced$succeed($elm$core$String$slice),
						$jxxcarlson$meenylatex$Internal$MathMacro$ws),
					A2(
						$elm$parser$Parser$Advanced$ignorer,
						A2(
							$elm$parser$Parser$Advanced$ignorer,
							A2(
								$elm$parser$Parser$Advanced$ignorer,
								$elm$parser$Parser$Advanced$getOffset,
								A2($elm$parser$Parser$Advanced$chompIf, $jxxcarlson$meenylatex$Internal$MathMacro$inStuff, problem)),
							$elm$parser$Parser$Advanced$chompWhile($jxxcarlson$meenylatex$Internal$MathMacro$inStuff)),
						$jxxcarlson$meenylatex$Internal$MathMacro$ws)),
				$elm$parser$Parser$Advanced$getOffset),
			$elm$parser$Parser$Advanced$getSource);
	});
var $jxxcarlson$meenylatex$Internal$MathMacro$mathStuff = A2(
	$elm$parser$Parser$Advanced$map,
	$jxxcarlson$meenylatex$Internal$MathMacro$MathText,
	A2($jxxcarlson$meenylatex$Internal$MathMacro$stuff, $jxxcarlson$meenylatex$Internal$MathMacro$ExpectingStuff, $jxxcarlson$meenylatex$Internal$MathMacro$inStuff));
var $jxxcarlson$meenylatex$Internal$MathMacro$ExpectingLeftBracket = {$: 'ExpectingLeftBracket'};
var $jxxcarlson$meenylatex$Internal$MathMacro$ExpectingNewCommand = {$: 'ExpectingNewCommand'};
var $jxxcarlson$meenylatex$Internal$MathMacro$ExpectingRightBracket = {$: 'ExpectingRightBracket'};
var $jxxcarlson$meenylatex$Internal$MathMacro$NewCommand = F3(
	function (a, b, c) {
		return {$: 'NewCommand', a: a, b: b, c: c};
	});
var $jxxcarlson$meenylatex$Internal$MathMacro$ExpectingBackslash = {$: 'ExpectingBackslash'};
var $jxxcarlson$meenylatex$Internal$MathMacro$newMacroName = A2(
	$elm$parser$Parser$Advanced$inContext,
	$jxxcarlson$meenylatex$Internal$MathMacro$CArg('arg'),
	A2(
		$elm$parser$Parser$Advanced$keeper,
		A2(
			$elm$parser$Parser$Advanced$ignorer,
			A2(
				$elm$parser$Parser$Advanced$ignorer,
				$elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity),
				$elm$parser$Parser$Advanced$symbol(
					A2($elm$parser$Parser$Advanced$Token, '{', $jxxcarlson$meenylatex$Internal$MathMacro$ExpectingLeftBrace))),
			$elm$parser$Parser$Advanced$symbol(
				A2($elm$parser$Parser$Advanced$Token, '\\', $jxxcarlson$meenylatex$Internal$MathMacro$ExpectingBackslash))),
		A2(
			$elm$parser$Parser$Advanced$ignorer,
			A2(
				$jxxcarlson$meenylatex$Internal$MathMacro$word,
				$jxxcarlson$meenylatex$Internal$MathMacro$ExpectingRightBrace,
				function (c) {
					return !_Utils_eq(
						c,
						_Utils_chr('}'));
				}),
			$elm$parser$Parser$Advanced$symbol(
				A2($elm$parser$Parser$Advanced$Token, '}', $jxxcarlson$meenylatex$Internal$MathMacro$ExpectingRightBrace)))));
var $jxxcarlson$meenylatex$Internal$MathMacro$newCommand = A2(
	$elm$parser$Parser$Advanced$keeper,
	A2(
		$elm$parser$Parser$Advanced$keeper,
		A2(
			$elm$parser$Parser$Advanced$keeper,
			A2(
				$elm$parser$Parser$Advanced$ignorer,
				$elm$parser$Parser$Advanced$succeed($jxxcarlson$meenylatex$Internal$MathMacro$NewCommand),
				$elm$parser$Parser$Advanced$symbol(
					A2($elm$parser$Parser$Advanced$Token, '\\newcommand', $jxxcarlson$meenylatex$Internal$MathMacro$ExpectingNewCommand))),
			A2(
				$elm$parser$Parser$Advanced$ignorer,
				$jxxcarlson$meenylatex$Internal$MathMacro$newMacroName,
				$elm$parser$Parser$Advanced$symbol(
					A2($elm$parser$Parser$Advanced$Token, '[', $jxxcarlson$meenylatex$Internal$MathMacro$ExpectingLeftBracket)))),
		A2(
			$elm$parser$Parser$Advanced$ignorer,
			A2(
				$jxxcarlson$meenylatex$Internal$MathMacro$word,
				$jxxcarlson$meenylatex$Internal$MathMacro$ExpectingRightBracket,
				function (c) {
					return !_Utils_eq(
						c,
						_Utils_chr(']'));
				}),
			$elm$parser$Parser$Advanced$symbol(
				A2($elm$parser$Parser$Advanced$Token, ']', $jxxcarlson$meenylatex$Internal$MathMacro$ExpectingRightBracket)))),
	A2(
		$elm$parser$Parser$Advanced$ignorer,
		$jxxcarlson$meenylatex$Internal$MathMacro$itemList($jxxcarlson$meenylatex$Internal$MathMacro$arg),
		$jxxcarlson$meenylatex$Internal$MathMacro$ws));
var $jxxcarlson$meenylatex$Internal$MathMacro$mathExpression = $elm$parser$Parser$Advanced$oneOf(
	_List_fromArray(
		[
			$elm$parser$Parser$Advanced$backtrackable($jxxcarlson$meenylatex$Internal$MathMacro$newCommand),
			$jxxcarlson$meenylatex$Internal$MathMacro$macro,
			$jxxcarlson$meenylatex$Internal$MathMacro$mathStuff
		]));
var $jxxcarlson$meenylatex$Internal$MathMacro$parse = function (str) {
	return A2(
		$elm$parser$Parser$Advanced$run,
		$jxxcarlson$meenylatex$Internal$MathMacro$many($jxxcarlson$meenylatex$Internal$MathMacro$mathExpression),
		str);
};
var $jxxcarlson$meenylatex$Internal$MathMacro$evalStr = F2(
	function (macroDict_, str) {
		var _v0 = $jxxcarlson$meenylatex$Internal$MathMacro$parse(
			$elm$core$String$trim(str));
		if (_v0.$ === 'Ok') {
			var result = _v0.a;
			return A2($jxxcarlson$meenylatex$Internal$MathMacro$evalList, macroDict_, result);
		} else {
			return 'error';
		}
	});
var $elm$virtual_dom$VirtualDom$node = function (tag) {
	return _VirtualDom_node(
		_VirtualDom_noScript(tag));
};
var $elm$html$Html$node = $elm$virtual_dom$VirtualDom$node;
var $elm$virtual_dom$VirtualDom$property = F2(
	function (key, value) {
		return A2(
			_VirtualDom_property,
			_VirtualDom_noInnerHtmlOrFormAction(key),
			_VirtualDom_noJavaScriptOrHtmlUri(value));
	});
var $elm$html$Html$Attributes$property = $elm$virtual_dom$VirtualDom$property;
var $jxxcarlson$meenylatex$Internal$Render2$mathText = function (content) {
	return A3(
		$elm$html$Html$node,
		'math-text',
		_List_fromArray(
			[
				A2(
				$elm$html$Html$Attributes$property,
				'content',
				$elm$json$Json$Encode$string(content))
			]),
		_List_Nil);
};
var $jxxcarlson$meenylatex$Internal$Render2$mathTextDelayed = function (content) {
	return A3(
		$elm$html$Html$node,
		'math-text-delayed',
		_List_fromArray(
			[
				A2(
				$elm$html$Html$Attributes$property,
				'content',
				$elm$json$Json$Encode$string(content))
			]),
		_List_Nil);
};
var $jxxcarlson$meenylatex$Internal$Render2$displayMathText = F3(
	function (latexState, mathJaxRenderOption, str) {
		var str2 = A2(
			$jxxcarlson$meenylatex$Internal$MathMacro$evalStr,
			latexState.mathMacroDictionary,
			$elm$core$String$trim(str));
		if (mathJaxRenderOption.$ === 'Delay') {
			return $jxxcarlson$meenylatex$Internal$Render2$mathTextDelayed('$$\n' + (str2 + '\n$$'));
		} else {
			return $jxxcarlson$meenylatex$Internal$Render2$mathText('$$\n' + (str2 + '\n$$'));
		}
	});
var $elm$html$Html$div = _VirtualDom_node('div');
var $elm$html$Html$span = _VirtualDom_node('span');
var $elm$virtual_dom$VirtualDom$text = _VirtualDom_text;
var $elm$html$Html$text = $elm$virtual_dom$VirtualDom$text;
var $jxxcarlson$meenylatex$Internal$Render2$enclose = function (msg) {
	return A2(
		$elm$html$Html$span,
		_List_Nil,
		_List_fromArray(
			[
				$elm$html$Html$text('{'),
				msg,
				$elm$html$Html$text('}')
			]));
};
var $jxxcarlson$meenylatex$Internal$Macro$nArgs = function (latexExpression) {
	if (latexExpression.$ === 'Macro') {
		var name = latexExpression.a;
		var optArgs = latexExpression.b;
		var args = latexExpression.c;
		return $elm$core$List$length(args);
	} else {
		return 0;
	}
};
var $elm$core$String$cons = _String_cons;
var $elm$core$String$fromChar = function (_char) {
	return A2($elm$core$String$cons, _char, '');
};
var $elm$core$Bitwise$and = _Bitwise_and;
var $elm$core$Bitwise$shiftRightBy = _Bitwise_shiftRightBy;
var $elm$core$String$repeatHelp = F3(
	function (n, chunk, result) {
		return (n <= 0) ? result : A3(
			$elm$core$String$repeatHelp,
			n >> 1,
			_Utils_ap(chunk, chunk),
			(!(n & 1)) ? result : _Utils_ap(result, chunk));
	});
var $elm$core$String$repeat = F2(
	function (n, chunk) {
		return A3($elm$core$String$repeatHelp, n, chunk, '');
	});
var $elm$core$String$padLeft = F3(
	function (n, _char, string) {
		return _Utils_ap(
			A2(
				$elm$core$String$repeat,
				n - $elm$core$String$length(string),
				$elm$core$String$fromChar(_char)),
			string);
	});
var $jxxcarlson$meenylatex$Internal$Utility$numberedLine = F2(
	function (k, line) {
		return A3(
			$elm$core$String$padLeft,
			2,
			_Utils_chr(' '),
			$elm$core$String$fromInt(k)) + (' ' + line);
	});
var $jxxcarlson$meenylatex$Internal$Utility$addNumberedLine = F2(
	function (line, data) {
		var _v0 = data;
		var k = _v0.a;
		var lines = _v0.b;
		return _Utils_Tuple2(
			k + 1,
			_Utils_ap(
				_List_fromArray(
					[
						A2($jxxcarlson$meenylatex$Internal$Utility$numberedLine, k + 1, line)
					]),
				lines));
	});
var $elm$core$Tuple$second = function (_v0) {
	var y = _v0.b;
	return y;
};
var $jxxcarlson$meenylatex$Internal$Utility$addLineNumbers = function (text) {
	return A2(
		$elm$core$String$join,
		'\n',
		$elm$core$List$reverse(
			A3(
				$elm$core$List$foldl,
				$jxxcarlson$meenylatex$Internal$Utility$addNumberedLine,
				_Utils_Tuple2(0, _List_Nil),
				A2(
					$elm$core$String$split,
					'\n',
					$elm$core$String$trim(text))).b));
};
var $jxxcarlson$meenylatex$Internal$Html$div = F2(
	function (attributes, children) {
		var childrenString = A2($elm$core$String$join, '\n', children);
		var attributeString = A2($elm$core$String$join, ' ', attributes);
		return '<div ' + (attributeString + (' >\n' + (childrenString + '\n</div>')));
	});
var $jxxcarlson$meenylatex$Internal$LatexState$getCounter = F2(
	function (name, latexState) {
		var _v0 = A2($elm$core$Dict$get, name, latexState.counters);
		if (_v0.$ === 'Just') {
			var k = _v0.a;
			return k;
		} else {
			return 0;
		}
	});
var $elm$core$List$drop = F2(
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
var $jxxcarlson$meenylatex$Internal$Utility$getAt = F2(
	function (idx, xs) {
		return (idx < 0) ? $elm$core$Maybe$Nothing : $elm$core$List$head(
			A2($elm$core$List$drop, idx, xs));
	});
var $jxxcarlson$meenylatex$Internal$Render$getElement = F2(
	function (k, list) {
		return A2(
			$elm$core$Maybe$withDefault,
			$jxxcarlson$meenylatex$Internal$Parser$LXString('xxx'),
			A2($jxxcarlson$meenylatex$Internal$Utility$getAt, k, list));
	});
var $jxxcarlson$meenylatex$Internal$Render$itemClass = function (level) {
	return 'item' + $elm$core$String$fromInt(level);
};
var $jxxcarlson$meenylatex$Internal$JoinStrings$NoSpace = {$: 'NoSpace'};
var $jxxcarlson$meenylatex$Internal$JoinStrings$Space = {$: 'Space'};
var $jxxcarlson$meenylatex$Internal$JoinStrings$firstChar = $elm$core$String$left(1);
var $elm$core$String$right = F2(
	function (n, string) {
		return (n < 1) ? '' : A3(
			$elm$core$String$slice,
			-n,
			$elm$core$String$length(string),
			string);
	});
var $jxxcarlson$meenylatex$Internal$JoinStrings$lastChar = $elm$core$String$right(1);
var $jxxcarlson$meenylatex$Internal$JoinStrings$joinType = F2(
	function (l, r) {
		var lastCharLeft = $jxxcarlson$meenylatex$Internal$JoinStrings$lastChar(l);
		var firstCharRight = $jxxcarlson$meenylatex$Internal$JoinStrings$firstChar(r);
		return (l === '') ? $jxxcarlson$meenylatex$Internal$JoinStrings$NoSpace : (A2(
			$elm$core$List$member,
			lastCharLeft,
			_List_fromArray(
				['('])) ? $jxxcarlson$meenylatex$Internal$JoinStrings$NoSpace : (A2(
			$elm$core$List$member,
			firstCharRight,
			_List_fromArray(
				[')', '.', ',', '?', '!', ';', ':'])) ? $jxxcarlson$meenylatex$Internal$JoinStrings$NoSpace : $jxxcarlson$meenylatex$Internal$JoinStrings$Space));
	});
var $jxxcarlson$meenylatex$Internal$JoinStrings$joinDatum2String = F2(
	function (current, datum) {
		var _v0 = datum;
		var acc = _v0.a;
		var previous = _v0.b;
		var _v1 = A2($jxxcarlson$meenylatex$Internal$JoinStrings$joinType, previous, current);
		if (_v1.$ === 'NoSpace') {
			return _Utils_Tuple2(
				_Utils_ap(acc, current),
				current);
		} else {
			return _Utils_Tuple2(acc + (' ' + current), current);
		}
	});
var $jxxcarlson$meenylatex$Internal$JoinStrings$joinList = function (stringList) {
	var start = A2(
		$elm$core$Maybe$withDefault,
		'',
		$elm$core$List$head(stringList));
	return A3(
		$elm$core$List$foldl,
		$jxxcarlson$meenylatex$Internal$JoinStrings$joinDatum2String,
		_Utils_Tuple2('', ''),
		stringList).a;
};
var $elm$core$String$replace = F3(
	function (before, after, string) {
		return A2(
			$elm$core$String$join,
			after,
			A2($elm$core$String$split, before, string));
	});
var $jxxcarlson$meenylatex$Internal$Render$postProcess = function (str) {
	return A3(
		$elm$core$String$replace,
		'\\&',
		'&#38',
		A3(
			$elm$core$String$replace,
			'--',
			'&ndash;',
			A3($elm$core$String$replace, '---', '&mdash;', str)));
};
var $jxxcarlson$meenylatex$Internal$Render$renderComment = function (str) {
	return '';
};
var $jxxcarlson$meenylatex$Internal$Render$renderCommentEnvironment = F2(
	function (latexState, body) {
		return '';
	});
var $jxxcarlson$meenylatex$Internal$ErrorMessages2$renderError = function (errorDatum) {
	return 'error';
};
var $jxxcarlson$meenylatex$Internal$Render$renderCell = function (cell) {
	switch (cell.$) {
		case 'LXString':
			var s = cell.a;
			return '<td>' + (s + '</td>');
		case 'InlineMath':
			var s = cell.a;
			return '<td>$' + (s + '$</td>');
		default:
			return '<td>-</td>';
	}
};
var $jxxcarlson$meenylatex$Internal$Render$renderRow = function (row) {
	if (row.$ === 'LatexList') {
		var row_ = row.a;
		return function (row__) {
			return '<tr> ' + (row__ + ' </tr>\n');
		}(
			A3(
				$elm$core$List$foldl,
				F2(
					function (cell, acc) {
						return acc + (' ' + $jxxcarlson$meenylatex$Internal$Render$renderCell(cell));
					}),
				'',
				row_));
	} else {
		return '<tr>-</tr>';
	}
};
var $jxxcarlson$meenylatex$Internal$Render$renderTableBody = function (body) {
	if (body.$ === 'LatexList') {
		var body_ = body.a;
		return function (bod) {
			return '<table>\n' + (bod + '</table>\n');
		}(
			A3(
				$elm$core$List$foldl,
				F2(
					function (row, acc) {
						return acc + (' ' + $jxxcarlson$meenylatex$Internal$Render$renderRow(row));
					}),
				'',
				body_));
	} else {
		return '<table>-</table>';
	}
};
var $jxxcarlson$meenylatex$Internal$Render$renderTabular = F2(
	function (latexState, body) {
		return $jxxcarlson$meenylatex$Internal$Render$renderTableBody(body);
	});
var $jxxcarlson$meenylatex$Internal$Render$environmentRenderer = function (name) {
	var _v3 = A2(
		$elm$core$Dict$get,
		name,
		$jxxcarlson$meenylatex$Internal$Render$cyclic$renderEnvironmentDict());
	if (_v3.$ === 'Just') {
		var f = _v3.a;
		return f;
	} else {
		return $jxxcarlson$meenylatex$Internal$Render$renderDefaultEnvironment(name);
	}
};
var $jxxcarlson$meenylatex$Internal$Render$macroRenderer = F4(
	function (name, latexState, optArgs, args) {
		var _v2 = A2(
			$elm$core$Dict$get,
			name,
			$jxxcarlson$meenylatex$Internal$Render$cyclic$renderMacroDict());
		if (_v2.$ === 'Just') {
			var f = _v2.a;
			return A3(f, latexState, optArgs, args);
		} else {
			return A4($jxxcarlson$meenylatex$Internal$Render$reproduceMacro, name, latexState, optArgs, args);
		}
	});
var $jxxcarlson$meenylatex$Internal$Render$render = F2(
	function (latexState, latexExpression) {
		switch (latexExpression.$) {
			case 'Comment':
				var str = latexExpression.a;
				return $jxxcarlson$meenylatex$Internal$Render$renderComment(str);
			case 'Macro':
				var name = latexExpression.a;
				var optArgs = latexExpression.b;
				var args = latexExpression.c;
				return A4($jxxcarlson$meenylatex$Internal$Render$renderMacro, latexState, name, optArgs, args);
			case 'SMacro':
				var name = latexExpression.a;
				var optArgs = latexExpression.b;
				var args = latexExpression.c;
				var le = latexExpression.d;
				return A5($jxxcarlson$meenylatex$Internal$Render$renderSMacro, latexState, name, optArgs, args, le);
			case 'Item':
				var level = latexExpression.a;
				var latexExpr = latexExpression.b;
				return A3($jxxcarlson$meenylatex$Internal$Render$renderItem, latexState, level, latexExpr);
			case 'InlineMath':
				var str = latexExpression.a;
				return '$' + (str + '$');
			case 'DisplayMath':
				var str = latexExpression.a;
				return '$$' + (str + '$$');
			case 'Environment':
				var name = latexExpression.a;
				var args = latexExpression.b;
				var body = latexExpression.c;
				return A4($jxxcarlson$meenylatex$Internal$Render$renderEnvironment, latexState, name, args, body);
			case 'LatexList':
				var args = latexExpression.a;
				return A2($jxxcarlson$meenylatex$Internal$Render$renderLatexList, latexState, args);
			case 'LXString':
				var str = latexExpression.a;
				return str;
			case 'NewCommand':
				var commandName = latexExpression.a;
				var numberOfArgs = latexExpression.b;
				var commandBody = latexExpression.c;
				return 'newCommand: ' + commandName;
			default:
				var error = latexExpression.a;
				return A2(
					$elm$core$String$join,
					'; ',
					A2($elm$core$List$map, $jxxcarlson$meenylatex$Internal$ErrorMessages2$renderError, error));
		}
	});
var $jxxcarlson$meenylatex$Internal$Render$renderAlignEnvironment = F2(
	function (latexState, body) {
		var s1 = A2($jxxcarlson$meenylatex$Internal$LatexState$getCounter, 's1', latexState);
		var r = A3(
			$elm$core$String$replace,
			'\\ \\',
			'\\\\',
			A2($jxxcarlson$meenylatex$Internal$Render$render, latexState, body));
		var eqno = A2($jxxcarlson$meenylatex$Internal$LatexState$getCounter, 'eqno', latexState);
		var addendum = (eqno > 0) ? ((s1 > 0) ? ('\\tag{' + ($elm$core$String$fromInt(s1) + ('.' + ($elm$core$String$fromInt(eqno) + '}')))) : ('\\tag{' + ($elm$core$String$fromInt(eqno) + '}'))) : '';
		return '\n$$\n\\begin{align}\n' + (addendum + (r + '\n\\end{align}\n$$\n'));
	});
var $jxxcarlson$meenylatex$Internal$Render$renderArg = F3(
	function (k, latexState, args) {
		return $elm$core$String$trim(
			A2(
				$jxxcarlson$meenylatex$Internal$Render$render,
				latexState,
				A2($jxxcarlson$meenylatex$Internal$Render$getElement, k, args)));
	});
var $jxxcarlson$meenylatex$Internal$Render$renderArgList = F2(
	function (latexState, args) {
		return A2(
			$elm$core$String$join,
			'',
			A2(
				$elm$core$List$map,
				function (x) {
					return '{' + (x + '}');
				},
				A2(
					$elm$core$List$map,
					$jxxcarlson$meenylatex$Internal$Render$render(latexState),
					args)));
	});
var $jxxcarlson$meenylatex$Internal$Render$renderBibItem = F4(
	function (latexState, optArgs, args, body) {
		var label = ($elm$core$List$length(optArgs) === 1) ? A3($jxxcarlson$meenylatex$Internal$Render$renderArg, 0, latexState, optArgs) : A3($jxxcarlson$meenylatex$Internal$Render$renderArg, 0, latexState, args);
		return ' <p id=bibitem:' + (label + ('>[' + (label + ('] ' + (A2($jxxcarlson$meenylatex$Internal$Render$render, latexState, body) + '</p>\n')))));
	});
var $jxxcarlson$meenylatex$Internal$Render$renderBozo = F2(
	function (latexState, args) {
		return 'bozo{' + (A3($jxxcarlson$meenylatex$Internal$Render$renderArg, 0, latexState, args) + ('}{' + (A3($jxxcarlson$meenylatex$Internal$Render$renderArg, 1, latexState, args) + '}')));
	});
var $jxxcarlson$meenylatex$Internal$Render$renderCenterEnvironment = F2(
	function (latexState, body) {
		var r = A2($jxxcarlson$meenylatex$Internal$Render$render, latexState, body);
		return '\n<div class=\"center\" >\n' + (r + '\n</div>\n');
	});
var $jxxcarlson$meenylatex$Internal$Render$renderDefaultEnvironment = F4(
	function (name, latexState, args, body) {
		return A2(
			$elm$core$List$member,
			name,
			_List_fromArray(
				['theorem', 'proposition', 'corollary', 'lemma', 'definition'])) ? A4($jxxcarlson$meenylatex$Internal$Render$renderTheoremLikeEnvironment, latexState, name, args, body) : A4($jxxcarlson$meenylatex$Internal$Render$renderDefaultEnvironment2, latexState, name, args, body);
	});
var $jxxcarlson$meenylatex$Internal$Render$renderDefaultEnvironment2 = F4(
	function (latexState, name, args, body) {
		var r = A2($jxxcarlson$meenylatex$Internal$Render$render, latexState, body);
		return '\n<div class=\"environment\">\n<strong>' + (name + ('</strong>\n<div>\n' + (r + '\n</div>\n</div>\n')));
	});
var $jxxcarlson$meenylatex$Internal$Render$renderEnumerate = F2(
	function (latexState, body) {
		return '\n<ol>\n' + (A2($jxxcarlson$meenylatex$Internal$Render$render, latexState, body) + '\n</ol>\n');
	});
var $jxxcarlson$meenylatex$Internal$Render$renderEnvironment = F4(
	function (latexState, name, args, body) {
		return A4($jxxcarlson$meenylatex$Internal$Render$environmentRenderer, name, latexState, args, body);
	});
var $jxxcarlson$meenylatex$Internal$Render$renderEqnArray = F2(
	function (latexState, body) {
		return '\n$$\n' + (A2($jxxcarlson$meenylatex$Internal$Render$render, latexState, body) + '\n$$\n');
	});
var $jxxcarlson$meenylatex$Internal$Render$renderEquationEnvironment = F2(
	function (latexState, body) {
		var s1 = A2($jxxcarlson$meenylatex$Internal$LatexState$getCounter, 's1', latexState);
		var r = A2($jxxcarlson$meenylatex$Internal$Render$render, latexState, body);
		var eqno = A2($jxxcarlson$meenylatex$Internal$LatexState$getCounter, 'eqno', latexState);
		var addendum = (eqno > 0) ? ((s1 > 0) ? ('\\tag{' + ($elm$core$String$fromInt(s1) + ('.' + ($elm$core$String$fromInt(eqno) + '}')))) : ('\\tag{' + ($elm$core$String$fromInt(eqno) + '}'))) : '';
		return '\n$$\n\\begin{equation}' + (addendum + (r + '\\end{equation}\n$$\n'));
	});
var $jxxcarlson$meenylatex$Internal$Render$renderIndentEnvironment = F2(
	function (latexState, body) {
		return A2(
			$jxxcarlson$meenylatex$Internal$Html$div,
			_List_fromArray(
				['style=\"margin-left:2em\"']),
			_List_fromArray(
				[
					A2($jxxcarlson$meenylatex$Internal$Render$render, latexState, body)
				]));
	});
var $jxxcarlson$meenylatex$Internal$Render$renderItem = F3(
	function (latexState, level, latexExpression) {
		return '<li class=\"' + ($jxxcarlson$meenylatex$Internal$Render$itemClass(level) + ('\">' + (A2($jxxcarlson$meenylatex$Internal$Render$render, latexState, latexExpression) + '</li>\n')));
	});
var $jxxcarlson$meenylatex$Internal$Render$renderItemize = F2(
	function (latexState, body) {
		return '\n<ul>\n' + (A2($jxxcarlson$meenylatex$Internal$Render$render, latexState, body) + '\n</ul>\n');
	});
var $jxxcarlson$meenylatex$Internal$Render$renderLatexList = F2(
	function (latexState, args) {
		return $jxxcarlson$meenylatex$Internal$Render$postProcess(
			$jxxcarlson$meenylatex$Internal$JoinStrings$joinList(
				A2(
					$elm$core$List$map,
					$jxxcarlson$meenylatex$Internal$Render$render(latexState),
					args)));
	});
var $jxxcarlson$meenylatex$Internal$Render$renderListing = F2(
	function (latexState, body) {
		var text = A2($jxxcarlson$meenylatex$Internal$Render$render, latexState, body);
		return '\n<pre class=\"verbatim\">' + ($jxxcarlson$meenylatex$Internal$Utility$addLineNumbers(text) + '</pre>\n');
	});
var $jxxcarlson$meenylatex$Internal$Render$renderMacro = F4(
	function (latexState, name, optArgs, args) {
		return A4($jxxcarlson$meenylatex$Internal$Render$macroRenderer, name, latexState, optArgs, args);
	});
var $jxxcarlson$meenylatex$Internal$Render$renderMacros = F2(
	function (latexState, body) {
		return '\n$$\n' + (A2($jxxcarlson$meenylatex$Internal$Render$render, latexState, body) + '\n$$\n');
	});
var $jxxcarlson$meenylatex$Internal$Render$renderOptArgList = F2(
	function (latexState, args) {
		return A2(
			$elm$core$String$join,
			'',
			A2(
				$elm$core$List$map,
				function (x) {
					return '[' + (x + ']');
				},
				A2(
					$elm$core$List$map,
					$jxxcarlson$meenylatex$Internal$Render$render(latexState),
					args)));
	});
var $jxxcarlson$meenylatex$Internal$Render$renderQuotation = F2(
	function (latexState, body) {
		return A2(
			$jxxcarlson$meenylatex$Internal$Html$div,
			_List_fromArray(
				['class=\"quotation\"']),
			_List_fromArray(
				[
					A2($jxxcarlson$meenylatex$Internal$Render$render, latexState, body)
				]));
	});
var $jxxcarlson$meenylatex$Internal$Render$renderSMacro = F5(
	function (latexState, name, optArgs, args, le) {
		var _v0 = A2(
			$elm$core$Dict$get,
			name,
			$jxxcarlson$meenylatex$Internal$Render$cyclic$renderSMacroDict());
		if (_v0.$ === 'Just') {
			var f = _v0.a;
			return A4(f, latexState, optArgs, args, le);
		} else {
			return '<span style=\"color: red;\">\\' + (name + (A2($jxxcarlson$meenylatex$Internal$Render$renderArgList, $jxxcarlson$meenylatex$Internal$LatexState$emptyLatexState, args) + (' ' + (A2($jxxcarlson$meenylatex$Internal$Render$render, latexState, le) + '</span>'))));
		}
	});
var $jxxcarlson$meenylatex$Internal$Render$renderTheBibliography = F2(
	function (latexState, body) {
		return A2(
			$jxxcarlson$meenylatex$Internal$Html$div,
			_List_fromArray(
				['style=\"\"']),
			_List_fromArray(
				[
					A2($jxxcarlson$meenylatex$Internal$Render$render, latexState, body)
				]));
	});
var $jxxcarlson$meenylatex$Internal$Render$renderTheoremLikeEnvironment = F4(
	function (latexState, name, args, body) {
		var tno = A2($jxxcarlson$meenylatex$Internal$LatexState$getCounter, 'tno', latexState);
		var s1 = A2($jxxcarlson$meenylatex$Internal$LatexState$getCounter, 's1', latexState);
		var tnoString = (s1 > 0) ? (' ' + ($elm$core$String$fromInt(s1) + ('.' + $elm$core$String$fromInt(tno)))) : (' ' + $elm$core$String$fromInt(tno));
		var r = A2($jxxcarlson$meenylatex$Internal$Render$render, latexState, body);
		var eqno = A2($jxxcarlson$meenylatex$Internal$LatexState$getCounter, 'eqno', latexState);
		return '\n<div class=\"environment\">\n<strong>' + (name + (tnoString + ('</strong>\n<div class=\"italic\">\n' + (r + '\n</div>\n</div>\n'))));
	});
var $jxxcarlson$meenylatex$Internal$Render$renderUseForWeb = F2(
	function (latexState, body) {
		return '\n$$\n' + (A2($jxxcarlson$meenylatex$Internal$Render$render, latexState, body) + '\n$$\n');
	});
var $jxxcarlson$meenylatex$Internal$Render$renderVerbatim = F2(
	function (latexState, body) {
		var body2 = A3(
			$elm$core$String$replace,
			'<',
			'&lt;',
			A3(
				$elm$core$String$replace,
				'>',
				'&gt;',
				A2($jxxcarlson$meenylatex$Internal$Render$render, latexState, body)));
		return '\n<pre class=\"verbatim\">' + (body2 + '</pre>\n');
	});
var $jxxcarlson$meenylatex$Internal$Render$renderVerse = F2(
	function (latexState, body) {
		return A2(
			$jxxcarlson$meenylatex$Internal$Html$div,
			_List_fromArray(
				['class=\"verse\"']),
			_List_fromArray(
				[
					$elm$core$String$trim(
					A2($jxxcarlson$meenylatex$Internal$Render$render, latexState, body))
				]));
	});
var $jxxcarlson$meenylatex$Internal$Render$reproduceMacro = F4(
	function (name, latexState, optArgs, args) {
		return '<span style=\"color: red;\">\\' + (name + (A2($jxxcarlson$meenylatex$Internal$Render$renderOptArgList, $jxxcarlson$meenylatex$Internal$LatexState$emptyLatexState, optArgs) + (A2($jxxcarlson$meenylatex$Internal$Render$renderArgList, $jxxcarlson$meenylatex$Internal$LatexState$emptyLatexState, args) + '</span>')));
	});
function $jxxcarlson$meenylatex$Internal$Render$cyclic$renderEnvironmentDict() {
	return $elm$core$Dict$fromList(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'align',
				F3(
					function (x, a, y) {
						return A2($jxxcarlson$meenylatex$Internal$Render$renderAlignEnvironment, x, y);
					})),
				_Utils_Tuple2(
				'center',
				F3(
					function (x, a, y) {
						return A2($jxxcarlson$meenylatex$Internal$Render$renderCenterEnvironment, x, y);
					})),
				_Utils_Tuple2(
				'comment',
				F3(
					function (x, a, y) {
						return A2($jxxcarlson$meenylatex$Internal$Render$renderCommentEnvironment, x, y);
					})),
				_Utils_Tuple2(
				'indent',
				F3(
					function (x, a, y) {
						return A2($jxxcarlson$meenylatex$Internal$Render$renderIndentEnvironment, x, y);
					})),
				_Utils_Tuple2(
				'enumerate',
				F3(
					function (x, a, y) {
						return A2($jxxcarlson$meenylatex$Internal$Render$renderEnumerate, x, y);
					})),
				_Utils_Tuple2(
				'eqnarray',
				F3(
					function (x, a, y) {
						return A2($jxxcarlson$meenylatex$Internal$Render$renderEqnArray, x, y);
					})),
				_Utils_Tuple2(
				'equation',
				F3(
					function (x, a, y) {
						return A2($jxxcarlson$meenylatex$Internal$Render$renderEquationEnvironment, x, y);
					})),
				_Utils_Tuple2(
				'itemize',
				F3(
					function (x, a, y) {
						return A2($jxxcarlson$meenylatex$Internal$Render$renderItemize, x, y);
					})),
				_Utils_Tuple2(
				'listing',
				F3(
					function (x, a, y) {
						return A2($jxxcarlson$meenylatex$Internal$Render$renderListing, x, y);
					})),
				_Utils_Tuple2(
				'macros',
				F3(
					function (x, a, y) {
						return A2($jxxcarlson$meenylatex$Internal$Render$renderMacros, x, y);
					})),
				_Utils_Tuple2(
				'quotation',
				F3(
					function (x, a, y) {
						return A2($jxxcarlson$meenylatex$Internal$Render$renderQuotation, x, y);
					})),
				_Utils_Tuple2(
				'tabular',
				F3(
					function (x, a, y) {
						return A2($jxxcarlson$meenylatex$Internal$Render$renderTabular, x, y);
					})),
				_Utils_Tuple2(
				'thebibliography',
				F3(
					function (x, a, y) {
						return A2($jxxcarlson$meenylatex$Internal$Render$renderTheBibliography, x, y);
					})),
				_Utils_Tuple2(
				'maskforweb',
				F3(
					function (x, a, y) {
						return A2($jxxcarlson$meenylatex$Internal$Render$renderCommentEnvironment, x, y);
					})),
				_Utils_Tuple2(
				'useforweb',
				F3(
					function (x, a, y) {
						return A2($jxxcarlson$meenylatex$Internal$Render$renderUseForWeb, x, y);
					})),
				_Utils_Tuple2(
				'verbatim',
				F3(
					function (x, a, y) {
						return A2($jxxcarlson$meenylatex$Internal$Render$renderVerbatim, x, y);
					})),
				_Utils_Tuple2(
				'verse',
				F3(
					function (x, a, y) {
						return A2($jxxcarlson$meenylatex$Internal$Render$renderVerse, x, y);
					}))
			]));
}
function $jxxcarlson$meenylatex$Internal$Render$cyclic$renderMacroDict() {
	return $elm$core$Dict$fromList(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'italic',
				F3(
					function (x, y, z) {
						return A2($jxxcarlson$meenylatex$Internal$Render$renderBozo, x, z);
					}))
			]));
}
function $jxxcarlson$meenylatex$Internal$Render$cyclic$renderSMacroDict() {
	return $elm$core$Dict$fromList(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'bibitem',
				F4(
					function (latexState, optArgs, args, body) {
						return A4($jxxcarlson$meenylatex$Internal$Render$renderBibItem, latexState, optArgs, args, body);
					}))
			]));
}
try {
	var $jxxcarlson$meenylatex$Internal$Render$renderEnvironmentDict = $jxxcarlson$meenylatex$Internal$Render$cyclic$renderEnvironmentDict();
	$jxxcarlson$meenylatex$Internal$Render$cyclic$renderEnvironmentDict = function () {
		return $jxxcarlson$meenylatex$Internal$Render$renderEnvironmentDict;
	};
	var $jxxcarlson$meenylatex$Internal$Render$renderMacroDict = $jxxcarlson$meenylatex$Internal$Render$cyclic$renderMacroDict();
	$jxxcarlson$meenylatex$Internal$Render$cyclic$renderMacroDict = function () {
		return $jxxcarlson$meenylatex$Internal$Render$renderMacroDict;
	};
	var $jxxcarlson$meenylatex$Internal$Render$renderSMacroDict = $jxxcarlson$meenylatex$Internal$Render$cyclic$renderSMacroDict();
	$jxxcarlson$meenylatex$Internal$Render$cyclic$renderSMacroDict = function () {
		return $jxxcarlson$meenylatex$Internal$Render$renderSMacroDict;
	};
} catch ($) {
	throw 'Some top-level definitions from `Internal.Render` are causing infinite recursion:\n\n  ┌─────┐\n  │    environmentRenderer\n  │     ↓\n  │    macroRenderer\n  │     ↓\n  │    render\n  │     ↓\n  │    renderAlignEnvironment\n  │     ↓\n  │    renderArg\n  │     ↓\n  │    renderArgList\n  │     ↓\n  │    renderBibItem\n  │     ↓\n  │    renderBozo\n  │     ↓\n  │    renderCenterEnvironment\n  │     ↓\n  │    renderDefaultEnvironment\n  │     ↓\n  │    renderDefaultEnvironment2\n  │     ↓\n  │    renderEnumerate\n  │     ↓\n  │    renderEnvironment\n  │     ↓\n  │    renderEnvironmentDict\n  │     ↓\n  │    renderEqnArray\n  │     ↓\n  │    renderEquationEnvironment\n  │     ↓\n  │    renderIndentEnvironment\n  │     ↓\n  │    renderItem\n  │     ↓\n  │    renderItemize\n  │     ↓\n  │    renderLatexList\n  │     ↓\n  │    renderListing\n  │     ↓\n  │    renderMacro\n  │     ↓\n  │    renderMacroDict\n  │     ↓\n  │    renderMacros\n  │     ↓\n  │    renderOptArgList\n  │     ↓\n  │    renderQuotation\n  │     ↓\n  │    renderSMacro\n  │     ↓\n  │    renderSMacroDict\n  │     ↓\n  │    renderTheBibliography\n  │     ↓\n  │    renderTheoremLikeEnvironment\n  │     ↓\n  │    renderUseForWeb\n  │     ↓\n  │    renderVerbatim\n  │     ↓\n  │    renderVerse\n  │     ↓\n  │    reproduceMacro\n  └─────┘\n\nThese errors are very tricky, so read https://elm-lang.org/0.19.1/bad-recursion to learn how to fix it!';}
var $jxxcarlson$meenylatex$Internal$Macro$renderArg = F2(
	function (k, macro) {
		if (macro.$ === 'Macro') {
			var name = macro.a;
			var optArgs = macro.b;
			var args = macro.c;
			return A3($jxxcarlson$meenylatex$Internal$Render$renderArg, k - 1, $jxxcarlson$meenylatex$Internal$LatexState$emptyLatexState, args);
		} else {
			return '';
		}
	});
var $jxxcarlson$meenylatex$Internal$Macro$substituteOne = F3(
	function (k, macro, str) {
		var hashK = '#' + $elm$core$String$fromInt(k);
		var arg = A2($jxxcarlson$meenylatex$Internal$Macro$renderArg, k, macro);
		return A3($elm$core$String$replace, hashK, arg, str);
	});
var $jxxcarlson$meenylatex$Internal$Macro$substituteMany = F3(
	function (k, macro, str) {
		substituteMany:
		while (true) {
			if (!k) {
				return str;
			} else {
				var $temp$k = k - 1,
					$temp$macro = macro,
					$temp$str = A3($jxxcarlson$meenylatex$Internal$Macro$substituteOne, k, macro, str);
				k = $temp$k;
				macro = $temp$macro;
				str = $temp$str;
				continue substituteMany;
			}
		}
	});
var $jxxcarlson$meenylatex$Internal$Macro$substitute = F2(
	function (macro, str) {
		return A3(
			$jxxcarlson$meenylatex$Internal$Macro$substituteMany,
			$jxxcarlson$meenylatex$Internal$Macro$nArgs(macro),
			macro,
			str);
	});
var $jxxcarlson$meenylatex$Internal$Macro$expandMacro_ = F2(
	function (macro, macroDef) {
		switch (macroDef.$) {
			case 'Comment':
				var str = macroDef.a;
				return $jxxcarlson$meenylatex$Internal$Parser$Comment(str);
			case 'Macro':
				var name = macroDef.a;
				var optArgs = macroDef.b;
				var args = macroDef.c;
				return A3(
					$jxxcarlson$meenylatex$Internal$Parser$Macro,
					name,
					optArgs,
					A2(
						$elm$core$List$map,
						$jxxcarlson$meenylatex$Internal$Macro$expandMacro_(macro),
						args));
			case 'SMacro':
				var name = macroDef.a;
				var optArgs = macroDef.b;
				var args = macroDef.c;
				var le = macroDef.d;
				return A4(
					$jxxcarlson$meenylatex$Internal$Parser$SMacro,
					name,
					optArgs,
					A2(
						$elm$core$List$map,
						$jxxcarlson$meenylatex$Internal$Macro$expandMacro_(macro),
						args),
					A2($jxxcarlson$meenylatex$Internal$Macro$expandMacro_, macro, le));
			case 'Item':
				var level = macroDef.a;
				var latexExpr = macroDef.b;
				return A2(
					$jxxcarlson$meenylatex$Internal$Parser$Item,
					level,
					A2($jxxcarlson$meenylatex$Internal$Macro$expandMacro_, macro, latexExpr));
			case 'InlineMath':
				var str = macroDef.a;
				return $jxxcarlson$meenylatex$Internal$Parser$InlineMath(str);
			case 'DisplayMath':
				var str = macroDef.a;
				return $jxxcarlson$meenylatex$Internal$Parser$DisplayMath(str);
			case 'Environment':
				var name = macroDef.a;
				var args = macroDef.b;
				var body = macroDef.c;
				return A3(
					$jxxcarlson$meenylatex$Internal$Parser$Environment,
					name,
					args,
					A2($jxxcarlson$meenylatex$Internal$Macro$expandMacro_, macro, body));
			case 'LatexList':
				var latexList = macroDef.a;
				return $jxxcarlson$meenylatex$Internal$Parser$LatexList(
					A2(
						$elm$core$List$map,
						$jxxcarlson$meenylatex$Internal$Macro$expandMacro_(macro),
						latexList));
			case 'LXString':
				var str = macroDef.a;
				return $jxxcarlson$meenylatex$Internal$Parser$LXString(
					A2($jxxcarlson$meenylatex$Internal$Macro$substitute, macro, str));
			case 'NewCommand':
				var commandName = macroDef.a;
				var numberOfArgs = macroDef.b;
				var commandBody = macroDef.c;
				return A3(
					$jxxcarlson$meenylatex$Internal$Parser$NewCommand,
					commandName,
					numberOfArgs,
					A2($jxxcarlson$meenylatex$Internal$Macro$expandMacro_, macro, commandBody));
			default:
				var error = macroDef.a;
				return $jxxcarlson$meenylatex$Internal$Parser$LXError(error);
		}
	});
var $jxxcarlson$meenylatex$Internal$Macro$expandMacro = F2(
	function (macro, macroDef) {
		var _v0 = A2($jxxcarlson$meenylatex$Internal$Macro$expandMacro_, macro, macroDef);
		if (_v0.$ === 'NewCommand') {
			var latexList = _v0.c;
			return latexList;
		} else {
			return $jxxcarlson$meenylatex$Internal$Parser$LXString('error');
		}
	});
var $jxxcarlson$meenylatex$Internal$Render2$getElement = F2(
	function (k, list) {
		return A2(
			$elm$core$Maybe$withDefault,
			$jxxcarlson$meenylatex$Internal$Parser$LXString('xxx'),
			A2($jxxcarlson$meenylatex$Internal$Utility$getAt, k, list));
	});
var $elm$html$Html$i = _VirtualDom_node('i');
var $elm$html$Html$Attributes$id = $elm$html$Html$Attributes$stringProperty('id');
var $jxxcarlson$meenylatex$Internal$Render2$inlineMathText = F3(
	function (latexState, mathJaxRenderOption, str_) {
		var str = A2($jxxcarlson$meenylatex$Internal$MathMacro$evalStr, latexState.mathMacroDictionary, str_);
		if (mathJaxRenderOption.$ === 'Delay') {
			return $jxxcarlson$meenylatex$Internal$Render2$mathTextDelayed(
				'$ ' + ($elm$core$String$trim(str) + ' $'));
		} else {
			return $jxxcarlson$meenylatex$Internal$Render2$mathText(
				'$ ' + ($elm$core$String$trim(str) + ' $'));
		}
	});
var $elm$html$Html$li = _VirtualDom_node('li');
var $elm$html$Html$ol = _VirtualDom_node('ol');
var $jxxcarlson$meenylatex$Internal$Render2$oneSpace = $elm$html$Html$text(' ');
var $elm$html$Html$p = _VirtualDom_node('p');
var $jxxcarlson$meenylatex$Internal$Render2$renderAlignEnvironment = F4(
	function (mathJaxRenderOption, source, latexState, body) {
		var s1 = A2($jxxcarlson$meenylatex$Internal$LatexState$getCounter, 's1', latexState);
		var r = A2($jxxcarlson$meenylatex$Internal$Render$render, latexState, body);
		var eqno = A2($jxxcarlson$meenylatex$Internal$LatexState$getCounter, 'eqno', latexState);
		var addendum = (eqno > 0) ? ((s1 > 0) ? ('\\tag{' + ($elm$core$String$fromInt(s1) + ('.' + ($elm$core$String$fromInt(eqno) + '}')))) : ('\\tag{' + ($elm$core$String$fromInt(eqno) + '}'))) : '';
		var content = '\n\\begin{align*}\n' + (addendum + (r + '\n\\end{align*}\n'));
		return A3($jxxcarlson$meenylatex$Internal$Render2$displayMathText, latexState, mathJaxRenderOption, content);
	});
var $jxxcarlson$meenylatex$Internal$Render2$renderAuthor = F3(
	function (_v0, latexState, args) {
		return A2($elm$html$Html$span, _List_Nil, _List_Nil);
	});
var $jxxcarlson$meenylatex$Internal$Render2$renderBegin = F3(
	function (_v0, latexState, args) {
		return A2(
			$elm$html$Html$span,
			_List_Nil,
			_List_fromArray(
				[
					$elm$html$Html$text('\\begin')
				]));
	});
var $elm$virtual_dom$VirtualDom$style = _VirtualDom_style;
var $elm$html$Html$Attributes$style = $elm$virtual_dom$VirtualDom$style;
var $jxxcarlson$meenylatex$Internal$Render2$renderBigSkip = F3(
	function (_v0, latexState, args) {
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					A2($elm$html$Html$Attributes$style, 'height', '40px')
				]),
			_List_Nil);
	});
var $jxxcarlson$meenylatex$Internal$Render2$renderBlue = F3(
	function (_v0, latexState, args) {
		var arg = A3($jxxcarlson$meenylatex$Internal$Render$renderArg, 0, latexState, args);
		return A2(
			$elm$html$Html$span,
			_List_fromArray(
				[
					A2($elm$html$Html$Attributes$style, 'color', 'blue')
				]),
			_List_fromArray(
				[
					$elm$html$Html$text(arg)
				]));
	});
var $elm$html$Html$a = _VirtualDom_node('a');
var $jxxcarlson$meenylatex$Internal$LatexState$getDictionaryItem = F2(
	function (key, latexState) {
		var _v0 = A2($elm$core$Dict$get, key, latexState.dictionary);
		if (_v0.$ === 'Just') {
			var value = _v0.a;
			return value;
		} else {
			return '';
		}
	});
var $elm$html$Html$Attributes$href = function (url) {
	return A2(
		$elm$html$Html$Attributes$stringProperty,
		'href',
		_VirtualDom_noJavaScriptUri(url));
};
var $elm$html$Html$strong = _VirtualDom_node('strong');
var $jxxcarlson$meenylatex$Internal$Render2$renderCite = F3(
	function (_v0, latexState, args) {
		var label_ = A3($jxxcarlson$meenylatex$Internal$Render$renderArg, 0, latexState, args);
		var ref = A2($jxxcarlson$meenylatex$Internal$LatexState$getDictionaryItem, 'bibitem:' + label_, latexState);
		var label = (ref !== '') ? ref : label_;
		return A2(
			$elm$html$Html$strong,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$elm$html$Html$span,
					_List_Nil,
					_List_fromArray(
						[
							$elm$html$Html$text('[')
						])),
					A2(
					$elm$html$Html$a,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$href('#bibitem:' + label)
						]),
					_List_fromArray(
						[
							$elm$html$Html$text(label)
						])),
					A2(
					$elm$html$Html$span,
					_List_Nil,
					_List_fromArray(
						[
							$elm$html$Html$text('] ')
						]))
				]));
	});
var $jxxcarlson$meenylatex$Internal$Render2$renderCommentEnvironment = F3(
	function (source, latexState, body) {
		return A2($elm$html$Html$div, _List_Nil, _List_Nil);
	});
var $jxxcarlson$meenylatex$Internal$Render2$renderDate = F3(
	function (_v0, latexState, args) {
		return A2($elm$html$Html$span, _List_Nil, _List_Nil);
	});
var $elm$core$List$filter = F2(
	function (isGood, list) {
		return A3(
			$elm$core$List$foldr,
			F2(
				function (x, xs) {
					return isGood(x) ? A2($elm$core$List$cons, x, xs) : xs;
				}),
			_List_Nil,
			list);
	});
var $elm$html$Html$ul = _VirtualDom_node('ul');
var $jxxcarlson$meenylatex$Internal$Render2$renderDocumentTitle = F3(
	function (_v0, latexState, list) {
		var title = A2($jxxcarlson$meenylatex$Internal$LatexState$getDictionaryItem, 'title', latexState);
		var titlePart = A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('title')
				]),
			_List_fromArray(
				[
					$elm$html$Html$text(title)
				]));
		var revision = A2($jxxcarlson$meenylatex$Internal$LatexState$getDictionaryItem, 'revision', latexState);
		var revisionText = (revision !== '') ? ('Last revised ' + revision) : '';
		var email = A2($jxxcarlson$meenylatex$Internal$LatexState$getDictionaryItem, 'email', latexState);
		var date = A2($jxxcarlson$meenylatex$Internal$LatexState$getDictionaryItem, 'date', latexState);
		var author = A2($jxxcarlson$meenylatex$Internal$LatexState$getDictionaryItem, 'author', latexState);
		var bodyParts = A2(
			$elm$core$List$map,
			function (x) {
				return A2(
					$elm$html$Html$li,
					_List_Nil,
					_List_fromArray(
						[
							$elm$html$Html$text(x)
						]));
			},
			A2(
				$elm$core$List$filter,
				function (x) {
					return x !== '';
				},
				_List_fromArray(
					[author, email, date, revisionText])));
		var bodyPart = A2($elm$html$Html$ul, _List_Nil, bodyParts);
		return A2(
			$elm$html$Html$div,
			_List_Nil,
			_List_fromArray(
				[titlePart, bodyPart]));
	});
var $jxxcarlson$meenylatex$Internal$Render2$renderDollar = F3(
	function (_v0, atexState, args) {
		return A2(
			$elm$html$Html$span,
			_List_Nil,
			_List_fromArray(
				[
					$elm$html$Html$text('$')
				]));
	});
var $elm$html$Html$Attributes$height = function (n) {
	return A2(
		_VirtualDom_attribute,
		'height',
		$elm$core$String$fromInt(n));
};
var $elm$html$Html$iframe = _VirtualDom_node('iframe');
var $elm$html$Html$Attributes$src = function (url) {
	return A2(
		$elm$html$Html$Attributes$stringProperty,
		'src',
		_VirtualDom_noJavaScriptOrHtmlUri(url));
};
var $elm$html$Html$Attributes$width = function (n) {
	return A2(
		_VirtualDom_attribute,
		'width',
		$elm$core$String$fromInt(n));
};
var $jxxcarlson$meenylatex$Internal$Render2$renderEllie = F3(
	function (_v0, latexState, args) {
		var title_ = A3($jxxcarlson$meenylatex$Internal$Render$renderArg, 1, latexState, args);
		var title = (title_ === 'xxx') ? 'Link to Ellie' : title_;
		var id = A3($jxxcarlson$meenylatex$Internal$Render$renderArg, 0, latexState, args);
		var url = 'https://ellie-app.com/embed/' + id;
		return A2(
			$elm$html$Html$iframe,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$src(url),
					$elm$html$Html$Attributes$width(500),
					$elm$html$Html$Attributes$height(600)
				]),
			_List_fromArray(
				[
					$elm$html$Html$text(title)
				]));
	});
var $jxxcarlson$meenylatex$Internal$Render2$renderEmail = F3(
	function (_v0, latexState, args) {
		return A2($elm$html$Html$span, _List_Nil, _List_Nil);
	});
var $jxxcarlson$meenylatex$Internal$Render2$renderEnd = F3(
	function (_v0, atexState, args) {
		return A2(
			$elm$html$Html$span,
			_List_Nil,
			_List_fromArray(
				[
					$elm$html$Html$text('\\end')
				]));
	});
var $jxxcarlson$meenylatex$Internal$LatexState$getCrossReference = F2(
	function (label, latexState) {
		var _v0 = A2($elm$core$Dict$get, label, latexState.crossReferences);
		if (_v0.$ === 'Just') {
			var ref = _v0.a;
			return ref;
		} else {
			return '??';
		}
	});
var $jxxcarlson$meenylatex$Internal$Render2$renderEqRef = F3(
	function (source, latexState, args) {
		var key = A3($jxxcarlson$meenylatex$Internal$Render$renderArg, 0, $jxxcarlson$meenylatex$Internal$LatexState$emptyLatexState, args);
		var ref = A2($jxxcarlson$meenylatex$Internal$LatexState$getCrossReference, key, latexState);
		return A2(
			$elm$html$Html$i,
			_List_Nil,
			_List_fromArray(
				[
					$elm$html$Html$text('('),
					$elm$html$Html$text(ref),
					$elm$html$Html$text(')')
				]));
	});
var $jxxcarlson$meenylatex$Internal$Render2$renderEqnArray = F4(
	function (mathJaxRenderOption, source, latexState, body) {
		return A3(
			$jxxcarlson$meenylatex$Internal$Render2$displayMathText,
			latexState,
			mathJaxRenderOption,
			A2($jxxcarlson$meenylatex$Internal$Render$render, latexState, body));
	});
var $jxxcarlson$meenylatex$Internal$Render2$renderEquationEnvironment = F4(
	function (mathJaxRenderOption, source, latexState, body) {
		var s1 = A2($jxxcarlson$meenylatex$Internal$LatexState$getCounter, 's1', latexState);
		var r = A2($jxxcarlson$meenylatex$Internal$Render$render, latexState, body);
		var eqno = A2($jxxcarlson$meenylatex$Internal$LatexState$getCounter, 'eqno', latexState);
		var addendum = (eqno > 0) ? ((s1 > 0) ? ('\\tag{' + ($elm$core$String$fromInt(s1) + ('.' + ($elm$core$String$fromInt(eqno) + '}')))) : ('\\tag{' + ($elm$core$String$fromInt(eqno) + '}'))) : '';
		return A3($jxxcarlson$meenylatex$Internal$Render2$displayMathText, latexState, mathJaxRenderOption, '\\begin{equation}' + (r + (addendum + '\\end{equation}')));
	});
var $jxxcarlson$meenylatex$Internal$ErrorMessages2$displayExpected = function (problem) {
	switch (problem.$) {
		case 'ExpectingEndForInlineMath':
			return 'Expecting \'$\' to end inline math';
		case 'ExpectingEndOfEnvironmentName':
			return 'Begin or end phrase messed up in environment';
		case 'ExpectingBeginDisplayMathModeDollarSign':
			return 'Expecting \'$$\' to begin displayed math';
		case 'ExpectingEndDisplayMathModeDollarSign':
			return 'Expecting \'$$\' to end displayed math';
		case 'ExpectingBeginDisplayMathModeBracket':
			return 'Expecting \'\\[\' or \'\\]\' for displayed math';
		case 'ExpectingEndDisplayMathModeBracket':
			return 'Expecting \'\\[\' or \'\\]\' for displayed math';
		case 'ExpectingEndForPassThroughBody':
			return 'Begin or end phrase messed up in environment';
		case 'ExpectingValidTableCell':
			return 'Something is to complete the table cell';
		case 'ExpectingValidOptionArgWord':
			return 'Something is missing to complete the optional argument';
		case 'ExpectingValidMacroArgWord':
			return 'Something is missing to complete the macro argument\'';
		case 'ExpectingWords':
			return 'Something is missing in this sequence of words';
		case 'ExpectingLeftBrace':
			return 'Expecting left brace';
		case 'ExpectingRightBrace':
			return 'Expecting right brace';
		case 'ExpectingLeftBracket':
			return 'Expecting left bracket';
		case 'ExpectingRightBracket':
			return 'Expecting right bracket';
		case 'ExpectingLeftParen':
			return 'Expecting left paren';
		case 'ExpectingRightParen':
			return 'Expecting right paren';
		case 'ExpectingNewline':
			return 'Expecting new line';
		case 'ExpectingPercent':
			return 'Expecting percent';
		case 'ExpectingMacroReservedWord':
			return 'Expecting macro reserved word';
		case 'ExpectingmSMacroReservedWord':
			return 'Expecting smacro reserved word';
		case 'ExpectingInt':
			return 'Expecting int';
		case 'InvalidInt':
			return 'Invalid int';
		case 'ExpectingLeadingDollarSign':
			return 'Expecting $';
		case 'ExpectingBeginAndRightBrace':
			return 'Expecting begin{';
		case 'ExpectingEndAndRightBrace':
			return 'Expecting end}';
		case 'ExpectingEscapeAndLeftBracket':
			return 'Expecting \\[';
		case 'ExpectingDoubleNewline':
			return 'Expecting \n\n';
		case 'ExpectingEscapedItem':
			return 'Expecting \\item';
		case 'ExpectingSpace':
			return 'Expecting space';
		case 'ExpectingAmpersand':
			return 'Expecting &';
		case 'ExpectingDoubleEscapeAndNewline':
			return 'Expecting \\\\\n';
		case 'ExpectingEscapedNewcommandAndBrace':
			return 'Expecting \\newcommand{';
		default:
			return 'Begin or end phrase messed up';
	}
};
var $jxxcarlson$meenylatex$Internal$ErrorMessages2$getLine = F2(
	function (lineNumber, str) {
		getLine:
		while (true) {
			if (lineNumber <= 1) {
				return A2(
					$elm$core$Maybe$withDefault,
					str,
					$elm$core$List$head(
						A2($elm$core$String$split, '\n', str)));
			} else {
				var $temp$lineNumber = lineNumber - 1,
					$temp$str = A3(
					$elm$core$String$slice,
					A2(
						$elm$core$Maybe$withDefault,
						0,
						$elm$core$List$head(
							A2($elm$core$String$indexes, '\n', str))) + 1,
					$elm$core$String$length(str),
					str);
				lineNumber = $temp$lineNumber;
				str = $temp$str;
				continue getLine;
			}
		}
	});
var $jxxcarlson$meenylatex$Internal$ErrorMessages2$getLines = F2(
	function (lineNumber, str) {
		return A2(
			$elm$core$List$filter,
			function (line) {
				return $elm$core$String$length(line) > 0;
			},
			A2(
				$elm$core$List$map,
				function (i) {
					return A2($jxxcarlson$meenylatex$Internal$ErrorMessages2$getLine, i, str);
				},
				A2($elm$core$List$range, 1, lineNumber)));
	});
var $jxxcarlson$meenylatex$Internal$ErrorMessages2$renderErrors = F2(
	function (source, errs) {
		var _v0 = $elm$core$List$head(errs);
		if (_v0.$ === 'Nothing') {
			return {errorText: _List_Nil, explanation: 'no explanation', markerOffset: 0};
		} else {
			var firstErr = _v0.a;
			var markerOffset = firstErr.col;
			return {
				errorText: A2($jxxcarlson$meenylatex$Internal$ErrorMessages2$getLines, firstErr.row, source),
				explanation: $jxxcarlson$meenylatex$Internal$ErrorMessages2$displayExpected(firstErr.problem),
				markerOffset: markerOffset
			};
		}
	});
var $elm$html$Html$Attributes$target = $elm$html$Html$Attributes$stringProperty('target');
var $jxxcarlson$meenylatex$Internal$Render2$renderHRef = F3(
	function (source, latexState, args) {
		var url = A3($jxxcarlson$meenylatex$Internal$Render$renderArg, 0, $jxxcarlson$meenylatex$Internal$LatexState$emptyLatexState, args);
		var label = A3($jxxcarlson$meenylatex$Internal$Render$renderArg, 1, $jxxcarlson$meenylatex$Internal$LatexState$emptyLatexState, args);
		return A2(
			$elm$html$Html$a,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$href(url),
					$elm$html$Html$Attributes$target('_blank')
				]),
			_List_fromArray(
				[
					$elm$html$Html$text(label)
				]));
	});
var $jxxcarlson$meenylatex$Internal$Render2$renderHighlighted = F3(
	function (_v0, latexState, args) {
		var arg = A3($jxxcarlson$meenylatex$Internal$Render$renderArg, 0, latexState, args);
		return A2(
			$elm$html$Html$span,
			_List_fromArray(
				[
					A2($elm$html$Html$Attributes$style, 'background-color', 'yellow')
				]),
			_List_fromArray(
				[
					$elm$html$Html$text(arg)
				]));
	});
var $elm$virtual_dom$VirtualDom$attribute = F2(
	function (key, value) {
		return A2(
			_VirtualDom_attribute,
			_VirtualDom_noOnOrFormAction(key),
			_VirtualDom_noJavaScriptOrHtmlUri(value));
	});
var $elm$html$Html$Attributes$attribute = $elm$virtual_dom$VirtualDom$attribute;
var $jxxcarlson$meenylatex$Internal$Render2$renderIFrame = F3(
	function (_v0, latexState, args) {
		var url = A3($jxxcarlson$meenylatex$Internal$Render$renderArg, 0, latexState, args);
		var title = A3($jxxcarlson$meenylatex$Internal$Render$renderArg, 1, latexState, args);
		return A2(
			$elm$html$Html$iframe,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$src(url),
					$elm$html$Html$Attributes$width(400),
					$elm$html$Html$Attributes$height(500),
					A2($elm$html$Html$Attributes$attribute, 'Content-Type', 'application/pdf'),
					A2($elm$html$Html$Attributes$attribute, 'Content-Disposition', 'inline')
				]),
			_List_fromArray(
				[
					$elm$html$Html$text(title)
				]));
	});
var $elm$html$Html$Attributes$alt = $elm$html$Html$Attributes$stringProperty('alt');
var $elm$html$Html$br = _VirtualDom_node('br');
var $elm$html$Html$img = _VirtualDom_node('img');
var $jxxcarlson$meenylatex$Internal$Image$ImageAttributes = F3(
	function (width, _float, align) {
		return {align: align, _float: _float, width: width};
	});
var $jxxcarlson$meenylatex$Internal$KeyValueUtilities$itemListHelper = F2(
	function (itemParser, revItems) {
		return $elm$parser$Parser$Advanced$oneOf(
			_List_fromArray(
				[
					A2(
					$elm$parser$Parser$Advanced$keeper,
					$elm$parser$Parser$Advanced$succeed(
						function (item_) {
							return $elm$parser$Parser$Advanced$Loop(
								A2($elm$core$List$cons, item_, revItems));
						}),
					itemParser),
					A2(
					$elm$parser$Parser$Advanced$map,
					function (_v0) {
						return $elm$parser$Parser$Advanced$Done(
							$elm$core$List$reverse(revItems));
					},
					$elm$parser$Parser$Advanced$succeed(_Utils_Tuple0))
				]));
	});
var $jxxcarlson$meenylatex$Internal$KeyValueUtilities$itemList_ = F2(
	function (initialList, itemParser) {
		return A2(
			$elm$parser$Parser$Advanced$loop,
			initialList,
			$jxxcarlson$meenylatex$Internal$KeyValueUtilities$itemListHelper(itemParser));
	});
var $jxxcarlson$meenylatex$Internal$KeyValueUtilities$itemList = function (itemParser) {
	return A2($jxxcarlson$meenylatex$Internal$KeyValueUtilities$itemList_, _List_Nil, itemParser);
};
var $jxxcarlson$meenylatex$Internal$KeyValueUtilities$ExpectingColon = {$: 'ExpectingColon'};
var $jxxcarlson$meenylatex$Internal$KeyValueUtilities$ExpectingComma = {$: 'ExpectingComma'};
var $elm$core$Tuple$pair = F2(
	function (a, b) {
		return _Utils_Tuple2(a, b);
	});
var $elm$parser$Parser$Advanced$spaces = $elm$parser$Parser$Advanced$chompWhile(
	function (c) {
		return _Utils_eq(
			c,
			_Utils_chr(' ')) || (_Utils_eq(
			c,
			_Utils_chr('\n')) || _Utils_eq(
			c,
			_Utils_chr('\r')));
	});
var $jxxcarlson$meenylatex$Internal$KeyValueUtilities$ws = $elm$parser$Parser$Advanced$chompWhile(
	function (c) {
		return _Utils_eq(
			c,
			_Utils_chr(' ')) || _Utils_eq(
			c,
			_Utils_chr('\n'));
	});
var $jxxcarlson$meenylatex$Internal$KeyValueUtilities$word = F2(
	function (problem, inWord) {
		return A2(
			$elm$parser$Parser$Advanced$keeper,
			A2(
				$elm$parser$Parser$Advanced$keeper,
				A2(
					$elm$parser$Parser$Advanced$keeper,
					A2(
						$elm$parser$Parser$Advanced$ignorer,
						$elm$parser$Parser$Advanced$succeed($elm$core$String$slice),
						$jxxcarlson$meenylatex$Internal$KeyValueUtilities$ws),
					A2(
						$elm$parser$Parser$Advanced$ignorer,
						A2(
							$elm$parser$Parser$Advanced$ignorer,
							A2(
								$elm$parser$Parser$Advanced$ignorer,
								$elm$parser$Parser$Advanced$getOffset,
								A2($elm$parser$Parser$Advanced$chompIf, inWord, problem)),
							$elm$parser$Parser$Advanced$chompWhile(inWord)),
						$jxxcarlson$meenylatex$Internal$KeyValueUtilities$ws)),
				$elm$parser$Parser$Advanced$getOffset),
			$elm$parser$Parser$Advanced$getSource);
	});
var $jxxcarlson$meenylatex$Internal$KeyValueUtilities$keyValuePair = A2(
	$elm$parser$Parser$Advanced$map,
	function (_v0) {
		var a = _v0.a;
		var b = _v0.b;
		return _Utils_Tuple2(
			$elm$core$String$trim(a),
			$elm$core$String$trim(b));
	},
	A2(
		$elm$parser$Parser$Advanced$keeper,
		A2(
			$elm$parser$Parser$Advanced$keeper,
			A2(
				$elm$parser$Parser$Advanced$ignorer,
				$elm$parser$Parser$Advanced$succeed($elm$core$Tuple$pair),
				$elm$parser$Parser$Advanced$spaces),
			A2(
				$elm$parser$Parser$Advanced$ignorer,
				A2(
					$elm$parser$Parser$Advanced$ignorer,
					A2(
						$elm$parser$Parser$Advanced$ignorer,
						A2(
							$jxxcarlson$meenylatex$Internal$KeyValueUtilities$word,
							$jxxcarlson$meenylatex$Internal$KeyValueUtilities$ExpectingColon,
							function (c) {
								return !_Utils_eq(
									c,
									_Utils_chr(':'));
							}),
						$elm$parser$Parser$Advanced$spaces),
					$elm$parser$Parser$Advanced$symbol(
						A2($elm$parser$Parser$Advanced$Token, ':', $jxxcarlson$meenylatex$Internal$KeyValueUtilities$ExpectingColon))),
				$elm$parser$Parser$Advanced$spaces)),
		A2(
			$elm$parser$Parser$Advanced$ignorer,
			A2(
				$jxxcarlson$meenylatex$Internal$KeyValueUtilities$word,
				$jxxcarlson$meenylatex$Internal$KeyValueUtilities$ExpectingComma,
				function (c) {
					return !_Utils_eq(
						c,
						_Utils_chr(','));
				}),
			$elm$parser$Parser$Advanced$oneOf(
				_List_fromArray(
					[
						$elm$parser$Parser$Advanced$symbol(
						A2($elm$parser$Parser$Advanced$Token, ',', $jxxcarlson$meenylatex$Internal$KeyValueUtilities$ExpectingComma)),
						$elm$parser$Parser$Advanced$spaces
					])))));
var $jxxcarlson$meenylatex$Internal$KeyValueUtilities$keyValuePairs = A2(
	$elm$parser$Parser$Advanced$keeper,
	$elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity),
	$jxxcarlson$meenylatex$Internal$KeyValueUtilities$itemList($jxxcarlson$meenylatex$Internal$KeyValueUtilities$keyValuePair));
var $elm$core$Result$withDefault = F2(
	function (def, result) {
		if (result.$ === 'Ok') {
			var a = result.a;
			return a;
		} else {
			return def;
		}
	});
var $jxxcarlson$meenylatex$Internal$KeyValueUtilities$getKeyValueList = function (str) {
	return A2(
		$elm$core$Result$withDefault,
		_List_Nil,
		A2($elm$parser$Parser$Advanced$run, $jxxcarlson$meenylatex$Internal$KeyValueUtilities$keyValuePairs, str));
};
var $jxxcarlson$meenylatex$Internal$KeyValueUtilities$getValue = F2(
	function (key, kvpList) {
		return A2(
			$elm$core$Maybe$withDefault,
			'',
			$elm$core$List$head(
				A2(
					$elm$core$List$map,
					function (x) {
						return x.b;
					},
					A2(
						$elm$core$List$filter,
						function (x) {
							return _Utils_eq(x.a, key);
						},
						kvpList))));
	});
var $jxxcarlson$meenylatex$Internal$Image$parseImageAttributes = function (attributeString) {
	var kvList = $jxxcarlson$meenylatex$Internal$KeyValueUtilities$getKeyValueList(attributeString);
	var widthValue = A2(
		$elm$core$Maybe$withDefault,
		200,
		$elm$core$String$toInt(
			A2($jxxcarlson$meenylatex$Internal$KeyValueUtilities$getValue, 'width', kvList)));
	var floatValue = A2($jxxcarlson$meenylatex$Internal$KeyValueUtilities$getValue, 'float', kvList);
	var alignValue = A2($jxxcarlson$meenylatex$Internal$KeyValueUtilities$getValue, 'align', kvList);
	return A3($jxxcarlson$meenylatex$Internal$Image$ImageAttributes, widthValue, floatValue, alignValue);
};
var $jxxcarlson$meenylatex$Internal$Render2$renderImage = F3(
	function (source, latexState, args) {
		var url = A3($jxxcarlson$meenylatex$Internal$Render$renderArg, 0, latexState, args);
		var label = A3($jxxcarlson$meenylatex$Internal$Render$renderArg, 1, latexState, args);
		var attributeString = A3($jxxcarlson$meenylatex$Internal$Render$renderArg, 2, latexState, args);
		var imageAttrs = $jxxcarlson$meenylatex$Internal$Image$parseImageAttributes(attributeString);
		var width = $elm$core$String$fromInt(imageAttrs.width) + 'px';
		return (imageAttrs._float === 'left') ? A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					A2($elm$html$Html$Attributes$style, 'float', 'left')
				]),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$img,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$src(url),
							$elm$html$Html$Attributes$alt(label),
							A2($elm$html$Html$Attributes$style, 'width', width),
							A2($elm$html$Html$Attributes$style, 'margin-right', '12px')
						]),
					_List_Nil),
					A2($elm$html$Html$br, _List_Nil, _List_Nil),
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							A2($elm$html$Html$Attributes$style, 'width', width),
							A2($elm$html$Html$Attributes$style, 'text-align', 'center'),
							A2($elm$html$Html$Attributes$style, 'display', 'block')
						]),
					_List_fromArray(
						[
							$elm$html$Html$text(label)
						]))
				])) : ((imageAttrs._float === 'right') ? A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					A2($elm$html$Html$Attributes$style, 'float', 'right')
				]),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$img,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$src(url),
							$elm$html$Html$Attributes$alt(label),
							A2($elm$html$Html$Attributes$style, 'width', width),
							A2($elm$html$Html$Attributes$style, 'margin-left', '12px')
						]),
					_List_Nil),
					A2($elm$html$Html$br, _List_Nil, _List_Nil),
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							A2($elm$html$Html$Attributes$style, 'width', width),
							A2($elm$html$Html$Attributes$style, 'text-align', 'center'),
							A2($elm$html$Html$Attributes$style, 'display', 'block')
						]),
					_List_fromArray(
						[
							$elm$html$Html$text(label)
						]))
				])) : ((imageAttrs.align === 'center') ? A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					A2($elm$html$Html$Attributes$style, 'margin-left', 'auto'),
					A2($elm$html$Html$Attributes$style, 'margin-right', 'auto'),
					A2($elm$html$Html$Attributes$style, 'width', width)
				]),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$img,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$src(url),
							$elm$html$Html$Attributes$alt(label),
							A2($elm$html$Html$Attributes$style, 'width', width)
						]),
					_List_Nil),
					A2($elm$html$Html$br, _List_Nil, _List_Nil),
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							A2($elm$html$Html$Attributes$style, 'width', width),
							A2($elm$html$Html$Attributes$style, 'text-align', 'center'),
							A2($elm$html$Html$Attributes$style, 'display', 'block')
						]),
					_List_fromArray(
						[
							$elm$html$Html$text(label)
						]))
				])) : A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					A2($elm$html$Html$Attributes$style, 'margin-left', 'auto'),
					A2($elm$html$Html$Attributes$style, 'margin-right', 'auto'),
					A2($elm$html$Html$Attributes$style, 'width', width)
				]),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$img,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$src(url),
							$elm$html$Html$Attributes$alt(label),
							A2($elm$html$Html$Attributes$style, 'width', width)
						]),
					_List_Nil),
					A2($elm$html$Html$br, _List_Nil, _List_Nil),
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							A2($elm$html$Html$Attributes$style, 'width', width),
							A2($elm$html$Html$Attributes$style, 'text-align', 'center'),
							A2($elm$html$Html$Attributes$style, 'display', 'block')
						]),
					_List_fromArray(
						[
							$elm$html$Html$text(label)
						]))
				]))));
	});
var $jxxcarlson$meenylatex$Internal$Render2$renderImageRef = F3(
	function (source, latexState, args) {
		var url = A3($jxxcarlson$meenylatex$Internal$Render$renderArg, 0, latexState, args);
		var imageUrl = A3($jxxcarlson$meenylatex$Internal$Render$renderArg, 1, latexState, args);
		var attributeString = A3($jxxcarlson$meenylatex$Internal$Render$renderArg, 2, latexState, args);
		var imageAttrs = $jxxcarlson$meenylatex$Internal$Image$parseImageAttributes(attributeString);
		var width = $elm$core$String$fromInt(imageAttrs.width) + 'px';
		var theImage = (imageAttrs._float === 'left') ? A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					A2($elm$html$Html$Attributes$style, 'float', 'left')
				]),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$img,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$src(imageUrl),
							$elm$html$Html$Attributes$alt('image link'),
							A2($elm$html$Html$Attributes$style, 'width', width),
							A2($elm$html$Html$Attributes$style, 'margin-right', '12px')
						]),
					_List_Nil),
					A2($elm$html$Html$br, _List_Nil, _List_Nil),
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							A2($elm$html$Html$Attributes$style, 'width', width),
							A2($elm$html$Html$Attributes$style, 'text-align', 'center'),
							A2($elm$html$Html$Attributes$style, 'display', 'block')
						]),
					_List_Nil)
				])) : ((imageAttrs._float === 'right') ? A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					A2($elm$html$Html$Attributes$style, 'float', 'right')
				]),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$img,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$src(imageUrl),
							$elm$html$Html$Attributes$alt('image link'),
							A2($elm$html$Html$Attributes$style, 'width', width),
							A2($elm$html$Html$Attributes$style, 'margin-left', '12px')
						]),
					_List_Nil),
					A2($elm$html$Html$br, _List_Nil, _List_Nil),
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							A2($elm$html$Html$Attributes$style, 'width', width),
							A2($elm$html$Html$Attributes$style, 'text-align', 'center'),
							A2($elm$html$Html$Attributes$style, 'display', 'block')
						]),
					_List_Nil)
				])) : ((imageAttrs.align === 'center') ? A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					A2($elm$html$Html$Attributes$style, 'margin-left', 'auto'),
					A2($elm$html$Html$Attributes$style, 'margin-right', 'auto'),
					A2($elm$html$Html$Attributes$style, 'width', width)
				]),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$img,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$src(imageUrl),
							$elm$html$Html$Attributes$alt('image link'),
							A2($elm$html$Html$Attributes$style, 'width', width)
						]),
					_List_Nil),
					A2($elm$html$Html$br, _List_Nil, _List_Nil),
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							A2($elm$html$Html$Attributes$style, 'width', width),
							A2($elm$html$Html$Attributes$style, 'text-align', 'center'),
							A2($elm$html$Html$Attributes$style, 'display', 'block')
						]),
					_List_Nil)
				])) : A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					A2($elm$html$Html$Attributes$style, 'margin-left', 'auto'),
					A2($elm$html$Html$Attributes$style, 'margin-right', 'auto'),
					A2($elm$html$Html$Attributes$style, 'width', width)
				]),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$img,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$src(imageUrl),
							$elm$html$Html$Attributes$alt('image link'),
							A2($elm$html$Html$Attributes$style, 'width', width)
						]),
					_List_Nil),
					A2($elm$html$Html$br, _List_Nil, _List_Nil),
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							A2($elm$html$Html$Attributes$style, 'width', width),
							A2($elm$html$Html$Attributes$style, 'text-align', 'center'),
							A2($elm$html$Html$Attributes$style, 'display', 'block')
						]),
					_List_Nil)
				]))));
		return A2(
			$elm$html$Html$a,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$href(url)
				]),
			_List_fromArray(
				[theImage]));
	});
var $jxxcarlson$meenylatex$Internal$Render2$renderIndex = F3(
	function (source, x, z) {
		return A2($elm$html$Html$span, _List_Nil, _List_Nil);
	});
var $elm$html$Html$h3 = _VirtualDom_node('h3');
var $elm$core$String$toLower = _String_toLower;
var $elm$regex$Regex$Match = F4(
	function (match, index, number, submatches) {
		return {index: index, match: match, number: number, submatches: submatches};
	});
var $elm$regex$Regex$fromStringWith = _Regex_fromStringWith;
var $elm$regex$Regex$fromString = function (string) {
	return A2(
		$elm$regex$Regex$fromStringWith,
		{caseInsensitive: false, multiline: false},
		string);
};
var $elm$regex$Regex$replace = _Regex_replaceAtMost(_Regex_infinity);
var $jxxcarlson$meenylatex$Internal$Render2$userReplace = F3(
	function (userRegex, replacer, string) {
		var _v0 = $elm$regex$Regex$fromString(userRegex);
		if (_v0.$ === 'Nothing') {
			return string;
		} else {
			var regex = _v0.a;
			return A3($elm$regex$Regex$replace, regex, replacer, string);
		}
	});
var $jxxcarlson$meenylatex$Internal$Render2$compress = F2(
	function (replaceBlank, str) {
		return A3(
			$jxxcarlson$meenylatex$Internal$Render2$userReplace,
			'[,;.!?&_]',
			function (_v0) {
				return '';
			},
			A3(
				$elm$core$String$replace,
				' ',
				replaceBlank,
				$elm$core$String$toLower(str)));
	});
var $jxxcarlson$meenylatex$Internal$Render2$makeId = F2(
	function (prefix, name) {
		return A2(
			$elm$core$String$join,
			'_',
			_List_fromArray(
				[
					'',
					prefix,
					A2($jxxcarlson$meenylatex$Internal$Render2$compress, '_', name)
				]));
	});
var $jxxcarlson$meenylatex$Internal$Render2$sectionPrefix = function (level) {
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
var $jxxcarlson$meenylatex$Internal$Render2$makeTocItem = F2(
	function (prefix, tocItem) {
		var ti = tocItem.b;
		var id = A2(
			$jxxcarlson$meenylatex$Internal$Render2$makeId,
			$jxxcarlson$meenylatex$Internal$Render2$sectionPrefix(ti.level),
			ti.name);
		var i = tocItem.a;
		var number = prefix + ($elm$core$String$fromInt(i + 1) + '. ');
		var href = '#' + id;
		var classProperty = 'class=\"sectionLevel' + ($elm$core$String$fromInt(ti.level) + '\"');
		return A2(
			$elm$html$Html$p,
			_List_fromArray(
				[
					A2($elm$html$Html$Attributes$style, 'font-size', '14px'),
					A2($elm$html$Html$Attributes$style, 'padding-bottom', '0px'),
					A2($elm$html$Html$Attributes$style, 'margin-bottom', '0px'),
					A2($elm$html$Html$Attributes$style, 'padding-top', '0px'),
					A2($elm$html$Html$Attributes$style, 'margin-top', '0px'),
					A2($elm$html$Html$Attributes$style, 'line-height', '20px')
				]),
			_List_fromArray(
				[
					$elm$html$Html$text(number),
					A2(
					$elm$html$Html$a,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$href(href)
						]),
					_List_fromArray(
						[
							$elm$html$Html$text(ti.name)
						]))
				]));
	});
var $jxxcarlson$meenylatex$Internal$Render2$makeInnerTableOfContents = F2(
	function (prefix, latexState) {
		var toc = A2(
			$elm$core$List$filter,
			function (item) {
				return item.level === 2;
			},
			latexState.tableOfContents);
		return A3(
			$elm$core$List$foldl,
			F2(
				function (tocItem, acc) {
					return _Utils_ap(
						acc,
						_List_fromArray(
							[
								A2($jxxcarlson$meenylatex$Internal$Render2$makeTocItem, prefix, tocItem)
							]));
				}),
			_List_Nil,
			A2($elm$core$List$indexedMap, $elm$core$Tuple$pair, toc));
	});
var $jxxcarlson$meenylatex$Internal$Render2$renderInnerTableOfContents = F3(
	function (_v0, latexState, args) {
		var s1 = A2($jxxcarlson$meenylatex$Internal$LatexState$getCounter, 's1', latexState);
		var prefix = $elm$core$String$fromInt(s1) + '.';
		var innerPart = A2($jxxcarlson$meenylatex$Internal$Render2$makeInnerTableOfContents, prefix, latexState);
		return A2(
			$elm$html$Html$div,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$elm$html$Html$h3,
					_List_Nil,
					_List_fromArray(
						[
							$elm$html$Html$text('Table of Contents')
						])),
					A2($elm$html$Html$ul, _List_Nil, innerPart)
				]));
	});
var $jxxcarlson$meenylatex$Internal$Render2$renderLabel = F3(
	function (source, x, z) {
		return A2($elm$html$Html$span, _List_Nil, _List_Nil);
	});
var $elm$html$Html$pre = _VirtualDom_node('pre');
var $jxxcarlson$meenylatex$Internal$Render2$renderListing = F3(
	function (source, latexState, body) {
		var text = A2($jxxcarlson$meenylatex$Internal$Render$render, latexState, body);
		var lines = $jxxcarlson$meenylatex$Internal$Utility$addLineNumbers(text);
		return A2(
			$elm$html$Html$pre,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('verbatim')
				]),
			_List_fromArray(
				[
					$elm$html$Html$text(lines)
				]));
	});
var $jxxcarlson$meenylatex$Internal$Render2$renderMacros = F4(
	function (mathJaxRenderOption, source, latexState, body) {
		return A3(
			$jxxcarlson$meenylatex$Internal$Render2$displayMathText,
			latexState,
			mathJaxRenderOption,
			A2($jxxcarlson$meenylatex$Internal$Render$render, latexState, body));
	});
var $jxxcarlson$meenylatex$Internal$Render2$renderMainTableOfContents = F3(
	function (source, latexState, args) {
		return A2($elm$html$Html$span, _List_Nil, _List_Nil);
	});
var $jxxcarlson$meenylatex$Internal$Render2$renderMakeTitle = F3(
	function (source, latexState, list) {
		var title = A2($jxxcarlson$meenylatex$Internal$LatexState$getDictionaryItem, 'title', latexState);
		var titlePart = A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					A2($elm$html$Html$Attributes$style, 'font-size', '36px')
				]),
			_List_fromArray(
				[
					$elm$html$Html$text(title)
				]));
		var revision = A2($jxxcarlson$meenylatex$Internal$LatexState$getDictionaryItem, 'revision', latexState);
		var revisionText = (revision !== '') ? ('Last revised ' + revision) : '';
		var email = A2($jxxcarlson$meenylatex$Internal$LatexState$getDictionaryItem, 'email', latexState);
		var date = A2($jxxcarlson$meenylatex$Internal$LatexState$getDictionaryItem, 'date', latexState);
		var author = A2($jxxcarlson$meenylatex$Internal$LatexState$getDictionaryItem, 'author', latexState);
		var bodyParts = A2(
			$elm$core$List$map,
			function (x) {
				return A2(
					$elm$html$Html$div,
					_List_Nil,
					_List_fromArray(
						[
							$elm$html$Html$text(x)
						]));
			},
			A2(
				$elm$core$List$filter,
				function (x) {
					return x !== '';
				},
				_List_fromArray(
					[author, email, date, revisionText])));
		return A2(
			$elm$html$Html$div,
			_List_Nil,
			_Utils_ap(
				_List_fromArray(
					[titlePart]),
				bodyParts));
	});
var $jxxcarlson$meenylatex$Internal$Render2$renderMathMacros = F4(
	function (mathJaxRenderOption, source, latexState, body) {
		return A2($elm$html$Html$div, _List_Nil, _List_Nil);
	});
var $jxxcarlson$meenylatex$Internal$Render2$renderMdash = F3(
	function (source, latexState, args) {
		return A2(
			$elm$html$Html$span,
			_List_Nil,
			_List_fromArray(
				[
					$elm$html$Html$text('— ')
				]));
	});
var $jxxcarlson$meenylatex$Internal$Render2$renderMedSkip = F3(
	function (_v0, latexState, args) {
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					A2($elm$html$Html$Attributes$style, 'height', '10px')
				]),
			_List_Nil);
	});
var $jxxcarlson$meenylatex$Internal$Render2$renderNdash = F3(
	function (source, latexState, args) {
		return A2(
			$elm$html$Html$span,
			_List_Nil,
			_List_fromArray(
				[
					$elm$html$Html$text('– ')
				]));
	});
var $jxxcarlson$meenylatex$Internal$Render2$renderPercent = F3(
	function (_v0, latexState, args) {
		return A2(
			$elm$html$Html$span,
			_List_Nil,
			_List_fromArray(
				[
					$elm$html$Html$text('%')
				]));
	});
var $jxxcarlson$meenylatex$Internal$Render2$renderRed = F3(
	function (_v0, latexState, args) {
		var arg = A3($jxxcarlson$meenylatex$Internal$Render$renderArg, 0, latexState, args);
		return A2(
			$elm$html$Html$span,
			_List_fromArray(
				[
					A2($elm$html$Html$Attributes$style, 'color', 'red')
				]),
			_List_fromArray(
				[
					$elm$html$Html$text(arg)
				]));
	});
var $jxxcarlson$meenylatex$Internal$Render2$renderRef = F3(
	function (source, latexState, args) {
		var key = A3($jxxcarlson$meenylatex$Internal$Render$renderArg, 0, latexState, args);
		return A2(
			$elm$html$Html$span,
			_List_Nil,
			_List_fromArray(
				[
					$elm$html$Html$text(
					A2($jxxcarlson$meenylatex$Internal$LatexState$getCrossReference, key, latexState))
				]));
	});
var $jxxcarlson$meenylatex$Internal$Render2$renderRevision = F3(
	function (_v0, latexState, args) {
		return A2($elm$html$Html$span, _List_Nil, _List_Nil);
	});
var $elm$html$Html$h2 = _VirtualDom_node('h2');
var $elm$core$String$fromFloat = _String_fromNumber;
var $jxxcarlson$meenylatex$Internal$Render2$headingStyle = F2(
	function (ref, h) {
		return _List_fromArray(
			[
				$elm$html$Html$Attributes$id(ref),
				A2(
				$elm$html$Html$Attributes$style,
				'margin-top',
				$elm$core$String$fromFloat(h) + 'px'),
				A2(
				$elm$html$Html$Attributes$style,
				'margin-bottom',
				$elm$core$String$fromFloat(0.0 * h) + 'px')
			]);
	});
var $jxxcarlson$meenylatex$Internal$Render2$idPhrase = F2(
	function (prefix, name) {
		var compressedName = A3(
			$elm$core$String$replace,
			' ',
			'_',
			$elm$core$String$toLower(name));
		return A2($jxxcarlson$meenylatex$Internal$Render2$makeId, prefix, name);
	});
var $jxxcarlson$meenylatex$Internal$Render2$renderSection = F3(
	function (_v0, latexState, args) {
		var sectionName = A3($jxxcarlson$meenylatex$Internal$Render$renderArg, 0, latexState, args);
		var s1 = A2($jxxcarlson$meenylatex$Internal$LatexState$getCounter, 's1', latexState);
		var ref = A2($jxxcarlson$meenylatex$Internal$Render2$idPhrase, 'section', sectionName);
		var label = (s1 > 0) ? ($elm$core$String$fromInt(s1) + ' ') : '';
		return A2(
			$elm$html$Html$h2,
			A2($jxxcarlson$meenylatex$Internal$Render2$headingStyle, ref, 24),
			_List_fromArray(
				[
					$elm$html$Html$text(
					_Utils_ap(label, sectionName))
				]));
	});
var $jxxcarlson$meenylatex$Internal$Render2$renderSectionStar = F3(
	function (_v0, latexState, args) {
		var sectionName = A3($jxxcarlson$meenylatex$Internal$Render$renderArg, 0, latexState, args);
		var ref = A2($jxxcarlson$meenylatex$Internal$Render2$idPhrase, 'section', sectionName);
		return A2(
			$elm$html$Html$h2,
			A2($jxxcarlson$meenylatex$Internal$Render2$headingStyle, ref, 24),
			_List_fromArray(
				[
					$elm$html$Html$text(sectionName)
				]));
	});
var $jxxcarlson$meenylatex$Internal$Render2$renderSetClient = F3(
	function (_v0, latexState, args) {
		return A2($elm$html$Html$span, _List_Nil, _List_Nil);
	});
var $jxxcarlson$meenylatex$Internal$Render2$renderSetCounter = F3(
	function (_v0, latexState, list) {
		return A2($elm$html$Html$span, _List_Nil, _List_Nil);
	});
var $jxxcarlson$meenylatex$Internal$Render2$renderSetDocId = F3(
	function (_v0, latexState, args) {
		return A2($elm$html$Html$span, _List_Nil, _List_Nil);
	});
var $jxxcarlson$meenylatex$Internal$Render2$renderSmallSkip = F3(
	function (_v0, latexState, args) {
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					A2($elm$html$Html$Attributes$style, 'height', '0px')
				]),
			_List_Nil);
	});
var $jxxcarlson$meenylatex$Internal$Render2$renderStrikeThrough = F3(
	function (_v0, latexState, args) {
		var arg = A3($jxxcarlson$meenylatex$Internal$Render$renderArg, 0, latexState, args);
		return A2(
			$elm$html$Html$span,
			_List_fromArray(
				[
					A2($elm$html$Html$Attributes$style, 'text-decoration', 'line-through')
				]),
			_List_fromArray(
				[
					$elm$html$Html$text(arg)
				]));
	});
var $elm$html$Html$h4 = _VirtualDom_node('h4');
var $jxxcarlson$meenylatex$Internal$Render2$renderSubSubsection = F3(
	function (_v0, latexState, args) {
		var sectionName = A3($jxxcarlson$meenylatex$Internal$Render$renderArg, 0, latexState, args);
		var s3 = A2($jxxcarlson$meenylatex$Internal$LatexState$getCounter, 's3', latexState);
		var s2 = A2($jxxcarlson$meenylatex$Internal$LatexState$getCounter, 's2', latexState);
		var s1 = A2($jxxcarlson$meenylatex$Internal$LatexState$getCounter, 's1', latexState);
		var ref = A2($jxxcarlson$meenylatex$Internal$Render2$idPhrase, 'subsubsection', sectionName);
		var label = (s1 > 0) ? ($elm$core$String$fromInt(s1) + ('.' + ($elm$core$String$fromInt(s2) + ('.' + ($elm$core$String$fromInt(s3) + ' '))))) : '';
		return A2(
			$elm$html$Html$h4,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$id(ref)
				]),
			_List_fromArray(
				[
					$elm$html$Html$text(
					_Utils_ap(label, sectionName))
				]));
	});
var $jxxcarlson$meenylatex$Internal$Render2$renderSubSubsectionStar = F3(
	function (_v0, latexState, args) {
		var sectionName = A3($jxxcarlson$meenylatex$Internal$Render$renderArg, 0, latexState, args);
		var ref = A2($jxxcarlson$meenylatex$Internal$Render2$idPhrase, 'subsubsection', sectionName);
		return A2(
			$elm$html$Html$h4,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$id(ref)
				]),
			_List_fromArray(
				[
					$elm$html$Html$text(sectionName)
				]));
	});
var $jxxcarlson$meenylatex$Internal$Render2$renderSubheading = F3(
	function (_v0, latexState, args) {
		var title = A3($jxxcarlson$meenylatex$Internal$Render$renderArg, 0, latexState, args);
		return A2(
			$elm$html$Html$p,
			_List_fromArray(
				[
					A2($elm$html$Html$Attributes$style, 'font-weight', 'bold'),
					A2($elm$html$Html$Attributes$style, 'margin-bottom', '0'),
					A2($elm$html$Html$Attributes$style, 'margin-left', '-2px')
				]),
			_List_fromArray(
				[
					$elm$html$Html$text(title)
				]));
	});
var $jxxcarlson$meenylatex$Internal$Render2$renderSubsection = F3(
	function (_v0, latexState, args) {
		var sectionName = A3($jxxcarlson$meenylatex$Internal$Render$renderArg, 0, latexState, args);
		var s2 = A2($jxxcarlson$meenylatex$Internal$LatexState$getCounter, 's2', latexState);
		var s1 = A2($jxxcarlson$meenylatex$Internal$LatexState$getCounter, 's1', latexState);
		var ref = A2($jxxcarlson$meenylatex$Internal$Render2$idPhrase, 'subsection', sectionName);
		var label = (s1 > 0) ? ($elm$core$String$fromInt(s1) + ('.' + ($elm$core$String$fromInt(s2) + ' '))) : '';
		return A2(
			$elm$html$Html$h3,
			A2($jxxcarlson$meenylatex$Internal$Render2$headingStyle, ref, 12),
			_List_fromArray(
				[
					$elm$html$Html$text(
					_Utils_ap(label, sectionName))
				]));
	});
var $jxxcarlson$meenylatex$Internal$Render2$renderSubsectionStar = F3(
	function (_v0, latexState, args) {
		var sectionName = A3($jxxcarlson$meenylatex$Internal$Render$renderArg, 0, latexState, args);
		var ref = A2($jxxcarlson$meenylatex$Internal$Render2$idPhrase, 'subsection', sectionName);
		return A2(
			$elm$html$Html$h3,
			A2($jxxcarlson$meenylatex$Internal$Render2$headingStyle, ref, 12),
			_List_fromArray(
				[
					$elm$html$Html$text(sectionName)
				]));
	});
var $jxxcarlson$meenylatex$Internal$Render2$makeTableOfContents = function (latexState) {
	var toc = A2(
		$elm$core$List$filter,
		function (item) {
			return item.level === 1;
		},
		latexState.tableOfContents);
	return A3(
		$elm$core$List$foldl,
		F2(
			function (tocItem, acc) {
				return _Utils_ap(
					acc,
					_List_fromArray(
						[
							A2($jxxcarlson$meenylatex$Internal$Render2$makeTocItem, '', tocItem)
						]));
			}),
		_List_Nil,
		A2($elm$core$List$indexedMap, $elm$core$Tuple$pair, toc));
};
var $jxxcarlson$meenylatex$Internal$Render2$renderTableOfContents = F3(
	function (_v0, latexState, list) {
		var innerPart = $jxxcarlson$meenylatex$Internal$Render2$makeTableOfContents(latexState);
		return A2(
			$elm$html$Html$div,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$elm$html$Html$h3,
					_List_Nil,
					_List_fromArray(
						[
							$elm$html$Html$text('Table of Contents')
						])),
					A2($elm$html$Html$ul, _List_Nil, innerPart)
				]));
	});
var $jxxcarlson$meenylatex$Internal$Render2$renderTerm = F3(
	function (_v0, latexState, args) {
		var arg = A3($jxxcarlson$meenylatex$Internal$Render$renderArg, 0, latexState, args);
		return A2(
			$elm$html$Html$i,
			_List_Nil,
			_List_fromArray(
				[
					$elm$html$Html$text(arg)
				]));
	});
var $jxxcarlson$meenylatex$Internal$Render2$renderTitle = F2(
	function (latexState, args) {
		return A2($elm$html$Html$span, _List_Nil, _List_Nil);
	});
var $jxxcarlson$meenylatex$Internal$Render2$renderUnderscore = F3(
	function (source, latexState, args) {
		return A2(
			$elm$html$Html$span,
			_List_Nil,
			_List_fromArray(
				[
					$elm$html$Html$text('_')
				]));
	});
var $jxxcarlson$meenylatex$Internal$Render2$renderUseForWeb = F4(
	function (mathJaxRenderOption, source, latexState, body) {
		return A3(
			$jxxcarlson$meenylatex$Internal$Render2$displayMathText,
			latexState,
			mathJaxRenderOption,
			A2($jxxcarlson$meenylatex$Internal$Render$render, latexState, body));
	});
var $jxxcarlson$meenylatex$Internal$Render2$renderVerbatim = F3(
	function (source, latexState, body) {
		var body2 = A2($jxxcarlson$meenylatex$Internal$Render$render, latexState, body);
		return A2(
			$elm$html$Html$pre,
			_List_fromArray(
				[
					A2($elm$html$Html$Attributes$style, 'margin-top', '-14px'),
					A2($elm$html$Html$Attributes$style, 'margin-bottom', '0px'),
					A2($elm$html$Html$Attributes$style, 'margin-left', '25px'),
					A2($elm$html$Html$Attributes$style, 'font-size', '14px')
				]),
			_List_fromArray(
				[
					$elm$html$Html$text(body2)
				]));
	});
var $jxxcarlson$meenylatex$Internal$Render2$renderVerse = F3(
	function (source, latexState, body) {
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					A2($elm$html$Html$Attributes$style, 'white-space', 'pre-line')
				]),
			_List_fromArray(
				[
					$elm$html$Html$text(
					$elm$core$String$trim(
						A2($jxxcarlson$meenylatex$Internal$Render$render, latexState, body)))
				]));
	});
var $jxxcarlson$meenylatex$Internal$Render2$renderXLink = F3(
	function (_v0, latexState, args) {
		var label = A3($jxxcarlson$meenylatex$Internal$Render$renderArg, 1, latexState, args);
		var id = A3($jxxcarlson$meenylatex$Internal$Render$renderArg, 0, latexState, args);
		var ref = A2($jxxcarlson$meenylatex$Internal$LatexState$getDictionaryItem, 'setclient', latexState) + ('/' + id);
		return A2(
			$elm$html$Html$a,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$href(ref)
				]),
			_List_fromArray(
				[
					$elm$html$Html$text(label)
				]));
	});
var $jxxcarlson$meenylatex$Internal$Render2$renderXLinkPublic = F3(
	function (_v0, latexState, args) {
		var label = A3($jxxcarlson$meenylatex$Internal$Render$renderArg, 1, latexState, args);
		var id = A3($jxxcarlson$meenylatex$Internal$Render$renderArg, 0, latexState, args);
		var ref = A2($jxxcarlson$meenylatex$Internal$LatexState$getDictionaryItem, 'setclient', latexState) + ('/' + id);
		return A2(
			$elm$html$Html$a,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$href(ref)
				]),
			_List_fromArray(
				[
					$elm$html$Html$text(label)
				]));
	});
var $jxxcarlson$meenylatex$Internal$Render2$firstChar = $elm$core$String$left(1);
var $jxxcarlson$meenylatex$Internal$Render2$lastChar = $elm$core$String$right(1);
var $jxxcarlson$meenylatex$Internal$Render2$addSpace = function (internalState) {
	var c = A2(
		$elm$core$Maybe$withDefault,
		$jxxcarlson$meenylatex$Internal$Parser$LXString(''),
		internalState.after);
	var b = A2(
		$elm$core$Maybe$withDefault,
		$jxxcarlson$meenylatex$Internal$Parser$LXString(''),
		internalState.current);
	var a = A2(
		$elm$core$Maybe$withDefault,
		$jxxcarlson$meenylatex$Internal$Parser$LXString(''),
		internalState.before);
	var _v0 = _Utils_Tuple3(a, b, c);
	if (_v0.b.$ === 'LXString') {
		switch (_v0.a.$) {
			case 'Macro':
				var _v1 = _v0.a;
				var str = _v0.b.a;
				return A2(
					$elm$core$List$member,
					$jxxcarlson$meenylatex$Internal$Render2$firstChar(str),
					_List_fromArray(
						['.', ',', '?', '!', ';', ':'])) ? $jxxcarlson$meenylatex$Internal$Parser$LXString(str) : $jxxcarlson$meenylatex$Internal$Parser$LXString(' ' + str);
			case 'InlineMath':
				var str = _v0.b.a;
				return A2(
					$elm$core$List$member,
					$jxxcarlson$meenylatex$Internal$Render2$firstChar(str),
					_List_fromArray(
						['-', '.', ',', '?', '!', ';', ':'])) ? $jxxcarlson$meenylatex$Internal$Parser$LXString(str) : $jxxcarlson$meenylatex$Internal$Parser$LXString(' ' + str);
			default:
				var str = _v0.b.a;
				return A2(
					$elm$core$List$member,
					$jxxcarlson$meenylatex$Internal$Render2$lastChar(str),
					_List_fromArray(
						[')', '.', ',', '?', '!', ';', ':'])) ? $jxxcarlson$meenylatex$Internal$Parser$LXString(str + ' ') : $jxxcarlson$meenylatex$Internal$Parser$LXString(str);
		}
	} else {
		return b;
	}
};
var $jxxcarlson$meenylatex$Internal$ListMachine$nextState = function (internalState_) {
	var nextInputList_ = A2($elm$core$List$drop, 1, internalState_.inputList);
	return {
		after: $elm$core$List$head(
			A2($elm$core$List$drop, 1, nextInputList_)),
		before: internalState_.current,
		current: internalState_.after,
		inputList: nextInputList_
	};
};
var $jxxcarlson$meenylatex$Internal$ListMachine$makeReducer = F3(
	function (computeOutput, input, machineState) {
		var nextInternalState_ = $jxxcarlson$meenylatex$Internal$ListMachine$nextState(machineState.state);
		var nextInputList = A2($elm$core$List$drop, 1, machineState.state.inputList);
		var newOutput = computeOutput(machineState.state);
		var outputList = A2($elm$core$List$cons, newOutput, machineState.outputList);
		return {outputList: outputList, state: nextInternalState_};
	});
var $jxxcarlson$meenylatex$Internal$ListMachine$initialState = function (inputList) {
	return {
		after: $elm$core$List$head(
			A2($elm$core$List$drop, 1, inputList)),
		before: $elm$core$Maybe$Nothing,
		current: $elm$core$List$head(inputList),
		inputList: inputList
	};
};
var $jxxcarlson$meenylatex$Internal$ListMachine$initialTotalState = function (inputList) {
	return {
		outputList: _List_Nil,
		state: $jxxcarlson$meenylatex$Internal$ListMachine$initialState(inputList)
	};
};
var $jxxcarlson$meenylatex$Internal$ListMachine$makeMachine = F3(
	function (reducer, initialMachineState_, inputList) {
		return A3($elm$core$List$foldl, reducer, initialMachineState_, inputList);
	});
var $jxxcarlson$meenylatex$Internal$ListMachine$run_ = F2(
	function (reducer, inputList) {
		var initialTotalState_ = $jxxcarlson$meenylatex$Internal$ListMachine$initialTotalState(inputList);
		var finalTotalState = A3($jxxcarlson$meenylatex$Internal$ListMachine$makeMachine, reducer, initialTotalState_, inputList);
		return $elm$core$List$reverse(finalTotalState.outputList);
	});
var $jxxcarlson$meenylatex$Internal$ListMachine$run = F2(
	function (outputFunction, inputList) {
		return A2(
			$jxxcarlson$meenylatex$Internal$ListMachine$run_,
			$jxxcarlson$meenylatex$Internal$ListMachine$makeReducer(outputFunction),
			inputList);
	});
var $jxxcarlson$meenylatex$Internal$Render2$spacify = function (latexList) {
	return A2($jxxcarlson$meenylatex$Internal$ListMachine$run, $jxxcarlson$meenylatex$Internal$Render2$addSpace, latexList);
};
var $elm$html$Html$table = _VirtualDom_node('table');
var $elm$html$Html$tbody = _VirtualDom_node('tbody');
var $elm$html$Html$td = _VirtualDom_node('td');
var $jxxcarlson$meenylatex$Internal$Render2$theoremLikeEnvironments = _List_fromArray(
	['theorem', 'proposition', 'corollary', 'lemma', 'definition']);
var $elm$html$Html$tr = _VirtualDom_node('tr');
var $jxxcarlson$meenylatex$Internal$Render2$environmentRenderer = F3(
	function (mathJaxRenderOption, source, name) {
		var _v8 = A2(
			$elm$core$Dict$get,
			name,
			$jxxcarlson$meenylatex$Internal$Render2$cyclic$renderEnvironmentDict());
		if (_v8.$ === 'Just') {
			var f = _v8.a;
			return A2(f, mathJaxRenderOption, source);
		} else {
			return A3($jxxcarlson$meenylatex$Internal$Render2$renderDefaultEnvironment, mathJaxRenderOption, source, name);
		}
	});
var $jxxcarlson$meenylatex$Internal$Render2$render = F4(
	function (mathJaxRenderOption, source, latexState, latexExpression) {
		switch (latexExpression.$) {
			case 'Comment':
				var str = latexExpression.a;
				return A2(
					$elm$html$Html$p,
					_List_Nil,
					_List_fromArray(
						[
							$elm$html$Html$text('')
						]));
			case 'Macro':
				var name = latexExpression.a;
				var optArgs = latexExpression.b;
				var args = latexExpression.c;
				return A6($jxxcarlson$meenylatex$Internal$Render2$renderMacro, mathJaxRenderOption, source, latexState, name, optArgs, args);
			case 'SMacro':
				var name = latexExpression.a;
				var optArgs = latexExpression.b;
				var args = latexExpression.c;
				var le = latexExpression.d;
				return A7($jxxcarlson$meenylatex$Internal$Render2$renderSMacro, mathJaxRenderOption, source, latexState, name, optArgs, args, le);
			case 'Item':
				var level = latexExpression.a;
				var latexExpr = latexExpression.b;
				return A5($jxxcarlson$meenylatex$Internal$Render2$renderItem, mathJaxRenderOption, source, latexState, level, latexExpr);
			case 'InlineMath':
				var str = latexExpression.a;
				return A2(
					$elm$html$Html$span,
					_List_Nil,
					_List_fromArray(
						[
							$jxxcarlson$meenylatex$Internal$Render2$oneSpace,
							A3($jxxcarlson$meenylatex$Internal$Render2$inlineMathText, latexState, mathJaxRenderOption, str)
						]));
			case 'DisplayMath':
				var str = latexExpression.a;
				return A3($jxxcarlson$meenylatex$Internal$Render2$displayMathText, latexState, mathJaxRenderOption, str);
			case 'Environment':
				var name = latexExpression.a;
				var args = latexExpression.b;
				var body = latexExpression.c;
				return A6($jxxcarlson$meenylatex$Internal$Render2$renderEnvironment, mathJaxRenderOption, source, latexState, name, args, body);
			case 'LatexList':
				var latexList = latexExpression.a;
				return A4($jxxcarlson$meenylatex$Internal$Render2$renderLatexList, mathJaxRenderOption, source, latexState, latexList);
			case 'LXString':
				var str = latexExpression.a;
				var _v7 = A2($elm$core$String$left, 1, str);
				if (_v7 === ' ') {
					return A2(
						$elm$html$Html$span,
						_List_fromArray(
							[
								A2($elm$html$Html$Attributes$style, 'margin-left', '1px')
							]),
						_List_fromArray(
							[
								$elm$html$Html$text(str)
							]));
				} else {
					return A2(
						$elm$html$Html$span,
						_List_Nil,
						_List_fromArray(
							[
								$elm$html$Html$text(str)
							]));
				}
			case 'NewCommand':
				var commandName = latexExpression.a;
				var numberOfArgs = latexExpression.b;
				var commandBody = latexExpression.c;
				return A2($elm$html$Html$span, _List_Nil, _List_Nil);
			default:
				var error = latexExpression.a;
				var err = A2($jxxcarlson$meenylatex$Internal$ErrorMessages2$renderErrors, source, error);
				var errorText = A2(
					$elm$html$Html$p,
					_List_fromArray(
						[
							A2($elm$html$Html$Attributes$style, 'margin', '0')
						]),
					_List_fromArray(
						[
							$elm$html$Html$text(
							A2($elm$core$String$join, '\n', err.errorText) + ' ...')
						]));
				var offset = $elm$core$String$fromInt(5 * err.markerOffset) + 'px';
				return A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							A2($elm$html$Html$Attributes$style, 'font', 'Courier'),
							A2($elm$html$Html$Attributes$style, 'font-family', 'Mono'),
							A2($elm$html$Html$Attributes$style, 'font-size', '15px')
						]),
					_List_fromArray(
						[
							A2(
							$elm$html$Html$div,
							_List_fromArray(
								[
									A2($elm$html$Html$Attributes$style, 'color', 'blue'),
									A2($elm$html$Html$Attributes$style, 'margin', '0')
								]),
							_List_fromArray(
								[errorText])),
							A2(
							$elm$html$Html$div,
							_List_fromArray(
								[
									A2($elm$html$Html$Attributes$style, 'color', 'blue'),
									A2($elm$html$Html$Attributes$style, 'margin-left', offset)
								]),
							_List_fromArray(
								[
									$elm$html$Html$text('^')
								])),
							A2(
							$elm$html$Html$p,
							_List_fromArray(
								[
									A2($elm$html$Html$Attributes$style, 'color', 'red'),
									A2($elm$html$Html$Attributes$style, 'margin', '0')
								]),
							_List_fromArray(
								[
									$elm$html$Html$text(err.explanation)
								]))
						]));
		}
	});
var $jxxcarlson$meenylatex$Internal$Render2$renderArg = F5(
	function (mathJaxRenderOption, source, k, latexState, args) {
		return A4(
			$jxxcarlson$meenylatex$Internal$Render2$render,
			mathJaxRenderOption,
			source,
			latexState,
			A2($jxxcarlson$meenylatex$Internal$Render2$getElement, k, args));
	});
var $jxxcarlson$meenylatex$Internal$Render2$renderArgList = F4(
	function (mathJaxRenderOption, source, latexState, args) {
		return A2(
			$elm$core$List$map,
			A3($jxxcarlson$meenylatex$Internal$Render2$render, mathJaxRenderOption, source, latexState),
			args);
	});
var $jxxcarlson$meenylatex$Internal$Render2$renderBackslash = F4(
	function (mathJaxRenderOption, source, latexState, args) {
		return A2(
			$elm$html$Html$span,
			_List_Nil,
			_List_fromArray(
				[
					$elm$html$Html$text('\\'),
					A5($jxxcarlson$meenylatex$Internal$Render2$renderArg, mathJaxRenderOption, source, 0, latexState, args)
				]));
	});
var $jxxcarlson$meenylatex$Internal$Render2$renderBibItem = F6(
	function (mathJaxRenderOption, source, latexState, optArgs, args, body) {
		var label = ($elm$core$List$length(optArgs) === 1) ? A3($jxxcarlson$meenylatex$Internal$Render$renderArg, 0, latexState, optArgs) : A3($jxxcarlson$meenylatex$Internal$Render$renderArg, 0, latexState, args);
		var id = 'bibitem:' + label;
		return A2(
			$elm$html$Html$div,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$elm$html$Html$strong,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$id(id),
							A2($elm$html$Html$Attributes$style, 'margin-right', '10px')
						]),
					_List_fromArray(
						[
							$elm$html$Html$text('[' + (label + ']'))
						])),
					A2(
					$elm$html$Html$span,
					_List_Nil,
					_List_fromArray(
						[
							A4($jxxcarlson$meenylatex$Internal$Render2$render, mathJaxRenderOption, source, latexState, body)
						]))
				]));
	});
var $jxxcarlson$meenylatex$Internal$Render2$renderCell = F4(
	function (mathJaxRenderOption, source, latexState, cell) {
		switch (cell.$) {
			case 'LXString':
				var s = cell.a;
				return A2(
					$elm$html$Html$td,
					_List_Nil,
					_List_fromArray(
						[
							$elm$html$Html$text(s)
						]));
			case 'InlineMath':
				var s = cell.a;
				return A2(
					$elm$html$Html$td,
					_List_Nil,
					_List_fromArray(
						[
							A3($jxxcarlson$meenylatex$Internal$Render2$inlineMathText, latexState, mathJaxRenderOption, s)
						]));
			case 'Macro':
				var s = cell.a;
				var x = cell.b;
				var y = cell.c;
				return A2(
					$elm$html$Html$td,
					_List_Nil,
					_List_fromArray(
						[
							A6($jxxcarlson$meenylatex$Internal$Render2$renderMacro, mathJaxRenderOption, source, $jxxcarlson$meenylatex$Internal$LatexState$emptyLatexState, s, x, y)
						]));
			default:
				return A2($elm$html$Html$td, _List_Nil, _List_Nil);
		}
	});
var $jxxcarlson$meenylatex$Internal$Render2$renderCenterEnvironment = F4(
	function (mathJaxRenderOption, source, latexState, body) {
		var r = A4($jxxcarlson$meenylatex$Internal$Render2$render, mathJaxRenderOption, source, latexState, body);
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('center')
				]),
			_List_fromArray(
				[r]));
	});
var $jxxcarlson$meenylatex$Internal$Render2$renderCode = F4(
	function (mathJaxRenderOption, source, latexState, args) {
		var arg = A5($jxxcarlson$meenylatex$Internal$Render2$renderArg, mathJaxRenderOption, source, 0, latexState, args);
		return A2(
			$elm$html$Html$code,
			_List_Nil,
			_List_fromArray(
				[$jxxcarlson$meenylatex$Internal$Render2$oneSpace, arg]));
	});
var $jxxcarlson$meenylatex$Internal$Render2$renderDefItemEnvironment = F5(
	function (mathJaxRenderOption, source, latexState, optArgs, body) {
		return A2(
			$elm$html$Html$div,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$elm$html$Html$strong,
					_List_Nil,
					_List_fromArray(
						[
							$elm$html$Html$text(
							A3($jxxcarlson$meenylatex$Internal$Render$renderArg, 0, latexState, optArgs))
						])),
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							A2($elm$html$Html$Attributes$style, 'margin-left', '25px'),
							A2($elm$html$Html$Attributes$style, 'margin-top', '10px')
						]),
					_List_fromArray(
						[
							A4($jxxcarlson$meenylatex$Internal$Render2$render, mathJaxRenderOption, source, latexState, body)
						]))
				]));
	});
var $jxxcarlson$meenylatex$Internal$Render2$renderDefaultEnvironment = F6(
	function (mathJaxRenderOption, source, name, latexState, args, body) {
		return A2($elm$core$List$member, name, $jxxcarlson$meenylatex$Internal$Render2$theoremLikeEnvironments) ? A6($jxxcarlson$meenylatex$Internal$Render2$renderTheoremLikeEnvironment, mathJaxRenderOption, source, latexState, name, args, body) : A6(
			$jxxcarlson$meenylatex$Internal$Render2$renderDefaultEnvironment2,
			mathJaxRenderOption,
			source,
			latexState,
			$jxxcarlson$meenylatex$Internal$Utility$capitalize(name),
			args,
			body);
	});
var $jxxcarlson$meenylatex$Internal$Render2$renderDefaultEnvironment2 = F6(
	function (mathJaxRenderOption, source, latexState, name, args, body) {
		var r = A4($jxxcarlson$meenylatex$Internal$Render2$render, mathJaxRenderOption, source, latexState, body);
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('environment')
				]),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$strong,
					_List_Nil,
					_List_fromArray(
						[
							$elm$html$Html$text(name)
						])),
					A2(
					$elm$html$Html$div,
					_List_Nil,
					_List_fromArray(
						[r]))
				]));
	});
var $jxxcarlson$meenylatex$Internal$Render2$renderEnumerate = F4(
	function (mathJaxRenderOption, source, latexState, body) {
		return A2(
			$elm$html$Html$ol,
			_List_fromArray(
				[
					A2($elm$html$Html$Attributes$style, 'margin-top', '0px')
				]),
			_List_fromArray(
				[
					A4($jxxcarlson$meenylatex$Internal$Render2$render, mathJaxRenderOption, source, latexState, body)
				]));
	});
var $jxxcarlson$meenylatex$Internal$Render2$renderEnvironment = F6(
	function (mathJaxRenderOption, source, latexState, name, args, body) {
		return A6($jxxcarlson$meenylatex$Internal$Render2$environmentRenderer, mathJaxRenderOption, source, name, latexState, args, body);
	});
var $jxxcarlson$meenylatex$Internal$Render2$renderIndentEnvironment = F4(
	function (mathJaxRenderOption, source, latexState, body) {
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					A2($elm$html$Html$Attributes$style, 'margin-left', '2em')
				]),
			_List_fromArray(
				[
					A4($jxxcarlson$meenylatex$Internal$Render2$render, mathJaxRenderOption, source, latexState, body)
				]));
	});
var $jxxcarlson$meenylatex$Internal$Render2$renderItalic = F4(
	function (mathJaxRenderOption, source, latexState, args) {
		return A2(
			$elm$html$Html$i,
			_List_Nil,
			_List_fromArray(
				[
					$elm$html$Html$text(' '),
					A5($jxxcarlson$meenylatex$Internal$Render2$renderArg, mathJaxRenderOption, source, 0, latexState, args)
				]));
	});
var $jxxcarlson$meenylatex$Internal$Render2$renderItem = F5(
	function (mathJaxRenderOption, source, latexState, level, latexExpression) {
		return A2(
			$elm$html$Html$li,
			_List_fromArray(
				[
					A2($elm$html$Html$Attributes$style, 'margin-bottom', '8px')
				]),
			_List_fromArray(
				[
					A4($jxxcarlson$meenylatex$Internal$Render2$render, mathJaxRenderOption, source, latexState, latexExpression)
				]));
	});
var $jxxcarlson$meenylatex$Internal$Render2$renderItemize = F4(
	function (mathJaxRenderOption, source, latexState, body) {
		return A2(
			$elm$html$Html$ul,
			_List_fromArray(
				[
					A2($elm$html$Html$Attributes$style, 'margin-top', '0px')
				]),
			_List_fromArray(
				[
					A4($jxxcarlson$meenylatex$Internal$Render2$render, mathJaxRenderOption, source, latexState, body)
				]));
	});
var $jxxcarlson$meenylatex$Internal$Render2$renderLatexList = F4(
	function (mathJaxRenderOption, source, latexState, latexList) {
		return function (list) {
			return A2(
				$elm$html$Html$span,
				_List_fromArray(
					[
						A2($elm$html$Html$Attributes$style, 'margin-bottom', '10px')
					]),
				list);
		}(
			A2(
				$elm$core$List$map,
				A3($jxxcarlson$meenylatex$Internal$Render2$render, mathJaxRenderOption, source, latexState),
				$jxxcarlson$meenylatex$Internal$Render2$spacify(latexList)));
	});
var $jxxcarlson$meenylatex$Internal$Render2$renderMacro = F6(
	function (mathJaxRenderOption, source, latexState, name, optArgs, args) {
		var _v3 = A2(
			$elm$core$Dict$get,
			name,
			$jxxcarlson$meenylatex$Internal$Render2$cyclic$renderMacroDict());
		if (_v3.$ === 'Just') {
			var f = _v3.a;
			return A5(f, mathJaxRenderOption, source, latexState, optArgs, args);
		} else {
			var _v4 = A2($elm$core$Dict$get, name, latexState.macroDictionary);
			if (_v4.$ === 'Nothing') {
				return A6($jxxcarlson$meenylatex$Internal$Render2$reproduceMacro, mathJaxRenderOption, source, name, latexState, optArgs, args);
			} else {
				var macroDefinition = _v4.a;
				var macro = A3($jxxcarlson$meenylatex$Internal$Parser$Macro, name, optArgs, args);
				var expr = A2($jxxcarlson$meenylatex$Internal$Macro$expandMacro, macro, macroDefinition);
				return A4($jxxcarlson$meenylatex$Internal$Render2$render, mathJaxRenderOption, source, latexState, expr);
			}
		}
	});
var $jxxcarlson$meenylatex$Internal$Render2$renderQuotation = F4(
	function (mathJaxRenderOption, source, latexState, body) {
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					A2($elm$html$Html$Attributes$style, 'margin-left', '2em'),
					A2($elm$html$Html$Attributes$style, 'font-style', 'italic')
				]),
			_List_fromArray(
				[
					A4($jxxcarlson$meenylatex$Internal$Render2$render, mathJaxRenderOption, source, latexState, body)
				]));
	});
var $jxxcarlson$meenylatex$Internal$Render2$renderRow = F4(
	function (mathJaxRenderOption, source, latexState, row) {
		if (row.$ === 'LatexList') {
			var row_ = row.a;
			return A2(
				$elm$html$Html$tr,
				_List_Nil,
				A2(
					$elm$core$List$map,
					A3($jxxcarlson$meenylatex$Internal$Render2$renderCell, mathJaxRenderOption, source, latexState),
					row_));
		} else {
			return A2($elm$html$Html$tr, _List_Nil, _List_Nil);
		}
	});
var $jxxcarlson$meenylatex$Internal$Render2$renderSMacro = F7(
	function (mathJaxRenderOption, source, latexState, name, optArgs, args, le) {
		var _v1 = A2(
			$elm$core$Dict$get,
			name,
			$jxxcarlson$meenylatex$Internal$Render2$cyclic$renderSMacroDict());
		if (_v1.$ === 'Just') {
			var f = _v1.a;
			return A6(f, mathJaxRenderOption, source, latexState, optArgs, args, le);
		} else {
			return A7($jxxcarlson$meenylatex$Internal$Render2$reproduceSMacro, mathJaxRenderOption, source, name, latexState, optArgs, args, le);
		}
	});
var $jxxcarlson$meenylatex$Internal$Render2$renderStrong = F4(
	function (mathJaxRenderOption, source, latexState, args) {
		return A2(
			$elm$html$Html$strong,
			_List_Nil,
			_List_fromArray(
				[
					$jxxcarlson$meenylatex$Internal$Render2$oneSpace,
					A5($jxxcarlson$meenylatex$Internal$Render2$renderArg, mathJaxRenderOption, source, 0, latexState, args)
				]));
	});
var $jxxcarlson$meenylatex$Internal$Render2$renderTableBody = F4(
	function (mathJaxRenderOption, source, latexState, body) {
		if (body.$ === 'LatexList') {
			var body_ = body.a;
			return A2(
				$elm$html$Html$tbody,
				_List_Nil,
				A2(
					$elm$core$List$map,
					A3($jxxcarlson$meenylatex$Internal$Render2$renderRow, mathJaxRenderOption, source, latexState),
					body_));
		} else {
			return A2($elm$html$Html$tbody, _List_Nil, _List_Nil);
		}
	});
var $jxxcarlson$meenylatex$Internal$Render2$renderTabular = F4(
	function (mathJaxRenderOption, source, latexState, body) {
		return A2(
			$elm$html$Html$table,
			_List_fromArray(
				[
					A2($elm$html$Html$Attributes$style, 'border-spacing', '20px 10px'),
					A2($elm$html$Html$Attributes$style, 'margin-left', '-20px')
				]),
			_List_fromArray(
				[
					A4($jxxcarlson$meenylatex$Internal$Render2$renderTableBody, mathJaxRenderOption, source, latexState, body)
				]));
	});
var $jxxcarlson$meenylatex$Internal$Render2$renderTexArg = F4(
	function (mathJaxRenderOption, source, latexState, args) {
		return A2(
			$elm$html$Html$span,
			_List_Nil,
			_List_fromArray(
				[
					$elm$html$Html$text('{'),
					A5($jxxcarlson$meenylatex$Internal$Render2$renderArg, mathJaxRenderOption, source, 0, latexState, args),
					$elm$html$Html$text('}')
				]));
	});
var $jxxcarlson$meenylatex$Internal$Render2$renderTheBibliography = F4(
	function (mathJaxRenderOption, source, latexState, body) {
		return A2(
			$elm$html$Html$div,
			_List_Nil,
			_List_fromArray(
				[
					A4($jxxcarlson$meenylatex$Internal$Render2$render, mathJaxRenderOption, source, latexState, body)
				]));
	});
var $jxxcarlson$meenylatex$Internal$Render2$renderTheoremLikeEnvironment = F6(
	function (mathJaxRenderOption, source, latexState, name, args, body) {
		var tno = A2($jxxcarlson$meenylatex$Internal$LatexState$getCounter, 'tno', latexState);
		var s1 = A2($jxxcarlson$meenylatex$Internal$LatexState$getCounter, 's1', latexState);
		var tnoString = (s1 > 0) ? (' ' + ($elm$core$String$fromInt(s1) + ('.' + $elm$core$String$fromInt(tno)))) : (' ' + $elm$core$String$fromInt(tno));
		var r = A4($jxxcarlson$meenylatex$Internal$Render2$render, mathJaxRenderOption, source, latexState, body);
		var eqno = A2($jxxcarlson$meenylatex$Internal$LatexState$getCounter, 'eqno', latexState);
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('environment')
				]),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$strong,
					_List_Nil,
					_List_fromArray(
						[
							$elm$html$Html$text(
							_Utils_ap(
								$jxxcarlson$meenylatex$Internal$Utility$capitalize(name),
								tnoString))
						])),
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('italic')
						]),
					_List_fromArray(
						[r]))
				]));
	});
var $jxxcarlson$meenylatex$Internal$Render2$reproduceMacro = F6(
	function (mathJaxRenderOption, source, name, latexState, optArgs, args) {
		var renderedArgs = A2(
			$elm$core$List$map,
			$jxxcarlson$meenylatex$Internal$Render2$enclose,
			A4($jxxcarlson$meenylatex$Internal$Render2$renderArgList, mathJaxRenderOption, source, latexState, args));
		return A2(
			$elm$html$Html$span,
			_List_fromArray(
				[
					A2($elm$html$Html$Attributes$style, 'color', 'red')
				]),
			_Utils_ap(
				_List_fromArray(
					[
						$elm$html$Html$text('\\' + name)
					]),
				renderedArgs));
	});
var $jxxcarlson$meenylatex$Internal$Render2$reproduceSMacro = F7(
	function (mathJaxRenderOption, source, name, latexState, optArgs, args, le) {
		var renderedOptArgs = A2(
			$elm$core$List$map,
			$jxxcarlson$meenylatex$Internal$Render2$enclose,
			A4($jxxcarlson$meenylatex$Internal$Render2$renderArgList, mathJaxRenderOption, source, latexState, optArgs));
		var renderedLe = $jxxcarlson$meenylatex$Internal$Render2$enclose(
			A4($jxxcarlson$meenylatex$Internal$Render2$render, mathJaxRenderOption, source, latexState, le));
		var renderedArgs = A2(
			$elm$core$List$map,
			$jxxcarlson$meenylatex$Internal$Render2$enclose,
			A4($jxxcarlson$meenylatex$Internal$Render2$renderArgList, mathJaxRenderOption, source, latexState, args));
		return A2(
			$elm$html$Html$span,
			_List_Nil,
			_Utils_ap(
				_List_fromArray(
					[
						$elm$html$Html$text('\\' + name)
					]),
				_Utils_ap(
					renderedOptArgs,
					_Utils_ap(
						renderedArgs,
						_List_fromArray(
							[renderedLe])))));
	});
function $jxxcarlson$meenylatex$Internal$Render2$cyclic$renderEnvironmentDict() {
	return $elm$core$Dict$fromList(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'align',
				F5(
					function (d, s, x, a, y) {
						return A4($jxxcarlson$meenylatex$Internal$Render2$renderAlignEnvironment, d, s, x, y);
					})),
				_Utils_Tuple2(
				'center',
				F5(
					function (d, s, x, a, y) {
						return A4($jxxcarlson$meenylatex$Internal$Render2$renderCenterEnvironment, d, s, x, y);
					})),
				_Utils_Tuple2(
				'comment',
				F5(
					function (d, s, x, a, y) {
						return A3($jxxcarlson$meenylatex$Internal$Render2$renderCommentEnvironment, s, x, y);
					})),
				_Utils_Tuple2(
				'defitem',
				F5(
					function (d, s, x, a, y) {
						return A5($jxxcarlson$meenylatex$Internal$Render2$renderDefItemEnvironment, d, s, x, a, y);
					})),
				_Utils_Tuple2(
				'enumerate',
				F5(
					function (d, s, x, a, y) {
						return A4($jxxcarlson$meenylatex$Internal$Render2$renderEnumerate, d, s, x, y);
					})),
				_Utils_Tuple2(
				'eqnarray',
				F5(
					function (d, s, x, a, y) {
						return A4($jxxcarlson$meenylatex$Internal$Render2$renderEqnArray, d, s, x, y);
					})),
				_Utils_Tuple2(
				'equation',
				F5(
					function (d, s, x, a, y) {
						return A4($jxxcarlson$meenylatex$Internal$Render2$renderEquationEnvironment, d, s, x, y);
					})),
				_Utils_Tuple2(
				'indent',
				F5(
					function (d, s, x, a, y) {
						return A4($jxxcarlson$meenylatex$Internal$Render2$renderIndentEnvironment, d, s, x, y);
					})),
				_Utils_Tuple2(
				'itemize',
				F5(
					function (d, s, x, a, y) {
						return A4($jxxcarlson$meenylatex$Internal$Render2$renderItemize, d, s, x, y);
					})),
				_Utils_Tuple2(
				'listing',
				F5(
					function (d, s, x, a, y) {
						return A3($jxxcarlson$meenylatex$Internal$Render2$renderListing, s, x, y);
					})),
				_Utils_Tuple2(
				'macros',
				F5(
					function (d, s, x, a, y) {
						return A4($jxxcarlson$meenylatex$Internal$Render2$renderMacros, d, s, x, y);
					})),
				_Utils_Tuple2(
				'maskforweb',
				F5(
					function (d, s, x, a, y) {
						return A3($jxxcarlson$meenylatex$Internal$Render2$renderCommentEnvironment, s, x, y);
					})),
				_Utils_Tuple2(
				'quotation',
				F5(
					function (d, s, x, a, y) {
						return A4($jxxcarlson$meenylatex$Internal$Render2$renderQuotation, d, s, x, y);
					})),
				_Utils_Tuple2(
				'tabular',
				F5(
					function (d, s, x, a, y) {
						return A4($jxxcarlson$meenylatex$Internal$Render2$renderTabular, d, s, x, y);
					})),
				_Utils_Tuple2(
				'thebibliography',
				F5(
					function (d, s, x, a, y) {
						return A4($jxxcarlson$meenylatex$Internal$Render2$renderTheBibliography, d, s, x, y);
					})),
				_Utils_Tuple2(
				'useforweb',
				F5(
					function (d, s, x, a, y) {
						return A4($jxxcarlson$meenylatex$Internal$Render2$renderUseForWeb, d, s, x, y);
					})),
				_Utils_Tuple2(
				'verbatim',
				F5(
					function (d, s, x, a, y) {
						return A3($jxxcarlson$meenylatex$Internal$Render2$renderVerbatim, s, x, y);
					})),
				_Utils_Tuple2(
				'verse',
				F5(
					function (d, s, x, a, y) {
						return A3($jxxcarlson$meenylatex$Internal$Render2$renderVerse, s, x, y);
					})),
				_Utils_Tuple2(
				'mathmacro',
				F5(
					function (d, s, x, a, y) {
						return A4($jxxcarlson$meenylatex$Internal$Render2$renderMathMacros, d, s, x, y);
					}))
			]));
}
function $jxxcarlson$meenylatex$Internal$Render2$cyclic$renderMacroDict() {
	return $elm$core$Dict$fromList(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'bigskip',
				F5(
					function (d, s, x, y, z) {
						return A3($jxxcarlson$meenylatex$Internal$Render2$renderBigSkip, s, x, z);
					})),
				_Utils_Tuple2(
				'medskip',
				F5(
					function (d, s, x, y, z) {
						return A3($jxxcarlson$meenylatex$Internal$Render2$renderMedSkip, s, x, z);
					})),
				_Utils_Tuple2(
				'smallskip',
				F5(
					function (d, s, x, y, z) {
						return A3($jxxcarlson$meenylatex$Internal$Render2$renderSmallSkip, s, x, z);
					})),
				_Utils_Tuple2(
				'cite',
				F5(
					function (d, s, x, y, z) {
						return A3($jxxcarlson$meenylatex$Internal$Render2$renderCite, s, x, z);
					})),
				_Utils_Tuple2(
				'dollar',
				F5(
					function (d, s, x, y, z) {
						return A3($jxxcarlson$meenylatex$Internal$Render2$renderDollar, s, x, z);
					})),
				_Utils_Tuple2(
				'texbegin',
				F5(
					function (d, s, x, y, z) {
						return A3($jxxcarlson$meenylatex$Internal$Render2$renderBegin, s, x, z);
					})),
				_Utils_Tuple2(
				'texend',
				F5(
					function (d, s, x, y, z) {
						return A3($jxxcarlson$meenylatex$Internal$Render2$renderEnd, s, x, z);
					})),
				_Utils_Tuple2(
				'percent',
				F5(
					function (d, s, x, y, z) {
						return A3($jxxcarlson$meenylatex$Internal$Render2$renderPercent, s, x, z);
					})),
				_Utils_Tuple2(
				'code',
				F5(
					function (d, s, x, y, z) {
						return A4($jxxcarlson$meenylatex$Internal$Render2$renderCode, d, s, x, z);
					})),
				_Utils_Tuple2(
				'ellie',
				F5(
					function (d, s, x, y, z) {
						return A3($jxxcarlson$meenylatex$Internal$Render2$renderEllie, s, x, z);
					})),
				_Utils_Tuple2(
				'emph',
				F5(
					function (d, s, x, y, z) {
						return A4($jxxcarlson$meenylatex$Internal$Render2$renderItalic, d, s, x, z);
					})),
				_Utils_Tuple2(
				'eqref',
				F5(
					function (d, s, x, y, z) {
						return A3($jxxcarlson$meenylatex$Internal$Render2$renderEqRef, s, x, z);
					})),
				_Utils_Tuple2(
				'href',
				F5(
					function (d, s, x, y, z) {
						return A3($jxxcarlson$meenylatex$Internal$Render2$renderHRef, s, x, z);
					})),
				_Utils_Tuple2(
				'iframe',
				F5(
					function (d, s, x, y, z) {
						return A3($jxxcarlson$meenylatex$Internal$Render2$renderIFrame, s, x, z);
					})),
				_Utils_Tuple2(
				'image',
				F5(
					function (d, s, x, y, z) {
						return A3($jxxcarlson$meenylatex$Internal$Render2$renderImage, s, x, z);
					})),
				_Utils_Tuple2(
				'imageref',
				F5(
					function (d, s, x, y, z) {
						return A3($jxxcarlson$meenylatex$Internal$Render2$renderImageRef, s, x, z);
					})),
				_Utils_Tuple2(
				'index',
				F5(
					function (d, s, x, y, z) {
						return A3($jxxcarlson$meenylatex$Internal$Render2$renderIndex, s, x, z);
					})),
				_Utils_Tuple2(
				'italic',
				F5(
					function (d, s, x, y, z) {
						return A4($jxxcarlson$meenylatex$Internal$Render2$renderItalic, d, s, x, z);
					})),
				_Utils_Tuple2(
				'label',
				F5(
					function (d, s, x, y, z) {
						return A3($jxxcarlson$meenylatex$Internal$Render2$renderLabel, s, x, z);
					})),
				_Utils_Tuple2(
				'maintableofcontents',
				F5(
					function (d, s, x, y, z) {
						return A3($jxxcarlson$meenylatex$Internal$Render2$renderMainTableOfContents, s, x, z);
					})),
				_Utils_Tuple2(
				'maketitle',
				F5(
					function (d, s, x, y, z) {
						return A3($jxxcarlson$meenylatex$Internal$Render2$renderMakeTitle, s, x, z);
					})),
				_Utils_Tuple2(
				'mdash',
				F5(
					function (d, s, x, y, z) {
						return A3($jxxcarlson$meenylatex$Internal$Render2$renderMdash, s, x, z);
					})),
				_Utils_Tuple2(
				'ndash',
				F5(
					function (d, s, x, y, z) {
						return A3($jxxcarlson$meenylatex$Internal$Render2$renderNdash, s, x, z);
					})),
				_Utils_Tuple2(
				'underscore',
				F5(
					function (d, s, x, y, z) {
						return A3($jxxcarlson$meenylatex$Internal$Render2$renderUnderscore, s, x, z);
					})),
				_Utils_Tuple2(
				'backslash',
				F5(
					function (d, s, x, y, z) {
						return A4($jxxcarlson$meenylatex$Internal$Render2$renderBackslash, d, s, x, z);
					})),
				_Utils_Tuple2(
				'texarg',
				F5(
					function (d, s, x, y, z) {
						return A4($jxxcarlson$meenylatex$Internal$Render2$renderTexArg, d, s, x, z);
					})),
				_Utils_Tuple2(
				'ref',
				F5(
					function (d, s, x, y, z) {
						return A3($jxxcarlson$meenylatex$Internal$Render2$renderRef, s, x, z);
					})),
				_Utils_Tuple2(
				'medskip',
				F5(
					function (d, s, x, y, z) {
						return A3($jxxcarlson$meenylatex$Internal$Render2$renderMedSkip, s, x, z);
					})),
				_Utils_Tuple2(
				'smallskip',
				F5(
					function (d, s, x, y, z) {
						return A3($jxxcarlson$meenylatex$Internal$Render2$renderSmallSkip, s, x, z);
					})),
				_Utils_Tuple2(
				'section',
				F5(
					function (d, s, x, y, z) {
						return A3($jxxcarlson$meenylatex$Internal$Render2$renderSection, s, x, z);
					})),
				_Utils_Tuple2(
				'section*',
				F5(
					function (d, s, x, y, z) {
						return A3($jxxcarlson$meenylatex$Internal$Render2$renderSectionStar, s, x, z);
					})),
				_Utils_Tuple2(
				'subsection',
				F5(
					function (d, s, x, y, z) {
						return A3($jxxcarlson$meenylatex$Internal$Render2$renderSubsection, s, x, z);
					})),
				_Utils_Tuple2(
				'subsection*',
				F5(
					function (d, s, x, y, z) {
						return A3($jxxcarlson$meenylatex$Internal$Render2$renderSubsectionStar, s, x, z);
					})),
				_Utils_Tuple2(
				'subsubsection',
				F5(
					function (d, s, x, y, z) {
						return A3($jxxcarlson$meenylatex$Internal$Render2$renderSubSubsection, s, x, z);
					})),
				_Utils_Tuple2(
				'subsubsection*',
				F5(
					function (d, s, x, y, z) {
						return A3($jxxcarlson$meenylatex$Internal$Render2$renderSubSubsectionStar, s, x, z);
					})),
				_Utils_Tuple2(
				'setcounter',
				F5(
					function (d, s, x, y, z) {
						return A3($jxxcarlson$meenylatex$Internal$Render2$renderSetCounter, s, x, z);
					})),
				_Utils_Tuple2(
				'subheading',
				F5(
					function (d, s, x, y, z) {
						return A3($jxxcarlson$meenylatex$Internal$Render2$renderSubheading, s, x, z);
					})),
				_Utils_Tuple2(
				'tableofcontents',
				F5(
					function (d, s, x, y, z) {
						return A3($jxxcarlson$meenylatex$Internal$Render2$renderTableOfContents, s, x, z);
					})),
				_Utils_Tuple2(
				'innertableofcontents',
				F5(
					function (d, s, x, y, z) {
						return A3($jxxcarlson$meenylatex$Internal$Render2$renderInnerTableOfContents, s, x, z);
					})),
				_Utils_Tuple2(
				'red',
				F5(
					function (d, s, x, y, z) {
						return A3($jxxcarlson$meenylatex$Internal$Render2$renderRed, s, x, z);
					})),
				_Utils_Tuple2(
				'blue',
				F5(
					function (d, s, x, y, z) {
						return A3($jxxcarlson$meenylatex$Internal$Render2$renderBlue, s, x, z);
					})),
				_Utils_Tuple2(
				'highlight',
				F5(
					function (d, s, x, y, z) {
						return A3($jxxcarlson$meenylatex$Internal$Render2$renderHighlighted, s, x, z);
					})),
				_Utils_Tuple2(
				'strike',
				F5(
					function (d, s, x, y, z) {
						return A3($jxxcarlson$meenylatex$Internal$Render2$renderStrikeThrough, s, x, z);
					})),
				_Utils_Tuple2(
				'term',
				F5(
					function (d, s, x, y, z) {
						return A3($jxxcarlson$meenylatex$Internal$Render2$renderTerm, s, x, z);
					})),
				_Utils_Tuple2(
				'xlink',
				F5(
					function (d, s, x, y, z) {
						return A3($jxxcarlson$meenylatex$Internal$Render2$renderXLink, s, x, z);
					})),
				_Utils_Tuple2(
				'xlinkPublic',
				F5(
					function (d, s, x, y, z) {
						return A3($jxxcarlson$meenylatex$Internal$Render2$renderXLinkPublic, s, x, z);
					})),
				_Utils_Tuple2(
				'documentTitle',
				F5(
					function (d, s, x, y, z) {
						return A3($jxxcarlson$meenylatex$Internal$Render2$renderDocumentTitle, s, x, z);
					})),
				_Utils_Tuple2(
				'title',
				F5(
					function (d, s, x, y, z) {
						return A2($jxxcarlson$meenylatex$Internal$Render2$renderTitle, x, z);
					})),
				_Utils_Tuple2(
				'author',
				F5(
					function (d, s, x, y, z) {
						return A3($jxxcarlson$meenylatex$Internal$Render2$renderAuthor, s, x, z);
					})),
				_Utils_Tuple2(
				'date',
				F5(
					function (d, s, x, y, z) {
						return A3($jxxcarlson$meenylatex$Internal$Render2$renderDate, s, x, z);
					})),
				_Utils_Tuple2(
				'revision',
				F5(
					function (d, s, x, y, z) {
						return A3($jxxcarlson$meenylatex$Internal$Render2$renderRevision, s, x, z);
					})),
				_Utils_Tuple2(
				'email',
				F5(
					function (d, s, x, y, z) {
						return A3($jxxcarlson$meenylatex$Internal$Render2$renderEmail, s, x, z);
					})),
				_Utils_Tuple2(
				'setdocid',
				F5(
					function (d, s, x, y, z) {
						return A3($jxxcarlson$meenylatex$Internal$Render2$renderSetDocId, s, x, z);
					})),
				_Utils_Tuple2(
				'setclient',
				F5(
					function (d, s, x, y, z) {
						return A3($jxxcarlson$meenylatex$Internal$Render2$renderSetClient, s, x, z);
					})),
				_Utils_Tuple2(
				'strong',
				F5(
					function (d, s, x, y, z) {
						return A4($jxxcarlson$meenylatex$Internal$Render2$renderStrong, d, s, x, z);
					}))
			]));
}
function $jxxcarlson$meenylatex$Internal$Render2$cyclic$renderSMacroDict() {
	return $elm$core$Dict$fromList(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'bibitem',
				F6(
					function (mathJaxRenderOption, source, latexState, optArgs, args, body) {
						return A6($jxxcarlson$meenylatex$Internal$Render2$renderBibItem, mathJaxRenderOption, source, latexState, optArgs, args, body);
					}))
			]));
}
try {
	var $jxxcarlson$meenylatex$Internal$Render2$renderEnvironmentDict = $jxxcarlson$meenylatex$Internal$Render2$cyclic$renderEnvironmentDict();
	$jxxcarlson$meenylatex$Internal$Render2$cyclic$renderEnvironmentDict = function () {
		return $jxxcarlson$meenylatex$Internal$Render2$renderEnvironmentDict;
	};
	var $jxxcarlson$meenylatex$Internal$Render2$renderMacroDict = $jxxcarlson$meenylatex$Internal$Render2$cyclic$renderMacroDict();
	$jxxcarlson$meenylatex$Internal$Render2$cyclic$renderMacroDict = function () {
		return $jxxcarlson$meenylatex$Internal$Render2$renderMacroDict;
	};
	var $jxxcarlson$meenylatex$Internal$Render2$renderSMacroDict = $jxxcarlson$meenylatex$Internal$Render2$cyclic$renderSMacroDict();
	$jxxcarlson$meenylatex$Internal$Render2$cyclic$renderSMacroDict = function () {
		return $jxxcarlson$meenylatex$Internal$Render2$renderSMacroDict;
	};
} catch ($) {
	throw 'Some top-level definitions from `Internal.Render2` are causing infinite recursion:\n\n  ┌─────┐\n  │    environmentRenderer\n  │     ↓\n  │    render\n  │     ↓\n  │    renderArg\n  │     ↓\n  │    renderArgList\n  │     ↓\n  │    renderBackslash\n  │     ↓\n  │    renderBibItem\n  │     ↓\n  │    renderCell\n  │     ↓\n  │    renderCenterEnvironment\n  │     ↓\n  │    renderCode\n  │     ↓\n  │    renderDefItemEnvironment\n  │     ↓\n  │    renderDefaultEnvironment\n  │     ↓\n  │    renderDefaultEnvironment2\n  │     ↓\n  │    renderEnumerate\n  │     ↓\n  │    renderEnvironment\n  │     ↓\n  │    renderEnvironmentDict\n  │     ↓\n  │    renderIndentEnvironment\n  │     ↓\n  │    renderItalic\n  │     ↓\n  │    renderItem\n  │     ↓\n  │    renderItemize\n  │     ↓\n  │    renderLatexList\n  │     ↓\n  │    renderMacro\n  │     ↓\n  │    renderMacroDict\n  │     ↓\n  │    renderQuotation\n  │     ↓\n  │    renderRow\n  │     ↓\n  │    renderSMacro\n  │     ↓\n  │    renderSMacroDict\n  │     ↓\n  │    renderStrong\n  │     ↓\n  │    renderTableBody\n  │     ↓\n  │    renderTabular\n  │     ↓\n  │    renderTexArg\n  │     ↓\n  │    renderTheBibliography\n  │     ↓\n  │    renderTheoremLikeEnvironment\n  │     ↓\n  │    reproduceMacro\n  │     ↓\n  │    reproduceSMacro\n  └─────┘\n\nThese errors are very tricky, so read https://elm-lang.org/0.19.1/bad-recursion to learn how to fix it!';}
var $jxxcarlson$meenylatex$Internal$Paragraph$Start = {$: 'Start'};
var $jxxcarlson$meenylatex$Internal$Stack$Stack = function (a) {
	return {$: 'Stack', a: a};
};
var $jxxcarlson$meenylatex$Internal$Stack$empty = $jxxcarlson$meenylatex$Internal$Stack$Stack(_List_Nil);
var $jxxcarlson$meenylatex$Internal$Paragraph$fixLine = function (line) {
	return (line === '') ? '\n' : line;
};
var $jxxcarlson$meenylatex$Internal$Paragraph$Error = {$: 'Error'};
var $jxxcarlson$meenylatex$Internal$Paragraph$IgnoreLine = {$: 'IgnoreLine'};
var $jxxcarlson$meenylatex$Internal$Paragraph$InBlock = function (a) {
	return {$: 'InBlock', a: a};
};
var $jxxcarlson$meenylatex$Internal$Paragraph$InMathBlock = {$: 'InMathBlock'};
var $jxxcarlson$meenylatex$Internal$Paragraph$InParagraph = {$: 'InParagraph'};
var $elm$core$String$endsWith = _String_endsWith;
var $jxxcarlson$meenylatex$Internal$Paragraph$BeginBlock = function (a) {
	return {$: 'BeginBlock', a: a};
};
var $jxxcarlson$meenylatex$Internal$Paragraph$Blank = {$: 'Blank'};
var $jxxcarlson$meenylatex$Internal$Paragraph$EndBlock = function (a) {
	return {$: 'EndBlock', a: a};
};
var $jxxcarlson$meenylatex$Internal$Paragraph$MathBlock = {$: 'MathBlock'};
var $jxxcarlson$meenylatex$Internal$Paragraph$Text = {$: 'Text'};
var $jxxcarlson$meenylatex$Internal$Paragraph$getBeginArg = function (line) {
	var parseResult = A2($elm$parser$Parser$Advanced$run, $jxxcarlson$meenylatex$Internal$Parser$envName, line);
	var arg = function () {
		if (parseResult.$ === 'Ok') {
			var word = parseResult.a;
			return word;
		} else {
			return '';
		}
	}();
	return arg;
};
var $jxxcarlson$meenylatex$Internal$Parser$ExpectingEndAndRightBrace = {$: 'ExpectingEndAndRightBrace'};
var $jxxcarlson$meenylatex$Internal$Parser$endWord = A2(
	$elm$parser$Parser$Advanced$keeper,
	A2(
		$elm$parser$Parser$Advanced$ignorer,
		A2(
			$elm$parser$Parser$Advanced$ignorer,
			$elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity),
			$jxxcarlson$meenylatex$Internal$Parser$spaces),
		$elm$parser$Parser$Advanced$symbol(
			A2($elm$parser$Parser$Advanced$Token, '\\end{', $jxxcarlson$meenylatex$Internal$Parser$ExpectingEndAndRightBrace))),
	A2(
		$elm$parser$Parser$Advanced$ignorer,
		A2($jxxcarlson$meenylatex$Internal$Parser$parseToSymbol, $jxxcarlson$meenylatex$Internal$Parser$ExpectingEndAndRightBrace, '}'),
		$jxxcarlson$meenylatex$Internal$Parser$ws));
var $jxxcarlson$meenylatex$Internal$Paragraph$getEndArg = function (line) {
	var parseResult = A2($elm$parser$Parser$Advanced$run, $jxxcarlson$meenylatex$Internal$Parser$endWord, line);
	var arg = function () {
		if (parseResult.$ === 'Ok') {
			var word = parseResult.a;
			return word;
		} else {
			return '';
		}
	}();
	return arg;
};
var $jxxcarlson$meenylatex$Internal$Paragraph$lineType = function (line) {
	return (line === '') ? $jxxcarlson$meenylatex$Internal$Paragraph$Blank : (A2($elm$core$String$startsWith, '\\begin', line) ? $jxxcarlson$meenylatex$Internal$Paragraph$BeginBlock(
		$jxxcarlson$meenylatex$Internal$Paragraph$getBeginArg(line)) : (A2($elm$core$String$startsWith, '\\end', line) ? $jxxcarlson$meenylatex$Internal$Paragraph$EndBlock(
		$jxxcarlson$meenylatex$Internal$Paragraph$getEndArg(line)) : (A2($elm$core$String$startsWith, '$$', line) ? $jxxcarlson$meenylatex$Internal$Paragraph$MathBlock : $jxxcarlson$meenylatex$Internal$Paragraph$Text)));
};
var $elm$core$List$tail = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return $elm$core$Maybe$Just(xs);
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $jxxcarlson$meenylatex$Internal$Stack$pop = function (_v0) {
	var list = _v0.a;
	var _v1 = $elm$core$List$tail(list);
	if (_v1.$ === 'Nothing') {
		return $jxxcarlson$meenylatex$Internal$Stack$Stack(_List_Nil);
	} else {
		var tail = _v1.a;
		return $jxxcarlson$meenylatex$Internal$Stack$Stack(tail);
	}
};
var $jxxcarlson$meenylatex$Internal$Stack$push = F2(
	function (element, _v0) {
		var list = _v0.a;
		return $jxxcarlson$meenylatex$Internal$Stack$Stack(
			A2($elm$core$List$cons, element, list));
	});
var $jxxcarlson$meenylatex$Internal$Stack$top = function (_v0) {
	var list = _v0.a;
	return $elm$core$List$head(list);
};
var $jxxcarlson$meenylatex$Internal$Paragraph$getNextState = F2(
	function (line, _v0) {
		var parserState = _v0.a;
		var stack = _v0.b;
		var _v1 = _Utils_Tuple2(
			parserState,
			$jxxcarlson$meenylatex$Internal$Paragraph$lineType(line));
		_v1$23:
		while (true) {
			switch (_v1.a.$) {
				case 'Start':
					switch (_v1.b.$) {
						case 'Blank':
							var _v2 = _v1.a;
							var _v3 = _v1.b;
							return _Utils_Tuple2($jxxcarlson$meenylatex$Internal$Paragraph$Start, stack);
						case 'Text':
							var _v4 = _v1.a;
							var _v5 = _v1.b;
							return _Utils_Tuple2($jxxcarlson$meenylatex$Internal$Paragraph$InParagraph, stack);
						case 'BeginBlock':
							var _v6 = _v1.a;
							var arg = _v1.b.a;
							return _Utils_Tuple2(
								$jxxcarlson$meenylatex$Internal$Paragraph$InBlock(arg),
								A2($jxxcarlson$meenylatex$Internal$Stack$push, arg, stack));
						case 'MathBlock':
							var _v7 = _v1.a;
							var _v8 = _v1.b;
							return A2(
								$elm$core$String$endsWith,
								'$$',
								A2($elm$core$String$dropLeft, 2, line)) ? _Utils_Tuple2($jxxcarlson$meenylatex$Internal$Paragraph$Start, stack) : _Utils_Tuple2($jxxcarlson$meenylatex$Internal$Paragraph$InMathBlock, stack);
						case 'Ignore':
							var _v9 = _v1.a;
							var _v10 = _v1.b;
							return _Utils_Tuple2($jxxcarlson$meenylatex$Internal$Paragraph$IgnoreLine, stack);
						default:
							break _v1$23;
					}
				case 'IgnoreLine':
					switch (_v1.b.$) {
						case 'Blank':
							var _v11 = _v1.a;
							var _v12 = _v1.b;
							return _Utils_Tuple2($jxxcarlson$meenylatex$Internal$Paragraph$Start, stack);
						case 'Text':
							var _v13 = _v1.a;
							var _v14 = _v1.b;
							return _Utils_Tuple2($jxxcarlson$meenylatex$Internal$Paragraph$InParagraph, stack);
						case 'BeginBlock':
							var _v15 = _v1.a;
							var arg = _v1.b.a;
							return _Utils_Tuple2(
								$jxxcarlson$meenylatex$Internal$Paragraph$InBlock(arg),
								A2($jxxcarlson$meenylatex$Internal$Stack$push, arg, stack));
						case 'MathBlock':
							var _v16 = _v1.a;
							var _v17 = _v1.b;
							return _Utils_Tuple2($jxxcarlson$meenylatex$Internal$Paragraph$InMathBlock, stack);
						default:
							break _v1$23;
					}
				case 'InBlock':
					switch (_v1.b.$) {
						case 'Blank':
							var arg = _v1.a.a;
							var _v18 = _v1.b;
							return _Utils_Tuple2(
								$jxxcarlson$meenylatex$Internal$Paragraph$InBlock(arg),
								stack);
						case 'Text':
							var arg = _v1.a.a;
							var _v19 = _v1.b;
							return _Utils_Tuple2(
								$jxxcarlson$meenylatex$Internal$Paragraph$InBlock(arg),
								stack);
						case 'MathBlock':
							var arg = _v1.a.a;
							var _v20 = _v1.b;
							return _Utils_Tuple2($jxxcarlson$meenylatex$Internal$Paragraph$InMathBlock, stack);
						case 'BeginBlock':
							var arg = _v1.a.a;
							var arg2 = _v1.b.a;
							return _Utils_Tuple2(
								$jxxcarlson$meenylatex$Internal$Paragraph$InBlock(arg),
								A2($jxxcarlson$meenylatex$Internal$Stack$push, arg2, stack));
						case 'EndBlock':
							var arg1 = _v1.a.a;
							var arg2 = _v1.b.a;
							var _v21 = _Utils_Tuple2(
								$jxxcarlson$meenylatex$Internal$Stack$pop(stack),
								line);
							var nextStack = _v21.a;
							var line_ = _v21.b;
							var _v22 = $jxxcarlson$meenylatex$Internal$Stack$top(nextStack);
							if (_v22.$ === 'Nothing') {
								return _Utils_Tuple2($jxxcarlson$meenylatex$Internal$Paragraph$Start, nextStack);
							} else {
								var arg = _v22.a;
								return _Utils_Tuple2(
									$jxxcarlson$meenylatex$Internal$Paragraph$InBlock(arg),
									nextStack);
							}
						default:
							break _v1$23;
					}
				case 'InParagraph':
					switch (_v1.b.$) {
						case 'Text':
							var _v23 = _v1.a;
							var _v24 = _v1.b;
							return _Utils_Tuple2($jxxcarlson$meenylatex$Internal$Paragraph$InParagraph, stack);
						case 'BeginBlock':
							var _v25 = _v1.a;
							var str = _v1.b.a;
							return _Utils_Tuple2(
								$jxxcarlson$meenylatex$Internal$Paragraph$InParagraph,
								A2($jxxcarlson$meenylatex$Internal$Stack$push, str, stack));
						case 'MathBlock':
							var _v26 = _v1.a;
							var _v27 = _v1.b;
							return _Utils_Tuple2($jxxcarlson$meenylatex$Internal$Paragraph$InMathBlock, stack);
						case 'EndBlock':
							var _v28 = _v1.a;
							var arg = _v1.b.a;
							return _Utils_Tuple2($jxxcarlson$meenylatex$Internal$Paragraph$Error, stack);
						case 'Blank':
							var _v29 = _v1.a;
							var _v30 = _v1.b;
							return _Utils_Tuple2($jxxcarlson$meenylatex$Internal$Paragraph$Start, stack);
						default:
							break _v1$23;
					}
				case 'InMathBlock':
					switch (_v1.b.$) {
						case 'BeginBlock':
							var _v31 = _v1.a;
							var str = _v1.b.a;
							return _Utils_Tuple2($jxxcarlson$meenylatex$Internal$Paragraph$InMathBlock, stack);
						case 'EndBlock':
							var _v32 = _v1.a;
							var str = _v1.b.a;
							return _Utils_Tuple2($jxxcarlson$meenylatex$Internal$Paragraph$InMathBlock, stack);
						case 'MathBlock':
							var _v33 = _v1.a;
							var _v34 = _v1.b;
							return _Utils_Tuple2($jxxcarlson$meenylatex$Internal$Paragraph$Start, stack);
						default:
							var _v35 = _v1.a;
							return A2(
								$elm$core$String$endsWith,
								'$$',
								A2($elm$core$String$dropLeft, 2, line)) ? _Utils_Tuple2($jxxcarlson$meenylatex$Internal$Paragraph$Start, stack) : ((line === '') ? _Utils_Tuple2($jxxcarlson$meenylatex$Internal$Paragraph$Start, stack) : _Utils_Tuple2($jxxcarlson$meenylatex$Internal$Paragraph$InMathBlock, stack));
					}
				default:
					break _v1$23;
			}
		}
		return _Utils_Tuple2($jxxcarlson$meenylatex$Internal$Paragraph$Error, stack);
	});
var $jxxcarlson$meenylatex$Internal$Paragraph$joinLines = F2(
	function (a, b) {
		var _v0 = _Utils_Tuple2(a, b);
		_v0$1:
		while (true) {
			_v0$2:
			while (true) {
				switch (_v0.a) {
					case '':
						return b;
					case '\n':
						switch (_v0.b) {
							case '':
								break _v0$1;
							case '\n':
								break _v0$2;
							default:
								break _v0$2;
						}
					default:
						switch (_v0.b) {
							case '':
								break _v0$1;
							case '\n':
								return a + '\n';
							default:
								var aa = _v0.a;
								var bb = _v0.b;
								return aa + ('\n' + bb);
						}
				}
			}
			return '\n' + b;
		}
		return a;
	});
var $jxxcarlson$meenylatex$Internal$Paragraph$updateParserRecord = F2(
	function (line, parserRecord) {
		var _v0 = A2(
			$jxxcarlson$meenylatex$Internal$Paragraph$getNextState,
			line,
			_Utils_Tuple2(parserRecord.state, parserRecord.stack));
		var nextState = _v0.a;
		var nextStack = _v0.b;
		switch (nextState.$) {
			case 'Start':
				return _Utils_update(
					parserRecord,
					{
						currentParagraph: '',
						paragraphList: _Utils_ap(
							parserRecord.paragraphList,
							_List_fromArray(
								[
									A2($jxxcarlson$meenylatex$Internal$Paragraph$joinLines, parserRecord.currentParagraph, line)
								])),
						stack: nextStack,
						state: nextState
					});
			case 'InParagraph':
				return _Utils_update(
					parserRecord,
					{
						currentParagraph: A2($jxxcarlson$meenylatex$Internal$Paragraph$joinLines, parserRecord.currentParagraph, line),
						stack: nextStack,
						state: nextState
					});
			case 'InMathBlock':
				return _Utils_update(
					parserRecord,
					{
						currentParagraph: A2($jxxcarlson$meenylatex$Internal$Paragraph$joinLines, parserRecord.currentParagraph, line),
						stack: nextStack,
						state: nextState
					});
			case 'InBlock':
				var arg = nextState.a;
				return _Utils_update(
					parserRecord,
					{
						currentParagraph: A2(
							$jxxcarlson$meenylatex$Internal$Paragraph$joinLines,
							parserRecord.currentParagraph,
							$jxxcarlson$meenylatex$Internal$Paragraph$fixLine(line)),
						stack: nextStack,
						state: nextState
					});
			case 'IgnoreLine':
				return _Utils_update(
					parserRecord,
					{stack: nextStack, state: nextState});
			default:
				return _Utils_update(
					parserRecord,
					{stack: nextStack});
		}
	});
var $jxxcarlson$meenylatex$Internal$Paragraph$logicalParagraphParse = function (text) {
	return A3(
		$elm$core$List$foldl,
		$jxxcarlson$meenylatex$Internal$Paragraph$updateParserRecord,
		{currentParagraph: '', paragraphList: _List_Nil, stack: $jxxcarlson$meenylatex$Internal$Stack$empty, state: $jxxcarlson$meenylatex$Internal$Paragraph$Start},
		A2($elm$core$String$split, '\n', text + '\n'));
};
var $jxxcarlson$meenylatex$Internal$Paragraph$logicalParagraphify = function (text) {
	var lastState = $jxxcarlson$meenylatex$Internal$Paragraph$logicalParagraphParse(text);
	return A2(
		$elm$core$List$map,
		function (paragraph) {
			return $elm$core$String$trim(paragraph) + '\n\n';
		},
		A2(
			$elm$core$List$filter,
			function (x) {
				return x !== '';
			},
			_Utils_ap(
				lastState.paragraphList,
				_List_fromArray(
					[lastState.currentParagraph]))));
};
var $jxxcarlson$meenylatex$Internal$Render2$renderString = F3(
	function (mathJaxRenderOption, latexState, source) {
		var render_ = function (_v0) {
			var source_ = _v0.a;
			var ast = _v0.b;
			return A4($jxxcarlson$meenylatex$Internal$Render2$renderLatexList, mathJaxRenderOption, source_, latexState, ast);
		};
		var parse = function (paragraph) {
			return _Utils_Tuple2(
				paragraph,
				$jxxcarlson$meenylatex$Internal$Render2$spacify(
					$jxxcarlson$meenylatex$Internal$Parser$parse(paragraph)));
		};
		var paragraphs = $jxxcarlson$meenylatex$Internal$Paragraph$logicalParagraphify(source);
		return A2(
			$elm$html$Html$div,
			_List_Nil,
			A2(
				$elm$core$List$map,
				render_,
				A2($elm$core$List$map, parse, paragraphs)));
	});
var $elm$core$Dict$foldl = F3(
	function (func, acc, dict) {
		foldl:
		while (true) {
			if (dict.$ === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var key = dict.b;
				var value = dict.c;
				var left = dict.d;
				var right = dict.e;
				var $temp$func = func,
					$temp$acc = A3(
					func,
					key,
					value,
					A3($elm$core$Dict$foldl, func, acc, left)),
					$temp$dict = right;
				func = $temp$func;
				acc = $temp$acc;
				dict = $temp$dict;
				continue foldl;
			}
		}
	});
var $elm$core$Dict$singleton = F2(
	function (key, value) {
		return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, key, value, $elm$core$Dict$RBEmpty_elm_builtin, $elm$core$Dict$RBEmpty_elm_builtin);
	});
var $elm$core$Set$singleton = function (key) {
	return $elm$core$Set$Set_elm_builtin(
		A2($elm$core$Dict$singleton, key, _Utils_Tuple0));
};
var $elm$core$Dict$getMin = function (dict) {
	getMin:
	while (true) {
		if ((dict.$ === 'RBNode_elm_builtin') && (dict.d.$ === 'RBNode_elm_builtin')) {
			var left = dict.d;
			var $temp$dict = left;
			dict = $temp$dict;
			continue getMin;
		} else {
			return dict;
		}
	}
};
var $elm$core$Dict$moveRedLeft = function (dict) {
	if (((dict.$ === 'RBNode_elm_builtin') && (dict.d.$ === 'RBNode_elm_builtin')) && (dict.e.$ === 'RBNode_elm_builtin')) {
		if ((dict.e.d.$ === 'RBNode_elm_builtin') && (dict.e.d.a.$ === 'Red')) {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v1 = dict.d;
			var lClr = _v1.a;
			var lK = _v1.b;
			var lV = _v1.c;
			var lLeft = _v1.d;
			var lRight = _v1.e;
			var _v2 = dict.e;
			var rClr = _v2.a;
			var rK = _v2.b;
			var rV = _v2.c;
			var rLeft = _v2.d;
			var _v3 = rLeft.a;
			var rlK = rLeft.b;
			var rlV = rLeft.c;
			var rlL = rLeft.d;
			var rlR = rLeft.e;
			var rRight = _v2.e;
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				$elm$core$Dict$Red,
				rlK,
				rlV,
				A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight),
					rlL),
				A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, rK, rV, rlR, rRight));
		} else {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v4 = dict.d;
			var lClr = _v4.a;
			var lK = _v4.b;
			var lV = _v4.c;
			var lLeft = _v4.d;
			var lRight = _v4.e;
			var _v5 = dict.e;
			var rClr = _v5.a;
			var rK = _v5.b;
			var rV = _v5.c;
			var rLeft = _v5.d;
			var rRight = _v5.e;
			if (clr.$ === 'Black') {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight));
			} else {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight));
			}
		}
	} else {
		return dict;
	}
};
var $elm$core$Dict$moveRedRight = function (dict) {
	if (((dict.$ === 'RBNode_elm_builtin') && (dict.d.$ === 'RBNode_elm_builtin')) && (dict.e.$ === 'RBNode_elm_builtin')) {
		if ((dict.d.d.$ === 'RBNode_elm_builtin') && (dict.d.d.a.$ === 'Red')) {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v1 = dict.d;
			var lClr = _v1.a;
			var lK = _v1.b;
			var lV = _v1.c;
			var _v2 = _v1.d;
			var _v3 = _v2.a;
			var llK = _v2.b;
			var llV = _v2.c;
			var llLeft = _v2.d;
			var llRight = _v2.e;
			var lRight = _v1.e;
			var _v4 = dict.e;
			var rClr = _v4.a;
			var rK = _v4.b;
			var rV = _v4.c;
			var rLeft = _v4.d;
			var rRight = _v4.e;
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				$elm$core$Dict$Red,
				lK,
				lV,
				A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, llK, llV, llLeft, llRight),
				A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					lRight,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight)));
		} else {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v5 = dict.d;
			var lClr = _v5.a;
			var lK = _v5.b;
			var lV = _v5.c;
			var lLeft = _v5.d;
			var lRight = _v5.e;
			var _v6 = dict.e;
			var rClr = _v6.a;
			var rK = _v6.b;
			var rV = _v6.c;
			var rLeft = _v6.d;
			var rRight = _v6.e;
			if (clr.$ === 'Black') {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight));
			} else {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight));
			}
		}
	} else {
		return dict;
	}
};
var $elm$core$Dict$removeHelpPrepEQGT = F7(
	function (targetKey, dict, color, key, value, left, right) {
		if ((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Red')) {
			var _v1 = left.a;
			var lK = left.b;
			var lV = left.c;
			var lLeft = left.d;
			var lRight = left.e;
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				color,
				lK,
				lV,
				lLeft,
				A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, key, value, lRight, right));
		} else {
			_v2$2:
			while (true) {
				if ((right.$ === 'RBNode_elm_builtin') && (right.a.$ === 'Black')) {
					if (right.d.$ === 'RBNode_elm_builtin') {
						if (right.d.a.$ === 'Black') {
							var _v3 = right.a;
							var _v4 = right.d;
							var _v5 = _v4.a;
							return $elm$core$Dict$moveRedRight(dict);
						} else {
							break _v2$2;
						}
					} else {
						var _v6 = right.a;
						var _v7 = right.d;
						return $elm$core$Dict$moveRedRight(dict);
					}
				} else {
					break _v2$2;
				}
			}
			return dict;
		}
	});
var $elm$core$Dict$removeMin = function (dict) {
	if ((dict.$ === 'RBNode_elm_builtin') && (dict.d.$ === 'RBNode_elm_builtin')) {
		var color = dict.a;
		var key = dict.b;
		var value = dict.c;
		var left = dict.d;
		var lColor = left.a;
		var lLeft = left.d;
		var right = dict.e;
		if (lColor.$ === 'Black') {
			if ((lLeft.$ === 'RBNode_elm_builtin') && (lLeft.a.$ === 'Red')) {
				var _v3 = lLeft.a;
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					color,
					key,
					value,
					$elm$core$Dict$removeMin(left),
					right);
			} else {
				var _v4 = $elm$core$Dict$moveRedLeft(dict);
				if (_v4.$ === 'RBNode_elm_builtin') {
					var nColor = _v4.a;
					var nKey = _v4.b;
					var nValue = _v4.c;
					var nLeft = _v4.d;
					var nRight = _v4.e;
					return A5(
						$elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						$elm$core$Dict$removeMin(nLeft),
						nRight);
				} else {
					return $elm$core$Dict$RBEmpty_elm_builtin;
				}
			}
		} else {
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				color,
				key,
				value,
				$elm$core$Dict$removeMin(left),
				right);
		}
	} else {
		return $elm$core$Dict$RBEmpty_elm_builtin;
	}
};
var $elm$core$Dict$removeHelp = F2(
	function (targetKey, dict) {
		if (dict.$ === 'RBEmpty_elm_builtin') {
			return $elm$core$Dict$RBEmpty_elm_builtin;
		} else {
			var color = dict.a;
			var key = dict.b;
			var value = dict.c;
			var left = dict.d;
			var right = dict.e;
			if (_Utils_cmp(targetKey, key) < 0) {
				if ((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Black')) {
					var _v4 = left.a;
					var lLeft = left.d;
					if ((lLeft.$ === 'RBNode_elm_builtin') && (lLeft.a.$ === 'Red')) {
						var _v6 = lLeft.a;
						return A5(
							$elm$core$Dict$RBNode_elm_builtin,
							color,
							key,
							value,
							A2($elm$core$Dict$removeHelp, targetKey, left),
							right);
					} else {
						var _v7 = $elm$core$Dict$moveRedLeft(dict);
						if (_v7.$ === 'RBNode_elm_builtin') {
							var nColor = _v7.a;
							var nKey = _v7.b;
							var nValue = _v7.c;
							var nLeft = _v7.d;
							var nRight = _v7.e;
							return A5(
								$elm$core$Dict$balance,
								nColor,
								nKey,
								nValue,
								A2($elm$core$Dict$removeHelp, targetKey, nLeft),
								nRight);
						} else {
							return $elm$core$Dict$RBEmpty_elm_builtin;
						}
					}
				} else {
					return A5(
						$elm$core$Dict$RBNode_elm_builtin,
						color,
						key,
						value,
						A2($elm$core$Dict$removeHelp, targetKey, left),
						right);
				}
			} else {
				return A2(
					$elm$core$Dict$removeHelpEQGT,
					targetKey,
					A7($elm$core$Dict$removeHelpPrepEQGT, targetKey, dict, color, key, value, left, right));
			}
		}
	});
var $elm$core$Dict$removeHelpEQGT = F2(
	function (targetKey, dict) {
		if (dict.$ === 'RBNode_elm_builtin') {
			var color = dict.a;
			var key = dict.b;
			var value = dict.c;
			var left = dict.d;
			var right = dict.e;
			if (_Utils_eq(targetKey, key)) {
				var _v1 = $elm$core$Dict$getMin(right);
				if (_v1.$ === 'RBNode_elm_builtin') {
					var minKey = _v1.b;
					var minValue = _v1.c;
					return A5(
						$elm$core$Dict$balance,
						color,
						minKey,
						minValue,
						left,
						$elm$core$Dict$removeMin(right));
				} else {
					return $elm$core$Dict$RBEmpty_elm_builtin;
				}
			} else {
				return A5(
					$elm$core$Dict$balance,
					color,
					key,
					value,
					left,
					A2($elm$core$Dict$removeHelp, targetKey, right));
			}
		} else {
			return $elm$core$Dict$RBEmpty_elm_builtin;
		}
	});
var $elm$core$Dict$remove = F2(
	function (key, dict) {
		var _v0 = A2($elm$core$Dict$removeHelp, key, dict);
		if ((_v0.$ === 'RBNode_elm_builtin') && (_v0.a.$ === 'Red')) {
			var _v1 = _v0.a;
			var k = _v0.b;
			var v = _v0.c;
			var l = _v0.d;
			var r = _v0.e;
			return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, k, v, l, r);
		} else {
			var x = _v0;
			return x;
		}
	});
var $elm$core$Dict$update = F3(
	function (targetKey, alter, dictionary) {
		var _v0 = alter(
			A2($elm$core$Dict$get, targetKey, dictionary));
		if (_v0.$ === 'Just') {
			var value = _v0.a;
			return A3($elm$core$Dict$insert, targetKey, value, dictionary);
		} else {
			return A2($elm$core$Dict$remove, targetKey, dictionary);
		}
	});
var $Janiczek$elm_bidict$BiDict$fromDict = function (forward) {
	return $Janiczek$elm_bidict$BiDict$BiDict(
		{
			forward: forward,
			reverse: A3(
				$elm$core$Dict$foldl,
				F3(
					function (key, value, acc) {
						return A3(
							$elm$core$Dict$update,
							value,
							function (maybeKeys) {
								return $elm$core$Maybe$Just(
									function () {
										if (maybeKeys.$ === 'Nothing') {
											return $elm$core$Set$singleton(key);
										} else {
											var keys_ = maybeKeys.a;
											return A2($elm$core$Set$insert, key, keys_);
										}
									}());
							},
							acc);
					}),
				$elm$core$Dict$empty,
				forward)
		});
};
var $Janiczek$elm_bidict$BiDict$fromList = function (list) {
	return $Janiczek$elm_bidict$BiDict$fromDict(
		$elm$core$Dict$fromList(list));
};
var $jxxcarlson$meenylatex$Internal$SourceMap$generate = F2(
	function (idList, paragraphs) {
		return $Janiczek$elm_bidict$BiDict$fromList(
			A3(
				$elm$core$List$map2,
				F2(
					function (id, p) {
						return _Utils_Tuple2(id, p);
					}),
				paragraphs,
				idList));
	});
var $jxxcarlson$meenylatex$Internal$Differ$prefixer = F2(
	function (b, k) {
		return 'p.' + ($elm$core$String$fromInt(b) + ('.' + $elm$core$String$fromInt(k)));
	});
var $jxxcarlson$meenylatex$Internal$LatexDiffer$makeIdListWithSeed = F2(
	function (seed, paragraphs) {
		return A2(
			$elm$core$List$map,
			$jxxcarlson$meenylatex$Internal$Differ$prefixer(seed),
			A2(
				$elm$core$List$range,
				1,
				$elm$core$List$length(paragraphs)));
	});
var $elm_community$list_extra$List$Extra$getAt = F2(
	function (idx, xs) {
		return (idx < 0) ? $elm$core$Maybe$Nothing : $elm$core$List$head(
			A2($elm$core$List$drop, idx, xs));
	});
var $jxxcarlson$meenylatex$Internal$MathMacro$getArg = F2(
	function (k, list) {
		return A2(
			$elm$core$Maybe$withDefault,
			'',
			A2($elm_community$list_extra$List$Extra$getAt, k, list));
	});
var $jxxcarlson$meenylatex$Internal$MathMacro$replaceArg = F2(
	function (k, f) {
		return function (list) {
			return A3(
				$elm$core$String$replace,
				'#' + $elm$core$String$fromInt(k + 1),
				A2($jxxcarlson$meenylatex$Internal$MathMacro$getArg, k, list),
				f(list));
		};
	});
var $jxxcarlson$meenylatex$Internal$MathMacro$replaceArgs = F2(
	function (n, f) {
		return A3(
			$elm$core$List$foldl,
			$jxxcarlson$meenylatex$Internal$MathMacro$replaceArg,
			f,
			A2($elm$core$List$range, 0, n - 1));
	});
var $jxxcarlson$meenylatex$Internal$MathMacro$transform = F2(
	function (n, args) {
		return A2(
			$jxxcarlson$meenylatex$Internal$MathMacro$replaceArgs,
			n,
			function (str) {
				return function (list) {
					return str;
				};
			}(
				A2(
					$elm$core$Maybe$withDefault,
					'XXX',
					$elm$core$List$head(
						A2($elm$core$List$map, $jxxcarlson$meenylatex$Internal$MathMacro$toText_, args)))));
	});
var $jxxcarlson$meenylatex$Internal$MathMacro$makeEntry_ = F3(
	function (name, nargs, args) {
		var n = A2(
			$elm$core$Maybe$withDefault,
			0,
			$elm$core$String$toInt(nargs));
		return _Utils_Tuple2(
			name,
			A2($jxxcarlson$meenylatex$Internal$MathMacro$transform, n, args));
	});
var $jxxcarlson$meenylatex$Internal$MathMacro$makeEntry = function (expr) {
	if (expr.$ === 'NewCommand') {
		var name = expr.a;
		var nargs = expr.b;
		var args = expr.c;
		return $elm$core$Maybe$Just(
			A3($jxxcarlson$meenylatex$Internal$MathMacro$makeEntry_, name, nargs, args));
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $elm_community$maybe_extra$Maybe$Extra$cons = F2(
	function (item, list) {
		if (item.$ === 'Just') {
			var v = item.a;
			return A2($elm$core$List$cons, v, list);
		} else {
			return list;
		}
	});
var $elm_community$maybe_extra$Maybe$Extra$values = A2($elm$core$List$foldr, $elm_community$maybe_extra$Maybe$Extra$cons, _List_Nil);
var $jxxcarlson$meenylatex$Internal$MathMacro$makeMacroDict = function (str) {
	var _v0 = $jxxcarlson$meenylatex$Internal$MathMacro$parse(str);
	if (_v0.$ === 'Ok') {
		var list = _v0.a;
		return $elm$core$Dict$fromList(
			$elm_community$maybe_extra$Maybe$Extra$values(
				A2($elm$core$List$map, $jxxcarlson$meenylatex$Internal$MathMacro$makeEntry, list)));
	} else {
		return $elm$core$Dict$empty;
	}
};
var $jxxcarlson$meenylatex$Internal$ParserTools$latexList2List = function (latexExpression) {
	if (latexExpression.$ === 'LatexList') {
		var list = latexExpression.a;
		return list;
	} else {
		return _List_Nil;
	}
};
var $jxxcarlson$meenylatex$Internal$ParserTools$getMacroArgs = F2(
	function (macroName, latexExpression) {
		if (latexExpression.$ === 'Macro') {
			var name = latexExpression.a;
			var optArgs = latexExpression.b;
			var args = latexExpression.c;
			return _Utils_eq(name, macroName) ? A2($elm$core$List$map, $jxxcarlson$meenylatex$Internal$ParserTools$latexList2List, args) : _List_Nil;
		} else {
			return _List_Nil;
		}
	});
var $jxxcarlson$meenylatex$Internal$ParserTools$list2LeadingString = function (list) {
	var head_ = $elm$core$List$head(list);
	var value = function () {
		if (head_.$ === 'Just') {
			var value_ = head_.a;
			return value_;
		} else {
			return $jxxcarlson$meenylatex$Internal$Parser$LXString('');
		}
	}();
	if (value.$ === 'LXString') {
		var str = value.a;
		return str;
	} else {
		return '';
	}
};
var $jxxcarlson$meenylatex$Internal$ParserTools$getSimpleMacroArgs = F2(
	function (macroName, latexExpression) {
		return A2(
			$elm$core$List$map,
			$jxxcarlson$meenylatex$Internal$ParserTools$list2LeadingString,
			A2($jxxcarlson$meenylatex$Internal$ParserTools$getMacroArgs, macroName, latexExpression));
	});
var $jxxcarlson$meenylatex$Internal$ParserTools$getFirstMacroArg = F2(
	function (macroName, latexExpression) {
		var arg = $elm$core$List$head(
			A2($jxxcarlson$meenylatex$Internal$ParserTools$getSimpleMacroArgs, macroName, latexExpression));
		if (arg.$ === 'Just') {
			var value = arg.a;
			return value;
		} else {
			return '';
		}
	});
var $jxxcarlson$meenylatex$Internal$StateReducerHelpers2$getLabel = function (str) {
	var maybeMacro = A2(
		$elm$parser$Parser$Advanced$run,
		$jxxcarlson$meenylatex$Internal$Parser$macro($jxxcarlson$meenylatex$Internal$Parser$ws),
		$elm$core$String$trim(str));
	if (maybeMacro.$ === 'Ok') {
		var macro = maybeMacro.a;
		return A2($jxxcarlson$meenylatex$Internal$ParserTools$getFirstMacroArg, 'label', macro);
	} else {
		return '';
	}
};
var $elm$core$Maybe$map = F2(
	function (f, maybe) {
		if (maybe.$ === 'Just') {
			var value = maybe.a;
			return $elm$core$Maybe$Just(
				f(value));
		} else {
			return $elm$core$Maybe$Nothing;
		}
	});
var $jxxcarlson$meenylatex$Internal$LatexState$incrementCounter = F2(
	function (name, latexState) {
		var maybeInc = $elm$core$Maybe$map(
			function (x) {
				return x + 1;
			});
		var newCounters = A3($elm$core$Dict$update, name, maybeInc, latexState.counters);
		return _Utils_update(
			latexState,
			{counters: newCounters});
	});
var $jxxcarlson$meenylatex$Internal$LatexState$setCrossReference = F3(
	function (label, value, latexState) {
		var crossReferences = latexState.crossReferences;
		var newCrossReferences = A3($elm$core$Dict$insert, label, value, crossReferences);
		return _Utils_update(
			latexState,
			{crossReferences: newCrossReferences});
	});
var $jxxcarlson$meenylatex$Internal$StateReducerHelpers2$setEquationNumber = F2(
	function (body, latexState) {
		var latexState1 = A2($jxxcarlson$meenylatex$Internal$LatexState$incrementCounter, 'eqno', latexState);
		var s1 = A2($jxxcarlson$meenylatex$Internal$LatexState$getCounter, 's1', latexState1);
		var label = function () {
			if (body.$ === 'LXString') {
				var str = body.a;
				return $jxxcarlson$meenylatex$Internal$StateReducerHelpers2$getLabel(str);
			} else {
				return '';
			}
		}();
		var eqno = A2($jxxcarlson$meenylatex$Internal$LatexState$getCounter, 'eqno', latexState1);
		var latexState2 = (label !== '') ? A3(
			$jxxcarlson$meenylatex$Internal$LatexState$setCrossReference,
			label,
			$elm$core$String$fromInt(s1) + ('.' + $elm$core$String$fromInt(eqno)),
			latexState1) : latexState1;
		return latexState2;
	});
var $elm$core$Maybe$andThen = F2(
	function (callback, maybeValue) {
		if (maybeValue.$ === 'Just') {
			var value = maybeValue.a;
			return callback(value);
		} else {
			return $elm$core$Maybe$Nothing;
		}
	});
var $jxxcarlson$meenylatex$Internal$ParserTools$isMacro = F2(
	function (macroName, latexExpression) {
		if (latexExpression.$ === 'Macro') {
			var name = latexExpression.a;
			return _Utils_eq(name, macroName);
		} else {
			return false;
		}
	});
var $jxxcarlson$meenylatex$Internal$ParserTools$filterMacro = F2(
	function (macroName, list) {
		return A2(
			$elm$core$List$filter,
			$jxxcarlson$meenylatex$Internal$ParserTools$isMacro(macroName),
			list);
	});
var $jxxcarlson$meenylatex$Internal$ParserTools$getMacroArgs2 = function (latexExpression) {
	if (latexExpression.$ === 'Macro') {
		var name = latexExpression.a;
		var optArgs = latexExpression.b;
		var args = latexExpression.c;
		return A2($elm$core$List$map, $jxxcarlson$meenylatex$Internal$ParserTools$latexList2List, args);
	} else {
		return _List_Nil;
	}
};
var $jxxcarlson$meenylatex$Internal$ParserTools$getString = function (latexString) {
	if (latexString.$ === 'LXString') {
		var str = latexString.a;
		return str;
	} else {
		return '';
	}
};
var $jxxcarlson$meenylatex$Internal$ParserTools$macroValue_ = F2(
	function (macroName, list) {
		return A2(
			$elm$core$Maybe$map,
			$jxxcarlson$meenylatex$Internal$ParserTools$getString,
			A2(
				$elm$core$Maybe$andThen,
				$elm$core$List$head,
				A2(
					$elm$core$Maybe$andThen,
					$elm$core$List$head,
					A2(
						$elm$core$Maybe$map,
						$jxxcarlson$meenylatex$Internal$ParserTools$getMacroArgs2,
						$elm$core$List$head(
							A2($jxxcarlson$meenylatex$Internal$ParserTools$filterMacro, macroName, list))))));
	});
var $jxxcarlson$meenylatex$Internal$ParserTools$macroValue = F2(
	function (macroName, envBody) {
		if (envBody.$ === 'LatexList') {
			var list = envBody.a;
			return A2($jxxcarlson$meenylatex$Internal$ParserTools$macroValue_, macroName, list);
		} else {
			return $elm$core$Maybe$Nothing;
		}
	});
var $jxxcarlson$meenylatex$Internal$StateReducerHelpers2$setTheoremNumber = F2(
	function (body, latexState) {
		var latexState1 = A2($jxxcarlson$meenylatex$Internal$LatexState$incrementCounter, 'tno', latexState);
		var s1 = A2($jxxcarlson$meenylatex$Internal$LatexState$getCounter, 's1', latexState1);
		var tno = A2($jxxcarlson$meenylatex$Internal$LatexState$getCounter, 'tno', latexState1);
		var label = function () {
			var _v0 = A2($jxxcarlson$meenylatex$Internal$ParserTools$macroValue, 'label', body);
			if (_v0.$ === 'Just') {
				var str = _v0.a;
				return str;
			} else {
				return '';
			}
		}();
		var latexState2 = (label !== '') ? A3(
			$jxxcarlson$meenylatex$Internal$LatexState$setCrossReference,
			label,
			$elm$core$String$fromInt(s1) + ('.' + $elm$core$String$fromInt(tno)),
			latexState1) : latexState1;
		return latexState2;
	});
var $jxxcarlson$meenylatex$Internal$Accumulator$theoremWords = _List_fromArray(
	['theorem', 'proposition', 'corollary', 'lemma', 'definition']);
var $jxxcarlson$meenylatex$Internal$Accumulator$envReducer = F4(
	function (name, optonalArgs, body, state) {
		if (A2($elm$core$List$member, name, $jxxcarlson$meenylatex$Internal$Accumulator$theoremWords)) {
			return A2($jxxcarlson$meenylatex$Internal$StateReducerHelpers2$setTheoremNumber, body, state);
		} else {
			switch (name) {
				case 'equation':
					return A2($jxxcarlson$meenylatex$Internal$StateReducerHelpers2$setEquationNumber, body, state);
				case 'align':
					return A2($jxxcarlson$meenylatex$Internal$StateReducerHelpers2$setEquationNumber, body, state);
				case 'mathmacro':
					if (body.$ === 'LXString') {
						var str = body.a;
						var mathDict = $jxxcarlson$meenylatex$Internal$MathMacro$makeMacroDict(
							$elm$core$String$trim(str));
						return _Utils_update(
							state,
							{mathMacroDictionary: mathDict});
					} else {
						return state;
					}
				default:
					return state;
			}
		}
	});
var $jxxcarlson$meenylatex$Internal$Accumulator$dictionaryWords = _List_fromArray(
	['title', 'author', 'data', 'email', 'revision', 'host', 'setclient', 'setdocid']);
var $jxxcarlson$meenylatex$Internal$LatexState$setDictionaryItem = F3(
	function (key, value, latexState) {
		var dictionary = latexState.dictionary;
		var newDictionary = A3($elm$core$Dict$insert, key, value, dictionary);
		return _Utils_update(
			latexState,
			{dictionary: newDictionary});
	});
var $jxxcarlson$meenylatex$Internal$ParserTools$headLatexExpression = function (list) {
	var he = function () {
		var _v0 = $elm$core$List$head(list);
		if (_v0.$ === 'Just') {
			var expr = _v0.a;
			return expr;
		} else {
			return $jxxcarlson$meenylatex$Internal$Parser$LatexList(_List_Nil);
		}
	}();
	return he;
};
var $jxxcarlson$meenylatex$Internal$ParserTools$valueOfLXString = function (expr) {
	if (expr.$ === 'LXString') {
		var str = expr.a;
		return str;
	} else {
		return 'Error getting value of LatexString';
	}
};
var $jxxcarlson$meenylatex$Internal$ParserTools$valueOfLatexList = function (latexList) {
	if (latexList.$ === 'LatexList') {
		var value = latexList.a;
		return value;
	} else {
		return _List_fromArray(
			[
				$jxxcarlson$meenylatex$Internal$Parser$LXString('Error getting value of LatexList')
			]);
	}
};
var $jxxcarlson$meenylatex$Internal$ParserTools$unpackString = function (expr) {
	return $jxxcarlson$meenylatex$Internal$ParserTools$valueOfLXString(
		$jxxcarlson$meenylatex$Internal$ParserTools$headLatexExpression(
			$jxxcarlson$meenylatex$Internal$ParserTools$valueOfLatexList(
				$jxxcarlson$meenylatex$Internal$ParserTools$headLatexExpression(expr))));
};
var $jxxcarlson$meenylatex$Internal$StateReducerHelpers2$setDictionaryItemForMacro = F3(
	function (name, args, latexState) {
		var value = $jxxcarlson$meenylatex$Internal$ParserTools$unpackString(args);
		return A3($jxxcarlson$meenylatex$Internal$LatexState$setDictionaryItem, name, value, latexState);
	});
var $jxxcarlson$meenylatex$Internal$StateReducerHelpers2$getAt = F2(
	function (k, list_) {
		return A2(
			$elm$core$Maybe$withDefault,
			'xxx',
			A2($jxxcarlson$meenylatex$Internal$Utility$getAt, k, list_));
	});
var $jxxcarlson$meenylatex$Internal$LatexState$updateCounter = F3(
	function (name, value, latexState) {
		var maybeSet = $elm$core$Maybe$map(
			function (x) {
				return value;
			});
		var newCounters = A3($elm$core$Dict$update, name, maybeSet, latexState.counters);
		return _Utils_update(
			latexState,
			{counters: newCounters});
	});
var $jxxcarlson$meenylatex$Internal$StateReducerHelpers2$setSectionCounters = F2(
	function (macroArgs, latexState) {
		var argList = A2(
			$elm$core$List$map,
			$jxxcarlson$meenylatex$Internal$ParserTools$list2LeadingString,
			A2($elm$core$List$map, $jxxcarlson$meenylatex$Internal$ParserTools$latexList2List, macroArgs));
		var arg2 = A2($jxxcarlson$meenylatex$Internal$StateReducerHelpers2$getAt, 1, argList);
		var arg1 = A2($jxxcarlson$meenylatex$Internal$StateReducerHelpers2$getAt, 0, argList);
		var initialSectionNumber = (arg1 === 'section') ? A2(
			$elm$core$Maybe$withDefault,
			0,
			$elm$core$String$toInt(arg2)) : (-1);
		return (_Utils_cmp(initialSectionNumber, -1) > 0) ? A3(
			$jxxcarlson$meenylatex$Internal$LatexState$updateCounter,
			's3',
			0,
			A3(
				$jxxcarlson$meenylatex$Internal$LatexState$updateCounter,
				's2',
				0,
				A3($jxxcarlson$meenylatex$Internal$LatexState$updateCounter, 's1', initialSectionNumber - 1, latexState))) : latexState;
	});
var $jxxcarlson$meenylatex$Internal$LatexState$TocEntry = F3(
	function (name, label, level) {
		return {label: label, level: level, name: name};
	});
var $jxxcarlson$meenylatex$Internal$LatexState$addSection = F4(
	function (sectionName, label, level, latexState) {
		var newEntry = A3($jxxcarlson$meenylatex$Internal$LatexState$TocEntry, sectionName, label, level);
		var toc = _Utils_ap(
			latexState.tableOfContents,
			_List_fromArray(
				[newEntry]));
		return _Utils_update(
			latexState,
			{tableOfContents: toc});
	});
var $jxxcarlson$meenylatex$Internal$StateReducerHelpers2$updateSectionNumber = F2(
	function (macroArgs, latexState) {
		var label = $elm$core$String$fromInt(
			function (x) {
				return x + 1;
			}(
				A2($jxxcarlson$meenylatex$Internal$LatexState$getCounter, 's1', latexState)));
		return A4(
			$jxxcarlson$meenylatex$Internal$LatexState$addSection,
			$jxxcarlson$meenylatex$Internal$ParserTools$unpackString(macroArgs),
			label,
			1,
			A3(
				$jxxcarlson$meenylatex$Internal$LatexState$updateCounter,
				's3',
				0,
				A3(
					$jxxcarlson$meenylatex$Internal$LatexState$updateCounter,
					's2',
					0,
					A2($jxxcarlson$meenylatex$Internal$LatexState$incrementCounter, 's1', latexState))));
	});
var $jxxcarlson$meenylatex$Internal$StateReducerHelpers2$updateSubsectionNumber = F2(
	function (macroArgs, latexState) {
		var s2 = $elm$core$String$fromInt(
			function (x) {
				return x + 1;
			}(
				A2($jxxcarlson$meenylatex$Internal$LatexState$getCounter, 's2', latexState)));
		var s1 = $elm$core$String$fromInt(
			A2($jxxcarlson$meenylatex$Internal$LatexState$getCounter, 's1', latexState));
		var label = s1 + ('.' + s2);
		return A4(
			$jxxcarlson$meenylatex$Internal$LatexState$addSection,
			$jxxcarlson$meenylatex$Internal$ParserTools$unpackString(macroArgs),
			label,
			2,
			A3(
				$jxxcarlson$meenylatex$Internal$LatexState$updateCounter,
				's3',
				0,
				A2($jxxcarlson$meenylatex$Internal$LatexState$incrementCounter, 's2', latexState)));
	});
var $jxxcarlson$meenylatex$Internal$StateReducerHelpers2$updateSubsubsectionNumber = F2(
	function (macroArgs, latexState) {
		var s3 = $elm$core$String$fromInt(
			function (x) {
				return x + 1;
			}(
				A2($jxxcarlson$meenylatex$Internal$LatexState$getCounter, 's3', latexState)));
		var s2 = $elm$core$String$fromInt(
			A2($jxxcarlson$meenylatex$Internal$LatexState$getCounter, 's2', latexState));
		var s1 = $elm$core$String$fromInt(
			A2($jxxcarlson$meenylatex$Internal$LatexState$getCounter, 's1', latexState));
		var label = s1 + ('.' + (s2 + ('.' + s3)));
		return A4(
			$jxxcarlson$meenylatex$Internal$LatexState$addSection,
			$jxxcarlson$meenylatex$Internal$ParserTools$unpackString(macroArgs),
			label,
			2,
			A2($jxxcarlson$meenylatex$Internal$LatexState$incrementCounter, 's3', latexState));
	});
var $jxxcarlson$meenylatex$Internal$Accumulator$macroReducer = F4(
	function (name, optionalArgs, args, state) {
		if (A2($elm$core$List$member, name, $jxxcarlson$meenylatex$Internal$Accumulator$dictionaryWords)) {
			return A3($jxxcarlson$meenylatex$Internal$StateReducerHelpers2$setDictionaryItemForMacro, name, args, state);
		} else {
			switch (name) {
				case 'section':
					return A2($jxxcarlson$meenylatex$Internal$StateReducerHelpers2$updateSectionNumber, args, state);
				case 'subsection':
					return A2($jxxcarlson$meenylatex$Internal$StateReducerHelpers2$updateSubsectionNumber, args, state);
				case 'subsubsection':
					return A2($jxxcarlson$meenylatex$Internal$StateReducerHelpers2$updateSubsubsectionNumber, args, state);
				case 'setcounter':
					return A2($jxxcarlson$meenylatex$Internal$StateReducerHelpers2$setSectionCounters, args, state);
				default:
					return state;
			}
		}
	});
var $jxxcarlson$meenylatex$Internal$LatexState$setMacroDefinition = F3(
	function (macroName, macroDefinition, latexState) {
		var macroDictionary = latexState.macroDictionary;
		var newMacroDictionary = A3($elm$core$Dict$insert, macroName, macroDefinition, macroDictionary);
		return _Utils_update(
			latexState,
			{macroDictionary: newMacroDictionary});
	});
var $jxxcarlson$meenylatex$Internal$StateReducerHelpers2$setMacroDefinition = F3(
	function (name, body, latexState) {
		return A3(
			$jxxcarlson$meenylatex$Internal$LatexState$setMacroDefinition,
			name,
			A3($jxxcarlson$meenylatex$Internal$Parser$NewCommand, name, 0, body),
			latexState);
	});
var $jxxcarlson$meenylatex$Internal$StateReducerHelpers2$setBibItemXRef = F3(
	function (optionalArgs, args, latexState) {
		var label = $jxxcarlson$meenylatex$Internal$ParserTools$unpackString(args);
		var value = _Utils_eq(optionalArgs, _List_Nil) ? label : $jxxcarlson$meenylatex$Internal$ParserTools$unpackString(optionalArgs);
		return A3($jxxcarlson$meenylatex$Internal$LatexState$setDictionaryItem, 'bibitem:' + label, value, latexState);
	});
var $jxxcarlson$meenylatex$Internal$Accumulator$smacroReducer = F5(
	function (name, optionalArgs, args, latexExpression, state) {
		if (name === 'bibitem') {
			return A3($jxxcarlson$meenylatex$Internal$StateReducerHelpers2$setBibItemXRef, optionalArgs, args, state);
		} else {
			return state;
		}
	});
var $jxxcarlson$meenylatex$Internal$Accumulator$latexStateReducerAux = F2(
	function (lexpr, state) {
		switch (lexpr.$) {
			case 'Macro':
				var name = lexpr.a;
				var optionalArgs = lexpr.b;
				var args = lexpr.c;
				return A4($jxxcarlson$meenylatex$Internal$Accumulator$macroReducer, name, optionalArgs, args, state);
			case 'SMacro':
				var name = lexpr.a;
				var optionalArgs = lexpr.b;
				var args = lexpr.c;
				var latexExpression = lexpr.d;
				return A5($jxxcarlson$meenylatex$Internal$Accumulator$smacroReducer, name, optionalArgs, args, latexExpression, state);
			case 'NewCommand':
				var name = lexpr.a;
				var nArgs = lexpr.b;
				var body = lexpr.c;
				return A3($jxxcarlson$meenylatex$Internal$StateReducerHelpers2$setMacroDefinition, name, body, state);
			case 'Environment':
				var name = lexpr.a;
				var optonalArgs = lexpr.b;
				var body = lexpr.c;
				return A4($jxxcarlson$meenylatex$Internal$Accumulator$envReducer, name, optonalArgs, body, state);
			case 'LatexList':
				var list = lexpr.a;
				return A3($elm$core$List$foldr, $jxxcarlson$meenylatex$Internal$Accumulator$latexStateReducerAux, state, list);
			default:
				return state;
		}
	});
var $jxxcarlson$meenylatex$Internal$Accumulator$latexStateReducer = F2(
	function (list, state) {
		return A3($elm$core$List$foldr, $jxxcarlson$meenylatex$Internal$Accumulator$latexStateReducerAux, state, list);
	});
var $jxxcarlson$meenylatex$Internal$Accumulator$parseReducer = F2(
	function (inputString, _v0) {
		var latexState = _v0.a;
		var inputList = _v0.b;
		var parsedInput = $jxxcarlson$meenylatex$Internal$Parser$parse(inputString);
		var newLatexState = A2($jxxcarlson$meenylatex$Internal$Accumulator$latexStateReducer, parsedInput, latexState);
		return _Utils_Tuple2(
			newLatexState,
			_Utils_ap(
				inputList,
				_List_fromArray(
					[parsedInput])));
	});
var $jxxcarlson$meenylatex$Internal$Accumulator$parse = F2(
	function (latexState, paragraphs) {
		return A3(
			$elm$core$List$foldl,
			$jxxcarlson$meenylatex$Internal$Accumulator$parseReducer,
			_Utils_Tuple2(latexState, _List_Nil),
			paragraphs);
	});
var $jxxcarlson$meenylatex$Internal$Accumulator$renderReducer = F3(
	function (renderer, listLatexExpression, _v0) {
		var state = _v0.a;
		var inputList = _v0.b;
		var newState = A2($jxxcarlson$meenylatex$Internal$Accumulator$latexStateReducer, listLatexExpression, state);
		var renderedInput = A2(renderer, newState, listLatexExpression);
		return _Utils_Tuple2(
			newState,
			_Utils_ap(
				inputList,
				_List_fromArray(
					[renderedInput])));
	});
var $jxxcarlson$meenylatex$Internal$Accumulator$render = F3(
	function (renderer, latexState, paragraphs) {
		return A3(
			$elm$core$List$foldl,
			$jxxcarlson$meenylatex$Internal$Accumulator$renderReducer(renderer),
			_Utils_Tuple2(latexState, _List_Nil),
			paragraphs);
	});
var $jxxcarlson$meenylatex$Internal$LatexDiffer$initWithSeed = F5(
	function (seed, parser, renderer, latexState, text) {
		var paragraphs = $jxxcarlson$meenylatex$Internal$Paragraph$logicalParagraphify(text);
		var idList = A2($jxxcarlson$meenylatex$Internal$LatexDiffer$makeIdListWithSeed, seed, paragraphs);
		var sourceMap = A2($jxxcarlson$meenylatex$Internal$SourceMap$generate, paragraphs, idList);
		var _v0 = A2($jxxcarlson$meenylatex$Internal$Accumulator$parse, $jxxcarlson$meenylatex$Internal$LatexState$emptyLatexState, paragraphs);
		var latexState1 = _v0.a;
		var latexExpressionList = _v0.b;
		var latexState2 = _Utils_update(
			$jxxcarlson$meenylatex$Internal$LatexState$emptyLatexState,
			{crossReferences: latexState1.crossReferences, dictionary: latexState1.dictionary, tableOfContents: latexState1.tableOfContents});
		var _v1 = A3($jxxcarlson$meenylatex$Internal$Accumulator$render, renderer, latexState2, latexExpressionList);
		var renderedParagraphs = _v1.b;
		return A6($jxxcarlson$meenylatex$Internal$Differ$EditRecord, paragraphs, latexExpressionList, idList, renderedParagraphs, latexState2, sourceMap);
	});
var $jxxcarlson$meenylatex$Internal$LatexDiffer$init = F4(
	function (parser, renderer, latexState, text) {
		return A5($jxxcarlson$meenylatex$Internal$LatexDiffer$initWithSeed, 0, parser, renderer, latexState, text);
	});
var $jxxcarlson$meenylatex$Internal$Differ$isEmpty = function (editRecord) {
	return _Utils_eq(editRecord.paragraphs, _List_Nil) && _Utils_eq(editRecord.renderedParagraphs, _List_Nil);
};
var $jxxcarlson$meenylatex$Internal$Differ$DiffRecord = F4(
	function (commonInitialSegment, commonTerminalSegment, middleSegmentInSource, middleSegmentInTarget) {
		return {commonInitialSegment: commonInitialSegment, commonTerminalSegment: commonTerminalSegment, middleSegmentInSource: middleSegmentInSource, middleSegmentInTarget: middleSegmentInTarget};
	});
var $elm$core$List$takeReverse = F3(
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
						$temp$kept = A2($elm$core$List$cons, x, kept);
					n = $temp$n;
					list = $temp$list;
					kept = $temp$kept;
					continue takeReverse;
				}
			}
		}
	});
var $elm$core$List$takeTailRec = F2(
	function (n, list) {
		return $elm$core$List$reverse(
			A3($elm$core$List$takeReverse, n, list, _List_Nil));
	});
var $elm$core$List$takeFast = F3(
	function (ctr, n, list) {
		if (n <= 0) {
			return _List_Nil;
		} else {
			var _v0 = _Utils_Tuple2(n, list);
			_v0$1:
			while (true) {
				_v0$5:
				while (true) {
					if (!_v0.b.b) {
						return list;
					} else {
						if (_v0.b.b.b) {
							switch (_v0.a) {
								case 1:
									break _v0$1;
								case 2:
									var _v2 = _v0.b;
									var x = _v2.a;
									var _v3 = _v2.b;
									var y = _v3.a;
									return _List_fromArray(
										[x, y]);
								case 3:
									if (_v0.b.b.b.b) {
										var _v4 = _v0.b;
										var x = _v4.a;
										var _v5 = _v4.b;
										var y = _v5.a;
										var _v6 = _v5.b;
										var z = _v6.a;
										return _List_fromArray(
											[x, y, z]);
									} else {
										break _v0$5;
									}
								default:
									if (_v0.b.b.b.b && _v0.b.b.b.b.b) {
										var _v7 = _v0.b;
										var x = _v7.a;
										var _v8 = _v7.b;
										var y = _v8.a;
										var _v9 = _v8.b;
										var z = _v9.a;
										var _v10 = _v9.b;
										var w = _v10.a;
										var tl = _v10.b;
										return (ctr > 1000) ? A2(
											$elm$core$List$cons,
											x,
											A2(
												$elm$core$List$cons,
												y,
												A2(
													$elm$core$List$cons,
													z,
													A2(
														$elm$core$List$cons,
														w,
														A2($elm$core$List$takeTailRec, n - 4, tl))))) : A2(
											$elm$core$List$cons,
											x,
											A2(
												$elm$core$List$cons,
												y,
												A2(
													$elm$core$List$cons,
													z,
													A2(
														$elm$core$List$cons,
														w,
														A3($elm$core$List$takeFast, ctr + 1, n - 4, tl)))));
									} else {
										break _v0$5;
									}
							}
						} else {
							if (_v0.a === 1) {
								break _v0$1;
							} else {
								break _v0$5;
							}
						}
					}
				}
				return list;
			}
			var _v1 = _v0.b;
			var x = _v1.a;
			return _List_fromArray(
				[x]);
		}
	});
var $elm$core$List$take = F2(
	function (n, list) {
		return A3($elm$core$List$takeFast, 0, n, list);
	});
var $jxxcarlson$meenylatex$Internal$Differ$commonInitialSegment = F2(
	function (x, y) {
		if (_Utils_eq(x, _List_Nil)) {
			return _List_Nil;
		} else {
			if (_Utils_eq(y, _List_Nil)) {
				return _List_Nil;
			} else {
				var b = A2($elm$core$List$take, 1, y);
				var a = A2($elm$core$List$take, 1, x);
				return _Utils_eq(a, b) ? _Utils_ap(
					a,
					A2(
						$jxxcarlson$meenylatex$Internal$Differ$commonInitialSegment,
						A2($elm$core$List$drop, 1, x),
						A2($elm$core$List$drop, 1, y))) : _List_Nil;
			}
		}
	});
var $jxxcarlson$meenylatex$Internal$Differ$commonTerminalSegmentAux = F3(
	function (cis, x, y) {
		var n = $elm$core$List$length(cis);
		var xx = $elm$core$List$reverse(
			A2($elm$core$List$drop, n, x));
		var yy = $elm$core$List$reverse(
			A2($elm$core$List$drop, n, y));
		return $elm$core$List$reverse(
			A2($jxxcarlson$meenylatex$Internal$Differ$commonInitialSegment, xx, yy));
	});
var $jxxcarlson$meenylatex$Internal$Differ$dropLast = F2(
	function (k, x) {
		return $elm$core$List$reverse(
			A2(
				$elm$core$List$drop,
				k,
				$elm$core$List$reverse(x)));
	});
var $jxxcarlson$meenylatex$Internal$Differ$diff = F2(
	function (u, v) {
		var a = A2($jxxcarlson$meenylatex$Internal$Differ$commonInitialSegment, u, v);
		var b_ = A3($jxxcarlson$meenylatex$Internal$Differ$commonTerminalSegmentAux, a, u, v);
		var lb = $elm$core$List$length(b_);
		var la = $elm$core$List$length(a);
		var b = _Utils_eq(
			la,
			$elm$core$List$length(u)) ? _List_Nil : b_;
		var x = A2(
			$jxxcarlson$meenylatex$Internal$Differ$dropLast,
			lb,
			A2($elm$core$List$drop, la, u));
		var y = A2(
			$jxxcarlson$meenylatex$Internal$Differ$dropLast,
			lb,
			A2($elm$core$List$drop, la, v));
		return A4($jxxcarlson$meenylatex$Internal$Differ$DiffRecord, a, b, x, y);
	});
var $jxxcarlson$meenylatex$Internal$Differ$takeLast = F2(
	function (k, x) {
		return $elm$core$List$reverse(
			A2(
				$elm$core$List$take,
				k,
				$elm$core$List$reverse(x)));
	});
var $jxxcarlson$meenylatex$Internal$Differ$differentialCompiler = F4(
	function (parser, renderer, diffRecord, editRecord) {
		var middleSegmentRendered = A2($elm$core$List$map, renderer, diffRecord.middleSegmentInTarget);
		var middleSegmentParsed = A2($elm$core$List$map, parser, diffRecord.middleSegmentInTarget);
		var it = $elm$core$List$length(diffRecord.commonTerminalSegment);
		var terminalSegmentParsed = A2($jxxcarlson$meenylatex$Internal$Differ$takeLast, it, editRecord.astList);
		var terminalSegmentRendered = A2($jxxcarlson$meenylatex$Internal$Differ$takeLast, it, editRecord.renderedParagraphs);
		var ii = $elm$core$List$length(diffRecord.commonInitialSegment);
		var initialSegmentParsed = A2($elm$core$List$take, ii, editRecord.astList);
		var initialSegmentRendered = A2($elm$core$List$take, ii, editRecord.renderedParagraphs);
		return _Utils_Tuple2(
			_Utils_ap(
				initialSegmentParsed,
				_Utils_ap(middleSegmentParsed, terminalSegmentParsed)),
			_Utils_ap(
				initialSegmentRendered,
				_Utils_ap(middleSegmentRendered, terminalSegmentRendered)));
	});
var $jxxcarlson$meenylatex$Internal$Differ$differentialIdList = F3(
	function (seed, diffRecord, editRecord) {
		var nt = $elm$core$List$length(diffRecord.middleSegmentInTarget);
		var ns = $elm$core$List$length(diffRecord.middleSegmentInSource);
		var it = $elm$core$List$length(diffRecord.commonTerminalSegment);
		var ii = $elm$core$List$length(diffRecord.commonInitialSegment);
		var idListTerminal = A2($elm$core$List$drop, ii + ns, editRecord.idList);
		var idListMiddle = A2(
			$elm$core$List$map,
			$jxxcarlson$meenylatex$Internal$Differ$prefixer(seed),
			A2($elm$core$List$range, ii + 1, ii + nt));
		var idListInitial = A2($elm$core$List$take, ii, editRecord.idList);
		var idList = _Utils_ap(
			idListInitial,
			_Utils_ap(idListMiddle, idListTerminal));
		var _v0 = (!nt) ? _Utils_Tuple2($elm$core$Maybe$Nothing, $elm$core$Maybe$Nothing) : _Utils_Tuple2(
			$elm$core$Maybe$Just(ii),
			$elm$core$Maybe$Just((ii + nt) - 1));
		var newIdsStart = _v0.a;
		var newIdsEnd = _v0.b;
		return {idList: idList, newIdsEnd: newIdsEnd, newIdsStart: newIdsStart};
	});
var $jxxcarlson$meenylatex$Internal$Differ$update = F5(
	function (seed, parser, renderer, editRecord, text) {
		var newParagraphs = $jxxcarlson$meenylatex$Internal$Paragraph$logicalParagraphify(text);
		var diffRecord = A2($jxxcarlson$meenylatex$Internal$Differ$diff, editRecord.paragraphs, newParagraphs);
		var p = A3($jxxcarlson$meenylatex$Internal$Differ$differentialIdList, seed, diffRecord, editRecord);
		var sourceMap = A2($jxxcarlson$meenylatex$Internal$SourceMap$generate, newParagraphs, p.idList);
		var _v0 = A4($jxxcarlson$meenylatex$Internal$Differ$differentialCompiler, parser, renderer, diffRecord, editRecord);
		var astList = _v0.a;
		var newRenderedParagraphs = _v0.b;
		return A6($jxxcarlson$meenylatex$Internal$Differ$EditRecord, newParagraphs, astList, p.idList, newRenderedParagraphs, editRecord.latexState, sourceMap);
	});
var $jxxcarlson$meenylatex$Internal$LatexDiffer$update = F6(
	function (seed, parser, renderLatexExpression, renderString, editRecord, source) {
		return $jxxcarlson$meenylatex$Internal$Differ$isEmpty(editRecord) ? A4($jxxcarlson$meenylatex$Internal$LatexDiffer$init, parser, renderLatexExpression, $jxxcarlson$meenylatex$Internal$LatexState$emptyLatexState, source) : A5(
			$jxxcarlson$meenylatex$Internal$Differ$update,
			seed,
			parser,
			renderString(editRecord.latexState),
			editRecord,
			source);
	});
var $jxxcarlson$meenylatex$MiniLatex$Edit$init = F3(
	function (mathJaxRenderOption, version, source) {
		return A6(
			$jxxcarlson$meenylatex$Internal$LatexDiffer$update,
			version,
			$jxxcarlson$meenylatex$Internal$Parser$parse,
			A2($jxxcarlson$meenylatex$Internal$Render2$renderLatexList, mathJaxRenderOption, source),
			$jxxcarlson$meenylatex$Internal$Render2$renderString(mathJaxRenderOption),
			$jxxcarlson$meenylatex$Internal$Differ$emptyHtmlMsgRecord,
			source);
	});
var $author$project$StringsV2$initialText = '\n\n\\title{Sample MiniLaTeX Doc}\n\n\n\n\n\\maketitle\n\n% EXAMPLE 1\n\n\\begin{comment}\nThis multi-line comment\nshould also not\nbe visible in the\nrendered text.\n\\end{comment}\n\n\n\\tableofcontents\n\n\\strong{Note.} This version of the MiniLaTeX demo uses MathJax 3,\nwhich is much faster than the 2.7.* versions and which gives\na much better experience when doing live editing.  There is one\ntemporary downside \\mdash some more work needs to be done\nto enable math-mode macros.  Coming soon!\n\n\\section{Introduction}\n\nMiniLatex is a subset of LaTeX that can be\nrendered live in the browser using a custom parser.\nMathematical text is rendered by \\href{https://mathjax.org}{MathJax}:\n\n$$\n\\int_{-\\infty}^\\infty e^{-x^2} dx = \\pi\n$$\n\nThe combination of MiniLaTeX and MathJax\ngives you access to both text-mode\nand math-mode LaTeX in the browser.\n\n\nFeel free to\nexperiment with MiniLatex using this app\n\\mdash you can change the text in the\nleft-hand window, or clear it and enter\nyour own text. For more information about\nthe MiniLaTeX project, please go to\n\\href{https://minilatex.io}{minilatex.io},\nor write to jxxcarlson at gmail.\n\n\n\n\\italic{Try editing formula \\eqref{integral:xn} or \\eqref{integral:exp} below.}\n\nThe most basic integral:\n\n\\begin{equation}\n\\label{integral:xn}\n\\int_0^1 x^n dx = \\frac{1}{n+1}\n\\end{equation}\n\nAn improper integral:\n\n\\begin{equation}\n\\label{integral:exp}\n\\int_0^\\infty e^{-x} dx = 1\n\\end{equation}\n\n\\section{Math-mode macros}\n\n\\begin{mathmacro}\n\\newcommand{\\bt}[1]{\\bf{#1}}\n\\newcommand{\\mca}[0]{\\mathcal{A}}\n\\end{mathmacro}\n\n\nYou can add math mode macros to your document\nas in the example below.\n\n\\begin{verbatim}\n\\begin{mathmacro}\n\\newcommand{\\bt}[1]{\\bf{#1}}\n\\newcommand{\\mca}[0]{\\mathcal{A}}\n\\end{mathmacro}\n\\end{verbatim}\n\nThen saying\n\n\\begin{verbatim}\n $$\n a^2 = \\bt{Z}/\\mca\n $$\n\\end{verbatim}\n\nyields\n\n$$\na^2 = \\bt{Z}/\\mca\n$$\n\nThere are some restrictions:\n\n\\begin{verbatim}\n1. No regions, e.g, use \\bf{#1},\n   not {\\bf #1}\n\n2. Macros with no arguments:\n   Say \\newcommand{\\mca}[0]{\\mathcal{A}},\n   not \\newcommand{\\mca}{\\mathcal{A}}\n\n3. No recursion: the body of the macro\n   cannot refer to other macros defined\n   in the mathmacro environment.\n\n4. Put the mathmacro environment at\n   the beginning of the document\n\\end{verbatim}\n\n\nItems 1—3 will be eliminated in a\nfuture release.\n\n\n\n\\section{Text-mode Macros}\n\n\\newcommand{\\hello}[1]{Hello \\strong{#1}!}\n\nAs illustrated by the examples below, one can define new text-mode macros\nin MiniLaTeX.\nFor example, if we add the text\n\n\\newcommand{\\boss}{Phineas Fogg}\n\n\\begin{verbatim}\n\\newcommand{\\boss}{Phineas Fogg}\n\\end{verbatim}\n\nthen saying\n\n\\begin{verbatim}\n\\italic{My boss is \\boss.}\n\\end{verbatim}\n\nproduces \\italic{My boss is \\boss.}\nLikewise, if one says\n\n\\begin{verbatim}\n\\newcommand{\\hello}[1]{Hello \\strong{#1}!}\n\\end{verbatim}\n\nthen the macro \\backslash{hello}\\texarg{John} renders as \\hello{John}\nFor one more example,  make the definition\n\n\\begin{verbatim}\n\\newcommand{\\reverseconcat}[3]{#3#2#1}\n\\end{verbatim}\n\n\\newcommand{\\reverseconcat}[3]{#3#2#1}\n\nThen \\backslash{reverseconcat}\\texarg{A}\\texarg{B}\\texarg{C} = \\reverseconcat{A}{B}{C}\n\nThe macro expansion feature will need a lot more work and testing.\nWe also plan to add a feature so that authors can define new environments.\n\n\n\n\\section{MiniLatex Macros}\n\nMiniLatex has a number of macros of its own,  For\nexample, text can be rendered in various colors, \\red{such as red}\nand \\blue{blue}. Text can \\highlight{be highlighted}\nand can \\strike{also be struck}. Here are the macros:\n\n\\begin{verbatim}\n\\red\n\\blue\n\\highlight\n\\strike\n\\end{verbatim}\n\n\n\\section{Theorems}\n\n\\begin{theorem}\nThere are infinitely many prime numbers.\n\\end{theorem}\n\n\\begin{theorem}\nThere are infinitley many prime numbers\n$p$ such that $p \\equiv 1\\ mod\\ 4$.\n\\end{theorem}\n\n\\section{Images}\n\n\\image{http://psurl.s3.amazonaws.com/images/jc/beats-eca1.png}{Figure 1. Two-frequency beats}{width: 350, align: center}\n\n\\section{Lists and Tables}\n\nA list\n\n\\begin{itemize}\n\n\\item This is \\strong{just} a test.\n\n\\item \\italic{And so is this:} $a^2 + b^2 = c^2$\n\n\\begin{itemize}\n\n\\item Items can be nested\n\n\\item And you can do this: $ \\frac{1}{1 + \\frac{2}{3}} $\n\n\\end{itemize}\n\n\\end{itemize}\n\nA table\n\n\\begin{indent}\n\\strong{Light Elements}\n\\begin{tabular}{ l l l l }\nHydrogen & H & 1 & 1.008 \\\\\nHelium & He & 2 & 4.003 \\\\\nLithium& Li & 3 & 6.94 \\\\\nBeryllium& Be& 4& 9.012 \\\\\n\\end{tabular}\n\\end{indent}\n\n\\section{Errors and related matters}\n\nErrors, as illustrated below, are rendered in real time and are reported in red, in place. For example, suppose the user types the  text\n\n\\begin{verbatim}\n  $$\n  a^2 + b^2 = c^2\n\\end{verbatim}\n\nThen she will see this:\n\n\\image{http://jxxcarlson.s3.amazonaws.com/miniLaTeXErrorMsg-2020-02-22.png}{Fig 2. Error message}{width: 200}\n\n\nWe plan to make further improvements in error reporting.\nNote, by the way, what happens when a nonexistent macro like \\italic{hohoho } is used:\n\n\\begin{indent}\n\\hohoho{123}\n\\end{indent}\n\nThis is intentional.  Note also what happens when we use a nonexistent environment like \\italic{joke}:\n\n\\begin{joke}\nDid you hear the one about the mathematician, the philosopher, and the engineer?\n\\end{joke}\n\nThis default treatment of unknown environments is also intentional, and can be useful placeholders: an\nexported MiniLaTeX document can, of course, define such environments to suit the author\'s needs.\n\n\\section{Technology}\n\nMiniLatex is written in \\href{http://elm-lang.org}{Elm}, the statically typed functional\nprogramming language created by Evan Czaplicki for building web applications.  Because of its excellent\n\\href{http://package.elm-lang.org/packages/elm-tools/parser/latest}{parser combinator library},\nElm is a good fit for a project like the present one.\n\n\nFor an overview of the design of MiniLatex, see\n\\href{https://hackernoon.com/towards-latex-in-the-browser-2ff4d94a0c08}{Towards Latex in the Browser}.\nBriefly, \\href{https://www.mathjax.org/}{MathJax} is used inside dollar signs, and Elm is used outside.\n\n\\href{https://github.com/jxxcarlson/meenylatex}{Github repo}\n\n\\bigskip\n\n\n\\section{References}\n\n\\begin{thebibliography}\n\n\\bibitem{D} \\href{https://ocw.mit.edu/courses/physics/8-05-quantum-physics-ii-fall-2013/lecture-notes/MIT8_05F13_Chap_04.pdf}{On Dirac\'s bra-ket notation}, MIT Courseware.\n\n\\bibitem{G} James Carlson, \\href{https://knode.io/628}{MiniLaTeX Grammar},\n\n\\bibitem{H} James Carlson, \\href{https://hackernoon.com/towards-latex-in-the-browser-2ff4d94a0c08}{Towards LaTeX in the Browser }, Hackernoon\n\n\\bibitem{S} \\href{http://package.elm-lang.org/packages/jxxcarlson/minilatex/latest}{Source code}\n\n\\bibitem{T} James Carlson, \\href{https://knode.io/525}{MiniLatex Technical Report}\n\n\\end{thebibliography}\n\n\n\n\n';
var $author$project$Main$initialText = $author$project$StringsV2$initialText;
var $elm$core$Platform$Cmd$batch = _Platform_batch;
var $elm$core$Platform$Cmd$none = $elm$core$Platform$Cmd$batch(_List_Nil);
var $author$project$Main$LaTeXMsg = function (a) {
	return {$: 'LaTeXMsg', a: a};
};
var $author$project$StringsV1$macros = '\\newcommand{\\bra}{\\langle}';
var $elm$core$String$lines = _String_lines;
var $author$project$Main$normalize = function (str) {
	return A2(
		$elm$core$String$join,
		'\n',
		A2(
			$elm$core$List$filter,
			function (x) {
				return x !== '';
			},
			$elm$core$String$lines(str)));
};
var $author$project$Main$initialMacroText = $author$project$Main$normalize($author$project$StringsV1$macros);
var $elm$virtual_dom$VirtualDom$map = _VirtualDom_map;
var $elm$html$Html$map = $elm$virtual_dom$VirtualDom$map;
var $jxxcarlson$meenylatex$MiniLatex$emptyLatexState = $jxxcarlson$meenylatex$Internal$LatexState$emptyLatexState;
var $jxxcarlson$meenylatex$MiniLatex$Edit$IDClicked = function (a) {
	return {$: 'IDClicked', a: a};
};
var $elm$virtual_dom$VirtualDom$keyedNode = function (tag) {
	return _VirtualDom_keyedNode(
		_VirtualDom_noScript(tag));
};
var $elm$html$Html$Keyed$node = $elm$virtual_dom$VirtualDom$keyedNode;
var $elm$virtual_dom$VirtualDom$Normal = function (a) {
	return {$: 'Normal', a: a};
};
var $elm$virtual_dom$VirtualDom$on = _VirtualDom_on;
var $elm$html$Html$Events$on = F2(
	function (event, decoder) {
		return A2(
			$elm$virtual_dom$VirtualDom$on,
			event,
			$elm$virtual_dom$VirtualDom$Normal(decoder));
	});
var $elm$html$Html$Events$onClick = function (msg) {
	return A2(
		$elm$html$Html$Events$on,
		'click',
		$elm$json$Json$Decode$succeed(msg));
};
var $jxxcarlson$meenylatex$MiniLatex$Edit$get = function (editRecord) {
	var paragraphs = editRecord.renderedParagraphs;
	var ids = editRecord.idList;
	return A3(
		$elm$core$List$map2,
		F2(
			function (para, id) {
				return A3(
					$elm$html$Html$Keyed$node,
					'p',
					_List_fromArray(
						[
							$elm$html$Html$Attributes$id(id),
							$elm$html$Html$Events$onClick(
							$jxxcarlson$meenylatex$MiniLatex$Edit$IDClicked(id)),
							A2($elm$html$Html$Attributes$style, 'margin-bottom', '10px')
						]),
					_List_fromArray(
						[
							_Utils_Tuple2(id, para)
						]));
			}),
		paragraphs,
		ids);
};
var $jxxcarlson$meenylatex$MiniLatex$prependMacros = F2(
	function (macros_, sourceText) {
		var macros = function () {
			var _v0 = macros_ === '';
			if (_v0) {
				return '\\newcommand{\\dummy}{Dummy!}';
			} else {
				return macros_;
			}
		}();
		return '$$\n' + ($elm$core$String$trim(macros_) + ('\n$$\n\n' + sourceText));
	});
var $jxxcarlson$meenylatex$MiniLatex$render = F3(
	function (mathJaxRenderOption, macroDefinitions, source) {
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					A2($elm$html$Html$Attributes$attribute, 'id', '__RENDERED_TEXT__')
				]),
			$jxxcarlson$meenylatex$MiniLatex$Edit$get(
				A4(
					$jxxcarlson$meenylatex$Internal$LatexDiffer$init,
					$jxxcarlson$meenylatex$Internal$Parser$parse,
					A2($jxxcarlson$meenylatex$Internal$Render2$renderLatexList, mathJaxRenderOption, source),
					$jxxcarlson$meenylatex$MiniLatex$emptyLatexState,
					A2($jxxcarlson$meenylatex$MiniLatex$prependMacros, macroDefinitions, source))));
	});
var $author$project$Main$render = function (sourceText) {
	var macroDefinitions = $author$project$Main$initialMacroText;
	return A2(
		$elm$html$Html$map,
		$author$project$Main$LaTeXMsg,
		A3($jxxcarlson$meenylatex$MiniLatex$render, $jxxcarlson$meenylatex$MiniLatex$Render$NoDelay, macroDefinitions, sourceText));
};
var $author$project$Main$init = function (flags) {
	var editRecord = A3($jxxcarlson$meenylatex$MiniLatex$Edit$init, $jxxcarlson$meenylatex$MiniLatex$Render$NoDelay, flags.seed, $author$project$Main$initialText);
	var model = {
		counter: 0,
		debounce: $jinjor$elm_debounce$Debounce$init,
		editRecord: editRecord,
		macroText: '',
		message: 'No message yet ...',
		renderedText: $author$project$Main$render($author$project$Main$initialText),
		seed: flags.seed,
		sourceText: $author$project$Main$initialText
	};
	return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
};
var $elm$json$Json$Decode$int = _Json_decodeInt;
var $elm$core$Platform$Sub$batch = _Platform_batch;
var $elm$core$Platform$Sub$none = $elm$core$Platform$Sub$batch(_List_Nil);
var $author$project$Main$subscriptions = function (model) {
	return $elm$core$Platform$Sub$none;
};
var $jxxcarlson$meenylatex$MiniLatex$Render$Delay = {$: 'Delay'};
var $author$project$Main$NewSeed = function (a) {
	return {$: 'NewSeed', a: a};
};
var $author$project$Main$DebounceMsg = function (a) {
	return {$: 'DebounceMsg', a: a};
};
var $jinjor$elm_debounce$Debounce$Later = function (a) {
	return {$: 'Later', a: a};
};
var $jinjor$elm_debounce$Debounce$later = $jinjor$elm_debounce$Debounce$Later;
var $author$project$Main$debounceConfig = {
	strategy: $jinjor$elm_debounce$Debounce$later(250),
	transform: $author$project$Main$DebounceMsg
};
var $elm$random$Random$Generate = function (a) {
	return {$: 'Generate', a: a};
};
var $elm$random$Random$Seed = F2(
	function (a, b) {
		return {$: 'Seed', a: a, b: b};
	});
var $elm$core$Bitwise$shiftRightZfBy = _Bitwise_shiftRightZfBy;
var $elm$random$Random$next = function (_v0) {
	var state0 = _v0.a;
	var incr = _v0.b;
	return A2($elm$random$Random$Seed, ((state0 * 1664525) + incr) >>> 0, incr);
};
var $elm$random$Random$initialSeed = function (x) {
	var _v0 = $elm$random$Random$next(
		A2($elm$random$Random$Seed, 0, 1013904223));
	var state1 = _v0.a;
	var incr = _v0.b;
	var state2 = (state1 + x) >>> 0;
	return $elm$random$Random$next(
		A2($elm$random$Random$Seed, state2, incr));
};
var $elm$time$Time$Name = function (a) {
	return {$: 'Name', a: a};
};
var $elm$time$Time$Offset = function (a) {
	return {$: 'Offset', a: a};
};
var $elm$time$Time$Zone = F2(
	function (a, b) {
		return {$: 'Zone', a: a, b: b};
	});
var $elm$time$Time$customZone = $elm$time$Time$Zone;
var $elm$time$Time$Posix = function (a) {
	return {$: 'Posix', a: a};
};
var $elm$time$Time$millisToPosix = $elm$time$Time$Posix;
var $elm$time$Time$now = _Time_now($elm$time$Time$millisToPosix);
var $elm$time$Time$posixToMillis = function (_v0) {
	var millis = _v0.a;
	return millis;
};
var $elm$random$Random$init = A2(
	$elm$core$Task$andThen,
	function (time) {
		return $elm$core$Task$succeed(
			$elm$random$Random$initialSeed(
				$elm$time$Time$posixToMillis(time)));
	},
	$elm$time$Time$now);
var $elm$random$Random$step = F2(
	function (_v0, seed) {
		var generator = _v0.a;
		return generator(seed);
	});
var $elm$random$Random$onEffects = F3(
	function (router, commands, seed) {
		if (!commands.b) {
			return $elm$core$Task$succeed(seed);
		} else {
			var generator = commands.a.a;
			var rest = commands.b;
			var _v1 = A2($elm$random$Random$step, generator, seed);
			var value = _v1.a;
			var newSeed = _v1.b;
			return A2(
				$elm$core$Task$andThen,
				function (_v2) {
					return A3($elm$random$Random$onEffects, router, rest, newSeed);
				},
				A2($elm$core$Platform$sendToApp, router, value));
		}
	});
var $elm$random$Random$onSelfMsg = F3(
	function (_v0, _v1, seed) {
		return $elm$core$Task$succeed(seed);
	});
var $elm$random$Random$Generator = function (a) {
	return {$: 'Generator', a: a};
};
var $elm$random$Random$map = F2(
	function (func, _v0) {
		var genA = _v0.a;
		return $elm$random$Random$Generator(
			function (seed0) {
				var _v1 = genA(seed0);
				var a = _v1.a;
				var seed1 = _v1.b;
				return _Utils_Tuple2(
					func(a),
					seed1);
			});
	});
var $elm$random$Random$cmdMap = F2(
	function (func, _v0) {
		var generator = _v0.a;
		return $elm$random$Random$Generate(
			A2($elm$random$Random$map, func, generator));
	});
_Platform_effectManagers['Random'] = _Platform_createManager($elm$random$Random$init, $elm$random$Random$onEffects, $elm$random$Random$onSelfMsg, $elm$random$Random$cmdMap);
var $elm$random$Random$command = _Platform_leaf('Random');
var $elm$random$Random$generate = F2(
	function (tagger, generator) {
		return $elm$random$Random$command(
			$elm$random$Random$Generate(
				A2($elm$random$Random$map, tagger, generator)));
	});
var $elm$core$Bitwise$xor = _Bitwise_xor;
var $elm$random$Random$peel = function (_v0) {
	var state = _v0.a;
	var word = (state ^ (state >>> ((state >>> 28) + 4))) * 277803737;
	return ((word >>> 22) ^ word) >>> 0;
};
var $elm$random$Random$int = F2(
	function (a, b) {
		return $elm$random$Random$Generator(
			function (seed0) {
				var _v0 = (_Utils_cmp(a, b) < 0) ? _Utils_Tuple2(a, b) : _Utils_Tuple2(b, a);
				var lo = _v0.a;
				var hi = _v0.b;
				var range = (hi - lo) + 1;
				if (!((range - 1) & range)) {
					return _Utils_Tuple2(
						(((range - 1) & $elm$random$Random$peel(seed0)) >>> 0) + lo,
						$elm$random$Random$next(seed0));
				} else {
					var threshhold = (((-range) >>> 0) % range) >>> 0;
					var accountForBias = function (seed) {
						accountForBias:
						while (true) {
							var x = $elm$random$Random$peel(seed);
							var seedN = $elm$random$Random$next(seed);
							if (_Utils_cmp(x, threshhold) < 0) {
								var $temp$seed = seedN;
								seed = $temp$seed;
								continue accountForBias;
							} else {
								return _Utils_Tuple2((x % range) + lo, seedN);
							}
						}
					};
					return accountForBias(seed0);
				}
			});
	});
var $author$project$StringsV1$mathExampleText = '\n% EXAMPLE 2\n\n\\setcounter{section}{8}\n\n\n\\section{Bras and Kets}\n\nPaul Dirac invented a new notation \\mdash the notation of bras and kets \\mdash for working with hermitian inner products and operators on a Hilbert space $H$.  We describe the basics below, then elaborate on how these apply in the case of countable and continuous orthonormal bases.  We also discuss some of the mathematical issues raised by the delta function and by formulas such as\n\n\\begin{equation}\n\\int_{-\\infty}^\\infty \\frac{dx}{2\\pi}\\; | x \\ket\\bra x | = 1\n\\end{equation}\na\nthat Dirac introduced and which abound in the physics literature.\n\n\\subsection{The basics}\n\nFor the inner product of two vectors, we write $\\bra u | v \\ket$, where this expression is linear in the second variable and conjugate linear in the first.  Thus Dirac\'s $\\bra u | v \\ket$ is the mathematicians\'s $\\bra v, w \\ket$.\n\nIn this notations, $\\bra u | c v\\ket = c\\bra u | v \\ket$, but $\\bra cu |  v\\ket = \\bar c\\bra u | v \\ket$. The symmetry condition reads $\\bra v | u \\ket = \\overline{\\bra u  | v \\ket}$.\n\nLet $A$ be an operator.  The expression $\\bra u | A | v \\ket$ means $\\bra u | Av \\ket$.  Thus it is the same as $\\bra A^*u | v \\ket$.\n\nThe symbol $|v\\ket$ has the same meaning as $v$ if $v$ is a vector. Such vectors are called \\term{kets}.  Let $\\set{ \\psi_a }$ be a set of states, that is, eigenvectors for an operator $A$ with eigenvalue $a$.  The notations $\\psi_a$, $|\\psi_a \\ket$, and  $|a\\ket$ all stand fors the same thing.  It makes sense to say\n\n\\begin{equation}\nA|a\\ket = a|a\\ket\n\\end{equation}\n\nThe expression $\\bra u |$ is the \\term{bra} associated to $u$, where $u$ is an element of the space \\emph{dual} to $V$.  That is, $u$ is a linear functional on $V$:\n\n\\begin{equation}\n\\bra u |(v) = u(v)\n\\end{equation}\n\nIf $u$ is a vector in $V$, we may define the linear functional $\\phi_u(v) = \\bra u | v \\ket$.  In this case, both sides of the equation\n\n\\begin{equation}\n\\bra u |(v) = \\bra u | v \\ket\n\\end{equation}\n\nhave meaning.  For finite-dimensional spaces, we may view bras as row vectors and kets as column vectors.\n\nConsider next the expression $| v \\ket \\bra v |$ where $v$ is a unit vector. it operates on a arbitrary vector $w$ by the rule\n\n\\begin{equation}\n  | w \\ket \\mapsto | v \\ket \\bra v | w \\ket\n\\end{equation}\n\nIf $| w \\ket$ is orthogonal to $| v \\ket$, then the result is zero.  If $| w \\ket = | v \\ket$, then the result is $| v \\ket$, Therefore $| v \\ket \\bra v |$ is orthogonal projection onto $v$.\n\n\n\\subsection{Resolution of the identity}\n\nLet $\\set{ |v_n\\ket} = \\set{ |n\\ket}$ be a complete orthonormal set for $H$ which is indexed by integers $n = 0, 1, 2, \\ldots$.  We claim that\n\n\\begin{equation}\n\\label{resolutionofidentity}\n\\sum_n | n \\ket \\bra n | = \\id.\n\\end{equation}\n\nThat is, the expression on the left, which is a sum of projections operators, is the identity operator $\\id$.  We say that the left-hand side of \\eqref{resolutionofidentity} is  \\term{resolution of the identity}.  The proof that  \\eqref{resolutionofidentity} holds an exercise in bra-ket formalism. Let $v$ be arbitrary and write\n\n\\begin{equation}\n  v = \\sum_m | m \\ket\\bra m | v \\ket\n\\end{equation}\n\nThis is the Fourier decomposition of $v$.  Note that it depends linearly on $| v \\ket$. Applying $\\sum | n \\ket\\bra n|$ to $v$, we find that\n\n\\begin{align}\n\\left(\\sum_n  | n\\ket \\bra n |\\right) \\left(\\sum_m | m \\ket\\bra m | v \\ket \\right) &=\n\\sum_{m,n}  | n \\ket \\bra n |m \\ket\\bra m | v \\ket  \\\\\n&= \\sum_{m,n}  | n \\ket \\delta_{n,m}\\bra m | v \\ket \\\\\n& = \\sum_{m}  | m \\ket \\bra m | v \\ket \\\\\n&= v\n\\end{align}\n\n\\strong{Q.E.D.}\n\nHere the quantities $\\delta_{n,m}$ may be viewed as the elements of the identity matrix  \\mdash possibly $n\\times n$, possibly $\\infty\\times\\infty$.\n\nConsider next an operator $\\Omega$.  Write it as\n\n\\begin{align}\n\\Omega &= \\left(\\sum_m  | m \\ket \\bra m |\\right) \\Omega \\left(\\sum_n  | n \\ket \\bra n | \\right) \\\\\n&= \\sum_{m,n}  |m | \\ket \\bra m |  \\Omega | n \\ket \\bra n | & \\\\\n& = \\sum_m  | m\\ket   \\Omega_{m.n} \\bra n |\n\\end{align}\n\nThe operator  is determined by its \\term{matrix elements}\n\n\\begin{equation}\n\\Omega_{m,n} = \\bra m |  \\Omega | n \\ket\n\\end{equation}\n\nThe matrix elements are the elements o the matrix of  $\\Omega$ in the given orthonormal basis, i.e.,  the $\\Omega_{m,n}$\n\nOne often encounters the phrase "let us insert a resolution of the identity".  To see what this means, consider the expression $\\bra m AB m \\ket$, which we expand as follows:\n\n\\begin{align}\n\\bra m | AB n | \\ket &= \\bra m | A\\id B | n \\ket \\\\\n&= \\sum_i \\bra m A | i \\ket \\bra i | B n \\ket\n\\end{align}\n\nThis is the same as the identity\n\n\\begin{equation}\n(AB)_{mn} = \\sum_i A_{mi} B_{in}\n\\end{equation}\n\n\\subsection{Continuous spectrum}\n\nOne also has resolution of the identity for operators with continuous spectrum.  Take, for example, the operator $-id/dx$ which has (generalized) eigenfunctions $e^{ikx}$. Writing $| k \\ket$ for $e^{ikx}$, one has\n\n\\begin{equation}\n\\id = \\frac{1}{2\\pi} \\int_{-\\infty}^\\infty dk\\, | k \\ket \\bra k |\n\\end{equation}\n\nStanding by itself, the meaning of this formula is a subtle matter.  However, when applied to a function, we have\n\n\\begin{equation}\n| f \\ket = \\frac{1}{2\\pi} \\int_{-\\infty}^\\infty dk\\, | k \\ket \\bra k | f \\ket\n\\end{equation}\n\nThis is an encoding of the Fourier inversion theorem:\n\n\\begin{equation}\nf(x) = \\frac{1}{\\sqrt{2\\pi}} \\int_{-\\infty}^\\infty \\hat f(k) e^{ikx} dk\n\\end{equation}\n\n\n\n\n\\subsection{References}\n\n\\href{http://ocw.mit.edu/courses/physics/8-05-quantum-physics-ii-fall-2013/lecture-notes/MIT8_05F13_Chap_04.pdf}{Dirac\'s Bra and Ket notation} \\mdash Notes from B. Zwiebach\'s course at MIT\n\n\\href{http://www.physics.iitm.ac.in/~labs/dynamical/pedagogy/vb/delta.pdf}{All about the Dirac delta function} \\mdash V. Balakrishnan, IIT Madras\n\n\\href{http://math.arizona.edu/~kglasner/math456/fouriertransform.pdf}{Fourier transform techniques} \\mdash U. Arizona notes\n\n\\href{https://www.math.utah.edu/~gustafso/s2013/3150/pdeNotes/fourierTransorm-PeterOlver2013.pdf}{Fourier transform} \\mdash Olver notes\n\n\\href{http://www.physics.rutgers.edu/~steves/501/Lectures_Final/Lec06_Propagator.pdf}{Free particle propagator}\n\n\n';
var $author$project$Main$prependMacros = F2(
	function (macros_, sourceText) {
		return '$$\n' + ($author$project$Main$normalize(macros_) + ('\n$$\n\n' + sourceText));
	});
var $jinjor$elm_debounce$Debounce$Flush = function (a) {
	return {$: 'Flush', a: a};
};
var $jinjor$elm_debounce$Debounce$SendIfLengthNotChangedFrom = function (a) {
	return {$: 'SendIfLengthNotChangedFrom', a: a};
};
var $elm$core$Process$sleep = _Process_sleep;
var $jinjor$elm_debounce$Debounce$delayCmd = F2(
	function (delay, msg) {
		return A2(
			$elm$core$Task$perform,
			function (_v0) {
				return msg;
			},
			$elm$core$Process$sleep(delay));
	});
var $jinjor$elm_debounce$Debounce$length = function (_v0) {
	var input = _v0.a.input;
	return $elm$core$List$length(input);
};
var $elm$core$Platform$Cmd$map = _Platform_map;
var $jinjor$elm_debounce$Debounce$push = F3(
	function (config, a, _v0) {
		var d = _v0.a;
		var newDebounce = $jinjor$elm_debounce$Debounce$Debounce(
			_Utils_update(
				d,
				{
					input: A2($elm$core$List$cons, a, d.input)
				}));
		var selfCmd = function () {
			var _v1 = config.strategy;
			switch (_v1.$) {
				case 'Manual':
					var offset = _v1.a;
					return d.locked ? $elm$core$Platform$Cmd$none : A2(
						$jinjor$elm_debounce$Debounce$delayCmd,
						offset,
						$jinjor$elm_debounce$Debounce$Flush($elm$core$Maybe$Nothing));
				case 'Soon':
					var offset = _v1.a;
					var delay = _v1.b;
					return d.locked ? $elm$core$Platform$Cmd$none : A2(
						$jinjor$elm_debounce$Debounce$delayCmd,
						offset,
						$jinjor$elm_debounce$Debounce$Flush(
							$elm$core$Maybe$Just(delay)));
				default:
					var delay = _v1.a;
					return A2(
						$jinjor$elm_debounce$Debounce$delayCmd,
						delay,
						$jinjor$elm_debounce$Debounce$SendIfLengthNotChangedFrom(
							$jinjor$elm_debounce$Debounce$length(newDebounce)));
			}
		}();
		return _Utils_Tuple2(
			newDebounce,
			A2($elm$core$Platform$Cmd$map, config.transform, selfCmd));
	});
var $author$project$Main$renderFromEditRecord = F2(
	function (counter, editRecord) {
		return A2(
			$elm$html$Html$div,
			_List_Nil,
			A2(
				$elm$core$List$map,
				function (x) {
					return A2(
						$elm$html$Html$div,
						_List_fromArray(
							[
								A2($elm$html$Html$Attributes$style, 'margin-bottom', '0.65em')
							]),
						_List_fromArray(
							[x]));
				},
				A2(
					$elm$core$List$map,
					$elm$html$Html$map($author$project$Main$LaTeXMsg),
					$jxxcarlson$meenylatex$MiniLatex$Edit$get(editRecord))));
	});
var $author$project$Main$Render = function (a) {
	return {$: 'Render', a: a};
};
var $author$project$Main$render_ = function (str) {
	return A2(
		$elm$core$Task$perform,
		$author$project$Main$Render,
		$elm$core$Task$succeed(str));
};
var $author$project$Main$NoOp = {$: 'NoOp'};
var $elm$core$Basics$composeL = F3(
	function (g, f, x) {
		return g(
			f(x));
	});
var $elm$core$Task$onError = _Scheduler_onError;
var $elm$core$Task$attempt = F2(
	function (resultToMessage, task) {
		return $elm$core$Task$command(
			$elm$core$Task$Perform(
				A2(
					$elm$core$Task$onError,
					A2(
						$elm$core$Basics$composeL,
						A2($elm$core$Basics$composeL, $elm$core$Task$succeed, resultToMessage),
						$elm$core$Result$Err),
					A2(
						$elm$core$Task$andThen,
						A2(
							$elm$core$Basics$composeL,
							A2($elm$core$Basics$composeL, $elm$core$Task$succeed, resultToMessage),
							$elm$core$Result$Ok),
						task))));
	});
var $elm$browser$Browser$Dom$setViewportOf = _Browser_setViewportOf;
var $author$project$Main$setViewPortForSelectedLine = F2(
	function (element, viewport) {
		var y = ((viewport.viewport.y + element.element.y) - element.element.height) - 100;
		return A2(
			$elm$core$Task$attempt,
			function (_v0) {
				return $author$project$Main$NoOp;
			},
			A3($elm$browser$Browser$Dom$setViewportOf, '__RENDERED_TEXT__', 0, y));
	});
var $jinjor$elm_debounce$Debounce$takeLast = F3(
	function (send, head, tail) {
		return _Utils_Tuple2(
			_List_Nil,
			send(head));
	});
var $jinjor$elm_debounce$Debounce$update = F4(
	function (config, send, msg, _v0) {
		var d = _v0.a;
		switch (msg.$) {
			case 'NoOp':
				return _Utils_Tuple2(
					$jinjor$elm_debounce$Debounce$Debounce(d),
					$elm$core$Platform$Cmd$none);
			case 'Flush':
				var tryAgainAfter = msg.a;
				var _v2 = d.input;
				if (_v2.b) {
					var head = _v2.a;
					var tail = _v2.b;
					var selfCmd = function () {
						if (tryAgainAfter.$ === 'Just') {
							var delay = tryAgainAfter.a;
							return A2(
								$jinjor$elm_debounce$Debounce$delayCmd,
								delay,
								$jinjor$elm_debounce$Debounce$Flush(
									$elm$core$Maybe$Just(delay)));
						} else {
							return $elm$core$Platform$Cmd$none;
						}
					}();
					var _v3 = A2(send, head, tail);
					var input = _v3.a;
					var sendCmd = _v3.b;
					return _Utils_Tuple2(
						$jinjor$elm_debounce$Debounce$Debounce(
							_Utils_update(
								d,
								{input: input, locked: true})),
						$elm$core$Platform$Cmd$batch(
							_List_fromArray(
								[
									sendCmd,
									A2($elm$core$Platform$Cmd$map, config.transform, selfCmd)
								])));
				} else {
					return _Utils_Tuple2(
						$jinjor$elm_debounce$Debounce$Debounce(
							_Utils_update(
								d,
								{locked: false})),
						$elm$core$Platform$Cmd$none);
				}
			default:
				var lastInputLength = msg.a;
				var _v5 = _Utils_Tuple2(
					_Utils_cmp(
						$elm$core$List$length(d.input),
						lastInputLength) < 1,
					d.input);
				if (_v5.a && _v5.b.b) {
					var _v6 = _v5.b;
					var head = _v6.a;
					var tail = _v6.b;
					var _v7 = A2(send, head, tail);
					var input = _v7.a;
					var cmd = _v7.b;
					return _Utils_Tuple2(
						$jinjor$elm_debounce$Debounce$Debounce(
							_Utils_update(
								d,
								{input: input})),
						cmd);
				} else {
					return _Utils_Tuple2(
						$jinjor$elm_debounce$Debounce$Debounce(d),
						$elm$core$Platform$Cmd$none);
				}
		}
	});
var $jxxcarlson$meenylatex$MiniLatex$Edit$update = F4(
	function (mathJaxRenderOption, version, source, editRecord) {
		return A6(
			$jxxcarlson$meenylatex$Internal$LatexDiffer$update,
			version,
			$jxxcarlson$meenylatex$Internal$Parser$parse,
			A2($jxxcarlson$meenylatex$Internal$Render2$renderLatexList, mathJaxRenderOption, source),
			$jxxcarlson$meenylatex$Internal$Render2$renderString(mathJaxRenderOption),
			editRecord,
			source);
	});
var $author$project$Main$update = F2(
	function (msg, model) {
		switch (msg.$) {
			case 'NoOp':
				return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
			case 'GetContent':
				var str = msg.a;
				var _v1 = A3($jinjor$elm_debounce$Debounce$push, $author$project$Main$debounceConfig, str, model.debounce);
				var debounce = _v1.a;
				var cmd = _v1.b;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{debounce: debounce, sourceText: str}),
					cmd);
			case 'GetMacroText':
				var str = msg.a;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{macroText: str}),
					$elm$core$Platform$Cmd$none);
			case 'DebounceMsg':
				var msg_ = msg.a;
				var _v2 = A4(
					$jinjor$elm_debounce$Debounce$update,
					$author$project$Main$debounceConfig,
					$jinjor$elm_debounce$Debounce$takeLast($author$project$Main$render_),
					msg_,
					model.debounce);
				var debounce = _v2.a;
				var cmd = _v2.b;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{debounce: debounce}),
					cmd);
			case 'Render':
				var str = msg.a;
				var newEditRecord = A4(
					$jxxcarlson$meenylatex$MiniLatex$Edit$update,
					$jxxcarlson$meenylatex$MiniLatex$Render$NoDelay,
					model.seed,
					A2($author$project$Main$prependMacros, model.macroText, str),
					model.editRecord);
				var n = $elm$core$String$fromInt(model.counter);
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							counter: model.counter + 2,
							editRecord: newEditRecord,
							renderedText: A2($author$project$Main$renderFromEditRecord, model.counter, newEditRecord)
						}),
					A2(
						$elm$random$Random$generate,
						$author$project$Main$NewSeed,
						A2($elm$random$Random$int, 1, 10000)));
			case 'GenerateSeed':
				return _Utils_Tuple2(
					model,
					A2(
						$elm$random$Random$generate,
						$author$project$Main$NewSeed,
						A2($elm$random$Random$int, 1, 10000)));
			case 'NewSeed':
				var newSeed = msg.a;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{seed: newSeed}),
					$elm$core$Platform$Cmd$none);
			case 'Clear':
				var editRecord = A3($jxxcarlson$meenylatex$MiniLatex$Edit$init, $jxxcarlson$meenylatex$MiniLatex$Render$NoDelay, 0, '');
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							counter: model.counter + 1,
							editRecord: editRecord,
							renderedText: A2($author$project$Main$renderFromEditRecord, model.counter, editRecord),
							sourceText: ''
						}),
					$elm$core$Platform$Cmd$none);
			case 'FullRender':
				var editRecord = A3(
					$jxxcarlson$meenylatex$MiniLatex$Edit$init,
					$jxxcarlson$meenylatex$MiniLatex$Render$NoDelay,
					model.seed,
					A2($author$project$Main$prependMacros, model.macroText, model.sourceText));
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							counter: model.counter + 1,
							editRecord: editRecord,
							renderedText: A2($author$project$Main$renderFromEditRecord, model.counter, editRecord)
						}),
					$elm$core$Platform$Cmd$none);
			case 'RestoreText':
				var editRecord = A3(
					$jxxcarlson$meenylatex$MiniLatex$Edit$init,
					$jxxcarlson$meenylatex$MiniLatex$Render$NoDelay,
					model.seed,
					A2($author$project$Main$prependMacros, $author$project$Main$initialMacroText, $author$project$Main$initialText));
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							counter: model.counter + 1,
							editRecord: editRecord,
							renderedText: A2($author$project$Main$renderFromEditRecord, model.counter, editRecord),
							sourceText: $author$project$Main$initialText
						}),
					$elm$core$Platform$Cmd$none);
			case 'ExampleText':
				var editRecord = A3(
					$jxxcarlson$meenylatex$MiniLatex$Edit$init,
					$jxxcarlson$meenylatex$MiniLatex$Render$Delay,
					model.seed,
					A2($author$project$Main$prependMacros, $author$project$Main$initialMacroText, $author$project$StringsV1$mathExampleText));
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							counter: model.counter + 1,
							editRecord: editRecord,
							renderedText: A2($author$project$Main$renderFromEditRecord, model.counter, editRecord),
							sourceText: $author$project$StringsV1$mathExampleText
						}),
					$elm$core$Platform$Cmd$none);
			case 'SetViewPortForElement':
				var result = msg.a;
				if (result.$ === 'Ok') {
					var _v4 = result.a;
					var element = _v4.a;
					var viewport = _v4.b;
					return _Utils_Tuple2(
						model,
						A2($author$project$Main$setViewPortForSelectedLine, element, viewport));
				} else {
					return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
				}
			default:
				var laTeXMsg = msg.a;
				var id = laTeXMsg.a;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{message: 'Clicked: ' + id}),
					$elm$core$Platform$Cmd$none);
		}
	});
var $author$project$Main$GetContent = function (a) {
	return {$: 'GetContent', a: a};
};
var $author$project$Main$Clear = {$: 'Clear'};
var $elm$html$Html$button = _VirtualDom_node('button');
var $author$project$Style$buttonStyle = F2(
	function (color, width) {
		var realWidth = function (x) {
			return x + 'px';
		}(
			$elm$core$String$fromInt(width + 0));
		return _List_fromArray(
			[
				A2($elm$html$Html$Attributes$style, 'backgroundColor', color),
				A2($elm$html$Html$Attributes$style, 'color', 'white'),
				A2($elm$html$Html$Attributes$style, 'width', realWidth),
				A2($elm$html$Html$Attributes$style, 'height', '25px'),
				A2($elm$html$Html$Attributes$style, 'margin-top', '20px'),
				A2($elm$html$Html$Attributes$style, 'margin-right', '12px'),
				A2($elm$html$Html$Attributes$style, 'font-size', '9pt'),
				A2($elm$html$Html$Attributes$style, 'text-align', 'center'),
				A2($elm$html$Html$Attributes$style, 'border', 'none')
			]);
	});
var $author$project$Style$colorBlue = 'rgb(100,100,200)';
var $author$project$Main$clearButton = function (width) {
	return A2(
		$elm$html$Html$button,
		_Utils_ap(
			_List_fromArray(
				[
					$elm$html$Html$Events$onClick($author$project$Main$Clear)
				]),
			A2($author$project$Style$buttonStyle, $author$project$Style$colorBlue, width)),
		_List_fromArray(
			[
				$elm$html$Html$text('Clear')
			]));
};
var $author$project$Style$textStyle = F3(
	function (width, height, color) {
		return _List_fromArray(
			[
				A2($elm$html$Html$Attributes$style, 'width', width),
				A2($elm$html$Html$Attributes$style, 'height', height),
				A2($elm$html$Html$Attributes$style, 'padding', '15px'),
				A2($elm$html$Html$Attributes$style, 'margin-left', '20px'),
				A2($elm$html$Html$Attributes$style, 'background-color', color),
				A2($elm$html$Html$Attributes$style, 'overflow', 'scroll'),
				A2($elm$html$Html$Attributes$style, 'float', 'left')
			]);
	});
var $author$project$Style$editorTextStyle = A3($author$project$Style$textStyle, '400px', '450px', '#fff');
var $author$project$Main$FullRender = {$: 'FullRender'};
var $author$project$Main$fullRenderButton = function (width) {
	return A2(
		$elm$html$Html$button,
		_Utils_ap(
			_List_fromArray(
				[
					$elm$html$Html$Events$onClick($author$project$Main$FullRender)
				]),
			A2($author$project$Style$buttonStyle, $author$project$Style$colorBlue, width)),
		_List_fromArray(
			[
				$elm$html$Html$text('Full Render')
			]));
};
var $elm$html$Html$Events$alwaysStop = function (x) {
	return _Utils_Tuple2(x, true);
};
var $elm$virtual_dom$VirtualDom$MayStopPropagation = function (a) {
	return {$: 'MayStopPropagation', a: a};
};
var $elm$html$Html$Events$stopPropagationOn = F2(
	function (event, decoder) {
		return A2(
			$elm$virtual_dom$VirtualDom$on,
			event,
			$elm$virtual_dom$VirtualDom$MayStopPropagation(decoder));
	});
var $elm$json$Json$Decode$at = F2(
	function (fields, decoder) {
		return A3($elm$core$List$foldr, $elm$json$Json$Decode$field, decoder, fields);
	});
var $elm$json$Json$Decode$string = _Json_decodeString;
var $elm$html$Html$Events$targetValue = A2(
	$elm$json$Json$Decode$at,
	_List_fromArray(
		['target', 'value']),
	$elm$json$Json$Decode$string);
var $elm$html$Html$Events$onInput = function (tagger) {
	return A2(
		$elm$html$Html$Events$stopPropagationOn,
		'input',
		A2(
			$elm$json$Json$Decode$map,
			$elm$html$Html$Events$alwaysStop,
			A2($elm$json$Json$Decode$map, tagger, $elm$html$Html$Events$targetValue)));
};
var $author$project$Main$RestoreText = {$: 'RestoreText'};
var $author$project$Main$restoreTextButton = function (width) {
	return A2(
		$elm$html$Html$button,
		_Utils_ap(
			_List_fromArray(
				[
					$elm$html$Html$Events$onClick($author$project$Main$RestoreText)
				]),
			A2($author$project$Style$buttonStyle, $author$project$Style$colorBlue, width)),
		_List_fromArray(
			[
				$elm$html$Html$text('Restore')
			]));
};
var $elm$html$Html$textarea = _VirtualDom_node('textarea');
var $elm$html$Html$Attributes$value = $elm$html$Html$Attributes$stringProperty('value');
var $author$project$Main$editor = function (model) {
	return A2(
		$elm$html$Html$div,
		_List_Nil,
		_List_fromArray(
			[
				A2(
				$elm$html$Html$textarea,
				_Utils_ap(
					$author$project$Style$editorTextStyle,
					_List_fromArray(
						[
							$elm$html$Html$Events$onInput($author$project$Main$GetContent),
							$elm$html$Html$Attributes$value(model.sourceText)
						])),
				_List_Nil),
				A2(
				$elm$html$Html$p,
				_List_fromArray(
					[
						A2($elm$html$Html$Attributes$style, 'clear', 'left'),
						A2($elm$html$Html$Attributes$style, 'margin-left', '20px'),
						A2($elm$html$Html$Attributes$style, 'margin-top', '-20px')
					]),
				_List_fromArray(
					[
						$author$project$Main$clearButton(60),
						$author$project$Main$restoreTextButton(80),
						$author$project$Main$fullRenderButton(100)
					]))
			]));
};
var $elm$html$Html$h1 = _VirtualDom_node('h1');
var $author$project$Style$labelStyle = _List_fromArray(
	[
		A2($elm$html$Html$Attributes$style, 'margin-top', '5px'),
		A2($elm$html$Html$Attributes$style, 'margin-bottom', '0px'),
		A2($elm$html$Html$Attributes$style, 'margin-left', '20px'),
		A2($elm$html$Html$Attributes$style, 'font-weight', 'bold')
	]);
var $author$project$Main$label = function (text_) {
	return A2(
		$elm$html$Html$p,
		$author$project$Style$labelStyle,
		_List_fromArray(
			[
				$elm$html$Html$text(text_)
			]));
};
var $author$project$Main$lhs = function (model) {
	return A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class('lhs')
			]),
		_List_fromArray(
			[
				A2(
				$elm$html$Html$h1,
				_List_fromArray(
					[
						A2($elm$html$Html$Attributes$style, 'margin-left', '20px')
					]),
				_List_fromArray(
					[
						$elm$html$Html$text('MiniLatex Demo')
					])),
				$author$project$Main$label('Edit or write new LaTeX below. It will be rendered in real time.'),
				$author$project$Main$editor(model),
				A2(
				$elm$html$Html$p,
				_List_fromArray(
					[
						A2($elm$html$Html$Attributes$style, 'margin-left', '20px'),
						A2($elm$html$Html$Attributes$style, 'font-style', 'italic')
					]),
				_List_fromArray(
					[
						$elm$html$Html$text('For more information about MiniLaTeX, please go to  '),
						A2(
						$elm$html$Html$a,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$href('https://minilatex.io'),
								$elm$html$Html$Attributes$target('_blank')
							]),
						_List_fromArray(
							[
								$elm$html$Html$text('minilatex.io')
							]))
					])),
				A2(
				$elm$html$Html$p,
				_List_fromArray(
					[
						A2($elm$html$Html$Attributes$style, 'margin-left', '20px')
					]),
				_List_fromArray(
					[
						$elm$html$Html$text(model.message)
					]))
			]));
};
var $author$project$Style$outerStyle = _List_fromArray(
	[
		A2($elm$html$Html$Attributes$style, 'margin-top', '20px'),
		A2($elm$html$Html$Attributes$style, 'background-color', '#e1e6e8'),
		A2($elm$html$Html$Attributes$style, 'padding', '20px'),
		A2($elm$html$Html$Attributes$style, 'width', '1430px'),
		A2($elm$html$Html$Attributes$style, 'height', '710px')
	]);
var $author$project$Style$renderedSourceStyle = A3($author$project$Style$textStyle, '400px', '610px', '#fff');
var $author$project$Main$renderedSource = function (model) {
	return A2(
		$elm$html$Html$div,
		_Utils_ap(
			$author$project$Style$renderedSourceStyle,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('rhs')
				])),
		_List_fromArray(
			[model.renderedText]));
};
var $author$project$Main$view = function (model) {
	return A2(
		$elm$html$Html$div,
		_Utils_ap(
			$author$project$Style$outerStyle,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('container')
				])),
		_List_fromArray(
			[
				$author$project$Main$lhs(model),
				$author$project$Main$renderedSource(model)
			]));
};
var $author$project$Main$main = $elm$browser$Browser$element(
	{init: $author$project$Main$init, subscriptions: $author$project$Main$subscriptions, update: $author$project$Main$update, view: $author$project$Main$view});
_Platform_export({'Main':{'init':$author$project$Main$main(
	A2(
		$elm$json$Json$Decode$andThen,
		function (width) {
			return A2(
				$elm$json$Json$Decode$andThen,
				function (seed) {
					return A2(
						$elm$json$Json$Decode$andThen,
						function (height) {
							return $elm$json$Json$Decode$succeed(
								{height: height, seed: seed, width: width});
						},
						A2($elm$json$Json$Decode$field, 'height', $elm$json$Json$Decode$int));
				},
				A2($elm$json$Json$Decode$field, 'seed', $elm$json$Json$Decode$int));
		},
		A2($elm$json$Json$Decode$field, 'width', $elm$json$Json$Decode$int)))(0)}});}(this));
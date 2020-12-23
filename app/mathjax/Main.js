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


function _Debug_crash(identifier)
{
	throw new Error('https://github.com/elm/core/blob/1.0.0/hints/' + identifier + '.md');
}


function _Debug_crash_UNUSED(identifier, fact1, fact2, fact3, fact4)
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
	if (region.d7.bT === region.bB.bT)
	{
		return 'on line ' + region.d7.bT;
	}
	return 'on lines ' + region.d7.bT + ' through ' + region.bB.bT;
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

	/**_UNUSED/
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

	/**/
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

	/**_UNUSED/
	if (x instanceof String)
	{
		var a = x.valueOf();
		var b = y.valueOf();
		return a === b ? 0 : a < b ? -1 : 1;
	}
	//*/

	/**/
	if (typeof x.$ === 'undefined')
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
	return n < 0 ? $elm$core$Basics$LT : n ? $elm$core$Basics$GT : $elm$core$Basics$EQ;
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



/**_UNUSED/
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


var _Platform_worker = F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.ds,
		impl.eA,
		impl.ef,
		function() { return function() {} }
	);
});



// INITIALIZE A PROGRAM


function _Platform_initialize(flagDecoder, args, init, update, subscriptions, stepperBuilder)
{
	var result = A2(_Json_run, flagDecoder, _Json_wrap(args ? args['flags'] : undefined));
	$elm$core$Result$isOk(result) || _Debug_crash(2 /**_UNUSED/, _Json_errorToString(result.a) /**/);
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
			? (name == 'init')
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

	/**/
	var node = args['node'];
	//*/
	/**_UNUSED/
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

function _VirtualDom_noJavaScriptUri(value)
{
	return /^javascript:/i.test(value.replace(/\s/g,'')) ? '' : value;
}

function _VirtualDom_noJavaScriptUri_UNUSED(value)
{
	return /^javascript:/i.test(value.replace(/\s/g,''))
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
		aQ: func(record.aQ),
		bh: record.bh,
		bd: record.bd
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
		var message = !tag ? value : tag < 3 ? value.a : value.aQ;
		var stopPropagation = tag == 1 ? value.b : tag == 3 && value.bh;
		var currentEventNode = (
			stopPropagation && event.stopPropagation(),
			(tag == 2 ? value.b : tag == 3 && value.bd) && event.preventDefault(),
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
		impl.ds,
		impl.eA,
		impl.ef,
		function(sendToApp, initialModel) {
			var view = impl.eB;
			/**/
			var domNode = args['node'];
			//*/
			/**_UNUSED/
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
		impl.ds,
		impl.eA,
		impl.ef,
		function(sendToApp, initialModel) {
			var divertHrefToApp = impl.bg && impl.bg(sendToApp)
			var view = impl.eB;
			var title = _VirtualDom_doc.title;
			var bodyNode = _VirtualDom_doc.body;
			var currNode = _VirtualDom_virtualize(bodyNode);
			return _Browser_makeAnimator(initialModel, function(model)
			{
				_VirtualDom_divertHrefToApp = divertHrefToApp;
				var doc = view(model);
				var nextNode = _VirtualDom_node('body')(_List_Nil)(doc.cV);
				var patches = _VirtualDom_diff(currNode, nextNode);
				bodyNode = _VirtualDom_applyPatches(bodyNode, currNode, patches, sendToApp);
				currNode = nextNode;
				_VirtualDom_divertHrefToApp = 0;
				(title !== doc.ev) && (_VirtualDom_doc.title = title = doc.ev);
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
	var onUrlChange = impl.dM;
	var onUrlRequest = impl.dN;
	var key = function() { key.a(onUrlChange(_Browser_getUrl())); };

	return _Browser_document({
		bg: function(sendToApp)
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
							&& curr.ca === next.ca
							&& curr.bK === next.bK
							&& curr.b6.a === next.b6.a
						)
							? $elm$browser$Browser$Internal(next)
							: $elm$browser$Browser$External(href)
					));
				}
			});
		},
		ds: function(flags)
		{
			return A3(impl.ds, flags, _Browser_getUrl(), key);
		},
		eB: impl.eB,
		eA: impl.eA,
		ef: impl.ef
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
		? { dl: 'hidden', c2: 'visibilitychange' }
		:
	(typeof _VirtualDom_doc.mozHidden !== 'undefined')
		? { dl: 'mozHidden', c2: 'mozvisibilitychange' }
		:
	(typeof _VirtualDom_doc.msHidden !== 'undefined')
		? { dl: 'msHidden', c2: 'msvisibilitychange' }
		:
	(typeof _VirtualDom_doc.webkitHidden !== 'undefined')
		? { dl: 'webkitHidden', c2: 'webkitvisibilitychange' }
		: { dl: 'hidden', c2: 'visibilitychange' };
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
		ch: _Browser_getScene(),
		eC: {
			cz: _Browser_window.pageXOffset,
			cA: _Browser_window.pageYOffset,
			eD: _Browser_doc.documentElement.clientWidth,
			a4: _Browser_doc.documentElement.clientHeight
		}
	};
}

function _Browser_getScene()
{
	var body = _Browser_doc.body;
	var elem = _Browser_doc.documentElement;
	return {
		eD: Math.max(body.scrollWidth, body.offsetWidth, elem.scrollWidth, elem.offsetWidth, elem.clientWidth),
		a4: Math.max(body.scrollHeight, body.offsetHeight, elem.scrollHeight, elem.offsetHeight, elem.clientHeight)
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
			ch: {
				eD: node.scrollWidth,
				a4: node.scrollHeight
			},
			eC: {
				cz: node.scrollLeft,
				cA: node.scrollTop,
				eD: node.clientWidth,
				a4: node.clientHeight
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
			ch: _Browser_getScene(),
			eC: {
				cz: x,
				cA: y,
				eD: _Browser_doc.documentElement.clientWidth,
				a4: _Browser_doc.documentElement.clientHeight
			},
			bA: {
				cz: x + rect.left,
				cA: y + rect.top,
				eD: rect.width,
				a4: rect.height
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
	if (options.bZ) { flags += 'm'; }
	if (options.br) { flags += 'i'; }

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



// DECODER

var _File_decoder = _Json_decodePrim(function(value) {
	// NOTE: checks if `File` exists in case this is run on node
	return (typeof File !== 'undefined' && value instanceof File)
		? $elm$core$Result$Ok(value)
		: _Json_expecting('a FILE', value);
});


// METADATA

function _File_name(file) { return file.name; }
function _File_mime(file) { return file.type; }
function _File_size(file) { return file.size; }

function _File_lastModified(file)
{
	return $elm$time$Time$millisToPosix(file.lastModified);
}


// DOWNLOAD

var _File_downloadNode;

function _File_getDownloadNode()
{
	return _File_downloadNode || (_File_downloadNode = document.createElement('a'));
}

var _File_download = F3(function(name, mime, content)
{
	return _Scheduler_binding(function(callback)
	{
		var blob = new Blob([content], {type: mime});

		// for IE10+
		if (navigator.msSaveOrOpenBlob)
		{
			navigator.msSaveOrOpenBlob(blob, name);
			return;
		}

		// for HTML5
		var node = _File_getDownloadNode();
		var objectUrl = URL.createObjectURL(blob);
		node.href = objectUrl;
		node.download = name;
		_File_click(node);
		URL.revokeObjectURL(objectUrl);
	});
});

function _File_downloadUrl(href)
{
	return _Scheduler_binding(function(callback)
	{
		var node = _File_getDownloadNode();
		node.href = href;
		node.download = '';
		node.origin === location.origin || (node.target = '_blank');
		_File_click(node);
	});
}


// IE COMPATIBILITY

function _File_makeBytesSafeForInternetExplorer(bytes)
{
	// only needed by IE10 and IE11 to fix https://github.com/elm/file/issues/10
	// all other browsers can just run `new Blob([bytes])` directly with no problem
	//
	return new Uint8Array(bytes.buffer, bytes.byteOffset, bytes.byteLength);
}

function _File_click(node)
{
	// only needed by IE10 and IE11 to fix https://github.com/elm/file/issues/11
	// all other browsers have MouseEvent and do not need this conditional stuff
	//
	if (typeof MouseEvent === 'function')
	{
		node.dispatchEvent(new MouseEvent('click'));
	}
	else
	{
		var event = document.createEvent('MouseEvents');
		event.initMouseEvent('click', true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
		document.body.appendChild(node);
		node.dispatchEvent(event);
		document.body.removeChild(node);
	}
}


// UPLOAD

var _File_node;

function _File_uploadOne(mimes)
{
	return _Scheduler_binding(function(callback)
	{
		_File_node = document.createElement('input');
		_File_node.type = 'file';
		_File_node.accept = A2($elm$core$String$join, ',', mimes);
		_File_node.addEventListener('change', function(event)
		{
			callback(_Scheduler_succeed(event.target.files[0]));
		});
		_File_click(_File_node);
	});
}

function _File_uploadOneOrMore(mimes)
{
	return _Scheduler_binding(function(callback)
	{
		_File_node = document.createElement('input');
		_File_node.type = 'file';
		_File_node.multiple = true;
		_File_node.accept = A2($elm$core$String$join, ',', mimes);
		_File_node.addEventListener('change', function(event)
		{
			var elmFiles = _List_fromArray(event.target.files);
			callback(_Scheduler_succeed(_Utils_Tuple2(elmFiles.a, elmFiles.b)));
		});
		_File_click(_File_node);
	});
}


// CONTENT

function _File_toString(blob)
{
	return _Scheduler_binding(function(callback)
	{
		var reader = new FileReader();
		reader.addEventListener('loadend', function() {
			callback(_Scheduler_succeed(reader.result));
		});
		reader.readAsText(blob);
		return function() { reader.abort(); };
	});
}

function _File_toBytes(blob)
{
	return _Scheduler_binding(function(callback)
	{
		var reader = new FileReader();
		reader.addEventListener('loadend', function() {
			callback(_Scheduler_succeed(new DataView(reader.result)));
		});
		reader.readAsArrayBuffer(blob);
		return function() { reader.abort(); };
	});
}

function _File_toUrl(blob)
{
	return _Scheduler_binding(function(callback)
	{
		var reader = new FileReader();
		reader.addEventListener('loadend', function() {
			callback(_Scheduler_succeed(reader.result));
		});
		reader.readAsDataURL(blob);
		return function() { reader.abort(); };
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
				if (!node.$) {
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
	var dict = _v0;
	return $elm$core$Dict$keys(dict);
};
var $elm$core$Basics$EQ = 1;
var $elm$core$Basics$GT = 2;
var $elm$core$Basics$LT = 0;
var $elm$core$Result$Err = function (a) {
	return {$: 1, a: a};
};
var $elm$json$Json$Decode$Failure = F2(
	function (a, b) {
		return {$: 3, a: a, b: b};
	});
var $elm$json$Json$Decode$Field = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $elm$json$Json$Decode$Index = F2(
	function (a, b) {
		return {$: 1, a: a, b: b};
	});
var $elm$core$Result$Ok = function (a) {
	return {$: 0, a: a};
};
var $elm$json$Json$Decode$OneOf = function (a) {
	return {$: 2, a: a};
};
var $elm$core$Basics$False = 1;
var $elm$core$Basics$add = _Basics_add;
var $elm$core$Maybe$Just = function (a) {
	return {$: 0, a: a};
};
var $elm$core$Maybe$Nothing = {$: 1};
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
				case 0:
					var f = error.a;
					var err = error.b;
					var isSimple = function () {
						var _v1 = $elm$core$String$uncons(f);
						if (_v1.$ === 1) {
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
				case 1:
					var i = error.a;
					var err = error.b;
					var indexName = '[' + ($elm$core$String$fromInt(i) + ']');
					var $temp$error = err,
						$temp$context = A2($elm$core$List$cons, indexName, context);
					error = $temp$error;
					context = $temp$context;
					continue errorToStringHelp;
				case 2:
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
		return {$: 0, a: a, b: b, c: c, d: d};
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
	return {$: 1, a: a};
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
	return {$: 0, a: a};
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
		if (!builder.i) {
			return A4(
				$elm$core$Array$Array_elm_builtin,
				$elm$core$Elm$JsArray$length(builder.k),
				$elm$core$Array$shiftStep,
				$elm$core$Elm$JsArray$empty,
				builder.k);
		} else {
			var treeLen = builder.i * $elm$core$Array$branchFactor;
			var depth = $elm$core$Basics$floor(
				A2($elm$core$Basics$logBase, $elm$core$Array$branchFactor, treeLen - 1));
			var correctNodeList = reverseNodeList ? $elm$core$List$reverse(builder.l) : builder.l;
			var tree = A2($elm$core$Array$treeFromBuilder, correctNodeList, builder.i);
			return A4(
				$elm$core$Array$Array_elm_builtin,
				$elm$core$Elm$JsArray$length(builder.k) + treeLen,
				A2($elm$core$Basics$max, 5, depth * $elm$core$Array$shiftStep),
				tree,
				builder.k);
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
					{l: nodeList, i: (len / $elm$core$Array$branchFactor) | 0, k: tail});
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
var $elm$core$Basics$True = 0;
var $elm$core$Result$isOk = function (result) {
	if (!result.$) {
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
var $elm$browser$Browser$External = function (a) {
	return {$: 1, a: a};
};
var $elm$browser$Browser$Internal = function (a) {
	return {$: 0, a: a};
};
var $elm$core$Basics$identity = function (x) {
	return x;
};
var $elm$browser$Browser$Dom$NotFound = $elm$core$Basics$identity;
var $elm$url$Url$Http = 0;
var $elm$url$Url$Https = 1;
var $elm$url$Url$Url = F6(
	function (protocol, host, port_, path, query, fragment) {
		return {bE: fragment, bK: host, b4: path, b6: port_, ca: protocol, cb: query};
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
					if (_v1.$ === 1) {
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
		0,
		A2($elm$core$String$dropLeft, 7, str)) : (A2($elm$core$String$startsWith, 'https://', str) ? A2(
		$elm$url$Url$chompAfterProtocol,
		1,
		A2($elm$core$String$dropLeft, 8, str)) : $elm$core$Maybe$Nothing);
};
var $elm$core$Basics$never = function (_v0) {
	never:
	while (true) {
		var nvr = _v0;
		var $temp$_v0 = nvr;
		_v0 = $temp$_v0;
		continue never;
	}
};
var $elm$core$Task$Perform = $elm$core$Basics$identity;
var $elm$core$Task$succeed = _Scheduler_succeed;
var $elm$core$Task$init = $elm$core$Task$succeed(0);
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
		var task = _v0;
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
				return 0;
			},
			$elm$core$Task$sequence(
				A2(
					$elm$core$List$map,
					$elm$core$Task$spawnCmd(router),
					commands)));
	});
var $elm$core$Task$onSelfMsg = F3(
	function (_v0, _v1, _v2) {
		return $elm$core$Task$succeed(0);
	});
var $elm$core$Task$cmdMap = F2(
	function (tagger, _v0) {
		var task = _v0;
		return A2($elm$core$Task$map, tagger, task);
	});
_Platform_effectManagers['Task'] = _Platform_createManager($elm$core$Task$init, $elm$core$Task$onEffects, $elm$core$Task$onSelfMsg, $elm$core$Task$cmdMap);
var $elm$core$Task$command = _Platform_leaf('Task');
var $elm$core$Task$perform = F2(
	function (toMessage, task) {
		return $elm$core$Task$command(
			A2($elm$core$Task$map, toMessage, task));
	});
var $elm$browser$Browser$element = _Browser_element;
var $elm$json$Json$Decode$field = _Json_decodeField;
var $jinjor$elm_debounce$Debounce$Debounce = $elm$core$Basics$identity;
var $jinjor$elm_debounce$Debounce$init = {t: _List_Nil, au: false};
var $author$project$Internal$Differ$EditRecord = F6(
	function (paragraphs, astList, idList, renderedParagraphs, latexState, sourceMap) {
		return {ar: astList, P: idList, bR: latexState, aR: paragraphs, al: renderedParagraphs, d3: sourceMap};
	});
var $Janiczek$elm_bidict$BiDict$BiDict = $elm$core$Basics$identity;
var $elm$core$Dict$RBEmpty_elm_builtin = {$: -2};
var $elm$core$Dict$empty = $elm$core$Dict$RBEmpty_elm_builtin;
var $Janiczek$elm_bidict$BiDict$empty = {e: $elm$core$Dict$empty, u: $elm$core$Dict$empty};
var $elm$core$Dict$Black = 1;
var $elm$core$Dict$RBNode_elm_builtin = F5(
	function (a, b, c, d, e) {
		return {$: -1, a: a, b: b, c: c, d: d, e: e};
	});
var $elm$core$Dict$Red = 0;
var $elm$core$Dict$balance = F5(
	function (color, key, value, left, right) {
		if ((right.$ === -1) && (!right.a)) {
			var _v1 = right.a;
			var rK = right.b;
			var rV = right.c;
			var rLeft = right.d;
			var rRight = right.e;
			if ((left.$ === -1) && (!left.a)) {
				var _v3 = left.a;
				var lK = left.b;
				var lV = left.c;
				var lLeft = left.d;
				var lRight = left.e;
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					0,
					key,
					value,
					A5($elm$core$Dict$RBNode_elm_builtin, 1, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, 1, rK, rV, rLeft, rRight));
			} else {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					color,
					rK,
					rV,
					A5($elm$core$Dict$RBNode_elm_builtin, 0, key, value, left, rLeft),
					rRight);
			}
		} else {
			if ((((left.$ === -1) && (!left.a)) && (left.d.$ === -1)) && (!left.d.a)) {
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
					0,
					lK,
					lV,
					A5($elm$core$Dict$RBNode_elm_builtin, 1, llK, llV, llLeft, llRight),
					A5($elm$core$Dict$RBNode_elm_builtin, 1, key, value, lRight, right));
			} else {
				return A5($elm$core$Dict$RBNode_elm_builtin, color, key, value, left, right);
			}
		}
	});
var $elm$core$Basics$compare = _Utils_compare;
var $elm$core$Dict$insertHelp = F3(
	function (key, value, dict) {
		if (dict.$ === -2) {
			return A5($elm$core$Dict$RBNode_elm_builtin, 0, key, value, $elm$core$Dict$RBEmpty_elm_builtin, $elm$core$Dict$RBEmpty_elm_builtin);
		} else {
			var nColor = dict.a;
			var nKey = dict.b;
			var nValue = dict.c;
			var nLeft = dict.d;
			var nRight = dict.e;
			var _v1 = A2($elm$core$Basics$compare, key, nKey);
			switch (_v1) {
				case 0:
					return A5(
						$elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						A3($elm$core$Dict$insertHelp, key, value, nLeft),
						nRight);
				case 1:
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
		if ((_v0.$ === -1) && (!_v0.a)) {
			var _v1 = _v0.a;
			var k = _v0.b;
			var v = _v0.c;
			var l = _v0.d;
			var r = _v0.e;
			return A5($elm$core$Dict$RBNode_elm_builtin, 1, k, v, l, r);
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
var $author$project$Internal$LatexState$initialCounters = $elm$core$Dict$fromList(
	_List_fromArray(
		[
			_Utils_Tuple2('s1', 0),
			_Utils_Tuple2('s2', 0),
			_Utils_Tuple2('s3', 0),
			_Utils_Tuple2('tno', 0),
			_Utils_Tuple2('eqno', 0)
		]));
var $author$project$Internal$LatexState$emptyLatexState = {V: $author$project$Internal$LatexState$initialCounters, bw: $elm$core$Dict$empty, bz: $elm$core$Dict$empty, bV: $elm$core$Dict$empty, dE: $elm$core$Dict$empty, cp: _List_Nil};
var $author$project$Internal$Differ$emptyHtmlMsgRecord = A6($author$project$Internal$Differ$EditRecord, _List_Nil, _List_Nil, _List_Nil, _List_Nil, $author$project$Internal$LatexState$emptyLatexState, $Janiczek$elm_bidict$BiDict$empty);
var $author$project$Internal$Parser$LXError = function (a) {
	return {$: 10, a: a};
};
var $author$project$Internal$Parser$LXString = function (a) {
	return {$: 0, a: a};
};
var $author$project$Internal$Parser$Environment = F3(
	function (a, b, c) {
		return {$: 7, a: a, b: b, c: c};
	});
var $author$project$Internal$Parser$ExpectingEndWord = function (a) {
	return {$: 35, a: a};
};
var $author$project$Internal$Parser$ExpectingEndWordInItemList = function (a) {
	return {$: 36, a: a};
};
var $author$project$Internal$Parser$LatexList = function (a) {
	return {$: 8, a: a};
};
var $author$project$Internal$Parser$SMacro = F4(
	function (a, b, c, d) {
		return {$: 5, a: a, b: b, c: c, d: d};
	});
var $elm$parser$Parser$Advanced$Token = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $elm$parser$Parser$Advanced$Bad = F2(
	function (a, b) {
		return {$: 1, a: a, b: b};
	});
var $elm$parser$Parser$Advanced$Good = F3(
	function (a, b, c) {
		return {$: 0, a: a, b: b, c: c};
	});
var $elm$parser$Parser$Advanced$Parser = $elm$core$Basics$identity;
var $elm$parser$Parser$Advanced$andThen = F2(
	function (callback, _v0) {
		var parseA = _v0;
		return function (s0) {
			var _v1 = parseA(s0);
			if (_v1.$ === 1) {
				var p = _v1.a;
				var x = _v1.b;
				return A2($elm$parser$Parser$Advanced$Bad, p, x);
			} else {
				var p1 = _v1.a;
				var a = _v1.b;
				var s1 = _v1.c;
				var _v2 = callback(a);
				var parseB = _v2;
				var _v3 = parseB(s1);
				if (_v3.$ === 1) {
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
		};
	});
var $author$project$Internal$Parser$CArg = function (a) {
	return {$: 0, a: a};
};
var $author$project$Internal$Parser$ExpectingLeftBrace = {$: 11};
var $author$project$Internal$Parser$ExpectingRightBrace = {$: 12};
var $author$project$Internal$Parser$Macro = F3(
	function (a, b, c) {
		return {$: 6, a: a, b: b, c: c};
	});
var $elm$core$Basics$always = F2(
	function (a, _v0) {
		return a;
	});
var $elm$parser$Parser$Advanced$map2 = F3(
	function (func, _v0, _v1) {
		var parseA = _v0;
		var parseB = _v1;
		return function (s0) {
			var _v2 = parseA(s0);
			if (_v2.$ === 1) {
				var p = _v2.a;
				var x = _v2.b;
				return A2($elm$parser$Parser$Advanced$Bad, p, x);
			} else {
				var p1 = _v2.a;
				var a = _v2.b;
				var s1 = _v2.c;
				var _v3 = parseB(s1);
				if (_v3.$ === 1) {
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
		};
	});
var $elm$parser$Parser$Advanced$ignorer = F2(
	function (keepParser, ignoreParser) {
		return A3($elm$parser$Parser$Advanced$map2, $elm$core$Basics$always, keepParser, ignoreParser);
	});
var $elm$parser$Parser$Advanced$Located = F3(
	function (row, col, context) {
		return {c6: col, d: context, dV: row};
	});
var $elm$parser$Parser$Advanced$changeContext = F2(
	function (newContext, s) {
		return {c6: s.c6, d: newContext, f: s.f, b: s.b, dV: s.dV, a: s.a};
	});
var $elm$parser$Parser$Advanced$inContext = F2(
	function (context, _v0) {
		var parse = _v0;
		return function (s0) {
			var _v1 = parse(
				A2(
					$elm$parser$Parser$Advanced$changeContext,
					A2(
						$elm$core$List$cons,
						A3($elm$parser$Parser$Advanced$Located, s0.dV, s0.c6, context),
						s0.d),
					s0));
			if (!_v1.$) {
				var p = _v1.a;
				var a = _v1.b;
				var s1 = _v1.c;
				return A3(
					$elm$parser$Parser$Advanced$Good,
					p,
					a,
					A2($elm$parser$Parser$Advanced$changeContext, s0.d, s1));
			} else {
				var step = _v1;
				return step;
			}
		};
	});
var $author$project$Internal$Parser$ExpectingEndForInlineMath = {$: 0};
var $author$project$Internal$Parser$ExpectingLeadingDollarSign = {$: 23};
var $author$project$Internal$Parser$InlineMath = function (a) {
	return {$: 3, a: a};
};
var $elm$parser$Parser$Advanced$keeper = F2(
	function (parseFunc, parseArg) {
		return A3($elm$parser$Parser$Advanced$map2, $elm$core$Basics$apL, parseFunc, parseArg);
	});
var $elm$parser$Parser$Advanced$chompUntilEndOr = function (str) {
	return function (s) {
		var _v0 = A5(_Parser_findSubString, str, s.b, s.dV, s.c6, s.a);
		var newOffset = _v0.a;
		var newRow = _v0.b;
		var newCol = _v0.c;
		var adjustedOffset = (newOffset < 0) ? $elm$core$String$length(s.a) : newOffset;
		return A3(
			$elm$parser$Parser$Advanced$Good,
			_Utils_cmp(s.b, adjustedOffset) < 0,
			0,
			{c6: newCol, d: s.d, f: s.f, b: adjustedOffset, dV: newRow, a: s.a});
	};
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
		var parse = _v0;
		return function (s0) {
			var _v1 = parse(s0);
			if (_v1.$ === 1) {
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
						A3($elm$core$String$slice, s0.b, s1.b, s0.a),
						a),
					s1);
			}
		};
	});
var $elm$parser$Parser$Advanced$getChompedString = function (parser) {
	return A2($elm$parser$Parser$Advanced$mapChompedString, $elm$core$Basics$always, parser);
};
var $elm$parser$Parser$Advanced$map = F2(
	function (func, _v0) {
		var parse = _v0;
		return function (s0) {
			var _v1 = parse(s0);
			if (!_v1.$) {
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
		};
	});
var $elm$parser$Parser$Advanced$succeed = function (a) {
	return function (s) {
		return A3($elm$parser$Parser$Advanced$Good, false, a, s);
	};
};
var $elm$parser$Parser$Advanced$AddRight = F2(
	function (a, b) {
		return {$: 1, a: a, b: b};
	});
var $elm$parser$Parser$Advanced$DeadEnd = F4(
	function (row, col, problem, contextStack) {
		return {c6: col, c8: contextStack, b7: problem, dV: row};
	});
var $elm$parser$Parser$Advanced$Empty = {$: 0};
var $elm$parser$Parser$Advanced$fromState = F2(
	function (s, x) {
		return A2(
			$elm$parser$Parser$Advanced$AddRight,
			$elm$parser$Parser$Advanced$Empty,
			A4($elm$parser$Parser$Advanced$DeadEnd, s.dV, s.c6, x, s.d));
	});
var $elm$parser$Parser$Advanced$isSubString = _Parser_isSubString;
var $elm$core$Basics$not = _Basics_not;
var $elm$parser$Parser$Advanced$token = function (_v0) {
	var str = _v0.a;
	var expecting = _v0.b;
	var progress = !$elm$core$String$isEmpty(str);
	return function (s) {
		var _v1 = A5($elm$parser$Parser$Advanced$isSubString, str, s.b, s.dV, s.c6, s.a);
		var newOffset = _v1.a;
		var newRow = _v1.b;
		var newCol = _v1.c;
		return _Utils_eq(newOffset, -1) ? A2(
			$elm$parser$Parser$Advanced$Bad,
			false,
			A2($elm$parser$Parser$Advanced$fromState, s, expecting)) : A3(
			$elm$parser$Parser$Advanced$Good,
			progress,
			0,
			{c6: newCol, d: s.d, f: s.f, b: newOffset, dV: newRow, a: s.a});
	};
};
var $elm$parser$Parser$Advanced$symbol = $elm$parser$Parser$Advanced$token;
var $author$project$Internal$Parser$parseToSymbol = F2(
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
var $author$project$Internal$Parser$inlineMath = function (wsParser) {
	return A2(
		$elm$parser$Parser$Advanced$keeper,
		A2(
			$elm$parser$Parser$Advanced$ignorer,
			$elm$parser$Parser$Advanced$succeed($author$project$Internal$Parser$InlineMath),
			$elm$parser$Parser$Advanced$symbol(
				A2($elm$parser$Parser$Advanced$Token, '$', $author$project$Internal$Parser$ExpectingLeadingDollarSign))),
		A2(
			$elm$parser$Parser$Advanced$ignorer,
			A2($author$project$Internal$Parser$parseToSymbol, $author$project$Internal$Parser$ExpectingEndForInlineMath, '$'),
			wsParser));
};
var $elm$parser$Parser$Advanced$Done = function (a) {
	return {$: 1, a: a};
};
var $elm$parser$Parser$Advanced$Loop = function (a) {
	return {$: 0, a: a};
};
var $elm$parser$Parser$Advanced$Append = F2(
	function (a, b) {
		return {$: 2, a: a, b: b};
	});
var $elm$parser$Parser$Advanced$oneOfHelp = F3(
	function (s0, bag, parsers) {
		oneOfHelp:
		while (true) {
			if (!parsers.b) {
				return A2($elm$parser$Parser$Advanced$Bad, false, bag);
			} else {
				var parse = parsers.a;
				var remainingParsers = parsers.b;
				var _v1 = parse(s0);
				if (!_v1.$) {
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
	return function (s) {
		return A3($elm$parser$Parser$Advanced$oneOfHelp, s, $elm$parser$Parser$Advanced$Empty, parsers);
	};
};
var $author$project$Internal$Parser$itemListHelper = F2(
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
					$elm$parser$Parser$Advanced$succeed(0))
				]));
	});
var $elm$parser$Parser$Advanced$loopHelp = F4(
	function (p, state, callback, s0) {
		loopHelp:
		while (true) {
			var _v0 = callback(state);
			var parse = _v0;
			var _v1 = parse(s0);
			if (!_v1.$) {
				var p1 = _v1.a;
				var step = _v1.b;
				var s1 = _v1.c;
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
		return function (s) {
			return A4($elm$parser$Parser$Advanced$loopHelp, false, state, callback, s);
		};
	});
var $author$project$Internal$Parser$itemList_ = F2(
	function (initialList, itemParser) {
		return A2(
			$elm$parser$Parser$Advanced$loop,
			initialList,
			$author$project$Internal$Parser$itemListHelper(itemParser));
	});
var $author$project$Internal$Parser$itemList = function (itemParser) {
	return A2($author$project$Internal$Parser$itemList_, _List_Nil, itemParser);
};
var $elm$parser$Parser$Advanced$lazy = function (thunk) {
	return function (s) {
		var _v0 = thunk(0);
		var parse = _v0;
		return parse(s);
	};
};
var $author$project$Internal$Parser$ExpectingValidMacroArgWord = {$: 9};
var $author$project$Internal$Parser$inMacroArg = function (c) {
	return !((c === '\\') || ((c === '$') || ((c === '}') || ((c === ' ') || (c === '\n')))));
};
var $author$project$Internal$Parser$nonEmptyItemList = function (itemParser) {
	return A2(
		$elm$parser$Parser$Advanced$andThen,
		function (x) {
			return A2(
				$author$project$Internal$Parser$itemList_,
				_List_fromArray(
					[x]),
				itemParser);
		},
		itemParser);
};
var $elm$parser$Parser$Advanced$isSubChar = _Parser_isSubChar;
var $elm$parser$Parser$Advanced$chompIf = F2(
	function (isGood, expecting) {
		return function (s) {
			var newOffset = A3($elm$parser$Parser$Advanced$isSubChar, isGood, s.b, s.a);
			return _Utils_eq(newOffset, -1) ? A2(
				$elm$parser$Parser$Advanced$Bad,
				false,
				A2($elm$parser$Parser$Advanced$fromState, s, expecting)) : (_Utils_eq(newOffset, -2) ? A3(
				$elm$parser$Parser$Advanced$Good,
				true,
				0,
				{c6: 1, d: s.d, f: s.f, b: s.b + 1, dV: s.dV + 1, a: s.a}) : A3(
				$elm$parser$Parser$Advanced$Good,
				true,
				0,
				{c6: s.c6 + 1, d: s.d, f: s.f, b: newOffset, dV: s.dV, a: s.a}));
		};
	});
var $elm$parser$Parser$Advanced$chompWhileHelp = F5(
	function (isGood, offset, row, col, s0) {
		chompWhileHelp:
		while (true) {
			var newOffset = A3($elm$parser$Parser$Advanced$isSubChar, isGood, offset, s0.a);
			if (_Utils_eq(newOffset, -1)) {
				return A3(
					$elm$parser$Parser$Advanced$Good,
					_Utils_cmp(s0.b, offset) < 0,
					0,
					{c6: col, d: s0.d, f: s0.f, b: offset, dV: row, a: s0.a});
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
	return function (s) {
		return A5($elm$parser$Parser$Advanced$chompWhileHelp, isGood, s.b, s.dV, s.c6, s);
	};
};
var $elm$parser$Parser$Advanced$getOffset = function (s) {
	return A3($elm$parser$Parser$Advanced$Good, false, s.b, s);
};
var $elm$parser$Parser$Advanced$getSource = function (s) {
	return A3($elm$parser$Parser$Advanced$Good, false, s.a, s);
};
var $author$project$Internal$Parser$ws = $elm$parser$Parser$Advanced$chompWhile(
	function (c) {
		return (c === ' ') || (c === '\n');
	});
var $author$project$Internal$Parser$word = F2(
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
						$author$project$Internal$Parser$ws),
					A2(
						$elm$parser$Parser$Advanced$ignorer,
						A2(
							$elm$parser$Parser$Advanced$ignorer,
							A2(
								$elm$parser$Parser$Advanced$ignorer,
								$elm$parser$Parser$Advanced$getOffset,
								A2($elm$parser$Parser$Advanced$chompIf, inWord, problem)),
							$elm$parser$Parser$Advanced$chompWhile(inWord)),
						$author$project$Internal$Parser$ws)),
				$elm$parser$Parser$Advanced$getOffset),
			$elm$parser$Parser$Advanced$getSource);
	});
var $author$project$Internal$Parser$macroArgWords = A2(
	$elm$parser$Parser$Advanced$map,
	$author$project$Internal$Parser$LXString,
	A2(
		$elm$parser$Parser$Advanced$map,
		$elm$core$String$join(' '),
		$author$project$Internal$Parser$nonEmptyItemList(
			A2($author$project$Internal$Parser$word, $author$project$Internal$Parser$ExpectingValidMacroArgWord, $author$project$Internal$Parser$inMacroArg))));
var $author$project$Internal$Parser$ExpectingMacroReservedWord = {$: 19};
var $elm$core$Set$Set_elm_builtin = $elm$core$Basics$identity;
var $elm$core$Set$empty = $elm$core$Dict$empty;
var $elm$core$Set$insert = F2(
	function (key, _v0) {
		var dict = _v0;
		return A3($elm$core$Dict$insert, key, 0, dict);
	});
var $elm$core$Set$fromList = function (list) {
	return A3($elm$core$List$foldl, $elm$core$Set$insert, $elm$core$Set$empty, list);
};
var $elm$core$Dict$get = F2(
	function (targetKey, dict) {
		get:
		while (true) {
			if (dict.$ === -2) {
				return $elm$core$Maybe$Nothing;
			} else {
				var key = dict.b;
				var value = dict.c;
				var left = dict.d;
				var right = dict.e;
				var _v1 = A2($elm$core$Basics$compare, targetKey, key);
				switch (_v1) {
					case 0:
						var $temp$targetKey = targetKey,
							$temp$dict = left;
						targetKey = $temp$targetKey;
						dict = $temp$dict;
						continue get;
					case 1:
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
		if (!_v0.$) {
			return true;
		} else {
			return false;
		}
	});
var $elm$core$Set$member = F2(
	function (key, _v0) {
		var dict = _v0;
		return A2($elm$core$Dict$member, key, dict);
	});
var $elm$parser$Parser$Advanced$varHelp = F7(
	function (isGood, offset, row, col, src, indent, context) {
		varHelp:
		while (true) {
			var newOffset = A3($elm$parser$Parser$Advanced$isSubChar, isGood, offset, src);
			if (_Utils_eq(newOffset, -1)) {
				return {c6: col, d: context, f: indent, b: offset, dV: row, a: src};
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
	return function (s) {
		var firstOffset = A3($elm$parser$Parser$Advanced$isSubChar, i.d7, s.b, s.a);
		if (_Utils_eq(firstOffset, -1)) {
			return A2(
				$elm$parser$Parser$Advanced$Bad,
				false,
				A2($elm$parser$Parser$Advanced$fromState, s, i.de));
		} else {
			var s1 = _Utils_eq(firstOffset, -2) ? A7($elm$parser$Parser$Advanced$varHelp, i.dt, s.b + 1, s.dV + 1, 1, s.a, s.f, s.d) : A7($elm$parser$Parser$Advanced$varHelp, i.dt, firstOffset, s.dV, s.c6 + 1, s.a, s.f, s.d);
			var name = A3($elm$core$String$slice, s.b, s1.b, s.a);
			return A2($elm$core$Set$member, name, i.dS) ? A2(
				$elm$parser$Parser$Advanced$Bad,
				false,
				A2($elm$parser$Parser$Advanced$fromState, s, i.de)) : A3($elm$parser$Parser$Advanced$Good, true, name, s1);
		}
	};
};
var $author$project$Internal$Parser$macroName = A2(
	$elm$parser$Parser$Advanced$map,
	$elm$core$String$dropLeft(1),
	$elm$parser$Parser$Advanced$variable(
		{
			de: $author$project$Internal$Parser$ExpectingMacroReservedWord,
			dt: function (c) {
				return $elm$core$Char$isAlphaNum(c) || (c === '*');
			},
			dS: $elm$core$Set$fromList(
				_List_fromArray(
					['\\begin', '\\end', '\\item', '\\bibitem'])),
			d7: function (c) {
				return c === '\\';
			}
		}));
var $author$project$Internal$Parser$ExpectingLeftBracket = {$: 13};
var $author$project$Internal$Parser$ExpectingRightBracket = {$: 14};
var $author$project$Internal$Parser$ExpectingValidOptionArgWord = {$: 8};
var $author$project$Internal$Parser$inOptionArgWord = function (c) {
	return !((c === '\\') || ((c === '$') || ((c === ']') || ((c === ' ') || (c === '\n')))));
};
var $author$project$Internal$Parser$optionArgWords = A2(
	$elm$parser$Parser$Advanced$map,
	$author$project$Internal$Parser$LXString,
	A2(
		$elm$parser$Parser$Advanced$map,
		$elm$core$String$join(' '),
		$author$project$Internal$Parser$nonEmptyItemList(
			A2($author$project$Internal$Parser$word, $author$project$Internal$Parser$ExpectingValidOptionArgWord, $author$project$Internal$Parser$inOptionArgWord))));
var $author$project$Internal$Parser$spaces = $elm$parser$Parser$Advanced$chompWhile(
	function (c) {
		return c === ' ';
	});
var $author$project$Internal$Parser$optionalArg = A2(
	$elm$parser$Parser$Advanced$map,
	$author$project$Internal$Parser$LatexList,
	A2(
		$elm$parser$Parser$Advanced$keeper,
		A2(
			$elm$parser$Parser$Advanced$ignorer,
			$elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity),
			$elm$parser$Parser$Advanced$symbol(
				A2($elm$parser$Parser$Advanced$Token, '[', $author$project$Internal$Parser$ExpectingLeftBracket))),
		A2(
			$elm$parser$Parser$Advanced$ignorer,
			$author$project$Internal$Parser$itemList(
				$elm$parser$Parser$Advanced$oneOf(
					_List_fromArray(
						[
							$author$project$Internal$Parser$optionArgWords,
							$author$project$Internal$Parser$inlineMath($author$project$Internal$Parser$spaces)
						]))),
			$elm$parser$Parser$Advanced$symbol(
				A2($elm$parser$Parser$Advanced$Token, ']', $author$project$Internal$Parser$ExpectingRightBracket)))));
var $author$project$Internal$Parser$macro = function (wsParser) {
	return A2(
		$elm$parser$Parser$Advanced$keeper,
		A2(
			$elm$parser$Parser$Advanced$keeper,
			A2(
				$elm$parser$Parser$Advanced$keeper,
				$elm$parser$Parser$Advanced$succeed($author$project$Internal$Parser$Macro),
				$author$project$Internal$Parser$macroName),
			$author$project$Internal$Parser$itemList($author$project$Internal$Parser$optionalArg)),
		A2(
			$elm$parser$Parser$Advanced$ignorer,
			$author$project$Internal$Parser$itemList(
				$author$project$Internal$Parser$cyclic$arg()),
			wsParser));
};
function $author$project$Internal$Parser$cyclic$arg() {
	return A2(
		$elm$parser$Parser$Advanced$inContext,
		$author$project$Internal$Parser$CArg('arg'),
		A2(
			$elm$parser$Parser$Advanced$map,
			$author$project$Internal$Parser$LatexList,
			A2(
				$elm$parser$Parser$Advanced$keeper,
				A2(
					$elm$parser$Parser$Advanced$ignorer,
					$elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity),
					$elm$parser$Parser$Advanced$symbol(
						A2($elm$parser$Parser$Advanced$Token, '{', $author$project$Internal$Parser$ExpectingLeftBrace))),
				A2(
					$elm$parser$Parser$Advanced$ignorer,
					$author$project$Internal$Parser$itemList(
						$elm$parser$Parser$Advanced$oneOf(
							_List_fromArray(
								[
									$author$project$Internal$Parser$macroArgWords,
									$author$project$Internal$Parser$inlineMath($author$project$Internal$Parser$spaces),
									$elm$parser$Parser$Advanced$lazy(
									function (_v0) {
										return $author$project$Internal$Parser$macro($author$project$Internal$Parser$spaces);
									})
								]))),
					$elm$parser$Parser$Advanced$symbol(
						A2($elm$parser$Parser$Advanced$Token, '}', $author$project$Internal$Parser$ExpectingRightBrace))))));
}
var $author$project$Internal$Parser$arg = $author$project$Internal$Parser$cyclic$arg();
$author$project$Internal$Parser$cyclic$arg = function () {
	return $author$project$Internal$Parser$arg;
};
var $author$project$Internal$Parser$DisplayMath = function (a) {
	return {$: 4, a: a};
};
var $author$project$Internal$Parser$ExpectingBeginDisplayMathModeBracket = {$: 4};
var $author$project$Internal$Parser$ExpectingEndDisplayMathModeBracket = {$: 5};
var $author$project$Internal$Parser$displayMathBrackets = A2(
	$elm$parser$Parser$Advanced$keeper,
	A2(
		$elm$parser$Parser$Advanced$ignorer,
		A2(
			$elm$parser$Parser$Advanced$ignorer,
			$elm$parser$Parser$Advanced$succeed($author$project$Internal$Parser$DisplayMath),
			$author$project$Internal$Parser$spaces),
		$elm$parser$Parser$Advanced$symbol(
			A2($elm$parser$Parser$Advanced$Token, '\\[', $author$project$Internal$Parser$ExpectingBeginDisplayMathModeBracket))),
	A2(
		$elm$parser$Parser$Advanced$ignorer,
		A2($author$project$Internal$Parser$parseToSymbol, $author$project$Internal$Parser$ExpectingEndDisplayMathModeBracket, '\\]'),
		$author$project$Internal$Parser$ws));
var $author$project$Internal$Parser$ExpectingBeginDisplayMathModeDollarSign = {$: 2};
var $author$project$Internal$Parser$ExpectingEndDisplayMathModeDollarSign = {$: 3};
var $author$project$Internal$Parser$displayMathDollar = A2(
	$elm$parser$Parser$Advanced$keeper,
	A2(
		$elm$parser$Parser$Advanced$ignorer,
		A2(
			$elm$parser$Parser$Advanced$ignorer,
			$elm$parser$Parser$Advanced$succeed($author$project$Internal$Parser$DisplayMath),
			$author$project$Internal$Parser$spaces),
		$elm$parser$Parser$Advanced$symbol(
			A2($elm$parser$Parser$Advanced$Token, '$$', $author$project$Internal$Parser$ExpectingBeginDisplayMathModeDollarSign))),
	A2(
		$elm$parser$Parser$Advanced$ignorer,
		A2($author$project$Internal$Parser$parseToSymbol, $author$project$Internal$Parser$ExpectingEndDisplayMathModeDollarSign, '$$'),
		$author$project$Internal$Parser$ws));
var $author$project$Internal$Parser$EnvName = {$: 1};
var $author$project$Internal$Parser$ExpectingEndOfEnvironmentName = {$: 1};
var $author$project$Internal$Parser$ExpectingEnvironmentNameBegin = {$: 24};
var $author$project$Internal$Parser$envName = A2(
	$elm$parser$Parser$Advanced$inContext,
	$author$project$Internal$Parser$EnvName,
	A2(
		$elm$parser$Parser$Advanced$keeper,
		A2(
			$elm$parser$Parser$Advanced$ignorer,
			A2(
				$elm$parser$Parser$Advanced$ignorer,
				$elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity),
				$author$project$Internal$Parser$spaces),
			$elm$parser$Parser$Advanced$symbol(
				A2($elm$parser$Parser$Advanced$Token, '\\begin{', $author$project$Internal$Parser$ExpectingEnvironmentNameBegin))),
		A2($author$project$Internal$Parser$parseToSymbol, $author$project$Internal$Parser$ExpectingEndOfEnvironmentName, '}')));
var $author$project$Internal$Parser$ExpectingEscapedItem = {$: 30};
var $author$project$Internal$Parser$ExpectingSpaceAfterItem = {$: 31};
var $author$project$Internal$Parser$Item = F2(
	function (a, b) {
		return {$: 2, a: a, b: b};
	});
var $author$project$Internal$Parser$ExpectingWords = {$: 10};
var $author$project$Internal$Parser$ExpectingDoubleNewline = {$: 29};
var $author$project$Internal$Parser$blank = A2(
	$elm$parser$Parser$Advanced$map,
	function (_v0) {
		return $author$project$Internal$Parser$LXString('\n\n');
	},
	$elm$parser$Parser$Advanced$symbol(
		A2($elm$parser$Parser$Advanced$Token, '\n\n', $author$project$Internal$Parser$ExpectingDoubleNewline)));
var $author$project$Internal$Parser$notSpaceOrSpecialCharacters = function (c) {
	return !((c === ' ') || ((c === '\n') || ((c === '\\') || (c === '$'))));
};
var $author$project$Internal$Parser$words_ = function (problem) {
	return A2(
		$elm$parser$Parser$Advanced$map,
		$author$project$Internal$Parser$LXString,
		A2(
			$elm$parser$Parser$Advanced$map,
			$elm$core$String$join(' '),
			$author$project$Internal$Parser$nonEmptyItemList(
				A2($author$project$Internal$Parser$word, problem, $author$project$Internal$Parser$notSpaceOrSpecialCharacters))));
};
var $author$project$Internal$Parser$words = $elm$parser$Parser$Advanced$oneOf(
	_List_fromArray(
		[
			$author$project$Internal$Parser$blank,
			A2(
			$elm$parser$Parser$Advanced$keeper,
			A2(
				$elm$parser$Parser$Advanced$ignorer,
				$elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity),
				$author$project$Internal$Parser$ws),
			A2(
				$elm$parser$Parser$Advanced$ignorer,
				$author$project$Internal$Parser$words_($author$project$Internal$Parser$ExpectingWords),
				$author$project$Internal$Parser$ws))
		]));
var $author$project$Internal$Parser$item = A2(
	$elm$parser$Parser$Advanced$map,
	function (x) {
		return A2(
			$author$project$Internal$Parser$Item,
			1,
			$author$project$Internal$Parser$LatexList(x));
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
						$author$project$Internal$Parser$spaces),
					$elm$parser$Parser$Advanced$symbol(
						A2($elm$parser$Parser$Advanced$Token, '\\item', $author$project$Internal$Parser$ExpectingEscapedItem))),
				$elm$parser$Parser$Advanced$symbol(
					A2($elm$parser$Parser$Advanced$Token, ' ', $author$project$Internal$Parser$ExpectingSpaceAfterItem))),
			$author$project$Internal$Parser$spaces),
		A2(
			$elm$parser$Parser$Advanced$ignorer,
			$author$project$Internal$Parser$itemList(
				$elm$parser$Parser$Advanced$oneOf(
					_List_fromArray(
						[
							$author$project$Internal$Parser$words,
							$author$project$Internal$Parser$inlineMath($author$project$Internal$Parser$ws),
							$author$project$Internal$Parser$macro($author$project$Internal$Parser$ws)
						]))),
			$author$project$Internal$Parser$ws)));
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
var $author$project$Internal$Parser$ExpectingEscapedNewcommandAndBrace = {$: 34};
var $author$project$Internal$Parser$NewCommand = F3(
	function (a, b, c) {
		return {$: 9, a: a, b: b, c: c};
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
var $author$project$Internal$Parser$manyHelp = F2(
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
					A2($elm$parser$Parser$Advanced$ignorer, p, $author$project$Internal$Parser$spaces)),
					A2(
					$elm$parser$Parser$Advanced$map,
					function (_v0) {
						return $elm$parser$Parser$Advanced$Done(
							$elm$core$List$reverse(vs));
					},
					$elm$parser$Parser$Advanced$succeed(0))
				]));
	});
var $author$project$Internal$Parser$many = function (p) {
	return A2(
		$elm$parser$Parser$Advanced$loop,
		_List_Nil,
		$author$project$Internal$Parser$manyHelp(p));
};
var $author$project$Internal$Parser$ExpectingInt = {$: 21};
var $author$project$Internal$Parser$InvalidInt = {$: 22};
var $elm$parser$Parser$Advanced$consumeBase = _Parser_consumeBase;
var $elm$parser$Parser$Advanced$consumeBase16 = _Parser_consumeBase16;
var $elm$parser$Parser$Advanced$bumpOffset = F2(
	function (newOffset, s) {
		return {c6: s.c6 + (newOffset - s.b), d: s.d, f: s.f, b: newOffset, dV: s.dV, a: s.a};
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
		if (handler.$ === 1) {
			var x = handler.a;
			return A2(
				$elm$parser$Parser$Advanced$Bad,
				true,
				A2($elm$parser$Parser$Advanced$fromState, s, x));
		} else {
			var toValue = handler.a;
			return _Utils_eq(startOffset, endOffset) ? A2(
				$elm$parser$Parser$Advanced$Bad,
				_Utils_cmp(s.b, startOffset) < 0,
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
		var floatOffset = A2($elm$parser$Parser$Advanced$consumeDotAndExp, intOffset, s.a);
		if (floatOffset < 0) {
			return A2(
				$elm$parser$Parser$Advanced$Bad,
				true,
				A4($elm$parser$Parser$Advanced$fromInfo, s.dV, s.c6 - (floatOffset + s.b), invalid, s.d));
		} else {
			if (_Utils_eq(s.b, floatOffset)) {
				return A2(
					$elm$parser$Parser$Advanced$Bad,
					false,
					A2($elm$parser$Parser$Advanced$fromState, s, expecting));
			} else {
				if (_Utils_eq(intOffset, floatOffset)) {
					return A5($elm$parser$Parser$Advanced$finalizeInt, invalid, intSettings, s.b, intPair, s);
				} else {
					if (floatSettings.$ === 1) {
						var x = floatSettings.a;
						return A2(
							$elm$parser$Parser$Advanced$Bad,
							true,
							A2($elm$parser$Parser$Advanced$fromState, s, invalid));
					} else {
						var toValue = floatSettings.a;
						var _v1 = $elm$core$String$toFloat(
							A3($elm$core$String$slice, s.b, floatOffset, s.a));
						if (_v1.$ === 1) {
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
	return function (s) {
		if (A3($elm$parser$Parser$Advanced$isAsciiCode, 48, s.b, s.a)) {
			var zeroOffset = s.b + 1;
			var baseOffset = zeroOffset + 1;
			return A3($elm$parser$Parser$Advanced$isAsciiCode, 120, zeroOffset, s.a) ? A5(
				$elm$parser$Parser$Advanced$finalizeInt,
				c.dz,
				c.bJ,
				baseOffset,
				A2($elm$parser$Parser$Advanced$consumeBase16, baseOffset, s.a),
				s) : (A3($elm$parser$Parser$Advanced$isAsciiCode, 111, zeroOffset, s.a) ? A5(
				$elm$parser$Parser$Advanced$finalizeInt,
				c.dz,
				c.b$,
				baseOffset,
				A3($elm$parser$Parser$Advanced$consumeBase, 8, baseOffset, s.a),
				s) : (A3($elm$parser$Parser$Advanced$isAsciiCode, 98, zeroOffset, s.a) ? A5(
				$elm$parser$Parser$Advanced$finalizeInt,
				c.dz,
				c.bp,
				baseOffset,
				A3($elm$parser$Parser$Advanced$consumeBase, 2, baseOffset, s.a),
				s) : A6(
				$elm$parser$Parser$Advanced$finalizeFloat,
				c.dz,
				c.de,
				c.bO,
				c.dh,
				_Utils_Tuple2(zeroOffset, 0),
				s)));
		} else {
			return A6(
				$elm$parser$Parser$Advanced$finalizeFloat,
				c.dz,
				c.de,
				c.bO,
				c.dh,
				A3($elm$parser$Parser$Advanced$consumeBase, 10, s.b, s.a),
				s);
		}
	};
};
var $elm$parser$Parser$Advanced$int = F2(
	function (expecting, invalid) {
		return $elm$parser$Parser$Advanced$number(
			{
				bp: $elm$core$Result$Err(invalid),
				de: expecting,
				dh: $elm$core$Result$Err(invalid),
				bJ: $elm$core$Result$Err(invalid),
				bO: $elm$core$Result$Ok($elm$core$Basics$identity),
				dz: invalid,
				b$: $elm$core$Result$Err(invalid)
			});
	});
var $author$project$Internal$Parser$numberOfArgs_ = A2(
	$elm$parser$Parser$Advanced$keeper,
	A2(
		$elm$parser$Parser$Advanced$ignorer,
		$elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity),
		$elm$parser$Parser$Advanced$symbol(
			A2($elm$parser$Parser$Advanced$Token, '[', $author$project$Internal$Parser$ExpectingLeftBracket))),
	A2(
		$elm$parser$Parser$Advanced$ignorer,
		A2($elm$parser$Parser$Advanced$int, $author$project$Internal$Parser$ExpectingInt, $author$project$Internal$Parser$InvalidInt),
		$elm$parser$Parser$Advanced$symbol(
			A2($elm$parser$Parser$Advanced$Token, ']', $author$project$Internal$Parser$ExpectingRightBracket))));
var $elm$core$Maybe$withDefault = F2(
	function (_default, maybe) {
		if (!maybe.$) {
			var value = maybe.a;
			return value;
		} else {
			return _default;
		}
	});
var $author$project$Internal$Parser$numberOfArgs = A2(
	$elm$parser$Parser$Advanced$map,
	$elm$core$Maybe$withDefault(0),
	A2(
		$elm$parser$Parser$Advanced$map,
		$elm$core$List$head,
		$author$project$Internal$Parser$many($author$project$Internal$Parser$numberOfArgs_)));
var $author$project$Internal$Parser$newcommand = A2(
	$elm$parser$Parser$Advanced$keeper,
	A2(
		$elm$parser$Parser$Advanced$keeper,
		A2(
			$elm$parser$Parser$Advanced$keeper,
			A2(
				$elm$parser$Parser$Advanced$ignorer,
				$elm$parser$Parser$Advanced$succeed($author$project$Internal$Parser$NewCommand),
				$elm$parser$Parser$Advanced$symbol(
					A2($elm$parser$Parser$Advanced$Token, '\\newcommand{', $author$project$Internal$Parser$ExpectingEscapedNewcommandAndBrace))),
			A2(
				$elm$parser$Parser$Advanced$ignorer,
				$author$project$Internal$Parser$macroName,
				$elm$parser$Parser$Advanced$symbol(
					A2($elm$parser$Parser$Advanced$Token, '}', $author$project$Internal$Parser$ExpectingRightBrace)))),
		$author$project$Internal$Parser$numberOfArgs),
	A2($elm$parser$Parser$Advanced$ignorer, $author$project$Internal$Parser$arg, $author$project$Internal$Parser$ws));
var $author$project$Internal$Parser$ExpectingEndForPassThroughBody = {$: 6};
var $author$project$Internal$Parser$passThroughBody = F2(
	function (endWoord, envType) {
		return A2(
			$elm$parser$Parser$Advanced$map,
			A2($author$project$Internal$Parser$Environment, envType, _List_Nil),
			A2(
				$elm$parser$Parser$Advanced$map,
				$author$project$Internal$Parser$LXString,
				A2(
					$elm$parser$Parser$Advanced$keeper,
					$elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity),
					A2(
						$elm$parser$Parser$Advanced$ignorer,
						A2($author$project$Internal$Parser$parseToSymbol, $author$project$Internal$Parser$ExpectingEndForPassThroughBody, endWoord),
						$author$project$Internal$Parser$ws))));
	});
var $author$project$Internal$Parser$ExpectingmSMacroReservedWord = {$: 20};
var $author$project$Internal$Parser$smacroName = A2(
	$elm$parser$Parser$Advanced$map,
	$elm$core$String$dropLeft(1),
	$elm$parser$Parser$Advanced$variable(
		{
			de: $author$project$Internal$Parser$ExpectingmSMacroReservedWord,
			dt: function (c) {
				return $elm$core$Char$isAlphaNum(c);
			},
			dS: $elm$core$Set$fromList(
				_List_fromArray(
					['\\begin', '\\end', '\\item'])),
			d7: function (c) {
				return c === '\\';
			}
		}));
var $author$project$Internal$Parser$ExpectingDoubleEscapeAndNewline = {$: 33};
var $author$project$Internal$Parser$ExpectingNewline = {$: 17};
var $author$project$Internal$Parser$ExpectingValidTableCell = {$: 7};
var $author$project$Internal$Parser$inTableCellWord = function (c) {
	return !((c === ' ') || ((c === '\n') || ((c === '\\') || ((c === '$') || (c === '&')))));
};
var $elm$core$String$trim = _String_trim;
var $author$project$Internal$Parser$tableCellWords = A2(
	$elm$parser$Parser$Advanced$map,
	$author$project$Internal$Parser$LXString,
	A2(
		$elm$parser$Parser$Advanced$map,
		$elm$core$String$trim,
		A2(
			$elm$parser$Parser$Advanced$map,
			$elm$core$String$join(' '),
			$author$project$Internal$Parser$nonEmptyItemList(
				A2($author$project$Internal$Parser$word, $author$project$Internal$Parser$ExpectingValidTableCell, $author$project$Internal$Parser$inTableCellWord)))));
var $author$project$Internal$Parser$tableCell = A2(
	$elm$parser$Parser$Advanced$keeper,
	$elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity),
	$elm$parser$Parser$Advanced$oneOf(
		_List_fromArray(
			[
				$author$project$Internal$Parser$displayMathBrackets,
				$author$project$Internal$Parser$macro($author$project$Internal$Parser$ws),
				$author$project$Internal$Parser$displayMathDollar,
				$author$project$Internal$Parser$inlineMath($author$project$Internal$Parser$ws),
				$author$project$Internal$Parser$tableCellWords
			])));
var $author$project$Internal$Parser$ExpectingAmpersand = {$: 32};
var $author$project$Internal$Parser$nextCell = A2(
	$elm$parser$Parser$Advanced$keeper,
	A2(
		$elm$parser$Parser$Advanced$ignorer,
		A2(
			$elm$parser$Parser$Advanced$ignorer,
			$elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity),
			$elm$parser$Parser$Advanced$symbol(
				A2($elm$parser$Parser$Advanced$Token, '&', $author$project$Internal$Parser$ExpectingAmpersand))),
		$author$project$Internal$Parser$spaces),
	$author$project$Internal$Parser$tableCell);
var $author$project$Internal$Parser$tableCellHelp = function (revCells) {
	return $elm$parser$Parser$Advanced$oneOf(
		_List_fromArray(
			[
				A2(
				$elm$parser$Parser$Advanced$andThen,
				function (c) {
					return $author$project$Internal$Parser$tableCellHelp(
						A2($elm$core$List$cons, c, revCells));
				},
				$author$project$Internal$Parser$nextCell),
				$elm$parser$Parser$Advanced$succeed(
				$elm$core$List$reverse(revCells))
			]));
};
var $author$project$Internal$Parser$tableRow = A2(
	$elm$parser$Parser$Advanced$map,
	$author$project$Internal$Parser$LatexList,
	A2(
		$elm$parser$Parser$Advanced$keeper,
		A2(
			$elm$parser$Parser$Advanced$ignorer,
			$elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity),
			$author$project$Internal$Parser$spaces),
		A2(
			$elm$parser$Parser$Advanced$ignorer,
			A2(
				$elm$parser$Parser$Advanced$ignorer,
				A2(
					$elm$parser$Parser$Advanced$andThen,
					function (c) {
						return $author$project$Internal$Parser$tableCellHelp(
							_List_fromArray(
								[c]));
					},
					$author$project$Internal$Parser$tableCell),
				$author$project$Internal$Parser$spaces),
			$elm$parser$Parser$Advanced$oneOf(
				_List_fromArray(
					[
						$elm$parser$Parser$Advanced$symbol(
						A2($elm$parser$Parser$Advanced$Token, '\n', $author$project$Internal$Parser$ExpectingNewline)),
						$elm$parser$Parser$Advanced$symbol(
						A2($elm$parser$Parser$Advanced$Token, '\\\\\n', $author$project$Internal$Parser$ExpectingDoubleEscapeAndNewline))
					])))));
var $author$project$Internal$Parser$tableBody = A2(
	$elm$parser$Parser$Advanced$map,
	$author$project$Internal$Parser$LatexList,
	A2(
		$elm$parser$Parser$Advanced$keeper,
		A2(
			$elm$parser$Parser$Advanced$ignorer,
			$elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity),
			$author$project$Internal$Parser$ws),
		$author$project$Internal$Parser$nonEmptyItemList($author$project$Internal$Parser$tableRow)));
var $author$project$Internal$Parser$tabularEnvironmentBody = F2(
	function (endWoord, envType) {
		return A2(
			$elm$parser$Parser$Advanced$keeper,
			A2(
				$elm$parser$Parser$Advanced$keeper,
				A2(
					$elm$parser$Parser$Advanced$ignorer,
					$elm$parser$Parser$Advanced$succeed(
						$author$project$Internal$Parser$Environment(envType)),
					$author$project$Internal$Parser$ws),
				$author$project$Internal$Parser$itemList($author$project$Internal$Parser$arg)),
			A2(
				$elm$parser$Parser$Advanced$ignorer,
				A2(
					$elm$parser$Parser$Advanced$ignorer,
					A2($elm$parser$Parser$Advanced$ignorer, $author$project$Internal$Parser$tableBody, $author$project$Internal$Parser$ws),
					$elm$parser$Parser$Advanced$symbol(
						A2(
							$elm$parser$Parser$Advanced$Token,
							endWoord,
							$author$project$Internal$Parser$ExpectingEndWord(endWoord)))),
				$author$project$Internal$Parser$ws));
	});
var $author$project$Internal$Parser$Comment = function (a) {
	return {$: 1, a: a};
};
var $author$project$Internal$Parser$ExpectingPercent = {$: 18};
var $elm$core$Basics$neq = _Utils_notEqual;
var $author$project$Internal$Parser$texComment = A2(
	$elm$parser$Parser$Advanced$map,
	$author$project$Internal$Parser$Comment,
	$elm$parser$Parser$Advanced$getChompedString(
		A2(
			$elm$parser$Parser$Advanced$ignorer,
			A2(
				$elm$parser$Parser$Advanced$ignorer,
				A2(
					$elm$parser$Parser$Advanced$ignorer,
					A2(
						$elm$parser$Parser$Advanced$ignorer,
						$elm$parser$Parser$Advanced$succeed(0),
						A2(
							$elm$parser$Parser$Advanced$chompIf,
							function (c) {
								return c === '%';
							},
							$author$project$Internal$Parser$ExpectingPercent)),
					$elm$parser$Parser$Advanced$chompWhile(
						function (c) {
							return c !== '\n';
						})),
				A2(
					$elm$parser$Parser$Advanced$chompIf,
					function (c) {
						return c === '\n';
					},
					$author$project$Internal$Parser$ExpectingNewline)),
			$author$project$Internal$Parser$ws)));
var $author$project$Internal$Parser$biblioEnvironmentBody = F2(
	function (endWoord, envType) {
		return A2(
			$elm$parser$Parser$Advanced$map,
			A2($author$project$Internal$Parser$Environment, envType, _List_Nil),
			A2(
				$elm$parser$Parser$Advanced$map,
				$author$project$Internal$Parser$LatexList,
				A2(
					$elm$parser$Parser$Advanced$keeper,
					A2(
						$elm$parser$Parser$Advanced$ignorer,
						$elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity),
						$author$project$Internal$Parser$ws),
					A2(
						$elm$parser$Parser$Advanced$ignorer,
						A2(
							$elm$parser$Parser$Advanced$ignorer,
							A2(
								$elm$parser$Parser$Advanced$ignorer,
								$author$project$Internal$Parser$itemList(
									$author$project$Internal$Parser$cyclic$smacro()),
								$author$project$Internal$Parser$ws),
							$elm$parser$Parser$Advanced$symbol(
								A2(
									$elm$parser$Parser$Advanced$Token,
									endWoord,
									$author$project$Internal$Parser$ExpectingEndWord(endWoord)))),
						$author$project$Internal$Parser$ws))));
	});
var $author$project$Internal$Parser$environmentOfType = function (envType) {
	var theEndWord = '\\end{' + (envType + '}');
	var katex = _List_fromArray(
		['align', 'matrix', 'pmatrix', 'bmatrix', 'Bmatrix', 'vmatrix', 'Vmatrix']);
	var envKind = A2(
		$elm$core$List$member,
		envType,
		_Utils_ap(
			_List_fromArray(
				['equation', 'eqnarray', 'verbatim', 'CD', 'mathmacro', 'textmacro', 'listing', 'verse']),
			katex)) ? 'passThrough' : envType;
	return A3($author$project$Internal$Parser$environmentParser, envKind, theEndWord, envType);
};
var $author$project$Internal$Parser$environmentParser = F3(
	function (envKind, theEndWord, envType) {
		var _v3 = A2(
			$elm$core$Dict$get,
			envKind,
			$author$project$Internal$Parser$cyclic$parseEnvironmentDict());
		if (!_v3.$) {
			var p = _v3.a;
			return A2(p, theEndWord, envType);
		} else {
			return A2($author$project$Internal$Parser$standardEnvironmentBody, theEndWord, envType);
		}
	});
var $author$project$Internal$Parser$itemEnvironmentBody = F2(
	function (endWoord, envType) {
		return A2(
			$elm$parser$Parser$Advanced$map,
			A2($author$project$Internal$Parser$Environment, envType, _List_Nil),
			A2(
				$elm$parser$Parser$Advanced$map,
				$author$project$Internal$Parser$LatexList,
				A2(
					$elm$parser$Parser$Advanced$keeper,
					A2(
						$elm$parser$Parser$Advanced$ignorer,
						$elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity),
						$author$project$Internal$Parser$ws),
					A2(
						$elm$parser$Parser$Advanced$ignorer,
						A2(
							$elm$parser$Parser$Advanced$ignorer,
							A2(
								$elm$parser$Parser$Advanced$ignorer,
								$author$project$Internal$Parser$itemList(
									$elm$parser$Parser$Advanced$oneOf(
										_List_fromArray(
											[
												$author$project$Internal$Parser$item,
												$elm$parser$Parser$Advanced$lazy(
												function (_v2) {
													return $author$project$Internal$Parser$cyclic$environment();
												})
											]))),
								$author$project$Internal$Parser$ws),
							$elm$parser$Parser$Advanced$symbol(
								A2(
									$elm$parser$Parser$Advanced$Token,
									endWoord,
									$author$project$Internal$Parser$ExpectingEndWordInItemList(endWoord)))),
						$author$project$Internal$Parser$ws))));
	});
var $author$project$Internal$Parser$standardEnvironmentBody = F2(
	function (endWoord, envType) {
		return A2(
			$elm$parser$Parser$Advanced$keeper,
			A2(
				$elm$parser$Parser$Advanced$keeper,
				A2(
					$elm$parser$Parser$Advanced$ignorer,
					$elm$parser$Parser$Advanced$succeed(
						$author$project$Internal$Parser$Environment(envType)),
					$author$project$Internal$Parser$ws),
				A2(
					$elm$parser$Parser$Advanced$ignorer,
					$author$project$Internal$Parser$itemList($author$project$Internal$Parser$optionalArg),
					$author$project$Internal$Parser$ws)),
			A2(
				$elm$parser$Parser$Advanced$ignorer,
				A2(
					$elm$parser$Parser$Advanced$ignorer,
					A2(
						$elm$parser$Parser$Advanced$ignorer,
						A2(
							$elm$parser$Parser$Advanced$map,
							$author$project$Internal$Parser$LatexList,
							$author$project$Internal$Parser$nonEmptyItemList(
								$author$project$Internal$Parser$cyclic$latexExpression())),
						$author$project$Internal$Parser$ws),
					$elm$parser$Parser$Advanced$symbol(
						A2(
							$elm$parser$Parser$Advanced$Token,
							endWoord,
							$author$project$Internal$Parser$ExpectingEndWord(endWoord)))),
				$author$project$Internal$Parser$ws));
	});
function $author$project$Internal$Parser$cyclic$environment() {
	return A2($elm$parser$Parser$Advanced$andThen, $author$project$Internal$Parser$environmentOfType, $author$project$Internal$Parser$envName);
}
function $author$project$Internal$Parser$cyclic$latexList() {
	return A2(
		$elm$parser$Parser$Advanced$map,
		$author$project$Internal$Parser$LatexList,
		A2(
			$elm$parser$Parser$Advanced$keeper,
			A2(
				$elm$parser$Parser$Advanced$ignorer,
				$elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity),
				$author$project$Internal$Parser$ws),
			$author$project$Internal$Parser$itemList(
				$author$project$Internal$Parser$cyclic$latexExpression())));
}
function $author$project$Internal$Parser$cyclic$latexExpression() {
	return $elm$parser$Parser$Advanced$oneOf(
		_List_fromArray(
			[
				$author$project$Internal$Parser$texComment,
				$author$project$Internal$Parser$displayMathDollar,
				$author$project$Internal$Parser$displayMathBrackets,
				$author$project$Internal$Parser$inlineMath($author$project$Internal$Parser$ws),
				$author$project$Internal$Parser$newcommand,
				$author$project$Internal$Parser$macro($author$project$Internal$Parser$ws),
				$author$project$Internal$Parser$cyclic$smacro(),
				$author$project$Internal$Parser$words,
				$elm$parser$Parser$Advanced$lazy(
				function (_v1) {
					return $author$project$Internal$Parser$cyclic$environment();
				})
			]));
}
function $author$project$Internal$Parser$cyclic$parseEnvironmentDict() {
	return $elm$core$Dict$fromList(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'enumerate',
				F2(
					function (endWoord, envType) {
						return A2($author$project$Internal$Parser$itemEnvironmentBody, endWoord, envType);
					})),
				_Utils_Tuple2(
				'itemize',
				F2(
					function (endWoord, envType) {
						return A2($author$project$Internal$Parser$itemEnvironmentBody, endWoord, envType);
					})),
				_Utils_Tuple2(
				'thebibliography',
				F2(
					function (endWoord, envType) {
						return A2($author$project$Internal$Parser$biblioEnvironmentBody, endWoord, envType);
					})),
				_Utils_Tuple2(
				'tabular',
				F2(
					function (endWoord, envType) {
						return A2($author$project$Internal$Parser$tabularEnvironmentBody, endWoord, envType);
					})),
				_Utils_Tuple2(
				'passThrough',
				F2(
					function (endWoord, envType) {
						return A2($author$project$Internal$Parser$passThroughBody, endWoord, envType);
					}))
			]));
}
function $author$project$Internal$Parser$cyclic$smacro() {
	return A2(
		$elm$parser$Parser$Advanced$keeper,
		A2(
			$elm$parser$Parser$Advanced$keeper,
			A2(
				$elm$parser$Parser$Advanced$keeper,
				A2(
					$elm$parser$Parser$Advanced$keeper,
					$elm$parser$Parser$Advanced$succeed($author$project$Internal$Parser$SMacro),
					$author$project$Internal$Parser$smacroName),
				$author$project$Internal$Parser$itemList($author$project$Internal$Parser$optionalArg)),
			$author$project$Internal$Parser$itemList($author$project$Internal$Parser$arg)),
		$elm$parser$Parser$Advanced$lazy(
			function (_v0) {
				return $author$project$Internal$Parser$cyclic$latexList();
			}));
}
var $author$project$Internal$Parser$environment = $author$project$Internal$Parser$cyclic$environment();
$author$project$Internal$Parser$cyclic$environment = function () {
	return $author$project$Internal$Parser$environment;
};
var $author$project$Internal$Parser$latexList = $author$project$Internal$Parser$cyclic$latexList();
$author$project$Internal$Parser$cyclic$latexList = function () {
	return $author$project$Internal$Parser$latexList;
};
var $author$project$Internal$Parser$latexExpression = $author$project$Internal$Parser$cyclic$latexExpression();
$author$project$Internal$Parser$cyclic$latexExpression = function () {
	return $author$project$Internal$Parser$latexExpression;
};
var $author$project$Internal$Parser$parseEnvironmentDict = $author$project$Internal$Parser$cyclic$parseEnvironmentDict();
$author$project$Internal$Parser$cyclic$parseEnvironmentDict = function () {
	return $author$project$Internal$Parser$parseEnvironmentDict;
};
var $author$project$Internal$Parser$smacro = $author$project$Internal$Parser$cyclic$smacro();
$author$project$Internal$Parser$cyclic$smacro = function () {
	return $author$project$Internal$Parser$smacro;
};
var $elm$parser$Parser$Advanced$bagToList = F2(
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
		var parse = _v0;
		var _v1 = parse(
			{c6: 1, d: _List_Nil, f: 1, b: 0, dV: 1, a: src});
		if (!_v1.$) {
			var value = _v1.b;
			return $elm$core$Result$Ok(value);
		} else {
			var bag = _v1.b;
			return $elm$core$Result$Err(
				A2($elm$parser$Parser$Advanced$bagToList, bag, _List_Nil));
		}
	});
var $author$project$Internal$Parser$parse = function (text) {
	var expr = A2($elm$parser$Parser$Advanced$run, $author$project$Internal$Parser$latexList, text);
	if (!expr.$) {
		if (expr.a.$ === 8) {
			var list = expr.a.a;
			return list;
		} else {
			return _List_fromArray(
				[
					$author$project$Internal$Parser$LXString('Dude! not great code here.')
				]);
		}
	} else {
		var error = expr.a;
		return _List_fromArray(
			[
				$author$project$Internal$Parser$LXError(error)
			]);
	}
};
var $elm$core$String$toUpper = _String_toUpper;
var $author$project$Internal$Utility$capitalize = function (str) {
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
var $author$project$Internal$Render$DisplayMathMode = 1;
var $elm$core$Basics$composeR = F3(
	function (f, g, x) {
		return g(
			f(x));
	});
var $author$project$Internal$MathMacro$enclose = function (arg_) {
	return '{' + (arg_ + '}');
};
var $author$project$Internal$MathMacro$evalNewCommand = F3(
	function (name, nargs, args) {
		return '\\newcommand{\\' + (name + ('}[' + (nargs + (']' + A2(
			$elm$core$String$join,
			'',
			A2(
				$elm$core$List$map,
				A2($elm$core$Basics$composeR, $author$project$Internal$MathMacro$toText_, $author$project$Internal$MathMacro$enclose),
				args))))));
	});
var $author$project$Internal$MathMacro$toText_ = function (expr) {
	switch (expr.$) {
		case 0:
			var str = expr.a;
			return str;
		case 1:
			var name = expr.a;
			var args = expr.b;
			return '\\' + (name + A2(
				$elm$core$String$join,
				'',
				A2(
					$elm$core$List$map,
					A2($elm$core$Basics$composeR, $author$project$Internal$MathMacro$toText_, $author$project$Internal$MathMacro$enclose),
					args)));
		case 3:
			var list = expr.a;
			return A2(
				$elm$core$String$join,
				' ',
				A2($elm$core$List$map, $author$project$Internal$MathMacro$toText_, list));
		default:
			var name = expr.a;
			var nargs = expr.b;
			var args = expr.c;
			return A3($author$project$Internal$MathMacro$evalNewCommand, name, nargs, args);
	}
};
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
var $elm_community$list_extra$List$Extra$getAt = F2(
	function (idx, xs) {
		return (idx < 0) ? $elm$core$Maybe$Nothing : $elm$core$List$head(
			A2($elm$core$List$drop, idx, xs));
	});
var $author$project$Internal$MathMacro$getArg = F2(
	function (k, list) {
		return A2(
			$elm$core$Maybe$withDefault,
			'',
			A2($elm_community$list_extra$List$Extra$getAt, k, list));
	});
var $elm$core$String$replace = F3(
	function (before, after, string) {
		return A2(
			$elm$core$String$join,
			after,
			A2($elm$core$String$split, before, string));
	});
var $author$project$Internal$MathMacro$replaceArg = F2(
	function (k, f) {
		return function (list) {
			return A3(
				$elm$core$String$replace,
				'#' + $elm$core$String$fromInt(k + 1),
				A2($author$project$Internal$MathMacro$getArg, k, list),
				f(list));
		};
	});
var $author$project$Internal$MathMacro$replaceArgs = F2(
	function (n, f) {
		return A3(
			$elm$core$List$foldl,
			$author$project$Internal$MathMacro$replaceArg,
			f,
			A2($elm$core$List$range, 0, n - 1));
	});
var $author$project$Internal$MathMacro$transform = F2(
	function (n, args) {
		return A2(
			$author$project$Internal$MathMacro$replaceArgs,
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
						A2($elm$core$List$map, $author$project$Internal$MathMacro$toText_, args)))));
	});
var $author$project$Internal$MathMacro$evalMacro = F3(
	function (macroDict_, name, args) {
		var _v0 = A2($elm$core$Dict$get, name, macroDict_);
		if (_v0.$ === 1) {
			return '\\' + (name + A2(
				$elm$core$String$join,
				'',
				A2(
					$elm$core$List$map,
					A2($elm$core$Basics$composeR, $author$project$Internal$MathMacro$toText_, $author$project$Internal$MathMacro$enclose),
					args)));
		} else {
			var _v1 = _v0.a;
			var n = _v1.a;
			var body = _v1.b;
			return A3(
				$author$project$Internal$MathMacro$transform,
				n,
				body,
				A2($elm$core$List$map, $author$project$Internal$MathMacro$toText_, args));
		}
	});
var $author$project$Internal$MathMacro$evalMathExpr = F2(
	function (macroDict_, expr) {
		switch (expr.$) {
			case 0:
				var str = expr.a;
				return str;
			case 1:
				var name = expr.a;
				var args = expr.b;
				return A3($author$project$Internal$MathMacro$evalMacro, macroDict_, name, args);
			case 2:
				var name = expr.a;
				var nargs = expr.b;
				var args = expr.c;
				return A3($author$project$Internal$MathMacro$evalNewCommand, name, nargs, args);
			default:
				var list = expr.a;
				return A2(
					$elm$core$String$join,
					' ',
					A2($elm$core$List$map, $author$project$Internal$MathMacro$toText_, list));
		}
	});
var $author$project$Internal$MathMacro$evalList = F2(
	function (macroDict_, list) {
		return A2(
			$elm$core$String$join,
			' ',
			A2(
				$elm$core$List$map,
				$author$project$Internal$MathMacro$evalMathExpr(macroDict_),
				list));
	});
var $elm$core$Result$map2 = F3(
	function (func, ra, rb) {
		if (ra.$ === 1) {
			var x = ra.a;
			return $elm$core$Result$Err(x);
		} else {
			var a = ra.a;
			if (rb.$ === 1) {
				var x = rb.a;
				return $elm$core$Result$Err(x);
			} else {
				var b = rb.a;
				return $elm$core$Result$Ok(
					A2(func, a, b));
			}
		}
	});
var $elm_community$result_extra$Result$Extra$combine = A2(
	$elm$core$List$foldr,
	$elm$core$Result$map2($elm$core$List$cons),
	$elm$core$Result$Ok(_List_Nil));
var $elm$core$List$append = F2(
	function (xs, ys) {
		if (!ys.b) {
			return xs;
		} else {
			return A3($elm$core$List$foldr, $elm$core$List$cons, ys, xs);
		}
	});
var $elm$core$List$concat = function (lists) {
	return A3($elm$core$List$foldr, $elm$core$List$append, _List_Nil, lists);
};
var $elm$core$String$lines = _String_lines;
var $elm$core$Result$map = F2(
	function (func, ra) {
		if (!ra.$) {
			var a = ra.a;
			return $elm$core$Result$Ok(
				func(a));
		} else {
			var e = ra.a;
			return $elm$core$Result$Err(e);
		}
	});
var $author$project$Internal$MathMacro$spaces = $elm$parser$Parser$Advanced$chompWhile(
	function (c) {
		return c === ' ';
	});
var $author$project$Internal$MathMacro$manyHelp = F2(
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
					A2($elm$parser$Parser$Advanced$ignorer, p, $author$project$Internal$MathMacro$spaces)),
					A2(
					$elm$parser$Parser$Advanced$map,
					function (_v0) {
						return $elm$parser$Parser$Advanced$Done(
							$elm$core$List$reverse(vs));
					},
					$elm$parser$Parser$Advanced$succeed(0))
				]));
	});
var $author$project$Internal$MathMacro$many = function (p) {
	return A2(
		$elm$parser$Parser$Advanced$loop,
		_List_Nil,
		$author$project$Internal$MathMacro$manyHelp(p));
};
var $elm$parser$Parser$Advanced$backtrackable = function (_v0) {
	var parse = _v0;
	return function (s0) {
		var _v1 = parse(s0);
		if (_v1.$ === 1) {
			var x = _v1.b;
			return A2($elm$parser$Parser$Advanced$Bad, false, x);
		} else {
			var a = _v1.b;
			var s1 = _v1.c;
			return A3($elm$parser$Parser$Advanced$Good, false, a, s1);
		}
	};
};
var $author$project$Internal$MathMacro$CArg = function (a) {
	return {$: 0, a: a};
};
var $author$project$Internal$MathMacro$ExpectingLeftBrace = 0;
var $author$project$Internal$MathMacro$ExpectingRightBrace = 1;
var $author$project$Internal$MathMacro$Macro = F2(
	function (a, b) {
		return {$: 1, a: a, b: b};
	});
var $author$project$Internal$MathMacro$MathList = function (a) {
	return {$: 3, a: a};
};
var $author$project$Internal$MathMacro$itemListHelper = F2(
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
					$elm$parser$Parser$Advanced$succeed(0))
				]));
	});
var $author$project$Internal$MathMacro$itemList_ = F2(
	function (initialList, itemParser) {
		return A2(
			$elm$parser$Parser$Advanced$loop,
			initialList,
			$author$project$Internal$MathMacro$itemListHelper(itemParser));
	});
var $author$project$Internal$MathMacro$itemList = function (itemParser) {
	return A2($author$project$Internal$MathMacro$itemList_, _List_Nil, itemParser);
};
var $author$project$Internal$MathMacro$ExpectingValidMacroArgWord = 3;
var $author$project$Internal$MathMacro$MathText = function (a) {
	return {$: 0, a: a};
};
var $author$project$Internal$MathMacro$inMacroArg = function (c) {
	return !((c === '\\') || ((c === '$') || ((c === '}') || ((c === ' ') || (c === '\n')))));
};
var $author$project$Internal$MathMacro$nonEmptyItemList = function (itemParser) {
	return A2(
		$elm$parser$Parser$Advanced$andThen,
		function (x) {
			return A2(
				$author$project$Internal$MathMacro$itemList_,
				_List_fromArray(
					[x]),
				itemParser);
		},
		itemParser);
};
var $author$project$Internal$MathMacro$ws = $elm$parser$Parser$Advanced$chompWhile(
	function (c) {
		return (c === ' ') || (c === '\n');
	});
var $author$project$Internal$MathMacro$word = F2(
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
						$author$project$Internal$MathMacro$ws),
					A2(
						$elm$parser$Parser$Advanced$ignorer,
						A2(
							$elm$parser$Parser$Advanced$ignorer,
							A2(
								$elm$parser$Parser$Advanced$ignorer,
								$elm$parser$Parser$Advanced$getOffset,
								A2($elm$parser$Parser$Advanced$chompIf, inWord, problem)),
							$elm$parser$Parser$Advanced$chompWhile(inWord)),
						$author$project$Internal$MathMacro$ws)),
				$elm$parser$Parser$Advanced$getOffset),
			$elm$parser$Parser$Advanced$getSource);
	});
var $author$project$Internal$MathMacro$macroArgWords = A2(
	$elm$parser$Parser$Advanced$map,
	$author$project$Internal$MathMacro$MathText,
	A2(
		$elm$parser$Parser$Advanced$map,
		$elm$core$String$join(' '),
		$author$project$Internal$MathMacro$nonEmptyItemList(
			A2($author$project$Internal$MathMacro$word, 3, $author$project$Internal$MathMacro$inMacroArg))));
var $author$project$Internal$MathMacro$ExpectingMacroReservedWord = 2;
var $author$project$Internal$MathMacro$macroName = A2(
	$elm$parser$Parser$Advanced$map,
	$elm$core$String$dropLeft(1),
	$elm$parser$Parser$Advanced$variable(
		{
			de: 2,
			dt: function (c) {
				return $elm$core$Char$isAlphaNum(c) || (c === '*');
			},
			dS: $elm$core$Set$fromList(
				_List_fromArray(
					['\\item', '\\bibitem'])),
			d7: function (c) {
				return c === '\\';
			}
		}));
function $author$project$Internal$MathMacro$cyclic$macro() {
	return A2(
		$elm$parser$Parser$Advanced$keeper,
		A2(
			$elm$parser$Parser$Advanced$keeper,
			$elm$parser$Parser$Advanced$succeed($author$project$Internal$MathMacro$Macro),
			$author$project$Internal$MathMacro$macroName),
		A2(
			$elm$parser$Parser$Advanced$ignorer,
			$author$project$Internal$MathMacro$itemList(
				$author$project$Internal$MathMacro$cyclic$arg()),
			$author$project$Internal$MathMacro$ws));
}
function $author$project$Internal$MathMacro$cyclic$arg() {
	return A2(
		$elm$parser$Parser$Advanced$inContext,
		$author$project$Internal$MathMacro$CArg('arg'),
		A2(
			$elm$parser$Parser$Advanced$map,
			$author$project$Internal$MathMacro$MathList,
			A2(
				$elm$parser$Parser$Advanced$keeper,
				A2(
					$elm$parser$Parser$Advanced$ignorer,
					A2(
						$elm$parser$Parser$Advanced$ignorer,
						$elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity),
						$elm$parser$Parser$Advanced$symbol(
							A2($elm$parser$Parser$Advanced$Token, '{', 0))),
					$author$project$Internal$MathMacro$ws),
				A2(
					$elm$parser$Parser$Advanced$ignorer,
					$author$project$Internal$MathMacro$cyclic$argList(),
					$elm$parser$Parser$Advanced$symbol(
						A2($elm$parser$Parser$Advanced$Token, '}', 1))))));
}
function $author$project$Internal$MathMacro$cyclic$argList() {
	return $author$project$Internal$MathMacro$itemList(
		$elm$parser$Parser$Advanced$oneOf(
			_List_fromArray(
				[
					$author$project$Internal$MathMacro$macroArgWords,
					$elm$parser$Parser$Advanced$lazy(
					function (_v0) {
						return $author$project$Internal$MathMacro$cyclic$macro();
					})
				])));
}
var $author$project$Internal$MathMacro$macro = $author$project$Internal$MathMacro$cyclic$macro();
$author$project$Internal$MathMacro$cyclic$macro = function () {
	return $author$project$Internal$MathMacro$macro;
};
var $author$project$Internal$MathMacro$arg = $author$project$Internal$MathMacro$cyclic$arg();
$author$project$Internal$MathMacro$cyclic$arg = function () {
	return $author$project$Internal$MathMacro$arg;
};
var $author$project$Internal$MathMacro$argList = $author$project$Internal$MathMacro$cyclic$argList();
$author$project$Internal$MathMacro$cyclic$argList = function () {
	return $author$project$Internal$MathMacro$argList;
};
var $author$project$Internal$MathMacro$ExpectingStuff = 8;
var $author$project$Internal$MathMacro$inStuff = function (c) {
	return !(c === '\\');
};
var $author$project$Internal$MathMacro$stuff = F2(
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
						$author$project$Internal$MathMacro$ws),
					A2(
						$elm$parser$Parser$Advanced$ignorer,
						A2(
							$elm$parser$Parser$Advanced$ignorer,
							A2(
								$elm$parser$Parser$Advanced$ignorer,
								$elm$parser$Parser$Advanced$getOffset,
								A2($elm$parser$Parser$Advanced$chompIf, $author$project$Internal$MathMacro$inStuff, problem)),
							$elm$parser$Parser$Advanced$chompWhile($author$project$Internal$MathMacro$inStuff)),
						$author$project$Internal$MathMacro$ws)),
				$elm$parser$Parser$Advanced$getOffset),
			$elm$parser$Parser$Advanced$getSource);
	});
var $author$project$Internal$MathMacro$mathStuff = A2(
	$elm$parser$Parser$Advanced$map,
	$author$project$Internal$MathMacro$MathText,
	A2($author$project$Internal$MathMacro$stuff, 8, $author$project$Internal$MathMacro$inStuff));
var $author$project$Internal$MathMacro$ExpectingLeftBracket = 4;
var $author$project$Internal$MathMacro$ExpectingNewCommand = 9;
var $author$project$Internal$MathMacro$ExpectingRightBracket = 6;
var $author$project$Internal$MathMacro$NewCommand = F3(
	function (a, b, c) {
		return {$: 2, a: a, b: b, c: c};
	});
var $author$project$Internal$MathMacro$ExpectingBackslash = 10;
var $author$project$Internal$MathMacro$newMacroName = A2(
	$elm$parser$Parser$Advanced$inContext,
	$author$project$Internal$MathMacro$CArg('arg'),
	A2(
		$elm$parser$Parser$Advanced$keeper,
		A2(
			$elm$parser$Parser$Advanced$ignorer,
			A2(
				$elm$parser$Parser$Advanced$ignorer,
				$elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity),
				$elm$parser$Parser$Advanced$symbol(
					A2($elm$parser$Parser$Advanced$Token, '{', 0))),
			$elm$parser$Parser$Advanced$symbol(
				A2($elm$parser$Parser$Advanced$Token, '\\', 10))),
		A2(
			$elm$parser$Parser$Advanced$ignorer,
			A2(
				$author$project$Internal$MathMacro$word,
				1,
				function (c) {
					return c !== '}';
				}),
			$elm$parser$Parser$Advanced$symbol(
				A2($elm$parser$Parser$Advanced$Token, '}', 1)))));
var $author$project$Internal$MathMacro$newCommand1 = A2(
	$elm$parser$Parser$Advanced$keeper,
	A2(
		$elm$parser$Parser$Advanced$keeper,
		A2(
			$elm$parser$Parser$Advanced$keeper,
			A2(
				$elm$parser$Parser$Advanced$ignorer,
				$elm$parser$Parser$Advanced$succeed($author$project$Internal$MathMacro$NewCommand),
				$elm$parser$Parser$Advanced$symbol(
					A2($elm$parser$Parser$Advanced$Token, '\\newcommand', 9))),
			A2(
				$elm$parser$Parser$Advanced$ignorer,
				$author$project$Internal$MathMacro$newMacroName,
				$elm$parser$Parser$Advanced$symbol(
					A2($elm$parser$Parser$Advanced$Token, '[', 4)))),
		A2(
			$elm$parser$Parser$Advanced$ignorer,
			A2(
				$author$project$Internal$MathMacro$word,
				6,
				function (c) {
					return c !== ']';
				}),
			$elm$parser$Parser$Advanced$symbol(
				A2($elm$parser$Parser$Advanced$Token, ']', 6)))),
	A2(
		$elm$parser$Parser$Advanced$ignorer,
		$author$project$Internal$MathMacro$itemList($author$project$Internal$MathMacro$arg),
		$author$project$Internal$MathMacro$ws));
var $author$project$Internal$MathMacro$newCommand2 = A2(
	$elm$parser$Parser$Advanced$keeper,
	A2(
		$elm$parser$Parser$Advanced$keeper,
		A2(
			$elm$parser$Parser$Advanced$ignorer,
			$elm$parser$Parser$Advanced$succeed(
				F2(
					function (x, y) {
						return A3($author$project$Internal$MathMacro$NewCommand, x, '0', y);
					})),
			$elm$parser$Parser$Advanced$symbol(
				A2($elm$parser$Parser$Advanced$Token, '\\newcommand', 9))),
		$author$project$Internal$MathMacro$newMacroName),
	A2(
		$elm$parser$Parser$Advanced$ignorer,
		$author$project$Internal$MathMacro$itemList($author$project$Internal$MathMacro$arg),
		$author$project$Internal$MathMacro$ws));
var $author$project$Internal$MathMacro$newCommand = $elm$parser$Parser$Advanced$oneOf(
	_List_fromArray(
		[
			$elm$parser$Parser$Advanced$backtrackable($author$project$Internal$MathMacro$newCommand1),
			$author$project$Internal$MathMacro$newCommand2
		]));
var $author$project$Internal$MathMacro$mathExpression = $elm$parser$Parser$Advanced$oneOf(
	_List_fromArray(
		[
			$elm$parser$Parser$Advanced$backtrackable($author$project$Internal$MathMacro$newCommand),
			$author$project$Internal$MathMacro$macro,
			$author$project$Internal$MathMacro$mathStuff
		]));
var $author$project$Internal$MathMacro$parse = function (str) {
	return A2(
		$elm$parser$Parser$Advanced$run,
		$author$project$Internal$MathMacro$many($author$project$Internal$MathMacro$mathExpression),
		str);
};
var $author$project$Internal$MathMacro$parseMany = function (str) {
	return A2(
		$elm$core$Result$map,
		$elm$core$List$concat,
		$elm_community$result_extra$Result$Extra$combine(
			A2(
				$elm$core$List$map,
				$author$project$Internal$MathMacro$parse,
				A2(
					$elm$core$List$map,
					$elm$core$String$trim,
					$elm$core$String$lines(
						$elm$core$String$trim(str))))));
};
var $author$project$Internal$MathMacro$evalStr = F2(
	function (macroDict_, str) {
		var _v0 = $author$project$Internal$MathMacro$parseMany(
			$elm$core$String$trim(str));
		if (!_v0.$) {
			var result = _v0.a;
			return A2($author$project$Internal$MathMacro$evalList, macroDict_, result);
		} else {
			return str;
		}
	});
var $elm$json$Json$Encode$bool = _Json_wrap;
var $author$project$Internal$Render$isDisplayMathMode = function (displayMode) {
	if (!displayMode) {
		return false;
	} else {
		return true;
	}
};
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
var $author$project$Internal$Render$mathText = F2(
	function (displayMode, content) {
		return A3(
			$elm$html$Html$node,
			'math-text',
			_List_fromArray(
				[
					A2(
					$elm$html$Html$Attributes$property,
					'delay',
					$elm$json$Json$Encode$bool(false)),
					A2(
					$elm$html$Html$Attributes$property,
					'display',
					$elm$json$Json$Encode$bool(
						$author$project$Internal$Render$isDisplayMathMode(displayMode))),
					A2(
					$elm$html$Html$Attributes$property,
					'content',
					$elm$json$Json$Encode$string(
						A3($elm$core$String$replace, '\\ \\', '\\\\', content)))
				]),
			_List_Nil);
	});
var $author$project$Internal$Render$displayMathText = F2(
	function (latexState, str_) {
		var str = A2($author$project$Internal$MathMacro$evalStr, latexState.dE, str_);
		return A2(
			$author$project$Internal$Render$mathText,
			1,
			$elm$core$String$trim(str));
	});
var $elm$html$Html$div = _VirtualDom_node('div');
var $elm$html$Html$span = _VirtualDom_node('span');
var $elm$virtual_dom$VirtualDom$text = _VirtualDom_text;
var $elm$html$Html$text = $elm$virtual_dom$VirtualDom$text;
var $author$project$Internal$Render$enclose = function (msg) {
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
var $author$project$Internal$Macro$nArgs = function (latexExpression) {
	if (latexExpression.$ === 6) {
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
var $author$project$Internal$Utility$numberedLine = F2(
	function (k, line) {
		return A3(
			$elm$core$String$padLeft,
			2,
			' ',
			$elm$core$String$fromInt(k)) + (' ' + line);
	});
var $author$project$Internal$Utility$addNumberedLine = F2(
	function (line, data) {
		var _v0 = data;
		var k = _v0.a;
		var lines = _v0.b;
		return _Utils_Tuple2(
			k + 1,
			_Utils_ap(
				_List_fromArray(
					[
						A2($author$project$Internal$Utility$numberedLine, k + 1, line)
					]),
				lines));
	});
var $elm$core$Tuple$second = function (_v0) {
	var y = _v0.b;
	return y;
};
var $author$project$Internal$Utility$addLineNumbers = function (text) {
	return A2(
		$elm$core$String$join,
		'\n',
		$elm$core$List$reverse(
			A3(
				$elm$core$List$foldl,
				$author$project$Internal$Utility$addNumberedLine,
				_Utils_Tuple2(0, _List_Nil),
				A2(
					$elm$core$String$split,
					'\n',
					$elm$core$String$trim(text))).b));
};
var $author$project$Internal$Html$div = F2(
	function (attributes, children) {
		var childrenString = A2($elm$core$String$join, '\n', children);
		var attributeString = A2($elm$core$String$join, ' ', attributes);
		return '<div ' + (attributeString + (' >\n' + (childrenString + '\n</div>')));
	});
var $author$project$Internal$LatexState$getCounter = F2(
	function (name, latexState) {
		var _v0 = A2($elm$core$Dict$get, name, latexState.V);
		if (!_v0.$) {
			var k = _v0.a;
			return k;
		} else {
			return 0;
		}
	});
var $author$project$Internal$Utility$getAt = F2(
	function (idx, xs) {
		return (idx < 0) ? $elm$core$Maybe$Nothing : $elm$core$List$head(
			A2($elm$core$List$drop, idx, xs));
	});
var $author$project$Internal$RenderToString$getElement = F2(
	function (k, list) {
		return A2(
			$elm$core$Maybe$withDefault,
			$author$project$Internal$Parser$LXString('xxx'),
			A2($author$project$Internal$Utility$getAt, k, list));
	});
var $author$project$Internal$RenderToString$itemClass = function (level) {
	return 'item' + $elm$core$String$fromInt(level);
};
var $author$project$Internal$JoinStrings$NoSpace = 1;
var $author$project$Internal$JoinStrings$Space = 0;
var $author$project$Internal$JoinStrings$firstChar = $elm$core$String$left(1);
var $elm$core$String$right = F2(
	function (n, string) {
		return (n < 1) ? '' : A3(
			$elm$core$String$slice,
			-n,
			$elm$core$String$length(string),
			string);
	});
var $author$project$Internal$JoinStrings$lastChar = $elm$core$String$right(1);
var $author$project$Internal$JoinStrings$joinType = F2(
	function (l, r) {
		var lastCharLeft = $author$project$Internal$JoinStrings$lastChar(l);
		var firstCharRight = $author$project$Internal$JoinStrings$firstChar(r);
		return (l === '') ? 1 : (A2(
			$elm$core$List$member,
			lastCharLeft,
			_List_fromArray(
				['('])) ? 1 : (A2(
			$elm$core$List$member,
			firstCharRight,
			_List_fromArray(
				[')', '.', ',', '?', '!', ';', ':'])) ? 1 : 0));
	});
var $author$project$Internal$JoinStrings$joinDatum2String = F2(
	function (current, datum) {
		var _v0 = datum;
		var acc = _v0.a;
		var previous = _v0.b;
		var _v1 = A2($author$project$Internal$JoinStrings$joinType, previous, current);
		if (_v1 === 1) {
			return _Utils_Tuple2(
				_Utils_ap(acc, current),
				current);
		} else {
			return _Utils_Tuple2(acc + (' ' + current), current);
		}
	});
var $author$project$Internal$JoinStrings$joinList = function (stringList) {
	var start = A2(
		$elm$core$Maybe$withDefault,
		'',
		$elm$core$List$head(stringList));
	return A3(
		$elm$core$List$foldl,
		$author$project$Internal$JoinStrings$joinDatum2String,
		_Utils_Tuple2('', ''),
		stringList).a;
};
var $author$project$Internal$RenderToString$postProcess = function (str) {
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
var $author$project$Internal$RenderToString$renderComment = function (str) {
	return '';
};
var $author$project$Internal$RenderToString$renderCommentEnvironment = F2(
	function (latexState, body) {
		return '';
	});
var $author$project$Internal$ErrorMessages2$renderError = function (errorDatum) {
	return 'error';
};
var $author$project$Internal$RenderToString$renderCell = function (cell) {
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
var $author$project$Internal$RenderToString$renderRow = function (row) {
	if (row.$ === 8) {
		var row_ = row.a;
		return function (row__) {
			return '<tr> ' + (row__ + ' </tr>\n');
		}(
			A3(
				$elm$core$List$foldl,
				F2(
					function (cell, acc) {
						return acc + (' ' + $author$project$Internal$RenderToString$renderCell(cell));
					}),
				'',
				row_));
	} else {
		return '<tr>-</tr>';
	}
};
var $author$project$Internal$RenderToString$renderTableBody = function (body) {
	if (body.$ === 8) {
		var body_ = body.a;
		return function (bod) {
			return '<table>\n' + (bod + '</table>\n');
		}(
			A3(
				$elm$core$List$foldl,
				F2(
					function (row, acc) {
						return acc + (' ' + $author$project$Internal$RenderToString$renderRow(row));
					}),
				'',
				body_));
	} else {
		return '<table>-</table>';
	}
};
var $author$project$Internal$RenderToString$renderTabular = F2(
	function (latexState, body) {
		return $author$project$Internal$RenderToString$renderTableBody(body);
	});
var $author$project$Internal$RenderToString$environmentRenderer = function (name) {
	var _v3 = A2(
		$elm$core$Dict$get,
		name,
		$author$project$Internal$RenderToString$cyclic$renderEnvironmentDict());
	if (!_v3.$) {
		var f = _v3.a;
		return f;
	} else {
		return $author$project$Internal$RenderToString$renderDefaultEnvironment(name);
	}
};
var $author$project$Internal$RenderToString$macroRenderer = F4(
	function (name, latexState, optArgs, args) {
		var _v2 = A2(
			$elm$core$Dict$get,
			name,
			$author$project$Internal$RenderToString$cyclic$renderMacroDict());
		if (!_v2.$) {
			var f = _v2.a;
			return A3(f, latexState, optArgs, args);
		} else {
			return A4($author$project$Internal$RenderToString$reproduceMacro, name, latexState, optArgs, args);
		}
	});
var $author$project$Internal$RenderToString$render = F2(
	function (latexState, latexExpression) {
		switch (latexExpression.$) {
			case 1:
				var str = latexExpression.a;
				return $author$project$Internal$RenderToString$renderComment(str);
			case 6:
				var name = latexExpression.a;
				var optArgs = latexExpression.b;
				var args = latexExpression.c;
				return A4($author$project$Internal$RenderToString$renderMacro, latexState, name, optArgs, args);
			case 5:
				var name = latexExpression.a;
				var optArgs = latexExpression.b;
				var args = latexExpression.c;
				var le = latexExpression.d;
				return A5($author$project$Internal$RenderToString$renderSMacro, latexState, name, optArgs, args, le);
			case 2:
				var level = latexExpression.a;
				var latexExpr = latexExpression.b;
				return A3($author$project$Internal$RenderToString$renderItem, latexState, level, latexExpr);
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
				return A4($author$project$Internal$RenderToString$renderEnvironment, latexState, name, args, body);
			case 8:
				var args = latexExpression.a;
				return A2($author$project$Internal$RenderToString$renderLatexList, latexState, args);
			case 0:
				var str = latexExpression.a;
				return str;
			case 9:
				var commandName = latexExpression.a;
				var numberOfArgs = latexExpression.b;
				var commandBody = latexExpression.c;
				return 'newCommand: ' + commandName;
			default:
				var error = latexExpression.a;
				return A2(
					$elm$core$String$join,
					'; ',
					A2($elm$core$List$map, $author$project$Internal$ErrorMessages2$renderError, error));
		}
	});
var $author$project$Internal$RenderToString$renderAlignEnvironment = F2(
	function (latexState, body) {
		var s1 = A2($author$project$Internal$LatexState$getCounter, 's1', latexState);
		var r = A3(
			$elm$core$String$replace,
			'\\ \\',
			'\\\\',
			A2($author$project$Internal$RenderToString$render, latexState, body));
		var eqno = A2($author$project$Internal$LatexState$getCounter, 'eqno', latexState);
		var addendum = (eqno > 0) ? ((s1 > 0) ? ('\\tag{' + ($elm$core$String$fromInt(s1) + ('.' + ($elm$core$String$fromInt(eqno) + '}')))) : ('\\tag{' + ($elm$core$String$fromInt(eqno) + '}'))) : '';
		return '\n$$\n\\begin{align}\n' + (addendum + (r + '\n\\end{align}\n$$\n'));
	});
var $author$project$Internal$RenderToString$renderArg = F3(
	function (k, latexState, args) {
		return $elm$core$String$trim(
			A2(
				$author$project$Internal$RenderToString$render,
				latexState,
				A2($author$project$Internal$RenderToString$getElement, k, args)));
	});
var $author$project$Internal$RenderToString$renderArgList = F2(
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
					$author$project$Internal$RenderToString$render(latexState),
					args)));
	});
var $author$project$Internal$RenderToString$renderBibItem = F4(
	function (latexState, optArgs, args, body) {
		var label = ($elm$core$List$length(optArgs) === 1) ? A3($author$project$Internal$RenderToString$renderArg, 0, latexState, optArgs) : A3($author$project$Internal$RenderToString$renderArg, 0, latexState, args);
		return ' <p id=bibitem:' + (label + ('>[' + (label + ('] ' + (A2($author$project$Internal$RenderToString$render, latexState, body) + '</p>\n')))));
	});
var $author$project$Internal$RenderToString$renderBozo = F2(
	function (latexState, args) {
		return 'bozo{' + (A3($author$project$Internal$RenderToString$renderArg, 0, latexState, args) + ('}{' + (A3($author$project$Internal$RenderToString$renderArg, 1, latexState, args) + '}')));
	});
var $author$project$Internal$RenderToString$renderCenterEnvironment = F2(
	function (latexState, body) {
		var r = A2($author$project$Internal$RenderToString$render, latexState, body);
		return '\n<div class=\"center\" >\n' + (r + '\n</div>\n');
	});
var $author$project$Internal$RenderToString$renderDefaultEnvironment = F4(
	function (name, latexState, args, body) {
		return A2(
			$elm$core$List$member,
			name,
			_List_fromArray(
				['theorem', 'proposition', 'corollary', 'lemma', 'definition'])) ? A4($author$project$Internal$RenderToString$renderTheoremLikeEnvironment, latexState, name, args, body) : A4($author$project$Internal$RenderToString$renderDefaultEnvironment2, latexState, name, args, body);
	});
var $author$project$Internal$RenderToString$renderDefaultEnvironment2 = F4(
	function (latexState, name, args, body) {
		var r = A2($author$project$Internal$RenderToString$render, latexState, body);
		return '\n<div class=\"environment\">\n<strong>' + (name + ('</strong>\n<div>\n' + (r + '\n</div>\n</div>\n')));
	});
var $author$project$Internal$RenderToString$renderEnumerate = F2(
	function (latexState, body) {
		return '\n<ol>\n' + (A2($author$project$Internal$RenderToString$render, latexState, body) + '\n</ol>\n');
	});
var $author$project$Internal$RenderToString$renderEnvironment = F4(
	function (latexState, name, args, body) {
		return A4($author$project$Internal$RenderToString$environmentRenderer, name, latexState, args, body);
	});
var $author$project$Internal$RenderToString$renderEqnArray = F2(
	function (latexState, body) {
		return '\n$$\n' + (A2($author$project$Internal$RenderToString$render, latexState, body) + '\n$$\n');
	});
var $author$project$Internal$RenderToString$renderEquationEnvironment = F2(
	function (latexState, body) {
		var s1 = A2($author$project$Internal$LatexState$getCounter, 's1', latexState);
		var r = A2($author$project$Internal$RenderToString$render, latexState, body);
		var eqno = A2($author$project$Internal$LatexState$getCounter, 'eqno', latexState);
		var addendum = (eqno > 0) ? ((s1 > 0) ? ('\\tag{' + ($elm$core$String$fromInt(s1) + ('.' + ($elm$core$String$fromInt(eqno) + '}')))) : ('\\tag{' + ($elm$core$String$fromInt(eqno) + '}'))) : '';
		return '\n$$\n\\begin{equation}' + (addendum + (r + '\\end{equation}\n$$\n'));
	});
var $author$project$Internal$RenderToString$renderIndentEnvironment = F2(
	function (latexState, body) {
		return A2(
			$author$project$Internal$Html$div,
			_List_fromArray(
				['style=\"margin-left:2em\"']),
			_List_fromArray(
				[
					A2($author$project$Internal$RenderToString$render, latexState, body)
				]));
	});
var $author$project$Internal$RenderToString$renderItem = F3(
	function (latexState, level, latexExpression) {
		return '<li class=\"' + ($author$project$Internal$RenderToString$itemClass(level) + ('\">' + (A2($author$project$Internal$RenderToString$render, latexState, latexExpression) + '</li>\n')));
	});
var $author$project$Internal$RenderToString$renderItemize = F2(
	function (latexState, body) {
		return '\n<ul>\n' + (A2($author$project$Internal$RenderToString$render, latexState, body) + '\n</ul>\n');
	});
var $author$project$Internal$RenderToString$renderLatexList = F2(
	function (latexState, args) {
		return $author$project$Internal$RenderToString$postProcess(
			$author$project$Internal$JoinStrings$joinList(
				A2(
					$elm$core$List$map,
					$author$project$Internal$RenderToString$render(latexState),
					args)));
	});
var $author$project$Internal$RenderToString$renderListing = F2(
	function (latexState, body) {
		var text = A2($author$project$Internal$RenderToString$render, latexState, body);
		return '\n<pre class=\"verbatim\">' + ($author$project$Internal$Utility$addLineNumbers(text) + '</pre>\n');
	});
var $author$project$Internal$RenderToString$renderMacro = F4(
	function (latexState, name, optArgs, args) {
		return A4($author$project$Internal$RenderToString$macroRenderer, name, latexState, optArgs, args);
	});
var $author$project$Internal$RenderToString$renderMacros = F2(
	function (latexState, body) {
		return '\n$$\n' + (A2($author$project$Internal$RenderToString$render, latexState, body) + '\n$$\n');
	});
var $author$project$Internal$RenderToString$renderOptArgList = F2(
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
					$author$project$Internal$RenderToString$render(latexState),
					args)));
	});
var $author$project$Internal$RenderToString$renderQuotation = F2(
	function (latexState, body) {
		return A2(
			$author$project$Internal$Html$div,
			_List_fromArray(
				['class=\"quotation\"']),
			_List_fromArray(
				[
					A2($author$project$Internal$RenderToString$render, latexState, body)
				]));
	});
var $author$project$Internal$RenderToString$renderSMacro = F5(
	function (latexState, name, optArgs, args, le) {
		var _v0 = A2(
			$elm$core$Dict$get,
			name,
			$author$project$Internal$RenderToString$cyclic$renderSMacroDict());
		if (!_v0.$) {
			var f = _v0.a;
			return A4(f, latexState, optArgs, args, le);
		} else {
			return '<span style=\"color: red;\">\\' + (name + (A2($author$project$Internal$RenderToString$renderArgList, $author$project$Internal$LatexState$emptyLatexState, args) + (' ' + (A2($author$project$Internal$RenderToString$render, latexState, le) + '</span>'))));
		}
	});
var $author$project$Internal$RenderToString$renderTheBibliography = F2(
	function (latexState, body) {
		return A2(
			$author$project$Internal$Html$div,
			_List_fromArray(
				['style=\"\"']),
			_List_fromArray(
				[
					A2($author$project$Internal$RenderToString$render, latexState, body)
				]));
	});
var $author$project$Internal$RenderToString$renderTheoremLikeEnvironment = F4(
	function (latexState, name, args, body) {
		var tno = A2($author$project$Internal$LatexState$getCounter, 'tno', latexState);
		var s1 = A2($author$project$Internal$LatexState$getCounter, 's1', latexState);
		var tnoString = (s1 > 0) ? (' ' + ($elm$core$String$fromInt(s1) + ('.' + $elm$core$String$fromInt(tno)))) : (' ' + $elm$core$String$fromInt(tno));
		var r = A2($author$project$Internal$RenderToString$render, latexState, body);
		var eqno = A2($author$project$Internal$LatexState$getCounter, 'eqno', latexState);
		return '\n<div class=\"environment\">\n<strong>' + (name + (tnoString + ('</strong>\n<div class=\"italic\">\n' + (r + '\n</div>\n</div>\n'))));
	});
var $author$project$Internal$RenderToString$renderUseForWeb = F2(
	function (latexState, body) {
		return '\n$$\n' + (A2($author$project$Internal$RenderToString$render, latexState, body) + '\n$$\n');
	});
var $author$project$Internal$RenderToString$renderVerbatim = F2(
	function (latexState, body) {
		var body2 = A3(
			$elm$core$String$replace,
			'<',
			'&lt;',
			A3(
				$elm$core$String$replace,
				'>',
				'&gt;',
				A2($author$project$Internal$RenderToString$render, latexState, body)));
		return '\n<pre class=\"verbatim\">' + (body2 + '</pre>\n');
	});
var $author$project$Internal$RenderToString$renderVerse = F2(
	function (latexState, body) {
		return A2(
			$author$project$Internal$Html$div,
			_List_fromArray(
				['class=\"verse\"']),
			_List_fromArray(
				[
					$elm$core$String$trim(
					A2($author$project$Internal$RenderToString$render, latexState, body))
				]));
	});
var $author$project$Internal$RenderToString$reproduceMacro = F4(
	function (name, latexState, optArgs, args) {
		return '<span style=\"color: red;\">\\' + (name + (A2($author$project$Internal$RenderToString$renderOptArgList, $author$project$Internal$LatexState$emptyLatexState, optArgs) + (A2($author$project$Internal$RenderToString$renderArgList, $author$project$Internal$LatexState$emptyLatexState, args) + '</span>')));
	});
function $author$project$Internal$RenderToString$cyclic$renderEnvironmentDict() {
	return $elm$core$Dict$fromList(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'align',
				F3(
					function (x, a, y) {
						return A2($author$project$Internal$RenderToString$renderAlignEnvironment, x, y);
					})),
				_Utils_Tuple2(
				'center',
				F3(
					function (x, a, y) {
						return A2($author$project$Internal$RenderToString$renderCenterEnvironment, x, y);
					})),
				_Utils_Tuple2(
				'comment',
				F3(
					function (x, a, y) {
						return A2($author$project$Internal$RenderToString$renderCommentEnvironment, x, y);
					})),
				_Utils_Tuple2(
				'indent',
				F3(
					function (x, a, y) {
						return A2($author$project$Internal$RenderToString$renderIndentEnvironment, x, y);
					})),
				_Utils_Tuple2(
				'enumerate',
				F3(
					function (x, a, y) {
						return A2($author$project$Internal$RenderToString$renderEnumerate, x, y);
					})),
				_Utils_Tuple2(
				'eqnarray',
				F3(
					function (x, a, y) {
						return A2($author$project$Internal$RenderToString$renderEqnArray, x, y);
					})),
				_Utils_Tuple2(
				'equation',
				F3(
					function (x, a, y) {
						return A2($author$project$Internal$RenderToString$renderEquationEnvironment, x, y);
					})),
				_Utils_Tuple2(
				'itemize',
				F3(
					function (x, a, y) {
						return A2($author$project$Internal$RenderToString$renderItemize, x, y);
					})),
				_Utils_Tuple2(
				'listing',
				F3(
					function (x, a, y) {
						return A2($author$project$Internal$RenderToString$renderListing, x, y);
					})),
				_Utils_Tuple2(
				'macros',
				F3(
					function (x, a, y) {
						return A2($author$project$Internal$RenderToString$renderMacros, x, y);
					})),
				_Utils_Tuple2(
				'quotation',
				F3(
					function (x, a, y) {
						return A2($author$project$Internal$RenderToString$renderQuotation, x, y);
					})),
				_Utils_Tuple2(
				'tabular',
				F3(
					function (x, a, y) {
						return A2($author$project$Internal$RenderToString$renderTabular, x, y);
					})),
				_Utils_Tuple2(
				'thebibliography',
				F3(
					function (x, a, y) {
						return A2($author$project$Internal$RenderToString$renderTheBibliography, x, y);
					})),
				_Utils_Tuple2(
				'maskforweb',
				F3(
					function (x, a, y) {
						return A2($author$project$Internal$RenderToString$renderCommentEnvironment, x, y);
					})),
				_Utils_Tuple2(
				'useforweb',
				F3(
					function (x, a, y) {
						return A2($author$project$Internal$RenderToString$renderUseForWeb, x, y);
					})),
				_Utils_Tuple2(
				'verbatim',
				F3(
					function (x, a, y) {
						return A2($author$project$Internal$RenderToString$renderVerbatim, x, y);
					})),
				_Utils_Tuple2(
				'verse',
				F3(
					function (x, a, y) {
						return A2($author$project$Internal$RenderToString$renderVerse, x, y);
					}))
			]));
}
function $author$project$Internal$RenderToString$cyclic$renderMacroDict() {
	return $elm$core$Dict$fromList(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'italic',
				F3(
					function (x, y, z) {
						return A2($author$project$Internal$RenderToString$renderBozo, x, z);
					}))
			]));
}
function $author$project$Internal$RenderToString$cyclic$renderSMacroDict() {
	return $elm$core$Dict$fromList(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'bibitem',
				F4(
					function (latexState, optArgs, args, body) {
						return A4($author$project$Internal$RenderToString$renderBibItem, latexState, optArgs, args, body);
					}))
			]));
}
var $author$project$Internal$RenderToString$renderEnvironmentDict = $author$project$Internal$RenderToString$cyclic$renderEnvironmentDict();
$author$project$Internal$RenderToString$cyclic$renderEnvironmentDict = function () {
	return $author$project$Internal$RenderToString$renderEnvironmentDict;
};
var $author$project$Internal$RenderToString$renderMacroDict = $author$project$Internal$RenderToString$cyclic$renderMacroDict();
$author$project$Internal$RenderToString$cyclic$renderMacroDict = function () {
	return $author$project$Internal$RenderToString$renderMacroDict;
};
var $author$project$Internal$RenderToString$renderSMacroDict = $author$project$Internal$RenderToString$cyclic$renderSMacroDict();
$author$project$Internal$RenderToString$cyclic$renderSMacroDict = function () {
	return $author$project$Internal$RenderToString$renderSMacroDict;
};
var $author$project$Internal$Macro$renderArg = F2(
	function (k, macro) {
		if (macro.$ === 6) {
			var name = macro.a;
			var optArgs = macro.b;
			var args = macro.c;
			return A3($author$project$Internal$RenderToString$renderArg, k - 1, $author$project$Internal$LatexState$emptyLatexState, args);
		} else {
			return '';
		}
	});
var $author$project$Internal$Macro$substituteOne = F3(
	function (k, macro, str) {
		var hashK = '#' + $elm$core$String$fromInt(k);
		var arg = A2($author$project$Internal$Macro$renderArg, k, macro);
		return A3($elm$core$String$replace, hashK, arg, str);
	});
var $author$project$Internal$Macro$substituteMany = F3(
	function (k, macro, str) {
		substituteMany:
		while (true) {
			if (!k) {
				return str;
			} else {
				var $temp$k = k - 1,
					$temp$macro = macro,
					$temp$str = A3($author$project$Internal$Macro$substituteOne, k, macro, str);
				k = $temp$k;
				macro = $temp$macro;
				str = $temp$str;
				continue substituteMany;
			}
		}
	});
var $author$project$Internal$Macro$substitute = F2(
	function (macro, str) {
		return A3(
			$author$project$Internal$Macro$substituteMany,
			$author$project$Internal$Macro$nArgs(macro),
			macro,
			str);
	});
var $author$project$Internal$Macro$expandMacro_ = F2(
	function (macro, macroDef) {
		switch (macroDef.$) {
			case 1:
				var str = macroDef.a;
				return $author$project$Internal$Parser$Comment(str);
			case 6:
				var name = macroDef.a;
				var optArgs = macroDef.b;
				var args = macroDef.c;
				return A3(
					$author$project$Internal$Parser$Macro,
					name,
					optArgs,
					A2(
						$elm$core$List$map,
						$author$project$Internal$Macro$expandMacro_(macro),
						args));
			case 5:
				var name = macroDef.a;
				var optArgs = macroDef.b;
				var args = macroDef.c;
				var le = macroDef.d;
				return A4(
					$author$project$Internal$Parser$SMacro,
					name,
					optArgs,
					A2(
						$elm$core$List$map,
						$author$project$Internal$Macro$expandMacro_(macro),
						args),
					A2($author$project$Internal$Macro$expandMacro_, macro, le));
			case 2:
				var level = macroDef.a;
				var latexExpr = macroDef.b;
				return A2(
					$author$project$Internal$Parser$Item,
					level,
					A2($author$project$Internal$Macro$expandMacro_, macro, latexExpr));
			case 3:
				var str = macroDef.a;
				return $author$project$Internal$Parser$InlineMath(str);
			case 4:
				var str = macroDef.a;
				return $author$project$Internal$Parser$DisplayMath(str);
			case 7:
				var name = macroDef.a;
				var args = macroDef.b;
				var body = macroDef.c;
				return A3(
					$author$project$Internal$Parser$Environment,
					name,
					args,
					A2($author$project$Internal$Macro$expandMacro_, macro, body));
			case 8:
				var latexList = macroDef.a;
				return $author$project$Internal$Parser$LatexList(
					A2(
						$elm$core$List$map,
						$author$project$Internal$Macro$expandMacro_(macro),
						latexList));
			case 0:
				var str = macroDef.a;
				return $author$project$Internal$Parser$LXString(
					A2($author$project$Internal$Macro$substitute, macro, str));
			case 9:
				var commandName = macroDef.a;
				var numberOfArgs = macroDef.b;
				var commandBody = macroDef.c;
				return A3(
					$author$project$Internal$Parser$NewCommand,
					commandName,
					numberOfArgs,
					A2($author$project$Internal$Macro$expandMacro_, macro, commandBody));
			default:
				var error = macroDef.a;
				return $author$project$Internal$Parser$LXError(error);
		}
	});
var $author$project$Internal$Macro$expandMacro = F2(
	function (macro, macroDef) {
		var _v0 = A2($author$project$Internal$Macro$expandMacro_, macro, macroDef);
		if (_v0.$ === 9) {
			var latexList = _v0.c;
			return latexList;
		} else {
			return $author$project$Internal$Parser$LXString('error');
		}
	});
var $author$project$Internal$Render$getElement = F2(
	function (k, list) {
		return A2(
			$elm$core$Maybe$withDefault,
			$author$project$Internal$Parser$LXString('xxx'),
			A2($author$project$Internal$Utility$getAt, k, list));
	});
var $elm$html$Html$h2 = _VirtualDom_node('h2');
var $elm$html$Html$h3 = _VirtualDom_node('h3');
var $elm$html$Html$h4 = _VirtualDom_node('h4');
var $elm$core$String$fromFloat = _String_fromNumber;
var $elm$html$Html$Attributes$id = $elm$html$Html$Attributes$stringProperty('id');
var $elm$virtual_dom$VirtualDom$style = _VirtualDom_style;
var $elm$html$Html$Attributes$style = $elm$virtual_dom$VirtualDom$style;
var $author$project$Internal$Render$headingStyle = F2(
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
var $elm$html$Html$i = _VirtualDom_node('i');
var $elm$core$String$toLower = _String_toLower;
var $elm$regex$Regex$Match = F4(
	function (match, index, number, submatches) {
		return {dr: index, av: match, dI: number, cn: submatches};
	});
var $elm$regex$Regex$fromStringWith = _Regex_fromStringWith;
var $elm$regex$Regex$fromString = function (string) {
	return A2(
		$elm$regex$Regex$fromStringWith,
		{br: false, bZ: false},
		string);
};
var $elm$regex$Regex$replace = _Regex_replaceAtMost(_Regex_infinity);
var $author$project$Internal$Render$userReplace = F3(
	function (userRegex, replacer, string) {
		var _v0 = $elm$regex$Regex$fromString(userRegex);
		if (_v0.$ === 1) {
			return string;
		} else {
			var regex = _v0.a;
			return A3($elm$regex$Regex$replace, regex, replacer, string);
		}
	});
var $author$project$Internal$Render$compress = F2(
	function (replaceBlank, str) {
		return A3(
			$author$project$Internal$Render$userReplace,
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
var $author$project$Internal$Render$makeId = F2(
	function (prefix, name) {
		return A2(
			$elm$core$String$join,
			'_',
			_List_fromArray(
				[
					'',
					prefix,
					A2($author$project$Internal$Render$compress, '_', name)
				]));
	});
var $author$project$Internal$Render$idPhrase = F2(
	function (prefix, name) {
		var compressedName = A3(
			$elm$core$String$replace,
			' ',
			'_',
			$elm$core$String$toLower(name));
		return A2($author$project$Internal$Render$makeId, prefix, name);
	});
var $author$project$Internal$Render$InlineMathMode = 0;
var $author$project$Internal$Render$inlineMathText = F2(
	function (latexState, str_) {
		var str = A2($author$project$Internal$MathMacro$evalStr, latexState.dE, str_);
		return A2(
			$author$project$Internal$Render$mathText,
			0,
			$elm$core$String$trim(str));
	});
var $elm$html$Html$li = _VirtualDom_node('li');
var $elm$html$Html$ol = _VirtualDom_node('ol');
var $author$project$Internal$Render$oneSpace = $elm$html$Html$text(' ');
var $elm$html$Html$p = _VirtualDom_node('p');
var $author$project$Internal$Render$renderAttachNote = F3(
	function (_v0, latexState, args) {
		var content = A3($author$project$Internal$RenderToString$renderArg, 1, latexState, args);
		var author = A3($author$project$Internal$RenderToString$renderArg, 0, latexState, args);
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					A2($elm$html$Html$Attributes$style, 'display', 'flex'),
					A2($elm$html$Html$Attributes$style, 'flex-direction', 'column')
				]),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							A2($elm$html$Html$Attributes$style, 'color', 'blue')
						]),
					_List_fromArray(
						[
							$elm$html$Html$text(author)
						])),
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							A2($elm$html$Html$Attributes$style, 'background-color', 'yellow')
						]),
					_List_fromArray(
						[
							$elm$html$Html$text(content)
						]))
				]));
	});
var $author$project$Internal$Render$renderAuthor = F3(
	function (_v0, latexState, args) {
		return A2($elm$html$Html$span, _List_Nil, _List_Nil);
	});
var $author$project$Internal$Render$renderBegin = F3(
	function (_v0, latexState, args) {
		return A2(
			$elm$html$Html$span,
			_List_Nil,
			_List_fromArray(
				[
					$elm$html$Html$text('\\begin')
				]));
	});
var $author$project$Internal$Render$renderBigSkip = F3(
	function (_v0, latexState, args) {
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					A2($elm$html$Html$Attributes$style, 'height', '40px')
				]),
			_List_Nil);
	});
var $author$project$Internal$Render$renderBlue = F3(
	function (_v0, latexState, args) {
		var arg = A3($author$project$Internal$RenderToString$renderArg, 0, latexState, args);
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
var $author$project$Internal$LatexState$getDictionaryItem = F2(
	function (key, latexState) {
		var _v0 = A2($elm$core$Dict$get, key, latexState.bz);
		if (!_v0.$) {
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
var $author$project$Internal$Render$renderCite = F3(
	function (_v0, latexState, args) {
		var label_ = A3($author$project$Internal$RenderToString$renderArg, 0, latexState, args);
		var ref = A2($author$project$Internal$LatexState$getDictionaryItem, 'bibitem:' + label_, latexState);
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
var $author$project$Internal$Render$renderCommentEnvironment = F3(
	function (source, latexState, body) {
		return A2($elm$html$Html$div, _List_Nil, _List_Nil);
	});
var $author$project$Internal$Render$renderDate = F3(
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
var $author$project$Internal$Render$renderDocumentTitle = F3(
	function (_v0, latexState, list) {
		var title = A2($author$project$Internal$LatexState$getDictionaryItem, 'title', latexState);
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
		var revision = A2($author$project$Internal$LatexState$getDictionaryItem, 'revision', latexState);
		var revisionText = (revision !== '') ? ('Last revised ' + revision) : '';
		var email = A2($author$project$Internal$LatexState$getDictionaryItem, 'email', latexState);
		var date = A2($author$project$Internal$LatexState$getDictionaryItem, 'date', latexState);
		var author = A2($author$project$Internal$LatexState$getDictionaryItem, 'author', latexState);
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
var $author$project$Internal$Render$renderDollar = F3(
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
var $author$project$Internal$Render$renderEllie = F3(
	function (_v0, latexState, args) {
		var title_ = A3($author$project$Internal$RenderToString$renderArg, 1, latexState, args);
		var title = (title_ === 'xxx') ? 'Link to Ellie' : title_;
		var id = A3($author$project$Internal$RenderToString$renderArg, 0, latexState, args);
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
var $author$project$Internal$Render$renderEmail = F3(
	function (_v0, latexState, args) {
		return A2($elm$html$Html$span, _List_Nil, _List_Nil);
	});
var $author$project$Internal$Render$renderEnd = F3(
	function (_v0, atexState, args) {
		return A2(
			$elm$html$Html$span,
			_List_Nil,
			_List_fromArray(
				[
					$elm$html$Html$text('\\end')
				]));
	});
var $author$project$Internal$LatexState$getCrossReference = F2(
	function (label, latexState) {
		var _v0 = A2($elm$core$Dict$get, label, latexState.bw);
		if (!_v0.$) {
			var ref = _v0.a;
			return ref;
		} else {
			return '??';
		}
	});
var $author$project$Internal$Render$renderEqRef = F3(
	function (source, latexState, args) {
		var key = A3($author$project$Internal$RenderToString$renderArg, 0, $author$project$Internal$LatexState$emptyLatexState, args);
		var ref = A2($author$project$Internal$LatexState$getCrossReference, key, latexState);
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
var $author$project$Internal$Render$renderEqnArray = F3(
	function (source, latexState, body) {
		var body1 = A2($author$project$Internal$RenderToString$render, latexState, body);
		var body2 = '\\begin{aligned}' + (body1 + '\\end{aligned}');
		return A2($author$project$Internal$Render$displayMathText, latexState, body2);
	});
var $author$project$Internal$Render$displayMathTextWithLabel_ = F3(
	function (latexState, str, label) {
		return A2(
			$elm$html$Html$div,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							A2($elm$html$Html$Attributes$style, 'float', 'right'),
							A2($elm$html$Html$Attributes$style, 'margin-top', '3px')
						]),
					_List_fromArray(
						[
							$elm$html$Html$text(label)
						])),
					A2(
					$elm$html$Html$div,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							$author$project$Internal$Render$mathText,
							1,
							$elm$core$String$trim(str))
						]))
				]));
	});
var $author$project$Internal$ParserHelpers$ExpectingLabel = 7;
var $author$project$Internal$ParserHelpers$ExpectingRightBrace = 2;
var $author$project$Internal$ParserHelpers$parseArg = function (macroName) {
	return A2(
		$elm$parser$Parser$Advanced$keeper,
		A2(
			$elm$parser$Parser$Advanced$ignorer,
			$elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity),
			$elm$parser$Parser$Advanced$symbol(
				A2($elm$parser$Parser$Advanced$Token, '\\' + (macroName + '{'), 7))),
		A2(
			$elm$parser$Parser$Advanced$ignorer,
			$elm$parser$Parser$Advanced$getChompedString(
				$elm$parser$Parser$Advanced$chompWhile(
					function (c) {
						return c !== '}';
					})),
			$elm$parser$Parser$Advanced$symbol(
				A2($elm$parser$Parser$Advanced$Token, '}', 2))));
};
var $author$project$Internal$ParserHelpers$getArg = F2(
	function (macroName, str) {
		var _v0 = A2(
			$elm$parser$Parser$Advanced$run,
			$author$project$Internal$ParserHelpers$parseArg(macroName),
			str);
		if (!_v0.$) {
			var str_ = _v0.a;
			return $elm$core$Maybe$Just(str_);
		} else {
			return $elm$core$Maybe$Nothing;
		}
	});
var $author$project$Internal$ParserHelpers$getTag = function (str) {
	return A2($author$project$Internal$ParserHelpers$getArg, 'tag', str);
};
var $author$project$Internal$ParserHelpers$removeLabel = function (str) {
	var _v0 = A2($author$project$Internal$ParserHelpers$getArg, 'label', str);
	if (_v0.$ === 1) {
		return str;
	} else {
		var word = _v0.a;
		return A3($elm$core$String$replace, '\\label{' + (word + '}'), '', str);
	}
};
var $author$project$Internal$Render$renderEquationEnvironment = F3(
	function (source, latexState, body) {
		var s1 = A2($author$project$Internal$LatexState$getCounter, 's1', latexState);
		var eqno = A2($author$project$Internal$LatexState$getCounter, 'eqno', latexState);
		var contents = function () {
			if (!body.$) {
				var str = body.a;
				return $author$project$Internal$ParserHelpers$removeLabel(
					A2(
						$author$project$Internal$MathMacro$evalStr,
						latexState.dE,
						$elm$core$String$trim(str)));
			} else {
				return 'Parser error in render equation environment';
			}
		}();
		var addendum = (eqno > 0) ? ((s1 > 0) ? ('\\tag{' + ($elm$core$String$fromInt(s1) + ('.' + ($elm$core$String$fromInt(eqno) + '}')))) : ('\\tag{' + ($elm$core$String$fromInt(eqno) + '}'))) : '';
		var tag = function () {
			var _v0 = $author$project$Internal$ParserHelpers$getTag(addendum);
			if (_v0.$ === 1) {
				return '';
			} else {
				var tag_ = _v0.a;
				return '(' + (tag_ + ')');
			}
		}();
		return A3($author$project$Internal$Render$displayMathTextWithLabel_, latexState, contents, tag);
	});
var $author$project$Internal$ErrorMessages2$getLine = F2(
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
var $author$project$Internal$ErrorMessages2$getRows = F2(
	function (k, source) {
		return A2(
			$elm$core$List$map,
			$elm$core$String$left(40),
			A2(
				$elm$core$List$map,
				$elm$core$Tuple$second,
				A2(
					$elm$core$List$filter,
					function (_v0) {
						var i = _v0.a;
						var line = _v0.b;
						return _Utils_cmp(i, k) < 0;
					},
					A2(
						$elm$core$List$indexedMap,
						F2(
							function (i, line) {
								return _Utils_Tuple2(i, line);
							}),
						$elm$core$String$lines(source)))));
	});
var $author$project$Internal$ErrorMessages2$betterErrorText = F2(
	function (theError, source) {
		var firstLine = function (source_) {
			return _List_fromArray(
				[
					A2($author$project$Internal$ErrorMessages2$getLine, 1, source_)
				]);
		};
		var _v0 = theError.b7;
		switch (_v0.$) {
			case 9:
				return firstLine(source);
			case 1:
				return firstLine(source);
			case 35:
				var word = _v0.a;
				return firstLine(source);
			default:
				return A2($author$project$Internal$ErrorMessages2$getRows, theError.dV, source);
		}
	});
var $author$project$Internal$ErrorMessages2$displayExpected = function (problem) {
	switch (problem.$) {
		case 0:
			return 'Expecting \'$\' to end inline math';
		case 1:
			return 'Make complete environment \\begin{..} ... \\end{..}';
		case 2:
			return 'Expecting \'$$\' to begin displayed math';
		case 3:
			return 'Expecting \'$$\' to end displayed math';
		case 4:
			return 'Expecting \'\\[\' or \'\\]\' for displayed math';
		case 5:
			return 'Expecting \'\\[\' or \'\\]\' for displayed math';
		case 6:
			return 'Missing \\end{env}';
		case 7:
			return 'Something is to complete the table cell';
		case 8:
			return 'Something is missing to complete the optional argument';
		case 9:
			return 'Fill in the macro argument: {..}';
		case 10:
			return 'Something is missing in this sequence of words';
		case 11:
			return 'Expecting left brace';
		case 12:
			return 'Complete the argument with a right brace : {..}';
		case 13:
			return 'Expecting left bracket';
		case 14:
			return 'Expecting right bracket';
		case 15:
			return 'Expecting left paren';
		case 16:
			return 'Expecting right paren';
		case 17:
			return 'Expecting new line';
		case 18:
			return 'Expecting percent';
		case 19:
			return 'Expecting macro reserved word';
		case 20:
			return 'Expecting smacro reserved word';
		case 21:
			return 'Expecting int';
		case 22:
			return 'Invalid int';
		case 23:
			return 'Expecting $';
		case 24:
			return 'Close your environment \\begin{..} ... \\end{..}';
		case 25:
			return 'Expecting \\end{envName}';
		case 26:
			return 'Expecting begin{';
		case 27:
			return 'Expecting end}';
		case 28:
			return 'Expecting \\[';
		case 29:
			return 'Expecting \n\n';
		case 30:
			return 'Expecting \\item';
		case 31:
			return 'Complete your \\item ...';
		case 32:
			return 'Expecting &';
		case 33:
			return 'Expecting \\\\\n';
		case 34:
			return 'Expecting \\newcommand{';
		case 35:
			var envName = problem.a;
			return 'Close environment with ' + envName;
		default:
			var envName = problem.a;
			return 'Do you have an incomplete \\item ... ?';
	}
};
var $elm$core$Maybe$map = F2(
	function (f, maybe) {
		if (!maybe.$) {
			var value = maybe.a;
			return $elm$core$Maybe$Just(
				f(value));
		} else {
			return $elm$core$Maybe$Nothing;
		}
	});
var $author$project$Internal$ErrorMessages2$renderErrors = F2(
	function (source, errs) {
		var _v0 = $elm$core$List$head(
			$elm$core$List$reverse(errs));
		if (_v0.$ === 1) {
			return {a$: _List_Nil, a1: 'no explanation', a7: 0};
		} else {
			var theErr = _v0.a;
			var errColumn = A2(
				$elm$core$Maybe$withDefault,
				1,
				A2(
					$elm$core$Maybe$map,
					function ($) {
						return $.c6;
					},
					$elm$core$List$head(theErr.c8)));
			var markerOffset = errColumn;
			return {
				a$: A2($author$project$Internal$ErrorMessages2$betterErrorText, theErr, source),
				a1: $author$project$Internal$ErrorMessages2$displayExpected(theErr.b7),
				a7: markerOffset
			};
		}
	});
var $elm$html$Html$Attributes$target = $elm$html$Html$Attributes$stringProperty('target');
var $author$project$Internal$Render$renderHRef = F3(
	function (source, latexState, args) {
		var url = A3($author$project$Internal$RenderToString$renderArg, 0, $author$project$Internal$LatexState$emptyLatexState, args);
		var label = A3($author$project$Internal$RenderToString$renderArg, 1, $author$project$Internal$LatexState$emptyLatexState, args);
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
var $author$project$Internal$Render$renderHighlighted = F3(
	function (_v0, latexState, args) {
		var arg = A3($author$project$Internal$RenderToString$renderArg, 0, latexState, args);
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
var $author$project$Internal$Render$renderIFrame = F3(
	function (_v0, latexState, args) {
		var url = A3($author$project$Internal$RenderToString$renderArg, 0, latexState, args);
		var title = A3($author$project$Internal$RenderToString$renderArg, 1, latexState, args);
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
var $author$project$Internal$Render$renderILink = F3(
	function (_v0, latexState, args) {
		return A2($elm$html$Html$span, _List_Nil, _List_Nil);
	});
var $elm$html$Html$Attributes$alt = $elm$html$Html$Attributes$stringProperty('alt');
var $elm$html$Html$br = _VirtualDom_node('br');
var $elm$html$Html$img = _VirtualDom_node('img');
var $author$project$Internal$Image$ImageAttributes = F3(
	function (width, _float, align) {
		return {cE: align, dh: _float, eD: width};
	});
var $author$project$Internal$KeyValueUtilities$itemListHelper = F2(
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
					$elm$parser$Parser$Advanced$succeed(0))
				]));
	});
var $author$project$Internal$KeyValueUtilities$itemList_ = F2(
	function (initialList, itemParser) {
		return A2(
			$elm$parser$Parser$Advanced$loop,
			initialList,
			$author$project$Internal$KeyValueUtilities$itemListHelper(itemParser));
	});
var $author$project$Internal$KeyValueUtilities$itemList = function (itemParser) {
	return A2($author$project$Internal$KeyValueUtilities$itemList_, _List_Nil, itemParser);
};
var $author$project$Internal$KeyValueUtilities$ExpectingColon = 0;
var $author$project$Internal$KeyValueUtilities$ExpectingComma = 2;
var $elm$core$Tuple$pair = F2(
	function (a, b) {
		return _Utils_Tuple2(a, b);
	});
var $elm$parser$Parser$Advanced$spaces = $elm$parser$Parser$Advanced$chompWhile(
	function (c) {
		return (c === ' ') || ((c === '\n') || (c === '\r'));
	});
var $author$project$Internal$KeyValueUtilities$ws = $elm$parser$Parser$Advanced$chompWhile(
	function (c) {
		return (c === ' ') || (c === '\n');
	});
var $author$project$Internal$KeyValueUtilities$word = F2(
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
						$author$project$Internal$KeyValueUtilities$ws),
					A2(
						$elm$parser$Parser$Advanced$ignorer,
						A2(
							$elm$parser$Parser$Advanced$ignorer,
							A2(
								$elm$parser$Parser$Advanced$ignorer,
								$elm$parser$Parser$Advanced$getOffset,
								A2($elm$parser$Parser$Advanced$chompIf, inWord, problem)),
							$elm$parser$Parser$Advanced$chompWhile(inWord)),
						$author$project$Internal$KeyValueUtilities$ws)),
				$elm$parser$Parser$Advanced$getOffset),
			$elm$parser$Parser$Advanced$getSource);
	});
var $author$project$Internal$KeyValueUtilities$keyValuePair = A2(
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
							$author$project$Internal$KeyValueUtilities$word,
							0,
							function (c) {
								return c !== ':';
							}),
						$elm$parser$Parser$Advanced$spaces),
					$elm$parser$Parser$Advanced$symbol(
						A2($elm$parser$Parser$Advanced$Token, ':', 0))),
				$elm$parser$Parser$Advanced$spaces)),
		A2(
			$elm$parser$Parser$Advanced$ignorer,
			A2(
				$author$project$Internal$KeyValueUtilities$word,
				2,
				function (c) {
					return c !== ',';
				}),
			$elm$parser$Parser$Advanced$oneOf(
				_List_fromArray(
					[
						$elm$parser$Parser$Advanced$symbol(
						A2($elm$parser$Parser$Advanced$Token, ',', 2)),
						$elm$parser$Parser$Advanced$spaces
					])))));
var $author$project$Internal$KeyValueUtilities$keyValuePairs = A2(
	$elm$parser$Parser$Advanced$keeper,
	$elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity),
	$author$project$Internal$KeyValueUtilities$itemList($author$project$Internal$KeyValueUtilities$keyValuePair));
var $elm$core$Result$withDefault = F2(
	function (def, result) {
		if (!result.$) {
			var a = result.a;
			return a;
		} else {
			return def;
		}
	});
var $author$project$Internal$KeyValueUtilities$getKeyValueList = function (str) {
	return A2(
		$elm$core$Result$withDefault,
		_List_Nil,
		A2($elm$parser$Parser$Advanced$run, $author$project$Internal$KeyValueUtilities$keyValuePairs, str));
};
var $author$project$Internal$KeyValueUtilities$getValue = F2(
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
var $author$project$Internal$Image$parseImageAttributes = function (attributeString) {
	var kvList = $author$project$Internal$KeyValueUtilities$getKeyValueList(attributeString);
	var widthValue = A2(
		$elm$core$Maybe$withDefault,
		200,
		$elm$core$String$toInt(
			A2($author$project$Internal$KeyValueUtilities$getValue, 'width', kvList)));
	var floatValue = A2($author$project$Internal$KeyValueUtilities$getValue, 'float', kvList);
	var alignValue = A2($author$project$Internal$KeyValueUtilities$getValue, 'align', kvList);
	return A3($author$project$Internal$Image$ImageAttributes, widthValue, floatValue, alignValue);
};
var $author$project$Internal$Render$renderImage = F3(
	function (source, latexState, args) {
		var url = A3($author$project$Internal$RenderToString$renderArg, 0, latexState, args);
		var label = A3($author$project$Internal$RenderToString$renderArg, 1, latexState, args);
		var attributeString = A3($author$project$Internal$RenderToString$renderArg, 2, latexState, args);
		var imageAttrs = $author$project$Internal$Image$parseImageAttributes(attributeString);
		var width = $elm$core$String$fromInt(imageAttrs.eD) + 'px';
		return (imageAttrs.dh === 'left') ? A2(
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
				])) : ((imageAttrs.dh === 'right') ? A2(
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
				])) : ((imageAttrs.cE === 'center') ? A2(
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
var $author$project$Internal$Render$renderImageRef = F3(
	function (source, latexState, args) {
		var url = A3($author$project$Internal$RenderToString$renderArg, 0, latexState, args);
		var imageUrl = A3($author$project$Internal$RenderToString$renderArg, 1, latexState, args);
		var attributeString = A3($author$project$Internal$RenderToString$renderArg, 2, latexState, args);
		var imageAttrs = $author$project$Internal$Image$parseImageAttributes(attributeString);
		var width = $elm$core$String$fromInt(imageAttrs.eD) + 'px';
		var theImage = (imageAttrs.dh === 'left') ? A2(
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
				])) : ((imageAttrs.dh === 'right') ? A2(
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
				])) : ((imageAttrs.cE === 'center') ? A2(
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
var $author$project$Internal$Render$renderInclude = F3(
	function (_v0, latexState, args) {
		return A2($elm$html$Html$span, _List_Nil, _List_Nil);
	});
var $author$project$Internal$Render$renderIndex = F3(
	function (source, x, z) {
		return A2($elm$html$Html$span, _List_Nil, _List_Nil);
	});
var $author$project$Internal$Render$sectionPrefix = function (level) {
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
var $author$project$Internal$Render$makeTocItem = F2(
	function (prefix, tocItem) {
		var ti = tocItem.b;
		var id = A2(
			$author$project$Internal$Render$makeId,
			$author$project$Internal$Render$sectionPrefix(ti.dC),
			ti.dH);
		var i = tocItem.a;
		var number = prefix + ($elm$core$String$fromInt(i + 1) + '. ');
		var href = '#' + id;
		var classProperty = 'class=\"sectionLevel' + ($elm$core$String$fromInt(ti.dC) + '\"');
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
							$elm$html$Html$text(ti.dH)
						]))
				]));
	});
var $author$project$Internal$Render$makeInnerTableOfContents = F2(
	function (prefix, latexState) {
		var toc = A2(
			$elm$core$List$filter,
			function (item) {
				return item.dC === 2;
			},
			latexState.cp);
		return A3(
			$elm$core$List$foldl,
			F2(
				function (tocItem, acc) {
					return _Utils_ap(
						acc,
						_List_fromArray(
							[
								A2($author$project$Internal$Render$makeTocItem, prefix, tocItem)
							]));
				}),
			_List_Nil,
			A2($elm$core$List$indexedMap, $elm$core$Tuple$pair, toc));
	});
var $author$project$Internal$Render$renderInnerTableOfContents = F3(
	function (_v0, latexState, args) {
		var s1 = A2($author$project$Internal$LatexState$getCounter, 's1', latexState);
		var prefix = $elm$core$String$fromInt(s1) + '.';
		var innerPart = A2($author$project$Internal$Render$makeInnerTableOfContents, prefix, latexState);
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
var $author$project$Internal$Render$renderLabel = F3(
	function (source, x, z) {
		return A2($elm$html$Html$span, _List_Nil, _List_Nil);
	});
var $elm$html$Html$pre = _VirtualDom_node('pre');
var $author$project$Internal$Render$renderListing = F3(
	function (_v0, latexState, body) {
		var text = A2($author$project$Internal$RenderToString$render, latexState, body);
		var lines = $author$project$Internal$Utility$addLineNumbers(text);
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
var $author$project$Internal$Render$renderLocal = F3(
	function (_v0, latexState, args) {
		var arg = A3($author$project$Internal$RenderToString$renderArg, 0, latexState, args);
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					A2($elm$html$Html$Attributes$style, 'color', 'blue'),
					A2($elm$html$Html$Attributes$style, 'white-space', 'pre')
				]),
			_List_fromArray(
				[
					$elm$html$Html$text(arg)
				]));
	});
var $author$project$Internal$Render$renderMacros = F3(
	function (_v0, latexState, body) {
		return A2(
			$author$project$Internal$Render$displayMathText,
			latexState,
			A2($author$project$Internal$RenderToString$render, latexState, body));
	});
var $author$project$Internal$Render$renderMainTableOfContents = F3(
	function (source, latexState, args) {
		return A2($elm$html$Html$span, _List_Nil, _List_Nil);
	});
var $author$project$Internal$Render$renderMakeTitle = F3(
	function (source, latexState, list) {
		var title = A2($author$project$Internal$LatexState$getDictionaryItem, 'title', latexState);
		var titlePart = A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					A2($elm$html$Html$Attributes$style, 'font-size', '28px'),
					A2($elm$html$Html$Attributes$style, 'padding-bottom', '12px')
				]),
			_List_fromArray(
				[
					$elm$html$Html$text(title)
				]));
		var revision = A2($author$project$Internal$LatexState$getDictionaryItem, 'revision', latexState);
		var revisionText = (revision !== '') ? ('Last revised ' + revision) : '';
		var email = A2($author$project$Internal$LatexState$getDictionaryItem, 'email', latexState);
		var date = A2($author$project$Internal$LatexState$getDictionaryItem, 'date', latexState);
		var bodyParts = A2(
			$elm$core$List$map,
			function (x) {
				return A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							A2($elm$html$Html$Attributes$style, 'font-size', '14px')
						]),
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
					[date, revisionText, email])));
		var author = A2($author$project$Internal$LatexState$getDictionaryItem, 'author', latexState);
		var authorPart = A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					A2($elm$html$Html$Attributes$style, 'font-size', '18px'),
					A2($elm$html$Html$Attributes$style, 'padding-bottom', '4px')
				]),
			_List_fromArray(
				[
					$elm$html$Html$text(author)
				]));
		return A2(
			$elm$html$Html$div,
			_List_Nil,
			A2(
				$elm$core$List$cons,
				titlePart,
				A2($elm$core$List$cons, authorPart, bodyParts)));
	});
var $author$project$Internal$Render$renderMathEnvironment = F4(
	function (envName, _v0, latexState, body) {
		var s1 = A2($author$project$Internal$LatexState$getCounter, 's1', latexState);
		var r = A2($author$project$Internal$RenderToString$render, latexState, body);
		var innerContents = function () {
			if (!body.$) {
				var str = body.a;
				return $author$project$Internal$ParserHelpers$removeLabel(
					A3(
						$elm$core$String$replace,
						'\\ \\',
						'\\\\',
						A2(
							$author$project$Internal$MathMacro$evalStr,
							latexState.dE,
							$elm$core$String$trim(str))));
			} else {
				return '';
			}
		}();
		var eqno = A2($author$project$Internal$LatexState$getCounter, 'eqno', latexState);
		var content = '\n\\begin{' + (envName + ('}\n' + (innerContents + ('\n\\end{' + (envName + '}\n')))));
		var addendum = (eqno > 0) ? ((s1 > 0) ? ('\\tag{' + ($elm$core$String$fromInt(s1) + ('.' + ($elm$core$String$fromInt(eqno) + '}')))) : ('\\tag{' + ($elm$core$String$fromInt(eqno) + '}'))) : '';
		var tag = function () {
			var _v1 = $author$project$Internal$ParserHelpers$getTag(addendum);
			if (_v1.$ === 1) {
				return '';
			} else {
				var tag_ = _v1.a;
				return '(' + (tag_ + ')');
			}
		}();
		return A3($author$project$Internal$Render$displayMathTextWithLabel_, latexState, content, tag);
	});
var $author$project$Internal$Render$mathJaxText = F2(
	function (displayMode, content) {
		return A3(
			$elm$html$Html$node,
			'mathjax-text',
			_List_fromArray(
				[
					A2(
					$elm$html$Html$Attributes$property,
					'display',
					$elm$json$Json$Encode$bool(true)),
					A2(
					$elm$html$Html$Attributes$property,
					'content',
					$elm$json$Json$Encode$string(
						A3($elm$core$String$replace, '\\ \\', '\\\\', content)))
				]),
			_List_Nil);
	});
var $author$project$Internal$Render$displayMathJaxTextWithLabel_ = F3(
	function (latexState, str, label) {
		return A2(
			$elm$html$Html$div,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							A2($elm$html$Html$Attributes$style, 'float', 'right'),
							A2($elm$html$Html$Attributes$style, 'margin-top', '3px')
						]),
					_List_fromArray(
						[
							$elm$html$Html$text(label)
						])),
					A2(
					$elm$html$Html$div,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							$author$project$Internal$Render$mathJaxText,
							1,
							$elm$core$String$trim(str))
						]))
				]));
	});
var $author$project$Internal$Render$renderMathJaxEnvironment = F4(
	function (envName, source, latexState, body) {
		var s1 = A2($author$project$Internal$LatexState$getCounter, 's1', latexState);
		var r = A2($author$project$Internal$RenderToString$render, latexState, body);
		var innerContents = function () {
			if (!body.$) {
				var str = body.a;
				return function (x) {
					return '\\begin{' + (envName + ('}\n' + (x + ('\n\\end{' + (envName + '}')))));
				}(
					$author$project$Internal$ParserHelpers$removeLabel(
						A3(
							$elm$core$String$replace,
							'\\ \\',
							'\\\\',
							A2(
								$author$project$Internal$MathMacro$evalStr,
								latexState.dE,
								$elm$core$String$trim(str)))));
			} else {
				return '';
			}
		}();
		var eqno = A2($author$project$Internal$LatexState$getCounter, 'eqno', latexState);
		var content = '\n\\begin{' + (envName + ('}\n' + (innerContents + ('\n\\end{' + (envName + '}\n')))));
		var addendum = (eqno > 0) ? ((s1 > 0) ? ('\\tag{' + ($elm$core$String$fromInt(s1) + ('.' + ($elm$core$String$fromInt(eqno) + '}')))) : ('\\tag{' + ($elm$core$String$fromInt(eqno) + '}'))) : '';
		var tag = function () {
			var _v0 = $author$project$Internal$ParserHelpers$getTag(addendum);
			if (_v0.$ === 1) {
				return '';
			} else {
				var tag_ = _v0.a;
				return '(' + (tag_ + ')');
			}
		}();
		return A3($author$project$Internal$Render$displayMathJaxTextWithLabel_, latexState, innerContents, tag);
	});
var $author$project$Internal$Render$renderMathMacros = F3(
	function (_v0, _v1, _v2) {
		return A2($elm$html$Html$div, _List_Nil, _List_Nil);
	});
var $author$project$Internal$Render$renderMdash = F3(
	function (source, latexState, args) {
		return A2(
			$elm$html$Html$span,
			_List_Nil,
			_List_fromArray(
				[
					$elm$html$Html$text('— ')
				]));
	});
var $author$project$Internal$Render$renderMedSkip = F3(
	function (_v0, latexState, args) {
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					A2($elm$html$Html$Attributes$style, 'height', '10px')
				]),
			_List_Nil);
	});
var $author$project$Internal$Render$renderNdash = F3(
	function (source, latexState, args) {
		return A2(
			$elm$html$Html$span,
			_List_Nil,
			_List_fromArray(
				[
					$elm$html$Html$text('– ')
				]));
	});
var $author$project$Internal$Render$renderPercent = F3(
	function (_v0, latexState, args) {
		return A2(
			$elm$html$Html$span,
			_List_Nil,
			_List_fromArray(
				[
					$elm$html$Html$text('%')
				]));
	});
var $author$project$Internal$Render$renderRed = F3(
	function (_v0, latexState, args) {
		var arg = A3($author$project$Internal$RenderToString$renderArg, 0, latexState, args);
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
var $author$project$Internal$Render$renderRef = F3(
	function (source, latexState, args) {
		var key = A3($author$project$Internal$RenderToString$renderArg, 0, latexState, args);
		return A2(
			$elm$html$Html$span,
			_List_Nil,
			_List_fromArray(
				[
					$elm$html$Html$text(
					A2($author$project$Internal$LatexState$getCrossReference, key, latexState))
				]));
	});
var $author$project$Internal$Render$renderRemote = F3(
	function (_v0, latexState, args) {
		var arg = A3($author$project$Internal$RenderToString$renderArg, 0, latexState, args);
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					A2($elm$html$Html$Attributes$style, 'color', 'red'),
					A2($elm$html$Html$Attributes$style, 'white-space', 'pre')
				]),
			_List_fromArray(
				[
					$elm$html$Html$text(arg)
				]));
	});
var $author$project$Internal$Render$renderRevision = F3(
	function (_v0, latexState, args) {
		return A2($elm$html$Html$span, _List_Nil, _List_Nil);
	});
var $author$project$Internal$Render$renderSetClient = F3(
	function (_v0, latexState, args) {
		return A2($elm$html$Html$span, _List_Nil, _List_Nil);
	});
var $author$project$Internal$Render$renderSetCounter = F3(
	function (_v0, latexState, list) {
		return A2($elm$html$Html$span, _List_Nil, _List_Nil);
	});
var $author$project$Internal$Render$renderSetDocId = F3(
	function (_v0, latexState, args) {
		return A2($elm$html$Html$span, _List_Nil, _List_Nil);
	});
var $author$project$Internal$Render$renderSmallSkip = F3(
	function (_v0, latexState, args) {
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					A2($elm$html$Html$Attributes$style, 'height', '0px')
				]),
			_List_Nil);
	});
var $author$project$Internal$Render$renderStrikeThrough = F3(
	function (_v0, latexState, args) {
		var arg = A3($author$project$Internal$RenderToString$renderArg, 0, latexState, args);
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
var $elm$core$Result$andThen = F2(
	function (callback, result) {
		if (!result.$) {
			var value = result.a;
			return callback(value);
		} else {
			var msg = result.a;
			return $elm$core$Result$Err(msg);
		}
	});
var $elm$virtual_dom$VirtualDom$nodeNS = function (tag) {
	return _VirtualDom_nodeNS(
		_VirtualDom_noScript(tag));
};
var $elm$svg$Svg$node = $elm$virtual_dom$VirtualDom$nodeNS('http://www.w3.org/2000/svg');
var $elm$svg$Svg$text = $elm$virtual_dom$VirtualDom$text;
var $Garados007$elm_svg_parser$SvgParser$toAttribute = function (_v0) {
	var name = _v0.a;
	var value = _v0.b;
	return A2($elm$virtual_dom$VirtualDom$attribute, name, value);
};
var $Garados007$elm_svg_parser$SvgParser$elementToSvg = function (element) {
	return A3(
		$elm$svg$Svg$node,
		element.dH,
		A2($elm$core$List$map, $Garados007$elm_svg_parser$SvgParser$toAttribute, element.aY),
		A2($elm$core$List$map, $Garados007$elm_svg_parser$SvgParser$nodeToSvg, element.aG));
};
var $Garados007$elm_svg_parser$SvgParser$nodeToSvg = function (svgNode) {
	switch (svgNode.$) {
		case 0:
			var element = svgNode.a;
			return $Garados007$elm_svg_parser$SvgParser$elementToSvg(element);
		case 1:
			var content = svgNode.a;
			return $elm$svg$Svg$text(content);
		default:
			var content = svgNode.a;
			return $elm$svg$Svg$text('');
	}
};
var $andre_dietrich$parser_combinators$Combine$Parser = $elm$core$Basics$identity;
var $andre_dietrich$parser_combinators$Combine$app = function (_v0) {
	var inner = _v0;
	return inner;
};
var $andre_dietrich$parser_combinators$Combine$andThen = F2(
	function (f, p) {
		return F2(
			function (state, stream) {
				var _v0 = A3($andre_dietrich$parser_combinators$Combine$app, p, state, stream);
				if (!_v0.c.$) {
					var rstate = _v0.a;
					var rstream = _v0.b;
					var res = _v0.c.a;
					return A3(
						$andre_dietrich$parser_combinators$Combine$app,
						f(res),
						rstate,
						rstream);
				} else {
					var estate = _v0.a;
					var estream = _v0.b;
					var ms = _v0.c.a;
					return _Utils_Tuple3(
						estate,
						estream,
						$elm$core$Result$Err(ms));
				}
			});
	});
var $pilatch$flip$Flip$flip = F3(
	function (_function, argB, argA) {
		return A2(_function, argA, argB);
	});
var $andre_dietrich$parser_combinators$Combine$bimap = F3(
	function (fok, ferr, p) {
		return F2(
			function (state, stream) {
				var _v0 = A3($andre_dietrich$parser_combinators$Combine$app, p, state, stream);
				if (!_v0.c.$) {
					var rstate = _v0.a;
					var rstream = _v0.b;
					var res = _v0.c.a;
					return _Utils_Tuple3(
						rstate,
						rstream,
						$elm$core$Result$Ok(
							fok(res)));
				} else {
					var estate = _v0.a;
					var estream = _v0.b;
					var ms = _v0.c.a;
					return _Utils_Tuple3(
						estate,
						estream,
						$elm$core$Result$Err(
							ferr(ms)));
				}
			});
	});
var $andre_dietrich$parser_combinators$Combine$map = F2(
	function (f, p) {
		return A3($andre_dietrich$parser_combinators$Combine$bimap, f, $elm$core$Basics$identity, p);
	});
var $andre_dietrich$parser_combinators$Combine$andMap = F2(
	function (rp, lp) {
		return A2(
			$andre_dietrich$parser_combinators$Combine$andThen,
			A2($pilatch$flip$Flip$flip, $andre_dietrich$parser_combinators$Combine$map, rp),
			lp);
	});
var $Garados007$elm_svg_parser$SvgParser$flip = F3(
	function (func, b, a) {
		return A2(func, a, b);
	});
var $Garados007$elm_svg_parser$SvgParser$andMapRight = F2(
	function (lp, rp) {
		return A2(
			$andre_dietrich$parser_combinators$Combine$andMap,
			rp,
			A2(
				$andre_dietrich$parser_combinators$Combine$map,
				$Garados007$elm_svg_parser$SvgParser$flip($elm$core$Basics$always),
				lp));
	});
var $Garados007$elm_svg_parser$SvgParser$SvgElement = function (a) {
	return {$: 0, a: a};
};
var $Garados007$elm_svg_parser$SvgParser$andMapLeft = F2(
	function (lp, rp) {
		return A2(
			$andre_dietrich$parser_combinators$Combine$andMap,
			rp,
			A2($andre_dietrich$parser_combinators$Combine$map, $elm$core$Basics$always, lp));
	});
var $andre_dietrich$parser_combinators$Combine$emptyErr = F2(
	function (state, stream) {
		return _Utils_Tuple3(
			state,
			stream,
			$elm$core$Result$Err(_List_Nil));
	});
var $andre_dietrich$parser_combinators$Combine$or = F2(
	function (lp, rp) {
		return F2(
			function (state, stream) {
				var _v0 = A3($andre_dietrich$parser_combinators$Combine$app, lp, state, stream);
				if (!_v0.c.$) {
					var res = _v0;
					return res;
				} else {
					var lms = _v0.c.a;
					var _v1 = A3($andre_dietrich$parser_combinators$Combine$app, rp, state, stream);
					if (!_v1.c.$) {
						var res = _v1;
						return res;
					} else {
						var rms = _v1.c.a;
						return _Utils_Tuple3(
							state,
							stream,
							$elm$core$Result$Err(
								_Utils_ap(lms, rms)));
					}
				}
			});
	});
var $andre_dietrich$parser_combinators$Combine$choice = function (xs) {
	return A3($elm$core$List$foldr, $andre_dietrich$parser_combinators$Combine$or, $andre_dietrich$parser_combinators$Combine$emptyErr, xs);
};
var $Garados007$elm_svg_parser$SvgParser$SvgComment = function (a) {
	return {$: 2, a: a};
};
var $andre_dietrich$parser_combinators$Combine$mapError = $andre_dietrich$parser_combinators$Combine$bimap($elm$core$Basics$identity);
var $andre_dietrich$parser_combinators$Combine$onerror = F2(
	function (m, p) {
		return A2(
			$andre_dietrich$parser_combinators$Combine$mapError,
			$elm$core$Basics$always(
				_List_fromArray(
					[m])),
			p);
	});
var $andre_dietrich$parser_combinators$Combine$primitive = $elm$core$Basics$identity;
var $andre_dietrich$parser_combinators$Combine$Char$satisfy = function (pred) {
	return $andre_dietrich$parser_combinators$Combine$primitive(
		F2(
			function (state, stream) {
				var message = 'could not satisfy predicate';
				var _v0 = $elm$core$String$uncons(stream.t);
				if (!_v0.$) {
					var _v1 = _v0.a;
					var h = _v1.a;
					var rest = _v1.b;
					return pred(h) ? _Utils_Tuple3(
						state,
						_Utils_update(
							stream,
							{t: rest, R: stream.R + 1}),
						$elm$core$Result$Ok(h)) : _Utils_Tuple3(
						state,
						stream,
						$elm$core$Result$Err(
							_List_fromArray(
								[message])));
				} else {
					return _Utils_Tuple3(
						state,
						stream,
						$elm$core$Result$Err(
							_List_fromArray(
								[message])));
				}
			}));
};
var $andre_dietrich$parser_combinators$Combine$Char$anyChar = A2(
	$andre_dietrich$parser_combinators$Combine$onerror,
	'expected any character',
	$andre_dietrich$parser_combinators$Combine$Char$satisfy(
		$elm$core$Basics$always(true)));
var $elm$core$Basics$composeL = F3(
	function (g, f, x) {
		return g(
			f(x));
	});
var $elm$core$String$fromList = _String_fromList;
var $andre_dietrich$parser_combinators$Combine$succeed = function (res) {
	return F2(
		function (state, stream) {
			return _Utils_Tuple3(
				state,
				stream,
				$elm$core$Result$Ok(res));
		});
};
var $andre_dietrich$parser_combinators$Combine$lazy = function (t) {
	return A2(
		$andre_dietrich$parser_combinators$Combine$andThen,
		t,
		$andre_dietrich$parser_combinators$Combine$succeed(0));
};
var $andre_dietrich$parser_combinators$Combine$manyTill = F2(
	function (p, end_) {
		var accumulate = F3(
			function (acc, state, stream) {
				accumulate:
				while (true) {
					var _v0 = A3($andre_dietrich$parser_combinators$Combine$app, end_, state, stream);
					if (!_v0.c.$) {
						var rstate = _v0.a;
						var rstream = _v0.b;
						return _Utils_Tuple3(
							rstate,
							rstream,
							$elm$core$Result$Ok(
								$elm$core$List$reverse(acc)));
					} else {
						var estate = _v0.a;
						var estream = _v0.b;
						var ms = _v0.c.a;
						var _v1 = A3($andre_dietrich$parser_combinators$Combine$app, p, state, stream);
						if (!_v1.c.$) {
							var rstate = _v1.a;
							var rstream = _v1.b;
							var res = _v1.c.a;
							var $temp$acc = A2($elm$core$List$cons, res, acc),
								$temp$state = rstate,
								$temp$stream = rstream;
							acc = $temp$acc;
							state = $temp$state;
							stream = $temp$stream;
							continue accumulate;
						} else {
							return _Utils_Tuple3(
								estate,
								estream,
								$elm$core$Result$Err(ms));
						}
					}
				}
			});
		return accumulate(_List_Nil);
	});
var $andre_dietrich$parser_combinators$Combine$string = function (s) {
	return F2(
		function (state, stream) {
			if (A2($elm$core$String$startsWith, s, stream.t)) {
				var len = $elm$core$String$length(s);
				var pos = stream.R + len;
				var rem = A2($elm$core$String$dropLeft, len, stream.t);
				return _Utils_Tuple3(
					state,
					_Utils_update(
						stream,
						{t: rem, R: pos}),
					$elm$core$Result$Ok(s));
			} else {
				return _Utils_Tuple3(
					state,
					stream,
					$elm$core$Result$Err(
						_List_fromArray(
							['expected \"' + (s + '\"')])));
			}
		});
};
var $elm$regex$Regex$findAtMost = _Regex_findAtMost;
var $elm$regex$Regex$never = _Regex_never;
var $andre_dietrich$parser_combinators$Combine$regexer = F5(
	function (input, output, pat, state, stream) {
		var pattern = A2($elm$core$String$startsWith, '^', pat) ? pat : ('^' + pat);
		var _v0 = A3(
			$elm$regex$Regex$findAtMost,
			1,
			A2(
				$elm$core$Maybe$withDefault,
				$elm$regex$Regex$never,
				input(pattern)),
			stream.t);
		if (_v0.b && (!_v0.b.b)) {
			var match = _v0.a;
			var len = $elm$core$String$length(match.av);
			var pos = stream.R + len;
			var rem = A2($elm$core$String$dropLeft, len, stream.t);
			return _Utils_Tuple3(
				state,
				_Utils_update(
					stream,
					{t: rem, R: pos}),
				$elm$core$Result$Ok(
					output(match)));
		} else {
			return _Utils_Tuple3(
				state,
				stream,
				$elm$core$Result$Err(
					_List_fromArray(
						['expected input matching Regexp /' + (pattern + '/')])));
		}
	});
var $andre_dietrich$parser_combinators$Combine$regex = A2(
	$elm$core$Basics$composeR,
	A2(
		$andre_dietrich$parser_combinators$Combine$regexer,
		$elm$regex$Regex$fromString,
		function ($) {
			return $.av;
		}),
	$elm$core$Basics$identity);
var $andre_dietrich$parser_combinators$Combine$whitespace = A2(
	$andre_dietrich$parser_combinators$Combine$onerror,
	'optional whitespace',
	$andre_dietrich$parser_combinators$Combine$regex('\\s*'));
var $Garados007$elm_svg_parser$SvgParser$commentParser = $andre_dietrich$parser_combinators$Combine$lazy(
	function (_v0) {
		return A2(
			$andre_dietrich$parser_combinators$Combine$map,
			A2($elm$core$Basics$composeL, $Garados007$elm_svg_parser$SvgParser$SvgComment, $elm$core$String$fromList),
			A2(
				$Garados007$elm_svg_parser$SvgParser$andMapRight,
				A2(
					$Garados007$elm_svg_parser$SvgParser$andMapRight,
					$andre_dietrich$parser_combinators$Combine$whitespace,
					$andre_dietrich$parser_combinators$Combine$string('<!--')),
				A2(
					$andre_dietrich$parser_combinators$Combine$manyTill,
					$andre_dietrich$parser_combinators$Combine$Char$anyChar,
					$andre_dietrich$parser_combinators$Combine$string('-->'))));
	});
var $andre_dietrich$parser_combinators$Combine$many = function (p) {
	var accumulate = F3(
		function (acc, state, stream) {
			accumulate:
			while (true) {
				var _v0 = A3($andre_dietrich$parser_combinators$Combine$app, p, state, stream);
				if (!_v0.c.$) {
					var rstate = _v0.a;
					var rstream = _v0.b;
					var res = _v0.c.a;
					if (_Utils_eq(stream, rstream)) {
						return _Utils_Tuple3(
							rstate,
							rstream,
							$elm$core$List$reverse(acc));
					} else {
						var $temp$acc = A2($elm$core$List$cons, res, acc),
							$temp$state = rstate,
							$temp$stream = rstream;
						acc = $temp$acc;
						state = $temp$state;
						stream = $temp$stream;
						continue accumulate;
					}
				} else {
					return _Utils_Tuple3(
						state,
						stream,
						$elm$core$List$reverse(acc));
				}
			}
		});
	return F2(
		function (state, stream) {
			var _v1 = A3(accumulate, _List_Nil, state, stream);
			var rstate = _v1.a;
			var rstream = _v1.b;
			var res = _v1.c;
			return _Utils_Tuple3(
				rstate,
				rstream,
				$elm$core$Result$Ok(res));
		});
};
var $Garados007$elm_svg_parser$SvgParser$Element = F3(
	function (name, attributes, children) {
		return {aY: attributes, aG: children, dH: name};
	});
var $andre_dietrich$parser_combinators$Combine$optional = F2(
	function (res, p) {
		return A2(
			$andre_dietrich$parser_combinators$Combine$or,
			p,
			$andre_dietrich$parser_combinators$Combine$succeed(res));
	});
var $Garados007$elm_svg_parser$SvgParser$attributeParser = A2(
	$andre_dietrich$parser_combinators$Combine$andMap,
	A2(
		$andre_dietrich$parser_combinators$Combine$optional,
		'',
		A2(
			$Garados007$elm_svg_parser$SvgParser$andMapLeft,
			A2(
				$Garados007$elm_svg_parser$SvgParser$andMapRight,
				$andre_dietrich$parser_combinators$Combine$string('=\"'),
				$andre_dietrich$parser_combinators$Combine$regex('[^\"]*')),
			$andre_dietrich$parser_combinators$Combine$string('\"'))),
	A2(
		$andre_dietrich$parser_combinators$Combine$map,
		$elm$core$Tuple$pair,
		$andre_dietrich$parser_combinators$Combine$regex('[^=>/]+')));
var $andre_dietrich$parser_combinators$Combine$keep = F2(
	function (p1, p2) {
		return A2(
			$andre_dietrich$parser_combinators$Combine$andMap,
			p1,
			A2(
				$andre_dietrich$parser_combinators$Combine$map,
				$pilatch$flip$Flip$flip($elm$core$Basics$always),
				p2));
	});
var $andre_dietrich$parser_combinators$Combine$sepBy1 = F2(
	function (sep, p) {
		return A2(
			$andre_dietrich$parser_combinators$Combine$andMap,
			$andre_dietrich$parser_combinators$Combine$many(
				A2($andre_dietrich$parser_combinators$Combine$keep, p, sep)),
			A2($andre_dietrich$parser_combinators$Combine$map, $elm$core$List$cons, p));
	});
var $andre_dietrich$parser_combinators$Combine$sepBy = F2(
	function (sep, p) {
		return A2(
			$andre_dietrich$parser_combinators$Combine$or,
			A2($andre_dietrich$parser_combinators$Combine$sepBy1, sep, p),
			$andre_dietrich$parser_combinators$Combine$succeed(_List_Nil));
	});
var $Garados007$elm_svg_parser$SvgParser$openingParser = A3(
	$Garados007$elm_svg_parser$SvgParser$flip,
	$andre_dietrich$parser_combinators$Combine$andMap,
	A2(
		$andre_dietrich$parser_combinators$Combine$andMap,
		$andre_dietrich$parser_combinators$Combine$regex('[^/>\\s]+'),
		A2(
			$andre_dietrich$parser_combinators$Combine$map,
			F3(
				function (_v0, tagName, attributes) {
					return A3($Garados007$elm_svg_parser$SvgParser$Element, tagName, attributes, _List_Nil);
				}),
			$andre_dietrich$parser_combinators$Combine$string('<'))),
	A2(
		$Garados007$elm_svg_parser$SvgParser$andMapLeft,
		A2(
			$Garados007$elm_svg_parser$SvgParser$andMapRight,
			$andre_dietrich$parser_combinators$Combine$whitespace,
			A2($andre_dietrich$parser_combinators$Combine$sepBy, $andre_dietrich$parser_combinators$Combine$whitespace, $Garados007$elm_svg_parser$SvgParser$attributeParser)),
		$andre_dietrich$parser_combinators$Combine$whitespace));
var $Garados007$elm_svg_parser$SvgParser$SvgText = function (a) {
	return {$: 1, a: a};
};
var $Garados007$elm_svg_parser$SvgParser$textParser = $andre_dietrich$parser_combinators$Combine$lazy(
	function (_v0) {
		return A2(
			$andre_dietrich$parser_combinators$Combine$map,
			$Garados007$elm_svg_parser$SvgParser$SvgText,
			A2(
				$Garados007$elm_svg_parser$SvgParser$andMapRight,
				$andre_dietrich$parser_combinators$Combine$whitespace,
				$andre_dietrich$parser_combinators$Combine$regex('[^<]+')));
	});
var $Garados007$elm_svg_parser$SvgParser$closingOrChildrenParser = function (element) {
	var childrenParser = A2(
		$andre_dietrich$parser_combinators$Combine$map,
		function (children) {
			return _Utils_update(
				element,
				{aG: children});
		},
		A2(
			$Garados007$elm_svg_parser$SvgParser$andMapLeft,
			A2(
				$Garados007$elm_svg_parser$SvgParser$andMapLeft,
				A2(
					$Garados007$elm_svg_parser$SvgParser$andMapRight,
					A2(
						$Garados007$elm_svg_parser$SvgParser$andMapRight,
						$andre_dietrich$parser_combinators$Combine$whitespace,
						$andre_dietrich$parser_combinators$Combine$string('>')),
					$andre_dietrich$parser_combinators$Combine$many(
						$Garados007$elm_svg_parser$SvgParser$cyclic$nodeParser())),
				$andre_dietrich$parser_combinators$Combine$whitespace),
			$andre_dietrich$parser_combinators$Combine$string('</' + (element.dH + '>'))));
	return $andre_dietrich$parser_combinators$Combine$lazy(
		function (_v2) {
			return $andre_dietrich$parser_combinators$Combine$choice(
				_List_fromArray(
					[
						A2(
						$Garados007$elm_svg_parser$SvgParser$andMapRight,
						A2(
							$Garados007$elm_svg_parser$SvgParser$andMapRight,
							$andre_dietrich$parser_combinators$Combine$whitespace,
							$andre_dietrich$parser_combinators$Combine$string('/>')),
						$andre_dietrich$parser_combinators$Combine$succeed(element)),
						childrenParser
					]));
		});
};
function $Garados007$elm_svg_parser$SvgParser$cyclic$elementParser() {
	return $andre_dietrich$parser_combinators$Combine$lazy(
		function (_v1) {
			return A2(
				$andre_dietrich$parser_combinators$Combine$map,
				$Garados007$elm_svg_parser$SvgParser$SvgElement,
				A2(
					$andre_dietrich$parser_combinators$Combine$andThen,
					$Garados007$elm_svg_parser$SvgParser$closingOrChildrenParser,
					A2(
						$andre_dietrich$parser_combinators$Combine$andMap,
						$Garados007$elm_svg_parser$SvgParser$openingParser,
						A2(
							$andre_dietrich$parser_combinators$Combine$map,
							$Garados007$elm_svg_parser$SvgParser$flip($elm$core$Basics$always),
							$andre_dietrich$parser_combinators$Combine$whitespace))));
		});
}
function $Garados007$elm_svg_parser$SvgParser$cyclic$nodeParser() {
	return $andre_dietrich$parser_combinators$Combine$lazy(
		function (_v0) {
			return $andre_dietrich$parser_combinators$Combine$choice(
				_List_fromArray(
					[
						$Garados007$elm_svg_parser$SvgParser$textParser,
						$Garados007$elm_svg_parser$SvgParser$commentParser,
						$Garados007$elm_svg_parser$SvgParser$cyclic$elementParser()
					]));
		});
}
var $Garados007$elm_svg_parser$SvgParser$elementParser = $Garados007$elm_svg_parser$SvgParser$cyclic$elementParser();
$Garados007$elm_svg_parser$SvgParser$cyclic$elementParser = function () {
	return $Garados007$elm_svg_parser$SvgParser$elementParser;
};
var $Garados007$elm_svg_parser$SvgParser$nodeParser = $Garados007$elm_svg_parser$SvgParser$cyclic$nodeParser();
$Garados007$elm_svg_parser$SvgParser$cyclic$nodeParser = function () {
	return $Garados007$elm_svg_parser$SvgParser$nodeParser;
};
var $andre_dietrich$parser_combinators$Combine$InputStream = F3(
	function (data, input, position) {
		return {bx: data, t: input, R: position};
	});
var $andre_dietrich$parser_combinators$Combine$initStream = function (s) {
	return A3($andre_dietrich$parser_combinators$Combine$InputStream, s, s, 0);
};
var $andre_dietrich$parser_combinators$Combine$runParser = F3(
	function (p, st, s) {
		var _v0 = A3(
			$andre_dietrich$parser_combinators$Combine$app,
			p,
			st,
			$andre_dietrich$parser_combinators$Combine$initStream(s));
		if (!_v0.c.$) {
			var state = _v0.a;
			var stream = _v0.b;
			var res = _v0.c.a;
			return $elm$core$Result$Ok(
				_Utils_Tuple3(state, stream, res));
		} else {
			var state = _v0.a;
			var stream = _v0.b;
			var ms = _v0.c.a;
			return $elm$core$Result$Err(
				_Utils_Tuple3(state, stream, ms));
		}
	});
var $Garados007$elm_svg_parser$SvgParser$xmlDeclarationParser = A2(
	$andre_dietrich$parser_combinators$Combine$map,
	$elm$core$String$fromList,
	A2(
		$Garados007$elm_svg_parser$SvgParser$andMapRight,
		A2(
			$Garados007$elm_svg_parser$SvgParser$andMapRight,
			$andre_dietrich$parser_combinators$Combine$whitespace,
			$andre_dietrich$parser_combinators$Combine$string('<?xml')),
		A2(
			$andre_dietrich$parser_combinators$Combine$manyTill,
			$andre_dietrich$parser_combinators$Combine$Char$anyChar,
			$andre_dietrich$parser_combinators$Combine$string('?>'))));
var $Garados007$elm_svg_parser$SvgParser$parseToNode = function (input) {
	var _v0 = A3(
		$andre_dietrich$parser_combinators$Combine$runParser,
		A2(
			$Garados007$elm_svg_parser$SvgParser$andMapRight,
			A2($andre_dietrich$parser_combinators$Combine$optional, '', $Garados007$elm_svg_parser$SvgParser$xmlDeclarationParser),
			$Garados007$elm_svg_parser$SvgParser$nodeParser),
		_List_Nil,
		input);
	if (!_v0.$) {
		var _v1 = _v0.a;
		var svgNode = _v1.c;
		return $elm$core$Result$Ok(svgNode);
	} else {
		var _v2 = _v0.a;
		var stream = _v2.b;
		var errors = _v2.c;
		return $elm$core$Result$Err(
			A2($elm$core$String$join, ' or ', errors));
	}
};
var $elm$svg$Svg$trustedNode = _VirtualDom_nodeNS('http://www.w3.org/2000/svg');
var $elm$svg$Svg$svg = $elm$svg$Svg$trustedNode('svg');
var $Garados007$elm_svg_parser$SvgParser$parse = function (input) {
	var toHtml = function (svgNode) {
		if (!svgNode.$) {
			var element = svgNode.a;
			return (element.dH === 'svg') ? $elm$core$Result$Ok(
				A2(
					$elm$svg$Svg$svg,
					A2($elm$core$List$map, $Garados007$elm_svg_parser$SvgParser$toAttribute, element.aY),
					A2($elm$core$List$map, $Garados007$elm_svg_parser$SvgParser$nodeToSvg, element.aG))) : $elm$core$Result$Err('Top element is not svg');
		} else {
			return $elm$core$Result$Err('Top element is not svg');
		}
	};
	return A2(
		$elm$core$Result$andThen,
		toHtml,
		$Garados007$elm_svg_parser$SvgParser$parseToNode(input));
};
var $author$project$Internal$Render$renderSvg = F3(
	function (source, latexState, body) {
		var _v0 = $Garados007$elm_svg_parser$SvgParser$parse(
			A2($author$project$Internal$RenderToString$render, latexState, body));
		if (!_v0.$) {
			var html_ = _v0.a;
			return html_;
		} else {
			return A2(
				$elm$html$Html$span,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('X6')
					]),
				_List_fromArray(
					[
						$elm$html$Html$text('SVG parse error')
					]));
		}
	});
var $author$project$Internal$Render$makeTableOfContents = function (latexState) {
	var toc = A2(
		$elm$core$List$filter,
		function (item) {
			return item.dC === 1;
		},
		latexState.cp);
	return A3(
		$elm$core$List$foldl,
		F2(
			function (tocItem, acc) {
				return _Utils_ap(
					acc,
					_List_fromArray(
						[
							A2($author$project$Internal$Render$makeTocItem, '', tocItem)
						]));
			}),
		_List_Nil,
		A2($elm$core$List$indexedMap, $elm$core$Tuple$pair, toc));
};
var $author$project$Internal$Render$renderTableOfContents = F3(
	function (_v0, latexState, list) {
		var innerPart = $author$project$Internal$Render$makeTableOfContents(latexState);
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
var $author$project$Internal$Render$renderTerm = F3(
	function (_v0, latexState, args) {
		var arg = A3($author$project$Internal$RenderToString$renderArg, 0, latexState, args);
		return A2(
			$elm$html$Html$i,
			_List_Nil,
			_List_fromArray(
				[
					$elm$html$Html$text(arg)
				]));
	});
var $author$project$Internal$Render$renderTextMacros = F3(
	function (_v0, _v1, _v2) {
		return A2($elm$html$Html$div, _List_Nil, _List_Nil);
	});
var $author$project$Internal$Render$renderTitle = F2(
	function (latexState, args) {
		return A2($elm$html$Html$span, _List_Nil, _List_Nil);
	});
var $author$project$Internal$Render$renderUnderscore = F3(
	function (source, latexState, args) {
		return A2(
			$elm$html$Html$span,
			_List_Nil,
			_List_fromArray(
				[
					$elm$html$Html$text('_')
				]));
	});
var $author$project$Internal$Render$renderUseForWeb = F3(
	function (source, latexState, body) {
		return A2(
			$author$project$Internal$Render$displayMathText,
			latexState,
			A2($author$project$Internal$RenderToString$render, latexState, body));
	});
var $author$project$Internal$Render$renderUuid = F3(
	function (_v0, _v1, _v2) {
		return A2($elm$html$Html$span, _List_Nil, _List_Nil);
	});
var $author$project$Internal$Render$renderVerbatim = F3(
	function (source, latexState, body) {
		var body2 = A2($author$project$Internal$RenderToString$render, latexState, body);
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
var $author$project$Internal$Render$renderVerse = F3(
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
						A2($author$project$Internal$RenderToString$render, latexState, body)))
				]));
	});
var $author$project$Internal$Render$renderXLink = F3(
	function (_v0, latexState, args) {
		var label = A3($author$project$Internal$RenderToString$renderArg, 1, latexState, args);
		var id = A3($author$project$Internal$RenderToString$renderArg, 0, latexState, args);
		var ref = A2($author$project$Internal$LatexState$getDictionaryItem, 'setclient', latexState) + ('/' + id);
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
var $author$project$Internal$Render$renderXLinkPublic = F3(
	function (_v0, latexState, args) {
		var label = A3($author$project$Internal$RenderToString$renderArg, 1, latexState, args);
		var id = A3($author$project$Internal$RenderToString$renderArg, 0, latexState, args);
		var ref = A2($author$project$Internal$LatexState$getDictionaryItem, 'setclient', latexState) + ('/' + id);
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
var $author$project$Internal$Render$firstChar = $elm$core$String$left(1);
var $author$project$Internal$Render$lastChar = $elm$core$String$right(1);
var $author$project$Internal$Render$addSpace = function (internalState) {
	var c = A2(
		$elm$core$Maybe$withDefault,
		$author$project$Internal$Parser$LXString(''),
		internalState.aD);
	var b = A2(
		$elm$core$Maybe$withDefault,
		$author$project$Internal$Parser$LXString(''),
		internalState.aM);
	var a = A2(
		$elm$core$Maybe$withDefault,
		$author$project$Internal$Parser$LXString(''),
		internalState.aZ);
	var _v0 = _Utils_Tuple3(a, b, c);
	if (!_v0.b.$) {
		switch (_v0.a.$) {
			case 6:
				var _v1 = _v0.a;
				var str = _v0.b.a;
				return A2(
					$elm$core$List$member,
					$author$project$Internal$Render$firstChar(str),
					_List_fromArray(
						['.', ',', '?', '!', ';', ':'])) ? $author$project$Internal$Parser$LXString(str) : $author$project$Internal$Parser$LXString(' ' + str);
			case 3:
				var str = _v0.b.a;
				return A2(
					$elm$core$List$member,
					$author$project$Internal$Render$firstChar(str),
					_List_fromArray(
						['-', '.', ',', '?', '!', ';', ':'])) ? $author$project$Internal$Parser$LXString(str) : $author$project$Internal$Parser$LXString(' ' + str);
			default:
				var str = _v0.b.a;
				return A2(
					$elm$core$List$member,
					$author$project$Internal$Render$lastChar(str),
					_List_fromArray(
						[')', '.', ',', '?', '!', ';', ':'])) ? $author$project$Internal$Parser$LXString(str + ' ') : $author$project$Internal$Parser$LXString(str);
		}
	} else {
		return b;
	}
};
var $author$project$Internal$ListMachine$nextState = function (internalState_) {
	var nextInputList_ = A2($elm$core$List$drop, 1, internalState_.at);
	return {
		aD: $elm$core$List$head(
			A2($elm$core$List$drop, 1, nextInputList_)),
		aZ: internalState_.aM,
		aM: internalState_.aD,
		at: nextInputList_
	};
};
var $author$project$Internal$ListMachine$makeReducer = F3(
	function (computeOutput, input, machineState) {
		var nextInternalState_ = $author$project$Internal$ListMachine$nextState(machineState.an);
		var nextInputList = A2($elm$core$List$drop, 1, machineState.an.at);
		var newOutput = computeOutput(machineState.an);
		var outputList = A2($elm$core$List$cons, newOutput, machineState.aw);
		return {aw: outputList, an: nextInternalState_};
	});
var $author$project$Internal$ListMachine$initialState = function (inputList) {
	return {
		aD: $elm$core$List$head(
			A2($elm$core$List$drop, 1, inputList)),
		aZ: $elm$core$Maybe$Nothing,
		aM: $elm$core$List$head(inputList),
		at: inputList
	};
};
var $author$project$Internal$ListMachine$initialTotalState = function (inputList) {
	return {
		aw: _List_Nil,
		an: $author$project$Internal$ListMachine$initialState(inputList)
	};
};
var $author$project$Internal$ListMachine$makeMachine = F3(
	function (reducer, initialMachineState_, inputList) {
		return A3($elm$core$List$foldl, reducer, initialMachineState_, inputList);
	});
var $author$project$Internal$ListMachine$run_ = F2(
	function (reducer, inputList) {
		var initialTotalState_ = $author$project$Internal$ListMachine$initialTotalState(inputList);
		var finalTotalState = A3($author$project$Internal$ListMachine$makeMachine, reducer, initialTotalState_, inputList);
		return $elm$core$List$reverse(finalTotalState.aw);
	});
var $author$project$Internal$ListMachine$run = F2(
	function (outputFunction, inputList) {
		return A2(
			$author$project$Internal$ListMachine$run_,
			$author$project$Internal$ListMachine$makeReducer(outputFunction),
			inputList);
	});
var $author$project$Internal$Render$spacify = function (latexList) {
	return A2($author$project$Internal$ListMachine$run, $author$project$Internal$Render$addSpace, latexList);
};
var $elm$html$Html$table = _VirtualDom_node('table');
var $elm$html$Html$tbody = _VirtualDom_node('tbody');
var $elm$html$Html$td = _VirtualDom_node('td');
var $author$project$Internal$Render$theoremLikeEnvironments = _List_fromArray(
	['theorem', 'proposition', 'corollary', 'lemma', 'definition', 'problem']);
var $elm$html$Html$tr = _VirtualDom_node('tr');
var $author$project$Internal$Render$environmentRenderer = F2(
	function (source, name) {
		var _v8 = A2(
			$elm$core$Dict$get,
			name,
			$author$project$Internal$Render$cyclic$renderEnvironmentDict());
		if (!_v8.$) {
			var f = _v8.a;
			return f(source);
		} else {
			return A2($author$project$Internal$Render$renderDefaultEnvironment, source, name);
		}
	});
var $author$project$Internal$Render$render = F3(
	function (source, latexState, latexExpression) {
		switch (latexExpression.$) {
			case 1:
				var str = latexExpression.a;
				return A2(
					$elm$html$Html$p,
					_List_Nil,
					_List_fromArray(
						[
							$elm$html$Html$text('')
						]));
			case 6:
				var name = latexExpression.a;
				var optArgs = latexExpression.b;
				var args = latexExpression.c;
				return A5($author$project$Internal$Render$renderMacro, source, latexState, name, optArgs, args);
			case 5:
				var name = latexExpression.a;
				var optArgs = latexExpression.b;
				var args = latexExpression.c;
				var le = latexExpression.d;
				return A6($author$project$Internal$Render$renderSMacro, source, latexState, name, optArgs, args, le);
			case 2:
				var level = latexExpression.a;
				var latexExpr = latexExpression.b;
				return A4($author$project$Internal$Render$renderItem, source, latexState, level, latexExpr);
			case 3:
				var str = latexExpression.a;
				return A2(
					$elm$html$Html$span,
					_List_Nil,
					_List_fromArray(
						[
							$author$project$Internal$Render$oneSpace,
							A2(
							$author$project$Internal$Render$inlineMathText,
							latexState,
							A2($author$project$Internal$MathMacro$evalStr, latexState.dE, str))
						]));
			case 4:
				var str = latexExpression.a;
				return A2(
					$author$project$Internal$Render$displayMathText,
					latexState,
					A2($author$project$Internal$MathMacro$evalStr, latexState.dE, str));
			case 7:
				var name = latexExpression.a;
				var args = latexExpression.b;
				var body = latexExpression.c;
				return A5($author$project$Internal$Render$renderEnvironment, source, latexState, name, args, body);
			case 8:
				var latexList = latexExpression.a;
				return A3(
					$author$project$Internal$Render$renderLatexList,
					source,
					latexState,
					$author$project$Internal$Render$spacify(latexList));
			case 0:
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
			case 9:
				var commandName = latexExpression.a;
				var numberOfArgs = latexExpression.b;
				var commandBody = latexExpression.c;
				return A2($elm$html$Html$span, _List_Nil, _List_Nil);
			default:
				var error = latexExpression.a;
				var err = A2($author$project$Internal$ErrorMessages2$renderErrors, source, error);
				var errorText = A2(
					$elm$html$Html$p,
					_List_fromArray(
						[
							A2($elm$html$Html$Attributes$style, 'margin', '0')
						]),
					_List_fromArray(
						[
							$elm$html$Html$text(
							A2($elm$core$String$join, '\n', err.a$) + ' ...')
						]));
				var offset = $elm$core$String$fromInt(5 * err.a7) + 'px';
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
									$elm$html$Html$text(err.a1)
								]))
						]));
		}
	});
var $author$project$Internal$Render$renderArg = F4(
	function (source, k, latexState, args) {
		return A3(
			$author$project$Internal$Render$render,
			source,
			latexState,
			A2($author$project$Internal$Render$getElement, k, args));
	});
var $author$project$Internal$Render$renderArgList = F3(
	function (source, latexState, args) {
		return A2(
			$elm$core$List$map,
			A2($author$project$Internal$Render$render, source, latexState),
			args);
	});
var $author$project$Internal$Render$renderBackslash = F3(
	function (source, latexState, args) {
		return A2(
			$elm$html$Html$span,
			_List_Nil,
			_List_fromArray(
				[
					$elm$html$Html$text('\\'),
					A4($author$project$Internal$Render$renderArg, source, 0, latexState, args)
				]));
	});
var $author$project$Internal$Render$renderBibItem = F5(
	function (source, latexState, optArgs, args, body) {
		var label = ($elm$core$List$length(optArgs) === 1) ? A3($author$project$Internal$RenderToString$renderArg, 0, latexState, optArgs) : A3($author$project$Internal$RenderToString$renderArg, 0, latexState, args);
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
							A3($author$project$Internal$Render$render, source, latexState, body)
						]))
				]));
	});
var $author$project$Internal$Render$renderCell = F3(
	function (source, latexState, cell) {
		switch (cell.$) {
			case 0:
				var s = cell.a;
				return A2(
					$elm$html$Html$td,
					_List_Nil,
					_List_fromArray(
						[
							$elm$html$Html$text(s)
						]));
			case 3:
				var s = cell.a;
				return A2(
					$elm$html$Html$td,
					_List_Nil,
					_List_fromArray(
						[
							A2($author$project$Internal$Render$inlineMathText, latexState, s)
						]));
			case 6:
				var s = cell.a;
				var x = cell.b;
				var y = cell.c;
				return A2(
					$elm$html$Html$td,
					_List_Nil,
					_List_fromArray(
						[
							A5($author$project$Internal$Render$renderMacro, source, $author$project$Internal$LatexState$emptyLatexState, s, x, y)
						]));
			default:
				return A2($elm$html$Html$td, _List_Nil, _List_Nil);
		}
	});
var $author$project$Internal$Render$renderCenterEnvironment = F3(
	function (source, latexState, body) {
		var r = A3($author$project$Internal$Render$render, source, latexState, body);
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					A2($elm$html$Html$Attributes$style, 'display', 'flex'),
					A2($elm$html$Html$Attributes$style, 'flex-direction', 'row'),
					A2($elm$html$Html$Attributes$style, 'justify-content', 'center')
				]),
			_List_fromArray(
				[r]));
	});
var $author$project$Internal$Render$renderCode = F3(
	function (source, latexState, args) {
		var arg = A4($author$project$Internal$Render$renderArg, source, 0, latexState, args);
		return A2(
			$elm$html$Html$code,
			_List_Nil,
			_List_fromArray(
				[$author$project$Internal$Render$oneSpace, arg]));
	});
var $author$project$Internal$Render$renderDefItemEnvironment = F4(
	function (source, latexState, optArgs, body) {
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
							A3($author$project$Internal$RenderToString$renderArg, 0, latexState, optArgs))
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
							A3($author$project$Internal$Render$render, source, latexState, body)
						]))
				]));
	});
var $author$project$Internal$Render$renderDefaultEnvironment = F5(
	function (source, name, latexState, args, body) {
		return A2($elm$core$List$member, name, $author$project$Internal$Render$theoremLikeEnvironments) ? A5($author$project$Internal$Render$renderTheoremLikeEnvironment, source, latexState, name, args, body) : A5(
			$author$project$Internal$Render$renderDefaultEnvironment2,
			source,
			latexState,
			$author$project$Internal$Utility$capitalize(name),
			args,
			body);
	});
var $author$project$Internal$Render$renderDefaultEnvironment2 = F5(
	function (source, latexState, name, args, body) {
		var r = A3($author$project$Internal$Render$render, source, latexState, body);
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
var $author$project$Internal$Render$renderEnumerate = F3(
	function (source, latexState, body) {
		return A2(
			$elm$html$Html$ol,
			_List_fromArray(
				[
					A2($elm$html$Html$Attributes$style, 'margin-top', '0px')
				]),
			_List_fromArray(
				[
					A3($author$project$Internal$Render$render, source, latexState, body)
				]));
	});
var $author$project$Internal$Render$renderEnvironment = F5(
	function (source, latexState, name, args, body) {
		return A5($author$project$Internal$Render$environmentRenderer, source, name, latexState, args, body);
	});
var $author$project$Internal$Render$renderIndentEnvironment = F3(
	function (source, latexState, body) {
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					A2($elm$html$Html$Attributes$style, 'margin-left', '2em')
				]),
			_List_fromArray(
				[
					A3($author$project$Internal$Render$render, source, latexState, body)
				]));
	});
var $author$project$Internal$Render$renderItalic = F3(
	function (source, latexState, args) {
		return A2(
			$elm$html$Html$i,
			_List_Nil,
			_List_fromArray(
				[
					$elm$html$Html$text(' '),
					A4($author$project$Internal$Render$renderArg, source, 0, latexState, args)
				]));
	});
var $author$project$Internal$Render$renderItem = F4(
	function (source, latexState, level, latexExpression) {
		return A2(
			$elm$html$Html$li,
			_List_fromArray(
				[
					A2($elm$html$Html$Attributes$style, 'margin-bottom', '8px')
				]),
			_List_fromArray(
				[
					A3($author$project$Internal$Render$render, source, latexState, latexExpression)
				]));
	});
var $author$project$Internal$Render$renderItemize = F3(
	function (source, latexState, body) {
		return A2(
			$elm$html$Html$ul,
			_List_fromArray(
				[
					A2($elm$html$Html$Attributes$style, 'margin-top', '0px')
				]),
			_List_fromArray(
				[
					A3($author$project$Internal$Render$render, source, latexState, body)
				]));
	});
var $author$project$Internal$Render$renderLatexList = F3(
	function (source, latexState, latexList) {
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
				A2($author$project$Internal$Render$render, source, latexState),
				latexList));
	});
var $author$project$Internal$Render$renderMacro = F5(
	function (source, latexState, name, optArgs, args) {
		var _v3 = A2(
			$elm$core$Dict$get,
			name,
			$author$project$Internal$Render$cyclic$renderMacroDict());
		if (!_v3.$) {
			var f = _v3.a;
			return A4(f, source, latexState, optArgs, args);
		} else {
			var _v4 = A2($elm$core$Dict$get, name, latexState.bV);
			if (_v4.$ === 1) {
				return A5($author$project$Internal$Render$reproduceMacro, source, name, latexState, optArgs, args);
			} else {
				var macroDefinition = _v4.a;
				var macro = A3($author$project$Internal$Parser$Macro, name, optArgs, args);
				var expr = A2($author$project$Internal$Macro$expandMacro, macro, macroDefinition);
				return A3($author$project$Internal$Render$render, source, latexState, expr);
			}
		}
	});
var $author$project$Internal$Render$renderQuotation = F3(
	function (source, latexState, body) {
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					A2($elm$html$Html$Attributes$style, 'margin-left', '2em'),
					A2($elm$html$Html$Attributes$style, 'font-style', 'italic')
				]),
			_List_fromArray(
				[
					A3($author$project$Internal$Render$render, source, latexState, body)
				]));
	});
var $author$project$Internal$Render$renderRow = F3(
	function (source, latexState, row) {
		if (row.$ === 8) {
			var row_ = row.a;
			return A2(
				$elm$html$Html$tr,
				_List_Nil,
				A2(
					$elm$core$List$map,
					A2($author$project$Internal$Render$renderCell, source, latexState),
					row_));
		} else {
			return A2($elm$html$Html$tr, _List_Nil, _List_Nil);
		}
	});
var $author$project$Internal$Render$renderSMacro = F6(
	function (source, latexState, name, optArgs, args, le) {
		var _v1 = A2(
			$elm$core$Dict$get,
			name,
			$author$project$Internal$Render$cyclic$renderSMacroDict());
		if (!_v1.$) {
			var f = _v1.a;
			return A5(f, source, latexState, optArgs, args, le);
		} else {
			return A6($author$project$Internal$Render$reproduceSMacro, source, name, latexState, optArgs, args, le);
		}
	});
var $author$project$Internal$Render$renderSection = F3(
	function (source, latexState, args) {
		var s1 = A2($author$project$Internal$LatexState$getCounter, 's1', latexState);
		var renderedArgs = A3($author$project$Internal$Render$renderArgList, source, latexState, args);
		var ref = A2(
			$author$project$Internal$Render$idPhrase,
			'section',
			A3($author$project$Internal$RenderToString$renderArg, 0, latexState, args));
		var label = (s1 > 0) ? ($elm$core$String$fromInt(s1) + ' ') : '';
		return A2(
			$elm$html$Html$h2,
			A2($author$project$Internal$Render$headingStyle, ref, 24),
			A2(
				$elm$core$List$cons,
				$elm$html$Html$text(label),
				renderedArgs));
	});
var $author$project$Internal$Render$renderSectionStar = F3(
	function (source, latexState, args) {
		var renderedArgs = A3($author$project$Internal$Render$renderArgList, source, latexState, args);
		var ref = A2(
			$author$project$Internal$Render$idPhrase,
			'section',
			A3($author$project$Internal$RenderToString$renderArg, 0, latexState, args));
		return A2(
			$elm$html$Html$h2,
			A2($author$project$Internal$Render$headingStyle, ref, 24),
			renderedArgs);
	});
var $author$project$Internal$Render$renderStrong = F3(
	function (source, latexState, args) {
		return A2(
			$elm$html$Html$strong,
			_List_Nil,
			_List_fromArray(
				[
					$author$project$Internal$Render$oneSpace,
					A4($author$project$Internal$Render$renderArg, source, 0, latexState, args)
				]));
	});
var $author$project$Internal$Render$renderSubSubsection = F3(
	function (source, latexState, args) {
		var s3 = A2($author$project$Internal$LatexState$getCounter, 's3', latexState);
		var s2 = A2($author$project$Internal$LatexState$getCounter, 's2', latexState);
		var s1 = A2($author$project$Internal$LatexState$getCounter, 's1', latexState);
		var renderedArgs = A3($author$project$Internal$Render$renderArgList, source, latexState, args);
		var ref = A2(
			$author$project$Internal$Render$idPhrase,
			'subsubsection',
			A3($author$project$Internal$RenderToString$renderArg, 0, latexState, args));
		var label = (s1 > 0) ? ($elm$core$String$fromInt(s1) + ('.' + ($elm$core$String$fromInt(s2) + ('.' + ($elm$core$String$fromInt(s3) + ' '))))) : '';
		return A2(
			$elm$html$Html$h4,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$id(ref)
				]),
			A2(
				$elm$core$List$cons,
				$elm$html$Html$text(label),
				renderedArgs));
	});
var $author$project$Internal$Render$renderSubSubsectionStar = F3(
	function (source, latexState, args) {
		var renderedArgs = A3($author$project$Internal$Render$renderArgList, source, latexState, args);
		var ref = A2(
			$author$project$Internal$Render$idPhrase,
			'subsubsection',
			A3($author$project$Internal$RenderToString$renderArg, 0, latexState, args));
		return A2(
			$elm$html$Html$h4,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$id(ref)
				]),
			renderedArgs);
	});
var $author$project$Internal$Render$renderSubheading = F3(
	function (source, latexState, args) {
		var renderedArgs = A3($author$project$Internal$Render$renderArgList, source, latexState, args);
		var ref = A2(
			$author$project$Internal$Render$idPhrase,
			'subsubsection',
			A3($author$project$Internal$RenderToString$renderArg, 0, latexState, args));
		return A2(
			$elm$html$Html$p,
			_List_fromArray(
				[
					A2($elm$html$Html$Attributes$style, 'font-weight', 'bold'),
					A2($elm$html$Html$Attributes$style, 'margin-bottom', '0'),
					A2($elm$html$Html$Attributes$style, 'margin-left', '-2px'),
					$elm$html$Html$Attributes$id(ref)
				]),
			renderedArgs);
	});
var $author$project$Internal$Render$renderSubsection = F3(
	function (source, latexState, args) {
		var s2 = A2($author$project$Internal$LatexState$getCounter, 's2', latexState);
		var s1 = A2($author$project$Internal$LatexState$getCounter, 's1', latexState);
		var renderedArgs = A3($author$project$Internal$Render$renderArgList, source, latexState, args);
		var ref = A2(
			$author$project$Internal$Render$idPhrase,
			'subsection',
			A3($author$project$Internal$RenderToString$renderArg, 0, latexState, args));
		var label = (s1 > 0) ? ($elm$core$String$fromInt(s1) + ('.' + ($elm$core$String$fromInt(s2) + ' '))) : '';
		return A2(
			$elm$html$Html$h3,
			A2($author$project$Internal$Render$headingStyle, ref, 12),
			A2(
				$elm$core$List$cons,
				$elm$html$Html$text(label),
				renderedArgs));
	});
var $author$project$Internal$Render$renderSubsectionStar = F3(
	function (source, latexState, args) {
		var renderedArgs = A3($author$project$Internal$Render$renderArgList, source, latexState, args);
		var ref = A2(
			$author$project$Internal$Render$idPhrase,
			'subsection',
			A3($author$project$Internal$RenderToString$renderArg, 0, latexState, args));
		return A2(
			$elm$html$Html$h3,
			A2($author$project$Internal$Render$headingStyle, ref, 12),
			renderedArgs);
	});
var $author$project$Internal$Render$renderTableBody = F3(
	function (source, latexState, body) {
		if (body.$ === 8) {
			var body_ = body.a;
			return A2(
				$elm$html$Html$tbody,
				_List_Nil,
				A2(
					$elm$core$List$map,
					A2($author$project$Internal$Render$renderRow, source, latexState),
					body_));
		} else {
			return A2($elm$html$Html$tbody, _List_Nil, _List_Nil);
		}
	});
var $author$project$Internal$Render$renderTabular = F3(
	function (source, latexState, body) {
		return A2(
			$elm$html$Html$table,
			_List_fromArray(
				[
					A2($elm$html$Html$Attributes$style, 'border-spacing', '20px 10px'),
					A2($elm$html$Html$Attributes$style, 'margin-left', '-20px')
				]),
			_List_fromArray(
				[
					A3($author$project$Internal$Render$renderTableBody, source, latexState, body)
				]));
	});
var $author$project$Internal$Render$renderTexArg = F3(
	function (source, latexState, args) {
		return A2(
			$elm$html$Html$span,
			_List_Nil,
			_List_fromArray(
				[
					$elm$html$Html$text('{'),
					A4($author$project$Internal$Render$renderArg, source, 0, latexState, args),
					$elm$html$Html$text('}')
				]));
	});
var $author$project$Internal$Render$renderTheBibliography = F3(
	function (source, latexState, body) {
		return A2(
			$elm$html$Html$div,
			_List_Nil,
			_List_fromArray(
				[
					A3($author$project$Internal$Render$render, source, latexState, body)
				]));
	});
var $author$project$Internal$Render$renderTheoremLikeEnvironment = F5(
	function (source, latexState, name, args, body) {
		var tno = A2($author$project$Internal$LatexState$getCounter, 'tno', latexState);
		var s1 = A2($author$project$Internal$LatexState$getCounter, 's1', latexState);
		var tnoString = (s1 > 0) ? (' ' + ($elm$core$String$fromInt(s1) + ('.' + $elm$core$String$fromInt(tno)))) : (' ' + $elm$core$String$fromInt(tno));
		var r = A3($author$project$Internal$Render$render, source, latexState, body);
		var eqno = A2($author$project$Internal$LatexState$getCounter, 'eqno', latexState);
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
								$author$project$Internal$Utility$capitalize(name),
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
var $author$project$Internal$Render$reproduceMacro = F5(
	function (source, name, latexState, optArgs, args) {
		var renderedArgs = A2(
			$elm$core$List$map,
			$author$project$Internal$Render$enclose,
			A3($author$project$Internal$Render$renderArgList, source, latexState, args));
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
var $author$project$Internal$Render$reproduceSMacro = F6(
	function (source, name, latexState, optArgs, args, le) {
		var renderedOptArgs = A2(
			$elm$core$List$map,
			$author$project$Internal$Render$enclose,
			A3($author$project$Internal$Render$renderArgList, source, latexState, optArgs));
		var renderedLe = $author$project$Internal$Render$enclose(
			A3($author$project$Internal$Render$render, source, latexState, le));
		var renderedArgs = A2(
			$elm$core$List$map,
			$author$project$Internal$Render$enclose,
			A3($author$project$Internal$Render$renderArgList, source, latexState, args));
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
function $author$project$Internal$Render$cyclic$renderEnvironmentDict() {
	return $elm$core$Dict$fromList(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'align',
				F4(
					function (s, x, a, y) {
						return A4($author$project$Internal$Render$renderMathEnvironment, 'aligned', s, x, y);
					})),
				_Utils_Tuple2(
				'matrix',
				F4(
					function (s, x, a, y) {
						return A4($author$project$Internal$Render$renderMathEnvironment, 'matrix', s, x, y);
					})),
				_Utils_Tuple2(
				'pmatrix',
				F4(
					function (s, x, a, y) {
						return A4($author$project$Internal$Render$renderMathEnvironment, 'pmatrix', s, x, y);
					})),
				_Utils_Tuple2(
				'bmatrix',
				F4(
					function (s, x, a, y) {
						return A4($author$project$Internal$Render$renderMathEnvironment, 'bmatrix', s, x, y);
					})),
				_Utils_Tuple2(
				'Bmatrix',
				F4(
					function (s, x, a, y) {
						return A4($author$project$Internal$Render$renderMathEnvironment, 'Bmatrix', s, x, y);
					})),
				_Utils_Tuple2(
				'vmatrix',
				F4(
					function (s, x, a, y) {
						return A4($author$project$Internal$Render$renderMathEnvironment, 'vmatrix', s, x, y);
					})),
				_Utils_Tuple2(
				'Vmatrix',
				F4(
					function (s, x, a, y) {
						return A4($author$project$Internal$Render$renderMathEnvironment, 'Vmatrix', s, x, y);
					})),
				_Utils_Tuple2(
				'center',
				F4(
					function (s, x, a, y) {
						return A3($author$project$Internal$Render$renderCenterEnvironment, s, x, y);
					})),
				_Utils_Tuple2(
				'CD',
				F4(
					function (s, x, a, y) {
						return A4($author$project$Internal$Render$renderMathJaxEnvironment, 'CD', s, x, y);
					})),
				_Utils_Tuple2(
				'comment',
				F4(
					function (s, x, a, y) {
						return A3($author$project$Internal$Render$renderCommentEnvironment, s, x, y);
					})),
				_Utils_Tuple2(
				'defitem',
				F4(
					function (s, x, a, y) {
						return A4($author$project$Internal$Render$renderDefItemEnvironment, s, x, a, y);
					})),
				_Utils_Tuple2(
				'enumerate',
				F4(
					function (s, x, a, y) {
						return A3($author$project$Internal$Render$renderEnumerate, s, x, y);
					})),
				_Utils_Tuple2(
				'eqnarray',
				F4(
					function (s, x, a, y) {
						return A3($author$project$Internal$Render$renderEqnArray, s, x, y);
					})),
				_Utils_Tuple2(
				'equation',
				F4(
					function (s, x, a, y) {
						return A3($author$project$Internal$Render$renderEquationEnvironment, s, x, y);
					})),
				_Utils_Tuple2(
				'indent',
				F4(
					function (s, x, a, y) {
						return A3($author$project$Internal$Render$renderIndentEnvironment, s, x, y);
					})),
				_Utils_Tuple2(
				'itemize',
				F4(
					function (s, x, a, y) {
						return A3($author$project$Internal$Render$renderItemize, s, x, y);
					})),
				_Utils_Tuple2(
				'listing',
				F4(
					function (s, x, a, y) {
						return A3($author$project$Internal$Render$renderListing, s, x, y);
					})),
				_Utils_Tuple2(
				'macros',
				F4(
					function (s, x, a, y) {
						return A3($author$project$Internal$Render$renderMacros, s, x, y);
					})),
				_Utils_Tuple2(
				'maskforweb',
				F4(
					function (s, x, a, y) {
						return A3($author$project$Internal$Render$renderCommentEnvironment, s, x, y);
					})),
				_Utils_Tuple2(
				'quotation',
				F4(
					function (s, x, a, y) {
						return A3($author$project$Internal$Render$renderQuotation, s, x, y);
					})),
				_Utils_Tuple2(
				'tabular',
				F4(
					function (s, x, a, y) {
						return A3($author$project$Internal$Render$renderTabular, s, x, y);
					})),
				_Utils_Tuple2(
				'thebibliography',
				F4(
					function (s, x, a, y) {
						return A3($author$project$Internal$Render$renderTheBibliography, s, x, y);
					})),
				_Utils_Tuple2(
				'useforweb',
				F4(
					function (s, x, a, y) {
						return A3($author$project$Internal$Render$renderUseForWeb, s, x, y);
					})),
				_Utils_Tuple2(
				'verbatim',
				F4(
					function (s, x, a, y) {
						return A3($author$project$Internal$Render$renderVerbatim, s, x, y);
					})),
				_Utils_Tuple2(
				'verse',
				F4(
					function (s, x, a, y) {
						return A3($author$project$Internal$Render$renderVerse, s, x, y);
					})),
				_Utils_Tuple2(
				'mathmacro',
				F4(
					function (s, x, a, y) {
						return A3($author$project$Internal$Render$renderMathMacros, s, x, y);
					})),
				_Utils_Tuple2(
				'textmacro',
				F4(
					function (s, x, a, y) {
						return A3($author$project$Internal$Render$renderTextMacros, s, x, y);
					})),
				_Utils_Tuple2(
				'svg',
				F4(
					function (s, x, a, y) {
						return A3($author$project$Internal$Render$renderSvg, s, x, y);
					}))
			]));
}
function $author$project$Internal$Render$cyclic$renderMacroDict() {
	return $elm$core$Dict$fromList(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'bigskip',
				F4(
					function (s, x, y, z) {
						return A3($author$project$Internal$Render$renderBigSkip, s, x, z);
					})),
				_Utils_Tuple2(
				'medskip',
				F4(
					function (s, x, y, z) {
						return A3($author$project$Internal$Render$renderMedSkip, s, x, z);
					})),
				_Utils_Tuple2(
				'smallskip',
				F4(
					function (s, x, y, z) {
						return A3($author$project$Internal$Render$renderSmallSkip, s, x, z);
					})),
				_Utils_Tuple2(
				'cite',
				F4(
					function (s, x, y, z) {
						return A3($author$project$Internal$Render$renderCite, s, x, z);
					})),
				_Utils_Tuple2(
				'dollar',
				F4(
					function (s, x, y, z) {
						return A3($author$project$Internal$Render$renderDollar, s, x, z);
					})),
				_Utils_Tuple2(
				'texbegin',
				F4(
					function (s, x, y, z) {
						return A3($author$project$Internal$Render$renderBegin, s, x, z);
					})),
				_Utils_Tuple2(
				'texend',
				F4(
					function (s, x, y, z) {
						return A3($author$project$Internal$Render$renderEnd, s, x, z);
					})),
				_Utils_Tuple2(
				'percent',
				F4(
					function (s, x, y, z) {
						return A3($author$project$Internal$Render$renderPercent, s, x, z);
					})),
				_Utils_Tuple2(
				'code',
				F4(
					function (s, x, y, z) {
						return A3($author$project$Internal$Render$renderCode, s, x, z);
					})),
				_Utils_Tuple2(
				'ellie',
				F4(
					function (s, x, y, z) {
						return A3($author$project$Internal$Render$renderEllie, s, x, z);
					})),
				_Utils_Tuple2(
				'emph',
				F4(
					function (s, x, y, z) {
						return A3($author$project$Internal$Render$renderItalic, s, x, z);
					})),
				_Utils_Tuple2(
				'eqref',
				F4(
					function (s, x, y, z) {
						return A3($author$project$Internal$Render$renderEqRef, s, x, z);
					})),
				_Utils_Tuple2(
				'href',
				F4(
					function (s, x, y, z) {
						return A3($author$project$Internal$Render$renderHRef, s, x, z);
					})),
				_Utils_Tuple2(
				'iframe',
				F4(
					function (s, x, y, z) {
						return A3($author$project$Internal$Render$renderIFrame, s, x, z);
					})),
				_Utils_Tuple2(
				'image',
				F4(
					function (s, x, y, z) {
						return A3($author$project$Internal$Render$renderImage, s, x, z);
					})),
				_Utils_Tuple2(
				'imageref',
				F4(
					function (s, x, y, z) {
						return A3($author$project$Internal$Render$renderImageRef, s, x, z);
					})),
				_Utils_Tuple2(
				'index',
				F4(
					function (s, x, y, z) {
						return A3($author$project$Internal$Render$renderIndex, s, x, z);
					})),
				_Utils_Tuple2(
				'italic',
				F4(
					function (s, x, y, z) {
						return A3($author$project$Internal$Render$renderItalic, s, x, z);
					})),
				_Utils_Tuple2(
				'label',
				F4(
					function (s, x, y, z) {
						return A3($author$project$Internal$Render$renderLabel, s, x, z);
					})),
				_Utils_Tuple2(
				'maintableofcontents',
				F4(
					function (s, x, y, z) {
						return A3($author$project$Internal$Render$renderMainTableOfContents, s, x, z);
					})),
				_Utils_Tuple2(
				'maketitle',
				F4(
					function (s, x, y, z) {
						return A3($author$project$Internal$Render$renderMakeTitle, s, x, z);
					})),
				_Utils_Tuple2(
				'mdash',
				F4(
					function (s, x, y, z) {
						return A3($author$project$Internal$Render$renderMdash, s, x, z);
					})),
				_Utils_Tuple2(
				'ndash',
				F4(
					function (s, x, y, z) {
						return A3($author$project$Internal$Render$renderNdash, s, x, z);
					})),
				_Utils_Tuple2(
				'underscore',
				F4(
					function (s, x, y, z) {
						return A3($author$project$Internal$Render$renderUnderscore, s, x, z);
					})),
				_Utils_Tuple2(
				'bs',
				F4(
					function (s, x, y, z) {
						return A3($author$project$Internal$Render$renderBackslash, s, x, z);
					})),
				_Utils_Tuple2(
				'texarg',
				F4(
					function (s, x, y, z) {
						return A3($author$project$Internal$Render$renderTexArg, s, x, z);
					})),
				_Utils_Tuple2(
				'ref',
				F4(
					function (s, x, y, z) {
						return A3($author$project$Internal$Render$renderRef, s, x, z);
					})),
				_Utils_Tuple2(
				'medskip',
				F4(
					function (s, x, y, z) {
						return A3($author$project$Internal$Render$renderMedSkip, s, x, z);
					})),
				_Utils_Tuple2(
				'smallskip',
				F4(
					function (s, x, y, z) {
						return A3($author$project$Internal$Render$renderSmallSkip, s, x, z);
					})),
				_Utils_Tuple2(
				'section',
				F4(
					function (s, x, y, z) {
						return A3($author$project$Internal$Render$renderSection, s, x, z);
					})),
				_Utils_Tuple2(
				'section*',
				F4(
					function (s, x, y, z) {
						return A3($author$project$Internal$Render$renderSectionStar, s, x, z);
					})),
				_Utils_Tuple2(
				'subsection',
				F4(
					function (s, x, y, z) {
						return A3($author$project$Internal$Render$renderSubsection, s, x, z);
					})),
				_Utils_Tuple2(
				'subsection*',
				F4(
					function (s, x, y, z) {
						return A3($author$project$Internal$Render$renderSubsectionStar, s, x, z);
					})),
				_Utils_Tuple2(
				'subsubsection',
				F4(
					function (s, x, y, z) {
						return A3($author$project$Internal$Render$renderSubSubsection, s, x, z);
					})),
				_Utils_Tuple2(
				'subsubsection*',
				F4(
					function (s, x, y, z) {
						return A3($author$project$Internal$Render$renderSubSubsectionStar, s, x, z);
					})),
				_Utils_Tuple2(
				'setcounter',
				F4(
					function (s, x, y, z) {
						return A3($author$project$Internal$Render$renderSetCounter, s, x, z);
					})),
				_Utils_Tuple2(
				'subheading',
				F4(
					function (s, x, y, z) {
						return A3($author$project$Internal$Render$renderSubheading, s, x, z);
					})),
				_Utils_Tuple2(
				'tableofcontents',
				F4(
					function (s, x, y, z) {
						return A3($author$project$Internal$Render$renderTableOfContents, s, x, z);
					})),
				_Utils_Tuple2(
				'innertableofcontents',
				F4(
					function (s, x, y, z) {
						return A3($author$project$Internal$Render$renderInnerTableOfContents, s, x, z);
					})),
				_Utils_Tuple2(
				'red',
				F4(
					function (s, x, y, z) {
						return A3($author$project$Internal$Render$renderRed, s, x, z);
					})),
				_Utils_Tuple2(
				'blue',
				F4(
					function (s, x, y, z) {
						return A3($author$project$Internal$Render$renderBlue, s, x, z);
					})),
				_Utils_Tuple2(
				'remote',
				F4(
					function (s, x, y, z) {
						return A3($author$project$Internal$Render$renderRemote, s, x, z);
					})),
				_Utils_Tuple2(
				'local',
				F4(
					function (s, x, y, z) {
						return A3($author$project$Internal$Render$renderLocal, s, x, z);
					})),
				_Utils_Tuple2(
				'note',
				F4(
					function (s, x, y, z) {
						return A3($author$project$Internal$Render$renderAttachNote, s, x, z);
					})),
				_Utils_Tuple2(
				'highlight',
				F4(
					function (s, x, y, z) {
						return A3($author$project$Internal$Render$renderHighlighted, s, x, z);
					})),
				_Utils_Tuple2(
				'strike',
				F4(
					function (s, x, y, z) {
						return A3($author$project$Internal$Render$renderStrikeThrough, s, x, z);
					})),
				_Utils_Tuple2(
				'term',
				F4(
					function (s, x, y, z) {
						return A3($author$project$Internal$Render$renderTerm, s, x, z);
					})),
				_Utils_Tuple2(
				'xlink',
				F4(
					function (s, x, y, z) {
						return A3($author$project$Internal$Render$renderXLink, s, x, z);
					})),
				_Utils_Tuple2(
				'ilink1',
				F4(
					function (s, x, y, z) {
						return A3($author$project$Internal$Render$renderILink, s, x, z);
					})),
				_Utils_Tuple2(
				'ilink2',
				F4(
					function (s, x, y, z) {
						return A3($author$project$Internal$Render$renderILink, s, x, z);
					})),
				_Utils_Tuple2(
				'ilink3',
				F4(
					function (s, x, y, z) {
						return A3($author$project$Internal$Render$renderILink, s, x, z);
					})),
				_Utils_Tuple2(
				'include',
				F4(
					function (s, x, y, z) {
						return A3($author$project$Internal$Render$renderInclude, s, x, z);
					})),
				_Utils_Tuple2(
				'xlinkPublic',
				F4(
					function (s, x, y, z) {
						return A3($author$project$Internal$Render$renderXLinkPublic, s, x, z);
					})),
				_Utils_Tuple2(
				'documentTitle',
				F4(
					function (s, x, y, z) {
						return A3($author$project$Internal$Render$renderDocumentTitle, s, x, z);
					})),
				_Utils_Tuple2(
				'title',
				F4(
					function (s, x, y, z) {
						return A2($author$project$Internal$Render$renderTitle, x, z);
					})),
				_Utils_Tuple2(
				'author',
				F4(
					function (s, x, y, z) {
						return A3($author$project$Internal$Render$renderAuthor, s, x, z);
					})),
				_Utils_Tuple2(
				'date',
				F4(
					function (s, x, y, z) {
						return A3($author$project$Internal$Render$renderDate, s, x, z);
					})),
				_Utils_Tuple2(
				'revision',
				F4(
					function (s, x, y, z) {
						return A3($author$project$Internal$Render$renderRevision, s, x, z);
					})),
				_Utils_Tuple2(
				'email',
				F4(
					function (s, x, y, z) {
						return A3($author$project$Internal$Render$renderEmail, s, x, z);
					})),
				_Utils_Tuple2(
				'setdocid',
				F4(
					function (s, x, y, z) {
						return A3($author$project$Internal$Render$renderSetDocId, s, x, z);
					})),
				_Utils_Tuple2(
				'setclient',
				F4(
					function (s, x, y, z) {
						return A3($author$project$Internal$Render$renderSetClient, s, x, z);
					})),
				_Utils_Tuple2(
				'strong',
				F4(
					function (s, x, y, z) {
						return A3($author$project$Internal$Render$renderStrong, s, x, z);
					})),
				_Utils_Tuple2(
				'textbf',
				F4(
					function (s, x, y, z) {
						return A3($author$project$Internal$Render$renderStrong, s, x, z);
					})),
				_Utils_Tuple2(
				'uuid',
				F4(
					function (s, x, y, z) {
						return A3($author$project$Internal$Render$renderUuid, s, x, z);
					}))
			]));
}
function $author$project$Internal$Render$cyclic$renderSMacroDict() {
	return $elm$core$Dict$fromList(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'bibitem',
				F5(
					function (source, latexState, optArgs, args, body) {
						return A5($author$project$Internal$Render$renderBibItem, source, latexState, optArgs, args, body);
					}))
			]));
}
var $author$project$Internal$Render$renderEnvironmentDict = $author$project$Internal$Render$cyclic$renderEnvironmentDict();
$author$project$Internal$Render$cyclic$renderEnvironmentDict = function () {
	return $author$project$Internal$Render$renderEnvironmentDict;
};
var $author$project$Internal$Render$renderMacroDict = $author$project$Internal$Render$cyclic$renderMacroDict();
$author$project$Internal$Render$cyclic$renderMacroDict = function () {
	return $author$project$Internal$Render$renderMacroDict;
};
var $author$project$Internal$Render$renderSMacroDict = $author$project$Internal$Render$cyclic$renderSMacroDict();
$author$project$Internal$Render$cyclic$renderSMacroDict = function () {
	return $author$project$Internal$Render$renderSMacroDict;
};
var $author$project$Internal$Paragraph$Start = {$: 0};
var $author$project$Internal$Stack$Stack = $elm$core$Basics$identity;
var $author$project$Internal$Stack$empty = _List_Nil;
var $author$project$Internal$Paragraph$fixLine = function (line) {
	return (line === '') ? '\n' : line;
};
var $author$project$Internal$Paragraph$Error = {$: 5};
var $author$project$Internal$Paragraph$IgnoreLine = {$: 4};
var $author$project$Internal$Paragraph$InBlock = function (a) {
	return {$: 2, a: a};
};
var $author$project$Internal$Paragraph$InMathBlock = {$: 3};
var $author$project$Internal$Paragraph$InParagraph = {$: 1};
var $elm$core$String$endsWith = _String_endsWith;
var $author$project$Internal$Paragraph$BeginBlock = function (a) {
	return {$: 3, a: a};
};
var $author$project$Internal$Paragraph$Blank = {$: 0};
var $author$project$Internal$Paragraph$EndBlock = function (a) {
	return {$: 4, a: a};
};
var $author$project$Internal$Paragraph$MathBlock = {$: 5};
var $author$project$Internal$Paragraph$Text = {$: 2};
var $author$project$Internal$Paragraph$getBeginArg = function (line) {
	var parseResult = A2($elm$parser$Parser$Advanced$run, $author$project$Internal$Parser$envName, line);
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
var $author$project$Internal$Parser$ExpectingEndAndRightBrace = {$: 27};
var $author$project$Internal$Parser$ExpectingEnvironmentNameEnd = {$: 25};
var $author$project$Internal$Parser$endWord = A2(
	$elm$parser$Parser$Advanced$keeper,
	A2(
		$elm$parser$Parser$Advanced$ignorer,
		A2(
			$elm$parser$Parser$Advanced$ignorer,
			$elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity),
			$author$project$Internal$Parser$spaces),
		$elm$parser$Parser$Advanced$symbol(
			A2($elm$parser$Parser$Advanced$Token, '\\end{', $author$project$Internal$Parser$ExpectingEnvironmentNameEnd))),
	A2(
		$elm$parser$Parser$Advanced$ignorer,
		A2($author$project$Internal$Parser$parseToSymbol, $author$project$Internal$Parser$ExpectingEndAndRightBrace, '}'),
		$author$project$Internal$Parser$ws));
var $author$project$Internal$Paragraph$getEndArg = function (line) {
	var parseResult = A2($elm$parser$Parser$Advanced$run, $author$project$Internal$Parser$endWord, line);
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
var $author$project$Internal$Paragraph$lineType = function (line) {
	return (line === '') ? $author$project$Internal$Paragraph$Blank : (A2($elm$core$String$startsWith, '\\begin', line) ? $author$project$Internal$Paragraph$BeginBlock(
		$author$project$Internal$Paragraph$getBeginArg(line)) : (A2($elm$core$String$startsWith, '\\end', line) ? $author$project$Internal$Paragraph$EndBlock(
		$author$project$Internal$Paragraph$getEndArg(line)) : (A2($elm$core$String$startsWith, '$$', line) ? $author$project$Internal$Paragraph$MathBlock : $author$project$Internal$Paragraph$Text)));
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
var $author$project$Internal$Stack$pop = function (_v0) {
	var list = _v0;
	var _v1 = $elm$core$List$tail(list);
	if (_v1.$ === 1) {
		return _List_Nil;
	} else {
		var tail = _v1.a;
		return tail;
	}
};
var $author$project$Internal$Stack$push = F2(
	function (element, _v0) {
		var list = _v0;
		return A2($elm$core$List$cons, element, list);
	});
var $author$project$Internal$Stack$top = function (_v0) {
	var list = _v0;
	return $elm$core$List$head(list);
};
var $author$project$Internal$Paragraph$getNextState = F2(
	function (line, _v0) {
		var parserState = _v0.a;
		var stack = _v0.b;
		var _v1 = _Utils_Tuple2(
			parserState,
			$author$project$Internal$Paragraph$lineType(line));
		_v1$23:
		while (true) {
			switch (_v1.a.$) {
				case 0:
					switch (_v1.b.$) {
						case 0:
							var _v2 = _v1.a;
							var _v3 = _v1.b;
							return _Utils_Tuple2($author$project$Internal$Paragraph$Start, stack);
						case 2:
							var _v4 = _v1.a;
							var _v5 = _v1.b;
							return _Utils_Tuple2($author$project$Internal$Paragraph$InParagraph, stack);
						case 3:
							var _v6 = _v1.a;
							var arg = _v1.b.a;
							return _Utils_Tuple2(
								$author$project$Internal$Paragraph$InBlock(arg),
								A2($author$project$Internal$Stack$push, arg, stack));
						case 5:
							var _v7 = _v1.a;
							var _v8 = _v1.b;
							return A2(
								$elm$core$String$endsWith,
								'$$',
								A2($elm$core$String$dropLeft, 2, line)) ? _Utils_Tuple2($author$project$Internal$Paragraph$Start, stack) : _Utils_Tuple2($author$project$Internal$Paragraph$InMathBlock, stack);
						case 1:
							var _v9 = _v1.a;
							var _v10 = _v1.b;
							return _Utils_Tuple2($author$project$Internal$Paragraph$IgnoreLine, stack);
						default:
							break _v1$23;
					}
				case 4:
					switch (_v1.b.$) {
						case 0:
							var _v11 = _v1.a;
							var _v12 = _v1.b;
							return _Utils_Tuple2($author$project$Internal$Paragraph$Start, stack);
						case 2:
							var _v13 = _v1.a;
							var _v14 = _v1.b;
							return _Utils_Tuple2($author$project$Internal$Paragraph$InParagraph, stack);
						case 3:
							var _v15 = _v1.a;
							var arg = _v1.b.a;
							return _Utils_Tuple2(
								$author$project$Internal$Paragraph$InBlock(arg),
								A2($author$project$Internal$Stack$push, arg, stack));
						case 5:
							var _v16 = _v1.a;
							var _v17 = _v1.b;
							return _Utils_Tuple2($author$project$Internal$Paragraph$InMathBlock, stack);
						default:
							break _v1$23;
					}
				case 2:
					switch (_v1.b.$) {
						case 0:
							var arg = _v1.a.a;
							var _v18 = _v1.b;
							return _Utils_Tuple2(
								$author$project$Internal$Paragraph$InBlock(arg),
								stack);
						case 2:
							var arg = _v1.a.a;
							var _v19 = _v1.b;
							return _Utils_Tuple2(
								$author$project$Internal$Paragraph$InBlock(arg),
								stack);
						case 5:
							var arg = _v1.a.a;
							var _v20 = _v1.b;
							return _Utils_Tuple2($author$project$Internal$Paragraph$InMathBlock, stack);
						case 3:
							var arg = _v1.a.a;
							var arg2 = _v1.b.a;
							return _Utils_Tuple2(
								$author$project$Internal$Paragraph$InBlock(arg),
								A2($author$project$Internal$Stack$push, arg2, stack));
						case 4:
							var arg1 = _v1.a.a;
							var arg2 = _v1.b.a;
							var _v21 = _Utils_Tuple2(
								$author$project$Internal$Stack$pop(stack),
								line);
							var nextStack = _v21.a;
							var line_ = _v21.b;
							var _v22 = $author$project$Internal$Stack$top(nextStack);
							if (_v22.$ === 1) {
								return _Utils_Tuple2($author$project$Internal$Paragraph$Start, nextStack);
							} else {
								var arg = _v22.a;
								return _Utils_Tuple2(
									$author$project$Internal$Paragraph$InBlock(arg),
									nextStack);
							}
						default:
							break _v1$23;
					}
				case 1:
					switch (_v1.b.$) {
						case 2:
							var _v23 = _v1.a;
							var _v24 = _v1.b;
							return _Utils_Tuple2($author$project$Internal$Paragraph$InParagraph, stack);
						case 3:
							var _v25 = _v1.a;
							var str = _v1.b.a;
							return _Utils_Tuple2(
								$author$project$Internal$Paragraph$InParagraph,
								A2($author$project$Internal$Stack$push, str, stack));
						case 5:
							var _v26 = _v1.a;
							var _v27 = _v1.b;
							return _Utils_Tuple2($author$project$Internal$Paragraph$InMathBlock, stack);
						case 4:
							var _v28 = _v1.a;
							var arg = _v1.b.a;
							return _Utils_Tuple2($author$project$Internal$Paragraph$Error, stack);
						case 0:
							var _v29 = _v1.a;
							var _v30 = _v1.b;
							return _Utils_Tuple2($author$project$Internal$Paragraph$Start, stack);
						default:
							break _v1$23;
					}
				case 3:
					switch (_v1.b.$) {
						case 3:
							var _v31 = _v1.a;
							var str = _v1.b.a;
							return _Utils_Tuple2($author$project$Internal$Paragraph$InMathBlock, stack);
						case 4:
							var _v32 = _v1.a;
							var str = _v1.b.a;
							return _Utils_Tuple2($author$project$Internal$Paragraph$InMathBlock, stack);
						case 5:
							var _v33 = _v1.a;
							var _v34 = _v1.b;
							return _Utils_Tuple2($author$project$Internal$Paragraph$Start, stack);
						default:
							var _v35 = _v1.a;
							return A2(
								$elm$core$String$endsWith,
								'$$',
								A2($elm$core$String$dropLeft, 2, line)) ? _Utils_Tuple2($author$project$Internal$Paragraph$Start, stack) : ((line === '') ? _Utils_Tuple2($author$project$Internal$Paragraph$Start, stack) : _Utils_Tuple2($author$project$Internal$Paragraph$InMathBlock, stack));
					}
				default:
					break _v1$23;
			}
		}
		return _Utils_Tuple2($author$project$Internal$Paragraph$Error, stack);
	});
var $author$project$Internal$Paragraph$joinLines = F2(
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
var $author$project$Internal$Paragraph$updateParserRecord = F2(
	function (line, parserRecord) {
		var _v0 = A2(
			$author$project$Internal$Paragraph$getNextState,
			line,
			_Utils_Tuple2(parserRecord.an, parserRecord.L));
		var nextState = _v0.a;
		var nextStack = _v0.b;
		switch (nextState.$) {
			case 0:
				return _Utils_update(
					parserRecord,
					{
						w: '',
						ax: _Utils_ap(
							parserRecord.ax,
							_List_fromArray(
								[
									A2($author$project$Internal$Paragraph$joinLines, parserRecord.w, line)
								])),
						L: nextStack,
						an: nextState
					});
			case 1:
				return _Utils_update(
					parserRecord,
					{
						w: A2($author$project$Internal$Paragraph$joinLines, parserRecord.w, line),
						L: nextStack,
						an: nextState
					});
			case 3:
				return _Utils_update(
					parserRecord,
					{
						w: A2($author$project$Internal$Paragraph$joinLines, parserRecord.w, line),
						L: nextStack,
						an: nextState
					});
			case 2:
				var arg = nextState.a;
				return _Utils_update(
					parserRecord,
					{
						w: A2(
							$author$project$Internal$Paragraph$joinLines,
							parserRecord.w,
							$author$project$Internal$Paragraph$fixLine(line)),
						L: nextStack,
						an: nextState
					});
			case 4:
				return _Utils_update(
					parserRecord,
					{L: nextStack, an: nextState});
			default:
				return _Utils_update(
					parserRecord,
					{L: nextStack});
		}
	});
var $author$project$Internal$Paragraph$logicalParagraphParse = function (text) {
	return A3(
		$elm$core$List$foldl,
		$author$project$Internal$Paragraph$updateParserRecord,
		{w: '', ax: _List_Nil, L: $author$project$Internal$Stack$empty, an: $author$project$Internal$Paragraph$Start},
		A2($elm$core$String$split, '\n', text + '\n'));
};
var $author$project$Internal$Paragraph$logicalParagraphify = function (text) {
	var lastState = $author$project$Internal$Paragraph$logicalParagraphParse(text);
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
				lastState.ax,
				_List_fromArray(
					[lastState.w]))));
};
var $author$project$Internal$Render$renderString = F2(
	function (latexState, source) {
		var render_ = function (_v0) {
			var source_ = _v0.a;
			var ast = _v0.b;
			return A3($author$project$Internal$Render$renderLatexList, source_, latexState, ast);
		};
		var parse = function (paragraph) {
			return _Utils_Tuple2(
				paragraph,
				$author$project$Internal$Render$spacify(
					$author$project$Internal$Parser$parse(paragraph)));
		};
		var paragraphs = $author$project$Internal$Paragraph$logicalParagraphify(source);
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
			if (dict.$ === -2) {
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
		return A5($elm$core$Dict$RBNode_elm_builtin, 1, key, value, $elm$core$Dict$RBEmpty_elm_builtin, $elm$core$Dict$RBEmpty_elm_builtin);
	});
var $elm$core$Set$singleton = function (key) {
	return A2($elm$core$Dict$singleton, key, 0);
};
var $elm$core$Dict$getMin = function (dict) {
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
var $elm$core$Dict$moveRedLeft = function (dict) {
	if (((dict.$ === -1) && (dict.d.$ === -1)) && (dict.e.$ === -1)) {
		if ((dict.e.d.$ === -1) && (!dict.e.d.a)) {
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
				0,
				rlK,
				rlV,
				A5(
					$elm$core$Dict$RBNode_elm_builtin,
					1,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, 0, lK, lV, lLeft, lRight),
					rlL),
				A5($elm$core$Dict$RBNode_elm_builtin, 1, rK, rV, rlR, rRight));
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
			if (clr === 1) {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					1,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, 0, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, 0, rK, rV, rLeft, rRight));
			} else {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					1,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, 0, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, 0, rK, rV, rLeft, rRight));
			}
		}
	} else {
		return dict;
	}
};
var $elm$core$Dict$moveRedRight = function (dict) {
	if (((dict.$ === -1) && (dict.d.$ === -1)) && (dict.e.$ === -1)) {
		if ((dict.d.d.$ === -1) && (!dict.d.d.a)) {
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
				0,
				lK,
				lV,
				A5($elm$core$Dict$RBNode_elm_builtin, 1, llK, llV, llLeft, llRight),
				A5(
					$elm$core$Dict$RBNode_elm_builtin,
					1,
					k,
					v,
					lRight,
					A5($elm$core$Dict$RBNode_elm_builtin, 0, rK, rV, rLeft, rRight)));
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
			if (clr === 1) {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					1,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, 0, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, 0, rK, rV, rLeft, rRight));
			} else {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					1,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, 0, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, 0, rK, rV, rLeft, rRight));
			}
		}
	} else {
		return dict;
	}
};
var $elm$core$Dict$removeHelpPrepEQGT = F7(
	function (targetKey, dict, color, key, value, left, right) {
		if ((left.$ === -1) && (!left.a)) {
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
				A5($elm$core$Dict$RBNode_elm_builtin, 0, key, value, lRight, right));
		} else {
			_v2$2:
			while (true) {
				if ((right.$ === -1) && (right.a === 1)) {
					if (right.d.$ === -1) {
						if (right.d.a === 1) {
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
				if (_v4.$ === -1) {
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
		if (dict.$ === -2) {
			return $elm$core$Dict$RBEmpty_elm_builtin;
		} else {
			var color = dict.a;
			var key = dict.b;
			var value = dict.c;
			var left = dict.d;
			var right = dict.e;
			if (_Utils_cmp(targetKey, key) < 0) {
				if ((left.$ === -1) && (left.a === 1)) {
					var _v4 = left.a;
					var lLeft = left.d;
					if ((lLeft.$ === -1) && (!lLeft.a)) {
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
						if (_v7.$ === -1) {
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
		if (dict.$ === -1) {
			var color = dict.a;
			var key = dict.b;
			var value = dict.c;
			var left = dict.d;
			var right = dict.e;
			if (_Utils_eq(targetKey, key)) {
				var _v1 = $elm$core$Dict$getMin(right);
				if (_v1.$ === -1) {
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
		if ((_v0.$ === -1) && (!_v0.a)) {
			var _v1 = _v0.a;
			var k = _v0.b;
			var v = _v0.c;
			var l = _v0.d;
			var r = _v0.e;
			return A5($elm$core$Dict$RBNode_elm_builtin, 1, k, v, l, r);
		} else {
			var x = _v0;
			return x;
		}
	});
var $elm$core$Dict$update = F3(
	function (targetKey, alter, dictionary) {
		var _v0 = alter(
			A2($elm$core$Dict$get, targetKey, dictionary));
		if (!_v0.$) {
			var value = _v0.a;
			return A3($elm$core$Dict$insert, targetKey, value, dictionary);
		} else {
			return A2($elm$core$Dict$remove, targetKey, dictionary);
		}
	});
var $Janiczek$elm_bidict$BiDict$fromDict = function (forward) {
	return {
		e: forward,
		u: A3(
			$elm$core$Dict$foldl,
			F3(
				function (key, value, acc) {
					return A3(
						$elm$core$Dict$update,
						value,
						function (maybeKeys) {
							return $elm$core$Maybe$Just(
								function () {
									if (maybeKeys.$ === 1) {
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
	};
};
var $Janiczek$elm_bidict$BiDict$fromList = function (list) {
	return $Janiczek$elm_bidict$BiDict$fromDict(
		$elm$core$Dict$fromList(list));
};
var $author$project$Internal$SourceMap$generate = F2(
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
var $author$project$Internal$Differ$prefixer = F2(
	function (b, k) {
		return 'p.' + ($elm$core$String$fromInt(b) + ('.' + $elm$core$String$fromInt(k)));
	});
var $author$project$Internal$LatexDiffer$makeIdListWithSeed = F2(
	function (seed, paragraphs) {
		return A2(
			$elm$core$List$map,
			$author$project$Internal$Differ$prefixer(seed),
			A2(
				$elm$core$List$range,
				1,
				$elm$core$List$length(paragraphs)));
	});
var $author$project$Internal$MathMacro$MacroBody = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $author$project$Internal$MathMacro$makeEntry = function (mathExpression_) {
	if (mathExpression_.$ === 2) {
		var macroName_ = mathExpression_.a;
		var nArgs = mathExpression_.b;
		var body = mathExpression_.c;
		return _Utils_Tuple2(
			macroName_,
			A2(
				$author$project$Internal$MathMacro$MacroBody,
				A2(
					$elm$core$Maybe$withDefault,
					0,
					$elm$core$String$toInt(nArgs)),
				body));
	} else {
		return _Utils_Tuple2(
			'nullMacro',
			A2(
				$author$project$Internal$MathMacro$MacroBody,
				0,
				_List_fromArray(
					[
						$author$project$Internal$MathMacro$MathText('0')
					])));
	}
};
var $author$project$Internal$MathMacro$makeMacroDict = function (str) {
	var _v0 = $author$project$Internal$MathMacro$parse(str);
	if (!_v0.$) {
		var list = _v0.a;
		return $elm$core$Dict$fromList(
			A2($elm$core$List$map, $author$project$Internal$MathMacro$makeEntry, list));
	} else {
		return $elm$core$Dict$empty;
	}
};
var $author$project$Internal$LatexState$setMacroDefinition = F3(
	function (macroName, macroDefinition, latexState) {
		var macroDictionary = latexState.bV;
		var newMacroDictionary = A3($elm$core$Dict$insert, macroName, macroDefinition, macroDictionary);
		return _Utils_update(
			latexState,
			{bV: newMacroDictionary});
	});
var $author$project$Internal$StateReducerHelpers$setMacroDefinition = F3(
	function (name, body, latexState) {
		return A3(
			$author$project$Internal$LatexState$setMacroDefinition,
			name,
			A3($author$project$Internal$Parser$NewCommand, name, 0, body),
			latexState);
	});
var $author$project$Internal$StateReducerHelpers$macroDictReducer = F2(
	function (lexpr, state) {
		if (lexpr.$ === 9) {
			var name = lexpr.a;
			var nArgs = lexpr.b;
			var body = lexpr.c;
			return A3($author$project$Internal$StateReducerHelpers$setMacroDefinition, name, body, state);
		} else {
			return state;
		}
	});
var $author$project$Internal$StateReducerHelpers$setDictionaryAux = F2(
	function (list, latexState) {
		return A3($elm$core$List$foldl, $author$project$Internal$StateReducerHelpers$macroDictReducer, latexState, list);
	});
var $author$project$Internal$StateReducerHelpers$setDictionary = F2(
	function (str, latexState) {
		return A2(
			$author$project$Internal$StateReducerHelpers$setDictionaryAux,
			$author$project$Internal$Parser$parse(str),
			latexState);
	});
var $author$project$Internal$ParserTools$latexList2List = function (latexExpression) {
	if (latexExpression.$ === 8) {
		var list = latexExpression.a;
		return list;
	} else {
		return _List_Nil;
	}
};
var $author$project$Internal$ParserTools$getMacroArgs = F2(
	function (macroName, latexExpression) {
		if (latexExpression.$ === 6) {
			var name = latexExpression.a;
			var optArgs = latexExpression.b;
			var args = latexExpression.c;
			return _Utils_eq(name, macroName) ? A2($elm$core$List$map, $author$project$Internal$ParserTools$latexList2List, args) : _List_Nil;
		} else {
			return _List_Nil;
		}
	});
var $author$project$Internal$ParserTools$list2LeadingString = function (list) {
	var head_ = $elm$core$List$head(list);
	var value = function () {
		if (!head_.$) {
			var value_ = head_.a;
			return value_;
		} else {
			return $author$project$Internal$Parser$LXString('');
		}
	}();
	if (!value.$) {
		var str = value.a;
		return str;
	} else {
		return '';
	}
};
var $author$project$Internal$ParserTools$getSimpleMacroArgs = F2(
	function (macroName, latexExpression) {
		return A2(
			$elm$core$List$map,
			$author$project$Internal$ParserTools$list2LeadingString,
			A2($author$project$Internal$ParserTools$getMacroArgs, macroName, latexExpression));
	});
var $author$project$Internal$ParserTools$getFirstMacroArg = F2(
	function (macroName, latexExpression) {
		var arg = $elm$core$List$head(
			A2($author$project$Internal$ParserTools$getSimpleMacroArgs, macroName, latexExpression));
		if (!arg.$) {
			var value = arg.a;
			return value;
		} else {
			return '';
		}
	});
var $author$project$Internal$StateReducerHelpers$getLabel = function (str) {
	var maybeMacro = A2(
		$elm$parser$Parser$Advanced$run,
		$author$project$Internal$Parser$macro($author$project$Internal$Parser$ws),
		$elm$core$String$trim(str));
	if (!maybeMacro.$) {
		var macro = maybeMacro.a;
		return A2($author$project$Internal$ParserTools$getFirstMacroArg, 'label', macro);
	} else {
		return '';
	}
};
var $author$project$Internal$LatexState$incrementCounter = F2(
	function (name, latexState) {
		var maybeInc = $elm$core$Maybe$map(
			function (x) {
				return x + 1;
			});
		var newCounters = A3($elm$core$Dict$update, name, maybeInc, latexState.V);
		return _Utils_update(
			latexState,
			{V: newCounters});
	});
var $author$project$Internal$LatexState$setCrossReference = F3(
	function (label, value, latexState) {
		var crossReferences = latexState.bw;
		var newCrossReferences = A3($elm$core$Dict$insert, label, value, crossReferences);
		return _Utils_update(
			latexState,
			{bw: newCrossReferences});
	});
var $author$project$Internal$StateReducerHelpers$setEquationNumber = F2(
	function (body, latexState) {
		var latexState1 = A2($author$project$Internal$LatexState$incrementCounter, 'eqno', latexState);
		var s1 = A2($author$project$Internal$LatexState$getCounter, 's1', latexState1);
		var label = function () {
			if (!body.$) {
				var str = body.a;
				return $author$project$Internal$StateReducerHelpers$getLabel(str);
			} else {
				return '';
			}
		}();
		var eqno = A2($author$project$Internal$LatexState$getCounter, 'eqno', latexState1);
		var latexState2 = (label !== '') ? A3(
			$author$project$Internal$LatexState$setCrossReference,
			label,
			$elm$core$String$fromInt(s1) + ('.' + $elm$core$String$fromInt(eqno)),
			latexState1) : latexState1;
		return latexState2;
	});
var $elm$core$Maybe$andThen = F2(
	function (callback, maybeValue) {
		if (!maybeValue.$) {
			var value = maybeValue.a;
			return callback(value);
		} else {
			return $elm$core$Maybe$Nothing;
		}
	});
var $author$project$Internal$ParserTools$isMacro = F2(
	function (macroName, latexExpression) {
		if (latexExpression.$ === 6) {
			var name = latexExpression.a;
			return _Utils_eq(name, macroName);
		} else {
			return false;
		}
	});
var $author$project$Internal$ParserTools$filterMacro = F2(
	function (macroName, list) {
		return A2(
			$elm$core$List$filter,
			$author$project$Internal$ParserTools$isMacro(macroName),
			list);
	});
var $author$project$Internal$ParserTools$getMacroArgs2 = function (latexExpression) {
	if (latexExpression.$ === 6) {
		var name = latexExpression.a;
		var optArgs = latexExpression.b;
		var args = latexExpression.c;
		return A2($elm$core$List$map, $author$project$Internal$ParserTools$latexList2List, args);
	} else {
		return _List_Nil;
	}
};
var $author$project$Internal$ParserTools$getString = function (latexString) {
	if (!latexString.$) {
		var str = latexString.a;
		return str;
	} else {
		return '';
	}
};
var $author$project$Internal$ParserTools$macroValue_ = F2(
	function (macroName, list) {
		return A2(
			$elm$core$Maybe$map,
			$author$project$Internal$ParserTools$getString,
			A2(
				$elm$core$Maybe$andThen,
				$elm$core$List$head,
				A2(
					$elm$core$Maybe$andThen,
					$elm$core$List$head,
					A2(
						$elm$core$Maybe$map,
						$author$project$Internal$ParserTools$getMacroArgs2,
						$elm$core$List$head(
							A2($author$project$Internal$ParserTools$filterMacro, macroName, list))))));
	});
var $author$project$Internal$ParserTools$macroValue = F2(
	function (macroName, envBody) {
		if (envBody.$ === 8) {
			var list = envBody.a;
			return A2($author$project$Internal$ParserTools$macroValue_, macroName, list);
		} else {
			return $elm$core$Maybe$Nothing;
		}
	});
var $author$project$Internal$StateReducerHelpers$setTheoremNumber = F2(
	function (body, latexState) {
		var latexState1 = A2($author$project$Internal$LatexState$incrementCounter, 'tno', latexState);
		var s1 = A2($author$project$Internal$LatexState$getCounter, 's1', latexState1);
		var tno = A2($author$project$Internal$LatexState$getCounter, 'tno', latexState1);
		var label = function () {
			var _v0 = A2($author$project$Internal$ParserTools$macroValue, 'label', body);
			if (!_v0.$) {
				var str = _v0.a;
				return str;
			} else {
				return '';
			}
		}();
		var latexState2 = (label !== '') ? A3(
			$author$project$Internal$LatexState$setCrossReference,
			label,
			$elm$core$String$fromInt(s1) + ('.' + $elm$core$String$fromInt(tno)),
			latexState1) : latexState1;
		return latexState2;
	});
var $author$project$Internal$Accumulator$theoremWords = _List_fromArray(
	['theorem', 'proposition', 'corollary', 'lemma', 'definition', 'problem']);
var $author$project$Internal$Accumulator$envReducer = F4(
	function (name, optonalArgs, body, state) {
		if (A2($elm$core$List$member, name, $author$project$Internal$Accumulator$theoremWords)) {
			return A2($author$project$Internal$StateReducerHelpers$setTheoremNumber, body, state);
		} else {
			switch (name) {
				case 'equation':
					return A2($author$project$Internal$StateReducerHelpers$setEquationNumber, body, state);
				case 'align':
					return A2($author$project$Internal$StateReducerHelpers$setEquationNumber, body, state);
				case 'mathmacro':
					if (!body.$) {
						var str = body.a;
						var mathDict = $author$project$Internal$MathMacro$makeMacroDict(
							$elm$core$String$trim(str));
						return _Utils_update(
							state,
							{dE: mathDict});
					} else {
						return state;
					}
				case 'textmacro':
					if (!body.$) {
						var str = body.a;
						return A2($author$project$Internal$StateReducerHelpers$setDictionary, str, state);
					} else {
						return state;
					}
				default:
					return state;
			}
		}
	});
var $author$project$Internal$Accumulator$dictionaryWords = _List_fromArray(
	['title', 'author', 'date', 'email', 'revision', 'host', 'setclient', 'setdocid']);
var $author$project$Internal$LatexState$setDictionaryItem = F3(
	function (key, value, latexState) {
		var dictionary = latexState.bz;
		var newDictionary = A3($elm$core$Dict$insert, key, value, dictionary);
		return _Utils_update(
			latexState,
			{bz: newDictionary});
	});
var $author$project$Internal$ParserTools$headLatexExpression = function (list) {
	var he = function () {
		var _v0 = $elm$core$List$head(list);
		if (!_v0.$) {
			var expr = _v0.a;
			return expr;
		} else {
			return $author$project$Internal$Parser$LatexList(_List_Nil);
		}
	}();
	return he;
};
var $author$project$Internal$ParserTools$valueOfLXString = function (expr) {
	if (!expr.$) {
		var str = expr.a;
		return str;
	} else {
		return 'Error getting value of LatexString';
	}
};
var $author$project$Internal$ParserTools$valueOfLatexList = function (latexList) {
	if (latexList.$ === 8) {
		var value = latexList.a;
		return value;
	} else {
		return _List_fromArray(
			[
				$author$project$Internal$Parser$LXString('Error getting value of LatexList')
			]);
	}
};
var $author$project$Internal$ParserTools$unpackString = function (expr) {
	return $author$project$Internal$ParserTools$valueOfLXString(
		$author$project$Internal$ParserTools$headLatexExpression(
			$author$project$Internal$ParserTools$valueOfLatexList(
				$author$project$Internal$ParserTools$headLatexExpression(expr))));
};
var $author$project$Internal$StateReducerHelpers$setDictionaryItemForMacro = F3(
	function (name, args, latexState) {
		var value = $author$project$Internal$ParserTools$unpackString(args);
		return A3($author$project$Internal$LatexState$setDictionaryItem, name, value, latexState);
	});
var $author$project$Internal$StateReducerHelpers$getAt = F2(
	function (k, list_) {
		return A2(
			$elm$core$Maybe$withDefault,
			'xxx',
			A2($author$project$Internal$Utility$getAt, k, list_));
	});
var $author$project$Internal$LatexState$updateCounter = F3(
	function (name, value, latexState) {
		var maybeSet = $elm$core$Maybe$map(
			function (x) {
				return value;
			});
		var newCounters = A3($elm$core$Dict$update, name, maybeSet, latexState.V);
		return _Utils_update(
			latexState,
			{V: newCounters});
	});
var $author$project$Internal$StateReducerHelpers$setSectionCounters = F2(
	function (macroArgs, latexState) {
		var argList = A2(
			$elm$core$List$map,
			$author$project$Internal$ParserTools$list2LeadingString,
			A2($elm$core$List$map, $author$project$Internal$ParserTools$latexList2List, macroArgs));
		var arg2 = A2($author$project$Internal$StateReducerHelpers$getAt, 1, argList);
		var arg1 = A2($author$project$Internal$StateReducerHelpers$getAt, 0, argList);
		var initialSectionNumber = (arg1 === 'section') ? A2(
			$elm$core$Maybe$withDefault,
			0,
			$elm$core$String$toInt(arg2)) : (-1);
		return (_Utils_cmp(initialSectionNumber, -1) > 0) ? A3(
			$author$project$Internal$LatexState$updateCounter,
			's3',
			0,
			A3(
				$author$project$Internal$LatexState$updateCounter,
				's2',
				0,
				A3($author$project$Internal$LatexState$updateCounter, 's1', initialSectionNumber - 1, latexState))) : latexState;
	});
var $author$project$Internal$LatexState$TocEntry = F3(
	function (name, label, level) {
		return {dB: label, dC: level, dH: name};
	});
var $author$project$Internal$LatexState$addSection = F4(
	function (sectionName, label, level, latexState) {
		var newEntry = A3($author$project$Internal$LatexState$TocEntry, sectionName, label, level);
		var toc = _Utils_ap(
			latexState.cp,
			_List_fromArray(
				[newEntry]));
		return _Utils_update(
			latexState,
			{cp: toc});
	});
var $author$project$Internal$StateReducerHelpers$updateSectionNumber = F2(
	function (macroArgs, latexState) {
		var label = $elm$core$String$fromInt(
			function (x) {
				return x + 1;
			}(
				A2($author$project$Internal$LatexState$getCounter, 's1', latexState)));
		return A4(
			$author$project$Internal$LatexState$addSection,
			$author$project$Internal$ParserTools$unpackString(macroArgs),
			label,
			1,
			A3(
				$author$project$Internal$LatexState$updateCounter,
				's3',
				0,
				A3(
					$author$project$Internal$LatexState$updateCounter,
					's2',
					0,
					A2($author$project$Internal$LatexState$incrementCounter, 's1', latexState))));
	});
var $author$project$Internal$StateReducerHelpers$updateSubsectionNumber = F2(
	function (macroArgs, latexState) {
		var s2 = $elm$core$String$fromInt(
			function (x) {
				return x + 1;
			}(
				A2($author$project$Internal$LatexState$getCounter, 's2', latexState)));
		var s1 = $elm$core$String$fromInt(
			A2($author$project$Internal$LatexState$getCounter, 's1', latexState));
		var label = s1 + ('.' + s2);
		return A4(
			$author$project$Internal$LatexState$addSection,
			$author$project$Internal$ParserTools$unpackString(macroArgs),
			label,
			2,
			A3(
				$author$project$Internal$LatexState$updateCounter,
				's3',
				0,
				A2($author$project$Internal$LatexState$incrementCounter, 's2', latexState)));
	});
var $author$project$Internal$StateReducerHelpers$updateSubsubsectionNumber = F2(
	function (macroArgs, latexState) {
		var s3 = $elm$core$String$fromInt(
			function (x) {
				return x + 1;
			}(
				A2($author$project$Internal$LatexState$getCounter, 's3', latexState)));
		var s2 = $elm$core$String$fromInt(
			A2($author$project$Internal$LatexState$getCounter, 's2', latexState));
		var s1 = $elm$core$String$fromInt(
			A2($author$project$Internal$LatexState$getCounter, 's1', latexState));
		var label = s1 + ('.' + (s2 + ('.' + s3)));
		return A4(
			$author$project$Internal$LatexState$addSection,
			$author$project$Internal$ParserTools$unpackString(macroArgs),
			label,
			2,
			A2($author$project$Internal$LatexState$incrementCounter, 's3', latexState));
	});
var $author$project$Internal$Accumulator$macroReducer = F4(
	function (name, optionalArgs, args, state) {
		if (A2($elm$core$List$member, name, $author$project$Internal$Accumulator$dictionaryWords)) {
			return A3($author$project$Internal$StateReducerHelpers$setDictionaryItemForMacro, name, args, state);
		} else {
			switch (name) {
				case 'section':
					return A2($author$project$Internal$StateReducerHelpers$updateSectionNumber, args, state);
				case 'subsection':
					return A2($author$project$Internal$StateReducerHelpers$updateSubsectionNumber, args, state);
				case 'subsubsection':
					return A2($author$project$Internal$StateReducerHelpers$updateSubsubsectionNumber, args, state);
				case 'setcounter':
					return A2($author$project$Internal$StateReducerHelpers$setSectionCounters, args, state);
				default:
					return state;
			}
		}
	});
var $author$project$Internal$StateReducerHelpers$setBibItemXRef = F3(
	function (optionalArgs, args, latexState) {
		var label = $author$project$Internal$ParserTools$unpackString(args);
		var value = _Utils_eq(optionalArgs, _List_Nil) ? label : $author$project$Internal$ParserTools$unpackString(optionalArgs);
		return A3($author$project$Internal$LatexState$setDictionaryItem, 'bibitem:' + label, value, latexState);
	});
var $author$project$Internal$Accumulator$smacroReducer = F5(
	function (name, optionalArgs, args, latexExpression, state) {
		if (name === 'bibitem') {
			return A3($author$project$Internal$StateReducerHelpers$setBibItemXRef, optionalArgs, args, state);
		} else {
			return state;
		}
	});
var $author$project$Internal$Accumulator$latexStateReducerAux = F2(
	function (lexpr, state) {
		switch (lexpr.$) {
			case 6:
				var name = lexpr.a;
				var optionalArgs = lexpr.b;
				var args = lexpr.c;
				return A4($author$project$Internal$Accumulator$macroReducer, name, optionalArgs, args, state);
			case 5:
				var name = lexpr.a;
				var optionalArgs = lexpr.b;
				var args = lexpr.c;
				var latexExpression = lexpr.d;
				return A5($author$project$Internal$Accumulator$smacroReducer, name, optionalArgs, args, latexExpression, state);
			case 9:
				var name = lexpr.a;
				var nArgs = lexpr.b;
				var body = lexpr.c;
				return A3($author$project$Internal$StateReducerHelpers$setMacroDefinition, name, body, state);
			case 7:
				var name = lexpr.a;
				var optonalArgs = lexpr.b;
				var body = lexpr.c;
				return A4($author$project$Internal$Accumulator$envReducer, name, optonalArgs, body, state);
			case 8:
				var list = lexpr.a;
				return A3($elm$core$List$foldr, $author$project$Internal$Accumulator$latexStateReducerAux, state, list);
			default:
				return state;
		}
	});
var $author$project$Internal$Accumulator$latexStateReducer = F2(
	function (list, state) {
		return A3($elm$core$List$foldr, $author$project$Internal$Accumulator$latexStateReducerAux, state, list);
	});
var $author$project$Internal$Accumulator$parseReducer = F2(
	function (inputString, _v0) {
		var latexState = _v0.a;
		var inputList = _v0.b;
		var parsedInput = _Utils_Tuple2(
			inputString,
			$author$project$Internal$Parser$parse(inputString));
		var newLatexState = A2($author$project$Internal$Accumulator$latexStateReducer, parsedInput.b, latexState);
		return _Utils_Tuple2(
			newLatexState,
			_Utils_ap(
				inputList,
				_List_fromArray(
					[parsedInput])));
	});
var $author$project$Internal$Accumulator$parse = F2(
	function (latexState, paragraphs) {
		return A3(
			$elm$core$List$foldl,
			$author$project$Internal$Accumulator$parseReducer,
			_Utils_Tuple2(latexState, _List_Nil),
			paragraphs);
	});
var $author$project$Internal$Accumulator$renderReducer = F3(
	function (renderer, listStringAndLatexExpression, _v0) {
		var state = _v0.a;
		var inputList = _v0.b;
		var newState = A2($author$project$Internal$Accumulator$latexStateReducer, listStringAndLatexExpression.b, state);
		var renderedInput = A2(renderer, newState, listStringAndLatexExpression.b);
		return _Utils_Tuple2(
			newState,
			_Utils_ap(
				inputList,
				_List_fromArray(
					[renderedInput])));
	});
var $author$project$Internal$Accumulator$render = F3(
	function (renderer, latexState, paragraphs) {
		return A3(
			$elm$core$List$foldl,
			$author$project$Internal$Accumulator$renderReducer(renderer),
			_Utils_Tuple2(latexState, _List_Nil),
			paragraphs);
	});
var $author$project$Internal$LatexDiffer$initWithSeed = F5(
	function (seed, parser, renderer, latexState, text) {
		var paragraphs = $author$project$Internal$Paragraph$logicalParagraphify(text);
		var idList = A2($author$project$Internal$LatexDiffer$makeIdListWithSeed, seed, paragraphs);
		var sourceMap = A2($author$project$Internal$SourceMap$generate, paragraphs, idList);
		var _v0 = A2($author$project$Internal$Accumulator$parse, $author$project$Internal$LatexState$emptyLatexState, paragraphs);
		var latexState1 = _v0.a;
		var latexExpressionList = _v0.b;
		var latexState2 = _Utils_update(
			$author$project$Internal$LatexState$emptyLatexState,
			{bw: latexState1.bw, bz: latexState1.bz, bV: latexState1.bV, dE: latexState1.dE, cp: latexState1.cp});
		var _v1 = A3($author$project$Internal$Accumulator$render, renderer, latexState2, latexExpressionList);
		var renderedParagraphs = _v1.b;
		return A6($author$project$Internal$Differ$EditRecord, paragraphs, latexExpressionList, idList, renderedParagraphs, latexState2, sourceMap);
	});
var $author$project$Internal$LatexDiffer$init = F4(
	function (parser, renderer, latexState, text) {
		return A5($author$project$Internal$LatexDiffer$initWithSeed, 0, parser, renderer, latexState, text);
	});
var $author$project$Internal$Differ$isEmpty = function (editRecord) {
	return _Utils_eq(editRecord.aR, _List_Nil) && _Utils_eq(editRecord.al, _List_Nil);
};
var $author$project$Internal$Differ$DiffRecord = F4(
	function (commonInitialSegment, commonTerminalSegment, middleSegmentInSource, middleSegmentInTarget) {
		return {ag: commonInitialSegment, ah: commonTerminalSegment, bX: middleSegmentInSource, Y: middleSegmentInTarget};
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
var $author$project$Internal$Differ$commonInitialSegment = F2(
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
						$author$project$Internal$Differ$commonInitialSegment,
						A2($elm$core$List$drop, 1, x),
						A2($elm$core$List$drop, 1, y))) : _List_Nil;
			}
		}
	});
var $author$project$Internal$Differ$commonTerminalSegmentAux = F3(
	function (cis, x, y) {
		var n = $elm$core$List$length(cis);
		var xx = $elm$core$List$reverse(
			A2($elm$core$List$drop, n, x));
		var yy = $elm$core$List$reverse(
			A2($elm$core$List$drop, n, y));
		return $elm$core$List$reverse(
			A2($author$project$Internal$Differ$commonInitialSegment, xx, yy));
	});
var $author$project$Internal$Differ$dropLast = F2(
	function (k, x) {
		return $elm$core$List$reverse(
			A2(
				$elm$core$List$drop,
				k,
				$elm$core$List$reverse(x)));
	});
var $author$project$Internal$Differ$diff = F2(
	function (u, v) {
		var a = A2($author$project$Internal$Differ$commonInitialSegment, u, v);
		var b_ = A3($author$project$Internal$Differ$commonTerminalSegmentAux, a, u, v);
		var lb = $elm$core$List$length(b_);
		var la = $elm$core$List$length(a);
		var b = _Utils_eq(
			la,
			$elm$core$List$length(u)) ? _List_Nil : b_;
		var x = A2(
			$author$project$Internal$Differ$dropLast,
			lb,
			A2($elm$core$List$drop, la, u));
		var y = A2(
			$author$project$Internal$Differ$dropLast,
			lb,
			A2($elm$core$List$drop, la, v));
		return A4($author$project$Internal$Differ$DiffRecord, a, b, x, y);
	});
var $author$project$Internal$Differ$takeLast = F2(
	function (k, x) {
		return $elm$core$List$reverse(
			A2(
				$elm$core$List$take,
				k,
				$elm$core$List$reverse(x)));
	});
var $author$project$Internal$Differ$differentialCompiler = F4(
	function (parser, renderer, diffRecord, editRecord) {
		var middleSegmentRendered = A2($elm$core$List$map, renderer, diffRecord.Y);
		var middleSegmentParsed = A2(
			$elm$core$List$map,
			function (p) {
				return _Utils_Tuple2(
					p,
					parser(p));
			},
			diffRecord.Y);
		var it = $elm$core$List$length(diffRecord.ah);
		var terminalSegmentParsed = A2($author$project$Internal$Differ$takeLast, it, editRecord.ar);
		var terminalSegmentRendered = A2($author$project$Internal$Differ$takeLast, it, editRecord.al);
		var ii = $elm$core$List$length(diffRecord.ag);
		var initialSegmentParsed = A2($elm$core$List$take, ii, editRecord.ar);
		var initialSegmentRendered = A2($elm$core$List$take, ii, editRecord.al);
		return _Utils_Tuple2(
			_Utils_ap(
				initialSegmentParsed,
				_Utils_ap(middleSegmentParsed, terminalSegmentParsed)),
			_Utils_ap(
				initialSegmentRendered,
				_Utils_ap(middleSegmentRendered, terminalSegmentRendered)));
	});
var $author$project$Internal$Differ$differentialIdList = F3(
	function (seed, diffRecord, editRecord) {
		var nt = $elm$core$List$length(diffRecord.Y);
		var ns = $elm$core$List$length(diffRecord.bX);
		var it = $elm$core$List$length(diffRecord.ah);
		var ii = $elm$core$List$length(diffRecord.ag);
		var idListTerminal = A2($elm$core$List$drop, ii + ns, editRecord.P);
		var idListMiddle = A2(
			$elm$core$List$map,
			$author$project$Internal$Differ$prefixer(seed),
			A2($elm$core$List$range, ii + 1, ii + nt));
		var idListInitial = A2($elm$core$List$take, ii, editRecord.P);
		var idList = _Utils_ap(
			idListInitial,
			_Utils_ap(idListMiddle, idListTerminal));
		var _v0 = (!nt) ? _Utils_Tuple2($elm$core$Maybe$Nothing, $elm$core$Maybe$Nothing) : _Utils_Tuple2(
			$elm$core$Maybe$Just(ii),
			$elm$core$Maybe$Just((ii + nt) - 1));
		var newIdsStart = _v0.a;
		var newIdsEnd = _v0.b;
		return {P: idList, ba: newIdsEnd, bb: newIdsStart};
	});
var $author$project$Internal$Differ$update = F5(
	function (seed, parser, renderer, editRecord, text) {
		var newParagraphs = $author$project$Internal$Paragraph$logicalParagraphify(text);
		var diffRecord = A2($author$project$Internal$Differ$diff, editRecord.aR, newParagraphs);
		var p = A3($author$project$Internal$Differ$differentialIdList, seed, diffRecord, editRecord);
		var sourceMap = A2($author$project$Internal$SourceMap$generate, newParagraphs, p.P);
		var _v0 = A4($author$project$Internal$Differ$differentialCompiler, parser, renderer, diffRecord, editRecord);
		var astList = _v0.a;
		var newRenderedParagraphs = _v0.b;
		return A6($author$project$Internal$Differ$EditRecord, newParagraphs, astList, p.P, newRenderedParagraphs, editRecord.bR, sourceMap);
	});
var $author$project$Internal$LatexDiffer$update = F6(
	function (seed, parser, renderLatexExpression, renderString, editRecord, source) {
		return $author$project$Internal$Differ$isEmpty(editRecord) ? A4($author$project$Internal$LatexDiffer$init, parser, renderLatexExpression, $author$project$Internal$LatexState$emptyLatexState, source) : A5(
			$author$project$Internal$Differ$update,
			seed,
			parser,
			renderString(editRecord.bR),
			editRecord,
			source);
	});
var $author$project$MiniLatex$Edit$init = F2(
	function (version, source) {
		return A6(
			$author$project$Internal$LatexDiffer$update,
			version,
			$author$project$Internal$Parser$parse,
			$author$project$Internal$Render$renderLatexList(source),
			$author$project$Internal$Render$renderString,
			$author$project$Internal$Differ$emptyHtmlMsgRecord,
			source);
	});
var $elm$core$Platform$Cmd$batch = _Platform_batch;
var $elm$core$Platform$Cmd$none = $elm$core$Platform$Cmd$batch(_List_Nil);
var $author$project$Main$LaTeXMsg = function (a) {
	return {$: 12, a: a};
};
var $author$project$StringsV1$macros = '\\newcommand{\\bra}{\\langle}';
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
var $author$project$MiniLatex$emptyLatexState = $author$project$Internal$LatexState$emptyLatexState;
var $author$project$MiniLatex$Edit$IDClicked = $elm$core$Basics$identity;
var $elm$virtual_dom$VirtualDom$keyedNode = function (tag) {
	return _VirtualDom_keyedNode(
		_VirtualDom_noScript(tag));
};
var $elm$html$Html$Keyed$node = $elm$virtual_dom$VirtualDom$keyedNode;
var $elm$virtual_dom$VirtualDom$Normal = function (a) {
	return {$: 0, a: a};
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
var $author$project$MiniLatex$Edit$highlightColor = '#d7d6ff';
var $author$project$MiniLatex$Edit$selectedStyle = F2(
	function (targetId, currentId) {
		var _v0 = _Utils_eq('select:' + targetId, currentId);
		if (_v0) {
			return A2($elm$html$Html$Attributes$style, 'background-color', $author$project$MiniLatex$Edit$highlightColor);
		} else {
			return A2($elm$html$Html$Attributes$style, 'background-color', '#fff');
		}
	});
var $author$project$MiniLatex$Edit$get = F2(
	function (selectedId, editRecord) {
		var paragraphs = editRecord.al;
		var mark = function (id_) {
			return _Utils_eq(selectedId, id_) ? ('select:' + id_) : ((A2($elm$core$String$left, 7, id_) === 'selected:') ? A2($elm$core$String$dropLeft, 7, id_) : id_);
		};
		var keyedNode = F2(
			function (id, para) {
				return A3(
					$elm$html$Html$Keyed$node,
					'p',
					_List_fromArray(
						[
							$elm$html$Html$Attributes$id(id),
							A2($author$project$MiniLatex$Edit$selectedStyle, selectedId, id),
							$elm$html$Html$Events$onClick(id),
							A2($elm$html$Html$Attributes$style, 'margin-bottom', '10px')
						]),
					_List_fromArray(
						[
							_Utils_Tuple2(id, para)
						]));
			});
		var ids = A2($elm$core$List$map, mark, editRecord.P);
		return A3($elm$core$List$map2, keyedNode, ids, paragraphs);
	});
var $author$project$MiniLatex$render = F2(
	function (selectedId, source) {
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					A2($elm$html$Html$Attributes$attribute, 'id', '__RENDERED_TEXT__')
				]),
			A2(
				$author$project$MiniLatex$Edit$get,
				selectedId,
				A4(
					$author$project$Internal$LatexDiffer$init,
					$author$project$Internal$Parser$parse,
					$author$project$Internal$Render$renderLatexList(source),
					$author$project$MiniLatex$emptyLatexState,
					source)));
	});
var $author$project$Main$render = F2(
	function (selectedId, sourceText_) {
		var macroDefinitions = $author$project$Main$initialMacroText;
		return A2(
			$elm$html$Html$map,
			$author$project$Main$LaTeXMsg,
			A2($author$project$MiniLatex$render, selectedId, sourceText_));
	});
var $author$project$Renzo$text = '\nLong ago, we learned that\n\n$$\n\\int_0^1 x^n dx = \\frac{1}{n+1}\n$$\n\nToday we will learn about commutative diagrams:\n\n\n\\begin{CD}\nA @>>> B @>{\\alpha}>> C \\\\\n@VVV @VVV @VVV \\\\\nD @>>> E @>{\\beta}>> F\n\\end{CD}\n\n';
var $author$project$Main$sourceText = $author$project$Renzo$text;
var $author$project$Main$init = function (flags) {
	var editRecord = A2($author$project$MiniLatex$Edit$init, flags.y, $author$project$Main$sourceText);
	var model = {
		h: 0,
		ai: $jinjor$elm_debounce$Debounce$init,
		E: editRecord,
		bM: '',
		aO: _List_Nil,
		aP: '',
		aQ: 'No message yet ...',
		I: A2($author$project$Main$render, '', $author$project$Main$sourceText),
		y: flags.y,
		T: '',
		K: $author$project$Main$sourceText
	};
	return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
};
var $elm$json$Json$Decode$int = _Json_decodeInt;
var $elm$core$Platform$Sub$batch = _Platform_batch;
var $elm$core$Platform$Sub$none = $elm$core$Platform$Sub$batch(_List_Nil);
var $author$project$Main$subscriptions = function (model) {
	return $elm$core$Platform$Sub$none;
};
var $author$project$Main$NewSeed = function (a) {
	return {$: 7, a: a};
};
var $author$project$Main$DebounceMsg = function (a) {
	return {$: 5, a: a};
};
var $jinjor$elm_debounce$Debounce$Later = function (a) {
	return {$: 2, a: a};
};
var $jinjor$elm_debounce$Debounce$later = $jinjor$elm_debounce$Debounce$Later;
var $author$project$Main$debounceConfig = {
	ec: $jinjor$elm_debounce$Debounce$later(250),
	ey: $author$project$Main$DebounceMsg
};
var $elm$random$Random$Generate = $elm$core$Basics$identity;
var $elm$random$Random$Seed = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
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
	return {$: 0, a: a};
};
var $elm$time$Time$Offset = function (a) {
	return {$: 1, a: a};
};
var $elm$time$Time$Zone = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $elm$time$Time$customZone = $elm$time$Time$Zone;
var $elm$time$Time$Posix = $elm$core$Basics$identity;
var $elm$time$Time$millisToPosix = $elm$core$Basics$identity;
var $elm$time$Time$now = _Time_now($elm$time$Time$millisToPosix);
var $elm$time$Time$posixToMillis = function (_v0) {
	var millis = _v0;
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
		var generator = _v0;
		return generator(seed);
	});
var $elm$random$Random$onEffects = F3(
	function (router, commands, seed) {
		if (!commands.b) {
			return $elm$core$Task$succeed(seed);
		} else {
			var generator = commands.a;
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
var $elm$random$Random$Generator = $elm$core$Basics$identity;
var $elm$random$Random$map = F2(
	function (func, _v0) {
		var genA = _v0;
		return function (seed0) {
			var _v1 = genA(seed0);
			var a = _v1.a;
			var seed1 = _v1.b;
			return _Utils_Tuple2(
				func(a),
				seed1);
		};
	});
var $elm$random$Random$cmdMap = F2(
	function (func, _v0) {
		var generator = _v0;
		return A2($elm$random$Random$map, func, generator);
	});
_Platform_effectManagers['Random'] = _Platform_createManager($elm$random$Random$init, $elm$random$Random$onEffects, $elm$random$Random$onSelfMsg, $elm$random$Random$cmdMap);
var $elm$random$Random$command = _Platform_leaf('Random');
var $elm$random$Random$generate = F2(
	function (tagger, generator) {
		return $elm$random$Random$command(
			A2($elm$random$Random$map, tagger, generator));
	});
var $elm$core$Bitwise$xor = _Bitwise_xor;
var $elm$random$Random$peel = function (_v0) {
	var state = _v0.a;
	var word = (state ^ (state >>> ((state >>> 28) + 4))) * 277803737;
	return ((word >>> 22) ^ word) >>> 0;
};
var $elm$random$Random$int = F2(
	function (a, b) {
		return function (seed0) {
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
		};
	});
var $author$project$Main$prependMacros = F2(
	function (macros_, sourceText_) {
		return '$$\n' + ($author$project$Main$normalize(macros_) + ('\n$$\n\n' + sourceText_));
	});
var $jinjor$elm_debounce$Debounce$Flush = function (a) {
	return {$: 1, a: a};
};
var $jinjor$elm_debounce$Debounce$SendIfLengthNotChangedFrom = function (a) {
	return {$: 2, a: a};
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
	var input = _v0.t;
	return $elm$core$List$length(input);
};
var $elm$core$Platform$Cmd$map = _Platform_map;
var $jinjor$elm_debounce$Debounce$push = F3(
	function (config, a, _v0) {
		var d = _v0;
		var newDebounce = _Utils_update(
			d,
			{
				t: A2($elm$core$List$cons, a, d.t)
			});
		var selfCmd = function () {
			var _v1 = config.ec;
			switch (_v1.$) {
				case 0:
					var offset = _v1.a;
					return d.au ? $elm$core$Platform$Cmd$none : A2(
						$jinjor$elm_debounce$Debounce$delayCmd,
						offset,
						$jinjor$elm_debounce$Debounce$Flush($elm$core$Maybe$Nothing));
				case 1:
					var offset = _v1.a;
					var delay = _v1.b;
					return d.au ? $elm$core$Platform$Cmd$none : A2(
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
			A2($elm$core$Platform$Cmd$map, config.ey, selfCmd));
	});
var $author$project$Main$renderFromEditRecord = F3(
	function (selectedId, counter, editRecord) {
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
					A2($author$project$MiniLatex$Edit$get, selectedId, editRecord))));
	});
var $author$project$Main$Render = function (a) {
	return {$: 2, a: a};
};
var $author$project$Main$render_ = function (str) {
	return A2(
		$elm$core$Task$perform,
		$author$project$Main$Render,
		$elm$core$Task$succeed(str));
};
var $author$project$Main$NoOp = {$: 0};
var $elm$core$Task$onError = _Scheduler_onError;
var $elm$core$Task$attempt = F2(
	function (resultToMessage, task) {
		return $elm$core$Task$command(
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
					task)));
	});
var $elm$browser$Browser$Dom$setViewportOf = _Browser_setViewportOf;
var $author$project$Main$setViewPortForSelectedLine = F2(
	function (element, viewport) {
		var y = ((viewport.eC.cA + element.bA.cA) - element.bA.a4) - 100;
		return A2(
			$elm$core$Task$attempt,
			function (_v0) {
				return $author$project$Main$NoOp;
			},
			A3($elm$browser$Browser$Dom$setViewportOf, '__RENDERED_TEXT__', 0, y));
	});
var $elm$file$File$Download$string = F3(
	function (name, mime, content) {
		return A2(
			$elm$core$Task$perform,
			$elm$core$Basics$never,
			A3(_File_download, name, mime, content));
	});
var $jinjor$elm_debounce$Debounce$takeLast = F3(
	function (send, head, tail) {
		return _Utils_Tuple2(
			_List_Nil,
			send(head));
	});
var $author$project$MiniLatex$Export$fixBadChars = function (str) {
	return A3(
		$elm$core$String$replace,
		'#',
		'\\#',
		A3($elm$core$String$replace, '_', '\\_', str));
};
var $author$project$MiniLatex$Export$getElement = F2(
	function (k, list) {
		return A2(
			$elm$core$Maybe$withDefault,
			$author$project$Internal$Parser$LXString('xxx'),
			A2($author$project$Internal$Utility$getAt, k, list));
	});
var $author$project$MiniLatex$Export$getExportUrl = function (url) {
	var parts = A2($elm$core$String$split, '/', url);
	var n = $elm$core$List$length(parts);
	var lastPart = A2(
		$elm$core$Maybe$withDefault,
		'xxx',
		$elm$core$List$head(
			A2($elm$core$List$drop, n - 1, parts)));
	return 'image/' + lastPart;
};
var $author$project$MiniLatex$Export$imageAlignCenter = F3(
	function (exportUrl, label, width) {
		return '\\imagecenter{' + (exportUrl + ('}{' + (label + ('}{' + (width + '}')))));
	});
var $author$project$MiniLatex$Export$imageFloatLeft = F3(
	function (exportUrl, label, width) {
		return '\\imagefloatleft{' + (exportUrl + ('}{' + (label + ('}{' + (width + '}')))));
	});
var $author$project$MiniLatex$Export$imageFloatRight = F3(
	function (exportUrl, label, width) {
		return '\\imagefloatright{' + (exportUrl + ('}{' + (label + ('}{' + (width + '}')))));
	});
var $author$project$MiniLatex$Export$renderComment = function (str) {
	return '% ' + (str + '\n');
};
var $author$project$Internal$ParserTools$addToNumberAsString = F2(
	function (k, str) {
		var _v0 = $elm$core$String$toInt(str);
		if (_v0.$ === 1) {
			return str;
		} else {
			var n = _v0.a;
			return $elm$core$String$fromInt(n + k);
		}
	});
var $author$project$Internal$ParserTools$transformLXString = F2(
	function (f, latexExpr) {
		if (!latexExpr.$) {
			var str = latexExpr.a;
			return $author$project$Internal$Parser$LXString(
				f(str));
		} else {
			return latexExpr;
		}
	});
var $author$project$Internal$ParserTools$transformLXList = F2(
	function (f, latexExpr) {
		if (latexExpr.$ === 8) {
			var list = latexExpr.a;
			return $author$project$Internal$Parser$LatexList(
				A2(
					$elm$core$List$map,
					$author$project$Internal$ParserTools$transformLXString(f),
					list));
		} else {
			return latexExpr;
		}
	});
var $author$project$Internal$ParserTools$decrementSetCounterArgs = function (args) {
	return A2(
		$elm$core$List$map,
		$author$project$Internal$ParserTools$transformLXList(
			$author$project$Internal$ParserTools$addToNumberAsString(-1)),
		args);
};
var $author$project$Internal$ParserTools$getDecrementedSetCounterArg = function (args) {
	return A2(
		$elm$core$Maybe$map,
		$author$project$Internal$ParserTools$getString,
		A2(
			$elm$core$Maybe$andThen,
			$elm$core$List$head,
			A2(
				$elm$core$Maybe$map,
				$author$project$Internal$ParserTools$latexList2List,
				A2(
					$author$project$Internal$Utility$getAt,
					1,
					$author$project$Internal$ParserTools$decrementSetCounterArgs(args)))));
};
var $author$project$MiniLatex$Export$renderSetCounter = F2(
	function (optArgs, args) {
		var argValue = A2(
			$elm$core$Maybe$withDefault,
			'0',
			$author$project$Internal$ParserTools$getDecrementedSetCounterArg(args));
		return ' \\setcounter{section}' + ('{' + (argValue + '}'));
	});
var $author$project$MiniLatex$Export$renderSvg = function (body) {
	return 'Cannot yet render Svg images; convert to some other format, e.g., png';
};
var $author$project$MiniLatex$Export$renderTableOfContents = F2(
	function (optArgs, args) {
		return '\\parskip0pt\n\\tableofcontents\n\\parskip5pt';
	});
var $author$project$MiniLatex$Export$renderUseForWeb = function (body) {
	return '';
};
var $author$project$MiniLatex$Export$macroRenderer = function (name) {
	var _v6 = A2(
		$elm$core$Dict$get,
		name,
		$author$project$MiniLatex$Export$cyclic$renderMacroDict());
	if (!_v6.$) {
		var f = _v6.a;
		return f;
	} else {
		return $author$project$MiniLatex$Export$reproduceMacro(name);
	}
};
var $author$project$MiniLatex$Export$render = function (latexExpression) {
	switch (latexExpression.$) {
		case 1:
			var str = latexExpression.a;
			return $author$project$MiniLatex$Export$renderComment(str);
		case 6:
			var name = latexExpression.a;
			var optArgs = latexExpression.b;
			var args = latexExpression.c;
			return A3($author$project$MiniLatex$Export$renderMacro, name, optArgs, args);
		case 5:
			var name = latexExpression.a;
			var optArgs = latexExpression.b;
			var args = latexExpression.c;
			var le = latexExpression.d;
			return A4($author$project$MiniLatex$Export$renderSMacro, name, optArgs, args, le);
		case 2:
			var level = latexExpression.a;
			var latexExpression_ = latexExpression.b;
			return A2($author$project$MiniLatex$Export$renderItem, level, latexExpression_);
		case 3:
			var str = latexExpression.a;
			return ' $' + (str + '$ ');
		case 4:
			var str = latexExpression.a;
			return '$$' + (str + '$$\n');
		case 7:
			var name = latexExpression.a;
			var args = latexExpression.b;
			var body = latexExpression.c;
			return A3($author$project$MiniLatex$Export$renderEnvironment, name, args, body);
		case 8:
			var args = latexExpression.a;
			return $author$project$MiniLatex$Export$renderLatexList(args);
		case 0:
			var str = latexExpression.a;
			return str;
		case 9:
			return '';
		default:
			var error = latexExpression.a;
			return A2(
				$elm$core$String$join,
				'; ',
				A2($elm$core$List$map, $author$project$Internal$ErrorMessages2$renderError, error));
	}
};
var $author$project$MiniLatex$Export$renderArg = F2(
	function (k, args) {
		return $elm$core$String$trim(
			$author$project$MiniLatex$Export$render(
				A2($author$project$MiniLatex$Export$getElement, k, args)));
	});
var $author$project$MiniLatex$Export$renderArgList = function (args) {
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
				$author$project$MiniLatex$Export$fixBadChars,
				A2($elm$core$List$map, $author$project$MiniLatex$Export$render, args))));
};
var $author$project$MiniLatex$Export$renderCleanedArgList = function (args) {
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
				$author$project$MiniLatex$Export$fixBadChars,
				A2($elm$core$List$map, $author$project$MiniLatex$Export$render, args))));
};
var $author$project$MiniLatex$Export$renderCode = F2(
	function (optArgs, args) {
		return ' \\code' + ($author$project$MiniLatex$Export$renderOptArgList(optArgs) + $author$project$MiniLatex$Export$renderCleanedArgList(args));
	});
var $author$project$MiniLatex$Export$renderDefaultEnvironment = F3(
	function (name, args, body) {
		var slimBody = $elm$core$String$trim(
			$author$project$MiniLatex$Export$render(body));
		return '\\begin{' + (name + ('}' + ($author$project$MiniLatex$Export$renderArgList(args) + ('\n' + (slimBody + ('\n\\end{' + (name + '}\n')))))));
	});
var $author$project$MiniLatex$Export$renderEnvironment = F3(
	function (name, args, body) {
		var _v4 = A2(
			$elm$core$Dict$get,
			name,
			$author$project$MiniLatex$Export$cyclic$renderEnvironmentDict());
		if (!_v4.$) {
			var f = _v4.a;
			return A2(f, args, body);
		} else {
			return A3($author$project$MiniLatex$Export$renderDefaultEnvironment, name, args, body);
		}
	});
var $author$project$MiniLatex$Export$renderHref = F2(
	function (optArgs, args) {
		return ' \\href' + $author$project$MiniLatex$Export$renderSpecialArgList(args);
	});
var $author$project$MiniLatex$Export$renderImage = function (args) {
	var url = A2($author$project$MiniLatex$Export$renderArg, 0, args);
	var label = A2($author$project$MiniLatex$Export$renderArg, 1, args);
	var exportUrl = $author$project$MiniLatex$Export$getExportUrl(url);
	var attributeString = A2($author$project$MiniLatex$Export$renderArg, 2, args);
	var imageAttrs = $author$project$Internal$Image$parseImageAttributes(attributeString);
	var width_ = function (x) {
		return 4.5 * x;
	}(imageAttrs.eD);
	var width = $elm$core$String$fromFloat((3.0 * width_) / 1400.0) + 'in';
	var _v3 = _Utils_Tuple2(imageAttrs.dh, imageAttrs.cE);
	switch (_v3.a) {
		case 'left':
			return A3($author$project$MiniLatex$Export$imageFloatLeft, exportUrl, label, width);
		case 'right':
			return A3($author$project$MiniLatex$Export$imageFloatRight, exportUrl, label, width);
		default:
			if (_v3.b === 'center') {
				return A3($author$project$MiniLatex$Export$imageAlignCenter, exportUrl, label, width);
			} else {
				return A3($author$project$MiniLatex$Export$imageAlignCenter, exportUrl, label, width);
			}
	}
};
var $author$project$MiniLatex$Export$renderItem = F2(
	function (level, latexExpression) {
		return '\\item ' + ($author$project$MiniLatex$Export$render(latexExpression) + '\n\n');
	});
var $author$project$MiniLatex$Export$renderLatexList = function (args) {
	return $author$project$Internal$JoinStrings$joinList(
		A2($elm$core$List$map, $author$project$MiniLatex$Export$render, args));
};
var $author$project$MiniLatex$Export$renderListing = function (body) {
	var text = $author$project$MiniLatex$Export$render(body);
	return '\\begin{verbatim}\n' + ($author$project$Internal$Utility$addLineNumbers(text) + '\n\\end{verbatim}');
};
var $author$project$MiniLatex$Export$renderMacro = F3(
	function (name, optArgs, args) {
		return A3($author$project$MiniLatex$Export$macroRenderer, name, optArgs, args);
	});
var $author$project$MiniLatex$Export$renderOptArgList = function (args) {
	return A2(
		$elm$core$String$join,
		'',
		A2(
			$elm$core$List$map,
			function (x) {
				return '[' + (x + ']');
			},
			A2($elm$core$List$map, $author$project$MiniLatex$Export$render, args)));
};
var $author$project$MiniLatex$Export$renderRow = function (expr) {
	if (expr.$ === 8) {
		var cells = expr.a;
		return function (x) {
			return x + ' \\\\';
		}(
			A2(
				$elm$core$String$join,
				' & ',
				A2($elm$core$List$map, $author$project$MiniLatex$Export$render, cells)));
	} else {
		return 'renderRow: error';
	}
};
var $author$project$MiniLatex$Export$renderSMacro = F4(
	function (name, optArgs, args, le) {
		return ' \\' + (name + ($author$project$MiniLatex$Export$renderOptArgList(optArgs) + ($author$project$MiniLatex$Export$renderArgList(args) + (' ' + $author$project$MiniLatex$Export$render(le)))));
	});
var $author$project$MiniLatex$Export$renderSpecialArgList = function (args) {
	var tail = $elm$core$List$tail(args);
	var renderedTail = A2($elm$core$Maybe$map, $author$project$MiniLatex$Export$renderCleanedArgList, tail);
	var head = $elm$core$List$head(args);
	var renderedHead = A2($elm$core$Maybe$map, $author$project$MiniLatex$Export$render, head);
	var _v1 = _Utils_Tuple2(renderedHead, renderedTail);
	if ((!_v1.a.$) && (!_v1.b.$)) {
		var h = _v1.a.a;
		var t = _v1.b.a;
		return '{' + (h + ('}' + t));
	} else {
		return '';
	}
};
var $author$project$MiniLatex$Export$renderTabular = F2(
	function (args, body) {
		var format = A2($author$project$MiniLatex$Export$renderArg, 0, args);
		if (body.$ === 8) {
			var rows = body.a;
			return function (x) {
				return '\\begin{tabular}{' + (format + ('}\n' + (x + '\n\\end{tabular}')));
			}(
				A2(
					$elm$core$String$join,
					'\n',
					A2($elm$core$List$map, $author$project$MiniLatex$Export$renderRow, rows)));
		} else {
			return 'renderTabular: error';
		}
	});
var $author$project$MiniLatex$Export$renderTheBibliography = function (body) {
	return '\\begin{thebibliography}{abc}\n' + ($author$project$MiniLatex$Export$render(body) + '\n\\end{thebibliography}');
};
var $author$project$MiniLatex$Export$reproduceMacro = F3(
	function (name, optArgs, args) {
		return ' \\' + (name + ($author$project$MiniLatex$Export$renderOptArgList(optArgs) + $author$project$MiniLatex$Export$renderArgList(args)));
	});
function $author$project$MiniLatex$Export$cyclic$renderEnvironmentDict() {
	return $elm$core$Dict$fromList(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'listing',
				F2(
					function (args, body) {
						return $author$project$MiniLatex$Export$renderListing(body);
					})),
				_Utils_Tuple2(
				'useforweb',
				F2(
					function (args, body) {
						return $author$project$MiniLatex$Export$renderUseForWeb(body);
					})),
				_Utils_Tuple2(
				'thebibliography',
				F2(
					function (args, body) {
						return $author$project$MiniLatex$Export$renderTheBibliography(body);
					})),
				_Utils_Tuple2(
				'tabular',
				F2(
					function (args, body) {
						return A2($author$project$MiniLatex$Export$renderTabular, args, body);
					})),
				_Utils_Tuple2(
				'mathmacro',
				F2(
					function (args, body) {
						return $author$project$MiniLatex$Export$render(body);
					})),
				_Utils_Tuple2(
				'textmacro',
				F2(
					function (args, body) {
						return $author$project$MiniLatex$Export$render(body);
					})),
				_Utils_Tuple2(
				'svg',
				F2(
					function (args, body) {
						return $author$project$MiniLatex$Export$renderSvg(body);
					}))
			]));
}
function $author$project$MiniLatex$Export$cyclic$renderMacroDict() {
	return $elm$core$Dict$fromList(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'image',
				F2(
					function (x, y) {
						return $author$project$MiniLatex$Export$renderImage(y);
					})),
				_Utils_Tuple2(
				'code',
				F2(
					function (x, y) {
						return A2($author$project$MiniLatex$Export$renderCode, x, y);
					})),
				_Utils_Tuple2(
				'href',
				F2(
					function (x, y) {
						return A2($author$project$MiniLatex$Export$renderHref, x, y);
					})),
				_Utils_Tuple2(
				'mdash',
				F2(
					function (x, y) {
						return '---';
					})),
				_Utils_Tuple2(
				'ndash',
				F2(
					function (x, y) {
						return '--';
					})),
				_Utils_Tuple2(
				'setcounter',
				F2(
					function (x, y) {
						return A2($author$project$MiniLatex$Export$renderSetCounter, x, y);
					})),
				_Utils_Tuple2(
				'tableofcontents',
				F2(
					function (x, y) {
						return A2($author$project$MiniLatex$Export$renderTableOfContents, x, y);
					}))
			]));
}
var $author$project$MiniLatex$Export$renderEnvironmentDict = $author$project$MiniLatex$Export$cyclic$renderEnvironmentDict();
$author$project$MiniLatex$Export$cyclic$renderEnvironmentDict = function () {
	return $author$project$MiniLatex$Export$renderEnvironmentDict;
};
var $author$project$MiniLatex$Export$renderMacroDict = $author$project$MiniLatex$Export$cyclic$renderMacroDict();
$author$project$MiniLatex$Export$cyclic$renderMacroDict = function () {
	return $author$project$MiniLatex$Export$renderMacroDict;
};
var $author$project$Internal$Source$texPrefix = '\n\\documentclass[11pt, oneside]{article}\n\n%% Packages\n\\usepackage{geometry}\n\\geometry{letterpaper}\n\\usepackage{changepage}   % for the adjustwidth environment\n\\usepackage{graphicx}\n\\usepackage{wrapfig}\n\\graphicspath{ {images/} }\n\\usepackage{amssymb}\n\\usepackage{amsmath}\n\\usepackage{amscd}\n\\usepackage{hyperref}\n\\hypersetup{\n    colorlinks=true,\n    linkcolor=blue,\n    filecolor=magenta,\n    urlcolor=blue,\n}\n\\usepackage{xcolor}\n\\usepackage{soul}\n\n\n%% Commands\n\\newcommand{\\code}[1]{{\\tt #1}}\n\\newcommand{\\ellie}[1]{\\href{#1}{Link to Ellie}}\n% \\newcommand{\\image}[3]{\\includegraphics[width=3cm]{#1}}\n\n\\newcommand{\\imagecenter}[3]{{\n   \\medskip\n   \\begin{figure}\n   \\centering\n    \\includegraphics[width=12cm,height=12cm,keepaspectratio]{#1}\n    \\vglue0pt \\par {#2}\n    \\end{figure}\n    \\medskip\n}}\n\n\\newcommand{\\imagefloatright}[3]{\n    \\begin{wrapfigure}{R}{0.30\\textwidth}\n    \\includegraphics[width=0.30\\textwidth]{#1}\n    \\caption{#2}\n    \\end{wrapfigure}\n}\n\n\\newcommand{\\imagefloatleft}[3]{\n    \\begin{wrapfigure}{L}{0.3-\\textwidth}\n    \\includegraphics[width=0.30\\textwidth]{#1}\n    \\caption{#2}\n    \\end{wrapfigure}\n}\n\n\\newcommand{\\italic}[1]{{\\sl #1}}\n\\newcommand{\\strong}[1]{{\\bf #1}}\n\\newcommand{\\subheading}[1]{{\\bf #1}\\par}\n\\newcommand{\\xlink}[2]{\\href{{https://minilatex.lamdera.app/g/#1}}{#2}}\n\\newcommand{\\red}[1]{\\textcolor{red}{#1}}\n\\newcommand{\\blue}[1]{\\textcolor{blue}{#1}}\n\\newcommand{\\remote}[1]{\\textcolor{red}{#1}}\n\\newcommand{\\local}[1]{\\textcolor{blue}{#1}}\n\\newcommand{\\highlight}[1]{\\hl{#1}}\n\\newcommand{\\note}[2]{\\textcolor{blue}{#1}{\\hl{#1}}}\n\\newcommand{\\strike}[1]{\\st{#1}}\n\\newcommand{\\term}[1]{{\\sl #1}}\n\\newtheorem{remark}{Remark}\n\\newcommand{\\comment}[1]{}\n\\newcommand{\\innertableofcontents}{}\n\n%% Theorems\n\\newtheorem{theorem}{Theorem}\n\\newtheorem{axiom}{Axiom}\n\\newtheorem{lemma}{Lemma}\n\\newtheorem{proposition}{Proposition}\n\\newtheorem{corollary}{Corollary}\n\\newtheorem{definition}{Definition}\n\\newtheorem{example}{Example}\n\\newtheorem{exercise}{Exercise}\n\\newtheorem{problem}{Problem}\n\\newtheorem{exercises}{Exercises}\n\\newcommand{\\bs}[1]{$\\backslash$#1}\n\\newcommand{\\texarg}[1]{\\{#1\\}}\n\n%% Environments\n\\renewenvironment{quotation}\n  {\\begin{adjustwidth}{2cm}{} \\footnotesize}\n  {\\end{adjustwidth}}\n\n% Spacing\n\\parindent0pt\n\\parskip5pt\n\n\\begin{document}\n\n\n';
var $author$project$Internal$Source$texSuffix = '\n\n\\end{document}\n';
var $elm_community$maybe_extra$Maybe$Extra$cons = F2(
	function (item, list) {
		if (!item.$) {
			var v = item.a;
			return A2($elm$core$List$cons, v, list);
		} else {
			return list;
		}
	});
var $elm_community$maybe_extra$Maybe$Extra$values = A2($elm$core$List$foldr, $elm_community$maybe_extra$Maybe$Extra$cons, _List_Nil);
var $author$project$MiniLatex$Export$toLaTeXWithImages = function (str) {
	var parsand = A2(
		$elm$core$List$map,
		$author$project$Internal$Parser$parse,
		$author$project$Internal$Paragraph$logicalParagraphify(str));
	var latex_ = A3(
		$elm$core$List$foldl,
		F2(
			function (renderedElement, acc) {
				return acc + ('\n' + renderedElement);
			}),
		'',
		A2($elm$core$List$map, $author$project$MiniLatex$Export$renderLatexList, parsand));
	var imageUrlList = $elm_community$maybe_extra$Maybe$Extra$values(
		A2(
			$elm$core$List$map,
			$author$project$Internal$ParserTools$macroValue_('image'),
			parsand));
	return _Utils_Tuple2(
		A2(
			$elm$core$String$join,
			'\n',
			_List_fromArray(
				[$author$project$Internal$Source$texPrefix, latex_, $author$project$Internal$Source$texSuffix])),
		imageUrlList);
};
var $jinjor$elm_debounce$Debounce$update = F4(
	function (config, send, msg, _v0) {
		var d = _v0;
		switch (msg.$) {
			case 0:
				return _Utils_Tuple2(d, $elm$core$Platform$Cmd$none);
			case 1:
				var tryAgainAfter = msg.a;
				var _v2 = d.t;
				if (_v2.b) {
					var head = _v2.a;
					var tail = _v2.b;
					var selfCmd = function () {
						if (!tryAgainAfter.$) {
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
						_Utils_update(
							d,
							{t: input, au: true}),
						$elm$core$Platform$Cmd$batch(
							_List_fromArray(
								[
									sendCmd,
									A2($elm$core$Platform$Cmd$map, config.ey, selfCmd)
								])));
				} else {
					return _Utils_Tuple2(
						_Utils_update(
							d,
							{au: false}),
						$elm$core$Platform$Cmd$none);
				}
			default:
				var lastInputLength = msg.a;
				var _v5 = _Utils_Tuple2(
					_Utils_cmp(
						$elm$core$List$length(d.t),
						lastInputLength) < 1,
					d.t);
				if (_v5.a && _v5.b.b) {
					var _v6 = _v5.b;
					var head = _v6.a;
					var tail = _v6.b;
					var _v7 = A2(send, head, tail);
					var input = _v7.a;
					var cmd = _v7.b;
					return _Utils_Tuple2(
						_Utils_update(
							d,
							{t: input}),
						cmd);
				} else {
					return _Utils_Tuple2(d, $elm$core$Platform$Cmd$none);
				}
		}
	});
var $author$project$MiniLatex$Edit$update = F3(
	function (version, source, editRecord) {
		return A6(
			$author$project$Internal$LatexDiffer$update,
			version,
			$author$project$Internal$Parser$parse,
			$author$project$Internal$Render$renderLatexList(source),
			$author$project$Internal$Render$renderString,
			editRecord,
			source);
	});
var $author$project$Main$update = F2(
	function (msg, model) {
		switch (msg.$) {
			case 0:
				return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
			case 3:
				var str = msg.a;
				var _v1 = A3($jinjor$elm_debounce$Debounce$push, $author$project$Main$debounceConfig, str, model.ai);
				var debounce = _v1.a;
				var cmd = _v1.b;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{ai: debounce, K: str}),
					cmd);
			case 5:
				var msg_ = msg.a;
				var _v2 = A4(
					$jinjor$elm_debounce$Debounce$update,
					$author$project$Main$debounceConfig,
					$jinjor$elm_debounce$Debounce$takeLast($author$project$Main$render_),
					msg_,
					model.ai);
				var debounce = _v2.a;
				var cmd = _v2.b;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{ai: debounce}),
					cmd);
			case 4:
				var str = msg.a;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{aP: str}),
					$elm$core$Platform$Cmd$none);
			case 2:
				var str = msg.a;
				var newEditRecord = A3($author$project$MiniLatex$Edit$update, model.y, str, model.E);
				var n = $elm$core$String$fromInt(model.h);
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							h: model.h + 2,
							E: newEditRecord,
							I: A3($author$project$Main$renderFromEditRecord, model.T, model.h, newEditRecord)
						}),
					A2(
						$elm$random$Random$generate,
						$author$project$Main$NewSeed,
						A2($elm$random$Random$int, 1, 10000)));
			case 13:
				var _v3 = $author$project$MiniLatex$Export$toLaTeXWithImages(model.K);
				var contentForExport = _v3.a;
				var images = _v3.b;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{aO: images}),
					A3($elm$file$File$Download$string, 'mydocument.tex', 'text/x-tex', contentForExport));
			case 6:
				return _Utils_Tuple2(
					model,
					A2(
						$elm$random$Random$generate,
						$author$project$Main$NewSeed,
						A2($elm$random$Random$int, 1, 10000)));
			case 7:
				var newSeed = msg.a;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{y: newSeed}),
					$elm$core$Platform$Cmd$none);
			case 1:
				var editRecord = A2($author$project$MiniLatex$Edit$init, 0, '');
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							h: model.h + 1,
							E: editRecord,
							I: A3($author$project$Main$renderFromEditRecord, model.T, model.h, editRecord),
							K: ''
						}),
					$elm$core$Platform$Cmd$none);
			case 8:
				var editRecord = A2($author$project$MiniLatex$Edit$init, model.y, model.K);
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							h: model.h + 1,
							E: editRecord,
							I: A3($author$project$Main$renderFromEditRecord, model.T, model.h, editRecord)
						}),
					$elm$core$Platform$Cmd$none);
			case 9:
				var editRecord = A2(
					$author$project$MiniLatex$Edit$init,
					model.y,
					A2($author$project$Main$prependMacros, $author$project$Main$initialMacroText, $author$project$Main$sourceText));
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							h: model.h + 1,
							E: editRecord,
							I: A3($author$project$Main$renderFromEditRecord, model.T, model.h, editRecord),
							K: $author$project$Main$sourceText
						}),
					$elm$core$Platform$Cmd$none);
			case 10:
				var editRecord = A2(
					$author$project$MiniLatex$Edit$init,
					model.y,
					A2($author$project$Main$prependMacros, $author$project$Main$initialMacroText, $author$project$Main$sourceText));
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							h: model.h + 1,
							E: editRecord,
							I: A3($author$project$Main$renderFromEditRecord, model.T, model.h, editRecord),
							K: $author$project$Main$sourceText
						}),
					$elm$core$Platform$Cmd$none);
			case 11:
				var result = msg.a;
				if (!result.$) {
					var _v5 = result.a;
					var element = _v5.a;
					var viewport = _v5.b;
					return _Utils_Tuple2(
						model,
						A2($author$project$Main$setViewPortForSelectedLine, element, viewport));
				} else {
					return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
				}
			default:
				var laTeXMsg = msg.a;
				var id = laTeXMsg;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							h: model.h + 2,
							aQ: 'Clicked: ' + id,
							I: A3($author$project$Main$renderFromEditRecord, id, model.h, model.E),
							T: id
						}),
					$elm$core$Platform$Cmd$none);
		}
	});
var $author$project$Main$GetContent = function (a) {
	return {$: 3, a: a};
};
var $author$project$Main$Clear = {$: 1};
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
				A2($elm$html$Html$Attributes$style, 'float', 'left'),
				A2($elm$html$Html$Attributes$style, 'margin-right', '20px')
			]);
	});
var $author$project$Style$editorTextStyle = A3($author$project$Style$textStyle, '400px', '450px', '#fff');
var $author$project$Main$Export = {$: 13};
var $author$project$Main$exportButton = function (width) {
	return A2(
		$elm$html$Html$button,
		_Utils_ap(
			_List_fromArray(
				[
					$elm$html$Html$Events$onClick($author$project$Main$Export)
				]),
			A2($author$project$Style$buttonStyle, $author$project$Style$colorBlue, width)),
		_List_fromArray(
			[
				$elm$html$Html$text('Export')
			]));
};
var $author$project$Main$FullRender = {$: 8};
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
				$elm$html$Html$text('Re-render')
			]));
};
var $elm$html$Html$Events$alwaysStop = function (x) {
	return _Utils_Tuple2(x, true);
};
var $elm$virtual_dom$VirtualDom$MayStopPropagation = function (a) {
	return {$: 1, a: a};
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
var $author$project$Main$RestoreText = {$: 9};
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
							$elm$html$Html$Attributes$value(model.K)
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
						$author$project$Main$fullRenderButton(100),
						$author$project$Main$exportButton(80)
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
						$elm$html$Html$text(model.aQ)
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
			[model.I]));
};
var $author$project$Main$viewImage = function (url) {
	return A2(
		$elm$html$Html$div,
		_List_Nil,
		_List_fromArray(
			[
				A2(
				$elm$html$Html$a,
				_List_fromArray(
					[
						A2($elm$html$Html$Attributes$style, 'margin-left', '18px'),
						A2($elm$html$Html$Attributes$style, 'padding-bottom', '9px'),
						$elm$html$Html$Attributes$href(url)
					]),
				_List_fromArray(
					[
						A2(
						$elm$html$Html$img,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$src(url),
								A2($elm$html$Html$Attributes$style, 'height', '30px')
							]),
						_List_Nil)
					]))
			]));
};
var $author$project$Main$viewImages = function (model) {
	return A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				A2($elm$html$Html$Attributes$style, 'overflow', 'scroll'),
				A2($elm$html$Html$Attributes$style, 'height', '500px')
			]),
		A2($elm$core$List$map, $author$project$Main$viewImage, model.aO));
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
				$author$project$Main$renderedSource(model),
				$author$project$Main$viewImages(model)
			]));
};
var $author$project$Main$main = $elm$browser$Browser$element(
	{ds: $author$project$Main$init, ef: $author$project$Main$subscriptions, eA: $author$project$Main$update, eB: $author$project$Main$view});
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
								{a4: height, y: seed, eD: width});
						},
						A2($elm$json$Json$Decode$field, 'height', $elm$json$Json$Decode$int));
				},
				A2($elm$json$Json$Decode$field, 'seed', $elm$json$Json$Decode$int));
		},
		A2($elm$json$Json$Decode$field, 'width', $elm$json$Json$Decode$int)))(0)}});}(this));
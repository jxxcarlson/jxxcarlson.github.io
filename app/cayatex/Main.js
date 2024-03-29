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
	if (region.d5.bT === region.fb.bT)
	{
		return 'on line ' + region.d5.bT;
	}
	return 'on lines ' + region.d5.bT + ' through ' + region.fb.bT;
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
		impl.hm,
		impl.iB,
		impl.ie,
		function() { return function() {} }
	);
});



// INITIALIZE A PROGRAM


function _Platform_initialize(flagDecoder, args, init, update, subscriptions, stepperBuilder)
{
	var result = A2(_Json_run, flagDecoder, _Json_wrap(args ? args['flags'] : undefined));
	$elm$core$Result$isOk(result) || _Debug_crash(2 /**_UNUSED/, _Json_errorToString(result.a) /**/);
	var managers = {};
	var initPair = init(result.a);
	var model = initPair.a;
	var stepper = stepperBuilder(sendToApp, model);
	var ports = _Platform_setupEffects(managers, sendToApp);

	function sendToApp(msg, viewMetadata)
	{
		var pair = A2(update, msg, model);
		stepper(model = pair.a, viewMetadata);
		_Platform_enqueueEffects(managers, pair.b, subscriptions(model));
	}

	_Platform_enqueueEffects(managers, initPair.b, subscriptions(model));

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
		K: func(record.K),
		eJ: record.eJ,
		eA: record.eA
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
		var message = !tag ? value : tag < 3 ? value.a : value.K;
		var stopPropagation = tag == 1 ? value.b : tag == 3 && value.eJ;
		var currentEventNode = (
			stopPropagation && event.stopPropagation(),
			(tag == 2 ? value.b : tag == 3 && value.eA) && event.preventDefault(),
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
		impl.hm,
		impl.iB,
		impl.ie,
		function(sendToApp, initialModel) {
			var view = impl.iC;
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
		impl.hm,
		impl.iB,
		impl.ie,
		function(sendToApp, initialModel) {
			var divertHrefToApp = impl.eH && impl.eH(sendToApp)
			var view = impl.iC;
			var title = _VirtualDom_doc.title;
			var bodyNode = _VirtualDom_doc.body;
			var currNode = _VirtualDom_virtualize(bodyNode);
			return _Browser_makeAnimator(initialModel, function(model)
			{
				_VirtualDom_divertHrefToApp = divertHrefToApp;
				var doc = view(model);
				var nextNode = _VirtualDom_node('body')(_List_Nil)(doc.cm);
				var patches = _VirtualDom_diff(currNode, nextNode);
				bodyNode = _VirtualDom_applyPatches(bodyNode, currNode, patches, sendToApp);
				currNode = nextNode;
				_VirtualDom_divertHrefToApp = 0;
				(title !== doc.$7) && (_VirtualDom_doc.title = title = doc.$7);
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
	var onUrlChange = impl.hK;
	var onUrlRequest = impl.hL;
	var key = function() { key.a(onUrlChange(_Browser_getUrl())); };

	return _Browser_document({
		eH: function(sendToApp)
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
							&& curr.fR === next.fR
							&& curr.fm === next.fm
							&& curr.fM.a === next.fM.a
						)
							? $elm$browser$Browser$Internal(next)
							: $elm$browser$Browser$External(href)
					));
				}
			});
		},
		hm: function(flags)
		{
			return A3(impl.hm, flags, _Browser_getUrl(), key);
		},
		iC: impl.iC,
		iB: impl.iB,
		ie: impl.ie
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
		? { he: 'hidden', gK: 'visibilitychange' }
		:
	(typeof _VirtualDom_doc.mozHidden !== 'undefined')
		? { he: 'mozHidden', gK: 'mozvisibilitychange' }
		:
	(typeof _VirtualDom_doc.msHidden !== 'undefined')
		? { he: 'msHidden', gK: 'msvisibilitychange' }
		:
	(typeof _VirtualDom_doc.webkitHidden !== 'undefined')
		? { he: 'webkitHidden', gK: 'webkitvisibilitychange' }
		: { he: 'hidden', gK: 'visibilitychange' };
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
		aJ: _Browser_getScene(),
		aM: {
			au: _Browser_window.pageXOffset,
			av: _Browser_window.pageYOffset,
			gc: _Browser_doc.documentElement.clientWidth,
			es: _Browser_doc.documentElement.clientHeight
		}
	};
}

function _Browser_getScene()
{
	var body = _Browser_doc.body;
	var elem = _Browser_doc.documentElement;
	return {
		gc: Math.max(body.scrollWidth, body.offsetWidth, elem.scrollWidth, elem.offsetWidth, elem.clientWidth),
		es: Math.max(body.scrollHeight, body.offsetHeight, elem.scrollHeight, elem.offsetHeight, elem.clientHeight)
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
			aJ: {
				gc: node.scrollWidth,
				es: node.scrollHeight
			},
			aM: {
				au: node.scrollLeft,
				av: node.scrollTop,
				gc: node.clientWidth,
				es: node.clientHeight
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
			aJ: _Browser_getScene(),
			aM: {
				au: x,
				av: y,
				gc: _Browser_doc.documentElement.clientWidth,
				es: _Browser_doc.documentElement.clientHeight
			},
			cK: {
				au: x + rect.left,
				av: y + rect.top,
				gc: rect.width,
				es: rect.height
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
	if (options.fC) { flags += 'm'; }
	if (options.e1) { flags += 'i'; }

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
		if (!builder.y) {
			return A4(
				$elm$core$Array$Array_elm_builtin,
				$elm$core$Elm$JsArray$length(builder.C),
				$elm$core$Array$shiftStep,
				$elm$core$Elm$JsArray$empty,
				builder.C);
		} else {
			var treeLen = builder.y * $elm$core$Array$branchFactor;
			var depth = $elm$core$Basics$floor(
				A2($elm$core$Basics$logBase, $elm$core$Array$branchFactor, treeLen - 1));
			var correctNodeList = reverseNodeList ? $elm$core$List$reverse(builder.G) : builder.G;
			var tree = A2($elm$core$Array$treeFromBuilder, correctNodeList, builder.y);
			return A4(
				$elm$core$Array$Array_elm_builtin,
				$elm$core$Elm$JsArray$length(builder.C) + treeLen,
				A2($elm$core$Basics$max, 5, depth * $elm$core$Array$shiftStep),
				tree,
				builder.C);
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
					{G: nodeList, y: (len / $elm$core$Array$branchFactor) | 0, C: tail});
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
		return {bH: fragment, fm: host, b2: path, fM: port_, fR: protocol, b5: query};
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
var $author$project$Main$RenderedMode = 1;
var $author$project$Data$announcement = '\n\n[title Announcing CaYaTeX]\n\nBy James Carlson and Nicholas Yang\n\n\n\n[italic CaYaTeX, an experiment-in-progress, is a simple yet powerful markup language that\ncompiles to both LaTeX and Html. The implementation you see\nhere is written in Elm: [link |github.com/jxxcarlson/cayatex| https://github.com/jxxcarlson/cayatex]].\n\n[i Credits and thanks to Matt Griffith and Rob Simmons whose error recovery work inspired what is done here.]\n\n[i  Please do edit/delete/replace any of the text here. It won\'t be saved.]\n\n[i  [c Of special importance: make syntax errors (missing brackets, extra brackets, etc.)\nWe are working to handle all errors gracefully and would like to know about the bugs, cases missed, etc.  Comments to jxxcarlson@gmail.com]]\n[tableofcontents]\n\n[i [fontRGB |60, 60, 60| Click on an item in the table of contents to go to the corresponding section.  Click on a section title\nto return to the table of contents.]]\n\n[section1 Design Goals]\n\nThe goals of the CaYaTeX project are for the language to be\n\n[list |numbered|\n\n[item [bold Small], hence easy to learn. [i To this end there are just two constructs: ordinary text and [code elements]].]\n\n[item [b Powerful].  We borrow ideas from functional programming.\nElements have a Lisp-like syntax with brackets in place of parentheses.\nAn element has the basic form [code raw##[name |argument-list| body]##].\nThe parts [code raw##|argument-list|##] and [c body] may or may not be present.\nThe argument list is a comma-delimited sequence of\nstrings.  The body is an element.\nThe partial element [code name args] is a function [code Element -> Element].\nSuch functions can be composed, as in mathematics or as in languages such as Haskell and Elm.\n]\n\n\n[item [b Extensible] via macro definitions made in the source text.]\n\n[item [b Multiple inputs and outputs.] Documents written in CaYaTeX can be compiled to LaTeX, Markdown, and HTML. Markdown documents can be compiled to CaYaTeX.]\n\n[item [b Web-ready]. CaYaTeX has a differential compiler that makes it suitable for real-time editing, e.g.,  in a web app. ]\n\n[item [b Kind and Helpful]. Displays friendly and informative error messages in real time in the rendered text; has hooks for highlighting the corresponding source text in a suitable IDE/editor.]\n\n[item [b Modern]. Unicode compatible.]]\n\n\nCertain tasks are particularly simple with cayatex: insertion of images referenced by URL, construction of tables, graphs, and plots from data given in a standard format such as CSV, and also inline compatations of statistical data. Examples of these are given below.\n\nOur goal is to have a convenient  tool for writing technical documents that are immediately publishasble on the web while at the same time offering export to conventional formats such as LaTeX (and therefore also) PDF.\n\n\n[b Note.] [fontRGB |50, 0, 200| The above are desiderata.  Among the missing items: compile to LaTeX and differential compilation, which is needed for snappy, real-time rendering of the source text while editing. Our first objectives\nare a decent proof-of-concept and error-handling that is both robust and graceful. All in due time!]\n\n[section1 Showcase]\n\nBelow are examples of what is currently possible with CaYaTeXs.\n\n[section2 Mathematics]\n\n\nPythagoras says that [math a^2 + b^2 = c^2].\nThis is an [b [i extremely]] cool result. But just as cool is the below:\n\n[mathblock \\sum_{n=1}^\\infty \\frac{1}{n} = \\infty,]\n\nwhich goes back to the work of Nicole Oresme (1320–1382).  See the entry in the\n[link |Stanford Encyclopedia of Philosophy| https://plato.stanford.edu/entries/nicole-oresme/].\nYou can also consult [link https://en.wikipedia.org/wiki/Nicole_Oresme].\n\nWe can also do some high-school math, with that beautifully curved integral sign\nthat attracts so many people to the subject:\n\n[mathblock \\int_0^1 x^n dx = \\frac{1}{n+1}]\n\nAnd of course, we can also do theorems:\n\n[theorem There are infinitely many primes [math p \\equiv 1 \\text{ mod } 4.]]\n\n[corollary |Euclid| There are infinitely many primes.]\n\n\n\n\n\n[section2 Macros]\n\nWe have implemented a primitive version of macro expansion. To show how it works, begin by writing the macro definition\n\n[cb raw#[macro [\n    blue [ fontRGB |0, 80, 200| ]\n]]#]\n\nin the source text. Such a definition has the form\n\n[cb raw#[macro [\n  MACRO-NAME [ NAME |ARGS| ]\n]]#]\n\nwhere [c NAME] is the name of a standard element like [c fontRGB] and where\n[c ARGS] is the actual list of arguments that the standard element will use.\n\nWhen you add the macro definition, you will not see anything rendered. Now add this to the source "[c raw#[blue light blue bird\'s eggs]#]". You will see this:\n\n[indent [blue light blue bird\'s eggs]]\n\n[section3 Composability]\n\n\nOne can use macro instances pretty much as one uses elements.  Elements can be applied to macro instances, as with\n\n[indent [i [blue light blue bird\'s eggs]]]\n\nwhere the source text  is\n\n[cb raw#[i [blue light blue bird\'s eggs]]#]\n\nThe body of a macro instance can also be an element:  [blue light [b blue] bird\'s eggs], where the source text is\n\n[cb raw#[blue light [b blue] bird\'s eggs]#]\n\nFinally, one can compose macro instances.  Make the definition\n\n[cb raw#[macro [red [fontRGB |200, 0, 0| ]]]#]\n\nand then say\n\n[cb raw#[blue light blue with [red red spotted] bird\'s eggs]# ]\n\nto obtain\n\n[indent [blue light blue and [red red spotted] bird\'s eggs]]\n\n[macro [blue [fontRGB |0, 80, 200| ]]]\n\n[macro [red [fontRGB |200, 0, 0| ]]]\n\n\n\n\n[section2 Color]\n\nExample:  [highlightRGB |252, 178, 50| [fontRGB |23, 57, 156| [b What color is this?]]]\n\n[code raw###[highlightRGB |252, 178, 50| [fontRGB |23, 57, 156| [b What color is this?]]]###]\n\n\nNote the nesting of elements, aka function composition. When we have our macro facility up and running,  users can abbreviate constructs like\nthis one, e.g., just say [code raw##[myhighlight| What color is this?]##]\n\n\n[section2 Variables]\n\nOne can set variables to be used elsewhere in the text.  For example, if we\nsay [c raw#[set [project = Gaia Unlimited, pi = 3.1416]#], we can later say\n"my project is [c raw#[get project]#]," which will be rendered as "my project is [get project]."\n\nThe variable pi is also defined: pi = [get pi].  Here we said [c raw#pi = [get pi]#].\n\nThe [c set ...] statements can be placed anywhere in the document, for example, at the end.\nNote that [c set ...] statements are not rendered in the text.  If you do want it to be rendered,\nuse [c set_ ...] instead.\n\n[set project = Gaia Unlimited, pi = 3.1416]\n\n[section2 Spreadsheets]\n\nThe below demonstrates the use\nof a rudimentary spreadsheet element.  We plan a pop-up editor for\nthese spreadsheets.\n\n[section3 Rendered spreadsheet]\n\n[spreadsheet\n\n[row 100.0, 1.1, row * 1 2 ]\n\n[row 120.0, 1.4 ,row * 1 2 ]\n\n[row 140.0, 0.9 ,row * 1 2]\n\n[row -, col sum 1 3, col sum 1 3]\n\n]\n\n\n\n[section3 Source text]\n\n[cb raw##\n[spreadsheet\n\n[row 100.0, 1.1, row * 1 2]\n\n[row 120.0, 1.4 ,row * 1 2]\n\n[row 140.0, 0.9 ,row * 1 2]\n\n[row -, col sum 1 3, col sum 1 3]\n\n]\n##]\n\nThe entry [c row * 1 2] in the upper right-hand  cell means "In this row, multiply\nthe cells in columns 1 and 2; use that value to replace me."  Similarly, the entry\n[c col sum 1 3] menas, "in the column where I am, compute sum of  the cell contents in rows 1 through 3; use that value to replace me.\n\n[section2 Data]\n\nOne can design elements which manipulate data (numerical computations, visualization).  Here are some data computations:\n\n[sum 1.2, 2, 3.4, 4]\n\n[average 1.2, 2, 3.4, 4]\n\n[stdev |precision:3| 1.2, 2, 3.4, 4]\n\nIn the numerical examples, the precision of the result has a default value of 2.  This can be changed, as one sees in the source of the third example, e.g., you can have\n\n[codeblock raw##[stdev | 1.2, 2, 3.4, 4]## ]\n\nor\n\n[codeblock raw##[stdev |precision:3| 1.2, 2, 3.4, 4]## ]\n\n\n[section2 Graphs]\n\nBelow are three simple data visualizations. We plan more, and more configurability of what you see here.\n\n[section3 Bar graphs]\n\n[bargraph |column:2, yShift: 0.2, caption: Global temperature anomaly 1880-1957|\n1880,-0.12\n1881,-0.07\n1882,-0.07\n1883,-0.15\n1884,-0.21\n1885,-0.22\n1886,-0.21\n1887,-0.25\n1888,-0.15\n1889,-0.10\n1890,-0.33\n1891,-0.25\n1892,-0.30\n1893,-0.31\n1894,-0.28\n1895,-0.22\n1896,-0.09\n1897,-0.12\n1898,-0.26\n1899,-0.12\n1900,-0.07\n1901,-0.14\n1902,-0.25\n1903,-0.34\n1904,-0.42\n1905,-0.29\n1906,-0.22\n1907,-0.37\n1908,-0.44\n1909,-0.43\n1910,-0.38\n1911,-0.43\n1912,-0.33\n1913,-0.31\n1914,-0.14\n1915,-0.07\n1916,-0.29\n1917,-0.31\n1918,-0.20\n1919,-0.20\n1920,-0.21\n1921,-0.14\n1922,-0.22\n1923,-0.21\n1924,-0.24\n1925,-0.14\n1926,-0.06\n1927,-0.14\n1928,-0.17\n1929,-0.29\n1930,-0.09\n1931,-0.07\n1932,-0.11\n1933,-0.24\n1934,-0.10\n1935,-0.14\n1936,-0.11\n1937,-0.01\n1938,-0.02\n1939,-0.01\n1940,0.10\n1941,0.19\n1942,0.15\n1943,0.16\n1944,0.29\n1945,0.17\n1946,-0.01\n1947,-0.05\n1948,-0.06\n1949,-0.06\n1950,-0.17\n1951,-0.01\n1952,0.02\n1953,0.09\n1954,-0.12\n1955,-0.14\n1956,-0.20\n1957,0.05\n]\n\nThe bargraph code:\n\n[codeblock raw##[bargraph |column:2,\n    caption: Global temperature anomaly 1880-1957|\n1880,-0.12\n1881,-0.07\n...]## ]\n\n[section3 Line graphs]\n\n[linegraph |caption: Global temperature anomaly 1880-1957|\n1880,-0.12\n1881,-0.07\n1882,-0.07\n1883,-0.15\n1884,-0.21\n1885,-0.22\n1886,-0.21\n1887,-0.25\n1888,-0.15\n1889,-0.10\n1890,-0.33\n1891,-0.25\n1892,-0.30\n1893,-0.31\n1894,-0.28\n1895,-0.22\n1896,-0.09\n1897,-0.12\n1898,-0.26\n1899,-0.12\n1900,-0.07\n1901,-0.14\n1902,-0.25\n1903,-0.34\n1904,-0.42\n1905,-0.29\n1906,-0.22\n1907,-0.37\n1908,-0.44\n1909,-0.43\n1910,-0.38\n1911,-0.43\n1912,-0.33\n1913,-0.31\n1914,-0.14\n1915,-0.07\n1916,-0.29\n1917,-0.31\n1918,-0.20\n1919,-0.20\n1920,-0.21\n1921,-0.14\n1922,-0.22\n1923,-0.21\n1924,-0.24\n1925,-0.14\n1926,-0.06\n1927,-0.14\n1928,-0.17\n1929,-0.29\n1930,-0.09\n1931,-0.07\n1932,-0.11\n1933,-0.24\n1934,-0.10\n1935,-0.14\n1936,-0.11\n1937,-0.01\n1938,-0.02\n1939,-0.01\n1940,0.10\n1941,0.19\n1942,0.15\n1943,0.16\n1944,0.29\n1945,0.17\n1946,-0.01\n1947,-0.05\n1948,-0.06\n1949,-0.06\n1950,-0.17\n1951,-0.01\n1952,0.02\n1953,0.09\n1954,-0.12\n1955,-0.14\n1956,-0.20\n1957,0.05\n]\n\nThe linegraph code (CSV format):\n\n[codeblock raw##[linegraph |caption: Global\ntemperature anomaly 1880-1957|\n1880,-0.12\n1881,-0.0]\n##]\n\n[section3 Scatter plots]\n\nUse the same syntax as before, but with "scatterplot" in place of "linegraph."\n\n[code raw##[scatterplot |x-axis:3,  y-axis:4\n  , caption: Hubble\'s 1929 data| ...]##]\n\n[scatterplot |x-axis:3,  y-axis:4, caption: Hubble\'s 1929 data|\nobject,ms,R (Mpc),v (km/sec),mt,Mt,"D from mt,Mt",,,,,,,,,\nS.Mag.,..,0.032,170,1.5,-16.0,0.03,Slope when Intercept set to zero,423.901701290206,km/sec/Mpc,,,,,,\nL.Mag.,..,0.03,290,0.5,-17.2,0.03,,,,,,,,,\nN.G.C.6822,..,0.214,-130,9,-12.7,0.22,Slope,453.85999408475,km/sec/Mpc,,,,,,\n598,..,0.263,-70,7,-15.1,0.26,Intercept,-40.4360087766413,km/sec,,,,,,\n221,..,0.275,-185,8.8,-13.4,0.28,R Squared,0.623168376295362,,,,,,,\n224,..,0.275,-220,5,-17.2,0.28,,,,,,,,,\n5457,17,0.45,200,9.9,-13.3,0.44,,,,,,,,,\n4736,17.3,0.5,290,8.4,-15.1,0.50,,,,,,,,,\n5194,17.3,0.5,270,7.4,-16.1,0.50,,,,,,,,,\n4449,17.8,0.63,200,9.5,-14.5,0.63,,,,,,,,,\n4214,18.3,0.8,300,11.3,-13.2,0.79,,,,,,,,,\n3031,18.5,0.9,-30,8.3,-16.4,0.87,,,,,,,,,\n3627,18.5,0.9,650,9.1,-15.7,0.91,,,,,,,,,\n4826,18.5,0.9,150,9,-15.7,0.87,,,,,,,,,\n5236,18.5,0.9,500,10.4,-14.4,0.91,,,,,,,,,\n1068,18.7,1,920,9.1,-15.9,1.00,,,,,,,,,\n5055,19,1.1,450,9.6,-15.6,1.10,,,,,,,,,\n7331,19,1.1,500,10.4,-14.8,1.10,,,,,,,,,\n4258,19.5,1.4,500,8.7,-17.0,1.38,,,,,,,,,\n4151,20,1.7,960,12,-14.2,1.74,,,,,,,,,\n4382,..,2,500,10,-16.5,2.00,,,,,,,,,\n4472,..,2,850,8.8,-17.7,2.00,,,,,,,,,\n4486,..,2,800,9.7,-16.8,2.00,,,,,,,,,\n4649,..,2,1090,9.5,-17.0,2.00,,,,,,,,,\nTable 1,,,,,-15.5,,,,,,,,,,\n]\n\n[section2 Tables]\n\n[data |title:Atomic weights, header|\n\nN,  Symbol,  Name, W\n1, H, Hydrogen,1.008\n2, He, Helium, 4.002\n3, Li, Lithium, 6.94\n4, Be, Beryllium, 9.012\n5, B, Boron, 10.81\n6, C, Carbon, 12.011\n7, N, Nitrogen, 14.007\n8, O, Oxygen, 15.999\n9, F, Fluorine, 18.998\n10, Ne, Neon, 20.1797\n11, Na, Sodium, 22.989\n12, Mg, Magnesium, 24.305\n13, Al, Aluminium, 26.981\n14, Si, Silicon, 28.085\n15, P, Phosphorus, 30.973\n16, S, Sulfur, 32.06\n17, Cl, Chlorine, 35.45\n18, Ar, Argon, 39.948\n19, K, Potassium, 39.0983\n20, Ca, Calcium, 40.078\n\n]\n\n\n[section2 Table of contents]\n\nA table contents is generated automatically if you place\nthe element [c raw#[tableofcontents]#] in the source text.\nEntries in the table of contents are active links to the\nindicated sections.  Conversely, section titles act\nas active links back to the table of contents.\n\nSections up to six levels deep are available.\n\n\n[section2 Unicode]\n\nYou can freely use unicode characters, as in this poetry element:\n\n[poetry\nА я иду, где ничего не надо,\nГде самый милый спутник — только тень,\nИ веет ветер из глухого сада,\nА под ногой могильная ступень.\n\n— Анна Ахматова\n]\n\n[section2 Shortcuts]\n\n[verbatim\n\nraw###\nNote that instead of saying [italic ...  ],\nyou can say [i .... ]\n\nThere are shortcuts for a few\nother common elements:\n[b ...] instead of [bold ... ]\n[m ...] instead of [math ... ]\n[mb ...] instead of [mathblock ... ]\n###\n\n]\n\n[section2 Code]\n\nTime for some code: [code raw##col :: Int -> Matrix a -> [a]##].\nDo you recognize the language (ha ha)?\n\nWe can also do code blocks.  Syntax highlighting coming later.\n\n[codeblock raw##\n# For Sudoku 3x3 subsquare function\n\ncol :: Int -> Matrix a -> [a]\ncol k = fmap ( !! k)\n\ncols :: Matrix a -> Matrix a\ncols m =\n    fmap (\\k -> col k m) [0..n]\n       where n = length m - 1\n##]\n\n\n[i [highlight Note the use of Rust-like raw strings in the source text to avoid escaping all the brackets.]]\n\n\n\n\n[section2 Images]\n\n[image |caption: Rotkehlchen aufgeplustert, width: 200, placement: center|https://i.pinimg.com/originals/d4/07/a4/d407a45bcf3ade18468ac7ba633244b9.jpg]\n\n[code raw##[image |caption: Rotkehlchen aufgeplustert, width: 200, placement: center| https://..jpg]##]\n\n\n[section2 SVG]\n\n[svg\n<svg xmlns="http://www.w3.org/2000/svg"\n width="467" height="462">\n  <rect x="80" y="60" width="250" height="250" rx="20"\n      style="fill:#ff0000; stroke:#000000;stroke-width:2px;" />\n\n  <rect x="140" y="120" width="250" height="250" rx="40"\n      style="fill:#0000ff; stroke:#000000; stroke-width:2px;\n      fill-opacity:0.7;" />\n</svg>\n]\n\n[c raw##[svg <svg ... SVG CODE ... </svg> ]##]\n\n[section2 Lists]\n\nNote that lists can be nested and can be given a title if desired.  The symbol for "bulleted" lists is • by default, but can be specified by the user.\nA numbered list has "numbered" as its first argument, as in the example below.\n\n[list |numbered, title:Errands and other stuff|\n\n    [item Bread, milk, O-juice]\n\n    [item Sand paper, white paint]\n\n    [list |none|\n\n        [item A]\n\n        [item B]\n\n        [list |§, title:Greek symbols|\n\n            [item [math \\alpha = 0.123]]\n\n            [item  [math \\beta = 4.567]]\n\n]]]\n\n[section1 Road map]\n\n[list | s: numbered |\n\n[item Improve error handling.]\n\n[item As with section numbering, implement theorem numbering, cross-references, etc.]\n\n[item Implement export to LaTeX]\n\n[item Integrate bracket-matching editor.]\n\n\n[item Add CaYaTeX as a markup language option\nfor [link https://minilatex.lamdera.app]. Presently MiniLaTeX,\nMath+Markdown, and plain text are supported.\n]\n\n\n]\n\n[section1 Appendix: Technical Stuff]\n\nBecause CaYaTeX is so simple, the type of the AST is very small:\n\n[codeblock\nraw##type Element\n    =   Text String Meta\n      | Element String (List String) Element Meta\n      | LX (List Element) Meta\n##\n]\n\nThe first variant, [code Text String] accounts for plain text.\nThe second is of the form [code Element name args body],\nwhile the third shows how a list of elements combine to form an\nelement.  In particular, the body of an element can be\n[code LX] of a list of elements.  The [code Meta] component tracks\nlocation of the corresponding piece of text in the source code as well as\nother metadata such as section numbering.\n\nFor more technical details, see the [c Design Notes] tab.\n\n\n\n\n';
var $author$project$Data$manual = '\n\n\n\n\n\n\n[macro [ds [fontRGB |0, 0, 200| ]]]\n\n[i [code This document is a draft-in-progress of a manual for CaYaTeX]]\n\n[title CaYaTeX Manual]\n\n[tableofcontents]\n\n[section1 Standard Elements]\n\n\n\n[section2 Text]\n\n[def | bold; b |\nRender text as bold, e.g, [c raw#[bold Bold!]#] renders as [ds [bold Bold!]] Short form: [c raw#[b Bold!]#] .\n]\n\n[def | italic; i |\nRender text as italic, e.g, [c raw#[italic Italic!]#] renders as [ds [italic Italic!]] Short form: [c raw#[i Italic!]#] .\n]\n\n[def | fontRGB | Render text in color with given RGB values, e.g., [c raw#[fontRGB |214, 11, 184| This is a test!]#] renders as\n[fontRGB |214, 11, 184| This is a test!]\n\n]\n\n\n[def | highlight |\nHighlight the text, e.g, [c raw#[highlight This is important!]#] renders as [ds [highlight This is important!]].\n]\n\n[def | link |\nMake a hyperlink.  For example, the text, e.g, [c raw#[link http://nytimes.com]#] renders as [ds[link http://nytimes.com]].  One can also specify the link text, e.g., [c raw#[link | New York Times | http://nytimes.com]#] renders as [ds[link | New York Times | http://nytimes.com]].\n]\n\n[def | highlightRGB |\nHighlight the text with a given color, e.g, [c raw# [highlightRGB | 255, 200, 200 | This is important!]#] renders as [ds [highlightRGB | 255, 200, 200 | This is important!]].\n]\n\n[section2 Code]\n\n[def | code; c|\nRender text in-line as code, e.g, [c raw#[code a <- b]#] renders as\n[ds [code a <- b]] Short form: [c raw#[c a <- b]#] .\n]\n\n[def |  codeblock; cb |\nRender text as displayed code, e.g, [c raw#[codeblock a <- b]#] renders as\n\n[ds [codeblock a <- b]]\n\nShort form: [c raw#[c a <- b]#] .\n]\n\n\n[section2 Mathematics]\n\n[def | math; m |\nRender math in-line, e.g, [c raw#[math a^2 + b^2 = c^2]#] renders as\n[ds [math a^2 + b^2 = c^2]] Short form: [c raw#[m a^2 + b^2 = c^2]#] .\n]\n\n[def |  mathblock; mb |\nRender math as centered block, e.g, [c raw#[mathblock \\int_0^1 x^n dx = \\frac{1}{n+1}]#] renders as\n\n[mathblock \\int_0^1 x^n dx = \\frac{1}{n+1}]\n\nShort form: [c raw#[mb \\int_0^1 x^n dx = \\frac{1}{n+1}]#] .\n]\n\n\n[section2 Structure]\n\n[def | title | Construct a document title, e.g. as [c raw#[title Tales of Yore]#] ].\n\n[def | tableofcontents |\nRender a numbered table of contents as displayed above.]\n\n[def | section; section1; section2; ... |\nRender a numbered section heading as you see here.  For example,\n[c raw#[section2 Structure]#] produces the heading for this section.  It is a level two heading and therefore is labeled with two numbers. [c section] is a synonym for [c section1], which produces a level 1 section heading.\n\n]\n\nsection\nsection1\nsection2\nsection3\nsection4\nsection5\nsection6\n\n[section2 Format]\n\n[def | center | Center the body of the element [c raw#[center BODY]#]].\n\n[def | indent | Indent the body of the element [c raw#[indent BODY]#]].\n\n[def | poetry | Format the body of the element as poetry, that is, obey line endings. [c raw#[poetry BODY]#]].\n\n[def | verbatim | No formatting at all: obey line endings and white space. [c raw#[poetry BODY]#]].\n\n[def | list | Construct a list of items using the form [c raw#[list [tem ...] [item ...] ...]#]  The default is a bulleted list.  To change the "item symbol", add the argument [c raw#|s : SYMBOL-NAME|#], e.g., write [c raw#[list | s: ‡ | ...]#] to produce the example below.  For a numbered list, use the special form [c raw#[list | s: numbered | ...]#]\n]\n\n\n[b Example]\n\nTo produce the list\n\n[list  | s: ‡ |\n\n  [item Conservation of momentum]\n\n  [item  Conservation of energy]\n\n]\n\nwrite\n\n[cb raw##\n[list  | s: ‡ |\n\n  [item Conservation of momentum]\n\n  [item  Conservation of energy]\n\n]\n##]\n\n[section2 Images]\n\n[section3 jpg, png, etc]\n\nInsert an image using the format [c raw#[image URL]#], where\n [c URL] is a link to the image.  The image below was inserted using the source text\n[c raw#[image https://pcd ... jpg] #]\n\n[image https://pcdn.columbian.com/wp-content/uploads/2018/04/0427_LIF_kidspost-herons-1226x0-c-default.jpg]\n\n\nTo change the width of an image to 150 pixels, say [c raw#[image | width: 150 | URL]#]\n\n\n[image | width: 150| https://pcdn.columbian.com/wp-content/uploads/2018/04/0427_LIF_kidspost-herons-1226x0-c-default.jpg]\n\nTo add a caption, say [c raw#[image | width: 150, caption Egrets | URL]#]\n\n\n[image | width: 150, caption: Egrets | https://pcdn.columbian.com/wp-content/uploads/2018/04/0427_LIF_kidspost-herons-1226x0-c-default.jpg]\n\nThe arguments to the image element are a comma-separated list of key-value pairs, [c key:value].  You have seen how the width key is used with a numeric value.  You can also say [c width: fill] to make the image as wide as possible.  This is the default.  Another key is [c placement], which can take values [c left], [c right], and [c center].\n\nBelow is a variant of the Egret image with placement on the left.  We will have floating placement left and right in the near future.\n\n[image | width: 150, caption: Egrets , placement: left| https://pcdn.columbian.com/wp-content/uploads/2018/04/0427_LIF_kidspost-herons-1226x0-c-default.jpg]\n\n\n[b Note.] To copy the link of an image on the web, do control-click or right-click on the image and select "Copy image link" from the popup menu.\n\n[section3 SVG]\n\nInsert SVG images like the one you see below using the format below\n\n[cb raw#[svg | caption: Circuit | <svg ... </svg>]#]\n\nHere [c raw#<svg ... </svg>#] is the raw SVG source text.\n\n[fontRGB |200, 0, 0| Still working on getting placement, etc. to work properly.]\n\n[svg | caption: Circuit, placement: left |\n\n<svg\n   xmlns:dc="http://purl.org/dc/elements/1.1/"\n   xmlns:cc="http://creativecommons.org/ns#"\n   xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"\n   xmlns:svg="http://www.w3.org/2000/svg"\n   xmlns="http://www.w3.org/2000/svg"\n   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"\n   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"\n   width="49.894897mm"\n   height="38mm"\n   viewBox="0 0 49.894897 38"\n   version="1.1"\n   id="svg8"\n   inkscape:version="0.92.3 (2405546, 2018-03-11)"\n   sodipodi:docname="simple-electric-circuit.svg">\n\n  <g\n     inkscape:label="Ebene 1"\n     inkscape:groupmode="layer"\n     id="layer1"\n     transform="translate(-37.177826,-18.387941)">\n    <g\n       id="g959"\n       transform="translate(1.0394345,0.09980161)">\n      <path\n         inkscape:connector-curvature="0"\n         id="path954"\n         d="m 79.825353,39.645456 1.996096,-5.281152"\n         style="fill:none;stroke:#000000;stroke-width:0.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />\n      <ellipse\n         style="fill:none;stroke:#000000;stroke-width:0.50000006;stroke-linecap:round;stroke-miterlimit:4;stroke-dasharray:none"\n         id="path941"\n         cx="79.478828"\n         cy="35.278759"\n         rx="0.83578569"\n         ry="0.83781064" />\n      <ellipse\n         ry="0.83781064"\n         rx="0.83578569"\n         cy="40.537014"\n         cx="79.478828"\n         id="ellipse943"\n         style="fill:none;stroke:#000000;stroke-width:0.50000006;stroke-linecap:round;stroke-miterlimit:4;stroke-dasharray:none" />\n    </g>\n    <path\n       id="path907"\n       d="m 61.992992,45.381171 a 3.3158833,3.3158388 0 1 0 0.19505,0 z m 2.340624,0.975242 -4.681247,4.681184 m 0,-4.681184 4.681247,4.681184"\n       inkscape:connector-curvature="0"\n       style="fill:none;stroke:#000000;stroke-width:0.5;stroke-miterlimit:4;stroke-dasharray:none" />\n    <path\n       id="path920"\n       style="stroke:#000000;stroke-width:0.5;stroke-miterlimit:4;stroke-dasharray:none"\n       d="m 55.560489,22.475897 h 1.984372 m 10.519197,4.762499 h -5.357811 m -2.38125,0 h -5.357811 m 5.357811,2.182807 v -4.365622 m 2.38125,-3.770309 V 33.19152 m 4.564064,-10.715623 h -1.984372 m 0.992182,-0.99219 v 1.984372"\n       inkscape:connector-curvature="0" />\n    <path\n       style="fill:none;stroke:#000000;stroke-width:0.5;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"\n       d="m 64.955204,27.238396 h 15.563519 v 7.231039"\n       id="path923"\n       inkscape:connector-curvature="0"\n       sodipodi:nodetypes="ccc" />\n    <path\n       style="fill:none;stroke:#000000;stroke-width:0.5;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"\n       d="m 80.518723,41.620149 v 7.076856 H 65.451474"\n       id="path925"\n       inkscape:connector-curvature="0"\n       sodipodi:nodetypes="ccc" />\n    <path\n       style="fill:none;stroke:#000000;stroke-width:0.5;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"\n       d="M 58.732947,48.697005 H 43.46726 V 27.238396 h 14.608779"\n       id="path927"\n       inkscape:connector-curvature="0"\n       sodipodi:nodetypes="cccc" />\n  </g>\n</svg>\n\n]\n\n\n[section2 Data]\n\n[def | sum |\n  Compute sum of a list of numbers, e.g., [c raw#[sum 1, 2, 3]#] renders as [ds [sum 1, 2, 3]].]\n\n[def | average |\n  Compute average of a list of numbers, e.g., [c raw#[average 1, 2, 3]#] renders as [ds [average 1, 2, 3]].]\n\n[def | stdev |\n  Compute standard deviation of a list of numbers, e.g., [c raw#[stdev 1, 2, 3]#] renders as [ds [stdev 1, 2, 3]].]\n\n[section2 Macros]\n\nWe have implemented a primitive version of macro expansion. To show how it works, begin by writing the macro definition\n\n[cb raw#[macro [\n    blue [ fontRGB |0, 80, 200| ]\n]]#]\n\nin the source text. Such a definition has the form\n\n[cb raw#[macro [\n  MACRO-NAME [ NAME |ARGS| ]\n]]#]\n\nwhere [c NAME] is the name of a standard element like [c fontRGB] and where\n[c ARGS] is the actual list of arguments that the standard element will use.\n\nWhen you add the macro definition, you will not see anything rendered. Now add this to the source "[c raw#[blue light blue bird\'s eggs]#]". You will see this:\n\n[indent [blue light blue bird\'s eggs]]\n\n[section3 Composability]\n\n\nOne can use macro instances pretty much as one uses elements.  Elements can be applied to macro instances, as with\n\n[indent [i [blue light blue bird\'s eggs]]]\n\nwhere the source text  is\n\n[cb raw#[i [blue light blue bird\'s eggs]]#]\n\nThe body of a macro instance can also be an element:  [blue light [b blue] bird\'s eggs], where the source text is\n\n[cb raw#[blue light [b blue] bird\'s eggs]#]\n\nFinally, one can compose macro instances.  Make the definition\n\n[cb raw#[macro [red [fontRGB |200, 0, 0| ]]]#]\n\nand then say\n\n[cb raw#[blue light blue with [red red spotted] bird\'s eggs]# ]\n\nto obtain\n\n[indent [blue light blue and [red red spotted] bird\'s eggs]]\n\n[macro [blue [fontRGB |0, 80, 200| ]]]\n\n[macro [red [fontRGB |200, 0, 0| ]]]\n\n\n[section2 What\'s left]\n\ndata\nlinegraph\nbargraph\nmacro\nscatterplot\n\n\n\n\n';
var $author$project$Data$notes = '\n\n\n\n[title Design Notes]\n\nFollowing are some random notes on the structure of the cayatex compiler.  Our aim is to capture\nthe main ideas of the design while they are still in current memory.\nAll is subject to radical revision, as the project is still in a high-flux experimental state.\n\n[tableofcontents]\n\n[section  Syntax]\n\nThe syntax of CaYaTeX is as in the example below:\n\n[codeblock\n\nraw###\nWhiskey is [b very] strong stuff.\n###\n]\n\nIt renders as "Whiskey is [b very] strong stuff."  All CaYaTeX source text consists of ordinary text, which may contain unicode characters, and [i basic elements], which are of one of three forms:\n\n[list\n\n[item [code raw##[NAME]##]]\n\n[item [code raw##[NAME BODY]##]]\n\n[item [code raw##[NAME |ARGS| BODY]##]]\n\n]\n\nwhere [code ARGS] is a comma-separated list of strings. Below is an example of the third form, where the data is in CSV format.\n\n[codeblock\n\nraw###\n[bargraph | column:2, yShift: 0.2,\n  caption: Sales of XYZ |\n1, 2.1\n2, 2.9\n...\n]\n###\n]\n\n[bargraph | column:2, yShift: 0.2,\n  caption: Sales of XYZ |\n1, 2.1\n2, 2.9\n3, 4.4\n4, 6.8\n5, 7.1\n6, 7.8\n7, 5.9\n]\n\nAs an example of the first form, the table of contents is constructed via the element [code raw#[tableofcontents]#].\nAs to the structure of a general syntactic element, we have the following three formation rules:\n\n[list |s: numbered|\n\n[item Plain text is a syntactic element]\n\n[item Basic elements are syntactic elements and the body of a syntactic element is a syntactic element]\n\n[item A sequence [i a b c d ...] where each of [i a, b, c, d, ...] is a syntactic element is also a syntactic element]\n\n]\n\n[section Parse Tree]\n\n\nCayatex is built around the type of the parse tree.  This type captures the syntax of the source text as described above.\n\n[codeblock\nraw###\ntype Element\n    = Text String (Maybe Metadata)\n    | Element String (List String) Element (Maybe Metadata)\n    | LX (List Element) (Maybe Metadata)\n###\n]\n\nThe [c Metadata] component is carries data used in rendering the element or in interacting with an editor: section numbers, cross-refrences, location of the corresponding text in in the source, etc.\n\nNote the distinction between syntactic element and Element.  The first is a decription of text formed by certain rules.  The second, while it reflects the first, is a type.\n\n[section Parser]\n\nParsing, which is intended gracefully handle errors in the source text, such as unmatched brackets, is described below.  It is a three-stage process that produces a valid syntax tree despite the presence of error:  errors are both corrected and annotated.  Thus, when rendered, the text is readable and errors called out in-line in color so that the author can more easily understand and correct them.\n\nThe first step in parsing a document is to attempt to break the input text, given as a list of lines, into a list of special strings called [i blocks].  A block is string which is valid syntactic element.  Thus \n\n[cb raw#abc [x 1] def [y[z 2]] ghi#] \n\nis a block  as is the multi-line text\n\n[cb raw#abc [x 1]\n def [y[z\n 2]] ghi#] \n\nThe previous text with the rightmost brace removed is not a block.  \n\nDivision of the text into blocks can fail, as it does with the last example of unbalanced brackets.  When this occurs, the parser invokes a backtracking strategy to  correct the text and then divide it into blocks.\n\n\n[list | s: numbered |\n\n[item Decompose the source text into blocks and feed these to [code Parser.Driver.parseLoop] using [code Parser.Document.runLoop]].  Here is a synopsis of the parsing process:\n\n\n[item Parse a list of elements from a block of input text using [code Parser.Driver.parseLoop].  The [c parseLoop] function does this by repeatedly running  [code Parser.Element.parser], truncating the input text each time.\n]\n\n[item Parse one element from the input text using [code Parser.Element.parser]]\n\n]\n\n\n[section2 Parser.Element]\n\nLow-level parsing is handled by the function [code Parser.Element.parser]:\n\n[codeblock\nparser : Int -> Int -> Parser Element\n]\n\nThe first two arguments are [code generation] and [code blockOffset].  These are "fed" to the parser by [code Parser.Driver.parseLoop].  The [c generation] argument is used for live editing-rendering and is incremented on each character stroke.  It is used downstream to manage updates to the virtual DOM.  The [c blockOffset] field is an index in the source text of the text parsed.\n\nNote every variant of type [c Element] has a component of type [c Meta].\nThis metadata component is a record of the following type.\n\n[cb type alias Metadata =\n    { blockOffset : Int\n    , offset : Int\n    , length : Int\n    , generation : Int\n    , label : String\n    }\n]\n\nThe first three fields are used to locate the text parsed in the source text.  The last, [c label], is computed when the text is parsed.  For example, if the element is  [c raw#[section3 Foo]#], the label might be the string [c 5.2.1].  Labels are used to render the output of the parser.\n\n[section2 Parser.Driver]\n\nThe next level up in parsing text is handled by [c parseLoop], whose type is given below. [i Grosso modo], it functions by applying [c Element.parser] to the input string, analyzing the result, doing some computations, and  dropping the substring just parsed from the input text, and adding the parsed result to a field of [c TextCursor].\n\n\n[cb\nparseLoop : Int -> Int -> Data -> String -> TextCursor Element\nparseLoop generation initialLineNumber data str = ...\n]\n\nLet\'s look at this in more detail.  The [c TextCursor] type, which we use as [c TextCursor Element], is as laid out below. Many of the fields have already been discussed already\n\n[cb\ntype alias TextCursor a =\n    { text : String           -- text remaining to be processed\n    , block : String\n    , parsand : Maybe a       -- element just parsed\n    , parsed : List a         -- elements parsed so far\n    , stack : List String\n    , blockIndex : Int\n    , offset : Int\n    , count : Int\n    , generation : Int\n    , data : Parser.Data.Data  -- data accumulated so far\n    }\n\n]\n\nThe [c data] field is of particular interest.  Its type is as listed below.  In it, the parser accumulates information about the source text that is used in rendering.  The [c vectorCounters] field, for example is used to set the label of a section element.\n\n[cb\ntype alias Data =\n    { counters : IntegerDict\n    , vectorCounters : VectorDict\n    , crossReferences : Dictionary\n    , tableOfContents : List TocEntry\n    , dictionary : Dictionary\n    , config : Config\n    }\n]\n\n[section2 Error recovery]\n\nThe [c parseLoop] function handles error recovery by modifiying the parse tree so as\nto (a) correct the error (b) highlight it in the rendered text.  A comment on the nature of the error\nis inserted in the TextCursor.  This comment is used by the supervising Parser.Document runLoop\nfunction which backtracks as needed to properly reparse the remaining text.\n\n[section2 Parser.Document]\n\nThe highest level of the parser is handled by [c Parser.Document.runLoop]:\n\n[cb\nrunLoop : Int -> List String -> State\nrunLoop generation strList = ...\n]\n\nThis function takes as input data supplied by the editor: the generation number and the source text presented as a list of strings.  Its output is a value of type [c State], as described below.  The [c input] field is the source text, which is progresselvely truncated as [c runLoop] proceeds, building up (\ni) a [c Data] value, (ii) a list of [c TextCursor].  The [c parsed] field of a text cursor holds the parsed text.\n\nThe task of the function [c runLoop] is to divide the input text into logical elements (strings), which are then fed to [c Driver.parseLoop].  The return value of [c Driver.parseLoop] is used to compute the new [c State].  A logical element is either (i) a paragraph, defined as an element sequence beginning with plain text and bounded above and below\nby blank lines or (ii) an element of the form [c NAME ... ] bounded above and below by blanke lines.\n\n\n[cb\n\ntype alias State =\n    { input : List String\n    , blockOffset : Int\n    , generation : Int\n    , blockType : BlockStatus\n    , blockContents : List String\n    , blockLevel : Int\n    , output : List (TextCursor Element)\n    , data : Parser.Data.Data\n    }\n\n]\n\n\nIf [c state] is the final value computed by [c runLoop], then the code\n\n[cb raw#\nstate\n   |> .output\n   |> List.map .parsed\n   |> List.reverse\n#  ]\n\nproduces a value of type [c List (List Element)] which can then be fed to the rendering machine.  The renderer also requires the [c state.data] field.\n\n\n';
var $author$project$Data$test = '\n[tableofcontents]\n\n[section1 A]\n\n Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla in sem eget mi cursus posuere sagittis a neque. Mauris ut fringilla velit. Aenean sit amet odio nec quam pretium sodales eget sed nibh. Etiam vel dui non nibh finibus vehicula eget eu purus. Sed fermentum dignissim mi gravida pretium. Aenean auctor interdum vulputate. Donec aliquet velit nibh, a ultricies mi posuere ut. Praesent id hendrerit odio. Nam eu elit a ipsum eleifend faucibus a id mauris. Vestibulum nec feugiat urna. Fusce congue odio non erat molestie, ut pharetra mi dapibus.\n\nDonec ultrices magna iaculis augue porta dignissim. Aenean dui felis, molestie ut dapibus quis, tristique a lacus. Sed vulputate, ligula id consequat venenatis, enim odio sagittis nisl, vel tincidunt ligula velit quis erat. Pellentesque ultricies luctus risus, sit amet aliquam justo congue id. Aliquam consectetur arcu nec risus malesuada pellentesque. Nam tincidunt, nisl sed congue ullamcorper, ante nibh tempus elit, et fringilla magna diam elementum enim. Pellentesque quam nisl, tempus non metus vestibulum, varius tempus mauris. Maecenas fermentum tristique enim vitae pulvinar. Aenean id metus non nisi sagittis consequat. Integer nec erat luctus urna semper lobortis vel non neque. In semper scelerisque enim in lacinia. Praesent ut interdum felis. Quisque vitae ornare velit.\n\n Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla in sem eget mi cursus posuere sagittis a neque. Mauris ut fringilla velit. Aenean sit amet odio nec quam pretium sodales eget sed nibh. Etiam vel dui non nibh finibus vehicula eget eu purus. Sed fermentum dignissim mi gravida pretium. Aenean auctor interdum vulputate. Donec aliquet velit nibh, a ultricies mi posuere ut. Praesent id hendrerit odio. Nam eu elit a ipsum eleifend faucibus a id mauris. Vestibulum nec feugiat urna. Fusce congue odio non erat molestie, ut pharetra mi dapibus.\n\nDonec ultrices magna iaculis augue porta dignissim. Aenean dui felis, molestie ut dapibus quis, tristique a lacus. Sed vulputate, ligula id consequat venenatis, enim odio sagittis nisl, vel tincidunt ligula velit quis erat. Pellentesque ultricies luctus risus, sit amet aliquam justo congue id. Aliquam consectetur arcu nec risus malesuada pellentesque. Nam tincidunt, nisl sed congue ullamcorper, ante nibh tempus elit, et fringilla magna diam elementum enim. Pellentesque quam nisl, tempus non metus vestibulum, varius tempus mauris. Maecenas fermentum tristique enim vitae pulvinar. Aenean id metus non nisi sagittis consequat. Integer nec erat luctus urna semper lobortis vel non neque. In semper scelerisque enim in lacinia. Praesent ut interdum felis. Quisque vitae ornare velit.\n\n[section2 B]\n\n Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla in sem eget mi cursus posuere sagittis a neque. Mauris ut fringilla velit. Aenean sit amet odio nec quam pretium sodales eget sed nibh. Etiam vel dui non nibh finibus vehicula eget eu purus. Sed fermentum dignissim mi gravida pretium. Aenean auctor interdum vulputate. Donec aliquet velit nibh, a ultricies mi posuere ut. Praesent id hendrerit odio. Nam eu elit a ipsum eleifend faucibus a id mauris. Vestibulum nec feugiat urna. Fusce congue odio non erat molestie, ut pharetra mi dapibus.\n\nDonec ultrices magna iaculis augue porta dignissim. Aenean dui felis, molestie ut dapibus quis, tristique a lacus. Sed vulputate, ligula id consequat venenatis, enim odio sagittis nisl, vel tincidunt ligula velit quis erat. Pellentesque ultricies luctus risus, sit amet aliquam justo congue id. Aliquam consectetur arcu nec risus malesuada pellentesque. Nam tincidunt, nisl sed congue ullamcorper, ante nibh tempus elit, et fringilla magna diam elementum enim. Pellentesque quam nisl, tempus non metus vestibulum, varius tempus mauris. Maecenas fermentum tristique enim vitae pulvinar. Aenean id metus non nisi sagittis consequat. Integer nec erat luctus urna semper lobortis vel non neque. In semper scelerisque enim in lacinia. Praesent ut interdum felis. Quisque vitae ornare velit.\n\n[section3 C]\n\n Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla in sem eget mi cursus posuere sagittis a neque. Mauris ut fringilla velit. Aenean sit amet odio nec quam pretium sodales eget sed nibh. Etiam vel dui non nibh finibus vehicula eget eu purus. Sed fermentum dignissim mi gravida pretium. Aenean auctor interdum vulputate. Donec aliquet velit nibh, a ultricies mi posuere ut. Praesent id hendrerit odio. Nam eu elit a ipsum eleifend faucibus a id mauris. Vestibulum nec feugiat urna. Fusce congue odio non erat molestie, ut pharetra mi dapibus.\n\nDonec ultrices magna iaculis augue porta dignissim. Aenean dui felis, molestie ut dapibus quis, tristique a lacus. Sed vulputate, ligula id consequat venenatis, enim odio sagittis nisl, vel tincidunt ligula velit quis erat. Pellentesque ultricies luctus risus, sit amet aliquam justo congue id. Aliquam consectetur arcu nec risus malesuada pellentesque. Nam tincidunt, nisl sed congue ullamcorper, ante nibh tempus elit, et fringilla magna diam elementum enim. Pellentesque quam nisl, tempus non metus vestibulum, varius tempus mauris. Maecenas fermentum tristique enim vitae pulvinar. Aenean id metus non nisi sagittis consequat. Integer nec erat luctus urna semper lobortis vel non neque. In semper scelerisque enim in lacinia. Praesent ut interdum felis. Quisque vitae ornare velit.\n\n[section4 D]\n\n\n Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla in sem eget mi cursus posuere sagittis a neque. Mauris ut fringilla velit. Aenean sit amet odio nec quam pretium sodales eget sed nibh. Etiam vel dui non nibh finibus vehicula eget eu purus. Sed fermentum dignissim mi gravida pretium. Aenean auctor interdum vulputate. Donec aliquet velit nibh, a ultricies mi posuere ut. Praesent id hendrerit odio. Nam eu elit a ipsum eleifend faucibus a id mauris. Vestibulum nec feugiat urna. Fusce congue odio non erat molestie, ut pharetra mi dapibus.\n\nDonec ultrices magna iaculis augue porta dignissim. Aenean dui felis, molestie ut dapibus quis, tristique a lacus. Sed vulputate, ligula id consequat venenatis, enim odio sagittis nisl, vel tincidunt ligula velit quis erat. Pellentesque ultricies luctus risus, sit amet aliquam justo congue id. Aliquam consectetur arcu nec risus malesuada pellentesque. Nam tincidunt, nisl sed congue ullamcorper, ante nibh tempus elit, et fringilla magna diam elementum enim. Pellentesque quam nisl, tempus non metus vestibulum, varius tempus mauris. Maecenas fermentum tristique enim vitae pulvinar. Aenean id metus non nisi sagittis consequat. Integer nec erat luctus urna semper lobortis vel non neque. In semper scelerisque enim in lacinia. Praesent ut interdum felis. Quisque vitae ornare velit.\n\n[section5 E]\n\n\n Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla in sem eget mi cursus posuere sagittis a neque. Mauris ut fringilla velit. Aenean sit amet odio nec quam pretium sodales eget sed nibh. Etiam vel dui non nibh finibus vehicula eget eu purus. Sed fermentum dignissim mi gravida pretium. Aenean auctor interdum vulputate. Donec aliquet velit nibh, a ultricies mi posuere ut. Praesent id hendrerit odio. Nam eu elit a ipsum eleifend faucibus a id mauris. Vestibulum nec feugiat urna. Fusce congue odio non erat molestie, ut pharetra mi dapibus.\n\nDonec ultrices magna iaculis augue porta dignissim. Aenean dui felis, molestie ut dapibus quis, tristique a lacus. Sed vulputate, ligula id consequat venenatis, enim odio sagittis nisl, vel tincidunt ligula velit quis erat. Pellentesque ultricies luctus risus, sit amet aliquam justo congue id. Aliquam consectetur arcu nec risus malesuada pellentesque. Nam tincidunt, nisl sed congue ullamcorper, ante nibh tempus elit, et fringilla magna diam elementum enim. Pellentesque quam nisl, tempus non metus vestibulum, varius tempus mauris. Maecenas fermentum tristique enim vitae pulvinar. Aenean id metus non nisi sagittis consequat. Integer nec erat luctus urna semper lobortis vel non neque. In semper scelerisque enim in lacinia. Praesent ut interdum felis. Quisque vitae ornare velit.\n\n[section6 F]\n\n\n Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla in sem eget mi cursus posuere sagittis a neque. Mauris ut fringilla velit. Aenean sit amet odio nec quam pretium sodales eget sed nibh. Etiam vel dui non nibh finibus vehicula eget eu purus. Sed fermentum dignissim mi gravida pretium. Aenean auctor interdum vulputate. Donec aliquet velit nibh, a ultricies mi posuere ut. Praesent id hendrerit odio. Nam eu elit a ipsum eleifend faucibus a id mauris. Vestibulum nec feugiat urna. Fusce congue odio non erat molestie, ut pharetra mi dapibus.\n\nDonec ultrices magna iaculis augue porta dignissim. Aenean dui felis, molestie ut dapibus quis, tristique a lacus. Sed vulputate, ligula id consequat venenatis, enim odio sagittis nisl, vel tincidunt ligula velit quis erat. Pellentesque ultricies luctus risus, sit amet aliquam justo congue id. Aliquam consectetur arcu nec risus malesuada pellentesque. Nam tincidunt, nisl sed congue ullamcorper, ante nibh tempus elit, et fringilla magna diam elementum enim. Pellentesque quam nisl, tempus non metus vestibulum, varius tempus mauris. Maecenas fermentum tristique enim vitae pulvinar. Aenean id metus non nisi sagittis consequat. Integer nec erat luctus urna semper lobortis vel non neque. In semper scelerisque enim in lacinia. Praesent ut interdum felis. Quisque vitae ornare velit.\n\n\n';
var $author$project$Data$get = function (docName) {
	switch (docName) {
		case 'manual':
			return $author$project$Data$manual;
		case 'notes':
			return $author$project$Data$notes;
		case 'test':
			return $author$project$Data$test;
		case 'announcement':
			return $author$project$Data$announcement;
		default:
			return 'No such document';
	}
};
var $author$project$Main$initialText = $author$project$Data$get('announcement');
var $elm$core$Platform$Cmd$batch = _Platform_batch;
var $elm$core$Platform$Cmd$none = $elm$core$Platform$Cmd$batch(_List_Nil);
var $author$project$Render$String$beginTag = function (str) {
	return '<' + (str + '>');
};
var $author$project$Render$String$endTag = function (str) {
	return '</' + (str + '>');
};
var $author$project$Render$String$tag = F2(
	function (tag_, str) {
		return _Utils_ap(
			$author$project$Render$String$beginTag(tag_),
			_Utils_ap(
				str,
				$author$project$Render$String$endTag(tag_)));
	});
var $author$project$Render$String$div = function (str) {
	return A2($author$project$Render$String$tag, 'div', str);
};
var $elm$parser$Parser$Advanced$Parser = $elm$core$Basics$identity;
var $elm$parser$Parser$Advanced$Bad = F2(
	function (a, b) {
		return {$: 1, a: a, b: b};
	});
var $elm$parser$Parser$Advanced$Good = F3(
	function (a, b, c) {
		return {$: 0, a: a, b: b, c: c};
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
var $elm$parser$Parser$Advanced$Done = function (a) {
	return {$: 1, a: a};
};
var $author$project$Parser$Error$EndOfInput = {$: 5};
var $elm$parser$Parser$Advanced$Loop = function (a) {
	return {$: 0, a: a};
};
var $elm$parser$Parser$Advanced$AddRight = F2(
	function (a, b) {
		return {$: 1, a: a, b: b};
	});
var $elm$parser$Parser$Advanced$DeadEnd = F4(
	function (row, col, problem, contextStack) {
		return {gP: col, cw: contextStack, hU: problem, eF: row};
	});
var $elm$parser$Parser$Advanced$Empty = {$: 0};
var $elm$parser$Parser$Advanced$fromState = F2(
	function (s, x) {
		return A2(
			$elm$parser$Parser$Advanced$AddRight,
			$elm$parser$Parser$Advanced$Empty,
			A4($elm$parser$Parser$Advanced$DeadEnd, s.eF, s.gP, x, s.e));
	});
var $elm$parser$Parser$Advanced$end = function (x) {
	return function (s) {
		return _Utils_eq(
			$elm$core$String$length(s.h8),
			s.aG) ? A3($elm$parser$Parser$Advanced$Good, false, 0, s) : A2(
			$elm$parser$Parser$Advanced$Bad,
			false,
			A2($elm$parser$Parser$Advanced$fromState, s, x));
	};
};
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
var $elm$parser$Parser$Advanced$keeper = F2(
	function (parseFunc, parseArg) {
		return A3($elm$parser$Parser$Advanced$map2, $elm$core$Basics$apL, parseFunc, parseArg);
	});
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
var $elm$parser$Parser$Advanced$succeed = function (a) {
	return function (s) {
		return A3($elm$parser$Parser$Advanced$Good, false, a, s);
	};
};
var $author$project$Parser$Tool$manyHelp = F2(
	function (p, vs) {
		return $elm$parser$Parser$Advanced$oneOf(
			_List_fromArray(
				[
					A2(
					$elm$parser$Parser$Advanced$map,
					function (_v0) {
						return $elm$parser$Parser$Advanced$Done(
							$elm$core$List$reverse(vs));
					},
					$elm$parser$Parser$Advanced$end($author$project$Parser$Error$EndOfInput)),
					A2(
					$elm$parser$Parser$Advanced$keeper,
					$elm$parser$Parser$Advanced$succeed(
						function (v) {
							return $elm$parser$Parser$Advanced$Loop(
								A2($elm$core$List$cons, v, vs));
						}),
					p),
					A2(
					$elm$parser$Parser$Advanced$map,
					function (_v1) {
						return $elm$parser$Parser$Advanced$Done(
							$elm$core$List$reverse(vs));
					},
					$elm$parser$Parser$Advanced$succeed(0))
				]));
	});
var $author$project$Parser$Tool$many = function (p) {
	return A2(
		$elm$parser$Parser$Advanced$loop,
		_List_Nil,
		$author$project$Parser$Tool$manyHelp(p));
};
var $author$project$Parser$Error$CArgsAndBody = 3;
var $author$project$Parser$Error$CBody = 2;
var $author$project$Parser$Error$CElement = 0;
var $author$project$Parser$Element$Element = F4(
	function (a, b, c, d) {
		return {$: 1, a: a, b: b, c: c, d: d};
	});
var $author$project$Parser$Element$LX = F2(
	function (a, b) {
		return {$: 2, a: a, b: b};
	});
var $author$project$Parser$Error$CArgs = 1;
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
var $author$project$Parser$Tool$between = F3(
	function (p, q, r) {
		return A2(
			$elm$parser$Parser$Advanced$andThen,
			function (x) {
				return A2(
					$elm$parser$Parser$Advanced$map,
					function (_v1) {
						return x;
					},
					r);
			},
			A2(
				$elm$parser$Parser$Advanced$andThen,
				function (_v0) {
					return q;
				},
				p));
	});
var $elm$parser$Parser$Advanced$Located = F3(
	function (row, col, context) {
		return {gP: col, e: context, eF: row};
	});
var $elm$parser$Parser$Advanced$changeContext = F2(
	function (newContext, s) {
		return {gP: s.gP, e: newContext, i: s.i, aG: s.aG, eF: s.eF, h8: s.h8};
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
						A3($elm$parser$Parser$Advanced$Located, s0.eF, s0.gP, context),
						s0.e),
					s0));
			if (!_v1.$) {
				var p = _v1.a;
				var a = _v1.b;
				var s1 = _v1.c;
				return A3(
					$elm$parser$Parser$Advanced$Good,
					p,
					a,
					A2($elm$parser$Parser$Advanced$changeContext, s0.e, s1));
			} else {
				var step = _v1;
				return step;
			}
		};
	});
var $author$project$Parser$Error$ExpectingComma = {$: 0};
var $elm$parser$Parser$Advanced$Token = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $elm$parser$Parser$Advanced$isSubString = _Parser_isSubString;
var $elm$core$Basics$negate = function (n) {
	return -n;
};
var $elm$core$Basics$not = _Basics_not;
var $elm$parser$Parser$Advanced$token = function (_v0) {
	var str = _v0.a;
	var expecting = _v0.b;
	var progress = !$elm$core$String$isEmpty(str);
	return function (s) {
		var _v1 = A5($elm$parser$Parser$Advanced$isSubString, str, s.aG, s.eF, s.gP, s.h8);
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
			{gP: newCol, e: s.e, i: s.i, aG: newOffset, eF: newRow, h8: s.h8});
	};
};
var $elm$parser$Parser$Advanced$symbol = $elm$parser$Parser$Advanced$token;
var $author$project$Parser$Element$comma_ = $elm$parser$Parser$Advanced$symbol(
	A2($elm$parser$Parser$Advanced$Token, ',', $author$project$Parser$Error$ExpectingComma));
var $author$project$Parser$Tool$first = F2(
	function (p, q) {
		return A2(
			$elm$parser$Parser$Advanced$andThen,
			function (x) {
				return A2(
					$elm$parser$Parser$Advanced$map,
					function (_v0) {
						return x;
					},
					q);
			},
			p);
	});
var $elm$parser$Parser$Advanced$isSubChar = _Parser_isSubChar;
var $elm$parser$Parser$Advanced$chompWhileHelp = F5(
	function (isGood, offset, row, col, s0) {
		chompWhileHelp:
		while (true) {
			var newOffset = A3($elm$parser$Parser$Advanced$isSubChar, isGood, offset, s0.h8);
			if (_Utils_eq(newOffset, -1)) {
				return A3(
					$elm$parser$Parser$Advanced$Good,
					_Utils_cmp(s0.aG, offset) < 0,
					0,
					{gP: col, e: s0.e, i: s0.i, aG: offset, eF: row, h8: s0.h8});
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
		return A5($elm$parser$Parser$Advanced$chompWhileHelp, isGood, s.aG, s.eF, s.gP, s);
	};
};
var $elm$parser$Parser$Advanced$spaces = $elm$parser$Parser$Advanced$chompWhile(
	function (c) {
		return (c === ' ') || ((c === '\n') || (c === '\r'));
	});
var $author$project$Parser$Element$comma = A2($author$project$Parser$Tool$first, $author$project$Parser$Element$comma_, $elm$parser$Parser$Advanced$spaces);
var $author$project$Parser$Tool$manyWithInitialList = F2(
	function (initialList, p) {
		return A2(
			$elm$parser$Parser$Advanced$loop,
			initialList,
			$author$project$Parser$Tool$manyHelp(p));
	});
var $author$project$Parser$Tool$manyNonEmpty_ = F2(
	function (p, q) {
		return A2(
			$elm$parser$Parser$Advanced$andThen,
			function (x) {
				return A2(
					$author$project$Parser$Tool$manyWithInitialList,
					_List_fromArray(
						[x]),
					q);
			},
			p);
	});
var $author$project$Parser$Tool$second = F2(
	function (p, q) {
		return A2(
			$elm$parser$Parser$Advanced$andThen,
			function (_v0) {
				return q;
			},
			p);
	});
var $author$project$Parser$Tool$manySeparatedBy = F2(
	function (sep, p) {
		return A2(
			$author$project$Parser$Tool$manyNonEmpty_,
			p,
			A2($author$project$Parser$Tool$second, sep, p));
	});
var $elm$parser$Parser$Advanced$getOffset = function (s) {
	return A3($elm$parser$Parser$Advanced$Good, false, s.aG, s);
};
var $elm$parser$Parser$Advanced$getSource = function (s) {
	return A3($elm$parser$Parser$Advanced$Good, false, s.h8, s);
};
var $elm$core$Basics$always = F2(
	function (a, _v0) {
		return a;
	});
var $elm$parser$Parser$Advanced$ignorer = F2(
	function (keepParser, ignoreParser) {
		return A3($elm$parser$Parser$Advanced$map2, $elm$core$Basics$always, keepParser, ignoreParser);
	});
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
var $author$project$Parser$Element$rawText_ = function (stopChars) {
	return A2(
		$elm$parser$Parser$Advanced$keeper,
		A2(
			$elm$parser$Parser$Advanced$keeper,
			A2(
				$elm$parser$Parser$Advanced$keeper,
				$elm$parser$Parser$Advanced$succeed(
					F3(
						function (begin, end, content) {
							return {
								eg: A3($elm$core$String$slice, begin, end, content),
								hw: end - begin,
								d5: begin
							};
						})),
				A2(
					$elm$parser$Parser$Advanced$ignorer,
					$elm$parser$Parser$Advanced$getOffset,
					$elm$parser$Parser$Advanced$chompWhile(
						function (c) {
							return !A2($elm$core$List$member, c, stopChars);
						}))),
			$elm$parser$Parser$Advanced$getOffset),
		$elm$parser$Parser$Advanced$getSource);
};
var $author$project$Parser$Element$string_ = function (stopChars) {
	return A2(
		$elm$parser$Parser$Advanced$map,
		function ($) {
			return $.eg;
		},
		$author$project$Parser$Element$rawText_(stopChars));
};
var $author$project$Parser$Element$string = function (stopChars) {
	return A2(
		$author$project$Parser$Tool$first,
		$author$project$Parser$Element$string_(stopChars),
		$elm$parser$Parser$Advanced$spaces);
};
var $author$project$Parser$Element$innerElementArgs = A2(
	$author$project$Parser$Tool$manySeparatedBy,
	$author$project$Parser$Element$comma,
	$author$project$Parser$Element$string(
		_List_fromArray(
			[',', '|'])));
var $author$project$Parser$Error$ExpectingPipe = {$: 3};
var $author$project$Parser$Element$pipeSymbol = $elm$parser$Parser$Advanced$symbol(
	A2($elm$parser$Parser$Advanced$Token, '|', $author$project$Parser$Error$ExpectingPipe));
var $author$project$Parser$Element$elementArgs = A2(
	$elm$parser$Parser$Advanced$inContext,
	1,
	A3($author$project$Parser$Tool$between, $author$project$Parser$Element$pipeSymbol, $author$project$Parser$Element$innerElementArgs, $author$project$Parser$Element$pipeSymbol));
var $author$project$Parser$Element$elementName = A2(
	$author$project$Parser$Tool$first,
	$author$project$Parser$Element$string_(
		_List_fromArray(
			['[', ']', ' ', '\n'])),
	$elm$parser$Parser$Advanced$spaces);
var $author$project$Parser$Metadata$init = F4(
	function (generation, lineNumber, start, finish) {
		return {eZ: lineNumber, bI: generation, bS: '', hw: finish - start, aG: start};
	});
var $elm$parser$Parser$Advanced$lazy = function (thunk) {
	return function (s) {
		var _v0 = thunk(0);
		var parse = _v0;
		return parse(s);
	};
};
var $author$project$Parser$Error$ExpectingLeftBracket = {$: 1};
var $author$project$Parser$Element$leftBracket = $elm$parser$Parser$Advanced$symbol(
	A2($elm$parser$Parser$Advanced$Token, '[', $author$project$Parser$Error$ExpectingLeftBracket));
var $author$project$Parser$Error$ExpectingRightBracket = {$: 2};
var $author$project$Parser$Element$rightBracket = $elm$parser$Parser$Advanced$symbol(
	A2($elm$parser$Parser$Advanced$Token, ']', $author$project$Parser$Error$ExpectingRightBracket));
var $author$project$Parser$Element$Text = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $author$project$Parser$Error$TextExpression = 4;
var $author$project$Parser$XString$isLanguageChar = function (c) {
	return (c === '|') || ((c === '[') || ((c === ']') || (c === '\\')));
};
var $author$project$Parser$XString$isNonLanguageChar = function (c) {
	return !$author$project$Parser$XString$isLanguageChar(c);
};
var $elm$core$List$head = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return $elm$core$Maybe$Just(x);
	} else {
		return $elm$core$Maybe$Nothing;
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
var $elm$core$Maybe$withDefault = F2(
	function (_default, maybe) {
		if (!maybe.$) {
			var value = maybe.a;
			return value;
		} else {
			return _default;
		}
	});
var $author$project$Parser$XString$reduce = function (list) {
	var start = A2(
		$elm$core$Maybe$withDefault,
		0,
		A2(
			$elm$core$Maybe$map,
			function ($) {
				return $.d5;
			},
			$elm$core$List$head(list)));
	var reversedList = $elm$core$List$reverse(list);
	var finish = A2(
		$elm$core$Maybe$withDefault,
		0,
		A2(
			$elm$core$Maybe$map,
			function ($) {
				return $.em;
			},
			$elm$core$List$head(reversedList)));
	return {
		eg: A3(
			$elm$core$List$foldl,
			$elm$core$Basics$append,
			'',
			A2(
				$elm$core$List$map,
				function ($) {
					return $.eg;
				},
				reversedList)),
		em: finish,
		d5: start
	};
};
var $author$project$Parser$Error$ExpectingEscape = {$: 4};
var $author$project$Parser$Error$UnHandledError = function (a) {
	return {$: 9, a: a};
};
var $elm$parser$Parser$Advanced$chompIf = F2(
	function (isGood, expecting) {
		return function (s) {
			var newOffset = A3($elm$parser$Parser$Advanced$isSubChar, isGood, s.aG, s.h8);
			return _Utils_eq(newOffset, -1) ? A2(
				$elm$parser$Parser$Advanced$Bad,
				false,
				A2($elm$parser$Parser$Advanced$fromState, s, expecting)) : (_Utils_eq(newOffset, -2) ? A3(
				$elm$parser$Parser$Advanced$Good,
				true,
				0,
				{gP: 1, e: s.e, i: s.i, aG: s.aG + 1, eF: s.eF + 1, h8: s.h8}) : A3(
				$elm$parser$Parser$Advanced$Good,
				true,
				0,
				{gP: s.gP + 1, e: s.e, i: s.i, aG: newOffset, eF: s.eF, h8: s.h8}));
		};
	});
var $author$project$Parser$Tool$char = function (prefixTest) {
	return A2(
		$elm$parser$Parser$Advanced$keeper,
		A2(
			$elm$parser$Parser$Advanced$keeper,
			A2(
				$elm$parser$Parser$Advanced$keeper,
				$elm$parser$Parser$Advanced$succeed(
					F3(
						function (start, finish, content) {
							return {
								eg: A3($elm$core$String$slice, start, finish, content),
								em: finish,
								d5: start
							};
						})),
				A2(
					$elm$parser$Parser$Advanced$ignorer,
					$elm$parser$Parser$Advanced$getOffset,
					A2(
						$elm$parser$Parser$Advanced$chompIf,
						function (c) {
							return prefixTest(c);
						},
						$author$project$Parser$Error$UnHandledError(3)))),
			$elm$parser$Parser$Advanced$getOffset),
		$elm$parser$Parser$Advanced$getSource);
};
var $author$project$Parser$XString$escapedChar = A2(
	$elm$parser$Parser$Advanced$map,
	function (result) {
		return {eg: '\\' + result.eg, em: result.em, d5: result.d5 - 1};
	},
	A2(
		$author$project$Parser$Tool$second,
		$elm$parser$Parser$Advanced$symbol(
			A2($elm$parser$Parser$Advanced$Token, '\\', $author$project$Parser$Error$ExpectingEscape)),
		$author$project$Parser$Tool$char(
			function (c) {
				return true;
			})));
var $author$project$Parser$Tool$manyNonEmpty = function (p) {
	return A2(
		$elm$parser$Parser$Advanced$andThen,
		function (x) {
			return A2(
				$author$project$Parser$Tool$manyWithInitialList,
				_List_fromArray(
					[x]),
				p);
		},
		p);
};
var $elm$core$Basics$neq = _Utils_notEqual;
var $author$project$Parser$Tool$text = F2(
	function (prefixTest, predicate) {
		return A2(
			$elm$parser$Parser$Advanced$keeper,
			A2(
				$elm$parser$Parser$Advanced$keeper,
				A2(
					$elm$parser$Parser$Advanced$keeper,
					$elm$parser$Parser$Advanced$succeed(
						F3(
							function (start, finish, content) {
								return {
									eg: A3($elm$core$String$slice, start, finish, content),
									em: finish,
									d5: start
								};
							})),
					A2(
						$elm$parser$Parser$Advanced$ignorer,
						A2(
							$elm$parser$Parser$Advanced$ignorer,
							$elm$parser$Parser$Advanced$getOffset,
							A2(
								$elm$parser$Parser$Advanced$chompIf,
								function (c) {
									return prefixTest(c);
								},
								$author$project$Parser$Error$UnHandledError(2))),
						$elm$parser$Parser$Advanced$chompWhile(
							function (c) {
								return predicate(c);
							}))),
				$elm$parser$Parser$Advanced$getOffset),
			$elm$parser$Parser$Advanced$getSource);
	});
var $author$project$Parser$XString$textWithPredicate_ = function (predicate) {
	return A2(
		$author$project$Parser$Tool$text,
		predicate,
		function (c) {
			return (c !== '\\') && predicate(c);
		});
};
var $author$project$Parser$XString$textListWithPredicate = function (predicate) {
	return $author$project$Parser$Tool$manyNonEmpty(
		$elm$parser$Parser$Advanced$oneOf(
			_List_fromArray(
				[
					$author$project$Parser$XString$textWithPredicate_(predicate),
					$author$project$Parser$XString$escapedChar
				])));
};
var $author$project$Parser$XString$textWithPredicate = function (predicate) {
	return A2(
		$elm$parser$Parser$Advanced$map,
		$author$project$Parser$XString$reduce,
		$author$project$Parser$XString$textListWithPredicate(predicate));
};
var $author$project$Parser$Element$plainText = F2(
	function (generation, lineNumber) {
		return A2(
			$elm$parser$Parser$Advanced$inContext,
			4,
			A2(
				$elm$parser$Parser$Advanced$map,
				function (data) {
					return A2(
						$author$project$Parser$Element$Text,
						data.eg,
						$elm$core$Maybe$Just(
							A4($author$project$Parser$Metadata$init, generation, lineNumber, data.d5, data.em)));
				},
				$author$project$Parser$XString$textWithPredicate($author$project$Parser$XString$isNonLanguageChar)));
	});
var $elm$core$String$dropRight = F2(
	function (n, string) {
		return (n < 1) ? string : A3($elm$core$String$slice, 0, -n, string);
	});
var $elm$core$Basics$ge = _Utils_ge;
var $author$project$Parser$Tool$oneChar = A2(
	$elm$parser$Parser$Advanced$keeper,
	A2(
		$elm$parser$Parser$Advanced$keeper,
		A2(
			$elm$parser$Parser$Advanced$keeper,
			$elm$parser$Parser$Advanced$succeed(
				F3(
					function (begin, end, data) {
						return A3($elm$core$String$slice, begin, end, data);
					})),
			A2(
				$elm$parser$Parser$Advanced$ignorer,
				$elm$parser$Parser$Advanced$getOffset,
				A2(
					$elm$parser$Parser$Advanced$chompIf,
					function (c) {
						return true;
					},
					$author$project$Parser$Error$UnHandledError(4)))),
		$elm$parser$Parser$Advanced$getOffset),
	$elm$parser$Parser$Advanced$getSource);
var $elm$core$String$right = F2(
	function (n, string) {
		return (n < 1) ? '' : A3(
			$elm$core$String$slice,
			-n,
			$elm$core$String$length(string),
			string);
	});
var $author$project$Parser$RawString$updateState = F3(
	function (maxHashes, c, state) {
		return (c === '#') ? ((A2($elm$core$String$right, 1, state.eg) === '#') ? ((_Utils_cmp(state.ay + 1, state.ay + 1) > 0) ? $elm$parser$Parser$Advanced$Done(
			{
				eg: _Utils_ap(state.eg, c),
				ay: state.ay + 1
			}) : $elm$parser$Parser$Advanced$Loop(
			{
				eg: _Utils_ap(state.eg, c),
				ay: state.ay + 1
			})) : $elm$parser$Parser$Advanced$Loop(
			{
				eg: _Utils_ap(state.eg, c),
				ay: 1
			})) : $elm$parser$Parser$Advanced$Loop(
			{
				eg: _Utils_ap(state.eg, c),
				ay: 0
			});
	});
var $author$project$Parser$RawString$rawStringHelp = F2(
	function (hashes, state) {
		return (_Utils_cmp(state.ay, hashes) > -1) ? $elm$parser$Parser$Advanced$succeed(
			$elm$parser$Parser$Advanced$Done(state)) : A2(
			$elm$parser$Parser$Advanced$map,
			function (c) {
				return A3($author$project$Parser$RawString$updateState, hashes, c, state);
			},
			$author$project$Parser$Tool$oneChar);
	});
var $author$project$Parser$RawString$rawStringLoop = function (hashes) {
	return A2(
		$elm$parser$Parser$Advanced$loop,
		{eg: '', ay: 0},
		$author$project$Parser$RawString$rawStringHelp(hashes));
};
var $author$project$Parser$Error$ExpectingRawPrefix = {$: 8};
var $author$project$Parser$RawString$rawStringPrefix = A2(
	$elm$parser$Parser$Advanced$keeper,
	A2(
		$elm$parser$Parser$Advanced$keeper,
		$elm$parser$Parser$Advanced$succeed(
			F2(
				function (begin, end) {
					return (end - begin) - 3;
				})),
		A2(
			$elm$parser$Parser$Advanced$ignorer,
			A2(
				$elm$parser$Parser$Advanced$ignorer,
				$elm$parser$Parser$Advanced$getOffset,
				$elm$parser$Parser$Advanced$symbol(
					A2($elm$parser$Parser$Advanced$Token, 'raw#', $author$project$Parser$Error$ExpectingRawPrefix))),
			$elm$parser$Parser$Advanced$chompWhile(
				function (c) {
					return c === '#';
				}))),
	$elm$parser$Parser$Advanced$getOffset);
var $author$project$Parser$RawString$parser = A2(
	$elm$parser$Parser$Advanced$andThen,
	function (maxHashes) {
		return A2(
			$elm$parser$Parser$Advanced$map,
			function (ls) {
				return A2($elm$core$String$dropRight, maxHashes, ls.eg);
			},
			$author$project$Parser$RawString$rawStringLoop(maxHashes));
	},
	$author$project$Parser$RawString$rawStringPrefix);
var $author$project$Parser$Element$rawString = F2(
	function (generation, lineNumber) {
		return A2(
			$elm$parser$Parser$Advanced$keeper,
			A2(
				$elm$parser$Parser$Advanced$keeper,
				A2(
					$elm$parser$Parser$Advanced$keeper,
					$elm$parser$Parser$Advanced$succeed(
						F3(
							function (start, source, finish) {
								return A2(
									$author$project$Parser$Element$Text,
									source,
									$elm$core$Maybe$Just(
										A4($author$project$Parser$Metadata$init, generation, lineNumber, start, finish)));
							})),
					$elm$parser$Parser$Advanced$getOffset),
				$author$project$Parser$RawString$parser),
			$elm$parser$Parser$Advanced$getOffset);
	});
var $author$project$Parser$Element$text = F2(
	function (generation, lineNumber) {
		return $elm$parser$Parser$Advanced$oneOf(
			_List_fromArray(
				[
					A2($author$project$Parser$Element$rawString, generation, lineNumber),
					A2($author$project$Parser$Element$plainText, generation, lineNumber)
				]));
	});
var $author$project$Parser$Element$argsAndBody = F2(
	function (generation, lineNumber) {
		return A2(
			$elm$parser$Parser$Advanced$inContext,
			3,
			$elm$parser$Parser$Advanced$oneOf(
				_List_fromArray(
					[
						A2($author$project$Parser$Element$argsAndBody_, generation, lineNumber),
						A2($author$project$Parser$Element$bodyOnly, generation, lineNumber)
					])));
	});
var $author$project$Parser$Element$argsAndBody_ = F2(
	function (generation, lineNumber) {
		return A2(
			$elm$parser$Parser$Advanced$keeper,
			A2(
				$elm$parser$Parser$Advanced$keeper,
				$elm$parser$Parser$Advanced$succeed(
					F2(
						function (args, body_) {
							return _Utils_Tuple2(args, body_);
						})),
				A2($elm$parser$Parser$Advanced$ignorer, $author$project$Parser$Element$elementArgs, $elm$parser$Parser$Advanced$spaces)),
			A2($author$project$Parser$Element$elementBody, generation, lineNumber));
	});
var $author$project$Parser$Element$bodyOnly = F2(
	function (generation, lineNumber) {
		return A2(
			$elm$parser$Parser$Advanced$keeper,
			$elm$parser$Parser$Advanced$succeed(
				function (body_) {
					return _Utils_Tuple2(_List_Nil, body_);
				}),
			A2($author$project$Parser$Element$elementBody, generation, lineNumber));
	});
var $author$project$Parser$Element$elementBody = F2(
	function (generation, lineNumber) {
		return A2(
			$elm$parser$Parser$Advanced$inContext,
			2,
			$elm$parser$Parser$Advanced$lazy(
				function (_v1) {
					return A2(
						$elm$parser$Parser$Advanced$map,
						function (list) {
							return A2($author$project$Parser$Element$LX, list, $elm$core$Maybe$Nothing);
						},
						$author$project$Parser$Tool$many(
							A2($author$project$Parser$Element$parser, generation, lineNumber)));
				}));
	});
var $author$project$Parser$Element$parser = F2(
	function (generation, lineNumber) {
		return $elm$parser$Parser$Advanced$oneOf(
			_List_fromArray(
				[
					A2($author$project$Parser$Element$primitiveElement, generation, lineNumber),
					A2($author$project$Parser$Element$text, generation, lineNumber)
				]));
	});
var $author$project$Parser$Element$primitiveElement = F2(
	function (generation, blockOffset) {
		return A2(
			$elm$parser$Parser$Advanced$inContext,
			0,
			A2(
				$elm$parser$Parser$Advanced$keeper,
				A2(
					$elm$parser$Parser$Advanced$keeper,
					A2(
						$elm$parser$Parser$Advanced$keeper,
						A2(
							$elm$parser$Parser$Advanced$keeper,
							A2(
								$elm$parser$Parser$Advanced$keeper,
								$elm$parser$Parser$Advanced$succeed(
									F5(
										function (start, name, _v0, end, source) {
											var args = _v0.a;
											var body_ = _v0.b;
											return A4(
												$author$project$Parser$Element$Element,
												name,
												args,
												body_,
												$elm$core$Maybe$Just(
													A4($author$project$Parser$Metadata$init, generation, blockOffset, start, end)));
										})),
								A2($elm$parser$Parser$Advanced$ignorer, $elm$parser$Parser$Advanced$getOffset, $author$project$Parser$Element$leftBracket)),
							$author$project$Parser$Element$elementName),
						A2(
							$elm$parser$Parser$Advanced$ignorer,
							A2(
								$elm$parser$Parser$Advanced$ignorer,
								A2($author$project$Parser$Element$argsAndBody, generation, blockOffset),
								$elm$parser$Parser$Advanced$spaces),
							$author$project$Parser$Element$rightBracket)),
					$elm$parser$Parser$Advanced$getOffset),
				$elm$parser$Parser$Advanced$getSource));
	});
var $author$project$Parser$Element$listParser = F2(
	function (generation, lineNumber) {
		return $author$project$Parser$Tool$many(
			A2($author$project$Parser$Element$parser, generation, lineNumber));
	});
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
			{gP: 1, e: _List_Nil, i: 1, aG: 0, eF: 1, h8: src});
		if (!_v1.$) {
			var value = _v1.b;
			return $elm$core$Result$Ok(value);
		} else {
			var bag = _v1.b;
			return $elm$core$Result$Err(
				A2($elm$parser$Parser$Advanced$bagToList, bag, _List_Nil));
		}
	});
var $author$project$Parser$Element$parseList = F3(
	function (generation, lineNumber, str) {
		return A2(
			$elm$parser$Parser$Advanced$run,
			A2($author$project$Parser$Element$listParser, generation, lineNumber),
			str);
	});
var $author$project$Render$String$B = function (a) {
	return {$: 1, a: a};
};
var $author$project$Render$String$I = function (a) {
	return {$: 0, a: a};
};
var $elm$core$Dict$RBEmpty_elm_builtin = {$: -2};
var $elm$core$Dict$empty = $elm$core$Dict$RBEmpty_elm_builtin;
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
var $author$project$Render$String$span = function (str) {
	return A2($author$project$Render$String$tag, 'span', str);
};
var $author$project$Render$String$renderCode = F3(
	function (_v12, _v13, body) {
		return A2(
			$author$project$Render$String$tag,
			'code',
			$author$project$Render$String$renderElement(body));
	});
var $author$project$Render$String$renderElement = function (element) {
	switch (element.$) {
		case 0:
			var str = element.a;
			return str;
		case 1:
			var name = element.a;
			var args = element.b;
			var body = element.c;
			return A3($author$project$Render$String$renderWithDictionary, name, args, body);
		default:
			var list = element.a;
			return A2(
				$elm$core$String$join,
				' ',
				A2($elm$core$List$map, $author$project$Render$String$renderElement, list));
	}
};
var $author$project$Render$String$renderItalic = F3(
	function (_v9, _v10, body) {
		return A2(
			$author$project$Render$String$tag,
			'i',
			$author$project$Render$String$renderElement(body));
	});
var $author$project$Render$String$renderMath = F3(
	function (_v7, _v8, body) {
		return $author$project$Render$String$span(
			'\\(' + ($author$project$Render$String$renderElement(body) + '\\)'));
	});
var $author$project$Render$String$renderMathDisplay = F3(
	function (_v5, _v6, body) {
		return $author$project$Render$String$div(
			'\\[' + ($author$project$Render$String$renderElement(body) + '\\]'));
	});
var $author$project$Render$String$renderStrong = F3(
	function (_v3, _v4, body) {
		return A2(
			$author$project$Render$String$tag,
			'strong',
			$author$project$Render$String$renderElement(body));
	});
var $author$project$Render$String$renderTheorem = F3(
	function (_v2, args, body) {
		return $author$project$Render$String$div(
			'<p><strong>Theorem.</strong></p><p>' + ($author$project$Render$String$renderElement(body) + '</p>'));
	});
var $author$project$Render$String$renderWithDictionary = F3(
	function (name, args, body) {
		var _v0 = A2(
			$elm$core$Dict$get,
			name,
			$author$project$Render$String$cyclic$renderElementDict());
		if (_v0.$ === 1) {
			return $author$project$Render$String$span(name + ': unimplemented');
		} else {
			var f = _v0.a;
			if (!f.$) {
				var g = f.a;
				return A3(g, name, args, body);
			} else {
				var g = f.a;
				return A3(g, name, args, body);
			}
		}
	});
function $author$project$Render$String$cyclic$renderElementDict() {
	return $elm$core$Dict$fromList(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'strong',
				$author$project$Render$String$I($author$project$Render$String$renderStrong)),
				_Utils_Tuple2(
				'italic',
				$author$project$Render$String$I($author$project$Render$String$renderItalic)),
				_Utils_Tuple2(
				'code',
				$author$project$Render$String$I($author$project$Render$String$renderCode)),
				_Utils_Tuple2(
				'math',
				$author$project$Render$String$I($author$project$Render$String$renderMath)),
				_Utils_Tuple2(
				'mathDisplay',
				$author$project$Render$String$B($author$project$Render$String$renderMathDisplay)),
				_Utils_Tuple2(
				'theorem',
				$author$project$Render$String$B($author$project$Render$String$renderTheorem))
			]));
}
var $author$project$Render$String$renderElementDict = $author$project$Render$String$cyclic$renderElementDict();
$author$project$Render$String$cyclic$renderElementDict = function () {
	return $author$project$Render$String$renderElementDict;
};
var $author$project$Render$String$renderString = function (str) {
	var _v0 = A3($author$project$Parser$Element$parseList, 0, 0, str);
	if (_v0.$ === 1) {
		return '<span style=\'color:red\'>Parser error for</span> <span style=\'color:blue\'>' + (str + '</span>');
	} else {
		var list = _v0.a;
		return $author$project$Render$String$div(
			A2(
				$elm$core$String$join,
				'',
				A2($elm$core$List$map, $author$project$Render$String$renderElement, list)));
	}
};
var $author$project$Main$init = function (flags) {
	return _Utils_Tuple2(
		{
			ae: 0,
			aQ: $author$project$Main$initialText,
			dT: 1,
			b6: $author$project$Render$String$renderString($author$project$Main$initialText),
			eO: flags.es,
			gf: flags.gc
		},
		$elm$core$Platform$Cmd$none);
};
var $elm$json$Json$Decode$int = _Json_decodeInt;
var $elm$core$Platform$Sub$batch = _Platform_batch;
var $elm$core$Platform$Sub$none = $elm$core$Platform$Sub$batch(_List_Nil);
var $author$project$Main$subscriptions = function (model) {
	return $elm$core$Platform$Sub$none;
};
var $author$project$Main$update = F2(
	function (msg, model) {
		switch (msg.$) {
			case 0:
				return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
			case 1:
				var str = msg.a;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							ae: model.ae + 1,
							aQ: str,
							b6: $author$project$Render$String$renderString(str)
						}),
					$elm$core$Platform$Cmd$none);
			case 4:
				var mode = msg.a;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{ae: model.ae + 1, dT: mode}),
					$elm$core$Platform$Cmd$none);
			case 2:
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							ae: model.ae + 1,
							aQ: '',
							b6: $author$project$Render$String$renderString('')
						}),
					$elm$core$Platform$Cmd$none);
			case 3:
				var docName = msg.a;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							ae: model.ae + 1,
							aQ: $author$project$Data$get(docName),
							b6: $author$project$Render$String$renderString(
								$author$project$Data$get(docName))
						}),
					$elm$core$Platform$Cmd$none);
			default:
				return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
		}
	});
var $mdgriffith$elm_ui$Internal$Model$Colored = F3(
	function (a, b, c) {
		return {$: 4, a: a, b: b, c: c};
	});
var $mdgriffith$elm_ui$Internal$Model$StyleClass = F2(
	function (a, b) {
		return {$: 4, a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Flag$Flag = function (a) {
	return {$: 0, a: a};
};
var $mdgriffith$elm_ui$Internal$Flag$Second = function (a) {
	return {$: 1, a: a};
};
var $elm$core$Bitwise$shiftLeftBy = _Bitwise_shiftLeftBy;
var $mdgriffith$elm_ui$Internal$Flag$flag = function (i) {
	return (i > 31) ? $mdgriffith$elm_ui$Internal$Flag$Second(1 << (i - 32)) : $mdgriffith$elm_ui$Internal$Flag$Flag(1 << i);
};
var $mdgriffith$elm_ui$Internal$Flag$bgColor = $mdgriffith$elm_ui$Internal$Flag$flag(8);
var $elm$core$Basics$round = _Basics_round;
var $mdgriffith$elm_ui$Internal$Model$floatClass = function (x) {
	return $elm$core$String$fromInt(
		$elm$core$Basics$round(x * 255));
};
var $mdgriffith$elm_ui$Internal$Model$formatColorClass = function (_v0) {
	var red = _v0.a;
	var green = _v0.b;
	var blue = _v0.c;
	var alpha = _v0.d;
	return $mdgriffith$elm_ui$Internal$Model$floatClass(red) + ('-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(green) + ('-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(blue) + ('-' + $mdgriffith$elm_ui$Internal$Model$floatClass(alpha))))));
};
var $mdgriffith$elm_ui$Element$Background$color = function (clr) {
	return A2(
		$mdgriffith$elm_ui$Internal$Model$StyleClass,
		$mdgriffith$elm_ui$Internal$Flag$bgColor,
		A3(
			$mdgriffith$elm_ui$Internal$Model$Colored,
			'bg-' + $mdgriffith$elm_ui$Internal$Model$formatColorClass(clr),
			'background-color',
			clr));
};
var $mdgriffith$elm_ui$Internal$Model$Rgba = F4(
	function (a, b, c, d) {
		return {$: 0, a: a, b: b, c: c, d: d};
	});
var $mdgriffith$elm_ui$Element$rgb = F3(
	function (r, g, b) {
		return A4($mdgriffith$elm_ui$Internal$Model$Rgba, r, g, b, 1);
	});
var $author$project$Main$bgGray = function (g) {
	return $mdgriffith$elm_ui$Element$Background$color(
		A3($mdgriffith$elm_ui$Element$rgb, g, g, g));
};
var $mdgriffith$elm_ui$Internal$Model$Class = F2(
	function (a, b) {
		return {$: 3, a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Style$classes = {gi: 'a', eb: 'atv', gk: 'ab', gl: 'cx', gm: 'cy', gn: 'acb', go: 'accx', gp: 'accy', gq: 'acr', eS: 'al', eT: 'ar', gr: 'at', ec: 'ah', ed: 'av', gu: 's', gx: 'bh', gy: 'b', gB: 'w7', gD: 'bd', gE: 'bdt', dE: 'bn', gF: 'bs', dF: 'cpe', gM: 'cp', gN: 'cpx', gO: 'cpy', bC: 'c', dG: 'ctr', dH: 'cb', dI: 'ccx', a$: 'ccy', cv: 'cl', dJ: 'cr', gR: 'ct', gU: 'cptr', gV: 'ctxt', g8: 'fcs', fe: 'focus-within', g9: 'fs', hb: 'g', er: 'hbh', et: 'hc', fj: 'he', eu: 'hf', fk: 'hfp', hg: 'hv', hi: 'ic', hk: 'fr', dP: 'lbl', hn: 'iml', ho: 'imlf', hp: 'imlp', hq: 'implw', hr: 'it', hu: 'i', fx: 'lnk', bX: 'nb', fE: 'notxt', hI: 'ol', hJ: 'or', bs: 'oq', hO: 'oh', fI: 'pg', fJ: 'p', hS: 'ppe', hY: 'ui', eF: 'r', hZ: 'sb', h_: 'sbx', h$: 'sby', h0: 'sbt', h3: 'e', h4: 'cap', h5: 'sev', id: 'sk', ih: 't', ii: 'tc', ij: 'w8', ik: 'w2', il: 'w9', im: 'tj', d7: 'tja', $9: 'tl', io: 'w3', ip: 'w5', iq: 'w4', ir: 'tr', is: 'w6', it: 'w1', iv: 'tun', ga: 'ts', bu: 'clr', iA: 'u', eM: 'wc', gd: 'we', eN: 'wf', ge: 'wfp', eP: 'wrp'};
var $mdgriffith$elm_ui$Internal$Flag$overflow = $mdgriffith$elm_ui$Internal$Flag$flag(20);
var $mdgriffith$elm_ui$Element$clipX = A2($mdgriffith$elm_ui$Internal$Model$Class, $mdgriffith$elm_ui$Internal$Flag$overflow, $mdgriffith$elm_ui$Internal$Style$classes.gN);
var $mdgriffith$elm_ui$Element$clipY = A2($mdgriffith$elm_ui$Internal$Model$Class, $mdgriffith$elm_ui$Internal$Flag$overflow, $mdgriffith$elm_ui$Internal$Style$classes.gO);
var $mdgriffith$elm_ui$Internal$Model$FocusStyleOption = function (a) {
	return {$: 1, a: a};
};
var $mdgriffith$elm_ui$Element$focusStyle = $mdgriffith$elm_ui$Internal$Model$FocusStyleOption;
var $mdgriffith$elm_ui$Internal$Model$Attr = function (a) {
	return {$: 1, a: a};
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
var $mdgriffith$elm_ui$Internal$Model$htmlClass = function (cls) {
	return $mdgriffith$elm_ui$Internal$Model$Attr(
		$elm$html$Html$Attributes$class(cls));
};
var $mdgriffith$elm_ui$Internal$Model$OnlyDynamic = F2(
	function (a, b) {
		return {$: 2, a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Model$StaticRootAndDynamic = F2(
	function (a, b) {
		return {$: 1, a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Model$Unkeyed = function (a) {
	return {$: 0, a: a};
};
var $mdgriffith$elm_ui$Internal$Model$AsEl = 2;
var $mdgriffith$elm_ui$Internal$Model$asEl = 2;
var $mdgriffith$elm_ui$Internal$Model$Generic = {$: 0};
var $mdgriffith$elm_ui$Internal$Model$div = $mdgriffith$elm_ui$Internal$Model$Generic;
var $mdgriffith$elm_ui$Internal$Model$NoNearbyChildren = {$: 0};
var $mdgriffith$elm_ui$Internal$Model$columnClass = $mdgriffith$elm_ui$Internal$Style$classes.gu + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.bC);
var $mdgriffith$elm_ui$Internal$Model$gridClass = $mdgriffith$elm_ui$Internal$Style$classes.gu + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.hb);
var $mdgriffith$elm_ui$Internal$Model$pageClass = $mdgriffith$elm_ui$Internal$Style$classes.gu + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.fI);
var $mdgriffith$elm_ui$Internal$Model$paragraphClass = $mdgriffith$elm_ui$Internal$Style$classes.gu + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.fJ);
var $mdgriffith$elm_ui$Internal$Model$rowClass = $mdgriffith$elm_ui$Internal$Style$classes.gu + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.eF);
var $mdgriffith$elm_ui$Internal$Model$singleClass = $mdgriffith$elm_ui$Internal$Style$classes.gu + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.h3);
var $mdgriffith$elm_ui$Internal$Model$contextClasses = function (context) {
	switch (context) {
		case 0:
			return $mdgriffith$elm_ui$Internal$Model$rowClass;
		case 1:
			return $mdgriffith$elm_ui$Internal$Model$columnClass;
		case 2:
			return $mdgriffith$elm_ui$Internal$Model$singleClass;
		case 3:
			return $mdgriffith$elm_ui$Internal$Model$gridClass;
		case 4:
			return $mdgriffith$elm_ui$Internal$Model$paragraphClass;
		default:
			return $mdgriffith$elm_ui$Internal$Model$pageClass;
	}
};
var $mdgriffith$elm_ui$Internal$Model$Keyed = function (a) {
	return {$: 1, a: a};
};
var $mdgriffith$elm_ui$Internal$Model$NoStyleSheet = {$: 0};
var $mdgriffith$elm_ui$Internal$Model$Styled = function (a) {
	return {$: 1, a: a};
};
var $mdgriffith$elm_ui$Internal$Model$Unstyled = function (a) {
	return {$: 0, a: a};
};
var $mdgriffith$elm_ui$Internal$Model$addChildren = F2(
	function (existing, nearbyChildren) {
		switch (nearbyChildren.$) {
			case 0:
				return existing;
			case 1:
				var behind = nearbyChildren.a;
				return _Utils_ap(behind, existing);
			case 2:
				var inFront = nearbyChildren.a;
				return _Utils_ap(existing, inFront);
			default:
				var behind = nearbyChildren.a;
				var inFront = nearbyChildren.b;
				return _Utils_ap(
					behind,
					_Utils_ap(existing, inFront));
		}
	});
var $mdgriffith$elm_ui$Internal$Model$addKeyedChildren = F3(
	function (key, existing, nearbyChildren) {
		switch (nearbyChildren.$) {
			case 0:
				return existing;
			case 1:
				var behind = nearbyChildren.a;
				return _Utils_ap(
					A2(
						$elm$core$List$map,
						function (x) {
							return _Utils_Tuple2(key, x);
						},
						behind),
					existing);
			case 2:
				var inFront = nearbyChildren.a;
				return _Utils_ap(
					existing,
					A2(
						$elm$core$List$map,
						function (x) {
							return _Utils_Tuple2(key, x);
						},
						inFront));
			default:
				var behind = nearbyChildren.a;
				var inFront = nearbyChildren.b;
				return _Utils_ap(
					A2(
						$elm$core$List$map,
						function (x) {
							return _Utils_Tuple2(key, x);
						},
						behind),
					_Utils_ap(
						existing,
						A2(
							$elm$core$List$map,
							function (x) {
								return _Utils_Tuple2(key, x);
							},
							inFront)));
		}
	});
var $mdgriffith$elm_ui$Internal$Model$AsParagraph = 4;
var $mdgriffith$elm_ui$Internal$Model$asParagraph = 4;
var $mdgriffith$elm_ui$Internal$Flag$alignBottom = $mdgriffith$elm_ui$Internal$Flag$flag(41);
var $mdgriffith$elm_ui$Internal$Flag$alignRight = $mdgriffith$elm_ui$Internal$Flag$flag(40);
var $mdgriffith$elm_ui$Internal$Flag$centerX = $mdgriffith$elm_ui$Internal$Flag$flag(42);
var $mdgriffith$elm_ui$Internal$Flag$centerY = $mdgriffith$elm_ui$Internal$Flag$flag(43);
var $elm$html$Html$div = _VirtualDom_node('div');
var $elm$core$Set$Set_elm_builtin = $elm$core$Basics$identity;
var $elm$core$Set$empty = $elm$core$Dict$empty;
var $mdgriffith$elm_ui$Internal$Model$lengthClassName = function (x) {
	switch (x.$) {
		case 0:
			var px = x.a;
			return $elm$core$String$fromInt(px) + 'px';
		case 1:
			return 'auto';
		case 2:
			var i = x.a;
			return $elm$core$String$fromInt(i) + 'fr';
		case 3:
			var min = x.a;
			var len = x.b;
			return 'min' + ($elm$core$String$fromInt(min) + $mdgriffith$elm_ui$Internal$Model$lengthClassName(len));
		default:
			var max = x.a;
			var len = x.b;
			return 'max' + ($elm$core$String$fromInt(max) + $mdgriffith$elm_ui$Internal$Model$lengthClassName(len));
	}
};
var $elm$core$Tuple$second = function (_v0) {
	var y = _v0.b;
	return y;
};
var $mdgriffith$elm_ui$Internal$Model$transformClass = function (transform) {
	switch (transform.$) {
		case 0:
			return $elm$core$Maybe$Nothing;
		case 1:
			var _v1 = transform.a;
			var x = _v1.a;
			var y = _v1.b;
			var z = _v1.c;
			return $elm$core$Maybe$Just(
				'mv-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(x) + ('-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(y) + ('-' + $mdgriffith$elm_ui$Internal$Model$floatClass(z))))));
		default:
			var _v2 = transform.a;
			var tx = _v2.a;
			var ty = _v2.b;
			var tz = _v2.c;
			var _v3 = transform.b;
			var sx = _v3.a;
			var sy = _v3.b;
			var sz = _v3.c;
			var _v4 = transform.c;
			var ox = _v4.a;
			var oy = _v4.b;
			var oz = _v4.c;
			var angle = transform.d;
			return $elm$core$Maybe$Just(
				'tfrm-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(tx) + ('-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(ty) + ('-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(tz) + ('-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(sx) + ('-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(sy) + ('-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(sz) + ('-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(ox) + ('-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(oy) + ('-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(oz) + ('-' + $mdgriffith$elm_ui$Internal$Model$floatClass(angle))))))))))))))))))));
	}
};
var $mdgriffith$elm_ui$Internal$Model$getStyleName = function (style) {
	switch (style.$) {
		case 13:
			var name = style.a;
			return name;
		case 12:
			var name = style.a;
			var o = style.b;
			return name;
		case 0:
			var _class = style.a;
			return _class;
		case 1:
			var name = style.a;
			return name;
		case 2:
			var i = style.a;
			return 'font-size-' + $elm$core$String$fromInt(i);
		case 3:
			var _class = style.a;
			return _class;
		case 4:
			var _class = style.a;
			return _class;
		case 5:
			var cls = style.a;
			var x = style.b;
			var y = style.c;
			return cls;
		case 7:
			var cls = style.a;
			var top = style.b;
			var right = style.c;
			var bottom = style.d;
			var left = style.e;
			return cls;
		case 6:
			var cls = style.a;
			var top = style.b;
			var right = style.c;
			var bottom = style.d;
			var left = style.e;
			return cls;
		case 8:
			var template = style.a;
			return 'grid-rows-' + (A2(
				$elm$core$String$join,
				'-',
				A2($elm$core$List$map, $mdgriffith$elm_ui$Internal$Model$lengthClassName, template.ap)) + ('-cols-' + (A2(
				$elm$core$String$join,
				'-',
				A2($elm$core$List$map, $mdgriffith$elm_ui$Internal$Model$lengthClassName, template.w)) + ('-space-x-' + ($mdgriffith$elm_ui$Internal$Model$lengthClassName(template.h6.a) + ('-space-y-' + $mdgriffith$elm_ui$Internal$Model$lengthClassName(template.h6.b)))))));
		case 9:
			var pos = style.a;
			return 'gp grid-pos-' + ($elm$core$String$fromInt(pos.eF) + ('-' + ($elm$core$String$fromInt(pos.gP) + ('-' + ($elm$core$String$fromInt(pos.gc) + ('-' + $elm$core$String$fromInt(pos.es)))))));
		case 11:
			var selector = style.a;
			var subStyle = style.b;
			var name = function () {
				switch (selector) {
					case 0:
						return 'fs';
					case 1:
						return 'hv';
					default:
						return 'act';
				}
			}();
			return A2(
				$elm$core$String$join,
				' ',
				A2(
					$elm$core$List$map,
					function (sty) {
						var _v1 = $mdgriffith$elm_ui$Internal$Model$getStyleName(sty);
						if (_v1 === '') {
							return '';
						} else {
							var styleName = _v1;
							return styleName + ('-' + name);
						}
					},
					subStyle));
		default:
			var x = style.a;
			return A2(
				$elm$core$Maybe$withDefault,
				'',
				$mdgriffith$elm_ui$Internal$Model$transformClass(x));
	}
};
var $elm$core$Set$insert = F2(
	function (key, _v0) {
		var dict = _v0;
		return A3($elm$core$Dict$insert, key, 0, dict);
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
var $mdgriffith$elm_ui$Internal$Model$reduceStyles = F2(
	function (style, nevermind) {
		var cache = nevermind.a;
		var existing = nevermind.b;
		var styleName = $mdgriffith$elm_ui$Internal$Model$getStyleName(style);
		return A2($elm$core$Set$member, styleName, cache) ? nevermind : _Utils_Tuple2(
			A2($elm$core$Set$insert, styleName, cache),
			A2($elm$core$List$cons, style, existing));
	});
var $mdgriffith$elm_ui$Internal$Model$Property = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Model$Style = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Style$dot = function (c) {
	return '.' + c;
};
var $elm$core$List$maybeCons = F3(
	function (f, mx, xs) {
		var _v0 = f(mx);
		if (!_v0.$) {
			var x = _v0.a;
			return A2($elm$core$List$cons, x, xs);
		} else {
			return xs;
		}
	});
var $elm$core$List$filterMap = F2(
	function (f, xs) {
		return A3(
			$elm$core$List$foldr,
			$elm$core$List$maybeCons(f),
			_List_Nil,
			xs);
	});
var $elm$core$String$fromFloat = _String_fromNumber;
var $mdgriffith$elm_ui$Internal$Model$formatColor = function (_v0) {
	var red = _v0.a;
	var green = _v0.b;
	var blue = _v0.c;
	var alpha = _v0.d;
	return 'rgba(' + ($elm$core$String$fromInt(
		$elm$core$Basics$round(red * 255)) + ((',' + $elm$core$String$fromInt(
		$elm$core$Basics$round(green * 255))) + ((',' + $elm$core$String$fromInt(
		$elm$core$Basics$round(blue * 255))) + (',' + ($elm$core$String$fromFloat(alpha) + ')')))));
};
var $mdgriffith$elm_ui$Internal$Model$formatBoxShadow = function (shadow) {
	return A2(
		$elm$core$String$join,
		' ',
		A2(
			$elm$core$List$filterMap,
			$elm$core$Basics$identity,
			_List_fromArray(
				[
					shadow.fq ? $elm$core$Maybe$Just('inset') : $elm$core$Maybe$Nothing,
					$elm$core$Maybe$Just(
					$elm$core$String$fromFloat(shadow.aG.a) + 'px'),
					$elm$core$Maybe$Just(
					$elm$core$String$fromFloat(shadow.aG.b) + 'px'),
					$elm$core$Maybe$Just(
					$elm$core$String$fromFloat(shadow.gA) + 'px'),
					$elm$core$Maybe$Just(
					$elm$core$String$fromFloat(shadow.ca) + 'px'),
					$elm$core$Maybe$Just(
					$mdgriffith$elm_ui$Internal$Model$formatColor(shadow.gQ))
				])));
};
var $elm$core$Tuple$mapFirst = F2(
	function (func, _v0) {
		var x = _v0.a;
		var y = _v0.b;
		return _Utils_Tuple2(
			func(x),
			y);
	});
var $elm$core$Tuple$mapSecond = F2(
	function (func, _v0) {
		var x = _v0.a;
		var y = _v0.b;
		return _Utils_Tuple2(
			x,
			func(y));
	});
var $mdgriffith$elm_ui$Internal$Model$renderFocusStyle = function (focus) {
	return _List_fromArray(
		[
			A2(
			$mdgriffith$elm_ui$Internal$Model$Style,
			$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.fe) + ':focus-within',
			A2(
				$elm$core$List$filterMap,
				$elm$core$Basics$identity,
				_List_fromArray(
					[
						A2(
						$elm$core$Maybe$map,
						function (color) {
							return A2(
								$mdgriffith$elm_ui$Internal$Model$Property,
								'border-color',
								$mdgriffith$elm_ui$Internal$Model$formatColor(color));
						},
						focus.gC),
						A2(
						$elm$core$Maybe$map,
						function (color) {
							return A2(
								$mdgriffith$elm_ui$Internal$Model$Property,
								'background-color',
								$mdgriffith$elm_ui$Internal$Model$formatColor(color));
						},
						focus.gw),
						A2(
						$elm$core$Maybe$map,
						function (shadow) {
							return A2(
								$mdgriffith$elm_ui$Internal$Model$Property,
								'box-shadow',
								$mdgriffith$elm_ui$Internal$Model$formatBoxShadow(
									{
										gA: shadow.gA,
										gQ: shadow.gQ,
										fq: false,
										aG: A2(
											$elm$core$Tuple$mapSecond,
											$elm$core$Basics$toFloat,
											A2($elm$core$Tuple$mapFirst, $elm$core$Basics$toFloat, shadow.aG)),
										ca: shadow.ca
									}));
						},
						focus.h2),
						$elm$core$Maybe$Just(
						A2($mdgriffith$elm_ui$Internal$Model$Property, 'outline', 'none'))
					]))),
			A2(
			$mdgriffith$elm_ui$Internal$Model$Style,
			($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.gu) + ':focus .focusable, ') + (($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.gu) + '.focusable:focus, ') + ('.ui-slide-bar:focus + ' + ($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.gu) + ' .focusable-thumb'))),
			A2(
				$elm$core$List$filterMap,
				$elm$core$Basics$identity,
				_List_fromArray(
					[
						A2(
						$elm$core$Maybe$map,
						function (color) {
							return A2(
								$mdgriffith$elm_ui$Internal$Model$Property,
								'border-color',
								$mdgriffith$elm_ui$Internal$Model$formatColor(color));
						},
						focus.gC),
						A2(
						$elm$core$Maybe$map,
						function (color) {
							return A2(
								$mdgriffith$elm_ui$Internal$Model$Property,
								'background-color',
								$mdgriffith$elm_ui$Internal$Model$formatColor(color));
						},
						focus.gw),
						A2(
						$elm$core$Maybe$map,
						function (shadow) {
							return A2(
								$mdgriffith$elm_ui$Internal$Model$Property,
								'box-shadow',
								$mdgriffith$elm_ui$Internal$Model$formatBoxShadow(
									{
										gA: shadow.gA,
										gQ: shadow.gQ,
										fq: false,
										aG: A2(
											$elm$core$Tuple$mapSecond,
											$elm$core$Basics$toFloat,
											A2($elm$core$Tuple$mapFirst, $elm$core$Basics$toFloat, shadow.aG)),
										ca: shadow.ca
									}));
						},
						focus.h2),
						$elm$core$Maybe$Just(
						A2($mdgriffith$elm_ui$Internal$Model$Property, 'outline', 'none'))
					])))
		]);
};
var $elm$virtual_dom$VirtualDom$node = function (tag) {
	return _VirtualDom_node(
		_VirtualDom_noScript(tag));
};
var $elm$virtual_dom$VirtualDom$property = F2(
	function (key, value) {
		return A2(
			_VirtualDom_property,
			_VirtualDom_noInnerHtmlOrFormAction(key),
			_VirtualDom_noJavaScriptOrHtmlUri(value));
	});
var $mdgriffith$elm_ui$Internal$Style$AllChildren = F2(
	function (a, b) {
		return {$: 2, a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Style$Batch = function (a) {
	return {$: 6, a: a};
};
var $mdgriffith$elm_ui$Internal$Style$Child = F2(
	function (a, b) {
		return {$: 1, a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Style$Class = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Style$Descriptor = F2(
	function (a, b) {
		return {$: 4, a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Style$Left = 3;
var $mdgriffith$elm_ui$Internal$Style$Prop = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Style$Right = 2;
var $mdgriffith$elm_ui$Internal$Style$Self = $elm$core$Basics$identity;
var $mdgriffith$elm_ui$Internal$Style$Supports = F2(
	function (a, b) {
		return {$: 3, a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Style$Content = $elm$core$Basics$identity;
var $mdgriffith$elm_ui$Internal$Style$Bottom = 1;
var $mdgriffith$elm_ui$Internal$Style$CenterX = 4;
var $mdgriffith$elm_ui$Internal$Style$CenterY = 5;
var $mdgriffith$elm_ui$Internal$Style$Top = 0;
var $mdgriffith$elm_ui$Internal$Style$alignments = _List_fromArray(
	[0, 1, 2, 3, 4, 5]);
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
var $elm$core$List$concatMap = F2(
	function (f, list) {
		return $elm$core$List$concat(
			A2($elm$core$List$map, f, list));
	});
var $mdgriffith$elm_ui$Internal$Style$contentName = function (desc) {
	switch (desc) {
		case 0:
			var _v1 = desc;
			return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.gR);
		case 1:
			var _v2 = desc;
			return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.dH);
		case 2:
			var _v3 = desc;
			return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.dJ);
		case 3:
			var _v4 = desc;
			return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.cv);
		case 4:
			var _v5 = desc;
			return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.dI);
		default:
			var _v6 = desc;
			return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.a$);
	}
};
var $mdgriffith$elm_ui$Internal$Style$selfName = function (desc) {
	switch (desc) {
		case 0:
			var _v1 = desc;
			return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.gr);
		case 1:
			var _v2 = desc;
			return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.gk);
		case 2:
			var _v3 = desc;
			return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.eT);
		case 3:
			var _v4 = desc;
			return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.eS);
		case 4:
			var _v5 = desc;
			return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.gl);
		default:
			var _v6 = desc;
			return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.gm);
	}
};
var $mdgriffith$elm_ui$Internal$Style$describeAlignment = function (values) {
	var createDescription = function (alignment) {
		var _v0 = values(alignment);
		var content = _v0.a;
		var indiv = _v0.b;
		return _List_fromArray(
			[
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$contentName(alignment),
				content),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Child,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.gu),
				_List_fromArray(
					[
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$selfName(alignment),
						indiv)
					]))
			]);
	};
	return $mdgriffith$elm_ui$Internal$Style$Batch(
		A2($elm$core$List$concatMap, createDescription, $mdgriffith$elm_ui$Internal$Style$alignments));
};
var $mdgriffith$elm_ui$Internal$Style$elDescription = _List_fromArray(
	[
		A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'flex'),
		A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-direction', 'column'),
		A2($mdgriffith$elm_ui$Internal$Style$Prop, 'white-space', 'pre'),
		A2(
		$mdgriffith$elm_ui$Internal$Style$Descriptor,
		$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.er),
		_List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'z-index', '0'),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Child,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.gx),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'z-index', '-1')
					]))
			])),
		A2(
		$mdgriffith$elm_ui$Internal$Style$Descriptor,
		$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.h0),
		_List_fromArray(
			[
				A2(
				$mdgriffith$elm_ui$Internal$Style$Child,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.ih),
				_List_fromArray(
					[
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.eu),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '0')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.eN),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'auto !important')
							]))
					]))
			])),
		A2(
		$mdgriffith$elm_ui$Internal$Style$Child,
		$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.et),
		_List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', 'auto')
			])),
		A2(
		$mdgriffith$elm_ui$Internal$Style$Child,
		$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.eu),
		_List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '100000')
			])),
		A2(
		$mdgriffith$elm_ui$Internal$Style$Child,
		$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.eN),
		_List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%')
			])),
		A2(
		$mdgriffith$elm_ui$Internal$Style$Child,
		$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.ge),
		_List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%')
			])),
		A2(
		$mdgriffith$elm_ui$Internal$Style$Child,
		$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.eM),
		_List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'flex-start')
			])),
		$mdgriffith$elm_ui$Internal$Style$describeAlignment(
		function (alignment) {
			switch (alignment) {
				case 0:
					return _Utils_Tuple2(
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'flex-start')
							]),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-bottom', 'auto !important'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-top', '0 !important')
							]));
				case 1:
					return _Utils_Tuple2(
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'flex-end')
							]),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-top', 'auto !important'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-bottom', '0 !important')
							]));
				case 2:
					return _Utils_Tuple2(
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'flex-end')
							]),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'flex-end')
							]));
				case 3:
					return _Utils_Tuple2(
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'flex-start')
							]),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'flex-start')
							]));
				case 4:
					return _Utils_Tuple2(
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'center')
							]),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'center')
							]));
				default:
					return _Utils_Tuple2(
						_List_fromArray(
							[
								A2(
								$mdgriffith$elm_ui$Internal$Style$Child,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.gu),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-top', 'auto'),
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-bottom', 'auto')
									]))
							]),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-top', 'auto !important'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-bottom', 'auto !important')
							]));
			}
		})
	]);
var $mdgriffith$elm_ui$Internal$Style$gridAlignments = function (values) {
	var createDescription = function (alignment) {
		return _List_fromArray(
			[
				A2(
				$mdgriffith$elm_ui$Internal$Style$Child,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.gu),
				_List_fromArray(
					[
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$selfName(alignment),
						values(alignment))
					]))
			]);
	};
	return $mdgriffith$elm_ui$Internal$Style$Batch(
		A2($elm$core$List$concatMap, createDescription, $mdgriffith$elm_ui$Internal$Style$alignments));
};
var $mdgriffith$elm_ui$Internal$Style$Above = 0;
var $mdgriffith$elm_ui$Internal$Style$Behind = 5;
var $mdgriffith$elm_ui$Internal$Style$Below = 1;
var $mdgriffith$elm_ui$Internal$Style$OnLeft = 3;
var $mdgriffith$elm_ui$Internal$Style$OnRight = 2;
var $mdgriffith$elm_ui$Internal$Style$Within = 4;
var $mdgriffith$elm_ui$Internal$Style$locations = function () {
	var loc = 0;
	var _v0 = function () {
		switch (loc) {
			case 0:
				return 0;
			case 1:
				return 0;
			case 2:
				return 0;
			case 3:
				return 0;
			case 4:
				return 0;
			default:
				return 0;
		}
	}();
	return _List_fromArray(
		[0, 1, 2, 3, 4, 5]);
}();
var $mdgriffith$elm_ui$Internal$Style$baseSheet = _List_fromArray(
	[
		A2(
		$mdgriffith$elm_ui$Internal$Style$Class,
		'html,body',
		_List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', '100%'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'padding', '0'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin', '0')
			])),
		A2(
		$mdgriffith$elm_ui$Internal$Style$Class,
		_Utils_ap(
			$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.gu),
			_Utils_ap(
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.h3),
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.hi))),
		_List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'block'),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.eu),
				_List_fromArray(
					[
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						'img',
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'max-height', '100%'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'object-fit', 'cover')
							]))
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.eN),
				_List_fromArray(
					[
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						'img',
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'max-width', '100%'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'object-fit', 'cover')
							]))
					]))
			])),
		A2(
		$mdgriffith$elm_ui$Internal$Style$Class,
		$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.gu) + ':focus',
		_List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'outline', 'none')
			])),
		A2(
		$mdgriffith$elm_ui$Internal$Style$Class,
		$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.hY),
		_List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', 'auto'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'min-height', '100%'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'z-index', '0'),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				_Utils_ap(
					$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.gu),
					$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.eu)),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', '100%'),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.eu),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', '100%')
							]))
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Child,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.hk),
				_List_fromArray(
					[
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.bX),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'position', 'fixed'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'z-index', '20')
							]))
					]))
			])),
		A2(
		$mdgriffith$elm_ui$Internal$Style$Class,
		$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.bX),
		_List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'position', 'relative'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'border', 'none'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'flex'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-direction', 'row'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-basis', 'auto'),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.h3),
				$mdgriffith$elm_ui$Internal$Style$elDescription),
				$mdgriffith$elm_ui$Internal$Style$Batch(
				function (fn) {
					return A2($elm$core$List$map, fn, $mdgriffith$elm_ui$Internal$Style$locations);
				}(
					function (loc) {
						switch (loc) {
							case 0:
								return A2(
									$mdgriffith$elm_ui$Internal$Style$Descriptor,
									$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.gi),
									_List_fromArray(
										[
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'position', 'absolute'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'bottom', '100%'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'left', '0'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'z-index', '20'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin', '0 !important'),
											A2(
											$mdgriffith$elm_ui$Internal$Style$Child,
											$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.eu),
											_List_fromArray(
												[
													A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', 'auto')
												])),
											A2(
											$mdgriffith$elm_ui$Internal$Style$Child,
											$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.eN),
											_List_fromArray(
												[
													A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%')
												])),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'none'),
											A2(
											$mdgriffith$elm_ui$Internal$Style$Child,
											'*',
											_List_fromArray(
												[
													A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'auto')
												]))
										]));
							case 1:
								return A2(
									$mdgriffith$elm_ui$Internal$Style$Descriptor,
									$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.gy),
									_List_fromArray(
										[
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'position', 'absolute'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'bottom', '0'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'left', '0'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', '0'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'z-index', '20'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin', '0 !important'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'none'),
											A2(
											$mdgriffith$elm_ui$Internal$Style$Child,
											'*',
											_List_fromArray(
												[
													A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'auto')
												])),
											A2(
											$mdgriffith$elm_ui$Internal$Style$Child,
											$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.eu),
											_List_fromArray(
												[
													A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', 'auto')
												]))
										]));
							case 2:
								return A2(
									$mdgriffith$elm_ui$Internal$Style$Descriptor,
									$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.hJ),
									_List_fromArray(
										[
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'position', 'absolute'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'left', '100%'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'top', '0'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', '100%'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin', '0 !important'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'z-index', '20'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'none'),
											A2(
											$mdgriffith$elm_ui$Internal$Style$Child,
											'*',
											_List_fromArray(
												[
													A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'auto')
												]))
										]));
							case 3:
								return A2(
									$mdgriffith$elm_ui$Internal$Style$Descriptor,
									$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.hI),
									_List_fromArray(
										[
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'position', 'absolute'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'right', '100%'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'top', '0'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', '100%'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin', '0 !important'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'z-index', '20'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'none'),
											A2(
											$mdgriffith$elm_ui$Internal$Style$Child,
											'*',
											_List_fromArray(
												[
													A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'auto')
												]))
										]));
							case 4:
								return A2(
									$mdgriffith$elm_ui$Internal$Style$Descriptor,
									$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.hk),
									_List_fromArray(
										[
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'position', 'absolute'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', '100%'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'left', '0'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'top', '0'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin', '0 !important'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'none'),
											A2(
											$mdgriffith$elm_ui$Internal$Style$Child,
											'*',
											_List_fromArray(
												[
													A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'auto')
												]))
										]));
							default:
								return A2(
									$mdgriffith$elm_ui$Internal$Style$Descriptor,
									$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.gx),
									_List_fromArray(
										[
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'position', 'absolute'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', '100%'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'left', '0'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'top', '0'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin', '0 !important'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'z-index', '0'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'none'),
											A2(
											$mdgriffith$elm_ui$Internal$Style$Child,
											'*',
											_List_fromArray(
												[
													A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'auto')
												]))
										]));
						}
					}))
			])),
		A2(
		$mdgriffith$elm_ui$Internal$Style$Class,
		$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.gu),
		_List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'position', 'relative'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'border', 'none'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-shrink', '0'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'flex'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-direction', 'row'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-basis', 'auto'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'resize', 'none'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-feature-settings', 'inherit'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'box-sizing', 'border-box'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin', '0'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'padding', '0'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'border-width', '0'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'border-style', 'solid'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-size', 'inherit'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'color', 'inherit'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-family', 'inherit'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'line-height', '1'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-weight', 'inherit'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-decoration', 'none'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-style', 'inherit'),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.eP),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-wrap', 'wrap')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.fE),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, '-moz-user-select', 'none'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, '-webkit-user-select', 'none'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, '-ms-user-select', 'none'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'user-select', 'none')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.gU),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'cursor', 'pointer')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.gV),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'cursor', 'text')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.hS),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'none !important')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.dF),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'auto !important')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.bu),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'opacity', '0')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.bs),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'opacity', '1')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot(
					_Utils_ap($mdgriffith$elm_ui$Internal$Style$classes.hg, $mdgriffith$elm_ui$Internal$Style$classes.bu)) + ':hover',
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'opacity', '0')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot(
					_Utils_ap($mdgriffith$elm_ui$Internal$Style$classes.hg, $mdgriffith$elm_ui$Internal$Style$classes.bs)) + ':hover',
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'opacity', '1')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot(
					_Utils_ap($mdgriffith$elm_ui$Internal$Style$classes.g8, $mdgriffith$elm_ui$Internal$Style$classes.bu)) + ':focus',
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'opacity', '0')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot(
					_Utils_ap($mdgriffith$elm_ui$Internal$Style$classes.g8, $mdgriffith$elm_ui$Internal$Style$classes.bs)) + ':focus',
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'opacity', '1')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot(
					_Utils_ap($mdgriffith$elm_ui$Internal$Style$classes.eb, $mdgriffith$elm_ui$Internal$Style$classes.bu)) + ':active',
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'opacity', '0')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot(
					_Utils_ap($mdgriffith$elm_ui$Internal$Style$classes.eb, $mdgriffith$elm_ui$Internal$Style$classes.bs)) + ':active',
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'opacity', '1')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.ga),
				_List_fromArray(
					[
						A2(
						$mdgriffith$elm_ui$Internal$Style$Prop,
						'transition',
						A2(
							$elm$core$String$join,
							', ',
							A2(
								$elm$core$List$map,
								function (x) {
									return x + ' 160ms';
								},
								_List_fromArray(
									['transform', 'opacity', 'filter', 'background-color', 'color', 'font-size']))))
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.hZ),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'overflow', 'auto'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-shrink', '1')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.h_),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'overflow-x', 'auto'),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.eF),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-shrink', '1')
							]))
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.h$),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'overflow-y', 'auto'),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.bC),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-shrink', '1')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.h3),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-shrink', '1')
							]))
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.gM),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'overflow', 'hidden')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.gN),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'overflow-x', 'hidden')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.gO),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'overflow-y', 'hidden')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.eM),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', 'auto')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.dE),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'border-width', '0')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.gD),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'border-style', 'dashed')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.gE),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'border-style', 'dotted')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.gF),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'border-style', 'solid')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.ih),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'white-space', 'pre'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'inline-block')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.hr),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'line-height', '1.05'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'background', 'transparent'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-align', 'inherit')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.h3),
				$mdgriffith$elm_ui$Internal$Style$elDescription),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.eF),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'flex'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-direction', 'row'),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.gu),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-basis', '0%'),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Descriptor,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.gd),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-basis', 'auto')
									])),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Descriptor,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.fx),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-basis', 'auto')
									]))
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.eu),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'stretch !important')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.fk),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'stretch !important')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.eN),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '100000')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.dG),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '0'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-basis', 'auto'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'stretch')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						'u:first-of-type.' + $mdgriffith$elm_ui$Internal$Style$classes.gq,
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '1')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						's:first-of-type.' + $mdgriffith$elm_ui$Internal$Style$classes.go,
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '1'),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Child,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.gl),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-left', 'auto !important')
									]))
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						's:last-of-type.' + $mdgriffith$elm_ui$Internal$Style$classes.go,
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '1'),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Child,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.gl),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-right', 'auto !important')
									]))
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						's:only-of-type.' + $mdgriffith$elm_ui$Internal$Style$classes.go,
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '1'),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Child,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.gm),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-top', 'auto !important'),
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-bottom', 'auto !important')
									]))
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						's:last-of-type.' + ($mdgriffith$elm_ui$Internal$Style$classes.go + ' ~ u'),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '0')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						'u:first-of-type.' + ($mdgriffith$elm_ui$Internal$Style$classes.gq + (' ~ s.' + $mdgriffith$elm_ui$Internal$Style$classes.go)),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '0')
							])),
						$mdgriffith$elm_ui$Internal$Style$describeAlignment(
						function (alignment) {
							switch (alignment) {
								case 0:
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'flex-start')
											]),
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'flex-start')
											]));
								case 1:
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'flex-end')
											]),
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'flex-end')
											]));
								case 2:
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'flex-end')
											]),
										_List_Nil);
								case 3:
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'flex-start')
											]),
										_List_Nil);
								case 4:
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'center')
											]),
										_List_Nil);
								default:
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'center')
											]),
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'center')
											]));
							}
						}),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.h5),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'space-between')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.dP),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'baseline')
							]))
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.bC),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'flex'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-direction', 'column'),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.gu),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-basis', '0px'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'min-height', 'min-content'),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Descriptor,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.fj),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-basis', 'auto')
									]))
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.eu),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '100000')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.eN),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.ge),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.eM),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'flex-start')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						'u:first-of-type.' + $mdgriffith$elm_ui$Internal$Style$classes.gn,
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '1')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						's:first-of-type.' + $mdgriffith$elm_ui$Internal$Style$classes.gp,
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '1'),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Child,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.gm),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-top', 'auto !important'),
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-bottom', '0 !important')
									]))
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						's:last-of-type.' + $mdgriffith$elm_ui$Internal$Style$classes.gp,
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '1'),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Child,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.gm),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-bottom', 'auto !important'),
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-top', '0 !important')
									]))
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						's:only-of-type.' + $mdgriffith$elm_ui$Internal$Style$classes.gp,
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '1'),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Child,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.gm),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-top', 'auto !important'),
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-bottom', 'auto !important')
									]))
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						's:last-of-type.' + ($mdgriffith$elm_ui$Internal$Style$classes.gp + ' ~ u'),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '0')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						'u:first-of-type.' + ($mdgriffith$elm_ui$Internal$Style$classes.gn + (' ~ s.' + $mdgriffith$elm_ui$Internal$Style$classes.gp)),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '0')
							])),
						$mdgriffith$elm_ui$Internal$Style$describeAlignment(
						function (alignment) {
							switch (alignment) {
								case 0:
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'flex-start')
											]),
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-bottom', 'auto')
											]));
								case 1:
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'flex-end')
											]),
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-top', 'auto')
											]));
								case 2:
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'flex-end')
											]),
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'flex-end')
											]));
								case 3:
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'flex-start')
											]),
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'flex-start')
											]));
								case 4:
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'center')
											]),
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'center')
											]));
								default:
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'center')
											]),
										_List_Nil);
							}
						}),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.dG),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '0'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-basis', 'auto'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'stretch !important')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.h5),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'space-between')
							]))
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.hb),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', '-ms-grid'),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						'.gp',
						_List_fromArray(
							[
								A2(
								$mdgriffith$elm_ui$Internal$Style$Child,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.gu),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%')
									]))
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Supports,
						_Utils_Tuple2('display', 'grid'),
						_List_fromArray(
							[
								_Utils_Tuple2('display', 'grid')
							])),
						$mdgriffith$elm_ui$Internal$Style$gridAlignments(
						function (alignment) {
							switch (alignment) {
								case 0:
									return _List_fromArray(
										[
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'flex-start')
										]);
								case 1:
									return _List_fromArray(
										[
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'flex-end')
										]);
								case 2:
									return _List_fromArray(
										[
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'flex-end')
										]);
								case 3:
									return _List_fromArray(
										[
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'flex-start')
										]);
								case 4:
									return _List_fromArray(
										[
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'center')
										]);
								default:
									return _List_fromArray(
										[
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'center')
										]);
							}
						})
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.fI),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'block'),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.gu + ':first-child'),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin', '0 !important')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot(
							$mdgriffith$elm_ui$Internal$Style$classes.gu + ($mdgriffith$elm_ui$Internal$Style$selfName(3) + (':first-child + .' + $mdgriffith$elm_ui$Internal$Style$classes.gu))),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin', '0 !important')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot(
							$mdgriffith$elm_ui$Internal$Style$classes.gu + ($mdgriffith$elm_ui$Internal$Style$selfName(2) + (':first-child + .' + $mdgriffith$elm_ui$Internal$Style$classes.gu))),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin', '0 !important')
							])),
						$mdgriffith$elm_ui$Internal$Style$describeAlignment(
						function (alignment) {
							switch (alignment) {
								case 0:
									return _Utils_Tuple2(_List_Nil, _List_Nil);
								case 1:
									return _Utils_Tuple2(_List_Nil, _List_Nil);
								case 2:
									return _Utils_Tuple2(
										_List_Nil,
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'float', 'right'),
												A2(
												$mdgriffith$elm_ui$Internal$Style$Descriptor,
												'::after',
												_List_fromArray(
													[
														A2($mdgriffith$elm_ui$Internal$Style$Prop, 'content', '\"\"'),
														A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'table'),
														A2($mdgriffith$elm_ui$Internal$Style$Prop, 'clear', 'both')
													]))
											]));
								case 3:
									return _Utils_Tuple2(
										_List_Nil,
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'float', 'left'),
												A2(
												$mdgriffith$elm_ui$Internal$Style$Descriptor,
												'::after',
												_List_fromArray(
													[
														A2($mdgriffith$elm_ui$Internal$Style$Prop, 'content', '\"\"'),
														A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'table'),
														A2($mdgriffith$elm_ui$Internal$Style$Prop, 'clear', 'both')
													]))
											]));
								case 4:
									return _Utils_Tuple2(_List_Nil, _List_Nil);
								default:
									return _Utils_Tuple2(_List_Nil, _List_Nil);
							}
						})
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.hn),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'white-space', 'pre-wrap !important'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', '100%'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'background-color', 'transparent')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.hq),
				_List_fromArray(
					[
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.h3),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-basis', 'auto')
							]))
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.hp),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'white-space', 'pre-wrap !important'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'cursor', 'text'),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.ho),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'white-space', 'pre-wrap !important'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'color', 'transparent')
							]))
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.fJ),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'block'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'white-space', 'normal'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'overflow-wrap', 'break-word'),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.er),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'z-index', '0'),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Child,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.gx),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'z-index', '-1')
									]))
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$AllChildren,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.ih),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'inline'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'white-space', 'normal')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$AllChildren,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.fJ),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'inline'),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Descriptor,
								'::after',
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'content', 'none')
									])),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Descriptor,
								'::before',
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'content', 'none')
									]))
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$AllChildren,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.h3),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'inline'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'white-space', 'normal'),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Descriptor,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.gd),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'inline-block')
									])),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Descriptor,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.hk),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'flex')
									])),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Descriptor,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.gx),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'flex')
									])),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Descriptor,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.gi),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'flex')
									])),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Descriptor,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.gy),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'flex')
									])),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Descriptor,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.hJ),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'flex')
									])),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Descriptor,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.hI),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'flex')
									])),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Child,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.ih),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'inline'),
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'white-space', 'normal')
									]))
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.eF),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'inline')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.bC),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'inline-flex')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.hb),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'inline-grid')
							])),
						$mdgriffith$elm_ui$Internal$Style$describeAlignment(
						function (alignment) {
							switch (alignment) {
								case 0:
									return _Utils_Tuple2(_List_Nil, _List_Nil);
								case 1:
									return _Utils_Tuple2(_List_Nil, _List_Nil);
								case 2:
									return _Utils_Tuple2(
										_List_Nil,
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'float', 'right')
											]));
								case 3:
									return _Utils_Tuple2(
										_List_Nil,
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'float', 'left')
											]));
								case 4:
									return _Utils_Tuple2(_List_Nil, _List_Nil);
								default:
									return _Utils_Tuple2(_List_Nil, _List_Nil);
							}
						})
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				'.hidden',
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'none')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.it),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-weight', '100')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.ik),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-weight', '200')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.io),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-weight', '300')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.iq),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-weight', '400')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.ip),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-weight', '500')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.is),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-weight', '600')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.gB),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-weight', '700')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.ij),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-weight', '800')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.il),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-weight', '900')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.hu),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-style', 'italic')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.id),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-decoration', 'line-through')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.iA),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-decoration', 'underline'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-decoration-skip-ink', 'auto'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-decoration-skip', 'ink')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				_Utils_ap(
					$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.iA),
					$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.id)),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-decoration', 'line-through underline'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-decoration-skip-ink', 'auto'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-decoration-skip', 'ink')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.iv),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-style', 'normal')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.im),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-align', 'justify')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.d7),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-align', 'justify-all')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.ii),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-align', 'center')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.ir),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-align', 'right')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.$9),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-align', 'left')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				'.modal',
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'position', 'fixed'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'left', '0'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'top', '0'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', '100%'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'none')
					]))
			]))
	]);
var $mdgriffith$elm_ui$Internal$Style$fontVariant = function (_var) {
	return _List_fromArray(
		[
			A2(
			$mdgriffith$elm_ui$Internal$Style$Class,
			'.v-' + _var,
			_List_fromArray(
				[
					A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-feature-settings', '\"' + (_var + '\"'))
				])),
			A2(
			$mdgriffith$elm_ui$Internal$Style$Class,
			'.v-' + (_var + '-off'),
			_List_fromArray(
				[
					A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-feature-settings', '\"' + (_var + '\" 0'))
				]))
		]);
};
var $mdgriffith$elm_ui$Internal$Style$commonValues = $elm$core$List$concat(
	_List_fromArray(
		[
			A2(
			$elm$core$List$map,
			function (x) {
				return A2(
					$mdgriffith$elm_ui$Internal$Style$Class,
					'.border-' + $elm$core$String$fromInt(x),
					_List_fromArray(
						[
							A2(
							$mdgriffith$elm_ui$Internal$Style$Prop,
							'border-width',
							$elm$core$String$fromInt(x) + 'px')
						]));
			},
			A2($elm$core$List$range, 0, 6)),
			A2(
			$elm$core$List$map,
			function (i) {
				return A2(
					$mdgriffith$elm_ui$Internal$Style$Class,
					'.font-size-' + $elm$core$String$fromInt(i),
					_List_fromArray(
						[
							A2(
							$mdgriffith$elm_ui$Internal$Style$Prop,
							'font-size',
							$elm$core$String$fromInt(i) + 'px')
						]));
			},
			A2($elm$core$List$range, 8, 32)),
			A2(
			$elm$core$List$map,
			function (i) {
				return A2(
					$mdgriffith$elm_ui$Internal$Style$Class,
					'.p-' + $elm$core$String$fromInt(i),
					_List_fromArray(
						[
							A2(
							$mdgriffith$elm_ui$Internal$Style$Prop,
							'padding',
							$elm$core$String$fromInt(i) + 'px')
						]));
			},
			A2($elm$core$List$range, 0, 24)),
			_List_fromArray(
			[
				A2(
				$mdgriffith$elm_ui$Internal$Style$Class,
				'.v-smcp',
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-variant', 'small-caps')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Class,
				'.v-smcp-off',
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-variant', 'normal')
					]))
			]),
			$mdgriffith$elm_ui$Internal$Style$fontVariant('zero'),
			$mdgriffith$elm_ui$Internal$Style$fontVariant('onum'),
			$mdgriffith$elm_ui$Internal$Style$fontVariant('liga'),
			$mdgriffith$elm_ui$Internal$Style$fontVariant('dlig'),
			$mdgriffith$elm_ui$Internal$Style$fontVariant('ordn'),
			$mdgriffith$elm_ui$Internal$Style$fontVariant('tnum'),
			$mdgriffith$elm_ui$Internal$Style$fontVariant('afrc'),
			$mdgriffith$elm_ui$Internal$Style$fontVariant('frac')
		]));
var $mdgriffith$elm_ui$Internal$Style$explainer = '\n.explain {\n    border: 6px solid rgb(174, 121, 15) !important;\n}\n.explain > .' + ($mdgriffith$elm_ui$Internal$Style$classes.gu + (' {\n    border: 4px dashed rgb(0, 151, 167) !important;\n}\n\n.ctr {\n    border: none !important;\n}\n.explain > .ctr > .' + ($mdgriffith$elm_ui$Internal$Style$classes.gu + ' {\n    border: 4px dashed rgb(0, 151, 167) !important;\n}\n\n')));
var $mdgriffith$elm_ui$Internal$Style$inputTextReset = '\ninput[type="search"],\ninput[type="search"]::-webkit-search-decoration,\ninput[type="search"]::-webkit-search-cancel-button,\ninput[type="search"]::-webkit-search-results-button,\ninput[type="search"]::-webkit-search-results-decoration {\n  -webkit-appearance:none;\n}\n';
var $mdgriffith$elm_ui$Internal$Style$sliderReset = '\ninput[type=range] {\n  -webkit-appearance: none; \n  background: transparent;\n  position:absolute;\n  left:0;\n  top:0;\n  z-index:10;\n  width: 100%;\n  outline: dashed 1px;\n  height: 100%;\n  opacity: 0;\n}\n';
var $mdgriffith$elm_ui$Internal$Style$thumbReset = '\ninput[type=range]::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    opacity: 0.5;\n    width: 80px;\n    height: 80px;\n    background-color: black;\n    border:none;\n    border-radius: 5px;\n}\ninput[type=range]::-moz-range-thumb {\n    opacity: 0.5;\n    width: 80px;\n    height: 80px;\n    background-color: black;\n    border:none;\n    border-radius: 5px;\n}\ninput[type=range]::-ms-thumb {\n    opacity: 0.5;\n    width: 80px;\n    height: 80px;\n    background-color: black;\n    border:none;\n    border-radius: 5px;\n}\ninput[type=range][orient=vertical]{\n    writing-mode: bt-lr; /* IE */\n    -webkit-appearance: slider-vertical;  /* WebKit */\n}\n';
var $mdgriffith$elm_ui$Internal$Style$trackReset = '\ninput[type=range]::-moz-range-track {\n    background: transparent;\n    cursor: pointer;\n}\ninput[type=range]::-ms-track {\n    background: transparent;\n    cursor: pointer;\n}\ninput[type=range]::-webkit-slider-runnable-track {\n    background: transparent;\n    cursor: pointer;\n}\n';
var $mdgriffith$elm_ui$Internal$Style$overrides = '@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {' + ($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.gu) + ($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.eF) + (' > ' + ($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.gu) + (' { flex-basis: auto !important; } ' + ($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.gu) + ($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.eF) + (' > ' + ($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.gu) + ($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.dG) + (' { flex-basis: auto !important; }}' + ($mdgriffith$elm_ui$Internal$Style$inputTextReset + ($mdgriffith$elm_ui$Internal$Style$sliderReset + ($mdgriffith$elm_ui$Internal$Style$trackReset + ($mdgriffith$elm_ui$Internal$Style$thumbReset + $mdgriffith$elm_ui$Internal$Style$explainer)))))))))))))));
var $elm$core$String$concat = function (strings) {
	return A2($elm$core$String$join, '', strings);
};
var $mdgriffith$elm_ui$Internal$Style$Intermediate = $elm$core$Basics$identity;
var $mdgriffith$elm_ui$Internal$Style$emptyIntermediate = F2(
	function (selector, closing) {
		return {aZ: closing, v: _List_Nil, an: _List_Nil, aa: selector};
	});
var $mdgriffith$elm_ui$Internal$Style$renderRules = F2(
	function (_v0, rulesToRender) {
		var parent = _v0;
		var generateIntermediates = F2(
			function (rule, rendered) {
				switch (rule.$) {
					case 0:
						var name = rule.a;
						var val = rule.b;
						return _Utils_update(
							rendered,
							{
								an: A2(
									$elm$core$List$cons,
									_Utils_Tuple2(name, val),
									rendered.an)
							});
					case 3:
						var _v2 = rule.a;
						var prop = _v2.a;
						var value = _v2.b;
						var props = rule.b;
						return _Utils_update(
							rendered,
							{
								v: A2(
									$elm$core$List$cons,
									{aZ: '\n}', v: _List_Nil, an: props, aa: '@supports (' + (prop + (':' + (value + (') {' + parent.aa))))},
									rendered.v)
							});
					case 5:
						var selector = rule.a;
						var adjRules = rule.b;
						return _Utils_update(
							rendered,
							{
								v: A2(
									$elm$core$List$cons,
									A2(
										$mdgriffith$elm_ui$Internal$Style$renderRules,
										A2($mdgriffith$elm_ui$Internal$Style$emptyIntermediate, parent.aa + (' + ' + selector), ''),
										adjRules),
									rendered.v)
							});
					case 1:
						var child = rule.a;
						var childRules = rule.b;
						return _Utils_update(
							rendered,
							{
								v: A2(
									$elm$core$List$cons,
									A2(
										$mdgriffith$elm_ui$Internal$Style$renderRules,
										A2($mdgriffith$elm_ui$Internal$Style$emptyIntermediate, parent.aa + (' > ' + child), ''),
										childRules),
									rendered.v)
							});
					case 2:
						var child = rule.a;
						var childRules = rule.b;
						return _Utils_update(
							rendered,
							{
								v: A2(
									$elm$core$List$cons,
									A2(
										$mdgriffith$elm_ui$Internal$Style$renderRules,
										A2($mdgriffith$elm_ui$Internal$Style$emptyIntermediate, parent.aa + (' ' + child), ''),
										childRules),
									rendered.v)
							});
					case 4:
						var descriptor = rule.a;
						var descriptorRules = rule.b;
						return _Utils_update(
							rendered,
							{
								v: A2(
									$elm$core$List$cons,
									A2(
										$mdgriffith$elm_ui$Internal$Style$renderRules,
										A2(
											$mdgriffith$elm_ui$Internal$Style$emptyIntermediate,
											_Utils_ap(parent.aa, descriptor),
											''),
										descriptorRules),
									rendered.v)
							});
					default:
						var batched = rule.a;
						return _Utils_update(
							rendered,
							{
								v: A2(
									$elm$core$List$cons,
									A2(
										$mdgriffith$elm_ui$Internal$Style$renderRules,
										A2($mdgriffith$elm_ui$Internal$Style$emptyIntermediate, parent.aa, ''),
										batched),
									rendered.v)
							});
				}
			});
		return A3($elm$core$List$foldr, generateIntermediates, parent, rulesToRender);
	});
var $mdgriffith$elm_ui$Internal$Style$renderCompact = function (styleClasses) {
	var renderValues = function (values) {
		return $elm$core$String$concat(
			A2(
				$elm$core$List$map,
				function (_v3) {
					var x = _v3.a;
					var y = _v3.b;
					return x + (':' + (y + ';'));
				},
				values));
	};
	var renderClass = function (rule) {
		var _v2 = rule.an;
		if (!_v2.b) {
			return '';
		} else {
			return rule.aa + ('{' + (renderValues(rule.an) + (rule.aZ + '}')));
		}
	};
	var renderIntermediate = function (_v0) {
		var rule = _v0;
		return _Utils_ap(
			renderClass(rule),
			$elm$core$String$concat(
				A2($elm$core$List$map, renderIntermediate, rule.v)));
	};
	return $elm$core$String$concat(
		A2(
			$elm$core$List$map,
			renderIntermediate,
			A3(
				$elm$core$List$foldr,
				F2(
					function (_v1, existing) {
						var name = _v1.a;
						var styleRules = _v1.b;
						return A2(
							$elm$core$List$cons,
							A2(
								$mdgriffith$elm_ui$Internal$Style$renderRules,
								A2($mdgriffith$elm_ui$Internal$Style$emptyIntermediate, name, ''),
								styleRules),
							existing);
					}),
				_List_Nil,
				styleClasses)));
};
var $mdgriffith$elm_ui$Internal$Style$rules = _Utils_ap(
	$mdgriffith$elm_ui$Internal$Style$overrides,
	$mdgriffith$elm_ui$Internal$Style$renderCompact(
		_Utils_ap($mdgriffith$elm_ui$Internal$Style$baseSheet, $mdgriffith$elm_ui$Internal$Style$commonValues)));
var $elm$virtual_dom$VirtualDom$text = _VirtualDom_text;
var $mdgriffith$elm_ui$Internal$Model$staticRoot = function (opts) {
	var _v0 = opts.dT;
	switch (_v0) {
		case 0:
			return A3(
				$elm$virtual_dom$VirtualDom$node,
				'div',
				_List_Nil,
				_List_fromArray(
					[
						A3(
						$elm$virtual_dom$VirtualDom$node,
						'style',
						_List_Nil,
						_List_fromArray(
							[
								$elm$virtual_dom$VirtualDom$text($mdgriffith$elm_ui$Internal$Style$rules)
							]))
					]));
		case 1:
			return $elm$virtual_dom$VirtualDom$text('');
		default:
			return A3(
				$elm$virtual_dom$VirtualDom$node,
				'elm-ui-static-rules',
				_List_fromArray(
					[
						A2(
						$elm$virtual_dom$VirtualDom$property,
						'rules',
						$elm$json$Json$Encode$string($mdgriffith$elm_ui$Internal$Style$rules))
					]),
				_List_Nil);
	}
};
var $elm$json$Json$Encode$list = F2(
	function (func, entries) {
		return _Json_wrap(
			A3(
				$elm$core$List$foldl,
				_Json_addEntry(func),
				_Json_emptyArray(0),
				entries));
	});
var $elm$json$Json$Encode$object = function (pairs) {
	return _Json_wrap(
		A3(
			$elm$core$List$foldl,
			F2(
				function (_v0, obj) {
					var k = _v0.a;
					var v = _v0.b;
					return A3(_Json_addField, k, v, obj);
				}),
			_Json_emptyObject(0),
			pairs));
};
var $mdgriffith$elm_ui$Internal$Model$fontName = function (font) {
	switch (font.$) {
		case 0:
			return 'serif';
		case 1:
			return 'sans-serif';
		case 2:
			return 'monospace';
		case 3:
			var name = font.a;
			return '\"' + (name + '\"');
		case 4:
			var name = font.a;
			var url = font.b;
			return '\"' + (name + '\"');
		default:
			var name = font.a.dU;
			return '\"' + (name + '\"');
	}
};
var $mdgriffith$elm_ui$Internal$Model$isSmallCaps = function (_var) {
	switch (_var.$) {
		case 0:
			var name = _var.a;
			return name === 'smcp';
		case 1:
			var name = _var.a;
			return false;
		default:
			var name = _var.a;
			var index = _var.b;
			return (name === 'smcp') && (index === 1);
	}
};
var $mdgriffith$elm_ui$Internal$Model$hasSmallCaps = function (typeface) {
	if (typeface.$ === 5) {
		var font = typeface.a;
		return A2($elm$core$List$any, $mdgriffith$elm_ui$Internal$Model$isSmallCaps, font.cf);
	} else {
		return false;
	}
};
var $elm$core$Basics$min = F2(
	function (x, y) {
		return (_Utils_cmp(x, y) < 0) ? x : y;
	});
var $mdgriffith$elm_ui$Internal$Model$renderProps = F3(
	function (force, _v0, existing) {
		var key = _v0.a;
		var val = _v0.b;
		return force ? (existing + ('\n  ' + (key + (': ' + (val + ' !important;'))))) : (existing + ('\n  ' + (key + (': ' + (val + ';')))));
	});
var $mdgriffith$elm_ui$Internal$Model$renderStyle = F4(
	function (options, maybePseudo, selector, props) {
		if (maybePseudo.$ === 1) {
			return _List_fromArray(
				[
					selector + ('{' + (A3(
					$elm$core$List$foldl,
					$mdgriffith$elm_ui$Internal$Model$renderProps(false),
					'',
					props) + '\n}'))
				]);
		} else {
			var pseudo = maybePseudo.a;
			switch (pseudo) {
				case 1:
					var _v2 = options.hg;
					switch (_v2) {
						case 0:
							return _List_Nil;
						case 2:
							return _List_fromArray(
								[
									selector + ('-hv {' + (A3(
									$elm$core$List$foldl,
									$mdgriffith$elm_ui$Internal$Model$renderProps(true),
									'',
									props) + '\n}'))
								]);
						default:
							return _List_fromArray(
								[
									selector + ('-hv:hover {' + (A3(
									$elm$core$List$foldl,
									$mdgriffith$elm_ui$Internal$Model$renderProps(false),
									'',
									props) + '\n}'))
								]);
					}
				case 0:
					var renderedProps = A3(
						$elm$core$List$foldl,
						$mdgriffith$elm_ui$Internal$Model$renderProps(false),
						'',
						props);
					return _List_fromArray(
						[
							selector + ('-fs:focus {' + (renderedProps + '\n}')),
							('.' + ($mdgriffith$elm_ui$Internal$Style$classes.gu + (':focus ' + (selector + '-fs  {')))) + (renderedProps + '\n}'),
							(selector + '-fs:focus-within {') + (renderedProps + '\n}'),
							('.ui-slide-bar:focus + ' + ($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.gu) + (' .focusable-thumb' + (selector + '-fs {')))) + (renderedProps + '\n}')
						]);
				default:
					return _List_fromArray(
						[
							selector + ('-act:active {' + (A3(
							$elm$core$List$foldl,
							$mdgriffith$elm_ui$Internal$Model$renderProps(false),
							'',
							props) + '\n}'))
						]);
			}
		}
	});
var $mdgriffith$elm_ui$Internal$Model$renderVariant = function (_var) {
	switch (_var.$) {
		case 0:
			var name = _var.a;
			return '\"' + (name + '\"');
		case 1:
			var name = _var.a;
			return '\"' + (name + '\" 0');
		default:
			var name = _var.a;
			var index = _var.b;
			return '\"' + (name + ('\" ' + $elm$core$String$fromInt(index)));
	}
};
var $mdgriffith$elm_ui$Internal$Model$renderVariants = function (typeface) {
	if (typeface.$ === 5) {
		var font = typeface.a;
		return $elm$core$Maybe$Just(
			A2(
				$elm$core$String$join,
				', ',
				A2($elm$core$List$map, $mdgriffith$elm_ui$Internal$Model$renderVariant, font.cf)));
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $mdgriffith$elm_ui$Internal$Model$transformValue = function (transform) {
	switch (transform.$) {
		case 0:
			return $elm$core$Maybe$Nothing;
		case 1:
			var _v1 = transform.a;
			var x = _v1.a;
			var y = _v1.b;
			var z = _v1.c;
			return $elm$core$Maybe$Just(
				'translate3d(' + ($elm$core$String$fromFloat(x) + ('px, ' + ($elm$core$String$fromFloat(y) + ('px, ' + ($elm$core$String$fromFloat(z) + 'px)'))))));
		default:
			var _v2 = transform.a;
			var tx = _v2.a;
			var ty = _v2.b;
			var tz = _v2.c;
			var _v3 = transform.b;
			var sx = _v3.a;
			var sy = _v3.b;
			var sz = _v3.c;
			var _v4 = transform.c;
			var ox = _v4.a;
			var oy = _v4.b;
			var oz = _v4.c;
			var angle = transform.d;
			var translate = 'translate3d(' + ($elm$core$String$fromFloat(tx) + ('px, ' + ($elm$core$String$fromFloat(ty) + ('px, ' + ($elm$core$String$fromFloat(tz) + 'px)')))));
			var scale = 'scale3d(' + ($elm$core$String$fromFloat(sx) + (', ' + ($elm$core$String$fromFloat(sy) + (', ' + ($elm$core$String$fromFloat(sz) + ')')))));
			var rotate = 'rotate3d(' + ($elm$core$String$fromFloat(ox) + (', ' + ($elm$core$String$fromFloat(oy) + (', ' + ($elm$core$String$fromFloat(oz) + (', ' + ($elm$core$String$fromFloat(angle) + 'rad)')))))));
			return $elm$core$Maybe$Just(translate + (' ' + (scale + (' ' + rotate))));
	}
};
var $mdgriffith$elm_ui$Internal$Model$renderStyleRule = F3(
	function (options, rule, maybePseudo) {
		switch (rule.$) {
			case 0:
				var selector = rule.a;
				var props = rule.b;
				return A4($mdgriffith$elm_ui$Internal$Model$renderStyle, options, maybePseudo, selector, props);
			case 13:
				var name = rule.a;
				var prop = rule.b;
				return A4(
					$mdgriffith$elm_ui$Internal$Model$renderStyle,
					options,
					maybePseudo,
					'.' + name,
					_List_fromArray(
						[
							A2($mdgriffith$elm_ui$Internal$Model$Property, 'box-shadow', prop)
						]));
			case 12:
				var name = rule.a;
				var transparency = rule.b;
				var opacity = A2(
					$elm$core$Basics$max,
					0,
					A2($elm$core$Basics$min, 1, 1 - transparency));
				return A4(
					$mdgriffith$elm_ui$Internal$Model$renderStyle,
					options,
					maybePseudo,
					'.' + name,
					_List_fromArray(
						[
							A2(
							$mdgriffith$elm_ui$Internal$Model$Property,
							'opacity',
							$elm$core$String$fromFloat(opacity))
						]));
			case 2:
				var i = rule.a;
				return A4(
					$mdgriffith$elm_ui$Internal$Model$renderStyle,
					options,
					maybePseudo,
					'.font-size-' + $elm$core$String$fromInt(i),
					_List_fromArray(
						[
							A2(
							$mdgriffith$elm_ui$Internal$Model$Property,
							'font-size',
							$elm$core$String$fromInt(i) + 'px')
						]));
			case 1:
				var name = rule.a;
				var typefaces = rule.b;
				var features = A2(
					$elm$core$String$join,
					', ',
					A2($elm$core$List$filterMap, $mdgriffith$elm_ui$Internal$Model$renderVariants, typefaces));
				var families = _List_fromArray(
					[
						A2(
						$mdgriffith$elm_ui$Internal$Model$Property,
						'font-family',
						A2(
							$elm$core$String$join,
							', ',
							A2($elm$core$List$map, $mdgriffith$elm_ui$Internal$Model$fontName, typefaces))),
						A2($mdgriffith$elm_ui$Internal$Model$Property, 'font-feature-settings', features),
						A2(
						$mdgriffith$elm_ui$Internal$Model$Property,
						'font-variant',
						A2($elm$core$List$any, $mdgriffith$elm_ui$Internal$Model$hasSmallCaps, typefaces) ? 'small-caps' : 'normal')
					]);
				return A4($mdgriffith$elm_ui$Internal$Model$renderStyle, options, maybePseudo, '.' + name, families);
			case 3:
				var _class = rule.a;
				var prop = rule.b;
				var val = rule.c;
				return A4(
					$mdgriffith$elm_ui$Internal$Model$renderStyle,
					options,
					maybePseudo,
					'.' + _class,
					_List_fromArray(
						[
							A2($mdgriffith$elm_ui$Internal$Model$Property, prop, val)
						]));
			case 4:
				var _class = rule.a;
				var prop = rule.b;
				var color = rule.c;
				return A4(
					$mdgriffith$elm_ui$Internal$Model$renderStyle,
					options,
					maybePseudo,
					'.' + _class,
					_List_fromArray(
						[
							A2(
							$mdgriffith$elm_ui$Internal$Model$Property,
							prop,
							$mdgriffith$elm_ui$Internal$Model$formatColor(color))
						]));
			case 5:
				var cls = rule.a;
				var x = rule.b;
				var y = rule.c;
				var yPx = $elm$core$String$fromInt(y) + 'px';
				var xPx = $elm$core$String$fromInt(x) + 'px';
				var single = '.' + $mdgriffith$elm_ui$Internal$Style$classes.h3;
				var row = '.' + $mdgriffith$elm_ui$Internal$Style$classes.eF;
				var wrappedRow = '.' + ($mdgriffith$elm_ui$Internal$Style$classes.eP + row);
				var right = '.' + $mdgriffith$elm_ui$Internal$Style$classes.eT;
				var paragraph = '.' + $mdgriffith$elm_ui$Internal$Style$classes.fJ;
				var page = '.' + $mdgriffith$elm_ui$Internal$Style$classes.fI;
				var left = '.' + $mdgriffith$elm_ui$Internal$Style$classes.eS;
				var halfY = $elm$core$String$fromFloat(y / 2) + 'px';
				var halfX = $elm$core$String$fromFloat(x / 2) + 'px';
				var column = '.' + $mdgriffith$elm_ui$Internal$Style$classes.bC;
				var _class = '.' + cls;
				var any = '.' + $mdgriffith$elm_ui$Internal$Style$classes.gu;
				return $elm$core$List$concat(
					_List_fromArray(
						[
							A4(
							$mdgriffith$elm_ui$Internal$Model$renderStyle,
							options,
							maybePseudo,
							_class + (row + (' > ' + (any + (' + ' + any)))),
							_List_fromArray(
								[
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'margin-left', xPx)
								])),
							A4(
							$mdgriffith$elm_ui$Internal$Model$renderStyle,
							options,
							maybePseudo,
							_class + (wrappedRow + (' > ' + any)),
							_List_fromArray(
								[
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'margin', halfY + (' ' + halfX))
								])),
							A4(
							$mdgriffith$elm_ui$Internal$Model$renderStyle,
							options,
							maybePseudo,
							_class + (column + (' > ' + (any + (' + ' + any)))),
							_List_fromArray(
								[
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'margin-top', yPx)
								])),
							A4(
							$mdgriffith$elm_ui$Internal$Model$renderStyle,
							options,
							maybePseudo,
							_class + (page + (' > ' + (any + (' + ' + any)))),
							_List_fromArray(
								[
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'margin-top', yPx)
								])),
							A4(
							$mdgriffith$elm_ui$Internal$Model$renderStyle,
							options,
							maybePseudo,
							_class + (page + (' > ' + left)),
							_List_fromArray(
								[
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'margin-right', xPx)
								])),
							A4(
							$mdgriffith$elm_ui$Internal$Model$renderStyle,
							options,
							maybePseudo,
							_class + (page + (' > ' + right)),
							_List_fromArray(
								[
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'margin-left', xPx)
								])),
							A4(
							$mdgriffith$elm_ui$Internal$Model$renderStyle,
							options,
							maybePseudo,
							_Utils_ap(_class, paragraph),
							_List_fromArray(
								[
									A2(
									$mdgriffith$elm_ui$Internal$Model$Property,
									'line-height',
									'calc(1em + ' + ($elm$core$String$fromInt(y) + 'px)'))
								])),
							A4(
							$mdgriffith$elm_ui$Internal$Model$renderStyle,
							options,
							maybePseudo,
							'textarea' + (any + _class),
							_List_fromArray(
								[
									A2(
									$mdgriffith$elm_ui$Internal$Model$Property,
									'line-height',
									'calc(1em + ' + ($elm$core$String$fromInt(y) + 'px)')),
									A2(
									$mdgriffith$elm_ui$Internal$Model$Property,
									'height',
									'calc(100% + ' + ($elm$core$String$fromInt(y) + 'px)'))
								])),
							A4(
							$mdgriffith$elm_ui$Internal$Model$renderStyle,
							options,
							maybePseudo,
							_class + (paragraph + (' > ' + left)),
							_List_fromArray(
								[
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'margin-right', xPx)
								])),
							A4(
							$mdgriffith$elm_ui$Internal$Model$renderStyle,
							options,
							maybePseudo,
							_class + (paragraph + (' > ' + right)),
							_List_fromArray(
								[
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'margin-left', xPx)
								])),
							A4(
							$mdgriffith$elm_ui$Internal$Model$renderStyle,
							options,
							maybePseudo,
							_class + (paragraph + '::after'),
							_List_fromArray(
								[
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'content', '\'\''),
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'display', 'block'),
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'height', '0'),
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'width', '0'),
									A2(
									$mdgriffith$elm_ui$Internal$Model$Property,
									'margin-top',
									$elm$core$String$fromInt((-1) * ((y / 2) | 0)) + 'px')
								])),
							A4(
							$mdgriffith$elm_ui$Internal$Model$renderStyle,
							options,
							maybePseudo,
							_class + (paragraph + '::before'),
							_List_fromArray(
								[
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'content', '\'\''),
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'display', 'block'),
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'height', '0'),
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'width', '0'),
									A2(
									$mdgriffith$elm_ui$Internal$Model$Property,
									'margin-bottom',
									$elm$core$String$fromInt((-1) * ((y / 2) | 0)) + 'px')
								]))
						]));
			case 7:
				var cls = rule.a;
				var top = rule.b;
				var right = rule.c;
				var bottom = rule.d;
				var left = rule.e;
				var _class = '.' + cls;
				return A4(
					$mdgriffith$elm_ui$Internal$Model$renderStyle,
					options,
					maybePseudo,
					_class,
					_List_fromArray(
						[
							A2(
							$mdgriffith$elm_ui$Internal$Model$Property,
							'padding',
							$elm$core$String$fromFloat(top) + ('px ' + ($elm$core$String$fromFloat(right) + ('px ' + ($elm$core$String$fromFloat(bottom) + ('px ' + ($elm$core$String$fromFloat(left) + 'px')))))))
						]));
			case 6:
				var cls = rule.a;
				var top = rule.b;
				var right = rule.c;
				var bottom = rule.d;
				var left = rule.e;
				var _class = '.' + cls;
				return A4(
					$mdgriffith$elm_ui$Internal$Model$renderStyle,
					options,
					maybePseudo,
					_class,
					_List_fromArray(
						[
							A2(
							$mdgriffith$elm_ui$Internal$Model$Property,
							'border-width',
							$elm$core$String$fromInt(top) + ('px ' + ($elm$core$String$fromInt(right) + ('px ' + ($elm$core$String$fromInt(bottom) + ('px ' + ($elm$core$String$fromInt(left) + 'px')))))))
						]));
			case 8:
				var template = rule.a;
				var toGridLengthHelper = F3(
					function (minimum, maximum, x) {
						toGridLengthHelper:
						while (true) {
							switch (x.$) {
								case 0:
									var px = x.a;
									return $elm$core$String$fromInt(px) + 'px';
								case 1:
									var _v2 = _Utils_Tuple2(minimum, maximum);
									if (_v2.a.$ === 1) {
										if (_v2.b.$ === 1) {
											var _v3 = _v2.a;
											var _v4 = _v2.b;
											return 'max-content';
										} else {
											var _v6 = _v2.a;
											var maxSize = _v2.b.a;
											return 'minmax(max-content, ' + ($elm$core$String$fromInt(maxSize) + 'px)');
										}
									} else {
										if (_v2.b.$ === 1) {
											var minSize = _v2.a.a;
											var _v5 = _v2.b;
											return 'minmax(' + ($elm$core$String$fromInt(minSize) + ('px, ' + 'max-content)'));
										} else {
											var minSize = _v2.a.a;
											var maxSize = _v2.b.a;
											return 'minmax(' + ($elm$core$String$fromInt(minSize) + ('px, ' + ($elm$core$String$fromInt(maxSize) + 'px)')));
										}
									}
								case 2:
									var i = x.a;
									var _v7 = _Utils_Tuple2(minimum, maximum);
									if (_v7.a.$ === 1) {
										if (_v7.b.$ === 1) {
											var _v8 = _v7.a;
											var _v9 = _v7.b;
											return $elm$core$String$fromInt(i) + 'fr';
										} else {
											var _v11 = _v7.a;
											var maxSize = _v7.b.a;
											return 'minmax(max-content, ' + ($elm$core$String$fromInt(maxSize) + 'px)');
										}
									} else {
										if (_v7.b.$ === 1) {
											var minSize = _v7.a.a;
											var _v10 = _v7.b;
											return 'minmax(' + ($elm$core$String$fromInt(minSize) + ('px, ' + ($elm$core$String$fromInt(i) + ('fr' + 'fr)'))));
										} else {
											var minSize = _v7.a.a;
											var maxSize = _v7.b.a;
											return 'minmax(' + ($elm$core$String$fromInt(minSize) + ('px, ' + ($elm$core$String$fromInt(maxSize) + 'px)')));
										}
									}
								case 3:
									var m = x.a;
									var len = x.b;
									var $temp$minimum = $elm$core$Maybe$Just(m),
										$temp$maximum = maximum,
										$temp$x = len;
									minimum = $temp$minimum;
									maximum = $temp$maximum;
									x = $temp$x;
									continue toGridLengthHelper;
								default:
									var m = x.a;
									var len = x.b;
									var $temp$minimum = minimum,
										$temp$maximum = $elm$core$Maybe$Just(m),
										$temp$x = len;
									minimum = $temp$minimum;
									maximum = $temp$maximum;
									x = $temp$x;
									continue toGridLengthHelper;
							}
						}
					});
				var toGridLength = function (x) {
					return A3(toGridLengthHelper, $elm$core$Maybe$Nothing, $elm$core$Maybe$Nothing, x);
				};
				var xSpacing = toGridLength(template.h6.a);
				var ySpacing = toGridLength(template.h6.b);
				var rows = function (x) {
					return 'grid-template-rows: ' + (x + ';');
				}(
					A2(
						$elm$core$String$join,
						' ',
						A2($elm$core$List$map, toGridLength, template.ap)));
				var msRows = function (x) {
					return '-ms-grid-rows: ' + (x + ';');
				}(
					A2(
						$elm$core$String$join,
						ySpacing,
						A2($elm$core$List$map, toGridLength, template.w)));
				var msColumns = function (x) {
					return '-ms-grid-columns: ' + (x + ';');
				}(
					A2(
						$elm$core$String$join,
						ySpacing,
						A2($elm$core$List$map, toGridLength, template.w)));
				var gapY = 'grid-row-gap:' + (toGridLength(template.h6.b) + ';');
				var gapX = 'grid-column-gap:' + (toGridLength(template.h6.a) + ';');
				var columns = function (x) {
					return 'grid-template-columns: ' + (x + ';');
				}(
					A2(
						$elm$core$String$join,
						' ',
						A2($elm$core$List$map, toGridLength, template.w)));
				var _class = '.grid-rows-' + (A2(
					$elm$core$String$join,
					'-',
					A2($elm$core$List$map, $mdgriffith$elm_ui$Internal$Model$lengthClassName, template.ap)) + ('-cols-' + (A2(
					$elm$core$String$join,
					'-',
					A2($elm$core$List$map, $mdgriffith$elm_ui$Internal$Model$lengthClassName, template.w)) + ('-space-x-' + ($mdgriffith$elm_ui$Internal$Model$lengthClassName(template.h6.a) + ('-space-y-' + $mdgriffith$elm_ui$Internal$Model$lengthClassName(template.h6.b)))))));
				var modernGrid = _class + ('{' + (columns + (rows + (gapX + (gapY + '}')))));
				var supports = '@supports (display:grid) {' + (modernGrid + '}');
				var base = _class + ('{' + (msColumns + (msRows + '}')));
				return _List_fromArray(
					[base, supports]);
			case 9:
				var position = rule.a;
				var msPosition = A2(
					$elm$core$String$join,
					' ',
					_List_fromArray(
						[
							'-ms-grid-row: ' + ($elm$core$String$fromInt(position.eF) + ';'),
							'-ms-grid-row-span: ' + ($elm$core$String$fromInt(position.es) + ';'),
							'-ms-grid-column: ' + ($elm$core$String$fromInt(position.gP) + ';'),
							'-ms-grid-column-span: ' + ($elm$core$String$fromInt(position.gc) + ';')
						]));
				var modernPosition = A2(
					$elm$core$String$join,
					' ',
					_List_fromArray(
						[
							'grid-row: ' + ($elm$core$String$fromInt(position.eF) + (' / ' + ($elm$core$String$fromInt(position.eF + position.es) + ';'))),
							'grid-column: ' + ($elm$core$String$fromInt(position.gP) + (' / ' + ($elm$core$String$fromInt(position.gP + position.gc) + ';')))
						]));
				var _class = '.grid-pos-' + ($elm$core$String$fromInt(position.eF) + ('-' + ($elm$core$String$fromInt(position.gP) + ('-' + ($elm$core$String$fromInt(position.gc) + ('-' + $elm$core$String$fromInt(position.es)))))));
				var modernGrid = _class + ('{' + (modernPosition + '}'));
				var supports = '@supports (display:grid) {' + (modernGrid + '}');
				var base = _class + ('{' + (msPosition + '}'));
				return _List_fromArray(
					[base, supports]);
			case 11:
				var _class = rule.a;
				var styles = rule.b;
				var renderPseudoRule = function (style) {
					return A3(
						$mdgriffith$elm_ui$Internal$Model$renderStyleRule,
						options,
						style,
						$elm$core$Maybe$Just(_class));
				};
				return A2($elm$core$List$concatMap, renderPseudoRule, styles);
			default:
				var transform = rule.a;
				var val = $mdgriffith$elm_ui$Internal$Model$transformValue(transform);
				var _class = $mdgriffith$elm_ui$Internal$Model$transformClass(transform);
				var _v12 = _Utils_Tuple2(_class, val);
				if ((!_v12.a.$) && (!_v12.b.$)) {
					var cls = _v12.a.a;
					var v = _v12.b.a;
					return A4(
						$mdgriffith$elm_ui$Internal$Model$renderStyle,
						options,
						maybePseudo,
						'.' + cls,
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Model$Property, 'transform', v)
							]));
				} else {
					return _List_Nil;
				}
		}
	});
var $mdgriffith$elm_ui$Internal$Model$encodeStyles = F2(
	function (options, stylesheet) {
		return $elm$json$Json$Encode$object(
			A2(
				$elm$core$List$map,
				function (style) {
					var styled = A3($mdgriffith$elm_ui$Internal$Model$renderStyleRule, options, style, $elm$core$Maybe$Nothing);
					return _Utils_Tuple2(
						$mdgriffith$elm_ui$Internal$Model$getStyleName(style),
						A2($elm$json$Json$Encode$list, $elm$json$Json$Encode$string, styled));
				},
				stylesheet));
	});
var $mdgriffith$elm_ui$Internal$Model$bracket = F2(
	function (selector, rules) {
		var renderPair = function (_v0) {
			var name = _v0.a;
			var val = _v0.b;
			return name + (': ' + (val + ';'));
		};
		return selector + (' {' + (A2(
			$elm$core$String$join,
			'',
			A2($elm$core$List$map, renderPair, rules)) + '}'));
	});
var $mdgriffith$elm_ui$Internal$Model$fontRule = F3(
	function (name, modifier, _v0) {
		var parentAdj = _v0.a;
		var textAdjustment = _v0.b;
		return _List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Model$bracket, '.' + (name + ('.' + (modifier + (', ' + ('.' + (name + (' .' + modifier))))))), parentAdj),
				A2($mdgriffith$elm_ui$Internal$Model$bracket, '.' + (name + ('.' + (modifier + ('> .' + ($mdgriffith$elm_ui$Internal$Style$classes.ih + (', .' + (name + (' .' + (modifier + (' > .' + $mdgriffith$elm_ui$Internal$Style$classes.ih)))))))))), textAdjustment)
			]);
	});
var $mdgriffith$elm_ui$Internal$Model$renderFontAdjustmentRule = F3(
	function (fontToAdjust, _v0, otherFontName) {
		var full = _v0.a;
		var capital = _v0.b;
		var name = _Utils_eq(fontToAdjust, otherFontName) ? fontToAdjust : (otherFontName + (' .' + fontToAdjust));
		return A2(
			$elm$core$String$join,
			' ',
			_Utils_ap(
				A3($mdgriffith$elm_ui$Internal$Model$fontRule, name, $mdgriffith$elm_ui$Internal$Style$classes.h4, capital),
				A3($mdgriffith$elm_ui$Internal$Model$fontRule, name, $mdgriffith$elm_ui$Internal$Style$classes.g9, full)));
	});
var $mdgriffith$elm_ui$Internal$Model$renderNullAdjustmentRule = F2(
	function (fontToAdjust, otherFontName) {
		var name = _Utils_eq(fontToAdjust, otherFontName) ? fontToAdjust : (otherFontName + (' .' + fontToAdjust));
		return A2(
			$elm$core$String$join,
			' ',
			_List_fromArray(
				[
					A2(
					$mdgriffith$elm_ui$Internal$Model$bracket,
					'.' + (name + ('.' + ($mdgriffith$elm_ui$Internal$Style$classes.h4 + (', ' + ('.' + (name + (' .' + $mdgriffith$elm_ui$Internal$Style$classes.h4))))))),
					_List_fromArray(
						[
							_Utils_Tuple2('line-height', '1')
						])),
					A2(
					$mdgriffith$elm_ui$Internal$Model$bracket,
					'.' + (name + ('.' + ($mdgriffith$elm_ui$Internal$Style$classes.h4 + ('> .' + ($mdgriffith$elm_ui$Internal$Style$classes.ih + (', .' + (name + (' .' + ($mdgriffith$elm_ui$Internal$Style$classes.h4 + (' > .' + $mdgriffith$elm_ui$Internal$Style$classes.ih)))))))))),
					_List_fromArray(
						[
							_Utils_Tuple2('vertical-align', '0'),
							_Utils_Tuple2('line-height', '1')
						]))
				]));
	});
var $mdgriffith$elm_ui$Internal$Model$adjust = F3(
	function (size, height, vertical) {
		return {es: height / size, ca: size, gb: vertical};
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
var $elm$core$List$maximum = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return $elm$core$Maybe$Just(
			A3($elm$core$List$foldl, $elm$core$Basics$max, x, xs));
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $elm$core$List$minimum = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return $elm$core$Maybe$Just(
			A3($elm$core$List$foldl, $elm$core$Basics$min, x, xs));
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $mdgriffith$elm_ui$Internal$Model$convertAdjustment = function (adjustment) {
	var lines = _List_fromArray(
		[adjustment.cp, adjustment.ck, adjustment.cG, adjustment.cZ]);
	var lineHeight = 1.5;
	var normalDescender = (lineHeight - 1) / 2;
	var oldMiddle = lineHeight / 2;
	var descender = A2(
		$elm$core$Maybe$withDefault,
		adjustment.cG,
		$elm$core$List$minimum(lines));
	var newBaseline = A2(
		$elm$core$Maybe$withDefault,
		adjustment.ck,
		$elm$core$List$minimum(
			A2(
				$elm$core$List$filter,
				function (x) {
					return !_Utils_eq(x, descender);
				},
				lines)));
	var base = lineHeight;
	var ascender = A2(
		$elm$core$Maybe$withDefault,
		adjustment.cp,
		$elm$core$List$maximum(lines));
	var capitalSize = 1 / (ascender - newBaseline);
	var capitalVertical = 1 - ascender;
	var fullSize = 1 / (ascender - descender);
	var fullVertical = 1 - ascender;
	var newCapitalMiddle = ((ascender - newBaseline) / 2) + newBaseline;
	var newFullMiddle = ((ascender - descender) / 2) + descender;
	return {
		cp: A3($mdgriffith$elm_ui$Internal$Model$adjust, capitalSize, ascender - newBaseline, capitalVertical),
		ff: A3($mdgriffith$elm_ui$Internal$Model$adjust, fullSize, ascender - descender, fullVertical)
	};
};
var $mdgriffith$elm_ui$Internal$Model$fontAdjustmentRules = function (converted) {
	return _Utils_Tuple2(
		_List_fromArray(
			[
				_Utils_Tuple2('display', 'block')
			]),
		_List_fromArray(
			[
				_Utils_Tuple2('display', 'inline-block'),
				_Utils_Tuple2(
				'line-height',
				$elm$core$String$fromFloat(converted.es)),
				_Utils_Tuple2(
				'vertical-align',
				$elm$core$String$fromFloat(converted.gb) + 'em'),
				_Utils_Tuple2(
				'font-size',
				$elm$core$String$fromFloat(converted.ca) + 'em')
			]));
};
var $mdgriffith$elm_ui$Internal$Model$typefaceAdjustment = function (typefaces) {
	return A3(
		$elm$core$List$foldl,
		F2(
			function (face, found) {
				if (found.$ === 1) {
					if (face.$ === 5) {
						var _with = face.a;
						var _v2 = _with.ci;
						if (_v2.$ === 1) {
							return found;
						} else {
							var adjustment = _v2.a;
							return $elm$core$Maybe$Just(
								_Utils_Tuple2(
									$mdgriffith$elm_ui$Internal$Model$fontAdjustmentRules(
										function ($) {
											return $.ff;
										}(
											$mdgriffith$elm_ui$Internal$Model$convertAdjustment(adjustment))),
									$mdgriffith$elm_ui$Internal$Model$fontAdjustmentRules(
										function ($) {
											return $.cp;
										}(
											$mdgriffith$elm_ui$Internal$Model$convertAdjustment(adjustment)))));
						}
					} else {
						return found;
					}
				} else {
					return found;
				}
			}),
		$elm$core$Maybe$Nothing,
		typefaces);
};
var $mdgriffith$elm_ui$Internal$Model$renderTopLevelValues = function (rules) {
	var withImport = function (font) {
		if (font.$ === 4) {
			var url = font.b;
			return $elm$core$Maybe$Just('@import url(\'' + (url + '\');'));
		} else {
			return $elm$core$Maybe$Nothing;
		}
	};
	var fontImports = function (_v2) {
		var name = _v2.a;
		var typefaces = _v2.b;
		var imports = A2(
			$elm$core$String$join,
			'\n',
			A2($elm$core$List$filterMap, withImport, typefaces));
		return imports;
	};
	var allNames = A2($elm$core$List$map, $elm$core$Tuple$first, rules);
	var fontAdjustments = function (_v1) {
		var name = _v1.a;
		var typefaces = _v1.b;
		var _v0 = $mdgriffith$elm_ui$Internal$Model$typefaceAdjustment(typefaces);
		if (_v0.$ === 1) {
			return A2(
				$elm$core$String$join,
				'',
				A2(
					$elm$core$List$map,
					$mdgriffith$elm_ui$Internal$Model$renderNullAdjustmentRule(name),
					allNames));
		} else {
			var adjustment = _v0.a;
			return A2(
				$elm$core$String$join,
				'',
				A2(
					$elm$core$List$map,
					A2($mdgriffith$elm_ui$Internal$Model$renderFontAdjustmentRule, name, adjustment),
					allNames));
		}
	};
	return _Utils_ap(
		A2(
			$elm$core$String$join,
			'\n',
			A2($elm$core$List$map, fontImports, rules)),
		A2(
			$elm$core$String$join,
			'\n',
			A2($elm$core$List$map, fontAdjustments, rules)));
};
var $mdgriffith$elm_ui$Internal$Model$topLevelValue = function (rule) {
	if (rule.$ === 1) {
		var name = rule.a;
		var typefaces = rule.b;
		return $elm$core$Maybe$Just(
			_Utils_Tuple2(name, typefaces));
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $mdgriffith$elm_ui$Internal$Model$toStyleSheetString = F2(
	function (options, stylesheet) {
		var combine = F2(
			function (style, rendered) {
				return {
					d0: _Utils_ap(
						rendered.d0,
						A3($mdgriffith$elm_ui$Internal$Model$renderStyleRule, options, style, $elm$core$Maybe$Nothing)),
					dq: function () {
						var _v1 = $mdgriffith$elm_ui$Internal$Model$topLevelValue(style);
						if (_v1.$ === 1) {
							return rendered.dq;
						} else {
							var topLevel = _v1.a;
							return A2($elm$core$List$cons, topLevel, rendered.dq);
						}
					}()
				};
			});
		var _v0 = A3(
			$elm$core$List$foldl,
			combine,
			{d0: _List_Nil, dq: _List_Nil},
			stylesheet);
		var rules = _v0.d0;
		var topLevel = _v0.dq;
		return _Utils_ap(
			$mdgriffith$elm_ui$Internal$Model$renderTopLevelValues(topLevel),
			$elm$core$String$concat(rules));
	});
var $mdgriffith$elm_ui$Internal$Model$toStyleSheet = F2(
	function (options, styleSheet) {
		var _v0 = options.dT;
		switch (_v0) {
			case 0:
				return A3(
					$elm$virtual_dom$VirtualDom$node,
					'div',
					_List_Nil,
					_List_fromArray(
						[
							A3(
							$elm$virtual_dom$VirtualDom$node,
							'style',
							_List_Nil,
							_List_fromArray(
								[
									$elm$virtual_dom$VirtualDom$text(
									A2($mdgriffith$elm_ui$Internal$Model$toStyleSheetString, options, styleSheet))
								]))
						]));
			case 1:
				return A3(
					$elm$virtual_dom$VirtualDom$node,
					'div',
					_List_Nil,
					_List_fromArray(
						[
							A3(
							$elm$virtual_dom$VirtualDom$node,
							'style',
							_List_Nil,
							_List_fromArray(
								[
									$elm$virtual_dom$VirtualDom$text(
									A2($mdgriffith$elm_ui$Internal$Model$toStyleSheetString, options, styleSheet))
								]))
						]));
			default:
				return A3(
					$elm$virtual_dom$VirtualDom$node,
					'elm-ui-rules',
					_List_fromArray(
						[
							A2(
							$elm$virtual_dom$VirtualDom$property,
							'rules',
							A2($mdgriffith$elm_ui$Internal$Model$encodeStyles, options, styleSheet))
						]),
					_List_Nil);
		}
	});
var $mdgriffith$elm_ui$Internal$Model$embedKeyed = F4(
	function (_static, opts, styles, children) {
		var dynamicStyleSheet = A2(
			$mdgriffith$elm_ui$Internal$Model$toStyleSheet,
			opts,
			A3(
				$elm$core$List$foldl,
				$mdgriffith$elm_ui$Internal$Model$reduceStyles,
				_Utils_Tuple2(
					$elm$core$Set$empty,
					$mdgriffith$elm_ui$Internal$Model$renderFocusStyle(opts.g8)),
				styles).b);
		return _static ? A2(
			$elm$core$List$cons,
			_Utils_Tuple2(
				'static-stylesheet',
				$mdgriffith$elm_ui$Internal$Model$staticRoot(opts)),
			A2(
				$elm$core$List$cons,
				_Utils_Tuple2('dynamic-stylesheet', dynamicStyleSheet),
				children)) : A2(
			$elm$core$List$cons,
			_Utils_Tuple2('dynamic-stylesheet', dynamicStyleSheet),
			children);
	});
var $mdgriffith$elm_ui$Internal$Model$embedWith = F4(
	function (_static, opts, styles, children) {
		var dynamicStyleSheet = A2(
			$mdgriffith$elm_ui$Internal$Model$toStyleSheet,
			opts,
			A3(
				$elm$core$List$foldl,
				$mdgriffith$elm_ui$Internal$Model$reduceStyles,
				_Utils_Tuple2(
					$elm$core$Set$empty,
					$mdgriffith$elm_ui$Internal$Model$renderFocusStyle(opts.g8)),
				styles).b);
		return _static ? A2(
			$elm$core$List$cons,
			$mdgriffith$elm_ui$Internal$Model$staticRoot(opts),
			A2($elm$core$List$cons, dynamicStyleSheet, children)) : A2($elm$core$List$cons, dynamicStyleSheet, children);
	});
var $mdgriffith$elm_ui$Internal$Flag$heightBetween = $mdgriffith$elm_ui$Internal$Flag$flag(45);
var $mdgriffith$elm_ui$Internal$Flag$heightFill = $mdgriffith$elm_ui$Internal$Flag$flag(37);
var $elm$virtual_dom$VirtualDom$keyedNode = function (tag) {
	return _VirtualDom_keyedNode(
		_VirtualDom_noScript(tag));
};
var $elm$html$Html$p = _VirtualDom_node('p');
var $elm$core$Bitwise$and = _Bitwise_and;
var $mdgriffith$elm_ui$Internal$Flag$present = F2(
	function (myFlag, _v0) {
		var fieldOne = _v0.a;
		var fieldTwo = _v0.b;
		if (!myFlag.$) {
			var first = myFlag.a;
			return _Utils_eq(first & fieldOne, first);
		} else {
			var second = myFlag.a;
			return _Utils_eq(second & fieldTwo, second);
		}
	});
var $elm$html$Html$s = _VirtualDom_node('s');
var $elm$html$Html$u = _VirtualDom_node('u');
var $mdgriffith$elm_ui$Internal$Flag$widthBetween = $mdgriffith$elm_ui$Internal$Flag$flag(44);
var $mdgriffith$elm_ui$Internal$Flag$widthFill = $mdgriffith$elm_ui$Internal$Flag$flag(39);
var $mdgriffith$elm_ui$Internal$Model$finalizeNode = F6(
	function (has, node, attributes, children, embedMode, parentContext) {
		var createNode = F2(
			function (nodeName, attrs) {
				if (children.$ === 1) {
					var keyed = children.a;
					return A3(
						$elm$virtual_dom$VirtualDom$keyedNode,
						nodeName,
						attrs,
						function () {
							switch (embedMode.$) {
								case 0:
									return keyed;
								case 2:
									var opts = embedMode.a;
									var styles = embedMode.b;
									return A4($mdgriffith$elm_ui$Internal$Model$embedKeyed, false, opts, styles, keyed);
								default:
									var opts = embedMode.a;
									var styles = embedMode.b;
									return A4($mdgriffith$elm_ui$Internal$Model$embedKeyed, true, opts, styles, keyed);
							}
						}());
				} else {
					var unkeyed = children.a;
					return A2(
						function () {
							switch (nodeName) {
								case 'div':
									return $elm$html$Html$div;
								case 'p':
									return $elm$html$Html$p;
								default:
									return $elm$virtual_dom$VirtualDom$node(nodeName);
							}
						}(),
						attrs,
						function () {
							switch (embedMode.$) {
								case 0:
									return unkeyed;
								case 2:
									var opts = embedMode.a;
									var styles = embedMode.b;
									return A4($mdgriffith$elm_ui$Internal$Model$embedWith, false, opts, styles, unkeyed);
								default:
									var opts = embedMode.a;
									var styles = embedMode.b;
									return A4($mdgriffith$elm_ui$Internal$Model$embedWith, true, opts, styles, unkeyed);
							}
						}());
				}
			});
		var html = function () {
			switch (node.$) {
				case 0:
					return A2(createNode, 'div', attributes);
				case 1:
					var nodeName = node.a;
					return A2(createNode, nodeName, attributes);
				default:
					var nodeName = node.a;
					var internal = node.b;
					return A3(
						$elm$virtual_dom$VirtualDom$node,
						nodeName,
						attributes,
						_List_fromArray(
							[
								A2(
								createNode,
								internal,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$class($mdgriffith$elm_ui$Internal$Style$classes.gu + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.h3))
									]))
							]));
			}
		}();
		switch (parentContext) {
			case 0:
				return (A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$widthFill, has) && (!A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$widthBetween, has))) ? html : (A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$alignRight, has) ? A2(
					$elm$html$Html$u,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class(
							A2(
								$elm$core$String$join,
								' ',
								_List_fromArray(
									[$mdgriffith$elm_ui$Internal$Style$classes.gu, $mdgriffith$elm_ui$Internal$Style$classes.h3, $mdgriffith$elm_ui$Internal$Style$classes.dG, $mdgriffith$elm_ui$Internal$Style$classes.a$, $mdgriffith$elm_ui$Internal$Style$classes.gq])))
						]),
					_List_fromArray(
						[html])) : (A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$centerX, has) ? A2(
					$elm$html$Html$s,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class(
							A2(
								$elm$core$String$join,
								' ',
								_List_fromArray(
									[$mdgriffith$elm_ui$Internal$Style$classes.gu, $mdgriffith$elm_ui$Internal$Style$classes.h3, $mdgriffith$elm_ui$Internal$Style$classes.dG, $mdgriffith$elm_ui$Internal$Style$classes.a$, $mdgriffith$elm_ui$Internal$Style$classes.go])))
						]),
					_List_fromArray(
						[html])) : html));
			case 1:
				return (A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$heightFill, has) && (!A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$heightBetween, has))) ? html : (A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$centerY, has) ? A2(
					$elm$html$Html$s,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class(
							A2(
								$elm$core$String$join,
								' ',
								_List_fromArray(
									[$mdgriffith$elm_ui$Internal$Style$classes.gu, $mdgriffith$elm_ui$Internal$Style$classes.h3, $mdgriffith$elm_ui$Internal$Style$classes.dG, $mdgriffith$elm_ui$Internal$Style$classes.gp])))
						]),
					_List_fromArray(
						[html])) : (A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$alignBottom, has) ? A2(
					$elm$html$Html$u,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class(
							A2(
								$elm$core$String$join,
								' ',
								_List_fromArray(
									[$mdgriffith$elm_ui$Internal$Style$classes.gu, $mdgriffith$elm_ui$Internal$Style$classes.h3, $mdgriffith$elm_ui$Internal$Style$classes.dG, $mdgriffith$elm_ui$Internal$Style$classes.gn])))
						]),
					_List_fromArray(
						[html])) : html));
			default:
				return html;
		}
	});
var $elm$core$List$isEmpty = function (xs) {
	if (!xs.b) {
		return true;
	} else {
		return false;
	}
};
var $elm$html$Html$text = $elm$virtual_dom$VirtualDom$text;
var $mdgriffith$elm_ui$Internal$Model$textElementClasses = $mdgriffith$elm_ui$Internal$Style$classes.gu + (' ' + ($mdgriffith$elm_ui$Internal$Style$classes.ih + (' ' + ($mdgriffith$elm_ui$Internal$Style$classes.eM + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.et)))));
var $mdgriffith$elm_ui$Internal$Model$textElement = function (str) {
	return A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class($mdgriffith$elm_ui$Internal$Model$textElementClasses)
			]),
		_List_fromArray(
			[
				$elm$html$Html$text(str)
			]));
};
var $mdgriffith$elm_ui$Internal$Model$textElementFillClasses = $mdgriffith$elm_ui$Internal$Style$classes.gu + (' ' + ($mdgriffith$elm_ui$Internal$Style$classes.ih + (' ' + ($mdgriffith$elm_ui$Internal$Style$classes.eN + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.eu)))));
var $mdgriffith$elm_ui$Internal$Model$textElementFill = function (str) {
	return A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class($mdgriffith$elm_ui$Internal$Model$textElementFillClasses)
			]),
		_List_fromArray(
			[
				$elm$html$Html$text(str)
			]));
};
var $mdgriffith$elm_ui$Internal$Model$createElement = F3(
	function (context, children, rendered) {
		var gatherKeyed = F2(
			function (_v8, _v9) {
				var key = _v8.a;
				var child = _v8.b;
				var htmls = _v9.a;
				var existingStyles = _v9.b;
				switch (child.$) {
					case 0:
						var html = child.a;
						return _Utils_eq(context, $mdgriffith$elm_ui$Internal$Model$asParagraph) ? _Utils_Tuple2(
							A2(
								$elm$core$List$cons,
								_Utils_Tuple2(
									key,
									html(context)),
								htmls),
							existingStyles) : _Utils_Tuple2(
							A2(
								$elm$core$List$cons,
								_Utils_Tuple2(
									key,
									html(context)),
								htmls),
							existingStyles);
					case 1:
						var styled = child.a;
						return _Utils_eq(context, $mdgriffith$elm_ui$Internal$Model$asParagraph) ? _Utils_Tuple2(
							A2(
								$elm$core$List$cons,
								_Utils_Tuple2(
									key,
									A2(styled.hh, $mdgriffith$elm_ui$Internal$Model$NoStyleSheet, context)),
								htmls),
							$elm$core$List$isEmpty(existingStyles) ? styled.f5 : _Utils_ap(styled.f5, existingStyles)) : _Utils_Tuple2(
							A2(
								$elm$core$List$cons,
								_Utils_Tuple2(
									key,
									A2(styled.hh, $mdgriffith$elm_ui$Internal$Model$NoStyleSheet, context)),
								htmls),
							$elm$core$List$isEmpty(existingStyles) ? styled.f5 : _Utils_ap(styled.f5, existingStyles));
					case 2:
						var str = child.a;
						return _Utils_Tuple2(
							A2(
								$elm$core$List$cons,
								_Utils_Tuple2(
									key,
									_Utils_eq(context, $mdgriffith$elm_ui$Internal$Model$asEl) ? $mdgriffith$elm_ui$Internal$Model$textElementFill(str) : $mdgriffith$elm_ui$Internal$Model$textElement(str)),
								htmls),
							existingStyles);
					default:
						return _Utils_Tuple2(htmls, existingStyles);
				}
			});
		var gather = F2(
			function (child, _v6) {
				var htmls = _v6.a;
				var existingStyles = _v6.b;
				switch (child.$) {
					case 0:
						var html = child.a;
						return _Utils_eq(context, $mdgriffith$elm_ui$Internal$Model$asParagraph) ? _Utils_Tuple2(
							A2(
								$elm$core$List$cons,
								html(context),
								htmls),
							existingStyles) : _Utils_Tuple2(
							A2(
								$elm$core$List$cons,
								html(context),
								htmls),
							existingStyles);
					case 1:
						var styled = child.a;
						return _Utils_eq(context, $mdgriffith$elm_ui$Internal$Model$asParagraph) ? _Utils_Tuple2(
							A2(
								$elm$core$List$cons,
								A2(styled.hh, $mdgriffith$elm_ui$Internal$Model$NoStyleSheet, context),
								htmls),
							$elm$core$List$isEmpty(existingStyles) ? styled.f5 : _Utils_ap(styled.f5, existingStyles)) : _Utils_Tuple2(
							A2(
								$elm$core$List$cons,
								A2(styled.hh, $mdgriffith$elm_ui$Internal$Model$NoStyleSheet, context),
								htmls),
							$elm$core$List$isEmpty(existingStyles) ? styled.f5 : _Utils_ap(styled.f5, existingStyles));
					case 2:
						var str = child.a;
						return _Utils_Tuple2(
							A2(
								$elm$core$List$cons,
								_Utils_eq(context, $mdgriffith$elm_ui$Internal$Model$asEl) ? $mdgriffith$elm_ui$Internal$Model$textElementFill(str) : $mdgriffith$elm_ui$Internal$Model$textElement(str),
								htmls),
							existingStyles);
					default:
						return _Utils_Tuple2(htmls, existingStyles);
				}
			});
		if (children.$ === 1) {
			var keyedChildren = children.a;
			var _v1 = A3(
				$elm$core$List$foldr,
				gatherKeyed,
				_Utils_Tuple2(_List_Nil, _List_Nil),
				keyedChildren);
			var keyed = _v1.a;
			var styles = _v1.b;
			var newStyles = $elm$core$List$isEmpty(styles) ? rendered.f5 : _Utils_ap(rendered.f5, styles);
			if (!newStyles.b) {
				return $mdgriffith$elm_ui$Internal$Model$Unstyled(
					A5(
						$mdgriffith$elm_ui$Internal$Model$finalizeNode,
						rendered.ax,
						rendered.fF,
						rendered.be,
						$mdgriffith$elm_ui$Internal$Model$Keyed(
							A3($mdgriffith$elm_ui$Internal$Model$addKeyedChildren, 'nearby-element-pls', keyed, rendered.aY)),
						$mdgriffith$elm_ui$Internal$Model$NoStyleSheet));
			} else {
				var allStyles = newStyles;
				return $mdgriffith$elm_ui$Internal$Model$Styled(
					{
						hh: A4(
							$mdgriffith$elm_ui$Internal$Model$finalizeNode,
							rendered.ax,
							rendered.fF,
							rendered.be,
							$mdgriffith$elm_ui$Internal$Model$Keyed(
								A3($mdgriffith$elm_ui$Internal$Model$addKeyedChildren, 'nearby-element-pls', keyed, rendered.aY))),
						f5: allStyles
					});
			}
		} else {
			var unkeyedChildren = children.a;
			var _v3 = A3(
				$elm$core$List$foldr,
				gather,
				_Utils_Tuple2(_List_Nil, _List_Nil),
				unkeyedChildren);
			var unkeyed = _v3.a;
			var styles = _v3.b;
			var newStyles = $elm$core$List$isEmpty(styles) ? rendered.f5 : _Utils_ap(rendered.f5, styles);
			if (!newStyles.b) {
				return $mdgriffith$elm_ui$Internal$Model$Unstyled(
					A5(
						$mdgriffith$elm_ui$Internal$Model$finalizeNode,
						rendered.ax,
						rendered.fF,
						rendered.be,
						$mdgriffith$elm_ui$Internal$Model$Unkeyed(
							A2($mdgriffith$elm_ui$Internal$Model$addChildren, unkeyed, rendered.aY)),
						$mdgriffith$elm_ui$Internal$Model$NoStyleSheet));
			} else {
				var allStyles = newStyles;
				return $mdgriffith$elm_ui$Internal$Model$Styled(
					{
						hh: A4(
							$mdgriffith$elm_ui$Internal$Model$finalizeNode,
							rendered.ax,
							rendered.fF,
							rendered.be,
							$mdgriffith$elm_ui$Internal$Model$Unkeyed(
								A2($mdgriffith$elm_ui$Internal$Model$addChildren, unkeyed, rendered.aY))),
						f5: allStyles
					});
			}
		}
	});
var $mdgriffith$elm_ui$Internal$Model$Single = F3(
	function (a, b, c) {
		return {$: 3, a: a, b: b, c: c};
	});
var $mdgriffith$elm_ui$Internal$Model$Transform = function (a) {
	return {$: 10, a: a};
};
var $mdgriffith$elm_ui$Internal$Flag$Field = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $elm$core$Bitwise$or = _Bitwise_or;
var $mdgriffith$elm_ui$Internal$Flag$add = F2(
	function (myFlag, _v0) {
		var one = _v0.a;
		var two = _v0.b;
		if (!myFlag.$) {
			var first = myFlag.a;
			return A2($mdgriffith$elm_ui$Internal$Flag$Field, first | one, two);
		} else {
			var second = myFlag.a;
			return A2($mdgriffith$elm_ui$Internal$Flag$Field, one, second | two);
		}
	});
var $mdgriffith$elm_ui$Internal$Model$ChildrenBehind = function (a) {
	return {$: 1, a: a};
};
var $mdgriffith$elm_ui$Internal$Model$ChildrenBehindAndInFront = F2(
	function (a, b) {
		return {$: 3, a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Model$ChildrenInFront = function (a) {
	return {$: 2, a: a};
};
var $mdgriffith$elm_ui$Internal$Model$nearbyElement = F2(
	function (location, elem) {
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class(
					function () {
						switch (location) {
							case 0:
								return A2(
									$elm$core$String$join,
									' ',
									_List_fromArray(
										[$mdgriffith$elm_ui$Internal$Style$classes.bX, $mdgriffith$elm_ui$Internal$Style$classes.h3, $mdgriffith$elm_ui$Internal$Style$classes.gi]));
							case 1:
								return A2(
									$elm$core$String$join,
									' ',
									_List_fromArray(
										[$mdgriffith$elm_ui$Internal$Style$classes.bX, $mdgriffith$elm_ui$Internal$Style$classes.h3, $mdgriffith$elm_ui$Internal$Style$classes.gy]));
							case 2:
								return A2(
									$elm$core$String$join,
									' ',
									_List_fromArray(
										[$mdgriffith$elm_ui$Internal$Style$classes.bX, $mdgriffith$elm_ui$Internal$Style$classes.h3, $mdgriffith$elm_ui$Internal$Style$classes.hJ]));
							case 3:
								return A2(
									$elm$core$String$join,
									' ',
									_List_fromArray(
										[$mdgriffith$elm_ui$Internal$Style$classes.bX, $mdgriffith$elm_ui$Internal$Style$classes.h3, $mdgriffith$elm_ui$Internal$Style$classes.hI]));
							case 4:
								return A2(
									$elm$core$String$join,
									' ',
									_List_fromArray(
										[$mdgriffith$elm_ui$Internal$Style$classes.bX, $mdgriffith$elm_ui$Internal$Style$classes.h3, $mdgriffith$elm_ui$Internal$Style$classes.hk]));
							default:
								return A2(
									$elm$core$String$join,
									' ',
									_List_fromArray(
										[$mdgriffith$elm_ui$Internal$Style$classes.bX, $mdgriffith$elm_ui$Internal$Style$classes.h3, $mdgriffith$elm_ui$Internal$Style$classes.gx]));
						}
					}())
				]),
			_List_fromArray(
				[
					function () {
					switch (elem.$) {
						case 3:
							return $elm$virtual_dom$VirtualDom$text('');
						case 2:
							var str = elem.a;
							return $mdgriffith$elm_ui$Internal$Model$textElement(str);
						case 0:
							var html = elem.a;
							return html($mdgriffith$elm_ui$Internal$Model$asEl);
						default:
							var styled = elem.a;
							return A2(styled.hh, $mdgriffith$elm_ui$Internal$Model$NoStyleSheet, $mdgriffith$elm_ui$Internal$Model$asEl);
					}
				}()
				]));
	});
var $mdgriffith$elm_ui$Internal$Model$addNearbyElement = F3(
	function (location, elem, existing) {
		var nearby = A2($mdgriffith$elm_ui$Internal$Model$nearbyElement, location, elem);
		switch (existing.$) {
			case 0:
				if (location === 5) {
					return $mdgriffith$elm_ui$Internal$Model$ChildrenBehind(
						_List_fromArray(
							[nearby]));
				} else {
					return $mdgriffith$elm_ui$Internal$Model$ChildrenInFront(
						_List_fromArray(
							[nearby]));
				}
			case 1:
				var existingBehind = existing.a;
				if (location === 5) {
					return $mdgriffith$elm_ui$Internal$Model$ChildrenBehind(
						A2($elm$core$List$cons, nearby, existingBehind));
				} else {
					return A2(
						$mdgriffith$elm_ui$Internal$Model$ChildrenBehindAndInFront,
						existingBehind,
						_List_fromArray(
							[nearby]));
				}
			case 2:
				var existingInFront = existing.a;
				if (location === 5) {
					return A2(
						$mdgriffith$elm_ui$Internal$Model$ChildrenBehindAndInFront,
						_List_fromArray(
							[nearby]),
						existingInFront);
				} else {
					return $mdgriffith$elm_ui$Internal$Model$ChildrenInFront(
						A2($elm$core$List$cons, nearby, existingInFront));
				}
			default:
				var existingBehind = existing.a;
				var existingInFront = existing.b;
				if (location === 5) {
					return A2(
						$mdgriffith$elm_ui$Internal$Model$ChildrenBehindAndInFront,
						A2($elm$core$List$cons, nearby, existingBehind),
						existingInFront);
				} else {
					return A2(
						$mdgriffith$elm_ui$Internal$Model$ChildrenBehindAndInFront,
						existingBehind,
						A2($elm$core$List$cons, nearby, existingInFront));
				}
		}
	});
var $mdgriffith$elm_ui$Internal$Model$Embedded = F2(
	function (a, b) {
		return {$: 2, a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Model$NodeName = function (a) {
	return {$: 1, a: a};
};
var $mdgriffith$elm_ui$Internal$Model$addNodeName = F2(
	function (newNode, old) {
		switch (old.$) {
			case 0:
				return $mdgriffith$elm_ui$Internal$Model$NodeName(newNode);
			case 1:
				var name = old.a;
				return A2($mdgriffith$elm_ui$Internal$Model$Embedded, name, newNode);
			default:
				var x = old.a;
				var y = old.b;
				return A2($mdgriffith$elm_ui$Internal$Model$Embedded, x, y);
		}
	});
var $mdgriffith$elm_ui$Internal$Model$alignXName = function (align) {
	switch (align) {
		case 0:
			return $mdgriffith$elm_ui$Internal$Style$classes.ec + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.eS);
		case 2:
			return $mdgriffith$elm_ui$Internal$Style$classes.ec + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.eT);
		default:
			return $mdgriffith$elm_ui$Internal$Style$classes.ec + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.gl);
	}
};
var $mdgriffith$elm_ui$Internal$Model$alignYName = function (align) {
	switch (align) {
		case 0:
			return $mdgriffith$elm_ui$Internal$Style$classes.ed + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.gr);
		case 2:
			return $mdgriffith$elm_ui$Internal$Style$classes.ed + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.gk);
		default:
			return $mdgriffith$elm_ui$Internal$Style$classes.ed + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.gm);
	}
};
var $elm$virtual_dom$VirtualDom$attribute = F2(
	function (key, value) {
		return A2(
			_VirtualDom_attribute,
			_VirtualDom_noOnOrFormAction(key),
			_VirtualDom_noJavaScriptOrHtmlUri(value));
	});
var $mdgriffith$elm_ui$Internal$Model$FullTransform = F4(
	function (a, b, c, d) {
		return {$: 2, a: a, b: b, c: c, d: d};
	});
var $mdgriffith$elm_ui$Internal$Model$Moved = function (a) {
	return {$: 1, a: a};
};
var $mdgriffith$elm_ui$Internal$Model$composeTransformation = F2(
	function (transform, component) {
		switch (transform.$) {
			case 0:
				switch (component.$) {
					case 0:
						var x = component.a;
						return $mdgriffith$elm_ui$Internal$Model$Moved(
							_Utils_Tuple3(x, 0, 0));
					case 1:
						var y = component.a;
						return $mdgriffith$elm_ui$Internal$Model$Moved(
							_Utils_Tuple3(0, y, 0));
					case 2:
						var z = component.a;
						return $mdgriffith$elm_ui$Internal$Model$Moved(
							_Utils_Tuple3(0, 0, z));
					case 3:
						var xyz = component.a;
						return $mdgriffith$elm_ui$Internal$Model$Moved(xyz);
					case 4:
						var xyz = component.a;
						var angle = component.b;
						return A4(
							$mdgriffith$elm_ui$Internal$Model$FullTransform,
							_Utils_Tuple3(0, 0, 0),
							_Utils_Tuple3(1, 1, 1),
							xyz,
							angle);
					default:
						var xyz = component.a;
						return A4(
							$mdgriffith$elm_ui$Internal$Model$FullTransform,
							_Utils_Tuple3(0, 0, 0),
							xyz,
							_Utils_Tuple3(0, 0, 1),
							0);
				}
			case 1:
				var moved = transform.a;
				var x = moved.a;
				var y = moved.b;
				var z = moved.c;
				switch (component.$) {
					case 0:
						var newX = component.a;
						return $mdgriffith$elm_ui$Internal$Model$Moved(
							_Utils_Tuple3(newX, y, z));
					case 1:
						var newY = component.a;
						return $mdgriffith$elm_ui$Internal$Model$Moved(
							_Utils_Tuple3(x, newY, z));
					case 2:
						var newZ = component.a;
						return $mdgriffith$elm_ui$Internal$Model$Moved(
							_Utils_Tuple3(x, y, newZ));
					case 3:
						var xyz = component.a;
						return $mdgriffith$elm_ui$Internal$Model$Moved(xyz);
					case 4:
						var xyz = component.a;
						var angle = component.b;
						return A4(
							$mdgriffith$elm_ui$Internal$Model$FullTransform,
							moved,
							_Utils_Tuple3(1, 1, 1),
							xyz,
							angle);
					default:
						var scale = component.a;
						return A4(
							$mdgriffith$elm_ui$Internal$Model$FullTransform,
							moved,
							scale,
							_Utils_Tuple3(0, 0, 1),
							0);
				}
			default:
				var moved = transform.a;
				var x = moved.a;
				var y = moved.b;
				var z = moved.c;
				var scaled = transform.b;
				var origin = transform.c;
				var angle = transform.d;
				switch (component.$) {
					case 0:
						var newX = component.a;
						return A4(
							$mdgriffith$elm_ui$Internal$Model$FullTransform,
							_Utils_Tuple3(newX, y, z),
							scaled,
							origin,
							angle);
					case 1:
						var newY = component.a;
						return A4(
							$mdgriffith$elm_ui$Internal$Model$FullTransform,
							_Utils_Tuple3(x, newY, z),
							scaled,
							origin,
							angle);
					case 2:
						var newZ = component.a;
						return A4(
							$mdgriffith$elm_ui$Internal$Model$FullTransform,
							_Utils_Tuple3(x, y, newZ),
							scaled,
							origin,
							angle);
					case 3:
						var newMove = component.a;
						return A4($mdgriffith$elm_ui$Internal$Model$FullTransform, newMove, scaled, origin, angle);
					case 4:
						var newOrigin = component.a;
						var newAngle = component.b;
						return A4($mdgriffith$elm_ui$Internal$Model$FullTransform, moved, scaled, newOrigin, newAngle);
					default:
						var newScale = component.a;
						return A4($mdgriffith$elm_ui$Internal$Model$FullTransform, moved, newScale, origin, angle);
				}
		}
	});
var $mdgriffith$elm_ui$Internal$Flag$height = $mdgriffith$elm_ui$Internal$Flag$flag(7);
var $mdgriffith$elm_ui$Internal$Flag$heightContent = $mdgriffith$elm_ui$Internal$Flag$flag(36);
var $mdgriffith$elm_ui$Internal$Flag$merge = F2(
	function (_v0, _v1) {
		var one = _v0.a;
		var two = _v0.b;
		var three = _v1.a;
		var four = _v1.b;
		return A2($mdgriffith$elm_ui$Internal$Flag$Field, one | three, two | four);
	});
var $mdgriffith$elm_ui$Internal$Flag$none = A2($mdgriffith$elm_ui$Internal$Flag$Field, 0, 0);
var $mdgriffith$elm_ui$Internal$Model$renderHeight = function (h) {
	switch (h.$) {
		case 0:
			var px = h.a;
			var val = $elm$core$String$fromInt(px);
			var name = 'height-px-' + val;
			return _Utils_Tuple3(
				$mdgriffith$elm_ui$Internal$Flag$none,
				$mdgriffith$elm_ui$Internal$Style$classes.fj + (' ' + name),
				_List_fromArray(
					[
						A3($mdgriffith$elm_ui$Internal$Model$Single, name, 'height', val + 'px')
					]));
		case 1:
			return _Utils_Tuple3(
				A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$heightContent, $mdgriffith$elm_ui$Internal$Flag$none),
				$mdgriffith$elm_ui$Internal$Style$classes.et,
				_List_Nil);
		case 2:
			var portion = h.a;
			return (portion === 1) ? _Utils_Tuple3(
				A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$heightFill, $mdgriffith$elm_ui$Internal$Flag$none),
				$mdgriffith$elm_ui$Internal$Style$classes.eu,
				_List_Nil) : _Utils_Tuple3(
				A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$heightFill, $mdgriffith$elm_ui$Internal$Flag$none),
				$mdgriffith$elm_ui$Internal$Style$classes.fk + (' height-fill-' + $elm$core$String$fromInt(portion)),
				_List_fromArray(
					[
						A3(
						$mdgriffith$elm_ui$Internal$Model$Single,
						$mdgriffith$elm_ui$Internal$Style$classes.gu + ('.' + ($mdgriffith$elm_ui$Internal$Style$classes.bC + (' > ' + $mdgriffith$elm_ui$Internal$Style$dot(
							'height-fill-' + $elm$core$String$fromInt(portion))))),
						'flex-grow',
						$elm$core$String$fromInt(portion * 100000))
					]));
		case 3:
			var minSize = h.a;
			var len = h.b;
			var cls = 'min-height-' + $elm$core$String$fromInt(minSize);
			var style = A3(
				$mdgriffith$elm_ui$Internal$Model$Single,
				cls,
				'min-height',
				$elm$core$String$fromInt(minSize) + 'px !important');
			var _v1 = $mdgriffith$elm_ui$Internal$Model$renderHeight(len);
			var newFlag = _v1.a;
			var newAttrs = _v1.b;
			var newStyle = _v1.c;
			return _Utils_Tuple3(
				A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$heightBetween, newFlag),
				cls + (' ' + newAttrs),
				A2($elm$core$List$cons, style, newStyle));
		default:
			var maxSize = h.a;
			var len = h.b;
			var cls = 'max-height-' + $elm$core$String$fromInt(maxSize);
			var style = A3(
				$mdgriffith$elm_ui$Internal$Model$Single,
				cls,
				'max-height',
				$elm$core$String$fromInt(maxSize) + 'px');
			var _v2 = $mdgriffith$elm_ui$Internal$Model$renderHeight(len);
			var newFlag = _v2.a;
			var newAttrs = _v2.b;
			var newStyle = _v2.c;
			return _Utils_Tuple3(
				A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$heightBetween, newFlag),
				cls + (' ' + newAttrs),
				A2($elm$core$List$cons, style, newStyle));
	}
};
var $mdgriffith$elm_ui$Internal$Flag$widthContent = $mdgriffith$elm_ui$Internal$Flag$flag(38);
var $mdgriffith$elm_ui$Internal$Model$renderWidth = function (w) {
	switch (w.$) {
		case 0:
			var px = w.a;
			return _Utils_Tuple3(
				$mdgriffith$elm_ui$Internal$Flag$none,
				$mdgriffith$elm_ui$Internal$Style$classes.gd + (' width-px-' + $elm$core$String$fromInt(px)),
				_List_fromArray(
					[
						A3(
						$mdgriffith$elm_ui$Internal$Model$Single,
						'width-px-' + $elm$core$String$fromInt(px),
						'width',
						$elm$core$String$fromInt(px) + 'px')
					]));
		case 1:
			return _Utils_Tuple3(
				A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$widthContent, $mdgriffith$elm_ui$Internal$Flag$none),
				$mdgriffith$elm_ui$Internal$Style$classes.eM,
				_List_Nil);
		case 2:
			var portion = w.a;
			return (portion === 1) ? _Utils_Tuple3(
				A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$widthFill, $mdgriffith$elm_ui$Internal$Flag$none),
				$mdgriffith$elm_ui$Internal$Style$classes.eN,
				_List_Nil) : _Utils_Tuple3(
				A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$widthFill, $mdgriffith$elm_ui$Internal$Flag$none),
				$mdgriffith$elm_ui$Internal$Style$classes.ge + (' width-fill-' + $elm$core$String$fromInt(portion)),
				_List_fromArray(
					[
						A3(
						$mdgriffith$elm_ui$Internal$Model$Single,
						$mdgriffith$elm_ui$Internal$Style$classes.gu + ('.' + ($mdgriffith$elm_ui$Internal$Style$classes.eF + (' > ' + $mdgriffith$elm_ui$Internal$Style$dot(
							'width-fill-' + $elm$core$String$fromInt(portion))))),
						'flex-grow',
						$elm$core$String$fromInt(portion * 100000))
					]));
		case 3:
			var minSize = w.a;
			var len = w.b;
			var cls = 'min-width-' + $elm$core$String$fromInt(minSize);
			var style = A3(
				$mdgriffith$elm_ui$Internal$Model$Single,
				cls,
				'min-width',
				$elm$core$String$fromInt(minSize) + 'px');
			var _v1 = $mdgriffith$elm_ui$Internal$Model$renderWidth(len);
			var newFlag = _v1.a;
			var newAttrs = _v1.b;
			var newStyle = _v1.c;
			return _Utils_Tuple3(
				A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$widthBetween, newFlag),
				cls + (' ' + newAttrs),
				A2($elm$core$List$cons, style, newStyle));
		default:
			var maxSize = w.a;
			var len = w.b;
			var cls = 'max-width-' + $elm$core$String$fromInt(maxSize);
			var style = A3(
				$mdgriffith$elm_ui$Internal$Model$Single,
				cls,
				'max-width',
				$elm$core$String$fromInt(maxSize) + 'px');
			var _v2 = $mdgriffith$elm_ui$Internal$Model$renderWidth(len);
			var newFlag = _v2.a;
			var newAttrs = _v2.b;
			var newStyle = _v2.c;
			return _Utils_Tuple3(
				A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$widthBetween, newFlag),
				cls + (' ' + newAttrs),
				A2($elm$core$List$cons, style, newStyle));
	}
};
var $mdgriffith$elm_ui$Internal$Flag$borderWidth = $mdgriffith$elm_ui$Internal$Flag$flag(27);
var $mdgriffith$elm_ui$Internal$Model$skippable = F2(
	function (flag, style) {
		if (_Utils_eq(flag, $mdgriffith$elm_ui$Internal$Flag$borderWidth)) {
			if (style.$ === 3) {
				var val = style.c;
				switch (val) {
					case '0px':
						return true;
					case '1px':
						return true;
					case '2px':
						return true;
					case '3px':
						return true;
					case '4px':
						return true;
					case '5px':
						return true;
					case '6px':
						return true;
					default:
						return false;
				}
			} else {
				return false;
			}
		} else {
			switch (style.$) {
				case 2:
					var i = style.a;
					return (i >= 8) && (i <= 32);
				case 7:
					var name = style.a;
					var t = style.b;
					var r = style.c;
					var b = style.d;
					var l = style.e;
					return _Utils_eq(t, b) && (_Utils_eq(t, r) && (_Utils_eq(t, l) && ((t >= 0) && (t <= 24))));
				default:
					return false;
			}
		}
	});
var $mdgriffith$elm_ui$Internal$Flag$width = $mdgriffith$elm_ui$Internal$Flag$flag(6);
var $mdgriffith$elm_ui$Internal$Flag$xAlign = $mdgriffith$elm_ui$Internal$Flag$flag(30);
var $mdgriffith$elm_ui$Internal$Flag$yAlign = $mdgriffith$elm_ui$Internal$Flag$flag(29);
var $mdgriffith$elm_ui$Internal$Model$gatherAttrRecursive = F8(
	function (classes, node, has, transform, styles, attrs, children, elementAttrs) {
		gatherAttrRecursive:
		while (true) {
			if (!elementAttrs.b) {
				var _v1 = $mdgriffith$elm_ui$Internal$Model$transformClass(transform);
				if (_v1.$ === 1) {
					return {
						be: A2(
							$elm$core$List$cons,
							$elm$html$Html$Attributes$class(classes),
							attrs),
						aY: children,
						ax: has,
						fF: node,
						f5: styles
					};
				} else {
					var _class = _v1.a;
					return {
						be: A2(
							$elm$core$List$cons,
							$elm$html$Html$Attributes$class(classes + (' ' + _class)),
							attrs),
						aY: children,
						ax: has,
						fF: node,
						f5: A2(
							$elm$core$List$cons,
							$mdgriffith$elm_ui$Internal$Model$Transform(transform),
							styles)
					};
				}
			} else {
				var attribute = elementAttrs.a;
				var remaining = elementAttrs.b;
				switch (attribute.$) {
					case 0:
						var $temp$classes = classes,
							$temp$node = node,
							$temp$has = has,
							$temp$transform = transform,
							$temp$styles = styles,
							$temp$attrs = attrs,
							$temp$children = children,
							$temp$elementAttrs = remaining;
						classes = $temp$classes;
						node = $temp$node;
						has = $temp$has;
						transform = $temp$transform;
						styles = $temp$styles;
						attrs = $temp$attrs;
						children = $temp$children;
						elementAttrs = $temp$elementAttrs;
						continue gatherAttrRecursive;
					case 3:
						var flag = attribute.a;
						var exactClassName = attribute.b;
						if (A2($mdgriffith$elm_ui$Internal$Flag$present, flag, has)) {
							var $temp$classes = classes,
								$temp$node = node,
								$temp$has = has,
								$temp$transform = transform,
								$temp$styles = styles,
								$temp$attrs = attrs,
								$temp$children = children,
								$temp$elementAttrs = remaining;
							classes = $temp$classes;
							node = $temp$node;
							has = $temp$has;
							transform = $temp$transform;
							styles = $temp$styles;
							attrs = $temp$attrs;
							children = $temp$children;
							elementAttrs = $temp$elementAttrs;
							continue gatherAttrRecursive;
						} else {
							var $temp$classes = exactClassName + (' ' + classes),
								$temp$node = node,
								$temp$has = A2($mdgriffith$elm_ui$Internal$Flag$add, flag, has),
								$temp$transform = transform,
								$temp$styles = styles,
								$temp$attrs = attrs,
								$temp$children = children,
								$temp$elementAttrs = remaining;
							classes = $temp$classes;
							node = $temp$node;
							has = $temp$has;
							transform = $temp$transform;
							styles = $temp$styles;
							attrs = $temp$attrs;
							children = $temp$children;
							elementAttrs = $temp$elementAttrs;
							continue gatherAttrRecursive;
						}
					case 1:
						var actualAttribute = attribute.a;
						var $temp$classes = classes,
							$temp$node = node,
							$temp$has = has,
							$temp$transform = transform,
							$temp$styles = styles,
							$temp$attrs = A2($elm$core$List$cons, actualAttribute, attrs),
							$temp$children = children,
							$temp$elementAttrs = remaining;
						classes = $temp$classes;
						node = $temp$node;
						has = $temp$has;
						transform = $temp$transform;
						styles = $temp$styles;
						attrs = $temp$attrs;
						children = $temp$children;
						elementAttrs = $temp$elementAttrs;
						continue gatherAttrRecursive;
					case 4:
						var flag = attribute.a;
						var style = attribute.b;
						if (A2($mdgriffith$elm_ui$Internal$Flag$present, flag, has)) {
							var $temp$classes = classes,
								$temp$node = node,
								$temp$has = has,
								$temp$transform = transform,
								$temp$styles = styles,
								$temp$attrs = attrs,
								$temp$children = children,
								$temp$elementAttrs = remaining;
							classes = $temp$classes;
							node = $temp$node;
							has = $temp$has;
							transform = $temp$transform;
							styles = $temp$styles;
							attrs = $temp$attrs;
							children = $temp$children;
							elementAttrs = $temp$elementAttrs;
							continue gatherAttrRecursive;
						} else {
							if (A2($mdgriffith$elm_ui$Internal$Model$skippable, flag, style)) {
								var $temp$classes = $mdgriffith$elm_ui$Internal$Model$getStyleName(style) + (' ' + classes),
									$temp$node = node,
									$temp$has = A2($mdgriffith$elm_ui$Internal$Flag$add, flag, has),
									$temp$transform = transform,
									$temp$styles = styles,
									$temp$attrs = attrs,
									$temp$children = children,
									$temp$elementAttrs = remaining;
								classes = $temp$classes;
								node = $temp$node;
								has = $temp$has;
								transform = $temp$transform;
								styles = $temp$styles;
								attrs = $temp$attrs;
								children = $temp$children;
								elementAttrs = $temp$elementAttrs;
								continue gatherAttrRecursive;
							} else {
								var $temp$classes = $mdgriffith$elm_ui$Internal$Model$getStyleName(style) + (' ' + classes),
									$temp$node = node,
									$temp$has = A2($mdgriffith$elm_ui$Internal$Flag$add, flag, has),
									$temp$transform = transform,
									$temp$styles = A2($elm$core$List$cons, style, styles),
									$temp$attrs = attrs,
									$temp$children = children,
									$temp$elementAttrs = remaining;
								classes = $temp$classes;
								node = $temp$node;
								has = $temp$has;
								transform = $temp$transform;
								styles = $temp$styles;
								attrs = $temp$attrs;
								children = $temp$children;
								elementAttrs = $temp$elementAttrs;
								continue gatherAttrRecursive;
							}
						}
					case 10:
						var flag = attribute.a;
						var component = attribute.b;
						var $temp$classes = classes,
							$temp$node = node,
							$temp$has = A2($mdgriffith$elm_ui$Internal$Flag$add, flag, has),
							$temp$transform = A2($mdgriffith$elm_ui$Internal$Model$composeTransformation, transform, component),
							$temp$styles = styles,
							$temp$attrs = attrs,
							$temp$children = children,
							$temp$elementAttrs = remaining;
						classes = $temp$classes;
						node = $temp$node;
						has = $temp$has;
						transform = $temp$transform;
						styles = $temp$styles;
						attrs = $temp$attrs;
						children = $temp$children;
						elementAttrs = $temp$elementAttrs;
						continue gatherAttrRecursive;
					case 7:
						var width = attribute.a;
						if (A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$width, has)) {
							var $temp$classes = classes,
								$temp$node = node,
								$temp$has = has,
								$temp$transform = transform,
								$temp$styles = styles,
								$temp$attrs = attrs,
								$temp$children = children,
								$temp$elementAttrs = remaining;
							classes = $temp$classes;
							node = $temp$node;
							has = $temp$has;
							transform = $temp$transform;
							styles = $temp$styles;
							attrs = $temp$attrs;
							children = $temp$children;
							elementAttrs = $temp$elementAttrs;
							continue gatherAttrRecursive;
						} else {
							switch (width.$) {
								case 0:
									var px = width.a;
									var $temp$classes = ($mdgriffith$elm_ui$Internal$Style$classes.gd + (' width-px-' + $elm$core$String$fromInt(px))) + (' ' + classes),
										$temp$node = node,
										$temp$has = A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$width, has),
										$temp$transform = transform,
										$temp$styles = A2(
										$elm$core$List$cons,
										A3(
											$mdgriffith$elm_ui$Internal$Model$Single,
											'width-px-' + $elm$core$String$fromInt(px),
											'width',
											$elm$core$String$fromInt(px) + 'px'),
										styles),
										$temp$attrs = attrs,
										$temp$children = children,
										$temp$elementAttrs = remaining;
									classes = $temp$classes;
									node = $temp$node;
									has = $temp$has;
									transform = $temp$transform;
									styles = $temp$styles;
									attrs = $temp$attrs;
									children = $temp$children;
									elementAttrs = $temp$elementAttrs;
									continue gatherAttrRecursive;
								case 1:
									var $temp$classes = classes + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.eM),
										$temp$node = node,
										$temp$has = A2(
										$mdgriffith$elm_ui$Internal$Flag$add,
										$mdgriffith$elm_ui$Internal$Flag$widthContent,
										A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$width, has)),
										$temp$transform = transform,
										$temp$styles = styles,
										$temp$attrs = attrs,
										$temp$children = children,
										$temp$elementAttrs = remaining;
									classes = $temp$classes;
									node = $temp$node;
									has = $temp$has;
									transform = $temp$transform;
									styles = $temp$styles;
									attrs = $temp$attrs;
									children = $temp$children;
									elementAttrs = $temp$elementAttrs;
									continue gatherAttrRecursive;
								case 2:
									var portion = width.a;
									if (portion === 1) {
										var $temp$classes = classes + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.eN),
											$temp$node = node,
											$temp$has = A2(
											$mdgriffith$elm_ui$Internal$Flag$add,
											$mdgriffith$elm_ui$Internal$Flag$widthFill,
											A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$width, has)),
											$temp$transform = transform,
											$temp$styles = styles,
											$temp$attrs = attrs,
											$temp$children = children,
											$temp$elementAttrs = remaining;
										classes = $temp$classes;
										node = $temp$node;
										has = $temp$has;
										transform = $temp$transform;
										styles = $temp$styles;
										attrs = $temp$attrs;
										children = $temp$children;
										elementAttrs = $temp$elementAttrs;
										continue gatherAttrRecursive;
									} else {
										var $temp$classes = classes + (' ' + ($mdgriffith$elm_ui$Internal$Style$classes.ge + (' width-fill-' + $elm$core$String$fromInt(portion)))),
											$temp$node = node,
											$temp$has = A2(
											$mdgriffith$elm_ui$Internal$Flag$add,
											$mdgriffith$elm_ui$Internal$Flag$widthFill,
											A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$width, has)),
											$temp$transform = transform,
											$temp$styles = A2(
											$elm$core$List$cons,
											A3(
												$mdgriffith$elm_ui$Internal$Model$Single,
												$mdgriffith$elm_ui$Internal$Style$classes.gu + ('.' + ($mdgriffith$elm_ui$Internal$Style$classes.eF + (' > ' + $mdgriffith$elm_ui$Internal$Style$dot(
													'width-fill-' + $elm$core$String$fromInt(portion))))),
												'flex-grow',
												$elm$core$String$fromInt(portion * 100000)),
											styles),
											$temp$attrs = attrs,
											$temp$children = children,
											$temp$elementAttrs = remaining;
										classes = $temp$classes;
										node = $temp$node;
										has = $temp$has;
										transform = $temp$transform;
										styles = $temp$styles;
										attrs = $temp$attrs;
										children = $temp$children;
										elementAttrs = $temp$elementAttrs;
										continue gatherAttrRecursive;
									}
								default:
									var _v4 = $mdgriffith$elm_ui$Internal$Model$renderWidth(width);
									var addToFlags = _v4.a;
									var newClass = _v4.b;
									var newStyles = _v4.c;
									var $temp$classes = classes + (' ' + newClass),
										$temp$node = node,
										$temp$has = A2(
										$mdgriffith$elm_ui$Internal$Flag$merge,
										addToFlags,
										A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$width, has)),
										$temp$transform = transform,
										$temp$styles = _Utils_ap(newStyles, styles),
										$temp$attrs = attrs,
										$temp$children = children,
										$temp$elementAttrs = remaining;
									classes = $temp$classes;
									node = $temp$node;
									has = $temp$has;
									transform = $temp$transform;
									styles = $temp$styles;
									attrs = $temp$attrs;
									children = $temp$children;
									elementAttrs = $temp$elementAttrs;
									continue gatherAttrRecursive;
							}
						}
					case 8:
						var height = attribute.a;
						if (A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$height, has)) {
							var $temp$classes = classes,
								$temp$node = node,
								$temp$has = has,
								$temp$transform = transform,
								$temp$styles = styles,
								$temp$attrs = attrs,
								$temp$children = children,
								$temp$elementAttrs = remaining;
							classes = $temp$classes;
							node = $temp$node;
							has = $temp$has;
							transform = $temp$transform;
							styles = $temp$styles;
							attrs = $temp$attrs;
							children = $temp$children;
							elementAttrs = $temp$elementAttrs;
							continue gatherAttrRecursive;
						} else {
							switch (height.$) {
								case 0:
									var px = height.a;
									var val = $elm$core$String$fromInt(px) + 'px';
									var name = 'height-px-' + val;
									var $temp$classes = $mdgriffith$elm_ui$Internal$Style$classes.fj + (' ' + (name + (' ' + classes))),
										$temp$node = node,
										$temp$has = A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$height, has),
										$temp$transform = transform,
										$temp$styles = A2(
										$elm$core$List$cons,
										A3($mdgriffith$elm_ui$Internal$Model$Single, name, 'height ', val),
										styles),
										$temp$attrs = attrs,
										$temp$children = children,
										$temp$elementAttrs = remaining;
									classes = $temp$classes;
									node = $temp$node;
									has = $temp$has;
									transform = $temp$transform;
									styles = $temp$styles;
									attrs = $temp$attrs;
									children = $temp$children;
									elementAttrs = $temp$elementAttrs;
									continue gatherAttrRecursive;
								case 1:
									var $temp$classes = $mdgriffith$elm_ui$Internal$Style$classes.et + (' ' + classes),
										$temp$node = node,
										$temp$has = A2(
										$mdgriffith$elm_ui$Internal$Flag$add,
										$mdgriffith$elm_ui$Internal$Flag$heightContent,
										A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$height, has)),
										$temp$transform = transform,
										$temp$styles = styles,
										$temp$attrs = attrs,
										$temp$children = children,
										$temp$elementAttrs = remaining;
									classes = $temp$classes;
									node = $temp$node;
									has = $temp$has;
									transform = $temp$transform;
									styles = $temp$styles;
									attrs = $temp$attrs;
									children = $temp$children;
									elementAttrs = $temp$elementAttrs;
									continue gatherAttrRecursive;
								case 2:
									var portion = height.a;
									if (portion === 1) {
										var $temp$classes = $mdgriffith$elm_ui$Internal$Style$classes.eu + (' ' + classes),
											$temp$node = node,
											$temp$has = A2(
											$mdgriffith$elm_ui$Internal$Flag$add,
											$mdgriffith$elm_ui$Internal$Flag$heightFill,
											A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$height, has)),
											$temp$transform = transform,
											$temp$styles = styles,
											$temp$attrs = attrs,
											$temp$children = children,
											$temp$elementAttrs = remaining;
										classes = $temp$classes;
										node = $temp$node;
										has = $temp$has;
										transform = $temp$transform;
										styles = $temp$styles;
										attrs = $temp$attrs;
										children = $temp$children;
										elementAttrs = $temp$elementAttrs;
										continue gatherAttrRecursive;
									} else {
										var $temp$classes = classes + (' ' + ($mdgriffith$elm_ui$Internal$Style$classes.fk + (' height-fill-' + $elm$core$String$fromInt(portion)))),
											$temp$node = node,
											$temp$has = A2(
											$mdgriffith$elm_ui$Internal$Flag$add,
											$mdgriffith$elm_ui$Internal$Flag$heightFill,
											A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$height, has)),
											$temp$transform = transform,
											$temp$styles = A2(
											$elm$core$List$cons,
											A3(
												$mdgriffith$elm_ui$Internal$Model$Single,
												$mdgriffith$elm_ui$Internal$Style$classes.gu + ('.' + ($mdgriffith$elm_ui$Internal$Style$classes.bC + (' > ' + $mdgriffith$elm_ui$Internal$Style$dot(
													'height-fill-' + $elm$core$String$fromInt(portion))))),
												'flex-grow',
												$elm$core$String$fromInt(portion * 100000)),
											styles),
											$temp$attrs = attrs,
											$temp$children = children,
											$temp$elementAttrs = remaining;
										classes = $temp$classes;
										node = $temp$node;
										has = $temp$has;
										transform = $temp$transform;
										styles = $temp$styles;
										attrs = $temp$attrs;
										children = $temp$children;
										elementAttrs = $temp$elementAttrs;
										continue gatherAttrRecursive;
									}
								default:
									var _v6 = $mdgriffith$elm_ui$Internal$Model$renderHeight(height);
									var addToFlags = _v6.a;
									var newClass = _v6.b;
									var newStyles = _v6.c;
									var $temp$classes = classes + (' ' + newClass),
										$temp$node = node,
										$temp$has = A2(
										$mdgriffith$elm_ui$Internal$Flag$merge,
										addToFlags,
										A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$height, has)),
										$temp$transform = transform,
										$temp$styles = _Utils_ap(newStyles, styles),
										$temp$attrs = attrs,
										$temp$children = children,
										$temp$elementAttrs = remaining;
									classes = $temp$classes;
									node = $temp$node;
									has = $temp$has;
									transform = $temp$transform;
									styles = $temp$styles;
									attrs = $temp$attrs;
									children = $temp$children;
									elementAttrs = $temp$elementAttrs;
									continue gatherAttrRecursive;
							}
						}
					case 2:
						var description = attribute.a;
						switch (description.$) {
							case 0:
								var $temp$classes = classes,
									$temp$node = A2($mdgriffith$elm_ui$Internal$Model$addNodeName, 'main', node),
									$temp$has = has,
									$temp$transform = transform,
									$temp$styles = styles,
									$temp$attrs = attrs,
									$temp$children = children,
									$temp$elementAttrs = remaining;
								classes = $temp$classes;
								node = $temp$node;
								has = $temp$has;
								transform = $temp$transform;
								styles = $temp$styles;
								attrs = $temp$attrs;
								children = $temp$children;
								elementAttrs = $temp$elementAttrs;
								continue gatherAttrRecursive;
							case 1:
								var $temp$classes = classes,
									$temp$node = A2($mdgriffith$elm_ui$Internal$Model$addNodeName, 'nav', node),
									$temp$has = has,
									$temp$transform = transform,
									$temp$styles = styles,
									$temp$attrs = attrs,
									$temp$children = children,
									$temp$elementAttrs = remaining;
								classes = $temp$classes;
								node = $temp$node;
								has = $temp$has;
								transform = $temp$transform;
								styles = $temp$styles;
								attrs = $temp$attrs;
								children = $temp$children;
								elementAttrs = $temp$elementAttrs;
								continue gatherAttrRecursive;
							case 2:
								var $temp$classes = classes,
									$temp$node = A2($mdgriffith$elm_ui$Internal$Model$addNodeName, 'footer', node),
									$temp$has = has,
									$temp$transform = transform,
									$temp$styles = styles,
									$temp$attrs = attrs,
									$temp$children = children,
									$temp$elementAttrs = remaining;
								classes = $temp$classes;
								node = $temp$node;
								has = $temp$has;
								transform = $temp$transform;
								styles = $temp$styles;
								attrs = $temp$attrs;
								children = $temp$children;
								elementAttrs = $temp$elementAttrs;
								continue gatherAttrRecursive;
							case 3:
								var $temp$classes = classes,
									$temp$node = A2($mdgriffith$elm_ui$Internal$Model$addNodeName, 'aside', node),
									$temp$has = has,
									$temp$transform = transform,
									$temp$styles = styles,
									$temp$attrs = attrs,
									$temp$children = children,
									$temp$elementAttrs = remaining;
								classes = $temp$classes;
								node = $temp$node;
								has = $temp$has;
								transform = $temp$transform;
								styles = $temp$styles;
								attrs = $temp$attrs;
								children = $temp$children;
								elementAttrs = $temp$elementAttrs;
								continue gatherAttrRecursive;
							case 4:
								var i = description.a;
								if (i <= 1) {
									var $temp$classes = classes,
										$temp$node = A2($mdgriffith$elm_ui$Internal$Model$addNodeName, 'h1', node),
										$temp$has = has,
										$temp$transform = transform,
										$temp$styles = styles,
										$temp$attrs = attrs,
										$temp$children = children,
										$temp$elementAttrs = remaining;
									classes = $temp$classes;
									node = $temp$node;
									has = $temp$has;
									transform = $temp$transform;
									styles = $temp$styles;
									attrs = $temp$attrs;
									children = $temp$children;
									elementAttrs = $temp$elementAttrs;
									continue gatherAttrRecursive;
								} else {
									if (i < 7) {
										var $temp$classes = classes,
											$temp$node = A2(
											$mdgriffith$elm_ui$Internal$Model$addNodeName,
											'h' + $elm$core$String$fromInt(i),
											node),
											$temp$has = has,
											$temp$transform = transform,
											$temp$styles = styles,
											$temp$attrs = attrs,
											$temp$children = children,
											$temp$elementAttrs = remaining;
										classes = $temp$classes;
										node = $temp$node;
										has = $temp$has;
										transform = $temp$transform;
										styles = $temp$styles;
										attrs = $temp$attrs;
										children = $temp$children;
										elementAttrs = $temp$elementAttrs;
										continue gatherAttrRecursive;
									} else {
										var $temp$classes = classes,
											$temp$node = A2($mdgriffith$elm_ui$Internal$Model$addNodeName, 'h6', node),
											$temp$has = has,
											$temp$transform = transform,
											$temp$styles = styles,
											$temp$attrs = attrs,
											$temp$children = children,
											$temp$elementAttrs = remaining;
										classes = $temp$classes;
										node = $temp$node;
										has = $temp$has;
										transform = $temp$transform;
										styles = $temp$styles;
										attrs = $temp$attrs;
										children = $temp$children;
										elementAttrs = $temp$elementAttrs;
										continue gatherAttrRecursive;
									}
								}
							case 9:
								var $temp$classes = classes,
									$temp$node = node,
									$temp$has = has,
									$temp$transform = transform,
									$temp$styles = styles,
									$temp$attrs = attrs,
									$temp$children = children,
									$temp$elementAttrs = remaining;
								classes = $temp$classes;
								node = $temp$node;
								has = $temp$has;
								transform = $temp$transform;
								styles = $temp$styles;
								attrs = $temp$attrs;
								children = $temp$children;
								elementAttrs = $temp$elementAttrs;
								continue gatherAttrRecursive;
							case 8:
								var $temp$classes = classes,
									$temp$node = node,
									$temp$has = has,
									$temp$transform = transform,
									$temp$styles = styles,
									$temp$attrs = A2(
									$elm$core$List$cons,
									A2($elm$virtual_dom$VirtualDom$attribute, 'role', 'button'),
									attrs),
									$temp$children = children,
									$temp$elementAttrs = remaining;
								classes = $temp$classes;
								node = $temp$node;
								has = $temp$has;
								transform = $temp$transform;
								styles = $temp$styles;
								attrs = $temp$attrs;
								children = $temp$children;
								elementAttrs = $temp$elementAttrs;
								continue gatherAttrRecursive;
							case 5:
								var label = description.a;
								var $temp$classes = classes,
									$temp$node = node,
									$temp$has = has,
									$temp$transform = transform,
									$temp$styles = styles,
									$temp$attrs = A2(
									$elm$core$List$cons,
									A2($elm$virtual_dom$VirtualDom$attribute, 'aria-label', label),
									attrs),
									$temp$children = children,
									$temp$elementAttrs = remaining;
								classes = $temp$classes;
								node = $temp$node;
								has = $temp$has;
								transform = $temp$transform;
								styles = $temp$styles;
								attrs = $temp$attrs;
								children = $temp$children;
								elementAttrs = $temp$elementAttrs;
								continue gatherAttrRecursive;
							case 6:
								var $temp$classes = classes,
									$temp$node = node,
									$temp$has = has,
									$temp$transform = transform,
									$temp$styles = styles,
									$temp$attrs = A2(
									$elm$core$List$cons,
									A2($elm$virtual_dom$VirtualDom$attribute, 'aria-live', 'polite'),
									attrs),
									$temp$children = children,
									$temp$elementAttrs = remaining;
								classes = $temp$classes;
								node = $temp$node;
								has = $temp$has;
								transform = $temp$transform;
								styles = $temp$styles;
								attrs = $temp$attrs;
								children = $temp$children;
								elementAttrs = $temp$elementAttrs;
								continue gatherAttrRecursive;
							default:
								var $temp$classes = classes,
									$temp$node = node,
									$temp$has = has,
									$temp$transform = transform,
									$temp$styles = styles,
									$temp$attrs = A2(
									$elm$core$List$cons,
									A2($elm$virtual_dom$VirtualDom$attribute, 'aria-live', 'assertive'),
									attrs),
									$temp$children = children,
									$temp$elementAttrs = remaining;
								classes = $temp$classes;
								node = $temp$node;
								has = $temp$has;
								transform = $temp$transform;
								styles = $temp$styles;
								attrs = $temp$attrs;
								children = $temp$children;
								elementAttrs = $temp$elementAttrs;
								continue gatherAttrRecursive;
						}
					case 9:
						var location = attribute.a;
						var elem = attribute.b;
						var newStyles = function () {
							switch (elem.$) {
								case 3:
									return styles;
								case 2:
									var str = elem.a;
									return styles;
								case 0:
									var html = elem.a;
									return styles;
								default:
									var styled = elem.a;
									return _Utils_ap(styles, styled.f5);
							}
						}();
						var $temp$classes = classes,
							$temp$node = node,
							$temp$has = has,
							$temp$transform = transform,
							$temp$styles = newStyles,
							$temp$attrs = attrs,
							$temp$children = A3($mdgriffith$elm_ui$Internal$Model$addNearbyElement, location, elem, children),
							$temp$elementAttrs = remaining;
						classes = $temp$classes;
						node = $temp$node;
						has = $temp$has;
						transform = $temp$transform;
						styles = $temp$styles;
						attrs = $temp$attrs;
						children = $temp$children;
						elementAttrs = $temp$elementAttrs;
						continue gatherAttrRecursive;
					case 6:
						var x = attribute.a;
						if (A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$xAlign, has)) {
							var $temp$classes = classes,
								$temp$node = node,
								$temp$has = has,
								$temp$transform = transform,
								$temp$styles = styles,
								$temp$attrs = attrs,
								$temp$children = children,
								$temp$elementAttrs = remaining;
							classes = $temp$classes;
							node = $temp$node;
							has = $temp$has;
							transform = $temp$transform;
							styles = $temp$styles;
							attrs = $temp$attrs;
							children = $temp$children;
							elementAttrs = $temp$elementAttrs;
							continue gatherAttrRecursive;
						} else {
							var $temp$classes = $mdgriffith$elm_ui$Internal$Model$alignXName(x) + (' ' + classes),
								$temp$node = node,
								$temp$has = function (flags) {
								switch (x) {
									case 1:
										return A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$centerX, flags);
									case 2:
										return A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$alignRight, flags);
									default:
										return flags;
								}
							}(
								A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$xAlign, has)),
								$temp$transform = transform,
								$temp$styles = styles,
								$temp$attrs = attrs,
								$temp$children = children,
								$temp$elementAttrs = remaining;
							classes = $temp$classes;
							node = $temp$node;
							has = $temp$has;
							transform = $temp$transform;
							styles = $temp$styles;
							attrs = $temp$attrs;
							children = $temp$children;
							elementAttrs = $temp$elementAttrs;
							continue gatherAttrRecursive;
						}
					default:
						var y = attribute.a;
						if (A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$yAlign, has)) {
							var $temp$classes = classes,
								$temp$node = node,
								$temp$has = has,
								$temp$transform = transform,
								$temp$styles = styles,
								$temp$attrs = attrs,
								$temp$children = children,
								$temp$elementAttrs = remaining;
							classes = $temp$classes;
							node = $temp$node;
							has = $temp$has;
							transform = $temp$transform;
							styles = $temp$styles;
							attrs = $temp$attrs;
							children = $temp$children;
							elementAttrs = $temp$elementAttrs;
							continue gatherAttrRecursive;
						} else {
							var $temp$classes = $mdgriffith$elm_ui$Internal$Model$alignYName(y) + (' ' + classes),
								$temp$node = node,
								$temp$has = function (flags) {
								switch (y) {
									case 1:
										return A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$centerY, flags);
									case 2:
										return A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$alignBottom, flags);
									default:
										return flags;
								}
							}(
								A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$yAlign, has)),
								$temp$transform = transform,
								$temp$styles = styles,
								$temp$attrs = attrs,
								$temp$children = children,
								$temp$elementAttrs = remaining;
							classes = $temp$classes;
							node = $temp$node;
							has = $temp$has;
							transform = $temp$transform;
							styles = $temp$styles;
							attrs = $temp$attrs;
							children = $temp$children;
							elementAttrs = $temp$elementAttrs;
							continue gatherAttrRecursive;
						}
				}
			}
		}
	});
var $mdgriffith$elm_ui$Internal$Model$Untransformed = {$: 0};
var $mdgriffith$elm_ui$Internal$Model$untransformed = $mdgriffith$elm_ui$Internal$Model$Untransformed;
var $mdgriffith$elm_ui$Internal$Model$element = F4(
	function (context, node, attributes, children) {
		return A3(
			$mdgriffith$elm_ui$Internal$Model$createElement,
			context,
			children,
			A8(
				$mdgriffith$elm_ui$Internal$Model$gatherAttrRecursive,
				$mdgriffith$elm_ui$Internal$Model$contextClasses(context),
				node,
				$mdgriffith$elm_ui$Internal$Flag$none,
				$mdgriffith$elm_ui$Internal$Model$untransformed,
				_List_Nil,
				_List_Nil,
				$mdgriffith$elm_ui$Internal$Model$NoNearbyChildren,
				$elm$core$List$reverse(attributes)));
	});
var $mdgriffith$elm_ui$Internal$Model$AllowHover = 1;
var $mdgriffith$elm_ui$Internal$Model$Layout = 0;
var $mdgriffith$elm_ui$Internal$Model$focusDefaultStyle = {
	gw: $elm$core$Maybe$Nothing,
	gC: $elm$core$Maybe$Nothing,
	h2: $elm$core$Maybe$Just(
		{
			gA: 0,
			gQ: A4($mdgriffith$elm_ui$Internal$Model$Rgba, 155 / 255, 203 / 255, 1, 1),
			aG: _Utils_Tuple2(0, 0),
			ca: 3
		})
};
var $mdgriffith$elm_ui$Internal$Model$optionsToRecord = function (options) {
	var combine = F2(
		function (opt, record) {
			switch (opt.$) {
				case 0:
					var hoverable = opt.a;
					var _v4 = record.hg;
					if (_v4.$ === 1) {
						return _Utils_update(
							record,
							{
								hg: $elm$core$Maybe$Just(hoverable)
							});
					} else {
						return record;
					}
				case 1:
					var focusStyle = opt.a;
					var _v5 = record.g8;
					if (_v5.$ === 1) {
						return _Utils_update(
							record,
							{
								g8: $elm$core$Maybe$Just(focusStyle)
							});
					} else {
						return record;
					}
				default:
					var renderMode = opt.a;
					var _v6 = record.dT;
					if (_v6.$ === 1) {
						return _Utils_update(
							record,
							{
								dT: $elm$core$Maybe$Just(renderMode)
							});
					} else {
						return record;
					}
			}
		});
	var andFinally = function (record) {
		return {
			g8: function () {
				var _v0 = record.g8;
				if (_v0.$ === 1) {
					return $mdgriffith$elm_ui$Internal$Model$focusDefaultStyle;
				} else {
					var focusable = _v0.a;
					return focusable;
				}
			}(),
			hg: function () {
				var _v1 = record.hg;
				if (_v1.$ === 1) {
					return 1;
				} else {
					var hoverable = _v1.a;
					return hoverable;
				}
			}(),
			dT: function () {
				var _v2 = record.dT;
				if (_v2.$ === 1) {
					return 0;
				} else {
					var actualMode = _v2.a;
					return actualMode;
				}
			}()
		};
	};
	return andFinally(
		A3(
			$elm$core$List$foldr,
			combine,
			{g8: $elm$core$Maybe$Nothing, hg: $elm$core$Maybe$Nothing, dT: $elm$core$Maybe$Nothing},
			options));
};
var $mdgriffith$elm_ui$Internal$Model$toHtml = F2(
	function (mode, el) {
		switch (el.$) {
			case 0:
				var html = el.a;
				return html($mdgriffith$elm_ui$Internal$Model$asEl);
			case 1:
				var html = el.a.hh;
				var styles = el.a.f5;
				return A2(
					html,
					mode(styles),
					$mdgriffith$elm_ui$Internal$Model$asEl);
			case 2:
				var text = el.a;
				return $mdgriffith$elm_ui$Internal$Model$textElement(text);
			default:
				return $mdgriffith$elm_ui$Internal$Model$textElement('');
		}
	});
var $mdgriffith$elm_ui$Internal$Model$renderRoot = F3(
	function (optionList, attributes, child) {
		var options = $mdgriffith$elm_ui$Internal$Model$optionsToRecord(optionList);
		var embedStyle = function () {
			var _v0 = options.dT;
			if (_v0 === 1) {
				return $mdgriffith$elm_ui$Internal$Model$OnlyDynamic(options);
			} else {
				return $mdgriffith$elm_ui$Internal$Model$StaticRootAndDynamic(options);
			}
		}();
		return A2(
			$mdgriffith$elm_ui$Internal$Model$toHtml,
			embedStyle,
			A4(
				$mdgriffith$elm_ui$Internal$Model$element,
				$mdgriffith$elm_ui$Internal$Model$asEl,
				$mdgriffith$elm_ui$Internal$Model$div,
				attributes,
				$mdgriffith$elm_ui$Internal$Model$Unkeyed(
					_List_fromArray(
						[child]))));
	});
var $mdgriffith$elm_ui$Internal$Model$FontFamily = F2(
	function (a, b) {
		return {$: 1, a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Model$FontSize = function (a) {
	return {$: 2, a: a};
};
var $mdgriffith$elm_ui$Internal$Model$SansSerif = {$: 1};
var $mdgriffith$elm_ui$Internal$Model$Typeface = function (a) {
	return {$: 3, a: a};
};
var $mdgriffith$elm_ui$Internal$Flag$fontColor = $mdgriffith$elm_ui$Internal$Flag$flag(14);
var $mdgriffith$elm_ui$Internal$Flag$fontFamily = $mdgriffith$elm_ui$Internal$Flag$flag(5);
var $mdgriffith$elm_ui$Internal$Flag$fontSize = $mdgriffith$elm_ui$Internal$Flag$flag(4);
var $elm$core$String$toLower = _String_toLower;
var $elm$core$String$words = _String_words;
var $mdgriffith$elm_ui$Internal$Model$renderFontClassName = F2(
	function (font, current) {
		return _Utils_ap(
			current,
			function () {
				switch (font.$) {
					case 0:
						return 'serif';
					case 1:
						return 'sans-serif';
					case 2:
						return 'monospace';
					case 3:
						var name = font.a;
						return A2(
							$elm$core$String$join,
							'-',
							$elm$core$String$words(
								$elm$core$String$toLower(name)));
					case 4:
						var name = font.a;
						var url = font.b;
						return A2(
							$elm$core$String$join,
							'-',
							$elm$core$String$words(
								$elm$core$String$toLower(name)));
					default:
						var name = font.a.dU;
						return A2(
							$elm$core$String$join,
							'-',
							$elm$core$String$words(
								$elm$core$String$toLower(name)));
				}
			}());
	});
var $mdgriffith$elm_ui$Internal$Model$rootStyle = function () {
	var families = _List_fromArray(
		[
			$mdgriffith$elm_ui$Internal$Model$Typeface('Open Sans'),
			$mdgriffith$elm_ui$Internal$Model$Typeface('Helvetica'),
			$mdgriffith$elm_ui$Internal$Model$Typeface('Verdana'),
			$mdgriffith$elm_ui$Internal$Model$SansSerif
		]);
	return _List_fromArray(
		[
			A2(
			$mdgriffith$elm_ui$Internal$Model$StyleClass,
			$mdgriffith$elm_ui$Internal$Flag$bgColor,
			A3(
				$mdgriffith$elm_ui$Internal$Model$Colored,
				'bg-' + $mdgriffith$elm_ui$Internal$Model$formatColorClass(
					A4($mdgriffith$elm_ui$Internal$Model$Rgba, 1, 1, 1, 0)),
				'background-color',
				A4($mdgriffith$elm_ui$Internal$Model$Rgba, 1, 1, 1, 0))),
			A2(
			$mdgriffith$elm_ui$Internal$Model$StyleClass,
			$mdgriffith$elm_ui$Internal$Flag$fontColor,
			A3(
				$mdgriffith$elm_ui$Internal$Model$Colored,
				'fc-' + $mdgriffith$elm_ui$Internal$Model$formatColorClass(
					A4($mdgriffith$elm_ui$Internal$Model$Rgba, 0, 0, 0, 1)),
				'color',
				A4($mdgriffith$elm_ui$Internal$Model$Rgba, 0, 0, 0, 1))),
			A2(
			$mdgriffith$elm_ui$Internal$Model$StyleClass,
			$mdgriffith$elm_ui$Internal$Flag$fontSize,
			$mdgriffith$elm_ui$Internal$Model$FontSize(20)),
			A2(
			$mdgriffith$elm_ui$Internal$Model$StyleClass,
			$mdgriffith$elm_ui$Internal$Flag$fontFamily,
			A2(
				$mdgriffith$elm_ui$Internal$Model$FontFamily,
				A3($elm$core$List$foldl, $mdgriffith$elm_ui$Internal$Model$renderFontClassName, 'font-', families),
				families))
		]);
}();
var $mdgriffith$elm_ui$Element$layoutWith = F3(
	function (_v0, attrs, child) {
		var options = _v0.hN;
		return A3(
			$mdgriffith$elm_ui$Internal$Model$renderRoot,
			options,
			A2(
				$elm$core$List$cons,
				$mdgriffith$elm_ui$Internal$Model$htmlClass(
					A2(
						$elm$core$String$join,
						' ',
						_List_fromArray(
							[$mdgriffith$elm_ui$Internal$Style$classes.hY, $mdgriffith$elm_ui$Internal$Style$classes.gu, $mdgriffith$elm_ui$Internal$Style$classes.h3]))),
				_Utils_ap($mdgriffith$elm_ui$Internal$Model$rootStyle, attrs)),
			child);
	});
var $author$project$Main$appHeight_ = function (model) {
	return model.eO - 300;
};
var $author$project$Main$panelWidth_ = 520;
var $author$project$Main$appWidth_ = (2 * $author$project$Main$panelWidth_) + 15;
var $mdgriffith$elm_ui$Element$Font$color = function (fontColor) {
	return A2(
		$mdgriffith$elm_ui$Internal$Model$StyleClass,
		$mdgriffith$elm_ui$Internal$Flag$fontColor,
		A3(
			$mdgriffith$elm_ui$Internal$Model$Colored,
			'fc-' + $mdgriffith$elm_ui$Internal$Model$formatColorClass(fontColor),
			'color',
			fontColor));
};
var $mdgriffith$elm_ui$Internal$Model$AsColumn = 1;
var $mdgriffith$elm_ui$Internal$Model$asColumn = 1;
var $mdgriffith$elm_ui$Internal$Model$Height = function (a) {
	return {$: 8, a: a};
};
var $mdgriffith$elm_ui$Element$height = $mdgriffith$elm_ui$Internal$Model$Height;
var $mdgriffith$elm_ui$Internal$Model$Content = {$: 1};
var $mdgriffith$elm_ui$Element$shrink = $mdgriffith$elm_ui$Internal$Model$Content;
var $mdgriffith$elm_ui$Internal$Model$Width = function (a) {
	return {$: 7, a: a};
};
var $mdgriffith$elm_ui$Element$width = $mdgriffith$elm_ui$Internal$Model$Width;
var $mdgriffith$elm_ui$Element$column = F2(
	function (attrs, children) {
		return A4(
			$mdgriffith$elm_ui$Internal$Model$element,
			$mdgriffith$elm_ui$Internal$Model$asColumn,
			$mdgriffith$elm_ui$Internal$Model$div,
			A2(
				$elm$core$List$cons,
				$mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.gR + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.cv)),
				A2(
					$elm$core$List$cons,
					$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$shrink),
					A2(
						$elm$core$List$cons,
						$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$shrink),
						attrs))),
			$mdgriffith$elm_ui$Internal$Model$Unkeyed(children));
	});
var $author$project$Main$ClearText = {$: 2};
var $mdgriffith$elm_ui$Internal$Model$Button = {$: 8};
var $mdgriffith$elm_ui$Internal$Model$Describe = function (a) {
	return {$: 2, a: a};
};
var $elm$json$Json$Encode$bool = _Json_wrap;
var $elm$html$Html$Attributes$boolProperty = F2(
	function (key, bool) {
		return A2(
			_VirtualDom_property,
			key,
			$elm$json$Json$Encode$bool(bool));
	});
var $elm$html$Html$Attributes$disabled = $elm$html$Html$Attributes$boolProperty('disabled');
var $mdgriffith$elm_ui$Element$Input$enter = 'Enter';
var $mdgriffith$elm_ui$Internal$Model$NoAttribute = {$: 0};
var $mdgriffith$elm_ui$Element$Input$hasFocusStyle = function (attr) {
	if (((attr.$ === 4) && (attr.b.$ === 11)) && (!attr.b.a)) {
		var _v1 = attr.b;
		var _v2 = _v1.a;
		return true;
	} else {
		return false;
	}
};
var $mdgriffith$elm_ui$Element$Input$focusDefault = function (attrs) {
	return A2($elm$core$List$any, $mdgriffith$elm_ui$Element$Input$hasFocusStyle, attrs) ? $mdgriffith$elm_ui$Internal$Model$NoAttribute : $mdgriffith$elm_ui$Internal$Model$htmlClass('focusable');
};
var $elm$core$Basics$composeL = F3(
	function (g, f, x) {
		return g(
			f(x));
	});
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
var $mdgriffith$elm_ui$Element$Events$onClick = A2($elm$core$Basics$composeL, $mdgriffith$elm_ui$Internal$Model$Attr, $elm$html$Html$Events$onClick);
var $elm$json$Json$Decode$fail = _Json_fail;
var $elm$virtual_dom$VirtualDom$MayPreventDefault = function (a) {
	return {$: 2, a: a};
};
var $elm$html$Html$Events$preventDefaultOn = F2(
	function (event, decoder) {
		return A2(
			$elm$virtual_dom$VirtualDom$on,
			event,
			$elm$virtual_dom$VirtualDom$MayPreventDefault(decoder));
	});
var $elm$json$Json$Decode$string = _Json_decodeString;
var $mdgriffith$elm_ui$Element$Input$onKeyLookup = function (lookup) {
	var decode = function (code) {
		var _v0 = lookup(code);
		if (_v0.$ === 1) {
			return $elm$json$Json$Decode$fail('No key matched');
		} else {
			var msg = _v0.a;
			return $elm$json$Json$Decode$succeed(msg);
		}
	};
	var isKey = A2(
		$elm$json$Json$Decode$andThen,
		decode,
		A2($elm$json$Json$Decode$field, 'key', $elm$json$Json$Decode$string));
	return $mdgriffith$elm_ui$Internal$Model$Attr(
		A2(
			$elm$html$Html$Events$preventDefaultOn,
			'keydown',
			A2(
				$elm$json$Json$Decode$map,
				function (fired) {
					return _Utils_Tuple2(fired, true);
				},
				isKey)));
};
var $mdgriffith$elm_ui$Internal$Flag$cursor = $mdgriffith$elm_ui$Internal$Flag$flag(21);
var $mdgriffith$elm_ui$Element$pointer = A2($mdgriffith$elm_ui$Internal$Model$Class, $mdgriffith$elm_ui$Internal$Flag$cursor, $mdgriffith$elm_ui$Internal$Style$classes.gU);
var $mdgriffith$elm_ui$Element$Input$space = ' ';
var $elm$html$Html$Attributes$tabindex = function (n) {
	return A2(
		_VirtualDom_attribute,
		'tabIndex',
		$elm$core$String$fromInt(n));
};
var $mdgriffith$elm_ui$Element$Input$button = F2(
	function (attrs, _v0) {
		var label = _v0.bS;
		var onPress = _v0.c2;
		return A4(
			$mdgriffith$elm_ui$Internal$Model$element,
			$mdgriffith$elm_ui$Internal$Model$asEl,
			$mdgriffith$elm_ui$Internal$Model$div,
			A2(
				$elm$core$List$cons,
				$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$shrink),
				A2(
					$elm$core$List$cons,
					$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$shrink),
					A2(
						$elm$core$List$cons,
						$mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.dI + (' ' + ($mdgriffith$elm_ui$Internal$Style$classes.a$ + (' ' + ($mdgriffith$elm_ui$Internal$Style$classes.h0 + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.fE)))))),
						A2(
							$elm$core$List$cons,
							$mdgriffith$elm_ui$Element$pointer,
							A2(
								$elm$core$List$cons,
								$mdgriffith$elm_ui$Element$Input$focusDefault(attrs),
								A2(
									$elm$core$List$cons,
									$mdgriffith$elm_ui$Internal$Model$Describe($mdgriffith$elm_ui$Internal$Model$Button),
									A2(
										$elm$core$List$cons,
										$mdgriffith$elm_ui$Internal$Model$Attr(
											$elm$html$Html$Attributes$tabindex(0)),
										function () {
											if (onPress.$ === 1) {
												return A2(
													$elm$core$List$cons,
													$mdgriffith$elm_ui$Internal$Model$Attr(
														$elm$html$Html$Attributes$disabled(true)),
													attrs);
											} else {
												var msg = onPress.a;
												return A2(
													$elm$core$List$cons,
													$mdgriffith$elm_ui$Element$Events$onClick(msg),
													A2(
														$elm$core$List$cons,
														$mdgriffith$elm_ui$Element$Input$onKeyLookup(
															function (code) {
																return _Utils_eq(code, $mdgriffith$elm_ui$Element$Input$enter) ? $elm$core$Maybe$Just(msg) : (_Utils_eq(code, $mdgriffith$elm_ui$Element$Input$space) ? $elm$core$Maybe$Just(msg) : $elm$core$Maybe$Nothing);
															}),
														attrs));
											}
										}()))))))),
			$mdgriffith$elm_ui$Internal$Model$Unkeyed(
				_List_fromArray(
					[label])));
	});
var $mdgriffith$elm_ui$Internal$Model$PaddingStyle = F5(
	function (a, b, c, d, e) {
		return {$: 7, a: a, b: b, c: c, d: d, e: e};
	});
var $mdgriffith$elm_ui$Internal$Flag$padding = $mdgriffith$elm_ui$Internal$Flag$flag(2);
var $mdgriffith$elm_ui$Element$paddingXY = F2(
	function (x, y) {
		if (_Utils_eq(x, y)) {
			var f = x;
			return A2(
				$mdgriffith$elm_ui$Internal$Model$StyleClass,
				$mdgriffith$elm_ui$Internal$Flag$padding,
				A5(
					$mdgriffith$elm_ui$Internal$Model$PaddingStyle,
					'p-' + $elm$core$String$fromInt(x),
					f,
					f,
					f,
					f));
		} else {
			var yFloat = y;
			var xFloat = x;
			return A2(
				$mdgriffith$elm_ui$Internal$Model$StyleClass,
				$mdgriffith$elm_ui$Internal$Flag$padding,
				A5(
					$mdgriffith$elm_ui$Internal$Model$PaddingStyle,
					'p-' + ($elm$core$String$fromInt(x) + ('-' + $elm$core$String$fromInt(y))),
					yFloat,
					xFloat,
					yFloat,
					xFloat));
		}
	});
var $mdgriffith$elm_ui$Element$rgb255 = F3(
	function (red, green, blue) {
		return A4($mdgriffith$elm_ui$Internal$Model$Rgba, red / 255, green / 255, blue / 255, 1);
	});
var $author$project$Main$buttonStyle2 = _List_fromArray(
	[
		$mdgriffith$elm_ui$Element$Font$color(
		A3($mdgriffith$elm_ui$Element$rgb255, 255, 255, 255)),
		$mdgriffith$elm_ui$Element$Background$color(
		A3($mdgriffith$elm_ui$Element$rgb255, 0, 0, 180)),
		A2($mdgriffith$elm_ui$Element$paddingXY, 15, 8)
	]);
var $mdgriffith$elm_ui$Internal$Model$AlignX = function (a) {
	return {$: 6, a: a};
};
var $mdgriffith$elm_ui$Internal$Model$CenterX = 1;
var $mdgriffith$elm_ui$Element$centerX = $mdgriffith$elm_ui$Internal$Model$AlignX(1);
var $mdgriffith$elm_ui$Internal$Model$AlignY = function (a) {
	return {$: 5, a: a};
};
var $mdgriffith$elm_ui$Internal$Model$CenterY = 1;
var $mdgriffith$elm_ui$Element$centerY = $mdgriffith$elm_ui$Internal$Model$AlignY(1);
var $mdgriffith$elm_ui$Element$el = F2(
	function (attrs, child) {
		return A4(
			$mdgriffith$elm_ui$Internal$Model$element,
			$mdgriffith$elm_ui$Internal$Model$asEl,
			$mdgriffith$elm_ui$Internal$Model$div,
			A2(
				$elm$core$List$cons,
				$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$shrink),
				A2(
					$elm$core$List$cons,
					$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$shrink),
					attrs)),
			$mdgriffith$elm_ui$Internal$Model$Unkeyed(
				_List_fromArray(
					[child])));
	});
var $mdgriffith$elm_ui$Element$Font$size = function (i) {
	return A2(
		$mdgriffith$elm_ui$Internal$Model$StyleClass,
		$mdgriffith$elm_ui$Internal$Flag$fontSize,
		$mdgriffith$elm_ui$Internal$Model$FontSize(i));
};
var $mdgriffith$elm_ui$Internal$Model$Text = function (a) {
	return {$: 2, a: a};
};
var $mdgriffith$elm_ui$Element$text = function (content) {
	return $mdgriffith$elm_ui$Internal$Model$Text(content);
};
var $author$project$Main$clearTextButton = A2(
	$mdgriffith$elm_ui$Element$Input$button,
	$author$project$Main$buttonStyle2,
	{
		bS: A2(
			$mdgriffith$elm_ui$Element$el,
			_List_fromArray(
				[
					$mdgriffith$elm_ui$Element$centerX,
					$mdgriffith$elm_ui$Element$centerY,
					$mdgriffith$elm_ui$Element$Font$size(14)
				]),
			$mdgriffith$elm_ui$Element$text('clear')),
		c2: $elm$core$Maybe$Just($author$project$Main$ClearText)
	});
var $author$project$Main$GetDocument = function (a) {
	return {$: 3, a: a};
};
var $author$project$Main$getDocumentButton = function (docName) {
	return A2(
		$mdgriffith$elm_ui$Element$Input$button,
		$author$project$Main$buttonStyle2,
		{
			bS: A2(
				$mdgriffith$elm_ui$Element$el,
				_List_fromArray(
					[
						$mdgriffith$elm_ui$Element$centerX,
						$mdgriffith$elm_ui$Element$centerY,
						$mdgriffith$elm_ui$Element$Font$size(14)
					]),
				$mdgriffith$elm_ui$Element$text(docName)),
			c2: $elm$core$Maybe$Just(
				$author$project$Main$GetDocument(docName))
		});
};
var $author$project$Main$InputText = function (a) {
	return {$: 1, a: a};
};
var $mdgriffith$elm_ui$Element$Input$HiddenLabel = function (a) {
	return {$: 1, a: a};
};
var $mdgriffith$elm_ui$Element$Input$labelHidden = $mdgriffith$elm_ui$Element$Input$HiddenLabel;
var $mdgriffith$elm_ui$Element$Input$TextArea = {$: 1};
var $mdgriffith$elm_ui$Internal$Model$LivePolite = {$: 6};
var $mdgriffith$elm_ui$Element$Region$announce = $mdgriffith$elm_ui$Internal$Model$Describe($mdgriffith$elm_ui$Internal$Model$LivePolite);
var $mdgriffith$elm_ui$Internal$Model$AsRow = 0;
var $mdgriffith$elm_ui$Internal$Model$asRow = 0;
var $mdgriffith$elm_ui$Element$Input$applyLabel = F3(
	function (attrs, label, input) {
		if (label.$ === 1) {
			var labelText = label.a;
			return A4(
				$mdgriffith$elm_ui$Internal$Model$element,
				$mdgriffith$elm_ui$Internal$Model$asColumn,
				$mdgriffith$elm_ui$Internal$Model$NodeName('label'),
				attrs,
				$mdgriffith$elm_ui$Internal$Model$Unkeyed(
					_List_fromArray(
						[input])));
		} else {
			var position = label.a;
			var labelAttrs = label.b;
			var labelChild = label.c;
			var labelElement = A4(
				$mdgriffith$elm_ui$Internal$Model$element,
				$mdgriffith$elm_ui$Internal$Model$asEl,
				$mdgriffith$elm_ui$Internal$Model$div,
				labelAttrs,
				$mdgriffith$elm_ui$Internal$Model$Unkeyed(
					_List_fromArray(
						[labelChild])));
			switch (position) {
				case 2:
					return A4(
						$mdgriffith$elm_ui$Internal$Model$element,
						$mdgriffith$elm_ui$Internal$Model$asColumn,
						$mdgriffith$elm_ui$Internal$Model$NodeName('label'),
						A2(
							$elm$core$List$cons,
							$mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.dP),
							attrs),
						$mdgriffith$elm_ui$Internal$Model$Unkeyed(
							_List_fromArray(
								[labelElement, input])));
				case 3:
					return A4(
						$mdgriffith$elm_ui$Internal$Model$element,
						$mdgriffith$elm_ui$Internal$Model$asColumn,
						$mdgriffith$elm_ui$Internal$Model$NodeName('label'),
						A2(
							$elm$core$List$cons,
							$mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.dP),
							attrs),
						$mdgriffith$elm_ui$Internal$Model$Unkeyed(
							_List_fromArray(
								[input, labelElement])));
				case 0:
					return A4(
						$mdgriffith$elm_ui$Internal$Model$element,
						$mdgriffith$elm_ui$Internal$Model$asRow,
						$mdgriffith$elm_ui$Internal$Model$NodeName('label'),
						A2(
							$elm$core$List$cons,
							$mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.dP),
							attrs),
						$mdgriffith$elm_ui$Internal$Model$Unkeyed(
							_List_fromArray(
								[input, labelElement])));
				default:
					return A4(
						$mdgriffith$elm_ui$Internal$Model$element,
						$mdgriffith$elm_ui$Internal$Model$asRow,
						$mdgriffith$elm_ui$Internal$Model$NodeName('label'),
						A2(
							$elm$core$List$cons,
							$mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.dP),
							attrs),
						$mdgriffith$elm_ui$Internal$Model$Unkeyed(
							_List_fromArray(
								[labelElement, input])));
			}
		}
	});
var $elm$html$Html$Attributes$attribute = $elm$virtual_dom$VirtualDom$attribute;
var $mdgriffith$elm_ui$Element$Input$autofill = A2(
	$elm$core$Basics$composeL,
	$mdgriffith$elm_ui$Internal$Model$Attr,
	$elm$html$Html$Attributes$attribute('autocomplete'));
var $mdgriffith$elm_ui$Internal$Model$Behind = 5;
var $mdgriffith$elm_ui$Internal$Model$Nearby = F2(
	function (a, b) {
		return {$: 9, a: a, b: b};
	});
var $mdgriffith$elm_ui$Element$createNearby = F2(
	function (loc, element) {
		if (element.$ === 3) {
			return $mdgriffith$elm_ui$Internal$Model$NoAttribute;
		} else {
			return A2($mdgriffith$elm_ui$Internal$Model$Nearby, loc, element);
		}
	});
var $mdgriffith$elm_ui$Element$behindContent = function (element) {
	return A2($mdgriffith$elm_ui$Element$createNearby, 5, element);
};
var $mdgriffith$elm_ui$Internal$Model$MoveY = function (a) {
	return {$: 1, a: a};
};
var $mdgriffith$elm_ui$Internal$Model$TransformComponent = F2(
	function (a, b) {
		return {$: 10, a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Flag$moveY = $mdgriffith$elm_ui$Internal$Flag$flag(26);
var $mdgriffith$elm_ui$Element$moveUp = function (y) {
	return A2(
		$mdgriffith$elm_ui$Internal$Model$TransformComponent,
		$mdgriffith$elm_ui$Internal$Flag$moveY,
		$mdgriffith$elm_ui$Internal$Model$MoveY(-y));
};
var $mdgriffith$elm_ui$Element$Input$calcMoveToCompensateForPadding = function (attrs) {
	var gatherSpacing = F2(
		function (attr, found) {
			if ((attr.$ === 4) && (attr.b.$ === 5)) {
				var _v2 = attr.b;
				var x = _v2.b;
				var y = _v2.c;
				if (found.$ === 1) {
					return $elm$core$Maybe$Just(y);
				} else {
					return found;
				}
			} else {
				return found;
			}
		});
	var _v0 = A3($elm$core$List$foldr, gatherSpacing, $elm$core$Maybe$Nothing, attrs);
	if (_v0.$ === 1) {
		return $mdgriffith$elm_ui$Internal$Model$NoAttribute;
	} else {
		var vSpace = _v0.a;
		return $mdgriffith$elm_ui$Element$moveUp(
			$elm$core$Basics$floor(vSpace / 2));
	}
};
var $mdgriffith$elm_ui$Element$clip = A2($mdgriffith$elm_ui$Internal$Model$Class, $mdgriffith$elm_ui$Internal$Flag$overflow, $mdgriffith$elm_ui$Internal$Style$classes.gM);
var $mdgriffith$elm_ui$Internal$Flag$borderColor = $mdgriffith$elm_ui$Internal$Flag$flag(28);
var $mdgriffith$elm_ui$Element$Border$color = function (clr) {
	return A2(
		$mdgriffith$elm_ui$Internal$Model$StyleClass,
		$mdgriffith$elm_ui$Internal$Flag$borderColor,
		A3(
			$mdgriffith$elm_ui$Internal$Model$Colored,
			'bc-' + $mdgriffith$elm_ui$Internal$Model$formatColorClass(clr),
			'border-color',
			clr));
};
var $mdgriffith$elm_ui$Element$Input$darkGrey = A3($mdgriffith$elm_ui$Element$rgb, 186 / 255, 189 / 255, 182 / 255);
var $mdgriffith$elm_ui$Element$Input$defaultTextPadding = A2($mdgriffith$elm_ui$Element$paddingXY, 12, 12);
var $mdgriffith$elm_ui$Internal$Model$Fill = function (a) {
	return {$: 2, a: a};
};
var $mdgriffith$elm_ui$Element$fill = $mdgriffith$elm_ui$Internal$Model$Fill(1);
var $mdgriffith$elm_ui$Internal$Flag$borderRound = $mdgriffith$elm_ui$Internal$Flag$flag(17);
var $mdgriffith$elm_ui$Element$Border$rounded = function (radius) {
	return A2(
		$mdgriffith$elm_ui$Internal$Model$StyleClass,
		$mdgriffith$elm_ui$Internal$Flag$borderRound,
		A3(
			$mdgriffith$elm_ui$Internal$Model$Single,
			'br-' + $elm$core$String$fromInt(radius),
			'border-radius',
			$elm$core$String$fromInt(radius) + 'px'));
};
var $mdgriffith$elm_ui$Internal$Model$SpacingStyle = F3(
	function (a, b, c) {
		return {$: 5, a: a, b: b, c: c};
	});
var $mdgriffith$elm_ui$Internal$Flag$spacing = $mdgriffith$elm_ui$Internal$Flag$flag(3);
var $mdgriffith$elm_ui$Internal$Model$spacingName = F2(
	function (x, y) {
		return 'spacing-' + ($elm$core$String$fromInt(x) + ('-' + $elm$core$String$fromInt(y)));
	});
var $mdgriffith$elm_ui$Element$spacing = function (x) {
	return A2(
		$mdgriffith$elm_ui$Internal$Model$StyleClass,
		$mdgriffith$elm_ui$Internal$Flag$spacing,
		A3(
			$mdgriffith$elm_ui$Internal$Model$SpacingStyle,
			A2($mdgriffith$elm_ui$Internal$Model$spacingName, x, x),
			x,
			x));
};
var $mdgriffith$elm_ui$Element$Input$white = A3($mdgriffith$elm_ui$Element$rgb, 1, 1, 1);
var $mdgriffith$elm_ui$Internal$Model$BorderWidth = F5(
	function (a, b, c, d, e) {
		return {$: 6, a: a, b: b, c: c, d: d, e: e};
	});
var $mdgriffith$elm_ui$Element$Border$width = function (v) {
	return A2(
		$mdgriffith$elm_ui$Internal$Model$StyleClass,
		$mdgriffith$elm_ui$Internal$Flag$borderWidth,
		A5(
			$mdgriffith$elm_ui$Internal$Model$BorderWidth,
			'b-' + $elm$core$String$fromInt(v),
			v,
			v,
			v,
			v));
};
var $mdgriffith$elm_ui$Element$Input$defaultTextBoxStyle = _List_fromArray(
	[
		$mdgriffith$elm_ui$Element$Input$defaultTextPadding,
		$mdgriffith$elm_ui$Element$Border$rounded(3),
		$mdgriffith$elm_ui$Element$Border$color($mdgriffith$elm_ui$Element$Input$darkGrey),
		$mdgriffith$elm_ui$Element$Background$color($mdgriffith$elm_ui$Element$Input$white),
		$mdgriffith$elm_ui$Element$Border$width(1),
		$mdgriffith$elm_ui$Element$spacing(5),
		$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
		$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$shrink)
	]);
var $mdgriffith$elm_ui$Element$Input$getHeight = function (attr) {
	if (attr.$ === 8) {
		var h = attr.a;
		return $elm$core$Maybe$Just(h);
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $mdgriffith$elm_ui$Internal$Model$Label = function (a) {
	return {$: 5, a: a};
};
var $mdgriffith$elm_ui$Element$Input$hiddenLabelAttribute = function (label) {
	if (label.$ === 1) {
		var textLabel = label.a;
		return $mdgriffith$elm_ui$Internal$Model$Describe(
			$mdgriffith$elm_ui$Internal$Model$Label(textLabel));
	} else {
		return $mdgriffith$elm_ui$Internal$Model$NoAttribute;
	}
};
var $mdgriffith$elm_ui$Internal$Model$InFront = 4;
var $mdgriffith$elm_ui$Element$inFront = function (element) {
	return A2($mdgriffith$elm_ui$Element$createNearby, 4, element);
};
var $mdgriffith$elm_ui$Element$Input$isConstrained = function (len) {
	isConstrained:
	while (true) {
		switch (len.$) {
			case 1:
				return false;
			case 0:
				return true;
			case 2:
				return true;
			case 3:
				var l = len.b;
				var $temp$len = l;
				len = $temp$len;
				continue isConstrained;
			default:
				var l = len.b;
				return true;
		}
	}
};
var $mdgriffith$elm_ui$Element$Input$isHiddenLabel = function (label) {
	if (label.$ === 1) {
		return true;
	} else {
		return false;
	}
};
var $mdgriffith$elm_ui$Element$Input$isStacked = function (label) {
	if (!label.$) {
		var loc = label.a;
		switch (loc) {
			case 0:
				return false;
			case 1:
				return false;
			case 2:
				return true;
			default:
				return true;
		}
	} else {
		return true;
	}
};
var $mdgriffith$elm_ui$Element$Input$negateBox = function (box) {
	return {cn: -box.cn, cY: -box.cY, de: -box.de, dp: -box.dp};
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
var $mdgriffith$elm_ui$Internal$Model$paddingName = F4(
	function (top, right, bottom, left) {
		return 'pad-' + ($elm$core$String$fromInt(top) + ('-' + ($elm$core$String$fromInt(right) + ('-' + ($elm$core$String$fromInt(bottom) + ('-' + $elm$core$String$fromInt(left)))))));
	});
var $mdgriffith$elm_ui$Element$paddingEach = function (_v0) {
	var left = _v0.cY;
	var bottom = _v0.cn;
	var right = _v0.de;
	var top = _v0.dp;
	if (_Utils_eq(top, right) && (_Utils_eq(top, bottom) && _Utils_eq(top, left))) {
		var topFloat = top;
		return A2(
			$mdgriffith$elm_ui$Internal$Model$StyleClass,
			$mdgriffith$elm_ui$Internal$Flag$padding,
			A5(
				$mdgriffith$elm_ui$Internal$Model$PaddingStyle,
				'p-' + $elm$core$String$fromInt(top),
				topFloat,
				topFloat,
				topFloat,
				topFloat));
	} else {
		return A2(
			$mdgriffith$elm_ui$Internal$Model$StyleClass,
			$mdgriffith$elm_ui$Internal$Flag$padding,
			A5(
				$mdgriffith$elm_ui$Internal$Model$PaddingStyle,
				A4($mdgriffith$elm_ui$Internal$Model$paddingName, top, right, bottom, left),
				top,
				right,
				bottom,
				left));
	}
};
var $mdgriffith$elm_ui$Element$htmlAttribute = $mdgriffith$elm_ui$Internal$Model$Attr;
var $mdgriffith$elm_ui$Element$Input$isFill = function (len) {
	isFill:
	while (true) {
		switch (len.$) {
			case 2:
				return true;
			case 1:
				return false;
			case 0:
				return false;
			case 3:
				var l = len.b;
				var $temp$len = l;
				len = $temp$len;
				continue isFill;
			default:
				var l = len.b;
				var $temp$len = l;
				len = $temp$len;
				continue isFill;
		}
	}
};
var $mdgriffith$elm_ui$Element$Input$isPixel = function (len) {
	isPixel:
	while (true) {
		switch (len.$) {
			case 1:
				return false;
			case 0:
				return true;
			case 2:
				return false;
			case 3:
				var l = len.b;
				var $temp$len = l;
				len = $temp$len;
				continue isPixel;
			default:
				var l = len.b;
				var $temp$len = l;
				len = $temp$len;
				continue isPixel;
		}
	}
};
var $mdgriffith$elm_ui$Internal$Model$paddingNameFloat = F4(
	function (top, right, bottom, left) {
		return 'pad-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(top) + ('-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(right) + ('-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(bottom) + ('-' + $mdgriffith$elm_ui$Internal$Model$floatClass(left)))))));
	});
var $elm$virtual_dom$VirtualDom$style = _VirtualDom_style;
var $elm$html$Html$Attributes$style = $elm$virtual_dom$VirtualDom$style;
var $mdgriffith$elm_ui$Element$Input$redistributeOver = F4(
	function (isMultiline, stacked, attr, els) {
		switch (attr.$) {
			case 9:
				return _Utils_update(
					els,
					{
						g: A2($elm$core$List$cons, attr, els.g)
					});
			case 7:
				var width = attr.a;
				return $mdgriffith$elm_ui$Element$Input$isFill(width) ? _Utils_update(
					els,
					{
						r: A2($elm$core$List$cons, attr, els.r),
						aQ: A2($elm$core$List$cons, attr, els.aQ),
						g: A2($elm$core$List$cons, attr, els.g)
					}) : (stacked ? _Utils_update(
					els,
					{
						r: A2($elm$core$List$cons, attr, els.r)
					}) : _Utils_update(
					els,
					{
						g: A2($elm$core$List$cons, attr, els.g)
					}));
			case 8:
				var height = attr.a;
				return (!stacked) ? _Utils_update(
					els,
					{
						r: A2($elm$core$List$cons, attr, els.r),
						g: A2($elm$core$List$cons, attr, els.g)
					}) : ($mdgriffith$elm_ui$Element$Input$isFill(height) ? _Utils_update(
					els,
					{
						r: A2($elm$core$List$cons, attr, els.r),
						g: A2($elm$core$List$cons, attr, els.g)
					}) : ($mdgriffith$elm_ui$Element$Input$isPixel(height) ? _Utils_update(
					els,
					{
						g: A2($elm$core$List$cons, attr, els.g)
					}) : _Utils_update(
					els,
					{
						g: A2($elm$core$List$cons, attr, els.g)
					})));
			case 6:
				return _Utils_update(
					els,
					{
						r: A2($elm$core$List$cons, attr, els.r)
					});
			case 5:
				return _Utils_update(
					els,
					{
						r: A2($elm$core$List$cons, attr, els.r)
					});
			case 4:
				switch (attr.b.$) {
					case 5:
						var _v1 = attr.b;
						return _Utils_update(
							els,
							{
								r: A2($elm$core$List$cons, attr, els.r),
								aQ: A2($elm$core$List$cons, attr, els.aQ),
								g: A2($elm$core$List$cons, attr, els.g),
								cg: A2($elm$core$List$cons, attr, els.cg)
							});
					case 7:
						var cls = attr.a;
						var _v2 = attr.b;
						var pad = _v2.a;
						var t = _v2.b;
						var r = _v2.c;
						var b = _v2.d;
						var l = _v2.e;
						if (isMultiline) {
							return _Utils_update(
								els,
								{
									ah: A2($elm$core$List$cons, attr, els.ah),
									g: A2($elm$core$List$cons, attr, els.g)
								});
						} else {
							var newTop = t - A2($elm$core$Basics$min, t, b);
							var newLineHeight = $mdgriffith$elm_ui$Element$htmlAttribute(
								A2(
									$elm$html$Html$Attributes$style,
									'line-height',
									'calc(1.0em + ' + ($elm$core$String$fromFloat(
										2 * A2($elm$core$Basics$min, t, b)) + 'px)')));
							var newHeight = $mdgriffith$elm_ui$Element$htmlAttribute(
								A2(
									$elm$html$Html$Attributes$style,
									'height',
									'calc(1.0em + ' + ($elm$core$String$fromFloat(
										2 * A2($elm$core$Basics$min, t, b)) + 'px)')));
							var newBottom = b - A2($elm$core$Basics$min, t, b);
							var reducedVerticalPadding = A2(
								$mdgriffith$elm_ui$Internal$Model$StyleClass,
								$mdgriffith$elm_ui$Internal$Flag$padding,
								A5(
									$mdgriffith$elm_ui$Internal$Model$PaddingStyle,
									A4($mdgriffith$elm_ui$Internal$Model$paddingNameFloat, newTop, r, newBottom, l),
									newTop,
									r,
									newBottom,
									l));
							return _Utils_update(
								els,
								{
									ah: A2($elm$core$List$cons, attr, els.ah),
									aQ: A2(
										$elm$core$List$cons,
										newHeight,
										A2($elm$core$List$cons, newLineHeight, els.aQ)),
									g: A2($elm$core$List$cons, reducedVerticalPadding, els.g)
								});
						}
					case 6:
						var _v3 = attr.b;
						return _Utils_update(
							els,
							{
								ah: A2($elm$core$List$cons, attr, els.ah),
								g: A2($elm$core$List$cons, attr, els.g)
							});
					case 10:
						return _Utils_update(
							els,
							{
								ah: A2($elm$core$List$cons, attr, els.ah),
								g: A2($elm$core$List$cons, attr, els.g)
							});
					case 2:
						return _Utils_update(
							els,
							{
								r: A2($elm$core$List$cons, attr, els.r)
							});
					case 1:
						var _v4 = attr.b;
						return _Utils_update(
							els,
							{
								r: A2($elm$core$List$cons, attr, els.r)
							});
					default:
						var flag = attr.a;
						var cls = attr.b;
						return _Utils_update(
							els,
							{
								g: A2($elm$core$List$cons, attr, els.g)
							});
				}
			case 0:
				return els;
			case 1:
				var a = attr.a;
				return _Utils_update(
					els,
					{
						aQ: A2($elm$core$List$cons, attr, els.aQ)
					});
			case 2:
				return _Utils_update(
					els,
					{
						aQ: A2($elm$core$List$cons, attr, els.aQ)
					});
			case 3:
				return _Utils_update(
					els,
					{
						g: A2($elm$core$List$cons, attr, els.g)
					});
			default:
				return _Utils_update(
					els,
					{
						aQ: A2($elm$core$List$cons, attr, els.aQ)
					});
		}
	});
var $mdgriffith$elm_ui$Element$Input$redistribute = F3(
	function (isMultiline, stacked, attrs) {
		return function (redist) {
			return {
				ah: $elm$core$List$reverse(redist.ah),
				r: $elm$core$List$reverse(redist.r),
				aQ: $elm$core$List$reverse(redist.aQ),
				g: $elm$core$List$reverse(redist.g),
				cg: $elm$core$List$reverse(redist.cg)
			};
		}(
			A3(
				$elm$core$List$foldl,
				A2($mdgriffith$elm_ui$Element$Input$redistributeOver, isMultiline, stacked),
				{ah: _List_Nil, r: _List_Nil, aQ: _List_Nil, g: _List_Nil, cg: _List_Nil},
				attrs));
	});
var $mdgriffith$elm_ui$Element$Input$renderBox = function (_v0) {
	var left = _v0.cY;
	var bottom = _v0.cn;
	var right = _v0.de;
	var top = _v0.dp;
	return $elm$core$String$fromInt(top) + ('px ' + ($elm$core$String$fromInt(right) + ('px ' + ($elm$core$String$fromInt(bottom) + ('px ' + ($elm$core$String$fromInt(left) + 'px'))))));
};
var $mdgriffith$elm_ui$Internal$Model$Transparency = F2(
	function (a, b) {
		return {$: 12, a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Flag$transparency = $mdgriffith$elm_ui$Internal$Flag$flag(0);
var $mdgriffith$elm_ui$Element$alpha = function (o) {
	var transparency = function (x) {
		return 1 - x;
	}(
		A2(
			$elm$core$Basics$min,
			1.0,
			A2($elm$core$Basics$max, 0.0, o)));
	return A2(
		$mdgriffith$elm_ui$Internal$Model$StyleClass,
		$mdgriffith$elm_ui$Internal$Flag$transparency,
		A2(
			$mdgriffith$elm_ui$Internal$Model$Transparency,
			'transparency-' + $mdgriffith$elm_ui$Internal$Model$floatClass(transparency),
			transparency));
};
var $mdgriffith$elm_ui$Element$Input$charcoal = A3($mdgriffith$elm_ui$Element$rgb, 136 / 255, 138 / 255, 133 / 255);
var $mdgriffith$elm_ui$Element$rgba = $mdgriffith$elm_ui$Internal$Model$Rgba;
var $mdgriffith$elm_ui$Element$Input$renderPlaceholder = F3(
	function (_v0, forPlaceholder, on) {
		var placeholderAttrs = _v0.a;
		var placeholderEl = _v0.b;
		return A2(
			$mdgriffith$elm_ui$Element$el,
			_Utils_ap(
				forPlaceholder,
				_Utils_ap(
					_List_fromArray(
						[
							$mdgriffith$elm_ui$Element$Font$color($mdgriffith$elm_ui$Element$Input$charcoal),
							$mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.fE + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.hS)),
							$mdgriffith$elm_ui$Element$clip,
							$mdgriffith$elm_ui$Element$Border$color(
							A4($mdgriffith$elm_ui$Element$rgba, 0, 0, 0, 0)),
							$mdgriffith$elm_ui$Element$Background$color(
							A4($mdgriffith$elm_ui$Element$rgba, 0, 0, 0, 0)),
							$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$fill),
							$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
							$mdgriffith$elm_ui$Element$alpha(
							on ? 1 : 0)
						]),
					placeholderAttrs)),
			placeholderEl);
	});
var $mdgriffith$elm_ui$Element$scrollbarY = A2($mdgriffith$elm_ui$Internal$Model$Class, $mdgriffith$elm_ui$Internal$Flag$overflow, $mdgriffith$elm_ui$Internal$Style$classes.h$);
var $elm$html$Html$span = _VirtualDom_node('span');
var $elm$html$Html$Attributes$spellcheck = $elm$html$Html$Attributes$boolProperty('spellcheck');
var $mdgriffith$elm_ui$Element$Input$spellcheck = A2($elm$core$Basics$composeL, $mdgriffith$elm_ui$Internal$Model$Attr, $elm$html$Html$Attributes$spellcheck);
var $elm$html$Html$Attributes$type_ = $elm$html$Html$Attributes$stringProperty('type');
var $mdgriffith$elm_ui$Internal$Model$unstyled = A2($elm$core$Basics$composeL, $mdgriffith$elm_ui$Internal$Model$Unstyled, $elm$core$Basics$always);
var $elm$html$Html$Attributes$value = $elm$html$Html$Attributes$stringProperty('value');
var $mdgriffith$elm_ui$Element$Input$value = A2($elm$core$Basics$composeL, $mdgriffith$elm_ui$Internal$Model$Attr, $elm$html$Html$Attributes$value);
var $mdgriffith$elm_ui$Element$Input$textHelper = F3(
	function (textInput, attrs, textOptions) {
		var withDefaults = _Utils_ap($mdgriffith$elm_ui$Element$Input$defaultTextBoxStyle, attrs);
		var redistributed = A3(
			$mdgriffith$elm_ui$Element$Input$redistribute,
			_Utils_eq(textInput.D, $mdgriffith$elm_ui$Element$Input$TextArea),
			$mdgriffith$elm_ui$Element$Input$isStacked(textOptions.bS),
			withDefaults);
		var onlySpacing = function (attr) {
			if ((attr.$ === 4) && (attr.b.$ === 5)) {
				var _v9 = attr.b;
				return true;
			} else {
				return false;
			}
		};
		var heightConstrained = function () {
			var _v7 = textInput.D;
			if (!_v7.$) {
				var inputType = _v7.a;
				return false;
			} else {
				return A2(
					$elm$core$Maybe$withDefault,
					false,
					A2(
						$elm$core$Maybe$map,
						$mdgriffith$elm_ui$Element$Input$isConstrained,
						$elm$core$List$head(
							$elm$core$List$reverse(
								A2($elm$core$List$filterMap, $mdgriffith$elm_ui$Element$Input$getHeight, withDefaults)))));
			}
		}();
		var getPadding = function (attr) {
			if ((attr.$ === 4) && (attr.b.$ === 7)) {
				var cls = attr.a;
				var _v6 = attr.b;
				var pad = _v6.a;
				var t = _v6.b;
				var r = _v6.c;
				var b = _v6.d;
				var l = _v6.e;
				return $elm$core$Maybe$Just(
					{
						cn: A2(
							$elm$core$Basics$max,
							0,
							$elm$core$Basics$floor(b - 3)),
						cY: A2(
							$elm$core$Basics$max,
							0,
							$elm$core$Basics$floor(l - 3)),
						de: A2(
							$elm$core$Basics$max,
							0,
							$elm$core$Basics$floor(r - 3)),
						dp: A2(
							$elm$core$Basics$max,
							0,
							$elm$core$Basics$floor(t - 3))
					});
			} else {
				return $elm$core$Maybe$Nothing;
			}
		};
		var parentPadding = A2(
			$elm$core$Maybe$withDefault,
			{cn: 0, cY: 0, de: 0, dp: 0},
			$elm$core$List$head(
				$elm$core$List$reverse(
					A2($elm$core$List$filterMap, getPadding, withDefaults))));
		var inputElement = A4(
			$mdgriffith$elm_ui$Internal$Model$element,
			$mdgriffith$elm_ui$Internal$Model$asEl,
			function () {
				var _v3 = textInput.D;
				if (!_v3.$) {
					var inputType = _v3.a;
					return $mdgriffith$elm_ui$Internal$Model$NodeName('input');
				} else {
					return $mdgriffith$elm_ui$Internal$Model$NodeName('textarea');
				}
			}(),
			_Utils_ap(
				function () {
					var _v4 = textInput.D;
					if (!_v4.$) {
						var inputType = _v4.a;
						return _List_fromArray(
							[
								$mdgriffith$elm_ui$Internal$Model$Attr(
								$elm$html$Html$Attributes$type_(inputType)),
								$mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.hr)
							]);
					} else {
						return _List_fromArray(
							[
								$mdgriffith$elm_ui$Element$clip,
								$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$fill),
								$mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.hn),
								$mdgriffith$elm_ui$Element$Input$calcMoveToCompensateForPadding(withDefaults),
								$mdgriffith$elm_ui$Element$paddingEach(parentPadding),
								$mdgriffith$elm_ui$Internal$Model$Attr(
								A2(
									$elm$html$Html$Attributes$style,
									'margin',
									$mdgriffith$elm_ui$Element$Input$renderBox(
										$mdgriffith$elm_ui$Element$Input$negateBox(parentPadding)))),
								$mdgriffith$elm_ui$Internal$Model$Attr(
								A2($elm$html$Html$Attributes$style, 'box-sizing', 'content-box'))
							]);
					}
				}(),
				_Utils_ap(
					_List_fromArray(
						[
							$mdgriffith$elm_ui$Element$Input$value(textOptions.ih),
							$mdgriffith$elm_ui$Internal$Model$Attr(
							$elm$html$Html$Events$onInput(textOptions.hH)),
							$mdgriffith$elm_ui$Element$Input$hiddenLabelAttribute(textOptions.bS),
							$mdgriffith$elm_ui$Element$Input$spellcheck(textInput.ab),
							A2(
							$elm$core$Maybe$withDefault,
							$mdgriffith$elm_ui$Internal$Model$NoAttribute,
							A2($elm$core$Maybe$map, $mdgriffith$elm_ui$Element$Input$autofill, textInput.R))
						]),
					redistributed.aQ)),
			$mdgriffith$elm_ui$Internal$Model$Unkeyed(_List_Nil));
		var wrappedInput = function () {
			var _v0 = textInput.D;
			if (_v0.$ === 1) {
				return A4(
					$mdgriffith$elm_ui$Internal$Model$element,
					$mdgriffith$elm_ui$Internal$Model$asEl,
					$mdgriffith$elm_ui$Internal$Model$div,
					_Utils_ap(
						(heightConstrained ? $elm$core$List$cons($mdgriffith$elm_ui$Element$scrollbarY) : $elm$core$Basics$identity)(
							_List_fromArray(
								[
									$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
									A2($elm$core$List$any, $mdgriffith$elm_ui$Element$Input$hasFocusStyle, withDefaults) ? $mdgriffith$elm_ui$Internal$Model$NoAttribute : $mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.fe),
									$mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.hq)
								])),
						redistributed.g),
					$mdgriffith$elm_ui$Internal$Model$Unkeyed(
						_List_fromArray(
							[
								A4(
								$mdgriffith$elm_ui$Internal$Model$element,
								$mdgriffith$elm_ui$Internal$Model$asParagraph,
								$mdgriffith$elm_ui$Internal$Model$div,
								A2(
									$elm$core$List$cons,
									$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
									A2(
										$elm$core$List$cons,
										$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$fill),
										A2(
											$elm$core$List$cons,
											$mdgriffith$elm_ui$Element$inFront(inputElement),
											A2(
												$elm$core$List$cons,
												$mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.hp),
												redistributed.cg)))),
								$mdgriffith$elm_ui$Internal$Model$Unkeyed(
									function () {
										if (textOptions.ih === '') {
											var _v1 = textOptions.hT;
											if (_v1.$ === 1) {
												return _List_fromArray(
													[
														$mdgriffith$elm_ui$Element$text('\u00A0')
													]);
											} else {
												var place = _v1.a;
												return _List_fromArray(
													[
														A3($mdgriffith$elm_ui$Element$Input$renderPlaceholder, place, _List_Nil, textOptions.ih === '')
													]);
											}
										} else {
											return _List_fromArray(
												[
													$mdgriffith$elm_ui$Internal$Model$unstyled(
													A2(
														$elm$html$Html$span,
														_List_fromArray(
															[
																$elm$html$Html$Attributes$class($mdgriffith$elm_ui$Internal$Style$classes.ho)
															]),
														_List_fromArray(
															[
																$elm$html$Html$text(textOptions.ih + '\u00A0')
															])))
												]);
										}
									}()))
							])));
			} else {
				var inputType = _v0.a;
				return A4(
					$mdgriffith$elm_ui$Internal$Model$element,
					$mdgriffith$elm_ui$Internal$Model$asEl,
					$mdgriffith$elm_ui$Internal$Model$div,
					A2(
						$elm$core$List$cons,
						$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
						A2(
							$elm$core$List$cons,
							A2($elm$core$List$any, $mdgriffith$elm_ui$Element$Input$hasFocusStyle, withDefaults) ? $mdgriffith$elm_ui$Internal$Model$NoAttribute : $mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.fe),
							$elm$core$List$concat(
								_List_fromArray(
									[
										redistributed.g,
										function () {
										var _v2 = textOptions.hT;
										if (_v2.$ === 1) {
											return _List_Nil;
										} else {
											var place = _v2.a;
											return _List_fromArray(
												[
													$mdgriffith$elm_ui$Element$behindContent(
													A3($mdgriffith$elm_ui$Element$Input$renderPlaceholder, place, redistributed.ah, textOptions.ih === ''))
												]);
										}
									}()
									])))),
					$mdgriffith$elm_ui$Internal$Model$Unkeyed(
						_List_fromArray(
							[inputElement])));
			}
		}();
		return A3(
			$mdgriffith$elm_ui$Element$Input$applyLabel,
			A2(
				$elm$core$List$cons,
				A2($mdgriffith$elm_ui$Internal$Model$Class, $mdgriffith$elm_ui$Internal$Flag$cursor, $mdgriffith$elm_ui$Internal$Style$classes.gV),
				A2(
					$elm$core$List$cons,
					$mdgriffith$elm_ui$Element$Input$isHiddenLabel(textOptions.bS) ? $mdgriffith$elm_ui$Internal$Model$NoAttribute : $mdgriffith$elm_ui$Element$spacing(5),
					A2($elm$core$List$cons, $mdgriffith$elm_ui$Element$Region$announce, redistributed.r))),
			textOptions.bS,
			wrappedInput);
	});
var $mdgriffith$elm_ui$Element$Input$multiline = F2(
	function (attrs, multi) {
		return A3(
			$mdgriffith$elm_ui$Element$Input$textHelper,
			{R: $elm$core$Maybe$Nothing, ab: multi.h7, D: $mdgriffith$elm_ui$Element$Input$TextArea},
			attrs,
			{bS: multi.bS, hH: multi.hH, hT: multi.hT, ih: multi.ih});
	});
var $author$project$Main$parserDisplayPanelHeight_ = 0;
var $author$project$Main$panelHeight_ = function (model) {
	return ($author$project$Main$appHeight_(model) - $author$project$Main$parserDisplayPanelHeight_) - 100;
};
var $mdgriffith$elm_ui$Internal$Model$Px = function (a) {
	return {$: 0, a: a};
};
var $mdgriffith$elm_ui$Element$px = $mdgriffith$elm_ui$Internal$Model$Px;
var $author$project$Main$inputText = function (model) {
	return A2(
		$mdgriffith$elm_ui$Element$Input$multiline,
		_List_fromArray(
			[
				$mdgriffith$elm_ui$Element$height(
				$mdgriffith$elm_ui$Element$px(
					$author$project$Main$panelHeight_(model))),
				$mdgriffith$elm_ui$Element$width(
				$mdgriffith$elm_ui$Element$px($author$project$Main$panelWidth_)),
				$mdgriffith$elm_ui$Element$Font$size(14)
			]),
		{
			bS: $mdgriffith$elm_ui$Element$Input$labelHidden('Enter source text here'),
			hH: $author$project$Main$InputText,
			hT: $elm$core$Maybe$Nothing,
			h7: false,
			ih: model.aQ
		});
};
var $mdgriffith$elm_ui$Element$row = F2(
	function (attrs, children) {
		return A4(
			$mdgriffith$elm_ui$Internal$Model$element,
			$mdgriffith$elm_ui$Internal$Model$asRow,
			$mdgriffith$elm_ui$Internal$Model$div,
			A2(
				$elm$core$List$cons,
				$mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.cv + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.a$)),
				A2(
					$elm$core$List$cons,
					$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$shrink),
					A2(
						$elm$core$List$cons,
						$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$shrink),
						attrs))),
			$mdgriffith$elm_ui$Internal$Model$Unkeyed(children));
	});
var $author$project$Main$inputElement = function (model) {
	return A2(
		$mdgriffith$elm_ui$Element$column,
		_List_fromArray(
			[
				$mdgriffith$elm_ui$Element$spacing(8),
				$mdgriffith$elm_ui$Element$moveUp(9)
			]),
		_List_fromArray(
			[
				A2(
				$mdgriffith$elm_ui$Element$row,
				_List_fromArray(
					[
						$mdgriffith$elm_ui$Element$spacing(12)
					]),
				_List_fromArray(
					[
						$author$project$Main$clearTextButton,
						$author$project$Main$getDocumentButton('announcement'),
						$author$project$Main$getDocumentButton('notes'),
						$author$project$Main$getDocumentButton('manual')
					])),
				$author$project$Main$inputText(model)
			]));
};
var $author$project$Main$mainColumnStyle = function (model) {
	return _List_fromArray(
		[
			$mdgriffith$elm_ui$Element$centerX,
			$mdgriffith$elm_ui$Element$centerY,
			$author$project$Main$bgGray(0.5),
			A2($mdgriffith$elm_ui$Element$paddingXY, 20, 20),
			$mdgriffith$elm_ui$Element$width(
			$mdgriffith$elm_ui$Element$px($author$project$Main$appWidth_ + 40)),
			$mdgriffith$elm_ui$Element$height(
			$mdgriffith$elm_ui$Element$px(
				$author$project$Main$appHeight_(model) + 40))
		]);
};
var $author$project$Main$buttonStyle = _List_fromArray(
	[
		$mdgriffith$elm_ui$Element$Font$color(
		A3($mdgriffith$elm_ui$Element$rgb255, 255, 255, 255)),
		A2($mdgriffith$elm_ui$Element$paddingXY, 15, 8)
	]);
var $author$project$Main$defaultButtonColor = A3($mdgriffith$elm_ui$Element$rgb255, 60, 60, 60);
var $author$project$Main$dummyButton = A2(
	$mdgriffith$elm_ui$Element$row,
	_List_fromArray(
		[
			$mdgriffith$elm_ui$Element$Background$color($author$project$Main$defaultButtonColor)
		]),
	_List_fromArray(
		[
			A2(
			$mdgriffith$elm_ui$Element$Input$button,
			$author$project$Main$buttonStyle,
			{
				bS: A2(
					$mdgriffith$elm_ui$Element$el,
					_List_fromArray(
						[
							$mdgriffith$elm_ui$Element$centerX,
							$mdgriffith$elm_ui$Element$centerY,
							$mdgriffith$elm_ui$Element$Font$size(14)
						]),
					$mdgriffith$elm_ui$Element$text('Rendered text')),
				c2: $elm$core$Maybe$Nothing
			})
		]));
var $author$project$Main$fontGray = function (g) {
	return $mdgriffith$elm_ui$Element$Font$color(
		A3($mdgriffith$elm_ui$Element$rgb, g, g, g));
};
var $folkertdev$elm_paragraph$SymmetricList$last = function (_v0) {
	var y = _v0.a;
	var x = _v0.b;
	return (!$elm$core$List$isEmpty(x)) ? $elm$core$List$head(x) : $elm$core$List$head(y);
};
var $folkertdev$elm_paragraph$Paragraph$fold1 = F3(
	function (f, g, list) {
		if (!list.b) {
			return $elm$core$Maybe$Nothing;
		} else {
			if (!list.b.b) {
				var a = list.a;
				return $elm$core$Maybe$Just(
					g(a));
			} else {
				var a = list.a;
				var x = list.b;
				return A2(
					$elm$core$Maybe$map,
					function (xs) {
						return A2(f, a, xs);
					},
					A3($folkertdev$elm_paragraph$Paragraph$fold1, f, g, x));
			}
		}
	});
var $folkertdev$elm_paragraph$Paragraph$scan1 = F3(
	function (f, g, list) {
		var g_ = function (a) {
			return _List_fromArray(
				[
					g(a)
				]);
		};
		var f_ = F2(
			function (a, s) {
				if (!s.b) {
					return s;
				} else {
					var first = s.a;
					var rest = s.b;
					return A2(
						$elm$core$List$cons,
						A2(f, a, first),
						s);
				}
			});
		return A2(
			$elm$core$Maybe$withDefault,
			_List_Nil,
			A3($folkertdev$elm_paragraph$Paragraph$fold1, f_, g_, list));
	});
var $folkertdev$elm_paragraph$SymmetricList$SymmetricList = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $folkertdev$elm_paragraph$SymmetricList$cons = F2(
	function (a, _v0) {
		var x = _v0.a;
		var y = _v0.b;
		return (!$elm$core$List$isEmpty(y)) ? A2(
			$folkertdev$elm_paragraph$SymmetricList$SymmetricList,
			A2($elm$core$List$cons, a, x),
			y) : A2(
			$folkertdev$elm_paragraph$SymmetricList$SymmetricList,
			_List_fromArray(
				[a]),
			x);
	});
var $folkertdev$elm_paragraph$SymmetricList$empty = A2($folkertdev$elm_paragraph$SymmetricList$SymmetricList, _List_Nil, _List_Nil);
var $folkertdev$elm_paragraph$SymmetricList$singleton = function (x) {
	return A2($folkertdev$elm_paragraph$SymmetricList$cons, x, $folkertdev$elm_paragraph$SymmetricList$empty);
};
var $folkertdev$elm_paragraph$Paragraph$startr = function (width) {
	return {
		bx: $folkertdev$elm_paragraph$SymmetricList$singleton(
			{hw: 0, dt: 0, gc: 0}),
		hw: 1,
		gc: width
	};
};
var $folkertdev$elm_paragraph$Paragraph$ceildiv = F2(
	function (n, m) {
		return (((n + m) - 1) / m) | 0;
	});
var $folkertdev$elm_paragraph$SymmetricList$head = function (_v0) {
	var x = _v0.a;
	var y = _v0.b;
	return (!$elm$core$List$isEmpty(x)) ? $elm$core$List$head(x) : $elm$core$List$head(y);
};
var $elm$core$Basics$pow = _Basics_pow;
var $folkertdev$elm_paragraph$Paragraph$single = function (p) {
	return !p.hw;
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
var $folkertdev$elm_paragraph$SymmetricList$splitAt = F2(
	function (n, xs) {
		return _Utils_Tuple2(
			A2($elm$core$List$take, n, xs),
			A2($elm$core$List$drop, n, xs));
	});
var $folkertdev$elm_paragraph$SymmetricList$tail = function (_v0) {
	var x = _v0.a;
	var y = _v0.b;
	var _v1 = A2(
		$folkertdev$elm_paragraph$SymmetricList$splitAt,
		($elm$core$List$length(y) / 2) | 0,
		y);
	var y0 = _v1.a;
	var y1 = _v1.b;
	if (!x.b) {
		return $folkertdev$elm_paragraph$SymmetricList$empty;
	} else {
		if (!x.b.b) {
			return A2(
				$folkertdev$elm_paragraph$SymmetricList$SymmetricList,
				$elm$core$List$reverse(y1),
				y0);
		} else {
			var rest = x.b;
			return A2($folkertdev$elm_paragraph$SymmetricList$SymmetricList, rest, y);
		}
	}
};
var $folkertdev$elm_paragraph$SymmetricList$uncons = function (symlist) {
	var _v0 = $folkertdev$elm_paragraph$SymmetricList$head(symlist);
	if (!_v0.$) {
		var v = _v0.a;
		return $elm$core$Maybe$Just(
			_Utils_Tuple2(
				v,
				$folkertdev$elm_paragraph$SymmetricList$tail(symlist)));
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $folkertdev$elm_paragraph$SymmetricList$init = function (_v0) {
	var y = _v0.a;
	var x = _v0.b;
	var _v1 = A2(
		$folkertdev$elm_paragraph$SymmetricList$splitAt,
		($elm$core$List$length(y) / 2) | 0,
		y);
	var y0 = _v1.a;
	var y1 = _v1.b;
	if (!x.b) {
		return $folkertdev$elm_paragraph$SymmetricList$empty;
	} else {
		if (!x.b.b) {
			return A2(
				$folkertdev$elm_paragraph$SymmetricList$SymmetricList,
				y0,
				$elm$core$List$reverse(y1));
		} else {
			var rest = x.b;
			return A2($folkertdev$elm_paragraph$SymmetricList$SymmetricList, y, rest);
		}
	}
};
var $folkertdev$elm_paragraph$SymmetricList$unsnoc = function (symlist) {
	var _v0 = $folkertdev$elm_paragraph$SymmetricList$last(symlist);
	if (!_v0.$) {
		var v = _v0.a;
		return $elm$core$Maybe$Just(
			_Utils_Tuple2(
				$folkertdev$elm_paragraph$SymmetricList$init(symlist),
				v));
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $folkertdev$elm_paragraph$Paragraph$stepr = F3(
	function (options, w, state) {
		var tot_width = (w + 1) + state.gc;
		var width_hd = function (p) {
			return (tot_width - p.gc) - 1;
		};
		var waste = function (p) {
			return $folkertdev$elm_paragraph$Paragraph$single(p) ? 0 : (p.dt + A2(
				$elm$core$Basics$pow,
				options.fH - width_hd(p),
				2));
		};
		var tot_len = 1 + state.hw;
		var old_width_hd = function (p) {
			return (state.gc - p.gc) - 1;
		};
		var _new = function (p) {
			return $folkertdev$elm_paragraph$Paragraph$single(p) ? {hw: state.hw, dt: 0, gc: state.gc} : {
				hw: state.hw,
				dt: p.gc + A2(
					$elm$core$Basics$pow,
					options.fH - old_width_hd(p),
					2),
				gc: state.gc
			};
		};
		var k = F2(
			function (p, q) {
				var wq0 = width_hd(q);
				var wp0 = width_hd(p);
				var rq0 = (options.fA - wq0) + 1;
				return ($folkertdev$elm_paragraph$Paragraph$single(q) && (!p.gc)) ? A2($elm$core$Basics$min, options.fH - wp0, rq0) : ($folkertdev$elm_paragraph$Paragraph$single(q) ? rq0 : A2(
					$elm$core$Basics$min,
					A2(
						$folkertdev$elm_paragraph$Paragraph$ceildiv,
						waste(p) - waste(q),
						2 * (wq0 - wp0)),
					rq0));
			});
		var discardBadCandidates = function (ps_pq) {
			discardBadCandidates:
			while (true) {
				var _v0 = $folkertdev$elm_paragraph$SymmetricList$unsnoc(ps_pq);
				if (_v0.$ === 1) {
					return ps_pq;
				} else {
					var _v1 = _v0.a;
					var ps_p = _v1.a;
					var q = _v1.b;
					var _v2 = $folkertdev$elm_paragraph$SymmetricList$last(ps_p);
					if (_v2.$ === 1) {
						return (_Utils_cmp(
							width_hd(q),
							options.fA) > 0) ? $folkertdev$elm_paragraph$SymmetricList$empty : ps_pq;
					} else {
						var p = _v2.a;
						if ((_Utils_cmp(
							waste(p),
							waste(q)) < 1) || (_Utils_cmp(
							width_hd(q),
							options.fA) > 0)) {
							var $temp$ps_pq = ps_p;
							ps_pq = $temp$ps_pq;
							continue discardBadCandidates;
						} else {
							return ps_pq;
						}
					}
				}
			}
		};
		var add = F2(
			function (p, qr_rs) {
				add:
				while (true) {
					var _default = A2($folkertdev$elm_paragraph$SymmetricList$cons, p, qr_rs);
					var _v3 = $folkertdev$elm_paragraph$SymmetricList$uncons(qr_rs);
					if (_v3.$ === 1) {
						return _default;
					} else {
						var _v4 = _v3.a;
						var q = _v4.a;
						var r_rs = _v4.b;
						var _v5 = $folkertdev$elm_paragraph$SymmetricList$head(r_rs);
						if (!_v5.$) {
							var r = _v5.a;
							if (_Utils_cmp(
								A2(k, p, q),
								A2(k, q, r)) < 1) {
								var $temp$p = p,
									$temp$qr_rs = r_rs;
								p = $temp$p;
								qr_rs = $temp$qr_rs;
								continue add;
							} else {
								return _default;
							}
						} else {
							return _default;
						}
					}
				}
			});
		var _v6 = $folkertdev$elm_paragraph$SymmetricList$last(state.bx);
		if (_v6.$ === 1) {
			return state;
		} else {
			var last = _v6.a;
			var input = A2(
				add,
				_new(last),
				state.bx);
			var newCandidates = discardBadCandidates(input);
			return {bx: newCandidates, hw: tot_len, gc: tot_width};
		}
	});
var $folkertdev$elm_paragraph$Paragraph$splitAt = F2(
	function (n, xs) {
		return _Utils_Tuple2(
			A2($elm$core$List$take, n, xs),
			A2($elm$core$List$drop, n, xs));
	});
var $folkertdev$elm_paragraph$Paragraph$tile = F2(
	function (words, _v0) {
		var wordLengths = _v0.a;
		var targetLength = _v0.b;
		if (!wordLengths.b) {
			return _List_Nil;
		} else {
			var m = wordLengths.a;
			var ms = wordLengths.b;
			var remainingSpace = targetLength - m;
			var _v2 = A2($folkertdev$elm_paragraph$Paragraph$splitAt, remainingSpace, words);
			var usedWords = _v2.a;
			var remainingWords = _v2.b;
			return A2(
				$elm$core$List$cons,
				usedWords,
				A2(
					$folkertdev$elm_paragraph$Paragraph$tile,
					remainingWords,
					_Utils_Tuple2(
						A2(
							$elm$core$List$drop,
							remainingSpace,
							A2($elm$core$List$cons, m, ms)),
						m)));
		}
	});
var $folkertdev$elm_paragraph$Paragraph$paragraph = F2(
	function (options, words) {
		var zs = A3(
			$folkertdev$elm_paragraph$Paragraph$scan1,
			$folkertdev$elm_paragraph$Paragraph$stepr(options),
			$folkertdev$elm_paragraph$Paragraph$startr,
			A2($elm$core$List$map, options.f4, words));
		if (!zs.b) {
			return _List_Nil;
		} else {
			var first = zs.a;
			var rest = zs.b;
			var wordLengths = A2(
				$elm$core$List$filterMap,
				A2(
					$elm$core$Basics$composeL,
					A2(
						$elm$core$Basics$composeL,
						$elm$core$Maybe$map(
							function ($) {
								return $.hw;
							}),
						$folkertdev$elm_paragraph$SymmetricList$last),
					function ($) {
						return $.bx;
					}),
				zs);
			var targetLength = first.hw;
			return A2(
				$folkertdev$elm_paragraph$Paragraph$tile,
				words,
				_Utils_Tuple2(wordLengths, targetLength));
		}
	});
var $elm$core$String$lines = _String_lines;
var $folkertdev$elm_paragraph$Paragraph$do = F2(
	function (a, list) {
		if (!list.b) {
			return _List_fromArray(
				[_List_Nil]);
		} else {
			var first = list.a;
			var rest = list.b;
			var _break = F3(
				function (p, q, xs) {
					if (_Utils_eq(p, q)) {
						return A2($elm$core$List$cons, _List_Nil, xs);
					} else {
						if (!xs.b) {
							return A2(
								$elm$core$List$cons,
								A2($elm$core$List$cons, q, _List_Nil),
								_List_Nil);
						} else {
							var y = xs.a;
							var ys = xs.b;
							return A2(
								$elm$core$List$cons,
								A2($elm$core$List$cons, q, y),
								ys);
						}
					}
				});
			var start = F2(
				function (p, q) {
					return A3(
						_break,
						p,
						q,
						_List_fromArray(
							[_List_Nil]));
				});
			return A2(
				$elm$core$Maybe$withDefault,
				_List_fromArray(
					[_List_Nil]),
				A3(
					$folkertdev$elm_paragraph$Paragraph$fold1,
					_break(a),
					start(a),
					list));
		}
	});
var $folkertdev$elm_paragraph$Paragraph$paras = A2(
	$elm$core$Basics$composeL,
	$elm$core$List$filter(
		A2($elm$core$Basics$composeL, $elm$core$Basics$not, $elm$core$List$isEmpty)),
	$folkertdev$elm_paragraph$Paragraph$do(_List_Nil));
var $folkertdev$elm_paragraph$Paragraph$parse = A2(
	$elm$core$Basics$composeL,
	A2(
		$elm$core$Basics$composeL,
		$folkertdev$elm_paragraph$Paragraph$paras,
		$elm$core$List$map($elm$core$String$words)),
	$elm$core$String$lines);
var $folkertdev$elm_paragraph$Paragraph$undo = function (a) {
	var insert = F2(
		function (xs, ys) {
			return _Utils_ap(
				xs,
				_Utils_ap(
					_List_fromArray(
						[a]),
					ys));
		});
	return A2(
		$elm$core$Basics$composeL,
		$elm$core$Maybe$withDefault(_List_Nil),
		A2($folkertdev$elm_paragraph$Paragraph$fold1, insert, $elm$core$Basics$identity));
};
var $folkertdev$elm_paragraph$Paragraph$unparas = $folkertdev$elm_paragraph$Paragraph$undo(_List_Nil);
var $folkertdev$elm_paragraph$Paragraph$lines = function (options) {
	return A2(
		$elm$core$Basics$composeL,
		A2(
			$elm$core$Basics$composeL,
			A2(
				$elm$core$Basics$composeL,
				$elm$core$List$map(
					$elm$core$String$join(' ')),
				$folkertdev$elm_paragraph$Paragraph$unparas),
			$elm$core$List$map(
				A2(
					$elm$core$Basics$composeL,
					$folkertdev$elm_paragraph$Paragraph$paragraph(options),
					$elm$core$List$concat))),
		$folkertdev$elm_paragraph$Paragraph$parse);
};
var $author$project$Main$paragraphFormat = {fA: 80, fH: 70, f4: $elm$core$String$length};
var $author$project$Main$CYTMsg = function (a) {
	return {$: 5, a: a};
};
var $author$project$Main$initStateWithData = F2(
	function (k, data) {
		return {eZ: 0, bI: k, fK: data, f_: '', gc: 300};
	});
var $mdgriffith$elm_ui$Internal$Model$Empty = {$: 3};
var $elm$virtual_dom$VirtualDom$map = _VirtualDom_map;
var $mdgriffith$elm_ui$Internal$Model$map = F2(
	function (fn, el) {
		switch (el.$) {
			case 1:
				var styled = el.a;
				return $mdgriffith$elm_ui$Internal$Model$Styled(
					{
						hh: F2(
							function (add, context) {
								return A2(
									$elm$virtual_dom$VirtualDom$map,
									fn,
									A2(styled.hh, add, context));
							}),
						f5: styled.f5
					});
			case 0:
				var html = el.a;
				return $mdgriffith$elm_ui$Internal$Model$Unstyled(
					A2(
						$elm$core$Basics$composeL,
						$elm$virtual_dom$VirtualDom$map(fn),
						html));
			case 2:
				var str = el.a;
				return $mdgriffith$elm_ui$Internal$Model$Text(str);
			default:
				return $mdgriffith$elm_ui$Internal$Model$Empty;
		}
	});
var $mdgriffith$elm_ui$Element$map = $mdgriffith$elm_ui$Internal$Model$map;
var $author$project$Render$Elm$format = _List_Nil;
var $mdgriffith$elm_ui$Internal$Model$Paragraph = {$: 9};
var $mdgriffith$elm_ui$Element$paragraph = F2(
	function (attrs, children) {
		return A4(
			$mdgriffith$elm_ui$Internal$Model$element,
			$mdgriffith$elm_ui$Internal$Model$asParagraph,
			$mdgriffith$elm_ui$Internal$Model$div,
			A2(
				$elm$core$List$cons,
				$mdgriffith$elm_ui$Internal$Model$Describe($mdgriffith$elm_ui$Internal$Model$Paragraph),
				A2(
					$elm$core$List$cons,
					$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
					A2(
						$elm$core$List$cons,
						$mdgriffith$elm_ui$Element$spacing(5),
						attrs))),
			$mdgriffith$elm_ui$Internal$Model$Unkeyed(children));
	});
var $mdgriffith$elm_ui$Internal$Model$Top = 0;
var $mdgriffith$elm_ui$Element$alignTop = $mdgriffith$elm_ui$Internal$Model$AlignY(0);
var $elm$core$Maybe$andThen = F2(
	function (callback, maybeValue) {
		if (!maybeValue.$) {
			var value = maybeValue.a;
			return callback(value);
		} else {
			return $elm$core$Maybe$Nothing;
		}
	});
var $author$project$CYUtility$pairFromList = function (strings) {
	if ((strings.b && strings.b.b) && (!strings.b.b.b)) {
		var x = strings.a;
		var _v1 = strings.b;
		var y = _v1.a;
		return $elm$core$Maybe$Just(
			_Utils_Tuple2(x, y));
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $elm$core$String$trim = _String_trim;
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
var $author$project$CYUtility$keyValueDict = function (strings_) {
	return $elm$core$Dict$fromList(
		$elm_community$maybe_extra$Maybe$Extra$values(
			A2(
				$elm$core$List$map,
				$author$project$CYUtility$pairFromList,
				A2(
					$elm$core$List$map,
					$elm$core$List$map($elm$core$String$trim),
					A2(
						$elm$core$List$map,
						$elm$core$String$split(':'),
						strings_)))));
};
var $author$project$Render$Utility$getPrecision = function (args) {
	var dict = $author$project$CYUtility$keyValueDict(args);
	return A2(
		$elm$core$Maybe$andThen,
		$elm$core$String$toInt,
		A2($elm$core$Dict$get, 'precision', dict));
};
var $author$project$Render$Utility$getPrecisionWithDefault = F2(
	function (_default, args) {
		return A2(
			$elm$core$Maybe$withDefault,
			_default,
			$author$project$Render$Utility$getPrecision(args));
	});
var $author$project$Render$Utility$extractText = function (element) {
	if (!element.$) {
		var content = element.a;
		return $elm$core$Maybe$Just(content);
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $author$project$Render$Utility$getTextList = function (element) {
	if (element.$ === 2) {
		var list_ = element.a;
		return $elm$core$List$concat(
			A2(
				$elm$core$List$map,
				$elm$core$List$map($elm$core$String$trim),
				A2(
					$elm$core$List$map,
					$elm$core$String$split(','),
					A2(
						$elm$core$List$map,
						$elm$core$Maybe$withDefault(''),
						A2($elm$core$List$map, $author$project$Render$Utility$extractText, list_)))));
	} else {
		return _List_Nil;
	}
};
var $author$project$CYUtility$roundTo = F2(
	function (k, x) {
		var factor = A2($elm$core$Basics$pow, 10.0, k);
		return $elm$core$Basics$round(factor * x) / factor;
	});
var $elm$core$List$sum = function (numbers) {
	return A3($elm$core$List$foldl, $elm$core$Basics$add, 0, numbers);
};
var $elm$core$String$toFloat = _String_toFloat;
var $author$project$Widget$Data$average = F5(
	function (renderArgs, name, args, body, sm) {
		var precision = A2($author$project$Render$Utility$getPrecisionWithDefault, 2, args);
		var numbers_ = $author$project$Render$Utility$getTextList(body);
		var numbers = $elm_community$maybe_extra$Maybe$Extra$values(
			A2($elm$core$List$map, $elm$core$String$toFloat, numbers_));
		var sum_ = $elm$core$List$sum(numbers);
		var n = $elm$core$List$length(numbers);
		var average_ = sum_ / n;
		return A2(
			$mdgriffith$elm_ui$Element$row,
			_List_fromArray(
				[
					$mdgriffith$elm_ui$Element$spacing(8)
				]),
			A2(
				$elm$core$List$cons,
				$mdgriffith$elm_ui$Element$text('average'),
				_Utils_ap(
					A2($elm$core$List$map, $mdgriffith$elm_ui$Element$text, numbers_),
					_Utils_ap(
						_List_fromArray(
							[
								$mdgriffith$elm_ui$Element$text('=')
							]),
						_List_fromArray(
							[
								$mdgriffith$elm_ui$Element$text(
								$elm$core$String$fromFloat(
									A2($author$project$CYUtility$roundTo, precision, average_)))
							])))));
	});
var $jxxcarlson$elm_graph$SimpleGraph$Color = function (a) {
	return {$: 0, a: a};
};
var $jxxcarlson$elm_graph$SimpleGraph$DeltaX = function (a) {
	return {$: 3, a: a};
};
var $jxxcarlson$elm_graph$SimpleGraph$Scale = F2(
	function (a, b) {
		return {$: 4, a: a, b: b};
	});
var $jxxcarlson$elm_graph$SimpleGraph$XTickmarks = function (a) {
	return {$: 1, a: a};
};
var $jxxcarlson$elm_graph$SimpleGraph$YTickmarks = function (a) {
	return {$: 2, a: a};
};
var $elm$svg$Svg$Attributes$fontSize = _VirtualDom_attribute('font-size');
var $jxxcarlson$elm_graph$SimpleGraph$roundTo = F2(
	function (k, x) {
		var kk = k;
		return function (y) {
			return y / A2($elm$core$Basics$pow, 10.0, kk);
		}(
			$elm$core$Basics$round(
				x * A2($elm$core$Basics$pow, 10.0, kk)));
	});
var $elm$svg$Svg$text = $elm$virtual_dom$VirtualDom$text;
var $elm$svg$Svg$trustedNode = _VirtualDom_nodeNS('http://www.w3.org/2000/svg');
var $elm$svg$Svg$text_ = $elm$svg$Svg$trustedNode('text');
var $elm$svg$Svg$Attributes$transform = _VirtualDom_attribute('transform');
var $elm$svg$Svg$Attributes$x = _VirtualDom_attribute('x');
var $elm$svg$Svg$Attributes$y = _VirtualDom_attribute('y');
var $jxxcarlson$elm_graph$SimpleGraph$bMakeYLabel = F2(
	function (_v0, y) {
		var yMax = _v0.a;
		var graphHeight = _v0.b;
		var label = $elm$core$String$fromFloat(
			A2($jxxcarlson$elm_graph$SimpleGraph$roundTo, 1, y));
		return A2(
			$elm$svg$Svg$text_,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$transform('translate(0,' + ('-3' + ') scale(1,-1)')),
					$elm$svg$Svg$Attributes$x('-30'),
					$elm$svg$Svg$Attributes$y(
					$elm$core$String$fromFloat(((-y) * graphHeight) / yMax)),
					$elm$svg$Svg$Attributes$fontSize('9px')
				]),
			_List_fromArray(
				[
					$elm$svg$Svg$text(label)
				]));
	});
var $elm$svg$Svg$g = $elm$svg$Svg$trustedNode('g');
var $jxxcarlson$elm_graph$SimpleGraph$findMap = F2(
	function (f, list) {
		findMap:
		while (true) {
			if (!list.b) {
				return $elm$core$Maybe$Nothing;
			} else {
				var x = list.a;
				var xs = list.b;
				var _v1 = f(x);
				if (!_v1.$) {
					var v = _v1.a;
					return $elm$core$Maybe$Just(v);
				} else {
					var $temp$f = f,
						$temp$list = xs;
					f = $temp$f;
					list = $temp$list;
					continue findMap;
				}
			}
		}
	});
var $jxxcarlson$elm_graph$SimpleGraph$yTickmarks_ = function (option) {
	if (option.$ === 2) {
		var k = option.a;
		return $elm$core$Maybe$Just(k);
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $jxxcarlson$elm_graph$SimpleGraph$yTickmarks = function (options) {
	return A2(
		$elm$core$Maybe$withDefault,
		0,
		A2($jxxcarlson$elm_graph$SimpleGraph$findMap, $jxxcarlson$elm_graph$SimpleGraph$yTickmarks_, options));
};
var $jxxcarlson$elm_graph$SimpleGraph$bMakeYLabels = F2(
	function (yMax, ga) {
		var n = $jxxcarlson$elm_graph$SimpleGraph$yTickmarks(ga.hN);
		var _v0 = !n;
		if (_v0) {
			return A2($elm$svg$Svg$g, _List_Nil, _List_Nil);
		} else {
			return A2(
				$elm$svg$Svg$g,
				_List_Nil,
				A2(
					$elm$core$List$map,
					$jxxcarlson$elm_graph$SimpleGraph$bMakeYLabel(
						_Utils_Tuple2(yMax, ga.eo)),
					A2(
						$elm$core$List$map,
						function (k) {
							return (k * yMax) / (n - 1);
						},
						A2($elm$core$List$range, 0, n - 1))));
		}
	});
var $elm$svg$Svg$Attributes$fill = _VirtualDom_attribute('fill');
var $elm$svg$Svg$Attributes$height = _VirtualDom_attribute('height');
var $elm$svg$Svg$rect = $elm$svg$Svg$trustedNode('rect');
var $elm$svg$Svg$Attributes$width = _VirtualDom_attribute('width');
var $jxxcarlson$elm_graph$SimpleGraph$barRect = F5(
	function (color, barWidth, barHeight, x, fraction) {
		return A2(
			$elm$svg$Svg$rect,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$width(
					$elm$core$String$fromFloat(barWidth)),
					$elm$svg$Svg$Attributes$height(
					$elm$core$String$fromFloat(fraction * barHeight)),
					$elm$svg$Svg$Attributes$x(
					$elm$core$String$fromFloat(x)),
					$elm$svg$Svg$Attributes$fill(color)
				]),
			_List_Nil);
	});
var $jxxcarlson$elm_graph$SimpleGraph$scale_ = function (option) {
	if (option.$ === 4) {
		var kx = option.a;
		var ky = option.b;
		return $elm$core$Maybe$Just(
			_Utils_Tuple2(kx, ky));
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $jxxcarlson$elm_graph$SimpleGraph$scale = function (options) {
	return A2(
		$elm$core$Maybe$withDefault,
		_Utils_Tuple2(1.0, 1.0),
		A2($jxxcarlson$elm_graph$SimpleGraph$findMap, $jxxcarlson$elm_graph$SimpleGraph$scale_, options));
};
var $jxxcarlson$elm_graph$SimpleGraph$buildSVGTransformString = function (ga) {
	var _v0 = $jxxcarlson$elm_graph$SimpleGraph$scale(ga.hN);
	var kx = _v0.a;
	var ky = _v0.b;
	var translateX = function () {
		var _v2 = kx < 0;
		if (!_v2) {
			return '0';
		} else {
			return $elm$core$String$fromFloat((-ga.ep) + 60);
		}
	}();
	var scaleString = 'scale(' + ($elm$core$String$fromFloat(kx) + (', ' + ($elm$core$String$fromFloat(ky) + ')')));
	var translateY = function () {
		var _v1 = ky < 0;
		if (!_v1) {
			return '0';
		} else {
			return $elm$core$String$fromFloat(-ga.eo);
		}
	}();
	var translateString = 'translate(' + (translateX + (', ' + (translateY + ')')));
	return scaleString + (' ' + translateString);
};
var $elm$svg$Svg$line = $elm$svg$Svg$trustedNode('line');
var $jxxcarlson$elm_graph$SimpleGraph$lineColor_ = function (option) {
	if (!option.$) {
		var str = option.a;
		return $elm$core$Maybe$Just(str);
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $jxxcarlson$elm_graph$SimpleGraph$lineColor = function (options) {
	return A2(
		$elm$core$Maybe$withDefault,
		'rgb(40, 40, 40)',
		A2($jxxcarlson$elm_graph$SimpleGraph$findMap, $jxxcarlson$elm_graph$SimpleGraph$lineColor_, options));
};
var $elm$svg$Svg$Attributes$stroke = _VirtualDom_attribute('stroke');
var $elm$svg$Svg$Attributes$strokeWidth = _VirtualDom_attribute('stroke-width');
var $elm$svg$Svg$Attributes$x1 = _VirtualDom_attribute('x1');
var $elm$svg$Svg$Attributes$x2 = _VirtualDom_attribute('x2');
var $elm$svg$Svg$Attributes$y1 = _VirtualDom_attribute('y1');
var $elm$svg$Svg$Attributes$y2 = _VirtualDom_attribute('y2');
var $jxxcarlson$elm_graph$SimpleGraph$segmentToSVG = F2(
	function (options, _v0) {
		var _v1 = _v0.a;
		var x1 = _v1.a;
		var y1 = _v1.b;
		var _v2 = _v0.b;
		var x2 = _v2.a;
		var y2 = _v2.b;
		return A2(
			$elm$svg$Svg$line,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$x1(
					$elm$core$String$fromFloat(x1)),
					$elm$svg$Svg$Attributes$y1(
					$elm$core$String$fromFloat(y1)),
					$elm$svg$Svg$Attributes$x2(
					$elm$core$String$fromFloat(x2)),
					$elm$svg$Svg$Attributes$y2(
					$elm$core$String$fromFloat(y2)),
					$elm$svg$Svg$Attributes$stroke(
					$jxxcarlson$elm_graph$SimpleGraph$lineColor(options)),
					$elm$svg$Svg$Attributes$strokeWidth('1')
				]),
			_List_Nil);
	});
var $jxxcarlson$elm_graph$SimpleGraph$bxTickmark = function (x) {
	return A2(
		$jxxcarlson$elm_graph$SimpleGraph$segmentToSVG,
		_List_Nil,
		_Utils_Tuple2(
			_Utils_Tuple2(x, 0),
			_Utils_Tuple2(x, -8)));
};
var $jxxcarlson$elm_graph$SimpleGraph$deltaX_ = function (option) {
	if (option.$ === 3) {
		var dx = option.a;
		return $elm$core$Maybe$Just(dx);
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $jxxcarlson$elm_graph$SimpleGraph$deltaX = function (options) {
	return A2(
		$elm$core$Maybe$withDefault,
		15,
		A2($jxxcarlson$elm_graph$SimpleGraph$findMap, $jxxcarlson$elm_graph$SimpleGraph$deltaX_, options));
};
var $jxxcarlson$elm_graph$SimpleGraph$xTickmarks_ = function (option) {
	if (option.$ === 1) {
		var k = option.a;
		return $elm$core$Maybe$Just(k);
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $jxxcarlson$elm_graph$SimpleGraph$xTickmarks = function (options) {
	return A2(
		$elm$core$Maybe$withDefault,
		0,
		A2($jxxcarlson$elm_graph$SimpleGraph$findMap, $jxxcarlson$elm_graph$SimpleGraph$xTickmarks_, options));
};
var $jxxcarlson$elm_graph$SimpleGraph$bxTickmarks = function (ga) {
	var dx = $jxxcarlson$elm_graph$SimpleGraph$xTickmarks(ga.hN) * $jxxcarlson$elm_graph$SimpleGraph$deltaX(ga.hN);
	var n = $elm$core$Basics$round(ga.ep / dx);
	return A2(
		$elm$svg$Svg$g,
		_List_Nil,
		A2(
			$elm$core$List$map,
			$jxxcarlson$elm_graph$SimpleGraph$bxTickmark,
			A2(
				$elm$core$List$map,
				function (k) {
					return k * dx;
				},
				A2($elm$core$List$range, 0, n - 1))));
};
var $jxxcarlson$elm_graph$SimpleGraph$byTickmark = function (y) {
	return A2(
		$jxxcarlson$elm_graph$SimpleGraph$segmentToSVG,
		_List_Nil,
		_Utils_Tuple2(
			_Utils_Tuple2(0, y),
			_Utils_Tuple2(-8, y)));
};
var $jxxcarlson$elm_graph$SimpleGraph$byTickmarks = function (ga) {
	var n = $jxxcarlson$elm_graph$SimpleGraph$yTickmarks(ga.hN);
	return A2(
		$elm$svg$Svg$g,
		_List_Nil,
		A2(
			$elm$core$List$map,
			$jxxcarlson$elm_graph$SimpleGraph$byTickmark,
			A2(
				$elm$core$List$map,
				function (k) {
					return (k * ga.eo) / (n - 1);
				},
				A2($elm$core$List$range, 0, n - 1))));
};
var $elm$core$Tuple$pair = F2(
	function (a, b) {
		return _Utils_Tuple2(a, b);
	});
var $jxxcarlson$elm_graph$SimpleGraph$xCoordinates = F2(
	function (n, dx) {
		return A2(
			$elm$core$List$map,
			function (i) {
				return i * dx;
			},
			A2($elm$core$List$range, 0, n));
	});
var $jxxcarlson$elm_graph$SimpleGraph$prepare = F2(
	function (dx, data) {
		var ymax = A2(
			$elm$core$Maybe$withDefault,
			1,
			$elm$core$List$maximum(data));
		var ys = A2(
			$elm$core$List$map,
			function (y) {
				return y / ymax;
			},
			data);
		var xs = A2(
			$jxxcarlson$elm_graph$SimpleGraph$xCoordinates,
			$elm$core$List$length(data),
			dx);
		return _Utils_Tuple2(
			ymax,
			A3($elm$core$List$map2, $elm$core$Tuple$pair, xs, ys));
	});
var $jxxcarlson$elm_graph$SimpleGraph$barChartAsSVG = F2(
	function (ga, data) {
		var yTickmarks2 = $jxxcarlson$elm_graph$SimpleGraph$byTickmarks(ga);
		var xTickmarks2 = $jxxcarlson$elm_graph$SimpleGraph$bxTickmarks(ga);
		var transformer = $elm$svg$Svg$Attributes$transform(
			$jxxcarlson$elm_graph$SimpleGraph$buildSVGTransformString(ga));
		var ordinate = A2(
			$jxxcarlson$elm_graph$SimpleGraph$segmentToSVG,
			_List_Nil,
			_Utils_Tuple2(
				_Utils_Tuple2(0, 0),
				_Utils_Tuple2(0, ga.eo)));
		var barWidth = 0.8 * $jxxcarlson$elm_graph$SimpleGraph$deltaX(ga.hN);
		var gbar = function (_v1) {
			var x = _v1.a;
			var y = _v1.b;
			return A5(
				$jxxcarlson$elm_graph$SimpleGraph$barRect,
				$jxxcarlson$elm_graph$SimpleGraph$lineColor(ga.hN),
				barWidth,
				ga.eo,
				x,
				y);
		};
		var abscissa = A2(
			$jxxcarlson$elm_graph$SimpleGraph$segmentToSVG,
			_List_Nil,
			_Utils_Tuple2(
				_Utils_Tuple2(0, 0),
				_Utils_Tuple2(ga.ep, 0)));
		var _v0 = A2(
			$jxxcarlson$elm_graph$SimpleGraph$prepare,
			$jxxcarlson$elm_graph$SimpleGraph$deltaX(ga.hN),
			data);
		var yMax = _v0.a;
		var preparedData = _v0.b;
		var yLabels = A2($jxxcarlson$elm_graph$SimpleGraph$bMakeYLabels, yMax, ga);
		return A2(
			$elm$svg$Svg$g,
			_List_fromArray(
				[transformer]),
			_Utils_ap(
				A2($elm$core$List$map, gbar, preparedData),
				_List_fromArray(
					[abscissa, ordinate, xTickmarks2, yTickmarks2, yLabels])));
	});
var $elm$svg$Svg$svg = $elm$svg$Svg$trustedNode('svg');
var $elm$svg$Svg$Attributes$viewBox = _VirtualDom_attribute('viewBox');
var $jxxcarlson$elm_graph$SimpleGraph$barChart = F2(
	function (ga, data) {
		return A2(
			$elm$svg$Svg$svg,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$transform('scale(1,-1)'),
					$elm$svg$Svg$Attributes$height(
					$elm$core$String$fromFloat(ga.eo + 40)),
					$elm$svg$Svg$Attributes$width(
					$elm$core$String$fromFloat(ga.ep + 40)),
					$elm$svg$Svg$Attributes$viewBox(
					'-60 -20 ' + ($elm$core$String$fromFloat(ga.ep + 40) + (' ' + $elm$core$String$fromFloat(ga.eo + 20))))
				]),
			_List_fromArray(
				[
					A2($jxxcarlson$elm_graph$SimpleGraph$barChartAsSVG, ga, data)
				]));
	});
var $mdgriffith$elm_ui$Internal$Flag$fontWeight = $mdgriffith$elm_ui$Internal$Flag$flag(13);
var $mdgriffith$elm_ui$Element$Font$bold = A2($mdgriffith$elm_ui$Internal$Model$Class, $mdgriffith$elm_ui$Internal$Flag$fontWeight, $mdgriffith$elm_ui$Internal$Style$classes.gB);
var $mdgriffith$elm_ui$Element$none = $mdgriffith$elm_ui$Internal$Model$Empty;
var $author$project$Render$Utility$captionElement = function (dict) {
	var _v0 = A2($elm$core$Dict$get, 'caption', dict);
	if (!_v0.$) {
		var caption = _v0.a;
		return A2(
			$mdgriffith$elm_ui$Element$paragraph,
			_List_fromArray(
				[$mdgriffith$elm_ui$Element$Font$bold]),
			_List_fromArray(
				[
					$mdgriffith$elm_ui$Element$text(caption)
				]));
	} else {
		return $mdgriffith$elm_ui$Element$none;
	}
};
var $elm_community$list_extra$List$Extra$getAt = F2(
	function (idx, xs) {
		return (idx < 0) ? $elm$core$Maybe$Nothing : $elm$core$List$head(
			A2($elm$core$List$drop, idx, xs));
	});
var $author$project$Render$Utility$getCSV = function (element) {
	if (element.$ === 2) {
		var list_ = element.a;
		var _v1 = A2($elm$core$List$map, $author$project$Render$Utility$extractText, list_);
		if ((_v1.b && (!_v1.a.$)) && (!_v1.b.b)) {
			var data = _v1.a.a;
			return A2(
				$elm$core$List$map,
				$elm$core$List$map($elm$core$String$trim),
				A2(
					$elm$core$List$map,
					$elm$core$String$split(','),
					A2($elm$core$String$split, '\n', data)));
		} else {
			return _List_fromArray(
				[_List_Nil]);
		}
	} else {
		return _List_fromArray(
			[_List_Nil]);
	}
};
var $author$project$Render$Utility$getColumn = F2(
	function (dict, body) {
		var toInt_ = F2(
			function (_default, str) {
				return A2(
					$elm$core$Maybe$withDefault,
					_default,
					$elm$core$String$toInt(str));
			});
		var rawData = $author$project$Render$Utility$getCSV(body);
		var getDataColumn = F2(
			function (i, data) {
				return A2(
					$elm$core$List$map,
					function (column) {
						return A2($elm_community$list_extra$List$Extra$getAt, i, column);
					},
					rawData);
			});
		var cutoff = A2(
			$elm$core$Maybe$andThen,
			$elm$core$String$toFloat,
			A2($elm$core$Dict$get, 'cutoff', dict));
		var filter = function (data_) {
			if (!cutoff.$) {
				var cutoffValue = cutoff.a;
				return A2(
					$elm$core$List$filter,
					function (x) {
						return _Utils_cmp(x, cutoffValue) < 0;
					},
					data_);
			} else {
				return data_;
			}
		};
		var col = function () {
			var _v0 = A2($elm$core$Dict$get, 'column', dict);
			if (!_v0.$) {
				var i = _v0.a;
				return A2(toInt_, 0, i) - 1;
			} else {
				return 0;
			}
		}();
		return filter(
			$elm_community$maybe_extra$Maybe$Extra$values(
				A2(
					$elm$core$List$map,
					$elm$core$String$toFloat,
					$elm_community$maybe_extra$Maybe$Extra$values(
						A2(
							getDataColumn,
							col,
							$author$project$Render$Utility$getCSV(body))))));
	});
var $mdgriffith$elm_ui$Element$html = $mdgriffith$elm_ui$Internal$Model$unstyled;
var $author$project$Widget$Data$bargraph = F5(
	function (renderArgs, name, args, body, sm) {
		var graphWidth = 300.0;
		var graphHeight = 200.0;
		var dict = $author$project$CYUtility$keyValueDict(args);
		var numbers = A2(
			$elm$core$List$map,
			function (x) {
				return x + 0.5;
			},
			A2($author$project$Render$Utility$getColumn, dict, body));
		var n = $elm$core$List$length(numbers);
		var deltaX = graphWidth / n;
		var options = _List_fromArray(
			[
				$jxxcarlson$elm_graph$SimpleGraph$Color('rgb(200,0,0)'),
				$jxxcarlson$elm_graph$SimpleGraph$DeltaX(deltaX),
				$jxxcarlson$elm_graph$SimpleGraph$YTickmarks(6),
				$jxxcarlson$elm_graph$SimpleGraph$XTickmarks(
				$elm$core$Basics$round(n + 1)),
				A2($jxxcarlson$elm_graph$SimpleGraph$Scale, 1.0, 1.0)
			]);
		var dataMin = A2(
			$elm$core$Maybe$withDefault,
			0,
			$elm$core$List$minimum(numbers));
		var dataMax = A2(
			$elm$core$Maybe$withDefault,
			0,
			$elm$core$List$maximum(numbers));
		var barGraphAttributes = {eo: graphHeight, ep: graphWidth, hN: options};
		return A2(
			$mdgriffith$elm_ui$Element$column,
			_List_Nil,
			_List_fromArray(
				[
					$mdgriffith$elm_ui$Element$html(
					A2(
						$jxxcarlson$elm_graph$SimpleGraph$barChart,
						barGraphAttributes,
						A2(
							$elm$core$List$map,
							function (x) {
								return x + 0.001;
							},
							numbers))),
					$author$project$Render$Utility$captionElement(dict),
					A2(
					$mdgriffith$elm_ui$Element$paragraph,
					_List_fromArray(
						[
							$mdgriffith$elm_ui$Element$spacing(12)
						]),
					_List_fromArray(
						[
							$mdgriffith$elm_ui$Element$text(
							'data points: ' + ($elm$core$String$fromFloat(n) + ', ')),
							$mdgriffith$elm_ui$Element$text(
							'min: ' + ($elm$core$String$fromFloat(
								A2($author$project$CYUtility$roundTo, 2, dataMin)) + ', ')),
							$mdgriffith$elm_ui$Element$text(
							'max: ' + $elm$core$String$fromFloat(
								A2($author$project$CYUtility$roundTo, 2, dataMax)))
						]))
				]));
	});
var $author$project$Render$Elm$codeColor = A3($mdgriffith$elm_ui$Element$rgb, 0.4, 0, 0.8);
var $mdgriffith$elm_ui$Element$Font$family = function (families) {
	return A2(
		$mdgriffith$elm_ui$Internal$Model$StyleClass,
		$mdgriffith$elm_ui$Internal$Flag$fontFamily,
		A2(
			$mdgriffith$elm_ui$Internal$Model$FontFamily,
			A3($elm$core$List$foldl, $mdgriffith$elm_ui$Internal$Model$renderFontClassName, 'ff-', families),
			families));
};
var $elm$core$String$cons = _String_cons;
var $elm$core$String$fromChar = function (_char) {
	return A2($elm$core$String$cons, _char, '');
};
var $elm$core$String$replace = F3(
	function (before, after, string) {
		return A2(
			$elm$core$String$join,
			after,
			A2($elm$core$String$split, before, string));
	});
var $author$project$Render$Elm$getLines = function (str) {
	var nonBreakingSpace = $elm$core$String$fromChar('\u00A0');
	return A2(
		$elm$core$List$map,
		function (s) {
			return (s === '') ? nonBreakingSpace : A3($elm$core$String$replace, ' ', nonBreakingSpace, s);
		},
		$elm$core$String$lines(str));
};
var $author$project$Render$Elm$getText2 = function (element) {
	if (element.$ === 2) {
		var list_ = element.a;
		return A2(
			$elm$core$String$join,
			'\n',
			$elm_community$maybe_extra$Maybe$Extra$values(
				A2($elm$core$List$map, $author$project$Render$Utility$extractText, list_)));
	} else {
		return '';
	}
};
var $author$project$Render$Utility$htmlAttribute = F2(
	function (key, value) {
		return $mdgriffith$elm_ui$Element$htmlAttribute(
			A2($elm$html$Html$Attributes$attribute, key, value));
	});
var $author$project$Render$Elm$indentation = $mdgriffith$elm_ui$Element$paddingEach(
	{cn: 0, cY: 18, de: 0, dp: 0});
var $mdgriffith$elm_ui$Internal$Model$Monospace = {$: 2};
var $mdgriffith$elm_ui$Element$Font$monospace = $mdgriffith$elm_ui$Internal$Model$Monospace;
var $mdgriffith$elm_ui$Element$Font$typeface = $mdgriffith$elm_ui$Internal$Model$Typeface;
var $author$project$Render$Elm$codeblock = F5(
	function (renderArgs, _v0, _v1, body, meta) {
		return A2(
			$mdgriffith$elm_ui$Element$column,
			_List_fromArray(
				[
					$mdgriffith$elm_ui$Element$Font$family(
					_List_fromArray(
						[
							$mdgriffith$elm_ui$Element$Font$typeface('Inconsolata'),
							$mdgriffith$elm_ui$Element$Font$monospace
						])),
					$mdgriffith$elm_ui$Element$Font$size(12),
					$mdgriffith$elm_ui$Element$Font$color($author$project$Render$Elm$codeColor),
					A2($author$project$Render$Utility$htmlAttribute, 'white-space', 'pre'),
					$author$project$Render$Elm$indentation,
					$mdgriffith$elm_ui$Element$spacing(8)
				]),
			A2(
				$elm$core$List$map,
				$mdgriffith$elm_ui$Element$text,
				$author$project$Render$Elm$getLines(
					$elm$core$String$trim(
						$author$project$Render$Elm$getText2(body)))));
	});
var $author$project$Render$Utility$itemWidths = function (items) {
	return A2(
		$elm$core$List$map,
		$elm$core$List$map($elm$core$String$length),
		items);
};
var $elm$core$List$repeatHelp = F3(
	function (result, n, value) {
		repeatHelp:
		while (true) {
			if (n <= 0) {
				return result;
			} else {
				var $temp$result = A2($elm$core$List$cons, value, result),
					$temp$n = n - 1,
					$temp$value = value;
				result = $temp$result;
				n = $temp$n;
				value = $temp$value;
				continue repeatHelp;
			}
		}
	});
var $elm$core$List$repeat = F2(
	function (n, value) {
		return A3($elm$core$List$repeatHelp, _List_Nil, n, value);
	});
var $elm_community$list_extra$List$Extra$rowsLength = function (listOfLists) {
	if (!listOfLists.b) {
		return 0;
	} else {
		var x = listOfLists.a;
		return $elm$core$List$length(x);
	}
};
var $elm_community$list_extra$List$Extra$transpose = function (listOfLists) {
	return A3(
		$elm$core$List$foldr,
		$elm$core$List$map2($elm$core$List$cons),
		A2(
			$elm$core$List$repeat,
			$elm_community$list_extra$List$Extra$rowsLength(listOfLists),
			_List_Nil),
		listOfLists);
};
var $author$project$Render$Utility$columnWidths_ = function (items) {
	return $elm_community$maybe_extra$Maybe$Extra$values(
		A2(
			$elm$core$List$map,
			$elm$core$List$maximum,
			$elm_community$list_extra$List$Extra$transpose(
				$author$project$Render$Utility$itemWidths(items))));
};
var $author$project$Render$Utility$columnWidths = F3(
	function (factor, term, items) {
		return A2(
			$elm$core$List$map,
			function (k) {
				return (factor * k) + term;
			},
			$author$project$Render$Utility$columnWidths_(items));
	});
var $author$project$Render$Elm$titleSize = 14;
var $author$project$Render$Elm$elementTitle = function (args_) {
	var dict = $author$project$CYUtility$keyValueDict(args_);
	var title = A2($elm$core$Dict$get, 'title', dict);
	if (title.$ === 1) {
		return $mdgriffith$elm_ui$Element$none;
	} else {
		var title_ = title.a;
		return A2(
			$mdgriffith$elm_ui$Element$el,
			_List_fromArray(
				[
					$mdgriffith$elm_ui$Element$Font$size($author$project$Render$Elm$titleSize)
				]),
			$mdgriffith$elm_ui$Element$text(title_));
	}
};
var $author$project$CYUtility$entities = function (strings_) {
	return $elm_community$maybe_extra$Maybe$Extra$values(
		A2(
			$elm$core$List$map,
			$elm$core$List$head,
			A2(
				$elm$core$List$filter,
				function (x) {
					return $elm$core$List$length(x) === 1;
				},
				A2(
					$elm$core$List$map,
					$elm$core$List$map($elm$core$String$trim),
					A2(
						$elm$core$List$map,
						$elm$core$String$split(':'),
						strings_)))));
};
var $author$project$Render$Elm$dataTable = F5(
	function (renderArgs, name, args_, body, meta) {
		var rawData = A2(
			$elm$core$List$filter,
			function (row) {
				return !_Utils_eq(
					row,
					_List_fromArray(
						['']));
			},
			$author$project$Render$Utility$getCSV(body));
		var widths = A3($author$project$Render$Utility$columnWidths, 10, 0, rawData);
		var headerRow = A2(
			$elm$core$List$member,
			'header',
			$author$project$CYUtility$entities(args_));
		var style = function (k) {
			return ((!k) && headerRow) ? _List_fromArray(
				[
					$mdgriffith$elm_ui$Element$Font$bold,
					$mdgriffith$elm_ui$Element$spacing(4)
				]) : _List_fromArray(
				[
					$mdgriffith$elm_ui$Element$spacing(4)
				]);
		};
		var makeRow = F3(
			function (k, columnWidths, cells) {
				return A2(
					$mdgriffith$elm_ui$Element$row,
					style(k),
					A3(
						$elm$core$List$map2,
						F2(
							function (w, cell) {
								return A2(
									$mdgriffith$elm_ui$Element$el,
									_List_fromArray(
										[
											$mdgriffith$elm_ui$Element$width(
											$mdgriffith$elm_ui$Element$px(
												$elm$core$Basics$round(w)))
										]),
									$mdgriffith$elm_ui$Element$text(cell));
							}),
						columnWidths,
						cells));
			});
		return A2(
			$mdgriffith$elm_ui$Element$column,
			_List_fromArray(
				[
					$mdgriffith$elm_ui$Element$spacing(8)
				]),
			A2(
				$elm$core$List$cons,
				$author$project$Render$Elm$elementTitle(args_),
				A2(
					$elm$core$List$indexedMap,
					function (k) {
						return A2(makeRow, k, widths);
					},
					rawData)));
	});
var $author$project$Render$Elm$getLabel = function (mmeta) {
	if (mmeta.$ === 1) {
		return '';
	} else {
		var meta = mmeta.a;
		return meta.bS;
	}
};
var $author$project$Render$Elm$getText = function (element) {
	if ((((element.$ === 2) && element.a.b) && (!element.a.a.$)) && (!element.a.b.b)) {
		var _v1 = element.a;
		var _v2 = _v1.a;
		var content = _v2.a;
		return $elm$core$Maybe$Just(content);
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $author$project$Render$Elm$paddingAbove = function (k) {
	return $mdgriffith$elm_ui$Element$paddingEach(
		{cn: 0, cY: 0, de: 0, dp: k});
};
var $author$project$Render$Elm$sectionFontSize = 24;
var $author$project$Render$Elm$titleFontSize = 30;
var $author$project$Render$Elm$docTitle = F5(
	function (renderArgs, name, args, body, meta) {
		return A2(
			$mdgriffith$elm_ui$Element$column,
			_List_fromArray(
				[
					$mdgriffith$elm_ui$Element$Font$size($author$project$Render$Elm$titleFontSize),
					$author$project$Render$Elm$paddingAbove(
					$elm$core$Basics$round(0.8 * $author$project$Render$Elm$sectionFontSize))
				]),
			_List_fromArray(
				[
					$mdgriffith$elm_ui$Element$text(
					$author$project$Render$Elm$getLabel(meta) + (' ' + A2(
						$elm$core$Maybe$withDefault,
						'no section name found',
						$author$project$Render$Elm$getText(body))))
				]));
	});
var $author$project$Render$Elm$expandMacro = F2(
	function (macroForm, body) {
		return A4($author$project$Parser$Element$Element, macroForm.dU, macroForm.eU, body, $elm$core$Maybe$Nothing);
	});
var $author$project$Render$Elm$isBlankItem = function (el) {
	if (!el.$) {
		var str = el.a;
		return $elm$core$String$trim(str) === '';
	} else {
		return false;
	}
};
var $author$project$Render$Elm$filterOutBlankItems = function (list_) {
	return A2(
		$elm$core$List$filter,
		function (item_) {
			return !$author$project$Render$Elm$isBlankItem(item_);
		},
		list_);
};
var $author$project$Render$Elm$redColor = A3($mdgriffith$elm_ui$Element$rgb, 0.7, 0, 0);
var $author$project$Render$Elm$get = F5(
	function (renderArgs, name, args_, body, meta_) {
		var key = $elm$core$String$trim(
			$author$project$Render$Elm$getText2(body));
		var _v0 = A2($elm$core$Dict$get, key, renderArgs.fK.dD);
		if (_v0.$ === 1) {
			return A2(
				$mdgriffith$elm_ui$Element$el,
				_List_fromArray(
					[
						$mdgriffith$elm_ui$Element$Font$color($author$project$Render$Elm$redColor)
					]),
				$mdgriffith$elm_ui$Element$text('variable ' + (key + ' not found')));
		} else {
			var value = _v0.a;
			return A2(
				$mdgriffith$elm_ui$Element$el,
				_List_Nil,
				$mdgriffith$elm_ui$Element$text(value));
		}
	});
var $author$project$Render$Utility$getArg = F2(
	function (k, stringList) {
		return A2($elm_community$list_extra$List$Extra$getAt, k, stringList);
	});
var $author$project$Render$Utility$getInt = F2(
	function (k, stringList) {
		return A2(
			$elm$core$Maybe$withDefault,
			0,
			A2(
				$elm$core$Maybe$andThen,
				$elm$core$String$toInt,
				A2(
					$elm$core$Maybe$map,
					$elm$core$String$trim,
					A2($elm_community$list_extra$List$Extra$getAt, k, stringList))));
	});
var $mdgriffith$elm_ui$Element$moveDown = function (y) {
	return A2(
		$mdgriffith$elm_ui$Internal$Model$TransformComponent,
		$mdgriffith$elm_ui$Internal$Flag$moveY,
		$mdgriffith$elm_ui$Internal$Model$MoveY(y));
};
var $author$project$Render$Elm$getPrefixSymbol = F2(
	function (k, dict) {
		var _v0 = A2($elm$core$Dict$get, 's', dict);
		if (_v0.$ === 1) {
			return A2(
				$mdgriffith$elm_ui$Element$el,
				_List_fromArray(
					[
						$mdgriffith$elm_ui$Element$Font$size(16)
					]),
				$mdgriffith$elm_ui$Element$text('•'));
		} else {
			switch (_v0.a) {
				case 'numbered':
					return A2(
						$mdgriffith$elm_ui$Element$el,
						_List_fromArray(
							[
								$mdgriffith$elm_ui$Element$Font$size(12),
								$mdgriffith$elm_ui$Element$alignTop,
								$mdgriffith$elm_ui$Element$moveDown(2.2)
							]),
						$mdgriffith$elm_ui$Element$text(
							$elm$core$String$fromInt(k + 1) + '.'));
				case 'bullet':
					return A2(
						$mdgriffith$elm_ui$Element$el,
						_List_fromArray(
							[
								$mdgriffith$elm_ui$Element$Font$size(16)
							]),
						$mdgriffith$elm_ui$Element$text('•'));
				case 'none':
					return $mdgriffith$elm_ui$Element$none;
				default:
					var str = _v0.a;
					return A2(
						$mdgriffith$elm_ui$Element$el,
						_List_fromArray(
							[
								$mdgriffith$elm_ui$Element$Font$size(16)
							]),
						$mdgriffith$elm_ui$Element$text(str));
			}
		}
	});
var $author$project$Render$Elm$hide = F5(
	function (renderArgs, name, args_, body, meta) {
		return $mdgriffith$elm_ui$Element$none;
	});
var $mdgriffith$elm_ui$Internal$Model$Left = 0;
var $mdgriffith$elm_ui$Element$alignLeft = $mdgriffith$elm_ui$Internal$Model$AlignX(0);
var $mdgriffith$elm_ui$Internal$Model$Right = 2;
var $mdgriffith$elm_ui$Element$alignRight = $mdgriffith$elm_ui$Internal$Model$AlignX(2);
var $elm$html$Html$Attributes$alt = $elm$html$Html$Attributes$stringProperty('alt');
var $elm$html$Html$Attributes$src = function (url) {
	return A2(
		$elm$html$Html$Attributes$stringProperty,
		'src',
		_VirtualDom_noJavaScriptOrHtmlUri(url));
};
var $mdgriffith$elm_ui$Element$image = F2(
	function (attrs, _v0) {
		var description = _v0.g_;
		var src = _v0.h8;
		var imageAttributes = A2(
			$elm$core$List$filter,
			function (a) {
				switch (a.$) {
					case 7:
						return true;
					case 8:
						return true;
					default:
						return false;
				}
			},
			attrs);
		return A4(
			$mdgriffith$elm_ui$Internal$Model$element,
			$mdgriffith$elm_ui$Internal$Model$asEl,
			$mdgriffith$elm_ui$Internal$Model$div,
			A2(
				$elm$core$List$cons,
				$mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.hi),
				attrs),
			$mdgriffith$elm_ui$Internal$Model$Unkeyed(
				_List_fromArray(
					[
						A4(
						$mdgriffith$elm_ui$Internal$Model$element,
						$mdgriffith$elm_ui$Internal$Model$asEl,
						$mdgriffith$elm_ui$Internal$Model$NodeName('img'),
						_Utils_ap(
							_List_fromArray(
								[
									$mdgriffith$elm_ui$Internal$Model$Attr(
									$elm$html$Html$Attributes$src(src)),
									$mdgriffith$elm_ui$Internal$Model$Attr(
									$elm$html$Html$Attributes$alt(description))
								]),
							imageAttributes),
						$mdgriffith$elm_ui$Internal$Model$Unkeyed(_List_Nil))
					])));
	});
var $author$project$Render$Elm$image = F5(
	function (renderArgs, name, args, body, meta) {
		var displayWidth = renderArgs.fK.e4.e8;
		var dict = $author$project$CYUtility$keyValueDict(args);
		var placement = function () {
			var _v3 = A2($elm$core$Dict$get, 'placement', dict);
			if (_v3.$ === 1) {
				return $mdgriffith$elm_ui$Element$centerX;
			} else {
				switch (_v3.a) {
					case 'left':
						return $mdgriffith$elm_ui$Element$alignLeft;
					case 'right':
						return $mdgriffith$elm_ui$Element$alignRight;
					case 'center':
						return $mdgriffith$elm_ui$Element$centerX;
					default:
						return $mdgriffith$elm_ui$Element$centerX;
				}
			}
		}();
		var width = function () {
			var _v1 = A2($elm$core$Dict$get, 'width', dict);
			if (_v1.$ === 1) {
				return $mdgriffith$elm_ui$Element$px(displayWidth);
			} else {
				var w_ = _v1.a;
				var _v2 = $elm$core$String$toInt(w_);
				if (_v2.$ === 1) {
					return $mdgriffith$elm_ui$Element$px(displayWidth);
				} else {
					var w = _v2.a;
					return $mdgriffith$elm_ui$Element$px(w);
				}
			}
		}();
		var description = A2(
			$elm$core$Maybe$withDefault,
			'',
			A2($elm$core$Dict$get, 'caption', dict));
		var caption = function () {
			var _v0 = A2($elm$core$Dict$get, 'caption', dict);
			if (_v0.$ === 1) {
				return $mdgriffith$elm_ui$Element$none;
			} else {
				var c = _v0.a;
				return A2(
					$mdgriffith$elm_ui$Element$row,
					_List_fromArray(
						[placement]),
					_List_fromArray(
						[
							A2(
							$mdgriffith$elm_ui$Element$el,
							_List_Nil,
							$mdgriffith$elm_ui$Element$text(c))
						]));
			}
		}();
		return A2(
			$mdgriffith$elm_ui$Element$column,
			_List_fromArray(
				[
					$mdgriffith$elm_ui$Element$spacing(8),
					$mdgriffith$elm_ui$Element$width(
					$mdgriffith$elm_ui$Element$px(displayWidth)),
					placement
				]),
			_List_fromArray(
				[
					A2(
					$mdgriffith$elm_ui$Element$image,
					_List_fromArray(
						[
							$mdgriffith$elm_ui$Element$width(width),
							placement
						]),
					{
						g_: description,
						h8: A2(
							$elm$core$Maybe$withDefault,
							'no image url',
							$author$project$Render$Elm$getText(body))
					}),
					caption
				]));
	});
var $author$project$Render$Elm$indentPadding = $mdgriffith$elm_ui$Element$paddingEach(
	{cn: 0, cY: 24, de: 0, dp: 0});
var $mdgriffith$elm_ui$Element$Font$italic = $mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.hu);
var $jxxcarlson$elm_graph$SimpleGraph$getDataWindow = function (pointList) {
	var ys = A2($elm$core$List$map, $elm$core$Tuple$second, pointList);
	var yMin = A2(
		$elm$core$Maybe$withDefault,
		0,
		$elm$core$List$minimum(ys));
	var yMax = A2(
		$elm$core$Maybe$withDefault,
		0,
		$elm$core$List$maximum(ys));
	var xs = A2($elm$core$List$map, $elm$core$Tuple$first, pointList);
	var xMin = A2(
		$elm$core$Maybe$withDefault,
		0,
		$elm$core$List$minimum(xs));
	var xMax = A2(
		$elm$core$Maybe$withDefault,
		0,
		$elm$core$List$maximum(xs));
	return {P: xMax, m: xMin, Q: yMax, t: yMin};
};
var $jxxcarlson$elm_graph$SimpleGraph$boundingBox = F2(
	function (options, dw) {
		var _v0 = _Utils_Tuple2(
			$jxxcarlson$elm_graph$SimpleGraph$xTickmarks(options),
			$jxxcarlson$elm_graph$SimpleGraph$yTickmarks(options));
		if ((!_v0.a) && (!_v0.b)) {
			return _List_Nil;
		} else {
			return _List_fromArray(
				[
					_Utils_Tuple2(dw.m, dw.t),
					_Utils_Tuple2(dw.P, dw.t),
					_Utils_Tuple2(dw.P, dw.Q),
					_Utils_Tuple2(dw.m, dw.Q),
					_Utils_Tuple2(dw.m, dw.t)
				]);
		}
	});
var $jxxcarlson$elm_graph$SimpleGraph$getScaleFactor = F2(
	function (dataWindow, gA) {
		var ky = gA.eo / (dataWindow.Q - dataWindow.t);
		var kx = gA.ep / (dataWindow.P - dataWindow.m);
		return _Utils_Tuple2(kx, ky);
	});
var $jxxcarlson$elm_graph$SimpleGraph$makeXLabel = F3(
	function (_v0, dw, x) {
		var kx = _v0.a;
		var ky = _v0.b;
		var label = $elm$core$String$fromFloat(
			A2($jxxcarlson$elm_graph$SimpleGraph$roundTo, 1, x));
		var dx = $elm$core$String$fromFloat(kx * (x - dw.m));
		return A2(
			$elm$svg$Svg$text_,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$transform('translate(' + (dx + ',0) scale(1,-1)')),
					$elm$svg$Svg$Attributes$x('-8'),
					$elm$svg$Svg$Attributes$y('20'),
					$elm$svg$Svg$Attributes$fontSize('9px')
				]),
			_List_fromArray(
				[
					$elm$svg$Svg$text(label)
				]));
	});
var $jxxcarlson$elm_graph$SimpleGraph$makeXLabels = F3(
	function (_v0, dw, n) {
		var kx = _v0.a;
		var ky = _v0.b;
		var _v1 = !n;
		if (_v1) {
			return A2($elm$svg$Svg$g, _List_Nil, _List_Nil);
		} else {
			return function (x) {
				return A2($elm$svg$Svg$g, _List_Nil, x);
			}(
				A2(
					$elm$core$List$map,
					A2(
						$jxxcarlson$elm_graph$SimpleGraph$makeXLabel,
						_Utils_Tuple2(kx, ky),
						dw),
					A2(
						$elm$core$List$map,
						function (k) {
							return dw.m + ((k * (dw.P - dw.m)) / (n - 1));
						},
						A2($elm$core$List$range, 0, n - 1))));
		}
	});
var $jxxcarlson$elm_graph$SimpleGraph$tickMarkLength = 7.5;
var $jxxcarlson$elm_graph$SimpleGraph$makeXTickMark = F3(
	function (ky, dw, x) {
		return _List_fromArray(
			[
				_Utils_Tuple2(x, dw.t),
				_Utils_Tuple2(x, dw.t - ($jxxcarlson$elm_graph$SimpleGraph$tickMarkLength / ky))
			]);
	});
var $jxxcarlson$elm_graph$SimpleGraph$translate = F2(
	function (_v0, data) {
		var dx = _v0.a;
		var dy = _v0.b;
		return A2(
			$elm$core$List$map,
			function (_v1) {
				var x = _v1.a;
				var y = _v1.b;
				return _Utils_Tuple2(x + dx, y + dy);
			},
			data);
	});
var $jxxcarlson$elm_graph$SimpleGraph$makeXTickMarks = F4(
	function (_v0, render, dw, n) {
		var kx = _v0.a;
		var ky = _v0.b;
		var _v1 = !n;
		if (_v1) {
			return function (x) {
				return A2($elm$svg$Svg$g, _List_Nil, x);
			}(
				A2($elm$core$List$map, render, _List_Nil));
		} else {
			return function (x) {
				return A2($elm$svg$Svg$g, _List_Nil, x);
			}(
				A2(
					$elm$core$List$map,
					render,
					A2(
						$elm$core$List$map,
						$jxxcarlson$elm_graph$SimpleGraph$translate(
							_Utils_Tuple2(dw.m, 0)),
						A2(
							$elm$core$List$map,
							A2($jxxcarlson$elm_graph$SimpleGraph$makeXTickMark, ky, dw),
							A2(
								$elm$core$List$map,
								function (k) {
									return (k * (dw.P - dw.m)) / (n - 1);
								},
								A2($elm$core$List$range, 0, n - 1))))));
		}
	});
var $jxxcarlson$elm_graph$SimpleGraph$makeYLabel = F3(
	function (_v0, dw, y) {
		var kx = _v0.a;
		var ky = _v0.b;
		var label = $elm$core$String$fromFloat(
			A2($jxxcarlson$elm_graph$SimpleGraph$roundTo, 1, y));
		var dy = $elm$core$String$fromFloat((ky * (y - dw.t)) - 3);
		return A2(
			$elm$svg$Svg$text_,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$transform('translate(0,' + (dy + ') scale(1,-1)')),
					$elm$svg$Svg$Attributes$x(
					$elm$core$String$fromFloat(-30)),
					$elm$svg$Svg$Attributes$y('0'),
					$elm$svg$Svg$Attributes$fontSize('9px')
				]),
			_List_fromArray(
				[
					$elm$svg$Svg$text(label)
				]));
	});
var $jxxcarlson$elm_graph$SimpleGraph$makeYLabels = F3(
	function (_v0, dw, n) {
		var kx = _v0.a;
		var ky = _v0.b;
		var _v1 = !n;
		if (_v1) {
			return A2($elm$svg$Svg$g, _List_Nil, _List_Nil);
		} else {
			return function (x) {
				return A2($elm$svg$Svg$g, _List_Nil, x);
			}(
				A2(
					$elm$core$List$map,
					A2(
						$jxxcarlson$elm_graph$SimpleGraph$makeYLabel,
						_Utils_Tuple2(kx, ky),
						dw),
					A2(
						$elm$core$List$map,
						function (k) {
							return dw.t + ((k * (dw.Q - dw.t)) / (n - 1));
						},
						A2($elm$core$List$range, 0, n - 1))));
		}
	});
var $jxxcarlson$elm_graph$SimpleGraph$makeYTickMark = F3(
	function (kx, dw, y) {
		return _List_fromArray(
			[
				_Utils_Tuple2(dw.m, y),
				_Utils_Tuple2(dw.m - ($jxxcarlson$elm_graph$SimpleGraph$tickMarkLength / kx), y)
			]);
	});
var $jxxcarlson$elm_graph$SimpleGraph$makeYTickMarks = F4(
	function (_v0, render, dw, n) {
		var kx = _v0.a;
		var ky = _v0.b;
		var _v1 = !n;
		if (_v1) {
			return function (x) {
				return A2($elm$svg$Svg$g, _List_Nil, x);
			}(
				A2($elm$core$List$map, render, _List_Nil));
		} else {
			return function (x) {
				return A2($elm$svg$Svg$g, _List_Nil, x);
			}(
				A2(
					$elm$core$List$map,
					render,
					A2(
						$elm$core$List$map,
						$jxxcarlson$elm_graph$SimpleGraph$translate(
							_Utils_Tuple2(0, dw.t)),
						A2(
							$elm$core$List$map,
							A2($jxxcarlson$elm_graph$SimpleGraph$makeYTickMark, kx, dw),
							A2(
								$elm$core$List$map,
								function (k) {
									return (k * (dw.Q - dw.t)) / (n - 1);
								},
								A2($elm$core$List$range, 0, n - 1))))));
		}
	});
var $jxxcarlson$elm_graph$SimpleGraph$rescale = F2(
	function (_v0, data) {
		var kx = _v0.a;
		var ky = _v0.b;
		return A2(
			$elm$core$List$map,
			function (_v1) {
				var x = _v1.a;
				var y = _v1.b;
				return _Utils_Tuple2(kx * x, ky * y);
			},
			data);
	});
var $jxxcarlson$elm_graph$SimpleGraph$segments = function (list) {
	var n = $elm$core$List$length(list);
	return A3(
		$elm$core$List$map2,
		$elm$core$Tuple$pair,
		A2($elm$core$List$take, n - 1, list),
		A2($elm$core$List$drop, 1, list));
};
var $jxxcarlson$elm_graph$SimpleGraph$segmentsToSVG = F2(
	function (options, segmentList) {
		return function (x) {
			return A2($elm$svg$Svg$g, _List_Nil, x);
		}(
			A2(
				$elm$core$List$map,
				$jxxcarlson$elm_graph$SimpleGraph$segmentToSVG(options),
				segmentList));
	});
var $jxxcarlson$elm_graph$SimpleGraph$lineChartAsSVGWithDataWindow = F3(
	function (dw, ga, data) {
		var transformer = $elm$svg$Svg$Attributes$transform(
			$jxxcarlson$elm_graph$SimpleGraph$buildSVGTransformString(ga));
		var scaleFactor = A2($jxxcarlson$elm_graph$SimpleGraph$getScaleFactor, dw, ga);
		var xLabels = A3(
			$jxxcarlson$elm_graph$SimpleGraph$makeXLabels,
			scaleFactor,
			dw,
			$jxxcarlson$elm_graph$SimpleGraph$xTickmarks(ga.hN));
		var yLabels = A3(
			$jxxcarlson$elm_graph$SimpleGraph$makeYLabels,
			scaleFactor,
			dw,
			$jxxcarlson$elm_graph$SimpleGraph$yTickmarks(ga.hN));
		var renderPlain = function (data_) {
			return A2(
				$jxxcarlson$elm_graph$SimpleGraph$segmentsToSVG,
				_List_Nil,
				$jxxcarlson$elm_graph$SimpleGraph$segments(
					A2(
						$jxxcarlson$elm_graph$SimpleGraph$rescale,
						scaleFactor,
						A2(
							$jxxcarlson$elm_graph$SimpleGraph$translate,
							_Utils_Tuple2(-dw.m, -dw.t),
							data_))));
		};
		var xTickMarks_ = A4(
			$jxxcarlson$elm_graph$SimpleGraph$makeXTickMarks,
			scaleFactor,
			renderPlain,
			dw,
			$jxxcarlson$elm_graph$SimpleGraph$xTickmarks(ga.hN));
		var yTickMarks_ = A4(
			$jxxcarlson$elm_graph$SimpleGraph$makeYTickMarks,
			scaleFactor,
			renderPlain,
			dw,
			$jxxcarlson$elm_graph$SimpleGraph$yTickmarks(ga.hN));
		var render = function (data_) {
			return A2(
				$jxxcarlson$elm_graph$SimpleGraph$segmentsToSVG,
				ga.hN,
				$jxxcarlson$elm_graph$SimpleGraph$segments(
					A2(
						$jxxcarlson$elm_graph$SimpleGraph$rescale,
						scaleFactor,
						A2(
							$jxxcarlson$elm_graph$SimpleGraph$translate,
							_Utils_Tuple2(-dw.m, -dw.t),
							data_))));
		};
		var theData = render(data);
		var ordinate = renderPlain(
			_List_fromArray(
				[
					_Utils_Tuple2(dw.m, dw.t),
					_Utils_Tuple2(dw.m, dw.Q)
				]));
		var boundingBox_ = renderPlain(
			A2($jxxcarlson$elm_graph$SimpleGraph$boundingBox, ga.hN, dw));
		var abscissa = renderPlain(
			_List_fromArray(
				[
					_Utils_Tuple2(dw.m, 0),
					_Utils_Tuple2(dw.P, 0)
				]));
		return A2(
			$elm$svg$Svg$g,
			_List_fromArray(
				[transformer]),
			_List_fromArray(
				[theData, abscissa, ordinate, boundingBox_, xTickMarks_, yTickMarks_, xLabels, yLabels]));
	});
var $jxxcarlson$elm_graph$SimpleGraph$lineChartWithDataWindow = F3(
	function (dw, ga, data) {
		return A2(
			$elm$svg$Svg$svg,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$transform('scale(1,-1)'),
					$elm$svg$Svg$Attributes$height(
					$elm$core$String$fromFloat(ga.eo + 40)),
					$elm$svg$Svg$Attributes$width(
					$elm$core$String$fromFloat(ga.ep + 50)),
					$elm$svg$Svg$Attributes$viewBox(
					'-40 -20 ' + ($elm$core$String$fromFloat(ga.ep + 50) + (' ' + $elm$core$String$fromFloat(ga.eo + 40))))
				]),
			_List_fromArray(
				[
					A3($jxxcarlson$elm_graph$SimpleGraph$lineChartAsSVGWithDataWindow, dw, ga, data)
				]));
	});
var $jxxcarlson$elm_graph$SimpleGraph$lineChart = F2(
	function (ga, data) {
		return A3(
			$jxxcarlson$elm_graph$SimpleGraph$lineChartWithDataWindow,
			$jxxcarlson$elm_graph$SimpleGraph$getDataWindow(data),
			ga,
			data);
	});
var $author$project$Render$Utility$makePair = function (ns) {
	if ((ns.b && ns.b.b) && (!ns.b.b.b)) {
		var x = ns.a;
		var _v1 = ns.b;
		var y = _v1.a;
		return $elm$core$Maybe$Just(
			_Utils_Tuple2(x, y));
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $author$project$Widget$Data$linegraph = F5(
	function (renderArgs, name, args, body, sm) {
		var numbers_ = $author$project$Render$Utility$getCSV(body);
		var points = $elm_community$maybe_extra$Maybe$Extra$values(
			A2(
				$elm$core$List$map,
				$author$project$Render$Utility$makePair,
				A2(
					$elm$core$List$map,
					$elm_community$maybe_extra$Maybe$Extra$values,
					A2(
						$elm$core$List$map,
						$elm$core$List$map($elm$core$String$toFloat),
						numbers_))));
		var n = $elm$core$List$length(points);
		var graphWidth = 350.0;
		var graphHeight = 200.0;
		var dict = $author$project$CYUtility$keyValueDict(args);
		var deltaX = graphWidth / n;
		var options = _List_fromArray(
			[
				$jxxcarlson$elm_graph$SimpleGraph$Color('rgb(0,0,200)'),
				$jxxcarlson$elm_graph$SimpleGraph$DeltaX(deltaX),
				$jxxcarlson$elm_graph$SimpleGraph$YTickmarks(6),
				$jxxcarlson$elm_graph$SimpleGraph$XTickmarks(
				$elm$core$Basics$round(n + 1)),
				A2($jxxcarlson$elm_graph$SimpleGraph$Scale, 1.0, 1.0)
			]);
		var lineGraphAttributes = {eo: graphHeight, ep: graphWidth, hN: options};
		return A2(
			$mdgriffith$elm_ui$Element$column,
			_List_Nil,
			_List_fromArray(
				[
					$mdgriffith$elm_ui$Element$html(
					A2($jxxcarlson$elm_graph$SimpleGraph$lineChart, lineGraphAttributes, points)),
					$author$project$Render$Utility$captionElement(dict)
				]));
	});
var $author$project$Render$Elm$linkColor = A3($mdgriffith$elm_ui$Element$rgb, 0, 0, 0.8);
var $elm$html$Html$Attributes$href = function (url) {
	return A2(
		$elm$html$Html$Attributes$stringProperty,
		'href',
		_VirtualDom_noJavaScriptUri(url));
};
var $elm$html$Html$Attributes$rel = _VirtualDom_attribute('rel');
var $elm$html$Html$Attributes$target = $elm$html$Html$Attributes$stringProperty('target');
var $mdgriffith$elm_ui$Element$newTabLink = F2(
	function (attrs, _v0) {
		var label = _v0.bS;
		var url = _v0.ea;
		return A4(
			$mdgriffith$elm_ui$Internal$Model$element,
			$mdgriffith$elm_ui$Internal$Model$asEl,
			$mdgriffith$elm_ui$Internal$Model$NodeName('a'),
			A2(
				$elm$core$List$cons,
				$mdgriffith$elm_ui$Internal$Model$Attr(
					$elm$html$Html$Attributes$href(url)),
				A2(
					$elm$core$List$cons,
					$mdgriffith$elm_ui$Internal$Model$Attr(
						$elm$html$Html$Attributes$rel('noopener noreferrer')),
					A2(
						$elm$core$List$cons,
						$mdgriffith$elm_ui$Internal$Model$Attr(
							$elm$html$Html$Attributes$target('_blank')),
						A2(
							$elm$core$List$cons,
							$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$shrink),
							A2(
								$elm$core$List$cons,
								$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$shrink),
								A2(
									$elm$core$List$cons,
									$mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.dI + (' ' + ($mdgriffith$elm_ui$Internal$Style$classes.a$ + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.fx)))),
									attrs)))))),
			$mdgriffith$elm_ui$Internal$Model$Unkeyed(
				_List_fromArray(
					[label])));
	});
var $author$project$Render$Elm$link = F5(
	function (renderArgs, name, args, body, meta) {
		var _v0 = A2($author$project$Render$Utility$getArg, 0, args);
		if (_v0.$ === 1) {
			var url_ = A2(
				$elm$core$Maybe$withDefault,
				'missing url',
				$author$project$Render$Elm$getText(body));
			return A2(
				$mdgriffith$elm_ui$Element$newTabLink,
				_List_Nil,
				{
					bS: A2(
						$mdgriffith$elm_ui$Element$el,
						_List_fromArray(
							[
								$mdgriffith$elm_ui$Element$Font$color($author$project$Render$Elm$linkColor),
								$mdgriffith$elm_ui$Element$Font$italic
							]),
						$mdgriffith$elm_ui$Element$text(url_)),
					ea: url_
				});
		} else {
			var labelText = _v0.a;
			return A2(
				$mdgriffith$elm_ui$Element$newTabLink,
				_List_Nil,
				{
					bS: A2(
						$mdgriffith$elm_ui$Element$el,
						_List_fromArray(
							[
								$mdgriffith$elm_ui$Element$Font$color($author$project$Render$Elm$linkColor),
								$mdgriffith$elm_ui$Element$Font$italic
							]),
						$mdgriffith$elm_ui$Element$text(labelText)),
					ea: A2(
						$elm$core$Maybe$withDefault,
						'missing url',
						$author$project$Render$Elm$getText(body))
				});
		}
	});
var $author$project$Render$Elm$listPadding = $mdgriffith$elm_ui$Element$paddingEach(
	{cn: 0, cY: 18, de: 0, dp: 8});
var $author$project$Render$Elm$macro = F5(
	function (renderArgs, name, args_, body, meta) {
		return $mdgriffith$elm_ui$Element$none;
	});
var $author$project$Render$Elm$poetry = F5(
	function (renderArgs, _v0, _v1, body, meta) {
		return A2(
			$mdgriffith$elm_ui$Element$column,
			_List_fromArray(
				[
					$mdgriffith$elm_ui$Element$Font$size(14),
					A2($author$project$Render$Utility$htmlAttribute, 'white-space', 'pre'),
					$author$project$Render$Elm$indentation,
					$mdgriffith$elm_ui$Element$spacing(4)
				]),
			A2(
				$elm$core$List$map,
				$mdgriffith$elm_ui$Element$text,
				$author$project$Render$Elm$getLines(
					$elm$core$String$trim(
						$author$project$Render$Elm$getText2(body)))));
	});
var $author$project$Render$Types$InlineMathMode = 0;
var $author$project$Render$Elm$isDisplayMathMode = function (displayMode) {
	if (!displayMode) {
		return false;
	} else {
		return true;
	}
};
var $elm$html$Html$node = $elm$virtual_dom$VirtualDom$node;
var $elm$html$Html$Attributes$property = $elm$virtual_dom$VirtualDom$property;
var $author$project$Render$Elm$mathText_ = F4(
	function (displayMode, selectedId, content, meta) {
		return A3(
			$elm$html$Html$node,
			'math-text',
			_List_fromArray(
				[
					A2(
					$elm$html$Html$Attributes$property,
					'display',
					$elm$json$Json$Encode$bool(
						$author$project$Render$Elm$isDisplayMathMode(displayMode))),
					A2(
					$elm$html$Html$Attributes$property,
					'content',
					$elm$json$Json$Encode$string(content))
				]),
			_List_Nil);
	});
var $elm$html$Html$Keyed$node = $elm$virtual_dom$VirtualDom$keyedNode;
var $author$project$Render$Elm$mathText = F4(
	function (renderArgs, displayMode, content, meta) {
		return $mdgriffith$elm_ui$Element$html(
			A3(
				$elm$html$Html$Keyed$node,
				'span',
				_List_Nil,
				_List_fromArray(
					[
						_Utils_Tuple2(
						$elm$core$String$fromInt(renderArgs.bI),
						A4($author$project$Render$Elm$mathText_, displayMode, renderArgs.f_, content, meta))
					])));
	});
var $author$project$Render$Elm$renderMath = F5(
	function (renderArgs, name, args, body, meta) {
		var _v0 = $author$project$Render$Elm$getText(body);
		if (!_v0.$) {
			var content = _v0.a;
			return A4($author$project$Render$Elm$mathText, renderArgs, 0, content, meta);
		} else {
			return A2(
				$mdgriffith$elm_ui$Element$el,
				_List_fromArray(
					[
						$mdgriffith$elm_ui$Element$Font$color($author$project$Render$Elm$redColor)
					]),
				$mdgriffith$elm_ui$Element$text('Error rendering math !!!'));
		}
	});
var $author$project$Render$Types$DisplayMathMode = 1;
var $author$project$Render$Elm$renderMathDisplay = F5(
	function (rendArgs, name, args, body, meta) {
		var _v0 = $author$project$Render$Elm$getText(body);
		if (!_v0.$) {
			var content = _v0.a;
			return A4($author$project$Render$Elm$mathText, rendArgs, 1, content, meta);
		} else {
			return A2(
				$mdgriffith$elm_ui$Element$el,
				_List_fromArray(
					[
						$mdgriffith$elm_ui$Element$Font$color($author$project$Render$Elm$redColor)
					]),
				$mdgriffith$elm_ui$Element$text('Error rendering math !!!'));
		}
	});
var $author$project$Render$Elm$blueColor = A3($mdgriffith$elm_ui$Element$rgb, 0, 0, 0.8);
var $author$project$Render$Elm$violetColor = A3($mdgriffith$elm_ui$Element$rgb, 0.4, 0, 0.8);
var $author$project$Render$Elm$renderMissingElement = F2(
	function (name, body) {
		return A2(
			$mdgriffith$elm_ui$Element$paragraph,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$mdgriffith$elm_ui$Element$el,
					_List_fromArray(
						[$mdgriffith$elm_ui$Element$Font$bold]),
					$mdgriffith$elm_ui$Element$text('[')),
					A2(
					$mdgriffith$elm_ui$Element$el,
					_List_fromArray(
						[
							$mdgriffith$elm_ui$Element$Font$color($author$project$Render$Elm$blueColor),
							$mdgriffith$elm_ui$Element$Font$bold
						]),
					$mdgriffith$elm_ui$Element$text(name + ' ')),
					A2(
					$mdgriffith$elm_ui$Element$el,
					_List_fromArray(
						[
							$mdgriffith$elm_ui$Element$Font$color($author$project$Render$Elm$violetColor)
						]),
					$mdgriffith$elm_ui$Element$text(
						A2(
							$elm$core$Maybe$withDefault,
							'',
							$author$project$Render$Elm$getText(body)))),
					A2(
					$mdgriffith$elm_ui$Element$el,
					_List_fromArray(
						[
							$mdgriffith$elm_ui$Element$Font$color($author$project$Render$Elm$redColor)
						]),
					$mdgriffith$elm_ui$Element$text(' << element misstyped or unimplemented')),
					A2(
					$mdgriffith$elm_ui$Element$el,
					_List_fromArray(
						[$mdgriffith$elm_ui$Element$Font$bold]),
					$mdgriffith$elm_ui$Element$text(']'))
				]));
	});
var $author$project$Render$Utility$getPoints = F2(
	function (dict, body) {
		var ycutoff = A2(
			$elm$core$Maybe$andThen,
			$elm$core$String$toFloat,
			A2($elm$core$Dict$get, 'ycutoff', dict));
		var yfilter = function (points_) {
			if (!ycutoff.$) {
				var ycutoffValue = ycutoff.a;
				return A2(
					$elm$core$List$filter,
					function (_v5) {
						var x = _v5.a;
						var y = _v5.b;
						return _Utils_cmp(y, ycutoffValue) < 0;
					},
					points_);
			} else {
				return points_;
			}
		};
		var xcutoff = A2(
			$elm$core$Maybe$andThen,
			$elm$core$String$toFloat,
			A2($elm$core$Dict$get, 'xcutoff', dict));
		var xfilter = function (points_) {
			if (!xcutoff.$) {
				var xcutoffValue = xcutoff.a;
				return A2(
					$elm$core$List$filter,
					function (_v3) {
						var x = _v3.a;
						var y = _v3.b;
						return _Utils_cmp(x, xcutoffValue) < 0;
					},
					points_);
			} else {
				return points_;
			}
		};
		var toInt_ = F2(
			function (_default, str) {
				return A2(
					$elm$core$Maybe$withDefault,
					_default,
					$elm$core$String$toInt(str));
			});
		var rawData = $author$project$Render$Utility$getCSV(body);
		var getDataColumns = F3(
			function (i, j, data) {
				return A2(
					$elm$core$List$map,
					function (column) {
						return _List_fromArray(
							[
								A2($elm_community$list_extra$List$Extra$getAt, i, column),
								A2($elm_community$list_extra$List$Extra$getAt, j, column)
							]);
					},
					rawData);
			});
		var _v0 = function () {
			var _v1 = _Utils_Tuple2(
				A2($elm$core$Dict$get, 'x-axis', dict),
				A2($elm$core$Dict$get, 'y-axis', dict));
			if ((!_v1.a.$) && (!_v1.b.$)) {
				var i = _v1.a.a;
				var j = _v1.b.a;
				return _Utils_Tuple2(
					A2(toInt_, 0, i) - 1,
					A2(toInt_, 1, j) - 1);
			} else {
				return _Utils_Tuple2(0, 1);
			}
		}();
		var col1 = _v0.a;
		var col2 = _v0.b;
		return yfilter(
			xfilter(
				$elm_community$maybe_extra$Maybe$Extra$values(
					A2(
						$elm$core$List$map,
						$author$project$Render$Utility$makePair,
						A2(
							$elm$core$List$map,
							$elm_community$maybe_extra$Maybe$Extra$values,
							A2(
								$elm$core$List$map,
								$elm$core$List$map($elm$core$String$toFloat),
								A2(
									$elm$core$List$map,
									$elm_community$maybe_extra$Maybe$Extra$values,
									A3(
										getDataColumns,
										col1,
										col2,
										$author$project$Render$Utility$getCSV(body)))))))));
	});
var $jxxcarlson$elm_graph$SimpleGraph$dot = F4(
	function (color, diameter, x, y) {
		return A2(
			$elm$svg$Svg$rect,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$width(
					$elm$core$String$fromFloat(diameter)),
					$elm$svg$Svg$Attributes$height(
					$elm$core$String$fromFloat(diameter)),
					$elm$svg$Svg$Attributes$x(
					$elm$core$String$fromFloat(x)),
					$elm$svg$Svg$Attributes$y(
					$elm$core$String$fromFloat(y)),
					$elm$svg$Svg$Attributes$fill(color)
				]),
			_List_Nil);
	});
var $jxxcarlson$elm_graph$SimpleGraph$scatterPlotAsSVG = F2(
	function (ga, data) {
		var transformer = $elm$svg$Svg$Attributes$transform(
			$jxxcarlson$elm_graph$SimpleGraph$buildSVGTransformString(ga));
		var dw = $jxxcarlson$elm_graph$SimpleGraph$getDataWindow(data);
		var scaleFactor = A2($jxxcarlson$elm_graph$SimpleGraph$getScaleFactor, dw, ga);
		var renderPlain = function (data_) {
			return A2(
				$jxxcarlson$elm_graph$SimpleGraph$segmentsToSVG,
				_List_Nil,
				$jxxcarlson$elm_graph$SimpleGraph$segments(
					A2(
						$jxxcarlson$elm_graph$SimpleGraph$rescale,
						scaleFactor,
						A2(
							$jxxcarlson$elm_graph$SimpleGraph$translate,
							_Utils_Tuple2(-dw.m, -dw.t),
							data_))));
		};
		var xScaleFactor = ga.ep / (dw.P - dw.m);
		var yScaleFactor = ga.eo / (dw.Q - dw.t);
		var rescaledData = A2(
			$elm$core$List$map,
			function (_v1) {
				var x = _v1.a;
				var y = _v1.b;
				return _Utils_Tuple2(xScaleFactor * x, yScaleFactor * y);
			},
			data);
		var diameter = 4.0;
		var dot_ = function (_v0) {
			var x = _v0.a;
			var y = _v0.b;
			return A4(
				$jxxcarlson$elm_graph$SimpleGraph$dot,
				$jxxcarlson$elm_graph$SimpleGraph$lineColor(ga.hN),
				diameter,
				x,
				y);
		};
		var rendered = A2($elm$core$List$map, dot_, rescaledData);
		var boundingBox_ = renderPlain(
			A2(
				$jxxcarlson$elm_graph$SimpleGraph$boundingBox,
				ga.hN,
				_Utils_update(
					dw,
					{P: dw.P + (diameter / xScaleFactor), Q: dw.Q + (diameter / yScaleFactor)})));
		return A2(
			$elm$svg$Svg$g,
			_List_fromArray(
				[transformer]),
			_Utils_ap(
				rendered,
				_List_fromArray(
					[boundingBox_])));
	});
var $jxxcarlson$elm_graph$SimpleGraph$scatterPlot = F2(
	function (ga, data) {
		return A2(
			$elm$svg$Svg$svg,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$transform('scale(1,-1)'),
					$elm$svg$Svg$Attributes$height(
					$elm$core$String$fromFloat(ga.eo + 40)),
					$elm$svg$Svg$Attributes$width(
					$elm$core$String$fromFloat(ga.ep + 50)),
					$elm$svg$Svg$Attributes$viewBox(
					'0 0' + ($elm$core$String$fromFloat(ga.ep + 50) + (' ' + $elm$core$String$fromFloat(ga.eo + 50))))
				]),
			_List_fromArray(
				[
					A2($jxxcarlson$elm_graph$SimpleGraph$scatterPlotAsSVG, ga, data)
				]));
	});
var $author$project$Widget$Data$scatterplot = F5(
	function (renderArgs, name, args, body, sm) {
		var graphWidth = 400.0;
		var graphHeight = 400.0;
		var dict = $author$project$CYUtility$keyValueDict(args);
		var points = A2($author$project$Render$Utility$getPoints, dict, body);
		var n = $elm$core$List$length(points);
		var points2 = A2(
			$elm$core$List$map,
			function (_v0) {
				var x = _v0.a;
				var y = _v0.b;
				return _Utils_Tuple2(x - 0.03, y);
			},
			points);
		var xmax = A2(
			$elm$core$Maybe$withDefault,
			0,
			$elm$core$List$maximum(
				A2($elm$core$List$map, $elm$core$Tuple$first, points)));
		var ymax = A2(
			$elm$core$Maybe$withDefault,
			0,
			$elm$core$List$maximum(
				A2($elm$core$List$map, $elm$core$Tuple$second, points)));
		var deltaX = graphWidth / n;
		var options = _List_fromArray(
			[
				$jxxcarlson$elm_graph$SimpleGraph$Color('rgb(0,0,200)'),
				$jxxcarlson$elm_graph$SimpleGraph$DeltaX(deltaX),
				$jxxcarlson$elm_graph$SimpleGraph$YTickmarks(6),
				$jxxcarlson$elm_graph$SimpleGraph$XTickmarks(
				$elm$core$Basics$round(n + 1)),
				A2($jxxcarlson$elm_graph$SimpleGraph$Scale, 1.0, 1.0)
			]);
		var scatterPlotAttributes = {eo: graphHeight, ep: graphWidth, hN: options};
		return A2(
			$mdgriffith$elm_ui$Element$column,
			_List_Nil,
			_List_fromArray(
				[
					$mdgriffith$elm_ui$Element$html(
					A2($jxxcarlson$elm_graph$SimpleGraph$scatterPlot, scatterPlotAttributes, points2)),
					$author$project$Render$Utility$captionElement(dict),
					A2(
					$mdgriffith$elm_ui$Element$paragraph,
					_List_fromArray(
						[
							$mdgriffith$elm_ui$Element$spacing(12)
						]),
					_List_fromArray(
						[
							$mdgriffith$elm_ui$Element$text(
							'data points: ' + ($elm$core$String$fromFloat(n) + ', ')),
							$mdgriffith$elm_ui$Element$text(
							'xmax: ' + ($elm$core$String$fromFloat(
								A2($author$project$CYUtility$roundTo, 0, xmax)) + ', ')),
							$mdgriffith$elm_ui$Element$text(
							'ymax: ' + $elm$core$String$fromFloat(
								A2($author$project$CYUtility$roundTo, 0, ymax)))
						]))
				]));
	});
var $mdgriffith$elm_ui$Element$link = F2(
	function (attrs, _v0) {
		var label = _v0.bS;
		var url = _v0.ea;
		return A4(
			$mdgriffith$elm_ui$Internal$Model$element,
			$mdgriffith$elm_ui$Internal$Model$asEl,
			$mdgriffith$elm_ui$Internal$Model$NodeName('a'),
			A2(
				$elm$core$List$cons,
				$mdgriffith$elm_ui$Internal$Model$Attr(
					$elm$html$Html$Attributes$href(url)),
				A2(
					$elm$core$List$cons,
					$mdgriffith$elm_ui$Internal$Model$Attr(
						$elm$html$Html$Attributes$rel('noopener noreferrer')),
					A2(
						$elm$core$List$cons,
						$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$shrink),
						A2(
							$elm$core$List$cons,
							$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$shrink),
							A2(
								$elm$core$List$cons,
								$mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.dI + (' ' + ($mdgriffith$elm_ui$Internal$Style$classes.a$ + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.fx)))),
								attrs))))),
			$mdgriffith$elm_ui$Internal$Model$Unkeyed(
				_List_fromArray(
					[label])));
	});
var $author$project$Render$Utility$slug = function (str) {
	return $elm$core$String$toLower(
		A3($elm$core$String$replace, ' ', '-', str));
};
var $elm$core$Basics$sqrt = _Basics_sqrt;
var $author$project$Render$Elm$section_ = F5(
	function (renderArgs, name, args, body, meta) {
		var sectionName = A2(
			$elm$core$Maybe$withDefault,
			'no section name found',
			$author$project$Render$Elm$getText(body));
		var tag = $author$project$Render$Utility$slug(sectionName);
		var level = A2(
			$elm$core$Maybe$withDefault,
			1.0,
			$elm$core$String$toFloat(
				A3($elm$core$String$replace, 'section', '', name)));
		var scaleFactor = A2(
			$elm$core$Basics$max,
			$elm$core$Basics$sqrt(1.0 / level),
			0.5);
		return A2(
			$mdgriffith$elm_ui$Element$column,
			_List_fromArray(
				[
					$mdgriffith$elm_ui$Element$Font$size(
					$elm$core$Basics$round(scaleFactor * $author$project$Render$Elm$sectionFontSize)),
					$author$project$Render$Elm$paddingAbove(
					$elm$core$Basics$round((0.8 * scaleFactor) * $author$project$Render$Elm$sectionFontSize)),
					A2($author$project$Render$Utility$htmlAttribute, 'id', tag)
				]),
			_List_fromArray(
				[
					A2(
					$mdgriffith$elm_ui$Element$link,
					_List_Nil,
					{
						bS: A2(
							$mdgriffith$elm_ui$Element$el,
							_List_Nil,
							$mdgriffith$elm_ui$Element$text(
								$author$project$Render$Elm$getLabel(meta) + (' ' + sectionName))),
						ea: '#tableofcontents__'
					})
				]));
	});
var $author$project$Render$Elm$set = F5(
	function (renderArgs, name, args_, body, meta) {
		return $mdgriffith$elm_ui$Element$none;
	});
var $author$project$Render$Elm$set_ = F5(
	function (renderArgs, name, args_, body, meta) {
		return A2(
			$mdgriffith$elm_ui$Element$el,
			_List_fromArray(
				[
					$mdgriffith$elm_ui$Element$Font$color($author$project$Render$Elm$codeColor)
				]),
			$mdgriffith$elm_ui$Element$text(
				'set ' + $author$project$Render$Elm$getText2(body)));
	});
var $jxxcarlson$elm_spreadsheet$Spreadsheet$getColumn = F2(
	function (col, sheet) {
		return A2($elm_community$list_extra$List$Extra$getAt, col, sheet);
	});
var $jxxcarlson$elm_spreadsheet$Spreadsheet$getCell = F3(
	function (row, col, sheet) {
		return A2(
			$elm$core$Maybe$andThen,
			$elm_community$list_extra$List$Extra$getAt(row),
			A2($jxxcarlson$elm_spreadsheet$Spreadsheet$getColumn, col, sheet));
	});
var $elm_community$list_extra$List$Extra$updateAt = F3(
	function (index, fn, list) {
		if (index < 0) {
			return list;
		} else {
			var tail = A2($elm$core$List$drop, index, list);
			var head = A2($elm$core$List$take, index, list);
			if (tail.b) {
				var x = tail.a;
				var xs = tail.b;
				return _Utils_ap(
					head,
					A2(
						$elm$core$List$cons,
						fn(x),
						xs));
			} else {
				return list;
			}
		}
	});
var $elm_community$list_extra$List$Extra$setAt = F2(
	function (index, value) {
		return A2(
			$elm_community$list_extra$List$Extra$updateAt,
			index,
			$elm$core$Basics$always(value));
	});
var $jxxcarlson$elm_spreadsheet$Spreadsheet$putCell = F4(
	function (row, col, cell, sheet) {
		var _v0 = A2($jxxcarlson$elm_spreadsheet$Spreadsheet$getColumn, col, sheet);
		if (_v0.$ === 1) {
			return sheet;
		} else {
			var column_ = _v0.a;
			var newColumn = A3($elm_community$list_extra$List$Extra$setAt, row, cell, column_);
			return A3($elm_community$list_extra$List$Extra$setAt, col, newColumn, sheet);
		}
	});
var $toastal$either$Either$Right = function (a) {
	return {$: 1, a: a};
};
var $jxxcarlson$elm_spreadsheet$Cell$Undefined = {$: 4};
var $jxxcarlson$elm_spreadsheet$Cell$Real = function (a) {
	return {$: 1, a: a};
};
var $jxxcarlson$elm_spreadsheet$Spreadsheet$addCell = F2(
	function (y, cell) {
		if ((cell.$ === 1) && (cell.a.$ === 1)) {
			var x = cell.a.a;
			return x + y;
		} else {
			return 0;
		}
	});
var $jxxcarlson$elm_spreadsheet$Spreadsheet$listSlice = F3(
	function (a, b, list) {
		return A2(
			$elm$core$List$drop,
			a,
			A2($elm$core$List$take, b + 1, list));
	});
var $jxxcarlson$elm_spreadsheet$Spreadsheet$sumColumn_ = F3(
	function (row1, row2, column) {
		return function (x) {
			return $toastal$either$Either$Right(
				$jxxcarlson$elm_spreadsheet$Cell$Real(x));
		}(
			A3(
				$elm$core$List$foldl,
				F2(
					function (cell, acc) {
						return A2($jxxcarlson$elm_spreadsheet$Spreadsheet$addCell, acc, cell);
					}),
				0,
				A3($jxxcarlson$elm_spreadsheet$Spreadsheet$listSlice, row1, row2, column)));
	});
var $jxxcarlson$elm_spreadsheet$Spreadsheet$sumColumn = F4(
	function (col, row1, row2, sheet) {
		var _v0 = A2($jxxcarlson$elm_spreadsheet$Spreadsheet$getColumn, col, sheet);
		if (_v0.$ === 1) {
			return $toastal$either$Either$Right($jxxcarlson$elm_spreadsheet$Cell$Undefined);
		} else {
			var column_ = _v0.a;
			return A3($jxxcarlson$elm_spreadsheet$Spreadsheet$sumColumn_, row1, row2, column_);
		}
	});
var $jxxcarlson$elm_spreadsheet$Spreadsheet$applyColOp_ = F3(
	function (row, col, sheet) {
		var _v0 = A3($jxxcarlson$elm_spreadsheet$Spreadsheet$getCell, row, col, sheet);
		if (_v0.$ === 1) {
			return sheet;
		} else {
			if ((!_v0.a.$) && (_v0.a.a.$ === 1)) {
				var _v1 = _v0.a.a;
				var opSymbol = _v1.a;
				var i = _v1.b;
				var j = _v1.c;
				if (opSymbol === 'sum') {
					return A4(
						$jxxcarlson$elm_spreadsheet$Spreadsheet$putCell,
						row,
						col,
						A4($jxxcarlson$elm_spreadsheet$Spreadsheet$sumColumn, col, i, j, sheet),
						sheet);
				} else {
					return sheet;
				}
			} else {
				return sheet;
			}
		}
	});
var $jxxcarlson$elm_spreadsheet$Spreadsheet$height = function (sheet) {
	return A2(
		$elm$core$Maybe$withDefault,
		0,
		A2(
			$elm$core$Maybe$map,
			$elm$core$List$length,
			$elm$core$List$head(sheet)));
};
var $jxxcarlson$elm_spreadsheet$Spreadsheet$applyColOp = F2(
	function (col, sheet) {
		return A3(
			$elm$core$List$foldl,
			F2(
				function (row, sheet_) {
					return A3($jxxcarlson$elm_spreadsheet$Spreadsheet$applyColOp_, row, col, sheet_);
				}),
			sheet,
			A2(
				$elm$core$List$range,
				0,
				$jxxcarlson$elm_spreadsheet$Spreadsheet$height(sheet) - 1));
	});
var $jxxcarlson$elm_spreadsheet$Spreadsheet$width = function (sheet) {
	return $elm$core$List$length(sheet);
};
var $jxxcarlson$elm_spreadsheet$Spreadsheet$evalColOps = function (sheet) {
	return A3(
		$elm$core$List$foldl,
		F2(
			function (row, sheet_) {
				return A2($jxxcarlson$elm_spreadsheet$Spreadsheet$applyColOp, row, sheet_);
			}),
		sheet,
		A2(
			$elm$core$List$range,
			0,
			$jxxcarlson$elm_spreadsheet$Spreadsheet$width(sheet) - 1));
};
var $jxxcarlson$elm_spreadsheet$Spreadsheet$opRealDict = $elm$core$Dict$fromList(
	_List_fromArray(
		[
			_Utils_Tuple2('+', $elm$core$Basics$add),
			_Utils_Tuple2('-', $elm$core$Basics$sub),
			_Utils_Tuple2('*', $elm$core$Basics$mul),
			_Utils_Tuple2('/', $elm$core$Basics$fdiv)
		]));
var $jxxcarlson$elm_spreadsheet$Spreadsheet$applyRowOp_ = F3(
	function (row, col, sheet) {
		var _v0 = A3($jxxcarlson$elm_spreadsheet$Spreadsheet$getCell, row, col, sheet);
		if (_v0.$ === 1) {
			return sheet;
		} else {
			if ((!_v0.a.$) && (!_v0.a.a.$)) {
				var _v1 = _v0.a.a;
				var opSymbol = _v1.a;
				var i = _v1.b;
				var j = _v1.c;
				var _v2 = _Utils_Tuple3(
					A2($elm$core$Dict$get, opSymbol, $jxxcarlson$elm_spreadsheet$Spreadsheet$opRealDict),
					A3($jxxcarlson$elm_spreadsheet$Spreadsheet$getCell, row, i, sheet),
					A3($jxxcarlson$elm_spreadsheet$Spreadsheet$getCell, row, j, sheet));
				if (((((((!_v2.a.$) && (!_v2.b.$)) && (_v2.b.a.$ === 1)) && (_v2.b.a.a.$ === 1)) && (!_v2.c.$)) && (_v2.c.a.$ === 1)) && (_v2.c.a.a.$ === 1)) {
					var op = _v2.a.a;
					var x = _v2.b.a.a.a;
					var y = _v2.c.a.a.a;
					return A4(
						$jxxcarlson$elm_spreadsheet$Spreadsheet$putCell,
						row,
						col,
						$toastal$either$Either$Right(
							$jxxcarlson$elm_spreadsheet$Cell$Real(
								A2(op, x, y))),
						sheet);
				} else {
					return sheet;
				}
			} else {
				return sheet;
			}
		}
	});
var $jxxcarlson$elm_spreadsheet$Spreadsheet$applyRowOp = F2(
	function (col, sheet) {
		return A3(
			$elm$core$List$foldl,
			F2(
				function (row, sheet_) {
					return A3($jxxcarlson$elm_spreadsheet$Spreadsheet$applyRowOp_, row, col, sheet_);
				}),
			sheet,
			A2(
				$elm$core$List$range,
				0,
				$jxxcarlson$elm_spreadsheet$Spreadsheet$height(sheet) - 1));
	});
var $jxxcarlson$elm_spreadsheet$Spreadsheet$evalRowOps = function (sheet) {
	return A3(
		$elm$core$List$foldl,
		F2(
			function (col, sheet_) {
				return A2($jxxcarlson$elm_spreadsheet$Spreadsheet$applyRowOp, col, sheet_);
			}),
		sheet,
		A2(
			$elm$core$List$range,
			0,
			$jxxcarlson$elm_spreadsheet$Spreadsheet$width(sheet) - 1));
};
var $jxxcarlson$elm_spreadsheet$Spreadsheet$eval = function (sheet) {
	return $jxxcarlson$elm_spreadsheet$Spreadsheet$evalColOps(
		$jxxcarlson$elm_spreadsheet$Spreadsheet$evalRowOps(sheet));
};
var $toastal$either$Either$Left = function (a) {
	return {$: 0, a: a};
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
var $elm$parser$Parser$backtrackable = $elm$parser$Parser$Advanced$backtrackable;
var $elm$parser$Parser$map = $elm$parser$Parser$Advanced$map;
var $elm$parser$Parser$oneOf = $elm$parser$Parser$Advanced$oneOf;
var $jxxcarlson$elm_spreadsheet$Cell$ColOp = F3(
	function (a, b, c) {
		return {$: 1, a: a, b: b, c: c};
	});
var $elm$parser$Parser$ignorer = $elm$parser$Parser$Advanced$ignorer;
var $elm$parser$Parser$ExpectingInt = {$: 1};
var $elm$parser$Parser$Advanced$consumeBase = _Parser_consumeBase;
var $elm$parser$Parser$Advanced$consumeBase16 = _Parser_consumeBase16;
var $elm$parser$Parser$Advanced$bumpOffset = F2(
	function (newOffset, s) {
		return {gP: s.gP + (newOffset - s.aG), e: s.e, i: s.i, aG: newOffset, eF: s.eF, h8: s.h8};
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
				_Utils_cmp(s.aG, startOffset) < 0,
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
var $elm$parser$Parser$Advanced$finalizeFloat = F6(
	function (invalid, expecting, intSettings, floatSettings, intPair, s) {
		var intOffset = intPair.a;
		var floatOffset = A2($elm$parser$Parser$Advanced$consumeDotAndExp, intOffset, s.h8);
		if (floatOffset < 0) {
			return A2(
				$elm$parser$Parser$Advanced$Bad,
				true,
				A4($elm$parser$Parser$Advanced$fromInfo, s.eF, s.gP - (floatOffset + s.aG), invalid, s.e));
		} else {
			if (_Utils_eq(s.aG, floatOffset)) {
				return A2(
					$elm$parser$Parser$Advanced$Bad,
					false,
					A2($elm$parser$Parser$Advanced$fromState, s, expecting));
			} else {
				if (_Utils_eq(intOffset, floatOffset)) {
					return A5($elm$parser$Parser$Advanced$finalizeInt, invalid, intSettings, s.aG, intPair, s);
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
							A3($elm$core$String$slice, s.aG, floatOffset, s.h8));
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
		if (A3($elm$parser$Parser$Advanced$isAsciiCode, 48, s.aG, s.h8)) {
			var zeroOffset = s.aG + 1;
			var baseOffset = zeroOffset + 1;
			return A3($elm$parser$Parser$Advanced$isAsciiCode, 120, zeroOffset, s.h8) ? A5(
				$elm$parser$Parser$Advanced$finalizeInt,
				c.hs,
				c.hd,
				baseOffset,
				A2($elm$parser$Parser$Advanced$consumeBase16, baseOffset, s.h8),
				s) : (A3($elm$parser$Parser$Advanced$isAsciiCode, 111, zeroOffset, s.h8) ? A5(
				$elm$parser$Parser$Advanced$finalizeInt,
				c.hs,
				c.fG,
				baseOffset,
				A3($elm$parser$Parser$Advanced$consumeBase, 8, baseOffset, s.h8),
				s) : (A3($elm$parser$Parser$Advanced$isAsciiCode, 98, zeroOffset, s.h8) ? A5(
				$elm$parser$Parser$Advanced$finalizeInt,
				c.hs,
				c.eX,
				baseOffset,
				A3($elm$parser$Parser$Advanced$consumeBase, 2, baseOffset, s.h8),
				s) : A6(
				$elm$parser$Parser$Advanced$finalizeFloat,
				c.hs,
				c.fc,
				c.fr,
				c.fd,
				_Utils_Tuple2(zeroOffset, 0),
				s)));
		} else {
			return A6(
				$elm$parser$Parser$Advanced$finalizeFloat,
				c.hs,
				c.fc,
				c.fr,
				c.fd,
				A3($elm$parser$Parser$Advanced$consumeBase, 10, s.aG, s.h8),
				s);
		}
	};
};
var $elm$parser$Parser$Advanced$int = F2(
	function (expecting, invalid) {
		return $elm$parser$Parser$Advanced$number(
			{
				eX: $elm$core$Result$Err(invalid),
				fc: expecting,
				fd: $elm$core$Result$Err(invalid),
				hd: $elm$core$Result$Err(invalid),
				fr: $elm$core$Result$Ok($elm$core$Basics$identity),
				hs: invalid,
				fG: $elm$core$Result$Err(invalid)
			});
	});
var $elm$parser$Parser$int = A2($elm$parser$Parser$Advanced$int, $elm$parser$Parser$ExpectingInt, $elm$parser$Parser$ExpectingInt);
var $elm$parser$Parser$keeper = $elm$parser$Parser$Advanced$keeper;
var $elm$parser$Parser$spaces = $elm$parser$Parser$Advanced$spaces;
var $jxxcarlson$elm_spreadsheet$Cell$isSymbol = function (str) {
	return A2(
		$elm$core$List$member,
		str,
		_List_fromArray(
			['+', '-', '*', '/']));
};
var $elm$parser$Parser$UnexpectedChar = {$: 11};
var $elm$parser$Parser$chompIf = function (isGood) {
	return A2($elm$parser$Parser$Advanced$chompIf, isGood, $elm$parser$Parser$UnexpectedChar);
};
var $elm$parser$Parser$chompWhile = $elm$parser$Parser$Advanced$chompWhile;
var $elm$parser$Parser$getOffset = $elm$parser$Parser$Advanced$getOffset;
var $elm$parser$Parser$getSource = $elm$parser$Parser$Advanced$getSource;
var $elm$parser$Parser$succeed = $elm$parser$Parser$Advanced$succeed;
var $jxxcarlson$elm_spreadsheet$XString$withPredicates = F2(
	function (prefixTest, predicate) {
		return A2(
			$elm$parser$Parser$keeper,
			A2(
				$elm$parser$Parser$keeper,
				A2(
					$elm$parser$Parser$keeper,
					$elm$parser$Parser$succeed(
						F3(
							function (start, finish, content) {
								return A3($elm$core$String$slice, start, finish, content);
							})),
					A2(
						$elm$parser$Parser$ignorer,
						A2(
							$elm$parser$Parser$ignorer,
							$elm$parser$Parser$getOffset,
							$elm$parser$Parser$chompIf(
								function (c) {
									return prefixTest(c);
								})),
						$elm$parser$Parser$chompWhile(
							function (c) {
								return predicate(c);
							}))),
				$elm$parser$Parser$getOffset),
			$elm$parser$Parser$getSource);
	});
var $jxxcarlson$elm_spreadsheet$Cell$string = A2(
	$jxxcarlson$elm_spreadsheet$XString$withPredicates,
	function (c) {
		return $elm$core$Char$isAlpha(c) || $jxxcarlson$elm_spreadsheet$Cell$isSymbol(c);
	},
	$elm$core$Char$isAlpha);
var $elm$parser$Parser$ExpectingSymbol = function (a) {
	return {$: 8, a: a};
};
var $elm$parser$Parser$symbol = function (str) {
	return $elm$parser$Parser$Advanced$symbol(
		A2(
			$elm$parser$Parser$Advanced$Token,
			str,
			$elm$parser$Parser$ExpectingSymbol(str)));
};
var $jxxcarlson$elm_spreadsheet$Cell$colOpParser = A2(
	$elm$parser$Parser$keeper,
	A2(
		$elm$parser$Parser$keeper,
		A2(
			$elm$parser$Parser$keeper,
			A2(
				$elm$parser$Parser$ignorer,
				A2(
					$elm$parser$Parser$ignorer,
					$elm$parser$Parser$succeed($jxxcarlson$elm_spreadsheet$Cell$ColOp),
					$elm$parser$Parser$symbol('col')),
				$elm$parser$Parser$spaces),
			A2($elm$parser$Parser$ignorer, $jxxcarlson$elm_spreadsheet$Cell$string, $elm$parser$Parser$spaces)),
		A2(
			$elm$parser$Parser$ignorer,
			A2(
				$elm$parser$Parser$map,
				function (x) {
					return x - 1;
				},
				$elm$parser$Parser$int),
			$elm$parser$Parser$spaces)),
	A2(
		$elm$parser$Parser$map,
		function (x) {
			return x - 1;
		},
		$elm$parser$Parser$int));
var $jxxcarlson$elm_spreadsheet$Cell$RowOp = F3(
	function (a, b, c) {
		return {$: 0, a: a, b: b, c: c};
	});
var $jxxcarlson$elm_spreadsheet$Cell$rowOpParser = A2(
	$elm$parser$Parser$keeper,
	A2(
		$elm$parser$Parser$keeper,
		A2(
			$elm$parser$Parser$keeper,
			A2(
				$elm$parser$Parser$ignorer,
				A2(
					$elm$parser$Parser$ignorer,
					$elm$parser$Parser$succeed($jxxcarlson$elm_spreadsheet$Cell$RowOp),
					$elm$parser$Parser$symbol('row')),
				$elm$parser$Parser$spaces),
			A2($elm$parser$Parser$ignorer, $jxxcarlson$elm_spreadsheet$Cell$string, $elm$parser$Parser$spaces)),
		A2(
			$elm$parser$Parser$ignorer,
			A2(
				$elm$parser$Parser$map,
				function (x) {
					return x - 1;
				},
				$elm$parser$Parser$int),
			$elm$parser$Parser$spaces)),
	A2(
		$elm$parser$Parser$map,
		function (x) {
			return x - 1;
		},
		$elm$parser$Parser$int));
var $jxxcarlson$elm_spreadsheet$Cell$opParser = $elm$parser$Parser$oneOf(
	_List_fromArray(
		[$jxxcarlson$elm_spreadsheet$Cell$rowOpParser, $jxxcarlson$elm_spreadsheet$Cell$colOpParser]));
var $jxxcarlson$elm_spreadsheet$Cell$Integer = function (a) {
	return {$: 0, a: a};
};
var $jxxcarlson$elm_spreadsheet$XString$char = function (c) {
	return A2(
		$elm$parser$Parser$keeper,
		A2(
			$elm$parser$Parser$keeper,
			A2(
				$elm$parser$Parser$keeper,
				$elm$parser$Parser$succeed(
					F3(
						function (start, finish, content) {
							return A3($elm$core$String$slice, start, finish, content);
						})),
				A2(
					$elm$parser$Parser$ignorer,
					$elm$parser$Parser$getOffset,
					$elm$parser$Parser$chompIf(
						function (ch) {
							return _Utils_eq(ch, c);
						}))),
			$elm$parser$Parser$getOffset),
		$elm$parser$Parser$getSource);
};
var $elm$parser$Parser$ExpectingFloat = {$: 5};
var $elm$parser$Parser$Advanced$float = F2(
	function (expecting, invalid) {
		return $elm$parser$Parser$Advanced$number(
			{
				eX: $elm$core$Result$Err(invalid),
				fc: expecting,
				fd: $elm$core$Result$Ok($elm$core$Basics$identity),
				hd: $elm$core$Result$Err(invalid),
				fr: $elm$core$Result$Ok($elm$core$Basics$toFloat),
				hs: invalid,
				fG: $elm$core$Result$Err(invalid)
			});
	});
var $elm$parser$Parser$float = A2($elm$parser$Parser$Advanced$float, $elm$parser$Parser$ExpectingFloat, $elm$parser$Parser$ExpectingFloat);
var $jxxcarlson$elm_spreadsheet$UtilityParser$positiveFloat = $elm$parser$Parser$float;
var $elm$parser$Parser$andThen = $elm$parser$Parser$Advanced$andThen;
var $jxxcarlson$elm_spreadsheet$ParserTools$second = F2(
	function (p, q) {
		return A2(
			$elm$parser$Parser$andThen,
			function (_v0) {
				return q;
			},
			p);
	});
var $jxxcarlson$elm_spreadsheet$UtilityParser$negativeFloat = A2(
	$elm$parser$Parser$map,
	function (x) {
		return -x;
	},
	A2(
		$jxxcarlson$elm_spreadsheet$ParserTools$second,
		$jxxcarlson$elm_spreadsheet$XString$char('-'),
		$jxxcarlson$elm_spreadsheet$UtilityParser$positiveFloat));
var $jxxcarlson$elm_spreadsheet$UtilityParser$float = $elm$parser$Parser$oneOf(
	_List_fromArray(
		[$jxxcarlson$elm_spreadsheet$UtilityParser$negativeFloat, $jxxcarlson$elm_spreadsheet$UtilityParser$positiveFloat]));
var $jxxcarlson$elm_spreadsheet$UtilityParser$positiveInteger = $elm$parser$Parser$int;
var $jxxcarlson$elm_spreadsheet$UtilityParser$negativeInteger = A2(
	$elm$parser$Parser$map,
	function (x) {
		return -x;
	},
	A2(
		$jxxcarlson$elm_spreadsheet$ParserTools$second,
		$jxxcarlson$elm_spreadsheet$XString$char('-'),
		$jxxcarlson$elm_spreadsheet$UtilityParser$positiveInteger));
var $jxxcarlson$elm_spreadsheet$UtilityParser$integer = $elm$parser$Parser$oneOf(
	_List_fromArray(
		[$jxxcarlson$elm_spreadsheet$UtilityParser$negativeInteger, $jxxcarlson$elm_spreadsheet$UtilityParser$positiveInteger]));
var $jxxcarlson$elm_spreadsheet$Cell$valueParser = $elm$parser$Parser$oneOf(
	_List_fromArray(
		[
			$elm$parser$Parser$backtrackable(
			A2($elm$parser$Parser$map, $jxxcarlson$elm_spreadsheet$Cell$Integer, $jxxcarlson$elm_spreadsheet$UtilityParser$integer)),
			A2($elm$parser$Parser$map, $jxxcarlson$elm_spreadsheet$Cell$Real, $jxxcarlson$elm_spreadsheet$UtilityParser$float)
		]));
var $jxxcarlson$elm_spreadsheet$Cell$cellParser = $elm$parser$Parser$oneOf(
	_List_fromArray(
		[
			A2(
			$elm$parser$Parser$map,
			$toastal$either$Either$Left,
			$elm$parser$Parser$backtrackable($jxxcarlson$elm_spreadsheet$Cell$opParser)),
			A2($elm$parser$Parser$map, $toastal$either$Either$Right, $jxxcarlson$elm_spreadsheet$Cell$valueParser)
		]));
var $elm$parser$Parser$DeadEnd = F3(
	function (row, col, problem) {
		return {gP: col, hU: problem, eF: row};
	});
var $elm$parser$Parser$problemToDeadEnd = function (p) {
	return A3($elm$parser$Parser$DeadEnd, p.eF, p.gP, p.hU);
};
var $elm$parser$Parser$run = F2(
	function (parser, source) {
		var _v0 = A2($elm$parser$Parser$Advanced$run, parser, source);
		if (!_v0.$) {
			var a = _v0.a;
			return $elm$core$Result$Ok(a);
		} else {
			var problems = _v0.a;
			return $elm$core$Result$Err(
				A2($elm$core$List$map, $elm$parser$Parser$problemToDeadEnd, problems));
		}
	});
var $jxxcarlson$elm_spreadsheet$Cell$parse = function (input) {
	var _v0 = A2($elm$parser$Parser$run, $jxxcarlson$elm_spreadsheet$Cell$cellParser, input);
	if (!_v0.$) {
		var cell = _v0.a;
		return cell;
	} else {
		return $toastal$either$Either$Right($jxxcarlson$elm_spreadsheet$Cell$Undefined);
	}
};
var $jxxcarlson$elm_spreadsheet$Spreadsheet$parseColumn = function (cells) {
	return A2($elm$core$List$map, $jxxcarlson$elm_spreadsheet$Cell$parse, cells);
};
var $jxxcarlson$elm_spreadsheet$Spreadsheet$parse = function (text) {
	return A2($elm$core$List$map, $jxxcarlson$elm_spreadsheet$Spreadsheet$parseColumn, text);
};
var $jxxcarlson$elm_spreadsheet$Utility$roundTo = F2(
	function (k, x) {
		var factor = A2($elm$core$Basics$pow, 10.0, k);
		return $elm$core$Basics$round(factor * x) / factor;
	});
var $jxxcarlson$elm_spreadsheet$Cell$stringOfBoolean = function (b) {
	return b ? 'True' : 'False';
};
var $jxxcarlson$elm_spreadsheet$Cell$render = function (cell) {
	if (!cell.$) {
		if (!cell.a.$) {
			var _v1 = cell.a;
			var op = _v1.a;
			var i = _v1.b;
			var j = _v1.c;
			return 'row ' + (op + (' ' + ($elm$core$String$fromInt(i + 1) + (' ' + $elm$core$String$fromInt(j + 1)))));
		} else {
			var _v2 = cell.a;
			var op = _v2.a;
			var i = _v2.b;
			var j = _v2.c;
			return 'col ' + (op + (' ' + ($elm$core$String$fromInt(i + 1) + (' ' + $elm$core$String$fromInt(j + 1)))));
		}
	} else {
		switch (cell.a.$) {
			case 0:
				var k = cell.a.a;
				return $elm$core$String$fromInt(k);
			case 1:
				var x = cell.a.a;
				return $elm$core$String$fromFloat(
					A2($jxxcarlson$elm_spreadsheet$Utility$roundTo, 2, x));
			case 4:
				var _v3 = cell.a;
				return '-';
			case 2:
				var b = cell.a.a;
				return $jxxcarlson$elm_spreadsheet$Cell$stringOfBoolean(b);
			default:
				var s = cell.a.a;
				return s;
		}
	}
};
var $jxxcarlson$elm_spreadsheet$Spreadsheet$renderColumn = function (cells) {
	return A2($elm$core$List$map, $jxxcarlson$elm_spreadsheet$Cell$render, cells);
};
var $jxxcarlson$elm_spreadsheet$Spreadsheet$render = function (sheet) {
	return A2($elm$core$List$map, $jxxcarlson$elm_spreadsheet$Spreadsheet$renderColumn, sheet);
};
var $jxxcarlson$elm_spreadsheet$Spreadsheet$evalText = function (text) {
	return $jxxcarlson$elm_spreadsheet$Spreadsheet$render(
		$jxxcarlson$elm_spreadsheet$Spreadsheet$eval(
			$jxxcarlson$elm_spreadsheet$Spreadsheet$parse(text)));
};
var $author$project$Render$Elm$getRow = function (element) {
	if (((((((element.$ === 1) && (element.a === 'row')) && (!element.b.b)) && (element.c.$ === 2)) && element.c.a.b) && (!element.c.a.a.$)) && (!element.c.a.b.b)) {
		var _v1 = element.c;
		var _v2 = _v1.a;
		var _v3 = _v2.a;
		var t = _v3.a;
		return t;
	} else {
		return '';
	}
};
var $author$project$Render$Elm$getRows_ = function (body) {
	if (body.$ === 2) {
		var list_ = body.a;
		return A2(
			$elm$core$List$map,
			$elm$core$List$map($elm$core$String$trim),
			A2(
				$elm$core$List$map,
				$elm$core$String$split(','),
				A2(
					$elm$core$List$filter,
					function (s) {
						return s !== '';
					},
					A2($elm$core$List$map, $author$project$Render$Elm$getRow, list_))));
	} else {
		return _List_fromArray(
			[_List_Nil]);
	}
};
var $author$project$Render$Elm$spreadsheet = F5(
	function (renderArgs, name, args_, body, meta) {
		var spreadsheet1 = $elm_community$list_extra$List$Extra$transpose(
			$author$project$Render$Elm$getRows_(body));
		var spreadsheet2 = $elm_community$list_extra$List$Extra$transpose(
			$jxxcarlson$elm_spreadsheet$Spreadsheet$evalText(spreadsheet1));
		var renderItem = function (str) {
			return A2(
				$mdgriffith$elm_ui$Element$el,
				_List_fromArray(
					[
						$mdgriffith$elm_ui$Element$width(
						$mdgriffith$elm_ui$Element$px(60))
					]),
				A2(
					$mdgriffith$elm_ui$Element$el,
					_List_fromArray(
						[$mdgriffith$elm_ui$Element$alignRight]),
					$mdgriffith$elm_ui$Element$text(str)));
		};
		var renderRow = function (items) {
			return A2(
				$mdgriffith$elm_ui$Element$row,
				_List_fromArray(
					[
						$mdgriffith$elm_ui$Element$spacing(10)
					]),
				A2($elm$core$List$map, renderItem, items));
		};
		return A2(
			$mdgriffith$elm_ui$Element$column,
			_List_fromArray(
				[
					$mdgriffith$elm_ui$Element$spacing(8),
					$author$project$Render$Elm$indentPadding
				]),
			A2($elm$core$List$map, renderRow, spreadsheet2));
	});
var $author$project$Widget$Data$stdev = F5(
	function (renderArgs, name, args, body, sm) {
		var precision = A2($author$project$Render$Utility$getPrecisionWithDefault, 2, args);
		var numbers_ = $author$project$Render$Utility$getTextList(body);
		var numbers = $elm_community$maybe_extra$Maybe$Extra$values(
			A2($elm$core$List$map, $elm$core$String$toFloat, numbers_));
		var sum_ = $elm$core$List$sum(numbers);
		var n = $elm$core$List$length(numbers);
		var average_ = sum_ / n;
		var deltas = A2(
			$elm$core$List$map,
			function (x) {
				return x - average_;
			},
			numbers);
		var sumOfDeltasSquared = $elm$core$List$sum(
			A3($elm$core$List$map2, $elm$core$Basics$mul, deltas, deltas));
		var stdev_ = $elm$core$Basics$sqrt(sumOfDeltasSquared) / (n - 1);
		return A2(
			$mdgriffith$elm_ui$Element$row,
			_List_fromArray(
				[
					$mdgriffith$elm_ui$Element$spacing(8)
				]),
			A2(
				$elm$core$List$cons,
				$mdgriffith$elm_ui$Element$text('stdev'),
				_Utils_ap(
					A2($elm$core$List$map, $mdgriffith$elm_ui$Element$text, numbers_),
					_Utils_ap(
						_List_fromArray(
							[
								$mdgriffith$elm_ui$Element$text('=')
							]),
						_List_fromArray(
							[
								$mdgriffith$elm_ui$Element$text(
								$elm$core$String$fromFloat(
									A2($author$project$CYUtility$roundTo, precision, stdev_)))
							])))));
	});
var $author$project$Widget$Data$sum = F5(
	function (renderArgs, name, args, body, sm) {
		var precision = A2($author$project$Render$Utility$getPrecisionWithDefault, 2, args);
		var numbers_ = $author$project$Render$Utility$getTextList(body);
		var numbers = $elm_community$maybe_extra$Maybe$Extra$values(
			A2($elm$core$List$map, $elm$core$String$toFloat, numbers_));
		var sum_ = $elm$core$List$sum(numbers);
		return A2(
			$mdgriffith$elm_ui$Element$row,
			_List_fromArray(
				[
					$mdgriffith$elm_ui$Element$spacing(8)
				]),
			A2(
				$elm$core$List$cons,
				$mdgriffith$elm_ui$Element$text('sum'),
				_Utils_ap(
					A2($elm$core$List$map, $mdgriffith$elm_ui$Element$text, numbers_),
					_Utils_ap(
						_List_fromArray(
							[
								$mdgriffith$elm_ui$Element$text('=')
							]),
						_List_fromArray(
							[
								$mdgriffith$elm_ui$Element$text(
								$elm$core$String$fromFloat(
									A2($author$project$CYUtility$roundTo, precision, sum_)))
							])))));
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
var $Garados007$elm_svg_parser$SvgParser$toAttribute = function (_v0) {
	var name = _v0.a;
	var value = _v0.b;
	return A2($elm$virtual_dom$VirtualDom$attribute, name, value);
};
var $Garados007$elm_svg_parser$SvgParser$elementToSvg = function (element) {
	return A3(
		$elm$svg$Svg$node,
		element.dU,
		A2($elm$core$List$map, $Garados007$elm_svg_parser$SvgParser$toAttribute, element.be),
		A2($elm$core$List$map, $Garados007$elm_svg_parser$SvgParser$nodeToSvg, element.aY));
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
				var _v0 = $elm$core$String$uncons(stream.aQ);
				if (!_v0.$) {
					var _v1 = _v0.a;
					var h = _v1.a;
					var rest = _v1.b;
					return pred(h) ? _Utils_Tuple3(
						state,
						_Utils_update(
							stream,
							{aQ: rest, am: stream.am + 1}),
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
			if (A2($elm$core$String$startsWith, s, stream.aQ)) {
				var len = $elm$core$String$length(s);
				var pos = stream.am + len;
				var rem = A2($elm$core$String$dropLeft, len, stream.aQ);
				return _Utils_Tuple3(
					state,
					_Utils_update(
						stream,
						{aQ: rem, am: pos}),
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
var $elm$core$Basics$composeR = F3(
	function (f, g, x) {
		return g(
			f(x));
	});
var $elm$regex$Regex$Match = F4(
	function (match, index, number, submatches) {
		return {cT: index, c_: match, c0: number, f6: submatches};
	});
var $elm$regex$Regex$fromStringWith = _Regex_fromStringWith;
var $elm$regex$Regex$fromString = function (string) {
	return A2(
		$elm$regex$Regex$fromStringWith,
		{e1: false, fC: false},
		string);
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
			stream.aQ);
		if (_v0.b && (!_v0.b.b)) {
			var match = _v0.a;
			var len = $elm$core$String$length(match.c_);
			var pos = stream.am + len;
			var rem = A2($elm$core$String$dropLeft, len, stream.aQ);
			return _Utils_Tuple3(
				state,
				_Utils_update(
					stream,
					{aQ: rem, am: pos}),
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
			return $.c_;
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
		return {be: attributes, aY: children, dU: name};
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
				{aY: children});
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
			$andre_dietrich$parser_combinators$Combine$string('</' + (element.dU + '>'))));
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
		return {gW: data, aQ: input, am: position};
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
var $Garados007$elm_svg_parser$SvgParser$parse = function (input) {
	var toHtml = function (svgNode) {
		if (!svgNode.$) {
			var element = svgNode.a;
			return (element.dU === 'svg') ? $elm$core$Result$Ok(
				A2(
					$elm$svg$Svg$svg,
					A2($elm$core$List$map, $Garados007$elm_svg_parser$SvgParser$toAttribute, element.be),
					A2($elm$core$List$map, $Garados007$elm_svg_parser$SvgParser$nodeToSvg, element.aY))) : $elm$core$Result$Err('Top element is not svg');
		} else {
			return $elm$core$Result$Err('Top element is not svg');
		}
	};
	return A2(
		$elm$core$Result$andThen,
		toHtml,
		$Garados007$elm_svg_parser$SvgParser$parseToNode(input));
};
var $author$project$Render$Elm$svg = F5(
	function (renderArgs, _v0, args, body, meta) {
		var _v1 = $Garados007$elm_svg_parser$SvgParser$parse(
			$author$project$Render$Elm$getText2(body));
		if (!_v1.$) {
			var html_ = _v1.a;
			var displayWidth = renderArgs.fK.e4.e8;
			var dict = $author$project$CYUtility$keyValueDict(args);
			var placement = function () {
				var _v5 = A2($elm$core$Dict$get, 'placement', dict);
				if (_v5.$ === 1) {
					return $mdgriffith$elm_ui$Element$centerX;
				} else {
					switch (_v5.a) {
						case 'left':
							return $mdgriffith$elm_ui$Element$alignLeft;
						case 'right':
							return $mdgriffith$elm_ui$Element$alignRight;
						case 'center':
							return $mdgriffith$elm_ui$Element$centerX;
						default:
							return $mdgriffith$elm_ui$Element$centerX;
					}
				}
			}();
			var width = function () {
				var _v3 = A2($elm$core$Dict$get, 'width', dict);
				if (_v3.$ === 1) {
					return $mdgriffith$elm_ui$Element$px(displayWidth);
				} else {
					var w_ = _v3.a;
					var _v4 = $elm$core$String$toInt(w_);
					if (_v4.$ === 1) {
						return $mdgriffith$elm_ui$Element$px(displayWidth);
					} else {
						var w = _v4.a;
						return $mdgriffith$elm_ui$Element$px(w);
					}
				}
			}();
			var description = A2(
				$elm$core$Maybe$withDefault,
				'',
				A2($elm$core$Dict$get, 'caption', dict));
			var caption = function () {
				var _v2 = A2($elm$core$Dict$get, 'caption', dict);
				if (_v2.$ === 1) {
					return $mdgriffith$elm_ui$Element$none;
				} else {
					var c = _v2.a;
					return A2(
						$mdgriffith$elm_ui$Element$row,
						_List_fromArray(
							[placement]),
						_List_fromArray(
							[
								A2(
								$mdgriffith$elm_ui$Element$el,
								_List_Nil,
								$mdgriffith$elm_ui$Element$text(c))
							]));
				}
			}();
			return A2(
				$mdgriffith$elm_ui$Element$column,
				_List_fromArray(
					[
						$mdgriffith$elm_ui$Element$spacing(8),
						$mdgriffith$elm_ui$Element$width(width),
						placement
					]),
				_List_fromArray(
					[
						A2(
						$mdgriffith$elm_ui$Element$column,
						_List_fromArray(
							[
								$mdgriffith$elm_ui$Element$width(width),
								placement,
								A2($author$project$Render$Utility$htmlAttribute, 'text-align', 'cener')
							]),
						_List_fromArray(
							[
								$mdgriffith$elm_ui$Element$html(html_)
							])),
						caption
					]));
		} else {
			return A2(
				$mdgriffith$elm_ui$Element$el,
				_List_Nil,
				$mdgriffith$elm_ui$Element$text('SVG parse error'));
		}
	});
var $author$project$Render$Elm$tocPadding = function (k) {
	return $mdgriffith$elm_ui$Element$paddingEach(
		{cn: 0, cY: k * 10, de: 0, dp: 0});
};
var $author$project$Render$Elm$renderTocItem = function (tocItem) {
	return A2(
		$mdgriffith$elm_ui$Element$link,
		_List_fromArray(
			[
				$mdgriffith$elm_ui$Element$Font$color($author$project$Render$Elm$linkColor),
				$author$project$Render$Elm$tocPadding(tocItem.fv)
			]),
		{
			bS: $mdgriffith$elm_ui$Element$text(tocItem.bS + (' ' + tocItem.dU)),
			ea: '#' + $author$project$Render$Utility$slug(tocItem.dU)
		});
};
var $author$project$Render$Elm$tableofcontents = F5(
	function (renderArgs, name, args_, body, meta) {
		return A2(
			$mdgriffith$elm_ui$Element$column,
			_List_fromArray(
				[
					$mdgriffith$elm_ui$Element$spacing(6),
					A2($author$project$Render$Utility$htmlAttribute, 'id', 'tableofcontents__')
				]),
			A2(
				$elm$core$List$cons,
				A2(
					$mdgriffith$elm_ui$Element$el,
					_List_fromArray(
						[
							$mdgriffith$elm_ui$Element$Font$bold,
							$mdgriffith$elm_ui$Element$Font$size(14)
						]),
					$mdgriffith$elm_ui$Element$text('Table of contents')),
				A2(
					$elm$core$List$map,
					$author$project$Render$Elm$renderTocItem,
					$elm$core$List$reverse(renderArgs.fK.cd))));
	});
var $author$project$Render$Elm$theoremLikeElements = _List_fromArray(
	['theorem', 'proposition', 'proof', 'definition', 'example', 'problem', 'corollary', 'lemma']);
var $elm_community$string_extra$String$Extra$changeCase = F2(
	function (mutator, word) {
		return A2(
			$elm$core$Maybe$withDefault,
			'',
			A2(
				$elm$core$Maybe$map,
				function (_v0) {
					var head = _v0.a;
					var tail = _v0.b;
					return A2(
						$elm$core$String$cons,
						mutator(head),
						tail);
				},
				$elm$core$String$uncons(word)));
	});
var $elm$core$Char$toUpper = _Char_toUpper;
var $elm_community$string_extra$String$Extra$toSentenceCase = function (word) {
	return A2($elm_community$string_extra$String$Extra$changeCase, $elm$core$Char$toUpper, word);
};
var $author$project$Render$Elm$verbatim = F5(
	function (renderArgs, _v0, _v1, body, meta) {
		return A2(
			$mdgriffith$elm_ui$Element$column,
			_List_fromArray(
				[
					$mdgriffith$elm_ui$Element$Font$family(
					_List_fromArray(
						[
							$mdgriffith$elm_ui$Element$Font$typeface('Inconsolata'),
							$mdgriffith$elm_ui$Element$Font$monospace
						])),
					A2($author$project$Render$Utility$htmlAttribute, 'white-space', 'pre'),
					$author$project$Render$Elm$indentation,
					$mdgriffith$elm_ui$Element$spacing(8)
				]),
			A2(
				$elm$core$List$map,
				$mdgriffith$elm_ui$Element$text,
				$author$project$Render$Elm$getLines(
					$elm$core$String$trim(
						$author$project$Render$Elm$getText2(body)))));
	});
var $author$project$Render$Elm$yellowColor = A3($mdgriffith$elm_ui$Element$rgb, 1.0, 1.0, 0);
var $author$project$Render$Elm$center = F5(
	function (renderArgs, name, args, body, meta) {
		return A2(
			$mdgriffith$elm_ui$Element$column,
			_List_fromArray(
				[$mdgriffith$elm_ui$Element$centerX]),
			_List_fromArray(
				[
					A2($author$project$Render$Elm$renderElement, renderArgs, body)
				]));
	});
var $author$project$Render$Elm$defitem = F5(
	function (renderArgs, name, args_, body, meta) {
		var itemName = A2(
			$elm$core$Maybe$withDefault,
			'ITEM',
			$elm$core$List$head(
				$author$project$CYUtility$entities(args_)));
		return A2(
			$mdgriffith$elm_ui$Element$column,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$mdgriffith$elm_ui$Element$el,
					_List_fromArray(
						[
							$mdgriffith$elm_ui$Element$Font$bold,
							$mdgriffith$elm_ui$Element$Font$size(14)
						]),
					$mdgriffith$elm_ui$Element$text(itemName)),
					A2(
					$mdgriffith$elm_ui$Element$paragraph,
					_List_fromArray(
						[$author$project$Render$Elm$listPadding]),
					_List_fromArray(
						[
							A2($author$project$Render$Elm$renderElement, renderArgs, body)
						]))
				]));
	});
var $author$project$Render$Elm$error = F5(
	function (renderArgs, name, args_, body, meta) {
		return A2(
			$mdgriffith$elm_ui$Element$el,
			_List_fromArray(
				[
					$mdgriffith$elm_ui$Element$Font$color($author$project$Render$Elm$violetColor)
				]),
			A2($author$project$Render$Elm$renderElement, renderArgs, body));
	});
var $author$project$Render$Elm$fontRGB = F5(
	function (renderArgs, name, args, body, meta) {
		var r = A2($author$project$Render$Utility$getInt, 0, args);
		var g = A2($author$project$Render$Utility$getInt, 1, args);
		var b = A2($author$project$Render$Utility$getInt, 2, args);
		return A2(
			$mdgriffith$elm_ui$Element$el,
			_List_fromArray(
				[
					$mdgriffith$elm_ui$Element$Font$color(
					A3($mdgriffith$elm_ui$Element$rgb255, r, g, b)),
					A2($mdgriffith$elm_ui$Element$paddingXY, 4, 2)
				]),
			A2($author$project$Render$Elm$renderElement, renderArgs, body));
	});
var $author$project$Render$Elm$highlight = F5(
	function (renderArgs, _v14, _v15, body, _v16) {
		return A2(
			$mdgriffith$elm_ui$Element$el,
			_List_fromArray(
				[
					$mdgriffith$elm_ui$Element$Background$color($author$project$Render$Elm$yellowColor),
					A2($mdgriffith$elm_ui$Element$paddingXY, 4, 2)
				]),
			A2($author$project$Render$Elm$renderElement, renderArgs, body));
	});
var $author$project$Render$Elm$highlightRGB = F5(
	function (renderArgs, _v13, args, body, meta) {
		var r = A2($author$project$Render$Utility$getInt, 0, args);
		var g = A2($author$project$Render$Utility$getInt, 1, args);
		var b = A2($author$project$Render$Utility$getInt, 2, args);
		return A2(
			$mdgriffith$elm_ui$Element$el,
			_List_fromArray(
				[
					$mdgriffith$elm_ui$Element$Background$color(
					A3($mdgriffith$elm_ui$Element$rgb255, r, g, b)),
					A2($mdgriffith$elm_ui$Element$paddingXY, 4, 2)
				]),
			A2($author$project$Render$Elm$renderElement, renderArgs, body));
	});
var $author$project$Render$Elm$indent = F5(
	function (renderArgs, name, args, body, meta) {
		return A2(
			$mdgriffith$elm_ui$Element$column,
			_List_fromArray(
				[$author$project$Render$Elm$indentPadding]),
			_List_fromArray(
				[
					A2($author$project$Render$Elm$renderElement, renderArgs, body)
				]));
	});
var $author$project$Render$Elm$item = F5(
	function (renderArgs, name, args_, body, meta) {
		return A2(
			$mdgriffith$elm_ui$Element$paragraph,
			_List_Nil,
			_List_fromArray(
				[
					A2($author$project$Render$Elm$renderElement, renderArgs, body)
				]));
	});
var $author$project$Render$Elm$list = F5(
	function (renderArgs, name, args_, body, meta) {
		var dict = $author$project$CYUtility$keyValueDict(args_);
		if (body.$ === 2) {
			var list_ = body.a;
			return A2(
				$mdgriffith$elm_ui$Element$column,
				_List_fromArray(
					[
						$mdgriffith$elm_ui$Element$spacing(4),
						$author$project$Render$Elm$listPadding
					]),
				A2(
					$elm$core$List$cons,
					$author$project$Render$Elm$elementTitle(args_),
					A2(
						$elm$core$List$indexedMap,
						F2(
							function (k, item_) {
								return A3(
									$author$project$Render$Elm$renderListItem,
									A2($author$project$Render$Elm$getPrefixSymbol, k, dict),
									renderArgs,
									item_);
							}),
						$author$project$Render$Elm$filterOutBlankItems(list_))));
		} else {
			return A2(
				$mdgriffith$elm_ui$Element$el,
				_List_fromArray(
					[
						$mdgriffith$elm_ui$Element$Font$color($author$project$Render$Elm$redColor)
					]),
				$mdgriffith$elm_ui$Element$text('Malformed list'));
		}
	});
var $author$project$Render$Elm$renderCode = F5(
	function (renderArgs, _v10, _v11, body, meta) {
		var adjustedBody = function (text) {
			return A2($author$project$Parser$Element$Text, text, meta);
		}(
			A3(
				$elm$core$String$replace,
				'\\]',
				']',
				A3(
					$elm$core$String$replace,
					'\\[',
					'[',
					A2(
						$elm$core$Maybe$withDefault,
						'(body)',
						$author$project$Render$Elm$getText(body)))));
		return A2(
			$mdgriffith$elm_ui$Element$el,
			_List_fromArray(
				[
					$mdgriffith$elm_ui$Element$Font$family(
					_List_fromArray(
						[
							$mdgriffith$elm_ui$Element$Font$typeface('Inconsolata'),
							$mdgriffith$elm_ui$Element$Font$monospace
						])),
					$mdgriffith$elm_ui$Element$Font$color($author$project$Render$Elm$codeColor)
				]),
			A2($author$project$Render$Elm$renderElement, renderArgs, adjustedBody));
	});
var $author$project$Render$Elm$renderElement = F2(
	function (renderArgs, element) {
		switch (element.$) {
			case 0:
				var str = element.a;
				return A2(
					$mdgriffith$elm_ui$Element$el,
					_List_Nil,
					$mdgriffith$elm_ui$Element$text(str));
			case 1:
				var name = element.a;
				var args = element.b;
				var body = element.c;
				var meta = element.d;
				return A5($author$project$Render$Elm$renderWithDictionary, renderArgs, name, args, body, meta);
			default:
				var list_ = element.a;
				return A2(
					$mdgriffith$elm_ui$Element$paragraph,
					$author$project$Render$Elm$format,
					A2(
						$elm$core$List$map,
						$author$project$Render$Elm$renderElement(renderArgs),
						list_));
		}
	});
var $author$project$Render$Elm$renderItalic = F5(
	function (renderArgs, _v7, _v8, body, meta) {
		return A2(
			$mdgriffith$elm_ui$Element$el,
			_List_fromArray(
				[$mdgriffith$elm_ui$Element$Font$italic]),
			A2($author$project$Render$Elm$renderElement, renderArgs, body));
	});
var $author$project$Render$Elm$renderListItem = F3(
	function (prefixSymbol, renderArgs, elt) {
		_v5$2:
		while (true) {
			if (elt.$ === 1) {
				switch (elt.a) {
					case 'item':
						var body = elt.c;
						return A2(
							$mdgriffith$elm_ui$Element$row,
							_List_fromArray(
								[
									$mdgriffith$elm_ui$Element$spacing(8)
								]),
							_List_fromArray(
								[
									A2(
									$mdgriffith$elm_ui$Element$el,
									_List_fromArray(
										[
											$mdgriffith$elm_ui$Element$alignTop,
											$mdgriffith$elm_ui$Element$moveDown(2)
										]),
									prefixSymbol),
									A2($author$project$Render$Elm$renderElement, renderArgs, elt)
								]));
					case 'list':
						var args = elt.b;
						var body = elt.c;
						var dict = $author$project$CYUtility$keyValueDict(args);
						if (body.$ === 2) {
							var list_ = body.a;
							return A2(
								$mdgriffith$elm_ui$Element$column,
								_List_fromArray(
									[
										$mdgriffith$elm_ui$Element$spacing(4),
										$author$project$Render$Elm$listPadding
									]),
								A2(
									$elm$core$List$cons,
									$author$project$Render$Elm$elementTitle(args),
									A2(
										$elm$core$List$indexedMap,
										F2(
											function (k, item_) {
												return A3(
													$author$project$Render$Elm$renderListItem,
													A2($author$project$Render$Elm$getPrefixSymbol, k, dict),
													renderArgs,
													item_);
											}),
										$author$project$Render$Elm$filterOutBlankItems(list_))));
						} else {
							return A2(
								$mdgriffith$elm_ui$Element$el,
								_List_fromArray(
									[
										$mdgriffith$elm_ui$Element$Font$color($author$project$Render$Elm$redColor)
									]),
								$mdgriffith$elm_ui$Element$text('Malformed list'));
						}
					default:
						break _v5$2;
				}
			} else {
				break _v5$2;
			}
		}
		return $mdgriffith$elm_ui$Element$none;
	});
var $author$project$Render$Elm$renderStrong = F5(
	function (renderArgs, _v3, _v4, body, meta) {
		return A2(
			$mdgriffith$elm_ui$Element$el,
			_List_fromArray(
				[$mdgriffith$elm_ui$Element$Font$bold]),
			A2($author$project$Render$Elm$renderElement, renderArgs, body));
	});
var $author$project$Render$Elm$renderWithDictionary = F5(
	function (renderArgs, name, args, body, meta) {
		var _v1 = A2(
			$elm$core$Dict$get,
			name,
			$author$project$Render$Elm$cyclic$renderElementDict());
		if (_v1.$ === 1) {
			if (A2($elm$core$List$member, name, $author$project$Render$Elm$theoremLikeElements)) {
				return A5($author$project$Render$Elm$renderaAsTheoremLikeElement, renderArgs, name, args, body, meta);
			} else {
				var _v2 = A2($elm$core$Dict$get, name, renderArgs.fK.dQ);
				if (!_v2.$) {
					var macroForm = _v2.a;
					return A2(
						$author$project$Render$Elm$renderElement,
						renderArgs,
						A2($author$project$Render$Elm$expandMacro, macroForm, body));
				} else {
					return A2($author$project$Render$Elm$renderMissingElement, name, body);
				}
			}
		} else {
			var f = _v1.a;
			return A5(f, renderArgs, name, args, body, meta);
		}
	});
var $author$project$Render$Elm$renderaAsTheoremLikeElement = F5(
	function (renderArgs, name, args, body, meta) {
		var label_ = A2($author$project$Render$Utility$getArg, 0, args);
		var heading = function () {
			if (label_.$ === 1) {
				return A2(
					$mdgriffith$elm_ui$Element$row,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							$mdgriffith$elm_ui$Element$el,
							_List_fromArray(
								[$mdgriffith$elm_ui$Element$Font$bold]),
							$mdgriffith$elm_ui$Element$text(
								$elm_community$string_extra$String$Extra$toSentenceCase(name) + '.'))
						]));
			} else {
				var label = label_.a;
				return A2(
					$mdgriffith$elm_ui$Element$paragraph,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							$mdgriffith$elm_ui$Element$el,
							_List_fromArray(
								[$mdgriffith$elm_ui$Element$Font$bold]),
							$mdgriffith$elm_ui$Element$text(
								$elm_community$string_extra$String$Extra$toSentenceCase(name))),
							A2(
							$mdgriffith$elm_ui$Element$el,
							_List_Nil,
							$mdgriffith$elm_ui$Element$text(' (' + (label + ')'))),
							A2(
							$mdgriffith$elm_ui$Element$el,
							_List_fromArray(
								[$mdgriffith$elm_ui$Element$Font$bold]),
							$mdgriffith$elm_ui$Element$text('.'))
						]));
			}
		}();
		return A2(
			$mdgriffith$elm_ui$Element$column,
			_List_fromArray(
				[
					$mdgriffith$elm_ui$Element$spacing(3)
				]),
			_List_fromArray(
				[
					heading,
					A2(
					$mdgriffith$elm_ui$Element$el,
					_List_Nil,
					A2($author$project$Render$Elm$renderElement, renderArgs, body))
				]));
	});
function $author$project$Render$Elm$cyclic$renderElementDict() {
	return $elm$core$Dict$fromList(
		_List_fromArray(
			[
				_Utils_Tuple2('Error', $author$project$Render$Elm$error),
				_Utils_Tuple2('macro', $author$project$Render$Elm$macro),
				_Utils_Tuple2('set', $author$project$Render$Elm$set),
				_Utils_Tuple2('set_', $author$project$Render$Elm$set_),
				_Utils_Tuple2('hide', $author$project$Render$Elm$hide),
				_Utils_Tuple2('get', $author$project$Render$Elm$get),
				_Utils_Tuple2('spreadsheet', $author$project$Render$Elm$spreadsheet),
				_Utils_Tuple2('tableofcontents', $author$project$Render$Elm$tableofcontents),
				_Utils_Tuple2('bold', $author$project$Render$Elm$renderStrong),
				_Utils_Tuple2('b', $author$project$Render$Elm$renderStrong),
				_Utils_Tuple2('italic', $author$project$Render$Elm$renderItalic),
				_Utils_Tuple2('i', $author$project$Render$Elm$renderItalic),
				_Utils_Tuple2('highlight', $author$project$Render$Elm$highlight),
				_Utils_Tuple2('highlightRGB', $author$project$Render$Elm$highlightRGB),
				_Utils_Tuple2('fontRGB', $author$project$Render$Elm$fontRGB),
				_Utils_Tuple2('code', $author$project$Render$Elm$renderCode),
				_Utils_Tuple2('c', $author$project$Render$Elm$renderCode),
				_Utils_Tuple2('def', $author$project$Render$Elm$defitem),
				_Utils_Tuple2('codeblock', $author$project$Render$Elm$codeblock),
				_Utils_Tuple2('cb', $author$project$Render$Elm$codeblock),
				_Utils_Tuple2('verbatim', $author$project$Render$Elm$verbatim),
				_Utils_Tuple2('poetry', $author$project$Render$Elm$poetry),
				_Utils_Tuple2('title', $author$project$Render$Elm$docTitle),
				_Utils_Tuple2('section', $author$project$Render$Elm$section_),
				_Utils_Tuple2('section1', $author$project$Render$Elm$section_),
				_Utils_Tuple2('section2', $author$project$Render$Elm$section_),
				_Utils_Tuple2('section3', $author$project$Render$Elm$section_),
				_Utils_Tuple2('section4', $author$project$Render$Elm$section_),
				_Utils_Tuple2('section5', $author$project$Render$Elm$section_),
				_Utils_Tuple2('section6', $author$project$Render$Elm$section_),
				_Utils_Tuple2('list', $author$project$Render$Elm$list),
				_Utils_Tuple2('data', $author$project$Render$Elm$dataTable),
				_Utils_Tuple2('item', $author$project$Render$Elm$item),
				_Utils_Tuple2('link', $author$project$Render$Elm$link),
				_Utils_Tuple2('image', $author$project$Render$Elm$image),
				_Utils_Tuple2('svg', $author$project$Render$Elm$svg),
				_Utils_Tuple2('math', $author$project$Render$Elm$renderMath),
				_Utils_Tuple2('m', $author$project$Render$Elm$renderMath),
				_Utils_Tuple2('mathblock', $author$project$Render$Elm$renderMathDisplay),
				_Utils_Tuple2('mb', $author$project$Render$Elm$renderMathDisplay),
				_Utils_Tuple2('center', $author$project$Render$Elm$center),
				_Utils_Tuple2('indent', $author$project$Render$Elm$indent),
				_Utils_Tuple2('sum', $author$project$Widget$Data$sum),
				_Utils_Tuple2('average', $author$project$Widget$Data$average),
				_Utils_Tuple2('stdev', $author$project$Widget$Data$stdev),
				_Utils_Tuple2('bargraph', $author$project$Widget$Data$bargraph),
				_Utils_Tuple2('linegraph', $author$project$Widget$Data$linegraph),
				_Utils_Tuple2('scatterplot', $author$project$Widget$Data$scatterplot)
			]));
}
var $author$project$Render$Elm$renderElementDict = $author$project$Render$Elm$cyclic$renderElementDict();
$author$project$Render$Elm$cyclic$renderElementDict = function () {
	return $author$project$Render$Elm$renderElementDict;
};
var $author$project$Render$Elm$renderList = F2(
	function (renderArgs, list_) {
		return A2(
			$mdgriffith$elm_ui$Element$paragraph,
			$author$project$Render$Elm$format,
			A2(
				$elm$core$List$map,
				$author$project$Render$Elm$renderElement(renderArgs),
				list_));
	});
var $author$project$Parser$Document$Start = 0;
var $author$project$Parser$Data$defaultConfig = {e_: '#00c', e8: 470, fl: '#fAA', fS: '#a00'};
var $author$project$Vector$init = function (k) {
	return {
		eg: A2($elm$core$List$repeat, k, 0),
		ca: k
	};
};
var $author$project$Parser$Data$init = function (config) {
	return {
		dD: $elm$core$Dict$empty,
		e4: config,
		V: $elm$core$Dict$empty,
		cz: $elm$core$Dict$empty,
		cI: $elm$core$Dict$empty,
		dQ: $elm$core$Dict$empty,
		cd: _List_Nil,
		ds: $elm$core$Dict$fromList(
			_List_fromArray(
				[
					_Utils_Tuple2(
					'section',
					$author$project$Vector$init(6))
				]))
	};
};
var $author$project$Parser$Document$init = F2(
	function (generation, strList) {
		return {
			q: _List_Nil,
			A: 0,
			T: 0,
			gW: $author$project$Parser$Data$init($author$project$Parser$Data$defaultConfig),
			bI: generation,
			aQ: strList,
			N: $elm$core$Maybe$Nothing,
			aF: 0,
			L: _List_Nil
		};
	});
var $author$project$Parser$Document$loop = F2(
	function (s, nextState_) {
		loop:
		while (true) {
			var _v0 = nextState_(s);
			if (!_v0.$) {
				var s_ = _v0.a;
				var $temp$s = s_,
					$temp$nextState_ = nextState_;
				s = $temp$s;
				nextState_ = $temp$nextState_;
				continue loop;
			} else {
				var b = _v0.a;
				return b;
			}
		}
	});
var $author$project$Parser$Document$InElementBlock = 2;
var $author$project$Parser$Document$InTextBlock = 1;
var $author$project$Parser$Document$Loop = function (a) {
	return {$: 0, a: a};
};
var $author$project$Parser$Document$differentialBlockLevel = function (str) {
	var chars = A2($elm$core$String$split, '', str);
	var leftBrackets = $elm$core$List$length(
		A2(
			$elm$core$List$filter,
			function (s) {
				return s === '[';
			},
			chars));
	var rightBrackets = $elm$core$List$length(
		A2(
			$elm$core$List$filter,
			function (s) {
				return s === ']';
			},
			chars));
	return leftBrackets - rightBrackets;
};
var $author$project$Parser$Document$countLines = function (list) {
	return function (x) {
		return x + 1;
	}(
		$elm$core$List$length(
			$elm$core$List$concat(
				A2($elm$core$List$map, $elm$core$String$lines, list))));
};
var $author$project$Parser$Getters$getSource = function (expr) {
	switch (expr.$) {
		case 0:
			var sm = expr.b;
			return sm;
		case 1:
			var sm = expr.d;
			return sm;
		default:
			var expr_ = expr.a;
			var sm = expr.b;
			return sm;
	}
};
var $author$project$Parser$Metadata$dummy = {eZ: 0, bI: 0, bS: '', hw: 0, aG: 0};
var $author$project$Parser$RecoveryData$problemWithElement = {
	gZ: 1,
	hQ: A4(
		$author$project$Parser$Element$Element,
		'fontRGB',
		_List_fromArray(
			['255', '0', '0']),
		A2(
			$author$project$Parser$Element$Text,
			$elm$core$String$fromChar('⚠') + (' unmatched $ in' + $elm$core$String$fromChar('\u00A0')),
			$elm$core$Maybe$Nothing),
		$elm$core$Maybe$Nothing),
	hU: $author$project$Parser$Error$ExpectingRightBracket,
	iu: 1
};
var $author$project$Parser$RecoveryData$recoveryData = _List_fromArray(
	[$author$project$Parser$RecoveryData$problemWithElement]);
var $author$project$Parser$RecoveryData$get_ = function (problem) {
	return $elm$core$List$head(
		A2(
			$elm$core$List$filter,
			function (r) {
				return _Utils_eq(r.hU, problem);
			},
			$author$project$Parser$RecoveryData$recoveryData));
};
var $author$project$Parser$RecoveryData$setSourceMap = F2(
	function (sm, expr) {
		switch (expr.$) {
			case 0:
				var e = expr.a;
				return A2($author$project$Parser$Element$Text, e, sm);
			case 1:
				var name = expr.a;
				var args = expr.b;
				var body = expr.c;
				return A4($author$project$Parser$Element$Element, name, args, body, sm);
			default:
				var list = expr.a;
				return A2($author$project$Parser$Element$LX, list, sm);
		}
	});
var $author$project$Parser$RecoveryData$get = F2(
	function (tc_, problem) {
		var oldSourceMap = $author$project$Parser$Metadata$dummy;
		var newSourceMap = $elm$core$Maybe$Just(
			_Utils_update(
				oldSourceMap,
				{eZ: tc_.aO}));
		return A2(
			$elm$core$Maybe$map,
			function (r) {
				return _Utils_update(
					r,
					{
						hQ: A2($author$project$Parser$RecoveryData$setSourceMap, newSourceMap, r.hQ)
					});
			},
			$author$project$Parser$RecoveryData$get_(problem));
	});
var $author$project$Parser$TextCursor$LeftBracketError = 3;
var $author$project$Parser$Driver$fakeLeftBracket = $elm$core$String$fromChar('⁅');
var $author$project$Parser$Driver$fakeRightBracket = $elm$core$String$fromChar('⁆');
var $author$project$Parser$Driver$newOffset = F3(
	function (tc_, errorColumn_, mRecoveryData_) {
		if (!mRecoveryData_.$) {
			var rd = mRecoveryData_.a;
			return tc_.aG + rd.gZ;
		} else {
			return tc_.aG + errorColumn_;
		}
	});
var $elm_community$list_extra$List$Extra$updateIf = F3(
	function (predicate, update, list) {
		return A2(
			$elm$core$List$map,
			function (item) {
				return predicate(item) ? update(item) : item;
			},
			list);
	});
var $elm_community$list_extra$List$Extra$setIf = F3(
	function (predicate, replacement, list) {
		return A3(
			$elm_community$list_extra$List$Extra$updateIf,
			predicate,
			$elm$core$Basics$always(replacement),
			list);
	});
var $author$project$Parser$Driver$handleLeftBracketError = F4(
	function (tc_, mFirstError, errorColumn, mRecoveryData) {
		var textLines = $elm$core$String$lines(tc_.ih);
		var name = A2(
			$elm$core$Maybe$withDefault,
			'NAME',
			$elm$core$List$head(
				$elm$core$String$words(
					A3($elm$core$String$replace, '[', '', tc_.eY))));
		var replacementText = '[highlightRGB |255, 130, 130| missing right bracket in] [highlightRGB |186, 205, 255| ' + ($author$project$Parser$Driver$fakeLeftBracket + (' ' + (name + (' ' + (tc_.eY + (' ' + ($author$project$Parser$Driver$fakeRightBracket + ']')))))));
		var errorRow = A2(
			$elm$core$Maybe$withDefault,
			0,
			A2(
				$elm$core$Maybe$map,
				function ($) {
					return $.eF;
				},
				mFirstError));
		var errorLines = A2($elm$core$List$take, errorRow, textLines);
		var badText = function () {
			var _v0 = $elm$core$List$head(textLines);
			if (_v0.$ === 1) {
				return 'Oops, couldn\'t find your error text';
			} else {
				var str = _v0.a;
				return str;
			}
		}();
		var newTextLines = $elm$core$List$reverse(
			A3(
				$elm_community$list_extra$List$Extra$setIf,
				function (t) {
					return _Utils_eq(t, badText);
				},
				replacementText,
				errorLines));
		var newText = A2(
			$elm$core$String$join,
			'\n',
			$elm$core$List$reverse(newTextLines));
		return {
			eY: '?? TO DO',
			aO: tc_.aO,
			ae: tc_.ae,
			gW: tc_.gW,
			cM: {cx: newTextLines, dj: 3},
			bI: tc_.bI,
			aG: A3($author$project$Parser$Driver$newOffset, tc_, errorColumn, mRecoveryData),
			hP: $elm$core$Maybe$Nothing,
			ez: A2($elm$core$List$drop, 1, tc_.ez),
			bb: _List_Nil,
			ih: newText
		};
	});
var $author$project$Parser$TextCursor$PipeError = 1;
var $author$project$Parser$Driver$fakePipeSymbol = $elm$core$String$fromChar('ǀ');
var $author$project$Parser$Driver$parse__ = function (str) {
	var _v0 = A2(
		$elm$parser$Parser$Advanced$run,
		A2($author$project$Parser$Element$listParser, 0, 0),
		str);
	if (!_v0.$) {
		var list = _v0.a;
		return list;
	} else {
		return _List_Nil;
	}
};
var $author$project$Parser$Driver$handlePipeError = F4(
	function (tc_, mFirstError, errorColumn, mRecoveryData) {
		var textLines = $elm$core$String$lines(tc_.ih);
		var errorRow = A2(
			$elm$core$Maybe$withDefault,
			0,
			A2(
				$elm$core$Maybe$map,
				function ($) {
					return $.eF;
				},
				mFirstError));
		var errorLines = A2($elm$core$List$take, errorRow - 1, textLines);
		var badText = function () {
			var _v0 = $elm$core$List$head(textLines);
			if (_v0.$ === 1) {
				return 'Oops, couldn\'t find your error text';
			} else {
				var str = _v0.a;
				return str;
			}
		}();
		var correctedText = function (s) {
			return _Utils_ap(s, $author$project$Parser$Driver$fakeRightBracket);
		}(
			A3(
				$elm$core$String$replace,
				'|',
				$author$project$Parser$Driver$fakePipeSymbol,
				A3($elm$core$String$replace, '[', $author$project$Parser$Driver$fakeLeftBracket, badText)));
		var replacementText = '[highlightRGB |255, 130, 130| missing trailing pipe symbol in] [highlightRGB |186, 205, 255| ' + (correctedText + ' ]');
		var newTextLines = $elm$core$List$reverse(
			A3(
				$elm_community$list_extra$List$Extra$setIf,
				function (t) {
					return _Utils_eq(t, badText);
				},
				replacementText,
				textLines));
		return {
			eY: '?? TO DO',
			aO: tc_.aO,
			ae: tc_.ae,
			gW: tc_.gW,
			cM: {cx: newTextLines, dj: 1},
			bI: tc_.bI,
			aG: A3($author$project$Parser$Driver$newOffset, tc_, errorColumn, mRecoveryData),
			hP: $elm$core$Maybe$Nothing,
			ez: $author$project$Parser$Driver$parse__(
				A2($elm$core$String$join, '\n', errorLines)),
			bb: _List_Nil,
			ih: A2(
				$elm$core$String$join,
				'\n',
				$elm$core$List$reverse(newTextLines))
		};
	});
var $author$project$Parser$TextCursor$RightBracketError = 2;
var $author$project$Parser$Driver$handleRightBracketError = F4(
	function (tc_, mFirstError, errorColumn, mRecoveryData) {
		var textLines = $elm$core$String$lines(tc_.ih);
		var errorRow = A2(
			$elm$core$Maybe$withDefault,
			0,
			A2(
				$elm$core$Maybe$map,
				function ($) {
					return $.eF;
				},
				mFirstError));
		var errorLines = A2($elm$core$List$take, errorRow, textLines);
		var badText = function () {
			var _v0 = $elm$core$List$head(textLines);
			if (_v0.$ === 1) {
				return 'Oops, couldn\'t find your error text';
			} else {
				var str = _v0.a;
				return str;
			}
		}();
		var correctedText = function (s) {
			return _Utils_ap(s, $author$project$Parser$Driver$fakeRightBracket);
		}(
			A3(
				$elm$core$String$replace,
				'|',
				$author$project$Parser$Driver$fakePipeSymbol,
				A3($elm$core$String$replace, '[', $author$project$Parser$Driver$fakeLeftBracket, badText)));
		var replacementText = '[highlightRGB |255, 130, 130| missing right bracket in] [highlightRGB |186, 205, 255| ' + (correctedText + ' ]');
		var newTextLines = $elm$core$List$reverse(
			A3(
				$elm_community$list_extra$List$Extra$setIf,
				function (t) {
					return _Utils_eq(t, badText);
				},
				replacementText,
				errorLines));
		var newText = A2(
			$elm$core$String$join,
			'\n',
			$elm$core$List$reverse(newTextLines));
		return {
			eY: '?? TO DO',
			aO: tc_.aO,
			ae: tc_.ae,
			gW: tc_.gW,
			cM: {cx: newTextLines, dj: 2},
			bI: tc_.bI,
			aG: A3($author$project$Parser$Driver$newOffset, tc_, errorColumn, mRecoveryData),
			hP: $elm$core$Maybe$Nothing,
			ez: A2($elm$core$List$drop, 1, tc_.ez),
			bb: _List_Nil,
			ih: newText
		};
	});
var $author$project$Parser$TextCursor$UnhandledError = 4;
var $author$project$Parser$Driver$makeNewText = F3(
	function (tc_, errorColumn_, mRecoveryData) {
		if (!mRecoveryData.$) {
			var rd = mRecoveryData.a;
			return A2($elm$core$String$dropLeft, rd.iu, tc_.ih);
		} else {
			return A2($elm$core$String$dropLeft, errorColumn_, tc_.ih);
		}
	});
var $author$project$Parser$Driver$newParsed = F3(
	function (tc_, lxError_, mRecoveryData) {
		if (!mRecoveryData.$) {
			var rd = mRecoveryData.a;
			return A2($elm$core$List$cons, rd.hQ, tc_.ez);
		} else {
			return A2($elm$core$List$cons, lxError_, tc_.ez);
		}
	});
var $author$project$Parser$Driver$newStack = F3(
	function (tc_, errorText_, mRecoveryData) {
		if (!mRecoveryData.$) {
			return _Utils_eq(
				$elm$core$List$head(tc_.bb),
				$elm$core$Maybe$Just('highlight')) ? tc_.bb : A2($elm$core$List$cons, 'highlight', tc_.bb);
		} else {
			return A2(
				$elm$core$List$cons,
				errorText_,
				A2($elm$core$List$cons, 'highlight', tc_.bb));
		}
	});
var $author$project$Parser$Driver$unhandledError = F6(
	function (tc_, mFirstError, errorColumn, mRecoveryData, lxError, errorText) {
		return {
			eY: '?? TO DO',
			aO: tc_.aO,
			ae: tc_.ae,
			gW: tc_.gW,
			cM: {cx: _List_Nil, dj: 4},
			bI: tc_.bI,
			aG: A3($author$project$Parser$Driver$newOffset, tc_, errorColumn, mRecoveryData),
			hP: $elm$core$Maybe$Nothing,
			ez: A3($author$project$Parser$Driver$newParsed, tc_, lxError, mRecoveryData),
			bb: A3($author$project$Parser$Driver$newStack, tc_, errorText, mRecoveryData),
			ih: A3($author$project$Parser$Driver$makeNewText, tc_, errorColumn, mRecoveryData)
		};
	});
var $author$project$Parser$Driver$handleError = F2(
	function (tc_, e) {
		var mFirstError = $elm$core$List$head(e);
		var problem = A2(
			$elm$core$Maybe$withDefault,
			$author$project$Parser$Error$UnHandledError(0),
			A2(
				$elm$core$Maybe$map,
				function ($) {
					return $.hU;
				},
				mFirstError));
		var mRecoveryData = A2($author$project$Parser$RecoveryData$get, tc_, problem);
		var errorColumn = A2(
			$elm$core$Maybe$withDefault,
			0,
			A2(
				$elm$core$Maybe$map,
				function ($) {
					return $.gP;
				},
				mFirstError));
		var errorText = A2($elm$core$String$left, errorColumn, tc_.ih);
		var lxError = A4(
			$author$project$Parser$Element$Element,
			'Error',
			_List_Nil,
			A2($author$project$Parser$Element$Text, errorText, $elm$core$Maybe$Nothing),
			$elm$core$Maybe$Just(
				{eZ: tc_.aO, bI: tc_.bI, bS: '', hw: errorColumn, aG: tc_.aG + errorColumn}));
		switch (problem.$) {
			case 2:
				return A4($author$project$Parser$Driver$handleRightBracketError, tc_, mFirstError, errorColumn, mRecoveryData);
			case 1:
				return A4($author$project$Parser$Driver$handleLeftBracketError, tc_, mFirstError, errorColumn, mRecoveryData);
			case 3:
				return A4($author$project$Parser$Driver$handlePipeError, tc_, mFirstError, errorColumn, mRecoveryData);
			default:
				return A6($author$project$Parser$Driver$unhandledError, tc_, mFirstError, errorColumn, mRecoveryData, lxError, errorText);
		}
	});
var $author$project$Parser$Driver$incrementSourceMapOffset = F2(
	function (delta, sourceMap) {
		if (!sourceMap.$) {
			var sm = sourceMap.a;
			return $elm$core$Maybe$Just(
				_Utils_update(
					sm,
					{aG: sm.aG + delta}));
		} else {
			return $elm$core$Maybe$Nothing;
		}
	});
var $author$project$Parser$Driver$incrementOffset = F2(
	function (delta, expr) {
		switch (expr.$) {
			case 0:
				var s = expr.a;
				var sm = expr.b;
				return A2(
					$author$project$Parser$Element$Text,
					s,
					A2($author$project$Parser$Driver$incrementSourceMapOffset, delta, sm));
			case 1:
				var name = expr.a;
				var args = expr.b;
				var body_ = expr.c;
				var sm = expr.d;
				return A4(
					$author$project$Parser$Element$Element,
					name,
					args,
					body_,
					A2($author$project$Parser$Driver$incrementSourceMapOffset, delta, sm));
			default:
				var e = expr.a;
				var sm = expr.b;
				return A2(
					$author$project$Parser$Element$LX,
					e,
					A2($author$project$Parser$Driver$incrementSourceMapOffset, delta, sm));
		}
	});
var $author$project$Parser$Driver$packet = {
	ha: $author$project$Parser$Getters$getSource,
	hc: $elm$core$Maybe$Just($author$project$Parser$Driver$handleError),
	hf: $elm$core$Maybe$Nothing,
	hl: $author$project$Parser$Driver$incrementOffset,
	hR: $author$project$Parser$Element$parser
};
var $author$project$Parser$TextCursor$NoError = 0;
var $author$project$Parser$TextCursor$init = F4(
	function (generation, blockIndex, data, text) {
		return {
			eY: '',
			aO: blockIndex,
			ae: 0,
			gW: data,
			cM: {cx: _List_Nil, dj: 0},
			bI: generation,
			aG: 0,
			hP: $elm$core$Maybe$Nothing,
			ez: _List_Nil,
			bb: _List_Nil,
			ih: text
		};
	});
var $author$project$Parser$Tool$loop = F2(
	function (s, nextState) {
		loop:
		while (true) {
			var _v0 = nextState(s);
			if (!_v0.$) {
				var s_ = _v0.a;
				var $temp$s = s_,
					$temp$nextState = nextState;
				s = $temp$s;
				nextState = $temp$nextState;
				continue loop;
			} else {
				var b = _v0.a;
				return b;
			}
		}
	});
var $author$project$Parser$Tool$Done = function (a) {
	return {$: 1, a: a};
};
var $author$project$Parser$Tool$Loop = function (a) {
	return {$: 0, a: a};
};
var $author$project$Vector$toString = function (v) {
	return A2(
		$elm$core$String$join,
		'.',
		A2(
			$elm$core$List$map,
			$elm$core$String$fromInt,
			A2(
				$elm$core$List$filter,
				function (x) {
					return x > 0;
				},
				v.eg)));
};
var $author$project$Parser$Data$sectionLabel = function (data) {
	return A2(
		$elm$core$Maybe$withDefault,
		'??',
		A2(
			$elm$core$Maybe$map,
			$author$project$Vector$toString,
			A2($elm$core$Dict$get, 'section', data.ds)));
};
var $author$project$Parser$Element$setLabel = F2(
	function (label, element_) {
		if ((element_.$ === 1) && (!element_.d.$)) {
			var name = element_.a;
			var args = element_.b;
			var body = element_.c;
			var metadata = element_.d.a;
			return A4(
				$author$project$Parser$Element$Element,
				name,
				args,
				body,
				$elm$core$Maybe$Just(
					_Utils_update(
						metadata,
						{bS: label})));
		} else {
			return element_;
		}
	});
var $author$project$Parser$Data$setSectionLabel = F3(
	function (name_, data, element) {
		return A2(
			$author$project$Parser$Element$setLabel,
			$author$project$Parser$Data$sectionLabel(data),
			element);
	});
var $author$project$Parser$Data$labelElement = F2(
	function (data, element) {
		if (element.$ === 1) {
			var name = element.a;
			var args = element.b;
			var body = element.c;
			return (A2($elm$core$String$left, 7, name) === 'section') ? A3($author$project$Parser$Data$setSectionLabel, name, data, element) : element;
		} else {
			return element;
		}
	});
var $author$project$Parser$Loop$newExpr = F3(
	function (packet, tc_, expr) {
		var _v0 = $elm$core$List$head(tc_.bb);
		if ((!_v0.$) && (_v0.a === 'highlight')) {
			var _v1 = packet.hf;
			if (_v1.$ === 1) {
				return A2(packet.hl, tc_.aG, expr);
			} else {
				var hl = _v1.a;
				return A2(
					packet.hl,
					tc_.aG,
					A2(
						hl,
						expr,
						packet.ha(expr)));
			}
		} else {
			return A2(packet.hl, tc_.aG, expr);
		}
	});
var $author$project$Parser$Data$getText2 = function (element) {
	if (element.$ === 2) {
		var list_ = element.a;
		return A2(
			$elm$core$String$join,
			'\n',
			$elm_community$maybe_extra$Maybe$Extra$values(
				A2($elm$core$List$map, $author$project$Render$Utility$extractText, list_)));
	} else {
		return '';
	}
};
var $author$project$Parser$Data$makePair = function (ns) {
	if ((ns.b && ns.b.b) && (!ns.b.b.b)) {
		var x = ns.a;
		var _v1 = ns.b;
		var y = _v1.a;
		return $elm$core$Maybe$Just(
			_Utils_Tuple2(x, y));
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $author$project$Parser$Data$handleLet_ = F3(
	function (name, body, bindings) {
		var data = $author$project$Parser$Data$getText2(body);
		var parts = A2($elm$core$String$split, ',', data);
		var kvList = $elm_community$maybe_extra$Maybe$Extra$values(
			A2(
				$elm$core$List$map,
				A2(
					$elm$core$Basics$composeR,
					$elm$core$String$split('='),
					A2(
						$elm$core$Basics$composeR,
						$elm$core$List$map($elm$core$String$trim),
						$author$project$Parser$Data$makePair)),
				parts));
		return A3(
			$elm$core$List$foldl,
			function (_v0) {
				var k = _v0.a;
				var v = _v0.b;
				return A2($elm$core$Dict$insert, k, v);
			},
			bindings,
			kvList);
	});
var $author$project$Parser$Data$handleLet = F3(
	function (name, body, data) {
		return _Utils_update(
			data,
			{
				dD: A3($author$project$Parser$Data$handleLet_, name, body, data.dD)
			});
	});
var $author$project$Parser$Data$handleMacro_ = F3(
	function (_v0, element, dict) {
		if ((((((((element.$ === 2) && element.a.b) && (element.a.a.$ === 1)) && (element.a.a.c.$ === 2)) && element.a.a.c.a.b) && (element.a.a.c.a.a.$ === 1)) && (!element.a.a.c.a.b.b)) && (!element.a.b.b)) {
			var _v2 = element.a;
			var _v3 = _v2.a;
			var macroName_ = _v3.a;
			var _v4 = _v3.c;
			var _v5 = _v4.a;
			var _v6 = _v5.a;
			var name_ = _v6.a;
			var args_ = _v6.b;
			return A3(
				$elm$core$Dict$insert,
				macroName_,
				{eU: args_, dU: name_},
				dict);
		} else {
			return dict;
		}
	});
var $author$project$Parser$Data$handleMacro = F3(
	function (str, element, data) {
		return _Utils_update(
			data,
			{
				dQ: A3($author$project$Parser$Data$handleMacro_, str, element, data.dQ)
			});
	});
var $author$project$Parser$Data$getText = function (element) {
	if (element.$ === 2) {
		var list_ = element.a;
		return A2(
			$elm$core$String$join,
			'\n',
			$elm_community$maybe_extra$Maybe$Extra$values(
				A2($elm$core$List$map, $author$project$Render$Utility$extractText, list_)));
	} else {
		return '';
	}
};
var $author$project$Vector$get = F2(
	function (k, v) {
		return A2(
			$elm$core$Maybe$withDefault,
			0,
			A2($elm_community$list_extra$List$Extra$getAt, k, v.eg));
	});
var $author$project$Vector$resetFrom = F2(
	function (k, v) {
		var suffix = A2($elm$core$List$repeat, v.ca - k, 0);
		var prefix = A2($elm$core$List$take, k, v.eg);
		return {
			eg: _Utils_ap(prefix, suffix),
			ca: v.ca
		};
	});
var $author$project$Vector$set = F3(
	function (k, a, v) {
		return _Utils_update(
			v,
			{
				eg: A3($elm_community$list_extra$List$Extra$setAt, k, a, v.eg)
			});
	});
var $author$project$Vector$increment = F2(
	function (k, v) {
		return ((k < 0) || (_Utils_cmp(k, v.ca) > -1)) ? v : A2(
			$author$project$Vector$resetFrom,
			k + 1,
			A3(
				$author$project$Vector$set,
				k,
				A2($author$project$Vector$get, k, v) + 1,
				v));
	});
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
var $author$project$Parser$Data$handleSection = F3(
	function (name, element, data) {
		var name_ = (name === 'section') ? 'section1' : name;
		var level_ = $elm$core$String$toInt(
			A3($elm$core$String$replace, 'section', '', name_));
		if (level_.$ === 1) {
			return data;
		} else {
			var level = level_.a;
			var maybeInc = $elm$core$Maybe$map(
				function (x) {
					return A2($author$project$Vector$increment, level - 1, x);
				});
			var newVectorCounters = A3($elm$core$Dict$update, 'section', maybeInc, data.ds);
			var newData = _Utils_update(
				data,
				{ds: newVectorCounters});
			var tocItem = {
				bS: $author$project$Parser$Data$sectionLabel(newData),
				fv: level - 1,
				dU: $author$project$Parser$Data$getText(element)
			};
			return _Utils_update(
				newData,
				{
					cd: A2($elm$core$List$cons, tocItem, data.cd)
				});
		}
	});
var $author$project$Parser$Data$update = F2(
	function (element, data) {
		switch (element.$) {
			case 1:
				var name = element.a;
				var args = element.b;
				var body = element.c;
				if (A2($elm$core$String$left, 7, name) === 'section') {
					return A3($author$project$Parser$Data$handleSection, name, body, data);
				} else {
					switch (name) {
						case 'macro':
							return A3($author$project$Parser$Data$handleMacro, name, body, data);
						case 'set':
							return A3($author$project$Parser$Data$handleLet, name, body, data);
						case 'set_':
							return A3($author$project$Parser$Data$handleLet, name, body, data);
						default:
							return data;
					}
				}
			case 2:
				var list = element.a;
				return A3($elm$core$List$foldl, $author$project$Parser$Data$update, data, list);
			default:
				return data;
		}
	});
var $author$project$Parser$Loop$nextCursor = F2(
	function (packet, tc) {
		if ((tc.ih === '') || (tc.ae > 100)) {
			return $author$project$Parser$Tool$Done(
				_Utils_update(
					tc,
					{
						ez: $elm$core$List$reverse(tc.ez)
					}));
		} else {
			var _v0 = A2(
				$elm$parser$Parser$Advanced$run,
				A2(packet.hR, tc.bI, tc.aO),
				tc.ih);
			if (!_v0.$) {
				var expr = _v0.a;
				var sourceMapLength = A2(
					$elm$core$Maybe$withDefault,
					0,
					A2(
						$elm$core$Maybe$map,
						function ($) {
							return $.hw;
						},
						packet.ha(expr)));
				var parsand = A3($author$project$Parser$Loop$newExpr, packet, tc, expr);
				var data = A2($author$project$Parser$Data$update, parsand, tc.gW);
				return $author$project$Parser$Tool$Loop(
					_Utils_update(
						tc,
						{
							eY: _Utils_ap(
								tc.eY,
								A2($elm$core$String$left, sourceMapLength, tc.ih)),
							ae: tc.ae + 1,
							gW: data,
							aG: tc.aG + sourceMapLength,
							hP: $elm$core$Maybe$Just(parsand),
							ez: A2(
								$elm$core$List$cons,
								A2($author$project$Parser$Data$labelElement, data, parsand),
								tc.ez),
							ih: A2($elm$core$String$dropLeft, sourceMapLength, tc.ih)
						}));
			} else {
				var e = _v0.a;
				var _v1 = packet.hc;
				if (_v1.$ === 1) {
					return $author$project$Parser$Tool$Loop(
						_Utils_update(
							tc,
							{ae: tc.ae + 1}));
				} else {
					var he = _v1.a;
					return $author$project$Parser$Tool$Loop(
						A2(he, tc, e));
				}
			}
		}
	});
var $author$project$Parser$Loop$parseLoop = F5(
	function (packet, generation, initialLineNumber, data, str) {
		return A2(
			$author$project$Parser$Tool$loop,
			A4($author$project$Parser$TextCursor$init, generation, initialLineNumber, data, str),
			$author$project$Parser$Loop$nextCursor(packet));
	});
var $author$project$Parser$Driver$parseLoop = F4(
	function (generation, initialLineNumber, data, str) {
		return A5($author$project$Parser$Loop$parseLoop, $author$project$Parser$Driver$packet, generation, initialLineNumber, data, str);
	});
var $author$project$Parser$Document$updateData = function (tc) {
	var _v0 = tc.hP;
	if (_v0.$ === 1) {
		return tc.gW;
	} else {
		var parsand = _v0.a;
		return A2($author$project$Parser$Data$update, parsand, tc.gW);
	}
};
var $author$project$Parser$Document$pushBlock_ = F2(
	function (line, state) {
		var str = A2(
			$elm$core$String$join,
			'\n',
			$elm$core$List$reverse(state.q)) + ('\n' + line);
		var tc = A4($author$project$Parser$Driver$parseLoop, state.bI, state.aF, state.gW, str);
		return _Utils_update(
			state,
			{
				q: _List_Nil,
				A: 0,
				T: 0,
				gW: $author$project$Parser$Document$updateData(tc),
				N: $elm$core$Maybe$Just(tc),
				aF: state.aF + $author$project$Parser$Document$countLines(state.q),
				L: A2($elm$core$List$cons, tc, state.L)
			});
	});
var $author$project$Parser$Document$addToBlockContents = F2(
	function (currentLine_, state) {
		var deltaBlockLevel = $author$project$Parser$Document$differentialBlockLevel(currentLine_);
		var newBlockLevel = A2($elm$core$Basics$max, 0, state.A + deltaBlockLevel);
		return ((!newBlockLevel) && (deltaBlockLevel < 0)) ? A2($author$project$Parser$Document$pushBlock_, '\n' + currentLine_, state) : _Utils_update(
			state,
			{
				q: A2($elm$core$List$cons, currentLine_, state.q),
				A: newBlockLevel
			});
	});
var $author$project$Parser$Document$LTBlank = 0;
var $author$project$Parser$Document$LTBeginElement = 2;
var $author$project$Parser$Document$beginElementParser = A2(
	$elm$parser$Parser$keeper,
	$elm$parser$Parser$succeed(
		function (s) {
			return 2;
		}),
	$elm$parser$Parser$symbol('['));
var $author$project$Parser$Document$LTComment = 4;
var $author$project$Parser$Document$commentParser = A2(
	$elm$parser$Parser$keeper,
	$elm$parser$Parser$succeed(
		function (s) {
			return 4;
		}),
	$elm$parser$Parser$symbol('%'));
var $author$project$Parser$Document$LTEndElement = 3;
var $author$project$Parser$Document$endElementParser = A2(
	$elm$parser$Parser$keeper,
	$elm$parser$Parser$succeed(
		function (s) {
			return 3;
		}),
	$elm$parser$Parser$symbol(']'));
var $author$project$Parser$Document$LTTextBlock = 1;
var $author$project$Parser$Document$textBlockParser = A2(
	$elm$parser$Parser$ignorer,
	$elm$parser$Parser$succeed(1),
	$elm$parser$Parser$chompIf(
		function (_v0) {
			return true;
		}));
var $author$project$Parser$Document$lineTypeParser = $elm$parser$Parser$oneOf(
	_List_fromArray(
		[
			$author$project$Parser$Document$commentParser,
			$author$project$Parser$Document$beginElementParser,
			$author$project$Parser$Document$endElementParser,
			$author$project$Parser$Document$textBlockParser,
			$elm$parser$Parser$succeed(0)
		]));
var $author$project$Parser$Document$classify = function (str) {
	var _v0 = A2($elm$parser$Parser$run, $author$project$Parser$Document$lineTypeParser, str);
	if (!_v0.$) {
		var lt = _v0.a;
		return lt;
	} else {
		return 0;
	}
};
var $author$project$Parser$Document$Done = function (a) {
	return {$: 1, a: a};
};
var $author$project$Parser$Document$noError = function (state) {
	var err = A2(
		$elm$core$Maybe$map,
		function ($) {
			return $.cM;
		},
		state.N);
	return _Utils_eq(err, $elm$core$Maybe$Nothing) || _Utils_eq(
		A2(
			$elm$core$Maybe$map,
			function ($) {
				return $.dj;
			},
			err),
		$elm$core$Maybe$Just(0));
};
var $author$project$Parser$Document$flush = function (state) {
	var input = A2(
		$elm$core$String$join,
		'\n',
		$elm$core$List$reverse(state.q));
	var newState = function () {
		if (input === '') {
			return state;
		} else {
			var tc_ = A4($author$project$Parser$Driver$parseLoop, state.bI, state.aF, state.gW, input);
			var tc = _Utils_update(
				tc_,
				{ih: input});
			return _Utils_update(
				state,
				{
					gW: $author$project$Parser$Document$updateData(tc),
					N: $elm$core$Maybe$Just(tc),
					L: A2($elm$core$List$cons, tc, state.L)
				});
		}
	}();
	var errorStatus = A2(
		$elm$core$Maybe$map,
		function ($) {
			return $.cM;
		},
		$elm$core$List$head(newState.L));
	if ($author$project$Parser$Document$noError(newState)) {
		return $author$project$Parser$Document$Done(newState);
	} else {
		var _v0 = A2(
			$elm$core$Maybe$map,
			function ($) {
				return $.dj;
			},
			errorStatus);
		if ((!_v0.$) && (_v0.a === 2)) {
			var _v1 = _v0.a;
			var correctedText = $elm$core$List$reverse(
				A2(
					$elm$core$Maybe$withDefault,
					_List_fromArray(
						['Could not correct the error']),
					A2(
						$elm$core$Maybe$map,
						function ($) {
							return $.cx;
						},
						errorStatus)));
			var correctedState = _Utils_update(
				state,
				{q: _List_Nil, A: 0, T: 0, aQ: correctedText});
			return $author$project$Parser$Document$Loop(correctedState);
		} else {
			return $author$project$Parser$Document$Done(newState);
		}
	}
};
var $author$project$Parser$Document$resetError = function (tc) {
	return _Utils_update(
		tc,
		{
			cM: {cx: _List_Nil, dj: 0}
		});
};
var $author$project$Parser$Document$handleError = function (state) {
	if (_Utils_eq(state.aQ, _List_Nil)) {
		return $author$project$Parser$Document$flush(state);
	} else {
		var err_ = A2(
			$elm$core$Maybe$map,
			function ($) {
				return $.cM;
			},
			state.N);
		var _v0 = A2(
			$elm$core$Maybe$map,
			function ($) {
				return $.dj;
			},
			A2(
				$elm$core$Maybe$map,
				function ($) {
					return $.cM;
				},
				state.N));
		if (err_.$ === 1) {
			return $author$project$Parser$Document$Done(state);
		} else {
			var err = err_.a;
			var _v2 = err.dj;
			switch (_v2) {
				case 3:
					var foo = 1;
					var correctedText = A2(
						$elm$core$Maybe$withDefault,
						'Could not get corrected text',
						$elm$core$List$head(err.cx));
					return $author$project$Parser$Document$Loop(
						_Utils_update(
							state,
							{
								A: 0,
								T: 0,
								N: A2($elm$core$Maybe$map, $author$project$Parser$Document$resetError, state.N)
							}));
				case 2:
					var foo = 1;
					var correctedText = A2(
						$elm$core$Maybe$withDefault,
						'Could not get corrected text',
						$elm$core$List$head(err.cx));
					return $author$project$Parser$Document$Loop(
						_Utils_update(
							state,
							{
								A: 0,
								T: 0,
								N: A2($elm$core$Maybe$map, $author$project$Parser$Document$resetError, state.N)
							}));
				case 1:
					var foo = 1;
					var correctedText = A2(
						$elm$core$Maybe$withDefault,
						'Could not get corrected text',
						$elm$core$List$head(err.cx));
					return $author$project$Parser$Document$Loop(
						_Utils_update(
							state,
							{
								A: 0,
								T: 0,
								N: A2($elm$core$Maybe$map, $author$project$Parser$Document$resetError, state.N)
							}));
				default:
					return $author$project$Parser$Document$Done(state);
			}
		}
	}
};
var $author$project$Parser$Document$initBlock = F3(
	function (blockType_, currentLine_, state) {
		return _Utils_update(
			state,
			{
				q: _List_fromArray(
					[currentLine_]),
				T: blockType_
			});
	});
var $author$project$Parser$Document$popBlockStack = F2(
	function (currentLine_, state) {
		var newBlockLevel = A2(
			$elm$core$Basics$max,
			0,
			state.A + $author$project$Parser$Document$differentialBlockLevel(currentLine_));
		if (!newBlockLevel) {
			var input_ = A2(
				$elm$core$String$join,
				'\n',
				$elm$core$List$reverse(
					A2($elm$core$List$cons, currentLine_, state.q)));
			var tc_ = A4($author$project$Parser$Driver$parseLoop, state.bI, state.aF, state.gW, input_);
			var tc = _Utils_update(
				tc_,
				{ih: input_});
			return _Utils_update(
				state,
				{
					q: A2($elm$core$List$cons, currentLine_, state.q),
					A: 0,
					T: 0,
					gW: $author$project$Parser$Document$updateData(tc),
					N: $elm$core$Maybe$Just(tc),
					aF: state.aF + (2 + $elm$core$List$length(state.q)),
					L: A2($elm$core$List$cons, tc, state.L)
				});
		} else {
			return _Utils_update(
				state,
				{
					q: A2($elm$core$List$cons, currentLine_, state.q),
					A: newBlockLevel
				});
		}
	});
var $author$project$Parser$Document$pushBlock = function (state) {
	return A2($author$project$Parser$Document$pushBlock_, '', state);
};
var $author$project$Parser$Document$pushBlockStack = F2(
	function (currentLine_, state) {
		var deltaBlockLevel = $author$project$Parser$Document$differentialBlockLevel(currentLine_);
		var newBlockLevel = A2($elm$core$Basics$max, 0, state.A + deltaBlockLevel);
		return (!newBlockLevel) ? A2($author$project$Parser$Document$pushBlock_, '\n' + currentLine_, state) : _Utils_update(
			state,
			{
				q: A2($elm$core$List$cons, currentLine_, state.q),
				A: newBlockLevel
			});
	});
var $author$project$Parser$Document$start = function (state) {
	return _Utils_update(
		state,
		{q: _List_Nil, A: 0, T: 0});
};
var $author$project$Parser$Document$startBlock = F2(
	function (currentLine_, state) {
		var deltaBlockLevel = $author$project$Parser$Document$differentialBlockLevel(currentLine_);
		var newBlockLevel = A2($elm$core$Basics$max, 0, state.A + deltaBlockLevel);
		return _Utils_update(
			state,
			{
				q: A2($elm$core$List$cons, currentLine_, state.q),
				A: newBlockLevel,
				T: 2
			});
	});
var $author$project$Parser$Document$nextState = function (state_) {
	var _v0 = _Utils_Tuple2(
		$elm$core$List$head(state_.aQ),
		$author$project$Parser$Document$noError(state_));
	if (_v0.a.$ === 1) {
		var _v1 = _v0.a;
		return $author$project$Parser$Document$flush(state_);
	} else {
		if (!_v0.b) {
			return $author$project$Parser$Document$handleError(state_);
		} else {
			var currentLine = _v0.a.a;
			var state = _Utils_update(
				state_,
				{
					aQ: A2($elm$core$List$drop, 1, state_.aQ)
				});
			var _v2 = _Utils_Tuple2(
				state.T,
				$author$project$Parser$Document$classify(currentLine));
			switch (_v2.b) {
				case 4:
					var _v3 = _v2.b;
					return $author$project$Parser$Document$Loop(
						_Utils_update(
							state,
							{
								aQ: A2($elm$core$List$drop, 1, state.aQ)
							}));
				case 0:
					switch (_v2.a) {
						case 0:
							var _v4 = _v2.a;
							var _v5 = _v2.b;
							return $author$project$Parser$Document$Loop(
								$author$project$Parser$Document$start(state));
						case 1:
							var _v12 = _v2.a;
							var _v13 = _v2.b;
							return $author$project$Parser$Document$Loop(
								$author$project$Parser$Document$pushBlock(state));
						default:
							var _v20 = _v2.a;
							var _v21 = _v2.b;
							return $author$project$Parser$Document$Loop(
								A2($author$project$Parser$Document$pushBlockStack, currentLine, state));
					}
				case 2:
					switch (_v2.a) {
						case 0:
							var _v6 = _v2.a;
							var _v7 = _v2.b;
							return $author$project$Parser$Document$Loop(
								A2(
									$author$project$Parser$Document$startBlock,
									currentLine,
									_Utils_update(
										state,
										{T: 2})));
						case 1:
							var _v14 = _v2.a;
							var _v15 = _v2.b;
							return $author$project$Parser$Document$Loop(
								A2($author$project$Parser$Document$startBlock, currentLine, state));
						default:
							var _v22 = _v2.a;
							var _v23 = _v2.b;
							return $author$project$Parser$Document$Loop(
								A2($author$project$Parser$Document$startBlock, currentLine, state));
					}
				case 3:
					switch (_v2.a) {
						case 0:
							var _v8 = _v2.a;
							var _v9 = _v2.b;
							return $author$project$Parser$Document$Loop(
								A3($author$project$Parser$Document$initBlock, 1, 'Error: ' + currentLine, state));
						case 1:
							var _v16 = _v2.a;
							var _v17 = _v2.b;
							return $author$project$Parser$Document$Loop(
								A2($author$project$Parser$Document$addToBlockContents, currentLine, state));
						default:
							var _v24 = _v2.a;
							var _v25 = _v2.b;
							return $author$project$Parser$Document$Loop(
								A2($author$project$Parser$Document$popBlockStack, currentLine, state));
					}
				default:
					switch (_v2.a) {
						case 0:
							var _v10 = _v2.a;
							var _v11 = _v2.b;
							return $author$project$Parser$Document$Loop(
								A3($author$project$Parser$Document$initBlock, 1, currentLine, state));
						case 1:
							var _v18 = _v2.a;
							var _v19 = _v2.b;
							return $author$project$Parser$Document$Loop(
								A2($author$project$Parser$Document$addToBlockContents, currentLine, state));
						default:
							var _v26 = _v2.a;
							var _v27 = _v2.b;
							return $author$project$Parser$Document$Loop(
								A2($author$project$Parser$Document$addToBlockContents, currentLine, state));
					}
			}
		}
	}
};
var $author$project$Parser$Document$runLoop = F2(
	function (generation, strList) {
		return A2(
			$author$project$Parser$Document$loop,
			A2($author$project$Parser$Document$init, generation, strList),
			$author$project$Parser$Document$nextState);
	});
var $author$project$Parser$Document$toParsed = function (state) {
	return $elm$core$List$reverse(
		A2(
			$elm$core$List$map,
			function ($) {
				return $.ez;
			},
			state.L));
};
var $author$project$Main$render = F2(
	function (k, str) {
		var state = A2(
			$author$project$Parser$Document$runLoop,
			k,
			$elm$core$String$lines(str));
		var newState = A2($author$project$Main$initStateWithData, k, state.gW);
		return A2(
			$mdgriffith$elm_ui$Element$map,
			$author$project$Main$CYTMsg,
			A2(
				$mdgriffith$elm_ui$Element$column,
				_List_fromArray(
					[
						$mdgriffith$elm_ui$Element$spacing(18)
					]),
				A2(
					$elm$core$List$map,
					$author$project$Render$Elm$renderList(newState),
					$author$project$Parser$Document$toParsed(state))));
	});
var $author$project$Main$outputDisplay_ = function (model) {
	return A2(
		$mdgriffith$elm_ui$Element$column,
		_List_fromArray(
			[
				$mdgriffith$elm_ui$Element$spacing(8),
				$mdgriffith$elm_ui$Element$Background$color(
				A3($mdgriffith$elm_ui$Element$rgb, 1.0, 1.0, 1.0)),
				A2($mdgriffith$elm_ui$Element$paddingXY, 24, 36),
				$mdgriffith$elm_ui$Element$width(
				$mdgriffith$elm_ui$Element$px($author$project$Main$panelWidth_)),
				$mdgriffith$elm_ui$Element$height(
				$mdgriffith$elm_ui$Element$px(
					$author$project$Main$panelHeight_(model))),
				$mdgriffith$elm_ui$Element$scrollbarY,
				$mdgriffith$elm_ui$Element$moveUp(9),
				$mdgriffith$elm_ui$Element$Font$size(12)
			]),
		(model.dT === 1) ? _List_fromArray(
			[
				A2($author$project$Main$render, model.ae, model.aQ)
			]) : A2(
			$elm$core$List$map,
			$mdgriffith$elm_ui$Element$text,
			A2($folkertdev$elm_paragraph$Paragraph$lines, $author$project$Main$paragraphFormat, model.b6)));
};
var $author$project$Main$wordCount = function (str) {
	return $elm$core$List$length(
		$elm$core$String$words(str));
};
var $author$project$Main$wordCountElement = function (str) {
	return A2(
		$mdgriffith$elm_ui$Element$row,
		_List_fromArray(
			[
				$mdgriffith$elm_ui$Element$spacing(8)
			]),
		_List_fromArray(
			[
				A2(
				$mdgriffith$elm_ui$Element$el,
				_List_Nil,
				$mdgriffith$elm_ui$Element$text('words:')),
				A2(
				$mdgriffith$elm_ui$Element$el,
				_List_Nil,
				$mdgriffith$elm_ui$Element$text(
					$elm$core$String$fromInt(
						$author$project$Main$wordCount(str))))
			]));
};
var $author$project$Main$outputDisplay = function (model) {
	return A2(
		$mdgriffith$elm_ui$Element$column,
		_List_fromArray(
			[
				$mdgriffith$elm_ui$Element$spacing(8)
			]),
		_List_fromArray(
			[
				A2(
				$mdgriffith$elm_ui$Element$row,
				_List_fromArray(
					[
						$author$project$Main$fontGray(0.9),
						$mdgriffith$elm_ui$Element$spacing(12),
						$mdgriffith$elm_ui$Element$moveUp(9),
						$mdgriffith$elm_ui$Element$Font$size(14)
					]),
				_List_fromArray(
					[
						$author$project$Main$dummyButton,
						$mdgriffith$elm_ui$Element$text(
						'generation: ' + $elm$core$String$fromInt(model.ae)),
						$author$project$Main$wordCountElement(model.aQ)
					])),
				$author$project$Main$outputDisplay_(model)
			]));
};
var $author$project$Main$title = function (str) {
	return A2(
		$mdgriffith$elm_ui$Element$row,
		_List_fromArray(
			[
				$mdgriffith$elm_ui$Element$centerX,
				$author$project$Main$fontGray(0.9)
			]),
		_List_fromArray(
			[
				$mdgriffith$elm_ui$Element$text(str)
			]));
};
var $author$project$Main$grayColor = function (g) {
	return A3($mdgriffith$elm_ui$Element$rgb, g, g, g);
};
var $author$project$Main$whiteColor = $author$project$Main$grayColor(1);
var $author$project$Main$mainColumn = function (model) {
	return A2(
		$mdgriffith$elm_ui$Element$column,
		$author$project$Main$mainColumnStyle(model),
		_List_fromArray(
			[
				A2(
				$mdgriffith$elm_ui$Element$column,
				_List_fromArray(
					[
						$mdgriffith$elm_ui$Element$spacing(48),
						$mdgriffith$elm_ui$Element$width(
						$mdgriffith$elm_ui$Element$px($author$project$Main$appWidth_)),
						$mdgriffith$elm_ui$Element$height(
						$mdgriffith$elm_ui$Element$px(
							$author$project$Main$appHeight_(model)))
					]),
				_List_fromArray(
					[
						$author$project$Main$title('CaYaTeX Test App'),
						A2(
						$mdgriffith$elm_ui$Element$column,
						_List_fromArray(
							[
								$mdgriffith$elm_ui$Element$spacing(12)
							]),
						_List_fromArray(
							[
								A2(
								$mdgriffith$elm_ui$Element$row,
								_List_fromArray(
									[
										$mdgriffith$elm_ui$Element$spacing(12)
									]),
								_List_fromArray(
									[
										$author$project$Main$inputElement(model),
										$author$project$Main$outputDisplay(model)
									]))
							])),
						A2(
						$mdgriffith$elm_ui$Element$row,
						_List_fromArray(
							[
								$mdgriffith$elm_ui$Element$Font$size(14),
								$mdgriffith$elm_ui$Element$Font$color($author$project$Main$whiteColor)
							]),
						_List_Nil)
					]))
			]));
};
var $author$project$Main$noFocus = {gw: $elm$core$Maybe$Nothing, gC: $elm$core$Maybe$Nothing, h2: $elm$core$Maybe$Nothing};
var $author$project$Main$view = function (model) {
	return A3(
		$mdgriffith$elm_ui$Element$layoutWith,
		{
			hN: _List_fromArray(
				[
					$mdgriffith$elm_ui$Element$focusStyle($author$project$Main$noFocus)
				])
		},
		_List_fromArray(
			[
				$author$project$Main$bgGray(0.2),
				$mdgriffith$elm_ui$Element$clipX,
				$mdgriffith$elm_ui$Element$clipY
			]),
		$author$project$Main$mainColumn(model));
};
var $author$project$Main$main = $elm$browser$Browser$element(
	{hm: $author$project$Main$init, ie: $author$project$Main$subscriptions, iB: $author$project$Main$update, iC: $author$project$Main$view});
_Platform_export({'Main':{'init':$author$project$Main$main(
	A2(
		$elm$json$Json$Decode$andThen,
		function (width) {
			return A2(
				$elm$json$Json$Decode$andThen,
				function (height) {
					return $elm$json$Json$Decode$succeed(
						{es: height, gc: width});
				},
				A2($elm$json$Json$Decode$field, 'height', $elm$json$Json$Decode$int));
		},
		A2($elm$json$Json$Decode$field, 'width', $elm$json$Json$Decode$int)))(0)}});}(this));
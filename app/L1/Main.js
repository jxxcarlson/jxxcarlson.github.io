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
	if (region.eK.ay === region.dG.ay)
	{
		return 'on line ' + region.eK.ay;
	}
	return 'on lines ' + region.eK.ay + ' through ' + region.dG.ay;
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
		impl.dZ,
		impl.e8,
		impl.eP,
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
		aT: func(record.aT),
		bO: record.bO,
		bH: record.bH
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
		var message = !tag ? value : tag < 3 ? value.a : value.aT;
		var stopPropagation = tag == 1 ? value.b : tag == 3 && value.bO;
		var currentEventNode = (
			stopPropagation && event.stopPropagation(),
			(tag == 2 ? value.b : tag == 3 && value.bH) && event.preventDefault(),
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
		impl.dZ,
		impl.e8,
		impl.eP,
		function(sendToApp, initialModel) {
			var view = impl.fa;
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
		impl.dZ,
		impl.e8,
		impl.eP,
		function(sendToApp, initialModel) {
			var divertHrefToApp = impl.bN && impl.bN(sendToApp)
			var view = impl.fa;
			var title = _VirtualDom_doc.title;
			var bodyNode = _VirtualDom_doc.body;
			var currNode = _VirtualDom_virtualize(bodyNode);
			return _Browser_makeAnimator(initialModel, function(model)
			{
				_VirtualDom_divertHrefToApp = divertHrefToApp;
				var doc = view(model);
				var nextNode = _VirtualDom_node('body')(_List_Nil)(doc.bc);
				var patches = _VirtualDom_diff(currNode, nextNode);
				bodyNode = _VirtualDom_applyPatches(bodyNode, currNode, patches, sendToApp);
				currNode = nextNode;
				_VirtualDom_divertHrefToApp = 0;
				(title !== doc.bR) && (_VirtualDom_doc.title = title = doc.bR);
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
	var onUrlChange = impl.ek;
	var onUrlRequest = impl.el;
	var key = function() { key.a(onUrlChange(_Browser_getUrl())); };

	return _Browser_document({
		bN: function(sendToApp)
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
							&& curr.cG === next.cG
							&& curr.ck === next.ck
							&& curr.cE.a === next.cE.a
						)
							? $elm$browser$Browser$Internal(next)
							: $elm$browser$Browser$External(href)
					));
				}
			});
		},
		dZ: function(flags)
		{
			return A3(impl.dZ, flags, _Browser_getUrl(), key);
		},
		fa: impl.fa,
		e8: impl.e8,
		eP: impl.eP
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
		? { dT: 'hidden', du: 'visibilitychange' }
		:
	(typeof _VirtualDom_doc.mozHidden !== 'undefined')
		? { dT: 'mozHidden', du: 'mozvisibilitychange' }
		:
	(typeof _VirtualDom_doc.msHidden !== 'undefined')
		? { dT: 'msHidden', du: 'msvisibilitychange' }
		:
	(typeof _VirtualDom_doc.webkitHidden !== 'undefined')
		? { dT: 'webkitHidden', du: 'webkitvisibilitychange' }
		: { dT: 'hidden', du: 'visibilitychange' };
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
		ap: _Browser_getScene(),
		aq: {
			at: _Browser_window.pageXOffset,
			au: _Browser_window.pageYOffset,
			ar: _Browser_doc.documentElement.clientWidth,
			br: _Browser_doc.documentElement.clientHeight
		}
	};
}

function _Browser_getScene()
{
	var body = _Browser_doc.body;
	var elem = _Browser_doc.documentElement;
	return {
		ar: Math.max(body.scrollWidth, body.offsetWidth, elem.scrollWidth, elem.offsetWidth, elem.clientWidth),
		br: Math.max(body.scrollHeight, body.offsetHeight, elem.scrollHeight, elem.offsetHeight, elem.clientHeight)
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
			ap: {
				ar: node.scrollWidth,
				br: node.scrollHeight
			},
			aq: {
				at: node.scrollLeft,
				au: node.scrollTop,
				ar: node.clientWidth,
				br: node.clientHeight
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
			ap: _Browser_getScene(),
			aq: {
				at: x,
				au: y,
				ar: _Browser_doc.documentElement.clientWidth,
				br: _Browser_doc.documentElement.clientHeight
			},
			bj: {
				at: x + rect.left,
				au: y + rect.top,
				ar: rect.width,
				br: rect.height
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
		if (!builder.l) {
			return A4(
				$elm$core$Array$Array_elm_builtin,
				$elm$core$Elm$JsArray$length(builder.n),
				$elm$core$Array$shiftStep,
				$elm$core$Elm$JsArray$empty,
				builder.n);
		} else {
			var treeLen = builder.l * $elm$core$Array$branchFactor;
			var depth = $elm$core$Basics$floor(
				A2($elm$core$Basics$logBase, $elm$core$Array$branchFactor, treeLen - 1));
			var correctNodeList = reverseNodeList ? $elm$core$List$reverse(builder.q) : builder.q;
			var tree = A2($elm$core$Array$treeFromBuilder, correctNodeList, builder.l);
			return A4(
				$elm$core$Array$Array_elm_builtin,
				$elm$core$Elm$JsArray$length(builder.n) + treeLen,
				A2($elm$core$Basics$max, 5, depth * $elm$core$Array$shiftStep),
				tree,
				builder.n);
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
					{q: nodeList, l: (len / $elm$core$Array$branchFactor) | 0, n: tail});
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
		return {cc: fragment, ck: host, cD: path, cE: port_, cG: protocol, cH: query};
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
var $author$project$Data$Example$text = '\n\n\n\n\n\n\n\n# The L1 Markup Language\n\n[b L1] is a markup language witha syntax somewhat like Lisp, but with square brackets instead of parentheses.  To make bold text, we say this: `[b bold text]`, and for italic, we say `[i italic text]`.  These can be nested as in\n`[i italic text is very [b bold]]`.There are other constructs as well.  Titles and section headings, for example, are done as in Markdown:\n\n` # The L1 Markup Language`\n\nBelow are more examples.  We begin with images.  The best way to see how [b L1] works is to compare the source text with the rendered text.\n\n\n\n## Images\n\n[image width:80 placement:left https://ichef.bbci.co.uk/news/976/cpsprodpb/4FB7/production/_116970402_a20-20sahas20barve20-20parrotbill_chavan.jpg]\n\n\n[image width:200 placement:left https://ichef.bbci.co.uk/news/976/cpsprodpb/4FB7/production/_116970402_a20-20sahas20barve20-20parrotbill_chavan.jpg]\n\n[image https://ichef.bbci.co.uk/news/976/cpsprodpb/4FB7/production/_116970402_a20-20sahas20barve20-20parrotbill_chavan.jpg]\n\n\n\n## Errors\n\nLook at the example below, where the source text is labeled (1) and the rendered version is labeled (2).  There should be a right bracket after [i real]. The error is flagged in rendered text, but the subsequent italicized text is unaffected.  This error-tolerance is a feature which [b L1] derives from Camperdown (see the [i Article] tab).\n\n(1) `This [i is] a [b real test! [i Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque in augue eget felis rhoncus ullamcorper sed pulvinar sapien.]`\n\n\n(2) This [i is] a [b real test! [i Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque in augue eget felis rhoncus ullamcorper sed pulvinar sapien.]\n\n## Lisp-like functions\n\nThe text `[fontRGB 255 0 255 foo]` renders as\n[fontRGB 255 0 255 foo].  Think of `fontRGB` and a function whose arguments here are the elements of the list `[255 0 255 foo]`.  Functions, or more properly, functional expressions, can be nested, as in  `[fontRGB 255 0 255 foo [b bar]]` which renders as [fontRGB 255 0 255 foo [b bar]].\n\n##  Markdown-type stuff\n\nBelow are some Markdown-like examples.   Compare the source and rendered text to see what is going on.\n\n### Links\n\n[item [link NYT https://nytimes.com]]\n\n### Code\n\n[item code: `a[i] = b[i] + 1`.]\n\n[item This is [red red meat].  [gray (We shouldn\'t eat so much of it.)]]\n\n\n\n### Math\n\n[item Pythagoras said that $a^2 + b^2 = c^2$. Wow! What a dude!!]\n\n[item In class, we learned that]\n\n[mathblock \\int_0^1 x^n dx = \\frac{1}{n+1}]\n\n\n\n\n\n\n\n\n';
var $author$project$Main$initialText = $author$project$Data$Example$text;
var $elm$core$Platform$Cmd$batch = _Platform_batch;
var $elm$core$Platform$Cmd$none = $elm$core$Platform$Cmd$batch(_List_Nil);
var $elm$core$Basics$negate = function (n) {
	return -n;
};
var $author$project$Parser$Loc$dummy = {dG: -1, eK: -1};
var $author$project$Parser$AST$position = function (element) {
	switch (element.$) {
		case 0:
			var meta = element.b;
			return meta.bG;
		case 1:
			var meta = element.c;
			return meta.bG;
		case 2:
			var meta = element.b;
			return meta.bG;
		case 3:
			return $author$project$Parser$Loc$dummy;
		case 4:
			return $author$project$Parser$Loc$dummy;
		default:
			return $author$project$Parser$Loc$dummy;
	}
};
var $author$project$Parser$AST$length = function (element) {
	var pos = $author$project$Parser$AST$position(element);
	return pos.dG - pos.eK;
};
var $author$project$Parser$AST$Problem = F2(
	function (a, b) {
		return {$: 3, a: a, b: b};
	});
var $author$project$Parser$Error$CArgsAndBody = 3;
var $author$project$Parser$Error$CBody = 2;
var $author$project$Parser$Error$CElement = 0;
var $author$project$Parser$AST$EList = F2(
	function (a, b) {
		return {$: 2, a: a, b: b};
	});
var $author$project$Parser$AST$Element = F3(
	function (a, b, c) {
		return {$: 1, a: a, b: b, c: c};
	});
var $author$project$Parser$AST$Name = function (a) {
	return {$: 0, a: a};
};
var $author$project$Parser$AST$Undefined = {$: 1};
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
var $author$project$Utility$ParserTools$first = F2(
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
			var newOffset = A3($elm$parser$Parser$Advanced$isSubChar, isGood, offset, s0.eJ);
			if (_Utils_eq(newOffset, -1)) {
				return A3(
					$elm$parser$Parser$Advanced$Good,
					_Utils_cmp(s0.a, offset) < 0,
					0,
					{b5: col, c: s0.c, f: s0.f, a: offset, cM: row, eJ: s0.eJ});
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
		return A5($elm$parser$Parser$Advanced$chompWhileHelp, isGood, s.a, s.cM, s.b5, s);
	};
};
var $elm$parser$Parser$Advanced$spaces = $elm$parser$Parser$Advanced$chompWhile(
	function (c) {
		return (c === ' ') || ((c === '\n') || (c === '\r'));
	});
var $elm$parser$Parser$Advanced$getOffset = function (s) {
	return A3($elm$parser$Parser$Advanced$Good, false, s.a, s);
};
var $elm$parser$Parser$Advanced$getSource = function (s) {
	return A3($elm$parser$Parser$Advanced$Good, false, s.eJ, s);
};
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
var $elm$parser$Parser$Advanced$keeper = F2(
	function (parseFunc, parseArg) {
		return A3($elm$parser$Parser$Advanced$map2, $elm$core$Basics$apL, parseFunc, parseArg);
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
var $elm$core$Basics$not = _Basics_not;
var $elm$parser$Parser$Advanced$succeed = function (a) {
	return function (s) {
		return A3($elm$parser$Parser$Advanced$Good, false, a, s);
	};
};
var $author$project$Parser$Parser$rawText_ = function (stopChars) {
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
								aK: A3($elm$core$String$slice, begin, end, content),
								d5: end - begin,
								eK: begin
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
var $author$project$Parser$Parser$string_ = function (stopChars) {
	return A2(
		$elm$parser$Parser$Advanced$map,
		function ($) {
			return $.aK;
		},
		$author$project$Parser$Parser$rawText_(stopChars));
};
var $author$project$Parser$Parser$elementName = A2(
	$author$project$Utility$ParserTools$first,
	$author$project$Parser$Parser$string_(
		_List_fromArray(
			['[', ']', ' ', '\n'])),
	$elm$parser$Parser$Advanced$spaces);
var $elm$parser$Parser$Advanced$Located = F3(
	function (row, col, context) {
		return {b5: col, c: context, cM: row};
	});
var $elm$parser$Parser$Advanced$changeContext = F2(
	function (newContext, s) {
		return {b5: s.b5, c: newContext, f: s.f, a: s.a, cM: s.cM, eJ: s.eJ};
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
						A3($elm$parser$Parser$Advanced$Located, s0.cM, s0.b5, context),
						s0.c),
					s0));
			if (!_v1.$) {
				var p = _v1.a;
				var a = _v1.b;
				var s1 = _v1.c;
				return A3(
					$elm$parser$Parser$Advanced$Good,
					p,
					a,
					A2($elm$parser$Parser$Advanced$changeContext, s0.c, s1));
			} else {
				var step = _v1;
				return step;
			}
		};
	});
var $elm$parser$Parser$Advanced$lazy = function (thunk) {
	return function (s) {
		var _v0 = thunk(0);
		var parse = _v0;
		return parse(s);
	};
};
var $author$project$Parser$Error$ExpectingLeftBracket = {$: 0};
var $elm$parser$Parser$Advanced$Token = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $elm$parser$Parser$Advanced$AddRight = F2(
	function (a, b) {
		return {$: 1, a: a, b: b};
	});
var $elm$parser$Parser$Advanced$DeadEnd = F4(
	function (row, col, problem, contextStack) {
		return {b5: col, dA: contextStack, et: problem, cM: row};
	});
var $elm$parser$Parser$Advanced$Empty = {$: 0};
var $elm$parser$Parser$Advanced$fromState = F2(
	function (s, x) {
		return A2(
			$elm$parser$Parser$Advanced$AddRight,
			$elm$parser$Parser$Advanced$Empty,
			A4($elm$parser$Parser$Advanced$DeadEnd, s.cM, s.b5, x, s.c));
	});
var $elm$parser$Parser$Advanced$isSubString = _Parser_isSubString;
var $elm$parser$Parser$Advanced$token = function (_v0) {
	var str = _v0.a;
	var expecting = _v0.b;
	var progress = !$elm$core$String$isEmpty(str);
	return function (s) {
		var _v1 = A5($elm$parser$Parser$Advanced$isSubString, str, s.a, s.cM, s.b5, s.eJ);
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
			{b5: newCol, c: s.c, f: s.f, a: newOffset, cM: newRow, eJ: s.eJ});
	};
};
var $elm$parser$Parser$Advanced$symbol = $elm$parser$Parser$Advanced$token;
var $author$project$Parser$Parser$leftBracket = $elm$parser$Parser$Advanced$symbol(
	A2($elm$parser$Parser$Advanced$Token, '[', $author$project$Parser$Error$ExpectingLeftBracket));
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
var $author$project$Parser$Error$EndOfInput = {$: 3};
var $elm$parser$Parser$Advanced$Loop = function (a) {
	return {$: 0, a: a};
};
var $elm$parser$Parser$Advanced$end = function (x) {
	return function (s) {
		return _Utils_eq(
			$elm$core$String$length(s.eJ),
			s.a) ? A3($elm$parser$Parser$Advanced$Good, false, 0, s) : A2(
			$elm$parser$Parser$Advanced$Bad,
			false,
			A2($elm$parser$Parser$Advanced$fromState, s, x));
	};
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
var $author$project$Utility$ParserTools$manyHelp = F2(
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
var $author$project$Utility$ParserTools$many = function (p) {
	return A2(
		$elm$parser$Parser$Advanced$loop,
		_List_Nil,
		$author$project$Utility$ParserTools$manyHelp(p));
};
var $author$project$Parser$Parser$meta = F3(
	function (generation, start, finish) {
		return {
			aO: generation,
			bG: {dG: finish, eK: start}
		};
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
var $elm$core$List$sortBy = _List_sortBy;
var $elm$core$Maybe$withDefault = F2(
	function (_default, maybe) {
		if (!maybe.$) {
			var value = maybe.a;
			return value;
		} else {
			return _default;
		}
	});
var $author$project$Parser$Loc$positionOfList = function (positions) {
	var sorted = A2(
		$elm$core$List$sortBy,
		function (pos) {
			return pos.eK;
		},
		positions);
	var last = A2(
		$elm$core$Maybe$withDefault,
		0,
		A2(
			$elm$core$Maybe$map,
			function ($) {
				return $.dG;
			},
			$elm$core$List$head(
				$elm$core$List$reverse(sorted))));
	var first = A2(
		$elm$core$Maybe$withDefault,
		0,
		A2(
			$elm$core$Maybe$map,
			function ($) {
				return $.eK;
			},
			$elm$core$List$head(sorted)));
	return {dG: last, eK: first};
};
var $author$project$Parser$Parser$metaOfList = F2(
	function (generation, list) {
		return {
			aO: generation,
			bG: $author$project$Parser$Loc$positionOfList(
				A2(
					$elm$core$List$map,
					function (el) {
						return $author$project$Parser$AST$position(el);
					},
					list))
		};
	});
var $author$project$Parser$AST$Text = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $author$project$Parser$Error$TextExpression = 4;
var $author$project$Utility$StringParser$isLanguageChar = function (c) {
	return (c === '|') || ((c === '[') || ((c === ']') || (c === '\\')));
};
var $author$project$Utility$StringParser$isNonLanguageChar = function (c) {
	return !$author$project$Utility$StringParser$isLanguageChar(c);
};
var $author$project$Utility$StringParser$reduce = function (list) {
	var start = A2(
		$elm$core$Maybe$withDefault,
		0,
		A2(
			$elm$core$Maybe$map,
			function ($) {
				return $.eK;
			},
			$elm$core$List$head(list)));
	var reversedList = $elm$core$List$reverse(list);
	var finish = A2(
		$elm$core$Maybe$withDefault,
		0,
		A2(
			$elm$core$Maybe$map,
			function ($) {
				return $.bo;
			},
			$elm$core$List$head(reversedList)));
	return {
		aK: A3(
			$elm$core$List$foldl,
			$elm$core$Basics$append,
			'',
			A2(
				$elm$core$List$map,
				function ($) {
					return $.aK;
				},
				reversedList)),
		bo: finish,
		eK: start
	};
};
var $author$project$Parser$Error$ExpectingEscape = {$: 4};
var $author$project$Parser$Error$UnHandledError = function (a) {
	return {$: 9, a: a};
};
var $elm$parser$Parser$Advanced$chompIf = F2(
	function (isGood, expecting) {
		return function (s) {
			var newOffset = A3($elm$parser$Parser$Advanced$isSubChar, isGood, s.a, s.eJ);
			return _Utils_eq(newOffset, -1) ? A2(
				$elm$parser$Parser$Advanced$Bad,
				false,
				A2($elm$parser$Parser$Advanced$fromState, s, expecting)) : (_Utils_eq(newOffset, -2) ? A3(
				$elm$parser$Parser$Advanced$Good,
				true,
				0,
				{b5: 1, c: s.c, f: s.f, a: s.a + 1, cM: s.cM + 1, eJ: s.eJ}) : A3(
				$elm$parser$Parser$Advanced$Good,
				true,
				0,
				{b5: s.b5 + 1, c: s.c, f: s.f, a: newOffset, cM: s.cM, eJ: s.eJ}));
		};
	});
var $author$project$Utility$ParserTools$char = function (prefixTest) {
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
								aK: A3($elm$core$String$slice, start, finish, content),
								bo: finish,
								eK: start
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
var $author$project$Utility$ParserTools$second = F2(
	function (p, q) {
		return A2(
			$elm$parser$Parser$Advanced$andThen,
			function (_v0) {
				return q;
			},
			p);
	});
var $author$project$Utility$StringParser$escapedChar = A2(
	$elm$parser$Parser$Advanced$map,
	function (result) {
		return {aK: '\\' + result.aK, bo: result.bo, eK: result.eK - 1};
	},
	A2(
		$author$project$Utility$ParserTools$second,
		$elm$parser$Parser$Advanced$symbol(
			A2($elm$parser$Parser$Advanced$Token, '\\', $author$project$Parser$Error$ExpectingEscape)),
		$author$project$Utility$ParserTools$char(
			function (c) {
				return true;
			})));
var $author$project$Utility$ParserTools$manyWithInitialList = F2(
	function (initialList, p) {
		return A2(
			$elm$parser$Parser$Advanced$loop,
			initialList,
			$author$project$Utility$ParserTools$manyHelp(p));
	});
var $author$project$Utility$ParserTools$manyNonEmpty = function (p) {
	return A2(
		$elm$parser$Parser$Advanced$andThen,
		function (x) {
			return A2(
				$author$project$Utility$ParserTools$manyWithInitialList,
				_List_fromArray(
					[x]),
				p);
		},
		p);
};
var $elm$core$Basics$neq = _Utils_notEqual;
var $author$project$Utility$ParserTools$text = F2(
	function (prefix, _continue) {
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
									aK: A3($elm$core$String$slice, start, finish, content),
									bo: finish,
									eK: start
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
									return prefix(c);
								},
								$author$project$Parser$Error$UnHandledError(2))),
						$elm$parser$Parser$Advanced$chompWhile(
							function (c) {
								return _continue(c);
							}))),
				$elm$parser$Parser$Advanced$getOffset),
			$elm$parser$Parser$Advanced$getSource);
	});
var $author$project$Utility$StringParser$textWithPredicate_ = function (predicate) {
	return A2(
		$author$project$Utility$ParserTools$text,
		predicate,
		function (c) {
			return (c !== '\\') && predicate(c);
		});
};
var $author$project$Utility$StringParser$textListWithPredicate = function (predicate) {
	return $author$project$Utility$ParserTools$manyNonEmpty(
		$elm$parser$Parser$Advanced$oneOf(
			_List_fromArray(
				[
					$author$project$Utility$StringParser$textWithPredicate_(predicate),
					$author$project$Utility$StringParser$escapedChar
				])));
};
var $author$project$Utility$StringParser$textWithPredicate = function (predicate) {
	return A2(
		$elm$parser$Parser$Advanced$map,
		$author$project$Utility$StringParser$reduce,
		$author$project$Utility$StringParser$textListWithPredicate(predicate));
};
var $author$project$Parser$Parser$plainText = function (generation) {
	return A2(
		$elm$parser$Parser$Advanced$inContext,
		4,
		A2(
			$elm$parser$Parser$Advanced$map,
			function (data) {
				return A2(
					$author$project$Parser$AST$Text,
					data.aK,
					A3($author$project$Parser$Parser$meta, generation, data.eK, data.bo));
			},
			$author$project$Utility$StringParser$textWithPredicate($author$project$Utility$StringParser$isNonLanguageChar)));
};
var $author$project$Parser$Error$ExpectingRightBracket = {$: 1};
var $author$project$Parser$Parser$rightBracket = $elm$parser$Parser$Advanced$symbol(
	A2($elm$parser$Parser$Advanced$Token, ']', $author$project$Parser$Error$ExpectingRightBracket));
var $author$project$Parser$Parser$argsAndBody = function (generation) {
	return A2(
		$elm$parser$Parser$Advanced$inContext,
		3,
		$author$project$Parser$Parser$elementBody(generation));
};
var $author$project$Parser$Parser$elementBody = function (generation) {
	return A2(
		$elm$parser$Parser$Advanced$inContext,
		2,
		$elm$parser$Parser$Advanced$lazy(
			function (_v0) {
				return A2(
					$elm$parser$Parser$Advanced$map,
					function (list) {
						return A2(
							$author$project$Parser$AST$EList,
							list,
							A2($author$project$Parser$Parser$metaOfList, generation, list));
					},
					$author$project$Utility$ParserTools$many(
						$author$project$Parser$Parser$parser(generation)));
			}));
};
var $author$project$Parser$Parser$parser = function (generation) {
	return $elm$parser$Parser$Advanced$oneOf(
		_List_fromArray(
			[
				$author$project$Parser$Parser$primitiveElement(generation),
				$author$project$Parser$Parser$plainText(generation)
			]));
};
var $author$project$Parser$Parser$primitiveElement = function (generation) {
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
									function (start, name, body_, end, source) {
										return A3(
											$author$project$Parser$AST$Element,
											name,
											body_,
											A3($author$project$Parser$Parser$meta, generation, start, end));
									})),
							A2($elm$parser$Parser$Advanced$ignorer, $elm$parser$Parser$Advanced$getOffset, $author$project$Parser$Parser$leftBracket)),
						$elm$parser$Parser$Advanced$oneOf(
							_List_fromArray(
								[
									A2($elm$parser$Parser$Advanced$map, $author$project$Parser$AST$Name, $author$project$Parser$Parser$elementName),
									$elm$parser$Parser$Advanced$succeed($author$project$Parser$AST$Undefined)
								]))),
					A2(
						$elm$parser$Parser$Advanced$ignorer,
						A2(
							$elm$parser$Parser$Advanced$ignorer,
							$author$project$Parser$Parser$argsAndBody(generation),
							$elm$parser$Parser$Advanced$spaces),
						$author$project$Parser$Parser$rightBracket)),
				$elm$parser$Parser$Advanced$getOffset),
			$elm$parser$Parser$Advanced$getSource));
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
			{b5: 1, c: _List_Nil, f: 1, a: 0, cM: 1, eJ: src});
		if (!_v1.$) {
			var value = _v1.b;
			return $elm$core$Result$Ok(value);
		} else {
			var bag = _v1.b;
			return $elm$core$Result$Err(
				A2($elm$parser$Parser$Advanced$bagToList, bag, _List_Nil));
		}
	});
var $author$project$Parser$Parser$parse = F2(
	function (generation, str) {
		var _v0 = A2(
			$elm$parser$Parser$Advanced$run,
			$author$project$Parser$Parser$parser(generation),
			str);
		if (!_v0.$) {
			var ast = _v0.a;
			return ast;
		} else {
			var errors = _v0.a;
			return A2($author$project$Parser$AST$Problem, errors, str);
		}
	});
var $author$project$Parser$Driver$packet = {
	dQ: $author$project$Parser$AST$length,
	dS: $elm$core$Maybe$Nothing,
	ep: function (str) {
		return A2($author$project$Parser$Parser$parse, 0, str);
	}
};
var $author$project$Parser$AST$StackError = F4(
	function (a, b, c, d) {
		return {$: 4, a: a, b: b, c: c, d: d};
	});
var $author$project$Parser$MetaData$dummy = {
	aO: 0,
	bG: {dG: 0, eK: 0}
};
var $author$project$Parser$TextCursor$handleError = F2(
	function (tc, top) {
		return _Utils_ap(
			$elm$core$List$reverse(tc.be),
			_Utils_ap(
				_List_fromArray(
					[
						A3(
						$author$project$Parser$AST$Element,
						$author$project$Parser$AST$Name('error'),
						A2($author$project$Parser$AST$Text, ' unmatched ' + (top.k.ac + ' '), $author$project$Parser$MetaData$dummy),
						$author$project$Parser$MetaData$dummy),
						A2($author$project$Parser$AST$Text, top.aK, $author$project$Parser$MetaData$dummy)
					]),
				_Utils_ap(
					tc.g,
					_List_fromArray(
						[
							A2($author$project$Parser$AST$Text, tc.eS, $author$project$Parser$MetaData$dummy)
						]))));
	});
var $author$project$Parser$TextCursor$handleHeadings = F3(
	function (tc, top, parsed_) {
		return (top.k.ac === '#') ? _Utils_ap(
			$elm$core$List$reverse(tc.be),
			_List_fromArray(
				[
					A3(
					$author$project$Parser$AST$Element,
					$author$project$Parser$AST$Name('heading'),
					A2(
						$author$project$Parser$AST$EList,
						$elm$core$List$reverse(parsed_),
						$author$project$Parser$MetaData$dummy),
					$author$project$Parser$MetaData$dummy)
				])) : ((top.k.ac === '##') ? _Utils_ap(
			$elm$core$List$reverse(tc.be),
			_List_fromArray(
				[
					A3(
					$author$project$Parser$AST$Element,
					$author$project$Parser$AST$Name('heading'),
					A2(
						$author$project$Parser$AST$EList,
						$elm$core$List$reverse(parsed_),
						$author$project$Parser$MetaData$dummy),
					$author$project$Parser$MetaData$dummy)
				])) : ((top.k.ac === '###') ? _Utils_ap(
			$elm$core$List$reverse(tc.be),
			_List_fromArray(
				[
					A3(
					$author$project$Parser$AST$Element,
					$author$project$Parser$AST$Name('heading'),
					A2(
						$author$project$Parser$AST$EList,
						$elm$core$List$reverse(parsed_),
						$author$project$Parser$MetaData$dummy),
					$author$project$Parser$MetaData$dummy)
				])) : _Utils_ap(
			$elm$core$List$reverse(tc.be),
			_List_fromArray(
				[
					A3(
					$author$project$Parser$AST$Element,
					$author$project$Parser$AST$Name('heading'),
					A2(
						$author$project$Parser$AST$EList,
						$elm$core$List$reverse(parsed_),
						$author$project$Parser$MetaData$dummy),
					$author$project$Parser$MetaData$dummy)
				]))));
	});
var $author$project$Parser$AST$getText = function (element) {
	getText:
	while (true) {
		switch (element.$) {
			case 0:
				var s = element.a;
				return s;
			case 1:
				var list = element.b;
				var $temp$element = list;
				element = $temp$element;
				continue getText;
			case 2:
				var list = element.a;
				return A2(
					$elm$core$String$join,
					' ',
					A2($elm$core$List$map, $author$project$Parser$AST$getText, list));
			default:
				return '';
		}
	}
};
var $elm$core$String$trim = _String_trim;
var $elm_community$list_extra$List$Extra$uncons = function (list) {
	if (!list.b) {
		return $elm$core$Maybe$Nothing;
	} else {
		var first = list.a;
		var rest = list.b;
		return $elm$core$Maybe$Just(
			_Utils_Tuple2(first, rest));
	}
};
var $elm$core$String$words = _String_words;
var $author$project$Parser$TextCursor$handleLineCommand = F2(
	function (tc, parsed_) {
		var _v0 = $elm_community$list_extra$List$Extra$uncons(
			$elm$core$List$reverse(parsed_));
		if (_v0.$ === 1) {
			return _Utils_ap(
				$elm$core$List$reverse(tc.be),
				_List_fromArray(
					[
						A2($author$project$Parser$AST$Text, 'empty', $author$project$Parser$MetaData$dummy)
					]));
		} else {
			if (!_v0.a.b.b) {
				var _v1 = _v0.a;
				var first = _v1.a;
				var _v2 = $elm$core$String$words(
					$author$project$Parser$AST$getText(first));
				if (!_v2.b) {
					return _Utils_ap(
						$elm$core$List$reverse(tc.be),
						_List_fromArray(
							[
								A3(
								$author$project$Parser$AST$Element,
								$author$project$Parser$AST$Name('empty'),
								A2($author$project$Parser$AST$EList, _List_Nil, $author$project$Parser$MetaData$dummy),
								$author$project$Parser$MetaData$dummy)
							]));
				} else {
					if (!_v2.b.b) {
						var name = _v2.a;
						return _Utils_ap(
							$elm$core$List$reverse(tc.be),
							_List_fromArray(
								[
									A3(
									$author$project$Parser$AST$Element,
									$author$project$Parser$AST$Name(
										$elm$core$String$trim(name)),
									A2($author$project$Parser$AST$EList, _List_Nil, $author$project$Parser$MetaData$dummy),
									$author$project$Parser$MetaData$dummy)
								]));
					} else {
						var name = _v2.a;
						var rest = _v2.b;
						return _Utils_ap(
							$elm$core$List$reverse(tc.be),
							_List_fromArray(
								[
									A3(
									$author$project$Parser$AST$Element,
									$author$project$Parser$AST$Name(
										$elm$core$String$trim(name)),
									A2(
										$author$project$Parser$AST$Text,
										A2($elm$core$String$join, ' ', rest),
										$author$project$Parser$MetaData$dummy),
									$author$project$Parser$MetaData$dummy)
								]));
					}
				}
			} else {
				var _v3 = _v0.a;
				var first = _v3.a;
				var rest = _v3.b;
				return _Utils_ap(
					$elm$core$List$reverse(tc.be),
					_List_fromArray(
						[
							A3(
							$author$project$Parser$AST$Element,
							$author$project$Parser$AST$Name(
								$elm$core$String$trim(
									$author$project$Parser$AST$getText(first))),
							A2($author$project$Parser$AST$EList, rest, $author$project$Parser$MetaData$dummy),
							$author$project$Parser$MetaData$dummy)
						]));
			}
		}
	});
var $author$project$Parser$TextCursor$commit = function (tc) {
	return function (tc2) {
		return _Utils_update(
			tc2,
			{
				be: $elm$core$List$reverse(tc2.be)
			});
	}(
		$author$project$Parser$TextCursor$commit_(tc));
};
var $author$project$Parser$TextCursor$commit_ = function (tc) {
	var parsed = (tc.eS === '') ? tc.g : A2(
		$elm$core$List$cons,
		A2($author$project$Parser$AST$Text, tc.eS, $author$project$Parser$MetaData$dummy),
		tc.g);
	var complete = _Utils_ap(parsed, tc.be);
	var _v0 = tc.e;
	if (!_v0.b) {
		return _Utils_update(
			tc,
			{be: complete, g: _List_Nil});
	} else {
		var top = _v0.a;
		var restOfStack = _v0.b;
		var complete_ = function () {
			var _v1 = top.k.aw;
			if (_v1.$ === 1) {
				var parsed_ = _Utils_ap(
					parsed,
					_List_fromArray(
						[
							A2($author$project$Parser$AST$Text, top.aK, $author$project$Parser$MetaData$dummy)
						]));
				if (A2($elm$core$String$left, 1, top.k.ac) === '#') {
					return A3($author$project$Parser$TextCursor$handleHeadings, tc, top, parsed_);
				} else {
					if (top.k.ac === ':') {
						return A2($author$project$Parser$TextCursor$handleLineCommand, tc, parsed_);
					} else {
						var errorMessage = A4(
							$author$project$Parser$AST$StackError,
							top.bJ,
							tc.bJ,
							'((unknown delimiter ' + (top.k.ac + (' at position ' + ($elm$core$String$fromInt(top.bJ) + '))'))),
							A3($elm$core$String$slice, top.bJ, tc.bJ, tc.eF));
						return _Utils_ap(
							$elm$core$List$reverse(tc.be),
							_List_fromArray(
								[errorMessage]));
					}
				}
			} else {
				return A2($author$project$Parser$TextCursor$handleError, tc, top);
			}
		}();
		return $author$project$Parser$TextCursor$commit(
			_Utils_update(
				tc,
				{be: complete_, K: 1 + tc.K, g: _List_Nil, e: restOfStack, eS: ''}));
	}
};
var $author$project$Parser$TextCursor$NormalScan = {$: 0};
var $author$project$Parser$TextCursor$init = F2(
	function (generation, source) {
		return {
			be: _List_Nil,
			K: 0,
			aO: generation,
			d5: $elm$core$String$length(source),
			aT: 'STAR',
			g: _List_Nil,
			bJ: 0,
			bK: $author$project$Parser$TextCursor$NormalScan,
			eF: source,
			e: _List_Nil,
			eS: ''
		};
	});
var $author$project$Utility$ParserTools$loop = F2(
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
var $author$project$Utility$ParserTools$Done = function (a) {
	return {$: 1, a: a};
};
var $author$project$Utility$ParserTools$Loop = function (a) {
	return {$: 0, a: a};
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
var $author$project$Parser$TextCursor$addContentToStack = F2(
	function (str, stack) {
		var _v0 = $elm$core$List$head(stack);
		if (_v0.$ === 1) {
			return _Utils_Tuple2(str, stack);
		} else {
			var top = _v0.a;
			return (top.aK === '') ? _Utils_Tuple2(
				'',
				A2(
					$elm$core$List$cons,
					_Utils_update(
						top,
						{aK: str}),
					A2($elm$core$List$drop, 1, stack))) : _Utils_Tuple2(str, stack);
		}
	});
var $author$project$Parser$TextCursor$add = F2(
	function (str, tc) {
		var _v0 = A2($author$project$Parser$TextCursor$addContentToStack, str, tc.e);
		var stringToAdd = _v0.a;
		var newStack = _v0.b;
		return _Utils_update(
			tc,
			{
				K: tc.K + 1,
				bJ: tc.bJ + $elm$core$String$length(str),
				e: newStack,
				eS: _Utils_ap(stringToAdd, tc.eS)
			});
	});
var $author$project$Parser$Config$Anywhere = 1;
var $elm$core$Basics$composeR = F3(
	function (f, g, x) {
		return g(
			f(x));
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
var $author$project$Parser$Config$firstChar = function (str) {
	var _v0 = $elm$core$String$uncons(str);
	if (_v0.$ === 1) {
		return $elm$core$Maybe$Nothing;
	} else {
		var _v1 = _v0.a;
		var c = _v1.a;
		return $elm$core$Maybe$Just(c);
	}
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
var $elm$core$Set$Set_elm_builtin = $elm$core$Basics$identity;
var $elm$core$Set$empty = $elm$core$Dict$empty;
var $elm$core$Set$insert = F2(
	function (key, _v0) {
		var dict = _v0;
		return A3($elm$core$Dict$insert, key, 0, dict);
	});
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
var $elm_community$list_extra$List$Extra$uniqueHelp = F4(
	function (f, existing, remaining, accumulator) {
		uniqueHelp:
		while (true) {
			if (!remaining.b) {
				return $elm$core$List$reverse(accumulator);
			} else {
				var first = remaining.a;
				var rest = remaining.b;
				var computedFirst = f(first);
				if (A2($elm$core$Set$member, computedFirst, existing)) {
					var $temp$f = f,
						$temp$existing = existing,
						$temp$remaining = rest,
						$temp$accumulator = accumulator;
					f = $temp$f;
					existing = $temp$existing;
					remaining = $temp$remaining;
					accumulator = $temp$accumulator;
					continue uniqueHelp;
				} else {
					var $temp$f = f,
						$temp$existing = A2($elm$core$Set$insert, computedFirst, existing),
						$temp$remaining = rest,
						$temp$accumulator = A2($elm$core$List$cons, first, accumulator);
					f = $temp$f;
					existing = $temp$existing;
					remaining = $temp$remaining;
					accumulator = $temp$accumulator;
					continue uniqueHelp;
				}
			}
		}
	});
var $elm_community$list_extra$List$Extra$unique = function (list) {
	return A4($elm_community$list_extra$List$Extra$uniqueHelp, $elm$core$Basics$identity, $elm$core$Set$empty, list, _List_Nil);
};
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
var $author$project$Parser$Config$configure = function (configDef) {
	var verbatimChars = $elm_community$maybe_extra$Maybe$Extra$values(
		A2(
			$elm$core$List$map,
			A2(
				$elm$core$Basics$composeR,
				function ($) {
					return $.ac;
				},
				$author$project$Parser$Config$firstChar),
			A2(
				$elm$core$List$filter,
				function (d) {
					return d.co;
				},
				configDef)));
	var interiorEndSymbols = $elm_community$maybe_extra$Maybe$Extra$values(
		A2(
			$elm$core$List$map,
			function ($) {
				return $.aw;
			},
			A2(
				$elm$core$List$filter,
				function (e) {
					return e.az === 1;
				},
				configDef)));
	var interiorEndChars = $elm_community$maybe_extra$Maybe$Extra$values(
		A2(
			$elm$core$List$map,
			A2(
				$elm$core$Basics$composeR,
				function ($) {
					return $.aw;
				},
				$elm$core$Maybe$map($author$project$Parser$Config$firstChar)),
			A2(
				$elm$core$List$filter,
				function (e) {
					return e.az === 1;
				},
				configDef)));
	var interiorBeginSymbols = A2(
		$elm$core$List$map,
		function ($) {
			return $.ac;
		},
		A2(
			$elm$core$List$filter,
			function (e) {
				return e.az === 1;
			},
			configDef));
	var interiorBeginChars = $elm_community$maybe_extra$Maybe$Extra$values(
		A2(
			$elm$core$List$map,
			A2(
				$elm$core$Basics$composeR,
				function ($) {
					return $.ac;
				},
				$author$project$Parser$Config$firstChar),
			A2(
				$elm$core$List$filter,
				function (e) {
					return e.az === 1;
				},
				configDef)));
	var endChars = $elm_community$maybe_extra$Maybe$Extra$values(
		A2(
			$elm$core$List$map,
			A2(
				$elm$core$Basics$composeR,
				function ($) {
					return $.aw;
				},
				$elm$core$Maybe$map($author$project$Parser$Config$firstChar)),
			configDef));
	var beginChars = $elm_community$maybe_extra$Maybe$Extra$values(
		A2(
			$elm$core$List$map,
			A2(
				$elm$core$Basics$composeR,
				function ($) {
					return $.ac;
				},
				$author$project$Parser$Config$firstChar),
			configDef));
	return {
		a9: beginChars,
		ba: A2(
			$elm$core$List$map,
			function ($) {
				return $.ac;
			},
			configDef),
		bf: $elm_community$list_extra$List$Extra$unique(
			_Utils_ap(
				beginChars,
				$elm_community$maybe_extra$Maybe$Extra$values(endChars))),
		bk: $elm_community$maybe_extra$Maybe$Extra$values(endChars),
		bl: $elm_community$maybe_extra$Maybe$Extra$values(
			A2(
				$elm$core$List$map,
				function ($) {
					return $.aw;
				},
				configDef)),
		bn: $elm$core$Dict$fromList(
			A2(
				$elm$core$List$map,
				function (e) {
					return _Utils_Tuple2(e.ac, e);
				},
				configDef)),
		bv: interiorBeginChars,
		bw: interiorBeginSymbols,
		bx: $elm_community$list_extra$List$Extra$unique(
			_Utils_ap(
				interiorBeginChars,
				$elm_community$maybe_extra$Maybe$Extra$values(interiorEndChars))),
		by: $elm_community$maybe_extra$Maybe$Extra$values(interiorEndChars),
		bz: interiorEndSymbols,
		c$: verbatimChars
	};
};
var $author$project$Parser$Config$AtBeginning = 0;
var $author$project$Parser$Config$CodeType = 1;
var $author$project$Parser$Config$ElementType = 0;
var $author$project$Parser$Config$InlineMathType = 2;
var $author$project$Parser$Config$QuotedType = 3;
var $author$project$Parser$Configuration$expectations = _List_fromArray(
	[
		{
		ac: '[',
		aw: $elm$core$Maybe$Just(']'),
		dH: 0,
		co: false,
		az: 1
	},
		{
		ac: '`',
		aw: $elm$core$Maybe$Just('`'),
		dH: 1,
		co: true,
		az: 1
	},
		{
		ac: '$',
		aw: $elm$core$Maybe$Just('$'),
		dH: 2,
		co: true,
		az: 1
	},
		{ac: '#', aw: $elm$core$Maybe$Nothing, dH: 0, co: false, az: 0},
		{ac: '##', aw: $elm$core$Maybe$Nothing, dH: 0, co: false, az: 0},
		{ac: '###', aw: $elm$core$Maybe$Nothing, dH: 0, co: false, az: 0},
		{ac: '####', aw: $elm$core$Maybe$Nothing, dH: 0, co: false, az: 0},
		{ac: ':', aw: $elm$core$Maybe$Nothing, dH: 0, co: false, az: 0},
		{
		ac: '\"',
		aw: $elm$core$Maybe$Just('\"'),
		dH: 3,
		co: false,
		az: 1
	},
		{ac: '```', aw: $elm$core$Maybe$Nothing, dH: 1, co: true, az: 0}
	]);
var $author$project$Parser$Loop$configuration = $author$project$Parser$Config$configure($author$project$Parser$Configuration$expectations);
var $author$project$Parser$Config$notDelimiter = F3(
	function (config, position, c) {
		return (!position) ? (!A2($elm$core$List$member, c, config.bf)) : (!A2($elm$core$List$member, c, config.bx));
	});
var $author$project$Parser$Loop$advance = F3(
	function (config, position, str) {
		var _v0 = A2(
			$elm$parser$Parser$Advanced$run,
			A2(
				$author$project$Utility$ParserTools$text,
				A2($author$project$Parser$Config$notDelimiter, $author$project$Parser$Loop$configuration, position),
				A2($author$project$Parser$Config$notDelimiter, $author$project$Parser$Loop$configuration, position)),
			str);
		if (!_v0.$) {
			var stringData = _v0.a;
			return stringData;
		} else {
			return {aK: '', bo: 0, eK: 0};
		}
	});
var $author$project$Parser$Loop$advanceVerbatim = F2(
	function (verbatimChar, str) {
		var predicate = function (c) {
			return !_Utils_eq(c, verbatimChar);
		};
		var _v0 = A2(
			$elm$parser$Parser$Advanced$run,
			A2($author$project$Utility$ParserTools$text, predicate, predicate),
			str);
		if (!_v0.$) {
			var stringData = _v0.a;
			return stringData;
		} else {
			return {aK: '', bo: 0, eK: 0};
		}
	});
var $elm$core$Basics$ge = _Utils_ge;
var $author$project$Parser$TextCursor$VerbatimScan = function (a) {
	return {$: 1, a: a};
};
var $author$project$Parser$Config$isEndSymbol = F3(
	function (config, position, str) {
		return (!position) ? A2($elm$core$List$member, str, config.bl) : A2($elm$core$List$member, str, config.bz);
	});
var $author$project$Parser$TextCursor$canPopPrecondition = F3(
	function (configuration, tc, prefix) {
		canPopPrecondition:
		while (true) {
			var isEndSymbol = A3($author$project$Parser$Config$isEndSymbol, configuration, tc.bJ, prefix);
			if (isEndSymbol) {
				return true;
			} else {
				if ($elm$core$String$length(prefix) > 1) {
					var $temp$configuration = configuration,
						$temp$tc = tc,
						$temp$prefix = A2($elm$core$String$dropLeft, 1, prefix);
					configuration = $temp$configuration;
					tc = $temp$tc;
					prefix = $temp$prefix;
					continue canPopPrecondition;
				} else {
					return false;
				}
			}
		}
	});
var $elm$core$Maybe$map2 = F3(
	function (func, ma, mb) {
		if (ma.$ === 1) {
			return $elm$core$Maybe$Nothing;
		} else {
			var a = ma.a;
			if (mb.$ === 1) {
				return $elm$core$Maybe$Nothing;
			} else {
				var b = mb.a;
				return $elm$core$Maybe$Just(
					A2(func, a, b));
			}
		}
	});
var $author$project$Parser$TextCursor$canPop = F3(
	function (configuration, tc, prefix) {
		if (A3($author$project$Parser$TextCursor$canPopPrecondition, configuration, tc, prefix)) {
			var _v0 = $elm$core$List$head(tc.e);
			if (_v0.$ === 1) {
				return false;
			} else {
				var stackTop = _v0.a;
				return A2(
					$elm$core$Maybe$withDefault,
					false,
					A3(
						$elm$core$Maybe$map2,
						$elm$core$String$contains,
						stackTop.k.aw,
						$elm$core$Maybe$Just(prefix)));
			}
		} else {
			return false;
		}
	});
var $author$project$Parser$Config$isBeginSymbol = F3(
	function (config, position, str) {
		return (!position) ? A2($elm$core$List$member, str, config.ba) : A2($elm$core$List$member, str, config.bw);
	});
var $author$project$Parser$TextCursor$canPush = F3(
	function (configuration, tc, prefix) {
		return A3($author$project$Parser$Config$isBeginSymbol, configuration, tc.bJ, prefix);
	});
var $author$project$Parser$Config$lookup = F2(
	function (config, prefix) {
		return A2($elm$core$Dict$get, prefix, config.bn);
	});
var $author$project$Parser$AST$join = F2(
	function (el, list) {
		if ((el.$ === 1) && (el.b.$ === 2)) {
			var name = el.a;
			var _v1 = el.b;
			var list1 = _v1.a;
			var meta = el.c;
			return A3(
				$author$project$Parser$AST$Element,
				name,
				A2(
					$author$project$Parser$AST$EList,
					_Utils_ap(list1, list),
					$author$project$Parser$MetaData$dummy),
				meta);
		} else {
			return el;
		}
	});
var $author$project$Parser$TextCursor$handleFunction = F5(
	function (parse, tc, stackTop, fname, args) {
		if (fname === '') {
			var data = _Utils_ap(
				args,
				$elm$core$List$reverse(tc.g));
			return _Utils_eq(data, _List_Nil) ? _List_Nil : _List_fromArray(
				[
					A2(
					$author$project$Parser$AST$EList,
					_Utils_ap(
						args,
						$elm$core$List$reverse(tc.g)),
					$author$project$Parser$MetaData$dummy)
				]);
		} else {
			if (_Utils_eq(args, _List_Nil)) {
				return _List_fromArray(
					[
						A3(
						$author$project$Parser$AST$Element,
						$author$project$Parser$AST$Name(fname),
						A2(
							$author$project$Parser$AST$EList,
							$elm$core$List$reverse(tc.g),
							$author$project$Parser$MetaData$dummy),
						$author$project$Parser$MetaData$dummy)
					]);
			} else {
				if (!_Utils_eq(stackTop.Y, _List_Nil)) {
					return _Utils_ap(
						_List_fromArray(
							[
								A3(
								$author$project$Parser$AST$Element,
								$author$project$Parser$AST$Name(fname),
								A2($author$project$Parser$AST$EList, args, $author$project$Parser$MetaData$dummy),
								$author$project$Parser$MetaData$dummy)
							]),
						_Utils_ap(
							A2(
								$elm$core$List$map,
								parse,
								A2(
									$elm$core$List$filter,
									function (s) {
										return s !== '';
									},
									stackTop.Y)),
							tc.g));
				} else {
					return _List_fromArray(
						[
							A2(
							$author$project$Parser$AST$join,
							A3(
								$author$project$Parser$AST$Element,
								$author$project$Parser$AST$Name(fname),
								A2($author$project$Parser$AST$EList, args, $author$project$Parser$MetaData$dummy),
								$author$project$Parser$MetaData$dummy),
							tc.g)
						]);
				}
			}
		}
	});
var $author$project$Utility$Utility$unquoteLeft = function (str) {
	return (A2($elm$core$String$left, 1, str) === '\"') ? A2($elm$core$String$dropLeft, 1, str) : str;
};
var $elm$core$String$dropRight = F2(
	function (n, string) {
		return (n < 1) ? string : A3($elm$core$String$slice, 0, -n, string);
	});
var $elm$core$String$right = F2(
	function (n, string) {
		return (n < 1) ? '' : A3(
			$elm$core$String$slice,
			-n,
			$elm$core$String$length(string),
			string);
	});
var $author$project$Utility$Utility$unquoteRight = function (str) {
	return (A2($elm$core$String$right, 1, str) === '\"') ? A2($elm$core$String$dropRight, 1, str) : str;
};
var $author$project$Utility$Utility$unquote = function (str) {
	return $author$project$Utility$Utility$unquoteRight(
		$author$project$Utility$Utility$unquoteLeft(str));
};
var $author$project$Parser$TextCursor$handleText = F3(
	function (parse, stackTop, tc) {
		var _v0 = $elm$core$List$head(tc.e);
		if (_v0.$ === 1) {
			return _Utils_update(
				tc,
				{K: tc.K + 1, bJ: tc.bJ + 1});
		} else {
			var stackTop_ = _v0.a;
			var _v1 = A2(
				$elm$core$Maybe$withDefault,
				_Utils_Tuple2('fname', _List_Nil),
				$elm_community$list_extra$List$Extra$uncons(
					$elm$core$String$words(stackTop_.aK)));
			var fname = _v1.a;
			var args_ = _v1.b;
			var args = A2(
				$elm$core$List$map,
				function (a) {
					return A2($author$project$Parser$AST$Text, a, $author$project$Parser$MetaData$dummy);
				},
				args_);
			var parsed = function () {
				var _v2 = stackTop.k.dH;
				switch (_v2) {
					case 0:
						var _new = A5($author$project$Parser$TextCursor$handleFunction, parse, tc, stackTop_, fname, args);
						var _v3 = _Utils_Tuple2(
							$elm$core$List$head(_new),
							tc.eS);
						if (_v3.a.$ === 1) {
							var _v4 = _v3.a;
							return _new;
						} else {
							if (_v3.b === '') {
								return _new;
							} else {
								var first_ = _v3.a.a;
								var text = _v3.b;
								return _List_fromArray(
									[
										A2(
										$author$project$Parser$AST$join,
										first_,
										_Utils_ap(
											A2($elm$core$List$drop, 1, _new),
											_List_fromArray(
												[
													parse(text)
												])))
									]);
							}
						}
					case 1:
						return _Utils_ap(
							_List_fromArray(
								[
									A3(
									$author$project$Parser$AST$Element,
									$author$project$Parser$AST$Name('code'),
									A2($author$project$Parser$AST$Text, stackTop.aK, $author$project$Parser$MetaData$dummy),
									$author$project$Parser$MetaData$dummy)
								]),
							tc.g);
					case 2:
						return _Utils_ap(
							_List_fromArray(
								[
									A3(
									$author$project$Parser$AST$Element,
									$author$project$Parser$AST$Name('math2'),
									A2($author$project$Parser$AST$Text, stackTop.aK, $author$project$Parser$MetaData$dummy),
									$author$project$Parser$MetaData$dummy)
								]),
							tc.g);
					default:
						return _Utils_ap(
							_List_fromArray(
								[
									A2(
									$author$project$Parser$AST$Text,
									$author$project$Utility$Utility$unquote(stackTop.aK),
									$author$project$Parser$MetaData$dummy)
								]),
							tc.g);
				}
			}();
			return _Utils_update(
				tc,
				{
					K: tc.K + 1,
					g: parsed,
					bJ: tc.bJ + 1,
					bK: $author$project$Parser$TextCursor$NormalScan,
					e: A2($elm$core$List$drop, 1, tc.e),
					eS: ''
				});
		}
	});
var $author$project$Parser$TextCursor$pop = F2(
	function (parse, tc) {
		var _v0 = $elm$core$List$head(tc.e);
		if (_v0.$ === 1) {
			return _Utils_update(
				tc,
				{K: tc.K + 1, bJ: tc.bJ + 1, bK: $author$project$Parser$TextCursor$NormalScan});
		} else {
			var stackTop = _v0.a;
			return A3($author$project$Parser$TextCursor$handleText, parse, stackTop, tc);
		}
	});
var $author$project$Parser$TextCursor$push = F3(
	function (parse, expectation, tc) {
		return _Utils_update(
			tc,
			{
				be: _Utils_eq(tc.e, _List_Nil) ? ((tc.eS === '') ? _List_Nil : A2(
					$elm$core$List$cons,
					A2($author$project$Parser$AST$Text, tc.eS, $author$project$Parser$MetaData$dummy),
					_Utils_ap(tc.g, tc.be))) : tc.be,
				K: tc.K + 1,
				g: _Utils_eq(tc.e, _List_Nil) ? _List_Nil : tc.g,
				bJ: tc.bJ + 1,
				e: function () {
					var _v0 = $elm$core$List$head(tc.e);
					if (_v0.$ === 1) {
						return A2(
							$elm$core$List$cons,
							{aK: '', K: tc.K, k: expectation, Y: _List_Nil, bJ: tc.bJ},
							tc.e);
					} else {
						var stackTop = _v0.a;
						return A2(
							$elm$core$List$cons,
							{
								aK: '',
								K: tc.K,
								k: expectation,
								Y: _List_fromArray(
									[tc.eS]),
								bJ: tc.bJ
							},
							tc.e);
					}
				}(),
				eS: ''
			});
	});
var $author$project$Parser$Loop$handleCursorAtScanPoint = F3(
	function (packet, prefix, tc) {
		if (A3($author$project$Parser$TextCursor$canPop, $author$project$Parser$Loop$configuration, tc, prefix)) {
			return $author$project$Utility$ParserTools$Loop(
				A2(
					$author$project$Parser$TextCursor$pop,
					packet.ep,
					_Utils_update(
						tc,
						{aT: 'POP', bK: $author$project$Parser$TextCursor$NormalScan})));
		} else {
			if (A3($author$project$Parser$TextCursor$canPush, $author$project$Parser$Loop$configuration, tc, prefix)) {
				var _v0 = A2($author$project$Parser$Config$lookup, $author$project$Parser$Loop$configuration, prefix);
				if (_v0.$ === 1) {
					return $author$project$Utility$ParserTools$Done(tc);
				} else {
					var expectation = _v0.a;
					var scannerType = A2(
						$elm$core$List$member,
						expectation.dH,
						_List_fromArray(
							[1, 2, 3])) ? $author$project$Parser$TextCursor$VerbatimScan(
						A2(
							$elm$core$Maybe$withDefault,
							'0',
							$author$project$Parser$Config$firstChar(expectation.ac))) : $author$project$Parser$TextCursor$NormalScan;
					return $author$project$Utility$ParserTools$Loop(
						A3(
							$author$project$Parser$TextCursor$push,
							packet.ep,
							expectation,
							_Utils_update(
								tc,
								{aT: 'PUSH', bK: scannerType})));
				}
			} else {
				return $author$project$Utility$ParserTools$Done(tc);
			}
		}
	});
var $author$project$Utility$ParserTools$prefixWith = F2(
	function (c, str) {
		var _v0 = A2(
			$elm$parser$Parser$Advanced$run,
			A2(
				$author$project$Utility$ParserTools$text,
				function (c_) {
					return _Utils_eq(c_, c);
				},
				function (c_) {
					return _Utils_eq(c_, c);
				}),
			str);
		if (!_v0.$) {
			var stringData = _v0.a;
			return stringData;
		} else {
			return {aK: '', bo: 0, eK: 0};
		}
	});
var $author$project$Parser$Loop$nextCursor = F2(
	function (packet, cursor) {
		if (_Utils_cmp(cursor.bJ, cursor.d5) > -1) {
			return $author$project$Utility$ParserTools$Done(cursor);
		} else {
			var remaining = A2($elm$core$String$dropLeft, cursor.bJ, cursor.eF);
			var chompedText = function () {
				var _v1 = cursor.bK;
				if (!_v1.$) {
					return A3($author$project$Parser$Loop$advance, $author$project$Parser$Loop$configuration, cursor.bJ, remaining);
				} else {
					var c = _v1.a;
					return A2($author$project$Parser$Loop$advanceVerbatim, c, remaining);
				}
			}();
			if ((chompedText.bo - chompedText.eK) > 0) {
				return $author$project$Utility$ParserTools$Loop(
					A2(
						$author$project$Parser$TextCursor$add,
						chompedText.aK,
						_Utils_update(
							cursor,
							{aT: 'ADD'})));
			} else {
				var _v0 = A2(
					$elm$core$Maybe$map,
					$elm$core$Tuple$first,
					$elm$core$String$uncons(remaining));
				if (_v0.$ === 1) {
					return $author$project$Utility$ParserTools$Done(cursor);
				} else {
					var c = _v0.a;
					return A3(
						$author$project$Parser$Loop$handleCursorAtScanPoint,
						packet,
						A2($author$project$Utility$ParserTools$prefixWith, c, remaining).aK,
						cursor);
				}
			}
		}
	});
var $author$project$Parser$Loop$parseLoop = F3(
	function (packet, generation, str) {
		var result = function (tc_) {
			return _Utils_update(
				tc_,
				{aT: 'COMM'});
		}(
			$author$project$Parser$TextCursor$commit(
				A2(
					$author$project$Utility$ParserTools$loop,
					A2($author$project$Parser$TextCursor$init, generation, str),
					$author$project$Parser$Loop$nextCursor(packet))));
		return result;
	});
var $author$project$Parser$Driver$parseLoop = F2(
	function (generation, str) {
		return A3($author$project$Parser$Loop$parseLoop, $author$project$Parser$Driver$packet, generation, str);
	});
var $author$project$Parser$Driver$parse = F2(
	function (generation, str) {
		return A2($author$project$Parser$Driver$parseLoop, generation, str).be;
	});
var $author$project$Main$renderArgs = {aO: 0, bM: 'foobar', ar: 450};
var $mdgriffith$elm_ui$Internal$Model$Rgba = F4(
	function (a, b, c, d) {
		return {$: 0, a: a, b: b, c: c, d: d};
	});
var $mdgriffith$elm_ui$Element$rgb = F3(
	function (r, g, b) {
		return A4($mdgriffith$elm_ui$Internal$Model$Rgba, r, g, b, 1);
	});
var $author$project$Render$Elm$blueColor = A3($mdgriffith$elm_ui$Element$rgb, 0, 0, 0.8);
var $mdgriffith$elm_ui$Internal$Model$Class = F2(
	function (a, b) {
		return {$: 3, a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Style$classes = {c5: 'a', a3: 'atv', c7: 'ab', c8: 'cx', c9: 'cy', da: 'acb', db: 'accx', dc: 'accy', dd: 'acr', bX: 'al', bY: 'ar', de: 'at', a5: 'ah', a6: 'av', dg: 's', dj: 'bh', dk: 'b', dl: 'w7', dn: 'bd', $7: 'bdt', aF: 'bn', dp: 'bs', aG: 'cpe', dw: 'cp', dx: 'cpx', dy: 'cpy', T: 'c', aJ: 'ctr', aL: 'cb', aM: 'ccx', U: 'ccy', av: 'cl', aN: 'cr', dz: 'ct', dC: 'cptr', dD: 'ctxt', dO: 'fcs', cb: 'focus-within', dP: 'fs', dR: 'g', bq: 'hbh', bs: 'hc', ch: 'he', bt: 'hf', ci: 'hfp', dU: 'hv', dW: 'ic', dY: 'fr', aQ: 'lbl', d_: 'iml', d$: 'imlf', d0: 'imlp', d1: 'implw', d2: 'it', d4: 'i', ct: 'lnk', an: 'nb', cx: 'notxt', ei: 'ol', ej: 'or', ae: 'oq', eo: 'oh', cB: 'pg', cC: 'p', er: 'ppe', ew: 'ui', cM: 'r', ey: 'sb', ez: 'sbx', eA: 'sby', eB: 'sbt', eD: 'e', eE: 'cap', eG: 'sev', eO: 'sk', eS: 't', eT: 'tc', eU: 'w8', eV: 'w2', eW: 'w9', eX: 'tj', a1: 'tja', eY: 'tl', eZ: 'w3', e_: 'w5', e$: 'w4', e0: 'tr', e1: 'w6', e2: 'w1', e3: 'tun', c_: 'ts', ai: 'clr', e7: 'u', bS: 'wc', c1: 'we', bT: 'wf', c2: 'wfp', bV: 'wrp'};
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
var $mdgriffith$elm_ui$Internal$Flag$fontWeight = $mdgriffith$elm_ui$Internal$Flag$flag(13);
var $mdgriffith$elm_ui$Element$Font$bold = A2($mdgriffith$elm_ui$Internal$Model$Class, $mdgriffith$elm_ui$Internal$Flag$fontWeight, $mdgriffith$elm_ui$Internal$Style$classes.dl);
var $author$project$Render$Elm$codeColor = A3($mdgriffith$elm_ui$Element$rgb, 0.4, 0, 0.8);
var $mdgriffith$elm_ui$Internal$Model$Colored = F3(
	function (a, b, c) {
		return {$: 4, a: a, b: b, c: c};
	});
var $mdgriffith$elm_ui$Internal$Model$StyleClass = F2(
	function (a, b) {
		return {$: 4, a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Flag$fontColor = $mdgriffith$elm_ui$Internal$Flag$flag(14);
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
var $mdgriffith$elm_ui$Internal$Model$Unkeyed = function (a) {
	return {$: 0, a: a};
};
var $mdgriffith$elm_ui$Internal$Model$AsEl = 2;
var $mdgriffith$elm_ui$Internal$Model$asEl = 2;
var $mdgriffith$elm_ui$Internal$Model$Generic = {$: 0};
var $mdgriffith$elm_ui$Internal$Model$div = $mdgriffith$elm_ui$Internal$Model$Generic;
var $mdgriffith$elm_ui$Internal$Model$NoNearbyChildren = {$: 0};
var $mdgriffith$elm_ui$Internal$Model$columnClass = $mdgriffith$elm_ui$Internal$Style$classes.dg + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.T);
var $mdgriffith$elm_ui$Internal$Model$gridClass = $mdgriffith$elm_ui$Internal$Style$classes.dg + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.dR);
var $mdgriffith$elm_ui$Internal$Model$pageClass = $mdgriffith$elm_ui$Internal$Style$classes.dg + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.cB);
var $mdgriffith$elm_ui$Internal$Model$paragraphClass = $mdgriffith$elm_ui$Internal$Style$classes.dg + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.cC);
var $mdgriffith$elm_ui$Internal$Model$rowClass = $mdgriffith$elm_ui$Internal$Style$classes.dg + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.cM);
var $mdgriffith$elm_ui$Internal$Model$singleClass = $mdgriffith$elm_ui$Internal$Style$classes.dg + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.eD);
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
var $elm$json$Json$Encode$string = _Json_wrap;
var $elm$html$Html$Attributes$stringProperty = F2(
	function (key, string) {
		return A2(
			_VirtualDom_property,
			key,
			$elm$json$Json$Encode$string(string));
	});
var $elm$html$Html$Attributes$class = $elm$html$Html$Attributes$stringProperty('className');
var $elm$html$Html$div = _VirtualDom_node('div');
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
				A2($elm$core$List$map, $mdgriffith$elm_ui$Internal$Model$lengthClassName, template.ex)) + ('-cols-' + (A2(
				$elm$core$String$join,
				'-',
				A2($elm$core$List$map, $mdgriffith$elm_ui$Internal$Model$lengthClassName, template.J)) + ('-space-x-' + ($mdgriffith$elm_ui$Internal$Model$lengthClassName(template.eH.a) + ('-space-y-' + $mdgriffith$elm_ui$Internal$Model$lengthClassName(template.eH.b)))))));
		case 9:
			var pos = style.a;
			return 'gp grid-pos-' + ($elm$core$String$fromInt(pos.cM) + ('-' + ($elm$core$String$fromInt(pos.b5) + ('-' + ($elm$core$String$fromInt(pos.ar) + ('-' + $elm$core$String$fromInt(pos.br)))))));
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
					shadow.cm ? $elm$core$Maybe$Just('inset') : $elm$core$Maybe$Nothing,
					$elm$core$Maybe$Just(
					$elm$core$String$fromFloat(shadow.a.a) + 'px'),
					$elm$core$Maybe$Just(
					$elm$core$String$fromFloat(shadow.a.b) + 'px'),
					$elm$core$Maybe$Just(
					$elm$core$String$fromFloat(shadow.b1) + 'px'),
					$elm$core$Maybe$Just(
					$elm$core$String$fromFloat(shadow.cR) + 'px'),
					$elm$core$Maybe$Just(
					$mdgriffith$elm_ui$Internal$Model$formatColor(shadow.b6))
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
			$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.cb) + ':focus-within',
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
						focus.dm),
						A2(
						$elm$core$Maybe$map,
						function (color) {
							return A2(
								$mdgriffith$elm_ui$Internal$Model$Property,
								'background-color',
								$mdgriffith$elm_ui$Internal$Model$formatColor(color));
						},
						focus.di),
						A2(
						$elm$core$Maybe$map,
						function (shadow) {
							return A2(
								$mdgriffith$elm_ui$Internal$Model$Property,
								'box-shadow',
								$mdgriffith$elm_ui$Internal$Model$formatBoxShadow(
									{
										b1: shadow.b1,
										b6: shadow.b6,
										cm: false,
										a: A2(
											$elm$core$Tuple$mapSecond,
											$elm$core$Basics$toFloat,
											A2($elm$core$Tuple$mapFirst, $elm$core$Basics$toFloat, shadow.a)),
										cR: shadow.cR
									}));
						},
						focus.eC),
						$elm$core$Maybe$Just(
						A2($mdgriffith$elm_ui$Internal$Model$Property, 'outline', 'none'))
					]))),
			A2(
			$mdgriffith$elm_ui$Internal$Model$Style,
			($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.dg) + ':focus .focusable, ') + (($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.dg) + '.focusable:focus, ') + ('.ui-slide-bar:focus + ' + ($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.dg) + ' .focusable-thumb'))),
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
						focus.dm),
						A2(
						$elm$core$Maybe$map,
						function (color) {
							return A2(
								$mdgriffith$elm_ui$Internal$Model$Property,
								'background-color',
								$mdgriffith$elm_ui$Internal$Model$formatColor(color));
						},
						focus.di),
						A2(
						$elm$core$Maybe$map,
						function (shadow) {
							return A2(
								$mdgriffith$elm_ui$Internal$Model$Property,
								'box-shadow',
								$mdgriffith$elm_ui$Internal$Model$formatBoxShadow(
									{
										b1: shadow.b1,
										b6: shadow.b6,
										cm: false,
										a: A2(
											$elm$core$Tuple$mapSecond,
											$elm$core$Basics$toFloat,
											A2($elm$core$Tuple$mapFirst, $elm$core$Basics$toFloat, shadow.a)),
										cR: shadow.cR
									}));
						},
						focus.eC),
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
			return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.dz);
		case 1:
			var _v2 = desc;
			return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.aL);
		case 2:
			var _v3 = desc;
			return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.aN);
		case 3:
			var _v4 = desc;
			return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.av);
		case 4:
			var _v5 = desc;
			return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.aM);
		default:
			var _v6 = desc;
			return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.U);
	}
};
var $mdgriffith$elm_ui$Internal$Style$selfName = function (desc) {
	switch (desc) {
		case 0:
			var _v1 = desc;
			return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.de);
		case 1:
			var _v2 = desc;
			return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.c7);
		case 2:
			var _v3 = desc;
			return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.bY);
		case 3:
			var _v4 = desc;
			return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.bX);
		case 4:
			var _v5 = desc;
			return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.c8);
		default:
			var _v6 = desc;
			return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.c9);
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
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.dg),
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
		$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.bq),
		_List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'z-index', '0'),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Child,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.dj),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'z-index', '-1')
					]))
			])),
		A2(
		$mdgriffith$elm_ui$Internal$Style$Descriptor,
		$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.eB),
		_List_fromArray(
			[
				A2(
				$mdgriffith$elm_ui$Internal$Style$Child,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.eS),
				_List_fromArray(
					[
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.bt),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '0')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.bT),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'auto !important')
							]))
					]))
			])),
		A2(
		$mdgriffith$elm_ui$Internal$Style$Child,
		$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.bs),
		_List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', 'auto')
			])),
		A2(
		$mdgriffith$elm_ui$Internal$Style$Child,
		$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.bt),
		_List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '100000')
			])),
		A2(
		$mdgriffith$elm_ui$Internal$Style$Child,
		$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.bT),
		_List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%')
			])),
		A2(
		$mdgriffith$elm_ui$Internal$Style$Child,
		$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.c2),
		_List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%')
			])),
		A2(
		$mdgriffith$elm_ui$Internal$Style$Child,
		$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.bS),
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
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.dg),
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
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.dg),
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
			$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.dg),
			_Utils_ap(
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.eD),
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.dW))),
		_List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'block'),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.bt),
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
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.bT),
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
		$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.dg) + ':focus',
		_List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'outline', 'none')
			])),
		A2(
		$mdgriffith$elm_ui$Internal$Style$Class,
		$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.ew),
		_List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', 'auto'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'min-height', '100%'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'z-index', '0'),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				_Utils_ap(
					$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.dg),
					$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.bt)),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', '100%'),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.bt),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', '100%')
							]))
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Child,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.dY),
				_List_fromArray(
					[
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.an),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'position', 'fixed'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'z-index', '20')
							]))
					]))
			])),
		A2(
		$mdgriffith$elm_ui$Internal$Style$Class,
		$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.an),
		_List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'position', 'relative'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'border', 'none'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'flex'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-direction', 'row'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-basis', 'auto'),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.eD),
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
									$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.c5),
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
											$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.bt),
											_List_fromArray(
												[
													A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', 'auto')
												])),
											A2(
											$mdgriffith$elm_ui$Internal$Style$Child,
											$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.bT),
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
									$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.dk),
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
											$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.bt),
											_List_fromArray(
												[
													A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', 'auto')
												]))
										]));
							case 2:
								return A2(
									$mdgriffith$elm_ui$Internal$Style$Descriptor,
									$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.ej),
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
									$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.ei),
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
									$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.dY),
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
									$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.dj),
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
		$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.dg),
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
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.bV),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-wrap', 'wrap')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.cx),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, '-moz-user-select', 'none'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, '-webkit-user-select', 'none'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, '-ms-user-select', 'none'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'user-select', 'none')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.dC),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'cursor', 'pointer')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.dD),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'cursor', 'text')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.er),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'none !important')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.aG),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'auto !important')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.ai),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'opacity', '0')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.ae),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'opacity', '1')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot(
					_Utils_ap($mdgriffith$elm_ui$Internal$Style$classes.dU, $mdgriffith$elm_ui$Internal$Style$classes.ai)) + ':hover',
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'opacity', '0')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot(
					_Utils_ap($mdgriffith$elm_ui$Internal$Style$classes.dU, $mdgriffith$elm_ui$Internal$Style$classes.ae)) + ':hover',
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'opacity', '1')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot(
					_Utils_ap($mdgriffith$elm_ui$Internal$Style$classes.dO, $mdgriffith$elm_ui$Internal$Style$classes.ai)) + ':focus',
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'opacity', '0')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot(
					_Utils_ap($mdgriffith$elm_ui$Internal$Style$classes.dO, $mdgriffith$elm_ui$Internal$Style$classes.ae)) + ':focus',
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'opacity', '1')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot(
					_Utils_ap($mdgriffith$elm_ui$Internal$Style$classes.a3, $mdgriffith$elm_ui$Internal$Style$classes.ai)) + ':active',
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'opacity', '0')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot(
					_Utils_ap($mdgriffith$elm_ui$Internal$Style$classes.a3, $mdgriffith$elm_ui$Internal$Style$classes.ae)) + ':active',
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'opacity', '1')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.c_),
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
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.ey),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'overflow', 'auto'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-shrink', '1')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.ez),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'overflow-x', 'auto'),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.cM),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-shrink', '1')
							]))
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.eA),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'overflow-y', 'auto'),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.T),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-shrink', '1')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.eD),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-shrink', '1')
							]))
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.dw),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'overflow', 'hidden')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.dx),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'overflow-x', 'hidden')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.dy),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'overflow-y', 'hidden')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.bS),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', 'auto')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.aF),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'border-width', '0')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.dn),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'border-style', 'dashed')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.$7),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'border-style', 'dotted')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.dp),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'border-style', 'solid')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.eS),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'white-space', 'pre'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'inline-block')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.d2),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'line-height', '1.05'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'background', 'transparent'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-align', 'inherit')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.eD),
				$mdgriffith$elm_ui$Internal$Style$elDescription),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.cM),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'flex'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-direction', 'row'),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.dg),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-basis', '0%'),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Descriptor,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.c1),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-basis', 'auto')
									])),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Descriptor,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.ct),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-basis', 'auto')
									]))
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.bt),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'stretch !important')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.ci),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'stretch !important')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.bT),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '100000')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.aJ),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '0'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-basis', 'auto'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'stretch')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						'u:first-of-type.' + $mdgriffith$elm_ui$Internal$Style$classes.dd,
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '1')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						's:first-of-type.' + $mdgriffith$elm_ui$Internal$Style$classes.db,
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '1'),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Child,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.c8),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-left', 'auto !important')
									]))
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						's:last-of-type.' + $mdgriffith$elm_ui$Internal$Style$classes.db,
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '1'),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Child,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.c8),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-right', 'auto !important')
									]))
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						's:only-of-type.' + $mdgriffith$elm_ui$Internal$Style$classes.db,
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '1'),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Child,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.c9),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-top', 'auto !important'),
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-bottom', 'auto !important')
									]))
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						's:last-of-type.' + ($mdgriffith$elm_ui$Internal$Style$classes.db + ' ~ u'),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '0')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						'u:first-of-type.' + ($mdgriffith$elm_ui$Internal$Style$classes.dd + (' ~ s.' + $mdgriffith$elm_ui$Internal$Style$classes.db)),
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
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.eG),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'space-between')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.aQ),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'baseline')
							]))
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.T),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'flex'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-direction', 'column'),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.dg),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-basis', '0px'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'min-height', 'min-content'),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Descriptor,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.ch),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-basis', 'auto')
									]))
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.bt),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '100000')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.bT),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.c2),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.bS),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'flex-start')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						'u:first-of-type.' + $mdgriffith$elm_ui$Internal$Style$classes.da,
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '1')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						's:first-of-type.' + $mdgriffith$elm_ui$Internal$Style$classes.dc,
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '1'),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Child,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.c9),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-top', 'auto !important'),
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-bottom', '0 !important')
									]))
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						's:last-of-type.' + $mdgriffith$elm_ui$Internal$Style$classes.dc,
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '1'),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Child,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.c9),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-bottom', 'auto !important'),
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-top', '0 !important')
									]))
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						's:only-of-type.' + $mdgriffith$elm_ui$Internal$Style$classes.dc,
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '1'),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Child,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.c9),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-top', 'auto !important'),
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-bottom', 'auto !important')
									]))
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						's:last-of-type.' + ($mdgriffith$elm_ui$Internal$Style$classes.dc + ' ~ u'),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '0')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						'u:first-of-type.' + ($mdgriffith$elm_ui$Internal$Style$classes.da + (' ~ s.' + $mdgriffith$elm_ui$Internal$Style$classes.dc)),
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
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.aJ),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '0'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-basis', 'auto'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'stretch !important')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.eG),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'space-between')
							]))
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.dR),
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
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.dg),
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
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.cB),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'block'),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.dg + ':first-child'),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin', '0 !important')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot(
							$mdgriffith$elm_ui$Internal$Style$classes.dg + ($mdgriffith$elm_ui$Internal$Style$selfName(3) + (':first-child + .' + $mdgriffith$elm_ui$Internal$Style$classes.dg))),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin', '0 !important')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot(
							$mdgriffith$elm_ui$Internal$Style$classes.dg + ($mdgriffith$elm_ui$Internal$Style$selfName(2) + (':first-child + .' + $mdgriffith$elm_ui$Internal$Style$classes.dg))),
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
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.d_),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'white-space', 'pre-wrap !important'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', '100%'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'background-color', 'transparent')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.d1),
				_List_fromArray(
					[
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.eD),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-basis', 'auto')
							]))
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.d0),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'white-space', 'pre-wrap !important'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'cursor', 'text'),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.d$),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'white-space', 'pre-wrap !important'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'color', 'transparent')
							]))
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.cC),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'block'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'white-space', 'normal'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'overflow-wrap', 'break-word'),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.bq),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'z-index', '0'),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Child,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.dj),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'z-index', '-1')
									]))
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$AllChildren,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.eS),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'inline'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'white-space', 'normal')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$AllChildren,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.cC),
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
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.eD),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'inline'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'white-space', 'normal'),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Descriptor,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.c1),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'inline-block')
									])),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Descriptor,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.dY),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'flex')
									])),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Descriptor,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.dj),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'flex')
									])),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Descriptor,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.c5),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'flex')
									])),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Descriptor,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.dk),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'flex')
									])),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Descriptor,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.ej),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'flex')
									])),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Descriptor,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.ei),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'flex')
									])),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Child,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.eS),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'inline'),
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'white-space', 'normal')
									]))
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.cM),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'inline')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.T),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'inline-flex')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.dR),
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
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.e2),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-weight', '100')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.eV),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-weight', '200')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.eZ),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-weight', '300')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.e$),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-weight', '400')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.e_),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-weight', '500')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.e1),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-weight', '600')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.dl),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-weight', '700')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.eU),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-weight', '800')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.eW),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-weight', '900')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.d4),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-style', 'italic')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.eO),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-decoration', 'line-through')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.e7),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-decoration', 'underline'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-decoration-skip-ink', 'auto'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-decoration-skip', 'ink')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				_Utils_ap(
					$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.e7),
					$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.eO)),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-decoration', 'line-through underline'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-decoration-skip-ink', 'auto'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-decoration-skip', 'ink')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.e3),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-style', 'normal')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.eX),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-align', 'justify')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.a1),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-align', 'justify-all')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.eT),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-align', 'center')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.e0),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-align', 'right')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.eY),
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
var $mdgriffith$elm_ui$Internal$Style$explainer = '\n.explain {\n    border: 6px solid rgb(174, 121, 15) !important;\n}\n.explain > .' + ($mdgriffith$elm_ui$Internal$Style$classes.dg + (' {\n    border: 4px dashed rgb(0, 151, 167) !important;\n}\n\n.ctr {\n    border: none !important;\n}\n.explain > .ctr > .' + ($mdgriffith$elm_ui$Internal$Style$classes.dg + ' {\n    border: 4px dashed rgb(0, 151, 167) !important;\n}\n\n')));
var $mdgriffith$elm_ui$Internal$Style$inputTextReset = '\ninput[type="search"],\ninput[type="search"]::-webkit-search-decoration,\ninput[type="search"]::-webkit-search-cancel-button,\ninput[type="search"]::-webkit-search-results-button,\ninput[type="search"]::-webkit-search-results-decoration {\n  -webkit-appearance:none;\n}\n';
var $mdgriffith$elm_ui$Internal$Style$sliderReset = '\ninput[type=range] {\n  -webkit-appearance: none; \n  background: transparent;\n  position:absolute;\n  left:0;\n  top:0;\n  z-index:10;\n  width: 100%;\n  outline: dashed 1px;\n  height: 100%;\n  opacity: 0;\n}\n';
var $mdgriffith$elm_ui$Internal$Style$thumbReset = '\ninput[type=range]::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    opacity: 0.5;\n    width: 80px;\n    height: 80px;\n    background-color: black;\n    border:none;\n    border-radius: 5px;\n}\ninput[type=range]::-moz-range-thumb {\n    opacity: 0.5;\n    width: 80px;\n    height: 80px;\n    background-color: black;\n    border:none;\n    border-radius: 5px;\n}\ninput[type=range]::-ms-thumb {\n    opacity: 0.5;\n    width: 80px;\n    height: 80px;\n    background-color: black;\n    border:none;\n    border-radius: 5px;\n}\ninput[type=range][orient=vertical]{\n    writing-mode: bt-lr; /* IE */\n    -webkit-appearance: slider-vertical;  /* WebKit */\n}\n';
var $mdgriffith$elm_ui$Internal$Style$trackReset = '\ninput[type=range]::-moz-range-track {\n    background: transparent;\n    cursor: pointer;\n}\ninput[type=range]::-ms-track {\n    background: transparent;\n    cursor: pointer;\n}\ninput[type=range]::-webkit-slider-runnable-track {\n    background: transparent;\n    cursor: pointer;\n}\n';
var $mdgriffith$elm_ui$Internal$Style$overrides = '@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {' + ($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.dg) + ($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.cM) + (' > ' + ($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.dg) + (' { flex-basis: auto !important; } ' + ($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.dg) + ($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.cM) + (' > ' + ($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.dg) + ($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.aJ) + (' { flex-basis: auto !important; }}' + ($mdgriffith$elm_ui$Internal$Style$inputTextReset + ($mdgriffith$elm_ui$Internal$Style$sliderReset + ($mdgriffith$elm_ui$Internal$Style$trackReset + ($mdgriffith$elm_ui$Internal$Style$thumbReset + $mdgriffith$elm_ui$Internal$Style$explainer)))))))))))))));
var $elm$core$String$concat = function (strings) {
	return A2($elm$core$String$join, '', strings);
};
var $mdgriffith$elm_ui$Internal$Style$Intermediate = $elm$core$Basics$identity;
var $mdgriffith$elm_ui$Internal$Style$emptyIntermediate = F2(
	function (selector, closing) {
		return {am: closing, m: _List_Nil, M: _List_Nil, H: selector};
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
								M: A2(
									$elm$core$List$cons,
									_Utils_Tuple2(name, val),
									rendered.M)
							});
					case 3:
						var _v2 = rule.a;
						var prop = _v2.a;
						var value = _v2.b;
						var props = rule.b;
						return _Utils_update(
							rendered,
							{
								m: A2(
									$elm$core$List$cons,
									{am: '\n}', m: _List_Nil, M: props, H: '@supports (' + (prop + (':' + (value + (') {' + parent.H))))},
									rendered.m)
							});
					case 5:
						var selector = rule.a;
						var adjRules = rule.b;
						return _Utils_update(
							rendered,
							{
								m: A2(
									$elm$core$List$cons,
									A2(
										$mdgriffith$elm_ui$Internal$Style$renderRules,
										A2($mdgriffith$elm_ui$Internal$Style$emptyIntermediate, parent.H + (' + ' + selector), ''),
										adjRules),
									rendered.m)
							});
					case 1:
						var child = rule.a;
						var childRules = rule.b;
						return _Utils_update(
							rendered,
							{
								m: A2(
									$elm$core$List$cons,
									A2(
										$mdgriffith$elm_ui$Internal$Style$renderRules,
										A2($mdgriffith$elm_ui$Internal$Style$emptyIntermediate, parent.H + (' > ' + child), ''),
										childRules),
									rendered.m)
							});
					case 2:
						var child = rule.a;
						var childRules = rule.b;
						return _Utils_update(
							rendered,
							{
								m: A2(
									$elm$core$List$cons,
									A2(
										$mdgriffith$elm_ui$Internal$Style$renderRules,
										A2($mdgriffith$elm_ui$Internal$Style$emptyIntermediate, parent.H + (' ' + child), ''),
										childRules),
									rendered.m)
							});
					case 4:
						var descriptor = rule.a;
						var descriptorRules = rule.b;
						return _Utils_update(
							rendered,
							{
								m: A2(
									$elm$core$List$cons,
									A2(
										$mdgriffith$elm_ui$Internal$Style$renderRules,
										A2(
											$mdgriffith$elm_ui$Internal$Style$emptyIntermediate,
											_Utils_ap(parent.H, descriptor),
											''),
										descriptorRules),
									rendered.m)
							});
					default:
						var batched = rule.a;
						return _Utils_update(
							rendered,
							{
								m: A2(
									$elm$core$List$cons,
									A2(
										$mdgriffith$elm_ui$Internal$Style$renderRules,
										A2($mdgriffith$elm_ui$Internal$Style$emptyIntermediate, parent.H, ''),
										batched),
									rendered.m)
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
		var _v2 = rule.M;
		if (!_v2.b) {
			return '';
		} else {
			return rule.H + ('{' + (renderValues(rule.M) + (rule.am + '}')));
		}
	};
	var renderIntermediate = function (_v0) {
		var rule = _v0;
		return _Utils_ap(
			renderClass(rule),
			$elm$core$String$concat(
				A2($elm$core$List$map, renderIntermediate, rule.m)));
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
	var _v0 = opts.d7;
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
			var name = font.a.bD;
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
		return A2($elm$core$List$any, $mdgriffith$elm_ui$Internal$Model$isSmallCaps, font.a2);
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
					var _v2 = options.dU;
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
							('.' + ($mdgriffith$elm_ui$Internal$Style$classes.dg + (':focus ' + (selector + '-fs  {')))) + (renderedProps + '\n}'),
							(selector + '-fs:focus-within {') + (renderedProps + '\n}'),
							('.ui-slide-bar:focus + ' + ($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.dg) + (' .focusable-thumb' + (selector + '-fs {')))) + (renderedProps + '\n}')
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
				A2($elm$core$List$map, $mdgriffith$elm_ui$Internal$Model$renderVariant, font.a2)));
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
				var single = '.' + $mdgriffith$elm_ui$Internal$Style$classes.eD;
				var row = '.' + $mdgriffith$elm_ui$Internal$Style$classes.cM;
				var wrappedRow = '.' + ($mdgriffith$elm_ui$Internal$Style$classes.bV + row);
				var right = '.' + $mdgriffith$elm_ui$Internal$Style$classes.bY;
				var paragraph = '.' + $mdgriffith$elm_ui$Internal$Style$classes.cC;
				var page = '.' + $mdgriffith$elm_ui$Internal$Style$classes.cB;
				var left = '.' + $mdgriffith$elm_ui$Internal$Style$classes.bX;
				var halfY = $elm$core$String$fromFloat(y / 2) + 'px';
				var halfX = $elm$core$String$fromFloat(x / 2) + 'px';
				var column = '.' + $mdgriffith$elm_ui$Internal$Style$classes.T;
				var _class = '.' + cls;
				var any = '.' + $mdgriffith$elm_ui$Internal$Style$classes.dg;
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
				var xSpacing = toGridLength(template.eH.a);
				var ySpacing = toGridLength(template.eH.b);
				var rows = function (x) {
					return 'grid-template-rows: ' + (x + ';');
				}(
					A2(
						$elm$core$String$join,
						' ',
						A2($elm$core$List$map, toGridLength, template.ex)));
				var msRows = function (x) {
					return '-ms-grid-rows: ' + (x + ';');
				}(
					A2(
						$elm$core$String$join,
						ySpacing,
						A2($elm$core$List$map, toGridLength, template.J)));
				var msColumns = function (x) {
					return '-ms-grid-columns: ' + (x + ';');
				}(
					A2(
						$elm$core$String$join,
						ySpacing,
						A2($elm$core$List$map, toGridLength, template.J)));
				var gapY = 'grid-row-gap:' + (toGridLength(template.eH.b) + ';');
				var gapX = 'grid-column-gap:' + (toGridLength(template.eH.a) + ';');
				var columns = function (x) {
					return 'grid-template-columns: ' + (x + ';');
				}(
					A2(
						$elm$core$String$join,
						' ',
						A2($elm$core$List$map, toGridLength, template.J)));
				var _class = '.grid-rows-' + (A2(
					$elm$core$String$join,
					'-',
					A2($elm$core$List$map, $mdgriffith$elm_ui$Internal$Model$lengthClassName, template.ex)) + ('-cols-' + (A2(
					$elm$core$String$join,
					'-',
					A2($elm$core$List$map, $mdgriffith$elm_ui$Internal$Model$lengthClassName, template.J)) + ('-space-x-' + ($mdgriffith$elm_ui$Internal$Model$lengthClassName(template.eH.a) + ('-space-y-' + $mdgriffith$elm_ui$Internal$Model$lengthClassName(template.eH.b)))))));
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
							'-ms-grid-row: ' + ($elm$core$String$fromInt(position.cM) + ';'),
							'-ms-grid-row-span: ' + ($elm$core$String$fromInt(position.br) + ';'),
							'-ms-grid-column: ' + ($elm$core$String$fromInt(position.b5) + ';'),
							'-ms-grid-column-span: ' + ($elm$core$String$fromInt(position.ar) + ';')
						]));
				var modernPosition = A2(
					$elm$core$String$join,
					' ',
					_List_fromArray(
						[
							'grid-row: ' + ($elm$core$String$fromInt(position.cM) + (' / ' + ($elm$core$String$fromInt(position.cM + position.br) + ';'))),
							'grid-column: ' + ($elm$core$String$fromInt(position.b5) + (' / ' + ($elm$core$String$fromInt(position.b5 + position.ar) + ';')))
						]));
				var _class = '.grid-pos-' + ($elm$core$String$fromInt(position.cM) + ('-' + ($elm$core$String$fromInt(position.b5) + ('-' + ($elm$core$String$fromInt(position.ar) + ('-' + $elm$core$String$fromInt(position.br)))))));
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
				A2($mdgriffith$elm_ui$Internal$Model$bracket, '.' + (name + ('.' + (modifier + ('> .' + ($mdgriffith$elm_ui$Internal$Style$classes.eS + (', .' + (name + (' .' + (modifier + (' > .' + $mdgriffith$elm_ui$Internal$Style$classes.eS)))))))))), textAdjustment)
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
				A3($mdgriffith$elm_ui$Internal$Model$fontRule, name, $mdgriffith$elm_ui$Internal$Style$classes.eE, capital),
				A3($mdgriffith$elm_ui$Internal$Model$fontRule, name, $mdgriffith$elm_ui$Internal$Style$classes.dP, full)));
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
					'.' + (name + ('.' + ($mdgriffith$elm_ui$Internal$Style$classes.eE + (', ' + ('.' + (name + (' .' + $mdgriffith$elm_ui$Internal$Style$classes.eE))))))),
					_List_fromArray(
						[
							_Utils_Tuple2('line-height', '1')
						])),
					A2(
					$mdgriffith$elm_ui$Internal$Model$bracket,
					'.' + (name + ('.' + ($mdgriffith$elm_ui$Internal$Style$classes.eE + ('> .' + ($mdgriffith$elm_ui$Internal$Style$classes.eS + (', .' + (name + (' .' + ($mdgriffith$elm_ui$Internal$Style$classes.eE + (' > .' + $mdgriffith$elm_ui$Internal$Style$classes.eS)))))))))),
					_List_fromArray(
						[
							_Utils_Tuple2('vertical-align', '0'),
							_Utils_Tuple2('line-height', '1')
						]))
				]));
	});
var $mdgriffith$elm_ui$Internal$Model$adjust = F3(
	function (size, height, vertical) {
		return {br: height / size, cR: size, c0: vertical};
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
		[adjustment.bd, adjustment.a8, adjustment.bh, adjustment.bA]);
	var lineHeight = 1.5;
	var normalDescender = (lineHeight - 1) / 2;
	var oldMiddle = lineHeight / 2;
	var descender = A2(
		$elm$core$Maybe$withDefault,
		adjustment.bh,
		$elm$core$List$minimum(lines));
	var newBaseline = A2(
		$elm$core$Maybe$withDefault,
		adjustment.a8,
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
		adjustment.bd,
		$elm$core$List$maximum(lines));
	var capitalSize = 1 / (ascender - newBaseline);
	var capitalVertical = 1 - ascender;
	var fullSize = 1 / (ascender - descender);
	var fullVertical = 1 - ascender;
	var newCapitalMiddle = ((ascender - newBaseline) / 2) + newBaseline;
	var newFullMiddle = ((ascender - descender) / 2) + descender;
	return {
		bd: A3($mdgriffith$elm_ui$Internal$Model$adjust, capitalSize, ascender - newBaseline, capitalVertical),
		cd: A3($mdgriffith$elm_ui$Internal$Model$adjust, fullSize, ascender - descender, fullVertical)
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
				$elm$core$String$fromFloat(converted.br)),
				_Utils_Tuple2(
				'vertical-align',
				$elm$core$String$fromFloat(converted.c0) + 'em'),
				_Utils_Tuple2(
				'font-size',
				$elm$core$String$fromFloat(converted.cR) + 'em')
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
						var _v2 = _with.a4;
						if (_v2.$ === 1) {
							return found;
						} else {
							var adjustment = _v2.a;
							return $elm$core$Maybe$Just(
								_Utils_Tuple2(
									$mdgriffith$elm_ui$Internal$Model$fontAdjustmentRules(
										function ($) {
											return $.cd;
										}(
											$mdgriffith$elm_ui$Internal$Model$convertAdjustment(adjustment))),
									$mdgriffith$elm_ui$Internal$Model$fontAdjustmentRules(
										function ($) {
											return $.bd;
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
					a_: _Utils_ap(
						rendered.a_,
						A3($mdgriffith$elm_ui$Internal$Model$renderStyleRule, options, style, $elm$core$Maybe$Nothing)),
					aE: function () {
						var _v1 = $mdgriffith$elm_ui$Internal$Model$topLevelValue(style);
						if (_v1.$ === 1) {
							return rendered.aE;
						} else {
							var topLevel = _v1.a;
							return A2($elm$core$List$cons, topLevel, rendered.aE);
						}
					}()
				};
			});
		var _v0 = A3(
			$elm$core$List$foldl,
			combine,
			{a_: _List_Nil, aE: _List_Nil},
			stylesheet);
		var rules = _v0.a_;
		var topLevel = _v0.aE;
		return _Utils_ap(
			$mdgriffith$elm_ui$Internal$Model$renderTopLevelValues(topLevel),
			$elm$core$String$concat(rules));
	});
var $mdgriffith$elm_ui$Internal$Model$toStyleSheet = F2(
	function (options, styleSheet) {
		var _v0 = options.d7;
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
					$mdgriffith$elm_ui$Internal$Model$renderFocusStyle(opts.dO)),
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
					$mdgriffith$elm_ui$Internal$Model$renderFocusStyle(opts.dO)),
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
										$elm$html$Html$Attributes$class($mdgriffith$elm_ui$Internal$Style$classes.dg + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.eD))
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
									[$mdgriffith$elm_ui$Internal$Style$classes.dg, $mdgriffith$elm_ui$Internal$Style$classes.eD, $mdgriffith$elm_ui$Internal$Style$classes.aJ, $mdgriffith$elm_ui$Internal$Style$classes.U, $mdgriffith$elm_ui$Internal$Style$classes.dd])))
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
									[$mdgriffith$elm_ui$Internal$Style$classes.dg, $mdgriffith$elm_ui$Internal$Style$classes.eD, $mdgriffith$elm_ui$Internal$Style$classes.aJ, $mdgriffith$elm_ui$Internal$Style$classes.U, $mdgriffith$elm_ui$Internal$Style$classes.db])))
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
									[$mdgriffith$elm_ui$Internal$Style$classes.dg, $mdgriffith$elm_ui$Internal$Style$classes.eD, $mdgriffith$elm_ui$Internal$Style$classes.aJ, $mdgriffith$elm_ui$Internal$Style$classes.dc])))
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
									[$mdgriffith$elm_ui$Internal$Style$classes.dg, $mdgriffith$elm_ui$Internal$Style$classes.eD, $mdgriffith$elm_ui$Internal$Style$classes.aJ, $mdgriffith$elm_ui$Internal$Style$classes.da])))
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
var $mdgriffith$elm_ui$Internal$Model$textElementClasses = $mdgriffith$elm_ui$Internal$Style$classes.dg + (' ' + ($mdgriffith$elm_ui$Internal$Style$classes.eS + (' ' + ($mdgriffith$elm_ui$Internal$Style$classes.bS + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.bs)))));
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
var $mdgriffith$elm_ui$Internal$Model$textElementFillClasses = $mdgriffith$elm_ui$Internal$Style$classes.dg + (' ' + ($mdgriffith$elm_ui$Internal$Style$classes.eS + (' ' + ($mdgriffith$elm_ui$Internal$Style$classes.bT + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.bt)))));
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
									A2(styled.dV, $mdgriffith$elm_ui$Internal$Model$NoStyleSheet, context)),
								htmls),
							$elm$core$List$isEmpty(existingStyles) ? styled.cW : _Utils_ap(styled.cW, existingStyles)) : _Utils_Tuple2(
							A2(
								$elm$core$List$cons,
								_Utils_Tuple2(
									key,
									A2(styled.dV, $mdgriffith$elm_ui$Internal$Model$NoStyleSheet, context)),
								htmls),
							$elm$core$List$isEmpty(existingStyles) ? styled.cW : _Utils_ap(styled.cW, existingStyles));
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
								A2(styled.dV, $mdgriffith$elm_ui$Internal$Model$NoStyleSheet, context),
								htmls),
							$elm$core$List$isEmpty(existingStyles) ? styled.cW : _Utils_ap(styled.cW, existingStyles)) : _Utils_Tuple2(
							A2(
								$elm$core$List$cons,
								A2(styled.dV, $mdgriffith$elm_ui$Internal$Model$NoStyleSheet, context),
								htmls),
							$elm$core$List$isEmpty(existingStyles) ? styled.cW : _Utils_ap(styled.cW, existingStyles));
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
			var newStyles = $elm$core$List$isEmpty(styles) ? rendered.cW : _Utils_ap(rendered.cW, styles);
			if (!newStyles.b) {
				return $mdgriffith$elm_ui$Internal$Model$Unstyled(
					A5(
						$mdgriffith$elm_ui$Internal$Model$finalizeNode,
						rendered.Q,
						rendered.cy,
						rendered.N,
						$mdgriffith$elm_ui$Internal$Model$Keyed(
							A3($mdgriffith$elm_ui$Internal$Model$addKeyedChildren, 'nearby-element-pls', keyed, rendered.dv)),
						$mdgriffith$elm_ui$Internal$Model$NoStyleSheet));
			} else {
				var allStyles = newStyles;
				return $mdgriffith$elm_ui$Internal$Model$Styled(
					{
						dV: A4(
							$mdgriffith$elm_ui$Internal$Model$finalizeNode,
							rendered.Q,
							rendered.cy,
							rendered.N,
							$mdgriffith$elm_ui$Internal$Model$Keyed(
								A3($mdgriffith$elm_ui$Internal$Model$addKeyedChildren, 'nearby-element-pls', keyed, rendered.dv))),
						cW: allStyles
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
			var newStyles = $elm$core$List$isEmpty(styles) ? rendered.cW : _Utils_ap(rendered.cW, styles);
			if (!newStyles.b) {
				return $mdgriffith$elm_ui$Internal$Model$Unstyled(
					A5(
						$mdgriffith$elm_ui$Internal$Model$finalizeNode,
						rendered.Q,
						rendered.cy,
						rendered.N,
						$mdgriffith$elm_ui$Internal$Model$Unkeyed(
							A2($mdgriffith$elm_ui$Internal$Model$addChildren, unkeyed, rendered.dv)),
						$mdgriffith$elm_ui$Internal$Model$NoStyleSheet));
			} else {
				var allStyles = newStyles;
				return $mdgriffith$elm_ui$Internal$Model$Styled(
					{
						dV: A4(
							$mdgriffith$elm_ui$Internal$Model$finalizeNode,
							rendered.Q,
							rendered.cy,
							rendered.N,
							$mdgriffith$elm_ui$Internal$Model$Unkeyed(
								A2($mdgriffith$elm_ui$Internal$Model$addChildren, unkeyed, rendered.dv))),
						cW: allStyles
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
										[$mdgriffith$elm_ui$Internal$Style$classes.an, $mdgriffith$elm_ui$Internal$Style$classes.eD, $mdgriffith$elm_ui$Internal$Style$classes.c5]));
							case 1:
								return A2(
									$elm$core$String$join,
									' ',
									_List_fromArray(
										[$mdgriffith$elm_ui$Internal$Style$classes.an, $mdgriffith$elm_ui$Internal$Style$classes.eD, $mdgriffith$elm_ui$Internal$Style$classes.dk]));
							case 2:
								return A2(
									$elm$core$String$join,
									' ',
									_List_fromArray(
										[$mdgriffith$elm_ui$Internal$Style$classes.an, $mdgriffith$elm_ui$Internal$Style$classes.eD, $mdgriffith$elm_ui$Internal$Style$classes.ej]));
							case 3:
								return A2(
									$elm$core$String$join,
									' ',
									_List_fromArray(
										[$mdgriffith$elm_ui$Internal$Style$classes.an, $mdgriffith$elm_ui$Internal$Style$classes.eD, $mdgriffith$elm_ui$Internal$Style$classes.ei]));
							case 4:
								return A2(
									$elm$core$String$join,
									' ',
									_List_fromArray(
										[$mdgriffith$elm_ui$Internal$Style$classes.an, $mdgriffith$elm_ui$Internal$Style$classes.eD, $mdgriffith$elm_ui$Internal$Style$classes.dY]));
							default:
								return A2(
									$elm$core$String$join,
									' ',
									_List_fromArray(
										[$mdgriffith$elm_ui$Internal$Style$classes.an, $mdgriffith$elm_ui$Internal$Style$classes.eD, $mdgriffith$elm_ui$Internal$Style$classes.dj]));
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
							return A2(styled.dV, $mdgriffith$elm_ui$Internal$Model$NoStyleSheet, $mdgriffith$elm_ui$Internal$Model$asEl);
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
			return $mdgriffith$elm_ui$Internal$Style$classes.a5 + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.bX);
		case 2:
			return $mdgriffith$elm_ui$Internal$Style$classes.a5 + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.bY);
		default:
			return $mdgriffith$elm_ui$Internal$Style$classes.a5 + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.c8);
	}
};
var $mdgriffith$elm_ui$Internal$Model$alignYName = function (align) {
	switch (align) {
		case 0:
			return $mdgriffith$elm_ui$Internal$Style$classes.a6 + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.de);
		case 2:
			return $mdgriffith$elm_ui$Internal$Style$classes.a6 + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.c7);
		default:
			return $mdgriffith$elm_ui$Internal$Style$classes.a6 + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.c9);
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
				$mdgriffith$elm_ui$Internal$Style$classes.ch + (' ' + name),
				_List_fromArray(
					[
						A3($mdgriffith$elm_ui$Internal$Model$Single, name, 'height', val + 'px')
					]));
		case 1:
			return _Utils_Tuple3(
				A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$heightContent, $mdgriffith$elm_ui$Internal$Flag$none),
				$mdgriffith$elm_ui$Internal$Style$classes.bs,
				_List_Nil);
		case 2:
			var portion = h.a;
			return (portion === 1) ? _Utils_Tuple3(
				A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$heightFill, $mdgriffith$elm_ui$Internal$Flag$none),
				$mdgriffith$elm_ui$Internal$Style$classes.bt,
				_List_Nil) : _Utils_Tuple3(
				A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$heightFill, $mdgriffith$elm_ui$Internal$Flag$none),
				$mdgriffith$elm_ui$Internal$Style$classes.ci + (' height-fill-' + $elm$core$String$fromInt(portion)),
				_List_fromArray(
					[
						A3(
						$mdgriffith$elm_ui$Internal$Model$Single,
						$mdgriffith$elm_ui$Internal$Style$classes.dg + ('.' + ($mdgriffith$elm_ui$Internal$Style$classes.T + (' > ' + $mdgriffith$elm_ui$Internal$Style$dot(
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
				$mdgriffith$elm_ui$Internal$Style$classes.c1 + (' width-px-' + $elm$core$String$fromInt(px)),
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
				$mdgriffith$elm_ui$Internal$Style$classes.bS,
				_List_Nil);
		case 2:
			var portion = w.a;
			return (portion === 1) ? _Utils_Tuple3(
				A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$widthFill, $mdgriffith$elm_ui$Internal$Flag$none),
				$mdgriffith$elm_ui$Internal$Style$classes.bT,
				_List_Nil) : _Utils_Tuple3(
				A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$widthFill, $mdgriffith$elm_ui$Internal$Flag$none),
				$mdgriffith$elm_ui$Internal$Style$classes.c2 + (' width-fill-' + $elm$core$String$fromInt(portion)),
				_List_fromArray(
					[
						A3(
						$mdgriffith$elm_ui$Internal$Model$Single,
						$mdgriffith$elm_ui$Internal$Style$classes.dg + ('.' + ($mdgriffith$elm_ui$Internal$Style$classes.cM + (' > ' + $mdgriffith$elm_ui$Internal$Style$dot(
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
						N: A2(
							$elm$core$List$cons,
							$elm$html$Html$Attributes$class(classes),
							attrs),
						dv: children,
						Q: has,
						cy: node,
						cW: styles
					};
				} else {
					var _class = _v1.a;
					return {
						N: A2(
							$elm$core$List$cons,
							$elm$html$Html$Attributes$class(classes + (' ' + _class)),
							attrs),
						dv: children,
						Q: has,
						cy: node,
						cW: A2(
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
									var $temp$classes = ($mdgriffith$elm_ui$Internal$Style$classes.c1 + (' width-px-' + $elm$core$String$fromInt(px))) + (' ' + classes),
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
									var $temp$classes = classes + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.bS),
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
										var $temp$classes = classes + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.bT),
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
										var $temp$classes = classes + (' ' + ($mdgriffith$elm_ui$Internal$Style$classes.c2 + (' width-fill-' + $elm$core$String$fromInt(portion)))),
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
												$mdgriffith$elm_ui$Internal$Style$classes.dg + ('.' + ($mdgriffith$elm_ui$Internal$Style$classes.cM + (' > ' + $mdgriffith$elm_ui$Internal$Style$dot(
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
									var $temp$classes = $mdgriffith$elm_ui$Internal$Style$classes.ch + (' ' + (name + (' ' + classes))),
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
									var $temp$classes = $mdgriffith$elm_ui$Internal$Style$classes.bs + (' ' + classes),
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
										var $temp$classes = $mdgriffith$elm_ui$Internal$Style$classes.bt + (' ' + classes),
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
										var $temp$classes = classes + (' ' + ($mdgriffith$elm_ui$Internal$Style$classes.ci + (' height-fill-' + $elm$core$String$fromInt(portion)))),
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
												$mdgriffith$elm_ui$Internal$Style$classes.dg + ('.' + ($mdgriffith$elm_ui$Internal$Style$classes.T + (' > ' + $mdgriffith$elm_ui$Internal$Style$dot(
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
									return _Utils_ap(styles, styled.cW);
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
var $mdgriffith$elm_ui$Internal$Model$FontFamily = F2(
	function (a, b) {
		return {$: 1, a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Flag$fontFamily = $mdgriffith$elm_ui$Internal$Flag$flag(5);
var $elm$core$String$toLower = _String_toLower;
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
						var name = font.a.bD;
						return A2(
							$elm$core$String$join,
							'-',
							$elm$core$String$words(
								$elm$core$String$toLower(name)));
				}
			}());
	});
var $mdgriffith$elm_ui$Element$Font$family = function (families) {
	return A2(
		$mdgriffith$elm_ui$Internal$Model$StyleClass,
		$mdgriffith$elm_ui$Internal$Flag$fontFamily,
		A2(
			$mdgriffith$elm_ui$Internal$Model$FontFamily,
			A3($elm$core$List$foldl, $mdgriffith$elm_ui$Internal$Model$renderFontClassName, 'ff-', families),
			families));
};
var $mdgriffith$elm_ui$Internal$Model$Monospace = {$: 2};
var $mdgriffith$elm_ui$Element$Font$monospace = $mdgriffith$elm_ui$Internal$Model$Monospace;
var $mdgriffith$elm_ui$Internal$Model$Text = function (a) {
	return {$: 2, a: a};
};
var $mdgriffith$elm_ui$Element$text = function (content) {
	return $mdgriffith$elm_ui$Internal$Model$Text(content);
};
var $mdgriffith$elm_ui$Internal$Model$Typeface = function (a) {
	return {$: 3, a: a};
};
var $mdgriffith$elm_ui$Element$Font$typeface = $mdgriffith$elm_ui$Internal$Model$Typeface;
var $author$project$Render$Elm$code = F4(
	function (renderArgs, _v0, _v1, body) {
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
			$mdgriffith$elm_ui$Element$text(
				' ' + $author$project$Parser$AST$getText(body)));
	});
var $mdgriffith$elm_ui$Internal$Flag$bgColor = $mdgriffith$elm_ui$Internal$Flag$flag(8);
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
var $author$project$Render$Elm$convertRGB = function (data) {
	if (((data.b && data.b.b) && data.b.b.b) && (!data.b.b.b.b)) {
		var r = data.a;
		var _v1 = data.b;
		var g = _v1.a;
		var _v2 = _v1.b;
		var b = _v2.a;
		return $elm$core$Maybe$Just(
			{
				b_: A2(
					$elm$core$Maybe$withDefault,
					0,
					$elm$core$String$toInt(b)),
				ce: A2(
					$elm$core$Maybe$withDefault,
					0,
					$elm$core$String$toInt(g)),
				cI: A2(
					$elm$core$Maybe$withDefault,
					0,
					$elm$core$String$toInt(r))
			});
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $mdgriffith$elm_ui$Internal$Model$AsColumn = 1;
var $mdgriffith$elm_ui$Internal$Model$asColumn = 1;
var $mdgriffith$elm_ui$Internal$Model$Attr = function (a) {
	return {$: 1, a: a};
};
var $mdgriffith$elm_ui$Internal$Model$htmlClass = function (cls) {
	return $mdgriffith$elm_ui$Internal$Model$Attr(
		$elm$html$Html$Attributes$class(cls));
};
var $mdgriffith$elm_ui$Element$column = F2(
	function (attrs, children) {
		return A4(
			$mdgriffith$elm_ui$Internal$Model$element,
			$mdgriffith$elm_ui$Internal$Model$asColumn,
			$mdgriffith$elm_ui$Internal$Model$div,
			A2(
				$elm$core$List$cons,
				$mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.dz + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.av)),
				A2(
					$elm$core$List$cons,
					$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$shrink),
					A2(
						$elm$core$List$cons,
						$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$shrink),
						attrs))),
			$mdgriffith$elm_ui$Internal$Model$Unkeyed(children));
	});
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
var $mdgriffith$elm_ui$Internal$Model$PaddingStyle = F5(
	function (a, b, c, d, e) {
		return {$: 7, a: a, b: b, c: c, d: d, e: e};
	});
var $mdgriffith$elm_ui$Internal$Flag$padding = $mdgriffith$elm_ui$Internal$Flag$flag(2);
var $mdgriffith$elm_ui$Internal$Model$paddingName = F4(
	function (top, right, bottom, left) {
		return 'pad-' + ($elm$core$String$fromInt(top) + ('-' + ($elm$core$String$fromInt(right) + ('-' + ($elm$core$String$fromInt(bottom) + ('-' + $elm$core$String$fromInt(left)))))));
	});
var $mdgriffith$elm_ui$Element$paddingEach = function (_v0) {
	var left = _v0.cs;
	var bottom = _v0.b3;
	var right = _v0.cL;
	var top = _v0.cY;
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
var $elm$core$String$replace = F3(
	function (before, after, string) {
		return A2(
			$elm$core$String$join,
			after,
			A2($elm$core$String$split, before, string));
	});
var $mdgriffith$elm_ui$Internal$Model$FontSize = function (a) {
	return {$: 2, a: a};
};
var $mdgriffith$elm_ui$Internal$Flag$fontSize = $mdgriffith$elm_ui$Internal$Flag$flag(4);
var $mdgriffith$elm_ui$Element$Font$size = function (i) {
	return A2(
		$mdgriffith$elm_ui$Internal$Model$StyleClass,
		$mdgriffith$elm_ui$Internal$Flag$fontSize,
		$mdgriffith$elm_ui$Internal$Model$FontSize(i));
};
var $elm$core$Basics$sqrt = _Basics_sqrt;
var $author$project$Render$Elm$heading = F4(
	function (renderArgs, name, args, body) {
		var text = A2(
			$elm$core$Maybe$withDefault,
			'TITLE',
			$author$project$Render$Elm$getText(body));
		var level = $elm$core$String$length(
			A2(
				$elm$core$Maybe$withDefault,
				'',
				$elm$core$List$head(
					A2(
						$elm$core$List$filter,
						function (s) {
							return A2($elm$core$String$left, 1, s) === '#';
						},
						$elm$core$String$words(text)))));
		var prefix = A2($elm$core$String$repeat, level, '#');
		var title = A3($elm$core$String$replace, prefix, '', text);
		var factor = A2(
			$elm$core$Basics$min,
			1.8,
			$elm$core$Basics$sqrt(
				$elm$core$Basics$sqrt(level + 1)));
		var fontSize = $elm$core$Basics$round(24 / factor);
		var headerPadding = $mdgriffith$elm_ui$Element$paddingEach(
			{
				b3: 0,
				cs: 0,
				cL: 0,
				cY: $elm$core$Basics$round(12 / factor)
			});
		return A2(
			$mdgriffith$elm_ui$Element$column,
			_List_fromArray(
				[
					$mdgriffith$elm_ui$Element$Font$size(fontSize),
					headerPadding
				]),
			_List_fromArray(
				[
					$mdgriffith$elm_ui$Element$text(title)
				]));
	});
var $mdgriffith$elm_ui$Internal$Model$Empty = {$: 3};
var $mdgriffith$elm_ui$Element$none = $mdgriffith$elm_ui$Internal$Model$Empty;
var $author$project$Render$Elm$hide = F4(
	function (renderArgs, _v0, _v1, body) {
		return $mdgriffith$elm_ui$Element$none;
	});
var $mdgriffith$elm_ui$Internal$Model$AlignX = function (a) {
	return {$: 6, a: a};
};
var $mdgriffith$elm_ui$Internal$Model$Left = 0;
var $mdgriffith$elm_ui$Element$alignLeft = $mdgriffith$elm_ui$Internal$Model$AlignX(0);
var $mdgriffith$elm_ui$Internal$Model$Right = 2;
var $mdgriffith$elm_ui$Element$alignRight = $mdgriffith$elm_ui$Internal$Model$AlignX(2);
var $mdgriffith$elm_ui$Internal$Model$CenterX = 1;
var $mdgriffith$elm_ui$Element$centerX = $mdgriffith$elm_ui$Internal$Model$AlignX(1);
var $mdgriffith$elm_ui$Internal$Model$Fill = function (a) {
	return {$: 2, a: a};
};
var $mdgriffith$elm_ui$Element$fill = $mdgriffith$elm_ui$Internal$Model$Fill(1);
var $author$project$Render$Elm$getText2 = function (element) {
	switch (element.$) {
		case 0:
			var s = element.a;
			return s;
		case 2:
			var list = element.a;
			return A2(
				$elm$core$String$join,
				' ',
				A2($elm$core$List$map, $author$project$Render$Elm$getText2, list));
		default:
			return '';
	}
};
var $elm$html$Html$Attributes$alt = $elm$html$Html$Attributes$stringProperty('alt');
var $elm$html$Html$Attributes$src = function (url) {
	return A2(
		$elm$html$Html$Attributes$stringProperty,
		'src',
		_VirtualDom_noJavaScriptOrHtmlUri(url));
};
var $mdgriffith$elm_ui$Element$image = F2(
	function (attrs, _v0) {
		var description = _v0.dF;
		var src = _v0.eJ;
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
				$mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.dW),
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
var $author$project$Utility$Utility$pairFromList = function (strings) {
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
var $author$project$Utility$Utility$keyValueDict = function (strings_) {
	return $elm$core$Dict$fromList(
		$elm_community$maybe_extra$Maybe$Extra$values(
			A2(
				$elm$core$List$map,
				$author$project$Utility$Utility$pairFromList,
				A2(
					$elm$core$List$map,
					$elm$core$List$map($elm$core$String$trim),
					A2(
						$elm$core$List$map,
						$elm$core$String$split(':'),
						strings_)))));
};
var $mdgriffith$elm_ui$Internal$Model$Px = function (a) {
	return {$: 0, a: a};
};
var $mdgriffith$elm_ui$Element$px = $mdgriffith$elm_ui$Internal$Model$Px;
var $mdgriffith$elm_ui$Internal$Model$AsRow = 0;
var $mdgriffith$elm_ui$Internal$Model$asRow = 0;
var $mdgriffith$elm_ui$Element$row = F2(
	function (attrs, children) {
		return A4(
			$mdgriffith$elm_ui$Internal$Model$element,
			$mdgriffith$elm_ui$Internal$Model$asRow,
			$mdgriffith$elm_ui$Internal$Model$div,
			A2(
				$elm$core$List$cons,
				$mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.av + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.U)),
				A2(
					$elm$core$List$cons,
					$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$shrink),
					A2(
						$elm$core$List$cons,
						$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$shrink),
						attrs))),
			$mdgriffith$elm_ui$Internal$Model$Unkeyed(children));
	});
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
var $author$project$Render$Elm$image = F4(
	function (renderArgs, name, _v0, body) {
		var displayWidth = renderArgs.ar;
		var args_ = $elm$core$String$words(
			$author$project$Render$Elm$getText2(body));
		var url = A2(
			$elm$core$Maybe$withDefault,
			'no-image',
			$elm$core$List$head(
				$elm$core$List$reverse(args_)));
		var args = A2(
			$elm$core$List$take,
			$elm$core$List$length(args_) - 1,
			args_);
		var dict = $author$project$Utility$Utility$keyValueDict(args);
		var description = A2(
			$elm$core$Maybe$withDefault,
			'',
			A2($elm$core$Dict$get, 'caption', dict));
		var placement = function () {
			var _v4 = A2($elm$core$Dict$get, 'placement', dict);
			if (_v4.$ === 1) {
				return $mdgriffith$elm_ui$Element$centerX;
			} else {
				switch (_v4.a) {
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
		var caption = function () {
			var _v3 = A2($elm$core$Dict$get, 'caption', dict);
			if (_v3.$ === 1) {
				return $mdgriffith$elm_ui$Element$none;
			} else {
				var c = _v3.a;
				return A2(
					$mdgriffith$elm_ui$Element$row,
					_List_fromArray(
						[
							placement,
							$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill)
						]),
					_List_fromArray(
						[
							A2(
							$mdgriffith$elm_ui$Element$el,
							_List_fromArray(
								[
									$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill)
								]),
							$mdgriffith$elm_ui$Element$text(c))
						]));
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
					{dF: description, eJ: url}),
					caption
				]));
	});
var $mdgriffith$elm_ui$Element$Font$italic = $mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.d4);
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
		var label = _v0.ax;
		var url = _v0.e9;
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
									$mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.aM + (' ' + ($mdgriffith$elm_ui$Internal$Style$classes.U + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.ct)))),
									attrs)))))),
			$mdgriffith$elm_ui$Internal$Model$Unkeyed(
				_List_fromArray(
					[label])));
	});
var $mdgriffith$elm_ui$Internal$Model$Describe = function (a) {
	return {$: 2, a: a};
};
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
var $author$project$Render$Elm$padLeft = function (element) {
	return A2(
		$mdgriffith$elm_ui$Element$paragraph,
		_List_Nil,
		_List_fromArray(
			[
				$mdgriffith$elm_ui$Element$text(' '),
				element
			]));
};
var $author$project$Render$Elm$link = F4(
	function (renderArgs, name, args, body) {
		var bodyStrings = function () {
			if (body.$ === 2) {
				var elements = body.a;
				return A2($elm$core$List$map, $author$project$Parser$AST$getText, elements);
			} else {
				return _List_fromArray(
					['missing', 'stuff']);
			}
		}();
		var _v0 = function () {
			if (bodyStrings.b) {
				if (bodyStrings.b.b) {
					var label_ = bodyStrings.a;
					var _v2 = bodyStrings.b;
					var url_ = _v2.a;
					var rest = _v2.b;
					return _Utils_Tuple2(label_, url_);
				} else {
					var url_ = bodyStrings.a;
					return _Utils_Tuple2(url_, url_);
				}
			} else {
				return _Utils_Tuple2('no label', 'https://nowhere.com');
			}
		}();
		var label = _v0.a;
		var url = _v0.b;
		return $author$project$Render$Elm$padLeft(
			A2(
				$mdgriffith$elm_ui$Element$newTabLink,
				_List_Nil,
				{
					ax: A2(
						$mdgriffith$elm_ui$Element$el,
						_List_fromArray(
							[
								$mdgriffith$elm_ui$Element$Font$color($author$project$Render$Elm$linkColor),
								$mdgriffith$elm_ui$Element$Font$italic
							]),
						$mdgriffith$elm_ui$Element$text(
							$author$project$Utility$Utility$unquote(label))),
					e9: url
				}));
	});
var $author$project$Parser$AST$map = F2(
	function (f, element) {
		switch (element.$) {
			case 0:
				var s = element.a;
				var meta = element.b;
				return A2(
					$author$project$Parser$AST$Text,
					f(s),
					meta);
			case 1:
				var name = element.a;
				var body__ = element.b;
				var meta = element.c;
				return A3(
					$author$project$Parser$AST$Element,
					name,
					A2($author$project$Parser$AST$map, f, body__),
					meta);
			case 2:
				var items = element.a;
				var meta = element.b;
				return A2(
					$author$project$Parser$AST$EList,
					A2(
						$elm$core$List$map,
						$author$project$Parser$AST$map(f),
						items),
					meta);
			default:
				return element;
		}
	});
var $author$project$Render$Elm$InlineMathMode = 0;
var $elm$core$Basics$composeL = F3(
	function (g, f, x) {
		return g(
			f(x));
	});
var $mdgriffith$elm_ui$Internal$Model$unstyled = A2($elm$core$Basics$composeL, $mdgriffith$elm_ui$Internal$Model$Unstyled, $elm$core$Basics$always);
var $mdgriffith$elm_ui$Element$html = $mdgriffith$elm_ui$Internal$Model$unstyled;
var $elm$json$Json$Encode$bool = _Json_wrap;
var $author$project$Render$Elm$isDisplayMathMode = function (displayMode) {
	if (!displayMode) {
		return false;
	} else {
		return true;
	}
};
var $elm$html$Html$node = $elm$virtual_dom$VirtualDom$node;
var $elm$html$Html$Attributes$property = $elm$virtual_dom$VirtualDom$property;
var $author$project$Render$Elm$mathText_ = F3(
	function (displayMode, selectedId, content) {
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
var $elm$virtual_dom$VirtualDom$style = _VirtualDom_style;
var $elm$html$Html$Attributes$style = $elm$virtual_dom$VirtualDom$style;
var $author$project$Render$Elm$mathText = F3(
	function (renderArgs, displayMode, content) {
		return $mdgriffith$elm_ui$Element$html(
			A3(
				$elm$html$Html$Keyed$node,
				'span',
				_List_fromArray(
					[
						A2($elm$html$Html$Attributes$style, 'margin-left', '6px')
					]),
				_List_fromArray(
					[
						_Utils_Tuple2(
						$elm$core$String$fromInt(renderArgs.aO),
						A3($author$project$Render$Elm$mathText_, displayMode, renderArgs.bM, content))
					])));
	});
var $author$project$Render$Elm$math2 = F4(
	function (renderArgs, name, args, body) {
		return A3(
			$author$project$Render$Elm$mathText,
			renderArgs,
			0,
			$author$project$Render$Elm$getText2(body));
	});
var $author$project$Render$Elm$DisplayMathMode = 1;
var $author$project$Parser$AST$toStringList = function (element) {
	toStringList:
	while (true) {
		switch (element.$) {
			case 0:
				var str = element.a;
				return _List_fromArray(
					[str]);
			case 1:
				var body__ = element.b;
				var $temp$element = body__;
				element = $temp$element;
				continue toStringList;
			case 2:
				var elements = element.a;
				return A2($elm$core$List$map, $author$project$Parser$AST$getText, elements);
			case 3:
				return _List_fromArray(
					['problems']);
			case 4:
				var a = element.c;
				var b = element.d;
				return _List_fromArray(
					[a, b]);
			default:
				return _List_fromArray(
					['empty']);
		}
	}
};
var $author$project$Parser$AST$stringContent = function (element) {
	return A2(
		$elm$core$String$join,
		' ',
		$author$project$Parser$AST$toStringList(element));
};
var $author$project$Render$Elm$mathblock = F4(
	function (rendArgs, name, args, body) {
		return A3(
			$author$project$Render$Elm$mathText,
			rendArgs,
			1,
			$author$project$Parser$AST$stringContent(body));
	});
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
var $author$project$Render$Elm$redColor = A3($mdgriffith$elm_ui$Element$rgb, 0.7, 0, 0);
var $author$project$Render$Elm$renderMath = F4(
	function (renderArgs, name, args, body) {
		var _v0 = $author$project$Render$Elm$getText(body);
		if (!_v0.$) {
			var content = _v0.a;
			return A3($author$project$Render$Elm$mathText, renderArgs, 0, content);
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
var $mdgriffith$elm_ui$Element$rgb255 = F3(
	function (red, green, blue) {
		return A4($mdgriffith$elm_ui$Internal$Model$Rgba, red / 255, green / 255, blue / 255, 1);
	});
var $mdgriffith$elm_ui$Element$Font$strike = $mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.eO);
var $author$project$Parser$AST$toList = function (element) {
	toList:
	while (true) {
		switch (element.$) {
			case 0:
				var str = element.a;
				return _List_fromArray(
					[element]);
			case 1:
				var body__ = element.b;
				var $temp$element = body__;
				element = $temp$element;
				continue toList;
			case 2:
				var elements = element.a;
				return elements;
			case 3:
				return _List_fromArray(
					[element]);
			case 4:
				var a = element.c;
				var b = element.d;
				return _List_fromArray(
					[element]);
			default:
				return _List_fromArray(
					[element]);
		}
	}
};
var $mdgriffith$elm_ui$Element$Font$underline = $mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.e7);
var $author$project$Render$Elm$violetColor = A3($mdgriffith$elm_ui$Element$rgb, 0.4, 0, 0.8);
var $author$project$Render$Elm$yellowColor = A3($mdgriffith$elm_ui$Element$rgb, 1.0, 1.0, 0);
var $author$project$Render$Elm$blue = F4(
	function (renderArgs, _v26, _v27, body) {
		return A2(
			$mdgriffith$elm_ui$Element$el,
			_List_fromArray(
				[
					$mdgriffith$elm_ui$Element$Font$color($author$project$Render$Elm$blueColor)
				]),
			A2($author$project$Render$Elm$render, renderArgs, body));
	});
var $author$project$Render$Elm$bold = F4(
	function (renderArgs, _v24, _v25, body) {
		return A2(
			$mdgriffith$elm_ui$Element$el,
			_List_fromArray(
				[$mdgriffith$elm_ui$Element$Font$bold]),
			A2($author$project$Render$Elm$render, renderArgs, body));
	});
var $author$project$Render$Elm$error = F4(
	function (renderArgs, _v22, _v23, body) {
		return A2(
			$mdgriffith$elm_ui$Element$paragraph,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$mdgriffith$elm_ui$Element$el,
					_List_fromArray(
						[
							$mdgriffith$elm_ui$Element$Font$color($author$project$Render$Elm$redColor),
							A2($mdgriffith$elm_ui$Element$paddingXY, 4, 4),
							$mdgriffith$elm_ui$Element$Background$color(
							A3($mdgriffith$elm_ui$Element$rgb255, 242, 199, 226))
						]),
					A2($author$project$Render$Elm$render, renderArgs, body)),
					A2(
					$mdgriffith$elm_ui$Element$el,
					_List_fromArray(
						[
							A2($mdgriffith$elm_ui$Element$paddingXY, 2, 4)
						]),
					$mdgriffith$elm_ui$Element$text(' '))
				]));
	});
var $author$project$Render$Elm$fontRGB = F4(
	function (renderArgs, _v19, _v20, body) {
		var textArgs = A2(
			$elm$core$List$map,
			$author$project$Parser$AST$map(
				function (x) {
					return ' ' + x;
				}),
			A2(
				$elm$core$List$drop,
				3,
				$author$project$Parser$AST$toList(body)));
		var colorArgs = A2(
			$elm$core$List$take,
			3,
			$author$project$Parser$AST$toStringList(body));
		var _v21 = $author$project$Render$Elm$convertRGB(colorArgs);
		if (_v21.$ === 1) {
			return A2(
				$mdgriffith$elm_ui$Element$el,
				_List_fromArray(
					[
						$mdgriffith$elm_ui$Element$Font$color($author$project$Render$Elm$redColor)
					]),
				$mdgriffith$elm_ui$Element$text('Bad RGB args'));
		} else {
			var r = _v21.a.cI;
			var b = _v21.a.b_;
			var g = _v21.a.ce;
			return A2(
				$mdgriffith$elm_ui$Element$paragraph,
				_List_fromArray(
					[
						$mdgriffith$elm_ui$Element$Font$color(
						A3($mdgriffith$elm_ui$Element$rgb255, r, g, b)),
						A2($mdgriffith$elm_ui$Element$paddingXY, 4, 2)
					]),
				A2(
					$elm$core$List$map,
					$author$project$Render$Elm$render(renderArgs),
					textArgs));
		}
	});
var $author$project$Render$Elm$gray = F4(
	function (renderArgs, _v17, _v18, body) {
		return A2(
			$mdgriffith$elm_ui$Element$el,
			_List_fromArray(
				[
					$mdgriffith$elm_ui$Element$Font$color(
					A3($mdgriffith$elm_ui$Element$rgb, 0.55, 0.55, 0.55))
				]),
			A2($author$project$Render$Elm$render, renderArgs, body));
	});
var $author$project$Render$Elm$highlight = F4(
	function (renderArgs, _v15, _v16, body) {
		return A2(
			$mdgriffith$elm_ui$Element$el,
			_List_fromArray(
				[
					$mdgriffith$elm_ui$Element$Background$color($author$project$Render$Elm$yellowColor),
					A2($mdgriffith$elm_ui$Element$paddingXY, 4, 2)
				]),
			A2($author$project$Render$Elm$render, renderArgs, body));
	});
var $author$project$Render$Elm$italic = F4(
	function (renderArgs, _v13, _v14, body) {
		return A2(
			$mdgriffith$elm_ui$Element$el,
			_List_fromArray(
				[$mdgriffith$elm_ui$Element$Font$italic]),
			A2($author$project$Render$Elm$render, renderArgs, body));
	});
var $author$project$Render$Elm$item = F4(
	function (renderArgs, name, args, body) {
		return A2(
			$mdgriffith$elm_ui$Element$el,
			_List_fromArray(
				[
					$mdgriffith$elm_ui$Element$paddingEach(
					{b3: 0, cs: 24, cL: 0, cY: 0})
				]),
			A2($author$project$Render$Elm$render, renderArgs, body));
	});
var $author$project$Render$Elm$quoted = F4(
	function (renderArgs, _v11, _v12, body) {
		return A2($author$project$Render$Elm$render, renderArgs, body);
	});
var $author$project$Render$Elm$red = F4(
	function (renderArgs, _v9, _v10, body) {
		return A2(
			$mdgriffith$elm_ui$Element$el,
			_List_fromArray(
				[
					$mdgriffith$elm_ui$Element$Font$color($author$project$Render$Elm$redColor)
				]),
			A2($author$project$Render$Elm$render, renderArgs, body));
	});
var $author$project$Render$Elm$render = F2(
	function (renderArgs, element) {
		switch (element.$) {
			case 0:
				var str = element.a;
				return A2(
					$mdgriffith$elm_ui$Element$el,
					_List_Nil,
					$mdgriffith$elm_ui$Element$text(str));
			case 1:
				if (!element.a.$) {
					var name = element.a.a;
					var body = element.b;
					return A4($author$project$Render$Elm$renderWithDictionary, renderArgs, name, _List_Nil, body);
				} else {
					var _v8 = element.a;
					var body = element.b;
					return A2(
						$mdgriffith$elm_ui$Element$el,
						_List_Nil,
						$mdgriffith$elm_ui$Element$text('Undefined element'));
				}
			case 2:
				var elements = element.a;
				return A2(
					$mdgriffith$elm_ui$Element$paragraph,
					_List_Nil,
					A2(
						$elm$core$List$map,
						A2(
							$elm$core$Basics$composeR,
							$author$project$Parser$AST$map(
								function (s) {
									return ' ' + s;
								}),
							$author$project$Render$Elm$render(renderArgs)),
						elements));
			case 3:
				var str = element.b;
				return A2(
					$mdgriffith$elm_ui$Element$el,
					_List_Nil,
					$mdgriffith$elm_ui$Element$text('PROBLEM: ' + str));
			case 4:
				var message = element.c;
				var errorText = element.d;
				return A2(
					$mdgriffith$elm_ui$Element$paragraph,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							$mdgriffith$elm_ui$Element$el,
							_List_fromArray(
								[
									$mdgriffith$elm_ui$Element$Background$color(
									A3($mdgriffith$elm_ui$Element$rgb255, 255, 255, 0))
								]),
							$mdgriffith$elm_ui$Element$text(errorText)),
							A2(
							$mdgriffith$elm_ui$Element$el,
							_List_fromArray(
								[
									$mdgriffith$elm_ui$Element$Font$bold,
									$mdgriffith$elm_ui$Element$Font$color(
									A3($mdgriffith$elm_ui$Element$rgb255, 0, 0, 200))
								]),
							$mdgriffith$elm_ui$Element$text(' ' + message))
						]));
			default:
				return A2(
					$mdgriffith$elm_ui$Element$el,
					_List_Nil,
					$mdgriffith$elm_ui$Element$text('EMPTY'));
		}
	});
var $author$project$Render$Elm$renderWithDictionary = F4(
	function (renderArgs, name, args, body) {
		var _v6 = A2(
			$elm$core$Dict$get,
			name,
			$author$project$Render$Elm$cyclic$renderElementDict());
		if (!_v6.$) {
			var f = _v6.a;
			return A4(f, renderArgs, name, args, body);
		} else {
			return A2(
				$mdgriffith$elm_ui$Element$paragraph,
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
								$mdgriffith$elm_ui$Element$Font$color(
								A3($mdgriffith$elm_ui$Element$rgb255, 200, 0, 0)),
								$mdgriffith$elm_ui$Element$Font$bold
							]),
						$mdgriffith$elm_ui$Element$text(name)),
						A2(
						$mdgriffith$elm_ui$Element$el,
						_List_Nil,
						$mdgriffith$elm_ui$Element$text(' ')),
						A2($author$project$Render$Elm$render, renderArgs, body)
					]));
		}
	});
var $author$project$Render$Elm$strike = F4(
	function (renderArgs, _v4, _v5, body) {
		return A2(
			$mdgriffith$elm_ui$Element$el,
			_List_fromArray(
				[$mdgriffith$elm_ui$Element$Font$strike]),
			A2($author$project$Render$Elm$render, renderArgs, body));
	});
var $author$project$Render$Elm$underline = F4(
	function (renderArgs, _v2, _v3, body) {
		return A2(
			$mdgriffith$elm_ui$Element$el,
			_List_fromArray(
				[$mdgriffith$elm_ui$Element$Font$underline]),
			A2($author$project$Render$Elm$render, renderArgs, body));
	});
var $author$project$Render$Elm$violet = F4(
	function (renderArgs, _v0, _v1, body) {
		return A2(
			$mdgriffith$elm_ui$Element$el,
			_List_fromArray(
				[
					$mdgriffith$elm_ui$Element$Font$color($author$project$Render$Elm$violetColor)
				]),
			A2($author$project$Render$Elm$render, renderArgs, body));
	});
function $author$project$Render$Elm$cyclic$renderElementDict() {
	return $elm$core$Dict$fromList(
		_List_fromArray(
			[
				_Utils_Tuple2('i', $author$project$Render$Elm$italic),
				_Utils_Tuple2('b', $author$project$Render$Elm$bold),
				_Utils_Tuple2('strike', $author$project$Render$Elm$strike),
				_Utils_Tuple2('underline', $author$project$Render$Elm$underline),
				_Utils_Tuple2('hide', $author$project$Render$Elm$hide),
				_Utils_Tuple2('highlight', $author$project$Render$Elm$highlight),
				_Utils_Tuple2('highlightRGB', $author$project$Render$Elm$highlight),
				_Utils_Tuple2('fontRGB', $author$project$Render$Elm$fontRGB),
				_Utils_Tuple2('red', $author$project$Render$Elm$red),
				_Utils_Tuple2('error', $author$project$Render$Elm$error),
				_Utils_Tuple2('blue', $author$project$Render$Elm$blue),
				_Utils_Tuple2('violet', $author$project$Render$Elm$violet),
				_Utils_Tuple2('gray', $author$project$Render$Elm$gray),
				_Utils_Tuple2('code', $author$project$Render$Elm$code),
				_Utils_Tuple2('quoted', $author$project$Render$Elm$quoted),
				_Utils_Tuple2('math2', $author$project$Render$Elm$math2),
				_Utils_Tuple2('m', $author$project$Render$Elm$renderMath),
				_Utils_Tuple2('mathblock', $author$project$Render$Elm$mathblock),
				_Utils_Tuple2('mb', $author$project$Render$Elm$mathblock),
				_Utils_Tuple2('link', $author$project$Render$Elm$link),
				_Utils_Tuple2('image', $author$project$Render$Elm$image),
				_Utils_Tuple2('heading', $author$project$Render$Elm$heading),
				_Utils_Tuple2('item', $author$project$Render$Elm$item)
			]));
}
var $author$project$Render$Elm$renderElementDict = $author$project$Render$Elm$cyclic$renderElementDict();
$author$project$Render$Elm$cyclic$renderElementDict = function () {
	return $author$project$Render$Elm$renderElementDict;
};
var $author$project$Render$Elm$renderList = F2(
	function (renderArgs, list) {
		return A2(
			$elm$core$List$map,
			$author$project$Render$Elm$render(renderArgs),
			list);
	});
var $author$project$Main$render = F2(
	function (k, str) {
		return A2(
			$author$project$Render$Elm$renderList,
			$author$project$Main$renderArgs,
			A2($author$project$Parser$Driver$parse, k, str));
	});
var $author$project$Main$init = function (flags) {
	return _Utils_Tuple2(
		{
			K: 0,
			X: $author$project$Main$initialText,
			aY: A2($author$project$Main$render, 0, $author$project$Main$initialText),
			bU: flags.br,
			c3: flags.ar
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
							K: model.K + 1,
							X: str,
							aY: A2($author$project$Main$render, model.K, str)
						}),
					$elm$core$Platform$Cmd$none);
			case 2:
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							K: model.K + 1,
							X: '',
							aY: A2($author$project$Main$render, model.K, '')
						}),
					$elm$core$Platform$Cmd$none);
			default:
				var text = msg.a;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{X: text}),
					$elm$core$Platform$Cmd$none);
		}
	});
var $author$project$Main$bgGray = function (g) {
	return $mdgriffith$elm_ui$Element$Background$color(
		A3($mdgriffith$elm_ui$Element$rgb, g, g, g));
};
var $mdgriffith$elm_ui$Internal$Flag$overflow = $mdgriffith$elm_ui$Internal$Flag$flag(20);
var $mdgriffith$elm_ui$Element$clipX = A2($mdgriffith$elm_ui$Internal$Model$Class, $mdgriffith$elm_ui$Internal$Flag$overflow, $mdgriffith$elm_ui$Internal$Style$classes.dx);
var $mdgriffith$elm_ui$Element$clipY = A2($mdgriffith$elm_ui$Internal$Model$Class, $mdgriffith$elm_ui$Internal$Flag$overflow, $mdgriffith$elm_ui$Internal$Style$classes.dy);
var $mdgriffith$elm_ui$Internal$Model$FocusStyleOption = function (a) {
	return {$: 1, a: a};
};
var $mdgriffith$elm_ui$Element$focusStyle = $mdgriffith$elm_ui$Internal$Model$FocusStyleOption;
var $mdgriffith$elm_ui$Internal$Model$OnlyDynamic = F2(
	function (a, b) {
		return {$: 2, a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Model$StaticRootAndDynamic = F2(
	function (a, b) {
		return {$: 1, a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Model$AllowHover = 1;
var $mdgriffith$elm_ui$Internal$Model$Layout = 0;
var $mdgriffith$elm_ui$Internal$Model$focusDefaultStyle = {
	di: $elm$core$Maybe$Nothing,
	dm: $elm$core$Maybe$Nothing,
	eC: $elm$core$Maybe$Just(
		{
			b1: 0,
			b6: A4($mdgriffith$elm_ui$Internal$Model$Rgba, 155 / 255, 203 / 255, 1, 1),
			a: _Utils_Tuple2(0, 0),
			cR: 3
		})
};
var $mdgriffith$elm_ui$Internal$Model$optionsToRecord = function (options) {
	var combine = F2(
		function (opt, record) {
			switch (opt.$) {
				case 0:
					var hoverable = opt.a;
					var _v4 = record.dU;
					if (_v4.$ === 1) {
						return _Utils_update(
							record,
							{
								dU: $elm$core$Maybe$Just(hoverable)
							});
					} else {
						return record;
					}
				case 1:
					var focusStyle = opt.a;
					var _v5 = record.dO;
					if (_v5.$ === 1) {
						return _Utils_update(
							record,
							{
								dO: $elm$core$Maybe$Just(focusStyle)
							});
					} else {
						return record;
					}
				default:
					var renderMode = opt.a;
					var _v6 = record.d7;
					if (_v6.$ === 1) {
						return _Utils_update(
							record,
							{
								d7: $elm$core$Maybe$Just(renderMode)
							});
					} else {
						return record;
					}
			}
		});
	var andFinally = function (record) {
		return {
			dO: function () {
				var _v0 = record.dO;
				if (_v0.$ === 1) {
					return $mdgriffith$elm_ui$Internal$Model$focusDefaultStyle;
				} else {
					var focusable = _v0.a;
					return focusable;
				}
			}(),
			dU: function () {
				var _v1 = record.dU;
				if (_v1.$ === 1) {
					return 1;
				} else {
					var hoverable = _v1.a;
					return hoverable;
				}
			}(),
			d7: function () {
				var _v2 = record.d7;
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
			{dO: $elm$core$Maybe$Nothing, dU: $elm$core$Maybe$Nothing, d7: $elm$core$Maybe$Nothing},
			options));
};
var $mdgriffith$elm_ui$Internal$Model$toHtml = F2(
	function (mode, el) {
		switch (el.$) {
			case 0:
				var html = el.a;
				return html($mdgriffith$elm_ui$Internal$Model$asEl);
			case 1:
				var html = el.a.dV;
				var styles = el.a.cW;
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
			var _v0 = options.d7;
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
var $mdgriffith$elm_ui$Internal$Model$SansSerif = {$: 1};
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
		var options = _v0.en;
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
							[$mdgriffith$elm_ui$Internal$Style$classes.ew, $mdgriffith$elm_ui$Internal$Style$classes.dg, $mdgriffith$elm_ui$Internal$Style$classes.eD]))),
				_Utils_ap($mdgriffith$elm_ui$Internal$Model$rootStyle, attrs)),
			child);
	});
var $author$project$Main$appHeight_ = function (model) {
	return model.bU - 300;
};
var $author$project$Main$panelWidth_ = 520;
var $author$project$Main$appWidth_ = (2 * $author$project$Main$panelWidth_) + 15;
var $author$project$Main$LoadDocumentText = function (a) {
	return {$: 3, a: a};
};
var $mdgriffith$elm_ui$Internal$Model$Button = {$: 8};
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
var $mdgriffith$elm_ui$Element$pointer = A2($mdgriffith$elm_ui$Internal$Model$Class, $mdgriffith$elm_ui$Internal$Flag$cursor, $mdgriffith$elm_ui$Internal$Style$classes.dC);
var $mdgriffith$elm_ui$Element$Input$space = ' ';
var $elm$html$Html$Attributes$tabindex = function (n) {
	return A2(
		_VirtualDom_attribute,
		'tabIndex',
		$elm$core$String$fromInt(n));
};
var $mdgriffith$elm_ui$Element$Input$button = F2(
	function (attrs, _v0) {
		var label = _v0.ax;
		var onPress = _v0.aU;
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
						$mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.aM + (' ' + ($mdgriffith$elm_ui$Internal$Style$classes.U + (' ' + ($mdgriffith$elm_ui$Internal$Style$classes.eB + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.cx)))))),
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
var $mdgriffith$elm_ui$Internal$Model$Active = 2;
var $mdgriffith$elm_ui$Internal$Model$PseudoSelector = F2(
	function (a, b) {
		return {$: 11, a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Flag$active = $mdgriffith$elm_ui$Internal$Flag$flag(32);
var $mdgriffith$elm_ui$Internal$Model$AlignY = function (a) {
	return {$: 5, a: a};
};
var $mdgriffith$elm_ui$Internal$Model$Nearby = F2(
	function (a, b) {
		return {$: 9, a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Model$TransformComponent = F2(
	function (a, b) {
		return {$: 10, a: a, b: b};
	});
var $elm$virtual_dom$VirtualDom$map = _VirtualDom_map;
var $mdgriffith$elm_ui$Internal$Model$map = F2(
	function (fn, el) {
		switch (el.$) {
			case 1:
				var styled = el.a;
				return $mdgriffith$elm_ui$Internal$Model$Styled(
					{
						dV: F2(
							function (add, context) {
								return A2(
									$elm$virtual_dom$VirtualDom$map,
									fn,
									A2(styled.dV, add, context));
							}),
						cW: styled.cW
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
var $elm$virtual_dom$VirtualDom$mapAttribute = _VirtualDom_mapAttribute;
var $mdgriffith$elm_ui$Internal$Model$mapAttrFromStyle = F2(
	function (fn, attr) {
		switch (attr.$) {
			case 0:
				return $mdgriffith$elm_ui$Internal$Model$NoAttribute;
			case 2:
				var description = attr.a;
				return $mdgriffith$elm_ui$Internal$Model$Describe(description);
			case 6:
				var x = attr.a;
				return $mdgriffith$elm_ui$Internal$Model$AlignX(x);
			case 5:
				var y = attr.a;
				return $mdgriffith$elm_ui$Internal$Model$AlignY(y);
			case 7:
				var x = attr.a;
				return $mdgriffith$elm_ui$Internal$Model$Width(x);
			case 8:
				var x = attr.a;
				return $mdgriffith$elm_ui$Internal$Model$Height(x);
			case 3:
				var x = attr.a;
				var y = attr.b;
				return A2($mdgriffith$elm_ui$Internal$Model$Class, x, y);
			case 4:
				var flag = attr.a;
				var style = attr.b;
				return A2($mdgriffith$elm_ui$Internal$Model$StyleClass, flag, style);
			case 9:
				var location = attr.a;
				var elem = attr.b;
				return A2(
					$mdgriffith$elm_ui$Internal$Model$Nearby,
					location,
					A2($mdgriffith$elm_ui$Internal$Model$map, fn, elem));
			case 1:
				var htmlAttr = attr.a;
				return $mdgriffith$elm_ui$Internal$Model$Attr(
					A2($elm$virtual_dom$VirtualDom$mapAttribute, fn, htmlAttr));
			default:
				var fl = attr.a;
				var trans = attr.b;
				return A2($mdgriffith$elm_ui$Internal$Model$TransformComponent, fl, trans);
		}
	});
var $mdgriffith$elm_ui$Internal$Model$removeNever = function (style) {
	return A2($mdgriffith$elm_ui$Internal$Model$mapAttrFromStyle, $elm$core$Basics$never, style);
};
var $mdgriffith$elm_ui$Internal$Model$unwrapDecsHelper = F2(
	function (attr, _v0) {
		var styles = _v0.a;
		var trans = _v0.b;
		var _v1 = $mdgriffith$elm_ui$Internal$Model$removeNever(attr);
		switch (_v1.$) {
			case 4:
				var style = _v1.b;
				return _Utils_Tuple2(
					A2($elm$core$List$cons, style, styles),
					trans);
			case 10:
				var flag = _v1.a;
				var component = _v1.b;
				return _Utils_Tuple2(
					styles,
					A2($mdgriffith$elm_ui$Internal$Model$composeTransformation, trans, component));
			default:
				return _Utils_Tuple2(styles, trans);
		}
	});
var $mdgriffith$elm_ui$Internal$Model$unwrapDecorations = function (attrs) {
	var _v0 = A3(
		$elm$core$List$foldl,
		$mdgriffith$elm_ui$Internal$Model$unwrapDecsHelper,
		_Utils_Tuple2(_List_Nil, $mdgriffith$elm_ui$Internal$Model$Untransformed),
		attrs);
	var styles = _v0.a;
	var transform = _v0.b;
	return A2(
		$elm$core$List$cons,
		$mdgriffith$elm_ui$Internal$Model$Transform(transform),
		styles);
};
var $mdgriffith$elm_ui$Element$mouseDown = function (decs) {
	return A2(
		$mdgriffith$elm_ui$Internal$Model$StyleClass,
		$mdgriffith$elm_ui$Internal$Flag$active,
		A2(
			$mdgriffith$elm_ui$Internal$Model$PseudoSelector,
			2,
			$mdgriffith$elm_ui$Internal$Model$unwrapDecorations(decs)));
};
var $author$project$Main$buttonStyle2 = _List_fromArray(
	[
		$mdgriffith$elm_ui$Element$Font$color(
		A3($mdgriffith$elm_ui$Element$rgb255, 255, 255, 255)),
		$mdgriffith$elm_ui$Element$Background$color(
		A3($mdgriffith$elm_ui$Element$rgb255, 0, 0, 180)),
		A2($mdgriffith$elm_ui$Element$paddingXY, 15, 8),
		$mdgriffith$elm_ui$Element$mouseDown(
		_List_fromArray(
			[
				$mdgriffith$elm_ui$Element$Background$color(
				A3($mdgriffith$elm_ui$Element$rgb255, 180, 180, 255))
			]))
	]);
var $mdgriffith$elm_ui$Internal$Model$CenterY = 1;
var $mdgriffith$elm_ui$Element$centerY = $mdgriffith$elm_ui$Internal$Model$AlignY(1);
var $author$project$Data$Article$text = '\n\n\n\n\n\n\n[image caption:Camperdown-Prospect-Park-Brooklyn https://upload.wikimedia.org/wikipedia/commons/2/20/Camperdown_Elm_Prospect_Park_Brooklyn.jpg]\n\n# Fault-Tolerant Parsing\n\nThe goal of this article is to explain  how one can implement a fault-tolerant parser for a simple markup language which we will call [b L1].\nTo put the notion of fault-tolerance in context, recall that the task of a  parser is to read source text in some language, then convert it to an abstract syntax tree (AST).  Classical parsers act like a dumb pipe, consuming the source text and producing the AST in one go, but bailing out when an error is encountered. Such behavior is not suited for interactive language editors, be they for programming languages or markup languages.  In an interactive environoment, the source text will pass in and out of error states, potentially  on each keystroke. A fault-tolerant parser should in all cases return an abstract syntax tree that makes sense.  This means that (a) most of the text is parsed as one expects, e.g., a new error at the halfway point does not necessarily invalidate the latter half which had already been correctly parsed in previous edits; (b) error text is converted into a valid node of the AST which displays the text in question, signals that it is an error, and gives some insight into the nature of the error.\n\n\nThe strategy for fault-tolerant parsing discussed here is based on Matt Griffith\'s project [link mdgriffith/elm-markup https://package.elm-lang.org/packages/mdgriffith/elm-markup/latest/], in which he introduced the notion of [i TextCursor].  Building on Griffith\'s work, the ed-tech company [link Brillant.org https://brilliant.org] developed a configurable fault-tolerant parser, Camperdown, for its internal authoring tools.\n\nThe Camperdown parser can be configured for applications ranging from Markdown-style languages to a kind of mini-LaTeX to interactive story-telling (see XXX).  The aim here is to present the main ideas of Camperdown in a simple yet nontrivial context that will be helpful both on its own and as a warmup to understanding and using Camperdown itself. The  codebase for [b L1] is small, with the core `textCursor` module, the largest of the bunch,  weighing in at 400 lines of code and the others at less than half that. Here are a few sentences in [b L1]:\n\n[item (a) `This [highlight is [b not] a very good] test.`]\n\n[item (b) `Pythagoras said that $a^2 + b^2 = c^2$. Wow! What a dude!!`]\n\n\nThese are rendered\n\n[item (a) This [highlight is [b not] a very good] test.]\n\n[item (b) Pythagoras said that $a^2 + b^2 = c^2$. Wow! What a dude!!]\n\n\n\n## The Main Ideas\n\nThe two strategies that go into designing a fault-tolerant parser [i isolation] and the use a [i TextCursor] to scan the source text in such a way even if errors are detected, a valid AST can be constructed.\n\n### Isolation\n\nA first strategy is to divide the document into pieces in some way, e.g. A, B, C, D, ... that can be parsed separately.  Then an error in B, for example, will not affect the parsing of the subsequent parts C, D, etc.  This strategy has another advantage.  If the user edits part B, only that part need be re-parsed and re-rendered.  This kind of partitioning of the work provides large speed improvements.  The goal is always the same — instant feedback for the user.\n\nFor [b L1], we use an especially simple algorithm for partitioning the text: pieces are contiguous set of lines separated by two or more newlines.  One can imagine more complex schemes, but this one will do here.\n\n\n\n### Text Cursor\n\nTo explain the  scanning/cursor idea, let us consider the two snippets\n\n(a) `This [i is] a [b real] test!`\n\nand\n\n(b) `This [i is a [b real] test!`\n\nThey are rendered as\n\nThis [i is] a [b real] test!\n\nand\n\n(b) This [i is a [b real] test\n\nIn the second case the error is called out;  moreover, the word [i real] is\nstill rendered in bold.  Ergo, the parser was able to continue after the error, providing us with as good  a result as can be expected.\n\n### The Inner Workings (Happy Path)\n\nTo understand the scan/parse process, we consider an isomorphic but simpler example, the string `a [x b] [y c] d`.  As we scan from left to right, with the scannner head represented by `^`, we try to recognize and parse as man subunits as possible, keeping them ready in case they are needed to fit all the pieces of the puzzle together at a later time.  The first line in the image below is the starting state, with the pointer to the left of the data.  Unprocessed data is highlighted in green.  At step (1), the pointer moves to the right to just before the left bracket, which is one of the two delimiters in [b L1], The text `a` is saved in `cursor.text`, which is highlighted in yellow.  At step (2) the scanner has encountered an opening for an [b L1] element.  It knows that `a` is completely processed; it is therefore saved in `cursor.complete`, which is highlighted in blue.  At the same time, the  left bracket, which is in an unfulfilled state, is pushed onto the stack (magenta) for later use.\n\n[image   "data:image/png;base64,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" ]\n\nAt step (3), the pointer moves to the next delimiter, placing the intervening text in the `.content` field of the item on top of the stack.  At step (4) something new happens.  The parser recognizes the right bracket which can close the data on the top of the stack. It appends the right bracket to the content of the top of the stack, parses it, and pushes it the list `cursor.parsed` (cyan).  This is the POP operation.  In step (5), a blank space is moved into `cursor.text`.  Not so interesting.\n\nThe next move of the pointer brings us to an opening bracket.  We know what to do. PUSH in step (6), then ADD text in (7), and finally POP once again in (8). Note that the function of ADD depends on whether the stack is empty or not.  Thus in (9), unprocessed text is transferred to `cursor.text`.\n\n-\n\nThe stack in now empty, indicating no errors.\nThere is one last operation, COMMIT.  In the the case of an empty stack, its role is to put the various parts of the cursor in the correct order —\n\n:item `cursor.complete ++ cursor.parsed ++ (parse cursor.text)`\n\nThe very last element is a parsed version of `cursor.text`, and `++` is concatentation of lists.\n\n\n\n### The Inner Workings (Unhappy Path)\n\nOf course, it may happen that there are errors, as in the text\n\n:item `a [x b [y c] d`\n\nThe key fact is that the opening bracket of `[x b` was never closed.  There are multiple solutions to the problem of turnng this into valid text, among which are `a [x] b [y c] d` and `a [x b] [y c] d`.  We have to pick a solution and a general rule for finding it.  As it enters the commit phase, the parser knows the initial position of the never-closed  data `[x b`.  It can therefore assemble the following:\n\n:item `c.complete ++ c.parsed ++ ((c.stack)) ++ (parse c.text)`\n\nwhere `((c.stack))` means [i make a  valid element whose text comes from] `c.stack`.\n\n[image <img src="data:image/png;base64,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"]\n\n## References\n\n\n[link "Error recovery with parser combinators"  "https://eyalkalderon.com/blog/nom-error-recovery/"]\n\n\n\n';
var $author$project$Main$articleButton = A2(
	$mdgriffith$elm_ui$Element$Input$button,
	$author$project$Main$buttonStyle2,
	{
		ax: A2(
			$mdgriffith$elm_ui$Element$el,
			_List_fromArray(
				[
					$mdgriffith$elm_ui$Element$centerX,
					$mdgriffith$elm_ui$Element$centerY,
					$mdgriffith$elm_ui$Element$Font$size(14)
				]),
			$mdgriffith$elm_ui$Element$text('Article')),
		aU: $elm$core$Maybe$Just(
			$author$project$Main$LoadDocumentText($author$project$Data$Article$text))
	});
var $author$project$Main$ClearText = {$: 2};
var $author$project$Main$clearTextButton = A2(
	$mdgriffith$elm_ui$Element$Input$button,
	$author$project$Main$buttonStyle2,
	{
		ax: A2(
			$mdgriffith$elm_ui$Element$el,
			_List_fromArray(
				[
					$mdgriffith$elm_ui$Element$centerX,
					$mdgriffith$elm_ui$Element$centerY,
					$mdgriffith$elm_ui$Element$Font$size(14)
				]),
			$mdgriffith$elm_ui$Element$text('Clear')),
		aU: $elm$core$Maybe$Just($author$project$Main$ClearText)
	});
var $author$project$Main$exampleDocButton = A2(
	$mdgriffith$elm_ui$Element$Input$button,
	$author$project$Main$buttonStyle2,
	{
		ax: A2(
			$mdgriffith$elm_ui$Element$el,
			_List_fromArray(
				[
					$mdgriffith$elm_ui$Element$centerX,
					$mdgriffith$elm_ui$Element$centerY,
					$mdgriffith$elm_ui$Element$Font$size(14)
				]),
			$mdgriffith$elm_ui$Element$text('Examples')),
		aU: $elm$core$Maybe$Just(
			$author$project$Main$LoadDocumentText($author$project$Data$Example$text))
	});
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
							$mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.aQ),
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
							$mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.aQ),
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
							$mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.aQ),
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
							$mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.aQ),
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
var $mdgriffith$elm_ui$Element$clip = A2($mdgriffith$elm_ui$Internal$Model$Class, $mdgriffith$elm_ui$Internal$Flag$overflow, $mdgriffith$elm_ui$Internal$Style$classes.dw);
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
	return {b3: -box.b3, cs: -box.cs, cL: -box.cL, cY: -box.cY};
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
var $mdgriffith$elm_ui$Element$Input$redistributeOver = F4(
	function (isMultiline, stacked, attr, els) {
		switch (attr.$) {
			case 9:
				return _Utils_update(
					els,
					{
						b: A2($elm$core$List$cons, attr, els.b)
					});
			case 7:
				var width = attr.a;
				return $mdgriffith$elm_ui$Element$Input$isFill(width) ? _Utils_update(
					els,
					{
						i: A2($elm$core$List$cons, attr, els.i),
						X: A2($elm$core$List$cons, attr, els.X),
						b: A2($elm$core$List$cons, attr, els.b)
					}) : (stacked ? _Utils_update(
					els,
					{
						i: A2($elm$core$List$cons, attr, els.i)
					}) : _Utils_update(
					els,
					{
						b: A2($elm$core$List$cons, attr, els.b)
					}));
			case 8:
				var height = attr.a;
				return (!stacked) ? _Utils_update(
					els,
					{
						i: A2($elm$core$List$cons, attr, els.i),
						b: A2($elm$core$List$cons, attr, els.b)
					}) : ($mdgriffith$elm_ui$Element$Input$isFill(height) ? _Utils_update(
					els,
					{
						i: A2($elm$core$List$cons, attr, els.i),
						b: A2($elm$core$List$cons, attr, els.b)
					}) : ($mdgriffith$elm_ui$Element$Input$isPixel(height) ? _Utils_update(
					els,
					{
						b: A2($elm$core$List$cons, attr, els.b)
					}) : _Utils_update(
					els,
					{
						b: A2($elm$core$List$cons, attr, els.b)
					})));
			case 6:
				return _Utils_update(
					els,
					{
						i: A2($elm$core$List$cons, attr, els.i)
					});
			case 5:
				return _Utils_update(
					els,
					{
						i: A2($elm$core$List$cons, attr, els.i)
					});
			case 4:
				switch (attr.b.$) {
					case 5:
						var _v1 = attr.b;
						return _Utils_update(
							els,
							{
								i: A2($elm$core$List$cons, attr, els.i),
								X: A2($elm$core$List$cons, attr, els.X),
								b: A2($elm$core$List$cons, attr, els.b),
								as: A2($elm$core$List$cons, attr, els.as)
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
									C: A2($elm$core$List$cons, attr, els.C),
									b: A2($elm$core$List$cons, attr, els.b)
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
									C: A2($elm$core$List$cons, attr, els.C),
									X: A2(
										$elm$core$List$cons,
										newHeight,
										A2($elm$core$List$cons, newLineHeight, els.X)),
									b: A2($elm$core$List$cons, reducedVerticalPadding, els.b)
								});
						}
					case 6:
						var _v3 = attr.b;
						return _Utils_update(
							els,
							{
								C: A2($elm$core$List$cons, attr, els.C),
								b: A2($elm$core$List$cons, attr, els.b)
							});
					case 10:
						return _Utils_update(
							els,
							{
								C: A2($elm$core$List$cons, attr, els.C),
								b: A2($elm$core$List$cons, attr, els.b)
							});
					case 2:
						return _Utils_update(
							els,
							{
								i: A2($elm$core$List$cons, attr, els.i)
							});
					case 1:
						var _v4 = attr.b;
						return _Utils_update(
							els,
							{
								i: A2($elm$core$List$cons, attr, els.i)
							});
					default:
						var flag = attr.a;
						var cls = attr.b;
						return _Utils_update(
							els,
							{
								b: A2($elm$core$List$cons, attr, els.b)
							});
				}
			case 0:
				return els;
			case 1:
				var a = attr.a;
				return _Utils_update(
					els,
					{
						X: A2($elm$core$List$cons, attr, els.X)
					});
			case 2:
				return _Utils_update(
					els,
					{
						X: A2($elm$core$List$cons, attr, els.X)
					});
			case 3:
				return _Utils_update(
					els,
					{
						b: A2($elm$core$List$cons, attr, els.b)
					});
			default:
				return _Utils_update(
					els,
					{
						X: A2($elm$core$List$cons, attr, els.X)
					});
		}
	});
var $mdgriffith$elm_ui$Element$Input$redistribute = F3(
	function (isMultiline, stacked, attrs) {
		return function (redist) {
			return {
				C: $elm$core$List$reverse(redist.C),
				i: $elm$core$List$reverse(redist.i),
				X: $elm$core$List$reverse(redist.X),
				b: $elm$core$List$reverse(redist.b),
				as: $elm$core$List$reverse(redist.as)
			};
		}(
			A3(
				$elm$core$List$foldl,
				A2($mdgriffith$elm_ui$Element$Input$redistributeOver, isMultiline, stacked),
				{C: _List_Nil, i: _List_Nil, X: _List_Nil, b: _List_Nil, as: _List_Nil},
				attrs));
	});
var $mdgriffith$elm_ui$Element$Input$renderBox = function (_v0) {
	var left = _v0.cs;
	var bottom = _v0.b3;
	var right = _v0.cL;
	var top = _v0.cY;
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
							$mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.cx + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.er)),
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
var $mdgriffith$elm_ui$Element$scrollbarY = A2($mdgriffith$elm_ui$Internal$Model$Class, $mdgriffith$elm_ui$Internal$Flag$overflow, $mdgriffith$elm_ui$Internal$Style$classes.eA);
var $elm$html$Html$span = _VirtualDom_node('span');
var $elm$html$Html$Attributes$spellcheck = $elm$html$Html$Attributes$boolProperty('spellcheck');
var $mdgriffith$elm_ui$Element$Input$spellcheck = A2($elm$core$Basics$composeL, $mdgriffith$elm_ui$Internal$Model$Attr, $elm$html$Html$Attributes$spellcheck);
var $elm$html$Html$Attributes$type_ = $elm$html$Html$Attributes$stringProperty('type');
var $elm$html$Html$Attributes$value = $elm$html$Html$Attributes$stringProperty('value');
var $mdgriffith$elm_ui$Element$Input$value = A2($elm$core$Basics$composeL, $mdgriffith$elm_ui$Internal$Model$Attr, $elm$html$Html$Attributes$value);
var $mdgriffith$elm_ui$Element$Input$textHelper = F3(
	function (textInput, attrs, textOptions) {
		var withDefaults = _Utils_ap($mdgriffith$elm_ui$Element$Input$defaultTextBoxStyle, attrs);
		var redistributed = A3(
			$mdgriffith$elm_ui$Element$Input$redistribute,
			_Utils_eq(textInput.s, $mdgriffith$elm_ui$Element$Input$TextArea),
			$mdgriffith$elm_ui$Element$Input$isStacked(textOptions.ax),
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
			var _v7 = textInput.s;
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
						b3: A2(
							$elm$core$Basics$max,
							0,
							$elm$core$Basics$floor(b - 3)),
						cs: A2(
							$elm$core$Basics$max,
							0,
							$elm$core$Basics$floor(l - 3)),
						cL: A2(
							$elm$core$Basics$max,
							0,
							$elm$core$Basics$floor(r - 3)),
						cY: A2(
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
			{b3: 0, cs: 0, cL: 0, cY: 0},
			$elm$core$List$head(
				$elm$core$List$reverse(
					A2($elm$core$List$filterMap, getPadding, withDefaults))));
		var inputElement = A4(
			$mdgriffith$elm_ui$Internal$Model$element,
			$mdgriffith$elm_ui$Internal$Model$asEl,
			function () {
				var _v3 = textInput.s;
				if (!_v3.$) {
					var inputType = _v3.a;
					return $mdgriffith$elm_ui$Internal$Model$NodeName('input');
				} else {
					return $mdgriffith$elm_ui$Internal$Model$NodeName('textarea');
				}
			}(),
			_Utils_ap(
				function () {
					var _v4 = textInput.s;
					if (!_v4.$) {
						var inputType = _v4.a;
						return _List_fromArray(
							[
								$mdgriffith$elm_ui$Internal$Model$Attr(
								$elm$html$Html$Attributes$type_(inputType)),
								$mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.d2)
							]);
					} else {
						return _List_fromArray(
							[
								$mdgriffith$elm_ui$Element$clip,
								$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$fill),
								$mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.d_),
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
							$mdgriffith$elm_ui$Element$Input$value(textOptions.eS),
							$mdgriffith$elm_ui$Internal$Model$Attr(
							$elm$html$Html$Events$onInput(textOptions.eh)),
							$mdgriffith$elm_ui$Element$Input$hiddenLabelAttribute(textOptions.ax),
							$mdgriffith$elm_ui$Element$Input$spellcheck(textInput.I),
							A2(
							$elm$core$Maybe$withDefault,
							$mdgriffith$elm_ui$Internal$Model$NoAttribute,
							A2($elm$core$Maybe$map, $mdgriffith$elm_ui$Element$Input$autofill, textInput.B))
						]),
					redistributed.X)),
			$mdgriffith$elm_ui$Internal$Model$Unkeyed(_List_Nil));
		var wrappedInput = function () {
			var _v0 = textInput.s;
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
									A2($elm$core$List$any, $mdgriffith$elm_ui$Element$Input$hasFocusStyle, withDefaults) ? $mdgriffith$elm_ui$Internal$Model$NoAttribute : $mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.cb),
									$mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.d1)
								])),
						redistributed.b),
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
												$mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.d0),
												redistributed.as)))),
								$mdgriffith$elm_ui$Internal$Model$Unkeyed(
									function () {
										if (textOptions.eS === '') {
											var _v1 = textOptions.es;
											if (_v1.$ === 1) {
												return _List_fromArray(
													[
														$mdgriffith$elm_ui$Element$text('\u00A0')
													]);
											} else {
												var place = _v1.a;
												return _List_fromArray(
													[
														A3($mdgriffith$elm_ui$Element$Input$renderPlaceholder, place, _List_Nil, textOptions.eS === '')
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
																$elm$html$Html$Attributes$class($mdgriffith$elm_ui$Internal$Style$classes.d$)
															]),
														_List_fromArray(
															[
																$elm$html$Html$text(textOptions.eS + '\u00A0')
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
							A2($elm$core$List$any, $mdgriffith$elm_ui$Element$Input$hasFocusStyle, withDefaults) ? $mdgriffith$elm_ui$Internal$Model$NoAttribute : $mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.cb),
							$elm$core$List$concat(
								_List_fromArray(
									[
										redistributed.b,
										function () {
										var _v2 = textOptions.es;
										if (_v2.$ === 1) {
											return _List_Nil;
										} else {
											var place = _v2.a;
											return _List_fromArray(
												[
													$mdgriffith$elm_ui$Element$behindContent(
													A3($mdgriffith$elm_ui$Element$Input$renderPlaceholder, place, redistributed.C, textOptions.eS === ''))
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
				A2($mdgriffith$elm_ui$Internal$Model$Class, $mdgriffith$elm_ui$Internal$Flag$cursor, $mdgriffith$elm_ui$Internal$Style$classes.dD),
				A2(
					$elm$core$List$cons,
					$mdgriffith$elm_ui$Element$Input$isHiddenLabel(textOptions.ax) ? $mdgriffith$elm_ui$Internal$Model$NoAttribute : $mdgriffith$elm_ui$Element$spacing(5),
					A2($elm$core$List$cons, $mdgriffith$elm_ui$Element$Region$announce, redistributed.i))),
			textOptions.ax,
			wrappedInput);
	});
var $mdgriffith$elm_ui$Element$Input$multiline = F2(
	function (attrs, multi) {
		return A3(
			$mdgriffith$elm_ui$Element$Input$textHelper,
			{B: $elm$core$Maybe$Nothing, I: multi.eI, s: $mdgriffith$elm_ui$Element$Input$TextArea},
			attrs,
			{ax: multi.ax, eh: multi.eh, es: multi.es, eS: multi.eS});
	});
var $author$project$Main$parserDisplayPanelHeight_ = 0;
var $author$project$Main$panelHeight_ = function (model) {
	return ($author$project$Main$appHeight_(model) - $author$project$Main$parserDisplayPanelHeight_) - 100;
};
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
			ax: $mdgriffith$elm_ui$Element$Input$labelHidden('Enter source text here'),
			eh: $author$project$Main$InputText,
			es: $elm$core$Maybe$Nothing,
			eI: false,
			eS: model.X
		});
};
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
					[$author$project$Main$exampleDocButton, $author$project$Main$articleButton, $author$project$Main$clearTextButton])),
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
				ax: A2(
					$mdgriffith$elm_ui$Element$el,
					_List_fromArray(
						[
							$mdgriffith$elm_ui$Element$centerX,
							$mdgriffith$elm_ui$Element$centerY,
							$mdgriffith$elm_ui$Element$Font$size(14)
						]),
					$mdgriffith$elm_ui$Element$text('Rendered text')),
				aU: $elm$core$Maybe$Nothing
			})
		]));
var $author$project$Main$fontGray = function (g) {
	return $mdgriffith$elm_ui$Element$Font$color(
		A3($mdgriffith$elm_ui$Element$rgb, g, g, g));
};
var $author$project$Parser$Document$split = function (doc) {
	return A2(
		$elm$core$List$filter,
		function (s) {
			return s !== '';
		},
		A2($elm$core$String$split, '\n\n', doc));
};
var $author$project$Parser$Document$parse = F2(
	function (generation, doc) {
		return A2(
			$elm$core$List$map,
			$author$project$Parser$Driver$parse(generation),
			$author$project$Parser$Document$split(doc));
	});
var $author$project$Main$renderDocument = F2(
	function (generation, document) {
		return A2(
			$elm$core$List$map,
			function (para) {
				return A2(
					$author$project$Render$Elm$renderList,
					_Utils_update(
						$author$project$Main$renderArgs,
						{aO: generation}),
					para);
			},
			A2($author$project$Parser$Document$parse, generation, document));
	});
var $author$project$Main$outputDisplay_ = function (model) {
	return A2(
		$mdgriffith$elm_ui$Element$column,
		_List_fromArray(
			[
				$mdgriffith$elm_ui$Element$spacing(18),
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
		A2(
			$elm$core$List$map,
			function (para) {
				return A2($mdgriffith$elm_ui$Element$paragraph, _List_Nil, para);
			},
			A2($author$project$Main$renderDocument, model.K, model.X)));
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
						'generation: ' + $elm$core$String$fromInt(model.K)),
						$author$project$Main$wordCountElement(model.X)
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
						$author$project$Main$title('D'),
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
var $author$project$Main$noFocus = {di: $elm$core$Maybe$Nothing, dm: $elm$core$Maybe$Nothing, eC: $elm$core$Maybe$Nothing};
var $author$project$Main$view = function (model) {
	return A3(
		$mdgriffith$elm_ui$Element$layoutWith,
		{
			en: _List_fromArray(
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
	{dZ: $author$project$Main$init, eP: $author$project$Main$subscriptions, e8: $author$project$Main$update, fa: $author$project$Main$view});
_Platform_export({'Main':{'init':$author$project$Main$main(
	A2(
		$elm$json$Json$Decode$andThen,
		function (width) {
			return A2(
				$elm$json$Json$Decode$andThen,
				function (height) {
					return $elm$json$Json$Decode$succeed(
						{br: height, ar: width});
				},
				A2($elm$json$Json$Decode$field, 'height', $elm$json$Json$Decode$int));
		},
		A2($elm$json$Json$Decode$field, 'width', $elm$json$Json$Decode$int)))(0)}});}(this));
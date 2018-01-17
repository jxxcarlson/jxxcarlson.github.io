
(function() {
'use strict';

function F2(fun)
{
  function wrapper(a) { return function(b) { return fun(a,b); }; }
  wrapper.arity = 2;
  wrapper.func = fun;
  return wrapper;
}

function F3(fun)
{
  function wrapper(a) {
    return function(b) { return function(c) { return fun(a, b, c); }; };
  }
  wrapper.arity = 3;
  wrapper.func = fun;
  return wrapper;
}

function F4(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return fun(a, b, c, d); }; }; };
  }
  wrapper.arity = 4;
  wrapper.func = fun;
  return wrapper;
}

function F5(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return fun(a, b, c, d, e); }; }; }; };
  }
  wrapper.arity = 5;
  wrapper.func = fun;
  return wrapper;
}

function F6(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return fun(a, b, c, d, e, f); }; }; }; }; };
  }
  wrapper.arity = 6;
  wrapper.func = fun;
  return wrapper;
}

function F7(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return fun(a, b, c, d, e, f, g); }; }; }; }; }; };
  }
  wrapper.arity = 7;
  wrapper.func = fun;
  return wrapper;
}

function F8(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) {
    return fun(a, b, c, d, e, f, g, h); }; }; }; }; }; }; };
  }
  wrapper.arity = 8;
  wrapper.func = fun;
  return wrapper;
}

function F9(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) { return function(i) {
    return fun(a, b, c, d, e, f, g, h, i); }; }; }; }; }; }; }; };
  }
  wrapper.arity = 9;
  wrapper.func = fun;
  return wrapper;
}

function A2(fun, a, b)
{
  return fun.arity === 2
    ? fun.func(a, b)
    : fun(a)(b);
}
function A3(fun, a, b, c)
{
  return fun.arity === 3
    ? fun.func(a, b, c)
    : fun(a)(b)(c);
}
function A4(fun, a, b, c, d)
{
  return fun.arity === 4
    ? fun.func(a, b, c, d)
    : fun(a)(b)(c)(d);
}
function A5(fun, a, b, c, d, e)
{
  return fun.arity === 5
    ? fun.func(a, b, c, d, e)
    : fun(a)(b)(c)(d)(e);
}
function A6(fun, a, b, c, d, e, f)
{
  return fun.arity === 6
    ? fun.func(a, b, c, d, e, f)
    : fun(a)(b)(c)(d)(e)(f);
}
function A7(fun, a, b, c, d, e, f, g)
{
  return fun.arity === 7
    ? fun.func(a, b, c, d, e, f, g)
    : fun(a)(b)(c)(d)(e)(f)(g);
}
function A8(fun, a, b, c, d, e, f, g, h)
{
  return fun.arity === 8
    ? fun.func(a, b, c, d, e, f, g, h)
    : fun(a)(b)(c)(d)(e)(f)(g)(h);
}
function A9(fun, a, b, c, d, e, f, g, h, i)
{
  return fun.arity === 9
    ? fun.func(a, b, c, d, e, f, g, h, i)
    : fun(a)(b)(c)(d)(e)(f)(g)(h)(i);
}

//import Native.Utils //

var _elm_lang$core$Native_Basics = function() {

function div(a, b)
{
	return (a / b) | 0;
}
function rem(a, b)
{
	return a % b;
}
function mod(a, b)
{
	if (b === 0)
	{
		throw new Error('Cannot perform mod 0. Division by zero error.');
	}
	var r = a % b;
	var m = a === 0 ? 0 : (b > 0 ? (a >= 0 ? r : r + b) : -mod(-a, -b));

	return m === b ? 0 : m;
}
function logBase(base, n)
{
	return Math.log(n) / Math.log(base);
}
function negate(n)
{
	return -n;
}
function abs(n)
{
	return n < 0 ? -n : n;
}

function min(a, b)
{
	return _elm_lang$core$Native_Utils.cmp(a, b) < 0 ? a : b;
}
function max(a, b)
{
	return _elm_lang$core$Native_Utils.cmp(a, b) > 0 ? a : b;
}
function clamp(lo, hi, n)
{
	return _elm_lang$core$Native_Utils.cmp(n, lo) < 0
		? lo
		: _elm_lang$core$Native_Utils.cmp(n, hi) > 0
			? hi
			: n;
}

var ord = ['LT', 'EQ', 'GT'];

function compare(x, y)
{
	return { ctor: ord[_elm_lang$core$Native_Utils.cmp(x, y) + 1] };
}

function xor(a, b)
{
	return a !== b;
}
function not(b)
{
	return !b;
}
function isInfinite(n)
{
	return n === Infinity || n === -Infinity;
}

function truncate(n)
{
	return n | 0;
}

function degrees(d)
{
	return d * Math.PI / 180;
}
function turns(t)
{
	return 2 * Math.PI * t;
}
function fromPolar(point)
{
	var r = point._0;
	var t = point._1;
	return _elm_lang$core$Native_Utils.Tuple2(r * Math.cos(t), r * Math.sin(t));
}
function toPolar(point)
{
	var x = point._0;
	var y = point._1;
	return _elm_lang$core$Native_Utils.Tuple2(Math.sqrt(x * x + y * y), Math.atan2(y, x));
}

return {
	div: F2(div),
	rem: F2(rem),
	mod: F2(mod),

	pi: Math.PI,
	e: Math.E,
	cos: Math.cos,
	sin: Math.sin,
	tan: Math.tan,
	acos: Math.acos,
	asin: Math.asin,
	atan: Math.atan,
	atan2: F2(Math.atan2),

	degrees: degrees,
	turns: turns,
	fromPolar: fromPolar,
	toPolar: toPolar,

	sqrt: Math.sqrt,
	logBase: F2(logBase),
	negate: negate,
	abs: abs,
	min: F2(min),
	max: F2(max),
	clamp: F3(clamp),
	compare: F2(compare),

	xor: F2(xor),
	not: not,

	truncate: truncate,
	ceiling: Math.ceil,
	floor: Math.floor,
	round: Math.round,
	toFloat: function(x) { return x; },
	isNaN: isNaN,
	isInfinite: isInfinite
};

}();
//import //

var _elm_lang$core$Native_Utils = function() {

// COMPARISONS

function eq(x, y)
{
	var stack = [];
	var isEqual = eqHelp(x, y, 0, stack);
	var pair;
	while (isEqual && (pair = stack.pop()))
	{
		isEqual = eqHelp(pair.x, pair.y, 0, stack);
	}
	return isEqual;
}


function eqHelp(x, y, depth, stack)
{
	if (depth > 100)
	{
		stack.push({ x: x, y: y });
		return true;
	}

	if (x === y)
	{
		return true;
	}

	if (typeof x !== 'object')
	{
		if (typeof x === 'function')
		{
			throw new Error(
				'Trying to use `(==)` on functions. There is no way to know if functions are "the same" in the Elm sense.'
				+ ' Read more about this at http://package.elm-lang.org/packages/elm-lang/core/latest/Basics#=='
				+ ' which describes why it is this way and what the better version will look like.'
			);
		}
		return false;
	}

	if (x === null || y === null)
	{
		return false
	}

	if (x instanceof Date)
	{
		return x.getTime() === y.getTime();
	}

	if (!('ctor' in x))
	{
		for (var key in x)
		{
			if (!eqHelp(x[key], y[key], depth + 1, stack))
			{
				return false;
			}
		}
		return true;
	}

	// convert Dicts and Sets to lists
	if (x.ctor === 'RBNode_elm_builtin' || x.ctor === 'RBEmpty_elm_builtin')
	{
		x = _elm_lang$core$Dict$toList(x);
		y = _elm_lang$core$Dict$toList(y);
	}
	if (x.ctor === 'Set_elm_builtin')
	{
		x = _elm_lang$core$Set$toList(x);
		y = _elm_lang$core$Set$toList(y);
	}

	// check if lists are equal without recursion
	if (x.ctor === '::')
	{
		var a = x;
		var b = y;
		while (a.ctor === '::' && b.ctor === '::')
		{
			if (!eqHelp(a._0, b._0, depth + 1, stack))
			{
				return false;
			}
			a = a._1;
			b = b._1;
		}
		return a.ctor === b.ctor;
	}

	// check if Arrays are equal
	if (x.ctor === '_Array')
	{
		var xs = _elm_lang$core$Native_Array.toJSArray(x);
		var ys = _elm_lang$core$Native_Array.toJSArray(y);
		if (xs.length !== ys.length)
		{
			return false;
		}
		for (var i = 0; i < xs.length; i++)
		{
			if (!eqHelp(xs[i], ys[i], depth + 1, stack))
			{
				return false;
			}
		}
		return true;
	}

	if (!eqHelp(x.ctor, y.ctor, depth + 1, stack))
	{
		return false;
	}

	for (var key in x)
	{
		if (!eqHelp(x[key], y[key], depth + 1, stack))
		{
			return false;
		}
	}
	return true;
}

// Code in Generate/JavaScript.hs, Basics.js, and List.js depends on
// the particular integer values assigned to LT, EQ, and GT.

var LT = -1, EQ = 0, GT = 1;

function cmp(x, y)
{
	if (typeof x !== 'object')
	{
		return x === y ? EQ : x < y ? LT : GT;
	}

	if (x instanceof String)
	{
		var a = x.valueOf();
		var b = y.valueOf();
		return a === b ? EQ : a < b ? LT : GT;
	}

	if (x.ctor === '::' || x.ctor === '[]')
	{
		while (x.ctor === '::' && y.ctor === '::')
		{
			var ord = cmp(x._0, y._0);
			if (ord !== EQ)
			{
				return ord;
			}
			x = x._1;
			y = y._1;
		}
		return x.ctor === y.ctor ? EQ : x.ctor === '[]' ? LT : GT;
	}

	if (x.ctor.slice(0, 6) === '_Tuple')
	{
		var ord;
		var n = x.ctor.slice(6) - 0;
		var err = 'cannot compare tuples with more than 6 elements.';
		if (n === 0) return EQ;
		if (n >= 1) { ord = cmp(x._0, y._0); if (ord !== EQ) return ord;
		if (n >= 2) { ord = cmp(x._1, y._1); if (ord !== EQ) return ord;
		if (n >= 3) { ord = cmp(x._2, y._2); if (ord !== EQ) return ord;
		if (n >= 4) { ord = cmp(x._3, y._3); if (ord !== EQ) return ord;
		if (n >= 5) { ord = cmp(x._4, y._4); if (ord !== EQ) return ord;
		if (n >= 6) { ord = cmp(x._5, y._5); if (ord !== EQ) return ord;
		if (n >= 7) throw new Error('Comparison error: ' + err); } } } } } }
		return EQ;
	}

	throw new Error(
		'Comparison error: comparison is only defined on ints, '
		+ 'floats, times, chars, strings, lists of comparable values, '
		+ 'and tuples of comparable values.'
	);
}


// COMMON VALUES

var Tuple0 = {
	ctor: '_Tuple0'
};

function Tuple2(x, y)
{
	return {
		ctor: '_Tuple2',
		_0: x,
		_1: y
	};
}

function chr(c)
{
	return new String(c);
}


// GUID

var count = 0;
function guid(_)
{
	return count++;
}


// RECORDS

function update(oldRecord, updatedFields)
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


//// LIST STUFF ////

var Nil = { ctor: '[]' };

function Cons(hd, tl)
{
	return {
		ctor: '::',
		_0: hd,
		_1: tl
	};
}

function append(xs, ys)
{
	// append Strings
	if (typeof xs === 'string')
	{
		return xs + ys;
	}

	// append Lists
	if (xs.ctor === '[]')
	{
		return ys;
	}
	var root = Cons(xs._0, Nil);
	var curr = root;
	xs = xs._1;
	while (xs.ctor !== '[]')
	{
		curr._1 = Cons(xs._0, Nil);
		xs = xs._1;
		curr = curr._1;
	}
	curr._1 = ys;
	return root;
}


// CRASHES

function crash(moduleName, region)
{
	return function(message) {
		throw new Error(
			'Ran into a `Debug.crash` in module `' + moduleName + '` ' + regionToString(region) + '\n'
			+ 'The message provided by the code author is:\n\n    '
			+ message
		);
	};
}

function crashCase(moduleName, region, value)
{
	return function(message) {
		throw new Error(
			'Ran into a `Debug.crash` in module `' + moduleName + '`\n\n'
			+ 'This was caused by the `case` expression ' + regionToString(region) + '.\n'
			+ 'One of the branches ended with a crash and the following value got through:\n\n    ' + toString(value) + '\n\n'
			+ 'The message provided by the code author is:\n\n    '
			+ message
		);
	};
}

function regionToString(region)
{
	if (region.start.line == region.end.line)
	{
		return 'on line ' + region.start.line;
	}
	return 'between lines ' + region.start.line + ' and ' + region.end.line;
}


// TO STRING

function toString(v)
{
	var type = typeof v;
	if (type === 'function')
	{
		return '<function>';
	}

	if (type === 'boolean')
	{
		return v ? 'True' : 'False';
	}

	if (type === 'number')
	{
		return v + '';
	}

	if (v instanceof String)
	{
		return '\'' + addSlashes(v, true) + '\'';
	}

	if (type === 'string')
	{
		return '"' + addSlashes(v, false) + '"';
	}

	if (v === null)
	{
		return 'null';
	}

	if (type === 'object' && 'ctor' in v)
	{
		var ctorStarter = v.ctor.substring(0, 5);

		if (ctorStarter === '_Tupl')
		{
			var output = [];
			for (var k in v)
			{
				if (k === 'ctor') continue;
				output.push(toString(v[k]));
			}
			return '(' + output.join(',') + ')';
		}

		if (ctorStarter === '_Task')
		{
			return '<task>'
		}

		if (v.ctor === '_Array')
		{
			var list = _elm_lang$core$Array$toList(v);
			return 'Array.fromList ' + toString(list);
		}

		if (v.ctor === '<decoder>')
		{
			return '<decoder>';
		}

		if (v.ctor === '_Process')
		{
			return '<process:' + v.id + '>';
		}

		if (v.ctor === '::')
		{
			var output = '[' + toString(v._0);
			v = v._1;
			while (v.ctor === '::')
			{
				output += ',' + toString(v._0);
				v = v._1;
			}
			return output + ']';
		}

		if (v.ctor === '[]')
		{
			return '[]';
		}

		if (v.ctor === 'Set_elm_builtin')
		{
			return 'Set.fromList ' + toString(_elm_lang$core$Set$toList(v));
		}

		if (v.ctor === 'RBNode_elm_builtin' || v.ctor === 'RBEmpty_elm_builtin')
		{
			return 'Dict.fromList ' + toString(_elm_lang$core$Dict$toList(v));
		}

		var output = '';
		for (var i in v)
		{
			if (i === 'ctor') continue;
			var str = toString(v[i]);
			var c0 = str[0];
			var parenless = c0 === '{' || c0 === '(' || c0 === '<' || c0 === '"' || str.indexOf(' ') < 0;
			output += ' ' + (parenless ? str : '(' + str + ')');
		}
		return v.ctor + output;
	}

	if (type === 'object')
	{
		if (v instanceof Date)
		{
			return '<' + v.toString() + '>';
		}

		if (v.elm_web_socket)
		{
			return '<websocket>';
		}

		var output = [];
		for (var k in v)
		{
			output.push(k + ' = ' + toString(v[k]));
		}
		if (output.length === 0)
		{
			return '{}';
		}
		return '{ ' + output.join(', ') + ' }';
	}

	return '<internal structure>';
}

function addSlashes(str, isChar)
{
	var s = str.replace(/\\/g, '\\\\')
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


return {
	eq: eq,
	cmp: cmp,
	Tuple0: Tuple0,
	Tuple2: Tuple2,
	chr: chr,
	update: update,
	guid: guid,

	append: F2(append),

	crash: crash,
	crashCase: crashCase,

	toString: toString
};

}();
var _elm_lang$core$Basics$never = function (_p0) {
	never:
	while (true) {
		var _p1 = _p0;
		var _v1 = _p1._0;
		_p0 = _v1;
		continue never;
	}
};
var _elm_lang$core$Basics$uncurry = F2(
	function (f, _p2) {
		var _p3 = _p2;
		return A2(f, _p3._0, _p3._1);
	});
var _elm_lang$core$Basics$curry = F3(
	function (f, a, b) {
		return f(
			{ctor: '_Tuple2', _0: a, _1: b});
	});
var _elm_lang$core$Basics$flip = F3(
	function (f, b, a) {
		return A2(f, a, b);
	});
var _elm_lang$core$Basics$always = F2(
	function (a, _p4) {
		return a;
	});
var _elm_lang$core$Basics$identity = function (x) {
	return x;
};
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['<|'] = F2(
	function (f, x) {
		return f(x);
	});
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['|>'] = F2(
	function (x, f) {
		return f(x);
	});
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['>>'] = F3(
	function (f, g, x) {
		return g(
			f(x));
	});
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['<<'] = F3(
	function (g, f, x) {
		return g(
			f(x));
	});
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['++'] = _elm_lang$core$Native_Utils.append;
var _elm_lang$core$Basics$toString = _elm_lang$core$Native_Utils.toString;
var _elm_lang$core$Basics$isInfinite = _elm_lang$core$Native_Basics.isInfinite;
var _elm_lang$core$Basics$isNaN = _elm_lang$core$Native_Basics.isNaN;
var _elm_lang$core$Basics$toFloat = _elm_lang$core$Native_Basics.toFloat;
var _elm_lang$core$Basics$ceiling = _elm_lang$core$Native_Basics.ceiling;
var _elm_lang$core$Basics$floor = _elm_lang$core$Native_Basics.floor;
var _elm_lang$core$Basics$truncate = _elm_lang$core$Native_Basics.truncate;
var _elm_lang$core$Basics$round = _elm_lang$core$Native_Basics.round;
var _elm_lang$core$Basics$not = _elm_lang$core$Native_Basics.not;
var _elm_lang$core$Basics$xor = _elm_lang$core$Native_Basics.xor;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['||'] = _elm_lang$core$Native_Basics.or;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['&&'] = _elm_lang$core$Native_Basics.and;
var _elm_lang$core$Basics$max = _elm_lang$core$Native_Basics.max;
var _elm_lang$core$Basics$min = _elm_lang$core$Native_Basics.min;
var _elm_lang$core$Basics$compare = _elm_lang$core$Native_Basics.compare;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['>='] = _elm_lang$core$Native_Basics.ge;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['<='] = _elm_lang$core$Native_Basics.le;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['>'] = _elm_lang$core$Native_Basics.gt;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['<'] = _elm_lang$core$Native_Basics.lt;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['/='] = _elm_lang$core$Native_Basics.neq;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['=='] = _elm_lang$core$Native_Basics.eq;
var _elm_lang$core$Basics$e = _elm_lang$core$Native_Basics.e;
var _elm_lang$core$Basics$pi = _elm_lang$core$Native_Basics.pi;
var _elm_lang$core$Basics$clamp = _elm_lang$core$Native_Basics.clamp;
var _elm_lang$core$Basics$logBase = _elm_lang$core$Native_Basics.logBase;
var _elm_lang$core$Basics$abs = _elm_lang$core$Native_Basics.abs;
var _elm_lang$core$Basics$negate = _elm_lang$core$Native_Basics.negate;
var _elm_lang$core$Basics$sqrt = _elm_lang$core$Native_Basics.sqrt;
var _elm_lang$core$Basics$atan2 = _elm_lang$core$Native_Basics.atan2;
var _elm_lang$core$Basics$atan = _elm_lang$core$Native_Basics.atan;
var _elm_lang$core$Basics$asin = _elm_lang$core$Native_Basics.asin;
var _elm_lang$core$Basics$acos = _elm_lang$core$Native_Basics.acos;
var _elm_lang$core$Basics$tan = _elm_lang$core$Native_Basics.tan;
var _elm_lang$core$Basics$sin = _elm_lang$core$Native_Basics.sin;
var _elm_lang$core$Basics$cos = _elm_lang$core$Native_Basics.cos;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['^'] = _elm_lang$core$Native_Basics.exp;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['%'] = _elm_lang$core$Native_Basics.mod;
var _elm_lang$core$Basics$rem = _elm_lang$core$Native_Basics.rem;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['//'] = _elm_lang$core$Native_Basics.div;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['/'] = _elm_lang$core$Native_Basics.floatDiv;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['*'] = _elm_lang$core$Native_Basics.mul;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['-'] = _elm_lang$core$Native_Basics.sub;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['+'] = _elm_lang$core$Native_Basics.add;
var _elm_lang$core$Basics$toPolar = _elm_lang$core$Native_Basics.toPolar;
var _elm_lang$core$Basics$fromPolar = _elm_lang$core$Native_Basics.fromPolar;
var _elm_lang$core$Basics$turns = _elm_lang$core$Native_Basics.turns;
var _elm_lang$core$Basics$degrees = _elm_lang$core$Native_Basics.degrees;
var _elm_lang$core$Basics$radians = function (t) {
	return t;
};
var _elm_lang$core$Basics$GT = {ctor: 'GT'};
var _elm_lang$core$Basics$EQ = {ctor: 'EQ'};
var _elm_lang$core$Basics$LT = {ctor: 'LT'};
var _elm_lang$core$Basics$JustOneMore = function (a) {
	return {ctor: 'JustOneMore', _0: a};
};

var _elm_lang$core$Maybe$withDefault = F2(
	function ($default, maybe) {
		var _p0 = maybe;
		if (_p0.ctor === 'Just') {
			return _p0._0;
		} else {
			return $default;
		}
	});
var _elm_lang$core$Maybe$Nothing = {ctor: 'Nothing'};
var _elm_lang$core$Maybe$andThen = F2(
	function (callback, maybeValue) {
		var _p1 = maybeValue;
		if (_p1.ctor === 'Just') {
			return callback(_p1._0);
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_lang$core$Maybe$Just = function (a) {
	return {ctor: 'Just', _0: a};
};
var _elm_lang$core$Maybe$map = F2(
	function (f, maybe) {
		var _p2 = maybe;
		if (_p2.ctor === 'Just') {
			return _elm_lang$core$Maybe$Just(
				f(_p2._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_lang$core$Maybe$map2 = F3(
	function (func, ma, mb) {
		var _p3 = {ctor: '_Tuple2', _0: ma, _1: mb};
		if (((_p3.ctor === '_Tuple2') && (_p3._0.ctor === 'Just')) && (_p3._1.ctor === 'Just')) {
			return _elm_lang$core$Maybe$Just(
				A2(func, _p3._0._0, _p3._1._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_lang$core$Maybe$map3 = F4(
	function (func, ma, mb, mc) {
		var _p4 = {ctor: '_Tuple3', _0: ma, _1: mb, _2: mc};
		if ((((_p4.ctor === '_Tuple3') && (_p4._0.ctor === 'Just')) && (_p4._1.ctor === 'Just')) && (_p4._2.ctor === 'Just')) {
			return _elm_lang$core$Maybe$Just(
				A3(func, _p4._0._0, _p4._1._0, _p4._2._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_lang$core$Maybe$map4 = F5(
	function (func, ma, mb, mc, md) {
		var _p5 = {ctor: '_Tuple4', _0: ma, _1: mb, _2: mc, _3: md};
		if (((((_p5.ctor === '_Tuple4') && (_p5._0.ctor === 'Just')) && (_p5._1.ctor === 'Just')) && (_p5._2.ctor === 'Just')) && (_p5._3.ctor === 'Just')) {
			return _elm_lang$core$Maybe$Just(
				A4(func, _p5._0._0, _p5._1._0, _p5._2._0, _p5._3._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_lang$core$Maybe$map5 = F6(
	function (func, ma, mb, mc, md, me) {
		var _p6 = {ctor: '_Tuple5', _0: ma, _1: mb, _2: mc, _3: md, _4: me};
		if ((((((_p6.ctor === '_Tuple5') && (_p6._0.ctor === 'Just')) && (_p6._1.ctor === 'Just')) && (_p6._2.ctor === 'Just')) && (_p6._3.ctor === 'Just')) && (_p6._4.ctor === 'Just')) {
			return _elm_lang$core$Maybe$Just(
				A5(func, _p6._0._0, _p6._1._0, _p6._2._0, _p6._3._0, _p6._4._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});

//import Native.Utils //

var _elm_lang$core$Native_List = function() {

var Nil = { ctor: '[]' };

function Cons(hd, tl)
{
	return { ctor: '::', _0: hd, _1: tl };
}

function fromArray(arr)
{
	var out = Nil;
	for (var i = arr.length; i--; )
	{
		out = Cons(arr[i], out);
	}
	return out;
}

function toArray(xs)
{
	var out = [];
	while (xs.ctor !== '[]')
	{
		out.push(xs._0);
		xs = xs._1;
	}
	return out;
}

function foldr(f, b, xs)
{
	var arr = toArray(xs);
	var acc = b;
	for (var i = arr.length; i--; )
	{
		acc = A2(f, arr[i], acc);
	}
	return acc;
}

function map2(f, xs, ys)
{
	var arr = [];
	while (xs.ctor !== '[]' && ys.ctor !== '[]')
	{
		arr.push(A2(f, xs._0, ys._0));
		xs = xs._1;
		ys = ys._1;
	}
	return fromArray(arr);
}

function map3(f, xs, ys, zs)
{
	var arr = [];
	while (xs.ctor !== '[]' && ys.ctor !== '[]' && zs.ctor !== '[]')
	{
		arr.push(A3(f, xs._0, ys._0, zs._0));
		xs = xs._1;
		ys = ys._1;
		zs = zs._1;
	}
	return fromArray(arr);
}

function map4(f, ws, xs, ys, zs)
{
	var arr = [];
	while (   ws.ctor !== '[]'
		   && xs.ctor !== '[]'
		   && ys.ctor !== '[]'
		   && zs.ctor !== '[]')
	{
		arr.push(A4(f, ws._0, xs._0, ys._0, zs._0));
		ws = ws._1;
		xs = xs._1;
		ys = ys._1;
		zs = zs._1;
	}
	return fromArray(arr);
}

function map5(f, vs, ws, xs, ys, zs)
{
	var arr = [];
	while (   vs.ctor !== '[]'
		   && ws.ctor !== '[]'
		   && xs.ctor !== '[]'
		   && ys.ctor !== '[]'
		   && zs.ctor !== '[]')
	{
		arr.push(A5(f, vs._0, ws._0, xs._0, ys._0, zs._0));
		vs = vs._1;
		ws = ws._1;
		xs = xs._1;
		ys = ys._1;
		zs = zs._1;
	}
	return fromArray(arr);
}

function sortBy(f, xs)
{
	return fromArray(toArray(xs).sort(function(a, b) {
		return _elm_lang$core$Native_Utils.cmp(f(a), f(b));
	}));
}

function sortWith(f, xs)
{
	return fromArray(toArray(xs).sort(function(a, b) {
		var ord = f(a)(b).ctor;
		return ord === 'EQ' ? 0 : ord === 'LT' ? -1 : 1;
	}));
}

return {
	Nil: Nil,
	Cons: Cons,
	cons: F2(Cons),
	toArray: toArray,
	fromArray: fromArray,

	foldr: F3(foldr),

	map2: F3(map2),
	map3: F4(map3),
	map4: F5(map4),
	map5: F6(map5),
	sortBy: F2(sortBy),
	sortWith: F2(sortWith)
};

}();
var _elm_lang$core$List$sortWith = _elm_lang$core$Native_List.sortWith;
var _elm_lang$core$List$sortBy = _elm_lang$core$Native_List.sortBy;
var _elm_lang$core$List$sort = function (xs) {
	return A2(_elm_lang$core$List$sortBy, _elm_lang$core$Basics$identity, xs);
};
var _elm_lang$core$List$singleton = function (value) {
	return {
		ctor: '::',
		_0: value,
		_1: {ctor: '[]'}
	};
};
var _elm_lang$core$List$drop = F2(
	function (n, list) {
		drop:
		while (true) {
			if (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) {
				return list;
			} else {
				var _p0 = list;
				if (_p0.ctor === '[]') {
					return list;
				} else {
					var _v1 = n - 1,
						_v2 = _p0._1;
					n = _v1;
					list = _v2;
					continue drop;
				}
			}
		}
	});
var _elm_lang$core$List$map5 = _elm_lang$core$Native_List.map5;
var _elm_lang$core$List$map4 = _elm_lang$core$Native_List.map4;
var _elm_lang$core$List$map3 = _elm_lang$core$Native_List.map3;
var _elm_lang$core$List$map2 = _elm_lang$core$Native_List.map2;
var _elm_lang$core$List$any = F2(
	function (isOkay, list) {
		any:
		while (true) {
			var _p1 = list;
			if (_p1.ctor === '[]') {
				return false;
			} else {
				if (isOkay(_p1._0)) {
					return true;
				} else {
					var _v4 = isOkay,
						_v5 = _p1._1;
					isOkay = _v4;
					list = _v5;
					continue any;
				}
			}
		}
	});
var _elm_lang$core$List$all = F2(
	function (isOkay, list) {
		return !A2(
			_elm_lang$core$List$any,
			function (_p2) {
				return !isOkay(_p2);
			},
			list);
	});
var _elm_lang$core$List$foldr = _elm_lang$core$Native_List.foldr;
var _elm_lang$core$List$foldl = F3(
	function (func, acc, list) {
		foldl:
		while (true) {
			var _p3 = list;
			if (_p3.ctor === '[]') {
				return acc;
			} else {
				var _v7 = func,
					_v8 = A2(func, _p3._0, acc),
					_v9 = _p3._1;
				func = _v7;
				acc = _v8;
				list = _v9;
				continue foldl;
			}
		}
	});
var _elm_lang$core$List$length = function (xs) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (_p4, i) {
				return i + 1;
			}),
		0,
		xs);
};
var _elm_lang$core$List$sum = function (numbers) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (x, y) {
				return x + y;
			}),
		0,
		numbers);
};
var _elm_lang$core$List$product = function (numbers) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (x, y) {
				return x * y;
			}),
		1,
		numbers);
};
var _elm_lang$core$List$maximum = function (list) {
	var _p5 = list;
	if (_p5.ctor === '::') {
		return _elm_lang$core$Maybe$Just(
			A3(_elm_lang$core$List$foldl, _elm_lang$core$Basics$max, _p5._0, _p5._1));
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_lang$core$List$minimum = function (list) {
	var _p6 = list;
	if (_p6.ctor === '::') {
		return _elm_lang$core$Maybe$Just(
			A3(_elm_lang$core$List$foldl, _elm_lang$core$Basics$min, _p6._0, _p6._1));
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_lang$core$List$member = F2(
	function (x, xs) {
		return A2(
			_elm_lang$core$List$any,
			function (a) {
				return _elm_lang$core$Native_Utils.eq(a, x);
			},
			xs);
	});
var _elm_lang$core$List$isEmpty = function (xs) {
	var _p7 = xs;
	if (_p7.ctor === '[]') {
		return true;
	} else {
		return false;
	}
};
var _elm_lang$core$List$tail = function (list) {
	var _p8 = list;
	if (_p8.ctor === '::') {
		return _elm_lang$core$Maybe$Just(_p8._1);
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_lang$core$List$head = function (list) {
	var _p9 = list;
	if (_p9.ctor === '::') {
		return _elm_lang$core$Maybe$Just(_p9._0);
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_lang$core$List_ops = _elm_lang$core$List_ops || {};
_elm_lang$core$List_ops['::'] = _elm_lang$core$Native_List.cons;
var _elm_lang$core$List$map = F2(
	function (f, xs) {
		return A3(
			_elm_lang$core$List$foldr,
			F2(
				function (x, acc) {
					return {
						ctor: '::',
						_0: f(x),
						_1: acc
					};
				}),
			{ctor: '[]'},
			xs);
	});
var _elm_lang$core$List$filter = F2(
	function (pred, xs) {
		var conditionalCons = F2(
			function (front, back) {
				return pred(front) ? {ctor: '::', _0: front, _1: back} : back;
			});
		return A3(
			_elm_lang$core$List$foldr,
			conditionalCons,
			{ctor: '[]'},
			xs);
	});
var _elm_lang$core$List$maybeCons = F3(
	function (f, mx, xs) {
		var _p10 = f(mx);
		if (_p10.ctor === 'Just') {
			return {ctor: '::', _0: _p10._0, _1: xs};
		} else {
			return xs;
		}
	});
var _elm_lang$core$List$filterMap = F2(
	function (f, xs) {
		return A3(
			_elm_lang$core$List$foldr,
			_elm_lang$core$List$maybeCons(f),
			{ctor: '[]'},
			xs);
	});
var _elm_lang$core$List$reverse = function (list) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (x, y) {
				return {ctor: '::', _0: x, _1: y};
			}),
		{ctor: '[]'},
		list);
};
var _elm_lang$core$List$scanl = F3(
	function (f, b, xs) {
		var scan1 = F2(
			function (x, accAcc) {
				var _p11 = accAcc;
				if (_p11.ctor === '::') {
					return {
						ctor: '::',
						_0: A2(f, x, _p11._0),
						_1: accAcc
					};
				} else {
					return {ctor: '[]'};
				}
			});
		return _elm_lang$core$List$reverse(
			A3(
				_elm_lang$core$List$foldl,
				scan1,
				{
					ctor: '::',
					_0: b,
					_1: {ctor: '[]'}
				},
				xs));
	});
var _elm_lang$core$List$append = F2(
	function (xs, ys) {
		var _p12 = ys;
		if (_p12.ctor === '[]') {
			return xs;
		} else {
			return A3(
				_elm_lang$core$List$foldr,
				F2(
					function (x, y) {
						return {ctor: '::', _0: x, _1: y};
					}),
				ys,
				xs);
		}
	});
var _elm_lang$core$List$concat = function (lists) {
	return A3(
		_elm_lang$core$List$foldr,
		_elm_lang$core$List$append,
		{ctor: '[]'},
		lists);
};
var _elm_lang$core$List$concatMap = F2(
	function (f, list) {
		return _elm_lang$core$List$concat(
			A2(_elm_lang$core$List$map, f, list));
	});
var _elm_lang$core$List$partition = F2(
	function (pred, list) {
		var step = F2(
			function (x, _p13) {
				var _p14 = _p13;
				var _p16 = _p14._0;
				var _p15 = _p14._1;
				return pred(x) ? {
					ctor: '_Tuple2',
					_0: {ctor: '::', _0: x, _1: _p16},
					_1: _p15
				} : {
					ctor: '_Tuple2',
					_0: _p16,
					_1: {ctor: '::', _0: x, _1: _p15}
				};
			});
		return A3(
			_elm_lang$core$List$foldr,
			step,
			{
				ctor: '_Tuple2',
				_0: {ctor: '[]'},
				_1: {ctor: '[]'}
			},
			list);
	});
var _elm_lang$core$List$unzip = function (pairs) {
	var step = F2(
		function (_p18, _p17) {
			var _p19 = _p18;
			var _p20 = _p17;
			return {
				ctor: '_Tuple2',
				_0: {ctor: '::', _0: _p19._0, _1: _p20._0},
				_1: {ctor: '::', _0: _p19._1, _1: _p20._1}
			};
		});
	return A3(
		_elm_lang$core$List$foldr,
		step,
		{
			ctor: '_Tuple2',
			_0: {ctor: '[]'},
			_1: {ctor: '[]'}
		},
		pairs);
};
var _elm_lang$core$List$intersperse = F2(
	function (sep, xs) {
		var _p21 = xs;
		if (_p21.ctor === '[]') {
			return {ctor: '[]'};
		} else {
			var step = F2(
				function (x, rest) {
					return {
						ctor: '::',
						_0: sep,
						_1: {ctor: '::', _0: x, _1: rest}
					};
				});
			var spersed = A3(
				_elm_lang$core$List$foldr,
				step,
				{ctor: '[]'},
				_p21._1);
			return {ctor: '::', _0: _p21._0, _1: spersed};
		}
	});
var _elm_lang$core$List$takeReverse = F3(
	function (n, list, taken) {
		takeReverse:
		while (true) {
			if (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) {
				return taken;
			} else {
				var _p22 = list;
				if (_p22.ctor === '[]') {
					return taken;
				} else {
					var _v23 = n - 1,
						_v24 = _p22._1,
						_v25 = {ctor: '::', _0: _p22._0, _1: taken};
					n = _v23;
					list = _v24;
					taken = _v25;
					continue takeReverse;
				}
			}
		}
	});
var _elm_lang$core$List$takeTailRec = F2(
	function (n, list) {
		return _elm_lang$core$List$reverse(
			A3(
				_elm_lang$core$List$takeReverse,
				n,
				list,
				{ctor: '[]'}));
	});
var _elm_lang$core$List$takeFast = F3(
	function (ctr, n, list) {
		if (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) {
			return {ctor: '[]'};
		} else {
			var _p23 = {ctor: '_Tuple2', _0: n, _1: list};
			_v26_5:
			do {
				_v26_1:
				do {
					if (_p23.ctor === '_Tuple2') {
						if (_p23._1.ctor === '[]') {
							return list;
						} else {
							if (_p23._1._1.ctor === '::') {
								switch (_p23._0) {
									case 1:
										break _v26_1;
									case 2:
										return {
											ctor: '::',
											_0: _p23._1._0,
											_1: {
												ctor: '::',
												_0: _p23._1._1._0,
												_1: {ctor: '[]'}
											}
										};
									case 3:
										if (_p23._1._1._1.ctor === '::') {
											return {
												ctor: '::',
												_0: _p23._1._0,
												_1: {
													ctor: '::',
													_0: _p23._1._1._0,
													_1: {
														ctor: '::',
														_0: _p23._1._1._1._0,
														_1: {ctor: '[]'}
													}
												}
											};
										} else {
											break _v26_5;
										}
									default:
										if ((_p23._1._1._1.ctor === '::') && (_p23._1._1._1._1.ctor === '::')) {
											var _p28 = _p23._1._1._1._0;
											var _p27 = _p23._1._1._0;
											var _p26 = _p23._1._0;
											var _p25 = _p23._1._1._1._1._0;
											var _p24 = _p23._1._1._1._1._1;
											return (_elm_lang$core$Native_Utils.cmp(ctr, 1000) > 0) ? {
												ctor: '::',
												_0: _p26,
												_1: {
													ctor: '::',
													_0: _p27,
													_1: {
														ctor: '::',
														_0: _p28,
														_1: {
															ctor: '::',
															_0: _p25,
															_1: A2(_elm_lang$core$List$takeTailRec, n - 4, _p24)
														}
													}
												}
											} : {
												ctor: '::',
												_0: _p26,
												_1: {
													ctor: '::',
													_0: _p27,
													_1: {
														ctor: '::',
														_0: _p28,
														_1: {
															ctor: '::',
															_0: _p25,
															_1: A3(_elm_lang$core$List$takeFast, ctr + 1, n - 4, _p24)
														}
													}
												}
											};
										} else {
											break _v26_5;
										}
								}
							} else {
								if (_p23._0 === 1) {
									break _v26_1;
								} else {
									break _v26_5;
								}
							}
						}
					} else {
						break _v26_5;
					}
				} while(false);
				return {
					ctor: '::',
					_0: _p23._1._0,
					_1: {ctor: '[]'}
				};
			} while(false);
			return list;
		}
	});
var _elm_lang$core$List$take = F2(
	function (n, list) {
		return A3(_elm_lang$core$List$takeFast, 0, n, list);
	});
var _elm_lang$core$List$repeatHelp = F3(
	function (result, n, value) {
		repeatHelp:
		while (true) {
			if (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) {
				return result;
			} else {
				var _v27 = {ctor: '::', _0: value, _1: result},
					_v28 = n - 1,
					_v29 = value;
				result = _v27;
				n = _v28;
				value = _v29;
				continue repeatHelp;
			}
		}
	});
var _elm_lang$core$List$repeat = F2(
	function (n, value) {
		return A3(
			_elm_lang$core$List$repeatHelp,
			{ctor: '[]'},
			n,
			value);
	});
var _elm_lang$core$List$rangeHelp = F3(
	function (lo, hi, list) {
		rangeHelp:
		while (true) {
			if (_elm_lang$core$Native_Utils.cmp(lo, hi) < 1) {
				var _v30 = lo,
					_v31 = hi - 1,
					_v32 = {ctor: '::', _0: hi, _1: list};
				lo = _v30;
				hi = _v31;
				list = _v32;
				continue rangeHelp;
			} else {
				return list;
			}
		}
	});
var _elm_lang$core$List$range = F2(
	function (lo, hi) {
		return A3(
			_elm_lang$core$List$rangeHelp,
			lo,
			hi,
			{ctor: '[]'});
	});
var _elm_lang$core$List$indexedMap = F2(
	function (f, xs) {
		return A3(
			_elm_lang$core$List$map2,
			f,
			A2(
				_elm_lang$core$List$range,
				0,
				_elm_lang$core$List$length(xs) - 1),
			xs);
	});

//import Native.Utils //

var _elm_lang$core$Native_Debug = function() {

function log(tag, value)
{
	var msg = tag + ': ' + _elm_lang$core$Native_Utils.toString(value);
	var process = process || {};
	if (process.stdout)
	{
		process.stdout.write(msg);
	}
	else
	{
		console.log(msg);
	}
	return value;
}

function crash(message)
{
	throw new Error(message);
}

return {
	crash: crash,
	log: F2(log)
};

}();
//import Maybe, Native.List, Native.Utils, Result //

var _elm_lang$core$Native_String = function() {

function isEmpty(str)
{
	return str.length === 0;
}
function cons(chr, str)
{
	return chr + str;
}
function uncons(str)
{
	var hd = str[0];
	if (hd)
	{
		return _elm_lang$core$Maybe$Just(_elm_lang$core$Native_Utils.Tuple2(_elm_lang$core$Native_Utils.chr(hd), str.slice(1)));
	}
	return _elm_lang$core$Maybe$Nothing;
}
function append(a, b)
{
	return a + b;
}
function concat(strs)
{
	return _elm_lang$core$Native_List.toArray(strs).join('');
}
function length(str)
{
	return str.length;
}
function map(f, str)
{
	var out = str.split('');
	for (var i = out.length; i--; )
	{
		out[i] = f(_elm_lang$core$Native_Utils.chr(out[i]));
	}
	return out.join('');
}
function filter(pred, str)
{
	return str.split('').map(_elm_lang$core$Native_Utils.chr).filter(pred).join('');
}
function reverse(str)
{
	return str.split('').reverse().join('');
}
function foldl(f, b, str)
{
	var len = str.length;
	for (var i = 0; i < len; ++i)
	{
		b = A2(f, _elm_lang$core$Native_Utils.chr(str[i]), b);
	}
	return b;
}
function foldr(f, b, str)
{
	for (var i = str.length; i--; )
	{
		b = A2(f, _elm_lang$core$Native_Utils.chr(str[i]), b);
	}
	return b;
}
function split(sep, str)
{
	return _elm_lang$core$Native_List.fromArray(str.split(sep));
}
function join(sep, strs)
{
	return _elm_lang$core$Native_List.toArray(strs).join(sep);
}
function repeat(n, str)
{
	var result = '';
	while (n > 0)
	{
		if (n & 1)
		{
			result += str;
		}
		n >>= 1, str += str;
	}
	return result;
}
function slice(start, end, str)
{
	return str.slice(start, end);
}
function left(n, str)
{
	return n < 1 ? '' : str.slice(0, n);
}
function right(n, str)
{
	return n < 1 ? '' : str.slice(-n);
}
function dropLeft(n, str)
{
	return n < 1 ? str : str.slice(n);
}
function dropRight(n, str)
{
	return n < 1 ? str : str.slice(0, -n);
}
function pad(n, chr, str)
{
	var half = (n - str.length) / 2;
	return repeat(Math.ceil(half), chr) + str + repeat(half | 0, chr);
}
function padRight(n, chr, str)
{
	return str + repeat(n - str.length, chr);
}
function padLeft(n, chr, str)
{
	return repeat(n - str.length, chr) + str;
}

function trim(str)
{
	return str.trim();
}
function trimLeft(str)
{
	return str.replace(/^\s+/, '');
}
function trimRight(str)
{
	return str.replace(/\s+$/, '');
}

function words(str)
{
	return _elm_lang$core$Native_List.fromArray(str.trim().split(/\s+/g));
}
function lines(str)
{
	return _elm_lang$core$Native_List.fromArray(str.split(/\r\n|\r|\n/g));
}

function toUpper(str)
{
	return str.toUpperCase();
}
function toLower(str)
{
	return str.toLowerCase();
}

function any(pred, str)
{
	for (var i = str.length; i--; )
	{
		if (pred(_elm_lang$core$Native_Utils.chr(str[i])))
		{
			return true;
		}
	}
	return false;
}
function all(pred, str)
{
	for (var i = str.length; i--; )
	{
		if (!pred(_elm_lang$core$Native_Utils.chr(str[i])))
		{
			return false;
		}
	}
	return true;
}

function contains(sub, str)
{
	return str.indexOf(sub) > -1;
}
function startsWith(sub, str)
{
	return str.indexOf(sub) === 0;
}
function endsWith(sub, str)
{
	return str.length >= sub.length &&
		str.lastIndexOf(sub) === str.length - sub.length;
}
function indexes(sub, str)
{
	var subLen = sub.length;

	if (subLen < 1)
	{
		return _elm_lang$core$Native_List.Nil;
	}

	var i = 0;
	var is = [];

	while ((i = str.indexOf(sub, i)) > -1)
	{
		is.push(i);
		i = i + subLen;
	}

	return _elm_lang$core$Native_List.fromArray(is);
}


function toInt(s)
{
	var len = s.length;

	// if empty
	if (len === 0)
	{
		return intErr(s);
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
			return intErr(s);
		}
		return _elm_lang$core$Result$Ok(parseInt(s, 16));
	}

	// is decimal
	if (c > '9' || (c < '0' && c !== '-' && c !== '+'))
	{
		return intErr(s);
	}
	for (var i = 1; i < len; ++i)
	{
		var c = s[i];
		if (c < '0' || '9' < c)
		{
			return intErr(s);
		}
	}

	return _elm_lang$core$Result$Ok(parseInt(s, 10));
}

function intErr(s)
{
	return _elm_lang$core$Result$Err("could not convert string '" + s + "' to an Int");
}


function toFloat(s)
{
	// check if it is a hex, octal, or binary number
	if (s.length === 0 || /[\sxbo]/.test(s))
	{
		return floatErr(s);
	}
	var n = +s;
	// faster isNaN check
	return n === n ? _elm_lang$core$Result$Ok(n) : floatErr(s);
}

function floatErr(s)
{
	return _elm_lang$core$Result$Err("could not convert string '" + s + "' to a Float");
}


function toList(str)
{
	return _elm_lang$core$Native_List.fromArray(str.split('').map(_elm_lang$core$Native_Utils.chr));
}
function fromList(chars)
{
	return _elm_lang$core$Native_List.toArray(chars).join('');
}

return {
	isEmpty: isEmpty,
	cons: F2(cons),
	uncons: uncons,
	append: F2(append),
	concat: concat,
	length: length,
	map: F2(map),
	filter: F2(filter),
	reverse: reverse,
	foldl: F3(foldl),
	foldr: F3(foldr),

	split: F2(split),
	join: F2(join),
	repeat: F2(repeat),

	slice: F3(slice),
	left: F2(left),
	right: F2(right),
	dropLeft: F2(dropLeft),
	dropRight: F2(dropRight),

	pad: F3(pad),
	padLeft: F3(padLeft),
	padRight: F3(padRight),

	trim: trim,
	trimLeft: trimLeft,
	trimRight: trimRight,

	words: words,
	lines: lines,

	toUpper: toUpper,
	toLower: toLower,

	any: F2(any),
	all: F2(all),

	contains: F2(contains),
	startsWith: F2(startsWith),
	endsWith: F2(endsWith),
	indexes: F2(indexes),

	toInt: toInt,
	toFloat: toFloat,
	toList: toList,
	fromList: fromList
};

}();

//import Native.Utils //

var _elm_lang$core$Native_Char = function() {

return {
	fromCode: function(c) { return _elm_lang$core$Native_Utils.chr(String.fromCharCode(c)); },
	toCode: function(c) { return c.charCodeAt(0); },
	toUpper: function(c) { return _elm_lang$core$Native_Utils.chr(c.toUpperCase()); },
	toLower: function(c) { return _elm_lang$core$Native_Utils.chr(c.toLowerCase()); },
	toLocaleUpper: function(c) { return _elm_lang$core$Native_Utils.chr(c.toLocaleUpperCase()); },
	toLocaleLower: function(c) { return _elm_lang$core$Native_Utils.chr(c.toLocaleLowerCase()); }
};

}();
var _elm_lang$core$Char$fromCode = _elm_lang$core$Native_Char.fromCode;
var _elm_lang$core$Char$toCode = _elm_lang$core$Native_Char.toCode;
var _elm_lang$core$Char$toLocaleLower = _elm_lang$core$Native_Char.toLocaleLower;
var _elm_lang$core$Char$toLocaleUpper = _elm_lang$core$Native_Char.toLocaleUpper;
var _elm_lang$core$Char$toLower = _elm_lang$core$Native_Char.toLower;
var _elm_lang$core$Char$toUpper = _elm_lang$core$Native_Char.toUpper;
var _elm_lang$core$Char$isBetween = F3(
	function (low, high, $char) {
		var code = _elm_lang$core$Char$toCode($char);
		return (_elm_lang$core$Native_Utils.cmp(
			code,
			_elm_lang$core$Char$toCode(low)) > -1) && (_elm_lang$core$Native_Utils.cmp(
			code,
			_elm_lang$core$Char$toCode(high)) < 1);
	});
var _elm_lang$core$Char$isUpper = A2(
	_elm_lang$core$Char$isBetween,
	_elm_lang$core$Native_Utils.chr('A'),
	_elm_lang$core$Native_Utils.chr('Z'));
var _elm_lang$core$Char$isLower = A2(
	_elm_lang$core$Char$isBetween,
	_elm_lang$core$Native_Utils.chr('a'),
	_elm_lang$core$Native_Utils.chr('z'));
var _elm_lang$core$Char$isDigit = A2(
	_elm_lang$core$Char$isBetween,
	_elm_lang$core$Native_Utils.chr('0'),
	_elm_lang$core$Native_Utils.chr('9'));
var _elm_lang$core$Char$isOctDigit = A2(
	_elm_lang$core$Char$isBetween,
	_elm_lang$core$Native_Utils.chr('0'),
	_elm_lang$core$Native_Utils.chr('7'));
var _elm_lang$core$Char$isHexDigit = function ($char) {
	return _elm_lang$core$Char$isDigit($char) || (A3(
		_elm_lang$core$Char$isBetween,
		_elm_lang$core$Native_Utils.chr('a'),
		_elm_lang$core$Native_Utils.chr('f'),
		$char) || A3(
		_elm_lang$core$Char$isBetween,
		_elm_lang$core$Native_Utils.chr('A'),
		_elm_lang$core$Native_Utils.chr('F'),
		$char));
};

var _elm_lang$core$Result$toMaybe = function (result) {
	var _p0 = result;
	if (_p0.ctor === 'Ok') {
		return _elm_lang$core$Maybe$Just(_p0._0);
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_lang$core$Result$withDefault = F2(
	function (def, result) {
		var _p1 = result;
		if (_p1.ctor === 'Ok') {
			return _p1._0;
		} else {
			return def;
		}
	});
var _elm_lang$core$Result$Err = function (a) {
	return {ctor: 'Err', _0: a};
};
var _elm_lang$core$Result$andThen = F2(
	function (callback, result) {
		var _p2 = result;
		if (_p2.ctor === 'Ok') {
			return callback(_p2._0);
		} else {
			return _elm_lang$core$Result$Err(_p2._0);
		}
	});
var _elm_lang$core$Result$Ok = function (a) {
	return {ctor: 'Ok', _0: a};
};
var _elm_lang$core$Result$map = F2(
	function (func, ra) {
		var _p3 = ra;
		if (_p3.ctor === 'Ok') {
			return _elm_lang$core$Result$Ok(
				func(_p3._0));
		} else {
			return _elm_lang$core$Result$Err(_p3._0);
		}
	});
var _elm_lang$core$Result$map2 = F3(
	function (func, ra, rb) {
		var _p4 = {ctor: '_Tuple2', _0: ra, _1: rb};
		if (_p4._0.ctor === 'Ok') {
			if (_p4._1.ctor === 'Ok') {
				return _elm_lang$core$Result$Ok(
					A2(func, _p4._0._0, _p4._1._0));
			} else {
				return _elm_lang$core$Result$Err(_p4._1._0);
			}
		} else {
			return _elm_lang$core$Result$Err(_p4._0._0);
		}
	});
var _elm_lang$core$Result$map3 = F4(
	function (func, ra, rb, rc) {
		var _p5 = {ctor: '_Tuple3', _0: ra, _1: rb, _2: rc};
		if (_p5._0.ctor === 'Ok') {
			if (_p5._1.ctor === 'Ok') {
				if (_p5._2.ctor === 'Ok') {
					return _elm_lang$core$Result$Ok(
						A3(func, _p5._0._0, _p5._1._0, _p5._2._0));
				} else {
					return _elm_lang$core$Result$Err(_p5._2._0);
				}
			} else {
				return _elm_lang$core$Result$Err(_p5._1._0);
			}
		} else {
			return _elm_lang$core$Result$Err(_p5._0._0);
		}
	});
var _elm_lang$core$Result$map4 = F5(
	function (func, ra, rb, rc, rd) {
		var _p6 = {ctor: '_Tuple4', _0: ra, _1: rb, _2: rc, _3: rd};
		if (_p6._0.ctor === 'Ok') {
			if (_p6._1.ctor === 'Ok') {
				if (_p6._2.ctor === 'Ok') {
					if (_p6._3.ctor === 'Ok') {
						return _elm_lang$core$Result$Ok(
							A4(func, _p6._0._0, _p6._1._0, _p6._2._0, _p6._3._0));
					} else {
						return _elm_lang$core$Result$Err(_p6._3._0);
					}
				} else {
					return _elm_lang$core$Result$Err(_p6._2._0);
				}
			} else {
				return _elm_lang$core$Result$Err(_p6._1._0);
			}
		} else {
			return _elm_lang$core$Result$Err(_p6._0._0);
		}
	});
var _elm_lang$core$Result$map5 = F6(
	function (func, ra, rb, rc, rd, re) {
		var _p7 = {ctor: '_Tuple5', _0: ra, _1: rb, _2: rc, _3: rd, _4: re};
		if (_p7._0.ctor === 'Ok') {
			if (_p7._1.ctor === 'Ok') {
				if (_p7._2.ctor === 'Ok') {
					if (_p7._3.ctor === 'Ok') {
						if (_p7._4.ctor === 'Ok') {
							return _elm_lang$core$Result$Ok(
								A5(func, _p7._0._0, _p7._1._0, _p7._2._0, _p7._3._0, _p7._4._0));
						} else {
							return _elm_lang$core$Result$Err(_p7._4._0);
						}
					} else {
						return _elm_lang$core$Result$Err(_p7._3._0);
					}
				} else {
					return _elm_lang$core$Result$Err(_p7._2._0);
				}
			} else {
				return _elm_lang$core$Result$Err(_p7._1._0);
			}
		} else {
			return _elm_lang$core$Result$Err(_p7._0._0);
		}
	});
var _elm_lang$core$Result$mapError = F2(
	function (f, result) {
		var _p8 = result;
		if (_p8.ctor === 'Ok') {
			return _elm_lang$core$Result$Ok(_p8._0);
		} else {
			return _elm_lang$core$Result$Err(
				f(_p8._0));
		}
	});
var _elm_lang$core$Result$fromMaybe = F2(
	function (err, maybe) {
		var _p9 = maybe;
		if (_p9.ctor === 'Just') {
			return _elm_lang$core$Result$Ok(_p9._0);
		} else {
			return _elm_lang$core$Result$Err(err);
		}
	});

var _elm_lang$core$String$fromList = _elm_lang$core$Native_String.fromList;
var _elm_lang$core$String$toList = _elm_lang$core$Native_String.toList;
var _elm_lang$core$String$toFloat = _elm_lang$core$Native_String.toFloat;
var _elm_lang$core$String$toInt = _elm_lang$core$Native_String.toInt;
var _elm_lang$core$String$indices = _elm_lang$core$Native_String.indexes;
var _elm_lang$core$String$indexes = _elm_lang$core$Native_String.indexes;
var _elm_lang$core$String$endsWith = _elm_lang$core$Native_String.endsWith;
var _elm_lang$core$String$startsWith = _elm_lang$core$Native_String.startsWith;
var _elm_lang$core$String$contains = _elm_lang$core$Native_String.contains;
var _elm_lang$core$String$all = _elm_lang$core$Native_String.all;
var _elm_lang$core$String$any = _elm_lang$core$Native_String.any;
var _elm_lang$core$String$toLower = _elm_lang$core$Native_String.toLower;
var _elm_lang$core$String$toUpper = _elm_lang$core$Native_String.toUpper;
var _elm_lang$core$String$lines = _elm_lang$core$Native_String.lines;
var _elm_lang$core$String$words = _elm_lang$core$Native_String.words;
var _elm_lang$core$String$trimRight = _elm_lang$core$Native_String.trimRight;
var _elm_lang$core$String$trimLeft = _elm_lang$core$Native_String.trimLeft;
var _elm_lang$core$String$trim = _elm_lang$core$Native_String.trim;
var _elm_lang$core$String$padRight = _elm_lang$core$Native_String.padRight;
var _elm_lang$core$String$padLeft = _elm_lang$core$Native_String.padLeft;
var _elm_lang$core$String$pad = _elm_lang$core$Native_String.pad;
var _elm_lang$core$String$dropRight = _elm_lang$core$Native_String.dropRight;
var _elm_lang$core$String$dropLeft = _elm_lang$core$Native_String.dropLeft;
var _elm_lang$core$String$right = _elm_lang$core$Native_String.right;
var _elm_lang$core$String$left = _elm_lang$core$Native_String.left;
var _elm_lang$core$String$slice = _elm_lang$core$Native_String.slice;
var _elm_lang$core$String$repeat = _elm_lang$core$Native_String.repeat;
var _elm_lang$core$String$join = _elm_lang$core$Native_String.join;
var _elm_lang$core$String$split = _elm_lang$core$Native_String.split;
var _elm_lang$core$String$foldr = _elm_lang$core$Native_String.foldr;
var _elm_lang$core$String$foldl = _elm_lang$core$Native_String.foldl;
var _elm_lang$core$String$reverse = _elm_lang$core$Native_String.reverse;
var _elm_lang$core$String$filter = _elm_lang$core$Native_String.filter;
var _elm_lang$core$String$map = _elm_lang$core$Native_String.map;
var _elm_lang$core$String$length = _elm_lang$core$Native_String.length;
var _elm_lang$core$String$concat = _elm_lang$core$Native_String.concat;
var _elm_lang$core$String$append = _elm_lang$core$Native_String.append;
var _elm_lang$core$String$uncons = _elm_lang$core$Native_String.uncons;
var _elm_lang$core$String$cons = _elm_lang$core$Native_String.cons;
var _elm_lang$core$String$fromChar = function ($char) {
	return A2(_elm_lang$core$String$cons, $char, '');
};
var _elm_lang$core$String$isEmpty = _elm_lang$core$Native_String.isEmpty;

var _elm_lang$core$Dict$foldr = F3(
	function (f, acc, t) {
		foldr:
		while (true) {
			var _p0 = t;
			if (_p0.ctor === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var _v1 = f,
					_v2 = A3(
					f,
					_p0._1,
					_p0._2,
					A3(_elm_lang$core$Dict$foldr, f, acc, _p0._4)),
					_v3 = _p0._3;
				f = _v1;
				acc = _v2;
				t = _v3;
				continue foldr;
			}
		}
	});
var _elm_lang$core$Dict$keys = function (dict) {
	return A3(
		_elm_lang$core$Dict$foldr,
		F3(
			function (key, value, keyList) {
				return {ctor: '::', _0: key, _1: keyList};
			}),
		{ctor: '[]'},
		dict);
};
var _elm_lang$core$Dict$values = function (dict) {
	return A3(
		_elm_lang$core$Dict$foldr,
		F3(
			function (key, value, valueList) {
				return {ctor: '::', _0: value, _1: valueList};
			}),
		{ctor: '[]'},
		dict);
};
var _elm_lang$core$Dict$toList = function (dict) {
	return A3(
		_elm_lang$core$Dict$foldr,
		F3(
			function (key, value, list) {
				return {
					ctor: '::',
					_0: {ctor: '_Tuple2', _0: key, _1: value},
					_1: list
				};
			}),
		{ctor: '[]'},
		dict);
};
var _elm_lang$core$Dict$foldl = F3(
	function (f, acc, dict) {
		foldl:
		while (true) {
			var _p1 = dict;
			if (_p1.ctor === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var _v5 = f,
					_v6 = A3(
					f,
					_p1._1,
					_p1._2,
					A3(_elm_lang$core$Dict$foldl, f, acc, _p1._3)),
					_v7 = _p1._4;
				f = _v5;
				acc = _v6;
				dict = _v7;
				continue foldl;
			}
		}
	});
var _elm_lang$core$Dict$merge = F6(
	function (leftStep, bothStep, rightStep, leftDict, rightDict, initialResult) {
		var stepState = F3(
			function (rKey, rValue, _p2) {
				stepState:
				while (true) {
					var _p3 = _p2;
					var _p9 = _p3._1;
					var _p8 = _p3._0;
					var _p4 = _p8;
					if (_p4.ctor === '[]') {
						return {
							ctor: '_Tuple2',
							_0: _p8,
							_1: A3(rightStep, rKey, rValue, _p9)
						};
					} else {
						var _p7 = _p4._1;
						var _p6 = _p4._0._1;
						var _p5 = _p4._0._0;
						if (_elm_lang$core$Native_Utils.cmp(_p5, rKey) < 0) {
							var _v10 = rKey,
								_v11 = rValue,
								_v12 = {
								ctor: '_Tuple2',
								_0: _p7,
								_1: A3(leftStep, _p5, _p6, _p9)
							};
							rKey = _v10;
							rValue = _v11;
							_p2 = _v12;
							continue stepState;
						} else {
							if (_elm_lang$core$Native_Utils.cmp(_p5, rKey) > 0) {
								return {
									ctor: '_Tuple2',
									_0: _p8,
									_1: A3(rightStep, rKey, rValue, _p9)
								};
							} else {
								return {
									ctor: '_Tuple2',
									_0: _p7,
									_1: A4(bothStep, _p5, _p6, rValue, _p9)
								};
							}
						}
					}
				}
			});
		var _p10 = A3(
			_elm_lang$core$Dict$foldl,
			stepState,
			{
				ctor: '_Tuple2',
				_0: _elm_lang$core$Dict$toList(leftDict),
				_1: initialResult
			},
			rightDict);
		var leftovers = _p10._0;
		var intermediateResult = _p10._1;
		return A3(
			_elm_lang$core$List$foldl,
			F2(
				function (_p11, result) {
					var _p12 = _p11;
					return A3(leftStep, _p12._0, _p12._1, result);
				}),
			intermediateResult,
			leftovers);
	});
var _elm_lang$core$Dict$reportRemBug = F4(
	function (msg, c, lgot, rgot) {
		return _elm_lang$core$Native_Debug.crash(
			_elm_lang$core$String$concat(
				{
					ctor: '::',
					_0: 'Internal red-black tree invariant violated, expected ',
					_1: {
						ctor: '::',
						_0: msg,
						_1: {
							ctor: '::',
							_0: ' and got ',
							_1: {
								ctor: '::',
								_0: _elm_lang$core$Basics$toString(c),
								_1: {
									ctor: '::',
									_0: '/',
									_1: {
										ctor: '::',
										_0: lgot,
										_1: {
											ctor: '::',
											_0: '/',
											_1: {
												ctor: '::',
												_0: rgot,
												_1: {
													ctor: '::',
													_0: '\nPlease report this bug to <https://github.com/elm-lang/core/issues>',
													_1: {ctor: '[]'}
												}
											}
										}
									}
								}
							}
						}
					}
				}));
	});
var _elm_lang$core$Dict$isBBlack = function (dict) {
	var _p13 = dict;
	_v14_2:
	do {
		if (_p13.ctor === 'RBNode_elm_builtin') {
			if (_p13._0.ctor === 'BBlack') {
				return true;
			} else {
				break _v14_2;
			}
		} else {
			if (_p13._0.ctor === 'LBBlack') {
				return true;
			} else {
				break _v14_2;
			}
		}
	} while(false);
	return false;
};
var _elm_lang$core$Dict$sizeHelp = F2(
	function (n, dict) {
		sizeHelp:
		while (true) {
			var _p14 = dict;
			if (_p14.ctor === 'RBEmpty_elm_builtin') {
				return n;
			} else {
				var _v16 = A2(_elm_lang$core$Dict$sizeHelp, n + 1, _p14._4),
					_v17 = _p14._3;
				n = _v16;
				dict = _v17;
				continue sizeHelp;
			}
		}
	});
var _elm_lang$core$Dict$size = function (dict) {
	return A2(_elm_lang$core$Dict$sizeHelp, 0, dict);
};
var _elm_lang$core$Dict$get = F2(
	function (targetKey, dict) {
		get:
		while (true) {
			var _p15 = dict;
			if (_p15.ctor === 'RBEmpty_elm_builtin') {
				return _elm_lang$core$Maybe$Nothing;
			} else {
				var _p16 = A2(_elm_lang$core$Basics$compare, targetKey, _p15._1);
				switch (_p16.ctor) {
					case 'LT':
						var _v20 = targetKey,
							_v21 = _p15._3;
						targetKey = _v20;
						dict = _v21;
						continue get;
					case 'EQ':
						return _elm_lang$core$Maybe$Just(_p15._2);
					default:
						var _v22 = targetKey,
							_v23 = _p15._4;
						targetKey = _v22;
						dict = _v23;
						continue get;
				}
			}
		}
	});
var _elm_lang$core$Dict$member = F2(
	function (key, dict) {
		var _p17 = A2(_elm_lang$core$Dict$get, key, dict);
		if (_p17.ctor === 'Just') {
			return true;
		} else {
			return false;
		}
	});
var _elm_lang$core$Dict$maxWithDefault = F3(
	function (k, v, r) {
		maxWithDefault:
		while (true) {
			var _p18 = r;
			if (_p18.ctor === 'RBEmpty_elm_builtin') {
				return {ctor: '_Tuple2', _0: k, _1: v};
			} else {
				var _v26 = _p18._1,
					_v27 = _p18._2,
					_v28 = _p18._4;
				k = _v26;
				v = _v27;
				r = _v28;
				continue maxWithDefault;
			}
		}
	});
var _elm_lang$core$Dict$NBlack = {ctor: 'NBlack'};
var _elm_lang$core$Dict$BBlack = {ctor: 'BBlack'};
var _elm_lang$core$Dict$Black = {ctor: 'Black'};
var _elm_lang$core$Dict$blackish = function (t) {
	var _p19 = t;
	if (_p19.ctor === 'RBNode_elm_builtin') {
		var _p20 = _p19._0;
		return _elm_lang$core$Native_Utils.eq(_p20, _elm_lang$core$Dict$Black) || _elm_lang$core$Native_Utils.eq(_p20, _elm_lang$core$Dict$BBlack);
	} else {
		return true;
	}
};
var _elm_lang$core$Dict$Red = {ctor: 'Red'};
var _elm_lang$core$Dict$moreBlack = function (color) {
	var _p21 = color;
	switch (_p21.ctor) {
		case 'Black':
			return _elm_lang$core$Dict$BBlack;
		case 'Red':
			return _elm_lang$core$Dict$Black;
		case 'NBlack':
			return _elm_lang$core$Dict$Red;
		default:
			return _elm_lang$core$Native_Debug.crash('Can\'t make a double black node more black!');
	}
};
var _elm_lang$core$Dict$lessBlack = function (color) {
	var _p22 = color;
	switch (_p22.ctor) {
		case 'BBlack':
			return _elm_lang$core$Dict$Black;
		case 'Black':
			return _elm_lang$core$Dict$Red;
		case 'Red':
			return _elm_lang$core$Dict$NBlack;
		default:
			return _elm_lang$core$Native_Debug.crash('Can\'t make a negative black node less black!');
	}
};
var _elm_lang$core$Dict$LBBlack = {ctor: 'LBBlack'};
var _elm_lang$core$Dict$LBlack = {ctor: 'LBlack'};
var _elm_lang$core$Dict$RBEmpty_elm_builtin = function (a) {
	return {ctor: 'RBEmpty_elm_builtin', _0: a};
};
var _elm_lang$core$Dict$empty = _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
var _elm_lang$core$Dict$isEmpty = function (dict) {
	return _elm_lang$core$Native_Utils.eq(dict, _elm_lang$core$Dict$empty);
};
var _elm_lang$core$Dict$RBNode_elm_builtin = F5(
	function (a, b, c, d, e) {
		return {ctor: 'RBNode_elm_builtin', _0: a, _1: b, _2: c, _3: d, _4: e};
	});
var _elm_lang$core$Dict$ensureBlackRoot = function (dict) {
	var _p23 = dict;
	if ((_p23.ctor === 'RBNode_elm_builtin') && (_p23._0.ctor === 'Red')) {
		return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p23._1, _p23._2, _p23._3, _p23._4);
	} else {
		return dict;
	}
};
var _elm_lang$core$Dict$lessBlackTree = function (dict) {
	var _p24 = dict;
	if (_p24.ctor === 'RBNode_elm_builtin') {
		return A5(
			_elm_lang$core$Dict$RBNode_elm_builtin,
			_elm_lang$core$Dict$lessBlack(_p24._0),
			_p24._1,
			_p24._2,
			_p24._3,
			_p24._4);
	} else {
		return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
	}
};
var _elm_lang$core$Dict$balancedTree = function (col) {
	return function (xk) {
		return function (xv) {
			return function (yk) {
				return function (yv) {
					return function (zk) {
						return function (zv) {
							return function (a) {
								return function (b) {
									return function (c) {
										return function (d) {
											return A5(
												_elm_lang$core$Dict$RBNode_elm_builtin,
												_elm_lang$core$Dict$lessBlack(col),
												yk,
												yv,
												A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, xk, xv, a, b),
												A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, zk, zv, c, d));
										};
									};
								};
							};
						};
					};
				};
			};
		};
	};
};
var _elm_lang$core$Dict$blacken = function (t) {
	var _p25 = t;
	if (_p25.ctor === 'RBEmpty_elm_builtin') {
		return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
	} else {
		return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p25._1, _p25._2, _p25._3, _p25._4);
	}
};
var _elm_lang$core$Dict$redden = function (t) {
	var _p26 = t;
	if (_p26.ctor === 'RBEmpty_elm_builtin') {
		return _elm_lang$core$Native_Debug.crash('can\'t make a Leaf red');
	} else {
		return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Red, _p26._1, _p26._2, _p26._3, _p26._4);
	}
};
var _elm_lang$core$Dict$balanceHelp = function (tree) {
	var _p27 = tree;
	_v36_6:
	do {
		_v36_5:
		do {
			_v36_4:
			do {
				_v36_3:
				do {
					_v36_2:
					do {
						_v36_1:
						do {
							_v36_0:
							do {
								if (_p27.ctor === 'RBNode_elm_builtin') {
									if (_p27._3.ctor === 'RBNode_elm_builtin') {
										if (_p27._4.ctor === 'RBNode_elm_builtin') {
											switch (_p27._3._0.ctor) {
												case 'Red':
													switch (_p27._4._0.ctor) {
														case 'Red':
															if ((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Red')) {
																break _v36_0;
															} else {
																if ((_p27._3._4.ctor === 'RBNode_elm_builtin') && (_p27._3._4._0.ctor === 'Red')) {
																	break _v36_1;
																} else {
																	if ((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Red')) {
																		break _v36_2;
																	} else {
																		if ((_p27._4._4.ctor === 'RBNode_elm_builtin') && (_p27._4._4._0.ctor === 'Red')) {
																			break _v36_3;
																		} else {
																			break _v36_6;
																		}
																	}
																}
															}
														case 'NBlack':
															if ((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Red')) {
																break _v36_0;
															} else {
																if ((_p27._3._4.ctor === 'RBNode_elm_builtin') && (_p27._3._4._0.ctor === 'Red')) {
																	break _v36_1;
																} else {
																	if (((((_p27._0.ctor === 'BBlack') && (_p27._4._3.ctor === 'RBNode_elm_builtin')) && (_p27._4._3._0.ctor === 'Black')) && (_p27._4._4.ctor === 'RBNode_elm_builtin')) && (_p27._4._4._0.ctor === 'Black')) {
																		break _v36_4;
																	} else {
																		break _v36_6;
																	}
																}
															}
														default:
															if ((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Red')) {
																break _v36_0;
															} else {
																if ((_p27._3._4.ctor === 'RBNode_elm_builtin') && (_p27._3._4._0.ctor === 'Red')) {
																	break _v36_1;
																} else {
																	break _v36_6;
																}
															}
													}
												case 'NBlack':
													switch (_p27._4._0.ctor) {
														case 'Red':
															if ((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Red')) {
																break _v36_2;
															} else {
																if ((_p27._4._4.ctor === 'RBNode_elm_builtin') && (_p27._4._4._0.ctor === 'Red')) {
																	break _v36_3;
																} else {
																	if (((((_p27._0.ctor === 'BBlack') && (_p27._3._3.ctor === 'RBNode_elm_builtin')) && (_p27._3._3._0.ctor === 'Black')) && (_p27._3._4.ctor === 'RBNode_elm_builtin')) && (_p27._3._4._0.ctor === 'Black')) {
																		break _v36_5;
																	} else {
																		break _v36_6;
																	}
																}
															}
														case 'NBlack':
															if (_p27._0.ctor === 'BBlack') {
																if ((((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Black')) && (_p27._4._4.ctor === 'RBNode_elm_builtin')) && (_p27._4._4._0.ctor === 'Black')) {
																	break _v36_4;
																} else {
																	if ((((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Black')) && (_p27._3._4.ctor === 'RBNode_elm_builtin')) && (_p27._3._4._0.ctor === 'Black')) {
																		break _v36_5;
																	} else {
																		break _v36_6;
																	}
																}
															} else {
																break _v36_6;
															}
														default:
															if (((((_p27._0.ctor === 'BBlack') && (_p27._3._3.ctor === 'RBNode_elm_builtin')) && (_p27._3._3._0.ctor === 'Black')) && (_p27._3._4.ctor === 'RBNode_elm_builtin')) && (_p27._3._4._0.ctor === 'Black')) {
																break _v36_5;
															} else {
																break _v36_6;
															}
													}
												default:
													switch (_p27._4._0.ctor) {
														case 'Red':
															if ((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Red')) {
																break _v36_2;
															} else {
																if ((_p27._4._4.ctor === 'RBNode_elm_builtin') && (_p27._4._4._0.ctor === 'Red')) {
																	break _v36_3;
																} else {
																	break _v36_6;
																}
															}
														case 'NBlack':
															if (((((_p27._0.ctor === 'BBlack') && (_p27._4._3.ctor === 'RBNode_elm_builtin')) && (_p27._4._3._0.ctor === 'Black')) && (_p27._4._4.ctor === 'RBNode_elm_builtin')) && (_p27._4._4._0.ctor === 'Black')) {
																break _v36_4;
															} else {
																break _v36_6;
															}
														default:
															break _v36_6;
													}
											}
										} else {
											switch (_p27._3._0.ctor) {
												case 'Red':
													if ((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Red')) {
														break _v36_0;
													} else {
														if ((_p27._3._4.ctor === 'RBNode_elm_builtin') && (_p27._3._4._0.ctor === 'Red')) {
															break _v36_1;
														} else {
															break _v36_6;
														}
													}
												case 'NBlack':
													if (((((_p27._0.ctor === 'BBlack') && (_p27._3._3.ctor === 'RBNode_elm_builtin')) && (_p27._3._3._0.ctor === 'Black')) && (_p27._3._4.ctor === 'RBNode_elm_builtin')) && (_p27._3._4._0.ctor === 'Black')) {
														break _v36_5;
													} else {
														break _v36_6;
													}
												default:
													break _v36_6;
											}
										}
									} else {
										if (_p27._4.ctor === 'RBNode_elm_builtin') {
											switch (_p27._4._0.ctor) {
												case 'Red':
													if ((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Red')) {
														break _v36_2;
													} else {
														if ((_p27._4._4.ctor === 'RBNode_elm_builtin') && (_p27._4._4._0.ctor === 'Red')) {
															break _v36_3;
														} else {
															break _v36_6;
														}
													}
												case 'NBlack':
													if (((((_p27._0.ctor === 'BBlack') && (_p27._4._3.ctor === 'RBNode_elm_builtin')) && (_p27._4._3._0.ctor === 'Black')) && (_p27._4._4.ctor === 'RBNode_elm_builtin')) && (_p27._4._4._0.ctor === 'Black')) {
														break _v36_4;
													} else {
														break _v36_6;
													}
												default:
													break _v36_6;
											}
										} else {
											break _v36_6;
										}
									}
								} else {
									break _v36_6;
								}
							} while(false);
							return _elm_lang$core$Dict$balancedTree(_p27._0)(_p27._3._3._1)(_p27._3._3._2)(_p27._3._1)(_p27._3._2)(_p27._1)(_p27._2)(_p27._3._3._3)(_p27._3._3._4)(_p27._3._4)(_p27._4);
						} while(false);
						return _elm_lang$core$Dict$balancedTree(_p27._0)(_p27._3._1)(_p27._3._2)(_p27._3._4._1)(_p27._3._4._2)(_p27._1)(_p27._2)(_p27._3._3)(_p27._3._4._3)(_p27._3._4._4)(_p27._4);
					} while(false);
					return _elm_lang$core$Dict$balancedTree(_p27._0)(_p27._1)(_p27._2)(_p27._4._3._1)(_p27._4._3._2)(_p27._4._1)(_p27._4._2)(_p27._3)(_p27._4._3._3)(_p27._4._3._4)(_p27._4._4);
				} while(false);
				return _elm_lang$core$Dict$balancedTree(_p27._0)(_p27._1)(_p27._2)(_p27._4._1)(_p27._4._2)(_p27._4._4._1)(_p27._4._4._2)(_p27._3)(_p27._4._3)(_p27._4._4._3)(_p27._4._4._4);
			} while(false);
			return A5(
				_elm_lang$core$Dict$RBNode_elm_builtin,
				_elm_lang$core$Dict$Black,
				_p27._4._3._1,
				_p27._4._3._2,
				A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p27._1, _p27._2, _p27._3, _p27._4._3._3),
				A5(
					_elm_lang$core$Dict$balance,
					_elm_lang$core$Dict$Black,
					_p27._4._1,
					_p27._4._2,
					_p27._4._3._4,
					_elm_lang$core$Dict$redden(_p27._4._4)));
		} while(false);
		return A5(
			_elm_lang$core$Dict$RBNode_elm_builtin,
			_elm_lang$core$Dict$Black,
			_p27._3._4._1,
			_p27._3._4._2,
			A5(
				_elm_lang$core$Dict$balance,
				_elm_lang$core$Dict$Black,
				_p27._3._1,
				_p27._3._2,
				_elm_lang$core$Dict$redden(_p27._3._3),
				_p27._3._4._3),
			A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p27._1, _p27._2, _p27._3._4._4, _p27._4));
	} while(false);
	return tree;
};
var _elm_lang$core$Dict$balance = F5(
	function (c, k, v, l, r) {
		var tree = A5(_elm_lang$core$Dict$RBNode_elm_builtin, c, k, v, l, r);
		return _elm_lang$core$Dict$blackish(tree) ? _elm_lang$core$Dict$balanceHelp(tree) : tree;
	});
var _elm_lang$core$Dict$bubble = F5(
	function (c, k, v, l, r) {
		return (_elm_lang$core$Dict$isBBlack(l) || _elm_lang$core$Dict$isBBlack(r)) ? A5(
			_elm_lang$core$Dict$balance,
			_elm_lang$core$Dict$moreBlack(c),
			k,
			v,
			_elm_lang$core$Dict$lessBlackTree(l),
			_elm_lang$core$Dict$lessBlackTree(r)) : A5(_elm_lang$core$Dict$RBNode_elm_builtin, c, k, v, l, r);
	});
var _elm_lang$core$Dict$removeMax = F5(
	function (c, k, v, l, r) {
		var _p28 = r;
		if (_p28.ctor === 'RBEmpty_elm_builtin') {
			return A3(_elm_lang$core$Dict$rem, c, l, r);
		} else {
			return A5(
				_elm_lang$core$Dict$bubble,
				c,
				k,
				v,
				l,
				A5(_elm_lang$core$Dict$removeMax, _p28._0, _p28._1, _p28._2, _p28._3, _p28._4));
		}
	});
var _elm_lang$core$Dict$rem = F3(
	function (color, left, right) {
		var _p29 = {ctor: '_Tuple2', _0: left, _1: right};
		if (_p29._0.ctor === 'RBEmpty_elm_builtin') {
			if (_p29._1.ctor === 'RBEmpty_elm_builtin') {
				var _p30 = color;
				switch (_p30.ctor) {
					case 'Red':
						return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
					case 'Black':
						return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBBlack);
					default:
						return _elm_lang$core$Native_Debug.crash('cannot have bblack or nblack nodes at this point');
				}
			} else {
				var _p33 = _p29._1._0;
				var _p32 = _p29._0._0;
				var _p31 = {ctor: '_Tuple3', _0: color, _1: _p32, _2: _p33};
				if ((((_p31.ctor === '_Tuple3') && (_p31._0.ctor === 'Black')) && (_p31._1.ctor === 'LBlack')) && (_p31._2.ctor === 'Red')) {
					return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p29._1._1, _p29._1._2, _p29._1._3, _p29._1._4);
				} else {
					return A4(
						_elm_lang$core$Dict$reportRemBug,
						'Black/LBlack/Red',
						color,
						_elm_lang$core$Basics$toString(_p32),
						_elm_lang$core$Basics$toString(_p33));
				}
			}
		} else {
			if (_p29._1.ctor === 'RBEmpty_elm_builtin') {
				var _p36 = _p29._1._0;
				var _p35 = _p29._0._0;
				var _p34 = {ctor: '_Tuple3', _0: color, _1: _p35, _2: _p36};
				if ((((_p34.ctor === '_Tuple3') && (_p34._0.ctor === 'Black')) && (_p34._1.ctor === 'Red')) && (_p34._2.ctor === 'LBlack')) {
					return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p29._0._1, _p29._0._2, _p29._0._3, _p29._0._4);
				} else {
					return A4(
						_elm_lang$core$Dict$reportRemBug,
						'Black/Red/LBlack',
						color,
						_elm_lang$core$Basics$toString(_p35),
						_elm_lang$core$Basics$toString(_p36));
				}
			} else {
				var _p40 = _p29._0._2;
				var _p39 = _p29._0._4;
				var _p38 = _p29._0._1;
				var newLeft = A5(_elm_lang$core$Dict$removeMax, _p29._0._0, _p38, _p40, _p29._0._3, _p39);
				var _p37 = A3(_elm_lang$core$Dict$maxWithDefault, _p38, _p40, _p39);
				var k = _p37._0;
				var v = _p37._1;
				return A5(_elm_lang$core$Dict$bubble, color, k, v, newLeft, right);
			}
		}
	});
var _elm_lang$core$Dict$map = F2(
	function (f, dict) {
		var _p41 = dict;
		if (_p41.ctor === 'RBEmpty_elm_builtin') {
			return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
		} else {
			var _p42 = _p41._1;
			return A5(
				_elm_lang$core$Dict$RBNode_elm_builtin,
				_p41._0,
				_p42,
				A2(f, _p42, _p41._2),
				A2(_elm_lang$core$Dict$map, f, _p41._3),
				A2(_elm_lang$core$Dict$map, f, _p41._4));
		}
	});
var _elm_lang$core$Dict$Same = {ctor: 'Same'};
var _elm_lang$core$Dict$Remove = {ctor: 'Remove'};
var _elm_lang$core$Dict$Insert = {ctor: 'Insert'};
var _elm_lang$core$Dict$update = F3(
	function (k, alter, dict) {
		var up = function (dict) {
			var _p43 = dict;
			if (_p43.ctor === 'RBEmpty_elm_builtin') {
				var _p44 = alter(_elm_lang$core$Maybe$Nothing);
				if (_p44.ctor === 'Nothing') {
					return {ctor: '_Tuple2', _0: _elm_lang$core$Dict$Same, _1: _elm_lang$core$Dict$empty};
				} else {
					return {
						ctor: '_Tuple2',
						_0: _elm_lang$core$Dict$Insert,
						_1: A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Red, k, _p44._0, _elm_lang$core$Dict$empty, _elm_lang$core$Dict$empty)
					};
				}
			} else {
				var _p55 = _p43._2;
				var _p54 = _p43._4;
				var _p53 = _p43._3;
				var _p52 = _p43._1;
				var _p51 = _p43._0;
				var _p45 = A2(_elm_lang$core$Basics$compare, k, _p52);
				switch (_p45.ctor) {
					case 'EQ':
						var _p46 = alter(
							_elm_lang$core$Maybe$Just(_p55));
						if (_p46.ctor === 'Nothing') {
							return {
								ctor: '_Tuple2',
								_0: _elm_lang$core$Dict$Remove,
								_1: A3(_elm_lang$core$Dict$rem, _p51, _p53, _p54)
							};
						} else {
							return {
								ctor: '_Tuple2',
								_0: _elm_lang$core$Dict$Same,
								_1: A5(_elm_lang$core$Dict$RBNode_elm_builtin, _p51, _p52, _p46._0, _p53, _p54)
							};
						}
					case 'LT':
						var _p47 = up(_p53);
						var flag = _p47._0;
						var newLeft = _p47._1;
						var _p48 = flag;
						switch (_p48.ctor) {
							case 'Same':
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Same,
									_1: A5(_elm_lang$core$Dict$RBNode_elm_builtin, _p51, _p52, _p55, newLeft, _p54)
								};
							case 'Insert':
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Insert,
									_1: A5(_elm_lang$core$Dict$balance, _p51, _p52, _p55, newLeft, _p54)
								};
							default:
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Remove,
									_1: A5(_elm_lang$core$Dict$bubble, _p51, _p52, _p55, newLeft, _p54)
								};
						}
					default:
						var _p49 = up(_p54);
						var flag = _p49._0;
						var newRight = _p49._1;
						var _p50 = flag;
						switch (_p50.ctor) {
							case 'Same':
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Same,
									_1: A5(_elm_lang$core$Dict$RBNode_elm_builtin, _p51, _p52, _p55, _p53, newRight)
								};
							case 'Insert':
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Insert,
									_1: A5(_elm_lang$core$Dict$balance, _p51, _p52, _p55, _p53, newRight)
								};
							default:
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Remove,
									_1: A5(_elm_lang$core$Dict$bubble, _p51, _p52, _p55, _p53, newRight)
								};
						}
				}
			}
		};
		var _p56 = up(dict);
		var flag = _p56._0;
		var updatedDict = _p56._1;
		var _p57 = flag;
		switch (_p57.ctor) {
			case 'Same':
				return updatedDict;
			case 'Insert':
				return _elm_lang$core$Dict$ensureBlackRoot(updatedDict);
			default:
				return _elm_lang$core$Dict$blacken(updatedDict);
		}
	});
var _elm_lang$core$Dict$insert = F3(
	function (key, value, dict) {
		return A3(
			_elm_lang$core$Dict$update,
			key,
			_elm_lang$core$Basics$always(
				_elm_lang$core$Maybe$Just(value)),
			dict);
	});
var _elm_lang$core$Dict$singleton = F2(
	function (key, value) {
		return A3(_elm_lang$core$Dict$insert, key, value, _elm_lang$core$Dict$empty);
	});
var _elm_lang$core$Dict$union = F2(
	function (t1, t2) {
		return A3(_elm_lang$core$Dict$foldl, _elm_lang$core$Dict$insert, t2, t1);
	});
var _elm_lang$core$Dict$filter = F2(
	function (predicate, dictionary) {
		var add = F3(
			function (key, value, dict) {
				return A2(predicate, key, value) ? A3(_elm_lang$core$Dict$insert, key, value, dict) : dict;
			});
		return A3(_elm_lang$core$Dict$foldl, add, _elm_lang$core$Dict$empty, dictionary);
	});
var _elm_lang$core$Dict$intersect = F2(
	function (t1, t2) {
		return A2(
			_elm_lang$core$Dict$filter,
			F2(
				function (k, _p58) {
					return A2(_elm_lang$core$Dict$member, k, t2);
				}),
			t1);
	});
var _elm_lang$core$Dict$partition = F2(
	function (predicate, dict) {
		var add = F3(
			function (key, value, _p59) {
				var _p60 = _p59;
				var _p62 = _p60._1;
				var _p61 = _p60._0;
				return A2(predicate, key, value) ? {
					ctor: '_Tuple2',
					_0: A3(_elm_lang$core$Dict$insert, key, value, _p61),
					_1: _p62
				} : {
					ctor: '_Tuple2',
					_0: _p61,
					_1: A3(_elm_lang$core$Dict$insert, key, value, _p62)
				};
			});
		return A3(
			_elm_lang$core$Dict$foldl,
			add,
			{ctor: '_Tuple2', _0: _elm_lang$core$Dict$empty, _1: _elm_lang$core$Dict$empty},
			dict);
	});
var _elm_lang$core$Dict$fromList = function (assocs) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (_p63, dict) {
				var _p64 = _p63;
				return A3(_elm_lang$core$Dict$insert, _p64._0, _p64._1, dict);
			}),
		_elm_lang$core$Dict$empty,
		assocs);
};
var _elm_lang$core$Dict$remove = F2(
	function (key, dict) {
		return A3(
			_elm_lang$core$Dict$update,
			key,
			_elm_lang$core$Basics$always(_elm_lang$core$Maybe$Nothing),
			dict);
	});
var _elm_lang$core$Dict$diff = F2(
	function (t1, t2) {
		return A3(
			_elm_lang$core$Dict$foldl,
			F3(
				function (k, v, t) {
					return A2(_elm_lang$core$Dict$remove, k, t);
				}),
			t1,
			t2);
	});

var _elm_lang$core$Set$foldr = F3(
	function (f, b, _p0) {
		var _p1 = _p0;
		return A3(
			_elm_lang$core$Dict$foldr,
			F3(
				function (k, _p2, b) {
					return A2(f, k, b);
				}),
			b,
			_p1._0);
	});
var _elm_lang$core$Set$foldl = F3(
	function (f, b, _p3) {
		var _p4 = _p3;
		return A3(
			_elm_lang$core$Dict$foldl,
			F3(
				function (k, _p5, b) {
					return A2(f, k, b);
				}),
			b,
			_p4._0);
	});
var _elm_lang$core$Set$toList = function (_p6) {
	var _p7 = _p6;
	return _elm_lang$core$Dict$keys(_p7._0);
};
var _elm_lang$core$Set$size = function (_p8) {
	var _p9 = _p8;
	return _elm_lang$core$Dict$size(_p9._0);
};
var _elm_lang$core$Set$member = F2(
	function (k, _p10) {
		var _p11 = _p10;
		return A2(_elm_lang$core$Dict$member, k, _p11._0);
	});
var _elm_lang$core$Set$isEmpty = function (_p12) {
	var _p13 = _p12;
	return _elm_lang$core$Dict$isEmpty(_p13._0);
};
var _elm_lang$core$Set$Set_elm_builtin = function (a) {
	return {ctor: 'Set_elm_builtin', _0: a};
};
var _elm_lang$core$Set$empty = _elm_lang$core$Set$Set_elm_builtin(_elm_lang$core$Dict$empty);
var _elm_lang$core$Set$singleton = function (k) {
	return _elm_lang$core$Set$Set_elm_builtin(
		A2(
			_elm_lang$core$Dict$singleton,
			k,
			{ctor: '_Tuple0'}));
};
var _elm_lang$core$Set$insert = F2(
	function (k, _p14) {
		var _p15 = _p14;
		return _elm_lang$core$Set$Set_elm_builtin(
			A3(
				_elm_lang$core$Dict$insert,
				k,
				{ctor: '_Tuple0'},
				_p15._0));
	});
var _elm_lang$core$Set$fromList = function (xs) {
	return A3(_elm_lang$core$List$foldl, _elm_lang$core$Set$insert, _elm_lang$core$Set$empty, xs);
};
var _elm_lang$core$Set$map = F2(
	function (f, s) {
		return _elm_lang$core$Set$fromList(
			A2(
				_elm_lang$core$List$map,
				f,
				_elm_lang$core$Set$toList(s)));
	});
var _elm_lang$core$Set$remove = F2(
	function (k, _p16) {
		var _p17 = _p16;
		return _elm_lang$core$Set$Set_elm_builtin(
			A2(_elm_lang$core$Dict$remove, k, _p17._0));
	});
var _elm_lang$core$Set$union = F2(
	function (_p19, _p18) {
		var _p20 = _p19;
		var _p21 = _p18;
		return _elm_lang$core$Set$Set_elm_builtin(
			A2(_elm_lang$core$Dict$union, _p20._0, _p21._0));
	});
var _elm_lang$core$Set$intersect = F2(
	function (_p23, _p22) {
		var _p24 = _p23;
		var _p25 = _p22;
		return _elm_lang$core$Set$Set_elm_builtin(
			A2(_elm_lang$core$Dict$intersect, _p24._0, _p25._0));
	});
var _elm_lang$core$Set$diff = F2(
	function (_p27, _p26) {
		var _p28 = _p27;
		var _p29 = _p26;
		return _elm_lang$core$Set$Set_elm_builtin(
			A2(_elm_lang$core$Dict$diff, _p28._0, _p29._0));
	});
var _elm_lang$core$Set$filter = F2(
	function (p, _p30) {
		var _p31 = _p30;
		return _elm_lang$core$Set$Set_elm_builtin(
			A2(
				_elm_lang$core$Dict$filter,
				F2(
					function (k, _p32) {
						return p(k);
					}),
				_p31._0));
	});
var _elm_lang$core$Set$partition = F2(
	function (p, _p33) {
		var _p34 = _p33;
		var _p35 = A2(
			_elm_lang$core$Dict$partition,
			F2(
				function (k, _p36) {
					return p(k);
				}),
			_p34._0);
		var p1 = _p35._0;
		var p2 = _p35._1;
		return {
			ctor: '_Tuple2',
			_0: _elm_lang$core$Set$Set_elm_builtin(p1),
			_1: _elm_lang$core$Set$Set_elm_builtin(p2)
		};
	});

var _elm_lang$core$Tuple$mapSecond = F2(
	function (func, _p0) {
		var _p1 = _p0;
		return {
			ctor: '_Tuple2',
			_0: _p1._0,
			_1: func(_p1._1)
		};
	});
var _elm_lang$core$Tuple$mapFirst = F2(
	function (func, _p2) {
		var _p3 = _p2;
		return {
			ctor: '_Tuple2',
			_0: func(_p3._0),
			_1: _p3._1
		};
	});
var _elm_lang$core$Tuple$second = function (_p4) {
	var _p5 = _p4;
	return _p5._1;
};
var _elm_lang$core$Tuple$first = function (_p6) {
	var _p7 = _p6;
	return _p7._0;
};

var _elm_lang$core$Debug$crash = _elm_lang$core$Native_Debug.crash;
var _elm_lang$core$Debug$log = _elm_lang$core$Native_Debug.log;

//import //

var _elm_lang$core$Native_Platform = function() {


// PROGRAMS

function program(impl)
{
	return function(flagDecoder)
	{
		return function(object, moduleName)
		{
			object['worker'] = function worker(flags)
			{
				if (typeof flags !== 'undefined')
				{
					throw new Error(
						'The `' + moduleName + '` module does not need flags.\n'
						+ 'Call ' + moduleName + '.worker() with no arguments and you should be all set!'
					);
				}

				return initialize(
					impl.init,
					impl.update,
					impl.subscriptions,
					renderer
				);
			};
		};
	};
}

function programWithFlags(impl)
{
	return function(flagDecoder)
	{
		return function(object, moduleName)
		{
			object['worker'] = function worker(flags)
			{
				if (typeof flagDecoder === 'undefined')
				{
					throw new Error(
						'Are you trying to sneak a Never value into Elm? Trickster!\n'
						+ 'It looks like ' + moduleName + '.main is defined with `programWithFlags` but has type `Program Never`.\n'
						+ 'Use `program` instead if you do not want flags.'
					);
				}

				var result = A2(_elm_lang$core$Native_Json.run, flagDecoder, flags);
				if (result.ctor === 'Err')
				{
					throw new Error(
						moduleName + '.worker(...) was called with an unexpected argument.\n'
						+ 'I tried to convert it to an Elm value, but ran into this problem:\n\n'
						+ result._0
					);
				}

				return initialize(
					impl.init(result._0),
					impl.update,
					impl.subscriptions,
					renderer
				);
			};
		};
	};
}

function renderer(enqueue, _)
{
	return function(_) {};
}


// HTML TO PROGRAM

function htmlToProgram(vnode)
{
	var emptyBag = batch(_elm_lang$core$Native_List.Nil);
	var noChange = _elm_lang$core$Native_Utils.Tuple2(
		_elm_lang$core$Native_Utils.Tuple0,
		emptyBag
	);

	return _elm_lang$virtual_dom$VirtualDom$program({
		init: noChange,
		view: function(model) { return main; },
		update: F2(function(msg, model) { return noChange; }),
		subscriptions: function (model) { return emptyBag; }
	});
}


// INITIALIZE A PROGRAM

function initialize(init, update, subscriptions, renderer)
{
	// ambient state
	var managers = {};
	var updateView;

	// init and update state in main process
	var initApp = _elm_lang$core$Native_Scheduler.nativeBinding(function(callback) {
		var model = init._0;
		updateView = renderer(enqueue, model);
		var cmds = init._1;
		var subs = subscriptions(model);
		dispatchEffects(managers, cmds, subs);
		callback(_elm_lang$core$Native_Scheduler.succeed(model));
	});

	function onMessage(msg, model)
	{
		return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback) {
			var results = A2(update, msg, model);
			model = results._0;
			updateView(model);
			var cmds = results._1;
			var subs = subscriptions(model);
			dispatchEffects(managers, cmds, subs);
			callback(_elm_lang$core$Native_Scheduler.succeed(model));
		});
	}

	var mainProcess = spawnLoop(initApp, onMessage);

	function enqueue(msg)
	{
		_elm_lang$core$Native_Scheduler.rawSend(mainProcess, msg);
	}

	var ports = setupEffects(managers, enqueue);

	return ports ? { ports: ports } : {};
}


// EFFECT MANAGERS

var effectManagers = {};

function setupEffects(managers, callback)
{
	var ports;

	// setup all necessary effect managers
	for (var key in effectManagers)
	{
		var manager = effectManagers[key];

		if (manager.isForeign)
		{
			ports = ports || {};
			ports[key] = manager.tag === 'cmd'
				? setupOutgoingPort(key)
				: setupIncomingPort(key, callback);
		}

		managers[key] = makeManager(manager, callback);
	}

	return ports;
}

function makeManager(info, callback)
{
	var router = {
		main: callback,
		self: undefined
	};

	var tag = info.tag;
	var onEffects = info.onEffects;
	var onSelfMsg = info.onSelfMsg;

	function onMessage(msg, state)
	{
		if (msg.ctor === 'self')
		{
			return A3(onSelfMsg, router, msg._0, state);
		}

		var fx = msg._0;
		switch (tag)
		{
			case 'cmd':
				return A3(onEffects, router, fx.cmds, state);

			case 'sub':
				return A3(onEffects, router, fx.subs, state);

			case 'fx':
				return A4(onEffects, router, fx.cmds, fx.subs, state);
		}
	}

	var process = spawnLoop(info.init, onMessage);
	router.self = process;
	return process;
}

function sendToApp(router, msg)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		router.main(msg);
		callback(_elm_lang$core$Native_Scheduler.succeed(_elm_lang$core$Native_Utils.Tuple0));
	});
}

function sendToSelf(router, msg)
{
	return A2(_elm_lang$core$Native_Scheduler.send, router.self, {
		ctor: 'self',
		_0: msg
	});
}


// HELPER for STATEFUL LOOPS

function spawnLoop(init, onMessage)
{
	var andThen = _elm_lang$core$Native_Scheduler.andThen;

	function loop(state)
	{
		var handleMsg = _elm_lang$core$Native_Scheduler.receive(function(msg) {
			return onMessage(msg, state);
		});
		return A2(andThen, loop, handleMsg);
	}

	var task = A2(andThen, loop, init);

	return _elm_lang$core$Native_Scheduler.rawSpawn(task);
}


// BAGS

function leaf(home)
{
	return function(value)
	{
		return {
			type: 'leaf',
			home: home,
			value: value
		};
	};
}

function batch(list)
{
	return {
		type: 'node',
		branches: list
	};
}

function map(tagger, bag)
{
	return {
		type: 'map',
		tagger: tagger,
		tree: bag
	}
}


// PIPE BAGS INTO EFFECT MANAGERS

function dispatchEffects(managers, cmdBag, subBag)
{
	var effectsDict = {};
	gatherEffects(true, cmdBag, effectsDict, null);
	gatherEffects(false, subBag, effectsDict, null);

	for (var home in managers)
	{
		var fx = home in effectsDict
			? effectsDict[home]
			: {
				cmds: _elm_lang$core$Native_List.Nil,
				subs: _elm_lang$core$Native_List.Nil
			};

		_elm_lang$core$Native_Scheduler.rawSend(managers[home], { ctor: 'fx', _0: fx });
	}
}

function gatherEffects(isCmd, bag, effectsDict, taggers)
{
	switch (bag.type)
	{
		case 'leaf':
			var home = bag.home;
			var effect = toEffect(isCmd, home, taggers, bag.value);
			effectsDict[home] = insert(isCmd, effect, effectsDict[home]);
			return;

		case 'node':
			var list = bag.branches;
			while (list.ctor !== '[]')
			{
				gatherEffects(isCmd, list._0, effectsDict, taggers);
				list = list._1;
			}
			return;

		case 'map':
			gatherEffects(isCmd, bag.tree, effectsDict, {
				tagger: bag.tagger,
				rest: taggers
			});
			return;
	}
}

function toEffect(isCmd, home, taggers, value)
{
	function applyTaggers(x)
	{
		var temp = taggers;
		while (temp)
		{
			x = temp.tagger(x);
			temp = temp.rest;
		}
		return x;
	}

	var map = isCmd
		? effectManagers[home].cmdMap
		: effectManagers[home].subMap;

	return A2(map, applyTaggers, value)
}

function insert(isCmd, newEffect, effects)
{
	effects = effects || {
		cmds: _elm_lang$core$Native_List.Nil,
		subs: _elm_lang$core$Native_List.Nil
	};
	if (isCmd)
	{
		effects.cmds = _elm_lang$core$Native_List.Cons(newEffect, effects.cmds);
		return effects;
	}
	effects.subs = _elm_lang$core$Native_List.Cons(newEffect, effects.subs);
	return effects;
}


// PORTS

function checkPortName(name)
{
	if (name in effectManagers)
	{
		throw new Error('There can only be one port named `' + name + '`, but your program has multiple.');
	}
}


// OUTGOING PORTS

function outgoingPort(name, converter)
{
	checkPortName(name);
	effectManagers[name] = {
		tag: 'cmd',
		cmdMap: outgoingPortMap,
		converter: converter,
		isForeign: true
	};
	return leaf(name);
}

var outgoingPortMap = F2(function cmdMap(tagger, value) {
	return value;
});

function setupOutgoingPort(name)
{
	var subs = [];
	var converter = effectManagers[name].converter;

	// CREATE MANAGER

	var init = _elm_lang$core$Native_Scheduler.succeed(null);

	function onEffects(router, cmdList, state)
	{
		while (cmdList.ctor !== '[]')
		{
			// grab a separate reference to subs in case unsubscribe is called
			var currentSubs = subs;
			var value = converter(cmdList._0);
			for (var i = 0; i < currentSubs.length; i++)
			{
				currentSubs[i](value);
			}
			cmdList = cmdList._1;
		}
		return init;
	}

	effectManagers[name].init = init;
	effectManagers[name].onEffects = F3(onEffects);

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

function incomingPort(name, converter)
{
	checkPortName(name);
	effectManagers[name] = {
		tag: 'sub',
		subMap: incomingPortMap,
		converter: converter,
		isForeign: true
	};
	return leaf(name);
}

var incomingPortMap = F2(function subMap(tagger, finalTagger)
{
	return function(value)
	{
		return tagger(finalTagger(value));
	};
});

function setupIncomingPort(name, callback)
{
	var sentBeforeInit = [];
	var subs = _elm_lang$core$Native_List.Nil;
	var converter = effectManagers[name].converter;
	var currentOnEffects = preInitOnEffects;
	var currentSend = preInitSend;

	// CREATE MANAGER

	var init = _elm_lang$core$Native_Scheduler.succeed(null);

	function preInitOnEffects(router, subList, state)
	{
		var postInitResult = postInitOnEffects(router, subList, state);

		for(var i = 0; i < sentBeforeInit.length; i++)
		{
			postInitSend(sentBeforeInit[i]);
		}

		sentBeforeInit = null; // to release objects held in queue
		currentSend = postInitSend;
		currentOnEffects = postInitOnEffects;
		return postInitResult;
	}

	function postInitOnEffects(router, subList, state)
	{
		subs = subList;
		return init;
	}

	function onEffects(router, subList, state)
	{
		return currentOnEffects(router, subList, state);
	}

	effectManagers[name].init = init;
	effectManagers[name].onEffects = F3(onEffects);

	// PUBLIC API

	function preInitSend(value)
	{
		sentBeforeInit.push(value);
	}

	function postInitSend(value)
	{
		var temp = subs;
		while (temp.ctor !== '[]')
		{
			callback(temp._0(value));
			temp = temp._1;
		}
	}

	function send(incomingValue)
	{
		var result = A2(_elm_lang$core$Json_Decode$decodeValue, converter, incomingValue);
		if (result.ctor === 'Err')
		{
			throw new Error('Trying to send an unexpected type of value through port `' + name + '`:\n' + result._0);
		}

		currentSend(result._0);
	}

	return { send: send };
}

return {
	// routers
	sendToApp: F2(sendToApp),
	sendToSelf: F2(sendToSelf),

	// global setup
	effectManagers: effectManagers,
	outgoingPort: outgoingPort,
	incomingPort: incomingPort,

	htmlToProgram: htmlToProgram,
	program: program,
	programWithFlags: programWithFlags,
	initialize: initialize,

	// effect bags
	leaf: leaf,
	batch: batch,
	map: F2(map)
};

}();

//import Native.Utils //

var _elm_lang$core$Native_Scheduler = function() {

var MAX_STEPS = 10000;


// TASKS

function succeed(value)
{
	return {
		ctor: '_Task_succeed',
		value: value
	};
}

function fail(error)
{
	return {
		ctor: '_Task_fail',
		value: error
	};
}

function nativeBinding(callback)
{
	return {
		ctor: '_Task_nativeBinding',
		callback: callback,
		cancel: null
	};
}

function andThen(callback, task)
{
	return {
		ctor: '_Task_andThen',
		callback: callback,
		task: task
	};
}

function onError(callback, task)
{
	return {
		ctor: '_Task_onError',
		callback: callback,
		task: task
	};
}

function receive(callback)
{
	return {
		ctor: '_Task_receive',
		callback: callback
	};
}


// PROCESSES

function rawSpawn(task)
{
	var process = {
		ctor: '_Process',
		id: _elm_lang$core$Native_Utils.guid(),
		root: task,
		stack: null,
		mailbox: []
	};

	enqueue(process);

	return process;
}

function spawn(task)
{
	return nativeBinding(function(callback) {
		var process = rawSpawn(task);
		callback(succeed(process));
	});
}

function rawSend(process, msg)
{
	process.mailbox.push(msg);
	enqueue(process);
}

function send(process, msg)
{
	return nativeBinding(function(callback) {
		rawSend(process, msg);
		callback(succeed(_elm_lang$core$Native_Utils.Tuple0));
	});
}

function kill(process)
{
	return nativeBinding(function(callback) {
		var root = process.root;
		if (root.ctor === '_Task_nativeBinding' && root.cancel)
		{
			root.cancel();
		}

		process.root = null;

		callback(succeed(_elm_lang$core$Native_Utils.Tuple0));
	});
}

function sleep(time)
{
	return nativeBinding(function(callback) {
		var id = setTimeout(function() {
			callback(succeed(_elm_lang$core$Native_Utils.Tuple0));
		}, time);

		return function() { clearTimeout(id); };
	});
}


// STEP PROCESSES

function step(numSteps, process)
{
	while (numSteps < MAX_STEPS)
	{
		var ctor = process.root.ctor;

		if (ctor === '_Task_succeed')
		{
			while (process.stack && process.stack.ctor === '_Task_onError')
			{
				process.stack = process.stack.rest;
			}
			if (process.stack === null)
			{
				break;
			}
			process.root = process.stack.callback(process.root.value);
			process.stack = process.stack.rest;
			++numSteps;
			continue;
		}

		if (ctor === '_Task_fail')
		{
			while (process.stack && process.stack.ctor === '_Task_andThen')
			{
				process.stack = process.stack.rest;
			}
			if (process.stack === null)
			{
				break;
			}
			process.root = process.stack.callback(process.root.value);
			process.stack = process.stack.rest;
			++numSteps;
			continue;
		}

		if (ctor === '_Task_andThen')
		{
			process.stack = {
				ctor: '_Task_andThen',
				callback: process.root.callback,
				rest: process.stack
			};
			process.root = process.root.task;
			++numSteps;
			continue;
		}

		if (ctor === '_Task_onError')
		{
			process.stack = {
				ctor: '_Task_onError',
				callback: process.root.callback,
				rest: process.stack
			};
			process.root = process.root.task;
			++numSteps;
			continue;
		}

		if (ctor === '_Task_nativeBinding')
		{
			process.root.cancel = process.root.callback(function(newRoot) {
				process.root = newRoot;
				enqueue(process);
			});

			break;
		}

		if (ctor === '_Task_receive')
		{
			var mailbox = process.mailbox;
			if (mailbox.length === 0)
			{
				break;
			}

			process.root = process.root.callback(mailbox.shift());
			++numSteps;
			continue;
		}

		throw new Error(ctor);
	}

	if (numSteps < MAX_STEPS)
	{
		return numSteps + 1;
	}
	enqueue(process);

	return numSteps;
}


// WORK QUEUE

var working = false;
var workQueue = [];

function enqueue(process)
{
	workQueue.push(process);

	if (!working)
	{
		setTimeout(work, 0);
		working = true;
	}
}

function work()
{
	var numSteps = 0;
	var process;
	while (numSteps < MAX_STEPS && (process = workQueue.shift()))
	{
		if (process.root)
		{
			numSteps = step(numSteps, process);
		}
	}
	if (!process)
	{
		working = false;
		return;
	}
	setTimeout(work, 0);
}


return {
	succeed: succeed,
	fail: fail,
	nativeBinding: nativeBinding,
	andThen: F2(andThen),
	onError: F2(onError),
	receive: receive,

	spawn: spawn,
	kill: kill,
	sleep: sleep,
	send: F2(send),

	rawSpawn: rawSpawn,
	rawSend: rawSend
};

}();
var _elm_lang$core$Platform_Cmd$batch = _elm_lang$core$Native_Platform.batch;
var _elm_lang$core$Platform_Cmd$none = _elm_lang$core$Platform_Cmd$batch(
	{ctor: '[]'});
var _elm_lang$core$Platform_Cmd_ops = _elm_lang$core$Platform_Cmd_ops || {};
_elm_lang$core$Platform_Cmd_ops['!'] = F2(
	function (model, commands) {
		return {
			ctor: '_Tuple2',
			_0: model,
			_1: _elm_lang$core$Platform_Cmd$batch(commands)
		};
	});
var _elm_lang$core$Platform_Cmd$map = _elm_lang$core$Native_Platform.map;
var _elm_lang$core$Platform_Cmd$Cmd = {ctor: 'Cmd'};

var _elm_lang$core$Platform_Sub$batch = _elm_lang$core$Native_Platform.batch;
var _elm_lang$core$Platform_Sub$none = _elm_lang$core$Platform_Sub$batch(
	{ctor: '[]'});
var _elm_lang$core$Platform_Sub$map = _elm_lang$core$Native_Platform.map;
var _elm_lang$core$Platform_Sub$Sub = {ctor: 'Sub'};

var _elm_lang$core$Platform$hack = _elm_lang$core$Native_Scheduler.succeed;
var _elm_lang$core$Platform$sendToSelf = _elm_lang$core$Native_Platform.sendToSelf;
var _elm_lang$core$Platform$sendToApp = _elm_lang$core$Native_Platform.sendToApp;
var _elm_lang$core$Platform$programWithFlags = _elm_lang$core$Native_Platform.programWithFlags;
var _elm_lang$core$Platform$program = _elm_lang$core$Native_Platform.program;
var _elm_lang$core$Platform$Program = {ctor: 'Program'};
var _elm_lang$core$Platform$Task = {ctor: 'Task'};
var _elm_lang$core$Platform$ProcessId = {ctor: 'ProcessId'};
var _elm_lang$core$Platform$Router = {ctor: 'Router'};

var _elm_community$list_extra$List_Extra$greedyGroupsOfWithStep = F3(
	function (size, step, xs) {
		var okayXs = _elm_lang$core$Native_Utils.cmp(
			_elm_lang$core$List$length(xs),
			0) > 0;
		var okayArgs = (_elm_lang$core$Native_Utils.cmp(size, 0) > 0) && (_elm_lang$core$Native_Utils.cmp(step, 0) > 0);
		var xs_ = A2(_elm_lang$core$List$drop, step, xs);
		var group = A2(_elm_lang$core$List$take, size, xs);
		return (okayArgs && okayXs) ? {
			ctor: '::',
			_0: group,
			_1: A3(_elm_community$list_extra$List_Extra$greedyGroupsOfWithStep, size, step, xs_)
		} : {ctor: '[]'};
	});
var _elm_community$list_extra$List_Extra$greedyGroupsOf = F2(
	function (size, xs) {
		return A3(_elm_community$list_extra$List_Extra$greedyGroupsOfWithStep, size, size, xs);
	});
var _elm_community$list_extra$List_Extra$groupsOfWithStep = F3(
	function (size, step, xs) {
		var okayArgs = (_elm_lang$core$Native_Utils.cmp(size, 0) > 0) && (_elm_lang$core$Native_Utils.cmp(step, 0) > 0);
		var xs_ = A2(_elm_lang$core$List$drop, step, xs);
		var group = A2(_elm_lang$core$List$take, size, xs);
		var okayLength = _elm_lang$core$Native_Utils.eq(
			size,
			_elm_lang$core$List$length(group));
		return (okayArgs && okayLength) ? {
			ctor: '::',
			_0: group,
			_1: A3(_elm_community$list_extra$List_Extra$groupsOfWithStep, size, step, xs_)
		} : {ctor: '[]'};
	});
var _elm_community$list_extra$List_Extra$groupsOf = F2(
	function (size, xs) {
		return A3(_elm_community$list_extra$List_Extra$groupsOfWithStep, size, size, xs);
	});
var _elm_community$list_extra$List_Extra$zip5 = _elm_lang$core$List$map5(
	F5(
		function (v0, v1, v2, v3, v4) {
			return {ctor: '_Tuple5', _0: v0, _1: v1, _2: v2, _3: v3, _4: v4};
		}));
var _elm_community$list_extra$List_Extra$zip4 = _elm_lang$core$List$map4(
	F4(
		function (v0, v1, v2, v3) {
			return {ctor: '_Tuple4', _0: v0, _1: v1, _2: v2, _3: v3};
		}));
var _elm_community$list_extra$List_Extra$zip3 = _elm_lang$core$List$map3(
	F3(
		function (v0, v1, v2) {
			return {ctor: '_Tuple3', _0: v0, _1: v1, _2: v2};
		}));
var _elm_community$list_extra$List_Extra$zip = _elm_lang$core$List$map2(
	F2(
		function (v0, v1) {
			return {ctor: '_Tuple2', _0: v0, _1: v1};
		}));
var _elm_community$list_extra$List_Extra$isPrefixOf = F2(
	function (prefix, xs) {
		var _p0 = {ctor: '_Tuple2', _0: prefix, _1: xs};
		if (_p0._0.ctor === '[]') {
			return true;
		} else {
			if (_p0._1.ctor === '[]') {
				return false;
			} else {
				return _elm_lang$core$Native_Utils.eq(_p0._0._0, _p0._1._0) && A2(_elm_community$list_extra$List_Extra$isPrefixOf, _p0._0._1, _p0._1._1);
			}
		}
	});
var _elm_community$list_extra$List_Extra$isSuffixOf = F2(
	function (suffix, xs) {
		return A2(
			_elm_community$list_extra$List_Extra$isPrefixOf,
			_elm_lang$core$List$reverse(suffix),
			_elm_lang$core$List$reverse(xs));
	});
var _elm_community$list_extra$List_Extra$selectSplit = function (xs) {
	var _p1 = xs;
	if (_p1.ctor === '[]') {
		return {ctor: '[]'};
	} else {
		var _p5 = _p1._1;
		var _p4 = _p1._0;
		return {
			ctor: '::',
			_0: {
				ctor: '_Tuple3',
				_0: {ctor: '[]'},
				_1: _p4,
				_2: _p5
			},
			_1: A2(
				_elm_lang$core$List$map,
				function (_p2) {
					var _p3 = _p2;
					return {
						ctor: '_Tuple3',
						_0: {ctor: '::', _0: _p4, _1: _p3._0},
						_1: _p3._1,
						_2: _p3._2
					};
				},
				_elm_community$list_extra$List_Extra$selectSplit(_p5))
		};
	}
};
var _elm_community$list_extra$List_Extra$select = function (xs) {
	var _p6 = xs;
	if (_p6.ctor === '[]') {
		return {ctor: '[]'};
	} else {
		var _p10 = _p6._1;
		var _p9 = _p6._0;
		return {
			ctor: '::',
			_0: {ctor: '_Tuple2', _0: _p9, _1: _p10},
			_1: A2(
				_elm_lang$core$List$map,
				function (_p7) {
					var _p8 = _p7;
					return {
						ctor: '_Tuple2',
						_0: _p8._0,
						_1: {ctor: '::', _0: _p9, _1: _p8._1}
					};
				},
				_elm_community$list_extra$List_Extra$select(_p10))
		};
	}
};
var _elm_community$list_extra$List_Extra$tailsHelp = F2(
	function (e, list) {
		var _p11 = list;
		if (_p11.ctor === '::') {
			var _p12 = _p11._0;
			return {
				ctor: '::',
				_0: {ctor: '::', _0: e, _1: _p12},
				_1: {ctor: '::', _0: _p12, _1: _p11._1}
			};
		} else {
			return {ctor: '[]'};
		}
	});
var _elm_community$list_extra$List_Extra$tails = A2(
	_elm_lang$core$List$foldr,
	_elm_community$list_extra$List_Extra$tailsHelp,
	{
		ctor: '::',
		_0: {ctor: '[]'},
		_1: {ctor: '[]'}
	});
var _elm_community$list_extra$List_Extra$isInfixOf = F2(
	function (infix, xs) {
		return A2(
			_elm_lang$core$List$any,
			_elm_community$list_extra$List_Extra$isPrefixOf(infix),
			_elm_community$list_extra$List_Extra$tails(xs));
	});
var _elm_community$list_extra$List_Extra$inits = A2(
	_elm_lang$core$List$foldr,
	F2(
		function (e, acc) {
			return {
				ctor: '::',
				_0: {ctor: '[]'},
				_1: A2(
					_elm_lang$core$List$map,
					F2(
						function (x, y) {
							return {ctor: '::', _0: x, _1: y};
						})(e),
					acc)
			};
		}),
	{
		ctor: '::',
		_0: {ctor: '[]'},
		_1: {ctor: '[]'}
	});
var _elm_community$list_extra$List_Extra$groupWhileTransitively = F2(
	function (cmp, xs_) {
		var _p13 = xs_;
		if (_p13.ctor === '[]') {
			return {ctor: '[]'};
		} else {
			if (_p13._1.ctor === '[]') {
				return {
					ctor: '::',
					_0: {
						ctor: '::',
						_0: _p13._0,
						_1: {ctor: '[]'}
					},
					_1: {ctor: '[]'}
				};
			} else {
				var _p15 = _p13._0;
				var _p14 = A2(_elm_community$list_extra$List_Extra$groupWhileTransitively, cmp, _p13._1);
				if (_p14.ctor === '::') {
					return A2(cmp, _p15, _p13._1._0) ? {
						ctor: '::',
						_0: {ctor: '::', _0: _p15, _1: _p14._0},
						_1: _p14._1
					} : {
						ctor: '::',
						_0: {
							ctor: '::',
							_0: _p15,
							_1: {ctor: '[]'}
						},
						_1: _p14
					};
				} else {
					return {ctor: '[]'};
				}
			}
		}
	});
var _elm_community$list_extra$List_Extra$stripPrefix = F2(
	function (prefix, xs) {
		var step = F2(
			function (e, m) {
				var _p16 = m;
				if (_p16.ctor === 'Nothing') {
					return _elm_lang$core$Maybe$Nothing;
				} else {
					if (_p16._0.ctor === '[]') {
						return _elm_lang$core$Maybe$Nothing;
					} else {
						return _elm_lang$core$Native_Utils.eq(e, _p16._0._0) ? _elm_lang$core$Maybe$Just(_p16._0._1) : _elm_lang$core$Maybe$Nothing;
					}
				}
			});
		return A3(
			_elm_lang$core$List$foldl,
			step,
			_elm_lang$core$Maybe$Just(xs),
			prefix);
	});
var _elm_community$list_extra$List_Extra$dropWhileRight = function (p) {
	return A2(
		_elm_lang$core$List$foldr,
		F2(
			function (x, xs) {
				return (p(x) && _elm_lang$core$List$isEmpty(xs)) ? {ctor: '[]'} : {ctor: '::', _0: x, _1: xs};
			}),
		{ctor: '[]'});
};
var _elm_community$list_extra$List_Extra$takeWhileRight = function (p) {
	var step = F2(
		function (x, _p17) {
			var _p18 = _p17;
			var _p19 = _p18._0;
			return (p(x) && _p18._1) ? {
				ctor: '_Tuple2',
				_0: {ctor: '::', _0: x, _1: _p19},
				_1: true
			} : {ctor: '_Tuple2', _0: _p19, _1: false};
		});
	return function (_p20) {
		return _elm_lang$core$Tuple$first(
			A3(
				_elm_lang$core$List$foldr,
				step,
				{
					ctor: '_Tuple2',
					_0: {ctor: '[]'},
					_1: true
				},
				_p20));
	};
};
var _elm_community$list_extra$List_Extra$splitAt = F2(
	function (n, xs) {
		return {
			ctor: '_Tuple2',
			_0: A2(_elm_lang$core$List$take, n, xs),
			_1: A2(_elm_lang$core$List$drop, n, xs)
		};
	});
var _elm_community$list_extra$List_Extra$groupsOfVarying_ = F3(
	function (listOflengths, list, accu) {
		groupsOfVarying_:
		while (true) {
			var _p21 = {ctor: '_Tuple2', _0: listOflengths, _1: list};
			if (((_p21.ctor === '_Tuple2') && (_p21._0.ctor === '::')) && (_p21._1.ctor === '::')) {
				var _p22 = A2(_elm_community$list_extra$List_Extra$splitAt, _p21._0._0, list);
				var head = _p22._0;
				var tail = _p22._1;
				var _v11 = _p21._0._1,
					_v12 = tail,
					_v13 = {ctor: '::', _0: head, _1: accu};
				listOflengths = _v11;
				list = _v12;
				accu = _v13;
				continue groupsOfVarying_;
			} else {
				return _elm_lang$core$List$reverse(accu);
			}
		}
	});
var _elm_community$list_extra$List_Extra$groupsOfVarying = F2(
	function (listOflengths, list) {
		return A3(
			_elm_community$list_extra$List_Extra$groupsOfVarying_,
			listOflengths,
			list,
			{ctor: '[]'});
	});
var _elm_community$list_extra$List_Extra$unfoldr = F2(
	function (f, seed) {
		var _p23 = f(seed);
		if (_p23.ctor === 'Nothing') {
			return {ctor: '[]'};
		} else {
			return {
				ctor: '::',
				_0: _p23._0._0,
				_1: A2(_elm_community$list_extra$List_Extra$unfoldr, f, _p23._0._1)
			};
		}
	});
var _elm_community$list_extra$List_Extra$scanr1 = F2(
	function (f, xs_) {
		var _p24 = xs_;
		if (_p24.ctor === '[]') {
			return {ctor: '[]'};
		} else {
			if (_p24._1.ctor === '[]') {
				return {
					ctor: '::',
					_0: _p24._0,
					_1: {ctor: '[]'}
				};
			} else {
				var _p25 = A2(_elm_community$list_extra$List_Extra$scanr1, f, _p24._1);
				if (_p25.ctor === '::') {
					return {
						ctor: '::',
						_0: A2(f, _p24._0, _p25._0),
						_1: _p25
					};
				} else {
					return {ctor: '[]'};
				}
			}
		}
	});
var _elm_community$list_extra$List_Extra$scanr = F3(
	function (f, acc, xs_) {
		var _p26 = xs_;
		if (_p26.ctor === '[]') {
			return {
				ctor: '::',
				_0: acc,
				_1: {ctor: '[]'}
			};
		} else {
			var _p27 = A3(_elm_community$list_extra$List_Extra$scanr, f, acc, _p26._1);
			if (_p27.ctor === '::') {
				return {
					ctor: '::',
					_0: A2(f, _p26._0, _p27._0),
					_1: _p27
				};
			} else {
				return {ctor: '[]'};
			}
		}
	});
var _elm_community$list_extra$List_Extra$scanl1 = F2(
	function (f, xs_) {
		var _p28 = xs_;
		if (_p28.ctor === '[]') {
			return {ctor: '[]'};
		} else {
			return A3(_elm_lang$core$List$scanl, f, _p28._0, _p28._1);
		}
	});
var _elm_community$list_extra$List_Extra$indexedFoldr = F3(
	function (func, acc, list) {
		var step = F2(
			function (x, _p29) {
				var _p30 = _p29;
				var _p31 = _p30._0;
				return {
					ctor: '_Tuple2',
					_0: _p31 - 1,
					_1: A3(func, _p31, x, _p30._1)
				};
			});
		return _elm_lang$core$Tuple$second(
			A3(
				_elm_lang$core$List$foldr,
				step,
				{
					ctor: '_Tuple2',
					_0: _elm_lang$core$List$length(list) - 1,
					_1: acc
				},
				list));
	});
var _elm_community$list_extra$List_Extra$indexedFoldl = F3(
	function (func, acc, list) {
		var step = F2(
			function (x, _p32) {
				var _p33 = _p32;
				var _p34 = _p33._0;
				return {
					ctor: '_Tuple2',
					_0: _p34 + 1,
					_1: A3(func, _p34, x, _p33._1)
				};
			});
		return _elm_lang$core$Tuple$second(
			A3(
				_elm_lang$core$List$foldl,
				step,
				{ctor: '_Tuple2', _0: 0, _1: acc},
				list));
	});
var _elm_community$list_extra$List_Extra$foldr1 = F2(
	function (f, xs) {
		var mf = F2(
			function (x, m) {
				return _elm_lang$core$Maybe$Just(
					function () {
						var _p35 = m;
						if (_p35.ctor === 'Nothing') {
							return x;
						} else {
							return A2(f, x, _p35._0);
						}
					}());
			});
		return A3(_elm_lang$core$List$foldr, mf, _elm_lang$core$Maybe$Nothing, xs);
	});
var _elm_community$list_extra$List_Extra$foldl1 = F2(
	function (f, xs) {
		var mf = F2(
			function (x, m) {
				return _elm_lang$core$Maybe$Just(
					function () {
						var _p36 = m;
						if (_p36.ctor === 'Nothing') {
							return x;
						} else {
							return A2(f, _p36._0, x);
						}
					}());
			});
		return A3(_elm_lang$core$List$foldl, mf, _elm_lang$core$Maybe$Nothing, xs);
	});
var _elm_community$list_extra$List_Extra$interweaveHelp = F3(
	function (l1, l2, acc) {
		interweaveHelp:
		while (true) {
			var _p37 = {ctor: '_Tuple2', _0: l1, _1: l2};
			_v24_1:
			do {
				if (_p37._0.ctor === '::') {
					if (_p37._1.ctor === '::') {
						var _v25 = _p37._0._1,
							_v26 = _p37._1._1,
							_v27 = A2(
							_elm_lang$core$Basics_ops['++'],
							acc,
							{
								ctor: '::',
								_0: _p37._0._0,
								_1: {
									ctor: '::',
									_0: _p37._1._0,
									_1: {ctor: '[]'}
								}
							});
						l1 = _v25;
						l2 = _v26;
						acc = _v27;
						continue interweaveHelp;
					} else {
						break _v24_1;
					}
				} else {
					if (_p37._1.ctor === '[]') {
						break _v24_1;
					} else {
						return A2(_elm_lang$core$Basics_ops['++'], acc, _p37._1);
					}
				}
			} while(false);
			return A2(_elm_lang$core$Basics_ops['++'], acc, _p37._0);
		}
	});
var _elm_community$list_extra$List_Extra$interweave = F2(
	function (l1, l2) {
		return A3(
			_elm_community$list_extra$List_Extra$interweaveHelp,
			l1,
			l2,
			{ctor: '[]'});
	});
var _elm_community$list_extra$List_Extra$permutations = function (xs_) {
	var _p38 = xs_;
	if (_p38.ctor === '[]') {
		return {
			ctor: '::',
			_0: {ctor: '[]'},
			_1: {ctor: '[]'}
		};
	} else {
		var f = function (_p39) {
			var _p40 = _p39;
			return A2(
				_elm_lang$core$List$map,
				F2(
					function (x, y) {
						return {ctor: '::', _0: x, _1: y};
					})(_p40._0),
				_elm_community$list_extra$List_Extra$permutations(_p40._1));
		};
		return A2(
			_elm_lang$core$List$concatMap,
			f,
			_elm_community$list_extra$List_Extra$select(_p38));
	}
};
var _elm_community$list_extra$List_Extra$isPermutationOf = F2(
	function (permut, xs) {
		return A2(
			_elm_lang$core$List$member,
			permut,
			_elm_community$list_extra$List_Extra$permutations(xs));
	});
var _elm_community$list_extra$List_Extra$subsequencesNonEmpty = function (xs) {
	var _p41 = xs;
	if (_p41.ctor === '[]') {
		return {ctor: '[]'};
	} else {
		var _p42 = _p41._0;
		var f = F2(
			function (ys, r) {
				return {
					ctor: '::',
					_0: ys,
					_1: {
						ctor: '::',
						_0: {ctor: '::', _0: _p42, _1: ys},
						_1: r
					}
				};
			});
		return {
			ctor: '::',
			_0: {
				ctor: '::',
				_0: _p42,
				_1: {ctor: '[]'}
			},
			_1: A3(
				_elm_lang$core$List$foldr,
				f,
				{ctor: '[]'},
				_elm_community$list_extra$List_Extra$subsequencesNonEmpty(_p41._1))
		};
	}
};
var _elm_community$list_extra$List_Extra$subsequences = function (xs) {
	return {
		ctor: '::',
		_0: {ctor: '[]'},
		_1: _elm_community$list_extra$List_Extra$subsequencesNonEmpty(xs)
	};
};
var _elm_community$list_extra$List_Extra$isSubsequenceOf = F2(
	function (subseq, xs) {
		return A2(
			_elm_lang$core$List$member,
			subseq,
			_elm_community$list_extra$List_Extra$subsequences(xs));
	});
var _elm_community$list_extra$List_Extra$transpose = function (ll) {
	transpose:
	while (true) {
		var _p43 = ll;
		if (_p43.ctor === '[]') {
			return {ctor: '[]'};
		} else {
			if (_p43._0.ctor === '[]') {
				var _v32 = _p43._1;
				ll = _v32;
				continue transpose;
			} else {
				var _p44 = _p43._1;
				var tails = A2(_elm_lang$core$List$filterMap, _elm_lang$core$List$tail, _p44);
				var heads = A2(_elm_lang$core$List$filterMap, _elm_lang$core$List$head, _p44);
				return {
					ctor: '::',
					_0: {ctor: '::', _0: _p43._0._0, _1: heads},
					_1: _elm_community$list_extra$List_Extra$transpose(
						{ctor: '::', _0: _p43._0._1, _1: tails})
				};
			}
		}
	}
};
var _elm_community$list_extra$List_Extra$intercalate = function (xs) {
	return function (_p45) {
		return _elm_lang$core$List$concat(
			A2(_elm_lang$core$List$intersperse, xs, _p45));
	};
};
var _elm_community$list_extra$List_Extra$filterNot = F2(
	function (pred, list) {
		return A2(
			_elm_lang$core$List$filter,
			function (_p46) {
				return !pred(_p46);
			},
			list);
	});
var _elm_community$list_extra$List_Extra$removeAt = F2(
	function (index, l) {
		if (_elm_lang$core$Native_Utils.cmp(index, 0) < 0) {
			return l;
		} else {
			var tail = _elm_lang$core$List$tail(
				A2(_elm_lang$core$List$drop, index, l));
			var head = A2(_elm_lang$core$List$take, index, l);
			var _p47 = tail;
			if (_p47.ctor === 'Nothing') {
				return l;
			} else {
				return A2(_elm_lang$core$List$append, head, _p47._0);
			}
		}
	});
var _elm_community$list_extra$List_Extra$stableSortWith = F2(
	function (pred, list) {
		var predWithIndex = F2(
			function (_p49, _p48) {
				var _p50 = _p49;
				var _p51 = _p48;
				var result = A2(pred, _p50._0, _p51._0);
				var _p52 = result;
				if (_p52.ctor === 'EQ') {
					return A2(_elm_lang$core$Basics$compare, _p50._1, _p51._1);
				} else {
					return result;
				}
			});
		var listWithIndex = A2(
			_elm_lang$core$List$indexedMap,
			F2(
				function (i, a) {
					return {ctor: '_Tuple2', _0: a, _1: i};
				}),
			list);
		return A2(
			_elm_lang$core$List$map,
			_elm_lang$core$Tuple$first,
			A2(_elm_lang$core$List$sortWith, predWithIndex, listWithIndex));
	});
var _elm_community$list_extra$List_Extra$setAt = F3(
	function (index, value, l) {
		if (_elm_lang$core$Native_Utils.cmp(index, 0) < 0) {
			return _elm_lang$core$Maybe$Nothing;
		} else {
			var tail = _elm_lang$core$List$tail(
				A2(_elm_lang$core$List$drop, index, l));
			var head = A2(_elm_lang$core$List$take, index, l);
			var _p53 = tail;
			if (_p53.ctor === 'Nothing') {
				return _elm_lang$core$Maybe$Nothing;
			} else {
				return _elm_lang$core$Maybe$Just(
					A2(
						_elm_lang$core$List$append,
						head,
						{ctor: '::', _0: value, _1: _p53._0}));
			}
		}
	});
var _elm_community$list_extra$List_Extra$remove = F2(
	function (x, xs) {
		var _p54 = xs;
		if (_p54.ctor === '[]') {
			return {ctor: '[]'};
		} else {
			var _p56 = _p54._1;
			var _p55 = _p54._0;
			return _elm_lang$core$Native_Utils.eq(x, _p55) ? _p56 : {
				ctor: '::',
				_0: _p55,
				_1: A2(_elm_community$list_extra$List_Extra$remove, x, _p56)
			};
		}
	});
var _elm_community$list_extra$List_Extra$updateIfIndex = F3(
	function (predicate, update, list) {
		return A2(
			_elm_lang$core$List$indexedMap,
			F2(
				function (i, x) {
					return predicate(i) ? update(x) : x;
				}),
			list);
	});
var _elm_community$list_extra$List_Extra$updateAt = F3(
	function (index, update, list) {
		return ((_elm_lang$core$Native_Utils.cmp(index, 0) < 0) || (_elm_lang$core$Native_Utils.cmp(
			index,
			_elm_lang$core$List$length(list)) > -1)) ? _elm_lang$core$Maybe$Nothing : _elm_lang$core$Maybe$Just(
			A3(
				_elm_community$list_extra$List_Extra$updateIfIndex,
				F2(
					function (x, y) {
						return _elm_lang$core$Native_Utils.eq(x, y);
					})(index),
				update,
				list));
	});
var _elm_community$list_extra$List_Extra$updateIf = F3(
	function (predicate, update, list) {
		return A2(
			_elm_lang$core$List$map,
			function (item) {
				return predicate(item) ? update(item) : item;
			},
			list);
	});
var _elm_community$list_extra$List_Extra$replaceIf = F3(
	function (predicate, replacement, list) {
		return A3(
			_elm_community$list_extra$List_Extra$updateIf,
			predicate,
			_elm_lang$core$Basics$always(replacement),
			list);
	});
var _elm_community$list_extra$List_Extra$findIndices = function (p) {
	return function (_p57) {
		return A2(
			_elm_lang$core$List$map,
			_elm_lang$core$Tuple$first,
			A2(
				_elm_lang$core$List$filter,
				function (_p58) {
					var _p59 = _p58;
					return p(_p59._1);
				},
				A2(
					_elm_lang$core$List$indexedMap,
					F2(
						function (v0, v1) {
							return {ctor: '_Tuple2', _0: v0, _1: v1};
						}),
					_p57)));
	};
};
var _elm_community$list_extra$List_Extra$findIndex = function (p) {
	return function (_p60) {
		return _elm_lang$core$List$head(
			A2(_elm_community$list_extra$List_Extra$findIndices, p, _p60));
	};
};
var _elm_community$list_extra$List_Extra$splitWhen = F2(
	function (predicate, list) {
		return A2(
			_elm_lang$core$Maybe$map,
			function (i) {
				return A2(_elm_community$list_extra$List_Extra$splitAt, i, list);
			},
			A2(_elm_community$list_extra$List_Extra$findIndex, predicate, list));
	});
var _elm_community$list_extra$List_Extra$elemIndices = function (x) {
	return _elm_community$list_extra$List_Extra$findIndices(
		F2(
			function (x, y) {
				return _elm_lang$core$Native_Utils.eq(x, y);
			})(x));
};
var _elm_community$list_extra$List_Extra$elemIndex = function (x) {
	return _elm_community$list_extra$List_Extra$findIndex(
		F2(
			function (x, y) {
				return _elm_lang$core$Native_Utils.eq(x, y);
			})(x));
};
var _elm_community$list_extra$List_Extra$find = F2(
	function (predicate, list) {
		find:
		while (true) {
			var _p61 = list;
			if (_p61.ctor === '[]') {
				return _elm_lang$core$Maybe$Nothing;
			} else {
				var _p62 = _p61._0;
				if (predicate(_p62)) {
					return _elm_lang$core$Maybe$Just(_p62);
				} else {
					var _v41 = predicate,
						_v42 = _p61._1;
					predicate = _v41;
					list = _v42;
					continue find;
				}
			}
		}
	});
var _elm_community$list_extra$List_Extra$notMember = function (x) {
	return function (_p63) {
		return !A2(_elm_lang$core$List$member, x, _p63);
	};
};
var _elm_community$list_extra$List_Extra$andThen = _elm_lang$core$List$concatMap;
var _elm_community$list_extra$List_Extra$lift2 = F3(
	function (f, la, lb) {
		return A2(
			_elm_community$list_extra$List_Extra$andThen,
			function (a) {
				return A2(
					_elm_community$list_extra$List_Extra$andThen,
					function (b) {
						return {
							ctor: '::',
							_0: A2(f, a, b),
							_1: {ctor: '[]'}
						};
					},
					lb);
			},
			la);
	});
var _elm_community$list_extra$List_Extra$lift3 = F4(
	function (f, la, lb, lc) {
		return A2(
			_elm_community$list_extra$List_Extra$andThen,
			function (a) {
				return A2(
					_elm_community$list_extra$List_Extra$andThen,
					function (b) {
						return A2(
							_elm_community$list_extra$List_Extra$andThen,
							function (c) {
								return {
									ctor: '::',
									_0: A3(f, a, b, c),
									_1: {ctor: '[]'}
								};
							},
							lc);
					},
					lb);
			},
			la);
	});
var _elm_community$list_extra$List_Extra$lift4 = F5(
	function (f, la, lb, lc, ld) {
		return A2(
			_elm_community$list_extra$List_Extra$andThen,
			function (a) {
				return A2(
					_elm_community$list_extra$List_Extra$andThen,
					function (b) {
						return A2(
							_elm_community$list_extra$List_Extra$andThen,
							function (c) {
								return A2(
									_elm_community$list_extra$List_Extra$andThen,
									function (d) {
										return {
											ctor: '::',
											_0: A4(f, a, b, c, d),
											_1: {ctor: '[]'}
										};
									},
									ld);
							},
							lc);
					},
					lb);
			},
			la);
	});
var _elm_community$list_extra$List_Extra$andMap = F2(
	function (l, fl) {
		return A3(
			_elm_lang$core$List$map2,
			F2(
				function (x, y) {
					return x(y);
				}),
			fl,
			l);
	});
var _elm_community$list_extra$List_Extra$uniqueHelp = F3(
	function (f, existing, remaining) {
		uniqueHelp:
		while (true) {
			var _p64 = remaining;
			if (_p64.ctor === '[]') {
				return {ctor: '[]'};
			} else {
				var _p66 = _p64._1;
				var _p65 = _p64._0;
				var computedFirst = f(_p65);
				if (A2(_elm_lang$core$Set$member, computedFirst, existing)) {
					var _v44 = f,
						_v45 = existing,
						_v46 = _p66;
					f = _v44;
					existing = _v45;
					remaining = _v46;
					continue uniqueHelp;
				} else {
					return {
						ctor: '::',
						_0: _p65,
						_1: A3(
							_elm_community$list_extra$List_Extra$uniqueHelp,
							f,
							A2(_elm_lang$core$Set$insert, computedFirst, existing),
							_p66)
					};
				}
			}
		}
	});
var _elm_community$list_extra$List_Extra$uniqueBy = F2(
	function (f, list) {
		return A3(_elm_community$list_extra$List_Extra$uniqueHelp, f, _elm_lang$core$Set$empty, list);
	});
var _elm_community$list_extra$List_Extra$allDifferentBy = F2(
	function (f, list) {
		return _elm_lang$core$Native_Utils.eq(
			_elm_lang$core$List$length(list),
			_elm_lang$core$List$length(
				A2(_elm_community$list_extra$List_Extra$uniqueBy, f, list)));
	});
var _elm_community$list_extra$List_Extra$allDifferent = function (list) {
	return A2(_elm_community$list_extra$List_Extra$allDifferentBy, _elm_lang$core$Basics$identity, list);
};
var _elm_community$list_extra$List_Extra$unique = function (list) {
	return A3(_elm_community$list_extra$List_Extra$uniqueHelp, _elm_lang$core$Basics$identity, _elm_lang$core$Set$empty, list);
};
var _elm_community$list_extra$List_Extra$dropWhile = F2(
	function (predicate, list) {
		dropWhile:
		while (true) {
			var _p67 = list;
			if (_p67.ctor === '[]') {
				return {ctor: '[]'};
			} else {
				if (predicate(_p67._0)) {
					var _v48 = predicate,
						_v49 = _p67._1;
					predicate = _v48;
					list = _v49;
					continue dropWhile;
				} else {
					return list;
				}
			}
		}
	});
var _elm_community$list_extra$List_Extra$takeWhile = function (predicate) {
	var takeWhileMemo = F2(
		function (memo, list) {
			takeWhileMemo:
			while (true) {
				var _p68 = list;
				if (_p68.ctor === '[]') {
					return _elm_lang$core$List$reverse(memo);
				} else {
					var _p69 = _p68._0;
					if (predicate(_p69)) {
						var _v51 = {ctor: '::', _0: _p69, _1: memo},
							_v52 = _p68._1;
						memo = _v51;
						list = _v52;
						continue takeWhileMemo;
					} else {
						return _elm_lang$core$List$reverse(memo);
					}
				}
			}
		});
	return takeWhileMemo(
		{ctor: '[]'});
};
var _elm_community$list_extra$List_Extra$span = F2(
	function (p, xs) {
		return {
			ctor: '_Tuple2',
			_0: A2(_elm_community$list_extra$List_Extra$takeWhile, p, xs),
			_1: A2(_elm_community$list_extra$List_Extra$dropWhile, p, xs)
		};
	});
var _elm_community$list_extra$List_Extra$break = function (p) {
	return _elm_community$list_extra$List_Extra$span(
		function (_p70) {
			return !p(_p70);
		});
};
var _elm_community$list_extra$List_Extra$groupWhile = F2(
	function (eq, xs_) {
		var _p71 = xs_;
		if (_p71.ctor === '[]') {
			return {ctor: '[]'};
		} else {
			var _p73 = _p71._0;
			var _p72 = A2(
				_elm_community$list_extra$List_Extra$span,
				eq(_p73),
				_p71._1);
			var ys = _p72._0;
			var zs = _p72._1;
			return {
				ctor: '::',
				_0: {ctor: '::', _0: _p73, _1: ys},
				_1: A2(_elm_community$list_extra$List_Extra$groupWhile, eq, zs)
			};
		}
	});
var _elm_community$list_extra$List_Extra$group = _elm_community$list_extra$List_Extra$groupWhile(
	F2(
		function (x, y) {
			return _elm_lang$core$Native_Utils.eq(x, y);
		}));
var _elm_community$list_extra$List_Extra$minimumBy = F2(
	function (f, ls) {
		var minBy = F2(
			function (x, _p74) {
				var _p75 = _p74;
				var _p76 = _p75._1;
				var fx = f(x);
				return (_elm_lang$core$Native_Utils.cmp(fx, _p76) < 0) ? {ctor: '_Tuple2', _0: x, _1: fx} : {ctor: '_Tuple2', _0: _p75._0, _1: _p76};
			});
		var _p77 = ls;
		if (_p77.ctor === '::') {
			if (_p77._1.ctor === '[]') {
				return _elm_lang$core$Maybe$Just(_p77._0);
			} else {
				var _p78 = _p77._0;
				return _elm_lang$core$Maybe$Just(
					_elm_lang$core$Tuple$first(
						A3(
							_elm_lang$core$List$foldl,
							minBy,
							{
								ctor: '_Tuple2',
								_0: _p78,
								_1: f(_p78)
							},
							_p77._1)));
			}
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_community$list_extra$List_Extra$maximumBy = F2(
	function (f, ls) {
		var maxBy = F2(
			function (x, _p79) {
				var _p80 = _p79;
				var _p81 = _p80._1;
				var fx = f(x);
				return (_elm_lang$core$Native_Utils.cmp(fx, _p81) > 0) ? {ctor: '_Tuple2', _0: x, _1: fx} : {ctor: '_Tuple2', _0: _p80._0, _1: _p81};
			});
		var _p82 = ls;
		if (_p82.ctor === '::') {
			if (_p82._1.ctor === '[]') {
				return _elm_lang$core$Maybe$Just(_p82._0);
			} else {
				var _p83 = _p82._0;
				return _elm_lang$core$Maybe$Just(
					_elm_lang$core$Tuple$first(
						A3(
							_elm_lang$core$List$foldl,
							maxBy,
							{
								ctor: '_Tuple2',
								_0: _p83,
								_1: f(_p83)
							},
							_p82._1)));
			}
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_community$list_extra$List_Extra$uncons = function (xs) {
	var _p84 = xs;
	if (_p84.ctor === '[]') {
		return _elm_lang$core$Maybe$Nothing;
	} else {
		return _elm_lang$core$Maybe$Just(
			{ctor: '_Tuple2', _0: _p84._0, _1: _p84._1});
	}
};
var _elm_community$list_extra$List_Extra$swapAt = F3(
	function (index1, index2, l) {
		swapAt:
		while (true) {
			if (_elm_lang$core$Native_Utils.eq(index1, index2)) {
				return _elm_lang$core$Maybe$Just(l);
			} else {
				if (_elm_lang$core$Native_Utils.cmp(index1, index2) > 0) {
					var _v59 = index2,
						_v60 = index1,
						_v61 = l;
					index1 = _v59;
					index2 = _v60;
					l = _v61;
					continue swapAt;
				} else {
					if (_elm_lang$core$Native_Utils.cmp(index1, 0) < 0) {
						return _elm_lang$core$Maybe$Nothing;
					} else {
						var _p85 = A2(_elm_community$list_extra$List_Extra$splitAt, index1, l);
						var part1 = _p85._0;
						var tail1 = _p85._1;
						var _p86 = A2(_elm_community$list_extra$List_Extra$splitAt, index2 - index1, tail1);
						var head2 = _p86._0;
						var tail2 = _p86._1;
						return A3(
							_elm_lang$core$Maybe$map2,
							F2(
								function (_p88, _p87) {
									var _p89 = _p88;
									var _p90 = _p87;
									return _elm_lang$core$List$concat(
										{
											ctor: '::',
											_0: part1,
											_1: {
												ctor: '::',
												_0: {ctor: '::', _0: _p90._0, _1: _p89._1},
												_1: {
													ctor: '::',
													_0: {ctor: '::', _0: _p89._0, _1: _p90._1},
													_1: {ctor: '[]'}
												}
											}
										});
								}),
							_elm_community$list_extra$List_Extra$uncons(head2),
							_elm_community$list_extra$List_Extra$uncons(tail2));
					}
				}
			}
		}
	});
var _elm_community$list_extra$List_Extra$iterate = F2(
	function (f, x) {
		var _p91 = f(x);
		if (_p91.ctor === 'Just') {
			return {
				ctor: '::',
				_0: x,
				_1: A2(_elm_community$list_extra$List_Extra$iterate, f, _p91._0)
			};
		} else {
			return {
				ctor: '::',
				_0: x,
				_1: {ctor: '[]'}
			};
		}
	});
var _elm_community$list_extra$List_Extra$getAt = F2(
	function (idx, xs) {
		return (_elm_lang$core$Native_Utils.cmp(idx, 0) < 0) ? _elm_lang$core$Maybe$Nothing : _elm_lang$core$List$head(
			A2(_elm_lang$core$List$drop, idx, xs));
	});
var _elm_community$list_extra$List_Extra_ops = _elm_community$list_extra$List_Extra_ops || {};
_elm_community$list_extra$List_Extra_ops['!!'] = _elm_lang$core$Basics$flip(_elm_community$list_extra$List_Extra$getAt);
var _elm_community$list_extra$List_Extra$init = function () {
	var maybe = F2(
		function (d, f) {
			return function (_p92) {
				return A2(
					_elm_lang$core$Maybe$withDefault,
					d,
					A2(_elm_lang$core$Maybe$map, f, _p92));
			};
		});
	return A2(
		_elm_lang$core$List$foldr,
		function (x) {
			return function (_p93) {
				return _elm_lang$core$Maybe$Just(
					A3(
						maybe,
						{ctor: '[]'},
						F2(
							function (x, y) {
								return {ctor: '::', _0: x, _1: y};
							})(x),
						_p93));
			};
		},
		_elm_lang$core$Maybe$Nothing);
}();
var _elm_community$list_extra$List_Extra$last = _elm_community$list_extra$List_Extra$foldl1(
	_elm_lang$core$Basics$flip(_elm_lang$core$Basics$always));

//import Maybe, Native.List //

var _elm_lang$core$Native_Regex = function() {

function escape(str)
{
	return str.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
}
function caseInsensitive(re)
{
	return new RegExp(re.source, 'gi');
}
function regex(raw)
{
	return new RegExp(raw, 'g');
}

function contains(re, string)
{
	return string.match(re) !== null;
}

function find(n, re, str)
{
	n = n.ctor === 'All' ? Infinity : n._0;
	var out = [];
	var number = 0;
	var string = str;
	var lastIndex = re.lastIndex;
	var prevLastIndex = -1;
	var result;
	while (number++ < n && (result = re.exec(string)))
	{
		if (prevLastIndex === re.lastIndex) break;
		var i = result.length - 1;
		var subs = new Array(i);
		while (i > 0)
		{
			var submatch = result[i];
			subs[--i] = submatch === undefined
				? _elm_lang$core$Maybe$Nothing
				: _elm_lang$core$Maybe$Just(submatch);
		}
		out.push({
			match: result[0],
			submatches: _elm_lang$core$Native_List.fromArray(subs),
			index: result.index,
			number: number
		});
		prevLastIndex = re.lastIndex;
	}
	re.lastIndex = lastIndex;
	return _elm_lang$core$Native_List.fromArray(out);
}

function replace(n, re, replacer, string)
{
	n = n.ctor === 'All' ? Infinity : n._0;
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
			submatches[--i] = submatch === undefined
				? _elm_lang$core$Maybe$Nothing
				: _elm_lang$core$Maybe$Just(submatch);
		}
		return replacer({
			match: match,
			submatches: _elm_lang$core$Native_List.fromArray(submatches),
			index: arguments[arguments.length - 2],
			number: count
		});
	}
	return string.replace(re, jsReplacer);
}

function split(n, re, str)
{
	n = n.ctor === 'All' ? Infinity : n._0;
	if (n === Infinity)
	{
		return _elm_lang$core$Native_List.fromArray(str.split(re));
	}
	var string = str;
	var result;
	var out = [];
	var start = re.lastIndex;
	var restoreLastIndex = re.lastIndex;
	while (n--)
	{
		if (!(result = re.exec(string))) break;
		out.push(string.slice(start, result.index));
		start = re.lastIndex;
	}
	out.push(string.slice(start));
	re.lastIndex = restoreLastIndex;
	return _elm_lang$core$Native_List.fromArray(out);
}

return {
	regex: regex,
	caseInsensitive: caseInsensitive,
	escape: escape,

	contains: F2(contains),
	find: F3(find),
	replace: F4(replace),
	split: F3(split)
};

}();

var _elm_lang$core$Regex$split = _elm_lang$core$Native_Regex.split;
var _elm_lang$core$Regex$replace = _elm_lang$core$Native_Regex.replace;
var _elm_lang$core$Regex$find = _elm_lang$core$Native_Regex.find;
var _elm_lang$core$Regex$contains = _elm_lang$core$Native_Regex.contains;
var _elm_lang$core$Regex$caseInsensitive = _elm_lang$core$Native_Regex.caseInsensitive;
var _elm_lang$core$Regex$regex = _elm_lang$core$Native_Regex.regex;
var _elm_lang$core$Regex$escape = _elm_lang$core$Native_Regex.escape;
var _elm_lang$core$Regex$Match = F4(
	function (a, b, c, d) {
		return {match: a, submatches: b, index: c, number: d};
	});
var _elm_lang$core$Regex$Regex = {ctor: 'Regex'};
var _elm_lang$core$Regex$AtMost = function (a) {
	return {ctor: 'AtMost', _0: a};
};
var _elm_lang$core$Regex$All = {ctor: 'All'};

var _elm_lang$core$Native_Bitwise = function() {

return {
	and: F2(function and(a, b) { return a & b; }),
	or: F2(function or(a, b) { return a | b; }),
	xor: F2(function xor(a, b) { return a ^ b; }),
	complement: function complement(a) { return ~a; },
	shiftLeftBy: F2(function(offset, a) { return a << offset; }),
	shiftRightBy: F2(function(offset, a) { return a >> offset; }),
	shiftRightZfBy: F2(function(offset, a) { return a >>> offset; })
};

}();

var _elm_lang$core$Bitwise$shiftRightZfBy = _elm_lang$core$Native_Bitwise.shiftRightZfBy;
var _elm_lang$core$Bitwise$shiftRightBy = _elm_lang$core$Native_Bitwise.shiftRightBy;
var _elm_lang$core$Bitwise$shiftLeftBy = _elm_lang$core$Native_Bitwise.shiftLeftBy;
var _elm_lang$core$Bitwise$complement = _elm_lang$core$Native_Bitwise.complement;
var _elm_lang$core$Bitwise$xor = _elm_lang$core$Native_Bitwise.xor;
var _elm_lang$core$Bitwise$or = _elm_lang$core$Native_Bitwise.or;
var _elm_lang$core$Bitwise$and = _elm_lang$core$Native_Bitwise.and;

var _elm_community$string_extra$String_Extra$accentRegex = function () {
	var matches = {
		ctor: '::',
		_0: {ctor: '_Tuple2', _0: '[à-æ]', _1: 'a'},
		_1: {
			ctor: '::',
			_0: {ctor: '_Tuple2', _0: '[À-Æ]', _1: 'A'},
			_1: {
				ctor: '::',
				_0: {ctor: '_Tuple2', _0: 'ç', _1: 'c'},
				_1: {
					ctor: '::',
					_0: {ctor: '_Tuple2', _0: 'Ç', _1: 'C'},
					_1: {
						ctor: '::',
						_0: {ctor: '_Tuple2', _0: '[è-ë]', _1: 'e'},
						_1: {
							ctor: '::',
							_0: {ctor: '_Tuple2', _0: '[È-Ë]', _1: 'E'},
							_1: {
								ctor: '::',
								_0: {ctor: '_Tuple2', _0: '[ì-ï]', _1: 'i'},
								_1: {
									ctor: '::',
									_0: {ctor: '_Tuple2', _0: '[Ì-Ï]', _1: 'I'},
									_1: {
										ctor: '::',
										_0: {ctor: '_Tuple2', _0: 'ñ', _1: 'n'},
										_1: {
											ctor: '::',
											_0: {ctor: '_Tuple2', _0: 'Ñ', _1: 'N'},
											_1: {
												ctor: '::',
												_0: {ctor: '_Tuple2', _0: '[ò-ö]', _1: 'o'},
												_1: {
													ctor: '::',
													_0: {ctor: '_Tuple2', _0: '[Ò-Ö]', _1: 'O'},
													_1: {
														ctor: '::',
														_0: {ctor: '_Tuple2', _0: '[ù-ü]', _1: 'u'},
														_1: {
															ctor: '::',
															_0: {ctor: '_Tuple2', _0: '[Ù-Ü]', _1: 'U'},
															_1: {
																ctor: '::',
																_0: {ctor: '_Tuple2', _0: 'ý', _1: 'y'},
																_1: {
																	ctor: '::',
																	_0: {ctor: '_Tuple2', _0: 'ÿ', _1: 'y'},
																	_1: {
																		ctor: '::',
																		_0: {ctor: '_Tuple2', _0: 'Ý', _1: 'Y'},
																		_1: {ctor: '[]'}
																	}
																}
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
	};
	return A2(
		_elm_lang$core$List$map,
		function (_p0) {
			var _p1 = _p0;
			return {
				ctor: '_Tuple2',
				_0: _elm_lang$core$Regex$regex(_p1._0),
				_1: _p1._1
			};
		},
		matches);
}();
var _elm_community$string_extra$String_Extra$removeAccents = function (string) {
	if (_elm_lang$core$String$isEmpty(string)) {
		return string;
	} else {
		var do_regex_to_remove_acents = function (_p2) {
			var _p3 = _p2;
			return A3(
				_elm_lang$core$Regex$replace,
				_elm_lang$core$Regex$All,
				_p3._0,
				function (_p4) {
					return _p3._1;
				});
		};
		return A3(_elm_lang$core$List$foldl, do_regex_to_remove_acents, string, _elm_community$string_extra$String_Extra$accentRegex);
	}
};
var _elm_community$string_extra$String_Extra$nonEmpty = function (string) {
	return _elm_lang$core$String$isEmpty(string) ? _elm_lang$core$Maybe$Nothing : _elm_lang$core$Maybe$Just(string);
};
var _elm_community$string_extra$String_Extra$replacementCodePoint = 65533;
var _elm_community$string_extra$String_Extra$toCodePoints = function (string) {
	var allCodeUnits = A2(
		_elm_lang$core$List$map,
		_elm_lang$core$Char$toCode,
		_elm_lang$core$String$toList(string));
	var combineAndReverse = F2(
		function (codeUnits, accumulated) {
			combineAndReverse:
			while (true) {
				var _p5 = codeUnits;
				if (_p5.ctor === '[]') {
					return accumulated;
				} else {
					var _p9 = _p5._0;
					var _p8 = _p5._1;
					if ((_elm_lang$core$Native_Utils.cmp(_p9, 0) > -1) && (_elm_lang$core$Native_Utils.cmp(_p9, 55295) < 1)) {
						var _v3 = _p8,
							_v4 = {ctor: '::', _0: _p9, _1: accumulated};
						codeUnits = _v3;
						accumulated = _v4;
						continue combineAndReverse;
					} else {
						if ((_elm_lang$core$Native_Utils.cmp(_p9, 55296) > -1) && (_elm_lang$core$Native_Utils.cmp(_p9, 56319) < 1)) {
							var _p6 = _p8;
							if (_p6.ctor === '[]') {
								return {ctor: '::', _0: _elm_community$string_extra$String_Extra$replacementCodePoint, _1: accumulated};
							} else {
								var _p7 = _p6._0;
								if ((_elm_lang$core$Native_Utils.cmp(_p7, 56320) > -1) && (_elm_lang$core$Native_Utils.cmp(_p7, 57343) < 1)) {
									var codePoint = (65536 + ((_p9 - 55296) * 1024)) + (_p7 - 56320);
									var _v6 = _p6._1,
										_v7 = {ctor: '::', _0: codePoint, _1: accumulated};
									codeUnits = _v6;
									accumulated = _v7;
									continue combineAndReverse;
								} else {
									var _v8 = _p8,
										_v9 = {ctor: '::', _0: _elm_community$string_extra$String_Extra$replacementCodePoint, _1: accumulated};
									codeUnits = _v8;
									accumulated = _v9;
									continue combineAndReverse;
								}
							}
						} else {
							if ((_elm_lang$core$Native_Utils.cmp(_p9, 57344) > -1) && (_elm_lang$core$Native_Utils.cmp(_p9, 65535) < 1)) {
								var _v10 = _p8,
									_v11 = {ctor: '::', _0: _p9, _1: accumulated};
								codeUnits = _v10;
								accumulated = _v11;
								continue combineAndReverse;
							} else {
								var _v12 = _p8,
									_v13 = {ctor: '::', _0: _elm_community$string_extra$String_Extra$replacementCodePoint, _1: accumulated};
								codeUnits = _v12;
								accumulated = _v13;
								continue combineAndReverse;
							}
						}
					}
				}
			}
		});
	return _elm_lang$core$List$reverse(
		A2(
			combineAndReverse,
			allCodeUnits,
			{ctor: '[]'}));
};
var _elm_community$string_extra$String_Extra$fromCodePoints = function (allCodePoints) {
	var splitAndReverse = F2(
		function (codePoints, accumulated) {
			splitAndReverse:
			while (true) {
				var _p10 = codePoints;
				if (_p10.ctor === '[]') {
					return accumulated;
				} else {
					var _p12 = _p10._1;
					var _p11 = _p10._0;
					if ((_elm_lang$core$Native_Utils.cmp(_p11, 0) > -1) && (_elm_lang$core$Native_Utils.cmp(_p11, 55295) < 1)) {
						var _v15 = _p12,
							_v16 = {ctor: '::', _0: _p11, _1: accumulated};
						codePoints = _v15;
						accumulated = _v16;
						continue splitAndReverse;
					} else {
						if ((_elm_lang$core$Native_Utils.cmp(_p11, 65536) > -1) && (_elm_lang$core$Native_Utils.cmp(_p11, 1114111) < 1)) {
							var subtracted = _p11 - 65536;
							var leading = (subtracted >> 10) + 55296;
							var trailing = (subtracted & 1023) + 56320;
							var _v17 = _p12,
								_v18 = {
								ctor: '::',
								_0: trailing,
								_1: {ctor: '::', _0: leading, _1: accumulated}
							};
							codePoints = _v17;
							accumulated = _v18;
							continue splitAndReverse;
						} else {
							if ((_elm_lang$core$Native_Utils.cmp(_p11, 57344) > -1) && (_elm_lang$core$Native_Utils.cmp(_p11, 65535) < 1)) {
								var _v19 = _p12,
									_v20 = {ctor: '::', _0: _p11, _1: accumulated};
								codePoints = _v19;
								accumulated = _v20;
								continue splitAndReverse;
							} else {
								var _v21 = _p12,
									_v22 = {ctor: '::', _0: _elm_community$string_extra$String_Extra$replacementCodePoint, _1: accumulated};
								codePoints = _v21;
								accumulated = _v22;
								continue splitAndReverse;
							}
						}
					}
				}
			}
		});
	var allCodeUnits = _elm_lang$core$List$reverse(
		A2(
			splitAndReverse,
			allCodePoints,
			{ctor: '[]'}));
	return _elm_lang$core$String$fromList(
		A2(_elm_lang$core$List$map, _elm_lang$core$Char$fromCode, allCodeUnits));
};
var _elm_community$string_extra$String_Extra$fromFloat = _elm_lang$core$Basics$toString;
var _elm_community$string_extra$String_Extra$fromInt = _elm_lang$core$Basics$toString;
var _elm_community$string_extra$String_Extra$leftOfBack = F2(
	function (pattern, string) {
		return A2(
			_elm_lang$core$Maybe$withDefault,
			'',
			A2(
				_elm_lang$core$Maybe$map,
				A2(_elm_lang$core$Basics$flip, _elm_lang$core$String$left, string),
				_elm_lang$core$List$head(
					_elm_lang$core$List$reverse(
						A2(_elm_lang$core$String$indexes, pattern, string)))));
	});
var _elm_community$string_extra$String_Extra$rightOfBack = F2(
	function (pattern, string) {
		return A2(
			_elm_lang$core$Maybe$withDefault,
			'',
			A2(
				_elm_lang$core$Maybe$map,
				function (_p13) {
					return A3(
						_elm_lang$core$Basics$flip,
						_elm_lang$core$String$dropLeft,
						string,
						A2(
							F2(
								function (x, y) {
									return x + y;
								}),
							_elm_lang$core$String$length(pattern),
							_p13));
				},
				_elm_lang$core$List$head(
					_elm_lang$core$List$reverse(
						A2(_elm_lang$core$String$indexes, pattern, string)))));
	});
var _elm_community$string_extra$String_Extra$firstResultHelp = F2(
	function ($default, list) {
		firstResultHelp:
		while (true) {
			var _p14 = list;
			if (_p14.ctor === '[]') {
				return $default;
			} else {
				if (_p14._0.ctor === 'Just') {
					return _p14._0._0;
				} else {
					var _v24 = $default,
						_v25 = _p14._1;
					$default = _v24;
					list = _v25;
					continue firstResultHelp;
				}
			}
		}
	});
var _elm_community$string_extra$String_Extra$firstResult = function (list) {
	return A2(_elm_community$string_extra$String_Extra$firstResultHelp, '', list);
};
var _elm_community$string_extra$String_Extra$leftOf = F2(
	function (pattern, string) {
		return A2(
			_elm_lang$core$String$join,
			'',
			A2(
				_elm_lang$core$List$map,
				function (_p15) {
					return _elm_community$string_extra$String_Extra$firstResult(
						function (_) {
							return _.submatches;
						}(_p15));
				},
				A3(
					_elm_lang$core$Regex$find,
					_elm_lang$core$Regex$AtMost(1),
					_elm_lang$core$Regex$regex(
						A2(
							_elm_lang$core$Basics_ops['++'],
							'^(.*?)',
							_elm_lang$core$Regex$escape(pattern))),
					string)));
	});
var _elm_community$string_extra$String_Extra$rightOf = F2(
	function (pattern, string) {
		return A2(
			_elm_lang$core$String$join,
			'',
			A2(
				_elm_lang$core$List$map,
				function (_p16) {
					return _elm_community$string_extra$String_Extra$firstResult(
						function (_) {
							return _.submatches;
						}(_p16));
				},
				A3(
					_elm_lang$core$Regex$find,
					_elm_lang$core$Regex$AtMost(1),
					_elm_lang$core$Regex$regex(
						A2(
							_elm_lang$core$Basics_ops['++'],
							_elm_lang$core$Regex$escape(pattern),
							'(.*)$')),
					string)));
	});
var _elm_community$string_extra$String_Extra$pluralize = F3(
	function (singular, plural, count) {
		return _elm_lang$core$Native_Utils.eq(count, 1) ? A2(_elm_lang$core$Basics_ops['++'], '1 ', singular) : A2(
			_elm_lang$core$Basics_ops['++'],
			_elm_lang$core$Basics$toString(count),
			A2(_elm_lang$core$Basics_ops['++'], ' ', plural));
	});
var _elm_community$string_extra$String_Extra$stripTags = function (string) {
	return A4(
		_elm_lang$core$Regex$replace,
		_elm_lang$core$Regex$All,
		_elm_lang$core$Regex$regex('<\\/?[^>]+>'),
		_elm_lang$core$Basics$always(''),
		string);
};
var _elm_community$string_extra$String_Extra$toSentenceHelper = F3(
	function (lastPart, sentence, list) {
		toSentenceHelper:
		while (true) {
			var _p17 = list;
			if (_p17.ctor === '[]') {
				return sentence;
			} else {
				if (_p17._1.ctor === '[]') {
					return A2(
						_elm_lang$core$Basics_ops['++'],
						sentence,
						A2(_elm_lang$core$Basics_ops['++'], lastPart, _p17._0));
				} else {
					var _v27 = lastPart,
						_v28 = A2(
						_elm_lang$core$Basics_ops['++'],
						sentence,
						A2(_elm_lang$core$Basics_ops['++'], ', ', _p17._0)),
						_v29 = _p17._1;
					lastPart = _v27;
					sentence = _v28;
					list = _v29;
					continue toSentenceHelper;
				}
			}
		}
	});
var _elm_community$string_extra$String_Extra$toSentenceBaseCase = function (list) {
	var _p18 = list;
	_v30_2:
	do {
		if (_p18.ctor === '::') {
			if (_p18._1.ctor === '[]') {
				return _p18._0;
			} else {
				if (_p18._1._1.ctor === '[]') {
					return A2(
						_elm_lang$core$Basics_ops['++'],
						_p18._0,
						A2(_elm_lang$core$Basics_ops['++'], ' and ', _p18._1._0));
				} else {
					break _v30_2;
				}
			}
		} else {
			break _v30_2;
		}
	} while(false);
	return '';
};
var _elm_community$string_extra$String_Extra$toSentenceOxford = function (list) {
	var _p19 = list;
	if (((_p19.ctor === '::') && (_p19._1.ctor === '::')) && (_p19._1._1.ctor === '::')) {
		return A3(
			_elm_community$string_extra$String_Extra$toSentenceHelper,
			', and ',
			A2(
				_elm_lang$core$Basics_ops['++'],
				_p19._0,
				A2(_elm_lang$core$Basics_ops['++'], ', ', _p19._1._0)),
			{ctor: '::', _0: _p19._1._1._0, _1: _p19._1._1._1});
	} else {
		return _elm_community$string_extra$String_Extra$toSentenceBaseCase(list);
	}
};
var _elm_community$string_extra$String_Extra$toSentence = function (list) {
	var _p20 = list;
	if (((_p20.ctor === '::') && (_p20._1.ctor === '::')) && (_p20._1._1.ctor === '::')) {
		return A3(
			_elm_community$string_extra$String_Extra$toSentenceHelper,
			' and ',
			A2(
				_elm_lang$core$Basics_ops['++'],
				_p20._0,
				A2(_elm_lang$core$Basics_ops['++'], ', ', _p20._1._0)),
			{ctor: '::', _0: _p20._1._1._0, _1: _p20._1._1._1});
	} else {
		return _elm_community$string_extra$String_Extra$toSentenceBaseCase(list);
	}
};
var _elm_community$string_extra$String_Extra$ellipsisWith = F3(
	function (howLong, append, string) {
		return (_elm_lang$core$Native_Utils.cmp(
			_elm_lang$core$String$length(string),
			howLong) < 1) ? string : A2(
			_elm_lang$core$Basics_ops['++'],
			A2(
				_elm_lang$core$String$left,
				howLong - _elm_lang$core$String$length(append),
				string),
			append);
	});
var _elm_community$string_extra$String_Extra$ellipsis = F2(
	function (howLong, string) {
		return A3(_elm_community$string_extra$String_Extra$ellipsisWith, howLong, '...', string);
	});
var _elm_community$string_extra$String_Extra$countOccurrences = F2(
	function (needle, haystack) {
		return (_elm_lang$core$Native_Utils.eq(
			_elm_lang$core$String$length(needle),
			0) || _elm_lang$core$Native_Utils.eq(
			_elm_lang$core$String$length(haystack),
			0)) ? 0 : _elm_lang$core$List$length(
			A2(_elm_lang$core$String$indexes, needle, haystack));
	});
var _elm_community$string_extra$String_Extra$unindent = function (multilineSting) {
	var isNotWhitespace = function ($char) {
		return (!_elm_lang$core$Native_Utils.eq(
			$char,
			_elm_lang$core$Native_Utils.chr(' '))) && (!_elm_lang$core$Native_Utils.eq(
			$char,
			_elm_lang$core$Native_Utils.chr('\t')));
	};
	var countLeadingWhitespace = F2(
		function (count, line) {
			countLeadingWhitespace:
			while (true) {
				var _p21 = _elm_lang$core$String$uncons(line);
				if (_p21.ctor === 'Nothing') {
					return count;
				} else {
					var _p23 = _p21._0._1;
					var _p22 = _p21._0._0;
					switch (_p22.valueOf()) {
						case ' ':
							var _v35 = count + 1,
								_v36 = _p23;
							count = _v35;
							line = _v36;
							continue countLeadingWhitespace;
						case '\t':
							var _v37 = count + 1,
								_v38 = _p23;
							count = _v37;
							line = _v38;
							continue countLeadingWhitespace;
						default:
							return count;
					}
				}
			}
		});
	var lines = _elm_lang$core$String$lines(multilineSting);
	var minLead = A2(
		_elm_lang$core$Maybe$withDefault,
		0,
		_elm_lang$core$List$minimum(
			A2(
				_elm_lang$core$List$map,
				countLeadingWhitespace(0),
				A2(
					_elm_lang$core$List$filter,
					_elm_lang$core$String$any(isNotWhitespace),
					lines))));
	return A2(
		_elm_lang$core$String$join,
		'\n',
		A2(
			_elm_lang$core$List$map,
			_elm_lang$core$String$dropLeft(minLead),
			lines));
};
var _elm_community$string_extra$String_Extra$dasherize = function (string) {
	return _elm_lang$core$String$toLower(
		A4(
			_elm_lang$core$Regex$replace,
			_elm_lang$core$Regex$All,
			_elm_lang$core$Regex$regex('[_-\\s]+'),
			_elm_lang$core$Basics$always('-'),
			A4(
				_elm_lang$core$Regex$replace,
				_elm_lang$core$Regex$All,
				_elm_lang$core$Regex$regex('([A-Z])'),
				function (_p24) {
					return A2(
						_elm_lang$core$String$append,
						'-',
						function (_) {
							return _.match;
						}(_p24));
				},
				_elm_lang$core$String$trim(string))));
};
var _elm_community$string_extra$String_Extra$underscored = function (string) {
	return _elm_lang$core$String$toLower(
		A4(
			_elm_lang$core$Regex$replace,
			_elm_lang$core$Regex$All,
			_elm_lang$core$Regex$regex('[_-\\s]+'),
			_elm_lang$core$Basics$always('_'),
			A4(
				_elm_lang$core$Regex$replace,
				_elm_lang$core$Regex$All,
				_elm_lang$core$Regex$regex('([a-z\\d])([A-Z]+)'),
				function (_p25) {
					return A2(
						_elm_lang$core$String$join,
						'_',
						A2(
							_elm_lang$core$List$filterMap,
							_elm_lang$core$Basics$identity,
							function (_) {
								return _.submatches;
							}(_p25)));
				},
				_elm_lang$core$String$trim(string))));
};
var _elm_community$string_extra$String_Extra$unsurround = F2(
	function (wrap, string) {
		if (A2(_elm_lang$core$String$startsWith, wrap, string) && A2(_elm_lang$core$String$endsWith, wrap, string)) {
			var length = _elm_lang$core$String$length(wrap);
			return A2(
				_elm_lang$core$String$dropRight,
				length,
				A2(_elm_lang$core$String$dropLeft, length, string));
		} else {
			return string;
		}
	});
var _elm_community$string_extra$String_Extra$unquote = function (string) {
	return A2(_elm_community$string_extra$String_Extra$unsurround, '\"', string);
};
var _elm_community$string_extra$String_Extra$surround = F2(
	function (wrap, string) {
		return A2(
			_elm_lang$core$Basics_ops['++'],
			wrap,
			A2(_elm_lang$core$Basics_ops['++'], string, wrap));
	});
var _elm_community$string_extra$String_Extra$quote = function (string) {
	return A2(_elm_community$string_extra$String_Extra$surround, '\"', string);
};
var _elm_community$string_extra$String_Extra$camelize = function (string) {
	return A4(
		_elm_lang$core$Regex$replace,
		_elm_lang$core$Regex$All,
		_elm_lang$core$Regex$regex('[-_\\s]+(.)?'),
		function (_p26) {
			var _p27 = _p26;
			var _p28 = _p27.submatches;
			if ((_p28.ctor === '::') && (_p28._0.ctor === 'Just')) {
				return _elm_lang$core$String$toUpper(_p28._0._0);
			} else {
				return '';
			}
		},
		_elm_lang$core$String$trim(string));
};
var _elm_community$string_extra$String_Extra$isBlank = function (string) {
	return A2(
		_elm_lang$core$Regex$contains,
		_elm_lang$core$Regex$regex('^\\s*$'),
		string);
};
var _elm_community$string_extra$String_Extra$clean = function (string) {
	return _elm_lang$core$String$trim(
		A4(
			_elm_lang$core$Regex$replace,
			_elm_lang$core$Regex$All,
			_elm_lang$core$Regex$regex('\\s\\s+'),
			_elm_lang$core$Basics$always(' '),
			string));
};
var _elm_community$string_extra$String_Extra$softBreakRegexp = function (width) {
	return _elm_lang$core$Regex$regex(
		A2(
			_elm_lang$core$Basics_ops['++'],
			'.{1,',
			A2(
				_elm_lang$core$Basics_ops['++'],
				_elm_lang$core$Basics$toString(width),
				'}(\\s+|$)|\\S+?(\\s+|$)')));
};
var _elm_community$string_extra$String_Extra$softEllipsis = F2(
	function (howLong, string) {
		return (_elm_lang$core$Native_Utils.cmp(
			_elm_lang$core$String$length(string),
			howLong) < 1) ? string : A3(
			_elm_lang$core$Basics$flip,
			_elm_lang$core$String$append,
			'...',
			A4(
				_elm_lang$core$Regex$replace,
				_elm_lang$core$Regex$All,
				_elm_lang$core$Regex$regex('([\\.,;:\\s])+$'),
				_elm_lang$core$Basics$always(''),
				A2(
					_elm_lang$core$String$join,
					'',
					A2(
						_elm_lang$core$List$map,
						function (_) {
							return _.match;
						},
						A3(
							_elm_lang$core$Regex$find,
							_elm_lang$core$Regex$AtMost(1),
							_elm_community$string_extra$String_Extra$softBreakRegexp(howLong),
							string)))));
	});
var _elm_community$string_extra$String_Extra$softBreak = F2(
	function (width, string) {
		return (_elm_lang$core$Native_Utils.cmp(width, 0) < 1) ? {ctor: '[]'} : A2(
			_elm_lang$core$List$map,
			function (_) {
				return _.match;
			},
			A3(
				_elm_lang$core$Regex$find,
				_elm_lang$core$Regex$All,
				_elm_community$string_extra$String_Extra$softBreakRegexp(width),
				string));
	});
var _elm_community$string_extra$String_Extra$softWrapWith = F3(
	function (width, separator, string) {
		return A2(
			_elm_lang$core$String$join,
			separator,
			A2(_elm_community$string_extra$String_Extra$softBreak, width, string));
	});
var _elm_community$string_extra$String_Extra$softWrap = F2(
	function (width, string) {
		return A3(_elm_community$string_extra$String_Extra$softWrapWith, width, '\n', string);
	});
var _elm_community$string_extra$String_Extra$breaker = F3(
	function (width, string, acc) {
		breaker:
		while (true) {
			var _p29 = string;
			if (_p29 === '') {
				return _elm_lang$core$List$reverse(acc);
			} else {
				var _v42 = width,
					_v43 = A2(_elm_lang$core$String$dropLeft, width, string),
					_v44 = {
					ctor: '::',
					_0: A3(_elm_lang$core$String$slice, 0, width, string),
					_1: acc
				};
				width = _v42;
				string = _v43;
				acc = _v44;
				continue breaker;
			}
		}
	});
var _elm_community$string_extra$String_Extra$break = F2(
	function (width, string) {
		return (_elm_lang$core$Native_Utils.eq(width, 0) || _elm_lang$core$Native_Utils.eq(string, '')) ? {
			ctor: '::',
			_0: string,
			_1: {ctor: '[]'}
		} : A3(
			_elm_community$string_extra$String_Extra$breaker,
			width,
			string,
			{ctor: '[]'});
	});
var _elm_community$string_extra$String_Extra$wrapWith = F3(
	function (width, separator, string) {
		return A2(
			_elm_lang$core$String$join,
			separator,
			A2(_elm_community$string_extra$String_Extra$break, width, string));
	});
var _elm_community$string_extra$String_Extra$wrap = F2(
	function (width, string) {
		return A3(_elm_community$string_extra$String_Extra$wrapWith, width, '\n', string);
	});
var _elm_community$string_extra$String_Extra$replaceSlice = F4(
	function (substitution, start, end, string) {
		return A2(
			_elm_lang$core$Basics_ops['++'],
			A3(_elm_lang$core$String$slice, 0, start, string),
			A2(
				_elm_lang$core$Basics_ops['++'],
				substitution,
				A3(
					_elm_lang$core$String$slice,
					end,
					_elm_lang$core$String$length(string),
					string)));
	});
var _elm_community$string_extra$String_Extra$insertAt = F3(
	function (insert, pos, string) {
		return A4(_elm_community$string_extra$String_Extra$replaceSlice, insert, pos, pos, string);
	});
var _elm_community$string_extra$String_Extra$replace = F3(
	function (search, substitution, string) {
		return A4(
			_elm_lang$core$Regex$replace,
			_elm_lang$core$Regex$All,
			_elm_lang$core$Regex$regex(
				_elm_lang$core$Regex$escape(search)),
			function (_p30) {
				return substitution;
			},
			string);
	});
var _elm_community$string_extra$String_Extra$changeCase = F2(
	function (mutator, word) {
		return A2(
			_elm_lang$core$Maybe$withDefault,
			'',
			A2(
				_elm_lang$core$Maybe$map,
				function (_p31) {
					var _p32 = _p31;
					return A2(
						_elm_lang$core$String$cons,
						mutator(_p32._0),
						_p32._1);
				},
				_elm_lang$core$String$uncons(word)));
	});
var _elm_community$string_extra$String_Extra$toSentenceCase = function (word) {
	return A2(_elm_community$string_extra$String_Extra$changeCase, _elm_lang$core$Char$toUpper, word);
};
var _elm_community$string_extra$String_Extra$toTitleCase = function (ws) {
	var uppercaseMatch = A3(
		_elm_lang$core$Regex$replace,
		_elm_lang$core$Regex$All,
		_elm_lang$core$Regex$regex('\\w+'),
		function (_p33) {
			return _elm_community$string_extra$String_Extra$toSentenceCase(
				function (_) {
					return _.match;
				}(_p33));
		});
	return A4(
		_elm_lang$core$Regex$replace,
		_elm_lang$core$Regex$All,
		_elm_lang$core$Regex$regex('^([a-z])|\\s+([a-z])'),
		function (_p34) {
			return uppercaseMatch(
				function (_) {
					return _.match;
				}(_p34));
		},
		ws);
};
var _elm_community$string_extra$String_Extra$classify = function (string) {
	return _elm_community$string_extra$String_Extra$toSentenceCase(
		A3(
			_elm_community$string_extra$String_Extra$replace,
			' ',
			'',
			_elm_community$string_extra$String_Extra$camelize(
				A4(
					_elm_lang$core$Regex$replace,
					_elm_lang$core$Regex$All,
					_elm_lang$core$Regex$regex('[\\W_]'),
					_elm_lang$core$Basics$always(' '),
					string))));
};
var _elm_community$string_extra$String_Extra$humanize = function (string) {
	return _elm_community$string_extra$String_Extra$toSentenceCase(
		_elm_lang$core$String$toLower(
			_elm_lang$core$String$trim(
				A4(
					_elm_lang$core$Regex$replace,
					_elm_lang$core$Regex$All,
					_elm_lang$core$Regex$regex('_id$|[-_\\s]+'),
					_elm_lang$core$Basics$always(' '),
					A4(
						_elm_lang$core$Regex$replace,
						_elm_lang$core$Regex$All,
						_elm_lang$core$Regex$regex('[A-Z]'),
						function (_p35) {
							return A2(
								_elm_lang$core$String$append,
								'-',
								function (_) {
									return _.match;
								}(_p35));
						},
						string)))));
};
var _elm_community$string_extra$String_Extra$decapitalize = function (word) {
	return A2(_elm_community$string_extra$String_Extra$changeCase, _elm_lang$core$Char$toLower, word);
};

//import Native.List //

var _elm_lang$core$Native_Array = function() {

// A RRB-Tree has two distinct data types.
// Leaf -> "height"  is always 0
//         "table"   is an array of elements
// Node -> "height"  is always greater than 0
//         "table"   is an array of child nodes
//         "lengths" is an array of accumulated lengths of the child nodes

// M is the maximal table size. 32 seems fast. E is the allowed increase
// of search steps when concatting to find an index. Lower values will
// decrease balancing, but will increase search steps.
var M = 32;
var E = 2;

// An empty array.
var empty = {
	ctor: '_Array',
	height: 0,
	table: []
};


function get(i, array)
{
	if (i < 0 || i >= length(array))
	{
		throw new Error(
			'Index ' + i + ' is out of range. Check the length of ' +
			'your array first or use getMaybe or getWithDefault.');
	}
	return unsafeGet(i, array);
}


function unsafeGet(i, array)
{
	for (var x = array.height; x > 0; x--)
	{
		var slot = i >> (x * 5);
		while (array.lengths[slot] <= i)
		{
			slot++;
		}
		if (slot > 0)
		{
			i -= array.lengths[slot - 1];
		}
		array = array.table[slot];
	}
	return array.table[i];
}


// Sets the value at the index i. Only the nodes leading to i will get
// copied and updated.
function set(i, item, array)
{
	if (i < 0 || length(array) <= i)
	{
		return array;
	}
	return unsafeSet(i, item, array);
}


function unsafeSet(i, item, array)
{
	array = nodeCopy(array);

	if (array.height === 0)
	{
		array.table[i] = item;
	}
	else
	{
		var slot = getSlot(i, array);
		if (slot > 0)
		{
			i -= array.lengths[slot - 1];
		}
		array.table[slot] = unsafeSet(i, item, array.table[slot]);
	}
	return array;
}


function initialize(len, f)
{
	if (len <= 0)
	{
		return empty;
	}
	var h = Math.floor( Math.log(len) / Math.log(M) );
	return initialize_(f, h, 0, len);
}

function initialize_(f, h, from, to)
{
	if (h === 0)
	{
		var table = new Array((to - from) % (M + 1));
		for (var i = 0; i < table.length; i++)
		{
		  table[i] = f(from + i);
		}
		return {
			ctor: '_Array',
			height: 0,
			table: table
		};
	}

	var step = Math.pow(M, h);
	var table = new Array(Math.ceil((to - from) / step));
	var lengths = new Array(table.length);
	for (var i = 0; i < table.length; i++)
	{
		table[i] = initialize_(f, h - 1, from + (i * step), Math.min(from + ((i + 1) * step), to));
		lengths[i] = length(table[i]) + (i > 0 ? lengths[i-1] : 0);
	}
	return {
		ctor: '_Array',
		height: h,
		table: table,
		lengths: lengths
	};
}

function fromList(list)
{
	if (list.ctor === '[]')
	{
		return empty;
	}

	// Allocate M sized blocks (table) and write list elements to it.
	var table = new Array(M);
	var nodes = [];
	var i = 0;

	while (list.ctor !== '[]')
	{
		table[i] = list._0;
		list = list._1;
		i++;

		// table is full, so we can push a leaf containing it into the
		// next node.
		if (i === M)
		{
			var leaf = {
				ctor: '_Array',
				height: 0,
				table: table
			};
			fromListPush(leaf, nodes);
			table = new Array(M);
			i = 0;
		}
	}

	// Maybe there is something left on the table.
	if (i > 0)
	{
		var leaf = {
			ctor: '_Array',
			height: 0,
			table: table.splice(0, i)
		};
		fromListPush(leaf, nodes);
	}

	// Go through all of the nodes and eventually push them into higher nodes.
	for (var h = 0; h < nodes.length - 1; h++)
	{
		if (nodes[h].table.length > 0)
		{
			fromListPush(nodes[h], nodes);
		}
	}

	var head = nodes[nodes.length - 1];
	if (head.height > 0 && head.table.length === 1)
	{
		return head.table[0];
	}
	else
	{
		return head;
	}
}

// Push a node into a higher node as a child.
function fromListPush(toPush, nodes)
{
	var h = toPush.height;

	// Maybe the node on this height does not exist.
	if (nodes.length === h)
	{
		var node = {
			ctor: '_Array',
			height: h + 1,
			table: [],
			lengths: []
		};
		nodes.push(node);
	}

	nodes[h].table.push(toPush);
	var len = length(toPush);
	if (nodes[h].lengths.length > 0)
	{
		len += nodes[h].lengths[nodes[h].lengths.length - 1];
	}
	nodes[h].lengths.push(len);

	if (nodes[h].table.length === M)
	{
		fromListPush(nodes[h], nodes);
		nodes[h] = {
			ctor: '_Array',
			height: h + 1,
			table: [],
			lengths: []
		};
	}
}

// Pushes an item via push_ to the bottom right of a tree.
function push(item, a)
{
	var pushed = push_(item, a);
	if (pushed !== null)
	{
		return pushed;
	}

	var newTree = create(item, a.height);
	return siblise(a, newTree);
}

// Recursively tries to push an item to the bottom-right most
// tree possible. If there is no space left for the item,
// null will be returned.
function push_(item, a)
{
	// Handle resursion stop at leaf level.
	if (a.height === 0)
	{
		if (a.table.length < M)
		{
			var newA = {
				ctor: '_Array',
				height: 0,
				table: a.table.slice()
			};
			newA.table.push(item);
			return newA;
		}
		else
		{
		  return null;
		}
	}

	// Recursively push
	var pushed = push_(item, botRight(a));

	// There was space in the bottom right tree, so the slot will
	// be updated.
	if (pushed !== null)
	{
		var newA = nodeCopy(a);
		newA.table[newA.table.length - 1] = pushed;
		newA.lengths[newA.lengths.length - 1]++;
		return newA;
	}

	// When there was no space left, check if there is space left
	// for a new slot with a tree which contains only the item
	// at the bottom.
	if (a.table.length < M)
	{
		var newSlot = create(item, a.height - 1);
		var newA = nodeCopy(a);
		newA.table.push(newSlot);
		newA.lengths.push(newA.lengths[newA.lengths.length - 1] + length(newSlot));
		return newA;
	}
	else
	{
		return null;
	}
}

// Converts an array into a list of elements.
function toList(a)
{
	return toList_(_elm_lang$core$Native_List.Nil, a);
}

function toList_(list, a)
{
	for (var i = a.table.length - 1; i >= 0; i--)
	{
		list =
			a.height === 0
				? _elm_lang$core$Native_List.Cons(a.table[i], list)
				: toList_(list, a.table[i]);
	}
	return list;
}

// Maps a function over the elements of an array.
function map(f, a)
{
	var newA = {
		ctor: '_Array',
		height: a.height,
		table: new Array(a.table.length)
	};
	if (a.height > 0)
	{
		newA.lengths = a.lengths;
	}
	for (var i = 0; i < a.table.length; i++)
	{
		newA.table[i] =
			a.height === 0
				? f(a.table[i])
				: map(f, a.table[i]);
	}
	return newA;
}

// Maps a function over the elements with their index as first argument.
function indexedMap(f, a)
{
	return indexedMap_(f, a, 0);
}

function indexedMap_(f, a, from)
{
	var newA = {
		ctor: '_Array',
		height: a.height,
		table: new Array(a.table.length)
	};
	if (a.height > 0)
	{
		newA.lengths = a.lengths;
	}
	for (var i = 0; i < a.table.length; i++)
	{
		newA.table[i] =
			a.height === 0
				? A2(f, from + i, a.table[i])
				: indexedMap_(f, a.table[i], i == 0 ? from : from + a.lengths[i - 1]);
	}
	return newA;
}

function foldl(f, b, a)
{
	if (a.height === 0)
	{
		for (var i = 0; i < a.table.length; i++)
		{
			b = A2(f, a.table[i], b);
		}
	}
	else
	{
		for (var i = 0; i < a.table.length; i++)
		{
			b = foldl(f, b, a.table[i]);
		}
	}
	return b;
}

function foldr(f, b, a)
{
	if (a.height === 0)
	{
		for (var i = a.table.length; i--; )
		{
			b = A2(f, a.table[i], b);
		}
	}
	else
	{
		for (var i = a.table.length; i--; )
		{
			b = foldr(f, b, a.table[i]);
		}
	}
	return b;
}

// TODO: currently, it slices the right, then the left. This can be
// optimized.
function slice(from, to, a)
{
	if (from < 0)
	{
		from += length(a);
	}
	if (to < 0)
	{
		to += length(a);
	}
	return sliceLeft(from, sliceRight(to, a));
}

function sliceRight(to, a)
{
	if (to === length(a))
	{
		return a;
	}

	// Handle leaf level.
	if (a.height === 0)
	{
		var newA = { ctor:'_Array', height:0 };
		newA.table = a.table.slice(0, to);
		return newA;
	}

	// Slice the right recursively.
	var right = getSlot(to, a);
	var sliced = sliceRight(to - (right > 0 ? a.lengths[right - 1] : 0), a.table[right]);

	// Maybe the a node is not even needed, as sliced contains the whole slice.
	if (right === 0)
	{
		return sliced;
	}

	// Create new node.
	var newA = {
		ctor: '_Array',
		height: a.height,
		table: a.table.slice(0, right),
		lengths: a.lengths.slice(0, right)
	};
	if (sliced.table.length > 0)
	{
		newA.table[right] = sliced;
		newA.lengths[right] = length(sliced) + (right > 0 ? newA.lengths[right - 1] : 0);
	}
	return newA;
}

function sliceLeft(from, a)
{
	if (from === 0)
	{
		return a;
	}

	// Handle leaf level.
	if (a.height === 0)
	{
		var newA = { ctor:'_Array', height:0 };
		newA.table = a.table.slice(from, a.table.length + 1);
		return newA;
	}

	// Slice the left recursively.
	var left = getSlot(from, a);
	var sliced = sliceLeft(from - (left > 0 ? a.lengths[left - 1] : 0), a.table[left]);

	// Maybe the a node is not even needed, as sliced contains the whole slice.
	if (left === a.table.length - 1)
	{
		return sliced;
	}

	// Create new node.
	var newA = {
		ctor: '_Array',
		height: a.height,
		table: a.table.slice(left, a.table.length + 1),
		lengths: new Array(a.table.length - left)
	};
	newA.table[0] = sliced;
	var len = 0;
	for (var i = 0; i < newA.table.length; i++)
	{
		len += length(newA.table[i]);
		newA.lengths[i] = len;
	}

	return newA;
}

// Appends two trees.
function append(a,b)
{
	if (a.table.length === 0)
	{
		return b;
	}
	if (b.table.length === 0)
	{
		return a;
	}

	var c = append_(a, b);

	// Check if both nodes can be crunshed together.
	if (c[0].table.length + c[1].table.length <= M)
	{
		if (c[0].table.length === 0)
		{
			return c[1];
		}
		if (c[1].table.length === 0)
		{
			return c[0];
		}

		// Adjust .table and .lengths
		c[0].table = c[0].table.concat(c[1].table);
		if (c[0].height > 0)
		{
			var len = length(c[0]);
			for (var i = 0; i < c[1].lengths.length; i++)
			{
				c[1].lengths[i] += len;
			}
			c[0].lengths = c[0].lengths.concat(c[1].lengths);
		}

		return c[0];
	}

	if (c[0].height > 0)
	{
		var toRemove = calcToRemove(a, b);
		if (toRemove > E)
		{
			c = shuffle(c[0], c[1], toRemove);
		}
	}

	return siblise(c[0], c[1]);
}

// Returns an array of two nodes; right and left. One node _may_ be empty.
function append_(a, b)
{
	if (a.height === 0 && b.height === 0)
	{
		return [a, b];
	}

	if (a.height !== 1 || b.height !== 1)
	{
		if (a.height === b.height)
		{
			a = nodeCopy(a);
			b = nodeCopy(b);
			var appended = append_(botRight(a), botLeft(b));

			insertRight(a, appended[1]);
			insertLeft(b, appended[0]);
		}
		else if (a.height > b.height)
		{
			a = nodeCopy(a);
			var appended = append_(botRight(a), b);

			insertRight(a, appended[0]);
			b = parentise(appended[1], appended[1].height + 1);
		}
		else
		{
			b = nodeCopy(b);
			var appended = append_(a, botLeft(b));

			var left = appended[0].table.length === 0 ? 0 : 1;
			var right = left === 0 ? 1 : 0;
			insertLeft(b, appended[left]);
			a = parentise(appended[right], appended[right].height + 1);
		}
	}

	// Check if balancing is needed and return based on that.
	if (a.table.length === 0 || b.table.length === 0)
	{
		return [a, b];
	}

	var toRemove = calcToRemove(a, b);
	if (toRemove <= E)
	{
		return [a, b];
	}
	return shuffle(a, b, toRemove);
}

// Helperfunctions for append_. Replaces a child node at the side of the parent.
function insertRight(parent, node)
{
	var index = parent.table.length - 1;
	parent.table[index] = node;
	parent.lengths[index] = length(node);
	parent.lengths[index] += index > 0 ? parent.lengths[index - 1] : 0;
}

function insertLeft(parent, node)
{
	if (node.table.length > 0)
	{
		parent.table[0] = node;
		parent.lengths[0] = length(node);

		var len = length(parent.table[0]);
		for (var i = 1; i < parent.lengths.length; i++)
		{
			len += length(parent.table[i]);
			parent.lengths[i] = len;
		}
	}
	else
	{
		parent.table.shift();
		for (var i = 1; i < parent.lengths.length; i++)
		{
			parent.lengths[i] = parent.lengths[i] - parent.lengths[0];
		}
		parent.lengths.shift();
	}
}

// Returns the extra search steps for E. Refer to the paper.
function calcToRemove(a, b)
{
	var subLengths = 0;
	for (var i = 0; i < a.table.length; i++)
	{
		subLengths += a.table[i].table.length;
	}
	for (var i = 0; i < b.table.length; i++)
	{
		subLengths += b.table[i].table.length;
	}

	var toRemove = a.table.length + b.table.length;
	return toRemove - (Math.floor((subLengths - 1) / M) + 1);
}

// get2, set2 and saveSlot are helpers for accessing elements over two arrays.
function get2(a, b, index)
{
	return index < a.length
		? a[index]
		: b[index - a.length];
}

function set2(a, b, index, value)
{
	if (index < a.length)
	{
		a[index] = value;
	}
	else
	{
		b[index - a.length] = value;
	}
}

function saveSlot(a, b, index, slot)
{
	set2(a.table, b.table, index, slot);

	var l = (index === 0 || index === a.lengths.length)
		? 0
		: get2(a.lengths, a.lengths, index - 1);

	set2(a.lengths, b.lengths, index, l + length(slot));
}

// Creates a node or leaf with a given length at their arrays for perfomance.
// Is only used by shuffle.
function createNode(h, length)
{
	if (length < 0)
	{
		length = 0;
	}
	var a = {
		ctor: '_Array',
		height: h,
		table: new Array(length)
	};
	if (h > 0)
	{
		a.lengths = new Array(length);
	}
	return a;
}

// Returns an array of two balanced nodes.
function shuffle(a, b, toRemove)
{
	var newA = createNode(a.height, Math.min(M, a.table.length + b.table.length - toRemove));
	var newB = createNode(a.height, newA.table.length - (a.table.length + b.table.length - toRemove));

	// Skip the slots with size M. More precise: copy the slot references
	// to the new node
	var read = 0;
	while (get2(a.table, b.table, read).table.length % M === 0)
	{
		set2(newA.table, newB.table, read, get2(a.table, b.table, read));
		set2(newA.lengths, newB.lengths, read, get2(a.lengths, b.lengths, read));
		read++;
	}

	// Pulling items from left to right, caching in a slot before writing
	// it into the new nodes.
	var write = read;
	var slot = new createNode(a.height - 1, 0);
	var from = 0;

	// If the current slot is still containing data, then there will be at
	// least one more write, so we do not break this loop yet.
	while (read - write - (slot.table.length > 0 ? 1 : 0) < toRemove)
	{
		// Find out the max possible items for copying.
		var source = get2(a.table, b.table, read);
		var to = Math.min(M - slot.table.length, source.table.length);

		// Copy and adjust size table.
		slot.table = slot.table.concat(source.table.slice(from, to));
		if (slot.height > 0)
		{
			var len = slot.lengths.length;
			for (var i = len; i < len + to - from; i++)
			{
				slot.lengths[i] = length(slot.table[i]);
				slot.lengths[i] += (i > 0 ? slot.lengths[i - 1] : 0);
			}
		}

		from += to;

		// Only proceed to next slots[i] if the current one was
		// fully copied.
		if (source.table.length <= to)
		{
			read++; from = 0;
		}

		// Only create a new slot if the current one is filled up.
		if (slot.table.length === M)
		{
			saveSlot(newA, newB, write, slot);
			slot = createNode(a.height - 1, 0);
			write++;
		}
	}

	// Cleanup after the loop. Copy the last slot into the new nodes.
	if (slot.table.length > 0)
	{
		saveSlot(newA, newB, write, slot);
		write++;
	}

	// Shift the untouched slots to the left
	while (read < a.table.length + b.table.length )
	{
		saveSlot(newA, newB, write, get2(a.table, b.table, read));
		read++;
		write++;
	}

	return [newA, newB];
}

// Navigation functions
function botRight(a)
{
	return a.table[a.table.length - 1];
}
function botLeft(a)
{
	return a.table[0];
}

// Copies a node for updating. Note that you should not use this if
// only updating only one of "table" or "lengths" for performance reasons.
function nodeCopy(a)
{
	var newA = {
		ctor: '_Array',
		height: a.height,
		table: a.table.slice()
	};
	if (a.height > 0)
	{
		newA.lengths = a.lengths.slice();
	}
	return newA;
}

// Returns how many items are in the tree.
function length(array)
{
	if (array.height === 0)
	{
		return array.table.length;
	}
	else
	{
		return array.lengths[array.lengths.length - 1];
	}
}

// Calculates in which slot of "table" the item probably is, then
// find the exact slot via forward searching in  "lengths". Returns the index.
function getSlot(i, a)
{
	var slot = i >> (5 * a.height);
	while (a.lengths[slot] <= i)
	{
		slot++;
	}
	return slot;
}

// Recursively creates a tree with a given height containing
// only the given item.
function create(item, h)
{
	if (h === 0)
	{
		return {
			ctor: '_Array',
			height: 0,
			table: [item]
		};
	}
	return {
		ctor: '_Array',
		height: h,
		table: [create(item, h - 1)],
		lengths: [1]
	};
}

// Recursively creates a tree that contains the given tree.
function parentise(tree, h)
{
	if (h === tree.height)
	{
		return tree;
	}

	return {
		ctor: '_Array',
		height: h,
		table: [parentise(tree, h - 1)],
		lengths: [length(tree)]
	};
}

// Emphasizes blood brotherhood beneath two trees.
function siblise(a, b)
{
	return {
		ctor: '_Array',
		height: a.height + 1,
		table: [a, b],
		lengths: [length(a), length(a) + length(b)]
	};
}

function toJSArray(a)
{
	var jsArray = new Array(length(a));
	toJSArray_(jsArray, 0, a);
	return jsArray;
}

function toJSArray_(jsArray, i, a)
{
	for (var t = 0; t < a.table.length; t++)
	{
		if (a.height === 0)
		{
			jsArray[i + t] = a.table[t];
		}
		else
		{
			var inc = t === 0 ? 0 : a.lengths[t - 1];
			toJSArray_(jsArray, i + inc, a.table[t]);
		}
	}
}

function fromJSArray(jsArray)
{
	if (jsArray.length === 0)
	{
		return empty;
	}
	var h = Math.floor(Math.log(jsArray.length) / Math.log(M));
	return fromJSArray_(jsArray, h, 0, jsArray.length);
}

function fromJSArray_(jsArray, h, from, to)
{
	if (h === 0)
	{
		return {
			ctor: '_Array',
			height: 0,
			table: jsArray.slice(from, to)
		};
	}

	var step = Math.pow(M, h);
	var table = new Array(Math.ceil((to - from) / step));
	var lengths = new Array(table.length);
	for (var i = 0; i < table.length; i++)
	{
		table[i] = fromJSArray_(jsArray, h - 1, from + (i * step), Math.min(from + ((i + 1) * step), to));
		lengths[i] = length(table[i]) + (i > 0 ? lengths[i - 1] : 0);
	}
	return {
		ctor: '_Array',
		height: h,
		table: table,
		lengths: lengths
	};
}

return {
	empty: empty,
	fromList: fromList,
	toList: toList,
	initialize: F2(initialize),
	append: F2(append),
	push: F2(push),
	slice: F3(slice),
	get: F2(get),
	set: F3(set),
	map: F2(map),
	indexedMap: F2(indexedMap),
	foldl: F3(foldl),
	foldr: F3(foldr),
	length: length,

	toJSArray: toJSArray,
	fromJSArray: fromJSArray
};

}();
var _elm_lang$core$Array$append = _elm_lang$core$Native_Array.append;
var _elm_lang$core$Array$length = _elm_lang$core$Native_Array.length;
var _elm_lang$core$Array$isEmpty = function (array) {
	return _elm_lang$core$Native_Utils.eq(
		_elm_lang$core$Array$length(array),
		0);
};
var _elm_lang$core$Array$slice = _elm_lang$core$Native_Array.slice;
var _elm_lang$core$Array$set = _elm_lang$core$Native_Array.set;
var _elm_lang$core$Array$get = F2(
	function (i, array) {
		return ((_elm_lang$core$Native_Utils.cmp(0, i) < 1) && (_elm_lang$core$Native_Utils.cmp(
			i,
			_elm_lang$core$Native_Array.length(array)) < 0)) ? _elm_lang$core$Maybe$Just(
			A2(_elm_lang$core$Native_Array.get, i, array)) : _elm_lang$core$Maybe$Nothing;
	});
var _elm_lang$core$Array$push = _elm_lang$core$Native_Array.push;
var _elm_lang$core$Array$empty = _elm_lang$core$Native_Array.empty;
var _elm_lang$core$Array$filter = F2(
	function (isOkay, arr) {
		var update = F2(
			function (x, xs) {
				return isOkay(x) ? A2(_elm_lang$core$Native_Array.push, x, xs) : xs;
			});
		return A3(_elm_lang$core$Native_Array.foldl, update, _elm_lang$core$Native_Array.empty, arr);
	});
var _elm_lang$core$Array$foldr = _elm_lang$core$Native_Array.foldr;
var _elm_lang$core$Array$foldl = _elm_lang$core$Native_Array.foldl;
var _elm_lang$core$Array$indexedMap = _elm_lang$core$Native_Array.indexedMap;
var _elm_lang$core$Array$map = _elm_lang$core$Native_Array.map;
var _elm_lang$core$Array$toIndexedList = function (array) {
	return A3(
		_elm_lang$core$List$map2,
		F2(
			function (v0, v1) {
				return {ctor: '_Tuple2', _0: v0, _1: v1};
			}),
		A2(
			_elm_lang$core$List$range,
			0,
			_elm_lang$core$Native_Array.length(array) - 1),
		_elm_lang$core$Native_Array.toList(array));
};
var _elm_lang$core$Array$toList = _elm_lang$core$Native_Array.toList;
var _elm_lang$core$Array$fromList = _elm_lang$core$Native_Array.fromList;
var _elm_lang$core$Array$initialize = _elm_lang$core$Native_Array.initialize;
var _elm_lang$core$Array$repeat = F2(
	function (n, e) {
		return A2(
			_elm_lang$core$Array$initialize,
			n,
			_elm_lang$core$Basics$always(e));
	});
var _elm_lang$core$Array$Array = {ctor: 'Array'};

var _elm_lang$core$Task$onError = _elm_lang$core$Native_Scheduler.onError;
var _elm_lang$core$Task$andThen = _elm_lang$core$Native_Scheduler.andThen;
var _elm_lang$core$Task$spawnCmd = F2(
	function (router, _p0) {
		var _p1 = _p0;
		return _elm_lang$core$Native_Scheduler.spawn(
			A2(
				_elm_lang$core$Task$andThen,
				_elm_lang$core$Platform$sendToApp(router),
				_p1._0));
	});
var _elm_lang$core$Task$fail = _elm_lang$core$Native_Scheduler.fail;
var _elm_lang$core$Task$mapError = F2(
	function (convert, task) {
		return A2(
			_elm_lang$core$Task$onError,
			function (_p2) {
				return _elm_lang$core$Task$fail(
					convert(_p2));
			},
			task);
	});
var _elm_lang$core$Task$succeed = _elm_lang$core$Native_Scheduler.succeed;
var _elm_lang$core$Task$map = F2(
	function (func, taskA) {
		return A2(
			_elm_lang$core$Task$andThen,
			function (a) {
				return _elm_lang$core$Task$succeed(
					func(a));
			},
			taskA);
	});
var _elm_lang$core$Task$map2 = F3(
	function (func, taskA, taskB) {
		return A2(
			_elm_lang$core$Task$andThen,
			function (a) {
				return A2(
					_elm_lang$core$Task$andThen,
					function (b) {
						return _elm_lang$core$Task$succeed(
							A2(func, a, b));
					},
					taskB);
			},
			taskA);
	});
var _elm_lang$core$Task$map3 = F4(
	function (func, taskA, taskB, taskC) {
		return A2(
			_elm_lang$core$Task$andThen,
			function (a) {
				return A2(
					_elm_lang$core$Task$andThen,
					function (b) {
						return A2(
							_elm_lang$core$Task$andThen,
							function (c) {
								return _elm_lang$core$Task$succeed(
									A3(func, a, b, c));
							},
							taskC);
					},
					taskB);
			},
			taskA);
	});
var _elm_lang$core$Task$map4 = F5(
	function (func, taskA, taskB, taskC, taskD) {
		return A2(
			_elm_lang$core$Task$andThen,
			function (a) {
				return A2(
					_elm_lang$core$Task$andThen,
					function (b) {
						return A2(
							_elm_lang$core$Task$andThen,
							function (c) {
								return A2(
									_elm_lang$core$Task$andThen,
									function (d) {
										return _elm_lang$core$Task$succeed(
											A4(func, a, b, c, d));
									},
									taskD);
							},
							taskC);
					},
					taskB);
			},
			taskA);
	});
var _elm_lang$core$Task$map5 = F6(
	function (func, taskA, taskB, taskC, taskD, taskE) {
		return A2(
			_elm_lang$core$Task$andThen,
			function (a) {
				return A2(
					_elm_lang$core$Task$andThen,
					function (b) {
						return A2(
							_elm_lang$core$Task$andThen,
							function (c) {
								return A2(
									_elm_lang$core$Task$andThen,
									function (d) {
										return A2(
											_elm_lang$core$Task$andThen,
											function (e) {
												return _elm_lang$core$Task$succeed(
													A5(func, a, b, c, d, e));
											},
											taskE);
									},
									taskD);
							},
							taskC);
					},
					taskB);
			},
			taskA);
	});
var _elm_lang$core$Task$sequence = function (tasks) {
	var _p3 = tasks;
	if (_p3.ctor === '[]') {
		return _elm_lang$core$Task$succeed(
			{ctor: '[]'});
	} else {
		return A3(
			_elm_lang$core$Task$map2,
			F2(
				function (x, y) {
					return {ctor: '::', _0: x, _1: y};
				}),
			_p3._0,
			_elm_lang$core$Task$sequence(_p3._1));
	}
};
var _elm_lang$core$Task$onEffects = F3(
	function (router, commands, state) {
		return A2(
			_elm_lang$core$Task$map,
			function (_p4) {
				return {ctor: '_Tuple0'};
			},
			_elm_lang$core$Task$sequence(
				A2(
					_elm_lang$core$List$map,
					_elm_lang$core$Task$spawnCmd(router),
					commands)));
	});
var _elm_lang$core$Task$init = _elm_lang$core$Task$succeed(
	{ctor: '_Tuple0'});
var _elm_lang$core$Task$onSelfMsg = F3(
	function (_p7, _p6, _p5) {
		return _elm_lang$core$Task$succeed(
			{ctor: '_Tuple0'});
	});
var _elm_lang$core$Task$command = _elm_lang$core$Native_Platform.leaf('Task');
var _elm_lang$core$Task$Perform = function (a) {
	return {ctor: 'Perform', _0: a};
};
var _elm_lang$core$Task$perform = F2(
	function (toMessage, task) {
		return _elm_lang$core$Task$command(
			_elm_lang$core$Task$Perform(
				A2(_elm_lang$core$Task$map, toMessage, task)));
	});
var _elm_lang$core$Task$attempt = F2(
	function (resultToMessage, task) {
		return _elm_lang$core$Task$command(
			_elm_lang$core$Task$Perform(
				A2(
					_elm_lang$core$Task$onError,
					function (_p8) {
						return _elm_lang$core$Task$succeed(
							resultToMessage(
								_elm_lang$core$Result$Err(_p8)));
					},
					A2(
						_elm_lang$core$Task$andThen,
						function (_p9) {
							return _elm_lang$core$Task$succeed(
								resultToMessage(
									_elm_lang$core$Result$Ok(_p9)));
						},
						task))));
	});
var _elm_lang$core$Task$cmdMap = F2(
	function (tagger, _p10) {
		var _p11 = _p10;
		return _elm_lang$core$Task$Perform(
			A2(_elm_lang$core$Task$map, tagger, _p11._0));
	});
_elm_lang$core$Native_Platform.effectManagers['Task'] = {pkg: 'elm-lang/core', init: _elm_lang$core$Task$init, onEffects: _elm_lang$core$Task$onEffects, onSelfMsg: _elm_lang$core$Task$onSelfMsg, tag: 'cmd', cmdMap: _elm_lang$core$Task$cmdMap};

//import Native.Scheduler //

var _elm_lang$core$Native_Time = function() {

var now = _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
{
	callback(_elm_lang$core$Native_Scheduler.succeed(Date.now()));
});

function setInterval_(interval, task)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		var id = setInterval(function() {
			_elm_lang$core$Native_Scheduler.rawSpawn(task);
		}, interval);

		return function() { clearInterval(id); };
	});
}

return {
	now: now,
	setInterval_: F2(setInterval_)
};

}();
var _elm_lang$core$Time$setInterval = _elm_lang$core$Native_Time.setInterval_;
var _elm_lang$core$Time$spawnHelp = F3(
	function (router, intervals, processes) {
		var _p0 = intervals;
		if (_p0.ctor === '[]') {
			return _elm_lang$core$Task$succeed(processes);
		} else {
			var _p1 = _p0._0;
			var spawnRest = function (id) {
				return A3(
					_elm_lang$core$Time$spawnHelp,
					router,
					_p0._1,
					A3(_elm_lang$core$Dict$insert, _p1, id, processes));
			};
			var spawnTimer = _elm_lang$core$Native_Scheduler.spawn(
				A2(
					_elm_lang$core$Time$setInterval,
					_p1,
					A2(_elm_lang$core$Platform$sendToSelf, router, _p1)));
			return A2(_elm_lang$core$Task$andThen, spawnRest, spawnTimer);
		}
	});
var _elm_lang$core$Time$addMySub = F2(
	function (_p2, state) {
		var _p3 = _p2;
		var _p6 = _p3._1;
		var _p5 = _p3._0;
		var _p4 = A2(_elm_lang$core$Dict$get, _p5, state);
		if (_p4.ctor === 'Nothing') {
			return A3(
				_elm_lang$core$Dict$insert,
				_p5,
				{
					ctor: '::',
					_0: _p6,
					_1: {ctor: '[]'}
				},
				state);
		} else {
			return A3(
				_elm_lang$core$Dict$insert,
				_p5,
				{ctor: '::', _0: _p6, _1: _p4._0},
				state);
		}
	});
var _elm_lang$core$Time$inMilliseconds = function (t) {
	return t;
};
var _elm_lang$core$Time$millisecond = 1;
var _elm_lang$core$Time$second = 1000 * _elm_lang$core$Time$millisecond;
var _elm_lang$core$Time$minute = 60 * _elm_lang$core$Time$second;
var _elm_lang$core$Time$hour = 60 * _elm_lang$core$Time$minute;
var _elm_lang$core$Time$inHours = function (t) {
	return t / _elm_lang$core$Time$hour;
};
var _elm_lang$core$Time$inMinutes = function (t) {
	return t / _elm_lang$core$Time$minute;
};
var _elm_lang$core$Time$inSeconds = function (t) {
	return t / _elm_lang$core$Time$second;
};
var _elm_lang$core$Time$now = _elm_lang$core$Native_Time.now;
var _elm_lang$core$Time$onSelfMsg = F3(
	function (router, interval, state) {
		var _p7 = A2(_elm_lang$core$Dict$get, interval, state.taggers);
		if (_p7.ctor === 'Nothing') {
			return _elm_lang$core$Task$succeed(state);
		} else {
			var tellTaggers = function (time) {
				return _elm_lang$core$Task$sequence(
					A2(
						_elm_lang$core$List$map,
						function (tagger) {
							return A2(
								_elm_lang$core$Platform$sendToApp,
								router,
								tagger(time));
						},
						_p7._0));
			};
			return A2(
				_elm_lang$core$Task$andThen,
				function (_p8) {
					return _elm_lang$core$Task$succeed(state);
				},
				A2(_elm_lang$core$Task$andThen, tellTaggers, _elm_lang$core$Time$now));
		}
	});
var _elm_lang$core$Time$subscription = _elm_lang$core$Native_Platform.leaf('Time');
var _elm_lang$core$Time$State = F2(
	function (a, b) {
		return {taggers: a, processes: b};
	});
var _elm_lang$core$Time$init = _elm_lang$core$Task$succeed(
	A2(_elm_lang$core$Time$State, _elm_lang$core$Dict$empty, _elm_lang$core$Dict$empty));
var _elm_lang$core$Time$onEffects = F3(
	function (router, subs, _p9) {
		var _p10 = _p9;
		var rightStep = F3(
			function (_p12, id, _p11) {
				var _p13 = _p11;
				return {
					ctor: '_Tuple3',
					_0: _p13._0,
					_1: _p13._1,
					_2: A2(
						_elm_lang$core$Task$andThen,
						function (_p14) {
							return _p13._2;
						},
						_elm_lang$core$Native_Scheduler.kill(id))
				};
			});
		var bothStep = F4(
			function (interval, taggers, id, _p15) {
				var _p16 = _p15;
				return {
					ctor: '_Tuple3',
					_0: _p16._0,
					_1: A3(_elm_lang$core$Dict$insert, interval, id, _p16._1),
					_2: _p16._2
				};
			});
		var leftStep = F3(
			function (interval, taggers, _p17) {
				var _p18 = _p17;
				return {
					ctor: '_Tuple3',
					_0: {ctor: '::', _0: interval, _1: _p18._0},
					_1: _p18._1,
					_2: _p18._2
				};
			});
		var newTaggers = A3(_elm_lang$core$List$foldl, _elm_lang$core$Time$addMySub, _elm_lang$core$Dict$empty, subs);
		var _p19 = A6(
			_elm_lang$core$Dict$merge,
			leftStep,
			bothStep,
			rightStep,
			newTaggers,
			_p10.processes,
			{
				ctor: '_Tuple3',
				_0: {ctor: '[]'},
				_1: _elm_lang$core$Dict$empty,
				_2: _elm_lang$core$Task$succeed(
					{ctor: '_Tuple0'})
			});
		var spawnList = _p19._0;
		var existingDict = _p19._1;
		var killTask = _p19._2;
		return A2(
			_elm_lang$core$Task$andThen,
			function (newProcesses) {
				return _elm_lang$core$Task$succeed(
					A2(_elm_lang$core$Time$State, newTaggers, newProcesses));
			},
			A2(
				_elm_lang$core$Task$andThen,
				function (_p20) {
					return A3(_elm_lang$core$Time$spawnHelp, router, spawnList, existingDict);
				},
				killTask));
	});
var _elm_lang$core$Time$Every = F2(
	function (a, b) {
		return {ctor: 'Every', _0: a, _1: b};
	});
var _elm_lang$core$Time$every = F2(
	function (interval, tagger) {
		return _elm_lang$core$Time$subscription(
			A2(_elm_lang$core$Time$Every, interval, tagger));
	});
var _elm_lang$core$Time$subMap = F2(
	function (f, _p21) {
		var _p22 = _p21;
		return A2(
			_elm_lang$core$Time$Every,
			_p22._0,
			function (_p23) {
				return f(
					_p22._1(_p23));
			});
	});
_elm_lang$core$Native_Platform.effectManagers['Time'] = {pkg: 'elm-lang/core', init: _elm_lang$core$Time$init, onEffects: _elm_lang$core$Time$onEffects, onSelfMsg: _elm_lang$core$Time$onSelfMsg, tag: 'sub', subMap: _elm_lang$core$Time$subMap};

//import Maybe, Native.Array, Native.List, Native.Utils, Result //

var _elm_lang$core$Native_Json = function() {


// CORE DECODERS

function succeed(msg)
{
	return {
		ctor: '<decoder>',
		tag: 'succeed',
		msg: msg
	};
}

function fail(msg)
{
	return {
		ctor: '<decoder>',
		tag: 'fail',
		msg: msg
	};
}

function decodePrimitive(tag)
{
	return {
		ctor: '<decoder>',
		tag: tag
	};
}

function decodeContainer(tag, decoder)
{
	return {
		ctor: '<decoder>',
		tag: tag,
		decoder: decoder
	};
}

function decodeNull(value)
{
	return {
		ctor: '<decoder>',
		tag: 'null',
		value: value
	};
}

function decodeField(field, decoder)
{
	return {
		ctor: '<decoder>',
		tag: 'field',
		field: field,
		decoder: decoder
	};
}

function decodeIndex(index, decoder)
{
	return {
		ctor: '<decoder>',
		tag: 'index',
		index: index,
		decoder: decoder
	};
}

function decodeKeyValuePairs(decoder)
{
	return {
		ctor: '<decoder>',
		tag: 'key-value',
		decoder: decoder
	};
}

function mapMany(f, decoders)
{
	return {
		ctor: '<decoder>',
		tag: 'map-many',
		func: f,
		decoders: decoders
	};
}

function andThen(callback, decoder)
{
	return {
		ctor: '<decoder>',
		tag: 'andThen',
		decoder: decoder,
		callback: callback
	};
}

function oneOf(decoders)
{
	return {
		ctor: '<decoder>',
		tag: 'oneOf',
		decoders: decoders
	};
}


// DECODING OBJECTS

function map1(f, d1)
{
	return mapMany(f, [d1]);
}

function map2(f, d1, d2)
{
	return mapMany(f, [d1, d2]);
}

function map3(f, d1, d2, d3)
{
	return mapMany(f, [d1, d2, d3]);
}

function map4(f, d1, d2, d3, d4)
{
	return mapMany(f, [d1, d2, d3, d4]);
}

function map5(f, d1, d2, d3, d4, d5)
{
	return mapMany(f, [d1, d2, d3, d4, d5]);
}

function map6(f, d1, d2, d3, d4, d5, d6)
{
	return mapMany(f, [d1, d2, d3, d4, d5, d6]);
}

function map7(f, d1, d2, d3, d4, d5, d6, d7)
{
	return mapMany(f, [d1, d2, d3, d4, d5, d6, d7]);
}

function map8(f, d1, d2, d3, d4, d5, d6, d7, d8)
{
	return mapMany(f, [d1, d2, d3, d4, d5, d6, d7, d8]);
}


// DECODE HELPERS

function ok(value)
{
	return { tag: 'ok', value: value };
}

function badPrimitive(type, value)
{
	return { tag: 'primitive', type: type, value: value };
}

function badIndex(index, nestedProblems)
{
	return { tag: 'index', index: index, rest: nestedProblems };
}

function badField(field, nestedProblems)
{
	return { tag: 'field', field: field, rest: nestedProblems };
}

function badIndex(index, nestedProblems)
{
	return { tag: 'index', index: index, rest: nestedProblems };
}

function badOneOf(problems)
{
	return { tag: 'oneOf', problems: problems };
}

function bad(msg)
{
	return { tag: 'fail', msg: msg };
}

function badToString(problem)
{
	var context = '_';
	while (problem)
	{
		switch (problem.tag)
		{
			case 'primitive':
				return 'Expecting ' + problem.type
					+ (context === '_' ? '' : ' at ' + context)
					+ ' but instead got: ' + jsToString(problem.value);

			case 'index':
				context += '[' + problem.index + ']';
				problem = problem.rest;
				break;

			case 'field':
				context += '.' + problem.field;
				problem = problem.rest;
				break;

			case 'oneOf':
				var problems = problem.problems;
				for (var i = 0; i < problems.length; i++)
				{
					problems[i] = badToString(problems[i]);
				}
				return 'I ran into the following problems'
					+ (context === '_' ? '' : ' at ' + context)
					+ ':\n\n' + problems.join('\n');

			case 'fail':
				return 'I ran into a `fail` decoder'
					+ (context === '_' ? '' : ' at ' + context)
					+ ': ' + problem.msg;
		}
	}
}

function jsToString(value)
{
	return value === undefined
		? 'undefined'
		: JSON.stringify(value);
}


// DECODE

function runOnString(decoder, string)
{
	var json;
	try
	{
		json = JSON.parse(string);
	}
	catch (e)
	{
		return _elm_lang$core$Result$Err('Given an invalid JSON: ' + e.message);
	}
	return run(decoder, json);
}

function run(decoder, value)
{
	var result = runHelp(decoder, value);
	return (result.tag === 'ok')
		? _elm_lang$core$Result$Ok(result.value)
		: _elm_lang$core$Result$Err(badToString(result));
}

function runHelp(decoder, value)
{
	switch (decoder.tag)
	{
		case 'bool':
			return (typeof value === 'boolean')
				? ok(value)
				: badPrimitive('a Bool', value);

		case 'int':
			if (typeof value !== 'number') {
				return badPrimitive('an Int', value);
			}

			if (-2147483647 < value && value < 2147483647 && (value | 0) === value) {
				return ok(value);
			}

			if (isFinite(value) && !(value % 1)) {
				return ok(value);
			}

			return badPrimitive('an Int', value);

		case 'float':
			return (typeof value === 'number')
				? ok(value)
				: badPrimitive('a Float', value);

		case 'string':
			return (typeof value === 'string')
				? ok(value)
				: (value instanceof String)
					? ok(value + '')
					: badPrimitive('a String', value);

		case 'null':
			return (value === null)
				? ok(decoder.value)
				: badPrimitive('null', value);

		case 'value':
			return ok(value);

		case 'list':
			if (!(value instanceof Array))
			{
				return badPrimitive('a List', value);
			}

			var list = _elm_lang$core$Native_List.Nil;
			for (var i = value.length; i--; )
			{
				var result = runHelp(decoder.decoder, value[i]);
				if (result.tag !== 'ok')
				{
					return badIndex(i, result)
				}
				list = _elm_lang$core$Native_List.Cons(result.value, list);
			}
			return ok(list);

		case 'array':
			if (!(value instanceof Array))
			{
				return badPrimitive('an Array', value);
			}

			var len = value.length;
			var array = new Array(len);
			for (var i = len; i--; )
			{
				var result = runHelp(decoder.decoder, value[i]);
				if (result.tag !== 'ok')
				{
					return badIndex(i, result);
				}
				array[i] = result.value;
			}
			return ok(_elm_lang$core$Native_Array.fromJSArray(array));

		case 'maybe':
			var result = runHelp(decoder.decoder, value);
			return (result.tag === 'ok')
				? ok(_elm_lang$core$Maybe$Just(result.value))
				: ok(_elm_lang$core$Maybe$Nothing);

		case 'field':
			var field = decoder.field;
			if (typeof value !== 'object' || value === null || !(field in value))
			{
				return badPrimitive('an object with a field named `' + field + '`', value);
			}

			var result = runHelp(decoder.decoder, value[field]);
			return (result.tag === 'ok') ? result : badField(field, result);

		case 'index':
			var index = decoder.index;
			if (!(value instanceof Array))
			{
				return badPrimitive('an array', value);
			}
			if (index >= value.length)
			{
				return badPrimitive('a longer array. Need index ' + index + ' but there are only ' + value.length + ' entries', value);
			}

			var result = runHelp(decoder.decoder, value[index]);
			return (result.tag === 'ok') ? result : badIndex(index, result);

		case 'key-value':
			if (typeof value !== 'object' || value === null || value instanceof Array)
			{
				return badPrimitive('an object', value);
			}

			var keyValuePairs = _elm_lang$core$Native_List.Nil;
			for (var key in value)
			{
				var result = runHelp(decoder.decoder, value[key]);
				if (result.tag !== 'ok')
				{
					return badField(key, result);
				}
				var pair = _elm_lang$core$Native_Utils.Tuple2(key, result.value);
				keyValuePairs = _elm_lang$core$Native_List.Cons(pair, keyValuePairs);
			}
			return ok(keyValuePairs);

		case 'map-many':
			var answer = decoder.func;
			var decoders = decoder.decoders;
			for (var i = 0; i < decoders.length; i++)
			{
				var result = runHelp(decoders[i], value);
				if (result.tag !== 'ok')
				{
					return result;
				}
				answer = answer(result.value);
			}
			return ok(answer);

		case 'andThen':
			var result = runHelp(decoder.decoder, value);
			return (result.tag !== 'ok')
				? result
				: runHelp(decoder.callback(result.value), value);

		case 'oneOf':
			var errors = [];
			var temp = decoder.decoders;
			while (temp.ctor !== '[]')
			{
				var result = runHelp(temp._0, value);

				if (result.tag === 'ok')
				{
					return result;
				}

				errors.push(result);

				temp = temp._1;
			}
			return badOneOf(errors);

		case 'fail':
			return bad(decoder.msg);

		case 'succeed':
			return ok(decoder.msg);
	}
}


// EQUALITY

function equality(a, b)
{
	if (a === b)
	{
		return true;
	}

	if (a.tag !== b.tag)
	{
		return false;
	}

	switch (a.tag)
	{
		case 'succeed':
		case 'fail':
			return a.msg === b.msg;

		case 'bool':
		case 'int':
		case 'float':
		case 'string':
		case 'value':
			return true;

		case 'null':
			return a.value === b.value;

		case 'list':
		case 'array':
		case 'maybe':
		case 'key-value':
			return equality(a.decoder, b.decoder);

		case 'field':
			return a.field === b.field && equality(a.decoder, b.decoder);

		case 'index':
			return a.index === b.index && equality(a.decoder, b.decoder);

		case 'map-many':
			if (a.func !== b.func)
			{
				return false;
			}
			return listEquality(a.decoders, b.decoders);

		case 'andThen':
			return a.callback === b.callback && equality(a.decoder, b.decoder);

		case 'oneOf':
			return listEquality(a.decoders, b.decoders);
	}
}

function listEquality(aDecoders, bDecoders)
{
	var len = aDecoders.length;
	if (len !== bDecoders.length)
	{
		return false;
	}
	for (var i = 0; i < len; i++)
	{
		if (!equality(aDecoders[i], bDecoders[i]))
		{
			return false;
		}
	}
	return true;
}


// ENCODE

function encode(indentLevel, value)
{
	return JSON.stringify(value, null, indentLevel);
}

function identity(value)
{
	return value;
}

function encodeObject(keyValuePairs)
{
	var obj = {};
	while (keyValuePairs.ctor !== '[]')
	{
		var pair = keyValuePairs._0;
		obj[pair._0] = pair._1;
		keyValuePairs = keyValuePairs._1;
	}
	return obj;
}

return {
	encode: F2(encode),
	runOnString: F2(runOnString),
	run: F2(run),

	decodeNull: decodeNull,
	decodePrimitive: decodePrimitive,
	decodeContainer: F2(decodeContainer),

	decodeField: F2(decodeField),
	decodeIndex: F2(decodeIndex),

	map1: F2(map1),
	map2: F3(map2),
	map3: F4(map3),
	map4: F5(map4),
	map5: F6(map5),
	map6: F7(map6),
	map7: F8(map7),
	map8: F9(map8),
	decodeKeyValuePairs: decodeKeyValuePairs,

	andThen: F2(andThen),
	fail: fail,
	succeed: succeed,
	oneOf: oneOf,

	identity: identity,
	encodeNull: null,
	encodeArray: _elm_lang$core$Native_Array.toJSArray,
	encodeList: _elm_lang$core$Native_List.toArray,
	encodeObject: encodeObject,

	equality: equality
};

}();

var _elm_lang$core$Json_Encode$list = _elm_lang$core$Native_Json.encodeList;
var _elm_lang$core$Json_Encode$array = _elm_lang$core$Native_Json.encodeArray;
var _elm_lang$core$Json_Encode$object = _elm_lang$core$Native_Json.encodeObject;
var _elm_lang$core$Json_Encode$null = _elm_lang$core$Native_Json.encodeNull;
var _elm_lang$core$Json_Encode$bool = _elm_lang$core$Native_Json.identity;
var _elm_lang$core$Json_Encode$float = _elm_lang$core$Native_Json.identity;
var _elm_lang$core$Json_Encode$int = _elm_lang$core$Native_Json.identity;
var _elm_lang$core$Json_Encode$string = _elm_lang$core$Native_Json.identity;
var _elm_lang$core$Json_Encode$encode = _elm_lang$core$Native_Json.encode;
var _elm_lang$core$Json_Encode$Value = {ctor: 'Value'};

var _elm_lang$core$Json_Decode$null = _elm_lang$core$Native_Json.decodeNull;
var _elm_lang$core$Json_Decode$value = _elm_lang$core$Native_Json.decodePrimitive('value');
var _elm_lang$core$Json_Decode$andThen = _elm_lang$core$Native_Json.andThen;
var _elm_lang$core$Json_Decode$fail = _elm_lang$core$Native_Json.fail;
var _elm_lang$core$Json_Decode$succeed = _elm_lang$core$Native_Json.succeed;
var _elm_lang$core$Json_Decode$lazy = function (thunk) {
	return A2(
		_elm_lang$core$Json_Decode$andThen,
		thunk,
		_elm_lang$core$Json_Decode$succeed(
			{ctor: '_Tuple0'}));
};
var _elm_lang$core$Json_Decode$decodeValue = _elm_lang$core$Native_Json.run;
var _elm_lang$core$Json_Decode$decodeString = _elm_lang$core$Native_Json.runOnString;
var _elm_lang$core$Json_Decode$map8 = _elm_lang$core$Native_Json.map8;
var _elm_lang$core$Json_Decode$map7 = _elm_lang$core$Native_Json.map7;
var _elm_lang$core$Json_Decode$map6 = _elm_lang$core$Native_Json.map6;
var _elm_lang$core$Json_Decode$map5 = _elm_lang$core$Native_Json.map5;
var _elm_lang$core$Json_Decode$map4 = _elm_lang$core$Native_Json.map4;
var _elm_lang$core$Json_Decode$map3 = _elm_lang$core$Native_Json.map3;
var _elm_lang$core$Json_Decode$map2 = _elm_lang$core$Native_Json.map2;
var _elm_lang$core$Json_Decode$map = _elm_lang$core$Native_Json.map1;
var _elm_lang$core$Json_Decode$oneOf = _elm_lang$core$Native_Json.oneOf;
var _elm_lang$core$Json_Decode$maybe = function (decoder) {
	return A2(_elm_lang$core$Native_Json.decodeContainer, 'maybe', decoder);
};
var _elm_lang$core$Json_Decode$index = _elm_lang$core$Native_Json.decodeIndex;
var _elm_lang$core$Json_Decode$field = _elm_lang$core$Native_Json.decodeField;
var _elm_lang$core$Json_Decode$at = F2(
	function (fields, decoder) {
		return A3(_elm_lang$core$List$foldr, _elm_lang$core$Json_Decode$field, decoder, fields);
	});
var _elm_lang$core$Json_Decode$keyValuePairs = _elm_lang$core$Native_Json.decodeKeyValuePairs;
var _elm_lang$core$Json_Decode$dict = function (decoder) {
	return A2(
		_elm_lang$core$Json_Decode$map,
		_elm_lang$core$Dict$fromList,
		_elm_lang$core$Json_Decode$keyValuePairs(decoder));
};
var _elm_lang$core$Json_Decode$array = function (decoder) {
	return A2(_elm_lang$core$Native_Json.decodeContainer, 'array', decoder);
};
var _elm_lang$core$Json_Decode$list = function (decoder) {
	return A2(_elm_lang$core$Native_Json.decodeContainer, 'list', decoder);
};
var _elm_lang$core$Json_Decode$nullable = function (decoder) {
	return _elm_lang$core$Json_Decode$oneOf(
		{
			ctor: '::',
			_0: _elm_lang$core$Json_Decode$null(_elm_lang$core$Maybe$Nothing),
			_1: {
				ctor: '::',
				_0: A2(_elm_lang$core$Json_Decode$map, _elm_lang$core$Maybe$Just, decoder),
				_1: {ctor: '[]'}
			}
		});
};
var _elm_lang$core$Json_Decode$float = _elm_lang$core$Native_Json.decodePrimitive('float');
var _elm_lang$core$Json_Decode$int = _elm_lang$core$Native_Json.decodePrimitive('int');
var _elm_lang$core$Json_Decode$bool = _elm_lang$core$Native_Json.decodePrimitive('bool');
var _elm_lang$core$Json_Decode$string = _elm_lang$core$Native_Json.decodePrimitive('string');
var _elm_lang$core$Json_Decode$Decoder = {ctor: 'Decoder'};

var _elm_lang$core$Random$onSelfMsg = F3(
	function (_p1, _p0, seed) {
		return _elm_lang$core$Task$succeed(seed);
	});
var _elm_lang$core$Random$magicNum8 = 2147483562;
var _elm_lang$core$Random$range = function (_p2) {
	return {ctor: '_Tuple2', _0: 0, _1: _elm_lang$core$Random$magicNum8};
};
var _elm_lang$core$Random$magicNum7 = 2147483399;
var _elm_lang$core$Random$magicNum6 = 2147483563;
var _elm_lang$core$Random$magicNum5 = 3791;
var _elm_lang$core$Random$magicNum4 = 40692;
var _elm_lang$core$Random$magicNum3 = 52774;
var _elm_lang$core$Random$magicNum2 = 12211;
var _elm_lang$core$Random$magicNum1 = 53668;
var _elm_lang$core$Random$magicNum0 = 40014;
var _elm_lang$core$Random$step = F2(
	function (_p3, seed) {
		var _p4 = _p3;
		return _p4._0(seed);
	});
var _elm_lang$core$Random$onEffects = F3(
	function (router, commands, seed) {
		var _p5 = commands;
		if (_p5.ctor === '[]') {
			return _elm_lang$core$Task$succeed(seed);
		} else {
			var _p6 = A2(_elm_lang$core$Random$step, _p5._0._0, seed);
			var value = _p6._0;
			var newSeed = _p6._1;
			return A2(
				_elm_lang$core$Task$andThen,
				function (_p7) {
					return A3(_elm_lang$core$Random$onEffects, router, _p5._1, newSeed);
				},
				A2(_elm_lang$core$Platform$sendToApp, router, value));
		}
	});
var _elm_lang$core$Random$listHelp = F4(
	function (list, n, generate, seed) {
		listHelp:
		while (true) {
			if (_elm_lang$core$Native_Utils.cmp(n, 1) < 0) {
				return {
					ctor: '_Tuple2',
					_0: _elm_lang$core$List$reverse(list),
					_1: seed
				};
			} else {
				var _p8 = generate(seed);
				var value = _p8._0;
				var newSeed = _p8._1;
				var _v2 = {ctor: '::', _0: value, _1: list},
					_v3 = n - 1,
					_v4 = generate,
					_v5 = newSeed;
				list = _v2;
				n = _v3;
				generate = _v4;
				seed = _v5;
				continue listHelp;
			}
		}
	});
var _elm_lang$core$Random$minInt = -2147483648;
var _elm_lang$core$Random$maxInt = 2147483647;
var _elm_lang$core$Random$iLogBase = F2(
	function (b, i) {
		return (_elm_lang$core$Native_Utils.cmp(i, b) < 0) ? 1 : (1 + A2(_elm_lang$core$Random$iLogBase, b, (i / b) | 0));
	});
var _elm_lang$core$Random$command = _elm_lang$core$Native_Platform.leaf('Random');
var _elm_lang$core$Random$Generator = function (a) {
	return {ctor: 'Generator', _0: a};
};
var _elm_lang$core$Random$list = F2(
	function (n, _p9) {
		var _p10 = _p9;
		return _elm_lang$core$Random$Generator(
			function (seed) {
				return A4(
					_elm_lang$core$Random$listHelp,
					{ctor: '[]'},
					n,
					_p10._0,
					seed);
			});
	});
var _elm_lang$core$Random$map = F2(
	function (func, _p11) {
		var _p12 = _p11;
		return _elm_lang$core$Random$Generator(
			function (seed0) {
				var _p13 = _p12._0(seed0);
				var a = _p13._0;
				var seed1 = _p13._1;
				return {
					ctor: '_Tuple2',
					_0: func(a),
					_1: seed1
				};
			});
	});
var _elm_lang$core$Random$map2 = F3(
	function (func, _p15, _p14) {
		var _p16 = _p15;
		var _p17 = _p14;
		return _elm_lang$core$Random$Generator(
			function (seed0) {
				var _p18 = _p16._0(seed0);
				var a = _p18._0;
				var seed1 = _p18._1;
				var _p19 = _p17._0(seed1);
				var b = _p19._0;
				var seed2 = _p19._1;
				return {
					ctor: '_Tuple2',
					_0: A2(func, a, b),
					_1: seed2
				};
			});
	});
var _elm_lang$core$Random$pair = F2(
	function (genA, genB) {
		return A3(
			_elm_lang$core$Random$map2,
			F2(
				function (v0, v1) {
					return {ctor: '_Tuple2', _0: v0, _1: v1};
				}),
			genA,
			genB);
	});
var _elm_lang$core$Random$map3 = F4(
	function (func, _p22, _p21, _p20) {
		var _p23 = _p22;
		var _p24 = _p21;
		var _p25 = _p20;
		return _elm_lang$core$Random$Generator(
			function (seed0) {
				var _p26 = _p23._0(seed0);
				var a = _p26._0;
				var seed1 = _p26._1;
				var _p27 = _p24._0(seed1);
				var b = _p27._0;
				var seed2 = _p27._1;
				var _p28 = _p25._0(seed2);
				var c = _p28._0;
				var seed3 = _p28._1;
				return {
					ctor: '_Tuple2',
					_0: A3(func, a, b, c),
					_1: seed3
				};
			});
	});
var _elm_lang$core$Random$map4 = F5(
	function (func, _p32, _p31, _p30, _p29) {
		var _p33 = _p32;
		var _p34 = _p31;
		var _p35 = _p30;
		var _p36 = _p29;
		return _elm_lang$core$Random$Generator(
			function (seed0) {
				var _p37 = _p33._0(seed0);
				var a = _p37._0;
				var seed1 = _p37._1;
				var _p38 = _p34._0(seed1);
				var b = _p38._0;
				var seed2 = _p38._1;
				var _p39 = _p35._0(seed2);
				var c = _p39._0;
				var seed3 = _p39._1;
				var _p40 = _p36._0(seed3);
				var d = _p40._0;
				var seed4 = _p40._1;
				return {
					ctor: '_Tuple2',
					_0: A4(func, a, b, c, d),
					_1: seed4
				};
			});
	});
var _elm_lang$core$Random$map5 = F6(
	function (func, _p45, _p44, _p43, _p42, _p41) {
		var _p46 = _p45;
		var _p47 = _p44;
		var _p48 = _p43;
		var _p49 = _p42;
		var _p50 = _p41;
		return _elm_lang$core$Random$Generator(
			function (seed0) {
				var _p51 = _p46._0(seed0);
				var a = _p51._0;
				var seed1 = _p51._1;
				var _p52 = _p47._0(seed1);
				var b = _p52._0;
				var seed2 = _p52._1;
				var _p53 = _p48._0(seed2);
				var c = _p53._0;
				var seed3 = _p53._1;
				var _p54 = _p49._0(seed3);
				var d = _p54._0;
				var seed4 = _p54._1;
				var _p55 = _p50._0(seed4);
				var e = _p55._0;
				var seed5 = _p55._1;
				return {
					ctor: '_Tuple2',
					_0: A5(func, a, b, c, d, e),
					_1: seed5
				};
			});
	});
var _elm_lang$core$Random$andThen = F2(
	function (callback, _p56) {
		var _p57 = _p56;
		return _elm_lang$core$Random$Generator(
			function (seed) {
				var _p58 = _p57._0(seed);
				var result = _p58._0;
				var newSeed = _p58._1;
				var _p59 = callback(result);
				var genB = _p59._0;
				return genB(newSeed);
			});
	});
var _elm_lang$core$Random$State = F2(
	function (a, b) {
		return {ctor: 'State', _0: a, _1: b};
	});
var _elm_lang$core$Random$initState = function (seed) {
	var s = A2(_elm_lang$core$Basics$max, seed, 0 - seed);
	var q = (s / (_elm_lang$core$Random$magicNum6 - 1)) | 0;
	var s2 = A2(_elm_lang$core$Basics_ops['%'], q, _elm_lang$core$Random$magicNum7 - 1);
	var s1 = A2(_elm_lang$core$Basics_ops['%'], s, _elm_lang$core$Random$magicNum6 - 1);
	return A2(_elm_lang$core$Random$State, s1 + 1, s2 + 1);
};
var _elm_lang$core$Random$next = function (_p60) {
	var _p61 = _p60;
	var _p63 = _p61._1;
	var _p62 = _p61._0;
	var k2 = (_p63 / _elm_lang$core$Random$magicNum3) | 0;
	var rawState2 = (_elm_lang$core$Random$magicNum4 * (_p63 - (k2 * _elm_lang$core$Random$magicNum3))) - (k2 * _elm_lang$core$Random$magicNum5);
	var newState2 = (_elm_lang$core$Native_Utils.cmp(rawState2, 0) < 0) ? (rawState2 + _elm_lang$core$Random$magicNum7) : rawState2;
	var k1 = (_p62 / _elm_lang$core$Random$magicNum1) | 0;
	var rawState1 = (_elm_lang$core$Random$magicNum0 * (_p62 - (k1 * _elm_lang$core$Random$magicNum1))) - (k1 * _elm_lang$core$Random$magicNum2);
	var newState1 = (_elm_lang$core$Native_Utils.cmp(rawState1, 0) < 0) ? (rawState1 + _elm_lang$core$Random$magicNum6) : rawState1;
	var z = newState1 - newState2;
	var newZ = (_elm_lang$core$Native_Utils.cmp(z, 1) < 0) ? (z + _elm_lang$core$Random$magicNum8) : z;
	return {
		ctor: '_Tuple2',
		_0: newZ,
		_1: A2(_elm_lang$core$Random$State, newState1, newState2)
	};
};
var _elm_lang$core$Random$split = function (_p64) {
	var _p65 = _p64;
	var _p68 = _p65._1;
	var _p67 = _p65._0;
	var _p66 = _elm_lang$core$Tuple$second(
		_elm_lang$core$Random$next(_p65));
	var t1 = _p66._0;
	var t2 = _p66._1;
	var new_s2 = _elm_lang$core$Native_Utils.eq(_p68, 1) ? (_elm_lang$core$Random$magicNum7 - 1) : (_p68 - 1);
	var new_s1 = _elm_lang$core$Native_Utils.eq(_p67, _elm_lang$core$Random$magicNum6 - 1) ? 1 : (_p67 + 1);
	return {
		ctor: '_Tuple2',
		_0: A2(_elm_lang$core$Random$State, new_s1, t2),
		_1: A2(_elm_lang$core$Random$State, t1, new_s2)
	};
};
var _elm_lang$core$Random$Seed = function (a) {
	return {ctor: 'Seed', _0: a};
};
var _elm_lang$core$Random$int = F2(
	function (a, b) {
		return _elm_lang$core$Random$Generator(
			function (_p69) {
				var _p70 = _p69;
				var _p75 = _p70._0;
				var base = 2147483561;
				var f = F3(
					function (n, acc, state) {
						f:
						while (true) {
							var _p71 = n;
							if (_p71 === 0) {
								return {ctor: '_Tuple2', _0: acc, _1: state};
							} else {
								var _p72 = _p75.next(state);
								var x = _p72._0;
								var nextState = _p72._1;
								var _v27 = n - 1,
									_v28 = x + (acc * base),
									_v29 = nextState;
								n = _v27;
								acc = _v28;
								state = _v29;
								continue f;
							}
						}
					});
				var _p73 = (_elm_lang$core$Native_Utils.cmp(a, b) < 0) ? {ctor: '_Tuple2', _0: a, _1: b} : {ctor: '_Tuple2', _0: b, _1: a};
				var lo = _p73._0;
				var hi = _p73._1;
				var k = (hi - lo) + 1;
				var n = A2(_elm_lang$core$Random$iLogBase, base, k);
				var _p74 = A3(f, n, 1, _p75.state);
				var v = _p74._0;
				var nextState = _p74._1;
				return {
					ctor: '_Tuple2',
					_0: lo + A2(_elm_lang$core$Basics_ops['%'], v, k),
					_1: _elm_lang$core$Random$Seed(
						_elm_lang$core$Native_Utils.update(
							_p75,
							{state: nextState}))
				};
			});
	});
var _elm_lang$core$Random$bool = A2(
	_elm_lang$core$Random$map,
	F2(
		function (x, y) {
			return _elm_lang$core$Native_Utils.eq(x, y);
		})(1),
	A2(_elm_lang$core$Random$int, 0, 1));
var _elm_lang$core$Random$float = F2(
	function (a, b) {
		return _elm_lang$core$Random$Generator(
			function (seed) {
				var _p76 = A2(
					_elm_lang$core$Random$step,
					A2(_elm_lang$core$Random$int, _elm_lang$core$Random$minInt, _elm_lang$core$Random$maxInt),
					seed);
				var number = _p76._0;
				var newSeed = _p76._1;
				var negativeOneToOne = _elm_lang$core$Basics$toFloat(number) / _elm_lang$core$Basics$toFloat(_elm_lang$core$Random$maxInt - _elm_lang$core$Random$minInt);
				var _p77 = (_elm_lang$core$Native_Utils.cmp(a, b) < 0) ? {ctor: '_Tuple2', _0: a, _1: b} : {ctor: '_Tuple2', _0: b, _1: a};
				var lo = _p77._0;
				var hi = _p77._1;
				var scaled = ((lo + hi) / 2) + ((hi - lo) * negativeOneToOne);
				return {ctor: '_Tuple2', _0: scaled, _1: newSeed};
			});
	});
var _elm_lang$core$Random$initialSeed = function (n) {
	return _elm_lang$core$Random$Seed(
		{
			state: _elm_lang$core$Random$initState(n),
			next: _elm_lang$core$Random$next,
			split: _elm_lang$core$Random$split,
			range: _elm_lang$core$Random$range
		});
};
var _elm_lang$core$Random$init = A2(
	_elm_lang$core$Task$andThen,
	function (t) {
		return _elm_lang$core$Task$succeed(
			_elm_lang$core$Random$initialSeed(
				_elm_lang$core$Basics$round(t)));
	},
	_elm_lang$core$Time$now);
var _elm_lang$core$Random$Generate = function (a) {
	return {ctor: 'Generate', _0: a};
};
var _elm_lang$core$Random$generate = F2(
	function (tagger, generator) {
		return _elm_lang$core$Random$command(
			_elm_lang$core$Random$Generate(
				A2(_elm_lang$core$Random$map, tagger, generator)));
	});
var _elm_lang$core$Random$cmdMap = F2(
	function (func, _p78) {
		var _p79 = _p78;
		return _elm_lang$core$Random$Generate(
			A2(_elm_lang$core$Random$map, func, _p79._0));
	});
_elm_lang$core$Native_Platform.effectManagers['Random'] = {pkg: 'elm-lang/core', init: _elm_lang$core$Random$init, onEffects: _elm_lang$core$Random$onEffects, onSelfMsg: _elm_lang$core$Random$onSelfMsg, tag: 'cmd', cmdMap: _elm_lang$core$Random$cmdMap};

var _elm_lang$virtual_dom$VirtualDom_Debug$wrap;
var _elm_lang$virtual_dom$VirtualDom_Debug$wrapWithFlags;

var _elm_lang$virtual_dom$Native_VirtualDom = function() {

var STYLE_KEY = 'STYLE';
var EVENT_KEY = 'EVENT';
var ATTR_KEY = 'ATTR';
var ATTR_NS_KEY = 'ATTR_NS';

var localDoc = typeof document !== 'undefined' ? document : {};


////////////  VIRTUAL DOM NODES  ////////////


function text(string)
{
	return {
		type: 'text',
		text: string
	};
}


function node(tag)
{
	return F2(function(factList, kidList) {
		return nodeHelp(tag, factList, kidList);
	});
}


function nodeHelp(tag, factList, kidList)
{
	var organized = organizeFacts(factList);
	var namespace = organized.namespace;
	var facts = organized.facts;

	var children = [];
	var descendantsCount = 0;
	while (kidList.ctor !== '[]')
	{
		var kid = kidList._0;
		descendantsCount += (kid.descendantsCount || 0);
		children.push(kid);
		kidList = kidList._1;
	}
	descendantsCount += children.length;

	return {
		type: 'node',
		tag: tag,
		facts: facts,
		children: children,
		namespace: namespace,
		descendantsCount: descendantsCount
	};
}


function keyedNode(tag, factList, kidList)
{
	var organized = organizeFacts(factList);
	var namespace = organized.namespace;
	var facts = organized.facts;

	var children = [];
	var descendantsCount = 0;
	while (kidList.ctor !== '[]')
	{
		var kid = kidList._0;
		descendantsCount += (kid._1.descendantsCount || 0);
		children.push(kid);
		kidList = kidList._1;
	}
	descendantsCount += children.length;

	return {
		type: 'keyed-node',
		tag: tag,
		facts: facts,
		children: children,
		namespace: namespace,
		descendantsCount: descendantsCount
	};
}


function custom(factList, model, impl)
{
	var facts = organizeFacts(factList).facts;

	return {
		type: 'custom',
		facts: facts,
		model: model,
		impl: impl
	};
}


function map(tagger, node)
{
	return {
		type: 'tagger',
		tagger: tagger,
		node: node,
		descendantsCount: 1 + (node.descendantsCount || 0)
	};
}


function thunk(func, args, thunk)
{
	return {
		type: 'thunk',
		func: func,
		args: args,
		thunk: thunk,
		node: undefined
	};
}

function lazy(fn, a)
{
	return thunk(fn, [a], function() {
		return fn(a);
	});
}

function lazy2(fn, a, b)
{
	return thunk(fn, [a,b], function() {
		return A2(fn, a, b);
	});
}

function lazy3(fn, a, b, c)
{
	return thunk(fn, [a,b,c], function() {
		return A3(fn, a, b, c);
	});
}



// FACTS


function organizeFacts(factList)
{
	var namespace, facts = {};

	while (factList.ctor !== '[]')
	{
		var entry = factList._0;
		var key = entry.key;

		if (key === ATTR_KEY || key === ATTR_NS_KEY || key === EVENT_KEY)
		{
			var subFacts = facts[key] || {};
			subFacts[entry.realKey] = entry.value;
			facts[key] = subFacts;
		}
		else if (key === STYLE_KEY)
		{
			var styles = facts[key] || {};
			var styleList = entry.value;
			while (styleList.ctor !== '[]')
			{
				var style = styleList._0;
				styles[style._0] = style._1;
				styleList = styleList._1;
			}
			facts[key] = styles;
		}
		else if (key === 'namespace')
		{
			namespace = entry.value;
		}
		else if (key === 'className')
		{
			var classes = facts[key];
			facts[key] = typeof classes === 'undefined'
				? entry.value
				: classes + ' ' + entry.value;
		}
 		else
		{
			facts[key] = entry.value;
		}
		factList = factList._1;
	}

	return {
		facts: facts,
		namespace: namespace
	};
}



////////////  PROPERTIES AND ATTRIBUTES  ////////////


function style(value)
{
	return {
		key: STYLE_KEY,
		value: value
	};
}


function property(key, value)
{
	return {
		key: key,
		value: value
	};
}


function attribute(key, value)
{
	return {
		key: ATTR_KEY,
		realKey: key,
		value: value
	};
}


function attributeNS(namespace, key, value)
{
	return {
		key: ATTR_NS_KEY,
		realKey: key,
		value: {
			value: value,
			namespace: namespace
		}
	};
}


function on(name, options, decoder)
{
	return {
		key: EVENT_KEY,
		realKey: name,
		value: {
			options: options,
			decoder: decoder
		}
	};
}


function equalEvents(a, b)
{
	if (a.options !== b.options)
	{
		if (a.options.stopPropagation !== b.options.stopPropagation || a.options.preventDefault !== b.options.preventDefault)
		{
			return false;
		}
	}
	return _elm_lang$core$Native_Json.equality(a.decoder, b.decoder);
}


function mapProperty(func, property)
{
	if (property.key !== EVENT_KEY)
	{
		return property;
	}
	return on(
		property.realKey,
		property.value.options,
		A2(_elm_lang$core$Json_Decode$map, func, property.value.decoder)
	);
}


////////////  RENDER  ////////////


function render(vNode, eventNode)
{
	switch (vNode.type)
	{
		case 'thunk':
			if (!vNode.node)
			{
				vNode.node = vNode.thunk();
			}
			return render(vNode.node, eventNode);

		case 'tagger':
			var subNode = vNode.node;
			var tagger = vNode.tagger;

			while (subNode.type === 'tagger')
			{
				typeof tagger !== 'object'
					? tagger = [tagger, subNode.tagger]
					: tagger.push(subNode.tagger);

				subNode = subNode.node;
			}

			var subEventRoot = { tagger: tagger, parent: eventNode };
			var domNode = render(subNode, subEventRoot);
			domNode.elm_event_node_ref = subEventRoot;
			return domNode;

		case 'text':
			return localDoc.createTextNode(vNode.text);

		case 'node':
			var domNode = vNode.namespace
				? localDoc.createElementNS(vNode.namespace, vNode.tag)
				: localDoc.createElement(vNode.tag);

			applyFacts(domNode, eventNode, vNode.facts);

			var children = vNode.children;

			for (var i = 0; i < children.length; i++)
			{
				domNode.appendChild(render(children[i], eventNode));
			}

			return domNode;

		case 'keyed-node':
			var domNode = vNode.namespace
				? localDoc.createElementNS(vNode.namespace, vNode.tag)
				: localDoc.createElement(vNode.tag);

			applyFacts(domNode, eventNode, vNode.facts);

			var children = vNode.children;

			for (var i = 0; i < children.length; i++)
			{
				domNode.appendChild(render(children[i]._1, eventNode));
			}

			return domNode;

		case 'custom':
			var domNode = vNode.impl.render(vNode.model);
			applyFacts(domNode, eventNode, vNode.facts);
			return domNode;
	}
}



////////////  APPLY FACTS  ////////////


function applyFacts(domNode, eventNode, facts)
{
	for (var key in facts)
	{
		var value = facts[key];

		switch (key)
		{
			case STYLE_KEY:
				applyStyles(domNode, value);
				break;

			case EVENT_KEY:
				applyEvents(domNode, eventNode, value);
				break;

			case ATTR_KEY:
				applyAttrs(domNode, value);
				break;

			case ATTR_NS_KEY:
				applyAttrsNS(domNode, value);
				break;

			case 'value':
				if (domNode[key] !== value)
				{
					domNode[key] = value;
				}
				break;

			default:
				domNode[key] = value;
				break;
		}
	}
}

function applyStyles(domNode, styles)
{
	var domNodeStyle = domNode.style;

	for (var key in styles)
	{
		domNodeStyle[key] = styles[key];
	}
}

function applyEvents(domNode, eventNode, events)
{
	var allHandlers = domNode.elm_handlers || {};

	for (var key in events)
	{
		var handler = allHandlers[key];
		var value = events[key];

		if (typeof value === 'undefined')
		{
			domNode.removeEventListener(key, handler);
			allHandlers[key] = undefined;
		}
		else if (typeof handler === 'undefined')
		{
			var handler = makeEventHandler(eventNode, value);
			domNode.addEventListener(key, handler);
			allHandlers[key] = handler;
		}
		else
		{
			handler.info = value;
		}
	}

	domNode.elm_handlers = allHandlers;
}

function makeEventHandler(eventNode, info)
{
	function eventHandler(event)
	{
		var info = eventHandler.info;

		var value = A2(_elm_lang$core$Native_Json.run, info.decoder, event);

		if (value.ctor === 'Ok')
		{
			var options = info.options;
			if (options.stopPropagation)
			{
				event.stopPropagation();
			}
			if (options.preventDefault)
			{
				event.preventDefault();
			}

			var message = value._0;

			var currentEventNode = eventNode;
			while (currentEventNode)
			{
				var tagger = currentEventNode.tagger;
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
				currentEventNode = currentEventNode.parent;
			}
		}
	};

	eventHandler.info = info;

	return eventHandler;
}

function applyAttrs(domNode, attrs)
{
	for (var key in attrs)
	{
		var value = attrs[key];
		if (typeof value === 'undefined')
		{
			domNode.removeAttribute(key);
		}
		else
		{
			domNode.setAttribute(key, value);
		}
	}
}

function applyAttrsNS(domNode, nsAttrs)
{
	for (var key in nsAttrs)
	{
		var pair = nsAttrs[key];
		var namespace = pair.namespace;
		var value = pair.value;

		if (typeof value === 'undefined')
		{
			domNode.removeAttributeNS(namespace, key);
		}
		else
		{
			domNode.setAttributeNS(namespace, key, value);
		}
	}
}



////////////  DIFF  ////////////


function diff(a, b)
{
	var patches = [];
	diffHelp(a, b, patches, 0);
	return patches;
}


function makePatch(type, index, data)
{
	return {
		index: index,
		type: type,
		data: data,
		domNode: undefined,
		eventNode: undefined
	};
}


function diffHelp(a, b, patches, index)
{
	if (a === b)
	{
		return;
	}

	var aType = a.type;
	var bType = b.type;

	// Bail if you run into different types of nodes. Implies that the
	// structure has changed significantly and it's not worth a diff.
	if (aType !== bType)
	{
		patches.push(makePatch('p-redraw', index, b));
		return;
	}

	// Now we know that both nodes are the same type.
	switch (bType)
	{
		case 'thunk':
			var aArgs = a.args;
			var bArgs = b.args;
			var i = aArgs.length;
			var same = a.func === b.func && i === bArgs.length;
			while (same && i--)
			{
				same = aArgs[i] === bArgs[i];
			}
			if (same)
			{
				b.node = a.node;
				return;
			}
			b.node = b.thunk();
			var subPatches = [];
			diffHelp(a.node, b.node, subPatches, 0);
			if (subPatches.length > 0)
			{
				patches.push(makePatch('p-thunk', index, subPatches));
			}
			return;

		case 'tagger':
			// gather nested taggers
			var aTaggers = a.tagger;
			var bTaggers = b.tagger;
			var nesting = false;

			var aSubNode = a.node;
			while (aSubNode.type === 'tagger')
			{
				nesting = true;

				typeof aTaggers !== 'object'
					? aTaggers = [aTaggers, aSubNode.tagger]
					: aTaggers.push(aSubNode.tagger);

				aSubNode = aSubNode.node;
			}

			var bSubNode = b.node;
			while (bSubNode.type === 'tagger')
			{
				nesting = true;

				typeof bTaggers !== 'object'
					? bTaggers = [bTaggers, bSubNode.tagger]
					: bTaggers.push(bSubNode.tagger);

				bSubNode = bSubNode.node;
			}

			// Just bail if different numbers of taggers. This implies the
			// structure of the virtual DOM has changed.
			if (nesting && aTaggers.length !== bTaggers.length)
			{
				patches.push(makePatch('p-redraw', index, b));
				return;
			}

			// check if taggers are "the same"
			if (nesting ? !pairwiseRefEqual(aTaggers, bTaggers) : aTaggers !== bTaggers)
			{
				patches.push(makePatch('p-tagger', index, bTaggers));
			}

			// diff everything below the taggers
			diffHelp(aSubNode, bSubNode, patches, index + 1);
			return;

		case 'text':
			if (a.text !== b.text)
			{
				patches.push(makePatch('p-text', index, b.text));
				return;
			}

			return;

		case 'node':
			// Bail if obvious indicators have changed. Implies more serious
			// structural changes such that it's not worth it to diff.
			if (a.tag !== b.tag || a.namespace !== b.namespace)
			{
				patches.push(makePatch('p-redraw', index, b));
				return;
			}

			var factsDiff = diffFacts(a.facts, b.facts);

			if (typeof factsDiff !== 'undefined')
			{
				patches.push(makePatch('p-facts', index, factsDiff));
			}

			diffChildren(a, b, patches, index);
			return;

		case 'keyed-node':
			// Bail if obvious indicators have changed. Implies more serious
			// structural changes such that it's not worth it to diff.
			if (a.tag !== b.tag || a.namespace !== b.namespace)
			{
				patches.push(makePatch('p-redraw', index, b));
				return;
			}

			var factsDiff = diffFacts(a.facts, b.facts);

			if (typeof factsDiff !== 'undefined')
			{
				patches.push(makePatch('p-facts', index, factsDiff));
			}

			diffKeyedChildren(a, b, patches, index);
			return;

		case 'custom':
			if (a.impl !== b.impl)
			{
				patches.push(makePatch('p-redraw', index, b));
				return;
			}

			var factsDiff = diffFacts(a.facts, b.facts);
			if (typeof factsDiff !== 'undefined')
			{
				patches.push(makePatch('p-facts', index, factsDiff));
			}

			var patch = b.impl.diff(a,b);
			if (patch)
			{
				patches.push(makePatch('p-custom', index, patch));
				return;
			}

			return;
	}
}


// assumes the incoming arrays are the same length
function pairwiseRefEqual(as, bs)
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


// TODO Instead of creating a new diff object, it's possible to just test if
// there *is* a diff. During the actual patch, do the diff again and make the
// modifications directly. This way, there's no new allocations. Worth it?
function diffFacts(a, b, category)
{
	var diff;

	// look for changes and removals
	for (var aKey in a)
	{
		if (aKey === STYLE_KEY || aKey === EVENT_KEY || aKey === ATTR_KEY || aKey === ATTR_NS_KEY)
		{
			var subDiff = diffFacts(a[aKey], b[aKey] || {}, aKey);
			if (subDiff)
			{
				diff = diff || {};
				diff[aKey] = subDiff;
			}
			continue;
		}

		// remove if not in the new facts
		if (!(aKey in b))
		{
			diff = diff || {};
			diff[aKey] =
				(typeof category === 'undefined')
					? (typeof a[aKey] === 'string' ? '' : null)
					:
				(category === STYLE_KEY)
					? ''
					:
				(category === EVENT_KEY || category === ATTR_KEY)
					? undefined
					:
				{ namespace: a[aKey].namespace, value: undefined };

			continue;
		}

		var aValue = a[aKey];
		var bValue = b[aKey];

		// reference equal, so don't worry about it
		if (aValue === bValue && aKey !== 'value'
			|| category === EVENT_KEY && equalEvents(aValue, bValue))
		{
			continue;
		}

		diff = diff || {};
		diff[aKey] = bValue;
	}

	// add new stuff
	for (var bKey in b)
	{
		if (!(bKey in a))
		{
			diff = diff || {};
			diff[bKey] = b[bKey];
		}
	}

	return diff;
}


function diffChildren(aParent, bParent, patches, rootIndex)
{
	var aChildren = aParent.children;
	var bChildren = bParent.children;

	var aLen = aChildren.length;
	var bLen = bChildren.length;

	// FIGURE OUT IF THERE ARE INSERTS OR REMOVALS

	if (aLen > bLen)
	{
		patches.push(makePatch('p-remove-last', rootIndex, aLen - bLen));
	}
	else if (aLen < bLen)
	{
		patches.push(makePatch('p-append', rootIndex, bChildren.slice(aLen)));
	}

	// PAIRWISE DIFF EVERYTHING ELSE

	var index = rootIndex;
	var minLen = aLen < bLen ? aLen : bLen;
	for (var i = 0; i < minLen; i++)
	{
		index++;
		var aChild = aChildren[i];
		diffHelp(aChild, bChildren[i], patches, index);
		index += aChild.descendantsCount || 0;
	}
}



////////////  KEYED DIFF  ////////////


function diffKeyedChildren(aParent, bParent, patches, rootIndex)
{
	var localPatches = [];

	var changes = {}; // Dict String Entry
	var inserts = []; // Array { index : Int, entry : Entry }
	// type Entry = { tag : String, vnode : VNode, index : Int, data : _ }

	var aChildren = aParent.children;
	var bChildren = bParent.children;
	var aLen = aChildren.length;
	var bLen = bChildren.length;
	var aIndex = 0;
	var bIndex = 0;

	var index = rootIndex;

	while (aIndex < aLen && bIndex < bLen)
	{
		var a = aChildren[aIndex];
		var b = bChildren[bIndex];

		var aKey = a._0;
		var bKey = b._0;
		var aNode = a._1;
		var bNode = b._1;

		// check if keys match

		if (aKey === bKey)
		{
			index++;
			diffHelp(aNode, bNode, localPatches, index);
			index += aNode.descendantsCount || 0;

			aIndex++;
			bIndex++;
			continue;
		}

		// look ahead 1 to detect insertions and removals.

		var aLookAhead = aIndex + 1 < aLen;
		var bLookAhead = bIndex + 1 < bLen;

		if (aLookAhead)
		{
			var aNext = aChildren[aIndex + 1];
			var aNextKey = aNext._0;
			var aNextNode = aNext._1;
			var oldMatch = bKey === aNextKey;
		}

		if (bLookAhead)
		{
			var bNext = bChildren[bIndex + 1];
			var bNextKey = bNext._0;
			var bNextNode = bNext._1;
			var newMatch = aKey === bNextKey;
		}


		// swap a and b
		if (aLookAhead && bLookAhead && newMatch && oldMatch)
		{
			index++;
			diffHelp(aNode, bNextNode, localPatches, index);
			insertNode(changes, localPatches, aKey, bNode, bIndex, inserts);
			index += aNode.descendantsCount || 0;

			index++;
			removeNode(changes, localPatches, aKey, aNextNode, index);
			index += aNextNode.descendantsCount || 0;

			aIndex += 2;
			bIndex += 2;
			continue;
		}

		// insert b
		if (bLookAhead && newMatch)
		{
			index++;
			insertNode(changes, localPatches, bKey, bNode, bIndex, inserts);
			diffHelp(aNode, bNextNode, localPatches, index);
			index += aNode.descendantsCount || 0;

			aIndex += 1;
			bIndex += 2;
			continue;
		}

		// remove a
		if (aLookAhead && oldMatch)
		{
			index++;
			removeNode(changes, localPatches, aKey, aNode, index);
			index += aNode.descendantsCount || 0;

			index++;
			diffHelp(aNextNode, bNode, localPatches, index);
			index += aNextNode.descendantsCount || 0;

			aIndex += 2;
			bIndex += 1;
			continue;
		}

		// remove a, insert b
		if (aLookAhead && bLookAhead && aNextKey === bNextKey)
		{
			index++;
			removeNode(changes, localPatches, aKey, aNode, index);
			insertNode(changes, localPatches, bKey, bNode, bIndex, inserts);
			index += aNode.descendantsCount || 0;

			index++;
			diffHelp(aNextNode, bNextNode, localPatches, index);
			index += aNextNode.descendantsCount || 0;

			aIndex += 2;
			bIndex += 2;
			continue;
		}

		break;
	}

	// eat up any remaining nodes with removeNode and insertNode

	while (aIndex < aLen)
	{
		index++;
		var a = aChildren[aIndex];
		var aNode = a._1;
		removeNode(changes, localPatches, a._0, aNode, index);
		index += aNode.descendantsCount || 0;
		aIndex++;
	}

	var endInserts;
	while (bIndex < bLen)
	{
		endInserts = endInserts || [];
		var b = bChildren[bIndex];
		insertNode(changes, localPatches, b._0, b._1, undefined, endInserts);
		bIndex++;
	}

	if (localPatches.length > 0 || inserts.length > 0 || typeof endInserts !== 'undefined')
	{
		patches.push(makePatch('p-reorder', rootIndex, {
			patches: localPatches,
			inserts: inserts,
			endInserts: endInserts
		}));
	}
}



////////////  CHANGES FROM KEYED DIFF  ////////////


var POSTFIX = '_elmW6BL';


function insertNode(changes, localPatches, key, vnode, bIndex, inserts)
{
	var entry = changes[key];

	// never seen this key before
	if (typeof entry === 'undefined')
	{
		entry = {
			tag: 'insert',
			vnode: vnode,
			index: bIndex,
			data: undefined
		};

		inserts.push({ index: bIndex, entry: entry });
		changes[key] = entry;

		return;
	}

	// this key was removed earlier, a match!
	if (entry.tag === 'remove')
	{
		inserts.push({ index: bIndex, entry: entry });

		entry.tag = 'move';
		var subPatches = [];
		diffHelp(entry.vnode, vnode, subPatches, entry.index);
		entry.index = bIndex;
		entry.data.data = {
			patches: subPatches,
			entry: entry
		};

		return;
	}

	// this key has already been inserted or moved, a duplicate!
	insertNode(changes, localPatches, key + POSTFIX, vnode, bIndex, inserts);
}


function removeNode(changes, localPatches, key, vnode, index)
{
	var entry = changes[key];

	// never seen this key before
	if (typeof entry === 'undefined')
	{
		var patch = makePatch('p-remove', index, undefined);
		localPatches.push(patch);

		changes[key] = {
			tag: 'remove',
			vnode: vnode,
			index: index,
			data: patch
		};

		return;
	}

	// this key was inserted earlier, a match!
	if (entry.tag === 'insert')
	{
		entry.tag = 'move';
		var subPatches = [];
		diffHelp(vnode, entry.vnode, subPatches, index);

		var patch = makePatch('p-remove', index, {
			patches: subPatches,
			entry: entry
		});
		localPatches.push(patch);

		return;
	}

	// this key has already been removed or moved, a duplicate!
	removeNode(changes, localPatches, key + POSTFIX, vnode, index);
}



////////////  ADD DOM NODES  ////////////
//
// Each DOM node has an "index" assigned in order of traversal. It is important
// to minimize our crawl over the actual DOM, so these indexes (along with the
// descendantsCount of virtual nodes) let us skip touching entire subtrees of
// the DOM if we know there are no patches there.


function addDomNodes(domNode, vNode, patches, eventNode)
{
	addDomNodesHelp(domNode, vNode, patches, 0, 0, vNode.descendantsCount, eventNode);
}


// assumes `patches` is non-empty and indexes increase monotonically.
function addDomNodesHelp(domNode, vNode, patches, i, low, high, eventNode)
{
	var patch = patches[i];
	var index = patch.index;

	while (index === low)
	{
		var patchType = patch.type;

		if (patchType === 'p-thunk')
		{
			addDomNodes(domNode, vNode.node, patch.data, eventNode);
		}
		else if (patchType === 'p-reorder')
		{
			patch.domNode = domNode;
			patch.eventNode = eventNode;

			var subPatches = patch.data.patches;
			if (subPatches.length > 0)
			{
				addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
			}
		}
		else if (patchType === 'p-remove')
		{
			patch.domNode = domNode;
			patch.eventNode = eventNode;

			var data = patch.data;
			if (typeof data !== 'undefined')
			{
				data.entry.data = domNode;
				var subPatches = data.patches;
				if (subPatches.length > 0)
				{
					addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
				}
			}
		}
		else
		{
			patch.domNode = domNode;
			patch.eventNode = eventNode;
		}

		i++;

		if (!(patch = patches[i]) || (index = patch.index) > high)
		{
			return i;
		}
	}

	switch (vNode.type)
	{
		case 'tagger':
			var subNode = vNode.node;

			while (subNode.type === "tagger")
			{
				subNode = subNode.node;
			}

			return addDomNodesHelp(domNode, subNode, patches, i, low + 1, high, domNode.elm_event_node_ref);

		case 'node':
			var vChildren = vNode.children;
			var childNodes = domNode.childNodes;
			for (var j = 0; j < vChildren.length; j++)
			{
				low++;
				var vChild = vChildren[j];
				var nextLow = low + (vChild.descendantsCount || 0);
				if (low <= index && index <= nextLow)
				{
					i = addDomNodesHelp(childNodes[j], vChild, patches, i, low, nextLow, eventNode);
					if (!(patch = patches[i]) || (index = patch.index) > high)
					{
						return i;
					}
				}
				low = nextLow;
			}
			return i;

		case 'keyed-node':
			var vChildren = vNode.children;
			var childNodes = domNode.childNodes;
			for (var j = 0; j < vChildren.length; j++)
			{
				low++;
				var vChild = vChildren[j]._1;
				var nextLow = low + (vChild.descendantsCount || 0);
				if (low <= index && index <= nextLow)
				{
					i = addDomNodesHelp(childNodes[j], vChild, patches, i, low, nextLow, eventNode);
					if (!(patch = patches[i]) || (index = patch.index) > high)
					{
						return i;
					}
				}
				low = nextLow;
			}
			return i;

		case 'text':
		case 'thunk':
			throw new Error('should never traverse `text` or `thunk` nodes like this');
	}
}



////////////  APPLY PATCHES  ////////////


function applyPatches(rootDomNode, oldVirtualNode, patches, eventNode)
{
	if (patches.length === 0)
	{
		return rootDomNode;
	}

	addDomNodes(rootDomNode, oldVirtualNode, patches, eventNode);
	return applyPatchesHelp(rootDomNode, patches);
}

function applyPatchesHelp(rootDomNode, patches)
{
	for (var i = 0; i < patches.length; i++)
	{
		var patch = patches[i];
		var localDomNode = patch.domNode
		var newNode = applyPatch(localDomNode, patch);
		if (localDomNode === rootDomNode)
		{
			rootDomNode = newNode;
		}
	}
	return rootDomNode;
}

function applyPatch(domNode, patch)
{
	switch (patch.type)
	{
		case 'p-redraw':
			return applyPatchRedraw(domNode, patch.data, patch.eventNode);

		case 'p-facts':
			applyFacts(domNode, patch.eventNode, patch.data);
			return domNode;

		case 'p-text':
			domNode.replaceData(0, domNode.length, patch.data);
			return domNode;

		case 'p-thunk':
			return applyPatchesHelp(domNode, patch.data);

		case 'p-tagger':
			if (typeof domNode.elm_event_node_ref !== 'undefined')
			{
				domNode.elm_event_node_ref.tagger = patch.data;
			}
			else
			{
				domNode.elm_event_node_ref = { tagger: patch.data, parent: patch.eventNode };
			}
			return domNode;

		case 'p-remove-last':
			var i = patch.data;
			while (i--)
			{
				domNode.removeChild(domNode.lastChild);
			}
			return domNode;

		case 'p-append':
			var newNodes = patch.data;
			for (var i = 0; i < newNodes.length; i++)
			{
				domNode.appendChild(render(newNodes[i], patch.eventNode));
			}
			return domNode;

		case 'p-remove':
			var data = patch.data;
			if (typeof data === 'undefined')
			{
				domNode.parentNode.removeChild(domNode);
				return domNode;
			}
			var entry = data.entry;
			if (typeof entry.index !== 'undefined')
			{
				domNode.parentNode.removeChild(domNode);
			}
			entry.data = applyPatchesHelp(domNode, data.patches);
			return domNode;

		case 'p-reorder':
			return applyPatchReorder(domNode, patch);

		case 'p-custom':
			var impl = patch.data;
			return impl.applyPatch(domNode, impl.data);

		default:
			throw new Error('Ran into an unknown patch!');
	}
}


function applyPatchRedraw(domNode, vNode, eventNode)
{
	var parentNode = domNode.parentNode;
	var newNode = render(vNode, eventNode);

	if (typeof newNode.elm_event_node_ref === 'undefined')
	{
		newNode.elm_event_node_ref = domNode.elm_event_node_ref;
	}

	if (parentNode && newNode !== domNode)
	{
		parentNode.replaceChild(newNode, domNode);
	}
	return newNode;
}


function applyPatchReorder(domNode, patch)
{
	var data = patch.data;

	// remove end inserts
	var frag = applyPatchReorderEndInsertsHelp(data.endInserts, patch);

	// removals
	domNode = applyPatchesHelp(domNode, data.patches);

	// inserts
	var inserts = data.inserts;
	for (var i = 0; i < inserts.length; i++)
	{
		var insert = inserts[i];
		var entry = insert.entry;
		var node = entry.tag === 'move'
			? entry.data
			: render(entry.vnode, patch.eventNode);
		domNode.insertBefore(node, domNode.childNodes[insert.index]);
	}

	// add end inserts
	if (typeof frag !== 'undefined')
	{
		domNode.appendChild(frag);
	}

	return domNode;
}


function applyPatchReorderEndInsertsHelp(endInserts, patch)
{
	if (typeof endInserts === 'undefined')
	{
		return;
	}

	var frag = localDoc.createDocumentFragment();
	for (var i = 0; i < endInserts.length; i++)
	{
		var insert = endInserts[i];
		var entry = insert.entry;
		frag.appendChild(entry.tag === 'move'
			? entry.data
			: render(entry.vnode, patch.eventNode)
		);
	}
	return frag;
}


// PROGRAMS

var program = makeProgram(checkNoFlags);
var programWithFlags = makeProgram(checkYesFlags);

function makeProgram(flagChecker)
{
	return F2(function(debugWrap, impl)
	{
		return function(flagDecoder)
		{
			return function(object, moduleName, debugMetadata)
			{
				var checker = flagChecker(flagDecoder, moduleName);
				if (typeof debugMetadata === 'undefined')
				{
					normalSetup(impl, object, moduleName, checker);
				}
				else
				{
					debugSetup(A2(debugWrap, debugMetadata, impl), object, moduleName, checker);
				}
			};
		};
	});
}

function staticProgram(vNode)
{
	var nothing = _elm_lang$core$Native_Utils.Tuple2(
		_elm_lang$core$Native_Utils.Tuple0,
		_elm_lang$core$Platform_Cmd$none
	);
	return A2(program, _elm_lang$virtual_dom$VirtualDom_Debug$wrap, {
		init: nothing,
		view: function() { return vNode; },
		update: F2(function() { return nothing; }),
		subscriptions: function() { return _elm_lang$core$Platform_Sub$none; }
	})();
}


// FLAG CHECKERS

function checkNoFlags(flagDecoder, moduleName)
{
	return function(init, flags, domNode)
	{
		if (typeof flags === 'undefined')
		{
			return init;
		}

		var errorMessage =
			'The `' + moduleName + '` module does not need flags.\n'
			+ 'Initialize it with no arguments and you should be all set!';

		crash(errorMessage, domNode);
	};
}

function checkYesFlags(flagDecoder, moduleName)
{
	return function(init, flags, domNode)
	{
		if (typeof flagDecoder === 'undefined')
		{
			var errorMessage =
				'Are you trying to sneak a Never value into Elm? Trickster!\n'
				+ 'It looks like ' + moduleName + '.main is defined with `programWithFlags` but has type `Program Never`.\n'
				+ 'Use `program` instead if you do not want flags.'

			crash(errorMessage, domNode);
		}

		var result = A2(_elm_lang$core$Native_Json.run, flagDecoder, flags);
		if (result.ctor === 'Ok')
		{
			return init(result._0);
		}

		var errorMessage =
			'Trying to initialize the `' + moduleName + '` module with an unexpected flag.\n'
			+ 'I tried to convert it to an Elm value, but ran into this problem:\n\n'
			+ result._0;

		crash(errorMessage, domNode);
	};
}

function crash(errorMessage, domNode)
{
	if (domNode)
	{
		domNode.innerHTML =
			'<div style="padding-left:1em;">'
			+ '<h2 style="font-weight:normal;"><b>Oops!</b> Something went wrong when starting your Elm program.</h2>'
			+ '<pre style="padding-left:1em;">' + errorMessage + '</pre>'
			+ '</div>';
	}

	throw new Error(errorMessage);
}


//  NORMAL SETUP

function normalSetup(impl, object, moduleName, flagChecker)
{
	object['embed'] = function embed(node, flags)
	{
		while (node.lastChild)
		{
			node.removeChild(node.lastChild);
		}

		return _elm_lang$core$Native_Platform.initialize(
			flagChecker(impl.init, flags, node),
			impl.update,
			impl.subscriptions,
			normalRenderer(node, impl.view)
		);
	};

	object['fullscreen'] = function fullscreen(flags)
	{
		return _elm_lang$core$Native_Platform.initialize(
			flagChecker(impl.init, flags, document.body),
			impl.update,
			impl.subscriptions,
			normalRenderer(document.body, impl.view)
		);
	};
}

function normalRenderer(parentNode, view)
{
	return function(tagger, initialModel)
	{
		var eventNode = { tagger: tagger, parent: undefined };
		var initialVirtualNode = view(initialModel);
		var domNode = render(initialVirtualNode, eventNode);
		parentNode.appendChild(domNode);
		return makeStepper(domNode, view, initialVirtualNode, eventNode);
	};
}


// STEPPER

var rAF =
	typeof requestAnimationFrame !== 'undefined'
		? requestAnimationFrame
		: function(callback) { setTimeout(callback, 1000 / 60); };

function makeStepper(domNode, view, initialVirtualNode, eventNode)
{
	var state = 'NO_REQUEST';
	var currNode = initialVirtualNode;
	var nextModel;

	function updateIfNeeded()
	{
		switch (state)
		{
			case 'NO_REQUEST':
				throw new Error(
					'Unexpected draw callback.\n' +
					'Please report this to <https://github.com/elm-lang/virtual-dom/issues>.'
				);

			case 'PENDING_REQUEST':
				rAF(updateIfNeeded);
				state = 'EXTRA_REQUEST';

				var nextNode = view(nextModel);
				var patches = diff(currNode, nextNode);
				domNode = applyPatches(domNode, currNode, patches, eventNode);
				currNode = nextNode;

				return;

			case 'EXTRA_REQUEST':
				state = 'NO_REQUEST';
				return;
		}
	}

	return function stepper(model)
	{
		if (state === 'NO_REQUEST')
		{
			rAF(updateIfNeeded);
		}
		state = 'PENDING_REQUEST';
		nextModel = model;
	};
}


// DEBUG SETUP

function debugSetup(impl, object, moduleName, flagChecker)
{
	object['fullscreen'] = function fullscreen(flags)
	{
		var popoutRef = { doc: undefined };
		return _elm_lang$core$Native_Platform.initialize(
			flagChecker(impl.init, flags, document.body),
			impl.update(scrollTask(popoutRef)),
			impl.subscriptions,
			debugRenderer(moduleName, document.body, popoutRef, impl.view, impl.viewIn, impl.viewOut)
		);
	};

	object['embed'] = function fullscreen(node, flags)
	{
		var popoutRef = { doc: undefined };
		return _elm_lang$core$Native_Platform.initialize(
			flagChecker(impl.init, flags, node),
			impl.update(scrollTask(popoutRef)),
			impl.subscriptions,
			debugRenderer(moduleName, node, popoutRef, impl.view, impl.viewIn, impl.viewOut)
		);
	};
}

function scrollTask(popoutRef)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		var doc = popoutRef.doc;
		if (doc)
		{
			var msgs = doc.getElementsByClassName('debugger-sidebar-messages')[0];
			if (msgs)
			{
				msgs.scrollTop = msgs.scrollHeight;
			}
		}
		callback(_elm_lang$core$Native_Scheduler.succeed(_elm_lang$core$Native_Utils.Tuple0));
	});
}


function debugRenderer(moduleName, parentNode, popoutRef, view, viewIn, viewOut)
{
	return function(tagger, initialModel)
	{
		var appEventNode = { tagger: tagger, parent: undefined };
		var eventNode = { tagger: tagger, parent: undefined };

		// make normal stepper
		var appVirtualNode = view(initialModel);
		var appNode = render(appVirtualNode, appEventNode);
		parentNode.appendChild(appNode);
		var appStepper = makeStepper(appNode, view, appVirtualNode, appEventNode);

		// make overlay stepper
		var overVirtualNode = viewIn(initialModel)._1;
		var overNode = render(overVirtualNode, eventNode);
		parentNode.appendChild(overNode);
		var wrappedViewIn = wrapViewIn(appEventNode, overNode, viewIn);
		var overStepper = makeStepper(overNode, wrappedViewIn, overVirtualNode, eventNode);

		// make debugger stepper
		var debugStepper = makeDebugStepper(initialModel, viewOut, eventNode, parentNode, moduleName, popoutRef);

		return function stepper(model)
		{
			appStepper(model);
			overStepper(model);
			debugStepper(model);
		}
	};
}

function makeDebugStepper(initialModel, view, eventNode, parentNode, moduleName, popoutRef)
{
	var curr;
	var domNode;

	return function stepper(model)
	{
		if (!model.isDebuggerOpen)
		{
			return;
		}

		if (!popoutRef.doc)
		{
			curr = view(model);
			domNode = openDebugWindow(moduleName, popoutRef, curr, eventNode);
			return;
		}

		// switch to document of popout
		localDoc = popoutRef.doc;

		var next = view(model);
		var patches = diff(curr, next);
		domNode = applyPatches(domNode, curr, patches, eventNode);
		curr = next;

		// switch back to normal document
		localDoc = document;
	};
}

function openDebugWindow(moduleName, popoutRef, virtualNode, eventNode)
{
	var w = 900;
	var h = 360;
	var x = screen.width - w;
	var y = screen.height - h;
	var debugWindow = window.open('', '', 'width=' + w + ',height=' + h + ',left=' + x + ',top=' + y);

	// switch to window document
	localDoc = debugWindow.document;

	popoutRef.doc = localDoc;
	localDoc.title = 'Debugger - ' + moduleName;
	localDoc.body.style.margin = '0';
	localDoc.body.style.padding = '0';
	var domNode = render(virtualNode, eventNode);
	localDoc.body.appendChild(domNode);

	localDoc.addEventListener('keydown', function(event) {
		if (event.metaKey && event.which === 82)
		{
			window.location.reload();
		}
		if (event.which === 38)
		{
			eventNode.tagger({ ctor: 'Up' });
			event.preventDefault();
		}
		if (event.which === 40)
		{
			eventNode.tagger({ ctor: 'Down' });
			event.preventDefault();
		}
	});

	function close()
	{
		popoutRef.doc = undefined;
		debugWindow.close();
	}
	window.addEventListener('unload', close);
	debugWindow.addEventListener('unload', function() {
		popoutRef.doc = undefined;
		window.removeEventListener('unload', close);
		eventNode.tagger({ ctor: 'Close' });
	});

	// switch back to the normal document
	localDoc = document;

	return domNode;
}


// BLOCK EVENTS

function wrapViewIn(appEventNode, overlayNode, viewIn)
{
	var ignorer = makeIgnorer(overlayNode);
	var blocking = 'Normal';
	var overflow;

	var normalTagger = appEventNode.tagger;
	var blockTagger = function() {};

	return function(model)
	{
		var tuple = viewIn(model);
		var newBlocking = tuple._0.ctor;
		appEventNode.tagger = newBlocking === 'Normal' ? normalTagger : blockTagger;
		if (blocking !== newBlocking)
		{
			traverse('removeEventListener', ignorer, blocking);
			traverse('addEventListener', ignorer, newBlocking);

			if (blocking === 'Normal')
			{
				overflow = document.body.style.overflow;
				document.body.style.overflow = 'hidden';
			}

			if (newBlocking === 'Normal')
			{
				document.body.style.overflow = overflow;
			}

			blocking = newBlocking;
		}
		return tuple._1;
	}
}

function traverse(verbEventListener, ignorer, blocking)
{
	switch(blocking)
	{
		case 'Normal':
			return;

		case 'Pause':
			return traverseHelp(verbEventListener, ignorer, mostEvents);

		case 'Message':
			return traverseHelp(verbEventListener, ignorer, allEvents);
	}
}

function traverseHelp(verbEventListener, handler, eventNames)
{
	for (var i = 0; i < eventNames.length; i++)
	{
		document.body[verbEventListener](eventNames[i], handler, true);
	}
}

function makeIgnorer(overlayNode)
{
	return function(event)
	{
		if (event.type === 'keydown' && event.metaKey && event.which === 82)
		{
			return;
		}

		var isScroll = event.type === 'scroll' || event.type === 'wheel';

		var node = event.target;
		while (node !== null)
		{
			if (node.className === 'elm-overlay-message-details' && isScroll)
			{
				return;
			}

			if (node === overlayNode && !isScroll)
			{
				return;
			}
			node = node.parentNode;
		}

		event.stopPropagation();
		event.preventDefault();
	}
}

var mostEvents = [
	'click', 'dblclick', 'mousemove',
	'mouseup', 'mousedown', 'mouseenter', 'mouseleave',
	'touchstart', 'touchend', 'touchcancel', 'touchmove',
	'pointerdown', 'pointerup', 'pointerover', 'pointerout',
	'pointerenter', 'pointerleave', 'pointermove', 'pointercancel',
	'dragstart', 'drag', 'dragend', 'dragenter', 'dragover', 'dragleave', 'drop',
	'keyup', 'keydown', 'keypress',
	'input', 'change',
	'focus', 'blur'
];

var allEvents = mostEvents.concat('wheel', 'scroll');


return {
	node: node,
	text: text,
	custom: custom,
	map: F2(map),

	on: F3(on),
	style: style,
	property: F2(property),
	attribute: F2(attribute),
	attributeNS: F3(attributeNS),
	mapProperty: F2(mapProperty),

	lazy: F2(lazy),
	lazy2: F3(lazy2),
	lazy3: F4(lazy3),
	keyedNode: F3(keyedNode),

	program: program,
	programWithFlags: programWithFlags,
	staticProgram: staticProgram
};

}();

var _elm_lang$virtual_dom$VirtualDom$programWithFlags = function (impl) {
	return A2(_elm_lang$virtual_dom$Native_VirtualDom.programWithFlags, _elm_lang$virtual_dom$VirtualDom_Debug$wrapWithFlags, impl);
};
var _elm_lang$virtual_dom$VirtualDom$program = function (impl) {
	return A2(_elm_lang$virtual_dom$Native_VirtualDom.program, _elm_lang$virtual_dom$VirtualDom_Debug$wrap, impl);
};
var _elm_lang$virtual_dom$VirtualDom$keyedNode = _elm_lang$virtual_dom$Native_VirtualDom.keyedNode;
var _elm_lang$virtual_dom$VirtualDom$lazy3 = _elm_lang$virtual_dom$Native_VirtualDom.lazy3;
var _elm_lang$virtual_dom$VirtualDom$lazy2 = _elm_lang$virtual_dom$Native_VirtualDom.lazy2;
var _elm_lang$virtual_dom$VirtualDom$lazy = _elm_lang$virtual_dom$Native_VirtualDom.lazy;
var _elm_lang$virtual_dom$VirtualDom$defaultOptions = {stopPropagation: false, preventDefault: false};
var _elm_lang$virtual_dom$VirtualDom$onWithOptions = _elm_lang$virtual_dom$Native_VirtualDom.on;
var _elm_lang$virtual_dom$VirtualDom$on = F2(
	function (eventName, decoder) {
		return A3(_elm_lang$virtual_dom$VirtualDom$onWithOptions, eventName, _elm_lang$virtual_dom$VirtualDom$defaultOptions, decoder);
	});
var _elm_lang$virtual_dom$VirtualDom$style = _elm_lang$virtual_dom$Native_VirtualDom.style;
var _elm_lang$virtual_dom$VirtualDom$mapProperty = _elm_lang$virtual_dom$Native_VirtualDom.mapProperty;
var _elm_lang$virtual_dom$VirtualDom$attributeNS = _elm_lang$virtual_dom$Native_VirtualDom.attributeNS;
var _elm_lang$virtual_dom$VirtualDom$attribute = _elm_lang$virtual_dom$Native_VirtualDom.attribute;
var _elm_lang$virtual_dom$VirtualDom$property = _elm_lang$virtual_dom$Native_VirtualDom.property;
var _elm_lang$virtual_dom$VirtualDom$map = _elm_lang$virtual_dom$Native_VirtualDom.map;
var _elm_lang$virtual_dom$VirtualDom$text = _elm_lang$virtual_dom$Native_VirtualDom.text;
var _elm_lang$virtual_dom$VirtualDom$node = _elm_lang$virtual_dom$Native_VirtualDom.node;
var _elm_lang$virtual_dom$VirtualDom$Options = F2(
	function (a, b) {
		return {stopPropagation: a, preventDefault: b};
	});
var _elm_lang$virtual_dom$VirtualDom$Node = {ctor: 'Node'};
var _elm_lang$virtual_dom$VirtualDom$Property = {ctor: 'Property'};

var _elm_lang$html$Html$programWithFlags = _elm_lang$virtual_dom$VirtualDom$programWithFlags;
var _elm_lang$html$Html$program = _elm_lang$virtual_dom$VirtualDom$program;
var _elm_lang$html$Html$beginnerProgram = function (_p0) {
	var _p1 = _p0;
	return _elm_lang$html$Html$program(
		{
			init: A2(
				_elm_lang$core$Platform_Cmd_ops['!'],
				_p1.model,
				{ctor: '[]'}),
			update: F2(
				function (msg, model) {
					return A2(
						_elm_lang$core$Platform_Cmd_ops['!'],
						A2(_p1.update, msg, model),
						{ctor: '[]'});
				}),
			view: _p1.view,
			subscriptions: function (_p2) {
				return _elm_lang$core$Platform_Sub$none;
			}
		});
};
var _elm_lang$html$Html$map = _elm_lang$virtual_dom$VirtualDom$map;
var _elm_lang$html$Html$text = _elm_lang$virtual_dom$VirtualDom$text;
var _elm_lang$html$Html$node = _elm_lang$virtual_dom$VirtualDom$node;
var _elm_lang$html$Html$body = _elm_lang$html$Html$node('body');
var _elm_lang$html$Html$section = _elm_lang$html$Html$node('section');
var _elm_lang$html$Html$nav = _elm_lang$html$Html$node('nav');
var _elm_lang$html$Html$article = _elm_lang$html$Html$node('article');
var _elm_lang$html$Html$aside = _elm_lang$html$Html$node('aside');
var _elm_lang$html$Html$h1 = _elm_lang$html$Html$node('h1');
var _elm_lang$html$Html$h2 = _elm_lang$html$Html$node('h2');
var _elm_lang$html$Html$h3 = _elm_lang$html$Html$node('h3');
var _elm_lang$html$Html$h4 = _elm_lang$html$Html$node('h4');
var _elm_lang$html$Html$h5 = _elm_lang$html$Html$node('h5');
var _elm_lang$html$Html$h6 = _elm_lang$html$Html$node('h6');
var _elm_lang$html$Html$header = _elm_lang$html$Html$node('header');
var _elm_lang$html$Html$footer = _elm_lang$html$Html$node('footer');
var _elm_lang$html$Html$address = _elm_lang$html$Html$node('address');
var _elm_lang$html$Html$main_ = _elm_lang$html$Html$node('main');
var _elm_lang$html$Html$p = _elm_lang$html$Html$node('p');
var _elm_lang$html$Html$hr = _elm_lang$html$Html$node('hr');
var _elm_lang$html$Html$pre = _elm_lang$html$Html$node('pre');
var _elm_lang$html$Html$blockquote = _elm_lang$html$Html$node('blockquote');
var _elm_lang$html$Html$ol = _elm_lang$html$Html$node('ol');
var _elm_lang$html$Html$ul = _elm_lang$html$Html$node('ul');
var _elm_lang$html$Html$li = _elm_lang$html$Html$node('li');
var _elm_lang$html$Html$dl = _elm_lang$html$Html$node('dl');
var _elm_lang$html$Html$dt = _elm_lang$html$Html$node('dt');
var _elm_lang$html$Html$dd = _elm_lang$html$Html$node('dd');
var _elm_lang$html$Html$figure = _elm_lang$html$Html$node('figure');
var _elm_lang$html$Html$figcaption = _elm_lang$html$Html$node('figcaption');
var _elm_lang$html$Html$div = _elm_lang$html$Html$node('div');
var _elm_lang$html$Html$a = _elm_lang$html$Html$node('a');
var _elm_lang$html$Html$em = _elm_lang$html$Html$node('em');
var _elm_lang$html$Html$strong = _elm_lang$html$Html$node('strong');
var _elm_lang$html$Html$small = _elm_lang$html$Html$node('small');
var _elm_lang$html$Html$s = _elm_lang$html$Html$node('s');
var _elm_lang$html$Html$cite = _elm_lang$html$Html$node('cite');
var _elm_lang$html$Html$q = _elm_lang$html$Html$node('q');
var _elm_lang$html$Html$dfn = _elm_lang$html$Html$node('dfn');
var _elm_lang$html$Html$abbr = _elm_lang$html$Html$node('abbr');
var _elm_lang$html$Html$time = _elm_lang$html$Html$node('time');
var _elm_lang$html$Html$code = _elm_lang$html$Html$node('code');
var _elm_lang$html$Html$var = _elm_lang$html$Html$node('var');
var _elm_lang$html$Html$samp = _elm_lang$html$Html$node('samp');
var _elm_lang$html$Html$kbd = _elm_lang$html$Html$node('kbd');
var _elm_lang$html$Html$sub = _elm_lang$html$Html$node('sub');
var _elm_lang$html$Html$sup = _elm_lang$html$Html$node('sup');
var _elm_lang$html$Html$i = _elm_lang$html$Html$node('i');
var _elm_lang$html$Html$b = _elm_lang$html$Html$node('b');
var _elm_lang$html$Html$u = _elm_lang$html$Html$node('u');
var _elm_lang$html$Html$mark = _elm_lang$html$Html$node('mark');
var _elm_lang$html$Html$ruby = _elm_lang$html$Html$node('ruby');
var _elm_lang$html$Html$rt = _elm_lang$html$Html$node('rt');
var _elm_lang$html$Html$rp = _elm_lang$html$Html$node('rp');
var _elm_lang$html$Html$bdi = _elm_lang$html$Html$node('bdi');
var _elm_lang$html$Html$bdo = _elm_lang$html$Html$node('bdo');
var _elm_lang$html$Html$span = _elm_lang$html$Html$node('span');
var _elm_lang$html$Html$br = _elm_lang$html$Html$node('br');
var _elm_lang$html$Html$wbr = _elm_lang$html$Html$node('wbr');
var _elm_lang$html$Html$ins = _elm_lang$html$Html$node('ins');
var _elm_lang$html$Html$del = _elm_lang$html$Html$node('del');
var _elm_lang$html$Html$img = _elm_lang$html$Html$node('img');
var _elm_lang$html$Html$iframe = _elm_lang$html$Html$node('iframe');
var _elm_lang$html$Html$embed = _elm_lang$html$Html$node('embed');
var _elm_lang$html$Html$object = _elm_lang$html$Html$node('object');
var _elm_lang$html$Html$param = _elm_lang$html$Html$node('param');
var _elm_lang$html$Html$video = _elm_lang$html$Html$node('video');
var _elm_lang$html$Html$audio = _elm_lang$html$Html$node('audio');
var _elm_lang$html$Html$source = _elm_lang$html$Html$node('source');
var _elm_lang$html$Html$track = _elm_lang$html$Html$node('track');
var _elm_lang$html$Html$canvas = _elm_lang$html$Html$node('canvas');
var _elm_lang$html$Html$math = _elm_lang$html$Html$node('math');
var _elm_lang$html$Html$table = _elm_lang$html$Html$node('table');
var _elm_lang$html$Html$caption = _elm_lang$html$Html$node('caption');
var _elm_lang$html$Html$colgroup = _elm_lang$html$Html$node('colgroup');
var _elm_lang$html$Html$col = _elm_lang$html$Html$node('col');
var _elm_lang$html$Html$tbody = _elm_lang$html$Html$node('tbody');
var _elm_lang$html$Html$thead = _elm_lang$html$Html$node('thead');
var _elm_lang$html$Html$tfoot = _elm_lang$html$Html$node('tfoot');
var _elm_lang$html$Html$tr = _elm_lang$html$Html$node('tr');
var _elm_lang$html$Html$td = _elm_lang$html$Html$node('td');
var _elm_lang$html$Html$th = _elm_lang$html$Html$node('th');
var _elm_lang$html$Html$form = _elm_lang$html$Html$node('form');
var _elm_lang$html$Html$fieldset = _elm_lang$html$Html$node('fieldset');
var _elm_lang$html$Html$legend = _elm_lang$html$Html$node('legend');
var _elm_lang$html$Html$label = _elm_lang$html$Html$node('label');
var _elm_lang$html$Html$input = _elm_lang$html$Html$node('input');
var _elm_lang$html$Html$button = _elm_lang$html$Html$node('button');
var _elm_lang$html$Html$select = _elm_lang$html$Html$node('select');
var _elm_lang$html$Html$datalist = _elm_lang$html$Html$node('datalist');
var _elm_lang$html$Html$optgroup = _elm_lang$html$Html$node('optgroup');
var _elm_lang$html$Html$option = _elm_lang$html$Html$node('option');
var _elm_lang$html$Html$textarea = _elm_lang$html$Html$node('textarea');
var _elm_lang$html$Html$keygen = _elm_lang$html$Html$node('keygen');
var _elm_lang$html$Html$output = _elm_lang$html$Html$node('output');
var _elm_lang$html$Html$progress = _elm_lang$html$Html$node('progress');
var _elm_lang$html$Html$meter = _elm_lang$html$Html$node('meter');
var _elm_lang$html$Html$details = _elm_lang$html$Html$node('details');
var _elm_lang$html$Html$summary = _elm_lang$html$Html$node('summary');
var _elm_lang$html$Html$menuitem = _elm_lang$html$Html$node('menuitem');
var _elm_lang$html$Html$menu = _elm_lang$html$Html$node('menu');

var _elm_lang$html$Html_Attributes$map = _elm_lang$virtual_dom$VirtualDom$mapProperty;
var _elm_lang$html$Html_Attributes$attribute = _elm_lang$virtual_dom$VirtualDom$attribute;
var _elm_lang$html$Html_Attributes$contextmenu = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'contextmenu', value);
};
var _elm_lang$html$Html_Attributes$draggable = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'draggable', value);
};
var _elm_lang$html$Html_Attributes$itemprop = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'itemprop', value);
};
var _elm_lang$html$Html_Attributes$tabindex = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'tabIndex',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$charset = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'charset', value);
};
var _elm_lang$html$Html_Attributes$height = function (value) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'height',
		_elm_lang$core$Basics$toString(value));
};
var _elm_lang$html$Html_Attributes$width = function (value) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'width',
		_elm_lang$core$Basics$toString(value));
};
var _elm_lang$html$Html_Attributes$formaction = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'formAction', value);
};
var _elm_lang$html$Html_Attributes$list = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'list', value);
};
var _elm_lang$html$Html_Attributes$minlength = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'minLength',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$maxlength = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'maxlength',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$size = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'size',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$form = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'form', value);
};
var _elm_lang$html$Html_Attributes$cols = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'cols',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$rows = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'rows',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$challenge = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'challenge', value);
};
var _elm_lang$html$Html_Attributes$media = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'media', value);
};
var _elm_lang$html$Html_Attributes$rel = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'rel', value);
};
var _elm_lang$html$Html_Attributes$datetime = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'datetime', value);
};
var _elm_lang$html$Html_Attributes$pubdate = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'pubdate', value);
};
var _elm_lang$html$Html_Attributes$colspan = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'colspan',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$rowspan = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'rowspan',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$manifest = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'manifest', value);
};
var _elm_lang$html$Html_Attributes$property = _elm_lang$virtual_dom$VirtualDom$property;
var _elm_lang$html$Html_Attributes$stringProperty = F2(
	function (name, string) {
		return A2(
			_elm_lang$html$Html_Attributes$property,
			name,
			_elm_lang$core$Json_Encode$string(string));
	});
var _elm_lang$html$Html_Attributes$class = function (name) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'className', name);
};
var _elm_lang$html$Html_Attributes$id = function (name) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'id', name);
};
var _elm_lang$html$Html_Attributes$title = function (name) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'title', name);
};
var _elm_lang$html$Html_Attributes$accesskey = function ($char) {
	return A2(
		_elm_lang$html$Html_Attributes$stringProperty,
		'accessKey',
		_elm_lang$core$String$fromChar($char));
};
var _elm_lang$html$Html_Attributes$dir = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'dir', value);
};
var _elm_lang$html$Html_Attributes$dropzone = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'dropzone', value);
};
var _elm_lang$html$Html_Attributes$lang = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'lang', value);
};
var _elm_lang$html$Html_Attributes$content = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'content', value);
};
var _elm_lang$html$Html_Attributes$httpEquiv = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'httpEquiv', value);
};
var _elm_lang$html$Html_Attributes$language = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'language', value);
};
var _elm_lang$html$Html_Attributes$src = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'src', value);
};
var _elm_lang$html$Html_Attributes$alt = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'alt', value);
};
var _elm_lang$html$Html_Attributes$preload = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'preload', value);
};
var _elm_lang$html$Html_Attributes$poster = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'poster', value);
};
var _elm_lang$html$Html_Attributes$kind = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'kind', value);
};
var _elm_lang$html$Html_Attributes$srclang = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'srclang', value);
};
var _elm_lang$html$Html_Attributes$sandbox = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'sandbox', value);
};
var _elm_lang$html$Html_Attributes$srcdoc = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'srcdoc', value);
};
var _elm_lang$html$Html_Attributes$type_ = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'type', value);
};
var _elm_lang$html$Html_Attributes$value = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'value', value);
};
var _elm_lang$html$Html_Attributes$defaultValue = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'defaultValue', value);
};
var _elm_lang$html$Html_Attributes$placeholder = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'placeholder', value);
};
var _elm_lang$html$Html_Attributes$accept = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'accept', value);
};
var _elm_lang$html$Html_Attributes$acceptCharset = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'acceptCharset', value);
};
var _elm_lang$html$Html_Attributes$action = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'action', value);
};
var _elm_lang$html$Html_Attributes$autocomplete = function (bool) {
	return A2(
		_elm_lang$html$Html_Attributes$stringProperty,
		'autocomplete',
		bool ? 'on' : 'off');
};
var _elm_lang$html$Html_Attributes$enctype = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'enctype', value);
};
var _elm_lang$html$Html_Attributes$method = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'method', value);
};
var _elm_lang$html$Html_Attributes$name = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'name', value);
};
var _elm_lang$html$Html_Attributes$pattern = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'pattern', value);
};
var _elm_lang$html$Html_Attributes$for = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'htmlFor', value);
};
var _elm_lang$html$Html_Attributes$max = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'max', value);
};
var _elm_lang$html$Html_Attributes$min = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'min', value);
};
var _elm_lang$html$Html_Attributes$step = function (n) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'step', n);
};
var _elm_lang$html$Html_Attributes$wrap = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'wrap', value);
};
var _elm_lang$html$Html_Attributes$usemap = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'useMap', value);
};
var _elm_lang$html$Html_Attributes$shape = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'shape', value);
};
var _elm_lang$html$Html_Attributes$coords = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'coords', value);
};
var _elm_lang$html$Html_Attributes$keytype = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'keytype', value);
};
var _elm_lang$html$Html_Attributes$align = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'align', value);
};
var _elm_lang$html$Html_Attributes$cite = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'cite', value);
};
var _elm_lang$html$Html_Attributes$href = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'href', value);
};
var _elm_lang$html$Html_Attributes$target = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'target', value);
};
var _elm_lang$html$Html_Attributes$downloadAs = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'download', value);
};
var _elm_lang$html$Html_Attributes$hreflang = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'hreflang', value);
};
var _elm_lang$html$Html_Attributes$ping = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'ping', value);
};
var _elm_lang$html$Html_Attributes$start = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$stringProperty,
		'start',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$headers = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'headers', value);
};
var _elm_lang$html$Html_Attributes$scope = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'scope', value);
};
var _elm_lang$html$Html_Attributes$boolProperty = F2(
	function (name, bool) {
		return A2(
			_elm_lang$html$Html_Attributes$property,
			name,
			_elm_lang$core$Json_Encode$bool(bool));
	});
var _elm_lang$html$Html_Attributes$hidden = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'hidden', bool);
};
var _elm_lang$html$Html_Attributes$contenteditable = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'contentEditable', bool);
};
var _elm_lang$html$Html_Attributes$spellcheck = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'spellcheck', bool);
};
var _elm_lang$html$Html_Attributes$async = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'async', bool);
};
var _elm_lang$html$Html_Attributes$defer = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'defer', bool);
};
var _elm_lang$html$Html_Attributes$scoped = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'scoped', bool);
};
var _elm_lang$html$Html_Attributes$autoplay = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'autoplay', bool);
};
var _elm_lang$html$Html_Attributes$controls = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'controls', bool);
};
var _elm_lang$html$Html_Attributes$loop = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'loop', bool);
};
var _elm_lang$html$Html_Attributes$default = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'default', bool);
};
var _elm_lang$html$Html_Attributes$seamless = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'seamless', bool);
};
var _elm_lang$html$Html_Attributes$checked = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'checked', bool);
};
var _elm_lang$html$Html_Attributes$selected = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'selected', bool);
};
var _elm_lang$html$Html_Attributes$autofocus = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'autofocus', bool);
};
var _elm_lang$html$Html_Attributes$disabled = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'disabled', bool);
};
var _elm_lang$html$Html_Attributes$multiple = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'multiple', bool);
};
var _elm_lang$html$Html_Attributes$novalidate = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'noValidate', bool);
};
var _elm_lang$html$Html_Attributes$readonly = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'readOnly', bool);
};
var _elm_lang$html$Html_Attributes$required = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'required', bool);
};
var _elm_lang$html$Html_Attributes$ismap = function (value) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'isMap', value);
};
var _elm_lang$html$Html_Attributes$download = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'download', bool);
};
var _elm_lang$html$Html_Attributes$reversed = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'reversed', bool);
};
var _elm_lang$html$Html_Attributes$classList = function (list) {
	return _elm_lang$html$Html_Attributes$class(
		A2(
			_elm_lang$core$String$join,
			' ',
			A2(
				_elm_lang$core$List$map,
				_elm_lang$core$Tuple$first,
				A2(_elm_lang$core$List$filter, _elm_lang$core$Tuple$second, list))));
};
var _elm_lang$html$Html_Attributes$style = _elm_lang$virtual_dom$VirtualDom$style;

var _elm_lang$html$Html_Events$keyCode = A2(_elm_lang$core$Json_Decode$field, 'keyCode', _elm_lang$core$Json_Decode$int);
var _elm_lang$html$Html_Events$targetChecked = A2(
	_elm_lang$core$Json_Decode$at,
	{
		ctor: '::',
		_0: 'target',
		_1: {
			ctor: '::',
			_0: 'checked',
			_1: {ctor: '[]'}
		}
	},
	_elm_lang$core$Json_Decode$bool);
var _elm_lang$html$Html_Events$targetValue = A2(
	_elm_lang$core$Json_Decode$at,
	{
		ctor: '::',
		_0: 'target',
		_1: {
			ctor: '::',
			_0: 'value',
			_1: {ctor: '[]'}
		}
	},
	_elm_lang$core$Json_Decode$string);
var _elm_lang$html$Html_Events$defaultOptions = _elm_lang$virtual_dom$VirtualDom$defaultOptions;
var _elm_lang$html$Html_Events$onWithOptions = _elm_lang$virtual_dom$VirtualDom$onWithOptions;
var _elm_lang$html$Html_Events$on = _elm_lang$virtual_dom$VirtualDom$on;
var _elm_lang$html$Html_Events$onFocus = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'focus',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onBlur = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'blur',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onSubmitOptions = _elm_lang$core$Native_Utils.update(
	_elm_lang$html$Html_Events$defaultOptions,
	{preventDefault: true});
var _elm_lang$html$Html_Events$onSubmit = function (msg) {
	return A3(
		_elm_lang$html$Html_Events$onWithOptions,
		'submit',
		_elm_lang$html$Html_Events$onSubmitOptions,
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onCheck = function (tagger) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'change',
		A2(_elm_lang$core$Json_Decode$map, tagger, _elm_lang$html$Html_Events$targetChecked));
};
var _elm_lang$html$Html_Events$onInput = function (tagger) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'input',
		A2(_elm_lang$core$Json_Decode$map, tagger, _elm_lang$html$Html_Events$targetValue));
};
var _elm_lang$html$Html_Events$onMouseOut = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mouseout',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onMouseOver = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mouseover',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onMouseLeave = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mouseleave',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onMouseEnter = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mouseenter',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onMouseUp = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mouseup',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onMouseDown = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mousedown',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onDoubleClick = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'dblclick',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onClick = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'click',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$Options = F2(
	function (a, b) {
		return {stopPropagation: a, preventDefault: b};
	});

var _elm_lang$html$Html_Keyed$node = _elm_lang$virtual_dom$VirtualDom$keyedNode;
var _elm_lang$html$Html_Keyed$ol = _elm_lang$html$Html_Keyed$node('ol');
var _elm_lang$html$Html_Keyed$ul = _elm_lang$html$Html_Keyed$node('ul');

var _elm_lang$http$Native_Http = function() {


// ENCODING AND DECODING

function encodeUri(string)
{
	return encodeURIComponent(string);
}

function decodeUri(string)
{
	try
	{
		return _elm_lang$core$Maybe$Just(decodeURIComponent(string));
	}
	catch(e)
	{
		return _elm_lang$core$Maybe$Nothing;
	}
}


// SEND REQUEST

function toTask(request, maybeProgress)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		var xhr = new XMLHttpRequest();

		configureProgress(xhr, maybeProgress);

		xhr.addEventListener('error', function() {
			callback(_elm_lang$core$Native_Scheduler.fail({ ctor: 'NetworkError' }));
		});
		xhr.addEventListener('timeout', function() {
			callback(_elm_lang$core$Native_Scheduler.fail({ ctor: 'Timeout' }));
		});
		xhr.addEventListener('load', function() {
			callback(handleResponse(xhr, request.expect.responseToResult));
		});

		try
		{
			xhr.open(request.method, request.url, true);
		}
		catch (e)
		{
			return callback(_elm_lang$core$Native_Scheduler.fail({ ctor: 'BadUrl', _0: request.url }));
		}

		configureRequest(xhr, request);
		send(xhr, request.body);

		return function() { xhr.abort(); };
	});
}

function configureProgress(xhr, maybeProgress)
{
	if (maybeProgress.ctor === 'Nothing')
	{
		return;
	}

	xhr.addEventListener('progress', function(event) {
		if (!event.lengthComputable)
		{
			return;
		}
		_elm_lang$core$Native_Scheduler.rawSpawn(maybeProgress._0({
			bytes: event.loaded,
			bytesExpected: event.total
		}));
	});
}

function configureRequest(xhr, request)
{
	function setHeader(pair)
	{
		xhr.setRequestHeader(pair._0, pair._1);
	}

	A2(_elm_lang$core$List$map, setHeader, request.headers);
	xhr.responseType = request.expect.responseType;
	xhr.withCredentials = request.withCredentials;

	if (request.timeout.ctor === 'Just')
	{
		xhr.timeout = request.timeout._0;
	}
}

function send(xhr, body)
{
	switch (body.ctor)
	{
		case 'EmptyBody':
			xhr.send();
			return;

		case 'StringBody':
			xhr.setRequestHeader('Content-Type', body._0);
			xhr.send(body._1);
			return;

		case 'FormDataBody':
			xhr.send(body._0);
			return;
	}
}


// RESPONSES

function handleResponse(xhr, responseToResult)
{
	var response = toResponse(xhr);

	if (xhr.status < 200 || 300 <= xhr.status)
	{
		response.body = xhr.responseText;
		return _elm_lang$core$Native_Scheduler.fail({
			ctor: 'BadStatus',
			_0: response
		});
	}

	var result = responseToResult(response);

	if (result.ctor === 'Ok')
	{
		return _elm_lang$core$Native_Scheduler.succeed(result._0);
	}
	else
	{
		response.body = xhr.responseText;
		return _elm_lang$core$Native_Scheduler.fail({
			ctor: 'BadPayload',
			_0: result._0,
			_1: response
		});
	}
}

function toResponse(xhr)
{
	return {
		status: { code: xhr.status, message: xhr.statusText },
		headers: parseHeaders(xhr.getAllResponseHeaders()),
		url: xhr.responseURL,
		body: xhr.response
	};
}

function parseHeaders(rawHeaders)
{
	var headers = _elm_lang$core$Dict$empty;

	if (!rawHeaders)
	{
		return headers;
	}

	var headerPairs = rawHeaders.split('\u000d\u000a');
	for (var i = headerPairs.length; i--; )
	{
		var headerPair = headerPairs[i];
		var index = headerPair.indexOf('\u003a\u0020');
		if (index > 0)
		{
			var key = headerPair.substring(0, index);
			var value = headerPair.substring(index + 2);

			headers = A3(_elm_lang$core$Dict$update, key, function(oldValue) {
				if (oldValue.ctor === 'Just')
				{
					return _elm_lang$core$Maybe$Just(value + ', ' + oldValue._0);
				}
				return _elm_lang$core$Maybe$Just(value);
			}, headers);
		}
	}

	return headers;
}


// EXPECTORS

function expectStringResponse(responseToResult)
{
	return {
		responseType: 'text',
		responseToResult: responseToResult
	};
}

function mapExpect(func, expect)
{
	return {
		responseType: expect.responseType,
		responseToResult: function(response) {
			var convertedResponse = expect.responseToResult(response);
			return A2(_elm_lang$core$Result$map, func, convertedResponse);
		}
	};
}


// BODY

function multipart(parts)
{
	var formData = new FormData();

	while (parts.ctor !== '[]')
	{
		var part = parts._0;
		formData.append(part._0, part._1);
		parts = parts._1;
	}

	return { ctor: 'FormDataBody', _0: formData };
}

return {
	toTask: F2(toTask),
	expectStringResponse: expectStringResponse,
	mapExpect: F2(mapExpect),
	multipart: multipart,
	encodeUri: encodeUri,
	decodeUri: decodeUri
};

}();

var _elm_lang$http$Http_Internal$map = F2(
	function (func, request) {
		return _elm_lang$core$Native_Utils.update(
			request,
			{
				expect: A2(_elm_lang$http$Native_Http.mapExpect, func, request.expect)
			});
	});
var _elm_lang$http$Http_Internal$RawRequest = F7(
	function (a, b, c, d, e, f, g) {
		return {method: a, headers: b, url: c, body: d, expect: e, timeout: f, withCredentials: g};
	});
var _elm_lang$http$Http_Internal$Request = function (a) {
	return {ctor: 'Request', _0: a};
};
var _elm_lang$http$Http_Internal$Expect = {ctor: 'Expect'};
var _elm_lang$http$Http_Internal$FormDataBody = {ctor: 'FormDataBody'};
var _elm_lang$http$Http_Internal$StringBody = F2(
	function (a, b) {
		return {ctor: 'StringBody', _0: a, _1: b};
	});
var _elm_lang$http$Http_Internal$EmptyBody = {ctor: 'EmptyBody'};
var _elm_lang$http$Http_Internal$Header = F2(
	function (a, b) {
		return {ctor: 'Header', _0: a, _1: b};
	});

var _elm_lang$http$Http$decodeUri = _elm_lang$http$Native_Http.decodeUri;
var _elm_lang$http$Http$encodeUri = _elm_lang$http$Native_Http.encodeUri;
var _elm_lang$http$Http$expectStringResponse = _elm_lang$http$Native_Http.expectStringResponse;
var _elm_lang$http$Http$expectJson = function (decoder) {
	return _elm_lang$http$Http$expectStringResponse(
		function (response) {
			return A2(_elm_lang$core$Json_Decode$decodeString, decoder, response.body);
		});
};
var _elm_lang$http$Http$expectString = _elm_lang$http$Http$expectStringResponse(
	function (response) {
		return _elm_lang$core$Result$Ok(response.body);
	});
var _elm_lang$http$Http$multipartBody = _elm_lang$http$Native_Http.multipart;
var _elm_lang$http$Http$stringBody = _elm_lang$http$Http_Internal$StringBody;
var _elm_lang$http$Http$jsonBody = function (value) {
	return A2(
		_elm_lang$http$Http_Internal$StringBody,
		'application/json',
		A2(_elm_lang$core$Json_Encode$encode, 0, value));
};
var _elm_lang$http$Http$emptyBody = _elm_lang$http$Http_Internal$EmptyBody;
var _elm_lang$http$Http$header = _elm_lang$http$Http_Internal$Header;
var _elm_lang$http$Http$request = _elm_lang$http$Http_Internal$Request;
var _elm_lang$http$Http$post = F3(
	function (url, body, decoder) {
		return _elm_lang$http$Http$request(
			{
				method: 'POST',
				headers: {ctor: '[]'},
				url: url,
				body: body,
				expect: _elm_lang$http$Http$expectJson(decoder),
				timeout: _elm_lang$core$Maybe$Nothing,
				withCredentials: false
			});
	});
var _elm_lang$http$Http$get = F2(
	function (url, decoder) {
		return _elm_lang$http$Http$request(
			{
				method: 'GET',
				headers: {ctor: '[]'},
				url: url,
				body: _elm_lang$http$Http$emptyBody,
				expect: _elm_lang$http$Http$expectJson(decoder),
				timeout: _elm_lang$core$Maybe$Nothing,
				withCredentials: false
			});
	});
var _elm_lang$http$Http$getString = function (url) {
	return _elm_lang$http$Http$request(
		{
			method: 'GET',
			headers: {ctor: '[]'},
			url: url,
			body: _elm_lang$http$Http$emptyBody,
			expect: _elm_lang$http$Http$expectString,
			timeout: _elm_lang$core$Maybe$Nothing,
			withCredentials: false
		});
};
var _elm_lang$http$Http$toTask = function (_p0) {
	var _p1 = _p0;
	return A2(_elm_lang$http$Native_Http.toTask, _p1._0, _elm_lang$core$Maybe$Nothing);
};
var _elm_lang$http$Http$send = F2(
	function (resultToMessage, request) {
		return A2(
			_elm_lang$core$Task$attempt,
			resultToMessage,
			_elm_lang$http$Http$toTask(request));
	});
var _elm_lang$http$Http$Response = F4(
	function (a, b, c, d) {
		return {url: a, status: b, headers: c, body: d};
	});
var _elm_lang$http$Http$BadPayload = F2(
	function (a, b) {
		return {ctor: 'BadPayload', _0: a, _1: b};
	});
var _elm_lang$http$Http$BadStatus = function (a) {
	return {ctor: 'BadStatus', _0: a};
};
var _elm_lang$http$Http$NetworkError = {ctor: 'NetworkError'};
var _elm_lang$http$Http$Timeout = {ctor: 'Timeout'};
var _elm_lang$http$Http$BadUrl = function (a) {
	return {ctor: 'BadUrl', _0: a};
};
var _elm_lang$http$Http$StringPart = F2(
	function (a, b) {
		return {ctor: 'StringPart', _0: a, _1: b};
	});
var _elm_lang$http$Http$stringPart = _elm_lang$http$Http$StringPart;

var _elm_tools$parser_primitives$Native_ParserPrimitives = function() {


// STRINGS

function isSubString(smallString, offset, row, col, bigString)
{
	var smallLength = smallString.length;
	var bigLength = bigString.length - offset;

	if (bigLength < smallLength)
	{
		return tuple3(-1, row, col);
	}

	for (var i = 0; i < smallLength; i++)
	{
		var char = smallString[i];

		if (char !== bigString[offset + i])
		{
			return tuple3(-1, row, col);
		}

		// if it is a two word character
		if ((bigString.charCodeAt(offset) & 0xF800) === 0xD800)
		{
			i++
			if (smallString[i] !== bigString[offset + i])
			{
				return tuple3(-1, row, col);
			}
			col++;
			continue;
		}

		// if it is a newline
		if (char === '\n')
		{
			row++;
			col = 1;
			continue;
		}

		// if it is a one word character
		col++
	}

	return tuple3(offset + smallLength, row, col);
}

function tuple3(a, b, c)
{
	return { ctor: '_Tuple3', _0: a, _1: b, _2: c };
}


// CHARS

var mkChar = _elm_lang$core$Native_Utils.chr;

function isSubChar(predicate, offset, string)
{
	if (offset >= string.length)
	{
		return -1;
	}

	if ((string.charCodeAt(offset) & 0xF800) === 0xD800)
	{
		return predicate(mkChar(string.substr(offset, 2)))
			? offset + 2
			: -1;
	}

	var char = string[offset];

	return predicate(mkChar(char))
		? ((char === '\n') ? -2 : (offset + 1))
		: -1;
}


// FIND STRING

function findSubString(before, smallString, offset, row, col, bigString)
{
	var newOffset = bigString.indexOf(smallString, offset);

	if (newOffset === -1)
	{
		return tuple3(-1, row, col);
	}

	var scanTarget = before ? newOffset	: newOffset + smallString.length;

	while (offset < scanTarget)
	{
		var char = bigString[offset];

		if (char === '\n')
		{
			offset++;
			row++;
			col = 1;
			continue;
		}

		if ((bigString.charCodeAt(offset) & 0xF800) === 0xD800)
		{
			offset += 2;
			col++;
			continue;
		}

		offset++;
		col++;
	}

	return tuple3(offset, row, col);
}


return {
	isSubString: F5(isSubString),
	isSubChar: F3(isSubChar),
	findSubString: F6(findSubString)
};

}();

var _elm_tools$parser_primitives$ParserPrimitives$findSubString = _elm_tools$parser_primitives$Native_ParserPrimitives.findSubString;
var _elm_tools$parser_primitives$ParserPrimitives$isSubChar = _elm_tools$parser_primitives$Native_ParserPrimitives.isSubChar;
var _elm_tools$parser_primitives$ParserPrimitives$isSubString = _elm_tools$parser_primitives$Native_ParserPrimitives.isSubString;

var _elm_tools$parser$Parser_Internal$isPlusOrMinus = function ($char) {
	return _elm_lang$core$Native_Utils.eq(
		$char,
		_elm_lang$core$Native_Utils.chr('+')) || _elm_lang$core$Native_Utils.eq(
		$char,
		_elm_lang$core$Native_Utils.chr('-'));
};
var _elm_tools$parser$Parser_Internal$isZero = function ($char) {
	return _elm_lang$core$Native_Utils.eq(
		$char,
		_elm_lang$core$Native_Utils.chr('0'));
};
var _elm_tools$parser$Parser_Internal$isE = function ($char) {
	return _elm_lang$core$Native_Utils.eq(
		$char,
		_elm_lang$core$Native_Utils.chr('e')) || _elm_lang$core$Native_Utils.eq(
		$char,
		_elm_lang$core$Native_Utils.chr('E'));
};
var _elm_tools$parser$Parser_Internal$isDot = function ($char) {
	return _elm_lang$core$Native_Utils.eq(
		$char,
		_elm_lang$core$Native_Utils.chr('.'));
};
var _elm_tools$parser$Parser_Internal$isBadIntEnd = function ($char) {
	return _elm_lang$core$Char$isDigit($char) || (_elm_lang$core$Char$isUpper($char) || (_elm_lang$core$Char$isLower($char) || _elm_lang$core$Native_Utils.eq(
		$char,
		_elm_lang$core$Native_Utils.chr('.'))));
};
var _elm_tools$parser$Parser_Internal$chomp = F3(
	function (isGood, offset, source) {
		chomp:
		while (true) {
			var newOffset = A3(_elm_tools$parser_primitives$ParserPrimitives$isSubChar, isGood, offset, source);
			if (_elm_lang$core$Native_Utils.cmp(newOffset, 0) < 0) {
				return offset;
			} else {
				var _v0 = isGood,
					_v1 = newOffset,
					_v2 = source;
				isGood = _v0;
				offset = _v1;
				source = _v2;
				continue chomp;
			}
		}
	});
var _elm_tools$parser$Parser_Internal$chompDigits = F3(
	function (isValidDigit, offset, source) {
		var newOffset = A3(_elm_tools$parser$Parser_Internal$chomp, isValidDigit, offset, source);
		return _elm_lang$core$Native_Utils.eq(newOffset, offset) ? _elm_lang$core$Result$Err(newOffset) : ((!_elm_lang$core$Native_Utils.eq(
			A3(_elm_tools$parser_primitives$ParserPrimitives$isSubChar, _elm_tools$parser$Parser_Internal$isBadIntEnd, newOffset, source),
			-1)) ? _elm_lang$core$Result$Err(newOffset) : _elm_lang$core$Result$Ok(newOffset));
	});
var _elm_tools$parser$Parser_Internal$chompExp = F2(
	function (offset, source) {
		var eOffset = A3(_elm_tools$parser_primitives$ParserPrimitives$isSubChar, _elm_tools$parser$Parser_Internal$isE, offset, source);
		if (_elm_lang$core$Native_Utils.eq(eOffset, -1)) {
			return _elm_lang$core$Result$Ok(offset);
		} else {
			var opOffset = A3(_elm_tools$parser_primitives$ParserPrimitives$isSubChar, _elm_tools$parser$Parser_Internal$isPlusOrMinus, eOffset, source);
			var expOffset = _elm_lang$core$Native_Utils.eq(opOffset, -1) ? eOffset : opOffset;
			return (!_elm_lang$core$Native_Utils.eq(
				A3(_elm_tools$parser_primitives$ParserPrimitives$isSubChar, _elm_tools$parser$Parser_Internal$isZero, expOffset, source),
				-1)) ? _elm_lang$core$Result$Err(expOffset) : (_elm_lang$core$Native_Utils.eq(
				A3(_elm_tools$parser_primitives$ParserPrimitives$isSubChar, _elm_lang$core$Char$isDigit, expOffset, source),
				-1) ? _elm_lang$core$Result$Err(expOffset) : A3(_elm_tools$parser$Parser_Internal$chompDigits, _elm_lang$core$Char$isDigit, expOffset, source));
		}
	});
var _elm_tools$parser$Parser_Internal$chompDotAndExp = F2(
	function (offset, source) {
		var dotOffset = A3(_elm_tools$parser_primitives$ParserPrimitives$isSubChar, _elm_tools$parser$Parser_Internal$isDot, offset, source);
		return _elm_lang$core$Native_Utils.eq(dotOffset, -1) ? A2(_elm_tools$parser$Parser_Internal$chompExp, offset, source) : A2(
			_elm_tools$parser$Parser_Internal$chompExp,
			A3(_elm_tools$parser$Parser_Internal$chomp, _elm_lang$core$Char$isDigit, dotOffset, source),
			source);
	});
var _elm_tools$parser$Parser_Internal$State = F6(
	function (a, b, c, d, e, f) {
		return {source: a, offset: b, indent: c, context: d, row: e, col: f};
	});
var _elm_tools$parser$Parser_Internal$Parser = function (a) {
	return {ctor: 'Parser', _0: a};
};
var _elm_tools$parser$Parser_Internal$Bad = F2(
	function (a, b) {
		return {ctor: 'Bad', _0: a, _1: b};
	});
var _elm_tools$parser$Parser_Internal$Good = F2(
	function (a, b) {
		return {ctor: 'Good', _0: a, _1: b};
	});

var _elm_tools$parser$Parser$changeContext = F2(
	function (newContext, _p0) {
		var _p1 = _p0;
		return {source: _p1.source, offset: _p1.offset, indent: _p1.indent, context: newContext, row: _p1.row, col: _p1.col};
	});
var _elm_tools$parser$Parser$sourceMap = F2(
	function (func, _p2) {
		var _p3 = _p2;
		return _elm_tools$parser$Parser_Internal$Parser(
			function (_p4) {
				var _p5 = _p4;
				var _p6 = _p3._0(_p5);
				if (_p6.ctor === 'Bad') {
					return A2(_elm_tools$parser$Parser_Internal$Bad, _p6._0, _p6._1);
				} else {
					var _p7 = _p6._1;
					var subString = A3(_elm_lang$core$String$slice, _p5.offset, _p7.offset, _p5.source);
					return A2(
						_elm_tools$parser$Parser_Internal$Good,
						A2(func, subString, _p6._0),
						_p7);
				}
			});
	});
var _elm_tools$parser$Parser$source = function (parser) {
	return A2(_elm_tools$parser$Parser$sourceMap, _elm_lang$core$Basics$always, parser);
};
var _elm_tools$parser$Parser$badFloatMsg = 'The `Parser.float` parser seems to have a bug.\nPlease report an SSCCE to <https://github.com/elm-tools/parser/issues>.';
var _elm_tools$parser$Parser$floatHelp = F3(
	function (offset, zeroOffset, source) {
		if (_elm_lang$core$Native_Utils.cmp(zeroOffset, 0) > -1) {
			return A2(_elm_tools$parser$Parser_Internal$chompDotAndExp, zeroOffset, source);
		} else {
			var dotOffset = A3(_elm_tools$parser$Parser_Internal$chomp, _elm_lang$core$Char$isDigit, offset, source);
			var result = A2(_elm_tools$parser$Parser_Internal$chompDotAndExp, dotOffset, source);
			var _p8 = result;
			if (_p8.ctor === 'Err') {
				return result;
			} else {
				var _p9 = _p8._0;
				return _elm_lang$core$Native_Utils.eq(_p9, offset) ? _elm_lang$core$Result$Err(_p9) : result;
			}
		}
	});
var _elm_tools$parser$Parser$badIntMsg = 'The `Parser.int` parser seems to have a bug.\nPlease report an SSCCE to <https://github.com/elm-tools/parser/issues>.';
var _elm_tools$parser$Parser$isX = function ($char) {
	return _elm_lang$core$Native_Utils.eq(
		$char,
		_elm_lang$core$Native_Utils.chr('x'));
};
var _elm_tools$parser$Parser$isO = function ($char) {
	return _elm_lang$core$Native_Utils.eq(
		$char,
		_elm_lang$core$Native_Utils.chr('o'));
};
var _elm_tools$parser$Parser$isZero = function ($char) {
	return _elm_lang$core$Native_Utils.eq(
		$char,
		_elm_lang$core$Native_Utils.chr('0'));
};
var _elm_tools$parser$Parser$intHelp = F3(
	function (offset, zeroOffset, source) {
		return _elm_lang$core$Native_Utils.eq(zeroOffset, -1) ? A3(_elm_tools$parser$Parser_Internal$chompDigits, _elm_lang$core$Char$isDigit, offset, source) : ((!_elm_lang$core$Native_Utils.eq(
			A3(_elm_tools$parser_primitives$ParserPrimitives$isSubChar, _elm_tools$parser$Parser$isX, zeroOffset, source),
			-1)) ? A3(_elm_tools$parser$Parser_Internal$chompDigits, _elm_lang$core$Char$isHexDigit, offset + 2, source) : (_elm_lang$core$Native_Utils.eq(
			A3(_elm_tools$parser_primitives$ParserPrimitives$isSubChar, _elm_tools$parser$Parser_Internal$isBadIntEnd, zeroOffset, source),
			-1) ? _elm_lang$core$Result$Ok(zeroOffset) : _elm_lang$core$Result$Err(zeroOffset)));
	});
var _elm_tools$parser$Parser$token = F2(
	function (makeProblem, str) {
		return _elm_tools$parser$Parser_Internal$Parser(
			function (_p10) {
				var _p11 = _p10;
				var _p13 = _p11.source;
				var _p12 = A5(_elm_tools$parser_primitives$ParserPrimitives$isSubString, str, _p11.offset, _p11.row, _p11.col, _p13);
				var newOffset = _p12._0;
				var newRow = _p12._1;
				var newCol = _p12._2;
				return _elm_lang$core$Native_Utils.eq(newOffset, -1) ? A2(
					_elm_tools$parser$Parser_Internal$Bad,
					makeProblem(str),
					_p11) : A2(
					_elm_tools$parser$Parser_Internal$Good,
					{ctor: '_Tuple0'},
					{source: _p13, offset: newOffset, indent: _p11.indent, context: _p11.context, row: newRow, col: newCol});
			});
	});
var _elm_tools$parser$Parser$delayedCommitMap = F3(
	function (func, _p15, _p14) {
		var _p16 = _p15;
		var _p17 = _p14;
		return _elm_tools$parser$Parser_Internal$Parser(
			function (state1) {
				var _p18 = _p16._0(state1);
				if (_p18.ctor === 'Bad') {
					return A2(_elm_tools$parser$Parser_Internal$Bad, _p18._0, state1);
				} else {
					var _p22 = _p18._1;
					var _p19 = _p17._0(_p22);
					if (_p19.ctor === 'Good') {
						return A2(
							_elm_tools$parser$Parser_Internal$Good,
							A2(func, _p18._0, _p19._0),
							_p19._1);
					} else {
						var _p21 = _p19._0;
						var _p20 = _p19._1;
						return (_elm_lang$core$Native_Utils.eq(_p22.row, _p20.row) && _elm_lang$core$Native_Utils.eq(_p22.col, _p20.col)) ? A2(_elm_tools$parser$Parser_Internal$Bad, _p21, state1) : A2(_elm_tools$parser$Parser_Internal$Bad, _p21, _p20);
					}
				}
			});
	});
var _elm_tools$parser$Parser$delayedCommit = F2(
	function (filler, realStuff) {
		return A3(
			_elm_tools$parser$Parser$delayedCommitMap,
			F2(
				function (_p23, v) {
					return v;
				}),
			filler,
			realStuff);
	});
var _elm_tools$parser$Parser$lazy = function (thunk) {
	return _elm_tools$parser$Parser_Internal$Parser(
		function (state) {
			var _p24 = thunk(
				{ctor: '_Tuple0'});
			var parse = _p24._0;
			return parse(state);
		});
};
var _elm_tools$parser$Parser$andThen = F2(
	function (callback, _p25) {
		var _p26 = _p25;
		return _elm_tools$parser$Parser_Internal$Parser(
			function (state1) {
				var _p27 = _p26._0(state1);
				if (_p27.ctor === 'Bad') {
					return A2(_elm_tools$parser$Parser_Internal$Bad, _p27._0, _p27._1);
				} else {
					var _p28 = callback(_p27._0);
					var parseB = _p28._0;
					return parseB(_p27._1);
				}
			});
	});
var _elm_tools$parser$Parser$apply = F2(
	function (f, a) {
		return f(a);
	});
var _elm_tools$parser$Parser$map2 = F3(
	function (func, _p30, _p29) {
		var _p31 = _p30;
		var _p32 = _p29;
		return _elm_tools$parser$Parser_Internal$Parser(
			function (state1) {
				var _p33 = _p31._0(state1);
				if (_p33.ctor === 'Bad') {
					return A2(_elm_tools$parser$Parser_Internal$Bad, _p33._0, _p33._1);
				} else {
					var _p34 = _p32._0(_p33._1);
					if (_p34.ctor === 'Bad') {
						return A2(_elm_tools$parser$Parser_Internal$Bad, _p34._0, _p34._1);
					} else {
						return A2(
							_elm_tools$parser$Parser_Internal$Good,
							A2(func, _p33._0, _p34._0),
							_p34._1);
					}
				}
			});
	});
var _elm_tools$parser$Parser_ops = _elm_tools$parser$Parser_ops || {};
_elm_tools$parser$Parser_ops['|='] = F2(
	function (parseFunc, parseArg) {
		return A3(_elm_tools$parser$Parser$map2, _elm_tools$parser$Parser$apply, parseFunc, parseArg);
	});
var _elm_tools$parser$Parser_ops = _elm_tools$parser$Parser_ops || {};
_elm_tools$parser$Parser_ops['|.'] = F2(
	function (keepParser, ignoreParser) {
		return A3(_elm_tools$parser$Parser$map2, _elm_lang$core$Basics$always, keepParser, ignoreParser);
	});
var _elm_tools$parser$Parser$map = F2(
	function (func, _p35) {
		var _p36 = _p35;
		return _elm_tools$parser$Parser_Internal$Parser(
			function (state1) {
				var _p37 = _p36._0(state1);
				if (_p37.ctor === 'Good') {
					return A2(
						_elm_tools$parser$Parser_Internal$Good,
						func(_p37._0),
						_p37._1);
				} else {
					return A2(_elm_tools$parser$Parser_Internal$Bad, _p37._0, _p37._1);
				}
			});
	});
var _elm_tools$parser$Parser$succeed = function (a) {
	return _elm_tools$parser$Parser_Internal$Parser(
		function (state) {
			return A2(_elm_tools$parser$Parser_Internal$Good, a, state);
		});
};
var _elm_tools$parser$Parser$run = F2(
	function (_p38, source) {
		var _p39 = _p38;
		var initialState = {
			source: source,
			offset: 0,
			indent: 1,
			context: {ctor: '[]'},
			row: 1,
			col: 1
		};
		var _p40 = _p39._0(initialState);
		if (_p40.ctor === 'Good') {
			return _elm_lang$core$Result$Ok(_p40._0);
		} else {
			return _elm_lang$core$Result$Err(
				{row: _p40._1.row, col: _p40._1.col, source: source, problem: _p40._0, context: _p40._1.context});
		}
	});
var _elm_tools$parser$Parser$Error = F5(
	function (a, b, c, d, e) {
		return {row: a, col: b, source: c, problem: d, context: e};
	});
var _elm_tools$parser$Parser$Context = F3(
	function (a, b, c) {
		return {row: a, col: b, description: c};
	});
var _elm_tools$parser$Parser$inContext = F2(
	function (ctx, _p41) {
		var _p42 = _p41;
		return _elm_tools$parser$Parser_Internal$Parser(
			function (_p43) {
				var _p44 = _p43;
				var _p46 = _p44.context;
				var state1 = A2(
					_elm_tools$parser$Parser$changeContext,
					{
						ctor: '::',
						_0: A3(_elm_tools$parser$Parser$Context, _p44.row, _p44.col, ctx),
						_1: _p46
					},
					_p44);
				var _p45 = _p42._0(state1);
				if (_p45.ctor === 'Good') {
					return A2(
						_elm_tools$parser$Parser_Internal$Good,
						_p45._0,
						A2(_elm_tools$parser$Parser$changeContext, _p46, _p45._1));
				} else {
					return _p45;
				}
			});
	});
var _elm_tools$parser$Parser$Fail = function (a) {
	return {ctor: 'Fail', _0: a};
};
var _elm_tools$parser$Parser$fail = function (message) {
	return _elm_tools$parser$Parser_Internal$Parser(
		function (state) {
			return A2(
				_elm_tools$parser$Parser_Internal$Bad,
				_elm_tools$parser$Parser$Fail(message),
				state);
		});
};
var _elm_tools$parser$Parser$ExpectingClosing = function (a) {
	return {ctor: 'ExpectingClosing', _0: a};
};
var _elm_tools$parser$Parser$ignoreUntil = function (str) {
	return _elm_tools$parser$Parser_Internal$Parser(
		function (_p47) {
			var _p48 = _p47;
			var _p50 = _p48.source;
			var _p49 = A6(_elm_tools$parser_primitives$ParserPrimitives$findSubString, false, str, _p48.offset, _p48.row, _p48.col, _p50);
			var newOffset = _p49._0;
			var newRow = _p49._1;
			var newCol = _p49._2;
			return _elm_lang$core$Native_Utils.eq(newOffset, -1) ? A2(
				_elm_tools$parser$Parser_Internal$Bad,
				_elm_tools$parser$Parser$ExpectingClosing(str),
				_p48) : A2(
				_elm_tools$parser$Parser_Internal$Good,
				{ctor: '_Tuple0'},
				{source: _p50, offset: newOffset, indent: _p48.indent, context: _p48.context, row: newRow, col: newCol});
		});
};
var _elm_tools$parser$Parser$ExpectingVariable = {ctor: 'ExpectingVariable'};
var _elm_tools$parser$Parser$ExpectingKeyword = function (a) {
	return {ctor: 'ExpectingKeyword', _0: a};
};
var _elm_tools$parser$Parser$keyword = function (str) {
	return A2(_elm_tools$parser$Parser$token, _elm_tools$parser$Parser$ExpectingKeyword, str);
};
var _elm_tools$parser$Parser$ExpectingSymbol = function (a) {
	return {ctor: 'ExpectingSymbol', _0: a};
};
var _elm_tools$parser$Parser$symbol = function (str) {
	return A2(_elm_tools$parser$Parser$token, _elm_tools$parser$Parser$ExpectingSymbol, str);
};
var _elm_tools$parser$Parser$ExpectingEnd = {ctor: 'ExpectingEnd'};
var _elm_tools$parser$Parser$end = _elm_tools$parser$Parser_Internal$Parser(
	function (state) {
		return _elm_lang$core$Native_Utils.eq(
			_elm_lang$core$String$length(state.source),
			state.offset) ? A2(
			_elm_tools$parser$Parser_Internal$Good,
			{ctor: '_Tuple0'},
			state) : A2(_elm_tools$parser$Parser_Internal$Bad, _elm_tools$parser$Parser$ExpectingEnd, state);
	});
var _elm_tools$parser$Parser$BadRepeat = {ctor: 'BadRepeat'};
var _elm_tools$parser$Parser$repeatExactly = F4(
	function (n, parse, revList, state1) {
		repeatExactly:
		while (true) {
			if (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) {
				return A2(
					_elm_tools$parser$Parser_Internal$Good,
					_elm_lang$core$List$reverse(revList),
					state1);
			} else {
				var _p51 = parse(state1);
				if (_p51.ctor === 'Good') {
					var _p52 = _p51._1;
					if (_elm_lang$core$Native_Utils.eq(state1.row, _p52.row) && _elm_lang$core$Native_Utils.eq(state1.col, _p52.col)) {
						return A2(_elm_tools$parser$Parser_Internal$Bad, _elm_tools$parser$Parser$BadRepeat, _p52);
					} else {
						var _v25 = n - 1,
							_v26 = parse,
							_v27 = {ctor: '::', _0: _p51._0, _1: revList},
							_v28 = _p52;
						n = _v25;
						parse = _v26;
						revList = _v27;
						state1 = _v28;
						continue repeatExactly;
					}
				} else {
					return A2(_elm_tools$parser$Parser_Internal$Bad, _p51._0, _p51._1);
				}
			}
		}
	});
var _elm_tools$parser$Parser$repeatAtLeast = F4(
	function (n, parse, revList, state1) {
		repeatAtLeast:
		while (true) {
			var _p53 = parse(state1);
			if (_p53.ctor === 'Good') {
				var _p54 = _p53._1;
				if (_elm_lang$core$Native_Utils.eq(state1.row, _p54.row) && _elm_lang$core$Native_Utils.eq(state1.col, _p54.col)) {
					return A2(_elm_tools$parser$Parser_Internal$Bad, _elm_tools$parser$Parser$BadRepeat, _p54);
				} else {
					var _v30 = n - 1,
						_v31 = parse,
						_v32 = {ctor: '::', _0: _p53._0, _1: revList},
						_v33 = _p54;
					n = _v30;
					parse = _v31;
					revList = _v32;
					state1 = _v33;
					continue repeatAtLeast;
				}
			} else {
				var _p55 = _p53._1;
				return (_elm_lang$core$Native_Utils.eq(state1.row, _p55.row) && (_elm_lang$core$Native_Utils.eq(state1.col, _p55.col) && (_elm_lang$core$Native_Utils.cmp(n, 0) < 1))) ? A2(
					_elm_tools$parser$Parser_Internal$Good,
					_elm_lang$core$List$reverse(revList),
					state1) : A2(_elm_tools$parser$Parser_Internal$Bad, _p53._0, _p55);
			}
		}
	});
var _elm_tools$parser$Parser$repeat = F2(
	function (count, _p56) {
		var _p57 = _p56;
		var _p59 = _p57._0;
		var _p58 = count;
		if (_p58.ctor === 'Exactly') {
			return _elm_tools$parser$Parser_Internal$Parser(
				function (state) {
					return A4(
						_elm_tools$parser$Parser$repeatExactly,
						_p58._0,
						_p59,
						{ctor: '[]'},
						state);
				});
		} else {
			return _elm_tools$parser$Parser_Internal$Parser(
				function (state) {
					return A4(
						_elm_tools$parser$Parser$repeatAtLeast,
						_p58._0,
						_p59,
						{ctor: '[]'},
						state);
				});
		}
	});
var _elm_tools$parser$Parser$ignoreExactly = F8(
	function (n, predicate, source, offset, indent, context, row, col) {
		ignoreExactly:
		while (true) {
			if (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) {
				return A2(
					_elm_tools$parser$Parser_Internal$Good,
					{ctor: '_Tuple0'},
					{source: source, offset: offset, indent: indent, context: context, row: row, col: col});
			} else {
				var newOffset = A3(_elm_tools$parser_primitives$ParserPrimitives$isSubChar, predicate, offset, source);
				if (_elm_lang$core$Native_Utils.eq(newOffset, -1)) {
					return A2(
						_elm_tools$parser$Parser_Internal$Bad,
						_elm_tools$parser$Parser$BadRepeat,
						{source: source, offset: offset, indent: indent, context: context, row: row, col: col});
				} else {
					if (_elm_lang$core$Native_Utils.eq(newOffset, -2)) {
						var _v36 = n - 1,
							_v37 = predicate,
							_v38 = source,
							_v39 = offset + 1,
							_v40 = indent,
							_v41 = context,
							_v42 = row + 1,
							_v43 = 1;
						n = _v36;
						predicate = _v37;
						source = _v38;
						offset = _v39;
						indent = _v40;
						context = _v41;
						row = _v42;
						col = _v43;
						continue ignoreExactly;
					} else {
						var _v44 = n - 1,
							_v45 = predicate,
							_v46 = source,
							_v47 = newOffset,
							_v48 = indent,
							_v49 = context,
							_v50 = row,
							_v51 = col + 1;
						n = _v44;
						predicate = _v45;
						source = _v46;
						offset = _v47;
						indent = _v48;
						context = _v49;
						row = _v50;
						col = _v51;
						continue ignoreExactly;
					}
				}
			}
		}
	});
var _elm_tools$parser$Parser$ignoreAtLeast = F8(
	function (n, predicate, source, offset, indent, context, row, col) {
		ignoreAtLeast:
		while (true) {
			var newOffset = A3(_elm_tools$parser_primitives$ParserPrimitives$isSubChar, predicate, offset, source);
			if (_elm_lang$core$Native_Utils.eq(newOffset, -1)) {
				var state = {source: source, offset: offset, indent: indent, context: context, row: row, col: col};
				return (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) ? A2(
					_elm_tools$parser$Parser_Internal$Good,
					{ctor: '_Tuple0'},
					state) : A2(_elm_tools$parser$Parser_Internal$Bad, _elm_tools$parser$Parser$BadRepeat, state);
			} else {
				if (_elm_lang$core$Native_Utils.eq(newOffset, -2)) {
					var _v52 = n - 1,
						_v53 = predicate,
						_v54 = source,
						_v55 = offset + 1,
						_v56 = indent,
						_v57 = context,
						_v58 = row + 1,
						_v59 = 1;
					n = _v52;
					predicate = _v53;
					source = _v54;
					offset = _v55;
					indent = _v56;
					context = _v57;
					row = _v58;
					col = _v59;
					continue ignoreAtLeast;
				} else {
					var _v60 = n - 1,
						_v61 = predicate,
						_v62 = source,
						_v63 = newOffset,
						_v64 = indent,
						_v65 = context,
						_v66 = row,
						_v67 = col + 1;
					n = _v60;
					predicate = _v61;
					source = _v62;
					offset = _v63;
					indent = _v64;
					context = _v65;
					row = _v66;
					col = _v67;
					continue ignoreAtLeast;
				}
			}
		}
	});
var _elm_tools$parser$Parser$ignore = F2(
	function (count, predicate) {
		var _p60 = count;
		if (_p60.ctor === 'Exactly') {
			return _elm_tools$parser$Parser_Internal$Parser(
				function (_p61) {
					var _p62 = _p61;
					return A8(_elm_tools$parser$Parser$ignoreExactly, _p60._0, predicate, _p62.source, _p62.offset, _p62.indent, _p62.context, _p62.row, _p62.col);
				});
		} else {
			return _elm_tools$parser$Parser_Internal$Parser(
				function (_p63) {
					var _p64 = _p63;
					return A8(_elm_tools$parser$Parser$ignoreAtLeast, _p60._0, predicate, _p64.source, _p64.offset, _p64.indent, _p64.context, _p64.row, _p64.col);
				});
		}
	});
var _elm_tools$parser$Parser$keep = F2(
	function (count, predicate) {
		return _elm_tools$parser$Parser$source(
			A2(_elm_tools$parser$Parser$ignore, count, predicate));
	});
var _elm_tools$parser$Parser$BadFloat = {ctor: 'BadFloat'};
var _elm_tools$parser$Parser$float = _elm_tools$parser$Parser_Internal$Parser(
	function (_p65) {
		var _p66 = _p65;
		var _p77 = _p66.source;
		var _p76 = _p66.row;
		var _p75 = _p66.offset;
		var _p74 = _p66.indent;
		var _p73 = _p66.context;
		var _p72 = _p66.col;
		var _p67 = A3(
			_elm_tools$parser$Parser$floatHelp,
			_p75,
			A3(_elm_tools$parser_primitives$ParserPrimitives$isSubChar, _elm_tools$parser$Parser$isZero, _p75, _p77),
			_p77);
		if (_p67.ctor === 'Err') {
			var _p68 = _p67._0;
			return A2(
				_elm_tools$parser$Parser_Internal$Bad,
				_elm_tools$parser$Parser$BadFloat,
				{source: _p77, offset: _p68, indent: _p74, context: _p73, row: _p76, col: _p72 + (_p68 - _p75)});
		} else {
			var _p71 = _p67._0;
			var _p69 = _elm_lang$core$String$toFloat(
				A3(_elm_lang$core$String$slice, _p75, _p71, _p77));
			if (_p69.ctor === 'Err') {
				return _elm_lang$core$Native_Utils.crashCase(
					'Parser',
					{
						start: {line: 733, column: 9},
						end: {line: 745, column: 16}
					},
					_p69)(_elm_tools$parser$Parser$badFloatMsg);
			} else {
				return A2(
					_elm_tools$parser$Parser_Internal$Good,
					_p69._0,
					{source: _p77, offset: _p71, indent: _p74, context: _p73, row: _p76, col: _p72 + (_p71 - _p75)});
			}
		}
	});
var _elm_tools$parser$Parser$BadInt = {ctor: 'BadInt'};
var _elm_tools$parser$Parser$int = _elm_tools$parser$Parser_Internal$Parser(
	function (_p78) {
		var _p79 = _p78;
		var _p90 = _p79.source;
		var _p89 = _p79.row;
		var _p88 = _p79.offset;
		var _p87 = _p79.indent;
		var _p86 = _p79.context;
		var _p85 = _p79.col;
		var _p80 = A3(
			_elm_tools$parser$Parser$intHelp,
			_p88,
			A3(_elm_tools$parser_primitives$ParserPrimitives$isSubChar, _elm_tools$parser$Parser$isZero, _p88, _p90),
			_p90);
		if (_p80.ctor === 'Err') {
			var _p81 = _p80._0;
			return A2(
				_elm_tools$parser$Parser_Internal$Bad,
				_elm_tools$parser$Parser$BadInt,
				{source: _p90, offset: _p81, indent: _p87, context: _p86, row: _p89, col: _p85 + (_p81 - _p88)});
		} else {
			var _p84 = _p80._0;
			var _p82 = _elm_lang$core$String$toInt(
				A3(_elm_lang$core$String$slice, _p88, _p84, _p90));
			if (_p82.ctor === 'Err') {
				return _elm_lang$core$Native_Utils.crashCase(
					'Parser',
					{
						start: {line: 638, column: 9},
						end: {line: 650, column: 16}
					},
					_p82)(_elm_tools$parser$Parser$badIntMsg);
			} else {
				return A2(
					_elm_tools$parser$Parser_Internal$Good,
					_p82._0,
					{source: _p90, offset: _p84, indent: _p87, context: _p86, row: _p89, col: _p85 + (_p84 - _p88)});
			}
		}
	});
var _elm_tools$parser$Parser$BadOneOf = function (a) {
	return {ctor: 'BadOneOf', _0: a};
};
var _elm_tools$parser$Parser$oneOfHelp = F3(
	function (state, problems, parsers) {
		oneOfHelp:
		while (true) {
			var _p91 = parsers;
			if (_p91.ctor === '[]') {
				return A2(
					_elm_tools$parser$Parser_Internal$Bad,
					_elm_tools$parser$Parser$BadOneOf(
						_elm_lang$core$List$reverse(problems)),
					state);
			} else {
				var _p92 = _p91._0._0(state);
				if (_p92.ctor === 'Good') {
					return _p92;
				} else {
					if (_elm_lang$core$Native_Utils.eq(state.row, _p92._1.row) && _elm_lang$core$Native_Utils.eq(state.col, _p92._1.col)) {
						var _v79 = state,
							_v80 = {ctor: '::', _0: _p92._0, _1: problems},
							_v81 = _p91._1;
						state = _v79;
						problems = _v80;
						parsers = _v81;
						continue oneOfHelp;
					} else {
						return _p92;
					}
				}
			}
		}
	});
var _elm_tools$parser$Parser$oneOf = function (parsers) {
	return _elm_tools$parser$Parser_Internal$Parser(
		function (state) {
			return A3(
				_elm_tools$parser$Parser$oneOfHelp,
				state,
				{ctor: '[]'},
				parsers);
		});
};
var _elm_tools$parser$Parser$Exactly = function (a) {
	return {ctor: 'Exactly', _0: a};
};
var _elm_tools$parser$Parser$AtLeast = function (a) {
	return {ctor: 'AtLeast', _0: a};
};
var _elm_tools$parser$Parser$zeroOrMore = _elm_tools$parser$Parser$AtLeast(0);
var _elm_tools$parser$Parser$oneOrMore = _elm_tools$parser$Parser$AtLeast(1);

var _user$project$App_Source$grammar = '\n\n\\title{MiniLaTeX Grammar (Draft)}\n\n\\author{James A. Carlson}\n\n\\email{jxxcarlson at gmail}\n\n\\date{January 12, 2018}\n\n\\maketitle\n\n\\tableofcontents\n\n\n  $$\n  \\newcommand{\\dollar}{ \\text{$ \\$ $} }\n  \\newcommand{\\begg}[1]{\\text{\\begin{$#1$}}}\n  \\newcommand{\\endd}[1]{\\text{\\end{$#1$}}}\n  $$\n\n  \\section{Introduction}\n\n  In this article, we describe a formal grammar which defines the MiniLaTeX language.  MiniLaTex is a subset of LaTeX, and  text written in it can be translated into HTML by means of a suitable parser-renderer.  Because of the balanced begin-end pairs characteristic of LaTeX environments and the fact that the number of distinct such pairs is arbitrary, the grammar is not context-free.  The context sensitivity is, however, limited.  Indeed, it occurs in only in the productions for environments and tables, so that the grammatical description is \"almost EBNF.\"\n\n  The MiniLaTex parser is written in Elm.  Elm is the functional language for creating web apps developed by Evan Czaplicki, first announced in his Harvard senior thesis (2012).  The  choice of language was governed by two considerations. First, Elm provides excellent tools for creating fast, reliable web apps with a codebase that is maintainable over the long run.  This was an important consideration, since the point of MiniLaTeX is to be able to create, edit, and distribute technical documents in HTML.  The second consideration is that Elm, with its ML-flavored type system and an expressive parser combinator library, is well-suited to the task of realizing a grammar.  The resulting parser is quite compact --- just 336 lines of code as of this writing.\n\n  A second implementation of the parser in Haskell is planned in order to have additional validation of MiniLaTeX and to make it more widely available.  The Haskell parser will be released with a command-line tool for translating MiniLaTeX into HTML.\n\n  The code for the MiniLaTeX parser-renderer is open source, available on  \\href{https://github.com/jxxcarlson/minilatex}{GitHub}\n  and also as an Elm package at \\href{http://package.elm-lang.org/packages/jxxcarlson/minilatex/latest}{package.elm-lang.org} --- search for \\code{jxxcarlson/minilatex}.\n  To experiment with MiniLaTeX, try the \\href{https://jxxcarlson.github.io/app/minilatex/src/index.html}{Demo App}.  To use MiniLaTeX to create documents, try \\href{http://www.knode.io}{www.knode.io}\n\n  I am indebted to Ilias van Peer for thoughtful suggestions and specific technical help through the entire course of this project.  I would also like to thank Evan Czaplicki, who brought Elm\'s \\href{https://github.com/elm-tools/parser}{elm-tools/parser} package to my attention; its role is fundamental.\n\n  This document is written in MiniLaTeX and is available on the web at\n  \\href{http://www.knode.io/#@public/628}{www.knode.io/#@public/628}.\n\n\n\n  \\section{Abstract Syntax Tree}\n\n  The MiniLatex parser accepts text as input and produces an abstract syntax tree (AST) as output.  An AST is a $LatexExpression$, as defined by the following type.\n\n  \\begin{verbatim}\n  type LatexExpression\n      = LXString String\n      | Comment String\n      | InlineMath String\n      | DisplayMath String\n      | Item Int LatexExpression\n      | Macro String (List LatexExpression)\n      | Environment String LatexExpression\n      | LatexList (List LatexExpression)\n  \\end{verbatim}\n\n  The translation from source text to abstract syntax tree is accomplished by a function in the \\code{MiniLatex.Parser} module:\n\n  \\begin{equation}\n  parse: {\\tt String} \\rightarrow {\\tt LatexExpression}.\n  \\end{equation}\n\n  The abstract syntax tree of MiniLaTeX text carries the information\n  needed to render it either as LaTeX or as HTML. Thus one can construct functions\n\n\n  \\begin{align}\n  renderToLatex &: LatexExpression \\rightarrow String \\\\\n  renderToHtml &: LatexExpression \\rightarrow String\n  \\end{align}\n\n  One might think of the function $renderToLatex$ as an inverse of $parse$, since it reverses the role of domain and codomain.  Nonetheless, this is not the case, since one can make changes to the source text which do not affect the AST.  It is possible, however, to state a related property.  Let\n   $f = renderToLatex\\circ parse$.  This is a function \\code{String -> String}; although one cannot assert that $f = id$, one has the\n  idempotency relation $f\\circ f = f$.\n\n\n\n  \\section{Terminals and Non-Terminals}\n\n  Let us now describe the grammar, beginning with terminal and nonterminal symbols.  In the next section we list and discuss the productions of this grammar.\n\n  \\subheading{Terminals}\n\n\\begin{enumerate}\n\n  \\item $spaces \\Rightarrow sp^*$, where $sp$ is the space character.\n\n  \\item $ws \\Rightarrow \\{ sp, nl \\}^*$, where $nl$ is the newline character.\n\n  \\item $reservedWord \\Rightarrow \\{ \\backslash begin, \\backslash end, \\backslash item \\}$\n\n  \\item $word \\Rightarrow (Char - \\{sp, nl, backslash, dollarSign \\})^+$ -- Nonempty strings without whitespace characters, backslashes or dollar signs\n\n  \\item $specialWord \\Rightarrow (Char - \\{sp, nl, backslash, dollarSign, \\}, \\& \\})^+$\n\n  \\item $macroName \\Rightarrow  (Char - \\{sp, nl, , leftBrace, backslash\\})^+ - reservedWord$\n\n\\end{enumerate}\n\n  Associated with these terminals are productions $Word \\Rightarrow word$, $Identifier \\Rightarrow identifier$, etc.  We shall not list all of these, but rather just the terminal and a description of it.\n\n\n\n  \\subheading{Non-Terminals}\n\n\n  \\begin{enumerate}\n  \\item $Arg$ -- arguments for macros\n  \\item $BeginWord$ -- produce $\\begg{identifier}$ phrase for LaTeX environments.\n  \\item $Comment$ -- LaTeX comments -- \\% foo, bar\n  \\item $IMath$ -- inline mathematical text, as in $\\dollar$ ... $\\dollar$\n  \\item $DMath$ -- display mathematical text, as in $\\dollar\\dollar$ ... $\\dollar\\dollar$ or $\\backslash[\\ ... \\backslash]$.\n  \\item $Env$ -- LaTeX environments $\\begg{foo}\\ $ ... $\\endd{foo}$.\n  \\item $EnvName$ -- produce an environment name such as \\italic{foo}, or \\italic{theorem}.\n  \\item $Identifier$ -- a lowercase alphanumeric string beginning with a letter.\n  \\item $Item$ -- item in an enumeration or itemization environemnt\n  \\item $LatexExpression$ -- a union type\n  \\item $LatexList$ -- a list of LatexExpressions\n  \\item $Macro$ -- a LaTeX macro of zero or more arguments.\n  \\item $MacroName$ -- an identifier\n  \\item $Words$ -- a string obtained by joining a list of $Word$ with spaces.\n  \\end{enumerate}\n\n\n  \\section{Productions}\n\n\n\n  The MiniLaTeX grammar is defined by its productions.  This set is fairly small, just 24 if one discounts productions which could be viewed as performing lexical analysis -- the recognition of identifiers, for instance.  Of the 24 productions, 11 are for general nonterminals, 7 are for environments of various kinds, and 5 are for the tabular environment.  With two exceptions we present them in EBNF form.  The topmost productions are for $LatexList$ and $LatexExpression$:\n\n  \\begin{align}\n  \\label{Production:LatexExpression}\n  LatexList &\\Rightarrow LatexExpression^+ \\\\\n  LatexExpression &\\Rightarrow Words\\ |\\ Comment\\ |\\ IMath\\ |\\ DMath\\  \\\\\n  & \\phantom{\\Rightarrow}\\ |\\ Macro\\ |\\ Env\n  \\end{align}\n\n  The productions for the first four non-terminals on the right-hand side of \\eqref{Production:LatexExpression} are non-recursive, straightforward, and all result in a terminal.\n  The terminal is of the form $Constructor\\ x$, where the first term is a constructor for $LatexExpression$ and $x$ is a string.  When $A$ is a non-terminal, ${\\tt A}$ is the\n  corresponding constructor.\n\n\\begin{enumerate}\n\n  \\item $ Words  \\Rightarrow {\\tt LXString}\\ (join\\ Word^+) $ where a $Word$ is any sequence of characters which is not a whitespace character, $\\backslash$, or $\\dollar$, and where $join$ is the function which joins the elements of a list of strings by single spaces to produce a string.\n\n  \\item $ Comment \\Rightarrow {\\tt Comment}\\ (Char - \\{ \\text{\\n}\\})^* $\n\n  \\item $ IMath  \\Rightarrow {\\tt IMath}\\ Line\'$ where $Line\'$ is $Line$ with no occurernce of $\\dollar$\n\n  \\item $ DMath  \\Rightarrow {\\tt DMath}\\ Line\'\\ |\\ {\\tt DMath}\\ Line\'\' $ | where $Line\'\'$ is $Line$ with no occurrence of of a right bracket.\n\n\\end{enumerate}\n\n  Let us now treat the two recursive productions. They generate LaTeX macros and environments.\n\n\n  \\subsection{Macros}\n\n  \\begin{align}\n  Macro &\\Rightarrow {\\tt Macro}\\ Macroname\\ Arg^* \\\\\n  Arg &\\Rightarrow Words\\ |\\ IMath\\ |\\ Macro\n  \\end{align}\n\n\n  \\subsection{Environments}\n\n\n  Because of the use of constructions of the form\n\n  \\begin{verbatim}\n  \\begin{envName}\n  ...\n  \\end{envName}\n  \\end{verbatim}\n\n  the production of environments requires  the use of a context-sensitive grammar.\n  Here $envName$ may take on arbitrarily many values, and, in particular, values not known at the time the parser is written.  Note that the production \\eqref{production:envname} below has a nonterminal followed by a terminal on the right-hand side, while \\eqref{production:env} has a nonterminal followed by a terminal on the left-hand side.  The presence of a terminal on the left-hand side tells us that the grammar is context-sensitive. In $Env\\ identifier$, the terminal $identifier$ provides the context.\n\n  \\begin{equation}\n  \\label{production:envname}\n  EnvName \\Rightarrow Env\\ identifier\n  \\end{equation}\n\n  \\begin{align}\n  \\label{production:env}\n  Env\\ {\\rm itemize} & \\Rightarrow {\\tt Environment}\\ {\\rm itemize}\\ Item^+ \\\\\n  Env\\ {\\rm enumerate} & \\Rightarrow {\\tt Environment}\\ {\\rm enumerate}\\ Item^+\\\\\n  Env\\ {\\rm tabular} & \\Rightarrow {\\tt Environment}\\ {\\rm tabular} \\ Table \\\\\n  Env\\ passThroughIdentifier & \\Rightarrow {\\tt Environment}\\ passThroughIdentifier\\ Text \\\\\n  Env\\ genericIdentifier & \\Rightarrow {\\tt Environment}\\ genericIdentifier\\ LatexList \\\\\n  \\end{align}\n\n  The set of all $envNames$ is decomposed as follows:\n\n  \\begin{align}\n  specialIdentifier &= \\{ \\text{itemize, enumerate, tabular} \\} \\\\\n  passThroughIdentifier &= \\{ \\text{equation, align, eqnarray, verbatim, verse} \\} \\\\\n  genericIdentifier &= identifier - specialIdentifier - passThroughIdentifier\n  \\end{align}\n\n\n  \\subsection{Tabular Environment}\n\n  The tabular environment also requires a context-sensitive grammar.\n\n  \\begin{align}\n  Table &\\Rightarrow TableHead\\ (TableRows\\ ncols)^+ \\\\\n  TableRows\\ ncols &\\Rightarrow TableCells^{ncols}\n  \\end{align}\n\n\n\n';
var _user$project$App_Source$nongeodesic = '\n\n\n \\title{Non-geodesic variations of Hodge structure of maximum dimension}\n\n  \\author{James A. Carlson and Domingo Toledo}\n\n  \\date{November 1, 2017}\n\n\n\n\n  \\maketitle\n\n\\tableofcontents\n\n\n  \\begin{abstract}\n  There are a number of examples of variations of Hodge structure of maximum dimension.  However, to our knowledge, those that are global on the level of the period domain are totally geodesic subspaces that arise from an orbit of a subgroup of the group of the period domain. That is, they are defined by Lie theory rather than by algebraic geometry.  In this note, we give an example of a variation of maximum dimension which is nowhere tangent to a geodesic variation.  The period domain in question, which classifies weight two Hodge structures with $h^{2,0} = 2$ and $h^{1,1} = 28$, is of dimension $57$. The horizontal tangent bundle has codimension one, thus it is an example of a holomorphic contact structure, with local integral manifolds of dimension 28. The group of the period domain is $SO(4,28)$, and one can produce global integral manifolds as orbits of the action of subgroups isomorphic to $SU(2,14)$.  Our example is given by the variation of Hodge structure on the second cohomology of weighted projective hypersurfaces of degree $10$ in a weighted projective three-space with weights\n  $1, 1, 2, 5$\n  \\end{abstract}\n\n  \\section{Introduction}\n  \\label{sec:introduction}\n\n\n$$\n\\newcommand{\\C}{\\mathbb{C}}\n\\newcommand{\\P}{\\mathbb{P}}\n\\newcommand{\\Q}{\\mathbb{Q}}\n\\newcommand{\\R}{\\mathbb{R}}\n\\newcommand{\\bH}{\\mathbf{H}}\n\\newcommand{\\hodge}{\\mathcal{H}}\n\\newcommand{\\surfs}{\\mathcal{S}}\n\\newcommand{\\var}{\\mathcal{V}}\n\\newcommand{\\Hom}{\\text{Hom}}\n$$\n\n  Period domains $D = G/V$ for $G$ a (semi-simple, adjoint linear Lie group with a compact Cartan subgroup $T\\subset G$ and $V$ the centralizer of a sub-torus of $T$) occur in many interesting situations.  It is known that there is a unique maximal compact subgroup $K\\subset G$ containing $V$,\n  so that there is a fibration\n  \\begin{equation}\n  \\label{eq:fibration}\n  K/V \\longrightarrow  G/V \\buildrel \\pi \\over\\longrightarrow  G/K\n  \\end{equation}\n  of the homogeneous complex manifold $G/V$ onto the symmetric space $G/K$ with fiber the homogeneous projective variety $K/V$.  The tangent bundle $TD$ has a distinguished \\emph{horizontal sub-bundle} $T_h D$ (also called the \\emph{infinitesimal period relation}). It is a sub-bundle of the differential-geometric horizontal bundle (the orthogonal complement of the tangent bundle to the fibers). It usually, but not always a proper sub-bundle. When it is a proper sub-bundle, it is not integrable.  Typically, successive brackets of vector fields in $T_hD$ generate all of $ TD$.  We are interested in the case where the symmetric space $G/K$ is \\emph{not} Hermitian symmetric.  In that case, the complex manifold $D$ admits invariant pseudo-K\\\"ahler metrics, but no invariant K\\\"ahler metric.\n\n  These manifolds were introduced by Griffiths as a category of manifolds that contains the classifying spaces  of Hodge structures.  For example, if $(H, \\left< \\ , \\ \\right>)$ is a real vector space of dimension $2p+q$ with a symmetric bilinear form of signature $2p,q$,\n  the manifolds $SO(2p,q)/U(p)\\times SO(q)$ classify Hodge decompositions  of weight two. Thus, we\n  have a direct sum decomposition\n\n  \\begin{equation}\n  \\label{ eq:hodgedecomp}\n  H^\\C = H^{2,0}\\oplus H^{1,1}\\oplus H^{0,2}\n  \\end{equation}\n\n  with Hodge numbers (dimensions)  $h^{2,0} = h^{0,2} = p $, $h^{1,1} = q$, and polarized by $\\left< \\ , \\ \\right>$: The real points of $H^{2,0}\\oplus H^{0,2}$ form a maximal positive subspace, $H^{1,1}$ is the complexification of its  orthogonal complement\n  (a maximal negative subspace), and so $(H^{2.0})^\\perp = H^{2,0}\\oplus H^{1,1}$.   Therefore the filtration\n  \\begin{equation}\n  \\label{eq:hodgefiltration}\n  H^{2,0}\\subset (H^{2,0})^\\perp \\subset H^\\C\n  \\end{equation}\n  of $H^\\C$ is the same as the Hodge filtration.  Therefore $H^{2,0}$ determines the Hodge filtration, hence the Hodge decomposition.  Note that $\\left< u,\\overline{v} \\right>$ is a positive Hermitian inner product on $H^{2,0}$\n\n  The special orthogonal group of $\\left< \\ ,\\ \\right>$, isomorphic to $SO(2p,q)$, acts transitively on the choices of $H^{2,0}$, and the subgroup fixing one choice is isomorphic to $U(p)\\times SO(q)$.\n  Thus, the homogeneous complex manifold $D = SO(2p,q)/U(p)\\times SO(q)$ classifies polarized Hodge structures on a \\emph{fixed} vector space $(H, \\left< \\ ,\\  \\right>)$.  Over $D$, there are tautological Hodge bundles $\\hodge^{2,0},\\hodge^{1,1},\\hodge^{0,2}$.  The tangent bundle $TD$ and horizontal sub-bundle are\n\n  \\begin{equation}\n  \\label{eq:hodgebundles}\n  TD = Hom_{\\left< \\ ,\\ \\right>}(\\hodge^{2,0},\\hodge^{1,1}\\oplus \\hodge^{0,2}),\\ \\ T_hD = Hom(\\hodge^{2,0},\\hodge^{1,1}),\n  \\end{equation}\n\n  where $Hom_{\\left< \\ ,\\ \\right>}$ means homomorphisms $X$ which  preserving $\\left< \\  , \\  \\right>$ infinitesimally, that is, $\\left< Xu,v \\right> + \\left< u,Xv \\right> = 0$ for all $u,v \\in H^{2,0}$.  If $X:H^{2,0}\\to H^{1,1}$ this condition is vacuous, since $\\left< H^{2,0},H^{1,1} \\right> = 0$. Therefore $Hom_{\\left< \\ ,\\ \\right>}(\\hodge^{2,0},\\hodge^{1,1}) = Hom(\\hodge^{2,0},\\hodge^{1,1})$.\n\n  Whenever $p > 1$, the horizontal tangent bundle is a proper sub-bundle of the  tangent bundle.  The first interesting case is $p = 2$. If in addition $q = 2r$ is even, then the horizontal distribution locally a contact distribution, i.e., is the null space of a form $\\omega = dz - (x_1 dy_1 + \\cdots + x_r dy_r)$ in suitable local coordinates $(x,y,z)$.  Our example of weighted hypersurfaces yields a variation of Hodge structure of this type.\n\n  \\subsection{Construction of horizontal maps}\n  \\label{subsec:construction}\n\n\n  The  two main sources of horizontal holomorphic maps to period domains are\n\n\\emph{Totally geodesic maps}:  these come from Lie group theory, as orbits of suitable Lie subgroups of $G$.  For example, for the domains $SO(2p,2q)/U(p)\\times SO(2q)$, we can put a complex structure $J$  on the underlying $\\R$-vector space $H$, compatible with $< \\ , \\ >$.  Let $H^+, H^-$ denote the underlying real spaces of $H^{2,0}\\oplus H^{0,2}$ and $H^{1,1}$ respectively. Consider the variation in which all $H^+$ are $J$-invariant.  This gives an embedding\n\n     \\begin{equation}\n  \\label{ }\n  SU(p,q)/S(U(p)\\times U(q)) \\buildrel F \\over\\longrightarrow  SO(2p,2q)/U(p) \\nonumber\\times SO(2q)\n  \\end{equation}\n\n  of the Hermitian symmetric space $D_1$ for $SU(p,q)$ in the domain $D$.     Since $H^+$ always remains $J$-invariant, the tangent vector to its motion, an element of $Hom(H^+,H^-)$ commutes with $J$.  Let $V\\subset H^{1,1}$ be the space of $(1,0)$-vectors for $J$, that is, $V = \\{X - iJX \\ | X\\in H^{1,1}\\}$.   Then\n\n\n\\begin{equation}\n  dF:TD_1 \\to Hom(H^{2,0},V) \\subset Hom(H^{2,0},H^{1,1} )= T_hD \\nonumber\n\\end{equation}\n\nin particular $F$ is horizontal and holomorphic.\n\n\n\\emph{Periods of  families of algebraic varieties}  This may be called the geometric method.  We proceed to explain it by describing the special case of  $SO(2p,2q)$:}\n\n\n\n   Let $\\surfs \\to B$ be smooth algebraic family of smooth projective algebraic surfaces over a smooth connected algebraic base $B$, fix a base point $b_0\\in B$, and fix $(H, \\left<\\ , \\ \\right>)$ to be the pair ($H^2(\\surfs_{b_0},\\R)_{prim}$, intersection form).  For any $b\\in B$ and a path $\\lambda$ from $b_0$ to $b$, there is an isomorphism $\\lambda^\\#:H^2(\\surfs_b)\\to H^2(\\surfs_{b_0})$, where different paths give different isomorphisms related by an element of the image of the monodromy representation $\\rho:\\pi_1(B,b_0) \\to Aut(H^2_{prim}(\\surfs_{b_0}))$. The \\emph{period map} $F$  is defined by the rule:  $F(b)$ is the Hodge structure $\\lambda^\\#$(Hodge structure on $H^2(\\surfs_b)$).  In this way, $F(b)$ is a Hodge structure on a fixed vector space, hence an element of $D$, well defined up to the action of the monodromy group.  We could look at this as a function of $b$ and $\\lambda$, in which case we are lifting $F$ to a map $\\widetilde{F}$ on a covering space of $B$.   Thus we have two equivalent formulations $F, \\widetilde{F}$ of the period map related as follows:\n    \\begin{eqnarray}\n  \\begin{array}{ccc}\n  \\label{eq:periodmaps}\n      \\widetilde{B} &  \\buildrel \\widetilde{F} \\over\\longrightarrow  & D  \\\\\n  {p}\\Big\\downarrow & & \\Big\\downarrow   \\\\\n  B & \\buildrel F\\over \\longrightarrow & \\Gamma\\backslash D\n  \\end{array}\n  \\end{eqnarray}\n  where $p:\\widetilde{B}\\to B$ is the covering corresponding to the kernel of $\\rho$ and  $\\Gamma$ is a suitable monodromy group (containing the image of $\\rho$).     Locally, the two maps $F, \\widetilde{F}$ are the same, except when $F(b)$ is fixed by some non-identity element of $\\Gamma$.\n\n\n  Griffiths showed that \\emph{$F$ is holomorphic and horizontal}, in other words, $d\\widetilde{F}:T\\widetilde{B}\\to F^*T_h D \\subset T D$.  Under suitable assumptions, the closure  $\\overline{F(B)}$ is an analytic subvariety of $\\Gamma\\backslash D$, hence is a closed \\emph{horizontal analytic subvariety} of $\\Gamma\\backslash D$.\n\n  \\subsection{A concrete example}\n\n  The preceding discussion can be applied to the family of smooth hypersurfaces in $\\P^3$ of a fixed degree $d$.  In order to get non-constant variations and for the period domain not to be Hermitan symmetric we need to take $d\\ge 5$.\n\n  For $d=5$ we have that the Hodge numbers are $(4,44,4)$, hence $D = SO(8,44) / U(4)\\times SO(44)$ has dimension $182$, the horizontal tangent space has dimension $176$ and the maximum dimension of an integral submanifold is $88$, the dimension of the horizontal $SU(4,22)$ orbit, see \\cite{carlson}\n\n  We therefore find two horizontal maps:\n  \\begin{itemize}\n    \\item Horizontal $SU(4,22)$ orbits of maximum dimension $88$.\n    \\item Periods of quintic surfaces, a \\emph{maximal} integral manifold, see \\cite{carlsondonagi} of dimension $40$ (the dimension of the moduli space of quintic surfaces).\n  \\end{itemize}\n\n  In general, period domains, can have maximal integral manifolds of many different dimensions. Hypersurfaces generally yield integral manifolds of rather small dimension compared to the the maximum possible.  We would like to see geometric  examples of maximum, or close to maximum, dimension that come from geometry as opposed to Lie theory.   Hypersurfaces in weighted projective spaces provide such examples.\n\n  \\section{The example}\n  \\label{sec:example}\n\n  Let us consider the weighted projective space $\\P(1,1,2,5)$ with coordinates $x_1,x_2,x_3,x_4$ with weights $1,1,2,5$ respectively.  One may think of $\\P(1,1,2,5)$ as the quotient of $\\C^4$ by the $\\C^*$-action  $\\lambda\\in \\C^*$ which acts by\n  \\begin{equation}\n  \\label{eq:weightaction}\n  \\lambda \\cdot (x_1,x_2,x_3,x_4) \\longrightarrow (\\lambda x_1,\\lambda x_2, \\lambda^2 x_3, \\lambda^5 x_4)\n  \\end{equation}\n  A weighted homogeneous polynomial of degree $d$  is a linear combination of monomials\n  \\begin{equation}\n  \\label{eq:monomials}\n  x_1^{k_1} x_2^{k_2} x_3^{k_3}x_4^{k_4} \\text{ of total weighted degree } d = k_1 + k_2 + 2 k_3 + 5 k_4\n  \\end{equation}\n\n  For fixed $d$, the collection of weighted polynomials of degree $d$ forms a vector space that we will denote $S_d(1,1,2,5)$, or, simply $S_d$.   The direct sum $S(1,1,2,5) = \\oplus_d S_d(1,1,2,5)$ is the algebra of weighted homogeneous polynomials.\n\n  Any $f\\in S_d$ defines a subvariety $V_f\\subset P(1,1,2,5)$, namely $V_f = \\{(x_1:x_2:x_3:x_4) | f(x_1,x_2,x_3,x_4) = 0 \\}$.  If the only common solution of\n\n  \\begin{equation}\n  \\frac{\\partial f}{\\partial x_1} = 0,\\dots, \\frac{\\partial f}{\\partial x_4} =0  \\nonumber\n  \\end{equation}\n\n  is  $(0,0,0,0)$, then $V_f$ is called a \\emph{quasi-smooth} subvariety.  It is smooth except possibly for quotient singularities. Topologically it is a rational homology manifold, and in particular satisfies Poincar\\\'e duality over $\\Q$.  Its second cohomology has a pure Hodge structure of weight two, polarized by the intersection form.\n\n  Fix $d$ and let $S_d^0\\subset S_d$ denote the set, possibly empty, of all $f\\in S_d$ for which $V_f$ is quasi-smooth.  For example, if $f\\in S_4$, then no monomial in  $f$ can contain the variable $x_4$ of weight $5$, so $\\frac{\\partial f}{\\partial x_4} = 0$ for all $f\\in S_4$.  Therefore $S_4^0 =\\emptyset$ since $(0:0:0:1)$ is a singular point of all $f\\in S_4$.  On the other hand, a polynomial  in $S_d$ is a sum of powers of \\emph{all}  of the variables defines a Fermat hypersurface.   These are always quasi-smooth.  In our case, one has the Fermat surface\n\n  \\begin{equation}\n  \\label{eq:fermat}\n  f_0 (x_1,x_2,x_3,x_4) = x_1^{10} + x_2^{10}  + x_3^5 + x_4^2 \\in S_{10}^0,\n  \\end{equation}\n\n  It has a rich structure, and, in particular, is double cover of  the 2-dimensional weighted projective plane with weights $1, 1, 2$, branched over a curve of degree ten.\n\n  The complement $\\Delta_d = S_d \\setminus S_d^0$ is a subvariety of $S_d$.  It is a proper subvariety if $S_d^0\\ne \\emptyset$.\n\n\n  Assume $S_d^0\\ne\\emptyset $.  Then $\\Delta_d$ has complex codimension $1$ in $S_d$. Consequently, $S_d^0$ is connnected and we obtain a topologically locally trivial fibration $\\var\\to S_d^0$ where the fiber over $f$ is the variety $V_f$:\n  \\begin{eqnarray}\n  \\label{eq:universalfamily}\n  \\begin{array}{ccc}\n  \\var = \\{(f,x) | f(x) = 0\\} & \\subset  & S_d^0 \\times \\P(1,1,2,5) \\\\\n  \\Big\\downarrow& &\\Big\\downarrow \\\\\n  S_d^0  & = & S_d^0\n  \\end{array}\n  \\end{eqnarray}\n\n  Fix a base point  $f_0\\in S_d^0$.  Then there  is a monodromy representation $\\rho:\\pi_1(S_d^0,f_0) \\to Aut(H^2(V_{f_0}))$, where $Aut$ is the group of automorphisms respecting all topological structures, in particular, the intersection form.  As $f$ varies, we transport the Hodge structure on $H^2(V_f,\\C)_{prim} = H^{2,0}(V_f)\\oplus H^{1,1}(V_f)_{prim} \\oplus H^{0,2} (V_f)$ to $H^2(V_{f_0})_{prim}$, as explained in \\S \\ref{sec:introduction}, thus obtaining a point $F(f)\\in D$, well defined up to the action of the image of $\\rho$, where $D$ is the classifying space of Hodge structures on $H^2(V_{f_0})_{prim}$.   This defines   holomorphic period maps as in (\\ref{eq:periodmaps}), namely\n\n\n  \\begin{eqnarray}\n  \\begin{array}{ccc}\n  \\label{eq:universalperiodmaps}\n  \\widetilde{S_{d}^0} &  \\buildrel \\widetilde{F} \\over\\longrightarrow  & D  \\\\\n  {p}\\Big\\downarrow & & \\Big\\downarrow   \\\\\n  S_{d}^0 & \\buildrel F\\over \\longrightarrow & \\Gamma\\backslash D\n  \\end{array}\n  \\end{eqnarray}\n\n\n\n  where $\\Gamma$ denotes the image of the monodromy representation $\\rho$, and\n  which is \\emph{horizontal} in the sense that\n\n  \\begin{equation}\n  d\\widetilde{F} : T \\widetilde{S}_d^0 \\longrightarrow  \\widetilde{F}^* T_hD.\n  \\end{equation}\n\n  We  must look carefully at some local properties of the period map $F$.   Let $U$ be a simply connected neighborhood of the base point $f_0$.  The inverse image of $U$ in $\\widetilde{S^0_d}$\n  is a disjoint union of open sets isomorphic to $U$.  On such a  component of the inverse image, we can replace the  map $\\widetilde{F}$ of (\\ref{eq:universalperiodmaps}) by its restriction to a that connected component.  Identifying it with $U$, we may replace (\\ref{eq:universalperiodmaps}) by the simpler diagram\n  \\begin{eqnarray}\n  \\begin{array}{ccc}\n  \\label{eq:localuniversalperiodmaps}\n  &  & D  \\\\\n   &\\buildrel \\widetilde{F}  \\over \\nearrow & \\Big\\downarrow   \\\\\n  U & \\buildrel F\\over \\longrightarrow & \\Gamma\\backslash D\n  \\end{array}\n  \\end{eqnarray}\n  Thus the period map $F$ to $\\Gamma\\backslash D$ is \\emph{locally liftable} to $D$.  This is only an issue in the presence of fixed points.\n\n\n  Our example of a horizontal non-geodesic $V\\subset \\Gamma\\backslash D$ will be $\\overline{F(S_d^0)}$, the closure of the image of $F$, for suitable $d$.   We proceed to the necessary computations.\n\n\n  \\subsection{The Jacobian Ring}\n  \\label{subsec:jacobianring}\n\n  First of all,  choose $d = 10$, and  consider the space $S_{10}(1,1,2,5)$ of weighted homogeneous polynomials of degree $10$ with weights $(1,1,2,5)$.  Some computer experimentation led us to this choice. As noted above, the \\lq\\lq Fermat hypersurface\\rq\\rq  $V_{f_0}$ is defined by an element of $S_{10}$, and so  $S_{10}^0 \\ne\\emptyset$.\n  Given $f\\in S_{10}^0$, let\n\n\\begin{enumerate}\n\n\\item $J(f)\\subset S$ denote the \\emph{Jacobian ideal of $f$}, namely the ideal generated by the partial derivatives of $f$.\n\n\\item $R(f) = S/J(f)$ be the \\emph{Jacobian ring} of $f$.\n\n\\end{enumerate}\n\n\n\n  The Hodge decomposition and the differential of the period map have very explicit descriptions in terms of the graded ring $R(f)$ for $f\\in S_{10}^0$.  Since the dimensions of the graded components $R_k(f)$  are independent of $f$, we often write simply $R_k$ for $R_k(f)$.\n\n\\begin{proposition}\n\\label{prop:jacobiancomputations} Let $f\\in S_{10}^0$ and let $J$ and $R$ be as just defined.  Then\n\\end{proposition}\n\n\\begin{enumerate}\n\n\\item $R_1 \\cong H^{2,0}$\n\n\\item $R_{11} \\cong H^{1,1}$\n\n\\item $R_{21}\\cong H^{0,2}$\n\n\\item $R_{22}\\cong \\C$\n\nitem $R_k = 0$ for $k>22$\n\n\\item For $0\\le i \\le 22$, the pairing $R_i\\otimes R_{22-i}\\to R_{22}$ is non-degenerate.\n\n\\end{enumerate}\n\n\n    \\begin{proof}\n   Statements of this type for projective hypersurfaces are consequences of the Griffiths residue calculus.  The analogous statements  for weighted projective hypersurfaces are proved in Theorem 1 of \\cite{steenbrink} and in   \\S4.3 of  \\cite{dolgachev}.\n    \\end{proof}\n\n\n   Applying the above to our situation, and using the polynomial $f_0$ to do computations,\n   we find\n   \\begin{lemma}\n   \\label{lem:dimensions}\n   \\end{lemma}\n\n \\begin{enumerate}\n    \\item $h^{2,0} =2$, $h^{1,1} = 28$, $h^{0,2} = 2$\n    \\item $D = SO(4,28) /U(2) \\times SO(28)$\n    \\item $D$ has dimension $57$.\n   \\item  The horizontal sub-bundle $T_h D = Hom(\\hodge^{2,0},\\hodge^{1,1})$ has fiber dimension $56$, hence is a holomorphic contact structure on $D$.\n   \\end{enumerate}\n\n   \\strong{Proof}\n\n   Since the Hodge numbers are independent of $f$, we can compute them for $f_0$.  Using  Proposition \\ref{prop:jacobiancomputations}, this is the same as computing the spaces $R_k(f_0)$, which amounts to a straightforward exercise of counting monomials.  First of all, $J$ is the ideal generated by $x_1^9,x_2^9, x_3^4,x_4$.  We find that\n\n\\begin{enumerate}\n\n\\item $R_1 = S_1 = \\left< x_1,x_2 \\right> $ is the vector space with basis $x_1,x_2$, so that  $h^{2,0} = h^{0,2} = 2$.\n\n\\item $R_{11}$: to find a basis for this space, list all monomials that do not contain any of the above generators of $J$.  In particular, $x_4$ does not appear, so a basis consists of monomials in $x_1,x_2,x_3$ that do not contain $x_1^9, x_2^9,x_3^4$.  These can be conveniently grouped by powers of $x_3$:\n\n\\item $G_3 = \\left< x_1^ix_2^{5-i}x_3^3 | i = 0,\\dots 5 \\right>$ is six-dimensional\n\n    \\item $G_2 = \\left< x_1^ix_2^{7-i}x_3^2 | i = 0,\\dots 5 \\right>$ is eight-dimensional\n\n    \\item $G_1 = \\left< x_1^ix_2^{9-i}x_3 | i = 1,\\dots 8 \\right>$ is eight-dimensional\n\n    \\item $G_0 = \\left< x_1^ix_2^{11-i} | i = 3,\\dots 8 \\right>$  is six-dimensional\n\n\n\\end{enumerate}\n\n\\smallskip\n\n  Therefore $\\dim R_{11} = h^{1,1} = 28$\n\nIt follows that $D$ classifies polarized Hodge structures with Hodge numbers $2,28,2$.  From the discussion in the introduction, it follows that $D = SO(4,28)/U(2)\\times SO(28)$, which has dimension $57$ and  its  sub-bundle $T_hD = Hom(\\hodge^{2,0},\\hodge^{1,1})$ has fiber dimension $h^{2,0}h^{1,1} = 56$.  The easiest way to visualize $D$, and to see its dimension and the structure of the horizontal sub-bundle,  is to use its fibration (\\ref{eq:fibration}) over the symmetric space.  In this case the symmetric space has real dimension $4\\cdot 28$ and the fiber  is a projective line:\n\n      \\begin{eqnarray}\n      \\label{eq:fibrationD}\n    \\begin{array}{ccc}\n  SO(4)/U(2) & \\longrightarrow & SO(4,28)/ U(2)\\times SO(28) \\\\\n  & & \\Big\\downarrow {\\pi}      \\\\\n  & &  SO(4,28) / S(O(4)\\times O(28))\n  \\end{array}\n  \\end{eqnarray}\n\n\n  It is easy to see that $d\\pi$ maps the fibers of $T_h D$ isomorphically (as real vector spaces) to the tangent spaces to the symmetric space. Thus $T_hD$ coincides, in this case, with the differential-geometric horizontal bundle.\n\nTo see that $T_hD$ is a holomorphic contact structure, recall the identification (\\ref{eq:hodgebundles}), $TD \\cong Hom_{\\left< \\ , \\  \\right>}(\\hodge^{2,0},\\hodge^{1,1}\\oplus\\hodge^{0,2})$.  Under this identification, $T_hD$ is identified with $Hom(\\hodge^{2,0},\\hodge^{1,1})$ as the kernel of the projection to $Hom_{< \\ , \\  >}(\\hodge^{2,0},\\hodge^{0,2})$.   Since\n  $Hom_{\\left< \\ , \\  \\right>}(H^{2,0},H^{0,2})$ is a space of skew-symmetric en\\-do\\-mor\\-phisms,  and since  $\\dim H^{2,0}$  $= 2$,\n  we see that  $$\\dim Hom_{\\left< \\ ,\\ \\right>}(H^{2,0},H^{0,2}) = 1$$ The projection is a one-form $\\omega$ with values in the line bundle  $T_vD = Hom_{\\left< \\ , \\ \\right>}(H^{2,0},H^{0,2})$ whose kernel is $T_hD$.  Here $T_vD$ stands for the vertical bundle. To be a contact structure means that it is totally non-integrable.  This means the following: if $X,Y$ are horizontal vector fields, then, for all $p\\in D$,  $\\omega([X,Y])_p$ depends only on $X_p,Y_p$, hence defines a bundle map $\\Lambda^2 T_hD\\to T_vD$.  To be a contact structure then means that this is a non-degenerate pairing. In other words, the resulting map $T_h D\\to Hom(T_h D, T_v D)$ is an isomorphism.  This is a reformulation of the local coordinate condition $\\omega\\wedge (d\\omega)^{28}\\ne 0$ at every point.\n\n  Under our identification $T_h D \\cong Hom(\\hodge^{2,0},\\hodge^{1,1})$, it is easy to check that  $\\omega([X,Y])= X^t Y - Y^t X$, where the transpose is with respect to $< \\ , \\ >$, see \\S 6 of \\cite{carlsontoledotrans} for details.  One easily checks  that this paring is non-degenerate, so that we indeed have a contact structure.\n\n\n   Next, we  compute $dF$, where $F:S_{10}^0\\to \\Gamma\\backslash D$ is the period map of (\\ref{eq:universalperiodmaps}). The  group $G(1,1,2,5)$ of automorphisms of $P(1,1,2,5)$ acts on $S_{10}^0$ and  $F$ is  constant on orbits, so it should factor through  an appropriate quotient.  Since the group is not reductive, we avoid the technicalities of forming quotients, by working mostly on the  infinitesimal level.\n\n   Given $f\\in S_{10}^0$, the tangent space at $f$ to its $G(1,1,2,5)$-orbit is $J_{10}(f)$.  When we have a quotient, $R_{10}(f)$ can be identified with the tangent space to the quotient at the orbit of $f$.   We  use this fact as a guiding principle, relying on the fact that $d_fF$ vanishes on $J_{10}(f)$ and hence factors through $R_{10}(f)$. Thus we avoid working with the quotient directly.\n\n\n  To be more precise,  fix $f\\in S_{10}^0$ and a simply connected neighborhood $U$ of $f$.  Since $\\Gamma\\backslash D$ need not be a manifold (and will not be at points fixed by non-identity elements of $\\Gamma$), what we actually want to compute is $d_f\\widetilde{F}$, where $\\widetilde{F}:U\\to D$ is a local lift of $F$ as in (\\ref{eq:localuniversalperiodmaps}).\n\n\n\n\n  Since $U$ is an open subset of the vector space $S_{10}$, there is a canonical identification\n  \\begin{equation}\n  \\label{eq:identifytangents}\n  T_fU \\cong S_{10} \\ \\text{ by translation. }\n  \\end{equation}\n  Under this identification, $J_{10}(f)$ is the tangent space to the orbit of $f$. Consequently, $d_f\\widetilde{F}:S_{10}\\to T_hD$ vanishes on  $J_{10}(f)$, hence factors through $R_{10}(f)$.\n  Keeping in mind the  exact sequence\n   \\begin{equation}\n  \\label{eq:exactsequence}\n  0\\longrightarrow J_{10}(f) \\longrightarrow S_{10}\\buildrel p\\over\\longrightarrow R_{10}(f)\\longrightarrow 0,\n  \\end{equation}\n  we can state the main tool for computing differentials of period maps:\n\n\\begin{proposition}\n\n  \\label{prop:multiplication}\n  Under the isomorphisms of Proposition \\ref{prop:jacobiancomputations}, the isomorphism (\\ref{eq:identifytangents}), and $p$ as in (\\ref{eq:exactsequence}),  we have a commutative diagram\n\n  \\begin{eqnarray}\n  \\begin{array}{ccccc}\n  T_f U  &  &\\buildrel d_f\\widetilde{F} \\over \\longrightarrow & & T_hD \\cong Hom(H^{2,0},H^{1,1})\\\\\n  {\\cong}\\Big\\downarrow & & & & \\Big\\downarrow {\\cong} \\\\\n  S_{10} &\\buildrel p \\over \\longrightarrow & R_{10}(f)  & \\buildrel m \\over \\longrightarrow & Hom(R_1(f),R_{11}(f))\n  \\end{array}\n  \\end{eqnarray}\n\n  where, for $\\phi\\in R_{10}$,  $m(\\phi):R_1\\to R_{11} $ is multiplication by $\\phi$: if $x\\in R_1$, then $m(\\phi)(x) = \\phi x$\n\n\\end{proposition}\n\n  \\begin{proof} This is the content of the residue calculus.  The isomorphisms between holomorphic objects and elements of the Jacobian ring preserve all natural products and pairings.\n  \\end{proof}\n\n  The above proposition will allow us to compute the rank of $d\\widetilde{F}$ at the point $f_0$ of (\\ref{eq:fermat}).  We remark that, up to this point, the residue calculus and the corresponding algebraic facts about the Jacobian ring have closely paralleled the projective case.  But the failure of Macauley\'s theorem in the weighted projective case forces us to look carefully at the remaining statements.   Most results in the literature require assumptions on the weights, and on the degree, that are not satisfied for degree $10$ and weights $(1,1,2,5)$.  See the introduction and \\S 1 of \\cite{donagitu} for a general discussion of the possible difficulties that can appear in the weighted case.\n\n\\begin{proposition}\n  \\label{prop:rank}\n\n\\end{proposition}\n\n\\begin{enumerate}\n  \\item The rank of $d\\widetilde{F}$ at $f_0$ is $28$, which is the maximum possible rank of a horizontal holomorphic map.\n\n  \\item Let $W\\subset T_h D$ denote the image of $d\\widetilde{F}$.\n  Under the identification $T_hD \\cong Hom(H^{2,0},H^{1,1})$, we have:\n\n    \\item For each $v\\in H^{2,0}$, the subspace $Wv =_{def} \\{Xv\\  | \\  X\\in W\\}\\subset H^{1,1}$ has dimension $26$.\n\n    \\item $\\{Xv \\ | \\  v\\in H^{2,0}, X\\in W\\} = H^{1,1}$\n\n\\end{enumerate}\n\n\n\\strong{Proof}\n  By Proposition \\ref{prop:multiplication} we need to compute the multiplication map $R_{10}\\to Hom(R_1,R_{11})$.  In the proof of Lemma \\ref{lem:dimensions} we found  a basis for $R_{11}$, and we can do a similar calculation with $R_{10}$:  a basis will be given by the monomials $x_1^a,x_2^b,x_3^c$ of total weight $10$ with $0\\le a,b \\le 8$ and $0\\le c \\le 3$.  These can again be conveniently grouped by the powers of $x_3$:\n\n\n\\begin{enumerate}\n\n    \\item $G_3\' =\\left< x_1^ix_2^{4-i}x_3^3 | i = 0,\\dots 5 \\right>$ is five-dimensional\n    \\item $G_2\' =\\left< x_1^ix_2^{6-i}x_3^2 | i = 0,\\dots 5 \\right>$ is seven-dimensional\n    \\item $G_1\' =\\left< x_1^ix_2^{8-i}x_3 | i = 1,\\dots 8 \\right>$ is nine-dimensional\n    \\item $G_0\' =\\left< x_1^ix_2^{10-i} | i = 2,\\dots 8 \\right>$  is seven-dimensional\n\n\\end{enumerate}\n\n\n\\smallskip\n\n  Therefore $\\dim R_{10} = 28$, as claimed.\n\n  Next, we examine the map $m:R_{10}\\to Hom(R_1,R_{11})$, where $m(\\phi)$ is the homomorphism $m(\\phi)(x) = \\phi x$.  We claim that $m$  is injective.  Since $R_1=\\left< x_1,x_2 \\right>$, it suffices to show that if $\\phi\\in R_{10}$ and both $\\phi x_1 = \\phi x_2 = 0$, then $\\phi = 0$.  We have\n\n  \\begin{equation}\n  R_{10}=G_3\'\\oplus G_2\'\\oplus G_2\'\\oplus G_0\' \\ \\text{ and }\\  R_{11} = G_3\\oplus G_2 \\oplus G_1 \\oplus G_0,\n  \\end{equation}\n\n  it is easy to see that multiplication by $R_1$ maps $G_i\'$ to $G_i$, that multiplication by $x_1$ is injective for $i=2,3$, and that the same holds for multiplication by $x_2$.  Moreover multiplication by either $x_1$ or $x_2$ is surjective for $i=0,1$ and the intersection of their kernels is zero.  Writing $\\phi = \\phi_3 + \\dots + \\phi_0$ and applying this information we see that $\\phi x_1 =\\phi x_2 = 0$ implies $\\phi = 0$.\n\n  Combining these two facts, we see that $d_{f_0}\\widetilde{F}$ has rank $28$.  Since its image is an integral element of the holomorphic contact structure $T_hD$, its dimension can be at most half of $56$, the fiber dimension of $T_hD$.  Therefore $\\widetilde{F}$ has the highest possible rank of a horizontal holomorphic map, namely $28$.\n\n\n  The second part is easily verified using the above bases of monomials. For $v=x_1$ or $x_2$, both assertions are clear, and they are easily checked for linear combinations $v = a x_1  + b x_2$.\n\n\n\n\n\n\n  \\subsection{A closed horizontal subvariety of maximum dimension}\n\n  Consider now the horizontal holomorphic map $F:S_{10}^0 \\to \\Gamma\\backslash D$.  Following Griffiths (see \\S 9 of \\cite{griffiths}) we can embed $S_{10}^0 \\subset S\'$, where $S\'$  is a smooth complex manifold containing $S_{10}^0$ as the complement of an analytic subset. One does this by  compactifying with normal crossing divisors.  One can then  extend over the branches of the compactifying divisor for which the monodromy is finite to obtain a proper horizontal holomorphic map $F:S\'\\to\\Gamma\\backslash D$.  Then  $F(S\')$ is a closed analytic subvariety of $\\Gamma\\backslash D$ containing $F(S_{10}^0)$ as the complement  of an analytic subvariety.\n\n  At the point $f_0\\in S_{10}^0$, we found that a local lift $\\widetilde{F}:U\\to D$ has maximum rank $28$. Consequently, there is a neighborhood $U\'$ of $f_0$, where $U\'\\subset U$,  $\\widetilde{F}$ has rank $28$,   and $\\widetilde{F}|_{U\'}$ is a submersion onto its image.  Therefore  $\\widetilde{F}(U\')$ is a $28$-dimensional horizontal submanifold of $D$ containing $\\widetilde{F}(f_0)$.\n\n  We now examine the local structure of $\\Gamma\\backslash D$.  Since $f_0$ has symmetries, $\\widetilde{F}(f_0)$ is fixed by some element $\\gamma\\in \\Gamma, \\gamma\\ne id$.  Let $\\Gamma_0$ denote the subgroup of $\\Gamma$ fixing  $\\widetilde{F}(f_0)$.  It is necessarily a finite group. If $N$ is a $\\Gamma_0$-invariant neighborhood of $\\widetilde{F}(f_0)$, then $\\Gamma_0\\backslash N$ is an orbifold  neighborhood of $F(f_0)$ in the orbifold $\\Gamma\\backslash D$, and $F(f_0)$ is a singular point of this orbifold.  Strictly speaking, we do not have a tangent space at $F(f_0)$.  But we can move away from $f_0$ in the above neighborhood $U\'$ to find non-singular points:\n\n  \\begin{lemma}\n  \\label{lem:generic}\n  Let $W\\subset (T_h)_{\\widetilde{F}(f_0)} D$ denote the image of $d_{(f_0)}\\widetilde{F}$.  Then\n  \\end{lemma}\n\n\\begin{enumerate}\n    \\item $W$ is not fixed by any $\\gamma\\in\\Gamma_0$, $\\gamma\\ne id$.\n\n    \\item $W$ is not tangent to any horizontal geodesic embedding of  $SU(2,14)/S(U(2)\\times U(14))$ passing through $\\widetilde{F}(f_0)$.\n\n\\end{enumerate}\n\n  \\strong{Proof}\n\n  As usual, identify $T_hD$ with $Hom(H^{2,0},H^{1,1})$, and let $V = H^{2,0}$,   $V\' = H^{1,1}$.  The group $\\Gamma_0$ acts on $T_h D$ through the action of the isotropy group $U(2)\\times SO(28)$ of $\\widetilde{F}(f_0)$.  Namely $(A,B)$, where $A\\in U(2)$ and $B\\in SO(28)$ acts on $X\\in Hom(V,V\')$ by $X\\to BXA^{-1}$.\n\n\n  Let us prove the stronger statement that $W$ is not fixed by any element of $U(2)\\times SO(28)$:  Suppose $X$ is fixed by $(A,B)\\ne id$, say $A\\ne id$.  Then $BX = XA$.   Let $\\lambda_1,\\lambda_2$ be the eigenvalues of $A$ (roots  of unity), and assume, first, that $\\lambda_1\\ne \\lambda_2$ and neither eigenvalue is real.  Let  $V_1,V_2$ be the corresponding eigenspaces, it is easy to see that, for $v_i\\in V_i$, $Xv_i$ is an eigenvector for $B$ with eigenvalue $\\lambda_i$.  From this we see that $V\' = V_1\'\\oplus V_2\'\\oplus V_3\'$, where $V_1\',V_2\'$ are the eigenspaces of $B$ for $\\lambda_1,\\lambda_2$ respectively,  and $V_3\'$ is their orthogonal complement. If $X\\in W$, then $X(V_i)\\subset V_i\'$ for $i=1,2$.  In other words, $W\\subset Hom(V_1,V_1\')\\oplus Hom(V_2,V_2\')$.  Observe that  $\\dim V_1\', \\dim V_2\'\\le 14$, since $B$ is real and its eigenvalues come in complex conjugate pairs.  Therefore, if $v_1\\in V_1$,\n  $$\n  \\{Xv_1 \\ | \\ X\\in W\\} \\subset V_1\'.\n  $$\n  Since $\\dim V_1\'\\le 14$, this contradicts Proposition  \\ref{prop:rank}.  The remaining possibilities for $\\lambda_1,\\lambda_2$ are  handled by similar  arguments.  This proves that $W$ is not fixed by any element of the isotropy group of $\\widetilde{F}(f_0)$. The first part of the Lemma is proved.\n\n  For the second part, recall from \\S \\ref{subsec:construction} that the tangent space to a geodesic embedding of the symmetric space of $SU(2,14)$ through the point $V = H^{2,0}$ is determined by a complex structure $J$ on $V\' = H^{1,1}$ and is the subspace  of $X\\in Hom(V,V\')$ satisfying $JX = Xi$, in other words, the fixed point set of the element $(i,J)$ of $U(2)\\times SO(28)$, which we have  already excluded.\n\n\n\n  An immediate consequence of this lemma is that $\\widetilde{F}(U\')$ is not fixed by any $\\gamma\\in\\Gamma_0$, so there exist $f\\in U\'$ with $F(f)$ a smooth point of $\\Gamma\\backslash D$.  The same must be true in a neighborhood $U\'\'\\subset U\'$ of $f$, so $F|_{U\'\'}:U\'\'\\to (\\Gamma\\backslash D )^0$  (the regular points of $\\Gamma\\backslash D$) and rank of $dF$ must be $28$ on $U\'\'$.\n\n  In summary:\n  \\begin{theorem}\n  Let $S\'$, $F:S\'\\to \\Gamma\\backslash D$ and $\\widetilde{F}:\\widetilde{S_{10}^0} \\to D$  be as above.  Then\n  \\end{theorem}\n\n\\begin{enumerate}\n    \\item $F$ is a proper horizontal holomorphic map.\n    \\item There is a proper analytic subvariety $Z\\subset S\'$ so that, if $S\'\' = S\'\\setminus Z$,  then  $F|_{S\'\'}:S\'\' \\to (\\Gamma\\backslash D )^0$ and $dF$ has rank $28$ on $S\'\'$.\n    \\item $F(S\')$ is a closed horizontal subvariety of $\\Gamma\\backslash D$ of maximum possible dimension $28$.\n\n    \\item If $x\\in S\'\'$, the tangent space to $F(S\')$ at $F(x)$ is not the tangent space to any totally geodesic immersion of the symmetric space of $SU(2,14)$ in $\\Gamma\\backslash D$.\n\n    \\item Alternatively, if $x\\in \\widetilde{S_{10}^0}$ lies in the dense open set where $d_x \\widetilde{F}$ has maximum rank $28$,   the image of $d_x \\widetilde{F}$ is not the  tangent space to a geodesic embedding of the symmetric space  $SU(2,14)$ in $D$.\n\n\\end{enumerate}\n\n  \\section{Geodesic submanifolds and integral elements}\n  \\label{sec:integralelements}\n\n  We close with some remarks on integral elements of contact structures.  The period domains for which the horizontal bundle gives a contact structure are the twistor spaces of the quaternionic-K\\\"ahler symmetric spaces, also called the Wolf spaces, see \\cite{wolf} for their classification.  We briefly discuss two examples from this point of view: our example $D$, associated to the symmetric space $SO(4,28)/S(O(4)\\times O(28))$, and another example we call $D\'$ associated to quaternionic hyperbolic space.\n\n\n\n  Whenever the horizontal sub-bundle $T_hD$ of a domain $D$  is a contact structure,  we know that each fiber of $T_h D$ has a symplectic structure, and the integral elements in that fiber are the Lagrangian subspaces of this symplectic structure.  Lagrangian subspaces of a $2g$-dimensional symplectic space are parametrized by $Sp(g)/U(g)$, the compact dual of the Siegel upper half plane of genus $g$.\n\n  If $D = SO(4,28)/U(2)\\times SO(28)$ is the domain we have been studying, of dimension $57$, $T_hD$  of dimension $56$, the integral elements in a fiber of $T_hD$ are parametrized by $Sp(28)/U(28)$,  a manifold of complex dimension $(28 \\cdot 29)/2 = 406$.  On the other hand, the totally geodesic embeddings of $D_1$, the symmetric space for $SU(2,14)$ through a fixed point in $D$ are parametrized by the choice of complex structure $J$ on the space $H^+$ as in \\S \\ref{subsec:construction}.  These are in turn parametrized by the space $SO(28)/U(14)$ of dimension $28\\cdot 27 - 14^2 = 14\\cdot 13  = 182$.  Thus we see that the space of tangents to geodesic embeddings of $SU(2,14)$ is a rather small subset of the space of Lagrangian subspaces.  We therefore expect the generic horizontal map to miss these embeddings.  In a way, this is what made our example possible.\n\n  \\subsection{The quaternionic hyperbolic space}\n  \\label{subsec:quaternionic}\n\n  We conclude with a related problem, which was the motivation for writing this paper.   Consider the period domain $D\'$ associated to the quaternionic hyperbolic space, namely\n     \\begin{eqnarray}\n      \\label{eq:fibrationquat}\n    \\begin{array}{ccc}\n  Sp(1)/U(1) & \\longrightarrow & D\' = Sp(1,n)/ U(1)\\times Sp(n) \\\\\n  & & \\Big\\downarrow {\\pi}      \\\\\n  & &  Sp(1,n) / Sp(1)\\cdot Sp(n)\n  \\end{array}\n  \\end{eqnarray}\n  We can think of this domain as classifying Hodge structures on $\\R^{4n+4}\\cong \\bH^{n+1}$ with Hodge numbers $2,4n,2$ which are stable under right multiplication by quaternions.  Equivalently, we can think of points in this domain as pairs $L,J$ where $L\\subset \\bH^{n+1}$ is a positive right-quaternionic line and $J:L\\to L$ is a right quaternionic linear complex structure on $L$ orthogonal with respect to the polarizing form $\\left< \\ , \\ \\right>$.  Let $L^\\perp$ denote the orthogonal complement of $L$ in $\\bH^{n=1}$ and $L_\\C, L_\\C^\\perp$ their complexifications.  Then the horizontal tangent space to the domain $D\'$ is\n\n  \\begin{equation}\n  T_n D\' = _\\C\\Hom_\\bH (L^{1,0},L_\\C^\\perp)\\subset TD\' = _\\C\\Hom_\\bH (L^{1,0},L_\\C^\\perp\\oplus L^{0,1})  \\nonumber\n  \\end{equation}\n\n  where $_\\C\\Hom_\\bH$ denotes left $\\C$-linear and right $\\bH$-linear homomorphisms.  See \\S 6 of \\cite{carlsontoledo} for a more detailed discussion.\n\n  Once again, $D\'$ has complex dimension $2n+1$ and $T_h D\'$ has fiber dimension $2n$, so it is a holomorphic contact structure on $D\'$.\n  Each fiber  of $T_hD\'$ has a symplectic structure, and the integral elements of the contact structure in a fixed fiber coincide with the Lagrangians of this symplectic structure, and are therefore parametrized by $Sp(n)/U(n)$.\n\n  We also have horizontal totally geodesic embeddings of the symmetric space of $SU(1,n)$ in $D\'$, namely the unit ball or complex hyperbolic space $SU(1,n)/U(n)$.  The group $Sp(n)$ acts transitively on the  embeddings passing through a point $(L,J)$, corresponding to orthogonal right $\\bH$-linear  complex structures on $L^\\perp$, hence parametrized by the same homogeneous space $Sp(n)/U(n)$ that parametrizes the Lagrangians.  Thus, for $D\'$, every horizontal subvariety of maximum dimension $n$ is tangent, at each smooth point, to a horizontal totally geodesic  complex hyperbolic $n$-space.  (We used this fact in \\S 6 of \\cite{carlsontoledo} to give a structure theory for harmonic maps of K\\\"ahler manifolds to manifolds covered by quaternionic hyperbolic space).\n\n  \\begin{problem}\n  Find examples of discrete groups $\\Gamma\\subset Sp(1,n)$ and closed horizontal subvarieties $V\\subset \\Gamma\\backslash D\'$ that are not totally geodesic.\n  \\end{problem}\n\n\n\n\n\\begin{comment}\n\n\\begin{thebibliography}{PTW02}\n\n\n  \\bibitem[Ca86]{carlson} J. A. Carlson, \\emph{Bounds on the dimension of a variation of Hodge Structure}, Trans. AMS {\\bf 294} (1986), 45 -- 64.\n\n  \\bibitem[CD87]{carlsondonagi} J. A. Carlson and R. Donagi, \\emph{Hypersurface variations are maximal}, I, Invent. Math. {\\bf 89} (1987) 371--374.\n\n  \\bibitem[CT89a]{carlsontoledotrans} J. A. Carlson and D. Toledo, \\emph{Variations of Hodge structure, Legendre submanifolds, and accessibility}, Trans. AMS {\\bf 311} (1989), 391--411\n\n  \\bibitem[CT89b]{carlsontoledo} J.A. Carlson and D. Toledo, \\emph{Harmonic mappings of K\\\"ahler manifolds to locally symmetric spaces},  Pub. Maths. IHES {\\bf 69} (1989), 173--201.\n\n  \\bibitem[Do82]{dolgachev} I. Dolgachev, \\emph{Weighted projective varieties}, in Lecture Notes in Mathematics {\\bf 956}, 34--71, Springer, 1982.\n\n  \\bibitem[DT87]{donagitu}  R. Donagi and L. W. Tu, Generic Torelli for weighted hypersurfaces, Math. Annalen {\\bf 276} (1987), 399 -- 413.\n\n  \\bibitem[G70]{griffiths} P. A, Griffiths, Periods of integrals on algebraic manifolds, III, Pub. Maths. IHES, {\\bf 38} (1970), 125 --180.\n\n  \\bibitem[S77]{steenbrink}  J. Steenbrink, Intersection form for quasi-homogeneous singularities, Comp. Math. {\\bf 34} (1977), 211--223.\n\n  \\bibitem[W65]{wolf} J. A Wolf, Complex homogeneous contact manifolds and quaternionic symmetric spaces, Jour. Math. Mechanics {\\bf 14} (1965), 1033--1048.\n\n\\end{thebibliography}\n\n\\end{comment}\n\n';
var _user$project$App_Source$weatherApp = '\n\\section{Weather App}\n\n\\image{http://noteimages.s3.amazonaws.com/jim_images/weatherAppColumbus.png}{}{float: right, width: 250}\n\nIn this section we will learn how to write an app that displays information about the weather  in any city on planet earth.   The data comes from a web server at \\href{http://openweathermap.org/}{openweathermap.org}; to access it, you will need a free API key, which is a long string of letters and numbers  that looks like \\code{a23b...ef5d4} and which functions as a kind password. To get an API key, follow this \\href{http://openweathermap.org/price}{link}.  Once you have an API key, you can try out a working copy of the app at \\href{https://jxxcarlson.github.io/app/weather.html}{jxxcarlson.github.io}.\n\n\\subheading{Framing Main}\n\nWe will build the app in a series of steps.  The first step is to build a skeleton that has all the needed structural parts, e.g, the view and update functions.    Part of this \"framing\" step is to define the data types that the app will use --- \\code{Model} and its various parts, and \\code{Msg}, a union type which determines which messages can be sent to the Elm Runtime.  Let\'s begin with \\code{main}, which looks like this:\n\n\\begin{verbatim}\nmain =\n    Html.program\n        { init = init\n        , view = view\n        , update = update\n        , subscriptions = subscriptions\n        }\n\\end{verbatim}\n\nThis is the structure, \\code{Html.program}, is used by $99\\%$ of all Elm programs.  It is a a record with four fields, the init, view, and update functions, and subscriptions, which will eventually be used to add date and time to the app. The init, view and update functions all work  with the model, so let\'s discuss that next.\n\n\\subheading{Model}\n\nEvery model has a type, and that type dictates what the model is able to represent.  In our case the \\code{Model} type, displayed below,  is a record with five fields: one for weather data, one for messages for the user, one for the location whose weather we retrieve, one for the API key discussed above, and one for the internet address of the server.  The first field has a special type which we discuss in a moment, while the other fields are strings.\n\n\n\\begin{verbatim}\ntype alias Model =\n    { weather : Maybe Weather\n    , message : String\n    , location : String\n    , apiKey : String\n    , serverAddress : String\n    }\n\\end{verbatim}\n\nThe type of the weather field has the form\n\n\\begin{verbatim}\nMaybe Weather = Nothing | Just Weather\n\\end{verbatim}\n\nThis means that a value of type \\code{Maybe Weather} can be either \\code{Nothing}, or a value of type \\code{Just Weather}.  The  first option handles the case in which  the app has not requested information from the server, has requested information but has received no reply, has requested information but received an error message, or, finally has received garbled information.  These are all very real possibilities, and in those cases, we literally know \\code{Nothing}.\n\nIn the case of valid weather information, \\code{weather} field has type \\code{Just Weather}, where \\code{Weather} is the record type listed below. The first, \\code{id}, is an integer which identifies the weather information in the openweather.org database.  We won\'t use it now.  The next, \\code{location}, is a string which in our examples is a city name, e.g., \"London.\"  The third, \\code{main}, is the \"main\" weather information for the given location.\n\n\\begin{verbatim}\ntype alias Weather =\n    { id : Int\n    , name : String\n    , main : Main\n    }\n\\end{verbatim}\n\nAnd what is the value of the field \\code{main}?  Well, it is a something of type \\code{Main}.  While we seem to be opening up a series of Russian dolls, this is the last data structure that we have to deal with.  \\code{Main} is a record  with five fields of type \\code{Float}\n\n\\begin{verbatim}\ntype alias Main =\n    { temp : Float\n    , humidity : Float\n    , pressure : Float\n    , temp_min : Float\n    , temp_max : Float\n    }\n\\end{verbatim}\n\n\\subheading{Filling out Main}\n\nThe code discussed so far is still not enough to define an app that will run, even if it does nothing.  To get to this point, we must implement the following functions and types:\n\n\\begin{enumerate}\n\\item \\code{init}, which sets jup the initial model.\n\\item \\code{Msg} The type messages the app can receive.\n\\item \\code{subscriptions}. There aren\'t any, but this has to be defined.\n\\item \\code{view} and some style information to make the view look good.\n\\item \\code{update}\n\\end{enumerate}\n\nTake a look at the Ellie below and run it to see if it works.  Then come back and we will go through the list above.  Once this is done, we can move on to making the app actaully do something.\n\n\\ellie{9CKgm5CQGa1/0}{Skeleton app}\n\n\\subheading{Finishing the skeleton}\n\nLet\'s finish the skeleton by filling in the items listed above.\n\n\\subheading{Init and Msg}\n\n\\begin{verbatim}\ninit : ( Model, Cmd Msg )\ninit =\n    ( { weather = Nothing\n      , message = \"app started\"\n      , location = \"london\"\n      , apiKey = \"\"\n      }\n    , Cmd.none\n    )\n\\end{verbatim}\n\n\nBelow is  \\code{init}. It is a value of type \\code{(Model, Cmd Msg)}.  The \\code{Msg} type\nis defined this way:\n\n\\begin{verbatim}\ntype Msg = NoOp\n\\end{verbatim}\n\nWe will have other Msg\'s later.  But when staring out, it is worth having a kind of \"zero\" in the world of messages -- a message which corresponds to \"no operation.\"\n\n\n\\subheading{Subscriptions}\n\nWe need to define \\code{subscription} even if there are no subscriptions to external data sources. Let\'s do it like this:\n\n\\begin{verbatim}\nsubscriptions model =\n    Sub.none\n\\end{verbatim}\n\n\\subheading{Update}\n\nThe update function handles our \\code{NoOp} message:\n\n\\begin{verbatim}\nupdate : Msg -> Model -> ( Model, Cmd Msg )\nupdate msg model =\n    case msg of\n        NoOp ->\n            ( model, Cmd.none )\n\\end{verbatim}\n\nLater, the case statment will be more complex, with one\n clause for each \\code{Msg} type.\n\n\n\\subheading{View}\n\n\\image{http://noteimages.s3.amazonaws.com/jim_images/weatheApp-0.png}{}{float: right, width: 150}\n\nThe \\code{view} function represents the state of the \\code{Model}\nto the outside world.  In the case at hand, it just displays a grey box\nas in the image on the right.\n\n\\begin{verbatim}\nview : Model -> Html Msg\nview model =\n    div [ mainStyle ]\n        [ div [ innerStyle ]\n            [ text \"Weather App\"\n            ]\n        ]\n\\end{verbatim}\n\n\\subheading{Style}\n\nTo set the stage for our working app, we use a small bit of styling:\n\n\\begin{verbatim}\nmainStyle =\n    style\n        [ ( \"margin\", \"15px\" )\n        , ( \"margin-top\", \"20px\" )\n        , ( \"background-color\", \"#eee\" )\n        , ( \"width\", \"200px\" )\n        ]\n\ninnerStyle =\n    style [ ( \"padding\", \"15px\" ) ]\n\\end{verbatim}\n\n\n\\image{http://noteimages.s3.amazonaws.com/jim_images/weatherApp-2.png}{}{float: right, width: 200}\n\n\n\\subsection{Getting the weather}\n\n\n\nLet\'s now work to make the app retrieve weather data.  There is a cycle of events which makes this happen.  First, the user clicks on the \"Get weather\" button, which is defined by\n\n\\begin{verbatim}\nbutton\n   [ onClick GetWeather ]\n   [ text \"Get weather\" ]\n\\end{verbatim}\n\nThe \\code{onClick} action causes the message \\code{GetWeather} to be sent.  The \\code{update} function listed below receives this message, matches it using its \\code{case msg of} statement to the function call  \\code{getWeather model}, and executes that call.\n\n\\begin{verbatim}\nupdate : Msg -> Model -> ( Model, Cmd Msg )\nupdate msg model =\n    case msg of\n        GetWeather ->\n            ( model, getWeather model )\n        NewWeather (Ok newData) ->\n            ( { model | weather = Just newData,\n                        message = \"Successful request\" },\n                Cmd.none\n             )\n        NewWeather (Err error) ->\n            ( { model | message = \"Error\" }, Cmd.none )\n\n\\end{verbatim}\n\nLet\'s look at the code for \\code{getWeather}.\n\n\\begin{verbatim}\ngetWeather : Model -> Cmd Msg\ngetWeather model =\n    Http.send NewWeather (dataRequest model)\n\\end{verbatim}\n\nWhen this function call is executed the following happen.  (1)  The request \\code{ dataRequest model} is made; (2)  Moments later the server responds with its \\code{reply}, also a string. This is a string which re[renset sdh dtdata  which is just a string.  It represent the if  (3) send the message \\code{NewWeather reply}, (4) the update function processes that message.  The message can be of two kinds.  If the request is successful, it is of form \\code{Ok newData} where \\code{NewData} carries the information sent by the server.  If the request is not successful, the reply has the form \\code{Error error}, where \\code{error} carries information about the error.\n\nLet\'s  look at the code for \\code{dataRequest} listed below                                              .  The function \\code{Http.get} takes two arguments.  The first is the function call \\code{url model}, which yields a string to be sent to the server m  It carries information such as the \"address\" of the server, the city whose weather we want to know about, and the API key that the server requires to grant access.  The second argument is a JSON decoder.  This is a black box which will translate the information send by the server into a form understood by Elm.\n\n\\begin{verbatim}\ndataRequest model =\n    Http.get (url model) weatherDecoder\n\\end{verbatim}\n\nThe code for the \\code{url} function simply puts information already present in the model into the form needed by the server:\n\n\\begin{verbatim}\nurl model =\n  model.urlPrefix ++ model.location ++ \"&APPID=\" ++ model.apiKey\n\\end{verbatim}\n\n\n\n\n\\ellie{chqbtP2Kfa1/1}\n\n\\section{IIIIIII}\n\n\\image{http://noteimages.s3.amazonaws.com/jim_images/weatherApp-1a.png}{}{float: right, width: 250}\n\n\n\\ellie{8Wrq8PbCDa1/1}\n\n\\subsection{A little more advanced}\n\n\\ellie{7t43vKJnda1/5}\n\n\n';
var _user$project$App_Source$wavePackets = '\n\n\\title{Wave packets and the dispersion relation}\n\n\\maketitle\n\n\\tableofcontents\n\n\\image{http://psurl.s3.amazonaws.com/images/jc/sinc2-bcbf.png}{Wave packet}{width: 250, float: right}\n\n\nAs we have seen with the sinc packet, wave packets can be localized in space.  A key feature of such packets is their \\italic{group velocity} $v_g$.  This is the velocity which which the \"body\" of the wave packet travels.  Now a wave packet is synthesized by superposing many plane waves, so the natural question is how is the group velocity of the packet related to the phase velocities of its constituent plane waves.  We will answer this first in the simplest possible situation -- a superposition of two sine waves.  Next, we will reconsider the case of the sinc packet.  Finally, we will study a more realistic approximation to actual wave packets which gives insight into the manner and speed with which wave packets change shape as they evolve in time.  We end by applying this to an electron in a thought experiment in which it has been momentarily confned to an atom-size box -- about one Angstrom, or $10^{-10}\\text{ meter}$.\n\n\\section{A two-frequency packet: beats}\n\n\\image{http://psurl.s3.amazonaws.com/images/jc/beats-eca1.png}{Two-frequency beats}{width: 350, float: right}\n\nConsider a wave\n$\\psi = \\psi_1 + \\psi_2$ which is the sum of two terms with slightly different frequencies.  If the waves are sound waves, then then what one will hear is a pitch that corresponding to the average of the two frequencies modulated in such a way that the volume goes up and down at a frequency corresponding to their difference.\n\nLet us analyze this phenomenon mathematically, setting\n\n\n\\begin{equation}\n\\psi_1(x,t)  = \\cos((k - \\Delta k/2)x - (\\omega - \\Delta \\omega/2)t)\n\\end{equation}\n\nand\n\n\\begin{equation}\n\\psi_2(x,t)  = \\cos((k + \\Delta k/2)x - (\\omega + \\Delta \\omega/2)t)\n\\end{equation}\n\nBy the addition law for the sine, this can be rewritten as\n\n\\begin{equation}\n\\psi(x,t) = 2\\sin(kx - \\omega t)\\sin((\\Delta k)x - (\\Delta \\omega)t)\n\\end{equation}\n\nThe resultant wave -- the sum -- consists of of a high-frequency sine wave oscillating according to the average of the component wave numbers and angular frequencies, modulated by a cosine factor that oscillates according to the difference of the wave numbers and the angular frequencies, respectively.  The velocity associated to the high frequency factor is\n\n\\begin{equation}\nv_{phase} = \\frac{\\omega}{k},\n\\end{equation}\n\nwhereas the velocity associated with the low-frequency factor is\n\n\\begin{equation}\nv_{group} = \\frac{\\Delta \\omega}{\\Delta k}\n\\end{equation}\n\nThis is the simplest situation in which one observes the phenomenon of the group velocity.  Take a look at this \\href{http://galileo.phys.virginia.edu/classes/109N/more_stuff/Applets/wavepacket/wavepacket.html}{animation}.\n\n\n\\section{Step function approximation}\n\nWe will now find an an approximation to\n\n\\begin{equation}\n\\psi(x,t) = \\int_{-\\infty}^\\infty a(k) e^{i(kx - \\omega(k)t)} dk\n\\end{equation}\n\nunder the assumption that $a(k)$ is nearly constant over an interval from $k_0 -\\Delta k/2$ to $k_0 + \\Delta k/2$ and that outside of that interval it approaches zero at a rapid rate.  In that case the Fourier integral is approximated by\n\n\\begin{equation}\n \\int_{k_0 - \\Delta k/2}^{k_0 + \\Delta k/2}  a(k_0)e^{i((k_0 + (k - k_0)x - (\\omega_0t + \\omega_0\'(k - k_0)t))}dk,\n\\end{equation}\n\nwhere $\\omega_0 = \\omega(k_0)$ and $\\omega_0\' = \\omega\'(k_0)$.\nThis integral can be written as a product $F(x,t)S(x,t)$, where the first factor is \"fast\" and the second is \"slow.\"  The fast factor is just\n\n\\begin{equation}\nF(x,t) = a(k_0)e^{ i(k_0x - \\omega(k_0)t) }\n\\end{equation}\n\nIt travels with velocity $v_{phase} = \\omega(k_0)/k_0$.  Setting $k; = k- k_0$, the slow factor is\n\n\\begin{equation}\nS(x,t) = \\int_{-\\Delta k/2}^{\\Delta k/2} e^{ik\'\\left(x - \\omega\'(k_0)t\\right)} dk\',\n\\end{equation}\n\nThe slow factor be evaluated explicitly:\n\n\\begin{equation}\nI = \\int_{-\\Delta k/2}^{\\Delta k/2} e^{ik\'u} dk\' = \\frac{1}{iu} e^{ik\'u}\\Big\\vert_{k\' = - \\Delta k/2}^{k\' = +\\Delta k/2}.\n\\end{equation}\n\nWe find that\n\n\\begin{equation}\nI = \\Delta k\\; \\text{sinc}\\frac{\\Delta k}{2}u\n\\end{equation}\n\nwhere $\\text{sinc } x = (\\sin x )/x$.  Thus the slow factor is\n\n\\begin{equation}\nS(x,t) = \\Delta k\\, \\text{sinc}(  (\\Delta k/2)(x - \\omega\'(k_0)t)  )\n\\end{equation}\n\n\nPutting this all together, we have\n\n\\begin{equation}\n\\psi(x,t) \\sim a(k_0)\\Delta k_0\\, e^{i(k_0x - \\omega(k_0)t)}\\text{sinc}(  (\\Delta k/2)(x - \\omega\'(k_0)t)  )\n\\end{equation}\n\nThus the body of the sinc packet moves steadily to the right at velocity $v_{group} = \\omega\'(k_0)$\n\n\n\\section{Gaussian approximation}\n\nThe approximation used in the preceding section is good enough to capture and explain the group velocity of a wave packet.  However, it is not enough to explain how wave packets change shape as they evolve with time.  To understand this phenomenon, we begin with  an arbitrary packet\n\n\\begin{equation}\n\\psi(x,t) = \\int_{\\infty}^\\infty a(k) e^{i\\phi(k)}\\,dk,\n\\end{equation}\n\nwhere $\\phi(k) = kx - \\omega(k)t$.  We shall assume that the spectrum $a(k)$ is has a maximum at $k = k_0$ and decays fairly rapidly away from the maximum.  Thus we assume that the Gaussian function\n\n\\begin{equation}\na(k) = e^{ -(k-k_0)^2/ 4(\\Delta k)^2}\n\\end{equation}\n\nis a good approximation.  To analyze the Fourier integral\n\n\\begin{equation}\n\\psi(x,t) = \\int_{-\\infty}^{\\infty} e^{ -(k-k_0)^2/ 4(\\Delta k)^2} e^{i(kx - \\omega(k) t)},\n\\end{equation}\n\nwe expand $\\omega(k)$ in a Taylor series up to order two, so that\n\n\\begin{equation}\n\\phi(k) = k_0x + (k - k_0)x - \\omega_0t - \\frac{d\\omega}{dk}(k_0) t- \\frac{1}{2}\\frac{ d^2\\omega }{ dk^2 }(k_0)( k - k_0)^2 t\n\\end{equation}\n\nWriting $\\phi(k) = k_0x - \\omega_0t + \\phi_2(k,x,t)$, we find that\n\n\\begin{equation}\n\\psi(x,t) = e^{i(k_0x - \\omega_0 t)} \\int_{-\\infty}^{\\infty} e^{ -(k-k_0)^2/ 4(\\Delta k)^2} e^{i\\phi_2(k,x,t)}.\n\\end{equation}\n\nMake the change of variables $k - k_0 = 2\\Delta k u$, and write $\\phi_2(k,x,t) = Q(u,x,t)$, where $Q$ is a quadratic polynomial in $u$ of the form $au + b$. One finds that\n\n\\begin{equation}\n  a = -(1 + 2i\\alpha t  (\\Delta k)^2),\n\\end{equation}\n\nwhere\n\n\\begin{equation}\n\\alpha = \\frac{ d^2\\omega }{ dk^2 }(k_0)\n\\end{equation}\n\nOne also finds that\n\n\\begin{equation}\n  b = 2i\\Delta k(x - v_g t),\n\\end{equation}\n\nwhere $v_g = d\\omega/dk$ is the group velocity.  The integral is a standard one, of the form\n\n\\begin{equation}\n\\int_{-\\infty}^\\infty e^{- au^2 + bu} = \\sqrt{\\frac{\\pi}{a}}\\; e^{ b^2/4a }.\n\\end{equation}\n\nUsing this integral  formula and the reciprocity $\\Delta x\\Delta k = 1/2$, which we may take as a definition of $\\Delta x$, we find, after some algebra, that\n\n\\begin{equation}\n\\psi(x,t) \\sim A e^{-B} \\,e^{i(k_0 - \\omega_0t)}\n,\n\\end{equation}\n\nwhere\n\n\\begin{equation}\nA = 2\\Delta k \\sqrt{\\frac{\\pi}{1 + 2i\\alpha \\Delta k^2 t}}\n\\end{equation}\n\nand\n\n\\begin{equation}\nB = \\frac{( x-v_gt )^2 (1 - 2i\\alpha \\Delta k^2 t)}{4\\sigma^2}\n\\end{equation}\n\nwith\n\n\\begin{equation}\n\\sigma^2 = \\Delta x^2 + \\frac{\\alpha^2 t^2}{4 \\Delta x^2}\n\\end{equation}\n\nLook at the expression $B$. The first factor in the numerator controls the motion of motion of the packet and is what guides it to move with group velocity $v_g$.  The second factor is generally a small real term and a much larger imaginary one, and so only affects the phase.  The denominator controls the width of the packet, and as we can see, it increases with $t$ so long as $\\alpha$, the second derivative of $\\omega(k)$ at the center of the packet, is nonzero.\n\n\\section{The electron}\n\nLet us apply what we have learned to an electron which has been confined to a box about the size of an atom, about $10^{-10}$ meters. That is, $\\Delta x \\sim 10^{-10}\\text{ m}$.  The extent of its wave packet will double when\n\n\\begin{equation}\n\\frac{\\alpha^2 t^2}{4 \\Delta x^2} \\sim \\Delta x^2,\n\\end{equation}\n\nthat is, after a time\n\n\\begin{equation}\nt_{double} \\sim \\frac{\\Delta x^2}{\\alpha}\n\\end{equation}\n\nThe dispersion relation for a free particle is\n\n\\begin{equation}\n  \\omega(k) = \\hbar \\frac{k^2}{2m},\n\\end{equation}\n\nso that $\\alpha = \\hbar/m$.  Then\n\n\\begin{equation}\nt_{double} \\sim \\frac{m}{h}\\, \\Delta x^2 .\n\\end{equation}\n\nIn the case of our electron, we find that $t_{double} \\sim 10^{-16}\\,\\text{sec}$.\n\n\\section{ Code}\n\n\n\n\\begin{verbatim}\n# jupyter/python\n\nmatplotlib inline\n\n# code for sinc(x)\nimport numpy as np\nimport matplotlib.pyplot as plt\n\n# sinc function\nx = np.arange(-30, 30, 0.1);\ny = np.sin(x)/x\nplt.plot(x, y)\n\n# beats\nx = np.arange(-50, 250, 0.1);\ny = np.cos(0.5*x) + np.sin(0.55*x)\nplt.plot(x, y)\n\\end{verbatim}\n\n\n\n\\section{References}\n\n\\href{https://www.eng.fsu.edu/~dommelen/quantum/style_a/packets.html}{Quantum Mechanics for Engineers: Wave Packets}\n\n\\href{http://users.physics.harvard.edu/~schwartz/15cFiles/Lecture11-WavePackets.pdf}{Wave Packets, Harvard Physics}\n\n\\href{http://ocw.mit.edu/courses/nuclear-engineering/22-02-introduction-to-applied-nuclear-physics-spring-2012/lecture-notes/MIT22_02S12_lec_ch6.pdf}{Time evolution in QM - MIT}\n\n';
var _user$project$App_Source$report = '\n\\title{MiniLaTeX: Technical Report}\n\n\\author{James Carlson}\n\n\\email{jxxcarlson at gmail}\n\n\\date{October 29, 2017}\n\n\\revision{January 16, 2017}\n\n\n\n\\maketitle\n\n\n\\begin{abstract}\nThe aims of the MiniLaTeX project are (1) to establish a subset\nof LaTeX which can be rendered either as HTML (for the browser) or as PDF (for print and display), (2) to implement a reference parser and renderer for MiniLaTeX, (3) to provide an online editor/reader for MiniLaTeX documents using the parser/renderer.  As proof of concept, this document is written in MiniLaTeX  and is distributed via \\href{http://www.knode.io}{www.knode.io}, an implementation of (3).\nTo experiment with MiniLaTeX, take a look at the \\href{https://jxxcarlson.github.io/app/minilatex/src/index.html}{Demo App}.\n\\end{abstract}\n\n\n\\strong{Credits.} \\italic{I wish to acknowledge the generous help that I have received throughout this project from the community at } \\href{http://elmlang.slack.com}{elmlang.slack.com}, \\italic{with special thanks to Ilias van Peer.}\n\n\\tableofcontents\n\n\\section{Introduction}\n\n\nThe introduction of TeX by Donald Knuth, LaTeX by Leslie Lamport, and Postscript/PDF by John Warnock, supported by a vigorous open source community, have given mathematicians, physicists, computer scientists, and engineers the tools they need to produce well-structured documents  with mathematical notation typeset to the very highest esthetic standards.  For dissemination by print and PDF, the problem of mathematical communication is solved.\n\nThe Web, however, offers different challenges.  The MathJax project (\\href{http://www.mathjax.org}{www.mathjax.org}) addresses many of these challenges, and its use is now ubiquitous on platforms such as mathoverflow and on numerous blogs.  There is, however, a gap.  MathJax beautifully renders the purely mathematical part of the text, like the inline text $\\alpha^2 + \\beta^2 = \\gamma^2$, written as\n\n\\begin{verbatim}\n$ \\alpha^2 + \\beta^2 = \\gamma^2 $\n\\end{verbatim}\n\nor like the displayed text\n\n$$\n   \\int_0^1 x^n dx = \\frac{1}{n+1},\n$$\n\nwhich is written as\n\n\\begin{verbatim}\n$$\n   \\int_0^1 x^n dx = \\frac{1}{n+1}\n$$\n\\end{verbatim}\n\nThere remains the rest: macros like \\code{emph}, \\code{section}, \\code{label}, \\code{eqref}, \\code{href}, etc., and a multitude of LaTeX environments from \\italic{theorem} and \\italic{definition} to  \\italic{equation}, \\italic{align}, \\italic{tabular}, \\italic{verbatim}, etc.\n\n It is the aim of this project is to develop a subset of LaTeX, which we call \\italic{MiniLaTeX}, that can be displayed in the browser by a suitable parser-renderer and which can also be run through standard LaTeX tools such as \\code{pdflatex}.\n\nAn experimental web app for using MiniLaTeX in the browser can be found at \\href{http://www.knode.io}{www.knode.io}.  For proof-of-concept examples,  see  the document \\xlinkPublic{445}{MiniLaTeX} on that site.\n\n\\strong{Note.} This document is written in a simplified version of MiniLaTeX (version 0.5).  Below, we describes the current state of the version under development for the planned 1.0 release.  Much of the discussion applies to version 0.5 as well.\n\n\\section{Technology}\n\nThe MiniLaTeX parser/renderer is written in Elm, the functional language with Haskell-like syntax created by Evan Czaplicki.  Elm is best known as language for building robust front-end apps for the web.  The fact that it also has powerful parser tools makes it an excellent choice for a project like MiniLatex, for which an editor/reader app is needed to make real-world use of the parser/renderer.  The app at \\href{http://www.knode.io}{www.knode.io} talks to a back-end app written using the Phoenix web framework for Elixir  (see \\href{https://elixir-lang.org/}{elixir-lang.org}).  Elixir is the functional programming language based on Erlang created by José Valim.\n\n\\section{Components and Strategy}\n\nThe overall flow of data in MiniLatex is\n\n$$\n\\text{MiniLaTeX source text} \\longrightarrow\n\\text{AST} \\longrightarrow\n\\text{HTML}\n$$\n\nwhere the \\code{AST} is an abstract syntax tree consisting of a \\code{LatexExpresssion}, to be defined below.  The parser consumes MiniLaTeX source text and produces an AST.\nThe renderer converts the AST into HTML.  Rendering takes two forms. In the first form, it transforms a single \\code{LatexExpression} into HTML.  In the second, the source text is broken into a list of paragraphs and an initial \\code{latexState} is defined.  As each paragraph is consumed by the processor, it is parsed, the  \\code{latexState} is updated, and the AST for the paragraph is rendered into HTML, with the result depending on the updated \\code{latexState}.  The result is a list of HTML strings that is concatenated to give the final HTML.  We will also discuss a \\code{differ}, which speeds up the the edit-save-render cycle as experienced by an author.  The idea is to keep track of changes to paragraphs and only re-render what has changed since the last edit.\n\n\n\n\n\\section{AST and Parser}\n\nThe core technology of MiniLaTeX is the parser.  It consumes MiniLaTeX source text and produces as output an abstract syntax tree (AST).  The AST  is a list of \\code{LatexExpressions}.  \\code{LatexExpressions} are defined recursively by the following Elm code:\n\n\\begin{verbatim}\ntype LatexExpression\n    = LXString String\n    | Comment String\n    | Item Int LatexExpression\n    | InlineMath String\n    | DisplayMath String\n    | Macro String (List LatexExpression)\n    | Environment String LatexExpression\n    | LatexList (List LatexExpression)\n\\end{verbatim}\n\nSource text of the form $ \\$ TEXT \\$ $ parses as $\\tt{InlineMath}\\ TEXT$,  and text of the form $ \\$\\$TEXT \\$\\$ $  parses as $\\tt{DisplayMath}\\ TEXT$\n\nSource of the form $\\backslash item\\ TEXT$ maps to $\\tt{Item\\ 1\\ TEXT}$, while\n $\\backslash itemitem\\ TEXT$ maps to $\\tt{Item\\ 2\\ TEXT}$, etc.\n\nA macro like $\\backslash foo\\{1\\}\\{bar\\}$ maps to $\\tt{Macro \"foo\" [\"1\", \"bar\"]}$ -- the string after Macro is the macro name, and this is followed by the argument list, which may be empty.\n\nFinally, an environment like\n\\begin{verbatim}\n\\begin{theorem}\nBODY\n\\end{theorem}\n\\end{verbatim}\n\nmaps to $\\tt{Environment\\ \"theorem\"\\ PARSE(BODY)}$,\nwhere $\\tt{PARSE(BODY)}$ is the $\\tt{LatexExpression}$ obtaining by parsing $\\tt{BODY}$.\n\nAs an example, consider the text below.\n\n\\begin{verbatim}\nThis is MiniLaTeX:\n\\begin{theorem}\n  This is a test: $\\alpha^2 = 7$ \\foo{1}\n \\begin{a}\n  la di dah\n\\end{a}\n\\end{theorem}\n\\end{verbatim}\n\nRunning \\code{MiniLatex.Parser.latexList} on this text results in the following AST:\n\n\\begin{verbatim}\nOk (LatexList (\n  LXString \"This is MiniLaTeX:\",\n  [Environment \"theorem\" (\n    LatexList ([\n         LXString \"This is a test:\",\n         InlineMath \"\\\\alpha^2 = 7\",\n         Macro \"foo\" [\"1\"],\n         Environment \"a\" (\n              LatexList ([LXString \"la di dah\"])\n     )]))]))\n\\end{verbatim}\n\nAt the top level it is a list of \\code{LatexExpressions} -- a string and an \\code{Environment}.\nThe body of the environment is a list of \\code{LatexExpressions} -- a string, an \\code{InlineMath} element, a \\code{Macro} with one argument, and another \\code{Environment},  This is a structure which \\code{MiniLatex.Render.render} can transform into HTML.\n\n\\subsection{Parser Combinators}\n\nThe MiniLaTeX parser, comprising 222 lines of code as of this writing, is built using parser combinators from Evan Czaplicki\'s \\href{https://github.com/elm-tools/parser}{elm-tools/parser} package.  The combinators are akin to those in the Haskell parsec package.  As as example, the main MiniLatex parsing function is\n\n\\begin{verbatim}\nparse : Parser LatexExpression\nparse =\n    oneOf\n        [ texComment\n        , lazy (\\_ -> environment)\n        , displayMathDollar\n        , displayMathBrackets\n        , inlineMath\n        , macro\n        , words\n        ]\n\\end{verbatim}\n\nThis function tries each of its component parsers in order until it finds one that\nmatches the input text.  The \\code{environment} parser is the most interesting. It captures the environment name and then passes it on to \\code{environmentOfType}.\n\n\n\\begin{verbatim}\nenvironment : Parser LatexExpression\nenvironment =\n    lazy (\\_ -> beginWord |> andThen environmentOfType)\n\\end{verbatim}\n\nThe \\code{environmentOfType}\nfunction acts as a switching yard, routing the action of the parser to the correct function. The \\italic{enumurate} and \\italic{itemize} environments need special handling, while others are handled by \\code{standardEnvironmentBody}.\n\n\\begin{verbatim}\nenvironmentOfType : String -> Parser LatexExpression\nenvironmentOfType envType =\n    let\n        endWord =\n            \"\\\\end{\" ++ envType ++ \"}\"\n    in\n    case envType of\n        \"enumerate\" ->\n            itemEnvironmentBody endWord envType\n        \"itemize\" ->\n            itemEnvironmentBody endWord envType\n        _ ->\n            standardEnvironmentBody endWord envType\n\\end{verbatim}\n\nA standard environment such as \\italic{theorem} or \\italic{align} is handled like this:\n\n\\begin{verbatim}\nstandardEnvironmentBody endWord envType =\n    succeed identity\n        |. ws\n        |= repeat zeroOrMore parse\n        |. ws\n        |. symbol endWord\n        |. ws\n        |> map LatexList\n        |> map (Environment envType)\n\\end{verbatim}\n\nNote the repeated calls to \\code{parse} in the body of \\code{standardEnvironmentBody}.  Thus an environment can contain a nested sequence of environments, or even a tree thereof..\nThe symbol $|.$ means \"use the following parser to recognize text but do not retain it.\"  Thus $|. \\text{ws}$ means \"recognize white space but ignore it.\"  The symbol  $|$= means \"use the following parse and retain what it yields.\"\n\n\\section{Rendering an AST to HTML}\n\nThis section addresses the second step in the pipelne\n\n$$\n\\text{MiniLaTeX source text} \\longrightarrow\n\\text{AST} \\longrightarrow\n\\text{HTML}\n$$\n\nCode for the second step is housed in the module \\code{MiniLatex.Render}. The primary function is\n\n\\begin{verbatim}\nrender : LatexState -> LatexExpression -> String\nrender latexState latexExpression =\n    case latexExpression of\n        Comment str ->\n            renderComment str\n        Macro name args ->\n            renderMacro latexState name args\n        Item level latexExpression ->\n            renderItem latexState level latexExpression\n        ETC...\n\\end{verbatim}\n\nThis function dispatches a given \\code{LatexExpression} to its handler, which then computes a string representing the HTML output.  That output depends on the current \\code{latexState} -- a data structure  which holds information about various counters such as section numbers as well as information about cross-references.  One can call \\code{render} on a default \\code{LateExpression} to convert it to HTML.  However, the usual process for rendering a MiniLaTeX document from scratch is to first transform it into logical paragraphs, i.e., a list of strings, then use the \\code{accumulator} function defined below to transform paragraphs one at a time into HTML, updating the \\code{latexState} with each paragraph.\n\nThe accumulator is a function of four variables, as indicated below.  The first argument, \\code{parse}, takes a string as input and parses it to produce a \\code{LatexExpression} as output.  The second, \\code{render}, takes a \\code{LatexExpression} and a \\code{LatexState} as input and produces HTML as output.  The third, \\code{updateState}, takes a \\code{LatexExpression} and a \\code{LatexState} as input and produces a new \\code{LatexState} as output.  The fourth and final argument, \\coce{input}, is the list of strings (logical paragraphs) to be rendered.  The output of the \\code{accumulator} is a tuple consisting of a list of strings, the rendered HTML, and the final \\code{latexState}.\n\n$$\n{\\bf accumulator\\ } \\text{parse render updateState inputList} \\longrightarrow (\\text{outputList}, latexState)\n$$\n\nThe \\code{accumulator} uses \\code{List.foldl} to build up the final list of rendered paragraphs one paragraph at a time, starting with an empty list.  The driver for this operation is the \\code{transformer} function, which we treat below.\n\n\n\\begin{verbatim}\naccumulator :\n    (String -> List LatexExpression)\n    -> (List LatexExpression -> LatexState -> String)\n    -> (List LatexExpression -> LatexState -> LatexState)\n    -> List String\n    -> ( List String, LatexState )\naccumulator parse render updateState inputList =\n    inputList\n        |> List.foldl (transformer parse render updateState) ( [], Render.emptyLatexState )\n\\end{verbatim}\n\nThe role of the \\code{transformer} function is to carry forward the current \\code{latexState}, updating it, and transforming \\code{LatexExpressions} into HTML. A kind of transducer, the \\code{transformer} is a function of five variables:\n\n$$\n{\\bf transformer\\ } \\text{parse render updateState input acc} \\longrightarrow\n(\\text{List renderedInput}, \\text{state})\n$$\n\nHere is the code:\n\n\\begin{verbatim}\ntransformer :\n    (input -> parsedInput)\n    -> (parsedInput -> state -> renderedInput)\n    -> (parsedInput -> state -> state)\n    -> input\n    -> ( List renderedInput, state )\n    -> ( List renderedInput, state )\ntransformer parse render updateState input acc =\n    let\n        ( outputList, state ) =\n            acc\n        parsedInput =\n            parse input\n        newState =\n            updateState parsedInput state\n    in\n        ( outputList ++ [ render parsedInput newState ], newState )\n\\end{verbatim}\n\nTo bundle all this code in convenient form, we also define a function\n\n$$\n{\\bf transformParagraphs\\ } \\text{List SourceText} \\longrightarrow  \\text{List HTMLText}\n$$\n\nthat maps a  list of paragraphs of MiniLatex source text to its rendition as list of HTML strings.  The \\code{transformParagraphs} function is defined in terms of the \\code{accumulator}:\n\n\\begin{verbatim}\ntransformParagraphs : List String -> List String\ntransformParagraphs paragraphs =\n    paragraphs\n        |> accumulator Render.parseParagraph renderParagraph updateState\n        |> Tuple.first\n\\end{verbatim}\n\n\n\\section{Differ: Speeding up the Edit Cycle}\n\nIn the previous section, we described in outline how a MiniLaTeX document is rendered into HTML.  In order to have a fast edit-render cycle, one which feels instantaneous or nearly so to an author, we need an additional construct.  The idea is this.  The app maintains a list $X$ of logical paragraphs for the document being edited, as well as a list $r(X)$ of rendered paragraphs. Suppose that the author makes some edits and pressed the update button.  The app computes a new list of logical paragraphs and compares it with the old.  The old list will have the form $X = \\alpha\\beta\\gamma$ and the new one will have the form $Y = \\alpha\\beta\'\\gamma$, where $\\alpha$ is the greatest common prefix and $\\gamma$ is the greatest common suffix.  By greatest common prefix, we mean the largest list $\\alpha$ of contiguous elements of the list $X$ that is also list of contiguous elements of the list $Y$, and such that the first element of $\\alpha$ is the same as the first element of $X$ and also of $Y$.  The largest common suffix is defined similarly.  Note that $r(X) = r(\\alpha)r(\\beta)r(\\gamma)$ and $r(Y) =  r(\\alpha)r(\\beta\')r(\\gamma)$.  Thus to compute $r(Y)$, we need only compute $r(\\beta\')$, relying on the previously computed $r(\\alpha)$ and $r(\\gamma)$.\n\nWhile the strategy just described is not the theoretically  most efficient, it aways works and in fact is quite fast in practice because of the typical behavior of authors -- make a few changes, or add a little text, then press the save/update button.  The point is that changes to the text are generally localized.  If  the author  adds, deletes, or changes a single paragraph, at most one paragraph has to be re-rendered.\n\nWe now discuss the core code for the strategy for diffing and rendering the list of logical paragraphs.  First comes the data structure to be maintained while editing:\n\n\\begin{verbatim}\ntype alias EditRecord =\n    { paragraphs : List String\n    , renderedParagraphs : List String\n    }\n\\end{verbatim}\n\nTo set up this structure when an author begins editing, we make use of the general \\code{initialize} function in module \\code{MiniLatex.Differ}:\n\n\\begin{verbatim}\ninitialize : (List String -> List String) -> String -> EditRecord\ninitialize transformParagraphs text =\n    let\n        paragraphs =\n            paragraphify text\n        renderedParagraphs =\n            transformParagraphs paragraphs\n    in\n        EditRecord paragraphs renderedParagraphs\n\\end{verbatim}\n\n\nTo make use of \\code{Differ.initialize}, we call it with \\code{Accumulator.transformParagraphs}:\n\n\\begin{verbatim}\neditRecord = Differ.initialize Accumulator.transformParagraphs\n\\end{verbatim}\n\n\\subsection{Inside the Differ}\n\nLet\'s take a quick look at the operation of the differ.  The basic data structure\nis the \\code{DiffRecord}\n\n\\begin{verbatim}\ntype alias DiffRecord =\n    { commonInitialSegment : List String\n    , commonTerminalSegment : List String\n    , middleSegmentInSource : List String\n    , middleSegmentInTarget : List String\n    }\n\\end{verbatim}\n\nThus $\\alpha = \\text{commonInitialSegment}$,  $\\beta = \\text{middleSegmentInSource}$,\n$\\gamma = \\text{commonTerminalSegment}$, and $\\beta\' = \\text{middleSegmentInTarget}$.\nThese are computed using the function \\code{diff}:\n\n\\begin{verbatim}\ndiff : List String -> List String -> DiffRecord\ndiff u v =\n    let\n        a = commonInitialSegment u v\n        b = commonTerminalSegment u v\n        la = List.length a\n        lb = List.length b\n        x =  u |> List.drop la |> dropLast lb\n        y = v |> List.drop la |> dropLast lb\n    in\n        DiffRecord a b x y\n\\end{verbatim}\n\nIn an edit cycle, we need to update the current \\code{EditRecord}, which we do using \\code{Differ.update}.\n\n$$\n{\\bf Diff.update\\ } \\text{transformer editRecord text} \\longrightarrow \\text{newEditRecord}\n$$\n\nThe \\code{Diff.update} function defined below breaks the \\code{text} into paragraphs, computes the \\code{diffRecord}, and returns an updated version of \\code{editRecord} by applying \\code{transformer} to $\\beta\'$.\n\n\\begin{verbatim}\nupdate : (String -> String) -> EditRecord -> String -> EditRecord\nupdate transformer editorRecord text =\n    let\n        newParagraphs =\n            paragraphify text\n        diffRecord =\n            diff editorRecord.paragraphs newParagraphs\n        newRenderedParagraphs =\n            renderDiff transformer diffRecord editorRecord.renderedParagraphs\n    in\n        EditRecord newParagraphs newRenderedParagraphs\n\\end{verbatim}\n\nHere is how \\code{renderDiff}, which is used to update the \\code{editRecord}, is defined:\n\n\\begin{verbatim}\nrenderDiff : (String -> String) -> DiffRecord -> List String -> List String\nrenderDiff renderer diffRecord renderedStringList =\n  let\n    ii = List.length diffRecord.commonInitialSegment\n    it = List.length diffRecord.commonTerminalSegment\n    initialSegmentRendered = List.take ii renderedStringList\n    terminalSegmentRendered = takeLast it renderedStringList\n    middleSegmentRendered = (renderList renderer) diffRecord.middleSegmentInTarget\n  in\n    initialSegmentRendered ++ middleSegmentRendered ++ terminalSegmentRendered\n\\end{verbatim}\n\n\n\\section{Status}\n\nMiniLaTeX is now at version 2.1.  It includes the following.\n\n\\begin{itemize}\n\n\\item \\strong{Environments:}  \\italic{align, center, enumerate, eqnarray, equation, itemize, macros, tabular}. The environments  \\italic{theorem, proposition, corollary, lemma, definition} are handled by a default mechanism.\n\n\\item \\strong{Macros}: \\italic{cite, code, ellie, emph, eqref, href, iframe, image, index, italic, label, maketitle, mdash, ndash, newcommand, ref, section, section*, strong, subheading, subsection, subsection*, subsubsection, subsubsection*, title, term, xlink, xlinkPublic}\n\\end{itemize}\n\nMost of the macro and environment renderers are in final or close to final form. A few, e.g. \\italic{tabular} need considerably more work, and a few more are dummies.\n\n\n\n\\comment{ Article by Ilias: https://github.com/zwilias/elm-json/blob/master/src/Json/Parser.elm}\n\n\n';
var _user$project$App_Source$initialText = '\n\\title{MiniLaTeX Demo}\n\n\\author{James Carlson}\n\n\\email{jxxcarlson at gmail}\n\n\\date{November 13, 2017}\n\n\\revision{January 16, 2018}\n\n\\maketitle\n\n\\tableofcontents\n\n\\section{Introduction}\n\nMiniLaTeX is a subset of LaTeX which can be displayed in a web browser.  This document is written in MiniLatex; for additional examples, try the buttons on the lower left, or go to \\href{http://www.knode.io}{www.knode.io}\n\nFeel free to edit and re-render the text on the left and to experiment with the buttons above.  To export a rendered LaTeX file, simply click on the \"Export\" button above.  Your file will be downloaded as \"file.html\".\n\nPlease bear in mind that MiniLaTeX is still an R&D operation. We are working hard to extend its scope; we welcome bug reports, comments and suggestions.\n\nMiniLatex is written in Elm, the functional language for front-end web development that began with Evan Czaplicki\'s 2012 senior thesis. MiniLatex, does not, however, depend on any particular language.  Indeed, we plan a second implementation in Haskell.\n\n\\section{Examples}\n\nThe Pythagorean Theorem, $a^2 + b^2 = c^2$,\nis useful for computing distances.\n\n\nFormula \\eqref{integral}\nis one that you learned in Calculus class.\n\n\\begin{equation}\n\\label{integral}\n\\int_0^1 x^n dx = \\frac{1}{n+1}\n\\end{equation}\n\n\\begin{theorem}\nThere are infinitely many primes, and\neach satisfies $a^{p-1} \\equiv 1 \\text{ mod } p$, provided\nthat $p$ does not divide $a$.\n\\end{theorem}\n\n\\strong{Light Elements}\n\\begin{tabular}{l l l l}\nHydrogen & H & 1 & 1.008 \\\\\nHelium & He & 2 & 4.003 \\\\\nLithium & Li & 3 &  6.94 \\\\\nBeryllium & Be & 4 & 9.012 \\\\\n\\end{tabular}\n\n\\image{http://psurl.s3.amazonaws.com/images/jc/propagator_t=2-6feb.png}{Free particle propagator}{width: 300, align: center}\n\n\nNote that in the \\italic{source} of the listing below,\nthere are no line numbers.\n\n\\strong{MiniLaTeX Abstract Syntax Tree (AST)}\n\n\\begin{listing}\ntype LatexExpression\n    = LXString String\n    | Comment String\n    | Item Int LatexExpression\n    | InlineMath String\n    | DisplayMath String\n    | Macro String (List LatexExpression)\n    | Environment String LatexExpression\n    | LatexList (List LatexExpression)\n\\end{listing}\n\nThe MiniLaTeX parser reads text and produces\nan AST.  A rendering function converts the AST\ninto HTML.  One could easily write\nfunctions \\code{render: LatexExpression -> String}\nto make other conversions.\n\n\\section{Short Writer\'s Guide}\n\nWe plan a complete Writer\'s Guide for MiniLaTeX.  For now, however, just a few pointers.\n\n\\begin{itemize}\n\n\\item Make liberal use of blank lines. Your source text will be much easier to read, and the converter has optimizations that work especially well when this is done.\n\n\\item Equations and environments should have a blank line above one below.  Items in lists should be separated by blank lines.    This is not strictly necessary, but it helps the converter and it helps you.\n\n\\item  The begin-end pairs that delimit environments should begin at the left margin of the text.  For the moment this is mandatory.\n\n\\end{itemize}\n\n\\italic{Fast Render} is an optimization that speeds\nup parsing and rendering for long documents.\nOnly paragraphs which are changed are re-parsed\n(expensive) and re-rendered (inexpensive).\nHowever, to resolve section numbers, cross-references,\netc., a full render is necessary.\n\nAll of these operations will have a very significant speed-up\nwhen version 0.19 of the Elm compiler is released and\nwhen MathJax 3.0 is released and integrated into MiniLaTeX.\n\n\\section{More about MiniLaTeX}\n\nArticles and code:\n\n\\begin{itemize}\n\n\\item \\href{https://hackernoon.com/towards-latex-in-the-browser-2ff4d94a0c08}{Towards LaTeX in the Browser}\n\n\\item \\href{https://github.com/jxxcarlson/minilatexDemo}{Code for the Demo App}\n\n\\item \\href{http://package.elm-lang.org/packages/jxxcarlson/minilatex/latest}{The MiniLatex Elm Library}\n\n\\end{itemize}\n\nTo try out MiniLatex for real, sign up for a free account at\n \\href{http://www.knode.io}{www.knode.io}.  The app is still\n under development &mdash;  we need people to test it and give feedback.\nContributions to help improve the open-source\nMiniLatex Parser-Renderer are most welcome.\nHere is the \\href{https://github.com/jxxcarlson/minilatex}{GitHub repository}.\nThe MiniLatex Demo as well as the app at knode.io are written in\n\\href{http://elm-lang.org/}{Elm}.  We also plan a Haskell version.\n\nPlease send comments, bug reports, etc. to jxxcarlson at gmail.\n\n\\section{Technical Note}\nThere is a \\italic{very rough} \\href{http://www.knode.io/#@public/628}{draft grammar}\nfor MiniLaTeX, written mostly in EBNF.  However, there are a few\nproductions, notably for environments, which are not context-free.\nRecall that in a context-free grammar, all productions are\nof the form $A \\Rightarrow \\beta$, where $A$ is a non-terminal symbol\nand $\\beta$ is a sequence of terminals and nonterminals.  There\nare some productions of the form $A\\beta \\Rightarrow \\gamma$,\nwhere $\\beta$ is a terminal symbol.  These are\ncontext-sensitive productions, with $\\beta$ providing the context.\n\n\n\n\\section{Restrictions, Limitations, and Todos}\n\nBelow\nare some of the current restrictions and limitations.\n\n\\begin{enumerate}\n\n\\item The enumerate and itemize environments cannot be nested (but can contain inline math and macros).\n  In addition there is a parser bug which prevents the use of these environments within\n  other environments such as theorem.\n\n\\item The tabular environment ignores formatting information\nand left-justifies everything in the cell.\n\n\n\\end{enumerate}\n\n\nWe are working to fix known issues and to expand the scope of MiniLatex.\n\n\\bigskip\n\n\\image{https://cdn-images-1.medium.com/max/1200/1*HlpVE5TFBUp17ua1AdiKpw.gif}{}{align: center}\n\n';
var _user$project$App_Source$htmlSuffix = '\n  </body>\n  </html>\n';
var _user$project$App_Source$htmlPrefix = '\n  <html>\n  <head>\n\n    <meta charset=\"utf-8\" />\n\n    <style>\n     .code {font-family: \"Courier New\", Courier, monospace; background-color: #f5f5f5; font-weight: 300;}\n     .center {margin-left: auto; margin-right: auto;}\n     .indent {margin-left: 2em!important}\n     .italic {font-style: oblique!important}\n     .environment {margin-top: 1em; margin-bottom: 1em;}\n     .strong {font-weight: bold}\n     .subheading {margin-top: 0.75em; margin-bottom: 0.5em; font-weight: bold}\n     .verbatim {margin-top: 1em; margin-bottom: 1em; font-size: 10pt;}\n     td {padding-right: 10px;}\n\n       a.linkback:link { color: white;}\n       a.linkback:visited { color: white;}\n       a.hover:visited { color: red;}\n       a.hover:visited { color: blue;}\n\n\n     a:hover { color: red;}\n     a:active { color: blue;}\n\n     .errormessage {white-space: pre-wrap;}\n\n     .title { font-weight: bold; font-size: 1.7em; margin-bottom: 0px; padding-bottom: 0px;}\n     .smallskip {margin-top:0; margin-bottom: -12px;}\n\n     .item1 {margin-bottom: 6px;}\n\n     .verse { white-space: pre-line; margin-top:0}\n     .authorinfo { white-space: pre-line; margin-top:-8px}\n\n     .ListEnvironment { list-style-type: none; margin-left:8px; padding-left: 8px; margin-top: 0;margin-bottom:12px;}\n     .tocTitle { margin-bottom: 0; margin-top:12px; font-weight: bold;}\n     .sectionLevel1 {padding-left: 0; margin-left: 0; }\n     .sectionLevel2 {padding-left: 8px; margin-left: 8px; }\n     .sectionLevel3 {padding-left: 22px; margin-left: 22px; }\n\n    </style>\n\n    <script type=\"text/javascript\" async\n          src=\"https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.2/MathJax.js?config=TeX-MML-AM_CHTML\">\n    </script>\n\n    <title>MiniLaTeX Demo</title>\n\n  </head>\n\n  <body>\n\n      <script type=\"text/x-mathjax-config\">\n         MathJax.Hub.Config(\n           { tex2jax: {inlineMath: [[\'$\',\'$\'], [\'\\(\',\'\\)\']]},\n            processEscapes: true\n            }\n      );\n\n    </script>\n\n\n';

var _user$project$MiniLatex_Parser$notMacroSpecialCharacter = function (c) {
	return !(_elm_lang$core$Native_Utils.eq(
		c,
		_elm_lang$core$Native_Utils.chr('{')) || (_elm_lang$core$Native_Utils.eq(
		c,
		_elm_lang$core$Native_Utils.chr(' ')) || _elm_lang$core$Native_Utils.eq(
		c,
		_elm_lang$core$Native_Utils.chr('\n'))));
};
var _user$project$MiniLatex_Parser$notSpecialTableOrMacroCharacter = function (c) {
	return !(_elm_lang$core$Native_Utils.eq(
		c,
		_elm_lang$core$Native_Utils.chr(' ')) || (_elm_lang$core$Native_Utils.eq(
		c,
		_elm_lang$core$Native_Utils.chr('\n')) || (_elm_lang$core$Native_Utils.eq(
		c,
		_elm_lang$core$Native_Utils.chr('\\')) || (_elm_lang$core$Native_Utils.eq(
		c,
		_elm_lang$core$Native_Utils.chr('$')) || (_elm_lang$core$Native_Utils.eq(
		c,
		_elm_lang$core$Native_Utils.chr('}')) || _elm_lang$core$Native_Utils.eq(
		c,
		_elm_lang$core$Native_Utils.chr('&')))))));
};
var _user$project$MiniLatex_Parser$notSpecialCharacter = function (c) {
	return !(_elm_lang$core$Native_Utils.eq(
		c,
		_elm_lang$core$Native_Utils.chr(' ')) || (_elm_lang$core$Native_Utils.eq(
		c,
		_elm_lang$core$Native_Utils.chr('\n')) || (_elm_lang$core$Native_Utils.eq(
		c,
		_elm_lang$core$Native_Utils.chr('\\')) || _elm_lang$core$Native_Utils.eq(
		c,
		_elm_lang$core$Native_Utils.chr('$')))));
};
var _user$project$MiniLatex_Parser$reservedWord = A2(
	_elm_tools$parser$Parser$inContext,
	'reservedWord',
	A2(
		_elm_tools$parser$Parser_ops['|='],
		_elm_tools$parser$Parser$succeed(_elm_lang$core$Basics$identity),
		_elm_tools$parser$Parser$oneOf(
			{
				ctor: '::',
				_0: _elm_tools$parser$Parser$symbol('\\begin'),
				_1: {
					ctor: '::',
					_0: _elm_tools$parser$Parser$keyword('\\end'),
					_1: {
						ctor: '::',
						_0: _elm_tools$parser$Parser$keyword('\\item'),
						_1: {ctor: '[]'}
					}
				}
			})));
var _user$project$MiniLatex_Parser$mustFail = function (parser) {
	return A2(
		_elm_tools$parser$Parser$inContext,
		'mustFail',
		A2(
			_elm_tools$parser$Parser$andThen,
			function (res) {
				var _p0 = res;
				if (_p0.ctor === 'Err') {
					return _elm_tools$parser$Parser$fail(_p0._0);
				} else {
					return _elm_tools$parser$Parser$succeed(
						{ctor: '_Tuple0'});
				}
			},
			_elm_tools$parser$Parser$oneOf(
				{
					ctor: '::',
					_0: A2(
						_elm_tools$parser$Parser$map,
						_elm_lang$core$Basics$always(
							_elm_lang$core$Result$Err('I didn\'t fail')),
						A3(
							_elm_tools$parser$Parser$delayedCommitMap,
							_elm_lang$core$Basics$always,
							parser,
							_elm_tools$parser$Parser$succeed(
								{ctor: '_Tuple0'}))),
					_1: {
						ctor: '::',
						_0: _elm_tools$parser$Parser$succeed(
							_elm_lang$core$Result$Ok(
								{ctor: '_Tuple0'})),
						_1: {ctor: '[]'}
					}
				})));
};
var _user$project$MiniLatex_Parser$allOrNothing = function (parser) {
	return A2(
		_elm_tools$parser$Parser$inContext,
		'allOrNothing',
		A3(
			_elm_tools$parser$Parser$delayedCommitMap,
			_elm_lang$core$Basics$always,
			parser,
			_elm_tools$parser$Parser$succeed(
				{ctor: '_Tuple0'})));
};
var _user$project$MiniLatex_Parser$parseUntil = function (marker) {
	return A2(
		_elm_tools$parser$Parser$inContext,
		'parseUntil',
		A2(
			_elm_tools$parser$Parser$map,
			_elm_lang$core$String$dropRight(
				_elm_lang$core$String$length(marker)),
			_elm_tools$parser$Parser$source(
				_elm_tools$parser$Parser$ignoreUntil(marker))));
};
var _user$project$MiniLatex_Parser$endWord = A2(
	_elm_tools$parser$Parser$inContext,
	'endWord',
	A2(
		_elm_tools$parser$Parser_ops['|='],
		A2(
			_elm_tools$parser$Parser_ops['|.'],
			A2(
				_elm_tools$parser$Parser_ops['|.'],
				_elm_tools$parser$Parser$succeed(_elm_lang$core$Basics$identity),
				A2(
					_elm_tools$parser$Parser$ignore,
					_elm_tools$parser$Parser$zeroOrMore,
					F2(
						function (x, y) {
							return _elm_lang$core$Native_Utils.eq(x, y);
						})(
						_elm_lang$core$Native_Utils.chr(' ')))),
			_elm_tools$parser$Parser$symbol('\\end{')),
		_user$project$MiniLatex_Parser$parseUntil('}')));
var _user$project$MiniLatex_Parser$ws = A2(
	_elm_tools$parser$Parser$ignore,
	_elm_tools$parser$Parser$zeroOrMore,
	function (c) {
		return _elm_lang$core$Native_Utils.eq(
			c,
			_elm_lang$core$Native_Utils.chr(' ')) || _elm_lang$core$Native_Utils.eq(
			c,
			_elm_lang$core$Native_Utils.chr('\n'));
	});
var _user$project$MiniLatex_Parser$spaces = A2(
	_elm_tools$parser$Parser$ignore,
	_elm_tools$parser$Parser$zeroOrMore,
	function (c) {
		return _elm_lang$core$Native_Utils.eq(
			c,
			_elm_lang$core$Native_Utils.chr(' '));
	});
var _user$project$MiniLatex_Parser$word = A2(
	_elm_tools$parser$Parser$inContext,
	'word',
	A2(
		_elm_tools$parser$Parser_ops['|.'],
		A2(
			_elm_tools$parser$Parser_ops['|='],
			A2(
				_elm_tools$parser$Parser_ops['|.'],
				_elm_tools$parser$Parser$succeed(_elm_lang$core$Basics$identity),
				_user$project$MiniLatex_Parser$spaces),
			A2(_elm_tools$parser$Parser$keep, _elm_tools$parser$Parser$oneOrMore, _user$project$MiniLatex_Parser$notSpecialCharacter)),
		_user$project$MiniLatex_Parser$ws));
var _user$project$MiniLatex_Parser$specialWord = A2(
	_elm_tools$parser$Parser$inContext,
	'specialWord',
	A2(
		_elm_tools$parser$Parser_ops['|.'],
		A2(
			_elm_tools$parser$Parser_ops['|='],
			A2(
				_elm_tools$parser$Parser_ops['|.'],
				_elm_tools$parser$Parser$succeed(_elm_lang$core$Basics$identity),
				_user$project$MiniLatex_Parser$spaces),
			A2(_elm_tools$parser$Parser$keep, _elm_tools$parser$Parser$oneOrMore, _user$project$MiniLatex_Parser$notSpecialTableOrMacroCharacter)),
		_user$project$MiniLatex_Parser$spaces));
var _user$project$MiniLatex_Parser$innerMacroName = A2(
	_elm_tools$parser$Parser$inContext,
	'innerMacroName',
	A2(
		_elm_tools$parser$Parser_ops['|='],
		A2(
			_elm_tools$parser$Parser_ops['|.'],
			A2(
				_elm_tools$parser$Parser_ops['|.'],
				_elm_tools$parser$Parser$succeed(_elm_lang$core$Basics$identity),
				_user$project$MiniLatex_Parser$spaces),
			_elm_tools$parser$Parser$symbol('\\')),
		A2(_elm_tools$parser$Parser$keep, _elm_tools$parser$Parser$oneOrMore, _user$project$MiniLatex_Parser$notMacroSpecialCharacter)));
var _user$project$MiniLatex_Parser$macroName = A2(
	_elm_tools$parser$Parser$inContext,
	'macroName',
	_user$project$MiniLatex_Parser$allOrNothing(
		A2(
			_elm_tools$parser$Parser_ops['|='],
			A2(
				_elm_tools$parser$Parser_ops['|.'],
				_elm_tools$parser$Parser$succeed(_elm_lang$core$Basics$identity),
				_user$project$MiniLatex_Parser$mustFail(_user$project$MiniLatex_Parser$reservedWord)),
			_user$project$MiniLatex_Parser$innerMacroName)));
var _user$project$MiniLatex_Parser$envName = A2(
	_elm_tools$parser$Parser$inContext,
	'envName',
	A2(
		_elm_tools$parser$Parser_ops['|='],
		A2(
			_elm_tools$parser$Parser_ops['|.'],
			A2(
				_elm_tools$parser$Parser_ops['|.'],
				_elm_tools$parser$Parser$succeed(_elm_lang$core$Basics$identity),
				_user$project$MiniLatex_Parser$spaces),
			_elm_tools$parser$Parser$symbol('\\begin{')),
		_user$project$MiniLatex_Parser$parseUntil('}')));
var _user$project$MiniLatex_Parser$LatexList = function (a) {
	return {ctor: 'LatexList', _0: a};
};
var _user$project$MiniLatex_Parser$Environment = F2(
	function (a, b) {
		return {ctor: 'Environment', _0: a, _1: b};
	});
var _user$project$MiniLatex_Parser$Macro = F2(
	function (a, b) {
		return {ctor: 'Macro', _0: a, _1: b};
	});
var _user$project$MiniLatex_Parser$defaultLatexExpression = {
	ctor: '::',
	_0: A2(
		_user$project$MiniLatex_Parser$Macro,
		'NULL',
		{ctor: '[]'}),
	_1: {ctor: '[]'}
};
var _user$project$MiniLatex_Parser$DisplayMath = function (a) {
	return {ctor: 'DisplayMath', _0: a};
};
var _user$project$MiniLatex_Parser$displayMathDollar = A2(
	_elm_tools$parser$Parser$inContext,
	'display math $$',
	A2(
		_elm_tools$parser$Parser_ops['|.'],
		A2(
			_elm_tools$parser$Parser_ops['|='],
			A2(
				_elm_tools$parser$Parser_ops['|.'],
				A2(
					_elm_tools$parser$Parser_ops['|.'],
					_elm_tools$parser$Parser$succeed(_user$project$MiniLatex_Parser$DisplayMath),
					_user$project$MiniLatex_Parser$spaces),
				_elm_tools$parser$Parser$symbol('$$')),
			_user$project$MiniLatex_Parser$parseUntil('$$')),
		_user$project$MiniLatex_Parser$spaces));
var _user$project$MiniLatex_Parser$displayMathBrackets = A2(
	_elm_tools$parser$Parser$inContext,
	'display math brackets',
	A2(
		_elm_tools$parser$Parser_ops['|='],
		A2(
			_elm_tools$parser$Parser_ops['|.'],
			A2(
				_elm_tools$parser$Parser_ops['|.'],
				_elm_tools$parser$Parser$succeed(_user$project$MiniLatex_Parser$DisplayMath),
				_user$project$MiniLatex_Parser$spaces),
			_elm_tools$parser$Parser$symbol('\\[')),
		_user$project$MiniLatex_Parser$parseUntil('\\]')));
var _user$project$MiniLatex_Parser$InlineMath = function (a) {
	return {ctor: 'InlineMath', _0: a};
};
var _user$project$MiniLatex_Parser$inlineMath = function (wsParser) {
	return A2(
		_elm_tools$parser$Parser$inContext,
		'inline math',
		A2(
			_elm_tools$parser$Parser_ops['|.'],
			A2(
				_elm_tools$parser$Parser_ops['|='],
				A2(
					_elm_tools$parser$Parser_ops['|.'],
					_elm_tools$parser$Parser$succeed(_user$project$MiniLatex_Parser$InlineMath),
					_elm_tools$parser$Parser$symbol('$')),
				_user$project$MiniLatex_Parser$parseUntil('$')),
			wsParser));
};
var _user$project$MiniLatex_Parser$Item = F2(
	function (a, b) {
		return {ctor: 'Item', _0: a, _1: b};
	});
var _user$project$MiniLatex_Parser$Comment = function (a) {
	return {ctor: 'Comment', _0: a};
};
var _user$project$MiniLatex_Parser$texComment = A2(
	_elm_tools$parser$Parser$inContext,
	'texComment',
	A2(
		_elm_tools$parser$Parser$map,
		_user$project$MiniLatex_Parser$Comment,
		_elm_tools$parser$Parser$source(
			A2(
				_elm_tools$parser$Parser_ops['|.'],
				_elm_tools$parser$Parser$symbol('%'),
				_elm_tools$parser$Parser$ignoreUntil('\n')))));
var _user$project$MiniLatex_Parser$LXString = function (a) {
	return {ctor: 'LXString', _0: a};
};
var _user$project$MiniLatex_Parser$defaultLatexList = _user$project$MiniLatex_Parser$LatexList(
	{
		ctor: '::',
		_0: _user$project$MiniLatex_Parser$LXString('Parse Error'),
		_1: {ctor: '[]'}
	});
var _user$project$MiniLatex_Parser$words = A2(
	_elm_tools$parser$Parser$inContext,
	'words',
	A2(
		_elm_tools$parser$Parser$map,
		_user$project$MiniLatex_Parser$LXString,
		A2(
			_elm_tools$parser$Parser$map,
			_elm_lang$core$String$join(' '),
			A2(
				_elm_tools$parser$Parser_ops['|='],
				_elm_tools$parser$Parser$succeed(_elm_lang$core$Basics$identity),
				A2(_elm_tools$parser$Parser$repeat, _elm_tools$parser$Parser$oneOrMore, _user$project$MiniLatex_Parser$word)))));
var _user$project$MiniLatex_Parser$specialWords = A2(
	_elm_tools$parser$Parser$inContext,
	'specialWords',
	A2(
		_elm_tools$parser$Parser$map,
		_user$project$MiniLatex_Parser$LXString,
		A2(
			_elm_tools$parser$Parser$map,
			_elm_lang$core$String$join(' '),
			A2(
				_elm_tools$parser$Parser_ops['|='],
				_elm_tools$parser$Parser$succeed(_elm_lang$core$Basics$identity),
				A2(_elm_tools$parser$Parser$repeat, _elm_tools$parser$Parser$oneOrMore, _user$project$MiniLatex_Parser$specialWord)))));
var _user$project$MiniLatex_Parser$arg = A2(
	_elm_tools$parser$Parser$inContext,
	'arg',
	A2(
		_elm_tools$parser$Parser$map,
		_user$project$MiniLatex_Parser$LatexList,
		A2(
			_elm_tools$parser$Parser_ops['|.'],
			A2(
				_elm_tools$parser$Parser_ops['|='],
				A2(
					_elm_tools$parser$Parser_ops['|.'],
					_elm_tools$parser$Parser$succeed(_elm_lang$core$Basics$identity),
					_elm_tools$parser$Parser$keyword('{')),
				A2(
					_elm_tools$parser$Parser$repeat,
					_elm_tools$parser$Parser$zeroOrMore,
					_elm_tools$parser$Parser$oneOf(
						{
							ctor: '::',
							_0: _user$project$MiniLatex_Parser$specialWords,
							_1: {
								ctor: '::',
								_0: _user$project$MiniLatex_Parser$inlineMath(_user$project$MiniLatex_Parser$spaces),
								_1: {
									ctor: '::',
									_0: _elm_tools$parser$Parser$lazy(
										function (_p1) {
											return _user$project$MiniLatex_Parser$macro(_user$project$MiniLatex_Parser$ws);
										}),
									_1: {ctor: '[]'}
								}
							}
						}))),
			_elm_tools$parser$Parser$symbol('}'))));
var _user$project$MiniLatex_Parser$macro = function (wsParser) {
	return A2(
		_elm_tools$parser$Parser$inContext,
		'macro',
		A2(
			_elm_tools$parser$Parser_ops['|.'],
			A2(
				_elm_tools$parser$Parser_ops['|='],
				A2(
					_elm_tools$parser$Parser_ops['|='],
					_elm_tools$parser$Parser$succeed(_user$project$MiniLatex_Parser$Macro),
					_user$project$MiniLatex_Parser$macroName),
				A2(_elm_tools$parser$Parser$repeat, _elm_tools$parser$Parser$zeroOrMore, _user$project$MiniLatex_Parser$arg)),
			wsParser));
};
var _user$project$MiniLatex_Parser$item = function (endWord) {
	return A2(
		_elm_tools$parser$Parser$inContext,
		'item',
		A2(
			_elm_tools$parser$Parser$map,
			function (x) {
				return A2(
					_user$project$MiniLatex_Parser$Item,
					1,
					_user$project$MiniLatex_Parser$LatexList(x));
			},
			A2(
				_elm_tools$parser$Parser_ops['|.'],
				A2(
					_elm_tools$parser$Parser_ops['|.'],
					A2(
						_elm_tools$parser$Parser_ops['|='],
						A2(
							_elm_tools$parser$Parser_ops['|.'],
							_elm_tools$parser$Parser$succeed(_elm_lang$core$Basics$identity),
							_user$project$MiniLatex_Parser$spaces),
						A2(
							_elm_tools$parser$Parser$repeat,
							_elm_tools$parser$Parser$zeroOrMore,
							_elm_tools$parser$Parser$oneOf(
								{
									ctor: '::',
									_0: _user$project$MiniLatex_Parser$words,
									_1: {
										ctor: '::',
										_0: _user$project$MiniLatex_Parser$inlineMath(_user$project$MiniLatex_Parser$ws),
										_1: {
											ctor: '::',
											_0: _user$project$MiniLatex_Parser$macro(_user$project$MiniLatex_Parser$ws),
											_1: {ctor: '[]'}
										}
									}
								}))),
					_user$project$MiniLatex_Parser$ws),
				_elm_tools$parser$Parser$oneOf(
					{
						ctor: '::',
						_0: _elm_tools$parser$Parser$symbol('\\item'),
						_1: {
							ctor: '::',
							_0: _elm_tools$parser$Parser$symbol(endWord),
							_1: {ctor: '[]'}
						}
					}))));
};
var _user$project$MiniLatex_Parser$itemEnvironmentBody = F2(
	function (endWord, envType) {
		return A2(
			_elm_tools$parser$Parser$inContext,
			'itemEnvironmentBody',
			function () {
				var beginSymbol = '';
				return A2(
					_elm_tools$parser$Parser$map,
					_user$project$MiniLatex_Parser$Environment(envType),
					A2(
						_elm_tools$parser$Parser$map,
						_user$project$MiniLatex_Parser$LatexList,
						A2(
							_elm_tools$parser$Parser_ops['|.'],
							A2(
								_elm_tools$parser$Parser_ops['|='],
								A2(
									_elm_tools$parser$Parser_ops['|.'],
									A2(
										_elm_tools$parser$Parser_ops['|.'],
										_elm_tools$parser$Parser$succeed(_elm_lang$core$Basics$identity),
										_user$project$MiniLatex_Parser$ws),
									_elm_tools$parser$Parser$symbol('\\item')),
								A2(
									_elm_tools$parser$Parser$repeat,
									_elm_tools$parser$Parser$zeroOrMore,
									_user$project$MiniLatex_Parser$item(endWord))),
							_user$project$MiniLatex_Parser$ws)));
			}());
	});
var _user$project$MiniLatex_Parser$tableCell = A2(
	_elm_tools$parser$Parser$inContext,
	'tableCell',
	A2(
		_elm_tools$parser$Parser_ops['|='],
		A2(
			_elm_tools$parser$Parser_ops['|.'],
			_elm_tools$parser$Parser$succeed(_elm_lang$core$Basics$identity),
			_user$project$MiniLatex_Parser$spaces),
		_elm_tools$parser$Parser$oneOf(
			{
				ctor: '::',
				_0: _user$project$MiniLatex_Parser$inlineMath(_user$project$MiniLatex_Parser$spaces),
				_1: {
					ctor: '::',
					_0: _user$project$MiniLatex_Parser$specialWords,
					_1: {ctor: '[]'}
				}
			})));
var _user$project$MiniLatex_Parser$nextCell = A2(
	_elm_tools$parser$Parser$inContext,
	'nextCell',
	A2(
		_elm_tools$parser$Parser$delayedCommit,
		_user$project$MiniLatex_Parser$spaces,
		A2(
			_elm_tools$parser$Parser_ops['|='],
			A2(
				_elm_tools$parser$Parser_ops['|.'],
				A2(
					_elm_tools$parser$Parser_ops['|.'],
					_elm_tools$parser$Parser$succeed(_elm_lang$core$Basics$identity),
					_elm_tools$parser$Parser$symbol('&')),
				_user$project$MiniLatex_Parser$spaces),
			_user$project$MiniLatex_Parser$tableCell)));
var _user$project$MiniLatex_Parser$tableCellHelp = function (revCells) {
	return A2(
		_elm_tools$parser$Parser$inContext,
		'tableCellHelp',
		_elm_tools$parser$Parser$oneOf(
			{
				ctor: '::',
				_0: A2(
					_elm_tools$parser$Parser$andThen,
					function (c) {
						return _user$project$MiniLatex_Parser$tableCellHelp(
							{ctor: '::', _0: c, _1: revCells});
					},
					_user$project$MiniLatex_Parser$nextCell),
				_1: {
					ctor: '::',
					_0: _elm_tools$parser$Parser$succeed(
						_elm_lang$core$List$reverse(revCells)),
					_1: {ctor: '[]'}
				}
			}));
};
var _user$project$MiniLatex_Parser$tableRow = A2(
	_elm_tools$parser$Parser$inContext,
	'tableRow',
	A2(
		_elm_tools$parser$Parser$map,
		_user$project$MiniLatex_Parser$LatexList,
		A2(
			_elm_tools$parser$Parser_ops['|.'],
			A2(
				_elm_tools$parser$Parser_ops['|.'],
				A2(
					_elm_tools$parser$Parser_ops['|='],
					A2(
						_elm_tools$parser$Parser_ops['|.'],
						_elm_tools$parser$Parser$succeed(_elm_lang$core$Basics$identity),
						_user$project$MiniLatex_Parser$spaces),
					A2(
						_elm_tools$parser$Parser$andThen,
						function (c) {
							return _user$project$MiniLatex_Parser$tableCellHelp(
								{
									ctor: '::',
									_0: c,
									_1: {ctor: '[]'}
								});
						},
						_user$project$MiniLatex_Parser$tableCell)),
				_user$project$MiniLatex_Parser$spaces),
			_elm_tools$parser$Parser$oneOf(
				{
					ctor: '::',
					_0: _elm_tools$parser$Parser$symbol('\n'),
					_1: {
						ctor: '::',
						_0: _elm_tools$parser$Parser$symbol('\\\\\n'),
						_1: {ctor: '[]'}
					}
				}))));
var _user$project$MiniLatex_Parser$tableBody = A2(
	_elm_tools$parser$Parser$inContext,
	'tableBody',
	A2(
		_elm_tools$parser$Parser$map,
		_user$project$MiniLatex_Parser$LatexList,
		A2(
			_elm_tools$parser$Parser_ops['|='],
			A2(
				_elm_tools$parser$Parser_ops['|.'],
				A2(
					_elm_tools$parser$Parser_ops['|.'],
					_elm_tools$parser$Parser$succeed(_elm_lang$core$Basics$identity),
					A2(_elm_tools$parser$Parser$repeat, _elm_tools$parser$Parser$zeroOrMore, _user$project$MiniLatex_Parser$arg)),
				_user$project$MiniLatex_Parser$ws),
			A2(_elm_tools$parser$Parser$repeat, _elm_tools$parser$Parser$oneOrMore, _user$project$MiniLatex_Parser$tableRow))));
var _user$project$MiniLatex_Parser$tabularEnvironmentBody = F2(
	function (endWord, envType) {
		return A2(
			_elm_tools$parser$Parser$inContext,
			'tabularEnvironmentBody',
			A2(
				_elm_tools$parser$Parser$map,
				_user$project$MiniLatex_Parser$Environment(envType),
				A2(
					_elm_tools$parser$Parser_ops['|.'],
					A2(
						_elm_tools$parser$Parser_ops['|.'],
						A2(
							_elm_tools$parser$Parser_ops['|.'],
							A2(
								_elm_tools$parser$Parser_ops['|='],
								A2(
									_elm_tools$parser$Parser_ops['|.'],
									_elm_tools$parser$Parser$succeed(_elm_lang$core$Basics$identity),
									_user$project$MiniLatex_Parser$ws),
								_user$project$MiniLatex_Parser$tableBody),
							_user$project$MiniLatex_Parser$ws),
						_elm_tools$parser$Parser$symbol(endWord)),
					_user$project$MiniLatex_Parser$ws)));
	});
var _user$project$MiniLatex_Parser$passThroughBody = F2(
	function (endWord, envType) {
		return A2(
			_elm_tools$parser$Parser$inContext,
			'passThroughBody',
			A2(
				_elm_tools$parser$Parser$map,
				_user$project$MiniLatex_Parser$Environment(envType),
				A2(
					_elm_tools$parser$Parser$map,
					_user$project$MiniLatex_Parser$LXString,
					A2(
						_elm_tools$parser$Parser_ops['|.'],
						A2(
							_elm_tools$parser$Parser_ops['|='],
							_elm_tools$parser$Parser$succeed(_elm_lang$core$Basics$identity),
							_user$project$MiniLatex_Parser$parseUntil(endWord)),
						_user$project$MiniLatex_Parser$ws))));
	});
var _user$project$MiniLatex_Parser$parseEnvironmentDict = _elm_lang$core$Dict$fromList(
	{
		ctor: '::',
		_0: {
			ctor: '_Tuple2',
			_0: 'enumerate',
			_1: F2(
				function (endWord, envType) {
					return A2(_user$project$MiniLatex_Parser$itemEnvironmentBody, endWord, envType);
				})
		},
		_1: {
			ctor: '::',
			_0: {
				ctor: '_Tuple2',
				_0: 'itemize',
				_1: F2(
					function (endWord, envType) {
						return A2(_user$project$MiniLatex_Parser$itemEnvironmentBody, endWord, envType);
					})
			},
			_1: {
				ctor: '::',
				_0: {
					ctor: '_Tuple2',
					_0: 'tabular',
					_1: F2(
						function (endWord, envType) {
							return A2(_user$project$MiniLatex_Parser$tabularEnvironmentBody, endWord, envType);
						})
				},
				_1: {
					ctor: '::',
					_0: {
						ctor: '_Tuple2',
						_0: 'passThrough',
						_1: F2(
							function (endWord, envType) {
								return A2(_user$project$MiniLatex_Parser$passThroughBody, endWord, envType);
							})
					},
					_1: {ctor: '[]'}
				}
			}
		}
	});
var _user$project$MiniLatex_Parser$environmentParser = function (name) {
	var _p2 = A2(_elm_lang$core$Dict$get, name, _user$project$MiniLatex_Parser$parseEnvironmentDict);
	if (_p2.ctor === 'Just') {
		return _p2._0;
	} else {
		return _user$project$MiniLatex_Parser$standardEnvironmentBody;
	}
};
var _user$project$MiniLatex_Parser$standardEnvironmentBody = F2(
	function (endWord, envType) {
		return A2(
			_elm_tools$parser$Parser$inContext,
			'standardEnvironmentBody',
			A2(
				_elm_tools$parser$Parser$map,
				_user$project$MiniLatex_Parser$Environment(envType),
				A2(
					_elm_tools$parser$Parser$map,
					_user$project$MiniLatex_Parser$LatexList,
					A2(
						_elm_tools$parser$Parser_ops['|.'],
						A2(
							_elm_tools$parser$Parser_ops['|.'],
							A2(
								_elm_tools$parser$Parser_ops['|.'],
								A2(
									_elm_tools$parser$Parser_ops['|='],
									A2(
										_elm_tools$parser$Parser_ops['|.'],
										_elm_tools$parser$Parser$succeed(_elm_lang$core$Basics$identity),
										_user$project$MiniLatex_Parser$ws),
									A2(_elm_tools$parser$Parser$repeat, _elm_tools$parser$Parser$zeroOrMore, _user$project$MiniLatex_Parser$latexExpression)),
								_user$project$MiniLatex_Parser$ws),
							_elm_tools$parser$Parser$symbol(endWord)),
						_user$project$MiniLatex_Parser$ws))));
	});
var _user$project$MiniLatex_Parser$latexExpression = _elm_tools$parser$Parser$oneOf(
	{
		ctor: '::',
		_0: _user$project$MiniLatex_Parser$texComment,
		_1: {
			ctor: '::',
			_0: _elm_tools$parser$Parser$lazy(
				function (_p3) {
					return _user$project$MiniLatex_Parser$environment;
				}),
			_1: {
				ctor: '::',
				_0: _user$project$MiniLatex_Parser$displayMathDollar,
				_1: {
					ctor: '::',
					_0: _user$project$MiniLatex_Parser$displayMathBrackets,
					_1: {
						ctor: '::',
						_0: _user$project$MiniLatex_Parser$inlineMath(_user$project$MiniLatex_Parser$ws),
						_1: {
							ctor: '::',
							_0: _user$project$MiniLatex_Parser$macro(_user$project$MiniLatex_Parser$ws),
							_1: {
								ctor: '::',
								_0: _user$project$MiniLatex_Parser$words,
								_1: {ctor: '[]'}
							}
						}
					}
				}
			}
		}
	});
var _user$project$MiniLatex_Parser$environment = A2(
	_elm_tools$parser$Parser$inContext,
	'environment',
	_elm_tools$parser$Parser$lazy(
		function (_p4) {
			return A2(_elm_tools$parser$Parser$andThen, _user$project$MiniLatex_Parser$environmentOfType, _user$project$MiniLatex_Parser$envName);
		}));
var _user$project$MiniLatex_Parser$environmentOfType = function (envType) {
	return A2(
		_elm_tools$parser$Parser$inContext,
		'environmentOfType',
		function () {
			var envKind = A2(
				_elm_lang$core$List$member,
				envType,
				{
					ctor: '::',
					_0: 'equation',
					_1: {
						ctor: '::',
						_0: 'align',
						_1: {
							ctor: '::',
							_0: 'eqnarray',
							_1: {
								ctor: '::',
								_0: 'verbatim',
								_1: {
									ctor: '::',
									_0: 'listing',
									_1: {
										ctor: '::',
										_0: 'verse',
										_1: {ctor: '[]'}
									}
								}
							}
						}
					}
				}) ? 'passThrough' : envType;
			var endWord = A2(
				_elm_lang$core$Basics_ops['++'],
				'\\end{',
				A2(_elm_lang$core$Basics_ops['++'], envType, '}'));
			return A3(_user$project$MiniLatex_Parser$environmentParser, envKind, endWord, envType);
		}());
};
var _user$project$MiniLatex_Parser$latexList = A2(
	_elm_tools$parser$Parser$inContext,
	'latexList',
	A2(
		_elm_tools$parser$Parser$map,
		_user$project$MiniLatex_Parser$LatexList,
		A2(
			_elm_tools$parser$Parser_ops['|='],
			A2(
				_elm_tools$parser$Parser_ops['|.'],
				_elm_tools$parser$Parser$succeed(_elm_lang$core$Basics$identity),
				_user$project$MiniLatex_Parser$ws),
			A2(_elm_tools$parser$Parser$repeat, _elm_tools$parser$Parser$oneOrMore, _user$project$MiniLatex_Parser$latexExpression))));
var _user$project$MiniLatex_Parser$parse = function (text) {
	var expr = A2(_elm_tools$parser$Parser$run, _user$project$MiniLatex_Parser$latexList, text);
	var _p5 = expr;
	if (_p5.ctor === 'Ok') {
		if (_p5._0.ctor === 'LatexList') {
			return _p5._0._0;
		} else {
			return {
				ctor: '::',
				_0: _user$project$MiniLatex_Parser$LXString('yada!'),
				_1: {ctor: '[]'}
			};
		}
	} else {
		var _p6 = _p5._0;
		return {
			ctor: '::',
			_0: _user$project$MiniLatex_Parser$LXString(
				A2(
					_elm_lang$core$Basics_ops['++'],
					'<strong>Error:</strong> ',
					A2(
						_elm_lang$core$Basics_ops['++'],
						'<pre class=\"errormessage\">',
						A2(
							_elm_lang$core$Basics_ops['++'],
							_elm_lang$core$Basics$toString(_p6.problem),
							A2(
								_elm_lang$core$Basics_ops['++'],
								' </pre><strong>in </strong> </span><pre class=\"errormessage\">',
								A2(_elm_lang$core$Basics_ops['++'], _p6.source, '</pre>')))))),
			_1: {ctor: '[]'}
		};
	}
};

var _user$project$MiniLatex_LatexState$initialCounters = _elm_lang$core$Dict$fromList(
	{
		ctor: '::',
		_0: {ctor: '_Tuple2', _0: 's1', _1: 0},
		_1: {
			ctor: '::',
			_0: {ctor: '_Tuple2', _0: 's2', _1: 0},
			_1: {
				ctor: '::',
				_0: {ctor: '_Tuple2', _0: 's3', _1: 0},
				_1: {
					ctor: '::',
					_0: {ctor: '_Tuple2', _0: 'tno', _1: 0},
					_1: {
						ctor: '::',
						_0: {ctor: '_Tuple2', _0: 'eqno', _1: 0},
						_1: {ctor: '[]'}
					}
				}
			}
		}
	});
var _user$project$MiniLatex_LatexState$emptyLatexState = {
	counters: _user$project$MiniLatex_LatexState$initialCounters,
	crossReferences: _elm_lang$core$Dict$empty,
	dictionary: _elm_lang$core$Dict$empty,
	tableOfContents: {ctor: '[]'}
};
var _user$project$MiniLatex_LatexState$setDictionaryItem = F3(
	function (key, value, latexState) {
		var dictionary = latexState.dictionary;
		var newDictionary = A3(_elm_lang$core$Dict$insert, key, value, dictionary);
		return _elm_lang$core$Native_Utils.update(
			latexState,
			{dictionary: newDictionary});
	});
var _user$project$MiniLatex_LatexState$setCrossReference = F3(
	function (label, value, latexState) {
		var crossReferences = latexState.crossReferences;
		var newCrossReferences = A3(_elm_lang$core$Dict$insert, label, value, crossReferences);
		return _elm_lang$core$Native_Utils.update(
			latexState,
			{crossReferences: newCrossReferences});
	});
var _user$project$MiniLatex_LatexState$updateCounter = F3(
	function (name, value, latexState) {
		var maybeSet = _elm_lang$core$Maybe$map(
			function (x) {
				return value;
			});
		var newCounters = A3(_elm_lang$core$Dict$update, name, maybeSet, latexState.counters);
		return _elm_lang$core$Native_Utils.update(
			latexState,
			{counters: newCounters});
	});
var _user$project$MiniLatex_LatexState$incrementCounter = F2(
	function (name, latexState) {
		var maybeInc = _elm_lang$core$Maybe$map(
			function (x) {
				return x + 1;
			});
		var newCounters = A3(_elm_lang$core$Dict$update, name, maybeInc, latexState.counters);
		return _elm_lang$core$Native_Utils.update(
			latexState,
			{counters: newCounters});
	});
var _user$project$MiniLatex_LatexState$getDictionaryItem = F2(
	function (key, latexState) {
		var _p0 = A2(_elm_lang$core$Dict$get, key, latexState.dictionary);
		if (_p0.ctor === 'Just') {
			return _p0._0;
		} else {
			return '';
		}
	});
var _user$project$MiniLatex_LatexState$getCrossReference = F2(
	function (label, latexState) {
		var _p1 = A2(_elm_lang$core$Dict$get, label, latexState.crossReferences);
		if (_p1.ctor === 'Just') {
			return _p1._0;
		} else {
			return '??';
		}
	});
var _user$project$MiniLatex_LatexState$getCounter = F2(
	function (name, latexState) {
		var _p2 = A2(_elm_lang$core$Dict$get, name, latexState.counters);
		if (_p2.ctor === 'Just') {
			return _p2._0;
		} else {
			return 0;
		}
	});
var _user$project$MiniLatex_LatexState$emptyDict = _elm_lang$core$Dict$empty;
var _user$project$MiniLatex_LatexState$TocEntry = F3(
	function (a, b, c) {
		return {name: a, label: b, level: c};
	});
var _user$project$MiniLatex_LatexState$addSection = F4(
	function (sectionName, label, level, latexState) {
		var newEntry = A3(_user$project$MiniLatex_LatexState$TocEntry, sectionName, label, level);
		var toc = A2(
			_elm_lang$core$Basics_ops['++'],
			latexState.tableOfContents,
			{
				ctor: '::',
				_0: newEntry,
				_1: {ctor: '[]'}
			});
		return _elm_lang$core$Native_Utils.update(
			latexState,
			{tableOfContents: toc});
	});
var _user$project$MiniLatex_LatexState$LatexState = F4(
	function (a, b, c, d) {
		return {counters: a, crossReferences: b, tableOfContents: c, dictionary: d};
	});

var _user$project$MiniLatex_Paragraph$paragraphify = function (text) {
	return A2(
		_elm_lang$core$List$map,
		function (_p0) {
			return function (x) {
				return A2(_elm_lang$core$Basics_ops['++'], x, '\n\n');
			}(
				_elm_lang$core$String$trim(_p0));
		},
		A2(
			_elm_lang$core$List$filter,
			function (x) {
				return !_elm_lang$core$Native_Utils.eq(
					_elm_lang$core$String$length(x),
					0);
			},
			A3(
				_elm_lang$core$Regex$split,
				_elm_lang$core$Regex$All,
				_elm_lang$core$Regex$regex('\\n\\n+'),
				text)));
};
var _user$project$MiniLatex_Paragraph$fixLine = function (line) {
	return _elm_lang$core$Native_Utils.eq(line, '') ? '\n' : line;
};
var _user$project$MiniLatex_Paragraph$joinLines = F2(
	function (a, b) {
		var _p1 = {ctor: '_Tuple2', _0: a, _1: b};
		_v0_2:
		do {
			_v0_1:
			do {
				switch (_p1._0) {
					case '':
						return b;
					case '\n':
						switch (_p1._1) {
							case '':
								break _v0_1;
							case '\n':
								break _v0_2;
							default:
								break _v0_2;
						}
					default:
						switch (_p1._1) {
							case '':
								break _v0_1;
							case '\n':
								return A2(_elm_lang$core$Basics_ops['++'], a, '\n');
							default:
								return A2(
									_elm_lang$core$Basics_ops['++'],
									_p1._0,
									A2(_elm_lang$core$Basics_ops['++'], '\n', _p1._1));
						}
				}
			} while(false);
			return a;
		} while(false);
		return A2(_elm_lang$core$Basics_ops['++'], '\n', b);
	});
var _user$project$MiniLatex_Paragraph$getEndArg = function (line) {
	var parseResult = A2(_elm_tools$parser$Parser$run, _user$project$MiniLatex_Parser$endWord, line);
	var arg = function () {
		var _p2 = parseResult;
		if (_p2.ctor === 'Ok') {
			return _p2._0;
		} else {
			return '';
		}
	}();
	return arg;
};
var _user$project$MiniLatex_Paragraph$getBeginArg = function (line) {
	var parseResult = A2(_elm_tools$parser$Parser$run, _user$project$MiniLatex_Parser$envName, line);
	var arg = function () {
		var _p3 = parseResult;
		if (_p3.ctor === 'Ok') {
			return _p3._0;
		} else {
			return '';
		}
	}();
	return arg;
};
var _user$project$MiniLatex_Paragraph$ParserRecord = F3(
	function (a, b, c) {
		return {currentParagraph: a, paragraphList: b, state: c};
	});
var _user$project$MiniLatex_Paragraph$Error = {ctor: 'Error'};
var _user$project$MiniLatex_Paragraph$InBlock = function (a) {
	return {ctor: 'InBlock', _0: a};
};
var _user$project$MiniLatex_Paragraph$InParagraph = {ctor: 'InParagraph'};
var _user$project$MiniLatex_Paragraph$Start = {ctor: 'Start'};
var _user$project$MiniLatex_Paragraph$EndBlock = function (a) {
	return {ctor: 'EndBlock', _0: a};
};
var _user$project$MiniLatex_Paragraph$BeginBlock = function (a) {
	return {ctor: 'BeginBlock', _0: a};
};
var _user$project$MiniLatex_Paragraph$Text = {ctor: 'Text'};
var _user$project$MiniLatex_Paragraph$Blank = {ctor: 'Blank'};
var _user$project$MiniLatex_Paragraph$lineType = function (line) {
	return _elm_lang$core$Native_Utils.eq(line, '') ? _user$project$MiniLatex_Paragraph$Blank : (A2(_elm_lang$core$String$startsWith, '\\begin', line) ? _user$project$MiniLatex_Paragraph$BeginBlock(
		_user$project$MiniLatex_Paragraph$getBeginArg(line)) : (A2(_elm_lang$core$String$startsWith, '\\end', line) ? _user$project$MiniLatex_Paragraph$EndBlock(
		_user$project$MiniLatex_Paragraph$getEndArg(line)) : _user$project$MiniLatex_Paragraph$Text));
};
var _user$project$MiniLatex_Paragraph$nextState = F2(
	function (line, parserState) {
		var _p4 = {
			ctor: '_Tuple2',
			_0: parserState,
			_1: _user$project$MiniLatex_Paragraph$lineType(line)
		};
		_v3_11:
		do {
			switch (_p4._0.ctor) {
				case 'Start':
					switch (_p4._1.ctor) {
						case 'Blank':
							return _user$project$MiniLatex_Paragraph$Start;
						case 'Text':
							return _user$project$MiniLatex_Paragraph$InParagraph;
						case 'BeginBlock':
							return _user$project$MiniLatex_Paragraph$InBlock(_p4._1._0);
						default:
							break _v3_11;
					}
				case 'InBlock':
					switch (_p4._1.ctor) {
						case 'Blank':
							return _user$project$MiniLatex_Paragraph$InBlock(_p4._0._0);
						case 'Text':
							return _user$project$MiniLatex_Paragraph$InBlock(_p4._0._0);
						case 'BeginBlock':
							return _user$project$MiniLatex_Paragraph$InBlock(_p4._0._0);
						default:
							var _p5 = _p4._0._0;
							return _elm_lang$core$Native_Utils.eq(_p5, _p4._1._0) ? _user$project$MiniLatex_Paragraph$Start : _user$project$MiniLatex_Paragraph$InBlock(_p5);
					}
				case 'InParagraph':
					switch (_p4._1.ctor) {
						case 'Text':
							return _user$project$MiniLatex_Paragraph$InParagraph;
						case 'BeginBlock':
							return _user$project$MiniLatex_Paragraph$InParagraph;
						case 'EndBlock':
							return _user$project$MiniLatex_Paragraph$InParagraph;
						default:
							return _user$project$MiniLatex_Paragraph$Start;
					}
				default:
					break _v3_11;
			}
		} while(false);
		return _user$project$MiniLatex_Paragraph$Error;
	});
var _user$project$MiniLatex_Paragraph$updateParserRecord = F2(
	function (line, parserRecord) {
		var state2 = A2(_user$project$MiniLatex_Paragraph$nextState, line, parserRecord.state);
		var _p6 = state2;
		switch (_p6.ctor) {
			case 'Start':
				return _elm_lang$core$Native_Utils.update(
					parserRecord,
					{
						currentParagraph: '',
						paragraphList: A2(
							_elm_lang$core$Basics_ops['++'],
							parserRecord.paragraphList,
							{
								ctor: '::',
								_0: A2(_user$project$MiniLatex_Paragraph$joinLines, parserRecord.currentParagraph, line),
								_1: {ctor: '[]'}
							}),
						state: state2
					});
			case 'InParagraph':
				return _elm_lang$core$Native_Utils.update(
					parserRecord,
					{
						currentParagraph: A2(_user$project$MiniLatex_Paragraph$joinLines, parserRecord.currentParagraph, line),
						state: state2
					});
			case 'InBlock':
				return _elm_lang$core$Native_Utils.update(
					parserRecord,
					{
						currentParagraph: A2(
							_user$project$MiniLatex_Paragraph$joinLines,
							parserRecord.currentParagraph,
							_user$project$MiniLatex_Paragraph$fixLine(line)),
						state: state2
					});
			default:
				return parserRecord;
		}
	});
var _user$project$MiniLatex_Paragraph$logicalParagraphParse = function (text) {
	return A3(
		_elm_lang$core$List$foldl,
		_user$project$MiniLatex_Paragraph$updateParserRecord,
		{
			currentParagraph: '',
			paragraphList: {ctor: '[]'},
			state: _user$project$MiniLatex_Paragraph$Start
		},
		A2(
			_elm_lang$core$String$split,
			'\n',
			A2(_elm_lang$core$Basics_ops['++'], text, '\n')));
};
var _user$project$MiniLatex_Paragraph$logicalParagraphify = function (text) {
	var lastState = _user$project$MiniLatex_Paragraph$logicalParagraphParse(text);
	return A2(
		_elm_lang$core$List$filter,
		function (x) {
			return !_elm_lang$core$Native_Utils.eq(x, '');
		},
		A2(
			_elm_lang$core$Basics_ops['++'],
			lastState.paragraphList,
			{
				ctor: '::',
				_0: lastState.currentParagraph,
				_1: {ctor: '[]'}
			}));
};

var _user$project$MiniLatex_Differ$prefixer = F2(
	function (b, k) {
		return A2(
			_elm_lang$core$Basics_ops['++'],
			'p.',
			A2(
				_elm_lang$core$Basics_ops['++'],
				_elm_lang$core$Basics$toString(b),
				A2(
					_elm_lang$core$Basics_ops['++'],
					'.',
					_elm_lang$core$Basics$toString(k))));
	});
var _user$project$MiniLatex_Differ$isEmpty = function (editRecord) {
	return _elm_lang$core$Native_Utils.eq(
		editRecord.paragraphs,
		{ctor: '[]'}) && _elm_lang$core$Native_Utils.eq(
		editRecord.renderedParagraphs,
		{ctor: '[]'});
};
var _user$project$MiniLatex_Differ$takeLast = F2(
	function (k, x) {
		return _elm_lang$core$List$reverse(
			A2(
				_elm_lang$core$List$take,
				k,
				_elm_lang$core$List$reverse(x)));
	});
var _user$project$MiniLatex_Differ$renderDiff = F5(
	function (seed, renderer, diffRecord, editRecord, renderedStringList) {
		var middleSegmentRendered = A2(_elm_lang$core$List$map, renderer, diffRecord.middleSegmentInTarget);
		var nt = _elm_lang$core$List$length(diffRecord.middleSegmentInTarget);
		var ns = _elm_lang$core$List$length(diffRecord.middleSegmentInSource);
		var it = _elm_lang$core$List$length(diffRecord.commonTerminalSegment);
		var terminalSegmentRendered = A2(_user$project$MiniLatex_Differ$takeLast, it, renderedStringList);
		var ii = _elm_lang$core$List$length(diffRecord.commonInitialSegment);
		var initialSegmentRendered = A2(_elm_lang$core$List$take, ii, renderedStringList);
		var idListInitial = A2(_elm_lang$core$List$take, ii, editRecord.idList);
		var idListMiddle = A2(
			_elm_lang$core$List$map,
			_user$project$MiniLatex_Differ$prefixer(seed),
			A2(_elm_lang$core$List$range, ii + 1, ii + nt));
		var idListTerminal = A2(_elm_lang$core$List$drop, ii + ns, editRecord.idList);
		var idList = A2(
			_elm_lang$core$Basics_ops['++'],
			idListInitial,
			A2(_elm_lang$core$Basics_ops['++'], idListMiddle, idListTerminal));
		var _p0 = _elm_lang$core$Native_Utils.eq(nt, 0) ? {ctor: '_Tuple2', _0: _elm_lang$core$Maybe$Nothing, _1: _elm_lang$core$Maybe$Nothing} : {
			ctor: '_Tuple2',
			_0: _elm_lang$core$Maybe$Just(ii),
			_1: _elm_lang$core$Maybe$Just((ii + nt) - 1)
		};
		var newIdsStart = _p0._0;
		var newIdsEnd = _p0._1;
		return {
			renderedParagraphs: A2(
				_elm_lang$core$Basics_ops['++'],
				initialSegmentRendered,
				A2(_elm_lang$core$Basics_ops['++'], middleSegmentRendered, terminalSegmentRendered)),
			idList: idList,
			newIdsStart: newIdsStart,
			newIdsEnd: newIdsEnd
		};
	});
var _user$project$MiniLatex_Differ$dropLast = F2(
	function (k, x) {
		return _elm_lang$core$List$reverse(
			A2(
				_elm_lang$core$List$drop,
				k,
				_elm_lang$core$List$reverse(x)));
	});
var _user$project$MiniLatex_Differ$commonInitialSegment = F2(
	function (x, y) {
		if (_elm_lang$core$Native_Utils.eq(
			x,
			{ctor: '[]'})) {
			return {ctor: '[]'};
		} else {
			if (_elm_lang$core$Native_Utils.eq(
				y,
				{ctor: '[]'})) {
				return {ctor: '[]'};
			} else {
				var b = A2(_elm_lang$core$List$take, 1, y);
				var a = A2(_elm_lang$core$List$take, 1, x);
				return _elm_lang$core$Native_Utils.eq(a, b) ? A2(
					_elm_lang$core$Basics_ops['++'],
					a,
					A2(
						_user$project$MiniLatex_Differ$commonInitialSegment,
						A2(_elm_lang$core$List$drop, 1, x),
						A2(_elm_lang$core$List$drop, 1, y))) : {ctor: '[]'};
			}
		}
	});
var _user$project$MiniLatex_Differ$commonTerminalSegment = F2(
	function (x, y) {
		return _elm_lang$core$List$reverse(
			A2(
				_user$project$MiniLatex_Differ$commonInitialSegment,
				_elm_lang$core$List$reverse(x),
				_elm_lang$core$List$reverse(y)));
	});
var _user$project$MiniLatex_Differ$DiffRecord = F4(
	function (a, b, c, d) {
		return {commonInitialSegment: a, commonTerminalSegment: b, middleSegmentInSource: c, middleSegmentInTarget: d};
	});
var _user$project$MiniLatex_Differ$diff = F2(
	function (u, v) {
		var b = A2(_user$project$MiniLatex_Differ$commonTerminalSegment, u, v);
		var lb = _elm_lang$core$List$length(b);
		var a = A2(_user$project$MiniLatex_Differ$commonInitialSegment, u, v);
		var la = _elm_lang$core$List$length(a);
		var x = A2(
			_user$project$MiniLatex_Differ$dropLast,
			lb,
			A2(_elm_lang$core$List$drop, la, u));
		var y = A2(
			_user$project$MiniLatex_Differ$dropLast,
			lb,
			A2(_elm_lang$core$List$drop, la, v));
		var bb = _elm_lang$core$Native_Utils.eq(
			la,
			_elm_lang$core$List$length(u)) ? {ctor: '[]'} : b;
		return A4(_user$project$MiniLatex_Differ$DiffRecord, a, bb, x, y);
	});
var _user$project$MiniLatex_Differ$DiffPacket = F4(
	function (a, b, c, d) {
		return {renderedParagraphs: a, idList: b, newIdsStart: c, newIdsEnd: d};
	});
var _user$project$MiniLatex_Differ$EditRecord = F6(
	function (a, b, c, d, e, f) {
		return {paragraphs: a, renderedParagraphs: b, latexState: c, idList: d, newIdsStart: e, newIdsEnd: f};
	});
var _user$project$MiniLatex_Differ$emptyEditRecord = A6(
	_user$project$MiniLatex_Differ$EditRecord,
	{ctor: '[]'},
	{ctor: '[]'},
	_user$project$MiniLatex_LatexState$emptyLatexState,
	{ctor: '[]'},
	_elm_lang$core$Maybe$Nothing,
	_elm_lang$core$Maybe$Nothing);
var _user$project$MiniLatex_Differ$initialize = F2(
	function (transformer, text) {
		var paragraphs = _user$project$MiniLatex_Paragraph$logicalParagraphify(text);
		var n = _elm_lang$core$List$length(paragraphs);
		var idList = A2(
			_elm_lang$core$List$map,
			_user$project$MiniLatex_Differ$prefixer(0),
			A2(_elm_lang$core$List$range, 1, n));
		var renderedParagraphs = A2(_elm_lang$core$List$map, transformer, paragraphs);
		return A6(_user$project$MiniLatex_Differ$EditRecord, paragraphs, renderedParagraphs, _user$project$MiniLatex_LatexState$emptyLatexState, idList, _elm_lang$core$Maybe$Nothing, _elm_lang$core$Maybe$Nothing);
	});
var _user$project$MiniLatex_Differ$update = F4(
	function (seed, transformer, editorRecord, text) {
		var newParagraphs = _user$project$MiniLatex_Paragraph$logicalParagraphify(text);
		var diffRecord = A2(_user$project$MiniLatex_Differ$diff, editorRecord.paragraphs, newParagraphs);
		var diffPacket = A5(_user$project$MiniLatex_Differ$renderDiff, seed, transformer, diffRecord, editorRecord, editorRecord.renderedParagraphs);
		return A6(_user$project$MiniLatex_Differ$EditRecord, newParagraphs, diffPacket.renderedParagraphs, _user$project$MiniLatex_LatexState$emptyLatexState, diffPacket.idList, diffPacket.newIdsStart, diffPacket.newIdsEnd);
	});

var _user$project$App_Types$Model = F9(
	function (a, b, c, d, e, f, g, h, i) {
		return {counter: a, sourceText: b, parseResult: c, inputString: d, hasMathResult: e, editRecord: f, seed: g, configuration: h, lineViewStyle: i};
	});
var _user$project$App_Types$Input = function (a) {
	return {ctor: 'Input', _0: a};
};
var _user$project$App_Types$Grammar = {ctor: 'Grammar'};
var _user$project$App_Types$MathPaper = {ctor: 'MathPaper'};
var _user$project$App_Types$WeatherApp = {ctor: 'WeatherApp'};
var _user$project$App_Types$WavePackets = {ctor: 'WavePackets'};
var _user$project$App_Types$TechReport = {ctor: 'TechReport'};
var _user$project$App_Types$SetVerticalView = {ctor: 'SetVerticalView'};
var _user$project$App_Types$SetHorizontalView = {ctor: 'SetHorizontalView'};
var _user$project$App_Types$ShowRawHtmlView = {ctor: 'ShowRawHtmlView'};
var _user$project$App_Types$ShowParseResultsView = {ctor: 'ShowParseResultsView'};
var _user$project$App_Types$ShowStandardView = {ctor: 'ShowStandardView'};
var _user$project$App_Types$NewSeed = function (a) {
	return {ctor: 'NewSeed', _0: a};
};
var _user$project$App_Types$GenerateSeed = {ctor: 'GenerateSeed'};
var _user$project$App_Types$Restore = {ctor: 'Restore'};
var _user$project$App_Types$Reset = {ctor: 'Reset'};
var _user$project$App_Types$ReRender = {ctor: 'ReRender'};
var _user$project$App_Types$GetContent = function (a) {
	return {ctor: 'GetContent', _0: a};
};
var _user$project$App_Types$FastRender = {ctor: 'FastRender'};
var _user$project$App_Types$Vertical = {ctor: 'Vertical'};
var _user$project$App_Types$Horizontal = {ctor: 'Horizontal'};
var _user$project$App_Types$RawHtmlView = {ctor: 'RawHtmlView'};
var _user$project$App_Types$ParseResultsView = {ctor: 'ParseResultsView'};
var _user$project$App_Types$StandardView = {ctor: 'StandardView'};

var _user$project$MiniLatex_ParserTools$valueOfLXString = function (expr) {
	var _p0 = expr;
	if (_p0.ctor === 'LXString') {
		return _p0._0;
	} else {
		return 'Error getting value of LatexString';
	}
};
var _user$project$MiniLatex_ParserTools$valueOfLatexList = function (latexList) {
	var _p1 = latexList;
	if (_p1.ctor === 'LatexList') {
		return _p1._0;
	} else {
		return {
			ctor: '::',
			_0: _user$project$MiniLatex_Parser$LXString('Error getting value of LatexList'),
			_1: {ctor: '[]'}
		};
	}
};
var _user$project$MiniLatex_ParserTools$headLatexExpression = function (list) {
	var he = function () {
		var _p2 = _elm_lang$core$List$head(list);
		if (_p2.ctor === 'Just') {
			return _p2._0;
		} else {
			return _user$project$MiniLatex_Parser$LatexList(
				{ctor: '[]'});
		}
	}();
	return he;
};
var _user$project$MiniLatex_ParserTools$unpackString = function (expr) {
	return _user$project$MiniLatex_ParserTools$valueOfLXString(
		_user$project$MiniLatex_ParserTools$headLatexExpression(
			_user$project$MiniLatex_ParserTools$valueOfLatexList(
				_user$project$MiniLatex_ParserTools$headLatexExpression(expr))));
};
var _user$project$MiniLatex_ParserTools$getString = function (latexString) {
	var _p3 = latexString;
	if (_p3.ctor === 'LXString') {
		return _p3._0;
	} else {
		return '';
	}
};
var _user$project$MiniLatex_ParserTools$latexList2List = function (latexExpression) {
	var _p4 = latexExpression;
	if (_p4.ctor === 'LatexList') {
		return _p4._0;
	} else {
		return {ctor: '[]'};
	}
};
var _user$project$MiniLatex_ParserTools$list2LeadingString = function (list) {
	var head_ = _elm_lang$core$List$head(list);
	var value = function () {
		var _p5 = head_;
		if (_p5.ctor === 'Just') {
			return _p5._0;
		} else {
			return _user$project$MiniLatex_Parser$LXString('');
		}
	}();
	var _p6 = value;
	if (_p6.ctor === 'LXString') {
		return _p6._0;
	} else {
		return '';
	}
};
var _user$project$MiniLatex_ParserTools$getMacroArgs = F2(
	function (macroName, latexExpression) {
		var _p7 = latexExpression;
		if (_p7.ctor === 'Macro') {
			return _elm_lang$core$Native_Utils.eq(_p7._0, macroName) ? A2(_elm_lang$core$List$map, _user$project$MiniLatex_ParserTools$latexList2List, _p7._1) : {ctor: '[]'};
		} else {
			return {ctor: '[]'};
		}
	});
var _user$project$MiniLatex_ParserTools$getSimpleMacroArgs = F2(
	function (macroName, latexExpression) {
		return A2(
			_elm_lang$core$List$map,
			_user$project$MiniLatex_ParserTools$list2LeadingString,
			A2(_user$project$MiniLatex_ParserTools$getMacroArgs, macroName, latexExpression));
	});
var _user$project$MiniLatex_ParserTools$getFirstMacroArg = F2(
	function (macroName, latexExpression) {
		var arg = _elm_lang$core$List$head(
			A2(_user$project$MiniLatex_ParserTools$getSimpleMacroArgs, macroName, latexExpression));
		var _p8 = arg;
		if (_p8.ctor === 'Just') {
			return _p8._0;
		} else {
			return '';
		}
	});
var _user$project$MiniLatex_ParserTools$isMacro = F2(
	function (macroName, latexExpression) {
		var _p9 = latexExpression;
		if (_p9.ctor === 'Macro') {
			return _elm_lang$core$Native_Utils.eq(_p9._0, macroName);
		} else {
			return false;
		}
	});
var _user$project$MiniLatex_ParserTools$getMacros = F2(
	function (macroName, expressionList) {
		return A2(
			_elm_lang$core$List$filter,
			function (expr) {
				return A2(_user$project$MiniLatex_ParserTools$isMacro, macroName, expr);
			},
			expressionList);
	});

var _user$project$MiniLatex_Configuration$client = 'http://www.knode.io';

var _user$project$MiniLatex_KeyValueUtilities$getValue = F2(
	function (key, kvpList) {
		return A2(
			_elm_lang$core$Maybe$withDefault,
			'',
			_elm_lang$core$List$head(
				A2(
					_elm_lang$core$List$map,
					function (x) {
						return _elm_lang$core$Tuple$second(x);
					},
					A2(
						_elm_lang$core$List$filter,
						function (x) {
							return _elm_lang$core$Native_Utils.eq(
								_elm_lang$core$Tuple$first(x),
								key);
						},
						kvpList))));
	});
var _user$project$MiniLatex_KeyValueUtilities$keyValuePair = A2(
	_elm_tools$parser$Parser$inContext,
	'KeyValuePair',
	A2(
		_elm_tools$parser$Parser_ops['|.'],
		A2(
			_elm_tools$parser$Parser_ops['|='],
			A2(
				_elm_tools$parser$Parser_ops['|.'],
				A2(
					_elm_tools$parser$Parser_ops['|.'],
					A2(
						_elm_tools$parser$Parser_ops['|='],
						A2(
							_elm_tools$parser$Parser_ops['|.'],
							_elm_tools$parser$Parser$succeed(
								F2(
									function (v0, v1) {
										return {ctor: '_Tuple2', _0: v0, _1: v1};
									})),
							A2(
								_elm_tools$parser$Parser$ignore,
								_elm_tools$parser$Parser$zeroOrMore,
								function (c) {
									return _elm_lang$core$Native_Utils.eq(
										c,
										_elm_lang$core$Native_Utils.chr(' ')) || _elm_lang$core$Native_Utils.eq(
										c,
										_elm_lang$core$Native_Utils.chr('\n'));
								})),
						A2(
							_elm_tools$parser$Parser$keep,
							_elm_tools$parser$Parser$oneOrMore,
							function (c) {
								return (!_elm_lang$core$Native_Utils.eq(
									c,
									_elm_lang$core$Native_Utils.chr(' '))) && (!_elm_lang$core$Native_Utils.eq(
									c,
									_elm_lang$core$Native_Utils.chr(':')));
							})),
					_elm_tools$parser$Parser$symbol(':')),
				A2(
					_elm_tools$parser$Parser$ignore,
					_elm_tools$parser$Parser$zeroOrMore,
					function (c) {
						return _elm_lang$core$Native_Utils.eq(
							c,
							_elm_lang$core$Native_Utils.chr(' ')) || _elm_lang$core$Native_Utils.eq(
							c,
							_elm_lang$core$Native_Utils.chr('\n'));
					})),
			A2(
				_elm_tools$parser$Parser$keep,
				_elm_tools$parser$Parser$oneOrMore,
				function (c) {
					return (!_elm_lang$core$Native_Utils.eq(
						c,
						_elm_lang$core$Native_Utils.chr(' '))) && (!_elm_lang$core$Native_Utils.eq(
						c,
						_elm_lang$core$Native_Utils.chr(',')));
				})),
		A2(
			_elm_tools$parser$Parser$ignore,
			_elm_tools$parser$Parser$zeroOrMore,
			function (c) {
				return _elm_lang$core$Native_Utils.eq(
					c,
					_elm_lang$core$Native_Utils.chr(',')) || (_elm_lang$core$Native_Utils.eq(
					c,
					_elm_lang$core$Native_Utils.chr(' ')) || _elm_lang$core$Native_Utils.eq(
					c,
					_elm_lang$core$Native_Utils.chr('\n')));
			})));
var _user$project$MiniLatex_KeyValueUtilities$keyValuePairs = A2(
	_elm_tools$parser$Parser$inContext,
	'keyValuePairs',
	A2(
		_elm_tools$parser$Parser_ops['|='],
		_elm_tools$parser$Parser$succeed(_elm_lang$core$Basics$identity),
		A2(_elm_tools$parser$Parser$repeat, _elm_tools$parser$Parser$zeroOrMore, _user$project$MiniLatex_KeyValueUtilities$keyValuePair)));
var _user$project$MiniLatex_KeyValueUtilities$getKeyValueList = function (str) {
	return A2(
		_elm_lang$core$Result$withDefault,
		{ctor: '[]'},
		A2(_elm_tools$parser$Parser$run, _user$project$MiniLatex_KeyValueUtilities$keyValuePairs, str));
};

var _user$project$MiniLatex_Render$imageAttributes = F2(
	function (imageAttrs, attributeString) {
		var widthValue = _elm_lang$core$Basics$toString(imageAttrs.width);
		var widthElement = (!_elm_lang$core$Native_Utils.eq(widthValue, '')) ? A2(_elm_lang$core$Basics_ops['++'], 'width=', widthValue) : '';
		return widthElement;
	});
var _user$project$MiniLatex_Render$handleFloatedImageLeft = F3(
	function (url, label, imageAttributes) {
		var imageLeftDivLeftPart = function (width) {
			return A2(
				_elm_lang$core$Basics_ops['++'],
				'<div style=\"float: left; width: ',
				A2(
					_elm_lang$core$Basics_ops['++'],
					_elm_lang$core$Basics$toString(width + 20),
					'px; margin: 0 10px 7.5px 0; text-align: center;\">'));
		};
		var width = imageAttributes.width;
		return A2(
			_elm_lang$core$Basics_ops['++'],
			imageLeftDivLeftPart(width),
			A2(
				_elm_lang$core$Basics_ops['++'],
				'<img src=\"',
				A2(
					_elm_lang$core$Basics_ops['++'],
					url,
					A2(
						_elm_lang$core$Basics_ops['++'],
						'\" width=',
						A2(
							_elm_lang$core$Basics_ops['++'],
							_elm_lang$core$Basics$toString(width),
							A2(
								_elm_lang$core$Basics_ops['++'],
								'><br>',
								A2(_elm_lang$core$Basics_ops['++'], label, '</div>')))))));
	});
var _user$project$MiniLatex_Render$handleFloatedImageRight = F3(
	function (url, label, imageAttributes) {
		var imageRightDivLeftPart = function (width) {
			return A2(
				_elm_lang$core$Basics_ops['++'],
				'<div style=\"float: right; width: ',
				A2(
					_elm_lang$core$Basics_ops['++'],
					_elm_lang$core$Basics$toString(width + 20),
					'px; margin: 0 0 7.5px 10px; text-align: center;\">'));
		};
		var width = imageAttributes.width;
		return A2(
			_elm_lang$core$Basics_ops['++'],
			imageRightDivLeftPart(width),
			A2(
				_elm_lang$core$Basics_ops['++'],
				'<img src=\"',
				A2(
					_elm_lang$core$Basics_ops['++'],
					url,
					A2(
						_elm_lang$core$Basics_ops['++'],
						'\" width=',
						A2(
							_elm_lang$core$Basics_ops['++'],
							_elm_lang$core$Basics$toString(width),
							A2(
								_elm_lang$core$Basics_ops['++'],
								'><br>',
								A2(_elm_lang$core$Basics_ops['++'], label, '</div>')))))));
	});
var _user$project$MiniLatex_Render$img = F2(
	function (url, imageAttributs) {
		return A2(
			_elm_lang$core$Basics_ops['++'],
			'<img src=\"',
			A2(
				_elm_lang$core$Basics_ops['++'],
				url,
				A2(
					_elm_lang$core$Basics_ops['++'],
					'\" width=',
					A2(
						_elm_lang$core$Basics_ops['++'],
						_elm_lang$core$Basics$toString(imageAttributs.width),
						' >'))));
	});
var _user$project$MiniLatex_Render$div = F2(
	function (attributes, children) {
		var childrenString = A2(_elm_lang$core$String$join, '\n', children);
		var attributeString = A2(_elm_lang$core$String$join, ' ', attributes);
		return A2(
			_elm_lang$core$Basics_ops['++'],
			'<div ',
			A2(
				_elm_lang$core$Basics_ops['++'],
				attributeString,
				A2(
					_elm_lang$core$Basics_ops['++'],
					' >\n',
					A2(_elm_lang$core$Basics_ops['++'], childrenString, '\n</div>'))));
	});
var _user$project$MiniLatex_Render$imageFloatLeftStyle = function (imageAttributes) {
	return A2(
		_elm_lang$core$Basics_ops['++'],
		'style=\"float: left; width: ',
		A2(
			_elm_lang$core$Basics_ops['++'],
			_elm_lang$core$Basics$toString(imageAttributes.width + 20),
			'px; margin: 0 10px 7.5px 0; text-align: center;\"'));
};
var _user$project$MiniLatex_Render$imageFloatRightStyle = function (imageAttributes) {
	return A2(
		_elm_lang$core$Basics_ops['++'],
		'style=\"float: right; width: ',
		A2(
			_elm_lang$core$Basics_ops['++'],
			_elm_lang$core$Basics$toString(imageAttributes.width + 20),
			'px; margin: 0 0 7.5px 10px; text-align: center;\"'));
};
var _user$project$MiniLatex_Render$imageCenterStyle = function (imageAttributes) {
	return A2(
		_elm_lang$core$Basics_ops['++'],
		'class=\"center\" style=\"width: ',
		A2(
			_elm_lang$core$Basics_ops['++'],
			_elm_lang$core$Basics$toString(imageAttributes.width + 20),
			'px; margin-left:auto, margin-right:auto; text-align: center;\"'));
};
var _user$project$MiniLatex_Render$handleCenterImage = F3(
	function (url, label, imageAttributes) {
		var width = imageAttributes.width;
		return A2(
			_user$project$MiniLatex_Render$div,
			{
				ctor: '::',
				_0: _user$project$MiniLatex_Render$imageCenterStyle(imageAttributes),
				_1: {ctor: '[]'}
			},
			{
				ctor: '::',
				_0: A2(_user$project$MiniLatex_Render$img, url, imageAttributes),
				_1: {
					ctor: '::',
					_0: '<br>',
					_1: {
						ctor: '::',
						_0: label,
						_1: {ctor: '[]'}
					}
				}
			});
	});
var _user$project$MiniLatex_Render$sectionPrefix = function (level) {
	var _p0 = level;
	switch (_p0) {
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
var _user$project$MiniLatex_Render$renderTitle = F2(
	function (latexState, list) {
		var revision = A2(_user$project$MiniLatex_LatexState$getDictionaryItem, 'revision', latexState);
		var revisionText = (!_elm_lang$core$Native_Utils.eq(revision, '')) ? A2(_elm_lang$core$Basics_ops['++'], 'Last revised ', revision) : '';
		var email = A2(_user$project$MiniLatex_LatexState$getDictionaryItem, 'email', latexState);
		var date = A2(_user$project$MiniLatex_LatexState$getDictionaryItem, 'date', latexState);
		var author = A2(_user$project$MiniLatex_LatexState$getDictionaryItem, 'author', latexState);
		var bodyParts = A2(
			_elm_lang$core$List$filter,
			function (x) {
				return !_elm_lang$core$Native_Utils.eq(x, '');
			},
			{
				ctor: '::',
				_0: '<div class=\"authorinfo\">',
				_1: {
					ctor: '::',
					_0: author,
					_1: {
						ctor: '::',
						_0: email,
						_1: {
							ctor: '::',
							_0: date,
							_1: {
								ctor: '::',
								_0: revisionText,
								_1: {
									ctor: '::',
									_0: '</div>\n',
									_1: {ctor: '[]'}
								}
							}
						}
					}
				}
			});
		var bodyPart = A2(_elm_lang$core$String$join, '\n', bodyParts);
		var title = A2(_user$project$MiniLatex_LatexState$getDictionaryItem, 'title', latexState);
		var titlePart = A2(
			_elm_lang$core$Basics_ops['++'],
			'\n<div class=\"title\">',
			A2(_elm_lang$core$Basics_ops['++'], title, '</div>'));
		return A2(
			_elm_lang$core$String$join,
			'\n',
			{
				ctor: '::',
				_0: titlePart,
				_1: {
					ctor: '::',
					_0: bodyPart,
					_1: {ctor: '[]'}
				}
			});
	});
var _user$project$MiniLatex_Render$tag = F3(
	function (tagName, tagProperties, content) {
		return A2(
			_elm_lang$core$String$join,
			'',
			{
				ctor: '::',
				_0: '<',
				_1: {
					ctor: '::',
					_0: tagName,
					_1: {
						ctor: '::',
						_0: ' ',
						_1: {
							ctor: '::',
							_0: tagProperties,
							_1: {
								ctor: '::',
								_0: ' ',
								_1: {
									ctor: '::',
									_0: '>',
									_1: {
										ctor: '::',
										_0: content,
										_1: {
											ctor: '::',
											_0: '</',
											_1: {
												ctor: '::',
												_0: tagName,
												_1: {
													ctor: '::',
													_0: '>',
													_1: {ctor: '[]'}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			});
	});
var _user$project$MiniLatex_Render$compress = function (str) {
	return A4(
		_elm_lang$core$Regex$replace,
		_elm_lang$core$Regex$All,
		_elm_lang$core$Regex$regex('[,;.!?&_]'),
		function (_p1) {
			return '';
		},
		A3(
			_elm_community$string_extra$String_Extra$replace,
			' ',
			':',
			_elm_lang$core$String$toLower(str)));
};
var _user$project$MiniLatex_Render$makeId = F2(
	function (prefix, name) {
		return A2(
			_elm_lang$core$String$join,
			':',
			{
				ctor: '::',
				_0: prefix,
				_1: {
					ctor: '::',
					_0: _user$project$MiniLatex_Render$compress(name),
					_1: {ctor: '[]'}
				}
			});
	});
var _user$project$MiniLatex_Render$idPhrase = F2(
	function (prefix, name) {
		var compressedName = A3(
			_elm_community$string_extra$String_Extra$replace,
			' ',
			':',
			_elm_lang$core$String$toLower(name));
		return A2(
			_elm_lang$core$String$join,
			'',
			{
				ctor: '::',
				_0: 'id=\"',
				_1: {
					ctor: '::',
					_0: A2(_user$project$MiniLatex_Render$makeId, prefix, name),
					_1: {
						ctor: '::',
						_0: '\"',
						_1: {ctor: '[]'}
					}
				}
			});
	});
var _user$project$MiniLatex_Render$makeTocItem = function (tocItem) {
	var ti = _elm_lang$core$Tuple$second(tocItem);
	var classProperty = A2(
		_elm_lang$core$Basics_ops['++'],
		'class=\"sectionLevel',
		A2(
			_elm_lang$core$Basics_ops['++'],
			_elm_lang$core$Basics$toString(ti.level),
			'\"'));
	var id = A2(
		_user$project$MiniLatex_Render$makeId,
		_user$project$MiniLatex_Render$sectionPrefix(ti.level),
		ti.name);
	var href = A2(
		_elm_lang$core$Basics_ops['++'],
		'href=\"#',
		A2(_elm_lang$core$Basics_ops['++'], id, '\"'));
	var innerTag = A2(
		_elm_lang$core$Basics_ops['++'],
		ti.label,
		A2(
			_elm_lang$core$Basics_ops['++'],
			' ',
			A3(_user$project$MiniLatex_Render$tag, 'a', href, ti.name)));
	var i = _elm_lang$core$Tuple$first(tocItem);
	return A3(_user$project$MiniLatex_Render$tag, 'li', classProperty, innerTag);
};
var _user$project$MiniLatex_Render$makeTableOfContents = function (latexState) {
	return A2(
		_elm_lang$core$String$join,
		'\n',
		A3(
			_elm_lang$core$List$foldl,
			F2(
				function (tocItem, acc) {
					return A2(
						_elm_lang$core$Basics_ops['++'],
						acc,
						{
							ctor: '::',
							_0: _user$project$MiniLatex_Render$makeTocItem(tocItem),
							_1: {ctor: '[]'}
						});
				}),
			{ctor: '[]'},
			A2(
				_elm_lang$core$List$indexedMap,
				F2(
					function (v0, v1) {
						return {ctor: '_Tuple2', _0: v0, _1: v1};
					}),
				latexState.tableOfContents)));
};
var _user$project$MiniLatex_Render$renderTableOfContents = F2(
	function (latexState, list) {
		var innerPart = _user$project$MiniLatex_Render$makeTableOfContents(latexState);
		return A2(
			_elm_lang$core$Basics_ops['++'],
			'\n<p class=\"tocTitle\">Table of Contents</p>\n<ul class=\"ListEnvironment\">\n',
			A2(_elm_lang$core$Basics_ops['++'], innerPart, '\n</ul>\n'));
	});
var _user$project$MiniLatex_Render$a = F2(
	function (url, label) {
		return A2(
			_elm_lang$core$Basics_ops['++'],
			'<a href=\"',
			A2(
				_elm_lang$core$Basics_ops['++'],
				url,
				A2(
					_elm_lang$core$Basics_ops['++'],
					'\"  target=\"_blank\" >\n',
					A2(_elm_lang$core$Basics_ops['++'], label, '\n</a>'))));
	});
var _user$project$MiniLatex_Render$renderInlineComment = F2(
	function (latexState, args) {
		return '';
	});
var _user$project$MiniLatex_Render$renderSmallSkip = F2(
	function (latexState, args) {
		return '<p class=\"smallskip\"> &nbsp;</p>';
	});
var _user$project$MiniLatex_Render$renderMedSkip = F2(
	function (latexState, args) {
		return A2(
			_user$project$MiniLatex_Render$div,
			{ctor: '[]'},
			{
				ctor: '::',
				_0: '<br>',
				_1: {ctor: '[]'}
			});
	});
var _user$project$MiniLatex_Render$renderBigSkip = F2(
	function (latexState, args) {
		return A2(
			_user$project$MiniLatex_Render$div,
			{ctor: '[]'},
			{
				ctor: '::',
				_0: '<br><br>',
				_1: {ctor: '[]'}
			});
	});
var _user$project$MiniLatex_Render$numberedLine = F2(
	function (k, line) {
		return A2(
			_elm_lang$core$Basics_ops['++'],
			A3(
				_elm_lang$core$String$padLeft,
				5,
				_elm_lang$core$Native_Utils.chr(' '),
				_elm_lang$core$Basics$toString(k)),
			A2(_elm_lang$core$Basics_ops['++'], '  ', line));
	});
var _user$project$MiniLatex_Render$addNumberedLine = F2(
	function (line, data) {
		var _p2 = data;
		var k = _p2._0;
		var lines = _p2._1;
		return {
			ctor: '_Tuple2',
			_0: k + 1,
			_1: A2(
				_elm_lang$core$Basics_ops['++'],
				{
					ctor: '::',
					_0: A2(_user$project$MiniLatex_Render$numberedLine, k + 1, line),
					_1: {ctor: '[]'}
				},
				lines)
		};
	});
var _user$project$MiniLatex_Render$addLineNumbers = function (text) {
	return A2(
		_elm_lang$core$String$join,
		'\n',
		_elm_lang$core$List$reverse(
			_elm_lang$core$Tuple$second(
				A3(
					_elm_lang$core$List$foldl,
					_user$project$MiniLatex_Render$addNumberedLine,
					{
						ctor: '_Tuple2',
						_0: 0,
						_1: {ctor: '[]'}
					},
					A2(
						_elm_lang$core$String$split,
						'\n',
						_elm_lang$core$String$trim(text))))));
};
var _user$project$MiniLatex_Render$renderCell = function (cell) {
	var _p3 = cell;
	switch (_p3.ctor) {
		case 'LXString':
			return A2(
				_elm_lang$core$Basics_ops['++'],
				'<td>',
				A2(_elm_lang$core$Basics_ops['++'], _p3._0, '</td>'));
		case 'InlineMath':
			return A2(
				_elm_lang$core$Basics_ops['++'],
				'<td>$',
				A2(_elm_lang$core$Basics_ops['++'], _p3._0, '$</td>'));
		default:
			return '<td>-</td>';
	}
};
var _user$project$MiniLatex_Render$renderRow = function (row) {
	var _p4 = row;
	if (_p4.ctor === 'LatexList') {
		return function (row) {
			return A2(
				_elm_lang$core$Basics_ops['++'],
				'<tr> ',
				A2(_elm_lang$core$Basics_ops['++'], row, ' </tr>\n'));
		}(
			A3(
				_elm_lang$core$List$foldl,
				F2(
					function (cell, acc) {
						return A2(
							_elm_lang$core$Basics_ops['++'],
							acc,
							A2(
								_elm_lang$core$Basics_ops['++'],
								' ',
								_user$project$MiniLatex_Render$renderCell(cell)));
					}),
				'',
				_p4._0));
	} else {
		return '<tr>-</tr>';
	}
};
var _user$project$MiniLatex_Render$renderTableBody = function (body) {
	var _p5 = body;
	if (_p5.ctor === 'LatexList') {
		return function (body) {
			return A2(
				_elm_lang$core$Basics_ops['++'],
				'<table>\n',
				A2(_elm_lang$core$Basics_ops['++'], body, '</table>\n'));
		}(
			A3(
				_elm_lang$core$List$foldl,
				F2(
					function (row, acc) {
						return A2(
							_elm_lang$core$Basics_ops['++'],
							acc,
							A2(
								_elm_lang$core$Basics_ops['++'],
								' ',
								_user$project$MiniLatex_Render$renderRow(row)));
					}),
				'',
				_p5._0));
	} else {
		return '<table>-</table>';
	}
};
var _user$project$MiniLatex_Render$renderTabular = F2(
	function (latexState, body) {
		return _user$project$MiniLatex_Render$renderTableBody(body);
	});
var _user$project$MiniLatex_Render$renderCommentEnvironment = F2(
	function (latexState, body) {
		return '';
	});
var _user$project$MiniLatex_Render$renderComment = function (str) {
	return '';
};
var _user$project$MiniLatex_Render$itemClass = function (level) {
	return A2(
		_elm_lang$core$Basics_ops['++'],
		'item',
		_elm_lang$core$Basics$toString(level));
};
var _user$project$MiniLatex_Render$firstChar = _elm_lang$core$String$left(1);
var _user$project$MiniLatex_Render$lastChar = _elm_lang$core$String$right(1);
var _user$project$MiniLatex_Render$extractList = function (latexExpression) {
	var _p6 = latexExpression;
	if (_p6.ctor === 'LatexList') {
		return _p6._0;
	} else {
		return {ctor: '[]'};
	}
};
var _user$project$MiniLatex_Render$parseString = F2(
	function (parser, str) {
		return A2(_elm_tools$parser$Parser$run, parser, str);
	});
var _user$project$MiniLatex_Render$getElement = F2(
	function (k, list) {
		return A2(
			_elm_lang$core$Maybe$withDefault,
			_user$project$MiniLatex_Parser$LXString('xxx'),
			A2(_elm_community$list_extra$List_Extra$getAt, k, list));
	});
var _user$project$MiniLatex_Render$ImageAttributes = F3(
	function (a, b, c) {
		return {width: a, $float: b, align: c};
	});
var _user$project$MiniLatex_Render$parseImageAttributes = function (attributeString) {
	var kvList = _user$project$MiniLatex_KeyValueUtilities$getKeyValueList(attributeString);
	var widthValue = A2(
		_elm_lang$core$Result$withDefault,
		200,
		_elm_lang$core$String$toInt(
			A2(_user$project$MiniLatex_KeyValueUtilities$getValue, 'width', kvList)));
	var floatValue = A2(_user$project$MiniLatex_KeyValueUtilities$getValue, 'float', kvList);
	var alignValue = A2(_user$project$MiniLatex_KeyValueUtilities$getValue, 'align', kvList);
	return A3(_user$project$MiniLatex_Render$ImageAttributes, widthValue, floatValue, alignValue);
};
var _user$project$MiniLatex_Render$NoSpace = {ctor: 'NoSpace'};
var _user$project$MiniLatex_Render$Space = {ctor: 'Space'};
var _user$project$MiniLatex_Render$joinType = F2(
	function (l, r) {
		var firstCharRight = _user$project$MiniLatex_Render$firstChar(r);
		var lastCharLeft = _user$project$MiniLatex_Render$lastChar(l);
		return _elm_lang$core$Native_Utils.eq(l, '') ? _user$project$MiniLatex_Render$NoSpace : (A2(
			_elm_lang$core$List$member,
			lastCharLeft,
			{
				ctor: '::',
				_0: '(',
				_1: {ctor: '[]'}
			}) ? _user$project$MiniLatex_Render$NoSpace : (A2(
			_elm_lang$core$List$member,
			firstCharRight,
			{
				ctor: '::',
				_0: ')',
				_1: {
					ctor: '::',
					_0: '.',
					_1: {
						ctor: '::',
						_0: ',',
						_1: {
							ctor: '::',
							_0: '?',
							_1: {
								ctor: '::',
								_0: '!',
								_1: {
									ctor: '::',
									_0: ';',
									_1: {
										ctor: '::',
										_0: ':',
										_1: {ctor: '[]'}
									}
								}
							}
						}
					}
				}
			}) ? _user$project$MiniLatex_Render$NoSpace : _user$project$MiniLatex_Render$Space));
	});
var _user$project$MiniLatex_Render$joinDatum2String = F2(
	function (current, datum) {
		var _p7 = datum;
		var acc = _p7._0;
		var previous = _p7._1;
		var _p8 = A2(_user$project$MiniLatex_Render$joinType, previous, current);
		if (_p8.ctor === 'NoSpace') {
			return {
				ctor: '_Tuple2',
				_0: A2(_elm_lang$core$Basics_ops['++'], acc, current),
				_1: current
			};
		} else {
			return {
				ctor: '_Tuple2',
				_0: A2(
					_elm_lang$core$Basics_ops['++'],
					acc,
					A2(_elm_lang$core$Basics_ops['++'], ' ', current)),
				_1: current
			};
		}
	});
var _user$project$MiniLatex_Render$joinList = function (stringList) {
	var start = A2(
		_elm_lang$core$Maybe$withDefault,
		'',
		_elm_lang$core$List$head(stringList));
	return _elm_lang$core$Tuple$first(
		A3(
			_elm_lang$core$List$foldl,
			_user$project$MiniLatex_Render$joinDatum2String,
			{ctor: '_Tuple2', _0: '', _1: ''},
			stringList));
};
var _user$project$MiniLatex_Render$renderLatexList = F2(
	function (latexState, args) {
		return _user$project$MiniLatex_Render$joinList(
			A2(
				_elm_lang$core$List$map,
				_user$project$MiniLatex_Render$render(latexState),
				args));
	});
var _user$project$MiniLatex_Render$render = F2(
	function (latexState, latexExpression) {
		var _p9 = latexExpression;
		switch (_p9.ctor) {
			case 'Comment':
				return _user$project$MiniLatex_Render$renderComment(_p9._0);
			case 'Macro':
				return A3(_user$project$MiniLatex_Render$renderMacro, latexState, _p9._0, _p9._1);
			case 'Item':
				return A3(_user$project$MiniLatex_Render$renderItem, latexState, _p9._0, _p9._1);
			case 'InlineMath':
				return A2(
					_elm_lang$core$Basics_ops['++'],
					'$',
					A2(_elm_lang$core$Basics_ops['++'], _p9._0, '$'));
			case 'DisplayMath':
				return A2(
					_elm_lang$core$Basics_ops['++'],
					'$$',
					A2(_elm_lang$core$Basics_ops['++'], _p9._0, '$$'));
			case 'Environment':
				return A3(_user$project$MiniLatex_Render$renderEnvironment, latexState, _p9._0, _p9._1);
			case 'LatexList':
				return A2(_user$project$MiniLatex_Render$renderLatexList, latexState, _p9._0);
			default:
				return _p9._0;
		}
	});
var _user$project$MiniLatex_Render$renderEnvironment = F3(
	function (latexState, name, body) {
		return A3(_user$project$MiniLatex_Render$environmentRenderer, name, latexState, body);
	});
var _user$project$MiniLatex_Render$environmentRenderer = function (name) {
	var _p10 = A2(_elm_lang$core$Dict$get, name, _user$project$MiniLatex_Render$renderEnvironmentDict);
	if (_p10.ctor === 'Just') {
		return _p10._0;
	} else {
		return _user$project$MiniLatex_Render$renderDefaultEnvironment(name);
	}
};
var _user$project$MiniLatex_Render$renderDefaultEnvironment = F3(
	function (name, latexState, body) {
		return A2(
			_elm_lang$core$List$member,
			name,
			{
				ctor: '::',
				_0: 'theorem',
				_1: {
					ctor: '::',
					_0: 'proposition',
					_1: {
						ctor: '::',
						_0: 'corollary',
						_1: {
							ctor: '::',
							_0: 'lemma',
							_1: {
								ctor: '::',
								_0: 'definition',
								_1: {ctor: '[]'}
							}
						}
					}
				}
			}) ? A3(_user$project$MiniLatex_Render$renderTheoremLikeEnvironment, latexState, name, body) : A3(_user$project$MiniLatex_Render$renderDefaultEnvironment2, latexState, name, body);
	});
var _user$project$MiniLatex_Render$renderDefaultEnvironment2 = F3(
	function (latexState, name, body) {
		var r = A2(_user$project$MiniLatex_Render$render, latexState, body);
		return A2(
			_elm_lang$core$Basics_ops['++'],
			'\n<div class=\"environment\">\n<strong>',
			A2(
				_elm_lang$core$Basics_ops['++'],
				_elm_community$string_extra$String_Extra$toSentenceCase(name),
				A2(
					_elm_lang$core$Basics_ops['++'],
					'</strong>\n<div class=\"italic\">\n',
					A2(_elm_lang$core$Basics_ops['++'], r, '\n</div>\n</div>\n'))));
	});
var _user$project$MiniLatex_Render$renderTheoremLikeEnvironment = F3(
	function (latexState, name, body) {
		var tno = A2(_user$project$MiniLatex_LatexState$getCounter, 'tno', latexState);
		var s1 = A2(_user$project$MiniLatex_LatexState$getCounter, 's1', latexState);
		var tnoString = (_elm_lang$core$Native_Utils.cmp(s1, 0) > 0) ? A2(
			_elm_lang$core$Basics_ops['++'],
			' ',
			A2(
				_elm_lang$core$Basics_ops['++'],
				_elm_lang$core$Basics$toString(s1),
				A2(
					_elm_lang$core$Basics_ops['++'],
					'.',
					_elm_lang$core$Basics$toString(tno)))) : A2(
			_elm_lang$core$Basics_ops['++'],
			' ',
			_elm_lang$core$Basics$toString(tno));
		var eqno = A2(_user$project$MiniLatex_LatexState$getCounter, 'eqno', latexState);
		var r = A2(_user$project$MiniLatex_Render$render, latexState, body);
		return A2(
			_elm_lang$core$Basics_ops['++'],
			'\n<div class=\"environment\">\n<strong>',
			A2(
				_elm_lang$core$Basics_ops['++'],
				_elm_community$string_extra$String_Extra$toSentenceCase(name),
				A2(
					_elm_lang$core$Basics_ops['++'],
					tnoString,
					A2(
						_elm_lang$core$Basics_ops['++'],
						'</strong>\n<div class=\"italic\">\n',
						A2(_elm_lang$core$Basics_ops['++'], r, '\n</div>\n</div>\n')))));
	});
var _user$project$MiniLatex_Render$renderEnvironmentDict = _elm_lang$core$Dict$fromList(
	{
		ctor: '::',
		_0: {
			ctor: '_Tuple2',
			_0: 'align',
			_1: F2(
				function (x, y) {
					return A2(_user$project$MiniLatex_Render$renderAlignEnvironment, x, y);
				})
		},
		_1: {
			ctor: '::',
			_0: {
				ctor: '_Tuple2',
				_0: 'center',
				_1: F2(
					function (x, y) {
						return A2(_user$project$MiniLatex_Render$renderCenterEnvironment, x, y);
					})
			},
			_1: {
				ctor: '::',
				_0: {
					ctor: '_Tuple2',
					_0: 'comment',
					_1: F2(
						function (x, y) {
							return A2(_user$project$MiniLatex_Render$renderCommentEnvironment, x, y);
						})
				},
				_1: {
					ctor: '::',
					_0: {
						ctor: '_Tuple2',
						_0: 'indent',
						_1: F2(
							function (x, y) {
								return A2(_user$project$MiniLatex_Render$renderIndentEnvironment, x, y);
							})
					},
					_1: {
						ctor: '::',
						_0: {
							ctor: '_Tuple2',
							_0: 'enumerate',
							_1: F2(
								function (x, y) {
									return A2(_user$project$MiniLatex_Render$renderEnumerate, x, y);
								})
						},
						_1: {
							ctor: '::',
							_0: {
								ctor: '_Tuple2',
								_0: 'eqnarray',
								_1: F2(
									function (x, y) {
										return A2(_user$project$MiniLatex_Render$renderEqnArray, x, y);
									})
							},
							_1: {
								ctor: '::',
								_0: {
									ctor: '_Tuple2',
									_0: 'equation',
									_1: F2(
										function (x, y) {
											return A2(_user$project$MiniLatex_Render$renderEquationEnvironment, x, y);
										})
								},
								_1: {
									ctor: '::',
									_0: {
										ctor: '_Tuple2',
										_0: 'itemize',
										_1: F2(
											function (x, y) {
												return A2(_user$project$MiniLatex_Render$renderItemize, x, y);
											})
									},
									_1: {
										ctor: '::',
										_0: {
											ctor: '_Tuple2',
											_0: 'listing',
											_1: F2(
												function (x, y) {
													return A2(_user$project$MiniLatex_Render$renderListing, x, y);
												})
										},
										_1: {
											ctor: '::',
											_0: {
												ctor: '_Tuple2',
												_0: 'macros',
												_1: F2(
													function (x, y) {
														return A2(_user$project$MiniLatex_Render$renderMacros, x, y);
													})
											},
											_1: {
												ctor: '::',
												_0: {
													ctor: '_Tuple2',
													_0: 'quotation',
													_1: F2(
														function (x, y) {
															return A2(_user$project$MiniLatex_Render$renderQuotation, x, y);
														})
												},
												_1: {
													ctor: '::',
													_0: {
														ctor: '_Tuple2',
														_0: 'tabular',
														_1: F2(
															function (x, y) {
																return A2(_user$project$MiniLatex_Render$renderTabular, x, y);
															})
													},
													_1: {
														ctor: '::',
														_0: {
															ctor: '_Tuple2',
															_0: 'verbatim',
															_1: F2(
																function (x, y) {
																	return A2(_user$project$MiniLatex_Render$renderVerbatim, x, y);
																})
														},
														_1: {
															ctor: '::',
															_0: {
																ctor: '_Tuple2',
																_0: 'verse',
																_1: F2(
																	function (x, y) {
																		return A2(_user$project$MiniLatex_Render$renderVerse, x, y);
																	})
															},
															_1: {ctor: '[]'}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
	});
var _user$project$MiniLatex_Render$renderAlignEnvironment = F2(
	function (latexState, body) {
		var s1 = A2(_user$project$MiniLatex_LatexState$getCounter, 's1', latexState);
		var eqno = A2(_user$project$MiniLatex_LatexState$getCounter, 'eqno', latexState);
		var addendum = (_elm_lang$core$Native_Utils.cmp(eqno, 0) > 0) ? ((_elm_lang$core$Native_Utils.cmp(s1, 0) > 0) ? A2(
			_elm_lang$core$Basics_ops['++'],
			'\\tag{',
			A2(
				_elm_lang$core$Basics_ops['++'],
				_elm_lang$core$Basics$toString(s1),
				A2(
					_elm_lang$core$Basics_ops['++'],
					'.',
					A2(
						_elm_lang$core$Basics_ops['++'],
						_elm_lang$core$Basics$toString(eqno),
						'}')))) : A2(
			_elm_lang$core$Basics_ops['++'],
			'\\tag{',
			A2(
				_elm_lang$core$Basics_ops['++'],
				_elm_lang$core$Basics$toString(eqno),
				'}'))) : '';
		var r = A3(
			_elm_community$string_extra$String_Extra$replace,
			'\\ \\',
			'\\\\',
			A2(_user$project$MiniLatex_Render$render, latexState, body));
		return A2(
			_elm_lang$core$Basics_ops['++'],
			'\n$$\n\\begin{align}\n',
			A2(
				_elm_lang$core$Basics_ops['++'],
				addendum,
				A2(_elm_lang$core$Basics_ops['++'], r, '\n\\end{align}\n$$\n')));
	});
var _user$project$MiniLatex_Render$renderCenterEnvironment = F2(
	function (latexState, body) {
		var r = A2(_user$project$MiniLatex_Render$render, latexState, body);
		return A2(
			_elm_lang$core$Basics_ops['++'],
			'\n<div class=\"center\" >\n',
			A2(_elm_lang$core$Basics_ops['++'], r, '\n</div>\n'));
	});
var _user$project$MiniLatex_Render$renderEnumerate = F2(
	function (latexState, body) {
		return A2(
			_elm_lang$core$Basics_ops['++'],
			'\n<ol>\n',
			A2(
				_elm_lang$core$Basics_ops['++'],
				A2(_user$project$MiniLatex_Render$render, latexState, body),
				'\n</ol>\n'));
	});
var _user$project$MiniLatex_Render$renderEqnArray = F2(
	function (latexState, body) {
		return A2(
			_elm_lang$core$Basics_ops['++'],
			'\n$$\n',
			A2(
				_elm_lang$core$Basics_ops['++'],
				A2(_user$project$MiniLatex_Render$render, latexState, body),
				'\n$$\n'));
	});
var _user$project$MiniLatex_Render$renderEquationEnvironment = F2(
	function (latexState, body) {
		var r = A2(_user$project$MiniLatex_Render$render, latexState, body);
		var s1 = A2(_user$project$MiniLatex_LatexState$getCounter, 's1', latexState);
		var eqno = A2(_user$project$MiniLatex_LatexState$getCounter, 'eqno', latexState);
		var addendum = (_elm_lang$core$Native_Utils.cmp(eqno, 0) > 0) ? ((_elm_lang$core$Native_Utils.cmp(s1, 0) > 0) ? A2(
			_elm_lang$core$Basics_ops['++'],
			'\\tag{',
			A2(
				_elm_lang$core$Basics_ops['++'],
				_elm_lang$core$Basics$toString(s1),
				A2(
					_elm_lang$core$Basics_ops['++'],
					'.',
					A2(
						_elm_lang$core$Basics_ops['++'],
						_elm_lang$core$Basics$toString(eqno),
						'}')))) : A2(
			_elm_lang$core$Basics_ops['++'],
			'\\tag{',
			A2(
				_elm_lang$core$Basics_ops['++'],
				_elm_lang$core$Basics$toString(eqno),
				'}'))) : '';
		return A2(
			_elm_lang$core$Basics_ops['++'],
			'\n$$\n\\begin{equation}',
			A2(
				_elm_lang$core$Basics_ops['++'],
				addendum,
				A2(_elm_lang$core$Basics_ops['++'], r, '\\end{equation}\n$$\n')));
	});
var _user$project$MiniLatex_Render$renderIndentEnvironment = F2(
	function (latexState, body) {
		return A2(
			_user$project$MiniLatex_Render$div,
			{
				ctor: '::',
				_0: 'style=\"margin-left:2em\"',
				_1: {ctor: '[]'}
			},
			{
				ctor: '::',
				_0: A2(_user$project$MiniLatex_Render$render, latexState, body),
				_1: {ctor: '[]'}
			});
	});
var _user$project$MiniLatex_Render$renderItemize = F2(
	function (latexState, body) {
		return A2(
			_elm_lang$core$Basics_ops['++'],
			'\n<ul>\n',
			A2(
				_elm_lang$core$Basics_ops['++'],
				A2(_user$project$MiniLatex_Render$render, latexState, body),
				'\n</ul>\n'));
	});
var _user$project$MiniLatex_Render$renderListing = F2(
	function (latexState, body) {
		var text = A2(_user$project$MiniLatex_Render$render, latexState, body);
		return A2(
			_elm_lang$core$Basics_ops['++'],
			'\n<pre class=\"verbatim\">',
			A2(
				_elm_lang$core$Basics_ops['++'],
				_user$project$MiniLatex_Render$addLineNumbers(text),
				'</pre>\n'));
	});
var _user$project$MiniLatex_Render$renderMacros = F2(
	function (latexState, body) {
		return A2(
			_elm_lang$core$Basics_ops['++'],
			'\n$$\n',
			A2(
				_elm_lang$core$Basics_ops['++'],
				A2(_user$project$MiniLatex_Render$render, latexState, body),
				'\n$$\n'));
	});
var _user$project$MiniLatex_Render$renderQuotation = F2(
	function (latexState, body) {
		return A2(
			_user$project$MiniLatex_Render$div,
			{
				ctor: '::',
				_0: 'class=\"quotation\"',
				_1: {ctor: '[]'}
			},
			{
				ctor: '::',
				_0: A2(_user$project$MiniLatex_Render$render, latexState, body),
				_1: {ctor: '[]'}
			});
	});
var _user$project$MiniLatex_Render$renderVerbatim = F2(
	function (latexState, body) {
		var body2 = A3(
			_elm_community$string_extra$String_Extra$replace,
			'<',
			'&lt;',
			A3(
				_elm_community$string_extra$String_Extra$replace,
				'>',
				'&gt;',
				A2(_user$project$MiniLatex_Render$render, latexState, body)));
		return A2(
			_elm_lang$core$Basics_ops['++'],
			'\n<pre class=\"verbatim\">',
			A2(_elm_lang$core$Basics_ops['++'], body2, '</pre>\n'));
	});
var _user$project$MiniLatex_Render$renderVerse = F2(
	function (latexState, body) {
		return A2(
			_user$project$MiniLatex_Render$div,
			{
				ctor: '::',
				_0: 'class=\"verse\"',
				_1: {ctor: '[]'}
			},
			{
				ctor: '::',
				_0: _elm_lang$core$String$trim(
					A2(_user$project$MiniLatex_Render$render, latexState, body)),
				_1: {ctor: '[]'}
			});
	});
var _user$project$MiniLatex_Render$renderItem = F3(
	function (latexState, level, latexExpression) {
		return A2(
			_elm_lang$core$Basics_ops['++'],
			'<li class=\"',
			A2(
				_elm_lang$core$Basics_ops['++'],
				_user$project$MiniLatex_Render$itemClass(level),
				A2(
					_elm_lang$core$Basics_ops['++'],
					'\">',
					A2(
						_elm_lang$core$Basics_ops['++'],
						A2(_user$project$MiniLatex_Render$render, latexState, latexExpression),
						'</li>\n'))));
	});
var _user$project$MiniLatex_Render$renderMacro = F3(
	function (latexState, name, args) {
		return A3(_user$project$MiniLatex_Render$macroRenderer, name, latexState, args);
	});
var _user$project$MiniLatex_Render$macroRenderer = function (name) {
	var _p11 = A2(_elm_lang$core$Dict$get, name, _user$project$MiniLatex_Render$renderMacroDict);
	if (_p11.ctor === 'Just') {
		return _p11._0;
	} else {
		return _user$project$MiniLatex_Render$reproduceMacro(name);
	}
};
var _user$project$MiniLatex_Render$renderMacroDict = _elm_lang$core$Dict$fromList(
	{
		ctor: '::',
		_0: {
			ctor: '_Tuple2',
			_0: 'bozo',
			_1: F2(
				function (x, y) {
					return A2(_user$project$MiniLatex_Render$renderBozo, x, y);
				})
		},
		_1: {
			ctor: '::',
			_0: {
				ctor: '_Tuple2',
				_0: 'bigskip',
				_1: F2(
					function (x, y) {
						return A2(_user$project$MiniLatex_Render$renderBigSkip, x, y);
					})
			},
			_1: {
				ctor: '::',
				_0: {
					ctor: '_Tuple2',
					_0: 'cite',
					_1: F2(
						function (x, y) {
							return A2(_user$project$MiniLatex_Render$renderCite, x, y);
						})
				},
				_1: {
					ctor: '::',
					_0: {
						ctor: '_Tuple2',
						_0: 'code',
						_1: F2(
							function (x, y) {
								return A2(_user$project$MiniLatex_Render$renderCode, x, y);
							})
					},
					_1: {
						ctor: '::',
						_0: {
							ctor: '_Tuple2',
							_0: 'comment',
							_1: F2(
								function (x, y) {
									return A2(_user$project$MiniLatex_Render$renderInlineComment, x, y);
								})
						},
						_1: {
							ctor: '::',
							_0: {
								ctor: '_Tuple2',
								_0: 'ellie',
								_1: F2(
									function (x, y) {
										return A2(_user$project$MiniLatex_Render$renderEllie, x, y);
									})
							},
							_1: {
								ctor: '::',
								_0: {
									ctor: '_Tuple2',
									_0: 'emph',
									_1: F2(
										function (x, y) {
											return A2(_user$project$MiniLatex_Render$renderItalic, x, y);
										})
								},
								_1: {
									ctor: '::',
									_0: {
										ctor: '_Tuple2',
										_0: 'eqref',
										_1: F2(
											function (x, y) {
												return A2(_user$project$MiniLatex_Render$renderEqRef, x, y);
											})
									},
									_1: {
										ctor: '::',
										_0: {
											ctor: '_Tuple2',
											_0: 'href',
											_1: F2(
												function (x, y) {
													return A2(_user$project$MiniLatex_Render$renderHRef, x, y);
												})
										},
										_1: {
											ctor: '::',
											_0: {
												ctor: '_Tuple2',
												_0: 'iframe',
												_1: F2(
													function (x, y) {
														return A2(_user$project$MiniLatex_Render$renderIFrame, x, y);
													})
											},
											_1: {
												ctor: '::',
												_0: {
													ctor: '_Tuple2',
													_0: 'image',
													_1: F2(
														function (x, y) {
															return A2(_user$project$MiniLatex_Render$renderImage, x, y);
														})
												},
												_1: {
													ctor: '::',
													_0: {
														ctor: '_Tuple2',
														_0: 'imageref',
														_1: F2(
															function (x, y) {
																return A2(_user$project$MiniLatex_Render$renderImageRef, x, y);
															})
													},
													_1: {
														ctor: '::',
														_0: {
															ctor: '_Tuple2',
															_0: 'index',
															_1: F2(
																function (x, y) {
																	return '';
																})
														},
														_1: {
															ctor: '::',
															_0: {
																ctor: '_Tuple2',
																_0: 'italic',
																_1: F2(
																	function (x, y) {
																		return A2(_user$project$MiniLatex_Render$renderItalic, x, y);
																	})
															},
															_1: {
																ctor: '::',
																_0: {
																	ctor: '_Tuple2',
																	_0: 'label',
																	_1: F2(
																		function (x, y) {
																			return '';
																		})
																},
																_1: {
																	ctor: '::',
																	_0: {
																		ctor: '_Tuple2',
																		_0: 'maketitle',
																		_1: F2(
																			function (x, y) {
																				return '';
																			})
																	},
																	_1: {
																		ctor: '::',
																		_0: {
																			ctor: '_Tuple2',
																			_0: 'tableofcontents',
																			_1: F2(
																				function (x, y) {
																					return A2(_user$project$MiniLatex_Render$renderTableOfContents, x, y);
																				})
																		},
																		_1: {
																			ctor: '::',
																			_0: {
																				ctor: '_Tuple2',
																				_0: 'maketitle',
																				_1: F2(
																					function (x, y) {
																						return A2(_user$project$MiniLatex_Render$renderTitle, x, y);
																					})
																			},
																			_1: {
																				ctor: '::',
																				_0: {
																					ctor: '_Tuple2',
																					_0: 'mdash',
																					_1: F2(
																						function (x, y) {
																							return '&mdash;';
																						})
																				},
																				_1: {
																					ctor: '::',
																					_0: {
																						ctor: '_Tuple2',
																						_0: 'ndash',
																						_1: F2(
																							function (x, y) {
																								return '&ndash;';
																							})
																					},
																					_1: {
																						ctor: '::',
																						_0: {
																							ctor: '_Tuple2',
																							_0: 'newcommand',
																							_1: F2(
																								function (x, y) {
																									return A2(_user$project$MiniLatex_Render$renderNewCommand, x, y);
																								})
																						},
																						_1: {
																							ctor: '::',
																							_0: {
																								ctor: '_Tuple2',
																								_0: 'ref',
																								_1: F2(
																									function (x, y) {
																										return A2(_user$project$MiniLatex_Render$renderRef, x, y);
																									})
																							},
																							_1: {
																								ctor: '::',
																								_0: {
																									ctor: '_Tuple2',
																									_0: 'section',
																									_1: F2(
																										function (x, y) {
																											return A2(_user$project$MiniLatex_Render$renderSection, x, y);
																										})
																								},
																								_1: {
																									ctor: '::',
																									_0: {
																										ctor: '_Tuple2',
																										_0: 'section*',
																										_1: F2(
																											function (x, y) {
																												return A2(_user$project$MiniLatex_Render$renderSectionStar, x, y);
																											})
																									},
																									_1: {
																										ctor: '::',
																										_0: {
																											ctor: '_Tuple2',
																											_0: 'setcounter',
																											_1: F2(
																												function (x, y) {
																													return '';
																												})
																										},
																										_1: {
																											ctor: '::',
																											_0: {
																												ctor: '_Tuple2',
																												_0: 'medskip',
																												_1: F2(
																													function (x, y) {
																														return A2(_user$project$MiniLatex_Render$renderMedSkip, x, y);
																													})
																											},
																											_1: {
																												ctor: '::',
																												_0: {
																													ctor: '_Tuple2',
																													_0: 'smallskip',
																													_1: F2(
																														function (x, y) {
																															return A2(_user$project$MiniLatex_Render$renderSmallSkip, x, y);
																														})
																												},
																												_1: {
																													ctor: '::',
																													_0: {
																														ctor: '_Tuple2',
																														_0: 'strong',
																														_1: F2(
																															function (x, y) {
																																return A2(_user$project$MiniLatex_Render$renderStrong, x, y);
																															})
																													},
																													_1: {
																														ctor: '::',
																														_0: {
																															ctor: '_Tuple2',
																															_0: 'subheading',
																															_1: F2(
																																function (x, y) {
																																	return A2(_user$project$MiniLatex_Render$renderSubheading, x, y);
																																})
																														},
																														_1: {
																															ctor: '::',
																															_0: {
																																ctor: '_Tuple2',
																																_0: 'subsection',
																																_1: F2(
																																	function (x, y) {
																																		return A2(_user$project$MiniLatex_Render$renderSubsection, x, y);
																																	})
																															},
																															_1: {
																																ctor: '::',
																																_0: {
																																	ctor: '_Tuple2',
																																	_0: 'subsection*',
																																	_1: F2(
																																		function (x, y) {
																																			return A2(_user$project$MiniLatex_Render$renderSubsectionStar, x, y);
																																		})
																																},
																																_1: {
																																	ctor: '::',
																																	_0: {
																																		ctor: '_Tuple2',
																																		_0: 'subsubsection',
																																		_1: F2(
																																			function (x, y) {
																																				return A2(_user$project$MiniLatex_Render$renderSubSubsection, x, y);
																																			})
																																	},
																																	_1: {
																																		ctor: '::',
																																		_0: {
																																			ctor: '_Tuple2',
																																			_0: 'subsubsection*',
																																			_1: F2(
																																				function (x, y) {
																																					return A2(_user$project$MiniLatex_Render$renderSubSubsectionStar, x, y);
																																				})
																																		},
																																		_1: {
																																			ctor: '::',
																																			_0: {
																																				ctor: '_Tuple2',
																																				_0: 'title',
																																				_1: F2(
																																					function (x, y) {
																																						return '';
																																					})
																																			},
																																			_1: {
																																				ctor: '::',
																																				_0: {
																																					ctor: '_Tuple2',
																																					_0: 'author',
																																					_1: F2(
																																						function (x, y) {
																																							return '';
																																						})
																																				},
																																				_1: {
																																					ctor: '::',
																																					_0: {
																																						ctor: '_Tuple2',
																																						_0: 'date',
																																						_1: F2(
																																							function (x, y) {
																																								return '';
																																							})
																																					},
																																					_1: {
																																						ctor: '::',
																																						_0: {
																																							ctor: '_Tuple2',
																																							_0: 'revision',
																																							_1: F2(
																																								function (x, y) {
																																									return '';
																																								})
																																						},
																																						_1: {
																																							ctor: '::',
																																							_0: {
																																								ctor: '_Tuple2',
																																								_0: 'email',
																																								_1: F2(
																																									function (x, y) {
																																										return '';
																																									})
																																							},
																																							_1: {
																																								ctor: '::',
																																								_0: {
																																									ctor: '_Tuple2',
																																									_0: 'term',
																																									_1: F2(
																																										function (x, y) {
																																											return A2(_user$project$MiniLatex_Render$renderTerm, x, y);
																																										})
																																								},
																																								_1: {
																																									ctor: '::',
																																									_0: {
																																										ctor: '_Tuple2',
																																										_0: 'xlink',
																																										_1: F2(
																																											function (x, y) {
																																												return A2(_user$project$MiniLatex_Render$renderXLink, x, y);
																																											})
																																									},
																																									_1: {
																																										ctor: '::',
																																										_0: {
																																											ctor: '_Tuple2',
																																											_0: 'xlinkPublic',
																																											_1: F2(
																																												function (x, y) {
																																													return A2(_user$project$MiniLatex_Render$renderXLinkPublic, x, y);
																																												})
																																										},
																																										_1: {ctor: '[]'}
																																									}
																																								}
																																							}
																																						}
																																					}
																																				}
																																			}
																																		}
																																	}
																																}
																															}
																														}
																													}
																												}
																											}
																										}
																									}
																								}
																							}
																						}
																					}
																				}
																			}
																		}
																	}
																}
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
	});
var _user$project$MiniLatex_Render$renderBozo = F2(
	function (latexState, args) {
		return A2(
			_elm_lang$core$Basics_ops['++'],
			'bozo{',
			A2(
				_elm_lang$core$Basics_ops['++'],
				A3(_user$project$MiniLatex_Render$renderArg, 0, latexState, args),
				A2(
					_elm_lang$core$Basics_ops['++'],
					'}{',
					A2(
						_elm_lang$core$Basics_ops['++'],
						A3(_user$project$MiniLatex_Render$renderArg, 1, latexState, args),
						'}'))));
	});
var _user$project$MiniLatex_Render$renderArg = F3(
	function (k, latexState, args) {
		return _elm_lang$core$String$trim(
			A2(
				_user$project$MiniLatex_Render$render,
				latexState,
				A2(_user$project$MiniLatex_Render$getElement, k, args)));
	});
var _user$project$MiniLatex_Render$renderCite = F2(
	function (latexState, args) {
		return A2(
			_elm_lang$core$Basics_ops['++'],
			' <strong>',
			A2(
				_elm_lang$core$Basics_ops['++'],
				A3(_user$project$MiniLatex_Render$renderArg, 0, latexState, args),
				'</strong>'));
	});
var _user$project$MiniLatex_Render$renderCode = F2(
	function (latexState, args) {
		var arg = A3(_user$project$MiniLatex_Render$renderArg, 0, latexState, args);
		return A2(
			_elm_lang$core$Basics_ops['++'],
			' <span class=\"code\">',
			A2(_elm_lang$core$Basics_ops['++'], arg, '</span>'));
	});
var _user$project$MiniLatex_Render$renderEllie = F2(
	function (latexState, args) {
		var sandbox = ' sandbox=\"allow-modals allow-forms allow-popups allow-scripts allow-same-origin\"';
		var style = ' style = \"width:100%; height:400px; border:0; border-radius: 3px; overflow:hidden;\"';
		var foo = 27.99;
		var title_ = A3(_user$project$MiniLatex_Render$renderArg, 1, latexState, args);
		var title = _elm_lang$core$Native_Utils.eq(title_, 'xxx') ? 'Link to Ellie' : title_;
		var url = A2(
			_elm_lang$core$Basics_ops['++'],
			'https://ellie-app.com/',
			A3(_user$project$MiniLatex_Render$renderArg, 0, latexState, args));
		var src = A2(
			_elm_lang$core$Basics_ops['++'],
			'src =\"https://ellie-app.com/embed/',
			A2(
				_elm_lang$core$Basics_ops['++'],
				A3(_user$project$MiniLatex_Render$renderArg, 0, latexState, args),
				'\"'));
		return A2(
			_elm_lang$core$Basics_ops['++'],
			'<iframe ',
			A2(
				_elm_lang$core$Basics_ops['++'],
				src,
				A2(
					_elm_lang$core$Basics_ops['++'],
					style,
					A2(
						_elm_lang$core$Basics_ops['++'],
						sandbox,
						A2(
							_elm_lang$core$Basics_ops['++'],
							' ></iframe>\n<center style=\"margin-top: -10px;\"><a href=\"',
							A2(
								_elm_lang$core$Basics_ops['++'],
								url,
								A2(
									_elm_lang$core$Basics_ops['++'],
									'\" target=_blank>',
									A2(_elm_lang$core$Basics_ops['++'], title, '</a></center>'))))))));
	});
var _user$project$MiniLatex_Render$renderEqRef = F2(
	function (latexState, args) {
		var key = A3(_user$project$MiniLatex_Render$renderArg, 0, _user$project$MiniLatex_LatexState$emptyLatexState, args);
		var ref = A2(_user$project$MiniLatex_LatexState$getCrossReference, key, latexState);
		return A2(
			_elm_lang$core$Basics_ops['++'],
			'$(',
			A2(_elm_lang$core$Basics_ops['++'], ref, ')$'));
	});
var _user$project$MiniLatex_Render$renderHRef = F2(
	function (latexState, args) {
		var label = A3(_user$project$MiniLatex_Render$renderArg, 1, _user$project$MiniLatex_LatexState$emptyLatexState, args);
		var url = A3(_user$project$MiniLatex_Render$renderArg, 0, _user$project$MiniLatex_LatexState$emptyLatexState, args);
		return A2(
			_elm_lang$core$Basics_ops['++'],
			'<a href=\"',
			A2(
				_elm_lang$core$Basics_ops['++'],
				url,
				A2(
					_elm_lang$core$Basics_ops['++'],
					'\" target=_blank>',
					A2(_elm_lang$core$Basics_ops['++'], label, '</a>'))));
	});
var _user$project$MiniLatex_Render$renderIFrame = F2(
	function (latexState, args) {
		var sandbox = '';
		var height_ = A3(_user$project$MiniLatex_Render$renderArg, 2, _user$project$MiniLatex_LatexState$emptyLatexState, args);
		var title_ = A3(_user$project$MiniLatex_Render$renderArg, 1, _user$project$MiniLatex_LatexState$emptyLatexState, args);
		var title = _elm_lang$core$Native_Utils.eq(title_, 'xxx') ? 'Link' : title_;
		var height = (_elm_lang$core$Native_Utils.eq(title_, 'xxx') || _elm_lang$core$Native_Utils.eq(height_, 'xxx')) ? '400px' : height_;
		var style = A2(
			_elm_lang$core$Basics_ops['++'],
			' style = \"width:100%; height:',
			A2(_elm_lang$core$Basics_ops['++'], height, '; border:1; border-radius: 3px; overflow:scroll;\"'));
		var url = A3(_user$project$MiniLatex_Render$renderArg, 0, _user$project$MiniLatex_LatexState$emptyLatexState, args);
		var src = A2(
			_elm_lang$core$Basics_ops['++'],
			'src =\"',
			A2(_elm_lang$core$Basics_ops['++'], url, '\"'));
		return A2(
			_elm_lang$core$Basics_ops['++'],
			'<iframe scrolling=\"yes\" ',
			A2(
				_elm_lang$core$Basics_ops['++'],
				src,
				A2(
					_elm_lang$core$Basics_ops['++'],
					sandbox,
					A2(
						_elm_lang$core$Basics_ops['++'],
						style,
						A2(
							_elm_lang$core$Basics_ops['++'],
							' ></iframe>\n<center style=\"margin-top: 0px;\"><a href=\"',
							A2(
								_elm_lang$core$Basics_ops['++'],
								url,
								A2(
									_elm_lang$core$Basics_ops['++'],
									'\" target=_blank>',
									A2(_elm_lang$core$Basics_ops['++'], title, '</a></center>'))))))));
	});
var _user$project$MiniLatex_Render$renderImage = F2(
	function (latexState, args) {
		var attributeString = A3(_user$project$MiniLatex_Render$renderArg, 2, latexState, args);
		var imageAttrs = _user$project$MiniLatex_Render$parseImageAttributes(attributeString);
		var label = A3(_user$project$MiniLatex_Render$renderArg, 1, latexState, args);
		var url = A3(_user$project$MiniLatex_Render$renderArg, 0, latexState, args);
		return _elm_lang$core$Native_Utils.eq(imageAttrs.$float, 'left') ? A2(
			_user$project$MiniLatex_Render$div,
			{
				ctor: '::',
				_0: _user$project$MiniLatex_Render$imageFloatLeftStyle(imageAttrs),
				_1: {ctor: '[]'}
			},
			{
				ctor: '::',
				_0: A2(_user$project$MiniLatex_Render$img, url, imageAttrs),
				_1: {
					ctor: '::',
					_0: '<br>',
					_1: {
						ctor: '::',
						_0: label,
						_1: {ctor: '[]'}
					}
				}
			}) : (_elm_lang$core$Native_Utils.eq(imageAttrs.$float, 'right') ? A2(
			_user$project$MiniLatex_Render$div,
			{
				ctor: '::',
				_0: _user$project$MiniLatex_Render$imageFloatRightStyle(imageAttrs),
				_1: {ctor: '[]'}
			},
			{
				ctor: '::',
				_0: A2(_user$project$MiniLatex_Render$img, url, imageAttrs),
				_1: {
					ctor: '::',
					_0: '<br>',
					_1: {
						ctor: '::',
						_0: label,
						_1: {ctor: '[]'}
					}
				}
			}) : (_elm_lang$core$Native_Utils.eq(imageAttrs.align, 'center') ? A2(
			_user$project$MiniLatex_Render$div,
			{
				ctor: '::',
				_0: _user$project$MiniLatex_Render$imageCenterStyle(imageAttrs),
				_1: {ctor: '[]'}
			},
			{
				ctor: '::',
				_0: A2(_user$project$MiniLatex_Render$img, url, imageAttrs),
				_1: {
					ctor: '::',
					_0: '<br>',
					_1: {
						ctor: '::',
						_0: label,
						_1: {ctor: '[]'}
					}
				}
			}) : A2(
			_elm_lang$core$Basics_ops['++'],
			'<image src=\"',
			A2(
				_elm_lang$core$Basics_ops['++'],
				url,
				A2(
					_elm_lang$core$Basics_ops['++'],
					'\" ',
					A2(
						_elm_lang$core$Basics_ops['++'],
						A2(_user$project$MiniLatex_Render$imageAttributes, imageAttrs, attributeString),
						' >'))))));
	});
var _user$project$MiniLatex_Render$renderImageRef = F2(
	function (latexState, args) {
		var attributeString = A3(_user$project$MiniLatex_Render$renderArg, 2, latexState, args);
		var imageAttrs = _user$project$MiniLatex_Render$parseImageAttributes(attributeString);
		var imageUrl = A3(_user$project$MiniLatex_Render$renderArg, 1, latexState, args);
		var url = A3(_user$project$MiniLatex_Render$renderArg, 0, latexState, args);
		return _elm_lang$core$Native_Utils.eq(imageAttrs.$float, 'left') ? A2(
			_user$project$MiniLatex_Render$a,
			url,
			A2(
				_user$project$MiniLatex_Render$div,
				{
					ctor: '::',
					_0: _user$project$MiniLatex_Render$imageFloatLeftStyle(imageAttrs),
					_1: {ctor: '[]'}
				},
				{
					ctor: '::',
					_0: A2(_user$project$MiniLatex_Render$img, imageUrl, imageAttrs),
					_1: {ctor: '[]'}
				})) : (_elm_lang$core$Native_Utils.eq(imageAttrs.$float, 'right') ? A2(
			_user$project$MiniLatex_Render$a,
			url,
			A2(
				_user$project$MiniLatex_Render$div,
				{
					ctor: '::',
					_0: _user$project$MiniLatex_Render$imageFloatRightStyle(imageAttrs),
					_1: {ctor: '[]'}
				},
				{
					ctor: '::',
					_0: A2(_user$project$MiniLatex_Render$img, imageUrl, imageAttrs),
					_1: {ctor: '[]'}
				})) : (_elm_lang$core$Native_Utils.eq(imageAttrs.align, 'center') ? A2(
			_user$project$MiniLatex_Render$a,
			url,
			A2(
				_user$project$MiniLatex_Render$div,
				{
					ctor: '::',
					_0: _user$project$MiniLatex_Render$imageCenterStyle(imageAttrs),
					_1: {ctor: '[]'}
				},
				{
					ctor: '::',
					_0: A2(_user$project$MiniLatex_Render$img, imageUrl, imageAttrs),
					_1: {ctor: '[]'}
				})) : A2(
			_user$project$MiniLatex_Render$a,
			url,
			A2(
				_user$project$MiniLatex_Render$div,
				{
					ctor: '::',
					_0: _user$project$MiniLatex_Render$imageCenterStyle(imageAttrs),
					_1: {ctor: '[]'}
				},
				{
					ctor: '::',
					_0: A2(_user$project$MiniLatex_Render$img, imageUrl, imageAttrs),
					_1: {ctor: '[]'}
				}))));
	});
var _user$project$MiniLatex_Render$renderItalic = F2(
	function (latexState, args) {
		return A2(
			_elm_lang$core$Basics_ops['++'],
			' <span class=italic>',
			A2(
				_elm_lang$core$Basics_ops['++'],
				A3(_user$project$MiniLatex_Render$renderArg, 0, latexState, args),
				'</span>'));
	});
var _user$project$MiniLatex_Render$renderNewCommand = F2(
	function (latexState, args) {
		var definition = A3(_user$project$MiniLatex_Render$renderArg, 1, latexState, args);
		var command = A3(_user$project$MiniLatex_Render$renderArg, 0, latexState, args);
		return A2(
			_elm_lang$core$Basics_ops['++'],
			'\\newcommand{',
			A2(
				_elm_lang$core$Basics_ops['++'],
				command,
				A2(
					_elm_lang$core$Basics_ops['++'],
					'}{',
					A2(_elm_lang$core$Basics_ops['++'], definition, '}'))));
	});
var _user$project$MiniLatex_Render$renderRef = F2(
	function (latexState, args) {
		var key = A3(_user$project$MiniLatex_Render$renderArg, 0, latexState, args);
		return A2(_user$project$MiniLatex_LatexState$getCrossReference, key, latexState);
	});
var _user$project$MiniLatex_Render$renderSection = F2(
	function (latexState, args) {
		var s1 = A2(_user$project$MiniLatex_LatexState$getCounter, 's1', latexState);
		var label = (_elm_lang$core$Native_Utils.cmp(s1, 0) > 0) ? A2(
			_elm_lang$core$Basics_ops['++'],
			_elm_lang$core$Basics$toString(s1),
			' ') : '';
		var sectionName = A3(_user$project$MiniLatex_Render$renderArg, 0, latexState, args);
		return A3(
			_user$project$MiniLatex_Render$tag,
			'h2',
			A2(_user$project$MiniLatex_Render$idPhrase, 'section', sectionName),
			A2(_elm_lang$core$Basics_ops['++'], label, sectionName));
	});
var _user$project$MiniLatex_Render$renderSectionStar = F2(
	function (latexState, args) {
		var sectionName = A3(_user$project$MiniLatex_Render$renderArg, 0, latexState, args);
		return A3(
			_user$project$MiniLatex_Render$tag,
			'h2',
			A2(_user$project$MiniLatex_Render$idPhrase, 'section', sectionName),
			sectionName);
	});
var _user$project$MiniLatex_Render$renderStrong = F2(
	function (latexState, args) {
		return A2(
			_elm_lang$core$Basics_ops['++'],
			' <span class=\"strong\">',
			A2(
				_elm_lang$core$Basics_ops['++'],
				A3(_user$project$MiniLatex_Render$renderArg, 0, latexState, args),
				'</span> '));
	});
var _user$project$MiniLatex_Render$renderSubSubsection = F2(
	function (latexState, args) {
		var s3 = A2(_user$project$MiniLatex_LatexState$getCounter, 's3', latexState);
		var s2 = A2(_user$project$MiniLatex_LatexState$getCounter, 's2', latexState);
		var s1 = A2(_user$project$MiniLatex_LatexState$getCounter, 's1', latexState);
		var label = (_elm_lang$core$Native_Utils.cmp(s1, 0) > 0) ? A2(
			_elm_lang$core$Basics_ops['++'],
			_elm_lang$core$Basics$toString(s1),
			A2(
				_elm_lang$core$Basics_ops['++'],
				'.',
				A2(
					_elm_lang$core$Basics_ops['++'],
					_elm_lang$core$Basics$toString(s2),
					A2(
						_elm_lang$core$Basics_ops['++'],
						'.',
						A2(
							_elm_lang$core$Basics_ops['++'],
							_elm_lang$core$Basics$toString(s3),
							' '))))) : '';
		var sectionName = A3(_user$project$MiniLatex_Render$renderArg, 0, latexState, args);
		return A3(
			_user$project$MiniLatex_Render$tag,
			'h4',
			A2(_user$project$MiniLatex_Render$idPhrase, 'subsubsection', sectionName),
			A2(_elm_lang$core$Basics_ops['++'], label, sectionName));
	});
var _user$project$MiniLatex_Render$renderSubSubsectionStar = F2(
	function (latexState, args) {
		var sectionName = A3(_user$project$MiniLatex_Render$renderArg, 0, latexState, args);
		return A3(
			_user$project$MiniLatex_Render$tag,
			'h4',
			A2(_user$project$MiniLatex_Render$idPhrase, 'subsubsection', sectionName),
			sectionName);
	});
var _user$project$MiniLatex_Render$renderSubheading = F2(
	function (latexState, args) {
		return A2(
			_elm_lang$core$Basics_ops['++'],
			'<div class=\"subheading\">',
			A2(
				_elm_lang$core$Basics_ops['++'],
				A3(_user$project$MiniLatex_Render$renderArg, 0, latexState, args),
				'</div>'));
	});
var _user$project$MiniLatex_Render$renderSubsection = F2(
	function (latexState, args) {
		var s2 = A2(_user$project$MiniLatex_LatexState$getCounter, 's2', latexState);
		var s1 = A2(_user$project$MiniLatex_LatexState$getCounter, 's1', latexState);
		var label = (_elm_lang$core$Native_Utils.cmp(s1, 0) > 0) ? A2(
			_elm_lang$core$Basics_ops['++'],
			_elm_lang$core$Basics$toString(s1),
			A2(
				_elm_lang$core$Basics_ops['++'],
				'.',
				A2(
					_elm_lang$core$Basics_ops['++'],
					_elm_lang$core$Basics$toString(s2),
					' '))) : '';
		var sectionName = A3(_user$project$MiniLatex_Render$renderArg, 0, latexState, args);
		return A3(
			_user$project$MiniLatex_Render$tag,
			'h3',
			A2(_user$project$MiniLatex_Render$idPhrase, 'subsection', sectionName),
			A2(_elm_lang$core$Basics_ops['++'], label, sectionName));
	});
var _user$project$MiniLatex_Render$renderSubsectionStar = F2(
	function (latexState, args) {
		var sectionName = A3(_user$project$MiniLatex_Render$renderArg, 0, latexState, args);
		return A3(
			_user$project$MiniLatex_Render$tag,
			'h3',
			A2(_user$project$MiniLatex_Render$idPhrase, 'subsection', sectionName),
			sectionName);
	});
var _user$project$MiniLatex_Render$renderTerm = F2(
	function (latexState, args) {
		var arg = A3(_user$project$MiniLatex_Render$renderArg, 0, latexState, args);
		return A2(
			_elm_lang$core$Basics_ops['++'],
			' <span class=italic>',
			A2(_elm_lang$core$Basics_ops['++'], arg, '</span>'));
	});
var _user$project$MiniLatex_Render$renderXLink = F2(
	function (latexState, args) {
		var label = A3(_user$project$MiniLatex_Render$renderArg, 1, latexState, args);
		var id = A3(_user$project$MiniLatex_Render$renderArg, 0, latexState, args);
		return A2(
			_elm_lang$core$Basics_ops['++'],
			' <a href=\"',
			A2(
				_elm_lang$core$Basics_ops['++'],
				_user$project$MiniLatex_Configuration$client,
				A2(
					_elm_lang$core$Basics_ops['++'],
					'##document/',
					A2(
						_elm_lang$core$Basics_ops['++'],
						id,
						A2(
							_elm_lang$core$Basics_ops['++'],
							'\">',
							A2(_elm_lang$core$Basics_ops['++'], label, '</a>'))))));
	});
var _user$project$MiniLatex_Render$renderXLinkPublic = F2(
	function (latexState, args) {
		var label = A3(_user$project$MiniLatex_Render$renderArg, 1, latexState, args);
		var id = A3(_user$project$MiniLatex_Render$renderArg, 0, latexState, args);
		return A2(
			_elm_lang$core$Basics_ops['++'],
			' <a href=\"',
			A2(
				_elm_lang$core$Basics_ops['++'],
				_user$project$MiniLatex_Configuration$client,
				A2(
					_elm_lang$core$Basics_ops['++'],
					'##public/',
					A2(
						_elm_lang$core$Basics_ops['++'],
						id,
						A2(
							_elm_lang$core$Basics_ops['++'],
							'\">',
							A2(_elm_lang$core$Basics_ops['++'], label, '</a>'))))));
	});
var _user$project$MiniLatex_Render$reproduceMacro = F3(
	function (name, latexState, args) {
		return A2(
			_elm_lang$core$Basics_ops['++'],
			'\\',
			A2(
				_elm_lang$core$Basics_ops['++'],
				name,
				A2(_user$project$MiniLatex_Render$renderArgList, _user$project$MiniLatex_LatexState$emptyLatexState, args)));
	});
var _user$project$MiniLatex_Render$renderArgList = F2(
	function (latexState, args) {
		return A2(
			_elm_lang$core$String$join,
			'',
			A2(
				_elm_lang$core$List$map,
				function (x) {
					return A2(
						_elm_lang$core$Basics_ops['++'],
						'{',
						A2(_elm_lang$core$Basics_ops['++'], x, '}'));
				},
				A2(
					_elm_lang$core$List$map,
					_user$project$MiniLatex_Render$render(latexState),
					args)));
	});
var _user$project$MiniLatex_Render$renderString = F3(
	function (parser, latexState, str) {
		var parserOutput = A2(_elm_tools$parser$Parser$run, parser, str);
		var renderOutput = function () {
			var _p12 = parserOutput;
			if (_p12.ctor === 'Ok') {
				return A2(_user$project$MiniLatex_Render$render, latexState, _p12._0);
			} else {
				return A2(
					_elm_lang$core$Basics_ops['++'],
					'Error: ',
					_elm_lang$core$Basics$toString(_p12._0));
			}
		}();
		return renderOutput;
	});
var _user$project$MiniLatex_Render$transformText = F2(
	function (latexState, text) {
		return A3(_user$project$MiniLatex_Render$renderString, _user$project$MiniLatex_Parser$latexList, latexState, text);
	});

var _user$project$MiniLatex_Accumulator$getLabel = function (str) {
	var maybeMacro = A2(
		_elm_tools$parser$Parser$run,
		_user$project$MiniLatex_Parser$macro(_user$project$MiniLatex_Parser$ws),
		_elm_lang$core$String$trim(str));
	var _p0 = maybeMacro;
	if (_p0.ctor === 'Ok') {
		return A2(_user$project$MiniLatex_ParserTools$getFirstMacroArg, 'label', _p0._0);
	} else {
		return '';
	}
};
var _user$project$MiniLatex_Accumulator$getElement = F2(
	function (k, list) {
		var lxString = A2(
			_elm_lang$core$Maybe$withDefault,
			_user$project$MiniLatex_Parser$LXString('xxx'),
			A2(_elm_community$list_extra$List_Extra$getAt, k, list));
		var _p1 = lxString;
		if (_p1.ctor === 'LXString') {
			return _p1._0;
		} else {
			return 'yyy';
		}
	});
var _user$project$MiniLatex_Accumulator$getAt = F2(
	function (k, list_) {
		return A2(
			_elm_lang$core$Maybe$withDefault,
			'xxx',
			A2(_elm_community$list_extra$List_Extra$getAt, k, list_));
	});
var _user$project$MiniLatex_Accumulator$handleTheoremNumbers = F2(
	function (latexState, info) {
		var latexState1 = A2(_user$project$MiniLatex_LatexState$incrementCounter, 'tno', latexState);
		var tno = A2(_user$project$MiniLatex_LatexState$getCounter, 'tno', latexState1);
		var s1 = A2(_user$project$MiniLatex_LatexState$getCounter, 's1', latexState1);
		var label = A2(
			_user$project$MiniLatex_ParserTools$getFirstMacroArg,
			'label',
			A2(
				_elm_lang$core$Maybe$withDefault,
				A2(
					_user$project$MiniLatex_Parser$Macro,
					'NULL',
					{ctor: '[]'}),
				_elm_lang$core$List$head(info.value)));
		var latexState2 = (!_elm_lang$core$Native_Utils.eq(label, '')) ? A3(
			_user$project$MiniLatex_LatexState$setCrossReference,
			label,
			A2(
				_elm_lang$core$Basics_ops['++'],
				_elm_lang$core$Basics$toString(s1),
				A2(
					_elm_lang$core$Basics_ops['++'],
					'.',
					_elm_lang$core$Basics$toString(tno))),
			latexState1) : latexState1;
		return latexState2;
	});
var _user$project$MiniLatex_Accumulator$handleEquationNumbers = F2(
	function (latexState, info) {
		var latexState1 = A2(_user$project$MiniLatex_LatexState$incrementCounter, 'eqno', latexState);
		var eqno = A2(_user$project$MiniLatex_LatexState$getCounter, 'eqno', latexState1);
		var s1 = A2(_user$project$MiniLatex_LatexState$getCounter, 's1', latexState1);
		var data = A2(
			_elm_lang$core$Maybe$withDefault,
			A2(
				_user$project$MiniLatex_Parser$Macro,
				'NULL',
				{ctor: '[]'}),
			_elm_lang$core$List$head(info.value));
		var label = function () {
			var _p2 = data;
			if (_p2.ctor === 'LXString') {
				return _user$project$MiniLatex_Accumulator$getLabel(_p2._0);
			} else {
				return '';
			}
		}();
		var latexState2 = (!_elm_lang$core$Native_Utils.eq(label, '')) ? A3(
			_user$project$MiniLatex_LatexState$setCrossReference,
			label,
			A2(
				_elm_lang$core$Basics_ops['++'],
				_elm_lang$core$Basics$toString(s1),
				A2(
					_elm_lang$core$Basics_ops['++'],
					'.',
					_elm_lang$core$Basics$toString(eqno))),
			latexState1) : latexState1;
		return latexState2;
	});
var _user$project$MiniLatex_Accumulator$updateSection = F2(
	function (latexState, paragraph) {
		var s3 = A2(_user$project$MiniLatex_LatexState$getCounter, 's3', latexState);
		var s2 = A2(_user$project$MiniLatex_LatexState$getCounter, 's2', latexState);
		var s1 = A2(_user$project$MiniLatex_LatexState$getCounter, 's1', latexState);
		return A2(_elm_lang$core$String$contains, '\\section', paragraph) ? A3(
			_elm_community$string_extra$String_Extra$replace,
			'\\section{',
			A2(
				_elm_lang$core$Basics_ops['++'],
				'\\section{',
				A2(
					_elm_lang$core$Basics_ops['++'],
					_elm_lang$core$Basics$toString(s1 + 1),
					' ')),
			paragraph) : (A2(_elm_lang$core$String$contains, '\\subsection', paragraph) ? A3(
			_elm_community$string_extra$String_Extra$replace,
			'\\subsection{',
			A2(
				_elm_lang$core$Basics_ops['++'],
				'\\subsection{',
				A2(
					_elm_lang$core$Basics_ops['++'],
					_elm_lang$core$Basics$toString(s1),
					A2(
						_elm_lang$core$Basics_ops['++'],
						'.',
						A2(
							_elm_lang$core$Basics_ops['++'],
							_elm_lang$core$Basics$toString(s2 + 1),
							' ')))),
			paragraph) : (A2(_elm_lang$core$String$contains, '\\subsubsection', paragraph) ? A3(
			_elm_community$string_extra$String_Extra$replace,
			'\\subsubsection{',
			A2(
				_elm_lang$core$Basics_ops['++'],
				'\\subsubsection{',
				A2(
					_elm_lang$core$Basics_ops['++'],
					_elm_lang$core$Basics$toString(s1),
					A2(
						_elm_lang$core$Basics_ops['++'],
						'.',
						A2(
							_elm_lang$core$Basics_ops['++'],
							_elm_lang$core$Basics$toString(s2),
							A2(
								_elm_lang$core$Basics_ops['++'],
								'.',
								A2(
									_elm_lang$core$Basics_ops['++'],
									_elm_lang$core$Basics$toString(s3 + 1),
									' ')))))),
			paragraph) : paragraph));
	});
var _user$project$MiniLatex_Accumulator$setDictionaryItemForMacro = F3(
	function (macroname, headElement, latexState) {
		var value = _user$project$MiniLatex_ParserTools$unpackString(headElement.value);
		return A3(_user$project$MiniLatex_LatexState$setDictionaryItem, macroname, value, latexState);
	});
var _user$project$MiniLatex_Accumulator$info = function (latexExpression) {
	var _p3 = latexExpression;
	switch (_p3.ctor) {
		case 'Macro':
			return {typ: 'macro', name: _p3._0, value: _p3._1};
		case 'Environment':
			return {
				typ: 'env',
				name: _p3._0,
				value: {
					ctor: '::',
					_0: _p3._1,
					_1: {ctor: '[]'}
				}
			};
		default:
			return {
				typ: 'null',
				name: 'null',
				value: {ctor: '[]'}
			};
	}
};
var _user$project$MiniLatex_Accumulator$renderTransformer = F4(
	function (render, updateState, input, acc) {
		var _p4 = acc;
		var outputList = _p4._0;
		var state = _p4._1;
		var newState = A2(updateState, input, state);
		var renderedInput = A2(render, newState, input);
		return {
			ctor: '_Tuple2',
			_0: A2(
				_elm_lang$core$Basics_ops['++'],
				outputList,
				{
					ctor: '::',
					_0: renderedInput,
					_1: {ctor: '[]'}
				}),
			_1: newState
		};
	});
var _user$project$MiniLatex_Accumulator$renderAccumulator = F4(
	function (render, updateState, latexState, inputList) {
		return A3(
			_elm_lang$core$List$foldl,
			A2(_user$project$MiniLatex_Accumulator$renderTransformer, render, updateState),
			{
				ctor: '_Tuple2',
				_0: {ctor: '[]'},
				_1: latexState
			},
			inputList);
	});
var _user$project$MiniLatex_Accumulator$parseTransformer = F4(
	function (parse, updateState, input, acc) {
		var parsedInput = parse(input);
		var _p5 = acc;
		var outputList = _p5._0;
		var state = _p5._1;
		var newState = A2(updateState, parsedInput, state);
		return {
			ctor: '_Tuple2',
			_0: A2(
				_elm_lang$core$Basics_ops['++'],
				outputList,
				{
					ctor: '::',
					_0: parsedInput,
					_1: {ctor: '[]'}
				}),
			_1: newState
		};
	});
var _user$project$MiniLatex_Accumulator$parseAccumulator = F4(
	function (parse, updateState, latexState, inputList) {
		return A3(
			_elm_lang$core$List$foldl,
			A2(_user$project$MiniLatex_Accumulator$parseTransformer, parse, updateState),
			{
				ctor: '_Tuple2',
				_0: {ctor: '[]'},
				_1: latexState
			},
			inputList);
	});
var _user$project$MiniLatex_Accumulator$LatexInfo = F3(
	function (a, b, c) {
		return {typ: a, name: b, value: c};
	});
var _user$project$MiniLatex_Accumulator$updateState = F2(
	function (parsedParagraph, latexState) {
		var he = {
			typ: 'macro',
			name: 'setcounter',
			value: {
				ctor: '::',
				_0: _user$project$MiniLatex_Parser$LatexList(
					{
						ctor: '::',
						_0: _user$project$MiniLatex_Parser$LXString('section'),
						_1: {ctor: '[]'}
					}),
				_1: {
					ctor: '::',
					_0: _user$project$MiniLatex_Parser$LatexList(
						{
							ctor: '::',
							_0: _user$project$MiniLatex_Parser$LXString('7'),
							_1: {ctor: '[]'}
						}),
					_1: {ctor: '[]'}
				}
			}
		};
		var headElement = A2(
			_elm_lang$core$Maybe$withDefault,
			A3(
				_user$project$MiniLatex_Accumulator$LatexInfo,
				'null',
				'null',
				{
					ctor: '::',
					_0: A2(
						_user$project$MiniLatex_Parser$Macro,
						'null',
						{ctor: '[]'}),
					_1: {ctor: '[]'}
				}),
			A2(
				_elm_lang$core$Maybe$map,
				_user$project$MiniLatex_Accumulator$info,
				_elm_lang$core$List$head(parsedParagraph)));
		var newLatexState = function () {
			var _p6 = {ctor: '_Tuple2', _0: headElement.typ, _1: headElement.name};
			_v4_16:
			do {
				if (_p6.ctor === '_Tuple2') {
					switch (_p6._0) {
						case 'macro':
							switch (_p6._1) {
								case 'setcounter':
									var argList = A2(
										_elm_lang$core$List$map,
										_user$project$MiniLatex_ParserTools$list2LeadingString,
										A2(_elm_lang$core$List$map, _user$project$MiniLatex_ParserTools$latexList2List, headElement.value));
									var arg1 = A2(_user$project$MiniLatex_Accumulator$getAt, 0, argList);
									var arg2 = A2(_user$project$MiniLatex_Accumulator$getAt, 1, argList);
									var initialSectionNumber = _elm_lang$core$Native_Utils.eq(arg1, 'section') ? A2(
										_elm_lang$core$Result$withDefault,
										0,
										_elm_lang$core$String$toInt(arg2)) : -1;
									return (_elm_lang$core$Native_Utils.cmp(initialSectionNumber, -1) > 0) ? A3(
										_user$project$MiniLatex_LatexState$updateCounter,
										's3',
										0,
										A3(
											_user$project$MiniLatex_LatexState$updateCounter,
											's2',
											0,
											A3(_user$project$MiniLatex_LatexState$updateCounter, 's1', initialSectionNumber - 1, latexState))) : latexState;
								case 'section':
									var label = _elm_lang$core$Basics$toString(
										function (x) {
											return x + 1;
										}(
											A2(_user$project$MiniLatex_LatexState$getCounter, 's1', latexState)));
									return A4(
										_user$project$MiniLatex_LatexState$addSection,
										_user$project$MiniLatex_ParserTools$unpackString(headElement.value),
										label,
										1,
										A3(
											_user$project$MiniLatex_LatexState$updateCounter,
											's3',
											0,
											A3(
												_user$project$MiniLatex_LatexState$updateCounter,
												's2',
												0,
												A2(_user$project$MiniLatex_LatexState$incrementCounter, 's1', latexState))));
								case 'subsection':
									var s2 = _elm_lang$core$Basics$toString(
										function (x) {
											return x + 1;
										}(
											A2(_user$project$MiniLatex_LatexState$getCounter, 's2', latexState)));
									var s1 = _elm_lang$core$Basics$toString(
										A2(_user$project$MiniLatex_LatexState$getCounter, 's1', latexState));
									var label = A2(
										_elm_lang$core$Basics_ops['++'],
										s1,
										A2(_elm_lang$core$Basics_ops['++'], '.', s2));
									return A4(
										_user$project$MiniLatex_LatexState$addSection,
										_user$project$MiniLatex_ParserTools$unpackString(headElement.value),
										label,
										2,
										A3(
											_user$project$MiniLatex_LatexState$updateCounter,
											's3',
											0,
											A2(_user$project$MiniLatex_LatexState$incrementCounter, 's2', latexState)));
								case 'subsubsection':
									var s3 = _elm_lang$core$Basics$toString(
										function (x) {
											return x + 1;
										}(
											A2(_user$project$MiniLatex_LatexState$getCounter, 's3', latexState)));
									var s2 = _elm_lang$core$Basics$toString(
										A2(_user$project$MiniLatex_LatexState$getCounter, 's2', latexState));
									var s1 = _elm_lang$core$Basics$toString(
										A2(_user$project$MiniLatex_LatexState$getCounter, 's1', latexState));
									var label = A2(
										_elm_lang$core$Basics_ops['++'],
										s1,
										A2(
											_elm_lang$core$Basics_ops['++'],
											'.',
											A2(
												_elm_lang$core$Basics_ops['++'],
												s2,
												A2(_elm_lang$core$Basics_ops['++'], '.', s3))));
									return A4(
										_user$project$MiniLatex_LatexState$addSection,
										_user$project$MiniLatex_ParserTools$unpackString(headElement.value),
										label,
										3,
										A2(_user$project$MiniLatex_LatexState$incrementCounter, 's3', latexState));
								case 'title':
									return A3(_user$project$MiniLatex_Accumulator$setDictionaryItemForMacro, 'title', headElement, latexState);
								case 'author':
									return A3(_user$project$MiniLatex_Accumulator$setDictionaryItemForMacro, 'author', headElement, latexState);
								case 'date':
									return A3(_user$project$MiniLatex_Accumulator$setDictionaryItemForMacro, 'date', headElement, latexState);
								case 'email':
									return A3(_user$project$MiniLatex_Accumulator$setDictionaryItemForMacro, 'email', headElement, latexState);
								case 'revision':
									return A3(_user$project$MiniLatex_Accumulator$setDictionaryItemForMacro, 'revision', headElement, latexState);
								default:
									break _v4_16;
							}
						case 'env':
							switch (_p6._1) {
								case 'theorem':
									return A2(_user$project$MiniLatex_Accumulator$handleTheoremNumbers, latexState, headElement);
								case 'proposition':
									return A2(_user$project$MiniLatex_Accumulator$handleTheoremNumbers, latexState, headElement);
								case 'lemma':
									return A2(_user$project$MiniLatex_Accumulator$handleTheoremNumbers, latexState, headElement);
								case 'definition':
									return A2(_user$project$MiniLatex_Accumulator$handleTheoremNumbers, latexState, headElement);
								case 'corollary':
									return A2(_user$project$MiniLatex_Accumulator$handleTheoremNumbers, latexState, headElement);
								case 'equation':
									return A2(_user$project$MiniLatex_Accumulator$handleEquationNumbers, latexState, headElement);
								case 'align':
									return A2(_user$project$MiniLatex_Accumulator$handleEquationNumbers, latexState, headElement);
								default:
									break _v4_16;
							}
						default:
							break _v4_16;
					}
				} else {
					break _v4_16;
				}
			} while(false);
			return latexState;
		}();
		return newLatexState;
	});
var _user$project$MiniLatex_Accumulator$parseParagraphs = F2(
	function (latexState, paragraphs) {
		return A4(_user$project$MiniLatex_Accumulator$parseAccumulator, _user$project$MiniLatex_Parser$parse, _user$project$MiniLatex_Accumulator$updateState, latexState, paragraphs);
	});
var _user$project$MiniLatex_Accumulator$renderParagraphs = F2(
	function (latexState, paragraphs) {
		return A4(_user$project$MiniLatex_Accumulator$renderAccumulator, _user$project$MiniLatex_Render$renderLatexList, _user$project$MiniLatex_Accumulator$updateState, latexState, paragraphs);
	});

var _user$project$MiniLatex_LatexDiffer$replaceStrings = function (text) {
	return A3(
		_elm_community$string_extra$String_Extra$replace,
		'--',
		'\\ndash{}',
		A3(_elm_community$string_extra$String_Extra$replace, '---', '\\mdash{}', text));
};
var _user$project$MiniLatex_LatexDiffer$prepareContentForLatex = function (content) {
	return _user$project$MiniLatex_LatexDiffer$replaceStrings(content);
};
var _user$project$MiniLatex_LatexDiffer$update = F3(
	function (seed, editorRecord, text) {
		return A4(
			_user$project$MiniLatex_Differ$update,
			seed,
			_user$project$MiniLatex_Render$transformText(editorRecord.latexState),
			editorRecord,
			_user$project$MiniLatex_LatexDiffer$prepareContentForLatex(text));
	});
var _user$project$MiniLatex_LatexDiffer$initialize = F2(
	function (latexState, text) {
		var paragraphs = _user$project$MiniLatex_Paragraph$logicalParagraphify(
			_user$project$MiniLatex_LatexDiffer$prepareContentForLatex(text));
		var _p0 = A2(_user$project$MiniLatex_Accumulator$parseParagraphs, _user$project$MiniLatex_LatexState$emptyLatexState, paragraphs);
		var latexExpressionList = _p0._0;
		var latexState1 = _p0._1;
		var latexState2 = _elm_lang$core$Native_Utils.update(
			_user$project$MiniLatex_LatexState$emptyLatexState,
			{crossReferences: latexState1.crossReferences, tableOfContents: latexState1.tableOfContents, dictionary: latexState1.dictionary});
		var _p1 = A2(_user$project$MiniLatex_Accumulator$renderParagraphs, latexState2, latexExpressionList);
		var renderedParagraphs = _p1._0;
		var latexState3 = _p1._1;
		var renderedParagraphs2 = renderedParagraphs;
		var n = _elm_lang$core$List$length(paragraphs);
		var idList = A2(
			_elm_lang$core$List$map,
			_user$project$MiniLatex_Differ$prefixer(0),
			A2(_elm_lang$core$List$range, 1, n));
		return A6(_user$project$MiniLatex_Differ$EditRecord, paragraphs, renderedParagraphs2, latexState2, idList, _elm_lang$core$Maybe$Nothing, _elm_lang$core$Maybe$Nothing);
	});
var _user$project$MiniLatex_LatexDiffer$safeUpdate = F3(
	function (seed, editRecord, content) {
		return _user$project$MiniLatex_Differ$isEmpty(editRecord) ? A2(_user$project$MiniLatex_LatexDiffer$initialize, _user$project$MiniLatex_LatexState$emptyLatexState, content) : A3(_user$project$MiniLatex_LatexDiffer$update, seed, editRecord, content);
	});

var _user$project$MiniLatex_Driver$update = F3(
	function (seed, editRecord, text) {
		return A3(_user$project$MiniLatex_LatexDiffer$safeUpdate, seed, editRecord, text);
	});
var _user$project$MiniLatex_Driver$emptyEditRecord = _user$project$MiniLatex_Differ$emptyEditRecord;
var _user$project$MiniLatex_Driver$setup = F2(
	function (seed, text) {
		return A3(_user$project$MiniLatex_LatexDiffer$safeUpdate, seed, _user$project$MiniLatex_Differ$emptyEditRecord, text);
	});
var _user$project$MiniLatex_Driver$getRenderedText2 = F2(
	function (macroDefinitions, editRecord) {
		var paragraphs = editRecord.renderedParagraphs;
		return function (x) {
			return A2(
				_elm_lang$core$Basics_ops['++'],
				macroDefinitions,
				A2(_elm_lang$core$Basics_ops['++'], '\n\n', x));
		}(
			A2(
				_elm_lang$core$String$join,
				'\n\n',
				A2(
					_elm_lang$core$List$map,
					function (para) {
						return A2(
							_elm_lang$core$Basics_ops['++'],
							'<p>\n',
							A2(_elm_lang$core$Basics_ops['++'], para, '\n</p>'));
					},
					paragraphs)));
	});
var _user$project$MiniLatex_Driver$pTags = function (editRecord) {
	return A2(
		_elm_lang$core$List$map,
		function (x) {
			return A2(
				_elm_lang$core$Basics_ops['++'],
				'<p id=\"',
				A2(_elm_lang$core$Basics_ops['++'], x, '\">'));
		},
		editRecord.idList);
};
var _user$project$MiniLatex_Driver$getRenderedText = F2(
	function (macroDefinitions, editRecord) {
		var pTagList = _user$project$MiniLatex_Driver$pTags(editRecord);
		var paragraphs = editRecord.renderedParagraphs;
		return function (x) {
			return A2(
				_elm_lang$core$Basics_ops['++'],
				x,
				A2(_elm_lang$core$Basics_ops['++'], '\n\n', macroDefinitions));
		}(
			A2(
				_elm_lang$core$String$join,
				'\n\n',
				A3(
					_elm_lang$core$List$map2,
					F2(
						function (para, pTag) {
							return A2(
								_elm_lang$core$Basics_ops['++'],
								pTag,
								A2(
									_elm_lang$core$Basics_ops['++'],
									'\n',
									A2(_elm_lang$core$Basics_ops['++'], para, '\n</p>')));
						}),
					paragraphs,
					pTagList)));
	});
var _user$project$MiniLatex_Driver$parse = function (text) {
	return A2(
		_elm_lang$core$List$map,
		_user$project$MiniLatex_Parser$parse,
		_user$project$MiniLatex_Paragraph$logicalParagraphify(
			_user$project$MiniLatex_LatexDiffer$prepareContentForLatex(text)));
};
var _user$project$MiniLatex_Driver$render = F2(
	function (macroDefinitions, text) {
		return A2(
			_user$project$MiniLatex_Driver$getRenderedText,
			macroDefinitions,
			A2(_user$project$MiniLatex_LatexDiffer$initialize, _user$project$MiniLatex_LatexState$emptyLatexState, text));
	});

var _user$project$App_View$textStyle2 = F4(
	function (width, height, offset, color) {
		return _elm_lang$html$Html_Attributes$style(
			{
				ctor: '::',
				_0: {ctor: '_Tuple2', _0: 'width', _1: width},
				_1: {
					ctor: '::',
					_0: {ctor: '_Tuple2', _0: 'height', _1: height},
					_1: {
						ctor: '::',
						_0: {ctor: '_Tuple2', _0: 'padding', _1: '15px'},
						_1: {
							ctor: '::',
							_0: {ctor: '_Tuple2', _0: 'margin-top', _1: '0'},
							_1: {
								ctor: '::',
								_0: {ctor: '_Tuple2', _0: 'margin-left', _1: offset},
								_1: {
									ctor: '::',
									_0: {ctor: '_Tuple2', _0: 'background-color', _1: color},
									_1: {
										ctor: '::',
										_0: {ctor: '_Tuple2', _0: 'overflow', _1: 'scroll'},
										_1: {ctor: '[]'}
									}
								}
							}
						}
					}
				}
			});
	});
var _user$project$App_View$textStyle = F4(
	function (width, height, offset, color) {
		return _elm_lang$html$Html_Attributes$style(
			{
				ctor: '::',
				_0: {ctor: '_Tuple2', _0: 'width', _1: width},
				_1: {
					ctor: '::',
					_0: {ctor: '_Tuple2', _0: 'height', _1: height},
					_1: {
						ctor: '::',
						_0: {ctor: '_Tuple2', _0: 'padding', _1: '15px'},
						_1: {
							ctor: '::',
							_0: {ctor: '_Tuple2', _0: 'margin-left', _1: offset},
							_1: {
								ctor: '::',
								_0: {ctor: '_Tuple2', _0: 'background-color', _1: color},
								_1: {
									ctor: '::',
									_0: {ctor: '_Tuple2', _0: 'overflow', _1: 'scroll'},
									_1: {ctor: '[]'}
								}
							}
						}
					}
				}
			});
	});
var _user$project$App_View$parseResultsStyle = A4(_user$project$App_View$textStyle2, '400px', '600px', '20px', '#eee');
var _user$project$App_View$renderedSourceStyle = A4(_user$project$App_View$textStyle, '400px', '600px', '20px', '#eee');
var _user$project$App_View$editorStyle = A4(_user$project$App_View$textStyle, '400px', '635px', '20px', '#eef');
var _user$project$App_View$labelStyle = _elm_lang$html$Html_Attributes$style(
	{
		ctor: '::',
		_0: {ctor: '_Tuple2', _0: 'margin-top', _1: '5px'},
		_1: {
			ctor: '::',
			_0: {ctor: '_Tuple2', _0: 'margin-bottom', _1: '0px'},
			_1: {
				ctor: '::',
				_0: {ctor: '_Tuple2', _0: 'margin-left', _1: '20px'},
				_1: {
					ctor: '::',
					_0: {ctor: '_Tuple2', _0: 'font-style', _1: 'bold'},
					_1: {
						ctor: '::',
						_0: {ctor: '_Tuple2', _0: 'background-color', _1: '#444'},
						_1: {
							ctor: '::',
							_0: {ctor: '_Tuple2', _0: 'color', _1: '#ddd'},
							_1: {
								ctor: '::',
								_0: {ctor: '_Tuple2', _0: 'width', _1: '90px'},
								_1: {ctor: '[]'}
							}
						}
					}
				}
			}
		}
	});
var _user$project$App_View$buttonStyle = F2(
	function (color, width) {
		var realWidth = function (x) {
			return A2(_elm_lang$core$Basics_ops['++'], x, 'px');
		}(
			_elm_lang$core$Basics$toString(width + 0));
		return _elm_lang$html$Html_Attributes$style(
			{
				ctor: '::',
				_0: {ctor: '_Tuple2', _0: 'backgroundColor', _1: color},
				_1: {
					ctor: '::',
					_0: {ctor: '_Tuple2', _0: 'color', _1: 'white'},
					_1: {
						ctor: '::',
						_0: {ctor: '_Tuple2', _0: 'width', _1: realWidth},
						_1: {
							ctor: '::',
							_0: {ctor: '_Tuple2', _0: 'height', _1: '25px'},
							_1: {
								ctor: '::',
								_0: {ctor: '_Tuple2', _0: 'margin-right', _1: '8px'},
								_1: {
									ctor: '::',
									_0: {ctor: '_Tuple2', _0: 'font-size', _1: '9pt'},
									_1: {
										ctor: '::',
										_0: {ctor: '_Tuple2', _0: 'text-align', _1: 'center'},
										_1: {
											ctor: '::',
											_0: {ctor: '_Tuple2', _0: 'border', _1: 'none'},
											_1: {ctor: '[]'}
										}
									}
								}
							}
						}
					}
				}
			});
	});
var _user$project$App_View$colorDark = '#444';
var _user$project$App_View$colorLight = '#88a';
var _user$project$App_View$colorBlue = 'rgb(100,100,200)';
var _user$project$App_View$ribbonStyle = function (color) {
	return _elm_lang$html$Html_Attributes$style(
		{
			ctor: '::',
			_0: {ctor: '_Tuple2', _0: 'width', _1: '840px'},
			_1: {
				ctor: '::',
				_0: {ctor: '_Tuple2', _0: 'height', _1: '20px'},
				_1: {
					ctor: '::',
					_0: {ctor: '_Tuple2', _0: 'margin-left', _1: '20px'},
					_1: {
						ctor: '::',
						_0: {ctor: '_Tuple2', _0: 'margin-bottom', _1: '-16px'},
						_1: {
							ctor: '::',
							_0: {ctor: '_Tuple2', _0: 'padding', _1: '8px'},
							_1: {
								ctor: '::',
								_0: {ctor: '_Tuple2', _0: 'clear', _1: 'left'},
								_1: {
									ctor: '::',
									_0: {ctor: '_Tuple2', _0: 'background-color', _1: color},
									_1: {
										ctor: '::',
										_0: {ctor: '_Tuple2', _0: 'color', _1: '#eee'},
										_1: {ctor: '[]'}
									}
								}
							}
						}
					}
				}
			}
		});
};
var _user$project$App_View$label = function (text_) {
	return A2(
		_elm_lang$html$Html$p,
		{
			ctor: '::',
			_0: _user$project$App_View$labelStyle,
			_1: {ctor: '[]'}
		},
		{
			ctor: '::',
			_0: _elm_lang$html$Html$text(text_),
			_1: {ctor: '[]'}
		});
};
var _user$project$App_View$spacer = function (n) {
	return A2(
		_elm_lang$html$Html$div,
		{
			ctor: '::',
			_0: _elm_lang$html$Html_Attributes$style(
				{
					ctor: '::',
					_0: {
						ctor: '_Tuple2',
						_0: 'height',
						_1: A2(
							_elm_lang$core$Basics_ops['++'],
							_elm_lang$core$Basics$toString(n),
							'px')
					},
					_1: {
						ctor: '::',
						_0: {ctor: '_Tuple2', _0: 'clear', _1: 'left'},
						_1: {ctor: '[]'}
					}
				}),
			_1: {ctor: '[]'}
		},
		{ctor: '[]'});
};
var _user$project$App_View$viewLabel = F2(
	function (text_, width) {
		return A2(
			_elm_lang$html$Html$button,
			{
				ctor: '::',
				_0: A2(_user$project$App_View$buttonStyle, _user$project$App_View$colorDark, width),
				_1: {ctor: '[]'}
			},
			{
				ctor: '::',
				_0: _elm_lang$html$Html$text(text_),
				_1: {ctor: '[]'}
			});
	});
var _user$project$App_View$optionaViewTitleButton = F2(
	function (model, width) {
		var _p0 = model.configuration;
		switch (_p0.ctor) {
			case 'StandardView':
				return A2(
					_elm_lang$html$Html$button,
					{
						ctor: '::',
						_0: A2(_user$project$App_View$buttonStyle, _user$project$App_View$colorDark, width),
						_1: {ctor: '[]'}
					},
					{
						ctor: '::',
						_0: _elm_lang$html$Html$text('Basic'),
						_1: {ctor: '[]'}
					});
			case 'ParseResultsView':
				return A2(
					_elm_lang$html$Html$button,
					{
						ctor: '::',
						_0: A2(_user$project$App_View$buttonStyle, _user$project$App_View$colorDark, width),
						_1: {ctor: '[]'}
					},
					{
						ctor: '::',
						_0: _elm_lang$html$Html$text('Parse results'),
						_1: {ctor: '[]'}
					});
			default:
				return A2(
					_elm_lang$html$Html$button,
					{
						ctor: '::',
						_0: A2(_user$project$App_View$buttonStyle, _user$project$App_View$colorDark, width),
						_1: {ctor: '[]'}
					},
					{
						ctor: '::',
						_0: _elm_lang$html$Html$text('Raw HTML'),
						_1: {ctor: '[]'}
					});
		}
	});
var _user$project$App_View$rawHtmlViewButton = F2(
	function (model, width) {
		return _elm_lang$core$Native_Utils.eq(model.configuration, _user$project$App_Types$RawHtmlView) ? A2(
			_elm_lang$html$Html$button,
			{
				ctor: '::',
				_0: _elm_lang$html$Html_Events$onClick(_user$project$App_Types$ShowRawHtmlView),
				_1: {
					ctor: '::',
					_0: A2(_user$project$App_View$buttonStyle, _user$project$App_View$colorBlue, width),
					_1: {ctor: '[]'}
				}
			},
			{
				ctor: '::',
				_0: _elm_lang$html$Html$text('Raw Html'),
				_1: {ctor: '[]'}
			}) : A2(
			_elm_lang$html$Html$button,
			{
				ctor: '::',
				_0: _elm_lang$html$Html_Events$onClick(_user$project$App_Types$ShowRawHtmlView),
				_1: {
					ctor: '::',
					_0: A2(_user$project$App_View$buttonStyle, _user$project$App_View$colorLight, width),
					_1: {ctor: '[]'}
				}
			},
			{
				ctor: '::',
				_0: _elm_lang$html$Html$text('Raw Html'),
				_1: {ctor: '[]'}
			});
	});
var _user$project$App_View$parseResultsViewButton = F2(
	function (model, width) {
		return _elm_lang$core$Native_Utils.eq(model.configuration, _user$project$App_Types$ParseResultsView) ? A2(
			_elm_lang$html$Html$button,
			{
				ctor: '::',
				_0: _elm_lang$html$Html_Events$onClick(_user$project$App_Types$ShowParseResultsView),
				_1: {
					ctor: '::',
					_0: A2(_user$project$App_View$buttonStyle, _user$project$App_View$colorBlue, width),
					_1: {ctor: '[]'}
				}
			},
			{
				ctor: '::',
				_0: _elm_lang$html$Html$text('Parse Results'),
				_1: {ctor: '[]'}
			}) : A2(
			_elm_lang$html$Html$button,
			{
				ctor: '::',
				_0: _elm_lang$html$Html_Events$onClick(_user$project$App_Types$ShowParseResultsView),
				_1: {
					ctor: '::',
					_0: A2(_user$project$App_View$buttonStyle, _user$project$App_View$colorLight, width),
					_1: {ctor: '[]'}
				}
			},
			{
				ctor: '::',
				_0: _elm_lang$html$Html$text('Parse Results'),
				_1: {ctor: '[]'}
			});
	});
var _user$project$App_View$standardViewButton = F2(
	function (model, width) {
		return _elm_lang$core$Native_Utils.eq(model.configuration, _user$project$App_Types$StandardView) ? A2(
			_elm_lang$html$Html$button,
			{
				ctor: '::',
				_0: _elm_lang$html$Html_Events$onClick(_user$project$App_Types$ShowStandardView),
				_1: {
					ctor: '::',
					_0: A2(_user$project$App_View$buttonStyle, _user$project$App_View$colorBlue, width),
					_1: {ctor: '[]'}
				}
			},
			{
				ctor: '::',
				_0: _elm_lang$html$Html$text('Basic View'),
				_1: {ctor: '[]'}
			}) : A2(
			_elm_lang$html$Html$button,
			{
				ctor: '::',
				_0: _elm_lang$html$Html_Events$onClick(_user$project$App_Types$ShowStandardView),
				_1: {
					ctor: '::',
					_0: A2(_user$project$App_View$buttonStyle, _user$project$App_View$colorLight, width),
					_1: {ctor: '[]'}
				}
			},
			{
				ctor: '::',
				_0: _elm_lang$html$Html$text('Basic View'),
				_1: {ctor: '[]'}
			});
	});
var _user$project$App_View$setVerticalViewButton = F2(
	function (model, width) {
		return _elm_lang$core$Native_Utils.eq(model.lineViewStyle, _user$project$App_Types$Vertical) ? A2(
			_elm_lang$html$Html$button,
			{
				ctor: '::',
				_0: _elm_lang$html$Html_Events$onClick(_user$project$App_Types$SetVerticalView),
				_1: {
					ctor: '::',
					_0: A2(_user$project$App_View$buttonStyle, _user$project$App_View$colorBlue, width),
					_1: {ctor: '[]'}
				}
			},
			{
				ctor: '::',
				_0: _elm_lang$html$Html$text('Vertical'),
				_1: {ctor: '[]'}
			}) : A2(
			_elm_lang$html$Html$button,
			{
				ctor: '::',
				_0: _elm_lang$html$Html_Events$onClick(_user$project$App_Types$SetVerticalView),
				_1: {
					ctor: '::',
					_0: A2(_user$project$App_View$buttonStyle, _user$project$App_View$colorLight, width),
					_1: {ctor: '[]'}
				}
			},
			{
				ctor: '::',
				_0: _elm_lang$html$Html$text('Vertical'),
				_1: {ctor: '[]'}
			});
	});
var _user$project$App_View$setHorizontalViewButton = F2(
	function (model, width) {
		return _elm_lang$core$Native_Utils.eq(model.lineViewStyle, _user$project$App_Types$Horizontal) ? A2(
			_elm_lang$html$Html$button,
			{
				ctor: '::',
				_0: _elm_lang$html$Html_Events$onClick(_user$project$App_Types$SetHorizontalView),
				_1: {
					ctor: '::',
					_0: A2(_user$project$App_View$buttonStyle, _user$project$App_View$colorBlue, width),
					_1: {ctor: '[]'}
				}
			},
			{
				ctor: '::',
				_0: _elm_lang$html$Html$text('Horizontal'),
				_1: {ctor: '[]'}
			}) : A2(
			_elm_lang$html$Html$button,
			{
				ctor: '::',
				_0: _elm_lang$html$Html_Events$onClick(_user$project$App_Types$SetHorizontalView),
				_1: {
					ctor: '::',
					_0: A2(_user$project$App_View$buttonStyle, _user$project$App_View$colorLight, width),
					_1: {ctor: '[]'}
				}
			},
			{
				ctor: '::',
				_0: _elm_lang$html$Html$text('Horizontal'),
				_1: {ctor: '[]'}
			});
	});
var _user$project$App_View$mathPaperButton = function (width) {
	return A2(
		_elm_lang$html$Html$button,
		{
			ctor: '::',
			_0: _elm_lang$html$Html_Events$onClick(_user$project$App_Types$MathPaper),
			_1: {
				ctor: '::',
				_0: A2(_user$project$App_View$buttonStyle, _user$project$App_View$colorBlue, width),
				_1: {ctor: '[]'}
			}
		},
		{
			ctor: '::',
			_0: _elm_lang$html$Html$text('Math Paper'),
			_1: {ctor: '[]'}
		});
};
var _user$project$App_View$weatherAppButton = function (width) {
	return A2(
		_elm_lang$html$Html$button,
		{
			ctor: '::',
			_0: _elm_lang$html$Html_Events$onClick(_user$project$App_Types$WeatherApp),
			_1: {
				ctor: '::',
				_0: A2(_user$project$App_View$buttonStyle, _user$project$App_View$colorBlue, width),
				_1: {ctor: '[]'}
			}
		},
		{
			ctor: '::',
			_0: _elm_lang$html$Html$text('Weather App'),
			_1: {ctor: '[]'}
		});
};
var _user$project$App_View$wavePacketButton = function (width) {
	return A2(
		_elm_lang$html$Html$button,
		{
			ctor: '::',
			_0: _elm_lang$html$Html_Events$onClick(_user$project$App_Types$WavePackets),
			_1: {
				ctor: '::',
				_0: A2(_user$project$App_View$buttonStyle, _user$project$App_View$colorBlue, width),
				_1: {ctor: '[]'}
			}
		},
		{
			ctor: '::',
			_0: _elm_lang$html$Html$text('WavePacket'),
			_1: {ctor: '[]'}
		});
};
var _user$project$App_View$grammarButton = function (width) {
	return A2(
		_elm_lang$html$Html$button,
		{
			ctor: '::',
			_0: _elm_lang$html$Html_Events$onClick(_user$project$App_Types$Grammar),
			_1: {
				ctor: '::',
				_0: A2(_user$project$App_View$buttonStyle, _user$project$App_View$colorBlue, width),
				_1: {ctor: '[]'}
			}
		},
		{
			ctor: '::',
			_0: _elm_lang$html$Html$text('Grammar'),
			_1: {ctor: '[]'}
		});
};
var _user$project$App_View$techReportButton = function (width) {
	return A2(
		_elm_lang$html$Html$button,
		{
			ctor: '::',
			_0: _elm_lang$html$Html_Events$onClick(_user$project$App_Types$TechReport),
			_1: {
				ctor: '::',
				_0: A2(_user$project$App_View$buttonStyle, _user$project$App_View$colorBlue, width),
				_1: {ctor: '[]'}
			}
		},
		{
			ctor: '::',
			_0: _elm_lang$html$Html$text('Tech Report'),
			_1: {ctor: '[]'}
		});
};
var _user$project$App_View$restoreButton = function (width) {
	return A2(
		_elm_lang$html$Html$button,
		{
			ctor: '::',
			_0: _elm_lang$html$Html_Events$onClick(_user$project$App_Types$Restore),
			_1: {
				ctor: '::',
				_0: A2(_user$project$App_View$buttonStyle, _user$project$App_View$colorBlue, width),
				_1: {ctor: '[]'}
			}
		},
		{
			ctor: '::',
			_0: _elm_lang$html$Html$text('Restore'),
			_1: {ctor: '[]'}
		});
};
var _user$project$App_View$resetButton = function (width) {
	return A2(
		_elm_lang$html$Html$button,
		{
			ctor: '::',
			_0: _elm_lang$html$Html_Events$onClick(_user$project$App_Types$Reset),
			_1: {
				ctor: '::',
				_0: A2(_user$project$App_View$buttonStyle, _user$project$App_View$colorBlue, width),
				_1: {ctor: '[]'}
			}
		},
		{
			ctor: '::',
			_0: _elm_lang$html$Html$text('Clear'),
			_1: {ctor: '[]'}
		});
};
var _user$project$App_View$fastRenderButton = function (width) {
	return A2(
		_elm_lang$html$Html$button,
		{
			ctor: '::',
			_0: _elm_lang$html$Html_Events$onClick(_user$project$App_Types$FastRender),
			_1: {
				ctor: '::',
				_0: A2(_user$project$App_View$buttonStyle, _user$project$App_View$colorBlue, width),
				_1: {ctor: '[]'}
			}
		},
		{
			ctor: '::',
			_0: _elm_lang$html$Html$text('Fast Render'),
			_1: {ctor: '[]'}
		});
};
var _user$project$App_View$reRenderButton = function (width) {
	return A2(
		_elm_lang$html$Html$button,
		{
			ctor: '::',
			_0: _elm_lang$html$Html_Events$onClick(_user$project$App_Types$ReRender),
			_1: {
				ctor: '::',
				_0: A2(_user$project$App_View$buttonStyle, _user$project$App_View$colorBlue, width),
				_1: {ctor: '[]'}
			}
		},
		{
			ctor: '::',
			_0: _elm_lang$html$Html$text('Render'),
			_1: {ctor: '[]'}
		});
};
var _user$project$App_View$buttonBarParserResults = function (model) {
	return A2(
		_elm_lang$html$Html$div,
		{
			ctor: '::',
			_0: _elm_lang$html$Html_Attributes$style(
				{
					ctor: '::',
					_0: {ctor: '_Tuple2', _0: 'margin-left', _1: '20px'},
					_1: {
						ctor: '::',
						_0: {ctor: '_Tuple2', _0: 'margin-top', _1: '0'},
						_1: {ctor: '[]'}
					}
				}),
			_1: {ctor: '[]'}
		},
		{
			ctor: '::',
			_0: A2(_user$project$App_View$optionaViewTitleButton, model, 190),
			_1: {
				ctor: '::',
				_0: A2(_user$project$App_View$setHorizontalViewButton, model, 90),
				_1: {
					ctor: '::',
					_0: A2(_user$project$App_View$setVerticalViewButton, model, 90),
					_1: {ctor: '[]'}
				}
			}
		});
};
var _user$project$App_View$buttonBarRawHtmlResults = function (model) {
	return A2(
		_elm_lang$html$Html$div,
		{
			ctor: '::',
			_0: _elm_lang$html$Html_Attributes$style(
				{
					ctor: '::',
					_0: {ctor: '_Tuple2', _0: 'margin-left', _1: '20px'},
					_1: {
						ctor: '::',
						_0: {ctor: '_Tuple2', _0: 'margin-top', _1: '0'},
						_1: {ctor: '[]'}
					}
				}),
			_1: {ctor: '[]'}
		},
		{
			ctor: '::',
			_0: A2(_user$project$App_View$optionaViewTitleButton, model, 190),
			_1: {ctor: '[]'}
		});
};
var _user$project$App_View$buttonBarBottomRight = function (model) {
	return A2(
		_elm_lang$html$Html$div,
		{
			ctor: '::',
			_0: _elm_lang$html$Html_Attributes$style(
				{
					ctor: '::',
					_0: {ctor: '_Tuple2', _0: 'margin-left', _1: '20px'},
					_1: {ctor: '[]'}
				}),
			_1: {ctor: '[]'}
		},
		{ctor: '[]'});
};
var _user$project$App_View$buttonBarBottomLeft = A2(
	_elm_lang$html$Html$div,
	{
		ctor: '::',
		_0: _elm_lang$html$Html_Attributes$style(
			{
				ctor: '::',
				_0: {ctor: '_Tuple2', _0: 'margin-left', _1: '20px'},
				_1: {ctor: '[]'}
			}),
		_1: {ctor: '[]'}
	},
	{
		ctor: '::',
		_0: _user$project$App_View$techReportButton(93),
		_1: {
			ctor: '::',
			_0: _user$project$App_View$grammarButton(93),
			_1: {
				ctor: '::',
				_0: _user$project$App_View$wavePacketButton(93),
				_1: {
					ctor: '::',
					_0: _user$project$App_View$mathPaperButton(96),
					_1: {ctor: '[]'}
				}
			}
		}
	});
var _user$project$App_View$buttonBarLeft = A2(
	_elm_lang$html$Html$div,
	{
		ctor: '::',
		_0: _elm_lang$html$Html_Attributes$style(
			{
				ctor: '::',
				_0: {ctor: '_Tuple2', _0: 'margin-left', _1: '20px'},
				_1: {ctor: '[]'}
			}),
		_1: {ctor: '[]'}
	},
	{
		ctor: '::',
		_0: _user$project$App_View$resetButton(93),
		_1: {
			ctor: '::',
			_0: _user$project$App_View$restoreButton(93),
			_1: {
				ctor: '::',
				_0: _user$project$App_View$reRenderButton(93),
				_1: {
					ctor: '::',
					_0: _user$project$App_View$fastRenderButton(96),
					_1: {ctor: '[]'}
				}
			}
		}
	});
var _user$project$App_View$renderedSourcePane = function (model) {
	var renderedText = A2(_user$project$MiniLatex_Driver$getRenderedText, '', model.editRecord);
	return A2(
		_elm_lang$html$Html$div,
		{
			ctor: '::',
			_0: _user$project$App_View$renderedSourceStyle,
			_1: {
				ctor: '::',
				_0: _elm_lang$html$Html_Attributes$id('renderedText'),
				_1: {
					ctor: '::',
					_0: A2(
						_elm_lang$html$Html_Attributes$property,
						'innerHTML',
						_elm_lang$core$Json_Encode$string(renderedText)),
					_1: {ctor: '[]'}
				}
			}
		},
		{ctor: '[]'});
};
var _user$project$App_View$exportLatexPane = function (model) {
	return A2(
		_elm_lang$html$Html$pre,
		{
			ctor: '::',
			_0: _user$project$App_View$parseResultsStyle,
			_1: {ctor: '[]'}
		},
		{
			ctor: '::',
			_0: _elm_lang$html$Html$text(model.textToExport),
			_1: {ctor: '[]'}
		});
};
var _user$project$App_View$rawRenderedSourcePane = function (model) {
	var renderedText = A2(_user$project$MiniLatex_Driver$getRenderedText, '', model.editRecord);
	return A2(
		_elm_lang$html$Html$pre,
		{
			ctor: '::',
			_0: _user$project$App_View$parseResultsStyle,
			_1: {ctor: '[]'}
		},
		{
			ctor: '::',
			_0: _elm_lang$html$Html$text(renderedText),
			_1: {ctor: '[]'}
		});
};
var _user$project$App_View$prettyPrint = F2(
	function (lineViewStyle, parseResult) {
		var _p1 = lineViewStyle;
		if (_p1.ctor === 'Vertical') {
			return A2(
				_elm_lang$core$String$join,
				'\n\n',
				A2(
					_elm_lang$core$List$map,
					A2(_elm_community$string_extra$String_Extra$replace, ' ', '\n '),
					A2(_elm_lang$core$List$map, _elm_lang$core$Basics$toString, parseResult)));
		} else {
			return A2(
				_elm_lang$core$String$join,
				'\n\n',
				A2(_elm_lang$core$List$map, _elm_lang$core$Basics$toString, parseResult));
		}
	});
var _user$project$App_View$parseResultPane = function (model) {
	return A2(
		_elm_lang$html$Html$pre,
		{
			ctor: '::',
			_0: _user$project$App_View$parseResultsStyle,
			_1: {ctor: '[]'}
		},
		{
			ctor: '::',
			_0: _elm_lang$html$Html$text(
				A2(_user$project$App_View$prettyPrint, model.lineViewStyle, model.parseResult)),
			_1: {ctor: '[]'}
		});
};
var _user$project$App_View$dataUrl = function (data) {
	return A2(
		_elm_lang$core$Basics_ops['++'],
		'data:text/plain;charset=utf-8,',
		_elm_lang$http$Http$encodeUri(data));
};
var _user$project$App_View$downloadStyle = _elm_lang$html$Html_Attributes$style(
	{
		ctor: '::',
		_0: {ctor: '_Tuple2', _0: 'margin-left', _1: '0px'},
		_1: {
			ctor: '::',
			_0: {ctor: '_Tuple2', _0: 'margin-right', _1: '8px'},
			_1: {
				ctor: '::',
				_0: {ctor: '_Tuple2', _0: 'padding', _1: '4px'},
				_1: {
					ctor: '::',
					_0: {ctor: '_Tuple2', _0: 'padding-left', _1: '10px'},
					_1: {
						ctor: '::',
						_0: {ctor: '_Tuple2', _0: 'padding-right', _1: '10px'},
						_1: {
							ctor: '::',
							_0: {ctor: '_Tuple2', _0: 'background-color', _1: '#aaa'},
							_1: {
								ctor: '::',
								_0: {ctor: '_Tuple2', _0: 'font-size', _1: '11pt'},
								_1: {ctor: '[]'}
							}
						}
					}
				}
			}
		}
	});
var _user$project$App_View$textAreaStyle = _elm_lang$html$Html_Attributes$style(
	{
		ctor: '::',
		_0: {ctor: '_Tuple2', _0: 'position', _1: 'absolute'},
		_1: {
			ctor: '::',
			_0: {ctor: '_Tuple2', _0: 'top', _1: '-400px'},
			_1: {ctor: '[]'}
		}
	});
var _user$project$App_View$exporterLink = function (model) {
	return A2(
		_elm_lang$html$Html$a,
		{
			ctor: '::',
			_0: _elm_lang$html$Html_Attributes$href(
				_user$project$App_View$dataUrl(model.inputString)),
			_1: {
				ctor: '::',
				_0: _elm_lang$html$Html_Attributes$downloadAs('file.html'),
				_1: {
					ctor: '::',
					_0: _user$project$App_View$downloadStyle,
					_1: {ctor: '[]'}
				}
			}
		},
		{
			ctor: '::',
			_0: _elm_lang$html$Html$text('Export'),
			_1: {ctor: '[]'}
		});
};
var _user$project$App_View$exporterTextArea = function (model) {
	return A2(
		_elm_lang$html$Html$textarea,
		{
			ctor: '::',
			_0: _elm_lang$html$Html_Events$onInput(_user$project$App_Types$Input),
			_1: {
				ctor: '::',
				_0: _elm_lang$html$Html_Attributes$value(model.inputString),
				_1: {
					ctor: '::',
					_0: _user$project$App_View$textAreaStyle,
					_1: {ctor: '[]'}
				}
			}
		},
		{ctor: '[]'});
};
var _user$project$App_View$buttonBarRight = function (model) {
	return A2(
		_elm_lang$html$Html$div,
		{
			ctor: '::',
			_0: _elm_lang$html$Html_Attributes$style(
				{
					ctor: '::',
					_0: {ctor: '_Tuple2', _0: 'margin-left', _1: '20px'},
					_1: {ctor: '[]'}
				}),
			_1: {ctor: '[]'}
		},
		{
			ctor: '::',
			_0: _user$project$App_View$exporterTextArea(model),
			_1: {
				ctor: '::',
				_0: _user$project$App_View$exporterLink(model),
				_1: {
					ctor: '::',
					_0: A2(_user$project$App_View$standardViewButton, model, 98),
					_1: {
						ctor: '::',
						_0: A2(_user$project$App_View$parseResultsViewButton, model, 106),
						_1: {
							ctor: '::',
							_0: A2(_user$project$App_View$rawHtmlViewButton, model, 106),
							_1: {ctor: '[]'}
						}
					}
				}
			}
		});
};
var _user$project$App_View$showHtmlResult = function (model) {
	return A2(
		_elm_lang$html$Html$div,
		{
			ctor: '::',
			_0: _elm_lang$html$Html_Attributes$style(
				{
					ctor: '::',
					_0: {ctor: '_Tuple2', _0: 'float', _1: 'left'},
					_1: {ctor: '[]'}
				}),
			_1: {ctor: '[]'}
		},
		{
			ctor: '::',
			_0: _user$project$App_View$spacer(20),
			_1: {
				ctor: '::',
				_0: _user$project$App_View$buttonBarRawHtmlResults(model),
				_1: {
					ctor: '::',
					_0: _user$project$App_View$spacer(5),
					_1: {
						ctor: '::',
						_0: _user$project$App_View$rawRenderedSourcePane(model),
						_1: {ctor: '[]'}
					}
				}
			}
		});
};
var _user$project$App_View$showParseResult = function (model) {
	return A2(
		_elm_lang$html$Html$div,
		{
			ctor: '::',
			_0: _elm_lang$html$Html_Attributes$style(
				{
					ctor: '::',
					_0: {ctor: '_Tuple2', _0: 'float', _1: 'left'},
					_1: {ctor: '[]'}
				}),
			_1: {ctor: '[]'}
		},
		{
			ctor: '::',
			_0: _user$project$App_View$spacer(20),
			_1: {
				ctor: '::',
				_0: _user$project$App_View$buttonBarParserResults(model),
				_1: {
					ctor: '::',
					_0: _user$project$App_View$spacer(5),
					_1: {
						ctor: '::',
						_0: _user$project$App_View$parseResultPane(model),
						_1: {ctor: '[]'}
					}
				}
			}
		});
};
var _user$project$App_View$renderedSource = function (model) {
	return A2(
		_elm_lang$html$Html$div,
		{
			ctor: '::',
			_0: _elm_lang$html$Html_Attributes$style(
				{
					ctor: '::',
					_0: {ctor: '_Tuple2', _0: 'float', _1: 'left'},
					_1: {ctor: '[]'}
				}),
			_1: {ctor: '[]'}
		},
		{
			ctor: '::',
			_0: _user$project$App_View$spacer(20),
			_1: {
				ctor: '::',
				_0: _user$project$App_View$buttonBarRight(model),
				_1: {
					ctor: '::',
					_0: _user$project$App_View$spacer(5),
					_1: {
						ctor: '::',
						_0: _user$project$App_View$renderedSourcePane(model),
						_1: {
							ctor: '::',
							_0: _user$project$App_View$spacer(5),
							_1: {
								ctor: '::',
								_0: _user$project$App_View$buttonBarBottomRight(model),
								_1: {ctor: '[]'}
							}
						}
					}
				}
			}
		});
};
var _user$project$App_View$editorPane = function (model) {
	return A3(
		_elm_lang$html$Html_Keyed$node,
		'textarea',
		{
			ctor: '::',
			_0: _user$project$App_View$editorStyle,
			_1: {
				ctor: '::',
				_0: _elm_lang$html$Html_Events$onInput(_user$project$App_Types$GetContent),
				_1: {
					ctor: '::',
					_0: _elm_lang$html$Html_Attributes$value(model.sourceText),
					_1: {ctor: '[]'}
				}
			}
		},
		{
			ctor: '::',
			_0: {
				ctor: '_Tuple2',
				_0: _elm_lang$core$Basics$toString(model.counter),
				_1: _elm_lang$html$Html$text(model.sourceText)
			},
			_1: {ctor: '[]'}
		});
};
var _user$project$App_View$editor = function (model) {
	return A2(
		_elm_lang$html$Html$div,
		{
			ctor: '::',
			_0: _elm_lang$html$Html_Attributes$style(
				{
					ctor: '::',
					_0: {ctor: '_Tuple2', _0: 'float', _1: 'left'},
					_1: {ctor: '[]'}
				}),
			_1: {ctor: '[]'}
		},
		{
			ctor: '::',
			_0: _user$project$App_View$spacer(20),
			_1: {
				ctor: '::',
				_0: _user$project$App_View$buttonBarLeft,
				_1: {
					ctor: '::',
					_0: _user$project$App_View$spacer(5),
					_1: {
						ctor: '::',
						_0: _user$project$App_View$editorPane(model),
						_1: {
							ctor: '::',
							_0: _user$project$App_View$spacer(5),
							_1: {
								ctor: '::',
								_0: _user$project$App_View$buttonBarBottomLeft,
								_1: {ctor: '[]'}
							}
						}
					}
				}
			}
		});
};
var _user$project$App_View$link = F2(
	function (url, linkText) {
		return A2(
			_elm_lang$html$Html$a,
			{
				ctor: '::',
				_0: _elm_lang$html$Html_Attributes$class('linkback'),
				_1: {
					ctor: '::',
					_0: _elm_lang$html$Html_Attributes$style(
						{
							ctor: '::',
							_0: {ctor: '_Tuple2', _0: 'float', _1: 'right'},
							_1: {
								ctor: '::',
								_0: {ctor: '_Tuple2', _0: 'margin-right', _1: '10px'},
								_1: {ctor: '[]'}
							}
						}),
					_1: {
						ctor: '::',
						_0: _elm_lang$html$Html_Attributes$href(url),
						_1: {
							ctor: '::',
							_0: _elm_lang$html$Html_Attributes$target('_blank'),
							_1: {ctor: '[]'}
						}
					}
				}
			},
			{
				ctor: '::',
				_0: _elm_lang$html$Html$text(linkText),
				_1: {ctor: '[]'}
			});
	});
var _user$project$App_View$headerRibbon = A2(
	_elm_lang$html$Html$div,
	{
		ctor: '::',
		_0: _user$project$App_View$ribbonStyle('#555'),
		_1: {ctor: '[]'}
	},
	{
		ctor: '::',
		_0: A2(
			_elm_lang$html$Html$span,
			{
				ctor: '::',
				_0: _elm_lang$html$Html_Attributes$style(
					{
						ctor: '::',
						_0: {ctor: '_Tuple2', _0: 'margin-left', _1: '5px'},
						_1: {ctor: '[]'}
					}),
				_1: {ctor: '[]'}
			},
			{
				ctor: '::',
				_0: _elm_lang$html$Html$text('MiniLatex Demo'),
				_1: {ctor: '[]'}
			}),
		_1: {
			ctor: '::',
			_0: A2(_user$project$App_View$link, 'http://www.knode.io', 'www.knode.io'),
			_1: {ctor: '[]'}
		}
	});
var _user$project$App_View$appWidth = function (configuration) {
	var _p2 = configuration;
	switch (_p2.ctor) {
		case 'StandardView':
			return '900px';
		case 'ParseResultsView':
			return '1350px';
		default:
			return '1350px';
	}
};
var _user$project$App_View$wordCount = function (str) {
	return _elm_lang$core$List$length(
		A2(_elm_lang$core$String$split, ' ', str));
};
var _user$project$App_View$textInfo = function (model) {
	var cc = A2(
		_elm_lang$core$Basics_ops['++'],
		_elm_lang$core$Basics$toString(
			_elm_lang$core$String$length(model.sourceText)),
		' characters');
	var wc = A2(
		_elm_lang$core$Basics_ops['++'],
		_elm_lang$core$Basics$toString(
			_user$project$App_View$wordCount(model.sourceText)),
		' words, ');
	return A2(_elm_lang$core$Basics_ops['++'], wc, cc);
};
var _user$project$App_View$footerRibbon = function (model) {
	return A2(
		_elm_lang$html$Html$div,
		{
			ctor: '::',
			_0: _user$project$App_View$ribbonStyle('#777'),
			_1: {ctor: '[]'}
		},
		{
			ctor: '::',
			_0: _elm_lang$html$Html$text(
				_user$project$App_View$textInfo(model)),
			_1: {
				ctor: '::',
				_0: A2(_user$project$App_View$link, 'http://jxxcarlson.github.io', 'jxxcarlson.github.io'),
				_1: {ctor: '[]'}
			}
		});
};

var _user$project$MiniLatex_HasMath$hasMath = function (expr) {
	hasMath:
	while (true) {
		var _p0 = expr;
		switch (_p0.ctor) {
			case 'LXString':
				return false;
			case 'Comment':
				return false;
			case 'Item':
				var _v1 = _p0._1;
				expr = _v1;
				continue hasMath;
			case 'InlineMath':
				return true;
			case 'DisplayMath':
				return true;
			case 'Macro':
				return A3(
					_elm_lang$core$List$foldr,
					F2(
						function (x, acc) {
							return _user$project$MiniLatex_HasMath$hasMath(x) || acc;
						}),
					false,
					_p0._1);
			case 'Environment':
				return A2(_user$project$MiniLatex_HasMath$envHasMath, _p0._0, _p0._1);
			default:
				return A3(
					_elm_lang$core$List$foldr,
					F2(
						function (x, acc) {
							return _user$project$MiniLatex_HasMath$hasMath(x) || acc;
						}),
					false,
					_p0._0);
		}
	}
};
var _user$project$MiniLatex_HasMath$envHasMath = F2(
	function (envType, expr) {
		return A2(
			_elm_lang$core$List$member,
			envType,
			{
				ctor: '::',
				_0: 'equation',
				_1: {
					ctor: '::',
					_0: 'align',
					_1: {
						ctor: '::',
						_0: 'eqnarray',
						_1: {ctor: '[]'}
					}
				}
			}) || _user$project$MiniLatex_HasMath$hasMath(expr);
	});
var _user$project$MiniLatex_HasMath$listHasMath = function (list) {
	return A3(
		_elm_lang$core$List$foldr,
		F2(
			function (x, acc) {
				return _user$project$MiniLatex_HasMath$hasMath(x) || acc;
			}),
		false,
		list);
};

var _user$project$Main$rawHtmlResultsView = function (model) {
	return A2(
		_elm_lang$html$Html$div,
		{
			ctor: '::',
			_0: _elm_lang$html$Html_Attributes$style(
				{
					ctor: '::',
					_0: {ctor: '_Tuple2', _0: 'float', _1: 'left'},
					_1: {ctor: '[]'}
				}),
			_1: {ctor: '[]'}
		},
		{
			ctor: '::',
			_0: _user$project$App_View$headerRibbon,
			_1: {
				ctor: '::',
				_0: _user$project$App_View$editor(model),
				_1: {
					ctor: '::',
					_0: _user$project$App_View$renderedSource(model),
					_1: {
						ctor: '::',
						_0: _user$project$App_View$showHtmlResult(model),
						_1: {
							ctor: '::',
							_0: _user$project$App_View$spacer(5),
							_1: {
								ctor: '::',
								_0: _user$project$App_View$footerRibbon(model),
								_1: {ctor: '[]'}
							}
						}
					}
				}
			}
		});
};
var _user$project$Main$parseResultsView = function (model) {
	return A2(
		_elm_lang$html$Html$div,
		{
			ctor: '::',
			_0: _elm_lang$html$Html_Attributes$style(
				{
					ctor: '::',
					_0: {ctor: '_Tuple2', _0: 'float', _1: 'left'},
					_1: {ctor: '[]'}
				}),
			_1: {ctor: '[]'}
		},
		{
			ctor: '::',
			_0: _user$project$App_View$headerRibbon,
			_1: {
				ctor: '::',
				_0: _user$project$App_View$editor(model),
				_1: {
					ctor: '::',
					_0: _user$project$App_View$renderedSource(model),
					_1: {
						ctor: '::',
						_0: _user$project$App_View$showParseResult(model),
						_1: {
							ctor: '::',
							_0: _user$project$App_View$spacer(5),
							_1: {
								ctor: '::',
								_0: _user$project$App_View$footerRibbon(model),
								_1: {ctor: '[]'}
							}
						}
					}
				}
			}
		});
};
var _user$project$Main$standardView = function (model) {
	return A2(
		_elm_lang$html$Html$div,
		{
			ctor: '::',
			_0: _elm_lang$html$Html_Attributes$style(
				{
					ctor: '::',
					_0: {ctor: '_Tuple2', _0: 'float', _1: 'left'},
					_1: {ctor: '[]'}
				}),
			_1: {ctor: '[]'}
		},
		{
			ctor: '::',
			_0: _user$project$App_View$headerRibbon,
			_1: {
				ctor: '::',
				_0: _user$project$App_View$editor(model),
				_1: {
					ctor: '::',
					_0: _user$project$App_View$renderedSource(model),
					_1: {
						ctor: '::',
						_0: _user$project$App_View$spacer(5),
						_1: {
							ctor: '::',
							_0: _user$project$App_View$footerRibbon(model),
							_1: {ctor: '[]'}
						}
					}
				}
			}
		});
};
var _user$project$Main$mainView = function (model) {
	var _p0 = model.configuration;
	switch (_p0.ctor) {
		case 'StandardView':
			return _user$project$Main$standardView(model);
		case 'ParseResultsView':
			return _user$project$Main$parseResultsView(model);
		default:
			return _user$project$Main$rawHtmlResultsView(model);
	}
};
var _user$project$Main$view = function (model) {
	return A2(
		_elm_lang$html$Html$div,
		{
			ctor: '::',
			_0: _elm_lang$html$Html_Attributes$style(
				{
					ctor: '::',
					_0: {
						ctor: '_Tuple2',
						_0: 'width',
						_1: _user$project$App_View$appWidth(model.configuration)
					},
					_1: {
						ctor: '::',
						_0: {ctor: '_Tuple2', _0: 'margin', _1: 'auto'},
						_1: {ctor: '[]'}
					}
				}),
			_1: {ctor: '[]'}
		},
		{
			ctor: '::',
			_0: _user$project$Main$mainView(model),
			_1: {ctor: '[]'}
		});
};
var _user$project$Main$encodeData = F2(
	function (model, idList) {
		var idValueList = A2(
			_elm_lang$core$Debug$log,
			'idValueList',
			A2(_elm_lang$core$List$map, _elm_lang$core$Json_Encode$string, idList));
		return _elm_lang$core$Json_Encode$object(
			{
				ctor: '::',
				_0: {
					ctor: '_Tuple2',
					_0: 'model',
					_1: _elm_lang$core$Json_Encode$string(model)
				},
				_1: {
					ctor: '::',
					_0: {
						ctor: '_Tuple2',
						_0: 'idList',
						_1: _elm_lang$core$Json_Encode$list(idValueList)
					},
					_1: {ctor: '[]'}
				}
			});
	});
var _user$project$Main$exportLatex2Html = function (editRecord) {
	return function (text) {
		return A2(
			_elm_lang$core$Basics_ops['++'],
			_user$project$App_Source$htmlPrefix,
			A2(_elm_lang$core$Basics_ops['++'], text, _user$project$App_Source$htmlSuffix));
	}(
		A2(_user$project$MiniLatex_Driver$getRenderedText, '', editRecord));
};
var _user$project$Main$subscriptions = function (model) {
	return _elm_lang$core$Platform_Sub$none;
};
var _user$project$Main$init = function () {
	var editRecord = A2(_user$project$MiniLatex_Driver$setup, 0, _user$project$App_Source$initialText);
	var parseResult = _user$project$MiniLatex_Driver$parse(_user$project$App_Source$initialText);
	var model = {
		counter: 0,
		sourceText: _user$project$App_Source$initialText,
		editRecord: editRecord,
		inputString: _user$project$Main$exportLatex2Html(editRecord),
		parseResult: parseResult,
		hasMathResult: A2(
			_elm_lang$core$Debug$log,
			'hasMathResult',
			A2(_elm_lang$core$List$map, _user$project$MiniLatex_HasMath$listHasMath, parseResult)),
		seed: 0,
		configuration: _user$project$App_Types$StandardView,
		lineViewStyle: _user$project$App_Types$Horizontal
	};
	return {
		ctor: '_Tuple2',
		_0: model,
		_1: A2(
			_elm_lang$core$Random$generate,
			_user$project$App_Types$NewSeed,
			A2(_elm_lang$core$Random$int, 1, 10000))
	};
}();
var _user$project$Main$sendToJs = _elm_lang$core$Native_Platform.outgoingPort(
	'sendToJs',
	function (v) {
		return v;
	});
var _user$project$Main$useSource = F2(
	function (text, model) {
		var editRecord = A2(_user$project$MiniLatex_Driver$setup, model.seed, text);
		return {
			ctor: '_Tuple2',
			_0: _elm_lang$core$Native_Utils.update(
				model,
				{
					counter: model.counter + 1,
					sourceText: text,
					editRecord: editRecord,
					parseResult: _user$project$MiniLatex_Driver$parse(text),
					inputString: _user$project$Main$exportLatex2Html(editRecord)
				}),
			_1: _user$project$Main$sendToJs(
				A2(
					_user$project$Main$encodeData,
					'full',
					{ctor: '[]'}))
		};
	});
var _user$project$Main$update = F2(
	function (msg, model) {
		var _p1 = msg;
		switch (_p1.ctor) {
			case 'FastRender':
				var parseResult = _user$project$MiniLatex_Driver$parse(model.sourceText);
				var hasMathResult = A2(
					_elm_lang$core$Debug$log,
					'hasMathResult',
					A2(_elm_lang$core$List$map, _user$project$MiniLatex_HasMath$listHasMath, parseResult));
				var newEditRecord = A3(_user$project$MiniLatex_Driver$update, model.seed, model.editRecord, model.sourceText);
				return {
					ctor: '_Tuple2',
					_0: _elm_lang$core$Native_Utils.update(
						model,
						{counter: model.counter + 1, editRecord: newEditRecord, parseResult: parseResult, hasMathResult: hasMathResult}),
					_1: _elm_lang$core$Platform_Cmd$batch(
						{
							ctor: '::',
							_0: _user$project$Main$sendToJs(
								A2(_user$project$Main$encodeData, 'fast', newEditRecord.idList)),
							_1: {
								ctor: '::',
								_0: A2(
									_elm_lang$core$Random$generate,
									_user$project$App_Types$NewSeed,
									A2(_elm_lang$core$Random$int, 1, 10000)),
								_1: {ctor: '[]'}
							}
						})
				};
			case 'ReRender':
				return A2(_user$project$Main$useSource, model.sourceText, model);
			case 'Reset':
				return {
					ctor: '_Tuple2',
					_0: _elm_lang$core$Native_Utils.update(
						model,
						{
							counter: model.counter + 1,
							sourceText: '',
							editRecord: A2(_user$project$MiniLatex_Driver$setup, model.seed, '')
						}),
					_1: _user$project$Main$sendToJs(
						A2(
							_user$project$Main$encodeData,
							'full',
							{ctor: '[]'}))
				};
			case 'Restore':
				return {
					ctor: '_Tuple2',
					_0: _elm_lang$core$Native_Utils.update(
						model,
						{
							counter: model.counter + 1,
							sourceText: _user$project$App_Source$initialText,
							editRecord: A2(_user$project$MiniLatex_Driver$setup, model.seed, _user$project$App_Source$initialText)
						}),
					_1: _user$project$Main$sendToJs(
						A2(
							_user$project$Main$encodeData,
							'full',
							{ctor: '[]'}))
				};
			case 'GetContent':
				return {
					ctor: '_Tuple2',
					_0: _elm_lang$core$Native_Utils.update(
						model,
						{sourceText: _p1._0}),
					_1: _elm_lang$core$Platform_Cmd$none
				};
			case 'GenerateSeed':
				return {
					ctor: '_Tuple2',
					_0: model,
					_1: A2(
						_elm_lang$core$Random$generate,
						_user$project$App_Types$NewSeed,
						A2(_elm_lang$core$Random$int, 1, 10000))
				};
			case 'NewSeed':
				return {
					ctor: '_Tuple2',
					_0: _elm_lang$core$Native_Utils.update(
						model,
						{seed: _p1._0}),
					_1: _elm_lang$core$Platform_Cmd$none
				};
			case 'ShowStandardView':
				return {
					ctor: '_Tuple2',
					_0: _elm_lang$core$Native_Utils.update(
						model,
						{configuration: _user$project$App_Types$StandardView}),
					_1: _elm_lang$core$Platform_Cmd$none
				};
			case 'ShowParseResultsView':
				return {
					ctor: '_Tuple2',
					_0: _elm_lang$core$Native_Utils.update(
						model,
						{configuration: _user$project$App_Types$ParseResultsView}),
					_1: _elm_lang$core$Platform_Cmd$none
				};
			case 'ShowRawHtmlView':
				return {
					ctor: '_Tuple2',
					_0: _elm_lang$core$Native_Utils.update(
						model,
						{configuration: _user$project$App_Types$RawHtmlView}),
					_1: _elm_lang$core$Platform_Cmd$none
				};
			case 'SetHorizontalView':
				return {
					ctor: '_Tuple2',
					_0: _elm_lang$core$Native_Utils.update(
						model,
						{lineViewStyle: _user$project$App_Types$Horizontal}),
					_1: _elm_lang$core$Platform_Cmd$none
				};
			case 'SetVerticalView':
				return {
					ctor: '_Tuple2',
					_0: _elm_lang$core$Native_Utils.update(
						model,
						{lineViewStyle: _user$project$App_Types$Vertical}),
					_1: _elm_lang$core$Platform_Cmd$none
				};
			case 'TechReport':
				return A2(_user$project$Main$useSource, _user$project$App_Source$report, model);
			case 'WavePackets':
				return A2(_user$project$Main$useSource, _user$project$App_Source$wavePackets, model);
			case 'WeatherApp':
				return A2(_user$project$Main$useSource, _user$project$App_Source$weatherApp, model);
			case 'MathPaper':
				return A2(_user$project$Main$useSource, _user$project$App_Source$nongeodesic, model);
			case 'Grammar':
				return A2(_user$project$Main$useSource, _user$project$App_Source$grammar, model);
			default:
				return {
					ctor: '_Tuple2',
					_0: _elm_lang$core$Native_Utils.update(
						model,
						{inputString: _p1._0}),
					_1: _elm_lang$core$Platform_Cmd$none
				};
		}
	});
var _user$project$Main$main = _elm_lang$html$Html$program(
	{view: _user$project$Main$view, update: _user$project$Main$update, init: _user$project$Main$init, subscriptions: _user$project$Main$subscriptions})();

var Elm = {};
Elm['Main'] = Elm['Main'] || {};
if (typeof _user$project$Main$main !== 'undefined') {
    _user$project$Main$main(Elm['Main'], 'Main', undefined);
}

if (typeof define === "function" && define['amd'])
{
  define([], function() { return Elm; });
  return;
}

if (typeof module === "object")
{
  module['exports'] = Elm;
  return;
}

var globalElm = this['Elm'];
if (typeof globalElm === "undefined")
{
  this['Elm'] = Elm;
  return;
}

for (var publicModule in Elm)
{
  if (publicModule in globalElm)
  {
    throw new Error('There are two Elm modules called `' + publicModule + '` on this page! Rename one of them.');
  }
  globalElm[publicModule] = Elm[publicModule];
}

}).call(this);


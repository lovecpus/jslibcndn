const { isTypedArray } = require('util/types');

Object.prototype.clone = function() {
	if (isTypedArray(this)) return this.subarray(0);
	if (this instanceof Array) return this.slice();
	return Object.assign(Object.create(Object.getPrototypeOf(this)), this);
}
Object.clone = (obj)=>{
	if (isTypedArray(obj)) return obj.subarray(0);
	if (obj instanceof Array) return obj.slice();
	return Object.assign(Object.create(Object.getPrototypeOf(obj)), obj);
}
Array.prototype.push_front = function(data) { this.splice(0,0,data); return this; }
Array.prototype.pop_front = function() { this.splice(0,1); return this; }

exports = {}

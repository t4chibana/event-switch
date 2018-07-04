/* eventSwitch.js v0.1.0 | (c) 2018 by Naoki Tachibana | Released under the MIT License. */
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.esw = factory();
  }
}(typeof self !== 'undefined' ? self : this, function () {
  var EventSwitch = function(target, type, listener, option){
    this.listener = listener;
    this.target = target;
    this.type = type;
    this.option = option || false;
    this.isActive = true;
    this.switch('on');
  }
  EventSwitch.prototype.switch = function(type){
    var _this = this;
    var option = _this.option;
    _this.isActive = type === 'on' ? true : false ;
    if(_this.option.isArray){
      option = type === 'on' ? _this.option[0] : _this.option[1] ;
    }
    type = type === 'on' ? 'addEventListener' : 'removeEventListener' ;
    if(typeof _this.target === 'string'){
      Array.prototype.slice.call(document.querySelectorAll(_this.target)).forEach(function(element){
        element[type](_this.type, _this.listener, option);
      });
    }else{
      _this.target[type](_this.type, _this.listener, option);
    }
  }
  return function(target, type, listener, option){
    return new EventSwitch(target, type, listener, option);
  }
}));

/**
 * eiviyi - Average module. An efficient way to calculate average.
 * @version v1.0.0
 * @link    https://github.com/Kikobeats/eiviyi
 * @license MIT
 */require=function t(r,n,e){function i(o,s){if(!n[o]){if(!r[o]){var c="function"==typeof require&&require;if(!s&&c)return c(o,!0);if(u)return u(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var h=n[o]={exports:{}};r[o][0].call(h.exports,function(t){var n=r[o][1][t];return i(n?n:t)},h,h.exports,t,r,n,e)}return n[o].exports}for(var u="function"==typeof require&&require,o=0;o<e.length;o++)i(e[o]);return i}({1:[function(t,r,n){"use strict";var e;r.exports=e=function(){function t(t){null==t&&(t={}),this._round=t.round,this._unit=t.unit||"",this.reset()}return t.prototype.reset=function(){return this._avg=0,this._count=0,this},t.prototype.add=function(){var t,r,n,e;for(e=Array.isArray(arguments[0])?arguments[0]:arguments,t=0,r=e.length;r>t;t++)n=e[t],++this._count,this._avg+=(n-this._avg)/this._count;return this},t.prototype.count=function(){return this._count},t.prototype.resume=function(){var t;return t=null!=this.round()?this._avg.toFixed(this.round()):this._avg,""+t+this._unit},t.prototype.round=function(t){return 0===arguments.length?this._round:(this._round=t,this)},t.prototype.unit=function(t){return 0===arguments.length?this._unit:(this._unit=t,this)},t}()},{}],2:[function(t,r,n){},{}],eiviyi:[function(t,r,n){"use strict";t("coffee-script/register"),r.exports=t("./lib/Average")},{"./lib/Average":1,"coffee-script/register":2}]},{},[]);
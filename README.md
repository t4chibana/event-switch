# Event switch
_easily manage javascript event handling_

## About
Easily manipulate event registration and deletion.
It also supports events registered with anonymous functions.

## Usage
Installing
```html
<script src="/path/to/plugin/eventSwitch.min.js">
```
Regist event
```js
var clickEvent = esw('.trigger','click',function(e){ console.log(e) });
```

## Option

```js
var clickEvent = esw(trigger,event,listener,option);
```

Option | Type | Description
------ | ---- | -----------
trigger | string / object | css selector or DOM object(document, window...etc)
event | string | event name
listener | function(event) | function. can use anonymous function
option |anything | eventlistner standard setting(option or useCapture) If you want to make different settings for addEventlistener and removeEventlistener. It's possible by using arrays.（ex. [addEventlistener_option, removeEventlistener_option]）


## API

```js
var clickEvent = esw(trigger,event,listener,option);

//remove event
clickEvent.switch('off')

//restore event & event attach
clickEvent.switch('on')

//check event state(boolean) 
clickEvent.isActive
```

## License
MIT
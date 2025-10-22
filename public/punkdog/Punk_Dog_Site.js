(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib._101831245whitebrickwall = function() {
	this.initialize(img._101831245whitebrickwall);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,5717,3752);


(lib.Arm_L_Lower = function() {
	this.initialize(img.Arm_L_Lower);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,171,613);


(lib.Arm_L_Upper = function() {
	this.initialize(img.Arm_L_Upper);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,238,370);


(lib.Arm_R_Lower = function() {
	this.initialize(img.Arm_R_Lower);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,152,545);


(lib.Arm_R_Upper = function() {
	this.initialize(img.Arm_R_Upper);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,222,433);


(lib.Body = function() {
	this.initialize(img.Body);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1969,2851);


(lib.Eyeball = function() {
	this.initialize(img.Eyeball);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,46,46);


(lib.Eyebrow = function() {
	this.initialize(img.Eyebrow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,88,14);


(lib.Head = function() {
	this.initialize(img.Head);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,859,901);


(lib.Layer1 = function() {
	this.initialize(img.Layer1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1395,506);


(lib.Leg_L = function() {
	this.initialize(img.Leg_L);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,369,846);


(lib.Leg_R = function() {
	this.initialize(img.Leg_R);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,370,846);


(lib.Mouth = function() {
	this.initialize(img.Mouth);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,307,168);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.TEXT_Whats_Up = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("What's up, this is me saying some shit!", "bold 81px 'Cooper Std Black'", "#FF0000");
	this.text.lineHeight = 83;
	this.text.lineWidth = 447;
	this.text.parent = this;
	this.text.setTransform(2,2);
	this.text.shadow = new cjs.Shadow("rgba(0,0,0,1)",3,3,4);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3,-3,465,348);


(lib.LEG_R = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Leg_R();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.LEG_R, new cjs.Rectangle(0,0,370,846), null);


(lib.LEG_L = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Leg_L();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.LEG_L, new cjs.Rectangle(0,0,369,846), null);


(lib.Mouth_TALK = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Mouth();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Mouth_TALK, new cjs.Rectangle(0,0,307,168), null);


(lib.TEST_BUTTON_03 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AiNE0QhFgLgngPIAAixQApAUAxAJQAyAKArAAQAqAAATgJQARgHAAgYQAAgPgMgJQgOgIgcAAIhyAAIAPiSIBdAAQAcAAALgJQALgHAAgUQAAgPgSgJQgTgKgnAAQgsAAgtAMQgtAKggARIAAiuQApgSA5gLQA5gKA5AAQBRABA8AYQA9AXAgAqQAhArAAA1QAABQgxAzQA8AlAABWQAABjhNAwQhMAyh9AAQgsgBhFgKg");
	this.shape.setTransform(991.925,266.75);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("ABoE1IirjyIAADyIjoAAIAAppIDDAAICsDyIAAjyIDoAAIAAJpg");
	this.shape_1.setTransform(903.4,266.725);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("Aj2D0QhUhLAAipQAAioBUhLQBUhLCiAAQCjAABUBLQBUBLAACoQAACphUBLQhUBLijAAQiiAAhUhLgAhHhdQgWAbAABCQAABDAWAcQAVAbAyAAQAzAAAVgbQAWgcAAhDQAAhCgWgbQgVgcgzAAQgyAAgVAcg");
	this.shape_2.setTransform(835.475,266.75);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AhzE1IAAnCIidAAIAAinIIhAAIAACnIidAAIAAHCg");
	this.shape_3.setTransform(774.05,266.725);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AhzE1IAAnCIieAAIAAinIIiAAIAACnIidAAIAAHCg");
	this.shape_4.setTransform(720.3,266.725);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AidEdQhHgdgog6Qgog4AAhRIAAl2IDoAAIAAFYQAABXBMgBQBNABAAhXIAAlYIDoAAIAAF2QAABRgoA4QgoA6hGAdQhHAdhYAAQhXAAhGgdg");
	this.shape_5.setTransform(659.625,267.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("AkkE1IAAppIFtAAQBfAAA0AtQA0AuAABUQAAAsgPAhQgQAhgaAUQAnASAUAcQAUAcAAAzQgBBXg5AzQg6AxhlAAgAhLCYIBVAAQAvAAgBgpQAAgTgLgKQgLgKgYAAIhVAAgAhLhHIBVAAQAvAAgBgpQAAgSgLgLQgLgKgYAAIhVAAg");
	this.shape_6.setTransform(595.05,266.725);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("AhzE1IAAnCIidAAIAAinIIhAAIAACnIidAAIAAHCg");
	this.shape_7.setTransform(506.65,266.725);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0000").s().p("AiTEzQg8gMgpgUIAAitQAuAWA5AOQA4AOAsAAQAdAAAQgGQAPgIAAgNQAAgMgNgHIgxgUIgwgQQg+gXghgZQgigYgPgjQgOgiAAg2QAAhiBDgwQBEguCHgBQAuAAA7AKQA8AJAnALIAACvQhbgmhJAAQhJAAAAAYQAAAKANAGIA1ASIAZAHQBKATAnAeQAnAdANAlQAOAmAAA5QAABahGA0QhHA1iFAAQhCAAg9gMg");
	this.shape_8.setTransform(452.875,266.75);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF0000").s().p("Aj2E1IAAppIHtAAIAACnIkFAAIAAA4IDhAAIAACsIjhAAIAAA3IEFAAIAACng");
	this.shape_9.setTransform(400.85,266.725);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0000").s().p("AhzE1IAAnCIieAAIAAinIIiAAIAACnIidAAIAAHCg");
	this.shape_10.setTransform(345.9,266.725);

	this.instance = new lib.Layer1();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.TEST_BUTTON_03, new cjs.Rectangle(0,0,1395,506), null);


(lib.TEST_BUTTON_02 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AjxE6IAAhnQAbgrAhgmQAiglAvgpQA9g0AUgXQAUgWAAgZQAAguhBAAQhOAAhRAjIAAjBQArgSA6gLQA6gKA9AAQB3AAA9A2QA9A2AABeQAAA5gTAlQgUAkg0AuIgRAPQgtAmgOATICrAAIAACxg");
	this.shape.setTransform(996.175,266.225);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("ABoE1IirjyIAADyIjoAAIAAppIDCAAICsDyIAAjyIDpAAIAAJpg");
	this.shape_1.setTransform(908.4,266.675);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("Aj2D0QhUhLAAipQAAioBUhLQBUhKCigBQCjABBUBKQBUBLAACoQAACphUBLQhUBLijgBQiiABhUhLgAhHheQgWAbAABDQAABDAWAbQAVAcAyAAQAzAAAVgcQAWgbAAhDQAAhDgWgbQgVgbgzAAQgyAAgVAbg");
	this.shape_2.setTransform(840.475,266.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AhzE1IAAnCIieAAIAAinIIiAAIAACnIidAAIAAHCg");
	this.shape_3.setTransform(779.05,266.675);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AhzE1IAAnCIidAAIAAinIIiAAIAACnIieAAIAAHCg");
	this.shape_4.setTransform(725.3,266.675);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AidEdQhHgdgog5Qgog5AAhRIAAl2IDoAAIAAFYQAABWBMABQBNgBAAhWIAAlYIDoAAIAAF2QAABRgoA5QgoA5hGAdQhHAdhYAAQhXAAhGgdg");
	this.shape_5.setTransform(664.625,267.15);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("AklE1IAAppIFuAAQBfAAA0AtQA1AugBBUQAAAsgPAhQgPAhgbAUQAnASAUAcQATAcAAAzQABBXg6AzQg5AxhnAAgAhLCYIBWAAQAtAAABgpQgBgTgLgKQgMgKgWAAIhWAAgAhLhHIBWAAQAtAAABgpQgBgSgLgLQgMgKgWAAIhWAAg");
	this.shape_6.setTransform(600.05,266.675);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("AhzE1IAAnCIieAAIAAinIIjAAIAACnIieAAIAAHCg");
	this.shape_7.setTransform(511.65,266.675);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0000").s().p("AiTEzQg8gLgpgVIAAitQAuAWA5AOQA4APAsAAQAdAAAQgHQAPgIAAgNQAAgMgNgHIgxgUIgwgQQg+gXghgZQgigYgPgiQgOgjAAg2QAAhiBDgvQBEgwCHAAQAuABA7AIQA8AJAnAMIAACuQhbglhJAAQhJAAAAAYQAAAKANAGIA1ASIAZAGQBKAVAnAdQAnAdANAlQAOAmAAA5QAABahGA0QhHA0iFAAQhCAAg9gLg");
	this.shape_8.setTransform(457.875,266.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF0000").s().p("Aj2E1IAAppIHtAAIAACnIkFAAIAAA4IDgAAIAACsIjgAAIAAA3IEFAAIAACng");
	this.shape_9.setTransform(405.85,266.675);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0000").s().p("AhzE1IAAnCIieAAIAAinIIjAAIAACnIieAAIAAHCg");
	this.shape_10.setTransform(350.9,266.675);

	this.instance = new lib.Layer1();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.TEST_BUTTON_02, new cjs.Rectangle(0,0,1395,506), null);


(lib.TEST_BUTTON_01 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("Ag/E6IAAmRIhoAPIAAjBIFPgwIAAJzg");
	this.shape.setTransform(982.8,266.275);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("ABoE1IirjyIAADyIjoAAIAAppIDCAAICtDyIAAjyIDoAAIAAJpg");
	this.shape_1.setTransform(902.4,266.725);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("Aj2D0QhUhLAAipQAAioBUhLQBUhLCiAAQCjAABUBLQBUBLAACoQAACphUBLQhUBLijAAQiiAAhUhLgAhHhdQgWAbAABCQAABDAWAcQAVAbAyAAQAzAAAVgbQAWgcAAhDQAAhCgWgbQgVgcgzAAQgyAAgVAcg");
	this.shape_2.setTransform(834.475,266.75);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AhzE1IAAnCIidAAIAAinIIhAAIAACnIidAAIAAHCg");
	this.shape_3.setTransform(773.05,266.725);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AhzE1IAAnCIieAAIAAinIIiAAIAACnIidAAIAAHCg");
	this.shape_4.setTransform(719.3,266.725);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AidEdQhHgdgog6Qgog4AAhRIAAl2IDoAAIAAFYQAABXBMgBQBNABAAhXIAAlYIDoAAIAAF2QAABRgoA4QgoA6hGAdQhHAdhYAAQhXAAhGgdg");
	this.shape_5.setTransform(658.625,267.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("AklE1IAAppIFuAAQBfAAA0AtQA0AuAABUQAAAsgPAhQgQAhgaAUQAnASAUAcQATAcABAzQAABXg6AzQg6AxhlAAgAhLCYIBVAAQAvAAgBgpQAAgTgLgKQgLgKgYAAIhVAAgAhLhHIBVAAQAvAAgBgpQAAgSgLgLQgLgKgYAAIhVAAg");
	this.shape_6.setTransform(594.05,266.725);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("AhzE1IAAnCIieAAIAAinIIiAAIAACnIidAAIAAHCg");
	this.shape_7.setTransform(505.65,266.725);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0000").s().p("AiTEzQg8gMgpgUIAAitQAuAWA5AOQA4AOAsAAQAdAAAQgGQAPgIAAgNQAAgMgNgHIgxgUIgwgQQg+gXghgZQgigYgPgjQgOgiAAg2QAAhiBDgwQBEguCHgBQAuAAA7AKQA8AJAnALIAACvQhbgmhJAAQhJAAAAAYQAAAKANAGIA1ASIAZAHQBKATAnAeQAnAdANAlQAOAmAAA5QAABahGA0QhHA1iFAAQhCAAg9gMg");
	this.shape_8.setTransform(451.875,266.75);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF0000").s().p("Aj2E1IAAppIHtAAIAACnIkFAAIAAA4IDhAAIAACsIjhAAIAAA3IEFAAIAACng");
	this.shape_9.setTransform(399.85,266.725);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0000").s().p("AhzE1IAAnCIieAAIAAinIIiAAIAACnIidAAIAAHCg");
	this.shape_10.setTransform(344.9,266.725);

	this.instance = new lib.Layer1();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.TEST_BUTTON_01, new cjs.Rectangle(0,0,1395,506), null);


(lib.BACK_BUTTON = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("ACkKEIkHnAIhdBwIAAFQInjAAIAA0HIHjAAIAAFoIEaloIIiAAIm4IWIHgLxg");
	this.shape.setTransform(1017.625,261.65);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AmJHwQjCipAAlGQAAlIDAinQDCipF7ABQB2AABfAQQBeARBjAkIAAGmQi3hVi/AAQiXABhMA6QhMA6AACMQAACJBOA7QBOA7CXAAQDAAAC2hTIAAGlQhjAlhfAQQheAQh2AAQl7AAjEing");
	this.shape_1.setTransform(881.225,261.65);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("ADyKEIhcjwIktAAIhcDwIn3AAIHw0HIH1AAIHwUHgABhBKIhhj1IhjD1IDEAAg");
	this.shape_2.setTransform(741.75,261.65);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("ApjKEIAA0HIL7AAQDGAABsBfQBuBfAACuQAABcggBGQghBEg3AqQBSAmApA8QApA5AABrQAAC1h4BpQh5BnjTAAgAidE8ICzAAQBgAAAAhWQAAgmgYgUQgYgWgwAAIizAAgAidiVICzAAQBgAAAAhWQAAgmgYgVQgYgVgwAAIizAAg");
	this.shape_3.setTransform(599.825,261.65);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AmTC4IAAlvIMnAAIAAFvg");
	this.shape_4.setTransform(368.225,266.625);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("An8DGIAAmLIP5m6IAAG+In4DCIH4DBIAAG+g");
	this.shape_5.setTransform(270.925,262.025);

	this.instance = new lib.Layer1();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.BACK_BUTTON, new cjs.Rectangle(0,0,1395,506), null);


(lib.Punk_Dogpsd = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Eyebrow
	this.instance = new lib.Eyebrow();
	this.instance.setTransform(1336,1199);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Eyeball
	this.instance_1 = new lib.Eyeball();
	this.instance_1.setTransform(1363,1238);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Mouth
	this.instance_2 = new lib.Mouth();
	this.instance_2.setTransform(1337,1519);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Head
	this.instance_3 = new lib.Head();
	this.instance_3.setTransform(975,853);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Arm_L_Upper
	this.instance_4 = new lib.Arm_L_Upper();
	this.instance_4.setTransform(1432,1799);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// Arm_L_Lower
	this.instance_5 = new lib.Arm_L_Lower();
	this.instance_5.setTransform(1500,2084);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// Arm_R_Upper
	this.instance_6 = new lib.Arm_R_Upper();
	this.instance_6.setTransform(826,1813);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// Arm_R_Lower
	this.instance_7 = new lib.Arm_R_Lower();
	this.instance_7.setTransform(821,2157);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// Body
	this.instance_8 = new lib.Body();
	this.instance_8.setTransform(344,713);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

	// Leg_R
	this.instance_9 = new lib.Leg_R();
	this.instance_9.setTransform(1009,2525);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1));

	// Leg_L
	this.instance_10 = new lib.Leg_L();
	this.instance_10.setTransform(1192,2525);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(344,713,1969,2851);


(lib.Punk_Dog_WALK = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Eyebrow
	this.instance = new lib.Eyebrow();
	this.instance.setTransform(1336,1199);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20));

	// Eyeball
	this.instance_1 = new lib.Eyeball();
	this.instance_1.setTransform(1363,1238);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(20));

	// Mouth
	this.instance_2 = new lib.Mouth();
	this.instance_2.setTransform(1337,1519);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(20));

	// Head
	this.instance_3 = new lib.Head();
	this.instance_3.setTransform(975,853);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(20));

	// Arm_L_Upper
	this.instance_4 = new lib.Arm_L_Upper();
	this.instance_4.setTransform(1432,1799);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(20));

	// Arm_L_Lower
	this.instance_5 = new lib.Arm_L_Lower();
	this.instance_5.setTransform(1500,2084);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(20));

	// Arm_R_Upper
	this.instance_6 = new lib.Arm_R_Upper();
	this.instance_6.setTransform(826,1813);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(20));

	// Arm_R_Lower
	this.instance_7 = new lib.Arm_R_Lower();
	this.instance_7.setTransform(821,2157);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(20));

	// Body
	this.instance_8 = new lib.Body();
	this.instance_8.setTransform(344,713);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(20));

	// Leg_R
	this.instance_9 = new lib.LEG_R();
	this.instance_9.setTransform(1132,2621.9,1,1,0,0,0,123,96.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({regX:185,regY:423,rotation:3.7479,x:1172.5,y:2951.35},0).wait(1).to({rotation:7.4958,x:1150.85,y:2953.3},0).wait(1).to({rotation:11.2436,x:1129.2,y:2953.8},0).wait(1).to({rotation:14.9915,x:1107.55,y:2952.9},0).wait(1).to({rotation:18.7394,x:1085.9,y:2950.6},0).wait(1).to({rotation:14.2709,x:1115.45,y:2955.15},0).wait(1).to({rotation:9.8024,x:1145.1,y:2957.6},0).wait(1).to({rotation:5.3339,x:1174.7,y:2958.1},0).wait(1).to({rotation:0.8654,x:1204.1,y:2956.6},0).wait(1).to({rotation:-3.6031,x:1233.2,y:2953.1},0).wait(1).to({rotation:-8.0716,x:1261.75,y:2947.6},0).wait(1).to({rotation:-12.5401,x:1289.7,y:2940.25},0).wait(1).to({rotation:-17.0086,x:1316.8,y:2931},0).wait(1).to({rotation:-21.4771,x:1342.95,y:2919.95},0).wait(1).to({rotation:-19.0779,x:1324.45,y:2923.3},0).wait(1).to({rotation:-16.6788,x:1305.65,y:2926.1},0).wait(1).to({rotation:-14.2796,x:1286.65,y:2928.45},0).wait(1).to({rotation:-11.8805,x:1267.35,y:2930.2},0).wait(1).to({rotation:-9.4813,x:1247.8,y:2931.45},0).wait(1));

	// Leg_L
	this.instance_10 = new lib.LEG_L();
	this.instance_10.setTransform(1320.4,2642,1,1,0,0,0,128.4,117);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1).to({regX:184.5,regY:423,rotation:-2.5483,x:1390,y:2945.2},0).wait(1).to({rotation:-5.0966,x:1403.4,y:2941.75},0).wait(1).to({rotation:-7.6449,x:1416.65,y:2937.8},0).wait(1).to({rotation:-10.1932,x:1429.75,y:2933.2},0).wait(1).to({rotation:-12.7415,x:1442.6,y:2928.1},0).wait(1).to({rotation:-7.469,x:1411.6,y:2938.4},0).wait(1).to({rotation:-2.1965,x:1379.7,y:2946.3},0).wait(1).to({rotation:3.076,x:1347.3,y:2951.6},0).wait(1).to({rotation:8.3485,x:1314.6,y:2954.25},0).wait(1).to({rotation:13.6211,x:1281.7,y:2954.3},0).wait(1).to({rotation:18.8936,x:1249.05,y:2951.7},0).wait(1).to({rotation:24.1661,x:1216.75,y:2946.55},0).wait(1).to({rotation:29.4386,x:1185.05,y:2938.8},0).wait(1).to({rotation:34.7111,x:1154.25,y:2928.5},0).wait(1).to({rotation:31.1554,x:1181.25,y:2933.2},0).wait(1).to({rotation:27.5997,x:1208.75,y:2936.75},0).wait(1).to({rotation:24.0439,x:1236.55,y:2939.1},0).wait(1).to({rotation:20.4882,x:1264.65,y:2940.4},0).wait(1).to({rotation:16.9325,x:1292.95,y:2940.45},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(344,713,1969,2851);


(lib.Punk_Dog_TALK = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Eyebrow
	this.instance = new lib.Eyebrow();
	this.instance.setTransform(1336,1199);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(11));

	// Eyeball
	this.instance_1 = new lib.Eyeball();
	this.instance_1.setTransform(1363,1238);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(11));

	// Mouth
	this.instance_2 = new lib.Mouth_TALK();
	this.instance_2.setTransform(1397.5,1558,1,1,0,0,0,60.5,39);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:153.5,regY:84,rotation:5.3902,x:1485.8,y:1611.5},0).wait(1).to({rotation:10.7805,x:1480.45,y:1619.55},0).wait(1).to({rotation:16.1707,x:1474.3,y:1627.1},0).wait(1).to({rotation:21.561,x:1467.45,y:1633.95},0).wait(1).to({rotation:26.9512,x:1460,y:1640.25},0).wait(1).to({rotation:21.4536,x:1467.6,y:1633.9},0).wait(1).to({rotation:15.956,x:1474.55,y:1626.8},0).wait(1).to({rotation:10.4584,x:1480.75,y:1619.1},0).wait(1).to({rotation:4.9608,x:1486.2,y:1610.85},0).wait(1).to({rotation:-0.5368,x:1490.9,y:1602.1},0).wait(1));

	// Head
	this.instance_3 = new lib.Head();
	this.instance_3.setTransform(975,853);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(11));

	// Arm_L_Upper
	this.instance_4 = new lib.Arm_L_Upper();
	this.instance_4.setTransform(1432,1799);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(11));

	// Arm_L_Lower
	this.instance_5 = new lib.Arm_L_Lower();
	this.instance_5.setTransform(1500,2084);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(11));

	// Arm_R_Upper
	this.instance_6 = new lib.Arm_R_Upper();
	this.instance_6.setTransform(826,1813);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(11));

	// Arm_R_Lower
	this.instance_7 = new lib.Arm_R_Lower();
	this.instance_7.setTransform(821,2157);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(11));

	// Body
	this.instance_8 = new lib.Body();
	this.instance_8.setTransform(344,713);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(11));

	// Leg_R
	this.instance_9 = new lib.Leg_R();
	this.instance_9.setTransform(1009,2525);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(11));

	// Leg_L
	this.instance_10 = new lib.Leg_L();
	this.instance_10.setTransform(1192,2525);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(11));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(344,713,1969,2851);


// stage content:
(lib.Punk_Dog_Site = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,1,45,148];
	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop(1);
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.TEST_BUTTON_01.on('click', function(){
		/*
		Moves the playhead to the specified frame number in the timeline and stops the movie.
		Can be used on the main timeline or on movie clip timelines.
		*/
		_this.gotoAndStop(1);
		});
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.button_1.on('click', function(){
		/*
		Moves the playhead to the specified frame number in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		*/
		_this.gotoAndPlay(2);
		});
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.button_4.on('click', function(){
		/*
		Moves the playhead to the specified frame number in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		*/
		_this.gotoAndPlay(46);
		});
	}
	this.frame_1 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop(2);
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.BACK_BUTTON.on('click', function(){
		/*
		Moves the playhead to the specified frame number in the timeline and stops the movie.
		Can be used on the main timeline or on movie clip timelines.
		*/
		_this.gotoAndStop(0);
		});
	}
	this.frame_45 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.button_2.on('click', function(){
		/*
		Moves the playhead to the specified frame number in the timeline and stops the movie.
		Can be used on the main timeline or on movie clip timelines.
		*/
		_this.gotoAndStop(0);
		});
	}
	this.frame_148 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.movieClip_3.on('click', function(){
		/*
		Moves the playhead to the specified frame number in the timeline and stops the movie.
		Can be used on the main timeline or on movie clip timelines.
		*/
		_this.gotoAndStop(0);
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(44).call(this.frame_45).wait(103).call(this.frame_148).wait(1));

	// PUNK_DOG_STILL
	this.instance = new lib.Punk_Dogpsd("synched",0);
	this.instance.setTransform(127,334.15,0.25,0.25,0,0,0,1328.4,2138.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},2).wait(142).to({_off:false,regY:2138.6,skewY:180},0).wait(1).to({regX:1328.5,regY:2138.5,scaleX:0.125},0).wait(1).to({scaleX:0,scaleY:0,skewY:0,x:-127,y:735.15},0).wait(1).to({scaleX:0.125,scaleY:0.25,x:127,y:334.15},0).wait(1).to({scaleX:0.25,x:127.05},0).wait(1));

	// Text_Whats_Up
	this.instance_1 = new lib.TEXT_Whats_Up("synched",0);
	this.instance_1.setTransform(612.5,358.9,1,1,0,0,0,225.5,167);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.text = new cjs.Text("What's up, this is me saying some shit!", "bold 81px 'Cooper Std Black'", "#FF0000");
	this.text.lineHeight = 83;
	this.text.lineWidth = 447;
	this.text.parent = this;
	this.text.setTransform(389,193.9);
	this.text.shadow = new cjs.Shadow("rgba(0,0,0,1)",3,3,4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.text}]},1).to({state:[]},21).to({state:[]},54).wait(49));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({_off:false},0).wait(1).to({regX:226.9,regY:168.4,x:613.9,y:360.3,alpha:0.0455},0).wait(1).to({alpha:0.0909},0).wait(1).to({alpha:0.1364},0).wait(1).to({alpha:0.1818},0).wait(1).to({alpha:0.2273},0).wait(1).to({alpha:0.2727},0).wait(1).to({alpha:0.3182},0).wait(1).to({alpha:0.3636},0).wait(1).to({alpha:0.4091},0).wait(1).to({alpha:0.4545},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.5455},0).wait(1).to({alpha:0.5909},0).wait(1).to({alpha:0.6364},0).wait(1).to({alpha:0.6818},0).wait(1).to({alpha:0.7273},0).wait(1).to({alpha:0.7727},0).wait(1).to({alpha:0.8182},0).wait(1).to({alpha:0.8636},0).wait(1).to({alpha:0.9091},0).wait(1).to({alpha:0.9545},0).wait(1).to({alpha:1},0).to({_off:true},1).wait(124));

	// PUNK_DOG_WALK
	this.instance_2 = new lib.Punk_Dog_WALK("synched",0);
	this.instance_2.setTransform(816.2,334.15,0.25,0.25,0,0,0,1328.4,2138.6);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(95).to({_off:false},0).wait(1).to({regX:1328.5,regY:2138.5,scaleX:0.0833,x:801.8,startPosition:1},0).wait(1).to({skewY:180,x:787.45,startPosition:2},0).wait(1).to({scaleX:0.25,x:773.1,startPosition:3},0).wait(1).to({x:758.75,startPosition:4},0).wait(1).to({x:744.4,startPosition:5},0).wait(1).to({x:730.05,startPosition:6},0).wait(1).to({x:715.65,startPosition:7},0).wait(1).to({x:701.3,startPosition:8},0).wait(1).to({x:686.95,startPosition:9},0).wait(1).to({x:672.6,startPosition:10},0).wait(1).to({x:658.25,startPosition:11},0).wait(1).to({x:643.9,startPosition:12},0).wait(1).to({x:629.5,startPosition:13},0).wait(1).to({x:615.15,startPosition:14},0).wait(1).to({x:600.8,startPosition:15},0).wait(1).to({x:586.45,startPosition:16},0).wait(1).to({x:572.1,startPosition:17},0).wait(1).to({x:557.75,startPosition:18},0).wait(1).to({x:543.35,startPosition:19},0).wait(1).to({x:529,startPosition:0},0).wait(1).to({x:514.65,startPosition:1},0).wait(1).to({x:500.3,startPosition:2},0).wait(1).to({x:485.95,startPosition:3},0).wait(1).to({x:471.6,startPosition:4},0).wait(1).to({x:457.2,startPosition:5},0).wait(1).to({x:442.85,startPosition:6},0).wait(1).to({x:428.5,startPosition:7},0).wait(1).to({x:414.15,startPosition:8},0).wait(1).to({x:399.8,startPosition:9},0).wait(1).to({x:385.45,startPosition:10},0).wait(1).to({x:371.05,startPosition:11},0).wait(1).to({x:356.7,startPosition:12},0).wait(1).to({x:342.35,startPosition:13},0).wait(1).to({x:328,startPosition:14},0).wait(1).to({x:313.65,startPosition:15},0).wait(1).to({x:299.3,startPosition:16},0).wait(1).to({x:284.9,startPosition:17},0).wait(1).to({x:270.55,startPosition:18},0).wait(1).to({x:256.2,startPosition:19},0).wait(1).to({x:241.85,startPosition:0},0).wait(1).to({x:227.5,startPosition:1},0).wait(1).to({x:213.15,startPosition:2},0).wait(1).to({x:198.75,startPosition:3},0).wait(1).to({x:184.4,startPosition:4},0).wait(1).to({x:170.05,startPosition:5},0).wait(1).to({x:155.7,startPosition:6},0).wait(1).to({x:141.35,startPosition:7},0).wait(1).to({x:127,startPosition:8},0).to({_off:true},1).wait(5));

	// PUNK_DOG_WALK
	this.instance_3 = new lib.Punk_Dog_WALK("synched",0);
	this.instance_3.setTransform(127,334.15,0.25,0.25,0,0,0,1328.4,2138.6);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(46).to({_off:false},0).wait(1).to({regX:1328.5,regY:2138.5,x:141.45,startPosition:1},0).wait(1).to({x:155.8,startPosition:2},0).wait(1).to({x:170.15,startPosition:3},0).wait(1).to({x:184.5,startPosition:4},0).wait(1).to({x:198.85,startPosition:5},0).wait(1).to({x:213.2,startPosition:6},0).wait(1).to({x:227.6,startPosition:7},0).wait(1).to({x:241.95,startPosition:8},0).wait(1).to({x:256.3,startPosition:9},0).wait(1).to({x:270.65,startPosition:10},0).wait(1).to({x:285,startPosition:11},0).wait(1).to({x:299.35,startPosition:12},0).wait(1).to({x:313.75,startPosition:13},0).wait(1).to({x:328.1,startPosition:14},0).wait(1).to({x:342.4,startPosition:15},0).wait(1).to({x:356.75,startPosition:16},0).wait(1).to({x:371.1,startPosition:17},0).wait(1).to({x:385.5,startPosition:18},0).wait(1).to({x:399.85,startPosition:19},0).wait(1).to({x:414.2,startPosition:0},0).wait(1).to({x:428.55,startPosition:1},0).wait(1).to({x:442.9,startPosition:2},0).wait(1).to({x:457.25,startPosition:3},0).wait(1).to({x:471.65,startPosition:4},0).wait(1).to({x:486,startPosition:5},0).wait(1).to({x:500.35,startPosition:6},0).wait(1).to({x:514.7,startPosition:7},0).wait(1).to({x:529.05,startPosition:8},0).wait(1).to({x:543.4,startPosition:9},0).wait(1).to({x:557.8,startPosition:10},0).wait(1).to({x:572.15,startPosition:11},0).wait(1).to({x:586.5,startPosition:12},0).wait(1).to({x:600.85,startPosition:13},0).wait(1).to({x:615.2,startPosition:14},0).wait(1).to({x:629.55,startPosition:15},0).wait(1).to({x:643.95,startPosition:16},0).wait(1).to({x:658.3,startPosition:17},0).wait(1).to({x:672.65,startPosition:18},0).wait(1).to({x:687,startPosition:19},0).wait(1).to({x:701.35,startPosition:0},0).wait(1).to({x:715.7,startPosition:1},0).wait(1).to({x:730.1,startPosition:2},0).wait(1).to({x:744.45,startPosition:3},0).wait(1).to({x:758.8,startPosition:4},0).wait(1).to({x:773.15,startPosition:5},0).wait(1).to({x:787.5,startPosition:6},0).wait(1).to({x:801.85,startPosition:7},0).wait(1).to({x:816.25,startPosition:8},0).to({_off:true},1).wait(54));

	// PUNK_DOG_TALK
	this.instance_4 = new lib.Punk_Dog_TALK("synched",0);
	this.instance_4.setTransform(126.95,334.15,0.25,0.25,0,0,0,1328.1,2138.6);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(2).to({_off:false},0).to({_off:true},44).wait(103));

	// TEST_BUTTON_01
	this.TEST_BUTTON_01 = new lib.TEST_BUTTON_01();
	this.TEST_BUTTON_01.name = "TEST_BUTTON_01";
	this.TEST_BUTTON_01.setTransform(625.25,114.95,0.3832,0.3207,0,0,0,697.6,253.2);
	new cjs.ButtonHelper(this.TEST_BUTTON_01, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.TEST_BUTTON_01).to({_off:true},1).wait(148));

	// TEST_BUTTON_02
	this.button_1 = new lib.TEST_BUTTON_02();
	this.button_1.name = "button_1";
	this.button_1.setTransform(606.85,300.15,0.3856,0.3057,0,0,0,697.9,253.2);
	new cjs.ButtonHelper(this.button_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.button_1).to({_off:true},1).wait(148));

	// TEST_BUTTON_03
	this.button_4 = new lib.TEST_BUTTON_03();
	this.button_4.name = "button_4";
	this.button_4.setTransform(571.45,500.9,0.3591,0.3492,0,0,0,697.6,253.4);
	new cjs.ButtonHelper(this.button_4, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.button_4).to({_off:true},1).wait(148));

	// BACK_01
	this.BACK_BUTTON = new lib.BACK_BUTTON();
	this.BACK_BUTTON.name = "BACK_BUTTON";
	this.BACK_BUTTON.setTransform(774,562,0.24,0.24,0,0,0,697.6,253);
	new cjs.ButtonHelper(this.BACK_BUTTON, 0, 1, 1);

	this.text_1 = new cjs.Text("SITE CURRENTLY \nUNDER\nCONSTRUCTION!", "81px 'Phosphate'", "#FF0000");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 99;
	this.text_1.parent = this;
	this.text_1.setTransform(610.55,100.1);
	this.text_1.shadow = new cjs.Shadow("rgba(0,0,0,1)",3,3,4);

	this.button_2 = new lib.BACK_BUTTON();
	this.button_2.name = "button_2";
	this.button_2.setTransform(798.25,584.15,0.18,0.18,0,0,0,697.8,253.1);
	new cjs.ButtonHelper(this.button_2, 0, 1, 1);

	this.movieClip_3 = new lib.BACK_BUTTON();
	this.movieClip_3.name = "movieClip_3";
	this.movieClip_3.setTransform(816.15,575.15,0.19,0.19,0,0,0,697.4,253.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.text_1},{t:this.BACK_BUTTON}]},1).to({state:[]},1).to({state:[{t:this.button_2}]},43).to({state:[]},1).to({state:[{t:this.movieClip_3}]},102).wait(1));

	// Background
	this.instance_5 = new lib._101831245whitebrickwall();
	this.instance_5.setTransform(-53,-32,0.1926,0.1926);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(149));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(360.9,288,701.5000000000001,402.6);
// library properties:
lib.properties = {
	id: '8F88821233334ED19348015ED014DBA1',
	width: 960,
	height: 640,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/_101831245whitebrickwall.jpeg", id:"_101831245whitebrickwall"},
		{src:"images/Arm_L_Lower.png", id:"Arm_L_Lower"},
		{src:"images/Arm_L_Upper.png", id:"Arm_L_Upper"},
		{src:"images/Arm_R_Lower.png", id:"Arm_R_Lower"},
		{src:"images/Arm_R_Upper.png", id:"Arm_R_Upper"},
		{src:"images/Body.png", id:"Body"},
		{src:"images/Eyeball.png", id:"Eyeball"},
		{src:"images/Eyebrow.png", id:"Eyebrow"},
		{src:"images/Head.png", id:"Head"},
		{src:"images/Layer1.png", id:"Layer1"},
		{src:"images/Leg_L.png", id:"Leg_L"},
		{src:"images/Leg_R.png", id:"Leg_R"},
		{src:"images/Mouth.png", id:"Mouth"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['8F88821233334ED19348015ED014DBA1'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;
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
// helper functions:

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


(lib.StartBtn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// label
	this.txt = new cjs.Text("start/stop", "8px 'Exo 2'", "#FFFFFF");
	this.txt.name = "txt";
	this.txt.textAlign = "center";
	this.txt.lineHeight = 12;
	this.txt.lineWidth = 131;
	this.txt.parent = this;
	this.txt.setTransform(0,-4.65);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(4));

	// skins
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(0.1,2,1).p("AABAAIgBAA");
	this.shape.setTransform(24.65,11.95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#003E74").s().p("AD3B4IgBAAIo9AAQgxAAgigkQgkgjAAgxQAAgwAkgkQAXgXAdgIQAPgEAQAAIKOAAQAxAAAkAjQAjAkAAAwQAAAxgjAjQgkAkgxAAg");
	this.shape_1.setTransform(0,-0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-67.5,-12,135.1,25);


(lib.notifyicon = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#013D74").s().p("AhPBQQgighAAgvQAAguAighQAhgiAuAAQAvAAAhAiQAMALAHANQAPAZAAAeQAAAfgPAZQgHAMgMAMQghAhgvAAQguAAghghg");
	this.shape.setTransform(11.375,11.35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#013D74").s().p("AhPBQQgighAAgvQAAguAigiQAhggAuAAQAvAAAhAgQAMAMAHANQAPAZAAAeQAAAfgPAZQgHANgMALQghAhgvABQgugBghghg");
	this.shape_1.setTransform(11.375,64.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#013D74").s().p("AhPBQQgighAAgvQAAguAighQAhgiAuAAQAvAAAhAiQAMALAHANQAPAZAAAeQAAAfgPAZQgHAMgMAMQghAigvgBQguABghgig");
	this.shape_2.setTransform(11.375,119.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,22.8,130.9);


(lib.graphs = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AfRBEQgdgcAAgoQAAgnAdgcQAdgdAnAAQAoAAAdAdQAcAcAAAnQAAAogcAcQgdAdgoAAQgnAAgdgdgEghYABEQgdgcAAgoQAAgnAdgcQAcgdAnAAQAoAAAdAdQAcAcABAnQgBAogcAcQgdAdgoAAQgnAAgcgdg");
	this.shape.setTransform(320.9,4.475);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({y:44.175},0).wait(1).to({y:81.675},0).wait(1));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("Eg7WAN6QgBAAAAAAQgBAAAAAAQAAgBgBAAQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBICTnVIABgCIPh0VIABgBIADgBMAjxAAAQAAAAABAAQAAAAABABQAAAAAAAAQABAAAAABQABAAAAAAQAAABAAAAQAAABABAAQAAABAAAAQAAABAAAAQgBABAAAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAMgjuAAAIAAA3IgBACIgCABIgCgBIAAgCIAAgxIvbUNIgCAGIAAAzIgBACIgBABIgCgBIgBgCIAAgjIiLG+QAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAIgCABIgBgBgAFVN3IgBgBIAAAAICR7rIABgBIABgBIPgAAIACAAIABAAIABACIAAABQQ5RrTWB1IABAAIAAABIgBABIAAAAQzWh1w5xpIAAA3IgBACIgBABIgCgBIgBgCIAAg7IveAAIiSbqIAAABIgBAAIAAAAgAHrNnIgBgCIAAg8IABgCIACAAIABAAIABACIAAA8IgBACIgBABIgCgBgAXHNYIgBgCIAAg8IABgCIACAAIABAAIABACIAAA8IgBACIgBABIgCgBgEgpjANYIAAgCIAAg8IAAgCIACAAIACAAIABACIAAA8IgBACIgCABIgCgBgEg5EANGIgBgCIAAg8IABgCIACAAIABAAIABACIAAA8IgBACIgBABIgCgBgAHrLvIgBgCIAAg8IABgCIACAAIABAAIABACIAAA8IgBACIgBABIgCgBgAXHLgIgBgCIAAg8IABgCIACAAIABAAIABACIAAA8IgBACIgBABIgCgBgEgpjALgIAAgCIAAg8IAAgCIACAAIACAAIABACIAAA8IgBACIgCABIgCgBgEg5EALOIgBgCIAAg8IABgCIACAAIABAAIABACIAAA8IgBACIgBABIgCgBgAHrJ3IgBgCIAAg8IABgCIACAAIABAAIABACIAAA8IgBACIgBABIgCgBgAXHJoIgBgCIAAg8IABgCIACAAIABAAIABACIAAA8IgBACIgBABIgCgBgEgpjAJoIAAgCIAAg8IAAgCIACAAIACAAIABACIAAA8IgBACIgCABIgCgBgEg5EAJWIgBgCIAAg8IABgCIACAAIABAAIABACIAAA8IgBACIgBABIgCgBgAHrH/IgBgCIAAg8IABgCIACAAIABAAIABACIAAA8IgBACIgBABIgCgBgAXHHwIgBgCIAAg8IABgCIACAAIABAAIABACIAAA8IgBACIgBABIgCgBgEgpjAHwIAAgCIAAg8IAAgCIACAAIACAAIABACIAAA8IgBACIgCABIgCgBgAHrGHIgBgCIAAg8IABgCIACAAIABAAIABACIAAA8IgBACIgBABIgCgBgAXHF4IgBgCIAAg8IABgCIACAAIABAAIABACIAAA8IgBACIgBABIgCgBgEgpjAF4IAAgCIAAg8IAAgCIACAAIACAAIABACIAAA8IgBACIgCABIgCgBgAHrEPIgBgCIAAg8IABgCIACAAIABAAIABACIAAA8IgBACIgBABIgCgBgAXHEAIgBgCIAAg8IABgCIACAAIABAAIABACIAAA8IgBACIgBABIgCgBgEgpjAEAIAAgCIAAg8IAAgCIACAAIACAAIABACIAAA8IgBACIgCABIgCgBgAHrCXIgBgCIAAg8IABgCIACAAIABAAIABACIAAA8IgBACIgBABIgCgBgAXHCIIgBgCIAAg8IABgCIACAAIABAAIABACIAAA8IgBACIgBABIgCgBgEgpjACIIAAgCIAAg8IAAgCIACAAIACAAIABACIAAA8IgBACIgCABIgCgBgAHrAfIgBgCIAAg7IABgCIACAAIABAAIABACIAAA7IgBACIgBABIgCgBgAXHAQIgBgCIAAg7IABgCIACAAIABAAIABACIAAA7IgBACIgBABIgCgBgEgpjAAQIAAgCIAAg7IAAgCIACAAIACAAIABACIAAA7IgBACIgCABIgCgBgAHrhYIgBgCIAAg8IABgCIACAAIABAAIABACIAAA8IgBACIgBABIgCgBgAXHhnIgBgCIAAg8IABgCIACAAIABAAIABACIAAA8IgBACIgBABIgCgBgEgpjgBnIAAgCIAAg8IAAgCIACAAIACAAIABACIAAA8IgBACIgCABIgCgBgAHrjQIgBgCIAAg8IABgCIACAAIABAAIABACIAAA8IgBACIgBABIgCgBgAXHjfIgBgCIAAg8IABgCIACAAIABAAIABACIAAA8IgBACIgBABIgCgBgEgpjgDfIAAgCIAAg8IAAgCIACAAIACAAIABACIAAA8IgBACIgCABIgCgBgAHrlIIgBgCIAAg8IABgCIACAAIABAAIABACIAAA8IgBACIgBABIgCgBgAXHlXIgBgCIAAg8IABgCIACAAIABAAIABACIAAA8IgBACIgBABIgCgBgEgpjgFXIAAgCIAAg8IAAgCIACAAIACAAIABACIAAA8IgBACIgCABIgCgBgAHrnAIgBgCIAAg8IABgCIACAAIABAAIABACIAAA8IgBACIgBABIgCgBgAXHnPIgBgCIAAg8IABgCIACAAIABAAIABACIAAA8IgBACIgBABIgCgBgEgpjgHPIAAgCIAAg8IAAgCIACAAIACAAIABACIAAA8IgBACIgCABIgCgBgAHro4IgBgCIAAg8IABgCIACAAIABAAIABACIAAA8IgBACIgBABIgCgBgAXHpHIgBgCIAAg8IABgCIACAAIABAAIABACIAAA8IgBACIgBABIgCgBgEgpjgJHIAAgCIAAg8IAAgCIACAAIACAAIABACIAAA8IgBACIgCABIgCgBgAHrqwIgBgCIAAg8IABgCIACAAIABAAIABACIAAA8IgBACIgBABIgCgBgAXHq/IgBgCIAAg8IABgCIACAAIABAAIABACIAAA8IgBACIgBABIgCgBgEgpjgK/IAAgCIAAg8IAAgCIACAAIACAAIABACIAAA8IgBACIgCABIgCgBgAHrsoIgBgCIAAg8IABgCIACAAIABAAIABACIAAA8IgBACIgBABIgCgBg");
	this.shape_1.setTransform(379.7865,90.8766);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("Eg7XAK0QAAAAgBAAQAAgBAAAAQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBICTloIABgCIPhvmQAAAAABAAQAAgBABAAQAAAAABAAQAAAAABAAMAjxAAAQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQABABAAAAQAAAAAAABQAAAAABABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAAAAAQAAABgBAAQAAABgBAAQAAAAAAAAQgBABAAAAQgBAAAAAAMgjuAAAIAAA3IgBABIgCABIgCgBIAAgBIAAgzIvbPfIgCAFIAAA1IgBABIgBABIgCgBIgBgBIAAgpIiLFXQAAABgBAAQAAAAAAABQgBAAAAAAQAAABgBAAIgCAAIgCAAgEg5EAKzIgBgCIAAgCIABgCIACgBIABABIABACIAAACIgBACIgBABIgCgBgEgpjAKxIAAgCIAAgnIAAgCIACgBIACABIABACIAAAnIgBACIgCABIgCgBgAFVKwIgBAAIAAgBICR1PIABAAIABgBIADAAIAAgQIABgCIACAAIABAAIABACIAAAQIPXAAIABAAIACgBIABABIABACIAAAAQQ5NkTWBZIABABIAAABIgBABIAAAAQzWhaw5tjIAAA5IgBABIgBABIgCgBIgBgBIAAg7IvXAAIAAAZIgBACIgBABIgCgBIgBgCIAAgZIgCAAIiSVNIAAABIgBAAIAAAAgAXHKnIgBgBIAAgeIABgCIACgBIABABIABACIAAAeIgBABIgBABIgCgBgAHrKkIgBgCIAAg8IABgCIACAAIABAAIABACIAAA8IgBACIgBABIgCgBgEg5EAJ0IgBgBIAAg8IABgCIACgBIABABIABACIAAA8IgBABIgBABIgCgBgAXHJNIgBgBIAAg8IABgCIACgBIABABIABACIAAA8IgBABIgBABIgCgBgEgpjAJNIAAgBIAAg8IAAgCIACgBIACABIABACIAAA8IgBABIgCABIgCgBgAHrIsIgBgCIAAg8IABgCIACAAIABAAIABACIAAA8IgBACIgBABIgCgBgEg5EAH8IgBgBIAAg8IABgCIACgBIABABIABACIAAA8IgBABIgBABIgCgBgAXHHVIgBgBIAAg8IABgCIACgBIABABIABACIAAA8IgBABIgBABIgCgBgEgpjAHVIAAgBIAAg8IAAgCIACgBIACABIABACIAAA8IgBABIgCABIgCgBgAHrG0IgBgCIAAg8IABgCIACAAIABAAIABACIAAA8IgBACIgBABIgCgBgAXHFdIgBgBIAAg8IABgCIACgBIABABIABACIAAA8IgBABIgBABIgCgBgEgpjAFdIAAgBIAAg8IAAgCIACgBIACABIABACIAAA8IgBABIgCABIgCgBgAHrE8IgBgCIAAg8IABgCIACAAIABAAIABACIAAA8IgBACIgBABIgCgBgAXHDlIgBgBIAAg8IABgCIACgBIABABIABACIAAA8IgBABIgBABIgCgBgEgpjADlIAAgBIAAg8IAAgCIACgBIACABIABACIAAA8IgBABIgCABIgCgBgAHrDEIgBgCIAAg8IABgCIACAAIABAAIABACIAAA8IgBACIgBABIgCgBgAXHBtIgBgBIAAg8IABgCIACgBIABABIABACIAAA8IgBABIgBABIgCgBgEgpjABtIAAgBIAAg8IAAgCIACgBIACABIABACIAAA8IgBABIgCABIgCgBgAHrBMIgBgCIAAg8IABgCIACAAIABAAIABACIAAA8IgBACIgBABIgCgBgAXHgKIgBgBIAAg8IABgCIACgBIABABIABACIAAA8IgBABIgBABIgCgBgEgpjgAKIAAgBIAAg8IAAgCIACgBIACABIABACIAAA8IgBABIgCABIgCgBgAHrgrIgBgCIAAg8IABgCIACAAIABAAIABACIAAA8IgBACIgBABIgCgBgAXHiCIgBgBIAAg8IABgCIACgBIABABIABACIAAA8IgBABIgBABIgCgBgEgpjgCCIAAgBIAAg8IAAgCIACgBIACABIABACIAAA8IgBABIgCABIgCgBgAHrijIgBgCIAAg8IABgCIACAAIABAAIABACIAAA8IgBACIgBABIgCgBgAXHj6IgBgBIAAg8IABgCIACgBIABABIABACIAAA8IgBABIgBABIgCgBgEgpjgD6IAAgBIAAg8IAAgCIACgBIACABIABACIAAA8IgBABIgCABIgCgBgAHrkbIgBgCIAAg8IABgCIACAAIABAAIABACIAAA8IgBACIgBABIgCgBgAXHlyIgBgBIAAg8IABgCIACgBIABABIABACIAAA8IgBABIgBABIgCgBgEgpjgFyIAAgBIAAg8IAAgCIACgBIACABIABACIAAA8IgBABIgCABIgCgBgAHrmTIgBgCIAAg8IABgCIACAAIABAAIABACIAAA8IgBACIgBABIgCgBgAXHnqIgBgBIAAg8IABgCIACgBIABABIABACIAAA8IgBABIgBABIgCgBgEgpjgHqIAAgBIAAg8IAAgCIACgBIACABIABACIAAA8IgBABIgCABIgCgBgAHroLIgBgCIAAg8IABgCIACAAIABAAIABACIAAA8IgBACIgBABIgCgBg");
	this.shape_2.setTransform(379.7864,111.7267);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("Eg7XAHoQgBAAAAAAQgBgBAAAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAICSj+IACgCIPhq/IADgBMAjxAAAQAAAAABAAQAAAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAABQAAAAAAABQABAAAAABQAAAAgBABQAAAAAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAAAAAQgBABAAAAMgjuAAAIAAA3IgBABIgCABIgCgBIAAgBIAAg1IvcK8IgBACIAAA2IgBACIgBABIgCgBIgBgCIAAgtIiMDyQAAAAAAAAQgBABAAAAQAAAAgBAAQAAABgBAAIgBAAIgCgBgEg5EAHnIgBgBIAAgQIABgCIACAAIABAAIABACIAAAQIgBABIgBABIgCgBgAFVHlIgBAAIAAgBICRu+IABAAIABgBIPfAAIABAAIACgBIABABIABACIAAAAQQ5JjTWA/IABABIAAABIgBABIAAAAQzWhAw5pjIAAA6IgBABIgBABIgCgBIgBgBIAAg7IveAAIiSO8IAAABIgBAAIAAAAgAHrHdIgBgCIAAg8IABgCIACAAIABAAIABACIAAA8IgBACIgBABIgCgBgAXHGrIgBgBIAAg8IABgCIACgBIABABIABACIAAA8IgBABIgBABIgCgBgEgpjAGrIAAgBIAAg8IAAgCIACgBIACABIABACIAAA8IgBABIgCABIgCgBgEg5EAGcIgBgCIAAg8IABgCIACAAIABAAIABACIAAA8IgBACIgBABIgCgBgAHrFlIgBgCIAAg8IABgCIACAAIABAAIABACIAAA8IgBACIgBABIgCgBgAXHEzIgBgBIAAg8IABgCIACgBIABABIABACIAAA8IgBABIgBABIgCgBgEgpjAEzIAAgBIAAg8IAAgCIACgBIACABIABACIAAA8IgBABIgCABIgCgBgAHrDtIgBgCIAAg8IABgCIACAAIABAAIABACIAAA8IgBACIgBABIgCgBgAXHC7IgBgBIAAg8IABgCIACgBIABABIABACIAAA8IgBABIgBABIgCgBgEgpjAC7IAAgBIAAg8IAAgCIACgBIACABIABACIAAA8IgBABIgCABIgCgBgAHrB1IgBgCIAAg8IABgCIACAAIABAAIABACIAAA8IgBACIgBABIgCgBgAXHBDIgBgBIAAg8IABgCIACgBIABABIABACIAAA8IgBABIgBABIgCgBgEgpjABDIAAgBIAAg8IAAgCIACgBIACABIABACIAAA8IgBABIgCABIgCgBgAHrgCIgBgCIAAg8IABgCIACAAIABAAIABACIAAA8IgBACIgBABIgCgBgAXHg0IgBgBIAAg8IABgCIACgBIABABIABACIAAA8IgBABIgBABIgCgBgEgpjgA0IAAgBIAAg8IAAgCIACgBIACABIABACIAAA8IgBABIgCABIgCgBgAHrh6IgBgCIAAg8IABgCIACAAIABAAIABACIAAA8IgBACIgBABIgCgBgAXHisIgBgBIAAg8IABgCIACgBIABABIABACIAAA8IgBABIgBABIgCgBgEgpjgCsIAAgBIAAg8IAAgCIACgBIACABIABACIAAA8IgBABIgCABIgCgBgAHrjyIgBgCIAAg8IABgCIACAAIABAAIABACIAAA8IgBACIgBABIgCgBgAXHkkIgBgBIAAg8IABgCIACgBIABABIABACIAAA8IgBABIgBABIgCgBgEgpjgEkIAAgBIAAg8IAAgCIACgBIACABIABACIAAA8IgBABIgCABIgCgBgAHrlqIgBgCIAAg8IABgCIACAAIABAAIABACIAAA8IgBACIgBABIgCgBgAHrniIgBgBIAAgCIABgCIACgBIABABIABACIAAACIgBABIgBABIgCgBg");
	this.shape_3.setTransform(379.7914,129.1467);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-5.2,762,186.89999999999998);


(lib.damper = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,2,2).p("ABIhZQgCgGAAgGQAAgNAKgKQAKgJANAAQANAAAKAJQAKAKAAAOQAAANgKAKQgKAKgNAAQgEAAgDgBQgJgCgHgHQgGgGgCgGgAAXgqIAWAXIAzgxAAXgqIgLgLIhZBVIALALIAWAWIAMAMIBahUIgNgMAhHBaQACAFAAAGQAAANgKAKQgKAKgNAAQgNAAgKgKQgKgKAAgNQAAgNAKgKQAKgKANAAQAEAAAFACIAbgbAhdBGQAIACAGAGQAFAFADAHIAbgZAAXgqIAxgv");
	this.shape.setTransform(-0.075,0.425);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("AhQBOQgGgGgIgCIAbgbIAWAWIgbAZQgDgHgFgFgAAWgpIAxgwQACAGAGAGQAHAIAJACIgzAwg");
	this.shape_1.setTransform(0.025,0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s().p("Ah9B8QgKgKAAgNQAAgNAKgKQAKgKANAAIAJACQAIACAGAGQAFAFADAHQACAFAAAGQAAANgKAKQgKAKgNAAQgNAAgKgKgAgsBBIgWgWIgLgLIBZhVIALALIAWAXIANAMIhaBUgABghEQgJgCgHgHQgGgGgCgGQgCgGAAgGQAAgNAKgKQAKgJANAAQANAAAKAJQAKAKAAAOQAAANgKAKQgKAKgNAAIgHgBg");
	this.shape_2.setTransform(-0.075,0.425);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.6,-14,29.1,28.9);


(lib.frame6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.damper("synched",0);
	this.instance.setTransform(40.3,227.9);

	this.instance_1 = new lib.damper("synched",0);
	this.instance_1.setTransform(121.4,119);

	this.instance_2 = new lib.damper("synched",0);
	this.instance_2.setTransform(40,39.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#023D74").ss(10,2,2).p("Asf0nIYzAAAMh0nMAALAo3AsrUoMAAAgpP");
	this.shape.setTransform(81.1855,132.5895);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_5
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#023D74").ss(4,2,0,3).p("AMk0qMAAFApVAsoUlMAAAgpP");
	this.shape_1.setTransform(80.8517,132.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#023D74").ss(4,1,1).p("AsZAAIYzAA");
	this.shape_2.setTransform(80.6,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	// Layer_3
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#003E74").ss(2,2,0,3).p("AMlwyIkMAAIAAEOIAAEMIkNAAIAAENIAAELIAAENIAAENIkLAAIAAEMIAAENIkLAAIkOAAIkMAAIAAkNIAAkMIAAkNIAAkNIAAkLIAAkNIAAkMIAAkOIAAkMIEMAAIAAEMIkMAAAIZ0+IAAEMIkNAAIAAEOIAAEMIkLAAIkLAAIkOAAIkMAAAMlwyIAAkMIkMAAIkNAAIAAEMIkLAAIkLAAIkOAAIAAEOIkMAAAMloYIkMAAIAAENIAAELIkNAAIkLAAIkLAAIkOAAIkMAAAMlskIkMAAIkNAAIkLAAIkLAAIAAEMIAAENIAAELIAAENIAAENIkOAAIkMAAAMlskIAAEMIAAENIAAELIkMAAIAAENIAAENIkNAAIAAEMIAAENIAAEMIkLAAIkLAAIkOAAIkMAAIAAkMAMlwyIAAEOAAB0+IAAEMIAAEOIAAEMIAAENIAAELIAAENIAAENIkLAAIAAEMIAAENIAAEMAkK0+IAAEMIAAEOIkOAAIAAEMIAAENIAAELIAAENIAAENIAAEMIAAENIAAEMAAB0+IkLAAIkOAAAABkLIkLAAIkOAAIkMAAAoYENIkMAAAABENIkLAAIkOAAAMlkLIkMAAIkNAAIkLAAAMlENIAAENIkMAAIAAEMIAAENIkNAAIkLAAIAAEMAMlENIkMAAIkNAAIkLAAAMlAAIAAENAEM0+IkLAAAMlMmIAAENIkMAAIAAEMIkNAAAMlMmIkMAAIkNAAIkLAAIkLAAIkOAAIkMAAAMlQzIAAEMIkMAAAMlIaIAAEM");
	this.shape_3.setTransform(80.525,134.325);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5,-4.4,172.4,274.09999999999997);


(lib.frame5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_4
	this.instance = new lib.damper("synched",0);
	this.instance.setTransform(93.8,227.95);

	this.instance_1 = new lib.damper("synched",0);
	this.instance_1.setTransform(67.45,120.5);

	this.instance_2 = new lib.damper("synched",0);
	this.instance_2.setTransform(93.8,39.85);

	this.instance_3 = new lib.damper("synched",0);
	this.instance_3.setTransform(40.3,227.9);

	this.instance_4 = new lib.damper("synched",0);
	this.instance_4.setTransform(121.4,119);

	this.instance_5 = new lib.damper("synched",0);
	this.instance_5.setTransform(40,39.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Layer_5
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#023D74").ss(10,2,2).p("Asf0nIYzAAAMh0nMAALAo3AsrUoMAAAgpP");
	this.shape.setTransform(81.1855,132.5895);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#023D74").ss(4,2,0,3).p("AMk0qMAAFApVAsoUlMAAAgpP");
	this.shape_1.setTransform(80.8517,132.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#023D74").ss(4,1,1).p("AsZAAIYzAA");
	this.shape_2.setTransform(80.6,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	// Layer_2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#003E74").ss(2,2,0,3).p("AMlwyIkMAAIAAEOIAAEMIkNAAIAAENIAAELIAAENIAAENIkLAAIAAEMIAAENIkLAAIkOAAIkMAAIAAkNIAAkMIAAkNIAAkNIAAkLIAAkNIAAkMIAAkOIAAkMIEMAAIAAEMIkMAAAIZ0+IAAEMIkNAAIAAEOIAAEMIkLAAIkLAAIkOAAIkMAAAMlwyIAAkMIkMAAIkNAAIAAEMIkLAAIkLAAIkOAAIAAEOIkMAAAMloYIkMAAIAAENIAAELIkNAAIkLAAIkLAAIkOAAIkMAAAMlskIkMAAIkNAAIkLAAIkLAAIAAEMIAAENIAAELIAAENIAAENIkOAAIkMAAAMlskIAAEMIAAENIAAELIkMAAIAAENIAAENIkNAAIAAEMIAAENIAAEMIkLAAIkLAAIkOAAIkMAAIAAkMAMlwyIAAEOAAB0+IAAEMIAAEOIAAEMIAAENIAAELIAAENIAAENIkLAAIAAEMIAAENIAAEMAkK0+IAAEMIAAEOIkOAAIAAEMIAAENIAAELIAAENIAAENIAAEMIAAENIAAEMAAB0+IkLAAIkOAAAABkLIkLAAIkOAAIkMAAAoYENIkMAAAABENIkLAAIkOAAAMlkLIkMAAIkNAAIkLAAAMlENIAAENIkMAAIAAEMIAAENIkNAAIkLAAIAAEMAMlENIkMAAIkNAAIkLAAAMlAAIAAENAEM0+IkLAAAMlMmIAAENIkMAAIAAEMIkNAAAMlMmIkMAAIkNAAIkLAAIkLAAIkOAAIkMAAAMlQzIAAEMIkMAAAMlIaIAAEM");
	this.shape_3.setTransform(80.525,134.325);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5,-4.4,172.4,274.09999999999997);


(lib.frame4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_4
	this.instance = new lib.damper("synched",0);
	this.instance.setTransform(94.6,201.1);

	this.instance_1 = new lib.damper("synched",0);
	this.instance_1.setTransform(40.5,201.1);

	this.instance_2 = new lib.damper("synched",0);
	this.instance_2.setTransform(67.45,147.35);

	this.instance_3 = new lib.damper("synched",0);
	this.instance_3.setTransform(119.35,147.35);

	this.instance_4 = new lib.damper("synched",0);
	this.instance_4.setTransform(94.6,66.7);

	this.instance_5 = new lib.damper("synched",0);
	this.instance_5.setTransform(40,66.8);

	this.instance_6 = new lib.damper("synched",0);
	this.instance_6.setTransform(93.8,227.95);

	this.instance_7 = new lib.damper("synched",0);
	this.instance_7.setTransform(67.45,120.5);

	this.instance_8 = new lib.damper("synched",0);
	this.instance_8.setTransform(93.8,39.85);

	this.instance_9 = new lib.damper("synched",0);
	this.instance_9.setTransform(40.3,227.9);

	this.instance_10 = new lib.damper("synched",0);
	this.instance_10.setTransform(121.4,119);

	this.instance_11 = new lib.damper("synched",0);
	this.instance_11.setTransform(40,39.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Layer_5
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#023D74").ss(10,2,2).p("Asf0nIYzAAAMh0nMAALAo3AsrUoMAAAgpP");
	this.shape.setTransform(81.1855,132.5895);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#023D74").ss(4,2,0,3).p("AMk0qMAAFApVAsoUlMAAAgpP");
	this.shape_1.setTransform(80.8517,132.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#023D74").ss(4,1,1).p("AsZAAIYzAA");
	this.shape_2.setTransform(80.6,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	// Layer_2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#003E74").ss(2,2,0,3).p("AMlwyIkMAAIAAEOIAAEMIkNAAIAAENIAAELIAAENIAAENIkLAAIAAEMIAAENIkLAAIkOAAIkMAAIAAkNIAAkMIAAkNIAAkNIAAkLIAAkNIAAkMIAAkOIAAkMIEMAAIAAEMIkMAAAIZ0+IAAEMIkNAAIAAEOIAAEMIkLAAIkLAAIkOAAIkMAAAMlwyIAAkMIkMAAIkNAAIAAEMIkLAAIkLAAIkOAAIAAEOIkMAAAMloYIkMAAIAAENIAAELIkNAAIkLAAIkLAAIkOAAIkMAAAMlskIkMAAIkNAAIkLAAIkLAAIAAEMIAAENIAAELIAAENIAAENIkOAAIkMAAAMlskIAAEMIAAENIAAELIkMAAIAAENIAAENIkNAAIAAEMIAAENIAAEMIkLAAIkLAAIkOAAIkMAAIAAkMAMlwyIAAEOAAB0+IAAEMIAAEOIAAEMIAAENIAAELIAAENIAAENIkLAAIAAEMIAAENIAAEMAkK0+IAAEMIAAEOIkOAAIAAEMIAAENIAAELIAAENIAAENIAAEMIAAENIAAEMAAB0+IkLAAIkOAAAABkLIkLAAIkOAAIkMAAAoYENIkMAAAABENIkLAAIkOAAAMlkLIkMAAIkNAAIkLAAAMlENIAAENIkMAAIAAEMIAAENIkNAAIkLAAIAAEMAMlENIkMAAIkNAAIkLAAAMlAAIAAENAEM0+IkLAAAMlMmIAAENIkMAAIAAEMIkNAAAMlMmIkMAAIkNAAIkLAAIkLAAIkOAAIkMAAAMlQzIAAEMIkMAAAMlIaIAAEM");
	this.shape_3.setTransform(80.525,134.325);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5,-4.4,172.4,274.09999999999997);


(lib.building_anim6 = function(mode,startPosition,loop,reversed) {
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
	this.frame = new lib.frame6();
	this.frame.name = "frame";
	this.frame.setTransform(80.5,268.6,1,1,0,0,0,80.5,268.6);

	this.timeline.addTween(cjs.Tween.get(this.frame).wait(1).to({regX:81.2,regY:132.6,skewX:0.4286,x:82.2,y:132.6},0).wait(1).to({skewX:0.8571,x:83.2},0).wait(1).to({skewX:1.2857,x:84.25},0).wait(1).to({skewX:1.7143,x:85.25,y:132.65},0).wait(1).to({skewX:2.1429,x:86.25},0).wait(1).to({skewX:2.5714,x:87.3,y:132.7},0).wait(1).to({skewX:3,x:88.3,y:132.75},0).wait(1).to({skewX:3.4286,x:89.3,y:132.8},0).wait(1).to({skewX:3.8571,x:90.35,y:132.9},0).wait(1).to({skewX:4.2857,x:91.35,y:133},0).wait(1).to({skewX:4.7143,x:92.35,y:133.05},0).wait(1).to({skewX:5.1429,x:93.35,y:133.1},0).wait(1).to({skewX:5.5714,x:94.4,y:133.2},0).wait(1).to({skewX:6,x:95.4,y:133.3},0).wait(1).to({skewX:5.6,x:94.45,y:133.2},0).wait(1).to({skewX:5.2,x:93.5,y:133.15},0).wait(1).to({skewX:4.8,x:92.55,y:133.05},0).wait(1).to({skewX:4.4,x:91.65,y:132.95},0).wait(1).to({skewX:4,x:90.65},0).wait(1).to({skewX:3.6,x:89.7,y:132.85},0).wait(1).to({skewX:3.2,x:88.75,y:132.8},0).wait(1).to({skewX:2.8,x:87.8,y:132.75},0).wait(1).to({skewX:2.4,x:86.85,y:132.7},0).wait(1).to({skewX:2,x:85.9,y:132.65},0).wait(1).to({skewX:1.6,x:85},0).wait(1).to({skewX:1.2,x:84,y:132.6},0).wait(1).to({skewX:0.8,x:83.1},0).wait(1).to({skewX:0.4,x:82.15},0).wait(1).to({skewX:0,x:81.2},0).wait(1).to({skewX:-0.4,x:80.25},0).wait(1).to({skewX:-0.8,x:79.3},0).wait(1).to({skewX:-1.2,x:78.4},0).wait(1).to({skewX:-1.6,x:77.4,y:132.65},0).wait(1).to({skewX:-2,x:76.5},0).wait(1).to({skewX:-2.4,x:75.55,y:132.7},0).wait(1).to({skewX:-2.8,x:74.6,y:132.75},0).wait(1).to({skewX:-3.2,x:73.65,y:132.8},0).wait(1).to({skewX:-3.6,x:72.7,y:132.85},0).wait(1).to({skewX:-4,x:71.75,y:132.95},0).wait(1).to({skewX:-4.4,x:70.75},0).wait(1).to({skewX:-4.8,x:69.85,y:133.05},0).wait(1).to({skewX:-5.2,x:68.9,y:133.15},0).wait(1).to({skewX:-5.6,x:67.95,y:133.2},0).wait(1).to({skewX:-6,x:67,y:133.3},0).wait(1).to({skewX:-5.6143,x:67.9,y:133.2},0).wait(1).to({skewX:-5.2286,x:68.85,y:133.15},0).wait(1).to({skewX:-4.8429,x:69.75,y:133.1},0).wait(1).to({skewX:-4.4571,x:70.65,y:133},0).wait(1).to({skewX:-4.0714,x:71.55,y:132.9},0).wait(1).to({skewX:-3.6857,x:72.45,y:132.85},0).wait(1).to({skewX:-3.3,x:73.4,y:132.8},0).wait(1).to({skewX:-2.9143,x:74.3,y:132.75},0).wait(1).to({skewX:-2.5286,x:75.2,y:132.7},0).wait(1).to({skewX:-2.1429,x:76.15,y:132.65},0).wait(1).to({skewX:-1.7571,x:77.05},0).wait(1).to({skewX:-1.3714,x:77.95,y:132.6},0).wait(1).to({skewX:-0.9857,x:78.9},0).wait(1).to({skewX:-0.6,x:79.8},0).wait(1).to({skewX:-0.2143,x:80.7},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33.8,-6,228.39999999999998,277.3);


(lib.building_anim5 = function(mode,startPosition,loop,reversed) {
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
	this.frame = new lib.frame5();
	this.frame.name = "frame";
	this.frame.setTransform(80.5,268.6,1,1,0,0,0,80.5,268.6);

	this.timeline.addTween(cjs.Tween.get(this.frame).wait(1).to({regX:81.2,regY:132.6,skewX:0.25,x:81.75,y:132.6},0).wait(1).to({skewX:0.5,x:82.35},0).wait(1).to({skewX:0.75,x:82.95},0).wait(1).to({skewX:1,x:83.55},0).wait(1).to({skewX:1.25,x:84.15},0).wait(1).to({skewX:1.5,x:84.75},0).wait(1).to({skewX:1.75,x:85.35,y:132.65},0).wait(1).to({skewX:2,x:85.9},0).wait(1).to({skewX:2.25,x:86.5,y:132.7},0).wait(1).to({skewX:2.5,x:87.1},0).wait(1).to({skewX:2.75,x:87.7,y:132.75},0).wait(1).to({skewX:3,x:88.3},0).wait(1).to({skewX:2.7692,x:87.75},0).wait(1).to({skewX:2.5385,x:87.2,y:132.7},0).wait(1).to({skewX:2.3077,x:86.65},0).wait(1).to({skewX:2.0769,x:86.1,y:132.65},0).wait(1).to({skewX:1.8462,x:85.6},0).wait(1).to({skewX:1.6154,x:85},0).wait(1).to({skewX:1.3846,x:84.45,y:132.6},0).wait(1).to({skewX:1.1538,x:83.95},0).wait(1).to({skewX:0.9231,x:83.35},0).wait(1).to({skewX:0.6923,x:82.8},0).wait(1).to({skewX:0.4615,x:82.3},0).wait(1).to({skewX:0.2308,x:81.7},0).wait(1).to({skewX:0,x:81.2},0).wait(1).to({skewX:-0.2308,x:80.7},0).wait(1).to({skewX:-0.4615,x:80.1},0).wait(1).to({skewX:-0.6923,x:79.6},0).wait(1).to({skewX:-0.9231,x:79.05},0).wait(1).to({skewX:-1.1538,x:78.45},0).wait(1).to({skewX:-1.3846,x:77.95},0).wait(1).to({skewX:-1.6154,x:77.4,y:132.65},0).wait(1).to({skewX:-1.8462,x:76.8},0).wait(1).to({skewX:-2.0769,x:76.3},0).wait(1).to({skewX:-2.3077,x:75.75,y:132.7},0).wait(1).to({skewX:-2.5385,x:75.2},0).wait(1).to({skewX:-2.7692,x:74.65,y:132.75},0).wait(1).to({skewX:-3,x:74.1},0).wait(1).to({skewX:-2.7857,x:74.6},0).wait(1).to({skewX:-2.5714,x:75.1,y:132.7},0).wait(1).to({skewX:-2.3571,x:75.65},0).wait(1).to({skewX:-2.1429,x:76.15,y:132.65},0).wait(1).to({skewX:-1.9286,x:76.65},0).wait(1).to({skewX:-1.7143,x:77.15},0).wait(1).to({skewX:-1.5,x:77.65,y:132.6},0).wait(1).to({skewX:-1.2857,x:78.15},0).wait(1).to({skewX:-1.0714,x:78.7},0).wait(1).to({skewX:-0.8571,x:79.2},0).wait(1).to({skewX:-0.6429,x:79.7},0).wait(1).to({skewX:-0.4286,x:80.2},0).wait(1).to({skewX:-0.2143,x:80.7},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.4,-6,199.8,277.3);


(lib.building_anim4 = function(mode,startPosition,loop,reversed) {
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
	this.frame = new lib.frame4();
	this.frame.name = "frame";
	this.frame.setTransform(80.5,268.6,1,1,0,0,0,80.5,268.6);

	this.timeline.addTween(cjs.Tween.get(this.frame).wait(1).to({regX:81.2,regY:132.6,skewX:0.15,x:81.55,y:132.6},0).wait(1).to({skewX:0.3,x:81.9},0).wait(1).to({skewX:0.45,x:82.25},0).wait(1).to({skewX:0.6,x:82.6},0).wait(1).to({skewX:0.75,x:82.95},0).wait(1).to({skewX:0.9,x:83.3},0).wait(1).to({skewX:1.05,x:83.65},0).wait(1).to({skewX:1.2,x:84},0).wait(1).to({skewX:1.35,x:84.4},0).wait(1).to({skewX:1.5,x:84.75},0).wait(1).to({skewX:1.35,x:84.4},0).wait(1).to({skewX:1.2,x:84},0).wait(1).to({skewX:1.05,x:83.65},0).wait(1).to({skewX:0.9,x:83.3},0).wait(1).to({skewX:0.75,x:82.95},0).wait(1).to({skewX:0.6,x:82.6},0).wait(1).to({skewX:0.45,x:82.25},0).wait(1).to({skewX:0.3,x:81.9},0).wait(1).to({skewX:0.15,x:81.55},0).wait(1).to({skewX:0,x:81.2},0).wait(1).to({skewX:-0.1364,x:80.9},0).wait(1).to({skewX:-0.2727,x:80.6},0).wait(1).to({skewX:-0.4091,x:80.25},0).wait(1).to({skewX:-0.5455,x:79.9},0).wait(1).to({skewX:-0.6818,x:79.65},0).wait(1).to({skewX:-0.8182,x:79.3},0).wait(1).to({skewX:-0.9545,x:78.95},0).wait(1).to({skewX:-1.0909,x:78.6},0).wait(1).to({skewX:-1.2273,x:78.3},0).wait(1).to({skewX:-1.3636,x:78},0).wait(1).to({skewX:-1.5,x:77.65},0).wait(1).to({skewX:-1.3333,x:78.05},0).wait(1).to({skewX:-1.1667,x:78.45},0).wait(1).to({skewX:-1,x:78.85},0).wait(1).to({skewX:-0.8333,x:79.25},0).wait(1).to({skewX:-0.6667,x:79.65},0).wait(1).to({skewX:-0.5,x:80.05},0).wait(1).to({skewX:-0.3333,x:80.4},0).wait(1).to({skewX:-0.1667,x:80.85},0).wait(1).to({skewX:0,x:81.2},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.2,-6,185.5,277.3);


(lib.Symbol22 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_15
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#003E74").ss(3,2,0,3).p("A0FAAMAoLAAA");
	this.shape.setTransform(-38.35,583.75);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_13
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AgOAcQgFgDgDgHQgDgHAAgLQAAgLADgGQADgHAFgDQAGgDAJAAQANAAAGAFQAGAFAAAJQAAAIgEAEQgDAEgHAAIgaAAQAAAHADAEQABADAEACQAEABAFAAIAVgBIABAGQgEACgGABIgNABQgJAAgHgDgAgIgTQgDABgCAFQgBAEgBAHIAYAAQAGAAABgJQAAgFgEgDQgDgCgIAAQgFAAgEACg");
	this.shape_1.setTransform(-8.15,597.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s().p("AgHAnQgEgEgBgHIAAhFIALAAIAABCQAAAFABABQABACAEAAIAGAAIABAIIgEABIgGAAQgGAAgDgDg");
	this.shape_2.setTransform(-12.75,595.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#666666").s().p("AgMAqQgIgBgGgDIAAhQIALAAIAAAWQAAAIgCAFQALgLAMAAQAKAAAGAIQAEAHAAAPQABAKgDAHQgDAHgFADQgGAEgKAAIgMgBgAgFgHIgLAHIABAgQAIACAHAAQAGAAADgCQAEgCABgFQABgFABgIIgBgMQgBgFgEgCQgCgCgHAAQgDAAgDACg");
	this.shape_3.setTransform(-18.2,595.825);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#666666").s().p("AgEAqIAAg6IAJAAIAAA6gAgCgbQAAAAgBAAQAAgBgBAAQAAgBAAAAQgBgBAAgBIAAgGIABgDIACgBIAEAAQABAAABAAQAAABABAAQAAABAAAAQAAABAAABIAAAGQAAABAAABQAAAAAAABQgBAAAAABQgBAAgBAAg");
	this.shape_4.setTransform(-23.2,595.775);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#666666").s().p("AASAdIgRgaIgBAAIgRAaIgLAAIAUgdIgTgcIALAAIAPAYIACAAIAPgYIALAAIgSAcIAUAdg");
	this.shape_5.setTransform(-27.825,597.025);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#666666").s().p("AgOAcQgGgDgCgHQgDgHAAgLQAAgLADgGQACgHAGgDQAGgDAJAAQANAAAGAFQAGAFAAAJQAAAIgDAEQgEAEgHAAIgaAAQABAHACAEQACADADACQAEABAFAAIAVgBIABAGQgEACgGABIgNABQgJAAgHgDgAgIgTQgDABgBAFQgCAEgBAHIAYAAQAHAAAAgJQAAgFgEgDQgDgCgIAAQgFAAgEACg");
	this.shape_6.setTransform(-34.15,597.025);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#666666").s().p("AgIAnQgDgEAAgHIAAhFIAKAAIAABCQAAAFABABQABACAFAAIAFAAIABAIIgEABIgGAAQgGAAgEgDg");
	this.shape_7.setTransform(-38.75,595.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#666666").s().p("AgLArIAAgyIgKAAIAAgHIAKgBIAAgKQAAgIAEgEQAFgFAIAAIAQABIgBAIIgMAAQgGAAgCABQgBADgBAFIAAAJIASAAIAAAIIgSAAIAAAyg");
	this.shape_8.setTransform(-42.95,595.65);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#666666").s().p("AgNAcQgGgDgDgHQgDgHAAgLQAAgLADgGQADgHAGgDQAFgDAJAAQANAAAGAFQAGAFAAAJQAAAIgEAEQgDAEgHAAIgaAAQAAAHACAEQACADAEACQAEABAFAAIAUgBIABAGQgDACgHABIgMABQgJAAgGgDgAgHgTQgEABgCAFQgBAEAAAHIAYAAQAFAAAAgJQAAgFgCgDQgEgCgHAAQgGAAgDACg");
	this.shape_9.setTransform(-51.3,597.025);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#666666").s().p("AgRAeIAAg6IAIAAIABAKQAMgLAMAAIACAAIgBAJIgDAAQgFAAgFACIgLAGIAAAqg");
	this.shape_10.setTransform(-56.575,596.95);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#666666").s().p("AgPAcQgGgDgCgHQgEgHAAgLQAAgKAEgHQACgHAGgDQAGgDAJAAQALAAAFADQAGADADAHQACAHAAAKQAAALgCAHQgDAHgGADQgFADgLAAQgJAAgGgDgAgJgTQgEACgBAFQgCAEAAAIQAAAJACAEQABAFAEACQADACAGAAQAGAAAEgCQAEgCABgFQACgEAAgJQAAgIgCgEQgBgFgEgCQgEgCgGAAQgGAAgDACg");
	this.shape_11.setTransform(-62.75,597.025);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#666666").s().p("AAhApIgDhIIgCAAIgTA8QgBADgDAAIgJAAQgEAAgBgDIgSg8IgDAAIgCBIIgLAAIADhNQAAgEAFAAIAMAAQADAAABADIAQAyIACAHIABAEIABAAIABgEIACgHIAPgyQABgDAEAAIAMAAQAAAAABAAQAAAAABAAQAAAAAAAAQABABAAAAIABADIAEBNg");
	this.shape_12.setTransform(-71.375,595.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	// Layer_12
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#013D74").s().p("AgdAyIAAhhIANAAIABAQQAWgSATAAIAEAAIgCAQIgFAAQgIAAgHADIgUAJIAABHg");
	this.shape_13.setTransform(-268.6,540);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#013D74").s().p("AgXAuQgKgFgFgLQgEgLAAgTQAAgSAEgLQAFgLAJgFQAKgFAPAAQAWAAAKAIQAKAIAAAQQAAANgFAGQgGAHgMAAIgsAAQABAMADAGQADAGAHACQAGADAJAAQARAAARgDIACAMQgGACgLACIgVABQgQAAgKgFgAgNghQgGADgDAHQgCAHgBAMIApAAQAKAAAAgOQAAgKgFgEQgGgEgNAAQgJAAgGADg");
	this.shape_14.setTransform(-278.475,540.125);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#013D74").s().p("AgsBGIAAiJIAOAAIACAQQAIgIALgFQAKgFAKAAQASAAAIANQAIANAAAaQAAASgEAKQgEALgIAGQgIAEgNAAQgSAAgRgKIAAAUIAAAcgAgJgzQgHAEgLAIIAAAzIAJACIAMADIAKABQAIAAAFgEQAGgCACgJQACgGAAgOQAAgOgCgIQgCgIgFgEQgFgDgHAAQgHAAgIADg");
	this.shape_15.setTransform(-289.475,542);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#013D74").s().p("AA4AyIAAhDQgBgJgDgFQgEgDgIAAQgHAAgGADQgHADgMAIIAABGIgPAAIAAhDQAAgKgEgEQgDgDgIAAQgHAAgHADQgGADgMAIIAABGIgRAAIAAhhIAOAAIABAQQAKgJAKgFQAKgEAKAAQATAAAEASQAUgSATAAQANAAAHAHQAGAHAAANIAABIg");
	this.shape_16.setTransform(-304.225,540);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#013D74").s().p("AghArQgIgGAAgOIAAgKQgBgLAIgGQAHgGANAAIAnAAIAAgJQABgJgFgEQgEgDgMAAQgNAAgcACIgBgNQAbgEATAAQARAAAIAIQAJAGgBARIAABEIgNAAIgCgQQgHAHgLAGQgJAFgMAAQgOAAgHgIgAgVAFQgDAEAAAGIAAAGQAAAJAEADQADADAJAAQAHAAAJgEQAJgDAIgIIAAgTIglAAQgGAAgDADg");
	this.shape_17.setTransform(-318.7,540.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#013D74").s().p("AgyBFIAAiJQAagCAWAAQAUAAAMAHQALAGAFAQQAGAPgBAaQABAbgGAPQgFAPgLAHQgMAHgUAAQgWAAgagCgAghg2IAABtIAfABQANAAAIgGQAHgFAEgMQADgMAAgVQAAgUgDgMQgEgMgHgFQgIgGgNAAg");
	this.shape_18.setTransform(-330.3,538.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#023D74").ss(0.5,2,0,3).p("AAADWIAAmr");
	this.shape_19.setTransform(-345.55,537.425);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#023D74").ss(2,2,0,3).p("AqmjVIHVAAIN3AAIAAGrIt3AAInVAAg");
	this.shape_20.setTransform(-324.55,537.425);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(0.5,2,2).p("ABdhzQgDgHAAgIQAAgRANgNQAMgMARAAQARAAANAMQANANAAASQAAARgNAMQgNANgRAAQgEAAgEgBQgMgCgJgKQgHgHgDgIgAAdg2IgNgOIh0BtIAPAOIAcAcIAPAQIB0hsIgRgQIBDg/AAdg2IAcAdAh4BaQAKACAHAIQAIAHADAJQACAHAAAHQAAARgNANQgMANgRAAQgRAAgNgNQgMgNAAgRQAAgRAMgNQANgMARAAQAGAAAGACIAjgjAhcB0IAjghAAdg2IBAg9");
	this.shape_21.setTransform(-370.325,537.725);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["#999999","#CCCCCC"],[0,1],-1.2,-1.3,1.3,1.2).s().p("AgNAPQgIgIgJgDIAhghIAdAcIgiAfQgEgIgHgHg");
	this.shape_22.setTransform(-379.3,546.275);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.rf(["#333333","#666666"],[0,1],-3.9,0.7,0,-3.9,0.7,5.9).s().p("AgdAeQgMgNAAgRQAAgQAMgNQANgNAQAAQAGAAAGACQAJADAIAIQAHAHAEAIQACAIAAAGQAAARgNANQgMANgRAAQgQAAgNgNg");
	this.shape_23.setTransform(-383.6,550.75);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.lf(["#333333","#666666"],[0,1],-3.1,-3.2,3.2,3.1).s().p("AgsBEIgcgcIgPgNIB0huIAOAOIAcAdIARARIh0Brg");
	this.shape_24.setTransform(-371.65,539.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["#999999","#CCCCCC"],[0,1],-1.5,-1.6,1.7,1.6).s().p("AguAQIA+g8QADAIAHAHQAKAKALACIhBA+g");
	this.shape_25.setTransform(-362.675,530.625);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.rf(["#333333","#666666"],[0,1],2.6,-1.2,0,2.6,-1.2,6.9).s().p("AgIApQgLgCgKgJQgHgIgDgIQgCgHAAgHQAAgRAMgNQANgMAQABQARgBAMAMQANAOAAAQQAAARgNANQgMANgRgBIgIgBg");
	this.shape_26.setTransform(-357.075,524.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13}]}).wait(1));

	// Layer_3 copy
	this.graphs = new lib.graphs();
	this.graphs.name = "graphs";
	this.graphs.setTransform(-31.95,174.65,1,1,0,0,0,379.7,89.9);

	this.notify = new lib.notifyicon();
	this.notify.name = "notify";
	this.notify.setTransform(135.35,390.25,1,1,0,0,0,11.3,11.3);

	this.btn1 = new lib.StartBtn();
	this.btn1.name = "btn1";
	this.btn1.setTransform(219.15,390.8,1.5255,1.5255);
	new cjs.ButtonHelper(this.btn1, 0, 1, 2, false, new lib.StartBtn(), 3);

	this.btn2 = new lib.StartBtn();
	this.btn2.name = "btn2";
	this.btn2.setTransform(219.15,444.3,1.5255,1.5255);
	new cjs.ButtonHelper(this.btn2, 0, 1, 2, false, new lib.StartBtn(), 3);

	this.btn3 = new lib.StartBtn();
	this.btn3.name = "btn3";
	this.btn3.setTransform(219.15,497.75,1.5255,1.5255);
	new cjs.ButtonHelper(this.btn3, 0, 1, 2, false, new lib.StartBtn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn3},{t:this.btn2},{t:this.btn1},{t:this.notify},{t:this.graphs}]}).wait(1));

	// building20
	this.building20 = new lib.building_anim4();
	this.building20.name = "building20";
	this.building20.setTransform(-38.9,448.9,1,1,0,0,0,80.9,133.8);

	this.timeline.addTween(cjs.Tween.get(this.building20).wait(1));

	// building10
	this.building10 = new lib.building_anim5();
	this.building10.name = "building10";
	this.building10.setTransform(-39.2,448.9,1,1,0,0,0,80.6,133.8);

	this.timeline.addTween(cjs.Tween.get(this.building10).wait(1));

	// building5
	this.building5 = new lib.building_anim6();
	this.building5.name = "building5";
	this.building5.setTransform(-39.3,583.7,1,1,0,0,0,80.5,268.6);

	this.timeline.addTween(cjs.Tween.get(this.building5).wait(1));

	// Layer_6
	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#999999").s().p("AgGCdQgDgDAAgEIAAg8QAAgEADgDQADgDADAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgDAAgDgDgAgGAlQgDgDAAgEIAAg7QAAgEADgDQADgDADAAQAEAAADADQADADAAAEIAAA7QAAAEgDADQgDADgEAAQgDAAgDgDgAgGhSQgDgDAAgEIAAg8QAAgEADgDQADgDADAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_27.setTransform(-119.85,332.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_27).wait(1));

	// Layer_7
	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#999999").s().p("AgGCdQgDgDAAgEIAAg8QAAgEADgDQADgDADAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgDAAgDgDgAgGAlQgDgDAAgEIAAg7QAAgEADgDQADgDADAAQAEAAADADQADADAAAEIAAA7QAAAEgDADQgDADgEAAQgDAAgDgDgAgGhSQgDgDAAgEIAAg8QAAgEADgDQADgDADAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_28.setTransform(40.85,332.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_28).wait(1));

	// Layer_4
	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#999999").s().p("AMcSZQgCgDAAgEIAAg8QAAgEACgDQADgDAFAAQAEAAADADQACADAAAEIAAA8QAAAEgCADQgDADgEAAQgFAAgDgDgAspSZQgDgDgBgEIAAg8QABgEADgDQACgDAEAAQAFAAACADQADADAAAEIAAA8QAAAEgDADQgCADgFAAQgEAAgCgDgAMcQhQgCgDAAgEIAAg8QAAgEACgDQADgDAFAAQAEAAADADQACADAAAEIAAA8QAAAEgCADQgDADgEAAQgFAAgDgDgAspQhQgDgDgBgEIAAg8QABgEADgDQACgDAEAAQAFAAACADQADADAAAEIAAA8QAAAEgDADQgCADgFAAQgEAAgCgDgAMcOpQgCgDAAgEIAAg8QAAgEACgDQADgDAFAAQAEAAADADQACADAAAEIAAA8QAAAEgCADQgDADgEAAQgFAAgDgDgAspOpQgDgDgBgEIAAg8QABgEADgDQACgDAEAAQAFAAACADQADADAAAEIAAA8QAAAEgDADQgCADgFAAQgEAAgCgDgAMcMxQgCgDAAgEIAAg8QAAgEACgDQADgDAFAAQAEAAADADQACADAAAEIAAA8QAAAEgCADQgDADgEAAQgFAAgDgDgAspMxQgDgDgBgEIAAg8QABgEADgDQACgDAEAAQAFAAACADQADADAAAEIAAA8QAAAEgDADQgCADgFAAQgEAAgCgDgAMcK5QgCgDAAgEIAAg8QAAgEACgDQADgDAFAAQAEAAADADQACADAAAEIAAA8QAAAEgCADQgDADgEAAQgFAAgDgDgAspK5QgDgDgBgEIAAg8QABgEADgDQACgDAEAAQAFAAACADQADADAAAEIAAA8QAAAEgDADQgCADgFAAQgEAAgCgDgAMcJBQgCgDAAgEIAAg8QAAgEACgDQADgDAFAAQAEAAADADQACADAAAEIAAA8QAAAEgCADQgDADgEAAQgFAAgDgDgAspJBQgDgDgBgEIAAg8QABgEADgDQACgDAEAAQAFAAACADQADADAAAEIAAA8QAAAEgDADQgCADgFAAQgEAAgCgDgAMcHJQgCgDAAgEIAAg8QAAgEACgDQADgDAFAAQAEAAADADQACADAAAEIAAA8QAAAEgCADQgDADgEAAQgFAAgDgDgAspHJQgDgDgBgEIAAg8QABgEADgDQACgDAEAAQAFAAACADQADADAAAEIAAA8QAAAEgDADQgCADgFAAQgEAAgCgDgAMcFRQgCgDAAgEIAAg8QAAgEACgDQADgDAFAAQAEAAADADQACADAAAEIAAA8QAAAEgCADQgDADgEAAQgFAAgDgDgAspFRQgDgDgBgEIAAg8QABgEADgDQACgDAEAAQAFAAACADQADADAAAEIAAA8QAAAEgDADQgCADgFAAQgEAAgCgDgAMcDZQgCgDAAgEIAAg8QAAgEACgDQADgDAFAAQAEAAADADQACADAAAEIAAA8QAAAEgCADQgDADgEAAQgFAAgDgDgAspDZQgDgDgBgEIAAg8QABgEADgDQACgDAEAAQAFAAACADQADADAAAEIAAA8QAAAEgDADQgCADgFAAQgEAAgCgDgAMcBhQgCgDAAgEIAAg8QAAgEACgDQADgDAFAAQAEAAADADQACADAAAEIAAA8QAAAEgCADQgDADgEAAQgFAAgDgDgAspBhQgDgDgBgEIAAg8QABgEADgDQACgDAEAAQAFAAACADQADADAAAEIAAA8QAAAEgDADQgCADgFAAQgEAAgCgDgAMcgWQgCgDAAgEIAAg8QAAgEACgDQADgDAFAAQAEAAADADQACADAAAEIAAA8QAAAEgCADQgDADgEAAQgFAAgDgDgAspgWQgDgDgBgEIAAg8QABgEADgDQACgDAEAAQAFAAACADQADADAAAEIAAA8QAAAEgDADQgCADgFAAQgEAAgCgDgAMciOQgCgDAAgEIAAg8QAAgEACgDQADgDAFAAQAEAAADADQACADAAAEIAAA8QAAAEgCADQgDADgEAAQgFAAgDgDgAspiOQgDgDgBgEIAAg8QABgEADgDQACgDAEAAQAFAAACADQADADAAAEIAAA8QAAAEgDADQgCADgFAAQgEAAgCgDgAMckGQgCgDAAgEIAAg8QAAgEACgDQADgDAFAAQAEAAADADQACADAAAEIAAA8QAAAEgCADQgDADgEAAQgFAAgDgDgAspkGQgDgDgBgEIAAg8QABgEADgDQACgDAEAAQAFAAACADQADADAAAEIAAA8QAAAEgDADQgCADgFAAQgEAAgCgDgAMcl+QgCgDAAgEIAAg8QAAgEACgDQADgDAFAAQAEAAADADQACADAAAEIAAA8QAAAEgCADQgDADgEAAQgFAAgDgDgAspl+QgDgDgBgEIAAg8QABgEADgDQACgDAEAAQAFAAACADQADADAAAEIAAA8QAAAEgDADQgCADgFAAQgEAAgCgDgAMcn2QgCgDAAgEIAAg8QAAgEACgDQADgDAFAAQAEAAADADQACADAAAEIAAA8QAAAEgCADQgDADgEAAQgFAAgDgDgAspn2QgDgDgBgEIAAg8QABgEADgDQACgDAEAAQAFAAACADQADADAAAEIAAA8QAAAEgDADQgCADgFAAQgEAAgCgDgAMcpuQgCgDAAgEIAAg8QAAgEACgDQADgDAFAAQAEAAADADQACADAAAEIAAA8QAAAEgCADQgDADgEAAQgFAAgDgDgAsppuQgDgDgBgEIAAg8QABgEADgDQACgDAEAAQAFAAACADQADADAAAEIAAA8QAAAEgDADQgCADgFAAQgEAAgCgDgAMcrmQgCgDAAgEIAAg8QAAgEACgDQADgDAFAAQAEAAADADQACADAAAEIAAA8QAAAEgCADQgDADgEAAQgFAAgDgDgAsprmQgDgDgBgEIAAg8QABgEADgDQACgDAEAAQAFAAACADQADADAAAEIAAA8QAAAEgDADQgCADgFAAQgEAAgCgDgAMcteQgCgDAAgEIAAg8QAAgEACgDQADgDAFAAQAEAAADADQACADAAAEIAAA8QAAAEgCADQgDADgEAAQgFAAgDgDgAspteQgDgDgBgEIAAg8QABgEADgDQACgDAEAAQAFAAACADQADADAAAEIAAA8QAAAEgDADQgCADgFAAQgEAAgCgDgAMcvWQgCgDAAgEIAAg8QAAgEACgDQADgDAFAAQAEAAADADQACADAAAEIAAA8QAAAEgCADQgDADgEAAQgFAAgDgDgAspvWQgDgDgBgEIAAg8QABgEADgDQACgDAEAAQAFAAACADQADADAAAEIAAA8QAAAEgDADQgCADgFAAQgEAAgCgDgAMcxOQgCgDAAgEIAAg8QAAgEACgDQADgDAFAAQAEAAADADQACADAAAEIAAA8QAAAEgCADQgDADgEAAQgFAAgDgDgAspxOQgDgDgBgEIAAg8QABgEADgDQACgDAEAAQAFAAACADQADADAAAEIAAA8QAAAEgDADQgCADgFAAQgEAAgCgDg");
	this.shape_29.setTransform(-39.5,466.75);

	this.timeline.addTween(cjs.Tween.get(this.shape_29).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol22, new cjs.Rectangle(-412.1,79.6,760.4000000000001,524.8), null);


// stage content:
(lib.retrofit_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.graph1.notify.gotoAndStop(0)
		this.graph1.graphs.gotoAndStop(0)
		this.graph1.building5.visible = 1;
		this.graph1.building10.visible = 0;
		this.graph1.building20.visible = 0;
		this.graph1.btn1.txt.text = "Damping 5%";
		this.graph1.btn1.addEventListener("click", btn1function.bind(this));
		function btn1function() {
			this.graph1.notify.gotoAndStop(0)
			this.graph1.graphs.gotoAndStop(0)
			this.graph1.building5.visible = 1;
			this.graph1.building10.visible = 0;
			this.graph1.building20.visible = 0;
		
		}
		this.graph1.btn2.txt.text = "Damping 10%";
		this.graph1.btn2.addEventListener("click", btn2function.bind(this));
		function btn2function() {
			this.graph1.notify.gotoAndStop(1)
			this.graph1.graphs.gotoAndStop(1)
			this.graph1.building5.visible = 0;
			this.graph1.building10.visible = 1;
			this.graph1.building20.visible = 0;
		}
		this.graph1.btn3.txt.text = "Damping 20%";
		this.graph1.btn3.addEventListener("click", btn3function.bind(this));
		function btn3function() {
			this.graph1.notify.gotoAndStop(2)
			this.graph1.graphs.gotoAndStop(2)
			this.graph1.building5.visible = 0;
			this.graph1.building10.visible = 0;
			this.graph1.building20.visible = 1;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// JS
	this.graph1 = new lib.Symbol22();
	this.graph1.name = "graph1";
	this.graph1.setTransform(402.05,103.7,0.5636,0.5636,0,0,0,174.8,132.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AAAAGQAAAAAAAAQAAAAgBAAQAAAAAAgBQgBAAAAgBQgCgCABgDQABgEACgBQAAAAAAABQABAAABAAQAAAAABABQAAAAABAAIABAFQAAABAAAAQgBABAAAAQAAABAAAAQAAAAgBAAQAAABAAAAQgBABAAAAQAAAAgBAAQAAABAAAAIgBgBg");
	this.shape.setTransform(126.4857,53.4042);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.graph1}]}).wait(1));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#003E74").s().p("AgKAOIAPgFIAEgBIAAgBIgEgBIgNgDIgBAAIgBgBIAAgDIABgBIABgBIANgDIACAAIACAAIAAgBIgBgBIgDAAIgPgEIAAgFIAUAHIAAAAIABABIAAAEIgBABIAAABIgOADIgCAAIgCAAIAAAAIABAAIADABIAOAEIAAAAIABABIAAADIgBACIAAAAIgUAGg");
	this.shape_1.setTransform(296.05,153.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#003E74").s().p("AgGAJQgCgBgBgCIgBgGIABgFIADgDIAGgBIAHABQABAAAAAAQABABAAAAQABAAAAABQAAAAAAABIABAFIgBAGQAAAAAAABQAAAAgBABQAAAAgBABQAAAAgBAAIgHABIgGgBgAgEgFQAAAAgBABQAAAAgBAAQAAAAAAABQAAAAgBAAIAAADIAAAEQABAAAAAAQAAABAAAAQABAAAAAAQABABAAAAIAEAAIAFAAQAAAAABgBQAAAAABAAQAAAAAAgBQAAAAABAAIABgEIgBgDQgBAAAAAAQAAgBAAAAQgBAAAAAAQgBgBAAAAIgFAAIgEAAg");
	this.shape_2.setTransform(296.05,156.925);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#003E74").s().p("AgPAJIAAgDIAYAAIACgBIABgDIAAgKIADAAIABALQAAABgBAAQAAABAAABQAAAAAAABQgBAAAAAAQAAABgBAAQAAAAgBABQAAAAgBAAQgBAAgBAAg");
	this.shape_3.setTransform(295.6,159.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#003E74").s().p("AgQgGIAAgDIAhAQIAAAEg");
	this.shape_4.setTransform(295.75,162.65);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#003E74").s().p("AgPAFIAAgEIAYAAIACgBIABgBIAAgCIAEgBIAAACIAAACQAAAAAAAAQAAABAAABQgBAAAAAAQAAABAAAAQgBABAAAAQgBAAAAAAQgBABAAAAQgBAAgBAAg");
	this.shape_5.setTransform(295.6,165.275);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#003E74").s().p("AgPAFIAAgEIAYAAIACgBIABgBIAAgCIAEgBIAAACIAAACQAAAAAAAAQAAABAAABQgBAAAAAAQAAABAAAAQgBABAAAAQgBAAAAAAQgBABAAAAQgBAAgBAAg");
	this.shape_6.setTransform(295.6,166.625);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#003E74").s().p("AADAJQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAgBAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAgBAAgBIAAgIIgDAAIgDABIAAAEIAAAJIgCAAIgBgKQAAgEABgCQABgBAEAAIAPAAIAAACIgDABIACAEIABAEQABADgCACQAAAAgBABQgBAAAAAAQgBAAAAAAQgBAAAAAAgAABADIAAACIACABIACAAIADgBIAAgDIAAgCIgDgFIgEAAg");
	this.shape_7.setTransform(296.05,168.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#003E74").s().p("AgKAQIAAgDIAEAAIgDgFIgBgEQAAgEAEgBQgEgEAAgEQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAQABAAABAAIAPAAIAAADIgOAAIgDABIgBADIABADIACAEIAPAAIAAADIgOAAIgDABIgBACIABADIACAEIAPAAIAAAEg");
	this.shape_8.setTransform(296.025,171.875);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#003E74").s().p("AgNAJIgCgDIAAgGIABgIIADAAIAAAIIAAAEIABACIADAAIADgBIADgDIABgFQAAgDABgCQADgBAEAAIAFABIADADIAAAFIgBAKIgDAAIAAgEIAAgFIAAgDIgBgDIgDAAIgEAAIgBABIgBADIgCAFQAAADgBACQgCABgEAAIgGgBg");
	this.shape_9.setTransform(295.6,175.075);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#003E74").s().p("AgPAKIAAgEIAJAAIAEAAIgDgFIgBgEQAAAAAAgBQAAgBABAAQAAgBAAAAQAAgBABAAQAAgBABAAQAAAAABAAQAAgBABAAQAAAAABAAIAQAAIAAAEIgQAAIgCABIAAACIAAADIACAFIAQAAIAAAEg");
	this.shape_10.setTransform(295.475,36.975);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#003E74").s().p("AAGALIgCgEIgCABIgBABIgBgBIgCgBIgCACIgEABIgEgBIgCgDIgBgFIABgEIAAgHIACAAIAAAEIAEgCQAEABACACQABACAAAEIAAAEIABABIABgBIABgBIABgHQAAgBAAgBQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAABAAQAAAAABgBQAAAAABAAQAAAAABAAIAEABQABAAAAABQAAAAABAAQAAABAAAAQAAABAAABIABAEIgBAHIgCADIgEABIgDAAgAAGgEIAAACIgBAHIACACIACAAIACAAIABgCIABgFIgBgDIgBgBIgCgBIgCAAIgBABgAgLgDIgBAEIABAEIADABIADgBIABgEQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAgBgBQAAAAAAAAQgBAAAAgBQAAAAgBAAQAAAAgBAAIgDABg");
	this.shape_11.setTransform(296.375,39.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#003E74").s().p("AgFACIAAgDIAVAAIAAADgAgNACIgBgBIgBAAIAAgBQAAAAAAAAQAAgBABAAQAAAAAAAAQAAAAABAAIACAAIABABIAAABIgBABg");
	this.shape_12.setTransform(295.475,41.35);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#003E74").s().p("AgPALIAAgEIANAAIAAgNIgNAAIAAgEIAfAAIAAAEIgPAAIAAANIAPAAIAAAEg");
	this.shape_13.setTransform(295.5,43.35);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#003E74").s().p("AgQgGIAAgDIAhAQIAAAEg");
	this.shape_14.setTransform(295.65,47);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#003E74").s().p("AgGAJQgBAAAAgBQgBAAAAAAQgBgBAAAAQAAgBAAAAIgBgGQAAgEACgCQABgDADAAQAEAAABACQAAAAAAAAQAAABABAAQAAABAAAAQAAABAAABIAAAJIAEgBIACgCIABgDIgBgIIACAAIABAEIAAAEIgBAFQgBADgCABIgHABIgGgBgAgHgEIAAAEIAAADIACACIAFABIAAgIQAAgBAAAAQAAgBgBAAQAAAAgBgBQgBAAgBAAIgDABg");
	this.shape_15.setTransform(295.95,50.325);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#003E74").s().p("AAGALIgCgEIgCACIgBAAIgBAAIgCgCIgCADIgEAAIgEAAIgCgEIgBgFIABgEIAAgHIACAAIAAAEIAEgBQAEAAACACQABACAAAEIAAAEIABABIABgBIABgBIABgIQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAABAAQAAgBABAAQAAAAABgBQAAAAABAAQAAAAABAAIAEABQABAAAAABQAAAAABAAQAAABAAAAQAAABAAABIABAFIgBAGIgCADIgEABIgDAAgAAGgEIAAACIgBAHIACACIACAAIACAAIABgCIABgEIgBgEIgBgBIgCgBIgCAAIgBABgAgLgDIgBAEIABAEIADABIADgBIABgEQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAgBgBQAAAAAAAAQgBAAAAgBQAAAAgBAAQAAAAgBAAIgDABg");
	this.shape_16.setTransform(296.375,52.75);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#003E74").s().p("AgKAHIAAgDIAEAAQgEgEAAgFIAAgBIADABIAAABIABADIACAEIAPAAIAAAEg");
	this.shape_17.setTransform(295.925,54.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#003E74").s().p("AADAJQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAgBAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAgBAAgBIAAgIIgDAAIgDABIAAAEIAAAJIgCAAIgBgKQAAgEABgCQABgBAEAAIAPAAIAAACIgDABIACAEIABAEQABADgCACQgBAAAAABQgBAAAAAAQgBAAAAAAQgBAAgBAAgAABADIAAACIACABIACAAIADgBIAAgDIAAgCIgDgFIgEAAg");
	this.shape_18.setTransform(295.95,57.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#003E74").s().p("AgPAJIAAgEIAYAAIACAAIABgDIAAgKIADAAIABALQAAABgBAAQAAABAAABQAAAAAAABQgBAAAAAAQAAABgBAAQAAAAgBABQAAAAgBAAQgBAAAAAAg");
	this.shape_19.setTransform(295.5,59.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#003E74").s().p("AgKAOIAPgFIADgBIAAgBIgDgBIgOgDIgBAAIAAgBIAAgDIAAgBIABgBIAOgDIACAAIABAAIAAgBIAAgBIgDAAIgPgEIAAgFIAUAHIAAAAIABABIAAAEIgBABIAAABIgOADIgCAAIgCAAIAAAAIABAAIADABIAOAEIAAAAIABABIAAADIgBACIAAAAIgUAGg");
	this.shape_20.setTransform(65.4,153.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#003E74").s().p("AgGAJQgCgBgCgCIAAgGIAAgFIAEgDIAGgBIAHABQABAAAAAAQABABAAAAQABAAAAABQAAAAAAABIABAFIgBAGQAAAAAAABQAAAAgBABQAAAAgBABQAAAAgBAAIgHABIgGgBgAgEgFQgBAAAAABQAAAAgBAAQAAAAAAABQAAAAgBAAIAAADIAAAEQABAAAAAAQAAABAAAAQABAAAAAAQAAABABAAIAEAAIAFAAQAAAAABgBQAAAAABAAQAAAAAAgBQAAAAABAAIAAgEIAAgDQgBAAAAAAQAAgBAAAAQgBAAAAAAQgBgBAAAAIgFAAIgEAAg");
	this.shape_21.setTransform(65.4,156.925);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#003E74").s().p("AgPAJIAAgDIAYAAIACgBIABgDIAAgKIADAAIABALQAAABgBAAQAAABAAABQAAAAAAABQgBAAAAAAQAAABgBAAQAAAAgBABQAAAAgBAAQgBAAgBAAg");
	this.shape_22.setTransform(64.95,159.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#003E74").s().p("AgQgGIAAgDIAhAQIAAAEg");
	this.shape_23.setTransform(65.1,162.65);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#003E74").s().p("AgPAFIAAgEIAYAAIACgBIACgBIAAgCIADgBIAAACIAAACQAAAAAAAAQAAABAAABQgBAAAAAAQAAABAAAAQgBABAAAAQgBAAAAAAQgBABAAAAQgBAAgBAAg");
	this.shape_24.setTransform(64.95,165.275);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#003E74").s().p("AgPAFIAAgEIAYAAIACgBIACgBIAAgCIADgBIAAACIAAACQAAAAAAAAQAAABAAABQgBAAAAAAQAAABAAAAQgBABAAAAQgBAAAAAAQgBABAAAAQgBAAgBAAg");
	this.shape_25.setTransform(64.95,166.625);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#003E74").s().p("AADAJQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAgBAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAgBAAgBIAAgIIgCAAIgEABIAAAEIAAAJIgDAAIAAgKQgBgEACgCQABgBAFAAIAOAAIAAACIgDABIACAEIABAEQAAADgBACQAAAAgBABQgBAAAAAAQgBAAAAAAQgBAAAAAAgAAAADIABACIADABIABAAIADgBIAAgDIAAgCIgDgFIgFAAg");
	this.shape_26.setTransform(65.4,168.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#003E74").s().p("AgKAQIAAgDIAEAAIgDgFIgBgEQAAgEAEgBQgEgEAAgEQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAQABAAABAAIAPAAIAAADIgOAAIgDABIgBADIABADIACAEIAPAAIAAADIgOAAIgDABIgBACIABADIACAEIAPAAIAAAEg");
	this.shape_27.setTransform(65.375,171.875);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#003E74").s().p("AgMAJIgDgDIAAgGIABgIIADAAIAAAIIAAAEIABACIADAAIAEgBIACgDIABgFQAAgDABgCQADgBADAAIAGABIADADIAAAFIgBAKIgCAAIAAgEIAAgFIgBgDIgBgDIgEAAIgCAAIgCABIgBADIgCAFQAAADgBACQgDABgDAAIgFgBg");
	this.shape_28.setTransform(64.95,175.075);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#003E74").s().p("AgPAKIAAgEIAJAAIAEAAIgDgFIgBgEQAAAAAAgBQAAgBABAAQAAgBAAAAQAAgBABAAQAAgBABAAQAAAAABAAQAAgBABAAQAAAAABAAIAQAAIAAAEIgQAAIgCABIAAACIAAADIACAFIAQAAIAAAEg");
	this.shape_29.setTransform(64.825,36.975);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#003E74").s().p("AAGALIgCgEIgCABIgBABIgBgBIgCgBIgCACIgEABIgEgBIgCgDIgBgFIABgEIAAgHIACAAIAAAEIAEgCQAEABACACQABACAAAEIAAAEIABABIABgBIABgBIABgHQAAgBAAgBQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAABAAQAAAAABgBQAAAAABAAQABAAAAAAIAEABQABAAAAABQAAAAAAAAQABABAAAAQAAABAAABIABAEIgBAHIgCADIgEABIgDAAgAAGgEIAAACIgBAHIACACIACAAIACAAIABgCIABgFIgBgDIgBgBIgCgBIgCAAIgBABgAgLgDIgBAEIABAEIADABIADgBIABgEQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAgBgBQAAAAAAAAQgBAAAAgBQAAAAgBAAQAAAAgBAAIgDABg");
	this.shape_30.setTransform(65.725,39.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#003E74").s().p("AgFACIAAgDIAVAAIAAADgAgNACIgBgBIgBAAIAAgBQAAAAAAAAQAAgBABAAQAAAAAAAAQAAAAABAAIACAAIABABIAAABIgBABg");
	this.shape_31.setTransform(64.825,41.35);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#003E74").s().p("AgPALIAAgEIANAAIAAgNIgNAAIAAgEIAfAAIAAAEIgQAAIAAANIAQAAIAAAEg");
	this.shape_32.setTransform(64.85,43.35);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#003E74").s().p("AgQgGIAAgDIAhAQIAAAEg");
	this.shape_33.setTransform(65,47);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#003E74").s().p("AgGAJQgBAAAAgBQgBAAAAAAQgBgBAAAAQAAgBAAAAIgBgGQAAgEABgCQACgDAEAAQADAAAAACQABAAAAAAQAAABABAAQAAABAAAAQAAABAAABIAAAJIAEgBIACgCIABgDIgBgIIACAAIABAEIAAAEIgBAFQgBADgCABIgHABIgGgBgAgHgEIAAAEIAAADIACACIAFABIAAgIQAAgBAAAAQAAgBgBAAQAAAAgBgBQgBAAAAAAIgEABg");
	this.shape_34.setTransform(65.3,50.325);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#003E74").s().p("AAGALIgCgEIgCACIgBAAIgBAAIgCgCIgCADIgEAAIgEAAIgCgEIgBgFIABgEIAAgHIACAAIAAAEIAEgBQAEAAACACQABACAAAEIAAAEIABABIABgBIABgBIABgIQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAABAAQAAgBABAAQAAAAABgBQAAAAABAAQABAAAAAAIAEABQABAAAAABQAAAAAAAAQABABAAAAQAAABAAABIABAFIgBAGIgCADIgEABIgDAAgAAGgEIAAACIgBAHIACACIACAAIACAAIABgCIABgEIgBgEIgBgBIgCgBIgCAAIgBABgAgLgDIgBAEIABAEIADABIADgBIABgEQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAgBgBQAAAAAAAAQgBAAAAgBQAAAAgBAAQAAAAgBAAIgDABg");
	this.shape_35.setTransform(65.725,52.75);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#003E74").s().p("AgKAHIAAgDIAEAAQgEgEAAgFIAAgBIADABIAAABIABADIACAEIAPAAIAAAEg");
	this.shape_36.setTransform(65.275,54.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#003E74").s().p("AADAJQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAgBAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAgBAAgBIAAgIIgCAAIgEABIAAAEIAAAJIgCAAIgBgKQgBgEACgCQACgBAEAAIAOAAIAAACIgDABIACAEIABAEQAAADgBACQAAAAgBABQgBAAAAAAQgBAAAAAAQgBAAAAAAgAAAADIABACIACABIACAAIADgBIAAgDIAAgCIgDgFIgFAAg");
	this.shape_37.setTransform(65.3,57.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#003E74").s().p("AgPAJIAAgEIAYAAIACAAIABgDIAAgKIADAAIABALQAAABgBAAQAAABAAABQAAAAAAABQgBAAAAAAQAAABgBAAQAAAAgBABQAAAAgBAAQgBAAgBAAg");
	this.shape_38.setTransform(64.85,59.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#003E74").s().p("AABAOQgEAAgDgBQgDgBgBgEQgBgDAAgFQAAgEABgEQABgDADgBIAGgBQAHAAACACQADACAAAFQAAADgBABQgCACgDAAIgMAAIABAFIADADIAEAAIAJAAIABADIgFABIgGAAgAgDgIQAAAAgBAAQAAAAAAABQgBAAAAAAQAAABAAAAIgBAGIAKAAQADAAAAgEQAAgBAAgBQAAAAAAgBQAAAAgBgBQAAAAAAAAIgFgBIgEABg");
	this.shape_39.setTransform(496.575,188.225);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#003E74").s().p("AABAUQgCAAgCgCQgCgBAAgEIAAggIAFAAIAAAfIAAACIADABIACAAIABAFIgCAAg");
	this.shape_40.setTransform(494.375,187.65);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#003E74").s().p("AgFAUIgGgCIAAglIAEAAIAAAKIAAAGQAFgEAEAAQAGAAACADQACADAAAGIgBAJQgBADgDACQgCABgFAAIgFAAgAgCgDIgFADIAAAPIAHABIAEgBIADgDIAAgHIAAgFIgCgDIgEgBIgDABg");
	this.shape_41.setTransform(491.825,187.65);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#003E74").s().p("AgBAUIAAgbIADAAIAAAbgAAAgMQAAgBgBAAQAAAAAAAAQAAAAAAAAQAAgBAAAAIAAgDIAAgBIABgBIABAAQAAAAABABQAAAAAAAAQAAAAAAAAQAAABAAAAIAAADQAAAAAAABQAAAAAAAAQAAAAAAAAQgBAAAAABg");
	this.shape_42.setTransform(489.45,187.65);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#003E74").s().p("AAJAOIgIgNIgBAAIgIANIgFAAIAJgOIgIgNIAFAAIAHAMIABAAIAHgMIAFAAIgJANIAJAOg");
	this.shape_43.setTransform(487.3,188.225);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#003E74").s().p("AABAOQgEAAgDgBQgDgBgBgEQgBgDAAgFQAAgEABgEQABgDADgBIAGgBQAHAAACACQADACAAAFQAAADgBABQgCACgDAAIgMAAIABAFIADADIAEAAIAJAAIABADIgFABIgGAAgAgDgIQAAAAgBAAQAAAAAAABQgBAAAAAAQAAABAAAAIgBAGIAKAAQABAAABAAQAAgBAAAAQABgBAAAAQAAgBAAgBQAAgBAAgBQAAAAAAgBQAAAAgBgBQAAAAAAAAIgFgBIgEABg");
	this.shape_44.setTransform(484.325,188.225);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#003E74").s().p("AABAUQgCAAgCgCQgCgBAAgEIAAggIAFAAIAAAfIAAACIADABIACAAIABAFIgCAAg");
	this.shape_45.setTransform(482.175,187.65);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#003E74").s().p("AgLAUIAAggQAAgDACgBQACgDAEAAIAPABIgBAEIgNAAIgDABIgBACIAAAJIAPAAIAAAEIgPAAIAAASg");
	this.shape_46.setTransform(479.775,187.65);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#003E74").s().p("AgEAUIAAgWIgGAAIAAgEIAGAAIAAgFQAAgEABgCQACgCAEAAIAIAAIgBAEIgGAAIgDABIgBADIAAAFIAIAAIAAAEIgIAAIAAAWg");
	this.shape_47.setTransform(315,185.775);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#003E74").s().p("AgFAUIAAgWIgFAAIAAgEIAFAAIAAgFQAAgEACgCQADgCADAAIAIAAIgBAEIgGAAIgDABIgBADIAAAFIAIAAIAAAEIgIAAIAAAWg");
	this.shape_48.setTransform(312.85,185.775);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#003E74").s().p("AgCAUIAAgbIAFAAIAAAbgAAAgNQAAAAgBAAQAAAAAAAAQAAAAAAAAQgBgBAAAAIAAgDIABgBIABgBIABAAQAAAAABABQAAAAAAAAQAAAAAAAAQABABAAAAIAAADQAAAAgBABQAAAAAAAAQAAAAAAAAQgBAAAAAAg");
	this.shape_49.setTransform(310.95,185.85);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#003E74").s().p("AADASQgDAAgBgCQgCgCAAgDIAAgQIgFAAIAAgDIAFgBIAAgIIAEAAIAAAIIAIAAIAAAEIgIAAIAAAPIAAADIADAAIAEAAIABAFIgDAAg");
	this.shape_50.setTransform(309.225,186.05);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#003E74").s().p("AgLATIAAgEIAEAAIAHAAIAEAAIADgCIABgDIgBgEIgBgCIgDgBIgHgCQgEgBgCgCQgCgCAAgFQAAgEACgCQABgCADgCIAGAAIAMABIgBAEIgLAAIgEAAIgCACIgBADIABAFIAEABIAHACQAEABACADQACACAAAFIgBAGIgEAEIgIAAIgLgBg");
	this.shape_51.setTransform(306.525,185.85);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#003E74").s().p("AABAOQgEAAgDgBQgDgBgBgEQgBgDAAgFQAAgEABgEQABgDADgBIAGgBQAHAAACACQADACAAAFQAAADgBABQgCACgDAAIgMAAIABAFIADADIAEAAIAJAAIABADIgFABIgGAAgAgDgIQAAAAgBAAQAAAAAAABQgBAAAAAAQAAABAAAAIgBAGIAKAAQABAAABAAQAAgBABAAQAAgBAAAAQAAgBAAgBQAAgBAAgBQAAAAAAgBQAAAAgBgBQAAAAAAAAIgFgBIgEABg");
	this.shape_52.setTransform(267.925,186.425);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#003E74").s().p("AABAUQgCAAgCgCQgCgBAAgEIAAggIAFAAIAAAfIAAACIADABIACAAIABAFIgCAAg");
	this.shape_53.setTransform(265.725,185.85);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#003E74").s().p("AgFAUIgGgCIAAglIAEAAIAAAKIAAAGQAFgEAEAAQAGAAACADQACADAAAGIgBAJQgBADgDACQgCABgFAAIgFAAgAgCgDIgFADIAAAPIAHABIAEgBIADgDIAAgHIAAgFIgCgDIgEgBIgDABg");
	this.shape_54.setTransform(263.175,185.85);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#003E74").s().p("AgCAUIAAgbIAFAAIAAAbgAAAgNQAAAAgBAAQAAAAAAAAQAAAAAAAAQgBgBAAAAIAAgDIABgBIABgBIABAAQAAAAABABQAAAAAAAAQAAAAAAAAQABABAAAAIAAADQAAAAgBABQAAAAAAAAQAAAAAAAAQgBAAAAAAg");
	this.shape_55.setTransform(260.8,185.85);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#003E74").s().p("AAIAOIgIgNIAAAAIgIANIgEAAIAJgOIgJgNIAFAAIAHAMIAAAAIAHgMIAGAAIgIANIAJAOg");
	this.shape_56.setTransform(258.65,186.425);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#003E74").s().p("AABAOQgEAAgDgBQgDgBgBgEQgBgDAAgFQAAgEABgEQABgDADgBIAGgBQAHAAACACQADACAAAFQAAADgBABQgCACgDAAIgMAAIABAFIADADIAEAAIAJAAIABADIgFABIgGAAgAgDgIQAAAAgBAAQAAAAAAABQgBAAAAAAQAAABAAAAIgBAGIAKAAQABAAABAAQAAgBABAAQAAgBAAAAQAAgBAAgBQAAgBAAgBQAAAAAAgBQAAAAgBgBQAAAAAAAAIgFgBIgEABg");
	this.shape_57.setTransform(255.675,186.425);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#003E74").s().p("AABAUQgCAAgCgCQgCgBAAgEIAAggIAFAAIAAAfIAAACIADABIACAAIABAFIgCAAg");
	this.shape_58.setTransform(253.525,185.85);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#003E74").s().p("AgLAUIAAggQAAgDACgBQACgDAEAAIAPABIgBAEIgNAAIgDABIgBACIAAAJIAPAAIAAAEIgPAAIAAASg");
	this.shape_59.setTransform(251.125,185.85);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#003E74").s().p("AgEAUIAAgWIgGAAIAAgEIAGAAIAAgFQAAgEABgCQACgCAEAAIAIAAIgBAEIgGAAIgDABIgBADIAAAFIAIAAIAAAEIgIAAIAAAWg");
	this.shape_60.setTransform(86.4,184.025);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#003E74").s().p("AgFAUIAAgWIgFAAIAAgEIAFAAIAAgFQABgEABgCQADgCADAAIAIAAIgBAEIgGAAIgDABIgBADIAAAFIAIAAIAAAEIgIAAIAAAWg");
	this.shape_61.setTransform(84.25,184.025);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#003E74").s().p("AgCATIAAgaIAFAAIAAAagAAAgMQAAAAgBgBQAAAAAAAAQAAAAAAAAQgBgBAAAAIAAgDIABgBIABAAIABAAQAAAAABAAQAAAAAAAAQAAAAAAAAQABABAAAAIAAADQAAAAgBABQAAAAAAAAQAAAAAAAAQgBABAAAAg");
	this.shape_62.setTransform(82.35,184.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#003E74").s().p("AADASQgDAAgBgCQgCgCAAgEIAAgPIgFAAIAAgEIAFAAIAAgIIAEAAIAAAIIAIAAIAAAEIgIAAIAAAPIAAADIADABIAEAAIABADIgDABg");
	this.shape_63.setTransform(80.625,184.3);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#003E74").s().p("AgLATIAAgDIAEAAIAHAAIAEAAIADgCIABgFIgBgDIgBgCIgDgBIgHgCQgEgBgCgBQgCgDAAgFQAAgFACgCQABgCADAAIAGgBIAMABIgBADIgLAAIgEAAIgCADIgBADIABAEIAEADIAHACQAEAAACACQACADAAAEIgBAIIgEACIgIABIgLgBg");
	this.shape_64.setTransform(77.925,184.1);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#003E74").s().p("AgKAUIAGgEIADgFIABgBIgCAAIgBgBIgBgBIgMgeIAHAAIAIAXIABAEIABAAIABgEIAJgXIAGAAIgNAiQgEALgKAAg");
	this.shape_65.setTransform(199.575,191.25);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#003E74").s().p("AADAVQgDAAgCgBQgCgDAAgFIAAgSIgGAAIAAgFIAGAAIAAgKIAEAAIAAAKIALAAIAAAFIgLAAIAAASIACADIADACIAFAAIABADIgEABg");
	this.shape_66.setTransform(196.55,190.1);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#003E74").s().p("AgCAYIAAggIAEAAIAAAggAAAgPQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAgBAAAAIAAgDIAAgCIACgBIABAAQABAAAAABQAAAAABAAQAAAAAAABQAAAAAAABIAAADQAAAAAAABQAAAAAAABQgBAAAAAAQAAAAgBAAg");
	this.shape_67.setTransform(194.45,189.85);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#003E74").s().p("AABAYQgDAAgCgCQgCgCAAgEIAAgnIAFAAIAAAmIABADQAAAAAAAAQABAAAAABQABAAAAAAQAAAAABAAIADAAIABAEIgDABg");
	this.shape_68.setTransform(192.85,189.85);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#003E74").s().p("AgCAYIAAggIAFAAIAAAggAgBgPQAAAAAAAAQAAAAgBAAQAAgBAAAAQAAgBAAAAIAAgDIAAgCIABgBIACAAQAAAAABABQAAAAAAAAQABAAAAABQAAAAAAABIAAADQAAAAAAABQAAAAgBABQAAAAAAAAQgBAAAAAAg");
	this.shape_69.setTransform(190.8,189.85);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#003E74").s().p("AgGAXIgIgBIAAgtIAGAAIAAAMIgBAIQAGgGAGAAQAGAAADAEQADAEAAAIQAAAGgCADQgBAEgDACQgDACgFAAIgHgBgAgDgDIgFADIAAASIAIABQADAAACgBIADgEIABgHIgBgHQAAAAAAgBQAAAAgBgBQAAAAAAgBQgBAAAAAAIgFgBIgEABg");
	this.shape_70.setTransform(188.1,189.875);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#003E74").s().p("AgCAYIAAggIAFAAIAAAggAgBgPQAAAAAAAAQAAAAgBAAQAAgBAAAAQAAgBAAAAIAAgDIAAgCIABgBIACAAQAAAAABABQAAAAAAAAQABAAAAABQAAAAAAABIAAADQAAAAAAABQAAAAgBABQAAAAAAAAQgBAAAAAAg");
	this.shape_71.setTransform(185.3,189.85);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#003E74").s().p("AAKARIgJgPIgBAAIgJAPIgGAAIALgRIgKgPIAGAAIAIANIABAAIAIgNIAHAAIgLAPIALARg");
	this.shape_72.setTransform(182.675,190.55);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#003E74").s().p("AgHAPQgDgBgCgEQgCgEAAgGQAAgGACgDQACgEADgCQADgBAFAAQAHAAADACQAEADAAAFQAAAFgCABQgCADgEAAIgOAAIABAGQAAAAABABQAAAAAAAAQABABAAAAQABAAAAAAIAFABIALgBIABAEIgGACIgHAAQgFAAgDgCgAgEgLQAAAAgBABQAAAAAAABQgBAAAAABQAAAAgBABIgBAGIANAAQAEAAAAgFQAAAAAAgBQAAgBgBAAQAAgBAAAAQAAgBgBAAQgCgCgEAAIgFABg");
	this.shape_73.setTransform(179.125,190.575);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#003E74").s().p("AABAYQgDAAgCgCQgCgCAAgEIAAgnIAFAAIAAAmIABADQAAAAAAAAQABAAAAABQABAAAAAAQABAAAAAAIADAAIABAEIgDABg");
	this.shape_74.setTransform(176.55,189.85);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#003E74").s().p("AgNAXIAAglQAAgEACgCQADgCAEAAIASAAIAAAFIgRAAIgDABQAAAAAAAAQgBABAAAAQAAABAAAAQAAABAAAAIAAALIASAAIAAAEIgSAAIAAAVg");
	this.shape_75.setTransform(173.625,189.875);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#003E74").s().p("AgMAQIAAgEIAJAAIADAAIAEAAIADgCIABgCIgBgEIgEgBIgIgCQgEgBgCgBQgCgCAAgEIABgGQABgBAAAAQABgBAAAAQAAAAABAAQABgBAAAAIAHAAIAHAAIAHABIgBAEIgDAAIgFgBIgFAAIgEABIgCABIAAADIAAACIACABIADABIAIACQAEABACABQACACAAAFQAAAEgCACQgBACgDAAIgIABIgMgBg");
	this.shape_76.setTransform(168.475,190.575);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#003E74").s().p("AgBAHIgBgNIAFAAIgBANg");
	this.shape_77.setTransform(166.05,188.275);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#003E74").s().p("AgHAPQgDgBgCgEQgCgEAAgGQAAgGACgDQACgEADgCQADgBAFAAQAHAAADACQAEADAAAFQAAAFgCABQgCADgEAAIgOAAIABAGQAAAAABABQAAAAAAAAQABABAAAAQABAAAAAAIAFABIALgBIABAEIgGACIgHAAQgFAAgDgCgAgEgLQAAAAgBABQAAAAgBABQAAAAAAABQAAAAgBABIgBAGIANAAQAEAAAAgFQAAAAAAgBQAAgBgBAAQAAgBAAAAQAAgBgBAAQgCgCgEAAIgFABg");
	this.shape_78.setTransform(163.575,190.575);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#003E74").s().p("AgJARIAAggIAEAAIABAFQAGgGAHAAIABAAIgBAFIgBAAIgGABIgGAEIAAAXg");
	this.shape_79.setTransform(160.575,190.525);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#003E74").s().p("AgLAPQgCgCAAgFIAAgYIAGAAIAAAWQAAABAAABQAAAAAAABQAAAAAAABQABAAAAAAQAAABAAAAQABAAAAABQABAAAAAAQABAAABAAIAEgCIAGgDIAAgXIAGAAIAAAgIgFAAIAAgFIgHAEIgGACQgFAAgCgCg");
	this.shape_80.setTransform(157.125,190.6);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#003E74").s().p("AADAVQgDAAgCgBQgCgDAAgFIAAgSIgGAAIAAgFIAGAAIAAgKIAFAAIAAAKIAKAAIAAAFIgKAAIAAASIABADIADACIAFAAIABADIgEABg");
	this.shape_81.setTransform(153.9,190.1);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#003E74").s().p("AgGAPQgDgBgCgEQgCgEAAgGQAAgGACgDQACgEADgCQAEgBAEAAIAGAAIAFABIgBAEIgJgBIgFABIgDAEQgBADAAAEQAAAFABACIADAEIAFABIAKAAIAAADQgEACgHAAQgEAAgEgCg");
	this.shape_82.setTransform(151.05,190.575);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#003E74").s().p("AgLAPQgCgCAAgFIAAgYIAGAAIAAAWQAAABAAABQAAAAAAABQAAAAAAABQABAAAAAAQAAABAAAAQABAAAAABQABAAAAAAQABAAABAAIAEgCIAGgDIAAgXIAGAAIAAAgIgFAAIAAgFIgHAEIgGACQgFAAgCgCg");
	this.shape_83.setTransform(147.425,190.6);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#003E74").s().p("AgJARIAAggIAEAAIABAFQAGgGAHAAIABAAIgBAFIgBAAIgGABIgGAEIAAAXg");
	this.shape_84.setTransform(144.375,190.525);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#003E74").s().p("AADAVQgDAAgCgBQgCgDAAgFIAAgSIgGAAIAAgFIAGAAIAAgKIAFAAIAAAKIAKAAIAAAFIgKAAIAAASIABADIADACIAFAAIABADIgEABg");
	this.shape_85.setTransform(141.5,190.1);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#003E74").s().p("AgOAXIABgFIAFABIAHAAIAGgBQABAAAAAAQABAAAAAAQABgBAAAAQAAAAABgBIABgFIgBgEIgCgCIgEgBIgIgDQgFgBgCgCQgCgDAAgGQgBgFACgDQACgDADAAIAIgBQAIAAAFABIAAAEIgNAAIgFAAIgCACIgBAFQAAAEABABQABACADABIAJACQAFABACADQACADAAAFQAAAGgBACQgCADgDABIgJABQgGAAgIgBg");
	this.shape_86.setTransform(138.35,189.875);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#003E74").s().p("AgJANQgEgCgCgDQgBgDAAgFQAAgHACgDQADgEAFAAQAFAAABACQADACAAAEIAAAOIAGgBQAAAAABgBQAAAAAAAAQABgBAAAAQAAgBAAAAIABgFIgBgLIAEgBIACAGIAAAHQAAAFgCADQgBADgEACQgEACgGAAQgGAAgDgCgAgKgGQgCACAAAEIABAFQAAAAABABQAAAAABABQAAAAABAAQAAAAABABIAGABIAAgNQAAgEgFAAQAAAAgBAAQgBAAAAABQgBAAAAAAQgBAAAAABg");
	this.shape_87.setTransform(56.725,68.625);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#003E74").s().p("AAJAQQgCgBgCgDIgCABIgCABIgDgBIgCgCIgDAEIgFABQgEAAgCgCQgDgBgBgDIgBgJIABgGIAAgLIADABIABAFQACgCADAAQAHAAABAEQADADAAAGIgBAHIADABIABgBIABgCIACgLQABgFACgCQACgCAEAAQAFAAACACQACABAAAEIABAIIgBAKQAAADgCABQgCACgFAAIgEgBgAAKgGIgBAEIgCAKIADADIADAAIAEgBQAAAAAAAAQABAAAAgBQAAAAAAgBQAAAAABgBIAAgGIAAgFIgCgDIgEgBIgCAAIgBACgAgRgEQgBACAAADQAAAFABACQAAABABAAQAAABABAAQAAAAABAAQABAAAAAAQAEAAACgCQABgCAAgFQAAgDgBgCQgCgCgEAAQAAAAgBAAQgBAAAAAAQgBABAAAAQgBAAAAABg");
	this.shape_88.setTransform(57.35,72.225);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#003E74").s().p("AAEAOQgEAAgBgCQgCgDAAgEIAAgNIgCAAQgBAAgBAAQgBAAAAABQgBAAAAAAQgBAAAAABQgBABgBAEIABANIgEABIgBgPQAAgGACgDQADgCAGAAIAVAAIAAAEIgFABIAEAGQACACAAAEQAAAFgDADQgCACgEAAgAABAEQAAABAAAAQAAABAAAAQAAAAAAABQABAAAAAAIADABIACAAIAEgBIABgEIgBgFIgEgGIgGAAg");
	this.shape_89.setTransform(56.7,76.125);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#003E74").s().p("AgPAYIAAgEIAFgBIgFgGIgBgHQAAgGAGgBQgGgHAAgHQAAgEACgCQADgCAEAAIAYAAIAAAFIgWAAIgFABQAAABAAAAQgBAAAAABQAAABAAAAQAAABAAAAIABAFIAEAGIAXAAIAAAFIgWAAQgBAAgBAAQAAAAgBAAQAAAAgBABQAAAAgBAAQAAABAAAAQgBAAAAABQAAAAAAABQAAAAAAABIABAEIAEAHIAXAAIAAAFg");
	this.shape_90.setTransform(56.675,80.825);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#003E74").s().p("AAEAOQgEAAgBgCQgCgDAAgEIAAgNIgCAAQgBAAgBAAQgBAAAAABQgBAAAAAAQgBAAAAABQgBABgBAEIABANIgEABIgBgPQAAgGACgDQADgCAGAAIAVAAIAAAEIgFABIAEAGQACACAAAEQAAAFgDADQgCACgEAAgAABAEQAAABAAAAQAAABAAAAQAAAAAAABQABAAAAAAIADABIACAAIAEgBIABgEIgBgFIgEgGIgGAAg");
	this.shape_91.setTransform(56.7,85.725);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#003E74").s().p("AgWARIgBgQQAAgGACgEQACgEAGgCQAFgBAIAAQAKAAAEABQAFACADAEQACAEAAAGIgBAQgAgKgJQgEABgCADQgBACAAAEIAAAKIAkAAIAAgKQAAgEgCgCQgCgDgEgBIgLgBIgKABg");
	this.shape_92.setTransform(56,89.675);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#003E74").s().p("AgCAOQgEgCgCgCQgBgDAAgEQAAgGACgFIgGAAIgKAAIAAgGIAuAAIAAAFIgEAAQAFAHAAAFQAAAGgEADQgFADgIAAIgJgBgAgEgCIAAADIABAFQAAAAAAABQABAAAAAAQABABAAAAQABAAAAAAIAHABIAHgBQABAAAAAAQABAAAAgBQABAAAAAAQAAgBABAAQAAgBAAAAQABgBAAAAQAAAAAAgBQAAgBAAAAIgBgEIgDgGIgSAAg");
	this.shape_93.setTransform(56.025,95.475);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#003E74").s().p("AgPAOIAAgEIAFgBQgGgIAAgGQAAgEACgCQADgCAEAAIAYAAIAAAFIgWAAQgBAAgBAAQgBAAAAAAQgBABAAAAQAAAAgBAAQAAAAAAABQgBAAAAABQAAAAAAABQAAABAAAAIABAEIAEAIIAXAAIAAAFg");
	this.shape_94.setTransform(56.675,99.275);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#003E74").s().p("AAEAOQgEAAgBgCQgCgDAAgEIAAgNIgCAAQgBAAgBAAQgBAAAAABQgBAAAAAAQgBAAAAABQgBABgBAEIABANIgEABIgBgPQAAgGACgDQADgCAGAAIAVAAIAAAEIgFABIAEAGQACACAAAEQAAAFgDADQgCACgEAAgAABAEQAAABAAAAQAAABAAAAQAAAAAAABQABAAAAAAIADABIACAAIAEgBIABgEIgBgFIgEgGIgGAAg");
	this.shape_95.setTransform(56.7,103.175);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#003E74").s().p("AgPAOIAAgEIAFgBQgGgIAAgGQAAgEACgCQADgCAEAAIAYAAIAAAFIgWAAQgBAAgBAAQgBAAAAAAQgBABAAAAQAAAAgBAAQAAABAAAAQgBAAAAABQAAAAAAABQAAABAAAAIABAEIAEAIIAXAAIAAAFg");
	this.shape_96.setTransform(56.675,108.375);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#003E74").s().p("AgIADIAAgFIAfAAIAAAFgAgVADIgBAAIgBgBIAAgCQAAAAABgBQAAAAAAAAQAAgBABAAQAAAAAAAAIAEAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABAAAAIAAACQAAAAAAAAQAAAAgBABQAAAAAAAAQgBAAAAAAg");
	this.shape_97.setTransform(56,111.15);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#003E74").s().p("AgJANQgEgBgCgDQgBgDAAgGQAAgFABgDQACgEAEgBQADgCAGABQAGgBAEACQAEABABAEQACADAAAFQAAAGgCADQgBADgEABQgEACgGAAQgGAAgDgCgAgHgIIgEADIgBAFIABAFIAEAEIAHABIAHgBQADgCABgCIABgFIgBgFQgBgCgDgBIgHAAIgHAAg");
	this.shape_98.setTransform(56.725,113.95);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#003E74").s().p("AgLALIAAgGIgKAAIAAgFIAKAAIAAgKIAFAAIAAAKIASAAIADgBIABgDIAAgFIAFgBIABAEIAAAEQAAADgCACQgDACgEAAIgTAAIAAAGg");
	this.shape_99.setTransform(56.25,117.1);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#003E74").s().p("AAEAOQgEAAgBgCQgCgDAAgEIAAgNIgCAAQgBAAgBAAQgBAAAAABQgBAAAAAAQgBAAAAABQgBABgBAEIABANIgEABIgBgPQAAgGACgDQADgCAGAAIAVAAIAAAEIgFABIAEAGQACACAAAEQAAAFgDADQgCACgEAAgAABAEQAAABAAAAQAAABAAAAQAAAAAAABQABAAAAAAIADABIACAAIAEgBIABgEIgBgFIgEgGIgGAAg");
	this.shape_100.setTransform(56.7,120.325);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#003E74").s().p("AgPAYIAAgEIAFgBIgFgGIgBgHQAAgGAGgBQgGgHAAgHQAAgEACgCQADgCAEAAIAYAAIAAAFIgWAAIgFABQAAABAAAAQgBABAAAAQAAABAAAAQAAABAAAAIABAFIAEAGIAXAAIAAAFIgWAAQgBAAgBAAQAAAAgBAAQAAAAgBABQAAAAgBAAQAAABAAAAQgBAAAAABQAAAAAAABQAAAAAAABIABAEIAEAHIAXAAIAAAFg");
	this.shape_101.setTransform(56.675,125.025);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#003E74").s().p("AgPAKIAAgEIAFgBQgGgGAAgHIAAgBIAFABIAAABIABAGIAEAGIAXAAIAAAFg");
	this.shape_102.setTransform(56.675,129.175);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#003E74").s().p("AgJAOQgEgCgCgDQgBgDAAgGQAAgFABgEQACgDAEgBQADgBAGAAQAGAAAEABQAEABABADQACAEAAAFQAAAGgCADQgBADgEACQgEABgGAAQgGAAgDgBgAgHgIIgEADIgBAFIABAFIAEADIAHABIAHgBQADgBABgCIABgFIgBgFQgBgCgDgBIgHgBIgHABg");
	this.shape_103.setTransform(56.725,132.65);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#003E74").s().p("AgHAMIgBgGIgGAAQgEAAgDgCQgCgCAAgEIAAgJIAEAAIAAAHQAAABAAAAQAAABABABQAAAAAAABQAAAAABAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAABAAIAFAAIAAgKIAFAAIAAAKIAbAAIAAAFIgbAAIAAAGg");
	this.shape_104.setTransform(55.925,135.675);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#003E74").s().p("AgJANQgEgCgCgDQgBgDAAgFQAAgHACgDQADgEAFAAQAFAAABACQADACAAAEIAAAOIAGgBQAAAAABgBQAAAAAAAAQABgBAAAAQAAgBAAAAIABgFIgBgLIAEgBIACAGIAAAHQAAAFgCADQgBADgEACQgEACgGAAQgGAAgDgCgAgKgGQgCACAAAEIABAFQAAAAABABQAAAAABAAQAAABABAAQAAAAABABIAGABIAAgNQAAgEgFAAQAAAAgBAAQgBAAAAABQgBAAAAAAQgBAAAAABg");
	this.shape_105.setTransform(56.725,138.925);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#003E74").s().p("AgWARIgBgQQAAgGACgEQACgEAGgCQAFgBAIAAQAKAAAEABQAFACADAEQACAEAAAGIgBAQgAgKgJQgEABgCADQgBACAAAEIAAAKIAkAAIAAgKQAAgEgCgCQgCgDgEgBIgLgBIgKABg");
	this.shape_106.setTransform(56,142.875);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#003E74").s().p("AgKAUIAGgEIADgFIABgBIgCAAIgBgBIgBgBIgMgeIAHAAIAIAXIABAEIABAAIABgEIAJgXIAGAAIgNAiQgEALgKAAg");
	this.shape_107.setTransform(429.925,191.25);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#003E74").s().p("AADAVQgDAAgCgBQgCgDAAgFIAAgSIgGAAIAAgFIAGAAIAAgKIAFAAIAAAKIAKAAIAAAFIgKAAIAAASIAAADIAEACIAFAAIAAADIgDABg");
	this.shape_108.setTransform(426.9,190.1);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#003E74").s().p("AgCAYIAAggIAFAAIAAAggAgBgPQAAAAAAAAQAAAAgBAAQAAgBAAAAQAAgBAAAAIAAgDIAAgCIABgBIACAAQAAAAABABQAAAAAAAAQABAAAAABQAAAAAAABIAAADQAAAAAAABQAAAAgBABQAAAAAAAAQgBAAAAAAg");
	this.shape_109.setTransform(424.8,189.85);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#003E74").s().p("AABAYQgDAAgCgCQgCgCAAgEIAAgnIAGAAIAAAmIAAADQAAAAAAAAQABAAAAABQABAAAAAAQABAAAAAAIADAAIABAEIgDABg");
	this.shape_110.setTransform(423.2,189.85);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#003E74").s().p("AgCAYIAAggIAEAAIAAAggAAAgPQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAgBAAAAIAAgDIAAgCIACgBIABAAQABAAAAABQAAAAABAAQAAAAAAABQAAAAAAABIAAADQAAAAAAABQAAAAAAABQgBAAAAAAQAAAAgBAAg");
	this.shape_111.setTransform(421.15,189.85);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#003E74").s().p("AgHAXIgHgBIAAgtIAGAAIAAAMIAAAIQAFgGAGAAQAGAAADAEQADAEAAAIQAAAGgCADQgBAEgDACQgDACgFAAIgIgBgAgCgDIgGADIAAASIAIABQADAAADgBIACgEIABgHIgBgHQAAAAAAgBQgBAAAAgBQAAAAAAgBQgBAAAAAAIgFgBIgDABg");
	this.shape_112.setTransform(418.45,189.875);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#003E74").s().p("AgCAYIAAggIAEAAIAAAggAAAgPQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAgBAAAAIAAgDIAAgCIACgBIABAAQAAAAABABQAAAAABAAQAAAAAAABQAAAAAAABIAAADQAAAAAAABQAAAAAAABQgBAAAAAAQgBAAAAAAg");
	this.shape_113.setTransform(415.65,189.85);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#003E74").s().p("AAKARIgJgPIgBAAIgJAPIgGAAIALgRIgKgPIAGAAIAIANIABAAIAIgNIAHAAIgLAPIALARg");
	this.shape_114.setTransform(413.025,190.55);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#003E74").s().p("AgHAPQgDgBgCgEQgCgEAAgGQAAgGACgDQACgEADgCQADgBAFAAQAHAAADACQAEADAAAFQAAAFgCABQgCADgEAAIgOAAIABAGQAAAAABABQAAAAAAAAQABABAAAAQABAAAAAAIAFABIALgBIABAEIgGACIgHAAQgFAAgDgCgAgEgLQAAAAgBABQAAAAgBABQAAAAAAABQgBAAAAABIgBAGIANAAQAEAAAAgFQAAAAAAgBQAAgBgBAAQAAgBAAAAQAAgBgBAAQgCgCgEAAIgFABg");
	this.shape_115.setTransform(409.475,190.575);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#003E74").s().p("AABAYQgDAAgCgCQgCgCAAgEIAAgnIAFAAIAAAmIABADQAAAAAAAAQABAAAAABQABAAAAAAQAAAAABAAIADAAIABAEIgDABg");
	this.shape_116.setTransform(406.9,189.85);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#003E74").s().p("AgNAXIAAglQAAgEACgCQADgCAEAAIASAAIAAAFIgRAAIgDABQAAAAAAAAQgBABAAAAQAAABAAAAQAAABAAAAIAAALIASAAIAAAEIgSAAIAAAVg");
	this.shape_117.setTransform(403.975,189.875);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#003E74").s().p("AgMAQIAAgEIAJAAIADAAIAEAAIADgCIABgCIgBgEIgEgBIgIgCQgEgBgCgBQgCgCAAgEIABgGQABgBAAAAQAAgBABAAQAAAAABAAQABgBAAAAIAHAAIAHAAIAHABIgBAEIgDAAIgFgBIgFAAIgEABIgCABIAAADIAAACIACABIADABIAIACQAEABACABQACACAAAFQAAAEgCACQgBACgDAAIgIABIgMgBg");
	this.shape_118.setTransform(398.825,190.575);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#003E74").s().p("AgBAHIAAgNIADAAIAAANg");
	this.shape_119.setTransform(396.4,188.275);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#003E74").s().p("AgHAPQgDgBgCgEQgCgEAAgGQAAgGACgDQACgEADgCQADgBAFAAQAHAAADACQAEADAAAFQAAAFgCABQgCADgEAAIgOAAIABAGQAAAAABABQAAAAAAAAQABABAAAAQABAAAAAAIAFABIALgBIABAEIgGACIgHAAQgFAAgDgCgAgEgLQAAAAgBABQAAAAAAABQgBAAAAABQgBAAAAABIgBAGIANAAQAEAAAAgFQAAAAAAgBQAAgBgBAAQAAgBAAAAQAAgBgBAAQgCgCgEAAIgFABg");
	this.shape_120.setTransform(393.925,190.575);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#003E74").s().p("AgJARIAAggIAEAAIABAFQAGgGAHAAIABAAIgBAFIgBAAIgGABIgGAEIAAAXg");
	this.shape_121.setTransform(390.925,190.525);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#003E74").s().p("AgLAPQgCgCAAgFIAAgYIAGAAIAAAWQAAABAAABQAAAAAAABQAAAAAAABQAAAAABAAQAAABAAAAQABAAAAABQABAAAAAAQABAAABAAIAEgCIAGgDIAAgXIAGAAIAAAgIgFAAIAAgFIgHAEIgGACQgFAAgCgCg");
	this.shape_122.setTransform(387.475,190.6);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#003E74").s().p("AADAVQgDAAgCgBQgCgDAAgFIAAgSIgGAAIAAgFIAGAAIAAgKIAEAAIAAAKIALAAIAAAFIgLAAIAAASIABADIAEACIAFAAIAAADIgDABg");
	this.shape_123.setTransform(384.25,190.1);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#003E74").s().p("AgGAPQgDgBgCgEQgCgEABgGQgBgGACgDQACgEADgCQADgBAGAAIAFAAIAFABIgBAEIgIgBIgGABIgDAEQgCADAAAEQAAAFACACIADAEIAGABIAJAAIABADQgGACgFAAQgGAAgDgCg");
	this.shape_124.setTransform(381.4,190.575);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#003E74").s().p("AgLAPQgCgCAAgFIAAgYIAGAAIAAAWQAAABAAABQAAAAAAABQAAAAAAABQAAAAABAAQAAABAAAAQABAAAAABQABAAAAAAQABAAABAAIAEgCIAGgDIAAgXIAGAAIAAAgIgFAAIAAgFIgHAEIgGACQgFAAgCgCg");
	this.shape_125.setTransform(377.775,190.6);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#003E74").s().p("AgJARIAAggIAEAAIABAFQAGgGAHAAIABAAIgBAFIgBAAIgGABIgGAEIAAAXg");
	this.shape_126.setTransform(374.725,190.525);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#003E74").s().p("AADAVQgDAAgCgBQgCgDAAgFIAAgSIgGAAIAAgFIAGAAIAAgKIAEAAIAAAKIALAAIAAAFIgLAAIAAASIABADIAEACIAFAAIAAADIgDABg");
	this.shape_127.setTransform(371.85,190.1);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#003E74").s().p("AgNAXIAAgFIAEABIAIAAIAGgBQABAAAAAAQABAAAAAAQABgBAAAAQAAAAAAgBIABgFIAAgEIgCgCIgDgBIgJgDQgFgBgCgCQgDgDAAgGQABgFACgDQABgDADAAIAIgBQAIAAAGABIAAAEIgOAAIgEAAIgEACIgBAFQABAEABABQACACADABIAIACQAFABADADQACADAAAFQgBAGgBACQgCADgDABIgJABQgHAAgGgBg");
	this.shape_128.setTransform(368.7,189.875);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#003E74").s().p("AgJANQgEgCgCgDQgBgDAAgFQAAgHACgDQADgEAFAAQAFAAABACQADACAAAEIAAAOIAGgBQAAAAABgBQAAAAAAAAQABgBAAAAQAAgBAAAAIABgFIgBgLIAEgBIACAGIAAAHQAAAFgCADQgBADgEACQgEACgGAAQgGAAgDgCgAgKgGQgCACAAAEIABAFQAAAAABABQAAAAABABQAAAAABAAQAAABABAAIAGABIAAgNQAAgEgFAAQAAAAgBAAQgBAAAAABQgBAAAAAAQgBAAAAABg");
	this.shape_129.setTransform(291.375,86.875);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#003E74").s().p("AgJAMQgEgCgCgDQgBgDAAgFIAAgGIABgFIAEABIgBAIIABAGIAEADQADACAEAAQAFAAACgCIAEgDIABgGIAAgJIADgBQACAGAAAGQAAAFgCADQgBADgEACQgEABgGAAQgGAAgDgBg");
	this.shape_130.setTransform(291.375,90.3);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#003E74").s().p("AgPAKIAAgEIAFgBQgGgGAAgHIAAgBIAFABIAAABIABAGIAEAGIAXAAIAAAFg");
	this.shape_131.setTransform(291.325,93.125);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#003E74").s().p("AgJANQgEgBgCgDQgBgDAAgGQAAgFABgDQACgDAEgCQADgBAGgBQAGABAEABQAEACABADQACADAAAFQAAAGgCADQgBADgEABQgEACgGABQgGgBgDgCgAgHgIIgEADIgBAFIABAFIAEAEIAHABIAHgBQADgBABgDIABgFIgBgFQgBgCgDgBIgHAAIgHAAg");
	this.shape_132.setTransform(291.375,96.6);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#003E74").s().p("AgOAOQgEAAgCgCQgCgDAAgEIAAgSIAFAAIAAARIABADQAAAAAAAAQABABAAAAQABAAAAAAQABAAAAAAIALAAIAAgSIAEAAIAAASIAVAAIAAAGg");
	this.shape_133.setTransform(290.675,100.175);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#003E74").s().p("AgJAMQgEgCgCgDQgBgEAAgEIAAgGIABgFIAEABIgBAJIABAFIAEADQADABAEABQAFgBACgBIAEgDIABgFIAAgKIADgBQACAFAAAHQAAAEgCAEQgBADgEACQgEABgGAAQgGAAgDgBg");
	this.shape_134.setTransform(291.375,105.25);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#003E74").s().p("AgIADIAAgFIAgAAIAAAFgAgUADIgCAAIgBgBIAAgCQAAgBABAAQAAAAAAAAQAAgBABAAQAAAAABAAIADAAQAAAAABAAQAAAAABABQAAAAAAAAQAAAAAAABIAAACQAAAAAAAAQAAAAAAABQgBAAAAAAQgBAAAAAAg");
	this.shape_135.setTransform(290.65,107.75);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#003E74").s().p("AgPAYIAAgEIAFgBIgFgGIgBgHQAAgGAGgBQgGgHAAgHQAAgEACgCQADgCAEAAIAYAAIAAAFIgWAAIgFABQAAABAAAAQgBABAAAAQAAABAAAAQAAABAAAAIABAFIAEAGIAXAAIAAAFIgWAAQgBAAgBAAQAAAAgBAAQAAAAgBABQAAAAgBAAQAAABAAAAQgBAAAAABQAAAAAAABQAAAAAAABIABAEIAEAHIAXAAIAAAFg");
	this.shape_136.setTransform(291.325,111.525);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#003E74").s().p("AgNANQgBgBAAAAQgBgBAAAAQAAgBAAAAQgBgBAAAAIAAgHIAAgHIABgHIAEABIAAADIgBAFIAAAFIABAEIABACIADAAIACAAIABgCIABgDIACgIQABgEABgCQACgCAFAAQAEAAACACQACABAAADIABAHIgBANIgEAAIAAgJIAAgDIAAgEIgCgDIgCgBIgEABIgBAEIgCAIQgBAEgBACQgCACgEAAIgGgBg");
	this.shape_137.setTransform(291.375,116.225);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#003E74").s().p("AgIADIAAgEIAgAAIAAAEgAgUADIgCAAIgBgCIAAgBQAAgBABAAQAAAAAAgBQAAAAABAAQAAAAABAAIADAAQAAAAABAAQAAAAABAAQAAABAAAAQAAAAAAABIAAABQAAABAAAAQAAAAAAABQgBAAAAAAQgBAAAAAAg");
	this.shape_138.setTransform(290.65,118.75);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#003E74").s().p("AgJANQgEgCgCgDQgBgDAAgFQAAgHACgDQADgEAFAAQAFAAABACQADACAAAEIAAAOIAGgBQAAAAABgBQAAAAAAAAQABgBAAAAQAAgBAAAAIABgFIgBgLIAEgBIACAGIAAAHQAAAFgCADQgBADgEACQgEACgGAAQgGAAgDgCgAgKgGQgCACAAAEIABAFQAAAAABABQAAAAABAAQAAABABAAQAAAAABABIAGABIAAgNQAAgEgFAAQAAAAgBAAQgBAAAAABQgBAAAAAAQgBAAAAABg");
	this.shape_139.setTransform(291.375,121.375);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#003E74").s().p("AgTANQgDgBAAgDIgBgJQAAgHABgFIAEAAIAAAMIAAAFIACADIAFACQAEAAABgCQACgBABgDIACgJQABgFADgCQADgCAFAAQAGgBACACQADACABADIABAIQAAAIgBAGIgFAAIABgEIAAgIIgBgGQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAAAgBAAIgFgCIgEABIgCACIgBADIgDAJQgBAFgCACQgDADgGgBQgFAAgDgCg");
	this.shape_140.setTransform(290.675,125.1);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f().s("#003E74").ss(2,1,1).p("EAhZALZIABAAQABAAABAAIAEAAIAFAAEAhwALZIABABIgnAdEAhKAK8IAlAcAC6r2IAdAnACbrOIAfgoAicLZIACABIgoAdAizLZIABAAQABAAABAAIAEAAIAFAAAjCK8IAlAcADGLZIgMAAIAA3PEghwgLOIAegoIAdAnEghFALZIgNAAIAA3PAi3LZI97AAEAhVALZI97AA");
	this.shape_141.setTransform(284.975,105.2);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f().s("#000000").ss(2,0,0,4).p("EAhDAAAIgEAAEAhGAAAQABAAABAAQABAAABAAEAhPAAAIAGAAQACAAACAAIABAAAi9AAIAGAAQACAAACAAIABAAAjGAAQABAAABAAQABAAABAAAjJAAIgEAAACwAAIAHAAQADAAADAAQADAAAEAAEghbAAAIAGAAQADAAAEAAQADAAADAA");
	this.shape_142.setTransform(287.1524,178.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(325.5,228.3,176.60000000000002,141.5);
// library properties:
lib.properties = {
	id: '4B93EBDA609CD5499832C33DCA53321E',
	width: 550,
	height: 400,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
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
an.compositions['4B93EBDA609CD5499832C33DCA53321E'] = {
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
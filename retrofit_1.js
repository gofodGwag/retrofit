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


(lib.Symbol4 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FF0000").s().p("AgjAkQgPgPAAgVQAAgUAPgPQAPgPAUAAQAVAAAPAPQAPAPAAAUQAAAVgPAPQgPAPgVAAQgUAAgPgPg");
	this.shape.setTransform(11.2,11.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(6.2,6.2,10.100000000000001,10.100000000000001), null);


(lib.SliderButton = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#666666").ss(0.1,2,1).p("AAAiUQAVAAAOAOQAPAPAAAVIAADFQAAAVgPAOQgOAPgVAAQgUAAgPgPQgOgOAAgVIAAjFQAAgVAOgPQAPgOAUAAg");
	this.shape.setTransform(-0.1,-39.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#003E74").s().p("AgjCGQgOgOAAgVIAAjFQAAgUAOgQQAQgOATAAQAUAAAPAOQAPAQAAAUIAADFQAAAVgPAOQgPAPgUAAQgTAAgQgPg");
	this.shape_1.setTransform(-0.1,-39.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.1,-55.4,12,31.799999999999997);


(lib.SliderBar = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Regions
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#003E74").ss(0.1,2,1).p("Egn3gAuMBPvAAAIAABdMhPvAAAg");
	this.shape.setTransform(255.225,4.65);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D4EFFC").s().p("Egn3AAuIAAhcMBPvAAAIAABcg");
	this.shape_1.setTransform(255.225,4.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.SliderBar, new cjs.Rectangle(-1,-1,512.5,11.3), null);


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

	// Layer_4
	this.instance = new lib.Symbol4();
	this.instance.setTransform(-411.6,264.2,1,1,0,0,0,11.2,11.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({guide:{path:[-411.6,264.2,-404.2,240.7,-396.9,217.3,-347.2,152.2,-297.6,87.2,-183.2,87.2,-68.8,87.2]}},267).wait(1));

	// Layer_3 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(1,1,1).p("Aayt1MgjwAAAIvhUVIiSHW");
	this.shape.setTransform(-240.225,175.625);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(268));

	// Layer_2
	this.instance_1 = new lib.Symbol4();
	this.instance_1.setTransform(2.25,264.2,1,1,0,0,0,11.2,11.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({guide:{path:[2.4,264.2,9.9,176.1,17.5,88,66.9,87.5,116.3,87.1,224.4,200.4,348.3,212.2]}},267).wait(1));

	// Layer_3 copy
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FF0000").ss(1,1,1).p("A7BN2ICY7rIPbAAQQ5RtTXB2");
	this.shape_1.setTransform(175.275,175.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(268));

	// Layer_10
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AYoN/IAAgCIAAg8IAAgCIACAAIACAAIAAACIAAA8IAAACIgCABIgCgBgA4lNRIgBgCIAAg8IABgBIACgBIABABIABABIAAA8IgBACIgBABIgCgBgEAoEANRIgBgCIAAg8IABgCIACgBIACABIABACIAAA8IgBACIgCAAIgCAAgEgoHAM+IgBgBIAAg8IABgCIACgBIACABIABACIAAA8IgBABIgCABIgCgBgAYoMHIAAgCIAAg8IAAgBIACgBIACABIAAABIAAA8IAAACIgCABIgCgBgA4lLZIgBgCIAAg8IABgBIACgBIABABIABABIAAA8IgBACIgBABIgCgBgEAoEALZIgBgCIAAg8IABgCIACgBIACABIABACIAAA8IgBACIgCAAIgCAAgEgoHALHIgBgCIAAg8IABgCIACgBIACABIABACIAAA8IgBACIgCAAIgCAAgAYoKPIAAgCIAAg8IAAgCIACAAIACAAIAAACIAAA8IAAACIgCABIgCgBgA4lJhIgBgCIAAg8IABgCIACAAIABAAIABACIAAA8IgBACIgBABIgCgBgEAoEAJgIgBgBIAAg8IABgCIACgBIACABIABACIAAA8IgBABIgCABIgCgBgEgoHAJOIgBgBIAAg8IABgCIACgBIACABIABACIAAA8IgBABIgCABIgCgBgAYoIXIAAgCIAAg8IAAgCIACAAIACAAIAAACIAAA8IAAACIgCABIgCgBgA4lHpIgBgCIAAg8IABgBIACgBIABABIABABIAAA8IgBACIgBABIgCgBgEAoEAHoIgBgBIAAg8IABgCIACgBIACABIABACIAAA8IgBABIgCABIgCgBgEgoHAHXIgBgCIAAg8IABgCIACgBIACABIABACIAAA8IgBACIgCAAIgCAAgAYoGfIAAgCIAAg8IAAgBIACgBIACABIAAABIAAA8IAAACIgCABIgCgBgA4lFxIgBgCIAAg8IABgBIACgBIABABIABABIAAA8IgBACIgBABIgCgBgEAoEAFxIgBgCIAAg8IABgCIACgBIACABIABACIAAA8IgBACIgCAAIgCAAgAYoEnIAAgCIAAg8IAAgCIACAAIACAAIAAACIAAA8IAAACIgCABIgCgBgA4lD5IgBgCIAAg8IABgCIACAAIABAAIABACIAAA8IgBACIgBABIgCgBgEAoEAD4IgBgBIAAg8IABgCIACgBIACABIABACIAAA8IgBABIgCABIgCgBgAYoCvIAAgCIAAg8IAAgCIACAAIACAAIAAACIAAA8IAAACIgCABIgCgBgA4lCBIgBgCIAAg8IABgBIACgBIABABIABABIAAA8IgBACIgBABIgCgBgEAoEACAIgBgBIAAg8IABgCIACgBIACABIABACIAAA8IgBABIgCABIgCgBgAYoA3IAAgCIAAg7IAAgBIACgBIACABIAAABIAAA7IAAACIgCABIgCgBgA4lAJIgBgCIAAg7IABgBIACgBIABABIABABIAAA7IgBACIgBABIgCgBgEAoEAAJIgBgCIAAg7IABgCIACgBIACABIABACIAAA7IgBACIgCAAIgCAAgAYohAIAAgCIAAg8IAAgCIACAAIACAAIAAACIAAA8IAAACIgCABIgCgBgA4lhuIgBgCIAAg8IABgCIACAAIABAAIABACIAAA8IgBACIgBABIgCgBgEAoEgBvIgBgBIAAg8IABgCIACgBIACABIABACIAAA8IgBABIgCABIgCgBgAYoi4IAAgCIAAg8IAAgCIACAAIACAAIAAACIAAA8IAAACIgCABIgCgBgA4ljmIgBgCIAAg8IABgBIACgBIABABIABABIAAA8IgBACIgBABIgCgBgEAoEgDnIgBgBIAAg8IABgCIACgBIACABIABACIAAA8IgBABIgCABIgCgBgAYokwIAAgCIAAg8IAAgBIACgBIACABIAAABIAAA8IAAACIgCABIgCgBgA4lleIgBgCIAAg8IABgBIACgBIABABIABABIAAA8IgBACIgBABIgCgBgEAoEgFeIgBgCIAAg8IABgCIACgBIACABIABACIAAA8IgBACIgCAAIgCAAgAYomoIAAgCIAAg8IAAgCIACAAIACAAIAAACIAAA8IAAACIgCABIgCgBgA4lnWIgBgCIAAg8IABgCIACAAIABAAIABACIAAA8IgBACIgBABIgCgBgEAoEgHXIgBgBIAAg8IABgCIACgBIACABIABACIAAA8IgBABIgCABIgCgBgAYoogIAAgCIAAg8IAAgCIACAAIACAAIAAACIAAA8IAAACIgCABIgCgBgA4lpOIgBgCIAAg8IABgCIACAAIABAAIABACIAAA8IgBACIgBABIgCgBgEAoEgJPIgBgBIAAg8IABgCIACgBIACABIABACIAAA8IgBABIgCABIgCgBgAYoqYIAAgCIAAg8IAAgBIACgBIACABIAAABIAAA8IAAACIgCABIgCgBgA4lrGIgBgCIAAg8IABgBIACgBIABABIABABIAAA8IgBACIgBABIgCgBgEAoEgLGIgBgCIAAg8IABgCIACgBIACABIABACIAAA8IgBACIgCAAIgCAAgAYosQIAAgCIAAg8IAAgCIACAAIACAAIAAACIAAA8IAAACIgCABIgCgBgA4ls+IgBgCIAAg8IABgCIACAAIABAAIABACIAAA8IgBACIgBABIgCgBgEAoEgM/IgBgBIAAg8IABgCIACgBIACABIABACIAAA8IgBABIgCABIgCgBg");
	this.shape_2.setTransform(-140.4,176.375);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(268));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-416.6,78.8,770,190.5);


// stage content:
(lib.retrofit_1 = function(mode,startPosition,loop,reversed) {
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
		// Enable touch events while allowing the touch events to bubble up to the document.
		
		createjs.Touch.enable(stage, false, true);
		
		// Don't let the stage to automatically prevent default touch events.
		
		stage.preventSelection = false;
		
		this.graph1.stop()
		this.button.on("mousedown", function (e)
		
			{
		
				e.target.offsetX = (e.stageX / stage.scaleX) - e.target.x;
		
			}.bind(this));
		
		this.button.on("pressmove", function (e)
		
			{
		
				e.target.x = this.clamp((e.stageX / stage.scaleX) - e.target.offsetX, this.bar.x, this.bar.x + this.bar.nominalBounds.width);
		
				this.setProportion();
				this.controlTower1();
		
			}.bind(this));
		
		this.setProportion = function ()
		
		{
			var prop = (this.button.x - this.bar.x) / this.bar.nominalBounds.width;
			this.txt.x = this.button.x;
			this.txt.text = Math.round(prop * 100) + "%";
			this.graph1.gotoAndStop(Math.floor(this.graph1.timeline.duration * prop))
		}.bind(this);
		
		this.clamp = function (value, min, max)
		
		{
		
			if (value < min)
		
				return min;
		
			else if (value > max)
		
				return max;
		
			else
		
				return value;
		
		}
		
		setTimeout(this.setProportion, 0);
		
		
		
		//buttons
		this.tallBBtn.txt.text = "hide";
		this.tallBBtn.addEventListener("click", tallBBtnfunction.bind(this));
		
		
		//create function to start/stop animation and toggle button text
		function tallBBtnfunction() {
			if (this.tallBBtn.txt.text == "hide") {
				this.tallBBtn.txt.text = "show";
				this.graph1.visible = false;
			} else {
		
				this.tallBBtn.txt.text = "hide";
				this.graph1.visible = true;
			}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// JS
	this.graph1 = new lib.Symbol22();
	this.graph1.name = "graph1";
	this.graph1.setTransform(416.65,156.75,0.6655,0.6655,0,0,0,174.8,132.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AAAAIQAAAAAAgBQgBAAAAAAQgBAAAAgBQAAAAgBgBQgCgCABgEQABgFADAAQACgBACADIABAFQAAABAAAAQAAABAAABQAAAAAAAAQgBABAAAAQgBABAAAAQAAABgBAAQAAAAgBAAQAAABgBAAIAAAAg");
	this.shape.setTransform(91.2607,97.2994);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.graph1}]}).wait(1));

	// Bar
	this.txt = new cjs.Text("38%", "8px 'Helvetica'", "#666666");
	this.txt.name = "txt";
	this.txt.lineHeight = 13;
	this.txt.lineWidth = 38;
	this.txt.parent = this;
	this.txt.setTransform(16.8,276.05);

	this.button = new lib.SliderButton();
	this.button.name = "button";
	this.button.setTransform(19.9,342.15);
	new cjs.ButtonHelper(this.button, 0, 1, 2, false, new lib.SliderButton(), 3);

	this.bar = new lib.SliderBar();
	this.bar.name = "bar";
	this.bar.setTransform(19.8,298.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.bar},{t:this.button},{t:this.txt}]}).wait(1));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#003E74").s().p("AgMAQIASgFIAEgBIAAgBIgEgBIgQgEIgCgBIAAgBIAAgDIAAgBIACAAIAQgFIACgBIACAAIAAgBIgBAAIgDgBIgSgFIAAgFIAXAIIABAAIABACIAAAEIgBABIgBABIgQAEIgCAAIgCAAIAAAAIABAAIADACIAQADIABABIABABIAAAFIgBABIgBAAIgXAIg");
	this.shape_1.setTransform(291.45,215.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#003E74").s().p("AgHALQgDgBgBgDQgCgCAAgFQAAgDACgDQABgDADgBQADgBAEAAQAFAAADABQADABABADIABAGIgBAHQgBADgDABIgIABIgHgBgAgFgGIgDADIAAADIAAAFIADACIAFABIAGgBIADgCIABgFIgBgDIgDgDIgGAAIgFAAg");
	this.shape_2.setTransform(291.45,219.525);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#003E74").s().p("AgRALIAAgFIAcAAIACgBIABgCIAAgNIAEAAIAAANQAAAEgCACQgBACgEAAg");
	this.shape_3.setTransform(290.925,222.275);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#003E74").s().p("AgTgIIAAgDIAnAUIAAADg");
	this.shape_4.setTransform(291.1,226.325);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#003E74").s().p("AgSAGIAAgFIAdAAIADgBIABgBIAAgDIAEgBIAAADIAAACQAAAAAAABQAAAAAAABQgBAAAAABQAAAAAAABQgCACgEAAg");
	this.shape_5.setTransform(290.9,229.425);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#003E74").s().p("AgSAGIAAgFIAdAAIADgBIABgBIAAgDIAEgBIAAADIAAACQAAAAAAABQAAAAAAABQgBAAAAABQAAAAAAABQgCACgEAAg");
	this.shape_6.setTransform(290.9,231.025);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#003E74").s().p("AADALQgCAAgBgCQgCgCAAgDIAAgKIgCAAIgDABIgBAFIAAAJIgEABIgBgLQAAgFADgCQABgCAFAAIARAAIAAADIgEABIADAFIABAEQAAAEgCACQgCADgDgBgAABADIABADIACABIABAAQABAAABgBQAAAAABAAQAAAAAAAAQAAAAABAAIABgEIgBgDIgEgFIgEAAg");
	this.shape_7.setTransform(291.45,233.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#003E74").s().p("AgMATIAAgEIAEAAIgDgFIgBgFQAAgFAEgBQgEgFAAgFQAAgEACgCQABgBAEAAIASAAIAAAEIgRAAIgDABQAAAAgBABQAAAAAAAAQAAABAAAAQAAABAAAAIAAAEIAEAFIARAAIAAADIgRAAIgDABQAAAAgBABQAAAAAAAAQAAABAAAAQAAABAAAAIAAAEIAEAFIARAAIAAAEg");
	this.shape_8.setTransform(291.425,237.225);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#003E74").s().p("AgOALQgBAAAAgBQgBAAAAgBQAAAAgBgBQAAAAAAgBIgBgHIABgKIADAAIAAAKIAAAFIACABIAEABIAEgBQAAAAABAAQAAAAAAgBQABAAAAgBQAAgBAAAAIACgHQAAgEACgCQADgBAEAAIAGABIAEAEIAAAGIgBAMIgEgBIABgEIAAgGIgBgEIgBgCIgEgCIgDABIgCACIgBACIgCAHQgBAEgCABQgCACgEAAIgGgBg");
	this.shape_9.setTransform(290.9,241);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#003E74").s().p("AgSAMIAAgFIALAAIAFAAIgEgGIgBgFQAAgDACgBQACgDADAAIATAAIAAAFIgSAAIgDABIgBADIABADIACAGIATAAIAAAFg");
	this.shape_10.setTransform(290.775,77.95);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#003E74").s().p("AAHAMIgDgDIgBABIgDABIgBgBIgCgBIgCACIgEABIgFgBQgBgBAAAAQgBAAAAgBQAAAAAAgBQgBAAAAgBIgBgGIABgFIAAgIIACAAIABAEIAEgBQAFAAACACQACADAAAFIgBAFIACABIABgBIABgCIABgIQABgEABgBQACgCADAAIAFABQABABAAAAQABAAAAABQAAAAAAABQABABAAAAIABAHIgBAHQAAABgBAAQAAABAAAAQAAABgBAAQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQgBAAAAAAIgEgBgAAHgFIAAADIgCAIIADACIACABIADgBIABgCIABgFIgBgEIgBgDIgDAAIgCAAIgBABgAgNgEIgBAFIABAFQAAABAAAAQABAAAAAAQABABAAAAQABAAAAAAQABAAABAAQAAAAABgBQAAAAABAAQAAAAAAgBIABgFIgBgFQAAAAAAAAQgBgBAAAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBABQAAAAAAAAg");
	this.shape_11.setTransform(291.875,80.925);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#003E74").s().p("AgQACIgBAAIAAgBIAAgBQAAAAAAgBQAAAAAAAAQAAAAAAAAQABAAAAAAIADAAQAAAAABAAQAAAAAAAAQAAAAAAAAQAAABAAAAIAAABQAAAAAAABQAAAAAAAAQAAAAAAAAQgBAAAAAAgAgGACIAAgDIAZAAIAAADg");
	this.shape_12.setTransform(290.8,83.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#003E74").s().p("AgRANIAAgFIAPAAIAAgQIgPAAIAAgEIAjAAIAAAEIgRAAIAAAQIARAAIAAAFg");
	this.shape_13.setTransform(290.825,85.525);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#003E74").s().p("AgTgIIAAgDIAnAUIAAADg");
	this.shape_14.setTransform(291,89.775);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#003E74").s().p("AgHALQgDgCgCgDIgBgGQAAgFACgDQADgDAEAAQAEAAABACQAAAAAAABQAAAAABABQAAAAAAABQAAABAAABIAAALIAFgCQAAAAABAAQAAAAAAAAQAAgBABAAQAAgBAAAAIABgEIgBgJIADAAIABAFIAAAFIgBAGQgBADgDACIgIABIgHgBgAgHgEIgBAEIAAAEIACACIAGABIAAgKQAAgBgBAAQAAgBAAAAQgBgBAAAAQgBAAgBAAQgBAAAAAAQgBAAAAAAQgBABAAAAQAAAAAAABg");
	this.shape_15.setTransform(291.35,93.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#003E74").s().p("AAHAMIgDgDIgBABIgDABIgBgBIgCgBIgCACIgEABIgFgBQgBAAAAgBQgBAAAAgBQAAAAAAgBQgBAAAAgBIgBgGIABgFIAAgIIACAAIABAEIAEgBQAFAAACACQACADAAAFIgBAFIACABIABgBIABgCIABgIQABgEABgBQACgCADAAIAFABQABABAAAAQABABAAAAQAAABAAAAQABABAAAAIABAHIgBAHQAAAAgBABQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAQAAABgBAAQAAAAgBAAQgBAAAAAAIgEgBgAAHgFIAAADIgCAIIADACIACABIADgBIABgCIABgFIgBgEIgBgDIgDAAIgCAAIgBABgAgNgEIgBAFIABAFQAAABAAAAQABAAAAAAQABABAAAAQABAAAAAAQABAAABAAQAAAAABgBQAAAAABAAQAAAAAAgBIABgFIgBgFQAAAAAAAAQgBgBAAAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBABQAAAAAAAAg");
	this.shape_16.setTransform(291.875,96.625);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#003E74").s().p("AgMAIIAAgDIAEgBQgEgFAAgFIAAgBIAEAAIAAACIABAEIACAFIASAAIAAAEg");
	this.shape_17.setTransform(291.325,99.025);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#003E74").s().p("AADALQgCAAgBgCQgCgCAAgDIAAgKIgCAAIgDABIgBAFIAAAJIgEABIgBgLQAAgFACgCQACgDAFABIARAAIAAADIgEABIADAFIABAEQAAAEgCACQgCACgDAAgAABADIABADIACABIABAAQABAAABgBQAAAAABAAQAAAAAAAAQAAAAABAAIABgEIgBgDIgEgFIgEAAg");
	this.shape_18.setTransform(291.35,101.75);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#003E74").s().p("AgRALIAAgFIAcAAIACgBIABgCIAAgNIAEAAIAAANQAAAEgCACQgBACgEAAg");
	this.shape_19.setTransform(290.825,104.375);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#003E74").s().p("AgMAQIASgFIAEgBIAAgBIgEgBIgRgEIgBgBIAAgBIAAgDIAAgBIABAAIARgFIACgBIACAAIAAgBIgBAAIgDgBIgSgFIAAgFIAXAIIABAAIABACIAAAEIgBABIgBABIgQAEIgCAAIgCAAIAAAAIABAAIADACIAQADIABABIABABIAAAFIgBABIgBAAIgXAIg");
	this.shape_20.setTransform(19.1,215.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#003E74").s().p("AgHALQgDgBgBgDQgBgCgBgFQABgDABgDQABgDADgBQADgBAEAAQAFAAADABQADABABADIABAGIgBAHQgBADgDABIgIABIgHgBgAgFgGIgDADIAAADIAAAFIADACIAFABIAGgBIADgCIABgFIgBgDIgDgDIgGAAIgFAAg");
	this.shape_21.setTransform(19.1,219.525);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#003E74").s().p("AgRALIAAgFIAcAAIACgBIABgCIAAgNIAEAAIAAANQAAAEgCACQgBACgEAAg");
	this.shape_22.setTransform(18.575,222.275);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#003E74").s().p("AgTgIIAAgDIAnAUIAAADg");
	this.shape_23.setTransform(18.75,226.325);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#003E74").s().p("AgSAGIAAgFIAeAAIACgBIABgBIAAgDIAEgBIAAADIAAACQAAAAAAABQAAAAAAABQgBAAAAABQAAAAAAABQgDACgDAAg");
	this.shape_24.setTransform(18.55,229.425);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#003E74").s().p("AgSAGIAAgFIAeAAIACgBIABgBIAAgDIAEgBIAAADIAAACQAAAAAAABQAAAAAAABQgBAAAAABQAAAAAAABQgDACgDAAg");
	this.shape_25.setTransform(18.55,231.025);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#003E74").s().p("AADALQgCAAgBgCQgCgCAAgDIAAgKIgCAAIgDABIgBAFIAAAJIgEABIgBgLQAAgFACgCQACgCAFAAIARAAIAAADIgEABIADAFIABAEQAAAEgCACQgCADgDgBgAABADIABADIACABIABAAQABAAABgBQAAAAABAAQAAAAAAAAQAAAAABAAIABgEIgBgDIgEgFIgEAAg");
	this.shape_26.setTransform(19.1,233.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#003E74").s().p("AgMATIAAgEIAEAAIgDgFIgBgFQAAgFAEgBQgEgFAAgFQAAgEACgCQABgBAEAAIASAAIAAAEIgRAAIgDABQAAAAgBABQAAAAAAAAQAAABAAAAQAAABAAAAIAAAEIAEAFIARAAIAAADIgRAAIgDABQAAAAgBABQAAAAAAAAQAAABAAAAQAAABAAAAIAAAEIAEAFIARAAIAAAEg");
	this.shape_27.setTransform(19.075,237.225);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#003E74").s().p("AgOALQgBAAAAgBQgBAAAAgBQAAAAgBgBQAAAAAAgBIgBgHIABgKIAEAAIAAAKIAAAFIABABIAEABIAEgBQAAAAABAAQAAAAAAgBQABAAAAgBQAAgBAAAAIACgHQAAgEADgCQACgBAEAAIAGABIAEAEIAAAGIgBAMIgEgBIABgEIAAgGIgBgEIgBgCIgEgCIgDABIgCACIgBACIgCAHQgBAEgCABQgCACgEAAIgGgBg");
	this.shape_28.setTransform(18.55,241);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#003E74").s().p("AgSAMIAAgFIALAAIAFAAIgEgGIgBgFQAAgDACgBQACgDADAAIATAAIAAAFIgSAAIgDABIgBADIABADIACAGIATAAIAAAFg");
	this.shape_29.setTransform(18.425,77.95);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#003E74").s().p("AAHAMIgDgDIgBABIgDABIgBgBIgCgBIgCACIgEABIgFgBQgBgBAAAAQgBAAAAgBQAAAAAAgBQgBAAAAgBIgBgGIABgFIAAgIIACAAIABAEIAEgBQAFAAACACQACADAAAFIgBAFIACABIABgBIABgCIABgIQABgEABgBQACgCADAAIAFABQABABAAAAQABAAAAABQAAAAAAABQABABAAAAIABAHIgBAHQAAABgBAAQAAABAAAAQAAABgBAAQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgEgBgAAHgFIAAADIgCAIIADACIACABIADgBIABgCIABgFIgBgEIgBgDIgDAAIgCAAIgBABgAgNgEIgBAFIABAFQAAABAAAAQABAAAAAAQABABAAAAQABAAAAAAQABAAABAAQAAAAABgBQAAAAABAAQAAAAAAgBIABgFIgBgFQAAAAAAAAQgBgBAAAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBABQAAAAAAAAg");
	this.shape_30.setTransform(19.525,80.925);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#003E74").s().p("AgQACIgBAAIgBgBIAAgBQAAAAABgBQAAAAAAAAQAAAAAAAAQABAAAAAAIADAAQAAAAABAAQAAAAAAAAQAAAAAAAAQAAABAAAAIAAABQAAAAAAABQAAAAAAAAQAAAAAAAAQgBAAAAAAgAgGACIAAgDIAZAAIAAADg");
	this.shape_31.setTransform(18.45,83.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#003E74").s().p("AgRANIAAgFIAPAAIAAgQIgPAAIAAgEIAjAAIAAAEIgRAAIAAAQIARAAIAAAFg");
	this.shape_32.setTransform(18.475,85.525);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#003E74").s().p("AgTgIIAAgDIAnAUIAAADg");
	this.shape_33.setTransform(18.65,89.775);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#003E74").s().p("AgHALQgDgCgCgDIgBgGQAAgFACgDQACgDAFAAQAEAAABACQAAAAAAABQAAAAABABQAAAAAAABQAAABAAABIAAALIAFgCQAAAAABAAQAAAAAAAAQAAgBABAAQAAgBAAAAIABgEIgBgJIADAAIABAFIAAAFIAAAGQgCADgDACIgIABIgHgBgAgHgEIgBAEIAAAEIADACIAEABIAAgKQAAgBAAAAQAAgBAAAAQgBgBAAAAQgBAAgBAAQgBAAAAAAQgBAAAAAAQgBABAAAAQAAAAAAABg");
	this.shape_34.setTransform(19,93.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#003E74").s().p("AAHAMIgDgDIgBABIgDABIgBgBIgCgBIgCACIgEABIgFgBQgBAAAAgBQgBAAAAgBQAAAAAAgBQgBAAAAgBIgBgGIABgFIAAgIIACAAIABAEIAEgBQAFAAACACQACADAAAFIgBAFIACABIABgBIABgCIABgIQABgEABgBQACgCADAAIAFABQABABAAAAQABABAAAAQAAABAAAAQABABAAAAIABAHIgBAHQAAAAgBABQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgEgBgAAHgFIAAADIgCAIIADACIACABIADgBIABgCIABgFIgBgEIgBgDIgDAAIgCAAIgBABgAgNgEIgBAFIABAFQAAABAAAAQABAAAAAAQABABAAAAQABAAAAAAQABAAABAAQAAAAABgBQAAAAABAAQAAAAAAgBIABgFIgBgFQAAAAAAAAQgBgBAAAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBABQAAAAAAAAg");
	this.shape_35.setTransform(19.525,96.625);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#003E74").s().p("AgMAIIAAgDIAEgBQgEgFAAgFIAAgBIAEAAIAAACIABAEIACAFIASAAIAAAEg");
	this.shape_36.setTransform(18.975,99.025);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#003E74").s().p("AAEALQgDAAgCgCQgBgCAAgDIAAgKIgCAAIgDABIgBAFIAAAJIgEABIgBgLQAAgFACgCQACgDAFABIARAAIAAADIgEABIADAFIABAEQAAAEgBACQgCACgEAAgAABADIABADIACABIABAAQABAAABgBQAAAAABAAQAAAAAAAAQAAAAABAAIABgEIgBgDIgEgFIgEAAg");
	this.shape_37.setTransform(19,101.75);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#003E74").s().p("AgRALIAAgFIAcAAIACgBIABgCIAAgNIAEAAIAAANQAAAEgCACQgBACgEAAg");
	this.shape_38.setTransform(18.475,104.375);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#003E74").s().p("AgHAPQgDgBgCgEQgCgEABgGQgBgFACgFQACgDADgBQADgCAEAAQAIAAADACQADADAAAGQAAAEgBABQgDACgEABIgOAAIACAGIADADIAFAAIALgBIABAEIgGABIgHABQgEAAgEgCgAgDgLQgBABAAAAQgBAAAAABQgBAAAAABQAAAAAAABIgCAGIANAAQAEAAgBgEQAAgBAAgBQAAgBAAAAQAAgBAAAAQgBgBAAAAQgCgBgEgBIgEABg");
	this.shape_39.setTransform(528.2,256.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#003E74").s().p("AABAXQgDAAgCgCQgCgCAAgDIAAgnIAGAAIAAAlIAAAEIADABIADAAIABADIgDABg");
	this.shape_40.setTransform(525.675,255.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#003E74").s().p("AgGAXIgIgCIAAgsIAGAAIAAAMIgBAHQAGgFAGAAQAGAAADAEQADADAAAIQAAAGgCAEQgBAEgDACQgDACgGAAIgGgBgAgDgDIgFADIAAASIAIABIAFgBIADgEIABgIIgBgGQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAAAAAAAQgCgCgDAAIgEACg");
	this.shape_41.setTransform(522.625,255.925);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#003E74").s().p("AgCAXIAAgfIAFAAIAAAfgAAAgPQgBAAAAAAQgBAAAAAAQAAgBAAAAQAAAAAAAAIAAgFIAAgBIACAAIABAAQABAAAAAAQAAAAABAAQAAABAAAAQAAAAAAAAIAAAFQAAAAAAAAQAAAAAAABQgBAAAAAAQAAAAgBAAg");
	this.shape_42.setTransform(519.825,255.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#003E74").s().p("AAKAQIgJgOIgBAAIgJAOIgGAAIALgQIgKgPIAGAAIAIANIABAAIAIgNIAGAAIgKAPIALAQg");
	this.shape_43.setTransform(517.25,256.575);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#003E74").s().p("AgHAPQgEgBgBgEQgBgEgBgGQABgFABgFQABgDAEgBQADgCAFAAQAHAAADACQADADAAAGQAAAEgCABQgBACgEABIgOAAIABAGIADADIAFAAIALgBIAAAEIgFABIgHABQgEAAgEgCgAgEgLQAAABAAAAQgBAAAAABQgBAAAAABQAAAAgBABIAAAGIAMAAQADAAABgEQAAgBgBgBQAAgBAAAAQAAgBAAAAQgBgBAAAAQgCgBgEgBIgFABg");
	this.shape_44.setTransform(513.75,256.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#003E74").s().p("AABAXQgDAAgCgCQgCgCAAgDIAAgnIAGAAIAAAlIAAAEIADABIADAAIABADIgDABg");
	this.shape_45.setTransform(511.225,255.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#003E74").s().p("AgNAXIAAglQAAgEACgCQADgCAEAAIASAAIAAAFIgRAAIgDABIgBADIAAALIASAAIAAAEIgSAAIAAAVg");
	this.shape_46.setTransform(508.4,255.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#003E74").s().p("AgGAYIAAgbIgFAAIAAgEIAFgBIAAgFQAAgFADgDQACgCAEAAIAJABIAAAEIgHAAIgFABIAAAEIAAAFIAJAAIAAAFIgJAAIAAAbg");
	this.shape_47.setTransform(313.875,253.725);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#003E74").s().p("AgGAYIAAgbIgFAAIAAgEIAFgBIAAgFQAAgFADgDQACgCAEAAIAJABIAAAEIgHAAIgFABIAAAEIAAAFIAJAAIAAAFIgJAAIAAAbg");
	this.shape_48.setTransform(311.325,253.725);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#003E74").s().p("AgCAXIAAggIAFAAIAAAggAAAgPQgBAAAAAAQgBAAAAAAQAAgBAAAAQAAAAAAAAIAAgFIAAAAIACgBIABAAQABAAAAAAQAAAAABAAQAAABAAAAQAAAAAAAAIAAAFQAAAAAAAAQAAAAAAABQgBAAAAAAQAAAAgBAAg");
	this.shape_49.setTransform(309.125,253.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#003E74").s().p("AADAVQgDAAgCgCQgCgCAAgEIAAgTIgGAAIAAgEIAGgBIAAgJIAFAAIAAAJIAKAAIAAAFIgKAAIAAASIABADIADABIAFAAIABAEIgEABg");
	this.shape_50.setTransform(307.025,254.025);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#003E74").s().p("AgNAWIAAgEIAFAAIAHAAIAGAAIADgCIABgFIAAgEIgCgCIgEgCIgIgCQgFgBgCgCQgCgDAAgGQAAgFABgDQACgCADgBIAIgBIANABIAAAFIgNgBIgFABIgCACQAAAAgBAAQAAABAAAAQAAABAAABQAAAAAAABQAAAEABABQABACAEABIAIACQAFABACACQACAEAAAFQAAAFgBADQgCADgDABIgJABIgNgCg");
	this.shape_51.setTransform(303.925,253.825);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#003E74").s().p("AgHAPQgEgBgBgFQgCgDAAgGQAAgGACgEQABgDAEgBQADgCAEAAQAIAAADADQAEACAAAGQgBAEgCABQgCADgDAAIgPAAIACAFIADAEIAFAAIALgBIAAAEIgFABIgHABQgFAAgDgCgAgEgKQAAAAAAAAQgBAAAAABQgBAAAAABQAAAAgBABIgBAGIANAAQADAAABgEQAAgBgBgBQAAgBAAAAQAAgBAAAAQgBgBAAAAQgCgCgEABIgFABg");
	this.shape_52.setTransform(258.25,254.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#003E74").s().p("AABAXQgDAAgCgBQgCgCAAgFIAAglIAGAAIAAAkIAAADIADACIADAAIABADIgDABg");
	this.shape_53.setTransform(255.725,253.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#003E74").s().p("AgGAXIgIgCIAAgsIAGAAIAAAMIgBAHQAGgFAGAAQAGAAADAEQADADAAAIQAAAGgCAEQgBAEgDACQgDACgGAAIgGgBgAgDgDIgFADIAAASIAIABIAFgBIADgEIABgIIgBgGQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAAAAAAAQgCgCgDAAIgEACg");
	this.shape_54.setTransform(252.675,253.825);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#003E74").s().p("AgCAXIAAggIAFAAIAAAggAAAgPQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAAAAAAAIAAgFIAAAAIACgBIABAAQABAAAAAAQABAAAAAAQAAABAAAAQAAAAAAAAIAAAFQAAAAAAAAQAAAAAAABQAAAAgBAAQAAAAgBAAg");
	this.shape_55.setTransform(249.875,253.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#003E74").s().p("AAKAQIgKgOIAAAAIgJAOIgGAAIALgQIgKgPIAGAAIAIANIABAAIAIgNIAGAAIgKAPIALAQg");
	this.shape_56.setTransform(247.3,254.475);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#003E74").s().p("AgHAPQgDgBgCgFQgCgDABgGQgBgGACgEQACgDADgBQADgCAEAAQAIAAADADQADACAAAGQAAAEgBABQgDADgEAAIgOAAIACAFIADAEIAFAAIALgBIABAEIgGABIgHABQgEAAgEgCgAgDgKQgBAAAAAAQgBAAAAABQgBAAAAABQAAAAAAABIgCAGIANAAQAEAAgBgEQAAgBAAgBQAAgBAAAAQAAgBAAAAQgBgBAAAAQgCgCgEABIgEABg");
	this.shape_57.setTransform(243.8,254.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#003E74").s().p("AABAXQgDAAgCgBQgCgCAAgFIAAglIAGAAIAAAkIAAADIADACIADAAIABADIgDABg");
	this.shape_58.setTransform(241.275,253.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#003E74").s().p("AgNAXIAAgkQAAgEADgDQACgCAEAAIASABIgBAEIgPAAIgEABIgBADIAAALIASAAIAAAEIgSAAIAAAVg");
	this.shape_59.setTransform(238.45,253.8);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#003E74").s().p("AgGAYIAAgbIgFAAIAAgEIAFgBIAAgFQAAgFADgDQACgCAEAAIAJABIAAAEIgHAAIgFABIAAAEIAAAFIAJAAIAAAFIgJAAIAAAbg");
	this.shape_60.setTransform(43.925,251.625);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#003E74").s().p("AgGAYIAAgbIgFAAIAAgEIAFgBIAAgFQAAgFADgDQACgCAEAAIAJABIAAAEIgHAAIgFABIAAAEIAAAFIAJAAIAAAFIgJAAIAAAbg");
	this.shape_61.setTransform(41.375,251.625);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#003E74").s().p("AgCAXIAAggIAFAAIAAAggAAAgPQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAAAAAgBIAAgDIAAgBIACgBIABAAQABAAAAAAQABAAAAAAQAAABAAAAQAAAAAAABIAAADQAAABAAAAQAAAAAAABQAAAAgBAAQAAAAgBAAg");
	this.shape_62.setTransform(39.175,251.7);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#003E74").s().p("AADAVQgDAAgCgCQgCgCAAgEIAAgTIgGAAIAAgEIAGgBIAAgJIAFAAIAAAJIAKAAIAAAFIgKAAIAAASIABADIADABIAFAAIABAEIgEABg");
	this.shape_63.setTransform(37.075,251.925);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#003E74").s().p("AgNAWIAAgEIAFAAIAHAAIAGAAIADgCIABgFIAAgEIgCgCIgEgCIgIgCQgFgBgCgCQgCgDAAgGQAAgFABgDQACgCADgBIAIgBIANABIAAAFIgNgBIgFABIgCACQgBAAAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAEABABQABACAEABIAIACQAFABACACQACAEAAAFQAAAFgBADQgCADgDABIgJABIgNgCg");
	this.shape_64.setTransform(33.975,251.725);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#003E74").s().p("AgNAXQAFgBACgDIAFgGIABgCIgCAAIgCAAIgBgCIgNgkIAGAAIALAcIABAFIABAAIABgFIAKgcIAIAAIgQAoQgEAOgMABg");
	this.shape_65.setTransform(177.6,260.075);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#003E74").s().p("AAEAaQgEgBgDgCQgCgCAAgGIAAgWIgHAAIAAgGIAHAAIAAgMIAGAAIAAAMIAMAAIAAAGIgMAAIAAAWIABADIAEABIAGAAIABAGIgFABg");
	this.shape_66.setTransform(173.975,258.7);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#003E74").s().p("AgCAcIAAgmIAGAAIAAAmgAAAgSQgBAAAAAAQgBAAAAAAQAAgBgBAAQAAgBAAAAIAAgFIABgBIACgBIACAAQAAAAABAAQAAABAAAAQAAAAABAAQAAABAAAAIAAAFQAAAAAAABQgBAAAAABQAAAAAAAAQgBAAAAAAg");
	this.shape_67.setTransform(171.475,258.425);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#003E74").s().p("AABAcQgDAAgDgCQgCgDAAgEIAAguIAGAAIAAAsQAAABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAAAABAAQAAABABAAQAAAAABAAQAAAAABAAIADAAIABAFIgDABg");
	this.shape_68.setTransform(169.625,258.425);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#003E74").s().p("AgCAcIAAgmIAGAAIAAAmgAAAgSQgBAAAAAAQgBAAAAAAQAAgBgBAAQAAgBAAAAIAAgFIABgBIACgBIACAAQAAAAABAAQAAABAAAAQAAAAABAAQAAABAAAAIAAAFQAAAAAAABQgBAAAAABQAAAAAAAAQgBAAAAAAg");
	this.shape_69.setTransform(167.125,258.425);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#003E74").s().p("AgIAbIgIgBIAAg1IAHAAIAAAOIgCAJQAIgHAGAAQAIAAADAEQAEAFAAAKQAAAHgCAEQgBAFgEACQgEACgGAAIgJgBgAgDgEIgGAEIAAAWQAFABAFAAQADAAACgCQADgBABgDIABgJIgBgIQgBgDgCgBQgCgCgDAAQgCAAgDACg");
	this.shape_70.setTransform(164,258.45);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#003E74").s().p("AgCAcIAAgmIAGAAIAAAmgAAAgSQgBAAAAAAQgBAAAAAAQAAgBgBAAQAAgBAAAAIAAgFIABgBIACgBIACAAQAAAAABAAQAAABAAAAQAAAAABAAQAAABAAAAIAAAFQAAAAAAABQgBAAAAABQAAAAAAAAQgBAAAAAAg");
	this.shape_71.setTransform(160.675,258.425);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#003E74").s().p("AAMATIgLgRIgBAAIgLARIgHAAIANgTIgMgSIAHAAIAKAQIABAAIAKgQIAHAAIgMASIANATg");
	this.shape_72.setTransform(157.625,259.25);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#003E74").s().p("AgJASQgEgCgCgEQgBgEAAgIQAAgGABgFQACgEAEgDQAEgBAFAAQAJgBAEAEQAEADAAAGQAAAGgCABQgCADgFAAIgRAAQAAAFACACQAAABAAABQABAAAAABQABAAAAAAQABABAAAAIAGABIAOgBIAAAEIgHACIgIAAQgGAAgEgCgAgFgMQgCABgBACIgBAIIAPAAQAEAAAAgGQAAgEgCgBQgCgCgFAAIgGACg");
	this.shape_73.setTransform(153.425,259.25);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#003E74").s().p("AABAcQgDAAgDgCQgCgDAAgEIAAguIAGAAIAAAsQAAABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAAAABAAQAAABAAAAQABAAABAAQAAAAABAAIADAAIABAFIgDABg");
	this.shape_74.setTransform(150.325,258.425);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#003E74").s().p("AgPAbIAAgsQgBgFADgCQADgCAFgBIAWABIAAAGIgVAAIgDABIgBADIAAAOIAVAAIAAAEIgVAAIAAAZg");
	this.shape_75.setTransform(146.9,258.45);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#003E74").s().p("AgOATIAAgEIALAAIACAAIAGgBQABAAAAAAQABAAAAAAQABgBAAAAQAAAAABgBIABgDQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAgBAAIgEgCIgKgDQgFgBgCgBQgCgDAAgFQAAgEABgDQACgCADAAIAIgBIAIAAIAIABIAAAFIgEgBIgGAAIgGAAIgFAAIgCACIgBADIABADIACACIADABIAKADQAFAAACACQACACAAAFQAAAFgBADQgCABgEABIgJABIgOgBg");
	this.shape_76.setTransform(140.825,259.25);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#003E74").s().p("AgBAIIgBgQIAFAAIgBAQg");
	this.shape_77.setTransform(137.925,256.55);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#003E74").s().p("AgJASQgEgCgCgEQgBgEAAgIQAAgGABgFQACgEAEgDQAEgBAFAAQAJgBAEAEQAEADAAAGQAAAGgCABQgCADgFAAIgRAAQAAAFACACQAAABAAABQABAAAAABQABAAAAAAQABABAAAAIAGABIAOgBIAAAEIgHACIgIAAQgGAAgEgCgAgFgMQgCABgBACIgBAIIAPAAQAEAAAAgGQAAgEgCgBQgCgCgFAAIgGACg");
	this.shape_78.setTransform(135.025,259.25);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#003E74").s().p("AgLAUIAAgmIAFAAIABAGQAIgHAIAAIABAAIAAAHIgDAAIgGAAIgHAFIAAAbg");
	this.shape_79.setTransform(131.475,259.2);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#003E74").s().p("AgNASQgDgEAAgEIAAgdIAHAAIAAAaQAAAEABABQACACADAAIAFgBIAIgEIAAgcIAHAAIAAAmIgGAAIAAgGIgJAGIgHABQgFAAgDgCg");
	this.shape_80.setTransform(127.425,259.3);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#003E74").s().p("AAEAaQgEgBgDgCQgCgCAAgGIAAgWIgHAAIAAgGIAHAAIAAgMIAGAAIAAAMIAMAAIAAAGIgMAAIAAAWIABADIAEABIAGAAIABAGIgFABg");
	this.shape_81.setTransform(123.625,258.7);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#003E74").s().p("AgHASQgEgCgCgEQgCgEAAgIQAAgGACgFQACgEAEgDQAEgBAGAAIAGAAIAGABIgBAFIgKgBIgHACQgCABgCADIgBAIIABAJQACADACACIAHABIALgBIABAEQgGACgHAAQgGAAgEgCg");
	this.shape_82.setTransform(120.225,259.25);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#003E74").s().p("AgNASQgDgEAAgEIAAgdIAHAAIAAAaQAAAEABABQACACADAAIAFgBIAIgEIAAgcIAHAAIAAAmIgGAAIAAgGIgJAGIgHABQgFAAgDgCg");
	this.shape_83.setTransform(115.975,259.3);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#003E74").s().p("AgLAUIAAgmIAFAAIABAGQAIgHAIAAIABAAIAAAHIgDAAIgGAAIgHAFIAAAbg");
	this.shape_84.setTransform(112.325,259.2);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#003E74").s().p("AAEAaQgEgBgDgCQgCgCAAgGIAAgWIgHAAIAAgGIAHAAIAAgMIAGAAIAAAMIAMAAIAAAGIgMAAIAAAWIABADIAEABIAGAAIABAGIgFABg");
	this.shape_85.setTransform(108.975,258.7);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#003E74").s().p("AgRAbIABgFIAGAAIAJAAIAHAAQABgBAAAAQABAAAAAAQABgBAAAAQABAAAAgBIABgFIgBgGIgCgCIgEgCIgLgDQgFgBgDgDQgCgDAAgHQAAgGABgDQACgEAFgBIAJAAQAKAAAGABIAAAFIgQAAIgGAAQAAAAgBAAQAAABgBAAQAAAAAAABQgBAAAAABIgBAFQAAAEACACIAFADIAKADQAHABACADQACAEAAAHQAAAFgBAEQgDADgEABIgKABQgIAAgJgBg");
	this.shape_86.setTransform(105.25,258.45);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#003E74").s().p("AgLAQQgEgCgCgEQgCgEAAgGQAAgIADgEQADgEAGAAQAFAAADACQACACAAAFIAAARQAFAAACgCQABAAABAAQAAgBABAAQAAgBAAAAQABgBAAAAIAAgGIAAgOIAFAAIABAHIAAAIQAAAGgBAEQgCAEgFACQgFABgHAAQgHAAgEgBgAgMgHQgBACgBAFIABAGQACACADABIAHABIAAgPQAAgEgGAAQgDAAgCACg");
	this.shape_87.setTransform(8.85,115.275);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#003E74").s().p("AALATQgCgCgCgDIgCACIgEAAIgCAAIgDgDIgEAEIgHABQgEAAgCgBQgEgCgBgEQgBgDAAgGIABgIIAAgNIAEABIABAGQACgCAEAAQAHAAADAEQADAEAAAIIgBAIIADABIABgBIACgDIACgNQABgGACgCQADgCAFAAQAFAAADABQACACABAEIABAKIgBALQgBAEgCACQgDACgEAAIgGgBgAANgJIgCACIgBAEIgCAMIADADIAFABIAEgBQAAAAABAAQAAgBAAAAQAAgBABAAQAAgBAAAAIABgIIgBgGQAAgBAAAAQgBgBAAAAQAAgBAAAAQgBAAAAgBIgEgBIgDABgAgUgFQgBACAAAFQAAAFABADQABACAEAAQAEAAACgCQACgDgBgFQABgFgCgCQgCgDgEAAQgEAAgBADg");
	this.shape_88.setTransform(9.6,119.575);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#003E74").s().p("AAFARQgEAAgCgDQgCgCAAgGIAAgPIgEAAQgDAAgCABQgBADAAAEIABAQIgFAAQgCgLAAgGQAAgHADgEQADgDAGAAIAbAAIAAAGIgHAAIAFAHQACADAAAGQAAAFgCADQgDADgFAAgAABAFIABAEIAEABIADAAQABAAAAAAQABAAAAAAQABgBAAAAQABAAAAAAQACgCAAgEIgCgFQgBgEgDgDIgIAAg");
	this.shape_89.setTransform(8.825,124.15);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#003E74").s().p("AgSAdIAAgGIAHAAQgEgEgCgEQgCgEAAgEQAAgIAHgBQgHgIAAgIQAAgFADgDQACgCAGAAIAcAAIAAAHIgaAAIgFABQgCABAAAEIABAFIAFAIIAbAAIAAAFIgaAAQgEAAgBACQgBAAAAAAQAAABgBAAQAAABAAABQAAAAAAABIABAGIAFAHIAbAAIAAAHg");
	this.shape_90.setTransform(8.8,129.75);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#003E74").s().p("AAFARQgEAAgCgDQgCgCAAgGIAAgPIgEAAQgDAAgCABQgBACAAAFIABAQIgFAAQgCgLAAgGQAAgIADgCQADgEAGAAIAbAAIAAAGIgHAAIAFAHQACADAAAGQAAAFgCADQgDADgFAAgAABAFIABAEIAEABIADAAQABAAAAAAQABAAAAAAQABgBAAAAQABAAAAgBQACgBAAgEIgCgFQgBgEgDgDIgIAAg");
	this.shape_91.setTransform(8.825,135.5);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#003E74").s().p("AgaAUIgBgTQAAgHADgFQACgEAGgCQAGgCAKgBQALABAGACQAGACADAEQACAFAAAHIAAATgAgMgLQgFACgCADQgCADAAAEIAAAMIArAAIAAgMQAAgEgCgDQgCgDgFgCIgNgBIgMABg");
	this.shape_92.setTransform(8.025,140.15);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#003E74").s().p("AgDAQQgEgBgCgEQgCgDAAgFQAAgGADgHIgIABIgLAAIAAgHIA3AAIAAAFIgGABQAGAHAAAHQAAAHgEADQgGAEgKAAQgIgBgDgBgAgFgDIgBAEQABAEABACIAEADIAIABIAJgBIAEgDQABgCAAgEIgBgEIgEgGIgVAAg");
	this.shape_93.setTransform(8.05,147);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#003E74").s().p("AgSARIAAgGIAHAAQgIgJAAgIQAAgFADgCQACgDAGAAIAcAAIAAAHIgaAAIgFABQgBAAAAABQAAAAgBABQAAAAAAABQAAAAAAABIACAGIAEAIIAbAAIAAAHg");
	this.shape_94.setTransform(8.8,151.525);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#003E74").s().p("AAFARQgEAAgCgDQgCgCAAgGIAAgPIgEAAQgDAAgCABQgBADAAAEIABAQIgFAAQgCgLAAgGQAAgHADgEQADgDAGAAIAbAAIAAAGIgHAAIAFAHQACADAAAGQAAAFgCADQgDADgFAAgAABAFIABAEIAEABIADAAQABAAAAAAQABAAAAAAQABgBAAAAQABAAAAAAQACgCAAgEIgCgFQgBgEgDgDIgIAAg");
	this.shape_95.setTransform(8.825,156.1);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#003E74").s().p("AgSARIAAgGIAHAAQgIgJAAgIQAAgFADgCQACgDAGAAIAcAAIAAAHIgaAAIgFABQgBAAAAABQAAAAgBABQAAAAAAABQAAABAAAAIACAGIAEAIIAbAAIAAAHg");
	this.shape_96.setTransform(8.8,162.275);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#003E74").s().p("AgZAEIgBgBIgBgCIAAgCQAAAAAAgBQAAAAABAAQAAAAAAgBQABAAAAAAIAFAAQAAAAABAAQAAABABAAQAAAAAAAAQAAABAAAAIAAACQAAABAAAAQAAABAAAAQgBAAAAABQgBAAAAAAgAgKADIAAgGIAmAAIAAAGg");
	this.shape_97.setTransform(8.025,165.575);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#003E74").s().p("AgLARQgEgCgCgEQgCgEAAgHQAAgGACgEQACgEAEgBQAEgCAHAAQAHAAAFACQAFABACAEQABAEAAAGQAAAHgBAEQgCAEgFACQgFABgHAAQgHAAgEgBgAgIgJQgDABgCACIgBAGIABAHQACACADABIAIABIAJgBQADgBABgCQACgDAAgEQAAgDgCgDQgBgCgDgBIgJgBIgIABg");
	this.shape_98.setTransform(8.85,168.775);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#003E74").s().p("AgNANIAAgHIgLAAIAAgGIALAAIAAgMIAGAAIAAAMIAVAAIAFgBIABgEIAAgGIAEgBIACAFIAAAEQAAAEgDADQgDACgFAAIgWAAIAAAHg");
	this.shape_99.setTransform(8.3,172.575);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#003E74").s().p("AAFARQgEAAgCgDQgCgCAAgGIAAgPIgEAAQgDAAgCABQgBADAAAEIABAQIgFAAQgCgLAAgGQAAgHADgEQADgDAGAAIAbAAIAAAGIgHAAIAFAHQACADAAAGQAAAFgCADQgDADgFAAgAABAFIABAEIAEABIADAAQABAAAAAAQABAAAAAAQABgBAAAAQABAAAAAAQACgCAAgEIgCgFQgBgEgDgDIgIAAg");
	this.shape_100.setTransform(8.825,176.35);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#003E74").s().p("AgSAdIAAgGIAHAAQgEgEgCgEQgCgEAAgEQAAgIAHgBQgHgIAAgIQAAgFADgDQACgCAGAAIAcAAIAAAHIgaAAIgFABQgCACAAADIABAFIAFAIIAbAAIAAAFIgaAAQgEAAgBACQgBAAAAAAQAAABgBAAQAAABAAABQAAAAAAABIABAGIAFAHIAbAAIAAAHg");
	this.shape_101.setTransform(8.8,181.95);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#003E74").s().p("AgSAMIAAgFIAHgBQgIgIAAgIIAAgBIAHAAIAAADIABAGIADAHIAcAAIAAAHg");
	this.shape_102.setTransform(8.8,186.825);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#003E74").s().p("AgLARQgEgCgCgEQgCgEAAgHQAAgGACgEQACgEAEgBQAEgCAHAAQAHAAAFACQAFABACAEQABAEAAAGQAAAHgBAEQgCAEgFACQgFABgHAAQgHAAgEgBgAgIgJQgDABgCACIgBAGIABAHQACACADABIAIABIAJgBQADgBABgCQACgDAAgEQAAgDgCgDQgBgCgDgBIgJgBIgIABg");
	this.shape_103.setTransform(8.85,190.875);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#003E74").s().p("AgJAPIAAgIIgHAAQgGAAgDgCQgCgDAAgFIAAgLIAFABIAAAIQAAAEABABQACABADAAIAHAAIAAgMIAFAAIAAAMIAhAAIAAAGIghAAIAAAIg");
	this.shape_104.setTransform(7.95,194.525);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#003E74").s().p("AgLAQQgEgCgCgEQgCgEAAgGQAAgIADgEQADgEAGAAQAFAAADACQACACAAAFIAAARQAFAAACgCQABAAABAAQAAgBABAAQAAgBAAAAQABgBAAAAIAAgGIAAgOIAFAAIABAHIAAAIQAAAGgBAEQgCAEgFACQgFABgHAAQgHAAgEgBgAgMgHQgBACgBAFIABAGQACACADABIAHABIAAgPQAAgEgGAAQgDAAgCACg");
	this.shape_105.setTransform(8.85,198.275);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#003E74").s().p("AgaAUIgBgTQAAgHADgFQACgEAGgDQAGgBAKAAQALAAAGABQAGADADAEQACAFAAAHIAAATgAgMgLQgFABgCADQgCADAAAFIAAANIArAAIAAgNQAAgFgCgDQgCgDgFgBIgNgBIgMABg");
	this.shape_106.setTransform(8.025,203);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#003E74").s().p("AgMAXQAEgBACgDIAFgGIABgCIgCAAIgBAAIgCgCIgNgkIAHAAIAKAcIABAFIAAAAIACgFIAKgcIAHAAIgPAoQgEAOgMABg");
	this.shape_107.setTransform(449.6,260.075);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#003E74").s().p("AAEAaQgEgBgDgCQgCgCAAgGIAAgWIgHAAIAAgGIAHAAIAAgMIAGAAIAAAMIAMAAIAAAGIgMAAIAAAWIABADIAEABIAGAAIABAGIgFABg");
	this.shape_108.setTransform(445.975,258.7);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#003E74").s().p("AgCAcIAAgmIAGAAIAAAmgAAAgSQgBAAAAAAQgBAAAAAAQAAgBgBAAQAAgBAAAAIAAgFIABgBIACgBIACAAQAAAAABAAQAAABAAAAQABAAAAAAQAAABAAAAIAAAFQAAAAAAABQAAAAgBABQAAAAAAAAQgBAAAAAAg");
	this.shape_109.setTransform(443.475,258.425);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#003E74").s().p("AABAcQgDAAgDgCQgCgDAAgEIAAguIAGAAIAAAsQAAABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAAAABAAQAAABABAAQAAAAABAAQAAAAABAAIADAAIABAFIgDABg");
	this.shape_110.setTransform(441.625,258.425);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#003E74").s().p("AgCAcIAAgmIAGAAIAAAmgAAAgSQgBAAAAAAQgBAAAAAAQAAgBgBAAQAAgBAAAAIAAgFIABgBIACgBIACAAQAAAAABAAQAAABAAAAQAAAAABAAQAAABAAAAIAAAFQAAAAAAABQgBAAAAABQAAAAAAAAQgBAAAAAAg");
	this.shape_111.setTransform(439.125,258.425);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#003E74").s().p("AgIAbIgJgBIAAg1IAIAAIAAAOIgBAJQAHgHAGAAQAIAAAEAEQADAFAAAKQgBAHgBAEQgCAFgDACQgEACgHAAIgIgBgAgDgEIgGAEIAAAWQAFABAEAAQAEAAADgCQACgBAAgDIABgJIAAgIQgBgDgCgBQgCgCgEAAQgCAAgCACg");
	this.shape_112.setTransform(436,258.45);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#003E74").s().p("AgCAcIAAgmIAGAAIAAAmgAAAgSQgBAAAAAAQgBAAAAAAQAAgBgBAAQAAgBAAAAIAAgFIABgBIACgBIACAAQAAAAABAAQAAABAAAAQABAAAAAAQAAABAAAAIAAAFQAAAAAAABQAAAAgBABQAAAAAAAAQgBAAAAAAg");
	this.shape_113.setTransform(432.675,258.425);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#003E74").s().p("AAMATIgLgRIgBAAIgLARIgHAAIANgTIgMgSIAHAAIAKAQIABAAIAKgQIAHAAIgMASIANATg");
	this.shape_114.setTransform(429.625,259.25);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#003E74").s().p("AgJASQgEgCgCgEQgBgEAAgIQAAgGABgFQACgEAEgDQAEgBAFAAQAJgBAEAEQAEADAAAGQAAAGgCABQgCADgFAAIgRAAQAAAFACACQAAABAAABQABAAAAABQABAAAAAAQABABAAAAIAGABIAOgBIAAAEIgHACIgIAAQgGAAgEgCgAgFgMQgCABgBACIgBAIIAPAAQAEAAAAgGQAAgEgCgBQgCgCgFAAIgGACg");
	this.shape_115.setTransform(425.425,259.25);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#003E74").s().p("AABAcQgDAAgDgCQgCgDAAgEIAAguIAGAAIAAAsQAAABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAAAABAAQAAABAAAAQABAAABAAQAAAAABAAIADAAIABAFIgDABg");
	this.shape_116.setTransform(422.325,258.425);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#003E74").s().p("AgQAbIAAgsQABgFACgCQADgCAFgBIAWABIAAAGIgVAAIgEABIAAADIAAAOIAVAAIAAAEIgVAAIAAAZg");
	this.shape_117.setTransform(418.9,258.45);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#003E74").s().p("AgOATIAAgEIALAAIACAAIAGgBQABAAAAAAQABAAAAAAQABgBAAAAQABAAAAgBIABgDQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAgBAAIgEgCIgKgDQgFgBgCgBQgCgDAAgFQAAgEABgDQACgCADAAIAIgBIAIAAIAIABIAAAFIgEgBIgGAAIgGAAIgFAAIgCACIgBADIABADIACACIADABIAKADQAFAAACACQACACAAAFQAAAFgBADQgCABgEABIgJABIgOgBg");
	this.shape_118.setTransform(412.825,259.25);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#003E74").s().p("AgBAIIgBgQIAFAAIgBAQg");
	this.shape_119.setTransform(409.925,256.55);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#003E74").s().p("AgJASQgEgCgCgEQgBgEAAgIQAAgGABgFQACgEAEgDQAEgBAFAAQAJgBAEAEQAEADAAAGQAAAGgCABQgCADgFAAIgRAAQAAAFACACQAAABAAABQABAAAAABQABAAAAAAQABABAAAAIAGABIAOgBIAAAEIgHACIgIAAQgGAAgEgCgAgFgMQgCABgBACIgBAIIAPAAQAEAAAAgGQAAgEgCgBQgCgCgFAAIgGACg");
	this.shape_120.setTransform(407.025,259.25);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#003E74").s().p("AgLAUIAAgmIAFAAIABAGQAIgHAIAAIABAAIAAAHIgDAAIgGAAIgHAFIAAAbg");
	this.shape_121.setTransform(403.475,259.2);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#003E74").s().p("AgNASQgDgEAAgEIAAgdIAHAAIAAAaQAAAEABABQACACADAAIAFgBIAIgEIAAgcIAHAAIAAAmIgGAAIAAgGIgJAGIgHABQgFAAgDgCg");
	this.shape_122.setTransform(399.425,259.3);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#003E74").s().p("AAEAaQgEgBgDgCQgCgCAAgGIAAgWIgHAAIAAgGIAHAAIAAgMIAGAAIAAAMIAMAAIAAAGIgMAAIAAAWIABADIAEABIAGAAIABAGIgFABg");
	this.shape_123.setTransform(395.625,258.7);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#003E74").s().p("AgHASQgEgCgCgEQgCgEAAgIQAAgGACgFQACgEAEgDQAEgBAGAAIAGAAIAGABIgBAFIgKgBIgHACQgCABgCADIgBAIIABAJQACADACACIAHABIALgBIABAEQgGACgHAAQgGAAgEgCg");
	this.shape_124.setTransform(392.225,259.25);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#003E74").s().p("AgNASQgDgEAAgEIAAgdIAHAAIAAAaQAAAEABABQACACADAAIAFgBIAIgEIAAgcIAHAAIAAAmIgGAAIAAgGIgJAGIgHABQgFAAgDgCg");
	this.shape_125.setTransform(387.975,259.3);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#003E74").s().p("AgLAUIAAgmIAFAAIABAGQAIgHAIAAIABAAIAAAHIgDAAIgGAAIgHAFIAAAbg");
	this.shape_126.setTransform(384.325,259.2);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#003E74").s().p("AAEAaQgEgBgDgCQgCgCAAgGIAAgWIgHAAIAAgGIAHAAIAAgMIAGAAIAAAMIAMAAIAAAGIgMAAIAAAWIABADIAEABIAGAAIABAGIgFABg");
	this.shape_127.setTransform(380.975,258.7);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#003E74").s().p("AgRAbIABgFIAGAAIAJAAIAHAAQABgBAAAAQABAAAAAAQABgBAAAAQABAAAAgBIABgFIgBgGIgCgCIgEgCIgLgDQgFgBgDgDQgCgDAAgHQAAgGABgDQACgEAEgBIAKAAQAJAAAHABIAAAFIgQAAIgGAAQAAAAgBAAQAAABgBAAQAAAAAAABQgBAAAAABIgBAFQAAAEABACIAGADIAKADQAHABACADQACAEAAAHQAAAFgCAEQgBADgFABIgKABQgIAAgJgBg");
	this.shape_128.setTransform(377.25,258.45);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#003E74").s().p("AgLAQQgFgCgCgEQgBgEAAgGQAAgIADgEQADgEAGAAQAGAAABACQADACABAFIAAARQAEAAACgCQABAAABAAQAAgBABAAQAAgBAAAAQABgBAAAAIABgGIgBgOIAEAAIACAHIAAAIQAAAGgCAEQgCAEgEACQgFABgHAAQgGAAgFgBgAgMgHQgBACAAAFIABAGQABACACABIAIABIAAgPQAAgEgGAAQgEAAgBACg");
	this.shape_129.setTransform(285.9,136.825);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#003E74").s().p("AgLAOQgFgCgCgEQgBgEAAgGIAAgGIABgGIAFABIAAAKIABAHQABACADACIAIABIAJgBQADgCACgCIABgHIgBgLIAEgBQACAGAAAHQAAAGgCAEQgCAEgEACQgFACgHAAQgGAAgFgCg");
	this.shape_130.setTransform(285.9,140.875);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#003E74").s().p("AgSAMIAAgFIAGgBQgHgIAAgIIAAgBIAGAAIAAADIABAGIAFAHIAbAAIAAAHg");
	this.shape_131.setTransform(285.85,144.275);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#003E74").s().p("AgLARQgFgCgCgEQgBgEAAgHQAAgGABgEQACgEAFgBQAFgCAGAAQAHAAAFACQAEABACAEQACAEAAAGQAAAHgCAEQgCAEgEACQgFABgHAAQgGAAgFgBgAgIgJQgDABgBACIgBAGIABAHQABACADABIAIABIAJgBQADgBACgCQABgDAAgEQAAgDgBgDQgCgCgDgBIgJgBIgIABg");
	this.shape_132.setTransform(285.9,148.325);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#003E74").s().p("AgRAQQgFAAgCgCQgCgDgBgFIABgVIAGAAIAAATIAAAEIAEACIAOAAIAAgXIAEAAIAAAXIAZAAIAAAGg");
	this.shape_133.setTransform(285.1,152.55);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#003E74").s().p("AgLAOQgFgCgCgEQgBgEAAgGIAAgGIABgGIAFABIAAAKIABAHQABACADACIAIABIAJgBQADgCACgCIABgHIgBgLIAEgBQACAGAAAHQAAAGgCAEQgCAEgEACQgFACgHAAQgGAAgFgCg");
	this.shape_134.setTransform(285.9,158.525);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#003E74").s().p("AgZAEIgBgBIgBgCIAAgCQAAAAAAgBQABAAAAAAQAAAAAAgBQABAAAAAAIAFAAQAAAAABAAQAAABABAAQAAAAAAAAQAAABAAAAIAAACQAAABAAAAQAAABAAAAQgBAAAAABQgBAAAAAAgAgKADIAAgGIAmAAIAAAGg");
	this.shape_135.setTransform(285.075,161.525);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#003E74").s().p("AgSAdIAAgGIAGAAIgFgIQgCgEAAgEQAAgHAHgCQgHgIAAgHQAAgFADgEQACgCAGAAIAcAAIAAAHIgaAAIgGABQgBABAAAEIABAFIAFAIIAbAAIAAAFIgaAAQgEAAgCABQAAABAAAAQAAABgBAAQAAABAAABQAAAAAAABIABAGIAFAHIAbAAIAAAHg");
	this.shape_136.setTransform(285.85,166);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#003E74").s().p("AgQAPQgCgCgBgDIAAgIIAAgIIABgIIAFAAIAAAEIAAAGIAAAGIAAAFIABACIADABIADgBIACgCIABgDIADgKQAAgFACgCQACgCAFAAQAFAAACABQACACABAEIABAIIgBAPIgEAAIAAgLIAAgCIgBgGQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAIgEgBQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAAAABIgCAEIgDAKQgBAFgBACQgDACgFAAQgEAAgDgBg");
	this.shape_137.setTransform(285.9,171.525);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#003E74").s().p("AgZAEIgBgBIgBgCIAAgCQAAAAAAgBQABAAAAAAQAAgBAAAAQABAAAAAAIAFAAQAAAAABAAQAAAAABABQAAAAAAAAQAAABAAAAIAAACQAAABAAAAQAAABAAAAQgBAAAAABQgBAAAAAAgAgKADIAAgGIAmAAIAAAGg");
	this.shape_138.setTransform(285.075,174.525);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#003E74").s().p("AgLAQQgFgCgCgEQgBgEAAgGQAAgIADgEQADgEAGAAQAGAAABACQADACABAFIAAARQAEAAACgCQABAAABAAQAAgBABAAQAAgBAAAAQABgBAAAAIABgGIgBgOIAEAAIACAHIAAAIQAAAGgCAEQgCAEgEACQgFABgHAAQgGAAgFgBgAgMgHQgBACAAAFIABAGQABACACABIAIABIAAgPQAAgEgGAAQgEAAgBACg");
	this.shape_139.setTransform(285.9,177.575);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#003E74").s().p("AgWAQQgEgBgBgFIgBgKQABgJABgGIAFAAIAAAPIAAAHQAAAAAAABQABAAAAABQAAAAABAAQAAABAAAAIAGABQAFAAABgCQACgBABgEIADgKQABgGADgDQAEgCAHAAQAFAAAEABQADACABAEIABAKQAAAJgBAIIgFAAIAAgGIAAgJIAAgHQgBgBAAAAQAAgBAAAAQgBgBAAAAQAAgBgBAAIgFgBIgGAAIgCADIgCAEIgDAKQgBAGgDADQgDACgHAAQgGAAgDgCg");
	this.shape_140.setTransform(285.1,181.95);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f().s("#003E74").ss(2,1,1).p("EAnbANdIABAAQACAAABAAIAEgBIADAAEAn3ANdIABABIguAiEAnnANcIACAAEAnKAM6IArAhAC3tQIAkgvIAiAuEgnTgN/IAiAuEgn3gNQIAkgvEgnFANdIgOAAIAA7cADqNdIgPAAIAA7cAjUNdIABAAQACAAABAAIAFgBIAFAAAi4NdIABABIguAiAjlM6IArAhAjYNdMgjVAAAEAnWANdMgjVAAA");
	this.shape_141.setTransform(278.4,158.475);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f().s("#000000").ss(2,0,0,4).p("EAnAAABIgEAAEAnEAABQABgBABAAQABAAACAAEAnOAAAIAHAAQADAAACAAIACABEAnLAAAIABAAEgnfAABIAHAAQAEAAAEAAQAEAAAEAAADPABIAIAAQADAAAFAAQADAAAFAAAjuABIgFAAAjqABQABgBABAAQABAAABAAAjgAAIAHAAQACAAADAAIABAB");
	this.shape_142.setTransform(281.0786,244.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(276.5,267.9,258.1,50.700000000000045);
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
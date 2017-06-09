(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 1000,
	height: 250,
	fps: 20,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/1000x250_atlas_.png?1496490238303", id:"1000x250_atlas_"}
	]
};



lib.ssMetadata = [
		{name:"1000x250_atlas_", frames: [[220,567,150,150],[372,567,135,160],[0,0,300,250],[0,252,390,172],[188,719,159,70],[220,426,220,139],[442,444,55,35],[0,686,186,103],[0,581,186,103],[392,392,45,25],[424,766,60,25],[302,169,193,80],[424,793,60,25],[0,426,218,153],[424,729,50,35],[392,251,70,139],[349,729,73,86],[442,392,55,50],[464,251,40,40],[442,481,45,40],[442,523,45,40],[302,0,160,167]]}
];


// symbols:



(lib.太陽 = function() {
	this.spriteSheet = ss["1000x250_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.頭 = function() {
	this.spriteSheet = ss["1000x250_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.bg = function() {
	this.spriteSheet = ss["1000x250_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.car_01 = function() {
	this.spriteSheet = ss["1000x250_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.car_01_LLL = function() {
	this.spriteSheet = ss["1000x250_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.car_02 = function() {
	this.spriteSheet = ss["1000x250_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.car_02_LLL = function() {
	this.spriteSheet = ss["1000x250_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.car_031 = function() {
	this.spriteSheet = ss["1000x250_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.car_0312 = function() {
	this.spriteSheet = ss["1000x250_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.car_03_LLL = function() {
	this.spriteSheet = ss["1000x250_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.car_04 = function() {
	this.spriteSheet = ss["1000x250_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.car_04_1 = function() {
	this.spriteSheet = ss["1000x250_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.car_04_LLL = function() {
	this.spriteSheet = ss["1000x250_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.car_05 = function() {
	this.spriteSheet = ss["1000x250_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.car_05_LLL = function() {
	this.spriteSheet = ss["1000x250_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.手 = function() {
	this.spriteSheet = ss["1000x250_atlas_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.logo = function() {
	this.spriteSheet = ss["1000x250_atlas_"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.m_01 = function() {
	this.spriteSheet = ss["1000x250_atlas_"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.m_02 = function() {
	this.spriteSheet = ss["1000x250_atlas_"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.m_03 = function() {
	this.spriteSheet = ss["1000x250_atlas_"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.m_04 = function() {
	this.spriteSheet = ss["1000x250_atlas_"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.身體 = function() {
	this.spriteSheet = ss["1000x250_atlas_"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.路面 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#808080").s().p("EhfSAD6IAAnzMC+lAAAIAAHzg");
	this.shape.setTransform(92.1,27);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-517.9,2,1219.9,50);


(lib.light_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFCC").s().p("ApAJBQjwjvAAlSQAAlRDwjvQDvjwFRAAQFSAADvDwQDwDvAAFRQAAFSjwDvQjvDwlSAAQlRAAjvjwg");
	this.shape.setTransform(81.7,81.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,163.4,163.4);


(lib.car_05_L = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.car_05_LLL();
	this.instance.setTransform(-68,-32,2.056,2.056);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-68,-32,102.8,72);


(lib.car_05_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.car_05();
	this.instance.setTransform(-74,-33,0.514,0.514);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-74,-33,112,78.6);


(lib.car_04_L = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.car_04_LLL();
	this.instance.setTransform(-25,-29,2.334,2.334);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25,-29,140.1,58.4);


(lib.car_04_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.car_04_1();
	this.instance.setTransform(-30,-28,0.762,0.762);

	this.instance_1 = new lib.car_04();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30,-28,147,61);


(lib.car_03_L = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.car_031();
	this.instance.setTransform(-213,-20,0.559,0.559);

	this.instance_1 = new lib.car_03_LLL();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-213,-20,258,57.6);


(lib.car_03 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.car_0312();
	this.instance.setTransform(-215,-20,0.591,0.591);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-215,-20,110,60.9);


(lib.car_02_L = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.car_02_LLL();
	this.instance.setTransform(-176,-32,1.982,1.982);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-176,-32,109,69.4);


(lib.car_02_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.car_02();
	this.instance.setTransform(-179.3,-28,0.527,0.527);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-179.3,-28,115.9,73.2);


(lib.car_01_L = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.car_01_LLL();
	this.instance.setTransform(-141,-41,1.541,1.541);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-141,-41,245,107.9);


(lib.car_01_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.car_01();
	this.instance.setTransform(-151,-40,0.672,0.672);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-151,-40,262,115.6);


(lib.元件1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EhQNAVkMAAAgrHMCgbAAAMAAAArHg");
	this.shape.setTransform(513.5,138);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.arrow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgxgxIBiAxIhiAxg");
	this.shape.setTransform(5,5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,10,10);


(lib.title_02_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AnzALIgLAMIgLgaQAigtATg0IAbAIQgKAYgOAaIgYCtIgcABgAnhBtQAigFAcgHQgHgEgJgJQgPAKgJADIgJgVQAPgHAQgKQAKgHAGgGQgGgEABgLIACgRIAZgBIgCAKQgBAGAEABQADABAJAAQAGAAAFgBQADAAACgBQACgBADgMIAUAJQgEAMgDAFQgEAFgHABQgHABgTABIgJAAIgGAHIBOgDIgDAPQgNAOgTAMIAFABQATAFAgAAIgKAYQgigBgXgEQgKgDgNgGQglAOgoAGgAmTBNIAKAHIAGACQAPgGAHgEgAi5B2QggAAADgZIAFghIAdgBIgEAXQgBAKANAAIASAAIAdgDQAFgDACgEQACgCADgQIAZAOQgGAZgKAHQgHADgJABQgJADgdABgAkIBnQAMgWAJgUIAbAIQgKAZgNAVgABBBZQAXgEAXgHIgfABIAPhlICNgFIgPBmIgcAAIANADQARAEAIABIgRAaIgcgIIgdgMIASgNIgvABIALAQQggAOggAHgABuAyIAAAFIBZgEIAAgEgAByAZIgBAFIBZgEIABgEgAB2AAIgCAEIBagCIAAgFgAAlAAIgLAMIgMgbQAkgzATg1IAdAJQgJAYgPAbIgZCqIgcACgAhVBIIAcgRQAOAQAIAVIgdAQQgHgTgOgRgAEygLIgLAMIgMgdQAlgxAUg0IAcAJQgNAdgMAXIgYCqIgdABgAFNBHIATgBIAUiPIA0gCIABgKIg9ABIAEgbIA9gBIACgSIAdgBIgCASIBAgDIgEAbIhAADIgBALIA0gCIgVCPIASgBIgDAcIiqAFgAF+A6IgCALIBMgCIACgLgAGDAXIgCAKIBNgCIABgKgAGIgKIgCAKIBMgDIACgKgAGNguIgCALIBMgDIACgLgAinA9IATgLIhiAIIgBgcQAkgBA3gEIABgGIhNADIAMhXIBNgCIABgHIhZADIADgYIBZgEIACgLIAcgBIgCALIBcgDIgEAaIhbACIgBAHIBNgDIgKBLIAEgCQAHAWACATIgeAKIAAgLIhJAHQAIAJAFAMIgaAQQgGgLgKgOgAh/ASIgBAGIA6gDIgBgFgAjHgKIgBAHIAwgBIABgHgAh7gMIgBAHIAwgCIACgHgAjCgoIgCAIIAxgDIABgHgAh2grIgBAHIAwgBIABgIgAnMArIAHgMIgPAAIAFgiIAVgBIAJhDIAvgBIADgGIg6ACIADgWICagEIgDAUIhFADIgDAGIA6gCIgJBCIAVgBIgFAjIgVAAIADAIIgVANQgFgNgHgLIATgNIAGAHIABgIIg0ACIAFADIgQAQQgHgGgHgEIAJgIIg0ABIgBAIIAMACQgEARgKANgAmfgLIgCAGIBRgDIAAgGgAmcggIgBAEIBQgCIAAgFgAmag1IAAAFIBQgDIAAgFgABhhSIAsgCIABgHIgtACIAEgZICfgGIgEAaIguABIgBAIIAsgCIgIA3IibAFgAB5g8IgCAKIARgBIACgJgACkg9IgBAIIAPAAIACgJgADOg/IgCAJIARAAIACgKgACohcIgBAIIAQgBIABgHg");
	this.shape.setTransform(-28.7,-8.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("Al4AyQAtgEAZgGIg/ADIAHgsIgHAEIgPgRQAOgMAJgOQAJgKAKgSIAXAEIgEAJIA0gCIAFgOIAcAFIgEAIIBYgDIgDAVIhXADIgBAGIBPgCIgCATIhPADIgCAGIBQgDIgDASIhPACIgBAGIBVgDIgDAVIh5AEIAOASQghAGgpAEIAAAGIA/gCIgDAVIg/ADIgBAGICRgFIAAgFIg/ABIADgVIA/gCIABgGIhBADIADgXIBdgDIgLBQIgcACIABgFIiRAGIgBAEIgcABgAlRAPIgBAGIA6gCIABgFgAlOgIIAAAGIA5gDIACgEgAlKgiIgBAGIA6gCIABgGgAiCB1IgBgfQAJAEAKAAQAFAAACgEQACgDACgLIAFgmIgTAHIgGgeIAegIIAGguIgZAAIAEgcIAZAAIAGgpIAdgBIgGApIATgBIgCAPQAMgMAKgNQANgTAFgNIAaAIIgEAHIBAgDIgEAaIgLAOIAigBIgOBeIAJAAIgEAaIgzACIAEAHQAHAIAKAEQALAHAPACIgSAbQgQgEgSgNQgLgHgHgNIgDgFQgLAPgTAOQgUANgZAFIgJgZQAXgFAQgJQAOgIAHgLIg0ACIAEgaIANgBIALhMIgMgKIgBAGIgTABIgFAmIAUgIIAAAWIgYANIgIA5QgEAWgHAJQgIAJgUABQgLAAgHgCgAgJAiIAXgBIAEgQIAaACIgDANIAcgBIADgZIgQASQgMgNgNgKQgKAMgNAMIgNgOgAAAgjIgEAoQAVgUAPgVgAAqgkIANAIIgIAKQAOAHAMALIAGglgAALhLIgKAOIAqgBIALgPgAC7A2IgDADQgVAXgQAKIgLgYQAPgJARgQIAQgUIgiABIAEgYIApgBIADgQIgtABIADgaIAZAAIAAghIgQAAIAFgZIAngCIACgSIAdgBIgDATIAqgCIgFAaIgLABQgFAPgJARIAZgBIgEAaIguACIgCAQIArgBIgDAYIgnABQAMAIAVASIgVAZQgHgJgOgOIgIA8IgbABgADNhOIACAgIAQAAQAHgPAHgSgADuBYQANgOALgZQALgbALhIIAHg5QA3gJAegMIAMAaQgeALgqAHIgFAjIBKgCIgEAaIgUABIgSB/IgdABIATh/IgaABQgKA6gKAZQgLAZgSAUgAk7hHIg8ABIADgXIA8gDIACgIIAcAAIgCAIIA3gCIABgJIAcAAIgBAIIA4gDIgDAZIg5ACIgBAKIgcABIABgKIg2ACIgBAJIgcACg");
	this.shape_1.setTransform(211.1,-17.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F42154").s().p("AAGBGIBZgDIABgJIhKACIANhXICzgGIgNBXIhNACIgBAKIBggEIgIA8QgEAagiACIgVgBIgBgYIAGABIgDgIQg6ALg4AFIgEgZIA1gFIACgNIg8ABIgJA/IgbACgACpBYQAJARACALIgTALIAQABQAFAAABgMIAEgdgAB3BaIgBALIAagDIgDgFIAHgFgAA2AaIgBAJIAugCIACgJgACAAXIgBAJIAygBIABgKgAA7gDIgBAHIAugCIABgHgACFgGIgBAHIAxgBIABgHgAjeB1QgMgNgDgTQgDgMACgVIBDgCQgCAeAZAAQALgBAJgHQAJgJAEgaQADgXgGgKQgFgGgNABQgVABgKASIg+ADIAYiqICygHIgJA9Ih0AEIgHAuQARgNAYAAQAkgCASAUQAOAQADAVQACANgDAZQgEAbgIARQgIASgSAQQgbAagsABIgGAAQgnAAgUgXgABGgpIg3ACIAEgZIA2gCIABgLIAcgBIgBALIA4gCIACgLIAbgBIgBALIA3gCIgEAZIg2ACIgCAJIgcABIACgJIg5ACIgBAJIgcABg");
	this.shape_2.setTransform(331.3,-25.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AjuBAIgWAAIAEgbIAVgBIAOhdIBNgCIADgSIhbAEIAEgbIDWgIIgDAbIhfAEIgCARIBRgDIgOBdIAXgBIgEAbIgXABIgDAWQgFAkgiABQgNAAgSgDIgCgfQATAGASgBQAEAAACgOIACgPIh/AEIgIA6IgeABgAjJAOIgDAVIAvgCIADgVgAh8ALIgDAWIAygCIADgWgAjCgfIgDAUIAugCIADgTgAh1ghIgDATIAygCIADgTgABnBTQAQgFAUgKIgYABIATh+IgQAVIgLgJIgDAVIg+ACIABgKIgHAHIgSgVQATgRANgRQAQgXAJgQIAbAHIgGAKQARAVAWAPIABgKIAmgBIAFgMIguACIADgcIB9gFIgEAdIgwACIgFALIAugCIgVCRIgRAAIAIAGQAKAFAIADIgTAcQgKgFgKgHQgLgJgKgKIANgKIgjACIAMAKQgZAUgdAMgACVAbIgBAOIA5gCIABgNgACbgLIgCAMIA5gBIACgMgACggyIgBAMIA5gCIABgMgAA7gwIArgCQgMgKgLgPgAAPBEIAPgZIAYAKQAPgQANgVIg8ACIAEgZIBbgDIgDAXQgRAcgVAXIAVAOIgVAZQgXgUgmgPg");
	this.shape_3.setTransform(278.1,-19.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F42154").s().p("ABzBFIBZgDIACgIIhLACIANhXICzgGIgMBXIhNACIgCAJIBggDIgIA7QgEAcghABQgIAAgNgBIgCgYIAGABIgDgJQg4AMg5AGIgEgbIA1gEIACgOIg9ADIgJA+IgcABgAEXBYQAIAPADAMIgUAMQALABAFAAQAGAAABgMIAEgdgADlBaIgCALIAbgDIgEgFIAIgFgACkAaIgBAJIAugCIABgJgADuAXIgBAJIAxgCIABgJgACogDIgBAGIAugBIABgHgADygGIgBAHIAxgBIABgIgAkXhIIhGA5IAKhIIBGg4IBDgDIgpEiIhDADgAhuB3QgagYAHgrIAQhwQAGgsAggaQAdgYAngBQAlgBAWAWQAaAYgGArIgRBxQgFArghAaQgbAYgnABIgEAAQgkAAgVgVgAgPheQgMAAgIAIQgJAJgCAOIgRByQgCAOAHAIQAGAHAMgBQAagBAEgeIAPhxQACgPgHgHQgEgHgKAAIgBAAgACzgpIg2ACIADgaIA2gBIACgLIAcgCIgCAMIA4gCIACgLIAcgBIgCALIA4gCIgEAZIg3ACIgBAJIgcABIABgJIg4ACIgBAJIgcABg");
	this.shape_4.setTransform(118.8,-18.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AixBmIhRALIgBgcIAQgBIALhOIgSABIAEgXIDngIIgDAYIh0ADIgRB3IgcABgAjWBGIgBALIAqgEIABgIgAjSAmIgBAJIAqgCIABgJgAjNAGIgBAJIApgBIACgJgAiRBfQAYgIAQgLQgMgTgGgWIgKAAIADgZIBhgEIgCAUQgOAegQARQAPALATAFIgSAcQgVgIgSgOQgVARgZAJgAhgAiQAEANAIAJQAKgKAGgNgAAbgDIDYgIIgNBXQgFAhgjAAIgKgBIgCgcQAHADAIAAQAIAAABgOIAIg3IidAFIgOBgIgdAAgABKAaIBugDIgJA9IhTADIgCAJIgaABgABiAxIgCANIA4gCIABgMgABBhHICegFIgIA7IifAGgABagwIgCALIBmgDIABgMgAjQhqICzgGIgMBUIizAFgAi7g3IgBAJIB7gGIABgGgAi4hTIgBAIIB8gFIABgIgAAnhmIBegEIACgOIAfgCIgCAPIBggCIgFAaIjbAHg");
	this.shape_5.setTransform(51.7,-11.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("A12kRMArugCXIjJLsMgnBABkg");
	this.shape_6.setTransform(143.1,-16,1.82,1.234);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-111.7,-68.4,509.7,104.9);


(lib.title_02_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(-92.4,14.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-374.8,-19.6,565,68.8);


(lib.title_02_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#458DDB").s().p("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");
	this.shape.setTransform(120,33.5,1,1,0,0,0,96.2,15.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// 圖層 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Egr1AEhIhsnyMBYZgBUICrgGIhtJWIg+ABg");
	this.shape_1.setTransform(24.6,15.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-266.9,-14.9,583,60.1);


(lib._6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjTFbQhZhPAAirQAAjMB5iEQCNiaEWgPIAACkQh3ABg/ASQhiAdg/BUQANgMAWgLQArgVA3gFQB+gLBKBKQBHBGAAB6QgBCDhOBUQhQBWiJAMQgRACgTAAQhwAAhEg+gAAAgMQg8AFgjAkQgkAnAABCQgBA/AiAgQAiAgA+gFQBDgGAlguQAegoAAg4QAAg4geghQgfggg2AAIgRABg");
	this.shape.setTransform(30.1,40.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,60.2,81.8);


(lib.大 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ahdh/IjjAjIAAhYID0gmIAAikICNgWIAACjID5gmIAABYIj5AnIgYA0IBDgKIDeGdIidAXIiwlFIimF7IigAZg");
	this.shape.setTransform(33,40.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,66.1,81);


(lib.順 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkyEXIAApdIBmgQIAAJ9IgVBrIhqAQgAhulmIBigPIAALmIhiAPgAi3lGIA0gIIAAK+Ig0AIgAAnDoIB2gSIgmCGIh3ATgACvDTIB3gTIAmB7Ih1ASgAAPjsIBGgLIANg4IhfAPIAAhQIE/gxIAABPIhkAQIgOA4IBkgPIAAG9IklAtgAB9BBIAAAwIBJgMIAAgvgAB9g0IAAAuIBJgLIAAgvgAB9isIAAAuIBJgLIAAgvg");
	this.shape.setTransform(33.3,41.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,66.6,83.7);


(lib.車 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAGBiIhZAWIgNgqQAKAAAOgDIBEgRIgCgHIg1ANIgWAGIgZhRIgGgPIBNgRIgCgHIhCAQIgYAHIgFgVIgIgVQAKgBAPgEIBBgQIgFgOQAQgBAhgIQAEgCABADQABACgCADQgDAEABACIBWgWIANAqQgKABgPADIhBAQIACAHIBKgTIAEAQIAUBBIAGAQIhKARIACAHIBCgQQANgDAKgFIANArIhaAUIACAJQADAJAFAIIgZAFIgWAGgAgxAYIABAFIAhgHIgCgGgAAaAFIACAGIAegHIgCgEgAg7gFIACAFIAhgIIgCgFgAAQgYIACAGIAegIIgCgFg");
	this.shape.setTransform(14.1,12.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,28.3,25);


(lib.買 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ai8ChQApgJAUgKQANgFAMgIIgNABQgQABgaAEIgBgYIgWilQAXAAAUgCID+gWQAYgCATgEIAAAYIAPCPQABARACAIIgqABIgVACIAWAFQAqAJAogBQgXArgNAjQhKgKhVgkQAUgUAKgUIhiAIQAJAHAYARQAIADAAAEQAAAEgKACQgxAlhOAcQgXgjgZgegAhSBGIACANICqgPIgBgMgAhWAbIABANICrgPIgBgMgAhcgOIACANICrgPIgBgNgAjLhYIgJhJIgGgcQAOAAAagCIE1gcQASgCAWgEIABAdIAHBKIAFAbQgVAAgUACIkyAbIgnAFQAAgOgBgNgAiGiOIADAVIAXgCIgCgWgAgiiXIADAVIAcgCIgDgWgABGihIACAWIAcgDIgCgVg");
	this.shape.setTransform(21.9,22.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,43.8,45.3);


(lib.的 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhJBmIgviOQgEgNgGgKQANgBAKgCIAIgCIgCgjQASgBAdgEQAEAAABACQABACgEAEIABAUIACAAQANgEAIgEIAIAdIACgIQAEgbgDgdQASAAAegDQAFAAABADQABADgFAEIAAAMIAfgIQAOgDAKgFIAgByQAQAvgIAYQgHATgaAGIgiAIQgSgegRgPQAagCAQgEQANgDABgLQABgNgahRIgdAHIgBAFQgCALgFARIAQgNQAXAYASAWQgUANgPAOQgOgUgQgSIgCAGIgLgIIAWBIIAJAXIg5ANIADAJIgVAFQgMACgJAEQgDgPgEgKgAgzAkIAJAbIASgEIgJgcgAhJgcIAIAXIASgFIgIgXg");
	this.shape.setTransform(13.1,12.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,26.3,25.5);


(lib.想 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AifEaQALhAgKhLQAkANA0AJIAAAAQgJgTgKgTIglAQIgTgxQgGAPgOAbQgrgpgogbQAZgXALgdQAHgNAEgeIgeAMQgPAGgSAJQgKgdgJgTIgVgtQAUgFAQgHIAigNIgZg0QAcgEBAgaQAIgDACAFQACADgDAIQgEAIAEALIAIARIAUgJIAigPQAIAYAJAXQAKAYAMAaQgOACgRAFQAbATAeAJIg5iOIgSgkQAXgGAWgJIB/g0QAXgJAWgLIANAmIBbDqQAJAWAHANQggAIgNAFIhmAmQAaATAQAQIgaAXQAbACAigEIgdgYQAjgdAaggQA/ApAxA8QgpAggbAnQgYgjgYgZQAGAngJAVQgNAfggAMIhwApQgtARgLgcIgkhVIgFAFQAGA9gGA+QgwgSgrgJgAAGBjQABAEgCAFQgDAHADAIIAWA1QAEAMAWgIIAigNQALgEACgMQABgJgJgaQgcAdgHAKQgjgvgrgpIAYgXIgUg2QgJAlgCAbQgWgKgZgOIASAsQAGARANASIAggMIAGgBQADAAADADgABDglIAHARIArgRIgHgQgAAlhuIAIAQIAqgQIgGgRgAAIi5IAHASIAqgRIgGgSg");
	this.shape.setTransform(30.5,30.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,61,61.9);


(lib.好 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABLCXIgpgBQgIgbgSgeQgKASgJAUQgKgNgRgQQgUAcgdATQgQgZgagZQAdgHASgaQgagTgcgQQANgkAGgkIgXABIgHg9QARADAMAAIAFAAQAAgdgCgXQAOACAoABQAHAAAAADQABADgFAGIgBAlIAZABQAQAAALgDQAAAPADAdQABA/gLAsIAdAfIgGAKQATADATAAQAIAAgBgGIgFg2IgYgBQgJAAgNADIgEg9IAtACQgBgIgEgQIAPACQAFgNABgYIg+ABIgGg8QAKADAPAAIBVABQAQAAALgDQAAAPABAPIABAMQgLAwgMAcIALAAIAXgBIACAdIAEAgQgLgDgMAAIgSAAIAIBPQABASgKAIQgKAKgTAAIgCAAgAhLAEIAOAJQAEgWACgfIgKAAQgDAYgHAUg");
	this.shape.setTransform(14.8,15.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,29.7,30.3);


(lib.Nissan = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AqRAJIA9gOICLB0IgxiLIBDgSIBeEMIg8AQIiMh1IAyCLIhBAQgAl4gUIA7gPIBODmIg6APgAjqBpIA8gQQAMAgAcgIQAcgHgEgRQgEgIgUgDIgdgBQgjgDgUgJQgcgNgKgdQgMghAUgcQATgZAggJQAmgKAeAMQAgAPAQArIg+AOQgKgYgaAHQgXAGAEAMQADAHAPADQACABAUACQAwAFAPAFQAhAMALAhQAYBMhZAWQgSAFgQAAQg9AAgXhFgAgqA4IA8gQQALAgAegIQAcgHgFgSQgDgIgVgCIgdgCQghgCgVgKQgcgNgJgcQgMgjAVgcQATgaAigJQAkgKAdANQAiAPAOArIg9AQQgMgagaAIQgVAGAFANQACAIANADQACABAUABQAxAGAPAFQAhAMALAgQAXBMhaAXQgTAEgQAAQg8AAgXhFgADOitIA0gOICsDWIhBAQIgngtIhOARIgHA7IhAAQgAD/gpIAhgIIgdgogAGDjdIA5gPIB4BqIgjiAIA/gRIBBD3Ig4AOIh3hqIAjB9Ig9APg");
	this.shape.setTransform(65.8,27.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,131.6,55.4);


(lib.啊 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhYgkIAIgDIAZgNIA4CBIgRAIIAEAIIgHADIgHAEgAg6gJIAcA/IAEgCIgdg/gAACBOIg6iGIAJgDIAcgOIALAaIAIAiIANAOIgSgqIAFgBIAOgHIAFgEIAkBOQgEAAgDACIgOAHIgFAEIgHgOQACAMgKANIgKgMIAUArIgJAEIgJAFgAgagjIAbBAQAEgDgEgIIgNgWIgJgigAARgSIAKAVIAEgBIgLgVgAAuAhIALgDQADgCgCgEIglhSIgSAJIgHAGIgOggIAKgEIAmgUIAOAfIgEABIAuBmQADAGgBAEQgCAGgVAKQgJgQgKgMg");
	this.shape.setTransform(8.9,10);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,17.8,20.1);


(lib.爺 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgeBvIgGgNIgIgOIAIgEIgVguIgFADIgMgaIAIgDIgUgKQAVgNATgRIgOgBIgKAMQgNgJgPgEQAagYAGgUQAOABAMgBQABAAAAAAQABAAAAAAQAAAAABABQAAAAABAAIgBAFIgFAJIAWACQAFgGAFgIIgIgBQAFgOACgOQAUADAggMQAAASAEAPIgWAEIgIAMQAUgDAXgHQAAAMACAKIABgBIALAZIACAbQASALAFAKQAJAUgbAYQgMgQgJgJIAGAOQAEAJAFAHIgPAGIgNAHIgthpIAWgKIgeACQgRATgGAFIASgJIAMgGIAKAYIgFACIAeBEIAHAMIgaAMIgFgMIgkAZQgBABAAABQAAABAAAAQAAABAAAAQgBAAAAAAIgBABQAAAAAAgBQAAAAgBAAQAAAAAAgBQAAAAAAgBgAgQA9IADAHIANgIIgBgGgAgYApIACAGIAPgHIgDgGgAAkgIIAUAqIABAAQALgFgBgDQgDgFgPgJIgCgZgAghAWIADAGIAOgHIgCgGg");
	this.shape.setTransform(9.9,11.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,19.9,22.8);


(lib.天 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgtBcQANgOAKgRQAKgUAAgOIgBgNIgzAaIgRgmIA3gWIgHgSIgwAYIgIgUIgJgTQAJgDAKgFIBWgqQAMgGAGgFIARAoQgHACgLAFIgbAOIAGASIAkgSQAIgDAKgHIAQAmIgzAXIAIAFQANAMAUAFQAQAEAUgCQgFATgBAXQgTgBgPgEQgUgGgUgMQgCATgHARQgJASgLAUQgPgNgUgKg");
	this.shape.setTransform(10,11.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,19.9,23.1);


(lib._2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgEA2IAogKIAMAnIgrAKgAgvhQIAvgMIAdCBIgfAIg");
	this.shape.setTransform(4.8,9.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,9.6,18.7);


(lib.Symbol = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AADAlIAXgLIALAaIgXALgAgkgyIAZgMIAfBUIgRAIg");
	this.shape.setTransform(3.7,6.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,7.5,12.7);


(lib.老 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgHBMIgIgRIgKARQgOgLgOgIQASgQAPgcIgoAUIgNgdIApgRIgDgIIgeAQIgNgeIAOgFIARgIIgHgMQAJgCARgIQABAAAAgBQABAAAAAAQABABAAAAQAAAAAAAAQAAABABAAQAAAAAAABQAAAAAAABQgBAAAAABQAAACABAEIAAABIAMgGIAMgIIAFAOQACgJACgTQALAHAPAFIADACQAAAAAAAAQAAABAAAAQAAABgBAAQgBABAAAAIgIAbIAGgCQAHgDAFgFIAHAPIAHAOIgaAMQALAHAMAFIACAAQAAAAAAAAQAAABAAAAQAAAAAAABQgBAAAAAAIgLANQANADAQgDQAGAUgEALQgEAKgMAGIgvAXQgFADgFAAQgHAAgFgMgAAJAwQACAFAGgDIAagNQAGgDABgEQACgEgFgKQgOAPgYARgAAOgDIgIASIAFgEQAMgLAJgLgAgMggIAEAIIAGgDIACgLg");
	this.shape.setTransform(8,8.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16,17.7);


(lib.身體_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgwNBQgRgCgGgDIgogPQgMgCgVgUQgUgTgEgDQgGgDgLgNQgKgNAAgDQgBgCgIgIQgKgIgJgEQgIgEgBgGIACgOQAAgIADgIIACgGQAFgJARgwQgDgEgLAKQgMAMgEACIgQAEQgNADgIAFQgIAFAPAAIAZAAQAIACgHAKQgGAIgJAHQgGAEgPATQgRAUgFAEQgGAFgNABIgXABQgIABgLAFQgMAFgGABQgQADgYgbIgKgKIgFgDIgsADQgOABgWgMIgVgOQgIgFgdgCQgSgBgsgVQgJgEgegdIgkgkQgGgFgHgMIgHgMQgIgHgNggQgMgfgGgDQgJgFgHgSQgGgPACgHQAEgOgJgWQgFgMAIgQIAJgOQgCgEAEgTIAGgfQABgIgBgUQgBgUABgGQAGgsgBgPQgBgHABgTQACgUADgKQACgJgBgsIgBg0QAAgLgGgTQgGgTgIgKQgNgSAPg6QAEgNgCgKIgCgHQgPgPADg6QABgVAAgIQgBgMgDgVQgIg1ADgvQACgTALgiIAbhKQAOgmBDhBQAvguA9gvQAmgfBOgkQA+gcA3gSQAvgQBpgIQBzgJBiAIQBYAICBAnQBAATAuASIANAHQAOAIAGAEQAFAFBeA7QBoBBA5A+QAdAgAiA5QAdAxARAnQAOAgAMA3QAMA1gBATQgBATgFAhQgFAhgEAIQgNAmgfBEIgYA3QgQAhgPAWQgSAcgYAcQgZAfgMAJQgLAHgIAIIgGAHIgXA1IgnBWQgNAcgdAoIgoA3QggAvAAARQAAAMgWAHQgEAJgGALIgGAJIgCABIAAAWQAAAMgSAYQgUAbgiAgQgvAthDAYQgKADgiAIIg1ALQhLAUgTACIgQABIgSgBg");
	mask.setTransform(79.8,83.4);

	// 圖層 1
	this.instance = new lib.身體();

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,159.6,166.8);


(lib.m_04_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.m_04();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,45,40);


(lib.m_03_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.m_03();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,45,40);


(lib.m_02_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.m_02();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,40,40);


(lib.m_01_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.m_01();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,55,50);


(lib.頭_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgnMZQhhgIhFgfQgdgNhrhCQhFgrgrhLQgVglgWhCQgKgdgGg5IgEg0QgQANghgJQgSgFgSgRQgSgSABgMQAAgLgDgYIgDgXQABgOgEg3QgEg8gDgNQgDgMABgjIACgfQgXgYAMhDQACgKgJgdIgJgaQgMgTAEgeIAIgmQACgLASgfIATgdQgLgVAQgYQAIgMAJgIQgGgRAIgaIAKgYQACgdAogmIAwgvQAIgQAkgUQAhgTATgDQAVgEA0gsQAYgqApgHQAVgDAPAFQAWgZAhABQAQAAANAFQAGgLAXgGQALgDAKgBQAUgRAqgDQAVgBAQACQAQgRAjAJQARAEAOAIQAfgMAaAHQANADAHAFQAwgGAeARQAwAbAIACQAgAIApArQAVAWAPAUQAVgCASAQQAIAHAFAJQAPgBAZAYQAMALAJAMQApAFALAkQAIAYgHAZQgFATACAdQAZACAEAOQACAEgCAYQgBAMAMAPIANAMQASAJAIAaQAGATAAAQQAAAGgDALQgBAJAMAGQALAGgEAgQgFAoADAMQAEASgLASQgOASgEAIQgIATATA2QAFARgMAPQgRAXgBAEQgFAUgWALQACAFgBAHQgCAJgGAEQgHAEAAAFQAAADAFAOQAGAPgIAPQAGALgJAQIgJAOQACAsgnAuQgIAKgLAWIgUAmQgKAQgEAZIgHAwQgDAXgPAOQgLAJgOADQgJACgOgJIgMgIQgMAWhMB4Qg5BZhgAvQhRAnhYAAIghgBg");
	mask.setTransform(67.2,79.5);

	// 圖層 1
	this.instance = new lib.頭();

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,134.4,159);


(lib.太陽_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.太陽();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,150,150);


(lib.手_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ACFKzQgSgNgRgCQgZABgTgCQgigCgTgOQgugigOgiIgIAHQgNAPgNALQgeAXghAFQgnAFgqgLQgrgLgYgZQgbgbgLgYQgOgdgBglIAAhOQAAgoADgMQAHgYAGgUQANgwABgLIAAgKIgBgaQABgdAFgLQAYg1ANgZIAYgtQAOgdAHgUQAGgRAMgrIAMgyQAVhoAGgQIAbhMIALgiIAJggQAOgkgCgIIgBggIgBglQABgNADgIQAFgMALgJQASgNARgEIAKgYQACgFABgRIABgbIAFgoQAEgaAGAEIAGADIAMgOQARgMASAEQAaAFAYAUQAZAVAHAZIARgVQAXgVAYgCQAfgDAUAJQAXAJAJAVIACACQABADgBAIIgPBEIABARQACASgBAMQgBASABAaQAAALAFAyIAIApQAHAnAAALIAFBWIABAcQACAYACAGIAFAVQACAOgCAJIAFA5IAABAIAeAiQAJAMAKAmQAIAiACAYQACASgCArQgCAjgCAWIABAYQABAaACAIQAIAXAJAlQAOA1AAAPQAAAmgHAkQgKBAgaAkQgeAqgzARQgbAJgbAAQgYAAgYgHg");
	mask.setTransform(35.9,69.9);

	// 圖層 1
	this.instance = new lib.手();

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,1,70,138);


(lib.Title_01_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 12
	this.instance = new lib._2();
	this.instance.setTransform(139.1,176.2,1,1,0,0,0,4.8,9.3);
	this.instance.shadow = new cjs.Shadow("rgba(31,92,153,1)",0,0,15);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(25).to({_off:false},0).to({x:116.1,y:113.2},4,cjs.Ease.get(-1)).to({x:119.1,y:118.2},3,cjs.Ease.get(1)).to({y:116.2},2,cjs.Ease.get(1)).wait(1));

	// 圖層 11
	this.instance_1 = new lib.車();
	this.instance_1.setTransform(122.4,179.2,1,1,0,0,0,14.1,12.5);
	this.instance_1.shadow = new cjs.Shadow("rgba(31,92,153,1)",0,0,15);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(25).to({_off:false},0).to({x:99.4,y:116.2},4,cjs.Ease.get(-1)).to({x:102.4,y:121.2},3,cjs.Ease.get(1)).to({y:119.2},2,cjs.Ease.get(1)).wait(1));

	// 圖層 10
	this.instance_2 = new lib.的();
	this.instance_2.setTransform(97.4,186.2,1,1,0,0,0,13.1,12.7);
	this.instance_2.shadow = new cjs.Shadow("rgba(31,92,153,1)",0,0,15);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(25).to({_off:false},0).to({x:74.4,y:123.2},4,cjs.Ease.get(-1)).to({x:77.4,y:128.2},3,cjs.Ease.get(1)).to({y:126.2},2,cjs.Ease.get(1)).wait(1));

	// 圖層 9
	this.instance_3 = new lib.Nissan();
	this.instance_3.setTransform(75.9,92.6,2,2,0,0,0,65.8,27.7);
	this.instance_3.shadow = new cjs.Shadow("rgba(31,92,153,1)",0,0,15);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(19).to({_off:false},0).to({regX:65.9,regY:27.8,scaleX:0.9,scaleY:0.9,x:75.8},4,cjs.Ease.get(-1)).to({regX:65.8,regY:27.7,scaleX:1.05,scaleY:1.05},2,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},2,cjs.Ease.get(1)).to({x:73.8,y:90.6},2,cjs.Ease.get(-1)).to({x:76.8,y:94.6},3,cjs.Ease.get(1)).to({x:75.8,y:92.6},2,cjs.Ease.get(1)).wait(1));

	// 圖層 8
	this.instance_4 = new lib.買();
	this.instance_4.setTransform(109.3,41.6,0.5,0.5,15,0,0,22.2,22.8);
	this.instance_4.shadow = new cjs.Shadow("rgba(31,92,153,1)",0,0,15);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(13).to({_off:false},0).to({regX:21.9,regY:22.6,scaleX:1.3,scaleY:1.3,rotation:0},3,cjs.Ease.get(1)).to({scaleX:0.9,scaleY:0.9},3,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},2,cjs.Ease.get(1)).wait(6).to({y:34.6},2,cjs.Ease.get(-1)).to({x:110.3,y:43.6},3,cjs.Ease.get(1)).to({x:109.3,y:41.6},2,cjs.Ease.get(1)).wait(1));

	// 圖層 7
	this.instance_5 = new lib.想();
	this.instance_5.setTransform(60.8,52.3,0.5,0.5,-60,0,0,30.4,30.9);
	this.instance_5.shadow = new cjs.Shadow("rgba(31,92,153,1)",0,0,15);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(12).to({_off:false},0).to({regX:30.6,scaleX:1.3,scaleY:1.3,rotation:0,x:60.9,y:52.2},3,cjs.Ease.get(1)).to({regX:30.5,scaleX:0.9,scaleY:0.9,x:60.8},3,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},2,cjs.Ease.get(1)).wait(7).to({x:58.8,y:50.2},2,cjs.Ease.get(-1)).to({x:61.8,y:54.2},3,cjs.Ease.get(1)).to({x:60.8,y:52.2},2,cjs.Ease.get(1)).wait(1));

	// 圖層 6
	this.instance_6 = new lib.好();
	this.instance_6.setTransform(16.4,67.7,0.5,0.5,45,0,0,14.9,15.3);
	this.instance_6.shadow = new cjs.Shadow("rgba(31,92,153,1)",0,0,15);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(11).to({_off:false},0).to({regX:14.8,regY:15.2,scaleX:1.3,scaleY:1.3,rotation:0},3,cjs.Ease.get(1)).to({regX:14.9,scaleX:0.9,scaleY:0.9,x:16.5},3,cjs.Ease.get(1)).to({regX:14.8,scaleX:1,scaleY:1,x:16.4},2,cjs.Ease.get(1)).wait(8).to({x:10.4,y:63.7},2,cjs.Ease.get(-1)).to({x:17.4,y:69.7},3,cjs.Ease.get(1)).to({x:16.4,y:67.7},2,cjs.Ease.get(1)).wait(1));

	// 圖層 5
	this.instance_7 = new lib.Symbol();
	this.instance_7.setTransform(88.3,-6.6,2,2,0,0,0,3.7,6.3);
	this.instance_7.shadow = new cjs.Shadow("rgba(31,92,153,1)",0,0,15);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(3).to({_off:false},0).to({regY:6.4,scaleX:0.9,scaleY:0.9,x:61.3,y:6.4},3,cjs.Ease.get(-1)).to({regY:6.3,scaleX:1.1,scaleY:1.1},3,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},2,cjs.Ease.get(1)).wait(16).to({x:59.3,y:4.4},2,cjs.Ease.get(-1)).to({x:62.3,y:8.4},3,cjs.Ease.get(1)).to({x:61.3,y:6.4},2,cjs.Ease.get(1)).wait(1));

	// 圖層 4
	this.instance_8 = new lib.啊();
	this.instance_8.setTransform(68.1,-2,2,2,0,0,0,8.9,10);
	this.instance_8.shadow = new cjs.Shadow("rgba(31,92,153,1)",0,0,15);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(3).to({_off:false},0).to({regX:9,scaleX:0.9,scaleY:0.9,x:52.2,y:10},3,cjs.Ease.get(-1)).to({regX:8.9,scaleX:1.1,scaleY:1.1,x:52.1},3,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},2,cjs.Ease.get(1)).wait(16).to({x:50.1,y:8},2,cjs.Ease.get(-1)).to({x:53.1,y:12},3,cjs.Ease.get(1)).to({x:52.1,y:10},2,cjs.Ease.get(1)).wait(1));

	// 圖層 3
	this.instance_9 = new lib.爺();
	this.instance_9.setTransform(47.2,6.5,2,2,0,0,0,9.9,11.4);
	this.instance_9.shadow = new cjs.Shadow("rgba(31,92,153,1)",0,0,15);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(2).to({_off:false},0).to({regX:10,regY:11.5,scaleX:0.9,scaleY:0.9,x:37.2,y:16.6},3,cjs.Ease.get(-1)).to({regX:9.9,regY:11.4,scaleX:1.1,scaleY:1.1,y:16.5},3,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},2,cjs.Ease.get(1)).wait(17).to({x:35.2,y:14.5},2,cjs.Ease.get(-1)).to({x:38.2,y:18.5},3,cjs.Ease.get(1)).to({x:37.2,y:16.5},2,cjs.Ease.get(1)).wait(1));

	// 圖層 2
	this.instance_10 = new lib.天();
	this.instance_10.setTransform(21.8,18.5,2,2,0,0,0,10.1,11.6);
	this.instance_10.shadow = new cjs.Shadow("rgba(31,92,153,1)",0,0,15);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1).to({_off:false},0).to({regX:10,regY:11.5,scaleX:0.9,scaleY:0.9,x:21.6,y:23.5},3,cjs.Ease.get(-1)).to({regY:11.6,scaleX:1.1,scaleY:1.1,x:21.7},3,cjs.Ease.get(1)).to({regY:11.5,scaleX:1,scaleY:1},2,cjs.Ease.get(1)).wait(18).to({x:19.7,y:21.5},2,cjs.Ease.get(-1)).to({x:22.7,y:25.5},3,cjs.Ease.get(1)).to({x:21.7,y:23.5},2,cjs.Ease.get(1)).wait(1));

	// 圖層 1
	this.instance_11 = new lib.老();
	this.instance_11.setTransform(-1.9,31.2,2.1,2.1,0,0,0,8,8.8);
	this.instance_11.shadow = new cjs.Shadow("rgba(31,92,153,1)",0,0,15);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({scaleX:0.9,scaleY:0.9,x:8,y:31.1},3,cjs.Ease.get(-1)).to({scaleX:1.1,scaleY:1.1,y:31.2},3,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},2,cjs.Ease.get(1)).wait(19).to({x:6,y:29.2},2,cjs.Ease.get(-1)).to({x:9,y:33.2},3,cjs.Ease.get(1)).to({x:8,y:31.2},2,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50.7,-19.3,103,108);


(lib.money_群_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.m_04_1();
	this.instance.setTransform(213.5,30,1,1,0,0,0,22.5,20);

	this.instance_1 = new lib.m_04_1();
	this.instance_1.setTransform(172.5,30,1,1,0,0,0,22.5,20);

	this.instance_2 = new lib.m_02_1();
	this.instance_2.setTransform(349,20,1,1,0,0,0,20,20);

	this.instance_3 = new lib.m_02_1();
	this.instance_3.setTransform(269,30,1,1,0,0,0,20,20);

	this.instance_4 = new lib.m_03_1();
	this.instance_4.setTransform(110.5,20,1,1,0,0,0,22.5,20);

	this.instance_5 = new lib.m_03_1();
	this.instance_5.setTransform(-24.5,20,1,1,0,0,0,22.5,20);

	this.instance_6 = new lib.m_01_1();
	this.instance_6.setTransform(50.5,25,1,1,0,0,0,27.5,25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47,0,416,50);


(lib.Car_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 1
	this.instance = new lib.car_01_L();
	this.instance.setTransform(139.5,35,1,1,0,0,0,79.5,35);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(39).to({_off:false},0).to({alpha:1},6).to({alpha:0},4).wait(6));

	// 圖層 1
	this.instance_1 = new lib.car_01_1();
	this.instance_1.setTransform(389.5,35,1,1,0,0,0,79.5,35);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:134.5},14,cjs.Ease.get(-1)).to({x:141.5},3).to({x:139.5},2).wait(36));

	// 2
	this.instance_2 = new lib.car_02_L();
	this.instance_2.setTransform(62.5,32.5,1,1,0,0,0,27.5,17.5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(41).to({_off:false},0).to({alpha:1},6).to({alpha:0},4).wait(4));

	// 3
	this.instance_3 = new lib.car_05_L();
	this.instance_3.setTransform(230,32.5,1,1,0,0,0,25,17.5);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(41).to({_off:false},0).to({alpha:1},6).to({alpha:0},4).wait(4));

	// 圖層 2
	this.instance_4 = new lib.car_05_1();
	this.instance_4.setTransform(180,32.5,1,1,0,0,0,25,17.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(19).to({_off:false},0).to({x:230},5,cjs.Ease.get(1)).wait(31));

	// 圖層 3
	this.instance_5 = new lib.car_02_1();
	this.instance_5.setTransform(122.5,32.5,1,1,0,0,0,27.5,17.5);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(19).to({_off:false},0).to({x:62.5},5,cjs.Ease.get(1)).wait(31));

	// 5
	this.instance_6 = new lib.car_03_L();
	this.instance_6.setTransform(22.5,27.5,1,1,0,0,0,22.5,12.5);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(43).to({_off:false},0).to({alpha:1},6).to({alpha:0},4).wait(2));

	// 4
	this.instance_7 = new lib.car_04_L();
	this.instance_7.setTransform(260,32.5,1,1,0,0,0,30,12.5);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(43).to({_off:false},0).to({alpha:1},6).to({alpha:0},4).wait(2));

	// 圖層 4
	this.instance_8 = new lib.car_04_2();
	this.instance_8.setTransform(210,32.5,1,1,0,0,0,30,12.5);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(22).to({_off:false},0).to({x:260},5,cjs.Ease.get(1)).wait(28));

	// 圖層 5
	this.instance_9 = new lib.car_03();
	this.instance_9.setTransform(82.5,37.5,1,1,0,0,0,22.5,12.5);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(22).to({_off:false},0).to({x:22.5,y:27.5},5,cjs.Ease.get(1)).wait(28));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(159,-40,262,115.6);


(lib.求求老天_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 手
	this.instance = new lib.手_1();
	this.instance.setTransform(70.9,202.5,1,1,0,0,0,35.9,69.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:192.5},3,cjs.Ease.get(1)).to({y:202.5},3,cjs.Ease.get(1)).to({y:192.5},3,cjs.Ease.get(1)).to({y:201.4},2,cjs.Ease.get(1)).wait(1));

	// 頭
	this.instance_1 = new lib.頭_1();
	this.instance_1.setTransform(75.5,153,1,1,0,0,0,56.5,153);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:-12.4,x:75.7},3).to({rotation:0,x:75.5},3).to({regX:56.6,regY:152.8,rotation:9.5,x:75.6},3).to({rotation:3,y:153.1},2).wait(1));

	// 身體
	this.instance_2 = new lib.身體_1();
	this.instance_2.setTransform(80,205.5,1,1,0,0,0,80,83.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(12));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,160,289);


(lib._66大順_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 4
	this.instance = new lib.順();
	this.instance.setTransform(226.8,83.7,1,1,0,0,0,33.3,83.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.05,scaleY:1.05,x:231.6,y:85.8},5).to({scaleX:1,scaleY:1,x:226.8,y:83.7},4).wait(1));

	// 圖層 3
	this.instance_1 = new lib.大();
	this.instance_1.setTransform(157.6,83.9,1,1,0,0,0,33,81);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1.05,scaleY:1.05,x:159,y:86},5).to({scaleX:1,scaleY:1,x:157.6,y:83.9},4).wait(1));

	// 圖層 2
	this.instance_2 = new lib._6();
	this.instance_2.setTransform(92.8,85,1,1,0,0,0,30.1,81.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:30.2,scaleX:1.05,scaleY:1.05,x:91,y:87.2},5).to({regX:30.1,scaleX:1,scaleY:1,x:92.8,y:85},4).wait(1));

	// 圖層 1
	this.instance_3 = new lib._6();
	this.instance_3.setTransform(30.1,85,1,1,0,0,0,30.1,81.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:1.05,scaleY:1.05,x:25.1,y:87.2},5).to({scaleX:1,scaleY:1,x:30.1,y:85},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,260,85);


(lib.Money_All = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Light
	this.instance = new lib.light_mc();
	this.instance.setTransform(164.6,137.1,0.315,0.315,0,0,0,81.7,81.7);
	this.instance.filters = [new cjs.BlurFilter(50, 50, 2)];
	this.instance.cache(-2,-2,167,167);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:81.6,regY:81.6,scaleX:3.07,scaleY:3.07,x:164.3,y:136.8},4,cjs.Ease.get(1)).to({alpha:0},3).wait(93));

	// big_01
	this.instance_1 = new lib.m_01_1();
	this.instance_1.setTransform(161.3,127.5,2.5,2.5,0,0,0,27.5,25);
	this.instance_1._off = true;
	this.instance_1.filters = [new cjs.BlurFilter(5, 5, 3)];
	this.instance_1.cache(-2,-2,59,54);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({_off:false},0).to({x:428.3,y:301.5},6,cjs.Ease.get(1)).wait(84).to({x:558.3,y:390.5},5,cjs.Ease.get(-1)).wait(1));

	// big_02
	this.instance_2 = new lib.m_02_1();
	this.instance_2.setTransform(149,122.5,2,2,0,0,0,20,20);
	this.instance_2._off = true;
	this.instance_2.filters = [new cjs.BlurFilter(4, 4, 1)];
	this.instance_2.cache(-2,-2,44,44);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(4).to({_off:false},0).to({x:-98.9,y:30},6,cjs.Ease.get(1)).wait(84).to({x:-211.9,y:-41},5,cjs.Ease.get(-1)).wait(1));

	// big_03
	this.instance_3 = new lib.m_04_1();
	this.instance_3.setTransform(157.5,139,2,2,0,0,0,22.5,20);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(4).to({_off:false},0).to({x:-123.4,y:263.1},6,cjs.Ease.get(1)).wait(84).to({x:-188.4,y:309},5,cjs.Ease.get(-1)).wait(1));

	// big_04
	this.instance_4 = new lib.m_03_1();
	this.instance_4.setTransform(184,129,1.5,1.5,0,0,0,22.5,20);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(4).to({_off:false},0).to({x:509,y:34},6,cjs.Ease.get(1)).wait(84).to({x:675,y:-76},5,cjs.Ease.get(-1)).wait(1));

	// 5
	this.instance_5 = new lib.m_01_1();
	this.instance_5.setTransform(150,130,1,1,0,0,0,27.5,25);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(5).to({_off:false},0).to({x:535.5,y:197},6,cjs.Ease.get(1)).to({x:558.5,y:218},68).wait(15).to({x:628.5,y:254},5,cjs.Ease.get(-1)).wait(1));

	// 4
	this.instance_6 = new lib.m_03_1();
	this.instance_6.setTransform(150,130,1,1,0,0,0,22.5,20);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(6).to({_off:false},0).to({x:267.5,y:20},6,cjs.Ease.get(1)).to({x:277.5,y:10},67).wait(15).to({x:317.5,y:-30},5,cjs.Ease.get(-1)).wait(1));

	// 3
	this.instance_7 = new lib.m_02_1();
	this.instance_7.setTransform(150,130,1,1,0,0,0,20,20);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(6).to({_off:false},0).to({x:20,y:39},6,cjs.Ease.get(1)).to({x:-6,y:24},67).wait(15).to({x:-40,y:-21},5,cjs.Ease.get(-1)).wait(1));

	// 2
	this.instance_8 = new lib.m_02_1();
	this.instance_8.setTransform(150,130,1,1,0,0,0,20,20);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(5).to({_off:false},0).to({x:-152.4,y:100},6,cjs.Ease.get(1)).to({x:-175.4,y:90},68).wait(15).to({x:-253.4,y:20},5,cjs.Ease.get(-1)).wait(1));

	// 1
	this.instance_9 = new lib.m_04_1();
	this.instance_9.setTransform(150,130,1,1,0,0,0,22.5,20);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(4).to({_off:false},0).to({x:-172.9,y:194},6,cjs.Ease.get(1)).to({x:-212.9,y:203.1},69).wait(16).to({x:-326.9,y:259},4).wait(1));

	// 底
	this.instance_10 = new lib.money_群_mc();
	this.instance_10.setTransform(160,252,1,1,0,0,0,160,28);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(4).to({_off:false},0).to({y:257},6).to({y:267},69).wait(15).to({y:307},5,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(32.9,5.4,272,271);


(lib.Btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 3
	this.instance = new lib.arrow();
	this.instance.setTransform(224.3,-19.8,1.218,1.218,0,0,0,5,5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:229.3},5).to({x:224.3},4).wait(1));

	// 圖層 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ACmBiIgRgSIALgJIgeAAIAKALQgVAQgaAMIgJgaQARgFAOgIIgTAAIATh3IgOATQgFgDgEgGIgDAVIg1AAIABgLIgHAHIgOgVQAQgPAMgQQAPgVAHgPIAXAIIgFAJQAOAUASAPIACgKIAgAAIAEgKIgnAAIAEgbIBrAAIgFAbIgpAAIgEAKIAnAAIgXCKIgOAAQACACAFACQAIAGAHADIgRAaQgKgGgHgGgAB7AtIAyAAIACgMIgxAAgACBAHIAyAAIACgKIgxAAgACIgdIAxAAIACgLIgyAAgABXgqQgKgMgIgNIgGAIQgFAKgHAHIAkAAIAAAAgAE8BSQAZgPAVgcQgLgnAAg8IgJAAIACgNIgEAAIgeC2IgYAAIAFgkQgfAFglADIAAgcIAMAAIAVh+IgLAAIAEgbIBqAAIgCANIBYAAIgDAUQgYBFgYAlQAJAYARARIgSAdQgRgQgKgbQgWAdgZAOgAEFAyIAjgDIADgWIgiAAgAF+AHQAPgZANgqIgiAAQAAAnAGAcgAENAAIAjAAIADgYIgiAAgAEVgzIAjAAIADgWIgiAAgAhyBtIAijWIBQAAIgWCYQgEAfgZABIgRgBIgCgdQAKACAIABQAFAAACgJIATh5IghAAIgeC7gAAJBCIAOgXQAKAEALAHQAOgRAKgSIgzAAIAEgXIBPAAIgFAWQgQAcgRASIARAPIgSAXQgVgUgfgQgAm4BmIAEgbIBuAAQAdg6ATg7IAaAIQgWA/gYAuIA7AAIgEAbgAjZBIIAIgBIAdiwIBaAAIgUB6IhCAAIgHAxQATgCAUgFIgFgWIAZgLQAJAaACAgIgbALIAAgMQgaAHgvAKgAirgIIApAAIADgWIgpAAgAikg4IApAAIAEgWIgpAAgAmDgdIAbgJQAHAsgCA1IgdALQADg6gGgpgAmXguIAEgbIBLAAIAGgkIAbAAIgFAkIBMAAIgEAbg");
	this.shape.setTransform(164.5,-20);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(10));

	// 圖層 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC00").s().p("AolDHIBkkpIPnhkIgyGNg");
	this.shape_1.setTransform(176.1,-25.9,1.218,1.218);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(109.1,-50.3,134,48.7);


(lib.太陽_MC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.太陽_1();
	this.instance.setTransform(200,200,2.667,2.667,0,0,0,75,75);
	this.instance.alpha = 0.301;

	this.instance_1 = new lib.太陽_1();
	this.instance_1.setTransform(195,195,1,1,0,0,0,75,75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,400,400);


(lib.ok = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 03_Car
	this.instance = new lib.Car_mc("synched",0,false);
	this.instance.setTransform(106,205.5,1.035,1.035,0,0,0,144.9,35);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(146).to({_off:false},0).wait(136));

	// Btn
	this.instance_1 = new lib.Btn("synched",0);
	this.instance_1.setTransform(-70,150,1,1.118,0,-26.6,0,55,20);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(146).to({_off:false},0).to({regX:55.1,scaleY:1.04,skewX:15.4,x:245.6},5,cjs.Ease.get(-1)).to({regX:55,scaleY:1.01,skewX:-7.1,x:237.5},3).to({scaleY:1,skewX:0,x:240},2).wait(126));

	// 03_title_01
	this.instance_2 = new lib.title_02_mc();
	this.instance_2.setTransform(472.1,127.5,1,1.126,0,27.4,0,140,42.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(146).to({_off:false},0).to({scaleY:1.01,skewX:-6.7,x:145.1},5,cjs.Ease.get(-1)).to({regX:140.1,scaleY:1,skewX:5.4,x:154.1},3,cjs.Ease.get(1)).to({regX:140,scaleY:1,skewX:0,x:150},2).wait(126));

	// money
	this.instance_3 = new lib.Money_All("synched",0,false);
	this.instance_3.setTransform(26.3,125.7,1,1,0,0,0,160,142.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(70).to({_off:false},0).to({_off:true},82).wait(130));

	// 66大順
	this.instance_4 = new lib._66大順_mc("synched",0);
	this.instance_4.setTransform(144.9,87.7,1.287,1.287,0,0,0,129.9,42.7);
	this.instance_4._off = true;

	this.instance_5 = new lib._66大順_mc("single",0);
	this.instance_5.setTransform(211.8,55.8,0.554,0.551,0,0,0,130.3,42.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_4}]},76).to({state:[{t:this.instance_4}]},70).to({state:[{t:this.instance_4}]},5).to({state:[{t:this.instance_5},{t:this.instance_4}]},3).to({state:[{t:this.instance_4}]},2).wait(126));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(76).to({_off:false},0).wait(70).to({startPosition:0},0).to({regX:130.3,regY:43,scaleX:0.85,scaleY:0.84,x:-238.5,y:79.3,mode:"single"},5,cjs.Ease.get(-1)).to({x:-230.5},3).wait(2).to({startPosition:0},0).wait(126));

	// 02_title_01
	this.instance_6 = new lib.title_02_2();
	this.instance_6.setTransform(168.6,49.8,1,1,-4,0,0,54.9,25.8);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(76).to({_off:false},0).wait(70).to({x:157.6,y:-122.2},5,cjs.Ease.get(-1)).to({_off:true},1).wait(130));

	// 02_title_02
	this.instance_7 = new lib.title_02_1();
	this.instance_7.setTransform(150,200,1,1,0,0,0,120,30);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(76).to({_off:false},0).wait(70).to({y:310},5,cjs.Ease.get(-1)).to({_off:true},1).wait(130));

	// 01_title_01
	this.instance_8 = new lib.Title_01_mc("synched",0,false);
	this.instance_8.setTransform(-140,125.7,1.601,1.601,0,0,0,70.8,69.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(70).to({startPosition:0},0).to({scaleX:1,scaleY:1,x:-340.1,y:328.5,startPosition:34},5,cjs.Ease.get(-1)).to({_off:true},1).wait(206));

	// 01_body
	this.instance_9 = new lib.求求老天_mc("synched",0);
	this.instance_9.setTransform(215,159.5,1,1,0,0,0,80,144.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(70).to({startPosition:7},0).to({rotation:19.2,x:425.1,y:189.6,startPosition:0},5,cjs.Ease.get(-1)).to({_off:true},1).wait(206));

	// 太陽
	this.instance_10 = new lib.太陽_MC();
	this.instance_10.setTransform(38,119.1,1,1,0,0,0,200,200);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({x:40,y:30.1},70).to({x:58,y:120.1,alpha:0.801},6,cjs.Ease.get(1)).wait(70).to({x:140},0).to({x:200,y:0.1},5,cjs.Ease.get(-1)).wait(131));

	// 圖層 1
	this.instance_11 = new lib.路面();
	this.instance_11.setTransform(450,225,1,1,0,0,0,150,25);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(146).to({_off:false},0).to({x:150},10,cjs.Ease.get(-1)).wait(126));

	// bg
	this.instance_12 = new lib.bg();
	this.instance_12.setTransform(-481,-9,3.38,1.072);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(282));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-481,-80.9,1014,400);


// stage content:
(lib._1000x250 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.元件1();
	this.instance.setTransform(500.6,124.1,1,1,0,0,0,513.5,138);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.元件1(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Logo
	this.instance_1 = new lib.logo();
	this.instance_1.setTransform(20,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// 圖層 2
	this.instance_2 = new lib.ok();
	this.instance_2.setTransform(619,87.2,1,1,0,0,0,140,87);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(487.1,44.2,1027,400);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {
    'gAudioPreloadPreference': 'auto',

    'gVideoPreloadPreference': 'auto'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'bg3',
                type: 'image',
                rect: ['-2px', '38px','302px','144px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"bg3.jpg",'0px','0px']
            },
            {
                id: 'lg',
                type: 'image',
                rect: ['17px', '13px','57px','53px','auto', 'auto'],
                opacity: 1,
                fill: ["rgba(0,0,0,0)",im+"lg.png",'0px','0px']
            },
            {
                id: 'RoundRect',
                type: 'rect',
                rect: ['61px', '0px','238px','67px','auto', 'auto'],
                borderRadius: ["10px", "10px", "10px", "10px"],
                opacity: 0.6,
                fill: ["rgba(255,255,255,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'hd',
                type: 'image',
                rect: ['-185px', '-55px','730px','180px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"hd.svg",'0px','0px'],
                transform: [[],[],[],['0.3','0.3']]
            },
            {
                id: 'tl',
                type: 'image',
                rect: ['-6px', '-114px','380px','110px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"tl.svg",'0px','0px'],
                transform: [[],[],[],['0.4','0.4']]
            },
            {
                id: 'm',
                type: 'image',
                rect: ['-8px', '9px','370px','70px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"m.svg",'0px','0px'],
                transform: [[],[],[],['0.5','0.5']]
            },
            {
                id: 'na',
                type: 'image',
                rect: ['13px', '23px','330px','30px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"na.svg",'0px','0px'],
                transform: [[],[],[],['0.5','0.5']]
            },
            {
                id: 'ka',
                type: 'image',
                rect: ['10px', '25px','340px','30px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"ka.svg",'0px','0px'],
                transform: [[],[],[],['0.5','0.5']]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_RoundRect}": [
                ["style", "height", '67px'],
                ["style", "opacity", '0'],
                ["style", "left", '61px']
            ],
            "${_bg3}": [
                ["style", "top", '38px'],
                ["style", "height", '144px'],
                ["style", "opacity", '0'],
                ["style", "left", '-2px'],
                ["style", "width", '302px']
            ],
            "${_tl}": [
                ["style", "top", '16px'],
                ["transform", "scaleY", '0.4'],
                ["transform", "scaleX", '0.4'],
                ["style", "opacity", '0'],
                ["style", "left", '-6px'],
                ["style", "height", '5px']
            ],
            "${_na}": [
                ["style", "top", '23px'],
                ["transform", "scaleY", '0.5'],
                ["transform", "scaleX", '0.5'],
                ["style", "opacity", '0'],
                ["style", "left", '13px'],
                ["style", "clip", [0,370,-37.9998779296875,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_hd}": [
                ["style", "top", '-55px'],
                ["transform", "scaleY", '0.3'],
                ["transform", "scaleX", '0.3'],
                ["style", "left", '-185px'],
                ["style", "clip", [0,730,-50.76904296875,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '300px'],
                ["style", "height", '180px'],
                ["style", "overflow", 'hidden']
            ],
            "${_ka}": [
                ["style", "top", '25px'],
                ["transform", "scaleY", '0.5'],
                ["transform", "scaleX", '0.5'],
                ["style", "opacity", '0'],
                ["style", "left", '10px'],
                ["style", "clip", [0,370,-37.9998779296875,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_m}": [
                ["style", "top", '9px'],
                ["transform", "scaleY", '0.5'],
                ["transform", "scaleX", '0.5'],
                ["style", "opacity", '0'],
                ["style", "left", '-8px'],
                ["style", "clip", [0,370,-37.9998779296875,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_lg}": [
                ["style", "top", '9px'],
                ["transform", "scaleY", '0'],
                ["transform", "scaleX", '0'],
                ["style", "opacity", '1'],
                ["style", "left", '5px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 11000,
            autoPlay: true,
            timeline: [
                { id: "eid45", tween: [ "style", "${_ka}", "clip", [0,370,70,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,370,-37.9998779296875,0]}], position: 6835, duration: 164 },
                { id: "eid46", tween: [ "style", "${_ka}", "opacity", '1', { fromValue: '0'}], position: 6916, duration: 84 },
                { id: "eid47", tween: [ "style", "${_ka}", "opacity", '0', { fromValue: '1'}], position: 8500, duration: 85 },
                { id: "eid5", tween: [ "transform", "${_lg}", "scaleY", '1', { fromValue: '0'}], position: 250, duration: 310 },
                { id: "eid35", tween: [ "style", "${_m}", "opacity", '1', { fromValue: '0'}], position: 3294, duration: 84 },
                { id: "eid41", tween: [ "style", "${_m}", "opacity", '0', { fromValue: '1'}], position: 5000, duration: 85 },
                { id: "eid14", tween: [ "style", "${_hd}", "clip", [0,730,190.9895782470703,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,730,-50.76904296875,0]}], position: 702, duration: 251 },
                { id: "eid17", tween: [ "style", "${_hd}", "clip", [-75.546875,730,49.65657043457031,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,730,190.9895782470703,0]}], position: 3000, duration: 213 },
                { id: "eid43", tween: [ "style", "${_na}", "opacity", '1', { fromValue: '0'}], position: 5166, duration: 84 },
                { id: "eid44", tween: [ "style", "${_na}", "opacity", '0', { fromValue: '1'}], position: 6750, duration: 85 },
                { id: "eid25", tween: [ "style", "${_tl}", "height", '140px', { fromValue: '5px'}], position: 8585, duration: 229 },
                { id: "eid16", tween: [ "style", "${_RoundRect}", "opacity", '0.6000000238418579', { fromValue: '0'}], position: 632, duration: 141 },
                { id: "eid42", tween: [ "style", "${_na}", "clip", [0,370,70,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,370,-37.9998779296875,0]}], position: 5085, duration: 164 },
                { id: "eid32", tween: [ "style", "${_tl}", "opacity", '1', { fromValue: '0'}], position: 8661, duration: 100 },
                { id: "eid38", tween: [ "style", "${_m}", "clip", [0,370,70,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,370,-37.9998779296875,0]}], position: 3213, duration: 164 },
                { id: "eid4", tween: [ "transform", "${_lg}", "scaleX", '1', { fromValue: '0'}], position: 250, duration: 310 },
                { id: "eid12", tween: [ "style", "${_bg3}", "opacity", '1', { fromValue: '0'}], position: 116, duration: 134 },
                { id: "eid26", tween: [ "style", "${_tl}", "top", '-26px', { fromValue: '16px'}], position: 8585, duration: 229 }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-1943220");

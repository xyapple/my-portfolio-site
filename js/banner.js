var data = [
	{img:1,h1:'Creative',h2:'Camping'},
	{img:2,h1:'Calm',h2:'Kayaking'},
	{img:3,h1:'Delightful',h2:'Hiking'},
	{img:4,h1:'Intuitive',h2:'Photograpy'},
	{img:5,h1:'Energetic',h2:'Traveling'},
	{img:6,h1:'Passionate',h2:'Caring'},
	{img:7,h1:'Persistent',h2:'Programming'}
];

var g = function (id){
	if( id.substr(0,1) == '.'){
		return document.getElementsByClassName(id.substr(1));
	}
	return document.getElementById(id);
}

function addSliders(){
	var tpl_main = g('template_main').innerHTML
	.replace(/^\s*/,'')
	.replace(/\s*$/,'');

	var tpl_ctrl = g('template_ctrl').innerHTML
	.replace(/^\s*/,'')
	.replace(/\s*$/,'');

	var out_main = [];
	var out_ctrl = [];
	for(i in data){
		var _html_main = tpl_main
		.replace(/index/g,data[i].img)
		.replace(/h2/g,data[i].h1)
		.replace(/h3/g,data[i].h2)
		.replace(/css/g,['','main-i_right'][i%2]);

		var _html_ctrl = tpl_ctrl
		.replace(/index/g,data[i].img);
		out_main.push(_html_main);
		out_ctrl.push(_html_ctrl);
	}
	g('template_main').innerHTML = out_main.join('');
	g('template_ctrl').innerHTML = out_ctrl.join('');
	g('template_main').innerHTML += tpl_main
		.replace(/index/g,'index')
		.replace(/h2/g,data[i].h1)
		.replace(/h3/g,data[i].h2);
	g('main_index').id = 'main_background'
}
function switchSlider(n){
	var main = g('main_'+n);
	var ctrl = g('ctrl_'+n);


	var clear_main = g('.main-i');
	var clear_ctrl = g('.ctrl-i');
	for(i=0;i<clear_ctrl.length;i++){
		clear_main[i].className = clear_main[i].className
		.replace('main-i_active','');
		clear_ctrl[i].className = clear_ctrl[i].className
		.replace('ctrl-i_active','');
	}

	main.className += ' main-i_active';
	ctrl.className += ' ctrl-i_active';

	setTimeout(function(){
		g('main_background').innerHTML = main.innerHTML;
	},1000)

}
function movePictures(){
	var pictures = g('.picture');
	for(i=0;i<pictures.length;i++){
		pictures[i].style.marginTop = (-1 * pictures[i].clientHeight/2) + 'px'
	}
}
window.onload = function(){
	addSliders();
	switchSlider(1);
}
setTimeout(function(){
		movePictures();
	},100)

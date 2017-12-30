
/*
 *
 * Fichier principal
 * =================
 *
 * setUpSceneGraph : fonction qui crée la scène
 * animate : fonction appelée périodiquement pour calculer le nouvel état de la scène
 *
 */

var renderer, scene, camera ; 
var clock, temps ;
var width, height ; 
var demon, controls ;

var monde = new Monde() ; 

var mesh ;

var cliquables = [] ; 



function setUpTHREE(){	

	temps = 0.0 ;
	clock = new THREE.Clock() ; 
	clock.start() ; 


	width  = window.innerWidth ;
	height = window.innerHeight ; 

	renderer = creerRenderer(width, height) ; 

	scene = creerScene() ; 

	camera   = creerCamera(width, height) ; 

	demon    = new Demon() ; 
	controls = new Controleur1(camera) ; 

	demon.setListener(controls) ;  

	//controls =  new THREE.FirstPersonControls(camera) ; 
	//controls = new THREE.PointerLockControls(camera) ; 
	camera.position.set(4,1.7,2) ; 
	camera.lookAt(new THREE.Vector3(0,0,0)) ; 
	scene.add(camera) ; 

	creerEclairage(scene) ; 

}


function setUpSceneGraph(){

	var axisHelper = new THREE.AxisHelper(2.0) ; 
	axisHelper.position.set(0.0,0.1,0.0) ; 
	scene.add(axisHelper) ; 

	var gridHelper = new THREE.GridHelper(50.0) ; 
	gridHelper.position.set(0.0,0.1,0.0) ; 
	scene.add(gridHelper) ; 



	var mesh_sol = creerSol(50,50) ; 
	mesh_sol.receiveShadow = true ;
	scene.add(mesh_sol) ; 

	var texture = textureLoader.load("./assets/textures/dante.jpg") ; 




	posters() ; 




	// Un objet mobile
	// ===============

	var geo_mobile  = new THREE.SphereGeometry(0.5,32,32) ; 
	var mat_mobile  = new THREE.MeshPhongMaterial({color:0x00AA00}) ;
	var mesh_mobile = new THREE.Mesh(geo_mobile, mat_mobile) ; 
	scene.add(mesh_mobile) ; 

	var mobile = new Mobile(1.0, new THREE.Vector3(0.0,1.7,0.0), mesh_mobile) ; 
	mobile.setArrive(new THREE.Vector3(0,1.7,5.0)) ; 
	monde.add(mobile) ; 
	 

}


function posters(){
	var i ;
	var l = poses.length ; 

	for(i=0;i<l;i++){
		var tableau  = tableaux[(poses[i])["tableau"]] ; 
		var accroche = accroches[(poses[i])["accroche"]] ; 
		var poster   = creerPoster(tableau["nom"],tableau["h"],tableau["l"],tableau["url"]) ; 
		poster.position.set(accroche["x"],accroche["y"],accroche["z"]) ; 
		poster.rotation.set(0.0,accroche["angle"],0.0) ; 
		scene.add(poster) ; 
	} 

}

function animate(){
	requestAnimationFrame(animate) ; 

	var delta = clock.getDelta() ; 
	temps = temps + delta ; 

	controls.update(delta) ; 
	
	monde.update(delta) ; 

	renderer.render(scene,camera) ;  

}

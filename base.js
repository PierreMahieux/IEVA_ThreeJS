

function creerScene(){
	return new THREE.Scene() ; 
}

function creerRenderer(w,h){
	var renderer = new THREE.WebGLRenderer() ; 
	renderer.shadowMap.enabled = true ;
	renderer.setSize(w,h) ; 
	document.body.appendChild(renderer.domElement) ; 

	return renderer ; 
}

function creerCamera(w,h){
	var camera = new THREE.PerspectiveCamera(45.0,w/h,0.1,100.0) ; 
	camera.position.set(0.0,1.7,10.0) ; 
	//camera.lookAt(new THREE.Vector3(0.0,1.7,0.0)) ; 
	camera.lookAt(new THREE.Vector3(0.0,0.0,0.0)) ;
	return camera ;
}


function creerEclairage(scene){

	var light1 = new THREE.PointLight(0xffffff,1.0) ; 
	light1.position.set(-14,3,-7.5) ; 
	scene.add(light1) ; 

	var light2 = new THREE.PointLight(0xffffff,1.0) ; 
	light2.position.set(0,3,-7.5) ; 
	light2.castShadow = true ;
	scene.add(light2) ; 

	var light3 = new THREE.PointLight(0xffffff,1.0) ; 
	light3.position.set(14,3,-7.5) ; 
	scene.add(light3) ; 
	
	var light4 = new THREE.PointLight(0xffffff,1.0) ; 
	light4.position.set(0,3,7.5) ; 
	light4.castShadow = true ;
	scene.add(light4) ; 



	var hemi = new THREE.HemisphereLight(0xffffff, 0xffffff, 0.4) ; 
	scene.add(hemi) ; 
}


function callbackResize(f){
	window.addEventListener('resize',f) ; 
}

function callbackMouseDown(renderer,f){
	renderer.domElement.addEventListener("mousedown",f) ; 
}


// ================================================
// Primitives
// ================================================

var textureLoader = new THREE.TextureLoader() ; 

// Sol
function creerSol(largeur, profondeur){
	var geo = new THREE.PlaneGeometry(largeur, profondeur) ; 
	var texture = textureLoader.load("./assets/textures/029frene.jpg") ; 
	var mat = new THREE.MeshPhongMaterial({color: 0xbbbbbb, map:texture}) ; 
	var mesh = new THREE.Mesh(geo,mat) ;
	mesh.rotation.x = -90.0 * Math.PI / 180.0 ; 

	return mesh ;  
}





function creerCloison(largeur,hauteur,epaisseur,materiau){
	var geo  = new THREE.BoxGeometry(largeur, hauteur,epaisseur) ; 
	var mesh = new THREE.Mesh(geo,materiau) ; 
	mesh.position.set(0.0,hauteur/2.0,0.0) ; 

	cliquables.push(mesh) ; 
	
	var groupe = new THREE.Group() ; 
	groupe.add(mesh); 
	return groupe ;
} 

var materiau_fond = new THREE.MeshPhongMaterial({color:0x5555AA}) ; 

function creerPoster(nom,largeur, hauteur, url){

	var groupe = new THREE.Group() ; 
	

	var texture  = textureLoader.load(url) ; 
	var materiau = new THREE.MeshLambertMaterial({color:0xcccccc,map:texture}) ; 
	var geo      = new THREE.PlaneGeometry(largeur,hauteur) ; 
	var tableau  = new THREE.Mesh(geo,materiau) ;
	tableau.name = nom ; 

	var geo_fond = new THREE.PlaneGeometry(largeur, hauteur) ; 
	var fond     = new THREE.Mesh(geo_fond, materiau_fond) ; 
	fond.position.set(0,0,-0.1) ; 
	fond.rotation.set(0,Math.PI,0) ; 

	groupe.add(tableau) ; 
	groupe.add(fond) ;  

	cliquables.push(tableau) ; 
	
	return groupe ;   
}


function loadOBJ(path,fileMaterial, fileOBJ,scene, fSuc, fFail){

	var onProgress = function (xhr){} ; 

	var onError = function (xhr){} ; 

	var mtlLoader = new THREE.MTLLoader() ; 
	mtlLoader.setPath(path) ; 
	mtlLoader.load(fileMaterial, function (materials){
					materials.preload() ; 	
					var objLoader = new THREE.OBJLoader() ; 
					objLoader.setMaterials(materials) ; 
					objLoader.setPath(path) ; 
					objLoader.load(fileOBJ, function (object){
							scene.add(object) ; 
							fSuc(object) ; 
							}, onProgress, onError) ; 
				     }) ; 
}
				


	

	



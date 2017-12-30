

function Demon(){
	this.listener = null ; 
	this.domElement = document ;


	this.domElement.addEventListener(
		"keydown",
		this.onKeyDown.bind(this),
		false) ; 

	this.domElement.addEventListener(
		"keyup",
		this.onKeyUp.bind(this),
		false) ; 

	this.domElement.addEventListener(
		"mousemove",
		this.onMouseMove.bind(this),
		false) ; 

	this.domElement.addEventListener(
		"mousedown",
		this.onMouseDown.bind(this),
		false) ; 
} ; 

Demon.prototype = {

	onMouseMove : function(evt){
					if(this.listener != null){
						console.log("mouse move");

						var x =  (evt.clientX / window.innerWidth)*2 - 1 ; 
						var y = -(evt.clientY / window.innerHeight)*2 + 1 ;

						var vector = new THREE.Vector3(x,y,0.5)  ; 
						vector = vector.unproject(camera) ;
						this.listener.mouseMove(vector) ;  
					}						

				},
	onMouseDown : function(evt){
					console.log("mouse down");
					if(this.listener != null){

						var x =  (evt.clientX / window.innerWidth)*2 - 1 ; 
						var y = -(evt.clientY / window.innerHeight)*2 + 1 ;

						var vector = new THREE.Vector3(x,y,0.5)  ; 
						vector = vector.unproject(camera) ;
						this.listener.mouseDown(vector) ; 
					}	
				},
	onKeyDown   : function(evt){
					console.log("key down");
					if(this.listener != null){
						this.listener.keyDown(evt.keyCode) ; 
					}					
				},
	onKeyUp     : function(evt){
					console.log("key up");
					if(this.listener != null){
						this.listener.keyUp(evt.keyCode) ; 
					}
				},

	setListener : function(x){this.listener = x;}

} ; 


// ===========================================================================================================================
//
// Listener
//
// ===========================================================================================================================

function Listener(camera){

	this.camera = camera ; 

}

Listener.prototype = {

	mouseMove : function(x,y){},
	mouseDown : function(x,y){},
	keyDown   : function(k){},
	keyUp     : function(k){}
}

function Controleur1(camera){

	this.camera = camera ; 

	this.left  = false ; 
	this.up    = false ; 
	this.right = false ;
	this.down  = false ; 
	this.key_w = false ;
	this.key_q = false ; 

	this.vitesse              = 1.0 ; 
	this.azimuthRegard        = Math.PI ;
	

	this.directionDeplacement = new THREE.Vector3(Math.cos(this.azimuthRegard),0.0,Math.sin(this.azimuthRegard)) ; 
	this.directionRegard      = new THREE.Vector3(Math.cos(this.azimuthRegard),0.0,Math.sin(this.azimuthRegard)) ; 

	var x = this.camera.position.x + this.directionRegard.x ;
	var y = this.camera.position.y + this.directionRegard.y ;
	var z = this.camera.position.z + this.directionRegard.z ;
 
	this.pointRegarde = new THREE.Vector3(x,y,z) ; 

	this.cible = new THREE.Vector3(x,y,z) ; 

	this.target = new THREE.Mesh(new THREE.SphereGeometry(0.1), new THREE.MeshPhongMaterial({color:0xff0000})) ;
	this.target.position.set(0.0,0.0,0.0) ; 
	scene.add(this.target) ;  

	this.nom = "aucun" ; 

  

}

Controleur1.prototype = {

	update : function(dt){


		if(this.left){
			this.azimuthRegard -= Math.PI/180.0 ; 	
		}
		if(this.right){
			this.azimuthRegard += Math.PI/180.0 ; 	
		}
		if(this.key_q){
			this.vitesse += 0.5 ; 
		}
		if(this.key_w){
			this.vitesse  -= 0.5 ;
		}

		// Calcul de la direction du regard
		// ================================

		this.directionRegard.set(Math.cos(this.azimuthRegard),0.0,Math.sin(this.azimuthRegard)) ;

		// Calcul de la direction de déplacement
		// =====================================

		this.directionDeplacement.set(this.directionRegard.x, 0.0, this.directionRegard.z) ;

		// Calcul de la nouvelle position
		// ==============================

		if(this.up){
			this.camera.position.x += dt*this.vitesse*this.directionDeplacement.x ; 
			this.camera.position.y += dt*this.vitesse*this.directionDeplacement.y ;
			this.camera.position.z += dt*this.vitesse*this.directionDeplacement.z ;
		}

		if(this.down){
			this.camera.position.x -= dt*this.vitesse*this.directionDeplacement.x ; 
			this.camera.position.y -= dt*this.vitesse*this.directionDeplacement.y ;
			this.camera.position.z -= dt*this.vitesse*this.directionDeplacement.z ;
		} 

		var x =  this.camera.position.x + this.directionRegard.x ;
		var y = this.camera.position.y + this.directionRegard.y ;
		var z = this.camera.position.z + this.directionRegard.z ;
 
		this.pointRegarde.set(x,y,z) ; 

		this.camera.lookAt(this.pointRegarde) ; 

		this.target.position.set(this.cible.x,this.cible.y,this.cible.z) ; 

	},

	mouseMove : function(vector){
		var raycaster =  new THREE.Raycaster(camera.position, vector.sub(camera.position).normalize()) ; 

		var intersects = raycaster.intersectObjects(cliquables) ; 

		if(intersects.length > 0){
			console.log(intersects[0].point) ; 	
			this.cible.x = intersects[0].point.x ; 
			this.cible.y = intersects[0].point.y ;
			this.cible.z = intersects[0].point.z ;
		} ; 

		this.target.position.set(this.cible.x,this.cible.y,this.cible.z) ; 
	},
	mouseDown : function(vector){
		var raycaster =  new THREE.Raycaster(camera.position, vector.sub(camera.position).normalize()) ; 

		var intersects = raycaster.intersectObjects(cliquables) ; 

		if(intersects.length > 0){
			// SELECTION D UN TABLEAU
			console.log(intersects[0].object) ; 
			this.nom = intersects[0].object.name ; 	

		} 
	},
	keyDown   : function(k){	
		console.log(k) ; 	
		switch(k){
			case 37 : // left 
				this.left = true ;  
				break ; 
			case 38 : // up
				this.up = true ; 
				break ; 
			case 39 : // right
				this.right = true ; 
				break ; 
			case 40 : // down
				this.down = true ; 
				break ; 
			case 81 : // Q
				this.key_q = true ; 
				break ; 
			case 87 : // W
				this.key_w = true ;
				break ; 
		}	
	},

	keyUp     : function(k){		
		switch(k){
			case 37 : // left
				this.left = false ;  
				break ; 
			case 38 : // up
				this.up = false ; 
				break ; 
			case 39 : // right
				this.right = false ; 
				break ; 
			case 40 : // down
				this.down = false ; 
				break ; 
			case 81 : // Q
				this.key_q = false ; 
				break ; 
			case 87 : // W
				this.key_w = false ; 
				break ; 
		}	
	}
}




// ===========================================================================================================================
//
// Controleur 4 : le regard ne suit pas la cible
//
// ===========================================================================================================================

function Controleur4(camera){


	this.camera  = camera ; 


	this.cible = new THREE.Vector3(0.0,1.7,0.0) ; 

	var x1 = this.cible.x - this.camera.position.x  ;
	var y1 = this.cible.y - this.camera.position.y  ;  
	var z1 = this.cible.z - this.camera.position.z  ; 

	this.directionRegard = new THREE.Vector3(x1,y1,z1) ; 

	this.directionCible = new THREE.Vector3(x1, y1, z1) ;
	this.directionCible.normalize() ; 

	this.directionDeplacement = new THREE.Vector3(this.directionCible.x, this.directionCible.y, this.directionCible.z) ; 

	this.camera.lookAt(this.cible) ; 

	this.target = new THREE.Mesh(new THREE.SphereGeometry(0.01), new THREE.MeshPhongMaterial({color:0xff0000})) ;
	

	this.target.position.set(this.cible.x,this.cible.y,this.cible.z) ; 
	scene.add(this.target) ;  

	this.left = false ;
	this.right = false ;
	this.up = false ;
	this.down = false ; 

	this.force = new THREE.Vector3(0,0,0) ; 

}

Controleur4.prototype = {

	update    : function(dt){

		// Calcul de la position du regard
		// ==================================
		var x1 = this.camera.position.x + this.directionRegard.x ;
		var y1 = this.camera.position.y + this.directionRegard.y ;  
		var z1 = this.camera.position.z + this.directionRegard.z ; 

		this.camera.lookAt(new THREE.Vector3(x1,y1,z1)) ; 

		// Cnalcul de la position de la cible
		// ==================================
		x1 = this.camera.position.x + this.directionCible.x ;
		y1 = this.camera.position.y + this.directionCible.y ;  
		z1 = this.camera.position.z + this.directionCible.z ; 

		//this.camera.lookAt(new THREE.Vector3(x1,y1,z1)) ; 
		//this.target.position.set(x1,y1,z1) ; 

		// Calcul du regard
		// ================

		var fx = this.directionCible.x - this.directionRegard.x ;
		var fy = this.directionCible.y - this.directionRegard.y ;
		var fz = this.directionCible.z - this.directionRegard.z ;

		this.force.set(fx,fy,fz) ; 
		this.force.normalize() ; 

		this.directionRegard.x += dt*this.force.x ; 
		//this.directionRegard.y += dt*this.force.y ; 
		this.directionRegard.z += dt*this.force.z ; 


		// Déplacement de la position
		// ==========================

		if(this.down){
			this.camera.position.x -= dt*this.directionRegard.x ;
			this.camera.position.y -= dt*this.directionRegard.y ;
			this.camera.position.z -= dt*this.directionRegard.z ;
		}

		if(this.up){
			this.camera.position.x += dt*this.directionRegard.x ;
			this.camera.position.y += dt*this.directionRegard.y ;
			this.camera.position.z += dt*this.directionRegard.z ;
		}
		
	},

	mouseMove : function(vector){
		var raycaster =  new THREE.Raycaster(camera.position, vector.sub(camera.position).normalize()) ; 

		var intersects = raycaster.intersectObjects(cliquables) ; 

		if(intersects.length > 0){
			console.log(intersects[0].point) ; 	
			this.cible.x = intersects[0].point.x ; 
			this.cible.y = intersects[0].point.y ;
			this.cible.z = intersects[0].point.z ;

			var x1 = this.cible.x - this.camera.position.x  ;
			var y1 = this.cible.y - this.camera.position.y  ;  
			var z1 = this.cible.z - this.camera.position.z  ; 

			this.directionCible.set(x1, y1, z1) ;
			this.directionCible.normalize() ; 

			//this.directionRegard.set(this.directionCible.x,0.0,this.directionCible.z) ; 

	
		}
	},
	mouseDown : function(vector){
		var raycaster =  new THREE.Raycaster(camera.position, vector.sub(camera.position).normalize()) ; 

		var intersects = raycaster.intersectObjects(cliquables) ; 

		if(intersects.length > 0){
			//console.log(intersects[0].point) ; 	
			var xc = intersects[0].point.x ; 
			var yc = this.camera.position.y ;
			var zc = intersects[0].point.z ;

			var dx = this.cible.x - this.camera.position.x  ;
			var dy = 0.0 ;  
			var dz = this.cible.z - this.camera.position.z  ; 

			var D = new THREE.Vector3(dx,dy,dz) ; 
			D.normalize() ; 

			this.camera.position.x = xc - D.x ; 
			this.camera.position.y = yc  ; 
			this.camera.position.z = zc - D.z ; 

	
		}
	},

	keyUp   : function(k){	
		switch(k){
			case 37 : // left
				this.left = false ;  
				break ; 
			case 38 : // up
				this.up = false ; 
				break ; 
			case 39 : // right
				this.right = false ; 
				break ; 
			case 40 : // down
				this.down = false ; 
				break ; 
		}	
	},

	keyDown     : function(k){
		switch(k){
			case 37 : // left
				this.left = true ;  
				break ; 
			case 38 : // up
				this.up = true ; 
				break ; 
			case 39 : // right
				this.right = true ; 
				break ; 
			case 40 : // down
				this.down = true ; 
				break ; 
		}
	}
}

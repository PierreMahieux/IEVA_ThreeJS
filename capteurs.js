

// Détection d'un point proche du centre du capteur
// ================================================

function CapteurSpherique(p0,h){
	this.centre = p0 ; 
	this.h = h ; 
}

// Un point p est détecté par un capteur sphérique
// -----------------------------------------------

CapteurSpherique.prototype.In = function(p){
	return this.centre.distanceTo(p) < this.h ; 
}


// Détection d'un point dans un cone
// =================================

function CapteurCone(p0,direction,angleDegre,h){
	this.centre = p0 ; 
	this.direction = direction ; 
	this.angle = angleDegre * Math.PI / 180.0 ;
	this.h = h ;

	this.direction.normalize() ; 

	this.versCible = new THREE.Vector3(0.0,0.0,0.0) ; 
}

// Un point p est détecté par un capteurt conique
// ----------------------------------------------

CapteurCone.prototype.In = function(p){
	var c1 = this.centre.distanceTo(p) < this.h ;
	if(c1){
		this.versCible.copy(p) ; 
		this.versCible.sub(this.centre) ; 
		var c2 = this.direction.angleTo(this.cible) < this.angle ;
		return c2  ;
	}
	else {
		return False; 
	} 
}
	
	

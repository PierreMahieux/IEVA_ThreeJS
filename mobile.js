

function Monde(){
	this.monde = [] ; 
}

Monde.prototype.add = function(objet){
	this.monde.push(objet) ; 
}

Monde.prototype.update = function(dt){
	var i ; 
	for(i=0; i<this.monde.length; i++){
		this.monde[i].update(dt) ; 
	}
}

//

function CST(mobile,points){

	this.mobile = mobile ; 
	this.points= points ; 

	this.mobile.controleur = this ;
	this.index = 0 ; 

	this.mobile.setSeek(points[this.index]) ; 
}

CST.prototype = {
	reagir : function(){
			if(this.index==this.point.length){
				this.index=0 ; 
			}
			else {
				this.index++ ; 
			}

			this.mobile.setArrive(points[this.index]) ; 
		}
}






// =====================================================================

function Mobile(masse,p0,mesh){

	this.controleur = null ; 

	this.masse    = masse ; 
	this.position = p0 ;  
	this.vitesse  = new THREE.Vector3(0.0,0.0,0.0) ; 
	this.force    = new THREE.Vector3(0.0,0.0,0.0) ; 

	this.maxSpeed = 4.0 ; 
	this.maxForce = 0.05 ;
	this.mesh     = mesh ; 

	this.mesh.position.copy(p0) ; 

	this.isSeek   = false ; 
	this.isArrive = false ;
	this.onTarget = false ;  

	this.target = new THREE.Vector3(0.0,0.0,0.0) ; 

	this.Fs = new THREE.Vector3(0.0,0.0,0.0) ; 
}

Mobile.prototype.update = function(dt){

	this.steer() ; 
	this.applyForce(this.Fs) ; 
	this.pose(dt) ; 

}

Mobile.prototype.applyForce = function(f){
	this.force.x += f.x ; 
	this.force.y += f.y ; 
	this.force.z += f.z ;
} 

Mobile.prototype.setSeek = function(C){
	this.target.copy(C) ; 
	this.isSeek = true ;
	this.onTarget = false ; 
}

Mobile.prototype.setArrive = function(C){
	this.target.copy(C) ; 
	this.isArrive = true ;
	this.onTarget = false ; 
}

Mobile.prototype.steer = function(){
	if(this.isSeek){
		this.seek() ; 
	} else
	if(this.isArrive){
		this.arrive() ; 
	} else this.Fs.set(0.0,0.0,0.0) ; 
}


Mobile.prototype.seek = function(){
	this.Fs.copy(this.target) ; 
	this.Fs.sub(this.position) ; 
	this.Fs.normalize() ; 
	this.Fs.multiplyScalar(this.maxSpeed) ; 
	this.Fs.sub(this.vitesse) ;
 
	var norme = this.Fs.length() ; 
	
	if(norme>this.maxForce){
		this.Fs.normalize() ; 
		this.Fs.multiplyScalar(this.maxForce) ; 
	}
	
 
}

	


Mobile.prototype.arrive = function(){
	var d = this.position.distanceTo(this.target) ; 

	if(d<0.25){
		// this.vitesse = 0.0 ; 
		// this.isArrive = false ; 
		// this.onTarget = true ;
		if(this.controleur != null){
			this.controleur.reagir() ; 
		}
		this.setArrive(new THREE.Vector3(Math.floor(Math.random() * 6) + 1,1.7,Math.floor(Math.random() * 6) + 1));
	} else
	if(d<3.0)
	{
		var vmax = d*this.maxSpeed/9.0 ; 
		var Vd = this.target.clone() ; 
		Vd.sub(this.position) ; 
		Vd.normalize() ; 
		Vd.multiplyScalar(vmax) ; 
		this.Fs.subVectors(Vd,this.vitesse) ; 
	}
	else {
		this.seek() ; 
	}
}

		


Mobile.prototype.pose = function(dt){
	
	// Mise à jour de la position
	this.position.addScaledVector(this.vitesse,dt) ; ; 
	this.vitesse.addScaledVector(this.force,dt) ; 

	// Mise à jour de la pose
	// ======================

	this.mesh.position.copy(this.position) ; 

	this.force.set(0.0,0.0,0.0) ; 

	 
}


/*
 *
 * Fichier qui contient une "base de données" incarnée par des objets 3d
 *
 */




// La base de données

var tableaux = {
		"050" 	: {"nom":"050","l":2.0, "h":2.0, "url":"./assets/images/brest/50-place_Etienne_Dolet.jpg", tags:["centre"]},
		"049" 	: {"nom":"049","l":2.0, "h":2.0, "url":"./assets/images/brest/49-chateau_et_bateau.jpg", tags:["Penfeld","militaire"]},
		"048" 	: {"nom":"048","l":2.0, "h":2.0, "url":"./assets/images/brest/48-monument_aux_marins_et_soldats_morts_pour_la_France.jpg", tags:["militaire"]},
		"047" 	: {"nom":"047","l":2.0, "h":2.0, "url":"./assets/images/brest/47-hotel_des_postes_place_Anatole_France.jpg", tags:["centre"]},
		"046" 	: {"nom":"046","l":2.0, "h":2.0, "url":"./assets/images/brest/46-rue_jean_jaures.jpg", tags:["centre"]},
		"045" 	: {"nom":"045","l":2.0, "h":2.0, "url":"./assets/images/brest/45-place_des_portes_et_rue_de_Siam.jpg", tags:["centre"]},
		"044" 	: {"nom":"044","l":2.0, "h":2.0, "url":"./assets/images/brest/44-Rue_de_Siam_avant_guerre.jpg", tags:["centre"]},
		"043" 	: {"nom":"043","l":2.0, "h":2.0, "url":"./assets/images/brest/43-passage_bac_vapeur.jpg", tags:["relecq-kerhuon"]},
		"042" 	: {"nom":"042","l":2.0, "h":2.0, "url":"./assets/images/brest/42-pont_albert_louppe.jpg", tags:["relecq-kerhuon"]},
		"041" 	: {"nom":"041","l":2.0, "h":2.0, "url":"./assets/images/brest/41-portes_de_Foi.jpg", tags:["centre"]},
		"040" 	: {"nom":"040","l":2.0, "h":2.0, "url":"./assets/images/brest/40-portes_nationales.jpg", tags:[]},
		"039" 	: {"nom":"039","l":2.0, "h":2.0, "url":"./assets/images/brest/39-escalier_port_de_commerce.jpg", tags:["port_de_commerce"]},
		"038" 	: {"nom":"038","l":2.0, "h":2.0, "url":"./assets/images/brest/38-nacelle_pont_transbordeur.jpg", tags:["Penfeld","militaire"]},
		"037" 	: {"nom":"037","l":2.0, "h":2.0, "url":"./assets/images/brest/37-hopital_maritime.jpg", tags:["centre","militaire"]},
		"036" 	: {"nom":"036","l":2.0, "h":2.0, "url":"./assets/images/brest/36-pont_transbordeur.jpg", tags:["penfeld","militaire"]},
		"035" 	: {"nom":"035","l":2.0, "h":2.0, "url":"./assets/images/brest/35-caserne_Fautras.jpg", tags:["centre"]},
		"034" 	: {"nom":"034","l":2.0, "h":2.0, "url":"./assets/images/brest/34-lycee_de_Brest.jpg", tags:["centre"]},
		"033" 	: {"nom":"033","l":2.0, "h":2.0, "url":"./assets/images/brest/33-port_de_commerce.jpg", tags:["port_de_commerce"]},
		"032" 	: {"nom":"032","l":2.0, "h":2.0, "url":"./assets/images/brest/32-corderie.jpg", tags:["Penfeld","militaire"]},
		"031" 	: {"nom":"031","l":2.0, "h":2.0, "url":"./assets/images/brest/31-hotel_de_ville.jpg", tags:["centre"]},
		"030" 	: {"nom":"030","l":2.0, "h":2.0, "url":"./assets/images/brest/30-prefecture_maritime.jpg", tags:["centre","militaire"]},
		"029" 	: {"nom":"029","l":2.0, "h":2.0, "url":"./assets/images/brest/29-plage.jpg", tags:["loisirs"]},
		"028" 	: {"nom":"028","l":2.0, "h":2.0, "url":"./assets/images/brest/28-theatre.jpg", tags:["centre","loisirs"]},
		"027" 	: {"nom":"027","l":2.0, "h":2.0, "url":"./assets/images/brest/27-gare.jpg", tags:["transport"]},
		"026" 	: {"nom":"026","l":2.0, "h":2.0, "url":"./assets/images/brest/26-phare.jpg", tags:[]},
		"025" 	: {"nom":"025","l":2.0, "h":2.0, "url":"./assets/images/brest/25-grande_grue_électrique.jpg", tags:["Penfeld","militaire"]},
		"024" 	: {"nom":"024","l":2.0, "h":2.0, "url":"./assets/images/brest/24-gare.jpg", tags:["transport"]},
		"023" 	: {"nom":"023","l":2.0, "h":2.0, "url":"./assets/images/brest/23-fosses_du_chateau.jpg", tags:["militaire","Penfeld"]},
		"022" 	: {"nom":"022","l":2.0, "h":2.0, "url":"./assets/images/brest/22-chateau.jpg", tags:["militaire","Penfeld"]},
		"021" 	: {"nom":"021","l":2.0, "h":2.0, "url":"./assets/images/brest/21-église_saint_Louis.jpg", tags:["centre","religion"]},
		"020" 	: {"nom":"020","l":2.0, "h":2.0, "url":"./assets/images/brest/20-descente_vers_la_rade.jpg", tags:["port_de_commerce","transport"]},
		"019" 	: {"nom":"019","l":2.0, "h":2.0, "url":"./assets/images/brest/19-cours_d_ajot.jpg", tags:["centre","loisirs"]},
		"018" 	: {"nom":"018","l":2.0, "h":2.0, "url":"./assets/images/brest/18-Corvee_Des_Vivres_Au_Petit_Pont.jpg", tags:["Penfeld","militaire"]},
		"017" 	: {"nom":"017","l":2.0, "h":2.0, "url":"./assets/images/brest/17-glacis.jpg", tags:["militaire"]},
		"016" 	: {"nom":"016","l":2.0, "h":2.0, "url":"./assets/images/brest/16-caserne.jpg", tags:["centre","militaire"]},
		"015" 	: {"nom":"015","l":2.0, "h":2.0, "url":"./assets/images/brest/15-rue_de_siam.jpg"  , tags:["centre"]},
		"014" 	: {"nom":"014","l":2.0, "h":2.0, "url":"./assets/images/brest/14-place_du_chateau.jpg", tags:[]},
		"013" 	: {"nom":"013","l":2.0, "h":2.0, "url":"./assets/images/brest/13-port_de_commerce.jpg", tags:["port_de_commerce"]},
		"012" 	: {"nom":"012","l":2.0, "h":2.0, "url":"./assets/images/brest/12-eglise_saint_louis.jpg", tags:["centre","religion"]},
		"011" 	: {"nom":"011","l":2.0, "h":2.0, "url":"./assets/images/brest/11-pont_national.jpg", tags:["Penfeld","transport"]},
		"010" 	: {"nom":"010","l":2.0, "h":2.0, "url":"./assets/images/brest/10-rue_de_siam.jpg", tags:["centre"]},
		"009" 	: {"nom":"009","l":2.0, "h":2.0, "url":"./assets/images/brest/09-place_wilson.jpg", tags:["centre"]},
		"008" 	: {"nom":"008","l":2.0, "h":2.0, "url":"./assets/images/brest/08-place_du_chateau.jpg", tags:["centre"]},
		"007" 	: {"nom":"007","l":2.0, "h":2.0, "url":"./assets/images/brest/07-campagne.jpg", tags:[]},
		"006" 	: {"nom":"006","l":2.0, "h":2.0, "url":"./assets/images/brest/06-tram.jpg", tags:["centre","transport"]},
		"005" 	: {"nom":"005","l":2.0, "h":2.0, "url":"./assets/images/brest/05-recouvrance.jpg", tags:[]},
		"004" 	: {"nom":"004","l":2.0, "h":2.0, "url":"./assets/images/brest/04-port_militaire.jpg", tags:["militaire","Penfeld"]},
		"003" 	: {"nom":"003","l":2.0, "h":2.0, "url":"./assets/images/brest/03-radoub.jpg", tags:["militaire"]},
		"002" 	: {"nom":"002","l":2.0, "h":2.0, "url":"./assets/images/brest/02-place_de_la_liberté.jpg", tags:[]},
		"001" 	: {"nom":"001","l":2.0, "h":2.0, "url":"./assets/images/brest/01-pont_national.jpg", tags:["transport"]}


	} ; 
	
	
// La liste des points où placer des objets

var accroches = [
			{"x": -12	, "y":2.0, 	"z":10, 	"angle": Math.PI/2.0},
			{"x": -12	, "y":2.0, 	"z":5,	 	"angle": Math.PI/2.0},
			{"x": -12	, "y":2.0, 	"z":0,		"angle": Math.PI/2.0},
			{"x": -12	, "y":2.0, 	"z":-5, 	"angle": Math.PI/2.0},
			{"x": -12	, "y":2.0, 	"z":-10, 	"angle": Math.PI/2.0},

			{"x": 12	, "y":2.0, 	"z":10, 	"angle": -Math.PI/2.0},
			{"x": 12	, "y":2.0, 	"z":5,	 	"angle": -Math.PI/2.0},
			{"x": 12	, "y":2.0, 	"z":0,		"angle": -Math.PI/2.0},
			{"x": 12	, "y":2.0, 	"z":-5, 	"angle": -Math.PI/2.0},
			{"x": 12	, "y":2.0, 	"z":-10, 	"angle": -Math.PI/2.0},

			{"x": -10	, "y":2.0, 	"z":12, 	"angle": -Math.PI},
			{"x": -5	, "y":2.0, 	"z":12,	 	"angle": -Math.PI},
			{"x": 0	   	, "y":2.0, 	"z":12,		"angle": -Math.PI},
			{"x": 5		, "y":2.0, 	"z":12, 	"angle": -Math.PI},
			{"x": 10	, "y":2.0, 	"z":12, 	"angle": -Math.PI},
			
			{"x": -10	, "y":2.0, 	"z":-12, 	"angle": 0},
			{"x": -5	, "y":2.0, 	"z":-12,	"angle": 0},
			{"x": 0	   	, "y":2.0, 	"z":-12,	"angle": 0},
			{"x": 5		, "y":2.0, 	"z":-12, 	"angle": 0},
			{"x": 10	, "y":2.0, 	"z":-12, 	"angle": 0},
			
			{"x": -10	, "y":2.0, 	"z":-1, 	"angle": Math.PI},
			{"x": -5	, "y":2.0, 	"z":-1,		"angle": Math.PI },
			{"x": 0	   	, "y":2.0, 	"z":-1,		"angle": Math.PI },
			{"x": 5		, "y":2.0, 	"z":-1, 	"angle": Math.PI },
			{"x": 10	, "y":2.0, 	"z":-1, 	"angle": Math.PI },
			
			{"x": -10	, "y":2.0, 	"z": 1, 	"angle": 0},
			{"x": -5	, "y":2.0, 	"z": 1,		"angle": 0 },
			{"x": 0	   	, "y":2.0, 	"z": 1,		"angle": 0 },
			{"x": 5		, "y":2.0, 	"z": 1, 	"angle": 0 },
			{"x": 10	, "y":2.0, 	"z": 1, 	"angle": 0 },
			
			{"x": -2	, "y":2.0, 	"z":10, 	"angle": -Math.PI/2.0},
			{"x": -2	, "y":2.0, 	"z":5,	 	"angle": -Math.PI/2.0},
			{"x": -2	, "y":2.0, 	"z":0,		"angle": -Math.PI/2.0},
			{"x": -2	, "y":2.0, 	"z":-5, 	"angle": -Math.PI/2.0},
			{"x": -2	, "y":2.0, 	"z":-10, 	"angle": -Math.PI/2.0},

			{"x": 2		, "y":2.0, 	"z":10, 	"angle": Math.PI/2.0},
			{"x": 2		, "y":2.0, 	"z":5,	 	"angle": Math.PI/2.0},
			{"x": 2		, "y":2.0, 	"z":0,		"angle": Math.PI/2.0},
			{"x": 2		, "y":2.0, 	"z":-5, 	"angle": Math.PI/2.0},
			{"x": 2		, "y":2.0, 	"z":-10, 	"angle": Math.PI/2.0},

			{"x": 0	, "y":2.0, 	"z":0, 	"angle": 0.0}
			
	] ;


// Relations entre les objets de la base de données et les points d'accroche dans la scène
//
// si la navigation n'est pas assez fluide il est possible de diminuer le nombre d'éléments de la liste poses

var poses = [
		{"tableau":"040"	, "accroche":39},
		{"tableau":"039"	, "accroche":38},
		{"tableau":"038"	, "accroche":37},
		{"tableau":"037"	, "accroche":36},
		{"tableau":"036"	, "accroche":35},
		{"tableau":"035"	, "accroche":34},
		{"tableau":"034"	, "accroche":33},
		{"tableau":"033"	, "accroche":32},
		{"tableau":"032"	, "accroche":31},
		{"tableau":"031"	, "accroche":30},
		{"tableau":"030"	, "accroche":29},
		{"tableau":"029"	, "accroche":28},
		{"tableau":"028"	, "accroche":27},
		{"tableau":"027"	, "accroche":26},
		{"tableau":"026"	, "accroche":25},
		{"tableau":"025"	, "accroche":24},
		{"tableau":"024"	, "accroche":23},
		{"tableau":"023"	, "accroche":22},
		{"tableau":"022"	, "accroche":21},
		{"tableau":"021"	, "accroche":20},
		{"tableau":"020"	, "accroche":19},
		{"tableau":"019"	, "accroche":18},
		{"tableau":"018"	, "accroche":17},
		{"tableau":"017"	, "accroche":16},
		{"tableau":"016"	, "accroche":15},
		{"tableau":"015"	, "accroche":14},
		{"tableau":"014"	, "accroche":13},
		{"tableau":"013"	, "accroche":12},
		{"tableau":"012"	, "accroche":11},
		{"tableau":"011"	, "accroche":10},
		{"tableau":"010"	, "accroche":9},
		{"tableau":"009"	, "accroche":8},
		{"tableau":"008"	, "accroche":7},
		{"tableau":"007"	, "accroche":6},
		{"tableau":"006"	, "accroche":5},
		{"tableau":"005"	, "accroche":4},
		{"tableau":"004"	, "accroche":3},
		{"tableau":"003"	, "accroche":2},
		{"tableau":"002"	, "accroche":1},
		{"tableau":"001"	, "accroche":0}
	] ; 

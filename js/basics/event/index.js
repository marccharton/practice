// on créer un émetteur qui ressemble à un objet du dom
// ce n'est pas un objet du dom juste un objet avec des propriétés qui ressemble vaguement à ce qu'on trouve sur les objets du DOM
let emetteur = {
	innerHtml: "<p>Pouet pouet les amis/p>"
	onclick: null,
};

// on définit la méthode onclick de notre emetteur afin de définir un comportement particulier lors de notre 'click' sur l'evenement
// la méthode onclick ne vaut que pour l'exemple et ne sera pas appelée lors d'un click puisque notre emetteur n'est qu'un objet bidon (impossible de cliquer dessus)
emetteur.onclick = function (event) {
	console.log(event);
};


// simulation du déclenchement d'un événement.
// d'habitude quand on clique il se passe des choses similaires coté moteur javascript, là on fait un truc similaire à ce qui peut se passer.
function declencherEvenement() {

	// on créer un objet event représentant l'événement courant
	const event = {
		target: emetteur, // on simule la propriété target en mettant notre fameux emetteur
		createBy: "jessalynn Choby", // un créateur (pourquoi pas ?)
		time: 684351384351 // nombre completement random
	};

	// on appelle la fonction onclick de l'emetteur
	// on lui passe en paramètre l'event qu'on a créé juste avant
	emetteur.onclick(event);
}


// en faisait cet appel nous venons simuler le click sur notre émetteur
declencherEvenement();

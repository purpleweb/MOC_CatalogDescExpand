(function( $ ) {

	$('body.catalog-category-view .main .col-main h1').next().addClass('expandable');

	$('div.expandable').expander({
		expandPrefix: '&#8230; ',
		expandText: 'Lire la suite',
		userCollapseText: 'Fermer',
		userCollapsePrefix: ' '
	});

}( jQuery ));
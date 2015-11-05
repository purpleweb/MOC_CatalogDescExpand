(function( $ ) {

	$(function() {
		$('div.expandable').expander({
			expandPrefix: '&#8230; ',
			expandText: 'Lire la suite',
			userCollapseText: 'Fermer',
			userCollapsePrefix: ' '
		});
	});

}( jQuery ));
 $(function() {
   // For creating modal fields.
	$('form .add_modal').on('click', function(event) {
		$('.modal').modal( 'show' );
    // Lets the cancel button know about the extra fields.
    $('.modal .cancel-modal').on('click', cancelModal );
	});

	function cancelModal(event) {
		$(this).parents('.modal').modal('hide');
    $(this).prev('.fieldset').remove();
    event.preventDefault();
  }
});
;(function(){

            var closeMenu = function (show){
                $('#menuToggle').toggleClass('active', show);
                $('body').toggleClass('body-push-toleft', show);
                $('#theMenu').toggleClass('menu-open', show);
            };

			// Menu settings
			$('#menuToggle, .menu-close').on('click', closeMenu);

            $('#f, #headerwrap').on('click', function () {
                closeMenu(false);
            });


})(jQuery)
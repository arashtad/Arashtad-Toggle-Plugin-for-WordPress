/**
* Plugin Name: 	Arashtad Toggle
* Plugin URI:  	https://arashtad.com/wordpress-plugins/introductions/arashtad-toggle/
* Description: 	Responsive accordion widget for WordPress, created by <a href="https://arashtad.com" target="_blank">Arashtad.com</a>
* Version:     	1.1
* Author:      	Amin Shahrokhi
* Author URI:  	https://arashtad.com/
* License:     	GPL2
* License URI: 	https://www.gnu.org/licenses/gpl-2.0.html
* Copyright:	(c) 2011 - 2016 Arashtad Ltd. All Rights Reserved.
**/

jQuery.noConflict();

jQuery(document).ready(function(){

	jQuery('.itoggle').each(function(){
		var moduleID = jQuery(this).attr('id');
		jQuery(this).find('section:first-child').addClass('itoggle_active');
		jQuery(this).find('section').click(function(){
			if(jQuery(this).hasClass('itoggle_active'))
			{
				jQuery(this).removeClass('itoggle_active');
				jQuery(this).find('.itoggle_content').slideUp('fast');
			}
			else
			{
				jQuery(this).addClass('itoggle_active');
				jQuery(this).find('.itoggle_content').slideDown('fast');
			}
		});
	});

});

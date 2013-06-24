/* =============================================================
    JENNIKATE WALLACE GLOBAL JAVASCRIPT
    contains default functions 
    
    NOTE:

        
    
    CONTENTS: 
    //GLOBAL FUNCTIONS
        Nav : identifies whether the nav is too wide for the screen and collapses it if need be
        
    //DOCUMENT READY
        > run on document ready
        > run on window resize
    
    //SHOW/HIDE
        > display submenus (in off canvas nav)
        
        

        
============================================================= */

/* ------------------------------------------------------------
    GLOBAL FUNCTIONS
------------------------------------------------------------ */
/* nav: identifies whether the nav is too wide for the screen and collapses it if need be */
function collapseMenu() {
    var displayWidth = $(document).width(); 
    var navWidth = $('#menuGlobal').width()+100; /* width ignores the box-modal so adding 100 to account for most of the padding */
    var logoWidth = $('.imgLogo').width();
    // if nav width > display width - logo width collapse the nav else show the standard nav
    if ( navWidth > (displayWidth - logoWidth )) {
        $('#viewport').addClass('navCollapse');
        } else {
            $('#viewport').removeClass('navCollapse');
    }
}



 
/* =============================================================
    DOCUMENT READY
============================================================= */
$(document).ready(function() {

    /* run on document ready */
        collapseMenu();
    /* run on window resize */
        $(window).resize(function() {
           collapseMenu();
        })


  
/* ------------------------------------------------------------
    SHOW / HIDE
------------------------------------------------------------ */
/* ----- display submenus ----- */
    $('.menuHasSubmenu').click(function () {
        $(this).siblings().slideToggle('fast', function(){
            if (($('#menuCollapsed')[0].scrollHeight) > ($('#containerPage')[0].scrollHeight)) {
                $('.viewport').height($("#menuCollapsed").height());
            } else {
                $('.viewport').height($("#containerPage").height());
            }
        });      
        $(this).children().toggle();
    });


    
    
    
    

    
    
/* =============================================================
End of page - close document ready 
*/
});
    
























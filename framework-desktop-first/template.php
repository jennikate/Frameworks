<!DOCTYPE html>
<html lang="en">
    <?php include '../site-templates/head.php'; ?>  <!--<head> to </head>-->
        
    <body id="app/page name"> <!-- if we place the name on the body then we can use common classes which can be easily overwritten - rather than having specific classes for things like nav -->
        <!-- start viewport : used to wrap the content so off canvas nav will work -->
        <div id="viewport" class="viewport">
            
            <?php include '../site-templates/nav-offcanvas.php'; ?> <!-- <nav id="navOffCanvas"> to </nav>  -->
            
            <!-- start main container -->
            <div id="containerPage" class="containerPage">
                <?php include '../site-templates/header.php'; ?> <!-- <header> to </header> -->
                <div class="pageMain">
                    <div class="containerCentralContent clearfix">
                    
                    

                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    </div>
                </div>
                <?php include '../site-templates/footer.php'; ?> <!-- //<footer> to </footer> -->
            </div>
        <!-- end main container -->
        </div>
        <!-- end viewport -->
    </body>
</html>
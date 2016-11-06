//головне вікно
$('.animFlip')
       .waypoint( function(dir) {
        if ( dir == 'down' )
            $(this)
                .addClass('flipInX');
   }, {
       offset: '90%'
   })

//лінії (ліва)
$('.animBranchLeft')
       .waypoint( function(dir) {
        if ( dir == 'down' )
            $(this)
                .addClass('fadeInLeft');
   }, {
       offset: '70%'
   })

//лінії (права)
$('.animBranchRight')
       .waypoint( function(dir) {
        if ( dir == 'down' )
            $(this)
                .addClass('fadeInRight');
   }, {
       offset: '70%'
   })

//форма
$('.animForm')
       .waypoint( function(dir) {
        if ( dir == 'down' )
            $(this)
                .addClass('fadeInUp');
   }, {
       offset: '70%'
   })

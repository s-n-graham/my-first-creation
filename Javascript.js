// NUUKSIO
$('.NuuksioButton').hover(function() {
        $('#MainMap').attr('src', 'WebVectors/VectorMap/mapNuuksio.png')
        }, function() {
        $('#MainMap').attr('src', 'WebVectors/VectorMap/VectorMap.png');
        });

// Trying to make <p id="Nuux"> etc appear on mouseover/.hover Not confident enough to chain it since this since the following code is not doing anything. 

// $('.NuuksioButton grow').mouseover(function() {
//    $('#Nuux').fadeIn(250);
// }).mouseout(function() {
//    $('#Nuux').fadeOut(250);
// });

//$(".buttonWrapper").hover(function() {
//    $('#Nuux').fadeIn(250)},(function() {
 //   $('#Nuux').fadeOut(250);
 //});


                

// SIPOO
$('.SipooButton').hover(function() {
        $('#MainMap').attr('src', 'WebVectors/VectorMap/mapSipoonkorpi.png')
        }, function() {
$('#MainMap').attr('src', 'WebVectors/VectorMap/VectorMap.png');
        });
        
// TAMMISAARI
$('.TammisaariButton').hover(function() {
        $('#MainMap').attr('src', 'WebVectors/VectorMap/mapTammisaari.png')
        }, function() {
$('#MainMap').attr('src', 'WebVectors/VectorMap/VectorMap.png');
        });
        
// LIESJARVI
$('.LiesjarviButton').hover(function() {
        $('#MainMap').attr('src', 'WebVectors/VectorMap/mapLiesjarvi.png')
        }, function() {
$('#MainMap').attr('src', 'WebVectors/VectorMap/VectorMap.png');
        });
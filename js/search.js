$(function () {

    $('#search').click(function(){
        $('#searchresult').empty();
        var keyword = $('#keyword').val();
        var type = $('#type').val();
        var radius = $('#radius').val();
        PlaceSearch.Search(keyword, type, radius).then(function(data){
            for(var i=0;i<data.length;i++){
                var row = 
                '<a href="detail.html?placeid=' + data[i].id + '">' + 
               
  '<div class="jumbotron jumbotron-fluid jm1">'+
    
                '<div class="row">' + 
                '<div class="col"><img style="height:200px;width:250px" src=' + data[i].photo + ' class="thumbnail" /></div>' +
                '<div class="col">' + data[i].name + '</div>' +
                '<div class="col">'+ '<span class="rating-static rating-'+ (data[i].rating)*10+ '">'+'</span>'+data[i].rating+ '</div>' +
                '</div>' + '</div>'+
                '</a>';
                $('#searchresult').append(row);
            }
        });        
    });    
});
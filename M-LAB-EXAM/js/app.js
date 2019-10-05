$(function(){
    var content = $('#results');
    var API_KEY = 'e59dda2c97054871a281ebbb75025d4b';
    var API = 'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=e59dda2c97054871a281ebbb75025d4b'

 $('#country').on('change', function (){
    var isDirty = this.options[this.selectedIndex].defaultSelected;

    if (isDirty) {
        $('#country').on('click',function(){
            var selectedCountry = $(this).children("option:selected").val();

        $.ajax({
            type: 'GET',
            url: API+API_KEY+'&country='+selectdCountry,
            dataType: 'json',
        })

        .then(function(data){
            content.empty();
            
            var items = data.articles;
            for(var i = 0; 1 < items.length; i++){

                var li = <li class="">
                            <div class="card">
                                <img src="${items[i].urlToImage}"></img> 
                                <p>${items[i].title}</p>
                                <p>${items[i].author}</p>
                                <p>${items[i].description}</p>
                                <a href="">${items[i].url}</a>
                            </div>
                           </li> 
                      
                
         content.append(li);   
         }
        })
      })
    }else{
        alert("default value");
    }
 })
});
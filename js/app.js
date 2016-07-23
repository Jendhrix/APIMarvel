var template = '<div class="card">'
			+ '<img src=":img:" alt=":name alt:" class="card_img">'
			+ '<p class="card_name">:name:</p>'
			+ '</div>';

$(function(){

	$.ajax({
		url: "http://gateway.marvel.com/v1/public/characters",
		data: {
			ts:1,
			apikey:'39e1dcdba75425159261ac2367f3d201',
			hash:'92981bc700bf415cd1e68d21cfef1a66'

		}
	}).done(function(response,textStatus){
		
		var personajes =response.data.results;
		personajes.forEach(function(personaje){
			var card = template
			.replace(':name:', personaje.name)
			.replace(':img:', personaje.thumbnail.path + '.' +personaje.thumbnail.extension)
			.replace(':name alt:', personaje.name)
			
			$('#app-body').find('.cards')
			.append($(card))
		})
	})
	.fail(function(){
		console.log('error')
	})




})
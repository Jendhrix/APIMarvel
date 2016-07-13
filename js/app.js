$(function(){

	$.ajax({
		url: "http://gateway.marvel.com/v1/public/characters",
		data: {
			ts:1,
			apikey:'39e1dcdba75425159261ac2367f3d201',
			hash:'92981bc700bf415cd1e68d21cfef1a66'

		}
	}).done(function(response,textStatus){
		debugger;
		console.log('Petición exitosa')
	})
	.fail(function(){
		console.log('error')
	})




})
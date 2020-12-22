Site = {

	Number: function(n){
		if(n < 10){
			n = '0'+n;
		}
		return n;
	},

	Count: function(tag, monat, jahr){
		$('.score').countdown(''+jahr+'/'+monat+'/'+tag+'', function(event) {
			var next_d = Site.Number(parseInt(event.strftime('%D')) + 1), now_d = Site.Number(parseInt(event.strftime('%D'))), prev_d = Site.Number(parseInt(event.strftime('%D')) - 1);
			var next_h = Site.Number(parseInt(event.strftime('%H')) + 1), now_h = Site.Number(parseInt(event.strftime('%H'))), prev_h = Site.Number(parseInt(event.strftime('%H')) - 1);
			var next_m = Site.Number(parseInt(event.strftime('%M')) + 1), now_m = Site.Number(parseInt(event.strftime('%M'))), prev_m = Site.Number(parseInt(event.strftime('%M')) - 1);
			var next_s = Site.Number(parseInt(event.strftime('%S')) + 1), now_s = Site.Number(parseInt(event.strftime('%S'))), prev_s = Site.Number(parseInt(event.strftime('%S')) - 1);

		 	if(next_d >= 0){ $('.score .tage .next').html(next_d); }
		 	if(now_d >= 0){ $('.score .tage .now').html(now_d); }
		 	if(prev_d >= 0){ $('.score .tage .prev').html(prev_d); }

		 	if(next_h >= 0){ $('.score .stunden .next').html(next_h); }
		 	if(now_h >= 0){ $('.score .stunden .now').html(now_h); }
		 	if(prev_h >= 0){ $('.score .stunden .prev').html(prev_h); }

		 	if(next_m >= 0){ $('.score .minuten .next').html(next_m); }
		 	if(now_m >= 0){ $('.score .minuten .now').html(now_m); }
		 	if(prev_m >= 0){ $('.score .minuten .prev').html(prev_m); }

		 	if(next_s >= 0){ $('.score .sekunden .next').html(next_s); }
		 	if(now_s >= 0){ $('.score .sekunden .now').html(now_s); }
		 	if(prev_s >= 0){ $('.score .sekunden .prev').html(prev_s); }
		});
	}
}
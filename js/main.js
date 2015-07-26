/**
 * 
 * main.js
 * 
 * funzioni principali JS per la gestione della pagina
 * 
 * 
 * */

/**
 * 
 * esegue la chiammata AJAX verso la pagina page e ne restituisce il response
 * 
 * Parametri:
 *  page pagina da processare
 *  data i dati da passare usando il metodo POST, nel formato canonico "x1=e1&x2=e2...xn=en"
 * 
 * Valore di ritorno:
 *  l'output fornito dell'invocazione di page alla quale sono stati passati i parametri data 
 * 
 * */
function getPhpResponse (page, data)
{
	var req = new XMLHttpRequest();  
	req.open('POST', page, false);   
	req.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	req.send(data);
	return (req.responseText);
}

/** 
 * 
 * modifica il tracciato della bicicletta.
 * Vedere la relazione per maggiori dettgli su come è stato disegnato il grafico
 * 
 * Parametri:
 *  m numero di maschi
 *  f numero di femmine 
 * 
 * */
function generaGraficoBici(m,f)
{
	m=m || 1
	f=f || 0.1
	
	var lineFunction_monotone = d3.svg.line()
								.x(function(d) { return d.x; })
								.y(function(d) { return d.y; })
								.interpolate("monotone");
								
    var lineFunction_basis = d3.svg.line()
							.x(function(d) { return d.x; })
							.y(function(d) { return d.y; })
							.interpolate("basis");
							
    var lineFunction_cardinalclosed = d3.svg.line()
									.x(function(d) { return d.x; })
									.y(function(d) { return d.y; })
									.interpolate("cardinal-closed");
	
	var width=d3.select("#bici")
				.attr("width");
				
	var height=d3.select("#bici")
				.attr("height");
	
	
	
	var rapporto=m/f;
	
	var areaF=100/(rapporto+1);
	var areaM=100-areaF;
	
	var rM=Math.sqrt(areaM/3.14)*10;
	var rF=Math.sqrt(areaF/3.14)*10;
	
	var rM_in=rM-(1/10)*rM;
	var rF_in=rF-(1/10)*rF;
	
	var puntoA={"y": height-5-rM ,"x": (width/2)-rM - (4/10)*rM};
	var puntoB={"y": height-5-rF ,"x": (width/2)+rF + (4/10)*rF};
	var puntoC={"x": puntoA['x'] ,"y": puntoA['y']-rM - (4/10)*rM};
	var puntoD={"x": puntoB['x']-rF ,"y": puntoC['y']-(puntoA['y']-puntoB['y'])};
	
	var puntoE={"x": puntoC['x']-15, "y": puntoC['y']-20};
	var puntoF={"x": puntoC['x']+20, "y":puntoC['y']-30};
	
	var puntoG={"x": puntoC['x']-7,"y": puntoC['y']-10};
	var puntoH={"x": puntoC['x']+17, "y": puntoC['y']-15};
	
	var puntoI={"x": puntoD['x']+10,"y": puntoD['y']-10};
	
	var puntoL={"x": puntoD['x']-12,"y": puntoI['y']-2};
	var puntoM={"x": puntoI['x']+18,"y": puntoI['y']-4};
	var puntoN={"x": puntoI['x']+15,"y": puntoI['y']-12};
	
	d3.select("#circleM").transition()
						.attr("cx", puntoA['x'])
						.attr("cy", puntoA['y'])
						.attr("r", rM);
						
	/*d3.select("#circleM2").transition()
						.attr("cx", puntoA['x'])
						.attr("cy", puntoA['y'])
						.attr("r", rM_in);
		*/				
	d3.select("#circleF").transition()
						.attr("cx", puntoB['x'])
						.attr("cy", puntoB['y'])
						.attr("r", rF);
	/*					
	d3.select("#circleF2").transition()
						.attr("cx", puntoB['x'])
						.attr("cy", puntoB['y'])
						.attr("r", rF_in);
	*/
	
	var s="M"+puntoA['x']+","+puntoA['y']+"L"+puntoC['x']+","+puntoC['y'];
	d3.select("#asse").transition()
					.attr("d", s);
	
	var lineData_telaio_top = [puntoC,  puntoD, puntoB];
	var lineData_telaio_bottom = [puntoA, puntoC, puntoD, puntoB];
	
	d3.select("#telaio_top").transition()
							.attr("d", lineFunction_monotone(lineData_telaio_top));
							
	d3.select("#telaio_bottom").transition()
							.attr("d", lineFunction_basis(lineData_telaio_bottom));
	
	var lineData_manubrio_left=[puntoC, puntoE, puntoF];
	var lineData_manubrio_right=[puntoC, puntoG, puntoH];
	
	d3.select("#manubrio_left").transition()
							.attr("d", lineFunction_basis(lineData_manubrio_left));
							
	d3.select("#manubrio_right").transition()
							.attr("d", lineFunction_basis(lineData_manubrio_right));
	
	var s="M"+puntoD['x']+","+puntoD['y']+"L"+puntoI['x']+","+puntoI['y'];
	d3.select("#asta_sellino").transition()
							.attr("d", s);
	
	var lineData_sellino=[puntoL, puntoM, puntoN];
	d3.select("#sellino").transition()
						.attr("d", lineFunction_cardinalclosed(lineData_sellino));

}

/**
 * 
 * Genera la stringa in formato POST, che potrà essere passata ad una pagina php
 * 
 * Parametri:
 *  dati array i cui elementi dovranno essere usati come parametri post
 *  
 * Valore restituito:
 *  la stringa codificata nel formato "x1=v1&x2=v2...xn=vn", dove v1...vn sono gli elementi dell'array passati come parametro
 * 
 * */
function generaStringa(dati)
{
	var s=''
	
	for(var k in dati)
	{
		for (var el in dati[k])
		{
			s+=k+'[]='+dati[k][el]+'&';
		}
	}
	
	return s;
}

/**
 * 
 * Esegue la ricerca usando i parametri settati negli array associativi globali dati_miur e dati_cnr e parsa il response in modo da ottenere il numero di degli uomini, delle donne e degli errori
 * Richimama la funzione che disegna il grafico della bicicletta e avverte l'utente se ci sono troppi dati errati nella ricerca effettuata
 *  
 * Parametri:
 *  id uno fra "cnr" e "miur": stabilisce quale database usare per la ricerca
 * 
 * */
function gestoreRicerca(id)
{		
	switch (id){
		case 'cnr':
		{
			var s=generaStringa(dati_cnr);
			var a=JSON.parse(getPhpResponse("./api/ricerca_cnr.php", s));
			break;
		}
		case 'miur':
		{
			var s=generaStringa(dati_miur);
			var a=JSON.parse(getPhpResponse("./api/ricerca_miur.php", s));
			break;
		}
	}
	
	
	var errori=0, numero_uomini=1, numero_donne=1;
	
	for (var i=0; i<a.length; i++)
	{
		if(a[i]['sesso']=='M')
			numero_uomini=parseInt(a[i]['numero']);
		else if(a[i]['sesso']=='F')
			numero_donne=parseInt(a[i]['numero']);
		else
			errori=errori+parseInt(a[i]['numero']);
	}
	generaGraficoBici(numero_uomini, numero_donne);
		
		
	//genero un avviso all'utente, se per la ricerca effettuata sono presenti molti dati incerti nel db	
	r = Math.floor( (parseFloat(numero_uomini)+parseFloat(numero_donne))/parseFloat(errori) );
	
	$("#warnings").html("");
	if (errori>0)
	{
		$("#warnings").html(
			'<p>Un dato su '+r+' non è attendibile nella tua ricerca.<br>Questo dipende dal fatto che i professori hanno nomi unisex oppure sconosciuti al nostro database.<br>Presto aggiungeremo una funzione che ti permetterà di correggerli!</p>'
		);
		if (r<15)
		{
			$("#warnings").html(
				$("#warnings").html() + '<p><br><span style="color:#AA3939">Ci sono troppi dati non attendibili nella tua ricerca</span></p>'
			);
		}	
	}
}

/**
 * 
 * Colora di rosso alcuni atenei sulla mappa e di nero tutti gli altri
 * 
 * Parametri:
 *  lista id degli atenei da colorare di rosso
 * 
 * 
 * */
function coloraAtenei(lista)
{
	
	d3.selectAll(".atenei").each(
		function()
		{
			if(lista.indexOf(d3.select(this).attr('id'))>-1)
			{
				d3.select(this).transition().attr("fill", "red").attr("r", 5);
			}
			else
			{
				d3.select(this).transition().attr("fill", "black").attr("r", 2);
			}
		}
	);
}

/**
 * 
 * Posiziona sulla mappa le strutture, prendendo la loro latitudine e longitudine dalle pagine parametri_miur.php e parametri_cnr.php 
 * crea due input di tipo "range" per restringere la ricerca in base alla latitudine
 * 
 * 
 * Parametri:
 *  id uno fra "cnr" e "miur": stabilisce quali strutture localizzare
 * 
 * 
 * */
function creaMappa(id)
{	
	//conosco i valori di latitudine e longitudine massimi e minimi per la penisola italiana
	var leftLongitude=6.624486
	var rightLongitude=18.521301
	var topLatitude=47.092916  
	var bottomLatitude=35.490303

	var cartina=d3.select("#cartina_italia");
	
	//considero la dimensione dell'svg italyHigh
	var c_width=cartina.attr("width"); 
	var c_height=cartina.attr("height");
	
	switch(id){
		case 'cnr':{
			var latlng=JSON.parse(getPhpResponse("./api/parametri_cnr.php", "id=latlng"));
			break;
			}
		case 'miur':{
			var latlng=JSON.parse(getPhpResponse("./api/parametri_miur.php", "id=latlng"));
		}
	}
	
	for (var i=0; i<latlng.length; i++)
	{
			
		var lat=latlng[i]['latitudine'];
		var lng=latlng[i]['longitudine'];
		
		//calcolo le coordinate del punto dove posizionare l'ateneo
		var cx=(lng-leftLongitude)*c_width/(rightLongitude-leftLongitude)
		var cy=(lat-topLatitude)*c_height/(bottomLatitude-topLatitude)
		
		//aggiungo il punto alla cartina
		cartina.append("circle")
			.attr("id", latlng[i]['id'])
			.attr("class", "atenei")
			.attr("cx", cx )
			.attr("cy", cy)
			.attr("r", 2)
			.attr("fill", "red");
	}
	
	
	//creo gli input type range per restringere la ricerca in base alla latitudine
	$("#loc_geografica").append("<input type='range' name='BottomLatitude' id='BottomLatitude' min='0' max='"+c_height+"' value='"+c_height+"'>")
	$("#loc_geografica").append("<input type='range' name='TopLatitude' id='TopLatitude' min='0' max='"+c_height+"' value='0'>")
	$("#loc_geografica").append("<label id='label_latlng'>Scegli l'area geografica:</label>") 
    $("#loc_geografica").append("<input type='radio' name='latitude' class='latitude' value='outer'><p>Dai punti estremi...</p>")
    $("#loc_geografica").append("<input type='radio' name='latitude' class='latitude' value='inner' checked><p>...ai punti interni</p>") 

}

/**
 * 
 * Inizializza le strutture dati necessarie per creare il grafico della bici
 * 
 * Vedere la relazione per maggiori dettgli su come è stato disegnato il grafico
 * 
 * */
function InizializzaGraficoBici()
{
	$("#graph").html("");
	
	var container=d3.select("#graph")
					.append("svg")
					.attr("id", "bici")
					.attr("width", 400)
					.attr("height", 200);
	
	var width=d3.select("#bici").attr("width");
	var height=d3.select("#bici").attr("height");
	var r_ex=50;
	var r_in=r_ex-(1/10)*r_ex;
	
	
	var puntoA={"y": height-2.5-r_ex ,"x": (width/2)-r_ex - (4/10)*r_ex};
	var puntoB={"y": height-2.5-r_ex ,"x": (width/2)+r_ex + (4/10)*r_ex};
	var puntoC={"x": puntoA['x'] ,"y": puntoA['y']-r_ex - (4/10)*r_ex};
	var puntoD={"x": puntoB['x']-r_ex ,"y": puntoC['y']};
	
	var puntoE={"x": puntoC['x']-15, "y": puntoC['y']-20};
	var puntoF={"x": puntoC['x']+20, "y":puntoC['y']-30};
	
	var puntoG={"x": puntoC['x']-7,"y": puntoC['y']-10};
	var puntoH={"x": puntoC['x']+17, "y": puntoC['y']-15};
	
	var puntoI={"x": puntoD['x']+10,"y": puntoD['y']-10};
	
	var puntoL={"x": puntoD['x']-12,"y": puntoI['y']};
	var puntoM={"x": puntoI['x']+18,"y": puntoI['y']-2};
	var puntoN={"x": puntoI['x']+15,"y": puntoI['y']-12};
	
	
	
	container.append("circle")
			.attr("cx", puntoA['x'])
			.attr("cy", puntoA['y'])
			.attr("r", r_ex)
			.attr("fill", "none")
			.attr("stroke", "#0e1968")
			.attr("stroke-width", 5)
			.attr("id", "circleM");
			
	/*container.append("circle")
			.attr("cx", puntoA['x'])
			.attr("cy", puntoA['y'])
			.attr("r", r_in)
			.attr("fill", "rgb(41, 88, 123)")
			.attr("id", "circleM2");*/
			
	container.append("circle")
			.attr("cx", puntoB['x'])
			.attr("cy", puntoB['y'])
			.attr("r", r_ex )
			.attr("fill", "none")
			.attr("stroke", "#AA3939")
			.attr("stroke-width", 5)
			.attr("id", "circleF");
			
/*	container.append("circle")
			.attr("cx", puntoB['x'])
			.attr("cy", puntoB['y'])
			.attr("r", r_in)
			.attr("fill", "rgb(41, 88, 123)")
			.attr("id", "circleF2"); */
	
	//Funzioni di interpolazione dei punti
	var lineFunction_monotone = d3.svg.line()
									.x(function(d) { return d.x; })
									.y(function(d) { return d.y; })
									.interpolate("monotone");
									
    var lineFunction_basis = d3.svg.line()
									.x(function(d) { return d.x; })
									.y(function(d) { return d.y; })
									.interpolate("basis");
									
    var lineFunction_cardinalclosed = d3.svg.line()
											.x(function(d) { return d.x; })
											.y(function(d) { return d.y; })
											.interpolate("cardinal-closed");
	
	//creazione asse
	var s="M"+puntoA['x']+","+puntoA['y']+"L"+puntoC['x']+","+puntoC['y'];
	container.append("path")
			.attr("id", "asse")
			.attr("d", s)
			.attr("stroke", "#312D2D")
			.attr("stroke-width", 5);
	
	
	//creazione telaio
	
	var lineData_telaio_top = [puntoC,  puntoD, puntoB];
	var lineData_telaio_bottom = [puntoA, puntoC, puntoD, puntoB];
	
	container.append("path")
			.attr("id","telaio_top")
			.attr("d", lineFunction_monotone(lineData_telaio_top))
			.attr("stroke", "#312D2D")
			.attr("stroke-width", 5)
			.attr("fill", "none");
			
	container.append("path")
			.attr("id","telaio_bottom")
			.attr("d", lineFunction_basis(lineData_telaio_bottom))
			.attr("stroke", "#312D2D")
			.attr("stroke-width", 5)
			.attr("fill", "none");
		
	//creazione manubrio
	var lineData_manubrio_left=[puntoC, puntoE, puntoF];
	var lineData_manubrio_right=[puntoC, puntoG, puntoH];
	
	container.append("path")
			.attr("id","manubrio_left")
			.attr("d", lineFunction_basis(lineData_manubrio_left))
			.attr("stroke", "#312D2D")
			.attr("stroke-width", 3.5)
			.attr("fill", "none");
			
	container.append("path")
			.attr("id","manubrio_right")
			.attr("d", lineFunction_basis(lineData_manubrio_right))
			.attr("stroke", "#312D2D")
			.attr("stroke-width", 3.5)
			.attr("fill", "none");
	
	
	//creazione sellino
	var s="M"+puntoD['x']+","+puntoD['y']+"L"+puntoI['x']+","+puntoI['y'];
	container.append("path")
			.attr("id","asta_sellino")
			.attr("d", s)
			.attr("stroke", "#312D2D")
			.attr("stroke-width", 4)
			.attr("fill", "none");
	
	var lineData_sellino=[puntoL, puntoM, puntoN];
	container.append("path")
			.attr("id","sellino")
			.attr("d", lineFunction_cardinalclosed(lineData_sellino))
			.attr("stroke", "#312D2D")
			.attr("stroke-width", 3.5)
			.attr("fill", "#312D2D");
	
}

/**
 * 
 * setta la lista degli atenei contenuta negli array asscociativi globali dati_miur e dati_cnr in modo che contenga solo gli atenei che rispettano i limiti stabiliti dai parametri
 * 
 * Parametri:
 *  tl valore massimo della latitudine
 *  bl valore minimo della latitudine
 *  inner "inner" specifica se cercare tutti gli atenei con latitudine interna all'intervallo [bl,tl], "outer" solo quelli con latitudine esterna
 *  tp valore massimo della popolazione studentesca
 *  bp valore minimo della popolazione studentesca
 * 
 * */
function ricercaAtenei(tl, bl, inner, tp, bp)
{
	//console.log(tl, bl, inner, tp, bp)
	
	bp=bp || 0;
	tp=tp || 0;
	
	
	bp=parseInt(bp);
	tp=parseInt(tp);
	
	//gestisco overlapping delle selezioni
	if (bl-tl<0)
	{
		var temp=tl;
		tl=bl;
		bl=temp;
	}
	
	if (tp-bp<0)
	{
		var temp=tp;
		tp=bp;
		bp=temp;
	}

	var ret=[];
	switch(inner){
		case "inner":
		{
			d3.selectAll(".atenei").each(
				function()
				{
					var d=d3.select(this);
					
					if (parseFloat(d.attr("cy"))>=tl && parseFloat(d.attr("cy"))<=bl)
						ret.push(d.attr("id"));
				}
			)
			
			break;
		}
		
		case "outer":
		{
			d3.selectAll(".atenei").each(
				function()
				{
					var d=d3.select(this);
					
					if (!(parseFloat(d.attr("cy"))>=tl && parseFloat(d.attr("cy"))<=bl))
						ret.push(d.attr("id"));
				}
			)
			
			break;
		}
	}
	
	if (bp!=0)
	{
		var a=JSON.parse(getPhpResponse('./api/popolazione.php', "minimo="+bp+"&massimo="+tp));


		var t=[];
		for (el in a)
		{
			if (ret.indexOf(a[el]['id'])>-1)
			{
				t.push(a[el]['id']);
			}
		}
		
		return t;
	}
	else
	{
		return ret;
	}
}

/**
 * 
 * Inizializza l'interfaccia utente se è stato selezionato di cercare fra i dati del miur
 * 
 * 
 * */
function Init_miur()
{
	$("#loc_geografica").html("");
	$("#warnings").html("");
	
	//Setto la visualizzazione di base del grafico
	InizializzaGraficoBici();
	
	//creo gli elementi html necessari per la selezione dei parametri
	
	var superaree=JSON.parse(getPhpResponse("./api/parametri_miur.php", "id=superaree"))
	var s='<label id="label_settore">Seleziona il settore scientifico disciplinare:</label><br/>';
	for(i=0; i<superaree.length; i++)
	{
		s+='<input type="checkbox" name="superaree" id="'+superaree[i]['superarea']+'">'+superaree[i]['superarea']+'</input>'
	}
	
	$("#superaree").html(s);
	
	/*$("#dimensione").html(
		getPhpResponse("./api/parametri_miur.php", "id=popolazione")
	);*/
	
	
	var fasce=JSON.parse(getPhpResponse("./api/parametri_miur.php", "id=fascia"))
	var s='<label id="label_fascia">Seleziona la fascia di appartenenza:</label><br/>';
	
	for(var i=0; i<fasce.length; i++)
	{
		s+='<input type="checkbox" name="fasce" id="'+fasce[i]['fascia']+'">'+fasce[i]['fascia']+'</input>';
	}
	
	$("#fascia").html(s);
	
	var anni=JSON.parse(getPhpResponse("./api/parametri_miur.php", "id=anno"))
	
	var s='<label id="label_anni">Seleziona il periodo di riferimento:</label>'
	s+='<form oninput="AnnoMinout.value=AnnoMin.value"><input type="range" name="AnnoMin" min="'+anni[0]['min']+'" max="'+anni[0]['max']+'" step="1" value="'+anni[0]['max']+'"><output name="AnnoMinout" for="AnnoMin">'+anni[0]['min']+'</output></form>'
    s+='<form oninput="AnnoMaxout.value=AnnoMax.value"><input type="range" name="AnnoMax" min="'+anni[0]['min']+'" max="'+anni[0]['max']+'" step="1" value="'+anni[0]['min']+'"><output name="AnnoMaxout" for="AnnoMax">'+anni[0]['max']+'</output></form>';
    
	$("#anno").html(s);
	
	$("#cdl").html(
		'<label id="label_cdl">Seleziona la docenza di riferimento:</label><br/><input type="checkbox" name="cdl" id="L_check" value="L">Corsi di Laurea Triennale</input><input type="checkbox" name="cdl" id="LM_check" value="LM">Corsi di Laurea Magistrale</input>'
	);
	
	creaMappa('miur');
	
	
	//gestisco gli eventi
	
	$("input:checkbox[name=superaree]").on("click", function() {
		var aree=[];
		$("input:checkbox[name=superaree]:checked").each(function(){
				aree.push(this.id);
			});
			
			dati_miur["superaree"]=aree;
			
			gestoreRicerca('miur');
		
	});
	
	$("input:checkbox[name=fasce]").on("click", function(){
	
		var fasce=[];
			$("input:checkbox[name=fasce]:checked").each(function(){
				fasce.push(this.id);
			});
			
			dati_miur["fasce"]=fasce;
			
			gestoreRicerca('miur');
		});
		
	$("input[name=AnnoMin]").on("change", function(){
			dati_miur["anni"][0]=$("input[name=AnnoMin]").val();
			dati_miur["anni"][1]=$("input[name=AnnoMax]").val();
			gestoreRicerca('miur');
		}
		
	);
	
	$("input[name=AnnoMax]").on("change", function(){
			dati_miur["anni"][0]=$("input[name=AnnoMin]").val();
			dati_miur["anni"][1]=$("input[name=AnnoMax]").val();
			gestoreRicerca('miur');
			
	}
		
	);
		
	/*$("input[name=popolazioneMin]").on("change", function(){
		
		var atenei=ricercaAtenei($("input[name=TopLatitude]").val(), $("input[name=BottomLatitude]").val(), $("input[name=latitude]:checked").val(), $("input[name=popolazioneMin]").val(), $("input[name=popolazioneMax]").val())
		
		dati_miur["atenei"]=atenei;
		coloraAtenei(atenei);
		
		gestoreRicerca('miur');
	
	});
	
	
	$("input[name=popolazioneMax]").on("change", function(){
		
		var atenei=ricercaAtenei($("input[name=TopLatitude]").val(), $("input[name=BottomLatitude]").val(), $("input[name=latitude]:checked").val(), $("input[name=popolazioneMin]").val(), $("input[name=popolazioneMax]").val())
		
		dati_miur["atenei"]=atenei;
		coloraAtenei(atenei);
		
		gestoreRicerca('miur');
	});*/
	
	$("input[name=TopLatitude]").on("change", function(){
		var atenei=ricercaAtenei($("input[name=TopLatitude]").val(), $("input[name=BottomLatitude]").val(), $("input[name=latitude]:checked").val()/*, $("input[name=popolazioneMin]").val(), $("input[name=popolazioneMax]").val()*/)
		
		dati_miur["atenei"]=atenei;
		coloraAtenei(atenei);
		
		gestoreRicerca('miur');
	});
	
	$("input[name=BottomLatitude]").on("change", function(){
		var atenei=ricercaAtenei($("input[name=TopLatitude]").val(), $("input[name=BottomLatitude]").val(), $("input[name=latitude]:checked").val()/*, $("input[name=popolazioneMin]").val(), $("input[name=popolazioneMax]").val()*/)
		
		dati_miur["atenei"]=atenei;
		coloraAtenei(atenei);
		
		gestoreRicerca('miur');
	});
		
	$("input[name=latitude]").on("change", function(event){
		
		var atenei=ricercaAtenei($("input[name=TopLatitude]").val(), $("input[name=BottomLatitude]").val(), $("input[name=latitude]:checked").val()/*, $("input[name=popolazioneMin]").val(), $("input[name=popolazioneMax]").val()*/)
		
		dati_miur["atenei"]=atenei;
		coloraAtenei(atenei);
		
		gestoreRicerca('miur');	
	
	});
	
	$("input:checkbox[name=cdl]").on("click", function(){
	
		var cdl=[];
			$("input:checkbox[name=cdl]:checked").each(function(){
				cdl.push(this.id);
			});
			
			dati_miur["cdl"]=cdl;
			
			gestoreRicerca('miur');
			
		});
	
}

/**
 * 
 * Inizializza l'interfaccia utente se è stato selezionato di cercare i dati del cnr
 * 
 * 
 * */
function Init_cnr()
{
	//Setto la visualizzazione di base del grafico
	InizializzaGraficoBici();
	
	$("#loc_geografica").html("");
	$("#warnings").html("");
	
	//creo gli elementi html necessari per la selezione dei parametri
	var profili=JSON.parse(getPhpResponse("./api/parametri_cnr.php", "id=profilo"))
	var s='<label id="label_settore">Seleziona il profilo professionale:</label><br/>';
	for(var i=0; i<profili.length; i++)
	{
		s+='<input type="checkbox" name="profilo" id="'+profili[i]['profilo']+'">'+profili[i]['profilo']+'</input>';
	}
	
	$("#superaree").html(s);
	
	var sigle=JSON.parse(getPhpResponse("./api/parametri_cnr.php", "id=sigla"))
	var s='<label id="label_fascia">Seleziona il settore di appartenenza:</label><br/>';
	
	for(var i=0; i<sigle.length; i++)
	{
		s+='<input type="checkbox" name="sigla" id="'+sigle[i]['superarea']+'">'+sigle[i]['superarea']+'</input>'
	}
	
	$("#fascia").html(s);
	
	/*$("#dimensione").html("");*/
	
	$("#anno").html("");
	
	$("#loc_geografica").html("");
	
	creaMappa('cnr');
	
	$("#cdl").html("");
	
	
	//gestisco gli eventi
	$("input:checkbox[name=profilo]").on("click", function() {
		var aree=[];
		$("input:checkbox[name=profilo]:checked").each(function(){
				aree.push(this.id);
			});
			
			dati_cnr["profilo"]=aree;
			gestoreRicerca('cnr');
	});
	
	
	$("input:checkbox[name=sigla]").on("click", function(){
	
		var fasce=[];
			$("input:checkbox[name=sigla]:checked").each(function(){
				fasce.push(this.id);
			});
			
			dati_cnr["sigla"]=fasce;
			gestoreRicerca('cnr');
		});
		
		$("input[name=TopLatitude]").on("change", function(){
		
		var atenei=ricercaAtenei($("input[name=TopLatitude]").val(), $("input[name=BottomLatitude]").val(), $("input[name=latitude]:checked").val())
		
		dati_cnr["atenei"]=atenei;
		coloraAtenei(atenei);
		
		gestoreRicerca('cnr');
	});
	
	$("input[name=BottomLatitude]").on("change", function(){
		
		var atenei=ricercaAtenei($("input[name=TopLatitude]").val(), $("input[name=BottomLatitude]").val(), $("input[name=latitude]:checked").val());
		
		dati_cnr["atenei"]=atenei;
		coloraAtenei(atenei);
		
		gestoreRicerca('cnr');
	});
	
	$("input[name=latitude]").on("change", function(){
		
		var atenei=ricercaAtenei($("input[name=TopLatitude]").val(), $("input[name=BottomLatitude]").val(), $("input[name=latitude]:checked").val());
		
		dati_cnr["atenei"]=atenei;
		coloraAtenei(atenei);
		
		gestoreRicerca('cnr');	
	});
}

/**
 * 
 * Importa dal file ./img/italyHigh.svg la mappa dell'italia che fa da base alla geolocalizzazione delle strutture e la posiziona nella pagina
 * 
 * 
 * */
function ImportaMappaItalia()
{
	d3.xml("./img/italyHigh.svg", function(error, documentFragment) {
        if (error) 
        {
			console.log(error); 
			return;
		}
    
        var svgNode = documentFragment
                    .getElementsByTagName("svg")[0];
    
       $("#italia").html(svgNode);
    })

}


//Oggetti che registrano i valori su cui eseguire le query
var dati_miur={'superaree':[], 'fasce': [], 'atenei': [], 'anni': [], 'cdl': []};
var dati_cnr={'profilo':[], 'sigla': [], 'atenei': []};

/**
 * 
 * Setta la funzione che gestisce cambio di contesto fra miur e cnr; richiama le funioni per inizializzare i grafici e l'interfaccia
 * 
 * 
 * 
 * */
$(document).ready(function() {
	
	//controllo sui dati da visualizzare
	$("input[name='switch']").on("click", function(){
			var s=$("input[name='switch']:checked").val();
			switch(s){
				case 'cnr':
				{
					ImportaMappaItalia();
					Init_cnr();
					break;
				}
				case 'miur':
				{
					ImportaMappaItalia();
					Init_miur();
					break;
				}
			}
		})
		
	//prima inizializzazione della pagina
	ImportaMappaItalia();
	Init_miur();
	
});

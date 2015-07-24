/**
 * 
 * charts.js
 * 
 * funzioni ausiliarie in JS per la creazione e visualizzazione dei dati presenti nell'articolo
 * 
 * 
 * */

/**
 * 
 * Crea il primo grafico, prendendo i dati dalla pagina grafico1_miur.php
 * e lo visualizza usando le funzioni della libreria d3
 *
 * Il grafico visualizza la distribuzione dell'organico negli anni compresi fra annoMin e annoMax, suddivisi per sesso
 * 
 * Parametri:
 *  annoMin minima ascissa del grafico   
 *  annoMax massima ascissa del grafico   
 * 
 * */
function CreaGraficoUno(annoMin, annoMax)
{
	if (annoMin>annoMax)
	{
		temp=annoMin;
		annoMin=annoMax;
		annoMax=temp;
	}
	
	var height=300;
	var width=300;
	var container=d3.select("#grafico_1")
					.append("svg")
					.attr("width", width)
					.attr("height", height);

	var anni='';
	
	for(var i=annoMin; i<=annoMax; i++)
	{
		anni=anni+"anno[]="+i+"&";
	}	
	
	var r=JSON.parse(getPhpResponse('./api/grafico1_miur.php', anni));

	var puntiM = [];
	var puntiF = [];
	max=0;
	
	for (i=0; i<r.length; i++)
	{
		for (j=0; j<r[i].length; j++)
		{
			y=parseInt(r[i][j]['num']);
			if ( r[i][j]['sesso'] == 'M' )
			{
				puntiM.push({'y':y, 'x':annoMin+i});
			}
			if ( r[i][j]['sesso'] == 'F' )
			{
				puntiF.push({'y':y, 'x':annoMin+i});
			}
			if (max<y)
			{
				max=y;
			}
		}
	}
	
	
	var xScale = d3.scale.linear()
					.range([20,width-20])
					.domain([annoMin,annoMax]);
					
	var yScale = d3.scale.linear()
						.range([height-20, 20])
						.domain([0,100]);
						
	var xAxis = d3.svg.axis()
					.scale(xScale);
					
	var yAxis = d3.svg.axis()
					.scale(yScale)
					.orient('left');
	
	container.append('g')
			.attr("id", "asse_x")
			.attr('transform','translate(0,'+(height-20)+')')
			.call(xAxis)
			.attr("width", 3)
			.attr("fill", "black")
			
	container.append('g')
			.attr("id", "asse_y")
			.attr('transform','translate(20,0)')
			.call(yAxis)
			.attr("width", 3)
			.attr("fill", "black")	

	container.select("#asse_y")
		.selectAll("text")
		.attr("transform","translate(-10, -20) rotate(-90)")
		.style("font-size","10px"); 	

	container.select("#asse_x")
		.selectAll("text")
		.style("font-size","10px");

	var lineGen = d3.svg.line()
						.x(function (d) { return xScale (d.x);})
						.y(function (d) { return yScale (d.y*100/max);})
						.interpolate ('cardinal');
	
	container.append ('path')
			.attr('d',lineGen(puntiM))
			.attr ('stroke','#0e1968')
			.attr ('stroke-width','3')
			.attr("fill", "none");
			
	container.append ('path')
			.attr('d',lineGen(puntiF))
			.attr ('stroke','#AA3939')
			.attr ('stroke-width','3')
			.attr("fill", "none");
}


/**
 * 
 * Crea il secondo grafico, prendendo i dati dalla pagina grafico2_miur.php
 * e lo visualizza usando le funzioni della libreria d3
 *
 * Il grafico visualizza la distribuzione storica dell'organico di sesso femminile, suddivisa per area di appartenenza
 * 
 * */
function CreaGraficoDue()
{	
	var height=300;
	var width=300;
	var container=d3.select("#grafico_2")
					.append("svg")
					.attr("width", width)
					.attr("height", height);

	var r=JSON.parse(getPhpResponse('./api/grafico2_miur.php'));

	var puntiF = {};
	var punti = r['punti'];
	var categorie=[];
	
	for (i=0; i<r['categorie'].length; i++)
	{
		categorie.push ({'nome':r['categorie'][i], 'colore':randomColor({
   luminosity: 'bright'
})});
		puntiF[r['categorie'][i]] = [];
	}
		
	var max=0;
	var annoMin;
	var annoMax;
	
	annoMin=annoMax=parseInt(punti[0]['anno']);
	
	for (i=0; i<punti.length; i++)
	{
		dati = punti[i]['dati'];
		x = parseInt(punti[i]['anno']);
		
		for (j=0; j<dati.length; j++)
		{
			y=parseInt(dati[j]['num']);
			puntiF[ dati[j]['superarea'] ].push({'x':x, 'y':y });
			if (max<y) max=y;
		}
		if (annoMin>x) annoMin=x;
		if (annoMax<x) annoMax=x;
	}
	
	//console.log (annoMax,annoMin);
	
	var xScale = d3.scale.linear()
					.range([20,width-20])
					.domain([annoMin,annoMax]);
					
	var yScale = d3.scale.linear()
						.range([height-20, 20])
						.domain([0,100]);
						
	var xAxis = d3.svg.axis()
					.scale(xScale);
					
	var yAxis = d3.svg.axis()
					.scale(yScale)
					.orient('left');
	
	container.append('g')
			.attr("id", "asse_x")
			.attr('transform','translate(0,'+(height-20)+')')
			.call(xAxis)
			.attr("width", 3)
			.attr("fill", "black")
			
	container.append('g')
			.attr("id", "asse_y")
			.attr('transform','translate(20,0)')
			.call(yAxis)
			.attr("width", 3)
			.attr("fill", "black")	

	container.select("#asse_y")
		.selectAll("text")
		.attr("transform","translate(-10, -20) rotate(-90)")
		.style("font-size","10px"); 	

	container.select("#asse_x")
		.selectAll("text")
		.style("font-size","10px");

	var lineGen = d3.svg.line()
						.x(function (d) { return xScale (d.x);})
						.y(function (d) { return yScale (d.y*100/max);})
						.interpolate ('cardinal');
	
	leg='';
	
	for (i=0; i<categorie.length; i++)
	{
		//console.log(puntiF[categorie[i]])
			container.append ('path')
				.attr('d',lineGen(puntiF[categorie[i].nome]))
				.attr ('stroke',categorie[i].colore)
				.attr ('stroke-width','3')
				.attr("fill", "none");
				
	
		leg+='<p style="color:'+categorie[i].colore+'; font-weight: bold;">'+categorie[i].nome+'</p>';
	}
	
	$('#legenda').append(leg);
}

$(document).ready(function() {
	
	CreaGraficoUno(2000, 2015);
	CreaGraficoDue();
	
});

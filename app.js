/*
 * JavaScript file
 */
window.onload = init();

function init() {
	var data = $.ajax({
		url: 'http://query.yahooapis.com/v1/public/yql/lucassp/livescore?country=romania',
		dataType: XML,
		success: parseXML
	});
}

function parseXML(xml) {
	$(xml).find("tr").each(function() {
		var coltext = '';
		$(this).find("td").each(function() {
			coltext += "<td colspan='"+$(this).attr("colspan")+"' class='"+$(this).attr("class")+"'>"+$(this).text()+"</td>";
		});
		$("#scoretable").append("<tr>"+coltext+"</tr>");
	})
}

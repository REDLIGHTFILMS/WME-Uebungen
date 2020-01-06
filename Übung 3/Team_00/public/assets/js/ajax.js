//3.
//Tabelle erstellen
$(document).ready(function() {
	$.getJSON( "/items", function( data ) {
		$.each(data.items, function(i, f) {
			var tblRow = "<tr>" + 
				"<td>" + f.id + "</td>" + 
				"<td>" + f.name + "</td>" + 
				"<td>" + f['birth_rate_per_1000'] + "</td>" + 
				"<td>" + f['cell_phones_per_100'] + "</td>"  +
				"<td>" + f['children_per_woman'] + "</td>"  +
				"<td>" + f['electricity_consumption_per_capita']+ "</td>"  +
				"<td>" + f['gdp_per_capita'] + "</td>" +
				"<td>" + f['gdp_per_capita_growth'] + "</td>" +
				"<td>" + f['inflation_annual'] + "</td>" +
				"<td>" + f['internet_user_per_100'] + "</td>" + 
				"<td>" + f['life_expectancy'] + "</td>" +
				"<td>" + f['military_expenditure_percent_of_gdp'] + "</td>" +
				"<td>" + f['gps_lat'] + "</td>" +
				"<td>" + f['gps_long'] + "</td>" +
				"</tr>";
		$(tblRow).appendTo("#table_body");
		});
	});
	
	// Filter Countries
	// nach country id
	$('#country_filter').on('submit', function(event) {
		
			if($('#country_filter_range').val() == false) {
				event.preventDefault();
				var id = $('#country_filter_id').val();
				$( "#table_body" ).empty();
				$.getJSON( "/items" + "/" + id, function(f) {
						$( "#table_body" ).empty();
						var tblRow = "<tr>" + 
							"<td>" + f.id + "</td>" + 
							"<td>" + f.name + "</td>" + 
							"<td>" + f['birth_rate_per_1000'] + "</td>" + 
							"<td>" + f['cell_phones_per_100'] + "</td>"  +
							"<td>" + f['children_per_woman'] + "</td>"  +
							"<td>" + f['electricity_consumption_per_capita']+ "</td>"  +
							"<td>" + f['gdp_per_capita'] + "</td>" +
							"<td>" + f['gdp_per_capita_growth'] + "</td>" +
							"<td>" + f['inflation_annual'] + "</td>" +
							"<td>" + f['internet_user_per_100'] + "</td>" + 
							"<td>" + f['life_expectancy'] + "</td>" +
							"<td>" + f['military_expenditure_percent_of_gdp'] + "</td>" +
							"<td>" + f['gps_lat'] + "</td>" +
							"<td>" + f['gps_long'] + "</td>" +
							"</tr>";
						$(tblRow).appendTo("#table_body");
				});
			} 
	});	
		// filter countries nach country id range
		$('#country_filter').on('submit', function(event) {
		if($('#country_filter_range').val()) {
			event.preventDefault()
			
			var range = $('#country_filter_range').val();
			var res = range.split("-");
			var id1 = res[0];	
			var id2 = res[1];
			
			$( "#table_body" ).empty();
			$.getJSON( "/items" + "/" + id1 + "/" + id2, function(data) {
				$.each(data, function(i,f) {
					var tblRow = "<tr>" + 
						"<td>" + f.id + "</td>" + 
						"<td>" + f.name + "</td>" + 
						"<td>" + f['birth_rate_per_1000'] + "</td>" + 
						"<td>" + f['cell_phones_per_100'] + "</td>"  +
						"<td>" + f['children_per_woman'] + "</td>"  +
						"<td>" + f['electricity_consumption_per_capita']+ "</td>"  +
						"<td>" + f['gdp_per_capita'] + "</td>" +
						"<td>" + f['gdp_per_capita_growth'] + "</td>" +
						"<td>" + f['inflation_annual'] + "</td>" +
						"<td>" + f['internet_user_per_100'] + "</td>" + 
						"<td>" + f['life_expectancy'] + "</td>" +
						"<td>" + f['military_expenditure_percent_of_gdp'] + "</td>" +
						"<td>" + f['gps_lat'] + "</td>" +
						"<td>" + f['gps_long'] + "</td>" +
						"</tr>";
				$(tblRow).appendTo("#table_body");
				});
			});
		} else { 
			if($('#country_filter_id').val() == false ) { 
			location.reload(); 
			}	
		}
	});
	
	//Properties Abfragen
	$.getJSON( "/properties", function( property ) {
		$.each(property, function(i) {
			var options = "<option value=" + i + ">"+ property[i] + "</option>";
		$(options).appendTo("#prop_selection");	
		});
	});
	//hide
	$('#hide_selected_prop').click('submit', function(event) {
		event.preventDefault();
        var num = $("#prop_selection").val();
		num++;
        $.get("/properties/" + num, function(data) {
			$('td:nth-child('+num+')').hide();
			$('th:nth-child('+num+')').hide();
		});
	});
	//show
	$('#show_selected_prop').click('submit', function(event) {
		event.preventDefault();
        var num = $("#prop_selection").val();
		num++;
        $.get("/properties/" + num, function(data) {
			$('th:nth-child('+num+')').show();
			$('td:nth-child('+num+')').show();
		});
	});
	
	//Add COuntry

    $('#country_add').on('submit', function(event) {
        event.preventDefault();

        var country_name = $('#country_name');
		var property1_input = $('#country_birth');
		var property2_input = $('#country_cellphone');

        $.ajax({
            url: '/items',
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({ name: country_name.val(), ["birth_rate_per_1000"]: property1_input.val(), ['cell_phones_per_100']: property2_input.val()}),
            success: function(response) {
                console.log(response);
				location.reload();
            }
        });
    });

	//Delete Country
	$('#country_delete').on('submit', function(event) {
		event.preventDefault();
		//keine id angegeben
		if($('#country_delete_id').val() == false) {
			$.ajax({
				url: '/items',
				method: 'DELETE',
				contentType: 'application/json',
				success: function(response) {
					console.log(response);
					location.reload();
				}
			});
		}
	});
	
	$('#country_delete').on('submit', function(event) {
		event.preventDefault();
		if($('#country_delete_id').val()) {
			var id = $('#country_delete_id').val();
			
			$.ajax({
				url: '/items/' + id,
				method: 'DELETE',
				contentType: 'application/json',
				success: function(response) {
					console.log(response);
					location.reload();
				}
			});
		}
	});
});
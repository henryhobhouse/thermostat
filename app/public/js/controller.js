
$("#increasetemp").click(function() {
  thermostat.uptemp();
  update_temp()
});

$("#decreasetemp").click(function() {
  thermostat.downtemp();
  update_temp()
});

$("#temp_reset").click(function() {
  thermostat.temp_reset();
  update_temp()
});

$("#power_saver").change(function() {
  thermostat.saver_switch();
  $("#power_status").text( "Power Saver Status: " + thermostat.powersaver );
  update_max()
  update_temp()
});

$.get("http://openweathermap.org/data/2.5/weather?q=London,uk&appid=e1340fbac55b5c417540384602f10ea8", function(weather_data) {
  console.log(weather_data.main.temp)
  ("#weather").html(weather_data.main.temp);
});

update_temp()
update_max()
$("#max").text( "MIN temp: " + thermostat.MIN );
$("#power_status").text( "Power Saver Status: " + thermostat.powersaver );


function update_temp() {
  $("#current").text( "current_temperature: " + thermostat.current_temperature );
  $("body").attr('class', thermostat.energy_usage );
};

function update_max() {
  $("#min").text( "MAX temp: " + thermostat.max );
};

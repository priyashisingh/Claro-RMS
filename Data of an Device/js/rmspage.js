
var url_ID = window.location.href;

console.log(url_ID.substring(url_ID.indexOf('$')+1,url_ID.length));

var u_id = url_ID.substring(url_ID.indexOf('$')+1,url_ID.length);

/*function logout(){
	 $.getJSON("JSP/Auth.jsp",
	           {
	              type: "logout",
	              
	             },
	           function(data){
	               var res = data.response;
	                if(res.localeCompare("logout")== 0)
	               		{
	                	window.location.href='login.html'
	                		}
	               
	           });
 }  

$.getJSON("JSP/Auth.jsp",
        {
          type: "check",
          
          },
        function(data){
            var res = data.response;
      
         if(res.localeCompare("in")== 0)
            		{
            	 
           		}
            else
            	{
          	  window.location.href='login.html?returnto='+(window.location).href
            }
        }); 
*/

//for clear button
$(document).ready(function(){
$('#clear').click(function() {
 $(".form-check input").prop("checked", false);
});
});

//for mp button
$(document).ready(function(){
$('#mpbtn').click(function() {
$(".form-check input").prop("checked", false);
$(".form-check .mp").prop("checked", true);
});
});


//for mh button
$(document).ready(function(){
$('#mhbtn').click(function() {
$(".form-check input").prop("checked", false);
});
});



//date validation

function Datevalidation() {
	
var chkdateforstart = document.getElementById("startdate").value
var chkdateforend = document.getElementById("enddate").value

 if(document.getElementById("startdate").value == "")
  {
      alert("Please enter the Start Date..!!")
      
  }
else if(!chkdateforstart.match(/^(0[1-9]|[12][0-9]|3[01])[\- \/.](?:(0[1-9]|1[012])[\- \/.](19|20)[0-9]{2})$/))
      {
        alert('date format is wrong');
  
      }
		
	else if(document.getElementById("enddate").value == "")
  {
      alert("Please enter the End Date..!!")
      
  }
else if(!chkdateforend.match(/^(0[1-9]|[12][0-9]|3[01])[\- \/.](?:(0[1-9]|1[012])[\- \/.](19|20)[0-9]{2})$/))
      {
        alert('date format is wrong');
     
      }
		else{
		currentdate();
	}
	}
	
//checking for current date

function currentdate(){

	var dateEntered = document.getElementById("enddate").value; 
	
	 var date = dateEntered.substring(0, 2);
  var month = dateEntered.substring(3, 5);
  var year = dateEntered.substring(6, 10);

  var dateToCompare = new Date(year, month - 1, date);
  var currentDate = new Date();
	
	 if (dateToCompare > currentDate) {
      alert("Date Entered is greater than Current Date. ");
  }
	else{
	installation_date();
	}
	}
	
//checking for installation date

function installation_date(){
	var Indate = document.getElementById("date").innerHTML; 
	
	var dateEntered = document.getElementById("startdate").value; 
	
	 var date = dateEntered.substring(0, 2);
  var month = dateEntered.substring(3, 5);
  var year = dateEntered.substring(6, 10);
	
	 var datei = Indate.substring(0, 2);
  var monthi = Indate.substring(3, 5);
  var yeari = Indate.substring(6, 10);

  var dateToCompare = new Date(year, month - 1, date);
	var indateToCompare = new Date(yeari, monthi-1, datei);
	
	 if (indateToCompare > dateToCompare) {
      alert("Start date is greater than Installation date.");
  }
	else{
	dater();
	}
	}
	
//checking for date

function dater(){
var Sdate = document.getElementById("startdate").value;
var Edate = document.getElementById("enddate").value; 

var dates = Sdate.substring(0, 2);
  var months = Sdate.substring(3, 5);
  var years = Sdate.substring(6, 10);
	
	 var datee = Edate.substring(0, 2);
  var monthe = Edate.substring(3, 5);
  var yeare = Edate.substring(6, 10);
	
	 var Start_date = new Date(years, months- 1, dates);
	var End_date = new Date(yeare, monthe-1, datee);
	
	 if (End_date < Start_date) {
      alert("Start date is greater than End date.");
		}
		else{
			printChecked();
		}
}

//printing text of checkboxes
	function printChecked(){
		
    var items=document.getElementsByTagName('input');
	var ar=[];	
	var arr;

	var sd_json = document.getElementById("startdate").value;
	var ed_json = document.getElementById("enddate").value;
	var vfd_no_json = document.getElementById("vfd_no").innerHTML;
	
	
	
		for(var i=0; i<items.length; i++){
			if(items[i].type=='checkbox' && items[i].checked==true ){
				var new_id = items[i].id+'_t';
				var json_checkbox_id = $(items[i]).attr('id');
				var json_new_id = document.getElementById(new_id).value;
			 ar.push({name:json_checkbox_id,value:json_new_id} ); 
            }  		
		}	
		
		 arr= ({cid:vfd_no_json,startdate:sd_json,enddate:ed_json, check_values:ar});	
		console.log(JSON.stringify(arr));		
	}			

	//json
	
var z= {

	"pump_type": "SubmerSible",

	"total_energy": "8192.5",

	"total_power": "31710.2",

	"farmer_image": "NA",

	"horsepower": "5 HP",

	"latitude": "23.4330363",

	"Data": [{

		"year_total_power": "31710.2",

		"year": "2018",

		"year_total_energy": "8192.5",

		"monthData": [{
			

			"daysData": [{

				"date": "01",

				"date_total_energy": "5732.5",

				"date_total_power": "8549.2",
			
			

			}, {

				"date": "02",

				"date_total_energy": "0",

				"date_total_power": "5164.8"

			}, {

				"date": "03",

				"date_total_energy": "1384",

				"date_total_power": "7443.7"

			}, {
				
				"date": "04",

				"date_total_energy": "1076",

				"date_total_power": "10552.5"

			}],

			"month_total_power": "31710.2",

			"month": "02",

			"month_total_energy": "8192.5"

		}]

	}],

	"panel_rating": "300WP",

	"panel_manufacturer": "PV Powertech",

	"today_first_data_received_time": "",

	"installation_date": "2017-11-08",

	"district": "Jabalpur",

	"total_no_of_days": 91,

	"last_data_received_date": "2018-02-04",

	"state": "Madhya Pradesh",

	"power_type": "DC",

	"farmer_contact": "9893322217",

	"last_data_received_time": "17:46:59",

	"farmer_name": "Ramratan Adiwasi",

	"longitude": "78.7745685",

	"total_energy_today": "",

	"status": "offline",
	"co2" : "NA",
	"water_discharge" : "NA"

};



//json_end
	
	
var url_ID = window.location.href;

console.log(url_ID.substring((url_ID.indexOf('=')+1),url_ID.length));
var U_id = url_ID.substring((url_ID.indexOf('=')+1),url_ID.length); 

$(document).ready(function(){
	var JSON1 = [];
		   $.getJSON("http://www.clarolabs.in/all_rms/RMS_vendor_data?vfd="+U_id,function(results){ 
			 console.log(results);
			 JSON1=results.data;
			 console.log(JSON1);
			 
		   //code for drilldown
	var grouped_year = [];
  var grouped_month = [];
   var grouped_day = [];

/////////////////// grouped_year array for year ///////////////////////
	JSON1.forEach(function (a) {
    if (!this[a.date.substring(0,4)]) {
        this[a.date.substring(0,4)] = { year: a.date.substring(0,4), energy: '0' };
        grouped_year.push(this[a.date.substring(0,4)]);
    }
    this[a.date.substring(0,4)].energy = (+this[a.date.substring(0,4)].energy + +a['energy']).toString();

}, Object.create(null));




/////////////////// grouped_month array for month ///////////////////////
for(y=0; y< grouped_year.length; y++){
JSON1.forEach(function (a) {
	if(a.date.substring(0,4) == grouped_year[y].year){
    if (!this[a.date.substring(5,7)]) {
        this[a.date.substring(5,7)] = { year: a.date.substring(0,4), month: a.date.substring(5,7),energy: '0' };
        grouped_month.push(this[a.date.substring(5,7)]);
    }
    this[a.date.substring(5,7)].energy = (+this[a.date.substring(5,7)].energy + +a['energy']).toString();
	}
}, Object.create(null));
}


/////////////////// grouped_month array for day ///////////////////////

	for(m=0; m< grouped_month.length; m++){
JSON1.forEach(function (a) {
		if(a.date.substring(0,4) == grouped_month[m].year){
if(a.date.substring(5,7) == grouped_month[m].month){
    if (!this[a.date.substring(8,10)]) {
        this[a.date.substring(8,10)] = { year: a.date.substring(0,4), month: a.date.substring(5,7), day: a.date.substring(8,10),energy: '0' };
        grouped_day.push(this[a.date.substring(8,10)]);
    }
    this[a.date.substring(8,10)].energy = (+this[a.date.substring(8,10)].energy + +a['energy']).toString();
}
		}
}, Object.create(null));
}





		   var start_year = 2017;
 var month_name = ["Jan","Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
		   var month=["01","02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
		    var monthn= [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
			var days= ["01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31"];

 var series_array_energy=[]; //year
 var drilldown_array_energy=[]; //month
 var temp_month_array=[];

for (var i=0 ; i<grouped_year.length;i++){
	series_array_energy.push({
		name:grouped_year[i].year,
		y:parseInt(grouped_year[i].energy),
		drilldown: grouped_year[i].year+"_drilldown"
	});
}
var month_data=[];
var month_drilldown=[];
for(var k=0 ; k<grouped_year.length;k++){
for (var j=0;j<12;j++){
	count=0;
	for (var i=0;i<grouped_month.length;i++){
		if(month[j]==grouped_month[i].month && grouped_month[i].year==grouped_year[k].year){
				month_data.push({
					name:month_name[j],
					y:parseInt(grouped_month[i].energy),
					drilldown:grouped_month[i].year+"_"+grouped_month[i].month+"_drilldown",
					year:grouped_month[i].year
				});
				count++;
		}
	}
	if(count==0){
		month_data.push({
					name:month_name[j],
					y:null,
					drilldown:null,
					year:grouped_year[k].year
				});

	}
}
}
var month_drilldown_data=[];
count=0;
for (var i=0;i<grouped_year.length;i++){
	var month_drilldown_data=[];
	for(var d=12*count,j=0;d<(12*count)+12,j<12;d++,j++){
		month_drilldown_data[j]=month_data[d];

	}
	drilldown_array_energy.push({
		id:grouped_year[i].year+"_drilldown",
		data:month_drilldown_data
	});
	count++;

}

var temp_day_data=[];
var d=0;
var day_id=[]
var a=[];
var b=[];
for (i=0;i<drilldown_array_energy.length;i++){
  for (var j=0;j<drilldown_array_energy[i].data.length;j++){
    if (drilldown_array_energy[i].data[j].drilldown!=null){
      a[d] =drilldown_array_energy[i].data[j].drilldown.substring(5,7);
      b[d] = Number(drilldown_array_energy[i].data[j].drilldown.substring(0,4));
      d++;
      }
    }
  }
for (var i=0;i<a.length;i++){
  for(var j=0;j<grouped_day.length;j++){
    if(grouped_day[j].year==b[i] && grouped_day[j].month==a[i]){
      temp_day_data.push({
        name:grouped_day[j].day,
        y:parseInt(grouped_day[j].energy),
        id:b[i]+"_"+a[i]+"_"+"drilldown"
      });
    }
  }
}
for(var i=0;i<temp_day_data.length;i++){
  day_id[i]=temp_day_data[i].id;
}
Array.prototype.contains = function(v) {
    for(var i = 0; i < this.length; i++) {
        if(this[i] === v) return true;
    }
    return false;
};

Array.prototype.unique = function() {
    var arr = [];
    for(var i = 0; i < this.length; i++) {
        if(!arr.includes(this[i])) {
            arr.push(this[i]);
        }
    }
    return arr;
}
var day_id = day_id.unique();

for (var i=0;i<day_id.length;i++){
  var day_data=[];
  for (var j=0;j<temp_day_data.length;j++){
    if(day_id[i]==temp_day_data[j].id){
      day_data.push({
        name:temp_day_data[j].name,
        y:parseInt(temp_day_data[j].y)
      })
    }
  }
  drilldown_array_energy.push({
    id:day_id[i],
    data:day_data
  });
}
for (var i=0;i<drilldown_array_energy.length;i++){
  var day_data=[];
  var mon=Number(drilldown_array_energy[i].id.substring(5,7));
  var year = Number(drilldown_array_energy[i].id.substring(0,4));
  if(drilldown_array_energy[i].id.length>14){
      if(mon==2 && year%4==0){
        for (var j=0;j<29;j++){
          var count=0;
          for (var k=0;k<drilldown_array_energy[i].data.length;k++){
              if(days[j]==drilldown_array_energy[i].data[k].name){
                day_data.push({
                  name:days[j],
                  y:drilldown_array_energy[i].data[k].y
                });
                count++;
              }
          }
          if(count=0){
            day_data.push({
              name:days[j],
              y:0
            });
          }
        }
      }
      else{
        for(var j=0;j<monthn[mon-1];j++){
          var count=0;
          for (var k=0;k<drilldown_array_energy[i].data.length;k++){
              if(days[j]==drilldown_array_energy[i].data[k].name){
                day_data.push({
                  name:days[j],
                  y:drilldown_array_energy[i].data[k].y
                });
                count++;
              }
          }
          if(count==0){
            day_data.push({
              name:days[j],
              y:0
            });
          }
        }
      }
      drilldown_array_energy[i].data=day_data;
  }
}
		  
 //////////// end of drilldown //////////////////////////////
		                 
		   	
		   $(document).ready(function(){
		  	document.getElementById("surf").innerHTML = z.pump_type;
		   	document.getElementById("energy").innerHTML = z.total_energy;
		   	document.getElementById("panel").innerHTML = z.panel_rating;
		   	document.getElementById("personimg").innerHTML = z.farmer_image;
		   	document.getElementById("numofpump").innerHTML = z.horsepower;
		   	document.getElementById("geo1").innerHTML = z.latitude;
		   	document.getElementById("geo2").innerHTML = z.longitude;
		   	document.getElementById("date").innerHTML = z.installation_date;
		   	document.getElementById("district").innerHTML = z.district;
		   	document.getElementById("activepump").innerHTML = z.total_no_of_days;
		   	document.getElementById("State").innerHTML = z.state;
		   	document.getElementById("dc").innerHTML = z.power_type;
		   	document.getElementById("no").innerHTML = z.farmer_contact;
		   	document.getElementById("name").innerHTML = z.farmer_name;
		   	document.getElementById("system_status").innerHTML = z.status;
		   	document.getElementById("paneltype").innerHTML = z.panel_manufacturer;
		  //document.getElementById("co2").innerHTML = z.co2;
		   	document.getElementById("water").innerHTML = z.water_discharge;
		   	 
		   	if((z.status).localeCompare("offline")== 0)
		   		{
		   		document.getElementById("isonline").style.display="none";
		   		document.getElementById("isoffline").style.display="block";

		   		document.getElementById("offline_at").innerHTML=z.last_data_received_time;
		   		document.getElementById("offline_on").innerHTML=z.last_data_received_date;
		   		}
		   	else
		   		{
		   		document.getElementById("isonline").style.display="block";
		   		document.getElementById("isoffline").style.display="none";

		   		document.getElementById("online_e").innerHTML=z.total_energy_today;
		   		document.getElementById("online_at").innerHTML=z.last_data_received_time;
		   		document.getElementById("online_on").innerHTML=z.last_data_received_date;
		   		}
		   });
		  
		   	


Highcharts.chart('energy_chart', {
    chart: {
        type: 'column'


    },
    title: {
        text: null
    },
   exporting: {
          enabled: false
      },
    xAxis: {
		 type:'category',
        title: {
			offset: 0,
			 rotation: 0,
			  y: 3,
			 align: 'high'

        },

		  scrollbar: {
		   	          enabled: true,
					   buttonArrowColor: 'black',
		   				    buttonBorderRadius: 7,
		   					 buttonBorderWidth: 4,
		   					  rifleColor: 'black',
		   				 trackBorderWidth: 1,
		   	      trackBorderRadius: 7,
		   			 barBorderRadius: 7,
		   	      barBorderWidth: 0,
		   			 barBackgroundColor: '#565655'
					 }
    },
    yAxis: {
        min: 0,
    title: {
            text: 'Energy'
        },
    },
	 credits: {
      enabled: false
  },
    tooltip: {
        valueSuffix: ' kWh'
    },
    plotOptions: {
		 series: {
             showInLegend: false
        },
        bar: {
            dataLabels: {
                enabled: true
            }
        }
    },

    series: [{
 pointWidth: 50,
        data: series_array_energy,
		 color: '#99e6e6'

    }],
		   		drilldown: {
						  series: drilldown_array_energy
						  }

});
 });
});

var time =['10.10', '10.17','10.22','10.28','10.41'];
var data_voltage =[510,424,510,513,508];
var data_current =[0.97,0.31,1.02,1.26,1.66];
var data_power =[494.7,131.44,520.2,646.38,843.28];
var data_flow = [1556,3764,6035,7036,7145];
var data_flowrate = [561,641,352,365,145];
var data_energy = [56,64,35,36,45];


$(document).ready(function(){
Highcharts.chart('voltage_current_chart', {
    chart: {
        zoomType: 'xy'
    },
    title: {
        text: 'Voltage & Current'
    },
	exporting: { enabled: false },
    
    xAxis: [{
        categories: time,
        crosshair: true
    }],
	 credits: {
      enabled: false
  },
    yAxis: [{ // Primary yAxis
        labels: {
            format: '{value}',
           
        },
        title: {
            text: 'Voltage',
         }
    }, { // Secondary yAxis
        title: {
            text: 'Current',
            
        },
        labels: {
            format: '{value}',
            
        },
        opposite: true
    }],
    tooltip: {
        shared: true
    },
    series: [{
        name: 'Current',
        type: 'spline',
		color: '#ffbf00',
        yAxis: 1,
        data: data_current,
        tooltip: {
            valueSuffix: ' A'
        }

    }, {
        name: 'Voltage',
        type: 'spline',
		 color: '#000000',
        data: data_voltage,
        tooltip: {
            valueSuffix: ' V '
        }
    }]
});
});

$(document).ready(function(){
Highcharts.chart('flow_flowrate_chart', {
    chart: {
        zoomType: 'xy'
    },
    title: {
        text: 'Flow & Flow Rate'
    },
    exporting: { enabled: false },
    xAxis: [{
        categories: time,
        crosshair: true
    }],
    yAxis: [{ // Primary yAxis
        labels: {
            format: '{value}',
        },
        title: {
            text: 'Flow',
        }
    }, { // Secondary yAxis
        title: {
            text: 'Flow Rate',
            
        },
        labels: {
            format: '{value}',
            
        },
        opposite: true
    }],
	credits: {
      enabled: false
  },
    tooltip: {
        shared: true
    },
    series: [{
        name: 'Flow Rate',
        type: 'spline',
		color: '#ffbf00',
        yAxis: 1,
        data: data_flowrate,
        tooltip: {
            valueSuffix: ' l/b'
        }

    }, {
        name: 'flow',
        type: 'spline',
		color: '#000000',
        data: data_flow,
        tooltip: {
            valueSuffix: ' l/b '
        }
    }]
});
});

$(document).ready(function(){
Highcharts.chart('power_energy_chart', {
    chart: {
        zoomType: 'xy'
    },
    title: {
        text: 'Power & Energy'
    },
    exporting: { enabled: false },
    xAxis: [{
        categories: time,
        crosshair: true
    }],
    yAxis: [{ // Primary yAxis
        labels: {
            format: '{value}',
        },
        title: {
            text: 'Power',
        }
    }, { // Secondary yAxis
        title: {
            text: 'Energy',
        },
        labels: {
            format: '{value}',
        },
        opposite: true
    }],
	credits: {
      enabled: false
  },
    tooltip: {
        shared: true
    },
    series: [{
        name: 'Energy',
        type: 'spline',
		color: '#ffbf00',
        yAxis: 1,
        data: data_energy,
        tooltip: {
            valueSuffix: ' khw'
        }

    }, {
        name: 'Power',
        type: 'spline',
		color: '#000000',
        data: data_power,
        tooltip: {
            valueSuffix: ' kw '
        }
    }]
});
});


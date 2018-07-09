


function ss1(){                   
 var state = document.readyState;

 if (state === 'complete') {
    document.getElementById("loader_main").style.display = "none";
     document.getElementById("all").style.display = "block";
  }
  else if(state === 'interactive') {
         document.getElementById("loader_main").style.display = "block";
   document.getElementById("all").style.display = "none";
  }

};




 function openTable(){
    document.getElementById("widget").style.display="none";
    document.getElementById("googleMap").style.display="none";
    document.getElementById("data-table").style.display="block";
    document.getElementById("table-bttn").style.color="black";
    document.getElementById("home-bttn").style.color="#50A6C2";

    }

    function closeTable(){
      document.getElementById("widget").style.display="block";
      document.getElementById("googleMap").style.display="block";
      document.getElementById("data-table").style.display="none";
      document.getElementById("home-bttn").style.color="black";
      document.getElementById("table-bttn").style.color="#50A6C2";
      }


$(document).ready(function(){
  
var JSON1 =[];

 /*  with link */


 $.getJSON("http://www.clarolabs.in/RMSEnergyGraph",function(result){

var JSON1 =result;

    


 var grouped_year = [];
  var grouped_month = [];
   var grouped_day = [];

/////////////////// grouped_year array for year ///////////////////////
JSON1.forEach(function (a) {
    if (!this[a.date.substring(0,4)]) {
        this[a.date.substring(0,4)] = { year: a.date.substring(0,4), total_energy: '0' };
        grouped_year.push(this[a.date.substring(0,4)]);
    }
    this[a.date.substring(0,4)].total_energy = (+this[a.date.substring(0,4)].total_energy + +a['total_energy']).toString();

}, Object.create(null));




/////////////////// grouped_month array for month ///////////////////////
for(y=0; y< grouped_year.length; y++){
JSON1.forEach(function (a) {
  if(a.date.substring(0,4) == grouped_year[y].year){
    if (!this[a.date.substring(5,7)]) {
        this[a.date.substring(5,7)] = { year: a.date.substring(0,4), month: a.date.substring(5,7),total_energy: '0' };
        grouped_month.push(this[a.date.substring(5,7)]);
    }
    this[a.date.substring(5,7)].total_energy = (+this[a.date.substring(5,7)].total_energy + +a['total_energy']).toString();
  }
}, Object.create(null));
}


/////////////////// grouped_month array for day ///////////////////////

  for(m=0; m< grouped_month.length; m++){
JSON1.forEach(function (a) {
    if(a.date.substring(0,4) == grouped_month[m].year){
if(a.date.substring(5,7) == grouped_month[m].month){
    if (!this[a.date.substring(8,10)]) {
        this[a.date.substring(8,10)] = { year: a.date.substring(0,4), month: a.date.substring(5,7), day: a.date.substring(8,10),total_energy: '0' };
        grouped_day.push(this[a.date.substring(8,10)]);
    }
    this[a.date.substring(8,10)].total_energy = (+this[a.date.substring(8,10)].total_energy + +a['total_energy']).toString();
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
    y:parseInt(grouped_year[i].total_energy),
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
          y:parseInt(grouped_month[i].total_energy),
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
        y:parseInt(grouped_day[j].total_energy),
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

  
  
Highcharts.chart('energy-graph', {
    chart: {
        type: 'column',
        backgroundColor:'white'


    },
    title: {
        text: "Energy-Timeline Graph"
    },
   exporting: {
          enabled: false
      },
    xAxis: {
     type:'category',
        title: {
        text:"Timeline"

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
            text: 'Revenue in (Rs)'
        },
    },
   credits: {
      enabled: false
  },
    tooltip: {
        valueSuffix: ' Rs'
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
     pointWidth: 40,
           
        data: series_array_energy,
     color: '#50a6c2'

    }],
          drilldown: {
              series: drilldown_array_energy,
            
              }

});
 });


});
//////////////////////// json for widgets ////////////////////////////

$(document).ready(function(){
  var widgets_json =[];
 $.getJSON("http://www.clarolabs.in/RMSWidgets",function(result){

 widgets_json=result;
console.log(widgets_json);

ss1();
  ////////////////////////////  ////// widgets charts ////////////////////////////////////////////////////////

//function all_widget(){    
    var pieColors = (function () {
    var colors = [],
        base = Highcharts.getOptions().colors[0],
        i;

    for (i = 0; i < 10; i += 1) {
        // Start out with a darkened base color (negative brighten), and end
        // up with a much brighter color
        colors.push(Highcharts.Color(base).brighten((i - 3) / 7).get());
    }
    return colors;
}());

// Total RMS Count graph
var rc =  widgets_json.total_rms;
var text = "Total RMS Installation<br><b>"+rc+"</b>"
var arr1=[];
for (i=0;i<widgets_json.state_wise_rms.length;i++){
            arr1.push({
              name:widgets_json.state_wise_rms[i].state,
              y:parseInt(widgets_json.state_wise_rms[i].rms_count),
            });
}
$('#rmsInstallation').highcharts({
              chart: {
                backgroundColor:'none',
                  type: 'pie',
                  spacingBottom:40,
                  spacingTop: -70,
                  width: 170,
                  height:280,

              },
              title: {
          text: text,
          align: 'center',
          verticalAlign: 'middle',
          y: -10,
          style: {
                fontSize: '12px'
            },
      },
      style: {
            fontSize: '1px'
        },
              plotOptions: {
                  pie: {
                      shadow: false,
                       allowPointSelect: true,
            cursor: 'pointer',
            colors: pieColors,
            dataLabels: {
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                  }
          }
              },
              tooltip: {
                  formatter: function() {
                      return '<b>'+ this.point.name +'</b>: '+ this.y ;
                  }
              },
              navigation: {
                buttonOptions: {
                  enabled: false
                }
              },
              credits: {
                enabled: false,
                y: -120
              },
              series: [{
                  data: arr1,
                  size: '100%',
                  innerSize: '75%',
                  showInLegend:false,
                  dataLabels: {
                      enabled: false
                  }
              }]
          });

// Total Energy graph
var te = widgets_json.total_energy;
var text = "Total Energy Generation<br><b>"+te+"kWH</b>"
var arr1=[];
for (i=0;i<widgets_json.state_wise_energy.length;i++){
            arr1.push({
              name:widgets_json.state_wise_energy[i].state,
              y:parseInt(widgets_json.state_wise_energy[i].total_energy),
            });
}
$('#totalEnergy').highcharts({
              chart: {
                backgroundColor:'none',
                  type: 'pie',
                  spacingBottom: 40,
                  spacingTop: -70,
                  width: 170,
                  height:280,

              },
              title: {
          text: text,
          align: 'center',
          verticalAlign: 'middle',
          y: -15,
          style: {
                fontSize: '12px'
            },
      },
      style: {
            fontSize: '1px'
        },
              plotOptions: {
                  pie: {
                      shadow: false,
                       allowPointSelect: true,
            cursor: 'pointer',
            colors: pieColors,
            dataLabels: {
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                  }
                  }
              },
              tooltip: {
                  formatter: function() {
                      return '<b>'+ this.point.name +'</b>: '+ this.y;
                  }
              },
              navigation: {
                buttonOptions: {
                  enabled: false
                }
              },
              credits: {
                enabled: false,
                y: -120
              },
              series: [{
                  data:arr1,
                  size: '100%',
                  innerSize: '75%',
                  showInLegend:false,
                  dataLabels: {
                      enabled: false
                  }
              }]
          });


// Active RMS graph
var td =   widgets_json.total_live_rms;
var text = "Total Active<br>RMS<br><b>"+td+"</b>"
var arr1=[];
for (i=0;i<widgets_json.state_wise_live_rms.length;i++){
  arr1.push({
    name:widgets_json.state_wise_live_rms[i].state,
    y:parseInt(widgets_json.state_wise_live_rms[i].state_live_rms),
  });
}
$('#active_rms').highcharts({
              chart: {
                backgroundColor:'none',
                  type: 'pie',
                  spacingBottom: 30,
                  spacingTop: -70,
                  width: 170,
                  height:280,

              },
              title: {
          text:text,
          align: 'center',
          verticalAlign: 'middle',
          y: -10,
          style: {
                fontSize: '12px'
            },
      },
      style: {
            fontSize: '1px'
        },
              plotOptions: {
                  pie: {
                      shadow: false,
                      allowPointSelect: true,
                      cursor: 'pointer',
                      colors: pieColors,
            dataLabels: {
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                  }
                  }
              },
              tooltip: {
                  formatter: function() {
                      return '<b>'+ this.point.name +'</b>: '+ this.y ;
                  }
              },
              navigation: {
                buttonOptions: {
                  enabled: false
                }
              },
              credits: {
                enabled: false,
                y: -120
              },
              series: [{
                  name: 'Browsers',
                  data: arr1,
                  size: '100%',
                  innerSize: '75%',
                  showInLegend:false,
                  dataLabels: {
                      enabled: false
                  }
              }]
          });

//});

// Discharge graph
var td =  widgets_json.total_discharge;
var text = "Total<br>Discharge<br><b>"+td+"</b>"
var arr1=[];
for (i=0;i<widgets_json.state_wise_discharge.length;i++){
  arr1.push({
    name:widgets_json.state_wise_discharge[i].state,
    y:parseInt(widgets_json.state_wise_discharge[i].total_discharge)
  });
}
console.log(arr1);
$('#discharge').highcharts({
              chart: {
                backgroundColor:'none',
                  type: 'pie',
                  spacingBottom: 30,
                  spacingTop: -70,
                  width: 170,
                  height:280,

              },
              title: {
          text: 'Total <br>Discharge<br><b>'+td+'</b>',
          align: 'center',
          verticalAlign: 'middle',
          y: -10,
          style: {
                fontSize: '12px'
            },
      },
      style: {
            fontSize: '1px'
        },
              plotOptions: {
                  pie: {
                      shadow: false,
                       allowPointSelect: true,
            cursor: 'pointer',
            colors: pieColors,
            dataLabels: {
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                  }
                  }
              },
              tooltip: {
                  formatter: function() {
                      return '<b>'+ this.point.name +'</b>: '+ this.y ;
                  }
              },
              navigation: {
                buttonOptions: {
                  enabled: false
                }
              },
              credits: {
                enabled: false,
                y: -120
              },
              series: [{
                  name: 'Browsers',
                  data: arr1,
                  size: '100%',
                  innerSize: '75%',
                  showInLegend:false,
                  dataLabels: {
                      enabled: false
                  }
              }]
          });
});
});


var pins =[];
var map_data =[];
function myMap() {
var map = new google.maps.Map(document.getElementById("googleMap"), {
 center: new google.maps.LatLng(28.666667,77.216667),
 zoom: 5,
});


for (var i = 0 ; i < map_data.length; i++) {
 var data1 = map_data[i]
 
  if(data1.STATUS=='online'){         
              var icon = {
                       url: "pins/Irrigation_RMS_Active.gif", // url
                       scaledSize: new google.maps.Size(30, 30), // scaled size
                       origin: new google.maps.Point(0,0), // origin
                       anchor: new google.maps.Point(12,23) // anchor
                   };

              marker = new google.maps.Marker({             
                   position: new google.maps.LatLng(data1.latitude, data1.longitude),
                   map: map,
                   icon: icon,
           optimized: false
              });
        }
           else if(data1.STATUS=='offline')
              {
             
              var icon = {
                       url: "pins/Irrigation_RMS_Absent.png", // url
                       scaledSize: new google.maps.Size(30, 30), // scaled size
                       origin: new google.maps.Point(0,0), // origin
                       anchor: new google.maps.Point(12,23) // anchor
                   };

              marker = new google.maps.Marker({       
                   position: new google.maps.LatLng(data1.latitude, data1.longitude),
                   map: map,
                   icon: icon
              });
        }
 
 /*
     latLng = new google.maps.LatLng(data1.latitude, data1.longitude);

 // Creating a marker and putting it on the map
 var marker = new google.maps.Marker({
   position: latLng,
   map: map
 });
*/

var infoWindow = new google.maps.InfoWindow();
(function(marker, data1) {
google.maps.event.addListener(marker, "click", function(e) {
 alert(data1.latitude);
});
})(marker, data1);
}
}

$(document).ready(function(){

$.getJSON("http://www.clarolabs.in/AllRMSList",function(result){
map_data  =result;
console.log(map_data);
for(var d = 0 ; d< map_data.length ; d++)
{
pins.push(map_data[d]);
}
console.log(pins);

 myMap();
 
 
 
 ///////////////////////// datatable //////////////////////////////////////////

  // Setup - add a text input to each footer cell
  $('#datatables .filters td').each( function () {
      var title = $('#datatables thead th').eq( $(this).index() ).text();
      $(this).html( '<input type="text" placeholder="Search '+title+'" />' );
  } );
  var table=  $('#datatables').DataTable( {
     data : map_data,
       "columns" : [
           { "data" : "customer_id" },
           { "data" : "vfd_sno" },
           { "data" : "customer_name" },
           { "data" : "state" },
           { "data" : "district" },
           { "data" : "block" },
           { "data" : "village" },
           { "data" : "STATUS" }
       ],
       responsive: true,
       compact: true,
       "sPaginationType":"full_numbers"

});
table.columns().eq( 0 ).each( function ( colIdx ) {
    $( 'input', $('.filters td')[colIdx] ).on( 'keyup change', function () {
        table
            .column( colIdx )
            .search( this.value )
            .draw();
    } );
} );

var table = $('#datatables').DataTable();

$('#datatables tbody').on( 'click', 'td', function () {
    var index = $(this).closest('tr').index();
   var data = table.row( $(this).parents('tr') ).data();
  console.log(data.customer_id);
   window.location.href = "file:///E:/Claro/RMS%20v2.0/Data%20of%20an%20Device/rmspage.html?id="+data.vfd_sno;
  
  
});
 
 
});
});

import Ember from 'ember';

export default Ember.Controller.extend({
  raceData:[
    {
      value: 14,
      color:"#D95C5C",
      highlight: "#DC6868",
      label: "Losses"
    },
    {
      value: 87,
      color: "#00B5AD",
      highlight: "#00C4BC",
      label: "Terran Wins"
    },
    {
      value: 40,
      color: "#564f8a",
      highlight: "#4c467a",
      label: "Zerg Wins"
    },
    {
      value: 150,
      color: "#F09E00",
      highlight: "rgba(243, 149, 0, 0.85)",
      label: "Protoss Wins"
    }
  ],
  clanRaceData:[
    {
      value: 14,
      color:"#D95C5C",
      highlight: "#DC6868",
      label: "Losses"
    },
    {
      value: 87,
      color: "#00B5AD",
      highlight: "#00C4BC",
      label: "Terran Wins"
    },
    {
      value: 40,
      color: "#564f8a",
      highlight: "#4c467a",
      label: "Zerg Wins"
    },
    {
      value: 150,
      color: "#F09E00",
      highlight: "rgba(243, 149, 0, 0.85)",
      label: "Protoss Wins"
    }
  ],
  raceOptions:{
    legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>"
  },
  clanRaceData2:{
    labels: ["Protoss Wins","Zerg Wins","Terran Wins","Losses"],
    datasets: [
        {
            label: "My First dataset",
            fillColor: "rgba(220,220,220,0.2)",
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [65, 59, 90, 81]
        },
        {
            label: "My Second dataset",
            fillColor: "rgba(151,187,205,0.2)",
            strokeColor: "rgba(151,187,205,1)",
            pointColor: "rgba(151,187,205,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: [28, 48, 40, 19]
        },
        {
            label: "My Second dataset",
            fillColor: "rgba(151,187,205,0.2)",
            strokeColor: "rgba(151,187,205,1)",
            pointColor: "rgba(151,187,205,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: [40, 19, 28, 48]
        },
        {
            label: "My Second dataset",
            fillColor: "rgba(151,187,205,0.2)",
            strokeColor: "rgba(151,187,205,1)",
            pointColor: "rgba(151,187,205,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: [48, 40, 28, 19]
        }
    ]
  }
});

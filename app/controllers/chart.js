import Ember from 'ember';

export default Ember.Controller.extend({
  chartData:[
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
  ]
});

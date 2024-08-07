var randomScalingFactor = function() {
    return Math.round(Math.random() * 100);
  };
  
  var randomData = function () {
    return [
      randomScalingFactor(),
      randomScalingFactor()
    ];
  };
  
  var randomValue = function (data) {
    return Math.max.apply(null, data) * Math.random();
  };
  
  var data = randomData();
  var value = randomValue(data);
  
  var config = {
    type: 'gauge',
    data: {
      //labels: ['Success', 'Warning', 'Warning', 'Error'],
      datasets: [{
        data: data,
        value: value,
        backgroundColor: ['#FF0000', '#00FF00'],
        borderWidth: 0
      }]
    },
    options: {
      responsive: true,
      layout: {
        padding: {
          bottom: 20
        }
      },
      needle: {
        // Needle circle radius as the percentage of the chart area width
        radiusPercentage: 2,
        // Needle width as the percentage of the chart area width
        widthPercentage: 3.2,
        // Needle length as the percentage of the interval between inner radius (0%) and outer radius (100%) of the arc
        lengthPercentage: 80,
        // The color of the needle
        color: '#F97415'
      },
      valueLabel: {
        formatter: Math.round
      }
    }
  };
  
  window.onload = function() {
    var ctx = document.getElementById('chart').getContext('2d');
    window.myGauge = new Chart(ctx, config);
  };
  
  document.getElementById('randomizeData').addEventListener('click', function() {
    config.data.datasets.forEach(function(dataset) {
      dataset.data = randomData();
      dataset.value = randomValue(dataset.data);
    });
  
    window.myGauge.update();
  });
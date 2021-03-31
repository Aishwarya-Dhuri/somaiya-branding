
//Counter Script
$(document).ready(function ($) {
  var a = 0;
  $(window).scroll(function () {

    var oTop = $('#counter').offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() > oTop) {
      $('.counter-value').each(function () {
        var $this = $(this),
          countTo = $this.attr('data-count');
        $({
          countNum: $this.text()
        }).animate({
            countNum: countTo
          },

          {

            duration: 2000,
            easing: 'swing',
            step: function () {
              $this.text(Math.floor(this.countNum));
            },
            complete: function () {
              $this.text(this.countNum);
              
            }

          });
      });
      a = 1;
    }

  });
});



am4core.ready(function () {

  // Themes begin
  am4core.useTheme(am4themes_animated);
  am4core.useTheme(am4themes_frozen);
  // Themes end


  var chart = am4core.create('chartdiv', am4charts.XYChart)
  chart.colors.step = 2;

  chart.legend = new am4charts.Legend()
  chart.legend.position = 'top'
  chart.legend.paddingBottom = 20
  chart.legend.labels.template.maxWidth = 95

  var xAxis = chart.xAxes.push(new am4charts.CategoryAxis())
  xAxis.dataFields.category = 'category'
  xAxis.renderer.cellStartLocation = 0.1
  xAxis.renderer.cellEndLocation = 0.9
  xAxis.renderer.grid.template.location = 0;

  var yAxis = chart.yAxes.push(new am4charts.ValueAxis());
  yAxis.min = 0;

  function createSeries(value, name) {
    var series = chart.series.push(new am4charts.ColumnSeries())
    series.dataFields.valueY = value
    series.dataFields.categoryX = 'category'
    series.name = name

    series.events.on("hidden", arrangeColumns);
    series.events.on("shown", arrangeColumns);

    var bullet = series.bullets.push(new am4charts.LabelBullet())
    bullet.interactionsEnabled = false
    bullet.dy = 30;
    bullet.label.text = '{valueY}'
    bullet.label.fill = am4core.color('#000')

    return series;
  }

  chart.data = [
    {
      category: '2019-20',
      first: 40000,
      second: 22000
    },
    {
      category: '2018-19',
      first: 37000,
      second: 20000
    },
    {
      category: '2017-18',
      first: 45000,
      second: 22000
    },
    // {
    //   category: '2016-17',
    //   first: 63000,
    //   second: 24000
    // },
    
    
  ]


  createSeries('first', 'Highest Package');
  createSeries('second', 'Average Package');

  function arrangeColumns() {

    var series = chart.series.getIndex(0);

    var w = 1 - xAxis.renderer.cellStartLocation - (1 - xAxis.renderer.cellEndLocation);
    if (series.dataItems.length > 1) {
      var x0 = xAxis.getX(series.dataItems.getIndex(0), "categoryX");
      var x1 = xAxis.getX(series.dataItems.getIndex(1), "categoryX");
      var delta = ((x1 - x0) / chart.series.length) * w;
      if (am4core.isNumber(delta)) {
        var middle = chart.series.length / 2;

        var newIndex = 0;
        chart.series.each(function (series) {
          if (!series.isHidden && !series.isHiding) {
            series.dummyData = newIndex;
            newIndex++;
          } else {
            series.dummyData = chart.series.indexOf(series);
          }
        })
        var visibleCount = newIndex;
        var newMiddle = visibleCount / 2;

        chart.series.each(function (series) {
          var trueIndex = chart.series.indexOf(series);
          var newIndex = series.dummyData;

          var dx = (newIndex - trueIndex + middle - newMiddle) * delta

          series.animate({
            property: "dx",
            to: dx
          }, series.interpolationDuration, series.interpolationEasing);
          series.bulletsContainer.animate({
            property: "dx",
            to: dx
          }, series.interpolationDuration, series.interpolationEasing);
        })
      }
    }
  }

}); // end am4core.ready()



am4core.ready(function () {

  // Themes begin
  am4core.useTheme(am4themes_animated);
  am4core.useTheme(am4themes_material);
  // Themes end

  // Create chart instance
  var chart = am4core.create("cha", am4charts.XYChart);

  // Add data
  chart.data = [{
    "year": 2005,
    "income": 23.5
  }, {
    "year": 2006,
    "income": 26.2
  }, {
    "year": 2007,
    "income": 30.1
  }, {
    "year": 2008,
    "income": 29.5
  }, {
    "year": 2009,
    "income": 24.6
  }];

  // Create axes
  var categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
  categoryAxis.dataFields.category = "year";
  categoryAxis.numberFormatter.numberFormat = "#";
  categoryAxis.renderer.inversed = true;
  categoryAxis.renderer.grid.template.location = 0;
  categoryAxis.renderer.cellStartLocation = 0.1;
  categoryAxis.renderer.cellEndLocation = 0.9;

  var valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
  valueAxis.renderer.opposite = true;

  // Create series
  function createSeries(field, name) {
    var series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.valueX = field;
    series.dataFields.categoryY = "year";
    series.name = name;
    series.columns.template.tooltipText = "{name}: [bold]{valueX}[/]";
    series.columns.template.height = am4core.percent(100);
    series.sequencedInterpolation = true;

    var valueLabel = series.bullets.push(new am4charts.LabelBullet());
    valueLabel.label.text = "{valueX}";
    valueLabel.label.horizontalCenter = "left";
    valueLabel.label.dx = 10;
    valueLabel.label.hideOversized = false;
    valueLabel.label.truncate = false;

    var categoryLabel = series.bullets.push(new am4charts.LabelBullet());
    categoryLabel.label.text = "{name}";
    categoryLabel.label.horizontalCenter = "right";
    categoryLabel.label.dx = -10;
    categoryLabel.label.fill = am4core.color("#fff");
    categoryLabel.label.hideOversized = false;
    categoryLabel.label.truncate = false;
  }

  createSeries("income", "Income");
  // createSeries("expenses", "Expenses");

}); // end am4core.ready()

am4core.ready(function () {

  // Themes begin
  am4core.useTheme(am4themes_animated);
  // Themes end

  // Create chart instance
  var chart = am4core.create("chartdivd", am4charts.XYChart);

  // Add data
  chart.data = [
  // {
  //   "year": "2015-16",
  //   "europe": 56
  // }, 
  {
    "year": "2016-17",
    "europe": 19
  }, 
  {
    "year": "2017-18",
    "europe": 17
  }, {
    "year": "2018-19",
    "europe": 25
  }, {
    "year": "2019-20",
    "europe": 28
  }];

  chart.legend = new am4charts.Legend();
  chart.legend.position = "right";

  // Create axes
  var categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
  categoryAxis.dataFields.category = "year";
  categoryAxis.renderer.grid.template.opacity = 0;

  var valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
  valueAxis.min = 0;
  valueAxis.renderer.grid.template.opacity = 0;
  valueAxis.renderer.ticks.template.strokeOpacity = 0.5;
  valueAxis.renderer.ticks.template.stroke = am4core.color("#000");
  valueAxis.renderer.ticks.template.length = 10;
  valueAxis.renderer.line.strokeOpacity = 0.5;
  valueAxis.renderer.baseGrid.disabled = true;
  valueAxis.renderer.minGridDistance = 40;

  // Create series
  function createSeries(field, name) {
    var series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.valueX = field;
    series.dataFields.categoryY = "year";
    series.stacked = true;
    series.name = name;

    var labelBullet = series.bullets.push(new am4charts.LabelBullet());
    labelBullet.locationX = 0.5;
    labelBullet.label.text = "{valueX}";
    labelBullet.label.fill = am4core.color("#fff");
  }

  createSeries("europe", "");
  createSeries("namerica", "");
  createSeries("asia", "");
  createSeries("lamerica", "");
  createSeries("meast", "");
  createSeries("africa", "");

  chart.legend.labels.template.disabled = true;
}); // end am4core.ready()

am4core.ready(function () {

            // Themes begin

            am4core.useTheme(am4themes_dataviz);
            am4core.useTheme(am4themes_animated);


            // Create chart instance
            var chart = am4core.create("chartdivboard", am4charts.XYChart);


            // Add data
            chart.data = [{
                "dept": "2019-20",
                "SSC": 9,
                "ICSE": 16,
                "CBSE": 11,
                "IGCSE": 2,
                "IB": 1,
                "CIE": 1,
                "International level":1

            }, {
                "dept": "2018-19",
                "SSC": 19,
                "ICSE": 10,
                "CBSE": 13,
                "IGCSE": 0,
                "IB": 0,
                "CIE": 0,
                "International level":0

            }, 
            {
                "dept": "2017-18",
                "SSC": 10,
                "ICSE": 8,
                "CBSE": 9,
                "IGCSE": 0,
                "IB": 1,
                "CIE": 1,
                "International level":1
            },
            {
                "dept": "2016-17",
                "SSC": 9,
                "ICSE": 16,
                "CBSE": 11,
                "IGCSE": 2,
                "IB": 1,
                "CIE": 1,
                "International level":1

            },
            

            ];

            // Create axes
            var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
            categoryAxis.dataFields.category = "dept";
            categoryAxis.renderer.grid.template.location = 0;


            var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
            // valueAxis.renderer.inside = false;
            // valueAxis.renderer.labels.template.disabled = false;
            valueAxis.min = 0;
            valueAxis.max = 50;


            // Create series
            function createSeries(field, name) {

                // Set up series
                var series = chart.series.push(new am4charts.ColumnSeries());
                series.name = name;
                series.dataFields.valueY = field;
                series.dataFields.categoryX = "dept";
                series.sequencedInterpolation = true;

                // Make it stacked
                series.stacked = true;

                // Configure columns
                series.columns.template.width = am4core.percent(60);
                series.columns.template.tooltipText = "[bold]{name}[/]\n[font-size:14px]{categoryX}: {valueY}";

                // Add label
                var labelBullet = series.bullets.push(new am4charts.LabelBullet());
                labelBullet.label.text = "{valueY}";
                labelBullet.locationY = 0.5;
                labelBullet.label.hideOversized = true;
                labelBullet.label.fill = am4core.color("#ffffff");


                return series;
            }

            createSeries("SSC", "SSC");
            createSeries("ICSE", "ICSE");
            createSeries("CBSE", "CBSE");
            createSeries("IGCSE", "IGCSE");
            createSeries("IB", "IB");
            createSeries("CIE", "CIE");
            createSeries("International level", "International level");
            // Legend
            chart.legend = new am4charts.Legend();

        }); 

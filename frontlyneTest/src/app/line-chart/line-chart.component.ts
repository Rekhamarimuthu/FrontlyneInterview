import { Component, ElementRef, OnInit } from '@angular/core';
import * as echarts from "echarts";
import $ from 'jquery';



@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {
  // base = +new Date(1968, 9, 3);
  // oneDay = 24 * 3600 * 1000;
  // date: string[] = [];
  // data = [Math.random() * 300];
  //   constructor(private elm:ElementRef){}
  //   ngOnInit(){
  //     let lineChart =echarts.init($(this.elm.nativeElement).find('#lineChart')[0]);
  //     for (var i = 1; i < 20000; i++) {
  //       var now = new Date(this.base += this.oneDay);
  //       this.date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'));
  //       this.data.push(Math.round((Math.random() - 0.5) * 20 + this.data[i - 1]));
  //     }
  
  //     lineChart.setOption({
  //       tooltip: {
  //         trigger: 'axis',
  //         position: function (pt: any[]) {
  //             return [pt[0], '10%'];
  //         }
  //     },
  //     title: {
  //         left: 'center',
  //         text: 'Line Chart',
  //     },
  //     toolbox: {
  //         feature: {
  //             dataZoom: {
  //                 title:'zoom',
  //                 yAxisIndex: 'none'
  //             },
  //             restore: {
  //               title:'restore'
  //             },
  //             saveAsImage: {
  //               title:'save'
  //             }
  //         }
  //     },
  //     xAxis: {
  //         type: 'category',
  //         boundaryGap: false,
  //         data: this.date
  //     },
  //     yAxis: {
  //         type: 'value',
  //         boundaryGap: [0, '100%']
  //     },
  //     dataZoom: [{
  //         type: 'inside',
  //         start: 0,
  //         end: 10
  //     }, {
  //         start: 0,
  //         end: 10,
  //         handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
  //         handleSize: '80%',
  //         handleStyle: {
  //             color: '#fff',
  //             shadowBlur: 3,
  //             shadowColor: 'rgba(0, 0, 0, 0.6)',
  //             shadowOffsetX: 2,
  //             shadowOffsetY: 2
  //         }
  //     }],
  //     series: [
        
  //         {
  //             name:'year',
  //             type:'line',
  //             smooth:true,
  //             symbol: 'none',
  //             sampling: 'average',
  //             itemStyle: {
  //                 color: 'rgb(255, 70, 131)'
  //             },
  //             areaStyle: {
  //                 color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
  //                     offset: 0,
  //                     color: 'rgb(255, 158, 68)'
  //                 }, {
  //                     offset: 1,
  //                     color: 'rgb(255, 70, 131)'
  //                 }])
  //             },
  //             data: this.data
  //         }
  //     ]
  //     })
  
  //   }
// data Structure for Series
legends: string[] = []; // Explicitly type as an array of strings
  series: any[] = []; // If this contains multiple types, use any[] or a proper interface

data=[{
  legend:"Total Project",
  dataPoints:[220, 182, 191, 234, 290, 330, 310]
},{
  legend:"Operation Status",
  dataPoints:[150, 232, 201, 154, 190, 330, 410]
},{
  legend:"HumanResource",
  dataPoints:[170, 132, 291, 254, 145, 390, 610]
},{
  legend:"THis year",
  dataPoints:[170, 132, 291, 254, 145, 390, 610]
}];
// @Input() name: string;
// @Input() data:any;

constructor(private elm:ElementRef){}
ngOnInit(){
  let stackchart = echarts.init($(this.elm.nativeElement).find('#mGraph_sale')[0]);
  this.data.forEach(x=>{
    this.series.push({
      name:x.legend,
      type:'line',
      stack:'Total Amount',
      areaStyle:{normal:{}},
      data:x.dataPoints
      })

      this.legends.push(x.legend)
    
  })

  stackchart.setOption({
    tooltip:{
      trigger:'axis',
      axisPointer:{
        type:'cross',
        label:{backgroundColor:'#1C1C1C'}
      }
    },
  //    title: {
  //     left: 'center',
  //     text: 'Stack Chart',
  // },
     legend:{data:this.legends},
      grid: {
      left: '10%',
      right: '10%',
      bottom: '5%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: ['jan', 'Feb', 'march', 'apr', 'May', 'Jun', 'July']
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: this.series,
  },
 
  )

}
}

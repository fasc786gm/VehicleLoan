import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { LonLatArray } from 'highcharts';


@Component({
  selector: 'app-emicalculator',
  templateUrl: './emicalculator.component.html',
  styleUrls: ['./emicalculator.component.css']
})
export class EmicalculatorComponent implements OnInit {
  loan:number=100000;
  interest:number=7;
  years:number=1;

  highcharts = Highcharts;

  chartOptions: Highcharts.Options = {
    chart: {
      plotBackgroundColor:'white',
      plotBorderWidth: 0,
      plotShadow: false,
      reflow:true
      
  },
  title: {
      text: 'Break-up<br>Of total<br>Payment',
      align: 'center',
      verticalAlign: 'middle',
      y: 60
  },
  tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
  },
  accessibility: {
      point: {
          valueSuffix: '%'
      }
  },
  plotOptions: {
      pie: {
          dataLabels: {
              enabled: true,
              distance: -50,
              style: {
                  fontWeight: 'bold',
                  color: 'white'
              }
          },
          startAngle: -90,
          endAngle: 90,
          center: ['50%', '75%'],
          size: '110%'
      }
  },
  series: [{
      type: 'pie',
      name: 'Browser share',
      innerSize: '75%',
      data: [
          ['Principal',this.redraw()],
          ['Interest', this.redraw1()],
      ]
  }]
  }

  

 
  constructor() { }

  ngOnInit(): void {
     
    //this.emi =Math.pow(parseInt(this.loan),parseInt(this.years));
    
  }
  pri(){
     return this.loan;
  }
   fun(){
    var n=this.years*12;
    var r=this.interest/12/100;
    var x=Math.pow((1+r),n);
    var c=this.loan*r*(x/(x-1)) ;
    var p=c.toFixed();
    return parseInt(p);
   }

   ins(){
    var i=this.fun();
    var interestAmount=(i*(this.years*12))-this.loan;
    return interestAmount;

   }
   total(){
    var a=this.ins();
    var t=this.loan+a;
    return t;
   }

   redraw(){
      var x=this.loan;
      return x;
   }
   redraw1(){
    var t=this.ins();
    return t;
   }

}

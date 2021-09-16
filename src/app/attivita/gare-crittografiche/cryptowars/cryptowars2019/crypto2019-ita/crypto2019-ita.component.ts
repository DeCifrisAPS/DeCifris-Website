import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crypto2019-ita',
  templateUrl: './crypto2019-ita.component.html',
  styleUrls: ['./crypto2019-ita.component.css']
})
export class Crypto2019ItaComponent implements OnInit {

  public chartType: string = 'bar';

  public chartDatasets: Array<any> = [
    { data: [15, 19, 21, 7, 0, 9, 0, 8, 22, 15, 3, 0, 8, 0],
    label: ''}
  ];

  public chartLabels: Array<any> = ['#Mandarino', 'Canederlo Trentuno', 'Critto Tanto',
    'Deep Lilla', 'Fantaprogrammatori', 'IGOR', 'Mavlem', 'Noi ci proviamo', 'pwnthem0le', 
    'RebelSouthernAvengers', 'Sbrisolona', 'SpartAES', 'Srdnlen', 'Unix_forever'
  ];

  

  public chartColors: Array<any> = [
    {
      backgroundColor: [
        'rgba(229, 0, 0, 0.2)',
        'rgba(226, 91, 0, 0.2)',
        'rgba(223, 181, 0, 0.2)',
        'rgba(171, 220, 0, 0.2)',
        'rgba(81, 249, 0, 0.2)',
        'rgba(0, 214, 6, 0.2)',
        'rgba(0, 211, 92, 0.2)',
        'rgba(0, 208, 176, 0.2)',
        'rgba(0, 154, 205, 0.2)',
        'rgba(0, 69, 202, 0.2)',
        'rgba(12, 0, 199, 0.2)',
        'rgba(92, 0, 196, 0.2)',
        'rgba(169, 0, 193, 0.2)',
        'rgba(191, 0, 136, 0.2)'
      ],
      borderColor: [
        'rgba(229, 0, 1)',
        'rgba(226, 91, 1)',
        'rgba(223, 181, 1)',
        'rgba(171, 220, 1)',
        'rgba(81, 249, 1)',
        'rgba(0, 214, 6, 1)',
        'rgba(0, 211, 92, 1)',
        'rgba(0, 208, 176, 1)',
        'rgba(0, 154, 205, 1)',
        'rgba(0, 69, 202, 1)',
        'rgba(12, 0, 199, 1)',
        'rgba(92, 0, 196, 1)',
        'rgba(169, 0, 193, 1)',
        'rgba(191, 0, 136, 1)'
      ],
      borderWidth: 2,
    }
  ];

  public chartOptions: any = {
    responsive: true
  };
  
  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }
  
  constructor() { }

  ngOnInit(): void {
  }

}

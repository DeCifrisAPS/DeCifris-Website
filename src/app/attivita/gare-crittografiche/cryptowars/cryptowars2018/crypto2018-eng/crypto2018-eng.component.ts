import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crypto2018-eng',
  templateUrl: './crypto2018-eng.component.html',
  styleUrls: ['./crypto2018-eng.component.css']
})
export class Crypto2018EngComponent implements OnInit {

  public chartType: string = 'bar';

  public chartDatasets: Array<any> = [
    { data: [12, 0, 0, 0, 19, 8, 7, 4, 0, 0, 3, 0, 0, 16, 20, 0, 21], label: 'Math Side' },
    { data: [1, 0, 2, 0, 8, 0, 0, 0, 0, 2, 0, 10, 0, 6, 0, 0, 0], label: 'Computer Science Side' },
  ];

  public chartLabels: Array<any> = ['ACOP18', 'Codec', 'cryptogang', 'CryptoKillers', 
  'CryptoTeamUNITN', 'CryptoTL', 'CrypTrento', 'Deep lilla', 'GangOf4', 
  'La compagnia dell`anello', 'PAP-APP-Heroes', 'Pings with Things', 'Povo', 
  'pwnthem0le', 'Syntax Error', 'Teste Matte', 'x0R'];

  public chartColors: Array<any> = [
    {
      backgroundColor: [
        'rgb(179, 255, 255)',
        'rgb(179, 255, 255)',
        'rgb(179, 255, 255)',
        'rgb(179, 255, 255)',
        'rgb(179, 255, 255)',
        'rgb(230, 249, 255)',
        'rgb(230, 249, 255)',
        'rgb(230, 249, 255)',
        'rgb(179, 255, 255)',
        'rgb(179, 255, 255)',
        'rgb(179, 255, 255)',
        'rgb(179, 255, 255)',
        'rgb(179, 255, 255)',
        'rgb(179, 255, 255)',
        'rgb(179, 255, 255)',
        'rgb(179, 255, 255)',
        'rgb(230, 249, 255)'
      ],
      borderColor: [
        'rgba(126, 243, 243, 1)',
        'rgba(126, 243, 243, 1)',
        'rgba(126, 243, 243, 1)',
        'rgba(126, 243, 243, 1)',
        'rgba(126, 243, 243, 1)',
        'rgba(126, 243, 243, 1)',
        'rgba(126, 243, 243, 1)',
        'rgba(126, 243, 243, 1)',
        'rgba(126, 243, 243, 1)',
        'rgba(126, 243, 243, 1)',
        'rgba(126, 243, 243, 1)',
        'rgba(126, 243, 243, 1)',
        'rgba(126, 243, 243, 1)',
        'rgba(126, 243, 243, 1)',
        'rgba(126, 243, 243, 1)',
        'rgba(126, 243, 243, 1)',
        'rgba(126, 243, 243, 1)'
      ],
      borderWidth: 2,
    },
    {
      backgroundColor: [
        'rgb(255, 230, 179)',
        'rgb(255, 230, 179)',
        'rgb(255, 230, 179)',
        'rgb(255, 230, 179)',
        'rgb(255, 230, 179)',
        'rgb(255, 230, 179)',
        'rgb(255, 230, 179)',
        'rgb(255, 230, 179)',
        'rgb(255, 230, 179)',
        'rgb(255, 230, 179)',
        'rgb(255, 230, 179)',
        'rgb(255, 230, 179)',
        'rgb(255, 230, 179)',
        'rgb(255, 230, 179)',
        'rgb(255, 230, 179)',
        'rgb(255, 230, 179)',
        'rgb(255, 230, 179)'
      ],
      borderColor: [
        'rgb(255, 212, 128)',
        'rgb(255, 212, 128)',
        'rgb(255, 212, 128)',
        'rgb(255, 212, 128)',
        'rgb(255, 212, 128)',
        'rgb(255, 212, 128)',
        'rgb(255, 212, 128)',
        'rgb(255, 212, 128)',
        'rgb(255, 212, 128)',
        'rgb(255, 212, 128)',
        'rgb(255, 212, 128)',
        'rgb(255, 212, 128)',
        'rgb(255, 212, 128)',
        'rgb(255, 212, 128)',
        'rgb(255, 212, 128)',
        'rgb(255, 212, 128)',
        'rgb(255, 212, 128)'
      ],
      borderWidth: 2,
    },
    ];

    public chartOptions: any = {
      responsive: true,
        scales: {
          xAxes: [{
            stacked: true
            }],
          yAxes: [
          {
            stacked: true
          }
        ]
      }
    };
    public chartClicked(e: any): void { }
    public chartHovered(e: any): void { }
    
  constructor() { }

  ngOnInit(): void {
  }

}

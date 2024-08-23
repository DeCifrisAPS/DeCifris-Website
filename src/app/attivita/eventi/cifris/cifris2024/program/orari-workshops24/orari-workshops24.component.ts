import { Component } from '@angular/core';

@Component({
  selector: 'app-orari-workshops24',
  templateUrl: './orari-workshops24.component.html',
  styleUrl: './orari-workshops24.component.css'
})
export class OrariWorkshops24Component {
  // toggle FCR1
  showMoreFCR1 = false;
  toggleShowMoreFCR1() {
    this.showMoreFCR1 = !this.showMoreFCR1;
  }
  // toggle FCR2
  showMoreFCR2 = false;
  toggleShowMoreFCR2() {
    this.showMoreFCR2 = !this.showMoreFCR2;
  }
  // toggle TAC1
  showMoreTAC1 = false;
  toggleShowMoreTAC1() {
    this.showMoreTAC1 = !this.showMoreTAC1;
  }
  // toggle TAC2
  showMoreTAC2 = false;
  toggleShowMoreTAC2() {
    this.showMoreTAC2 = !this.showMoreTAC2;
  }
  // toggle NTC
  showMoreNTC = false;
  toggleShowMoreNTC() {
    this.showMoreNTC = !this.showMoreNTC;
  }
  // toggle CPSID
  showMoreCPSID = false;
  toggleShowMoreCPSID() {
    this.showMoreCPSID = !this.showMoreCPSID;
  }
  // toggle CODEMATH
  showMoreCODEMATH = false;
  toggleShowMoreCODEMATH() {
    this.showMoreCODEMATH = !this.showMoreCODEMATH;
  }
  // toggle SYMCRYPT
  showMoreSYMCRYPT = false;
  toggleShowMoreSYMCRYPT() {
    this.showMoreSYMCRYPT = !this.showMoreSYMCRYPT;
  }
  // toggle QCIFRIS
  showMoreQCIFRIS = false;
  toggleShowMoreQCIFRIS() {
    this.showMoreQCIFRIS = !this.showMoreQCIFRIS;
  }
  // toggle CIFRISCLOUD
  showMoreCIFRISCLOUD = false;
  toggleShowMoreCIFRISCLOUD() {
    this.showMoreCIFRISCLOUD = !this.showMoreCIFRISCLOUD;
  }
  // toggle RAPQC
  showMoreRAPQC = false;
  toggleShowMoreRAPQC() {
    this.showMoreRAPQC = !this.showMoreRAPQC;
  }
  showMore = false;

  toggleShowMore() {
    this.showMore = !this.showMore;
  }
}

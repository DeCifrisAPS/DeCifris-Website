import { MailingListComponent } from './mailing-list/mailing-list.component';
import { OpportunitaComponent } from './opportunita/opportunita.component';
import { ObiettiviComponent } from './obiettivi/obiettivi.component';
import { AttivitaComponent } from './attivita/attivita.component';
import { EventiComponent } from './eventi/eventi.component';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import { NgModule } from '@angular/core';
import { SeminariLocaliComponent } from './gruppi/seminari-locali/seminari-locali.component';
import { CifrisChainComponent } from './gruppi/cifris-chain/cifris-chain.component';
import { CifrisCloudComponent } from './gruppi/cifris-cloud/cifris-cloud.component';
import { MathCifrisComponent } from './gruppi/math-cifris/math-cifris.component';
import { PqCifrisComponent } from './gruppi/pq-cifris/pq-cifris.component';
import { ContattiComponent } from './contatti/contatti.component';
import { IniziativeDivulgativeComponent } from './attivita/iniziative-divulgative/iniziative-divulgative.component';
import { GareCrittograficheComponent } from './attivita/gare-crittografiche/gare-crittografiche.component';
import { EventiPubbliciComponent } from './eventi/eventi-pubblici/eventi-pubblici.component';
import { DidatticaUniversitariaComponent } from './gruppi/didattica-universitaria/didattica-universitaria.component';
import { SessioniDeCifrisComponent } from './eventi/eventi-pubblici/sessioni-de-cifris/sessioni-de-cifris.component';
import { pathToFileURL } from 'url';
import { DecifrisAthesisComponent } from './gruppi/seminari-locali/decifris-athesis/decifris-athesis.component';
import { DecifrisAugustaeTaurinorumComponent } from './gruppi/seminari-locali/decifris-augustae-taurinorum/decifris-augustae-taurinorum.component';
import { DecifrisScholaLatinaComponent } from './gruppi/seminari-locali/decifris-schola-latina/decifris-schola-latina.component';
import { DecifrisScholaMediolanensibusComponent } from './gruppi/seminari-locali/decifris-schola-mediolanensibus/decifris-schola-mediolanensibus.component';
import { PerAziendeComponent } from './contenuti-specifici/per-aziende/per-aziende.component';
import { PerAccademiaComponent } from './contenuti-specifici/per-accademia/per-accademia.component';
import { PerStudentiComponent } from './contenuti-specifici/per-studenti/per-studenti.component';
import { AderentiComponent } from './aderenti/aderenti.component';
import { CounterpartyComponent } from './counterparty/counterparty.component';

const routes: Routes = [
  {path : "", component : HomeComponent},
  {path: "obiettivi", component: ObiettiviComponent},
  {path: "aderenti", component: AderentiComponent},
  {path: "mailingList", component: MailingListComponent},
  {path: "attivita", component: AttivitaComponent},
  {path: "seminariLocali", component: SeminariLocaliComponent},
  {path: "deCifrisAthesis", component: DecifrisAthesisComponent},
  {path: "deCifrisAugustaeTaurinorum", component: DecifrisAugustaeTaurinorumComponent},
  {path: "deCifrisScholaLatina", component: DecifrisScholaLatinaComponent},
  {path: "deCifrisMediolanensibus", component: DecifrisScholaMediolanensibusComponent},
  {path: 'cifrisChain', component: CifrisChainComponent},
  {path: 'cifrisCloud', component: CifrisCloudComponent},
  {path: 'mathCifris', component: MathCifrisComponent},
  {path: 'PQCifris', component: PqCifrisComponent},
  {path: "iniziativeDivulgative", component: IniziativeDivulgativeComponent},
  {path: "gareCrittografiche", component: GareCrittograficheComponent},
  {path: "eventiPubblici", component: EventiPubbliciComponent},
  {path: "didatticaUniversitaria", component: DidatticaUniversitariaComponent},
  {path: "opportunita", component: OpportunitaComponent},
  {path: "eventi", component: EventiComponent},
  {path: "sessioni", component: SessioniDeCifrisComponent},
  {path: "contatti", component: ContattiComponent},
  {path: "studenti", component: PerStudentiComponent},
  {path: "aziende", component: PerAziendeComponent},
  {path: "accademia", component: PerAccademiaComponent},
  {path: "counterparty", component: CounterpartyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

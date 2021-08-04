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
import { PerCuriosiComponent } from './contenuti-specifici/per-curiosi/per-curiosi.component';
import { PerInsegnantiComponent } from './contenuti-specifici/per-insegnanti/per-insegnanti.component';
import { CryptowarsComponent } from './attivita/gare-crittografiche/cryptowars/cryptowars.component';
import { Cryptowars2020Component } from './attivita/gare-crittografiche/cryptowars/cryptowars2020/cryptowars2020.component';
import { Cryptowars2019Component } from './attivita/gare-crittografiche/cryptowars/cryptowars2019/cryptowars2019.component';
import { Cryptowars2018Component } from './attivita/gare-crittografiche/cryptowars/cryptowars2018/cryptowars2018.component';
import { Cryptowars2016Component } from './attivita/gare-crittografiche/cryptowars/cryptowars2016/cryptowars2016.component';
import { Cryptowars2015Component } from './attivita/gare-crittografiche/cryptowars/cryptowars2015/cryptowars2015.component';
import { Cryptowars2014Component } from './attivita/gare-crittografiche/cryptowars/cryptowars2014/cryptowars2014.component';
import { Cryptowars2011Component } from './attivita/gare-crittografiche/cryptowars/cryptowars2011/cryptowars2011.component';
import { SimmetricaComponent} from './attivita/gare-crittografiche/cryptowars/cryptowars2011/crypto2011-ita/simmetrica/simmetrica.component';
import { ClassicaComponent } from './attivita/gare-crittografiche/cryptowars/cryptowars2011/crypto2011-ita/classica/classica.component';
import { PubblicaComponent } from './attivita/gare-crittografiche/cryptowars/cryptowars2011/crypto2011-ita//pubblica/pubblica.component';

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
  {path: "curiosi", component: PerCuriosiComponent},
  {path: "scuola", component: PerInsegnantiComponent},
  {path: "studenti", component: PerStudentiComponent},
  {path: "aziende", component: PerAziendeComponent},
  {path: "accademia", component: PerAccademiaComponent},
  {path: "counterparty", component: CounterpartyComponent},
  {path: "cryptowars", component: CryptowarsComponent, children:  [
    {path: "2020", component: Cryptowars2020Component},
    {path: "2019", component: Cryptowars2019Component},
    {path: "2018", component: Cryptowars2018Component},
    {path: "2016", component: Cryptowars2016Component},
    {path: "2015", component: Cryptowars2015Component},
    {path: "2014", component: Cryptowars2014Component},
    {path: "2011", component: Cryptowars2011Component, children: [
      {path: "classica", component: ClassicaComponent},
      {path: "pubblica", component: PubblicaComponent},
      {path: "simmetrica", component: SimmetricaComponent}
    ]
  }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

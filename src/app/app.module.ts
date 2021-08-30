import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ObiettiviComponent } from './obiettivi/obiettivi.component';
import { MailingListComponent } from './mailing-list/mailing-list.component';
import { AttivitaComponent } from './attivita/attivita.component';
import { OpportunitaComponent } from './opportunita/opportunita.component';
import { EventiComponent } from './eventi/eventi.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SeminariLocaliComponent } from './gruppi/seminari-locali/seminari-locali.component';
import { CifrisChainComponent } from './gruppi/cifris-chain/cifris-chain.component';
import { PqCifrisComponent } from './gruppi/pq-cifris/pq-cifris.component';
import { CifrisCloudComponent } from './gruppi/cifris-cloud/cifris-cloud.component';
import { MathCifrisComponent } from './gruppi/math-cifris/math-cifris.component';
import { NewsComponent } from './news/news.component';
import { ContattiComponent } from './contatti/contatti.component';
import { AderentiComponent } from './aderenti/aderenti.component';
import { DecifrisAthesisComponent } from './gruppi/seminari-locali/decifris-athesis/decifris-athesis.component';
import { DecifrisAugustaeTaurinorumComponent } from './gruppi/seminari-locali/decifris-augustae-taurinorum/decifris-augustae-taurinorum.component';
import { DecifrisScholaLatinaComponent } from './gruppi/seminari-locali/decifris-schola-latina/decifris-schola-latina.component';
import { DecifrisScholaMediolanensibusComponent } from './gruppi/seminari-locali/decifris-schola-mediolanensibus/decifris-schola-mediolanensibus.component';
import { NuoveAziendeInteressateComponent } from './opportunita/nuove-aziende-interessate/nuove-aziende-interessate.component';
import { CentoTesiComponent } from './attivita/cento-tesi/cento-tesi.component';
import { IniziativeDivulgativeComponent } from './attivita/iniziative-divulgative/iniziative-divulgative.component';
import { GareCrittograficheComponent } from './attivita/gare-crittografiche/gare-crittografiche.component';
import { EventiPubbliciComponent } from './eventi/eventi-pubblici/eventi-pubblici.component';
import { SessioniDeCifrisComponent } from './eventi/eventi-pubblici/sessioni-de-cifris/sessioni-de-cifris.component';
import { SessionePerugiaComponent } from './eventi/eventi-pubblici/sessione-perugia/sessione-perugia.component';
import { SessioneMilanoComponent } from './eventi/eventi-pubblici/sessione-milano/sessione-milano.component';
import { SessioneRomaComponent } from './eventi/eventi-pubblici/sessione-roma/sessione-roma.component';
import { SessioneSalernoComponent } from './eventi/eventi-pubblici/sessione-salerno/sessione-salerno.component';
import { WorkshopCryptanalysisComponent } from './eventi/eventi-pubblici/workshop-cryptanalysis/workshop-cryptanalysis.component';
import { SessioneTorinoComponent } from './eventi/eventi-pubblici/sessione-torino/sessione-torino.component';
import { HackatonSmartContractComponent } from './eventi/eventi-pubblici/hackaton-smart-contract/hackaton-smart-contract.component';
import { SessioneRomaPqcifrisComponent } from './eventi/eventi-pubblici/sessione-roma-pqcifris/sessione-roma-pqcifris.component';
import { SessioneRomaCifrischainComponent } from './eventi/eventi-pubblici/sessione-roma-cifrischain/sessione-roma-cifrischain.component';
import { EventoConoscitivoComponent } from './eventi/eventi-pubblici/evento-conoscitivo/evento-conoscitivo.component';
import { ItasecComponent } from './eventi/eventi-pubblici/itasec/itasec.component';
import { EventoCifrischainComponent } from './eventi/eventi-pubblici/evento-cifrischain/evento-cifrischain.component';
import { DidatticaUniversitariaComponent } from './gruppi/didattica-universitaria/didattica-universitaria.component';
import { EventiPassatiComponent } from './eventi/eventi-passati/eventi-passati.component';
import { EventiFuturiComponent } from './eventi/eventi-futuri/eventi-futuri.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarModule } from 'ng-sidebar';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PerStudentiComponent } from './contenuti-specifici/per-studenti/per-studenti.component';
import { PerAziendeComponent } from './contenuti-specifici/per-aziende/per-aziende.component';
import { PerAccademiaComponent } from './contenuti-specifici/per-accademia/per-accademia.component';
import { PerInsegnantiComponent } from './contenuti-specifici/per-insegnanti/per-insegnanti.component';
import { PerCuriosiComponent } from './contenuti-specifici/per-curiosi/per-curiosi.component';
import { CounterpartyComponent } from './counterparty/counterparty.component';
import { AboutComponent } from './counterparty/about/about.component';
import { CounterpartyHomeComponent } from './counterparty/counterparty-home/counterparty-home.component';
import { RulesComponent } from './counterparty/rules/rules.component';
import { SpecsComponent } from './counterparty/specs/specs.component';
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
import { Crypto2020ItaComponent } from './attivita/gare-crittografiche/cryptowars/cryptowars2020/crypto2020-ita/crypto2020-ita.component';
import { Crypto2020EngComponent } from './attivita/gare-crittografiche/cryptowars/cryptowars2020/crypto2020-eng/crypto2020-eng.component';
import { Crypto2019ItaComponent } from './attivita/gare-crittografiche/cryptowars/cryptowars2019/crypto2019-ita/crypto2019-ita.component';
import { Crypto2019EngComponent } from './attivita/gare-crittografiche/cryptowars/cryptowars2019/crypto2019-eng/crypto2019-eng.component';
import { Crypto2018ItaComponent } from './attivita/gare-crittografiche/cryptowars/cryptowars2018/crypto2018-ita/crypto2018-ita.component';
import { Crypto2018EngComponent } from './attivita/gare-crittografiche/cryptowars/cryptowars2018/crypto2018-eng/crypto2018-eng.component';
import { Crypto2016ItaComponent } from './attivita/gare-crittografiche/cryptowars/cryptowars2016/crypto2016-ita/crypto2016-ita.component';
import { Crypto2016EngComponent } from './attivita/gare-crittografiche/cryptowars/cryptowars2016/crypto2016-eng/crypto2016-eng.component';
import { Crypto2015ItaComponent } from './attivita/gare-crittografiche/cryptowars/cryptowars2015/crypto2015-ita/crypto2015-ita.component';
import { Crypto2015EngComponent } from './attivita/gare-crittografiche/cryptowars/cryptowars2015/crypto2015-eng/crypto2015-eng.component';
import { Crypto2014ItaComponent } from './attivita/gare-crittografiche/cryptowars/cryptowars2014/crypto2014-ita/crypto2014-ita.component';
import { Crypto2014EngComponent } from './attivita/gare-crittografiche/cryptowars/cryptowars2014/crypto2014-eng/crypto2014-eng.component';
import { Crypto2011ItaComponent } from './attivita/gare-crittografiche/cryptowars/cryptowars2011/crypto2011-ita/crypto2011-ita.component';
import { Crypto2011EngComponent } from './attivita/gare-crittografiche/cryptowars/cryptowars2011/crypto2011-eng/crypto2011-eng.component';
import { ClassicComponent } from './attivita/gare-crittografiche/cryptowars/cryptowars2011/crypto2011-eng/classic/classic.component';
import { PublicComponent } from './attivita/gare-crittografiche/cryptowars/cryptowars2011/crypto2011-eng/public/public.component';
import { SymmetricComponent } from './attivita/gare-crittografiche/cryptowars/cryptowars2011/crypto2011-eng/symmetric/symmetric.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ObiettiviComponent,
    MailingListComponent,
    AttivitaComponent,
    OpportunitaComponent,
    EventiComponent,
    SeminariLocaliComponent,
    CifrisChainComponent,
    PqCifrisComponent,
    CifrisCloudComponent,
    MathCifrisComponent,
    NewsComponent,
    ContattiComponent,
    AderentiComponent,
    DecifrisAthesisComponent,
    DecifrisAugustaeTaurinorumComponent,
    DecifrisScholaLatinaComponent,
    DecifrisScholaMediolanensibusComponent,
    NuoveAziendeInteressateComponent,
    CentoTesiComponent,
    IniziativeDivulgativeComponent,
    GareCrittograficheComponent,
    EventiPubbliciComponent,
    SessioniDeCifrisComponent,
    SessionePerugiaComponent,
    SessioneMilanoComponent,
    SessioneRomaComponent,
    SessioneSalernoComponent,
    WorkshopCryptanalysisComponent,
    SessioneTorinoComponent,
    HackatonSmartContractComponent,
    SessioneRomaPqcifrisComponent,
    SessioneRomaCifrischainComponent,
    EventoConoscitivoComponent,
    ItasecComponent,
    EventoCifrischainComponent,
    DidatticaUniversitariaComponent,
    EventiPassatiComponent,
    EventiFuturiComponent,
    PerStudentiComponent,
    PerAziendeComponent,
    PerAccademiaComponent,
    PerInsegnantiComponent,
    PerCuriosiComponent,
    CounterpartyComponent,
    AboutComponent,
    CounterpartyHomeComponent,
    RulesComponent,
    SpecsComponent,
    CryptowarsComponent,
    Cryptowars2020Component,
    Cryptowars2019Component,
    Cryptowars2018Component,
    Cryptowars2016Component,
    Cryptowars2015Component,
    Cryptowars2014Component,
    Cryptowars2011Component,
    ClassicaComponent,
    PubblicaComponent,
    SimmetricaComponent,
    Crypto2020ItaComponent,
    Crypto2020EngComponent,
    Crypto2019ItaComponent,
    Crypto2019EngComponent,
    Crypto2018ItaComponent,
    Crypto2018EngComponent,
    Crypto2016ItaComponent,
    Crypto2016EngComponent,
    Crypto2015ItaComponent,
    Crypto2015EngComponent,
    Crypto2014ItaComponent,
    Crypto2014EngComponent,
    Crypto2011ItaComponent,
    Crypto2011EngComponent,
    ClassicComponent,
    PublicComponent,
    SymmetricComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SidebarModule.forRoot(),
    NgbModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

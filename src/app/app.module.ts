import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// app di base
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

// home

// associazione
import { HomeAssociazioneComponent } from './associazione/home-associazione/home-associazione.component';
import { StatutoComponent } from './associazione/statuto/statuto.component';
import { RegolamentoComponent } from './associazione/regolamento/regolamento.component';
import { OrganiDirettiviComponent } from './associazione/organi-direttivi/organi-direttivi.component';
import { AssociazioneComponent } from './associazione/associazione.component';
import { ObiettiviComponent } from './associazione/obiettivi/obiettivi.component';
import { AssociarsiComponent } from './associazione/associarsi/associarsi.component';
import { AdvisoryBoardComponent } from './associazione/advisory-board/advisory-board.component';
import { BenemeritiComponent } from './associazione/benemeriti/benemeriti.component';
import { PosizioniRicercaComponent } from './associazione/posizioni-ricerca/posizioni-ricerca.component';
import { StageTirociniComponent } from './associazione/stage-tirocini/stage-tirocini.component';

// miscellanea
import { RootElementsComponent } from './root-elements/root-elements.component';
import { HomeComponent } from './root-elements/home/home.component';
import { ContattiComponent } from './root-elements/contatti/contatti.component';
import { CookiePolicyComponent } from './root-elements/cookie-policy/cookie-policy.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HomeWelcomeComponent } from './welcome/home-welcome/home-welcome.component';


// 
// import { MailingListComponent } from './mailing-list/mailing-list.component';
// import { AttivitaComponent } from './attivita/attivita.component';
// import { EventiComponent } from './eventi/eventi.component';
// import { SeminariLocaliComponent } from './gruppi/seminari-locali/seminari-locali.component';
// import { CifrisChainComponent } from './gruppi/cifris-chain/cifris-chain.component';
// import { PqCifrisComponent } from './gruppi/pq-cifris/pq-cifris.component';
// import { CifrisCloudComponent } from './gruppi/cifris-cloud/cifris-cloud.component';
// import { MathCifrisComponent } from './gruppi/math-cifris/math-cifris.component';
// import { NewsComponent } from './news/news.component';
// import { AderentiComponent } from './aderenti/aderenti.component';
// import { DecifrisAthesisComponent } from './gruppi/seminari-locali/decifris-athesis/decifris-athesis.component';
// import { DecifrisAugustaeTaurinorumComponent } from './gruppi/seminari-locali/decifris-augustae-taurinorum/decifris-augustae-taurinorum.component';
// import { DecifrisScholaLatinaComponent } from './gruppi/seminari-locali/decifris-schola-latina/decifris-schola-latina.component';
// import { DecifrisScholaMediolanensibusComponent } from './gruppi/seminari-locali/decifris-schola-mediolanensibus/decifris-schola-mediolanensibus.component';
// import { Centotesi20082017Component } from './attivita/centotesi20082017/centotesi20082017.component';
// import { IniziativeDivulgativeComponent } from './attivita/iniziative-divulgative/iniziative-divulgative.component';
// import { GareCrittograficheComponent } from './attivita/gare-crittografiche/gare-crittografiche.component';
// import { EventiPubbliciComponent } from './eventi/eventi-pubblici/eventi-pubblici.component';
// import { SessioniDeCifrisComponent } from './eventi/eventi-pubblici/sessioni-de-cifris/sessioni-de-cifris.component';
// import { SessionePerugiaComponent } from './eventi/eventi-pubblici/sessione-perugia/sessione-perugia.component';
// import { SessioneMilanoComponent } from './eventi/eventi-pubblici/sessione-milano/sessione-milano.component';
// import { SessioneRomaComponent } from './eventi/eventi-pubblici/sessione-roma/sessione-roma.component';
// import { SessioneSalernoComponent } from './eventi/eventi-pubblici/sessione-salerno/sessione-salerno.component';
// import { WorkshopCryptanalysisComponent } from './eventi/eventi-pubblici/workshop-cryptanalysis/workshop-cryptanalysis.component';
// import { SessioneTorinoComponent } from './eventi/eventi-pubblici/sessione-torino/sessione-torino.component';
// import { HackatonSmartContractComponent } from './eventi/eventi-pubblici/hackaton-smart-contract/hackaton-smart-contract.component';
// import { SessioneRomaPqcifrisComponent } from './eventi/eventi-pubblici/sessione-roma-pqcifris/sessione-roma-pqcifris.component';
// import { SessioneRomaCifrischainComponent } from './eventi/eventi-pubblici/sessione-roma-cifrischain/sessione-roma-cifrischain.component';
// import { EventoConoscitivoComponent } from './eventi/eventi-pubblici/evento-conoscitivo/evento-conoscitivo.component';
// import { ItasecComponent } from './eventi/eventi-pubblici/itasec/itasec.component';
// import { EventoCifrischainComponent } from './eventi/eventi-pubblici/evento-cifrischain/evento-cifrischain.component';
// import { DidatticaUniversitariaComponent } from './gruppi/didattica-universitaria/didattica-universitaria.component';
// import { EventiPassatiComponent } from './eventi/eventi-passati/eventi-passati.component';
// import { EventiFuturiComponent } from './eventi/eventi-futuri/eventi-futuri.component';
// import { PerStudentiComponent } from './contenuti-specifici/per-studenti/per-studenti.component';
// import { PerAziendeComponent } from './contenuti-specifici/per-aziende/per-aziende.component';
// import { PerAccademiaComponent } from './contenuti-specifici/per-accademia/per-accademia.component';
// import { PerInsegnantiComponent } from './contenuti-specifici/per-insegnanti/per-insegnanti.component';
// import { PerCuriosiComponent } from './contenuti-specifici/per-curiosi/per-curiosi.component';
// import { CounterpartyComponent } from './counterparty/counterparty.component';
// import { AboutComponent } from './counterparty/about/about.component';
// import { CounterpartyHomeComponent } from './counterparty/counterparty-home/counterparty-home.component';
// import { RulesComponent } from './counterparty/rules/rules.component';
// import { SpecsComponent } from './counterparty/specs/specs.component';
// import { CryptowarsComponent } from './attivita/gare-crittografiche/cryptowars/cryptowars.component';
// import { Cryptowars2020Component } from './attivita/gare-crittografiche/cryptowars/cryptowars2020/cryptowars2020.component';
// import { Cryptowars2019Component } from './attivita/gare-crittografiche/cryptowars/cryptowars2019/cryptowars2019.component';
// import { Cryptowars2018Component } from './attivita/gare-crittografiche/cryptowars/cryptowars2018/cryptowars2018.component';
// import { Cryptowars2016Component } from './attivita/gare-crittografiche/cryptowars/cryptowars2016/cryptowars2016.component';
// import { Cryptowars2015Component } from './attivita/gare-crittografiche/cryptowars/cryptowars2015/cryptowars2015.component';
// import { Cryptowars2014Component } from './attivita/gare-crittografiche/cryptowars/cryptowars2014/cryptowars2014.component';
// import { Cryptowars2011Component } from './attivita/gare-crittografiche/cryptowars/cryptowars2011/cryptowars2011.component';
// import { SimmetricaComponent } from './attivita/gare-crittografiche/cryptowars/cryptowars2011/crypto2011-ita/simmetrica/simmetrica.component';
// import { ClassicaComponent } from './attivita/gare-crittografiche/cryptowars/cryptowars2011/crypto2011-ita/classica/classica.component';
// import { PubblicaComponent } from './attivita/gare-crittografiche/cryptowars/cryptowars2011/crypto2011-ita//pubblica/pubblica.component';
// import { Crypto2020ItaComponent } from './attivita/gare-crittografiche/cryptowars/cryptowars2020/crypto2020-ita/crypto2020-ita.component';
// import { Crypto2020EngComponent } from './attivita/gare-crittografiche/cryptowars/cryptowars2020/crypto2020-eng/crypto2020-eng.component';
// import { Crypto2019ItaComponent } from './attivita/gare-crittografiche/cryptowars/cryptowars2019/crypto2019-ita/crypto2019-ita.component';
// import { Crypto2019EngComponent } from './attivita/gare-crittografiche/cryptowars/cryptowars2019/crypto2019-eng/crypto2019-eng.component';
// import { Crypto2018ItaComponent } from './attivita/gare-crittografiche/cryptowars/cryptowars2018/crypto2018-ita/crypto2018-ita.component';
// import { Crypto2018EngComponent } from './attivita/gare-crittografiche/cryptowars/cryptowars2018/crypto2018-eng/crypto2018-eng.component';
// import { Crypto2016ItaComponent } from './attivita/gare-crittografiche/cryptowars/cryptowars2016/crypto2016-ita/crypto2016-ita.component';
// import { Crypto2016EngComponent } from './attivita/gare-crittografiche/cryptowars/cryptowars2016/crypto2016-eng/crypto2016-eng.component';
// import { Crypto2015ItaComponent } from './attivita/gare-crittografiche/cryptowars/cryptowars2015/crypto2015-ita/crypto2015-ita.component';
// import { Crypto2015EngComponent } from './attivita/gare-crittografiche/cryptowars/cryptowars2015/crypto2015-eng/crypto2015-eng.component';
// import { Crypto2014ItaComponent } from './attivita/gare-crittografiche/cryptowars/cryptowars2014/crypto2014-ita/crypto2014-ita.component';
// import { Crypto2014EngComponent } from './attivita/gare-crittografiche/cryptowars/cryptowars2014/crypto2014-eng/crypto2014-eng.component';
// import { Crypto2011ItaComponent } from './attivita/gare-crittografiche/cryptowars/cryptowars2011/crypto2011-ita/crypto2011-ita.component';
// import { Crypto2011EngComponent } from './attivita/gare-crittografiche/cryptowars/cryptowars2011/crypto2011-eng/crypto2011-eng.component';
// import { ClassicComponent } from './attivita/gare-crittografiche/cryptowars/cryptowars2011/crypto2011-eng/classic/classic.component';
// import { PublicComponent } from './attivita/gare-crittografiche/cryptowars/cryptowars2011/crypto2011-eng/public/public.component';
// import { SymmetricComponent } from './attivita/gare-crittografiche/cryptowars/cryptowars2011/crypto2011-eng/symmetric/symmetric.component';
// import { DecifrisEruditorumComponent } from './gruppi/seminari-locali/decifris-eruditorum/decifris-eruditorum.component';
// import { QuantumCifrisComponent } from './gruppi/quantum-cifris/quantum-cifris.component';
// import { Cryptowars2021Component } from './attivita/gare-crittografiche/cryptowars/cryptowars2021/cryptowars2021.component';
// import { Crypto2021EngComponent } from './attivita/gare-crittografiche/cryptowars/cryptowars2021/crypto2021-eng/crypto2021-eng.component';
// import { Crypto2021ItaComponent } from './attivita/gare-crittografiche/cryptowars/cryptowars2021/crypto2021-ita/crypto2021-ita.component';
// import { DecifrisHistoriaeComponent } from './gruppi/seminari-locali/decifris-historiae/decifris-historiae.component';
// import { DecifrisTrendComponent } from './attivita/decifris-trend/decifris-trend.component';
// import { SummerSchoolComponent } from './eventi/eventi-pubblici/summer-school/summer-school.component';
// import { ConvegnoUmiComponent } from './eventi/eventi-pubblici/convegno-umi/convegno-umi.component';
// import { DiconoDiNoiComponent } from './associazione/dicono-di-noi/dicono-di-noi.component';
// import { EditoriaComponent } from './attivita/editoria/editoria.component';
// import { BlockchainSmartContractComponent } from './attivita/blockchain-smart-contract/blockchain-smart-contract.component';

// // ./attivita/trends
// import { Trends24Component } from './attivita/trends24/trends24.component';
// import { Trends23Component } from './attivita/trends23/trends23.component';
// import { Trends22Component } from './attivita/trends22/trends22.component';
// import { Trends22bisComponent } from './attivita/trends22/trends22bis/trends22bis.component';

// // ./attivita/editoria/koine
// import { KoineComponent } from './attivita/editoria/koine/koine.component';
// import { HomeKoineComponent } from './attivita/editoria/koine/home-koine/home-koine.component';
// import { ArticlesAndVolumesComponent } from './attivita/editoria/koine/articles-and-volumes/articles-and-volumes.component';
// import { EditorialBoardComponent } from './attivita/editoria/koine/editorial-board/editorial-board.component';
// import { Vol1Component } from './attivita/editoria/koine/vol1/vol1.component';

// // ./cifris/cifris2023
// import { Cifris2023Component } from './cifris/cifris2023/cifris2023.component';
// import { HomeCifris23Component } from './cifris/cifris2023/home-cifris23/home-cifris23.component';
// import { CallForPapersComponent } from './cifris/cifris2023/call-for-papers/call-for-papers.component';
// import { CallForWorkshopsComponent } from './cifris/cifris2023/call-for-workshops/call-for-workshops.component';
// import { ProgramCommitteeComponent } from './cifris/cifris2023/program-committee/program-committee.component';
// import { ProgramComponent } from './cifris/cifris2023/program/program.component';
// import { SubmissionComponent } from './cifris/cifris2023/submission/submission.component';
// import { RegistrationComponent } from './cifris/cifris2023/registration/registration.component';

// // ./cifris/cifris2024
// import { Cifris2024Component } from './cifris/cifris2024/cifris2024.component';
// import { HomeCifris24Component } from './cifris/cifris2024/home-cifris24/home-cifris24.component';
// import { CallForPapersComponent24 } from './cifris/cifris2024/call-for-papers/call-for-papers.component';
// import { CallForWorkshopsComponent24 } from './cifris/cifris2024/call-for-workshops/call-for-workshops.component';
// import { ProgramCommitteeComponent24 } from './cifris/cifris2024/program-committee/program-committee.component';
// import { ProgramComponent24 } from './cifris/cifris2024/program/program.component';
// import { SubmissionComponent24 } from './cifris/cifris2024/submission/submission.component';
// import { RegistrationComponent24 } from './cifris/cifris2024/registration/registration.component';

// // ./hosting
// import { Opera24Component } from './hosting/opera24/opera24.component';
// import { Combinatorics24Component } from './hosting/combinatorics24/combinatorics24.component';
// import { WCC24Component } from './hosting/wcc24/wcc24.component';
// import { NotizieComponent } from './associazione/notizie/notizie.component';
// import { EventiPatrocinatiComponent } from './eventi/eventi-patrocinati/eventi-patrocinati/eventi-patrocinati.component';
// import { VenueAccomodationComponent24 } from './cifris/cifris2024/venue-accomodation/venue-accomodation.component';
// import { Centotesi20142023Component } from './attivita/centotesi20142023/centotesi20142023.component';
// import { AgoraComponent } from './gruppi/agora/agora.component';
// import { Vol2Component } from './attivita/editoria/koine/vol2/vol2.component';

@NgModule({
	declarations: [
		AppComponent,
		ToolbarComponent,
		HomeComponent,

		// associazione
		StatutoComponent,
		RegolamentoComponent,
		OrganiDirettiviComponent,
		StageTirociniComponent,
		PosizioniRicercaComponent,
		AdvisoryBoardComponent,
		AssociarsiComponent,
		BenemeritiComponent,
		ObiettiviComponent,
		AssociazioneComponent,
		ContattiComponent,
		CookiePolicyComponent,
  HomeAssociazioneComponent,
  RootElementsComponent,
  WelcomeComponent,
  HomeWelcomeComponent

		// MailingListComponent,
		// AttivitaComponent,
		// OpportunitaComponent,
		// EventiComponent,
		// SeminariLocaliComponent,
		// CifrisChainComponent,
		// PqCifrisComponent,
		// CifrisCloudComponent,
		// MathCifrisComponent,
		// NewsComponent,
		// AderentiComponent,
		// DecifrisAthesisComponent,
		// DecifrisAugustaeTaurinorumComponent,
		// DecifrisScholaLatinaComponent,
		// DecifrisScholaMediolanensibusComponent,
		// NuoveAziendeInteressateComponent,
		// Centotesi20082017Component,
		// IniziativeDivulgativeComponent,
		// GareCrittograficheComponent,
		// EventiPubbliciComponent,
		// SessioniDeCifrisComponent,
		// SessionePerugiaComponent,
		// SessioneMilanoComponent,
		// SessioneRomaComponent,
		// SessioneSalernoComponent,
		// WorkshopCryptanalysisComponent,
		// SessioneTorinoComponent,
		// HackatonSmartContractComponent,
		// SessioneRomaPqcifrisComponent,
		// SessioneRomaCifrischainComponent,
		// EventoConoscitivoComponent,
		// ItasecComponent,
		// EventoCifrischainComponent,
		// DidatticaUniversitariaComponent,
		// EventiPassatiComponent,
		// EventiFuturiComponent,
		// PerStudentiComponent,
		// PerAziendeComponent,
		// PerAccademiaComponent,
		// PerInsegnantiComponent,
		// PerCuriosiComponent,
		// CounterpartyComponent,
		// AboutComponent,
		// CounterpartyHomeComponent,
		// RulesComponent,
		// SpecsComponent,
		// CryptowarsComponent,
		// Cryptowars2020Component,
		// Cryptowars2019Component,
		// Cryptowars2018Component,
		// Cryptowars2016Component,
		// Cryptowars2015Component,
		// Cryptowars2014Component,
		// Cryptowars2011Component,
		// ClassicaComponent,
		// PubblicaComponent,
		// SimmetricaComponent,
		// Crypto2020ItaComponent,
		// Crypto2020EngComponent,
		// Crypto2019ItaComponent,
		// Crypto2019EngComponent,
		// Crypto2018ItaComponent,
		// Crypto2018EngComponent,
		// Crypto2016ItaComponent,
		// Crypto2016EngComponent,
		// Crypto2015ItaComponent,
		// Crypto2015EngComponent,
		// Crypto2014ItaComponent,
		// Crypto2014EngComponent,
		// Crypto2011ItaComponent,
		// Crypto2011EngComponent,
		// ClassicComponent,
		// PublicComponent,
		// SymmetricComponent,
		// DecifrisEruditorumComponent,
		// QuantumCifrisComponent,
		// Cryptowars2021Component,
		// Crypto2021EngComponent,
		// Crypto2021ItaComponent,
		// DecifrisHistoriaeComponent,
		// DecifrisTrendComponent,
		// SummerSchoolComponent,
		// ConvegnoUmiComponent,
		// AssociazioneComponent,
		// DiconoDiNoiComponent,
		// EditoriaComponent,
		// BlockchainSmartContractComponent,
		// EventiPatrocinatiComponent,
		// //Koine
		// KoineComponent,
		// HomeKoineComponent,
		// ArticlesAndVolumesComponent,
		// Vol1Component,
		// //Centotesi
		// Centotesi20082017Component,
		// Centotesi20142023Component,
		// //Trends
		// Trends24Component,
		// Trends23Component,
		// Trends22Component,
		// Trends22bisComponent,
		// //Cifris23
		// Cifris2023Component,
		// HomeCifris23Component,
		// CallForPapersComponent,
		// CallForWorkshopsComponent,
		// ProgramCommitteeComponent,
		// ProgramComponent,
		// SubmissionComponent,
		// RegistrationComponent,
		// //Cifris24
		// Cifris2024Component,
		// HomeCifris24Component,
		// CallForPapersComponent24,
		// CallForWorkshopsComponent24,
		// ProgramCommitteeComponent24,
		// ProgramComponent24,
		// SubmissionComponent24,
		// RegistrationComponent24,
		// VenueAccomodationComponent24,
		// //Hosting
		// Opera24Component,
		// Combinatorics24Component,
		// WCC24Component,
		// NotizieComponent,
		// AgoraComponent,
		// Vol2Component,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		ReactiveFormsModule,
		HttpClientModule,
		MatSidenavModule,
		MatButtonModule,
		MatListModule,
		MatToolbarModule,
		MatIconModule,
		MatMenuModule,
		BrowserAnimationsModule,
		MatCardModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }

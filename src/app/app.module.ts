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
import { DecifrisEruditorumComponent } from './gruppi/seminari-locali/decifris-eruditorum/decifris-eruditorum.component';
import { QuantumCifrisComponent } from './gruppi/quantum-cifris/quantum-cifris.component';
import { Cryptowars2021Component } from './attivita/gare-crittografiche/cryptowars/cryptowars2021/cryptowars2021.component';
import { Crypto2021EngComponent } from './attivita/gare-crittografiche/cryptowars/cryptowars2021/crypto2021-eng/crypto2021-eng.component';
import { Crypto2021ItaComponent } from './attivita/gare-crittografiche/cryptowars/cryptowars2021/crypto2021-ita/crypto2021-ita.component';
import { DecifrisHistoriaeComponent } from './gruppi/seminari-locali/decifris-historiae/decifris-historiae.component';
import { AComponent } from './a/a.component';
import { DecifrisTrendComponent } from './attivita/decifris-trend/decifris-trend.component';
import { SummerSchoolComponent } from './eventi/eventi-pubblici/summer-school/summer-school.component';
import { ConvegnoUmiComponent } from './eventi/eventi-pubblici/convegno-umi/convegno-umi.component';
import { AssociazioneComponent } from './associazione/associazione.component';
import { StatutoComponent } from './associazione/statuto/statuto.component';
import { RegolamentoComponent } from './associazione/regolamento/regolamento.component';
import { OrganiDirettiviComponent } from './associazione/organi-direttivi/organi-direttivi.component';
import { StageTirociniComponent } from './opportunita/stage-tirocini/stage-tirocini.component';
import { PosizioniRicercaComponent } from './opportunita/posizioni-ricerca/posizioni-ricerca.component';
import { AdvisoryBoardComponent } from './opportunita/advisory-board/advisory-board.component';
import { AssociarsiComponent } from './opportunita/associarsi/associarsi.component';
import { BenemeritiComponent } from './opportunita/associarsi/benemeriti/benemeriti.component';
import { DiconoDiNoiComponent } from './associazione/dicono-di-noi/dicono-di-noi.component';
import { CookiePolicyComponent } from './cookie-policy/cookie-policy.component';
import { EditoriaComponent } from './attivita/editoria/editoria.component';
import { BlockchainSmartContractComponent } from './attivita/blockchain-smart-contract/blockchain-smart-contract.component';

// ./attivita/trends
import { Trends24Component } from './attivita/trends24/trends24.component';
import { Trends23Component } from './attivita/trends23/trends23.component';
import { Trends22Component } from './attivita/trends22/trends22.component';
import { Trends22bisComponent } from './attivita/trends22/trends22bis/trends22bis.component';

// ./cifris/cifris2023
import { Cifris2023Component } from './cifris/cifris2023/cifris2023.component';
import { HomeCifris23Component } from './cifris/cifris2023/home-cifris23/home-cifris23.component';
import { CallForPapersComponent } from './cifris/cifris2023/call-for-papers/call-for-papers.component';
import { CallForWorkshopsComponent } from './cifris/cifris2023/call-for-workshops/call-for-workshops.component';
import { ProgramCommitteeComponent } from './cifris/cifris2023/program-committee/program-committee.component';
import { ProgramComponent } from './cifris/cifris2023/program/program.component';
import { SubmissionComponent } from './cifris/cifris2023/submission/submission.component';
import { RegistrationComponent } from './cifris/cifris2023/registration/registration.component';

// ./cifris/cifris2024
import { Cifris2024Component } from './cifris/cifris2024/cifris2024.component';
import { HomeCifris24Component } from './cifris/cifris2024/home-cifris24/home-cifris24.component';
import { CallForPapersComponent24 } from './cifris/cifris2024/call-for-papers/call-for-papers.component';
import { CallForWorkshopsComponent24 } from './cifris/cifris2024/call-for-workshops/call-for-workshops.component';
import { ProgramCommitteeComponent24 } from './cifris/cifris2024/program-committee/program-committee.component';
import { ProgramComponent24 } from './cifris/cifris2024/program/program.component';
import { SubmissionComponent24 } from './cifris/cifris2024/submission/submission.component';
import { RegistrationComponent24 } from './cifris/cifris2024/registration/registration.component';

// ./hosting
import { Opera24Component } from './hosting/opera24/opera24.component';
import { Combinatorics24Component } from './hosting/combinatorics24/combinatorics24.component';
import { WCC24Component } from './hosting/wcc24/wcc24.component';

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
		SymmetricComponent,
		DecifrisEruditorumComponent,
		QuantumCifrisComponent,
		Cryptowars2021Component,
		Crypto2021EngComponent,
		Crypto2021ItaComponent,
		DecifrisHistoriaeComponent,
		AComponent,
		DecifrisTrendComponent,
		SummerSchoolComponent,
		ConvegnoUmiComponent,
		AssociazioneComponent,
		StatutoComponent,
		RegolamentoComponent,
		OrganiDirettiviComponent,
		StageTirociniComponent,
		PosizioniRicercaComponent,
		AdvisoryBoardComponent,
		AssociarsiComponent,
		BenemeritiComponent,
		DiconoDiNoiComponent,
		CookiePolicyComponent,
		EditoriaComponent,
		BlockchainSmartContractComponent,
		//Trends
  		Trends24Component,
		Trends23Component,
		Trends22Component,
		Trends22bisComponent,
		//Cifris23
		Cifris2023Component,
		HomeCifris23Component,
		CallForPapersComponent,
		CallForWorkshopsComponent,
		ProgramCommitteeComponent,
		ProgramComponent,
		SubmissionComponent,
		RegistrationComponent,
		//Cifris24
		Cifris2024Component,
		HomeCifris24Component,
		CallForPapersComponent24,
		CallForWorkshopsComponent24,
		ProgramCommitteeComponent24,
		ProgramComponent24,
		SubmissionComponent24,
		RegistrationComponent24,
		//Hosting
		Opera24Component,
		Combinatorics24Component,
		WCC24Component,
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

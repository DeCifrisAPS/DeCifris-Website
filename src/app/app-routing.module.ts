import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';

// associazione
import { AssociazioneComponent } from './associazione/associazione.component';
import { HomeAssociazioneComponent } from './associazione/home-associazione/home-associazione.component';
import { ObiettiviComponent } from './associazione/obiettivi/obiettivi.component';
import { StatutoComponent } from './associazione/statuto/statuto.component';
import { RegolamentoComponent } from './associazione/regolamento/regolamento.component';
import { OrganiDirettiviComponent } from './associazione/organi-direttivi/organi-direttivi.component';
import { AdvisoryBoardComponent } from './associazione/advisory-board/advisory-board.component';
import { PosizioniRicercaComponent } from './associazione/posizioni-ricerca/posizioni-ricerca.component';
import { StageTirociniComponent } from './associazione/stage-tirocini/stage-tirocini.component';
import { AssociarsiComponent } from './associazione/associarsi/associarsi.component';
import { BenemeritiComponent } from './associazione/benemeriti/benemeriti.component';

// miscellanea
import { ContattiComponent } from './contatti/contatti.component';
import { CookiePolicyComponent } from './cookie-policy/cookie-policy.component';
import { MailingListComponent } from './mailing-list/mailing-list.component';

// 
// import { AttivitaComponent } from './attivita/attivita.component';
// import { EventiComponent } from './eventi/eventi.component';

// import { IniziativeDivulgativeComponent } from './attivita/iniziative-divulgative/iniziative-divulgative.component';
// import { GareCrittograficheComponent } from './attivita/gare-crittografiche/gare-crittografiche.component';
// import { EventiPubbliciComponent } from './eventi/eventi-pubblici/eventi-pubblici.component';
// import { DidatticaUniversitariaComponent } from './gruppi/didattica-universitaria/didattica-universitaria.component';
// import { SessioniDeCifrisComponent } from './eventi/eventi-pubblici/sessioni-de-cifris/sessioni-de-cifris.component';

// // seminari e mailing list
// import { DecifrisAthesisComponent } from './gruppi/seminari-locali/decifris-athesis/decifris-athesis.component';
// import { AgoraComponent } from './gruppi/agora/agora.component';
// import { DecifrisAugustaeTaurinorumComponent } from './gruppi/seminari-locali/decifris-augustae-taurinorum/decifris-augustae-taurinorum.component';
// import { SeminariLocaliComponent } from './gruppi/seminari-locali/seminari-locali.component';
// import { CifrisChainComponent } from './gruppi/cifris-chain/cifris-chain.component';
// import { CifrisCloudComponent } from './gruppi/cifris-cloud/cifris-cloud.component';
// import { MathCifrisComponent } from './gruppi/math-cifris/math-cifris.component';
// import { PqCifrisComponent } from './gruppi/pq-cifris/pq-cifris.component';
// import { DecifrisEruditorumComponent } from './gruppi/seminari-locali/decifris-eruditorum/decifris-eruditorum.component';
// import { QuantumCifrisComponent } from './gruppi/quantum-cifris/quantum-cifris.component';
// import { DecifrisHistoriaeComponent } from './gruppi/seminari-locali/decifris-historiae/decifris-historiae.component';

// // varie
// import { DecifrisScholaLatinaComponent } from './gruppi/seminari-locali/decifris-schola-latina/decifris-schola-latina.component';
// import { DecifrisScholaMediolanensibusComponent } from './gruppi/seminari-locali/decifris-schola-mediolanensibus/decifris-schola-mediolanensibus.component';
// import { PerAziendeComponent } from './contenuti-specifici/per-aziende/per-aziende.component';
// import { PerAccademiaComponent } from './contenuti-specifici/per-accademia/per-accademia.component';
// import { PerStudentiComponent } from './contenuti-specifici/per-studenti/per-studenti.component';
// import { AderentiComponent } from './aderenti/aderenti.component';
// import { CounterpartyComponent } from './counterparty/counterparty.component';
// import { PerCuriosiComponent } from './contenuti-specifici/per-curiosi/per-curiosi.component';
// import { PerInsegnantiComponent } from './contenuti-specifici/per-insegnanti/per-insegnanti.component';
// import { DecifrisTrendComponent } from './attivita/decifris-trend/decifris-trend.component';
// import { SummerSchoolComponent } from './eventi/eventi-pubblici/summer-school/summer-school.component';
// import { ConvegnoUmiComponent } from './eventi/eventi-pubblici/convegno-umi/convegno-umi.component';

// import { DiconoDiNoiComponent } from './associazione/dicono-di-noi/dicono-di-noi.component';
// import { NotizieComponent } from './associazione/notizie/notizie.component';
// import { BlockchainSmartContractComponent } from './attivita/blockchain-smart-contract/blockchain-smart-contract.component';

// // cryptowars
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
// import { Cryptowars2021Component } from './attivita/gare-crittografiche/cryptowars/cryptowars2021/cryptowars2021.component';

// // ./attivita/trends
// import { Trends24Component } from './attivita/trends24/trends24.component';
// import { Trends23Component } from './attivita/trends23/trends23.component';
// import { Trends22Component } from './attivita/trends22/trends22.component';
// import { Trends22bisComponent } from './attivita/trends22/trends22bis/trends22bis.component';

// // editoria e ./koine
// import { EditoriaComponent } from './attivita/editoria/editoria.component';
// import { KoineComponent } from './attivita/editoria/koine/koine.component';
// import { HomeKoineComponent } from './attivita/editoria/koine/home-koine/home-koine.component';
// import { ArticlesAndVolumesComponent } from './attivita/editoria/koine/articles-and-volumes/articles-and-volumes.component';
// import { EditorialBoardComponent } from './attivita/editoria/koine/editorial-board/editorial-board.component';
// import { Vol1Component } from './attivita/editoria/koine/vol1/vol1.component';
// import { Vol2Component } from './attivita/editoria/koine/vol2/vol2.component';


// // varie CENTO TESI
// import { Centotesi20082017Component } from './attivita/centotesi20082017/centotesi20082017.component';
// import { Centotesi20142023Component } from './attivita/centotesi20142023/centotesi20142023.component';

// // ./cifris23
// import { Cifris2023Component } from './cifris/cifris2023/cifris2023.component';
// import { CallForPapersComponent } from './cifris/cifris2023/call-for-papers/call-for-papers.component';
// import { CallForWorkshopsComponent } from './cifris/cifris2023/call-for-workshops/call-for-workshops.component';
// import { ProgramCommitteeComponent } from './cifris/cifris2023/program-committee/program-committee.component';
// import { RegistrationComponent } from './cifris/cifris2023/registration/registration.component';
// import { ProceedingsComponent } from './cifris/cifris2023/proceedings/proceedings.component';
// import { HomeCifris23Component } from './cifris/cifris2023/home-cifris23/home-cifris23.component';
// import { ProgramComponent } from './cifris/cifris2023/program/program.component';
// import { PaymentResultComponent } from './cifris/cifris2023/payment-result/payment-result.component';

// // ./cifris24
// import { Cifris2024Component } from './cifris/cifris2024/cifris2024.component';
// import { CallForPapersComponent24 } from './cifris/cifris2024/call-for-papers/call-for-papers.component';
// import { CallForWorkshopsComponent24 } from './cifris/cifris2024/call-for-workshops/call-for-workshops.component';
// import { ProgramCommitteeComponent24 } from './cifris/cifris2024/program-committee/program-committee.component';
// import { RegistrationComponent24 } from './cifris/cifris2024/registration/registration.component';
// import { ProceedingsComponent24 } from './cifris/cifris2024/proceedings/proceedings.component';
// import { HomeCifris24Component } from './cifris/cifris2024/home-cifris24/home-cifris24.component';
// import { ProgramComponent24 } from './cifris/cifris2024/program/program.component';
// import { VenueAccomodationComponent24 } from './cifris/cifris2024/venue-accomodation/venue-accomodation.component';
// import { PaymentResultComponent24 } from './cifris/cifris2024/payment-result/payment-result.component';

// // ./hosting
// import { Opera24Component } from './hosting/opera24/opera24.component';
// import { Combinatorics24Component } from './hosting/combinatorics24/combinatorics24.component';
// import { WCC24Component } from './hosting/wcc24/wcc24.component';



// importante mettere come children tutti quelli che condividono la stessa sidebar, dato
// che viene gestita da <router-outlet> che ogni pagina parente ha
const routes: Routes = [
	// home e miscellanea
	{ path: "", component: HomeComponent },
	{ path: "contatti", component: ContattiComponent },
	{ path: "cookie-policy", component: CookiePolicyComponent },
	{ path: "mailing-list", component: MailingListComponent },

	// path ./associazione
	{
		path: "associazione", component: AssociazioneComponent, children: [
			{ path: "", component: HomeAssociazioneComponent },
			{ path: "statuto", component: StatutoComponent },
			{ path: "regolamento", component: RegolamentoComponent },
			{ path: "organi-direttivi", component: OrganiDirettiviComponent },
			{ path: "advisory-board", component: AdvisoryBoardComponent },
			{ path: "posizioni-ricerca", component: PosizioniRicercaComponent },
			{ path: "stage-tirocini", component: StageTirociniComponent },
			{ path: "associarsi-benemeriti", component: BenemeritiComponent },
			{ path: "associarsi", component: AssociarsiComponent },
			{ path: "obiettivi", component: ObiettiviComponent },
			{ path: 'advisoryboard/borse', redirectTo: 'opportunita', pathMatch: 'full' },
		]
	},





	// { path: 'koine', redirectTo: '/koine/home', pathMatch: 'full' },
	// {
	// 	path: "koine", component: KoineComponent, children: [
	// 		{ path: "home", component: HomeKoineComponent },
	// 		{ path: "articles-and-volumes", component: ArticlesAndVolumesComponent },
	// 		{ path: "editorial-board", component: EditorialBoardComponent },
	// 		{ path: "vol1", component: Vol1Component },
	// 		{ path: "vol2", component: Vol2Component },
	// 	]
	// },
	// { path: "opera24", component: Opera24Component },
	// { path: "combinatorics24", component: Combinatorics24Component },
	// { path: "wcc24", component: WCC24Component },
	// { path: "blockchain-smart-contract", component: BlockchainSmartContractComponent },
	// { path: "editoria", component: EditoriaComponent },
	// { path: "centotesi2008-2017", component: Centotesi20082017Component },
	// { path: "centotesi2014-2023", component: Centotesi20142023Component },
	// { path: 'cifris23', redirectTo: '/cifris23/homeCifris23', pathMatch: 'full' },
	// {
	// 	path: "cifris23", component: Cifris2023Component, children: [
	// 		{ path: "call-for-papers", component: CallForPapersComponent },
	// 		{ path: "call-for-workshops", component: CallForWorkshopsComponent },
	// 		{ path: "program-committee", component: ProgramCommitteeComponent },
	// 		{ path: "registration", component: RegistrationComponent },
	// 		{ path: "homeCifris23", component: HomeCifris23Component },
	// 		{ path: "program", component: ProgramComponent },
	// 		{ path: "proceedings", component: ProceedingsComponent },
	// 		{ path: "payment-result", component: PaymentResultComponent },
	// 	]
	// },
	// { path: 'cifris24', redirectTo: '/cifris24/homeCifris24', pathMatch: 'full' },
	// {
	// 	path: "cifris24", component: Cifris2024Component, children: [
	// 		{ path: "venue-accomodation", component: VenueAccomodationComponent24 },
	// 		{ path: "call-for-papers", component: CallForPapersComponent24 },
	// 		{ path: "call-for-workshops", component: CallForWorkshopsComponent24 },
	// 		{ path: "program-committee", component: ProgramCommitteeComponent24 },
	// 		{ path: "registration", component: RegistrationComponent24 },
	// 		{ path: "homeCifris24", component: HomeCifris24Component },
	// 		{ path: "program", component: ProgramComponent24 },
	// 		{ path: "proceedings", component: ProceedingsComponent24 },
	// 		{ path: "payment-result", component: PaymentResultComponent24 },
	// 	]
	// },
	// { path: "dicono-di-noi", component: DiconoDiNoiComponent },
	// { path: "notizie", component: NotizieComponent },
	// { path: 'trends', component: DecifrisTrendComponent },
	// { path: 'trends24', component: Trends24Component },
	// { path: 'trends23', component: Trends23Component },
	// { path: 'trends22bis', component: Trends22bisComponent },
	// { path: 'trends22', component: Trends22Component },
	// { path: "aderenti", component: AderentiComponent },
	// { path: "attivita", component: AttivitaComponent },
	// { path: "seminariLocali", component: SeminariLocaliComponent },
	// { path: "eruditorum", component: DecifrisEruditorumComponent },
	// { path: "deCifrisHistoriae", component: DecifrisHistoriaeComponent },
	// { path: "deCifrisAthesis", component: DecifrisAthesisComponent },
	// { path: "deCifrisAgora", component: AgoraComponent },
	// { path: "deCifrisAugustaeTaurinorum", component: DecifrisAugustaeTaurinorumComponent },
	// { path: "deCifrisScholaLatina", component: DecifrisScholaLatinaComponent },
	// { path: "deCifrisMediolanensibus", component: DecifrisScholaMediolanensibusComponent },
	// { path: 'cifrisChain', component: CifrisChainComponent },
	// { path: 'quantumCifris', component: QuantumCifrisComponent },
	// { path: 'cifrisCloud', component: CifrisCloudComponent },
	// { path: 'mathCifris', component: MathCifrisComponent },
	// { path: 'PQCifris', component: PqCifrisComponent },
	// { path: "iniziativeDivulgative", component: IniziativeDivulgativeComponent },
	// { path: "gareCrittografiche", component: GareCrittograficheComponent },
	// { path: "eventiPubblici", component: EventiPubbliciComponent },
	// { path: "didatticaUniversitaria", component: DidatticaUniversitariaComponent },
	// { path: "eventi", component: EventiComponent },
	// { path: "sessioni", component: SessioniDeCifrisComponent },
	// { path: "curiosi", component: PerCuriosiComponent },
	// { path: "scuola", component: PerInsegnantiComponent },
	// { path: "studenti", component: PerStudentiComponent },
	// { path: "aziende", component: PerAziendeComponent },
	// { path: "convegnoUmi", component: ConvegnoUmiComponent },
	// { path: "accademia", component: PerAccademiaComponent },
	// { path: "counterparty", component: CounterpartyComponent },
	// { path: "summerSchool2022", component: SummerSchoolComponent },
	// {
	// 	path: "cryptowars", component: CryptowarsComponent, children: [
	// 		{ path: "2021", component: Cryptowars2021Component },
	// 		{ path: "2020", component: Cryptowars2020Component },
	// 		{ path: "2019", component: Cryptowars2019Component },
	// 		{ path: "2018", component: Cryptowars2018Component },
	// 		{ path: "2016", component: Cryptowars2016Component },
	// 		{ path: "2015", component: Cryptowars2015Component },
	// 		{ path: "2014", component: Cryptowars2014Component },
	// 		{
	// 			path: "2011", component: Cryptowars2011Component, children: [
	// 				{ path: "classica", component: ClassicaComponent },
	// 				{ path: "pubblica", component: PubblicaComponent },
	// 				{ path: "simmetrica", component: SimmetricaComponent }
	// 			]
	// 		}
	// 	]
	// }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }

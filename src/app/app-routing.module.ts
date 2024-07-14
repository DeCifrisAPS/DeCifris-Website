import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpErrorInterceptor } from './errors/http-error-interceptor.service';

// elementi root (no prefisso)
import { RootElementsComponent } from './root-elements/root-elements.component';
import { HomeComponent } from './root-elements/home/home.component';
import { ContattiComponent } from './root-elements/contatti/contatti.component';
import { CookiePolicyComponent } from './root-elements/cookie-policy/cookie-policy.component';
import { MailingListComponent } from './root-elements/mailing-list/mailing-list.component';
import { Opera24Component } from './root-elements/hosting/opera24/opera24.component';
import { Combinatorics24Component } from './root-elements/hosting/combinatorics24/combinatorics24.component';
import { WCC24Component } from './root-elements/hosting/wcc24/wcc24.component';

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
import { DiconoDiNoiComponent } from './associazione/notizie/dicono-di-noi/dicono-di-noi.component';
import { NotizieComponent } from './associazione/notizie/notizie.component';

// welcome
import { WelcomeComponent } from './welcome/welcome.component';
import { PerAziendeComponent } from './welcome/per-aziende/per-aziende.component';
import { PerAccademiaComponent } from './welcome/per-accademia/per-accademia.component';
import { PerStudentiComponent } from './welcome/per-studenti/per-studenti.component';
import { PerCuriosiComponent } from './welcome/per-curiosi/per-curiosi.component';
import { PerInsegnantiComponent } from './welcome/per-insegnanti/per-insegnanti.component';
import { HomeWelcomeComponent } from './welcome/home-welcome/home-welcome.component';

// attivita
import { AttivitaComponent } from './attivita/attivita.component';
import { HomeAttivitaComponent } from './attivita/home-attivita/home-attivita.component';
import { EditoriaComponent } from './attivita/editoria/editoria.component';
import { Centotesi20082017Component } from './attivita/editoria/centotesi20082017/centotesi20082017.component';
import { Centotesi20142023Component } from './attivita/editoria/centotesi20142023/centotesi20142023.component';
import { BlockchainSmartContractComponent } from './attivita/corsi/blockchain-smart-contract/blockchain-smart-contract.component';
import { Trends22Component } from './attivita/corsi/trends22/trends22.component';
import { Trends22bisComponent } from './attivita/corsi/trends22/trends22bis/trends22bis.component';
import { Trends24Component } from './attivita/corsi/trends24/trends24.component';
import { CorsiComponent } from './attivita/corsi/corsi.component';
import { Trends23Component } from './attivita/corsi/trends23/trends23.component';
import { SeminariComponent } from './attivita/seminari/seminari.component';
import { DecifrisEruditorumComponent } from './attivita/seminari/decifris-eruditorum/decifris-eruditorum.component';
import { DecifrisHistoriaeComponent } from './attivita/seminari/decifris-historiae/decifris-historiae.component';
import { DecifrisAthesisComponent } from './attivita/seminari/decifris-athesis/decifris-athesis.component';
import { AgoraComponent } from './attivita/seminari/agora/agora.component';
import { DecifrisAugustaeTaurinorumComponent } from './attivita/seminari/decifris-augustae-taurinorum/decifris-augustae-taurinorum.component';
import { DecifrisScholaMediolanensibusComponent } from './attivita/seminari/decifris-schola-mediolanensibus/decifris-schola-mediolanensibus.component';
import { DecifrisScholaLatinaComponent } from './attivita/seminari/decifris-schola-latina/decifris-schola-latina.component';
import { CifrisChainComponent } from './attivita/seminari/cifris-chain/cifris-chain.component';
import { QuantumCifrisComponent } from './attivita/seminari/quantum-cifris/quantum-cifris.component';
import { CifrisCloudComponent } from './attivita/seminari/cifris-cloud/cifris-cloud.component';
import { PqCifrisComponent } from './attivita/seminari/pq-cifris/pq-cifris.component';
import { MathCifrisComponent } from './attivita/seminari/math-cifris/math-cifris.component';
import { IniziativeDivulgativeComponent } from './attivita/iniziative-divulgative/iniziative-divulgative.component';
import { GareCrittograficheComponent } from './attivita/gare-crittografiche/gare-crittografiche.component';
import { EventiComponent } from './attivita/eventi/eventi.component';
// import { EventiPubbliciComponent } from './attivita/eventi/eventi-pubblici/eventi-pubblici.component';
import { DidatticaUniversitariaComponent } from './attivita/didattica-universitaria/didattica-universitaria.component';

// errori e simili
import { Error403Component } from './errors/error403/error403.component';
import { Error418Component } from './errors/error418/error418.component';
import { Error404Component } from './errors/error404/error404.component';
import { TestComponent } from './test/test.component';

// cifris24
import { Cifris2024Component } from './attivita/eventi/cifris/cifris2024/cifris2024.component';
import { CallForPapersComponent24 } from './attivita/eventi/cifris/cifris2024/call-for-papers/call-for-papers.component';
import { CallForWorkshopsComponent24 } from './attivita/eventi/cifris/cifris2024/call-for-workshops/call-for-workshops.component';
import { HomeCifris24Component } from './attivita/eventi/cifris/cifris2024/home-cifris24/home-cifris24.component';
import { PaymentResultComponent24 } from './attivita/eventi/cifris/cifris2024/payment-result/payment-result.component';
import { ProceedingsComponent24 } from './attivita/eventi/cifris/cifris2024/proceedings/proceedings.component';
import { ProgramCommitteeComponent24 } from './attivita/eventi/cifris/cifris2024/program-committee/program-committee.component';
import { ProgramComponent24 } from './attivita/eventi/cifris/cifris2024/program/program.component';
import { RegistrationComponent24 } from './attivita/eventi/cifris/cifris2024/registration/registration.component';
import { VenueAccomodationComponent24 } from './attivita/eventi/cifris/cifris2024/venue-accomodation/venue-accomodation.component';
import { RegistrationDetailsComponent24 } from './attivita/eventi/cifris/cifris2024/registration-details/registration-details.component';

// cifris23
import { Cifris2023Component } from './attivita/eventi/cifris/cifris2023/cifris2023.component';
import { CallForPapersComponent } from './attivita/eventi/cifris/cifris2023/call-for-papers/call-for-papers.component';
import { CallForWorkshopsComponent } from './attivita/eventi/cifris/cifris2023/call-for-workshops/call-for-workshops.component';
import { HomeCifris23Component } from './attivita/eventi/cifris/cifris2023/home-cifris23/home-cifris23.component';
import { PaymentResultComponent } from './attivita/eventi/cifris/cifris2023/payment-result/payment-result.component';
import { ProceedingsComponent } from './attivita/eventi/cifris/cifris2023/proceedings/proceedings.component';
import { ProgramCommitteeComponent } from './attivita/eventi/cifris/cifris2023/program-committee/program-committee.component';
import { ProgramComponent } from './attivita/eventi/cifris/cifris2023/program/program.component';
import { RegistrationComponent } from './attivita/eventi/cifris/cifris2023/registration/registration.component';

// koine
import { HomeKoineComponent } from './attivita/editoria/koine/home-koine/home-koine.component';
import { KoineComponent } from './attivita/editoria/koine/koine.component';
import { Vol1Component } from './attivita/editoria/koine/vol1/vol1.component';
import { Vol2Component } from './attivita/editoria/koine/vol2/vol2.component';
import { ArticlesAndVolumesComponent } from './attivita/editoria/koine/articles-and-volumes/articles-and-volumes.component';
import { EditorialBoardComponent } from './attivita/editoria/koine/editorial-board/editorial-board.component';


// importante mettere come children tutti quelli che condividono la stessa sidebar, dato
// che viene gestita da <router-outlet> che ogni pagina parente ha
const routes: Routes = [
	// home e miscellanea
	{
		path: "", component: RootElementsComponent, children: [
			{ path: "", component: HomeComponent },
			{ path: "contatti", component: ContattiComponent },
			{ path: "cookie-policy", component: CookiePolicyComponent },
			{ path: "mailing-list", component: MailingListComponent },
			{ path: "opera24", component: Opera24Component },
			{ path: "combinatorics24", component: Combinatorics24Component },
			{ path: "wcc24", component: WCC24Component },
		]
	},

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
			{ path: "dicono-di-noi", component: DiconoDiNoiComponent },
			{ path: "notizie", component: NotizieComponent },
		]
	},

	// path ./welcome
	{
		path: "welcome", component: WelcomeComponent, children: [
			{ path: "", component: HomeWelcomeComponent },
			{ path: "ricercatori", component: PerAccademiaComponent },
			{ path: "azienda", component: PerAziendeComponent },
			{ path: "insegnanti", component: PerInsegnantiComponent },
			{ path: "curiosi", component: PerCuriosiComponent },
			{ path: "studenti", component: PerStudentiComponent },
		]
	},

	// path ./attivita
	{
		path: "attivita", component: AttivitaComponent, children: [
			{ path: "", component: HomeAttivitaComponent },
			// editoria
			{ path: "editoria", component: EditoriaComponent },
			{ path: "centotesi-2008-2017", component: Centotesi20082017Component },
			{ path: "centotesi-2014-2023", component: Centotesi20142023Component },
			// { path: 'koine', redirectTo: '/koine/home', pathMatch: 'full' },
			// corsi
			{ path: 'corsi', component: CorsiComponent },
			{ path: 'trends24', component: Trends24Component },
			{ path: 'trends23', component: Trends23Component },
			{ path: 'trends22bis', component: Trends22bisComponent },
			{ path: 'trends22', component: Trends22Component },
			{ path: "y2y-blockchain", component: BlockchainSmartContractComponent },
			{ path: "seminari", component: SeminariComponent },
			{ path: "eruditorum", component: DecifrisEruditorumComponent },
			{ path: "decifris-historiae", component: DecifrisHistoriaeComponent },
			{ path: "decifris-athesis", component: DecifrisAthesisComponent },
			{ path: "decifris-agora", component: AgoraComponent },
			{ path: "decifris-augustaeTaurinorum", component: DecifrisAugustaeTaurinorumComponent },
			{ path: "decifris-scholaLatina", component: DecifrisScholaLatinaComponent },
			{ path: "decifris-mediolanensibus", component: DecifrisScholaMediolanensibusComponent },
			{ path: 'cifrischain', component: CifrisChainComponent },
			{ path: 'quantumcifris', component: QuantumCifrisComponent },
			{ path: 'cifriscloud', component: CifrisCloudComponent },
			{ path: 'mathcifris', component: MathCifrisComponent },
			{ path: 'pqcifris', component: PqCifrisComponent },
			// eventi
			{ path: "eventi", component: EventiComponent },
			{ path: 'cifris23', redirectTo: '/cifris23', pathMatch: 'full' },
			{ path: 'cifris24', redirectTo: '/cifris24', pathMatch: 'full' },
			{ path: "gare-crittografiche", component: GareCrittograficheComponent },
			// miscellanea
			{ path: "iniziative-divulgative", component: IniziativeDivulgativeComponent },
			{ path: "didattica-universitaria", component: DidatticaUniversitariaComponent },

		]
	},

	// cifris 24
	{
		path: "cifris24", component: Cifris2024Component, children: [
			{ path: "", component: HomeCifris24Component },
			{ path: "venue", component: VenueAccomodationComponent24 },
			{ path: "call-for-papers", component: CallForPapersComponent24 },
			{ path: "call-for-workshops", component: CallForWorkshopsComponent24 },
			{ path: "program-committee", component: ProgramCommitteeComponent24 },
			{ path: "registration", component: RegistrationComponent24 },
			{ path: "registration-details", component: RegistrationDetailsComponent24 },
			{ path: "program", component: ProgramComponent24 },
			{ path: "proceedings", component: ProceedingsComponent24 },
			{ path: "payment-result", component: PaymentResultComponent24 },
		]
	},

	// cifris 23
	{
		path: "cifris23", component: Cifris2023Component, children: [
			{ path: "", component: HomeCifris23Component },
			{ path: "call-for-papers", component: CallForPapersComponent },
			{ path: "call-for-workshops", component: CallForWorkshopsComponent },
			{ path: "program-committee", component: ProgramCommitteeComponent },
			{ path: "registration", component: RegistrationComponent },
			{ path: "program", component: ProgramComponent },
			{ path: "proceedings", component: ProceedingsComponent },
			{ path: "payment-result", component: PaymentResultComponent },
		]
	},

	// koine
	{
		path: "koine", component: KoineComponent, children: [
			{ path: "", component: HomeKoineComponent },
			{ path: "articles-and-volumes", component: ArticlesAndVolumesComponent },
			{ path: "editorial-board", component: EditorialBoardComponent },
			{ path: "vol1", component: Vol1Component },
			{ path: "vol2", component: Vol2Component },
		]
	},

	{ path: 'cifris/test', component: TestComponent },

	// Redirect per i percorsi cambiati
	{ path: 'dicono-di-noi', redirectTo: '/associazione/dicono-di-noi', pathMatch: 'full' },
	{ path: 'notizie', redirectTo: '/associazione/notizie', pathMatch: 'full' },
	{ path: 'cifris23/homeCifris23', redirectTo: '/cifris23', pathMatch: 'full' },
	{ path: 'cifris24/homeCifris24', redirectTo: '/cifris24', pathMatch: 'full' },
	{ path: 'advisoryboard/borse', redirectTo: '/opportunita', pathMatch: 'full' },
	{ path: 'centotesi2008-2017', redirectTo: '/attivita/centotesi-2008-2017', pathMatch: 'full' },
	{ path: 'centotesi2014-2023', redirectTo: '/attivita/centotesi-2014-2023', pathMatch: 'full' },
	{ path: 'organiDirettivi', redirectTo: '/associazione/organi-direttivi', pathMatch: 'full' },
	{ path: 'advisoryBoard', redirectTo: '/associazione/advisory-board', pathMatch: 'full' },
	{ path: 'posizioniRicerca', redirectTo: '/associazione/posizioni-ricerca', pathMatch: 'full' },
	{ path: 'stageTirocini', redirectTo: '/associazione/stage-tirocini', pathMatch: 'full' },
	{ path: 'associarsi-benemeriti', redirectTo: '/associazione/associarsi-benemeriti', pathMatch: 'full' },
	{ path: 'associarsi', redirectTo: '/associazione/associarsi', pathMatch: 'full' },
	{ path: 'deCifrisHistoriae', redirectTo: '/attivita/decifris-historiae', pathMatch: 'full' },
	{ path: 'deCifrisAthesis', redirectTo: '/attivita/decifris-athesis', pathMatch: 'full' },
	{ path: 'deCifrisAgora', redirectTo: '/attivita/decifris-agora', pathMatch: 'full' },
	{ path: 'deCifrisAugustaeTaurinorum', redirectTo: '/attivita/decifris-augustaeTaurinorum', pathMatch: 'full' },
	{ path: 'deCifrisScholaLatina', redirectTo: '/attivita/decifris-scholaLatina', pathMatch: 'full' },
	{ path: 'deCifrisMediolanensibus', redirectTo: '/attivita/decifris-mediolanensibus', pathMatch: 'full' },
	{ path: 'cifrisChain', redirectTo: '/attivita/cifrischain', pathMatch: 'full' },
	{ path: 'quantumCifris', redirectTo: '/attivita/quantumcifris', pathMatch: 'full' },
	{ path: 'cifrisCloud', redirectTo: '/attivita/cifriscloud', pathMatch: 'full' },
	{ path: 'mathCifris', redirectTo: '/attivita/mathcifris', pathMatch: 'full' },
	{ path: 'PQCifris', redirectTo: '/attivita/pqcifris', pathMatch: 'full' },
	{ path: 'iniziativeDivulgative', redirectTo: '/attivita/iniziative-divulgative', pathMatch: 'full' },
	{ path: 'gareCrittografiche', redirectTo: '/attivita/gare-crittografiche', pathMatch: 'full' },
	{ path: 'didatticaUniversitaria', redirectTo: '/attivita/didattica-universitaria', pathMatch: 'full' },
	{ path: 'opportunita', redirectTo: '/attivita/opportunita', pathMatch: 'full' },
	{ path: 'eventiPubblici', redirectTo: '/attivita/eventiPubblici', pathMatch: 'full' },
	{ path: 'sessioni', redirectTo: '/attivita/sessioni', pathMatch: 'full' },
	{ path: 'curiosi', redirectTo: '/welcome/curiosi', pathMatch: 'full' },
	{ path: 'scuola', redirectTo: '/welcome/insegnanti', pathMatch: 'full' },
	{ path: 'studenti', redirectTo: '/welcome/studenti', pathMatch: 'full' },
	{ path: 'aziende', redirectTo: '/welcome/azienda', pathMatch: 'full' },
	{ path: 'azienda', redirectTo: '/welcome/azienda', pathMatch: 'full' },
	{ path: 'accademia', redirectTo: '/welcome/ricercatori', pathMatch: 'full' },
	{ path: 'cryptowars/2011/classica', redirectTo: '/attivita/cryptowars/2011/classica', pathMatch: 'full' },
	{ path: 'cryptowars/2011/pubblica', redirectTo: '/attivita/cryptowars/2011/pubblica', pathMatch: 'full' },
	{ path: 'cryptowars/2011/simmetrica', redirectTo: '/attivita/cryptowars/2011/simmetrica', pathMatch: 'full' },


	// Rotte per gli errori
	{ path: '403', component: Error403Component },
	{ path: '418', component: Error418Component },
	{ path: '**', component: Error404Component },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }

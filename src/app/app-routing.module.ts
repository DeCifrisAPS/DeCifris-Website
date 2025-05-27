import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
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
import { ScolarshipsComponent } from './associazione/scolarships/scolarships.component';

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
import { Centotesi20172024Component } from './attivita/editoria/centotesi20172024/centotesi20172024.component';
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
import { Ntc24Component } from './attivita/eventi/cifris/cifris2024/single-pages/workshops/ntc24/ntc24.component';
import { SymcryptComponent24 } from './attivita/eventi/cifris/cifris2024/single-pages/workshops/symcrypt/symcrypt.component';
import { Workshops24Component } from './attivita/eventi/cifris/cifris2024/single-pages/workshops/workshops24.component';
import { Fcr24Component } from './attivita/eventi/cifris/cifris2024/single-pages/workshops/fcr24/fcr24.component';
import { Qcifris24Component } from './attivita/eventi/cifris/cifris2024/single-pages/workshops/qcifris24/qcifris24.component';
import { Readpqc24Component } from './attivita/eventi/cifris/cifris2024/single-pages/workshops/readpqc24/readpqc24.component';
import { Tac24Component } from './attivita/eventi/cifris/cifris2024/single-pages/workshops/tac24/tac24.component';
import { Codemath24Component } from './attivita/eventi/cifris/cifris2024/single-pages/workshops/codemath24/codemath24.component';
import { InstitutionalSession24Component } from './attivita/eventi/cifris/cifris2024/single-pages/main-conference24/institutional-session24/institutional-session24.component';
import { MainConference24Component } from './attivita/eventi/cifris/cifris2024/single-pages/main-conference24/main-conference24.component';
import { ScientificSession24Component } from './attivita/eventi/cifris/cifris2024/single-pages/main-conference24/scientific-session24/scientific-session24.component';
import { Cpsid24Component } from './attivita/eventi/cifris/cifris2024/single-pages/workshops/cpsid24/cpsid24.component';
import { Cifriscloud24Component } from './attivita/eventi/cifris/cifris2024/single-pages/workshops/cifriscloud24/cifriscloud24.component';
import { Vol3Component } from './attivita/editoria/koine/vol3/vol3.component';
import { Vol4Component } from './attivita/editoria/koine/vol4/vol4.component';
import { SitemapComponent } from './root-elements/sitemap/sitemap.component';
import { SocialDinner24Component } from './attivita/eventi/cifris/cifris2024/social-dinner24/social-dinner24.component';
import { TimelineComponent } from './associazione/organi-direttivi/timeline/timeline.component';
import { Ixh24Component } from './root-elements/hosting/ixh24/ixh24.component';
import { ArticoloComponent } from './attivita/editoria/articolo/articolo.component';
import { articoloGuard } from './attivita/editoria/articolo/articolo.guard';
import { LicenseComponent } from './attivita/editoria/koine/license/license.component';
import { Fcir25Component } from './root-elements/hosting/fcir25/fcir25.component';
import { W25Component } from './root-elements/w25/w25.component';
import { AziendeComponent } from './associazione/aziende/aziende.component';
import { CryptowarsComponent } from './attivita/gare-crittografiche/cryptowars/cryptowars.component';
import { Cryptowars2011Component } from './attivita/gare-crittografiche/cryptowars/cryptowars2011/cryptowars2011.component';
import { Cryptowars2020Component } from './attivita/gare-crittografiche/cryptowars/cryptowars2020/cryptowars2020.component';
import { Cryptowars2021Component } from './attivita/gare-crittografiche/cryptowars/cryptowars2021/cryptowars2021.component';
import { Cryptowars2019Component } from './attivita/gare-crittografiche/cryptowars/cryptowars2019/cryptowars2019.component';
import { Cryptowars2018Component } from './attivita/gare-crittografiche/cryptowars/cryptowars2018/cryptowars2018.component';
import { Cryptowars2016Component } from './attivita/gare-crittografiche/cryptowars/cryptowars2016/cryptowars2016.component';
import { Cryptowars2015Component } from './attivita/gare-crittografiche/cryptowars/cryptowars2015/cryptowars2015.component';
import { Cryptowars2014Component } from './attivita/gare-crittografiche/cryptowars/cryptowars2014/cryptowars2014.component';
import { Cifris2025Component } from './attivita/eventi/cifris/cifris2025/cifris2025.component';
import { HomeCifris25Component } from './attivita/eventi/cifris/cifris2025/home-cifris25/home-cifris25.component';
import { VenueAccomodationComponent25 } from './attivita/eventi/cifris/cifris2025/venue-accomodation25/venue-accomodation25.component';
import { CallForPapersComponent25 } from './attivita/eventi/cifris/cifris2025/call-for-papers/call-for-papers.component';
import { CallForWorkshopsComponent25 } from './attivita/eventi/cifris/cifris2025/call-for-workshops/call-for-workshops.component';
import { ProgramCommitteeComponent25 } from './attivita/eventi/cifris/cifris2025/program-committee/program-committee.component';
import { RegistrationComponent25 } from './attivita/eventi/cifris/cifris2025/registration/registration.component';
import { ProgramComponent25 } from './attivita/eventi/cifris/cifris2025/program/program.component';
import { ProceedingsComponent25 } from './attivita/eventi/cifris/cifris2025/proceedings/proceedings.component';
import { PaymentResultComponent25 } from './attivita/eventi/cifris/cifris2025/payment-result/payment-result.component';
import { SocialDinner25Component } from './attivita/eventi/cifris/cifris2025/social-dinner25/social-dinner25.component';
import { Vol5Component } from './attivita/editoria/koine/vol5/vol5.component';


// importante mettere come children tutti quelli che condividono la stessa sidebar, dato
// che viene gestita dal <router-outlet> che ogni pagina parente ha
const routes: Routes = [
	// home e miscellanea
	{
		path: "", component: RootElementsComponent, children: [
			{
				path: "", component: HomeComponent, data: {
					title: 'DeCifris home',
					meta: [
						{ name: 'description', content: 'De Cifris APS home page' },
						{ property: 'og:title', content: 'De Cifris APS home page' }
					]
				}
			},
			{
				path: "contatti", component: ContattiComponent, data: {
					title: 'Contatti',
					meta: [
						{ name: 'description', content: 'Contattaci!' },
						{ property: 'og:title', content: 'Contattaci!' }
					]
				}
			},
			{
				path: "cookie-policy", component: CookiePolicyComponent, data: {
					title: 'Cookie policy',
					meta: [
						{ name: 'description', content: 'Cookie policy' },
						{ property: 'og:title', content: 'Cookie policy' }
					]
				}
			},
			{
				path: "mailing-list", component: MailingListComponent, data: {
					title: 'Mailing list',
					meta: [
						{ name: 'description', content: 'Le nostre mailing list' },
						{ property: 'og:title', content: 'Le nostre mailing list' }
					]
				}
			},
			{
				path: "opera24", component: Opera24Component, data: {
					title: 'Opera24',
					meta: [
						{ name: 'description', content: 'Opera 2024, sponsored by DeCifris' },
						{ property: 'og:title', content: 'Opera 2024, sponsored by DeCifris' }
					]
				}
			},
			{
				path: "fcir25", component: Fcir25Component, data: {
					title: 'FCiR25',
					meta: [
						{ name: 'description', content: 'Financial Cryptography in Rome 2025' },
						{ property: 'og:title', content: 'Financial Cryptography in Rome 2025' }
					]
				}
			},
			{
				path: "w25", component: W25Component, data: {
					title: 'w25',
					meta: [
						{ name: 'description', content: '2025 workshop on encryption techniques' },
						{ property: 'og:title', content: '2025 workshop on encryption techniques' }
					]
				}
			},
			{
				path: "combinatorics24", component: Combinatorics24Component, data: {
					title: 'Combinatorics24',
					meta: [
						{ name: 'description', content: 'Combinatorics 2024, sponsored by DeCifris' },
						{ property: 'og:title', content: 'Combinatorics 2024, sponsored by DeCifris' }
					]
				}
			},
			{
				path: "wcc24", component: WCC24Component, data: {
					title: 'WCC24',
					meta: [
						{ name: 'description', content: 'WCC 2024, sponsored by DeCifris' },
						{ property: 'og:title', content: 'WCC 2024, sponsored by DeCifris' }
					]
				}
			},
			{
				path: "ixh24", component: Ixh24Component, data: {
					title: 'IXH24 - Italian XRPL Hackathon 2024',
					meta: [
						{ name: 'description', content: 'IXH24: Italian XRPL Hackathon 2024, organised by DeCifris' },
						{ property: 'og:title', content: 'IXH24: Italian XRPL Hackathon 2024, organised by DeCifris' }
					]
				}
			},
			{
				path: "sitemap", component: SitemapComponent, data: {
					title: 'Sitemap',
					meta: [
						{ name: 'description', content: 'Sitemap DeCifris' },
						{ property: 'og:title', content: 'Sitemap DeCifris' }
					]
				}
			},
		]
	},

	// path ./associazione
	{
		path: "associazione", component: AssociazioneComponent, children: [
			{ path: "", component: HomeAssociazioneComponent, data: { title: 'Associazione' } },
			{ path: "scholarships", component: ScolarshipsComponent, data: { title: 'Scolarships' } },
			{ path: "statuto", component: StatutoComponent, data: { title: 'Statuto' } },
			{ path: "regolamento", component: RegolamentoComponent, data: { title: 'Regolamento' } },
			{ path: "affiliati-partner", component: AziendeComponent, data: { title: 'Affiliati e partner' } },
			{ path: "organi-direttivi", component: OrganiDirettiviComponent, data: { title: 'Organi Direttivi' } },
			{ path: "advisory-board", component: AdvisoryBoardComponent, data: { title: 'Advisory Board' } },
			{ path: "posizioni-ricerca", component: PosizioniRicercaComponent, data: { title: 'Posizioni di ricerca' } },
			{ path: "stage-tirocini", component: StageTirociniComponent, data: { title: 'Stage e tirocini' } },
			{ path: "associarsi-benemeriti", component: BenemeritiComponent, data: { title: 'Associarsi come Benemeriti' } },
			{ path: "associarsi", component: AssociarsiComponent, data: { title: 'Associarsi' } },
			{ path: "obiettivi", component: ObiettiviComponent, data: { title: 'Obiettivi' } },
			{ path: "dicono-di-noi", component: DiconoDiNoiComponent, data: { title: 'Dicono di noi' } },
			{ path: "notizie", component: NotizieComponent, data: { title: 'Notizie' } },
			{ path: "timeline", component: TimelineComponent, data: { title: 'TIMELINE' } },
		], data: {
			title: 'De Cifris APS',
			meta: [
				{ name: 'description', content: "De Componendis Cifris Associazione di Promozione Sociale" },
				{ property: 'og:title', content: "De Componendis Cifris Associazione di Promozione Sociale" }
			]
		}
	},

	// path ./welcome
	{
		path: "welcome", component: WelcomeComponent, children: [
			{ path: "", component: HomeWelcomeComponent, data: { title: 'Welcome!' } },
			{ path: "ricercatori", component: PerAccademiaComponent, data: { title: 'Fai ricerca?' } },
			{ path: "azienda", component: PerAziendeComponent, data: { title: 'Lavori in azienda?' } },
			{ path: "insegnanti", component: PerInsegnantiComponent, data: { title: 'Sei insegnante?' } },
			{ path: "curiosi", component: PerCuriosiComponent, data: { title: 'Ti incuriosisce?' } },
			{ path: "studenti", component: PerStudentiComponent, data: { title: 'Studi?' } },
		], data: {
			title: 'Welcome!',
			meta: [
				{ name: 'description', content: "Welcome to De Cifris" },
				{ property: 'og:title', content: "Welcome to De Cifris" }
			]
		}
	},

	// path ./attivita
	{
		path: "attivita", component: AttivitaComponent, children: [
			{ path: "", component: HomeAttivitaComponent, data: { title: 'Attività' } },
			// editoria
			{ path: "editoria", component: EditoriaComponent, data: { title: 'Editoria' } },
			{ path: "centotesi-2008-2017", component: Centotesi20082017Component, data: { title: 'Cento Tesi 2008-2017' } },
			{ path: "centotesi-2017-2024", component: Centotesi20172024Component, data: { title: 'Cento Tesi 2017-2024' } },
			// { path: 'koine', redirectTo: '/koine/home', pathMatch: 'full' },
			// corsi
			{ path: 'corsi', component: CorsiComponent, data: { title: 'Corsi' } },
			{
				path: 'trends24', component: Trends24Component, data: {
					title: 'De Cifris Trends 2024',
					meta: [
						{ name: 'description', content: "Trends24 - the French Magisterium, by De Cifris" },
						{ property: 'og:title', content: "Trends24 - the French Magisterium, by De Cifris" }
					]
				}
			},
			{ path: 'trends23', component: Trends23Component, data: { title: 'De Cifris Trends23' } },
			{ path: 'trends22bis', component: Trends22bisComponent, data: { title: 'De Cifris Trends22 bis' } },
			{ path: 'trends22', component: Trends22Component, data: { title: 'De Cifris Trends22' } },
			{ path: "y2y-blockchain", component: BlockchainSmartContractComponent, data: { title: 'De Cifris Y2Y: Blockchain & Smart Contracts' } },
			{ path: "seminari", component: SeminariComponent, data: { title: 'Seminari' } },
			{ path: "eruditorum", component: DecifrisEruditorumComponent, data: { title: 'De Cifris Eruditorum' } },
			{ path: "decifris-historiae", component: DecifrisHistoriaeComponent, data: { title: 'De Cifris Historiae' } },
			{ path: "decifris-athesis", component: DecifrisAthesisComponent, data: { title: 'De Cifris Athesis' } },
			{ path: "decifris-agora", component: AgoraComponent, data: { title: 'De Cifris Agora' } },
			{ path: "decifris-augustaetaurinorum", component: DecifrisAugustaeTaurinorumComponent, data: { title: 'De Cifris Augustae Taurinorum' } },
			{ path: "decifris-scholalatina", component: DecifrisScholaLatinaComponent, data: { title: 'De Cifris Schola Latina' } },
			{ path: "decifris-mediolanensibus", component: DecifrisScholaMediolanensibusComponent, data: { title: 'De Cifris Schola Mediolanensibus' } },
			{ path: 'cifrischain', component: CifrisChainComponent, data: { title: 'CifrisChain' } },
			{ path: 'quantumcifris', component: QuantumCifrisComponent, data: { title: 'QuantumCifris' } },
			{ path: 'cifriscloud', component: CifrisCloudComponent, data: { title: 'CifrisCloud' } },
			{ path: 'mathcifris', component: MathCifrisComponent, data: { title: 'MathCifris' } },
			{ path: 'pqcifris', component: PqCifrisComponent, data: { title: 'PQCifris' } },
			// cryptowars
			{ path: 'cryptowars', component: CryptowarsComponent, data: { title: 'Cryptowars' } },
			{ path: "cryptowars/2021", component: Cryptowars2021Component, data: { title: 'Cryptowars 2021' } },
			{ path: "cryptowars/2020", component: Cryptowars2020Component, data: { title: 'Cryptowars 2020' } },
			{ path: "cryptowars/2019", component: Cryptowars2019Component, data: { title: 'Cryptowars 2019' } },
			{ path: "cryptowars/2018", component: Cryptowars2018Component, data: { title: 'Cryptowars 2018' } },
			{ path: "cryptowars/2016", component: Cryptowars2016Component, data: { title: 'Cryptowars 2016' } },
			{ path: "cryptowars/2015", component: Cryptowars2015Component, data: { title: 'Cryptowars 2015' } },
			{ path: "cryptowars/2014", component: Cryptowars2014Component, data: { title: 'Cryptowars 2014' } },
			{ path: "cryptowars/2011", component: Cryptowars2011Component, data: { title: 'Cryptowars 2011' } },
			// eventi
			{ path: "eventi", component: EventiComponent, data: { title: 'De Cifris: eventi' } },
			{ path: 'cifris23', redirectTo: '/cifris23', pathMatch: 'full' },
			{ path: 'cifris24', redirectTo: '/cifris24', pathMatch: 'full' },
			{ path: "gare-crittografiche", component: GareCrittograficheComponent },
			// miscellanea
			{ path: "iniziative-divulgative", component: IniziativeDivulgativeComponent, data: { title: 'Iniziative divulgative' } },
			{ path: "didattica-universitaria", component: DidatticaUniversitariaComponent, data: { title: 'Didattica universitaria' } },

		], data: {
			title: 'Attività',
			meta: [
				{ name: 'description', content: "De Cifris: our activities" },
				{ property: 'og:title', content: "De Cifris: our activities" }
			]
		}
	},

	// cifris 25
	{
		path: "test/cifris25", component: Cifris2025Component, children: [
			{ path: "", component: HomeCifris25Component, data: { title: 'CIFRIS25' } },
			{ path: "venue", component: VenueAccomodationComponent25, data: { title: 'CIFRIS25: Venue' } },
			{ path: "call-for-papers", component: CallForPapersComponent25, data: { title: 'CIFRIS25: Call for papers' } },
			{ path: "call-for-workshops", component: CallForWorkshopsComponent25, data: { title: 'CIFRIS25: Call for workshops' } },
			{ path: "program-committee", component: ProgramCommitteeComponent25, data: { title: 'CIFRIS25: Program Committee' } },
			{ path: "registration", component: RegistrationComponent25, data: { title: 'CIFRIS25: Registration' } },
			{ path: "program", component: ProgramComponent25, data: { title: 'CIFRIS25: Program' } },
			{ path: "proceedings", component: ProceedingsComponent25, data: { title: 'CIFRIS25: Proceedings' } },
			{ path: "payment-result", component: PaymentResultComponent25, data: { title: 'Payment result' } },
			{ path: "dinner", component: SocialDinner25Component, data: { title: 'CIFRIS25: Social Dinner' } },
		], data: {
			title: 'CIFRIS25',
			meta: [
				{ name: 'description', content: "CIFRIS25 - the Second Italian Conference, by De Cifris & Banca d'Italia" },
				{ property: 'og:title', content: "CIFRIS25 - the Second Italian Conference, by De Cifris & Banca d'Italia" }
			]
		}
	},

	// cifris 24
	{
		path: "cifris24", component: Cifris2024Component, children: [
			{ path: "", component: HomeCifris24Component, data: { title: 'CIFRIS24' } },
			{ path: "venue", component: VenueAccomodationComponent24, data: { title: 'CIFRIS24: Venue' } },
			{ path: "call-for-papers", component: CallForPapersComponent24, data: { title: 'CIFRIS24: Call for papers' } },
			{ path: "call-for-workshops", component: CallForWorkshopsComponent24, data: { title: 'CIFRIS24: Call for workshops' } },
			{ path: "program-committee", component: ProgramCommitteeComponent24, data: { title: 'CIFRIS24: Program Committee' } },
			{ path: "registration", component: RegistrationComponent24, data: { title: 'CIFRIS24: Registration' } },
			{ path: "registration-details", component: RegistrationDetailsComponent24, data: { title: 'CIFRIS24: Registration' } },
			{ path: "program", component: ProgramComponent24, data: { title: 'CIFRIS24: Program' } },
			{ path: "proceedings", component: ProceedingsComponent24, data: { title: 'CIFRIS24: Proceedings' } },
			{ path: "payment-result", component: PaymentResultComponent24, data: { title: 'Payment result' } },
			{ path: "ntc24", component: Ntc24Component, data: { title: 'CIFRIS24: NTC24' } },
			{ path: "symcrypt24", component: SymcryptComponent24, data: { title: 'CIFRIS24: Symcrypt24' } },
			{ path: "workshops", component: Workshops24Component, data: { title: 'CIFRIS24:Workshops' } },
			{ path: "fcir24", component: Fcr24Component, data: { title: 'CIFRIS24: FCR24' } },
			{ path: "qcifris24", component: Qcifris24Component, data: { title: 'CIFRIS24: QCifris24' } },
			{ path: "readpqc24", component: Readpqc24Component, data: { title: 'CIFRIS24: ReadPQC24' } },
			{ path: "tac24", component: Tac24Component, data: { title: 'CIFRIS24: TAC24' } },
			{ path: "codemath24", component: Codemath24Component, data: { title: 'CIFRIS24: Codemath24' } },
			{ path: "cpsid24", component: Cpsid24Component, data: { title: 'CIFRIS24: CPSID24' } },
			{ path: "cifriscloud24", component: Cifriscloud24Component, data: { title: 'CIFRIS24: CifrisCloud24' } },
			{ path: "institutional-session", component: InstitutionalSession24Component, data: { title: 'CIFRIS24: Institutional Session' } },
			{ path: "scientific-session", component: ScientificSession24Component, data: { title: 'CIFRIS24: Scientific Session' } },
			{ path: "dinner", component: SocialDinner24Component, data: { title: 'CIFRIS24: Social Dinner' } },
		], data: {
			title: 'CIFRIS24',
			meta: [
				{ name: 'description', content: "CIFRIS24 - the Second Italian Conference, by De Cifris & Banca d'Italia" },
				{ property: 'og:title', content: "CIFRIS24 - the Second Italian Conference, by De Cifris & Banca d'Italia" }
			]
		}
	},

	// cifris 23
	{
		path: "cifris23", component: Cifris2023Component, children: [
			{ path: "", component: HomeCifris23Component, data: { title: 'CIFRIS23' } },
			{ path: "call-for-papers", component: CallForPapersComponent, data: { title: 'CIFRIS23: Call for papers' } },
			{ path: "call-for-workshops", component: CallForWorkshopsComponent, data: { title: 'CIFRIS23: Call for workshops' } },
			{ path: "program-committee", component: ProgramCommitteeComponent, data: { title: 'CIFRIS23: Program committee' } },
			{ path: "registration", component: RegistrationComponent, data: { title: 'CIFRIS23: Registration' } },
			{ path: "program", component: ProgramComponent, data: { title: 'CIFRIS23: Program' } },
			{ path: "proceedings", component: ProceedingsComponent, data: { title: 'CIFRIS23: Proceedings' } },
			{ path: "payment-result", component: PaymentResultComponent, data: { title: 'payment result' } },
		], data: {
			title: 'CIFRIS23',
			meta: [
				{ name: 'description', content: 'CIFRIS23 - the First Italian Conference, by De Cifris & CONSOB' },
				{ property: 'og:title', content: 'CIFRIS23 - the First Italian Conference, by De Cifris & CONSOB' }
			]
		}
	},

	// koine
	{
		path: "koine", component: KoineComponent, children: [
			{
				path: "", component: HomeKoineComponent, data: {
					title: 'De Cifris Koine',
					meta: [
						{ name: 'description', content: 'De Cifris Koine, by De Cifris Press' },
						{ property: 'og:title', content: 'De Cifris Koine, by De Cifris Press' }
					]
				}
			},
			{
				path: "articles-and-volumes", component: ArticlesAndVolumesComponent, data: {
					title: 'Volumes',
					meta: [
						{ name: 'description', content: 'De Cifris Koine: articles and volumes' },
						{ property: 'og:title', content: 'De Cifris Koine: articles and volumes' }
					]
				}
			},
			{
				path: "copyright-license", component: LicenseComponent, data: {
					title: 'Copyright and licensing',
					meta: [
						{ name: 'description', content: 'De Cifris Koine: copyright and licensing' },
						{ property: 'og:title', content: 'De Cifris Koine: copyright and licensing' }
					]
				}
			},
			{
				path: "editorial-board", component: EditorialBoardComponent, data: {
					title: 'Editorial board',
					meta: [
						{ name: 'description', content: 'De Cifris Koine: editorial board' },
						{ property: 'og:title', content: 'De Cifris Koine: editorial board' }
					]
				}
			},
			{
				path: "vol1", component: Vol1Component, data: {
					title: 'Koine: Volume 1',
					meta: [
						{ name: 'description', content: 'De Cifris Koine, volume 1' },
						{ property: 'og:title', content: 'De Cifris Koine, volume 1' }
					]
				}
			},
			{
				path: "vol2", component: Vol2Component, data: {
					title: 'Koine: Volume 2',
					meta: [
						{ name: 'description', content: 'De Cifris Koine, volume 2' },
						{ property: 'og:title', content: 'De Cifris Koine, volume 2' }
					]
				}
			},
			{
				path: "vol3", component: Vol3Component, data: {
					title: 'Koine: Volume 3',
					meta: [
						{ name: 'description', content: 'De Cifris Koine, volume 3' },
						{ property: 'og:title', content: 'De Cifris Koine, volume 3' }
					]
				}
			},
			{
				path: "vol4", component: Vol4Component, data: {
					title: 'Koine: Volume 4',
					meta: [
						{ name: 'description', content: 'De Cifris Koine, volume 4' },
						{ property: 'og:title', content: 'De Cifris Koine, volume 4' }
					]
				}
			},
			{
				path: "vol5", component: Vol5Component, data: {
					title: 'Koine: Volume 5',
					meta: [
						{ name: 'description', content: 'De Cifris Koine, volume 5' },
						{ property: 'og:title', content: 'De Cifris Koine, volume 5' }
					]
				}
			},
			{ path: ":volume/:article", component: ArticoloComponent, canMatch: [articoloGuard], pathMatch: 'full' },
		]
	},

	{ path: 'cifris/test', component: TestComponent, data: { title: 'GUAI CHI LEGGE' } },

	// Redirect per i percorsi cambiati
	{ path: 'dicono-di-noi', redirectTo: '/associazione/dicono-di-noi', pathMatch: 'full' },
	{ path: 'attivita/centotesi-2014-2023', redirectTo: 'attivita/centotesi-2017-2024', pathMatch: 'full' },
	{ path: 'koine/open-access-statement', redirectTo: '/koine/copyright-license', pathMatch: 'full' },
	{ path: 'koine/license', redirectTo: '/koine/copyright-license', pathMatch: 'full' },
	{ path: 'notizie', redirectTo: '/associazione/notizie', pathMatch: 'full' },
	{ path: 'cifris23/homeCifris23', redirectTo: '/cifris23', pathMatch: 'full' },
	{ path: 'cifris24/homeCifris24', redirectTo: '/cifris24', pathMatch: 'full' },
	{ path: 'cifris24/fcr24', redirectTo: 'cifris24/fcir24', pathMatch: 'full' },
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
	{ path: 'trends22', redirectTo: '/attivita/trends22', pathMatch: 'full' },
	{ path: 'trends22bis', redirectTo: '/attivita/trends22bis', pathMatch: 'full' },
	{ path: 'trends23', redirectTo: '/attivita/trends23', pathMatch: 'full' },
	{ path: 'trends24', redirectTo: '/attivita/trends24', pathMatch: 'full' },
	{ path: 'cifris24/raipqc24', redirectTo: '/cifris24/readpqc24', pathMatch: 'full' },
	{ path: 'cifris24/rapqc24', redirectTo: '/cifris24/readpqc24', pathMatch: 'full' },
	{ path: 'cryptowars/2011/classica', redirectTo: '/attivita/cryptowars/2011/classica', pathMatch: 'full' },
	{ path: 'cryptowars/2011/pubblica', redirectTo: '/attivita/cryptowars/2011/pubblica', pathMatch: 'full' },
	{ path: 'cryptowars/2011/simmetrica', redirectTo: '/attivita/cryptowars/2011/simmetrica', pathMatch: 'full' },

	// Rotte per gli errori
	{ path: '403', component: Error403Component, data: { title: 'Error 403' } },
	{ path: '418', component: Error418Component, data: { title: 'Error 418' } },
	{ path: '**', component: Error404Component, data: { title: 'Error 404' } },
];

const routerOptions: ExtraOptions = {
	scrollPositionRestoration: 'enabled',
	anchorScrolling: 'enabled'
};

@NgModule({
	imports: [RouterModule.forRoot(routes, routerOptions)],
	exports: [RouterModule]
})
export class AppRoutingModule { }

import { BrowserModule, bootstrapApplication, provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { RouterModule } from '@angular/router';
// import { HTTP_INTERCEPTORS } from '@angular/common/http';

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

// root
import { RootElementsComponent } from './root-elements/root-elements.component';
import { HomeComponent } from './root-elements/home/home.component';
import { ContattiComponent } from './root-elements/contatti/contatti.component';
import { CookiePolicyComponent } from './root-elements/cookie-policy/cookie-policy.component';

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

// welcome
import { WelcomeComponent } from './welcome/welcome.component';
import { HomeWelcomeComponent } from './welcome/home-welcome/home-welcome.component';

// attivita
import { AttivitaComponent } from './attivita/attivita.component';
import { HomeAttivitaComponent } from './attivita/home-attivita/home-attivita.component';
import { CorsiComponent } from './attivita/corsi/corsi.component';
// import { Trends24Component } from './attivita/trends24/trends24.component';
// import { Trends23Component } from './attivita/trends23/trends23.component';
// import { Trends22Component } from './attivita/trends22/trends22.component';
// import { Trends22bisComponent } from './attivita/trends22/trends22bis/trends22bis.component';
import { EventiComponent } from './attivita/eventi/eventi.component';
import { EventiPassatiComponent } from './attivita/eventi/eventi-passati/eventi-passati.component';
import { EventiFuturiComponent } from './attivita/eventi/eventi-futuri/eventi-futuri.component';
import { EventiPatrocinatiComponent } from './attivita/eventi/eventi-patrocinati/eventi-patrocinati.component';
import { WorkshopCryptanalysisComponent } from './attivita/eventi/eventi-pubblici/workshop-cryptanalysis/workshop-cryptanalysis.component';
import { SessioneTorinoComponent } from './attivita/eventi/eventi-pubblici/sessione-torino/sessione-torino.component';
import { SessionePerugiaComponent } from './attivita/eventi/eventi-pubblici/sessione-perugia/sessione-perugia.component';
import { SessioneRomaComponent } from './attivita/eventi/eventi-pubblici/sessione-roma/sessione-roma.component';
import { HackatonSmartContractComponent } from './attivita/eventi/eventi-pubblici/hackaton-smart-contract/hackaton-smart-contract.component';
import { SessioneRomaPqcifrisComponent } from './attivita/eventi/eventi-pubblici/sessione-roma-pqcifris/sessione-roma-pqcifris.component';
import { SessioneRomaCifrischainComponent } from './attivita/eventi/eventi-pubblici/sessione-roma-cifrischain/sessione-roma-cifrischain.component';
import { SessioneSalernoComponent } from './attivita/eventi/eventi-pubblici/sessione-salerno/sessione-salerno.component';
import { SessioneMilanoComponent } from './attivita/eventi/eventi-pubblici/sessione-milano/sessione-milano.component';
import { EventoConoscitivoComponent } from './attivita/eventi/eventi-pubblici/evento-conoscitivo/evento-conoscitivo.component';
import { EventoCifrischainComponent } from './attivita/eventi/eventi-pubblici/evento-cifrischain/evento-cifrischain.component';
import { ItasecComponent } from './attivita/eventi/eventi-pubblici/itasec/itasec.component';
import { AgoraComponent } from './attivita/seminari/agora/agora.component';
import { SeminariComponent } from './attivita/seminari/seminari.component';
import { EditoriaComponent } from './attivita/editoria/editoria.component';
import { DiconoDiNoiComponent } from './associazione/notizie/dicono-di-noi/dicono-di-noi.component';
import { NotizieComponent } from './associazione/notizie/notizie.component';
import { NewsComponent } from './root-elements/home/news/news.component';
import { ArticoloComponent } from './attivita/editoria/articolo/articolo.component';

// /cifris2024
import { Cifris2024Component } from './attivita/eventi/cifris/cifris2024/cifris2024.component';
import { HomeCifris24Component } from './attivita/eventi/cifris/cifris2024/home-cifris24/home-cifris24.component';
import { CallForPapersComponent24 } from './attivita/eventi/cifris/cifris2024/call-for-papers/call-for-papers.component';
import { CallForWorkshopsComponent24 } from './attivita/eventi/cifris/cifris2024/call-for-workshops/call-for-workshops.component';
import { ProgramCommitteeComponent24 } from './attivita/eventi/cifris/cifris2024/program-committee/program-committee.component';
import { ProgramComponent24 } from './attivita/eventi/cifris/cifris2024/program/program.component';
import { SubmissionComponent24 } from './attivita/eventi/cifris/cifris2024/submission/submission.component';
import { RegistrationComponent24 } from './attivita/eventi/cifris/cifris2024/registration/registration.component';
import { Workshops24Component } from './attivita/eventi/cifris/cifris2024/single-pages/workshops/workshops24.component';



// errors & co
import { Error404Component } from './errors/error404/error404.component';
import { Error403Component } from './errors/error403/error403.component';
import { Error418Component } from './errors/error418/error418.component';
import { HttpErrorInterceptor } from './errors/http-error-interceptor.service';
import { TestComponent } from './test/test.component';
import { VenueAccomodationComponent24 } from './attivita/eventi/cifris/cifris2024/venue-accomodation/venue-accomodation.component';
import { Trends23Component } from './attivita/corsi/trends23/trends23.component';
import { ProgramButtonsComponent } from './attivita/eventi/cifris/cifris2024/program/program-buttons/program-buttons.component';

// import { NewsComponent } from './news/news.component';
// import { AderentiComponent } from './aderenti/aderenti.component';


// import { AboutComponent } from './counterparty/about/about.component';


// import { DiconoDiNoiComponent } from './associazione/dicono-di-noi/dicono-di-noi.component';
// import { EditoriaComponent } from './attivita/editoria/editoria.component';
// import { BlockchainSmartContractComponent } from './attivita/blockchain-smart-contract/blockchain-smart-contract.component';



// // ./attivita/editoria/koine
// import { KoineComponent } from './attivita/editoria/koine/koine.component';
// import { HomeKoineComponent } from './attivita/editoria/koine/home-koine/home-koine.component';
// import { ArticlesAndVolumesComponent } from './attivita/editoria/koine/articles-and-volumes/articles-and-volumes.component';
// import { EditorialBoardComponent } from './attivita/editoria/koine/editorial-board/editorial-board.component';
// import { Vol1Component } from './attivita/editoria/koine/vol1/vol1.component';

// // ./cifris/cifris2023
import { Cifris2023Component } from './attivita/eventi/cifris/cifris2023/cifris2023.component';
import { HomeCifris23Component } from './attivita/eventi/cifris/cifris2023/home-cifris23/home-cifris23.component';
import { Vol1Component } from './attivita/editoria/koine/vol1/vol1.component';
import { Vol2Component } from './attivita/editoria/koine/vol2/vol2.component';
import { ArticlesAndVolumesComponent } from './attivita/editoria/koine/articles-and-volumes/articles-and-volumes.component';
import { HomeKoineComponent } from './attivita/editoria/koine/home-koine/home-koine.component';
import { KoineComponent } from './attivita/editoria/koine/koine.component';
import { PaymentResultComponent24 } from './attivita/eventi/cifris/cifris2024/payment-result/payment-result.component';
import { Trends24Component } from './attivita/corsi/trends24/trends24.component';
import { WorkshopButtons24Component } from './attivita/eventi/cifris/cifris2024/program/workshop-buttons24/workshop-buttons24.component';
import { Vol3Component } from './attivita/editoria/koine/vol3/vol3.component';
import { InstitutionalSession24Component } from './attivita/eventi/cifris/cifris2024/single-pages/main-conference24/institutional-session24/institutional-session24.component';
import { ScientificSession24Component } from './attivita/eventi/cifris/cifris2024/single-pages/main-conference24/scientific-session24/scientific-session24.component';
import { MainConference24Component } from './attivita/eventi/cifris/cifris2024/single-pages/main-conference24/main-conference24.component';
import { OrariInstitutionalSession24Component } from './attivita/eventi/cifris/cifris2024/program/orari-institutional-session24/orari-institutional-session24.component';
import { OrariScientificSession24Component } from './attivita/eventi/cifris/cifris2024/program/orari-scientific-session24/orari-scientific-session24.component';
import { Cpsid24Component } from './attivita/eventi/cifris/cifris2024/single-pages/workshops/cpsid24/cpsid24.component';
import { OrariWorkshops24Component } from './attivita/eventi/cifris/cifris2024/program/orari-workshops24/orari-workshops24.component';
import { SocialDinner24Component } from './attivita/eventi/cifris/cifris2024/social-dinner24/social-dinner24.component';
import { ProceedingsButton24Component } from './attivita/eventi/cifris/cifris2024/proceedings/proceedings-button24/proceedings-button24.component';
import { ProceedingsComponent24 } from './attivita/eventi/cifris/cifris2024/proceedings/proceedings.component';
import { TimelineComponent } from './associazione/organi-direttivi/timeline/timeline.component';
import { Ixh24Component } from './root-elements/hosting/ixh24/ixh24.component';
import { Vol4Component } from './attivita/editoria/koine/vol4/vol4.component';
import { Fcir25Component } from './root-elements/hosting/fcir25/fcir25.component';
import { AziendeComponent } from './associazione/aziende/aziende.component';
import { GareCrittograficheComponent } from './attivita/gare-crittografiche/gare-crittografiche.component';
import { Cryptowars2011Component } from './attivita/gare-crittografiche/cryptowars/cryptowars2011/cryptowars2011.component';
import { CryptowarsComponent } from './attivita/gare-crittografiche/cryptowars/cryptowars.component';
import { Cryptowars2014Component } from './attivita/gare-crittografiche/cryptowars/cryptowars2014/cryptowars2014.component';
import { Cryptowars2015Component } from './attivita/gare-crittografiche/cryptowars/cryptowars2015/cryptowars2015.component';
import { Cryptowars2016Component } from './attivita/gare-crittografiche/cryptowars/cryptowars2016/cryptowars2016.component';
import { Cryptowars2018Component } from './attivita/gare-crittografiche/cryptowars/cryptowars2018/cryptowars2018.component';
import { Cryptowars2019Component } from './attivita/gare-crittografiche/cryptowars/cryptowars2019/cryptowars2019.component';
import { Cryptowars2020Component } from './attivita/gare-crittografiche/cryptowars/cryptowars2020/cryptowars2020.component';
import { Cryptowars2021Component } from './attivita/gare-crittografiche/cryptowars/cryptowars2021/cryptowars2021.component';
import { ClassicaComponent } from './attivita/gare-crittografiche/cryptowars/cryptowars2011/crypto2011-ita/classica/classica.component';
import { SimmetricaComponent } from './attivita/gare-crittografiche/cryptowars/cryptowars2011/crypto2011-ita/simmetrica/simmetrica.component';
import { PubblicaComponent } from './attivita/gare-crittografiche/cryptowars/cryptowars2011/crypto2011-ita/pubblica/pubblica.component';
import { Cifris2025Component } from './attivita/eventi/cifris/cifris2025/cifris2025.component';
import { CallForPapersComponent25 } from './attivita/eventi/cifris/cifris2025/call-for-papers/call-for-papers.component';
import { CallForWorkshopsComponent25 } from './attivita/eventi/cifris/cifris2025/call-for-workshops/call-for-workshops.component';
import { ProgramCommitteeComponent } from './attivita/eventi/cifris/cifris2023/program-committee/program-committee.component';
import { ProgramCommitteeComponent25 } from './attivita/eventi/cifris/cifris2025/program-committee/program-committee.component';
import { ProgramComponent25 } from './attivita/eventi/cifris/cifris2025/program/program.component';
import { SubmissionComponent25 } from './attivita/eventi/cifris/cifris2025/submission/submission.component';
import { RegistrationComponent25 } from './attivita/eventi/cifris/cifris2025/registration/registration.component';
import { VenueAccomodationComponent25 } from './attivita/eventi/cifris/cifris2025/venue-accomodation25/venue-accomodation25.component';
import { ProceedingsComponent25 } from './attivita/eventi/cifris/cifris2025/proceedings/proceedings.component';
import { SocialDinner25Component } from './attivita/eventi/cifris/cifris2025/social-dinner25/social-dinner25.component';
import { HomeCifris25Component } from './attivita/eventi/cifris/cifris2025/home-cifris25/home-cifris25.component';
import { PaymentResultComponent25 } from './attivita/eventi/cifris/cifris2025/payment-result/payment-result.component';
import { ScolarshipsComponent } from './associazione/scolarships/scolarships.component';
import { Vol5Component } from './attivita/editoria/koine/vol5/vol5.component';

// // ./hosting
// import { Opera24Component } from './hosting/opera24/opera24.component';
// import { Combinatorics24Component } from './hosting/combinatorics24/combinatorics24.component';
// import { WCC24Component } from './hosting/wcc24/wcc24.component';
// import { NotizieComponent } from './associazione/notizie/notizie.component';
// import { EventiPatrocinatiComponent } from './eventi/eventi-patrocinati/eventi-patrocinati/eventi-patrocinati.component';
// import { VenueAccomodationComponent24 } from './cifris/cifris2024/venue-accomodation/venue-accomodation.component';
// import { Centotesi20172024Component } from './attivita/centotesi20172024/centotesi20172024.component';
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
        HomeWelcomeComponent,
        HomeAttivitaComponent,
        CorsiComponent,
        EventiComponent,
        EventiPassatiComponent,
        EventiFuturiComponent,
        EventiPatrocinatiComponent,
        WorkshopCryptanalysisComponent,
        SessioneTorinoComponent,
        SessionePerugiaComponent,
        SessioneRomaComponent,
        HackatonSmartContractComponent,
        SessioneRomaPqcifrisComponent,
        SessioneRomaCifrischainComponent,
        SessioneSalernoComponent,
        SessioneMilanoComponent,
        EventoConoscitivoComponent,
        EventoCifrischainComponent,
        ItasecComponent,
        EventiFuturiComponent,
        EventiPassatiComponent,
        Error404Component,
        Error403Component,
        Error418Component,
        AttivitaComponent,
        AgoraComponent,
        SeminariComponent,
        EditoriaComponent,
        DiconoDiNoiComponent,
        NotizieComponent,
        NewsComponent,
        CallForPapersComponent24,
        CallForWorkshopsComponent24,
        ProgramCommitteeComponent24,
        SubmissionComponent24,
        Cifris2024Component,
        TestComponent,
        Cifris2023Component,
        HomeCifris23Component,
        Vol1Component,
        Vol2Component,
        Vol3Component,
        Vol4Component,
        Vol5Component,
        ArticlesAndVolumesComponent,
        HomeKoineComponent,
        KoineComponent,
        PaymentResultComponent24,
        SocialDinner24Component,
        Trends24Component,
        TimelineComponent,
        Ixh24Component,
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
        SessioneMilanoComponent,
        SessioneRomaComponent,
        SessioneSalernoComponent,
        SessioneTorinoComponent,
        HackatonSmartContractComponent,
        SessioneRomaPqcifrisComponent,
        SessioneRomaCifrischainComponent,
        EventoConoscitivoComponent,
        ItasecComponent,
        EventoCifrischainComponent,
        InstitutionalSession24Component,
        ScientificSession24Component,
        MainConference24Component,
        OrariInstitutionalSession24Component,
        OrariScientificSession24Component,
        OrariWorkshops24Component,
        ScolarshipsComponent,
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
        // Centotesi20172024Component,
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
        //Cifris24
        Cifris2024Component,
        HomeCifris24Component,
        CallForPapersComponent24,
        CallForWorkshopsComponent24,
        ProgramCommitteeComponent24,
        ProgramComponent24,
        SubmissionComponent24,
        RegistrationComponent24,
        VenueAccomodationComponent24,
        ProgramButtonsComponent,
        Workshops24Component,
        WorkshopButtons24Component,
        ProceedingsButton24Component,
        ProceedingsComponent24,
        Fcir25Component,
        //Cifris25
        HomeCifris25Component,
        Cifris2025Component,
        CallForPapersComponent25,
        CallForWorkshopsComponent25,
        ProgramCommitteeComponent25,
        ProgramComponent25,
        SubmissionComponent25,
        RegistrationComponent25,
        VenueAccomodationComponent25,
        ProceedingsComponent25,
        SocialDinner25Component,
        PaymentResultComponent25,
        // Gare crittografiche
        GareCrittograficheComponent,
        Cryptowars2011Component,
        ClassicaComponent,
        SimmetricaComponent,
        PubblicaComponent,
        Cryptowars2014Component,
        Cryptowars2015Component,
        Cryptowars2016Component,
        Cryptowars2018Component,
        Cryptowars2019Component,
        Cryptowars2020Component,
        Cryptowars2021Component,
        CryptowarsComponent,
        //Hosting
        // Opera24Component,
        // Combinatorics24Component,
        // WCC24Component,
        // NotizieComponent,
        // AgoraComponent,
        // Vol2Component,
        //Koine
        ArticoloComponent,
        AziendeComponent
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        AppRoutingModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        MatSidenavModule,
        MatButtonModule,
        MatListModule,
        MatToolbarModule,
        MatIconModule,
        MatMenuModule,
        BrowserAnimationsModule,
        MatCardModule], providers: [
            provideHttpClient(withFetch()),
            provideClientHydration()
        ]
})
export class AppModule { }

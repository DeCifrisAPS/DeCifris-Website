# **Sito Associazione *De Componendis Cifris***

Questo progetto racchiude il codice del [sito web dell'associazione nazionale di crittografia **De Componendis Cifris**](https://www.decifris.it/). Il codice è stato scritto utilizzando [Angular](https://angular.io/), un framework front-end che gestisce l'interazione di HTML, CSS e Typescript.

<p align="center">
  <img width="250" src="https://github.com/triki96/de-cifris-site/assets/64229723/158b5df9-2425-46e2-bae9-ed01ba3765f9" />
</p>

- [Linee Guida Community](#linee-guida-community)
- [Guida alla modifica del codice](#guida-alla-modifica-del-codice)
  * [1. Scaricare il codice da GitHub](#1-scaricare-il-codice-da-github)
  * [2. Modifiche al codice in locale](#2-modifiche-al-codice-in-locale)
    + [Modifiche quotidiane](#modifiche-quotidiane)
      - [Caricare un file](#caricare-un-file)
      - [Modificare una pagina specifica](#modificare-una-pagina-specifica)
    + [Modifiche consistenti](#modifiche-consistenti)
      - [Setup ambiente di lavoro](#setup-ambiente-di-lavoro)
      - [Simulazione in locale del sito](#simulazione-in-locale-del-sito)
      - [Modifiche al codice del sito](#modifiche-al-codice-del-sito)
  * [3. Aggiornare la repository GitHub](#3-aggiornare-la-repository-github)
  * [4. Aggiornare il server](#4-aggiornare-il-server)


# Linee Guida Community
Il sito viene gestito in modo volontario da studenti ed ex-studenti, o comunque persone non specialiste del settore. La conoscenza completa di questo codice, nella sua interezza, può essere un lavoro laborioso, ma quella necessaria e sufficiente per apportare qualche modifica è ben più leggera. Nelle seguenti sotto-sezioni sono spiegate passo passo le procedure da seguire per svolgere le mansioni ordinarie di manutenzione.

Visto che il compito di gestire questo sito è un testimone che passa di mano in mano, è buona cosa accordarsi sul modo di operare. 
Un codice pulito, snello e ben commentato (se non sufficientemente auto-esplicativo) sono sicuramente dei buoni punti da cui partire, e facilitano il compito anche a chi lo leggerà dopo di noi.

# Guida alla modifica del codice
In questa macro-sezione sono esposte le procedure per le operazioni di routine più e meno comuni. Ogni volta che vogliamo apportare qualche modifica a lato server dovremo seguire il seguente iter: scaricare la repository di GitHub, apportare le modifiche in locale, aggiornare la repository di GitHub, aggiornare il server. Vediamo come eseguire ognuna di queste operazioni.

## 1. Scaricare il codice da GitHub
Scaricare il codice da GitHub è semplice: è sufficiente cliccare sul menù dropdown *code* e avviare il download del file zip associato al progetto. In alternativa è possibile scaricare il progetto direttamente da terminale con il comando
```
git clone https://github.com/<username>/<indirizzoRepo>
```
avendo cura di sostituire `<username>` e `<indirizzoRepo>` rispettivamente con il proprietario del progetto e l'effettivo indirizzo in cui si trova il progetto.  Ad oggi il progetto è reperibile all'indirizzo `https://github.com/triki96/de-cifris-site`. Sarà buona misura iniziare ogni futura operazione al codice con un 
```
git pull
```
per scaricare l'ultima versione disponibile.
## 2. Modifiche al codice in locale
Modificare il codice è lo step meno immediato dei 4, ma rimane comunque una procedura tranquilla. Poiché spesso le modifiche da fare riguardano essenzialmente l'aggiunta di nuovi pdf o l'aggiornamento di qualche pagina HTML/CSS (e non operazioni più complesse, ad esempio, l'aggiunta di nuovi componenti oppure nuove funzionalità, ...) di seguito sono presenti due sotto-guide. La prima, più veloce, si rivolge a chi vuole apportare modifiche ai file HTML/CSS esistenti; la seconda, più completa (ma spesso non necessaria), si rivolge a chi ha bisogno di interfacciarsi con l'intero ambiente di sviluppo (i.e. Angular), per apportare modifiche anche più profonde.

### Modifiche quotidiane
Una volta scaricata la repository possiamo modificare il codice. Distinguiamo i casi in cui l'operazione da fare sia il caricamento di un nuovo documento (ad esempio un pdf), oppure l'aggiornamento di una pagina HTML/CSS.

#### Caricare un file 
I documenti sono tutti aggiunti nella cartella `src/assets`. In questa cartella troviamo le immagini del logo, più alcune sotto-cartelle, che hanno il compito di tenere ordine dei vari file caricati. Per caricare un file possiamo quindi spostarci in una di queste cartelle (o crearne un'altra se ce ne fosse bisogno) e spostare qua il file desiderato. 

Supponiamo di voler caricare il file `locandina.pdf` dell' evento "Post Quantum Key Exchange" tenutosi nel 2020.
1. Ci spostiamo in `src/assets/eventi/2020`.
2. Creiamo la cartella *"PostQuantumKeyExchange"*.
3. Incolliamo il file.

#### Modificare una pagina specifica
Il progetto si compone di molti file. Tutti i file HTML/CSS sono presenti nel path `src/app/` e relative sottocartelle: ad esempio, il codice presente della pagina principale è nel file `home.component.html` e il CSS associato è in `home.component.css`. Scrivere codice HTML in più file -- se fatto bene -- ci garantisce un rapido accesso ai sorgenti.  

È importante a questo punto sapere che Angular (il framework che stiamo usando) lavora con i cosiddetti **components**. Un component è una terna composta da un file HTML, un file CSS ed un file TS. Angular si preoccupa di gestire l'interazione di questi tre file. Possiamo scrivere del codice in HTML, gestirne la grafica nel rispettivo file CSS, e gestire gli eventi e più in generale la logica nel file TS. 

Supponiamo di voler modificare una porzione di codice nella homepage.
1. Posizioniamoci nella cartella `src/app/home`
2. Al suo interno osserviamo la seguente struttura:
```
src/app  
│
└───home
│   │   home.component.html
│   │   home.component.css
│   │   home.component.ts
│   │   home.component.spec.ts
│
...
```
3. Per modifiche al contenuto della pagina, è sufficiente modificare il file `home.component.html`. Per modifiche allo stile della pagina, invece, modifichiamo `home.component.css`. Ignoriamo due file: `home.component.ts` servirà per modifiche alla logica del sito tramite TypeScript, `home.component.spec.ts` per unit test di Angular.
4. Salviamo e chiudiamo. 

### Modifiche consistenti

Questo richiede avere un ambiente in grado di eseguire in locale una copia funzionante del sito.

#### Setup ambiente di lavoro

Servirà prima di tutto installare alcuni pacchetti. Le procedure descritte sono per Linux. Fate attenzione alle versioni utilizzate, dichiarate [in fondo alla prossima sottosezione](https://github.com/triki96/de-cifris-site/edit/associazione/README.md#simulazione-in-locale-del-sito).

1. (Facoltativo) Il development front-end avverrà tramite Node. Node Version Manager (NVM) aiuta ad installare e gestire le versioni di Node: non è necessario, ma è molto comodo. Per clonare il progetto NVM in locale è sufficiente usare uno dei seguenti due comandi:
```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
- oppure -
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```
2. Installare Node Packet Manager. Per installare la versione numero `<version>` tramite NVM è sufficiente scrivere
```
nvm install <version>
```
3. Per fare modifiche consistenti è consigliabile lavorare con un IDE con cui si abbia confidenza (personalmente [VSCode](https://code.visualstudio.com/) rimane una buona opzione).  Il primo punto che risolviamo è quello di simulare il sito in locale; lo faremo all'indirizzo `http://localhost:4200`. Per prima cosa apriamo il progetto dal nostro editor di testo Avremo bisogno di un'[interfaccia a linea di comando apposita per Angular, *Angular CLI*,](https://cli.angular.io/), installabile con
```
npm install -g @angular/cli@<version>
```

#### Simulazione in locale del sito
Spostiamoci nella cartella del progetto: ora lavoreremo qui. A questo punto siamo in grado di far girare localmente una copia del sito, con il comando
```
ng serve --port 4200
```
Di solito il comando è ridotto a `ng serve`, in quanto la porta 4200 è impostata in automatico da Angular. Eseguendo questo comando per la prima volta la shell interromperà l'esecuzione con degli errori, chiedendo l'installazione di qualche modulo (ad es. `@angular-devkit/build-angular`) richiesto nelle dipendenze del progetto. Prima di tutto installiamo
```
npm install --save-dev @angular-devkit/build-angular
```
Ora basterà richiedere l'installazione di tutte le altre dipendenze dichiarate nel file `package.json`. Nel nostro caso si tratta di una procedura detta *"clean install"*, evocata dal comando
```
npm ci
```
A questo punto il comando `ng serve` funziona senza nessun problema, e possiamo vedere la nostra versione locale del sito all'indirizzo sopracitato. Simularlo è importante per verificare che le nostre modifiche abbiano effettivamente lo scopo desiderato e non abbiano rotto il codice! Concludiamo verificando di avere le versioni corrette di tutti i pacchetti più importanti: confrontiamo l'output di 
```
ng v
```
con quanto segue.
```

     _                      _                 ____ _     ___
    / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
   / △ \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | |
  / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
 /_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
                |___/
    

Angular CLI: 18.1.3
Node: 20.15.1
Package Manager: npm 10.7.0
OS: linux x64

Angular: 18.1.3
... animations, cdk, cli, common, compiler, compiler-cli, core
... forms, localize, material, platform-browser
... platform-browser-dynamic, router

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1801.3
@angular-devkit/build-angular   18.1.3
@angular-devkit/core            18.1.3
@angular-devkit/schematics      18.1.3
@schematics/angular             18.1.3
rxjs                            7.8.1
typescript                      5.5.4
zone.js                         0.14.8
```

#### Modifiche al codice del sito
Per fare una modifica serve accedere al file desiderato, dopodiché sarà sufficiente salvare le modifiche fatte, e Angular si preoccuperà di aggiornare il sito in locale. In questo modo è possibile riscontrare se le modifiche apportate hanno raggiunto il risultato desiderato: Nel primo caso abbiamo finito e possiamo procedere, nel secondo caso torniamo sul codice e continuiamo a modificare. 

## 3. Aggiornare la repository GitHub
Una volta fatte le modifiche, è fondamentale rendere queste modifiche disponibili per tutte le altre persone che potrebbero dover mettere mano al codice più avanti. Per garantire che ciò sia possibile, aggiorniamo la repositort GitHub posizionandoci nella cartella del progetto ed eseguendo da terminale i seguenti comandi standard.
```
git add *
git commit -m "<mettere un commento appropriato per il commit>"
git push
```
Per controllare che la versione locale coincida con quella remota è sufficiente leggere l'output del comando
```
git status
```
Il risultato dovrebbe essere qualcosa come:
```
Sul branch main
Your branch is up to date with 'origin/main'.

nothing to commit, working tree clean
```
Questo conclude l'aggiornamento della repository GitHub.

## 4. Aggiornare il server
Per fare il deploy sul server bisogna dapprima fare la build del progetto in locale. 
Per fare la build di un progetto Angular utilizziamo un'[interfaccia a linea di comando](https://cli.angular.io/) apposita per Angular, installabile con
```
npm install -g @angular/cli
```
Questa interfaccia ci dà accesso al comando *ng*, che risolve i nostri dubbi sulla build, vediamo come.
Ci sono due modi per fare una build. Il primo è tramite il comando *ng serve*, che però non fa a caso nostro, in quanto questo comando non genera i file che dovremo poi andare a mettere sul server. Il comando che invece useremo è
```
ng build --prod
```
In prima battuta probabilmente l'esecuzione di questo comando verrà interrotta con qualche errore. Con ogni probabilità verrete avvertiti della mancanza di qualche modulo (ad es. @angular-devkit/build-angular). Per ovviare a questo problema è sufficiente installare il modulo in questione, ad esempio con
```
npm install --save-dev @angular-devkit/build-angular
```
Una volta installati tutti i moduli richiesti e fatta la build, verrà automaticamente creata una nuova cartella, chiamata *dist*, all'interno del vostro progetto. All'interno di questa cartella ne trovate un'altra con il nome del progetto. All'interno di questa trovate una dozzina di file. Tutti questi file vanno spostati sul server affinché le modifiche diventino effettive.

## Note versione settembre 2024
Nell'installare nuove dipendenze si suggerisce di eseguire `npm install` con flag `--legacy-peer-deps`.

Le pagine generate da dati (database oppure json) devono essere aggiunte al file `routes.txt`.
Queste pagine verranno precompilate in modo che il risultato della compilazione sia una serie di pagine statiche.
Compilare il progetto con
```
ng build --configuration production
```
Questo compilerà il sito sotto la cartella `dist/DeCifris/browser`.

È consigliato validare il risultato procedendo nella cartella e lanciando il seguente comando per servire le pagine.
```
python3 -m http.server --bind 0.0.0.0 8000
```
Il sito compilato sarà raggiungibile all' indirizzo locale `http://127.0.0.1:8000` e dall'indirizzo esterno sempre sulla porta `8000`.

Verificare prima gli aggiornamenti di angular con `ng update` e poi quelli di node con `npm outdated`.
Per angular si può usare il comando `ng update --all=true`, per node il comando `npm update`.

Si suggerisce di legare la versione di angular al progetto e quindi di avviare `ng` con `npx ng` seguito dai comandi necesari.
In questo modo dovrebbe risultare possibile utilizzare `npm ci` e seguito solo dal comando di build per generare il sito.

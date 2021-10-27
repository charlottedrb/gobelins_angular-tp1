import {AfterViewInit, Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {DOCUMENT} from "@angular/common";

@Component({
    selector: 'home-page', //sélecteur html pour appeler le compo
    templateUrl: './home-page.component.html',// template associé
    styleUrls: ['./home-page.component.scss']// style associé pour surcharger les styles principaux

})

// HomePageComponent convention de nommage PascalCase pour les noms de classe
// OnInit, AfterViewInit et OnDestroy sont des hooks. On doit implémenter les méthodes correspondantes (ngOnInit...)
export class HomePageComponent implements OnInit, AfterViewInit, OnDestroy {

    // variables et functions convention de nommage camelCase
    currentSection = 'home-page'
    titleInterval: number = 0
    titles: string[] = [
        'We love make things amazing and simple',
        'Perfect solution for small business',
        'Create amazing landing pages with Globing'
    ]

    constructor(@Inject(DOCUMENT) private readonly document: Document) {
        // exécuté en premier !

        // exemple de log à checker dans la console du navigateur
        console.log('(exemple de log) section courante: ' + this.currentSection); // utilisation de this pour appels à fonctions, variables, ...
    }

    ngOnInit() {
        // exécuté automatiquement à l'initialisation du composant
        // obligatoire si implements OnInit (qui est facultatif)
        // D'autres existent, voir https://angular.io/guide/lifecycle-hooks

    }

    ngAfterViewInit() {
        // exécuté automatiquement après l'initialisation de la vue
        // obligatoire si implements AfterViewInit (qui est facultatif)
        // D'autres existent, voir https://angular.io/guide/lifecycle-hooks
        const html = document.getElementById('text')
        if(!html) return

        let i = 1
        this.titleInterval = setInterval(() => {
            if(i > 2) i = 0
            html.innerHTML = this.titles[i]
            i++
        }, 2500)
    }

    // Toujours utiliser public ou private pour les fonctions, variables , constantes ...
    // Si pas précisé, c'est public par défaut mais on s'expose à des soucis de lint
    // NOTE : Pour les appels depuis le html, mettre en public
    public windowScroll(): void {
        const html = document.getElementById('navbar')
        if(!html) return

        if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
            html.style.backgroundColor = '#1a1a1a';
            html.style.padding = '15px 0px';
        } else {
            html.style.backgroundColor = '';
            html.style.padding = '20px';
        }
    }

    // Utiliser void si la fonction ne renvoie rien
    private returnNothing(): void {
        const fake = this.returnABoolean(false)
    }

    // Préciser le type ( boolean, any, unknown ...)
    private returnABoolean(input: boolean): boolean {
        const fake = !input;
        return fake;
    }

    public toggleMenu(): void {
        const html = document.getElementById('navbarCollapse')
        if(!html) return

        html.classList.toggle('show');
    }


    public onSectionChange(sectionId: string): void {
        this.currentSection = sectionId;
    }

    ngOnDestroy() {
        // exécuté automatiquement avant la desctruction du composant
        // obligatoire si implements OnDestroy (qui est facultatif)
        // Important : Si on a souscrit à des abonnements, se désabonner ici pour éviter les fuites de mémoires
        // D'autres existent, voir https://angular.io/guide/lifecycle-hooks
        clearInterval(this.titleInterval)
    }

}

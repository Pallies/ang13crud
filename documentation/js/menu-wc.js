'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">ang13crud documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-49004586e47abf1d1fd111303f80404cea367e0fbf64069f6615f2dec0ab5796ffa342a7f8f91d14683aa54c2d927670519f564628f6e9397114a0bf30297d8d"' : 'data-target="#xs-components-links-module-AppModule-49004586e47abf1d1fd111303f80404cea367e0fbf64069f6615f2dec0ab5796ffa342a7f8f91d14683aa54c2d927670519f564628f6e9397114a0bf30297d8d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-49004586e47abf1d1fd111303f80404cea367e0fbf64069f6615f2dec0ab5796ffa342a7f8f91d14683aa54c2d927670519f564628f6e9397114a0bf30297d8d"' :
                                            'id="xs-components-links-module-AppModule-49004586e47abf1d1fd111303f80404cea367e0fbf64069f6615f2dec0ab5796ffa342a7f8f91d14683aa54c2d927670519f564628f6e9397114a0bf30297d8d"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProductAddComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductAddComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProductEditComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductEditComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProductGetComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductGetComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-49004586e47abf1d1fd111303f80404cea367e0fbf64069f6615f2dec0ab5796ffa342a7f8f91d14683aa54c2d927670519f564628f6e9397114a0bf30297d8d"' : 'data-target="#xs-injectables-links-module-AppModule-49004586e47abf1d1fd111303f80404cea367e0fbf64069f6615f2dec0ab5796ffa342a7f8f91d14683aa54c2d927670519f564628f6e9397114a0bf30297d8d"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-49004586e47abf1d1fd111303f80404cea367e0fbf64069f6615f2dec0ab5796ffa342a7f8f91d14683aa54c2d927670519f564628f6e9397114a0bf30297d8d"' :
                                        'id="xs-injectables-links-module-AppModule-49004586e47abf1d1fd111303f80404cea367e0fbf64069f6615f2dec0ab5796ffa342a7f8f91d14683aa54c2d927670519f564628f6e9397114a0bf30297d8d"' }>
                                        <li class="link">
                                            <a href="injectables/LoadingSpinnerService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoadingSpinnerService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CoreModule.html" data-type="entity-link" >CoreModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link" >SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SharedModule-b68cd26e9d5840e3ca0fb1e4698386e8f3ab84d59d02ed62f331a4ac90bdc11db3f4b2c23c714e5170ad14151a0f5e994bd96ba94f78b61708ef6ed263a49e5c"' : 'data-target="#xs-components-links-module-SharedModule-b68cd26e9d5840e3ca0fb1e4698386e8f3ab84d59d02ed62f331a4ac90bdc11db3f4b2c23c714e5170ad14151a0f5e994bd96ba94f78b61708ef6ed263a49e5c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-b68cd26e9d5840e3ca0fb1e4698386e8f3ab84d59d02ed62f331a4ac90bdc11db3f4b2c23c714e5170ad14151a0f5e994bd96ba94f78b61708ef6ed263a49e5c"' :
                                            'id="xs-components-links-module-SharedModule-b68cd26e9d5840e3ca0fb1e4698386e8f3ab84d59d02ed62f331a4ac90bdc11db3f4b2c23c714e5170ad14151a0f5e994bd96ba94f78b61708ef6ed263a49e5c"' }>
                                            <li class="link">
                                                <a href="components/SpinnerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SpinnerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ToastComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ToastComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-SharedModule-b68cd26e9d5840e3ca0fb1e4698386e8f3ab84d59d02ed62f331a4ac90bdc11db3f4b2c23c714e5170ad14151a0f5e994bd96ba94f78b61708ef6ed263a49e5c"' : 'data-target="#xs-directives-links-module-SharedModule-b68cd26e9d5840e3ca0fb1e4698386e8f3ab84d59d02ed62f331a4ac90bdc11db3f4b2c23c714e5170ad14151a0f5e994bd96ba94f78b61708ef6ed263a49e5c"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-SharedModule-b68cd26e9d5840e3ca0fb1e4698386e8f3ab84d59d02ed62f331a4ac90bdc11db3f4b2c23c714e5170ad14151a0f5e994bd96ba94f78b61708ef6ed263a49e5c"' :
                                        'id="xs-directives-links-module-SharedModule-b68cd26e9d5840e3ca0fb1e4698386e8f3ab84d59d02ed62f331a4ac90bdc11db3f4b2c23c714e5170ad14151a0f5e994bd96ba94f78b61708ef6ed263a49e5c"' }>
                                        <li class="link">
                                            <a href="directives/AlertToastDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AlertToastDirective</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Product.html" data-type="entity-link" >Product</a>
                            </li>
                            <li class="link">
                                <a href="classes/Toast.html" data-type="entity-link" >Toast</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/LoadingSpinnerService.html" data-type="entity-link" >LoadingSpinnerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MessageToastService.html" data-type="entity-link" >MessageToastService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProductFormService.html" data-type="entity-link" >ProductFormService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProductsService.html" data-type="entity-link" >ProductsService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});
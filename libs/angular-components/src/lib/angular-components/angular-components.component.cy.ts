import { TestBed } from '@angular/core/testing';
import { AngularComponentsComponent } from './angular-components.component';

describe(AngularComponentsComponent.name, () => {
  beforeEach(() => {
    TestBed.overrideComponent(AngularComponentsComponent, {
      add: {
        imports: [],
        providers: [],
      },
    });
  });

  it('renders', () => {
    cy.mount(AngularComponentsComponent);
  });
});

# sample-angular-material-dialog-overview
A basic sample showing how to use the Material Dialog in a newly generated Angular app.

#### error
EXCEPTION: Cannot set property stack of [object Object] which has only a getter

If I replace the line regarding zone in package.json to: "zone.js": "0.7.2", i instead get:

**EXCEPTION: Error in :0:0 caused by: The selector "app-example-dialog" did not match any elements**

### solution
In app.module.ts, move ExampleDialog to entryComponents, like so:
```typescript
@NgModule({
  declarations: [
    AppComponent,
    ExampleDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ExampleDialogComponent]
})
export class AppModule { }
```

#### steps to reproduce
1. `ng new my-dialog-app` - Create app
2. `cd my-dialog-app` - Go to app
3. `ng generate component ExampleDialog` - Create a component for the dialog content
4. Installed Material according to documentation:
  - `npm install --save @angular/material` - Install Material
  - Added to src/styles.css: `@import '~@angular/material/core/theming/prebuilt/deeppurple-amber.css';`
  - Added MaterialModule to AppModule.
5. Changed app.component.html and app.component.ts following the [Dialog Overview Sample](https://material.angular.io/components/component/dialog).
6. Added ExampleDialog to ngModule bootstrap, like so: `bootstrap: [AppComponent, ExampleDialogComponent]`.
 

#### versions
- Angular CLI: v1.0.0-beta.25.5 
- Node JS: v6.9.4  
- npm: 3.10.10  
- OS: Windows 10.0.14393 (x64)  
- Browser: Chrome 55.0.2883.87, Edge 38.14393.0.0  
- @angular/material": "^2.0.0-beta.1"  

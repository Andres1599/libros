import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {
  AccordionModule,
  AlertModule,        // Foundation Callouts
  ButtonsModule,
  CarouselModule,     // Foundation Orbit
  CollapseModule,
  BsDatepickerModule,
  BsDropdownModule,   // Foundation Dropdown Menus and Dropdown Panes
  ModalModule,        // Foundation Reveal
  OffcanvasModule,
  PaginationModule,
  ProgressbarModule,
  RatingModule,
  SortableModule,
  TabsModule,
  TimepickerModule,
  TooltipModule,
  TypeaheadModule,
} from 'ngx-foundation';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { AdminComponent } from './pages/admin/admin.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ArticleComponent } from './pages/article/article.component';
import { ModerationComponent } from './pages/moderation/moderation.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginRegisterComponent } from './pages/login-register/login-register.component';
import { AsksComponent } from './pages/asks/asks.component';
import { AboutComponent } from './pages/about/about.component';
import { HttpClientModule } from '@angular/common/http';
import { AdsComponent } from './pages/ads/ads.component';
import { FormsModule } from '@angular/forms';
import { CreateComponent } from './pages/create/create.component';
import { ModalMessageComponent } from './components/modal-message/modal-message.component';
import { MessageService } from './services/message.service';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { UpdateArticuloComponent } from './pages/update-articulo/update-articulo.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    CategoriesComponent,
    AdminComponent,
    ProfileComponent,
    ArticleComponent,
    ModerationComponent,
    HomeComponent,
    LoginRegisterComponent,
    AsksComponent,
    AboutComponent,
    AdsComponent,
    CreateComponent,
    ModalMessageComponent,
    UpdateArticuloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    AccordionModule.forRoot(),
    PaginationModule.forRoot(),
    CarouselModule.forRoot(),
    AlertModule.forRoot(),
    ButtonsModule.forRoot(),
    BsDatepickerModule.forRoot(),
    ProgressbarModule.forRoot(),
    RatingModule.forRoot(),
    SortableModule.forRoot(),
    TabsModule.forRoot(),
    TimepickerModule.forRoot(),
    TooltipModule.forRoot(),
    TypeaheadModule.forRoot(),
    CollapseModule.forRoot(),
    OffcanvasModule.forRoot(),
    HttpClientModule,
    FormsModule,
    FilterPipeModule
  ],
  providers: [
    MessageService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    ModalMessageComponent
  ]
})
export class AppModule { }

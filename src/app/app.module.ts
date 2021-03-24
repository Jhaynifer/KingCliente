import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LoginComponent } from './COMUM/login/login.component';
import { EsqueciSenhaComponent } from './COMUM/esqueci-senha/esqueci-senha.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { CadastrarComponent } from './COMUM/cadastrar/cadastrar.component';
import { DashboardComponent } from './COMUM/dashboard/dashboard.component';
import { NavComponent } from './components/template/nav/nav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { ProdutosComponent } from './COMUM/produtos/produtos.component';
import { PerfilComponent } from './COMUM/perfil/perfil.component';
import { PedidosComponent } from './COMUM/pedidos/pedidos.component';
import { CatalogoComponent } from './COMUM/catalogo/catalogo.component';
import { FinanceiroComponent } from './COMUM/financeiro/financeiro.component';
import { NgxSmartModalModule } from 'ngx-smart-modal';
import {MatSelectModule} from '@angular/material/select';
import { CompraComponent } from './COMUM/compra/compra.component';
import { CarrinhoComponent } from './COMUM/carrinho/carrinho.component';
import { FinalizarCompraComponent } from './COMUM/finalizar-compra/finalizar-compra.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    EsqueciSenhaComponent,
    FooterComponent,
    CadastrarComponent,
    DashboardComponent,
    NavComponent,
    ProdutosComponent,
    PerfilComponent,
    PedidosComponent,
    CatalogoComponent,
    FinanceiroComponent,
    CompraComponent,
    CarrinhoComponent,
    FinalizarCompraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    NgbModule,
    NgxSmartModalModule.forRoot(),
    MatSelectModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

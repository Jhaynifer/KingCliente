import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './components/template/nav/nav.component';
import { CadastrarComponent } from './COMUM/cadastrar/cadastrar.component';
import { CarrinhoComponent } from './COMUM/carrinho/carrinho.component';
import { CatalogoComponent } from './COMUM/catalogo/catalogo.component';
import { CompraComponent } from './COMUM/compra/compra.component';
import { DashboardComponent } from './COMUM/dashboard/dashboard.component';
import { EsqueciSenhaComponent } from './COMUM/esqueci-senha/esqueci-senha.component';
import { FinalizarCompraComponent } from './COMUM/finalizar-compra/finalizar-compra.component';
import { FinanceiroComponent } from './COMUM/financeiro/financeiro.component';
import { LoginComponent } from './COMUM/login/login.component';
import { PedidosComponent } from './COMUM/pedidos/pedidos.component';
import { PerfilComponent } from './COMUM/perfil/perfil.component';
import { ProdutosComponent } from './COMUM/produtos/produtos.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },

  { path: 'cadastrar', component: CadastrarComponent },
  { path: 'esqueci-senha', component: EsqueciSenhaComponent },



  {
    path: '', component: NavComponent,
    children: [
      { path: '', pathMatch: 'full', component: DashboardComponent },
      { path: 'produtos', component: ProdutosComponent },
      { path: 'perfil', component: PerfilComponent },
      { path: 'pedidos', component: PedidosComponent },
      { path: 'catalogo', component: CatalogoComponent },
      { path: 'financeiro', component: FinanceiroComponent },
      { path: 'compra', component: CompraComponent },
      { path: 'carrinho', component: CarrinhoComponent },
      { path: 'finalizar-compra', component: FinalizarCompraComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

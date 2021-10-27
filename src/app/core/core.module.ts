import 'hammerjs'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { HttpClientModule } from '@angular/common/http'
import { CommonModule } from '@angular/common'

// import { DemoMaterialModule } from '../demo-material-module'
import { CdkTableModule } from '@angular/cdk/table'

import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { FlexLayoutModule } from '@angular/flex-layout'

import { CoreRoutes } from './core.routing'

import { CustomerComponent } from './components/customer/customer.component'
import { BillComponent } from './components/bill/bill.component'
import { PaymentComponent } from './components/payment/payment.component'
import { ExpenseComponent } from './components/expense/expense.component'
import { CompanyComponent } from './components/company/company.component'
import { CompanyPaymentComponent } from './components/company-payment/company-payment.component'
import { CreateComponent } from './shared/modals/create/create.component'
import { AngularMaterialModule } from 'app/shared/angular-material.module';
import { ReportComponent } from './components/report/report.component';
import { CreateTableComponent } from './components/create-table/create-table.component'
import { SharedModule } from 'app/shared/shared.module'

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(CoreRoutes),
    // DemoMaterialModule,
    AngularMaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    SharedModule,
    CdkTableModule
  ],
  providers: [],
  entryComponents: [],
  declarations: [
    CustomerComponent,
    BillComponent,
    CreateComponent,
    PaymentComponent,
    ExpenseComponent,
    CompanyComponent,
    CompanyPaymentComponent,
    ReportComponent,
    CreateTableComponent,
  ]
})
export class CoreModule {}
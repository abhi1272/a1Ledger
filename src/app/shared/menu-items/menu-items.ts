import { Injectable } from '@angular/core'

export interface Menu {
  state: string
  name: string
  type: string
  icon: string
}

const MENUITEMS = [
  { state: 'dashboard', name: 'Dashboard', type: 'link', icon: 'dashboard' },
  { state: 'report', name: 'Report', type: 'link', icon: 'summarize' },
  { state: 'sale', name: 'Sale', type: 'link', icon: 'sell', subMenu: [
    { state: 'customer', name: 'Customer', type: 'link', icon: 'person' },
    { state: 'bill', name: 'Bill', type: 'link', icon: 'receipt' },
    { state: 'payment', name: 'Payment', type: 'link', icon: 'payment' },
  ] },
  { state: 'purchase', name: 'Purchase', type: 'link', icon: 'shopping_basket', subMenu: [
    { state: 'company', name: 'Company', type: 'link', icon: 'store' },
    { state: 'bill', name: 'Bill', type: 'link', icon: 'receipt' },
    { state: 'payment', name: 'Payment', type: 'link', icon: 'payment' },
  ] },
  { state: 'expense', name: 'Expense', type: 'link', icon: 'money' },
]

@Injectable()
export class MenuItems {
  getMenuitem(): Menu[] {
    return MENUITEMS
  }
}

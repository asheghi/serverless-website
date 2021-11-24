import Sales from './views/Sales.vue';
import Accounts from './views/Accounts.vue';
import SalesOverview from './views/sales/SalesOverview.vue';
import SalesInvoices from './views/sales/SalesInvoices.vue';
import Expenses from "./views/Expenses.vue";
import Reports from "./views/Reports.vue";
const ssr = import.meta.env.SSR;

const _routes = [
  {
    label: 'Sales',
    path: '/sales',
    component: Sales,
    defaultName: 'sales-overview',
    children: [
      {
        name: 'sales-overview',
        path: '',
        label: 'Overview',
        component: ssr ? SalesOverview : () => import('./views/sales/SalesOverview.vue'),
      },
      {
        name: 'sales-invoices',
        path: 'invoices',
        label: 'Invoices',
        component: ssr ? SalesInvoices : () => import('./views/sales/SalesInvoices.vue'),
      },
    ]
  },
  {
    name: 'accounts',
    path: '/',
    label: 'Accounts',
    component: ssr ? Accounts : () => import('./views/Accounts.vue'),
  },
  {
    name: 'expenses',
    label: 'Expenses',
    path: '/expenses',
    component: ssr ? Expenses :  () => import('./views/Expenses.vue'),
  },
  {
    name: 'reports',
    label: 'Reports',
    path: '/reports',
    component: ssr ? Reports : () => import('./views/Reports.vue'),
  },
];

export const routes = _routes.map(it => {
  it.path = '/dashboard' + it.path;
  return it
})

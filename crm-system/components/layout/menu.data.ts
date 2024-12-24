export interface IMenuItem{
    name: string
    url: string
    icon: string
}

export const MENU_DATA: IMenuItem[] = [{
    name: 'Home',
    icon: 'radix-icons:dashboard',
    url: '/'
},
{
    name: 'Products',
    icon: 'ep:goods',
    url: '/products'
},
{
    name: 'Payments',
    icon: 'ph:contactless-payment',
    url: '/paument'
},
{
    name: 'Order',
    icon: 'fluent:receipt-28-regular',
    url: '/order'
},
{
    name: 'Customers',
    icon: 'mingcute:group-line',
    url: '/customers'
},
{
    name: 'Feedback',
    icon: 'fluent:person-feedback-48-regular',
    url: '/feedback'
},
{
    name: 'Setting',
    icon: 'radix-icons:gear',
    url: '/setting'
},
{
    name: 'Help center',
    icon: 'radix-icons:question-mark',
    url: '/help'
}
]
export const routes=[{
    path:'/',
    redirect:{
        name:'Search'
    }
},{
    path:'/search',
    name:'Search',
    component:()=>import('@components/search/search.vue'),
},
    {
        path:'/detail',
        name:'Detail',
        component:()=>import('@components/detail/detail.vue'),
    }
];

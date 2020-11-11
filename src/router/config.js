export const routes=[{
    path:'/',
    redirect:{
        name:'SearchView'
    }
},{
    path:'/searchView',
    name:'SearchView',
    component:()=>import('@components/search/searchView.vue'),
},
    {
        path:'/detail',
        name:'Detail',
        component:()=>import('@components/detail/detail.vue'),
    }
];

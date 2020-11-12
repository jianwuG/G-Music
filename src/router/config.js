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
        path:'/play',
        name:'Play',
        component:()=>import('@components/play/play.vue'),
    }
];

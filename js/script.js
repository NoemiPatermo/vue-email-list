Vue.config.devtools = true;

new Vue ({
    el:"#app",
    data: {
        emailList:[],

    },
    
    created () {
        this.getEmail();
    },
    
   methods:{
    
        getEmail: function() {

           for(let i= 0; i < 10; i++) {
              axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
              .then((response) => { //appena il server risponde si attiva questa funzione
                this.emailList.push(response.data.response);
                
                });
             };
           
       },
   }
});//chiude la vue
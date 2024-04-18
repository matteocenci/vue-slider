console.log(Vue);


const {createApp} = Vue;

createApp({
    data () {
        return {
            activeIndex: 0,
            game: {
                images: [
                    "./img/01.webp",
                    "./img/02.webp",
                    "./img/03.webp",
                    "./img/04.webp",
                    "./img/05.webp",
                ],
                titles: [
                    "Marvel's Spiderman Miles Morales",
                    "Ratchet & Clank: Rift Apart",
                    "Fortnite",
                    "Stray",
                    "Marvel's Avengers",
                ],
                texts: [
                    "Exeprience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.",
                    "Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.",
                    "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                    "Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city.",
                    "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay."
                ]
                
            }
        }
    },
    created() {
        console.log("CREATED!!!");
        setInterval(() => {
            console.log(this);
            console.log("sono interval", this.showNext());
        }, 3000)
    },
    methods: {
        showNext: function() {
            if(this.activeIndex === this.game.images.length-1){
                this.activeIndex = 0;
            } else {
                this.activeIndex++;
            }
        },

        showPrev: function(){
            if(this.activeIndex === 0){
                this.activeIndex = this.game.images.length-1;
            } else {
                this.activeIndex--;
            }
        }

    }
}).mount("#app");


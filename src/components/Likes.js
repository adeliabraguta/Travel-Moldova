import {defineStore} from "pinia";
import {ref} from 'vue'
import tipova from "../assets/tipova.jpg"
import soroca from "../assets/soroca.png"
import castelmimi from "../assets/castelmimi.jpg"
import capriana from "../assets/capriana.jpg"
import orhei from "../assets/orhei.jpg"
import padureadomneasca from "../assets/padureadomneasca.jpg"
import carousel1 from "../assets/carousel1.jpg"
import carousel2 from "../assets/carousel2.jpg"
import carousel3 from "../assets/carousel3.jpg"


export const useLikedChart = defineStore('likedChart', {
    state: () => ({
        isActive: false,
        carousel: [{
            img:carousel1
        },{
            img:carousel2
        },{
            img: carousel3
        }],
        likes: [{
            id: 1,
            title: "Tipova Monastery",
            slug: "tipova",
            img: tipova,
            address: "Tipova, Rezina district",
            isFav: false,
            accesed: false
        }, {
            id: 2,
            title: "Soroca Fortress",
            slug: "soroca-fortress",
            address: "Soroca, Soroca district",
            img: soroca,
            isFav: true,
            accesed: false

        }, {
            id: 3,
            title: "Castel MIMI",
            slug: "castel-mimi",
            address: "Bulboaca village, Anenii Noi district",
            img: castelmimi,
            isFav: false,
            accesed: false

        }, {
            id: 4,
            title: "Capriana Monastery",
            slug: "capriana-monastery",
            img: capriana,
            address: "Capriana commune, Straseni district",
            isFav: false,
            accesed: false

        }, {
            id: 5,
            title: "Old Orhei",
            slug: "old-orhei",
            address: "Orhei city",
            img: orhei,
            isFav: false,
            accesed: false

        }, {
            id: 6,
            title: "Princely Forest Nature Reserve",
            slug: "princely-forest-nature-reserve",
            address: "Glodeni and Falesti districts",
            img: padureadomneasca,
            isFav: false,
            accesed: false

        }]
    }),
    getters: {
        favs() {
            return this.likes.filter(l => l.isFav);
        },
        favCount() {
            return this.likes.reduce((prev, curr) => {
                return curr.isFav ? prev + 1 : prev
            }, 0)
        },
        totalCount: (state) => {
            return state.likes.length
        },
        active(state) {
            return state.isActive
        },
        component(){
            return this.likes.filter(l => l.accesed)
        }
    },
    actions: {
        toggleFav(id) {
            const like = this.likes.find(t => t.id === id)
            like.isFav = !like.isFav
        },
        toggleActive(isActive, id) {
            this.isActive = !this.isActive

        },
        toggleAccesed(id){
            const acces = this.likes.find(t => t.id ===id)
            acces.accesed = !acces.accesed
        }

    }
})
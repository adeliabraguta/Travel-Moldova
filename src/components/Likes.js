import {defineStore} from "pinia";
import {ref} from 'vue'
import tipova from "../assets/tipova.jpg"
import soroca from "../assets/soroca.png"
import castelmimi from "../assets/castelmimi.jpg"
import capriana from "../assets/capriana.jpg"
import orhei from "../assets/orhei.jpg"
import padureadomneasca from "../assets/padureadomneasca.jpg"

export const useLikedChart = defineStore('likedChart', {
    state: () => ({
        isActive: false,
        likes: [{
            id: 1,
            title: "Tipova Monastery",
            img: tipova,
            address: "Tipova, Rezina district",
            isFav: false
        }, {
            id: 2,
            title: "Soroca Fortress",
            address: "Soroca, Soroca district",
            img: soroca,
            isFav: true
        }, {
            id: 3,
            title: "Castel MIMI",
            address: "Bulboaca village, Anenii Noi district",
            img: castelmimi,
            isFav: false
        }, {
            id: 4,
            title: "Capriana Monastery",
            img: capriana,
            address: "Capriana commune, Straseni district",
            isFav: false
        }, {
            id: 5,
            title: "Old Orhei",
            address: "Orhei city",
            img: orhei,
            isFav: false
        }, {
            id: 6,
            title: "Princely Forest Nature Reserve",
            address: "Glodeni and Falesti districts",
            img: padureadomneasca,
            isFav: false
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
        }
    },
    actions: {
        toggleFav(id) {
            const like = this.likes.find(t => t.id === id)
            like.isFav = !like.isFav
        },
        toggleActive(isActive, id) {
            this.isActive = !this.isActive

        }

    }
})
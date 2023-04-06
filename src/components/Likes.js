import {defineStore} from "pinia";
import {ref} from 'vue'
import tipova from "../assets/tipova.jpg"
import tipova2 from "../assets/tipova2.jpg"
import tipova3 from "../assets/tipova3.jpg"
import soroca from "../assets/soroca.png"
import soroca2 from "../assets/soroca2.jpg"
import soroca3 from "../assets/soroca3.png"
import castelmimi from "../assets/castelmimi.jpg"
import mimi2 from "../assets/mimi2.jpg"
import mimi3 from "../assets/mimi3.jpg"
import capriana from "../assets/capriana.jpg"
import capriana2 from "../assets/capriana2.jpg"
import capriana3 from "../assets/capriana3.jpg"
import orhei from "../assets/orhei.jpg"
import orhei2 from "../assets/orhei2.jpg"
import orhei3 from "../assets/orhei3.jpg"
import padureadomneasca from "../assets/padureadomneasca.jpg"
import padureadomneasca2 from "../assets/padureadomneasca2.jpg"
import padureadomneasca3 from "../assets/padureadomneasca3.jpg"

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
        likes: [ {
            id: 6,
            title: "Princely Forest Nature Reserve",
            slug: "princely-forest-nature-reserve",
            address: "Glodeni and Falesti districts",
            img: padureadomneasca,
            img2: padureadomneasca2,
            img3: padureadomneasca3,
            isFav: false,
            accesed: false,
            generalInformation: "Founded in 1993, this is the largest natural reserve in Moldova and is located in Glodeni. Here you’ll find the country’s oldest stand of old-growth oak tree where the oldest oak is estimated to be about 450 years old.\n" +
                "\n" +
                "Nature lovers will enjoy the many bird species with the most notable being the herons that nest near the river.  Discover the area known as “One Hundred Hills,” a landscape of rolling knolls – that no one understands how they were formed.\n" +
                "\n" +
                "Padurea Domneasca is a great way to spend a day outdoors with Mother Nature.",


        },{
            id: 2,
            title: "Soroca Fortress",
            slug: "soroca-fortress",
            address: "Soroca, Soroca district",
            img: soroca,
            img2: soroca2,
            img3: soroca3,
            isFav: true,
            accesed: false,
            generalInformation:"Soroca has played a large and important role throughout Moldova’s history due to its location on the Dniestr River. During wars and sieges, armies were able to defend the country well from this vantage point.\n" +
                "\n" +
                "The highlight is Soroca Fortress, one in a chain of military strongholds built as early as the 14th century by princes looking to fortify their position against invaders.\n" +
                "\n" +
                "Because of the large Roma community here, Soroca is the unofficial Roma capital.  For fun, walk by the mansions of the Roma elite that line the streets of the city centre.",


        }, {
            id: 3,
            title: "Castel MIMI",
            slug: "castel-mimi",
            address: "Bulboaca village, Anenii Noi district",
            img: castelmimi,
            img2: mimi2,
            img3: mimi3,
            isFav: false,
            accesed: false,
            generalInformation: "In 2011 one of the most ambitious restoration projects in Moldavian history begun, at the end of which Castle Mimi got back its charming appearance from the beginning of the last century. The winery went through an intense modernization process, being endowed with best advanced equipment for wine production, storage and bottling, that are unique in Moldova.",

        }, {
            id: 4,
            title: "Capriana Monastery",
            slug: "capriana-monastery",
            img: capriana,
            img2: capriana2,
            img3: capriana3,
            address: "Capriana commune, Straseni district",
            isFav: false,
            accesed: false,
            generalInformation: "The winery went through an intense modernization process, being endowed with best advanced equipment for wine production, storage and bottling, that are unique in Moldova.",


        }, {
            id: 5,
            title: "Old Orhei",
            slug: "old-orhei",
            address: "Orhei city",
            img: orhei,
            img2: orhei2,
            img3: orhei3,
            isFav: false,
            accesed: false,
            generalInformation: "Taking you back some two thousand years ago, this archaeological complex, overlooks the Raut River and holds immense historical and cultural significance. Because of the vastness of the historical events witnessed by the Old Orhei, a museum has been put together to provide information to the visitors.\n" +
                "\n" +
                "Some major events that were witnessed by this mighty place were the Tatar and Mongol invasions that date back to the 1th century BC and the Golden Horde’s occupation in the 14th century BC. The natural beauty here is stunning and features caves, ruins, monasteries, baths, and fortifications which are as old as the Dacian tribe, which, to be precise, would be two thousand years.",


        }, {
            id: 1,
            title: "Tipova Monastery",
            slug: "tipova",
            img: tipova,
            img2: tipova2,
            img3: tipova3,
            address: "Tipova, Rezina district",
            isFav: false,
            accesed: false,
            generalInformation: "Located in a remote but beautiful part of Moldova, Tipova Monastery comprises three main complexes that have been dug out of the rocks along the banks of the Dniestr River.\n" +
                "\n" +
                "The oldest complex is the Church of the Feast of the Holy Cross (11th century).  The remaining two are the Church of St Nicholas (14th century) and Horodiste (16th century). If you follow the path past the caves you’ll enjoy a nice nature hike that ends in a lovely waterfall.\n" +
                "\n" +
                "Within each cave are monk’s cells, enough for up to 700, though there are less than 20 monks living there now.",
        },]
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
import {ref} from 'vue'
import tipova from "../assets/tipova.jpg"
import soroca from "../assets/soroca.png"
import castelmimi from "../assets/castelmimi.jpg"
import capriana from "../assets/capriana.jpg"
import orhei from "../assets/orhei.jpg"
import padureadomneasca from "../assets/padureadomneasca.jpg"

const guides = ref([{
    title: "Tipova Monastery",
    img: tipova,
    address: "Tipova, Rezina district"
}, {
    title: "Soroca Fortress",
    address: "Soroca, Soroca district",
    img: soroca,
}, {
    title: "Castel MIMI",
    address: "Bulboaca village, Anenii Noi district",
    img: castelmimi,
}, {
    title: "Capriana Monastery",
    img: capriana,
    address: "Capriana commune, Straseni district"
}, {
    title: "Old Orhei",
    address: "Orhei city",
    img: orhei,
}, {
    title: "Princely Forest Nature Reserve",
    address: "Glodeni and Falesti districts",
    img: padureadomneasca,
}])

export default guides

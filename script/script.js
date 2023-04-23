import initHome from "./modules/home.js";
import initSobreMim from "./modules/sobremim.js";
import initCriarCertificados from "./modules/certificados.js";
import initScrollSuave from "./modules/scroll-suave.js";
import SlideNav from "./modules/slide.js";

initSobreMim()
initCriarCertificados()
initScrollSuave()
initHome()

const slide = new SlideNav('.slide', '.slide-wrapper')
slide.init();
slide.addArrow('.prev', '.next');
slide.addControl('.custom-controls');

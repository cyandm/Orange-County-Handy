/**
 * Main entry point for the theme's JavaScript.
 * you must add any functions for every javascript file to the import statement below.
 */

import { Modals } from "./functions/modals";
import { register } from "swiper/element/bundle";
import { SubMenuDesktop } from "./functions/subMenuDesktop";
import { SubMenuMobile } from "./functions/subMenuMobile";
import { Htmx } from "./functions/htmx";
import { FaqTabs, FaqCard } from "./functions/faq";
import videoCover from "./functions/videoCover";
import { VideoPlyr } from "./functions/plyr";
import { shareBtn } from "./functions/shareBtn";
import { Accordion } from "./functions/accordion";
import { SearchPage } from "./functions/search";
import { Marquee } from "./functions/marquee";

Modals();
register();
SubMenuDesktop();
SubMenuMobile();
Htmx();
FaqTabs();
FaqCard();
videoCover();
VideoPlyr();
shareBtn();
Accordion();
SearchPage();
Marquee();

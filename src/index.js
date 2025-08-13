import initScrollReveal from "./scripts/scrollReveal";
import initTiltEffect from "./scripts/tiltAnimation";
import { targetElements, defaultProps } from "./data/scrollRevealConfig";
import initProjectToggle from "./data/projectToggle";
import initTechStackTabs from "./scripts/initTechStackTabs";

initScrollReveal(targetElements, defaultProps);
initTiltEffect();
initProjectToggle();
initTechStackTabs();
import TolTip from './ninja-ui/tooltip';
import DropDown from './ninja-ui/drop-down';
import Tabs from './ninja-ui/tabs';
import Snackbar from './ninja-ui/snackbar';
//create tooltip
const tooltip = new TolTip(document.querySelector('.tooltip'))

tooltip.init();

//create dropdown
const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown =>{
    let instance = new DropDown(dropdown);
    instance.init();
})

//create tabs

const tabs = new Tabs(document.querySelector('.tabs'));
tabs.init();

//create snackbar

const snackbar = new Snackbar();
snackbar.init();

const btn = document.querySelector('button');
btn.addEventListener('click', () =>{
    snackbar.show('you clicked me :)')
})
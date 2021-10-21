import def from './services/default'
import burger from './modules/burger'
import change from './modules/changeColor'
import blockChange from './modules/blockChange'


window.onload = function (){
    def();
    burger();
    change();
    blockChange();
}
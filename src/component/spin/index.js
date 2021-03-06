import style from './index.less'
import Icon from "../../container/icon";
import Dom from "../../utils/dom.js";

console.log(
    style
);

const Spin = args => {
    const {
        domFunc
    } = Dom;
    if(args==undefined){
        var dom = document.body;
    } else {
        var {dom} = args;
        dom = (dom == undefined ? document.body : dom);
    }
    if(!!dom.querySelector('.component-container-spin')){
        dom.querySelector('.component-container-spin').remove()
        domFunc({
            dom:document.querySelector('html'),
            style: {
                paddingRight: `0px`,
                overflow: "auto"
            }
        })
    }else{
        dom.style.position="relative";
        let container = document.createElement('div')
        container.className = `component-container-spin ${dom==document.body?"component-container-global":""}`;
        container.innerHTML = `
            <div class="${style['spin-container']}">
                ${Icon({type:'spin'})}
                ${(screen.width>1300&&dom.clientHeight<50)?"":`<span>Loading...</span>`}
            </div>
        `;
        container.addEventListener('click',(e)=>{
            e.stopPropagation()
            // e.preventDefault()
            // return false
        })
        domFunc({
            dom:document.querySelector('html'),
            style: {
                paddingRight: `${window.innerWidth - document.body.clientWidth}px`,
                overflow: "hidden"
            }
        })
        dom.appendChild(container)
    }
}


export default Spin;

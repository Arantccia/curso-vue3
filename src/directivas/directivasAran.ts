import * as vue from "vue";

function addAlert(){
    alert('prueba de alert')
}

function genDifPrueba(value: string | number, name: string | undefined ,modifiers: Record<string, boolean>) :string {
    value = JSON.stringify(value);
    let output: string = "";

    if(name){
        output = `AranDirective - Nombre del argumento: ${name}. valor del argumneto: ${value}, ver modifiers ${modifiers}`
    }else{
        output = `AranDirective - Sin Nombre del argumento, valor del argumneto: ${value}, ver modifiers ${modifiers}`
    }

    return output
}

const directiveAran: vue.Directive = {

    created (el : HTMLElement, binding : vue.DirectiveBinding, vNode : vue.VNode) {
        console.log('created');
        console.log('el', el);
        console.log('binding', binding);
        console.log('vNode', vNode);
        el.className = "aram-class"
        el.addEventListener('click', addAlert)
    },
    beforeMount (el : HTMLElement, binding : vue.DirectiveBinding, vNode : vue.VNode) {
        console.log('beforeMount');
        console.log('el', el);
        console.log('binding', binding);
        console.log('vNode', vNode);
    },
    mounted (el : HTMLElement, binding : vue.DirectiveBinding, vNode : vue.VNode) {
        console.log('mounted');
        console.log('el', el);
        console.log('binding', binding);
        console.log('vNode', vNode);
    },
    beforeUpdate (el : HTMLElement, binding : vue.DirectiveBinding, vNode : vue.VNode, pVNode : vue.VNode){
        console.log('beforeUpdate');
        console.log('el', el);
        console.log('binding', binding);
        console.log('vNode', vNode);
        console.log('pVNode', pVNode);
    },
    updated (el : HTMLElement, binding : vue.DirectiveBinding, vNode : vue.VNode, pVNode : vue.VNode){
        console.log('updated');
        console.log('el', el);
        console.log('binding', binding);
        console.log('vNode', vNode);
        console.log('pVNode', pVNode);
    },
    beforeUnmount (el : HTMLElement, binding : vue.DirectiveBinding, vNode : vue.VNode) {
        console.log('beforeUnmount');
        console.log('el', el);
        console.log('binding', binding);
        console.log('vNode', vNode);
    },
    unmounted (el : HTMLElement, binding : vue.DirectiveBinding, vNode : vue.VNode) {
        console.log('unmounted');
        console.log('el', el);
        console.log('binding', binding);
        console.log('vNode', vNode);
        el.removeEventListener('click', addAlert)
    }
}

export {directiveAran}
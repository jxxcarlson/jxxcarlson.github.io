//class MathText extends HTMLElement {
   //
   //   // The "set content" code below detects the
   //   // argument to the custom element
   //   // and is necessary for innerHTML
   //   // to receive the argument.
   //   set content(value) {
   //        console.log("mt, set content to", value)
   //  		this.innerHTML = value
   //  	}
   //
   //  connectedCallback() {
   //    console.log("mt, connectedCallback")
   //    this.attachShadow({mode: "open"});
   //    this.shadowRoot.innerHTML =
   //      '<mjx-doc><mjx-head></mjx-head><mjx-body>' + this.innerHTML + '</mjx-body></mjx-doc>';
   //       MathJax.typesetShadow(this.shadowRoot)
   //  }
   //}
//
//customElements.define('math-text', MathText)


class MathText extends HTMLElement {


  constructor(...args) {
    console.log("mt, constructor")
    super(...args);
    this.attachShadow({mode: "open"});
    this.shadowRoot.innerHTML = '<mjx-doc><mjx-head></mjx-head><mjx-body></mjx-body></mjx-doc>';
    MathText.observer.observe(this, {childList: true});
  }

  connectedCallback() {
     console.log("mt, connectedCallback")
    MathText.observer.observe(this, {childList: true});
  }

  disconnectedCallback() {

    console.log("mt,   disconnectedCallback() {")
    MathText.observer.disconnect(this, {childList: true});
  }

}

MathText.contentChanged = (list) => {
  console.log("mt, contentChanged")
  for (const item of list) {
    const node = item.target;
    if (node.isConnected) {
      node.shadowRoot.firstChild.lastChild.innerHTML = node.innerHTML;
      setTimeout(() => MathJax.typesetShadow(node.shadowRoot), 1);
    }
  }
}

MathText.observer = new MutationObserver(MathText.contentChanged);

customElements.define('math-text', MathText);
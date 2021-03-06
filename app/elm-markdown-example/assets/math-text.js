class MathText extends HTMLElement {

   // The "set content" code below detects the
   // argument to the custom element
   // and is necessary for innerHTML
   // to receive the argument.
   set content(value) {
        console.log("Value", value)
  		this.innerHTML = value
  	}

  connectedCallback() {
    console.log("mt, connectedCallback")
    this.attachShadow({mode: "open"});
    this.shadowRoot.innerHTML =
      '<mjx-doc><mjx-head></mjx-head><mjx-body>' + this.innerHTML + '</mjx-body></mjx-doc>';
       MathJax.typesetShadow(this.shadowRoot)
  }
}

customElements.define('math-text', MathText)


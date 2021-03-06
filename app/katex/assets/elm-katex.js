
const init =  async function(app) {

  console.log("I am starting elm-katex: init");
  var katexJs = document.createElement('script')
  katexJs.type = 'text/javascript'
  katexJs.onload = initKatex
  katexJs.src = "https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/katex.min.js"

  document.head.appendChild(katexJs);
  console.log("elm-katex: I have appended katexJs to document.head");

}


function initKatex() {

  console.log("elm-katex: initializing");

  class MathText extends HTMLElement {

     constructor() {
         // Always call super first in constructor
         super();
       }

    connectedCallback() {
      console.log('katex connectedCallback',this.content )
      console.log('katex format',this.format )
      const displayMode = (this.format == 'display') ? true : false ;
      console.log ('displayMode', displayMode)

      this.attachShadow({mode: "open"});
      this.shadowRoot.innerHTML =
        katex.renderToString(
          this.content,
          { throwOnError: false, output: "mathml", displayMode: displayMode }
        );
    }

  }

  customElements.define('math-text', MathText)

}

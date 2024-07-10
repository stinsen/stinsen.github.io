customElements.define(
  "show-hide",
  class extends HTMLElement {
    /**
     * Instantiate the Web Component
     */
    constructor() {
      // Get parent class properties
      super()

      // Get the elements
      this.trigger = this.querySelector("[trigger]")
      this.content = this.querySelector("[content]")
      if (!this.trigger || !this.content) return

      // Setup default UI
      this.trigger.removeAttribute("hidden")
      this.trigger.setAttribute("aria-expanded", false)
      this.content.setAttribute("hidden", "")

      // Create the event handler
      this.handler = this.createHandler()

      document.addEventListener("click", this)
    }

    handleEvent(event) {
      if (
        event.target === this.trigger ||
        event.composedPath().includes(this.trigger)
      )
        return

      if (this.trigger.getAttribute("aria-expanded") === "true") {
        this.hide()
      }
    }

    /**
     * Create the event handler
     */
    createHandler() {
      return (event) => {
        // Don't let the button trigger other actions
        event.preventDefault()

        // If the content is expanded, hide it
        // Otherwise, show it
        if (this.trigger.getAttribute("aria-expanded") === "true") {
          this.hide()
        } else {
          this.show()
        }
      }
    }

    show() {
      this.trigger.setAttribute("aria-expanded", true)
      this.content.removeAttribute("hidden")
    }

    hide() {
      this.trigger.setAttribute("aria-expanded", false)
      this.content.setAttribute("hidden", "")
    }

    /**
     * Start listening to clicks
     */
    connectedCallback() {
      if (!this.trigger || !this.content) return
      this.trigger.addEventListener("click", this.handler)
    }

    /**
     * Stop listening to clicks
     */
    disconnectedCallback() {
      this.trigger.removeEventListener("click", this.handler)
    }
  }
)

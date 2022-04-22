import Script from "next/script"
import React from "react"

const Footer = () => {
  return (
    <footer>
      <div className="mx-auto mt-8 flex max-w-6xl justify-between p-4 font-medium text-gray-500">
        <p>Italia Meravigliosa in Tour &copy; 2022</p>

        <a
          href="https://www.iubenda.com/privacy-policy/76997417"
          className="iubenda-white iubenda-noiframe iubenda-embed iubenda-noiframe "
          title="Privacy Policy "
        >
          Privacy Policy
        </a>
        <Script>
          {`(function (w,d) {var loader = function () {var s = d.createElement("script"), tag = d.getElementsByTagName("script")[0]; s.src="https://cdn.iubenda.com/iubenda.js"; tag.parentNode.insertBefore(s,tag);}; if(w.addEventListener){w.addEventListener("load", loader, false);}else if(w.attachEvent){w.attachEvent("onload", loader);}else{w.onload = loader;}})(window, document);`}
        </Script>
      </div>
    </footer>
  )
}

export default Footer

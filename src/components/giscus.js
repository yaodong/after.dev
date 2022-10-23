import React from "react"
import { Helmet } from "react-helmet"

export const Giscus = () => {
  return (
    <div className="giscus">
      <Helmet>
        <script
          src="https://giscus.app/client.js"
          data-repo="yaodong/weblog"
          data-repo-id="MDEwOlJlcG9zaXRvcnkzNjY0OTU1NzY="
          data-category="General"
          data-category-id="DIC_kwDOFdhHWM4CSJGn"
          data-mapping="pathname"
          data-strict="0"
          data-reactions-enabled="1"
          data-emit-metadata="0"
          data-input-position="bottom"
          data-theme="preferred_color_scheme"
          data-lang="en"
          crossorigin="anonymous"
          async
        ></script>
      </Helmet>
    </div>
  )
}

export default Giscus

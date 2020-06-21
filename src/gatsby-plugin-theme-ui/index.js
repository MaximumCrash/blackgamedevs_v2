export default {
  colors: {
    background: "#111",
    text: "#CCC",
    text2: '#999',
    primary: "#EF3054",
    link: "#10A37E",
    link_secondary: "#886D72",
    link_hover: "#24F0BC",
    border: "#333",
    filterBorder: "#666",
  },
  fontWeights: {
    body: 400,
    heading: 700,
  },
  styles: {
    p: {
      color: "text",
      fontFamily: "heading",
      mt: "1em",
      mb: "1em",
    },
    h1: {
      fontSize: "3rem",
      fontFamily: "heading",
      color: "primary",
      m: 0,
      mb: ".25em",
    },
    h2: {
      m: 0,
      mb: 0.5,
      fontWeight: "heading",
      fontFamily: "heading",
      color: "primary",
    },
    h3: {
      mb: 0.5,
      fontFamily: "heading",
    },
    h4: {
      mb: 0.5,
      fontWeight: 100,
      fontFamily: "heading",
    },
    a: {
      color: "link",
      "&:hover": {
        color: "link_hover",
      },
    },
  },
  fonts: {
    body:
      'Martel, -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu',
    heading:
      'Poppins, -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu',
    monospace: "monospace",
  },
  lineHeights: {
    body: 1.5,
    heading: ".95em",
  },
}

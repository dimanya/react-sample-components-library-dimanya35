const path = require("path");
const { name, version, url } = require("./package.json");

let sections = [
  {
    name: "README",
    content: "README.md",
  },
  {
    name: "BookList collection",

    sections: [
      {
        name: "Book",
        content: "src/components/Book/Book.md",
      },
    ],
  },
];
module.exports = {
    components: 'src/components/**/[A-Z]*.js',
    ribbon: {
      url,
      text: "Open on GitHub",
    },
    title: `${name} v${version}`,
    moduleAliases: { "react-sample-components-library-dimanya35": path.resolve(__dirname, "src") },
    skipComponentsWithoutExample: true,
    // sections,
    exampleMode: "expand",
    usageMode: "expand",
    pagePerSection: true,
    getComponentPathLine(componentPath) {
      const componentName = path.basename(componentPath, ".js");
      return `import { ${componentName} } from '${name}';`;
    },
    webpackConfig: {
      module: {
        rules: [
          {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: "babel-loader"
          }
        ]
      }
    },
  };
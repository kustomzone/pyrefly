"use strict";
(self["webpackChunknew_website"] = self["webpackChunknew_website"] || []).push([[5839],{

/***/ 65839:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_import_resolution_mdx_1b8_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-import-resolution-mdx-1b8.json
const site_docs_import_resolution_mdx_1b8_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"import-resolution","title":"Import Resolution","description":"How Pyrefly finds and resolves imports","source":"@site/docs/import-resolution.mdx","sourceDirName":".","slug":"/import-resolution","permalink":"/en/docs/import-resolution","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/pyrefly/edit/main/website/docs/import-resolution.mdx","tags":[],"version":"current","frontMatter":{"id":"import-resolution","title":"Import Resolution","slug":"/import-resolution","description":"How Pyrefly finds and resolves imports"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/import-resolution.mdx


const frontMatter = {
	id: 'import-resolution',
	title: 'Import Resolution',
	slug: '/import-resolution',
	description: 'How Pyrefly finds and resolves imports'
};
const contentTitle = 'Import Resolution';

const assets = {

};



const toc = [{
  "value": "Relative Imports",
  "id": "relative-imports",
  "level": 2
}, {
  "value": "Absolute Imports",
  "id": "absolute-imports",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    li: "li",
    ol: "ol",
    p: "p",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "import-resolution",
        children: "Import Resolution"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This doc describes how imports in a given file are found and their bindings are\nresolved, including files that are being type checked."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["NOTE: see the ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/en/docs/configuration",
        children: "Configuration documentation"
      }), " for more info on\nthe config items referenced below."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "relative-imports",
      children: "Relative Imports"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["If the import is relative (starting with one or more dots), the import is\nresolved relative to the path of the file importing it. A single dot at the\nbeginning of the import (e.g. ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".file.to.import"
      }), ") represents the current\ndirectory, and more dots (e.g. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "..other.file"
      }), ") will continue to walk upward."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "absolute-imports",
      children: "Absolute Imports"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For absolute imports, Pyrefly uses the following import strategy:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Try to import from each entry in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "import_roots"
        }), " in the order they appear\nusing the module finding strategy. a. NOTE: we append the config file's\ndirectory to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "search_roots"
        }), " automatically when using a config file as a\nsensible last-resort for attempting an import."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Try to import from ", (0,jsx_runtime.jsx)(_components.code, {
          children: "typeshed"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Try to import from each entry in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "site_package_path"
        }), " in the order it appears\nusing the module finding strategy."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Return an import error."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "stub-files-vs-source-files",
      children: "Stub Files vs Source Files"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A\n", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://typing.python.org/en/latest/spec/distributing.html#stub-files",
        children: "stub file"
      }), "\nis any file that ends with a ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".pyi"
      }), " file suffix. They have many uses, including\nadding typing to non-Python extension code, distributing typing information\nseparate from implementation, or overriding an implementation with more accurate\ntyping information."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Pyrefly loads typing information from imports by first searching for a relevant\n", (0,jsx_runtime.jsx)(_components.code, {
        children: ".pyi"
      }), " file, then falling back to a ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".py"
      }), " file, for each attempt at an import\nabove."]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}



/***/ })

}]);
"use strict";
(self["webpackChunknew_website"] = self["webpackChunknew_website"] || []).push([[3028],{

/***/ 83028:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_configuration_mdx_cbb_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-configuration-mdx-cbb.json
const site_docs_configuration_mdx_cbb_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"configuration","title":"Configuration","description":"Instructions for configuring Pyrefly","source":"@site/docs/configuration.mdx","sourceDirName":".","slug":"/configuration","permalink":"/en/docs/configuration","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/pyrefly/edit/main/website/docs/configuration.mdx","tags":[],"version":"current","frontMatter":{"id":"configuration","title":"Configuration","slug":"/configuration","description":"Instructions for configuring Pyrefly"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/configuration.mdx


const frontMatter = {
	id: 'configuration',
	title: 'Configuration',
	slug: '/configuration',
	description: 'Instructions for configuring Pyrefly'
};
const contentTitle = 'Pyrefly Configuration';

const assets = {

};



const toc = [{
  "value": "Precedence in Options",
  "id": "precedence-in-options",
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
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "pyrefly-configuration",
        children: "Pyrefly Configuration"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Pyrefly has a basic configuration that can (or will) allow you to customize your\nPyrefly runs without having to specify all of your arguments on the command\nline."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "NOTE: this is early in its development, so the options listed here are subject\nto change in name, usage, type, quantity, and structure."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Configurations can be specified in a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "pyre.toml"
      }), " file, with all configuration\noptions in the top-level of the document. You can also specify a configuration\nin a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "pyproject.toml"
      }), " under a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "[tool.pyrefly]"
      }), " section."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["NOTE: At the moment, configuration finding is not supported. It will be\nimplemented in the near future. In the meantime, please explicitly specify your\nconfiguration with the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "-c <config>"
      }), " or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "--config <config>"
      }), " flags when running\nPyrefly."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Both absolute and config-relative paths are supported."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "precedence-in-options",
      children: "Precedence in Options"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The following is the order in which configuration options are selected:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "CLI flag"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Environment variable override -- This is the same as ", (0,jsx_runtime.jsx)(_components.code, {
          children: "PYRE_<CLI flag name>"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Configuration option"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Hard-coded default"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "configuration-options",
      children: "Configuration Options"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "project_includes"
        }), ": the glob patterns used to describe which files to type\ncheck, typically understood as user-space files. This takes highest precedence\nin import resolution.", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Type: list of Unix Glob patterns"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Default: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "[\"**/*.py\"]"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Flag equivalent: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "FILES..."
            }), " argument"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Equivalent configs: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "include"
            }), " in Pyright, ", (0,jsx_runtime.jsx)(_components.code, {
              children: "files"
            }), "/", (0,jsx_runtime.jsx)(_components.code, {
              children: "modules"
            }), "/", (0,jsx_runtime.jsx)(_components.code, {
              children: "packages"
            }), " in\nMyPy"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Notes: when overridden by passing in ", (0,jsx_runtime.jsx)(_components.code, {
              children: "FILES..."
            }), ", we do not consult the\nrelevant config file for what to use for ", (0,jsx_runtime.jsx)(_components.code, {
              children: "project_excludes"
            }), ". If\n", (0,jsx_runtime.jsx)(_components.code, {
              children: "project_excludes"
            }), " should not use the default, override it with the flag as\nwell."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "project_excludes"
        }), ": the glob patterns used to describe which files to avoid\ntype checking, usually as a more fine-grained way of controlling the files you\nget type errors on.", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Type: list of Unix Glob patterns"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Default: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "[\"**/__pycache__/**\", \"**/.*\"]"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Flag equivalent: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "--project-excludes"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Equivalent configs: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "exclude"
            }), " in Pyright and MyPy"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Notes: we match on these patterns, unlike ", (0,jsx_runtime.jsx)(_components.code, {
              children: "project_includes"
            }), ", where we\nenumerate all (Python) files under the directory. Becaues of this,\n", (0,jsx_runtime.jsx)(_components.code, {
              children: "project_excludes"
            }), " does not do directory matching unless a ", (0,jsx_runtime.jsx)(_components.code, {
              children: "/"
            }), " is added at\nthe end of your glob pattern. ", (0,jsx_runtime.jsx)(_components.code, {
              children: "**/__pycache__/"
            }), " will only match files under\na directory named ", (0,jsx_runtime.jsx)(_components.code, {
              children: "__pycache__/"
            }), ", but not a file named ", (0,jsx_runtime.jsx)(_components.code, {
              children: "__pycache__"
            }), ".\nLikewise, ", (0,jsx_runtime.jsx)(_components.code, {
              children: "**/__pycache__"
            }), " will only match files named ", (0,jsx_runtime.jsx)(_components.code, {
              children: "__pycache__"
            }), ", but\nnot files under a directory named ", (0,jsx_runtime.jsx)(_components.code, {
              children: "__pycache__/"
            }), "."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "search_path"
        }), ": a file path describing a root from which imports should be\nfound and imported from (including modules in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "project_includes"
        }), "). This takes\nthe highest precedence in import order, before ", (0,jsx_runtime.jsx)(_components.code, {
          children: "typeshed"
        }), " and\n", (0,jsx_runtime.jsx)(_components.code, {
          children: "site_package_path"
        }), ". When a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "project_includes"
        }), " type checked file is imported\nby another type checked file, we check all search roots to determine how to\nimport it.", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Type: list of directories"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Default: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "[\".\"]"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Flag equivalent: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "--search-path"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["ENV equivalent: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "PYRE_SEARCH_PATH"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Equivalent configs: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "extraPaths"
            }), " in Pyright, ", (0,jsx_runtime.jsx)(_components.code, {
              children: "mypy_path"
            }), " in MyPy"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Notes: we automatically append ", (0,jsx_runtime.jsx)(_components.code, {
              children: "\".\""
            }), " (the directory containing the\nconfiguration file) to the ", (0,jsx_runtime.jsx)(_components.code, {
              children: "search_roots"
            }), " when type checking as a sensible\ndefault and last attempt at an import."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "site_package_path"
        }), ": a file path describing a root from which imports should\nbe found and imported from. This takes the lowest priority in import\nresolution, after ", (0,jsx_runtime.jsx)(_components.code, {
          children: "project_includes"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "typeshed"
        }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "search_roots"
        }), ".", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Type: list of directories"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Default: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "[\".\"]"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Flag equivalent: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "--site-package-path"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["ENV equivalent: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "PYRE_SITE_PACKAGE_PATH"
            })]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Equivalent configs: none"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "python_platform"
        }), ": the value used with conditions based on type checking\nagainst\n", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://docs.python.org/3/library/sys.html#sys.platform",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "sys.platform"
          })
        }), "\nvalues.", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Type: string"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Default: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "\"linux\""
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Flag equivalent: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "--python-platform"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["ENV equivalent: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "PYRE_PYTHON_PLATFORM"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Equivalent configs: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "pythonPlatform"
            }), " in Pyright, ", (0,jsx_runtime.jsx)(_components.code, {
              children: "platform"
            }), " in MyPy"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "python_version"
        }), ": the value used with conditions based on type checking\nagainst\n", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://docs.python.org/3/library/sys.html#sys.version",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "sys.version"
          })
        }), "\nvalues. The format should be ", (0,jsx_runtime.jsx)(_components.code, {
          children: "<major>[.<minor>[.<micro>]]"
        }), ", where minor and\nmicro can be omitted to take the default positional value.", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Type: string"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Default: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "3.13.0"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Flag equivalent: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "--python-version"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["ENV equivalent: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "PYRE_PYTHON_VERSION"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Equivalent configs: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "pythonVersion"
            }), " in Pyright, ", (0,jsx_runtime.jsx)(_components.code, {
              children: "python_version"
            }), " in MyPy"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "errors"
        }), ": configure (enable and disable) the errors Pyrefly shows", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Type: Table of error code name to boolean representing enabled status"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Default: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "errors = {}"
            })]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Flag equivalent: none"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "ENV equivalent: none"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Equivalent configs:\n", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://microsoft.github.io/pyright/#/configuration?id=type-check-rule-overrides",
              children: "type check rule overrides"
            }), "\nand ", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://microsoft.github.io/pyright/#/configuration?id=type-evaluation-settings",
              children: "type evaluation settings"
            }), "\nin Pyright,\n", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://mypy.readthedocs.io/en/stable/config_file.html#confval-enable_error_code",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "enable_error_code"
              })
            }), " and\n", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://mypy.readthedocs.io/en/stable/config_file.html#confval-disable_error_code",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "disable_error_code"
              })
            }), "\nin MyPy"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Notes: setting ", (0,jsx_runtime.jsx)(_components.code, {
              children: "<error-code> = true"
            }), " is the same as having no error code configuration present, which means\nthe error will be shown. Setting ", (0,jsx_runtime.jsx)(_components.code, {
              children: "<error-code> = false"
            }), " will disable the error for type checking."]
          }), "\n"]
        }), "\n"]
      }), "\n"]
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
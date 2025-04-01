"use strict";
(self["webpackChunknew_website"] = self["webpackChunknew_website"] || []).push([[2060],{

/***/ 22060:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_learn_python_typing_mdx_ed2_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-learn-python-typing-mdx-ed2.json
const site_docs_learn_python_typing_mdx_ed2_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"learn-python-typing","title":"Learning Python Types","description":"Get to know Python\'s Type System with working examples","source":"@site/docs/learn-python-typing.mdx","sourceDirName":".","slug":"/learn-python-typing","permalink":"/en/docs/learn-python-typing","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/pyrefly/edit/main/website/docs/learn-python-typing.mdx","tags":[],"version":"current","frontMatter":{"id":"learn-python-typing","title":"Learning Python Types","slug":"/learn-python-typing","description":"Get to know Python\'s Type System with working examples"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/BrowserOnly.js
var BrowserOnly = __webpack_require__(35363);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
;// ./src/try-pyre2/TryPyre2BrowserOnly.tsx
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const TryPyre2=/*#__PURE__*/react.lazy(()=>Promise.all(/* import() */[__webpack_require__.e(1869), __webpack_require__.e(8285), __webpack_require__.e(6248)]).then(__webpack_require__.bind(__webpack_require__, 16248)));function TryPyre2BrowserOnly(_ref){let{sampleFilename,isCodeSnippet=false,codeSample='',showErrorPanel=true}=_ref;if(sampleFilename==null){throw'Missing sampleFilename. IDE services won\'t work properly.';}return/*#__PURE__*/(0,jsx_runtime.jsx)(BrowserOnly/* default */.A,{children:()=>/*#__PURE__*/(0,jsx_runtime.jsx)(react.Suspense,{fallback:/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:"Loading..."}),children:/*#__PURE__*/(0,jsx_runtime.jsx)(TryPyre2,{sampleFilename:sampleFilename,isCodeSnippet:isCodeSnippet,codeSample:codeSample,showErrorPanel:showErrorPanel})})});}
;// ./docs/learn-python-typing.mdx


const frontMatter = {
	id: 'learn-python-typing',
	title: 'Learning Python Types',
	slug: '/learn-python-typing',
	description: 'Get to know Python\'s Type System with working examples'
};
const contentTitle = 'Give Pyrefly a try with some working examples';

const assets = {

};




const toc = [{
  "value": "The Basics",
  "id": "the-basics",
  "level": 2
}, {
  "value": "Functions",
  "id": "functions",
  "level": 2
}, {
  "value": "Generics",
  "id": "generics",
  "level": 2
}, {
  "value": "Protocols",
  "id": "protocols",
  "level": 2
}, {
  "value": "Dataclasses",
  "id": "dataclasses",
  "level": 2
}, {
  "value": "TypedDict",
  "id": "typeddict",
  "level": 2
}, {
  "value": "Overloads",
  "id": "overloads",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    h2: "h2",
    header: "header",
    p: "p",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "give-pyrefly-a-try-with-some-working-examples",
        children: "Give Pyrefly a try with some working examples"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Python's type system allow you to annotate variables so you, your teammates and your type checker can find bugs before you run your code. Think of it as documentation that's automatically validated and will help your IDE help you."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "With the help of type hints, you can catch errors early, improve code completion, and make your code more self-documenting.\nIn this guide, we'll explore the different features of Python's type system, including generics, protocols, dataclasses, typed dictionaries, and overloads. Each section includes a brief description of the feature, along with a working example that you can try out using Pyrefly."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "the-basics",
      children: "The Basics"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Python's built-in types can be used to write many simple type hints."
    }), "\n", (0,jsx_runtime.jsx)("pre", {
      children: (0,jsx_runtime.jsx)(TryPyre2BrowserOnly, {
        sampleFilename: "basic_types.py",
        isCodeSnippet: true,
        codeSample: `# Example: Basic Types

from typing import reveal_type

age: int = 5
reveal_type(age) # revealed type: Literal[5]

age = "oops"

name: str = "John"
reveal_type(name) # revealed type: Literal['John']

numbers: list[int] = [1, 2, 3]
reveal_type(numbers) # revealed type: list[int]

names: list[str] = ["John", "Jane"]
reveal_type(names) # revealed type: list[str]

person: dict[str, str] = {"name": "John", "age": "30"}
reveal_type(person) # revealed type: dict[str, str]

is_admin: bool = True
reveal_type(is_admin) # revealed type: Literal[True]
`,
        showErrorPanel: false
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "functions",
      children: "Functions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Defining the parameter and return types for a function doesn't just help prevent bugs, but it makes it easier to navigate in other files. You don't always need to define a return type - we'll do our best to infer it for you! We can't always get it right and an explicit return type will help your IDE navigate faster and more accurately."
    }), "\n", (0,jsx_runtime.jsx)("pre", {
      children: (0,jsx_runtime.jsx)(TryPyre2BrowserOnly, {
        sampleFilename: "functions.py",
        isCodeSnippet: true,
        codeSample: `# Example: Functions

from typing import reveal_type

def greet(name: str) -> str:
  return f"Hello , {name}!"

greet("Pyrefly")

def whatDoesThisFunctionReturnAgain(a: int, b: int):
  return a + b

reveal_type(whatDoesThisFunctionReturnAgain(2, 3)) # revealed type: int
`,
        showErrorPanel: false
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "generics",
      children: "Generics"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Generics allow you to define reusable functions and classes that work with multiple types. This feature enables you to write more flexible and adaptable code."
    }), "\n", (0,jsx_runtime.jsx)("pre", {
      children: (0,jsx_runtime.jsx)(TryPyre2BrowserOnly, {
        sampleFilename: "generics.py",
        isCodeSnippet: true,
        codeSample: `# Example: Generic Classes

from typing import reveal_type

class C[T]:
  def __init__(self, x: T):
      self.x = x
  def box(self) -> list[T]:
      return [self.x]

c = C(0)
reveal_type(c.box())  # revealed type: list[int]
`,
        showErrorPanel: false
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "protocols",
      children: "Protocols"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Protocols enable structural typing, which allows you to define interfaces without explicit inheritance. This feature helps you write more modular and composable code."
    }), "\n", (0,jsx_runtime.jsx)("pre", {
      children: (0,jsx_runtime.jsx)(TryPyre2BrowserOnly, {
        sampleFilename: "protocols.py",
        isCodeSnippet: true,
        codeSample: `# Example: Structural Typing with Protocols

from typing import Iterable, Protocol

class Writer(Protocol):
  def write(self) -> None: ...

class GoodWorld:
  def write(self) -> None:
      print("Hello world!")

class BadWorld:
  pass

def f(writer: Writer):
  pass

f(GoodWorld()) # OK
f(BadWorld())  # ERROR!
`,
        showErrorPanel: false
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "dataclasses",
      children: "Dataclasses"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Dataclasses allow you to create type-safe data structures while minimizing boilerplate."
    }), "\n", (0,jsx_runtime.jsx)("pre", {
      children: (0,jsx_runtime.jsx)(TryPyre2BrowserOnly, {
        sampleFilename: "data_classes.py",
        isCodeSnippet: true,
        codeSample: `# Example: Dataclasses

from dataclasses import dataclass

@dataclass
class Point:
  x: float
  y: float

Point(x=0.0, y=0.0)    # OK
Point(x=0.0, y="oops") # ERROR!
`,
        showErrorPanel: false
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typeddict",
      children: "TypedDict"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Typed dictionaries enable you to define dictionaries with specific key-value types. This feature lets you bring type safety to ad-hoc dictionary structures without major refactoring."
    }), "\n", (0,jsx_runtime.jsx)("pre", {
      children: (0,jsx_runtime.jsx)(TryPyre2BrowserOnly, {
        sampleFilename: "typed_dict.py",
        isCodeSnippet: true,
        codeSample: `# Example: TypedDict

from typing import TypedDict

class Movie(TypedDict):
  name: str
  year: int

good_movie: Movie = {"name": "Toy Story", "year": 1995} # OK
bad_movie: Movie = {"name": "The Room", "year": "2003"}  # ERROR!
`,
        showErrorPanel: false
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "overloads",
      children: "Overloads"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Overloads allow you to define multiple function signatures for a single function. Like generics, this feature helps you write more flexible and adaptable code."
    }), "\n", (0,jsx_runtime.jsx)("pre", {
      children: (0,jsx_runtime.jsx)(TryPyre2BrowserOnly, {
        sampleFilename: "overloads.py",
        isCodeSnippet: true,
        codeSample: `# Example: Overloads

from typing import overload, reveal_type

@overload
def f(x: int) -> int: ...

@overload
def f(x: str) -> str: ...

def f(x: int | str) -> int | str:
  return x

reveal_type(f(0))  # revealed type: int
reveal_type(f("")) # revealed type: str
`,
        showErrorPanel: false
      })
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



/***/ }),

/***/ 35363:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ BrowserOnly)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _docusaurus_useIsBrowser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9136);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74848);
function BrowserOnly(_ref){let{children,fallback}=_ref;const isBrowser=(0,_docusaurus_useIsBrowser__WEBPACK_IMPORTED_MODULE_1__["default"])();if(isBrowser){if(typeof children!=='function'&&"production"==='development'){}return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:children?.()});}return fallback??null;}

/***/ })

}]);
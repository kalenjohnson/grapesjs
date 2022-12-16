(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{367:function(t,a,s){"use strict";s.r(a);var e=s(13),n=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"assets"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#assets"}},[t._v("#")]),t._v(" Assets")]),t._v(" "),a("p",[t._v("You can customize the initial state of the module from the editor initialization, by passing the following "),a("a",{attrs:{href:"https://github.com/artf/grapesjs/blob/master/src/asset_manager/config/config.ts",target:"_blank",rel:"noopener noreferrer"}},[t._v("Configuration Object"),a("OutboundLink")],1)]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" editor "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" grapesjs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("init")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("assetManager")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// options")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("Once the editor is instantiated you can use its API. Before using these methods you should get the module from the instance")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" assetManager "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" editor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("AssetManager"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"available-events"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#available-events"}},[t._v("#")]),t._v(" Available Events")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("asset:open")]),t._v(" - Asset Manager opened.")]),t._v(" "),a("li",[a("code",[t._v("asset:close")]),t._v(" - Asset Manager closed.")]),t._v(" "),a("li",[a("code",[t._v("asset:add")]),t._v(" - Asset added. The "),a("RouterLink",{attrs:{to:"/api/asset.html"}},[t._v("Asset")]),t._v(" is passed as an argument to the callback.")],1),t._v(" "),a("li",[a("code",[t._v("asset:remove")]),t._v(" - Asset removed. The "),a("RouterLink",{attrs:{to:"/api/asset.html"}},[t._v("Asset")]),t._v(" is passed as an argument to the callback.")],1),t._v(" "),a("li",[a("code",[t._v("asset:update")]),t._v(" - Asset updated. The updated "),a("RouterLink",{attrs:{to:"/api/asset.html"}},[t._v("Asset")]),t._v(" and the object containing changes are passed as arguments to the callback.")],1),t._v(" "),a("li",[a("code",[t._v("asset:upload:start")]),t._v(" - Before the upload is started.")]),t._v(" "),a("li",[a("code",[t._v("asset:upload:end")]),t._v(" - After the upload is ended.")]),t._v(" "),a("li",[a("code",[t._v("asset:upload:error")]),t._v(" - On any error in upload, passes the error as an argument.")]),t._v(" "),a("li",[a("code",[t._v("asset:upload:response")]),t._v(" - On upload response, passes the result as an argument.")]),t._v(" "),a("li",[a("code",[t._v("asset")]),t._v(" - Catch-all event for all the events mentioned above. An object containing all the available data about the triggered event is passed as an argument to the callback.")]),t._v(" "),a("li",[a("code",[t._v("asset:custom")]),t._v(" - Event for handling custom Asset Manager UI.")])]),t._v(" "),a("h2",{attrs:{id:"methods"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#methods"}},[t._v("#")]),t._v(" Methods")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#open"}},[t._v("open")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#close"}},[t._v("close")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#isopen"}},[t._v("isOpen")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#add"}},[t._v("add")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#get"}},[t._v("get")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#getall"}},[t._v("getAll")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#getallvisible"}},[t._v("getAllVisible")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#remove"}},[t._v("remove")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#getcontainer"}},[t._v("getContainer")])])]),t._v(" "),a("h2",{attrs:{id:"open"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#open"}},[t._v("#")]),t._v(" open")]),t._v(" "),a("p",[t._v("Open the asset manager.")]),t._v(" "),a("h3",{attrs:{id:"parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[t._v("#")]),t._v(" Parameters")]),t._v(" "),a("ul",[a("li",[a("p",[a("code",[t._v("options")]),t._v(" "),a("strong",[a("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object",target:"_blank",rel:"noopener noreferrer"}},[t._v("Object"),a("OutboundLink")],1),t._v("?")]),t._v(" Options for the asset manager. (optional, default "),a("code",[t._v("{}")]),t._v(")")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("options.types")]),t._v(" "),a("strong",[a("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array",target:"_blank",rel:"noopener noreferrer"}},[t._v("Array"),a("OutboundLink")],1),t._v("<"),a("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String",target:"_blank",rel:"noopener noreferrer"}},[t._v("String"),a("OutboundLink")],1),t._v(">")]),t._v(" Types of assets to show. (optional, default "),a("code",[t._v("['image']")]),t._v(")")]),t._v(" "),a("li",[a("code",[t._v("options.select")]),t._v(" "),a("strong",[a("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function",target:"_blank",rel:"noopener noreferrer"}},[t._v("Function"),a("OutboundLink")],1),t._v("?")]),t._v(" Type of operation to perform on asset selection. If not specified, nothing will happen.")])])])]),t._v(" "),a("h3",{attrs:{id:"examples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("assetManager"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("open")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("select")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("asset"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" complete")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" selected "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" editor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getSelected")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("selected "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" selected"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("is")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'image'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n     selected"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addAttributes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("src")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" asset"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getSrc")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The default AssetManager UI will trigger `select(asset, false)` on asset click")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// and `select(asset, true)` on double-click")]),t._v("\n     complete "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" assetManager"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("close")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// with your custom types (you should have assets with those types declared)")]),t._v("\nassetManager"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("open")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("types")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'doc'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"close"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#close"}},[t._v("#")]),t._v(" close")]),t._v(" "),a("p",[t._v("Close the asset manager.")]),t._v(" "),a("h3",{attrs:{id:"examples-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples-2"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("assetManager"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("close")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"isopen"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#isopen"}},[t._v("#")]),t._v(" isOpen")]),t._v(" "),a("p",[t._v("Checks if the asset manager is open")]),t._v(" "),a("h3",{attrs:{id:"examples-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples-3"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("assetManager"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("isOpen")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true | false")]),t._v("\n")])])]),a("p",[t._v("Returns "),a("strong",[a("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean",target:"_blank",rel:"noopener noreferrer"}},[t._v("Boolean"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"add"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#add"}},[t._v("#")]),t._v(" add")]),t._v(" "),a("p",[t._v("Add new asset/s to the collection. URLs are supposed to be unique")]),t._v(" "),a("h3",{attrs:{id:"parameters-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parameters-2"}},[t._v("#")]),t._v(" Parameters")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("asset")]),t._v(" "),a("strong",[t._v("("),a("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String",target:"_blank",rel:"noopener noreferrer"}},[t._v("String"),a("OutboundLink")],1),t._v(" | "),a("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object",target:"_blank",rel:"noopener noreferrer"}},[t._v("Object"),a("OutboundLink")],1),t._v(" | "),a("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array",target:"_blank",rel:"noopener noreferrer"}},[t._v("Array"),a("OutboundLink")],1),t._v("<"),a("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String",target:"_blank",rel:"noopener noreferrer"}},[t._v("String"),a("OutboundLink")],1),t._v("> | "),a("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array",target:"_blank",rel:"noopener noreferrer"}},[t._v("Array"),a("OutboundLink")],1),t._v("<"),a("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object",target:"_blank",rel:"noopener noreferrer"}},[t._v("Object"),a("OutboundLink")],1),t._v(">)")]),t._v(" URL strings or an objects representing the resource.")]),t._v(" "),a("li",[a("code",[t._v("opts")]),t._v(" "),a("strong",[a("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object",target:"_blank",rel:"noopener noreferrer"}},[t._v("Object"),a("OutboundLink")],1),t._v("?")]),t._v(" Options (optional, default "),a("code",[t._v("{}")]),t._v(")")])]),t._v(" "),a("h3",{attrs:{id:"examples-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples-4"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// As strings")]),t._v("\nassetManager"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://img.jpg'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nassetManager"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://img.jpg'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./path/to/img.png'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Using objects you can indicate the type and other meta informations")]),t._v("\nassetManager"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// type: 'image',\t// image is default")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("src")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://img.jpg'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("height")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("300")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nassetManager"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("src")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'img2.jpg'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("src")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'img2.png'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("Returns "),a("strong",[a("RouterLink",{attrs:{to:"/api/asset.html"}},[t._v("Asset")])],1)]),t._v(" "),a("h2",{attrs:{id:"get"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get"}},[t._v("#")]),t._v(" get")]),t._v(" "),a("p",[t._v("Return asset by URL")]),t._v(" "),a("h3",{attrs:{id:"parameters-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parameters-3"}},[t._v("#")]),t._v(" Parameters")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("src")]),t._v(" "),a("strong",[a("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String",target:"_blank",rel:"noopener noreferrer"}},[t._v("String"),a("OutboundLink")],1)]),t._v(" URL of the asset")])]),t._v(" "),a("h3",{attrs:{id:"examples-5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples-5"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" asset "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" assetManager"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://img.jpg'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("Returns "),a("strong",[t._v("("),a("RouterLink",{attrs:{to:"/api/asset.html"}},[t._v("Asset")]),t._v(" | null)")],1)]),t._v(" "),a("h2",{attrs:{id:"getall"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getall"}},[t._v("#")]),t._v(" getAll")]),t._v(" "),a("p",[t._v("Return the global collection, containing all the assets")]),t._v(" "),a("p",[t._v("Returns "),a("strong",[t._v("Collection<"),a("RouterLink",{attrs:{to:"/api/asset.html"}},[t._v("Asset")]),t._v(">")],1)]),t._v(" "),a("h2",{attrs:{id:"getallvisible"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getallvisible"}},[t._v("#")]),t._v(" getAllVisible")]),t._v(" "),a("p",[t._v("Return the visible collection, which contains assets actually rendered")]),t._v(" "),a("p",[t._v("Returns "),a("strong",[t._v("Collection<"),a("RouterLink",{attrs:{to:"/api/asset.html"}},[t._v("Asset")]),t._v(">")],1)]),t._v(" "),a("h2",{attrs:{id:"remove"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#remove"}},[t._v("#")]),t._v(" remove")]),t._v(" "),a("p",[t._v("Remove asset")]),t._v(" "),a("h3",{attrs:{id:"parameters-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parameters-4"}},[t._v("#")]),t._v(" Parameters")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("asset")]),t._v(" "),a("strong",[t._v("("),a("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String",target:"_blank",rel:"noopener noreferrer"}},[t._v("String"),a("OutboundLink")],1),t._v(" | "),a("RouterLink",{attrs:{to:"/api/asset.html"}},[t._v("Asset")]),t._v(")")],1),t._v(" Asset or asset URL")]),t._v(" "),a("li",[a("code",[t._v("opts")]),t._v(" "),a("strong",[t._v("Record<"),a("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String",target:"_blank",rel:"noopener noreferrer"}},[t._v("string"),a("OutboundLink")],1),t._v(", any>?")])])]),t._v(" "),a("h3",{attrs:{id:"examples-6"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples-6"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" removed "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" assetManager"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("remove")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://img.jpg'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// or by passing the Asset")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" asset "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" assetManager"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://img.jpg'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nassetManager"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("remove")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("asset"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("Returns "),a("strong",[a("RouterLink",{attrs:{to:"/api/asset.html"}},[t._v("Asset")])],1),t._v(" Removed asset")]),t._v(" "),a("h2",{attrs:{id:"getcontainer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getcontainer"}},[t._v("#")]),t._v(" getContainer")]),t._v(" "),a("p",[t._v("Return the Asset Manager Container")]),t._v(" "),a("p",[t._v("Returns "),a("strong",[a("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/HTML/Element",target:"_blank",rel:"noopener noreferrer"}},[t._v("HTMLElement"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=n.exports}}]);
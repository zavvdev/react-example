const COMPONENT_NODE_TYPES = {
  containers: "containers",
  layouts: "layouts",
  shared: "shared",
  pages: "pages",
};

const COMPONENT_NODE_TYPE_SINGULAR_BY_TYPES = {
  [COMPONENT_NODE_TYPES.containers]: "container",
  [COMPONENT_NODE_TYPES.layouts]: "layout",
  [COMPONENT_NODE_TYPES.shared]: "shared",
  [COMPONENT_NODE_TYPES.pages]: "page",
};

module.exports = {
  COMPONENT_NODE_TYPES,
  COMPONENT_NODE_TYPE_SINGULAR_BY_TYPES,
};

const COMPONENT_LIKE_TYPES = {
  containers: "containers",
  layouts: "layouts",
  shared: "shared",
  pages: "pages",
};

const COMPONENT_LIKE_TYPE_SINGULAR_BY_TYPES = {
  [COMPONENT_LIKE_TYPES.containers]: "container",
  [COMPONENT_LIKE_TYPES.layouts]: "layout",
  [COMPONENT_LIKE_TYPES.shared]: "shared",
  [COMPONENT_LIKE_TYPES.pages]: "page",
};

module.exports = {
  COMPONENT_LIKE_TYPES,
  COMPONENT_LIKE_TYPE_SINGULAR_BY_TYPES,
};
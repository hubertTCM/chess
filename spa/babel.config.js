module.exports = {
  presets: [
    ["@babel/env", { useBuiltIns: "usage", corejs: 2 }],
    "@babel/react",
    ["@babel/typescript", { isTSX: true, allExtensions: true }]
  ],
  plugins: [
    "@babel/proposal-class-properties",
    "@babel/proposal-object-rest-spread"
  ]
};

# react-common-tools
A collection of function that common to use.

```javascript
/**
 * @description 
 * Get dom node object.
 * @param @required {string} name: the node name.
 * @return {object} the dom node object.
 * @example getNode('.box')
 */
getNode(name)

/**
 * @description 
 * Get param value of dom node object.
 * @param @required {string} name: the node name.
 * @param @required {string} param: the node param.
 * @return {object} the value of dom node param.
 * @example getNodeValue('.box','offsetWidth')
 */
getNodeValue(name, param)

/**
 * @description 
 * Get dom object.
 * @param @required {string} name: the dom name.
 * @return {object} the dom.
 * @example getDom('box')
 */
getDom(name)

/**
 * @description 
 * Get param value of dom object.
 * @param @required {string} name: the dom name.
 * @param @required {string} param: the dom param.
 * @return {object} the value of dom param.
 * @example getDomValue('box','offsetWidth')
 */
getDomValue(name, param)

/**
 * @description
 * Get subRoutePath
 * @param @required {string} name: the path string.
 * @param @required {number} [level = 1]: the level of path node.
 * @return {string} the subRoutePath.
 * @example subRoutePath('/a/b/c',2) will return 'b'
 */
subRoutePath(path, level)

```

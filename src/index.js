const getCommasIndex = (path,level) => {
    for(let i = 0; i < level-1; i++) {
        path = path.replace('/','@')
    }
    return path.indexOf('/')
}

export const getNode = (name) => {
    return document.querySelectorAll(name)
}

export const getNodeValue = (name, param) => {
    return document.querySelectorAll(name)[0][param]
}

export const getDom = (name) => {
    return document.getElementsByClassName(name)
}

export const getDomValue = (name, param) => {
  let value
  for(let d = 0; d < document.styleSheets.length; d++) {
    let sty, ruls = document.styleSheets[d].cssRules
    for(let i = 0; i < ruls.length; i++) {
      sty = ruls[i]
      if(sty.selectorText && (sty.selectorText.toLowerCase() == name.toLowerCase())) {
        value = sty.style[param]
      }
    }
  }
  return value
}

export const subRoutePath = (path, level = 1) => {
    let subpathBegin = getCommasIndex(path,level)
    let spb = subpathBegin
    if(spb < 0 || spb == path.length-1) {
        path = undefined
    }else {
        if(path != spb) {
            let s = spb
            let e = getCommasIndex(path,level+1)
            if(e < 0)  e = undefined
            path = path.substring(s+1,e)
        }else {
            path =  undefined
        }
    }
    return path
}

export default {subRoutePath}

// import * as d from '../../a/b/c/d' // 通常で動作
// import * as d from 'a/b/c/d' // baseUrl 通常では解決されない
import * as d from '@C/d' // paths 通常では解決されない

import * as aChild from '@A/a_child'

export const z = d.deep

export const zAdd = (a: number, b: number): number => {
  console.log(aChild.aChild)
  return d.dAdd(a, b)
}


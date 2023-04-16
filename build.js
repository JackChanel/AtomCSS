const buildSpacing = function () {
  const T = new Map([
    ['p', 'padding'],
    ['m', 'margin']
  ])
  const D = new Map([
    ['t', ['top']],
    ['r', ['right']],
    ['b', ['bottom']],
    ['l', ['left']],
    ['a', ['top', 'right', 'bottom', 'left']],
    ['x', ['left', 'right']],
    ['y', ['top', 'bottom']]
  ])
  const S = new Map([
    ['none', 0],
    ['auto', 'auto'],
    ['xs', '2rpx'],
    ['sm', '4rpx'],
    ['md', '8rpx'],
    ['lg', '16rpx'],
    ['xl', '32rpx']
  ])
  let res = ''
  for (const t of T.keys()) {
    for (const d of D.keys()) {
      for (const s of S.keys()) {
        if (s === 'auto' && !['l', 'r', 'x'].includes(d)) continue
        const name = `.${t}${d}-${s}`
        const value = S.get(s)
        const prop = T.get(t)
        const dir = D.get(d)
        res += name + ' {'
        for (const d of dir) {
          res += `${prop}-${d}: ${value};`
        }
        res += '}'
      }
    }
  }
  console.log(res)
  return res
}

const buildRotate = function () {
  const step = 45
  const begin = 45
  const end = 315
  let res = ''
  for (let i = begin; i <= end; i += step) {
    res += `.rotate-${i} {transform: rotate(${i}deg);}`
  }
  console.log(res)
}

// buildSpacing()
// buildRotate()

module.exports = {
  buildSpacing, // 生成间距类
  buildRotate // 生成旋转类
}

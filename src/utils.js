export const groupBy = (arr, property) => {
  return arr.reduce(function (memo, x) {
    if (!memo[x[property]]) {
      memo[x[property]] = []
    }
    memo[x[property]].push(x)
    return memo
  }, {})
}

export const sortNodesBy = (dataObj, field) =>
  dataObj.sort((a, b) => {
    if (a.node[field] === null && b.node[field] !== null) {
      return 1
    } else if (a.node[field] !== null && a.node[field] === null) {
      return -1
    }

    if (a.node[field] === b.node[field]) return 0
    return a.node[field].localeCompare(b.node[field])
  })

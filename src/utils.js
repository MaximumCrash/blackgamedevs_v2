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
    if (a[field] === null && b[field] !== null) {
      return 1
    } else if (a[field] !== null && a[field] === null) {
      return -1
    }

    if (a[field] === b[field]) return 0
    return a[field].localeCompare(b[field])
  })

//Turns Hello World -> helloWorld
//Taken from: https://stackoverflow.com/questions/2970525/converting-any-string-into-camel-case
export const camelize = (str) => {
  return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function(match, index) {
    if (+match === 0) return ""; // or if (/\s+/.test(match)) for white spaces
    return index === 0 ? match.toLowerCase() : match.toUpperCase();
  });
}

export const sanitizeFilter = (rawBody, fragment) => rawBody.substring(
        rawBody.lastIndexOf(`<${fragment}>`) + (fragment.length + 3),
        rawBody.lastIndexOf(`</${fragment}>`)
      )
      .replace(/[-.#`!*()]["]|[0-9]\./g, "") //Replace MD usual characters with empty
      .split("\n") //Split by new lines
      .filter(n => n !== "")
      .map(n => {
        const label = n.trim();
        const key = camelize(label);

        const set = fragment.toLowerCase();

        return {label, key, set: /\b\w+s\b/.test(set) ? set : `${set}s` }
      })

export const flattenSkills = (AllFilters, set) => AllFilters.map((node) => node[set]).flat(1).reduce((acc, current) => {
    const x = acc.find(item => item.key === current.key);
    if (!x) {
      return acc.concat([current]);
    }
    else {
      return acc; 
    }
  }, []);

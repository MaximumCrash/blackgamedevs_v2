//Groups array of objects by a property.
export const groupBy = (arr, property) => {
  return arr.reduce(function (memo, x) {
    if (!memo[x[property]]) {
      memo[x[property]] = []
    }
    memo[x[property]].push(x)
    return memo
  }, {})
}

//Sort our nodes based on a specific field.
//NOTE(Rejon): How we sort by "name"
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
export const camelize = str => {
  return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function (match, index) {
    if (+match === 0) return "" // or if (/\s+/.test(match)) for white spaces
    return index === 0 ? match.toLowerCase() : match.toUpperCase()
  })
}

//Sanitizes our filter string based on the data contained between
//react component Fragments (ie. <Skills>{get everything between}</Skills>)
export const sanitizeFilter = (rawBody, fragment) =>
  rawBody
    .substring(
      rawBody.lastIndexOf(`<${fragment}>`) + (fragment.length + 3),
      rawBody.lastIndexOf(`</${fragment}>`)
    )
    .replace(/[-.#`!*()]["]|[0-9]\./g, "") //Replace MD usual characters with empty string
    .split("\n") //Split by new lines
    .filter(n => n !== "") //Remove empty strings
    .map(n => {
      const label = n.trim() //Remove whitespace from ends.
      const key = camelize(label) //camelCase our Key for easier management in code (NOTE): This is because ANYTHING can be a filter.

      const set = fragment.toLowerCase() //our filter "set"

      //Check and make sure our set always ends in "s"
      //NOTE(Rejon): <Location> -> locations
      return { label, key, set: /\b\w+s\b/.test(set) ? set : `${set}s` }
    })

//This is takes in AllFilters which come seperated by Skills/Location/ect. because of how our data is written.
//It outputs an array of skills flattend by their key.
//TLDR: Turns [ {{skills: {a, b, c}, locations: {d, e ,f}}, ...] -> [{skills: [all skills]}, {locations: [all locations]}]
export const flattenSkills = (AllFilters, set) =>
  AllFilters.map(node => node[set])
    .flat(1)
    .reduce((acc, current) => {
      const x = acc.find(item => item.key === current.key)
      if (!x) {
        return acc.concat([current])
      } else {
        return acc
      }
    }, [])

//Filters our search results by checking against our filters by group and by the result's type.
//We then return the merged data by fetching it safely from our AllData (queried in PageContext)
export const filterSearchResults = ({
  searchResults,
  filters,
  filtersGrouped,
  AllData,
  type,
}) => {
  return searchResults
    .filter(n => {
      if (filters.length > 0) {
        // <- If we have filters. Then filter searchResults by type AND by our filters
        const hasFilter = Object.keys(filtersGrouped) //Get our filters by group (Since the results have filters in Skills/Location keys)
          .map(group => {
            //For each group, check if our result includes the label based on it's group. (We do label because of AutoMagic)
            return filtersGrouped[group].some(item =>
              n[group].includes(item.label)
            )
          })
          .every(v => v === true) //Every single CURRENT filter must exist in our result. "some" won't work here.

        return hasFilter && n.type === type //Return this result if it's our type and the filters checkout.
      } else {
        return n.type === type //No filters, just return results that match the type.
      }
    })
    .map(d => {
      //Map all the results, but our results don't store our MDX, so we grab it from AllData and merge the data.
      const { node } = AllData[d.type].find(({ node }) => node.id === d.id)
      return { ...d, ...node }
    })
}

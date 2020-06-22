/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const { GraphQLJSONObject } = require(`graphql-type-json`)
const striptags = require(`striptags`)
const lunr = require(`lunr`)

const sanitizeFilter = (rawBody, fragment) =>
  rawBody
    .substring(
      rawBody.lastIndexOf(`<${fragment}>`) + (fragment.length + 3),
      rawBody.lastIndexOf(`</${fragment}>`)
    )
    .replace(/[-.#`!*()]["]|[0-9]\./g, "") //Replace MD usual characters with empty
    .split("\n") //Split by new lines
    .filter(n => n !== "")
    .map(n => {
      const label = n.trim()

      return label
    })

const createIndex = async (dirNodes, type, cache) => {
const cacheKey = `IndexLunr`
  const cached = await cache.get(cacheKey)
  if (cached) {
    return cached
  }
  const documents = []
  const store = {}
  // Iterate over all posts 
  for (const node of dirNodes) {
	  const {rawBody, id} = node;
	const doc = {
		name: rawBody
				.split("\n")
				.find(n => n[0] === "#")
				.replace(/^#\s/, ""),
		nameNormalized: rawBody
				.split("\n")
				.find(n => n[0] === "#")
				.replace(/^#\s/, "").normalize("NFD").replace(/[\u0300-\u036f]/g, ""),
		location: sanitizeFilter(rawBody, "Location"),
		skills: sanitizeFilter(rawBody, "Skills"),
		id,
		type: node.frontmatter.isCompany ? 'companies' : 'people'
	};
    documents.push(doc)
	store[id] = doc
  }
	
  const index = lunr(function() {
    this.ref(`id`)
    this.field(`name`)
	this.field(`nameNormalized`)
    this.field(`location`)
	this.field(`skills`)
	this.field(`id`)
	this.field(`type`)
      this.pipeline.remove(lunr.stopWordFilter)
    for (const doc of documents) {
      this.add(doc)
    }
  })

  const json = {index: index.toJSON(), store}

  await cache.set(cacheKey, json)
  return json
}

exports.createResolvers = ({ cache, createResolvers }) => {
  createResolvers({
    Query: {
      LunrIndex: {
        type: GraphQLJSONObject,
        resolve: (source, args, context, info) => {
          const directoryNodes = context.nodeModel.getAllNodes({
            type: `Mdx`,
          }).filter(node =>
              node.frontmatter !== undefined &&
              node.fileAbsolutePath &&
              node.fileAbsolutePath.match(/(\/directory\/).+/) !== null)
          const type = info.schema.getType(`Mdx`)
          return createIndex(directoryNodes, type, cache)
        },
      },
    },
  })
}

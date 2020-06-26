const json2md = require("json2md")
const fs = require("fs")
const path = require("path")
const shortid = require("shortid")

const people = require("../DEPRECATED/people.json")
const companies = require("../DEPRECATED/companies.json")

json2md.converters.name = (input, json2md) => {
  return `# ${input}`
}

json2md.converters.image = ({ input, imageAlt }) => {
  if (input === "http://image-link-here.com/image.png") {
    return ""
  }

  let imgURL = input
  const imageName =
    imageAlt ||
    input
      .match(/[ \w-]+\./g)
      .pop()
      .replace(".", "")

  return `![${imageName}](${imgURL})`
}

json2md.converters.skills = input => {
  return `<Skills>\n\n${input.map(
    skill => `${skill.trim()}\n\n`
  )}</Skills>`.replace(/\,/g, "")
}

json2md.converters.location = input => {
  if (input === "WRITE YOUR COUNTRY NAME HERE WITHOUT ACRONYMS") {
    return ""
  }

  return `<Location>\n\n${input}\n\n</Location>`
}

json2md.converters.websites = input => {
  const defaults = [
    "http://link-here.com",
    "https://twitter.com/username-here",
    "https://facebook.com/username-here",
    "https://instagram.com/username-here",
    "https://youtube.com/username-here",
    "https://www.patreon.com/username-here",
  ]

  if (Array.isArray(input)) {
    return `<Website>\n\n${input
      .filter(site => !defaults.includes(site[1]))
      .map(
        site => `[${site[0].trim()}](${site[1] ? site[1].trim() : ""})\n\n`
      )}</Website>`.replace(/\,/g, "")
  } else {
    return Object.keys(input)
      .map(key => {
        const _data = input[key]
        const fragmentKey = key.charAt(0).toUpperCase() + key.slice(1)

        return `<${fragmentKey}>\n\n${_data.map(
          site => `[${site[0].trim()}](${site[1] ? site[1].trim() : ""})\n\n`
        )}</${fragmentKey}>`.replace(/\,/g, "")
      })
      .map(type => `${type}\n\n`.replace(/\,/g, ""))
      .join("")
  }
}

json2md.converters.games = input => {
  const defaults = [
    "http://link-here.com",
    "https://twitter.com/username-here",
    "https://facebook.com/username-here",
    "https://instagram.com/username-here",
    "https://youtube.com/username-here",
    "https://www.patreon.com/username-here",
  ]

  return `<Games>\n\n${input
    .filter(game => !defaults.includes(game[1]))
    .map(game => `[${game[0]}](${game[1]})\n\n`)}</Games>`.replace(/\,/g, "")
}

//This is because there's a type in the existing companies data.
json2md.converters.ganes = json2md.converters.games

const entryTransformer = file => {
  file.splice(0, 1) //<- Remove the first element cause it's the template.

  const _peopleData = file.map(entry =>
    Object.keys(entry)
      .filter(n => entry[n] !== "" && entry[n] !== null)
      .map(field => {
        const returnObj = {}
        returnObj[field] = entry[field]

        if (field === "image" && entry.name) {
          returnObj[field] = { input: entry[field], imageAlt: entry.name }
        }

        return returnObj
      })
  )

  return _peopleData
}

const transformToFile = () => {
  const peopleData = entryTransformer(people)

  peopleData.map((person, index) => {
    let { name } =
      person.find(n => Object.keys(n)[0] === "name") || `person_${index}`
    let mdxData = json2md(person)

    const fileName = name
      .trim()
      .replace(/\s/g, "_")
      .replace(/[^a-zA-Z0-9\_]/g, "")

    fs.writeFile(
      `${__dirname}/../directory/${fileName}.mdx`,
      mdxData,
      (err, data) => {
        if (err) return console.error(err, data)
      }
    )
  })

  const companyData = entryTransformer(companies)

  companyData.map((company, index) => {
    let { name } =
      company.find(n => Object.keys(n)[0] === "name") || `company_${index}`
    let mdxData = `---\nisCompany: true\n---\n\n${json2md(company)}`

    const fileName = name
      .trim()
      .replace(/\s/g, "_")
      .replace(/[^a-zA-Z0-9\_]/g, "")

    fs.writeFile(
      `${__dirname}/../directory/${fileName}.mdx`,
      mdxData,
      (err, data) => {
        if (err) return console.error(err, data)
      }
    )
  })
}

transformToFile()

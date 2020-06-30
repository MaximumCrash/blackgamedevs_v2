const json2md = require("json2md") //<- We use this with custom converters to make our MDX content. 
const fs = require("fs")

const people = require("../DEPRECATED/people.json") //<- Old People JSON
const companies = require("../DEPRECATED/companies.json") //<- Old Companies JSON

//This is the preferred order we'd like to see the MDX data in. 
//This is important for accessibility, because the results render in the order
//they are written. Even though we use the order: X property to ensure display
//consistency this means that folks who use screen readers will hear the order of content
//differently.
const preferredOrder = ["name", "location", "image", "skills", "websites", "business", "games", "ganes"]

//Converts the name from JSON into "# NAME" for Markdown
json2md.converters.name = (input, json2md) => {
  return `# ${input}`
}

//Grabs the image url, imageAlt (in the form of the persons name), and out puts it as
//![ImageName](Image URL) <- Markdown Image
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

//Takes the skills data, removes any extra whitespace and renders
//<Skills> ...each skill with a new line </Skills>
//NOTE(Rejon): json2md likes to put commas in the strings sometimes, make sure to remove them. 
json2md.converters.skills = input => {
  return `<Skills>\n\n${input.map(
    skill => `${skill.trim()}\n\n`
  )}</Skills>`.replace(/\,/g, "")
}

//Converts the location data into
//<Location> LOCATION NAME </Location>
json2md.converters.location = input => {
  //Check for default
  if (input === "WRITE YOUR COUNTRY NAME HERE WITHOUT ACRONYMS") {
    return ""
  }

  return `<Location>\n\n${input.trim()}\n\n</Location>`
}


//Grabs the array of website arrays, checks against defaults to remove, 
//trims whitespace, and maps each website with a new line. 
//It renders like: <Website> [Website Name](https://website.com) ...continued </Website>


//However, because there are different kinds of websites like "personal" or "business"
//we make sure to support those with their own fragments like <Personal> and <Business>
json2md.converters.websites = input => {
  const defaults = [
    "http://link-here.com",
    "https://twitter.com/username-here",
    "https://facebook.com/username-here",
    "https://instagram.com/username-here",
    "https://youtube.com/username-here",
    "https://www.patreon.com/username-here",
  ]

  //If the input is just an array, we use <Website> as a default
  //ie. Companies with website links on the site. 
  if (Array.isArray(input)) {
    return `<Website>\n\n${input
      .filter(site => !defaults.includes(site[1])) //Filter out defaults.
      .map(
        site => `[${site[0].trim()}](${site[1] ? site[1].trim() : ""})\n\n`
      )}</Website>`.replace(/\,/g, "")
  } else { //Run through each array for a website type and render it with it's fragment.
    return Object.keys(input)
      .map(key => {
        const _data = input[key].filter(site  => !defaults.includes(site[1])); //Filter out defaults

        const fragmentKey = key.charAt(0).toUpperCase() + key.slice(1)

        return `<${fragmentKey}>\n\n${_data.map(
          site => `[${site[0].trim()}](${site[1] ? site[1].trim() : ""})\n\n`
        )}</${fragmentKey}>`.replace(/\,/g, "")
      })
      .map(type => `${type}\n\n`.replace(/\,/g, ""))
      .join("")
  }
}

//Games are not part of the websites array. 
//But they are a carbon copy of the website rendering logic. 
//ie. <Games> [Game Name](https://game-website.com) ...continued </Games>
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
    .filter(game => !defaults.includes(game[1])) //Filter out defaults
    .map(game => `[${game[0]}](${game[1]})\n\n`)}</Games>`.replace(/\,/g, "")
}

//This is because there's a typo in the existing companies data.
json2md.converters.ganes = json2md.converters.games

//The method that transforms our data into something consumable by json2md. 
//Because json2md requires the data format to be: [{keyname: "String Data"}] 
//we need to convert it like so: [{name: "Réjon Taylor-Foster"}]

//This data then gets parsed through the converters above into a format acceptable
//by our MDX files. 
const entryTransformer = file => {
  file.splice(0, 1) //<- Remove the first element cause it's the template.

  const _outData = file.map(entry =>
    Object.keys(entry).sort((a,b) => { //<- We sort the order here using preferredOrder
        return preferredOrder.indexOf(a) - preferredOrder.indexOf(b)
      })
      .filter(n => entry[n] !== "" && entry[n] !== null) //<- Filter out empty entries that are empty or null
      .map(field => {
        const returnObj = {}
        returnObj[field] = entry[field]

        if (field === "image" && entry.name) { //<- If the field is image, and the entry has a name, we provide the name as the Image Alt. 
          returnObj[field] = { input: entry[field], imageAlt: entry.name }
        }

        return returnObj
      })
  )

  return _outData
}

//The main function of this json-transformer script. 
const main = () => {
  //Transform our people data.
  const peopleData = entryTransformer(people)

  peopleData.map((person, index) => { //<- Map through each individual person and make their MDX file.
    let { name } =
      person.find(n => Object.keys(n)[0] === "name") || `person_${index}` //Get their name
    let mdxData = json2md(person) //<- Convert their data using our transformers.

    const fileName = name
      .trim()
      .replace(/\s/g, "_")
      .replace(/[^a-zA-Z0-9\_]/g, "")

    //Create the file.
    fs.writeFile(
      `${__dirname}/../directory/${fileName}_v1.mdx`,
      mdxData,
      (err, data) => {
        if (err) return console.error(err, data)
      }
    )
  })

  //Do the same thing for the companies data. 
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
      `${__dirname}/../directory/${fileName}_v1.mdx`,
      mdxData,
      (err, data) => {
        if (err) return console.error(err, data)
      }
    )
  })
}

main(); //<- What gets run when we run the script.

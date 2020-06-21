import React from "react"
import Header from "@layouts/header"
import Links from "@components/links"
import Skills from "@components/skills"
import Location from "@components/location"
import { Image, Text } from "theme-ui"
import gameIcon from "@public/icons/icon-game.svg"
import businessIcon from "@public/icons/icon-business.svg"
import iconUser from "@public/icons/icon-user.svg"

export default {
  h1: props => <Text as="h1" className="title" {...props} />,
  h2: props => <Text as="h2" className="subtitle" {...props} />,
  h3: props => <Text as="h3" className="subtext" {...props} />,
  img: props => <Image {...props} className="image" />,
  Header,
  Games: props => (
    <Links {...props} icon={gameIcon} className="games" alt="Games" />
  ),
  Business: props => (
    <Links {...props} icon={businessIcon} className="business" alt="Business" />
  ),
  Personal: props => (
    <Links {...props} icon={iconUser} className="personal" alt="Personal" />
  ),
  Skills,
  Location,
}

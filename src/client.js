import * as contentful from 'contentful'

export const client = contentful.createClient({
    space: process.env.REACT_APP_SPACE_ID,
    accessToken: process.env.REACT_APP_ACCESS_TOKEN
})

client.getSpace(process.env.REACT_APP_SPACE_ID)
.then((space) => space.getEnvironment(process.env.REACT_APP_SPACE_ID))
.then((environment) => environment.getLocale('hi-IN'))
.then((locale) => console.log(locale))
.catch(console.error)
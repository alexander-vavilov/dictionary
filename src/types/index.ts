export type themeType = 'dark' | 'light'

export interface IThemeContext {
  theme: themeType
  changeTheme: (theme: themeType) => void
}

export type phoneticType = {
  text: string
  audio: string
  sourceUrl: string
}

export type definitionType = {
  definition: string
  example: string
}

export type meaningType = {
  partOfSpeech: string
  definitions: definitionType[]
  synonyms: string[]
  antonyms: string[]
}

export interface ISearchResult {
  word: string
  phonetic: string
  phonetics: phoneticType[]
  meanings: meaningType[]
  sourceUrls: string[]
}

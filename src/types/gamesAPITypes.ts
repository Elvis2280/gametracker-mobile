export interface GamesResultsData {
  count: number
  next: string
  previous: string
  results: OneGameResponse[]
}

export interface RootObjectResultsEsrb_rating {
  id: number
  slug: string
  name: string
}

export interface RootObjectResultsPlatformsPlatform {
  id: number
  slug: string
  name: string
}

export interface RootObjectResultsPlatformsRequirements {
  minimum: string
  recommended: string
}

export interface RootObjectResultsPlatforms {
  platform: RootObjectResultsPlatformsPlatform
  released_at: string
  requirements: RootObjectResultsPlatformsRequirements
}

export interface OneGameResponse {
  id: number
  slug: string
  name: string
  released: string
  tba: boolean
  background_image: string
  rating: number
  rating_top: number
  ratings: unknown[]
  ratings_count: number
  reviews_text_count: string
  added: number
  added_by_status: unknown
  metacritic: number
  playtime: number
  suggestions_count: number
  updated: string
  esrb_rating: RootObjectResultsEsrb_rating
  platforms: RootObjectResultsPlatforms[]
}

export interface gameFormattedData {
  id: number
  name: string
  image: string
  score: number
}

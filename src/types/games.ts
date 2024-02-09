export interface CreateGameType {
  name: string
  description: string
  image: string
  status: string
  score: number
  tags: string[] | []
  platforms: string[] | []
}

export interface GameResponseType {
  CreatedAt: string
  ID: number
  Platforms: plaformsType[]
  Tags: tagsType[]
  UpdatedAt: string
  description: string
  email: string
  image: string
  name: string
  status: string
}

export interface plaformsType {
  CreatedAt: string
  ID: number
  UpdatedAt: string
  iconName: string
  name: string
}

export interface tagsType {
  CreatedAt: string
  ID: number
  UpdatedAt: string
  name: string
}

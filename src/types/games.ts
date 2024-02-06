export interface CreateGameType {
  name: string
  description: string
  image: string
  status: string
  score: number
  tags: string[] | []
  platforms: string[] | []
}

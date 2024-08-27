export interface GithubUser {
  id: number
  login: string
  bio: string
  avatar_url: string
  name: string
  company: string
  html_url: string
  followers: number
}


export interface Issue {
  items: [{
    id: number
    title: string
    body: string
    url: string
    created_at: string
    user: GithubUser
  }]
}
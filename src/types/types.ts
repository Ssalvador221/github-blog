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

export interface IIssue {
    id: number
    title: string
    body: string
    url: string
    created_at: string
    number: number
    comments: number
    user: GithubUser
}

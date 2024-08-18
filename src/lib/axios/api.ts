import axios from "axios";


export const usersApi = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_GITHUB_USERS_API}`,
  headers: {
    "Content-Type": "application/json",
  },
})

export const issuesApi = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_GITHUB_ISSUE_API}`,
  headers: {
    "Content-Type": "application/json",
  },
}) 
import axios from "axios";
import { createContext, Dispatch, ReactNode, SetStateAction, useEffect, useState } from "react";
import { api } from "../lib/axios";

interface Profile {
    avatar: string
    url: string
    nameProfile: string
    followers: number
    bio: string
    company: string
    login: string
}

interface Blog {
    title: string
    body: string
    updated_at: Date 
    id: string
    number: string
}

interface BlogContextType {
    profiles: Profile | undefined
    blogs: Blog[] 
    issues: string

    setIssues: Dispatch<SetStateAction<string>>
    fetchProfile: () => Promise<void>;
    fetchBlog: (query?: string) => Promise<void>;
}

interface BlogProviderProps {
    children: ReactNode
}

export const BlogContext = createContext({} as BlogContextType)

export function BlogProvider({ children }: BlogProviderProps) {
    const [ profiles, setProfiles ] = useState<Profile>()

    const [ issues, setIssues ] = useState('')

    const [ blogs, setBlogs ] = useState([])

    async function fetchProfile() {
        const response = await api.get('diego3g')

        setProfiles({
            avatar: response.data.avatar_url, 
            followers: response.data.followers, 
            nameProfile: response.data.name, 
            url: response.data.html_url,
            bio: response.data.bio,
            company: response.data.company,
            login: response.data.login
        })
        
       

    }

    // https://api.github.com/repos/rocketseat-education/reactjs-github-blog-challenge/issues/1 
    async function fetchBlog(query?: string) {
        const response = await axios.get('https://api.github.com/search/issues?q=repo:rocketseat-education/reactjs-github-blog-challenge', {
            params: {
                q: query,
            }
        })
  
        setBlogs( response.data.items)
    }

    useEffect(() => {
        fetchProfile()
        fetchBlog()
    }, [])

    return (
        <BlogContext.Provider value={{blogs, issues, profiles, setIssues, fetchProfile, fetchBlog}}>
            {children}
        </BlogContext.Provider>
    )

}
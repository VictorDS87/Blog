import { createContext, ReactNode, useEffect, useState } from "react";
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

interface BlogContextType {
    profiles: Profile | undefined
    fetchProfile: () => Promise<void>;
}

interface BlogProviderProps {
    children: ReactNode
}

export const BlogContext = createContext({} as BlogContextType)

export function BlogProvider({ children }: BlogProviderProps) {
    const [ profiles, setProfiles ] = useState<Profile>()

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
        
        console.log(profiles)

    }

    useEffect(() => {
        fetchProfile()
    }, [])

    return (
        <BlogContext.Provider value={{profiles ,fetchProfile}}>
            {children}
        </BlogContext.Provider>
    )

}
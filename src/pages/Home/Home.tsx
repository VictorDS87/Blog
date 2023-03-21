import { useContext } from "react";
import { Header } from "../../components/Header/Header";
import { Profile } from "../../components/Profile/Profile";
import { SearchForm } from "../../components/SearchForm/SearchForm";
import { BlogContext } from "../../context/BlogContext";
import {dateFormatter} from "../../utils/Formatter";

import { NavLink } from 'react-router-dom'

import { Body, CardBlog, DateBlog, HomeContainer, SummaryBlogContainer, Title } from "./styles";


export function Home() {
    const { blogs, setValoraAleatorio } =  useContext(BlogContext)
    function teste(id: string) {
        setValoraAleatorio(id)
    }
    
    return (
        <HomeContainer>
            <Header />
            <Profile />
            <SearchForm/>

            <SummaryBlogContainer>
                
                {blogs.map(blog => {
    
                        return (                                      
                        <CardBlog onClick={() => teste(blog.number)} key={blog.id}>                  
                            <NavLink to="/blog" >
                                    <Title>                                                                                             
                                            {blog.title}           
                                        <DateBlog>                                 
                                            {dateFormatter.format(new Date(blog.updated_at))}
                                        </DateBlog>                                   
                                    </Title>
                                    <Body>{blog.body}</Body>                               

                            </NavLink>
                        </CardBlog>                                        
                        )                  
                })}
            </SummaryBlogContainer>
        </HomeContainer>
    )
}
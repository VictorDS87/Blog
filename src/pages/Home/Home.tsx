import { useContext } from "react";
import { Header } from "../../components/Header/Header";
import { Profile } from "../../components/Profile/Profile";
import { SearchForm } from "../../components/SearchForm/SearchForm";
import { BlogContext } from "../../context/BlogContext";
import {dateFormatter} from "../../utils/Formatter";

import { Body, CardBlog, DateBlog, HomeContainer, SummaryBlogContainer, Title } from "./styles";


export function Home() {
    const { blogs } =  useContext(BlogContext)

    function teste() {
        alert(blogs[0].title)
    }
    
    return (
        <HomeContainer>
            <Header />
            <Profile />
            <SearchForm/>

            <SummaryBlogContainer>
                
                {blogs.map(blog => {
    
                        return (                                      
                            <CardBlog onClick={teste} key={blog.id}>                          
                                <Title>                                                                                             
                                        {blog.title}           
                                    <DateBlog>                                 
                                        {dateFormatter.format(new Date(blog.updated_at))}
                                    </DateBlog>                                   
                                </Title>
                                <Body>{blog.body}</Body>                               
                            </CardBlog>                                        
                        )                  
                })}
            </SummaryBlogContainer>
        </HomeContainer>
    )
}
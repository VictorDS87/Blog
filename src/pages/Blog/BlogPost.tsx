import { useEffect, useState } from 'react' 
import { useContext } from "react"
import { BlogContext } from "../../context/BlogContext"
import ReactMarkdown from 'react-markdown'

import axios from 'axios'
import { Container, CardProfile, LinkPost, ProfileInfo, ProfileInfoLowerPart, PostContainer, Title} from './styles'

import remarkGfm from "remark-gfm";
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { Header } from '../../components/Header/Header'
import { NavLink } from 'react-router-dom'

import toForward from "../../assets/toForward.svg"
import toForwardImage from '../../assets/toForward.svg' 
import { Calendar, ChatCircle, GithubLogo } from 'phosphor-react'
export function BlogPost() {
      
    interface IPostDetail {
        title: string;
        comments: number;
        createdAt: string;
        githubUsername: string;
        url: string;
        body: string;
    }

    const [ patinho, setPatinho ] = useState<IPostDetail>({} as IPostDetail)
    
    const { valoraAleatorio} =  useContext(BlogContext)

    async function fetchBlog() {
        const response = await axios.get(`https://api.github.com/repos/rocketseat-education/reactjs-github-blog-challenge/issues/${valoraAleatorio}`)

        const { title, comments, created_at, user, html_url, body } = response.data;
        const newPostObj = {
            title,
            githubUsername: user.login,
            comments,
            createdAt: formatDistanceToNow(new Date(created_at), {
                locale: ptBR,
                addSuffix: true,
            }),
            url: html_url,
            body,
        };
        setPatinho(newPostObj);
    }
  
    
    
    useEffect(() => {
        fetchBlog()
    }, [])
    
    
    return (
        <div>
            <Header/>

            <Container>
            
            <CardProfile>
                
                <ProfileInfo>
                    <NavLink to="/">&lt; Voltar</NavLink>
                    <LinkPost>                      
                        VER NO GITHUB
                        <a href={patinho.url} target="_blank">
                            <img src={toForwardImage} alt="" />
                            
                        </a>
                    </LinkPost>
                </ProfileInfo>
                <Title>
                    <p>{patinho.title}</p>
                </Title>

                <ProfileInfoLowerPart>
                    <p><GithubLogo size={32} /> {patinho.githubUsername}</p>
                    <p><Calendar size={32} /> {patinho.createdAt}</p>
                    <p> <ChatCircle size={32} />{patinho.comments}</p>
                </ProfileInfoLowerPart>

                    
                    


            </CardProfile>
            
    
            </Container>
            <PostContainer>
                <ReactMarkdown remarkPlugins={[remarkGfm]}>{patinho.body}</ReactMarkdown>
            </PostContainer>
        </div>

    )
        
    

}
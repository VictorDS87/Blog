import { zodResolver } from "@hookform/resolvers/zod";
import { MagnifyingGlass } from "phosphor-react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { BlogContext } from "../../context/BlogContext";
import { LabelSpan, SearchFormContainer, SearchFormDiv } from "./styles";


export function SearchForm() {
    const { fetchBlog, blogs } = useContext(BlogContext);
    
    const searchFormSchema = z.object({
        query: z.string(),
      });
      
    type SearchFormInputs = z.infer<typeof searchFormSchema>;

    const {
        control,
        register,
        handleSubmit,
        formState: { isSubmitting }} = useForm<SearchFormInputs>({
            resolver: zodResolver(searchFormSchema),
        });
    
    async function handleSearchTransactions(data: SearchFormInputs) {
        await fetchBlog(data.query)
    }


    return (
        <SearchFormContainer onChange={handleSubmit(handleSearchTransactions)}>
            <SearchFormDiv>
                <LabelSpan>
                    Publicações
                    <span>{blogs.length} publicações</span>                                                         
                </LabelSpan>
                <input type="text" placeholder="Buscar conteúdo" {...register('query')} />

            </SearchFormDiv>
        </SearchFormContainer>
    )
}
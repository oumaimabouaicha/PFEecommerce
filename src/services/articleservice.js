import Api from "../axios/Api";
const ARTICLE_API="articles"
export const fetchArticles=async()=> {
return await Api.get(ARTICLE_API);
}
export const fetchArticleById=async(articleId)=> {
return await Api.get(ARTICLE_API + '/' + articleId);
}
export const deleteArticle=async(articleId) =>{
return await Api.delete(ARTICLE_API + '/' + articleId);
}
export const addarticle=async(article)=> {
return await Api.post(ARTICLE_API, article);
}
export const updatearticle=async(article) =>{
return await Api.put(ARTICLE_API + '/' + article._id, article);
}
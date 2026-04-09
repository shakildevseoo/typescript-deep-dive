


type Author = {
    id : number;
    name : string;
    bio?: string
}



type BlogPost  = {
    title : string;
    content : string;
    author : Author;
    tags? : string[];
    status : "draft" | "published" | "archived"
}

 const printBlogPost = (post : BlogPost) : void=>{
       const data = {
        title : post.title,
        content : post.content,
        author : post.author
       }
 }
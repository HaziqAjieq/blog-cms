
import testImg from "../assets/public/dummy/testImg.jpeg";
// platform image 


// base class
class BaseEntity {
  constructor(id){
    this.id = id;
  }
}

// user class
export class User extends BaseEntity{
  constructor(id, name){
    super(id);
    this.name = name;
  }
}
// platform class
export class Platform extends BaseEntity{
  constructor(id,name,slug ,image){
    super(id);
    this.name = name;
    this.slug = slug;
    this.image = image;
  }
}

// tag
export class Tag extends BaseEntity{
  constructor(id, name){
    super(id);
    this.name = name;
  }
}


// blogpost
export class BlogPost extends BaseEntity {
  constructor({
    id,
    title,
    slug,
    excerpt,
    content = null ,
    featured_image = null, 
    published_at,
    user,
    paltforms = [],
    tags =[],
    status,
    
  }) {
    super(id);
    this.title = title ;
    this.slug = slug;
    this.excerpt = excerpt || this.createExcerpt(content); //auto generate
    this.content = content; 
    this.featured_image = featured_image;
    this.published_at = published_at;
    this.user = user;
    this.platforms = paltforms;
    this.tags = tags;
    this.status = status || Boolean;
    
  }

  // Method to safelt get featured iamge with fallback
  getFeaturedImage(){
    return this.featured_image || testImg;
  }

  // Method to check if content exists
  hasContent(){
    return this.content !== null && this.content.trim() !== '' ;
  }

  // Method to create excerpt
  createExcerpt(content , wordCount = 15){
    if (!content) return null;

    const words = content.split(' ');
    const excerptWords = words.slice(0,wordCount);

    // handle case where content is shorter than requestd excerpt
    if (words.length <= wordCount){
      return content;
    }
    return excerptWords.join(' ') + '...';
  }
}
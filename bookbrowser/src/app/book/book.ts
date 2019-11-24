
export class Book {

    title: string;
    imageLink: string;
    smallImageLink: string;
    authorsName: string;
    descrition: string;
    smallDescription: string;
    edition: string;
    pageCount: number;
    categories: string[];
    rating: number;

    public constructor(jsonObject : any){
        let vInfo = jsonObject.volumeInfo;
        let sInfo = jsonObject.searchInfo;
        let imageLinks = vInfo.imageLinks;

        this.title = vInfo.title;
        if (imageLinks) {
            this.imageLink = vInfo.imageLinks.thumbnail;
            this.smallImageLink = vInfo.imageLinks.smallThumbnail;
        }
        this.pageCount = vInfo.pageCount;
        this.smallDescription = sInfo.textSnippet;
        this.descrition = vInfo.descrition;
        this.categories = vInfo.categories;
        this.rating = vInfo.rating;
        this.authorsName = vInfo.authors;

    }
}


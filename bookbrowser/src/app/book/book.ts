
export class Book {

    title: string;
    imageLink: string;
    smallImageLink: string;
    authorsName: string;
    description: string;
    smallDescription: string;
    publisher: string;
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

        if (sInfo) {
            this.smallDescription = sInfo.textSnippet;
        }

        this.pageCount = vInfo.pageCount;
        this.description = vInfo.description;
        this.categories = vInfo.categories;
        this.rating = vInfo.averageRating;
        this.authorsName = vInfo.authors;
        this.publisher = vInfo.publisher;

    }
}


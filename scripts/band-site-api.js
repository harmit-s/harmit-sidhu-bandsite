
class BandSiteApi {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.baseUrl = "https://unit-2-project-api-25c1595833b2.herokuapp.com";
    }

    async getShows() {
        try {
            const response = await axios.get(`${this.baseUrl}/showdates?api_key=${this.apiKey}`);
            return response.data;
        } catch (error) {
            console.error('Error fetching shows:', error.message);
            return [];
        }
    }

    async getComments() {
        try {
            const response = await axios.get(`${this.baseUrl}/comments?api_key=${this.apiKey}`);
            if (response.status !== 200) {
                throw new Error('Failed to fetch comments');
            }
            const sortComments = response.data.comments.sort((a, b) => b.timestamp - a.timestamp);
            return sortComments;
        } catch (error) {
            console.error('Error fetching comments:', error.message);
            return [];
        }
    }

    async postComment(comment) {
        try {
            const response = await axios.post(`${this.baseUrl}/comments?api_key=${this.apiKey}`, comment);
            if (response.status !== 201) {
                throw new Error('Failed to post comment');
            }
            return response.data;
        } catch (error) {
            console.error('Error posting comment:', error.message);
            return null; 
        }
    }
}

export default BandSiteApi;


// const apiKey = 'dde133e3-5a0a-4210-8cf9-0618e78dea51';
// const bandSiteApi = new BandSiteApi(apiKey);
// const comments = await bandSiteApi.getComments();
// console.log(comments);
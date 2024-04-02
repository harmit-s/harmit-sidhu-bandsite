
class BandSiteApi {
    constructor(apiKey) {
        this.apiKey = 'dde133e3-5a0a-4210-8cf9-0618e78dea51';
        
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
}


// const apiKey = 'dde133e3-5a0a-4210-8cf9-0618e78dea51';
// const bandSiteApi = new BandSiteApi(apiKey);
// const shows = await bandSiteApi.getShows();
// console.log(shows);

// Example usage:
const apiKey = 'dde133e3-5a0a-4210-8cf9-0618e78dea51';
const bandSiteApi = new BandSiteApi(apiKey);
bandSiteApi.getShows()
    .then(shows => {
        console.log(shows);
    })
    .catch(error => {
        console.error('Error:', error.message);
    });


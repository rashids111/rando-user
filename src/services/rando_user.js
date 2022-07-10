import axios from 'axios'

const url = 'https://randomuser.me/api'

async function fetchUser() {
    try {
        const response = await axios.get(url).then(res => res.data)
        //console.log(response.results[0])
        return response.results[0];
    } catch (error) {
        console.log('Error in getAllStarships', error)
    }
  }

  export default fetchUser
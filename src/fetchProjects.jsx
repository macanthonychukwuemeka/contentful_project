
import { useState, useEffect } from 'react'
import {createClient} from 'contentful'


const client = createClient({
    space:'34tz63xsp3gq',
    environment: 'master',
    accessToken: import.meta.env.VITE_API_KEY,
});
 // import.meta.env.VITE_API_KEY,
// rm -rf .git
export const useFetchProjects = () => {
    const [loading, setLoading] = useState(true)
    const [projects, setProjects] = useState([])

console.log(projects);
const getData = async()=> {

    try {
            const response = await client.getEntries({content_type: 'projects'});
            const projects = response.items.map((item) => {
            const {title, url, image} = item.fields;
            const id = item.sys.id;
                const img = image?.fields?.file?.url;
                return {title, url, id, img};
            })
            setProjects(projects)
            setLoading(false)
 
        } catch (error) {
            console.log(error);
            setLoading(false)
        }
    }
    useEffect(()=>{
        getData()
        console.log('hello');
     },[]) 


     return {loading, projects}
    }

// client.getEntries({content_type:"projects"})
// .then((response) => console.log(response))

 
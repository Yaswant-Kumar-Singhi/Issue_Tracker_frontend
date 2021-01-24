import axios from 'axios'



export const create = async (project) =>
  await axios.post(`http://localhost:8000/api/project`, project, {
    
  });
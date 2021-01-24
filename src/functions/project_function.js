import axios from 'axios'



export const create = async (project) =>
  await axios.post(`http://localhost:8000/api/project`, project, {
  });

  export const getProjects = async () => 
   await axios.get(`http://localhost:8000/api/projects`)
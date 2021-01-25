import axios from 'axios'



export const create = async (project) =>
  await axios.post(`http://localhost:8000/api/project`, project, {
  });

  export const getProjects = async () => 
   await axios.get(`http://localhost:8000/api/projects`)

   export const getProject = async (slug) =>
   await axios.get(`http://localhost:8000/api/project/${slug}`);

   export const createIssue = async (issue) =>
   await axios.post(`http://localhost:8000/api/project/:_id/issue`,issue,{
   });
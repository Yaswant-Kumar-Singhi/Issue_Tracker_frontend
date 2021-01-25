import React from "react";
import { Card, Tabs } from "antd";
import { Link } from "react-router-dom";
import { HeartOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Laptop from "../../images/laptop.png";
import ProjectListItems from "./ProjectListItems";
import ProjectCard from './ProjectCard'

const { TabPane } = Tabs;

// this is childrend component of Product page
const SingleProject = ({ project }) => {
  const { name, description } = project;

  return (
    <>
      <div className="col-md-7">
        
          <Card cover={<img src={Laptop} className="mb-3 card-image" />}></Card>
        

        <Tabs type="card  p-3">
          <TabPane tab="Description" key="1">
            {description && description}
          </TabPane>
          <TabPane tab="More" key="2">
            Issue to be listed down later on.
          </TabPane>
        </Tabs>
      </div>

      <div className="col-md-5">
        <h1 className="bg-info p-3 text-center">{name}</h1>


        <Card>
          
          <ProjectListItems project={project} />
          
          
        </Card>
      </div>
    </>
  );
};

export default SingleProject;

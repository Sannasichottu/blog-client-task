import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import SideBar from '../../components/sidebar/SideBar';
import Posts from '../../components/posts/Posts';
import "./home.css";
import axios from "axios";

export default function Home() {
  const [posts,setPosts] = useState([]);
  useEffect (() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts")
      console.log(res)
    }
    fetchPosts()
  },[])
  return (
      <>
      <Header />
      <div className="home">
        <Posts />
        <SideBar />
      </div>
    </>
  );
}

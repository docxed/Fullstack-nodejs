import React from "react";
import Axios from "axios";
import moment from "moment";
import Link from "next/link";

export default function Index({ posts }) {
  return (
    <>
      <p className="h1">Home Page</p>
      {posts.map((post, index) => {
        return (
          <div className="content my-3" key={index}>
            <p className="h5">Title: {post.title.rendered}</p>
            <p>{moment(post.date).format("LL")}</p>
            <p className="text-end">
              <Link href="/post">
                <button className="btn btn-primary">View</button>
              </Link>
            </p>
          </div>
        );
      })}
    </>
  );
}

export async function getStaticProps() {
  const url = "https://fswd-wp.devnss.com/wp-json/wp/v2/posts";
  try {
    const result = await Axios.get(url);
    const posts = result.data;
    return {
      props: {
        posts: posts,
      },
    };
  } catch (error) {
    console.log(error);
  }
}

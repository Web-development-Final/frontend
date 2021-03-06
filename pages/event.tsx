import { useEffect } from 'react'
import { GetStaticProps } from "next";
import Layout from "../components/Layout";
import { getEventData } from "../lib/graphql";
import { fetch } from "../lib/fetch"

const Event: React.FC<any> = (props) => {
  let arr = []

  for (let i = 0; i < 10; i++) {
    arr.push(props.result[i])
  }
  
  return (
    <Layout title="Event Information">
      {arr.map((el, index) => (
        <div className="flex justify-center items-center" key={index.toString()}>
          <div className=" m-4">
            <img src={`http:${el.image}`} alt="profile"/>
          </div>
          <div>
            <span>{el.title}</span>
            <div>
              <span className="mr-4">{el.date}</span>
              <span>{el.time}</span>
            </div>
          </div>
        </div>
        
      ))}
    </Layout>
  );
};

export default Event;

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch();
  const result = await response
  
  return {
    props: {
      result,
    },
  };
};

// export const getStaticProps: GetStaticProps = async () => {
//   const { props: response } = await getEventData();
//   const { data } = await response.resEventsData;

//   return {
//     props: {
//       data,
//     },
//   };
// };

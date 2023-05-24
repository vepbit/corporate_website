import { useRouter } from 'next/router';
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import gql from "graphql-tag";

import LayoutFormBreadcrumbs from "../../components/layout/LayoutFormBreadcrumbs";

export default function Index({projects, og}) {

    // console.log(projects);
    const router = useRouter();

    const project_id = router.query.project;
    // console.log(project_id)
    
    return (

      projects.map((project,index)=>{

        if(project.id==project_id){
          return(
            <LayoutFormBreadcrumbs 
              pageTitle={project.project_title}
              version={2}
              supbreadcrumb={'Our portfolio'}
              key={index}
              og={og}
            >
              <div className="wrapper-project" > 
                <div className="container">
                  <div className="row" >
                    <div className="col-12" dangerouslySetInnerHTML={{__html: project.project_html}}>

                    </div>
                  </div>
                </div>
              </div>
              <style  >{project.project_css}</style>
              
            </LayoutFormBreadcrumbs>
                )
            }
        }
      )

    )
  }

export async function getServerSideProps() {

    const cache = new InMemoryCache();
    const link = new HttpLink({
      uri: `${process.env.GRAPHQLSERVER}`
    });
    const client = new ApolloClient({
      cache,
      link
    });

    const { data } = await client.query({
      query: gql`
        query {
            ourProjects {
                id
                project_html
                project_css
                project_title            
                og_title
                og_desc
                og_image
                og_url
                },
        }`
    });
    console.log(data);

 
    return {
      props: {
        projects: data.ourProjects,
        og: {"title":  data.ourProjects.og_title ? data.ourProjects.og_title : '',"desc": data.ourProjects.og_desc ? data.ourProjects.og_desc : '', "img": data.ourProjects.og_image ? data.ourProjects.og_image : '', "url": data.ourProjects.og_url ? data.ourProjects.og_url : '' }
    }

    };
  }



  
//   export async function getServerSideProps(context) {

//     const id = await context.params.project;
//     //console.log(context);
//     const cache = new InMemoryCache();
//     const link = new HttpLink({
//       uri: `${process.env.GRAPHQLSERVER}`
//     });
//     const client = new ApolloClient({
//       cache,
//       link
//     });
  
//     const { data } = await client.query({
//       query: gql`
//         query ($id: ID!){
//             ourProjects2 (id: $id){
//                 id
//                 project_html
//                 project_css

//                 project_title
//             }
//         }`,
//         variables: {
//             "id": id,
//         },
//     });
  
//     return {
//       props: {
//         project: data.ourProjects2
//     }
//   }
// }

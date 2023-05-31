import Head from 'next/head'

// Generates `/posts/1` and `/posts/2`
export async function getStaticPaths() {
   // Call an outside API endpoint to get posts
   const response =  await fetch('http://127.0.0.1:8080/proyectos')
   const data = await response.json();
   const paths = data.data.map(proyecto =>{
    return{
      params:{
        proyecto: proyecto.url
      }
    }
   });

  return {
    paths: paths,
    fallback: true, // can also be true or 'blocking'
  };
}

// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps({ params }) {
  return { props: { params } };
}

export default function Proyecto({ params }) {
  return (
    <>
      <Head>
        <title>test</title>
        <meta name='description' content='Venta de parcelas region metropolitana melipilla' />
      </Head>
      <div className="font-serif subpixel-antialiased">
      </div>
    </>
  );
}
export default function Root(props) {
  console.log("Root Props", props);

  return <>Root</>
}

export const getStaticProps = async () => {
  console.log("Root Static Props")
  
  return {
    props: {
      RootProps: true
    }
  }
}

export const getStaticPaths = async () => {
  console.log("Root Static Paths")

  return {
    paths: [{
      params: {
        slug: ["foo", "bar"]
      }
    }],
    fallback: false
  }
}
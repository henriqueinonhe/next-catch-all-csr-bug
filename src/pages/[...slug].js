export default function Page() {
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
    paths: [],
    fallback: "blocking"
  }
}
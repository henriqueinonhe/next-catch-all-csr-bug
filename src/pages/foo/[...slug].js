export default function Page(props) {
  console.log("Foo Props", props);

  return <>Foo</>
}

export const getStaticProps = async () => {
  console.log("Foo Static Props")

  return {
    props: {
      FooProps: true
    }
  }
}

export const getStaticPaths = async () => {
  console.log("Foo Static Paths")

  return {
    paths: [],
    fallback: false
  }
}
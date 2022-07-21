export default function Page() {
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
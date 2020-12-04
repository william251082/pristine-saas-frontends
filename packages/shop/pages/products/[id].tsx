// @ts-ignore
const Nav = (await import('pim/nav')).default;

export async function getStaticPaths() {
    return {
        paths: [1,2,3,4,5].map((id) => ({
            params: {
                id: id.toString()
            }
        })),
        fallback: false
    }
}

export async function getStaticProps(context) {
    return {
        props: context.params
    }
}

const ProductPage = ({id}) => {
    return (
        <div>
            <Nav />
            <h1>Product Page = ({id})</h1>
        </div>
    );
};

export default ProductPage;
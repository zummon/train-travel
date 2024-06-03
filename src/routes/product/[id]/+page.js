import products from '../../../lib/products.json'

export const load = async ({ params }) => {
	let product = products.find(item => item.id == params.id)
	return { product }
}
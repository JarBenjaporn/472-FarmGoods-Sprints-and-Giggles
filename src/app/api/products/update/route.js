import { ProductController } from "@/controllers/ProductController";

const productController = new ProductController();

export async function POST(request) {
    return productController.updateProductStatus(request);
}
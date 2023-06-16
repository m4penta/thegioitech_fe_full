import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import parse from "html-react-parser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Comment } from "./comment";
import { ProductBox } from "./product-box";
import { BoxProduct } from "../common/";
import { Store } from "./store";
import { ProductSlider } from "./product-slider";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import "./content-detail.scss";
import { ProductSpecs } from "./product-specs";
import { query } from "../../access/index";
import QueryString from "qs";

export const ContentDetail = () => {
  const { slug } = useParams();
  const [product, setProduct] = useState();
  const [isArticleExpand, setIsArticleExpand] = useState(false);
  const [relateProduct, setRelateProduct] = useState([]);

  const handleArticleAction = () => {
    setIsArticleExpand(!isArticleExpand);
  };

  useEffect(() => {
    (async () => {
      const {
        data: { product },
      } = await query().product.getOne(slug);
      setProduct(product);
    })();
  }, [slug]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);

  useEffect(() => {
    let isCancelling = false;
    (async () => {
      try {
        const { data } = await query().product.getFilter(
          QueryString.stringify({
            category: product.category,
            brand: product.brand,
          })
        );
        setRelateProduct(data);
        if (isCancelling === false) {
        }
      } catch (error) {}
      return () => {
        isCancelling = true;
      };
    })();
  }, [product]);

  return product ? (
    <main className="content-wrap">
      <div className="container content">
        <div className="content-heading">
          <h1 className="content-heading-text">{product.name}</h1>
          {product.flash_sale && (
            <span className="content-heading-flashsale">Flash sale</span>
          )}
        </div>
        <section className="detail-box-wrap">
          <div className="detail-box">
            <ProductSlider images={product.product_image} />
            <ProductBox product={product} />
            <Store />
          </div>
        </section>
        <section className="description">
          <div
            className={isArticleExpand ? `article article-expand` : `article`}
          >
            {product.article && parse(product.article)}
            <button
              onClick={handleArticleAction}
              type="button"
              className="btn article-btn"
            >
              {isArticleExpand ? "Thu gọn" : "Xem thêm"}
            </button>
          </div>
          <div className="specs">
            <div className="specs-heading">
              <h6 className="specs-heading-text">
                Thông số kỹ thuật {product.name}
              </h6>
              <div className="specs-heading-media">
                <img
                  src={product.product_image[0].location}
                  alt={product.name}
                  className="specs-heading-media-img"
                />
              </div>
              <button className="btn specs-heading-action">
                <FontAwesomeIcon icon={faGear} />
                <span>Cấu hình chi tiết</span>
              </button>
            </div>
            <div className="specs-content">
              <ProductSpecs specsList={product.specification} />
            </div>
          </div>
        </section>
        <BoxProduct
          name="Sản phẩm tương tự"
          products={relateProduct}
          loading={false}
          numberOfItem={5}
          className="product-relate"
        />
        <Comment name={product.name} productId={product._id} />
      </div>
    </main>
  ) : (
    false
  );
};

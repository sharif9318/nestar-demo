import { useRouter } from "next/router";

const PropertyDetail = () => {
  const router = useRouter();
  const { productId } = router.query;

  return <div> Property Detail - {productId} </div>;
};

export default PropertyDetail;

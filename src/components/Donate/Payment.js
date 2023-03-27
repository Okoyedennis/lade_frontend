import { useNavigate } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";

const Payment = ({ amountFromDonation }) => {
  const navigate = useNavigate();

  const publishablekey =
    "pk_test_51IbB5iJrhAChGpxwxROklguJqVX3OZiG6e2tnHjegK4jwuAFGWmUtGYtLWvDF0EGE4qsI5wfeNguLtPA4XNGJ24I00mo8wN45I";
  const onToken = (token) => {
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };
  return (
    <StripeCheckout
      label="Donate"
      name="Lade Agroloans"
      description={`Amount is
         ₦${amountFromDonation}`}
      panelLabel="Pay Now "
      token={onToken}
      stripeKey={publishablekey}
    />
  );
};

export default Payment;

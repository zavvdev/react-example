import PropTypes from "prop-types";
import { useCartBookStyles } from "cart/components/containers/CartBook/CartBook.styles";
import { Typography } from "cart/gateway/input";
import { useTranslation } from "react-i18next";
import { CART_I18N_NAMESPACE } from "cart/i18n";

export function CartBook({ cover, title, author, price, onRemoveFromCart }) {
  const classes = useCartBookStyles();
  const { t } = useTranslation(CART_I18N_NAMESPACE);

  return (
    <div className={classes.root}>
      <div className={classes.inner}>
        <img src={cover} alt={title} className={classes.cover} />
        <div>
          <Typography className={classes.title} tag="h2">
            {title}
          </Typography>
          <div>
            <Typography tag="i">{author}</Typography>
            <Typography className={classes.price} tag="div">
              {price}
            </Typography>
          </div>
        </div>
      </div>
      <button
        type="button"
        onClick={onRemoveFromCart}
        className={classes.removeBtn}
      >
        {t("cartBook.remove")}
      </button>
    </div>
  );
}

CartBook.propTypes = {
  cover: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  onRemoveFromCart: PropTypes.func.isRequired,
};

import PropTypes from "prop-types";
import { useCartBookStyles } from "cart/containers/CartBook/CartBook.styles";
import { Shared } from "cart/gateway/input";
import { useCartTranslation } from "cart/i18n/useCartTranslation";

export function CartBook({ cover, title, author, price, onRemoveFromCart }) {
  const classes = useCartBookStyles();
  const { t } = useCartTranslation();

  return (
    <div className={classes.root}>
      <div className={classes.inner}>
        <img src={cover} alt={title} className={classes.cover} />
        <div>
          <Shared.Typography className={classes.title} tag="h2">
            {title}
          </Shared.Typography>
          <div>
            <Shared.Typography tag="i">{author}</Shared.Typography>
            <Shared.Typography className={classes.price} tag="div">
              {price}
            </Shared.Typography>
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

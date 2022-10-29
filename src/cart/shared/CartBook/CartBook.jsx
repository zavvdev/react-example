import PropTypes from "prop-types";
import { useCartBookStyles } from "cart/shared/CartBook/CartBook.styles";
import { useCartTranslation } from "cart/i18n/useCartTranslation";

export function CartBook({ cover, title, author, price, onRemoveFromCart }) {
  const classes = useCartBookStyles();
  const { t } = useCartTranslation();

  return (
    <div className={classes.root}>
      <div className={classes.inner}>
        <img src={cover} alt={title} className={classes.cover} />
        <div>
          <h2 className={classes.title}>{title}</h2>
          <div>
            <i>{author}</i>
            <div className={classes.price}>{price}</div>
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

import PropTypes from "prop-types";
import { Shared } from "app/shared";
import { useBookItemStyles } from "books/containers/BookItem/BookItem.styles";
import { useBooksTranslation } from "books/i18n/useBooksTranslation";

export function BookItem({
  title,
  author,
  date,
  price,
  cover,
  onAddToCart,
  onRemoveFromCart,
  isInCart,
}) {
  const { t } = useBooksTranslation();
  const classes = useBookItemStyles();

  return (
    <div className={classes.root}>
      <img src={cover} alt={title} className={classes.cover} />
      <div>
        <h2 className={classes.title}>{title}</h2>
        <div className={classes.infoWrap}>
          <i>{date}, </i>
          <span>
            {t("bookItem.author", {
              author,
            })}
          </span>
        </div>
        <div className={classes.price}>{price}</div>
        <Shared.Button
          className={classes.addToCartBtn}
          onClick={isInCart ? onRemoveFromCart : onAddToCart}
        >
          {isInCart ? t("bookItem.alreadyInCart") : t("bookItem.addToCart")}
        </Shared.Button>
      </div>
    </div>
  );
}

BookItem.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
  onAddToCart: PropTypes.func.isRequired,
  onRemoveFromCart: PropTypes.func.isRequired,
  isInCart: PropTypes.bool.isRequired,
};

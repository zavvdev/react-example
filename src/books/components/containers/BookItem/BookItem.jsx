import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import { useBookItemStyles } from "books/components/containers/BookItem/BookItem.styles";
import { Shared } from "books/gateway/input";
import { BOOKS_I18N_NAMESPACE } from "books/i18n/config";

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
  const { t } = useTranslation(BOOKS_I18N_NAMESPACE);
  const classes = useBookItemStyles();

  return (
    <div className={classes.root}>
      <img src={cover} alt={title} className={classes.cover} />
      <div>
        <Shared.Typography className={classes.title} tag="h2">
          {title}
        </Shared.Typography>
        <div className={classes.infoWrap}>
          <Shared.Typography tag="i">{date}, </Shared.Typography>
          <Shared.Typography tag="span">
            {t("bookItem.author", {
              author,
            })}
          </Shared.Typography>
        </div>
        <Shared.Typography className={classes.price} tag="div">
          {price}
        </Shared.Typography>
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

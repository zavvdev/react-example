import { Button, Typography } from "books/gateway/input";
import PropTypes from "prop-types";
import { useBookItemStyles } from "books/components/containers/BookItem/BookItem.styles";
import { useTranslation } from "react-i18next";
import { BOOKS_I18N_NAMESPACE } from "books/i18n";

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
      <img src={cover} alt="title" className={classes.cover} />
      <div>
        <Typography className={classes.title} tag="h2">
          {title}
        </Typography>
        <div className={classes.infoWrap}>
          <Typography tag="i">{date}, </Typography>
          <Typography tag="span">
            {t("bookItem.author", {
              author,
            })}
          </Typography>
        </div>
        <Typography className={classes.price} tag="div">
          {price}
        </Typography>
        <Button
          className={classes.addToCartBtn}
          onClick={isInCart ? onRemoveFromCart : onAddToCart}
        >
          {isInCart ? t("bookItem.alreadyInCart") : t("bookItem.addToCart")}
        </Button>
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

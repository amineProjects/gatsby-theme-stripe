/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useCart } from '../context/shopping-cart'
import ShoppingCartDetails from './right-pane/shopping-cart-details'
import { Button } from '@material-ui/core'

const RightPane = () => {
  const {
    toggleRightMenu,
    handleCartClick,
    redirectToCheckout,
    cartCount,
  } = useCart()
  return (
    <div
      aria-hidden={toggleRightMenu ? 'false' : 'true'}
      css={{ overflowY: 'scroll', display: 'flex', flexDiretion: 'row' }}
    >
      <aside
        sx={{
          variant: toggleRightMenu
            ? 'aside.rightPaneShow'
            : 'aside.rightPaneHidden',
        }}
      >
        <ShoppingCartDetails />
        <div
          css={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
          }}
        >
          <Button
            variant={'contained'}
            color={'primary'}
            sx={{ variant: 'button.cart' }}
            onClick={handleCartClick}
          >
            Close
          </Button>
          <Button
            arial-label={`Go to Stripe Checkout`}
            variant={'contained'}
            sx={{
              variant: cartCount > 0 ? 'button.cart' : 'button.disabled',
            }}
            onClick={() => redirectToCheckout()}
          >
            Checkout
          </Button>
        </div>
      </aside>
    </div>
  )
}

export default RightPane

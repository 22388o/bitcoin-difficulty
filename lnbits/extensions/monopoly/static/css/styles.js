// Reactive components styling (for some reason using media-queries in monopoly.css does not work)
export function reactiveStyles(game) {
  if(window.innerWidth > 768) {
    // For desktop
    return {
      welcomeText: {
        marginTop: `0.5em`
      },
      initialFundingButton: {
        marginLeft: `2em`
      },
      inviteButton: {
        marginLeft: `2em`
      },
      cardsStack: {
        height: `25em`
      },
      card: (card) => {
        let cardPosition;
        game.properties[game.player.wallets[0].id][card.color].forEach((_card) => {
          if(_card.id === card.id) {
            cardPosition = _card.position;
          }
        });
        return({
          position: `absolute`,
          zIndex: parseInt(cardPosition) + 2,
          marginTop: (3 * (parseInt(cardPosition) + 1)).toString() + `em`
        })
      },
      chanceCard: (chanceCard) => {
        if(chanceCard.fineType) {
          return({
            height: `auto`,
            maxWidth: `65%`,
            marginTop: `1em`,
            marginLeft: `2em`
          })
        } else  {
          return({
            height: `auto`,
            maxWidth: `100%`,
            marginTop: `1em`,
            marginLeft: `6em`
          })
        }
      },
      communityChestCard: (communityChestCard) => {
        if(communityChestCard.fineType) {
          return({
            height: `auto`,
            maxWidth: `85%`,
            marginTop: `1em`,
            marginLeft: `2em`
          })
        } else if (communityChestCard.rewardType) {
          return({
              height: `auto`,
              maxWidth: `85%`,
              marginTop: `1em`,
              marginLeft: `2em`
          })
        } else  {
          return({
            height: `auto`,
            maxWidth: `100%`,
            marginTop: `1em`,
            marginLeft: `6em`
          })
        }
      },
      cardsMessage: {
        marginTop: `1em`
      },
      cardsAmountForm: {
        marginTop: `1em`,
        marginLeft: `-2em`
      },
      cardsAmount: {
        marginTop: `1em`,
      },
      cardsButton: {
        marginTop: `2em`,
        marginLeft: `0em`
      },
      communityChestCardImage: {
        height: `auto`,
        maxWidth: `65%`,
        marginTop: `1em`,
        marginLeft: `2em`
      },
      payInvoiceLabel: {
        marginTop: `1em`,
        marginLeft: `1em`
      },
      payInvoiceButton: {
        marginLeft: `1em`
      },
      networkFeeMessage: {
        marginTop: `0em`,
      },
      networkFeeAmountForm: {
        marginTop: `1em`,
      },
      networkFeeAmount: {
        marginLeft: `0em`
      },
      propertyImage: {
        height: `auto`,
        maxWidth: `65%`,
        marginTop: `1em`,
        marginLeft: `2em`
      },
      propertyOwnershipLabel: {
        marginTop: `1em`
      },
      propertyMiningCapacityLabel: {
        marginTop: `1em`
      },
      propertyMiningIncomeLabel: {
        marginTop: `1em`
      },
      propertyButtons: {
        cardButtonsGroup: {
          marginTop: `2em`
        },
        bottomButtonsGroup: {
          marginTop: `1em`
        },
        buyButton: {
          marginTop: `2.5em`,
          marginLeft: `-1em`
        },
        invoiceButton: {
          marginTop: `2em`,
          marginLeft: `-0.25em`
        },
        upgradeButton: {
          marginLeft: `-1em`
        },
        sellButton: {
          marginLeft: `0em`
        },
        offerButton: {
          marginTop: `2.5em`,
          marginLeft: `-1em`
        },
      },
      propertyCloseButton: {
        marginTop: `1em`
      },
      propertyButtonsForGameCreator: {
        div: {
          marginTop: `1em`
        },
        invoicePurchaseButton: {
          marginLeft: `0em`
        },
        invoiceUpgradeButton: {
          marginLeft: `0em`
        },
      },
    }
  } else {
    return {
      welcomeText: {
        marginTop: `1.5em`
      },
      initialFundingButton: {
        marginLeft: `-1em`
      },
      inviteButton: {
        marginLeft: `-1em`
      },
      cardsStack: {
        height: `12em`
      },
      card: (card) => {
        let cardPosition;
        game.properties[game.player.wallets[0].id][card.color].forEach((_card) => {
          if(_card.id === card.id) {
            cardPosition = _card.position;
          }
        });
        return({
          position: `absolute`,
          zIndex: parseInt(cardPosition) + 2,
          marginTop: (1.6 * (parseInt(cardPosition) + 1)).toString() + `em`
        })
      },
      chanceCard: (chanceCard) => {
        if(chanceCard.fineType) {
          return {
            height: `auto`,
            maxWidth: `100%`,
            marginTop: `0.5em`,
            marginLeft: `0em`
          }
        } else  {
          return {
            height: `auto`,
            maxWidth: `150%`,
            marginTop: `0.5em`,
            marginLeft: `1.5em`
          }
        }
      },
      communityChestCard: (communityChestCard) => {
        if(communityChestCard.fineType) {
          return({
            height: `auto`,
            maxWidth: `100%`,
            marginTop: `0.5em`,
            marginLeft: `0em`
          })
        } else if (communityChestCard.rewardType) {
          return({
            height: `auto`,
            maxWidth: `100%`,
            marginTop: `0.5em`,
            marginLeft: `0em`
          })
        } else  {
          return({
            height: `auto`,
            maxWidth: `150%`,
            marginTop: `0.5em`,
            marginLeft: `1.5em`
          })
        }
      },
      cardsMessage: {
        marginTop: `1em`,
        marginLeft: `2em`
      },
      cardsAmountForm: {
        marginTop: `1em`,
        marginLeft: `1em`
      },
      cardsAmount: {
        marginTop: `1em`,
        marginLeft: `2em`
      },
      cardsButton: {
        marginLeft: `0em`
      },
      communityChestCardImage: {
        height: `auto`,
        maxWidth: `85%`,
        marginTop: `0.5em`,
        marginLeft: `0em`
      },
      payInvoiceLabel: {
        marginTop: `1em`,
        marginLeft: `1em`
      },
      payInvoiceButton: {
        marginLeft: `1em`
      },
      networkFeeMessage: {
        marginTop: `-1em`,
        marginLeft: `-1em`
      },
      networkFeeAmountForm: {
        marginTop: `0em`,
        marginBottom: `1em`,
        marginLeft: `-2em`
      },
      networkFeeAmount: {
        marginTop: `-1em`,
        marginLeft: `-2em`
      },
      propertyImage: {
        height: `auto`,
        maxWidth: `85%`,
        marginTop: `0.5em`,
        marginLeft: `0em`
      },
      propertyOwnershipLabel: {
        marginTop: `1em`,
        marginLeft: `-1em`
      },
      propertyMiningCapacityLabel: {
        marginTop: `1em`,
        marginLeft: `-1em`
      },
      propertyMiningIncomeLabel: {
        marginTop: `1em`,
        marginLeft: `-1em`
      },
      propertyButtons: {
        cardButtonsGroup: {
          marginTop: `2em`
        },
        bottomButtonsGroup: {
          marginTop: `1em`
        },
        buyButton: {
          marginTop: `1em`,
          marginLeft: `-2em`
        },
        invoiceButton: {
          marginLeft: `-1em`
        },
        upgradeButton: {
          marginLeft: `-2em`
        },
        sellButton: {
          marginLeft: `0em`
        },
        offerButton: {
          marginTop: `1em`,
          marginLeft: `-2em`
        },
      },
      propertyCloseButton: {
        marginTop: `1em`
      },
      propertyButtonsForGameCreator: {
        div: {
          marginTop: `1em`
        },
        invoicePurchaseButton: {
          marginLeft: `0em`
        },
        invoiceUpgradeButton: {
          marginLeft: `0em`
        },
      },
    }
  }
}
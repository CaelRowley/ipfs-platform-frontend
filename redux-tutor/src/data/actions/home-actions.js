import web3 from '../../services/web3';
import myToken from '../../services/my-token';

const updateHomeText = (homeText) => ({
  type: 'CHANGE_HOME_TEXT',
  homeText
})

export const changeHomeText = () => async (dispatch, getState) => {
  const [account] = await web3.eth.getAccounts();
  console.log(account)



  let balance = await myToken.methods.balanceOf(account).call({
    from: account
  })
  console.log(balance)

  // let transfer = await myToken.methods.transfer('0x7A5d089701E1baC31cBE9c15BDa39486d7D45e49', 1000).send({
  //   from: account
  // })

  balance = await myToken.methods.balanceOf(account).call({
    from: account
  })
  console.log(balance)

  const state = getState();
  dispatch(updateHomeText('this is the new text'));
}
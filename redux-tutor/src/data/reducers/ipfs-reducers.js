import extend from 'xtend';
let newState;

const ipfsReducers = (state, action) => {
  switch (action.type) {
    case 'UPLOAD_IPFS':
      newState = extend(state, {
        dataCID: action.dataCID
      })
      return newState
    case 'DOWNLOAD_IPFS':
      newState = extend(state, {
        dataCID: action.dataCID,
        data: action.data
      })
      return newState
    case 'DOWNLOAD_ALL_IPFS':
      newState = extend(state, {
        dataCID: action.dataCID,
        data: action.data
      })
      return newState
    default:
      return state
  }
}

export default ipfsReducers;

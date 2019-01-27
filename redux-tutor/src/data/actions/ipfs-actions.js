import web3 from '../../services/web3';
import myToken from '../../services/my-token';
import ipfsClient from 'ipfs-http-client';

const ipfs = ipfsClient('ipfs.infura.io', 5001, { protocol: 'https' });

const uploadIPFS = (dataCID) => ({
  type: 'UPLOAD_IPFS',
  dataCID
});

const downloadIPFS = (dataCID, data) => ({
  type: 'DOWNLOAD_IPFS',
  dataCID,
  data
});

const downloadAllIPFS = (dataCIDs, data) => ({
  type: 'DOWNLOAD_ALL_IPFS',
  dataCIDs,
  data
});

const upload = (dataBuffer) => async (dispatch, getState) => {
  const response = await ipfs.add(dataBuffer);
  const dataCID = response[response.length - 1].hash;
  const [account] = await web3.eth.getAccounts();
  await myToken.methods.ipfsAddCID(account, dataCID).call({
    from: account
  });
  const state = getState();
  dispatch(uploadIPFS(dataCID));
};

const download = (dataID) => async (dispatch, getState) => {
  const [account] = await web3.eth.getAccounts();
  const dataCID = await myToken.methods.ipfsGetCID(account, dataID).call({
    from: account
  });
  const allFiles = [];
  ipfs.get(dataCID, (err, files) => {
    files.forEach((file) => {
      console.log(file.path);
      console.log(file.content.toString('utf8'));
      allFiles.push(file);
    });
  });
  const state = getState();
  dispatch(downloadIPFS(dataCID, allFiles));
};

const downloadAll = () => async (dispatch, getState) => {
  const [account] = await web3.eth.getAccounts();
  const dataCIDs = await myToken.methods.ipfsGetAllCIDs(account, dataID).call({
    from: account
  });
  const data = dataCIDs.map(dataCID => {
    const allFiles = [];
    ipfs.get(dataCID, (err, files) => {
      files.forEach((file) => {
        allFiles.push(file);
      });
    });
    return allFiles;
  });
  const state = getState();
  dispatch(downloadAllIPFS(dataCIDs, data));
};

export default {
  upload,
  download,
  downloadAll,
};

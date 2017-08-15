import chai from 'chai';

const expect = chai.expect;
const initialState = {
  createAccountModal: 'CLOSED',
  currentUser: {
    email: ''
  },
  errorStatus: 'CLOSED',
  errorMessage: ''
};
const createAccount = (state = initialState, action) => {
  switch (action) {
    case 'SHOW_MODAL':
      return Object.assign(initialState, { createAccountModal: 'OPEN' });
    case 'CREATE':
      // do stuff
      break;
    case 'CANCEL':
      // do stuff
      break;
    case 'SUCCESS':
      // do stuff
      break;
    case 'FAILED':
      // do stuff
      break;
    case 'INVALID_FORM':
      // do stuff
      break;
    default:
      return state;
  }
};

// describe('createAccount', () => {
//   it('should update state on accordingly', () => {
//     const afterState = {
//       createAccountModal: 'OPEN',
//       currentUser: {
//         email: ''
//       },
//       errorStatus: 'CLOSED',
//       errorMessage: ''
//     };
//     console.log(createAccount(initialState, 'SHOW_MODAL'));
//     expect(createAccount(initialState, 'SHOW_MODAL')).to.deep.equal(afterState);
//   });
// });

export default createAccount;

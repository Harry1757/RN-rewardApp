import {rest} from 'msw';
// import {polyfill} from 'react-native-fetch-polyfill';
// polyfill(global);

export const handlers = [
  rest.get('/users', (req, res, ctx) => {
    return res(
      ctx.json([
        {id: 1, name: 'John'},
        {id: 2, name: 'Jane'},
        {id: 3, name: 'Bob'},
      ]),
    );
  }),
];

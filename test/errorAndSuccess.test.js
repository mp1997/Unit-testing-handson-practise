import { html, fixture, expect } from '@open-wc/testing';
// import { stub } from 'sinon';
import '../src/SuccessAndError/Success.js';
import '../src/SuccessAndError/Error.js';

describe('Success screen ', () => {
  // Write test cases inside this block

  const el=await fixture(html`<loan-success></loan-success>`);
  const spy=Sinon.spy(el,'_toHome');
  spy();
  expect(spy.called).to.be.true;
});

describe('error screen', () => {
  // Write test cases inside this block

  const el=await fixture(html`<loan-error></loan-error>`);
  const spys=Sinon.spy(el,'_toHome');
  spys();
  expect(spys.called).to.be.true;
});

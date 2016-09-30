import { renderComponent , expect } from '../test_helper';
import App from '../../src/components/app';

describe('App', () => {

  it('Shows Correct Div',() => {
    
    const component =renderComponent(App);
    expect(component).to.contain('React simple starter');
  });
});
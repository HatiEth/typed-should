import 'should';
import 'mocha';

describe('shouldjs typings', () => {
  it('chaining operators');
  it('validators');
  describe('when promises', () => {
    it('#finally');
    it('#eventually');
    it('.fulfilled()');
    it('.fulfilledWith()');
    it('.reject()');
    it('.rejectedWith()');
  });
});

true.should.be.true();

new Object().should.be.Boolean();

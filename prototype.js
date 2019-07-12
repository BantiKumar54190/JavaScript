function market(sabji, dal, bhat)
{
    this.sabji = sabji;
    this.dal = dal;
    this.bhat = bhat;
};

var k = new market("brinjal","moong","arva");
console.log(k.dal);
market.prototype.aam="mango";
console.log(k.aam);

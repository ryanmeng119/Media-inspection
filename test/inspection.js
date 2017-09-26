var chai = require('chai');
var assert = chai.assert;

describe('Media inspection', () => {

    beforeEach(function() {
        // browser.url('//www.setn.com/News.aspx?NewsID=298162');
        // browser.url('http://news.ltn.com.tw/news/politics/breakingnews/2204321');
        // browser.url('https://styleme.pixnet.net/post/218571405');
        browser.url('http://news.cts.com.tw/cts/society/201709/201709261891419.html#.WcmsgdMjHVo');
    });

    it('檢查isip是否存在於Elements內', function() {
        var allInputs = $$('head script')

        var result = allInputs.some(function(el) {
            return el.getAttribute('src') === 'http://ad-specs.guoshipartners.com/static/js/isip.js';
        })

        console.log(result)
        assert.equal(result, true);

    });
    // it('檢查isip是否存在於element內', function() {
    //     // browser.url('//www.setn.com/News.aspx?NewsID=298162');
    //     browser.url('http://news.ltn.com.tw/news/politics/breakingnews/2204321');
    //     // browser.url('https://styleme.pixnet.net/post/218571405');

    //     var allInputs = $$('head script')

    //     var result = allInputs.some(function(el) {
    //         return el.getAttribute('src') === 'http://ad-specs.guoshipartners.com/static/js/isip.js';
    //     })

    //     console.log(result)
    //     assert.equal(result, true);

    // });

});
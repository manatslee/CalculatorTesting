// conf.js
exports.config = {
    framework: 'jasmine',
    capabilities: {
              'browserName': 'chrome'
    },    
    //กำหนดให้ Selenium Server ทำ Action
    seleniumAddress: 'http://localhost:4444/wd/hub',
     //กำหนดให้เรียก webdriver บน browser ทำ Action
    //directConnect: true,
    specs: ['spec.js'] ,//Name of the file containing test cases

    // Options to be passed to Jasmine.
    jasmineNodeOpts: {
          defaultTimeoutInterval: 20000 //มีเวลาในการประมวลผลตามที่กำหนดถ้าไม่ทัน test failed
    }
    
}

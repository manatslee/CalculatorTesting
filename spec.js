// spec.js
//describe = test suite, it = test case, 1 test suite composed of several test cases.
describe('Functional Test of Web App Super Calculator', function() {//อธิบาย test suit
    it('Test Title of Main Page of Web Super Calculator', function() {//source code for test
      browser.get('http://juliemr.github.io/protractor-demo/');//คำสั่งของprotractor
        expect(browser.getTitle()).toEqual('Super Calculator');
    });//คำสั่งไวยากรณ์ของjasmine คำสั่งของprotractor ส่งไปยังseleniumเพื่อส่งไปยังchrome
    it('Flow of multiplication of 2 and 5.', function(){
        browser.get('http://juliemr.github.io/protractor-demo/') ;
        //enter 2 
        //element(locator).action
        element(by.model('first')).sendKeys('2') ;//ใช้สำหรับค้นหา html elements
        //select * 
        element(by.model('operator')).all(by.css('option[value="ADDITION"]')).click();
        //enter 5 
        element(by.model('second')).sendKeys('5');
        //click button
        element(by.id('gobutton')).click();

        let EC = browser.ExpectedConditions;

        let result = element(by.binding('latest'));

        //browser.wait(EC.conditionName(element))

        browser.wait(EC.presenceOf(result), 2000, 'Too long for calculation');

        //wait for result appeared.
        //assert if result equals to 10
        //browser.sleep(5000);

        //wait for result appeared.

        //let EC = browser.ExpectedConditions ;



        //let result = element(by.binding('latest'));

        //browser.wait(EC.conditionName(element))

        //browser.wait(EC.presenceOf(result), 2000, 'Too long for calculation') ;

        //assert if result equals to 10

        //expect(value).toXXX() ;

        expect(result.getText()).toEqual('7');
        expect(element(by.binding('latest')).getText()).toEqual('7');
        //expect().toEqual('10');

        //Find First Row of History Table
        let history = element(by.css('table')).element(by.css('tbody'));
        let historyRows = history.all(by.css('tr'));
        expect(historyRows.count()).toEqual(1);
        let col3_row1 = historyRows.get(0).element(by.binding('result.value'));
        //console.log(col3_row1.getText()); NOT WORK FOR JS ASYNCHRONOUS

        //using promise to waiting result from asynchronous function
        col3_row1.getText().then(function (text) { // the right pattern asynchronous waiting for get text
            console.log('column3 of row 1:' + text);
        });


        expect(col3_row1.getText()).toEqual('7');
    }) ;
  });
  
@isTest
public with sharing class CareerConTest {
    public CareerConTest() {

    }
    @isTest
    public static getCareersTest()
    {
        test.startTest();
        CareersCon.getCareers();
        test.stopTest();
    }
}

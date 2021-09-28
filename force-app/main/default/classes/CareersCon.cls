public class CareersCon {
    @auraEnabled
    public static LIST<Career__c> getCareers()
    {
        List<Career__c> listToReturn= new List<Career__c>();
        listToReturn=[SELECT Job_Title__c,Job_Description__c,Job_Requirement__c FROM Career__c];
        return listToReturn;
    }
}
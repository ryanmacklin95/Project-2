public class ApplicationCon {
   @auraEnabled
public static List<Application__c> getApplications(){
        List <Application__c> listToReturn= new List<Application__c>();
        return listToReturn= [SELECT First_Name__c, Last_Name__c, Phone__c, Email__c,Details__c FROM Application__c];
}
}
public with sharing class AccountController{
 @AuraEnabled(Cacheable=true)
 public static List<Account> getAccounts()
 {
    return [SELECT Name ,AnnualRevenue ,Industry from Account WITH SECURITY_ENFORCED ORDER By Name];
 }

}


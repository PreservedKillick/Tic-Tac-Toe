describe("Contact",function() {
  describe("fullName",function() {
    it("return the full name",function() {
      var testContact = Object.create(Contact);
      testContact.firstName = "alex";
      testContact.lastName = "dinnel";
      testContact.fullName().should.equal("alex dinnel");
    });
  });
});

describe("Address", function() {
  describe("fullAddress", function() {
    it("will return a full address", function() {
      var testAddress = Object.create(Address);
      testAddress.street = '123 Main street';
      testAddress.city = 'Portland';
      testAddress.state = 'Oregon';
      testAddress.fullAddress().should.equal('123 Main street, Portland, Oregon');
    });
  });
});

describe("PhoneNumber", function() {
  describe("fullPhoneNumber", function() {
    it("will return a valid phone number separated by dashes", function() {
      var testPhoneNumber = Object.create(PhoneNumber);
      testPhoneNumber.area = '808';
      testPhoneNumber.prefix = '555';
      testPhoneNumber.suffix = '5555';
      testPhoneNumber.fullPhoneNumber = '808-555-5555';
    });
  });
});
